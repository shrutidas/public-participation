const VALID_CATEGORIES = ['red', 'orange', 'green', 'blue', 'purple'];

/**
 * One timeline entry.
 * category: red | orange | green | blue | purple
 */
export function entry({ date, category, actors, text, sources = [] }) {
  if (!VALID_CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category "${category}" for entry dated "${date}". ` +
      `Use one of: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  if (!date?.trim()) throw new Error('Entry is missing date');
  if (!actors?.trim()) throw new Error(`Entry dated "${date}" is missing actors`);
  if (!text?.trim()) throw new Error(`Entry dated "${date}" is missing text`);

  for (const s of sources) {
    if (!s.label?.trim()) throw new Error(`Entry dated "${date}" has a source missing a label`);
    if (!s.url?.trim()) throw new Error(`Entry dated "${date}" has a source missing a URL`);
    if (!/^https?:\/\//.test(s.url)) {
      throw new Error(`Entry dated "${date}" has an invalid source URL: ${s.url}`);
    }
  }

  return {
    date,
    cat: category,
    actors,
    text,
    srcs: sources.map(s => ({ l: s.label, u: s.url }))
  };
}

/** Case study metadata, timeline entries, and (optionally) causal chains. */
export function caseStudy({ num, slug, title, overview, entries, chains = [] }) {
  if (!num?.trim()) throw new Error('Case study is missing num');
  if (!slug?.trim()) throw new Error(`Case study "${num}" is missing slug`);
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`Case study "${num}" has a non-url-safe slug: ${slug}`);
  }
  if (!title?.trim()) throw new Error(`Case study "${num}" is missing title`);
  if (!overview?.trim()) throw new Error(`Case study "${num}" is missing overview`);
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error(`Case study "${num}" must have at least one entry`);
  }
  if (!Array.isArray(chains)) {
    throw new Error(`Case study "${num}" has a non-array chains field`);
  }

  return { num, slug, title, overview, entries, chains };
}

/* ------------------------------------------------------------------ *
 * Causal chain layer
 *
 * A chain is an ordered set of links running from a root cause to a
 * quantified outcome. Every link carries (a) the evidence that the link
 * holds, graded for strength, and (b) the instances of public
 * participation that sat at that link, graded for whether they moved it.
 * A link with no evidence is not a failure of the model; it is the
 * research to-do the model exists to surface.
 * ------------------------------------------------------------------ */

/** How well supported the causal link itself is. */
const VALID_STRENGTHS = [
  'strong',      // causal identification, or an authoritative repeated measure
  'moderate',    // correlational, single survey, or program evaluation with a comparison
  'weak',        // anecdote, self-report without counterfactual, or advocacy source
  'contested',   // credible evidence points both ways
  'unstudied'    // searched for, and the evidence does not appear to exist
];

/** What kind of participation an instance is. */
const VALID_PARTICIPATION_KINDS = [
  'deliberative',      // sortition panels, citizens' assemblies, advisory councils
  'consultative',      // surveys, town halls, public comment, hearings
  'litigation',        // citizen suits, intervention, petitions for review
  'bargaining',        // collective bargaining, strike threats, organized labor action
  'electoral',         // recalls, board elections, referenda
  'monitoring',        // citizen science, community sampling, independent measurement
  'journalism',        // press and independent data projects standing in for disclosure
  'service',           // mutual aid, trusted-messenger outreach, community-run delivery
  'whistleblowing',    // insiders disclosing or resigning over concealed information
  'protest'            // demonstrations, boycotts, refusal
];

/** Whether the participation instance demonstrably moved the link it sits on. */
const VALID_EFFECTS = [
  'moved',       // documented change in the decision, rule, or outcome
  'partial',     // documented change, but limited or contested in scope
  'none',        // ran, and no documented change
  'unmeasured'   // ran at scale, but no counterfactual was ever established
];

