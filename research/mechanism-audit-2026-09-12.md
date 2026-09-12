# Audit of the proposed participation mechanisms, 12 September 2026

**Status, later on 12 September: applied to the spine.** All fourteen spine labels are now Title Case
and drawn from one controlled vocabulary, twelve distinct labels across fourteen proposals. Questions
1 and 2 below were both answerable from the project's own record, so neither needed a decision; the
answers are under "Questions for you". Questions 3, 4 and 5 are still open. A second set of fifteen
uncontrolled labels was found in the causal chain view and is **not** fixed; see "The chain view has
its own labels". Nothing is committed.

The fourteen proposals across the three cases each carry a `method` field. The map prints it on the
proposal card under the kicker "Mechanism", the detail pane prints it after "Mechanism:", and
`scripts/export-research.mjs` writes it to the research repository as the column "Participation
Kind". So the label does three jobs at once: it names the instrument on the card, it names it in the
pane, and it is the only field that could group proposals across cases.

Nothing is committed. This file audits the labels and proposes a standard set. It changes no data.

## What we have now

| Case | Proposal | Current label |
|---|---|---|
| Schools | 1 | Citizens' Assembly |
| Schools | 2 | Stakeholder council |
| Schools | 3 | Mandatory open data publication |
| Schools | 4 | Yes or no community vote |
| Vaccines | 1 | Mandatory open data and briefings |
| Vaccines | 2 | Deliberative forum before mandates |
| Vaccines | 3 | Co-governance of vaccine delivery |
| Vaccines | 4 | Participatory budgeting |
| Vaccines | 5 | Community-built evaluation |
| GenX | 1 | Protected worker reporting channels |
| GenX | 2 | Community review and monitoring body |
| GenX | 3 | Citizen science |
| GenX | 4 | Community-appointed expert review |
| GenX | 5 | Federally funded citizen oversight capacity |

## Findings

**1. There is no standard set. Fourteen proposals use fourteen different labels.** Not one label
repeats. Yet at least four instrument families repeat across the cases, so the reader cannot see that
two cases proposed the same thing.

**2. The same mechanism is named two ways.** Schools 1 says "Citizens' Assembly". Vaccines 2 says
"Deliberative forum before mandates", and its own title says "Citizens' assembly shapes any vaccine
mandate before it is imposed." These are one instrument under two names. Schools 3 and Vaccines 1 are
likewise one instrument, proactive publication of official data, under two names.

**3. Only one of fourteen labels is in Title Case.** "Citizens' Assembly" is. The other thirteen are
sentence case. The card kicker above the label reads "Mechanism", and the neighboring kickers on the
map are Title Case, so the labels look unfinished next to them.

