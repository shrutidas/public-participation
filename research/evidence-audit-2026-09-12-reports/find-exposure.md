# Outside evidence for genx-pfas pr/1 claim 4: "Earlier detection and verified compliance shorten the exposure window."

Location: js/spine/genx-pfas.js, proposal pr/1 (line 831), claim at line 1301. Current ev/0 (WRAL timeline plus Kotlarz 2020) and ev/1 (WUNC, $240M filtration) are both Cape Fear GenX. Current ce/0 (agencies knew first, Coastal Review and WRAL) and ce/1 (Pétré 2022, fluoroethers still reaching the Cape Fear) are both Cape Fear GenX too.

## Recommended kept set

Supporting (3), replacing ev/0 and ev/1:

1. **Chen et al. 2007, EHP (Bangladesh arsenic).** Covers the detection half. Wells were tested, households were told, most people with unsafe wells switched, and urinary arsenic fell by nearly half. Arsenic is measured in the body, so this goes all the way from detection to lower exposure.
2. **Zahran, McElmurry and Sadler 2017, Environmental Research (Flint).** Also covers the detection half, with a quasi-experimental design. Children's blood lead fell back to pre-crisis levels once the water was switched back. This is the "window closes when action comes" link.
3. **Duflo, Greenstone, Pande and Ryan 2013, QJE (Gujarat auditors).** Covers the verified-compliance half with a randomized design. Once auditors were independent, they reported truthfully and plants cut their emissions.

Why these three: each half of the claim gets causal or repeated-measure evidence. None comes from the GenX, Cape Fear or C8 story. None repeats a source already in pr/1. I avoided Bartell et al. 2010 (Little Hocking/Lubeck) because the C8 area is in the case timeline, and the earlier audit marked the C8 material CIRCULAR. I avoided Brede et al. 2010 (Arnsberg) because it already sits on an impact node at line 290.

Alternates, all drafted below: Xu et al. 2020 Ronneby, if the team wants a PFAS-specific supporting card in place of Flint; Buntaine et al. 2024 AER or Axbard and Deng 2023 AEJ Applied, in place of Duflo 2013.

Counter (3):

1. **Ruyle et al. 2023, ES&T (Cape Cod fire training site).** Replaces ce/1 (Pétré 2022, which is GenX-case). It makes the same point from outside the case: PFAS contamination persists long after the source stops.
2. **Li et al. 2018, OEM (Ronneby half-lives).** This one is new. Even after clean water arrives, PFAS body burden takes years to halve, so a shorter exposure window does not clear what people already carry.
3. **Duflo, Greenstone, Pande and Ryan 2018, Econometrica (random inspections).** This one is new, against the compliance half. Doubling inspections only slightly raised compliance.

About ce/0 ("Agencies and researchers knew before the public did"): I found no outside card on that exact point that is not already drafted elsewhere. The nearest is Roy and Edwards 2019 on Flint warnings being ignored, which audit-E already drafts for pr/2/cl/1. My recommendation is to drop ce/0 from this claim and use counter slot 3 for Duflo 2018. If the team would rather keep a "detection without action" counter, Zou 2021 (drafted below) is a second option on the compliance side, and no outside detection-side card was found.

---

## Proposed cards

- Type: evidence (supporting), for genx-pfas pr/1 claim "Earlier detection and verified compliance shorten the exposure window." Replaces ev/0.
  Headline: Bangladeshi families told their wells held arsenic mostly switched wells, and the arsenic in their bodies fell by nearly half.
  Finding: In a cohort of 11,746 people in Araihazar, researchers tested wells, told households the results, labeled the wells, and installed deep community wells where exposure was worst. Two years later, 58 percent of participants with unsafe wells had switched. Among those who switched to a safe well, average urinary arsenic fell 46 percent, from 375 to 200 micrograms per gram of creatinine, which moved them toward the level of people who had used safe wells all along. The drop grew with time since switching. The authors conclude that "testing of wells and informing households of the consequences of As exposure, combined with installation of deep community wells where most needed, can effectively address the continuing public health emergency from arsenic in drinking water in Bangladesh." Testing and disclosure came as a package with new wells, so the study cannot separate the effect of the information from the effect of the new wells. Arsenic also clears from the body far faster than PFAS.
  Quote: "Our study shows that testing of wells and informing households of the consequences of As exposure, combined with installation of deep community wells where most needed, can effectively address the continuing public health emergency from arsenic in drinking water in Bangladesh."
  URL: https://doi.org/10.1289/ehp.9833
  Quote fetched from: https://pmc.ncbi.nlm.nih.gov/articles/PMC1892113/
  Source label: Chen, van Geen, Graziano, Pfaff, Madajewicz et al. 2007, Environmental Health Perspectives
  Design: prospective cohort with repeated urinary arsenic measurement before and after a testing, disclosure and well-installation program; people who used safe wells throughout serve as the reference.
  Grade: strong (authoritative repeated biomonitoring in a large cohort)
  Can show: detecting contamination and telling the people drinking it led most of them to act, and their measured exposure fell.
  Cannot show: which part of the package mattered most. It also cannot show how much sooner detection would have to come to matter for a slow-clearing chemical like PFAS.
  Verification: I fetched the quote verbatim from the PMC abstract (the PMC page uses μg, and Europe PMC renders units as "microg", so the quote avoids units). DOI resolves (302).

