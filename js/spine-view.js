import { srcLine, attr, splitEntryText } from './util.js';
import { CAT } from './categories.js';


/* --------------------------------------------------------------------------
 * The timeline as the central spine, drawn in four labelled lanes.
 *
 *   MEASURED OUTCOME (left) what the record later measured, each card sitting
 *                          beside the one event most relevant to it, with a
 *                          short arrow from that event. Its card shows the date
 *                          the finding was first published. Retrospective, so it annotates the record
 *                          from the margin rather than joining the chain.
 *   MAIN TIMELINE          every dated event in order. A star in an event's
 *                          corner marks a mechanism that already existed and
 *                          should have caught it; click the star to read why
 *                          it did not. Boxes show the opening of an entry;
 *                          the sidebar carries the whole record.
 *   PROPOSED PUBLIC        the proposals from the design work. Each sits
 *   PARTICIPATION          beside the part of the record it speaks to, marked
 *                          by a brace in the gutter; a dotted line to
 *                          one event appears only where that link is asserted.
 *   PROPOSED OUTCOMES     what each proposal is for: one green box, one
 *                          sentence, with one arrow from the card into it.
 *                          Selecting a proposal rings the Measured Outcome
 *                          its box names, where the record measured one.
 *                          Under it, a row of the claims that support it;
 *                          under each claim, its evidence and counter-evidence.
 *                          A claim is a claim, not a step
 *                          in a chain; nothing points out of one.
 *
 * Every connector is drawn from straight horizontal and vertical segments.
 * -------------------------------------------------------------------------- */

const L = {
  headH: 46,
  impX: 24, impW: 300,         // as wide as a proposal card
  gutImp: 324,                 // 324..380, impact arrows
  spineX: 386, spineW: 356,
  gutProp: 742,                // 742..794, the proposal brace
  propX: 802, propW: 300,
  chainX: 1134, chainMinW: 1128, // the lane holds at least four claims
  claimW: 270, claimGap: 16,   // one column per claim
  outW: 420, outGap: 14,       // the outcome box, and the gap to the claim row
  padTop: 80, padBottom: 180,
  rowGap: 46, subGap: 32, railGap: 20,
  stackGap: 8, cardGap: 5
};

/** How much of an entry the map box shows before the sidebar takes over. */
const BOX_CHARS = 185;

/* The proposal brace: its body on the middle of the gutter between the Main
   Timeline and Proposed Public Participation lanes, and half its width either
   side, nudged a few pixels left of centre so the cusp clears the card. */
const BR = { x: Math.round((L.spineX + L.spineW + L.propX) / 2) - 8, d: 9 };

/* Diagonal arrows out, sitting in the Main Timeline lane header: it opens the
   full timeline view, with its filters and the case overview. The control used
   to be a View Timeline button in the detail pane header, which is on the other
   side of the screen from the timeline it opens. */
const EXPAND_BTN = `<button class="sp-lane-x" aria-label="Open the full timeline"
  title="Open the full timeline with filters and the case overview"><svg viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
  stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline
  points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21"
  x2="10" y2="14"/></svg></button>`;

/* A count tag in the lane header, so the header says how many of the thing the
   lane holds. The three counts used to sit in the About This Case strip, which
   is the one place on screen that is not the lane itself. */
const laneCount = n => `<span class="sp-lane-n">${n}</span>`;

/* What each lane holds, shown on hovering its header and in the How to Read
   This Map pane. */
const LANE_TIPS = {
  'lane-im': 'Shows what the record measured. Each card sits beside the event it bears on most and shows the date the finding first appeared.',
  'lane-tl': 'Lists the case events in date order. Click an event to read its full record. Click a star to see whether an existing mechanism addressed the event.',
  'lane-pp': 'Shows proposals from the design work. A brace spans the part of the record a proposal answers. A dotted line ties a proposal to the one above it that answers the same event.',
  'lane-ch': 'Shows the outcome each proposal aims for. A dashed border marks it as proposed, not measured. Claims support each outcome, and evidence and counter-evidence sit under each claim. Select an outcome the record also measured to highlight its card in the first lane.'
};

/** The lanes, with the last one as wide as the widest claim row. */
const lanesFor = (chainW, n) => [
  { x: L.impX, w: L.impW, label: 'Measured Outcomes', cls: 'lane-im', n: n.imp },
  { x: L.spineX, w: L.spineW, label: 'Main Timeline', cls: 'lane-tl', expand: true },
  { x: L.propX, w: L.propW, label: 'Proposed Public Participation', cls: 'lane-pp', n: n.prop },
  // Every proposal has exactly one proposed outcome, so a count here would only
  // repeat the lane to its left.
  { x: L.chainX, w: chainW, label: 'Proposed Outcomes, Claims & Evidence', cls: 'lane-ch' }
];

