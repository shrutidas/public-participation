/**
 * Hash routing, so every case, event, mechanism, impact, and proposal has its
 * own URL. The project gets circulated by email; "look at the notice-on-
 * detection proposal" needs to be a link, not an instruction.
 *
 * Routes
 *   #/                                    default case, default view
 *   #/case/<slug>                         case, default view
 *   #/case/<slug>/timeline                entry timeline
 *   #/case/<slug>/spine                   spine map, nothing selected
 *   #/case/<slug>/spine/e/<i>             a timeline event
 *   #/case/<slug>/spine/m/<i>             a mechanism that should have worked
 *   #/case/<slug>/spine/i/<i>             a measured impact
 *   #/case/<slug>/spine/pr/<i>            a proposed intervention, chain expanded
 *   #/case/<slug>/spine/pr/<i>/l/<j>      one link of a proposal's chain
 *   #/case/<slug>/spine/pr/<i>/c          a proposal's comparable cases only
 * Legacy '#/case/<slug>/chain/...' URLs fall back to the spine map.
 */

const VIEWS = ['spine', 'timeline'];

export function parse(hash = window.location.hash) {
  const raw = hash.replace(/^#\/?/, '');
  const seg = raw.split('/').filter(Boolean);

  const route = { caseSlug: null, view: null, selKind: null, selIdx: null, linkIdx: null };
  if (seg[0] !== 'case' || !seg[1]) return route;

  route.caseSlug = decodeURIComponent(seg[1]);
  if (!seg[2]) return route;

  if (seg[2] === 'chain') { route.view = 'spine'; route.legacy = true; return route; } // legacy
  route.view = VIEWS.includes(seg[2]) ? seg[2] : null;
  if (route.view !== 'spine') return route;

  const num = s => {
    const n = Number(s);
    return Number.isInteger(n) && n >= 0 ? n : null;
  };
  const kinds = { e: 'entry', m: 'mech', i: 'impact', pr: 'prop' };
  if (seg[3] && kinds[seg[3]] && seg[4] != null) {
    const n = num(seg[4]);
    if (n != null) {
      route.selKind = kinds[seg[3]];
      route.selIdx = n;
      if (route.selKind === 'prop' && seg[5] === 'l' && seg[6] != null) {
        const j = num(seg[6]);
        if (j != null) { route.selKind = 'proplink'; route.linkIdx = j; }
      } else if (route.selKind === 'prop' && seg[5] === 'c') {
        route.selKind = 'propcomp';
      }
    }
  }
  return route;
}

export function build({ caseSlug, view, selKind, selIdx, linkIdx } = {}) {
  if (!caseSlug) return '#/';
  const seg = ['case', encodeURIComponent(caseSlug)];
  if (view) seg.push(view);
  if (view === 'spine' && selKind != null && selIdx != null) {
    const pre = { entry: 'e', mech: 'm', impact: 'i', prop: 'pr', proplink: 'pr', propcomp: 'pr' }[selKind];
    if (pre) {
      seg.push(pre, String(selIdx));
      if (selKind === 'proplink' && linkIdx != null) seg.push('l', String(linkIdx));
      if (selKind === 'propcomp') seg.push('c');
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
