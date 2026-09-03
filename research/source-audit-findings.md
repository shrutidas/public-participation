# Source audit findings

Audit date: 2026-09-03. Scope: all 353 unique URLs behind 558 citations under `js/`. Method and vocabulary: `research/source-audit-handoff.md`. Full results, one row per URL: `research/source-audit-worklist.csv`, sorted with the worst verdicts first.

## Summary

Counts by verdict: VERIFIED 267, QUOTE MISMATCH 44, CLAIM UNSUPPORTED 27, PAYWALLED 10, WRONG LABEL 3, FABRICATED 1, MOVED 1.

The population holds one more fabricated citation, not many. The Port City Daily story about Brunswick County water is invented. Every other URL points at a real page.

The larger problem is drift. 27 real pages do not say what their card says. 44 real pages carry a quote that is not on the page. In most of those, the quote is real and belongs to a different source cited on the same card or the same node. Findings were written from several sources, and the quote or the fact was pinned to the wrong one. The verbatim promise fails on about a quarter of the quoted sources.

Read the CLAIM UNSUPPORTED and QUOTE MISMATCH lists as one worklist. Each note names what the page does and does not support, and in most cases names the source that does.

## Fixed in this commit

- Replaced the fabricated Port City Daily URL and the dead WUNC URL on the GenX cost card. The card now cites WUNC 17 Apr 2025 for $82.8 million and $158.7 million, and Port City Daily 11 Oct 2022 for the 8 percent rate increase.
- Replaced the Singer et al. 2023 DOI on the COVID schools card about parent support. That DOI resolves to an unrelated essay review by Michael Apple. The card now cites the Chalkbeat 2023 polling roundup.
- Relabelled PMC10591865 as Cuffney et al. 2023. Wilkie is a co-author, not the first author.
- Relabelled the TERA PDF as a workshop summary of Brede et al. 2010. It is not the paper.
- Corrected the JAMA Network Open article ID for the health center study from 2787869 to 2787771.
- Removed the sciencedirect source and the taxation sentence from the schools legitimacy card. The PII resolves to a corporate tax compliance paper by Sigle and others, not Verboon and Goslinga, and the sentence had no support.

Not fixed in this commit: the 27 CLAIM UNSUPPORTED and 44 QUOTE MISMATCH rows. Most need a judgment call per card. Move the quote to the right source, drop the quote, drop the fact, or add a source. That is 71 edits across all three data layers. Ask before doing them in one pass.

## FABRICATED (1)

No such page exists and no search finds the work.

- `https://portcitydaily.com/local-news/2022/06/24/brunswick-officials-celebrate-low-pfas-in-water-typically-achieved-through-reverse-osmosis/`
  - Label: Port City Daily
  - Cards: #/case/genx-pfas/spine/i/3
  - Live URL returns 404. Searches for the headline, the slug phrase 'typically achieved through reverse osmosis', the date path, and the specific figures ($82.8M CFPUA / 8% rate increase / $158.7M Brunswick) return no trace of this article on portcitydaily.com or elsewhere. Headline is also implausible for June 2022, when Brunswick's RO plant was still years from completion.
## CLAIM UNSUPPORTED (27)

The page exists but does not say what the card says.

- `https://actionnetwork.org/petitions/sign-our-letter-telling-congress-enough-stop-harmful-spread-of-pfas`
  - Label: Action Network
  - Cards: #/case/genx-pfas/timeline
  - Action Network petition sponsored by Clean Cape Fear, created by Emily Donovan (c. 2019). Supports Clean Cape Fear/Donovan and two of the four demands (regulate PFAS as a class; make manufacturers/Chemours pay for cleanup via CERCLA). Unsupported on this page: Kemp Burdette co-founding, the 'Stop GenX in Our Water' Facebook group and 9,000 members, Cape Fear River Watch, Brunswick Environmental Action Team, NAACP chapter, and the demands that the state replace voluntary agreements with binding limits and provide full transparency on health effects. (Most of the group-formation detail is instead supported by the co-cited Coastal Review Aug 2017 article.)
- `https://deliberation.stanford.edu/meta-community-forum-generative-ai-results`
  - Label: Stanford Deliberation
  - Cards: #/case/meta-youth/timeline
  - Page (Stanford DDL, 'Meta Community Forum on Generative AI: 2023 Results Announced') confirms 1,545 participants from Brazil, Germany, Spain and US on Oct 28-29 2023 and that results were released. It does NOT state: two online sessions, AI-moderated small-group deliberation, 'human override' preference, or concern about AI chatbots giving emotional support to children. Meta's newsroom post (about.fb.com, Apr 2024) corroborates a preference for 'transparency and control features' but not human override or the children/emotional-support concern. Also note the finding calls it 'another' process and pairs 'Meta's Behavioral Insights Team' with DDL, which the page does not mention.
- `https://ehp.niehs.nih.gov/doi/10.1289/EHP6837`
  - Label: Kotlarz et al. 2020
  - Cards: #/case/genx-pfas/spine/i/1, #/case/genx-pfas/spine/pr/0/l/3, #/case/genx-pfas/spine/pr/1/l/2, #/case/genx-pfas/spine/pr/2/l/3, #/case/genx-pfas/spine/pr/3/l/2, #/case/genx-pfas/spine/pr/6/l/2
  - Label correct: Kotlarz et al. 2020, EHP, GenX Exposure Study, 344 Wilmington residents. SUPPORTED: 'the median decrease in fluoroether levels ranged from 34% for Nafion byproduct 2 to 65% for PFO4DA in 6 months'. UNSUPPORTED: Kotlarz 2020 did NOT measure PFMOAA (authors explicitly 'moved forward without measuring samples for PFMOAA'), measured only 10 fluoroethers + 10 legacy PFAS (not 56), used no 2010-2016 stored samples (comparison samples were 20 sera from 2008-2009 Raleigh-area women). The 'PFMOAA median 42 ng/mL, highest of 56 PFAS, stored 2010-2016 samples' figures come from a different paper: Knappe/Hoppin group, Environmental Science & Technology, Oct 2025 ('Historical Blood Serum Samples from Wilmington, NC', PMC12593338). The PFOA 3.26-year half-life is also not in Kotlarz 2020 (it is from Olsen/Bartell half-life literature). Claims at spine/i/1 and pr/3/l/2 misattribute.
- `https://genxstudy.ncsu.edu/study-overview`
  - Label: GenX Exposure Study | GenX Study
  - Cards: #/case/genx-pfas/spine/pr/4/l/2, #/case/genx-pfas/timeline
  - Page confirms study began Nov 2017 after GenX found in Wilmington water, >1,000 participants in three regions, blood/urine/water collection. Not on this page: the 344 New Hanover participant figure, NIEHS funding, community-input design, and the commitment to return results at community meetings first (these live on other genxstudy.ncsu.edu pages/FAQ). The counter-evidence claim ('no study attributes growth 344->1,020 to communication design') is a negative assertion the page cannot support.
- `https://journals.sagepub.com/doi/pdf/10.1177/23328584221074337`
  - Label: Marianno, Power in a Pandemic (AERA Open) | Marianno et al., Power in a Pandemic (AERA Open)
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S1, #/case/covid-schools/chain/schools-legitimacy/S2/p/0
  - Marianno et al. 2022, 'Power in a Pandemic: Teachers' Unions and Their Responses to School Reopening', AERA Open. Claim 1 (collective bargaining channel) supported and quote verbatim. Claim 2 unsupported: the article (PDF and full-text HTML checked) contains no mention of the AFT July 2020 convention/executive-council 'safety strikes' resolution, the Detroit August strike-authorization vote, or the UFT president threatening litigation and a strike; it only notes that the UFT 'organized a protest against New York's plan to return to in-person instruction'. The AFT/Detroit/UFT details come from news coverage, not this source.
