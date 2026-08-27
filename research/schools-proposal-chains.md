# COVID-19 School Closures: Proposal Chain Research

Case: COVID-19 school closures and reopenings. This document takes the five
proposals in `js/chains/covid-schools.js` (all from the 6/8 workshop), writes
out each proposal's causal chain to the case's measured endpoints, grades the
evidence for each link, identifies the timeline intervention point, lists
real-world comparables, and audits the participation mechanisms that already
existed.

## Sourcing note

Two tiers of citation appear below.

- **Fetched (this pass):** sources retrieved with WebFetch during this
  research pass. Each carries a verbatim quote from the fetched text.
- **Chain file (not re-fetched):** evidence already documented, quoted, and
  audited inside `js/chains/covid-schools.js`. These are labeled
  "chain file, not re-fetched" and no new quote is claimed for them here.

Measured endpoints for this case, as anchored in the chain file's outcome
paragraph: public school enrollment (Dee et al. 2021; NCES), chronic
absenteeism (RAND 2025; AEI 2025), Gallup confidence in public schools
(28% in 2022, 29-point partisan gap), and NAEP age-9 scores (down 5 points
reading, 7 points mathematics, 2020 to 2022). The enrollment endpoint was
re-verified by fetch in this pass: the NBER abstract for Dee, Huffaker,
Phillips, and Sagara (w29156, 2021) states that "remote-only instead of
in-person instruction reduced enrollment by 1.1 percentage points," with
effects "concentrated in kindergarten and, to a lesser extent, elementary
schools" (https://www.nber.org/papers/w29156, fetched).

Grading scale: Strong = directly measured, specific, tightly connected to the
link. Moderate = relevant and supportive but indirect, partial, or
context-limited. Weak = speculative, analogical, or clearly confounded.
UNSTUDIED = no study identified for the link; recorded as a finding.

---

## Proposal 1: Regional citizen assemblies that can decide

Method: citizens assembly (sortition, confederal), convened March to June
2020, with binding or quasi-binding decisions. Attached to link S1 in the
chain file.

### If only this one thing: when and where

May to June 2020, at the state level, with the assembly's remit fixed on the
fall 2020 instructional-mode decision. The timeline shows the window: closures
were near-total by late March 2020, and by September 2020, 48 states had
delegated modality to districts, where bargaining strength and partisanship
then drove outcomes. Michigan is the natural jurisdiction: Executive Order
2020-88 (May 15, 2020) already created an appointed advisory council, so the
counterfactual is the same body selected by sortition and given a
quasi-binding remit over the Return to School Roadmap that shaped fall 2020.
An assembly seated after August 2020 misses the decision it exists to make;
the actual Michigan sortition panel (November 2020) demonstrates the failure
mode.

### Causal chain and evidence

Endpoints: enrollment (MEASURED), chronic absenteeism (MEASURED), Gallup
confidence in schools (MEASURED). Workshop-desired but non-measured impacts:
depolarization of the decision, cross-regional learning (CONJECTURED).