const plain = s => String(s).replace(/<[^>]+>/g, '');

/** Index of the entry whose plain text contains the anchor. -1 if none. */
export function anchorIndex(entries, anchor) {
  return entries.findIndex(e => plain(e.text).includes(anchor));
}

/** A sortable number for a date string: '06/2017', '2012', '2018-2019', '2010s'. */
function dkey(s) {
  const t = String(s ?? '');
  const md = t.match(/^\s*(\d{1,2})\s*\/\s*(\d{4})/);
  if (md) return Number(md[2]) + Number(md[1]) / 100;
  const y = t.match(/(\d{4})/);
  return y ? Number(y[1]) : 0;
}

/**
 * Fallback placement for an impact with no anchored source: the index of the
 * first entry dated later than the finding was first published.
 */
function impactRow(entries, found) {
  const k = dkey(found);
  // A year-only entry ("2012") covers every month of that year.
  const i = entries.findIndex(e => {
    const ek = dkey(e.date);
    return Number.isInteger(ek) ? ek >= Math.floor(k) : ek >= k;
  });
  return i === -1 ? entries.length : i;
}

/* An event with a proposal beside it shows its full text, since that is the
   record the proposal answers; every other event shows an opening line. */
function entryBoxHtml(e, i, mechs, full = false) {
  const c = CAT[e.cat];
  const { lead, rest } = full ? { lead: e.text, rest: '' } : splitEntryText(e.text, BOX_CHARS);
  const stars = mechs.map(m =>
    `<button class="sp-star" data-m="${m.mi}" title="${attr(`${m.name} — addressed this? ${m.answer}`)}"
      aria-label="${attr(`Existing mechanism: ${m.name}. Did it address this? ${m.answer}`)}">&#9733;</button>`).join('');
  return `<div class="sp-ent" data-e="${i}" tabindex="0">
    ${stars ? `<div class="sp-ent-stars">${stars}</div>` : ''}
    <div class="sp-ent-hd"><span class="catlab cat-${c.badge}">${c.label}</span><span class="sp-date">${e.date}</span></div>
    <div class="sp-ent-txt">${lead}${rest ? '&hellip;' : ''}</div>
    ${rest ? '<div class="sp-ent-more">Expand &rarr;</div>' : ''}
  </div>`;
}

/* The card carries only the finding: strength grades are not shown anywhere
   in the interface. */
function impactBoxHtml(im, ii) {
  return `<div class="sp-imp" data-i="${ii}" tabindex="0">
    <div class="sp-imp-hd"><span class="sp-date sp-date-imp">${im.found}</span></div>
    <div class="sp-imp-name">${im.name}</div>
    <div class="sp-imp-headline">${im.headline}</div>
  </div>`;
}

/** One proposal card: the intervention and the institutional mechanism that
   would implement it. What it is for sits in the row beside it. */
function propBoxHtml(p, pi, total) {
  return `<div class="sp-prop-head">
      <span class="sp-propbox-kick">Proposed Public Participation <span class="sp-propbox-n">(${pi + 1}/${total})</span></span>
      <span class="sp-prop-title">${p.name}</span>
    </div>
    <div class="sp-prop-fields">
      <div class="sp-eff-kick">Mechanism</div>
      <div class="sp-eff-mech">${p.method}</div>
    </div>`;
}

/** The one outcome box of a proposal. Every one of these is a proposed
   outcome, so every one is the same green. Where the box names a
   Measured Outcome, the tie is shown by highlighting that card when the
   proposal is selected, never by this box's fill and never in words on it. */
function outBoxHtml(p, pi, impacts) {
  const mi = p.outcome.measured == null ? -1 : impacts.findIndex(x => x.name === p.outcome.measured);
  return `<div class="sp-out" data-pr="${pi}"${mi === -1 ? '' : ` data-mi="${mi}"`} tabindex="0" role="button">
    <span class="sp-out-kick">Proposed outcome</span>
    <span class="sp-out-text">${p.outcome.text}</span>
  </div>`;
}

/**
 * Render the spine map into `el`.
 * sel: { kind, idx, claimIdx, evIdx, evKind }
 * The DOM is rebuilt when the case changes; every other selection updates
 * highlights in place.
 */
