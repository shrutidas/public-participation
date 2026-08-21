/**
 * Every label used anywhere in the project, defined in one place.
 *
 * There are three independent dimensions on the chain map and they are easy
 * to confuse, so they get separate visual languages:
 *
 *   THE BOX: what kind of event the node is. Gray for events nothing could
 *                have moved, green for events participation could act on,
 *                red for the outcomes worth caring about.
 *   THE ARROW: how well evidenced the causal link is. Sequential color
 *                ramp from green (safe to assert) to red (no evidence found).
 *   THE DOTS: participation at that link. Purple dots (left of the link
 *                name) are actual, documented participation, colored by
 *                effect; orange dots (right) are proposed, speculative
 *                participation from the project's design work.
 */

/** A short orientation, rendered at the top of the Key panel. */
export const HOW_TO = [
  {
    title: 'Select a case',
    desc: 'The Cases button (top left) lists the four case studies. Three carry full causal chains; the Meta case is documented as a timeline only.'
  },
  {
    title: 'Two representations of each case',
    desc: 'The causal chain states the argument: which conditions produced which outcomes, and how well the evidence supports each step. The timeline holds the underlying chronology. The Timeline tab sits beside the Causal Link pane; Expand opens the full chronology with category filters, and Back to Chain returns to the map.'
  },
  {
    title: 'Read the map',
    desc: 'Nodes are states of the world, colored by role: gray for events that cannot be changed (the pandemic itself, historical trauma), green for events participation could act on, red for the outcomes worth caring about. Click a node to see the timeline around its date. The causal arrows run down the center of the chain; each carries a name chip. Click a chip to open its evidence, counter-evidence, and open questions in the sidebar. Arrow keys step through the chain.'
  },
  {
    title: 'Participation flanks each arrow: actual left, proposed right',
    desc: 'To the left of each arrow sit the documented instances of participation at that link (purple). To the right sit the proposed instances from the project’s 6/8 design work (purple, dashed, because they did not happen). Click any card to open its full record; a proposal also says whether the mechanism it presumes has support in the studied literature.'
  },
  {
    title: 'Compare argument and chronology',
    desc: 'The Timeline tab displays the chronology beside the map. With a link selected, entries that cite the same sources, or that fall within the link\u2019s participation dates, are highlighted; the rest recede.'
  },
  {
    title: 'Follow the open questions',
    desc: 'Each chain overview lists its unresolved research questions, grouped by the link they would strengthen. Together these constitute the research agenda the chains generate.'
  },
  {
    title: 'Cite a specific view',
    desc: 'Every case, chain, link, and participation instance has a stable URL. Copying the address functions as a pinpoint citation: a reader lands on the exact evidence under discussion.'
  }
];

