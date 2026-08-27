import { srcHtml, attr } from './util.js';
import { CAT } from './categories.js';
import { STRENGTH_LABEL } from './chain-view.js';
import { FAILURE_LABEL } from './cases/helpers.js';

/* --------------------------------------------------------------------------
 * The timeline as the central spine.
 *
 * Every timeline entry is a box on a single chronological spine (blue).
 * Mechanisms that already existed sit on the left (gray), each connected to
 * the event where it should have fired, tagged with how it failed. Measured
 * impacts sit on the right (dark green), with arrows from the specific events
 * where the causal claim holds, each arrow carrying a strength flag. Proposed
 * interventions (orange) anchor at the point on the spine where they would
 * intervene; every proposal's causal chain renders below its anchor, always
 * open, one row per proposal, with the evidence on red cards under every
 * link. A dot on a grade pill means counter-evidence exists.
 * -------------------------------------------------------------------------- */

const L = {
  canvasW: 1900,
  mechX: 24, mechW: 252,
  spineX: 392, spineW: 330,
  bandX: 800, bandW: 700,
  impX: 1616, impW: 258,
  padTop: 70, padBottom: 220,
  entryGap: 40, railGap: 14,
  chainBoxH: 0, chainGap: 66
};

const plain = s => String(s).replace(/<[^>]+>/g, '');

/** Index of the entry whose plain text contains the anchor. -1 if none. */
export function anchorIndex(entries, anchor) {
  return entries.findIndex(e => plain(e.text).includes(anchor));
}

function entryBoxHtml(e, i) {
  const c = CAT[e.cat];
  return `<div class="sp-ent" data-e="${i}" tabindex="0">
    <div class="sp-ent-hd"><span class="sp-date">${e.date}</span><span class="ebadge ${c.badge}">${c.label}</span></div>
    <div class="sp-ent-txt">${e.text}</div>
  </div>`;
}

/**
 * Render the spine map into `el`.
 * sel: { kind: null|'entry'|'mech'|'impact'|'prop'|'proplink', idx, linkIdx }
 * The DOM is rebuilt when the case changes or when the expanded proposal
 * changes; every other selection updates highlights in place.
 */