export function renderSpineMap(el, caseObj, spine, sel = {}) {
  const entries = caseObj.entries;

  // The last lane is as wide as the widest row of claims in this case; the
  // canvas follows it, and the map scrolls and zooms as it always has.
  const maxN = Math.max(1, ...spine.proposals.map(p => p.outcome.claims.length));
  const chainW = Math.max(L.chainMinW, maxN * L.claimW + (maxN - 1) * L.claimGap);
  const canvasW = L.chainX + chainW + 34;
  const LANES = lanesFor(chainW, {
    imp: spine.impacts.length, prop: spine.proposals.length
  });

  const lanes = LANES.map(l =>
    `<div class="sp-lane ${l.cls}" style="left:${l.x}px;width:${l.w}px" tabindex="0"><span
      class="sp-lane-t">${l.label}</span>${l.n == null ? '' : laneCount(l.n)}${
      l.expand ? EXPAND_BTN : ''}<div class="sp-lane-tip" role="tooltip">${LANE_TIPS[l.cls]}</div></div>`).join('');
  el.innerHTML = `<div class="sp">
    <div class="sp-lanes" style="width:${canvasW}px;height:${L.headH}px">${lanes}</div>
    <svg class="sp-edges"></svg></div>`;
  const stage = el.querySelector('.sp');
  const svg = el.querySelector('.sp-edges');
  stage.style.width = `${canvasW}px`;

  // Lane bands, painted behind everything so the columns read as columns.
  LANES.forEach((l, i) => {
    const b = document.createElement('div');
    b.className = `sp-band ${l.cls}`;
    // No cream gaps between bands: neighbouring bands meet halfway across the
    // gap between their lanes.
    const prev = LANES[i - 1], next = LANES[i + 1];
    const left = prev ? Math.round((prev.x + prev.w + l.x) / 2) : l.x - 14;
    const right = next ? Math.round((l.x + l.w + next.x) / 2) : l.x + l.w + 14;
    b.style.left = `${left}px`;
    b.style.width = `${right - left}px`;
    stage.appendChild(b);
  });
  const bands = [...stage.querySelectorAll('.sp-band')];

  // Which mechanisms should have caught which event: a star per mechanism in
  // that event's corner, in place of the old left-hand rail.
  const mechAt = new Map();
  spine.mechanisms.forEach((m, mi) => {
    for (const a of m.anchors) {
      const i = anchorIndex(entries, a);
      if (i === -1) continue;
      if (!mechAt.has(i)) mechAt.set(i, []);
      if (!mechAt.get(i).some(x => x.mi === mi)) mechAt.get(i).push({ mi, name: m.name, failure: m.failure, answer: m.answer });
    }
  });

  // Pass 1: the timeline boxes.
  const propRows = new Set(spine.proposals.map(p => anchorIndex(entries, p.anchor)));
  const entEl = entries.map((e, i) => {
    const d = document.createElement('div');
    d.innerHTML = entryBoxHtml(e, i, mechAt.get(i) || [], propRows.has(i));
    const box = d.firstElementChild;
    box.style.left = `${L.spineX}px`;
    box.style.width = `${L.spineW}px`;
    stage.appendChild(box);
    return box;
  });

  // Pass 2: the impact cards. Each one is tied to the one event most relevant
  // to it and sits level with that event, so the arrow between them is short
  // and horizontal. The found date stays on the card. An impact whose event
  // does not resolve falls back to the row where its finding was published.
  const imps = spine.impacts.map((im, ii) => {
    const d = document.createElement('div');
    d.innerHTML = impactBoxHtml(im, ii);
    const box = d.firstElementChild;
    box.style.left = `${L.impX}px`;
    box.style.width = `${L.impW}px`;
    stage.appendChild(box);
    const src = im.from[0] ? anchorIndex(entries, im.from[0].anchor) : -1;
    const row = src !== -1 ? src : Math.min(impactRow(entries, im.found), entries.length - 1);
    return { ii, box, row, src, k: dkey(im.found) };
  }).sort((a, b) => a.row - b.row || a.k - b.k);
  const impAt = new Map();
  for (const r of imps) {
    if (!impAt.has(r.row)) impAt.set(r.row, []);
    impAt.get(r.row).push(r);
  }

  // Pass 3: build and measure every proposal, its outcome box, the row of
  // claims under it, and the cards that stack under each claim.
  const propAt = new Map();
  // Cards are numbered in the order they appear down the map, counting only
  // the proposals that are drawn.
  const shown = spine.proposals
    .map((p, pi) => ({ pi, i: anchorIndex(entries, p.anchor) }))
    .filter(x => x.i !== -1)
    .sort((a, b) => a.i - b.i || a.pi - b.pi)
    .map(x => x.pi);
  spine.proposals.forEach((p, pi) => {
    const i = anchorIndex(entries, p.anchor);
    if (i === -1) return;

    // A div rather than a button: the card is a group, and Enter opens it.
    const box = document.createElement('div');
    box.className = 'sp-propbox';
    box.dataset.pr = pi;
    // Only a proposal that claims a link to one event records which event;
    // the rest just sit beside the part of the record they speak to.
    if (p.linked) box.dataset.ae = i;
    box.tabIndex = 0;
    box.setAttribute('role', 'button');
    box.innerHTML = propBoxHtml(p, shown.indexOf(pi), shown.length);
    box.style.left = `${L.propX}px`;
    box.style.width = `${L.propW}px`;
    stage.appendChild(box);

    // The one outcome box, at the head of the lane, spanning the claim row
    // under it.
    const od = document.createElement('div');
    od.innerHTML = outBoxHtml(p, pi, spine.impacts);
    const out = od.firstElementChild;
    const nCl = p.outcome.claims.length;
    const rowW = nCl * L.claimW + Math.max(0, nCl - 1) * L.claimGap;
    out.style.left = `${L.chainX}px`;
    out.style.width = `${Math.max(L.outW, rowW)}px`;
    stage.appendChild(out);

    // One column per claim: the claim, then one card per record under it,
    // so a single paper or precedent can be clicked and read on its own.
    const srcLabel = x => x.srcs?.map(s => s.l).join('; ') || 'Source';
    const claims = p.outcome.claims.map((cl, ci) => {
      const x = L.chainX + ci * (L.claimW + L.claimGap);
      const place = (node) => {
        node.style.left = `${x}px`;
        node.style.width = `${L.claimW}px`;
        stage.appendChild(node);
        return node;
      };
      const c = document.createElement('button');
      c.className = 'sp-claim';
      c.dataset.pr = pi; c.dataset.cl = ci;
      c.innerHTML = `<span class="sp-claim-kick">Claim</span><span class="sp-claim-name">${cl.text}</span>`;
      place(c);
      const cards = [];
      const addCard = (ev, k, kind) => {
        const ec = document.createElement('button');
        ec.className = `sp-evcard${kind === 'counter' ? ' sp-evcard-ctr' : ''}`;
        ec.dataset.pr = pi; ec.dataset.cl = ci;
        ec.dataset.ev = k; ec.dataset.evk = kind;
        ec.innerHTML = `<span class="sp-evcard-kick">${kind === 'counter' ? 'Counter' : 'Evidence'}</span>
          <span class="sp-evcard-h">${ev.headline ?? srcLabel(ev)}</span>`;
        cards.push(place(ec));
      };
      // Order: the material for the claim, then the material against it,
      // which its grey dashed cards mark on their own.
      (cl.evidence ?? []).forEach((ev, k) => addCard(ev, k, 'for'));
      (cl.counterEvidence ?? []).forEach((ev, k) => addCard(ev, k, 'counter'));
      return { el: c, cards };
    });

    // One height for every claim in the row, so the stacks under it start
    // on one line.
    const claimH = claims.length ? Math.max(...claims.map(c => c.el.offsetHeight)) : 0;
    for (const c of claims) c.el.style.height = `${claimH}px`;

    const rec = {
      p, pi, box, out, claims, claimH, linked: Boolean(p.linked),
      boxH: box.offsetHeight, outH: out.offsetHeight
    };
    if (!propAt.has(i)) propAt.set(i, []);
    propAt.get(i).push(rec);
  });

  // Pass 4: vertical layout, top to bottom.
  const yTop = [];
  let y = L.padTop;
  entries.forEach((e, i) => {
    yTop[i] = y;
    entEl[i].style.top = `${Math.round(y)}px`;
    const entH = entEl[i].offsetHeight;
    let bot = y + entH;

    // Impact cards stack beside their source event. The first card shares the
    // event's top edge, so every lane starts a row on one line; a taller card
    // runs lower than its event. Its arrow runs level through the middle of
    // the shorter of the two, so it stays one straight horizontal line.
    if (impAt.has(i)) {
      const list = impAt.get(i);
      const sy = Math.round(y + Math.min(entH, list[0].box.offsetHeight) / 2);
      let iy = y;
      for (const r of list) {
        const top = Math.round(iy);
        r.box.style.top = `${top}px`;
        r.sy = sy;
        // Measured from the drawn position, so the arrow meets the card's
        // real centre rather than an unrounded one.
        r.cy = r === list[0] ? sy : top + r.box.offsetHeight / 2;
        iy = top + r.box.offsetHeight + L.railGap;
      }
      bot = Math.max(bot, iy - L.railGap);
    }

    if (propAt.has(i)) {
      let subY = y;
      for (const rec of propAt.get(i)) {
        // The card and its outcome box share a top edge with the event, so
        // every lane starts a row on one line. The arrow runs level at the
        // middle of the outcome box, which falls inside the card's title band.
        const top = subY;
        rec.y = top;
        rec.box.style.top = `${Math.round(top)}px`;
        rec.cy = top + Math.min(rec.outH / 2, rec.boxH - 10);

        const outTop = Math.round(top);
        rec.out.style.top = `${outTop}px`;
        let stackBot = outTop + rec.outH;
        // The claim row under the box, and each claim's cards under it.
        const rowTop = outTop + rec.outH + L.outGap;
        for (const cl of rec.claims) {
          cl.el.style.top = `${rowTop}px`;
          let sy = rowTop + rec.claimH;
          for (const c of cl.cards) {
            sy += (sy === rowTop + rec.claimH ? L.stackGap : L.cardGap);
            c.style.top = `${Math.round(sy)}px`;
            sy += c.offsetHeight;
          }
          stackBot = Math.max(stackBot, sy);
        }
        const subH = Math.max(top + rec.boxH, stackBot) - subY;
        subY += subH + L.subGap;
      }
      bot = Math.max(bot, subY - L.subGap);
    }
    y = bot + L.rowGap;
  });

  const totalH = y - L.rowGap + L.padBottom;
  stage.style.height = `${totalH}px`;
  for (const b of bands) b.style.height = `${Math.round(totalH)}px`;
  svg.setAttribute('viewBox', `0 0 ${canvasW} ${Math.round(totalH)}`);
  svg.setAttribute('width', canvasW);
  svg.setAttribute('height', Math.round(totalH));

  /* ------------------------------- edges -------------------------------- */

  const arw = (id, color, size, extra = '') => `<marker id="sp-arw-${id}" viewBox="0 0 10 10" refX="9" refY="5"
      markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 L 2.8 5 z" fill="${color}"${extra}></path></marker>`;
  // Impact connectors end in a node rather than an arrowhead: the card states
  // an outcome the record measures, not a further step in the chain.
  const dot = (id, color, size, extra = '') => `<marker id="sp-dot-${id}" viewBox="0 0 10 10" refX="5" refY="5"
      markerWidth="${size}" markerHeight="${size}">
      <circle cx="5" cy="5" r="4.2" fill="${color}"${extra}></circle></marker>`;
  const defs = `<defs>
    ${arw('spine', '#ffffff', 7, ' stroke="#b8b1a3" stroke-width="1.1"')}
    ${arw('chain', '#1e6b3c', 8)}
    ${dot('imp', '#1e6b3c', 5, ' fill-opacity="0.75"')}</defs>`;

  let paths = '';
  const cx = L.spineX + L.spineW / 2;

  // The spine: one straight white line down the timeline lane, event to event.
  for (let i = 0; i < entries.length - 1; i++) {
    const aBot = yTop[i] + entEl[i].offsetHeight;
    const bTop = yTop[i + 1] - 2;
    paths += `<path class="sp-edge sp-edge-spine-case" d="M ${cx} ${aBot} L ${cx} ${bTop}"></path>`;
    paths += `<path class="sp-edge sp-edge-spine" marker-end="url(#sp-arw-spine)"
      d="M ${cx} ${aBot} L ${cx} ${bTop}"></path>`;
  }

  // Impact arrows: out the left of the event where the causal claim holds,
  // across the gutter, and into the impact card. One arrow per finding, to a
  // card sharing its event's top edge, so it is a straight horizontal line
  // (with a short jog in the gutter when cards stack).
  for (const r of imps) {
    const i = r.src;
    if (i === -1) continue;
    const sy = r.sy ?? Math.round(yTop[i]) + entEl[i].offsetHeight / 2;
    // The node sits just clear of the card, which is painted above the edge
    // layer: centred on the border, half of it would be hidden.
    const endX = L.impX + L.impW + 5;
    const d = Math.abs(sy - r.cy) < 1
      ? `M ${L.spineX} ${sy} H ${endX}`
      : `M ${L.spineX} ${sy} H ${L.gutImp + 30} V ${r.cy} H ${endX}`;
    paths += `<path class="sp-edge sp-edge-imp" data-i="${r.ii}" data-src="${i}" marker-end="url(#sp-dot-imp)" d="${d}"></path>`;
  }

  // Proposals. Most sit beside the part of the record they speak to without
  // claiming a link to one event: a brace in the gutter, joined to its card
  // and stopping short of the timeline. A proposal marked `linked` gets a
  // dotted line tying it to its event instead. Attachment, not causation.
  for (const [i, list] of propAt) {
    const sy = yTop[i] + entEl[i].offsetHeight / 2;
    const gx = L.gutProp + 24;
    // A linked proposal that shares its event with a card above it hangs from
    // that card on a dotted line down the lane. Only a linked proposal with no
    // card above it is tied across the gutter to the event itself.
    const tied = list.filter((r, k) => r.linked && k === 0);
    if (tied.length) {
      const cys = tied.map(r => r.cy);
      const top = Math.min(sy, ...cys), bot = Math.max(sy, ...cys);
      paths += `<path class="sp-edge sp-edge-allude" d="M ${L.spineX + L.spineW} ${sy} H ${gx}"></path>`;
      if (bot - top > 1) paths += `<path class="sp-edge sp-edge-allude" d="M ${gx} ${top} V ${bot}"></path>`;
    }
    list.forEach((rec, k) => {
      if (rec.linked && k > 0) {
        const above = list[k - 1];
        const x = L.propX + L.propW / 2;
        paths += `<path class="sp-edge sp-edge-allude-tie" data-pr="${rec.pi}"
          d="M ${x} ${Math.round(above.y + above.boxH) + 2} V ${Math.round(rec.y) - 3}"></path>`;
      } else if (rec.linked) {
        paths += `<path class="sp-edge sp-edge-allude-tie" d="M ${gx} ${rec.cy} H ${L.propX - 2}"></path>`;
      } else {
        // A curly brace opening toward the record: it spans the event's height
        // and touches neither lane, so it reads as "this stretch of the
        // record" rather than "this event". A brace is the mark that groups a
        // run of rows, which is the claim being made. It sits on the middle of
        // the gutter, so it belongs to neither column.
        // Its cusp runs into the card on a short stub. With both ends free the
        // brace read as a mark belonging to nothing; the stub says which card
        // it speaks for, and the arms still stop short of the timeline, so no
        // link to any one event is asserted.
        // The brace spans the event it sits beside, top edge to bottom edge,
        // so its reach matches the stretch of record it groups. When the card
        // is not centred on the event, the stub jogs to the card's middle.
        const t = Math.round(yTop[i]), b = Math.round(yTop[i] + entEl[i].offsetHeight);
        const mid = Math.round((t + b) / 2);
        const r = Math.min(7, (b - t) / 4);     // short events keep the shape
        const arm = BR.x - BR.d, cusp = BR.x + BR.d;
        const cy = Math.round(rec.cy);
        const stub = Math.abs(cy - mid) < 1
          ? `H ${L.propX - 3}`
          : `H ${Math.round((cusp + L.propX) / 2)} V ${cy} H ${L.propX - 3}`;
        paths += `<path class="sp-edge sp-edge-near" data-pr="${rec.pi}"
          d="M ${arm} ${t} Q ${BR.x} ${t} ${BR.x} ${t + r}
             V ${mid - r} Q ${BR.x} ${mid} ${cusp} ${mid}
             Q ${BR.x} ${mid} ${BR.x} ${mid + r}
             V ${b - r} Q ${BR.x} ${b} ${arm} ${b}
             M ${cusp} ${mid} ${stub}"></path>`;
      }
      // One arrow from the card straight into its outcome box.
      paths += `<path class="sp-edge sp-edge-chain" data-pr="${rec.pi}"
        marker-end="url(#sp-arw-chain)" d="M ${L.propX + L.propW} ${rec.cy} H ${L.chainX - 4}"></path>`;
    });
  }

  svg.innerHTML = defs + paths;

  highlightSpine(el, sel);
}

