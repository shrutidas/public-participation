import { CAT, KEY_ORDER } from './categories.js';
import { cases } from './cases/index.js';
import { bindSourceLinks, srcHtml } from './util.js';
import * as router from './router.js';
import { renderMap, renderDetail, renderGaps, stepLink } from './chain-view.js';
import { GLOSSARY, HOW_TO, TIMELINE_NOTE } from './glossary.js';

/* ------------------------------- state ---------------------------------- */

const state = {
  cur: 0,
  view: null,          // 'chain' | 'timeline'
  chainIdx: 0,
  linkId: null,
  partIdx: null,
  rightTab: 'detail',  // chain view's right pane: 'detail' | 'timeline'
  gapsOpen: false      // chain overview showing the Open Questions pane
};

const filt = { red: true, orange: true, green: true, blue: true, purple: true };

const el = id => document.getElementById(id);
const curCase = () => cases[state.cur];
const curChains = () => curCase().chains || [];
const curChain = () => curChains()[state.chainIdx] || null;
const defaultView = c => (c.chains?.length ? 'chain' : 'timeline');

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
      } else {
        canonical = false;
      }
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
  const strength = {}, effect = {}, kind = {}, stage = {};
  for (const c of cases) {
    for (const ch of c.chains ?? []) {
      for (const l of ch.links) {
        strength[l.strength] = (strength[l.strength] || 0) + 1;
        if (l.stage) stage[l.stage] = (stage[l.stage] || 0) + 1;
        for (const p of l.participation) {
          effect[p.effect] = (effect[p.effect] || 0) + 1;
          kind[p.kind] = (kind[p.kind] || 0) + 1;
        }
      }
    }
  }
  return { strength, effect, kind, stage };
}

function glossaryMark(item) {
  if (item.badge) return `<span class="g ${item.badge}">${item.label}</span>`;
  if (item.dot) return `<span class="k-dotwrap"><i class="cg-dot ${item.dot}"></i>${item.label}</span>`;
  if (item.swatch) return `<span class="k-dotwrap"><i class="k-sw k-sw-${item.swatch}"></i>${item.label}</span>`;
  return `<span class="k-plain">${item.label}</span>`;
}

function renderKey() {
  const counts = glossaryCounts();

  const howto = `<section class="k-sec k-howto">
    <h3>How to Use This Tool</h3>
    <ol class="k-steps">${HOW_TO.map(st =>
      `<li><strong>${st.title}.</strong> ${st.desc}</li>`).join('')}</ol>
  </section>`;

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
    ? howto + sections + timeline
    : howto + timeline + sections;
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

  let shared = 0;
  let near = 0;
  let body = '';
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
  } else {
    body = c.entries.map(e => entryHtml(e)).join('');
  }

  const parts = [];
  if (shared) parts.push(`<strong>${shared}</strong> share a source with <strong>${link?.id}</strong>`);
  if (near) parts.push(`<strong>${near}</strong> fall inside its participation dates`);
  const note = link
    ? `<div class="ct-note">${parts.length
        ? parts.join('; ') + '; the rest are dimmed.'
        : `Nothing on the timeline cites or coincides with link <strong>${link.id}</strong> yet.`}
      </div>`
    : `<div class="ct-note">The full chronology. Select a link on the map to highlight the entries behind it.</div>`;

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

function renderChainSelector() {
  const chains = curChains();
  const host = el('ch-sel');
  if (chains.length < 2) {
    host.innerHTML = '';
    host.classList.add('hide');
    return;
  }
  host.classList.remove('hide');
  host.innerHTML = chains.map((c, i) =>
    `<button class="chb${i === state.chainIdx ? ' on' : ''}" data-chain="${c.id}">${c.label}</button>`
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
  const sel = { linkId: state.linkId, partIdx: state.partIdx };
  renderMap(map, ch, sel);
  if (state.gapsOpen && !state.linkId) renderGaps(el('ch-detail'), ch);
  else renderDetail(el('ch-detail'), ch, sel);
  if (state.rightTab === 'timeline') renderChainTimeline();
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
    const b = e.target.closest('[data-link]');
    if (!b) return;
    // Selecting a link always brings up its details, whichever pane is open.
    if (state.rightTab !== 'detail') setRightTab('detail');
    navigate({ linkId: b.dataset.link, partIdx: null });
  });

  el('ch-right-tabs').addEventListener('click', e => {
    const b = e.target.closest('[data-rt]');
    if (b) setRightTab(b.dataset.rt);
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-openkey]')) setKeyPanel(true);
  });

  el('ch-detail').addEventListener('click', e => {
    if (e.target.closest('[data-gaps]')) {
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
      navigate(back.dataset.back === 'chain' ? { linkId: null, partIdx: null } : { partIdx: null });
      return;
    }
    const p = e.target.closest('[data-part]');
    if (p) navigate({ partIdx: Number(p.dataset.part) });
  });

  el('ch-detail').addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const p = e.target.closest('[data-part]');
    if (p) {
      e.preventDefault();
      navigate({ partIdx: Number(p.dataset.part) });
    }
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
    const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1
      : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    if (state.rightTab !== 'detail') setRightTab('detail');
    navigate({ linkId: stepLink(curChain(), state.linkId, dir), partIdx: null });
  });

  let t;
  window.addEventListener('resize', () => {
    if (state.view !== 'chain') return;
    clearTimeout(t);
    t = setTimeout(renderChain, 150);
  });

  router.onChange(onHashChange);
}

/* -------------------------------- boot ----------------------------------- */

bindEvents();
onHashChange();
