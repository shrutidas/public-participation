import { chain, link, evidence, participation, proposal, paragraph, source } from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * Case Study 1: COVID-19 School Closures and Reopenings
 *
 * This case has no clean harm-reduction outcome that participation could
 * plausibly have improved: the epidemiological tradeoff was genuinely
 * contested and remains so. The chain therefore runs to a different
 * terminal outcome: the durability of the damage done by making a
 * high-stakes distributive decision through a channel that gave one
 * stakeholder a contract and everyone else a survey.
 * -------------------------------------------------------------------------- */

const legitimacy = chain({
  id: 'schools-legitimacy',
  label: 'Decision Legitimacy',
  track: 'legitimacy',
  nodes: {
    'Schools close in an emergency, before the risks were known': 'immovable',
    'Only one group could force the reopening decision': 'intervenable',
    'Remote learning drags on, disconnected from local COVID levels': 'intervenable',
    'Families leave public school': 'outcome',
    'Confidence in public schools collapses': 'intervenable',
    'Parents fight back with lawsuits and recalls, after the decisions': 'intervenable',
    'Chronic absence sticks': 'outcome',
    'Trust in scientists and public health falls more widely': 'outcome',
    'Test scores fall': 'outcome'
  },
  nodeDates: {
    'Schools close in an emergency, before the risks were known': '03/2020',
    'Only one group could force the reopening decision': '06/2020',
    'Remote learning drags on, disconnected from local COVID levels': '09/2020',
    'Families leave public school': '10/2020',
    'Confidence in public schools collapses': '07/2022',
    'Parents fight back with lawsuits and recalls, after the decisions': '11/2021',
    'Chronic absence sticks': '05/2022',
    'Trust in scientists and public health falls more widely': '11/2023',
    'Test scores fall': '09/2022'
  },
  purpose: paragraph(`
    This chain traces how the way school reopening decisions were made, not
    the closures themselves, damaged public confidence in schools, and what
    that damage cost in enrollment, attendance, and learning.
  `),
  outcome: paragraph(`
    Gallup <strong>confidence in public schools at 28% in 2022</strong> (29% in 2019), with a
    <strong>29-point partisan gap</strong> against a 7-point average since 1973; public school
    enrollment down 1.4 million between fall 2019 and fall 2020 (NCES), with
    remote-only instruction causally responsible for an additional
    <strong>1.1 percentage points of disenrollment</strong> (Dee et al., 2021); homeschool
    growth at 4.9% in 2024-25, more than double the pre-pandemic rate
    (Johns Hopkins Homeschool Hub); <strong>chronic absenteeism at 22% of US
    students (about 10.8 million)</strong> in 2024-25, still above pre-pandemic
    levels (RAND); <strong>age-9 NAEP scores down 5 points in reading and 7 points
    in mathematics</strong> between 2020 and 2022, the first mathematics decline in
    the assessment's history (NAEP Long-Term Trend).
  `),
  thesis: paragraph(`
    The available evidence shows parents had some voice; it was solicited as an
    aggregation of individual preferences (surveys, town halls) at a moment when
    the decision was a collective value tradeoff. Teachers' unions had a
    mechanism that converted voice into binding terms. The asymmetry documented
    was in whether input had anywhere to bind. When binding participation was
    unavailable, it relocated to recalls, litigation, and disenrollment, all of
    which arrive after the decisions.
  `),
  links: [

    link({
      id: 'S1',
      name: 'Only unions can force the terms',
      stage: 'structural',
      from: 'Schools close in an emergency, before the risks were known',
      to: 'Only one group could force the reopening decision',
      claim: paragraph(`
        Reopening was negotiated through collective bargaining, a channel with
        legal force available to one stakeholder group. Every other stakeholder
        (parents, students, community members) was routed to consultative channels
        that produced information for administrators but carried no obligation.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Marianno et al. (2022) document that collective bargaining gave
            teachers' unions a direct, legally grounded channel to negotiate
            reopening conditions with district administration: working-condition
            changes required by moves between in-person and remote instruction
            had to be negotiated with unions.
          `),
          quote: paragraph(`
            Collective bargaining creates a direct channel for teachers' unions to
            influence reopening plans as many of the working condition changes
            required by the movement from in-person to remote instruction or from
            remote back to in-person instruction are required to be negotiated with
            teachers' unions.
          `),
          grade: 'strong',
          sources: [source('Marianno, Power in a Pandemic (AERA Open)', 'https://journals.sagepub.com/doi/pdf/10.1177/23328584221074337')]
        }),
        evidence({
          finding: paragraph(`
            A five-district qualitative study (Denver, Detroit, New Orleans,
            Portland, Washington DC; Singer et al., 2023) found parent input flowed
            through <strong>surveys and virtual town halls used to elicit individual
            preferences rather than as deliberative forums</strong>. One principal:
            "There's not this group that [parents'] voice can be sent through and
            amplified, and so they're just individuals."
          `),
          quote: paragraph(`
            School and system leaders used formal but limited engagement strategies,
            such as surveys, to quickly and efficiently obtain parent input. [...]
            There's not this group that [parents'] voice can be sent through and
            amplified, and so they're just individuals.
          `),
          grade: 'moderate',
          caveat: 'Five non-representative, heavily Democratic urban districts.',
          sources: [source('Singer et al., Reopening in Five Districts (ERIC)', 'https://files.eric.ed.gov/fulltext/EJ1383169.pdf')]
        }),
        evidence({
          finding: paragraph(`
            District leaders in the same five-district study cited public health
            expertise and guidance as the basis for reopening decisions. A Portland
            district leader: "I don't need the community thinking that I am
            unilaterally deciding what's safe or what's healthy."
          `),
          quote: paragraph(`
            I don't need the community thinking that I am unilaterally deciding
            what's safe or what's healthy. I need professionals and subject matter
            experts to tell us, 'These are the guidelines.'
          `),
          grade: 'moderate',
          sources: [source('Singer et al. (EdWorkingPaper ai22-605)', 'https://edworkingpapers.com/ai22-605'),
            source('Singer et al., published version (ERIC)', 'https://files.eric.ed.gov/fulltext/EJ1383169.pdf')]
        })
      ],
      participation: [
        participation({
          date: '06/2020',
          name: 'Michigan Return to Learn Advisory Council',
          kind: 'deliberative',
          actors: 'Governor Whitmer, Michigan Department of Education, appointed stakeholders',
          description: paragraph(`
            Created by Executive Order 2020-88 (May 15, 2020); Governor Whitmer
            announced 25 appointees on June 3, 2020. Per the executive office, the
            council "will act in an advisory capacity to the Governor and the
            COVID-19 Task Force on Education," developing recommendations for a
            safe, equitable K-12 return in the fall. Appointed rather than randomly
            selected, and advisory rather than binding.
          `),
          effect: 'unmeasured',
          sources: [source('Michigan Executive Office', 'https://www.michigan.gov/whitmer/news/press-releases/2020/06/03/governor-whitmer-appoints-educators-parents-students-to-covid-19-return-to-school-advisory-council')]
        }),
        participation({
          date: '11/2020',
          name: 'Michigan deliberative panel (sortition)',
          kind: 'deliberative',
          actors: '30 randomly selected Michigan residents, Carnegie Mellon researchers',
          description: paragraph(`
            Thirty Michigan residents, recruited by a sortition algorithm developed
            in part by Carnegie Mellon researchers, convened in fall 2020 to draw up
            recommendations for tackling COVID-19; the panel "crafted 12
            recommendations and offered them to local, state and national
            policymakers." A research and civic exercise, not a decision procedure.
          `),
          effect: 'none',
          sources: [source('CMU News', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html'),
            source('Perma.cc', 'https://perma.cc/M2H9-BDVC')]
        })
      ],
      proposals: [
        proposal({
          name: 'Regional citizen assemblies that can decide',
          method: 'Citizens assembly (sortition, confederal)',
          description: paragraph(`
            From the project's 6/8 design session: citizen assemblies convened
            early (March to June 2020), selected by sortition, in which expert
            and ordinary knowledge engage. Geographically decentralized on a
            confederal model, so that different regions reach different
            decisions and the outcomes can then be compared. Decisions binding
            or quasi-binding, so that the channel available to parents,
            students, and community members carries the same kind of force
            collective bargaining carried for teachers.
          `),
          mechanism: paragraph(`
            A binding deliberative channel for non-union stakeholders changes
            the reopening decision or its perceived legitimacy.
          `),
          unstudied: true
        }),
        proposal({
          name: 'Bring the right experts together with the public',
          method: 'Minipublic with mapped expertise',
          description: paragraph(`
            From the 6/8 session: bring the public into engagement with experts
            early, and ask explicitly what specific expertise sheds light on the
            decision rather than importing generic authority: ventilation and
            building design, epidemiology, early-childhood education, and a
            mapping of public spaces with sufficient ventilation for continued
            teaching in safe conditions. The public contributes knowledge of
            local values, social conditions, and material conditions that sits
            outside the expert set.
          `),
          mechanism: paragraph(`
            Early structured engagement between experts and citizens produces
            reopening options and value tradeoffs that preference surveys do
            not surface.
          `),
          unstudied: true
        })
      ],
      gaps: [
        paragraph(`
          No US school district was identified that ran a structured deliberative
          process (minipublic, citizens' jury, sortition panel with a binding or
          quasi-binding remit) on reopening, and therefore no evaluation exists of
          whether one would have changed the decision or its perceived legitimacy.
          This counterfactual remains untested.
        `)
      ]
    }),

    link({
      id: 'S2',
      name: 'Union bargaining sets the timing',
      stage: 'compliance',
      from: 'Only one group could force the reopening decision',
      to: 'Remote learning drags on, disconnected from local COVID levels',
      claim: paragraph(`
        Where bargaining power was strongest, reopening timing tracked
        bargaining outcomes rather than local case rates: the decision channel,
        not the epidemiological situation, predicted instructional mode.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            DeAngelis and Makridis (Social Science Quarterly, 2021), using
            reopening decisions of 835 US districts, found districts
            in locations with stronger teachers' unions were substantially less
            likely to reopen in person in fall 2020, robust to four measures of
            union strength; <strong>measures of COVID-19 risk were not correlated with
            reopening decisions</strong>. The published version concludes that closures
            were "uncorrelated with the actual incidence of the virus" but
            "strongly associated with unionization."
          `),
          quote: paragraph(`
            We find that school districts in locations with stronger teachers'
            unions are less likely to reopen in person even after we control
            semiparametrically for differences in local demographic characteristics.
            [...] We do not find evidence that measures of COVID-19 risk are
            correlated with school reopening decisions.
          `),
          grade: 'moderate',
          caveat: 'Correlational cross-section of district decisions; no causal identification.',
          sources: [source('DeAngelis & Makridis, Social Science Quarterly 102(5), 2266-2284', 'https://ideas.repec.org/a/bla/socsci/v102y2021i5p2266-2284.html')]
        }),
        evidence({
          finding: paragraph(`
            In Detroit, rank-and-file union members authorized a strike if the
            district did not agree to acceptable health and safety terms; the union
            secured teacher choice of modality, and approximately <strong>95% of teachers
            started teaching remotely</strong>, which capped in-person capacity regardless
            of district or parent preferences.
          `),
          quote: paragraph(`
            the union secured teachers' ability to choose whether they would teach
            in-person or remotely for the entire year. Ultimately, 95% of teachers
            started teaching remotely.
          `),
          grade: 'moderate',
          sources: [source('Singer et al. (ERIC)', 'https://files.eric.ed.gov/fulltext/EJ1383169.pdf')]
        }),
        evidence({
          finding: paragraph(`
            A Brookings analysis (Marianno, 2021) found districts with lengthier
            collective bargaining agreements were less likely to start fall 2020
            with in-person instruction, while pandemic severity had no relationship
            with the probability of in-person reopening; it characterizes unions as
            protecting member interests rather than acting in bad faith.
          `),
          quote: paragraph(`
            school districts with lengthier collective bargaining agreements were
            less likely to start the fall 2020 semester with in-person instruction
          `),
          grade: 'moderate',
          sources: [source('Brookings', 'https://www.brookings.edu/articles/teachers-unions-scapegoats-or-bad-faith-actors-in-covid-19-school-reopening-decisions/')]
        })
      ],
      participation: [
        participation({
          date: '07/2020',
          name: 'AFT national strike authorization',
          kind: 'bargaining',
          actors: 'American Federation of Teachers (1.7M members), local affiliates',
          description: paragraph(`
            At its July 2020 virtual national convention, the AFT's executive
            council approved a resolution supporting local and state "safety
            strikes," considered case by case, if schools reopened without adequate
            safety measures. Detroit's rank-and-file members voted in August to
            authorize a strike, with 91% voting yes; the UFT president threatened
            both litigation and a strike over New York City's September reopening.
          `),
          effect: 'moved',
          sources: [
            source('NPR (UFT)', 'https://www.npr.org/sections/coronavirus-live-updates/2020/08/19/903927057/nyc-teacher-unions-prepared-to-strike-if-safety-demands-are-not-met'),
            source('Chalkbeat Detroit', 'https://www.chalkbeat.org/detroit/2020/8/19/21376419/detroit-teachers-vote-to-ok-strike-over-covid-concerns/'),
            source('The 74 (AFT resolution)', 'https://www.the74million.org/video-american-federation-of-teachers-authorizes-educator-safety-strikes-if-schools-reopen-this-fall-without-adequate-safety-measures/')
          ]
        }),
        participation({
          date: '09/2020',
          name: 'NYC UFT strike threat and reopening delay',
          kind: 'bargaining',
          actors: 'United Federation of Teachers (~75,000 NYC teachers plus other school staff), Mayor de Blasio, NYC Department of Education',
          description: paragraph(`
            On August 19, 2020, UFT president Michael Mulgrew said the union was
            "prepared to go to court and/or go on strike if we need to" over New
            York City's planned September 10 reopening, demanding COVID-19 testing
            of all students and staff within 10 days of opening, contact tracing,
            ventilation checks, protective equipment, and adequate staffing (NPR).
            On September 1, 2020, the city and the union reached an agreement that
            delayed the start of in-person instruction in the nation's largest
            school system to September 21 and added a 55-item safety checklist,
            monthly random testing of 10 to 20% of in-person students and staff,
            and a citywide closure trigger at a 3% infection rate; the deal
            averted a strike (K-12 Dive).
          `),
          effect: 'moved',
          sources: [
            source('NPR', 'https://www.npr.org/sections/coronavirus-live-updates/2020/08/19/903927057/nyc-teacher-unions-prepared-to-strike-if-safety-demands-are-not-met'),
            source('K-12 Dive', 'https://www.k12dive.com/news/nyc-uft-reopening-agreement-delays-school-start-boosts-safety/584532/')
          ]
        })
      ],
      proposals: [
        proposal({
          name: 'Let different places decide for themselves',
          method: 'Confederal decision-making',
          description: paragraph(`
            From the 6/8 session: decentralize decision-making as well as
            discussion, not only across states but within them, so that
            different decisions hold for different spaces. Getting people into
            a room to resolve differences replaces appealing to leadership at
            the top, whichever leadership that is. Regional variation also
            generates the outcome comparisons the record now lacks.
          `),
          mechanism: paragraph(`
            Decentralized, locally negotiated reopening decisions track local
            conditions better than a single channel dominated by the strongest
            organized interest.
          `),
          unstudied: true
        })
      ],
      gaps: [
        paragraph(`
          Union action is the clearest documented case in this record of
          participation that <strong>demonstrably moved a policy outcome</strong>; the
          asymmetry lies in unions being the only stakeholder group whose
          participation carried binding force. No study was identified that
          evaluates an instrument giving other stakeholder groups comparable
          binding capacity, or whether such an instrument could operate alongside
          collective bargaining.
        `)
      ]
    }),

    link({
      id: 'S3',
      name: 'Remote-only makes families leave',
      stage: 'harm',
      from: 'Remote learning drags on, disconnected from local COVID levels',
      to: 'Families leave public school',
      claim: paragraph(`
        Remote-only instruction produced disenrollment beyond the pandemic-wide
        baseline, at a rate that tracks instructional mode specifically rather
        than the pandemic generally.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Dee, Huffaker, Phillips, and Sagara (2021) found remote-only
            instruction in 2020-21 caused an additional <strong>1.1 percentage point
            enrollment decline</strong>: disenrollment rose from -2.6% to -3.7%, a
            <strong>42% increase</strong>. Effects concentrated in kindergarten and, to a
            lesser extent, elementary schools; there was <strong>no consistent evidence
            that hybrid instruction had an impact</strong> or that remote instruction
            influenced middle or high school enrollment. The national loss was
            roughly 1.1 million K-12 students.
          `),
          quote: paragraph(`
            offering remote-only instead of in-person instruction reduced enrollment
            by 1.1 percentage points (i.e., a 42 percent increase in disenrollment
            from -2.6 to -3.7 percent)
          `),
          grade: 'strong',
          caveat: 'Mode-as-treatment, district-level panel design.',
          sources: [source('Dee, Huffaker, Phillips & Sagara, NBER w29156', 'https://www.nber.org/papers/w29156')]
        }),
        evidence({
          finding: paragraph(`
            NCES reports national public school enrollment fell from 50.8M
            (fall 2019) to 49.4M (fall 2020 and 2021), then rose to 49.6M in
            fall 2022.
          `),
          quote: paragraph(`
            public school enrollment first fell from 50.8 million students in fall
            2019 to 49.4 million students in fall 2020 and 2021 before rising to
            49.6 million students in 2022.
          `),
          grade: 'strong',
          caveat: 'NCES attributes the projected 2022-2031 enrollment decline primarily to declines in the school-age population, not policy; the long-run trajectory is not attributable to closures.',
          sources: [source('NCES Condition of Education', 'https://nces.ed.gov/programs/coe/indicator/cga/public-school-enrollment')]
        }),
        evidence({
          finding: paragraph(`
            Homeschooling growth ran at roughly 2% annually pre-pandemic; in
            2024-25 it <strong>grew 4.9%</strong>, with 36% of reporting states hitting
            their highest-ever homeschool enrollment, <strong>exceeding pandemic peaks</strong>,
            four years after schools reopened (Johns Hopkins Homeschool Hub, 2025).
          `),
          quote: paragraph(`
            homeschooling continued to grow across the United States, increasing at
            an average rate of 4.9%. This is more than double the pre-pandemic
            homeschooling growth rate of around 2%.
          `),
          grade: 'moderate',
          caveat: 'Descriptive. Thirty states (including DC) report annual counts, 28 of them for 2024-25; nothing regresses homeschool uptake on district remote-learning duration. The homeschool rise also has multiple candidate drivers that no available study separates (distrust of schools, remote-work flexibility among parents, economic factors, curriculum disputes), so the growth rate is not by itself a trust measure.',
          sources: [source('Johns Hopkins Homeschool Hub', 'https://education.jhu.edu/edpolicy/policy-research-initiatives/homeschool-hub/homeschool-growth-2024-2025/')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          No study regresses homeschool uptake on district remote-learning
          duration. Dee et al. (2021) applied this design to public school
          enrollment; applying it to homeschooling would test whether longer
          remote instruction predicts higher homeschool entry.
        `)
      ]
    }),

    link({
      id: 'S4',
      name: 'Confidence splits along party lines',
      stage: 'trust',
      after: 'S2',
      from: 'Remote learning drags on, disconnected from local COVID levels',
      to: 'Confidence in public schools collapses',
      claim: paragraph(`
        Confidence in public schools fell sharply after 2020, but the fall is
        partisan and systemic rather than parental and local, and the
        contemporaneous record shows parents were largely deferential at the time.
      `),
      strength: 'contested',
      evidence: [
        evidence({
          finding: paragraph(`
            Gallup confidence in public schools: 29% (2019) → <strong>41% (2020 rally)</strong> →
            32% (2021) → <strong>28% (2022)</strong>. The decline is overwhelmingly partisan:
            Republicans 34% (2020) → 20% (2021) → <strong>14% (2022)</strong>, a 20-point fall,
            while Democrats held at 48% → 43%. <strong>The 2022 partisan gap was
            29 points</strong> against an average of 7 points since 1973.
          `),
          quote: paragraph(`
            Today's 29-point gap between Republican and Democratic confidence in
            public schools contrasts with an average seven points since the start of
            Gallup's Confidence in Institutions trend in 1973
          `),
          grade: 'strong',
          caveat: 'Repeated cross-sectional poll trend; the series does not identify what drove the partisan divergence.',
          sources: [source('Gallup', 'https://news.gallup.com/poll/394784/confidence-public-schools-turns-partisan.aspx')]
        }),
        evidence({
          finding: paragraph(`
            Gallup satisfaction with K-12 education quality fell 51% (2019) → 43%
            (2024) → <strong>35% (2025)</strong>, a record low in a series running since 1999.
          `),
          quote: paragraph(`
            A record-low 35% of Americans are satisfied with the quality of
            education that K-12 students receive in the U.S. today [...] one point
            below the previous historical low recorded in 2000 and 2023 for this
            Gallup question that dates back to 1999.
          `),
          grade: 'strong',
          sources: [source('Gallup 2025', 'https://news.gallup.com/poll/695174/record-low-satisfied-education-quality.aspx')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Parents' satisfaction with <strong>their own child's</strong> education barely moved:
            82% (2019) → 72% (2020) → 70% (2024) → 74% (2025). The decline is in
            systemic judgment, not in assessment of the school families actually use.
          `),
          quote: paragraph(`
            Roughly three-quarters of parents of K-12 students now say they are
            completely (32%) or somewhat (42%) satisfied with the education their
            oldest child is receiving.
          `),
          grade: 'strong',
          sources: [source('Gallup 2025', 'https://news.gallup.com/poll/695174/record-low-satisfied-education-quality.aspx')]
        }),
        evidence({
          finding: paragraph(`
            The PDK Poll (annual since 1969) shows <strong>no decline through 2022</strong>:
            54% of Americans gave their local schools an A or B grade in 2022,
            before falling to 43% in 2025. The measure closest in time to the
            closure decisions registered no immediate decline.
          `),
          quote: paragraph(`
            43 percent of Americans give their local schools an A or B grade (down
            from 54 percent in 2022)
          `),
          grade: 'strong',
          sources: [source('CSBA on PDK 2025', 'https://blog.csba.org/pdk-poll-25/')]
        }),
        evidence({
          finding: paragraph(`
            The longer PDK series shows 53% giving local schools an A or B in
            2013 and 44% in 2019, so the 2022 reading of 54% sat above both. The
            2025 figure of 43% is a ten-point drop from 2013.
          `),
          grade: 'strong',
          sources: [source('PDK 2019 topline', 'https://pdkpoll.org/wp-content/uploads/2020/10/PDKPoll2019Topline.pdf'),
            source('EdNC on PDK 2025', 'https://www.ednc.org/08-21-2025-how-do-people-feel-about-public-schools-and-education-policy-national-survey-gives-insight/')]
        }),
        evidence({
          finding: paragraph(`
            The five-district study (Singer et al., 2023) found <strong>no significant
            parent backlash</strong> during 2020-21: parents interviewed often held
            cautious views on reopening and were typically supportive of how schools
            were handling it. One New Orleans parent: "I can't say that they did
            wrong. They did the right thing." The authors report that parent caution
            <em>reinforced</em> district leaders' adherence to public health guidance.
          `),
          quote: paragraph(`
            Parents interviewed often held cautious views on reopening themselves
            and were typically supportive of how schools were handling it [...]
            their caution reinforced district leaders' adherence to public health
            guidance
          `),
          grade: 'moderate',
          sources: [source('Singer et al. (ERIC)', 'https://files.eric.ed.gov/fulltext/EJ1383169.pdf')]
        })
      ],
      participation: [],
      proposals: [
        proposal({
          name: 'Share local data from the first weeks',
          method: 'Open data & public communication',
          description: paragraph(`
            From the 6/8 session: make hospitalization and death rates public
            at the local level and ladder them up, starting early enough that
            the information can inform public understanding rather than arrive
            late in the process. Experts share what is and is not known from
            the start, treating other citizens as thoughtful and rational; the
            session's premise is that meaningful shared information can head
            off the worst of polarization. It took six months for a
            newspaper's tracker to become the de facto public data channel.
          `),
          mechanism: paragraph(`
            Transparent, legible local information early sustains trust in the
            deciding institutions.
          `),
          unstudied: false
        })
      ],
      gaps: [
        paragraph(`
          The defensible version of this link is narrower than a general
          parent-backlash account: the damage appears in <strong>systemic and
          partisan-asymmetric confidence measures and in revealed behavior, with a
          lag</strong>, not in contemporaneous parent-reported perceptions of
          illegitimacy. The claim that parents perceived the decision as
          illegitimate at the time is contradicted by the best available
          qualitative evidence.
        `),
        paragraph(`
          No paper was identified that uses remote-learning duration or
          instructional mode as a treatment with a <strong>trust, satisfaction,
          legitimacy, or civic outcome</strong>. Singer's 2025 review of the reopening
          literature contains no downstream-consequences section; Jacob (2024)
          explicitly disclaims the ability to test it. The single mode-as-treatment
          causal paper measures enrollment. This remains the highest-value open
          study identified.
        `)
      ]
    }),

    link({
      id: 'S5',
      name: 'Input turns into conflict',
      stage: 'participation',
      from: 'Confidence in public schools collapses',
      to: 'Parents fight back with lawsuits and recalls, after the decisions',
      claim: paragraph(`
        Public participation in school governance did not decline after 2020; it
        surged, into channels that arrive after the decision and are adversarial
        in form, with little documented effect on decisions or officeholders.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            A Brookings survey of school board members found the share of students
            in districts with "a lot" of community participation rising from
            <strong>6% pre-pandemic to 49% during 2020-22</strong>. Board-community conflict
            rose 8% → 47%. Extreme incidents (harassment, threats, disruptive
            outbursts) touched districts enrolling 62% of students, rising to 73%
            in politically purple districts.
          `),
          quote: paragraph(`
            About 6% of students were in districts that had a lot of community
            member participation in board meetings prior to the pandemic. That
            jumped to 49% in the pandemic period.
          `),
          grade: 'moderate',
          caveat: 'Single retrospective survey, ~10% response rate, recall bias. n=1,002 members across 697 districts.',
          sources: [source('Brookings school board survey', 'https://www.brookings.edu/articles/chapter-2-school-board-members-views-of-the-covid-19-and-culture-war-era/')]
        }),
        evidence({
          finding: paragraph(`
            Text classification of nearly 100,000 school board meeting videos
            across 1,594 districts and 48 states, 2010-2023 (Holman, Johnson &
            Simko), found <strong>21 of the 25 most conflictual months since 2015
            occurred after January 2020</strong>, peaking in the second half of 2021.
            Most boards experienced high conflict at some point (6% of districts
            never did), with the most intense conflict concentrated in larger urban
            and suburban districts with more white students and more political
            competition.
          `),
          quote: paragraph(`
            When ranking the 25 most conflictual months in school board politics
            since 2015, 21 of the top 25 have occurred since January 2020.
          `),
          grade: 'strong',
          caveat: 'Does not isolate closures from curriculum and book debates as the driver.',
          sources: [source('Holman, Johnson & Simko (EdWorkingPaper)', 'https://edworkingpapers.com/ai24-1102')]
        }),
        evidence({
          finding: paragraph(`
            Jacob (2024) found <strong>contested school board general elections rose
            11 percentage points</strong> (~25% relative) and <strong>turnout rose 25%</strong>,
            still 27% above pre-pandemic levels through the end of 2022. But there
            was <strong>no significant change in incumbent win rates</strong>. Districts with
            5% fall-2020 enrollment declines saw turnout rise 16.4% versus 8.4% in
            districts with no enrollment change, the closest existing quantitative
            link between exit and voice.
          `),
          quote: paragraph(`
            districts that saw no change in enrollment would have seen voter turnout
            increase by 8.4% on average, while districts with enrollment declines of
            5% would have realized voter turnout increases of 16.4% on average.
          `),
          grade: 'strong',
          sources: [source('Jacob (EdWorkingPaper ai24-906)', 'https://edworkingpapers.com/sites/default/files/ai24-906.pdf')]
        })
      ],
      participation: [
        participation({
          date: '02/2021',
          name: 'City of San Francisco v. SFUSD',
          kind: 'litigation',
          actors: 'SF City Attorney Dennis Herrera, Board of Education, Superintendent Matthews',
          description: paragraph(`
            City Attorney Dennis Herrera sued the San Francisco Board of Education,
            SFUSD, and Superintendent Vincent Matthews, "demanding the restart of
            in-person instruction for more than 52,000 students." NBC News
            reported it could be "the first such case in the nation." On February
            9, 2021, the city expanded the suit, alleging that the district was
            violating students' right under the California Constitution to attend
            public school and discriminating against them on the basis of wealth.
          `),
          effect: 'partial',
          sources: [source('NBC News', 'https://www.nbcnews.com/news/us-news/san-francisco-sues-its-own-school-district-demands-restart-person-n1256639'),
            source('SF City Attorney', 'https://www.sfcityattorney.org/2021/02/09/herrera-expands-lawsuit-adds-constitutional-violations-against-sf-school-district/')]
        }),
        participation({
          date: '2021',
          name: 'National wave of school board recall attempts',
          kind: 'electoral',
          actors: 'Parent organizers, local recall committees, school board members',
          description: paragraph(`
            <strong>84 recall efforts</strong> targeting <strong>215 board members</strong>, the highest
            single-year total Ballotpedia has tracked, against a 2009-2020 average of
            28 efforts against ~64 members. 57.1% were pandemic-related. But of the 16
            recall elections actually held, <strong>only one member was removed</strong>; 119 efforts
            died before reaching a ballot.
          `),
          effect: 'none',
          sources: [source('Ballotpedia', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/')]
        }),
        participation({
          date: '02/2022',
          name: 'San Francisco school board recall',
          kind: 'electoral',
          actors: 'SF voters (36% turnout), three recalled commissioners',
          description: paragraph(`
            All three commissioners (Collins, López, Moliga) were removed on
            February 15, 2022, by margins of <strong>69-76%</strong> on 36% turnout. Recall
            supporters cited schools remaining closed in 2020-21 while other Bay
            Area districts and private schools opened, and board attention to school
            renaming and Lowell admissions policy while students struggled with
            distance learning.
          `),
          effect: 'moved',
          sources: [source('2022 SF Board of Education recall', 'https://en.wikipedia.org/wiki/2022_San_Francisco_Board_of_Education_recall_elections')]
        })
      ],
      proposals: [
        proposal({
          name: 'Give the public a real say before the decision',
          method: 'Standing community process with binding elements',
          description: paragraph(`
            The design implication the 6/8 session drew from this link: the
            recalls, suits, and board conflict documented here are participation
            arriving after the decision, in adversarial form. A standing channel
            in which parent and community input binds before the decision is the
            proposed alternative; the session flagged that teachers' unions and
            other organized groups were driving decisions in one direction or
            the other while everyone else held a survey.
          `),
          mechanism: paragraph(`
            A real say before the decision reduces adversarial participation after it, and the trust damage that follows.
          `),
          unstudied: true
        })
      ],
      gaps: [
        paragraph(`
          No study was identified that examines whether districts that experienced
          recalls or reopening litigation saw any subsequent change in parent
          trust, enrollment, or engagement. Whether adversarial participation
          repairs trust has not been tested; if it does not, that is an argument
          for building the binding channel upstream of the decision.
        `)
      ]
    }),

    link({
      id: 'S6',
      name: 'Missing school becomes normal',
      stage: 'harm',
      after: 'S4',
      from: 'Confidence in public schools collapses',
      to: 'Chronic absence sticks',
      claim: paragraph(`
        Post-pandemic chronic absenteeism rises with how long students were remote, is associated with the quality of school relationships including teacher-reported relationships with parents, and appears in cohorts that
        entered school after closures ended, a pattern consistent with a
        family-level shift in attendance norms rather than students' own
        disrupted experience.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            Singer (EdWorkingPaper ai25-1196) finds remote learning in 2020-21 led
            to persistent post-pandemic attendance declines, with generally larger
            negative effects for students exposed to longer periods of remote
            learning: no significant decline at 1-3 months of remote-only
            instruction, meaningful declines at 4 or more months, and the largest
            declines at 7-9 months.
          `),
          quote: paragraph(`
            remote learning in 2020-21 led to persistent declines in post-pandemic
            attendance, with generally larger negative effects for students exposed
            to longer periods of remote learning
          `),
          grade: 'moderate',
          sources: [source('EdWorkingPaper ai25-1196', 'https://edworkingpapers.com/sites/default/files/ai25_1196_v4.pdf')]
        }),
        evidence({
          finding: paragraph(`
            In Chicago Public Schools, the share of students chronically absent
            nearly doubled, from <strong>24% in 2019 to 45% in 2022</strong> (UChicago
            Consortium). Students' reported connectedness to school was particularly
            strongly related to absences in post-pandemic years for high school
            students, though it was not significantly related before the pandemic.
          `),
          quote: paragraph(`
            In the Chicago Public Schools (CPS) the percentage of students who were
            chronically absent nearly doubled from 24% in 2019 to 45% in 2022.
          `),
          grade: 'moderate',
          sources: [source('UChicago Consortium, Connection, Trust, and Learning', 'https://consortium.uchicago.edu/sites/default/files/2026-01/Connection,%20Trust,%20and%20Learning-Jan26-Consortium.pdf')]
        }),
        evidence({
          finding: paragraph(`
            The same UChicago Consortium analysis, using 5Essentials school
            climate surveys (2017-2019 against 2022-2024, grades 6-11), found
            <strong>teachers' reports of their relationships with parents</strong>
            (teacher-parent trust, parent involvement in school, parent influence
            on decision making) significantly related to school absence rates in
            both middle grades and high schools, with the associations
            <strong>stronger in post-pandemic years than before the pandemic</strong>.
          `),
          quote: paragraph(`
            Teachers' reports of their relationships with parents were also
            significantly related to absence rates in their school in both middle
            grades and high schools. [...] even stronger in post-pandemic years
            than before the pandemic.
          `),
          grade: 'moderate',
          caveat: 'School-level association; direction is not identified. Consistent with a trust-based account of absenteeism, alongside the changed-attendance-norm account below.',
          sources: [source('UChicago Consortium, Connection, Trust, and Learning', 'https://consortium.uchicago.edu/sites/default/files/2026-01/Connection,%20Trust,%20and%20Learning-Jan26-Consortium.pdf')]
        }),
        evidence({
          finding: paragraph(`
            AEI's absenteeism tracker (Malkus) reports that 2025 kindergartners,
            many not yet born when closures began, had <strong>chronic absenteeism rates
            48% above the 2019 baseline</strong>; first, second, and third graders,
            none of whom experienced schooling during the first two pandemic
            school years, showed <strong>increases of 58, 64, and 70 percent</strong>
            respectively over their 2019 counterparts. Elevation is not
            disproportionate among cohorts that were in school during the
            pandemic, which the report reads as a changed attendance norm rather
            than individual disruption.
          `),
          quote: paragraph(`
            In 2025, kindergarten students [...] had chronic absenteeism rates 48
            percent above the 2019 baseline. Likewise, first, second, and third
            graders [...] show respective increases of 58, 64, and 70 percent.
            [...] Absenteeism is still up for all students, not mainly, or even
            disproportionately, cohorts that were in school during the pandemic.
            This strongly suggests that the pandemic has changed how American
            families and schools approach school attendance.
          `),
          grade: 'moderate',
          sources: [source('AEI 2025 tracker', 'https://www.aei.org/research-products/report/from-attendance-crisis-to-chronic-condition-tracking-post-pandemic-chronic-absenteeism-into-2025/')]
        }),
        evidence({
          finding: paragraph(`
            A RAND district survey (Diliberti et al., 2025; 245 districts)
            estimated that roughly <strong>22% of US K-12 students (10.8 million)</strong>
            were chronically absent in 2024-25, below the estimated 28% of
            2021-22 but still above the pre-pandemic rate of about 15%. In a
            companion survey of 1,551 youths ages 12-21, <strong>26% said missing
            three weeks of school is "mostly OK"</strong> and that students can make up
            what they missed.
          `),
          quote: paragraph(`
            Our updated estimate for the 2024–2025 school year is roughly 22
            percent (10.8 million students). [...] still above the prepandemic
            rate of about 15 percent. [...] one-quarter of youths (26 percent)
            said that missing three weeks of school is 'mostly OK' and that
            students can make up what they missed online or in person.
          `),
          grade: 'moderate',
          caveat: 'District-panel and youth-panel surveys, not causal designs. The youth-indifference finding points to a competing explanation (a changed attendance norm) alongside any trust-based account of persistent absenteeism.',
          sources: [source('RAND RRA956-34', 'https://www.rand.org/pubs/research_reports/RRA956-34.html')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          The elevation among 2025 kindergartners, a cohort born after the
          closures, is consistent with a norm shift transmitted by parents
          rather than by students' own disrupted schooling, but no study
          identifies the transmission channel. Parent trust, remote-work
          patterns, economic factors, and a general attendance-norm change
          remain unseparated as drivers of persistent absence.
        `)
      ]
    }),

    link({
      id: 'S7',
      name: 'Distrust spreads to science',
      stage: 'trust',
      after: 'S4',
      from: 'Confidence in public schools collapses',
      to: 'Trust in scientists and public health falls more widely',
      claim: paragraph(`
        The hypothesis that the school closure conflict fed the broader decline
        in trust in scientists and public health has not been tested. <strong>No study
        was identified that supports it</strong>, and the available trend evidence
        points against a simple version: scientist confidence partially
        recovered while school confidence did not.
      `),
      strength: 'unstudied',
      evidence: [],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Pew confidence in scientists fell from 87% (April 2020) and had
            <strong>recovered to 77% by January 2026</strong>. The recovery runs opposite
            to the Gallup school-confidence series, which shows no comparable
            rebound over the same period.
          `),
          quote: paragraph(`
            At the onset of the COVID-19 pandemic in April 2020, 87% of U.S. adults
            said they had at least a fair amount of confidence in scientists to act
            in the public's best interests. [...] 77% of U.S. adults now say they
            have a great deal (28%) or fair amount of confidence (49%) in scientists
          `),
          grade: 'strong',
          sources: [source('Pew 2026', 'https://www.pewresearch.org/science/2026/01/15/americans-confidence-in-scientists/')]
        }),
        evidence({
          finding: paragraph(`
            The low point came in October 2023, when Pew found <strong>73%</strong> of
            U.S. adults had a great deal or fair amount of confidence in scientists.
          `),
          quote: paragraph(`
            73% of U.S. adults have a great deal or fair amount of confidence in
            scientists to act in the public's best interests
          `),
          grade: 'strong',
          sources: [source('Pew 2023', 'https://www.pewresearch.org/science/2023/11/14/americans-trust-in-scientists-positive-views-of-science-continue-to-decline/')]
        }),
        evidence({
          finding: paragraph(`
            Pew's reports on the decline do not analyze schools, education policy,
            or closures as a factor; the 2023 report records that large shares of
            Republicans said the pandemic response gave too little priority to
            "meeting the needs of K-12 students" but does not connect the trust
            decline to school policy.
          `),
          quote: paragraph(`
            large shares said too little priority was given to respecting
            individuals' choices, supporting businesses and economic activity, and
            meeting the needs of K-12 students
          `),
          grade: 'strong',
          sources: [source('Pew 2023', 'https://www.pewresearch.org/science/2023/11/14/americans-trust-in-scientists-positive-views-of-science-continue-to-decline/')]
        }),
        evidence({
          finding: paragraph(`
            The largest recent academic treatment (PLOS One, 2025; 10,000
            respondents across more than 25 countries) finds information source is
            the strongest predictor of trust change and does not examine education
            policy at all.
          `),
          quote: paragraph(`
            The strongest predictor of trust change was the source of scientific
            information. Those relying on independent researchers show slight trust
            increases, whereas consumers of traditional media experienced the
            largest decline.
          `),
          grade: 'strong',
          sources: [source('PLOS One 2025', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328075')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          The circumstantial overlap is documented: the Republican-specific decline
          in school confidence and the Republican-specific deficit in scientist
          confidence describe the same population. No study was identified that
          connects them empirically; the link remains an untested hypothesis, not a
          reported finding.
        `)
      ]
    }),

    link({
      id: 'S8',
      name: 'Remote learning lowers test scores',
      stage: 'harm',
      after: 'S2',
      from: 'Remote learning drags on, disconnected from local COVID levels',
      to: 'Test scores fall',
      claim: paragraph(`
        Longer remote instruction predicted larger declines in measured
        achievement, with the losses concentrated in high-poverty districts
        and districts serving larger Black student populations.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            NAEP Long-Term Trend results showed average scores for age 9 students
            declined <strong>5 points in reading and 7 points in mathematics</strong>
            between 2020 and 2022: the largest reading decline since 1990 and the
            <strong>first mathematics decline in the assessment's history</strong>.
          `),
          quote: paragraph(`
            Average scores for age 9 students in 2022 declined 5 points in reading
            and 7 points in mathematics compared to 2020. This is the largest
            average score decline in reading since 1990, and the first ever score
            decline in mathematics.
          `),
          grade: 'strong',
          caveat: 'Measures the national decline, not its attribution to instructional mode; the two studies below supply the mode link.',
          sources: [source('NAEP Long-Term Trend 2022', 'https://www.nationsreportcard.gov/highlights/ltt/2022/')]
        }),
        evidence({
          finding: paragraph(`
            Goldhaber, Kane, McEachin, Morton, Patterson, and Staiger (2022), using
            testing data from <strong>2.1 million students in 10,000 schools across 49
            states</strong>, found remote instruction was a primary driver of widening
            achievement gaps by race and school poverty; math gaps did not widen in
            areas that remained in person.
          `),
          quote: paragraph(`
            Using testing data from 2.1 million students in 10,000 schools in 49
            states (plus D.C.), we investigate the role of remote and hybrid
            instruction in widening gaps in achievement by race and school poverty.
          `),
          grade: 'strong',
          caveat: 'Comparison of within-district achievement growth across instructional modes; not a randomized design.',
          sources: [source('Goldhaber et al., NBER w30010', 'https://www.nber.org/papers/w30010')]
        }),
        evidence({
          finding: paragraph(`
            Jack, Halloran, Okun, and Oster (2023), using 2020-21 test data from 11
            states, found pass rates declined <strong>12.8 percentage points in math and
            6.8 in English language arts</strong> on average, with significantly smaller
            declines in districts offering full in-person instruction; the value of
            in-person learning was larger in districts with larger Black student
            populations.
          `),
          quote: paragraph(`
            Pass rates declined from 2019 to 2021: an average of 12.8 percentage
            points in math and 6.8 in English language arts (ELA). [...] we
            estimate that districts with full in-person learning had significantly
            smaller declines (13.4 pp in math, 8.3 in ELA). The value to in-person
            learning was larger for districts with larger populations of Black
            students.
          `),
          grade: 'moderate',
          caveat: 'Cross-district association between schooling mode and pass rates with controls; schooling mode was not randomly assigned.',
          sources: [source('Jack et al., AER: Insights 2023', 'https://www.aeaweb.org/articles?id=10.1257/aeri.20210748')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          Post-2022 assessments confound two channels: the direct effect of
          instructional mode and the indirect effect of elevated absenteeism (S6).
          No study separates their contributions to measured learning loss.
        `)
      ]
    })

  ]
});

export default [legitimacy];
