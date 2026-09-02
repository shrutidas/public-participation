/**
 * Every label used anywhere in the project, defined in one place.
 *
 * The spine map runs in four labelled lanes:
 *
 *   MEASURED IMPACT: dark green cards in their own lane on the far left, each
 *                at the date its finding was first published.
 *   MAIN TIMELINE: white boxes, every event in order, showing the opening of
 *                the entry. A star in an event's corner marks a mechanism that
 *                already existed and should have caught it.
 *   PROPOSED PUBLIC PARTICIPATION: purple boxes from the design work, tied to
 *                the event they would intervene in, each carrying its mechanism
 *                and the effects it aims at.
 *   CAUSAL CHAIN & EVIDENCE: each proposal's chain running left to right, with
 *                a red evidence card under every link.
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
    title: 'Stars: what already existed',
    desc: 'A star in an event’s corner marks an oversight or participation mechanism that already existed and should have caught that event. Click the star to read why it did not work: did not know, knew but did not act, acted with no effect, no mechanism existed, or worked.'
  },
  {
    title: 'Green: what was measured',
    desc: 'Dark green cards sit in their own lane on the far left, each at the date its finding was first published. An arrow runs from the specific events where the causal claim holds, and every arrow carries a strength flag you can click to see the evidence.'
  },
  {
    title: 'Purple: proposed public participation',
    desc: 'The middle lane holds the proposals from the 6/8 design work, tied by a dotted bracket to the event they would intervene in. Each names its mechanism and the effects it aims at, linked to where those effects are measured on the timeline. The right lane runs the proposal’s causal chain left to right, with an evidence card under every link and counter-evidence kept at full strength.'
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
    note: 'The timeline is the argument’s backbone; everything else attaches to it. Columns are labelled across the top and stay in place as you scroll.',
    views: ['spine'],
    items: [
      { swatch: 'sp-ent', label: 'Timeline Event', desc: 'One dated event in the Main Timeline lane, in chronological order. Its badge shows the category. The box shows the opening of the entry; click it for the whole record and its sources.' },
      { swatch: 'sp-star', label: 'Existing Mechanism', desc: 'A star in an event’s corner: an oversight or participation mechanism that already existed and should have caught that event. Click the star to read why it did not work.' },
      { swatch: 'sp-imp', label: 'Measured Impact', desc: 'An endpoint the record actually measures, in its own lane at the date the finding was first published. An arrow runs from the specific events where the causal claim holds; each arrow carries a strength flag.' },
      { swatch: 'sp-prop', label: 'Proposed Public Participation', desc: 'A proposal from the 6/8 design work, tied to the event it would intervene in. Its mechanism and the effects it aims at sit under the box; its causal chain runs to the right.' },
      { swatch: 'sp-flag', label: 'Evidence Card', desc: 'One piece of evidence under the chain link it supports, named by its source. A dashed card is counter-evidence. Click a card to read the finding, its strength grade, and the full record.' }
    ]
  },
  {
    id: 'failure',
    title: 'How Existing Mechanisms Failed (★)',
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
