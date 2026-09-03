/**
 * Every label used anywhere in the project, defined in one place.
 *
 * The spine map runs in four labelled lanes:
 *
 *   MEASURED IMPACT: dark green cards in their own lane on the far left, each
 *                level with its strongest source event. The card carries the
 *                date its finding was first published.
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
    desc: 'A star in an event’s corner marks an oversight or participation mechanism that already existed and should have caught that event. Click the star to read whether it addressed the event: yes, partly, no, or mixed, and why.'
  },
  {
    title: 'Green: what was measured',
    desc: 'Dark green cards sit in their own lane on the far left, each level with the event where its causal claim is strongest. The date on the card is when the finding was first published. Click a card to see what it measures and the evidence behind it.'
  },
  {
    title: 'Purple: proposed public participation',
    desc: 'The middle lane holds the proposals from the 6/8 design work, tied by a dotted bracket to the event they would intervene in. Each names its mechanism and the effects it aims at, linked to where those effects are measured on the timeline. The right lane runs the proposal’s causal chain left to right in magenta boxes, with an evidence card under every link and counter-evidence kept at full strength. A dashed box is a link no study tests directly.'
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
      { swatch: 'sp-ent', label: 'Timeline Event', desc: 'One dated event in the Main Timeline lane, in chronological order. A coloured dot and label name its category. The box shows the opening of the entry; click it for the whole record and its sources.' },
      { swatch: 'sp-star', label: 'Existing Mechanism', desc: 'A star in an event’s corner: an oversight or participation mechanism that already existed and should have caught that event. Click the star to read whether it addressed the event: yes, partly, no, or mixed.' },
      { swatch: 'sp-imp', label: 'Measured Impact', desc: 'An endpoint the record actually measures, in its own lane beside its strongest source event. The date on the card is when the finding was first published. Select the card or the event to see every source.' },
      { swatch: 'sp-prop', label: 'Proposed Public Participation', desc: 'A proposal from the 6/8 design work, tied to the event it would intervene in. Its mechanism and the effects it aims at sit inside the card; its causal chain runs to the right.' },
      { swatch: 'sp-chain', label: 'Causal Link', desc: 'One step in a proposal’s causal chain, in magenta, read left to right. Click it for the claim; the evidence cards sit under it on the map.' },
      { swatch: 'sp-chain-un', label: 'Untested Causal Link', desc: 'A dashed magenta box marks a link no study tests directly. Its evidence cards come from nearby cases or other fields.' },
      { swatch: 'sp-flag', label: 'Evidence Card', desc: 'One piece of evidence under the chain link it supports, named by its source. A dashed card is counter-evidence. Click a card to read the finding and the full record.' }
    ]
  },
];

/** The five timeline entry categories, defined in categories.js, described here. */
export const TIMELINE_NOTE =
  'Timeline entries are the raw chronology behind a case. Their five categories are ' +
  'independent of the spine taxonomy above; an entry is tagged by what kind of event ' +
  'it was, not by how well evidenced anything is.';
