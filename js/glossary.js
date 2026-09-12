/**
 * Every label used anywhere in the project, defined in one place.
 *
 * The spine map runs in four labelled lanes:
 *
 *   MEASURED OUTCOME: dark green cards in their own lane on the far left, each
 *                level with its strongest source event. The card carries the
 *                date its finding was first published.
 *   MAIN TIMELINE: white boxes, every event in order, showing the opening of
 *                the entry. A star in an event's corner marks a mechanism that
 *                already existed and should have caught it.
 *   PROPOSED PUBLIC PARTICIPATION: purple boxes from the design work, each
 *                placed beside the part of the record it speaks to and tied
 *                to a specific event only where that link is asserted.
 *   PROPOSED OUTCOMES: what each proposal is for. One green box, one
 *                sentence, with one arrow from the card into it; under it a
 *                row of the claims that support it, and under each claim its
 *                evidence, counter-evidence, and case studies.
 */

/** A short orientation, rendered at the top of the Key panel. */
export const HOW_TO = [
  {
    title: 'Select a case',
    desc: 'The Cases button (top left) lists the four case studies. Three carry full spine maps; the Meta case is documented as a timeline only.'
  },
  {
    title: 'Read the spine',
    desc: 'The timeline runs down the center in chronological order: policy decisions, events, knowledge, public opinion, and participation, each tagged with its category. Click any event to read its full record and sources. The diagonal arrows in the Main Timeline lane header open the full timeline, with its filters and the case overview.'
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
    desc: 'The third lane holds the proposals from the 6/8 design work. Each sits beside the part of the record it speaks to, marked by a brace in the gutter that spans the card; a dotted line to a specific event appears only where that link is asserted. The card names the proposal and its mechanism.'
  },
  {
    title: 'Green and magenta: what a proposal is for',
    desc: 'The right lane shows what each proposal is for: one green box, one sentence, with an arrow from the card into it. The box is green because it is the same kind of thing the Measured Outcome lane records, and its border is dashed because it is proposed rather than measured. Some of these boxes name one of those outcomes; select the proposal and that card lights up on the left. Under the box run the claims that support it, in magenta. Under each claim sit its evidence, with counter-evidence kept at full strength, and the real-world case studies that support it, marked with a double rule.'
  },
  {
    title: 'Cite a specific view',
    desc: 'Every case, event, mechanism, outcome, proposal, claim, piece of evidence, and case study has a stable URL. Copying the address functions as a pinpoint citation.'
  }
];

export const GLOSSARY = [
  {
    id: 'map',
    title: 'Reading the Spine Map',
    note: 'The main timeline remains the map\'s central backbone.',
    views: ['spine'],
    items: [
      { swatch: 'sp-ent', label: 'Timeline Event', desc: 'A dated event from the case, colored by category. Click it for the full entry and sources.' },
      { swatch: 'sp-star', label: 'Existing Mechanism', desc: 'An oversight or participation mechanism that already existed when the event happened. Click the star to see whether it addressed the event.' },
      { swatch: 'sp-imp', label: 'Measured Outcome', desc: 'An outcome the record measured, placed beside the event it bears on most. The date is when the finding was first published.' },
      { swatch: 'sp-prop', label: 'Proposed Public Participation', desc: 'A proposal from the design work. A brace places it beside the stretch of the record it responds to; a line ties it to one event.' },
      { swatch: 'sp-out', label: 'Proposed Outcome', desc: 'What the proposal aims to achieve. Dashed because it is proposed, not measured. If the record measured the same outcome, selecting the proposal highlights that Measured Outcome.' },
      { swatch: 'sp-chain', label: 'Claim', desc: 'A general statement that supports the proposed outcome. Click it for its evidence and cases.' },
      { swatch: 'sp-flag', label: 'Evidence Card', desc: 'One study or finding under the claim. Gray dashed cards marked Counter cut against it. Click a card for the full finding and source.' },
      { swatch: 'sp-case', label: 'Case Study', desc: 'A real-world case under the claim. Click it for where and when it ran, who held authority, and what happened.' }
    ]
  },
];
