# Audit C: vaccines proposal pr/2, neighborhood task forces (claims cl/0, cl/4, cl/5)

File audited: `js/spine/covid-vaccines.js`, proposal "Neighborhood task forces decide where and how vaccines are delivered" (block starting near line 1016). Read-only; no repo file was edited.

Proposal implication (outcome sentence): "Community-run delivery raises trust and uptake, narrows the racial vaccination gap, lowers deaths, and strengthens neighborhood institutions."

Lens applied throughout (Tsai / MIT GOV/LAB, EGAP Metaketa): does the participatory element itself change the outcome, under what conditions, and has it replicated. The recurring answer for this proposal is that no study separates the task force from the extra supply, outreach, or programming bundled with it, and the rigorous replications that exist (community-driven development trials) are mostly null on social ties.

Criteria key: C1 fit, C2 design, C3 transport, C4 distinct information, C5 counter role, C6 balance.

---

## Claim cl/0: "Community task forces put access where the barriers are."

Current: 5 evidence, 1 counter, 2 cases.

| # | Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|---|
| E1 | Evidence: Chicago task forces, vaccination moved closer to rest of city (Johnson et al. 2023, Public Health Reports) | Direct: task forces designed outreach and distribution; outcome is coverage in the targeted zip codes | Interrupted time series against other zip codes; task forces bundled with widened eligibility | US city, crisis, the proposal's own model | Only test of the actual intervention | Core support | KEEP | C1 and C3: the only study of the proposal's own model. |
| E2 | Evidence: Mission District neighborhood site reached mostly Latino, uninsured residents (Marquez et al. 2021, PLOS ONE) | Good: community, university, and health department partnership sited and ran a neighborhood site; outcome is who it reached | Program evaluation, no comparison group, self-reported reasons | US city, crisis | New city, new population (Latino, uninsured), and the reason people gave (location, trusted referral) | Weak but honest | KEEP | C4: second US setting and the only card showing who a community-sited clinic actually reached. |
| E3 | Evidence: tribes ran own plans, highest vaccination rate in federal data (Haroz et al. 2022, AJPH; PBS NOVA) | Poor: sovereign tribal governments running whole programs, not neighborhood task forces sharing authority with a health department | Commentary plus news; no comparison of tribes by route; contradicted by national survey | US but a distinct legal setting | Neighborhood of the claim only | Needs its own rival card to stay honest | CUT | C1 and C2: different intervention class, no comparison, and the figure is disputed by a stronger survey. |
| E4 | Evidence: facilities in heavily Black urban counties less likely to give vaccines (Hernandez et al. 2022, PLOS Medicine) | Premise only: shows the barrier under default siting; tests no task force | Cross-sectional, national | US | Describes the problem, not the effect | Not a test of the claim | CUT (fold one sentence into the proposal description) | C1: measures the barrier, not whether task forces fix it. Suggested description sentence: "Early in the rollout, health facilities in heavily Black urban counties were less likely to be giving COVID-19 vaccines." |
| E5 | Evidence: Cleveland federal site gave three of four shots to White people (NBC News on FEMA data) | Premise only, one agency-run site | News report of agency data | US | Same premise as E4, weaker source | Duplicate premise | CUT | C2 and C4: news source repeating the E4 premise at a single site. |
| X1 | Counter: national survey found American Indian and Alaska Native adults had lowest coverage (Kriss et al. 2022, MMWR) | Rival only to E3's tribal figure; says nothing about task forces | Authoritative national survey | US | Loses its role once E3 goes | Orphaned rival | CUT | C5: its only job was to answer E3. |
| X2 | Counter (ADD): coalition-led health programs, no evidence the coalition itself adds value (Anderson et al. 2015, Cochrane) | Close: coalitions of community organizations with members of the minority groups served, planning and running interventions. Outcome is health behavior and status, not siting | Systematic review of 58 controlled studies (randomized, quasi-experimental, controlled before-after); none at low risk of bias | Mostly US minority communities | The only synthesis of the intervention class; states the scope condition that matters for this proposal | Scope condition: the benefit comes from the outreach tactics, and the coalition's added value is unshown | ADD | C2 and C5: a synthesis of the intervention class whose central finding is the exact open question for co-governance. |
| X3 | Counter (ADD): Black neighborhoods in Chicago still lowest after a year of outreach (Kim et al. 2024, JPHMP) | Direct: same program (Protect Chicago Plus), outcome is uptake by community area | Descriptive: city uptake records matched to an interview-built outreach timeline | Same city as E1 | Adds the scope condition E1 hides: gains did not reach Black areas as far | Scope condition, same setting | ADD | C4 and C5: same program as E1, shows the gap closed unevenly and Black areas stayed behind. |