/** Update selection highlights in place. */
export function highlightSpine(el, sel = {}) {
  el.querySelectorAll('.sp .sel').forEach(n => n.classList.remove('sel'));
  el.querySelectorAll('.sp-edge.on').forEach(n => n.classList.remove('on'));
  el.querySelectorAll('.sp-ent-prop').forEach(n => n.classList.remove('sp-ent-prop'));
  el.querySelectorAll('.sp-imp-aim').forEach(n => n.classList.remove('sp-imp-aim'));
  el.querySelectorAll('.sp-star.on').forEach(n => n.classList.remove('on'));
  const on = q => el.querySelectorAll(q).forEach(n => n.classList.add('sel'));
  const lit = q => el.querySelectorAll(q).forEach(n => n.classList.add('on'));
  // A linked proposal rings its event; an approximate one lights only its
  // brace, so nothing on screen asserts a link to one event.
  const ringAnchor = pi => {
    const box = el.querySelector(`.sp-propbox[data-pr="${pi}"]`);
    if (box?.dataset.ae != null) {
      el.querySelector(`.sp-ent[data-e="${box.dataset.ae}"]`)?.classList.add('sp-ent-prop');
    }
    lit(`.sp-edge-near[data-pr="${pi}"]`);
  };
  // Selecting a proposal or anything under it lights the arrow into its
  // outcome and rings the measured outcome the outcome names, if any.
  const litOut = pi => {
    lit(`.sp-edge-chain[data-pr="${pi}"]`);
    const ob = el.querySelector(`.sp-out[data-pr="${pi}"]`);
    if (ob?.dataset.mi != null) {
      el.querySelector(`.sp-imp[data-i="${ob.dataset.mi}"]`)?.classList.add('sp-imp-aim');
    }
  };
  if (sel.kind === 'entry') {
    on(`.sp-ent[data-e="${sel.idx}"]`);
    // Selecting an event lights the impacts measured off it, so the link is
    // discoverable from either end.
    lit(`.sp-edge-imp[data-src="${sel.idx}"]`);
  }
  else if (sel.kind === 'mech') {
    el.querySelectorAll(`.sp-star[data-m="${sel.idx}"]`).forEach(n => {
      n.classList.add('on');
      n.closest('.sp-ent')?.classList.add('sel');
    });
  } else if (sel.kind === 'impact') {
    on(`.sp-imp[data-i="${sel.idx}"]`);
    lit(`.sp-edge-imp[data-i="${sel.idx}"]`);
  } else if (sel.kind === 'prop') {
    on(`.sp-propbox[data-pr="${sel.idx}"]`);
    ringAnchor(sel.idx);
    litOut(sel.idx);
  } else if (sel.kind === 'propout') {
    on(`.sp-out[data-pr="${sel.idx}"]`);
    ringAnchor(sel.idx);
    litOut(sel.idx);
  } else if (sel.kind === 'propclaim') {
    on(`.sp-claim[data-pr="${sel.idx}"][data-cl="${sel.claimIdx}"]`);
    ringAnchor(sel.idx);
    litOut(sel.idx);
  } else if (sel.kind === 'propev') {
    on(`.sp-evcard[data-pr="${sel.idx}"][data-cl="${sel.claimIdx}"][data-ev="${sel.evIdx}"][data-evk="${sel.evKind}"]`);
    ringAnchor(sel.idx);
    litOut(sel.idx);
  }
}

