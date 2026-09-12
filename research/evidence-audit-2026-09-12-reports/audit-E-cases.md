# Audit E: retiring the 52 case study cards

Read-only audit, 2026-09-12. I listed the cards by loading `js/spine/*.js` in Node (52 `supportingCase` cards, which matches the brief). To find duplicates, I compared each card's source URLs with every evidence and counter-evidence card in the same claim and the same proposal. To find circular cards, I compared each card with the entries in `js/cases/<slug>.js`.

Rules used when a card fit more than one bucket:
- If a card retells an event from its own case's timeline, it is CIRCULAR, as the brief says, even when an evidence card cites the same source. The report still names that evidence card.
- A source counts as a DUPLICATE only when the same claim or the same proposal already cites it. If a different proposal cites it, I note that under the verdict, but it does not make the card a duplicate.

## Summary

| Case | DUPLICATE | CONVERT | MOVE-TO-DESCRIPTION | CIRCULAR | CUT | Total |
|---|---|---|---|---|---|---|
| COVID school closures | 4 | 2 | 2 | 2 | 7 | 17 |
| COVID vaccines | 4 | 2 | 4 | 1 | 1 | 12 |
| GenX / PFAS | 6 | 3 | 4 | 4 | 6 | 23 |
| **All** | **14** | **7** | **10** | **7** | **14** | **52** |

All 7 CONVERT quotes were fetched and matched verbatim (see "Verification" at the end).

---

## COVID school closures (`js/spine/covid-schools.js`)

