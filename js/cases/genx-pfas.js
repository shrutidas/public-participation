import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 4',
  title: 'GenX PFAS Contamination in the Cape Fear River',
  overview:   paragraph(`
    This case shows how weak environmental governance allowed harm to continue for
    years. Industrial secrecy, fragmented regulation, and uncertain science delayed
    action, even as companies benefited economically and downstream communities faced
    unequal and involuntary exposure risks. Crucially, people do not need definitive
    proof of harm to act. When credible suspicion exists, especially supported by
    evidence from outside the affected area, communities have a right to respond and
    seek protection.
  `),
  entries: [
    entry({
      date: '1951',
      category: 'orange',
      actors: 'DuPont; 3M',
      text:       paragraph(`
        DuPont began using PFOA (C8) at Washington Works, West Virginia to manufacture
        Teflon coatings. 3M is the chief supplier. Discharge into the Ohio River
        begins. No regulatory disclosure required. The public and downstream
        communities have no knowledge of the chemicals being used or released.
      `),
      sources: [source('SearchlightNM', 'https://searchlightnm.org/toxic-timeline-a-brief-history-of-pfas')],
    }),

    entry({
      date: '1961',
      category: 'green',
      actors: 'DuPont Internal Scientists',
      text:       paragraph(`
        DuPont scientists issued internal warnings about C8 health risks. The
        company's own toxicologists flagged concerns about accumulation and organ
        effects. Warnings documented in confidential memos, not shared with EPA,
        workers, or the public.
      `),
      sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')],
    }),

    entry({
      date: '1970s',
      category: 'green',
      actors: 'DuPont; 3M Epidemiology Teams',
      text:       paragraph(`
        DuPont discovered high concentrations of PFOA in the blood of Washington Works
        factory workers. The company did not report this to EPA, as would have been
        required under TSCA Section 8(e) substantial risk reporting. 3M's own
        epidemiological studies of workers indicated no adverse effects at ppb levels,
        framing that both companies would use for years to deflect concern.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '1978–1981',
      category: 'orange',
      actors: 'DuPont; 3M',
      text:       paragraph(`
        DuPont's formal testing confirmed elevated PFOA in workers by 1980. A July
        1980 internal memo concludes: 'continued exposure is not tolerable.' DuPont
        reassigned 50 women from the Teflon division but did not tell them why.
        Between 1979 and 1981, two of seven children born to female Washington Works
        employees had birth defects. 3M sent DuPont results showing PFOA causes birth
        defects in rats.
      `),
      sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')],
    }),

    entry({
      date: '1980',
      category: 'orange',
      actors: 'DuPont; Fayetteville Works',
      text:       paragraph(`
        DuPont began discharging GenX-related fluorochemicals from its Fayetteville
        Works plant in Bladen County, NC into the Cape Fear River, the primary
        drinking-water source for downstream communities including Wilmington
        (approximately 250,000 people). No regulatory requirement mandated disclosure
        to the public. Discharge continued largely unmonitored for 37 years.
      `),
      sources: [source('CBS News', 'https://www.cbsnews.com/news/wilmington-nc-cape-fear-river-water-tainted-genx-dupont-chemours/')],
    }),

    entry({
      date: '1981–1984',
      category: 'orange',
      actors: 'DuPont',
      text:       paragraph(`
        DuPont tested tap water in communities on both sides of the Ohio River from
        Washington Works and found C8 contamination, including in public drinking
        water. This was marked 'personal and confidential' and never reported to EPA.
        DuPont also discovered PFOA crosses the placenta in cord blood. Active
        concealment of known drinking-water contamination from regulators and the
        public.
      `),
      sources: [
        source('EWG', 'https://www.ewg.org/news-insights/news-release/epa-finds-dupont-guilty-withholding-teflon-blood-and-water-pollution'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '1998',
      category: 'green',
      actors: '3M; EPA Office of Toxic Substances',
      text:       paragraph(`
        3M alerted EPA that PFOS builds up in blood, sending rat studies showing liver
        damage from PFAS exposure. This is the first time EPA was formally notified of
        the PFAS bioaccumulation problem. 3M's letter described detecting PFOS at 9 to
        56 ppb in blood bank samples from people with no known occupational exposure,
        meaning PFAS were already in the general population's blood.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '1998–1999',
      category: 'purple',
      actors: 'Wilbur Tennant; Rob Bilott; DuPont',
      text:       paragraph(`
        Wilbur Tennant, a West Virginia farmer, contacted attorney Rob Bilott after
        observing cattle deaths, creek contamination, and unusual changes near
        DuPont's Dry Run Landfill. Tennant's documentation, including videos and
        animal illness records, became the trigger for federal litigation. Local
        observation, videos, animal illness, and suspicion became the trigger for
        litigation and discovery.
      `),
      sources: [
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '1999',
      category: 'red',
      actors: 'EPA; 3M',
      text:       paragraph(`
        EPA began an audit of 3M studies in response to 3M's 1998 disclosures,
        negotiating a formal TSCA Compliance Audit Agreement. EPA would eventually
        collect over 700 studies from 3M under this process.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '2000–2001',
      category: 'purple',
      actors: 'Rob Bilott; Federal Court; DuPont; EPA and DOJ as Recipients',
      text:       paragraph(`
        Court-ordered discovery in the Tennant case produced internal DuPont records
        about PFOA/C8. Bilott warned EPA, DOJ, and other officials about PFAS dangers.
        Litigation created a public-record pathway that ordinary regulation had not
        produced. This matters for Cape Fear because the later GenX problem emerged
        after PFAS secrecy had already been exposed.
      `),
      sources: [
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '2001–2004',
      category: 'purple',
      actors: 'Exposed Residents; Bilott Legal Team; DuPont; Wood County Circuit Court',
      text:       paragraph(`
        Residents filed Leach v. DuPont, a class action for PFOA-contaminated drinking
        water in six Ohio and West Virginia water districts. The settlement required
        filtration, health-data collection, independent science, and
        medical-monitoring conditions. This lawsuit created the scientific
        infrastructure that regulators and companies lacked.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461'),
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
      ],
    }),

    entry({
      date: '2005',
      category: 'red',
      actors: 'EPA; DuPont',
      text:       paragraph(`
        EPA fined DuPont $10.25 million, the largest civil administrative penalty in
        EPA history at the time, for failing to report substantial risk of injury to
        human health from PFOA, with violations going back to the 1980s. EPA's own
        Science Advisory Board issued a draft finding that PFOA is a 'likely human
        carcinogen.' The fine resolved the violations but imposed no enforceable
        limits on continued production, use, or release of PFOA.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '2005–2006',
      category: 'purple',
      actors: 'C8 Health Project; Class Members; Independent Administrators',
      text:       paragraph(`
        The C8 Health Project collected blood and health data from 69,000
        participants. Public participation became science: exposed residents' blood,
        health histories, and consent generated one of the largest community PFAS
        exposure datasets.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461')],
    }),

    entry({
      date: '2006–2015',
      category: 'red',
      actors: 'EPA; DuPont; 3M/Dyneon; Other PFAS Companies',
      text:       paragraph(`
        EPA launched the PFOA Stewardship Program, asking eight major companies
        including DuPont to reduce PFOA emissions and product content by 95 percent by
        2010 and work toward elimination by 2015. Federal regulators recognized PFAS
        in blood, long human half-life, and animal developmental effects before the
        Cape Fear GenX controversy became public.
      `),
      sources: [source('EPA', 'https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/fact-sheet-20102015-pfoa-stewardship-program')],
    }),

    entry({
      date: '2009',
      category: 'red',
      actors: 'EPA Office of Chemical Safety and Pollution Prevention; DuPont',
      text:       paragraph(`
        EPA entered a TSCA Section 5(e) consent order with DuPont for GenX-related
        substances, requiring 99 percent capture, destruction, recycling, or control
        of effluent and air emissions. EPA formally recognized insufficient
        information and potential unreasonable risk, but allowed manufacture under
        negotiated controls rather than banning or requiring full premarket proof of
        safety.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '2011–2012',
      category: 'green',
      actors: 'C8 Science Panel; Wood County Circuit Court; Exposed Class',
      text:       paragraph(`
        The C8 Science Panel found probable links between PFOA exposure and kidney
        cancer, testicular cancer, ulcerative colitis, thyroid disease,
        hypercholesterolemia, and pregnancy-induced hypertension. These findings
        should have increased the burden on regulators and companies to treat
        replacement PFAS as presumptively concerning.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3855507')],
    }),

    entry({
      date: '2015',
      category: 'orange',
      actors: 'DuPont; Chemours',
      text:       paragraph(`
        DuPont spun off its performance-chemicals business into Chemours and
        transferred the relevant rights and operations to the new company. Questions
        about how to coordinate EPA TSCA consent orders became more difficult, because
        effective oversight and remediation required aligning obligations, data, and
        enforcement across both companies rather than treating Chemours alone as the
        sole responsible actor.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '11/2016',
      category: 'green',
      actors: 'North Carolina State University',
      text:       paragraph(`
        Scientists published evidence of legacy and emerging PFAS in the Cape Fear
        River watershed and found mean GenX concentrations of 631 ng/L downstream of a
        PFAS manufacturer. This was the key scientific disclosure showing that
        replacement PFAS were drinking-water contaminants and not removed by
        conventional treatment.
      `),
      sources: [source('ACS', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'CFPUA Board; Independent Reviewers',
      text:       paragraph(`
        CFPUA Board of Directors held a special public meeting and passed two
        unanimous resolutions: (1) Chemours must completely remove GenX from the
        river, and (2) CFPUA may take legal action if not. Independent reviewers were
        appointed to examine CFPUA's communication failures. The review concluded
        communication was appropriate, a conclusion widely criticized by the public
        and press.
      `),
      sources: [source('Port City Daily', 'https://portcitydaily.com/local-news/2017/06/22/cfpua-wraps-review-of-communication-practices-doesnt-talk-to-former-communication-chief-news')],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'Wilmington Residents; Cancer Moms; Mayor Saffo',
      text:       paragraph(`
        Wilmington City Council meeting overflowed with residents. Local mothers whose
        children had cancer, quickly dubbed the cancer moms, showed up demanding
        answers. Mayor Bill Saffo publicly stated he was alarmed after being told by
        Chemours officials the discharge had been going on since 1980. Residents had
        learned about the contamination from the newspaper, not from the government.
      `),
      sources: [source('CBS News', 'https://www.cbsnews.com/news/wilmington-nc-cape-fear-river-water-tainted-genx-dupont-chemours/')],
    }),

    entry({
      date: '06/2017',
      category: 'red',
      actors: 'NC DEQ; NC DHHS',
      text:       paragraph(`
        NC DEQ and DHHS began investigating GenX in the Cape Fear River after public
        reporting and identification of Chemours Fayetteville Works. State action
        began only after scientific/public disclosure, making delay and public
        pressure central to the case.
      `),
      sources: [
        source('NC DEQ', 'https://www.deq.nc.gov/news/key-issues/genx-investigation'),
        source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf'),
      ],
    }),

    entry({
      date: '06/2017',
      category: 'red',
      actors: 'EPA Region 4',
      text:       paragraph(`
        EPA conducted its first on-site TSCA compliance monitoring inspection at
        Fayetteville Works, eight years after the 2009 consent order that required 99%
        capture and control. The inspection was triggered by media attention and state
        agency pressure, not internal EPA monitoring or scheduled compliance review.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '09/2017',
      category: 'red',
      actors: 'NC DEQ; Chemours; Bladen County Superior Court',
      text:       paragraph(`
        NC DEQ sued Chemours and entered a partial consent order requiring Chemours to
        prevent discharge of processed wastewater containing GenX and two other PFAS
        compounds. This was the first hard state enforcement pivot from investigation
        to binding pollution-control obligations.
      `),
      sources: [source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf')],
    }),

    entry({
      date: '11/2017',
      category: 'purple',
      actors: 'NC State (Knappe, Hoppin, et al.); 344 Wilmington Volunteers; NIEHS',
      text:       paragraph(`
        NC State University launched the GenX Exposure Study, collecting blood, urine,
        and tap water samples from 344 New Hanover County residents. Funded by NIEHS
        and designed with community input. Results committed to be returned to
        participants at community meetings first, before broader publication.
      `),
      sources: [source('GenX Study', 'https://genxstudy.ncsu.edu/study-overview')],
    }),

    entry({
      date: '11/2017',
      category: 'purple',
      actors: 'Emily Donovan; Cape Fear River Watch; Community Activists',
      text:       paragraph(`
        Clean Cape Fear co-founded by local mother Emily Donovan and others. Cape Fear
        River Watch joined forces with new activist groups. Demands included making
        Chemours pay for cleanup, federal regulation of PFAS as a class, no more
        voluntary agreements, and full transparency on health effects.
      `),
      sources: [
        source('Action Network', 'https://actionnetwork.org/petitions/sign-our-letter-telling-congress-enough-stop-harmful-spread-of-pfas'),
        source('Coastal Review', 'https://coastalreview.org/2017/08/genx-response-activists-rally-clean-water/'),
      ],
    }),

    entry({
      date: '05/2018',
      category: 'red',
      actors: 'NC DEQ; Cape Fear River Watch',
      text:       paragraph(`
        DEQ amended its complaint after discovering PFAS air emissions, while Cape
        Fear River Watch and SELC pursued citizen-suit strategies under the Clean
        Water Act and TSCA. The problem expanded from river discharge to multiple
        pathways: air, groundwater, surface water, stormwater, seeps, and wells.
      `),
      sources: [source('NC DEQ', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order')],
    }),

    entry({
      date: '2018–2019',
      category: 'red',
      actors: 'NC DEQ; Cape Fear River Watch; Chemours; State Court',
      text:       paragraph(`
        North Carolina DEQ and Cape Fear River Watch negotiated a consent order with
        Chemours, which a state court made enforceable through public notice and
        comment. Required large PFAS emission cuts, an end to unpermitted discharges,
        cleanup of groundwater, alternative drinking water for affected users, and
        extensive testing and reporting. The consent order converts scientific
        uncertainty and public pressure into enforceable obligations.
      `),
      sources: [source('Cape Fear River Watch', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')],
    }),
  ]
});
