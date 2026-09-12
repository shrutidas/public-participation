# Audit B: COVID vaccines, pr/0 cl/3 and pr/1 cl/2

Read-only audit of js/spine/covid-vaccines.js (working tree, 12 September 2026). Criteria numbers: 1 Fit, 2 Design, 3 Transport, 4 Distinct information, 5 Counter role, 6 Honest balance.

One correction to the brief: Goovaerts, De Fine Licht and Marien 2025 is no longer left out. It already sits in the working tree as a counterEvidence card on pr/1 cl/0 (lines 727 to 741, uncommitted; HEAD does not contain it). Its verdict is in section 2.4.

---

## 1. pr/0, claim cl/3

**Proposal implication (outcome):** "Regular public data and briefings build trust in government, raise compliance with health rules, and reduce fear and misinformation."

**Claim:** "Timely official information limits the spread of misinformation." (now 4 evidence, 2 counter, 0 case)

Framing note. No card, current or candidate, measures *spread*. Every experiment measures belief right after exposure. The one card on spread (Lu) comes from a platform account, not an official source. The one card on *timing* of official communication (Chan 2021) is cross-national and correlational. Two syntheses replace the single-source experiments. They show that corrections from expert sources work, and that corrections work less well when they come late or after a falsehood has been repeated. A third, larger synthesis finds that corrections of science misinformation fail on average, and fail worst on health and polarized topics. The literature is split, and the kept set should show that split.

### 1.1 Card table

| # | Card (type, headline short, source) | 1 Fit | 2 Design | 3 Transport | 4 Distinct | 5 Counter role | VERDICT | Reason |
|---|---|---|---|---|---|---|---|---|
| E1 | evidence: "When the disease control agency answered a false health post itself, readers believed the falsehood less." Vraga and Bode 2017, Science Communication | Official source corrects belief; not timing, not spread | Single randomized experiment | US, CDC named, best transport | Source effect is pooled in Walter et al. 2021, whose reference list includes this study | n/a | MERGE into ADD-1 (Walter et al. 2021) | Criterion 2: a meta-analysis on corrections from expert sources covers it. Keep the CDC detail as one sentence in the synthesis card. |
| E2 | evidence: "In an outbreak experiment, corrections from a government health agency fixed false beliefs better than corrections from other people." van der Meer and Jin 2020, Health Communication | Same as E1 | Single online experiment | US sample | Same mechanism as E1; listed in Walter et al. 2021 references | n/a | MERGE into ADD-1 | Criteria 2 and 4: same source-effect finding as E1, covered by the synthesis. |
| E3 | evidence: "Countries whose governments started talking about the virus earlier saw less public interest in a major conspiracy theory." Chan, Rizio, Skali and Torgler 2021, Frontiers in Psychology | Only card that tests *timing* of official communication; outcome is search interest, a rough stand-in for spread | Cross-national observational, 111 countries, robustness checks, weak preregistered survey follow-up | Global, includes high-income democracies | Only population-level, timing-specific card | n/a | KEEP | Criterion 1: the only direct test of "timely". The card already reports the weak survey result. |
| E4 | evidence: "On a large microblog, rebuttals made users less willing to pass unverified news on..." Lu, Sun, Chen, Wang and Tan 2022, Frontiers in Public Health | Outcome is spread, but the rebutter is the platform, not an official health source | Observational, moderation model | China, a state-managed platform | Its decay point is carried better by Carey (C1) | n/a | CUT | Criteria 1 and 3: not official information, and the setting is far from US public health. |
| C1 | counter: "Fact-checks cut false virus beliefs in three countries, then the correction wore off..." Carey et al. 2022, Nature Human Behaviour | Belief correction and its decay; fact-checks, not official | Preregistered experiments with panel follow-up | US, UK, Canada | Durability is a distinct scope condition | Scope condition: effects fade, so briefings must continue | KEEP | Criterion 5: the only card on durability, in close settings. Porter and Wood 2021 (PNAS, four countries) found most effects lasted more than two weeks. A caveat could say durability findings differ. |
| C2 | counter: "An official message debunking the vaccine and autism myth corrected the belief but left the most hesitant parents less willing to vaccinate." Nyhan, Reifler, Richey and Freed 2014, Pediatrics | On the claim's own outcome (misperception) it *supports* the claim; the counter finding is about vaccination intent, which is a neighboring claim | Two-wave survey experiment | US | Intent backfire is a compliance point | Not a rival on misinformation | CUT | Criterion 1: the counter finding is about intent to vaccinate, not misinformation. No other pr/0 claim fits it exactly, so it cannot be moved. ADD-3 carries the real rival on health corrections more strongly. |
| ADD-1 | evidence: Walter, Brooks, Saucier and Suresh 2021, Health Communication | Corrections of health misinformation on social media; stronger when experts correct | Meta-analysis, 24 experiments | Mostly US samples | Replaces E1 and E2 | n/a | ADD | Criterion 2: a synthesis replaces the single-source experiments. |
| ADD-2 | evidence: Walter and Tukachinsky 2020, Communication Research | Tests timing directly: a delay before correction, or repetition first, weakens it | Meta-analysis, 32 studies; moderators compared across studies | Mixed, mostly US | New mechanism: timeliness | n/a | ADD | Criterion 1: the best experimental evidence on the "timely" half of the claim. |
| ADD-3 | counter: Chan and Albarracín 2023, Nature Human Behaviour | Tests whether corrections of science misinformation work; worst results on health and polarized topics | Meta-analysis, 205 effects from 74 reports, N = 60,861 | Mixed, includes COVID-19 | Strongest rival | Rival finding: null on average, same outcome, stronger design | ADD | Criteria 5 and 6: the largest synthesis points the other way. Leaving it out would tilt the claim. |
| ADD-4 | counter: Bruns et al. 2024, Scientific Reports | Tests whether naming a public institution as the source adds anything; less effective among people with low trust | Preregistered experiment, four EU countries, N = 5,228 | High-income democracies, COVID-19 and climate misinformation | New scope condition: the official label and trust in the source | Scope condition: only works when the source is trusted | ADD | Criterion 5: one card per distinct scope condition. This one bears directly on low trust in CDC among some Americans. |

