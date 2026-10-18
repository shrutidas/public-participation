/**
 * A stand-in for the Google Sheet, for trying notes before the sheet is
 * set up: open the site with ?notes=demo. Notes live in this browser's
 * storage, so every tab of the site on this machine sees them, the way every
 * participant sees the real ones. It keeps the same rules as
 * google/notes.gs, and it fails the way the network does when the browser
 * is offline, so the outbox can be tested from DevTools. The facilitator
 * passcode is "demo".
 */

const KEY = 'pp-notes-demo-db';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
function save(rows) {
  try { localStorage.setItem(KEY, JSON.stringify(rows)); } catch {}
}

// Each change gets a later time than the one before, even within one
// millisecond, so syncing on updated_at never misses a row.
let lastT = 0;
function stamp() {
  lastT = Math.max(Date.now(), lastT + 1);
  return new Date(lastT).toISOString();
}

const wait = () => new Promise(r => setTimeout(r, 120 + Math.random() * 200));

function fail(retry, message) {
  const e = new Error(message);
  e.retry = retry;
  throw e;
}

async function reach() {
  await wait();
  if (!navigator.onLine) fail(true, 'offline');
}

const PUBLIC = ({ author_key, ...row }) => row;

export function demoTransport() {
  return {
    demo: true,

    async list(since) {
      await reach();
      const t = since ? Date.parse(since) : -Infinity;
      return load()
        .filter(r => Date.parse(r.updated_at) > t)
        .sort((a, b) => a.updated_at.localeCompare(b.updated_at))
        .map(PUBLIC);
    },

    async insert(row) {
      await reach();
      const rows = load();
      if (rows.some(r => r.id === row.id)) return 'duplicate';
      if (!/^(e|m|i|pr)\/\d+(\/out|\/cl\/\d+(\/c?ev\/\d+)?)?$/.test(row.anchor)) fail(false, 'Bad card');
      if (!row.body.trim() || row.body.length > 1000) fail(false, 'Bad note');
      const now = stamp();
      const recent = rows.filter(r => r.author_key === row.author_key && Date.parse(r.created_at) > Date.now() - 10000);
      if (recent.length >= 5) fail(true, 'Too many notes at once');
      rows.push({ ...row, hidden: false, deleted: false, created_at: now, updated_at: now });
      save(rows);
      return 'ok';
    },

    async rpc(name, args) {
      await reach();
      const rows = load();
      const ok = args.p_pass === 'demo';
      const touch = r => { r.updated_at = stamp(); };
      if (name === 'facilitator_ok') return ok;
      if (name === 'delete_own_note') {
        const r = rows.find(x => x.id === args.p_id && !x.deleted && x.author_key === args.p_token);
        if (!r) return false;
        r.deleted = true; touch(r); save(rows);
        return true;
      }
      if (!ok) fail(false, 'Wrong passcode');
      if (name === 'facilitator_set_hidden') {
        let n = 0;
        for (const r of rows) if (args.p_ids.includes(r.id) && r.hidden !== args.p_hidden) { r.hidden = args.p_hidden; touch(r); n++; }
        save(rows);
        return n;
      }
      if (name === 'facilitator_clear') {
        let n = 0;
        for (const r of rows) if (r.case_slug === args.p_case && !r.hidden && !r.deleted) { r.hidden = true; touch(r); n++; }
        save(rows);
        return n;
      }
      fail(false, `Unknown function ${name}`);
    }
  };
}
