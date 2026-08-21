import { CAT, KEY_ORDER } from './categories.js';
import { cases } from './cases/index.js';
import { bindSourceLinks, srcHtml } from './util.js';
import * as router from './router.js';
import { renderMap, renderDetail, renderGaps, stepLink, highlightSelection } from './chain-view.js';
import { GLOSSARY, TIMELINE_NOTE } from './glossary.js';

/* ------------------------------- state ---------------------------------- */

const state = {
  cur: 0,
  view: null,          // 'chain' | 'timeline'
  chainIdx: 0,
  linkId: null,
  partIdx: null,       // selected actual-participation instance
  propIdx: null,       // selected proposed-participation instance
  nodeLabel: null,     // selected node (shows the timeline around its date)
  rightTab: 'detail',  // chain view's right pane: 'detail' | 'timeline'
  gapsOpen: false,     // chain overview showing the Open Questions pane
  zoom: 1,             // chain map zoom level
  fitKey: null,        // which chain the current zoom was auto-fitted to
  builtScreen: null    // which screen the map DOM is currently built for
};

const ZOOM = { min: 0.4, max: 2.2, step: 0.12 };

const filt = { red: true, orange: true, green: true, blue: true, purple: true };

const el = id => document.getElementById(id);
const curCase = () => cases[state.cur];
const curChains = () => curCase().chains || [];
const curChain = () => curChains()[state.chainIdx] || null;
const defaultView = c => (c.chains?.length ? 'chain' : 'timeline');

/* Chains sharing a `screen` render side by side as separate sub-chains
   (total and fair harm reduction stay on one screen without being merged). */
const screenKey = ch => ch.screen ?? ch.id;
const curScreenChains = () => {
  const ch = curChain();
  return ch ? curChains().filter(c => screenKey(c) === screenKey(ch)) : [];
};
const chainOfLink = linkId =>
  curChains().find(c => c.links.some(l => l.id === linkId)) || null;

function vis() {
  return curCase().entries.filter(e => filt[e.cat]);
}

/* ------------------------------ routing --------------------------------- */

function route() {
  const c = curCase();
  const r = { caseSlug: c.slug, view: state.view };
  if (state.view === 'chain' && curChain()) {
    r.chainId = curChain().id;
    if (state.linkId) {
      r.linkId = state.linkId;
      if (state.partIdx != null) r.partIdx = state.partIdx;
      else if (state.propIdx != null) r.propIdx = state.propIdx;
    } else if (state.nodeLabel != null) {
      const owner = curChains().find(c => state.nodeLabel in (c.nodes || {})) || curChain();
      r.chainId = owner.id;
      r.nodeIdx = Object.keys(owner.nodes || {}).indexOf(state.nodeLabel);
    }
  }
  return r;
}

function navigate(patch, opts) {
  router.go({ ...route(), ...patch }, opts);
}

/** Read the URL into state. Returns true only if the URL was already canonical. */
function applyRoute() {
  const r = router.parse();
  let canonical = true;

  const fallback = Math.max(cases.findIndex(c => c.chains?.length), 0);
  const ci = cases.findIndex(c => c.slug === r.caseSlug);
  state.cur = ci === -1 ? fallback : ci;
  if (ci === -1) canonical = false;

  const c = curCase();
  const wanted = r.view || defaultView(c);
  state.view = wanted === 'chain' && !c.chains?.length ? 'timeline' : wanted;
  if (!r.view || state.view !== r.view) canonical = false;

  state.chainIdx = 0;
  state.linkId = null;
  state.partIdx = null;
  state.propIdx = null;
  state.nodeLabel = null;
  state.gapsOpen = false;

  if (state.view === 'chain') {
    const idx = curChains().findIndex(ch => ch.id === r.chainId);
    state.chainIdx = idx === -1 ? 0 : idx;
    if (r.chainId && idx === -1) canonical = false;

    const ch = curChain();
    if (ch && r.linkId) {
      const link = ch.links.find(l => l.id === r.linkId);
      if (link) {
        state.linkId = link.id;
        if (r.partIdx != null && link.participation[r.partIdx]) state.partIdx = r.partIdx;
        else if (r.partIdx != null) canonical = false;
        else if (r.propIdx != null && (link.proposals ?? [])[r.propIdx]) state.propIdx = r.propIdx;
        else if (r.propIdx != null) canonical = false;
      } else {
        canonical = false;
      }
    } else if (ch && r.nodeIdx != null) {
      const label = Object.keys(ch.nodes || {})[r.nodeIdx];
      if (label) state.nodeLabel = label;
      else canonical = false;
    }
  }
  return canonical;
}

