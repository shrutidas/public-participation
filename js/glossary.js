/**
 * Every label used anywhere in the project, defined in one place.
 *
 * The spine map has four visual languages that are easy to confuse:
 *
 *   BLUE BOXES: the timeline itself, every event in order.
 *   GREEN BOXES (left): oversight mechanisms that already existed, each
 *                tagged with how it failed to prevent the harm.
 *   DARK GREEN BOXES (right): measured impacts, with arrows from the
 *                specific events where the causal claim holds.
 *   ORANGE: proposed interventions from the design work, anchored where
 *                they would intervene; each expands into its causal chain,
 *                with a red evidence flag under every link.
 */

/** A short orientation, rendered at the top of the Key panel. */
export const HOW_TO = [
  {
    title: 'Select a case',
    desc: 'The Cases button (top left) lists the four case studies. Three carry full spine maps; the Meta case is documented as a timeline only.'
  },
  {
    title: 'Read the spine',
    desc: 'The timeline runs down the center in chronological order: policy decisions, events, knowledge, public opinion, and participation, each tagged with its category. Click any event to read its full record and sources.'
  },
  {
    title: 'The left rail: what already existed',
    desc: 'Green boxes are the oversight and participation mechanisms that already existed in the ecosystem. Each connects to the event where it should have fired and carries a tag for how it failed: did not know, knew but did not act, acted with no effect, no mechanism existed, or worked.'
  },
  {
    title: 'The right rail: what was measured',
    desc: 'Dark green boxes are the case’s measured impacts. An arrow connects an impact to a specific event only where a causal claim holds, and every arrow carries a strength flag you can click to see the evidence.'
  },
  {
    title: 'Orange: proposed public participation',
    desc: 'Orange chips are the proposals from the 6/8 design work, anchored at the point on the timeline where they would intervene. Each proposal’s causal chain is drawn below the event where it would intervene: intervention to mechanism to measured impact, with an evidence flag under every link and counter-evidence kept at full strength.'
  },
  {
    title: 'Cite a specific view',
    desc: 'Every case, event, mechanism, impact, proposal, and chain link has a stable URL. Copying the address functions as a pinpoint citation.'
  }
];

export const GLOSSARY = [
  {
    id: 'map',
    title: 'Reading the Spine Map',
    note: 'The timeline is the argument’s backbone; everything else attaches to it.',
    views: ['spine'],
    items: [
      { swatch: 'sp-ent', label: 'Timeline Event', desc: 'One dated event on the central spine, in chronological order. Its badge shows the category; click it for the full record and sources.' },
      { swatch: 'sp-mech', label: 'Existing Mechanism', desc: 'An oversight or participation mechanism that already existed when the case ran. Connected to the event where it should have fired.' },
      { swatch: 'sp-imp', label: 'Measured Impact', desc: 'An endpoint the record actually measures. Arrows point from the specific events where the causal claim holds; each arrow carries a strength flag.' },
      { swatch: 'sp-prop', label: 'Proposed Public Participation', desc: 'A proposal from the 6/8 design work, anchored where it would intervene. Its causal chain is drawn below; click for the full record.' },
      { swatch: 'sp-flag', label: 'Evidence Flag', desc: 'The strength grade for one causal claim. A dot on the flag means counter-evidence exists; click the flag to read both sides.' }
    ]
  },
  {
    id: 'failure',
    title: 'How Existing Mechanisms Failed',
    note: 'The framing question for every case: what ecosystem was participation being added to, and why was it not enough?',
    views: ['spine'],
    countBy: 'failure',
    items: [
      { key: 'did-not-know', label: 'Did Not Know', desc: 'The people responsible for the decision did not have the relevant information, often because it was never disclosed to them.', eg: 'Discharge permit reviewers reading a file that never named the chemical' },
      { key: 'knew-no-act', label: 'Knew, Did Not Act', desc: 'The relevant information was available, but no action was taken.', eg: 'An unverified consent order; withheld federal data' },
      { key: 'acted-no-effect', label: 'Acted, No Effect', desc: 'Action was taken, but it did not change the decision or outcome.', eg: 'Parent surveys; 122,485 comments on a rule already in force' },
      { key: 'no-mechanism', label: 'No Mechanism Existed', desc: 'There was no formal process for addressing the issue, so nothing required it to be considered or acted on.', eg: 'No school-mode dataset; no notice duty for unregulated contaminants' },
      { key: 'partial', label: 'Acted, Partial Effect', desc: 'Action was taken and changed part of the decision or outcome, but not all of it.', eg: 'Advisory committee votes that narrowed a federal authorization' },
      { key: 'worked', label: 'Worked', desc: 'The process was used and had the authority to affect the outcome. It remains on the map to show an important difference: some people had a formal way to influence the decision, while others did not.', eg: 'Union bargaining; courts; tribal self-governance; citizen suits' }
    ]
  },
  {
    id: 'strength',
    title: 'Evidence Strength',
    note: 'The scale the working document uses, applied to every flag on the map and every graded item in the sidebar.',
    views: ['spine'],
    countBy: 'strength',
    items: [
      { key: 'strong', label: 'Strong', desc: 'Directly measured, specific, and tightly connected to the claim.' },
      { key: 'moderate', label: 'Substantial', desc: 'Relevant and supportive, but indirect, partial, or context-limited.' },
      { key: 'weak', label: 'Weak', desc: 'Speculative, analogical, or clearly confounded.' },
      { key: 'contested', label: 'Contested', desc: 'Credible evidence points both ways.' },
      { key: 'unstudied', label: 'Unstudied', desc: 'Unable to identify substantive prior research.' }
    ]
  },
];

/** The five timeline entry categories, defined in categories.js, described here. */
export const TIMELINE_NOTE =
  'Timeline entries are the raw chronology behind a case. Their five categories are ' +
  'independent of the spine taxonomy above; an entry is tagged by what kind of event ' +
  'it was, not by how well evidenced anything is.';