**4. The labels are not the same kind of phrase.** Some name a body ("Stakeholder council"). Some
name an act ("Mandatory open data publication"). Some name a resource ("Federally funded citizen
oversight capacity"). Some name a field of practice ("Citizen science"). A reader scanning the row
cannot tell what kind of thing each one is.

**5. Six labels carry scope conditions that belong in the description.** "before mandates", "of
vaccine delivery", "for chemical hazards", "Federally funded". These make one instrument read as
several, and they duplicate text the description already carries.

**6. Two labels assert more than the evidence supports.**

- GenX 4, "Community-appointed expert review". The C8 Science Panel was chosen by DuPont and the
  lawyers for the class, not by residents. `research/gaps-2026-09-12.md` already flags the matching
  claim wording. The label repeats the same overstatement.
- GenX 3, "Citizen science", names only half its proposal. The proposal is that residents are told of
  any detection and then direct the follow-up testing. Notification is a separate instrument, and
  two of the proposal's claims are about the statutory trigger, not about resident testing.

**7. "Participation Kind" in the exported repository cannot be used.** Fourteen unique values across
fourteen proposals means the column groups nothing.

## The vocabulary the field actually uses

Four reference sets cover every instrument in the three cases. Each is a published, named taxonomy,
so a label drawn from one can be cited.

- **Deliberative bodies.** The Organisation for Economic Co-operation and Development names twelve
  models of representative deliberative processes, among them Citizens' Assembly, Citizens' Jury,
  Citizens' Council, Consensus Conference, and Deliberative Poll. Participedia uses the same names
  for its method entries.
- **Direct decision.** Referendum and ballot measure, from the same Participedia method set.
- **Social accountability.** The World Bank glossary names participatory budgeting, social audit,
  community scorecard, citizen report card, public expenditure tracking, right to information, and
  participatory monitoring and evaluation.
- **Environmental health practice.** Community-based participatory research and citizen science are
  distinct approaches in this literature and are not interchangeable. The Environmental Protection
  Agency runs two programs with names of their own: Community Advisory Groups, and Technical
  Assistance Grants for community groups at contaminated sites.

**The tension with house style.** Project memory says no jargon and spell out acronyms. The field's
own vocabulary includes insider words that fail that test: minipublic, co-production, sortition,
deliberative wave, and every acronym. The field also includes names a first-time reader parses
without help: Citizens' Assembly, Participatory Budgeting, Referendum, Citizen Science, Community
Advisory Board. My recommendation is to take the second group and refuse the first. Where the
standard name is insider shorthand, use the plain name and put the field term in the description.

## Proposed standard set

One controlled vocabulary, Title Case, each label a noun phrase naming the instrument. Scope
conditions move to the description, where they already appear.

| Case | Proposal | Current label | Proposed label | Family |
|---|---|---|---|---|
| Schools | 1 | Citizens' Assembly | **Citizens' Assembly** | Deliberative body |
| Vaccines | 2 | Deliberative forum before mandates | **Citizens' Assembly** | Deliberative body |
| Schools | 2 | Stakeholder council | **Stakeholder Advisory Council** | Advisory body |
| GenX | 2 | Community review and monitoring body | **Community Advisory Board** | Advisory body |
| GenX | 4 | Community-appointed expert review | **Independent Science Panel** | Advisory body |
| Schools | 3 | Mandatory open data publication | **Proactive Data Disclosure** | Disclosure |
| Vaccines | 1 | Mandatory open data and briefings | **Proactive Data Disclosure** | Disclosure |
| GenX | 1 | Protected worker reporting channels | **Protected Worker Disclosure** | Disclosure |
| GenX | 3 | Citizen science | **Citizen Science** | Monitoring |
| Schools | 4 | Yes or no community vote | **Binding Community Referendum** | Direct decision |
| Vaccines | 3 | Co-governance of vaccine delivery | **Neighborhood Co-Governance Board** | Shared decision |
| Vaccines | 4 | Participatory budgeting | **Participatory Budgeting** | Shared decision |
| Vaccines | 5 | Community-built evaluation | **Participatory Monitoring and Evaluation** | Monitoring |
| GenX | 5 | Federally funded citizen oversight capacity | **Funded Community Oversight** | Monitoring |

Fourteen proposals, twelve distinct labels, six families. Two labels now repeat across cases, which
is the point: the reader can see that two cases reached for the same instrument.

No label carries a parenthesis, a slash, an ampersand, or a scope condition. A label names one
instrument and nothing else. A compound label such as "Mandatory Notice and Citizen Science", which
an earlier draft of this table proposed for GenX 3, breaks that rule and is not used.

Why each changed label changed:

- **Vaccines 2** becomes Citizens' Assembly because that is what its own title says it is. "before
  mandates" is scope and stays in the description.
- **Schools 2** becomes Stakeholder Advisory Council. Its own description settles this: "The board
  keeps the decision but publishes the options and its reasoning." The council ranks options and the
  board must respond to each in writing, so it advises with a duty to respond. It does not decide.
  The group's own session doc names the same family, "community-based advisory or monitoring
  processes", giving "local stakeholder panels" as an example.
- **GenX 3** becomes Citizen Science, not a compound label and not two proposals. Its four claims
  split two and two: the statutory notice claims carry no evidence card between them, and all four
  evidence cards sit under the two resident-directed testing claims. Splitting the proposal would
  create a second proposal with no evidence at all. So the label names the instrument the evidence
  actually covers, and the notice trigger stays in the description, where it already is.
- **GenX 2** becomes Community Advisory Board, the standard name, and close to the Environmental
  Protection Agency's own Community Advisory Groups at contaminated sites.
- **GenX 4** becomes Independent Science Panel. This drops the claim that residents appoint the
  panel, which no verified source supports. Who appoints the panel belongs in the description, where
  it can be stated accurately.
- **Schools 3 and Vaccines 1** become one label. The briefings in Vaccines 1 are a delivery detail
  and stay in the description.
- **GenX 1** becomes Protected Worker Disclosure, which puts it in the disclosure family alongside
  the other two and drops "channels", a word the description already carries. Whistleblower
  Protection is the more standard name if you prefer it.
- **Schools 4** becomes Binding Community Referendum. Referendum is the standard name and reads
  plainly. "Binding" is doing real work, because the proposal is a vote that decides.
- **Vaccines 5** becomes Participatory Monitoring and Evaluation, the World Bank name. The carded
  Malawi case is a community scorecard, which is one tool inside that family.
- **GenX 5** becomes Funded Community Oversight. "Federally" is scope and stays in the description,
  which can also name the Technical Assistance Grants program the proposal resembles.

## The implication boxes are now all filled, and one side effect

Applied on 12 September. Every Proposed Implication box is the same green fill. It used to be white
unless the box named a card in the Measured Outcome lane, which read as a rendering fault rather than
as information.

The information is not lost. Selecting a proposal still rings the Measured Outcome card its box
names, in `litOut` in `js/spine-view.js`, and the pane still names the outcome. The fill was a second
channel carrying the same fact, and it was the channel that competed with the category color. What is
lost is scanning the map at rest for which proposals argue for something nobody measured. That count
is schools four of four, vaccines one of five, GenX three of five, and it is a finding worth keeping
somewhere. It should not be smuggled into a fill state.

**One side effect to decide on.** `.sp-imp`, the Measured Outcome card, and `.sp-out`, the Proposed
Implication box, now carry the same fill and the same border. Three things still separate them: they
sit in different lanes, the lanes are labeled, and each card carries its own kicker. But the Key now
shows two identical swatches on two different rows, which is its own small confusion.

The clean fix is to make the Measured Outcome card genuinely darker, which is what the Key panel
already tells the reader to expect: "Dark green cards sit in their own lane on the far left." Today
that card is not dark. I did not change it, because restyling that lane is outside what was asked.

## An optional second field

Every proposal also sits at a level of public power, and the labels currently hide this. The
International Association for Public Participation's spectrum gives five levels in wide use: Inform,
Consult, Involve, Collaborate, Empower. Adding one field would let the map show it.

| Level | Proposals |
|---|---|
| Inform | Schools 3, Vaccines 1 |
| Consult | GenX 1, GenX 2, GenX 4 |
| Involve | GenX 3, Vaccines 5, GenX 5 |
| Collaborate | Schools 1, Schools 2, Vaccines 2, Vaccines 3 |
| Empower | Schools 4, Vaccines 4 |

Read down the column and a pattern shows: the GenX proposals sit low on the spectrum, and the school
proposals sit high. That is a finding about the design work, and it is invisible today. This is a
suggestion only, and it adds a field to `spineProposal`, the map card, and the export.

## The chain view has its own labels, and they are not fixed

The causal chain view holds a second set of proposed participation instances in `js/chains/*.js`,
built by the `proposal()` helper. Fifteen more labels, none controlled, none Title Case:

| File | Labels |
|---|---|
| `covid-schools.js` | Citizens assembly (sortition, confederal); Minipublic with mapped expertise; Confederal decision-making; Open data & public communication; Standing community process with binding elements |
| `covid-vaccines.js` | Open data & public briefings; Citizens assembly / mini-public; Community advisory & co-design; Built-in program evaluation |
| `genx-pfas.js` | Worker committees & protected disclosure; Participatory science / community reporting; Statutory right-to-know; Right-to-know trigger; Independent science review; Federal funding, local design |

These have the same problems as the spine labels had, and two more:

- **They use the jargon the house style rejects.** Minipublic, sortition, confederal, mini-public.
- **They use ampersands and slashes** where the style spells words out.
- **"Citizens assembly" appears three times, spelled three ways**, none matching the spine's
  "Citizens' Assembly", and none with the apostrophe the standard name carries.
- **Two labels name the same instrument twice** inside one file: "Statutory right-to-know" and
  "Right-to-know trigger" in the GenX chain.

I did not change these. They are not a one-to-one match with the spine proposals, so mapping them
needs a judgment call per label rather than a rename: schools has five chain proposals against four
spine proposals, GenX has six against five, and vaccines has four against five. Eleven of the fifteen
are flagged `unstudied`, which is its own signal about which ones correspond to a spine proposal.

The same controlled vocabulary should cover both views. That is a second pass, and it needs your go
ahead.

## Questions for you

1. **Answered from the record, no decision needed.** The schools council advises, it does not decide.
   Its description says the board keeps the decision, and the group's session doc puts it in the
   advisory family. Label applied: Stakeholder Advisory Council.
2. **Answered from the record, no decision needed.** GenX 3 stays one proposal labeled Citizen
   Science. All four of its evidence cards sit under the resident-directed testing claims, and the
   statutory notice claims carry none, so splitting it would leave a proposal with no evidence.
3. **Whistleblower Protection or Protected Worker Disclosure** for GenX 1. The first is the standard
   name. The second matches the disclosure family and avoids a loaded word.
4. **Do you want the labels enforced?** `scripts/lint-cases.mjs` could check every `method` against
   the approved list and reject anything else, the same way it rejects a four-digit year in a claim.
   That would keep the vocabulary standard as the data grows.
5. **Do you want the spectrum field?** See the section above.

## Sources for the vocabulary

- Organisation for Economic Co-operation and Development, *Innovative Citizen Participation and New
  Democratic Institutions: Catching the Deliberative Wave*, the twelve models of representative
  deliberative processes.
  https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en.html
- Participedia method entries, including Citizens' Assembly and Participatory Budgeting.
  https://participedia.net/method/citizens-assembly and https://participedia.net/method/participatory-budgeting
- World Bank, *Glossary of Social Accountability Tools and Approaches*.
  https://www.worldbank.org/content/dam/Worldbank/Event/MNA/yemen_cso/english/Yemen_CSO_conf_glossary_SA_ENG.pdf
- International Association for Public Participation, Spectrum of Public Participation.
  https://cdn.ymaws.com/www.iap2.org/resource/resmgr/pillars/spectrum_8.5x11_print.pdf
- Environmental Protection Agency, participatory research approaches, on citizen science and
  community-based participatory research as distinct approaches.
  https://www.ncbi.nlm.nih.gov/books/NBK591545/
