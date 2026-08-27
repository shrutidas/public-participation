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
      note: 'The venue existed everywhere; input had nowhere to bind',
      detail: paragraph(`
        A formal decision venue with public comment existed in every district.
        Participation surged only after the decisions, largely in adversarial
        form: the share of students in high-participation districts rose from 6%
        to 49% between 2020 and 2022, and 21 of the 25 most conflictual months on
        record came after January 2020. At decision time the channel carried
        preference aggregation with no binding step.
      `),
      anchors: ['48 states left reopening modality'],
      sources: [source('Brookings', 'https://www.brookings.edu/articles/the-revolt-of-the-public-school-parents/')]
    }),
    mechanism({
      name: 'State advisory councils',
      actor: 'Governors, appointed educators, parents, health officials',
      failure: 'acted-no-effect',
      note: 'Fired at the right time, advisory only; effect never measured',
      detail: paragraph(`
        Michigan's Return to Learn Advisory Council convened in June 2020, at the
        right time to shape the fall decision, and produced the Return to School
        Roadmap. It was appointed rather than representative and had no binding
        remit; the record contains limited public information on whether its
        recommendations were followed, and critics argued they were not.
      `),
      anchors: ['Return to School Roadmap'],
      sources: [source('Executive Order 2020-88', 'https://content.govdelivery.com/attachments/MIEOG/2020/05/15/file_attachments/1452673/EO%202020-88.pdf')]
    }),
    mechanism({
      name: 'Parent surveys and polls',
      actor: 'Districts, KFF, Gallup',
      failure: 'acted-no-effect',
      note: 'Produced information for administrators, not obligations',
      detail: paragraph(`
        Surveys fired on time and were informative: KFF found 60% of parents
        preferred opening later, Gallup found a 36-28-36 split across in-person,
        remote, and hybrid. The mechanism performed exactly as designed, and its
        design had no binding step. District decisions then tracked partisanship
        and union strength, not surveyed preferences or case rates.
      `),
      anchors: ['60% of parents'],
      sources: [
        source('KFF', 'https://www.kff.org/covid-19/kff-health-tracking-poll-july-2020'),
        source('Hartney and Finger', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf')
      ]
    }),
    mechanism({
      name: 'Union collective bargaining',
      actor: 'AFT, NEA, local affiliates',
      failure: 'worked',
      note: 'The one channel where stakeholder input could force the terms',
      detail: paragraph(`
        Bargaining fired with binding force for its principals: the UFT threat
        delayed New York City's reopening from September 10 to September 21 and
        set testing terms and a closure trigger; Detroit's deal put teacher
        modality choice in members' hands. The systemic failure is the asymmetry:
        this was the only stakeholder channel in the case whose input bound, and
        only teachers held it.
      `),
      anchors: ['delayed in-person instruction to September 21', 'safety strikes'],
      sources: [source('K-12 Dive', 'https://www.k12dive.com/news/nyc-uft-reopening-agreement-delays-school-start-boosts-safety/584532/')]
    }),
    mechanism({
      name: 'Elections and recalls',
      actor: 'Voters, recall committees',
      failure: 'acted-no-effect',
      note: 'Removed officeholders after the fact; no effect on the decisions it judged',
      detail: paragraph(`
        The accountability channel arrived long after the decisions it judged. Of
        84 recall efforts in 2021, 16 reached a ballot and one member was removed.
        San Francisco removed all three commissioners by 69 to 76% margins, 14 to
        20 months after the fall 2020 decisions. No mechanism existed to bind
        before the decision.
      `),
      anchors: ['recalled three Board of Education members'],
      sources: [source('Ballotpedia', 'https://news.ballotpedia.org/2021/11/08/school-board-recalls-in-2021/')]
    }),
    mechanism({
      name: 'Litigation',
      actor: 'City attorneys, parent plaintiffs, courts',
      failure: 'partial',
      note: 'Added pressure after the decisions; effects entangled with vaccines',
      detail: paragraph(`
        San Francisco's suit against its own district was the first of its kind
        and preceded partial reopening, with effects entangled with the
        vaccination timeline and state politics. Like recalls, litigation is a
        post-hoc channel: it contested decisions made in mid-2020 from February
        2021 onward.
      `),
      anchors: ['sued the city\'s own school district'],
      sources: [source('NBC News', 'https://www.nbcnews.com/news/us-news/san-francisco-sues-its-own-school-district-demands-restart-person-n1256639')]
    }),
    mechanism({
      name: 'Professional and federal guidance',
      actor: 'AAP, CDC',
      failure: 'acted-no-effect',
      note: 'Decisions tracked politics and union strength, not guidance',
      detail: paragraph(`
        The AAP urged starting from the goal of physical presence in June 2020,
        ahead of the fall decisions; the CDC's Operational Strategy arrived
        eleven months after closures. Politicization in July 2020 damaged the
        federal channel's neutrality, and the decision studies find modality
        tracked partisanship and bargaining strength, not guidance or local case
        rates. For public input into the guidance, no mechanism existed.
      `),
      anchors: ['physical presence in school', 'Operational Strategy'],
      sources: [
        source('Hartney and Finger', 'https://edworkingpapers.com/sites/default/files/ai20-304.pdf'),
        source('Grossmann et al.', 'https://journals.sagepub.com/doi/10.3102/0013189X211048840')
      ]
    }),
    mechanism({
      name: 'Public data infrastructure',
      actor: 'Federal statistics agencies',
      failure: 'no-mechanism',
      note: 'No federal school-mode dataset; a private team built one 18 months late',
      detail: paragraph(`
        No federal dataset tracked which schools were open, hybrid, or remote.
        The COVID-19 School Data Hub, a small grant-funded team at Brown
        University, launched September 2021 with school-level mode data for over
        55,000 schools in 30 states, 18 months into the vacuum it filled. Federal
        data covered only the largest districts.
      `),
      anchors: ['49 states suspended in-person'],
      sources: [source('Brown University', 'https://www.brown.edu/news/2021-09-15/hub')]
    })
  ],

  impacts: [
    impact({
      name: 'Public school enrollment',
      headline: paragraph(`
        Public school enrollment fell by 1.4 million students between fall 2019 and
        fall 2020 and has not recovered; remote-only instruction caused a
        measurable share of the exit.
      `),
      measures: paragraph(`
        National public school enrollment fell from 50.8 million in fall 2019 to
        49.4 million in fall 2020 and stabilized near that level. Remote-only
        instruction causally accounts for 1.1 percentage points of additional
        disenrollment, concentrated in kindergarten and elementary grades.
      `),
      from: [
        { anchor: '48 states left reopening modality', strength: 'strong', note: 'Remote-only mode caused measurable exit' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Dee, Huffaker, Phillips, and Sagara (NBER w29156, 2021) identify the
            enrollment effect of instructional mode across states, finding that
            “remote-only instead of in-person instruction reduced enrollment by
            1.1 percentage points”.
          `),
          grade: 'strong',
          quote: 'remote-only instead of in-person instruction reduced enrollment by 1.1 percentage points',
          sources: [source('NBER w29156', 'https://www.nber.org/papers/w29156')]
        }),
        evidence({
          finding: paragraph(`
            NCES enrollment series: <strong>50.8 million (fall 2019) to 49.4
            million (fall 2020)</strong>, then 49.4 to 49.6 million through 2022.
          `),
          grade: 'strong',
          sources: [source('NCES', 'https://nces.ed.gov/programs/coe/indicator/cga/public-school-enrollment')]
        })
      ]
    }),
    impact({
      name: 'Chronic absenteeism',
      headline: paragraph(`
        Chronic absenteeism stayed elevated long after schools reopened, with
        roughly 22% of students nationally missing a tenth or more of school
        days through 2024-25.
      `),
      measures: paragraph(`
        Chronic absenteeism (missing 10 percent or more of school days) remained
        elevated through 2024-25, at roughly 22% of students nationally, with
        more than 30% chronically absent in about half of surveyed urban
        districts. Kindergartners who were never in school during closures show
        rates 48% above the 2019 baseline.
      `),
      from: [
        { anchor: '48 states left reopening modality', strength: 'moderate', note: 'Dose-response by months of remote exposure; norm-shift channel unstudied' },
        { anchor: '25,907', strength: 'weak', note: 'Later disruption waves; attribution unseparated' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            RAND's 2025 district survey and AEI's 2026 tracking report document
            persistence; Singer's dose-response <strong>ties absence to months of remote
            exposure</strong>; the UChicago Consortium finds teacher-reported parent
            relationships associated with school absence rates, stronger after
            the pandemic.
          `),
          grade: 'moderate',
          sources: [
            source('RAND RRA956-34', 'https://www.rand.org/pubs/research_reports/RRA956-34.html'),
            source('AEI tracker', 'https://www.aei.org/research-products/report/from-attendance-crisis-to-chronic-condition-tracking-post-pandemic-chronic-absenteeism-into-2025/')
          ]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            One quarter of surveyed youth <strong>did not consider their own
            chronic absence a problem</strong>, which points toward indifference as a competing
            explanation alongside any trust-based account.
          `),
          grade: 'moderate',
          sources: [source('RAND RRA956-34', 'https://www.rand.org/pubs/research_reports/RRA956-34.html')]
        })
      ]
    }),
    impact({
      name: 'Confidence in public schools',
      headline: paragraph(`
        Confidence in public schools fell to 28% by 2022, concentrated almost
        entirely among Republicans, while parents kept rating their own schools
        far better than the institution.
      `),
      measures: paragraph(`
        Gallup confidence in public schools fell from its 2020 rally to 28% by
        2022, with the decline concentrated almost entirely among Republicans
        (34% to 14%) while Democratic confidence held. The 29-point partisan gap
        compares with a 7-point historical average.
      `),
      from: [
        { anchor: 'attacked CDC guidance', strength: 'moderate', note: 'Politicization of reopening precedes the partisan split' },
        { anchor: '48 states left reopening modality', strength: 'weak', note: 'Time-coincident; no study isolates the closure channel' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Gallup's confidence series shows the decline and its partisan
            concentration; parents rated their own schools far better than the
            institution nationally throughout.
          `),
          grade: 'moderate',
          sources: [source('Gallup', 'https://news.gallup.com/poll/394784/confidence-public-schools-turns-partisan.aspx')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Parents were typically supportive of how their schools handled the
            pandemic in 2020-21, and <strong>PDK local school grades did not fall
            through 2022</strong>. The damage appears in partisan, systemic measures with a lag,
            not in contemporaneous parent judgments.
          `),
          grade: 'moderate',
          sources: [source('Singer et al. 2023', 'https://journals.sagepub.com/doi/10.1177/08959048231174881')]
        })
      ]
    }),
    impact({
      name: 'Test scores',
      headline: paragraph(`
        National test scores dropped significantly following the COVID-19
        pandemic, but recent studies show the downward trend actually began
        years earlier.
      `),
      measures: paragraph(`
        NAEP long-term trend age-9 scores declined 5 points in reading and 7 in
        mathematics from 2020 to 2022, the first mathematics decline in the
        series. Districts with longer remote instruction show larger declines.
      `),
      from: [
        { anchor: '48 states left reopening modality', strength: 'strong', note: 'Remote mode drove larger achievement declines' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Goldhaber et al. (2022) and Jack et al. (2023) tie remote and hybrid
            mode to <strong>larger achievement declines</strong> across states and districts;
            Sweden's open primary schools showed no learning loss across 97,073
            students in grades 1-3.
          `),
          grade: 'strong',
          sources: [
            source('NAEP 2022', 'https://www.nationsreportcard.gov/highlights/ltt/2022'),
            source('Hallin et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/35677729/')
          ]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Education Recovery Scorecard data through 2025, reported by the New
            York Times and reposted by Harvard CEPR, show scores stopped
            climbing in the mid-2010s, with <strong>reading losses from 2017 to
            2019 matching the pandemic-era losses</strong>. Part of the post-2020 gap
            reflects a longer decline rather than closure policy; the
            mode-to-decline comparisons across districts are within-period and
            are not touched by the pre-trend.
          `),
          grade: 'moderate',
          quote: 'From 2017 to 2019, students lost as much ground in reading as they did during the pandemic',
          sources: [source('Harvard CEPR 2026', 'https://cepr.harvard.edu/news/2026/05/why-us-test-scores-are-generation-long-decline')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Regional citizen assemblies that can decide school reopening',
      method: 'Citizens Assembly (Sortition, Rotation, Confederal)',
      anchor: 'Return to School Roadmap',
      where: 'State level; Michigan is the natural jurisdiction',
      when: paragraph(`
        May to June 2020, with the remit fixed on the fall 2020 instructional
        mode decision. Michigan already created an appointed advisory council in
        May 2020; the counterfactual is the same body selected by sortition and
        given a quasi-binding remit. An assembly seated after August 2020 misses
        the decision it exists to make; the actual Michigan sortition panel of
        November 2020 demonstrates that failure mode.
      `),
      description: paragraph(`
        From the 6/8 design session: citizen assemblies convened regionally with
        real decision power over reopening, in place of advisory bodies whose
        recommendations could be shelved. The session named three routes to
        representativeness: sortition, confederal distribution, and short-term
        rotation, in which membership turns over on a fixed schedule so no
        cohort hardens into an incumbent class.
      `),
      banner: true,
      impactsMeasured: ['Public school enrollment', 'Chronic absenteeism', 'Confidence in public schools'],
      impactsConjectured: ['Depolarization of the decision', 'Cross-regional learning'],
      links: [
        propLink({
          name: 'An assembly can be convened fast enough',
          claim: paragraph(`
            A sortition assembly can be convened and reach recommendations fast
            enough to decide how school would run in fall 2020.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The Ada Lovelace Institute ran rapid online deliberation with 28
                members of the public on COVID-19 exit strategies <strong>during
                May 2020, while the UK was in lockdown</strong>.
              `),
              grade: 'moderate',
              quote: 'conducted rapid, online deliberation with 28 members of the public on COVID-19 exit strategies',
              sources: [source('Ada Lovelace Institute 2020', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Reference-class timing runs long: the Irish assembly deliberated
                <strong>five sessions over six months</strong>; the French climate convention ran
                nine months; the OECD stocktake of nearly 300 processes describes
                convenings of at least one full day and often much longer.
              `),
              grade: 'moderate',
              sources: [source('OECD 2020', 'https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en/full-report/component-8.html')]
            })
          ]
        }),
        propLink({
          name: 'A binding remit could give non-union voices force',
          claim: paragraph(`
            A binding or quasi-binding remit could give parents and community
            members force comparable to collective bargaining, so the
            assembly's decision, not the bargained one, sets how school runs.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                A 48-village randomized experiment in Indonesia compared binding
                plebiscites against representative meetings for choosing local
                projects: the binding format <strong>raised satisfaction, perceived
                legitimacy, and willingness to contribute</strong>, even though the
                chosen projects barely changed.
              `),
              grade: 'moderate',
              quote: 'Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute',
              sources: [source('Olken (NBER w14123)', 'https://www.nber.org/papers/w14123')]
            }),
            evidence({
              finding: paragraph(`
                Brazilian municipalities that gave citizens binding budget
                authority shifted spending toward health and sanitation and <strong>cut
                infant mortality by 1 to 2 per 1,000</strong>, the strongest measured
                case of citizen participation with force behind it.
              `),
              grade: 'moderate',
              quote: 'municipalities that adopted participatory budgeting registered a significant drop in infant mortality of between 1 and 2 infants for every 1,000 resident infants',
              sources: [source('Gonçalves 2014', 'https://base.socioeco.org/docs/effects_of_participatory_budgeting.pdf')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The nearest binding-adjacent pledge eroded under pressure: France's
                president promised to implement 146 of 149 convention proposals;
                the parliamentary bill <strong>incorporated an estimated
                40%</strong>, and members
                rated government follow-through 3.3 out of 10.
              `),
              grade: 'moderate',
              sources: [source('KNOCA briefing', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
            })
          ]
        }),
        propLink({
          name: 'Assemblies raise perceived legitimacy',
          claim: paragraph(`
            An assembly process raises perceived legitimacy of the decision among
            the wider public.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Germann, Marien, and Muradova (Political Studies 2024; survey
                experiment, N=1,309) find fairness perceptions <strong>rose 0.7
                points, 27% of a standard deviation</strong>, though the gains are
                “largely limited to situations in which their recommendations are
                honored”. Collins (APSR 2021) finds exposure to deliberative
                school board meetings raised trust in local officials.
              `),
              grade: 'moderate',
              quote: 'Mini-publics increase legitimacy perceptions among the broader citizenry; however, these beneficial effects are largely limited to situations in which their recommendations are honored.',
              sources: [
                source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444'),
                source('Collins 2021', 'https://home.watson.brown.edu/news/2021-08-06/does-meeting-style-matter-effects-exposure-participatory-and-deliberative-school')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In the same experiment the acceptance effect <strong>became insignificant
                when recommendations were rejected</strong>, and referendums outperformed
                mini-publics on both fairness and acceptance.
              `),
              grade: 'moderate',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ]
        }),
        propLink({
          name: 'Legitimacy could hold enrollment, attendance, and confidence',
          claim: paragraph(`
            The assembly's decision could move through two channels: its
            choices about how school runs directly change remote exposure and
            its measured harms, and higher perceived legitimacy could reduce
            exit and absence and hold confidence in schools. The legitimacy
            channel is the unstudied one.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Adjacent domains support the mechanism: in a national US
                survey, perceived legitimacy of legal institutions <strong>predicted
                compliance and willing cooperation</strong>, and in taxation, fair
                process raised acceptance of personally disadvantageous
                systemic changes.
              `),
              grade: 'weak',
              quote: 'legitimacy - typically operationalized as the perceived obligation to obey and trust and confidence in the relevant institutions - plays an important role in achieving such compliance',
              sources: [
                source('Tyler and Jackson 2013 (SSRN)', 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2292517'),
                source('Verboon and Goslinga 2018', 'https://link.springer.com/article/10.1007/s12144-017-9762-x')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Parents were typically supportive of school handling at the time;
                if contemporaneous perceived legitimacy did not collapse, a
                legitimacy-repairing intervention has a smaller target than the
                proposal assumes. The nearest analog, legitimacy and law
                compliance in policing meta-analysis, is weak and out of domain.
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
            favor on 64% turnout, tracking the assembly's vote, and the government
            adopted the assembly's suggested constitutional wording over the
            parliamentary committee's. Coding of 3,981 speech acts found assembly
            members showed a deeper cognitively complex grasp of the subject than
            parliamentarians, and experts spoke with higher complexity to citizens than
            to the committee. A policy-adoption outcome with no counterfactual for the
            assembly's contribution.
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
            convention’s 149 recommendations; in the end 20% were implemented,
            51% in modified form, and roughly 29% were dropped, and members rated
            government follow-through 3.3 out of 10. The government was
            selective, favoring incentive-based over regulatory recommendations
            and responding more to detailed ones. It is the measured case of a
            binding promise decaying under pressure.
          `),
          strength: 'strong',
          sources: [source('KNOCA briefing', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
        }),
        comparable({
          name: 'Michigan Sortition Panel',
          where: 'Michigan', when: '11/2020',
          authority: 'Advisory research exercise',
          outcome: paragraph(`
            Researchers convened a randomly selected panel of Michigan residents on
            pandemic policy, proving sortition feasible mid-pandemic; the panel's 12
            recommendations had no documented effect, and it convened after the fall
            decision window.
          `),
          strength: 'weak',
          sources: [source('CMU News', 'https://www.cmu.edu/news/stories/archives/2021/august/citizens-assembly-algorithm.html')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Bring experts and the public together on safer reopening',
      method: 'Minipublic with Mapped Expertise',
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
        From the 6/8 session: bring the public into engagement with mapped
        expertise (ventilation and building design, epidemiology, behavioral
        science, early childhood education) so the option set is wider than
        open against closed.
      `),
      banner: true,
      impactsMeasured: ['Test scores', 'Public school enrollment', 'Chronic absenteeism'],
      impactsConjectured: ['Trust in experts maintained', 'Local knowledge entering the option set'],
      links: [
        propLink({
          name: 'Experts with the public could widen the options',
          claim: paragraph(`
            Structured early engagement between mapped experts and the public
            could expand the options beyond open against closed.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The one measured experts-with-public result: in the Irish
                assembly, coding of 3,981 speech acts found experts communicated
                with <strong>higher cognitive complexity</strong> to a citizen
                assembly than to a parliamentary committee, and that assembly
                members “demonstrate a deeper cognitively complex grasp of the
                subject matter” — a measured interaction between forum design and
                expert behavior. A process measure, analogical to
                reopening decisions.
              `),
              grade: 'weak',
              quote: 'Members of the Citizens\' Assembly demonstrate a deeper cognitively complex grasp of the subject matter',
              sources: [source('Suiter et al. 2022', 'https://journals.sagepub.com/doi/full/10.1177/14789299211020909')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                District leaders imported generic public health authority rather
                than mapping decision-specific expertise; no study tests whether
                an expertise-mapped minipublic produces different reopening
                options than surveys. Texas deliberative polls with utilities are
                the analogical support, in a different domain.
              `),
              grade: 'weak',
              sources: [source('National Civic League', 'https://www.nationalcivicleague.org/ncr-article/deliberative-polling-and-the-rise-of-wind-power-in-texas/')]
            })
          ]
        }),
        propLink({
          name: 'Ventilation and outdoor options make school safer',
          claim: paragraph(`
            Ventilation and outdoor options make in-person school materially
            safer.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Marche region, Italy: in a retrospective cohort of 205,347
                students across more than 10,000 classrooms, with mechanical
                ventilation “the relative risk of infection of students decreased
                at least by 74% compared with a classroom with only natural
                ventilation”.
              `),
              grade: 'strong',
              quote: 'the relative risk of infection of students decreased at least by 74% compared with a classroom with only natural ventilation',
              sources: [source('Frontiers in Public Health 2022', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.1087087/full')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Israel reopened in May 2020, lifted class-size limits two weeks
                later, and <strong>closed schools by June 3 after 2,026 students and
                staff tested positive</strong>. Mitigation quality, not the fact of reopening, carried
                the risk. Sweden's open schools doubled teacher infection risk.
              `),
              grade: 'moderate',
              sources: [source('Time 2020', 'https://time.com/5868098/schools-reopening-coronavirus-denmark-south-korea-israel/')]
            })
          ]
        }),
        propLink({
          name: 'Safer options could change the decision',
          claim: paragraph(`
            Safer options, credibly communicated, could move the decision
            toward earlier in-person instruction.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                A randomized experiment with 2,150 Brazilian municipalities
                found mayors update on research findings and that informing
                them about an effective policy <strong>raised adoption by 10
                percentage points</strong>; in this case, test-to-stay evidence (a 1.5
                percent secondary attack rate, up to 8,152 in-person days
                saved in one district) preceded CDC's December 2021
                endorsement of the less restrictive option.
              `),
              grade: 'moderate',
              quote: 'up to 8,152 in-person learning days were saved among TTS participants',
              sources: [
                source('Hjort et al. (NBER w25941)', 'https://www.nber.org/papers/w25941'),
                source('CDC MMWR 2021', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm705152e2.htm')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Across more than 10,000 districts, reopening decisions did not
                track risk information. A 40-to-60% Trump-vote shift <strong>moved remote
                probability 17 percentage points</strong> while the local case rate had a
                trivial effect.
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
            More in-person instruction reduces learning loss, disenrollment, and
            later absence.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Sweden's open primary schools: <strong>97,073 students in grades
                1-3 with no learning loss</strong>, and even “students from low
                socio-economic backgrounds were not especially affected”; US
                studies tie remote mode to larger achievement declines and 1.1
                points of extra disenrollment.
              `),
              grade: 'strong',
              quote: 'students from low socio-economic backgrounds were not especially affected',
              sources: [
                source('Hallin et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/35677729/'),
                source('NBER w29156', 'https://www.nber.org/papers/w29156')
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
            The Ada Lovelace Institute convened 28 members online during lockdown; with
            expert input they produced four steers on COVID-19 technologies within one
            month. No measured policy outcome.
          `),
          strength: 'weak',
          sources: [source('Ada Lovelace Institute', 'https://www.adalovelaceinstitute.org/project/rapid-online-deliberation-on-covid-19-technologies/')]
        }),
        comparable({
          name: 'Texas Utility Deliberative Polls',
          where: 'Texas', when: '1996-1998',
          authority: 'Advisory to eight utilities',
          outcome: paragraph(`
            Deliberative polls run for eight Texas utilities brought customers
            and experts together and surfaced willingness to pay for renewables;
            the 1999 law required about 3% renewable supply and Texas became the
            largest US wind generator. Attribution is not causally identified.
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
          sources: [source('Frontiers in Public Health 2022', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.1087087/full')]
        }),
        comparable({
          name: 'UK Genetically Modified Crops Public Debate',
          where: 'United Kingdom', when: '2003',
          authority: 'Government commissioned, advisory, no connection to the policy decision',
          outcome: paragraph(`
            The UK government sponsored a national public debate on genetically
            modified crops: six regional events cascaded into hundreds of open meetings
            and roughly 37,000 feedback forms, plus ten recruited narrow-but-deep
            groups. The final finding was that people are generally uneasy about genetically modified crops,
            with little support for early commercialization. The process lacked clear
            connection to actual government policy decisions, which fostered cynicism
            about the exercise's genuine purpose; the recruited groups reached
            measurably different positions from the self-selected meetings.
          `),
          strength: 'moderate',
          sources: [source('Open University', 'https://www.open.edu/openlearn/science-maths-technology/achieving-public-dialogue/content-section-4')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let each district make its own reopening decision',
      method: 'Confederal Decision-Making',
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
        From the 6/8 session: decentralize decision-making as well as
        implementation, bringing people into a room to resolve differences and
        letting regions compare outcomes.
      `),
      banner: true,
      impactsMeasured: ['Test scores', 'Public school enrollment'],
      impactsConjectured: ['Outcome comparisons across regions', 'Less appeal-to-the-top politics'],
      links: [
        propLink({
          name: 'Decentralizing produces regional variation',
          claim: paragraph(`
            Decentralizing the decision produces regional variation in modality.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Directly observed: fall 2020 produced <strong>24% fully online, 51%
                hybrid, 17% in-person</strong>. This link happened in the actual world; the
                proposal cannot claim it as its own contribution.
              `),
              grade: 'strong',
              sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8938683')]
            })
          ]
        }),
        propLink({
          name: 'Local decisions could track local conditions',
          claim: paragraph(`
            Decentralized decisions with a structured deliberative step could
            track local COVID conditions rather than politics.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Each half of the link has adjacent support: after Bolivia's
                1994 decentralization, municipal investment <strong>shifted toward
                objective indicators of local need</strong>, and in the America in One
                Room field experiment, structured deliberation produced large
                depolarizing changes in policy attitudes. No study combines
                the two in a crisis decision.
              `),
              grade: 'weak',
              quote: 'These changes are strongly and positively related to objective indicators of need',
              sources: [
                source('Faguet 2004', 'https://socialserviceworkforce.org/wp-content/uploads/2024/03/Does-Decentralization-Increase-Gov-Responsiveness.pdf'),
                source('Fishkin et al. 2021, APSR', 'https://www.cambridge.org/core/journals/american-political-science-review/article/is-deliberation-an-antidote-to-extreme-partisan-polarization-reflections-on-america-in-one-room/5DEFB6F8D944ECDE77A5E80C3346D4DE')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                This is the link that failed in the observed decentralization.
                Across 10,000+ districts, decisions <strong>tracked partisanship and union
                strength, not severity</strong>; whether adding a deliberative resolution
                step changes this is unstudied.
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
          name: 'Variation could generate learning in time to use it',
          claim: paragraph(`
            Regional variation could generate outcome comparisons that inform
            later decisions inside the decision window.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                The variation did generate knowledge: the mode-effect studies all
                exploit cross-district variation. The learning <strong>arrived in
                2021-2023 publications</strong>, years after the decisions it could have
                informed.
              `),
              grade: 'moderate',
              sources: [source('NBER w29156', 'https://www.nber.org/papers/w29156')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                No case was identified of a US district or state changing a
                2020-21 modality decision in response to comparative outcome data
                from other regions during the decision window.
              `),
              grade: 'moderate',
              sources: [source('CDC EID', 'https://wwwnc.cdc.gov/eid/article/30/1/23-1215_article')]
            })
          ]
        }),
        propLink({
          name: 'Condition-tracking could cut remote exposure',
          claim: paragraph(`
            Where conditions allowed, staying open was compatible with limited
            transmission, so decisions that tracked conditions could have cut
            remote exposure and its measured harms.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Sweden kept schools through grade 9 open with limited consequences
                for overall transmission and no learning loss in grades 1-3;
                <strong>Denmark reopened in April 2020 with no case
                increase</strong>.
              `),
              grade: 'moderate',
              quote: 'keeping the former open had limited consequences for the overall transmission of the virus',
              sources: [source('Vlachos et al.', 'https://www.sciencedaily.com/releases/2021/02/210212101842.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Open schools <strong>doubled teacher infection risk</strong> (7th
                most affected of
                124 occupations) and raised partner risk 30%. Any chain arguing
                conditions permitted earlier opening has to state whose risk rose.
              `),
              grade: 'moderate',
              sources: [source('Vlachos et al.', 'https://www.sciencedaily.com/releases/2021/02/210212101842.htm')]
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
            districts. This is not an outside analog; it happened in this case,
            and it is the proposal’s nearest real-world trial and its strongest
            counter-evidence: district decisions tracked partisanship and union
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
            the start of containment measures. A phase mismatch with reopening; the
            nearest measured neighbor points the other way for the emergency phase.
          `),
          strength: 'moderate',
          sources: [source('Publius 2023', 'https://academic.oup.com/publius/article/54/1/34/7191229')]
        }),
        comparable({
          name: 'Sweden and Denmark Open-School Policies',
          where: 'Sweden, Denmark', when: '2020',
          authority: 'National uniform decisions',
          outcome: paragraph(`
            Sweden: no learning loss in grades 1-3, doubled teacher risk, limited
            overall transmission. Denmark: first European reopening with no case
            increase. National decisions, so they test open schools, not
            confederalism.
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
            Sweden financed municipal expertise through the Nuclear Waste Fund,
            so Osthammar's review staff were paid by the fund, enabling
            independent assessment rather than industry reliance, and the
            operator reported strong local support for a future repository.
            Finland's Eurajoki representatives called the existing process
            satisfactory, and Finland built the world's first operating deep
            repository. The source flags that community acceptance may reflect
            existing nuclear infrastructure rather than rigorous safety
            evaluation.
          `),
          strength: 'moderate',
          sources: [source('Bellona 2016', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Share local case and school data from the first weeks',
      method: 'Open Data & Public Communication',
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
        From the 6/8 session: make hospitalization and death rates public from
        the first weeks, laddered from local to national, with experts stating
        what is and is not known.
      `),
      banner: true,
      impactsMeasured: ['Confidence in public schools', 'Public school enrollment'],
      impactsConjectured: ['Heading off polarization', 'Treating citizens as capable of reasoning'],
      links: [
        propLink({
          name: 'Early local data publication is feasible',
          claim: paragraph(`
            Early local data publication is feasible and fills a real gap.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                A small grant-funded team assembled school-level mode data for
                <strong>over 55,000 schools in 30 states</strong>, demonstrating
                feasibility, 18 months late; until then, as the project put it,
                “We have federal data on school operations for only the largest
                districts in the country”.
              `),
              grade: 'moderate',
              quote: 'We have federal data on school operations for only the largest districts in the country',
              sources: [source('Brown University 2021', 'https://www.brown.edu/news/2021-09-15/hub')]
            })
          ]
        }),
        propLink({
          name: 'Honest uncertainty does not cost trust',
          claim: paragraph(`
            Communicating data, including uncertainty, does not erode trust in
            the data or its source.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                van der Bles et al. (PNAS 2020) ran five experiments with 5,780
                participants, including a BBC News field experiment on
                numeric-range uncertainty, and found “little to no negative
                effect on levels of trust in the data itself, those who provided
                it (e.g. civil servants) or those reporting it (e.g.
                journalists)”.
              `),
              grade: 'moderate',
              quote: 'little to no negative effect on levels of trust in the data itself, those who provided it (e.g. civil servants) or those reporting it (e.g. journalists)',
              sources: [source('van der Bles et al. 2020', 'https://pubmed.ncbi.nlm.nih.gov/32205438/')]
            })
          ]
        }),
        propLink({
          name: 'Shared data could head off polarization',
          claim: paragraph(`
            A shared local data layer could align risk perception across groups
            and head off polarization.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                Information moved preferences at the margin: Biden voters' support
                for in-person schooling ran 43% under alarming case framing
                against 60% under pediatric-endorsement framing, <strong>a 17-point
                swing</strong>.
              `),
              grade: 'moderate',
              quote: 'a 17-point swing',
              sources: [source('Brookings 2021', 'https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Misperception persisted despite ubiquitous public data: <strong>only 18% of US adults correctly estimated
                hospitalization rates</strong>, and
                partisan risk perception diverged through a period of maximal data
                availability.
              `),
              grade: 'strong',
              sources: [source('Brookings 2021', 'https://www.brookings.edu/articles/how-misinformation-is-distorting-covid-policies-and-behaviors/')]
            })
          ]
        }),
        propLink({
          name: 'Shared understanding could hold confidence and enrollment',
          claim: paragraph(`
            Sustained shared understanding could hold confidence in the
            deciding institutions, reducing exit.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The transparency-to-trust literature supports only a
                conditional version: a systematic review of 187 studies finds
                <strong>mixed, context-dependent effects of transparency on
                trust</strong>, and
                an experiment found transparency raised perceived
                trustworthiness only for some citizen subgroups.
              `),
              grade: 'weak',
              sources: [
                source('Cucciniello et al. 2017, PAR', 'https://onlinelibrary.wiley.com/doi/abs/10.1111/puar.12685'),
                source('Grimmelikhuijsen and Meijer 2014, JPART', 'https://academic.oup.com/jpart/article-abstract/24/1/137/916830')
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
            55,000+ schools in 30 states, substituting for a missing federal
            function; the data enabled the mode-treatment research. No study
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
            1 million inquiries on day one. Trust and anxiety effects are claimed, not
            measured.
          `),
          strength: 'weak',
          sources: [source('Sidewalk Labs 2020', 'https://medium.com/sidewalk-talk/how-open-data-and-civic-participation-helped-taiwan-slow-covid-b1449bab5841')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Give parents a real say before closure decisions',
      method: 'Stakeholder Participation, Standing Binding Channel',
      anchor: 'safety strikes',
      where: 'Large urban districts with the sharpest bargaining asymmetry; Chicago already had the statutory infrastructure',
      when: paragraph(`
        The honest answer is before the pandemic: a standing body cannot be
        stood up mid-crisis and still be standing. Within the case window, June
        to August 2020 in Detroit, San Francisco, Chicago, and New York,
        touching the fall 2020 decision and the spring 2021 reopening
        negotiations. Chicago's Local School Councils are the sharpest
        counterfactual: the mechanism existed in statute and no evaluation of
        its pandemic role has been identified.
      `),
      description: paragraph(`
        The design implication the 6/8 session drew from this case: a standing
        community process with binding elements, in place before decisions
        arrive, so participation does not relocate to lawsuits and recalls after
        them. The session specified the seats: small business owners, educators,
        public health experts, and community leaders sit alongside parents, so
        the body that binds is not a single-constituency channel. Small business
        is the constituency the 2020 record left without any channel at all.
      `),
      banner: true,
      impactsMeasured: ['Confidence in public schools', 'Public school enrollment', 'Chronic absenteeism'],
      impactsConjectured: ['Less adversarial post-hoc participation', 'Rebalancing against single-stakeholder capture'],
      links: [
        propLink({
          name: 'A standing parent body can govern competently',
          claim: paragraph(`
            A standing parent-community body with binding elements can govern
            schools competently at scale.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Chicago Local School Councils: elected parent-majority councils at
                500+ schools hire principals on performance contracts, set
                improvement priorities, and determine budgets; research found <strong>most
                are viable governance organizations</strong>, with 10-15% showing serious
                shortcomings.
              `),
              grade: 'moderate',
              quote: 'Most LSCs are viable governance organizations that responsibly complete their mandated duties',
              sources: [source('ERIC ED476943', 'https://eric.ed.gov/?id=ED476943')]
            })
          ]
        }),
        propLink({
          name: 'Binding voice raises trust and engagement',
          claim: paragraph(`
            Upstream binding voice raises trust and downstream civic engagement.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                NYC participatory budgeting <strong>raised subsequent voting probability
                8.4 points</strong>, most for underrepresented groups; Brazilian
                participatory budgeting shifted spending to sanitation and health
                with a reduction in infant mortality, across two independent
                research teams.
              `),
              grade: 'moderate',
              quote: 'engaging with participatory budgeting increased individuals\' probability of voting by an average of 8.4 percentage points',
              sources: [
                source('Johnson, Carlson, and Reynolds 2023', 'https://link.springer.com/article/10.1007/s11109-021-09679-w'),
                source('Touchton and Wampler', 'https://scholarworks.boisestate.edu/polsci_facpubs/146/')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                A preregistered experiment on civilian police review boards
                (N=2,503) found no significant evidence that a standing oversight
                body without binding authority raises perceived legitimacy, and
                <strong>perceived legitimacy fell when the citizen body visibly
                disagreed</strong> with the institution.
              `),
              grade: 'strong',
              quote: 'no statistically significant evidence that the presence of a CRB increases aggregate perceptions of procedural legitimacy',
              sources: [source('PNAS Nexus 2025', 'https://academic.oup.com/pnasnexus/article/4/9/pgaf267/8238990')]
            })
          ]
        }),
        propLink({
          name: 'Maintained trust could reduce exit and absence',
          claim: paragraph(`
            Maintained trust could reduce exit and absence.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The clearest causal case runs in reverse: the 1972 Tuskegee
                disclosure raised medical mistrust among older Black men and
                cut physician visits, with <strong>life expectancy at 45 falling by up
                to 1.5 years</strong>. In schools, the Chicago trust studies found
                low-trust schools saw virtually no improvement, and pandemic
                exit tracked the district's instructional decision.
              `),
              grade: 'weak',
              quote: 'life expectancy at age 45 for black men fell by up to 1.5 years in response to the disclosure',
              sources: [
                source('Alsan and Wanamaker (NBER w22323)', 'https://www.nber.org/papers/w22323'),
                source('Musaddiq et al. (NBER w29262)', 'https://www.nber.org/papers/w29262')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Absence is <strong>elevated even for cohorts born after
                closures</strong>, which
                suggests a diffuse norm shift a district-level trust channel may
                not reach.
              `),
              grade: 'moderate',
              sources: [source('AEI tracker', 'https://www.aei.org/research-products/report/from-attendance-crisis-to-chronic-condition-tracking-post-pandemic-chronic-absenteeism-into-2025/')]
            })
          ]
        }),
        propLink({
          name: 'Upstream voice could reduce lawsuits and recalls',
          claim: paragraph(`
            Binding upstream voice could reduce adversarial participation
            after decisions: recalls, litigation, and board conflict. This is
            the branch to the conjectured impact.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                After the University of Michigan health system began proactive
                disclosure with offers of resolution, new claims and lawsuits
                per month fell and <strong>legal defense spending dropped 61
                percent</strong>, a
                measured case of upstream engagement displacing litigation, in
                medicine rather than school governance.
              `),
              grade: 'moderate',
              quote: 'a 61 percent decrease in spending at the UMHS on legal defense costs',
              sources: [source('Kachalia et al. 2010', 'https://www.sciencedaily.com/releases/2010/08/100816204210.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The adversarial surge is documented (84 recall efforts, the
                litigation wave, <strong>the participation shift from 6% to
                49%</strong>), but no
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
            500+ Chicago schools, and most proved viable — the closest US analog
            to a standing binding parent channel. Their pandemic-era role is
            unevaluated.
          `),
          strength: 'moderate',
          sources: [source('ERIC ED476943', 'https://eric.ed.gov/?id=ED476943')]
        }),
        comparable({
          name: 'Brazilian Municipal Participatory Budgeting',
          where: 'Brazil', when: '1990-2004',
          authority: 'Binding in practice, annual, city scale',
          outcome: paragraph(`
            Municipalities that adopted participatory budgeting shifted spending toward
            sanitation and health, with measured infant mortality declines replicated
            by two independent teams. The strongest measured welfare outcome for any
            standing binding channel; furthest domain from schools.
          `),
          strength: 'strong',
          sources: [
            source('Gonçalves 2014', 'https://ideas.repec.org/a/eee/wdevel/v53y2014icp94-110.html'),
            source('Touchton and Wampler', 'https://scholarworks.boisestate.edu/polsci_facpubs/146/')
          ]
        }),
        comparable({
          name: 'Civilian Police Review Boards',
          where: 'United States', when: '1970s-present',
          authority: 'Standing, mostly without disciplinary authority',
          outcome: paragraph(`
            The field's most important negative comparable: standing citizen
            boards that mostly lack disciplinary authority showed an
            experimental null on legitimacy and a measured backfire when the
            citizen body disagreed with the institution. Whether it applies
            turns on the binding-elements clause.
          `),
          strength: 'strong',
          sources: [source('PNAS Nexus 2025', 'https://academic.oup.com/pnasnexus/article/4/9/pgaf267/8238990')]
        }),
        comparable({
          name: 'Oregon Citizens Initiative Review',
          where: 'Oregon', when: '2010-present',
          authority: 'Statutory standing minipublic; statement placement binding, content advisory to voters',
          outcome: paragraph(`
            20 to 24 stratified randomly selected citizens deliberate five days
            on a ballot measure, and their Citizens' Statement is printed in the
            official Voters' Pamphlet, reaching over 80 percent of voters. A
            two-wave 2010 panel (N=971) and a 2012 cross-section (N=1,539) found
            reading the statements increased issue-specific knowledge for some
            voters, and awareness of the review caused a significant increase in
            external efficacy while leaving internal efficacy unchanged.
          `),
          strength: 'strong',
          sources: [source('Knobloch, Barthel, and Gastil 2020', 'https://journals.sagepub.com/doi/full/10.1177/0032321719852254')]
        }),
        comparable({
          name: 'Ostbelgien Permanent Citizens Council',
          where: 'Belgium', when: '2019-present',
          authority: 'Created by decree; agenda-setting power and mandatory institutional follow-up',
          outcome: paragraph(`
            A decree created a permanent Citizens' Council plus rotating
            Citizens' Assemblies, and six assemblies ran in the first five
            years. The five-year review states early recommendations were being
            proposed already to a certain degree or were deemed too vague to
            convert into legislation, and that institutionalized forms of
            citizen deliberation remain in their infancy. Durable
            institutionalization is demonstrated; no trust or policy outcome has
            been measured.
          `),
          strength: 'weak',
          sources: [source('Deliberative Democracy Digest', 'https://www.publicdeliberation.net/the-ostbelgien-model-five-years-on/')]
        })
      ],
      sources: []
    })
  ]
});