- Type: evidence (supporting), for the same claim. Replaces ev/1.
  Headline: Flint children's blood lead fell back to where it had been once the city switched its water back.
  Finding: Using more than 21,000 geocoded blood lead tests from Genesee County children, the authors divide the Flint crisis into four phases and estimate how water lead moved children's blood lead in each. The switch to Flint River water raised blood lead and nearly doubled or more the odds of a level at or above 5 micrograms per deciliter. After boil water advisories, levels fell about halfway back as households avoided tap water. Then "the return to the baseline source water (Phase D) returned child BLLs to pre-FWC levels". When officials acted on what had been detected, exposure ended quickly. Lead leaves blood within weeks, so the recovery is faster than it would be for PFAS.
  Quote: "Finally, the return to the baseline source water (Phase D) returned child BLLs to pre-FWC levels further implicating water-lead exposure as a causal source of child BLLs throughout the FWC."
  URL: https://doi.org/10.1016/j.envres.2017.05.028
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1016/j.envres.2017.05.028%22&resultType=core&format=json
  Source label: Zahran, McElmurry and Sadler 2017, Environmental Research
  Design: quasi-experimental time-series models on geocoded, time-stamped blood lead tests across four exposure phases.
  Grade: strong
  Can show: acting on a detected drinking water contaminant ends the rise in body burden, and children's levels return to baseline.
  Cannot show: that detection itself came earlier. In Flint it came late, and residents' complaints went unheeded for more than a year. It also cannot show the same speed of recovery for a persistent chemical.
  Verification: I fetched the quote verbatim from the Europe PMC abstract. DOI resolves (302).