export function renderSpineMap(el, caseObj, spine, sel = {}) {
  const entries = caseObj.entries;

  el.innerHTML = `<div class="sp"><svg class="sp-edges"></svg></div>`;
  const stage = el.querySelector('.sp');
  const svg = el.querySelector('.sp-edges');
  stage.style.width = `${L.canvasW}px`;

  // Pass 1: entry boxes, measure heights.
  const entEls = entries.map((e, i) => {
    const d = document.createElement('div');
    d.innerHTML = entryBoxHtml(e, i);
    const box = d.firstElementChild;
    box.style.left = `${L.spineX}px`;
    box.style.width = `${L.spineW}px`;
    stage.appendChild(box);
    return box;
  });

  // Proposal boxes grouped by anchor entry, built and measured up front so
  // the vertical layout can reserve real room for each stack.
  const PROP_W = 232;
  const propAt = new Map(); // entryIdx -> [{p, pi, el, h}]
  spine.proposals.forEach((p, pi) => {
    const i = anchorIndex(entries, p.anchor);
    if (i === -1) return;
    const el = document.createElement('button');
    el.className = 'sp-propbox';
    el.dataset.pr = pi;
    el.dataset.ae = i;
    el.title = p.method;
    el.innerHTML = `<span class="sp-propbox-kick">Proposed Public Participation</span>${p.name}`;
    el.style.width = `${PROP_W}px`;
    el.style.visibility = 'hidden';
    stage.appendChild(el);
    (propAt.get(i) || propAt.set(i, []).get(i)).push({ p, pi, el, h: el.offsetHeight });
  });

  // Reserved height for one proposal's always-open chain row: the tallest
  // link's full evidence stack (every evidence and counter-evidence card,
  // uncollapsed), plus arrows and the intended-effect label.
  const CHAIN_ROW_GAP = 48;
  const expH = p => {
    const maxCards = Math.max(...p.links.map(lk =>
      Math.max((lk.evidence ?? []).length + (lk.counterEvidence ?? []).length, 1)));
    return 200 + maxCards * 56 + (p.comparables?.length ? 44 : 0);
  };

  // Pass 2: vertical layout.
  const yTop = [];
  let y = L.padTop;
  entries.forEach((e, i) => {
    yTop[i] = y;
    const h = entEls[i].offsetHeight;
    const list = propAt.get(i) || [];
    const stackH = list.length ? list.reduce((a, x) => a + x.h + 8, 0) + 6 : 0;
    const chainsH = list.reduce((a, x) => a + expH(x.p) + CHAIN_ROW_GAP, 0);
    const gap = L.entryGap + Math.max(0, stackH - h) + chainsH;
    y += h + gap;
  });
  const totalH = y - L.entryGap + L.padBottom;
  stage.style.height = `${totalH}px`;
  svg.setAttribute('viewBox', `0 0 ${L.canvasW} ${Math.round(totalH)}`);
  svg.setAttribute('width', L.canvasW);
  svg.setAttribute('height', Math.round(totalH));
  entEls.forEach((b, i) => { b.style.top = `${Math.round(yTop[i])}px`; });

  const geo = i => ({
    x1: L.spineX, x2: L.spineX + L.spineW,
    top: yTop[i], bot: yTop[i] + entEls[i].offsetHeight,
    cy: yTop[i] + entEls[i].offsetHeight / 2
  });

  let paths = '';
  const arw = (id, color) => `<marker id="sp-arw-${id}" viewBox="0 0 10 10" refX="9" refY="5"
      markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 L 2.8 5 z" fill="${color}"></path></marker>`;
  // Curved connectors end in a node dot instead of an arrowhead: a dot needs
  // no orientation, so a steep or curved approach never looks bent.
  const dot = (id, color) => `<marker id="sp-dot-${id}" viewBox="0 0 10 10" refX="5" refY="5"
      markerWidth="4.6" markerHeight="4.6"><circle cx="5" cy="5" r="4.4" fill="${color}"></circle></marker>`;
  const defs = `<defs>${arw('spine', '#2b6cb0')}${arw('chain', '#c05621')}${dot('mech', '#6b6457')}${dot('imp', '#1e6b3c')}${dot('chain', '#c05621')}</defs>`;

  // Spine arrows between consecutive entries.
  const cx = L.spineX + L.spineW / 2;
  for (let i = 0; i < entries.length - 1; i++) {
    const a = geo(i), b = geo(i + 1);
    paths += `<path class="sp-edge sp-edge-spine" marker-end="url(#sp-arw-spine)"
      d="M ${cx} ${a.bot} L ${cx} ${b.top - 2}"></path>`;
  }

  // Mechanisms rail (left).
  let railBot = L.padTop;
  spine.mechanisms.forEach((m, mi) => {
    const idxs = m.anchors.map(a => anchorIndex(entries, a)).filter(i => i !== -1);
    const targetY = idxs.length ? Math.min(...idxs.map(i => yTop[i])) : L.padTop;
    const d = document.createElement('div');
    d.className = `sp-mech sp-fail-${m.failure}`;
    d.dataset.m = mi;
    d.tabIndex = 0;
    d.innerHTML = `<div class="sp-mech-name">${m.name}</div>
      <span class="sp-failtag ft-${m.failure}">${FAILURE_LABEL[m.failure]}</span>`;
    d.style.left = `${L.mechX}px`;
    d.style.width = `${L.mechW}px`;
    stage.appendChild(d);
    const my = Math.max(targetY, railBot);
    d.style.top = `${Math.round(my)}px`;
    railBot = my + d.offsetHeight + L.railGap;
    const mx = L.mechX + L.mechW;
    const myc = my + d.offsetHeight / 2;
    for (const i of idxs) {
      const g = geo(i);
      const dx = (g.x1 - mx) * 0.5;
      paths += `<path class="sp-edge sp-edge-mech" data-m="${mi}" marker-end="url(#sp-dot-mech)"
        d="M ${mx} ${myc} C ${mx + dx} ${myc}, ${g.x1 - dx} ${g.cy}, ${g.x1 - 3} ${g.cy}"></path>`;
    }
  });

  // Impacts rail (right). Each incoming arrow's strength renders as a pill
  // inside the card itself, in arrow order (top arrow first); a dot marks
  // counter-evidence on the impact. Click the card for the full record.
  let impBot = L.padTop;
  spine.impacts.forEach((im, ii) => {
    const froms = im.from
      .map(f => ({ f, i: anchorIndex(entries, f.anchor) }))
      .filter(x => x.i !== -1)
      .sort((a, b) => yTop[a.i] - yTop[b.i]);
    const targetY = froms.length ? Math.min(...froms.map(x => yTop[x.i])) : L.padTop;
    const pills = froms.map(x =>
      `<span class="sp-grade fl-${x.f.strength}">${STRENGTH_LABEL[x.f.strength]}</span>`
    ).join('');
    const d = document.createElement('div');
    d.className = 'sp-imp';
    d.dataset.i = ii;
    d.tabIndex = 0;
    d.innerHTML = `<div class="sp-imp-kick">Measured impact</div><div class="sp-imp-name">${im.name}</div>
      <div class="sp-imp-headline">${im.headline}</div>
      <div class="sp-imp-grades">${pills}</div>`;
    d.style.left = `${L.impX}px`;
    d.style.width = `${L.impW}px`;
    stage.appendChild(d);
    const iy = Math.max(targetY, impBot);
    d.style.top = `${Math.round(iy)}px`;
    impBot = iy + d.offsetHeight + L.railGap;
    const ix = L.impX;
    const iyc = iy + d.offsetHeight / 2;
    for (const { i } of froms) {
      const g = geo(i);
      paths += `<path class="sp-edge sp-edge-imp" data-i="${ii}" marker-end="url(#sp-dot-imp)"
        d="M ${g.x2} ${g.cy} C ${g.x2 + 120} ${g.cy}, ${ix - 160} ${iyc}, ${ix - 3} ${iyc}"></path>`;
    }
  });

  // Proposal boxes, the grouping bracket that alludes to their anchor event
  // (a bracket, not an arrow: attachment, not causation), and every
  // proposal's causal chain, always open, one row per proposal in box order.
  for (const [i, list] of propAt) {
    const g = geo(i);
    const px = g.x2 + 46;
    let py = g.top;
    list.forEach((rec, k) => {
      rec.el.style.left = `${px}px`;
      rec.el.style.top = `${Math.round(py)}px`;
      rec.el.style.visibility = 'visible';
      rec.y = py;
      rec.k = k;
      // Dotted tie from the bracket to this box.
      paths += `<path class="sp-edge sp-edge-allude-tie"
        d="M ${g.x2 + 26} ${g.cy} C ${g.x2 + 36} ${g.cy}, ${px - 10} ${py + rec.h / 2}, ${px - 2} ${py + rec.h / 2}"></path>`;
      py += rec.h + 8;
    });
    // The bracket hugs the anchor event's right edge, grouping it.
    paths += `<path class="sp-edge sp-edge-allude"
      d="M ${g.x2 + 8} ${g.top + 6} L ${g.x2 + 18} ${g.top + 6} L ${g.x2 + 18} ${g.bot - 6} L ${g.x2 + 8} ${g.bot - 6}"></path>
      <path class="sp-edge sp-edge-allude" d="M ${g.x2 + 18} ${g.cy} L ${g.x2 + 26} ${g.cy}"></path>`;

    // Chain rows, one per proposal, stacked below the anchor and its boxes.
    let rowY = Math.max(g.bot, py) + 32;
    for (const rec of list) {
      const { p, pi } = rec;
      const baseY = rowY;
      const n = p.links.length;
      const boxW = Math.min(176, Math.floor((L.bandW - (n - 1) * L.chainGap) / n));
      const startX = L.bandX;
      let prev = null;
      let rowBot = baseY;
      p.links.forEach((lk, li) => {
        const bx = startX + li * (boxW + L.chainGap);
        const d = document.createElement('button');
        d.className = `sp-chainbox${lk.strength === 'unstudied' ? ' sp-chain-un' : ''}`;
        d.dataset.pr = pi;
        d.dataset.pl = li;
        d.innerHTML = `<span class="sp-chain-name">${lk.name}</span>
          <span class="sp-grade fl-${lk.strength}">${STRENGTH_LABEL[lk.strength]}</span>`;
        d.style.left = `${bx}px`;
        d.style.top = `${Math.round(baseY)}px`;
        d.style.width = `${boxW}px`;
        stage.appendChild(d);
        const h = d.offsetHeight;
        const cyc = baseY + h / 2;
        if (prev) {
          paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-arw-chain)"
            d="M ${prev.x2} ${prev.cy} L ${bx - 3} ${cyc}"></path>`;
        } else {
          // Arrow from the proposal box into its own chain row: out the
          // box's right side, down a lane right of the box stack, into the
          // first chain card's top. One lane per box so drops never cross
          // a lower box.
          const laneX = px + PROP_W + 10 + rec.k * 8;
          const oy = rec.y + rec.h / 2;
          paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-dot-chain)"
            d="M ${px + PROP_W} ${oy} C ${laneX - 4} ${oy}, ${laneX} ${oy + 6}, ${laneX} ${Math.min(oy + 60, baseY - 50)}
               L ${laneX} ${baseY - 44} C ${laneX} ${baseY - 14}, ${bx + boxW / 2} ${baseY - 40}, ${bx + boxW / 2} ${baseY - 3}"></path>`;
        }
        // The evidence itself hangs under the card, in red, as the original
        // sketch proposed: every evidence and counter-evidence entry gets its
        // own card, uncollapsed. Click any card to read the full record.
        let ey = baseY + h + 8;
        const addCard = (kick, label, extraCls = '') => {
          const ec = document.createElement('button');
          ec.className = `sp-evcard${extraCls}`;
          ec.dataset.pr = pi;
          ec.dataset.pl = li;
          ec.innerHTML = `<span class="sp-evcard-kick">${kick}</span>${label}`;
          ec.style.left = `${bx}px`;
          ec.style.top = `${Math.round(ey)}px`;
          ec.style.width = `${boxW}px`;
          stage.appendChild(ec);
          ey += ec.offsetHeight + 5;
        };
        if ((lk.evidence ?? []).length) {
          for (const ev of lk.evidence) addCard('Evidence', ev.srcs?.map(x => x.l).join('; ') || 'Source');
        } else if (lk.strength === 'unstudied') {
          addCard('Evidence', 'No study found', ' sp-evcard-un');
        }
        for (const ev of (lk.counterEvidence ?? [])) {
          addCard('Counter', ev.srcs?.map(x => x.l).join('; ') || 'Source', ' sp-evcard-ctr');
        }
        rowBot = Math.max(rowBot, ey);
        prev = { x2: bx + boxW, cy: cyc, bx, boxW, stackBot: ey };
      });
      // Terminal arrows into the measured impact boxes. Dashed: these are the
      // proposal's INTENDED effects on the measured quantities, not documented
      // causation like the solid event arrows.
      for (const name of p.impactsMeasured) {
        const ii = spine.impacts.findIndex(x => x.name === name);
        const box = stage.querySelector(`.sp-imp[data-i="${ii}"]`);
        if (!box || !prev) continue;
        const iy = parseFloat(box.style.top) + box.offsetHeight / 2;
        paths += `<path class="sp-edge sp-edge-chain sp-edge-term" marker-end="url(#sp-dot-chain)"
          d="M ${prev.x2} ${prev.cy} C ${prev.x2 + 80} ${prev.cy}, ${L.impX - 120} ${iy}, ${L.impX - 3} ${iy}"></path>`;
      }
      // The comparable real-world cases behind this chain, named on the map.
      // Click shows ONLY the comparable cases in the detail pane.
      if ((p.comparables ?? []).length) {
        const cl = document.createElement('button');
        cl.className = 'sp-complist';
        cl.dataset.pr = pi;
        cl.innerHTML = `<span class="sp-complist-kick">Comparable cases:</span> ${p.comparables.map(c => c.name).join(' &middot; ')}`;
        cl.style.left = `${startX}px`;
        cl.style.top = `${Math.round(rowBot + 8)}px`;
        cl.style.width = `${L.bandW}px`;
        stage.appendChild(cl);
        rowBot = rowBot + 8 + cl.offsetHeight;
      }
      rowY = rowBot + 26 + CHAIN_ROW_GAP;
    }
  }

  svg.innerHTML = defs + paths;

  highlightSpine(el, sel);
}