### 1.2 Resulting kept set

- Evidence (3): ADD-1 Walter et al. 2021 (absorbs Vraga and Bode 2017, van der Meer and Jin 2020); ADD-2 Walter and Tukachinsky 2020; E3 Chan et al. 2021.
- Counter (3): ADD-3 Chan and Albarracín 2023; C1 Carey et al. 2022; ADD-4 Bruns et al. 2024.
- Cases: none.

Honest balance: yes, and better than now. The current set is four supporting single studies against two, which reads as settled. The literature is not settled. One synthesis finds corrections from experts work on social media. The largest synthesis finds science corrections fail on average, and fail worst on health and polarized issues. Timeliness has experimental support in one synthesis and correlational support in one cross-national study. Nothing measures spread. The claim text should stay as worded, with the gap shown: no study tests whether official information released sooner reduced how far misinformation traveled.

### 1.3 ADD and REWRITE cards, cl/3

- Type: evidence (ADD-1, replaces Vraga and Bode 2017 and van der Meer and Jin 2020)
  Headline: Corrections of false health posts reduced belief in them, and worked better when experts gave them.
  Finding: Pooling 24 experiments with 6,086 people, the authors found that correcting health misinformation on social media reduced false beliefs on average. "Interventions were more effective in cases where participants were involved with the health topic, as well as when misinformation was distributed by news organizations (vs. peers) and debunked by experts (vs. non-experts)." The studies it draws on include one in which the disease control agency corrected a false post that a single ordinary user could not, and one in which a government health agency beat ordinary people as a corrector. The authors could not rule out publication bias. The studies measure belief soon after exposure, not how far a falsehood spread.
  Quote: "Interventions were more effective in cases where participants were involved with the health topic, as well as when misinformation was distributed by news organizations (vs. peers) and debunked by experts (vs. non-experts)."
  Quote fetched from: https://api.openalex.org/works/doi:10.1080/10410236.2020.1794553 (identical in Europe PMC abstract record)
  Source label: Walter, Brooks, Saucier and Suresh 2021, Health Communication
  URL: https://doi.org/10.1080/10410236.2020.1794553
  Grade: strong
  Caveat for card: publication bias not excluded; outcome is belief, not spread.
  Verification: quote found verbatim in the fetched abstract; DOI resolves (302 to tandfonline). Both Vraga and Bode 2017 and van der Meer and Jin 2019/2020 appear in the paper's OpenAlex reference list. Before publishing the "studies it draws on include" sentence, check them against the included-studies table; I could not reach the full text. If they are not in that table, drop the sentence.