- `https://news.gallup.com/poll/317018/one-three-americans-not-covid-vaccine.aspx`
  - Label: Gallup
  - Cards: #/case/covid-vaccines/timeline
  - Gallup, Aug 7 2020 (July 2020 poll). Page says 65% would get a free FDA-approved vaccine, not 'only 50%'. No comparison to flu vaccine uptake (only a 1954 polio comparison). Partisan gap is on page (81% Dem vs 47% Rep), but the stated reasons (Democrats fearing FDA political interference, Republicans fearing overreach) are not on the page.
- `https://pmc.ncbi.nlm.nih.gov/articles/PMC10294999/`
  - Label: PudMed
  - Cards: #/case/meta-youth/timeline
  - Page is Azem et al. 2023, 'Social Media Use and Depression in Adolescents: A Scoping Review' (Behavioral Sciences), covering 43 papers from 2012-Aug 2022. It contains none of the finding's specifics: no ~17,000-person cohort from 2001, no 73%->62% figure for young women 15-24, no 11,876-child study (that is Nagata et al. 2025, after the review's cutoff), and no 'early 2010s inflection point' analysis. Label 'PudMed' is also a typo.
- `https://portcitydaily.com/local-news/2017/06/22/cfpua-wraps-review-of-communication-practices-doesnt-talk-to-former-communication-chief-news`
  - Label: Port City Daily
  - Cards: #/case/genx-pfas/timeline
  - Port City Daily, June 22 2017, correctly labeled. Page covers only the internal communication review (Jennifer Adams / Robin Smith concluding CFPUA acted in an 'appropriate, professional, timely and scientific manner', and not interviewing ex-comms chief Mike McGill). Unsupported: the special board meeting and two unanimous resolutions (Chemours must remove GenX; CFPUA may sue) are not on this page, nor is the 'widely criticized' characterization.
- `https://portcitydaily.com/local-news/2022/10/11/cfpua-reports-pfas-free-water-with-new-filtration-system-online/`
  - Label: Port City Daily
  - Cards: #/case/genx-pfas/chain/pfas-harm/R6
  - Port City Daily, Brenna Flanagan, 11 Oct 2022. Both quoted phrases verbatim; $43M cost, 8% rate increase, 2017 suit against Chemours/DuPont and no-PFAS test result are supported. Unsupported by this page: 'costs since grown to $82.8 million for building and maintaining the eight filters' and 'Brunswick County separately spent $158.7 million on a reverse osmosis plant' - neither figure appears in the article.
- `https://searchlightnm.org/toxic-timeline-a-brief-history-of-pfas`
  - Label: SearchlightNM
  - Cards: #/case/genx-pfas/timeline
  - Searchlight New Mexico timeline exists and is correctly labeled. Page only states '1951: DuPont starts using PFOA to make Teflon.' Unsupported by this page: Washington Works/West Virginia location, C8 alias, 3M as chief supplier, start of Ohio River discharge, absence of disclosure requirements, and downstream communities knowing nothing.
- `https://ssrga.com/bresky_blog/recent-litigation-concerning-covid-19-vaccination-mandates-and-religious-exemptions/`
  - Label: SSRGA
  - Cards: #/case/covid-vaccines/timeline
  - SSRGA law-firm blog, Nov 16 2021, correctly labeled. Supports religious-exemption litigation wave, Jacobson (1905), and Title VII accommodation. Unsupported: no mention of EUA status, and Does v. Mills is discussed only at the First Circuit (Oct 20 2021) level; the Supreme Court's 6-3 refusal to block Maine's mandate (which actually occurred Oct 29 2021, not November) is not on the page.
- `https://stacks.cdc.gov/view/cdc/11425`
  - Label: CDC
  - Cards: #/case/covid-schools/timeline
  - Page is CDC 'Interim Pre-Pandemic Planning Guidance: Community Strategy for Pandemic Influenza Mitigation in the United States' (Feb 2007, superseded 2017). It does not mention Fauci, flattening the curve, deferring to governors, 'not definitive evidence' on children as vectors, or 6-foot distancing in all 50 states' school plans. Unsupported claim: 'Fauci repeatedly emphasized flattening the curve... deferred to governors... School planning documents in all 50 states built in the 6-foot social distancing guidance, which later proved to have no clinical trial basis.'
- `https://www.cdc.gov/covid/php/surveillance/index.html`
  - Label: CDC
  - Cards: #/case/covid-vaccines/timeline
  - Page is a CDC COVID-19 surveillance hub (overview/links to data systems). It contains none of the cited figures (323.3M doses, 179.3M/54% at least one dose, 153M/46% fully vaccinated, 87% of adults 65+). Those numbers correspond to the CDC COVID Data Tracker snapshot around June 28, 2021, which this page does not reproduce. Unsupported claim: 'By late June, the US had administered 323.3 million total doses. 179.3 million people (54%) had at least one dose and 153 million (46%) were fully vaccinated. Among adults 65+, 87% had at least one dose.'
