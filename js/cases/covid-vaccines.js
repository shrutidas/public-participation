import chains from '../chains/covid-vaccines.js';
import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 2',
  slug: 'covid-vaccines',
  title: 'COVID-19 Vaccine Mandates',
  overview:   paragraph(`
    This case is best framed as a conflict between scientific justification and
    democratic authorization. By September 2021, the evidence strongly supported
    vaccination as a means of reducing severe disease, hospitalization, and death. The
    policy problem was whether federal institutions had legitimate authority and
    sufficient public trust to convert that scientific justification into binding
    mandates. The bounded case runs from the federal mandate in September 2021 through
    May 2023, marking the official end of the federal public health emergency.<br><br>
    COVID-19 vaccine mandates show that scientific consensus can justify a policy aim
    without settling the legitimacy of coercive policy instruments. Vaccination was
    well-supported scientifically, especially for preventing severe disease, but
    mandates required a separate showing of institutional authority, procedural
    accountability, proportionality, and public trust. The federal case therefore
    reveals a core problem for science-based governance: experts can establish what is
    likely to reduce harm, but democratic institutions must still authorize who may
    compel action, under what conditions, and with what accountability.
  `),
  chains,
  entries: [

    entry({
      date: '07/2020',
      category: 'blue',
      actors: 'US adults, bipartisan voters',
      text:       paragraph(`
        Gallup first asked in July 2020 whether Americans would take an FDA-approved COVID vaccine at no cost.
        Only 50% said yes, roughly the same rate as flu vaccine uptake. The <strong>partisan gap</strong> was already present.
        Democrats and Republicans were both cautious, but for different reasons.
        Democrats worried about political interference in FDA; Republicans worried about government overreach.
      `),
      sources: [source('Gallup', 'https://news.gallup.com/poll/317018/one-three-americans-not-covid-vaccine.aspx')],
    }),

    entry({
      date: '11/2020',
      category: 'purple',
      actors: 'Tribal governments, Indian Health Service',
      text:       paragraph(`
        Tribal governments chose between state allocation and the <strong>Indian Health
        Service route</strong> for vaccine distribution. Many chose IHS to keep control
        of prioritization and protect elders, language keepers, and teachers. By
        July 2021, American Indian and Alaska Native people had the highest
        vaccination rate of any US group: 45.5% with at least one dose against
        33.7% for White Americans.
      `),
      sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')],
    }),

    entry({
      date: '12/2020',
      category: 'red',
      actors: 'FDA, CDC, Advisory Committee on Immunization Practices',
      text:       paragraph(`
        FDA issued an <strong>emergency use authorization</strong> for the Pfizer-BioNTech vaccine, and
        ACIP voted 11 to 0 to recommend it for persons aged 16 and older. The trial gave
        high-certainty evidence that the vaccine prevented symptomatic disease. Evidence
        on hospitalization and death was limited because severe events were rare in
        the trial.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/69/wr/mm6950e2.htm')],
    }),

    entry({
      date: '01/2021',
      category: 'blue',
      actors: 'Researchers, Employed US Adults Surveyed',
      text:       paragraph(`
        A survey of 3.1 million employed adults ages 18–64 found <strong>26% hesitant</strong> to get
        vaccinated in January, with hesitancy highest among blue-collar workers. The top
        reasons were concern about side effects, lack of trust in the process, and belief
        that they did not need it.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8474804/')],
    }),

    entry({
      date: '02/2021',
      category: 'purple',
      actors: 'Latino Task Force, UCSF, community health workers, Mission District residents',
      text:       paragraph(`
        Unidos en Salud opened a community-run low-barrier vaccination site in
        San Francisco's Mission District and designed it with the neighborhood it served.
        Over 16 weeks it delivered <strong>20,792 doses</strong> with 98.4% second-dose
        completion. 70.5% of clients were Latinx against 13.3% of the city's prior
        vaccinated population, and 58.3% said the site let them vaccinate
        earlier.
      `),
      sources: [
        source('PLOS ONE', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111'),
        source('PubMed 34543291', 'https://pubmed.ncbi.nlm.nih.gov/34543291/'),
      ],
    }),

    entry({
      date: '03/2021',
      category: 'orange',
      actors: 'President Biden, White House',
      text:       paragraph(`
        Biden announced that the country had met the <strong>100-million-dose target</strong> on Day 58 of his presidency,
        42 days ahead of the 100-day deadline. The US was averaging 2.5 million shots per
        day at this point.
      `),
      sources: [source('NPR', 'https://www.npr.org/2021/03/18/978840432/biden-administration-to-meet-goal-of-100-million-vaccine-doses-on-friday')],
    }),

    entry({
      date: '04/2021',
      category: 'orange',
      actors: 'President Biden, CDC',
      text:       paragraph(`
        <strong>Eligibility expands to all US adults</strong>. Weekly vaccination initiation had been
        peaking, and after this date it declined across all age groups.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8224863/')],
    }),

    entry({
      date: '04/2021',
      category: 'red',
      actors: 'HHS, 150 community-based organizations, 73 local governments',
      text:       paragraph(`
        The federal <strong>vaccine equity push</strong> allocated $323 million to community-based
        organizations, $250 million to local governments for culturally appropriate
        health literacy, and $500 million for community health worker programs,
        largely targeted at communities of color. The research found no published
        outcome evaluation of these line items.
      `),
      sources: [
        source('Healthcare Dive', 'https://www.healthcaredive.com/news/hhs-will-send-250m-in-grants-for-vaccine-equity-push/596372/'),
        source('HHS fact sheet', 'https://www.hhs.gov/sites/default/files/black-history-month-2022-fact-sheet.pdf'),
      ],
    }),

    entry({
      date: '05/2021',
      category: 'blue',
      actors: 'College Students, Universities',
      text:       paragraph(`
        Hundreds of universities announced fall 2021 vaccine requirements, and
        <strong>students began organizing protests</strong>. Students challenged both the policy and
        whether universities could legally require a vaccine under emergency use
        authorization (EUA) before full FDA approval.
      `),
      sources: [source('CNBC', 'https://www.cnbc.com/2021/05/19/students-protest-mandatory-covid-vaccinations-at-colleges.html')],
    }),

    entry({
      date: '06/2021',
      category: 'orange',
      actors: 'CDC',
      text:       paragraph(`
        By late June, the US had administered 323.3 million total doses. 179.3 million
        people (54%) had at least one dose and 153 million (46%) were <strong>fully vaccinated</strong>.
        Among adults 65+, 87% had at least one dose.
      `),
      sources: [source('CDC', 'https://www.cdc.gov/covid/php/surveillance/index.html')],
    }),

    entry({
      date: '08/2021',
      category: 'red',
      actors: 'CDC, Massachusetts Department of Public Health, Local Public Health Investigators',
      text:       paragraph(`
        CDC updated masking guidance after Delta breakthrough evidence, including the
        <strong>Barnstable County outbreak report</strong>: 469 cases, and 74% of the people infected
        were fully vaccinated. Vaccinated and unvaccinated people appeared
        to carry similar amounts of the virus. Vaccines remained central for preventing severe illness.
        Delta made transmission control harder and weakened the
        public claim that vaccination alone would stop spread.
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
        (myocarditis and pericarditis). It required additional studies to track the vaccine’s long-term safety.
      `),
      sources: [source('FDA', 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-covid-19-vaccine')],
    }),

    entry({
      date: '08/2021',
      category: 'green',
      actors: 'CDC, HEROES-RECOVER Network Investigators',
      text:       paragraph(`
        CDC reported that mRNA vaccine effectiveness against infection among frontline
        workers <strong>declined from 91% before Delta predominance to 66% during Delta
        predominance</strong>. Limited Delta-period observations made the estimate uncertain.
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
        President Biden announced the <strong>federal mandate</strong>. OSHA would require employers
        with 100 or more employees to ensure vaccination or weekly testing. The Centers for Medicare & Medicaid Services would
        require vaccination for many healthcare workers. Federal employees and federal
        contractors would have to vaccinate. The order also covered Head Start and federal school
        personnel. The administration shifted from persuasion and
        incentives toward compulsory rules affecting roughly 100 million Americans.
      `),
      sources: [source('Miller Center', 'https://millercenter.org/the-presidency/presidential-speeches/september-9-2021-remarks-fighting-covid-19-pandemic')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'President Biden, Executive Branch Agencies, Safer Federal Workforce Task Force',
      text:       paragraph(`
        <strong>Executive Order 14043</strong> required executive agencies to implement a COVID-19
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
        Axios found <strong>60% of voters backed the mandate</strong>, including 80% of Democrats but only 30% of Republicans.
        Monmouth polling found 63% supported requiring healthcare workers to be vaccinated. In an NBC poll, 88% of Democrats
        said they had been vaccinated vs. 46% of Trump-supporting Republicans. Governors of multiple Republican-led states
        immediately vowed to fight the mandates in court. 72% of unvaccinated workers said they would quit before they would comply.
      `),
      sources: [source('Axios', 'https://www.axios.com/2021/09/14/axios-ipsos-poll-covid-vaccine-mandates-biden')],
    }),

    entry({
      date: '10/2021',
      category: 'blue',
      actors: 'KFF, US Adults and Workers Surveyed',
      text:       paragraph(`
        KFF polling showed the public-opinion split. 25% of workers reported an
        employer vaccine requirement, and 50% did not want their employer to require
        vaccination. 90% of unvaccinated workers opposed employer mandates. Support
        for the large-employer federal vaccine-or-test rule varied sharply by
        race and party. The science supported vaccination, but the policy instrument
        entered a <strong>polarized environment with uneven public authorization</strong>.
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-october-2021')],
    }),

    entry({
      date: '10/2021',
      category: 'purple',
      actors: 'NYPD Police Union, Chicago and Washington Police Unions, National Retail Federation, American Trucking Association',
      text:       paragraph(`
        The NYPD's <strong>largest police union filed suit</strong> to block New York City's November 1
        municipal mandate. It argued that officers had not had enough time to seek
        religious exemptions. Similar standoffs between police unions and city mayors
        emerged in Chicago and Washington state. At the same time, the National Retail
        Federation and American Trucking Association lobbied Biden to delay the
        private-employer mandate past the holiday season. They warned that worker walkouts
        would worsen already severe supply chain disruptions.
      `),
      sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')],
    }),

    entry({
      date: '11/2021',
      category: 'red',
      actors: 'OSHA, Department of Labor, Large Employers, Covered Workers',
      text:       paragraph(`
        The Occupational Safety and Health Administration (OSHA) published its COVID-19 vaccination and testing Emergency Temporary
        Standard for employers with 100 or more employees. The Federal Register page
        records 122,485 comments. OSHA used <strong>emergency authority</strong>.
      `),
      sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')],
    }),

    entry({
      date: '11/2021',
      category: 'orange',
      actors: 'Workers, Federal Courts, Supreme Court',
      text:       paragraph(`
        Thousands of <strong>workers file for religious exemptions</strong> at once across the
        country, triggering waves of litigation. Courts have to decide whether
        Jacobson v. Massachusetts (the 1905 smallpox precedent) applies, whether
        Title VII requires religious accommodation, and whether emergency use
        authorization (EUA) status changes the analysis. In November 2021 the Supreme
        Court refuses, by a 6–3 vote in Does v. Mills, to block Maine's healthcare
        worker mandate, the only one that offered no religious exemption.
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
        A majority of the US Senate voted to <strong>disapprove the OSHA regulation</strong>. Opponents could
        now argue that Congress had not enacted a comparable mandate and that one
        chamber had affirmatively rejected the agency rule.
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
        OSHA had the statutory responsibility and expertise to address grave workplace
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
        Biden v. Missouri. The Court upheld CMS because the setting was
        healthcare, the affected people were patients and care providers, and the
        agency had longstanding authority to impose health-and-safety conditions on
        federally funded facilities. Similar science supported both mandates, but the
        institutional context decided the outcome.
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
        requirements</strong> varied substantially by setting and party. The public could
        read scientifically adaptive guidance as inconsistency or withheld
        information. That created a feedback loop between scientific uncertainty, partisan
        identity, and mandate legitimacy.
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/science/2022/02/09/increasing-public-criticism-confusion-over-covid-19-response-in-u-s')],
    }),

    entry({
      date: '10/2025',
      category: 'blue',
      actors: 'KFF, US Adults Surveyed',
      text:       paragraph(`
        Under Health Secretary RFK Jr., trust in the CDC for vaccine information fell to just 50% of adults,
        down from 63% in September 2024. A <strong>partisan inversion</strong> occurred. Trust in the CDC for vaccines among Democrats fell 24 percentage points since 2023,
        while trust among Republicans rose ~10 points because their preferred leaders now ran the agencies.
        By 2025, only 56% of adults said they were confident in COVID vaccine safety: 87% of Democrats but only 30% of Republicans.
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-dashboard/')],
    }),

    entry({
      date: '06/2026',
      category: 'orange',
      actors: 'RFK Jr., US Adults',
      text:       paragraph(`
          Vaccine hesitancy under the Trump administration led to <strong>measles resurgences</strong> and a rise in preventable disease.
          By June 2026 doctors reported rising cases of whooping cough, bacterial infections that cause meningitis,
          and other vaccine-preventable illnesses.
      `),
      sources: [source('Protect Our Care', 'https://www.protectourcare.org/rfk-jr-meet-consequences-hospitals-see-diseases-resurge-as-vaccinations-decline/')],
    }),

  ]
});
