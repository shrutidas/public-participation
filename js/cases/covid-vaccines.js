import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 3',
  title: 'COVID-19 Vaccine Mandates',
  overview:   paragraph(`
    This case is best framed as a conflict between scientific justification and
    democratic authorization. By September 2021, the evidence strongly supported
    vaccination as a means of reducing severe disease, hospitalization, and death. The
    policy problem was whether federal institutions had legitimate authority and
    sufficient public trust to convert that scientific justification into binding
    mandates. The bounded case runs from the federal mandate in September 2021 through
    May 2023, marking the official end of the federal public health emergency.
    COVID-19 vaccine mandates show that scientific consensus can justify a policy aim
    without settling the legitimacy of coercive policy instruments. Vaccination was
    well-supported scientifically, especially for preventing severe disease, but
    mandates required a separate showing of institutional authority, procedural
    accountability, proportionality, and public trust. The federal case therefore
    reveals a core problem for science-based governance: experts can establish what is
    likely to reduce harm, but democratic institutions must still authorize who may
    compel action, under what conditions, and with what accountability.
  `),
  entries: [

    entry({
      date: '07/2020',
      category: 'blue',
      actors: 'Gallup',
      text:       paragraph(`
        When Gallup first asked in July 2020 whether Americans would take an FDA-approved COVID vaccine at no cost, 
        only 50% said yes, roughly the same rate as flu vaccine uptake. The <strong>partisan gap</strong> was already present. Democrats and Republicans were cautious, but for different reasons.
        Democrats worried about political interference in FDA; Republicans worried about government overreach.
      `),
      sources: [source('Gallup', 'https://news.gallup.com/poll/317018/one-three-americans-not-covid-vaccine.aspx')],
    }),


    entry({
      date: '12/2020',
      category: 'red',
      actors: 'FDA, CDC, Advisory Committee on Immunization Practices',
      text:       paragraph(`
        FDA issued an <strong>emergency use authorization</strong> for the Pfizer-BioNTech vaccine, and
        ACIP voted 11 to 0 to recommend it for persons aged 16 and older. Evidence for
        symptomatic disease prevention was high-certainty, but evidence for
        hospitalization and death prevention was limited because severe events were
        rare in the trial.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/69/wr/mm6950e2.htm')],
    }),

    entry({
      date: '08/2021',
      category: 'red',
      actors: 'CDC, Massachusetts Department of Public Health, Local Public Health Investigators',
      text:       paragraph(`
        CDC updated masking guidance after Delta breakthrough evidence, including the
        Barnstable County outbreak report showing 469 cases, 74% of the people infected 
        in the outbreak were fully vaccinated. Vaccinated and unvaccinated people appeared 
        to carry similar amounts of the virus. Vaccines remained central for preventing severe illness, but
        Delta made transmission control less straightforward and weakened the
        public-facing claim that vaccination alone would stop spread.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7031e2.htm')],
    }),

    entry({
      date: '08/2021',
      category: 'red',
      actors: 'FDA, Pfizer',
      text:       paragraph(`
        FDA gave <strong>full approval to Pfizer-BioNTech's vaccine</strong>, marketed as Comirnaty,
        for people aged 16 and older. The agency continued to monitor rare cases of heart inflammation
        (myocarditis and pericarditis) and required additional studies to track the vaccine’s long-term safety.
      `),
      sources: [source('FDA', 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-covid-19-vaccine')],
    }),

    entry({
      date: '08/2021',
      category: 'green',
      actors: 'CDC, HEROES-RECOVER Network Investigators',
      text:       paragraph(`
        CDC reported that mRNA vaccine effectiveness against infection among frontline
        workers declined from 91% before Delta predominance to 66% during Delta
        predominance, with uncertainty due to limited Delta-period observations.
        Vaccination still reduced infection risk, but Delta and possible waning made
        infection and onward transmission less certain than early 2021 messaging
        implied.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7034e4.htm')],
    }),

    entry({
      date: '09/2021',
      category: 'blue',
      actors: 'Gallup, US Adults Surveyed',
      text:       paragraph(`
        Before Biden announced his September 9 mandates, Gallup polling found <strong>majorities
        of Americans already supported vaccination requirements</strong> in various work and business settings.
      `),
      sources: [source('Gallup', 'https://news.gallup.com/poll/354506/update-american-public-opinion-vaccination-requirements.aspx')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'President Biden, White House, Department of Labor, OSHA, HHS, CMS',
      text:       paragraph(`
        President Biden announced the <strong>federal mandate</strong>: OSHA would require employers
        with 100 or more employees to ensure vaccination or weekly testing. Centers for Medicare & Medicaid Services would
        require vaccination for many healthcare workers. Federal employees and federal
        contractors would be required to vaccinate. Head Start and federal school
        personnel were included. The administration shifted from persuasion and
        incentives toward <strong>compulsory rules</strong> affecting roughly 100 million Americans.
      `),
      sources: [source('Miller Center', 'https://millercenter.org/the-presidency/presidential-speeches/september-9-2021-remarks-fighting-covid-19-pandemic')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'President Biden, Executive Branch Agencies, Safer Federal Workforce Task Force',
      text:       paragraph(`
        Executive Order 14043 required executive agencies to implement a COVID-19
        vaccination program for federal employees, with exceptions only as required by
        law.
      `),
      sources: [source('GovInfo', 'https://www.govinfo.gov/content/pkg/DCPD-202100733/pdf/DCPD-202100733.pdf')],
    }),

    entry({
      date: '09/2021',
      category: 'blue',
      actors: 'US voters',
      text:       paragraph(`
        Axios found 60% of voters backed the mandate, including 80% of Democrats but only 30% of Republicans. 
        Monmouth polling found 63% supported requiring healthcare workers to be vaccinated. In an NBC poll, 88% of Democrats 
        said they had been vaccinated vs. 46% of Trump-supporting Republicans. Governors of multiple Republican-led states 
        immediately vowed to fight the mandates in court, and 72% of unvaccinated workers said they would quit rather than comply.
      `),
      sources: [source('Axios', 'https://www.axios.com/2021/09/14/axios-ipsos-poll-covid-vaccine-mandates-biden')],
    }),

    entry({
      date: '10/2021',
      category: 'blue',
      actors: 'KFF, US Adults and Workers Surveyed',
      text:       paragraph(`
        KFF polling showed the public-opinion split. 25% of workers reported an
        employer vaccine requirement, 50% did not want their employer to require
        vaccination, 90% of unvaccinated workers opposed employer mandates, and
        support for the large-employer federal vaccine-or-test rule varied sharply by
        race and party. The science supported vaccination, but the policy instrument
        was entering a <strong>polarized environmen in which public authorization was uneven.</strong>
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-october-2021')],
    }),

    entry({
      date: '10/2021',
      category: 'purple',
      actors: 'NYPD Police Union, Chicago and Washington Police Unions, National Retail Federation, American Trucking Association',
      text:       paragraph(`
        The NYPD's largest police union filed suit to block New York City's November 1
        municipal mandate, arguing officers hadn't been given enough time to seek
        religious exemptions. In Chicago and Washington state, similar standoffs emerged
        between police unions and city mayors. Simultaneously, the National Retail
        Federation and American Trucking Association lobbied Biden to delay the
        private-employer mandate past the holiday season, warning that worker walkouts
        would worsen already severe supply chain disruptions.
      `),
      sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')],
    }),

    entry({
      date: '11/2021',
      category: 'red',
      actors: 'OSHA, Department of Labor, Large Employers, Covered Workers',
      text:       paragraph(`
        Occupational Safety and Health Administration (OSHA) published its COVID-19 vaccination and testing Emergency Temporary
        Standard for employers with 100 or more employees. The Federal Register page
        records 122,485 comments. Here, OSHA used <strong>emergency authority</strong>.
      `),
      sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')],
    }),

    entry({
      date: '11/2021',
      category: 'orange',
      actors: 'Workers, Federal Courts, Supreme Court',
      text:       paragraph(`
        Thousands of <strong>workers file for religious exemptions</strong> simultaneously across the
        country, triggering a waves of litigation. Courts are forced to interpret whether
        Jacobson v. Massachusetts (1905 smallpox precedent) applies, whether
        Title VII religious accommodation is required, and whether EUA status
        changes the analysis. The Supreme Court refuses in November 2021 to block Maine's
        healthcare worker mandate, which uniquely offered no religious exemption, by a
        6–3 vote in Does v. Mills.
      `),
      sources: [
        source('SSRGA', 'https://ssrga.com/bresky_blog/recent-litigation-concerning-covid-19-vaccination-mandates-and-religious-exemptions/'),
        source('Jacobson v. Massachusetts', 'https://supreme.justia.com/cases/federal/us/197/11/'),
      ],
    }),

    entry({
      date: '12/2021',
      category: 'red',
      actors: 'US Senate',
      text:       paragraph(`
        A majority of the US Senate voted to disapprove the OSHA regulation. Opponents could argue 
        that Congress had not only failed to enact a
        comparable mandate, but one chamber had affirmatively rejected the agency rule.
      `),
      sources: [source('SCOTUS Opinion', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'red',
      actors: 'Supreme Court, OSHA',
      text:       paragraph(`
        The Supreme Court blocked OSHA's emergency rule requiring large employers to
        enforce COVID-19 vaccination or testing requirements. The Court treated
        COVID-19 as a universal risk and held that a rule affecting about 84 million
        workers required <strong>clearer congressional authorization</strong>. The dissent argued that
        OSHA had statutory responsibility and expertise to address grave workplace
        danger from a physically harmful agent.
      `),
      sources: [source('SCOTUS', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'red',
      actors: 'Supreme Court, CMS',
      text:       paragraph(`
        The Supreme Court allowed CMS to enforce the <strong>healthcare-worker mandate</strong> in
        Biden v. Missouri. CMS was upheld because the institutional setting was
        healthcare, the affected population was patients and care providers, and the
        agency had longstanding authority to impose <strong>health-and-safety conditions</strong> on
        federally funded facilities. Similar science supported both mandates, but the
        institutional context was decisive.
      `),
      sources: [source('SCOTUS', 'https://www.supremecourt.gov/opinions/21pdf/21a240_d18e.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'blue',
      actors: 'Pew Research Center, US Adults Surveyed',
      text:       paragraph(`
        Pew found declining trust: 50% rated public health officials' COVID-19
        response as excellent or good, down from 60% in August 2021. 60% said changing
        recommendations had confused them. Support for <strong>proof-of-vaccination
        requirements</strong> varied substantially by setting and party. Scientifically
        adaptive guidance could be socially interpreted as inconsistency or withheld
        information, creating a feedback loop between scientific uncertainty, partisan
        identity, and <strong>mandate legitimacy</strong>.
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/science/2022/02/09/increasing-public-criticism-confusion-over-covid-19-response-in-u-s')],
    }),

    entry({
      date: '10/2025',
      category: 'blue',
      actors: 'KFF, US Adults Surveyed',
      text:       paragraph(`
        Under Health Secretary RFK Jr., trust in the CDC for vaccine information had fallen to just 50% of adults, 
        down from 63% in September 2024. Critically, a partisan inversion occurred. Trust in the CDC for vaccines among Democrats collapsed by 24 percentage points since 2023, 
        while trust among Republicans actually rose ~10 points because their preferred leaders were now running the agencies. 
        By 2025, only 56% of adults said they were confident in COVID vaccine safety, with 87% of Democrats confident but only 30% of Republicans. 
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-dashboard/')],
    }),

    entry({
      date: '06/2026',
      category: 'orange',
      actors: 'RFK Jr., US Adults',
      text:       paragraph(`
          The downstream consequence of Trump Administrations vaccine hesitancy was measles resurgences and preventable disease uptick, 
          with doctors reporting rising cases of whooping cough, bacterial meningitis-causing infections, 
          and other vaccine-preventable illnesses by June 2026.

      `),
      sources: [source('Protect Our Care', 'https://www.protectourcare.org/rfk-jr-meet-consequences-hospitals-see-diseases-resurge-as-vaccinations-decline/')],
    }),

  ]
});
