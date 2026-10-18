/**
 * Participants' notes on the map.
 *
 * Every card on the map can carry notes. A card with notes shows a small
 * sticky badge with a count; selecting the card shows its notes in the detail
 * pane, with a box under the pane to add one. The Notes button over the map
 * opens a panel listing every note on the case.
 *
 * Built for a room of people on venue Wi-Fi:
 *   - app.js loads this module after the map is drawn, so if the database is
 *     unreachable the map works exactly as before.
 *   - Notes are kept in a Google Sheet, reached through a small Apps Script
 *     web app (google/notes.gs). No third-party script runs on the page:
 *     plain fetch to the web app's link.
 *   - Other people's notes arrive by polling every few seconds, which works
 *     on any network. Only rows changed since the last poll are sent.
 *   - A note is saved on the device before it is sent and retried until the
 *     database has it. The id is made here, so a retry can never post twice.
 *   - A sync touches only the badges and lists that changed; it never redraws
 *     the map.
 *
 * The sheet's rules: google/notes.gs. Setup: README.
 */

import { NOTES } from './notes-config.js';
import { NOTE_CARDS, cardAnchor, selAnchor, anchorSel, selLabel } from './spine-view.js';

// Polls ask for rows changed a little before the last one seen, to catch
// changes that committed late. Rows already held are simply merged again.
const OVERLAP_MS = 10000;
const SLOW_MS = 8000;
const STUCK_MS = 60000;
const MIN_POST_GAP_MS = 1500;

/* ------------------------------- storage --------------------------------- */

/* Storage can be blocked or full (private windows, strict settings). Every
   read and write falls back to memory, so the page keeps working and only
   loses what it would have remembered across a reload. */
const mem = new Map();
const store = {
  get(k, session = false) {
    try {
      const v = (session ? sessionStorage : localStorage).getItem(k);
      if (v != null) return v;
    } catch {}
    return mem.has(k) ? mem.get(k) : null;
  },
  set(k, v, session = false) {
    mem.set(k, v);
    try {
      if (v == null) (session ? sessionStorage : localStorage).removeItem(k);
      else (session ? sessionStorage : localStorage).setItem(k, v);
    } catch {}
  },
  json(k, fallback) {
    try { return JSON.parse(this.get(k)) ?? fallback; } catch { return fallback; }
  },
  setJson(k, v) { this.set(k, JSON.stringify(v)); }
};

const K = {
  token: 'pp-notes-token',
  name: 'pp-notes-name',
  mine: 'pp-notes-mine',
  outbox: 'pp-notes-outbox',
  drafts: 'pp-notes-drafts',
  hideBadges: 'pp-notes-hidden',
  pass: 'pp-notes-pass'
};

function randomHex(bytes) {
  const b = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(b, x => x.toString(16).padStart(2, '0')).join('');
}

