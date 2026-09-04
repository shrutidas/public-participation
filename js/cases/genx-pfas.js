import chains from '../chains/genx-pfas.js';
import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 3',
  slug: 'genx-pfas',
  title: 'GenX Contamination in the Cape Fear River',
  overview:   paragraph(`
    This case shows how weak environmental governance allowed harm to continue for
    years. Industrial secrecy, fragmented regulation, and uncertain science delayed
    action, even as companies benefited economically and downstream communities faced
    unequal and involuntary exposure risks. Crucially, people do not need
    definitive proof of harm to act. When credible suspicion exists, especially
    supported by evidence from outside the affected area, communities have a right to
    respond and seek protection.
  `),
  chains,
  entries: [
    entry({
      date: '1951',
      category: 'orange',
      actors: 'DuPont, 3M',
      text:       paragraph(`
        DuPont began using PFOA (perfluorooctanoic acid), a type of PFAS "forever"
        chemical, at Washington Works in Parkersburg, West Virginia to make Teflon
        coatings. The chemical was also known as C8, and DuPont bought it from 3M.
        The plant's C8 waste reached the Ohio River. <strong>No regulatory disclosure required</strong>:
        US environmental laws did not exist until the 1970s, and as late as 1998
        virtually no one outside DuPont and 3M had heard of C8.
      `),
      sources: [
        source('SearchlightNM', 'https://searchlightnm.org/toxic-timeline-a-brief-history-of-pfas'),
        source('Earth Island Journal', 'https://www.earthisland.org/journal/index.php/magazine/entry/teflons_toxic_legacy/'),
      ],
    }),

    entry({
      date: '1961',
      category: 'green',
      actors: 'DuPont Internal Scientists',
      text:       paragraph(`
        DuPont scientists issued <strong>internal warnings</strong> about PFOA health risks. The
        company's own toxicologists flagged concerns about accumulation and organ
        effects. The warnings stayed in confidential memos. DuPont did not share
        them with EPA, workers, or the public.
      `),
      sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')],
    }),

    entry({
      date: '1970s',
      category: 'green',
      actors: 'DuPont, 3M Epidemiology Teams',
      text:       paragraph(`
        DuPont began a testing program in 1978 and by 1980 had found elevated
        levels of PFOA in the blood of Washington Works factory workers. TSCA
        Section 8(e) required the company to report substantial risks, and
        <strong>the company did not report this to EPA</strong>. 3M's own health studies
        of workers reported no adverse effects, a framing both companies used for
        years to deflect concern.
      `),
      sources: [
        source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf'),
        source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health'),
      ],
    }),

    entry({
      date: '1978–1981',
      category: 'orange',
      actors: 'DuPont, 3M',
      text:       paragraph(`
        DuPont reassigned 50 women from the Teflon division but did not tell them why.
        The company's formal testing had confirmed elevated PFOA in workers by 1980.
        An internal memo concluded: '<strong>continued exposure is not tolerable</strong>.'
        Between 1979 and 1981, two of seven children born to female Washington Works
        employees had birth defects. 3M sent DuPont results showing PFOA causes birth
        defects in rats.
      `),
      sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')],
    }),

    entry({
      date: '1980',
      category: 'orange',
      actors: 'DuPont, Fayetteville Works',
      text:       paragraph(`
        DuPont began discharging GenX, a chemical used in a patented manufacturing
        process, from its Fayetteville Works plant in Bladen County, NC into the
        Cape Fear River. The river is the primary drinking-water source for
        downstream communities including Wilmington (approximately 250,000 people).
        <strong>No regulatory requirement mandated disclosure</strong> to the public.
        Discharge continued largely unmonitored for 37 years.
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
        water. The company marked the results 'personal and confidential' and never
        reported them to EPA. DuPont also found that PFOA crosses the placenta into
        cord blood. This was <strong>active concealment</strong> of known drinking-water
        contamination from regulators and the public.
      `),
      sources: [
        source('EWG', 'https://www.ewg.org/news-insights/news-release/epa-finds-dupont-guilty-withholding-teflon-blood-and-water-pollution'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '1998',
      category: 'green',
      actors: '3M, EPA Office of Toxic Substances',
      text:       paragraph(`
        3M alerted EPA that PFOS builds up in blood and sent rat studies showing
        liver damage from PFAS exposure. This was the <strong>first formal notice EPA
        received</strong> of the buildup problem. 3M's letter described PFOS at 9 to 56
        parts per billion in blood bank samples from people with no known
        workplace exposure. That meant PFAS were already in the general
        population's blood. The letter triggered EPA's first sustained look at
        PFAS in people's blood.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/1998_3M-Alerts-EPA.pdf')],
    }),

    entry({
      date: '1998',
      category: 'purple',
      actors: 'Wilbur Tennant, Rob Bilott, DuPont',
      text:       paragraph(`
        Wilbur Tennant, a West Virginia farmer, contacted attorney Rob Bilott after
        he observed cattle deaths, creek contamination, and unusual changes near
        DuPont's Dry Run Landfill. Tennant's documentation, including videos and
        animal illness records, became the <strong>trigger for federal litigation</strong>.
      `),
      sources: [
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
        source('NYT', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
      ],
    }),

    entry({
      date: '1999',
      category: 'orange',
      actors: 'EPA, 3M',
      text:       paragraph(`
        EPA began an audit of 3M studies in response to 3M's 1998 disclosures and
        negotiated a formal <strong>TSCA Compliance Audit Agreement</strong>. EPA eventually
        collected over 700 studies from 3M under this process.
      `),
      sources: [source('EWG EPA Timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf')],
    }),

    entry({
      date: '2000',
      category: 'orange',
      actors: 'Rob Bilott, Federal Court, DuPont, EPA and DOJ as Recipients',
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
      actors: 'Exposed Residents, Bilott Legal Team, DuPont, Wood County Circuit Court',
      text:       paragraph(`
        Roughly 70,000 residents in six Ohio and West Virginia water districts sued
        DuPont over PFOA-contaminated drinking water. Plaintiffs led by Joseph K.
        Leach filed Leach v. Du Pont as a <strong>class-action lawsuit</strong> in West Virginia.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461'),
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
      ],
    }),

    entry({
      date: '2004',
      category: 'purple',
      actors: 'Exposed Residents, Bilott Legal Team, DuPont, Wood County Circuit Court',
      text:       paragraph(`
        The 2004 settlement in Leach v. Du Pont required DuPont to fund the C8
        Science Panel. Three independent, <strong>court-supervised epidemiologists</strong>,
        paid by DuPont but working independently, had the task of determining
        whether PFOA actually caused disease in the exposed population.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461'),
        source('Taft Law', 'https://www.taftlaw.com/services/case-studies/taft-is-a-global-leader-in-pfas-forever-chemicals-litigation-and-advisory-work'),
      ],
    }),

    entry({
      date: '12/2005',
      category: 'orange',
      actors: 'EPA, DuPont',
      text:       paragraph(`
        EPA fined DuPont $10.25 million, the largest civil administrative penalty in
        EPA history at the time, for <strong>failing to report substantial risk</strong> of injury to
        human health from PFOA, with violations going back to the 1980s. EPA's own
        Science Advisory Board issued a draft finding that PFOA is a 'likely human
        carcinogen.' The fine resolved the violations but set no enforceable
        limits on continued production, use, or release of PFOA.
      `),
      sources: [source('EWG EPA Timeline', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')],
    }),

    entry({
      date: '08/2006',
      category: 'orange',
      actors: 'C8 Health Project, Class Members, Independent Administrators',
      text:       paragraph(`
        A private firm, Brookmar Inc., ran the C8 Health Project under court
        supervision. It set up clinics around the mid-Ohio Valley between August
        2005 and August 2006 to draw blood and collect health questionnaires from
        about 69,000 to 70,000 exposed residents. The project then transferred the
        dataset to West Virginia University as a <strong>long-term research resource</strong>.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2799461/')],
    }),

    entry({
      date: '2006',
      category: 'orange',
      actors: 'EPA, DuPont, 3M/Dyneon, Other PFAS Companies',
      text:       paragraph(`
        EPA's Science Advisory Board publicly reviewed a draft PFOA risk assessment.
        In a report released April 2006, it recommended classifying PFOA, the
        chemical used in Teflon pans, as "<strong>likely to be carcinogenic to humans</strong>,"
        a conclusion the press covered widely at the time. This was the earliest
        public acknowledgement.
      `),
      sources: [source('EPA', 'https://nepis.epa.gov/Exe/ZyNET.exe/901S0J00.TXT?ZyActionD=ZyDocument&Client=EPA&Index=2006+Thru+2010&Docs=&Query=&Time=&EndTime=&SearchMethod=1&TocRestrict=n&Toc=&TocEntry=&QField=&QFieldYear=&QFieldMonth=&QFieldDay=&IntQFieldOp=0&ExtQFieldOp=0&XmlQuery=&File=D%3A%5Czyfiles%5CIndex%20Data%5C06thru10%5CTxt%5C00000001%5C901S0J00.txt&User=ANONYMOUS&Password=anonymous&SortMethod=h%7C-&MaximumDocuments=1&FuzzyDegree=0&ImageQuality=r75g8/r75g8/x150y150g16/i425&Display=hpfr&DefSeekPage=x&SearchBack=ZyActionL&Back=ZyActionS&BackDesc=Results%20page&MaximumPages=1&ZyEntry=1&SeekPage=x&ZyPURL')],
    }),

    entry({
      date: '2009',
      category: 'red',
      actors: 'EPA Office of Chemical Safety and Pollution Prevention, DuPont',
      text:       paragraph(`
        EPA entered a TSCA Section 5(e) consent order with DuPont for GenX-related
        substances. The order required 99 percent capture, destruction, recycling,
        or control of effluent and air emissions. EPA formally recognized
        <strong>insufficient information and potential unreasonable risk</strong>, but it
        allowed manufacture under negotiated controls. It did not ban the chemical
        or require full premarket proof of safety.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '2012',
      category: 'green',
      actors: 'C8 Science Panel, Wood County Circuit Court, Exposed Class',
      text:       paragraph(`
        The C8 Science Panel came out of the Leach v. Du Pont settlement as an
        independent scientific body that analyzed prior datasets and issued causal
        conclusions. The court appointed three academic epidemiologists (from the
        University of London, Brown University, and Emory), paid by DuPont, to use
        the C8 Health Project data and other studies. Their task was to decide
        whether PFOA exposure had <strong>probable links to specific diseases and cancers
        in that community</strong>, including kidney cancer, testicular cancer,
        ulcerative colitis, thyroid disease, high cholesterol, and
        pregnancy-induced hypertension.
      `),
      sources: [
        source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3855507'),
        source('C8 Science Panel', 'https://www.c8sciencepanel.org/'),
      ],
    }),

    entry({
      date: '08/2012',
      category: 'green',
      actors: 'EPA National Exposure Research Laboratory (Strynar et al.)',
      text:       paragraph(`
        EPA research scientists collected Cape Fear River water samples in summer
        2012 and identified 12 novel fluorinated compounds, including GenX,
        downstream of the Fayetteville Works plant. The findings appeared in a
        2015 journal paper and <strong>stayed inside agencies and journals</strong>. No one
        notified downstream utilities or the public.
      `),
      sources: [
        source('Strynar et al. 2015, ES&T', 'https://pubs.acs.org/doi/10.1021/acs.est.5b01215'),
        source('Strynar et al. 2015 (open copy, NC State CHHE)', 'https://chhe.research.ncsu.edu/wordpress/wp-content/uploads/2018/05/Ethers_Strynar_EST2015.pdf'),
      ],
    }),

    entry({
      date: '2015',
      category: 'orange',
      actors: 'DuPont, Chemours',
      text:       paragraph(`
        DuPont spun off its performance-chemicals business into Chemours and
        transferred the relevant rights and operations to the new company. This
        made it harder for regulators to <strong>coordinate EPA TSCA consent orders</strong>.
        Oversight and remediation now required aligning obligations, data, and
        enforcement across both companies; Chemours alone was no longer the sole
        responsible actor.
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
        PFAS manufacturer. This was the <strong>key scientific disclosure</strong>. It showed
        that replacement PFAS were drinking-water contaminants and that
        conventional treatment did not remove them.
      `),
      sources: [source('ACS', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'Vaughn Hagerty, Wilmington StarNews',
      text:       paragraph(`
        The Wilmington StarNews published <strong>"Toxin taints CFPUA drinking water"</strong> on
        June 7, 2017. The story reported GenX discharge affecting drinking water
        for roughly 250,000 people. The reporter found the story by browsing EPA's
        public UCMR3 monitoring database and reaching the Sun et al. paper. One
        reporter performed the notification function that no statute assigned to
        anyone.
      `),
      sources: [
        source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/'),
        source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/'),
      ],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'CFPUA Board, Independent Reviewers',
      text:       paragraph(`
        The Cape Fear Public Utility Authority (CFPUA) Board of Directors held a
        special meeting on June 16, 2017 and passed two resolutions. The first
        asked Chemours to cease all discharges containing fluorochemical compounds
        until DHHS and EPA determined what levels were safe. The second authorized
        CFPUA's independent environmental counsel to take whatever actions it
        deemed necessary. The board chairman also called for an internal review of
        the utility's <strong>communication</strong> on GenX, led by the board's
        co-chairwoman and a former board attorney. The review concluded that staff
        had acted appropriately. The reviewers did not interview the utility's
        former communications chief.
      `),
      sources: [
        source('Port City Daily', 'https://portcitydaily.com/local-news/2017/06/17/news-cfpua-board-calls-for-chemours-to-stop-dumping-genx-into-cape-fear-river/'),
        source('Port City Daily', 'https://portcitydaily.com/local-news/2017/06/22/cfpua-wraps-review-of-communication-practices-doesnt-talk-to-former-communication-chief-news'),
      ],
    }),

    entry({
      date: '06/2017',
      category: 'purple',
      actors: 'Wilmington Residents, Cancer Moms, Mayor Saffo',
      text:       paragraph(`
        Residents overflowed the Wilmington City Council meeting. Local mothers whose
        children had cancer, quickly dubbed the cancer moms, showed up demanding
        answers. Mayor Bill Saffo said publicly he was alarmed after Chemours
        officials told him the discharge had been going on since 1980. Residents had
        <strong>learned about the contamination from the newspaper, not from the government</strong>.
      `),
      sources: [source('CBS News', 'https://www.cbsnews.com/news/wilmington-nc-cape-fear-river-water-tainted-genx-dupont-chemours/')],
    }),

    entry({
      date: '06/2017',
      category: 'orange',
      actors: 'NC DEQ, NC DHHS',
      text:       paragraph(`
        The North Carolina Department of Environmental Quality (NC DEQ) and the
        Department of Health and Human Services (DHHS) began investigating GenX in
        the Cape Fear River after public reporting identified Chemours Fayetteville
        Works as the source. <strong>State action began only after public disclosure</strong>,
        which made public pressure central to the case.
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
        capture and control. <strong>Media attention and state agency pressure triggered
        the inspection</strong>, not internal EPA monitoring or scheduled compliance review.
      `),
      sources: [source('EPA OIG', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')],
    }),

    entry({
      date: '09/2017',
      category: 'red',
      actors: 'NC DEQ, Chemours, Bladen County Superior Court',
      text:       paragraph(`
        NC DEQ sued Chemours and entered a partial consent order. The order required
        Chemours to prevent discharge of processed wastewater containing GenX (named
        for the patented manufacturing process) and two other PFAS compounds. This
        was the <strong>first state enforcement</strong> that imposed enforceable
        pollution-control obligations.
      `),
      sources: [source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf')],
    }),

    entry({
      date: '11/2017',
      category: 'purple',
      actors: 'NC State (Knappe, Hoppin, et al.), 344 Wilmington Volunteers, NIEHS',
      text:       paragraph(`
        NC State University launched the GenX Exposure Study in November 2017 and
        collected blood, urine, and tap water samples from 344 New Hanover County
        residents. NIEHS funded the study, and researchers ran it with
        <strong>community partners</strong>, Cape Fear River Watch and the New Hanover
        County Health Department. The study committed to share all results with
        both the community as a whole and each individual participant.
      `),
      sources: [
        source('GenX Study', 'https://genxstudy.ncsu.edu/study-overview'),
        source('GenX Study timeline', 'https://genxstudy.ncsu.edu/study-timeline/'),
        source('NC State News', 'https://news.ncsu.edu/2017/11/genx-study/'),
      ],
    }),

    entry({
      date: '11/2017',
      category: 'purple',
      actors: 'Emily Donovan, Kemp Burdette, Community Activists',
      text:       paragraph(`
        Advocacy groups formed across the region. Local mother Emily Donovan
        formed Clean Cape Fear with riverkeeper Kemp Burdette and six others. A
        Facebook group, "Stop GenX in Our Water," had more than 9,000 members by
        August 2017. Cape Fear River Watch, the Brunswick Environmental Action
        Team, and the NAACP's Environmental Climate Justice program also organized
        around GenX. Clean Cape Fear later petitioned Congress to <strong>regulate
        PFAS as a class</strong> and to designate PFAS as hazardous substances under
        CERCLA so that manufacturers pay for cleanup.
      `),
      sources: [
        source('Action Network', 'https://actionnetwork.org/petitions/sign-our-letter-telling-congress-enough-stop-harmful-spread-of-pfas'),
        source('Coastal Review', 'https://coastalreview.org/2017/08/genx-response-activists-rally-clean-water/'),
      ],
    }),

    entry({
      date: '05/2018',
      category: 'red',
      actors: 'NC DEQ, Cape Fear River Watch',
      text:       paragraph(`
        DEQ amended its complaint in April 2018 after it discovered that Chemours
        also released PFAS through air emissions. On May 7, 2018, SELC sent
        Chemours a notice of intent to sue on behalf of Cape Fear River Watch, as
        Cape Fear River Watch and SELC pursued <strong>citizen-suit strategies under
        the Clean Water Act and TSCA.</strong> The problem expanded from river discharge
        to air, surface water, groundwater, and private drinking water wells.
      `),
      sources: [
        source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf'),
        source('NC DEQ', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order'),
      ],
    }),

    entry({
      date: '2018–2019',
      category: 'red',
      actors: 'NC DEQ, Cape Fear River Watch, Chemours, State Court',
      text:       paragraph(`
        North Carolina DEQ and Cape Fear River Watch negotiated a consent order with
        Chemours, which a <strong>state court made enforceable through public notice and
        comment.</strong> The order required large PFAS emission cuts, an end to
        unpermitted discharges, groundwater cleanup, alternative drinking water for
        affected users, and extensive testing and reporting.
      `),
      sources: [source('Cape Fear River Watch', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')],
    }),
  ]
});