Cases on cl/0:

| Case | Bucket | Reason |
|---|---|---|
| Protect Chicago Plus (Johnson et al. 2023) | DUPLICATE | Same study and same figures as E1. Merge into E1; drop the case card. |
| Tribal Indian Health Service Route Vaccination (PBS NOVA, Haroz 2022, Kriss 2022) | CUT | Weak and internally contested (federal tracking says highest, national survey says lowest), no comparison by route, and tribal self-governance is not the neighborhood task force model. If the group wants the precedent, one sentence in the note is enough: "Many tribes chose to run their own vaccine plans, and reports of how their coverage compared with other groups conflict." |

**Resulting kept set.** Evidence (2): Johnson 2023; Marquez 2021. Counter (2): Anderson 2015 (ADD); Kim 2024 (ADD). Cases: none.

**Balance.** This represents the literature honestly. The only direct test (Chicago) is favorable but cannot separate the task forces from widened eligibility, the one community-sited clinic evaluation has no comparison, the Cochrane synthesis finds no evidence that a coalition adds value beyond its outreach tactics, and the same Chicago program left Black areas behind. No study compares community-chosen with agency-chosen sites holding supply fixed.

### New cards for cl/0

- Type: counter-evidence
  Headline: Health programs run by community coalitions in minority communities improved some health habits, but no study showed the coalition itself made the difference.
  Finding: A review gathered 58 studies of health programs planned and run by coalitions that included members of the racial or ethnic minority groups being served and at least two community organizations. Programs that used lay outreach workers improved health behaviors, while broad community-wide change strategies made little or no difference, and no study was at low risk of bias. Because the studies said too little about the coalitions themselves, "a definitive answer as to whether a coalition-led intervention adds extra value to the types of community engagement intervention strategies described in this review remains unattainable." The review ends before COVID-19 and does not look at where services were placed.
  Quote: "Thus, a definitive answer as to whether a coalition-led intervention adds extra value to the types of community engagement intervention strategies described in this review remains unattainable."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1002/14651858.CD009905.pub2%22&resultType=core&format=json
  Source label: Anderson et al. 2015, Cochrane Database of Systematic Reviews
  URL: https://doi.org/10.1002/14651858.CD009905.pub2
  Design: Systematic review of 58 cluster-randomized, randomized, quasi-experimental, controlled before-after, interrupted time series, and prospective controlled cohort studies; no pooled estimate; certainty rated very low to low.
  Grade: moderate (a synthesis, but of studies none of which was at low risk of bias)
  Verified: YES (quote found in raw Europe PMC and OpenAlex abstract text; DOI returns 302)