- Type: evidence (ADD-2)
  Headline: Corrections that came late, or after a falsehood had been repeated, did less to undo it.
  Finding: Pooling 32 studies with 6,527 people, the authors found that a correction on average does not fully erase a false claim's influence. "Corrections are less effective if the misinformation was attributed to a credible source, the misinformation has been repeated multiple times prior to correction, or when there was a time lag between the delivery of the misinformation and the correction." Corrections worked better when they were coherent and when they came from the source of the falsehood itself. The timing result compares experiments that happened to differ in delay. It does not test a public information schedule.
  Quote: "Corrections are less effective if the misinformation was attributed to a credible source, the misinformation has been repeated multiple times prior to correction, or when there was a time lag between the delivery of the misinformation and the correction."
  Quote fetched from: https://api.crossref.org/works/10.1177/0093650219854600 (publisher abstract)
  Source label: Walter and Tukachinsky 2020, Communication Research
  URL: https://doi.org/10.1177/0093650219854600
  Grade: moderate
  Verification: quote found verbatim in the Crossref and OpenAlex abstracts; DOI resolves (302 to journals.sagepub.com). Online 2019, print volume 47 issue 2, 2020.

- Type: counter-evidence (ADD-3)
  Headline: Attempts to correct false science claims did not reliably work, and health and politically divided topics were hardest.
  Finding: Pooling 205 effects from 74 reports with 60,861 people, the authors found that "attempts to debunk science-relevant misinformation were, on average, not successful". Corrections did better on topics outside health, on issues that were not politically polarized, and when they were detailed. This pool is broader than the social media health studies, which found that corrections worked on average, so the two syntheses disagree.
  Quote: "which showed that attempts to debunk science-relevant misinformation were, on average, not successful"
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1038/s41562-023-01623-8%22&resultType=core&format=json (Europe PMC abstract record)
  Source label: Chan and Albarracín 2023, Nature Human Behaviour
  URL: https://doi.org/10.1038/s41562-023-01623-8
  Grade: strong
  Verification: quote found verbatim in the Europe PMC abstract; DOI resolves (302 to nature.com). Crossref and OpenAlex carry no abstract text for this DOI, so the JS verifier may report it as unchecked. Check it against https://www.nature.com/articles/s41562-023-01623-8 if needed. Volume 7, issue 9, pages 1514 to 1525.

- Type: counter-evidence (ADD-4)
  Headline: Putting a public institution's name on a correction did not make it work better, and it worked less well for people who distrusted that institution.
  Finding: In a preregistered experiment with 5,228 people in Germany, Greece, Ireland and Poland, warnings given before misinformation about COVID-19 or climate change and corrections given after it both made people less vulnerable to it, with corrections slightly stronger. The named source was the European Commission. "Revealing the source of the interventions did not significantly impact their overall effectiveness." Corrections that named the Commission did less to lower belief in the misinformation among people who distrusted the European Union. The authors conclude that public institutions can mostly correct misinformation whatever the audience's trust, and call for more evidence.
  Quote: "Revealing the source of the interventions did not significantly impact their overall effectiveness."
  Quote fetched from: https://api.crossref.org/works/10.1038/s41598-024-71599-6 (publisher abstract)
  Source label: Bruns, Dessart, Krawczyk, Lewandowsky, Pantazi, Pennycook, Schmid and Smillie 2024, Scientific Reports
  URL: https://doi.org/10.1038/s41598-024-71599-6
  Grade: moderate
  Verification: quote found verbatim in the Crossref, OpenAlex and Europe PMC abstracts; DOI resolves (302 to nature.com).