- Type: evidence (supporting), for the same claim. New card, for the verified-compliance half.
  Headline: Indian plants cut their pollution after auditors were made independent of the firms they checked.
  Finding: In Gujarat, industrial plants chose and paid their own environmental auditors. A two-year field experiment randomly assigned plants to a reformed audit market designed to reward accurate reporting (the abstract does not detail the mechanics; the paper's own description should be checked before adding them). Under the old system, auditors "systematically reporting plant emissions just below the standard, although true emissions were typically higher". Under the reform, auditors reported more truthfully, far fewer plants were falsely reported as compliant, and "treatment plants, in turn, reduced their pollution emissions." This concerns air and water emissions from plants in India, not drinking water in the United States.
  Quote: "Second, the treatment caused auditors to report more truthfully and very significantly lowered the fraction of plants that were falsely reported as compliant with pollution standards. Third, treatment plants, in turn, reduced their pollution emissions."
  URL: https://doi.org/10.1093/qje/qjt024
  Quote fetched from: https://ideas.repec.org/a/oup/qjecon/v128y2013i4p1499-1545.html
  Source label: Duflo, Greenstone, Pande and Ryan 2013, Quarterly Journal of Economics
  Design: randomized field experiment across plants.
  Grade: strong
  Can show: verification that does not depend on the polluter changes both reported and actual emissions.
  Cannot show: anything about resident monitors specifically (the verifiers were paid professionals under a regulator), or effects on human exposure.
  Verification: I fetched the quote verbatim from the RePEc abstract (the OUP page is behind a Cloudflare challenge). The OpenAlex abstract matches. DOI resolves (302).

- Type: evidence (supporting, ALTERNATE for the Flint card if a PFAS-specific card is preferred)
  Headline: Swedish residents whose PFAS-contaminated water supply was behind them sooner had much lower levels in their blood.
  Finding: In December 2013 Ronneby, Sweden discovered that water supplying a third of its households was heavily contaminated by firefighting foam from a military airport. Blood tests of 3,297 residents, linked to registry records of where they had lived each year, found that "Ronneby residents who resided in the area with contaminated water supply during 2005-2013 showed much higher PFAS levels in 2014 than those exposed only before 2005." Serum PFHxS was 135 times that of a neighboring reference town. The more recently people's exposure ended, the more PFAS they carried.
  Quote: "Ronneby residents who resided in the area with contaminated water supply during 2005-2013 showed much higher PFAS levels in 2014 than those exposed only before 2005."
  URL: https://doi.org/10.1016/j.envint.2020.106333
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1016/j.envint.2020.106333%22&resultType=core&format=json
  Source label: Xu, Nielsen, Li et al. 2020, Environment International
  Design: cross-sectional biomonitoring of a large exposed population with registry residential histories and an unexposed reference group.
  Grade: moderate
  Can show: for PFAS in drinking water, blood levels track how recently exposure ended, so an earlier cutoff means a lower body burden.
  Cannot show: that earlier detection would have happened. The comparison groups also differ in how long they were exposed, not only in when exposure ended.
  Verification: I fetched the quote verbatim from the Europe PMC abstract. DOI resolves (302).

- Type: evidence (supporting, ALTERNATE for Duflo 2013)
  Headline: Chinese factories flagged publicly for violations cut their pollution more than those flagged privately.
  Finding: In a nationwide field experiment, citizen appeals about firms that violated standards were randomly assigned to be public (on social media) or private. "Public appeals to the regulator through social media substantially reduce violations and pollution emissions, while private appeals cause more modest environmental improvements", and control firms did not offset the reductions. The violations came from firms' continuous emissions data. This card fits pr/1's resident role, but it overlaps with claim 2 (disclosure pressure).
  Quote: "First, public appeals to the regulator through social media substantially reduce violations and pollution emissions, while private appeals cause more modest environmental improvements."
  URL: https://doi.org/10.1257/aer.20221215
  Quote fetched from: https://www.aeaweb.org/articles?id=10.1257/aer.20221215
  Source label: Buntaine, Greenstone, He, Liu, Wang and Zhang 2024, American Economic Review
  Design: nationwide randomized field experiment with randomized saturation at the prefecture level.
  Grade: strong
  Can show: outside parties who use monitoring data to report violations cut actual emissions.
  Cannot show: effects on drinking water exposure.
  Verification: I fetched the quote verbatim from the AEA page. DOI resolves (302).

- Type: evidence (supporting, ALTERNATE for Duflo 2013)
  Headline: Chinese cities that got real-time air monitors enforced more against local firms and ended up with less pollution.
  Finding: Using the central government's criteria for where monitors were placed, the authors show that real-time monitoring "(i) increases enforcement against local firms, (ii) improves the targeting of enforcement, and (iii) reduces aggregate pollution", with stronger effects where the data were harder to manipulate. The accountability here runs from the central government down, not from residents.
  Quote: "we show that monitoring (i) increases enforcement against local firms, (ii) improves the targeting of enforcement, and (iii) reduces aggregate pollution"
  URL: https://doi.org/10.1257/app.20210386
  Quote fetched from: https://www.aeaweb.org/articles?id=10.1257/app.20210386
  Source label: Axbard and Deng 2023, American Economic Journal: Applied Economics
  Design: quasi-experimental design exploiting monitor assignment criteria.
  Grade: strong
  Verification: I fetched the quote verbatim from the AEA page. DOI resolves (302).

- Type: counterEvidence, for the same claim. Replaces ce/1 (Pétré 2022).
  Headline: PFAS from firefighting foam still pollute groundwater at a Cape Cod base decades after the foam stopped being used.
  Finding: At a former military fire training site on Cape Cod, a multidecade groundwater record and soil survey show that "terminal PFAS still exceed regulatory limits by 2000-fold decades after AFFF use ceased." Precursor chemicals held in the soil above the water table keep breaking down into PFHxS and PFBS. The authors' model suggests contamination above guidelines "will persist for centuries without remediation." Catching and stopping a source earlier limits how much builds up, but it does not end the contamination already in the ground.
  Quote: "Terminal PFAS still exceed regulatory limits by 2000-fold decades after AFFF use ceased."
  URL: https://doi.org/10.1021/acs.est.3c00675
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1021/acs.est.3c00675%22&resultType=core&format=json
  Source label: Ruyle, Thackray, Butt, LeBlanc, Tokranov, Vecitis and Sunderland 2023, Environmental Science and Technology
  Design: multidecade groundwater time series and source-zone soil survey fitted to a geochemical box model.
  Grade: strong (authoritative repeated measure; the centuries estimate is modeled)
  Can show: stopping a PFAS source does not stop contamination of the water people draw on.
  Cannot show: human exposure directly, or what share of exposure comes from legacy sources versus ongoing discharge.
  Verification: I fetched the quote verbatim from the Europe PMC abstract. DOI resolves (302). Alternate on the same point: Weber et al. 2017 ES&T (https://doi.org/10.1021/acs.est.6b05573), "both act as continuous PFAS sources to the groundwater despite 18 and 20 years of inactivity, respectively".

- Type: counterEvidence, for the same claim. New.
  Headline: After a Swedish town got clean water, PFAS stayed in residents' blood for years.
  Finding: Ronneby, Sweden provided clean water from December 16, 2013, after decades of contamination from firefighting foam. Up to seven blood samples per person from 106 residents between 2014 and 2016 showed serum levels falling 13 to 26 percent a year. "The mean estimated half-life was 5.3 years (95% CI 4.6 to 6.0) for PFHxS, 3.4 years (95% CI 3.1 to 3.7) for PFOS and 2.7 years (95% CI 2.5 to 2.9) for PFOA." Ending exposure starts a slow decline. It does not quickly remove what people have already absorbed.
  Quote: "The mean estimated half-life was 5.3 years (95% CI 4.6 to 6.0) for PFHxS, 3.4 years (95% CI 3.1 to 3.7) for PFOS and 2.7 years (95% CI 2.5 to 2.9) for PFOA."
  URL: https://doi.org/10.1136/oemed-2017-104651
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1136/oemed-2017-104651%22&resultType=core&format=json
  Source label: Li, Fletcher, Mucs, Scott, Lindh, Tallving and Jakobsson 2018, Occupational and Environmental Medicine
  Design: cohort with repeated serum measurement after exposure ended.
  Grade: strong (authoritative repeated biomonitoring)
  Can show: the body-burden window for long-chain PFAS runs years past the cutoff.
  Cannot show: that earlier detection is pointless. Levels do fall, and a shorter exposure means less to clear (see the Xu 2020 alternate). Short-chain PFAS clear much faster, with half-lives measured in weeks to months (Xu et al. 2020 EHP, https://doi.org/10.1289/EHP6785).
  Verification: I fetched the quote verbatim from the Europe PMC abstract. DOI resolves (302). Note: OpenAlex lists 2017 (online first); the print issue is 2018.

- Type: counterEvidence, for the same claim. New (compliance half; takes the slot freed by dropping ce/0).
  Headline: Doubling inspections of Indian plants barely raised compliance with pollution rules.
  Finding: The same Gujarat regulator worked with researchers to double the inspection rate for randomly chosen plants, with the extra inspections assigned at random. "We find that treatment plants only slightly increased compliance." Random inspections found fewer extreme violators than the regulator's own targeted ones, and the authors estimate that targeted inspections produce three times the abatement of random ones. More checking alone does not cut pollution unless it reaches the worst polluters. The authors also find that the regulator's information on plant pollution is poor and that better monitoring would cut emissions.
  Quote: "We find that treatment plants only slightly increased compliance."
  URL: https://doi.org/10.3982/ECTA12876
  Quote fetched from: https://www.econometricsociety.org/publications/econometrica/2018/11/01/value-regulatory-discretion-estimates-environmental-inspections
  Source label: Duflo, Greenstone, Pande and Ryan 2018, Econometrica
  Design: randomized field experiment combined with a structural model for counterfactuals.
  Grade: strong
  Can show: verification effort does not translate automatically into compliance.
  Cannot show: anything about independent auditing (the 2013 paper found that it works), or anything about drinking water.
  Verification: I fetched the quote verbatim from the Econometric Society page. The OpenAlex abstract matches. DOI resolves (302).

- Type: counterEvidence (ALTERNATE for Duflo 2018)
  Headline: US air pollution was worse on the days federal monitors were not sampling.
  Finding: Under a once-every-six-days sampling schedule, satellite data show "air quality is significantly worse on unmonitored days", driven by pollution being held down on monitored days. Verification that polluters can predict gets gamed.
  Quote: "Using satellite data of monitored areas, I show that air quality is significantly worse on unmonitored days."
  URL: https://doi.org/10.1257/aer.20181346
  Quote fetched from: https://www.aeaweb.org/articles?id=10.1257/aer.20181346
  Source label: Zou 2021, American Economic Review
  Design: exploits the fixed one-in-six-day monitoring calendar, compared against satellite measurements.
  Grade: strong
  Verification: I checked the quote against the AEA page. DOI resolves (302).

---

## Searches run and what they found

- Pulled the abstracts for all leads through OpenAlex, Europe PMC and Crossref (script at scratchpad/abs.mjs), then refetched publisher or index pages for each quote.
- Duflo et al. 2013 QJE: confirmed randomized, and emissions fell. Used.
- Duflo et al. 2018 Econometrica: confirmed. Used as a counter.
- Greenstone, He, Jia and Liu 2022 AER Insights: automation raised reported PM10 by 35 percent. That shows local data had been falsified, not that pollution fell, so it does not fit "verified compliance reduces pollution". Not used. It would suit a card about self-reported data being untrustworthy.
- Buntaine et al. 2024 AER: confirmed randomized, and emissions fell. Drafted as an alternate because it overlaps with claim 2 (disclosure pressure).
- Axbard and Deng 2023 AEJ Applied (found while searching for continuous monitoring): monitoring led to more enforcement and less pollution. Alternate.
- Zou 2021 AER (found on the same search): monitored-day gaming. Alternate counter.
- US Clean Water Act self-reported versus independent verification: no peer-reviewed causal study was fetched in this pass. The pr/1 claim 2 card de Marchi and Hamilton 2006 already covers self-reported TRI numbers versus monitors.
- Ronneby: Li et al. 2018 (half-lives, used as counter) and Xu et al. 2020 Environment International (the discovery date and the finding that recent exposure means higher serum, alternate support). The Xu et al. 2020 EHP airport study is short-chain half-lives, noted.
- Arnsberg: Brede et al. 2010 is already on the case impact node (js/spine/genx-pfas.js line 290). No Hölzer 2009 abstract was located in OpenAlex search, so it was not pursued further.
- Little Hocking/Lubeck, Bartell et al. 2010 EHP: confirmed 26 percent per year decline and 2.3-year half-life after filtration. Not used, because this is the DuPont Washington Works C8 area and belongs to the case's own timeline.
- Minnesota East Metro, Landsteiner 2014: not fetched. Lower priority, since the Ronneby cards cover the same design.
- Hu et al. 2016 ES&T Letters (UCMR3): found supplies for 6 million US residents above the 2016 advisory. This is a detection-prevalence finding with no exposure change, so it does not support the claim. Not used.
- Flint: Hanna-Attisha et al. 2016 (blood lead rose after the switch; it does not measure the fall). Kennedy et al. 2016 MMWR (odds 46 percent higher during the switch period; the abstract does not report after-switch-back levels). Gómez et al. 2018 J Pediatr (long-run trend). Zahran et al. 2017 is the only one estimating the switch-back effect with a quasi-experimental design. Used.
- Tonawanda: the audit-E draft (EPA E3 case study plus DEC fact sheet) is a factual agency account of a single community. Benzene fell 86 percent after enforcement, but the grade is moderate and the design is weaker than the three chosen. It is also already a supporting case on pr/1 claim 0, so reusing it here would be a duplicate. Not used.
- Bangladesh arsenic: Madajewicz et al. 2007 JDE has no abstract available through OpenAlex, Europe PMC, Crossref or RePEc, and ScienceDirect was not fetched, so no quote could be verified. Chen et al. 2007 EHP (same team, with urinary biomonitoring) was used instead. Bennear et al. 2013 JEEM (randomized): richer risk messaging did not raise switching over the standard test-and-label message. Not used, since it compares two kinds of message rather than detection against none.
- PFAS persistence counters: Ruyle et al. 2023 ES&T (used) and Weber et al. 2017 ES&T (alternate).

## Verifier runs

verify-quotes.mjs: 10 of 10 quotes MATCH against Europe PMC or OpenAlex abstracts; all 10 DOIs resolve (302).
verify-pdfs.py: no PDF-sourced quotes in this report, so nothing to check (ran clean).
Quote-in-finding fragments (Duflo 2013 "systematically reporting...", Ruyle "will persist for centuries without remediation", Weber alternate) were also checked by eye against the same fetched abstracts.
