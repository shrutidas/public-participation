# COVID-19 Vaccine Mandates: Proposal Chain Analysis

Case: COVID-19 vaccine mandates (bounded 09/2021 federal mandate through 05/2023 end of the federal public health emergency; chain evidence runs 12/2020 forward). Four workshop proposals from the 6/8 session, each traced from intervention to the case's measured endpoints: vaccination uptake, preventable deaths among the unvaccinated (232,000 to 234,000 per the two estimates in the audited chain file), and the racial vaccination gap and its narrowing.

Sourcing notes. Two source classes appear below.

- **Chain file (audited)**: evidence already present in `/mnt/user-data/uploads/public-participation/js/chains/covid-vaccines.js`, which carries verbatim quotes verified in the project's earlier source audit. These items are cited as "chain file (audited), citing [source, year, URL]" and were not re-fetched here.
- **Fetched here**: sources fetched with WebFetch during this research pass. Quotes from these are verbatim from the fetched text. Where a primary journal page blocked fetching (403 or captcha), the accessible substitute actually fetched is the one cited, and the blocked primary is named as unfetched.

Grades. Strong = directly measured, specific, tightly connected to the link. Moderate = relevant and supportive but indirect, partial, or context-limited. Weak = speculative, analogical, or clearly confounded. UNSTUDIED = no study identified for the link itself.

---

## Proposal 1: Share everything, early and openly (attached to link V1)

Method: open data and public briefings. Workshop premise: if institutions adhere to a belief in the public's capability for rationality and share meaningful information, they might head off the worst of polarization.

### Chain, intervention to outcome

1. Officials publish local hospitalization and death data and brief frequently and early (from 12/2020) →
2. Trust in public health institutions holds instead of falling →
3. More people follow guidance and get vaccinated (MEASURED endpoint: uptake) →
4. Fewer preventable deaths among the unvaccinated (MEASURED endpoint: 232,000 to 234,000 baseline toll).

CONJECTURED (non-measured) impacts the workshop wanted: heading off polarization; recognition of the public's rationality; avoiding the substitution in which a newspaper performed the state's data function.

### Link table

**Link 1a. Transparency and frequent briefing → sustained institutional trust. Grade: Moderate, with a directional complication.**

