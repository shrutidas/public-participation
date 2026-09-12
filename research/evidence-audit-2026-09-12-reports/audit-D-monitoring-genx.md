# Audit D: community monitoring (vaccines P5) and three GenX items

Read-only audit. No repo file was edited. Line numbers refer to the working tree on 12 September 2026.

Verdict key: KEEP, MERGE into X, CUT, MOVE, REWRITE, ADD. Criteria: C1 fit, C2 design, C3 transport, C4 distinct information, C5 counter role, C6 balance.

---

## Item 1. Vaccines, "Residents define the measures of success for outreach funds", claim "Community monitoring of a public service improves the service."

File: `js/spine/covid-vaccines.js`, claim at about line 1867 (cards run to about line 2027).

Proposal implication (outcome text): "Residents who define success see where the money went, which brings more systematic evaluation, more engagement, more trust in government, and a stronger sense that they can influence it."

### What the literature says, in brief

Two Campbell reviews cover this claim. Molina et al. 2016 (searches to about 2013) and Waddington et al. 2019 (searches to March 2018, 35 programs, meta-analysis). Waddington is the later, larger review and already includes Gullo et al. 2017, Björkman and Svensson 2009 and the 2017 follow-up (with the Donato replication). It finds small average gains in access and quality, strongest where citizens deal face to face with frontline staff, and weak effects on health on their own. After both reviews, the two largest trials in the Tsai / Fung / Posner tradition came back null on use and health: Arkedis et al. 2021 (Transparency for Development, Indonesia and Tanzania) and Raffler, Posner and Parkerson (Uganda scale-up). Fox 2015 and Kosec and Wantchekon 2020 give the scope conditions: information-only, "tactical" monitoring fails unless people have power and incentives to act and the state can respond. Metaketa I (Dunning et al. 2019) tests information and voting, not service monitoring, so it does not fit. Metaketa III (Slough et al. 2021, PNAS) is a six-site coordinated trial that found community monitoring modestly reduced overuse of forests and water. It monitors fellow resource users, not a public service provider, so it fits a neighboring claim only. No high-income-country causal study of community monitoring of a public service was found.

### Card table

| Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|
| E1 Christensen et al. 2021, QJE. Sierra Leone clinics, more use, fewer child deaths | Exact | Randomized, published after both reviews | Low-income, but health clinics like outreach | Only post-review positive trial in the set; second country | Needed for balance | KEEP | C2/C4: newest strong positive trial, not inside any synthesis |
| E2 Björkman Nyqvist et al. 2017, AEJ Applied. Uganda gains persisted | Exact | Randomized follow-up | Low-income | Same team, same sites as the 2009 trial | n/a | MERGE into Raffler counter card (one sentence) and covered by A1 | C2/C4: included in Waddington; same-site follow-up |
| E3 Gullo et al. 2017, PLOS ONE. Malawi scorecard home visits | Exact | Small cluster randomized (20 clusters) | Low-income | Included in Waddington; already a case on claim 1 | n/a | CUT (covered by A1) | C2: study sits inside the synthesis |
| E4 Barr, Mugisha, Serneels and Zeitlin 2012, working paper. Parent committees that wrote their own measures did better | Closest fit to the proposal (residents define the measures) | Randomized, but unpublished for 14 years | Low-income schools | Only test of resident-defined vs handed-down measures | Adds the proposal's own mechanism | KEEP, with the existing unpublished caveat | C1/C4: the one direct test of resident-set measures |
| E5 Molina et al. 2016, Campbell. Community monitoring cut corruption, raised clinic use | Exact | Systematic review, older | Low and middle income | Superseded by Waddington 2019 (later searches, larger, meta-analysis, includes monitoring subgroup) | n/a | CUT, replaced by ADD A1 | C2: newer synthesis covers the same trials |
| ADD A1 Waddington et al. 2019, Campbell | Exact (citizen feedback and monitoring of public services) | Systematic review with meta-analysis, 35 programs | Low and middle income | Replaces E2, E3, E5 and carries scope conditions | Balanced by its own design | ADD | C2: best synthesis covering the claim |
| C1 Raffler, Posner and Parkerson, Journal of Politics. Uganda scale-up, no effect on use or health | Exact | Large randomized trial | Low-income | Strongest rival on the same outcome and design | Strongest rival | KEEP, REWRITE (label year, fold in Uganda case) | C5: strongest rival |
| C2 Björkman Nyqvist et al. 2017. Participation meetings without performance data did nothing | Exact | Randomized arm | Low-income | Scope condition: monitoring needs performance data | Scope condition that bears on proposal design | KEEP | C5: one distinct scope condition |
| C3 Banerjee et al. 2010, AEJ Policy. Indian parents' school monitoring had no effect | Exact | Randomized | Low-income schools | A second null on a different service; not inside Waddington but inside Molina | Rival, but a weaker transport match than the health nulls | CUT | C3/C4: health nulls closer to outreach grants; adds no new scope condition |
| C4 Arkedis et al. 2021, World Development. Community-led maternal health program, no change | Exact; community plans its own fixes | Randomized, 400 communities, two countries | Low and middle income | Distinct mechanism: community-designed action stalls between planning and action | Rival, post-review | KEEP | C4/C5: post-review null, closest to residents designing their own response |
| Case: Community-Based Monitoring of Clinics, Uganda | Sources are Björkman and Svensson 2009 (inside A1), the 2017 follow-up (E2 and C2) and Raffler (C1) | | | | | DUPLICATE, merge into C1 rewrite | Every source already sits on a kept card or inside A1 |