- `https://www.cleancapefear.org/`
  - Label: Clean Cape Fear
  - Cards: #/case/genx-pfas/chain/pfas-harm/R5/p/1
  - Homepage confirms Clean Cape Fear is an all-volunteer grassroots group and features Emily Donovan, but contains nothing about the 2026 EMC PFAS-minimization proceedings or the quote 'There's no due date that says, you've got to stop these releases by this point in time.' That quote is real but appears in WUNC, 14 May 2026 (https://www.wunc.org/environment/2026-05-14/pfas-dioxane-water-pollution-monitoring-minimization-emc-deq), which identifies Donovan as leading Clean Cape Fear, not as co-founder.
- `https://www.commerce.senate.gov/meetings/subcommittee-protecting-kids-online-facebook-instagram-and-mental-health-harms/`
  - Label: Senate Commerce
  - Cards: #/case/meta-youth/timeline
  - Hearing page confirms title, Sept 30 2021, Subcommittee on Consumer Protection, Product Safety, and Data Security chaired by Blumenthal, witness Antigone Davis (Global Head of Safety, Facebook). 'First Facebook executive compelled to testify on teen mental health' is not stated. Unsupported claim: the KIDS Act timeline entry (Markey/Blumenthal bill, 2020 introduction, Sept 2021 reintroduction, never advanced) - the page does not mention the KIDS Act or Sen. Markey at all.
- `https://www.csresources.org/our-history`
  - Label: Citizen Science Community Resources
  - Cards: #/case/genx-pfas/spine/pr/1
  - Page supports 2005 bucket brigade, benzene, indictment on 19 counts and conviction on 14, $12.5M fines, and 86% benzene reduction at the facility. Page does NOT mention formaldehyde, the 68% residential-monitor reduction, or the cancer-risk drop from 75-in-a-million to 11-in-a-million (page cites 92%/95% community reductions instead). Those figures are not on the cited page.
- `https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order`
  - Label: DEQ Consent Order page | North Carolina Department of Environmental Quality | NC DEQ
  - Cards: #/case/genx-pfas/chain/pfas-harm/R4/p/0, #/case/genx-pfas/spine/m/7, #/case/genx-pfas/timeline
  - Unsupported by this page: the SELC/Cape Fear River Watch public information session in Wilmington on Dec 12, 2018 (true, but sourced from WECT: https://www.wect.com/2018/12/12/public-invited-information-session-about-chemours-consent-order-hosted-by-cape-fear-river-watch-selc/), DEQ amending its complaint after discovering air emissions, the citizen-suit strategy narrative, and the $12 million penalty figure. The page does confirm the comment period (Nov 22, 2018 to Jan 7, 2019), a summary response to comments, Cape Fear River Watch/SELC as parties, and 99%/99.9% reduction requirements.
- `https://www.ftc.gov/news-events/news/press-releases/2023/12/ftc-proposes-strengthening-childrens-privacy-rule-further-limit-companies-ability-monetize-childrens`
  - Label: FTC
  - Cards: #/case/meta-youth/timeline
  - Page (Dec 20 2023 NPRM press release) supports the 60-day comment window and the three proposed requirements (separate consent for third-party disclosure/targeted ads, written data retention policy, biometric identifiers in 'personal information'). It does NOT support: 'drew approximately 300 formal comments' (page only mentions 175,000+ comments from the 2019 review) or 'The Commission voted to finalize COPPA' (page reports a 3-0 vote to publish the proposal). The finalization (5-0 vote, ~300 comments / 279 unique comments) happened Jan 16 2025 and is documented at https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data, not on the cited page.
- `https://www.justice.gov/archives/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and`
  - Label: US Department of Justice
  - Cards: #/case/genx-pfas/spine/pr/1
  - DOJ press release (Mar 19 2014) supports the jury conviction (corporation convicted on 11 CAA + 3 RCRA counts = 14) and the $12.5 million penalty (plus $12.2 million community service). Unsupported by the page: residents' bucket sampling starting in 2005 finding benzene/formaldehyde, the state follow-up study, benzene falling 86% at the industrial monitor and 68% at the residential monitor, and excess cancer risk falling from 75 in a million to 11 in a million (these figures come from NYSDEC/Clean Air Coalition material, not the cited DOJ page).
- `https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects`
  - Label: New York Times
  - Cards: #/case/covid-vaccines/spine/m/8, #/case/covid-vaccines/spine/pr/0
  - Page is a NACWA (National Association of Clean Water Agencies) news item dated 2022-02-22 that excerpts and links the NYT article of the same title; label 'New York Times' is loose (underlying article is NYT by Apoorva Mandavilli). Excerpt supports CDC withholding hospitalization-by-vaccination-status data for over a year and booster data for 18-49. Unsupported on this page: the CDC's 'could be misinterpreted' rationale (that is in the full NYT piece, not the excerpt), and the entire second claim (NYT/JHU/COVID Tracking Project running national case data, Times ending its tracker in 2023) - nothing on the page about trackers.
- `https://www.nbcnews.com/news/us-news/san-francisco-sues-its-own-school-district-demands-restart-person-n1256639`
  - Label: NBC News
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S5/p/0, #/case/covid-schools/spine/m/5, #/case/covid-schools/timeline
  - Article confirms Herrera sued the Board, SFUSD and Supt. Matthews to 'demand the restart of in-person instruction for more than 52,000 students' and calls it possibly 'the first such case in the nation'. Unsupported: the National School Boards Association quotation ('the first civil action filed by a city against a district over Covid-19 closings') does not appear anywhere in the NBC article (it appears to originate from other coverage, e.g. WSJ via Slashdot), and the later expansion with state constitutional claims is not in this article.
- `https://www.npr.org/2021/03/18/978840432/biden-administration-to-meet-goal-of-100-million-vaccine-doses-on-friday`
  - Label: NPR
  - Cards: #/case/covid-vaccines/timeline
  - Article confirms 100M doses reached on day 58, 42 days early. It contains no '2.5 million shots per day' figure and no daily-average statistic at all (100M/58 days is ~1.7M/day).
- `https://www.nytimes.com/article/flatten-curve-coronavirus.html`
  - Label: NYT
  - Cards: #/case/covid-schools/timeline
  - Page exists: 'Flattening the Coronavirus Curve' by Siobhan Roberts, 27 March 2020 (confirmed via NLM research-news index). It is a single-chart explainer on why slowing spread matters. It does not cover Fauci deferring school policy to governors, the 'not definitive evidence' remark on children as vectors, or 6-foot distancing in 50 states' school plans. Cited page does not support the finding.
- `https://www.pewresearch.org/internet/2015/10/08/social-networking-usage-2005-2015/`
  - Label: Pew Research
  - Cards: #/case/meta-youth/timeline
  - Page is Pew 'Social Media Usage: 2005-2015' (Andrew Perrin, Oct 8 2015) on adoption rates only. It contains nothing about a ~17,000-person longitudinal study from 2001, young women 15-24 good mental health falling 73% to 62% by 2022, an 11,876-child study on social media and depressive symptoms, or an early-2010s inflection point for Instagram/Snapchat. Every substantive claim in the finding comes from elsewhere.
- `https://www.pewresearch.org/wp-content/uploads/sites/20/2025/04/PI_2025.04.22_teens-social-media-mental-health_REPORT.pdf`
  - Label: Pew Research
  - Cards: #/case/meta-youth/timeline
  - Pew 'Teens, Social Media and Mental Health' (Apr 22 2025) confirms 48% mostly negative for peers (up from 32% in 2022) and 11% mostly positive. NOT in the report: '50% of parents believe their child's mental health suffered in the past 12 months because of social media' and '35% of Americans say social media has a positive influence on children's mental health, down from 43% in 2022' (these are from other polls, not this Pew report).
- `https://www.reuters.com/legal/litigation/meta-google-fund-us-kids-groups-critics-warn-social-media-risk-2026-05-14/`
  - Label: Reuters
  - Cards: #/case/meta-youth/timeline
  - Reuters, Courtney Rozen, May 14 2026, exists and covers Meta/Google funding of kids' groups (Sesame Workshop, Girl Scouts, Highlights, FOSI) and critics' concerns. NOT in the Reuters story per two full syndicated copies: the National PTA ending a 15-year Meta partnership in February 2026, ConnectSafely, and the claim that companies cited these groups as independent endorsers in regulatory filings and congressional testimony without disclosing funding. Those points appear in a separate The Next Web piece, not Reuters.
- `https://yaleclimateconnections.org/2025/12/the-epa-let-companies-estimate-their-own-pollution-levels-we-discovered-real-emissions-are-far-worse/`
  - Label: Yale Climate Connections
  - Cards: #/case/genx-pfas/chain/pfas-harm/R5/p/2
  - Page is a Yale Climate Connections republication of Lisa Song's ProPublica piece (Nov 2025) on EPA fenceline monitors vs. company emission estimates. It does not mention the Louisiana Bucket Brigade, Anne Rolfes, the $75 bucket/$2,000 summa canister quote, Edward Masry/Contra Costa 1995, the Chalmette Air Monitoring Project, 'every single minute', or bucket sampling contributing to EPA fenceline standards. Those quotes match Louisiana Bucket Brigade's own website, not this article.
## WRONG LABEL (3)

The page exists and the claim holds, but the label names the wrong work or author.

- `https://journals.sagepub.com/doi/10.1177/08959048231174881`
  - Label: Singer et al. 2023
  - Cards: #/case/covid-schools/spine/i/2
  - DOI resolves to Michael W. Apple, 'STEM Education and the Contradictory Realities of School Policies' (Educational Policy, essay review), which has nothing to do with parent views of pandemic handling. No 'Singer et al. 2023' article matching the claim could be located; the claim about parents supporting schools in 2020-21 is unsupported by this URL.
- `https://pmc.ncbi.nlm.nih.gov/articles/PMC10591865/`
  - Label: Wilkie et al. 2023, Environmental Research (PMC)
  - Cards: #/case/genx-pfas/chain/pfas-harm/D5
  - Paper exists: 'Factors associated with per- and polyfluoroalkyl substances (PFAS) serum concentrations in residents of New Hanover County, North Carolina: The GenX Exposure Study', Environmental Research 2023 (PMC10591865, PMID 37673120). But first author is Michael Cuffney (author order: Cuffney, Wilkie, Kotlarz, Knappe, Lea, Collier, DeWitt, Hoppin), so 'Wilkie et al. 2023' misattributes it. Title supports the described topic (factors associated with serum PFAS in the GenX Exposure Study cohort); abstract could not be retrieved to confirm the 'exceeded national reference levels' sentence, though that is established in Kotlarz et al. 2020 for the same cohort.
- `https://tera.org/Alliance%20for%20Risk/Workshop%20Xll/CaseSummaryPFOA.pdf`
  - Label: Brede et al. 2010
  - Cards: #/case/genx-pfas/spine/i/1
  - Page is a TERA (Gadagbui & Onyema, Dourson) Alliance for Risk Assessment workshop case summary on the PFOA half-life, not Brede et al. 2010 itself; it summarizes Brede et al. 2010 (Arnsberg, 3.26-year GM half-life). Quote appears verbatim: 'PFOA levels decreased in all study participants from Arnsberg; five residents in the reference areas had increasing PFOA concentrations.' Claim supported, but the label attributes a secondary summary to the primary authors.
## QUOTE MISMATCH (44)

The page exists and supports the claim, but the quote is not on it word for word.

- `http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf`
  - Label: C8 Science Panel
  - Cards: #/case/genx-pfas/spine/i/2, #/case/genx-pfas/spine/pr/0/l/3, #/case/genx-pfas/spine/pr/4/l/0, #/case/genx-pfas/spine/pr/4
  - C8 Science Panel 'Probable Link Evaluation of Cancer' (April 15/16, 2012) exists. Second quote is verbatim: 'we conclude that there is a probable link between exposure to C8 (also known as PFOA) and testicular cancer and kidney cancer but not any of the other cancers that were considered.' First quote 'limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)' does NOT appear anywhere in this document - it is IARC Monograph 135 (2023) language, and the document never mentions IARC. Document gives n=69,030 C8 Health Project participants; the 'six conditions', class-member legal consequence and medical monitoring claims are not in this cancer-only report.
- `https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2023.307517`
  - Label: AJPH 2024 (DOI 10.2105/AJPH.2023.307517)
  - Cards: #/case/covid-vaccines/chain/vax-total/V4
  - Paper exists: Ferg, Opsomer et al., 'Effectiveness of Community-Engaged Research Strategies in Increasing COVID-19 Vaccinations in Targeted Communities: The CEAL Regional Teams', AJPH 114(S1), 2024. Abstract supports finding (nonequivalent control group design, counties matched on SVI components). Actual abstract wording: 'The mean percentage of vaccinated adults was significantly higher in CEAL counties than in matched non-CEAL counties.' The tool's quote inserts '(social vulnerability index) comparison counties', which is not the page text.
- `https://collaboratory.unc.edu/news/2018/08/01/n-c-policy-collaboratory-launches-new-statewide-study-on-genx-with-5-million-state-appropriation/`
  - Label: NC Policy Collaboratory
  - Cards: #/case/genx-pfas/chain/pfas-harm/R5
  - Aug 2018 Collaboratory press release confirms $5,013,000 appropriation and six universities, and plans for statewide sampling of public water sources. It does not contain the quoted sentence about '190 surface water intakes, 158 municipal groundwater wells, and 57 county or regional water supplies' and does not use the name 'PFAST Network'; those figures/quote come from the later PFAST Network reports to the NC General Assembly (e.g. https://webservices.ncleg.gov/ViewDocSiteFile/50796). Page's closest wording: 'Sampling public water sources statewide to establish a baseline and monitoring protocol moving forward.'
- `https://digitalcommons.law.ou.edu/cgi/viewcontent.cgi?article=1510&context=onej`
  - Label: ONE J (Oil and Gas, Natural Resources, and Energy Journal) case note
  - Cards: #/case/genx-pfas/chain/pfas-harm/R2
  - Huckabay, 'Liability in the Pipeline: The Expanding Scope of PFAS Litigation and Regulation', ONE J 11(1), 2025. Discusses the June 2018 draft Proposed Order, air emissions, wastewater prohibition and CFRW's May 7 2018 NOI. The quoted sentence does not appear; nearest page wording: 'With two remaining contamination pathways left unaddressed—the release of PFAS into surface waters and groundwaters—CFRW sought judicial review of NCDEQ's decision.'
- `https://home.watson.brown.edu/news/2021-08-06/does-meeting-style-matter-effects-exposure-participatory-and-deliberative-school`
  - Label: Collins 2021
  - Cards: #/case/covid-schools/spine/pr/0/l/2
  - Watson Institute news piece on Collins (APSR 2021) confirms exposure to participatory/deliberative school board meetings 'led to increased trust in local officials'. The attached quote ('Mini-publics increase legitimacy perceptions...recommendations are honored') is from Germann, Marien & Muradova (Political Studies 2024), not this page; Germann et al. are not mentioned on the page.
- `https://ideas.repec.org/a/bla/socsci/v102y2021i5p2266-2284.html`
  - Label: DeAngelis & Makridis, Social Science Quarterly 102(5), 2266-2284
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S2
  - DeAngelis & Makridis, SSQ 102(5) 2021, 2266-2284; 835 districts, four union measures, 'uncorrelated with the actual incidence of the virus'/'strongly associated with unionization' all present. But the page abstract reads 'We find that school districts in locations with stronger teachers' unions are less likely to reopen in person even after we control semiparametrically for differences in local demographic characteristics' and 'We do not find evidence that measures of COVID-19 risk are correlated with school reopening decisions' - the tool's quote ('semi-parametrically', 'We also do not find evidence to suggest that') matches the 2020 working-paper wording, not this page.
- `https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2787869`
  - Label: JAMA Network Open
  - Cards: #/case/covid-vaccines/chain/vax-fair/F3
  - The JAMA Netw Open FQHC study (Cole, Raifman, Assoumou, Kim 2022) is article 2787771 (PMC8749468), not 2787869 - the cited ID is likely a typo/wrong article. The study does report 1,096 FQHCs, 25.9M patients, 61.4% vs 40%. But the quote ('Health centers have administered nearly 19 million COVID-19 vaccine doses... 68 percent has gone to racial and/or ethnic minority patients as of January 14, 2022') is HHS press-release language and does not appear in the JAMA article. Correct URL: https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2787771
- `https://link.springer.com/article/10.1007/s11292-018-9338-2`
  - Label: Walters and Bolger 2019
  - Cards: #/case/covid-schools/spine/pr/0/l/3, #/case/covid-vaccines/spine/pr/1/l/1
  - Walters & Bolger 2019, 'Procedural justice perceptions, legitimacy beliefs, and compliance with the law: a meta-analysis', J Exp Criminology 15:341-372. Abstract confirms 64 studies/95 samples/196 effect sizes and legitimacy-compliance link (supports the meta-analysis part of both claims). The quote 'normative concerns regarding duty to support the authorities dominated compliance decisions' and the 1,595-Australian COVID lockdown survey are NOT from this paper (they come from Murphy et al. 2020, Australian J. Criminology); this 2019 paper predates COVID.
- `https://overdeck.org/research-repository/chronic-absenteeism/connection-trust-learning-student-attendance-in-the-middle-and-high-school-grades-following-the-covid-19-pandemic/`
  - Label: Overdeck Family Foundation research summary
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S6
  - Overdeck summary page exists and is correctly labelled, but the quoted sentence does not appear on it. Overdeck page wording: 'Chronic absenteeism increased dramatically post-pandemic, rising by roughly 20 percentage points, with nearly half of CPS students chronically absent in 2022' and 'School climate factors-especially student safety, relationships, and connectedness-were strongly linked to attendance, with stronger effects in post-pandemic years.' The quoted sentence (24% to 45%) and the high-school connectedness sentence appear verbatim only in the underlying UChicago Consortium report PDF (consortium.uchicago.edu/sites/default/files/2026-01/Connection,%20Trust,%20and%20Learning-Jan26-Consortium.pdf), which should be cited instead.
- `https://pdkpoll.org/wp-content/uploads/2020/10/PDKPoll2019Topline.pdf`
  - Label: PDK 2019 topline
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S4
  - 2019 PDK Poll Appendix B topline. Page supports only the 2013 = 53% A/B figure (trend table, Q2; 2019 = 44%). It predates 2022/2025 and does not contain the quote '43 percent of Americans give their local schools an A or B grade (down from 54 percent in 2022)' - that wording is from the CSBA 2025 blog post, which was reused here.
- `https://pubmed.ncbi.nlm.nih.gov/32205438/`
  - Label: van der Bles et al. 2020
  - Cards: #/case/covid-schools/spine/pr/3/l/1, #/case/covid-schools/spine/pr/3
  - PMID 32205438 = van der Bles, van der Linden, Freeman & Spiegelhalter 2020, 'The effects of communicating uncertainty on public trust in facts and numbers', PNAS. Five experiments, n=5,780, BBC News field experiment confirmed. Quote 2 ('These results could help reassure all communicators...') is verbatim from the abstract. Quote 1 ('little to no negative effect on levels of trust in the data itself, those who provided it (e.g. civil servants) or those reporting it (e.g. journalists)') is NOT in the paper/abstract; it is wording from the University of Cambridge press release (cam.ac.uk, 23 Mar 2020). The abstract actually says: 'we observed only a small decrease in trust in numbers and trustworthiness of the source, and mostly for verbal uncertainty communication.'
- `https://pubmed.ncbi.nlm.nih.gov/39181556/`
  - Label: BMJ Open protocol (NCT05822219)
  - Cards: #/case/covid-vaccines/chain/vax-total/V4
  - Sirek et al. 2024, BMJ Open, doi 10.1136/bmjopen-2024-087918, NCT05822219; POL cluster RCT among Black adults with rheumatic conditions. Actual abstract wording: "This trial began recruitment in February 2024 in Boston, Massachusetts and Chicago, Illinois, USA." The tool's quote inserts 'cluster randomised controlled' ("This cluster randomised controlled trial began recruitment..."), which is not on the page. Body text says: "Recruitment began in February 2024, and we plan to complete data collection over the course of 1.5 years." Finding itself is supported.
- `https://scholarworks.boisestate.edu/polsci_facpubs/146/`
  - Label: Touchton and Wampler 2014
  - Cards: #/case/covid-schools/spine/pr/4/l/1, #/case/covid-schools/spine/pr/4
  - Page is Touchton & Wampler 2014, 'Improving Social Well-Being Through New Democratic Institutions', Comparative Political Studies (Brazil PB, health spending, infant mortality) - this supports the Brazil claim. The quoted NYC sentence ('...increased individuals' probability of voting by an average of 8.4 percentage points') is NOT in this paper; it comes from Johnson, Carlson & Reynolds, 'Testing the Participation Hypothesis: Evidence from Participatory Budgeting', Political Behavior (2021), https://link.springer.com/article/10.1007/s11109-021-09679-w. Also 'two independent teams' is not established by this single source.
- `https://static.ewg.org/reports/2019/pfa-timeline/3M-DuPont-Timeline_sm.pdf`
  - Label: EWG 3M/DuPont timeline
  - Cards: #/case/genx-pfas/chain/pfas-harm/D1
  - EWG PDF is a year-by-year timeline (1950-2000) plus reproduced historical documents. The quoted sentence does not appear; the only 1961 entry reads: '1961 - DuPont toxicologist warns that PFAS chemicals enlarge rat and rabbit livers.' No 1980 entry, no 'Washington Works', no mention of EPA's 2004 TSCA 8(e) action (nearest: '1979 - DuPont survey of employees in its Parkersburg, W.Va., Teflon plant finds possible evidence of liver damage.'). The quoted wording appears to come from 2004-2005 news coverage/EWG summaries of the EPA complaint, not this page.
- `https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf`
  - Label: EWG EPA PFAS timeline | EWG EPA Timeline
  - Cards: #/case/genx-pfas/chain/pfas-harm/D1, #/case/genx-pfas/timeline
  - EWG PDF 'For 20-Plus Years, EPA Has Failed To Regulate Forever Chemicals' with appended EPA/3M documents exists. The quote 'As early as 1961, DuPont scientists issued internal warnings about the health risks of PFOA [...] by 1980 had found elevated levels of the chemical in workers at the DuPont Washington Works plant' does NOT appear in this PDF (no '1961' anywhere); it is the Levin Law page's wording. What the EWG PDF does say: EPA's 2004 complaint that DuPont 'had studied PFOA in pregnant workers and their offspring as early as May, 1981' and failed to report; 3M's 'epidemiological study of its own workers indicate[d] no adverse effects at parts per million levels'; June 1999 3M Audit Agreement with EPA covering 'over 700 studies'. The two timeline-entry claims (3M no-adverse-effects framing; EPA audit of 3M / 700 studies) are supported; the 1961/1980 worker-blood claim is not on this page.
- `https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656`
  - Label: Currie et al. 2015
  - Cards: #/case/genx-pfas/spine/pr/2/l/1
  - Currie, Davis, Greenstone & Walker 2015, 'Environmental Health Risks and Housing Values: Evidence from 1,600 Toxic Plant Openings and Closings', AER 105(2). Abstract supports the 11% housing-value decline within 0.5 mile and the within-1-mile concentration of effects. The bottled-water quote ('an increase in bottled water sales of 22 percent from violations due to microorganisms and 17 percent from violations due to elements and chemicals') is not in this paper; it is from Zivin, Neidell & Schlenker 2011, 'Water Quality Violations and Avoidance Behavior: Evidence from Bottled Water Consumption' (AER P&P). The avoidance-cost/poor-household burden point is also not addressed here.
- `https://www.aeaweb.org/articles?id=10.1257/aeri.20210748`
  - Label: Jack et al., AER: Insights 2023 | Jack et al. 2023
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S8, #/case/covid-schools/spine/i/3
  - Jack, Halloran, Okun & Oster 2023, 'Pandemic Schooling Mode and Student Test Scores: Evidence from US School Districts', AER: Insights 5(2). Findings (11 states, 12.8/6.8 pp declines, smaller declines with full in-person, larger value for districts with more Black students) all supported. Quote is a light paraphrase, not verbatim. Actual abstract: 'Pass rates declined from 2019 to 2021: an average of 12.8 percentage points in math and 6.8 in English language arts (ELA). ... we estimate that districts with full in-person learning had significantly smaller declines (13.4 pp in math, 8.3 in ELA).' The quote inserts 'decline', 'in pass rates', and writes 'p.p.'/'8.3 p.p. in ELA'.
- `https://www.bladenjournal.com/news/21094/chemours-ordered-to-reduce-emissions-pay-fine`
  - Label: Bladen Journal
  - Cards: #/case/genx-pfas/chain/pfas-harm/R3
  - Bladen Journal, 'Chemours hit with largest DEQ fine', Nov 23 2018. The quote is consent-order language ('By no later than thirty (30) days... Chemours shall pay...') that does not appear in the article. Article wording: 'Chemours has agreed to pay a $12 million penalty, plus $1 million for investigative costs' and 'cut air emissions by at least 92 percent from last year's level, and by 99 percent by the end of next year'. Article does not mention 82% by Oct 2018, thermal oxidizer 99.99%, 9-month connection deadline, or 20-year filtration minimum.
- `https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/`
  - Label: Brookings Institution
  - Cards: #/case/covid-schools/spine/pr/3/l/2
  - Rothwell & Desai, Brookings, Dec 22 2020. Findings supported (Biden voters 43%-60% depending on news segment; 18% correctly estimate hospitalization rate). But the phrase 'a 17-point swing' does not appear; actual wording: 'The percentage of Biden voters who support re-opening schools to in-person learning is as low as 43% to as high as 60%, depending on which news segment we assigned them to read.' The page speaks of 'a 37 percentage point gap' between Biden and Trump voters under opposite framings.
- `https://www.bu.edu/sph/news/articles/2022/health-centers-are-improving-covid-19-vaccine-equity-among-people-of-color`
  - Label: BU School of Public Health summary
  - Cards: #/case/covid-vaccines/chain/vax-fair/F3
  - BU SPH article, Jan 10 2022, supports the JAMA Network Open figures (1,096 FQHCs, 25.9M patients, 61.4% vs 40%, Jan 8-Jul 2 2021). The quote ('Health centers have administered nearly 19 million COVID-19 vaccine doses [...] Overall, 68 percent has gone to racial and/or ethnic minority patients as of January 14, 2022') does not appear on the page; it is HHS/HRSA press-release wording, and the 19M/68% figures are absent from the BU page.
- `https://www.cdc.gov/mmwr/volumes/70/wr/mm7022e1.htm`
  - Label: MMWR 70(22)
  - Cards: #/case/covid-vaccines/chain/vax-fair/F1
  - MMWR 70(22), June 4 2021. Figures (49.0% vs 59.3%, disparities increased) are correct, but the quote silently drops a clause with no ellipsis. Actual wording: 'By May 1, 2021, after states opened eligibility to all adults, vaccination coverage was lower among adults living in counties with the highest overall SVI (Q4 coverage = 49.0% versus Q1 coverage = 59.3%)' ... 'Disparities in vaccination coverage by SVI increased over time, especially in large fringe metropolitan and nonmetropolitan counties'. Minor: omitted phrase 'after states opened eligibility to all adults'.
- `https://www.chalkbeat.org/chicago/2022/9/1/23333494/chicago-public-schools-local-school-councils-vacancies-raise-your-hand/`
  - Label: Chalkbeat Chicago
  - Cards: #/case/covid-schools/spine/pr/4/l/0, #/case/covid-schools/spine/pr/4
  - Chalkbeat Chicago, Mauricio Pena, 1 Sep 2022, supports the 1,400 vacant seats: 'After high voter turnout in the April election, more than 1,400 LSC seats remain empty at hundreds of schools.' The attached quote about 'More than a fifth of the 72 schools with police officers...quorum' does not appear on this page; it appears only in the WBEZ 14 Jul 2020 article (npr.org/local/309/...). No mention of police or quorum on the Chalkbeat page.
- `https://www.cnbc.com/2021/12/08/biden-vaccine-mandate-senate-votes-to-overturn-osha-rule.html`
  - Label: CNBC (Senate vote)
  - Cards: #/case/covid-vaccines/chain/vax-total/V5
  - CNBC Dec 8 2021 article supports the 52-48 Senate vote ('The Senate approved the measure in a 52-48 vote. Sens. Joe Manchin, D-W.V., and Jon Tester, D-Mont., joined every Republican in supporting it.'). The quote is from the Supreme Court's Jan 13 2022 NFIB v. OSHA order and does not appear on this page; the article predates the Supreme Court ruling.
- `https://www.deq.nc.gov/genx/2019-02-20-final-deq-response-comments-proposed-consent/download`
  - Label: DEQ Response to Public Comment
  - Cards: #/case/genx-pfas/chain/pfas-harm/R4
  - DEQ 'Summary of Revised Proposed Consent Order and Response to Public Comment', Feb 20 2019. All facts supported (approx. 380 comments, >200 supportive; new 11.1, 11.2, 12(e) three to four times, 20-year minimum, 25.1 split sampling). Second quote fragment is verbatim ('a minimum of 20 years or until such time as Chemours demonstrates that each PFAS in Attachment C is below an applicable health advisory, whichever is later'), but the first fragment differs: page says 'Chemours must submit an analysis of the Facility's contributions of PFAS to the raw water intakes of downstream public utilities' (not 'analyze the Facility's contribution of PFAS to raw water intakes of downstream public utilities').
- `https://www.deq.nc.gov/news/press-releases/2018/11/21/release-state-officials-require-chemours-provide-permanent-drinking`
  - Label: NC DEQ press release, Nov. 21, 2018
  - Cards: #/case/genx-pfas/chain/pfas-harm/R3
  - NC DEQ press release Nov 21 2018 exists and confirms $12M civil penalty + $1M investigative costs, 92% (end-2018) and 99% (end-2019) GenX air emission reductions, thermal oxidizer 99.99% efficiency, permanent drinking water. The quoted text ('By no later than thirty (30) days following entry of this Order, Chemours shall pay ... civil penalty in the amount of $12,000,000 and investigative costs in the amount of $1,000,000') is consent-order language (paragraph 33 of the proposed consent order PDF), not on the press release page. Press release also does not state 'largest fine ever', the 82% Oct 2018 milestone, the 9-month deadline, or the 20-year filtration minimum.
- `https://www.ednc.org/08-21-2025-how-do-people-feel-about-public-schools-and-education-policy-national-survey-gives-insight/`
  - Label: PDK 2025 results
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S4
  - EdNC, Aug 21 2025, on PDK 2025 poll. Actual wording: 'Forty-three percent of respondents gave their local schools a letter grade of A or B - a ten percentage-point drop from 2013.' Page compares to 2013 (implying 53%), not to 54% in 2022; the parenthetical '(down from 54 percent in 2022)' is not on the page.
- `https://www.epa.gov/sites/default/files/2019-09/documents/_epaoig_notificationmemo_9-23-19_dupont.pdf`
  - Label: EPA OIG notification memo, Sept. 23, 2019
  - Cards: #/case/genx-pfas/chain/pfas-harm/D2
  - URL is the EPA OIG project notification memo of Sept 23 2019, which only announces the evaluation of the 2009 TSCA consent order; it contains neither the quoted sentence nor the 99% efficiency requirement. The quote appears verbatim in the OIG final report 20-E-0177 (May 28 2020), 'EPA Toxic Substances Control Act Consent Orders Need Better Coordination': https://www.epa.gov/sites/production/files/2020-05/documents/_epaoig_20200528-20-e-0177_1.pdf , which also has 'recover and capture (destroy) or recycle the [premanufacture notice] substances at an overall efficiency of 99%'. Citation should point to the 2020 report, as the finding text itself says.
- `https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-dashboard/`
  - Label: KFF Vaccine Monitor | KFF
  - Cards: #/case/covid-vaccines/chain/vax-total/V5, #/case/covid-vaccines/timeline
  - KFF COVID-19 Vaccine Monitor Dashboard exists (last modified Sep 2025) and carries some CDC-trust data (e.g. Republicans 40%), but the quoted sentence and the 59%/70% v 88%/51% v 40% figures are not on the dashboard. They appear verbatim on the KFF Tracking Poll on Health Information and Trust: Vaccine Safety and Trust (6 May 2025): https://www.kff.org/health-information-trust/kff-tracking-poll-on-health-information-and-trust-vaccine-safety-and-trust/ . Timeline claim of CDC trust at 50% down from 63% in Sep 2024 is not on either page checked.
- `https://www.mdpi.com/1660-4601/21/7/905`
  - Label: Rochester et al. 2024
  - Cards: #/case/genx-pfas/spine/pr/4/l/1
  - Rochester et al. 2024, IJERPH 21(7):905 (Healthy Nevada Project report-back). The quoted phrase 'report-back increased concern for consumer product chemicals' does not appear anywhere on the page; the only 'concern' sentence is 'Of particular concern are the harmful effects these chemicals can have on fertility.' The study is explicitly 'Non-Randomized' (n=424 pre, 174 post), not 'a randomized study of 135 cohort members', and PFAS is never mentioned. The 79%->35% and monobutyl phthalate (p<0.001) decrease figures are correct. The randomized/135/PFAS/quote elements appear to come from a different report-back study.
- `https://www.nature.com/articles/s41562-022-01363-1`
  - Label: Nature Human Behaviour 2022 | Karaivanov et al. 2022
  - Cards: #/case/covid-vaccines/chain/vax-total/V5, #/case/covid-vaccines/spine/i/3, #/case/covid-vaccines/spine/pr/1/l/2
  - Karaivanov, Kim, Lu & Shigeoka 2022, Nature Human Behaviour 6:1615-1624. Findings all confirmed (DiD across ten Canadian provinces; France/Italy/Germany time series; up to +5/+8/+12/+4.7 points by Oct 31 2021). Actual page wording: 'a mandate announcement is associated with an average increase of about 66% (50.6 log points; P = 0.001; 95% CI, 25-77; in column 2) in weekly first doses.' Tool's quote drops 'average' and 'in column 2' - minor trimming, meaning unchanged.
- `https://www.nature.com/articles/s41586-024-07591-x`
  - Label: Nature 2024 (nudge megastudy)
  - Cards: #/case/covid-vaccines/chain/vax-total/V4
  - Milkman et al. 2024, Nature, 'Megastudy shows that reminders boost vaccination but adding free rides does not'. The 3,662,548 CVS patients and 1.05 percentage point (21%) booster uptake figures are on the page. The quote 'The vaccination rate in the sample of the treatment group surpassed the rate in the control group by a factor of 3.4 (+9.0 percentage points) over 3 weeks.' does NOT appear on this page; it describes the mobile-vaccination-unit cluster RCT, a different paper. The NHB 2022 mandate figures are also not from this page.
- `https://www.nature.com/articles/s41598-022-20312-6`
  - Label: Scientific Reports 12 | Yueh et al. 2022
  - Cards: #/case/covid-vaccines/chain/vax-total/V2, #/case/covid-vaccines/spine/pr/0
  - Yueh, Wang & Lee 2022, 'The cognition, information behaviors, and preventive behaviors of Taiwanese people facing COVID-19', Scientific Reports 12. 610 responses Feb 27-Mar 4 2020, CECC daily press conferences, and government-highest-credibility finding confirmed. First half of the stitched quote is verbatim; the second half ('When people trust the government and its information, they also take more precautionary behaviors.') does not appear. Nearest page wording: 'Social trust, information credibility, and personal protective measures were positively correlated.'
- `https://www.nature.com/articles/s41598-024-54441-x`
  - Label: Dong et al. 2024
  - Cards: #/case/covid-vaccines/spine/pr/0/l/1
  - Dong, Nixon & Gardner 2024, Scientific Reports. The 2,885-county / Republican vote share strongest-association finding is on the page. The quote 'the campaign increased the number of vaccines in the average treated county by 103' does NOT appear; nor do 2,032 counties, Trump endorsement ad, or cost per dose. That material comes from a different study (Larsen et al., the Trump ad RCT).
- `https://www.niehs.nih.gov/news/factor/2023/1/feature/3-feature-genx-exposure-study`
  - Label: NIEHS Environmental Factor
  - Cards: #/case/genx-pfas/chain/pfas-harm/R5, #/case/genx-pfas/chain/pfas-harm/R5/p/0
  - Environmental Factor, Jan 2023, 'GenX Exposure Study reports results back to the community'. Confirmed: 1,020 participants sampled 2020-2021 across three communities; Oct 2022 community meeting; verbatim '11-page letter including an overview of the overall study findings, individual blood PFAS results, and NASEM recommendations'. NOT on page: the quoted sentence 'The plan for this study is to follow people for at least five years and up to 20 years...' - actual wording is 'We plan to follow people for up to 20 years to identify how GenX exposure can result in changes in health.' Also not on page: 344 participants / Nov 2017 enrollment, and 'All results from the study will be shared with both the community as a whole and each individual participant' (that sentence is from the GenX study FAQ at genxstudy.ncsu.edu/faq/).
- `https://www.northcarolinahealthnews.org/2020/09/09/nc-getting-tougher-on-pfas-polluters-but-researchers-say-more-action-is-needed/`
  - Label: NC Health News
  - Cards: #/case/genx-pfas/chain/pfas-harm/R4
  - NC Health News, Greg Barnes, Sep 9 2020, exists and discusses DEQ's planned additional action against Chemours, but contains no barrier wall, 1.5 miles, 99%, four seeps, $150,000/$20,000-per-week, March 2023 or 30-day-comment language. The quote is verbatim from the NC DEQ press release of Aug 13 2020 (https://www.deq.nc.gov/news/press-releases/2020/08/13/deq-orders-additional-pfas-reductions-chemours): 'The permanent measure is the construction of a subsurface barrier wall approximately 1.5 miles long and groundwater extraction system that will remove at least 99% of PFAS to be completed by March 2023.' Page wording on this URL is limited to e.g. 'significant additional action against Chemours to compel the company to rid PFAS from the groundwater at the chemical company's plant'.
- `https://www.pewresearch.org/science/2023/11/14/americans-trust-in-scientists-positive-views-of-science-continue-to-decline/`
  - Label: Pew 2023
  - Cards: #/case/covid-schools/chain/schools-legitimacy/S7
  - Pew 14 Nov 2023 page exists and supports 73% (Oct 2023) and the 'meeting the needs of K-12 students' wording. Neither attached quote is on this page. Quote 1 ('At the onset of the COVID-19 pandemic in April 2020, 87%... 77% of U.S. adults now say...') is verbatim from Pew's 15 Jan 2026 report https://www.pewresearch.org/science/2026/01/15/americans-confidence-in-scientists/ . Quote 2 ('The strongest predictor of trust change was the source of scientific information...') is from the PLOS One 2025 article https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328075 , not Pew.
- `https://www.researchgate.net/publication/384897615_Correlates_of_public_compliance_with_COVID-19_regulations_in_Taiwan`
  - Label: Policing: An International Journal 2024
  - Cards: #/case/covid-vaccines/chain/vax-total/V2
  - The paper exists (Policing: An International Journal, 2024, DOI 10.1108/pijpsm-07-2024-0109) and the label is correct, but the quoted sentences are not from it. They are verbatim from a different source, the Scientific Reports 2022 paper 'The cognition, information behaviors, and preventive behaviors of Taiwanese people facing COVID-19' (https://www.nature.com/articles/s41598-022-20312-6): 'Information from the government and research institutes had higher credibility than that from other sources, with the government having the highest score' and 'When people trust the government and its information, they also take more precautionary behaviors' (610 responses, Feb 27-Mar 4 2020 confirmed there). This ResearchGate URL supports at most the caveat about compliance confounders; the credibility/precaution findings are attributed to other papers.
- `https://www.sciencedirect.com/science/article/abs/pii/S1061951818301496`
  - Label: Verboon and Goslinga 2018
  - Cards: #/case/covid-schools/spine/pr/0/l/3
  - PII S1061951818301496 is Siglé, Goslinga, Speklé, van der Hel & Veldhuizen 2018, 'Corporate tax compliance: Is a change towards trust-based tax strategies justified?', J. Int. Accounting, Auditing and Taxation 32:3-16 (doi 10.1016/j.intaccaudtax.2018.06.003), a Dutch survey (n=271) on trust/power and corporate tax compliance. Label 'Verboon and Goslinga 2018' is wrong (Verboon is not an author). The quote 'legitimacy - typically operationalized as the perceived obligation to obey and trust and confidence in the relevant institutions - plays an important role in achieving such compliance' does not appear in the abstract and is Tyler/Jackson-style wording about US legal institutions (likely Tyler & Jackson 2014). Neither the 'national US survey of legal institutions' finding nor the 'fair process raised acceptance of changes leaving respondent worse off' finding is supported by this paper's abstract.
- `https://www.supremecourt.gov/opinions/21pdf/21a240_d18e.pdf`
  - Label: Biden v. Missouri | SCOTUS
  - Cards: #/case/covid-vaccines/chain/vax-total/V5, #/case/covid-vaccines/timeline
  - Document is Biden v. Missouri / Becerra v. Louisiana, Nos. 21A240 & 21A241, Jan 13 2022 (CMS mandate allowed to take effect; supports the SCOTUS timeline entry). The quoted stay language about OSHA's ETS, 86 Fed. Reg. 61402, is NOT in this opinion; it is from NFIB v. OSHA, No. 21A244 (https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf). The Senate 52-48 vote is not in this document. Closest wording here: 'The District Court for the Eastern District of Missouri's November 29, 2021, order granting a preliminary injunction is stayed...'
- `https://www.theguardian.com/environment/2023/jun/07/pfas-3m-dupont-chemical-industry-health-toxic-study`
  - Label: The Guardian
  - Cards: #/case/genx-pfas/chain/pfas-harm/D1
  - The Guardian URL is real (linked verbatim from thecooldown.com and cited by EcoWatch as The Guardian, June 7 2023, on the Gaber/Bero/Woodruff Annals of Global Health study), but the page could not be fetched. The quote as given is verbatim from the Annals of Global Health paper (https://annalsofglobalhealth.org/articles/10.5334/aogh.4013): 'In a 1970 internal information request, W.E. Hilton of the Fluorocarbons Division at the Washington Works plant notes that studies by Haskell Laboratory had already found C8 to be "highly toxic when inhaled and moderately toxic when ingested."' The tool's own caveat concedes the quote is from the study, not the Guardian page. Guardian coverage of the study likely supports the general finding, but the quote should be attributed to the paper.
- `https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf`
  - Label: Toxics Use Reduction Institute
  - Cards: #/case/genx-pfas/spine/pr/2/l/2, #/case/genx-pfas/spine/pr/2
  - TURI 'Massachusetts Toxics Use Reduction Act' overview PDF, revised June 2018. Supports the Massachusetts figures: 'From 1990 to 2016, Massachusetts companies reduced toxic chemical use by 66 percent, byproduct by 72 percent, and on-site releases by 92 percent'. The attached quote 'reduced total violations by between 30% and 44%' (mailed water quality reports) does not appear in this document; it derives from the Bennear & Olmstead drinking-water disclosure study. German REACH 61% figure also not on this page.
- `https://www.wect.com/story/35728729/cfpua-staff-acted-in-appropriate-manner-in-involvement-with-genx-study/`
  - Label: WECT
  - Cards: #/case/genx-pfas/chain/pfas-harm/D3
  - WECT, Brandon Wissbaum, June 22 2017. The page supports the November 2016 part of the finding ('Knappe's report was published two months later in November 2016, and he later forwarded the paper to multiple individuals within NCDEQ and various cities'; 'A week after Knappe's email, a UNCW professor sent the published paper to CFPUA, along with several other public entities'). The attached quote about the McCrory administration in May/June 2016 and utilities not publicizing is not on this page; it is from the NC Health News Aug 17 2017 article.
- `https://www.wunc.org/environment/2025-09-11/emc-nc-pfas-deq-genx-pfoa-pfos-wetlands-e-coli`
  - Label: WUNC, September 2025
  - Cards: #/case/genx-pfas/chain/pfas-harm/R6
  - WUNC, Celeste Guajardo, Sep 11 2025. Page supports EMC adopting groundwater standards for PFOA, PFOS and GenX, narrowed from DEQ's eight proposed compounds. It does not contain the quote or the monitoring-rule details (one year of monitoring, facility-authored reduction plans, no deadline). The quote is verbatim from a later WUNC article, May 14 2026: https://www.wunc.org/environment/2026-05-14/pfas-dioxane-water-pollution-monitoring-minimization-emc-deq ('Under the proposal, certain wastewater treatment plants and industrial facilities will monitor their PFAS and 1,4 dioxane discharges for one year. Then, based on those results, certain plants and facilities will come up with their own reduction plan.').
- `https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill`
  - Label: WUNC
  - Cards: #/case/genx-pfas/chain/pfas-harm/R6
  - WUNC, Adam Wagner, 9 May 2025. Supports: $82.8 million for eight GAC filters, $158.7 million Brunswick RO plant, 104-3 House vote, $50 million eligibility amendment, costs since 2017. Not on page: 'the costs of the Sweeney Plant filtration improvements are currently falling on taxpayers' and 'No PFAS whatsoever detected' (appear to be CFPUA website wording), the $43 million build cost, the 8% rate increase, Sept/Oct 2022 dates, and the NC General Assembly bill-history text 'Re-ref to Agriculture, Energy, and Environment. If fav, re-ref to Judiciary...' which is from ncleg.gov, not WUNC.
## MOVED (1)

The content exists at another URL.

- `https://www.wunc.org/environment/2025-06-09/chemours-genx-cape-fear-river-pollution-pfas-wilmington`
  - Label: WUNC
  - Cards: #/case/genx-pfas/spine/i/3
  - No WUNC article exists at this slug/date. The dollar figures appear in WUNC, Apr 17 2025: https://www.wunc.org/politics/2025-04-17/wilmington-ted-davis-chemours-pfas-cape-fear ('$82.8 million to build and maintain eight granular activated carbon filters' at CFPUA; '$158.7 million' Brunswick County RO plant). That article does not mention an 8 percent customer rate increase; a WUNC Feb 27 2025 piece gives Brunswick's cost as $167.3 million.
## PAYWALLED (10)

The audit could not read the full page. In every case the abstract or a secondary copy supports the claim and the work exists as labelled. See the worklist for details.

## Access limits that shaped the verdicts

The fetcher could not reach nytimes.com, reuters.com, politico.com, wsj.com, bbc.com, businessinsider.com or archive.org. Those pages were checked through syndicated copies and inbound links. NCBI hosts served captcha pages intermittently, so PMC and PubMed papers were checked through Europe PMC, Crossref, OpenAlex and publisher copies. No verdict rests on a page nobody could read.

## Multi-label URLs

41 URLs carry more than one label. The audit did not rewrite them. The worklist shows every label per URL in the Labels Used column. The clear cases of drift are the same ones the handoff named: Coastal Review, EPA OIG, NFIB v. OSHA, and Dee et al. Decide the rule, then apply it in one pass.

## Should lint resolve URLs

Yes, but not on every run. A resolve check would have caught both fabricated URLs and the dead WUNC URL, since all three return 404. It would not catch a wrong label, a wrong article ID that resolves, or a quote pinned to the wrong page. Those need a reader.

Cost: 353 HEAD requests take about two minutes serially and under 30 seconds with a concurrency of 16. Some hosts block bots and return 403 for a live page, so the check must treat only 404 and 410 as failures and must allow a per-URL exception list. Run it as a separate `npm run lint:urls` on a weekly schedule or on release, not on every commit. In CI it needs outbound network, which the current VM lacks.

A cheaper second check costs nothing: lint can flag any `quote` field whose text also appears verbatim in a different citation on the same node, since that is the shape of most of the 44 mismatches.
