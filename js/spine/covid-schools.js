import {
  spineData, mechanism, impact, spineProposal, propLink, comparable,
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
        Michigan created the Return to Learn Advisory Council in June 2020. The council helped produce the state\u2019s Return to School Roadmap. Its members were appointed to represent parents, students, educators, or communities, but they could only make recommendations. The available public record does not clearly show which recommendations the state adopted. Some critics said the state did not follow the council\u2019s advice.
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
      name: 'Public school enrollment',
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
        { anchor: '48 states left reopening modality', strength: 'strong', note: 'Remote-only mode caused measurable exit' }
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
      name: 'Chronic absenteeism',
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
        { anchor: '48 states left reopening modality', strength: 'moderate', note: 'Dose-response by months of remote exposure; norm-shift channel unstudied' },
        { anchor: '25,907', strength: 'weak', note: 'Later disruption waves; attribution unseparated' }
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
      name: 'Confidence in public schools',
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
        { anchor: 'attacked CDC guidance', strength: 'moderate', note: 'Politicization of reopening precedes the partisan split' },
        { anchor: '48 states left reopening modality', strength: 'weak', note: 'Time-coincident; no study isolates the closure channel' }
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
      name: 'Test scores',
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
        { anchor: '48 states left reopening modality', strength: 'strong', note: 'Remote mode drove larger achievement declines' }
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
    })
  ],

  proposals: [
    spineProposal({
      name: 'Let a randomly selected citizens\' assembly decide how schools reopen',
      method: 'Citizens\' assembly with decision authority',
      summary: 'A state-convened assembly of randomly selected residents sets the fall instructional mode, and the state must adopt its decision or publicly explain why not.',
      anchor: 'Return to School Roadmap',
      where: 'State level; Michigan is the natural jurisdiction',
      when: paragraph(`
        May to June 2020, with its scope fixed on the fall 2020 instructional mode decision. Michigan already created an appointed advisory council in
        May 2020; the proposal is the same body selected by lot and
        given quasi-binding authority. An assembly seated after August 2020 misses
        the decision it exists to make; the actual Michigan sortition panel of
        November 2020 demonstrates that failure mode.
      `),
      description: paragraph(`
        Give a randomly selected assembly of residents, convened by the state, authority to set the fall 2020 instructional mode for its region, within state public-health orders and civil-rights law. The state health department convenes the assembly in May 2020 and draws members by lot from the region’s residents. Seats rotate on a fixed schedule so no cohort becomes an incumbent class. Members hear from public-health, education, and building-safety experts, deliberate over several weeks, and vote. The decision binds districts unless the state publishes written reasons for overriding it, and the state must publish the evidence the assembly saw. Michigan created an appointed advisory council in May 2020 and seated a sortition panel only in November, after the decision it would have informed had passed.
      `),
      banner: true,
      impactsMeasured: ['Public school enrollment', 'Chronic absenteeism', 'Confidence in public schools'],
      impactsConjectured: ['Depolarization of the decision', 'Cross-regional learning'],
      links: [
        propLink({
          name: 'An assembly could be convened in time',
          claim: paragraph(`
            A randomly selected assembly could be convened and reach a decision between May and August 2020, in time to set how school runs that fall. This depends on a convening authority acting by May; the assemblies studied took two to five months.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The Ada Lovelace Institute “conducted rapid, online deliberation with 28 members of the public on COVID-19 exit strategies” during May 2020, while the UK was in lockdown.
              `),
              grade: 'moderate',
              quote: 'conducted rapid, online deliberation with 28 members of the public on COVID-19 exit strategies',
              sources: [source('Ada Lovelace Institute', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Comparable assemblies took far longer. The Irish assembly deliberated
                over five sessions across six months, and the French climate convention ran
                nine months. The Organisation for Economic Co-operation and Development’s stocktake of nearly 300 processes describes
                convenings of at least one full day and often much longer.
              `),
              grade: 'moderate',
              sources: [source('Organisation for Economic Co-operation and Development', 'https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en/full-report/component-8.html')]
            })
          ]
        }),
        propLink({
          name: 'A binding decision rule could give parents and community members force',
          claim: paragraph(`
            A binding or must-answer decision rule could give parents and community members weight comparable to collective bargaining, so the assembly's choice, not the bargained one, sets how school runs. No assembly has held this authority over a school decision.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                A randomized experiment in 48 Indonesian villages compared binding plebiscites against representative meetings for choosing local projects. The binding format raised satisfaction, perceived legitimacy, and willingness to contribute, even though the chosen projects barely changed. “Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute”.
              `),
              grade: 'moderate',
              quote: 'Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute',
              sources: [source('Olken 2008', 'https://www.nber.org/papers/w14123')]
            }),
            evidence({
              finding: paragraph(`
                Brazilian municipalities that gave citizens binding budget authority shifted spending toward health and sanitation. They “registered a significant drop in infant mortality of between 1 and 2 infants for every 1,000 resident infants”. It is the strongest measured case of citizen participation with force behind it.
              `),
              grade: 'moderate',
              quote: 'municipalities that adopted participatory budgeting registered a significant drop in infant mortality of between 1 and 2 infants for every 1,000 resident infants',
              sources: [source('Gonçalves 2014', 'https://base.socioeco.org/docs/effects_of_participatory_budgeting.pdf')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The nearest binding pledge eroded under pressure. France’s
                president promised to implement 146 of 149 convention proposals.
                The parliamentary bill incorporated an estimated 40%, and members
                rated government follow-through 3.3 out of 10.
              `),
              grade: 'moderate',
              sources: [source('Knowledge Network on Climate Assemblies', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
            })
          ]
        }),
        propLink({
          name: 'An assembly process may raise the decision\'s perceived legitimacy',
          claim: paragraph(`
            An assembly process may raise how legitimate the wider public finds the decision when officials honor the assembly’s recommendation. The gains shrink or reverse when officials shelve it.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Germann, Marien, and Muradova (Political Studies 2024; survey experiment, N=1,309) find fairness perceptions rose 0.7 points, or 27% of a standard deviation. “Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored.”
              `),
              grade: 'moderate',
              quote: 'Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored.',
              sources: [
                source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')
              ]
            }),
            evidence({
              finding: paragraph(`
                Collins (American Political Science Review 2021) finds that exposure to deliberative school board meetings raised trust in local officials. Viewing “the more participatory and deliberative school board meetings led to increased trust in local officials and a stronger willingness to attend school board meetings in the future”.
              `),
              grade: 'moderate',
              quote: 'The experience of viewing the more participatory and deliberative school board meetings led to increased trust in local officials and a stronger willingness to attend school board meetings in the future.',
              sources: [
                source('Watson Institute on Collins 2021', 'https://home.watson.brown.edu/news/2021-08-06/does-meeting-style-matter-effects-exposure-participatory-and-deliberative-school')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In the same experiment the acceptance effect became insignificant
                when officials rejected the recommendations. Referendums outperformed
                mini-publics on both fairness and acceptance.
              `),
              grade: 'moderate',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ]
        }),
        propLink({
          name: 'Higher legitimacy could hold enrollment, attendance, and confidence',
          claim: paragraph(`
            The assembly’s decision could act through two routes. Its choice of instructional mode directly changes remote exposure and its measured harms. Higher perceived legitimacy could reduce exit and absence and hold confidence in schools. No school study tests the legitimacy route.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Evidence from other fields supports the mechanism. In a national US survey, perceived legitimacy of legal institutions predicted compliance and willing cooperation, with legitimacy playing “an important role in achieving such compliance”.
              `),
              grade: 'weak',
              quote: 'legitimacy - typically operationalized as the perceived obligation to obey and trust and confidence in the relevant institutions - plays an important role in achieving such compliance',
              sources: [
                source('Tyler and Jackson 2013', 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2292517')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Parents typically supported how schools handled the pandemic at the time.
                If parents’ sense of fair treatment did not collapse, a legitimacy-repairing intervention has less to fix. The closest evidence is a meta-analysis of legitimacy and law compliance in policing, which is weak and comes from a different field.
              `),
              grade: 'weak',
              sources: [source('Walters and Bolger 2019', 'https://link.springer.com/article/10.1007/s11292-018-9338-2')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Irish Citizens\' Assembly on the Eighth Amendment',
          where: 'Ireland', when: '2016-2018',
          authority: 'Advisory, coupled by design to a referendum',
          outcome: paragraph(`
            The Irish government convened 99 randomly selected members, who deliberated
            over five sessions. The 2018 referendum repealed the amendment with 66% in
            favor on 64% turnout, tracking the assembly’s vote. The government
            adopted the assembly’s suggested constitutional wording over the
            parliamentary committee’s. Coding of 3,981 speech acts found assembly
            members showed a deeper grasp of the subject than parliamentarians, and
            experts spoke with more complexity to citizens than to the committee.
            The outcome is policy adoption, and no study shows what would have
            happened without the assembly.
          `),
          strength: 'moderate',
          sources: [
            source('Electoral Reform Society', 'https://electoral-reform.org.uk/the-irish-abortion-referendum-how-a-citizens-assembly-helped-to-break-years-of-political-deadlock/'),
            source('Suiter et al. 2022', 'https://journals.sagepub.com/doi/full/10.1177/14789299211020909')
          ]
        }),
        comparable({
          name: 'French Citizens Convention for Climate',
          where: 'France', when: '2019-2021',
          authority: 'Quasi-binding presidential promise, eroded',
          outcome: paragraph(`
            France’s president promised to implement nearly all of the citizen
            convention’s 149 recommendations. In the end the government implemented
            20% as proposed and 51% in modified form, and dropped roughly 29%.
            Members rated government follow-through 3.3 out of 10. The government
            favored incentive-based over regulatory recommendations and responded
            more to detailed ones. It is the measured case of a binding promise
            decaying under pressure.
          `),
          strength: 'strong',
          sources: [source('Knowledge Network on Climate Assemblies', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
        }),
        comparable({
          name: 'Michigan Sortition Panel',
          where: 'Michigan', when: '11/2020',
          authority: 'Advisory research exercise',
          outcome: paragraph(`
            Researchers convened a randomly selected panel of Michigan residents on
            pandemic policy. The panel proved sortition feasible mid-pandemic. Its 12
            recommendations had no documented effect, and it convened after the fall
            decision window.
          `),
          strength: 'moderate',
          sources: [source('Carnegie Mellon University', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Convene parents, teachers, and experts to design safer ways to reopen',
      method: 'Deliberative forum with expert briefings',
      summary: 'A district-convened forum of residents and educators works with ventilation, epidemiology, and child-development experts to produce reopening options the board must answer.',
      anchor: 'physical presence in school',
      where: 'District or county level, in the large urban districts that chose remote-only fall starts',
      when: paragraph(`
        April to July 2020, touching the fall 2020 modality choice and the
        building-safety investments (ventilation, outdoor space, prioritizing
        the youngest grades) that determined what safe reopening could mean. The
        January 2021 evidence that in-person school with mitigation was not
        typically associated with rapid spread arrived after the fall decision;
        this proposal is a machine for generating that knowledge locally, six
        months earlier.
      `),
      description: paragraph(`
        Give a district-convened forum of parents, teachers, and residents the standing to put reopening options before the school board, which must respond to each in writing. Experts in ventilation, epidemiology, behavioral science, and early childhood brief the forum. The district or county convenes the forum in April 2020, before the fall decision. The district recruits members to reflect its families. Members meet over four to eight weeks and work from a written map of what each field knows and does not know. The forum’s product is a ranked set of options, such as outdoor classes, ventilation upgrades, and returning the youngest grades first, with costs attached. The board keeps the decision. The forum is advisory, but the district publishes its options and the board’s reasons. In 2020, large urban districts chose between open and closed with no such option set.
      `),
      banner: true,
      impactsMeasured: ['Test scores', 'Public school enrollment', 'Chronic absenteeism'],
      impactsConjectured: ['Trust in experts maintained', 'Local knowledge entering the option set'],
      links: [
        propLink({
          name: 'A forum with experts could widen the options beyond open or closed',
          claim: paragraph(`
            Structured early work between briefed experts and residents could put options on the table, such as outdoor classes, ventilation upgrades, and staged returns, that the open-or-closed debate of 2020 did not. No study tests this in a school-reopening setting.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The one measured experts-with-public result comes from the Irish
                assembly. Coding of 3,981 speech acts found experts spoke with
                more complexity to a citizen assembly than to a parliamentary
                committee, and that assembly members “demonstrate a deeper
                cognitively complex grasp of the subject matter”. The study
                measures how experts explain, not what schools decide, and it
                comes from a different policy area than reopening.
              `),
              grade: 'weak',
              quote: 'Members of the Citizens\' Assembly demonstrate a deeper cognitively complex grasp of the subject matter',
              sources: [source('Suiter et al. 2022', 'https://journals.sagepub.com/doi/full/10.1177/14789299211020909')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                District leaders leaned on general public health authority instead of seeking the specific expertise the reopening decision required. No study tests whether an expert-informed minipublic produces different reopening options than surveys do. The closest support, the deliberative polls Texas utilities ran with their customers, comes from a different domain.
              `),
              grade: 'weak',
              sources: [source('National Civic League', 'https://www.nationalcivicleague.org/ncr-article/deliberative-polling-and-the-rise-of-wind-power-in-texas/')]
            })
          ]
        }),
        propLink({
          name: 'Ventilation and outdoor options make in-person school safer',
          claim: paragraph(`
            Mechanical ventilation and outdoor instruction lower in-school transmission risk; this link is directly measured.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                In Italy’s Marche region, a retrospective cohort study covered
                205,347 students across more than 10,000 classrooms. With
                mechanical ventilation, “the relative risk of infection of students decreased
                at least by 74% compared with a classroom with only natural
                ventilation”.
              `),
              grade: 'strong',
              quote: 'the relative risk of infection of students decreased at least by 74% compared with a classroom with only natural ventilation',
              sources: [source('Buonanno et al. 2022', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.1087087/full')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Israel reopened in May 2020, lifted class-size limits two weeks
                later, and closed schools by June 3 after 2,026 students and
                staff tested positive. Mitigation quality carried the risk, not
                reopening as such. Sweden’s open schools doubled teacher infection risk.
              `),
              grade: 'moderate',
              sources: [source('Time', 'https://time.com/5868098/schools-reopening-coronavirus-denmark-south-korea-israel/')]
            })
          ]
        }),
        propLink({
          name: 'Safer options could move the decision toward in-person school',
          claim: paragraph(`
            Where the board finds the safer options credible and affordable, they could move the decision toward earlier in-person instruction. This depends on cost, trust in the forum, and the politics that in 2020 outweighed local case rates.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                A randomized experiment with 2,150 Brazilian municipalities
                found that mayors respond to research findings. Telling them about
                an effective policy raised adoption by 10 percentage points.
              `),
              grade: 'moderate',
              sources: [
                source('Hjort et al. 2021', 'https://www.nber.org/papers/w25941')
              ]
            }),
            evidence({
              finding: paragraph(`
                In this case, test-to-stay evidence came before the CDC endorsed the less restrictive option in December 2021. The evidence showed a 1.5 percent secondary attack rate, and in one district “up to 8,152 in-person learning days were saved among TTS participants”.
              `),
              grade: 'moderate',
              quote: 'up to 8,152 in-person learning days were saved among TTS participants',
              sources: [
                source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm705152e2.htm')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Across more than 10,000 districts, reopening decisions did not track risk information. Going from a 40 percent to a 60 percent Trump-vote district shifted the chance of remote instruction by 17 percentage points. The local case rate had almost no effect: “The COVID case rate, while statistically significant, is substantively trivial in its effect on a district's course of action”.
              `),
              grade: 'strong',
              quote: 'The COVID case rate, while statistically significant, is substantively trivial in its effect on a district\'s course of action',
              sources: [
                source('Hartney and Finger 2020', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf'),
                source('Grossmann et al. 2021', 'https://journals.sagepub.com/doi/10.3102/0013189X211048840')
              ]
            })
          ]
        }),
        propLink({
          name: 'More in-person school reduces measured harm',
          claim: paragraph(`
            More in-person instruction reduces learning loss, disenrollment, and later chronic absence; this link is directly measured across districts.
          `),
          strength: 'strong',
          evidence: [
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
                US districts that offered remote-only instead of in-person
                instruction in 2020-21 saw 1.1 percentage points of extra
                disenrollment, “a 42 percent increase in disenrollment
                from -2.6 to -3.7 percent”.
              `),
              grade: 'strong',
              quote: 'offering remote-only instead of in-person instruction reduced enrollment by 1.1 percentage points (i.e., a 42 percent increase in disenrollment from -2.6 to -3.7 percent)',
              sources: [
                source('Dee et al. 2021', 'https://www.nber.org/papers/w29156')
              ]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Ada Lovelace Rapid Online Deliberation',
          where: 'United Kingdom', when: '05/2020',
          authority: 'Advisory, pre-rollout',
          outcome: paragraph(`
            The Ada Lovelace Institute convened 28 members online during lockdown. With
            expert input they produced four steers on COVID-19 technologies within one
            month. The project measured no policy outcome.
          `),
          strength: 'weak',
          sources: [source('Ada Lovelace Institute', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
        }),
        comparable({
          name: 'Texas Utility Deliberative Polls',
          where: 'Texas', when: '1996-1998',
          authority: 'Advisory to eight utilities',
          outcome: paragraph(`
            Eight Texas utilities ran deliberative polls that brought customers
            and experts together. The polls showed customers were willing to pay
            for renewables. A 1999 law required about 3% renewable supply, and
            Texas became the largest US wind generator. No study shows how much
            the polls caused the law.
          `),
          strength: 'weak',
          sources: [source('National Civic League', 'https://www.nationalcivicleague.org/ncr-article/deliberative-polling-and-the-rise-of-wind-power-in-texas/')]
        }),
        comparable({
          name: 'Marche Region Classroom Ventilation Program',
          where: 'Italy', when: '2021-2022',
          authority: 'Regional engineering program, no deliberative component',
          outcome: paragraph(`
            A regional engineering program mechanically ventilated 316
            classrooms and cut students’ relative infection risk by at least 74%.
            It is the engineering half of the proposal without the participation
            half.
          `),
          strength: 'strong',
          sources: [source('Buonanno et al. 2022', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.1087087/full')]
        }),
        comparable({
          name: 'UK Genetically Modified Crops Public Debate',
          where: 'United Kingdom', when: '2003',
          authority: 'Government commissioned, advisory, no connection to the policy decision',
          outcome: paragraph(`
            The UK government sponsored a national public debate on genetically
            modified crops. Six regional events cascaded into hundreds of open meetings
            and roughly 37,000 feedback forms, plus ten recruited narrow-but-deep
            groups. The debate found that people are generally uneasy about genetically
            modified crops, with little support for early commercialization. The
            process had no clear connection to government policy decisions, which
            fostered cynicism about its purpose. The recruited groups reached
            measurably different positions from the self-selected meetings.
          `),
          strength: 'moderate',
          sources: [source('Open University', 'https://www.open.edu/openlearn/science-maths-technology/achieving-public-dialogue/content-section-4')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let elected school boards decide reopening after a public deliberative step',
      method: 'Devolved local authority with public deliberation',
      summary: 'States hand the Fall 2020 reopening decision to elected school boards, require a facilitated public session before the vote, and publish outcome comparisons across districts.',
      anchor: '48 states left reopening modality',
      where: 'State legislatures and governors, at the delegation decision',
      when: paragraph(`
        June to August 2020, when states chose how to delegate the fall
        decision. Decentralization did happen: 48 states left modality to
        districts. The proposal's distinctive content is decentralization plus a
        structured local resolution process plus organized cross-region outcome
        comparison, neither of which existed then or during the winter 2021-22
        closure waves.
      `),
      description: paragraph(`
        Give locally elected school boards authority to decide whether and how schools reopen, within statewide public-health guardrails. Each board must hold a facilitated public session with parents, staff, and health officials before it votes, and must publish its reasons. The state legislature or governor sets the delegation between June and August 2020, keeps statewide closure thresholds, and requires every district to report its instructional mode and case data to a public comparison. The public session does not bind the board. The board decides, but it must answer the concerns raised. In 2020, 48 states left the choice to districts without a required resolution process or any organized comparison of results. District decisions tracked partisanship and union strength more than local case rates.
      `),
      banner: true,
      impactsMeasured: ['Test scores', 'Public school enrollment'],
      impactsConjectured: ['Outcome comparisons across regions', 'Less appeal-to-the-top politics'],
      links: [
        propLink({
          name: 'Delegation to districts produces regional variation',
          claim: paragraph(`
            Delegating the decision to districts produces variation in instructional mode across regions; this happened in fall 2020 and is directly observed.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Directly observed: fall 2020 produced 24% fully online, 51%
                hybrid, 17% in-person. Districts already decided locally, so the proposal cannot claim this variation as its own contribution.
              `),
              grade: 'strong',
              sources: [source('Honein et al. 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')]
            })
          ]
        }),
        propLink({
          name: 'A deliberative step could make local decisions track local conditions',
          claim: paragraph(`
            A required public session before the vote could make district decisions track local COVID conditions instead of politics. In the observed delegation, without that step, decisions tracked partisanship and union strength. No study tests whether the step changes this.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Bolivia handed budget power to municipalities in 1994. Local investment then shifted toward the services each place measurably lacked, most strongly in education, water, and sanitation. The authors find “these changes are strongly and positively related to objective indicators of need”.
              `),
              grade: 'weak',
              quote: 'These changes are strongly and positively related to objective indicators of need',
              sources: [
                source('Faguet 2004', 'https://socialserviceworkforce.org/wp-content/uploads/2024/03/Does-Decentralization-Increase-Gov-Responsiveness.pdf')
              ]
            }),
            evidence({
              finding: paragraph(`
                In the America in One Room field experiment, structured
                deliberation produced large depolarizing changes in
                policy attitudes. No study combines decentralized
                authority with structured deliberation in a crisis decision.
              `),
              grade: 'weak',
              sources: [
                source('Fishkin et al. 2021', 'https://www.cambridge.org/core/journals/american-political-science-review/article/is-deliberation-an-antidote-to-extreme-partisan-polarization-reflections-on-america-in-one-room/5DEFB6F8D944ECDE77A5E80C3346D4DE')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                This is the link that failed in the observed decentralization. Across 10,000+ districts, “decisions were more tied to local political partisanship and union strength than to COVID-19 severity”. No study tests whether adding a deliberative resolution step changes this.
              `),
              grade: 'strong',
              quote: 'decisions were more tied to local political partisanship and union strength than to COVID-19 severity',
              sources: [
                source('Grossmann et al. 2021', 'https://journals.sagepub.com/doi/10.3102/0013189X211048840'),
                source('Hartney and Finger 2020', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf')
              ]
            })
          ]
        }),
        propLink({
          name: 'Variation could produce comparisons in time to use them',
          claim: paragraph(`
            Published outcome comparisons across districts could inform later decisions inside the decision window. This depends on comparable data existing in time; no school-mode dataset existed until September 2021.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                The variation did generate knowledge. Every study measuring what remote instruction cost relies on districts having chosen differently. The learning arrived in publications in 2021-2023, years after the decisions it could have informed.
              `),
              grade: 'moderate',
              sources: [source('Dee et al. 2021', 'https://www.nber.org/papers/w29156')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The search found no case of a US district or state changing a
                2020-21 modality decision in response to comparative outcome data
                from other regions during the decision window.
              `),
              grade: 'moderate',
              sources: [source('US Centers for Disease Control and Prevention', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')]
            })
          ]
        }),
        propLink({
          name: 'Decisions that track conditions could cut remote exposure',
          claim: paragraph(`
            Where conditions allowed, staying open was compatible with limited transmission, so decisions that tracked conditions could have reduced remote exposure and its measured harms.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Sweden kept schools through grade 9 open, which had “limited consequences for the overall transmission of the virus” and no learning loss in grades 1-3; Denmark reopened in April 2020 with no case increase.
              `),
              grade: 'moderate',
              quote: 'keeping the former open had limited consequences for the overall transmission of the virus',
              sources: [source('Vlachos et al. 2021', 'https://www.sciencedaily.com/releases/2021/02/210212101842.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In Sweden, upper-secondary schools moved online in spring 2020
                while lower-secondary schools stayed open. Open schools
                doubled teacher infection risk: “the infection
                rate doubled among lower-secondary teachers relative to
                upper-secondary ones”. Lower-secondary teachers were the 7th most
                affected of 124 occupations, and their partners’ risk rose 30%.
              `),
              grade: 'moderate',
              quote: 'the infection rate doubled among lower-secondary teachers relative to upper-secondary ones',
              sources: [source('Vlachos et al. 2021', 'https://www.sciencedaily.com/releases/2021/02/210212101842.htm')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'US Fall 2020 Delegation to School Districts',
          where: 'United States', when: '2020',
          authority: '48 states delegated modality to districts',
          outcome: paragraph(`
            48 states delegated the fall 2020 reopening decision to their school
            districts. This is not an outside analog; it happened in this case.
            It is the proposal’s nearest real-world trial and its strongest
            counter-evidence. District decisions tracked partisanship and union
            strength, not COVID severity.
          `),
          strength: 'strong',
          sources: [source('Hartney and Finger 2020', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf')]
        }),
        comparable({
          name: 'Cross-National Decentralization and Containment Timing',
          where: '93 countries', when: '2020',
          authority: 'Natural experiment, containment phase',
          outcome: paragraph(`
            A study across 93 countries found that more decentralized countries delayed
            the start of containment measures. The study covers the containment
            phase, not reopening. The nearest measured neighbor points the other
            way for the emergency phase.
          `),
          strength: 'moderate',
          sources: [source('Tselios 2024', 'https://academic.oup.com/publius/article/54/1/34/7191229')]
        }),
        comparable({
          name: 'Sweden and Denmark Open-School Policies',
          where: 'Sweden, Denmark', when: '2020',
          authority: 'National uniform decisions',
          outcome: paragraph(`
            Sweden saw no learning loss in grades 1-3, doubled teacher risk, and
            limited overall transmission. Denmark was the first European country
            to reopen and saw no case increase. Both were national decisions, so
            they test open schools, not local control.
          `),
          strength: 'moderate',
          sources: [source('Hallin et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/35677729/')]
        }),
        comparable({
          name: 'Finnish and Swedish Municipal Nuclear Waste Veto',
          where: 'Finland and Sweden', when: '1980s-2020s',
          authority: 'Host municipalities held formal veto power, with funded independent review',
          outcome: paragraph(`
            Host municipalities held a formal veto over repository siting.
            Sweden financed municipal expertise through the Nuclear Waste Fund.
            The fund paid Osthammar’s review staff, so they could assess the
            plan independently of industry. The operator reported strong local
            support for a future repository. Finland’s Eurajoki representatives
            called the existing process satisfactory, and Finland built the
            world’s first operating deep repository. The source warns that
            community acceptance may reflect existing nuclear infrastructure,
            not rigorous safety evaluation.
          `),
          strength: 'moderate',
          sources: [source('Bellona', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Publish local case, hospital, and school data from the first weeks',
      method: 'Mandatory open data publication',
      summary: 'State health and education agencies must publish county-level case, hospital, and school-mode data weekly, with a plain statement of what is and is not known.',
      anchor: '49 states suspended in-person',
      where: 'State health departments jointly with state education agencies',
      when: paragraph(`
        March to June 2020, so a shared local data layer exists before the July
        2020 politicization and the fall modality decisions. No federal
        school-mode dataset existed; the COVID-19 School Data Hub launched in
        September 2021. The intervention point is the first eighteen months of
        that vacuum.
      `),
      description: paragraph(`
        Require state health departments, jointly with state education agencies, to publish county-level case, hospitalization, death, and school-operating-mode data every week from March 2020. Each release carries a plain statement of what is known and what is not. The duty falls on the agencies. The public’s role is as reader, and any resident, journalist, or school board can use the same figures. Publication is mandatory and on a fixed schedule, and the agencies must publish their uncertainty and revise openly. Statewide health orders stay in place. This is a transparency measure, not a participation right. It sits on the map because the other proposals depend on it: in 2020 no federal school-mode dataset existed, the COVID-19 School Data Hub launched only in September 2021, and newspapers filled the county-data gap.
      `),
      banner: true,
      impactsMeasured: ['Confidence in public schools', 'Public school enrollment'],
      impactsConjectured: ['Heading off polarization', 'Treating citizens as capable of reasoning'],
      links: [
        propLink({
          name: 'Early local data publication is feasible and fills a real gap',
          claim: paragraph(`
            States could publish county and school-level data from the first weeks; a small grant-funded team later assembled school-mode data for 55,000 schools, and in 2020 no such dataset existed.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                A small grant-funded team assembled school-level mode data for
                over 55,000 schools in 30 states. That showed the work was
                feasible, 18 months late. Until then, as the project put it,
                “We have federal data on school operations for only the largest
                districts in the country”.
              `),
              grade: 'moderate',
              quote: 'We have federal data on school operations for only the largest districts in the country',
              sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
            })
          ]
        }),
        propLink({
          name: 'Publishing uncertainty need not cost trust',
          claim: paragraph(`
            Publishing data with its uncertainty stated does not appear to reduce trust in the data or its source; the experiments come from news and survey settings, not school decisions.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                van der Bles et al. (Proceedings of the National Academy of Sciences 2020) ran five experiments with 5,780
                participants, including a BBC News field experiment on
                numeric-range uncertainty. People noticed the uncertainty, but the
                authors “observed only a small decrease in trust in numbers and
                trustworthiness of the source, and mostly for verbal uncertainty
                communication”.
              `),
              grade: 'moderate',
              quote: 'we observed only a small decrease in trust in numbers and trustworthiness of the source, and mostly for verbal uncertainty communication',
              sources: [
                source('van der Bles et al. 2020', 'https://pubmed.ncbi.nlm.nih.gov/32205438/'),
                source('van der Bles et al. 2020 (University of Groningen)', 'https://research.rug.nl/en/publications/the-effects-of-communicating-uncertainty-on-public-trust-in-facts/')
              ]
            })
          ]
        }),
        propLink({
          name: 'Shared data could narrow the gap in how groups see the risk',
          claim: paragraph(`
            A shared local data layer could align risk perception across groups and slow polarization. This is contested: the framing of the same facts moved opinion by 17 points, so shared data alone may not do it.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                The presentation of the same facts moved opinion. Biden voters’ support for in-person schooling ran from 43% to 60% depending on the news segment they read, a 17-point swing. “The percentage of Biden voters who support re-opening schools to in-person learning is as low as 43% to as high as 60%, depending on which news segment we assigned them to read.” Record case counts cut support most; the pediatricians’ recommendation for in-person school raised it most.
              `),
              grade: 'moderate',
              quote: 'The percentage of Biden voters who support re-opening schools to in-person learning is as low as 43% to as high as 60%, depending on which news segment we assigned them to read.',
              sources: [source('Brookings Institution', 'https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Misperception persisted despite abundant public data. Only 18% of US adults correctly estimated
                hospitalization rates, and partisan risk perception diverged during
                the period when the most data was available.
              `),
              grade: 'strong',
              sources: [source('Brookings Institution', 'https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/')]
            })
          ]
        }),
        propLink({
          name: 'Shared understanding could hold confidence and enrollment',
          claim: paragraph(`
            Sustained shared understanding could hold confidence in the deciding institutions and reduce exit. No study tests this route.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Research on whether transparency builds trust supports only a conditional version of this link. A systematic review of 187 studies finds mixed, context-dependent effects. An experiment found transparency raised perceived trustworthiness only for some groups of citizens.
              `),
              grade: 'weak',
              sources: [
                source('Cucciniello et al. 2017', 'https://onlinelibrary.wiley.com/doi/abs/10.1111/puar.12685'),
                source('Grimmelikhuijsen and Meijer 2014', 'https://academic.oup.com/jpart/article-abstract/24/1/137/916830')
              ]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'COVID-19 School Data Hub',
          where: 'Brown University', when: '09/2021',
          authority: 'Private substitution for a missing federal function',
          outcome: paragraph(`
            A grant-funded university team assembled school-level mode data for
            55,000+ schools in 30 states, filling a missing federal function.
            The data made the research on instructional mode possible. No study
            measures its effect on public trust.
          `),
          strength: 'moderate',
          sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
        }),
        comparable({
          name: 'BBC News Uncertainty Field Experiment',
          where: 'United Kingdom', when: '2020',
          authority: 'Field experiment inside live news',
          outcome: paragraph(`
            A field experiment inside live BBC News coverage found that communicating
            numeric uncertainty did not reduce trust in the data or its source.
            “These results could help reassure all communicators of facts and
            science that they can be more open and transparent about the limits
            of human knowledge.”
          `),
          strength: 'strong',
          sources: [source('van der Bles et al. 2020', 'https://pubmed.ncbi.nlm.nih.gov/32205438/')]
        }),
        comparable({
          name: 'Taiwan Mask Inventory API and Civic Maps',
          where: 'Taiwan', when: '02/2020',
          authority: 'Government open API plus civic tech',
          outcome: paragraph(`
            Taiwan's government published a live mask-inventory API within days of the
            outbreak, and civic technologists built maps on it; one map app took nearly
            1 million inquiries on day one. The source claims trust and anxiety
            effects but does not measure them.
          `),
          strength: 'weak',
          sources: [source('Sidewalk Labs', 'https://medium.com/sidewalk-talk/how-open-data-and-civic-participation-helped-taiwan-slow-covid-b1449bab5841')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Give parents and community members a binding say before school closures',
      method: 'Standing council with binding consultation',
      summary: 'A standing council of parents, educators, business owners, and health experts must be consulted before closure or reopening decisions, and its vote carries required consequences.',
      anchor: 'safety strikes',
      where: 'Large urban districts with the sharpest bargaining asymmetry; Chicago already had the statutory infrastructure',
      when: paragraph(`
        The honest answer is before the pandemic: a body created mid-crisis is
        not a standing body. Within the case window, June
        to August 2020 in Detroit, San Francisco, Chicago, and New York,
        touching the fall 2020 decision and the spring 2021 reopening
        negotiations. Chicago's Local School Councils are the sharpest
        comparison: the mechanism existed in statute, and the search found no
        evaluation of its pandemic role.
      `),
      description: paragraph(`
        Give a standing school- or district-level council a binding role in closure and reopening decisions, within state health orders and collective-bargaining law. The council has seats for parents, educators, small business owners, public-health experts, and community leaders. Each constituency elects or appoints its members before any crisis. The district must bring each closure decision to the council, and a council vote either sets the decision or obliges the board to publish written reasons for overriding it. Participation is binding in that sense, not advisory. The council sees the same case data the district uses and publishes its votes. Chicago’s Local School Councils show the form existed in statute in 2020. Small business was the constituency the 2020 record left without any channel, while parents’ participation moved to lawsuits and recall campaigns.
      `),
      banner: true,
      impactsMeasured: ['Confidence in public schools', 'Public school enrollment', 'Chronic absenteeism'],
      impactsConjectured: ['Less adversarial participation after decisions', 'Rebalancing against single-stakeholder capture'],
      links: [
        propLink({
          name: 'A standing council can govern schools competently',
          claim: paragraph(`
            A standing parent-community body with binding elements can govern schools competently at scale; Chicago's councils are the measured case, with a minority showing serious shortcomings and quorum failures.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Chicago’s Local School Councils (LSCs) are elected, parent-majority councils at 500+ schools. They hire principals on performance contracts, set improvement priorities, and determine budgets. Research found “most LSCs are viable governance organizations that responsibly complete their mandated duties”, with 10-15% showing serious shortcomings.
              `),
              grade: 'moderate',
              quote: 'Most LSCs are viable governance organizations that responsibly complete their mandated duties',
              sources: [source('Designs for Change 2002', 'https://eric.ed.gov/?id=ED476943')]
            }),
            evidence({
              finding: paragraph(`
                The councils’ highest-profile pandemic-era decision now has an evaluation. Chicago Public Schools handed the 2020 police-in-schools decision to each school’s council. Schools that voted to remove school resource officers (SROs) “removed SROs without detrimental changes in student disciplinary outcomes or perceptions of school climate”.
              `),
              grade: 'moderate',
              quote: 'Schools removed SROs without detrimental changes in student disciplinary outcomes or perceptions of school climate.',
              sources: [
                source('University of Chicago Consortium on School Research', 'https://consortium.uchicago.edu/publications/removing-police-officers-from-Chicago-schools')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The record documents capacity strain. When Chicago delegated the 2020 police vote, “more than a fifth of the 72 schools with police officers assigned to them either don't have LSCs at all or don't have enough members to form a quorum”.
              `),
              grade: 'moderate',
              quote: 'More than a fifth of the 72 schools with police officers assigned to them either don\'t have LSCs at all or don\'t have enough members to form a quorum',
              sources: [
                source('WBEZ Chicago', 'https://www.npr.org/local/309/2020/07/14/890756361/20-of-schools-lack-enough-local-school-council-members-to-vote-on-keeping-police')
              ]
            }),
            evidence({
              finding: paragraph(`
                Vacancies persisted. After the April 2022 council elections, “more than 1,400 LSC seats remain empty at hundreds of schools”.
              `),
              grade: 'moderate',
              quote: 'After high voter turnout in the April election, more than 1,400 LSC seats remain empty at hundreds of schools.',
              sources: [
                source('Chalkbeat Chicago', 'https://www.chalkbeat.org/chicago/2022/9/1/23333494/chicago-public-schools-local-school-councils-vacancies-raise-your-hand/')
              ]
            })
          ]
        }),
        propLink({
          name: 'A binding role before decisions may raise trust and engagement',
          claim: paragraph(`
            Having a binding voice before decisions may raise trust in the institution and later civic engagement; the measured cases come from participatory budgeting and school councils, not closure decisions.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                New York City participatory budgeting “increased individuals' probability of voting by an average of 8.4 percentage points”, most of all for underrepresented groups.
              `),
              grade: 'moderate',
              quote: 'engaging with participatory budgeting increased individuals\' probability of voting by an average of 8.4 percentage points',
              sources: [
                source('Johnson, Carlson, and Reynolds 2023', 'https://link.springer.com/article/10.1007/s11109-021-09679-w')
              ]
            }),
            evidence({
              finding: paragraph(`
                Brazilian participatory budgeting shifted spending to sanitation and health and reduced infant mortality, a result two independent research teams found.
              `),
              grade: 'moderate',
              sources: [
                source('Touchton and Wampler 2014', 'https://scholarworks.boisestate.edu/polsci_facpubs/146/'),
                source('Gonçalves 2014', 'https://ideas.repec.org/a/eee/wdevel/v53y2014icp94-110.html')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                A preregistered experiment on civilian police review boards (N=2,503) found “no statistically significant evidence that the presence of a CRB increases aggregate perceptions of procedural legitimacy”. Perceived legitimacy fell when the citizen body visibly disagreed with the institution.
              `),
              grade: 'strong',
              quote: 'no statistically significant evidence that the presence of a CRB increases aggregate perceptions of procedural legitimacy',
              sources: [source('Schiff et al. 2025', 'https://academic.oup.com/pnasnexus/article/4/9/pgaf267/8238990')]
            })
          ]
        }),
        propLink({
          name: 'Maintained trust could reduce exit and absence',
          claim: paragraph(`
            Where trust holds, families may be less likely to leave the district or keep children home; this route is not tested in schools.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The clearest causal case runs in reverse. The 1972 Tuskegee disclosure raised medical mistrust among older Black men and cut physician visits, and “life expectancy at age 45 for black men fell by up to 1.5 years in response to the disclosure”.
              `),
              grade: 'weak',
              quote: 'life expectancy at age 45 for black men fell by up to 1.5 years in response to the disclosure',
              sources: [
                source('Alsan and Wanamaker 2016', 'https://www.nber.org/papers/w22323')
              ]
            }),
            evidence({
              finding: paragraph(`
                In schools, pandemic exit tracked the district's
                instructional decision: families left the districts
                that stayed remote.
              `),
              grade: 'weak',
              sources: [
                source('Musaddiq et al. 2021', 'https://www.nber.org/papers/w29262')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Absence is high even among children born after the closures. That suggests a broad shift in attendance norms that rebuilding trust in a single district may not reach.
              `),
              grade: 'moderate',
              sources: [source('American Enterprise Institute', 'https://www.aei.org/research-products/report/from-attendance-crisis-to-chronic-condition-tracking-post-pandemic-chronic-absenteeism-into-2025/')]
            })
          ]
        }),
        propLink({
          name: 'A voice before decisions could reduce lawsuits and recalls',
          claim: paragraph(`
            A binding voice before decisions could reduce adversarial participation after them, such as recalls, litigation, and board conflict; the closest evidence comes from medical disclosure, not school governance.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                After the University of Michigan Health System (UMHS) began proactive disclosure with offers of resolution, new claims and lawsuits per month fell, with “a 61 percent decrease in spending at the UMHS on legal defense costs”. It is a measured case of early engagement displacing litigation, in medicine, not school governance.
              `),
              grade: 'moderate',
              quote: 'a 61 percent decrease in spending at the UMHS on legal defense costs',
              sources: [source('Kachalia et al. 2010', 'https://www.sciencedaily.com/releases/2010/08/100816204210.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The record documents the adversarial surge: 84 recall efforts, the
                litigation wave, and the participation shift from 6% to 49%. No
                study tests whether districts with stronger upstream channels saw
                less of it.
              `),
              grade: 'weak',
              sources: [source('Ballotpedia', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Chicago Local School Councils',
          where: 'Chicago', when: '1988-present',
          authority: 'Binding: hire principals, set budgets, parent majority',
          outcome: paragraph(`
            Elected parent-majority councils hire principals and set budgets at
            500+ Chicago schools, and most proved viable. They are the closest
            US analog to a standing binding parent channel. Their pandemic-era
            record now has an evaluation. Chicago Public Schools handed the 2020
            police-in-schools decision to each school’s council, and the
            University of Chicago Consortium found that schools that removed
            officers saw no detrimental changes in discipline or school climate.
            The record also documents capacity strain: over a fifth of schools
            with officers lacked a council able to form a quorum for that vote,
            and 1,400 seats sat empty after the 2022 elections.
          `),
          strength: 'moderate',
          sources: [
            source('Designs for Change 2002', 'https://eric.ed.gov/?id=ED476943'),
            source('University of Chicago Consortium on School Research', 'https://consortium.uchicago.edu/publications/removing-police-officers-from-Chicago-schools'),
            source('WBEZ Chicago', 'https://www.npr.org/local/309/2020/07/14/890756361/20-of-schools-lack-enough-local-school-council-members-to-vote-on-keeping-police'),
            source('Chalkbeat Chicago', 'https://www.chalkbeat.org/chicago/2022/9/1/23333494/chicago-public-schools-local-school-councils-vacancies-raise-your-hand/')
          ]
        }),
        comparable({
          name: 'Brazilian Municipal Participatory Budgeting',
          where: 'Brazil', when: '1990-2004',
          authority: 'Binding in practice, annual, city scale',
          outcome: paragraph(`
            Municipalities that adopted participatory budgeting shifted spending toward
            sanitation and health. Two independent teams measured declines in infant
            mortality. It is the strongest measured welfare outcome for any standing
            binding channel, and the furthest domain from schools.
          `),
          strength: 'strong',
          sources: [
            source('Gonçalves 2014', 'https://ideas.repec.org/a/eee/wdevel/v53y2014icp94-110.html'),
            source('Touchton and Wampler 2014', 'https://scholarworks.boisestate.edu/polsci_facpubs/146/')
          ]
        }),
        comparable({
          name: 'Civilian Police Review Boards',
          where: 'United States', when: '1970s-present',
          authority: 'Standing, mostly without disciplinary authority',
          outcome: paragraph(`
            This is the field’s most important negative comparable. Standing
            citizen boards that mostly lack disciplinary authority showed no
            experimental effect on legitimacy, and legitimacy fell when the
            citizen body disagreed with the institution. Whether it applies
            turns on the binding-elements clause.
          `),
          strength: 'strong',
          sources: [source('Schiff et al. 2025', 'https://academic.oup.com/pnasnexus/article/4/9/pgaf267/8238990')]
        }),
        comparable({
          name: 'Oregon Citizens Initiative Review',
          where: 'Oregon', when: '2010-present',
          authority: 'Statutory standing minipublic; statement placement binding, content advisory to voters',
          outcome: paragraph(`
            20 to 24 stratified randomly selected citizens deliberate for five
            days on a ballot measure. The state prints their Citizens’ Statement
            in the official Voters’ Pamphlet, which reaches over 80 percent of
            voters. A two-wave 2010 panel (N=971) and a 2012 cross-section
            (N=1,539) found that reading the statements increased issue-specific
            knowledge for some voters. Awareness of the review significantly
            raised voters’ sense that government responds to them (external
            efficacy) and left their sense of their own political competence
            (internal efficacy) unchanged.
          `),
          strength: 'strong',
          sources: [source('Knobloch, Barthel, and Gastil 2020', 'https://journals.sagepub.com/doi/full/10.1177/0032321719852254')]
        }),
        comparable({
          name: 'Ostbelgien Permanent Citizens Council',
          where: 'Belgium', when: '2019-present',
          authority: 'Created by decree; agenda-setting power and mandatory institutional follow-up',
          outcome: paragraph(`
            A decree created a permanent Citizens’ Council plus rotating
            Citizens’ Assemblies, and six assemblies ran in the first five
            years. The five-year review states that officials were already
            proposing some early recommendations to a certain degree, and found
            others too vague to convert into legislation. It also states that
            institutionalized citizen deliberation remains in its infancy. The
            model has proved durable. No study has measured a trust or policy
            outcome.
          `),
          strength: 'weak',
          sources: [source('Deliberative Democracy Digest', 'https://www.publicdeliberation.net/the-ostbelgien-model-five-years-on/')]
        })
      ],
      sources: []
    })
  ]
});