/* ------------------------------ detail pane ------------------------------ */

/* The answer to "Did any existing mechanism address this?" as one paragraph:
   the one-word answer in bold, then the detail. The short `note` stays in the
   data for the export; on screen it repeated the paragraph. */
function mechAnswer(m) {
  return `<strong>${m.answer}.</strong> ${m.detail.trim()}`;
}

function entryDetail(caseObj, spine, i) {
  const e = caseObj.entries[i];
  const c = CAT[e.cat];
  const mechs = spine.mechanisms
    .map((m, mi) => ({ m, mi }))
    .filter(({ m }) => m.anchors.some(a => plain(e.text).includes(a)));
  // The mechanism record is folded into the event pane, so the reader gets
  // the answer without another click: the question, then one paragraph. Its sources join the event's in one line at the bottom. The block is not a link:
  // clicking it used to jump to the mechanism view, which read as the
  // screen changing for no reason. The map star still opens the mechanism.
  const answered = mechs.map(({ m }) => `
    <div class="sp-addressed">
      <div class="cd-kick cd-kick-mech">&#9733; Did any existing mechanism address this?</div>
      <p class="cd-claim">${mechAnswer(m)}</p>
    </div>`).join('');
  return `<div class="cd">
    <div class="cd-head"><span class="catlab catlab-lg cat-${c.badge}">${c.label}</span> <span class="cd-id">${e.date}</span></div>
    <p class="cd-claim">${e.text}</p>
    <div class="eact"><span class="act-label">Actors:</span> ${e.actors}</div>
    ${answered}
    ${srcLine([...(e.srcs ?? []), ...mechs.flatMap(({ m }) => m.srcs ?? [])])}
  </div>`;
}

