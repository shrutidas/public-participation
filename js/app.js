import { CAT, KEY_ORDER } from './categories.js';
import { cases } from './cases/index.js';
import { bindSourceLinks, srcHtml } from './util.js';
import * as router from './router.js';
import { renderSpineMap, renderSpineDetail, highlightSpine, anchorIndex } from './spine-view.js';
import { GLOSSARY, TIMELINE_NOTE } from './glossary.js';
import spineSchools from './spine/covid-schools.js';
import spineVaccines from './spine/covid-vaccines.js';
import spineGenx from './spine/genx-pfas.js';

/* ------------------------------- state ---------------------------------- */

const SPINES = {
  'covid-schools': spineSchools,
  'covid-vaccines': spineVaccines,
  'genx-pfas': spineGenx
};

const state = {
  cur: 0,
  view: null,          // 'spine' | 'timeline'
  selKind: null,       // null | 'entry' | 'mech' | 'impact' | 'prop' | 'proplink'
  selIdx: null,
  linkIdx: null,
  zoom: 1,             // spine map zoom level
  fitKey: null,        // which case the current zoom was auto-fitted to
  builtKey: null       // which case+expansion the map DOM is currently built for
};

const ZOOM = { min: 0.35, max: 2.2, step: 0.12 };

const filt = { red: true, orange: true, green: true, blue: true, purple: true };

const el = id => document.getElementById(id);
const curCase = () => cases[state.cur];
const curSpine = () => SPINES[curCase().slug] || null;
const defaultView = c => (SPINES[c.slug] ? 'spine' : 'timeline');
const curSel = () => ({ kind: state.selKind, idx: state.selIdx, linkIdx: state.linkIdx });

/* Every proposal chain is always open, so the map DOM is rebuilt only when
   the case changes; every selection updates highlights in place. */
const builtKey = () => `${curCase().slug}::all`;

function vis() {
  return curCase().entries.filter(e => filt[e.cat]);
}

/* ------------------------------ routing --------------------------------- */

