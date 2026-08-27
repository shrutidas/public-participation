import { srcHtml, attr } from './util.js';
import { CAT } from './categories.js';
import { STRENGTH_LABEL } from './chain-view.js';
import { FAILURE_LABEL } from './cases/helpers.js';

/* --------------------------------------------------------------------------
 * The timeline as the central spine.
 *
 * Every timeline entry is a box on a single chronological spine (blue).
 * Mechanisms that already existed sit on the left (green), each connected to
 * the event where it should have fired, tagged with how it failed. Measured
 * impacts sit on the right (dark green), with arrows from the specific events
 * where the causal claim holds, each arrow carrying a strength flag. Proposed
 * interventions (orange) anchor at the point on the spine where they would
 * intervene; selecting one expands its causal chain to the right, one at a
 * time, with an evidence flag under every link. Red flags carry the evidence;
 * a dot on a flag means counter-evidence exists.
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
  const openProp = sel.kind === 'prop' || sel.kind === 'proplink' ? sel.idx : null;

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

  // Proposal chips grouped by anchor entry.
  const propAt = new Map(); // entryIdx -> [{p, pi}]
  spine.proposals.forEach((p, pi) => {
    const i = anchorIndex(entries, p.anchor);
    if (i === -1) return;
    (propAt.get(i) || propAt.set(i, []).get(i)).push({ p, pi });
  });

  // Measure a probe chip for stacking room.
  const probe = document.createElement('button');
  probe.className = 'sp-propchip';
  probe.style.visibility = 'hidden';
  probe.textContent = 'Probe';
  stage.appendChild(probe);
  const chipH = probe.offsetHeight || 26;
  probe.remove();

  // Expansion height for the open proposal's chain.
  const EXP_H = 360;

  // Pass 2: vertical layout.
  const yTop = [];
  let y = L.padTop;
  entries.forEach((e, i) => {
    yTop[i] = y;
    const h = entEls[i].offsetHeight;
    const chips = (propAt.get(i) || []).length;
    let gap = L.entryGap + (chips ? chips * (chipH + 6) + 8 : 0);
    if (openProp != null && propAt.get(i)?.some(x => x.pi === openProp)) gap += EXP_H;
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
  const defs = `<defs>
    <marker id="sp-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5"
      orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker>
  </defs>`;

  // Spine arrows between consecutive entries.
  const cx = L.spineX + L.spineW / 2;
  for (let i = 0; i < entries.length - 1; i++) {
    const a = geo(i), b = geo(i + 1);
    paths += `<path class="sp-edge sp-edge-spine" marker-end="url(#sp-arw)"
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
      paths += `<path class="sp-edge sp-edge-mech" data-m="${mi}" marker-end="url(#sp-arw)"
        d="M ${mx} ${myc} C ${mx + dx} ${myc}, ${g.x1 - dx} ${g.cy}, ${g.x1 - 3} ${g.cy}"></path>`;
    }
  });

  // Impacts rail (right).
  let impBot = L.padTop;
  const flagEls = [];
  spine.impacts.forEach((im, ii) => {
    const froms = im.from
      .map(f => ({ f, i: anchorIndex(entries, f.anchor) }))
      .filter(x => x.i !== -1);
    const targetY = froms.length ? Math.min(...froms.map(x => yTop[x.i])) : L.padTop;
    const d = document.createElement('div');
    d.className = 'sp-imp';
    d.dataset.i = ii;
    d.tabIndex = 0;
    d.innerHTML = `<div class="sp-imp-kick">Measured impact</div><div class="sp-imp-name">${im.name}</div>`;
    d.style.left = `${L.impX}px`;
    d.style.width = `${L.impW}px`;
    stage.appendChild(d);
    const iy = Math.max(targetY, impBot);
    d.style.top = `${Math.round(iy)}px`;
    impBot = iy + d.offsetHeight + L.railGap;
    const ix = L.impX;
    const iyc = iy + d.offsetHeight / 2;
    for (const { f, i } of froms) {
      const g = geo(i);
      const midX = (g.x2 + ix) / 2;
      paths += `<path class="sp-edge sp-edge-imp" data-i="${ii}" marker-end="url(#sp-arw)"
        d="M ${g.x2} ${g.cy} C ${g.x2 + 120} ${g.cy}, ${ix - 160} ${iyc}, ${ix - 3} ${iyc}"></path>`;
      // Strength flag pinned to the impact box's left edge, stacked per arrow.
      flagEls.push({
        cls: `sp-flag fl-${f.strength}`, data: { i: ii },
        x: ix - 86, y: iy + 4 + flagEls.filter(fl => fl.data.i === ii).length * 24,
        label: STRENGTH_LABEL[f.strength],
        counter: (im.counterEvidence ?? []).length > 0
      });
    }
  });

  // Proposal chips, and the open proposal's expanded chain.
  for (const [i, list] of propAt) {
    const g = geo(i);
    list.forEach(({ p, pi }, k) => {
      const b = document.createElement('button');
      b.className = `sp-propchip${openProp === pi ? ' on' : ''}`;
      b.dataset.pr = pi;
      b.title = p.method;
      b.textContent = p.name;
      b.style.left = `${L.spineX + 18}px`;
      b.style.top = `${Math.round(g.bot + 8 + k * (chipH + 6))}px`;
      b.style.maxWidth = `${L.spineW + 120}px`;
      stage.appendChild(b);
      if (openProp === pi) entEls[i].classList.add('sp-ent-prop');
    });

    const open = list.find(x => x.pi === openProp);
    if (open) {
      const { p, pi } = open;
      const chips = list.length;
      const baseY = g.bot + 8 + chips * (chipH + 6) + 26;
      const n = p.links.length;
      const boxW = Math.min(176, Math.floor((L.bandW - (n - 1) * L.chainGap) / n));
      const startX = L.bandX;
      let prev = null;
      if (p.banner) {
        const bn = document.createElement('div');
        bn.className = 'sp-banner';
        bn.textContent = 'No study tests this chain end to end; each link is graded on its own evidence.';
        bn.style.left = `${startX}px`;
        bn.style.top = `${Math.round(baseY - 24)}px`;
        bn.style.width = `${L.bandW}px`;
        stage.appendChild(bn);
      }
      p.links.forEach((lk, li) => {
        const bx = startX + li * (boxW + L.chainGap);
        const d = document.createElement('button');
        d.className = `sp-chainbox${lk.strength === 'unstudied' ? ' sp-chain-un' : ''}${sel.kind === 'proplink' && sel.idx === pi && sel.linkIdx === li ? ' on' : ''}`;
        d.dataset.pr = pi;
        d.dataset.pl = li;
        d.innerHTML = `<span class="sp-chain-name">${lk.name}</span>
          <span class="sp-grade fl-${lk.strength}">${STRENGTH_LABEL[lk.strength]}${(lk.counterEvidence ?? []).length ? '<i class="sp-ctr" title="Counter-evidence exists"></i>' : ''}</span>`;
        d.style.left = `${bx}px`;
        d.style.top = `${Math.round(baseY)}px`;
        d.style.width = `${boxW}px`;
        stage.appendChild(d);
        const h = d.offsetHeight;
        const cyc = baseY + h / 2;
        if (prev) {
          paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-arw)"
            d="M ${prev.x2} ${prev.cy} L ${bx - 3} ${cyc}"></path>`;
        } else {
          // Arrow from the anchored entry into the first chain box.
          paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-arw)"
            d="M ${g.x2} ${g.cy} C ${g.x2 + 60} ${g.cy}, ${bx - 60} ${cyc}, ${bx - 3} ${cyc}"></path>`;
        }
        // The evidence itself hangs under the card, in red, as the original
        // sketch proposed: one card for the lead evidence, one for the lead
        // counter-evidence. Click either to read both sides in full.
        let ey = baseY + h + 8;
        const evTop = (lk.evidence ?? [])[0];
        const ctTop = (lk.counterEvidence ?? [])[0];
        if (evTop) {
          const ec = document.createElement('button');
          ec.className = 'sp-evcard';
          ec.dataset.pr = pi;
          ec.dataset.pl = li;
          ec.innerHTML = `<span class="sp-evcard-kick">Evidence</span>${evTop.srcs?.[0]?.l ?? 'Source'}`;
          ec.style.left = `${bx}px`;
          ec.style.top = `${Math.round(ey)}px`;
          ec.style.width = `${boxW}px`;
          stage.appendChild(ec);
          ey += ec.offsetHeight + 5;
        } else if (lk.strength === 'unstudied') {
          const ec = document.createElement('button');
          ec.className = 'sp-evcard sp-evcard-un';
          ec.dataset.pr = pi;
          ec.dataset.pl = li;
          ec.innerHTML = `<span class="sp-evcard-kick">Evidence</span>No study found`;
          ec.style.left = `${bx}px`;
          ec.style.top = `${Math.round(ey)}px`;
          ec.style.width = `${boxW}px`;
          stage.appendChild(ec);
          ey += ec.offsetHeight + 5;
        }
        if (ctTop) {
          const cc = document.createElement('button');
          cc.className = 'sp-evcard sp-evcard-ctr';
          cc.dataset.pr = pi;
          cc.dataset.pl = li;
          cc.innerHTML = `<span class="sp-evcard-kick">Counter</span>${ctTop.srcs?.[0]?.l ?? 'Source'}`;
          cc.style.left = `${bx}px`;
          cc.style.top = `${Math.round(ey)}px`;
          cc.style.width = `${boxW}px`;
          stage.appendChild(cc);
        }
        prev = { x2: bx + boxW, cy: cyc };
      });
      // Terminal arrows into the measured impact boxes.
      for (const name of p.impactsMeasured) {
        const ii = spine.impacts.findIndex(x => x.name === name);
        const box = stage.querySelector(`.sp-imp[data-i="${ii}"]`);
        if (!box || !prev) continue;
        const iy = parseFloat(box.style.top) + box.offsetHeight / 2;
        paths += `<path class="sp-edge sp-edge-chain sp-edge-term" marker-end="url(#sp-arw)"
          d="M ${prev.x2} ${prev.cy} C ${prev.x2 + 80} ${prev.cy}, ${L.impX - 120} ${iy}, ${L.impX - 3} ${iy}"></path>`;
      }
    }
  }

  svg.innerHTML = defs + paths;

  for (const f of flagEls) {
    const b = document.createElement('button');
    b.className = f.cls;
    if (f.data.i != null) b.dataset.i = f.data.i;
    if (f.data.pr != null) { b.dataset.pr = f.data.pr; b.dataset.pl = f.data.pl; }
    b.innerHTML = `${f.label}${f.counter ? '<i class="sp-ctr" title="Counter-evidence exists"></i>' : ''}`;
    b.style.left = `${Math.round(f.x)}px`;
    b.style.top = `${Math.round(f.y)}px`;
    stage.appendChild(b);
  }

  highlightSpine(el, sel);
}

/** Update selection highlights in place. */
export function highlightSpine(el, sel = {}) {
  el.querySelectorAll('.sp .sel').forEach(n => n.classList.remove('sel'));
  el.querySelectorAll('.sp-edge.on').forEach(n => n.classList.remove('on'));
  const on = q => el.querySelectorAll(q).forEach(n => n.classList.add('sel'));
  if (sel.kind === 'entry') on(`.sp-ent[data-e="${sel.idx}"]`);
  else if (sel.kind === 'mech') {
    on(`.sp-mech[data-m="${sel.idx}"]`);
    el.querySelectorAll(`.sp-edge-mech[data-m="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  } else if (sel.kind === 'impact') {
    on(`.sp-imp[data-i="${sel.idx}"]`);
    el.querySelectorAll(`.sp-edge-imp[data-i="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  } else if (sel.kind === 'proplink') {
    on(`.sp-chainbox[data-pr="${sel.idx}"][data-pl="${sel.linkIdx}"]`);
  } else if (sel.kind === 'prop') {
    on(`.sp-propchip[data-pr="${sel.idx}"]`);
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
        ${ev.quote ? `<blockquote class="ev-quote">${ev.quote}</blockquote>` : ''}
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
      <div class="pa-hd"><span class="pa-name">${c.name}</span>
        <span class="pa-kind">${c.where}, ${c.when}</span>
        <span class="ev-grade gr-${c.strength}">${STRENGTH_LABEL[c.strength]}</span></div>
      <div class="pa-desc"><em>${c.authority}.</em> ${c.outcome}</div>
      ${c.srcs?.length ? `<div class="ev-srcs">${srcHtml(c.srcs)}</div>` : ''}
    </li>`).join('');
  return `<div class="ln-sec ln-sec-comp"><h4>Comparable Real-World Cases</h4><ul class="pa-list">${items}</ul></div>`;
}

function propDetail(spine, i) {
  const p = spine.proposals[i];
  const chainRows = p.links.map((lk, li) => `
    <li class="sp-chainrow" data-pl="${li}" tabindex="0">
      <span class="ev-grade gr-${lk.strength}">${STRENGTH_LABEL[lk.strength]}</span>
      <div class="ev-body"><div class="ev-finding">${lk.name}</div></div>
    </li>`).join('');
  return `<div class="cd">
    <div class="cd-kick cd-kick-prop">Proposed Intervention</div>
    <div class="cd-head"><span class="cd-id">${p.name}</span> <span class="pp-method">${p.method}</span></div>
    ${p.banner ? `<div class="sp-banner sp-banner-inline">No study tests this chain end to end; each link is graded on its own evidence.</div>` : ''}
    <p class="cd-claim">${p.description}</p>
    <div class="ln-sec"><h4>If We Could Only Do This One Thing: When and Where</h4>
      <p class="cd-claim"><span class="act-label">Where:</span> ${p.where}</p>
      <p class="cd-claim">${p.when}</p></div>
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
    ${lk.strength === 'unstudied' ? `<p class="cd-claim"><em>No study was identified for this link. That absence is a finding, and it is what the flag records.</em></p>` : ''}
    ${evHtml(lk.evidence, 'for')}
    ${evHtml(lk.counterEvidence, 'counter')}
  </div>`;
}

function overview(caseObj, spine) {
  const nProp = spine.proposals.length;
  const nMech = spine.mechanisms.length;
  const nImp = spine.impacts.length;
  return `<div class="cd cd-intro">
    <div class="cd-hint">The timeline runs down the center in order. Mechanisms that already
      existed sit on the left, tagged with how they failed. Measured impacts sit on the
      right; each arrow carries a strength flag you can click. Orange chips are the
      proposed interventions from the design work, anchored where they would intervene;
      click one to expand its causal chain, one at a time, with evidence at every link.</div>
    <div class="cd-purpose">${caseObj.overview}</div>
    <div class="cd-sum">
      <span class="cd-sum-lbl">Timeline</span><div class="cd-sum-pills"><span class="g g-neutral">${caseObj.entries.length} Events</span></div>
      <span class="cd-sum-lbl">Existing</span><div class="cd-sum-pills"><span class="g g-mech">${nMech} Mechanisms That Should Have Worked</span></div>
      <span class="cd-sum-lbl">Measured</span><div class="cd-sum-pills"><span class="g g-imp">${nImp} Measured Impacts</span></div>
      <span class="cd-sum-lbl">Proposed</span><div class="cd-sum-pills"><span class="g g-prop">${nProp} Proposed Interventions</span></div>
    </div>
  </div>`;
}

export function renderSpineDetail(el, caseObj, spine, sel = {}) {
  if (sel.kind === 'entry') el.innerHTML = entryDetail(caseObj, sel.idx);
  else if (sel.kind === 'mech') el.innerHTML = mechDetail(spine, sel.idx);
  else if (sel.kind === 'impact') el.innerHTML = impactDetail(spine, sel.idx);
  else if (sel.kind === 'prop') el.innerHTML = propDetail(spine, sel.idx);
  else if (sel.kind === 'proplink') el.innerHTML = propLinkDetail(spine, sel.idx, sel.linkIdx);
  else el.innerHTML = overview(caseObj, spine);
  el.scrollTop = 0;
}
