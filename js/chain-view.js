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
  strong: 'Strong', moderate: 'Substantial', weak: 'Weak',
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

export const NODE_ROLE_LABEL = {
  immovable: 'Event that cannot be changed',
  intervenable: 'Intervenable Event',
  outcome: 'Valued Outcome'
};

const STRENGTH_COLOR = {
  strong: '#177038', moderate: '#1258a0', weak: '#a84e08',
  contested: '#8a6d0f', unstudied: '#aa2a20'
};

// flank = horizontal room reserved on each side of a node for its
// participation cards; cardGap = vertical space between stacked cards.
const LAYOUT = {
  colGap: 16, rowGap: 58, padX: 8,
  // Generous vertical breathing room so the chain does not feel crammed and
  // there is room to scroll past the top and bottom nodes.
  padTop: 90, padBottom: 220,
  maxNodeW: 224, minNodeW: 150,
  // flank = a card's reach from the chip centre: ~half the chip (72) + gap (12)
  // + card width (132). Used to size slots so flanks never collide.
  flank: 216, cardGap: 6, branchFactor: 2.7
};

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

/**
 * A node's role comes from the chain's authored `nodes` map: gray for events
 * nothing could have moved, green for events participation could act on, red
 * for the outcomes worth caring about. Terminal position no longer drives
 * color; whether a node matters does.
 */
function nodeRole(chain, n) {
  const role = chain.nodes?.[n.label];
  if (role) return role;
  return n.children === 0 ? 'outcome' : 'intervenable';
}

/* -------------------------------- the map -------------------------------- */

/**
 * Render the graph into `el`. Two passes: place nodes to measure their real
 * heights, then position rows and draw edges against measured geometry.
 */