function mechDetail(spine, i) {
  const m = spine.mechanisms[i];
  return `<div class="cd">
    <div class="cd-kick cd-kick-mech">&#9733; Did any existing mechanism address this?</div>
    <p class="cd-claim">${mechAnswer(m)}</p>
    <div class="eact"><span class="act-label">Actor:</span> ${m.actor}</div>
    ${srcLine(m.srcs)}
  </div>`;
}

function impactDetail(spine, i) {
  const im = spine.impacts[i];
  /* Evidence and counter-evidence read as plain paragraphs, with every source
     gathered into one line at the bottom. The bold headline repeated the
     measures paragraph, so the pane skips it. */
  const evs = [...(im.evidence ?? []), ...(im.counterEvidence ?? [])];
  const evParas = evs.map(ev =>
    `<p class="cd-claim">${ev.finding.trim()}${ev.caveat ? ` ${ev.caveat}` : ''}</p>`
  ).join('');
  return `<div class="cd">
    <div class="cd-head"><span class="cd-id">${im.name}</span></div>
    <p class="cd-claim">${im.measures}</p>
    ${evParas}
    ${srcLine(evs.flatMap(ev => ev.srcs ?? []))}
  </div>`;
}

/* Each pane shows the card that was clicked and nothing from the cards
   around it: the map already shows what sits above and below. */
