import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 4',
  title: 'GenX PFAS Contamination in the Cape Fear River',
  overview:   paragraph(`
    This case shows how <strong>weak environmental governance</strong> allowed PFAS chemicals to cause harm for
    years. <strong>Industrial secrecy</strong>, fragmented regulation, and uncertain science delayed
    action, even as companies benefited economically and downstream communities faced
    unequal and involuntary exposure risks. Crucially, people do not need definitive
    proof of harm to act. When credible suspicion exists, especially supported by
    evidence from outside the affected area, communities have a <strong>right to respond and
    seek protection</strong>.
  `),
  entries: [
    entry({
      date: '1951',
      category: 'orange',
      actors: 'DuPont; 3M',
      text:       paragraph(`
        DuPont began using  PFOA (perfluorooctanoic acid), a type of PFAS "forever" chemical, at Washington Works, West Virginia to manufacture
        Teflon coatings. This chemical was also known as C8. 3M is the chief supplier. Discharge into the Ohio River
        begins. <strong>No regulatory disclosure required</strong>. The public and downstream
        communities have no knowledge of the chemicals being used or released.
      `),
      sources: [source('SearchlightNM', 'https://searchlightnm.org/toxic-timeline-a-brief-history-of-pfas')],
    }),

    entry({
      date: '1961',
      category: 'green',
      actors: 'DuPont Internal Scientists',
      text:       paragraph(`
        DuPont scientists issued <strong>internal warnings</strong> about PFOA health risks. The
        company's own toxicologists flagged concerns about accumulation and organ
        effects. Warnings documented in confidential memos, <strong>not shared with EPA,
        workers, or the public</strong>.
      `),
      sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')],
    }),

    entry({
      date: '1970s',
      category: 'green',
      actors: 'DuPont; 3M Epidemiology Teams',
      text:       paragraph(`
        DuPont discovered high concentrations of PFOA in the blood of Washington Works
        factory workers. The company <strong>did not report this to EPA</strong>, as would have been
        required under TSCA Section 8(e) substantial risk reporting. 3M's own
        epidemiological studies of workers indicated no adverse effects at ppb levels,
        framing that both companies would use for years to <strong>deflect concern</strong>.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '1978–1981',
      category: 'orange',
      actors: 'DuPont; 3M',
      text:       paragraph(`
        DuPont reassigned 50 women from the Teflon division but did not tell them why.
        This was based on the results of DuPont's formal testing which confirmed elevated PFOA 
        in workers by 1980. An internal memo concludes: '<strong>continued exposure is not tolerable</strong>.'
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
        DuPont began discharging GenX, a chemical substance used for patented manufacturing process, 
        from its Fayetteville Works plant in Bladen County, NC into the Cape Fear River, 
        the primary drinking-water source for downstream communities including Wilmington
        (approximately 250,000 people). <strong>No regulatory requirement mandated disclosure</strong>
        to the public. Discharge continued largely unmonitored for 37 years.
      `),
      sources: [source('CBS News', 'https://www.cbsnews.com/news/wilmington-nc-cape-fear-river-water-tainted-genx-dupont-chemours/')],
    }),

    entry({
      date: '1981',
      category: 'orange',
      actors: 'DuPont',
      text:       paragraph(`
        DuPont tested tap water in communities on both sides of the Ohio River from
        Washington Works and found PFOA contamination, including in public drinking
        water. This was marked 'personal and confidential' and never reported to EPA.
        DuPont also discovered PFOA crosses the placenta in cord blood. <strong>Active
        concealment</strong> of known drinking-water contamination from regulators and the
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
        the <strong>bioaccumulation problem</strong>. 3M's letter described detecting PFOS at 9 to
        56 ppb in blood bank samples from people with no known occupational exposure,
        meaning PFAS were already in the general population's blood.
        This triggered EPA's first sustained look at PFAS in people's blood.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/1998_3M-Alerts-EPA.pdf')],
    }),

    entry({
      date: '1998',
      category: 'purple',
      actors: 'Wilbur Tennant; Rob Bilott; DuPont',
      text:       paragraph(`
        Wilbur Tennant, a West Virginia farmer, contacted attorney Rob Bilott after
        observing cattle deaths, creek contamination, and unusual changes near
        DuPont's Dry Run Landfill. Tennant's documentation, including videos and
        animal illness records, became the <strong>trigger for federal litigation</strong>. Local
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
      category: 'orange',
      actors: 'EPA; 3M',
      text:       paragraph(`
        EPA began an audit of 3M studies in response to 3M's 1998 disclosures,
        negotiating a formal <strong>TSCA Compliance Audit Agreement</strong>. EPA would eventually
        collect over 700 studies from 3M under this process.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '2000',
      category: 'orange',
      actors: 'Rob Bilott; Federal Court; DuPont; EPA and DOJ as Recipients',
      text:       paragraph(`
        Court-ordered discovery in the Tennant case produced internal DuPont records
        about PFOA. Bilott warned EPA, DOJ, and other officials about PFAS dangers.
        <strong>Litigation created a public-record pathway</strong> that ordinary regulation had not
        produced.
      `),
      sources: [
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '2001',
      category: 'purple',
      actors: 'Exposed Residents; Bilott Legal Team; DuPont; Wood County Circuit Court',
      text:       paragraph(`
           Roughly 70,000 residents in six Ohio and West Virginia water districts sued DuPont over PFOA-contaminated drinking water.
           Leach v. Du Pont filed as a <strong>class-action lawsuit</strong> by plaintiffs (led by Joseph K. Leach) in West Virginia.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461'),
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
      ],
    }),

    entry({
      date: '2004',
      category: 'purple',
      actors: 'Exposed Residents; Bilott Legal Team; DuPont; Wood County Circuit Court',
      text:       paragraph(`
        The 2004 settlement for Leach v. Du Pont required DuPont to fund the C8 Science Panel. This required 
        three independent, <strong>court-supervised epidemiologists</strong>, paid for by DuPont but operating independently,
        tasked with determining whether PFOA actually caused disease in the exposed population.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461'),
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
      ],
    }),

    entry({
      date: '12/2005',
      category: 'orange',
      actors: 'EPA; DuPont',
      text:       paragraph(`
        EPA fined DuPont $10.25 million, the largest civil administrative penalty in
        EPA history at the time, for <strong>failing to report substantial risk</strong> of injury to
        human health from PFOA, with violations going back to the 1980s. EPA's own
        Science Advisory Board issued a draft finding that PFOA is a 'likely human
        carcinogen.' The fine resolved the violations but imposed <strong>no enforceable
        limits on continued production</strong>, use, or release of PFOA.
      `),
      sources: [source('EWG EPA Timeline', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')],
    }),

    entry({
      date: '08/2006',
      category: 'orange',
      actors: 'C8 Health Project; Class Members; Independent Administrators',
      text:       paragraph(`
        The C8 Health Project was run by a private firm called Brookmar Inc., 
        with data collected at community sites across the mid-Ohio Valley between 
        August 2005 and August 2006. Brookmar Inc. (under court supervision) set up clinics 
        around the mid‑Ohio Valley in 2005–2006 to draw blood and collect health questionnaires 
        from ~69,000–70,000 exposed residents. The dataset was then transferred to West Virginia University 
        as a long‑term research resource.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461/')],
    }),

    entry({
      date: '2006',
      category: 'orange',
      actors: 'EPA; DuPont; 3M/Dyneon; Other PFAS Companies',
      text:       paragraph(`
         The EPA's Science Advisory Board publicly reviewed a draft PFOA risk assessment and, 
         in a report released April 2006, recommended classifying PFOA in teflon pans as 
         "<strong>likely to be carcinogenic to humans</strong>," 
         a conclusion widely covered in the press at the time.
         This is the <strong>earliest public acknowledgement</strong>.
      `),
      sources: [source('EPA', 'https://nepis.epa.gov/Exe/ZyNET.exe/901S0J00.TXT?ZyActionD=ZyDocument&Client=EPA&Index=2006+Thru+2010&Docs=&Query=&Time=&EndTime=&SearchMethod=1&TocRestrict=n&Toc=&TocEntry=&QField=&QFieldYear=&QFieldMonth=&QFieldDay=&IntQFieldOp=0&ExtQFieldOp=0&XmlQuery=&File=D%3A%5Czyfiles%5CIndex%20Data%5C06thru10%5CTxt%5C00000001%5C901S0J00.txt&User=ANONYMOUS&Password=anonymous&SortMethod=h%7C-&MaximumDocuments=1&FuzzyDegree=0&ImageQuality=r75g8/r75g8/x150y150g16/i425&Display=hpfr&DefSeekPage=x&SearchBack=ZyActionL&Back=ZyActionS&BackDesc=Results%20page&MaximumPages=1&ZyEntry=1&SeekPage=x&ZyPURL')],
    }),

    entry({
      date: '2009',
      category: 'red',
      actors: 'EPA Office of Chemical Safety and Pollution Prevention; DuPont',
      text:       paragraph(`
        EPA entered a TSCA Section 5(e) <strong>consent order</strong> with DuPont for GenX-related
        substances, requiring 99 percent capture, destruction, recycling, or control
        of effluent and air emissions. EPA formally recognized <strong>insufficient
        information and potential unreasonable risk</strong>, but allowed manufacture under
        negotiated controls rather than banning or requiring full premarket proof of
        safety.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '2012',
      category: 'green',
      actors: 'C8 Science Panel; Wood County Circuit Court; Exposed Class',
      text:       paragraph(`
        Coming out of the Leach v. Dupont settlement, The C8 Science Panel was an indpendent scientific body that analyzed prior datasets and issued causal conclusions. 
        Three academic epidemiologists (from the University of London, Brown University, and Emory) were 
        appointed by the court and paid by DuPont to use the C8 Health Project data (plus other studies) 
        to decide whether PFOA exposure had a "<strong>probable link</strong>" to specific diseases in that community.
        They found <strong>probable links</strong> between PFOA exposure and kidney
        cancer, testicular cancer, ulcerative colitis, thyroid disease,
        hypercholesterolemia, and pregnancy-induced hypertension.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3855507'),
        source('C8 Science Panel', 'https://www.c8sciencepanel.org/'),
      ],
    }),

    entry({
      date: '2015',
      category: 'orange',
      actors: 'DuPont; Chemours',
      text:       paragraph(`
        DuPont spun off its performance-chemicals business into Chemours and transferred 
        the relevant rights and operations to the new company. This made it more difficult for 
        regulators to <strong>coordinate EPA TSCA consent orders</strong>, because effective oversight and 
        remediation now required aligning obligations, data, and enforcement across both companies 
        rather than treating Chemours alone as the sole responsible actor.
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
        PFAS manufacturer. This was the <strong>key scientific disclosure</strong> showing that
        replacement PFAS were drinking-water contaminants and <strong>not removed by
        conventional treatment</strong>.
      `),
      sources: [source('ACS', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'CFPUA Board; Independent Reviewers',
      text:       paragraph(`
        Cape Fear Public Utility Authority (CFPUA) Board of Directors held a special public meeting and passed two
        unanimous resolutions: (1) Chemours must completely remove GenX from the
        river, and (2) CFPUA may take legal action if not. Independent reviewers were
        appointed to examine CFPUA's <strong>communication failures</strong>. The review concluded
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
        <strong>learned about the contamination from the newspaper, not from the government</strong>.
      `),
      sources: [source('CBS News', 'https://www.cbsnews.com/news/wilmington-nc-cape-fear-river-water-tainted-genx-dupont-chemours/')],
    }),

    entry({
      date: '06/2017',
      category: 'orange',
      actors: 'NC DEQ; NC DHHS',
      text:       paragraph(`
        NC DEQ and DHHS began investigating GenX in the Cape Fear River after public
        reporting and identification of Chemours Fayetteville Works. <strong>State action
        began only after scientific/public disclosure</strong>, making delay and public
        pressure central to the case.
      `),
      sources: [
        source('NC DEQ', 'https://www.deq.nc.gov/news/key-issues/genx-investigation'),
        source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf'),
      ],
    }),

    entry({
      date: '06/2017',
      category: 'orange',
      actors: 'EPA Region 4',
      text:       paragraph(`
        EPA conducted its first on-site TSCA compliance monitoring inspection at
        Fayetteville Works, eight years after the 2009 consent order that required 99%
        capture and control. The inspection was <strong>triggered by media attention and state
        agency pressure</strong>, not internal EPA monitoring or scheduled compliance review.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '09/2017',
      category: 'red',
      actors: 'NC DEQ; Chemours; Bladen County Superior Court',
      text:       paragraph(`
        NC DEQ sued Chemours and entered a partial consent order requiring Chemours to
        prevent discharge of processed wastewater containing GenX (named for the patented manufacturing process) and two other PFAS
        compounds. This was the <strong>first state enforcement</strong> binding pollution-control obligations.
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
        and designed with <strong>community input</strong>. Results committed to be returned to
        participants at community meetings first, before broader publication.
      `),
      sources: [source('GenX Study', 'https://genxstudy.ncsu.edu/study-overview')],
    }),

    entry({
      date: '11/2017',
      category: 'purple',
      actors: 'Emily Donovan; Kemp Burdette; Community Activists',
      text:       paragraph(`
         Advocacy groups formed across the state. Local mother Emily Donovan co-founded Clean Cape Fear with riverkeeper Kemp Burdette and others. 
         Another Facebook group, "Stop GenX in Our Water," grew to over 9,000 members within weeks. Cape Fear River Watch, the Brunswick Environmental Action Team, 
         and the New Hanover County NAACP's Environmental Climate Justice chapter collectively mobilized thousands of North Carolinians. The groups demanded 
         four things: Chemours must pay for cleanup, PFAS must be regulated as a class under federal law, 
         the state must replace voluntary agreements with <strong>legally binding limits</strong>, and residents must receive <strong>full transparency on health effects</strong> .
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
        Fear River Watch and SELC pursued <strong>citizen-suit strategies</strong> under the Clean
        Water Act and TSCA. The problem expanded from river discharge to <strong>multiple
        pathways</strong>: air, groundwater, surface water, stormwater, seeps, and wells.
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
        extensive testing and reporting. The <strong>consent order converts scientific
        uncertainty and public pressure into enforceable obligations</strong>.
      `),
      sources: [source('Cape Fear River Watch', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')],
    }),
  ]
});