Optional caveat for C1 (Carey): "A four-country experiment by Porter and Wood 2021 found most fact-check effects still present more than two weeks later, so how long corrections last is not settled." Porter and Wood abstract, fetched from https://api.openalex.org/works/doi:10.1073/pnas.2104235118, reads "Fact-checking reduced belief in misinformation, with most effects still apparent more than 2 wk later."

---

## 2. pr/1, claim cl/2

**Proposal implication (outcome):** "A mandate residents helped shape holds trust in health guidance."

**Claim:** "A mandate with public backing meets less backlash." (now 4 evidence, 4 counter, 1 case)

Framing note. The gaps file is right, and a fresh search did not change it. No study compares the same vaccine mandate with and without public or deliberative backing and measures backlash (protest, refusal, spillover to other vaccines, resentment). The only randomized test of citizen backing for a coercive pandemic rule (Muradova and Suiter 2022) finds no gain. The supporting side can honestly carry only indirect evidence. Mandates provoke resentment among people who do not back them. Decisions made by public vote draw more acceptance from people who lost. One national case (France 2016 to 2018) shows that a mandate following a consultation drew no measured backlash, though nothing in it separates cause from coincidence. The weight of the literature on this exact claim leans slightly against, and the kept set should show that.

### 2.1 Card table