function propDetail(spine, i) {
  const p = spine.proposals[i];
  return `<div class="cd">
    <div class="cd-head"><span class="cd-id">${p.name}</span></div>
    <p class="cd-claim"><span class="act-label">Mechanism:</span> ${p.method}</p>
    <p class="cd-claim">${p.description}</p>
    ${p.note ? `<div class="ln-sec"><h4>How It Can Feed a Decision</h4><p class="cd-claim">${p.note}</p></div>` : ''}
    ${srcLine(p.srcs)}
  </div>`;
}

function propOutDetail(spine, i) {
  const p = spine.proposals[i];
  return `<div class="cd">
    <div class="cd-head"><span class="cd-id">${p.outcome.text}</span></div>
  </div>`;
}

function propClaimDetail(spine, i, k) {
  const cl = spine.proposals[i].outcome.claims[k];
  if (!cl) return propDetail(spine, i);
  return `<div class="cd">
    <div class="cd-head"><span class="cd-id">${cl.text}</span></div>
  </div>`;
}

/** One evidence record on its own, so a single paper can be read and cited. */
function propEvDetail(spine, i, k, n, kind) {
  const p = spine.proposals[i];
  const cl = p.outcome.claims[k];
  if (!cl) return propDetail(spine, i);
  const counter = kind === 'counter';
  const ev = (counter ? cl.counterEvidence : cl.evidence)?.[n];
  if (!ev) return propClaimDetail(spine, i, k);
  const title = ev.srcs?.map(x => x.l).join('; ') || 'Source';
  return `<div class="cd">
    <div class="cd-head"><span class="cd-id">${ev.headline ?? title}</span></div>
    <p class="cd-claim">${ev.finding}</p>
    ${ev.caveat ? `<div class="ev-caveat">Caveat: ${ev.caveat}</div>` : ''}
    ${srcLine(ev.srcs)}
  </div>`;
}

