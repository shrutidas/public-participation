import chains from '../chains/covid-schools.js';
import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 1',
  slug: 'covid-schools',
  title: 'COVID-19 School Closures and Reopenings',
  overview:   paragraph(`
    This case is about the difficulty of sustaining precautionary governance as
    uncertainty evolved. The initial decision of emergency school closures was
    defensible under radical uncertainty about COVID-19. The harder governance failure
    came later when delayed, uneven, and poorly justified reopenings took place. This
    became especially difficult where decision-makers failed to adequately weigh
    emerging risks or engage communities whose values and priorities were directly at
    stake. When communities were consulted, were their concerns actually integrated
    into reopening decisions, or were they sidelined in favor of narrow expert
    judgments or political pressure? The public fallout reveals the cost of that
    misalignment. Trust eroded not only because the science was uncertain, but because
    the process felt unresponsive to the people bearing the consequences.
  `),
  chains,
  entries: [
    entry({
      date: '02/2020',
      category: 'green',
      actors: 'CDC, NIH, WHO',
      text:       paragraph(`
        Public health officials knew the virus spread readily through respiratory droplets.
        They knew older adults and people with other health conditions faced far worse outcomes,
        and that <strong>children appeared less severely affected</strong>.
        They did not yet know how often people without symptoms spread the virus, how much schools
        added to community spread, whether airborne spread mattered more than droplets, or what
        long-term health effects the virus might cause.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7752102')],
    }),

    entry({
      date: '03/2020',
      category: 'orange',
      actors: 'Governors, State Education Agencies, Local Districts, Public Health Officials',
      text:       paragraph(`
        The <strong>first national closure wave</strong> moved from school and
        district-level closures to statewide action. Education Week tracked closures
        from March 6 to May 15. The first school and district-level closures came
        between March 9 and March 25.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '03/2020',
      category: 'red',
      actors: 'Fauci, CDC, White House Coronavirus Task Force',
      text:       paragraph(`
        Fauci repeatedly emphasized <strong>flattening the curve</strong>, avoided specifying school
        closure policy, and deferred to governors on reopening. He acknowledged that
        science had 'not definitive evidence' on children as vectors. School planning
        documents in all 50 states built in the 6-foot social distancing guidance,
        which later proved to have no clinical trial basis.
      `),
      sources: [
        source('NYT', 'https://www.nytimes.com/article/flatten-curve-coronavirus.html'),
        source('CDC', 'https://stacks.cdc.gov/view/cdc/11425'),
      ],
    }),

    entry({
      date: '03/2020',
      category: 'red',
      actors: 'Governors, State Agencies, Local Districts',
      text:       paragraph(`
        Governors rapidly suspended in-person schooling across almost the entire
        country. An academic analysis found that <strong>49 states suspended in-person
        instruction</strong>, with Montana as the exception. Governors drove the decision.
        It was rapid and broadly bipartisan. It aimed at flattening the curve and
        preserving hospital capacity, not at fine-grained educational trade-offs.
      `),
      sources: [source('Ed Working Papers', 'https://edworkingpapers.com/sites/default/files/ai21-355.pdf')],
    }),

    entry({
      date: '03/2020',
      category: 'orange',
      actors: 'Governors, State Education Agencies, Local Districts',
      text:       paragraph(`
        Closures reached near-total scale. They affected <strong>at least 55.1 million
        students</strong> in 124,000 public and private schools.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '04/2020',
      category: 'red',
      actors: 'Governor Whitmer, Michigan Department of Education',
      text:       paragraph(`
        Governor Whitmer ordered Michigan public schools closed for the rest of
        the 2019-20 school year. In May she issued an executive order creating a <strong>COVID-19
        Return to School Advisory Council</strong> of educators, public health officials,
        local administrators, and parents. Critics later argued the state did not
        consistently follow its recommendations.
      `),
      sources: [
        source('AFT Michigan', 'https://aftmichigan.org/executive-order-closing-public-schools-for-remainder-of-19-20-school-year'),
        source('Executive Order 2020-88', 'https://content.govdelivery.com/attachments/MIEOG/2020/05/15/file_attachments/1452673/EO%202020-88.pdf'),
      ],
    }),

    entry({
      date: '06/2020',
      category: 'red',
      actors: 'Governors, State Education Departments',
      text:       paragraph(`
        Nearly every state <strong>ordered or recommended schools stay closed</strong> through
        the end of the 2019-20 school year, with online learning options. The original
        precautionary decision became harder to evaluate as closures lengthened
        and remote-learning inequality became more visible.
      `),
      sources: [source('Education Week', 'https://www.edweek.org/leadership/map-coronavirus-and-school-closures-in-2019-2020/2020/03')],
    }),

    entry({
      date: '06/2020',
      category: 'purple',
      actors: 'Governor Whitmer, Michigan Department of Education, Educators, Health Officials, Parents',
      text:       paragraph(`
        The Michigan Return to Learn Advisory Council convened, the first formal
        structured public-input body for school reopening in the state. Its members
        were educators, public health officials, local administrators, and parents.
        The legal and procedural record gives substantial detail about who
        participated and how the process ran. It gives little detail about how
        policymakers responded to the panel’s recommendations. The council produced
        the <strong>Return to School Roadmap</strong> for fall 2020.
      `),
      sources: [
        source('Michigan.gov', 'https://www.michigan.gov/-/media/Project/Websites/mde/2020/07/15/Item_IIIA1_PPT_Introduction_Dr_Rice.pdf?rev=3afe168a69d94ad59db08bbf4c893965'),
        source('Executive Order 2020-88', 'https://content.govdelivery.com/attachments/MIEOG/2020/05/15/file_attachments/1452673/EO%202020-88.pdf'),
      ],
    }),

    entry({
      date: '06/2020',
      category: 'green',
      actors: 'American Academy of Pediatrics, Teachers Unions, AASA, Trump Administration',
      text:       paragraph(`
        The American Academy of Pediatrics (AAP) first urged policymakers to start with the
        goal of <strong>physical presence in school</strong>. It then clarified that science and community
        circumstances should guide decisions and that recommendations should rest on
        evidence. Politicization of reopening forced the AAP to clarify that reopening
        should depend on local infection conditions, educator safety, stakeholder
        involvement, and resources.
      `),
      sources: [source('NPR', 'https://www.npr.org/sections/coronavirus-live-updates/2020/07/10/889848834/nations-pediatricians-walk-back-support-for-in-person-school')],
    }),

    entry({
      date: '07/2020',
      category: 'orange',
      actors: 'President Trump, VP Pence, CDC Director Redfield',
      text:       paragraph(`
        President Trump publicly <strong>attacked CDC guidance</strong> on reopening schools, calling
        it impractical and expensive. VP Pence told reporters CDC guidelines were not
        a barrier to reopening. CDC Director Redfield appeared alongside Pence and
        said CDC guidance was not meant as a rationale to keep schools closed.
        Trump threatened to withhold federal funding from schools that did not reopen.
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
        Parents worried about illness and about academic, social, economic,
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
        hybrid. Concern about children catching coronavirus rose to 64%. Views
        differed by infection concern, region, and party. Republicans were far more
        supportive of in-person schooling and Democrats far less.
      `),
      sources: [source('Gallup', 'https://news.gallup.com/poll/316412/fewer-parents-full-time-person-fall-schooling.aspx')],
    }),

    entry({
      date: '07/2020',
      category: 'orange',
      actors: 'American Federation of Teachers, NEA, Local Affiliates, School Boards',
      text:       paragraph(`
        Teachers unions entered the reopening debate as the dominant local advocacy
        force. Research tracking reopening decisions in 250 of the largest school
        districts found union presence significantly correlates with remote-only
        decisions. The AFT threatened <strong>safety strikes</strong> if school reopening plans did not
        meet its health and safety standards.
      `),
      sources: [source('Politico', 'https://www.politico.com/news/2020/07/28/aft-strikes-school-reopening-384133')],
    }),

    entry({
      date: '09/2020',
      category: 'red',
      actors: 'Governors, Local School Districts, School Boards, Superintendents, Unions, Parents',
      text:       paragraph(`
        Reopening became decentralized and uneven. <strong>48 states left reopening modality
        decisions to local districts</strong>. The result was a patchwork of remote, hybrid, and
        in-person schooling shaped by local politics, union power, parent preferences,
        and health conditions.
      `),
      sources: [source('Ed Working Papers', 'https://edworkingpapers.com/sites/default/files/ai21-355.pdf')],
    }),

    entry({
      date: '09/2020',
      category: 'orange',
      actors: 'Local School Districts, CDC Researchers, School Communities',
      text:       paragraph(`
        District reopening plans were mixed. CDC reported that 24% of
        districts were fully online, 51% hybrid, and 17% fully open for in-person
        instruction. Local control sometimes brought in local values, but it also made
        <strong>policy legitimacy depend heavily on local trust, resources, and conflict</strong>.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')],
    }),

    entry({
      date: '09/2020',
      category: 'purple',
      actors: 'United Federation of Teachers, Mayor de Blasio, NYC Department of Education',
      text:       paragraph(`
        The UFT, representing about 75,000 NYC teachers, threatened to sue or
        strike over the planned September 10 reopening, citing inadequate testing
        and safety protocols. On September 1 the city and the union reached a deal
        that <strong>delayed in-person instruction to September 21</strong>, added monthly random
        testing, and set a citywide closure trigger at a 3% infection rate. It was the only
        stakeholder channel in the case that could force the terms of a reopening
        decision.
      `),
      sources: [
        source('NPR', 'https://www.npr.org/sections/coronavirus-live-updates/2020/08/19/903927057/nyc-teacher-unions-prepared-to-strike-if-safety-demands-are-not-met'),
        source('K-12 Dive', 'https://www.k12dive.com/news/nyc-uft-reopening-agreement-delays-school-start-boosts-safety/584532/'),
      ],
    }),

    entry({
      date: '11/2020',
      category: 'purple',
      actors: '30 Randomly Selected Michigan Residents, CMU Researchers',
      text:       paragraph(`
        Researchers recruited 30 Michiganders through a <strong>deliberative sortition process</strong>.
        An algorithm developed by CMU computer scientists selected participants to
        maximize demographic representativeness and fairness of random selection.
        The panel produced 12 policy recommendations covering public health, economic
        support, and community equity, and formally offered them to policymakers.
      `),
      sources: [
        source('CMU News', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html'),
        source('Perma.cc', 'https://perma.cc/M2H9-BDVC'),
      ],
    }),

    entry({
      date: '01/2021',
      category: 'red',
      actors: 'Biden Administration, CDC',
      text:       paragraph(`
        President Biden issued an <strong>executive order</strong> supporting safe reopening and
        continued operation of schools and early-childhood providers. The order
        federalized reopening support without fully nationalizing school governance.
      `),
      sources: [source('GovInfo', 'https://www.govinfo.gov/content/pkg/DCPD-202100073/pdf/DCPD-202100073.pdf')],
    }),

    entry({
      date: '01/2021',
      category: 'green',
      actors: 'CDC, Public Health Researchers',
      text:       paragraph(`
        Research summarized accumulating evidence that <strong>in-person schooling with
        mitigation was not typically associated with the kind of rapid spread</strong> seen in
        congregate living facilities or high-density worksites. Universal masks,
        distancing, ventilation, hybrid models, screening testing, and limits on
        high-risk extracurriculars could make reopening safer.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')],
    }),

    entry({
      date: '02/2021',
      category: 'red',
      actors: 'CDC, State and Local School Officials, Public Health Agencies',
      text:       paragraph(`
        CDC issued its <strong>Operational Strategy for K-12 Schools through Phased
        Mitigation</strong>. It stated that schools should open safely as soon as possible, be
        the last settings to close, and be the first to reopen when safe. It
        translated evolving science into operational guidance: masking,
        distancing, hygiene, ventilation, contact tracing, and priority for
        elementary students and students at risk of learning loss.
      `),
      sources: [source('CDC Strategy', 'https://www.tn.gov/content/dam/tn/health/documents/healthy-places/healthy-schools/CDC_K-12-Operational-Strategy-021221.pdf')],
    }),

    entry({
      date: '02/2021',
      category: 'purple',
      actors: 'SF City Attorney Dennis Herrera, SF Board of Education, Superintendent Matthews',
      text:       paragraph(`
        San Francisco's city attorney <strong>sued the city's own school district</strong>,
        demanding the restart of in-person instruction for more than 52,000
        students. It appears to be the first civil action a city filed against a
        district over COVID-19 closings. Participation arrived as litigation,
        after the decisions.
      `),
      sources: [source('NBC News', 'https://www.nbcnews.com/news/us-news/san-francisco-sues-its-own-school-district-demands-restart-person-n1256639')],
    }),

    entry({
      date: '03/2021',
      category: 'orange',
      actors: 'Federal and State Governments, Teachers, School Staff, Vaccine Providers',
      text:       paragraph(`
        Teachers and school staff became eligible for vaccination as an <strong>essential
        workforce</strong> on March 2, and everyone over age 16 became eligible by April 19.
        Vaccination changed the risk calculus for reopening, especially for adult
        staff, but did not end conflict.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
      date: '05/2021',
      category: 'red',
      actors: 'FDA, CDC, Adolescents, Schools',
      text:       paragraph(`
        The FDA extended <strong>vaccine emergency use authorization</strong> to ages 12 to 15. This
        further changed reopening politics for middle and high schools, where
        transmission concerns had been greater than for elementary schools.
        Younger children remained ineligible until later.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
      date: '01/2022',
      category: 'orange',
      actors: 'Schools, Districts, State and Local Health Authorities, Families',
      text:       paragraph(`
        <strong>Delta and Omicron variants</strong> produced renewed school-disruption waves. In 2021-22,
        CDC researchers identified 25,907 COVID-related school-closure events, with
        the weekly peak in January 2022. The closures affected more than 14.6 million
        students. Schools still lacked stable tools for keeping in-person learning
        continuous during surges.
      `),
      sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')],
    }),

    entry({
        date: '01/2022',
        category: 'blue',
        actors: 'US representative sample',
        text:       paragraph(`
          Support for mitigation measures (masks, vaccines, hybrid schedules) became
          <strong>highly partisan</strong> by the end of 2021. Urban Institute work and polls at the
          time show Democrats and Black parents were more likely to support mask and
          vaccine mandates in schools. Republicans were far more likely to oppose them
          and to prioritize full in‑person reopening. Partisan and racial divides have
          hardened around how schools should respond to future outbreaks.
        `),
        sources: [source('Urban', 'https://www.urban.org/research/publication/support-mask-and-vaccine-policies-schools-falls-along-racial-and-political-lines')],
      }),

    entry({
      date: '02/2022',
      category: 'purple',
      actors: 'San Francisco voters, three recalled commissioners',
      text:       paragraph(`
        San Francisco voters <strong>recalled three Board of Education members</strong> by margins
        of 69 to 76% on 36% turnout. Voters cited schools remaining closed in 2020-21
        while other districts opened. The verdict arrived 14 to 20 months after the
        decisions it judged. Nationally, 84 recall efforts in 2021 produced one
        removal in the 16 elections held.
      `),
      sources: [
        source('2022 SF Board of Education recall', 'https://en.wikipedia.org/wiki/2022_San_Francisco_Board_of_Education_recall_elections'),
        source('Ballotpedia', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/'),
      ],
    }),

    entry({
      date: '04/2022',
      category: 'green',
      actors: 'CDC, High School Students, Schools',
      text:       paragraph(`
        CDC reported <strong>widespread adolescent mental-health strain</strong> during the pandemic.
        37% of high school students experienced poor mental health, and 44% reported
        persistent sadness or hopelessness. Students who felt connected to school
        had better mental-health outcomes.
      `),
      sources: [source('CDC MMWR', 'https://www.cdc.gov/mmwr/volumes/71/su/su7103a3.htm')],
    }),

    entry({
      date: '12/2022',
      category: 'green',
      actors: 'National Center for Education Statistics, NAEP, Students and Schools',
      text:       paragraph(`
        National Assessment of Educational Progress (NAEP) long-term trend results
        showed age-9 reading scores fell 5 points and math scores fell 7 points from
        2020 to 2022. The math decline was the <strong>first ever in that assessment
        series</strong>. The results sharpened criticism that reopening decisions did not
        always adequately weigh educational inequality and long-run child development.
      `),
      sources: [source('NAEP', 'https://www.nationsreportcard.gov/highlights/ltt/2022')],
    }),

    entry({
      date: '06/2024',
      category: 'blue',
      actors: 'Harvard Chan School of Public Health',
      text:       paragraph(`
        A 2024 Harvard-de Beaumont poll found that <strong>56% of Americans now say K‑12
        closures were “generally a good idea”</strong>, alongside strong majorities for masks
        and other measures. Among those who call closures a bad idea, 97% cite harm to
        learning and 91% harm to children’s mental health. Most of them say policies
        lasted too long and were politically driven. Large majorities of voters agree
        that students are still behind because of closures and remote learning. Many
        experts now say schools stayed closed longer than necessary, with limited
        benefit for viral control but substantial academic and mental‑health costs.
      `),
      sources: [source('De Beaumont', 'https://debeaumont.org/news/2024/poll-most-americans-think-key-covid-policies-were-a-good-idea')],
    }),
  ]
});