/** Update selection highlights in place. */
export function highlightSpine(el, sel = {}) {
  el.querySelectorAll('.sp .sel').forEach(n => n.classList.remove('sel'));
  el.querySelectorAll('.sp-edge.on').forEach(n => n.classList.remove('on'));
  el.querySelectorAll('.sp-ent-prop').forEach(n => n.classList.remove('sp-ent-prop'));
  const on = q => el.querySelectorAll(q).forEach(n => n.classList.add('sel'));
  const ringAnchor = pi => {
    const box = el.querySelector(`.sp-propbox[data-pr="${pi}"]`);
    if (box?.dataset.ae != null) {
      el.querySelector(`.sp-ent[data-e="${box.dataset.ae}"]`)?.classList.add('sp-ent-prop');
    }
  };
  if (sel.kind === 'entry') on(`.sp-ent[data-e="${sel.idx}"]`);
  else if (sel.kind === 'mech') {
    on(`.sp-mech[data-m="${sel.idx}"]`);
    el.querySelectorAll(`.sp-edge-mech[data-m="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  } else if (sel.kind === 'impact') {
    on(`.sp-imp[data-i="${sel.idx}"]`);
    el.querySelectorAll(`.sp-edge-imp[data-i="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  } else if (sel.kind === 'proplink') {
    on(`.sp-chainbox[data-pr="${sel.idx}"][data-pl="${sel.linkIdx}"]`);
    ringAnchor(sel.idx);
  } else if (sel.kind === 'prop') {
    on(`.sp-propbox[data-pr="${sel.idx}"]`);
    ringAnchor(sel.idx);
  } else if (sel.kind === 'propcomp') {
    on(`.sp-complist[data-pr="${sel.idx}"]`);
    ringAnchor(sel.idx);
  }
}

/* ------------------------------ detail pane ------------------------------ */

function evHtml(list, kind) {
  if (!list?.length) return '';
  const heading = kind === 'counter' ? 'Counter-Evidence' : 'Evidence';
  const items = list.map(ev => `
    <li class="ev">
      <span class="ev-grade gr-${ev.grade}">${STRENGTH_LABEL[ev.grade]}</span>
      <div class="ev-body">
        <div class="ev-finding">${ev.finding}</div>
        ${ev.caveat ? `<div class="ev-caveat">Caveat: ${ev.caveat}</div>` : ''}
        <div class="ev-srcs">${srcHtml(ev.srcs)}</div>
      </div>
    </li>`).join('');
  return `<div class="ln-sec ln-sec-${kind}"><h4>${heading}</h4><ul class="ev-list">${items}</ul></div>`;
}

function entryDetail(caseObj, i) {
  const e = caseObj.entries[i];
  const c = CAT[e.cat];
  return `<div class="cd">
    <div class="cd-kick">Timeline Event</div>
    <div class="cd-head"><span class="cd-id">${e.date}</span> <span class="ebadge ${c.badge}">${c.label}</span></div>
    <p class="cd-claim">${e.text}</p>
    <div class="eact"><span class="act-label">Actors:</span> ${e.actors}</div>
    <div class="ev-srcs">${srcHtml(e.srcs)}</div>
  </div>`;
}

function mechDetail(spine, i) {
  const m = spine.mechanisms[i];
  return `<div class="cd">
    <div class="cd-kick cd-kick-mech">Mechanism That Already Existed</div>
    <div class="cd-head"><span class="cd-id">${m.name}</span></div>
    <p class="cd-flow"><span class="sp-failtag ft-${m.failure}">${FAILURE_LABEL[m.failure]}</span></p>
    <div class="eact"><span class="act-label">Actor:</span> ${m.actor}</div>
    <p class="cd-claim"><strong>${m.note}.</strong></p>
    <p class="cd-claim">${m.detail}</p>
    ${m.srcs?.length ? `<div class="ev-srcs">${srcHtml(m.srcs)}</div>` : ''}
  </div>`;
}

function impactDetail(spine, i) {
  const im = spine.impacts[i];
  const arrows = im.from.map(f => `
    <li class="sp-arrowrow"><span class="ev-grade gr-${f.strength}">${STRENGTH_LABEL[f.strength]}</span>
      <div class="ev-body"><div class="ev-finding">From: ${f.anchor}${f.note ? ` <em>(${f.note})</em>` : ''}</div></div></li>`).join('');
  return `<div class="cd">
    <div class="cd-kick cd-kick-imp">Measured Impact</div>
    <div class="cd-head"><span class="cd-id">${im.name}</span></div>
    <p class="cd-claim"><strong>${im.headline}</strong></p>
    <p class="cd-claim">${im.measures}</p>
    <div class="ln-sec"><h4>Causal Arrows From the Timeline</h4><ul class="ev-list">${arrows}</ul></div>
    ${evHtml(im.evidence, 'for')}
    ${evHtml(im.counterEvidence, 'counter')}
  </div>`;
}

function compHtml(list) {
  if (!list?.length) return '';
  const items = list.map(c => `
    <li class="sp-comp">
      <div class="pa-hd"><span class="pa-name">${c.name}</span></div>
      <div class="pa-grade"><span class="ev-grade gr-${c.strength}">${STRENGTH_LABEL[c.strength]}</span></div>
      <div class="pa-desc">${c.outcome}</div>
      <div class="pa-loc"><strong>Location:</strong> ${c.where} (${c.when})</div>
      ${c.srcs?.length ? `<div class="ev-srcs">${srcHtml(c.srcs)}</div>` : ''}
    </li>`).join('');
  return `<div class="ln-sec ln-sec-comp"><h4>Comparable Real-World Cases</h4><ul class="pa-list">${items}</ul></div>`;
}

function propCompDetail(spine, i) {
  const p = spine.proposals[i];
  return `<div class="cd">
    <button class="cd-back" data-back="prop">&larr; ${attr(p.name)}</button>
    <div class="cd-kick cd-kick-prop">Proposed Public Participation</div>
    <div class="cd-head"><span class="cd-id">${p.name}</span></div>
    ${compHtml(p.comparables)}
  </div>`;
}

function propDetail(spine, i) {
  const p = spine.proposals[i];
  const chainRows = p.links.map((lk, li) => `
    <li class="sp-chainrow" data-pl="${li}" tabindex="0">
      <span class="ev-grade gr-${lk.strength}">${STRENGTH_LABEL[lk.strength]}</span>
      <div class="ev-body"><div class="ev-finding">${lk.name}</div></div>
    </li>`).join('');
  return `<div class="cd">
    <div class="cd-kick cd-kick-prop">Proposed Public Participation</div>
    <div class="cd-head"><span class="cd-id">${p.name}</span> <span class="pp-method">${p.method}</span></div>
    <p class="cd-claim">${p.description}</p>
    <div class="ln-sec">
      <p class="cd-claim"><span class="act-label">Where:</span> ${p.where}</p>
      <p class="cd-claim"><span class="act-label">When:</span> ${p.when}</p></div>
    <div class="ln-sec"><h4>The Causal Chain, Link by Link</h4>
      <p class="cd-claim sp-hintline">Click a link to see its evidence and counter-evidence.</p>
      <ul class="ev-list">${chainRows}</ul></div>
    <div class="ln-sec"><h4>Intended Impacts</h4>
      ${p.impactsMeasured.length ? `<p class="cd-claim"><span class="act-label">Measured impacts this chain reaches:</span> ${p.impactsMeasured.join('; ')}</p>` : ''}
      ${p.impactsConjectured.length ? `<p class="cd-claim"><span class="act-label">Conjectured impacts (not measured):</span> ${p.impactsConjectured.join('; ')}</p>` : ''}
    </div>
    ${compHtml(p.comparables)}
    ${p.srcs?.length ? `<div class="ev-srcs">${srcHtml(p.srcs)}</div>` : ''}
  </div>`;
}

function propLinkDetail(spine, i, li) {
  const p = spine.proposals[i];
  const lk = p.links[li];
  return `<div class="cd">
    <button class="cd-back" data-back="prop">&larr; ${attr(p.name)}</button>
    <div class="cd-kick cd-kick-prop">Causal Link ${li + 1} of ${p.links.length}</div>
    <div class="cd-head"><span class="cd-id">${lk.name}</span>
      <span class="ev-grade gr-${lk.strength}">${STRENGTH_LABEL[lk.strength]}</span></div>
    <p class="cd-claim">${lk.claim}</p>
    ${lk.strength === 'unstudied' ? `<p class="cd-claim"><em>No study tests this link directly.${(lk.evidence ?? []).length ? ' The evidence below comes from nearby cases and other domains.' : ''}</em></p>` : ''}
    ${evHtml(lk.evidence, 'for')}
    ${evHtml(lk.counterEvidence, 'counter')}
    ${compHtml(p.comparables)}
  </div>`;
}

function overview(caseObj, spine) {
  const nProp = spine.proposals.length;
  const nMech = spine.mechanisms.length;
  const nImp = spine.impacts.length;
  return `<div class="cd cd-intro">
    <div class="cd-hint">The timeline runs down the center in order. Mechanisms that already
      existed sit on the left, tagged with how they failed. Measured impacts sit on the
      right; each arrow carries a strength flag you can click. Orange boxes are the
      proposed public participation from the design work, bracketed to the event where they
      would intervene, each with its causal chain drawn below and the evidence on
      the cards.</div>
    <div class="cd-sum">
      <span class="cd-sum-lbl">Timeline</span><div class="cd-sum-pills"><span class="g g-neutral">${caseObj.entries.length} Events</span></div>
      <span class="cd-sum-lbl">Existing</span><div class="cd-sum-pills"><span class="g g-mech">${nMech} Mechanisms That Should Have Worked</span></div>
      <span class="cd-sum-lbl">Measured</span><div class="cd-sum-pills"><span class="g g-imp">${nImp} Measured Impacts</span></div>
      <span class="cd-sum-lbl">Proposed</span><div class="cd-sum-pills"><span class="g g-prop">${nProp} Proposed Public Participation</span></div>
    </div>
  </div>`;
}

export function renderSpineDetail(el, caseObj, spine, sel = {}) {
  // About This Case lives in the toggle under the top bar, not here.
  if (sel.kind === 'entry') el.innerHTML = entryDetail(caseObj, sel.idx);
  else if (sel.kind === 'mech') el.innerHTML = mechDetail(spine, sel.idx);
  else if (sel.kind === 'impact') el.innerHTML = impactDetail(spine, sel.idx);
  else if (sel.kind === 'prop') el.innerHTML = propDetail(spine, sel.idx);
  else if (sel.kind === 'proplink') el.innerHTML = propLinkDetail(spine, sel.idx, sel.linkIdx);
  else if (sel.kind === 'propcomp') el.innerHTML = propCompDetail(spine, sel.idx);
  else el.innerHTML = overview(caseObj, spine);
  el.scrollTop = 0;
}
