#!/usr/bin/env node
/**
 * Rehearse a room full of people against the real notes database.
 *
 *   node scripts/notes-loadtest.mjs <project-url> <publishable-key> <facilitator-passcode> [people]
 *
 * Starts `people` (default 60) simulated browsers that sync the way the site
 * does, every 5 seconds. Then 60 of them post a note within 5 seconds, and the
 * script checks that every browser sees all of them. Then it clears the case
 * as the facilitator would and checks that every browser sees them go. It
 * writes only to the case "loadtest", which the site never shows. Remove the
 * test rows afterwards with
 *   delete from public.notes where case_slug = 'loadtest';
 */

import { randomUUID, randomBytes } from 'crypto';

const [url, key, pass, peopleArg] = process.argv.slice(2);
if (!url || !key || !pass) {
  console.error('Usage: node scripts/notes-loadtest.mjs <project-url> <publishable-key> <facilitator-passcode> [people]');
  process.exit(1);
}
const PEOPLE = Number(peopleArg) || 60;
const CASE = 'loadtest';
const POLL_MS = 5000;
const base = url.replace(/\/+$/, '') + '/rest/v1';
const headers = { apikey: key, 'Content-Type': 'application/json' };
if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;

const stats = { requests: 0, errors: 0, ms: [] };
async function req(path, opts = {}) {
  const t = Date.now();
  stats.requests++;
  try {
    const res = await fetch(base + path, { ...opts, headers: { ...headers, ...opts.headers } });
    stats.ms.push(Date.now() - t);
    if (!res.ok) {
      stats.errors++;
      throw new Error(`${res.status} ${await res.text()}`);
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  } catch (err) {
    if (!String(err.message).match(/^\d/)) stats.errors++;
    throw err;
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const COLS = 'id,case_slug,anchor,body,hidden,deleted,updated_at';

/** One simulated browser, syncing as js/notes.js does. */
function browser() {
  const notes = new Map();
  let lastMs = null;
  let stop = false;
  const pull = async () => {
    const since = lastMs == null ? '' : `&updated_at=gt.${encodeURIComponent(new Date(lastMs - 10000).toISOString())}`;
    const rows = await req(`/notes?select=${COLS}&case_slug=eq.${CASE}${since}&order=updated_at.asc,id.asc&limit=1000`);
    for (const r of rows) {
      notes.set(r.id, r);
      const t = Date.parse(r.updated_at);
      if (lastMs == null || t > lastMs) lastMs = t;
    }
  };
  (async () => {
    await sleep(Math.random() * POLL_MS);
    while (!stop) {
      try { await pull(); } catch {}
      await sleep(POLL_MS * (0.85 + Math.random() * 0.3));
    }
  })();
  return {
    visible: ids => ids.filter(id => { const n = notes.get(id); return n && !n.hidden && !n.deleted; }).length,
    stop: () => { stop = true; }
  };
}

async function until(label, check, timeoutMs = 45000) {
  const t = Date.now();
  while (Date.now() - t < timeoutMs) {
    if (check()) { console.log(`  ${label}: ${((Date.now() - t) / 1000).toFixed(1)}s`); return true; }
    await sleep(250);
  }
  console.log(`  ${label}: NOT REACHED after ${timeoutMs / 1000}s`);
  return false;
}

console.log(`Checking the passcode…`);
if (!(await req('/rpc/facilitator_ok', { method: 'POST', body: JSON.stringify({ p_pass: pass }) }))) {
  console.error('The facilitator passcode was not accepted.');
  process.exit(1);
}

console.log(`Starting ${PEOPLE} browsers…`);
const browsers = Array.from({ length: PEOPLE }, browser);
await sleep(POLL_MS + 1000);

console.log('60 notes within 5 seconds…');
const ids = [];
const posts = [];
for (let i = 0; i < 60; i++) {
  const id = randomUUID();
  ids.push(id);
  posts.push(sleep(Math.random() * 5000).then(() => req('/notes', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({
      id, case_slug: CASE, anchor: `e/${i % 10}`, anchor_label: 'load test',
      content_rev: 'loadtest', author_name: `Person ${i + 1}`,
      author_key: randomBytes(16).toString('hex'), body: `Load test note ${i + 1}`
    })
  }).then(() => true, err => { console.log(`  post failed: ${err.message}`); return false; })));
}
const posted = (await Promise.all(posts)).filter(Boolean).length;
console.log(`  posted ${posted}/60`);
const okSeen = await until(`every browser sees all ${posted}`, () => browsers.every(b => b.visible(ids) === posted));

console.log('Clearing the case as the facilitator…');
const cleared = await req('/rpc/facilitator_clear', { method: 'POST', body: JSON.stringify({ p_case: CASE, p_pass: pass }) });
console.log(`  hid ${cleared}`);
const okCleared = await until('every browser sees none', () => browsers.every(b => b.visible(ids) === 0));

browsers.forEach(b => b.stop());
const sorted = stats.ms.sort((a, b) => a - b);
const pct = p => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
console.log(`\nRequests: ${stats.requests}, errors: ${stats.errors}, latency p50 ${pct(0.5)}ms, p95 ${pct(0.95)}ms, max ${sorted[sorted.length - 1]}ms`);
const pass_ = okSeen && okCleared && posted === 60 && stats.errors === 0;
console.log(pass_ ? 'PASSED' : 'FAILED');
console.log(`\nRemove the test rows: delete from public.notes where case_slug = '${CASE}';`);
process.exit(pass_ ? 0 : 1);