function checkSources(sources, where) {
  for (const s of sources) {
    if (!s.label?.trim()) throw new Error(`${where} has a source missing a label`);
    if (!s.url?.trim()) throw new Error(`${where} has a source missing a URL`);
    if (!/^https?:\/\//.test(s.url)) {
      throw new Error(`${where} has an invalid source URL: ${s.url}`);
    }
  }
}

/**
 * One piece of evidence bearing on a causal link.
 * `quote` is a VERBATIM passage from the cited source, included only when the
 * source was re-fetched and the wording checked. It is the reader's proof
 * that the finding is the source's statement, not this project's gloss.
 */
export function evidence({ finding, grade, sources = [], caveat = null, quote = null }) {
  if (!finding?.trim()) throw new Error('Evidence is missing a finding');
  if (!VALID_STRENGTHS.includes(grade)) {
    throw new Error(
      `Invalid evidence grade "${grade}" on finding "${finding.slice(0, 60)}". ` +
      `Use one of: ${VALID_STRENGTHS.join(', ')}`
    );
  }
  if (quote != null && !String(quote).trim()) {
    throw new Error(`Evidence "${finding.slice(0, 60)}" has an empty quote`);
  }
  checkSources(sources, `Evidence "${finding.slice(0, 60)}"`);
  return { finding, grade, caveat, quote, srcs: sources.map(s => ({ l: s.label, u: s.url })) };
}

/** One instance of public participation sitting at a causal link. */
export function participation({
  date, name, kind, actors, description, effect, sources = []
}) {
  if (!date?.trim()) throw new Error('Participation instance is missing a date');
  if (!name?.trim()) throw new Error(`Participation instance dated "${date}" is missing a name`);
  if (!VALID_PARTICIPATION_KINDS.includes(kind)) {
    throw new Error(
      `Invalid participation kind "${kind}" on "${name}". ` +
      `Use one of: ${VALID_PARTICIPATION_KINDS.join(', ')}`
    );
  }
  if (!actors?.trim()) throw new Error(`Participation instance "${name}" is missing actors`);
  if (!description?.trim()) throw new Error(`Participation instance "${name}" is missing a description`);
  if (!VALID_EFFECTS.includes(effect)) {
    throw new Error(
      `Invalid effect "${effect}" on "${name}". Use one of: ${VALID_EFFECTS.join(', ')}`
    );
  }
  checkSources(sources, `Participation instance "${name}"`);
  return {
    date, name, kind, actors, description, effect,
    srcs: sources.map(s => ({ l: s.label, u: s.url }))
  };
}

/**
 * What role a node plays in the chain, per the agreed color schema:
 * gray for events that cannot be intervened on, green for events that can,
 * red for the outcomes the project cares about.
 */
const VALID_NODE_ROLES = [
  'immovable',      // an event no instrument could have moved (the pandemic itself)
  'intervenable',   // an event participation could plausibly act on
  'outcome'         // a harm or harm-reduction outcome worth caring about
];

/**
 * One proposed (counterfactual) participation instance sitting at a causal
 * link: a process from the project's design work that did not run, but could
 * have. Distinct from participation(), which records what actually happened.
 * `mechanism` states the causal claim the proposal operates on;
 * `unstudied: true` marks a proposal whose mechanism references a causal link
 * not found in the studied literature, which the map renders explicitly.
 */
export function proposal({ name, method, description, mechanism, unstudied = false, sources = [] }) {
  if (!name?.trim()) throw new Error('Proposal is missing a name');
  if (!method?.trim()) throw new Error(`Proposal "${name}" is missing a method`);
  if (!description?.trim()) throw new Error(`Proposal "${name}" is missing a description`);
  if (!mechanism?.trim()) throw new Error(`Proposal "${name}" is missing a mechanism`);
  checkSources(sources, `Proposal "${name}"`);
  return {
    name, method, description, mechanism,
    unstudied: Boolean(unstudied),
    srcs: sources.map(s => ({ l: s.label, u: s.url }))
  };
}