export function renderMap(el, chain, selection = {}) {
  const g = buildGraph(chain);
  const container = Math.max(el.clientWidth - LAYOUT.padX * 2, 320);

  // Each node gets a wide horizontal SLOT that reserves room on both sides for
  // its participation cards, so a link's flanks never reach a neighbouring
  // lane. `flank` is a card's full reach from the chip centre (half the chip +
  // the gap + the card). Sibling link chips on a branch row sit a half-slot
  // apart, so keeping their facing cards clear needs slotW/2 > 2*flank, i.e.
  // slotW > 4*flank; the +margin adds breathing room.
  const { flank, cardGap, colGap, maxNodeW, branchFactor, padX, padTop, padBottom } = LAYOUT;
  // Extra horizontal room where a row has sibling links, so facing cards of
  // adjacent chips clear each other. branchFactor is tuned (with the overlap
  // check) to the real chains rather than the pessimistic 4x worst case, so
  // the graph is not needlessly spread out; a single-column chain skips it.
  const branchClear = g.maxLanes > 1 ? Math.round(branchFactor * flank) + 20 : 0;
  const slotW = Math.max(branchClear, maxNodeW + 2 * flank + colGap, container / g.maxLanes);
  const nodeW = Math.min(maxNodeW, slotW - 2 * flank - colGap);
  const stageW = Math.max(container, g.maxLanes * slotW);

  el.innerHTML = `<div class="cg"><svg class="cg-edges"></svg></div>`;
  const stage = el.querySelector('.cg');
  const svg = el.querySelector('.cg-edges');

  // Pass 1: place nodes horizontally (centred in their slot) and measure.
  const placed = [];
  g.rows.forEach((row, depth) => {
    const rowW = row.length * slotW;
    const startX = Math.max(padX, (stageW - rowW) / 2 + padX);
    row.forEach(n => {
      const d = document.createElement('div');
      const role = nodeRole(chain, n);
      d.className = `cg-node cg-${role}`;
      d.dataset.node = n.label;
      d.title = NODE_ROLE_LABEL[role] ?? '';
      d.style.width = `${nodeW}px`;
      const slotLeft = startX + n.lane * slotW;
      d.style.left = `${Math.round(slotLeft + (slotW - nodeW) / 2)}px`;
      const date = chain.nodeDates?.[n.label];
      d.innerHTML = date
        ? `<span class="cg-node-date">${date}:</span> ${n.label}`
        : n.label;
      stage.appendChild(d);
      placed.push({ n, el: d, depth, x: slotLeft + slotW / 2 });
    });
  });

  // The vertical gap below each row must clear the tallest stack of
  // participation cards on any link that crosses it. Measure a probe card at
  // the real width, then size each transition's gap to the busiest link.
  const probe = document.createElement('button');
  probe.className = 'cg-card cg-actual';
  probe.style.visibility = 'hidden';
  probe.textContent = 'Measure card height for gap sizing only';
  stage.appendChild(probe);
  const cardH = probe.offsetHeight || 34;
  probe.remove();

  const depthOf = label => g.nodes.get(label)?.depth ?? 0;
  const transitionCards = [];
  for (const e of g.edges) {
    const d = depthOf(e.from);
    const n = Math.max(e.link.participation.length, (e.link.proposals ?? []).length);
    transitionCards[d] = Math.max(transitionCards[d] || 0, n);
  }

  // Pass 2: stack rows by measured height plus the gap this transition needs.
  const rowTop = [];
  let y = padTop;
  g.rows.forEach((row, depth) => {
    rowTop[depth] = y;
    const h = Math.max(...placed.filter(p => p.depth === depth).map(p => p.el.offsetHeight));
    const cards = transitionCards[depth] || 0;
    // The +56 keeps a clear band between a node and the flank cards below it,
    // so purple/orange cards do not feel muddled with the node above.
    const gap = Math.max(LAYOUT.rowGap, cards * (cardH + cardGap) + cardGap + 56);
    y += h + gap;
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
  const totalH = Math.max(y - LAYOUT.rowGap + padBottom, 120);
  stage.style.height = `${Math.round(totalH)}px`;
  stage.style.width = `${Math.round(stageW + padX * 2)}px`;
  svg.setAttribute('viewBox', `0 0 ${Math.round(stageW + padX * 2)} ${Math.round(totalH)}`);
  svg.setAttribute('width', Math.round(stageW + padX * 2));
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
    paths += `<path class="cg-hit" d="${d}" data-link="${e.link.id}"></path>`;
    paths += `<path class="cg-edge${on ? ' on' : ''}" data-link="${e.link.id}" d="${d}"
      marker-end="url(#arw-main)"></path>`;

    // Chip at the bezier midpoint.
    const mx = (a.cx + 3 * a.cx + 3 * b.cx + b.cx) / 8;
    const my = (a.bottom + 3 * c1y + 3 * c2y + b.top) / 8;
    chips.push({ link: e.link, x: mx, y: my, on });
  }

  // A single arrowhead whose fill follows its edge's stroke (context-stroke),
  // so it fades and darkens with the line.
  svg.innerHTML = `<defs>
    <marker id="arw-main" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5"
       markerHeight="6.5" orient="auto-start-reverse">
       <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs>${paths}`;

  // Each link sits on the central spine as a small name chip. Its ACTUAL
  // participation flanks it to the left (purple); its PROPOSED participation
  // flanks it to the right (purple, dashed). Every card is clickable.
  const escAttr = s => String(s).replace(/"/g, '&quot;');
  for (const c of chips) {
    const actualCards = c.link.participation.map((p, i) =>
      `<button class="cg-card cg-actual" data-link="${c.link.id}" data-part="${i}"
        title="${escAttr(p.name)}">${p.name}</button>`).join('');
    const propCards = (c.link.proposals ?? []).map((p, i) =>
      `<button class="cg-card cg-prop${p.unstudied ? ' cg-prop-un' : ''}" data-link="${c.link.id}" data-prop="${i}"
        title="${escAttr(p.name)}${p.unstudied ? ' (unstudied link)' : ''}">${p.name}</button>`).join('');

    const group = document.createElement('div');
    group.className = `cg-linkgroup${c.on ? ' on' : ''}`;
    group.dataset.link = c.link.id;
    group.style.left = `${Math.round(c.x)}px`;
    group.style.top = `${Math.round(c.y)}px`;
    group.innerHTML =
      (actualCards ? `<div class="cg-side cg-side-actual">${actualCards}</div>` : '') +
      `<button class="cg-chip${c.on ? ' on' : ''}" data-link="${c.link.id}"
        title="${escAttr(c.link.claim.replace(/<[^>]+>/g, ''))}">${c.link.name ?? c.link.id}</button>` +
      (propCards ? `<div class="cg-side cg-side-prop">${propCards}</div>` : '');
    stage.appendChild(group);
    if (c.on) selected = group;
  }

  return g;
}

/**
 * Update which link reads as selected without rebuilding the map, so clicking
 * a box never disturbs the scroll or zoom. Toggles the `.on` state on the
 * link's group, its name chip, and its edge.
 */
export function highlightSelection(mapEl, linkId) {
  mapEl.querySelectorAll('.cg-linkgroup.on, .cg-chip.on, .cg-edge.on')
    .forEach(e => e.classList.remove('on'));
  if (!linkId) return;
  for (const g of mapEl.querySelectorAll(`.cg-linkgroup[data-link="${linkId}"]`)) {
    g.classList.add('on');
    g.querySelector('.cg-chip')?.classList.add('on');
  }
  mapEl.querySelectorAll(`.cg-edge[data-link="${linkId}"]`).forEach(e => e.classList.add('on'));
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
  return `<li class="pa"${clickable ? ` data-part="${idx}" tabindex="0"` : ''}>
    <div class="pa-hd">
      <span class="pa-date">${p.date}</span>
      <span class="pa-name">${p.name}</span>
      <span class="pa-kind">${KIND_LABEL[p.kind]}</span>
    </div>
    <div class="pa-actors"><span class="act-label">Actors:</span> ${p.actors}</div>
    <div class="pa-desc">${p.description}</div>
    <div class="ev-srcs">${srcHtml(p.srcs)}</div>
  </li>`;
}

function participationHtml(list) {
  if (!list?.length) {
    return `<div class="ln-sec ln-sec-part"><h4>Actual Participation at This Link</h4>
      <div class="ln-none">No participation instance identified at this link.</div></div>`;
  }
  return `<div class="ln-sec ln-sec-part"><h4>Actual Participation at This Link</h4>
    <ul class="pa-list">${list.map((p, i) => partCard(p, i)).join('')}</ul></div>`;
}

/**
 * Proposed participation: processes from the project's design work (the 6/8
 * working session) that did not run at this link but could have. Rendered in
 * orange to keep speculation visually separate from the documented record;
 * a proposal whose mechanism is not in the studied literature says so.
 */
function propCard(p, idx, { clickable = true } = {}) {
  return `<li class="pp${p.unstudied ? ' pp-unstudied' : ''}"${clickable ? ` data-prop="${idx}" tabindex="0"` : ''}>
    <div class="pa-hd">
      <span class="pa-name">${p.name}</span>
      <span class="pp-method">${p.method}</span>
      ${p.unstudied ? '<span class="pp-flag">Unstudied Link</span>' : ''}
    </div>
    <div class="pa-desc">${p.description}</div>
    <div class="pp-mech"><span class="act-label">Presumed mechanism:</span> ${p.mechanism}
      ${p.unstudied
        ? '<em class="pp-mech-note">This causal link was not found in the studied literature; the proposal asserts it.</em>'
        : ''}</div>
    ${p.srcs?.length ? `<div class="ev-srcs">${srcHtml(p.srcs)}</div>` : ''}
  </li>`;
}

function proposalsHtml(list) {
  if (!list?.length) return '';
  return `<div class="ln-sec ln-sec-prop"><h4>Proposed Participation at This Link</h4>
    <ul class="pa-list">${list.map((p, i) => propCard(p, i)).join('')}</ul></div>`;
}

function gapsHtml(list) {
  if (!list?.length) return '';
  return `<div class="ln-sec ln-sec-gap"><h4>Open Questions and Research To-Dos</h4>
    <ul class="gap-list">${list.map(g => `<li>${g}</li>`).join('')}</ul></div>`;
}

function summaryStrip(chain) {
  let gaps = 0;
  let actual = 0;
  let proposals = 0;
  for (const l of chain.links) {
    gaps += l.gaps.length;
    actual += l.participation.length;
    proposals += (l.proposals ?? []).length;
  }

  const row = (label, content) =>
    `<span class="cd-sum-lbl">${label}</span><div class="cd-sum-pills">${content}</div>`;

  return `<div class="cd-sum">
    ${row('Links', `<span class="g g-neutral">${chain.links.length} Causal Links</span>`)}
    ${actual ? row('Actual', `<span class="g g-actual">${actual} Documented</span>`) : ''}
    ${proposals ? row('Proposed', `<span class="g g-prop">${proposals} Proposed</span>`) : ''}
    ${gaps ? row('Open', `<button class="g g-neutral cd-sum-btn" data-gaps="${chain.id}">${gaps} Open Question${gaps === 1 ? '' : 's'} &rarr;</button>`) : ''}
  </div>`;
}

/** The chain-overview block used by both the single and paired intros. */
function chainIntro(chain) {
  return `<div class="cd-purpose"><strong>${chain.label}:</strong> ${chain.purpose ?? ''}</div>
    <div class="cd-outcome">${chain.outcome}</div>
    <div class="cd-thesis">${chain.thesis}</div>
    ${summaryStrip(chain)}`;
}

/**
 * Render the right-hand pane for the current selection. `screenChains` holds
 * every sub-chain sharing the current screen; with no selection and more than
 * one sub-chain, the overview introduces each sub-chain in turn.
 */
export function renderDetail(el, chain, selection = {}, screenChains = null) {
  const link = selection.linkId
    ? chain.links.find(l => l.id === selection.linkId)
    : null;

  if (!link) {
    const hint = `<div class="cd-hint">The causal arrows run down the center. Actual
        participation sits to the left of each arrow (purple); proposed participation, from the
        design work, sits to the right (purple, dashed). Click any name to open its record.
        Arrow keys walk the chain.</div>`;
    const chains = screenChains?.length > 1 ? screenChains : [chain];
    const body = chains.length > 1
      ? chains.map(c => `<div class="cd-subchain">${chainIntro(c)}</div>`).join('')
      : chainIntro(chain);
    el.innerHTML = `<div class="cd cd-intro">${hint}${body}</div>`;
    el.scrollTop = 0;
    return;
  }

  const p = selection.partIdx != null ? link.participation[selection.partIdx] : null;

  if (p) {
    el.innerHTML = `<div class="cd">
      <button class="cd-back" data-back="link">&larr; Back to link ${link.id}</button>
      <div class="cd-kick">Actual Participation</div>
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

  const pr = selection.propIdx != null ? (link.proposals ?? [])[selection.propIdx] : null;

  if (pr) {
    el.innerHTML = `<div class="cd">
      <button class="cd-back" data-back="link">&larr; Back to link ${link.id}</button>
      <div class="cd-kick">Proposed Participation</div>
      <ul class="pa-list">${propCard(pr, selection.propIdx, { clickable: false })}</ul>
      <div class="cd-ctx">
        <h4>Would sit at link ${link.id}</h4>
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
      <span class="cd-id">${link.name ?? link.id}</span>
      ${link.after ? `<span class="cd-branch">branches from ${link.after}</span>` : ''}
    </div>
    <p class="cd-flow"><span>${link.from}</span> &rarr; <span>${link.to}</span></p>
    <p class="cd-claim">${link.claim}</p>
    ${evidenceHtml(link.evidence, 'for')}
    ${evidenceHtml(link.counterEvidence, 'counter')}
    ${participationHtml(link.participation)}
    ${proposalsHtml(link.proposals)}
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

/**
 * Next/previous link id when walking with the keyboard. `links` is the
 * concatenated link list of every sub-chain on the current screen, so the
 * arrow keys walk across paired sub-chains.
 */
export function stepLink(links, currentId, dir) {
  const i = links.findIndex(l => l.id === currentId);
  if (i === -1) return links[dir > 0 ? 0 : links.length - 1].id;
  const n = Math.min(Math.max(i + dir, 0), links.length - 1);
  return links[n].id;
}