/** A v4 UUID. randomUUID needs a secure page and a 2022 browser. */
function uuid() {
  try { if (crypto.randomUUID) return crypto.randomUUID(); } catch {}
  const h = randomHex(16).split('');
  h[12] = '4';
  h[16] = '89ab'[parseInt(h[16], 16) & 3];
  const s = h.join('');
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`;
}

/* ------------------------------ transports -------------------------------- */

class NoteError extends Error {
  constructor(message, retry) { super(message); this.retry = retry; }
}

/** The Google Sheet, through the Apps Script web app in google/notes.gs.
   Requests are ones a browser sends without asking permission first (a GET,
   or a POST of plain text), because the web app cannot answer that check. */
function sheetTransport(execUrl) {
  async function call(query, body) {
    const ctl = typeof AbortController === 'function' ? new AbortController() : null;
    // Google can take a few seconds to start the script after a quiet spell.
    const timer = ctl && setTimeout(() => ctl.abort(), 20000);
    let out;
    try {
      const res = await fetch(execUrl + query, {
        method: body == null ? 'GET' : 'POST',
        headers: body == null ? undefined : { 'Content-Type': 'text/plain;charset=utf-8' },
        body: body == null ? undefined : JSON.stringify(body),
        cache: 'no-store',
        signal: ctl?.signal
      });
      out = await res.json();
    } catch {
      // Offline, timed out, or Google sent a page instead of an answer (busy,
      // or the web app is not shared with everyone): all worth retrying.
      throw new NoteError('No connection', true);
    } finally {
      clearTimeout(timer);
    }
    if (out?.ok) return out.result;
    throw new NoteError(out?.error || 'The notes sheet had a problem', out?.retry !== false);
  }

  return {
    list(since) { return call(`?op=list${since ? `&since=${encodeURIComponent(since)}` : ''}`); },
    insert(row) { return call('', { op: 'insert', row }); },
    rpc(name, args) { return call('', { op: 'rpc', name, args }); }
  };
}

/* --------------------------------- DOM ----------------------------------- */

const $ = id => document.getElementById(id);

function h(tag, props = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'text') n.textContent = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (k in n && typeof v !== 'string') n[k] = v;
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null && c !== false) n.append(c);
  return n;
}

function fmtTime(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return d.toDateString() === new Date().toDateString()
    ? time
    : `${d.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${time}`;
}

const KIND_LABEL = {
  entry: 'Event', mech: 'Existing mechanism', impact: 'Measured outcome',
  prop: 'Proposal', propout: 'Proposed outcome', propclaim: 'Claim', propev: 'Evidence'
};

/* ------------------------------- the module ------------------------------- */

/**
 * Start notes. `api` is what app.js shares: curCase(), curSpine(), curSel(),
 * isSpine(), and select(kind, idx, opts). Resolves to null when notes are not
 * set up, so the caller has nothing to do.
 */
export async function initNotes(api) {
  const params = new URLSearchParams(window.location.search);
  let tx;
  if (params.get('notes') === 'demo') tx = (await import('./notes-demo.js')).demoTransport();
  else if (NOTES.sheetUrl) tx = sheetTransport(NOTES.sheetUrl.trim());
  else return null;

  /* ---- state ---- */

  const notes = new Map();               // id -> row, from the database or still sending
  let lastMs = null;                     // newest updated_at seen
  let synced = false;                    // has one sync succeeded
  let failures = 0;
  let timer = null;
  let pulling = null;
  let flushing = false;
  let flushTimer = null;
  let flushFailures = 0;
  let lastPost = 0;
  let statusMsg = '';

  let token = store.get(K.token);
  if (!token || token.length < 32) { token = randomHex(16); store.set(K.token, token); }
  const mine = new Set(store.json(K.mine, []));

  const facilitate = params.has('facilitate');
  let pass = facilitate ? store.get(K.pass, true) : null;

  // The map's cards and their badges, rebuilt whenever the map is.
  let cards = new Map();                 // anchor -> card element
  const badges = new Map();              // anchor -> badge element
  let counts = new Map();                // anchor -> count shown
  let labelsFor = null;                  // { slug, map: anchor -> current title | null }
  let target = null;                     // { slug, anchor, label, kind }

  /* ---- static UI from index.html ---- */

  const mapEl = $('ch-map');
  const openBtn = $('nt-open');
  const countEl = $('nt-count');
  const panel = $('nt-panel');
  const panelBody = $('nt-panel-body');
  const form = $('nt-compose');
  const targetEl = $('nt-target');
  const nameRow = $('nt-name-row');
  const nameInput = $('nt-name');
  const asEl = $('nt-as');
  const bodyInput = $('nt-body');
  const statusEl = $('nt-status');
  const listEl = h('section', { class: 'nt-list', 'aria-live': 'polite' });

  openBtn.hidden = false;
  if (tx.demo) openBtn.title = 'Demo: notes are kept in this browser only';
  mapEl.classList.toggle('nt-hide', store.get(K.hideBadges) === '1');

  /* ---- what is visible ---- */

  const slug = () => api.curCase().slug;

  /** The current title of every card a note on this case names. */
  function currentLabel(anchor) {
    const s = slug();
    if (labelsFor?.slug !== s) labelsFor = { slug: s, map: new Map() };
    if (!labelsFor.map.has(anchor)) {
      const sp = api.curSpine();
      const sel = anchorSel(anchor);
      labelsFor.map.set(anchor, sp && sel ? selLabel(api.curCase(), sp, sel) : null);
    }
    return labelsFor.map.get(anchor);
  }

  /** A note is on its card only while the card still has the title it was
     written against; otherwise it is listed under content that changed. */
  const onCard = n => {
    const now = currentLabel(n.anchor);
    return now != null && (!n.anchor_label || n.anchor_label === now);
  };

  const shown = n => !n.deleted && !n.hidden;

  function caseNotes({ includeHidden = false } = {}) {
    const s = slug();
    const out = [];
    for (const n of notes.values()) {
      if (n.case_slug !== s || n.deleted) continue;
      if (n.hidden && !includeHidden) continue;
      out.push(n);
    }
    return out.sort((a, b) => (a.created_at < b.created_at ? -1 : 1));
  }

  /* ---- drawing, batched to one pass per frame ---- */

  let frame = 0;
  function invalidate() {
    if (frame) return;
    const run = () => { frame = 0; draw(); };
    frame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame(run) : setTimeout(run, 16);
  }

  function draw() {
    if (!api.isSpine()) return;
    drawBadges();
    drawList();
    drawCount();
    drawStatus();
    if (panel.classList.contains('open')) drawPanel();
  }

  function drawBadges() {
    const next = new Map();
    for (const n of caseNotes()) {
      if (!onCard(n)) continue;
      next.set(n.anchor, (next.get(n.anchor) || 0) + 1);
    }
    for (const anchor of new Set([...counts.keys(), ...next.keys()])) {
      const c = next.get(anchor) || 0;
      if (c === (counts.get(anchor) || 0) && (c === 0 || badges.has(anchor))) continue;
      const card = cards.get(anchor);
      let b = badges.get(anchor);
      if (!c) { b?.remove(); badges.delete(anchor); continue; }
      if (!card) continue;
      if (!b) {
        b = h('span', { class: 'nt-badge' });
        // An event with mechanism stars puts the badge in the same row.
        (card.querySelector(':scope > .sp-ent-stars') || card).append(b);
        badges.set(anchor, b);
      }
      b.replaceChildren(String(c), h('span', { class: 'nt-vh', text: c === 1 ? ' note' : ' notes' }));
    }
    counts = next;
  }

  function drawCount() {
    const n = caseNotes().length;
    countEl.textContent = n ? String(n) : '';
  }

  function noteItem(n, { showCard = false, facil = false } = {}) {
    const own = mine.has(n.id);
    const meta = h('div', { class: 'nt-meta' },
      h('b', { text: n.author_name || 'Anonymous' }),
      ` · ${n.pending ? 'sending…' : fmtTime(n.created_at)}`,
      n.hidden ? h('span', { class: 'nt-tag', text: 'Hidden' }) : null,
      own ? h('button', { type: 'button', class: 'nt-link', text: 'Delete', onclick: () => removeOwn(n) }) : null,
      facil && pass ? h('button', {
        type: 'button', class: 'nt-link',
        text: n.hidden ? 'Restore' : 'Hide',
        onclick: () => setHidden([n.id], !n.hidden)
      }) : null);
    return h('li', { class: `nt-item${n.pending ? ' nt-pending' : ''}${n.hidden ? ' nt-hidden' : ''}` },
      meta,
      showCard ? h('div', { class: 'nt-was', text: `On: ${n.anchor_label}` }) : null,
      h('p', { class: 'nt-text', text: n.body }));
  }

  /** The notes on the selected card, under its detail. */
  function drawList() {
    if (!target) { listEl.replaceChildren(); return; }
    const list = caseNotes().filter(n => n.anchor === target.anchor && onCard(n));
    listEl.replaceChildren(...(list.length ? [
      h('h4', { class: 'nt-h', text: `Notes (${list.length})` }),
      h('ul', { class: 'nt-ul' }, list.map(n => noteItem(n)))
    ] : []));
  }

  // Say so as soon as a note is held up or two syncs in a row fail; offer the
  // shared doc only once it has lasted a minute, or if notes never loaded.
  function drawStatus() {
    const waiting = outbox();
    const held = waiting.some(o => Date.now() - o.t > SLOW_MS);
    const stuck = waiting.some(o => Date.now() - o.t > STUCK_MS);
    const offline = (!synced && failures > 0) || held || failures >= 2;
    const kids = [];
    if (offline) {
      kids.push(waiting.length
        ? 'No connection. Your notes are saved here and will send when it comes back.'
        : 'Notes are offline right now. Retrying…');
      if (NOTES.fallbackUrl && (stuck || !synced || failures >= 6)) {
        kids.push(' ', h('a', { href: NOTES.fallbackUrl, target: '_blank', rel: 'noopener', text: 'Use the shared doc' }));
      }
    } else if (statusMsg) {
      kids.push(statusMsg);
    }
    statusEl.replaceChildren(...kids);
    statusEl.classList.toggle('nt-warn', offline);
  }

  function say(msg) {
    statusMsg = msg;
    drawStatus();
    clearTimeout(say.t);
    if (msg) say.t = setTimeout(() => { statusMsg = ''; drawStatus(); }, 6000);
  }

  /* ---- the panel ---- */

  function drawPanel() {
    const facil = facilitate && Boolean(pass);
    const list = caseNotes({ includeHidden: facil });
    const kids = [];

    kids.push(h('label', { class: 'nt-opt' },
      h('input', {
        type: 'checkbox',
        checked: !mapEl.classList.contains('nt-hide'),
        onchange: e => {
          mapEl.classList.toggle('nt-hide', !e.target.checked);
          store.set(K.hideBadges, e.target.checked ? '0' : '1');
        }
      }),
      ' Show note counts on the map'));

    if (facilitate) kids.push(facilBox(list));

    // One group per card, the most recently active first.
    const groups = new Map();
    const changed = [];
    for (const n of list) {
      if (!onCard(n)) { changed.push(n); continue; }
      if (!groups.has(n.anchor)) groups.set(n.anchor, []);
      groups.get(n.anchor).push(n);
    }
    const latest = g => g[g.length - 1].created_at;
    const ordered = [...groups.entries()].sort((a, b) => (latest(a[1]) < latest(b[1]) ? 1 : -1));

    if (!list.length) kids.push(h('p', { class: 'nt-empty', text: 'No notes on this case yet. Select a card on the map, then write in the box under its detail.' }));

    for (const [anchor, g] of ordered) {
      const sel = anchorSel(anchor);
      kids.push(h('div', { class: 'nt-group' },
        h('button', { type: 'button', class: 'nt-card', onclick: () => goTo(anchor) },
          h('span', { class: 'nt-card-kind', text: KIND_LABEL[sel.kind] }),
          h('span', { class: 'nt-card-t', text: currentLabel(anchor) })),
        h('ul', { class: 'nt-ul' }, g.map(n => noteItem(n, { facil })))));
    }
    if (changed.length) {
      kids.push(h('div', { class: 'nt-group nt-changed' },
        h('h4', { class: 'nt-h', text: 'Notes on content that changed' }),
        h('p', { class: 'nt-empty', text: 'These cards have been edited or moved since the note was written.' }),
        h('ul', { class: 'nt-ul' }, changed.map(n => noteItem(n, { showCard: true, facil })))));
    }
    const top = panelBody.scrollTop;
    panelBody.replaceChildren(...kids);
    panelBody.scrollTop = top;
  }

  function facilBox(list) {
    if (!pass) {
      const input = h('input', { type: 'password', class: 'nt-input', placeholder: 'Facilitator passcode', autocomplete: 'current-password' });
      const unlock = async e => {
        e.preventDefault();
        try {
          if (await tx.rpc('facilitator_ok', { p_pass: input.value })) {
            pass = input.value;
            store.set(K.pass, pass, true);
            drawPanel();
          } else say('That passcode is not right.');
        } catch { say('Could not check the passcode. Try again.'); }
      };
      return h('form', { class: 'nt-facil', onsubmit: unlock },
        h('div', { class: 'nt-facil-h', text: 'Facilitator' }),
        h('div', { class: 'nt-row' }, input, h('button', { type: 'submit', class: 'nt-btn', text: 'Unlock' })),
        h('button', { type: 'button', class: 'nt-btn nt-btn-quiet', text: 'Export CSV', onclick: () => exportCsv(list) }));
    }
    const live = list.filter(shown).length;
    return h('div', { class: 'nt-facil' },
      h('div', { class: 'nt-facil-h', text: 'Facilitator' }),
      h('div', { class: 'nt-row' },
        h('button', {
          type: 'button', class: 'nt-btn', text: `Clear this case (${live})`, disabled: !live,
          onclick: async () => {
            if (!window.confirm(`Hide all ${live} notes on this case for everyone? You can restore them one by one here.`)) return;
            try { await tx.rpc('facilitator_clear', { p_case: slug(), p_pass: pass }); say('Cleared.'); pullSoon(); }
            catch (err) { facilFail(err); }
          }
        }),
        h('button', { type: 'button', class: 'nt-btn nt-btn-quiet', text: 'Export CSV', onclick: () => exportCsv(list) })));
  }

  function facilFail(err) {
    if (err && err.retry === false && /passcode/i.test(err.message)) {
      pass = null;
      store.set(K.pass, null, true);
      drawPanel();
      say('The passcode has changed. Enter it again.');
    } else say('That did not go through. Check the connection and try again.');
  }

  async function setHidden(ids, hidden) {
    for (const id of ids) { const n = notes.get(id); if (n) n.hidden = hidden; }
    invalidate();
    try { await tx.rpc('facilitator_set_hidden', { p_ids: ids, p_hidden: hidden, p_pass: pass }); pullSoon(); }
    catch (err) {
      for (const id of ids) { const n = notes.get(id); if (n) n.hidden = !hidden; }
      invalidate();
      facilFail(err);
    }
  }

  /** Every note on the case, for a spreadsheet. A leading = + - @ would make
     a spreadsheet run the cell as a formula, so those cells get a quote. */
  function exportCsv(list) {
    const cell = v => {
      let s = String(v ?? '');
      if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
      return `"${s.replace(/"/g, '""')}"`;
    };
    const rows = [['case', 'card', 'card title', 'name', 'note', 'time', 'hidden', 'site version']];
    for (const n of list) {
      rows.push([n.case_slug, n.anchor, n.anchor_label, n.author_name, n.body, n.created_at, n.hidden ? 'yes' : '', n.content_rev]);
    }
    const csv = '﻿' + rows.map(r => r.map(cell).join(',')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = h('a', { href: URL.createObjectURL(blob), download: `notes-${slug()}-${new Date().toISOString().slice(0, 10)}.csv` });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  }

  function setPanel(open) {
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', String(!open));
    openBtn.setAttribute('aria-expanded', String(open));
    if (open) { drawPanel(); pullSoon(); }
  }

  function goTo(anchor) {
    const sel = anchorSel(anchor);
    if (!sel) return;
    if (window.matchMedia('(max-width: 900px)').matches) setPanel(false);
    api.select(sel.kind, sel.idx, { claimIdx: sel.claimIdx ?? null, evIdx: sel.evIdx ?? null, evKind: sel.evKind ?? null });
    const card = sel.kind === 'mech'
      ? mapEl.querySelector(`.sp-star[data-m="${sel.idx}"]`)
      : cards.get(anchor);
    card?.scrollIntoView({ block: 'center', inline: 'center' });
  }

  /* ---- the composer ---- */

  function drafts() { return store.json(K.drafts, {}); }
  const draftKey = () => `${target.slug}|${target.anchor}`;

  function drawComposer() {
    form.hidden = !target;
    if (!target) return;
    targetEl.textContent = target.label;
    const d = drafts()[draftKey()];
    if (document.activeElement !== bodyInput) bodyInput.value = d || '';
    const name = store.get(K.name);
    const known = name != null;
    nameRow.hidden = known;
    asEl.hidden = !known;
    if (known) asEl.firstElementChild.textContent = name || 'Anonymous';
  }

  let draftTimer = null;
  bodyInput.addEventListener('input', () => {
    clearTimeout(draftTimer);
    const key = target && draftKey();
    const v = bodyInput.value;
    draftTimer = setTimeout(() => {
      if (!key) return;
      const all = drafts();
      if (v.trim()) all[key] = v; else delete all[key];
      store.setJson(K.drafts, all);
    }, 300);
  });

  // Enter posts on a keyboard; on a touch screen Enter is a new line and the
  // button posts. Enter during IME composition (Chinese, Japanese, Korean)
  // picks a character and must never post.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  bodyInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter' || e.shiftKey || e.isComposing || e.keyCode === 229) return;
    if (!finePointer.matches) return;
    e.preventDefault();
    if (!e.repeat) post();
  });

  form.addEventListener('submit', e => { e.preventDefault(); post(); });

  $('nt-as-change').addEventListener('click', () => {
    nameRow.hidden = false;
    asEl.hidden = true;
    nameInput.value = store.get(K.name) || '';
    nameInput.focus();
  });

  /* ---- sending ---- */

  const outbox = () => store.json(K.outbox, []);
  const setOutbox = list => store.setJson(K.outbox, list);

  function post() {
    if (!target) return;
    const body = bodyInput.value.trim();
    if (!body) { bodyInput.focus(); return; }
    if (Date.now() - lastPost < MIN_POST_GAP_MS) { say('One moment…'); return; }
    lastPost = Date.now();

    if (!nameRow.hidden) store.set(K.name, nameInput.value.trim().slice(0, 60));
    const row = {
      id: uuid(),
      case_slug: target.slug,
      anchor: target.anchor,
      anchor_label: target.label.slice(0, 300),
      content_rev: NOTES.contentRev,
      author_name: (store.get(K.name) || '').slice(0, 60),
      author_key: token,
      body: body.slice(0, 1000)
    };
    setOutbox([...outbox(), { row, t: Date.now() }]);
    mine.add(row.id);
    store.setJson(K.mine, [...mine]);

    const { author_key, ...view } = row;
    notes.set(row.id, { ...view, hidden: false, deleted: false, created_at: new Date().toISOString(), pending: true });

    bodyInput.value = '';
    const all = drafts(); delete all[draftKey()]; store.setJson(K.drafts, all);
    clearTimeout(draftTimer);
    drawComposer();
    draw();
    listEl.lastElementChild?.lastElementChild?.scrollIntoView({ block: 'nearest' });
    flush();
  }

  /** Send everything waiting, oldest first. Stops at the first failure that
     a retry could fix, and tries again later. */
  async function flush() {
    if (flushing) return;
    flushing = true;
    clearTimeout(flushTimer);
    let wait = 0;
    try {
      for (const item of outbox()) {
        try {
          await tx.insert(item.row);
          setOutbox(outbox().filter(o => o.row.id !== item.row.id));
          const n = notes.get(item.row.id);
          if (n) n.pending = false;
          flushFailures = 0;
        } catch (err) {
          if (err.retry === false) {
            // The database will never take this one: drop it, and hand the
            // text back if the box is empty, so nothing typed is lost.
            setOutbox(outbox().filter(o => o.row.id !== item.row.id));
            notes.delete(item.row.id);
            if (target && target.anchor === item.row.anchor && !bodyInput.value) bodyInput.value = item.row.body;
            say(`That note could not be saved (${err.message}).`);
            continue;
          }
          flushFailures++;
          wait = Math.min(30000, 2000 * 2 ** Math.min(flushFailures - 1, 4));
          break;
        }
      }
    } finally {
      flushing = false;
      invalidate();
    }
    if (wait) flushTimer = setTimeout(flush, wait);
    else pullSoon();
  }

  async function removeOwn(n) {
    if (!window.confirm('Delete your note?')) return;
    if (outbox().some(o => o.row.id === n.id)) {
      setOutbox(outbox().filter(o => o.row.id !== n.id));
      notes.delete(n.id);
      invalidate();
      return;
    }
    n.deleted = true;
    invalidate();
    try {
      if (!(await tx.rpc('delete_own_note', { p_id: n.id, p_token: token }))) throw new NoteError('not yours', false);
      pullSoon();
    } catch {
      n.deleted = false;
      invalidate();
      say('Could not delete that note. Try again.');
    }
  }

  /* ---- syncing ---- */

  function merge(rows) {
    let changed = false;
    for (const r of rows) {
      const had = notes.get(r.id);
      if (!had || had.updated_at !== r.updated_at || had.pending) {
        notes.set(r.id, r);
        changed = true;
      }
      const t = Date.parse(r.updated_at);
      if (!Number.isNaN(t) && (lastMs == null || t > lastMs)) lastMs = t;
    }
    if (changed) invalidate();
  }

  function pull() {
    if (pulling) return pulling;
    const since = lastMs == null ? null : new Date(lastMs - OVERLAP_MS).toISOString();
    pulling = tx.list(since)
      .then(rows => { merge(rows); synced = true; failures = 0; })
      .catch(() => { failures++; })
      .finally(() => { pulling = null; invalidate(); });
    return pulling;
  }

  // One loop: poll, back off on failure, and stop while the tab is hidden.
  function schedule(ms) {
    clearTimeout(timer);
    timer = setTimeout(tick, ms);
  }
  async function tick() {
    if (document.hidden) return;
    await pull();
    if (outbox().length && !flushing) flush();
    const base = NOTES.pollMs || 5000;
    schedule(failures
      ? Math.min(30000, base * 2 ** Math.min(failures, 3))
      : base * (0.85 + Math.random() * 0.3));
  }
  function pullSoon() { schedule(300); }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) { schedule(0); flush(); }
  });
  window.addEventListener('online', () => { schedule(0); flush(); });
  // Another tab of the site on this device posted or deleted.
  window.addEventListener('storage', e => { if (e.key === K.outbox || e.key === 'pp-notes-demo-db') pullSoon(); });

  /* ---- wiring ---- */

  openBtn.addEventListener('click', () => setPanel(!panel.classList.contains('open')));
  $('nt-close').addEventListener('click', () => setPanel(false));

  // Notes that were waiting from an earlier visit show at once, still sending.
  for (const { row } of outbox()) {
    const { author_key, ...view } = row;
    notes.set(row.id, { ...view, hidden: false, deleted: false, created_at: new Date().toISOString(), pending: true });
  }

  const ctl = {
    /** Called by app.js after every render of the map view. `built` is true
       when the map's DOM was just rebuilt. */
    onRender(built) {
      if (built) {
        cards = new Map();
        for (const c of mapEl.querySelectorAll(NOTE_CARDS)) cards.set(cardAnchor(c), c);
        badges.clear();
        counts = new Map();
      }
      const sel = api.curSel();
      const anchor = api.curSpine() ? selAnchor(sel) : null;
      const label = anchor ? currentLabel(anchor) : null;
      target = label ? { slug: slug(), anchor, label, kind: sel.kind } : null;
      // The detail pane was just rebuilt, so the list goes back under it.
      if (target) $('ch-detail').append(listEl);
      drawComposer();
      draw();
    },
    /** Esc closes the panel, or leaves the note box. True when it did. */
    handleEscape() {
      if (panel.classList.contains('open')) { setPanel(false); return true; }
      if (form.contains(document.activeElement)) { document.activeElement.blur(); return true; }
      return false;
    }
  };

  ctl.onRender(true);
  schedule(0);
  return ctl;
}
