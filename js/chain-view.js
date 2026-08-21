import { srcHtml } from './util.js';

/* --------------------------------------------------------------------------
 * The causal chain as a map, not a document.
 *
 * Nodes are HTML (so text wraps and styles normally); edges are an SVG layer
 * behind them. Each edge IS a causal link, colored by how well evidenced it
 * is, and carries a chip showing its id plus one dot per participation
 * instance sitting at that link, which is the whole conceptual point of the
 * project, and was previously buried inside a collapsed card.
 * -------------------------------------------------------------------------- */

export const STRENGTH_LABEL = {
  strong: 'Strong', moderate: 'Moderate', weak: 'Weak',
  contested: 'Contested', unstudied: 'Unstudied'
};

export const KIND_LABEL = {
  deliberative: 'Deliberative', consultative: 'Consultative', litigation: 'Litigation',
  bargaining: 'Bargaining', electoral: 'Electoral', monitoring: 'Monitoring',
  journalism: 'Journalism', service: 'Service & Mutual Aid',
  whistleblowing: 'Whistleblowing', protest: 'Protest'
};

export const STAGE_LABEL = {
  structural: 'Structural', participation: 'Participation', trust: 'Trust',
  compliance: 'Compliance', harm: 'Harm', 'harm-reduction': 'Harm Reduction'
};

export const EFFECT_LABEL = {
  moved: 'Most Change', partial: 'Partial Change',
  none: 'No Change', unmeasured: 'Never Measured'
};

const STRENGTH_COLOR = {
  strong: '#177038', moderate: '#1258a0', weak: '#a84e08',
  contested: '#8a6d0f', unstudied: '#aa2a20'
};

const LAYOUT = { colGap: 18, rowGap: 62, padX: 8, padY: 10, maxNodeW: 260, minNodeW: 150 };

/* ------------------------------ graph model ------------------------------ */

/**
 * Turn a chain's link list into a layered DAG. Links are authored parent-first
 * (the linter enforces that a link's `from` equals its parent's `to`), so a
 * single forward pass gives correct depths even with branches.
 */
export function buildGraph(chain) {
  const nodes = new Map();

  const touch = label => {
    if (!nodes.has(label)) {
      nodes.set(label, { label, depth: 0, children: 0, parents: 0, order: nodes.size });
    }
    return nodes.get(label);
  };

  const edges = chain.links.map(l => {
    const from = touch(l.from);
    const to = touch(l.to);
    from.children++;
    to.parents++;
    to.depth = Math.max(to.depth, from.depth + 1);
    return { link: l, from: l.from, to: l.to };
  });

  // Group by depth, then order each row so children sit near their parent.
  const rows = [];
  for (const n of nodes.values()) {
    (rows[n.depth] ||= []).push(n);
  }
  rows.forEach((row, d) => {
    if (d > 0) {
      const parentLane = new Map();
      for (const e of edges) {
        const to = nodes.get(e.to);
        if (to.depth !== d) continue;
        const from = nodes.get(e.from);
        parentLane.set(to.label, Math.min(parentLane.get(to.label) ?? Infinity, from.lane ?? 0));
      }
      row.sort((a, b) =>
        (parentLane.get(a.label) ?? 0) - (parentLane.get(b.label) ?? 0) || a.order - b.order
      );
    }
    row.forEach((n, i) => { n.lane = i; n.rowCount = row.length; });
  });

  const maxLanes = rows.reduce((m, r) => Math.max(m, r.length), 1);
  return { nodes, edges, rows, maxLanes };
}

function nodeRole(n) {
  if (n.parents === 0) return 'root';
  if (n.children === 0) return 'end';
  if (n.children > 1) return 'fork';
  return '';
}

/* -------------------------------- the map -------------------------------- */

/**
 * Render the graph into `el`. Two passes: place nodes to measure their real
 * heights, then position rows and draw edges against measured geometry.
 */
