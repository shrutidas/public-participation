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
      date: '12/2020',
      category: 'red',
      actors: 'FDA; CDC; Advisory Committee on Immunization Practices',
      text:       paragraph(`
        FDA issued an emergency use authorization for the Pfizer-BioNTech vaccine, and
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
      actors: 'CDC; Massachusetts Department of Public Health; Local Public Health Investigators',
      text:       paragraph(`
        CDC updated masking guidance after Delta breakthrough evidence, including the
        Barnstable County outbreak report showing 469 cases, 74% among fully
        vaccinated persons, and similar Ct values among vaccinated and unvaccinated
        infected people. Vaccines remained central for preventing severe illness, but
        Delta made transmission control less straightforward and weakened the
        public-facing claim that vaccination alone would stop spread.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7031e2.htm')],
    }),

    entry({
      date: '08/2021',
      category: 'red',
      actors: 'FDA; BioNTech/Pfizer',
      text:       paragraph(`
        FDA gave full approval to Pfizer-BioNTech's vaccine, marketed as Comirnaty,
        for people aged 16 and older. Full approval reduced one legitimacy objection
        to mandates by moving the leading vaccine from EUA status into ordinary FDA
        licensure. FDA still acknowledged myocarditis and pericarditis monitoring and
        required postmarketing studies.
      `),
      sources: [source('FDA', 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-covid-19-vaccine')],
    }),

    entry({
      date: '08/2021',
      category: 'green',
      actors: 'CDC; HEROES-RECOVER Network Investigators',
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
      category: 'red',
      actors: 'President Biden; White House; Department of Labor; OSHA; HHS; CMS; Federal Agencies',
      text:       paragraph(`
        President Biden announced the federal mandate: OSHA would require employers
        with 100 or more employees to ensure vaccination or weekly testing. CMS would
        require vaccination for many healthcare workers. Federal employees and federal
        contractors would be required to vaccinate. Head Start and federal school
        personnel were included. The administration shifted from persuasion and
        incentives toward compulsory rules affecting roughly 100 million Americans.
      `),
      sources: [source('Miller Center', 'https://millercenter.org/the-presidency/presidential-speeches/september-9-2021-remarks-fighting-covid-19-pandemic')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'President Biden; Executive Branch Agencies; Safer Federal Workforce Task Force',
      text:       paragraph(`
        Executive Order 14043 required executive agencies to implement a COVID-19
        vaccination program for federal employees, with exceptions only as required by
        law.
      `),
      sources: [source('GovInfo', 'https://www.govinfo.gov/content/pkg/DCPD-202100733/pdf/DCPD-202100733.pdf')],
    }),

    entry({
      date: '10/2021',
      category: 'blue',
      actors: 'KFF; US Adults and Workers Surveyed',
      text:       paragraph(`
        KFF polling showed the public-opinion split: 25% of workers reported an
        employer vaccine requirement, 50% did not want their employer to require
        vaccination, 90% of unvaccinated workers opposed employer mandates, and
        support for the large-employer federal vaccine-or-test rule varied sharply by
        race and party. The science supported vaccination, but the policy instrument
        was entering a polarized environment in which public authorization was uneven.
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-october-2021')],
    }),

    entry({
      date: '11/2021',
      category: 'red',
      actors: 'OSHA; Department of Labor; Large Employers; Covered Workers',
      text:       paragraph(`
        OSHA published its COVID-19 vaccination and testing Emergency Temporary
        Standard for employers with 100 or more employees. The Federal Register page
        records 122,485 comments. OSHA used emergency authority, even though the rule
        generated massive public response.
      `),
      sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')],
    }),

    entry({
      date: '12/2021',
      category: 'red',
      actors: 'US Senate',
      text:       paragraph(`
        A majority of the US Senate voted to disapprove the OSHA regulation under S.J.
        Res. 29. Opponents could argue that Congress had not only failed to enact a
        comparable mandate, but one chamber had affirmatively rejected the agency
        rule.
      `),
      sources: [source('SCOTUS Opinion', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'red',
      actors: 'Supreme Court; OSHA',
      text:       paragraph(`
        The Supreme Court blocked OSHA's emergency rule requiring large employers to
        enforce COVID-19 vaccination or testing requirements. The Court treated
        COVID-19 as a universal risk and held that a rule affecting about 84 million
        workers required clearer congressional authorization. The dissent argued that
        OSHA had statutory responsibility and expertise to address grave workplace
        danger from a physically harmful agent.
      `),
      sources: [source('SCOTUS', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'red',
      actors: 'Supreme Court; CMS',
      text:       paragraph(`
        The Supreme Court allowed CMS to enforce the healthcare-worker mandate in
        Biden v. Missouri. CMS was upheld because the institutional setting was
        healthcare, the affected population was patients and care providers, and the
        agency had longstanding authority to impose health-and-safety conditions on
        federally funded facilities. Similar science supported both mandates, but the
        institutional context was decisive.
      `),
      sources: [source('SCOTUS', 'https://www.supremecourt.gov/opinions/21pdf/21a240_d18e.pdf')],
    }),

    entry({
      date: '01/2022',
      category: 'blue',
      actors: 'Pew Research Center; US Adults Surveyed',
      text:       paragraph(`
        Pew found declining trust: 50% rated public health officials' COVID-19
        response as excellent or good, down from 60% in August 2021. 60% said changing
        recommendations had confused them. Support for proof-of-vaccination
        requirements varied substantially by setting and party. Scientifically
        adaptive guidance could be socially interpreted as inconsistency or withheld
        information, creating a feedback loop between scientific uncertainty, partisan
        identity, and mandate legitimacy.
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/science/2022/02/09/increasing-public-criticism-confusion-over-covid-19-response-in-u-s')],
    }),
  ]
});