function route() {
  const c = curCase();
  const r = { caseSlug: c.slug, view: state.view };
  if (state.view === 'spine' && state.selKind != null) {
    r.selKind = state.selKind;
    r.selIdx = state.selIdx;
    if (state.selKind === 'proplink') r.linkIdx = state.linkIdx;
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

  const fallback = Math.max(cases.findIndex(c => SPINES[c.slug]), 0);
  const ci = cases.findIndex(c => c.slug === r.caseSlug);
  state.cur = ci === -1 ? fallback : ci;
  if (ci === -1) canonical = false;

  const c = curCase();
  const wanted = r.view || defaultView(c);
  state.view = wanted === 'spine' && !SPINES[c.slug] ? 'timeline' : wanted;
  if (!r.view || state.view !== r.view || r.legacy) canonical = false;

  state.selKind = null;
  state.selIdx = null;
  state.linkIdx = null;

  if (state.view === 'spine' && r.selKind != null) {
    const sp = curSpine();
    const bounds = {
      entry: c.entries.length,
      mech: sp.mechanisms.length,
      impact: sp.impacts.length,
      prop: sp.proposals.length,
      proplink: sp.proposals.length,
      propcomp: sp.proposals.length
    };
    if (r.selIdx < (bounds[r.selKind] ?? 0)) {
      state.selKind = r.selKind;
      state.selIdx = r.selIdx;
      if (r.selKind === 'proplink') {
        const links = sp.proposals[r.selIdx].links;
        if (r.linkIdx < links.length) state.linkIdx = r.linkIdx;
        else { state.selKind = 'prop'; canonical = false; }
      }
    } else {
      canonical = false;
    }
  }
  return canonical;
}

/* ---------------------------- top bar + drawer --------------------------- */

function renderTopBar() {
  const c = curCase();
  el('top-num').textContent = c.num;
  el('top-title').textContent = c.title;
  // Cases without a spine live in the full timeline and have no map to return to.
  el('tl-back').classList.toggle('hide', !curSpine());
}

function renderDrawer() {
  el('drawer-cases').innerHTML = cases.map((c, i) => {
    const noSpine = !SPINES[c.slug];
    return `<button class="dr-case${i === state.cur ? ' active' : ''}" data-case="${c.slug}">
      <span class="dr-num">${c.num}${noSpine ? ' <em>Timeline only</em>' : ''}</span>
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
  const strength = {}, failure = {}, proposal = {};
  for (const sp of Object.values(SPINES)) {
    for (const m of sp.mechanisms) failure[m.failure] = (failure[m.failure] || 0) + 1;
    for (const im of sp.impacts) for (const f of im.from) strength[f.strength] = (strength[f.strength] || 0) + 1;
    for (const p of sp.proposals) {
      proposal.proposed = (proposal.proposed || 0) + 1;
      for (const lk of p.links) strength[lk.strength] = (strength[lk.strength] || 0) + 1;
    }
  }
  return { strength, failure, proposal };
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

  el('key-txt').innerHTML = state.view === 'spine'
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

/* The right pane always shows the detail; the full timeline opens through
   the Expand Timeline button. */

/* About This Case: a toggle bar under the top bar, over the map. */
let aboutOpen = false;

function renderAboutBar() {
  el('ch-sel').innerHTML = `
    <button id="sp-about-btn" class="ov-toggle${aboutOpen ? ' on' : ''}" aria-expanded="${aboutOpen}">About This Case</button>
    <div id="sp-about-panel" class="tl-ov-inner sp-about-panel"${aboutOpen ? '' : ' hidden'}>${curCase().overview}</div>`;
}

function renderSpine() {
  const c = curCase();
  const sp = curSpine();
  const map = el('ch-map');
  renderAboutBar();
  if (!sp) {
    map.innerHTML = `<div class="empty-msg">No spine has been mapped for this case yet.</div>`;
    el('ch-detail').innerHTML = '';
    return;
  }

  const key = builtKey();
  const needsBuild = state.builtKey !== key || !map.firstElementChild;

  if (needsBuild) {
    // Preserve scroll when only the expansion changed within the same case.
    const sameCase = state.builtKey?.startsWith(`${c.slug}::`);
    const keep = sameCase ? { l: map.scrollLeft, t: map.scrollTop } : null;
    renderSpineMap(map, c, sp, curSel());
    state.builtKey = key;
    applyZoom();
    if (!sameCase) {
      autoFit();
      applyZoom();
      centerSpineTop();
    } else if (keep) {
      map.scrollLeft = keep.l;
      map.scrollTop = keep.t;
    }
  } else {
    highlightSpine(map, curSel());
  }

  renderSpineDetail(el('ch-detail'), c, sp, curSel());
}

/* ------------------------------- zoom ------------------------------------ */

// CSS `zoom` scales the rendered map AND its scroll extent, so panning by
// scrolling keeps working at any zoom.
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

// On first showing a case, open at 100% centred on the top of the spine; the
// reader drags to pan and zooms out to survey the rails. Runs once per case so
// a manual zoom sticks until the case changes.
const DEFAULT_ZOOM = 1;
function autoFit() {
  const key = curCase().slug;
  if (key === state.fitKey) return false;
  state.zoom = DEFAULT_ZOOM;
  state.fitKey = key;
  return true;
}

// Scroll so the top of the spine column is centred horizontally.
function centerSpineTop() {
  const map = el('ch-map');
  const first = map.querySelector('.sp-ent');
  if (!first) return;
  const mr = map.getBoundingClientRect();
  const r = first.getBoundingClientRect();
  const centreContent = (r.left + r.right) / 2 - mr.left + map.scrollLeft;
  const topContent = r.top - mr.top + map.scrollTop;
  map.scrollLeft = Math.max(0, centreContent - map.clientWidth / 2);
  map.scrollTop = Math.max(0, topContent - 16);
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
  el('ch-wrap').classList.toggle('show', state.view === 'spine');

  if (state.view === 'timeline') {
    renderTimeline();
    updateCount();
  } else {
    renderSpine();
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

function select(kind, idx, linkIdx = null) {
  navigate({ selKind: kind, selIdx: idx, linkIdx });
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

  // The Expand button in the split pane and the Back button in the full
  // timeline are the only two view switches.
  for (const id of ['tl-expand', 'tl-back']) {
    el(id).addEventListener('click', () =>
      navigate({ view: el(id).dataset.view, selKind: null, selIdx: null, linkIdx: null }));
  }

  el('ch-map').addEventListener('click', e => {
    const pl = e.target.closest('[data-pl]');
    if (pl && pl.dataset.pr != null) {
      select('proplink', Number(pl.dataset.pr), Number(pl.dataset.pl));
      return;
    }
    const cs = e.target.closest('.sp-complist');
    if (cs) { select('propcomp', Number(cs.dataset.pr)); return; }
    const pr = e.target.closest('[data-pr]');
    if (pr) { select('prop', Number(pr.dataset.pr)); return; }
    const m = e.target.closest('[data-m]');
    if (m) { select('mech', Number(m.dataset.m)); return; }
    const im = e.target.closest('[data-i]');
    if (im) { select('impact', Number(im.dataset.i)); return; }
    const en = e.target.closest('[data-e]');
    if (en) { select('entry', Number(en.dataset.e)); return; }
  });

  // Drag to pan: press and move anywhere on the map to scroll it. A small
  // movement threshold means a press that does not move still counts as a
  // click; a press that drags suppresses the click that would follow.
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
      const swallow = ev => { ev.stopPropagation(); ev.preventDefault(); };
      map.addEventListener('click', swallow, { capture: true, once: true });
      setTimeout(() => map.removeEventListener('click', swallow, true), 0);
    }
    map.classList.remove('grabbing');
    drag = null;
  };
  map.addEventListener('pointerup', endDrag);
  map.addEventListener('pointercancel', endDrag);

  // Zoom: buttons, ctrl/cmd + wheel, and trackpad pinch.
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
    if (b.dataset.zoom === 'reset') { setZoom(1); centerSpineTop(); }
    else zoomAt(cx, cy, b.dataset.zoom === 'in' ? 1 + ZOOM.step : 1 / (1 + ZOOM.step));
  });

  el('ch-sel').addEventListener('click', e => {
    if (!e.target.closest('#sp-about-btn')) return;
    aboutOpen = !aboutOpen;
    renderAboutBar();
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-openkey]')) setKeyPanel(true);
  });

  el('ch-detail').addEventListener('click', e => {
    const back = e.target.closest('[data-back]');
    if (back) {
      if (back.dataset.back === 'prop') navigate({ selKind: 'prop', selIdx: state.selIdx, linkIdx: null });
      else navigate({ selKind: null, selIdx: null, linkIdx: null });
      return;
    }
    const row = e.target.closest('.sp-chainrow[data-pl]');
    if (row && (state.selKind === 'prop' || state.selKind === 'proplink')) {
      navigate({ selKind: 'proplink', selIdx: state.selIdx, linkIdx: Number(row.dataset.pl) });
    }
  });

  el('ch-detail').addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const row = e.target.closest('.sp-chainrow[data-pl]');
    if (row && (state.selKind === 'prop' || state.selKind === 'proplink')) {
      e.preventDefault();
      navigate({ selKind: 'proplink', selIdx: state.selIdx, linkIdx: Number(row.dataset.pl) });
    }
  });

  // Entry expansion works in the timeline view and in the split-timeline pane.
  document.addEventListener('click', e => {
    const h = e.target.closest('[data-toggle="entry"]');
    if (h) h.parentElement.classList.toggle('open');
  });

  document.querySelector('.tl-toolbar').addEventListener('click', e => {
    if (e.target.closest('[data-ov]')) {
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
      if (state.view === 'spine' && state.selKind != null) {
        navigate({ selKind: null, selIdx: null, linkIdx: null });
      }
      return;
    }
    if (state.view !== 'spine' || !curSpine()) return;
    if (e.target.matches('input, textarea')) return;
    // Keyboard zoom: +, -, and 0 to reset.
    if (e.key === '+' || e.key === '=') { e.preventDefault(); setZoom(state.zoom * (1 + ZOOM.step)); return; }
    if (e.key === '-' || e.key === '_') { e.preventDefault(); setZoom(state.zoom / (1 + ZOOM.step)); return; }
    if (e.key === '0') { e.preventDefault(); setZoom(1); centerSpineTop(); return; }
    // Arrow keys walk the spine's events.
    const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1
      : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = curCase().entries.length;
    const cur = state.selKind === 'entry' ? state.selIdx : (dir > 0 ? -1 : n);
    const next = Math.min(Math.max(cur + dir, 0), n - 1);
    navigate({ selKind: 'entry', selIdx: next, linkIdx: null });
    // Keep the selected event in view without disturbing zoom.
    const box = el('ch-map').querySelector(`.sp-ent[data-e="${next}"]`);
    if (box) box.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });

  let t;
  window.addEventListener('resize', () => {
    if (state.view !== 'spine') return;
    clearTimeout(t);
    t = setTimeout(() => { state.builtKey = null; renderSpine(); }, 150);
  });

  router.onChange(onHashChange);
}

/* -------------------------------- boot ----------------------------------- */

bindEvents();
onHashChange();