| # | Card (type, headline short, source) | 1 Fit | 2 Design | 3 Transport | 4 Distinct | 5 Counter role | VERDICT | Reason |
|---|---|---|---|---|---|---|---|---|
| E1 | evidence: "When one shot was made compulsory in a game, people wary of vaccines got angry and took the next voluntary shot far less often." Betsch and Böhm 2016, European Journal of Public Health | Compulsory vs voluntary only; backing never varies. Fits "mandates cause backlash", not this claim | Randomized, incentivized lab game, N = 297 | Germany, hypothetical vaccine | Mechanism (reactance to compulsion) is already in E2, which also carries the support moderator | n/a | CUT | Criteria 1 and 4: no backing dimension, and E2 covers the reactance mechanism closer to the claim. |
| E2 | evidence: "People who did not want a vaccine mandate resented it most, and explaining why high coverage matters took some of that resentment away." Sprengholz et al. 2022, Journal of Health Psychology | Closest supporting fit: reactance to a vaccine mandate is highest where support is low. Individual support, not public backing, and the card says so | Preregistered survey experiment; the support moderator was measured, not assigned | Germany, COVID-19 vaccine | Only card on vaccine mandate reactance by support | n/a | KEEP | Criterion 1: nearest outcome (backlash to a vaccine mandate) with the right moderator. |
| E3 | evidence: "People who disagreed with a decision on something they cared about accepted it more when voters had decided it directly." Towfigh et al. 2016, Public Choice | Varies who decided (public vote vs party vs experts) and measures acceptance among losers; the "public backing" half | Randomized vignette experiment | Germany; not a health mandate | Only card that assigns public backing | n/a | KEEP | Criterion 1: the only supporting card where public backing itself is randomized. |
| E4 | evidence: "People judged a decision fairer when citizens had taken part in making it, even when the decision went against them." Werner and Marien 2022, British Journal of Political Science | Outcome is fairness perception, the legitimacy outcome of cl/0, not backlash | Pooled re-analysis of twelve experiments | Netherlands, Sweden | Duplicates E3's direction on a softer outcome | n/a | MOVE to pr/1 cl/0 evidence | Criterion 1: it tests exactly cl/0 ("Deliberation before a decision raises its perceived legitimacy") on its winner-loser part, and cl/0 has only one evidence card. |
| C1 | counter: "Telling people a citizens' assembly had backed a lockdown extension did not make them any more willing to obey it." Muradova and Suiter 2022, International Journal of Public Opinion Research | Closest test anywhere: the same coercive pandemic rule, with and without citizen deliberation | Randomized four-arm survey experiment, N = 2,088 | US and UK, COVID-19 | Only direct test | Strongest rival: null, and negative among people distrustful of assemblies | KEEP | Criterion 5. Checked full text: minipublic vs control is null in pooled and per-country models, and negative with covariates. Caveat worth adding: samples skewed young and educated, compliance near ceiling. |
| C2 | counter: "France's health pass pushed doubters to get the shot without easing their doubts, and drew large protests." Ward et al. 2022, Nature Medicine | No backing contrast; the protest and attitude facts cut both ways (protests, yet attitudes did not worsen) | Commentary drawing on surveys; before/after of who vaccinated | France | The doubt statistic is a composition effect, as the card admits | Neither rival nor clean scope condition | CUT | Criteria 1 and 2: no comparison on backing, a weak design, and a mixed direction that does not test the claim. |
| C3 | counter: "Whether people got the outcome they wanted mattered far more than how the decision was made." Esaiasson et al. 2019, British Journal of Political Science | Procedure vs outcome favorability on decision acceptance, the core mechanism of the claim | Several vignette and field experiments in one causal model | Sweden | General rival to E3 | Rival finding on the same outcome (acceptance), comparable design | KEEP | Criterion 5: the strongest general rival. It keeps E3 from reading as settled. |
| C4 | counter: "A measles vaccine rule most parents endorsed still left the parents who resented it less likely to vaccinate against other diseases." Neufeind et al. 2022, BMC Public Health | A real vaccine mandate with majority backing (74.1 percent) still produced reactance spillover in a minority | Preregistered cross-sectional survey, N = 4,863; no comparison mandate | Germany, real mandate | Only card on a real mandate with measured backing | Scope condition: majority backing does not remove backlash among people who resent the rule; institutional trust lowers it | KEEP | Criterion 5: a distinct scope condition on a real mandate. |
| Case | France, 2016 Vaccination Consultation and the 2017 Mandate Law (Lévy-Bruhl et al. 2018; Ward et al. 2022) | Instance of consultation, then mandate; the "no backlash" line rests on an assertion in a commentary | Case | France, infant mandates | Measured outcomes exist (see below) | n/a | CONVERT | Precedent with a documented outcome. Peer-reviewed surveys measured public agreement before the rule and mothers' support for vaccination before and after it. Full evidence card below, graded weak. |

### 2.2 Resulting kept set

- Evidence (3): E2 Sprengholz et al. 2022; E3 Towfigh et al. 2016; converted France card (Martinot et al. 2021 with Mathieu et al. 2019 and Lévy-Bruhl et al. 2018).
- Counter (3): C1 Muradova and Suiter 2022; C3 Esaiasson et al. 2019; C4 Neufeind et al. 2022.
- Cases: none left (France converted).
- Moved out: Werner and Marien 2022 to cl/0 evidence. Cut: Betsch and Böhm 2016, Ward et al. 2022 as a standalone card (it stays as a source in the France description only if the group wants the protest context; the converted card does not need it).

Honest balance: yes. The claim has no direct supporting test. The single direct test finds nothing, and the kept counter side is at least as strong as the supporting side. The supporting cards are labeled as halves of a mechanism plus one uncontrolled national case. The group should read this claim as a conjecture the proposal would test, not as an established effect. The claim wording should not change to fit the evidence.

### 2.3 CONVERT card, cl/2