/* The counts of events, measured outcomes, and proposals are tags in the lane
   headers, where the reader is looking at the things themselves. */
function overview(caseObj, spine) {
  return `<div class="cd cd-intro">
    <div class="cd-hint">${lanesFor(0, {}).map(l =>
      `<p><b>${l.label.replace('&', '&amp;')}.</b> ${LANE_TIPS[l.cls]}</p>`).join('')}</div>
  </div>`;
}

/* What the pane is showing, for the pane's own header. Each pane used to
   repeat this line as a kicker inside itself, under a header that only ever
   said "Detail"; the header names the thing now, so the pane opens on the
   card's own title. The mechanism pane keeps its kicker, because that line is
   a question, not a label. */
const DETAIL_LABEL = {
  entry: 'Timeline Event',
  mech: 'Existing Mechanism',
  impact: 'Measured Outcome',
  prop: 'Proposed Public Participation',
  propout: 'Proposed Outcome',
  propclaim: 'Claim',
  propev: 'Evidence'
};

/** The selection a pane can actually show. A deep link can name a claim or a
   record that is not in the data; each pane already falls back to the card
   above it, and the header has to fall back with it. */
function resolveSel(spine, sel) {
  if (!String(sel.kind ?? '').startsWith('prop')) return sel;
  const cl = spine.proposals[sel.idx]?.outcome.claims[sel.claimIdx];
  if (sel.kind === 'propclaim' && !cl) return { ...sel, kind: 'prop' };
  if (sel.kind === 'propev') {
    if (!cl) return { ...sel, kind: 'prop' };
    const has = (sel.evKind === 'counter' ? cl.counterEvidence : cl.evidence)?.[sel.evIdx];
    if (!has) return { ...sel, kind: 'propclaim' };
  }
  return sel;
}

/** Renders the pane and returns the heading its header should carry. */
export function renderSpineDetail(el, caseObj, spine, rawSel = {}) {
  const sel = resolveSel(spine, rawSel);
  // About This Case lives in the toggle under the top bar, not here.
  if (sel.kind === 'entry') el.innerHTML = entryDetail(caseObj, spine, sel.idx);
  else if (sel.kind === 'mech') el.innerHTML = mechDetail(spine, sel.idx);
  else if (sel.kind === 'impact') el.innerHTML = impactDetail(spine, sel.idx);
  else if (sel.kind === 'prop') el.innerHTML = propDetail(spine, sel.idx);
  else if (sel.kind === 'propout') el.innerHTML = propOutDetail(spine, sel.idx);
  else if (sel.kind === 'propclaim') el.innerHTML = propClaimDetail(spine, sel.idx, sel.claimIdx);
  else if (sel.kind === 'propev') el.innerHTML = propEvDetail(spine, sel.idx, sel.claimIdx, sel.evIdx, sel.evKind);
  else el.innerHTML = overview(caseObj, spine);
  el.scrollTop = 0;
  if (sel.kind === 'propev' && sel.evKind === 'counter') return 'Counter-Evidence';
  return DETAIL_LABEL[sel.kind] ?? 'How to Read This Map';
}
