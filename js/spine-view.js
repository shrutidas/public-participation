import { srcHtml, attr, splitEntryText } from './util.js';
import { CAT } from './categories.js';
import { ADDRESSED } from './cases/helpers.js';

/* --------------------------------------------------------------------------
 * The timeline as the central spine, drawn in four labelled lanes.
 *
 *   MEASURED IMPACT (left)  what the record later measured, each card sitting
 *                          at the date its finding was first published, with a
 *                          short arrow from the events where the causal claim
 *                          holds. Retrospective, so it annotates the record
 *                          from the margin rather than joining the chain.
 *   MAIN TIMELINE          every dated event in order. A star in an event's
 *                          corner marks a mechanism that already existed and
 *                          should have caught it; click the star to read why
 *                          it did not. Boxes show the opening of an entry;
 *                          the sidebar carries the whole record.
 *   PROPOSED PUBLIC        the proposals from the design work, tied by a
 *   PARTICIPATION          dotted bracket to the event they would intervene
 *                          in, each carrying its mechanism and the effects it
 *                          aims at, linked back to the impact that measures it.
 *   CAUSAL CHAIN &         each proposal's chain running left to right, with
 *   EVIDENCE               every evidence and counter-evidence card under the
 *                          link it supports. One card is one paper.
 *
 * Every connector is drawn from straight horizontal and vertical segments.
 * -------------------------------------------------------------------------- */

const L = {
  canvasW: 2010,
  headH: 46,
  impX: 24, impW: 250,
  gutImp: 274,                 // 274..330, impact arrows
  spineX: 336, spineW: 356,
  gutProp: 692,                // 692..744, the proposal bracket
  propX: 752, propW: 252,
  chainX: 1036, chainW: 940,
  padTop: 80, padBottom: 180,
  rowGap: 46, subGap: 32, chainGap: 44, railGap: 20
};

/** How much of an entry the map box shows before the sidebar takes over. */
const BOX_CHARS = 185;

const LANES = [
  { x: L.impX, w: L.impW, label: 'Measured Impact', cls: 'lane-im' },
  { x: L.spineX, w: L.spineW, label: 'Main Timeline', cls: 'lane-tl' },
  { x: L.propX, w: L.propW, label: 'Proposed Public Participation', cls: 'lane-pp' },
  { x: L.chainX, w: L.chainW, label: 'Causal Chain &amp; Evidence', cls: 'lane-ch' }
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
 * Where an impact belongs in the chronology: the index of the first entry
 * dated later than the impact was first published, so the card lands beside
 * the point in the record where the finding arrived.
 */
function impactRow(entries, found) {
  const k = dkey(found);
  const i = entries.findIndex(e => dkey(e.date) > k);
  return i === -1 ? entries.length : i;
}

function entryBoxHtml(e, i, mechs) {
  const c = CAT[e.cat];
  const { lead, rest } = splitEntryText(e.text, BOX_CHARS);
  const stars = mechs.map(m =>
    `<button class="sp-star" data-m="${m.mi}" title="${attr(`${m.name} — addressed this? ${ADDRESSED[m.failure]}`)}"
      aria-label="${attr(`Existing mechanism: ${m.name}. Did it address this? ${ADDRESSED[m.failure]}`)}">&#9733;</button>`).join('');
  return `<div class="sp-ent" data-e="${i}" tabindex="0">
    ${stars ? `<div class="sp-ent-stars">${stars}</div>` : ''}
    <div class="sp-ent-hd"><span class="sp-date">${e.date}</span><span class="ebadge ${c.badge}">${c.label}</span></div>
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

/** One proposal card: the intervention, the institutional mechanism that would
   implement it, and the outcomes it aims at, each linked to where the timeline
   measures it. The card classifies nothing; uncertainty lives in the chain and
   the evidence. */
function propBoxHtml(p, pi, impacts) {
  const links = p.impactsMeasured.map(n => {
    const ii = impacts.findIndex(x => x.name === n);
    return ii === -1 ? `<span class="sp-efflink is-off">${n}</span>`
      : `<button class="sp-efflink" data-goimp="${ii}">${n}<span class="sp-efflink-go">&#8599;</span></button>`;
  }).join('');
  return `<div class="sp-prop-head">
      <span class="sp-propbox-kick">Proposed Public Participation</span>
      <span class="sp-prop-title">${p.name}</span>
    </div>
    <div class="sp-prop-fields">
      <div class="sp-eff-kick">Mechanism</div>
      <div class="sp-eff-mech">${p.method}</div>
      ${p.summary ? `<div class="sp-prop-sum">${p.summary}</div>` : ''}
      <div class="sp-eff-kick">Effects it aims at</div>
      ${links || '<div class="sp-eff-none">No measured impact in this case</div>'}
    </div>`;
}