/* ---------------------------- top bar + drawer --------------------------- */

function renderTopBar() {
  const c = curCase();
  el('top-num').textContent = c.num;
  el('top-title').textContent = c.title;
  // Cases without a chain live in the full timeline and have no chain to
  // return to.
  el('tl-back').classList.toggle('hide', !curChains().length);
}

function renderDrawer() {
  el('drawer-cases').innerHTML = cases.map((c, i) => {
    const noChain = !c.chains?.length;
    return `<button class="dr-case${i === state.cur ? ' active' : ''}" data-case="${c.slug}">
      <span class="dr-num">${c.num}${noChain ? ' <em>Timeline only</em>' : ''}</span>
      <span class="dr-title">${c.title}</span>
    </button>`;
  }).join('');
}

function setDrawer(open) {
  el('drawer').classList.toggle('open', open);
  el('drawer').setAttribute('aria-hidden', String(!open));
  el('drawer-backdrop').classList.toggle('show', open);
  el('nav-btn').setAttribute('aria-expanded', String(open));
}

function setKeyPanel(open) {
  el('key-panel').classList.toggle('open', open);
  el('key-panel').setAttribute('aria-hidden', String(!open));
  el('key-btn').classList.toggle('on', open);
  if (open) renderKey();
}

/* -------------------------------- the key -------------------------------- */

function glossaryCounts() {
  const strength = {}, effect = {}, kind = {}, stage = {}, proposal = {};
  for (const c of cases) {
    for (const ch of c.chains ?? []) {
      for (const l of ch.links) {
        strength[l.strength] = (strength[l.strength] || 0) + 1;
        if (l.stage) stage[l.stage] = (stage[l.stage] || 0) + 1;
        for (const p of l.participation) {
          effect[p.effect] = (effect[p.effect] || 0) + 1;
          kind[p.kind] = (kind[p.kind] || 0) + 1;
        }
        for (const p of l.proposals ?? []) {
          const k = p.unstudied ? 'unstudied' : 'studied';
          proposal[k] = (proposal[k] || 0) + 1;
        }
      }
    }
  }
  return { strength, effect, kind, stage, proposal };
}

function glossaryMark(item) {
  if (item.badge) return `<span class="g ${item.badge}">${item.label}</span>`;
  if (item.dot) return `<span class="k-dotwrap"><i class="cg-dot ${item.dot}"></i>${item.label}</span>`;
  if (item.swatch) return `<span class="k-dotwrap"><i class="k-sw k-sw-${item.swatch}"></i>${item.label}</span>`;
  return `<span class="k-plain">${item.label}</span>`;
}

function renderKey() {
  const counts = glossaryCounts();

  const timeline = `<section class="k-sec">
    <h3>Timeline Entry Categories</h3>
    <p class="k-note">${TIMELINE_NOTE}</p>
    <div class="k-grid">${KEY_ORDER.map(k => {
      const c = CAT[k];
      return `<div class="k-item">
        <div class="k-mark"><span class="g ${c.badge}">${c.label}</span></div>
        <div class="k-body"><div class="k-title">${c.title}</div>
          ${c.questions ? `<div class="k-desc">${c.questions}</div>` : ''}</div>
      </div>`;
    }).join('')}</div>
  </section>`;

  const sections = GLOSSARY.map(sec => {
    const bucket = counts[sec.countBy] || null;
    return `<section class="k-sec">
      <h3>${sec.title}</h3>
      ${sec.note ? `<p class="k-note">${sec.note}</p>` : ''}
      <div class="k-grid">${sec.items.map(it => {
        const n = bucket && it.key != null ? bucket[it.key] : null;
        return `<div class="k-item">
          <div class="k-mark">${glossaryMark(it)}</div>
          <div class="k-body">
            <div class="k-desc">${it.desc}</div>
            ${it.eg ? `<div class="k-eg">e.g. ${it.eg}</div>` : ''}
          </div>
          <div class="k-count">${n != null ? `${n} in project` : (bucket ? 'none yet' : '')}</div>
        </div>`;
      }).join('')}</div>
    </section>`;
  }).join('');

  el('key-txt').innerHTML = state.view === 'chain'
    ? sections + timeline
    : timeline + sections;
}

