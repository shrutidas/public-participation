# Chain consistency audit: spine-layer data

Scope: `/home/claude/pp/js/spine/covid-schools.js`, `covid-vaccines.js`, `genx-pfas.js`,
checked against the case timelines in `/home/claude/pp/js/cases/` and the research files
`schools-proposal-chains.md`, `vaccines-proposal-chains.md`, `genx-proposal-chains.md`.
Judged for internal logical consistency and faithfulness to the research files only; no new
web research. Anchor substrings were verified against the timeline files (all resolve once
`paragraph()` whitespace collapsing is applied; no broken anchors found).

Findings are numbered continuously and grouped by severity class. Each carries file,
location, the inconsistency, and a concrete fix.

---

## Severity 1: Direction-of-effect errors

The dominant problem in the data is systemic: most impacts are NAMED as the harm that
occurred historically ("Families leave public school", "Test scores fall"), which is correct
for the timeline-event `from` arrows, but every proposal chain that attaches to them is a
mitigation chain whose last link claims to REDUCE the harm. On the map, the chain's final
arrow INTO the harm-named box reads as the proposal causing the harm. Findings 1 to 4 are
the instances; the shared fix is renaming impacts as neutral measured quantities, which
keeps the `from` arrows correct and makes the proposal arrows readable as "changes this
quantity."

1. **genx-pfas.js, proposal "Federal funding, enforcement designed locally" →
   impactsMeasured ["No statewide rule follows"].** The sharpest single instance: a chain
   whose links argue local capacity converts wins into statewide standards ends in an arrow
   into a box named for the standard never arriving, so the map says the proposal causes
   the no-rule outcome. Fix: rename the impact to "Statewide rule adoption" (the measures
   paragraph already carries the negative result and can stand as written).

2. **covid-schools.js, all four impacts.** "Families leave public school", "Chronic absence
   sticks", "Confidence in public schools falls", and "Test scores fall" each receive
   arrows from proposal chains whose last links claim to reduce exit, reduce absence, hold
   confidence, and reduce learning loss. Every schools proposal is affected. Fix: rename to
   "Public school enrollment", "Chronic absenteeism", "Confidence in public schools", and
   "Test scores".

3. **covid-vaccines.js, impact "Preventable deaths among the unvaccinated".** Receives
   arrows from "Share everything, early and openly" and "Let communities design how
   vaccines reach them", whose terminal claims are "prevents deaths": the arrow renders as
   the proposal causing preventable deaths. Fix: rename to "Deaths among unvaccinated
   adults".

4. **genx-pfas.js, impacts "37 years of exposure through drinking water", "PFAS measured in
   the blood of residents", "Filtration costs fall on water customers".** Same pattern
   across proposals 1 through 4, whose chains end in "lower cumulative exposure", "lower
   body burden", and "lowers the filtration costs". The filtration name is doubly ambiguous:
   next to "Test scores fall", "Filtration costs fall on..." reads as costs decreasing.
   Fix: rename to "Drinking water exposure", "Serum PFAS in residents", and "Filtration
   costs paid by water customers".