export const GLOSSARY = [
  {
    id: 'map',
    title: 'Reading the Chain Map',
    note: 'Nodes are states of the world, colored by what can be done about them. Arrows are the claim that one produced the next.',
    views: ['chain'],
    items: [
      { swatch: 'node-immovable', label: 'Events (Cannot Be Changed)', desc: 'An event no participation instrument could have moved: the pandemic itself, historical institutional trauma. Gray marks what the argument takes as given.' },
      { swatch: 'node-intervenable', label: 'Intervenable Event', desc: 'An event participation could plausibly have acted on. Green marks where an instrument, actual or proposed, has something to push against.' },
      { swatch: 'node-outcome', label: 'Valued Outcome', desc: 'A harm or harm-reduction outcome worth caring about. Red marks what the chain exists to explain, wherever it sits in the graph.' },
      { swatch: 'edge-solid', label: 'Arrow', desc: 'One causal link, running down the center of the chain. Click its name chip to open the evidence, counter-evidence, and open questions in the sidebar. (Evidence is still graded strong to unstudied inside the sidebar; the arrows themselves no longer carry that color.)' },
      { swatch: 'chip', label: 'Link Name', desc: 'Sits on the arrow and names the causal event. Its actual participation flanks it on the left; its proposed participation flanks it on the right.' }
    ]
  },
  {
    id: 'participation',
    title: 'Participation: Actual (Left) and Proposed (Right)',
    note: 'The arrow runs down the middle. Documented participation sits to its left; proposed participation, from the project’s 6/8 design work, sits to its right. Both are purple; proposed is dashed to mark that it did not happen.',
    views: ['chain'],
    items: [
      { swatch: 'card-actual', label: 'Actual Participation', desc: 'A documented instance of public participation that sat at that link. Click it to open its full record: what it was, who took part, and what it changed.' },
      { swatch: 'card-prop', label: 'Proposed Participation', desc: 'A counterfactual process from the design work that did not run at that link but could have. Click it to open the presumed mechanism, and whether that mechanism has support in the studied literature.' }
    ]
  },
  {
    id: 'stage',
    title: 'Chain Stages',
    note: 'Which part of the causal chain a link’s endpoint belongs to, per the project’s working framework.',
    views: ['chain'],
    countBy: 'stage',
    items: [
      { key: 'structural', label: 'Structural', desc: 'Background institutions, rules, or conditions that shape the chain but are not themselves participation, trust, compliance, or the outcome.' },
      { key: 'participation', label: 'Participation', desc: 'A mechanism through which actors directly intervene, contest, deliberate, monitor, sue, comment, organize, or otherwise engage decision-making.' },
      { key: 'trust', label: 'Trust', desc: 'Evidence about confidence, perceived legitimacy, credibility, grievance, or distrust.' },
      { key: 'compliance', label: 'Compliance', desc: 'Behavior that reflects following, resisting, or altering implementation of a policy.' },
      { key: 'harm', label: 'Harm', desc: 'The bad outcome itself.' },
      { key: 'harm-reduction', label: 'Harm Reduction', desc: 'The reduction or avoidance of harm, which is distinct from harm.' }
    ]
  },
  {
    id: 'kind',
    title: 'Kinds of Participation',
    note: 'What form the participation took. The pattern across the project is that the instruments which bind are adversarial and legal.',
    views: ['chain'],
    countBy: 'kind',
    items: [
      { key: 'deliberative', label: 'Deliberative', desc: 'Sortition panels, citizens’ assemblies, appointed advisory councils.', eg: 'Michigan’s 30-person randomly selected pandemic panel' },
      { key: 'consultative', label: 'Consultative', desc: 'Surveys, town halls, public comment periods, hearings. Input is collected; nothing obliges anyone to act on it.', eg: 'The Chemours consent-order comment period' },
      { key: 'litigation', label: 'Litigation', desc: 'Citizen suits, intervention, petitions for judicial review, discovery.', eg: 'Cape Fear River Watch’s Clean Water Act suit' },
      { key: 'bargaining', label: 'Bargaining', desc: 'Collective bargaining, strike authorization, organized labour action. The only channel in the record that reliably converts voice into binding terms.', eg: 'AFT’s 2020 strike authorization' },
      { key: 'electoral', label: 'Electoral', desc: 'Recalls, board elections, referenda. Arrives after the decision.', eg: 'The February 2022 San Francisco school board recall' },
      { key: 'monitoring', label: 'Monitoring', desc: 'Citizen science, community sampling, independent measurement, return of results.', eg: 'The NC State GenX Exposure Study' },
      { key: 'journalism', label: 'Journalism', desc: 'Press and independent data projects performing a disclosure function no statute assigned to anyone.', eg: 'The NYT county-level COVID tracker' },
      { key: 'service', label: 'Service & Mutual Aid', desc: 'Community-run delivery, trusted-messenger outreach, mutual aid.', eg: 'Unidos en Salud in San Francisco’s Mission District' },
      { key: 'whistleblowing', label: 'Whistleblowing', desc: 'Insiders disclosing, or resigning over, information their organization concealed.', eg: '3M toxicologist Richard Purdy’s 1998 resignation' },
      { key: 'protest', label: 'Protest', desc: 'Demonstrations, boycotts, organized refusal.', eg: 'Not yet used in this project' }
    ]
  },
  {
    id: 'track',
    title: 'Chain Tracks',
    note: 'A case gets more than one chain when participation was asked to do a different job for a different outcome.',
    views: ['chain'],
    items: [
      { key: 'total', label: 'Total Harm Reduction', desc: 'Harm reduced through overall compliance. Trust is the hypothesized mediator.' },
      { key: 'fair', label: 'Fair Harm Reduction', desc: 'Harm reduced through equitable reach. Access is the hypothesized mediator.' },
      { key: 'legitimacy', label: 'Decision Legitimacy', desc: 'Used where no clean harm outcome exists that participation could have improved, and the damage is to the standing of the decision itself.' },
      { key: 'harm-reduction', label: 'Harm Reduction', desc: 'The full arc from root cause through public knowledge (a mediator, not an outcome) to the harm absorbed and the harm reduction achieved. Used for the GenX case, where the only terminal outcome that matters is harm reduction.' }
    ]
  },
  {
    id: 'record',
    title: 'What Sits on a Link',
    note: 'Open the detail pane for any link and you get these four sections, in this order.',
    views: ['chain'],
    items: [
      { label: 'Evidence', desc: 'Findings supporting the causal claim, each graded on its own.' },
      { label: 'Counter-evidence', desc: 'Kept as a separate section rather than folded into a hedge, so a contested link shows both sides at full strength.' },
      { label: 'Caveat', desc: 'A limitation attached to one finding: a non-representative sample, a partisan source, a design that cannot support the reading.' },
      { label: 'Actual Participation', desc: 'Documented instances of participation that sat at this link, each with its effect.' },
      { label: 'Proposed Participation', desc: 'Counterfactual processes from the project’s design work, each naming the mechanism it presumes and whether that mechanism is studied.' },
      { label: 'Open Questions', desc: 'What would have to be researched for this link to firm up. These are the research plan, generated from the argument rather than written separately.' }
    ]
  }
];

/** The five timeline entry categories, defined in categories.js, described here. */
export const TIMELINE_NOTE =
  'Timeline entries are the raw chronology behind a case. Their five categories are ' +
  'independent of the chain taxonomy above; an entry is tagged by what kind of event ' +
  'it was, not by how well evidenced anything is.';
