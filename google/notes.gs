/**
 * Participant notes for the map, kept in this Google Sheet.
 *
 * Paste this whole file into the sheet's Extensions → Apps Script editor and
 * deploy it as a web app (see README, "Participant notes"). The site reads and
 * writes notes through the web app's /exec link. Each note is one row of the
 * "notes" tab, which the script makes on first use.
 *
 * What anyone with the link can do:
 *   read every note, except who wrote it (author_key is never sent out),
 *   add a note (the script sets the flags and the times),
 *   delete their own note, by proving they hold the token they posted with.
 * Hiding notes and clearing a case need the facilitator passcode, kept in
 * Project Settings → Script properties as PASSCODE. Adding a property CLOSED
 * with the value yes stops new notes at once; delete it to reopen.
 *
 * Nothing is removed from the sheet: a deleted or hidden note is flagged, and
 * its updated_at moves, so every browser learns about the change on its next
 * sync. To hide a note by hand, type TRUE in its "hidden" cell.
 */

var SHEET = 'notes';
var COLS = ['id', 'case_slug', 'anchor', 'anchor_label', 'content_rev', 'author_name', 'body',
            'hidden', 'deleted', 'created_at', 'updated_at', 'author_key'];
var C = {};
COLS.forEach(function (c, i) { C[c] = i; });
var PUBLIC = COLS.slice(0, C.author_key);
var TEXT = ['case_slug', 'anchor_label', 'content_rev', 'author_name', 'body'];
var ANCHOR = /^(e|m|i|pr)\/\d+(\/out|\/cl\/\d+(\/c?ev\/\d+)?)?$/;
var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
// The load test writes only to this case, which the site never shows.
var TEST_CASE = 'loadtest';

/* ------------------------------ requests ---------------------------------- */

function doGet(e) {
  return respond(function () {
    var p = (e && e.parameter) || {};
    if (p.op === 'list') return list(p.since || '');
    if (p.op === 'ping') return true;
    throw fail('Unknown request');
  });
}

function doPost(e) {
  return respond(function () {
    var req;
    try { req = JSON.parse(e.postData.contents); } catch (err) { throw fail('Bad request'); }
    if (req.op === 'insert') return insert(req.row || {});
    if (req.op === 'rpc') return rpc(String(req.name), req.args || {});
    throw fail('Unknown request');
  });
}

/** A refusal the browser understands. `retry` says whether trying again later can help. */
function fail(message, retry) {
  var e = new Error(message);
  e.note = true;
  e.retry = !!retry;
  return e;
}

function respond(fn) {
  var out;
  try {
    out = { ok: true, result: fn() };
  } catch (err) {
    out = err && err.note
      ? { ok: false, error: err.message, retry: err.retry }
      : { ok: false, error: 'The comments sheet had a problem', retry: true };
    if (!(err && err.note)) console.error(err);
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

/* ------------------------------- the sheet -------------------------------- */

function sheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName(SHEET);
  if (s) return s;
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) throw fail('Busy', true);
  try {
    s = ss.getSheetByName(SHEET);
    if (!s) {
      s = ss.insertSheet(SHEET);
      // Plain text everywhere, so a note that starts with "=" stays words and
      // never becomes a formula.
      s.getRange(1, 1, s.getMaxRows(), COLS.length).setNumberFormat('@');
      s.getRange(1, 1, 1, COLS.length).setValues([COLS]).setFontWeight('bold');
      s.setFrozenRows(1);
    }
    return s;
  } finally {
    lock.releaseLock();
  }
}

/** Every row, as objects, with the sheet row number in `_row`. */
function readAll(s) {
  var n = s.getLastRow() - 1;
  if (n < 1) return [];
  var values = s.getRange(2, 1, n, COLS.length).getValues();
  var rows = [];
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    var id = text(v[C.id]).toLowerCase();
    if (!UUID.test(id)) continue;
    var r = { _row: i + 2 };
    COLS.forEach(function (c, j) { r[c] = text(v[j]); });
    r.id = id;
    r.hidden = flag(v[C.hidden]);
    r.deleted = flag(v[C.deleted]);
    rows.push(r);
  }
  return rows;
}

function text(v) {
  if (v instanceof Date) return v.toISOString();
  var s = v == null ? '' : String(v);
  // Undo the quote written in front of text that starts like a formula.
  return /^'[=+\-@]/.test(s) ? s.slice(1) : s;
}

function flag(v) {
  return v === true || String(v).trim().toUpperCase() === 'TRUE';
}

/** Text from a participant, made safe to put in a cell. */
function cell(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function toPublic(r) {
  var o = {};
  PUBLIC.forEach(function (c) { o[c] = r[c]; });
  return o;
}

/** A time later than every change already in the sheet. */
function stamp(rows) {
  var t = Date.now();
  rows.forEach(function (r) {
    var u = Date.parse(r.updated_at);
    if (u >= t) t = u + 1;
  });
  return new Date(t).toISOString();
}

/** Write the hidden, deleted and updated_at cells of the rows that changed. */
function writeFlags(s, changed) {
  changed.forEach(function (r) {
    s.getRange(r._row, C.hidden + 1, 1, 2).setValues([[r.hidden ? 'TRUE' : 'FALSE', r.deleted ? 'TRUE' : 'FALSE']]);
    s.getRange(r._row, C.updated_at + 1).setValue(r.updated_at);
  });
}

function withLock(fn) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) throw fail('Busy', true);
  try { return fn(); } finally { lock.releaseLock(); }
}

function sha256(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8)
    .map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); })
    .join('');
}

/* ------------------------------- actions ---------------------------------- */

