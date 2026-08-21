/**
 * Every label used anywhere in the project, defined in one place.
 *
 * There are two independent dimensions on the chain map and they are easy to
 * confuse, so they get separate visual languages:
 *
 *   THE ARROW: how well evidenced the causal link is. Sequential color
 *                ramp from green (safe to assert) to red (no evidence found).
 *   THE DOTS: whether public participation at that link changed anything.
 *                Purple family, matching the "Public Participation" category
 *                used on the timelines. Grey means it did nothing, or there
 *                was nothing there.
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
    desc: 'Boxes are states of the world; arrows are causal claims. Arrow color encodes the evidence grade for each claim (a dashed arrow marks a claim that was searched for and not found in the literature). Click a labeled arrow (S1, R3) to open its evidence, counter-evidence, and open questions; arrow keys step through the chain.'
  },
  {
    title: 'The dots record participation',
    desc: 'Each dot on an arrow is one documented instance of public participation at that link, colored by its documented effect. A hollow dot marks a link where no instance was identified; the distribution of hollow dots is itself a finding.'
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
    note: 'Boxes are states of the world. Arrows are the claim that one produced the next.',
    views: ['chain'],
    items: [
      { swatch: 'edge-solid', label: 'Arrow', desc: 'One causal link. Its color is the evidence grade below. Click it to open the evidence.' },
      { swatch: 'edge-dash', label: 'Dashed Arrow', desc: 'An unstudied link, asserted in the argument, but no evidence found for it.' },
      { swatch: 'chip', label: 'Chip', desc: 'Sits on the arrow. Carries the link id and one dot per participation instance at that link.' }
    ]
  },
  {
    id: 'strength',
    title: 'Arrows: How Well Evidenced the Link Is',
    note: 'This grades the causal claim itself, not any single study. It tells you how hard you can lean on the link in prose.',
    views: ['chain'],
    countBy: 'strength',
    items: [
      { badge: 'gr-strong', key: 'strong', label: 'Strong', desc: 'Causal identification (RCT, natural experiment, difference-in-differences) or an authoritative repeated measure. Safe to assert plainly.' },
      { badge: 'gr-moderate', key: 'moderate', label: 'Moderate', desc: 'Correlational, a single survey, or a program evaluation with a comparison group. Assert it, but name the design.' },
      { badge: 'gr-weak', key: 'weak', label: 'Weak', desc: 'Anecdote, self-report with no counterfactual, or an advocacy source. Use to illustrate, never to prove.' },
      { badge: 'gr-contested', key: 'contested', label: 'Contested', desc: 'Credible evidence points both ways. The counter-evidence section holds the other side. Do not resolve it in prose; show the fight.' },
      { badge: 'gr-unstudied', key: 'unstudied', label: 'Unstudied', desc: 'Searched for, and it does not appear to exist. This is a finding in its own right, not a hole to apologize for.' }
    ]
  },
  {
    id: 'effect',
    title: 'Dots: Whether Participation There Changed Anything',
    note: 'One dot per participation instance sitting at that link. Purple means it happened and did something; grey means it did not, or nothing was there.',
    views: ['chain'],
    countBy: 'effect',
    items: [
      { dot: 'ef-moved', key: 'moved', label: 'Most Change', desc: 'A documented change in the decision, the rule, or the outcome. The strongest claim available.' },
      { dot: 'ef-partial', key: 'partial', label: 'Partial Change', desc: 'A documented change, but limited or contested in scope.' },
      { dot: 'ef-unmeasured', key: 'unmeasured', label: 'Never Measured', desc: 'It ran, often at very large scale, and no counterfactual was ever established. The most common failure in this record.' },
      { dot: 'ef-none', key: 'none', label: 'No Change', desc: 'It ran, and nothing changed.' },
      { dot: 'cg-dot-none', label: 'None Identified', desc: 'No participation instance was found at this link at all. Where these cluster is itself a finding.' }
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
      { key: 'detection', label: 'Earlier Identification', desc: 'Could the problem have been found, or disclosed, sooner?' },
      { key: 'response', label: 'Faster and Better Response', desc: 'Once known, was the response quicker or more complete because of participation?' }
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
      { label: 'Open Questions', desc: 'What would have to be researched for this link to firm up. These are the research plan, generated from the argument rather than written separately.' }
    ]
  }
];

/** The five timeline entry categories, defined in categories.js, described here. */
export const TIMELINE_NOTE =
  'Timeline entries are the raw chronology behind a case. Their five categories are ' +
  'independent of the chain taxonomy above; an entry is tagged by what kind of event ' +
  'it was, not by how well evidenced anything is.';
