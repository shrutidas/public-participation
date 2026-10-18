#!/usr/bin/env node
/**
 * Rehearse a room full of people against the real notes sheet.
 *
 *   node scripts/notes-loadtest.mjs <web-app-url> <facilitator-passcode> [people]
 *
 * Starts `people` (default 40) simulated browsers that sync the way the site
 * does, every 6 seconds. Then 40 of them post a note within 5 seconds, and the
 * script checks that every browser sees all of them. Then it clears the case
 * as the facilitator would and checks that every browser sees them go. It
 * writes only to the case "loadtest", which the site never shows, and removes
 * those rows from the sheet at the end.
 */

import { randomUUID, randomBytes } from 'crypto';

const [execUrl, pass, peopleArg] = process.argv.slice(2);
if (!execUrl || !pass) {
  console.error('Usage: node scripts/notes-loadtest.mjs <web-app-url> <facilitator-passcode> [people]');
  process.exit(1);
}
const PEOPLE = Number(peopleArg) || 40;
const POSTS = 40;
const CASE = 'loadtest';
const POLL_MS = 6000;

const stats = { requests: 0, errors: 0, ms: [] };
async function call(query, body) {
  const t = Date.now();
  stats.requests++;
  try {
    const res = await fetch(execUrl + query, body == null ? {} : {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body)
    });
    const text = await res.text();
    stats.ms.push(Date.now() - t);
    let out;
    try { out = JSON.parse(text); } catch { throw new Error(`HTTP ${res.status}: not an answer from the script (${text.slice(0, 80).replace(/\s+/g, ' ')}…)`); }
    if (!out.ok) throw new Error(out.error);
    return out.result;
  } catch (err) {
    stats.errors++;
    throw err;
  }
}
const rpc = (name, args) => call('', { op: 'rpc', name, args });

const sleep = ms => new Promise(r => setTimeout(r, ms));

/** One simulated browser, syncing as js/notes.js does. */
function browser() {
  const notes = new Map();
  let lastMs = null;
  let stop = false;
  const pull = async () => {
    const since = lastMs == null ? '' : `&since=${encodeURIComponent(new Date(lastMs - 10000).toISOString())}`;
    const rows = await call(`?op=list${since}`);
    for (const r of rows) {
      if (r.case_slug !== CASE) continue;
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

async function until(label, check, timeoutMs = 60000) {
  const t = Date.now();
  while (Date.now() - t < timeoutMs) {
    if (check()) { console.log(`  ${label}: ${((Date.now() - t) / 1000).toFixed(1)}s`); return true; }
    await sleep(250);
  }
  console.log(`  ${label}: NOT REACHED after ${timeoutMs / 1000}s`);
  return false;
}

console.log('Checking the link and the passcode…');
try {
  if (!(await rpc('facilitator_ok', { p_pass: pass }))) {
    console.error('The script answered, but the passcode was not accepted. Check PASSCODE in Script properties (16 or more characters).');
    process.exit(1);
  }
} catch (err) {
  console.error(`Could not reach the script: ${err.message}`);
  console.error('Check the link ends in /exec and the deployment has "Who has access: Anyone".');
  process.exit(1);
}

console.log(`Starting ${PEOPLE} browsers…`);
const browsers = Array.from({ length: PEOPLE }, browser);
await sleep(POLL_MS + 1000);

console.log(`${POSTS} notes within 5 seconds…`);
const ids = [];
const posts = [];
for (let i = 0; i < POSTS; i++) {
  const id = randomUUID();
  ids.push(id);
  const row = {
    id, case_slug: CASE, anchor: `e/${i % 10}`, anchor_label: 'load test',
    content_rev: 'loadtest', author_name: `Person ${i + 1}`,
    author_key: randomBytes(16).toString('hex'), body: `Load test note ${i + 1}`
  };
  // A browser retries a busy answer, so the test does too.
  posts.push(sleep(Math.random() * 5000).then(async () => {
    for (let attempt = 0; attempt < 4; attempt++) {
      try { await call('', { op: 'insert', row }); return true; } catch (err) {
        console.log(`  post ${i + 1} attempt ${attempt + 1} failed: ${err.message}`);
        await sleep(2000 * 2 ** attempt);
      }
    }
    return false;
  }));
}
const posted = (await Promise.all(posts)).filter(Boolean).length;
console.log(`  posted ${posted}/${POSTS}`);
const okSeen = await until(`every browser sees all ${posted}`, () => browsers.every(b => b.visible(ids) === posted));

console.log('Clearing the case as the facilitator…');
const cleared = await rpc('facilitator_clear', { p_case: CASE, p_pass: pass });
console.log(`  hid ${cleared}`);
const okCleared = await until('every browser sees none', () => browsers.every(b => b.visible(ids) === 0));

browsers.forEach(b => b.stop());
console.log('Removing the test rows from the sheet…');
console.log(`  removed ${await rpc('remove_test_notes', { p_pass: pass })}`);

const sorted = stats.ms.sort((a, b) => a - b);
const pct = p => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
console.log(`\nRequests: ${stats.requests}, failed: ${stats.errors}, response time p50 ${pct(0.5)}ms, p95 ${pct(0.95)}ms, max ${sorted[sorted.length - 1]}ms`);
// A few busy answers that a retry fixed are fine; lost notes or stuck browsers are not.
const ok = okSeen && okCleared && posted === POSTS && stats.errors <= stats.requests * 0.02;
console.log(ok ? 'PASSED' : 'FAILED');
process.exit(ok ? 0 : 1);