/** Notes changed after `since` (an ISO time), oldest change first. */
function list(since) {
  return readAll(sheet())
    .filter(function (r) { return !since || r.updated_at > since; })
    .sort(function (a, b) { return a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : a.id < b.id ? -1 : 1; })
    .map(toPublic);
}

function str(v, max, name) {
  if (v == null) v = '';
  if (typeof v !== 'string' || v.length > max) throw fail('Bad ' + name);
  return v;
}

function insert(row) {
  var id = str(row.id, 36, 'id').toLowerCase();
  if (!UUID.test(id)) throw fail('Bad id');
  var r = {
    id: id,
    case_slug: str(row.case_slug, 100, 'case'),
    anchor: str(row.anchor, 40, 'card'),
    anchor_label: str(row.anchor_label, 300, 'card title'),
    content_rev: str(row.content_rev, 40, 'site version'),
    author_name: str(row.author_name, 60, 'name'),
    body: str(row.body, 1000, 'comment')
  };
  var token = str(row.author_key, 200, 'author token');
  if (!r.case_slug) throw fail('Bad case');
  if (!ANCHOR.test(r.anchor)) throw fail('Bad card');
  if (!r.body.trim()) throw fail('Empty comment');
  if (token.length < 16) throw fail('Missing author token');
  r.author_key = sha256(token);
  // The emergency stop: a script property CLOSED set to yes.
  if (String(PropertiesService.getScriptProperties().getProperty('CLOSED') || '').trim().toLowerCase() === 'yes') {
    throw fail('Comments are closed for now');
  }

  var s = sheet();
  return withLock(function () {
    var rows = readAll(s);
    if (rows.some(function (x) { return x.id === id; })) return 'duplicate';
    // Five notes in ten seconds from one device is the most anyone types by hand.
    var recent = Date.now() - 10000;
    if (rows.filter(function (x) { return x.author_key === r.author_key && Date.parse(x.created_at) > recent; }).length >= 5) {
      throw fail('Too many comments at once', true);
    }
    r.hidden = 'FALSE';
    r.deleted = 'FALSE';
    r.created_at = r.updated_at = stamp(rows);
    TEXT.forEach(function (c) { r[c] = cell(r[c]); });
    var at = s.getLastRow() + 1;
    s.getRange(at, 1, 1, COLS.length).setNumberFormat('@')
      .setValues([COLS.map(function (c) { return r[c]; })]);
    return 'ok';
  });
}

function passOk(pass) {
  var want = PropertiesService.getScriptProperties().getProperty('PASSCODE') || '';
  // A short passcode could be guessed, so the controls stay locked until a long one is set.
  return want.length >= 16 && typeof pass === 'string' && pass === want;
}

function rpc(name, a) {
  if (name === 'facilitator_ok') return passOk(a.p_pass);

  if (name === 'delete_own_note') {
    var id = String(a.p_id || '').toLowerCase();
    var key = sha256(String(a.p_token || ''));
    var s = sheet();
    return withLock(function () {
      var rows = readAll(s);
      var r = rows.filter(function (x) { return x.id === id && !x.deleted && x.author_key === key; })[0];
      if (!r) return false;
      r.deleted = true;
      r.updated_at = stamp(rows);
      writeFlags(s, [r]);
      return true;
    });
  }

  if (!passOk(a.p_pass)) throw fail('Wrong passcode');

  if (name === 'facilitator_set_hidden') {
    var ids = Array.isArray(a.p_ids) ? a.p_ids.map(function (x) { return String(x).toLowerCase(); }) : [];
    if (ids.length > 500) throw fail('Too many comments in one request');
    var hide = a.p_hidden === true;
    return update(function (r) { return ids.indexOf(r.id) >= 0 && r.hidden !== hide; },
                  function (r) { r.hidden = hide; });
  }

  if (name === 'facilitator_clear') {
    var slug = String(a.p_case || '');
    return update(function (r) { return r.case_slug === slug && !r.hidden && !r.deleted; },
                  function (r) { r.hidden = true; });
  }

  if (name === 'remove_test_notes') {
    var s2 = sheet();
    return withLock(function () {
      var gone = readAll(s2).filter(function (r) { return r.case_slug === TEST_CASE; });
      // Bottom first, so the row numbers above stay right.
      for (var i = gone.length - 1; i >= 0; i--) s2.deleteRow(gone[i]._row);
      return gone.length;
    });
  }

  throw fail('Unknown request');
}

/** Change the rows that match, all with one new time. Returns how many changed. */
function update(match, change) {
  var s = sheet();
  return withLock(function () {
    var rows = readAll(s);
    var hit = rows.filter(match);
    if (!hit.length) return 0;
    var t = stamp(rows);
    hit.forEach(function (r) { change(r); r.updated_at = t; });
    writeFlags(s, hit);
    return hit.length;
  });
}

/* ---------------------------- edits by hand ------------------------------- */

/**
 * When someone edits a note's name, text, hidden or deleted cell in the sheet,
 * move its updated_at so every browser picks up the change. Google runs this
 * by itself; it needs no setup.
 */
function onEdit(e) {
  var range = e && e.range;
  if (!range || range.getSheet().getName() !== SHEET) return;
  var first = Math.max(2, range.getRow());
  var last = range.getLastRow();
  if (last < first || range.getLastColumn() < C.author_name + 1 || range.getColumn() > C.deleted + 1) return;
  var now = new Date().toISOString();
  var times = [];
  for (var i = first; i <= last; i++) times.push([now]);
  range.getSheet().getRange(first, C.updated_at + 1, times.length, 1).setNumberFormat('@').setValues(times);
}
