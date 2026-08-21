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

/** One causal link: the assertion that `from` produced `to`. */
export function link({
  id, from, to, claim, strength, stage = null, after = null,
  evidence: evid = [], counterEvidence = [], participation: part = [], gaps = []
}) {
  if (!id?.trim()) throw new Error('Link is missing an id');
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
    id, from, to, claim, strength, stage, after,
    evidence: evid, counterEvidence, participation: part, gaps
  };
}

/** An ordered chain of links from a root cause to an outcome. */
export function chain({ id, label, track, purpose = null, outcome, thesis, links = [] }) {
  if (!id?.trim()) throw new Error('Chain is missing an id');
  if (purpose != null && !String(purpose).trim()) {
    throw new Error(`Chain "${id}" has an empty purpose`);
  }
  if (!label?.trim()) throw new Error(`Chain "${id}" is missing a label`);
  if (!['total', 'fair', 'legitimacy', 'detection', 'response'].includes(track)) {
    throw new Error(
      `Invalid track "${track}" on chain "${id}". ` +
      `Use total, fair, legitimacy, detection, or response.`
    );
  }
  if (!outcome?.trim()) throw new Error(`Chain "${id}" is missing an outcome`);
  if (!thesis?.trim()) throw new Error(`Chain "${id}" is missing a thesis`);
  if (links.length === 0) throw new Error(`Chain "${id}" has no links`);
  return { id, label, track, purpose, outcome, thesis, links };
}

/** Collapse whitespace in one or more text fragments into a single paragraph. Supports inline <strong> for emphasis. */
export function paragraph(...parts) {
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** One timeline source link. */
export function source(label, url) {
  return { label, url };
}

export { VALID_CATEGORIES, VALID_STRENGTHS, VALID_PARTICIPATION_KINDS, VALID_EFFECTS, VALID_STAGES };