export function renderMap(el, chain, selection = {}) {
  const g = buildGraph(chain);
  const width = Math.max(el.clientWidth - LAYOUT.padX * 2, 280);
  const colW = Math.min(
    LAYOUT.maxNodeW + LAYOUT.colGap,
    Math.max(LAYOUT.minNodeW + LAYOUT.colGap, width / g.maxLanes)
  );
  const nodeW = Math.round(colW - LAYOUT.colGap);

  el.innerHTML = `<div class="cg"><svg class="cg-edges"></svg></div>`;
  const stage = el.querySelector('.cg');
  const svg = el.querySelector('.cg-edges');

  // Pass 1: place nodes horizontally and measure.
  const placed = [];
  g.rows.forEach((row, depth) => {
    const rowW = row.length * colW - LAYOUT.colGap;
    const startX = Math.max(LAYOUT.padX, (width - rowW) / 2 + LAYOUT.padX);
    row.forEach(n => {
      const d = document.createElement('div');
      d.className = `cg-node cg-${nodeRole(n)}`;
      d.style.width = `${nodeW}px`;
      d.style.left = `${Math.round(startX + n.lane * colW)}px`;
      d.textContent = n.label;
      stage.appendChild(d);
      placed.push({ n, el: d, depth, x: startX + n.lane * colW + nodeW / 2 });
    });
  });

  // Pass 2: stack rows by measured height.
  const rowTop = [];
  let y = LAYOUT.padY;
  g.rows.forEach((row, depth) => {
    rowTop[depth] = y;
    const h = Math.max(...placed.filter(p => p.depth === depth).map(p => p.el.offsetHeight));
    y += h + LAYOUT.rowGap;
  });
  const geo = new Map();
  for (const p of placed) {
    p.el.style.top = `${Math.round(rowTop[p.depth])}px`;
    geo.set(p.n.label, {
      cx: p.x,
      top: rowTop[p.depth],
      bottom: rowTop[p.depth] + p.el.offsetHeight
    });
  }
  const totalH = Math.max(y - LAYOUT.rowGap + LAYOUT.padY, 120);
  stage.style.height = `${Math.round(totalH)}px`;
  stage.style.width = `${Math.round(width + LAYOUT.padX * 2)}px`;
  svg.setAttribute('viewBox', `0 0 ${Math.round(width + LAYOUT.padX * 2)} ${Math.round(totalH)}`);
  svg.setAttribute('width', Math.round(width + LAYOUT.padX * 2));
  svg.setAttribute('height', Math.round(totalH));

  // Edges.
  let selected = null;
  let paths = '';
  const chips = [];
  for (const e of g.edges) {
    const a = geo.get(e.from);
    const b = geo.get(e.to);
    if (!a || !b) continue;
    const dy = b.top - a.bottom;
    const c1y = a.bottom + dy * 0.45;
    const c2y = b.top - dy * 0.45;
    const d = `M ${a.cx} ${a.bottom} C ${a.cx} ${c1y}, ${b.cx} ${c2y}, ${b.cx} ${b.top}`;
    const on = selection.linkId === e.link.id;
    const color = STRENGTH_COLOR[e.link.strength];
    const dash = e.link.strength === 'unstudied' ? ' stroke-dasharray="7 5"' : '';
    paths += `<path class="cg-hit" d="${d}" data-link="${e.link.id}"></path>`;
    paths += `<path class="cg-edge${on ? ' on' : ''}" d="${d}" stroke="${color}"${dash}
      marker-end="url(#arw-${e.link.strength})"></path>`;

    // Chip at the bezier midpoint.
    const mx = (a.cx + 3 * a.cx + 3 * b.cx + b.cx) / 8;
    const my = (a.bottom + 3 * c1y + 3 * c2y + b.top) / 8;
    chips.push({ link: e.link, x: mx, y: my, on });
  }

  svg.innerHTML = `<defs>${Object.entries(STRENGTH_COLOR).map(([k, c]) =>
    `<marker id="arw-${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5"
       markerHeight="5.5" orient="auto-start-reverse">
       <path d="M 0 0 L 10 5 L 0 10 z" fill="${c}"></path></marker>`).join('')}</defs>${paths}`;

  for (const c of chips) {
    const dots = c.link.participation.length
      ? c.link.participation.map(p =>
          `<span class="cg-dot ef-${p.effect}" title="${EFFECT_LABEL[p.effect]}"></span>`).join('')
      : `<span class="cg-dot cg-dot-none" title="No participation identified at this link"></span>`;
    const btn = document.createElement('button');
    btn.className = `cg-chip st-${c.link.strength}${c.on ? ' on' : ''}`;
    btn.dataset.link = c.link.id;
    btn.style.left = `${Math.round(c.x)}px`;
    btn.style.top = `${Math.round(c.y)}px`;
    btn.innerHTML =
      `<span class="cg-chip-id">${c.link.id}</span><span class="cg-chip-dots">${dots}</span>`;
    btn.title = c.link.claim.replace(/<[^>]+>/g, '');
    stage.appendChild(btn);
    if (c.on) selected = btn;
  }

  // Keep the selected link visible when the graph is taller than its column,
  // so walking the chain with the keyboard never scrolls off-screen.
  if (selected) {
    const box = el.getBoundingClientRect();
    const chip = selected.getBoundingClientRect();
    if (chip.top < box.top + 40 || chip.bottom > box.bottom - 40) {
      el.scrollTop += (chip.top - box.top) - box.height / 2 + chip.height / 2;
    }
  }

  return g;
}