| # | Link | Evidence | Counter-evidence | Grade |
|---|------|----------|------------------|-------|
| 1.1 | A sortition assembly can be convened and reach recommendations fast enough to decide fall 2020 modality | The Ada Lovelace Institute, with Traverse, Involve, and Bang the Table, "conducted rapid, online deliberation with 28 members of the public on COVID-19 exit strategies" "throughout May 2020, while the UK was in lockdown," producing "four strong steers on how to build COVID-19 technologies with legitimacy" (Ada Lovelace Institute, 2020, https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/, fetched). Moderate: rapid online deliberation on a pandemic topic existed by May 2020, but with 28 participants and no decision power. | Reference-class timing runs long. The French Citizens Convention for Climate ran October 2019 through June 2020, nine months (Wikipedia, Citizens Convention for Climate, fetched). The Irish Citizens' Assembly on the Eighth Amendment "deliberated over five sessions from November 2016 until April 2017" (Electoral Reform Society, 2018, https://electoral-reform.org.uk/the-irish-abortion-referendum-how-a-citizens-assembly-helped-to-break-years-of-political-deadlock/, fetched). The OECD's stocktake of "close to 300 representative deliberative practices" describes processes convening "for at least one full day - and often much longer" (OECD, 2020, https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en/full-report/component-8.html, fetched). Moderate. | Moderate for feasibility of convening; the compressed timeline is the binding constraint |
| 1.2 | A binding or quasi-binding remit gives non-union stakeholders force comparable to collective bargaining, so the assembly's decision, not the bargained one, sets modality | UNSTUDIED for school reopening: the chain file's own gap note records that no US district ran a structured deliberative process with a binding or quasi-binding remit on reopening. | The nearest real case of a "binding-adjacent" pledge eroded under pressure: in France, "Emmanuel Macron promised to implement 146" of the convention's 149 proposals, yet "the subsequent parliamentary bill incorporated only an estimated 40% of proposals," and members "gave the government an average rating of a 3.3/10 for its consideration of the proposals" (Wikipedia, Citizens Convention for Climate, https://en.wikipedia.org/wiki/Citizens_Convention_for_Climate, fetched). Moderate, analogical (climate policy, national scale). | UNSTUDIED |
| 1.3 | An assembly process raises perceived legitimacy of the decision among the wider public | Germann, Marien, and Muradova (Political Studies, 2024), survey experiment in Ireland (N=1,309, December 2020 to January 2021): "Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored." Fairness perceptions rose 0.7 points (27% of a standard deviation) (https://journals.sagepub.com/doi/10.1177/00323217221137444, fetched). Strong for the perception outcome, context-limited (Ireland, universal basic income vignette). Collins (APSR, 2021) found in a video-exposure experiment that "viewing the more participatory and deliberative school board meetings led to increased trust in local officials and a stronger willingness to attend school board meetings in the future" (Brown University Watson Institute summary, https://home.watson.brown.edu/news/2021-08-06/does-meeting-style-matter-effects-exposure-participatory-and-deliberative-school, fetched). Moderate, and notably in the school-governance domain. | The same Germann et al. experiment: when recommendations were rejected, the acceptance effect became statistically insignificant, and referendums outperformed mini-publics on both fairness (57% vs 27% of SD) and acceptance (45% vs 14% of SD). Strong internal qualification: the legitimacy gain is conditional and modest. | Moderate overall; effects are real in experiments, modest, and conditional on the recommendation being honored |
| 1.4 | Higher perceived legitimacy reduces exit (enrollment), reduces absenteeism, and holds confidence in schools | UNSTUDIED for schools. No study was identified that treats perceived decision legitimacy as a cause of enrollment, attendance, or school-confidence outcomes. Nearest analog: Walters and Bolger (Journal of Experimental Criminology, 2019), meta-analysis of 64 studies and 196 effect sizes in the policing domain, conclude "legitimacy beliefs are instrumental in promoting compliance with the law," while the procedural justice effect on compliance "was relatively weak in this meta-analysis" (https://link.springer.com/article/10.1007/s11292-018-9338-2, fetched). Weak, analogical (law compliance, not schooling behavior). Jacob (2024) documents the exit-voice correlation (5% enrollment decline predicting 16.4% turnout increase) but does not test legitimacy as mediator (chain file, not re-fetched). | The chain file's S4 counter-evidence cuts against the premise that parents perceived illegitimacy contemporaneously: Singer et al. (2023) found parents "typically supportive of how schools were handling it" in 2020-21, and PDK local school grades did not fall through 2022 (chain file, not re-fetched). If contemporaneous parent-perceived legitimacy did not collapse, a legitimacy-repairing intervention has a smaller target than the proposal assumes; the damage shows up in partisan, systemic measures with a lag. | UNSTUDIED (the load-bearing link) |

### Verdict-free summary of the chain

The chain is well evidenced at the perception link (1.3), unstudied at both
the binding-remit link (1.2) and the behavior link (1.4), and time-constrained
at the convening link (1.1). The measured endpoints connect to the proposal
only through two consecutive unstudied links.

---

## Proposal 2: Bring the right experts together with the public

Method: minipublic with mapped expertise (ventilation and building design,
epidemiology, early-childhood education, mapping of ventilated public spaces).
Attached to link S1.

### If only this one thing: when and where

April to July 2020, district or county level, in the large urban districts
that later chose remote-only fall starts (Detroit, San Francisco, Los
Angeles, Chicago). The decision it touches is the fall 2020 modality choice
plus the building-safety investment decisions (ventilation upgrades, outdoor
space use, prioritizing the youngest grades) that determined what "safe
reopening" could mean. The timeline's January 2021 entry (evidence that
in-person schooling with mitigation was not typically associated with rapid
spread) arrived after the fall decision; this proposal is in effect a machine
for generating that January 2021 knowledge, locally, six months earlier.

### Causal chain and evidence

Endpoints: test scores (MEASURED, NAEP and state assessments), enrollment
(MEASURED), absenteeism (MEASURED via remote-exposure dose-response).
Workshop-desired non-measured impacts: trust in experts maintained, local
knowledge (spaces, family conditions) entering the option set (CONJECTURED).

| # | Link | Evidence | Counter-evidence | Grade |
|---|------|----------|------------------|-------|
| 2.1 | Structured early engagement between mapped experts and the public expands the option set beyond the open/closed binary | Analogical only. Texas deliberative polls with eight electric utilities in the 1990s: "The survey results suggested that ratepayers might even be willing to pay extra to encourage the companies to rely less on non-renewable sources of energy," followed by the 1999 renewable portfolio standard (National Civic League, https://www.nationalcivicleague.org/ncr-article/deliberative-polling-and-the-rise-of-wind-power-in-texas/, fetched). Weak-to-Moderate, different domain, but a documented case of expert-public deliberation surfacing an option (paying for renewables) that standard preference polling had not. | Singer et al. (2023) document the actual 2020 pattern: district leaders imported generic public health authority ("I need professionals and subject matter experts to tell us, 'These are the guidelines'") rather than mapping decision-specific expertise (chain file, not re-fetched). No study was identified testing whether an expertise-mapped minipublic produces different reopening options than surveys. | UNSTUDIED for schools; Weak-Moderate analogical support |
| 2.2 | Ventilation and outdoor options make in-person school materially safer | Marche region, Italy (Frontiers in Public Health, 2022), retrospective cohort of 205,347 students, over 10,000 classrooms, 316 with mechanical ventilation: "the relative risk of infection of students decreased at least by 74% compared with a classroom with only natural ventilation," "reaching values of at least 80% for ventilation rates >10 L s-1 student-1" (https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.1087087/full, fetched). Strong on the physical mechanism, observational design. Denmark reopened April 15, 2020, ages 2-12 first, with micro-groups of twelve, staggered arrivals, outdoor classes where possible: "Since schools reopened, there have been no increased cases, according to official government data" (Time, 2020, https://time.com/5868098/schools-reopening-coronavirus-denmark-south-korea-israel/, fetched). Moderate, descriptive. | Israel is the cautionary comparator: it reopened May 3, 2020 with protocols, lifted class-size limits two weeks later, and "By June 3, the Israeli government was forced to close down schools after 2,026 students, teachers and staff had tested positive" (Time, 2020, fetched). Moderate: mitigation quality, not reopening per se, carried the risk. Sweden's open lower-secondary schools doubled teacher infection risk and raised partner risk 30% even as parental risk rose only 17% and societal transmission stayed limited (ScienceDaily summary of Vlachos, Hertegard, Svaleryd, PNAS 2021, https://www.sciencedaily.com/releases/2021/02/210212101842.htm, fetched). | Strong (the best-evidenced link in any of the five chains) |
| 2.3 | Safer options, credibly communicated, change the modality decision toward earlier in-person | UNSTUDIED. No study was identified in which local safety-engineering knowledge changed a district's modality decision. | Hartney and Finger (EdWorkingPaper ai20-304, 2020; over 10,000 districts): "The COVID case rate, while statistically significant, is substantively trivial in its effect on a district's course of action," while a 40%-to-60% Trump-vote shift moved remote probability 17 percentage points (https://edworkingpapers.com/sites/default/files/ai20-304.pdf, fetched). Grossmann, Reckhow, Strunk, and Turner (Educational Researcher, 2021), Michigan districts: "decisions were more tied to local political partisanship and union strength than to COVID-19 severity" (https://journals.sagepub.com/doi/10.3102/0013189X211048840, fetched). Strong counter: decisions were not tracking risk information, so better risk information alone had no documented channel into the decision. | UNSTUDIED, with strong counter-evidence that the decision process was not information-limited |
| 2.4 | More in-person instruction reduces learning loss, disenrollment, and later absenteeism | Sweden, where primary schools stayed open: Hallin et al. (International Journal of Educational Research Open, 2022), 97,073 students in grades 1-3: "word decoding and reading comprehension scores were not lower during the pandemic compared to before the pandemic," and "students from low socio-economic backgrounds were not especially affected"; authors "conclude that open schools benefitted Swedish primary school students" (https://pubmed.ncbi.nlm.nih.gov/35677729/, fetched). Moderate (cross-national, no within-Sweden closed comparison). Within the US: Goldhaber et al. (2022) and Jack et al. (2023) tie remote mode to larger achievement declines; Dee et al. (2021) ties remote-only to 1.1 pp extra disenrollment (Dee abstract re-fetched this pass; others chain file, not re-fetched). Singer (ai25-1196) shows the absenteeism dose-response by months of remote exposure (chain file, not re-fetched). | The chain file's S8 caveats apply: mode was not randomly assigned; post-2022 outcomes confound mode and absenteeism channels. | Strong |

### Verdict-free summary of the chain

Links 2.2 and 2.4 carry strong measured evidence; the proposal's distinctive
contribution, links 2.1 and 2.3 (that a minipublic with mapped expertise
would have gotten the ventilation-and-outdoor option set adopted), is
unstudied, and the decision literature shows modality decisions tracked
politics rather than risk information.

---

## Proposal 3: Let different places decide for themselves

Method: confederal decision-making, decentralized within states as well as
across them, with people brought into a room to resolve differences.
Attached to link S2.

### If only this one thing: when and where

June to August 2020, state legislatures and governors, at the moment states
chose how to delegate the fall decision. The timeline records the actual
choice at 09/2020: 48 states left modality to districts. The proposal's
distinctive content is therefore not decentralization itself, which happened,
but decentralization with a structured local resolution process and
deliberate cross-region outcome comparison. The intervention would attach to
the delegation instruments states issued in summer 2020 (in Michigan, the
Return to School Roadmap requirements) and to the Delta/Omicron closure
decisions of winter 2021-22 (25,907 closure events), where no comparison
infrastructure existed either.

### Causal chain and evidence

Endpoints: enrollment, absenteeism, test scores (MEASURED, through shorter
remote exposure where conditions allowed). Workshop-desired non-measured
impacts: outcome comparisons across regions, reduced appeal-to-the-top
dynamics (CONJECTURED).

| # | Link | Evidence | Counter-evidence | Grade |
|---|------|----------|------------------|-------|
| 3.1 | Decentralizing the decision produces regional variation in modality | Directly observed: CDC-reported fall 2020 mix of 24% fully online, 51% hybrid, 17% in-person (case timeline, not re-fetched); the delegation to districts is documented at 09/2020. | None needed; the variation occurred. | Strong (but this link happened in the actual world; the proposal cannot claim it as its own contribution) |
| 3.2 | Decentralized decisions track local COVID conditions | This is the link the proposal needs and the one that failed in the observed decentralization. | Hartney and Finger (2020): "The COVID case rate, while statistically significant, is substantively trivial in its effect on a district's course of action" (fetched, above). Grossmann et al. (2021): "decisions were more tied to local political partisanship and union strength than to COVID-19 severity" (fetched, above). DeAngelis and Makridis (2021) found no correlation between COVID risk measures and reopening (chain file, not re-fetched). Strong counter-evidence. | Strong counter-evidence against the link as observed; UNSTUDIED whether adding a deliberative resolution step changes this |
| 3.3 | Regional variation generates outcome comparisons that inform later decisions | The variation did generate knowledge: Vlachos et al. (PNAS 2021) used Sweden's open-lower/closed-upper design; Dee et al. (2021), Goldhaber et al. (2022), and Jack et al. (2023) all exploit US cross-district variation. Moderate but indirect: the learning arrived in 2021-2023 publications, years after the decisions it could have informed. | UNSTUDIED: no case was identified of a US district or state changing a 2020-21 modality decision in response to comparative outcome data from other regions during the decision window. The Delta/Omicron waves (14.6 million students affected, 2021-22) occurred after a year of observable cross-district variation. | Moderate for knowledge generation; UNSTUDIED for in-cycle learning |
| 3.4 | Where conditions allowed, staying open was compatible with limited transmission, so condition-tracking decisions would have cut remote exposure and its measured harms | Sweden: open lower-secondary schools produced a 17% higher infection risk for parents, doubled teacher risk, and "keeping the former open had limited consequences for the overall transmission of the virus" (ScienceDaily summary of Vlachos et al., fetched). Hallin et al.: no learning loss in grades 1-3 (fetched, above). Denmark: no case increase after April 2020 reopening (Time, fetched). Moderate-to-Strong on epidemiological feasibility. | Israel's May 2020 experience shows the same decentral energy can fail when mitigation lapses (Time, fetched). Teacher-facing risk was real (doubled risk, 7th most affected of 124 occupations), which is the interest collective bargaining existed to protect. | Moderate |

### Verdict-free summary of the chain

The US ran a version of this proposal in fall 2020 and the pivotal link
(decisions tracking conditions) failed empirically: partisanship and
bargaining strength, not case rates, predicted modality. The proposal
survives only in its untested variant: decentralization plus a structured
deliberative resolution step plus organized outcome comparison. That
variant is UNSTUDIED.

---

## Proposal 4: Share local data from the first weeks

Method: open data and public communication; local hospitalization and death
rates published early and laddered up, with experts stating what is and is
not known. Attached to link S4. The chain file marks this proposal
`unstudied: false`.

### If only this one thing: when and where

March to June 2020, state health departments jointly with state education
agencies, so that a shared local data layer exists before the July 2020
politicization (Trump attacking CDC guidance, AFT strike authorization) and
before the fall modality decisions. The proposal text notes it took six
months for a newspaper tracker to become the de facto public data channel;
the school-specific gap ran even longer: no federal school-mode dataset
existed, and the COVID-19 School Data Hub (Oster, Brown University) launched
September 15, 2021, "due to insufficient government transparency," covering
"over 55,000 schools across 30 states" with school-by-school learning-mode
data (https://www.brown.edu/news/2021-09-15/hub, fetched). The intervention
point is precisely the first eighteen months of that vacuum.

### Causal chain and evidence

Endpoints: Gallup confidence in schools (MEASURED), enrollment (MEASURED).
Workshop-desired non-measured impacts: heading off polarization, treating
citizens as thoughtful and rational (CONJECTURED).

| # | Link | Evidence | Counter-evidence | Grade |
|---|------|----------|------------------|-------|
| 4.1 | Early local data publication is feasible and fills a real gap | The gap is documented: Oster on federal data, "We have federal data on school operations for only the largest districts in the country... That's really crazy" (Brown University news, 2021, fetched). A small grant-funded team assembled 30-state school-level data, demonstrating feasibility. Moderate: feasibility shown, but 18 months late, which is the point. | None identified on feasibility. | Moderate |
| 4.2 | Communicating data, including uncertainty, does not erode trust and builds shared understanding | van der Bles et al. (PNAS, 2020), five experiments, 5,780 participants, including a BBC News field experiment: numeric-range uncertainty produced "a marked increase in the feeling and understanding that the data held uncertainty, but little to no negative effect on levels of trust in the data itself, those who provided it (e.g. civil servants) or those reporting it (e.g. journalists)" (phys.org summary, https://phys.org/news/2020-03-uncertainty-facts-news.html, fetched). Strong for the no-trust-penalty claim, pre-pandemic UK samples. | The finding is about not losing trust when honest about uncertainty; it does not show data provision building trust. | Moderate for this link as stated |
| 4.3 | A shared local data layer aligns risk perception across groups and heads off polarization | Information demonstrably moved reopening preferences: in the Rothwell and Desai experiment, Biden voters' support for in-person schooling ran 43% under alarming case framing versus 60% under American Academy of Pediatrics endorsement framing, "a 17-point swing" (Brookings, 2021, https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/, fetched). Moderate: information mattered at the margin. | The same source documents that massive misperception persisted despite ubiquitous public data: only "18% of U.S. adults" correctly estimated hospitalization rates, and "Forty-one percent of Democrats and 28% of Republicans answered that half or more of those infected by COVID-19 need to be hospitalized" (Brookings, 2021, fetched). By late 2020 national data was everywhere and partisan risk perception had diverged anyway. The Gallup school-confidence gap opened in 2021-22 (chain file, not re-fetched), a period of maximal data availability. Strong counter for the strong version of the link. | Contested: Moderate support for marginal effects, Strong counter against polarization prevention |
| 4.4 | Sustained shared understanding holds confidence in the deciding institutions, reducing exit and absence | UNSTUDIED. No study was identified linking local COVID data transparency to school confidence, enrollment, or attendance outcomes. | The chain file's S4 gap note stands: no paper uses instructional mode or information environment as treatment with a trust or legitimacy outcome. | UNSTUDIED |

### Verdict-free summary of the chain

The feasibility and no-harm links hold; the pivotal polarization link is
contested, with the best-fetched evidence showing both real framing effects
(17-point swing) and durable partisan misperception despite abundant data;
the terminal link to measured school outcomes is unstudied. Note a tension
with the chain file: the proposal is flagged `unstudied: false`, but no study
was identified connecting this intervention to any of the case's measured
endpoints.

---

## Proposal 5: Give the public a real say before the decision

Method: standing community process with binding elements, in place before
decisions arrive. Attached to link S5.

### If only this one thing: when and where

The honest answer is before the pandemic: a standing body cannot be stood up
mid-crisis and still be "standing." Within the case window, the intervention
point is June to August 2020 in the large urban districts where bargaining
asymmetry was sharpest (Detroit, San Francisco, Chicago, New York), touching
the fall 2020 modality decision and the spring 2021 reopening negotiations,
and a second time at the SF decision sequence that ended in the February 2022
recall (the recall demonstrates the demand for a channel arriving 20 months
after the decisions it judged). Chicago is the jurisdiction where the
standing infrastructure already existed in statute (Local School Councils),
which sharpens the counterfactual: the mechanism existed and no evaluation of
its pandemic role was identified.

### Causal chain and evidence

Endpoints: Gallup confidence (MEASURED), enrollment (MEASURED), absenteeism
(MEASURED). Workshop-desired non-measured impacts: reduction in adversarial
post-hoc participation, rebalancing against single-stakeholder capture
(CONJECTURED, though recall/litigation counts are countable).

| # | Link | Evidence | Counter-evidence | Grade |
|---|------|----------|------------------|-------|
| 5.1 | A standing parent-community body with binding elements can govern schools competently | Chicago Local School Councils: "LSCs with a majority of elected parent and community members, exercise substantial school-level decision making powers"; they "hire their school principals on performance contracts, set priorities for school improvement, and determine school budgets"; research found "Most LSCs are viable governance organizations that responsibly complete their mandated duties," with roughly 50-60% functioning at high levels and 10-15% with serious shortcomings (ERIC ED476943, 2002, https://eric.ed.gov/?id=ED476943, fetched). Moderate: demonstrates viability of binding parent-majority governance at scale (Chicago, 500+ schools), pre-pandemic evidence. | The same source: 10-15% of councils had serious shortcomings; secondary schools lagged. UNSTUDIED: no evaluation was identified of LSC involvement in Chicago's 2020-21 reopening decisions. | Moderate |
| 5.2 | Upstream binding voice raises trust and downstream civic engagement | Collins (APSR, 2021): exposure to deliberative board meetings "led to increased trust in local officials and a stronger willingness to attend school board meetings in the future" (fetched, above). Moderate. Johnson, Carlson, and Reynolds (Political Behavior, 2023), NYC participatory budgeting matched to voter files: "engaging with participatory budgeting increased individuals' probability of voting by an average of 8.4 percentage points," with larger effects for underrepresented groups (https://link.springer.com/article/10.1007/s11109-021-09679-w, fetched). Moderate: matching design, self-selection into PB plausible. Gonçalves (World Development, 2014), Brazilian municipalities 1990-2004: participatory budgeting municipalities "channeled a larger fraction of their budgets to investments in sanitation and health services" with "a reduction in infant mortality rates" (https://ideas.repec.org/a/eee/wdevel/v53y2014icp94-110.html, fetched). Moderate: different domain, shows binding participatory channels moving measured well-being outcomes. | Germann et al. (2024): legitimacy gains evaporate when recommendations are rejected (fetched, above), which is the live risk for any "binding elements" that bind less than advertised. | Moderate |
| 5.3 | Binding upstream voice reduces adversarial post-hoc participation (recalls, litigation, board conflict) | UNSTUDIED. The adversarial surge is documented (Brookings 6% to 49% participation; 21 of 25 most conflictual months after January 2020; 84 recall efforts in 2021 with one removal; chain file, not re-fetched), but no study was identified testing whether districts with stronger upstream channels saw less of it. The chain file's own gap note says the same. | None; the link has no literature in either direction for schools. | UNSTUDIED |
| 5.4 | Maintained trust reduces exit and absence | UNSTUDIED as a causal link, same as 1.4. UChicago Consortium evidence associates teacher-parent trust with school absence rates, stronger post-pandemic, direction unidentified (chain file, not re-fetched). Walters and Bolger provide weak analogical support via legitimacy-compliance (fetched, above). | AEI 2025 tracker evidence that absenteeism is elevated even for cohorts born after closures suggests a diffuse norm shift that a district-level trust channel may not reach (chain file, not re-fetched). | UNSTUDIED |

### Verdict-free summary of the chain

The front of the chain has the best real-world comparable of any proposal
(Chicago LSCs) and converging moderate evidence that binding participation
moves trust, engagement, and even health outcomes in other domains. The back
half, from upstream voice to less adversarial conflict to measured school
outcomes, is entirely unstudied.

---

## Mechanisms that should have worked

Existing oversight and participation mechanisms in the ecosystem, the
timeline events where each should have fired, and the failure mode.
Failure-mode vocabulary: didn't know / knew but didn't act / acted without
effect / no mechanism existed.

| Mechanism | Timeline event(s) where it should have fired | What happened | Failure mode |
|---|---|---|---|
| Collective bargaining (teachers' unions) | 07/2020 AFT safety-strike resolution; 09/2020 NYC UFT strike threat and reopening delay | Fired, with binding force: delayed NYC reopening to September 21, added testing and a 3% closure trigger; Detroit teacher-choice deal put 95% of teachers remote (chain file) | No failure for its principals. The systemic failure is asymmetry: this was the only channel where stakeholder input bound, which is the premise of proposals 1 and 5 |
| Local school boards with public comment | 06-09/2020 fall modality decisions; 2021 reopening pace | Formal decision venue existed everywhere; participation surged only after decisions (6% to 49% of students in high-participation districts, 2020-22), largely in adversarial form | Acted without effect at decision time; the channel carried individual preference aggregation with nowhere to bind (Singer, chain file). Post hoc: acted, mostly without effect on decisions |
| State advisory councils (Michigan Return to Learn Advisory Council, EO 2020-88) | 06/2020 convening; produced the Return to School Roadmap for fall 2020 | Fired at the right time, advisory only, appointed not sortition; case file records limited public information on whether recommendations were followed and critics' claims they were not consistently followed | Acted without effect (or unmeasured effect); the chain file codes its effect "unmeasured" |
| Parent surveys and polls (district surveys; KFF and Gallup July 2020) | 07/2020, ahead of fall decisions | Fired on time and were informative (KFF: 60% of parents preferred opening later; Gallup: 36/28/36 split), but produced information for administrators, not obligations | Acted without effect in the binding sense; the mechanism performed exactly its design, which had no binding step |
| Sortition deliberation (Michigan CMU panel, 30 residents) | Should have fired 05-08/2020 to touch the fall decision; actually convened 11/2020 | Produced 12 recommendations offered to policymakers; chain file codes effect "none" | Acted without effect, and fired after the decision window; as designed, a research and civic exercise, not a decision procedure |
| Elections and recalls | Would-be accountability for 2020-21 decisions; fired 2021 (84 recall efforts, 215 members targeted) and 02/2022 (SF recall) | Of 16 recall elections held in 2021, one member removed; SF removed all three commissioners by 69-76% on 36% turnout, 20 months after the fall 2020 decision; Jacob (2024) finds no change in incumbent win rates overall | Acted, mostly without effect on officeholders, and structurally post hoc; no mechanism existed to bind before the decision |
| Litigation (San Francisco v. SFUSD, 02/2021) | Fired 02/2021 against decisions made mid-2020 | First city-against-own-district reopening suit; chain file codes effect "partial" | Acted with partial effect, post hoc |
| Professional guidance (AAP, 06/2020) | 06/2020 in-person-goal guidance, ahead of fall decisions | Fired early and clearly; politicization (07/2020 Trump-CDC conflict) forced clarification; district decisions tracked politics and union strength, not guidance or case rates (Hartney and Finger; Grossmann et al., fetched) | Acted without effect on modality decisions |
| CDC guidance and federal channel | 02/2021 Operational Strategy ("last settings to close, first to reopen") | Arrived eleven months after closures; no public participation step in its production; July 2020 White House pressure damaged its neutrality | Didn't know early (guidance basis, e.g. 6-foot rule, lacked trial evidence per timeline); later, acted without effect; for public input into guidance, no mechanism existed |
| Public data infrastructure | Should have fired 03-06/2020 | No federal school-mode dataset; the COVID-19 School Data Hub launched 09/2021 (fetched) | No mechanism existed; a private actor built it 18 months late |

### Efficacy ratings for the participation events documented in the chain file

| Event (chain file) | Chain-file effect code | Efficacy rating with rationale |
|---|---|---|
| Michigan Return to Learn Advisory Council (06/2020) | unmeasured | Low-to-unknown: right timing, no binding remit, no documented uptake record |
| Michigan sortition panel (11/2020) | none | None on decisions: fired after the fall decision; value was demonstrative (sortition feasible mid-pandemic) |
| AFT strike authorization (07/2020) | moved | High: converted member voice into bargaining leverage nationally |
| NYC UFT strike threat (09/2020) | moved | High: measurably delayed the largest district's reopening and set testing and closure-trigger terms |
| SF City Attorney suit (02/2021) | partial | Moderate: added pressure that preceded partial reopening; effects entangled with vaccination timeline and state politics |
| 2021 recall wave (84 efforts) | none | Very low on officeholders (1 removal in 16 elections held); nonzero signaling value, unquantified |
| SF school board recall (02/2022) | moved | High on officeholders, zero on the decisions it judged, which were 14 to 20 months past; textbook post-hoc channel |

---

## Comparables

### Proposal 1 (deciding assemblies)

1. **Irish Citizens' Assembly on the Eighth Amendment (2016-17).** 99
   randomly selected members plus chair, "deliberated over five sessions from
   November 2016 until April 2017"; 64% turnout referendum then approved
   repeal, with all constituencies except Donegal in favor (Electoral Reform
   Society, 2018, fetched). Measured outcome: a binding constitutional change
   following the assembly's recommendation. Domain and pace differ from an
   emergency.
2. **French Citizens Convention for Climate (2019-21).** 150 members, nine
   months, "without filter" pledge; roughly 40% of proposals reached the
   bill; members rated government follow-through 3.3/10 (Wikipedia, fetched).
   Measured outcome: implementation shortfall under a quasi-binding promise.
3. **Michigan sortition panel (11/2020).** The in-case comparable: sortition
   was feasible mid-pandemic; effect on policy coded "none" (chain file).

### Proposal 2 (experts with the public)

1. **Ada Lovelace Institute rapid online deliberation (May 2020, UK).** 28
   members, expert input, one month, produced "four strong steers"
   pre-rollout of the NHS contact tracing app; no measured policy outcome
   (fetched).
2. **Texas utility deliberative polls (1996-98).** Eight utilities;
   deliberation with experts surfaced willingness to pay for renewables; the
   1999 law required about three percent renewable supply; Texas became the
   largest US wind generator (National Civic League, fetched). Measured
   outcome exists but attribution to the polls is not causally identified.
3. **Marche region ventilation program (Italy, 2021-22).** The engineering
   half of the proposal without the participation half: 316 mechanically
   ventilated classrooms, at least 74% relative infection risk reduction
   (fetched). Measured outcome, no deliberative component.

### Proposal 3 (confederal decisions)

1. **Sweden (2020).** Kept schools through grade 9 open nationally: doubled
   teacher risk, 17% higher parent risk, "limited consequences for the
   overall transmission" (ScienceDaily/PNAS, fetched); no learning loss in
   grades 1-3 across 97,073 students (Hallin et al., fetched). A national
   uniform decision, so it tests the open-schools outcome, not confederalism.
2. **Denmark (April 2020).** First European reopening, ages 2-12 first,
   micro-groups, no case increase per government data (Time, fetched).
3. **The US fall 2020 delegation itself.** 48 states delegated to districts;
   decisions tracked partisanship and union strength, not severity (Hartney
   and Finger; Grossmann et al., fetched). This is the proposal's nearest
   real-world trial and its strongest counter-evidence.

### Proposal 4 (open local data)

1. **COVID-19 School Data Hub (Brown University, launched 09/2021).**
   School-level mode data, 55,000+ schools, 30 states, built by a small
   grant-funded team because federal data covered "only the largest
   districts" (fetched). Measured downstream use: enabled the mode-treatment
   research (Dee et al. type designs); no study measures its effect on
   public trust.
2. **BBC News uncertainty field experiment (van der Bles et al., PNAS 2020).**
   Communicating numeric uncertainty did not reduce trust in data or source
   (fetched). Direct measured outcome for the communication design choice.
3. **Rothwell and Desai information experiment (2021).** AAP-endorsement
   framing versus alarming-case framing produced a 17-point swing in Biden
   voters' reopening support (fetched). Measured outcome: information
   framing moved policy preferences; also documents the misperception
   baseline that persisted despite public data.

### Proposal 5 (standing binding process)

1. **Chicago Local School Councils (1988-present).** Elected parent-majority
   councils that hire principals and set budgets at 500+ schools; most
   "viable governance organizations" (ERIC, fetched). The closest US
   analog to a standing binding parent channel; its pandemic-era role is
   unevaluated.
2. **New York City participatory budgeting (2011-present).** Binding
   allocation of council discretionary funds; participation raised
   subsequent voting probability 8.4 points, most for underrepresented
   groups (Johnson, Carlson, and Reynolds, 2023, fetched).
3. **Brazilian municipal participatory budgeting (1990-2004).** Binding
   budget participation shifted spending to sanitation and health with "a
   reduction in infant mortality rates" (Gonçalves, 2014, fetched). The
   strongest measured-welfare outcome for any binding participation
   mechanism found in this pass; furthest domain from schools.
4. **Ostbelgien permanent Citizens' Council (2019-present).** The
   institutionalized standing model: decree-mandated, survives elections,
   recommendations still require parliamentary action; five-year assessment
   emphasizes it "remain[s] in [its] infancy" (Deliberative Democracy
   Digest, fetched). No welfare-outcome measurements.

---

## Questions for the lead researcher

1. **Endpoint assignment for Proposal 1.** The legitimacy-perception evidence
   (Germann et al. 2024; Collins 2021) supports only the perception link.
   Both links connecting perception to the case's measured endpoints
   (enrollment, absenteeism, Gallup confidence) are UNSTUDIED. Should the
   proposal's chain claim a measured endpoint at all, or terminate at
   perceived legitimacy with the measured endpoints marked conjectural?
2. **Scope of Proposal 3.** The US actually ran decentralization in fall
   2020, and the pivotal link (decisions tracking local conditions) failed
   against strong evidence. Should the proposal be rescoped in the chain file
   as "decentralization plus structured local deliberation plus organized
   outcome comparison" so that the counter-evidence targets the tested
   variant rather than the proposal itself?
3. **The `unstudied: false` flag on Proposal 4.** No study was identified
   connecting early local data transparency to any of this case's measured
   endpoints; the supporting evidence is generic communication research. If
   the flag reflects the existence of the generic literature, keep it; if it
   is meant to claim the school-trust link is studied, it looks wrong.
   Needs a call.
4. **Adjudicating the information-effects conflict in Proposal 4.** Rothwell
   and Desai show both a 17-point framing swing (information matters) and
   persistent partisan misperception despite abundant data (information
   insufficient). The write-up voice depends on which reading leads. This
   pass graded the link "contested"; confirm or override.
5. **Comparable admissibility.** Ireland, France, Texas utilities, and
   Brazilian participatory budgeting are all out-of-domain. Should
   out-of-domain comparables carry evidence grades (as here, Moderate at
   best), or be listed as analogies without grades?
6. **Endpoint assignment for Proposal 2.** The strong evidence runs
   mode-to-test-scores and mode-to-enrollment. Whether the proposal claims
   test scores, enrollment, or both changes which chain-file links (S3, S8)
   it attaches to. This pass attached both; confirm.
7. **Grade for Johnson, Carlson, and Reynolds (2023).** The 8.4-point voting
   effect uses coarsened exact matching; self-selection into participatory
   budgeting is plausible and the authors' design cannot fully exclude it.
   Graded Moderate here; a case exists for Weak.
8. **Sweden's teacher-risk finding and Proposal 3's voice.** Open schools
   doubled teacher infection risk (7th most affected of 124 occupations).
   Any chain arguing conditions permitted earlier opening needs to state
   whose risk rose; where this belongs (claim, caveat, or counter-evidence)
   is a voice decision.