- Type: counter-evidence
  Headline: Black neighborhoods in Chicago still had the lowest vaccination rates after a year of community outreach.
  Finding: Researchers matched the timeline of Chicago's vaccine outreach, led by Protect Chicago Plus, to uptake in each community area. By December 2021, 51.3 percent of Black Chicagoans had completed vaccination, against 63.6 percent of Hispanic, 69.8 percent of White, and 77.6 percent of Asian residents. "Despite citywide efforts to build community infrastructure, Black communities had relatively lower levels of vaccine uptake than other communities." The study describes the pattern and does not compare areas with and without task forces.
  Quote: "Despite citywide efforts to build community infrastructure, Black communities had relatively lower levels of vaccine uptake than other communities."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1097/phh.0000000000001841%22&resultType=core&format=json
  Source label: Kim et al. 2024, Journal of Public Health Management and Practice
  URL: https://doi.org/10.1097/phh.0000000000001841
  Design: Interviews with health officials and community organization leaders to build an outreach timeline, matched descriptively to city vaccination records by community area and race.
  Grade: moderate (city records are authoritative; the link to outreach is descriptive)
  Verified: YES (quote found in raw Europe PMC abstract text, record fetched by PubMed ID 37966958; DOI returns 302; volume 30, issue 1, E21-E30 per Crossref)

---

## Claim cl/4: "Higher vaccination in hard-hit neighborhoods prevents deaths and narrows racial gaps in deaths."

Current: 4 evidence, 2 counter, 0 cases.

| # | Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|---|
| E1 | Evidence: California steered vaccine to least advantaged communities, deaths averted (Hoover et al. 2024, Health Affairs) | Direct on deaths; area index, not race | Quasi-experimental and counterfactual analyses with sensitivity tests | US state, crisis | Only causal estimate of deaths prevented by neighborhood targeting | Core support | KEEP | C2: the one causal estimate, in the closest setting. |
| E2 | Evidence: US counties with higher coverage had lower death rates (Suthar et al. 2022, The BMJ) | Deaths yes; counties are not neighborhoods; no race | County-level association | US, but county scale | Adds nothing Hoover and Zeng do not, and Zeng is at neighborhood scale with race | Superseded | CUT (replace with Zeng 2022) | C2 and C4: E1 is causal on the same outcome, and Zeng gives the same association at zip code scale with race. |
| E3 | Evidence: geographic priority at every age reaches those most likely to die better than age cutoffs (Wrigley-Field et al. 2021, Science Advances) | Fits the racial half: shows neighborhood targeting reaches Black, Indigenous, and other residents of color at highest risk | Simulation of schedules against observed death rates | US (California, Minnesota) | Only card on why geographic targeting reaches racial death risk | Mechanism for the racial half | KEEP | C1 and C4: the only US card linking neighborhood targeting to race-specific death risk. |
| E4 | Evidence: in Ontario, vaccination gap explained over half of low-income neighborhoods' excess deaths (Wang et al. 2026, AJE) | Income, not race | Individual-level causal mediation, strong measurement | Canada | Zeng now carries the observed neighborhood-to-death-gap link in the US, by race | Transport-dominated | CUT | C3: Canadian and income-based; Zeng covers the racial death gap in a US city. |
| E5 | Evidence (ADD): Chicago zip codes with lower vaccination, mostly Black, had more deaths (Zeng et al. 2022, JAMA Network Open) | Direct on both halves: neighborhood vaccination, deaths, and racial disparity in deaths | Retrospective cohort of zip codes with a difference-in-differences estimate of preventable deaths | Chicago, the proposal's model city | Adds the racial gap in deaths at neighborhood scale | Support | ADD | C1 and C3: the only card that ties neighborhood vaccination to racial gaps in deaths, in the proposal's own city. |
| X1 | Counter: shrinking Black-White death gap mostly from rising White deaths and rural spread (Lundberg et al. 2023, JAMA Network Open) | Racial death gap yes; vaccination not measured | National decomposition | US | Warns that the narrowing gap is not mainly Black deaths falling | Scope condition on the racial half | KEEP | C5: strongest national check on reading the narrowed gap as a vaccination win. |
| X2 | Counter: Ontario gap in hospital stays and deaths did not shrink despite neighborhood priority (Ma et al. 2023, OFID) | Tests the program class (neighborhood prioritization) on the gap in deaths; income, not race | Descriptive surveillance, brief report | Canada | Only card where neighborhood priority was in place and the death gap did not move | Rival finding on the same outcome | KEEP | C5: the one rival on the gap outcome under the same program class; Canada kept because no US rival exists. |