5. **covid-vaccines.js, impact "Preventable deaths among the unvaccinated", from-arrow
   {anchor: "Eligibility expands to all US adults", strength: "strong"}.** The anchored
   event enabled vaccination; it did not cause the deaths. A strong-graded causal arrow
   from a pro-vaccination milestone into a deaths box is backwards; the note ("the gap
   became behavioral") shows the anchor is a marker, not a cause. Fix: downgrade to
   "moderate" and rewrite the note to marker language ("marks the point after which the
   remaining deaths trace to non-uptake rather than supply"), or remove the arrow.

6. **genx-pfas.js, impact "PFAS measured in the blood of residents", from-arrow
   {anchor: "public notice and comment", strength: "strong", note: "Controls were followed
   by measured declines"}.** The anchored event LOWERED serum PFAS; the arrow into the
   body-burden box asserts the comment period caused the PFAS in residents' blood. Fix:
   delete this arrow. The decline is already correctly credited to the same anchor under
   "Discharge cut 99 percent, a $12 million penalty", and the decline sentence already
   lives in this impact's measures text.

7. **genx-pfas.js, impact "No statewide rule follows", from-arrow {anchor: "public notice
   and comment", strength: "moderate"}.** The arrow asserts the consent-order participation
   caused the absence of a statewide rule. The impact's own evidence (the 2026 federal
   rescission and the HB 569 stall) documents the absence, not that participation caused
   it; the only study supporting a crowd-out reading (Langpap and Shimshack) sits in
   proposal 6's links, not on this impact. Fix: downgrade to "weak", or add the crowd-out
   study to this impact's evidence so the "moderate" arrow has support.

---

## Severity 2: Chain continuity

8. **covid-schools.js, proposal "Regional citizen assemblies that can decide".** Link 2
   ends with the assembly, not the union deal, setting modality; but no later link carries
   the modality channel forward. Links 3 and 4 route everything through perceived
   legitimacy, the channel graded unstudied twice, while the well-evidenced channel (an
   assembly choosing more in-person instruction cuts remote exposure, the mechanism behind
   the very impacts attached) never appears. A reader trips at link 3: the decision power
   won in link 2 is never used. Fix: rewrite link 4 as "An assembly empowered to set
   modality cuts remote exposure where conditions allow, and higher perceived legitimacy
   holds confidence" (or add that as a separate link).

9. **covid-schools.js, proposal "Let different places decide for themselves".** Link 4
   ("condition-tracking decisions cut remote exposure") logically continues from link 2
   ("local decisions track local conditions"), not from link 3 ("variation generates
   learning in time"), which nothing downstream uses. Fix: swap links 3 and 4, or open
   link 4 with "Informed by those comparisons, condition-tracking decisions...".

10. **covid-schools.js, proposal "Give the public a real say before the decision".** Same
    dangling-branch pattern: link 3 ("upstream voice reduces lawsuits and recalls") sits
    between link 2 (trust) and link 4 (trust reduces exit and absence), and link 4 picks up
    from link 2. Fix: move link 3 to the end of the array or label it as the branch feeding
    the conjectured impact "Less adversarial post-hoc participation".

11. **covid-vaccines.js, proposal "Public deliberation before any mandate", link 3
    ("Mandates raise uptake").** The claim states the mandate's average effect with no
    reference to the legitimacy built in links 1 and 2, so as written the chain produces
    identical outcomes with or without the mini-public, which contradicts the proposal's
    premise. Fix: rewrite the claim as "A mandate carrying deliberative legitimacy raises
    uptake at least as much as the undeliberated mandate did, with less backlash."

12. **covid-schools.js, proposal "Share local data from the first weeks", link 2.** The
    name "Honest uncertainty does not cost trust" covers only half the claim; the second
    half, "builds shared understanding", has no supporting evidence (van der Bles shows
    only the absence of a trust penalty, as the research file notes). Fix: trim the claim
    to end at "...does not erode trust."

---

## Severity 3: Wrong attachment

13. **covid-vaccines.js, proposal "Public deliberation before any mandate".** The final
    link "Uptake prevents deaths" (graded strong) targets a measured impact the proposal
    never attaches: impactsMeasured lists only "Mandates and uptake, split by
    jurisdiction". A strong terminal link that arrives nowhere on the map. Fix: add the
    deaths impact (renamed per finding 3) to impactsMeasured, or delete link 4.

14. **covid-vaccines.js, proposal "Let communities design how vaccines reach them".**
    impactsMeasured includes "Preventable deaths among the unvaccinated", but no link runs
    uptake to deaths (unlike proposals 1 and 2, which both carry that link); link 3 instead
    reaches deaths via "the never-estimated mortality cost of the spring 2021 lag", an
    explicitly unmeasured quantity, which cannot justify an arrow into a measured deaths
    box. Fix: add an "Uptake prevents deaths" link reusing the strong evidence from the
    other two chains, or move the deaths impact to impactsConjectured.

15. **covid-schools.js, proposal "Bring the right experts together with the public".** The
    final link claims reduced "later absence" but "Chronic absence sticks" is not in
    impactsMeasured, although the research file attached absenteeism as a measured endpoint
    for this proposal. Fix: add "Chronic absence sticks" (renamed per finding 2) to
    impactsMeasured.

16. **covid-schools.js, proposal "Share local data from the first weeks".** Mirror image of
    finding 15: the final link claims "reducing exit and absence" but absence is not
    attached, and the research file's endpoints for this proposal were confidence and
    enrollment only. Fix: drop "and absence" from the link 4 claim.

17. **genx-pfas.js, proposal "Let the public choose experts to review the evidence".**
    impactsMeasured ["PFAS measured in the blood of residents"] is unreachable from the
    links: the chain terminates at trusted communication and engagement, its own
    counter-evidence states the measured exposure reductions flowed from litigation,
    enforcement, and comment, and the June to July 2017 intervention postdates nearly the
    entire exposure window, so it could barely move accumulated body burden. The research
    file says the workshop's actual target is legitimacy (conjectured) and that "no link
    from panel composition to those endpoints is measured anywhere". Fix: move the serum
    impact to impactsConjectured (or drop it) and let the chain end at "Legitimacy of the
    response" and "Repaired trust".

18. **genx-pfas.js, proposal "Let residents report early warning signs".** Anchor "cattle
    deaths" points at the 1998 West Virginia Tennant entry, while the when paragraph
    concedes the only defensible Cape Fear deployment is 2013 to 2015; the anchor sits 15
    years and one state away from the deployment the chain defends. The data self-flags
    this but leaves it unresolved. Fix: re-anchor to the 08/2012 detection entry
    ("12 novel fluorinated compounds"), keeping the 1998 Tennant story inside the when
    paragraph as the workshop's original framing.

19. **Anchor timing versus stated windows (three proposals).** covid-schools "Let different
    places decide" (when: June to August 2020; anchor entry dated 09/2020), covid-vaccines
    "Public deliberation before any mandate" (when: June to August 2021; anchor entry dated
    09/2021), covid-vaccines "Let communities design..." (when: February 2021; anchor
    "vaccine equity push" dated 04/2021 while a 02/2021 entry, "20,792 doses", exists).
    Fix: for the vaccines co-design proposal, re-anchor to "20,792 doses"; for the other
    two, either accept "anchored at the decision event the window precedes" as an explicit
    convention or say so in each when paragraph.

20. **covid-schools.js, mechanism "Elections and recalls".** Failure tag "acted-no-effect"
    while the detail paragraph documents removal of all three San Francisco commissioners,
    an unambiguous effect on officeholders; only the decisions being judged were untouched.
    Fix: reword the note to "Structurally after the fact; no effect on the decisions it
    judged" (or retag "partial").

21. **covid-schools.js, mechanism "State advisory councils".** Tag "acted-no-effect" while
    its own note says "uptake never documented" and the detail says the record contains
    limited information on whether recommendations were followed: unknown effect is not no
    effect. Fix: reword the note to "Fired at the right time, advisory only; effect
    unmeasured" and add "so its effect is undocumented rather than absent" to the detail
    (the tag can stand only if the vocabulary has no unmeasured option, and the prose
    should then carry the distinction).

22. **covid-vaccines.js, impact "Mandates and uptake, split by jurisdiction".** The single
    from-arrow anchors the September 2021 federal mandate, but the measures paragraph
    describes only foreign national mandates and US state mandates; the anchored federal
    rule was stayed before enforcement and appears nowhere in the measures. Fix: add one
    measures sentence: "The federal rule itself was stayed before enforcement, so its own
    uptake effect is unmeasured; the evidence comes from national mandates abroad and from
    US state mandates."

23. **covid-vaccines.js, impact "The racial vaccination gap narrows", from-arrow
    {anchor: "20,792 doses", strength: "moderate"}.** A single 16-week neighborhood site
    cannot cause a national gap narrowing, and the impact's own counter-evidence (Annenberg:
    only safety knowledge mediated the narrowing) contests access attribution generally.
    Fix: downgrade to "weak" with note "local exemplar of the access mechanism; national
    attribution contested".

---

## Severity 4: Grade inconsistency

24. **covid-vaccines.js, proposal "Let communities design...", link 1 counter-evidence.**
    The counter-evidence entry carries grade "unstudied" while citing a PLOS ONE source.
    "Unstudied" is a link strength in this schema, not an evidence grade, and an entry with
    a cited source is by definition not unstudied. Fix: regrade the entry "moderate" (the
    documented absence of an isolation study is itself a moderate-strength finding), or
    state the absence in the finding text without a grade.

25. **covid-schools.js, proposal "Let different places decide", link 3.** Strength
    "unstudied" yet the link carries non-analogical supporting evidence graded "moderate"
    (the in-case fact that cross-district variation generated the mode-effect literature).
    The claim bundles a studied proposition (variation generates knowledge) with an
    unstudied one (the knowledge arrives inside the decision window); the research file
    graded them separately. Fix: narrow the claim to the in-window part and recast the
    knowledge-generation material as context, or regrade the link "contested".

26. **covid-vaccines.js, proposal "Fund evaluation alongside the programs", link 2.**
    Strength "unstudied" with graded ("weak") in-domain supporting evidence (the OES
    portfolio) that is not flagged as analogical, the one condition under which an
    unstudied link may carry graded support. Fix: fold the OES observation into the claim
    text as context, or mark it explicitly as analogical support.

27. **covid-schools.js, impact "Test scores fall".** The only quote on the impact's
    supporting evidence reads "word decoding and reading comprehension scores were not
    lower during the pandemic" (Sweden's open schools): read alone, the quote contradicts
    the impact it supports, because it is contrast evidence for the closure counterfactual.
    Fix: quote the NAEP declines (5 points reading, 7 points math) instead and keep the
    Sweden result inside the finding text as the counterfactual contrast.

---

## Severity 5: Internal contradictions between prose fields

28. **covid-schools.js (spine) versus cases/covid-schools.js (timeline).** The proposal
    "Regional citizen assemblies" when paragraph says Michigan created the appointed
    advisory council in May 2020 (correct: Executive Order 2020-88 is dated May 15, 2020,
    and the research file agrees), but the timeline entry carrying the council's creation
    is dated 04/2020. Fix: date that timeline entry 05/2020 (or "04-05/2020" if the
    closure order it also covers is the April event).

29. **genx-pfas.js, proposal "Federal funding, enforcement designed locally", link 1.** The
    NC Policy Collaboratory's $5 million was state legislature money, but it is offered as
    evidence that FEDERAL funding builds local capacity, dropping the research file's
    explicit "state, not federal, but the funding-to-capacity link is demonstrated" caveat.
    Fix: append that caveat clause to the evidence finding.

30. **covid-vaccines.js, proposal "Let communities design...", banner flag.** The chain
    carries banner: true (the whole-chain-unstudied banner per the genx research file's
    framing) although no link grades below "moderate" and the Protect Chicago Plus
    comparable measures the bundled intervention through to the uptake endpoint; the reason
    the banner still holds, that co-design was never isolated from supply priority, appears
    only inside link 1's evidence. Fix: state the isolation gap in the proposal
    description so the banner and the link grades read consistently.

---

## The three most urgent fixes

1. **Rename the harm-stated impacts (findings 1 to 4).** Until "Families leave public
   school", "Preventable deaths among the unvaccinated", "No statewide rule follows", and
   the rest become neutral quantities ("Public school enrollment", "Deaths among
   unvaccinated adults", "Statewide rule adoption"), every mitigation chain on the map
   renders as causing the harm it exists to prevent. This is one mechanical rename pass
   (impact names plus each proposal's impactsMeasured strings) and it repairs the map's
   core reading in all three cases at once.

2. **Remove or reword the two backward from-arrows (findings 5 and 6).** "Eligibility
   expands to all US adults" → preventable deaths at strength "strong", and "public notice
   and comment" → PFAS in residents' blood at strength "strong", are the two places where
   the timeline-to-impact layer itself asserts a cause pointing the wrong way, independent
   of any rendering convention.

3. **Repair the deaths attachments in the vaccines proposals (findings 13 and 14).**
   "Public deliberation before any mandate" has a strong terminal deaths link with no
   deaths impact attached; "Let communities design how vaccines reach them" has the deaths
   impact attached with no link that reaches it (and justifies it by an explicitly
   never-estimated quantity). One impact-list edit and one added link make the two chains
   consistent with each other and with the research file.