| Path | Name | Bucket | Matching card or reason |
|---|---|---|---|
| pr/0/cl/0/cs/0 | Michigan Citizens' Panel on COVID-19 | CIRCULAR | This is the schools timeline entry for 11/2020 (same CMU news source). The proposal description already says Michigan "seated a randomly selected panel only in the fall". Nothing is lost. |
| pr/0/cl/2/cs/0 | Irish Citizens' Assembly on the Eighth Amendment | MOVE-TO-DESCRIPTION | The card itself says "No study measures whether the assembly changed how legitimate anyone found the result", so it has no measured outcome on this claim. It is still a clear precedent for an assembly feeding a binding decision. Suiter et al. 2022 is already an evidence card at pr/1/cl/0/ev/0, a different proposal. |
| pr/1/cl/0/cs/0 | Ada Lovelace Rapid Online Deliberation | CUT | Off-claim. The claim is about people who know the building, and these participants were members of the general public. The same source is already an evidence card at pr/0/cl/0/ev/0. |
| pr/1/cl/0/cs/1 | Texas Utility Deliberative Polls | CUT | Off-claim. The participants were ratepayers, not insiders. The only source is a National Civic League article, and the card itself says no study links the polls to the law. |
| pr/1/cl/0/cs/2 | UK GM Crops Public Debate | CUT | Off-claim. It was a general-public consultation, and its finding (unease about GM, no link to policy) does not bear on insiders surfacing options. The source is course material from the Open University. |
| pr/1/cl/1/cs/0 | Marche Region Classroom Ventilation Program | DUPLICATE | pr/1/cl/1/ev/0 (Buonanno et al. 2022, same DOI). Possible merge: "across 56 schools", but only if that paper states it. ev/0 already has 316 classrooms and the 74 percent figure. |
| pr/1/cl/1/cs/1 | Jerusalem High School Outbreak | CUT | One outbreak report in which crowding, a mask exemption, and closed air-conditioned rooms all occurred together, so it cannot speak to ventilation or outdoor teaching on its own. The claim already has three stronger evidence cards (one of them a Cochrane review). |
| pr/1/cl/2/cs/0 | US Fall 2020 Delegation to School Districts | CIRCULAR | Timeline entry about decisions being handed to local districts (covid-schools.js ~line 223). The card itself says "it is what happened in this case". The same study is already pr/1/cl/2/ce/0 (Grossmann et al. 2021). Possible merge into ce/0, if Grossmann states it: only Arkansas and New Jersey set a statewide mode. *Also covered by claim audit.* |
| pr/1/cl/4/cs/0 | Salt Lake City Site-Based Councils | MOVE-TO-DESCRIPTION | Malen and Ogawa 1988 found that parents and teachers had no real influence. That is a finding about influence, not about relationships, so it does not fit the claim as worded. It works as a design warning in the pr/1 description. It could also serve as counter-evidence on pr/3/cl/0 ("can govern schools competently") if the team wants it there. |
| pr/2/cl/0/cs/0 | COVID-19 School Data Hub | DUPLICATE | pr/2/cl/0/ev/0 (same Brown URL). Nothing to merge. |
| pr/2/cl/0/cs/1 | Taiwan Mask Inventory API and Civic Maps | CONVERT | Replaced the Medium source with a peer-reviewed survey (Yuan et al. 2020, Journal of the Chinese Medical Association). Draft below. |
| pr/2/cl/1/cs/0 | BBC News Uncertainty Field Experiment | DUPLICATE | pr/2/cl/1/ev/0 (van der Bles et al. 2020, same DOI). ev/0 already mentions the BBC field experiment. |
| pr/3/cl/0/cs/0 | Chicago Local School Councils | DUPLICATE | All four of its sources are already cards: pr/3/cl/0/ev/0 (Ryan et al. 1997), ev/1 (UChicago Consortium), ce/0 (WBEZ), ce/1 (Chalkbeat). Nothing unique to merge. The "550 councils in 2002" figure has no source in the card. |
| pr/3/cl/0/cs/1 | Ostbelgien Permanent Citizens Council | CUT | The source is a blog digest, and it reports no measured outcome. A citizens' council set up by decree to pick agenda topics is not a school governing body, so it is off-claim. The description already uses Chicago to show that the form existed in statute. |
| pr/3/cl/0/cs/2 | Finnish and Swedish Nuclear Waste Veto | CUT | The sources are news only (Bellona, NucNet). The veto belongs to an elected municipal council, not a community body, and nothing was measured. |
| pr/3/cl/3/cs/0 | Brazilian Municipal Participatory Budgeting | CONVERT | Touchton and Wampler 2014 is not carded anywhere in schools pr/3. Its finding of more civil society organizations supports the "engagement" half of the claim. The vaccines file already has the same card at pr/3/cl/2/ev/2. Draft below. |
| pr/3/cl/3/cs/1 | Oregon Citizens' Initiative Review | CUT | Doesn't fit the claim as worded. The panel has no binding role over the decision, and the study measures the political efficacy of voters who took no part. Lead for the team: Knobloch, Barthel and Gastil 2020, Political Studies (https://doi.org/10.1177/0032321719852254). I checked this abstract sentence verbatim: "Results from a longitudinal 2010 panel survey show that awareness of the Citizens' Initiative Reviews increases respondents' external efficacy, whereas use of the Citizens' Initiative Review Statements on ballot measures increases respondents' internal efficacy." It could support a claim about non-participants who learn that a panel deliberated, which sits nearest pr/0/cl/2. |

## COVID vaccines (`js/spine/covid-vaccines.js`)

| Path | Name | Bucket | Matching card or reason |
|---|---|---|---|
| pr/0/cl/0/cs/0 | Taiwan Daily Epidemic Briefings | MOVE-TO-DESCRIPTION | Yueh et al. 2022 is one online survey rating how credible information channels were. It does not test openness about bad news, so it is off-claim as evidence. It does document that Taiwan held daily briefings, which is the practice the proposal describes. |
| pr/0/cl/4/cs/0 | National Dashboards Across the European Region | CONVERT | Barbazza et al. 2022, Digital Health. This is a different paper from ev/0 (Ivanković et al. 2021). Draft below. |
| pr/0/cl/4/cs/1 | Johns Hopkins University COVID-19 Dashboard | CONVERT | Dong et al. 2022, Lancet Infectious Diseases. Draft below. |
| pr/1/cl/0/cs/0 | France, Citizens' Collective on Vaccination | MOVE-TO-DESCRIPTION | The only source is the organizers' page, which says nothing was evaluated. It is a precedent that such a body existed during a rollout. |
| pr/1/cl/0/cs/1 | South Korea, Shin-Kori Reactor Deliberation | MOVE-TO-DESCRIPTION | Nothing here measures legitimacy. Chung 2020 reports only that opinions barely changed. It is a precedent for a government accepting a non-binding verdict, which bears on the open question in the description of how much force the verdict should carry. |
| pr/1/cl/1/cs/0 | French Citizens Convention for Climate | CUT | Off-claim. It tracks whether recommendations were implemented and whether the wider public supported them, and says nothing about compliance with rules. Its KNOCA source is already carded at schools pr/0/cl/2/ce/1. |
| pr/1/cl/2/cs/0 | France, 2016 Consultation and 2017 Mandate Law | MOVE-TO-DESCRIPTION | Lévy-Bruhl et al. 2018 describes how the mandate came about and measures no backlash (I checked the abstract). The claim that there was no backlash comes from Ward et al. 2022, which is already pr/1/cl/2/ce/1. What is left is the precedent that a consultation came before a mandate. *Also covered by claim audit.* |
| pr/2/cl/0/cs/0 | Protect Chicago Plus | DUPLICATE | pr/2/cl/0/ev/0 (Johnson et al. 2023, same URL). ev/0 already has the 0.58 to 0.92 to 0.87 path. Nothing to merge. *Also covered by claim audit.* |
| pr/2/cl/0/cs/1 | Tribal Indian Health Service Route Vaccination | CIRCULAR | Vaccines timeline entry for 11/2020 (tribes choosing the IHS route, 45.5 vs 33.7 percent, PBS NOVA). All of its sources are also on pr/2/cl/0/ev/2 (Haroz, PBS) and ce/0 (Kriss MMWR). Nothing is lost. *Also covered by claim audit.* |
| pr/3/cl/0/cs/0 | Brazilian Municipal Participatory Budgeting | DUPLICATE | pr/3/cl/0/ev/2 (Gonçalves 2014 plus Touchton and Wampler 2014) and ce/2 (Boulding and Wampler 2010). Nothing to merge. |
| pr/4/cl/0/cs/0 | Community Score Card, Ntcheu District | DUPLICATE | pr/4/cl/1/ev/2 (Gullo et al. 2017, same DOI, same proposal). What is unique here, "all 13 community- and provider-developed indicators improved, with 6 of them showing significant improvements", is on a different claim than ev/2. If the team wants it kept, add that quote to ev/2's finding, since ev/2's source supports it. After retirement, pr/4/cl/0 keeps only ev/0, which is weak. |
| pr/4/cl/1/cs/0 | Community-Based Monitoring of Clinics, Uganda | DUPLICATE | pr/4/cl/1/ev/1 and ce/1 (Björkman Nyqvist et al. 2017) and ce/0 (Raffler et al. 2025). The original trial (Björkman and Svensson 2009, QJE, https://doi.org/10.1162/qjec.2009.124.2.735) is not cited by any card. Unique detail: one year in, outpatient visits were 20 percent higher and under-5 deaths 33 percent lower. That can only be merged if the 2009 paper is added as a second source on ev/1 with its own verified quote. ev/1's current source is the follow-up paper. *Also covered by claim audit.* |

## GenX / PFAS (`js/spine/genx-pfas.js`)

| Path | Name | Bucket | Matching card or reason |
|---|---|---|---|
| pr/0/cl/0/cs/0 | OSHA Whistleblower Program Audit | DUPLICATE | pr/0/cl/0/ev/1 (GAO-10-722). ev/1 already has the internal-controls and screening-standards findings. Nothing to merge. |
| pr/0/cl/2/cs/0 | NASA Aviation Safety Reporting System | MOVE-TO-DESCRIPTION | The only source is the program's own document, and the card says "No one has measured the effect on hazards". It is a strong precedent for the structure the proposal describes, a channel run by someone other than the enforcer. *Also covered by claim audit.* |
| pr/0/cl/3/cs/0 | Richard Purdy Resignation Disclosure | CUT | The source is a news article, and nothing shows the letter changed anything (the card says so). The GenX timeline entry for 1999 credits EPA's audit of 3M to "3M's 1998 disclosures", which contradicts the sequence this card implies. |
| pr/1/cl/0/cs/0 | Woburn Leukemia Cluster | DUPLICATE | pr/1/cl/0/ev/2 (Cutler et al. 1986 plus Costas et al. 2002). The Lagakos 1986 JASA study and the settlements, Superfund, and state-registry outcomes are not in ev/2's sources, and they don't need to be. *Also covered by claim audit.* |
| pr/1/cl/0/cs/1 | Tonawanda Bucket Brigade | CONVERT (factual record) | EPA and NYSDEC records document the order of events: residents' samples came first, then the state study, then enforcement. A factual evidence card is allowed here because it only states what happened. Draft below. *Also covered by claim audit.* |
| pr/1/cl/0/cs/2 | Flint Resident Water Sampling | DUPLICATE | pr/1/cl/0/ev/0 (Pieper et al. 2018 plus Roy and Edwards 2019), the same Flint Water Study citizen sampling. The case's figures (252 of 300 kits, 25.2 ppb) come from the first-round web page and Mantha 2020. ev/0 uses 269 homes and 26.8 from Pieper 2018. Keep ev/0's figures and don't merge. *Also covered by claim audit.* |
| pr/1/cl/2/cs/0 | Toxics Release Inventory | CUT | The sources are EPA records, which can't support an effect claim, and EPA itself credits the air-release decline to utilities moving off coal. Lead for the team: Konar and Cohen 1997, JEEM (https://doi.org/10.1006/jeem.1996.0955) found that firms whose stock fell most when TRI data were released later cut emissions more. I could not fetch its abstract (paywalled, 403), so there is no draft. The claim keeps ev/0 (Bennear and Olmstead 2008, strong). |
| pr/1/cl/2/cs/1 | Massachusetts Toxics Use Reduction Act | CUT | The state institute's own preliminary program totals, reported by the firms themselves, with no comparison group. The program is about use reduction planning, not disclosure pressure. |
| pr/1/cl/2/cs/2 | REACH Candidate List Substitution | CUT | One survey of firms' stated intentions ("decided to replace"). It measures neither discharges nor completed substitutions, so it is off-claim. |
| pr/2/cl/0/cs/0 | California Notice Above Advisory Levels | CONVERT (factual record) | The claim has no evidence card, and this enacted statute shows that such a trigger exists. ce/0 cites the same two sections, but it uses them for the limits (notice that goes only to officials, or a shut well). Folding this card into ce/0 would therefore not support the claim, which is why it is CONVERT rather than DUPLICATE. **Error in the current card:** it reads HSC 116455 as public notice, but 116455(a) sends notice to governing bodies (the utility board, city or county). Only 116378(c)(3), for PFAS above a response level, requires notice to every customer. The draft below uses 116378. |
| pr/2/cl/0/cs/1 | Drinking Water Public Notification Rule | DUPLICATE | pr/2/cl/0/ce/0 cites 40 CFR 141.207, including the 12-month notice. The 24-hour tier is already carded at pr/1/cl/1/ev/0 (a different proposal). Nothing to merge. |
| pr/2/cl/0/cs/2 | The June 2017 Wilmington StarNews Story | CIRCULAR | GenX timeline entry for 06/2017 (Hagerty, StarNews). Nothing is lost. The timeline and the proposal description both already make the point that "a newspaper performed the notice function". |
| pr/2/cl/0/cs/3 | A Reporter Reading the Federal Monitoring Data | CIRCULAR | The same timeline entry for 06/2017 ("found the story by browsing EPA's public UCMR3 monitoring database", Coastal Review). Nothing is lost. |
| pr/2/cl/1/cs/0 | State Response After the StarNews Story | CIRCULAR | GenX timeline entries for 06/2017 (NC DEQ and DHHS investigation, and the 06/2017 EPA inspection). The same facts, from the same WRAL source, also sit on pr/1/cl/4/ev/0, which has the same circularity problem. Nothing outside the case is lost. |
| pr/2/cl/1/cs/1 | Flint Emergency Response After Resident Data | CONVERT | Roy and Edwards 2019 (peer-reviewed) documents that the state issued an advisory and switched the water back within weeks of the resident and blood-lead results. It also documents 18 months of ignored complaints before that. Roy and Edwards is already cited at pr/1/cl/0/ev/0, a different proposal. Draft below. |
| pr/2/cl/2/cs/0 | Lead Rising in One Flint Home | CUT | One home, and the source doesn't say residents chose where to test, so it doesn't fit "residents who direct testing". ev/0 (Goovaerts 2017) already covers resident-chosen sampling in Flint better. |
| pr/3/cl/0/cs/0 | C8 Science Panel | CIRCULAR | GenX timeline entries for 2004 and 2012 (the C8 Science Panel). All three of its sources are also on pr/3/cl/0/ev/0, so that evidence card is circular in the same way. If ev/0 is removed on those grounds, pr/3/cl/0 has no evidence left. |
| pr/3/cl/1/cs/0 | Stillwater Good Neighbor Agreement | MOVE-TO-DESCRIPTION | The source is a WRI snapshot with no peer-reviewed evaluation, and "no arbitration or litigation" is not a trust measure. It is a close precedent for company-funded experts who answer to residents. |
| pr/3/cl/1/cs/1 | Superfund Technical Assistance Grants | MOVE-TO-DESCRIPTION | The GAO record says nothing about trust. It shows a federal program that pays for experts communities hire themselves. The same GAO source is carded at pr/4/cl/0/ev/1 and ce/0, a different proposal. |
| pr/4/cl/0/cs/0 | Superfund Technical Assistance Grants | DUPLICATE | pr/4/cl/0/ev/1 and ce/0 (GAO T-RCED-93-1). ce/0 already has "lengthy, labor intensive, and intimidating". The procurement barriers and reimbursement delays could be added to ce/0's finding, since they come from the same GAO document. |
| pr/4/cl/0/cs/1 | North Carolina PFAS Testing Network | MOVE-TO-DESCRIPTION | Off-claim as evidence: the money was state money, and the capacity sat in universities. It is not in the case timeline. It is useful context: this was how the state actually responded, and it did not build what the proposal describes. |
| pr/4/cl/0/cs/2 | Racial and Ethnic Approaches to Community Health (CDC REACH) | CUT | Off-claim. The finding is about smoking rates, not local capacity, and the funding agency evaluated its own program in a different field. |
| pr/4/cl/1/cs/0 | Michigan PFAS Drinking Water Limits | DUPLICATE | pr/4/cl/1/ev/0 (same EGLE URL). "Applies to all community water supplies" could be added to ev/0, which has the same source. |

---

## CONVERT drafts

- Type: evidence (factual and descriptive), for **covid-schools pr/2/cl/0** ("Local data can be published from the first weeks, and no one else fills the gap.") Replaces cs/1.
  Headline: Taiwan's government put live mask stock for every contracted pharmacy online in the first weeks of the outbreak, and residents built apps on it.
  Finding: When Taiwan began rationing masks on February 6, 2020, its National Health Insurance Administration "offered online data with real-time updates on face mask availability in all contracted pharmacies and selected local health centers". By March 15, a government registry listed 134 apps built on the data. Of the 110 that worked, nearly two thirds were built by individuals and only two by governments. The survey counts apps, not use, and the data covered mask stock rather than cases.
  Quote: "Taiwan National Health Insurance Administration offered online data with real-time updates on face mask availability in all contracted pharmacies and selected local health centers."
  URL: https://doi.org/10.1097/jcma.0000000000000325
  Source label: Yuan, Hsu, Lee, Chen, Chou and Hwang 2020, Journal of the Chinese Medical Association
  Grade: moderate
  Fit note: Supports the first half of the claim (publication from the first weeks). It does not speak to "no one else fills the gap". ev/0 carries that half.

- Type: evidence, for **covid-schools pr/3/cl/3** ("A binding role before decisions raises trust and engagement.") Replaces cs/0.
  Headline: Brazilian cities that kept participatory budgeting longer also gained more civil society organizations.
  Finding: Across Brazil's largest cities over twenty years, participatory budgeting programs "are strongly associated with increases in health care spending, increases in civil society organizations, and decreases in infant mortality rates", and the link grew stronger the longer programs stayed in place. Residents set spending priorities but held no veto. Cities with more organized residents may also have been likelier to adopt it in the first place.
  Quote: "We find PB programs are strongly associated with increases in health care spending, increases in civil society organizations, and decreases in infant mortality rates."
  URL: https://doi.org/10.1177/0010414013512601
  Source label: Touchton and Wampler 2014, Comparative Political Studies
  Grade: moderate
  Fit note: Supports the engagement half. It is the same card as covid-vaccines pr/3/cl/2/ev/2. Reuse that wording so the two stay in sync.

- Type: evidence, for **covid-vaccines pr/0/cl/4** ("A public data function at national scale is feasible.") Replaces cs/0.
  Headline: National health data teams across Europe put public virus dashboards online within the first months of the pandemic, despite thin staffing.
  Finding: Researchers interviewed 80 people from 33 national dashboard teams in the World Health Organization's European Region. "Most dashboards were launched swiftly during the first months of the pandemic, February to May 2020." Teams reported urgent workloads, few staff, and data and privacy limits. They credited high-level political backing, their own professionalism, fast data improvements, and ready-made commercial software with making up for being underprepared. The accounts come from the teams themselves.
  Quote: "Most dashboards were launched swiftly during the first months of the pandemic, February to May 2020."
  URL: https://doi.org/10.1177/20552076221121154
  Source label: Barbazza, Ivanković, Davtyan and colleagues 2022, Digital Health
  Grade: moderate

- Type: evidence, for **covid-vaccines pr/0/cl/4** ("A public data function at national scale is feasible.") Replaces cs/1.
  Headline: A university team put a public global case tracker online the day after the first American case and kept it running for more than two years.
  Finding: "On Jan 22, 2020, a day after the USA reported its first COVID-19 case," a Johns Hopkins engineering team launched a public dashboard that pulled together official reports from around the world. The team reports that by June 1, 2022 it had run for more than 30 consecutive months with 3.6 billion page views. The usage figures are the team's own, and the dashboard relied on government reporting underneath.
  Quote: "On Jan 22, 2020, a day after the USA reported its first COVID-19 case, the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) launched the first global real-time coronavirus surveillance system: the JHU CSSE COVID-19 Dashboard."
  URL: https://doi.org/10.1016/S1473-3099(22)00434-0
  Source label: Dong, Ratcliff, Goyea and colleagues 2022, The Lancet Infectious Diseases
  Grade: weak (the operators' own account, with no comparison). It is still a firsthand record of what was built and when, which is what a feasibility claim needs.

- Type: evidence (factual record), for **genx-pfas pr/1/cl/0** ("Residents who can report and sample find contamination before officials do.") Replaces cs/1. *Also covered by claim audit.*
  Headline: Tonawanda residents who sampled their own air found benzene, and the state's air study followed.
  Finding: Residents near the industrial strip in Tonawanda, New York built homemade "bucket brigade" air samplers and found high benzene. EPA writes that "their efforts were essential because they armed the New York State Department of Environmental Conservation (NYDEC) with enough information to fund a substantial community-wide air quality study". The state began that year-long study in July 2007 and measured an excess cancer risk from benzene of 75 in one million at the industrial monitor. After inspections and federal and state enforcement against Tonawanda Coke, benzene there fell 86 percent. This is an agency account of one community, and the residents' own sampling results were never published.
  Quote: "Their efforts were essential because they armed the New York State Department of Environmental Conservation (NYDEC) with enough information to fund a substantial community-wide air quality study"
  URL: https://www.epa.gov/sites/default/files/2015-06/documents/tonawanda.pdf
  Quote fetched from: https://www.epa.gov/sites/default/files/2015-06/documents/tonawanda.pdf
  Source label: US Environmental Protection Agency, Tonawanda E3 case study; New York State Department of Environmental Conservation, Tonawanda Community Air Quality Study fact sheet, October 2011 (https://extapps.dec.ny.gov/docs/air_pdf/tonfact1011.pdf)
  Grade: moderate (the state's monitoring confirmed what residents found; the order of events comes from an agency record)
  Note: The DOJ and Citizen Science Community Resources sources on the current card are not needed. The DEC fact sheet supports the July 2007 start, the 86 percent drop, and 75 in one million. I read its text but did not quote it here.

- Type: evidence (factual record), for **genx-pfas pr/2/cl/0** ("A statutory trigger turns a regulator's detection into public notice.") Replaces cs/0.
  Headline: California requires water systems to notify every customer within 30 days when state-ordered tests find PFAS above a health response level, unless they take the source out of use.
  Finding: The state water board can order utilities to test for PFAS. When a confirmed result tops the state's response level, the utility must take that source out of use or give public notice within 30 days. The law spells out how notice must reach people: "Mail or directly deliver notice to each customer receiving a bill", and also by email and on the utility's website. For other unregulated contaminants above a notification level, the 30-day notice goes only to local governing bodies. This is a record of what the law requires, not of how often it has produced notice.
  Quote: "Mail or directly deliver notice to each customer receiving a bill, including those that provide drinking water to others, and to other service connections to which water is delivered by the water system."
  URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116378.
  Quote fetched from: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116378.
  Source label: California Health and Safety Code 116378
  Grade: moderate
  Note: The trigger is testing the state ordered, not a research finding reaching a regulator, so the claim is only partly met. ce/0 still carries the limits. To avoid saying the same thing twice, ce/0's sentence about 116378 could be cut down to the shut-the-well escape.

- Type: evidence, for **genx-pfas pr/2/cl/1** ("Once the public knows, agencies respond within weeks.") Replaces cs/1.
  Headline: In Flint, the state switched the water back soon after residents' and doctors' lead results came out, after more than a year of ignored complaints.
  Finding: Flint residents reported red water, rashes, and hair loss from April 2014, and the authors write that "these warnings were either ignored or in some cases covered up". In summer 2015, citizen sampling with Virginia Tech found high lead, and a hospital team then showed rising lead in children's blood. The authors write: "That result, coupled with a later independent analysis by researchers at Hurley Medical Center demonstrating rising blood lead in some Flint children, led local medical authorities and, eventually, the State of Michigan to declare a water health advisory on October 1, 2015 and to switch back to Lake Huron water supplied by DWSD on October 15, 2015". Complaints alone did not move officials, but measured results that became public did. The account comes from the university team that ran the sampling, and the journal later attached an editor's note to the article.
  Quote: "That result, coupled with a later independent analysis by researchers at Hurley Medical Center demonstrating rising blood lead in some Flint children, led local medical authorities and, eventually, the State of Michigan to declare a water health advisory on October 1, 2015 and to switch back to Lake Huron water supplied by DWSD on October 15, 2015"
  URL: https://doi.org/10.5334/cstp.154
  Quote fetched from: https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154
  Source label: Roy and Edwards 2019, Citizen Science: Theory and Practice
  Grade: weak (one case, told by people who took part)
  Fit note: It fits only with a qualification. "The public knows" has to mean measured results made public, not complaints. The team may prefer this as counter-evidence. As written, the finding carries both sides.

## MOVE-TO-DESCRIPTION drafts

Each sentence is written to follow the existing description text and not repeat it.

1. **covid-schools pr/0**, from cs pr/0/cl/2/cs/0 (Irish assembly). Add after "the note lists the ways":
   "Ireland used this form on abortion law: a randomly selected citizens' assembly met from 2016 to 2017, and the bill put to voters in 2018 followed its recommendation rather than the parliamentary committee's."
   Source: Electoral Reform Society (https://electoral-reform.org.uk/the-irish-abortion-referendum-how-a-citizens-assembly-helped-to-break-years-of-political-deadlock/)

2. **covid-schools pr/1**, from pr/1/cl/4/cs/0 (Salt Lake City). Add at the end:
   "Salt Lake City tried councils with equal parent and teacher seats and broad authority in the 1980s, and principals still controlled the decisions that mattered."
   Source: Malen and Ogawa 1988, Educational Evaluation and Policy Analysis (https://doi.org/10.3102/01623737010004251)

3. **covid-vaccines pr/0**, from pr/0/cl/0/cs/0 (Taiwan). Add after "the agency must state what it does not yet know":
   "Taiwan's disease control agency held a press conference every day in 2020 and posted updates every day on a messaging app."
   Source: Yueh et al. 2022, Scientific Reports (https://doi.org/10.1038/s41598-022-20312-6). Checked in the full text: "held daily press conferences to communicate with the public about the COVID-19 situation, and they also used an official channel on Line, an instant messaging application, to release information every day".

4. **covid-vaccines pr/1**, from pr/1/cl/0/cs/0 (France collective). Add after "before acting":
   "France ran a version of this during its 2021 rollout: at the Prime Minister's request, the national economic and social council convened 35 citizens drawn by lot to advise on the vaccination campaign."
   Source: Missions Publiques (https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19). Checked: "35 citoyennes et citoyens ont été tiré-e-s au sort".

5. **covid-vaccines pr/1**, from pr/1/cl/0/cs/1 (Shin-Kori). Add after sentence 4:
   "In 2017, South Korea's president accepted a non-binding verdict from a randomly selected citizens' panel to resume building two nuclear reactors, reversing his own decision."
   Source: Participedia (https://participedia.net/case/6875). Checked: "President Moon accepted the verdict, reversing his prior decision".

6. **covid-vaccines pr/1**, from pr/1/cl/2/cs/0 (France 2016). Add after sentence 5:
   "France held a national vaccination consultation with a citizens' jury in 2016, and parliament extended infant vaccine mandates in 2017 on its steering committee's recommendation."
   Source: Lévy-Bruhl et al. 2018, Eurosurveillance (https://doi.org/10.2807/1560-7917.ES.2018.23.17.18-00048). *Also covered by claim audit.*

7. **genx-pfas pr/0**, from pr/0/cl/2/cs/0 (NASA ASRS). Add after the ombuds sentence:
   "Aviation has had such a channel since 1976, when the Federal Aviation Administration asked NASA to receive confidential safety reports because workers would not trust a system run by the regulator that enforces against them."
   Source: NASA ASRS (https://asrs.arc.nasa.gov/docs/rs/60_Case_for_Confidential_Incident_Reporting.pdf). Checked: "its regulatory and enforcement roles would discourage the aviation community from trusting and using the new program if the FAA were to operate the system". *Also covered by claim audit.*

8. **genx-pfas pr/3**, from pr/3/cl/1/cs/0 (Stillwater). Add after "paid by the responsible party or the state":
   "In Montana, a binding agreement has required a mining company since 2000 to pay for mining and water experts who advise local residents' councils."
   Source: World Resources Institute (https://www.wri.org/snapshots/community-benefits-snapshot-stillwater-good-neighbor-agreement). Checked: "requires the company to fund mining and water experts who advise the local organizations".

9. **genx-pfas pr/3**, from pr/3/cl/1/cs/1 (Superfund TAGs). Add after sentence 8:
   "The federal Superfund program already pays for technical advisors that communities near cleanup sites hire themselves."
   Source: GAO T-RCED-93-1 (https://www.gao.gov/products/t-rced-93-1)

10. **genx-pfas pr/4**, from pr/4/cl/0/cs/1 (NC PFAS Testing Network). Add after the February 2019 anchor sentence:
    "North Carolina's legislature answered the GenX discharge in 2018 by funding a statewide PFAS testing network run by university researchers, not by a local board."
    Source: NC PFAST Network final report (https://coastalreview.org/wp-content/uploads/2021/05/NC-PFAST-Network-Final-Report_revised_30Apr2021-1.pdf). Checked: "Five million thirteen thousand dollars ($5,013,000) in designated appropriation were provided in this legislation by the NCGA to the Collaboratory to fund the NC PFAST Network".

---

## Claims left with zero evidence cards after retirement

| Claim | Status now | After retiring cases | Filled by a CONVERT? |
|---|---|---|---|
| genx-pfas pr/2/cl/0, "A statutory trigger turns a regulator's detection into public notice." | 0 evidence, 1 counter, 4 cases | **Empty** | Yes, partly: the California HSC 116378 factual card (moderate). It shows the trigger exists for state-ordered PFAS tests, not for a research finding reaching a regulator. |
| genx-pfas pr/2/cl/1, "Once the public knows, agencies respond within weeks." | 0 evidence, 0 counter, 2 cases | **Empty** (both cases: one CIRCULAR, one CONVERT) | Yes, weakly: the Flint card (Roy and Edwards 2019, weak), which comes with a qualification. It would be the claim's only card of any kind. More evidence from outside the case is needed. |
| covid-schools pr/3/cl/4, "A voice before decisions reduces recalls and lawsuits after them." | 0 evidence, 1 counter, 0 cases | Empty (it was already empty, since it never had a case) | No. No case card bears on it. |

Claims at risk, not empty today:
- **genx-pfas pr/3/cl/0**: its only evidence card (ev/0, the C8 Science Panel) cites the same sources as the case timeline. If ev/0 is ruled circular, this claim is empty, and no case card fills it.
- **genx-pfas pr/1/cl/4**: its only evidence cards (ev/0 on the state response and blood levels, ev/1 on utility spending) both describe events in the GenX case itself. The same concern applies if the circular rule is extended to evidence cards.
- **covid-vaccines pr/4/cl/0**: after retirement it keeps one weak card (ev/0).

## Verification

I ran both reusable verifiers on this report.
- `verify-quotes.mjs`: all 7 CONVERT quotes matched.
  - Yuan 2020, Barbazza 2022, and Dong 2022 matched in Europe PMC abstracts.
  - Touchton and Wampler matched in OpenAlex.
  - Roy and Edwards 2019 and California HSC 116378 matched on the source pages.
  - The Tonawanda quote comes from a PDF. The JS checker marks those for manual checking, and the PDF checker confirmed it.
  - Every DOI returned 302.
- `verify-pdfs.py`: the Tonawanda EPA PDF quote matched.
