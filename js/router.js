/**
 * Hash routing, so every case, event, mechanism, outcome, proposal, claim,
 * piece of evidence, and case study has its own URL. The project gets
 * circulated by email; "look at the notice-on-detection proposal" needs to
 * be a link, not an instruction.
 *
 * Routes
 *   #/                                    default case, default view
 *   #/case/<slug>                         case, default view
 *   #/case/<slug>/timeline                entry timeline
 *   #/case/<slug>/spine                   spine map, nothing selected
 *   #/case/<slug>/spine/e/<i>             a timeline event
 *   #/case/<slug>/spine/m/<i>             a mechanism that should have worked
 *   #/case/<slug>/spine/i/<i>             a measured outcome
 *   #/case/<slug>/spine/pr/<i>            a proposed intervention
 *   #/case/<slug>/spine/pr/<i>/out        its proposed outcome
 *   #/case/<slug>/spine/pr/<i>/cl/<k>     one claim under that outcome
 *   .../cl/<k>/ev/<n>                     one piece of evidence under that claim
 *   .../cl/<k>/cev/<n>                    one piece of counter-evidence
 *   .../cl/<k>/cs/<n>                     one case study under that claim
 * Legacy '#/case/<slug>/chain/...' URLs and the old '/im/', '/l/', '/ev/',
 * '/c' segments under a proposal fall back to the nearest thing that still
 * exists.
 */

const VIEWS = ['spine', 'timeline'];

export function parse(hash = window.location.hash) {
  const raw = hash.replace(/^#\/?/, '');
  const seg = raw.split('/').filter(Boolean);

  const route = {
    caseSlug: null, view: null, selKind: null, selIdx: null,
    claimIdx: null, evIdx: null, evKind: null, caseIdx: null
  };
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
  if (!(seg[3] && kinds[seg[3]] && seg[4] != null)) return route;
  const n = num(seg[4]);
  if (n == null) return route;
  route.selKind = kinds[seg[3]];
  route.selIdx = n;
  if (route.selKind !== 'prop' || seg[5] == null) return route;

  // Below the proposal: its outcome box, or a claim, then one evidence
  // record or one case study.
  if (seg[5] === 'out') { route.selKind = 'propout'; return route; }
  if (!(seg[5] === 'cl' && num(seg[6]) != null)) { route.legacy = true; return route; }
  route.claimIdx = num(seg[6]);
  route.selKind = 'propclaim';
  const evKinds = { ev: 'for', cev: 'counter' };
  if (evKinds[seg[7]] && num(seg[8]) != null) {
    route.evIdx = num(seg[8]);
    route.evKind = evKinds[seg[7]];
    route.selKind = 'propev';
  } else if (seg[7] === 'cs' && num(seg[8]) != null) {
    route.caseIdx = num(seg[8]);
    route.selKind = 'propcase';
  }
  return route;
}

export function build({ caseSlug, view, selKind, selIdx, claimIdx, evIdx, evKind, caseIdx } = {}) {
  if (!caseSlug) return '#/';
  const seg = ['case', encodeURIComponent(caseSlug)];
  if (view) seg.push(view);
  if (view === 'spine' && selKind != null && selIdx != null) {
    const pre = {
      entry: 'e', mech: 'm', impact: 'i', prop: 'pr',
      propout: 'pr', propclaim: 'pr', propev: 'pr', propcase: 'pr'
    }[selKind];
    if (pre) {
      seg.push(pre, String(selIdx));
      if (selKind === 'propout') seg.push('out');
      const below = ['propclaim', 'propev', 'propcase'].includes(selKind);
      if (below && claimIdx != null) {
        seg.push('cl', String(claimIdx));
        if (selKind === 'propev' && evIdx != null) {
          seg.push(evKind === 'counter' ? 'cev' : 'ev', String(evIdx));
        } else if (selKind === 'propcase' && caseIdx != null) {
          seg.push('cs', String(caseIdx));
        }
      }
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