- Type: evidence (CONVERT of the France case)
  Headline: After France made infant vaccines compulsory following a national consultation, more mothers came to favor vaccination, not fewer.
  Finding: France ran a national vaccination consultation in 2016, with public hearings, online contributions and a jury of ordinary citizens. Parliament then made eleven infant vaccines compulsory for children born from January 2018. Weeks before the rule took effect, a survey weighted to the French population found 64.5 percent agreed with the extension, while 56.9 percent called it authoritarian. Repeated national surveys of mothers found that support for vaccination fell from 80.2 percent in 2012 to 64.0 percent in 2017, then rose to 69.0 percent in 2018. "Following the implementation of infant mandatory vaccination in 2018, proportion of mothers in favour of vaccination increased significantly." Coverage for the hepatitis B and meningococcus C vaccines rose as well. The surveys follow one country over time, so they cannot separate the effect of the consultation from the rule itself or from other events.
  Quote: "Following the implementation of infant mandatory vaccination in 2018, proportion of mothers in favour of vaccination increased significantly."
  Quote fetched from: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:33059002%20AND%20SRC:MED&resultType=core&format=json (Europe PMC abstract, PMID 33059002)
  Source label: Martinot et al. 2021, Infectious Diseases Now
  URL: https://doi.org/10.1016/j.medmal.2020.09.027
  Additional sources: Mathieu et al. 2019, Eurosurveillance, https://doi.org/10.2807/1560-7917.ES.2019.24.25.1900053 (64.5, 68.7 and 56.9 percent; abstract fetched from Crossref and verified); Lévy-Bruhl et al. 2018, Eurosurveillance (consultation facts, already on the case card).
  Grade: weak
  Caveat for card: the mothers' survey is the Vaccinoscopie series. Earlier Vaccinoscopie papers report funding from GlaxoSmithKline, a vaccine maker. I did not reach this paper's own funding statement, so check it before publishing and add a disclosure sentence if it applies.
  Verification: quote and the 80.2, 64.0 and 69.0 percent figures found verbatim in the fetched abstract; DOI resolves (302 to Elsevier linkinghub). Mathieu et al. figures found verbatim in the Crossref abstract; DOI resolves.

### 2.4 Goovaerts, De Fine Licht and Marien 2025

Placement: it belongs on **cl/0**, where it already sits in the working tree. It does not belong on cl/2. Its outcome is legitimacy perception after politicians override a citizen panel, not backlash or refusal against a mandate. Putting it on cl/2 would repeat the fit problem that moves Werner and Marien out. It does not fit cl/1 ("People comply with rules they see as legitimate") either, because it measures no compliance.

Side: it is a scope condition on the Germann counter card. Gains from deliberation vanish when the panel is overridden, unless politicians give a reasoned public response. The proposal's description promises exactly that response, so its net direction supports the proposal as designed. My recommendation is to move it to cl/0 **evidence**, paired with the Germann override card on the counter side. If the group prefers to show all override findings together, keeping it on counter is defensible.

REWRITE needed. The current finding puts quotation marks around a sentence in which the source's en dashes were silently changed to commas ("When politicians communicate responsively about this, meaning that..."). That quote is not verbatim. The card also omits the country and sample. Rewritten card:

- Type: evidence (REWRITE; recommended on pr/1 cl/0 evidence, currently cl/0 counterEvidence)
  Headline: When politicians explained why they were setting a citizen panel's advice aside, most of the lost legitimacy came back.
  Finding: In a preregistered experiment with 2,659 people in Belgium, people rated decision making as less legitimate when politicians did not follow a citizen panel's recommendation. When politicians showed respect for the recommendations and publicly justified why they departed from them, "legitimacy perceptions substantially increase, generally reaching the level of those cases where recommendations are followed". The repair worked only for people who found the reasons valid. It held both for people who got the policy they wanted and for people who did not. The study measures judgments of legitimacy after reading a scenario, not acceptance of the decision or behavior. This is the written response the proposal promises.
  Quote: "legitimacy perceptions substantially increase, generally reaching the level of those cases where recommendations are followed"
  Quote fetched from: https://api.crossref.org/works/10.1111/1475-6765.12711 (publisher abstract)
  Source label: Goovaerts, De Fine Licht and Marien 2025, European Journal of Political Research
  URL: https://doi.org/10.1111/1475-6765.12711
  Grade: moderate
  Verification: quote, N = 2,659, Belgium, preregistration, the validity condition and the winner-loser result all found verbatim in the fetched abstract; DOI resolves (302 to cambridge.org). Volume 64, issue 2, pages 767 to 789.