/**
 * Which stage of the causal chain a link's endpoint belongs to, per the
 * project's working framework: structural conditions shape the chain;
 * participation intervenes in it; trust and compliance transmit it; harm and
 * harm reduction terminate it.
 */
const VALID_STAGES = [
  'structural',      // background institutions, rules, or conditions
  'participation',   // actors directly intervene, contest, monitor, sue, comment, organize
  'trust',           // confidence, perceived legitimacy, credibility, grievance, distrust
  'compliance',      // following, resisting, or altering implementation of a policy
  'harm',            // the bad outcome itself
  'harm-reduction'   // the reduction or avoidance of harm, distinct from harm
];

/**
 * One causal link: the assertion that `from` produced `to`.
 * `name` is the short event name the map shows on the link itself; the full
 * claim and evidence open in the sidebar on click.
 */
export function link({
  id, name = null, from, to, claim, strength, stage = null, after = null,
  evidence: evid = [], counterEvidence = [], participation: part = [],
  proposals = [], gaps = []
}) {
  if (!id?.trim()) throw new Error('Link is missing an id');
  if (name != null && !String(name).trim()) throw new Error(`Link "${id}" has an empty name`);
  if (!from?.trim()) throw new Error(`Link "${id}" is missing a from node`);
  if (!to?.trim()) throw new Error(`Link "${id}" is missing a to node`);
  if (!claim?.trim()) throw new Error(`Link "${id}" is missing a claim`);
  if (!VALID_STRENGTHS.includes(strength)) {
    throw new Error(
      `Invalid strength "${strength}" on link "${id}". Use one of: ${VALID_STRENGTHS.join(', ')}`
    );
  }
  if (strength !== 'unstudied' && evid.length === 0) {
    throw new Error(`Link "${id}" is graded "${strength}" but carries no evidence`);
  }
  if (stage != null && !VALID_STAGES.includes(stage)) {
    throw new Error(
      `Invalid stage "${stage}" on link "${id}". Use one of: ${VALID_STAGES.join(', ')}`
    );
  }
  return {
    id, name, from, to, claim, strength, stage, after,
    evidence: evid, counterEvidence, participation: part, proposals, gaps
  };
}

/**
 * An ordered chain of links from a root cause to an outcome.
 * `nodes` assigns every node label a role (immovable | intervenable | outcome),
 * which drives the map's node colors. `screen` groups chains that render
 * side by side on one screen as separate sub-chains (total and fair harm
 * reduction share a screen without being merged).
 */
export function chain({
  id, label, track, purpose = null, outcome, thesis,
  nodes = {}, nodeDates = {}, screen = null, links = []
}) {
  if (!id?.trim()) throw new Error('Chain is missing an id');
  if (purpose != null && !String(purpose).trim()) {
    throw new Error(`Chain "${id}" has an empty purpose`);
  }
  if (!label?.trim()) throw new Error(`Chain "${id}" is missing a label`);
  if (!['total', 'fair', 'legitimacy', 'detection', 'response', 'harm-reduction'].includes(track)) {
    throw new Error(
      `Invalid track "${track}" on chain "${id}". ` +
      `Use total, fair, legitimacy, detection, response, or harm-reduction.`
    );
  }
  if (!outcome?.trim()) throw new Error(`Chain "${id}" is missing an outcome`);
  if (!thesis?.trim()) throw new Error(`Chain "${id}" is missing a thesis`);
  if (links.length === 0) throw new Error(`Chain "${id}" has no links`);
  if (screen != null && !String(screen).trim()) {
    throw new Error(`Chain "${id}" has an empty screen`);
  }
  for (const [label_, role] of Object.entries(nodes)) {
    if (!VALID_NODE_ROLES.includes(role)) {
      throw new Error(
        `Invalid node role "${role}" for node "${label_}" in chain "${id}". ` +
        `Use one of: ${VALID_NODE_ROLES.join(', ')}`
      );
    }
  }
  for (const l of links) {
    for (const n of [l.from, l.to]) {
      if (!(n in nodes)) {
        throw new Error(`Chain "${id}": node "${n}" (link ${l.id}) has no role in nodes`);
      }
    }
  }
  for (const [label_, date] of Object.entries(nodeDates)) {
    if (!(label_ in nodes)) {
      throw new Error(`Chain "${id}": nodeDates names "${label_}", which is not a node`);
    }
    if (!String(date).trim()) {
      throw new Error(`Chain "${id}": node "${label_}" has an empty date`);
    }
  }
  return { id, label, track, purpose, outcome, thesis, nodes, nodeDates, screen, links };
}

