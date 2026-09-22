import {
  spineData, mechanism, impact, spineProposal, outcome, claim,
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
      name: 'A randomly selected group of residents deliberates on reopening.',
      method: 'Citizens\' Assembly',
      summary: 'Residents chosen by lot study the reopening choice and recommend a plan before officials decide.',
      anchor: 'Return to School Roadmap',
      where: 'Whichever body makes the reopening decision, whether a district, a county, or a state.',
      when: paragraph(`
        May to June 2020, to shape the fall 2020 choice between in-person and remote school. An
        assembly seated after August 2020 misses that choice.
      `),
      description: paragraph(`
        A group of residents chosen by lot weighs how schools in its area should reopen. The body
        that makes the reopening decision seats the assembly in May 2020. Members hear from public
        health, education, and building safety experts. They deliberate for several weeks and then
        vote. Seats rotate on a fixed schedule so no group settles in. The assembly works within
        public health orders and civil rights law. Whoever decides must publish the evidence the
        assembly saw. Ireland used this form on abortion law. Its citizens' assembly met from 2016
        to 2017, and the bill put to voters in 2018 followed the assembly rather than the
        parliamentary committee. Ireland's assembly ran for more than a year, so this proposal asks
        for a much faster body. In 2020, Michigan created an appointed advisory council in May and
        named its members in June. That fall, a nonprofit chose 30 Michigan residents by lottery and
        ran a COVID-19 panel online in six weeks, too late for the reopening decision. Its
        recommendations did not cover schools. The assembly's choice binds the district directly or
        goes to voters as a referendum. Sending it to the school board as advice is the weaker
        route, because people accepted a decision less when officials set a citizen panel's advice
        aside than when no panel existed. The gain is smaller among people with strong partisan
        views, and reopening was among the most partisan choices of the period. The group's notes
        asked for binding decisions so that results could vary by place and be compared. People on
        the losing side of a decision accept it less and judge the process less fair, and each
        further loss deepens that. The aim is that residents accept the reopening decision as fair,
        even those who wanted differently, and keep their confidence in public schools.
      `),
      outcome: outcome({
        text: 'Residents accept the district\'s reopening decision as fair, even those who wanted differently, and keep their confidence in public schools.',
        measured: 'Confidence in public schools fell',
        claims: [
          claim({
            text: 'Given enough time, a randomly selected panel reaches an informed judgment of its own on local trade-offs.',
            evidence: [
              evidence({
                headline: 'Residents who talked through two local questions changed their views most on the one they had known least about.',
                finding: paragraph(`
                  Residents of New Haven and nearby towns deliberated airport expansion and regional
                  revenue sharing, with the order of the two topics assigned at random. “As expected,
                  the highly salient airport issue saw only a slight effect, while much less salient
                  revenue-sharing issue saw a much larger one.” What residents learned about a local
                  question moved their views most where they had started with little information.
                `),
                grade: 'strong',
                quote: 'As expected, the highly salient airport issue saw only a slight effect, while much less salient revenue-sharing issue saw a much larger one.',
                sources: [source('Farrar and colleagues 2010, British Journal of Political Science', 'https://doi.org/10.1017/S0007123409990433')]
              }),
              evidence({
                headline: 'Residents reached their own conclusions on local questions no matter which neighbors they were seated with.',
                finding: paragraph(`
                  Farrar and colleagues (2009) studied three events where participants were placed at
                  random in 330 small discussion groups. The views of a participant’s group mates had
                  little pull on where that participant ended up: “We find only sporadic evidence of
                  group composition effects.” Members’ conclusions did not depend on the luck of the
                  seating.
                `),
                grade: 'strong',
                quote: 'We find only sporadic evidence of group composition effects.',
                sources: [source('Farrar and colleagues 2009, Political Psychology', 'https://doi.org/10.1111/j.1467-9221.2009.00717.x')]
              }),
              evidence({
                headline: 'Randomly selected Finns weighing COVID-19 restrictions reached their views regardless of which experts briefed them or in what order.',
                finding: paragraph(`
                  Leino and colleagues (2022) ran an online panel of randomly selected Finns who weighed
                  containment measures after hearing experts from different fields, in varied order.
                  “We find that neither the field of expertise nor the order of hearings had systematic
                  effects on participants’ perceptions on containment measures.”
                `),
                grade: 'moderate',
                quote: 'We find that neither the field of expertise nor the order of hearings had systematic effects on participants’ perceptions on containment measures.',
                sources: [source('Leino and colleagues 2022, Policy Sciences', 'https://doi.org/10.1007/s11077-022-09465-3')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When discussion leaders were assigned at random to town meetings, the leader shaped much of what each meeting concluded.',
                finding: paragraph(`
                  Humphreys, Masters and Sandbu (2006) studied a national deliberation in São Tomé and
                  Príncipe where discussion leaders were assigned to meetings at random. “They find that
                  leader effects were extremely large, in many cases accounting for over one-third of
                  all variation in the outcomes of the national discussions.” The person running the
                  meeting, rather than the conditions members described, drove much of the result.
                `),
                grade: 'strong',
                quote: 'They find that leader effects were extremely large, in many cases accounting for over one-third of all variation in the outcomes of the national discussions.',
                sources: [source('Humphreys, Masters and Sandbu 2006, World Politics', 'https://doi.org/10.1353/wp.2007.0008')]
              }),
              evidence({
                headline: 'Most citizens\' juries on health met for less time than recommended, leaving little room for real discussion.',
                finding: paragraph(`
                  Street and colleagues (2014) reviewed 66 citizens’ juries on health questions. They
                  found that “many juries were shorter duration than originally recommended, limiting
                  opportunity for constructive dialogue. With respect to citizenship, few juries’ rulings
                  were considered by decision-making bodies thereby limiting transfer into policy and
                  practice.”
                `),
                grade: 'moderate',
                quote: 'Many juries were shorter duration than originally recommended, limiting opportunity for constructive dialogue. With respect to citizenship, few juries\' rulings were considered by decision-making bodies thereby limiting transfer into policy and practice.',
                sources: [source('Street and colleagues 2014, Social Science and Medicine', 'https://doi.org/10.1016/j.socscimed.2014.03.005')]
              })
            ]
          }),
          claim({
            text: 'A panel whose advice officials follow makes the decision look fairer to the public.',
            evidence: [
              evidence({
                headline: 'Belgians supported a decision more when the government followed a citizen panel\'s advice, and less when it ignored the advice, than when politicians decided alone.',
                finding: paragraph(`
                  Van Dijk and Lefevere (2023) ran a survey experiment with 3,102 Belgians. Compared with
                  a decision made by representatives, “a minipublic tends to bring about higher
                  political support when its recommendations are fully adopted by the government,
                  whereas it generates lower political support when its recommendations are not
                  adopted”. An assembly whose advice is set aside can leave people less accepting than
                  no assembly at all.
                `),
                grade: 'strong',
                quote: 'a minipublic tends to bring about higher political support when its recommendations are fully adopted by the government, whereas it generates lower political support when its recommendations are not adopted',
                sources: [source('van Dijk and Lefevere 2023, European Journal of Political Research', 'https://doi.org/10.1111/1475-6765.12523')]
              }),
              evidence({
                headline: 'Irish adults judged a decision that went against them as fairer when a randomly selected citizen panel took part in the decision-making.',
                finding: paragraph(`
                  Germann, Marien and Muradova (2024) ran a pre-registered experiment with 1,309 Irish
                  adults, all told the decision went against them. Involving a panel of randomly
                  selected citizens raised perceived fairness by 0.7 points on a 0 to 10 scale, and by
                  almost a full point where officials honored the panel’s recommendation. The authors
                  conclude that “mini-publics increase legitimacy perceptions among the broader
                  citizenry; however, these beneficial effects are largely limited to situations in
                  which their recommendations are honored.”
                `),
                grade: 'strong',
                quote: 'Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored.',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
              }),
              evidence({
                headline: 'Members of a citizens\' assembly who lost its votes were about as satisfied with how it was run as members who won.',
                finding: paragraph(`
                  Blais, Daoust, Dassonneville and Fournier (2025) surveyed about 100 residents of
                  Longueuil, Quebec, first invited by letters to random addresses, at a weekend assembly that voted on four changes
                  to elections. “We find a high degree of satisfaction with the conduct of the assembly,
                  among both winners and losers.” Losing more votes did not go with lower satisfaction.
                  The authors note the questions drew little public attention, so the result may not
                  hold on a divisive issue.
                `),
                grade: 'moderate',
                quote: 'We find a high degree of satisfaction with the conduct of the assembly, among both winners and losers.',
                sources: [source('Blais, Daoust, Dassonneville and Fournier 2025, Canadian Journal of Political Science', 'https://doi.org/10.1017/S0008423924000775')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In a deeply divided region, the more polarized people were, the less legitimate they found a citizens\' assembly.',
                finding: paragraph(`
                  Van Dijk, Turkenburg and Pow (2023) surveyed 932 people in Northern Ireland, where an
                  assembly met on the region’s constitutional future. They found that “higher levels of
                  ideological polarization and, to an extent, affective polarization are associated
                  with lower levels of perceived minipublic legitimacy among the wider public, although
                  effects are small”. The survey compares people at one point in time.
                `),
                grade: 'moderate',
                quote: 'higher levels of ideological polarization and, to an extent, affective polarization are associated with lower levels of perceived minipublic legitimacy among the wider public, although effects are small',
                sources: [source('van Dijk, Turkenburg and Pow 2023, European Political Science Review', 'https://doi.org/10.1017/S1755773922000649')]
              }),
              evidence({
                headline: 'Adding a citizen panel to a public vote raised acceptance only when the panel agreed with the vote, and lowered it when they disagreed.',
                finding: paragraph(`
                  Koenen, Jacobs and Lehr (2026) ran a survey experiment with a representative sample of
                  Dutch adults. “We find a positive significant effect among our respondents when there
                  is congruence between the deliberative mini-public and the referendum outcome and a
                  negative significant effect when there is incongruence.” On average the two effects
                  cancelled out. The gain among people on the losing side appeared only when the panel
                  and the vote agreed.
                `),
                grade: 'strong',
                quote: 'We find a positive significant effect among our respondents when there is congruence between the deliberative mini-public and the referendum outcome and a negative significant effect when there is incongruence.',
                sources: [source('Koenen, Jacobs and Lehr 2026, Political Behavior', 'https://doi.org/10.1007/s11109-026-10132-z')]
              })
            ]
          }),
          claim({
            text: 'People who see a process as fair accept its decision, even when it goes against them.',
            evidence: [
              evidence({
                headline: 'A fair process did the most to soften people\'s reactions when the outcome went against them.',
                finding: paragraph(`
                  Brockner and Wiesenfeld (1996) reviewed 45 independent samples, mostly from
                  workplaces and other organizations. They found that “level of procedural justice is
                  more positively related to individuals’ reactions when outcome fairness or valence is
                  relatively low”. A fair process mattered most to the people who did not get what they
                  wanted.
                `),
                grade: 'moderate',
                quote: 'level of procedural justice is more positively related to individuals\' reactions when outcome fairness or valence is relatively low',
                sources: [source('Brockner and Wiesenfeld 1996, Psychological Bulletin', 'https://doi.org/10.1037/0033-2909.120.2.189')]
              }),
              evidence({
                headline: 'People judged a policy result more legitimate when the process behind it seemed fairer to them.',
                finding: paragraph(`
                  Martin, Mikołajczak and Orr (2022) varied how a policy was made in survey experiments.
                  They “find that fair procedural arrangements increase outcome legitimacy to the extent
                  that citizens perceive them to be fairer”. The abstract does not say whether the
                  effect differed for people who opposed the policy.
                `),
                grade: 'strong',
                quote: 'we find that fair procedural arrangements increase outcome legitimacy to the extent that citizens perceive them to be fairer',
                sources: [source('Martin, Mikołajczak and Orr 2022, International Political Science Review', 'https://doi.org/10.1177/0192512120908874')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'What a decision delivers moves acceptance far more than how the decision was made.',
                finding: paragraph(`
                  Esaiasson, Persson, Gilljam and Lindholm (2019) tested procedure and outcome together
                  across vignette and field experiments. They found that “outcome favorability is the
                  dominant determinant of decision acceptance”, and conclude that “democratic
                  governments can achieve little in terms of acceptance of policy decisions by the
                  procedural means at their disposal”.
                `),
                grade: 'strong',
                quote: 'outcome favorability is the dominant determinant of decision acceptance',
                sources: [source('Esaiasson, Persson, Gilljam and Lindholm 2019, British Journal of Political Science', 'https://doi.org/10.1017/S0007123416000508')]
              }),
              evidence({
                headline: 'People found a decision far more acceptable when it went their way, and having a say in it did little to change that.',
                finding: paragraph(`
                  Arnesen (2017) ran two survey experiments with the general population. “Respondents
                  who saw the decision going in their favour found the decision much more acceptable
                  than the respondents who preferred another outcome. Conversely, decision-making
                  influence generally did not serve as a legitimising factor among the respondents.”
                `),
                grade: 'strong',
                quote: 'Respondents who saw the decision going in their favour found the decision much more acceptable than the respondents who preferred another outcome. Conversely, decision-making influence generally did not serve as a legitimising factor among the respondents.',
                sources: [source('Arnesen 2017, Political Studies', 'https://doi.org/10.1177/0032321716667956')]
              })
            ]
          }),
          claim({
            text: 'People who see a decision as fairly made keep trusting the institution behind it.',
            evidence: [
              evidence({
                headline: 'Residents who judged a large land-use decision to be fairly made trusted the authority behind it more and accepted its outcome more readily.',
                finding: paragraph(`
                  Grimes (2006) surveyed the same residents more than once during a dispute over a
                  large land-use project. She found that “assessments of procedural fairness have a
                  bearing on two conceptualizations of subjective legitimacy: respondents’ trust for
                  the authority and their willingness to accept a decision outcome”. Following the
                  same people over time lets the study test whether fairness judgments came first.
                  Fairness was what residents perceived, not a process that was varied.
                `),
                grade: 'moderate',
                quote: 'The results indicate that assessments of procedural fairness have a bearing on two conceptualizations of subjective legitimacy: respondents\' trust for the authority and their willingness to accept a decision outcome.',
                sources: [source('Grimes 2006, European Journal of Political Research', 'https://doi.org/10.1111/j.1475-6765.2006.00299.x')]
              }),
              evidence({
                headline: 'People who watched a school board hear residents and answer them trusted local officials more than people who watched a meeting with no public voice.',
                finding: paragraph(`
                  Collins (2021) showed survey respondents, with extra recruitment of racial and
                  ethnic minorities and low-income households, a clip of a real school board meeting
                  chosen at random. The meeting had no public participation, public participation, or
                  public participation followed by a reasoned response from the board. “The
                  experience of viewing the more participatory and deliberative school board meetings
                  led to increased trust in local officials and a stronger willingness to attend
                  school board meetings in the future.” Respondents watched a meeting rather than
                  taking part, and the measure is trust in local officials rather than confidence in
                  public schools.
                `),
                grade: 'strong',
                quote: 'The experience of viewing the more participatory and deliberative school board meetings led to increased trust in local officials and a stronger willingness to attend school board meetings in the future.',
                sources: [source('Collins 2021, American Political Science Review', 'https://doi.org/10.1017/S0003055421000320')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Americans who saw the Supreme Court as leaning against their politics judged it a far less legitimate institution.',
                finding: paragraph(`
                  Bartels and Johnston (2013) used a national survey and a survey experiment. They
                  found that “subjective ideological disagreement exhibits a potent, deleterious
                  impact on legitimacy”. Whether people felt the Court’s rulings matched their own
                  politics shaped their support for the institution itself. The survey compares
                  people at one point in time, the experiment tests the mechanism, and the
                  institution is a national court rather than a school system.
                `),
                grade: 'moderate',
                quote: 'Analysis of a national survey shows that subjective ideological disagreement exhibits a potent, deleterious impact on legitimacy.',
                sources: [source('Bartels and Johnston 2013, American Journal of Political Science', 'https://doi.org/10.1111/j.1540-5907.2012.00616.x')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('Kern, Mariën and Muradova 2024, European Political Science Review', 'https://doi.org/10.1017/S175577392300036X'),
        source('Craig, Martinez, Gainous and Kane 2006, Political Research Quarterly', 'https://doi.org/10.1177/106591290605900407'),
        source('Anderson and Guillory 1997, American Political Science Review', 'https://doi.org/10.2307/2952259'),
        source('CMU News, citizens\' panel on COVID-19 in Michigan', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html'),
        source('Citizens\' Panel on COVID-19 final report, archived', 'https://perma.cc/M2H9-BDVC')
      ]
    }),

    spineProposal({
      name: 'A council of parents, teachers, and experts designs each school\'s reopening plan.',
      method: 'Stakeholder Advisory Council',
      summary: 'Parents, teachers, and residents work with building and health experts to draft a reopening plan for each school, and the board must answer it.',
      anchor: 'physical presence in school',
      where: 'Districts or counties, starting with the large urban districts that began fall 2020 remote only.',
      when: paragraph(`
        April to July 2020, before the fall 2020 decision and before spending on ventilation and
        outdoor space. Evidence that in-person school with precautions was not usually linked to
        rapid spread arrived only in January 2021.
      `),
      description: paragraph(`
        Parents, teachers, and residents who know the schools draft a reopening plan for each
        building. The district convenes the council in April 2020, before the fall decision, and
        recruits members who reflect its families. Experts in ventilation, epidemiology, behavioral
        science, and early childhood brief the council. Members meet for four to eight weeks. For
        each school they weigh options such as outdoor classes, ventilation upgrades, and bringing
        the youngest grades back first, with a cost for each. The school board keeps the decision.
        It must publish the plans and answer each one in writing. This council differs from a
        citizens' assembly because it seats the people closest to the schools rather than a random
        draw of residents. In 2020, large urban districts chose between open and closed for all
        their schools at once, even though buildings and constraints differed sharply. Whether a
        district opened in person tracked local partisanship and union strength far more than how
        bad the virus was locally. That pull was strongest on the first open or closed choice and
        weaker on how schools ran. A council like this can lose its power in practice. In the 1980s,
        Salt Lake City gave school councils equal parent and teacher seats and broad authority, and
        principals still controlled the decisions that mattered. The board's duty to answer each
        plan in writing is meant to guard against that. No study here tests whether a written answer
        prevents that capture. Each school then reopens under a plan built around its own building,
        staff, and families, rather than one district-wide rule. The aim is that teachers stay in
        their schools and students come back to class.
      `),
      outcome: outcome({
        text: 'Teachers stay in their schools, and students come back to class.',
        measured: 'Chronic absenteeism stayed high',
        claims: [
          claim({
            text: 'Teachers and families return more readily to schools they see as safe.',
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
                headline: 'In schools that kept teaching in person, better ventilation probably lowered infections among staff and students.',
                finding: paragraph(`
                  A Cochrane review of the measures schools used to stay open during the pandemic
                  reports that “moderate-certainty evidence showed that ventilation measures probably
                  reduce cases among staff and students”. The reviewers rate about half of their
                  groups of evidence as low or very low certainty. Most of the main studies come from
                  the Americas.
                `),
                grade: 'strong',
                quote: 'Moderate-certainty evidence showed that ventilation measures probably reduce cases among staff and students.',
                sources: [source('Littlecott, Krishnaratne and colleagues 2024, Cochrane Database of Systematic Reviews', 'https://doi.org/10.1002/14651858.CD015029.pub2')]
              }),
              evidence({
                headline: 'When decisions about schooling moved to local governments, schools matched what each community wanted more closely.',
                finding: paragraph(`
                  A review of decentralization studies in developing countries sorted the evidence
                  by how credible each study’s design was. Unweighted, the literature looks weak and
                  contradictory. Weighted by quality, a pattern appears: “Decentralization also
                  improves preference matching in education, and can do so in health under certain
                  conditions, although there is less evidence for both.” The authors call the
                  evidence on preference matching in education “somewhat positive” and note that the
                  small number of studies limits firmer conclusions. The review covers local
                  governments and school systems in developing countries, not school-level councils
                  in the United States.
                `),
                grade: 'moderate',
                quote: 'Decentralization also improves preference matching in education, and can do so in health under certain conditions, although there is less evidence for both.',
                sources: [source('Channa and Faguet 2016, World Bank Research Observer', 'https://doi.org/10.1093/wbro/lkw001')]
              }),
              evidence({
                headline: 'Village projects in Pakistan went better where residents had more say in everyday choices, and worse where they had more say in engineering choices.',
                finding: paragraph(`
                  Using original data on development projects in northern Pakistan, the author compares
                  how much say communities had in different kinds of project decisions with how well
                  the projects turned out. “It shows that while community participation improves
                  project outcomes in nontechnical decisions, increasing community participation in
                  technical decisions actually leads to worse project outcomes.” A reopening
                  plan mixes both kinds of decisions.
                `),
                grade: 'moderate',
                quote: 'It shows that while community participation improves project outcomes in nontechnical decisions, increasing community participation in technical decisions actually leads to worse project outcomes.',
                sources: [source('Khwaja 2004, Journal of the European Economic Association', 'https://doi.org/10.1162/154247604323068113')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Opening schools in person spread COVID-19 mainly where the surrounding community already had many cases.',
                finding: paragraph(`
                  Linking each Michigan and Washington district’s teaching mode to county case rates
                  through the 2020 to 2021 school year, and comparing each district with itself as
                  its mode changed, the authors find that “in-person/hybrid schooling relative to
                  remote instruction can lead to increases in COVID spread in communities with
                  moderate to high levels of preexisting COVID cases.” In Michigan, the rise after
                  opening largely faded within two months. Community case levels are shared by every
                  school in a district, whatever its building.
                `),
                grade: 'strong',
                quote: 'District and month fixed effects models that exploit within-district (over time) variation in instructional modality and account for time-invariant district factors show that, in both states, in-person/hybrid schooling relative to remote instruction can lead to increases in COVID spread in communities with moderate to high levels of preexisting COVID cases.',
                sources: [source('Goldhaber, Imberman, Strunk and colleagues 2022, Journal of Policy Analysis and Management', 'https://doi.org/10.1002/pam.22354')]
              }),
              evidence({
                headline: 'Salt Lake City school councils with equal parent and teacher seats and real authority still left the decisions that mattered to principals.',
                finding: paragraph(`
                  Studying building-level councils in Salt Lake City that had broad jurisdiction,
                  formal policymaking authority, equal seats, and training, the authors find that
                  “despite the existence of these highly favorable arrangements, teachers and parents
                  did not wield significant influence on significant issues in these decision
                  arenas.” The makeup of the councils, the standing of principals, and norms of
                  civility turned them into support bodies under professional control. The study
                  follows councils in one district.
                `),
                grade: 'weak',
                quote: 'Despite the existence of these highly favorable arrangements, teachers and parents did not wield significant influence on significant issues in these decision arenas.',
                sources: [source('Malen and Ogawa 1988, Educational Evaluation and Policy Analysis', 'https://doi.org/10.3102/01623737010004251')]
              }),
              evidence({
                headline: 'Handing decisions to schools and their communities did least in poor areas, where parents had little standing next to school staff.',
                finding: paragraph(`
                  A systematic review of 17 school-based decision-making programs found small effects
                  on dropout and repetition and a moderate effect on test scores, concentrated in
                  middle-income countries. “School-based decision-making reforms appear to be less
                  effective in disadvantaged communities, particularly if parents and community
                  members have low levels of education and low status relative to school personnel.”
                  The reviewers conclude that parental participation seems to be the key to success
                  in such places. The programs were in low- and middle-income countries, and the
                  outcome is learning rather than fit.
                `),
                grade: 'strong',
                quote: 'School-based decision-making reforms appear to be less effective in disadvantaged communities, particularly if parents and community members have low levels of education and low status relative to school personnel.',
                sources: [source('Carr-Hill, Rolleston and Schendel 2016, Campbell Systematic Reviews', 'https://doi.org/10.4073/csr.2016.9')]
              })
            ]
          }),
          claim({
            text: 'Parents who plan with teachers come to trust the school more.',
            evidence: [
              evidence({
                headline: 'Schools where the faculty had more say in school-wide decisions lost fewer teachers, and teachers of color most of all.',
                finding: paragraph(`
                  The authors followed a national sample of teachers for one year after a federal
                  survey. They compared who left with how much say each school’s faculty had over
                  areas such as curriculum, hiring, discipline policy, and the budget. After
                  accounting for teacher and school characteristics, “schools with higher levels of
                  schoolwide faculty decision-making influence had lower levels of turnover for both
                  nonminority and minority teachers.” Influence is what teachers reported, and each
                  working condition was tested in its own model.
                `),
                grade: 'moderate',
                quote: 'As shown in Model 11, schools with higher levels of schoolwide faculty decision-making influence had lower levels of turnover for both nonminority and minority teachers.',
                sources: [source('Ingersoll, May and Collins 2019, Education Policy Analysis Archives', 'https://doi.org/10.14507/epaa.27.3714')]
              }),
              evidence({
                headline: 'Schools where teachers had more say over school policies and their own classrooms lost fewer teachers.',
                finding: paragraph(`
                  Across a national sample of schools, turnover was lower where teachers reported
                  more influence, after accounting for teacher and school characteristics.
                  “Finally, as shown in model 6, schools with higher levels of faculty
                  decision-making influence and autonomy have lower levels of turnover.” The result
                  meets the study’s 10 percent significance threshold. Salary was tested in a
                  separate model, not held constant alongside influence. The influence measure
                  blends control of one’s own classroom with a say in school policy.
                `),
                grade: 'moderate',
                quote: 'Finally, as shown in model 6, schools with higher levels of faculty decision-making influence and autonomy have lower levels of turnover.',
                sources: [source('Ingersoll 2001, American Educational Research Journal', 'https://doi.org/10.3102/00028312038003499')]
              }),
              evidence({
                headline: 'Teachers who had more say over school policy and their own classrooms were less likely to quit teaching, and new teachers most of all.',
                finding: paragraph(`
                  The authors linked a national survey of more than 32,000 teachers to their school
                  districts and tracked who quit teaching the following year. Teachers rated their
                  influence over school policy, such as hiring, discipline, and the budget, and their
                  control in their own classrooms. After accounting for teacher, school, and district
                  characteristics, the authors report that “a stronger teacher voice, a more supportive
                  work environment, fewer school problems, and greater teacher morale significantly
                  reduce teacher attrition.” The voice measure blends school policy with classroom
                  control, and the outcome is leaving teaching rather than changing schools. When all
                  four working conditions were tested together, teacher voice lost statistical significance.
                `),
                grade: 'moderate',
                quote: 'We find that a stronger teacher voice, a more supportive work environment, fewer school problems, and greater teacher morale significantly reduce teacher attrition.',
                sources: [source('García, Han and Weiss 2022, Education Policy Analysis Archives', 'https://doi.org/10.14507/epaa.30.6642')]
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
                  increases.” The author concludes that competent management may be a precondition
                  for participation to pay off.
                `),
                grade: 'moderate',
                quote: 'While employees are less likely to turn over under effective managers regardless of their degree of organizational policy influence, under ineffective managers turnover increases as employees\' perceived influence increases.',
                sources: [source('Grissom 2012, American Review of Public Administration', 'https://doi.org/10.1177/0275074011404209')]
              }),
              evidence({
                headline: 'Elementary and middle school teachers who had more authority over school decisions were no less likely to plan to leave.',
                finding: paragraph(`
                  A statewide survey of North Carolina teachers was averaged to the school level and
                  compared with teachers’ plans to leave. The author reports “no statistically
                  significant evidence of lower planned departure rates emerges at the elementary or
                  middle school levels when teachers have more decision making authority”, once
                  school characteristics are accounted for. Only in high schools did authority predict
                  fewer planned departures, and school leadership mattered most. Working conditions
                  predicted actual departures less well than plans.
                `),
                grade: 'moderate',
                quote: 'Interestingly given current policy interest in empowering teachers, no statistically significant evidence of lower planned departure rates emerges at the elementary or middle school levels when teachers have more decision making authority (as measured by the teacher empowerment factor), after the school’s measurable characteristics have been controlled for.',
                sources: [source('Ladd 2011, Educational Evaluation and Policy Analysis', 'https://doi.org/10.3102/0162373711398128')]
              })
            ]
          }),
          claim({
            text: 'Parents and teachers who plan together come to trust each other more.',
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
                headline: 'When schools brought families and staff together for weekly activities, parents grew closer to each other more clearly than to school staff.',
                finding: paragraph(`
                  Schools in Phoenix and San Antonio were assigned at random to a program designed to
                  build trust among parents, teachers, and children. For the first group of schools,
                  “table 2 points towards meaningful differences between FAST and control schools in
                  both indicators for relationships among parents but neither indicator of
                  relationships between parents and school staff”. The cities differed. In Phoenix,
                  parents came to know more staff they could approach. In San Antonio, ties with staff
                  fell. The program is shared activity rather than joint planning.
                `),
                grade: 'moderate',
                quote: 'Table 2 points towards meaningful differences between FAST and control schools in both indicators for relationships among parents but neither indicator of relationships between parents and school staff.',
                sources: [source('Gamoran, Turley, Turner and Fish 2012, Research in Social Stratification and Mobility', 'https://doi.org/10.1016/j.rssm.2011.08.001')]
              })
            ]
          }),
          claim({
            text: 'Students miss less school when their school works closely with their families.',
            evidence: [
              evidence({
                headline: 'When New York City turned struggling schools into community schools with family and social services, chronic absence fell right away and stayed down.',
                finding: paragraph(`
                  New York City made its lowest-performing schools community schools, adding health
                  and social services, longer days, and family education. Comparing schools just
                  above and below the cutoffs used to select them, the authors “find an immediate
                  reduction in chronic absenteeism of 5.6 percentage points, which persists over
                  the following three years.” Math and reading scores rose later. The program
                  bundles many supports, so the study cannot separate the family work from the rest.
                `),
                grade: 'strong',
                quote: 'We find an immediate reduction in chronic absenteeism of 5.6 percentage points, which persists over the following three years.',
                sources: [source('Covelli, Engberg and Opper 2025, Journal of Research on Educational Effectiveness', 'https://doi.org/10.1080/19345747.2025.2480563')]
              }),
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
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Across attendance programs, those built on school partnerships with families had the least certain effect.',
                finding: paragraph(`
                  A meta-analysis of 22 controlled studies of attendance programs in US public
                  schools grouped them as behavioral, academic, or family-school partnership
                  programs. All three produced small effects. “The confidence interval for
                  family–school partnerships was the only one that included 0, which suggests the
                  possibility of a zero effect for that variable.” The authors conclude that most
                  attendance practices are understudied, produce small effects, or both. The family
                  category holds few studies, and most predate the pandemic.
                `),
                grade: 'moderate',
                quote: 'The confidence interval for family–school partnerships was the only one that included 0, which suggests the possibility of a zero effect for that variable.',
                sources: [source('Eklund, Burns, Oyen, DeMarchena and McCollom 2020, School Psychology Review', 'https://doi.org/10.1080/2372966X.2020.1789436')]
              }),
              evidence({
                headline: 'A mentoring program that checked on students and kept in touch with families did nothing for attendance in the early grades.',
                finding: paragraph(`
                  In a large trial in Chicago pairing students with mentors who monitored attendance
                  and kept up contact with home, “program participation decreased absences in grades
                  5 to 7 by 4.2 days, or 22.9 percent, but had no detectable effects on students in
                  grades 1 to 4”. Grades and test scores did not improve either.
                `),
                grade: 'strong',
                quote: 'Program participation decreased absences in grades 5 to 7 by 4.2 days, or 22.9 percent, but had no detectable effects on students in grades 1 to 4.',
                sources: [source('Guryan and colleagues 2021, Journal of Policy Analysis and Management', 'https://doi.org/10.1002/pam.22264')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('Hartney and Finger 2022, Perspectives on Politics', 'https://doi.org/10.1017/S1537592721000955'),
        source('Grossmann, Reckhow, Strunk and Turner 2021, Educational Researcher', 'https://doi.org/10.3102/0013189X211048840'),
        source('Schueler, Miller and Reynolds 2025, American Educational Research Journal', 'https://doi.org/10.3102/00028312251348247'),
        source('Singer, Marsh, Menefee-Libey and colleagues 2023, Educational Administration Quarterly', 'https://doi.org/10.1177/0013161X231168397')
      ]
    }),

    spineProposal({
      name: 'Let parents and school staff choose the weekly reopening measures and question officials on them.',
      method: 'Participatory Monitoring',
      summary: 'Parents and school staff decide which local numbers the state publishes each week, report conditions from their own schools, and question officials on the data in public.',
      anchor: '49 states suspended in-person',
      where: 'State health departments and education agencies, with a panel of parents and school staff from each region.',
      when: paragraph(`
        March to June 2020, so the panel shaped the numbers before reopening turned partisan in July
        2020 and before the fall decisions.
      `),
      description: paragraph(`
        Give a panel of parents and school staff from each region the right to choose what the
        state's weekly reopening report measures, within state health orders. The state health and
        education agencies keep the data and publish it every week. The report covers county cases,
        test positivity, cases traced to school buildings, and whether each school is teaching in
        person or remotely. The panel decides which measures to add and how the report explains what
        is not yet known. Parents and staff can report problems in their own buildings, such as poor
        ventilation or staff shortages. The agencies check each report with a ventilation reading or
        staffing count and publish the result. Once a month, officials answer questions at an open
        session. Typical questions: why a given cutoff closes schools, how many cases spread inside
        buildings, and what conditions each building reports. Officials must correct errors in
        public.
      `),
      outcome: outcome({
        text: 'Parents trust their school district\'s reopening decisions more when they can see the measures and reasons behind them.',
        measured: null,
        claims: [
          claim({
            text: 'People trust local evidence more when their neighbors helped produce it alongside the experts.',
            evidence: [
              evidence({
                headline: 'People trusted a scientist more after learning that other members of the public had helped design the scientist\'s article about the research.',
                finding: paragraph(`
                  Momme, Hendriks and Enzingmüller ran an online experiment with 725 people. They varied
                  how much members of the public took part in designing a science article, then measured
                  how people judged the article and the scientist who wrote it. Taking part in the design
                  yourself had mixed effects. “Active participation enhanced perceptions of the scientist’s
                  benevolence and integrity but not their expertise or message credibility.” By contrast,
                  “awareness of others’ participation increased trust intention”. People who had wanted to
                  take part beforehand responded differently from those who had not.
                `),
                grade: 'strong',
                quote: 'Conversely, awareness of others’ participation increased trust intention.',
                sources: [source('Momme, Hendriks and Enzingmüller 2025, Science Communication', 'https://doi.org/10.1177/10755470251333399')]
              }),
              evidence({
                headline: 'Polish residents trusted a map of their metro area more when local people had helped draw it, even residents who had not taken part themselves.',
                finding: paragraph(`
                  Bedessem, Gawrońska-Nowak and Lis asked residents around Łódź to help decide which
                  towns belonged to the city's metropolitan area, and drew a map from their answers.
                  They then surveyed people in the Łódź region about that map and people in the Kraków
                  region about a map drawn by researchers from official statistics. They report that
                  “the participation of local residents in the research process increases public trust in
                  the study results compared to non-participatory ‘traditional academic’ research”. Most
                  Łódź respondents had not helped draw the map, and “within that group the level of trust
                  appears higher than among those who had taken part”. The two regions saw different maps,
                  and both samples were recruited through Facebook and were not representative.
                `),
                grade: 'moderate',
                quote: 'Second, we show that the participation of local residents in the research process increases public trust in the study results compared to non-participatory ‘traditional academic’ research.',
                sources: [source('Bedessem, Gawrońska-Nowak and Lis 2021, Journal of Contemporary European Research', 'https://doi.org/10.30950/jcer.v17i2.1185')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'People who learned that stakeholders had helped choose an evaluation\'s questions and interpret its results did not reliably find it more credible.',
                finding: paragraph(`
                  Mark, Allen and Goodwin ran six studies in which people read summaries of program
                  evaluations. Some summaries said stakeholders had taken part, for example by choosing
                  the research questions or interpreting the results, and others did not. They found that
                  “effects of reported stakeholder participation on third-parties’ views were not robust”.
                  Small gains in perceived fairness appeared only sometimes, after the involvement and the
                  reasons for it had been made salient. People did say they wanted several stakeholder
                  groups involved rather than one.
                `),
                grade: 'strong',
                quote: 'Across studies, effects of reported stakeholder participation on third-parties’ views were not robust; however, small effects on perceived fairness sometimes, but not always, occurred after stakeholder involvement and its rationales had been made salient.',
                sources: [source('Mark, Allen and Goodwin 2021, Evaluation Review', 'https://doi.org/10.1177/0193841X211055937')]
              }),
              evidence({
                headline: 'Austrians and Germans trusted public performance figures less when other citizens supplied them than when the government did.',
                finding: paragraph(`
                  Schmidthuber, Willems and Krabina ran eight online experiments with large samples in
                  Austria and Germany. They varied whether raw data were accessible and who supplied the
                  performance information. Making data accessible and naming a source both raised trust.
                  But “citizens have more trust in government-provided data compared to data provided by
                  other citizens”, and the provider's reputation mattered most. The studies tested data
                  that citizens supplied, not data that citizens and officials produced together.
                `),
                grade: 'strong',
                quote: 'Whereas citizens have more trust in government-provided data compared to data provided by other citizens, source reputation matters dominantly for building trust in performance information.',
                sources: [source('Schmidthuber, Willems and Krabina 2023, Public Administration Review', 'https://doi.org/10.1111/puar.13603')]
              }),
              evidence({
                headline: 'Voters in three states leaned toward distrusting panels of fellow citizens who reviewed ballot measures, and learning how the panels worked did not change that.',
                finding: paragraph(`
                  Már and Gastil ran survey experiments in three US states on Citizens' Initiative
                  Reviews, where a panel of voters studies a ballot measure and writes a statement of key
                  facts for the electorate. They found that “on average, respondents were uncertain or
                  tilted towards distrust of these minipublics”. Trust was higher among people of color,
                  poorer and younger respondents. “Specific information about minipublic design features
                  did not boost their perceived legitimacy.” The panels' statements still improved voter
                  knowledge beyond a standard voter pamphlet, but those effects were largely independent of
                  trust in the panels.
                `),
                grade: 'strong',
                quote: 'On average, respondents were uncertain or tilted towards distrust of these minipublics.',
                sources: [source('Már and Gastil 2023, Political Behavior', 'https://doi.org/10.1007/s11109-021-09742-6')]
              })
            ]
          }),
          claim({
            text: 'People who use or work in a service see problems that official records miss.',
            evidence: [
              evidence({
                headline: 'Patients told interviewers about serious, preventable harms from their hospital stays that never appeared in their medical records.',
                finding: paragraph(`
                  Weissman and colleagues interviewed 998 randomly sampled adults 6 to 12 months after a
                  stay in a Massachusetts hospital, and physicians compared what patients described with
                  their medical records. Record review found 11 serious, preventable events. “Interviews
                  identified an additional 21 serious and preventable events that were not documented in
                  the medical record”, and 9 of those began after the patient went home. The two sources
                  agreed poorly. Patients had to be well enough to be interviewed, and the long delay may
                  have blurred their memory of the stay.
                `),
                grade: 'moderate',
                quote: 'Interviews identified an additional 21 serious and preventable events that were not documented in the medical record, including 12 predischarge events and 9 postdischarge events, in which symptoms occurred after the patient left the hospital.',
                sources: [source('Weissman, Schneider, Weingart, Epstein, David-Kasdan, Feibelmann, Annas, Ridley, Kirle and Gatsonis 2008, Annals of Internal Medicine', 'https://doi.org/10.7326/0003-4819-149-2-200807150-00006')]
              }),
              evidence({
                headline: 'Yelp reviews about food poisoning led New York City health officials to three outbreaks they had not known about.',
                finding: paragraph(`
                  The New York City health department screened about 294,000 Yelp restaurant reviews
                  over nine months and found 468 that described a recent or possibly recent food
                  poisoning. Only 15 of those illnesses had also been reported to the city’s 311 line.
                  “After further evaluation of reviews and interviews with 27 reviewers, three previously
                  unreported restaurant-related outbreaks were identified.” Inspections of the three
                  restaurants found multiple food-handling violations. The pilot took considerable staff
                  time, and the reports came through a review site rather than a channel the agency ran.
                `),
                grade: 'moderate',
                quote: 'After further evaluation of reviews and interviews with 27 reviewers, three previously unreported restaurant-related outbreaks were identified.',
                sources: [source('Harrison, Jorder, Stern, Stavinsky, Reddy, Hanson, Waechter, Lowe, Gravano and Balter 2014, Morbidity and Mortality Weekly Report', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4584915/')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Teachers in poorly ventilated classrooms were more satisfied with their classroom air than teachers in well ventilated ones.',
                finding: paragraph(`
                  Sanguinetti and colleagues surveyed 84 teachers in 11 California schools before the
                  pandemic and compared their answers with monitoring data from their own classrooms.
                  “Teachers did not accurately perceive (in)sufficient ventilation”, and those in rooms
                  with poorer ventilation were more satisfied with indoor conditions, likely because
                  better ventilated rooms swung more in temperature. Teachers had not been taught how
                  their mechanical ventilation worked, and installation errors sometimes let them turn
                  the fan off to cut noise. The authors call for carbon dioxide monitoring in classrooms
                  alongside teacher education.
                `),
                grade: 'moderate',
                quote: 'Teachers did not accurately perceive (in)sufficient ventilation; in fact, those in classrooms with poorer ventilation were more satisfied with IEQ, likely due to more temperature fluctuations when ventilation rates were higher combined with occupants’ tendency to conflate perceptions of air quality and temperature.',
                sources: [source('Sanguinetti, Outcault, Pistochini and Hoffacker 2022, Indoor Air', 'https://doi.org/10.1111/ina.12998')]
              }),
              evidence({
                headline: 'Farmworkers died of COVID-19 at the highest rate but complained about workplace safety least often, while health care workers complained most often.',
                finding: paragraph(`
                  Thomas and colleagues compared COVID-19 complaints filed with California’s workplace
                  safety agency in 2020 against COVID-19 death rates in seven industries. Agricultural
                  workers had the highest death rate, 402 per 100,000 workers, and the lowest complaint
                  rate. Health care workers had the highest complaint rate and the second lowest death
                  rate. “Our findings suggest complaints are not proportional to COVID-19 risk.” The
                  authors suggest that higher complaint rates may reflect workers with more power and
                  resources to speak up. Of 7,820 valid complaints, only 627 led to onsite inspections.
                `),
                grade: 'moderate',
                quote: 'Our findings suggest complaints are not proportional to COVID-19 risk.',
                sources: [source('Thomas, Matthay, Duchowny, Riley, Khela, Chen, Bibbins-Domingo and Glymour 2022, SSM - Population Health', 'https://doi.org/10.1016/j.ssmph.2021.101016')]
              })
            ]
          }),
          claim({
            text: 'Parents accept a school decision more when officials show the evidence and reasons behind it.',
            evidence: [
              evidence({
                headline: 'People accepted a school decision more when the decision makers explained their reasoning afterward.',
                finding: paragraph(`
                  In vignette experiments on decision making in schools, the authors find “that
                  transparency can indeed generate legitimacy”, and that an open meeting was not
                  required: “Decision makers may improve their legitimacy simply by justifying
                  carefully afterward the decisions taken behind closed doors.” The decisions were
                  hypothetical, and the reasons given were not local data.
                `),
                grade: 'moderate',
                quote: 'Decision makers may improve their legitimacy simply by justifying carefully afterward the decisions taken behind closed doors.',
                sources: [source('de Fine Licht, Naurin, Esaiasson and Gilljam 2014, Governance', 'https://doi.org/10.1111/gove.12021')]
              }),
              evidence({
                headline: 'People judged a decision fairer and responded better when the decision maker explained it, most of all when the decision went against them.',
                finding: paragraph(`
                  Shaw, Wild and Colquitt pooled 54 samples on how people react when a decision maker
                  explains a decision. “The results showed strong effects of explanations on both the
                  justice and response variables”, which covered judgments of fairness and cooperation,
                  retaliation, and withdrawal. Explanations helped more after an unfavorable outcome, and
                  excuses helped more than justifications. The review did not look at school decisions.
                `),
                grade: 'moderate',
                quote: 'The results showed strong effects of explanations on both the justice and response variables.',
                sources: [source('Shaw, Wild and Colquitt 2003, Journal of Applied Psychology', 'https://doi.org/10.1037/0021-9010.88.3.444')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Residents told how their local schools compared with schools elsewhere rated those schools lower.',
                finding: paragraph(`
                  Barrows, Henderson, Peterson and West ran two experiments inside nationally
                  representative surveys. In the first, “we find that providing respondents with
                  information about the performance of their local schools relative to schools in
                  the state, the nation, and other developed countries depresses average evaluations
                  of local school quality”. Some respondents rated lower because the comparison
                  changed what they weighed, and some because it corrected a mistaken belief about
                  their schools. The numbers were test results, and the measure was a rating of
                  school quality rather than trust.
                `),
                grade: 'strong',
                quote: 'In the first, we find that providing respondents with information about the performance of their local schools relative to schools in the state, the nation, and other developed countries depresses average evaluations of local school quality.',
                sources: [source('Barrows, Henderson, Peterson and West 2016, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/muw028')]
              }),
              evidence({
                headline: 'Voters more often rejected a school tax after a federal rating marked their district as falling short, though the rating was a poor guide to quality.',
                finding: paragraph(`
                  Kogan, Lavertu and Peskowitz studied a widely publicized federal rating of school
                  district performance, which they show did not let voters judge the quality of
                  local schools, and its effect on school tax votes in one US state. “The results
                  indicate that a signal of poor district performance increases the probability of
                  levy failure, a substantively large and robust effect that disproportionately
                  affects impoverished communities.” The authors use several strategies to isolate
                  the rating’s effect. The outcome is votes on school taxes, not trust.
                `),
                grade: 'strong',
                quote: 'The results indicate that a signal of poor district performance increases the probability of levy failure, a substantively large and robust effect that disproportionately affects impoverished communities.',
                sources: [source('Kogan, Lavertu and Peskowitz 2016, American Journal of Political Science', 'https://doi.org/10.1111/ajps.12184')]
              }),
              evidence({
                headline: 'Openness about how decisions were made raised acceptance of routine choices more than choices that put safety at stake.',
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
          }),
          claim({
            text: 'Officials can admit what they don\'t know yet and keep most of the public\'s trust.',
            evidence: [
              evidence({
                headline: 'When a news story showed how uncertain a figure was, readers showed only a “small decrease in trust.”',
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
              }),
              evidence({
                headline: 'In a review of 68 experiments, showing the error range around a figure either raised trust or left it unchanged.',
                finding: paragraph(`
                  Gustafson and Rice reviewed 48 studies containing 68 experiments and sorted the
                  results by the kind of uncertainty people were shown. “In contrast, uncertainty in
                  the form of quantified error ranges and probabilities (technical uncertainty) in
                  these studies has had only positive or null effects, not negative effects.” Most
                  of the harmful effects on credibility came from experiments that presented
                  uncertainty as disagreement among scientists, so a plain statement of what is not
                  known could cost trust if it reads as experts split on schools.
                `),
                grade: 'moderate',
                quote: 'In contrast, uncertainty in the form of quantified error ranges and probabilities (technical uncertainty) in these studies has had only positive or null effects, not negative effects.',
                sources: [source('Gustafson and Rice 2020, Public Understanding of Science', 'https://doi.org/10.1177/0963662520942122')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'UK adults trusted a COVID-19 death-rate figure less, and said they would use it less, when told the evidence behind it was weak or uncertain.',
                finding: paragraph(`
                  In three preregistered experiments with 6,489 UK adults, participants saw an
                  estimate of the COVID-19 case fatality rate with a high, low or uncertain rating of
                  evidence quality, or with no rating. A high rating made little difference, but “a
                  cue of low or uncertain quality of evidence is accompanied by lower perceived
                  trustworthiness and lower use of the information in decision making”. The effects
                  were small to medium, and adding a reason for the rating did not change them.
                `),
                grade: 'strong',
                quote: 'While responses to a cue of high quality of evidence are not significantly different from no cue; a cue of low or uncertain quality of evidence is accompanied by lower perceived trustworthiness and lower use of the information in decision making.',
                sources: [source('Schneider, Freeman, Spiegelhalter and van der Linden 2022, Judgment and Decision Making', 'https://doi.org/10.1017/S1930297500008962')]
              }),
              evidence({
                headline: 'Stressing the uncertainty in COVID-19 projections lowered Americans\' trust in science in some settings, and later reversals could lower it further.',
                finding: paragraph(`
                  Kreps and Kriner ran five survey experiments with more than 6,000 Americans on how
                  people react to uncertainty about COVID-19 science. “Emphasizing uncertainty in
                  projections can erode public trust in some contexts.” Downplaying uncertainty
                  raised support in the short term, but later reversals in the projections could
                  temper that gain or even reduce trust in science. The studies measure trust in
                  science, not in local officials.
                `),
                grade: 'strong',
                quote: 'Emphasizing uncertainty in projections can erode public trust in some contexts.',
                sources: [source('Kreps and Kriner 2020, Science Advances', 'https://doi.org/10.1126/sciadv.abd4563')]
              }),
              evidence({
                headline: 'Admitting uncertainty lowered trust among people who already agreed with the evidence and raised it among people who did not.',
                finding: paragraph(`
                  In two preregistered online experiments with US adults, one on COVID-19 vaccines
                  (600 people) and one on hurricane trends (1,001 people), participants were randomly
                  shown evidence with or without a verbal statement of uncertainty. “Our results show
                  that people’s trust response to the communication of uncertainty depends on how
                  consistent people’s beliefs are with the evidence communicated.” Trust fell when
                  the evidence matched what people already believed and rose when it did not, though
                  in the vaccine study this showed only when the evidence said there was no
                  side-effect link.
                `),
                grade: 'strong',
                quote: 'Our results show that people\'s trust response to the communication of uncertainty depends on how consistent people\'s beliefs are with the evidence communicated.',
                sources: [source('Dries, McDowell, Schneider and Rebitschek 2025, PNAS Nexus', 'https://doi.org/10.1093/pnasnexus/pgaf071')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub'),
        source('Panaggio, Fang, Bang, Armstrong, Binder, Grass, Magid, Papazian, Shapiro-Mendoza and Parks 2023, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0292354'),
        source('Halpern, Lin, Wang, Yang, Goldstein and Kolak 2021, Cartography and Geographic Information Science', 'https://doi.org/10.1080/15230406.2021.1975311'),
        source('Irgens, O\'Neill and Ruiz 2025, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0319263'),
        source('Berg and Johansson 2020, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/muz029'),
        source('Kumlin, Nemčok and Van Hootegem 2024, Public Management Review', 'https://doi.org/10.1080/14719037.2023.2297292'),
        source('Isaksson 2023, Journal of Rural Studies', 'https://doi.org/10.1016/j.jrurstud.2023.103009'),
        source('Banducci, Horvath and Stevens 2026, Political Studies', 'https://doi.org/10.1177/00323217261464836'),
        source('Gallup 2026, Satisfaction With K-12 Education Hits New Low', 'https://news.gallup.com/poll/714017/satisfaction-education-hits-new-low.aspx')
      ]
    }),

    spineProposal({
      name: 'A parent and community body votes yes or no before any closure.',
      method: 'Binding Community Vote',
      summary: 'A standing council of parents, educators, business owners, and health experts must approve any school closure, and a no vote stops it.',
      anchor: 'safety strikes',
      where: 'Large urban districts where bargaining power was most uneven. Chicago already had the legal framework for such councils.',
      when: paragraph(`
        Ideally before the pandemic, since a body created mid-crisis is not a standing body. Within
        the case, June to August 2020 in Detroit, San Francisco, Chicago, and New York, covering the
        fall 2020 decision and the spring 2021 reopening talks.
      `),
      description: paragraph(`
        A standing council must approve any decision to close or reopen schools. A no vote stops the
        closure, and the district can bring a revised plan back. The council has seats for parents,
        educators, small business owners, public health experts, and community leaders. Each group
        elects or appoints its members before any crisis. The council works within state health
        orders and collective bargaining law. The district must make its case for each closure at an
        open meeting. It publishes its evidence and answers the council's objections on the record.
        The council sees the same case data as the district and publishes its votes. Chicago's Local
        School Councils already existed in state law in 2020. That year small business owners had no
        channel into closure decisions, and parents who disagreed turned to lawsuits and recall
        campaigns. The council also sees and can amend the options while the district drafts them,
        so its vote does not come after the choices are set. The group's notes recorded this strong
        version of the idea, and it stays in that form to sharpen the discussion. The aim is that
        parents keep their confidence in public schools, even when their own school closes.
      `),
      outcome: outcome({
        text: 'Parents keep their confidence in public schools, even when their own school closes.',
        measured: 'Confidence in public schools fell',
        claims: [
          claim({
            text: 'Officials release more information when a rule requires it.',
            evidence: [
              evidence({
                headline: 'Local councils handed over less information when residents simply asked than when they made a legal records request.',
                finding: paragraph(`
                  Small English councils were sent either a formal freedom of information (FOI)
                  request or an informal ask for the same material, assigned at random. The authors
                  find that “FOI requests are more effective than simple asks and the size or
                  preexisting level of openness of a body appears to make little difference to their
                  responsiveness.”
                `),
                grade: 'strong',
                quote: 'FOI requests are more effective than simple asks and the size or preexisting level of openness of a body appears to make little difference to their responsiveness.',
                sources: [source('Worthy, John and Vannoni 2016, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/muw063')]
              }),
              evidence({
                headline: 'Slovak towns answered a request for public data more often when it cited the records law, and a moral appeal did not help.',
                finding: paragraph(`
                  The authors emailed all 2,928 municipalities in Slovakia to ask for local election
                  data that was not available any other way, and varied how the request was worded.
                  “Results show that mentioning FOI law in the request increased the response rate,
                  while a moral appeal had no effect at all.” Citing the freedom of information law
                  made the most difference in small towns and less as population grew.
                `),
                grade: 'strong',
                quote: 'Results show that mentioning FOI law in the request increased the response rate, while a moral appeal had no effect at all.',
                sources: [source('Spáč, Voda and Zagrapan 2018, Government Information Quarterly', 'https://doi.org/10.1016/j.giq.2018.05.003')]
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
                headline: 'Under the same records law, county governments answered faster and more fully when told that neighboring counties already had.',
                finding: paragraph(`
                  US county governments are already bound by sunshine laws to release public
                  records. In a field experiment, the authors sent counties a records request and
                  tested whether knowing that peer counties had complied changed the response.
                  “Findings indicate peer conformity affects both in the time to initial response and
                  in the rate of complete request fulfillment.” What a body released turned on what
                  its peers did, not only on the legal duty.
                `),
                grade: 'strong',
                quote: 'Findings indicate peer conformity affects both in the time to initial response and in the rate of complete request fulfillment.',
                sources: [source('ben-Aaron, Denny, Desmarais and Wallach 2017, Public Administration Review', 'https://doi.org/10.1111/puar.12596')]
              })
            ]
          }),
          claim({
            text: 'When a decision needs the public\'s vote to pass, officials explain it and answer objections.',
            evidence: [
              evidence({
                headline: 'Governments facing more competing parties in the legislature published more about their budgets.',
                finding: paragraph(`
                  Across more than 80 countries, the authors compared budget openness scores with how
                  evenly seats in the legislature were split among parties, and used differences in
                  electoral rules to check the direction of the link. “We also find that partisan
                  competition in democratically-elected legislatures is associated with higher levels
                  of budgetary disclosure.” The link held in democracies and not in countries without
                  free and fair elections.
                `),
                grade: 'moderate',
                quote: 'We also find that partisan competition in democratically-elected legislatures is associated with higher levels of budgetary disclosure.',
                sources: [source('Wehner and de Renzio 2013, World Development', 'https://doi.org/10.1016/j.worlddev.2012.06.005')]
              }),
              evidence({
                headline: 'US states where power was shared more evenly between parties adopted more open budget practices.',
                finding: paragraph(`
                  Tracking the budget procedures of US states over three decades, the authors find
                  that “more equal political competition and power sharing are associated with both
                  greater levels of and increases in fiscal transparency during the sample period.”
                  State debt and budget imbalances also shaped how open states were.
                `),
                grade: 'moderate',
                quote: 'More equal political competition and power sharing are associated with both greater levels of and increases in fiscal transparency during the sample period.',
                sources: [source('Alt, Lassen and Rose 2006, IMF Staff Papers', 'https://doi.org/10.2307/30036021')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Agencies that had to justify major rules in writing often filed weak analyses, and most showed no sign of using them.',
                finding: paragraph(`
                  Reviewers scored the analyses required for a year of major US federal rules. The
                  weakest parts were the account of the underlying problem and the review of past
                  results, and only “a minority of the regulations contain evidence that the agency
                  used the analysis in significant decisions”.
                `),
                grade: 'moderate',
                quote: 'a minority of the regulations contain evidence that the agency used the analysis in significant decisions',
                sources: [source('Ellig and McLaughlin 2012, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.2011.01715.x')]
              })
            ]
          }),
          claim({
            text: 'When parents hold a vote on school decisions, school officials work harder for their children.',
            evidence: [
              evidence({
                headline: 'When Kenyan parents on school committees were given real standing, school staff steered fewer jobs to relatives and cut their own effort less.',
                finding: paragraph(`
                  Duflo, Dupas and Kremer (2015) studied Kenyan schools picked at random to hire an
                  extra teacher locally on a renewable contract. Existing civil-service teachers cut
                  their own effort, and “approximately 1/3 of contract teacher positions” went to
                  their relatives. “A governance program that empowered parents within school
                  committees reduced both forms of capture.” Parents oversaw hiring and staff effort
                  rather than voting on closures.
                `),
                grade: 'strong',
                quote: 'Civil-service teachers also captured rents for their families, with approximately 1/3 of contract teacher positions going to relatives of existing teachers. A governance program that empowered parents within school committees reduced both forms of capture.',
                sources: [source('Duflo, Dupas and Kremer 2015, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2014.11.008')]
              }),
              evidence({
                headline: 'In a much larger Ugandan trial, urging citizens to press their health clinics did not raise that pressure or improve health.',
                finding: paragraph(`
                  Raffler, Posner and Parkerson (2025) ran a large field experiment in the Ugandan
                  health sector that encouraged citizens to press underperforming providers. “While
                  we find modest positive impacts on health provider behavior, we find no effects on
                  citizen pressure, utilization rates, or bottom-line health outcomes.” The authors
                  say the result may hold only under conditions like those in their study.
                `),
                grade: 'strong',
                quote: 'While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes.',
                sources: [source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577')]
              }),
              evidence({
                headline: 'Programs that urged Indian villagers to watch over their schools did not make them more involved or make teachers try harder.',
                finding: paragraph(`
                  Banerjee, Banerji, Duflo, Glennerster and Khemani (2010) assigned Indian villages at
                  random to three programs. One told residents about existing school institutions,
                  one trained them to test children, and one trained volunteers to run reading camps.
                  “These interventions had no impact on community involvement, teacher effort, or
                  learning outcomes inside the school.” Children who went to the volunteer camps did
                  read better. Residents gained information and skills but no formal power.
                `),
                grade: 'strong',
                quote: 'These interventions had no impact on community involvement, teacher effort, or learning outcomes inside the school.',
                sources: [source('Banerjee, Banerji, Duflo, Glennerster and Khemani 2010, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.2.1.1')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Ugandan communities helped to hold their health clinics to account got more effort from health workers, and fewer of their children died.',
                finding: paragraph(`
                  Björkman and Svensson (2009) assigned Ugandan communities at random to village
                  meetings that built their capacity to hold local health providers to account. “A
                  year after the intervention, treatment communities are more involved in monitoring
                  the provider, and the health workers appear to exert higher effort to serve the
                  community.” The authors also report more use of the clinics, lower child mortality,
                  and higher child weight. The communities could press providers but held no veto.
                `),
                grade: 'strong',
                quote: 'A year after the intervention, treatment communities are more involved in monitoring the provider, and the health workers appear to exert higher effort to serve the community.',
                sources: [source('Björkman and Svensson 2009, Quarterly Journal of Economics', 'https://doi.org/10.1162/qjec.2009.124.2.735')]
              })
            ]
          }),
          claim({
            text: 'People who lose a decision judge it fairer when officials explained it and took their questions first.',
            evidence: [
              evidence({
                headline: 'Residents told their local fire station would close judged the decision fairer and trusted the regional authority more when it had explained the plan to citizens first.',
                finding: paragraph(`
                  In a preregistered vignette experiment with 1,574 Dutch citizens, the authors told people
                  that their regional safety authority would either close the fire station in their
                  neighborhood or open a new one, and varied whether the authority first explained the plan
                  at meetings where citizens could ask questions and give ideas. They “show that social
                  accountability (accountability to citizens) increases legitimacy perceptions, but that
                  political accountability (accountability to politicians) does not affect legitimacy
                  perceptions.” Among people who lost their station, explaining the plan to citizens raised
                  perceived fairness most, and also raised trust in the authority and acceptance of the
                  decision, by smaller amounts. The gap between winners and losers stayed large, and the
                  extra effect for losers did not survive corrections for multiple tests.
                `),
                grade: 'strong',
                quote: 'we show that social accountability (accountability to citizens) increases legitimacy perceptions, but that political accountability (accountability to politicians) does not affect legitimacy perceptions.',
                sources: [source('Brummel and de Blok 2024, Public Management Review', 'https://doi.org/10.1080/14719037.2024.2337843')]
              }),
              evidence({
                headline: 'People accepted a city council decision that went against them, and saw it as fair, when they could take part and councillors reached a compromise.',
                finding: paragraph(`
                  In an online scenario experiment in Japan, the author varied how a city council reached a
                  decision and asked people how fair the process was and whether they accepted the result.
                  The study “found that, given the opportunity to participate in the decision-making process
                  and when the decision is reached through a compromise among council members, people tend to
                  feel that the process is fair and accept the decision even when it is unfavourable to them.”
                  The study measures fairness and acceptance, not trust in the council itself.
                `),
                grade: 'strong',
                quote: 'this study found that, given the opportunity to participate in the decision-making process and when the decision is reached through a compromise among council members, people tend to feel that the process is fair and accept the decision even when it is unfavourable to them.',
                sources: [source('Nakatani 2023, International Political Science Review', 'https://doi.org/10.1177/0192512121998250')]
              }),
              evidence({
                headline: 'Most US senators tailored how they explained their votes to their audience, and those explanations won support, most of all from people who disagreed.',
                finding: paragraph(`
                  In a field experiment with US senators as subjects, the authors studied how senators
                  explained their votes, then showed those explanations to ordinary people in a survey
                  experiment. They “find that most senators tailor their explanations to their
                  audiences, and that these tailored explanations are effective at currying support”,
                  especially among people who disagree with the vote. The explanations were built to
                  persuade, and the study does not measure whether they carried evidence.
                `),
                grade: 'strong',
                quote: 'We find that most senators tailor their explanations to their audiences, and that these tailored explanations are effective at currying support',
                sources: [source('Grose, Malhotra and Van Houweling 2015, American Journal of Political Science', 'https://doi.org/10.1111/ajps.12164')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Voters near a school turned against local incumbents who proposed closing it, even when the incumbents backed down and kept the school open.',
                finding: paragraph(`
                  The authors tracked Swedish local election results from 2002 to 2018 in the neighborhoods
                  around schools proposed for closure, comparing voting over time within each municipality.
                  “Our results confirm that even if a school remains open, voters punish the incumbent and
                  consider the initial proposal as informative for their vote.” Responding to opposition by
                  withdrawing the proposal did not win back the support that the proposal cost.
                `),
                grade: 'strong',
                quote: 'Our results confirm that even if a school remains open, voters punish the incumbent and consider the initial proposal as informative for their vote.',
                sources: [source('Gren and Leuschner 2024, Political Behavior', 'https://doi.org/10.1007/s11109-024-09936-8')]
              })
            ]
          }),
          claim({
            text: 'A direct vote makes people more satisfied with the decision and more sure that government listens.',
            evidence: [
              evidence({
                headline: 'Indonesian villagers who chose local projects by direct vote were far more satisfied with the choice, though the projects chosen barely changed.',
                finding: paragraph(`
                  Olken (2010) assigned 49 Indonesian villages at random to choose development
                  projects through representative meetings or through a village-wide vote. The vote
                  brought “dramatically higher satisfaction among villagers”, while the projects
                  chosen changed much less. He concludes that “direct participation in political
                  decision making can substantially increase satisfaction and legitimacy.” The
                  measures concern the project decision rather than trust in government as a whole.
                `),
                grade: 'strong',
                quote: 'The results suggest that direct participation in political decision making can substantially increase satisfaction and legitimacy.',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              }),
              evidence({
                headline: 'Americans in states that vote often on ballot measures felt more able to follow politics and more sure that government listens to them.',
                finding: paragraph(`
                  Bowler and Donovan (2002) merged a national election survey with each state’s
                  rules for citizen ballot measures. They “present evidence that the effects of
                  exposure to direct democracy on internal and external political efficacy rival the
                  effects of formal education”. External efficacy is the sense that government
                  responds to people like oneself. The comparison is across states at one time.
                `),
                grade: 'moderate',
                quote: 'We present evidence that the effects of exposure to direct democracy on internal and external political efficacy rival the effects of formal education.',
                sources: [source('Bowler and Donovan 2002, British Journal of Political Science', 'https://doi.org/10.1017/S0007123402000157')]
              }),
              evidence({
                headline: 'City residents who felt they had a say in local government, but no influence over it, did not trust it any more.',
                finding: paragraph(`
                  Using a survey of attitudes toward municipal government, the author compared residents'
                  sense of having a voice and of having influence with their trust and satisfaction with
                  local policy. “Neither political trust nor policy satisfaction responds positively to
                  perceptions of increased voice alone.” Trust and satisfaction rose only among residents who
                  believed citizens had both a voice and influence.
                `),
                grade: 'moderate',
                quote: 'Neither political trust nor policy satisfaction responds positively to perceptions of increased voice alone.',
                sources: [source('Ulbig 2008, Public Opinion Quarterly', 'https://doi.org/10.1093/poq/nfn030')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'People living in states that vote often on ballot measures trust their government less.',
                finding: paragraph(`
                  Dyck (2009) used two surveys to compare residents of states that use ballot
                  initiatives more and less. He finds “that ballot initiatives in the American states
                  do indeed create an environment that encourages citizens to distrust their
                  government”. The comparison is across states, and it points the opposite way from
                  the efficacy finding.
                `),
                grade: 'moderate',
                quote: 'Using data from two surveys, I demonstrate that ballot initiatives in the American states do indeed create an environment that encourages citizens to distrust their government.',
                sources: [source('Dyck 2009, American Politics Research', 'https://doi.org/10.1177/1532673X08330635')]
              }),
              evidence({
                headline: 'Giving a civilian board a say in police misconduct cases did not raise how legitimate people found policing, and disagreements could lower trust in both.',
                finding: paragraph(`
                  Schiff and colleagues (2025) ran a survey experiment with 2,503 respondents that
                  varied whether a civilian review board took part in misconduct decisions and
                  whether it agreed with the police chief. The board raised perceived fairness for
                  some, “particularly those with negative views of police”, but “their involvement
                  does not generally increase legitimacy”. When the board and the chief disagreed,
                  trust in both policing and oversight could fall. The board reviewed cases rather
                  than holding a public vote.
                `),
                grade: 'strong',
                quote: 'Our findings suggest that while CRBs may enhance perceptions of procedural fairness for some, particularly those with negative views of police, their involvement does not generally increase legitimacy.',
                sources: [source('Schiff and colleagues 2025, PNAS Nexus', 'https://doi.org/10.1093/pnasnexus/pgaf267')]
              })
            ]
          })
        ]
      }),
      sources: []
    })
  ]
});