**Resulting kept set.** Evidence (3): Hoover 2024; Zeng 2022 (ADD); Wrigley-Field 2021. Counter (2): Lundberg 2023; Ma 2023. Cases: none.

**Balance.** Honest. The deaths half is well supported (one causal estimate plus a neighborhood-scale US association). The racial-gap half rests on an association and a simulation, and both counter cards show gaps narrowing for other reasons or not narrowing under neighborhood priority. No study estimates, with a causal design, how neighborhood vaccination changed racial gaps in deaths; the gap note in `research/gaps-2026-09-12.md` still stands.

### New card for cl/4

- Type: evidence
  Headline: Chicago zip codes with lower vaccination, most of them largely Black, had more COVID-19 deaths.
  Finding: Across 52 Chicago zip codes, 80 percent of residents in the least vaccinated quarter were Black, against 8 percent in the most vaccinated quarter. A zip code vaccination rate 10 points higher before the Alpha wave went with a 39 percent lower risk of dying of COVID-19, and 24 percent lower before the Delta wave. The authors estimate that about three quarters of deaths in the least vaccinated zip codes might have been prevented at the coverage of the most vaccinated, and conclude that "inequitable vaccination coverage exacerbated existing racial and ethnic disparities in COVID-19 deaths." The comparison is between zip codes, so other neighborhood differences may add to the gap.
  Quote: "These findings suggest that low zip code-level vaccination rates in Chicago were associated with more deaths during the Alpha and Delta waves of COVID-19 and that inequitable vaccination coverage exacerbated existing racial and ethnic disparities in COVID-19 deaths."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1001/jamanetworkopen.2022.14753%22&resultType=core&format=json
  Source label: Zeng et al. 2022, JAMA Network Open
  URL: https://doi.org/10.1001/jamanetworkopen.2022.14753
  Design: Retrospective cohort of 2.69 million residents in 52 zip codes; mixed-effects Poisson regression of weekly deaths on prior zip code vaccination, and a linear difference-in-differences estimate of preventable deaths.
  Grade: moderate (between-area comparison)
  Verified: YES (quote found in raw Europe PMC abstract text, record fetched by PMCID PMC9142872; DOI resolves; volume 5, issue 5, e2214753 per Crossref)

---

## Claim cl/5: "Organizing delivery together strengthens community ties and reduces isolation."

Current: 5 evidence, 4 counter, 0 cases.