---

## 3. Searches run and what they found

- Abstract lookups through Crossref, OpenAlex and Europe PMC for all current cl/3 and cl/2 sources plus candidates. All current quotes checked here match. The Muradova and Suiter full text (KU Leuven repository PDF) confirms the null against control.
- "meta-analysis correction health misinformation social media": Walter et al. 2021 (ADD-1). Its OpenAlex reference list contains Vraga and Bode 2017 and van der Meer and Jin.
- Walter and Murphy 2018 (Communication Monographs, k = 65): corrections have moderate effects; rebuttals beat forewarnings; appeals to credibility are weakest. Not carded, because ADD-1 and ADD-3 cover the source and real-world points more closely. Available if the group wants the forewarning vs rebuttal result.
- Walter and Tukachinsky 2020 (continued influence meta-analysis): time lag and repetition weaken corrections (ADD-2).
- Chan, Jones, Hall Jamieson and Albarracín 2017 (Psychological Science debunking meta-analysis): lab-based; superseded by Chan and Albarracín 2023 (ADD-3), which found debunking of science misinformation not successful on average.
- Porter and Wood 2021 (PNAS, four-country simultaneous fact-check trials): effects durable more than two weeks. Used as a caveat on Carey, not a card, since the fact-checks were not official and the settings are further from the US.
- "prebunking vs debunking timing": Lorko et al. 2026 (PSPB) and Bruns et al. 2024 (Scientific Reports). Bruns carded as ADD-4 for the source-trust scope condition.
- "CDC correction trust partisans experiment": no US experiment found that varies a CDC label and splits by trust in CDC. KFF polling documents falling trust, but it is a record, not an effect.
- "official rebuttal speed rumor spread": only Chinese observational or simulation studies (Sina Weibo, WeChat), none causal and none on a US health agency. Gap confirmed: nothing measures spread against the timing of official information.
- "systematic review spillover effects minipublics": van der Does and Jacquet 2023 (Political Studies, 60 studies) finds evidence on effects for non-participants "remains tentative". It supports calling cl/2 a gap. Not carded, since it measures no backlash.
- "vaccine mandate decided by citizens assembly OR referendum experiment": nothing that varies who decided a vaccine mandate. Found Sprengholz 2022 and Neufeind 2022 (already on the card), and a 2023 Political Research Exchange experiment on thresholds and justifications (varies justification, not backing).
- "minipublic backfire / adoption": van Dijk and Lefevere 2023 (EJPR, Belgium, N = 3,102). An adopted minipublic raises political support and an ignored one lowers it. This duplicates the Germann and Goovaerts cards on cl/0; not added.
- Goldberg, Lindell and Bächtiger 2024, APSR, three conjoint experiments (US, Ireland, Finland): citizens reluctant to empower minipublics. About preferences, not backlash; not carded.
- "Swiss COVID-19 law referendum effect": vote results in news only, no study of what the votes did to opposition or compliance. The Swiss case stays out, as in the prior report.
- "executive order vs legislature COVID compliance experiment": law review commentary only, no empirical test.
- "vaccine mandate backlash vote share DiD": partisan divides in uptake, nothing that varies backing for a mandate.
- "France 2018 mandate extension attitudes": Mathieu et al. 2019 and Martinot et al. 2021 (basis of the France CONVERT), plus Cohen et al. 2020 (same Vaccinoscopie series, same direction).
- Degeling et al. 2024 (four Australian community juries on childhood mandates): a real instance of citizens shaping mandate design, with no backlash measure. It could go in the pr/1 description as an example of what an assembly recommends ("least restrictive" mandates), not as evidence on cl/2.

## 4. Verification run

`node verify-quotes.mjs audit-B-vaccines.md`: 6 quotes, 6 MATCH (Walter et al. 2021, Walter and Tukachinsky 2020, Chan and Albarracín 2023, Bruns et al. 2024, Martinot et al. 2021, Goovaerts et al. 2025). All six DOIs resolve (HTTP 302 to the publisher).
