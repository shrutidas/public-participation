import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 2',
  title: 'COVID-19 School Closures and Reopenings',
  overview:   paragraph(`
    This case is about the difficulty of sustaining <strong>precautionary governance</strong> as
    uncertainty evolved. The initial decision of <strong>emergency school closures</strong> was
    defensible under radical uncertainty about COVID-19. The harder governance failure
    came later when <strong>delayed, uneven, and poorly justified reopenings</strong> took place. This
    became especially difficult where decision-makers failed to adequately weigh
    emerging risks or engage communities whose values and priorities were directly at
    stake. When communities were consulted, were their concerns actually integrated
    into reopening decisions, or were they sidelined in favor of narrow expert
    judgments or political pressure? The public fallout reveals the cost of that
    misalignment. Trust eroded not only because the science was uncertain, but because
    the process felt unresponsive to the people bearing the consequences.
  `),
  entries: [
    entry({
      date: '02/2020',
      category: 'green',
      actors: 'CDC; NIH/NIAID; WHO',
      text:       paragraph(`
        US public health officials knew the virus was <strong>highly transmissible via
        respiratory droplets</strong>, that older populations and those with comorbidities
        faced far worse outcomes, and that <strong>children appeared less severely affected</strong>.
        What was unknown was the rate of asymptomatic spread, the role of schools in
        community transmission, the degree of airborne versus droplet transmission,
        and long-term health consequences.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7752102')],
    }),

    entry({
      date: '03/2020',
      category: 'orange',
      actors: 'Governors; State Education Agencies; Local Districts; Public Health Officials',
      text:       paragraph(`
        The <strong>first national closure wave</strong> unfolded, moving from school and
        district-level closures to <strong>statewide action</strong>. Education Week tracked closures
        from March 6 to May 15, with the initial school and district-level closure
        data concentrated between March 9 and March 25.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '03/2020',
      category: 'red',
      actors: 'Fauci (NIAID); CDC; White House Coronavirus Task Force',
      text:       paragraph(`
        Fauci repeatedly emphasized <strong>flattening the curve</strong>, avoided specifying school
        closure policy, and deferred to governors on reopening. He acknowledged that
        science had 'not definitive evidence' on children as vectors. The 6-foot
        social distancing guidance, later shown to have <strong>no clinical trial basis</strong>, was
        being operationalized in school planning documents across all 50 states.
      `),
      sources: [source('NYT', 'https://www.nytimes.com/article/flatten-curve-coronavirus.html')],
    }),

    entry({
      date: '03/2020',
      category: 'red',
      actors: 'Governors; State Agencies; Local Districts',
      text:       paragraph(`
        Governors rapidly suspended in-person schooling across almost the entire
        country. An academic analysis found that <strong>49 states suspended in-person
        instruction</strong>, with Montana as the exception. Governors drove the decision; it
        was rapid, broadly bipartisan, and oriented around <strong>flattening the curve and
        preserving hospital capacity</strong> rather than fine-grained educational trade-offs.
      `),
      sources: [source('Ed Working Papers', 'https://edworkingpapers.com/sites/default/files/ai21-355.pdf')],
    }),

    entry({
      date: '03/2020',
      category: 'orange',
      actors: 'Governors; State Education Agencies; Local Districts',
      text:       paragraph(`
        Closures reached <strong>near-total scale</strong>. At least 55.1 million students in 124,000
        public and private schools were affected.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '04/2020',
      category: 'red',
      actors: 'Governor Whitmer; Michigan Department of Education',
      text:       paragraph(`
        Governor Whitmer ordered Michigan public schools closed for the remainder of
        the 2019-20 school year and issued <strong>Executive Order 2020-88</strong> creating a <strong>COVID-19
        Return to School Advisory Council</strong> with educators, public health officials,
        local administrators, and parents. Critics would later argue its
        recommendations were not consistently followed.
      `),
      sources: [source('AFT Michigan', 'https://aftmichigan.org/executive-order-closing-public-schools-for-remainder-of-19-20-school-year')],
    }),

    entry({
      date: '06/2020',
      category: 'red',
      actors: 'Governors; State Education Departments',
      text:       paragraph(`
        Nearly every state either <strong>ordered or recommended schools stay closed</strong> through
        the end of the 2019-20 school year with online learning options. The original
        precautionary decision became harder to evaluate as closure duration increased
        and <strong>remote-learning inequality</strong> became more visible.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '06/2020',
      category: 'purple',
      actors: 'Gov. Whitmer; MDE; Educators; Health Officials; Parents',
      text:       paragraph(`
        <strong>Michigan Return to Learn Advisory Council</strong> convened, the first formal
        structured public-input body for school reopening in the state. Composed of
        educators, public health officials, local administrators, and parents.
        Produced the <strong>Return to School Roadmap</strong> for fall 2020.
      `),
      sources: [source('Michigan.gov', 'https://www.michigan.gov/-/media/Project/Websites/mde/2020/07/15/Item_IIIA1_PPT_Introduction_Dr_Rice.pdf?rev=3afe168a69d94ad59db08bbf4c893965')],
    }),

    entry({
      date: '06/2020',
      category: 'green',
      actors: 'American Academy of Pediatrics; Teachers Unions; AASA; Trump Administration',
      text:       paragraph(`
        The American Academy of Pediatrics first urged policymakers to start with the
        goal of <strong>physical presence in school</strong>, then clarified that science and community
        circumstances should guide decisions and that recommendations should be
        <strong>evidence-based, not political</strong>. Politicization of reopening forced AAP to
        clarify that reopening should depend on local infection conditions, educator
        safety, stakeholder involvement, and resources.
      `),
      sources: [source('NPR', 'https://www.npr.org/sections/coronavirus-live-updates/2020/07/10/889848834/nations-pediatricians-walk-back-support-for-in-person-school')],
    }),

    entry({
      date: '07/2020',
      category: 'red',
      actors: 'President Trump; VP Pence; CDC Director Redfield',
      text:       paragraph(`
        President Trump publicly <strong>attacked CDC guidance</strong> on reopening schools, calling
        it impractical and expensive. VP Pence told reporters CDC guidelines were not
        a barrier to reopening. CDC Director Redfield appeared alongside Pence and
        stated CDC guidance was not meant to be a rationale to keep schools closed.
        Trump threatened to <strong>withhold federal funding</strong> from schools that did not reopen.
      `),
      sources: [source('NPR', 'https://www.npr.org/2020/07/08/888898194/trump-blasts-expensive-cdc-guidelines-for-reopening-schools')],
    }),

    entry({
      date: '07/2020',
      category: 'blue',
      actors: 'KFF',
      text:       paragraph(`
        KFF found that 60% of parents with children aged 5 to 17 <strong>preferred opening
        schools later to reduce infection risk</strong>, while 34% preferred opening sooner.
        Parents also worried both about illness and about academic, social, economic,
        food, technology, and service losses from closure. Parents of color reported
        especially high concern about safety, resources, technology, food, and
        services.
      `),
      sources: [source('KFF', 'https://www.kff.org/covid-19/kff-health-tracking-poll-july-2020')],
    }),

    entry({
      date: '07/2020',
      category: 'blue',
      actors: 'Gallup',
      text:       paragraph(`
        Gallup found <strong>parent preferences shifting away from full-time in-person
        schooling</strong>: 36% favored full-time in-person, 28% full-time remote, and 36%
        hybrid. Concern about children catching coronavirus rose to 64%. Values
        differed by infection concern, region, and party, with Republicans far more
        supportive of in-person schooling and Democrats far less supportive.
      `),
      sources: [source('Gallup', 'https://news.gallup.com/poll/316412/fewer-parents-full-time-person-fall-schooling.aspx')],
    }),

    entry({
      date: '07/2020',
      category: 'orange',
      actors: 'American Federation of Teachers; NEA; Local Affiliates; School Boards',
      text:       paragraph(`
        Teachers unions entered the reopening debate as the dominant local advocacy
        force. Research tracking reopening decisions in 250 of the largest school
        districts found <strong>union presence significantly correlates with remote-only
        decisions</strong>. The AFT threatened <strong>safety strikes</strong> if school reopening plans did not
        meet its health and safety standards.
      `),
      sources: [source('Politico', 'https://www.politico.com/news/2020/07/28/aft-strikes-school-reopening-384133')],
    }),

    entry({
      date: '09/2020',
      category: 'red',
      actors: 'Governors; Local School Districts; School Boards; Superintendents; Unions; Parents',
      text:       paragraph(`
        Reopening became decentralized and uneven. <strong>48 states left reopening modality
        decisions to local districts</strong>, producing a <strong>patchwork</strong> of remote, hybrid, and
        in-person schooling shaped by local politics, union power, parent preferences,
        and health conditions.
      `),
      sources: [source('Ed Working Papers', 'https://edworkingpapers.com/sites/default/files/ai21-355.pdf')],
    }),

    entry({
      date: '09/2020',
      category: 'orange',
      actors: 'Local School Districts; CDC Researchers; School Communities',
      text:       paragraph(`
        National district reopening plans were mixed: CDC reported that 24% of
        districts were fully online, 51% hybrid, and 17% fully open for in-person
        instruction. Local control sometimes integrated local values, but also made
        <strong>policy legitimacy depend heavily on local trust, resources, and conflict</strong>.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')],
    }),

    entry({
      date: '11/2020',
      category: 'purple',
      actors: '30 Randomly Selected Michigan Residents; CMU Researchers',
      text:       paragraph(`
        30 Michiganders recruited through a <strong>deliberative sortition process</strong>. The
        participant selection used an algorithm developed by CMU computer scientists
        that maximized demographic representativeness and fairness of random
        selection. The panel produced <strong>12 policy recommendations</strong> covering public
        health, economic support, and community equity, formally offered to
        policymakers.
      `),
      sources: [
        source('CMU News', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html'),
        source('Perma.cc', 'https://perma.cc/M2H9-BDVC'),
      ],
    }),

    entry({
      date: '01/2021',
      category: 'red',
      actors: 'Biden Administration; CDC',
      text:       paragraph(`
        President Biden issued an <strong>executive order</strong> supporting safe reopening and
        continued operation of schools and early-childhood providers. This <strong>federalized
        reopening support</strong> without fully nationalizing school governance.
      `),
      sources: [source('GovInfo', 'https://www.govinfo.gov/content/pkg/DCPD-202100073/pdf/DCPD-202100073.pdf')],
    }),

    entry({
      date: '01/2021',
      category: 'green',
      actors: 'CDC; Public Health Researchers',
      text:       paragraph(`
        Research summarized accumulating evidence that <strong>in-person schooling with
        mitigation was not typically associated with the kind of rapid spread</strong> seen in
        congregate living facilities or high-density worksites. Reopening could be
        made safer with <strong>universal masks, distancing, ventilation</strong>, hybrid models,
        screening testing, and limits on high-risk extracurriculars.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')],
    }),

    entry({
      date: '02/2021',
      category: 'red',
      actors: 'CDC; State and Local School Officials; Public Health Agencies',
      text:       paragraph(`
        CDC issued its <strong>Operational Strategy for K-12 Schools through Phased
        Mitigation</strong>, stating that schools should open safely as soon as possible, be
        the <strong>last settings to close, and be the first to reopen when safe</strong>. It
        translated evolving science into operational governance including masking,
        distancing, hygiene, ventilation, contact tracing, and prioritization of
        elementary students and students at risk of learning loss.
      `),
      sources: [source('CDC Strategy', 'https://www.tn.gov/content/dam/tn/health/documents/healthy-places/healthy-schools/CDC_K-12-Operational-Strategy-021221.pdf')],
    }),

    entry({
      date: '03/2021',
      category: 'orange',
      actors: 'Federal and State Governments; Teachers; School Staff; Vaccine Providers',
      text:       paragraph(`
        Teachers and school staff became eligible for vaccination as an <strong>essential
        workforce</strong> on March 2, and all persons over age 16 became eligible by April 19.
        <strong>Vaccination changed the risk calculus for reopening</strong>, especially for adult
        staff risk, but did not eliminate conflict.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
      date: '05/2021',
      category: 'red',
      actors: 'FDA; CDC; Adolescents; Schools',
      text:       paragraph(`
        <strong>Vaccine emergency use authorization</strong> was extended to ages 12 to 15. This
        further changed <strong>reopening politics for middle and high schools</strong>, where
        transmission concerns had been greater than for elementary schools, although
        younger children remained ineligible until later.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
      date: '01/2022',
      category: 'orange',
      actors: 'Schools; Districts; State and Local Health Authorities; Families',
      text:       paragraph(`
        <strong>Delta and Omicron variants</strong> produced renewed school-disruption waves. In 2021-22,
        CDC researchers identified 25,907 COVID-related school-closure events, with
        the weekly peak in January 2022. More than 14.6 million students were
        affected, showing that schools still lacked <strong>stable tools for keeping in-person
        learning continuous during surges</strong>.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
        date: '01/2022',
        category: 'blue',
        actors: 'US representative sample',
        text:       paragraph(`
          Support for mitigation measures (masks, vaccines, hybrid schedules) became highly partisan by the end of 2021. Urban Institute work and contemporaneous polls show 
          Democrats and Black parents more likely to support mask and vaccine mandates in schools, while Republicans were far more likely to oppose them and 
          to prioritize full in‑person reopening. Partisan and racial divides have hardened around how schools should respond to future outbreaks.
        `),
        sources: [source('Urban', 'https://www.urban.org/research/publication/support-mask-and-vaccine-policies-schools-falls-along-racial-and-political-lines')],
      }),

    entry({
      date: '04/2022',
      category: 'green',
      actors: 'CDC; High School Students; Schools',
      text:       paragraph(`
        CDC reported <strong>widespread adolescent mental-health strain</strong> during the pandemic:
        37.1% of high school students experienced poor mental health, 44.2% reported
        persistent sadness or hopelessness, and <strong>school connectedness was associated
        with better mental-health outcomes</strong>.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/71/su/su7103a3.htm')],
    }),

    entry({
      date: '12/2022',
      category: 'green',
      actors: 'National Center for Education Statistics; NAEP; Students and Schools',
      text:       paragraph(`
        NAEP long-term trend results showed age-9 reading scores declined 5 points and
        math scores declined 7 points from 2020 to 2022. The math decline was the
        <strong>first ever in that assessment series</strong>, sharpening retrospective criticism that
        reopening decisions did not always adequately weigh <strong>educational inequality and
        long-run child development</strong>.
      `),
      sources: [source('NAEP', 'https://www.nationsreportcard.gov/highlights/ltt/2022')],
    }),

    entry({
      date: '06/2024',
      category: 'blue',
      actors: 'Harvard Chan School of Public Health',
      text:       paragraph(`
        A 2024 Harvard-de Beaumont poll found that 56% of Americans now say K‑12 closures were “generally a good idea,” alongside 
        strong majorities for masks and other measures. Among those who call closures a bad idea, 97% cite harm to learning and 91% harm to children’s mental
        health, and most say policies lasted too long and were politically driven. At the same time, large majorities of voters agree that students are still 
        behind because of closures and remote learning, and many experts now say schools stayed closed longer than necessary, with limited benefit for 
        viral control but substantial academic and mental‑health costs.
      `),
      sources: [source('De Beaumont', 'https://debeaumont.org/news/2024/poll-most-americans-think-key-covid-policies-were-a-good-idea')],
    }),
  ]
});