Evidence:
- Petersen and colleagues, randomized studies with 13,000 Danish and American participants (PNAS 2021; primary PNAS page unfetchable, 403; reported via Aarhus University press release on EurekAlert, fetched, https://www.eurekalert.org/news-releases/829673). Transparent communication about negative vaccine features increased trust in health authorities; vague reassurance lowered both acceptance and trust and fed conspiracy beliefs. Quote (Petersen, from the release): "Openness ensures long-term trust, and this is crucial if we are to be revaccinated, or in relation to the next major health crisis." Grade: Strong for the trust effect (randomized), but note the same experiments found transparency about negatives "creates hesitancy," so the transparency arrow raises trust while lowering short-run acceptance. The chain's two first arrows can point in opposite directions.
- Chain file (audited), citing NPR 2022: CDC held only two public telebriefings in all of 2021. Establishes the counterfactual gap the proposal targets, not the effect of closing it. Grade as support for the link: Moderate.
- Chain file (audited), citing Scientific Reports 2022 and Chinese Journal of Communication 2022 on Taiwan: daily CECC briefings coincided with government sources scoring highest on credibility; correlational, single early-2020 survey, different national context. Grade: Weak.

Counter-evidence:
- CDC collected but did not publish booster effectiveness data for adults 18 to 49, hospitalization breakdowns by vaccination status, and wastewater surveillance for over a year, citing concern the public could misinterpret the findings (NACWA reprint of the New York Times report, 2022, fetched, https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects). This documents the failure the proposal names rather than contradicting the mechanism; it shows the agency itself judged transparency risky, and no study measures the trust cost of the withholding. Grade: Moderate as documentation, UNSTUDIED as to trust effect.
- Chain file (audited), citing RAND RR-A308-12: the 2020 trust decline was partisan (Trump voters minus 0.8, significant; Biden voters minus 0.3, not significant), so a transparency intervention aimed at the general public may not reach the population whose trust fell. Grade: Moderate.

**Link 1b. Institutional trust → uptake. Grade: Moderate (correlational); no causal test of raising institutional trust to raise uptake was identified. This is the project's known finding, and it held under search.**

Best available evidence:
- COVID-19 National Preparedness Collaborators (Bollyky et al.), The Lancet 2022, 177 countries and territories (Lancet full text unfetchable, 403; abstract fetched via University of Washington Political Science publication page, https://www.polisci.washington.edu/research/publications/pandemic-preparedness-and-covid-19-exploratory-analysis-infection-and; context via NPR 2022, fetched, https://www.npr.org/2022/02/06/1078634141/one-way-to-fight-the-pandemic-build-trust-in-the-government-and-each-other). Quote: "Measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates." Higher trust and lower corruption "were also associated with higher COVID-19 vaccine coverage among middle-income and high-income countries." The modeled counterfactual: raising government trust to the 75th percentile would have "reduced global infections by 12.9% (5.7–17.8)"; interpersonal trust to the same level, 40.3% (24.3–51.4). Grade: Moderate. Cross-national ecological association; the authors condition the counterfactual on the associations being causal.
- Chain file (audited), citing Behavioral Sciences 2022 (12 countries, 3,369 subjects): trust in public health institutions, not political leaders, consistently predicted compliance. Grade: Strong as correlation, per the file's audit.

Best available counter-evidence:
- Scientific Reports 2024, 2,885 US counties, weighted generalized additive models (fetched, https://www.nature.com/articles/s41598-024-54441-x): "Political affiliation, as determined by the proportion of votes received by the Republican candidate in the 2020 presidential election, has the strongest association" with county unvaccinated share as of December 2021, stronger than income, education, or information-environment variables. Partisan identity, not institutional trust as such, is the strongest US predictor. Grade: Strong (large-n, though associational).
- Chain file (audited), citing Prev Med Rep 2022: randomized trial of 4,190 unvaccinated adults found no support for tailored messages or endorsers reducing hesitancy, and a Fauci endorsement reduced stated intent among conservatives. Grade: Strong (randomized; intent outcome).
- Chain file (audited), citing BMC Public Health 2024: adding a personalized clinician recommendation to text outreach did not improve 90-day vaccination (11.5% vs 11.6%). Grade: Strong (randomized).
- A complication for the category boundary: Larsen et al., randomized ad experiment across 2,032 low-vaccination US counties, October 14 to 31, 2021, running a 27-second YouTube ad of Donald Trump endorsing COVID-19 vaccines (arXiv preprint of the study later published in Science Advances 2023; arXiv abstract fetched, https://arxiv.org/abs/2203.02625; Science Advances page unfetchable, 403). Quote: "Results indicate that the campaign increased the number of vaccines in the average treated county by 103," at "about $1 or less" per additional vaccine, roughly 104,000 doses total. A messenger intervention did move uptake causally, but the operative trust was partisan-congruent trust in a political figure, not trust in public health institutions. Grade: Strong for messenger-congruence effects; not evidence that institutional trust is the lever.

**Link 1c. Uptake → fewer preventable deaths. Grade: Strong (per audited chain file).**

Chain file (audited), citing Peterson-KFF (approximately 234,000 preventable adult deaths, June 2021 to March 2022) and European Journal of Epidemiology 2023 (at least 232,000, 95% CI 214,000 to 250,000). MEASURED endpoint.

### If only this one thing: when and where

December 2020 to January 2021, federal CDC, at the start of the vaccination program: commit to recurring public telebriefings and county-level open dashboards before the rollout's persuasion phase, and hold that cadence through 2021 (the year CDC held two telebriefings). The intervention is federal because the documented gap was federal: the county-level data vacuum that the NYT, JHU CSSE, and the COVID Tracking Project filled (chain file, audited), and the withheld booster and hospitalization data of 2021 to 2022 (NACWA/NYT 2022, fetched). A second, earlier candidate (the February 2020 test failure) predates the case's bounded window.

### Comparable real-world interventions

1. Taiwan CECC daily briefings and Line-app case updates, 2020 (chain file, audited; correlational credibility findings, confounded national context).
2. NYT, JHU CSSE, and the COVID Tracking Project, 2020 to 2023 (chain file, audited): the substitution proof that the function was performable at scale; the Times ended it in 2023 when agencies reported "less frequently and less reliably."
3. CDC's own wastewater dashboard, launched 2022 after more than a year of unpublished data (NACWA/NYT 2022, fetched): late adoption of the proposal's mechanism, no trust outcome measured.

---

## Proposal 2: Public deliberation before any mandate (attached to link V5)

Method: citizens assembly / mini-public, convened on the value tradeoff rather than the science, with decentralized decisions and regional variation accepted ("some places might decide not to vaccinate; so be it").

### Chain, intervention to outcome

1. A mini-public deliberates on mandate tradeoffs before any mandate issues (mid-2021) →
2. The eventual mandate decision is perceived as more legitimate, especially by low-trust citizens →
3. Compliance rises or backlash falls relative to a mandate imposed without deliberation →
4. Uptake rises (MEASURED endpoint) →
5. Preventable deaths fall (MEASURED endpoint).

CONJECTURED (non-measured) impacts the workshop wanted: political legitimacy of science; avoiding the authority fight that ran through courts and the Senate; regional self-determination as a valued output in itself. Note that step 3 in the workshop's own framing is not guaranteed to point toward uptake: an assembly may recommend against mandating, and the workshop accepts that outcome.

### Link table

**Link 2a. Deliberation before the decision → perceived legitimacy of the decision. Grade: Moderate.**

Evidence:
- Germann, Marien, and Muradova, Political Studies 2024, survey experiment in Ireland, N=1,309, December 2020 to January 2021 (fetched, https://journals.sagepub.com/doi/10.1177/00323217221137444). Mini-public involvement raised perceived procedural fairness by 0.7 points (27% of a standard deviation) and decision acceptance by 0.4 points. Quote: "Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored." Also: "The legitimacy-generating effects of mini-publics are driven by citizens with low political trust." Grade: Moderate. Survey experiment on a hypothetical (universal basic income), not vaccination; perceptions, not behavior.

Counter-evidence:
- The same experiment: the legitimacy gain largely disappears when the mini-public's recommendation is rejected. For a government that intends to mandate regardless, convening an assembly whose recommendation it may override carries a measured legitimacy downside. Grade: Moderate (same design limits).

**Link 2b. Perceived legitimacy → compliance with the mandate / reduced backlash. UNSTUDIED for vaccine mandates.** No study was identified testing whether a deliberative process convened before a mandate changes subsequent compliance or uptake, matching the chain file's existing gap note. Adjacent evidence on the backlash question, both directions:

Evidence against a large backlash:
- Albarracin and colleagues, Scientific Reports 2021, four studies including a preregistered experiment, N=606 nationally representative (fetched, https://www.nature.com/articles/s41598-021-00256-z). Quote: "Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance." Intentions, not behavior. Grade: Moderate for this link (it addresses reactance to requirements, not the legitimacy mechanism).
- Houston Methodist, first large hospital mandate, June 2021: 153 of roughly 25,000 employees resigned or were terminated; 24,947 complied; the federal court dismissed the challenge (Texas Tribune 2021, fetched, https://www.texastribune.org/2021/06/23/texas-hospital-houston-methodist-vaccine-employees-fired-resign/; Judge Hughes: "This is not coercion. Methodist is trying to do their business of saving lives without giving them the COVID-19 virus."). Grade: Moderate (single employer, healthcare setting).

Evidence for costs of mandating without authorization:
- Rains et al., PNAS 2024 (PNAS and PMC pages unfetchable, 403/captcha; abstract fetched via University of Arizona profiles page, https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/). Quote: "COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates," while mandate states later showed "lower levels of COVID-19 booster adoption as well as adult and child flu vaccination, especially when residents initially were less likely to vaccinate for COVID-19." Grade: Moderate (state-level observational; a published PNAS reply letter contesting the analysis, "US states that mandated COVID-19 vaccination see higher, not lower, take-up," could not be fetched and is not summarized here: unfetched).
- Bardosh et al., BMJ Global Health 2022 (fetched via University of Toronto repository record, https://utoronto.scholaris.ca/items/1a7323a4-fb67-4056-808f-91ab5a5585e5). Quote: "Current mandatory vaccine policies are scientifically questionable and are likely to cause more societal harm than good." Grade: Weak for this link. Narrative policy analysis, not an empirical study.

**Link 2c. Mandate → uptake. Grade: Strong outside the US, contested inside it.**

- Chain file (audited), citing Nature Human Behaviour 2022: mandate announcements associated with a 66% increase in weekly first doses; cumulative gains up to +5 points (Canada), +8 (France), +12 (Italy), +4.7 (Germany). Grade: Strong (difference-in-differences).
- Counter-evidence: Rains et al., PNAS 2024, as above: no detectable change around US state mandate implementation. The jurisdictional split (national mandates with enforcement teeth abroad vs heterogeneous US state mandates amid litigation) is itself unstudied.

**Link 2d. Uptake → preventable deaths. Grade: Strong (chain file, audited; same as Link 1c).**

### If only this one thing: when and where

June to August 2021, federal, before the September 9, 2021 mandate announcement. The timeline fixes the window: daily initiations began declining after the April 2021 eligibility expansion; Gallup found majority support for requirements in various settings before September 9 (timeline, audited); OSHA drafted the ETS September to November. A mini-public convened in June 2021 and reporting by late August would have preceded both Executive Order 14043 and the ETS, the two instruments the Senate (December 8, 2021, 52 to 48) and the Supreme Court (January 13, 2022) later cut down. A state-level alternative with a live decision point: New York City's municipal workforce mandate of November 1, 2021, announced in October with roughly two weeks of notice and litigated by police unions rather than deliberated (timeline, audited).

### Comparable real-world interventions

1. France, Collectif citoyen sur la vaccination: 35 randomly selected citizens, January 16 to June 2021, seven working sessions of 2.5 days answering questions from the Health Ministry and vaccination steering council, including on mandates (Missions Publiques project page, fetched, https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19). The page reports outputs and process; no measured outcome or evaluation of effects on uptake, trust, or the July 2021 pass sanitaire was identified. The one national case of deliberation running alongside a vaccination campaign remains outcome-unevaluated.
2. Ireland survey experiment (Germann et al. 2024, fetched, above): the closest thing to a measured outcome for the mechanism, in perception space only.
3. UK, Ada Lovelace Institute rapid deliberation on vaccine passports: 15-member multidisciplinary expert panel chaired by Jonathan Montgomery, two weeks, reported February 17, 2021, concluding rollout was "not currently justified" because "vaccination status does not offer clear or conclusive evidence about any individual's risk to others via transmission" (fetched, https://www.adalovelaceinstitute.org/report/covid-19-vaccine-passports/). Expert rather than citizen deliberation; no measured policy outcome reported.

---

## Proposal 3: Let communities design how vaccines reach them (attached to link F2)

Method: community advisory and co-design of delivery: siting of mobile units, hours, locations, paid-time-off coordination. The chain file already identifies this as the proposal resting on the strongest causal evidence, with the open question being who chooses the sites, not whether sites work.

### Chain, intervention to outcome

1. Affected communities decide where and how vaccination is delivered (from 02/2021) →
2. Access infrastructure lands where the barriers actually are (distance, hours, work schedules, documentation fear) →
3. Uptake rises in high-vulnerability communities (MEASURED endpoint) →
4. The racial vaccination gap narrows earlier than it did (MEASURED endpoint: the gap fell from 14 points in April 2021 to 5 by July 2022, chain file, audited) →
5. Fewer preventable deaths, including the never-estimated excess minority deaths from the spring 2021 lag (MEASURED in aggregate; the racial decomposition is UNSTUDIED per the chain file's gap note).

CONJECTURED (non-measured) impacts the workshop wanted: community ownership and standing infrastructure for the next emergency.

### Link table

**Link 3a. Community co-design → correctly placed access infrastructure. UNSTUDIED as an isolated component; bundled evidence Moderate.**

Evidence:
- Protect Chicago Plus, 13 high-vulnerability zip codes, launched January 25, 2021 (Johnson et al., Public Health Reports 2023, fetched, https://journals.sagepub.com/doi/full/10.1177/00333549221143093). Quote on the co-design element: "The city worked with each prioritized community to create a neighborhood task force composed of diverse representatives to design vaccine outreach and distribution strategies." Outcome: before the program, target zip codes gained coverage at 0.10% per day vs 0.19% elsewhere; after implementation "PCP zip codes had an additional coverage per day of 0.42% as compared with 0.27% for non-PCP zip codes," and the vaccination rate ratio moved from 0.58 to 0.92 between February 5 and March 29, 2021. Grade: Moderate. No randomization, first doses only, concurrent eligibility expansions; co-design is bundled with supply prioritization, so the design component is not isolated.
- Unidos en Salud, San Francisco Mission District (Marquez et al., PLOS ONE 2021, fetched, https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111): the "Motivate, Vaccinate, and Activate" strategy was built by a community-academic-public health partnership including the Latino Task Force; 20,792 doses, 11,098 unique people, 70.5% Latinx, 98.4% second-dose completion, 58.3% reporting the site let them vaccinate earlier. The authors state the isolation problem directly: "As with most multi-component interventions, we are unable to fully disentangle the relative effects of the different components and subcomponents of the overall strategy." A diffusion finding relevant to F4's knowledge mediator: "91.0% said that after their vaccination experience, they had personally reached out to at least one unvaccinated person they knew to recommend getting vaccinated." Grade: Moderate for reach, UNSTUDIED for the co-design component's causal contribution.
- Tribal self-governance as delivery co-design: in November 2020 tribes chose between state allocation and the Indian Health Service, and many chose IHS to keep control of prioritization (elders, language keepers, teachers). By July 6, 2021 American Indian and Alaska Native people had the highest vaccination rate of any group: 45.5% with at least one dose and 39.1% fully vaccinated, vs 33.7% and 32.2% for White Americans (PBS NOVA 2021, fetched, https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/). Quote: "People knew they didn't have to be hemmed in by those phases. You can't blame them. That's their right as a tribal citizen." Grade: Moderate. Observational, confounded by IHS supply channel and community cohesion, but it is the one US case where the deciding community held formal authority rather than advisory status, and the group outcome led the nation.

Counter-evidence:
- No study was identified comparing community-chosen siting against agency-chosen siting holding supply constant. The component remains UNSTUDIED in isolation.

**Link 3b. Access infrastructure → uptake. Grade: Strong (chain file, audited).**

- Chain file (audited), citing PNAS Nexus 2023 (distance-uptake association negative in 98% of 6,096 specifications) and the Swiss mobile-vaccination cluster RCT (12.8% vs 3.8%, a 9.0 point, 3.4x effect). The largest measured uptake effects in the record run through access, not persuasion.

**Link 3c. Equitable uptake → the racial gap narrows. Grade: Moderate, with strong counter-evidence on attribution.**

- Chain file (audited), citing MMWR 2022: by end of November 2021, at-least-one-dose coverage was similar across groups (Black 78.2%, Hispanic 81.3%, White 78.7%), though administrative data still showed a 5-point gap in July 2022.
- Counter-evidence, chain file (audited), citing the Annenberg Public Policy Center panel: of five tested explanations for the Black-White narrowing, only knowledge about safety and efficacy mediated it; "neither differential access nor media use explained the increase." If access did not mediate the observed narrowing, then a co-design proposal justified by the narrowing inherits an attribution problem, even though the access-to-uptake link (3b) is the best-measured link in the case. The reconciliation, untested, is timing: the access evidence concerns spring 2021 uptake speed, while the Annenberg panel spans April 2021 to July 2022.

**Link 3d. Uptake → deaths, racial decomposition. UNSTUDIED.** The chain file's gap stands after search: no estimate of excess minority deaths attributable to the spring 2021 vaccination lag was identified.

### If only this one thing: when and where

February 2021, city and county level, at the launch of the Federal Retail Pharmacy Program and the federal Community Vaccination Centers, when scarce supply was being sited: hand siting and scheduling authority for the equity allocations to neighborhood task forces on the Protect Chicago Plus model (launched January 25, 2021, so the model existed in time). The decision point recurs in April 2021, when eligibility opened to all adults and initiation began declining (timeline, audited): that is the month the binding constraint shifted from supply to access logistics, the constraint co-design addresses. The NBC News finding in the chain file (Cleveland's federal site delivering nearly 3 of 4 doses to White recipients in a 33.8% White city) marks the specific failure the intervention would have targeted.

### Comparable real-world interventions

1. Protect Chicago Plus, Chicago, January to March 2021 (fetched, above): measured coverage acceleration, rate ratio 0.58 to 0.92.
2. Unidos en Salud, San Francisco, February to May 2021 (fetched, above; also in chain file): measured reach and completion, self-reported earlier vaccination.
3. Tribal IHS-route vaccination, nationwide, from December 2020 (fetched, above): highest group-level vaccination rate in the country by mid-2021.

---

## Proposal 4: Fund evaluation alongside the programs (attached to link F3)

Method: built-in program evaluation as a condition of every community-engagement award, so roughly $1.1 billion in participation infrastructure does not persist in the record only as dollar figures and dose counts.

### Chain, intervention to outcome

1. Evaluation funding and a counterfactual design are conditions of each award (03/2021, award terms) →
2. Effect estimates exist for community engagement, outreach, and equity programs (MEASURABLE: whether evaluations occur and report) →
3. Later allocation within the pandemic, and in the next emergency, shifts toward instruments with measured effects (CONJECTURED) →
4. Uptake rises relative to unevaluated allocation (CONJECTURED as to magnitude; the endpoint itself is MEASURED) →
5. Preventable deaths fall (MEASURED endpoint class).

This proposal is meta-level: its direct product is evidence, and every downstream impact is conditional on someone acting on the evidence. The workshop's stated wants here (the 6/8 question, "what information is already available, and is it used by and shared with the public?") are process goods; label the accountability outcome CONJECTURED.

### Link table

**Link 4a. Requiring evaluation → evaluations actually produced. Grade: Moderate (feasibility demonstrated; the requirement itself untested in this program class).**

Evidence:
- GSA Office of Evaluation Sciences vaccination portfolio (fetched, https://oes.gsa.gov/vaccines/): a standing portfolio of randomized evaluations embedded in federal program delivery with OIDP, the VA, and state health departments, samples "in many cases over 55,000 recipients," measured on administrative data. Demonstrates that embedded randomized evaluation inside federal health programs is administratively feasible at scale. Grade: Moderate (feasibility evidence, different program types).
- Chain file (audited), citing DHS OIG-22-74: FEMA "cannot accurately identify and target resources to underserved and marginalized communities" without a system of records. The absence the proposal fixes, documented by an oversight body. Grade: Strong as documentation of the gap.
- GAO-22-104457 (fetched, https://www.gao.gov/products/gao-22-104457): CDC and HRSA intended after-action reviews of vaccine distribution and communication but had not finalized plans, and state and local officials "had little to no information about how the federal doses were allocated." GAO recommended feedback loops with state and local officials. Grade: Moderate.

Counter-evidence:
- None identified against feasibility. The relevant null is the record itself: per the chain file's audited gap note, no published outcome evaluation of the $323M CBO, $250M local government, or $500M community health worker line items was identified, and this research pass found none either.

**Link 4b. Evidence exists → decisions change. UNSTUDIED in this context.** One supportive mechanism finding: the OES portfolio's headline lesson is that "behaviorally-informed direct communications can increase vaccination rates at scale but may have smaller, less reliable effects than the published literature suggests" (fetched, above). Embedded evaluation corrected an optimistic published literature, which is the epistemic service the proposal buys. Whether any agency reallocated because of it was not identified. The HHS "We Can Do This" media campaign evaluations (Journal of Health Communication 2023 and 2024) could not be fetched (403) and are not characterized here: unfetched.

**Links 4c and 4d. Reallocation → uptake → deaths. CONJECTURED.** No study can exist yet for a policy that was not adopted; the links are conditional on 4a and 4b.

### If only this one thing: when and where

March to April 2021, HHS, in the award terms of the American Rescue Plan community engagement funding: the $323M to 150 community-based organizations, $250M to 73 local governments, and $500M for community health workers (chain file, audited). Award conditions are set once, at obligation; that is the single point where an evaluation requirement could have been attached without new authority. A second-best point: mid-2021, pairing the NIH CEAL expansion with prospective matched-county designs rather than the retrospective matching later published (chain file, audited, AJPH 2024).

### Comparable real-world interventions

1. GSA Office of Evaluation Sciences vaccination portfolio (fetched, above): randomized evaluations embedded in Medicare, VA, and state programs; example measured effects of 0.27 and 0.7 percentage points from letter and postcard reminders.
2. Chain file (audited): the Nature 2024 CVS megastudy (text reminders, 3.66 million patients, +1.05 points on boosters) as evaluation run inside a delivery system at full scale.
3. GAO and DHS OIG after-action review machinery (fetched and chain file respectively): the existing federal evaluation mechanism, which fired late and without finalized plans.

---

## Mechanisms that should have worked

Existing oversight and participation mechanisms, the timeline events where each should have fired, the failure mode (didn't know / knew but didn't act / acted without effect / no mechanism existed), and efficacy ratings for participation that did occur.

1. **ACIP public comment.** Mechanism: meetings open by webcast, written comments to a regulations.gov docket, oral comments limited to 3 minutes per speaker with a lottery when oversubscribed (CDC ACIP meetings page, fetched, https://www.cdc.gov/acip/meetings/index.html). Should have fired: 12/2020 (EUA recommendation, ACIP 11 to 0, timeline) and 09/2021 (boosters). Failure mode: **acted without effect**, and the ceiling on effect is visible one level up: on September 23, 2021 ACIP voted down boosters for occupational-risk adults (6 in favor, 9 against per STAT's account) and CDC Director Walensky overruled the committee within hours ("I know that if I had been in the room voting, I would have voted to offer boosters to that group," STAT 2021, fetched, https://www.statnews.com/2021/10/07/cdc-director-defends-decision-to-overrule-expert-panel-on-covid-booster-shots-for-health-workers/). Where the statutory advisory committee's own vote did not bind, the 3-minute public comment behind it had no path to effect.

2. **FDA VRBPAC advisory meetings.** Should have fired: 12/2020 (EUA), 08/2021 (full approval, timeline), 09/17/2021 (boosters). On boosters it fired: VRBPAC voted 16 to 2 against boosters for everyone 16 and older, then 18 to 0 for ages 65+ and high risk (Healio 2021, fetched, https://www.healio.com/news/infectious-disease/20210917/fda-committee-votes-against-blanket-recommendation-for-covid19-vaccine-boosters; committee reasoning: "current evidence does not ... appear to show a need for boosting in the general population"). FDA's authorization tracked the narrowed recommendation, then the occupational category was widened at the CDC step. Failure mode: **acted with partial effect**. Of the case's advisory mechanisms, the one that most visibly constrained a federal decision.

3. **OSHA notice-and-comment rulemaking.** Should have fired: 11/2021 ETS. It fired in form only: the ETS was "effective November 5, 2021" upon publication while simultaneously serving "as a proposal under Section 6(b) of the OSH Act for a final standard," with written comments due December 6, 2021 (Federal Register 2021, fetched, https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard). 122,485 comments were filed against a rule already in force, which the Supreme Court stayed on January 13, 2022 before any final standard issued. Failure mode: **acted without effect**; the emergency instrument sequenced participation after the decision.

4. **Congressional review.** Fired: Senate disapproval resolution, 52 to 48, December 8, 2021 (chain file, audited). Failure mode: **acted, effect indirect**; the vote did not repeal the rule but entered the legitimacy record the Court's majority drew on (timeline entry: one chamber "had affirmatively rejected the agency rule").

5. **Courts.** Fired repeatedly: Does v. Mills (11/2021, stay refused), NFIB v. OSHA (stay granted), Biden v. Missouri (CMS mandate allowed), all in the audited timeline and chain file; Bridges v. Houston Methodist dismissed at district level (Texas Tribune 2021, fetched). Failure mode: none; **the mechanism that resolved the authority contest**, which is the chain file's V5 point: resolution ran judicial, not deliberative.

6. **Union collective bargaining.** Fired: October 2021 police and municipal union litigation over uncollectively-bargained mandate terms (chain file, audited; effect coded partial). Failure mode: **acted with partial effect**, and asymmetrically: bargaining gave binding voice only to unionized workforces; the 84 million workers under the ETS had no equivalent channel.

7. **Tribal consultation and self-governance.** Fired early and worked: the November 2020 IHS-versus-state allocation choice let tribal governments set their own prioritization, and the population outcome led all groups by July 2021 (PBS NOVA 2021, fetched). Failure mode: none within its jurisdiction; the case's clearest instance of participation with formal authority producing a measured favorable endpoint.

8. **City councils and local legislative bodies.** Should have fired: October to November 2021 municipal workforce mandates (New York City's November 1 deadline, timeline). The timeline and chain file record mayoral and health-authority orders contested by unions and courts; no city council deliberation appears anywhere in the case record. Failure mode: closest to **no mechanism existed** (as exercised, mandate authority ran through executives and health officials; whether councils could have asserted jurisdiction was not researched here and is flagged below).

9. **Federal data transparency obligations.** Should have fired: continuously, 2021 to 2022. CDC collected booster effectiveness, hospitalization-by-vaccination-status, and wastewater data and did not publish them for over a year (NACWA/NYT 2022, fetched). Failure mode: **knew but didn't act**.

### Efficacy of participation events that did occur in the timeline

- NYT / JHU CSSE / COVID Tracking Project (01/2020 to 2023): high efficacy as substitution; coded "moved" in the audited chain file; no measured trust consequence (file gap stands).
- Student protests against university mandates (05/2021): no documented policy reversal in the case record; low efficacy on the record available.
- Mass religious-exemption filings and litigation (11/2021): partial; forced Title VII and Jacobson interpretation, lost at the Supreme Court on Maine's no-exemption mandate (Does v. Mills, timeline).
- Police union suits (10/2021): partial (chain file coding); secured process (exemption timelines) rather than reversal.
- Retail and trucking associations lobbying to delay the ETS past the holidays (10/2021, timeline): the published ETS set compliance dates in January; whether lobbying caused that timing was not established here.
- OSHA docket comments, 122,485 (11/2021): no effect; the rule died before any final standard could reflect them (Federal Register 2021, fetched; SCOTUS stay, chain file).
- ACIP/VRBPAC oral public comment (12/2020, 09/2021): no instance identified where a public comment changed a vote; the advisory votes themselves were partly overridden (STAT 2021, fetched).

---

## Questions for the lead researcher

1. Petersen (PNAS 2021, fetched via the Aarhus release) finds transparency raises trust while lowering short-run acceptance. Proposal 1's chain assumes both arrows point the same way. Should the chain carry an explicit acceptance-dip cost at link 1a, and which endpoint governs the proposal's success, trust or uptake?
2. Proposal 2's workshop framing accepts regional opt-outs ("some places might decide not to vaccinate; so be it"). Germann et al. 2024 additionally shows legitimacy gains evaporate when recommendations are rejected. Should the proposal be scored on the uptake/death endpoints at all, or on a legitimacy endpoint the case never measured? This changes whether its chain terminates MEASURED or CONJECTURED.
3. Rains et al. (PNAS 2024) finds US state mandates produced no detectable uptake change and depressed later booster and flu uptake, against the chain file's Nature Human Behaviour 2022 Canada/Europe estimates. A PNAS reply letter contesting Rains could not be fetched (captcha). Which jurisdictional evidence should govern the V5 strength call, and should the reply be obtained through library access before deciding?
4. The Larsen Trump-ad experiment (arXiv, fetched; Science Advances 2023) is a randomized, large-n messenger intervention that raised uptake at about $1 per dose. Does the project's "trust intervention" category include partisan-congruent messengers? If yes, the headline finding "no causal evidence that trust interventions raised uptake" needs a carve-out; if no, the category boundary should be stated in the chain file.
5. The fair-chain mortality quantity (excess minority deaths from the spring 2021 lag) remains unestimated after this pass. Should the project commission or perform that estimate as original analysis rather than continuing to search for it?
6. The French Collectif citoyen is the only national deliberation-during-rollout case found, and it has process documentation but no outcome evaluation. Does it qualify as a comparable under the project's measured-outcomes standard, or should comparables for proposal 2 be limited to the Irish survey experiment?
7. For mechanism 8 (city councils), the "no mechanism existed" coding rests on absence from the case record, not on legal research into municipal charter authority. Confirm whether that coding is acceptable or should be downgraded to "not researched."
8. The tribal case couples participation with formal allocation authority and a supply channel (IHS). If it is used as support for proposal 3, the confound between authority, supply, and community cohesion should be acknowledged; a human call is needed on whether it belongs under co-design or under a separate "devolved authority" category.
