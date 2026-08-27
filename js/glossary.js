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
    title: 'Orange: the proposed interventions',
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
      { swatch: 'sp-prop', label: 'Proposed Intervention', desc: 'A proposal from the 6/8 design work, anchored where it would intervene. Its causal chain is drawn below; click for the full record.' },
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
      { key: 'did-not-know', label: 'Did Not Know', desc: 'The mechanism’s operators lacked the information, often because someone withheld it.', eg: 'Discharge permit reviewers reading a file that never named the chemical' },
      { key: 'knew-no-act', label: 'Knew, Did Not Act', desc: 'The information was there and nothing fired.', eg: 'An unverified consent order; withheld federal data' },
      { key: 'acted-no-effect', label: 'Acted, No Effect', desc: 'The mechanism ran as designed and did not change the decision or outcome.', eg: 'Parent surveys; 122,485 comments on a rule already in force' },
      { key: 'no-mechanism', label: 'No Mechanism Existed', desc: 'Nothing existed to fire; the function went unperformed or a private actor substituted.', eg: 'No school-mode dataset; no notice duty for unregulated contaminants' },
      { key: 'partial', label: 'Acted, Partial Effect', desc: 'It fired and changed part of the decision or outcome.', eg: 'Advisory committee votes that narrowed a federal authorization' },
      { key: 'worked', label: 'Worked', desc: 'It fired and bound. Kept on the map because the asymmetry, who held a binding channel and who did not, is the argument.', eg: 'Union bargaining; courts; tribal self-governance; citizen suits' }
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
      { key: 'moderate', label: 'Moderate', desc: 'Relevant and supportive, but indirect, partial, or context-limited.' },
      { key: 'weak', label: 'Weak', desc: 'Speculative, analogical, or clearly confounded.' },
      { key: 'contested', label: 'Contested', desc: 'Credible evidence points both ways.' },
      { key: 'unstudied', label: 'Unstudied', desc: 'Searched for, and the evidence does not appear to exist. Recorded as a finding, not a failure.' }
    ]
  },
  {
    id: 'record',
    title: 'What Sits on a Proposal',
    note: 'Open any orange chip and the sidebar gives these sections, in this order.',
    views: ['spine'],
    countBy: 'proposal',
    items: [
      { key: 'proposed', label: 'The Chain', desc: 'The full causal chain from intervention to outcome, one graded link at a time; an unstudied link says so on its own card.' },
      { label: 'When and Where', desc: 'If we could only do this one thing: the specific point on the timeline and the jurisdiction where it would intervene.' },
      { label: 'Intended Impacts', desc: 'Measured impacts the chain reaches are separated from conjectured impacts nothing measures.' },
      { label: 'Comparables', desc: 'Real-world cases where something similar was tried, with measured outcomes where they exist and stated absences where they do not.' }
    ]
  }
];

/** The five timeline entry categories, defined in categories.js, described here. */
export const TIMELINE_NOTE =
  'Timeline entries are the raw chronology behind a case. Their five categories are ' +
  'independent of the spine taxonomy above; an entry is tagged by what kind of event ' +
  'it was, not by how well evidenced anything is.';
