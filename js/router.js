/**
 * Hash routing, so every case, chain, link and participation instance has its
 * own URL. The project gets circulated by email; "look at link R3" needs to be
 * a link, not an instruction.
 *
 * Routes
 *   #/                                              default case, default view
 *   #/case/<slug>                                   case, default view
 *   #/case/<slug>/timeline                          entry timeline
 *   #/case/<slug>/step                              entry timeline, one at a time
 *   #/case/<slug>/chain                             first chain, nothing selected
 *   #/case/<slug>/chain/<chainId>                   a specific chain
 *   #/case/<slug>/chain/<chainId>/<linkId>          a link, detail open
 *   #/case/<slug>/chain/<chainId>/<linkId>/p/<n>    a participation instance
 */

const VIEWS = ['chain', 'timeline'];

export function parse(hash = window.location.hash) {
  const raw = hash.replace(/^#\/?/, '');
  const seg = raw.split('/').filter(Boolean);

  const route = { caseSlug: null, view: null, chainId: null, linkId: null, partIdx: null };
  if (seg[0] !== 'case' || !seg[1]) return route;

  route.caseSlug = decodeURIComponent(seg[1]);
  if (!seg[2]) return route;

  route.view = VIEWS.includes(seg[2]) ? seg[2] : null;
  if (route.view !== 'chain') return route;

  if (seg[3]) route.chainId = decodeURIComponent(seg[3]);
  if (seg[4]) route.linkId = decodeURIComponent(seg[4]);
  if (seg[5] === 'p' && seg[6] != null) {
    const n = Number(seg[6]);
    if (Number.isInteger(n) && n >= 0) route.partIdx = n;
  }
  return route;
}

export function build({ caseSlug, view, chainId, linkId, partIdx } = {}) {
  if (!caseSlug) return '#/';
  const seg = ['case', encodeURIComponent(caseSlug)];
  if (view) seg.push(view);
  if (view === 'chain' && chainId) {
    seg.push(encodeURIComponent(chainId));
    if (linkId) {
      seg.push(encodeURIComponent(linkId));
      if (partIdx != null) seg.push('p', String(partIdx));
    }
  }
  return '#/' + seg.join('/');
}

/** Write a route to the address bar. `replace` avoids stacking history entries. */
export function go(route, { replace = false } = {}) {
  const next = build(route);
  if (next === window.location.hash) return;
  try {
    if (replace) {
      history.replaceState(null, '', next);
    } else {
      history.pushState(null, '', next);
    }
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } catch {
    // Sandboxed iframes and file:// disallow history writes; the hash still works.
    window.location.hash = next;
  }
}

export function onChange(fn) {
  window.addEventListener('hashchange', fn);
  window.addEventListener('popstate', fn);
}