/* ------------------------------ timeline --------------------------------- */

function splitEntryText(text, maxLen = 150) {
  const plain = text.replace(/<[^>]+>/g, '');
  if (plain.length <= maxLen) return { lead: text, rest: null };
  let cut = maxLen;
  const sp = plain.lastIndexOf(' ', cut);
  if (sp > maxLen * 0.55) cut = sp;
  let plainSeen = 0;
  let htmlCut = 0;
  for (; htmlCut < text.length && plainSeen < cut; htmlCut++) {
    if (text[htmlCut] === '<') {
      while (htmlCut < text.length && text[htmlCut] !== '>') htmlCut++;
    } else {
      plainSeen++;
    }
  }
  if (cut < plain.length && plain[cut] === ' ') {
    while (htmlCut < text.length && /\s/.test(text[htmlCut])) htmlCut++;
  }
  return { lead: text.slice(0, htmlCut), rest: text.slice(htmlCut).trimStart() || null };
}

function entryTextHtml(text) {
  const { lead, rest } = splitEntryText(text);
  if (!rest) return `<p class="etxt">${lead}</p>`;
  return `<p class="etxt"><span class="etxt-lead">${lead}</span><span class="etxt-ellipsis">…</span><span class="etxt-more">${rest}</span></p>`;
}

function entryHtml(e, extraClass = '') {
  return `<div class="ent cat-${e.cat}${filt[e.cat] ? '' : ' hidden'}${extraClass}">
    <div class="ehd" data-toggle="entry">
      <div class="edate">${e.date}</div>
      <div class="e-mid"><span class="ebadge ${CAT[e.cat].badge}">${CAT[e.cat].label}</span>${entryTextHtml(e.text)}</div>
      <div class="earr">▶</div>
    </div>
    <div class="ebd">
      <div class="eact"><span class="act-label">Actors:</span> ${e.actors}</div>
      <div class="esrcs">${srcHtml(e.srcs)}</div>
    </div>
  </div>`;
}

function renderTimeline() {
  el('tl-ov').innerHTML = `<div class="tl-ov-inner">
    <span class="cd-tag">Case Overview</span>${curCase().overview}
  </div>`;
  document.querySelector('#tl-wrap .tl-inner').innerHTML =
    curCase().entries.map(e => entryHtml(e)).join('');
}

/* -------------------------- chain view: right pane ------------------------ */

/**
 * The chain and the timeline describe the same events through different
 * lenses, and they share citations. An entry "belongs to" a link when the two
 * cite at least one identical source URL. That mapping is what lets the
 * split view highlight the chronology behind a selected causal link.
 */
function linkSourceUrls(link) {
  const urls = new Set();
  const collect = list => list?.forEach(x => x.srcs?.forEach(s => urls.add(s.u)));
  collect(link.evidence);
  collect(link.counterEvidence);
  collect(link.participation);
  return urls;
}

/**
 * Parse a display date ('06/2017', '1978–1981', '2010s', '01/2020–2023') into
 * a [startMonthIndex, endMonthIndex] span, where a month index is y*12+m.
 * Returns null when no year is present.
 */
function dateSpan(str) {
  const spans = [];
  const re = /(?:(\d{1,2})\/)?(?:\d{1,2}\/)?(\d{4})(s?)/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    const y = Number(m[2]);
    if (y < 1900 || y > 2100) continue;
    if (m[3] === 's') {
      spans.push([y * 12, (y + 9) * 12 + 11]);
    } else if (m[1]) {
      const mo = Number(m[1]) - 1;
      spans.push([y * 12 + mo, y * 12 + mo]);
    } else {
      spans.push([y * 12, y * 12 + 11]);
    }
  }
  if (!spans.length) return null;
  return [Math.min(...spans.map(s => s[0])), Math.max(...spans.map(s => s[1]))];
}