/* ------------------------------ detail pane ------------------------------ */

function evidenceHtml(list, kind) {
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

function partCard(p, idx, { clickable = true } = {}) {
  return `<li class="pa pa-${p.effect}"${clickable ? ` data-part="${idx}" tabindex="0"` : ''}>
    <div class="pa-hd">
      <span class="pa-date">${p.date}</span>
      <span class="pa-name">${p.name}</span>
      <span class="pa-kind">${KIND_LABEL[p.kind]}</span>
      <span class="pa-effect ef-${p.effect}">${EFFECT_LABEL[p.effect]}</span>
    </div>
    <div class="pa-actors"><span class="act-label">Actors:</span> ${p.actors}</div>
    <div class="pa-desc">${p.description}</div>
    <div class="ev-srcs">${srcHtml(p.srcs)}</div>
  </li>`;
}

function participationHtml(list) {
  if (!list?.length) {
    return `<div class="ln-sec ln-sec-part"><h4>Public Participation at This Link</h4>
      <div class="ln-none">No participation instance identified at this link.</div></div>`;
  }
  return `<div class="ln-sec ln-sec-part"><h4>Public Participation at This Link</h4>
    <ul class="pa-list">${list.map((p, i) => partCard(p, i)).join('')}</ul></div>`;
}

function gapsHtml(list) {
  if (!list?.length) return '';
  return `<div class="ln-sec ln-sec-gap"><h4>Open Questions and Research To-Dos</h4>
    <ul class="gap-list">${list.map(g => `<li>${g}</li>`).join('')}</ul></div>`;
}

// Both scales run best-to-worst, so the summary reads as a scale rather than
// in whatever order the links happened to be authored.
const STRENGTH_ORDER = ['strong', 'moderate', 'weak', 'contested', 'unstudied'];
const EFFECT_ORDER = ['moved', 'partial', 'unmeasured', 'none'];

function summaryStrip(chain) {
  const byStrength = {};
  const byEffect = {};
  let gaps = 0;
  for (const l of chain.links) {
    byStrength[l.strength] = (byStrength[l.strength] || 0) + 1;
    gaps += l.gaps.length;
    for (const p of l.participation) byEffect[p.effect] = (byEffect[p.effect] || 0) + 1;
  }

  const pills = (order, counts, cls, labels) => order
    .filter(k => counts[k])
    .map(k => `<span class="g ${cls}-${k}">${counts[k]} ${labels[k]}</span>`)
    .join('');

  const s = pills(STRENGTH_ORDER, byStrength, 'gr', STRENGTH_LABEL);
  const e = pills(EFFECT_ORDER, byEffect, 'ef', EFFECT_LABEL);

  const row = (label, content) =>
    `<span class="cd-sum-lbl">${label}</span><div class="cd-sum-pills">${content}</div>`;

  return `<div class="cd-sum">
    ${row('Links', s)}
    ${e ? row('Participation', e) : ''}
    ${gaps ? row('Open', `<button class="g gr-unstudied cd-sum-btn" data-gaps>${gaps} Open Question${gaps === 1 ? '' : 's'} &rarr;</button>`) : ''}
  </div>`;
}

/** Render the right-hand pane for the current selection. */
export function renderDetail(el, chain, selection = {}) {
  const link = selection.linkId
    ? chain.links.find(l => l.id === selection.linkId)
    : null;

  if (!link) {
    el.innerHTML = `<div class="cd cd-intro">
      <div class="cd-hint">Click any link on the map to open its evidence and the
        participation that sat at it. Arrow keys walk the chain.</div>
      <div class="cd-kick">${chain.label}</div>
      ${chain.purpose ? `<div class="cd-purpose">${chain.purpose}</div>` : ''}
      <div class="cd-outcome">${chain.outcome}</div>
      <div class="cd-thesis">${chain.thesis}</div>
      ${summaryStrip(chain)}
    </div>`;
    el.scrollTop = 0;
    return;
  }

  const p = selection.partIdx != null ? link.participation[selection.partIdx] : null;

  if (p) {
    el.innerHTML = `<div class="cd">
      <button class="cd-back" data-back="link">&larr; Back to link ${link.id}</button>
      <div class="cd-kick">Participation Instance</div>
      <ul class="pa-list">${partCard(p, selection.partIdx, { clickable: false })}</ul>
      <div class="cd-ctx">
        <h4>Sits at link ${link.id}</h4>
        <p class="cd-claim">${link.claim}</p>
        <p class="cd-flow"><span>${link.from}</span> &rarr; <span>${link.to}</span></p>
      </div>
    </div>`;
    el.scrollTop = 0;
    return;
  }

  el.innerHTML = `<div class="cd">
    <button class="cd-back" data-back="chain">&larr; Chain Overview</button>
    <div class="cd-head">
      <span class="cd-id">${link.id}</span>
      <span class="g gr-${link.strength}">${STRENGTH_LABEL[link.strength]} link</span>
      ${link.stage ? `<span class="g cd-stage">${STAGE_LABEL[link.stage]}</span>` : ''}
      ${link.after ? `<span class="cd-branch">branches from ${link.after}</span>` : ''}
    </div>
    <p class="cd-flow"><span>${link.from}</span> &rarr; <span>${link.to}</span></p>
    <p class="cd-claim">${link.claim}</p>
    ${evidenceHtml(link.evidence, 'for')}
    ${evidenceHtml(link.counterEvidence, 'counter')}
    ${participationHtml(link.participation)}
    ${gapsHtml(link.gaps)}
  </div>`;
  el.scrollTop = 0;
}

/** Every open question in the chain, grouped under the link it belongs to. */
export function renderGaps(el, chain) {
  const groups = chain.links
    .filter(l => l.gaps.length)
    .map(l => `<div class="gp-group">
      <button class="gp-link" data-golink="${l.id}">
        <span class="gp-id">${l.id}</span>
        <span class="g gr-${l.strength}">${STRENGTH_LABEL[l.strength]}</span>
        <span class="gp-flow">${l.from} &rarr; ${l.to}</span>
      </button>
      <ul class="gap-list">${l.gaps.map(g => `<li>${g}</li>`).join('')}</ul>
    </div>`).join('');

  const n = chain.links.reduce((a, l) => a + l.gaps.length, 0);

  el.innerHTML = `<div class="cd">
    <button class="cd-back" data-back="gaps">&larr; Chain Overview</button>
    <div class="cd-kick">Open Questions</div>
    <p class="cd-claim">${n} open question${n === 1 ? '' : 's'} across this chain.
      These are the research plan, generated from the argument: each one is what
      would have to be studied for its link to firm up. Click a link header to
      open that link on the map.</p>
    ${groups}
  </div>`;
  el.scrollTop = 0;
}

/** Next/previous link id when walking the chain with the keyboard. */
export function stepLink(chain, currentId, dir) {
  const i = chain.links.findIndex(l => l.id === currentId);
  if (i === -1) return chain.links[dir > 0 ? 0 : chain.links.length - 1].id;
  const n = Math.min(Math.max(i + dir, 0), chain.links.length - 1);
  return chain.links[n].id;
}
