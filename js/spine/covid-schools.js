import {
  spineData, mechanism, impact, spineProposal, outcome, claim, supportingCase,
  evidence, paragraph, source
} from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * COVID-19 School Closures: spine-layer data.
 *
 * Mechanisms that already existed and should have worked, measured impacts
 * with causal arrows to specific timeline events, and the 6/8 workshop
 * proposals anchored where they would intervene, each with evidence at every
 * link of its causal chain. Research pass: research/schools-proposal-chains.md
 * (August 2026). Quotes are verbatim from fetched sources.
 * -------------------------------------------------------------------------- */

export default spineData({
  slug: 'covid-schools',

  mechanisms: [
    mechanism({
      name: 'Local school boards and public comment',
      actor: 'Elected boards, district administrations',
      failure: 'acted-no-effect',
      note: 'Every district had a public comment channel, but it only collected opinions and nothing required boards to act on them',
      detail: paragraph(`
        Every school district had a formal decision venue with public comment. The channel was open during the spring and summer 2020 decisions. Any resident could speak, and elected boards heard them. The channel was advisory only. Nothing required boards to act on what they heard. Participation surged after the decisions, mostly in adversarial form. The share of students in high-participation districts rose from 6% to 49% between 2020 and 2022, and 21 of the 25 most conflictual months on record came after January 2020. The record does not show whether public comment changed any board’s decision.
      `),
      anchors: ['48 states left reopening modality'],
      sources: [
        source('Brookings school board survey', 'https://www.brookings.edu/articles/chapter-2-school-board-members-views-of-the-covid-19-and-culture-war-era/'),
        source('Holman, Johnson & Simko (EdWorkingPaper)', 'https://edworkingpapers.com/ai24-1102')
      ]
    }),
    mechanism({
      name: 'State advisory councils',
      actor: 'Governors, appointed educators, parents, health officials',
      failure: 'acted-no-effect',
      note: 'The council met early enough to inform Michigan\u2019s plans for fall 2020, but there is no clear evidence showing whether it changed the final decision or improved outcomes',
      detail: paragraph(`
        Michigan created the Return to School Advisory Council by executive order signed on May 15, 2020, and its members were appointed on June 3. The council helped produce the state\u2019s Return to School Roadmap. Its members were appointed to represent parents, students, educators, or communities, but they could only make recommendations. The available public record does not clearly show which recommendations the state adopted. Some critics said the state did not follow the council\u2019s advice.
      `),
      anchors: ['Return to School Roadmap'],
      sources: [source('Michigan Executive Order 2020-88', 'https://content.govdelivery.com/attachments/MIEOG/2020/05/15/file_attachments/1452673/EO%202020-88.pdf')]
    }),
    mechanism({
      name: 'Parent surveys and polls',
      actor: 'Districts, KFF, Gallup',
      failure: 'acted-no-effect',
      note: 'Surveys told officials what parents wanted in time for the fall decisions, but nothing required districts to act on the results',
      detail: paragraph(`
        Districts, the Kaiser Family Foundation (KFF), and Gallup surveyed parents in summer 2020, before the fall decisions. KFF found 60% of parents preferred opening later. Gallup found parents split 36-28-36 across in-person, remote, and hybrid. The national pollsters surveyed representative samples of parents. The surveys could only inform. Nothing required districts to follow the results. Decision studies found district choices tracked partisanship and union strength, not surveyed preferences or local case rates. No study measures whether any district changed its plan because of a survey.
      `),
      anchors: ['60% of parents'],
      sources: [
        source('KFF', 'https://www.kff.org/covid-19/kff-health-tracking-poll-july-2020'),
        source('Hartney and Finger 2020', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf')
      ]
    }),
    mechanism({
      name: 'Union collective bargaining',
      actor: 'AFT, NEA, local affiliates',
      failure: 'worked',
      note: 'Bargaining produced enforceable agreements because districts had to negotiate, but only teachers held that channel',
      detail: paragraph(`
        Teachers unions bargained over reopening terms in summer 2020, before the fall decisions. The American Federation of Teachers (AFT), the National Education Association (NEA), and their local affiliates took part, and members elected their own leaders. Bargaining had real force because districts had to negotiate with the unions. In New York City, the United Federation of Teachers (UFT) strike threat delayed reopening from September 10 to September 21 and set testing terms and a closure trigger. Detroit’s agreement let teachers choose their own modality. Only teachers held this channel. Parents, students, and other residents had no channel that districts had to honor. No study measures whether the bargained terms improved health or learning outcomes.
      `),
      anchors: ['delayed in-person instruction to September 21', 'safety strikes'],
      sources: [source('K-12 Dive', 'https://www.k12dive.com/news/nyc-uft-reopening-agreement-delays-school-start-boosts-safety/584532/')]
    }),
    mechanism({
      name: 'Elections and recalls',
      actor: 'Voters, recall committees',
      failure: 'acted-no-effect',
      note: 'Voters could remove board members, but only a year or more after the decisions were made',
      detail: paragraph(`
        Voters could recall school board members or vote them out at the next election. Any registered voter could take part, and recall committees gathered the signatures. The channel had decision-making power over who held office, but no power over decisions already made. It arrived long after the decisions it judged. Of 84 recall efforts in 2021, 16 reached a ballot and voters removed one member. San Francisco voters removed all three commissioners by 69 to 76% margins in February 2022, 14 to 20 months after the fall 2020 decisions. No mechanism let voters shape the decisions before boards made them. The record does not show whether the threat of recall changed later decisions.
      `),
      anchors: ['recalled three Board of Education members'],
      sources: [source('Ballotpedia', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/')]
    }),
    mechanism({
      name: 'Litigation',
      actor: 'City attorneys, parent plaintiffs, courts',
      failure: 'partial',
      answer: 'The evidence is mixed',
      note: 'Lawsuits contested the decisions months after the fact, and the record cannot separate their effect from vaccination and state politics',
      detail: paragraph(`
        San Francisco’s city attorney sued the city’s own school district in February 2021, demanding a return to in-person instruction for more than 52,000 students. NBC News reported it could be the first such case in the nation. Parent plaintiffs filed suits elsewhere. Courts had decision-making power over the claims before them. The district partially reopened after the suit. Teacher vaccination and state politics moved at the same time, so the record cannot separate the lawsuit’s effect. Like recalls, litigation came after the fact. It contested decisions made in mid-2020 from February 2021 onward.
      `),
      anchors: ['sued the city\'s own school district'],
      sources: [source('NBC News', 'https://www.nbcnews.com/news/us-news/san-francisco-sues-its-own-school-district-demands-restart-person-n1256639')]
    }),
    mechanism({
      name: 'Professional and federal guidance',
      actor: 'AAP, CDC',
      failure: 'acted-no-effect',
      note: 'Expert guidance arrived, but districts followed politics and union strength instead',
      detail: paragraph(`
        The American Academy of Pediatrics (AAP) urged policymakers in June 2020 to start from the goal of physical presence in school, ahead of the fall decisions. The Centers for Disease Control and Prevention (CDC) published its Operational Strategy in February 2021, eleven months after closures began. Appointed experts wrote both documents. The guidance was advisory. Districts could follow it or not. Politicization in July 2020 damaged the federal channel’s neutrality. Decision studies found district modality tracked partisanship and bargaining strength, not guidance or local case rates. No mechanism existed for public input into the guidance.
      `),
      anchors: ['physical presence in school', 'Operational Strategy'],
      sources: [
        source('Hartney and Finger 2020', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf'),
        source('Grossmann et al.', 'https://journals.sagepub.com/doi/10.3102/0013189X211048840')
      ]
    }),
    mechanism({
      name: 'Public data infrastructure',
      actor: 'Federal statistics agencies',
      failure: 'no-mechanism',
      note: 'No federal dataset tracked school status, and a university team built one 18 months late',
      detail: paragraph(`
        No federal dataset tracked which schools were open, hybrid, or remote during 2020-21. Federal data covered only the largest districts. The COVID-19 School Data Hub, a small grant-funded team at Brown University, launched in September 2021 with school-level mode data for over 55,000 schools in 30 states. It arrived 18 months after closures began. The team set its own scope, and no public body had to use its data. The record does not show whether any district used the data to change a decision. No study measures what earlier data would have changed.
      `),
      anchors: ['49 states suspended in-person'],
      sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
    })
  ],

  impacts: [
    impact({
      name: 'Public school enrollment fell',
      found: '08/2021',
      headline: paragraph(`
        Public school enrollment fell by 1.4 million students between fall 2019 and
        fall 2020 and has not recovered. Remote-only instruction caused a
        measurable share of the exit.
      `),
      measures: paragraph(`
        National public school enrollment fell from 50.8 million in fall 2019 to
        49.4 million in fall 2020 and stayed near that level. Remote-only
        instruction caused 1.1 percentage points of additional disenrollment,
        concentrated in kindergarten and elementary grades.
      `),
      from: [
        { anchor: '24% of districts were fully online', strength: 'strong', note: 'Remote-only mode caused measurable exit' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Dee, Huffaker, Phillips, and Sagara (National Bureau of Economic Research working paper w29156, 2021) measured how instructional mode changed enrollment across states. They found that “remote-only instead of in-person instruction reduced enrollment by 1.1 percentage points”.
          `),
          grade: 'strong',
          quote: 'remote-only instead of in-person instruction reduced enrollment by 1.1 percentage points',
          sources: [source('Dee et al. 2021', 'https://www.nber.org/papers/w29156')]
        }),
        evidence({
          finding: paragraph(`
            The National Center for Education Statistics (NCES) enrollment series shows 50.8 million students in fall 2019 and 49.4 million in fall 2020, then 49.4 to 49.6 million through 2022.
          `),
          grade: 'strong',
          sources: [source('National Center for Education Statistics', 'https://nces.ed.gov/programs/coe/indicator/cga/public-school-enrollment')]
        })
      ]
    }),
    impact({
      name: 'Chronic absenteeism stayed high',
      found: '08/2025',
      headline: paragraph(`
        Chronic absenteeism stayed high long after schools reopened. Roughly
        22% of students nationally missed a tenth or more of school days
        through 2024-25.
      `),
      measures: paragraph(`
        Chronic absenteeism means missing 10 percent or more of school days. It
        stayed high through 2024-25, at roughly 22% of students nationally. In
        about half of surveyed urban districts, more than 30% of students were
        chronically absent. Kindergartners who were never in school during
        closures show rates 48% above the 2019 baseline.
      `),
      from: [
        { anchor: '48 states left reopening modality', strength: 'moderate', note: 'Dose-response by months of remote exposure; norm-shift channel unstudied' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            RAND’s 2025 district survey and the American Enterprise Institute’s 2026 tracking report both find chronic absence still high in 2024-25. Roughly 22 percent of students were chronically absent, against about 15 percent before the pandemic.
          `),
          grade: 'moderate',
          sources: [
            source('RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA956-34.html'),
            source('American Enterprise Institute', 'https://www.aei.org/research-products/report/from-attendance-crisis-to-chronic-condition-tracking-post-pandemic-chronic-absenteeism-into-2025/')
          ]
        }),
        evidence({
          finding: paragraph(`
            Singer finds that the longer a district stayed remote, the worse its students’ attendance afterward. Districts saw no significant attendance decline after 1-3 months of remote-only instruction, meaningful declines after 4 or more months, and the largest declines after 7-9 months. Remote learning in 2020-21 “led to persistent declines in post-pandemic attendance, with generally larger negative effects for students exposed to longer periods of remote learning”.
          `),
          grade: 'moderate',
          quote: 'remote learning in 2020-21 led to persistent declines in post-pandemic attendance, with generally larger negative effects for students exposed to longer periods of remote learning',
          sources: [
            source('Singer 2026', 'https://edworkingpapers.com/sites/default/files/ai25_1196_v4.pdf')
          ]
        }),
        evidence({
          finding: paragraph(`
            The University of Chicago Consortium finds that teachers’ reports of their relationships with parents were “significantly related to absence rates in their school in both middle grades and high schools”. The relationship was “even stronger in post-pandemic years than before the pandemic”.
          `),
          grade: 'moderate',
          quote: 'Teachers\' reports of their relationships with parents were also significantly related to absence rates in their school in both middle grades and high schools. [...] even stronger in post-pandemic years than before the pandemic.',
          sources: [
            source('University of Chicago Consortium on School Research', 'https://consortium.uchicago.edu/sites/default/files/2026-01/Connection,%20Trust,%20and%20Learning-Jan26-Consortium.pdf')
          ]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            One quarter of surveyed youth said missing three weeks of school is mostly OK. That points toward indifference, not lost trust, as a competing explanation.
          `),
          grade: 'moderate',
          sources: [source('RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA956-34.html')]
        })
      ]
    }),
    impact({
      name: 'Confidence in public schools fell',
      found: '07/2022',
      headline: paragraph(`
        Confidence in public schools fell to 28% by 2022. The decline came
        almost entirely from Republicans, while parents kept rating their own
        schools far better than the institution.
      `),
      measures: paragraph(`
        Gallup’s measure of confidence in public schools fell from its 2020
        rally to 28% by 2022. Republican confidence fell from 34% to 14% while
        Democratic confidence held. The partisan gap reached 29 points, against
        a 7-point historical average.
      `),
      from: [
        { anchor: 'attacked CDC guidance', strength: 'moderate', note: 'Politicization of reopening precedes the partisan split' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Gallup’s confidence series shows the decline and its partisan
            concentration. Parents rated their own schools far better than the
            institution nationally throughout.
          `),
          grade: 'moderate',
          sources: [source('Gallup', 'https://news.gallup.com/poll/394784/confidence-public-schools-turns-partisan.aspx')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Parents typically supported how their schools handled the pandemic
            in 2020-21, and PDK local school grades did not fall through 2022.
            The damage appears later in partisan, systemic measures, not in the
            judgments parents made at the time.
          `),
          grade: 'moderate',
          sources: [source('Chalkbeat 2023 polling roundup', 'https://www.chalkbeat.org/2023/7/25/23806247/parents-schools-covid-anger-polling-satisfaction/')]
        })
      ]
    }),
    impact({
      name: 'National test scores fell',
      found: '05/2022',
      headline: paragraph(`
        National test scores fell sharply after the COVID-19 pandemic, but
        recent studies show the decline began years earlier.
      `),
      measures: paragraph(`
        National Assessment of Educational Progress (NAEP) long-term trend
        age-9 scores fell 5 points in reading and 7 in mathematics from 2020 to
        2022, the first mathematics decline in the series. Districts with
        longer remote instruction show larger declines.
      `),
      from: [
        { anchor: '24% of districts were fully online', strength: 'strong', note: 'Remote mode drove larger achievement declines' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Goldhaber et al. (2022) and Jack et al. (2023) tie remote and hybrid
            mode to larger achievement declines across states
            and districts.
          `),
          grade: 'strong',
          sources: [
            source('Goldhaber et al. 2022', 'https://www.nber.org/papers/w30010'),
            source('Jack et al. 2023', 'https://www.aeaweb.org/articles?id=10.1257/aeri.20210748')
          ]
        }),
        evidence({
          finding: paragraph(`
            Sweden kept primary schools open and saw no learning loss
            across 97,073 students in grades 1-3, and even “students
            from low socio-economic backgrounds were not especially
            affected”.
          `),
          grade: 'strong',
          quote: 'students from low socio-economic backgrounds were not especially affected',
          sources: [
            source('Hallin et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/35677729/')
          ]
        }),
        evidence({
          finding: paragraph(`
            NAEP long-term trend age-9 scores fell 5 points in reading and 7 in
            mathematics from 2020 to 2022, the first mathematics decline
            in the series.
          `),
          grade: 'strong',
          sources: [
            source('National Assessment of Educational Progress', 'https://www.nationsreportcard.gov/highlights/ltt/2022')
          ]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Education Recovery Scorecard data through 2025, reported by the New York Times and reposted by Harvard’s Center for Education Policy Research, show scores stopped climbing in the mid-2010s. Reading losses from 2017 to 2019 matched the pandemic-era losses: “From 2017 to 2019, students lost as much ground in reading as they did during the pandemic”. Part of the post-2020 gap reflects this longer decline, not closure policy. The studies tying remote instruction to larger losses compare districts over the same period, so the earlier decline does not weaken them.
          `),
          grade: 'moderate',
          quote: 'From 2017 to 2019, students lost as much ground in reading as they did during the pandemic',
          sources: [source('Harvard Center for Education Policy Research', 'https://cepr.harvard.edu/news/2026/05/why-us-test-scores-are-generation-long-decline')]
        })
      ]
    }),
    // Added at the reviewers' request: the infection and death side of the
    // closure question, including the studies where closures cut deaths.
    impact({
      name: 'Studies disagree on whether closing schools cut COVID-19 infections and deaths',
      found: '07/2020',
      headline: paragraph(`
        Studies disagree on how much closing schools cut COVID-19 infections
        and deaths. Open schools raised infections among teachers, and the
        effect on the wider community ranged from large to none.
      `),
      measures: paragraph(`
        When US states closed schools in spring 2020, weekly COVID-19 deaths
        fell 58 percent, but states issued other orders at the same time. In
        Sweden, teachers at schools that stayed open caught COVID-19 at twice
        the rate of teachers who moved online, and parents' rates rose a little. In the US,
        people living with a child in in-person school had higher COVID-19
        risk, and the gap disappeared where schools used seven or more safety
        measures. In fall 2020, US counties that reopened in person saw no
        change in cases in most regions, but a rise of 9.8 to 21.3 cases per
        100,000 people per week in the South. In Japan, matched towns showed
        no drop in cases from closing schools.
      `),
      from: [
        { anchor: '49 states suspended in-person', strength: 'contested', note: 'Closures came with stay-at-home and business orders; studies split on their separate effect' }
      ],
      evidence: [
        evidence({
          headline: 'US states that closed schools in spring 2020 saw COVID-19 cases and deaths fall, most of all where they closed early.',
          finding: paragraph(`
            Auger et al. (2020) compared all 50 states before and after closure. Closure went with a 62 percent weekly drop in cases and a 58 percent weekly drop in deaths. The authors conclude that “school closure in the US was temporally associated with decreased COVID-19 incidence and mortality”.
          `),
          grade: 'moderate',
          quote: 'school closure in the US was temporally associated with decreased COVID-19 incidence and mortality',
          caveat: 'Every state closed schools within a few weeks, alongside other orders. The authors write that “it remains possible that some of the reduction may have been related to other concurrent nonpharmaceutical interventions.”',
          sources: [source('Auger et al. 2020', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7391181/')]
        }),
        evidence({
          headline: 'Swedish teachers whose schools stayed open caught COVID-19 at twice the rate of teachers whose schools moved online.',
          finding: paragraph(`
            Sweden kept lower-secondary schools open and moved upper-secondary schools online. Vlachos, Hertegård and Svaleryd (2021) linked every student and teacher to their families. “Among lower-secondary teachers, the infection rate doubled relative to upper-secondary teachers.” Their partners also had more infections. Parents saw only a small rise.
          `),
          grade: 'strong',
          quote: 'Among lower-secondary teachers, the infection rate doubled relative to upper-secondary teachers',
          caveat: 'The same study found that keeping schools open had “minor consequences for the overall transmission of SARS-CoV-2 in society.”',
          sources: [source('Vlachos et al. 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7936333/')]
        }),
        evidence({
          headline: 'US households with a child in in-person school reported more COVID-19, unless the school used many safety measures.',
          finding: paragraph(`
            Lessler et al. (2021) used a national online survey. People living with a child in in-person school had higher COVID-19 risk. The added risk faded as schools added masks for teachers, daily symptom checks, and other measures; “when seven or more mitigation measures are reported, a significant relationship is no longer observed”.
          `),
          grade: 'moderate',
          quote: 'when seven or more mitigation measures are reported, a significant relationship is no longer observed',
          caveat: 'Self-reported symptoms and tests from a survey, not confirmed case records.',
          sources: [source('Lessler et al. 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8168618/')]
        })
      ],
      counterEvidence: [
        evidence({
          headline: 'US counties that reopened schools in person in fall 2020 saw no rise in cases in most regions, but did in the South.',
          finding: paragraph(`
            Ertem et al. (2021) followed counties for 12 weeks after school started. Case rates “were not statistically different in counties with in-person learning versus remote school modes in most regions of the United States”. In the South, in-person and hybrid counties added 9.8 to 21.3 cases per 100,000 people per week.
          `),
          grade: 'moderate',
          quote: 'SARS-CoV-2 incidence rates were not statistically different in counties with in-person learning versus remote school modes in most regions of the United States',
          caveat: 'Covers July to September 2020, before the Delta variant.',
          sources: [source('Ertem et al. 2021', 'https://www.nature.com/articles/s41591-021-01563-8')]
        }),
        evidence({
          headline: 'Japanese towns that closed schools in spring 2020 had no fewer COVID-19 cases than similar towns that kept schools open.',
          finding: paragraph(`
            Fukumoto, McClean and Nakagawa (2021) paired each town with open schools with the most similar town with closed schools. “We do not find any evidence that school closures in Japan reduced the spread of COVID-19.”
          `),
          grade: 'moderate',
          quote: 'We do not find any evidence that school closures in Japan reduced the spread of COVID-19',
          caveat: 'Japan had few cases in spring 2020. The result may not carry over to places or periods with more spread.',
          sources: [source('Fukumoto et al. 2021', 'https://www.nature.com/articles/s41591-021-01571-8')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'A randomly selected group of residents deliberates on reopening',
      method: 'Citizens\' Assembly',
      summary: 'An assembly of randomly selected residents weighs the reopening trade-off for its region and reports before the decision is made.',
      anchor: 'Return to School Roadmap',
      where: 'Wherever the reopening decision is made: a district, county, or state. Michigan is the comparison, with an appointed council and a later randomly selected panel',
      when: paragraph(`
        May to June 2020, with its scope fixed on the fall 2020 instructional mode decision.
        Michigan already created an appointed advisory council in May 2020; the proposal is the same
        body selected by lot. An assembly seated after August 2020 misses the decision it exists to
        make; the actual Michigan citizens' panel of fall 2020 demonstrates that failure mode.
      `),
      description: paragraph(`
        Give a randomly selected assembly of residents the job of setting the fall 2020
        instructional mode for its region, within public-health orders and civil-rights law. A
        convening authority at the level that makes the reopening decision seats the assembly in May
        2020 and draws members by lot from the region's residents. Seats rotate on a fixed schedule
        so no cohort becomes an incumbent class. Members hear from public-health, education, and
        building-safety experts, deliberate over several weeks, and vote. How the assembly's
        conclusion feeds the decision is open, and the note lists the ways. Whoever decides must
        publish the evidence the assembly saw. Michigan created an appointed advisory council in May
        2020 and seated a randomly selected panel only in the fall, after the decision it would have
        informed had passed.
      `),
      note: paragraph(`
        An assembly can feed the decision in more than one way. Its choice can bind the districts
        directly, go to a referendum, or go to a vote of the elected school board, which must answer
        the assembly's recommendation in writing. Each carries a different amount of force. The
        group's notes called for binding decisions, so that outcomes would vary from place to place
        and could be compared. The review left the form open.
      `),
      outcome: outcome({
        text: 'A reopening decision that fits local conditions and priorities, made by people who had a say, is seen as legitimate and holds confidence in public schools.',
        measured: 'Confidence in public schools fell',
        claims: [
          claim({
            text: 'An assembly can be convened in time to inform the decision.',
            evidence: [
              evidence({
                headline: 'A UK panel of 28 residents deliberated online on pandemic exit strategies during the May 2020 lockdown.',
                finding: paragraph(`
                  The Ada Lovelace Institute “conducted rapid, online deliberation with 28 members
                  of the public on COVID-19 exit strategies” throughout May 2020, while the UK was
                  in lockdown, and the panel produced four steers within the month. The institute
                  reports on its own process, and no policy outcome was measured.
                `),
                grade: 'weak',
                quote: 'conducted rapid, online deliberation with 28 members of the public on COVID-19 exit strategies',
                sources: [source('Ada Lovelace Institute', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Deliberative processes usually take about half a year from start to recommendations.',
                finding: paragraph(`
                  The Organisation for Economic Co-operation and Development’s stocktake of 289
                  deliberative processes reports that “most deliberative processes tend to take
                  around six to seven months from beginning to end”, with half the cases needing 12
                  weeks or more of preparation before participants first met. The Irish assembly on
                  the Eighth Amendment sat over five sessions from November 2016 to April 2017.
                `),
                grade: 'moderate',
                quote: 'most deliberative processes tend to take around six to seven months from beginning to end',
                sources: [source('Organisation for Economic Co-operation and Development', 'https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en/full-report/component-8.html')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Michigan Citizens\' Panel on COVID-19',
                where: 'Michigan', when: 'Fall 2020',
                authority: 'Advisory, no standing with any decision maker',
                outcome: paragraph(`
                  A nonprofit convened 30 randomly selected Michigan residents, using a selection
                  algorithm built in part by Carnegie Mellon researchers. The panel “crafted 12
                  recommendations and offered them to local, state and national policymakers as a
                  way out of the pandemic”. Random selection could be run mid-pandemic. The panel
                  met in the fall, after the instructional mode decision, and no adoption of its
                  recommendations is reported.
                `),
                strength: 'weak',
                sources: [source('Carnegie Mellon University news', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html')]
              })
            ]
          }),
          claim({
            text: 'A randomly selected group weighs local conditions and priorities when it sets a trade-off.',
            evidence: [
              evidence({
                headline: 'Residents who deliberated two local questions moved most on the one they knew least about.',
                finding: paragraph(`
                  Residents of New Haven and nearby towns deliberated airport expansion and regional
                  revenue sharing, with the order of the two topics assigned at random. “As
                  expected, the highly salient airport issue saw only a slight effect, while much
                  less salient revenue-sharing issue saw a much larger one.” Deliberation moved
                  positions on a concrete local trade-off, most where people started with little
                  information.
                `),
                grade: 'strong',
                quote: 'As expected, the highly salient airport issue saw only a slight effect, while much less salient revenue-sharing issue saw a much larger one.',
                sources: [source('Farrar and colleagues 2010, British Journal of Political Science', 'https://doi.org/10.1017/S0007123409990433')]
              }),
              evidence({
                headline: 'Who sat in a resident\'s discussion group barely changed where that resident ended up.',
                finding: paragraph(`
                  Across three events with 330 randomly composed discussion groups, the views of a
                  participant’s group mates had little pull on that participant’s own conclusions.
                  “We find only sporadic evidence of group composition effects.” The luck of the
                  draw did not decide what members concluded.
                `),
                grade: 'strong',
                quote: 'We find only sporadic evidence of group composition effects.',
                sources: [source('Farrar and colleagues 2009, Political Psychology', 'https://doi.org/10.1111/j.1467-9221.2009.00717.x')]
              }),
              evidence({
                headline: 'In a Finnish panel on COVID-19 restrictions, which experts members heard did not steer where they landed.',
                finding: paragraph(`
                  An online panel of randomly selected Finns weighed containment measures after
                  hearing experts from different fields, in varied order. “We find that neither the
                  field of expertise nor the order of hearings had systematic effects on
                  participants’ perceptions on containment measures.” It is the nearest measured
                  case to a reopening assembly.
                `),
                grade: 'moderate',
                quote: 'We find that neither the field of expertise nor the order of hearings had systematic effects on participants’ perceptions on containment measures.',
                sources: [source('Leino and colleagues 2022, Policy Sciences', 'https://doi.org/10.1007/s11077-022-09465-3')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In nationwide town meetings, the discussion leader a meeting happened to get shaped much of what it concluded.',
                finding: paragraph(`
                  Discussion leaders were assigned at random across meetings in a national
                  deliberation in Sao Tome and Principe. “They find that leader effects were
                  extremely large, in many cases accounting for over one-third of all variation in
                  the outcomes of the national discussions.” Whoever runs the room can steer what
                  comes out of it.
                `),
                grade: 'strong',
                quote: 'They find that leader effects were extremely large, in many cases accounting for over one-third of all variation in the outcomes of the national discussions.',
                sources: [source('Humphreys, Masters and Sandbu 2006, World Politics', 'https://doi.org/10.1353/wp.2007.0008')]
              }),
              evidence({
                headline: 'Moderators who voiced their own views, even briefly, changed what participants wanted.',
                finding: paragraph(`
                  In a real deliberative decision process, “we find that moderators can
                  significantly influence the attitudes and behaviors of participants by expressing
                  views in a constrained manner”. The authors warn that interest groups could use
                  this route to capture a deliberation.
                `),
                grade: 'strong',
                quote: 'we find that moderators can significantly influence the attitudes and behaviors of participants by expressing views in a constrained manner',
                sources: [source('Spada and Vreeland 2013, Journal of Public Deliberation', 'https://doi.org/10.16997/jdd.165')]
              }),
              evidence({
                headline: 'Most health citizens\' juries ran shorter than recommended, and decision makers rarely took up what they concluded.',
                finding: paragraph(`
                  A review of 66 citizens’ juries in health found that “many juries were shorter
                  duration than originally recommended, limiting opportunity for constructive
                  dialogue. With respect to citizenship, few juries’ rulings were considered by
                  decision-making bodies thereby limiting transfer into policy and practice.”
                `),
                grade: 'moderate',
                quote: 'Many juries were shorter duration than originally recommended, limiting opportunity for constructive dialogue. With respect to citizenship, few juries\' rulings were considered by decision-making bodies thereby limiting transfer into policy and practice.',
                sources: [source('Street and colleagues 2014, Social Science and Medicine', 'https://doi.org/10.1016/j.socscimed.2014.03.005')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'People see a decision as more legitimate when people like them had a say in it.',
            evidence: [
              evidence({
                headline: 'People called a decision fairer when a panel of randomly selected residents had weighed in, and fairer still when officials followed the panel.',
                finding: paragraph(`
                  In a pre-registered experiment with 1,309 Irish adults, all told the decision went
                  against them, involving a panel of randomly selected citizens raised perceived
                  fairness by 0.7 points on a 0 to 10 scale, and by almost a full point where the
                  recommendation was honored. “Mini-publics increase legitimacy perceptions among
                  the broader citizenry; however, these beneficial effects are largely limited to
                  situations in which their recommendations are honored.”
                `),
                grade: 'strong',
                quote: 'Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored.',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
              }),
              evidence({
                headline: 'People who watched a school board take public comment and answer it trusted local officials more.',
                finding: paragraph(`
                  Respondents were randomly shown a clip of a real school board meeting that was
                  standard, participatory, or deliberative. “The experience of viewing the more
                  participatory and deliberative school board meetings led to increased trust in
                  local officials and a stronger willingness to attend school board meetings in the
                  future.”
                `),
                grade: 'strong',
                quote: 'The experience of viewing the more participatory and deliberative school board meetings led to increased trust in local officials and a stronger willingness to attend school board meetings in the future.',
                sources: [source('Collins 2021, American Political Science Review', 'https://doi.org/10.1017/S0003055421000320')]
              }),
              evidence({
                headline: 'Villagers who voted directly on local projects were far more satisfied with the result, even though the projects chosen hardly differed.',
                finding: paragraph(`
                  In 49 Indonesian villages assigned at random to choose projects at representative
                  meetings or by village-wide vote, “plebiscites resulted in dramatically higher
                  satisfaction among villagers, increased knowledge about the project, greater
                  perceived benefits, and higher reported willingness to contribute”, while what got
                  built changed much less. Here people voted themselves rather than sending
                  neighbors to decide for them.
                `),
                grade: 'strong',
                quote: 'Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When officials set the panel\'s advice aside, most of the fairness gain went with it and people were no readier to accept the decision.',
                finding: paragraph(`
                  In the same experiment, “mini-publics have substantially larger effects when their
                  recommendations are honored and smaller or even no effects when their
                  recommendations are not honored”. Ignored advice left a fairness gain of about
                  half a point and no measurable gain in accepting the decision. Letting all voters
                  decide by referendum did more for both.
                `),
                grade: 'strong',
                quote: 'mini-publics have substantially larger effects when their recommendations are honored and smaller or even no effects when their recommendations are not honored',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
              }),
              evidence({
                headline: 'France\'s president promised to back nearly all of a citizens\' convention\'s proposals, and a fifth became law as written.',
                finding: paragraph(`
                  A week after the convention finished, “President Macron committed to supporting
                  146 of the 149 proposed measures”. Tracing every recommendation into law, the
                  Knowledge Network on Climate Assemblies finds a fifth fully implemented or
                  reinforced, about half implemented partially or in modified form, and 22 percent
                  abandoned, vetoed, or not implemented.
                `),
                grade: 'moderate',
                sources: [source('Knowledge Network on Climate Assemblies', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Irish Citizens\' Assembly on the Eighth Amendment',
                where: 'Ireland', when: '2016-2018',
                authority: 'Advisory, coupled by design to a referendum',
                outcome: paragraph(`
                  The government convened “99 ordinary citizens” who “deliberated on the Eighth
                  Amendment over the course of five sessions from November 2016 until April 2017”.
                  The referendum passed on a turnout of 64 percent, and the final bill “accorded
                  with the ‘repeal and replace’ recommendations made by the Assembly” rather than
                  the parliamentary committee’s simple repeal. Coding of assembly and committee
                  transcripts found assembly members showed a deeper grasp of the subject, and
                  experts spoke in more complex terms to the assembly. No study measures whether the
                  assembly changed how legitimate anyone found the result.
                `),
                strength: 'weak',
                sources: [
                  source('Electoral Reform Society', 'https://electoral-reform.org.uk/the-irish-abortion-referendum-how-a-citizens-assembly-helped-to-break-years-of-political-deadlock/'),
                  source('Suiter, Farrell, Harris and Murphy 2022, Political Studies Review', 'https://doi.org/10.1177/14789299211020909')
                ]
              })
            ]
          }),
          claim({
            text: 'People who see a decision as legitimate keep confidence in the institution that made it.',
            evidence: [
              evidence({
                headline: 'Americans who saw the police and courts as legitimate said they complied with the law and cooperated more.',
                finding: paragraph(`
                  In a weighted national survey of 1,603 US adults, legitimacy, “typically
                  operationalized as the perceived obligation to obey and trust and confidence in
                  the relevant institutions — plays an important role in achieving such
                  compliance”, and it also went with willing cooperation. The measures are
                  self-reported and taken at one point in time, and the field is policing, not
                  schools.
                `),
                grade: 'moderate',
                quote: 'legitimacy—typically operationalized as the perceived obligation to obey and trust and confidence in the relevant institutions—plays an important role in achieving such compliance',
                sources: [source('Tyler and Jackson 2014, Psychology, Public Policy, and Law', 'https://doi.org/10.1037/a0034514')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'What a decision delivers moves acceptance far more than how the decision was made.',
                finding: paragraph(`
                  Across a set of vignette and field experiments, “outcome favorability is the
                  dominant determinant of decision acceptance”, and the authors conclude that
                  “democratic governments can achieve little in terms of acceptance of policy
                  decisions by the procedural means at their disposal”. A fairer process is a small
                  lever next to giving people the outcome they wanted.
                `),
                grade: 'strong',
                quote: 'outcome favorability is the dominant determinant of decision acceptance',
                sources: [source('Esaiasson, Persson, Gilljam and Lindholm 2019, British Journal of Political Science', 'https://doi.org/10.1017/S0007123416000508')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'A council of parents, teachers, and experts designs the reopening plan',
      method: 'Stakeholder Advisory Council',
      summary: 'A district-convened council of parents, teachers, and residents works with ventilation, epidemiology, and child-development experts to produce reopening options the board must answer.',
      anchor: 'physical presence in school',
      where: 'District or county level, in the large urban districts that chose remote-only fall starts',
      when: paragraph(`
        April to July 2020, touching the fall 2020 modality choice and the building-safety
        investments (ventilation, outdoor space, prioritizing the youngest grades) that determined
        what safe reopening could mean. The January 2021 evidence that in-person school with
        mitigation was not typically associated with rapid spread arrived after the fall decision;
        this proposal is a machine for generating that knowledge locally, six months earlier.
      `),
      description: paragraph(`
        Give a district-convened council of parents, teachers, and residents the standing to put
        reopening options before the school board, which must respond to each in writing. This is a
        policy design body, not a broad trust mechanism: it selects the people most closely tied to
        the schools, who know the buildings, rather than the community at large. Experts in
        ventilation, epidemiology, behavioral science, and early childhood brief the council. The
        district or county convenes it in April 2020, before the fall decision, and recruits members
        to reflect its families. Members meet over four to eight weeks and work from a written map
        of what each field knows and does not know. The council's product is a ranked set of
        options, such as outdoor classes, ventilation upgrades, and returning the youngest grades
        first, with costs attached. The board keeps the decision but publishes the options and its
        reasons. In 2020, large urban districts chose between open and closed with no such option
        set, and the constraints differed sharply from one district to the next.
      `),
      outcome: outcome({
        text: 'People who know the buildings design reopening plans that fit each school, which builds trust between parents and teachers, keeps teachers, and cuts chronic absenteeism.',
        measured: 'Chronic absenteeism stayed high',
        claims: [
          claim({
            text: 'People who know the building put options on the table that an open-or-closed debate misses.',
            evidence: [
              evidence({
                headline: 'Experts spoke in more complex terms to a citizens\' assembly than to a parliamentary committee, and the citizens engaged the subject more deeply.',
                finding: paragraph(`
                  Coding the transcripts of an Irish citizens’ assembly and a parliamentary committee
                  that took up the same question, the authors find that “experts display higher
                  levels of cognitive complexity when addressing the Citizens’ Assembly than the
                  Oireachtas Committee”, and that assembly members showed a deeper grasp of the
                  subject. The analysis covers 861 speech acts. It measures how people talk, not
                  what options a body produces, and it comes from a different policy area than
                  reopening.
                `),
                grade: 'moderate',
                quote: 'experts display higher levels of cognitive complexity when addressing the Citizens\' Assembly than the Oireachtas Committee',
                sources: [source('Suiter, Farrell, Harris and Murphy 2022, Political Studies Review', 'https://doi.org/10.1177/14789299211020909')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The residents who turn up to local meetings are older, longtime homeowners, and they mostly show up to block things.',
                finding: paragraph(`
                  Coding thousands of instances of residents speaking at planning and zoning
                  meetings and matching speakers to the voter file, the authors find that
                  “individuals who are older, male, longtime residents, voters in local elections,
                  and homeowners are significantly more likely to participate in these meetings”,
                  and that these speakers overwhelmingly oppose new construction. A council built
                  from whoever comes forward can narrow the option set rather than widen it.
                `),
                grade: 'moderate',
                quote: 'individuals who are older, male, longtime residents, voters in local elections, and homeowners are significantly more likely to participate in these meetings',
                sources: [source('Einstein, Palmer and Glick 2019, Perspectives on Politics', 'https://doi.org/10.1017/S153759271800213X')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Ada Lovelace Rapid Online Deliberation',
                where: 'United Kingdom', when: '05/2020',
                authority: 'Advisory, pre-rollout',
                outcome: paragraph(`
                  The Ada Lovelace Institute convened 28 members of the public online during the
                  lockdown and, within the month, “this mini public provided four strong steers on
                  how to build COVID-19 technologies with legitimacy”. The project measured no
                  policy outcome, and the participants were members of the public rather than people
                  who ran the institutions at issue.
                `),
                strength: 'weak',
                sources: [source('Ada Lovelace Institute', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
              }),
              supportingCase({
                name: 'Texas Utility Deliberative Polls',
                where: 'Texas', when: 'Late 1990s',
                authority: 'Advisory to eight utilities',
                outcome: paragraph(`
                  “Eight electric utility companies in Texas participated in an ambitious experiment
                  in public consultation”, bringing ratepayers together with experts. Participants
                  favored renewables, and the results “suggested that ratepayers might even be
                  willing to pay extra” for them. A 1999 law “required all for-profit electricity
                  providers to obtain about three percent of their electricity supply from renewable
                  energy sources”, and Texas is now the biggest generator of wind power in the
                  country. No study shows how much the polls caused the law.
                `),
                strength: 'weak',
                sources: [source('National Civic League', 'https://www.nationalcivicleague.org/ncr-article/deliberative-polling-and-the-rise-of-wind-power-in-texas/')]
              }),
              supportingCase({
                name: 'UK Genetically Modified Crops Public Debate',
                where: 'United Kingdom', when: '2003',
                authority: 'Government commissioned, advisory, no connection to the policy decision',
                outcome: paragraph(`
                  The debate ran “six major ‘regional’ debates, designed to be the stimulus for a
                  cascade of ‘second and third tier’ open access meetings”, drawing about 37,000
                  feedback forms, alongside ten recruited groups. It found that “people are
                  generally uneasy about GM” and that “there was little support for early
                  commercialization”. There was “a lack of any clear or agreed link between this
                  process of public engagement and the UK Government’s emerging policy”, which
                  “contributed to a sense of cynicism amongst participants about the purposes of the
                  exercise”. The recruited groups reached different positions from the self-selected
                  meetings.
                `),
                strength: 'weak',
                sources: [source('Open University', 'https://www.open.edu/openlearn/science-maths-technology/achieving-public-dialogue/content-section-4')]
              })
            ]
          }),
          claim({
            text: 'Ventilation and outdoor instruction make in-person school safer.',
            evidence: [
              evidence({
                headline: 'Italian classrooms with mechanical ventilation saw far fewer student infections than classrooms with open windows alone.',
                finding: paragraph(`
                  Across 205,347 students in more than 10,000 classrooms in Italy’s Marche region,
                  316 of them fitted with mechanical ventilation, “the relative risk of infection of
                  students decreased at least by 74% compared with a classroom with only natural
                  ventilation”. The ventilated schools applied for a regional funding program, so
                  they chose themselves into the comparison.
                `),
                grade: 'moderate',
                quote: 'the relative risk of infection of students decreased at least by 74% compared with a classroom with only natural ventilation',
                sources: [source('Buonanno, Ricolfi, Morawska and Stabile 2022, Frontiers in Public Health', 'https://doi.org/10.3389/fpubh.2022.1087087')]
              }),
              evidence({
                headline: 'Reviewing the school measures used worldwide, ventilation probably lowered infections among staff and students.',
                finding: paragraph(`
                  A review of measures used to keep schools open during the pandemic reports that
                  “moderate-certainty evidence showed that ventilation measures probably reduce
                  cases among staff and students”, alongside weaker evidence on masks. The reviewers
                  rate most of the underlying studies as low or very low certainty, and they did not
                  assess outdoor instruction.
                `),
                grade: 'strong',
                quote: 'Moderate-certainty evidence showed that ventilation measures probably reduce cases among staff and students.',
                sources: [source('Littlecott, Krishnaratne and colleagues 2024, Cochrane Database of Systematic Reviews', 'https://doi.org/10.1002/14651858.CD015029.pub2')]
              }),
              evidence({
                headline: 'Infections spread far less often outdoors than indoors.',
                finding: paragraph(`
                  A review of transmission reports found that “a low proportion of reported global
                  SARS-CoV-2 infections occurred outdoors (<10%) and the odds of indoor transmission
                  was very high compared to outdoors (18.7 times; 95% confidence interval,
                  6.0-57.9)”. The included studies vary widely in quality and in what counts as
                  outdoors, and none is about schools.
                `),
                grade: 'moderate',
                quote: 'Five identified studies found a low proportion of reported global SARS-CoV-2 infections occurred outdoors (<10%) and the odds of indoor transmission was very high compared to outdoors (18.7 times; 95% confidence interval, 6.0-57.9).',
                sources: [source('Bulfone, Malekinejad, Rutherford and Razani 2021, Journal of Infectious Diseases', 'https://doi.org/10.1093/infdis/jiaa742')]
              })
            ],
            counterEvidence: [],
            cases: [
              supportingCase({
                name: 'Marche Region Classroom Ventilation Program',
                where: 'Italy', when: '2021-2022',
                authority: 'Regional engineering program, no deliberative component',
                outcome: paragraph(`
                  The region funded mechanical ventilation in 316 classrooms across 56 schools, and
                  students in those classrooms had at least 74 percent lower relative risk of
                  infection than students in classrooms relying on open windows. It is the
                  engineering half of the proposal without the participation half, and the schools
                  applied for the funding themselves.
                `),
                strength: 'moderate',
                sources: [source('Buonanno, Ricolfi, Morawska and Stabile 2022, Frontiers in Public Health', 'https://doi.org/10.3389/fpubh.2022.1087087')]
              }),
              supportingCase({
                name: 'Jerusalem High School Outbreak',
                where: 'Israel', when: '05/2020',
                authority: 'Ministry of Health epidemiological investigation',
                outcome: paragraph(`
                  “Schools fully reopened on 17 May 2020. Ten days later, a major outbreak of
                  coronavirus disease (COVID-19) occurred in a high school.” Testing the whole school
                  community found 153 students and 25 staff infected. The investigation reported
                  crowded classes of 35 to 38 students, a masking exemption during an extreme
                  heatwave, and continuous air conditioning in all classes. It shows what reopening
                  without distancing, masks, or fresh air produced in one crowded school.
                `),
                strength: 'moderate',
                sources: [source('Stein-Zamir and colleagues 2020, Eurosurveillance', 'https://doi.org/10.2807/1560-7917.ES.2020.25.29.2001352')]
              })
            ]
          }),
          claim({
            text: 'Plans designed close to the school fit its local constraints.',
            evidence: [
              evidence({
                headline: 'Kenyan schools whose parent committees hired their own teachers saw test scores rise, and training parents curbed jobs going to relatives.',
                finding: paragraph(`
                  School committees at randomly chosen Kenyan schools got funds to hire a teacher
                  locally on a performance-based contract, and scores rose for the students those
                  teachers taught. Existing teachers steered about a third of the posts to their own
                  relatives, but “a governance program that empowered parents within school
                  committees reduced both forms of capture”.
                `),
                grade: 'strong',
                quote: 'A governance program that empowered parents within school committees reduced both forms of capture.',
                sources: [source('Duflo, Dupas and Kremer 2015, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2014.11.008')]
              }),
              evidence({
                headline: 'Indonesian school committees improved learning most when they planned jointly with the village council.',
                finding: paragraph(`
                  A large experiment compared ways to strengthen school committees. “We find that
                  institutional reforms, in particular linkage and elections combined with linkage,
                  are most cost-effective at improving learning.” Grants and training alone did
                  less. A school body works best when it is tied to the authority that holds the
                  decision, which is what this proposal asks of the board.
                `),
                grade: 'strong',
                quote: 'We find that institutional reforms, in particular linkage and elections combined with linkage, are most cost-effective at improving learning.',
                sources: [source('Pradhan and colleagues 2014, American Economic Journal: Applied Economics', 'https://doi.org/10.1257/app.6.2.105')]
              }),
              evidence({
                headline: 'After Bolivia handed budget power to its towns, investment shifted toward the services each place lacked.',
                finding: paragraph(`
                  After Bolivia devolved resources to municipalities, public investment changed in
                  education, agriculture, urban development, water, and sanitation. Need predicted
                  where it went: “By far the most important determinant of these changes are
                  objective indicators of social need (for example, education investment rises where
                  illiteracy is higher).” The study covers town budgets, not school plans.
                `),
                grade: 'moderate',
                quote: 'By far the most important determinant of these changes are objective indicators of social need (for example, education investment rises where illiteracy is higher).',
                sources: [source('Faguet 2004, Journal of Public Economics', 'https://doi.org/10.1016/S0047-2727(02)00185-8')]
              }),
              evidence({
                headline: 'In Virginia, politics shaped whether schools opened in person, but much less how schools ran once open.',
                finding: paragraph(`
                  Across a whole state, “partisanship and racial composition were similarly
                  predictive of initial in-person offerings, but partisanship was less predictive
                  over time, and school operational decisions were less politicized than modality”.
                  The operational planning a design council would do was less captured by politics
                  than the open-or-closed choice.
                `),
                grade: 'moderate',
                quote: 'Partisanship and racial composition were similarly predictive of initial in-person offerings, but partisanship was less predictive over time, and school operational decisions were less politicized than modality.',
                sources: [source('Schueler, Miller and Reynolds 2025, American Educational Research Journal', 'https://doi.org/10.3102/00028312251348247')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'States handed the fall decision to districts, and districts followed partisanship and union strength instead of the virus.',
                finding: paragraph(`
                  Analyzing state policies and the reopening plans of 823 Michigan districts, the
                  authors find that “decisions were more tied to local political partisanship and
                  union strength than to COVID-19 severity”, and that governors closed schools in
                  the spring but left the fall choice to districts regardless of party. This is the
                  link that failed when the decision moved close to the school.
                `),
                grade: 'moderate',
                quote: 'decisions were more tied to local political partisanship and union strength than to COVID-19 severity',
                sources: [source('Grossmann, Reckhow, Strunk and Turner 2021, Educational Researcher', 'https://doi.org/10.3102/0013189X211048840')]
              }),
              evidence({
                headline: 'Across the country, reopening choices had little to do with how bad the virus was locally.',
                finding: paragraph(`
                  Across more than 10,000 districts, Republican-leaning districts were far more
                  likely to open in person and districts with stronger unions leaned remote.
                  “Notably, we find little connection between reopening decisions and indicators
                  measuring the severity of the virus.”
                `),
                grade: 'moderate',
                quote: 'Notably, we find little connection between reopening decisions and indicators measuring the severity of the virus.',
                sources: [source('Hartney and Finger 2022, Perspectives on Politics', 'https://doi.org/10.1017/S1537592721000955')]
              }),
              evidence({
                headline: 'When Afghan villages chose projects in meetings instead of secret ballots, local elites had more say over what got built.',
                finding: paragraph(`
                  Villages were assigned at random to choose projects by secret ballot or by
                  consultation meeting. “We find that referenda reduce the influence of local elites
                  over both project type and location.” The meeting format, which is the format this
                  proposal uses, left elites more room.
                `),
                grade: 'strong',
                quote: 'We find that referenda reduce the influence of local elites over both project type and location.',
                sources: [source('Beath, Christia and Enikolopov 2017, Journal of Development Economics', 'https://doi.org/10.1016/j.jdeveco.2016.10.001')]
              }),
              evidence({
                headline: 'When Argentina moved secondary schools to provincial control, test scores rose overall but the gains skipped poor communities.',
                finding: paragraph(`
                  “We find that decentralization had an overall positive impact on student test
                  scores. The decentralization gains, however, did not reach the poor.” Moving a
                  decision closer to a community helps where that community can press its case, and
                  can leave the weakest places behind.
                `),
                grade: 'strong',
                quote: 'We find that decentralization had an overall positive impact on student test scores. The decentralization gains, however, did not reach the poor.',
                sources: [source('Galiani, Gertler and Schargrodsky 2008, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2008.05.004')]
              })
            ],
            cases: [
              supportingCase({
                name: 'US Fall 2020 Delegation to School Districts',
                where: 'United States', when: '2020',
                authority: '48 states left the fall instructional mode to districts',
                outcome: paragraph(`
                  “In 25 states with Republican governors and 23 states with Democratic governors,
                  decisions about instructional modalities for fall 2020 were left to local school
                  districts”, with only Arkansas and New Jersey setting a statewide mode. This is
                  not an outside analog; it is what happened in this case, and it is the proposal’s
                  nearest real trial. District decisions then tracked partisanship and union
                  strength more closely than COVID-19 severity.
                `),
                strength: 'moderate',
                sources: [source('Grossmann, Reckhow, Strunk and Turner 2021, Educational Researcher', 'https://doi.org/10.3102/0013189X211048840')]
              })
            ]
          }),
          claim({
            text: 'Teachers who have a say in school decisions are more likely to stay.',
            evidence: [
              evidence({
                headline: 'Schools where teachers had more say over school policies and their own classrooms lost fewer teachers.',
                finding: paragraph(`
                  Across a national sample of schools, turnover was lower where teachers reported
                  more influence, after accounting for salaries and school characteristics.
                  “Finally, as shown in model 6, schools with higher levels of faculty
                  decision-making influence and autonomy have lower levels of turnover.” The
                  influence measure blends control of one’s own classroom with a say in school
                  policy.
                `),
                grade: 'moderate',
                quote: 'Finally, as shown in model 6, schools with higher levels of faculty decision-making influence and autonomy have lower levels of turnover.',
                sources: [source('Ingersoll 2001, American Educational Research Journal', 'https://doi.org/10.3102/00028312038003499')]
              }),
              evidence({
                headline: 'Teachers who had a real role in school decisions were less likely to plan to leave their school.',
                finding: paragraph(`
                  In a statewide teacher survey, teachers planned to stay longer where working
                  conditions were better. “According to their survey responses, teachers attend to a
                  wide range of working conditions, such as having sufficient time to meet their
                  responsibilities, having the support of families and the broader community for
                  their work with students, and being involved in making decisions about school
                  governance.” The outcome is stated intention, not actual departure.
                `),
                grade: 'moderate',
                quote: 'According to their survey responses, teachers attend to a wide range of working conditions, such as having sufficient time to meet their responsibilities, having the support of families and the broader community for their work with students, and being involved in making decisions about school governance.',
                sources: [source('Johnson, Kraft and Papay 2012, Teachers College Record', 'https://doi.org/10.1177/016146811211401004')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Under weak principals, teachers with more say over school policy left more often, not less.',
                finding: paragraph(`
                  In a national sample of about 6,300 schools, the effect of teacher influence
                  depended on the principal. “While employees are less likely to turn over under
                  effective managers regardless of their degree of organizational policy influence,
                  under ineffective managers turnover increases as employees’ perceived influence
                  increases.” A council working alongside strained leadership may not keep teachers.
                `),
                grade: 'moderate',
                quote: 'While employees are less likely to turn over under effective managers regardless of their degree of organizational policy influence, under ineffective managers turnover increases as employees\' perceived influence increases.',
                sources: [source('Grissom 2012, American Review of Public Administration', 'https://doi.org/10.1177/0275074011404209')]
              }),
              evidence({
                headline: 'Elementary and middle school teachers who had more authority over school decisions were no more likely to stay.',
                finding: paragraph(`
                  A statewide study linked every teacher’s survey to whether they later left. The
                  author reports “no statistically significant evidence of lower planned departure
                  rates emerges at the elementary or middle school levels when teachers have more
                  decision making authority”, once school characteristics are accounted for. Only in
                  high schools did it predict staying, and school leadership mattered most.
                `),
                grade: 'moderate',
                quote: 'Interestingly given current policy interest in empowering teachers, no statistically significant evidence of lower planned departure rates emerges at the elementary or middle school levels when teachers have more decision making authority (as measured by the teacher empowerment factor), after the school’s measurable characteristics have been controlled for.',
                sources: [source('Ladd 2011, Educational Evaluation and Policy Analysis', 'https://doi.org/10.3102/0162373711398128')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'Parents and teachers who plan together build stronger relationships.',
            evidence: [
              evidence({
                headline: 'When parents and teachers worked through a child\'s school problems together, teachers reported stronger relationships with those parents.',
                finding: paragraph(`
                  In rural schools, families and teachers were assigned at random to a model where
                  parent and teacher jointly address concerns they share about a student. Children’s
                  behavior improved more than in the comparison group, and “teacher responses
                  indicated significantly different rates of improvement in their relationship with
                  parents”. The planning is about one child, not school policy, and only teachers
                  were asked.
                `),
                grade: 'strong',
                quote: 'In addition, teacher responses indicated significantly different rates of improvement in their relationship with parents in favor of the CBC group.',
                sources: [source('Sheridan and colleagues 2017, Journal of School Psychology', 'https://doi.org/10.1016/j.jsp.2016.12.002')]
              }),
              evidence({
                headline: 'Parents trusted their children\'s schools more where they felt parents had real influence over school decisions.',
                finding: paragraph(`
                  Surveying parents across 79 schools, the authors find that “affective norms of
                  parent perceived influence on school decisions” had larger effects on parent
                  trust in the school than poverty, school size, or ethnic makeup. Influence here is
                  what parents perceive, measured at one point in time.
                `),
                grade: 'moderate',
                quote: 'Affective norms of parent perceived influence on school decisions (β 5j = 5.0, p < .01) and school identification (β 4j = 2.7, p < .01) had larger individual effects on parent-school trust than contextual conditions.',
                sources: [source('Adams, Forsyth and Mitchell 2009, Educational Administration Quarterly', 'https://doi.org/10.1177/0013161X08327550')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A program that brought families and school staff together built ties among parents but not between parents and staff.',
                finding: paragraph(`
                  Schools were assigned at random to a program designed to build trust among
                  parents, teachers, and children. After the first year, “table 2 points towards
                  meaningful differences between FAST and control schools in both indicators for
                  relationships among parents but neither indicator of relationships between parents
                  and school staff”. The program is shared activity rather than joint planning.
                `),
                grade: 'strong',
                quote: 'Table 2 points towards meaningful differences between FAST and control schools in both indicators for relationships among parents but neither indicator of relationships between parents and school staff.',
                sources: [source('Gamoran, Turley, Turner and Fish 2012, Research in Social Stratification and Mobility', 'https://doi.org/10.1016/j.rssm.2011.08.001')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Salt Lake City Site-Based Councils',
                where: 'United States', when: '1980s',
                authority: 'Formal shared governance with parity seats',
                outcome: paragraph(`
                  The councils had broad authority, equal seats for parents and teachers, and
                  training. Even so, “despite the existence of these highly favorable arrangements,
                  teachers and parents did not wield significant influence on significant issues in
                  these decision arenas”. Norms of civility and principal control turned them into
                  auxiliary units. It is a warning about how this council must be designed.
                `),
                strength: 'weak',
                sources: [source('Malen and Ogawa 1988, Educational Evaluation and Policy Analysis', 'https://doi.org/10.3102/01623737010004251')]
              })
            ]
          }),
          claim({
            text: 'Schools that work closely with families see fewer chronic absences.',
            evidence: [
              evidence({
                headline: 'When middle schools invited parents to meetings on how to get involved, parents got more involved and their children skipped school less.',
                finding: paragraph(`
                  Schools in a deprived district near Paris invited parents to a short series of
                  meetings, assigned at random. “At the end of the school year, we find that treated
                  families have increased their school-and home-based involvement activities. In
                  turn, pupils of treatment classes have developed more positive behaviour and
                  attitudes in school, notably in terms of truancy and disciplinary sanctions.” Test
                  scores did not move, and the outcome is truancy rather than chronic absence.
                `),
                grade: 'strong',
                quote: 'At the end of the school year, we find that treated families have increased their school-and home-based involvement activities. In turn, pupils of treatment classes have developed more positive behaviour and attitudes in school, notably in terms of truancy and disciplinary sanctions (with effects-size around 15% of a standard deviation).',
                sources: [source('Avvisati, Gurgand, Guyon and Maurin 2014, Review of Economic Studies', 'https://doi.org/10.1093/restud/rdt027')]
              }),
              evidence({
                headline: 'When first and second grade teachers visited families at home and kept in regular touch, fewer of their students piled up absences.',
                finding: paragraph(`
                  Teachers made home visits to build a working relationship with families, stayed in
                  contact, and stepped in early when absences started. Across five high-poverty
                  schools, the program “significantly reduced the prevalence of absenteeism without
                  excessively burdening teachers”. It is a pilot, with classrooms assigned by grade
                  within each school.
                `),
                grade: 'moderate',
                quote: 'Our analysis of attendance data indicated that ETPP significantly reduced the prevalence of absenteeism without excessively burdening teachers.',
                sources: [source('Cook, Dodge, Gifford and Schulting 2017, Children and Youth Services Review', 'https://doi.org/10.1016/j.childyouth.2017.09.017')]
              }),
              evidence({
                headline: 'Elementary schools that built partnership programs with families saw attendance rise while other schools slipped.',
                finding: paragraph(`
                  “Analyses showed that in schools working to implement school, family, and community
                  partnerships, student attendance improved an average of 0.5%, whereas in
                  comparison schools, rates of student attendance declined slightly from 1 year to
                  the next.” Schools chose to join the network, so the comparison is not clean, and
                  the measure is daily attendance rather than chronic absence.
                `),
                grade: 'moderate',
                quote: 'Analyses showed that in schools working to implement school, family, and community partnerships, student attendance improved an average of 0.5%, whereas in comparison schools, rates of student attendance declined slightly from 1 year to the next.',
                sources: [source('Sheldon 2007, Journal of Educational Research', 'https://doi.org/10.3200/JOER.100.5.267-275')]
              }),
              evidence({
                headline: 'Mailing parents their child\'s absence count cut chronic absence across ten districts.',
                finding: paragraph(`
                  Repeated mailings told parents how many days their child had missed and corrected
                  common beliefs about early attendance. “The intervention decreased chronic
                  absenteeism by 15%.” This is one-way mail, so it shows reaching parents works, not
                  that working closely with them does.
                `),
                grade: 'strong',
                quote: 'The intervention decreased chronic absenteeism by 15%.',
                sources: [source('Robinson, Lee, Dearing and Rogers 2018, American Educational Research Journal', 'https://doi.org/10.3102/0002831218772274')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A mentoring program that checked on students and kept in touch with families did nothing for children in the early grades.',
                finding: paragraph(`
                  In a large trial pairing students with mentors who monitored attendance and kept up
                  contact with home, “program participation decreased absences in grades 5 to 7 by
                  4.2 days, or 22.9 percent, but had no detectable effects on students in grades 1 to
                  4”. Grades and test scores did not improve either.
                `),
                grade: 'strong',
                quote: 'Program participation decreased absences in grades 5 to 7 by 4.2 days, or 22.9 percent, but had no detectable effects on students in grades 1 to 4.',
                sources: [source('Guryan and colleagues 2021, Journal of Policy Analysis and Management', 'https://doi.org/10.1002/pam.22264')]
              }),
              evidence({
                headline: 'When six districts sent parents personalized absence messages themselves, absences fell only slightly.',
                finding: paragraph(`
                  Across six districts and more than 78,000 students, districts ran the messages
                  themselves rather than researchers. “We find that the personalized messages reduced
                  student absences by 1.9%”, far less than earlier trials promised. Light-touch
                  outreach shrinks when a district runs it at scale.
                `),
                grade: 'strong',
                quote: 'We find that the personalized messages reduced student absences by 1.9% (95% CI, 0.6 − 3.1%).',
                sources: [source('Berger and colleagues 2025, Journal of Research on Educational Effectiveness', 'https://doi.org/10.1080/19345747.2025.2537112')]
              })
            ],
            cases: []
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Publish local case, hospital, and school data early',
      method: 'Proactive Data Disclosure',
      summary: 'State health and education agencies must publish county-level case, hospital, and school-mode data weekly, with a plain statement of what is and is not known.',
      anchor: '49 states suspended in-person',
      where: 'State health departments jointly with state education agencies',
      when: paragraph(`
        March to June 2020, so a shared local data layer exists before the July 2020 politicization
        and the fall modality decisions. No federal school-mode dataset existed; the COVID-19 School
        Data Hub launched in September 2021. The intervention point is the first eighteen months of
        that vacuum.
      `),
      description: paragraph(`
        Require state health departments, jointly with state education agencies, to publish
        county-level case, hospitalization, death, and school-operating-mode data every week from
        March 2020. Each release carries a plain statement of what is known and what is not. The
        duty falls on the agencies. The public’s role is as reader, and any resident, journalist, or
        school board can use the same figures. Publication is mandatory and on a fixed schedule, and
        the agencies must publish their uncertainty and revise openly. Statewide health orders stay
        in place. This is a transparency measure, not a participation right. It sits on the map
        because the other proposals depend on it: in 2020 no federal school-mode dataset existed,
        the COVID-19 School Data Hub launched only in September 2021, and newspapers filled the
        county-data gap.
      `),
      outcome: outcome({
        text: 'Shared local data holds confidence in public schools.',
        measured: 'Confidence in public schools fell',
        claims: [
          claim({
            text: 'Local data can be published from the first weeks, and no one else fills the gap.',
            evidence: [
              evidence({
                headline: 'A university team, not the government, published school operating data eighteen months into the pandemic.',
                finding: paragraph(`
                  The COVID-19 School Data Hub, led by an economist at Brown and paid for by private
                  grants, launched in September 2021 with learning-mode and case data for more than
                  55,000 schools in 30 states and the District of Columbia. Its lead said she built
                  it because governments were not providing the data: “We have federal data on
                  school operations for only the largest districts in the country”.
                `),
                grade: 'moderate',
                quote: 'We have federal data on school operations for only the largest districts in the country',
                sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
              })
            ],
            cases: [
              supportingCase({
                name: 'COVID-19 School Data Hub',
                where: 'Brown University', when: '09/2021',
                authority: 'Private substitution for a missing federal function',
                outcome: paragraph(`
                  A grant-funded university team launched school-by-school data on learning mode and
                  COVID-19 cases for more than 55,000 schools in 30 states and the District of
                  Columbia, filling a missing federal function. The team used it for an early study
                  linking learning mode to Virginia test scores. No study measures its effect on
                  public trust.
                `),
                strength: 'moderate',
                sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
              }),
              supportingCase({
                name: 'Taiwan Mask Inventory API and Civic Maps',
                where: 'Taiwan', when: '2020',
                authority: 'Government open API plus civic tech',
                outcome: paragraph(`
                  Taiwan rationed masks and released an open interface carrying real-time mask
                  availability, working with a civic technology community, and volunteers built many
                  maps on it. One app took nearly 1 million inquiries on the first day of rationing,
                  according to interviews the article cites. The article reads falling map use as
                  waning anxiety, but it measures neither trust nor anxiety.
                `),
                strength: 'weak',
                sources: [source('Sidewalk Labs', 'https://medium.com/sidewalk-talk/how-open-data-and-civic-participation-helped-taiwan-slow-covid-b1449bab5841')]
              })
            ]
          }),
          claim({
            text: 'Publishing uncertainty with the data does not cost trust.',
            evidence: [
              evidence({
                headline: 'Telling news readers how uncertain a number was barely dented their trust in it.',
                finding: paragraph(`
                  Five experiments with 5,780 participants, including a preregistered replication
                  and a field experiment inside live BBC News coverage, varied how uncertainty was
                  expressed. People noticed the uncertainty, but the authors “observed only a small
                  decrease in trust in numbers and trustworthiness of the source, and mostly for
                  verbal uncertainty communication”.
                `),
                grade: 'strong',
                quote: 'we observed only a small decrease in trust in numbers and trustworthiness of the source, and mostly for verbal uncertainty communication',
                sources: [source('van der Bles, van der Linden, Freeman and Spiegelhalter 2020, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.1913678117')]
              })
            ],
            cases: [
              supportingCase({
                name: 'BBC News Uncertainty Field Experiment',
                where: 'United Kingdom', when: '10/2019',
                authority: 'Field experiment inside live news',
                outcome: paragraph(`
                  Readers of a live BBC News article on labor market statistics were randomly shown
                  one of three versions, one giving the figure as a numeric range. Readers who saw
                  the range judged the number more uncertain, but “communicating uncertainty as a
                  numeric range did not affect people’s trust in the source, and it also did not
                  affect trust in the number”.
                `),
                strength: 'strong',
                sources: [source('van der Bles, van der Linden, Freeman and Spiegelhalter 2020, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.1913678117')]
              })
            ]
          }),
          claim({
            text: 'Shared local data narrows the gap in how groups see the risk.',
            evidence: [
              evidence({
                headline: 'Given the same brief updates, Democrats and Republicans moved closer together in how safe they felt.',
                finding: paragraph(`
                  Five thousand US adults were assigned at random to read one of nine short news
                  segments. Democrats responded more than Republicans on whether infection could be
                  avoided and whether the pandemic was under control locally, so the two groups
                  converged. The authors conclude that “partisan policy and behavioral gaps are
                  driven, at least in part, by exposure to different information and that equalizing
                  information sources would lead to partisan convergence in beliefs”.
                `),
                grade: 'moderate',
                quote: 'These findings suggest partisan policy and behavioral gaps are driven, at least in part, by exposure to different information and that equalizing information sources would lead to partisan convergence in beliefs.',
                sources: [source('Rothwell, Makridis, Ramirez and Desai 2023, Frontiers in Public Health', 'https://doi.org/10.3389/fpubh.2023.1019206')]
              }),
              evidence({
                headline: 'Where local outbreaks were severe, party hostility did less to split how people saw the pandemic.',
                finding: paragraph(`
                  A two-wave national panel linked hostility between the parties to pandemic
                  attitudes and behavior. “This relationship, however, is more muted in areas with
                  severe outbreaks of the disease.” Visible local conditions narrowed the divide.
                `),
                grade: 'moderate',
                quote: 'This relationship, however, is more muted in areas with severe outbreaks of the disease.',
                sources: [source('Druckman, Klar, Krupnikov, Levendusky and Ryan 2021, Nature Human Behaviour', 'https://doi.org/10.1038/s41562-020-01012-5')]
              }),
              evidence({
                headline: 'Counties of both parties changed how much they went out in response to local case counts more than to political cues.',
                finding: paragraph(`
                  Comparing Democratic and Republican counties through 2020, “we find that both
                  factors play an important role in social distancing but that the relative
                  importance between cues and facts favors the latter”. Local facts moved behavior
                  in both kinds of county, though both signals faded over time.
                `),
                grade: 'moderate',
                quote: 'We find that both factors play an important role in social distancing but that the relative importance between cues and facts favors the latter.',
                sources: [source('Bisbee and Lee 2022, Journal of Politics', 'https://doi.org/10.1086/716969')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Showing people maps of local cases did not improve what they knew or change how risky they thought the virus was.',
                finding: paragraph(`
                  US adults were assigned at random to see one of several case maps, or none. “The
                  findings of this survey study suggest that simply providing maps with COVID-19
                  case information was not necessarily associated with improved public knowledge,
                  risk perception, or reported intent to adhere to health guidelines.” Publishing
                  the data is not the same as changing how people read it.
                `),
                grade: 'strong',
                quote: 'The findings of this survey study suggest that simply providing maps with COVID-19 case information was not necessarily associated with improved public knowledge, risk perception, or reported intent to adhere to health guidelines.',
                sources: [source('Thorpe and colleagues 2021, JAMA Network Open', 'https://doi.org/10.1001/jamanetworkopen.2020.33538')]
              }),
              evidence({
                headline: 'Few adults knew how often infection led to hospitalization, and Democrats overstated the risk more than Republicans.',
                finding: paragraph(`
                  In a December 2020 national survey, “less than one in five U.S. adults (18%) give
                  a correct answer of between 1 and 5%” when asked what share of infected people
                  were hospitalized. Forty-one percent of Democrats and 28 percent of Republicans
                  said half or more were. National case and hospital counts were public at the time.
                `),
                grade: 'moderate',
                quote: 'Less than one in five U.S. adults (18%) give a correct answer of between 1 and 5%.',
                sources: [source('Rothwell and Desai 2020, Brookings Institution', 'https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/')]
              }),
              evidence({
                headline: 'The partisan gap in how much Americans stayed home grew through the spring, even as local case data piled up.',
                finding: paragraph(`
                  Tracking movement by county, the authors find that Trump-voting counties distanced
                  less and that partisanship mattered more than local case counts. “Contrary to our
                  predictions, the observed partisan gap strengthened over time and remained when
                  stay-at-home orders were active.”
                `),
                grade: 'moderate',
                quote: 'Contrary to our predictions, the observed partisan gap strengthened over time and remained when stay-at-home orders were active.',
                sources: [source('Gollwitzer and colleagues 2020, Nature Human Behaviour', 'https://doi.org/10.1038/s41562-020-00977-7')]
              })
            ]
          }),
          claim({
            text: 'Shared understanding holds confidence in the institutions that decide.',
            evidence: [
              evidence({
                headline: 'When health authorities disclosed a vaccine\'s downsides plainly, people trusted them more than when the message stayed vague.',
                finding: paragraph(`
                  In preregistered experiments with more than 13,000 Americans and Danes, open
                  disclosure lowered vaccine acceptance somewhat but raised trust in the authorities.
                  “The evidence demonstrates that transparent negative communication may indeed harm
                  vaccine acceptance here and now but that it increases trust in health
                  authorities.” Vague reassurance raised neither.
                `),
                grade: 'strong',
                quote: 'The evidence demonstrates that transparent negative communication may indeed harm vaccine acceptance here and now but that it increases trust in health authorities.',
                sources: [source('Petersen, Bor, Jørgensen and Lindholt 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2024597118')]
              }),
              evidence({
                headline: 'People accepted a school decision more when the decision makers explained their reasons.',
                finding: paragraph(`
                  In experiments on school decisions, the authors find “that transparency can indeed
                  generate legitimacy”, and that an open meeting was not required: “Decision makers
                  may improve their legitimacy simply by justifying carefully afterward the
                  decisions taken behind closed doors.” The decisions were hypothetical.
                `),
                grade: 'moderate',
                quote: 'Decision makers may improve their legitimacy simply by justifying carefully afterward the decisions taken behind closed doors.',
                sources: [source('de Fine Licht, Naurin, Esaiasson and Gilljam 2014, Governance', 'https://doi.org/10.1111/gove.12021')]
              }),
              evidence({
                headline: 'When political leaders publicly attacked the pandemic numbers, Americans trusted science less.',
                finding: paragraph(`
                  Five survey experiments with more than 6,000 Americans varied who questioned
                  COVID-19 projections. “Criticism from Democratic political elites undermines trust
                  more than criticism from Republicans.” Reversals in the projections cost trust too,
                  so a contested set of facts carries a price.
                `),
                grade: 'strong',
                quote: 'Criticism from Democratic political elites undermines trust more than criticism from Republicans.',
                sources: [source('Kreps and Kriner 2020, Science Advances', 'https://doi.org/10.1126/sciadv.abd4563')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Showing people more of what government does had little effect on their trust, and sometimes lowered it.',
                finding: paragraph(`
                  Parallel experiments in the Netherlands and South Korea found that “transparency
                  has a subdued and sometimes negative effect on trust in government”, with the
                  negative effect much stronger in South Korea. More information does not reliably
                  raise trust.
                `),
                grade: 'strong',
                quote: 'Results reveal similar patterns in both countries: transparency has a subdued and sometimes negative effect on trust in government.',
                sources: [source('Grimmelikhuijsen, Porumbescu, Hong and Im 2013, Public Administration Review', 'https://doi.org/10.1111/puar.12047')]
              }),
              evidence({
                headline: 'Transparency raised trust only under some conditions, and mainly among some citizens.',
                finding: paragraph(`
                  A review of 187 studies of government transparency called for more work on the
                  conditions that shape its effects. In an online experiment, the effect on
                  perceived trustworthiness depended on what people already believed: “changes in
                  perceived competence occur mainly in the group of citizens with high trust and
                  little knowledge, whereas changes in perceived benevolence occur predominantly in
                  the group of citizens with low knowledge and low trust”.
                `),
                grade: 'moderate',
                quote: 'changes in perceived competence occur mainly in the group of citizens with high trust and little knowledge, whereas changes in perceived benevolence occur predominantly in the group of citizens with low knowledge and low trust',
                sources: [
                  source('Grimmelikhuijsen and Meijer 2014, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/mus048'),
                  source('Cucciniello, Porumbescu and Grimmelikhuijsen 2017, Public Administration Review', 'https://doi.org/10.1111/puar.12685')
                ]
              }),
              evidence({
                headline: 'Openness raised acceptance of routine decisions more than decisions that traded off safety.',
                finding: paragraph(`
                  With 1,032 participants, “results indicate that transparency can increase public
                  acceptance of political decisions, but this effect is moderated by the type of
                  policy area”. Transparency did less where the decision traded off life or
                  well-being, which is what a reopening decision does.
                `),
                grade: 'moderate',
                quote: 'Results indicate that transparency can increase public acceptance of political decisions, but this effect is moderated by the type of policy area.',
                sources: [source('de Fine Licht 2014, Public Administration Review', 'https://doi.org/10.1111/puar.12194')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'A parent and community body votes yes or no before any closure',
      method: 'Binding Community Referendum',
      summary: 'A standing council of parents, educators, business owners, and health experts must approve any closure, and a no vote stops it.',
      anchor: 'safety strikes',
      where: 'Large urban districts with the sharpest bargaining asymmetry; Chicago already had the statutory infrastructure',
      when: paragraph(`
        The honest answer is before the pandemic: a body created mid-crisis is not a standing body.
        Within the case window, June to August 2020 in Detroit, San Francisco, Chicago, and New
        York, touching the fall 2020 decision and the spring 2021 reopening negotiations. Chicago's
        Local School Councils are the sharpest comparison: the mechanism existed in statute, and its
        pandemic-era record now carries an evaluation of the 2020 school police decision.
      `),
      description: paragraph(`
        Give a standing school- or district-level council a binding yes or no on closure and
        reopening decisions, within state health orders and collective-bargaining law: schools
        cannot close without its approval. The council has seats for parents, educators, small
        business owners, public-health experts, and community leaders. Each constituency elects or
        appoints its members before any crisis. The district must bring each closure decision to the
        council. A no vote stops the closure, and the district may bring a revised proposal back to
        the council. Justifying a closure to such a body forces the district to compile a public
        body of evidence before it acts. The council sees the same case data the
        district uses and publishes its votes. Chicago's Local School Councils show the form existed
        in statute in 2020. Small business was the constituency the 2020 record left without any
        channel, while parents' participation moved to lawsuits and recall campaigns. Two caveats
        from the review: by the time of a vote the options on the ballot have already shaped the
        decision, so this is mainly a surfacing and accountability mechanism; and scholars of
        political parties would worry that binding community authority weakens elected institutions
        over the long run, a candidate negative outcome the group should weigh. The notes recorded
        the strong form of the idea, and it is kept in that form to sharpen the conversation.
      `),
      outcome: outcome({
        text: 'Having to win approval forces a public case for every closure, which makes the decision accountable and holds confidence in public schools.',
        measured: 'Confidence in public schools fell',
        claims: [
          claim({
            text: 'A standing parent and community body can govern schools competently.',
            evidence: [
              evidence({
                headline: 'Most of Chicago\'s parent-majority school councils carried out their governing duties.',
                finding: paragraph(`
                  Chicago’s elected Local School Councils hire principals on performance contracts,
                  set improvement priorities, and approve budgets. A survey of council members by
                  the Consortium on Chicago School Research estimated that “approximately 10 to 15
                  percent of the LSCs are not viable operating entities. The rest of the councils,
                  which is the overwhelming majority, function well.”
                `),
                grade: 'moderate',
                quote: 'we estimate that approximately 10 to 15 percent of the LSCs are not viable operating entities. The rest of the councils, which is the overwhelming majority, function well.',
                sources: [source('Ryan, Bryk, Lopez, Williams, Hall and Luppescu 1997, Consortium on Chicago School Research', 'https://eric.ed.gov/?id=ED420916')]
              }),
              evidence({
                headline: 'Chicago schools whose councils voted to remove police saw no worsening in discipline or climate.',
                finding: paragraph(`
                  The councils’ highest-profile pandemic-era decision now has an evaluation. Chicago
                  Public Schools gave each high school’s council the 2020 decision on keeping police
                  officers. Schools that voted to remove school resource officers (SROs) “removed
                  SROs without detrimental changes in student disciplinary outcomes or perceptions
                  of school climate”. The authors compared outcomes before and after and say the
                  assumptions for a causal reading are not met.
                `),
                grade: 'moderate',
                quote: 'Schools removed SROs without detrimental changes in student disciplinary outcomes or perceptions of school climate.',
                sources: [source('University of Chicago Consortium on School Research', 'https://consortium.uchicago.edu/publications/removing-police-officers-from-Chicago-schools')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A fifth of the Chicago schools asked to vote on police had no council or no quorum.',
                finding: paragraph(`
                  The record documents capacity strain. When Chicago delegated the 2020 police vote,
                  “more than a fifth of the 72 schools with police officers assigned to them either
                  don't have LSCs at all or don't have enough members to form a quorum”. The count
                  comes from a parent advocacy group, relayed by a news outlet.
                `),
                grade: 'weak',
                quote: 'More than a fifth of the 72 schools with police officers assigned to them either don\'t have LSCs at all or don\'t have enough members to form a quorum',
                sources: [source('WBEZ Chicago', 'https://www.npr.org/local/309/2020/07/14/890756361/20-of-schools-lack-enough-local-school-council-members-to-vote-on-keeping-police')]
              }),
              evidence({
                headline: 'More than 1,400 Chicago council seats sat empty after an election.',
                finding: paragraph(`
                  Vacancies persisted. After the April 2022 council elections, “more than 1,400 LSC
                  seats remain empty at hundreds of schools”. The count comes from a news explainer
                  with no named data source.
                `),
                grade: 'weak',
                quote: 'After high voter turnout in the April election, more than 1,400 LSC seats remain empty at hundreds of schools.',
                sources: [source('Chalkbeat Chicago', 'https://www.chalkbeat.org/chicago/2022/9/1/23333494/chicago-public-schools-local-school-councils-vacancies-raise-your-hand/')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Chicago Local School Councils',
                where: 'Chicago', when: '1988-present',
                authority: 'Binding: hire principals, set budgets, parent majority',
                outcome: paragraph(`
                  Elected parent-majority councils hire principals and approve budgets at each
                  Chicago public school, 550 of them in 2002. They are the closest US analog to a
                  standing binding parent channel. A 1995-96 survey estimated that 10 to 15 percent
                  were not viable and that the overwhelming majority functioned well. In 2020
                  Chicago Public Schools gave each high school’s council the decision on keeping
                  police officers, and schools that removed officers saw no detrimental changes in
                  discipline or school climate. The record also documents strain: more than a fifth
                  of the 72 schools with officers lacked a council or a quorum for that vote, and
                  more than 1,400 seats sat empty after the 2022 elections.
                `),
                strength: 'moderate',
                sources: [
                  source('Ryan, Bryk, Lopez, Williams, Hall and Luppescu 1997, Consortium on Chicago School Research', 'https://eric.ed.gov/?id=ED420916'),
                  source('University of Chicago Consortium on School Research', 'https://consortium.uchicago.edu/publications/removing-police-officers-from-Chicago-schools'),
                  source('WBEZ Chicago', 'https://www.npr.org/local/309/2020/07/14/890756361/20-of-schools-lack-enough-local-school-council-members-to-vote-on-keeping-police'),
                  source('Chalkbeat Chicago', 'https://www.chalkbeat.org/chicago/2022/9/1/23333494/chicago-public-schools-local-school-councils-vacancies-raise-your-hand/')
                ]
              }),
              supportingCase({
                name: 'Ostbelgien Permanent Citizens Council',
                where: 'Belgium', when: '2019-present',
                authority: 'Created by decree; agenda-setting power and mandatory institutional follow-up',
                outcome: paragraph(`
                  A decree created a permanent Citizens’ Council that picks topics and convenes
                  rotating Citizens’ Assemblies, and six assemblies ran in the first five years,
                  most through the parliament’s formal follow-up. The observing research team
                  reports that early recommendations often “already existed to a certain degree or
                  were deemed too vague” to become law, and that anchoring the process in a decree
                  secured it beyond the next elections. The team concludes that institutionalized
                  citizen deliberation remains in its infancy, and reports no measured trust or
                  policy outcome.
                `),
                strength: 'weak',
                sources: [source('Deliberative Democracy Digest', 'https://www.publicdeliberation.net/the-ostbelgien-model-five-years-on/')]
              }),
              supportingCase({
                name: 'Finnish and Swedish Municipal Nuclear Waste Veto',
                where: 'Finland and Sweden', when: '1980s-2020s',
                authority: 'Host municipalities held formal veto power, with funded independent review',
                outcome: paragraph(`
                  In both countries a host municipality’s consent is required for a repository,
                  which the source describes as local veto power. In Sweden, the Nuclear Waste Fund
                  paid the two Osthammar staff who reviewed the plan, so the municipality could
                  assess it independently of industry, and the operator reported strong local
                  support. Near Finland’s Olkiluoto site, a Eurajoki official called the process
                  satisfactory, while a member of parliament suggested the municipality was chosen
                  because it already supported nuclear power and collected taxes from the plant. As
                  of August 2026, Finland’s repository still needed a government operating licence
                  before disposal could begin.
                `),
                strength: 'weak',
                sources: [
                  source('Bellona 2016', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710'),
                  source('NucNet 2026', 'https://smr.nucnet.org/news/drilling-begins-for-first-final-disposal-hole-at-onkalo-repository-in-finland-8-1-2026')
                ]
              })
            ]
          }),
          claim({
            text: 'Having to justify a decision to an outside body puts the evidence on the public record.',
            evidence: [
              evidence({
                headline: 'When residents used a legal records request instead of simply asking, local councils handed over more information.',
                finding: paragraph(`
                  Small English councils were sent either a formal freedom of information request or
                  an informal ask for the same material, assigned at random. “FOI requests are more
                  effective than simple asks and the size or preexisting level of openness of a body
                  appears to make little difference to their responsiveness.” A legal duty to answer
                  an outside party beats goodwill.
                `),
                grade: 'strong',
                quote: 'FOI requests are more effective than simple asks and the size or preexisting level of openness of a body appears to make little difference to their responsiveness.',
                sources: [source('Worthy, John and Vannoni 2016, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/muw063')]
              }),
              evidence({
                headline: 'When central bankers learned their meeting records would be published, their discussions leaned harder on data.',
                finding: paragraph(`
                  Policy makers at the US central bank learned in 1993 that transcripts of their
                  meetings would be released. Afterward, “the most striking results are that
                  meetings become less interactive, more scripted, and more quantitatively
                  oriented”. The authors find better preparation alongside more conformity, and
                  conclude that preparation wins out.
                `),
                grade: 'strong',
                quote: 'The most striking results are that meetings become less interactive, more scripted, and more quantitatively oriented.',
                sources: [source('Hansen, McMahon and Prat 2018, Quarterly Journal of Economics', 'https://doi.org/10.1093/qje/qjx045')]
              }),
              evidence({
                headline: 'Britain\'s records law made central government more open, without the chilling effect officials feared.',
                finding: paragraph(`
                  A decade of research on the United Kingdom’s freedom of information law found it
                  “has met its ‘core’ objectives, making central government more transparent and
                  accountable. However, it has not improved decision-making, public understanding,
                  participation or trust. Nor has FOI significantly changed how government works,
                  despite politicians’ fears of a chilling effect.”
                `),
                grade: 'moderate',
                quote: 'They conclude that FOI has met its ‘core’ objectives, making central government more transparent and accountable. However, it has not improved decision-making, public understanding, participation or trust. Nor has FOI significantly changed how government works, despite politicians\' fears of a chilling effect.',
                sources: [source('Worthy and Hazell 2017, Parliamentary Affairs', 'https://doi.org/10.1093/pa/gsv069')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'After central bankers learned their transcripts would be released, fewer of them voiced disagreement with the chair.',
                finding: paragraph(`
                  Using the same 1993 decision, the authors ask whether publication “altered
                  incentives for dissent” and “find evidence that this is indeed the case”. A public
                  record can capture safer, less candid reasoning.
                `),
                grade: 'strong',
                quote: 'We test the model using an original dataset based on deliberations of the Federal Reserve\'s Federal Open Market Committee, asking whether the FOMC\'s 1993 decision to begin releasing transcripts of its meetings has altered incentives for dissent. We find evidence that this is indeed the case.',
                sources: [source('Meade and Stasavage 2008, Economic Journal', 'https://doi.org/10.1111/j.1468-0297.2008.02138.x')]
              }),
              evidence({
                headline: 'Agencies required to write analyses of major rules often produced weak ones, and most showed no sign of using them.',
                finding: paragraph(`
                  Reviewers scored the analyses required for a year of major US federal rules. The
                  weakest parts were the account of the underlying problem and the review of past
                  results, and only “a minority of the regulations contain evidence that the agency
                  used the analysis in significant decisions”. A duty to justify can produce
                  paperwork rather than evidence.
                `),
                grade: 'moderate',
                quote: 'a minority of the regulations contain evidence that the agency used the analysis in significant decisions',
                sources: [source('Ellig and McLaughlin 2012, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.2011.01715.x')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'A body that can say no holds decision makers to account.',
            evidence: [
              evidence({
                headline: 'When Kenyan parents on school committees got real say over locally hired teachers, fewer jobs went to relatives.',
                finding: paragraph(`
                  Schools were assigned at random to hire a teacher locally on a performance
                  contract, with or without training that gave parents real standing. Existing
                  teachers steered about a third of the posts to relatives and cut their own effort,
                  but “a governance program that empowered parents within school committees reduced
                  both forms of capture”. It is the closest fit found to a body that can say no.
                `),
                grade: 'strong',
                quote: 'Civil-service teachers also captured rents for their families, with approximately 1/3 of contract teacher positions going to relatives of existing teachers. A governance program that empowered parents within school committees reduced both forms of capture.',
                sources: [source('Duflo, Dupas and Kremer 2015, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2014.11.008')]
              }),
              evidence({
                headline: 'Where Swiss cantons required a public vote on major spending, governments spent less.',
                finding: paragraph(`
                  Using more than a century of cantonal history, the authors find that “direct
                  democracy constrains canton spending but its effect is more modest than previously
                  suggested. The instrumental variable estimates show that a mandatory budget
                  referendum reduces canton expenditures by 12%.” A required approval vote changes
                  what governments do, though the voting body is the whole electorate.
                `),
                grade: 'strong',
                quote: 'We find that direct democracy constrains canton spending but its effect is more modest than previously suggested. The instrumental variable estimates show that a mandatory budget referendum reduces canton expenditures by 12%.',
                sources: [source('Funk and Gathmann 2011, Economic Journal', 'https://doi.org/10.1111/j.1468-0297.2011.02451.x')]
              }),
              evidence({
                headline: 'Where citizens could put a law on the ballot, legislatures passed laws closer to what the typical voter wanted.',
                finding: paragraph(`
                  Comparing states, “parental consent laws passed by legislatures in initiative
                  states more closely reflect their state’s median voter’s preference than parental
                  consent laws passed in states that prohibit initiatives, even after controlling
                  for other population and institutional differences across states”. The threat of
                  being overridden kept officials closer to the public.
                `),
                grade: 'moderate',
                quote: 'Parental consent laws passed by legislatures in initiative states more closely reflect their state\'s median voter\'s preference than parental consent laws passed in states that prohibit initiatives, even after controlling for other population and institutional differences across states.',
                sources: [source('Gerber 1996, American Journal of Political Science', 'https://doi.org/10.2307/2111696')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Repeated on a much larger scale, community oversight of clinics did not make citizens press harder or improve health.',
                finding: paragraph(`
                  A large follow-up to an influential community monitoring experiment found that
                  “while we find modest positive impacts on health provider behavior, we find no
                  effects on citizen pressure, utilization rates, or bottom-line health outcomes”.
                  Oversight without formal power often changes little.
                `),
                grade: 'strong',
                quote: 'While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes.',
                sources: [source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577')]
              }),
              evidence({
                headline: 'Government audits cut theft from village road projects, while inviting residents to monitor did little.',
                finding: paragraph(`
                  Raising the chance of a government audit reduced missing funds. “By contrast,
                  increasing grassroots participation in monitoring had little average impact,
                  reducing missing expenditures only in situations with limited free-rider problems
                  and limited elite capture.” Professional oversight beat community oversight here,
                  though residents could not block anything.
                `),
                grade: 'strong',
                quote: 'By contrast, increasing grassroots participation in monitoring had little average impact, reducing missing expenditures only in situations with limited free‐rider problems and limited elite capture.',
                sources: [source('Olken 2007, Journal of Political Economy', 'https://doi.org/10.1086/517935')]
              }),
              evidence({
                headline: 'Police departments with civilian oversight boards did no better on most measures and solved fewer crimes.',
                finding: paragraph(`
                  Comparing similar agencies with and without civilian oversight, “civilian
                  oversight turns out to have a significant influence only on police agencies’
                  clearance rates”, which were 2.71 percentage points lower where oversight existed.
                  The study lumps together boards with and without power to discipline.
                `),
                grade: 'moderate',
                quote: 'Among the dependent variables included in the analysis as performance indicators, civilian oversight turns out to have a significant influence only on police agencies’ clearance rates. The police agencies with civilian oversight have lower clearance rates by 2.71 percentage points on average compared to those without civilian oversight.',
                sources: [source('Kim 2022, American Review of Public Administration', 'https://doi.org/10.1177/02750740221098344')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'A binding role before decisions raises trust and engagement.',
            evidence: [
              evidence({
                headline: 'New Yorkers who took part in participatory budgeting became more likely to vote.',
                finding: paragraph(`
                  Matching participants to the voter file and comparing them with similar residents
                  of districts without the program, the authors find that “engaging with
                  participatory budgeting increased individuals' probability of voting by an average
                  of 8.4 percentage points”, most of all among people who usually vote least.
                  Allocating money is not the same as holding a veto.
                `),
                grade: 'moderate',
                quote: 'engaging with participatory budgeting increased individuals\' probability of voting by an average of 8.4 percentage points',
                sources: [source('Johnson, Carlson and Reynolds 2023, Political Behavior', 'https://doi.org/10.1007/s11109-021-09679-w')]
              }),
              evidence({
                headline: 'Americans in states that vote often on ballot measures felt more able to follow politics and more listened to.',
                finding: paragraph(`
                  Linking a national survey to state institutions, the authors “present evidence that
                  the effects of exposure to direct democracy on internal and external political
                  efficacy rival the effects of formal education”. Living where citizens can decide
                  goes with feeling more capable and more heard.
                `),
                grade: 'moderate',
                quote: 'We present evidence that the effects of exposure to direct democracy on internal and external political efficacy rival the effects of formal education.',
                sources: [source('Bowler and Donovan 2002, British Journal of Political Science', 'https://doi.org/10.1017/S0007123402000157')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Civilian police review boards did not raise the public\'s sense that policing was legitimate.',
                finding: paragraph(`
                  A preregistered experiment with 2,503 US adults found “no statistically significant
                  evidence that the presence of a CRB increases aggregate perceptions of procedural
                  legitimacy”. Trust in both the board and the police fell when the two disagreed
                  about whether misconduct occurred.
                `),
                grade: 'strong',
                quote: 'no statistically significant evidence that the presence of a CRB increases aggregate perceptions of procedural legitimacy',
                sources: [source('Schiff and colleagues 2025, PNAS Nexus', 'https://doi.org/10.1093/pnasnexus/pgaf267')]
              }),
              evidence({
                headline: 'States that leaned hardest on citizen ballot measures ended up with weaker party organizations.',
                finding: paragraph(`
                  This is the candidate negative outcome the review raised: that binding community
                  authority may weaken elected institutions over time. Tracing a century of direct
                  democracy, the authors find that “use of the initiative throughout the twentieth
                  century led to more restrictive state legal environments for parties and was
                  associated with weaker traditional party organizations”. The comparison is across
                  states rather than a test, the same movement drove both the initiative and the
                  anti-party laws, and other work finds parties held members better where direct
                  democracy was stronger.
                `),
                grade: 'moderate',
                quote: 'Use of the initiative throughout the twentieth century led to more restrictive state legal environments for parties and was associated with weaker traditional party organizations.',
                sources: [source('Bowler and Donovan 2006, Party Politics', 'https://doi.org/10.1177/1354068806066792')]
              }),
              evidence({
                headline: 'People living in states that vote often on ballot measures trust their government less.',
                finding: paragraph(`
                  Using two surveys, the author finds that “ballot initiatives in the American states
                  do indeed create an environment that encourages citizens to distrust their
                  government”. The comparison is across states at one time, and it points the
                  opposite way from the efficacy finding above.
                `),
                grade: 'moderate',
                quote: 'Using data from two surveys, I demonstrate that ballot initiatives in the American states do indeed create an environment that encourages citizens to distrust their government.',
                sources: [source('Dyck 2009, American Politics Research', 'https://doi.org/10.1177/1532673X08330635')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Brazilian Municipal Participatory Budgeting',
                where: 'Brazil', when: '1990-2004',
                authority: 'Residents set spending priorities, annual, city scale',
                outcome: paragraph(`
                  Cities that adopted participatory budgeting let residents set priorities for part
                  of the municipal budget each year. In a panel of Brazil’s largest cities, the
                  practice was “strongly associated with increases in health care spending,
                  increases in civil society organizations, and decreases in infant mortality
                  rates”, and a second study found adopting cities put more of their budgets into
                  sanitation and health. Participatory budgeting allocates spending; it does not
                  give residents a veto.
                `),
                strength: 'moderate',
                sources: [
                  source('Touchton and Wampler 2014, Comparative Political Studies', 'https://doi.org/10.1177/0010414013512601'),
                  source('Gonçalves 2014, World Development', 'https://doi.org/10.1016/j.worlddev.2013.01.009')
                ]
              }),
              supportingCase({
                name: 'Oregon Citizens Initiative Review',
                where: 'Oregon', when: '2010-present',
                authority: 'Statutory standing panel; statement placement binding, content advisory to voters',
                outcome: paragraph(`
                  A panel of randomly selected citizens deliberates on a ballot measure, and the
                  state prints their statement in the official Voters’ Pamphlet. In a 2010 statewide
                  panel survey and a 2012 cross-section, voters aware of the review reported more
                  confidence that government responds to them, and voters who used the statements
                  reported more confidence in their own political competence.
                `),
                strength: 'moderate',
                sources: [source('Knobloch, Barthel and Gastil 2020, Political Studies', 'https://doi.org/10.1177/0032321719852254')]
              })
            ]
          }),
          claim({
            text: 'A voice before decisions reduces recalls and lawsuits after them.',
            evidence: [],
            counterEvidence: [
              evidence({
                headline: 'School board recall efforts hit a record in 2021, driven partly by reactions to pandemic policies.',
                finding: paragraph(`
                  A nonpartisan tracker counted 84 school board recall efforts against 215 board
                  members in 2021, the most in any year it has tracked, against an average of 28 a
                  year over the previous decade. It named “reactions to the coronavirus and
                  government responses to the pandemic” as one driving force. Nothing here shows
                  whether a prior voice would have prevented them.
                `),
                grade: 'moderate',
                quote: 'Ballotpedia has tracked 84 school board recall efforts against 215 board members in 2021.',
                sources: [source('Ballotpedia 2021', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/')]
              })
            ],
            cases: []
          })
        ]
      }),
      sources: []
    })
  ]
});