### Resulting kept set

- Evidence (3): Waddington et al. 2019 (ADD), Christensen et al. 2021, Barr et al. 2012.
- Counter-evidence (3): Raffler, Posner and Parkerson (rewritten), Arkedis et al. 2021, Björkman Nyqvist et al. 2017 no-information arm.
- Cases: none on this claim (Uganda case merged).

Balance: yes. The literature is mixed. The synthesis shows small average gains in access and quality under conditions; the one strong newer positive trial sits beside two larger newer null trials, and the kept set shows three on each side. The honest reading for the working group is that community monitoring can improve frontline services, but the effect does not reliably replicate at scale, and it depends on performance data, staff buy-in, and communities having some power to act. Kosec and Wantchekon 2020 and Fox 2015 state the scope conditions if the group wants a synthesis on the counter side. They could replace C2, but they are not specific to monitoring, so I did not card them.

### ADD and REWRITE cards

- Type: evidence (ADD, replaces Molina 2016; absorbs Gullo 2017 and the 2017 Uganda follow-up)
  Headline: Programs that let citizens monitor and give feedback to frontline service staff improved access and quality, but rarely improved health on their own.
  Finding: A review pooled 35 programs in low- and middle-income countries that brought citizens into planning, information, feedback, or monitoring of public services. It found that programs building direct contact between service users and providers are "often effective in stimulating active citizen engagement in service delivery and realising improvements in access to services and quality of service provision, particularly for services that involve direct interaction between citizens and providers." The average gains were small. Without fixes to supplies and staffing, "citizen engagement interventions alone may not improve key wellbeing outcomes for target communities or state-society relations." Programs did better where front-line staff bought in and where communities could act together. The searches ended in early 2018, before the large null trials in Uganda, Indonesia, and Tanzania were published.
  Quote: "The findings suggest that interventions promoting citizen engagement by improving direct engagement between service users and service providers, are often effective in stimulating active citizen engagement in service delivery and realising improvements in access to services and quality of service provision, particularly for services that involve direct interaction between citizens and providers."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1002/cl2.1025%22&resultType=core&format=json
  Source label: Waddington, Sonnenfeld, Finetti, Gaarder, John and Stevenson 2019, Campbell Systematic Reviews
  URL: https://doi.org/10.1002/cl2.1025
  Design: Mixed-methods systematic review with meta-analysis of 35 program evaluations in 20 countries (full text reports a pooled effect of 0.10 standard deviations on access and quality).
  Grade: strong
  Caveat: Low- and middle-income countries only. Monitoring is one of four engagement types pooled. Searches ended in 2018.
  Verified: YES (abstract text pulled from Europe PMC; the second quoted phrase in the finding is also in the abstract. Included studies checked in PMC full text: Gullo et al. 2017 and Björkman et al. 2009 and 2017 are included; Christensen 2021, Arkedis 2021, Raffler and Barr 2012 are not.)