/** The union of the date windows of a link's participation instances. */
function linkDateSpans(link) {
  return link.participation.map(p => dateSpan(p.date)).filter(Boolean);
}

function spansOverlap(a, b) {
  return a && b && a[0] <= b[1] && b[0] <= a[1];
}

function renderChainTimeline() {
  const host = el('ch-timeline');
  const c = curCase();
  const link = state.linkId && curChain()
    ? curChain().links.find(l => l.id === state.linkId)
    : null;
  const node = !link && state.nodeLabel && curChain() ? state.nodeLabel : null;
  const nodeSpan = node ? dateSpan(curChain().nodeDates?.[node] ?? '') : null;

  let shared = 0;
  let near = 0;
  let body = '';
  let note;
  if (link) {
    const urls = linkSourceUrls(link);
    const spans = linkDateSpans(link);
    body = c.entries.map(e => {
      if (e.srcs.some(s => urls.has(s.u))) {
        shared++;
        return entryHtml(e, ' ent-match');
      }
      const es = dateSpan(e.date);
      if (spans.some(sp => spansOverlap(sp, es))) {
        near++;
        return entryHtml(e, ' ent-near');
      }
      return entryHtml(e, ' ent-dim');
    }).join('');
    const parts = [];
    if (shared) parts.push(`<strong>${shared}</strong> share a source with <strong>${link.id}</strong>`);
    if (near) parts.push(`<strong>${near}</strong> fall inside its participation dates`);
    note = `<div class="ct-note">${parts.length
        ? parts.join('; ') + '; the rest are dimmed.'
        : `Nothing on the timeline cites or coincides with link <strong>${link.id}</strong> yet.`}
      </div>`;
  } else if (node) {
    // A node is a state of the world at a point in time; highlight the
    // chronology around its date.
    const date = curChain().nodeDates?.[node];
    body = c.entries.map(e => {
      const es = dateSpan(e.date);
      if (nodeSpan && spansOverlap(nodeSpan, es)) {
        near++;
        return entryHtml(e, ' ent-near');
      }
      return entryHtml(e, ' ent-dim');
    }).join('');
    note = `<div class="ct-note">${near
        ? `<strong>${near}</strong> timeline ${near === 1 ? 'entry' : 'entries'} around <strong>${date}</strong> (${node}); the rest are dimmed.`
        : `Nothing on the timeline falls in <strong>${date}</strong> (${node}) yet.`}
      </div>`;
  } else {
    body = c.entries.map(e => entryHtml(e)).join('');
    note = `<div class="ct-note">The full chronology. Click a node or a link on the map to highlight the entries behind it.</div>`;
  }

  host.innerHTML = note + `<div class="ct-list">${body}</div>`;

  const first = host.querySelector('.ent-match') || host.querySelector('.ent-near');
  if (first) {
    host.querySelector('.ct-list').scrollTop = Math.max(0, first.offsetTop - 80);
  } else {
    const list = host.querySelector('.ct-list');
    if (list) list.scrollTop = 0;
  }
}

function setRightTab(tab) {
  state.rightTab = tab;
  document.querySelectorAll('#ch-right-tabs .rt').forEach(b =>
    b.classList.toggle('on', b.dataset.rt === tab));
  el('ch-detail').classList.toggle('show', tab === 'detail');
  el('ch-timeline').classList.toggle('show', tab === 'timeline');
  if (tab === 'timeline') renderChainTimeline();
}

/** Mark one node as selected on the map, clearing any prior node highlight. */
function highlightNode(mapEl, label) {
  mapEl.querySelectorAll('.cg-node.sel').forEach(n => n.classList.remove('sel'));
  if (!label) return;
  mapEl.querySelectorAll(`.cg-node[data-node="${cssAttr(label)}"]`).forEach(n => n.classList.add('sel'));
}