/* ------------------------------------------------------------------ *
 * Spine layer (second memo rework)
 *
 * The timeline is the central spine. Three kinds of object hang off it:
 * mechanisms that already existed and should have worked (left), measured
 * impacts with causal arrows from specific events (right), and proposed
 * interventions anchored at the point where they would intervene, each
 * expanding into its own causal chain with evidence at every link.
 * Anchors are unique substrings of a timeline entry's text; the linter
 * verifies each anchor matches exactly one entry.
 * ------------------------------------------------------------------ */

/** Why an existing mechanism failed to prevent the harm. */
const VALID_FAILURES = [
  'did-not-know',    // the mechanism's operators lacked the information
  'knew-no-act',     // the information was there and nothing fired
  'acted-no-effect', // it fired and did not change the decision or outcome
  'no-mechanism',    // nothing existed to fire
  'partial',         // it fired and changed part of the decision or outcome
  'worked'           // it fired and bound; kept for the asymmetry argument
];

export const FAILURE_LABEL = {
  'did-not-know': 'Did Not Know',
  'knew-no-act': 'Knew, Did Not Act',
  'acted-no-effect': 'Acted, No Effect',
  'no-mechanism': 'No Mechanism Existed',
  'partial': 'Acted, Partial Effect',
  'worked': 'Worked'
};

/** An oversight or participation mechanism that already existed in the ecosystem. */
export function mechanism({ name, actor, failure, note, detail, anchors = [], sources = [] }) {
  if (!name?.trim()) throw new Error('Mechanism is missing a name');
  if (!actor?.trim()) throw new Error(`Mechanism "${name}" is missing an actor`);
  if (!VALID_FAILURES.includes(failure)) {
    throw new Error(
      `Invalid failure "${failure}" on mechanism "${name}". Use one of: ${VALID_FAILURES.join(', ')}`
    );
  }
  if (!note?.trim()) throw new Error(`Mechanism "${name}" is missing a note`);
  if (!detail?.trim()) throw new Error(`Mechanism "${name}" is missing a detail paragraph`);
  if (!anchors.length) throw new Error(`Mechanism "${name}" has no timeline anchors`);
  checkSources(sources, `Mechanism "${name}"`);
  return { name, actor, failure, note, detail, anchors, srcs: sources.map(s => ({ l: s.label, u: s.url })) };
}

/** A measured impact attached to the spine, with causal arrows from specific events. */
export function impact({ name, headline, measures, from = [], evidence: evid = [], counterEvidence = [] }) {
  if (!name?.trim()) throw new Error('Impact is missing a name');
  if (!headline?.trim()) throw new Error(`Impact "${name}" is missing a headline`);
  if (!measures?.trim()) throw new Error(`Impact "${name}" is missing a measures paragraph`);
  if (!from.length) throw new Error(`Impact "${name}" has no causal arrows (from)`);
  for (const f of from) {
    if (!f.anchor?.trim()) throw new Error(`Impact "${name}" has an arrow without an anchor`);
    if (!VALID_STRENGTHS.includes(f.strength)) {
      throw new Error(`Impact "${name}" arrow has invalid strength "${f.strength}"`);
    }
  }
  return { name, headline, measures, from, evidence: evid, counterEvidence };
}