- Type: counter-evidence (REWRITE of the Raffler card; absorbs the Uganda case)
  Headline: When community monitoring of clinics was run across much more of Uganda a decade later, clinic use and child health did not improve.
  Finding: The original trial in 50 Ugandan clinics had found more clinic visits and fewer child deaths, and those gains lasted in a later follow-up by the same team. A larger program modeled on that design, run about a decade later by a different team, gave communities report cards, action plans, and joint meetings with health center staff. "While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes." The authors point to much better baseline health than in the original study, and fewer than one in five treated households had heard of the meetings.
  Quote: "While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes."
  Quote fetched from: http://piaraffler.com/papers/Citizen-pressure.pdf
  Source label: Raffler, Posner and Parkerson 2026, Journal of Politics (add: Björkman and Svensson 2009, Quarterly Journal of Economics, https://doi.org/10.1162/qjec.2009.124.2.735)
  URL: https://doi.org/10.1086/736577
  Design: Large randomized field experiment.
  Grade: strong
  Notes: (1) The author PDF header reads "Journal of Politics, 2026, Vol. 88, No. 4", so the label year should be 2026, not 2025 (2025 is the online-first date). (2) The Crossref abstract, from the "just accepted" version, words the result differently ("modest positive impacts on treatment quality and patient satisfaction ... no effects on utilization rates, child mortality, or other health outcomes"). The quote on the card matches the final author version and OpenAlex. (3) "Fewer than one in five households" is carried over from the existing card and was not re-checked this pass. (4) The original-trial sentence is supported by the Björkman and Svensson 2009 abstract: "We document large increases in utilization and improved health outcomes—reduced child mortality and increased child weight".
  Verified: YES (OpenAlex abstract match; also present in author PDF with line-break hyphenation)

---

## Item 2. GenX, "Accessible channels for workers to report chemical hazards", claim "Channels outside the chain of command draw reports that formal channels miss."

File: `js/spine/genx-pfas.js`, claim at about line 662.

Proposal implication: "Workers who can report safely bring hazards to light before exposure spreads."

### What the literature says, in brief

No systematic review or causal study tests whether adding a channel outside the chain of command surfaces reports that in-house channels miss. Reviews of whistleblowing systems (for example the design-specification review on ResearchGate and the 2025 Journal of Business Ethics problematizing review) say the evidence on channel design is thin and mostly about stated intentions. The SEC Whistleblower Program study (Wiedman and Zhu 2023, Contemporary Accounting Research) finds the outside bounty channel deterred fraud, which fits deterrence, not detection of missed reports, so I did not card it. The best direct descriptive evidence is from hospitals, where several reporting routes run side by side and can be compared.

### Card table

| Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|
| E1 HHS OIG 2012. Hospital incident systems captured about one in seven harms | Half the claim: shows the formal channel misses most events | Official audit, national sample; supports a fact | US, high-income, safety reporting | National scale of what a formal channel misses | Fact, not effect | KEEP | C2: official record used for a fact |
| E2 Weissman et al. 2008, Annals. Patient interviews found harms records missed | Partial: a research interview of patients, not a reporting channel | Descriptive comparison | US hospital | Overlaps E1 and ADD A2; reporters are patients, not workers | n/a | CUT | C1/C4: A2 makes the same point with actual channels |
| E3 Johansson and Carey 2016, JBE. Companies with anonymous reporting channels found more fraud | Good: channel that bypasses the boss, more detection | Association across listed firms | Australia, high-income | Only card on workers and detection outside hospitals | n/a | KEEP | C1/C4: closest fit on workers and detection |
| E4 Stubben and Welch 2020, JAR. Heavier internal hotline use, fewer fines | Weak: in-house hotline; outcome is fines, not missed reports | Association | US firms | Neighboring outcome | n/a | CUT | C1: tests a different outcome with an in-house channel |
| ADD A2 Levtzion-Korach et al. 2010. Five reporting routes caught different problems with little overlap | Direct: compares what separate channels catch | Descriptive, one institution | US hospital | Shows other routes catch what the formal system misses | n/a | ADD | C1: the only study comparing channels head to head |
| C1 Kaplan and Schultz 2007, JBE. An anonymous route made people less willing to use named routes | Same outcome (reporting) | Experiment on intentions | US participants | Scope condition: substitution, not addition | Scope condition | KEEP | C5: distinct scope condition |
| C2 Kaplan, Pany, Samuels and Zhang 2009, Auditing. Outside-run hotline drew less willingness than in-house | Same outcome, reverse direction | Experiments on intentions | US participants | Direct rival on outside vs inside | Strongest rival | KEEP | C5: strongest rival |
| Case: NASA Aviation Safety Reporting System | Shows the proposal's design exists and is used; no measured effect | Program's own document | US | n/a | n/a | MOVE-TO-DESCRIPTION | Shows the idea was tried, no outcome measured |

### Resulting kept set

- Evidence (3): HHS OIG 2012, Johansson and Carey 2016, Levtzion-Korach et al. 2010 (ADD).
- Counter-evidence (2): Kaplan, Pany, Samuels and Zhang 2009; Kaplan and Schultz 2007.
- Case: none (ASRS moves to the description).

Balance: yes, with a flag. The evidence is thin on both sides. Support is descriptive or correlational, and the counter-evidence measures stated intentions in experiments. No study measures whether an outside channel changes what gets reported. The card set should say so rather than imply a settled finding.

One sentence for the proposal description (ASRS): "Aviation already runs a version of this: since 1976 the Federal Aviation Administration has had NASA receive confidential safety reports, because it judged workers would not trust a channel run by the enforcing regulator."

### ADD card

- Type: evidence (ADD)
  Headline: In one hospital, five separate ways of reporting problems each caught different safety problems, with little overlap.
  Finding: Researchers sorted the reports from five routes at one academic hospital: staff incident reports, patient complaints, risk management, malpractice claims, and safety walk rounds by executives. "Overall, there was little overlap, although each reporting system identified important safety issues." Incident reports mostly flagged mislabeled specimens, walk rounds turned up equipment problems, and complaints and claims pointed to failures of communication. Who reported changed with the route: "Physicians accounted for 50% of risk management reports, but in adverse event reporting, where nurses were the main reporters, physicians accounted for only 2.5% of reports." It is one hospital, and two of the routes are used by patients rather than staff.
  Quote: "Overall, there was little overlap, although each reporting system identified important safety issues."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=%22five%20reporting%20systems%22%20elephant&resultType=core&format=json (PubMed abstract, PMID 20873673)
  Source label: Levtzion-Korach, Frankel, Alcalai, Keohane, Orav, Graydon-Baker, Barnes, Gordon, Puopulo, Tomov, Sato and Bates 2010, Joint Commission Journal on Quality and Patient Safety
  URL: https://doi.org/10.1016/s1553-7250(10)36059-4
  Design: Descriptive comparison of reports across five systems in one institution, coded with a common 23-category scheme.
  Grade: moderate
  Caveat: One hospital. It shows that different routes surface different problems. It cannot show that adding an outside route would raise the total reported.
  Verified: YES (both quoted sentences found in the Europe PMC abstract; DOI returns 302)

---

## Item 3. GenX, "A body of affected residents convenes whenever a chemical is approved for manufacture or discharge", claim "Residents who can report and sample find contamination before officials do."

File: `js/spine/genx-pfas.js`, claim at about line 873.

Proposal implication: "Residents who review chemical approvals cut exposure through drinking water."

### What the literature says, in brief

No study measures how often resident reporting or sampling finds contamination before agencies do. Reviews of citizen water-quality monitoring (Capdevila et al. 2020; the 2024 PMC review on community strengthening) cover success factors and data quality, not detection timing. Hadj-Hammou et al. 2017 (PLOS ONE) shows citizen sampling covers streams the English agency does not, but it did not find contamination the agency missed, so it is weaker than Seto et al. The strongest causal work on citizen reporting and pollution, Buntaine, Greenstone, He et al. 2024 (AER, China), shows that public citizen appeals about violations cut pollution. That is about the response to reports already made, so it fits a neighboring claim ("Public seats in the review produce monitoring commitments and get them verified", or the required-investigation path), not detection first. Popular epidemiology (Brown 1992) is the conceptual source for Woburn. The claim rests on well-documented cases plus one sensor study, and the cards should say that.

### Card table

| Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|
| E1 Pieper et al. 2018, ES&T (+ Roy and Edwards 2019). Flint residents' samples contradicted officials | Exact (sampling path, water, before officials acknowledged) | Peer-reviewed account of one city | US drinking water crisis | Sampling path in water | n/a | KEEP; absorbs the Flint case | C1/C3: closest in setting |
| E2 Seto et al. 2019, IJERPH. Community sensors saw episodes government monitors missed | Exact on "find what officials miss" | Measured comparison of two networks | US, air not water | Only quantified comparison; sensor path | n/a | KEEP | C4: only measured head-to-head comparison |
| E3 Woburn, Cutler et al. 1986 + Costas et al. 2002. Parents counted cases, investigations confirmed | Exact (reporting path, water) | Official investigation and state case-control study | US drinking water | Reporting (symptom) path | Pairs with the Goodman counter card | KEEP; absorbs the Woburn case | C4: only card on the passive reporting path |
| E4 Tennant farmer, NYT Magazine + law review. Dying cattle led to the lawsuit | Partial: the lawsuit pried loose documents; no sampling or detection by the resident | Journalism, one account | US, PFOA | The passive path is already covered by Woburn; the proposal note already uses this example | n/a | CUT | C2/C4: weakest design, already told in the proposal note |
| C1 Goodman et al. 2012 + Caldwell 1990. Cluster investigations rarely find a cause | Same outcome, reverse direction for the reporting path | Review of 428 investigations | US | Scope condition: symptom reports rarely confirm a cause | Strongest rival | KEEP | C5: strongest rival on the reporting path |
| C2 Strynar et al. 2015, ES&T. GenX needed a nontargeted lab screen | Scope condition: invisible contaminants | Peer-reviewed method paper | This river | Also a GenX timeline event, but it tests the claim directly in the case | Scope condition | KEEP | C5: distinct scope condition (sampling needs a lab and a target) |
| Case: Woburn Leukemia Cluster | Same study as E3 | | | | | DUPLICATE, merge into E3 | Sources already on E3 |
| Case: Flint Resident Water Sampling (Mantha et al. 2020) | Same event as E1 | | | | | DUPLICATE, merge into E1 | Same resident sampling campaign |
| Case: Tonawanda Bucket Brigade | Resident sampling first, state study confirmed, enforcement followed | State and DOJ records | US | Its documented outcome is enforcement and a drop in benzene, which is exposure, not detection | n/a | MOVE-TO-DESCRIPTION here; consider CONVERT under "Earlier detection and verified compliance shorten the exposure window" | Only shows the active path was tried on this claim |

Suggested merge text:
- E1 (Flint) add: "Residents returned 252 of the 300 kits, and a federal emergency was declared in January 2016." (source: Flint Water Study page, Mantha et al. 2020, already on the case card; not re-checked this pass).
- E3 (Woburn) add: "The case led to settlements with two companies, a Superfund cleanup, and a state cancer registry." (from the existing case card sources).
- Tonawanda, one sentence for the description: "In Tonawanda, New York, residents sampled their own air with bucket kits in 2005, and a state study two years later confirmed high benzene near the coke plant."

### Resulting kept set

- Evidence (3): Pieper et al. 2018 (Flint), Seto et al. 2019, Cutler et al. 1986 / Costas et al. 2002 (Woburn).
- Counter-evidence (2): Goodman et al. 2012, Strynar et al. 2015.
- Cases: none left on this claim (two duplicates merged; Tonawanda moves to the description or to the exposure claim).

Balance: yes. The support is three documented US episodes, one of them measured. The counter-evidence shows the two limits that matter for PFAS: symptom-based reports rarely pin down a cause, and fluorinated chemicals cannot be seen or smelled. No card should imply that residents usually find contamination first. The evidence shows they sometimes do, for visible harms or with lab partners.

No ADD. Nothing found beats the kept cards on fit.

---

## Item 4. GenX impact, "Studies tie PFAS exposure to higher disease risk"

File: `js/spine/genx-pfas.js`, impact at about line 300.

Measured outcome as stated: "The PFAS in residents' blood raise their disease risk. Wilmington residents with more PFAS had higher cholesterol. Large PFOA studies elsewhere show kidney and testicular cancer, and more deaths from kidney disease among exposed workers."

### What the literature says, in brief

Two authoritative syntheses cover this. The National Academies 2022 guidance found sufficient evidence of an association with lower antibody response, high cholesterol (dyslipidemia), lower fetal growth, and kidney cancer. It rated the evidence for testicular cancer, thyroid disease, ulcerative colitis and pregnancy-induced hypertension as limited or suggestive. IARC 2023 classified PFOA as carcinogenic to humans (Group 1), mainly on animal and mechanistic evidence, with limited human evidence for kidney and testicular cancer. Both reviewed the C8 Science Panel and Steenland worker studies. Neither covers GenX, which has no human disease study.

### Card table

| Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|
| E1 Rosen et al. 2022, EHP. Wilmington residents with more PFOS/PFNA had higher cholesterol | Exact, local | Cross-sectional cohort | This community | Only local disease-marker evidence | n/a | KEEP; fix source to DOI and journal | C3: the case's own residents |
| E2 C8 Science Panel + Boston et al. 2025 + IARC 2023 | Fits, but three sources mixed; the quote says human evidence is "limited" while the card implies strong | Panel and IARC are syntheses; Boston 2025 role unclear | PFOA populations | C8 is covered by NASEM and IARC | n/a | REWRITE as an IARC card; C8 panel covered by NASEM; drop Boston 2025 | C2: one synthesis per card, and state the basis honestly |
| E3 GenX Exposure Study report-back 2024. 12% above the NASEM 20 ng/mL level | Bridges local blood levels to the NASEM risk threshold, but it is an exposure fact | Study report to participants | This community | Fits as a sentence on the NASEM card | n/a | MERGE into ADD A3 | C1/C4: exposure fact that links to the synthesis |
| E4 Steenland and Woskie 2012, AJE. DuPont worker kidney deaths | Fits | Occupational cohort, 12 and 13 deaths | West Virginia PFOA plant | Reviewed by NASEM and IARC | n/a | CUT (covered by A3 and IARC) | C2: individual study inside the syntheses |
| ADD A3 NASEM 2022 | Exact | Authoritative synthesis | US | Replaces E2's C8 part, E4; absorbs E3 | Carries its own limited and insufficient ratings | ADD | C2: best synthesis |
| C1 EPA 2023 GenX toxicity factsheet. No human GenX study; animal liver toxicity | Scope condition: GenX specifically | Official assessment | This chemical | Only card on GenX itself | Scope condition | KEEP; add Rosen 2022 as a source for the HDL sentence | C5: the key scope condition |

Note on C1: the sentence "two fluoroethers went with higher HDL" comes from Rosen et al. 2022 ("Two fluoroethers were associated with higher HDL, whereas other fluoroether compounds were not associated with serum lipid levels"), not from the EPA factsheet. It needs Rosen as a second source.

Note on the impact text: if E4 is cut, the "measures" paragraph still names the 5,791 DuPont workers. Either keep that sentence with the Steenland source listed on the NASEM card, or trim it. Also, "Large PFOA studies elsewhere show kidney and testicular cancer" overstates testicular cancer. NASEM rates it limited or suggestive, and IARC rates the human evidence for both cancers limited. Suggested wording: "Large reviews tie PFAS to higher cholesterol and kidney cancer, with weaker evidence for testicular cancer."

### Resulting kept set

- Evidence (3): NASEM 2022 (ADD), IARC 2023 (REWRITE), Rosen et al. 2022.
- Counter-evidence (1): EPA 2023 GenX assessment.

Balance: yes. For legacy PFAS the weight of the literature supports the link, and the two syntheses say so with graded confidence. The counter card keeps the key limit: none of this is measured for GenX in humans.

### ADD and REWRITE cards

- Type: evidence (ADD)
  Headline: A National Academies review found strong evidence tying PFAS exposure to higher cholesterol, kidney cancer, weaker antibody response, and smaller babies.
  Finding: A National Academies committee weighed the federal toxicological profile and recent human studies to advise doctors on PFAS testing. "The committee found sufficient evidence of an association for the following diseases and health outcomes: decreased antibody response (in adults and children), dyslipidemia (in adults and children), decreased infant and fetal growth, and increased risk of kidney cancer (in adults)." It rated the evidence for testicular cancer, thyroid disease, ulcerative colitis, and pregnancy-induced hypertension as limited or suggestive, and found too little to judge many other conditions. The committee advised added clinical follow-up above a summed blood level of 20 ng/mL. In the GenX Exposure Study, 12 percent of tested Wilmington residents were above that level. The review covers legacy PFAS such as PFOA and PFOS, not GenX.
  Quote: "The committee found sufficient evidence of an association for the following diseases and health outcomes: decreased antibody response (in adults and children), dyslipidemia (in adults and children), decreased infant and fetal growth, and increased risk of kidney cancer (in adults)."
  Quote fetched from: https://www.ncbi.nlm.nih.gov/books/NBK584690/
  Source label: National Academies of Sciences, Engineering, and Medicine 2022, Guidance on PFAS Exposure, Testing, and Clinical Follow-Up (add: GenX Exposure Study 2024 report-back, https://genxstudy.ncsu.edu/wp-content/uploads/sites/149/2025/11/Deidentified_2024_PFAS_ReportBack.pdf, for the 12 percent figure)
  URL: https://doi.org/10.17226/26156
  Design: Consensus review by an expert committee, using graded evidence categories.
  Grade: strong
  Verified: YES (quote found in the NCBI Bookshelf chapter "Potential Health Effects of PFAS"; DOI returns 302. The 12 percent and 20 ng/mL figures come from the existing report-back card and were not re-checked this pass.)

- Type: evidence (REWRITE of the C8 / IARC card)
  Headline: The World Health Organization's cancer agency classified PFOA as a cause of cancer in humans.
  Finding: In 2023 a working group of 30 experts convened by the International Agency for Research on Cancer (IARC) classified PFOA as carcinogenic to humans, its highest category. "PFOA is carcinogenic to humans (Group 1), on the basis of sufficient evidence for cancer in experimental animals and strong mechanistic evidence (for epigenetic alterations and immunosuppression) in exposed humans." The human cancer studies on their own gave "limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)". PFOS was classified as possibly carcinogenic. GenX was not evaluated.
  Quote: "PFOA is carcinogenic to humans (Group 1), on the basis of sufficient evidence for cancer in experimental animals and strong mechanistic evidence (for epigenetic alterations and immunosuppression) in exposed humans."
  Quote fetched from: https://www.iarc.who.int/news-events/iarc-monographs-evaluate-the-carcinogenicity-of-perfluorooctanoic-acid-pfoa-and-perfluorooctanesulfonic-acid-pfos
  Source label: International Agency for Research on Cancer 2023; Zahm et al. 2024, Lancet Oncology
  URL: https://doi.org/10.1016/S1470-2045(23)00622-8
  Design: IARC Monographs hazard classification by an international working group.
  Grade: strong
  Changes from the current card: drop Boston et al. 2025 (its role is unclear and it adds nothing to the syntheses); drop the C8 Science Panel PDF (covered by NASEM); lead with the classification and state that the human evidence alone was limited.
  Verified: YES (both quoted passages found on the IARC news page; "30 international experts" also on that page. The Lancet Oncology item has no abstract in Crossref or Europe PMC.)

---

## Verification of kept, unchanged cards (this pass)

Checked with `verify-quotes.mjs` and `verify-pdfs.py` plus manual fetches, using the scratch file `kept-check.md`:
- MATCH in abstract: Christensen 2021, Arkedis 2021, Raffler (OpenAlex), Björkman Nyqvist 2017, Kaplan et al. 2009, Pieper 2018, Seto 2019, Goodman 2012, Strynar 2015, Rosen 2022.
- MATCH on source page or PDF: Cutler 1986 (PMC), EPA GenX factsheet (PDF), Barr et al. 2012 (PDF, only ligatures differ), HHS OIG (report PDF oei-06-09-00091.pdf; the landing page words it differently), Johansson and Carey 2016 (Semantic Scholar abstract), Kaplan and Schultz 2007 (RePEc abstract).
- Every DOI checked returned 302.

---

## Searches run and what they found

1. Waddington 2019 PITA Campbell review: found; 35 programs; supersedes Molina 2016; carded (A1).
2. Metaketa III, Slough et al. 2021 PNAS: six-site trial; community monitoring modestly cut resource overuse. It monitors fellow users, not a public service, so it fits a neighboring claim. Not carded.
3. Metaketa I, Dunning et al. 2019: information and voting, a neighboring claim. Not carded.
4. Post-2016 social accountability syntheses: Kosec and Wantchekon 2020 (World Development, 48 studies; information alone is not enough without relevance, power and incentives), Fox 2015 (tactical vs strategic), and a Campbell evidence and gap map protocol (Hassan 2024, no results yet). The first two are noted as optional counter-side syntheses.
5. Raffler, Posner and Parkerson: published abstract wording differs between the accepted and final versions; label year should be 2026.
6. Donato and Garcia 2018 replication of Björkman and Svensson (Journal of Development Studies): provider behavior and use replicate, health outcomes "appear less robust". Supports the rewritten Raffler card; not carded.
7. High-income citizen monitoring of public services, field experiments: nothing causal in a high-income country. The closest was a field experiment on citizen text-message reporting of waste collection in Kampala, Uganda (Journal of Public Administration Research and Theory, 2021).
8. Barr et al. publication status: still only the 2012 working paper.
9. External vs internal whistleblowing channels, reviews and causal work: no meta-analysis of channel effects; Wiedman and Zhu 2023 (SEC program deters fraud, a deterrence outcome, not carded); Levtzion-Korach 2010 found and carded (A2).
10. Aviation confidential reporting (ASRS, CHIRP) effectiveness studies: none with measured effects on report volume or hazards.
11. Anonymous reporting natural experiments: only vendor surveys and an Afghan peer-reporting experiment, off-claim.
12. Citizen science water-quality reviews: success factors and data quality; Hadj-Hammou 2017 on coverage complementarity (weaker than Seto). Nothing on detection timing.
13. Buntaine, Greenstone, He et al. 2024 AER: citizen appeals cut pollution in China. It fits the response or verification claims, not detection first. Flag for GenX Proposal 2's "Public seats in the review..." claim.
14. Popular epidemiology (Brown 1992): conceptual, Woburn-based; not carded.
15. NASEM 2022 PFAS guidance: found in NCBI Bookshelf; carded (A3).
16. IARC 2023 PFOA / Zahm et al. 2024 Lancet Oncology: news release verified; used for the rewrite.
17. Whistleblowing meta-analysis (hierarchical closeness, Journal of Business and Psychology 2022): intentions rise when the wrongdoer is at the same level, which bears on claim 2 ("few report without strong protection"), not on this claim. Not carded.