| # | Card | C1 Fit | C2 Design | C3 Transport | C4 Distinct | C5/C6 | VERDICT | Reason |
|---|---|---|---|---|---|---|---|---|
| E1 | Evidence: lonely older adults given volunteer role became less lonely (Warner et al. 2024, AJGP) | Isolation half: volunteering reduces the volunteer's loneliness; phoned strangers, not neighbors | Randomized trial with active control | Hong Kong, high-income | Only trial on the people doing the service | Support, but X1 shows it faded | REWRITE (merge X1 into it) | C4: same trial and team as X1; one card should carry both the six-month gain and the twelve-month fade. |
| E2 | Evidence: homebound adults called by young volunteers felt less lonely (Kahlon et al. 2021, JAMA Psychiatry) | Poor: measures people who received calls, not people organizing together; one of two loneliness scales not significant | Randomized trial | US (Texas) | Tests befriending, a different intervention | Neighbor claim | CUT | C1: tests receiving calls, not organizing delivery together. |
| E3 | Evidence: Liberian villages cooperated better, only where men and women worked together (Fearon, Humphreys and Weinstein 2015, APSR) | Ties half: collective projects and cooperation | Randomized field experiment | Post-war Liberia | Included in the Casey 2018 synthesis, which reports its result as the one positive exception | Superseded by synthesis | MERGE into Casey 2018 | C2: a synthesis of the same randomized trials now covers it; its mixed-gender scope condition goes into the Casey finding. |
| E4 | Evidence: health programs that involved residents raised perceived social support (O'Mara-Eves et al. 2015, BMC Public Health) | Ties half: community engagement in health programs, perceived social support | Meta-analysis of 131 controlled trials, mixed randomized and non-randomized | Wealthy countries, disadvantaged groups | Only synthesis in high-income health delivery settings | Support | KEEP | C2 and C3: synthesis, in rich-country health programs closest to the proposal. |
| E5 | Evidence: Britons who helped neighbors through organized efforts felt closer to their community (Bowe et al. 2022, JCASP) | Closest intervention: coordinated community helping during the pandemic; community identification | Single-wave survey with path models | UK, pandemic | Only card on organized pandemic helping itself | Support | KEEP | C1 and C3: the only study of the intervention class in a pandemic in a high-income democracy. |
| X1 | Counter: a year on, most of the drop in loneliness had faded (Yeung et al. 2025, Lancet Healthy Longevity) | Same outcome as E1 | Same randomized trial, twelve-month follow-up | Hong Kong | Same team, same site as E1 | Durability rival | MERGE into E1 | C4: same-team follow-up; the fade goes into E1's headline so it stays visible. |
| X2 | Counter: Sudanese villages ran projects, networks and norms unchanged (Avdeenko and Gilligan 2015, APSR) | Ties half | Randomized field experiment, 24 communities | Rural Sudan | Included in Casey 2018 | Superseded | MERGE into Casey 2018 | C2: covered by the newer synthesis. |
| X3 | Counter: community-driven development in four war-affected countries did little for cohesion (King and Samii 2014, World Development) | Ties half | Synthesis of four randomized trials | Poor, war-affected | Casey 2018 covers the same four trials plus Sudan, Indonesia, and the Philippines, and adds the explanation | Superseded | MERGE into Casey 2018 (replace) | C2: a later, broader, peer-reviewed synthesis of the same trials. |
| X4 | Counter: volunteering benefits in cohort studies not confirmed by trials (Jenkinson et al. 2013, BMC Public Health) | Poor: outcomes are depression, life satisfaction, and well-being, not ties or loneliness | Systematic review; few small trials; searches ended 2013 | Mixed | Predates the one trial that measured loneliness | Off outcome and outdated | CUT | C1: tests a neighboring outcome, and the merged Warner and Yeung card now gives the trial evidence on durability. |
| X5 | Counter (ADD): villagers who chose and built projects together got the projects but no gain in trust or ties (Casey 2018, Annual Review of Economics) | Ties half: residents jointly choosing and running local projects; trust, networks, collective action | Synthesis of randomized trials across seven countries | Poor, often post-war villages | Replaces X2, X3, and E3 in one card with the scope conditions | Strongest rival on ties | ADD | C2 and C5: the standing synthesis of the replicated trials on this exact question. |

**Resulting kept set.** Evidence (3): Warner 2024 merged with Yeung 2025 (REWRITE); O'Mara-Eves 2015; Bowe 2022. Counter (1): Casey 2018 (ADD). Cases: none.

**Balance.** Honest only if the rewritten Warner headline carries the fade. The counts read three to one, but the weight runs the other way on ties: the one randomized trial on loneliness shows a gain that mostly disappears within a year, the supporting ties evidence is one pooled estimate of perceived social support and one single-wave survey, and the only replicated body of randomized evidence on doing projects together (Casey's synthesis) finds no lasting gain in trust or networks. The isolation half has short-term causal support; the ties half has none. If the site's visual counts drive readers, consider keeping Yeung as its own counter card rather than merging, which would make the display two to two.

### Rewritten and new cards for cl/5

- Type: evidence (REWRITE, merges Warner 2024 and Yeung 2025)
  Headline: Lonely older adults given a volunteer role calling isolated elders became less lonely, but most of the gain was gone within a year.
  Finding: In Hong Kong, lonely adults aged 50 to 70 were assigned either to volunteer by phone with lonely, low-income older people or to a comparison program of classes and social gatherings. "After 6 months, volunteers compared to controls, showed benefits on loneliness, social network engagement, stress and depressive symptoms." At twelve months "most of the positive effects of volunteering were not sustained," though people who kept volunteering more than two hours a week stayed less lonely, and who kept going was their own choice. The volunteers phoned strangers, not neighbors.
  Quote: "After 6 months, volunteers compared to controls, showed benefits on loneliness, social network engagement, stress and depressive symptoms."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1016/j.jagp.2023.12.022%22&resultType=core&format=json
  Source label: Warner et al. 2024, American Journal of Geriatric Psychiatry
  URL: https://doi.org/10.1016/j.jagp.2023.12.022
  Grade: strong
  Verified: YES (see verifier run below)

- Type: evidence (second source on the merged card)
  Quote: "Although most of the positive effects of volunteering were not sustained at T3, the volunteers who continued to volunteer for more than 2 h per week at T3 reported lower levels of loneliness than those who did not maintain volunteering."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1016/j.lanhl.2024.100664%22&resultType=core&format=json
  Source label: Yeung et al. 2025, The Lancet Healthy Longevity
  URL: https://doi.org/10.1016/j.lanhl.2024.100664
  Grade: strong
  Verified: YES (prior report notes a no-break space between "2" and "h" in the raw abstract; see verifier run below)

- Type: counter-evidence
  Headline: Villagers who chose and built local projects together got the projects, but not more trust or stronger social ties.
  Finding: A review of field experiments in Sierra Leone, Liberia, Afghanistan, the Democratic Republic of the Congo, Sudan, Indonesia, and the Philippines found that community-driven development, where residents choose and run local projects, "effectively delivers public goods and modest economic returns at low cost in difficult environments." But "There is little evidence, however, that CDD transforms local decision making or empowers the poor in any enduring way." Measures of trust did not move in nearly every country, and in Sudan residents' social networks were, if anything, smaller. The one exception was Liberia, where villages cooperated better on a shared task, but only where men and women worked on it together. Trust was already high in these villages, which are poor and often post-war, not US neighborhoods in a health crisis.
  Quote: "There is little evidence, however, that CDD transforms local decision making or empowers the poor in any enduring way. Part of this failure may be because some constraints believed to be important—like insufficient social capital—appear not to bind."
  Quote fetched from: https://api.openalex.org/works/doi:10.1146/annurev-economics-080217-053339?mailto=research@example.org
  Source label: Casey 2018, Annual Review of Economics
  URL: https://doi.org/10.1146/annurev-economics-080217-053339
  Design: Synthesis of randomized controlled trials of community-driven development, pairing each study's best behavioral measures to the claimed effects on participation, institutions, and social capital (no pooled estimate).
  Grade: strong (synthesis of randomized trials)
  Verified: YES for the abstract quote (OpenAlex abstract text; DOI returns 302). Supporting passages from the author's manuscript PDF (not the typeset version), used for the Sudan, trust, and Liberia sentences in the finding, are checked in the PDF block below.

- Type: counter-evidence (supporting passage, author manuscript PDF)
  Quote: "While these studies find no evidence that CDD enhances measures of such localized social capital, like trust and social networks, this may be a moot point."
  Quote fetched from: https://gsb-faculty.stanford.edu/katherine-casey/files/2022/04/casey_cdd_are_vol10_all.pdf
  Source label: Casey 2018, Annual Review of Economics (author manuscript)
  Verified: see verify-pdfs run below

---

## Verification runs

Both reusable verifiers were run on this file after writing it.

`verify-quotes.mjs` (abstracts fetched fresh from Europe PMC / OpenAlex / Crossref, DOI HEAD check):
- MATCH Anderson et al. 2015 (europepmc, doi 302)
- MATCH Kim et al. 2024 (europepmc, doi 302)
- MATCH Zeng et al. 2022 (europepmc, doi 302)
- MATCH Warner et al. 2024 (europepmc, doi 302)
- MATCH Yeung et al. 2025 (europepmc, doi 302)
- MATCH Casey 2018 abstract (openalex, doi 302)
- Casey 2018 manuscript passage: PDF, handed to the PDF checker

`verify-pdfs.py`: MATCH Casey 2018 author manuscript passage (94,866 characters extracted).

The kept existing cards (Johnson, Marquez, Hoover, Wrigley-Field, Lundberg, Ma, O'Mara-Eves, Bowe) were verified in the prior reports (`vax-parts/part3`, `part4`). Here I re-fetched the abstracts for Johnson, Marquez, Hoover, Wrigley-Field, Lundberg, and Ma, and the figures on those cards match. I did not re-fetch O'Mara-Eves or Bowe; those rely on the prior report's script check. Johnson's quote comes from the full text, not the abstract, and was checked in that earlier audit.

---

## Searches run and what they found

- Cochrane / Europe PMC, "community coalition-driven interventions health disparities": found Anderson et al. 2015 (CD009905.pub2). Added to cl/0 as counter.
- Community-driven development synthesis, "Casey Radical Decentralization Annual Review of Economics": found Casey 2018; full manuscript PDF fetched and text searched for social capital, trust, and cohesion. Added to cl/5; supersedes King and Samii 2014, Avdeenko and Gilligan 2015, and Fearon et al. 2015.
- "White Menon Waddington community-driven development social cohesion": 3ie working paper (2017/2018) finding no effect on cohesion. Not used: working paper, and Casey 2018 is the peer-reviewed synthesis of the same trials.
- "Haldane 2019 community participation in health services systematic review" (PLOS ONE, DOI 10.1371/journal.pone.0216112): verified abstract, positive narrative synthesis in high and upper-middle income countries. Not added: narrative, no effect sizes, outcomes too broad to test "access where the barriers are". Available if the group wants a supportive synthesis on cl/0.
- Community monitoring and bottom-up accountability, EGAP lens: Molina et al. 2017, Journal of Development Effectiveness (verified abstract: benefits on quality and corruption, access effects conditional on contact between citizens and providers); Raffler, Posner and Parkerson, "The Weakness of Bottom-Up Accountability" (Uganda health, large randomized replication of Björkman and Svensson; no effect on utilization or health outcomes). Not added: monitoring providers is a neighboring intervention class, settings are low-income, and the Raffler paper was found only as a working paper and EGAP brief, with no journal version located in OpenAlex. Worth a sentence in the proposal note if the group wants the replication record.
- "difference-in-differences community-based vaccination sites uptake Black Hispanic", "FEMA community vaccination centers equity", "community-partnered clinics vs mass vaccination sites": found Kim et al. 2024 (added), Loma Linda partnership descriptions, VaccinateLA protocol, and FEMA oversight reports. No study compares community-chosen and agency-chosen sites with supply held fixed.
- "tribal IHS vs state allocation vaccination coverage comparison": HHS Inspector General audit, NEJM perspective, IHS pages. No comparison of tribes by route; supports cutting the tribal cards.
- "vaccination deaths averted by race", "zip code vaccination coverage mortality racial disparities Chicago": found Zeng et al. 2022 (added) and Phillips et al. 2023, Preventing Chronic Disease (mapping, no abstract fetched, not used). No causal estimate of vaccination's effect on racial gaps in deaths.
- "volunteering loneliness systematic review" (2021 to 2025): Akhter-Khan et al. review of caregiving, volunteering, and loneliness (Aging and Mental Health, DOI 10.1080/13607863.2022.2144130, observational studies only, verified abstract); Richardson, König and Hajek 2025 (German panel, onset of volunteering and loneliness, verified abstract); friendly-visiting and home-based intervention reviews (recipients, not organizers). None beats the Hong Kong trial on design; none added.
- "COVID-19 mutual aid participation loneliness civic engagement longitudinal": qualitative and single-survey studies (Bender 2024, Mao 2021, political identity and well-being study). Nothing longitudinal or comparative on ties; Bowe 2022 stays as the closest.
- Prior report reused for existing-card verification context: `vax-parts/part3-proposal3-claims1-5.md` and `vax-parts/part4-proposal3-claim6-care.md`.