const cssAttr = s => String(s).replace(/(["\\])/g, '\\$1');

/**
 * Click a node box: it is a state of the world at a date, so the right pane
 * switches to the timeline and highlights the entries around that date. Routed
 * (via nodeIdx) so state and URL stay in sync; otherwise clicking a link the
 * URL already points to would be a no-op and never re-highlight.
 */
function selectNode(label) {
  const owner = curChains().find(c => label in (c.nodes || {})) || curChain();
  const idx = Object.keys(owner.nodes || {}).indexOf(label);
  if (idx === -1) return;
  if (state.rightTab !== 'timeline') setRightTab('timeline');
  navigate({ chainId: owner.id, nodeIdx: idx, linkId: null, partIdx: null, propIdx: null });
}

function renderChainSelector() {
  const chains = curChains();
  const host = el('ch-sel');

  // One selector button per screen; chains sharing a screen share a button.
  const screens = [];
  for (const c of chains) {
    const key = screenKey(c);
    let s = screens.find(x => x.key === key);
    if (!s) screens.push(s = { key, chains: [] });
    s.chains.push(c);
  }

  if (screens.length < 2) {
    host.innerHTML = '';
    host.classList.add('hide');
    return;
  }
  host.classList.remove('hide');
  const curKey = curChain() ? screenKey(curChain()) : null;
  host.innerHTML = screens.map(s =>
    `<button class="chb${s.key === curKey ? ' on' : ''}" data-chain="${s.chains[0].id}">
      ${s.chains.map(c => c.label).join(' &amp; ')}</button>`
  ).join('');
}

function renderChain() {
  const ch = curChain();
  renderChainSelector();
  const map = el('ch-map');
  if (!ch) {
    map.innerHTML = `<div class="empty-msg">No causal chain has been mapped for this case yet.</div>`;
    el('ch-detail').innerHTML = '';
    el('ch-timeline').innerHTML = '';
    return;
  }
  const sel = { linkId: state.linkId, partIdx: state.partIdx, propIdx: state.propIdx };
  const onScreen = curScreenChains();
  const key = screenKey(ch);

  // Only rebuild the map DOM when the screen actually changes. A selection
  // change (clicking a box, walking with the arrow keys) updates the highlight
  // in place, leaving scroll and zoom exactly where they were, so the map never
  // jumps under the pointer.
  const needsBuild = state.builtScreen !== key || !map.firstElementChild;

  if (needsBuild) {
    if (onScreen.length > 1) {
      // Two separate sub-chains on one screen: each gets its own labeled
      // canvas; they are never merged into one graph.
      map.innerHTML = `<div class="cg-row">${onScreen.map(c =>
        `<div class="cg-col"><div class="cg-sub">${c.label}</div>
          <div class="cg-canvas" data-canvas="${c.id}"></div></div>`).join('')}</div>`;
      for (const c of onScreen) {
        renderMap(map.querySelector(`[data-canvas="${c.id}"]`), c, sel);
      }
    } else {
      renderMap(map, ch, sel);
    }
    state.builtScreen = key;
    const fitted = autoFit();
    applyZoom();
    // On first showing a chain, anchor at the top with the root node centred in
    // the viewport, so the reader starts at the root cause.
    if (fitted) centerTopRow();
    highlightNode(map, state.nodeLabel);
  } else {
    highlightSelection(map, state.linkId);
    highlightNode(map, state.nodeLabel);
  }

  // A selected node is shown through the timeline, so make sure that tab is up.
  if (state.nodeLabel && !state.linkId && state.rightTab !== 'timeline') setRightTab('timeline');

  if (state.gapsOpen && !state.linkId) renderGaps(el('ch-detail'), ch);
  else renderDetail(el('ch-detail'), ch, sel, onScreen);
  if (state.rightTab === 'timeline') renderChainTimeline();
}

/* ------------------------------- zoom ------------------------------------ */

// CSS `zoom` scales the rendered map AND its scroll extent, so panning by
// scrolling keeps working at any zoom. Applied to whatever the map holds (a
// single graph, or the paired-screen row).
function applyZoom() {
  const content = el('ch-map').firstElementChild;
  if (content) content.style.zoom = state.zoom;
  const lbl = el('zoom-lbl');
  if (lbl) lbl.textContent = `${Math.round(state.zoom * 100)}%`;
}

function setZoom(z) {
  state.zoom = Math.min(ZOOM.max, Math.max(ZOOM.min, Math.round(z * 100) / 100));
  applyZoom();
}

// On first showing a chain (or when switching to a different one), pick a
// starting zoom and return true so the caller scrolls to the top. Auto-fit
// runs once per chain: any re-render of the same chain (selecting a link,
// opening a card) keeps the current zoom, so a manual zoom sticks until the
// chain changes. The chain always opens at 100%, centred on the root; the
// reader drags to pan and zooms out to survey.
const DEFAULT_ZOOM = 1;
function autoFit() {
  const key = curChain() ? screenKey(curChain()) : null;
  if (key === state.fitKey) return false;
  // A single chain opens at 100%. A paired screen (total & fair side by side)
  // fits to width instead, so the second sub-chain is visible and not missed.
  const paired = curScreenChains().length > 1;
  if (paired) {
    const map = el('ch-map');
    const content = map.firstElementChild;
    if (content) {
      content.style.zoom = 1;
      const natural = content.scrollWidth;
      const fit = natural > 0 ? (map.clientWidth - 6) / natural : 1;
      state.zoom = Math.max(ZOOM.min, Math.min(1, Math.round(fit * 100) / 100));
    } else {
      state.zoom = DEFAULT_ZOOM;
    }
  } else {
    state.zoom = DEFAULT_ZOOM;
  }
  state.fitKey = key;
  return true;
}

// Scroll so the top row of nodes (the root cause, or the first sub-chain's
// root on a paired screen) is centred horizontally and pinned to the top.
// Uses bounding rects so it is correct at any zoom and through the paired
// screen's nesting.
function centerTopRow() {
  const map = el('ch-map');
  const nodes = [...map.querySelectorAll('.cg-node')];
  if (!nodes.length) return;
  const mr = map.getBoundingClientRect();
  const rects = nodes.map(n => n.getBoundingClientRect());
  const minTop = Math.min(...rects.map(r => r.top));
  const topRow = rects.filter(r => r.top <= minTop + 4);
  const left = Math.min(...topRow.map(r => r.left));
  const right = Math.max(...topRow.map(r => r.right));
  const centreContent = (left + right) / 2 - mr.left + map.scrollLeft;
  const topContent = minTop - mr.top + map.scrollTop;
  map.scrollLeft = Math.max(0, centreContent - map.clientWidth / 2);
  map.scrollTop = Math.max(0, topContent - 12);
}

// Zoom toward the pointer: keep the point under the cursor fixed as the map
// scales, the way map apps and design tools behave.
function zoomAt(clientX, clientY, factor) {
  const map = el('ch-map');
  const r = map.getBoundingClientRect();
  const px = map.scrollLeft + (clientX - r.left);
  const py = map.scrollTop + (clientY - r.top);
  const prev = state.zoom;
  setZoom(prev * factor);
  const ratio = state.zoom / prev;
  map.scrollLeft = px * ratio - (clientX - r.left);
  map.scrollTop = py * ratio - (clientY - r.top);
}

/* ------------------------------- render ---------------------------------- */

function updateCount() {
  const n = vis().length;
  el('cnt').textContent = `${n} entr${n === 1 ? 'y' : 'ies'}`;
}

function render() {
  renderTopBar();
  renderDrawer();
  document.body.dataset.view = state.view;
  el('tl-wrap').classList.toggle('show', state.view === 'timeline');
  el('ch-wrap').classList.toggle('show', state.view === 'chain');

  if (state.view === 'timeline') {
    renderTimeline();
    updateCount();
  } else {
    renderChain();
  }
  if (el('key-panel').classList.contains('open')) renderKey();
}

/* ------------------------------- events ---------------------------------- */

function onHashChange() {
  const canonical = applyRoute();
  if (!canonical) {
    router.go(route(), { replace: true });
    return;
  }
  render();
}

function bindEvents() {
  bindSourceLinks(document);

  el('nav-btn').addEventListener('click', () =>
    setDrawer(!el('drawer').classList.contains('open')));
  el('drawer-close').addEventListener('click', () => setDrawer(false));
  el('drawer-backdrop').addEventListener('click', () => setDrawer(false));

  el('drawer-cases').addEventListener('click', e => {
    const b = e.target.closest('[data-case]');
    if (!b) return;
    setDrawer(false);
    router.go({ caseSlug: b.dataset.case });
  });

  el('key-btn').addEventListener('click', () =>
    setKeyPanel(!el('key-panel').classList.contains('open')));
  el('key-close').addEventListener('click', () => setKeyPanel(false));

  // The Expand button in the split pane and the Back to Chain button in the
  // full timeline are the only two view switches.
  for (const id of ['tl-expand', 'tl-back']) {
    el(id).addEventListener('click', () =>
      navigate({ view: el(id).dataset.view, chainId: null, linkId: null, partIdx: null }));
  }

  el('ch-sel').addEventListener('click', e => {
    const b = e.target.closest('[data-chain]');
    if (b) navigate({ chainId: b.dataset.chain, linkId: null, partIdx: null });
  });

  el('ch-map').addEventListener('click', e => {
    // Clicking a node box opens the timeline around that node's date.
    const nodeEl = e.target.closest('[data-node]');
    if (nodeEl && !e.target.closest('[data-link]')) {
      selectNode(nodeEl.dataset.node);
      return;
    }
    const b = e.target.closest('[data-link]');
    if (!b) return;
    // Selecting a link always brings up its details, whichever pane is open.
    // The link may live in either sub-chain on a paired screen. A click on an
    // actual-participation card opens that instance; a proposed card opens the
    // link detail (which lists the proposals).
    state.nodeLabel = null;
    if (state.rightTab !== 'detail') setRightTab('detail');
    const owner = chainOfLink(b.dataset.link);
    const patch = { linkId: b.dataset.link, partIdx: null, propIdx: null };
    if (owner) patch.chainId = owner.id;
    if (b.dataset.part != null) patch.partIdx = Number(b.dataset.part);
    else if (b.dataset.prop != null) patch.propIdx = Number(b.dataset.prop);
    navigate(patch);
  });

  // Drag to pan: press and move anywhere on the map to scroll it. A small
  // movement threshold means a press that does not move still counts as a
  // click on a card or link; a press that drags suppresses the click that
  // would otherwise follow.
  const map = el('ch-map');
  let drag = null;
  map.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, y: e.clientY, sl: map.scrollLeft, st: map.scrollTop, moved: false, id: e.pointerId };
  });
  map.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) > 5) {
      drag.moved = true;
      map.classList.add('grabbing');
      try { map.setPointerCapture(drag.id); } catch {}
    }
    if (drag.moved) {
      map.scrollLeft = drag.sl - dx;
      map.scrollTop = drag.st - dy;
    }
  });
  const endDrag = () => {
    if (drag?.moved) {
      // Swallow the click this drag would otherwise trigger.
      const swallow = ev => { ev.stopPropagation(); ev.preventDefault(); };
      map.addEventListener('click', swallow, { capture: true, once: true });
      setTimeout(() => map.removeEventListener('click', swallow, true), 0);
    }
    map.classList.remove('grabbing');
    drag = null;
  };
  map.addEventListener('pointerup', endDrag);
  map.addEventListener('pointercancel', endDrag);

  // Zoom: buttons, ctrl/cmd + wheel, and trackpad pinch (which arrives as a
  // wheel event with ctrlKey set). Plain scroll/drag still pans.
  el('ch-map').addEventListener('wheel', e => {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1 + ZOOM.step : 1 / (1 + ZOOM.step));
  }, { passive: false });

  el('ch-zoom').addEventListener('click', e => {
    const b = e.target.closest('[data-zoom]');
    if (!b) return;
    const map = el('ch-map');
    const cx = map.getBoundingClientRect().left + map.clientWidth / 2;
    const cy = map.getBoundingClientRect().top + map.clientHeight / 2;
    if (b.dataset.zoom === 'reset') { setZoom(1); map.scrollTo({ left: 0, top: 0 }); }
    else zoomAt(cx, cy, b.dataset.zoom === 'in' ? 1 + ZOOM.step : 1 / (1 + ZOOM.step));
  });

  el('ch-right-tabs').addEventListener('click', e => {
    const b = e.target.closest('[data-rt]');
    if (b) setRightTab(b.dataset.rt);
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-openkey]')) setKeyPanel(true);
  });

  el('ch-detail').addEventListener('click', e => {
    const gp = e.target.closest('[data-gaps]');
    if (gp) {
      // On a paired screen the button names which sub-chain's questions to open.
      const idx = curChains().findIndex(c => c.id === gp.dataset.gaps);
      if (idx !== -1) state.chainIdx = idx;
      state.gapsOpen = true;
      renderGaps(el('ch-detail'), curChain());
      return;
    }
    const go = e.target.closest('[data-golink]');
    if (go) {
      state.gapsOpen = false;
      if (state.rightTab !== 'detail') setRightTab('detail');
      navigate({ linkId: go.dataset.golink, partIdx: null });
      return;
    }
    const back = e.target.closest('[data-back]');
    if (back) {
      if (back.dataset.back === 'gaps') {
        state.gapsOpen = false;
        renderChain();
        return;
      }
      navigate(back.dataset.back === 'chain'
        ? { linkId: null, partIdx: null, propIdx: null }
        : { partIdx: null, propIdx: null });
      return;
    }
    const p = e.target.closest('[data-part]');
    if (p) { navigate({ partIdx: Number(p.dataset.part), propIdx: null }); return; }
    const pr = e.target.closest('[data-prop]');
    if (pr) navigate({ propIdx: Number(pr.dataset.prop), partIdx: null });
  });

  el('ch-detail').addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const p = e.target.closest('[data-part]');
    const pr = e.target.closest('[data-prop]');
    if (p) { e.preventDefault(); navigate({ partIdx: Number(p.dataset.part), propIdx: null }); }
    else if (pr) { e.preventDefault(); navigate({ propIdx: Number(pr.dataset.prop), partIdx: null }); }
  });

  // Entry expansion works in the timeline view and in the chain view's
  // split-timeline pane.
  document.addEventListener('click', e => {
    const h = e.target.closest('[data-toggle="entry"]');
    if (h) h.parentElement.classList.toggle('open');
  });

  document.querySelector('.tl-toolbar').addEventListener('click', e => {
    if (e.target.closest('[data-ov]')) {
      // The overview always sits at the top of the timeline; this just takes you there.
      document.querySelector('.tl-scroll').scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const f = e.target.closest('[data-f]');
    if (!f) return;
    const k = f.dataset.f;
    if (k === 'all') {
      const allOn = Object.values(filt).every(Boolean);
      Object.keys(filt).forEach(x => { filt[x] = !allOn; });
    } else {
      filt[k] = !filt[k];
    }
    document.querySelectorAll('.fl').forEach(b => {
      const df = b.dataset.f;
      if (df === 'all') b.classList.toggle('off', !Object.values(filt).every(Boolean));
      else b.classList.toggle('off', !filt[df]);
    });
    renderTimeline();
    updateCount();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (el('drawer').classList.contains('open')) { setDrawer(false); return; }
      if (el('key-panel').classList.contains('open')) { setKeyPanel(false); return; }
      if (state.view === 'chain' && state.linkId) {
        navigate({ linkId: null, partIdx: null });
      }
      return;
    }
    if (state.view !== 'chain' || !curChain()) return;
    if (e.target.matches('input, textarea')) return;
    // Keyboard zoom: +, -, and 0 to reset.
    if (e.key === '+' || e.key === '=') { e.preventDefault(); setZoom(state.zoom * (1 + ZOOM.step)); return; }
    if (e.key === '-' || e.key === '_') { e.preventDefault(); setZoom(state.zoom / (1 + ZOOM.step)); return; }
    if (e.key === '0') { e.preventDefault(); setZoom(1); el('ch-map').scrollTo({ left: 0, top: 0 }); return; }
    const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1
      : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    if (state.rightTab !== 'detail') setRightTab('detail');
    // Walk across every sub-chain on the current screen.
    const links = curScreenChains().flatMap(c => c.links);
    const next = stepLink(links, state.linkId, dir);
    const owner = chainOfLink(next);
    const patch = { linkId: next, partIdx: null };
    if (owner) patch.chainId = owner.id;
    navigate(patch);
  });

  let t;
  window.addEventListener('resize', () => {
    if (state.view !== 'chain') return;
    clearTimeout(t);
    // A width change alters slot sizing, so force a full rebuild + refit.
    t = setTimeout(() => { state.builtScreen = null; state.fitKey = null; renderChain(); }, 150);
  });

  router.onChange(onHashChange);
}

/* -------------------------------- boot ----------------------------------- */

bindEvents();
onHashChange();