/** One link inside a proposed intervention's causal chain. */
export function propLink({ name, claim, strength, evidence: evid = [], counterEvidence = [] }) {
  if (!name?.trim()) throw new Error('Proposal link is missing a name');
  if (!claim?.trim()) throw new Error(`Proposal link "${name}" is missing a claim`);
  if (!VALID_STRENGTHS.includes(strength)) {
    throw new Error(
      `Invalid strength "${strength}" on proposal link "${name}". Use one of: ${VALID_STRENGTHS.join(', ')}`
    );
  }
  if (strength !== 'unstudied' && evid.length === 0) {
    throw new Error(`Proposal link "${name}" is graded "${strength}" but carries no evidence`);
  }
  return { name, claim, strength, evidence: evid, counterEvidence };
}

/** A comparable real-world intervention with its measured outcome. */
export function comparable({ name, where, when, authority, outcome, strength, sources = [] }) {
  if (!name?.trim()) throw new Error('Comparable is missing a name');
  if (!where?.trim()) throw new Error(`Comparable "${name}" is missing a where`);
  if (!when?.trim()) throw new Error(`Comparable "${name}" is missing a when`);
  if (!authority?.trim()) throw new Error(`Comparable "${name}" is missing an authority note`);
  if (!outcome?.trim()) throw new Error(`Comparable "${name}" is missing an outcome`);
  if (!VALID_STRENGTHS.includes(strength)) {
    throw new Error(`Invalid strength "${strength}" on comparable "${name}"`);
  }
  checkSources(sources, `Comparable "${name}"`);
  return { name, where, when, authority, outcome, strength, srcs: sources.map(s => ({ l: s.label, u: s.url })) };
}

/**
 * A proposed intervention anchored to the spine, carrying its full causal
 * chain from intervention to outcome. `banner: true` marks a chain no study
 * tests end to end; per-link grades still render underneath.
 */
export function spineProposal({
  name, method, anchor, when, where, description,
  banner = true, impactsMeasured = [], impactsConjectured = [],
  links = [], comparables = [], sources = []
}) {
  if (!name?.trim()) throw new Error('Spine proposal is missing a name');
  if (!method?.trim()) throw new Error(`Spine proposal "${name}" is missing a method`);
  if (!anchor?.trim()) throw new Error(`Spine proposal "${name}" is missing a timeline anchor`);
  if (!when?.trim()) throw new Error(`Spine proposal "${name}" is missing a when paragraph`);
  if (!where?.trim()) throw new Error(`Spine proposal "${name}" is missing a where`);
  if (!description?.trim()) throw new Error(`Spine proposal "${name}" is missing a description`);
  if (!links.length) throw new Error(`Spine proposal "${name}" has no chain links`);
  checkSources(sources, `Spine proposal "${name}"`);
  return {
    name, method, anchor, when, where, description,
    banner: Boolean(banner), impactsMeasured, impactsConjectured,
    links, comparables, srcs: sources.map(s => ({ l: s.label, u: s.url }))
  };
}

/** Per-case spine data: mechanisms, impacts, and anchored proposals. */
export function spineData({ slug, mechanisms = [], impacts = [], proposals = [] }) {
  if (!slug?.trim()) throw new Error('Spine data is missing a slug');
  const impactNames = new Set(impacts.map(i => i.name));
  for (const p of proposals) {
    for (const n of p.impactsMeasured) {
      if (!impactNames.has(n)) {
        throw new Error(`Spine proposal "${p.name}" names measured impact "${n}", which is not an impact of case "${slug}"`);
      }
    }
  }
  return { slug, mechanisms, impacts, proposals };
}

export { VALID_FAILURES };

/** Collapse whitespace in one or more text fragments into a single paragraph. Supports inline <strong> for emphasis. */
export function paragraph(...parts) {
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** One timeline source link. */
export function source(label, url) {
  return { label, url };
}

export {
  VALID_CATEGORIES, VALID_STRENGTHS, VALID_PARTICIPATION_KINDS,
  VALID_EFFECTS, VALID_STAGES, VALID_NODE_ROLES
};