/** One comparable case as its own box under the proposal it belongs to. */
function compBoxHtml(c, pi, k) {
  return `<button class="sp-compbox" data-pr="${pi}" data-pc="${k}">
    <span class="sp-compbox-kick">Comparable Case</span>
    <span class="sp-compbox-name">${c.name}</span>
    <span class="sp-compbox-meta">${c.where} &middot; ${c.when}</span>
  </button>`;
}

/**
 * Render the spine map into `el`.
 * sel: { kind, idx, linkIdx, evIdx, evKind }
 * The DOM is rebuilt when the case changes; every other selection updates
 * highlights in place.
 */
export function renderSpineMap(el, caseObj, spine, sel = {}) {
  const entries = caseObj.entries;

  const lanes = LANES.map(l =>
    `<div class="sp-lane ${l.cls}" style="left:${l.x}px;width:${l.w}px">${l.label}</div>`).join('');
  el.innerHTML = `<div class="sp">
    <div class="sp-lanes" style="width:${L.canvasW}px;height:${L.headH}px">${lanes}</div>
    <svg class="sp-edges"></svg></div>`;
  const stage = el.querySelector('.sp');
  const svg = el.querySelector('.sp-edges');
  stage.style.width = `${L.canvasW}px`;

  // Lane bands, painted behind everything so the columns read as columns.
  for (const l of LANES) {
    const b = document.createElement('div');
    b.className = `sp-band ${l.cls}`;
    b.style.left = `${l.x - 14}px`;
    b.style.width = `${l.w + 28}px`;
    stage.appendChild(b);
  }
  const bands = [...stage.querySelectorAll('.sp-band')];

  // Which mechanisms should have caught which event: a star per mechanism in
  // that event's corner, in place of the old left-hand rail.
  const mechAt = new Map();
  spine.mechanisms.forEach((m, mi) => {
    for (const a of m.anchors) {
      const i = anchorIndex(entries, a);
      if (i === -1) continue;
      if (!mechAt.has(i)) mechAt.set(i, []);
      if (!mechAt.get(i).some(x => x.mi === mi)) mechAt.get(i).push({ mi, name: m.name, failure: m.failure });
    }
  });

  // Pass 1: the timeline boxes.
  const entEl = entries.map((e, i) => {
    const d = document.createElement('div');
    d.innerHTML = entryBoxHtml(e, i, mechAt.get(i) || []);
    const box = d.firstElementChild;
    box.style.left = `${L.spineX}px`;
    box.style.width = `${L.spineW}px`;
    stage.appendChild(box);
    return box;
  });

  // Pass 2: the impact cards, and where each one belongs in the chronology.
  const impFroms = spine.impacts.map(im => im.from
    .map(f => ({ f, i: anchorIndex(entries, f.anchor) }))
    .filter(x => x.i !== -1));
  const imps = spine.impacts.map((im, ii) => {
    const d = document.createElement('div');
    d.innerHTML = impactBoxHtml(im, ii);
    const box = d.firstElementChild;
    box.style.left = `${L.impX}px`;
    box.style.width = `${L.impW}px`;
    stage.appendChild(box);
    return { ii, box, row: impactRow(entries, im.found), k: dkey(im.found) };
  }).sort((a, b) => a.row - b.row || a.k - b.k);
  const impEl = [];
  for (const r of imps) impEl[r.ii] = r.box;

  // Pass 3: build and measure every proposal, its effects card, its chain
  // boxes, its evidence cards, and its comparables strip.
  const propAt = new Map();
  spine.proposals.forEach((p, pi) => {
    const i = anchorIndex(entries, p.anchor);
    if (i === -1) return;

    // A div rather than a button, because the effect links inside it are buttons.
    const box = document.createElement('div');
    box.className = 'sp-propbox';
    box.dataset.pr = pi;
    box.dataset.ae = i;
    box.tabIndex = 0;
    box.setAttribute('role', 'button');
    box.innerHTML = propBoxHtml(p, pi, spine.impacts);
    box.style.left = `${L.propX}px`;
    box.style.width = `${L.propW}px`;
    stage.appendChild(box);
    const head = box.querySelector('.sp-prop-head');

    const n = p.links.length;
    const boxW = Math.min(190, Math.floor((L.chainW - (n - 1) * L.chainGap) / n));
    const links = p.links.map((lk, li) => {
      const d = document.createElement('button');
      d.className = `sp-chainbox${lk.strength === 'unstudied' ? ' sp-chain-un' : ''}`;
      d.dataset.pr = pi;
      d.dataset.pl = li;
      // The box carries just its claim; a dashed border still marks a link no
      // study tests directly.
      d.innerHTML = `<span class="sp-chain-name">${lk.name}</span>`;
      d.style.left = `${L.chainX + li * (boxW + L.chainGap)}px`;
      d.style.width = `${boxW}px`;
      stage.appendChild(d);

      const cards = [];
      // One card per record, and clicking one opens that record alone.
      const addCard = (kick, label, extraCls = '', ev = null) => {
        const ec = document.createElement('button');
        ec.className = `sp-evcard${extraCls}`;
        ec.dataset.pr = pi;
        ec.dataset.pl = li;
        if (ev) { ec.dataset.ev = ev.k; ec.dataset.evk = ev.kind; }
        ec.innerHTML = `<span class="sp-evcard-kick">${kick}</span>${label}`;
        ec.style.left = d.style.left;
        ec.style.width = `${boxW}px`;
        stage.appendChild(ec);
        cards.push(ec);
      };
      if ((lk.evidence ?? []).length) {
        lk.evidence.forEach((ev, k) =>
          addCard('Evidence', ev.srcs?.map(x => x.l).join('; ') || 'Source', '', { k, kind: 'for' }));
      } else if (lk.strength === 'unstudied') {
        addCard('Evidence', 'No study found', ' sp-evcard-un');
      }
      (lk.counterEvidence ?? []).forEach((ev, k) =>
        addCard('Counter', ev.srcs?.map(x => x.l).join('; ') || 'Source', ' sp-evcard-ctr', { k, kind: 'counter' }));
      return { el: d, cards, x: L.chainX + li * (boxW + L.chainGap), w: boxW };
    });

    // Comparable cases: one box each, stacked under the proposal in its own
    // lane, so a single real-world case can be clicked and read on its own.
    const comps = (p.comparables ?? []).map((c, ci) => {
      const d = document.createElement('div');
      d.innerHTML = compBoxHtml(c, pi, ci);
      const cb = d.firstElementChild;
      cb.style.left = `${L.propX}px`;
      cb.style.width = `${L.propW}px`;
      stage.appendChild(cb);
      return cb;
    });

    // One height for every link box in a row, so the arrows between them are
    // exactly horizontal.
    const linkH = Math.max(...links.map(x => x.el.offsetHeight));
    for (const x of links) x.el.style.height = `${linkH}px`;

    const rec = {
      p, pi, box, links, comps, linkH,
      boxH: box.offsetHeight,
      // The chain arrow leaves from the middle of the title block, not the
      // middle of the whole card.
      headCy: head.offsetTop + head.offsetHeight / 2
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
    let bot = y + entEl[i].offsetHeight;

    if (propAt.has(i)) {
      let subY = y;
      for (const rec of propAt.get(i)) {
        rec.y = subY;
        rec.box.style.top = `${Math.round(subY)}px`;
        rec.cy = subY + rec.headCy;

        // The chain row centres on the card's title block, so the arrow out of
        // the card and every arrow along the chain is one straight horizontal line.
        const chainTop = rec.cy - rec.linkH / 2;
        let stackBot = chainTop + rec.linkH;
        for (const lk of rec.links) {
          lk.el.style.top = `${Math.round(chainTop)}px`;
          lk.cy = chainTop + rec.linkH / 2;
          let ey = chainTop + rec.linkH + 8;
          for (const c of lk.cards) {
            c.style.top = `${Math.round(ey)}px`;
            ey += c.offsetHeight + 5;
          }
          stackBot = Math.max(stackBot, ey);
        }
        // The comparables run straight down the proposal lane under the
        // card, so each one sits beside the chain it speaks to.
        let propBot = subY + rec.boxH;
        for (const cb of rec.comps) {
          propBot += 6;
          cb.style.top = `${Math.round(propBot)}px`;
          propBot += cb.offsetHeight;
        }
        const subH = Math.max(propBot - subY, stackBot - subY);
        subY += subH + L.subGap;
      }
      bot = Math.max(bot, subY - L.subGap);
    }
    y = bot + L.rowGap;
  });
  const timelineBot = y - L.rowGap;

  // The impact rail: chronological placement first, pushed down only far
  // enough to clear the card above it.
  let railBot = L.padTop;
  for (const r of imps) {
    const target = r.row < entries.length ? yTop[r.row] : timelineBot + L.rowGap;
    const iy = Math.max(target, railBot);
    r.box.style.top = `${Math.round(iy)}px`;
    r.cy = iy + r.box.offsetHeight / 2;
    railBot = iy + r.box.offsetHeight + L.railGap;
  }

  const totalH = Math.max(y - L.rowGap, railBot) + L.padBottom;
  stage.style.height = `${totalH}px`;
  for (const b of bands) b.style.height = `${Math.round(totalH)}px`;
  svg.setAttribute('viewBox', `0 0 ${L.canvasW} ${Math.round(totalH)}`);
  svg.setAttribute('width', L.canvasW);
  svg.setAttribute('height', Math.round(totalH));

  /* ------------------------------- edges -------------------------------- */

  const arw = (id, color, size, extra = '') => `<marker id="sp-arw-${id}" viewBox="0 0 10 10" refX="9" refY="5"
      markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 L 2.8 5 z" fill="${color}"${extra}></path></marker>`;
  const defs = `<defs>
    ${arw('spine', '#ffffff', 7, ' stroke="#b8b1a3" stroke-width="1.1"')}
    ${arw('chain', '#601898', 8)}
    ${arw('imp', '#1e6b3c', 7, ' fill-opacity="0.55"')}</defs>`;

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
  // across the gutter, and into the impact card. Right angles only.
  let lane = 0;
  for (const r of imps) {
    for (const { i } of impFroms[r.ii]) {
      const sy = yTop[i] + entEl[i].offsetHeight / 2;
      const gx = L.gutImp + 10 + (lane++ % 6) * 7.5;
      paths += `<path class="sp-edge sp-edge-imp" data-i="${r.ii}" data-src="${i}" marker-end="url(#sp-arw-imp)"
        d="M ${L.spineX} ${sy} H ${gx} V ${r.cy} H ${L.impX + L.impW + 4}"></path>`;
    }
  }

  // Proposals: a dotted bracket in the right gutter tying each proposal to the
  // event it would intervene in. Attachment, not causation.
  for (const [i, list] of propAt) {
    const sy = yTop[i] + entEl[i].offsetHeight / 2;
    const gx = L.gutProp + 24;
    const cys = list.map(r => r.cy);
    const top = Math.min(sy, ...cys), bot = Math.max(sy, ...cys);
    paths += `<path class="sp-edge sp-edge-allude" d="M ${L.spineX + L.spineW} ${sy} H ${gx}"></path>`;
    if (bot - top > 1) paths += `<path class="sp-edge sp-edge-allude" d="M ${gx} ${top} V ${bot}"></path>`;
    for (const rec of list) {
      paths += `<path class="sp-edge sp-edge-allude-tie" d="M ${gx} ${rec.cy} H ${L.propX - 2}"></path>`;
      // Straight run from the proposal into its chain, then link to link.
      const first = rec.links[0];
      paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-arw-chain)"
        d="M ${L.propX + L.propW} ${rec.cy} H ${first.x - 4}"></path>`;
      for (let k = 0; k < rec.links.length - 1; k++) {
        const a = rec.links[k], b = rec.links[k + 1];
        paths += `<path class="sp-edge sp-edge-chain" marker-end="url(#sp-arw-chain)"
          d="M ${a.x + a.w} ${a.cy} H ${b.x - 4}"></path>`;
      }
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
  el.querySelectorAll('.sp-star.on').forEach(n => n.classList.remove('on'));
  const on = q => el.querySelectorAll(q).forEach(n => n.classList.add('sel'));
  const ringAnchor = pi => {
    const box = el.querySelector(`.sp-propbox[data-pr="${pi}"]`);
    if (box?.dataset.ae != null) {
      el.querySelector(`.sp-ent[data-e="${box.dataset.ae}"]`)?.classList.add('sp-ent-prop');
    }
  };
  if (sel.kind === 'entry') {
    on(`.sp-ent[data-e="${sel.idx}"]`);
    // Selecting an event lights the impacts measured off it, so the link is
    // discoverable from either end.
    el.querySelectorAll(`.sp-edge-imp[data-src="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  }
  else if (sel.kind === 'mech') {
    el.querySelectorAll(`.sp-star[data-m="${sel.idx}"]`).forEach(n => {
      n.classList.add('on');
      n.closest('.sp-ent')?.classList.add('sel');
    });
  } else if (sel.kind === 'impact') {
    on(`.sp-imp[data-i="${sel.idx}"]`);
    el.querySelectorAll(`.sp-edge-imp[data-i="${sel.idx}"]`).forEach(n => n.classList.add('on'));
  } else if (sel.kind === 'proplink') {
    on(`.sp-chainbox[data-pr="${sel.idx}"][data-pl="${sel.linkIdx}"]`);
    ringAnchor(sel.idx);
  } else if (sel.kind === 'propev') {
    on(`.sp-evcard[data-pr="${sel.idx}"][data-pl="${sel.linkIdx}"][data-ev="${sel.evIdx}"][data-evk="${sel.evKind}"]`);
    ringAnchor(sel.idx);
  } else if (sel.kind === 'prop') {
    on(`.sp-propbox[data-pr="${sel.idx}"]`);
    ringAnchor(sel.idx);
  } else if (sel.kind === 'propcomp') {
    on(sel.compIdx == null
      ? `.sp-compbox[data-pr="${sel.idx}"]`
      : `.sp-compbox[data-pr="${sel.idx}"][data-pc="${sel.compIdx}"]`);
    ringAnchor(sel.idx);
  }
}

/* ------------------------------ detail pane ------------------------------ */

function evHtml(list, kind) {
  if (!list?.length) return '';
  const heading = kind === 'counter' ? 'Counter-Evidence' : 'Evidence';
  const items = list.map(ev => `
    <li class="ev">
      <div class="ev-body">
        <div class="ev-finding">${ev.finding}</div>
        ${ev.caveat ? `<div class="ev-caveat">Caveat: ${ev.caveat}</div>` : ''}
        <div class="ev-srcs">${srcHtml(ev.srcs)}</div>
      </div>
    </li>`).join('');
  return `<div class="ln-sec ln-sec-${kind}"><h4>${heading}</h4><ul class="ev-list">${items}</ul></div>`;
}

function entryDetail(caseObj, spine, i) {
  const e = caseObj.entries[i];
  const c = CAT[e.cat];
  const mechs = spine.mechanisms
    .map((m, mi) => ({ m, mi }))
    .filter(({ m }) => m.anchors.some(a => plain(e.text).includes(a)));
  const starred = mechs.length ? `<div class="ln-sec"><h4>Did Any Existing System or Mechanism Address This?</h4>
    <ul class="ev-list">${mechs.map(({ m, mi }) => `
      <li class="sp-chainrow" data-gomech="${mi}" tabindex="0">
        <span class="sp-star sp-star-static">&#9733;</span>
        <div class="ev-body"><div class="ev-finding">${m.name}</div>
          <div class="ev-caveat">${ADDRESSED[m.failure]}</div></div>
      </li>`).join('')}</ul></div>` : '';
  return `<div class="cd">
    <div class="cd-kick">Timeline Event</div>
    <div class="cd-head"><span class="cd-id">${e.date}</span> <span class="ebadge ${c.badge}">${c.label}</span></div>
    <p class="cd-claim">${e.text}</p>
    <div class="eact"><span class="act-label">Actors:</span> ${e.actors}</div>
    <div class="ev-srcs">${srcHtml(e.srcs)}</div>
    ${starred}
  </div>`;
}

function mechDetail(spine, i) {
  const m = spine.mechanisms[i];
  return `<div class="cd">
    <div class="cd-kick cd-kick-mech">&#9733; Did any existing system or mechanism(s) address this?</div>
    <div class="cd-head"><span class="cd-id">${ADDRESSED[m.failure]}</span></div>
    <div class="eact"><span class="act-label">Actor:</span> ${m.actor}</div>
    <p class="cd-claim"><strong>${m.note}.</strong></p>
    <p class="cd-claim">${m.detail}</p>
    ${m.srcs?.length ? `<div class="ev-srcs">${srcHtml(m.srcs)}</div>` : ''}
  </div>`;
}

function impactDetail(spine, i) {
  const im = spine.impacts[i];
  const arrows = im.from.map(f => `
    <li class="sp-arrowrow">
      <div class="ev-body"><div class="ev-finding">From: ${f.anchor}${f.note ? ` <em>(${f.note})</em>` : ''}</div></div></li>`).join('');
  return `<div class="cd">
    <div class="cd-kick cd-kick-imp">Measured Impact</div>
    <div class="cd-head"><span class="cd-id">${im.name}</span></div>
    <p class="cd-claim"><strong>${im.headline}</strong></p>
    <div class="eact"><span class="act-label">First published:</span> ${im.found}</div>
    <p class="cd-claim">${im.measures}</p>
    <div class="ln-sec"><h4>Causal Arrows From the Timeline</h4><ul class="ev-list">${arrows}</ul></div>
    ${evHtml(im.evidence, 'for')}
    ${evHtml(im.counterEvidence, 'counter')}
  </div>`;
}

function propCompDetail(spine, i, k) {
  const p = spine.proposals[i];
  const c = k == null ? null : (p.comparables ?? [])[k];
  // Comparables show only one at a time, from their own box; a bare list
  // route falls back to the proposal itself.
  if (!c) return propDetail(spine, i);
  return `<div class="cd">
    <button class="cd-back" data-back="prop">&larr; ${attr(p.name)}</button>
    <div class="cd-kick cd-kick-comp">Comparable Case</div>
    <div class="cd-head"><span class="cd-id">${c.name}</span></div>
    <p class="cd-claim sp-hintline">Compared with: ${p.name}</p>
    <div class="ln-sec">
      <p class="cd-claim"><span class="act-label">Where:</span> ${c.where} (${c.when})</p>
      <p class="cd-claim"><span class="act-label">Authority:</span> ${c.authority}</p></div>
    <p class="cd-claim">${c.outcome}</p>
    ${c.srcs?.length ? `<div class="ev-srcs">${srcHtml(c.srcs)}</div>` : ''}
  </div>`;
}

function propDetail(spine, i) {
  const p = spine.proposals[i];
  return `<div class="cd">
    <div class="cd-kick cd-kick-prop">Proposed Public Participation</div>
    <div class="cd-head"><span class="cd-id">${p.name}</span></div>
    <p class="cd-claim"><span class="act-label">Mechanism:</span> ${p.method}</p>
    <p class="cd-claim">${p.description}</p>
    <div class="ln-sec">
      <p class="cd-claim"><span class="act-label">Where:</span> ${p.where}</p>
      <p class="cd-claim"><span class="act-label">When:</span> ${p.when}</p></div>
    ${p.srcs?.length ? `<div class="ev-srcs">${srcHtml(p.srcs)}</div>` : ''}
  </div>`;
}

function propLinkDetail(spine, i, li) {
  const p = spine.proposals[i];
  const lk = p.links[li];
  return `<div class="cd">
    <button class="cd-back" data-back="prop">&larr; ${attr(p.name)}</button>
    <div class="cd-kick cd-kick-prop">Causal Link ${li + 1} of ${p.links.length}</div>
    <div class="cd-head"><span class="cd-id">${lk.name}</span></div>
    <p class="cd-claim">${lk.claim}</p>
    ${lk.strength === 'unstudied' ? `<p class="cd-claim"><em>No study tests this link directly.${(lk.evidence ?? []).length ? ' The evidence below comes from nearby cases and other domains.' : ''}</em></p>` : ''}
    ${evHtml(lk.evidence, 'for')}
    ${evHtml(lk.counterEvidence, 'counter')}
  </div>`;
}

/** One evidence record on its own, so a single paper can be read and cited. */
function propEvDetail(spine, i, li, k, kind) {
  const p = spine.proposals[i];
  const lk = p.links[li];
  const counter = kind === 'counter';
  const ev = (counter ? lk.counterEvidence : lk.evidence)?.[k];
  if (!ev) return propLinkDetail(spine, i, li);
  const title = ev.srcs?.map(x => x.l).join('; ') || 'Source';
  return `<div class="cd">
    <button class="cd-back" data-back="link">&larr; ${attr(lk.name)}</button>
    <div class="cd-kick ${counter ? 'cd-kick-ctr' : 'cd-kick-ev'}">${counter ? 'Counter-Evidence' : 'Evidence'}</div>
    <div class="cd-head"><span class="cd-id">${title}</span></div>
    <p class="cd-claim sp-hintline">${counter ? 'Contests' : 'Supports'}: ${lk.name}</p>
    <p class="cd-claim">${ev.finding}</p>
    ${ev.caveat ? `<div class="ev-caveat">Caveat: ${ev.caveat}</div>` : ''}
    <div class="ev-srcs">${srcHtml(ev.srcs)}</div>
  </div>`;
}

function overview(caseObj, spine) {
  const nProp = spine.proposals.length;
  const nMech = spine.mechanisms.length;
  const nImp = spine.impacts.length;
  return `<div class="cd cd-intro">
    <div class="cd-hint">The timeline runs down the second lane in order. Each box shows the
      opening of an entry; click it for the whole record. A star in an event's corner marks a
      system or mechanism that already existed; click the star to read whether it addressed
      the event. The far-left lane holds what the record later measured, each card at the date
      its finding was first published, with an arrow from the events where the causal claim
      holds. To the right sit the proposed public participation from the design work, each
      tied to the event it would intervene in and carrying the effects it aims at, then each
      proposal's causal chain running left to right with the evidence on the cards.</div>
    <div class="cd-sum">
      <span class="cd-sum-lbl">Timeline</span><div class="cd-sum-pills"><span class="g g-neutral">${caseObj.entries.length} Events</span></div>
      <span class="cd-sum-lbl">Starred</span><div class="cd-sum-pills"><span class="g g-mech">${nMech} Existing Mechanisms</span></div>
      <span class="cd-sum-lbl">Measured</span><div class="cd-sum-pills"><span class="g g-imp">${nImp} Measured Impacts</span></div>
      <span class="cd-sum-lbl">Proposed</span><div class="cd-sum-pills"><span class="g g-prop">${nProp} Proposed Public Participation</span></div>
    </div>
  </div>`;
}

export function renderSpineDetail(el, caseObj, spine, sel = {}) {
  // About This Case lives in the toggle under the top bar, not here.
  if (sel.kind === 'entry') el.innerHTML = entryDetail(caseObj, spine, sel.idx);
  else if (sel.kind === 'mech') el.innerHTML = mechDetail(spine, sel.idx);
  else if (sel.kind === 'impact') el.innerHTML = impactDetail(spine, sel.idx);
  else if (sel.kind === 'prop') el.innerHTML = propDetail(spine, sel.idx);
  else if (sel.kind === 'proplink') el.innerHTML = propLinkDetail(spine, sel.idx, sel.linkIdx);
  else if (sel.kind === 'propev') el.innerHTML = propEvDetail(spine, sel.idx, sel.linkIdx, sel.evIdx, sel.evKind);
  else if (sel.kind === 'propcomp') el.innerHTML = propCompDetail(spine, sel.idx, sel.compIdx);
  else el.innerHTML = overview(caseObj, spine);
  el.scrollTop = 0;
}
