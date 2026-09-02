import {
  spineData, mechanism, impact, spineProposal, propLink, comparable,
  evidence, paragraph, source
} from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * COVID-19 Vaccine Mandates: spine-layer data.
 * Research pass: research/vaccines-proposal-chains.md (August 2026).
 * -------------------------------------------------------------------------- */

export default spineData({
  slug: 'covid-vaccines',

  mechanisms: [
    mechanism({
      name: 'ACIP public comment',
      actor: 'CDC advisory committee, public commenters',
      failure: 'acted-no-effect',
      note: 'Three-minute comments to a committee whose own votes could be overruled',
      detail: paragraph(`
        ACIP meetings are open by webcast with written comments and three-minute
        oral slots. The ceiling on effect is visible one level up: in September
        2021 ACIP voted down boosters for occupational-risk adults and the CDC
        director overruled the committee within hours. Where the committee's own vote could be overruled, the public comment behind it had no path to effect.
      `),
      anchors: ['ACIP voted 11 to 0'],
      sources: [source('STAT', 'https://www.statnews.com/2021/10/07/cdc-director-defends-decision-to-overrule-expert-panel-on-covid-booster-shots-for-health-workers/')]
    }),
    mechanism({
      name: 'FDA advisory committee review',
      actor: 'VRBPAC',
      failure: 'partial',
      note: 'The one advisory committee whose votes visibly narrowed a federal decision',
      detail: paragraph(`
        VRBPAC voted 16 to 2 against boosters for everyone 16 and older, then 18
        to 0 for ages 65 and up and high risk; FDA's authorization tracked the
        narrowed recommendation before the occupational category widened again
        at the CDC step. Of the case's advisory mechanisms, the one that most
        visibly constrained a federal decision.
      `),
      anchors: ['full approval to Pfizer'],
      sources: [source('Healio', 'https://www.healio.com/news/infectious-disease/20210917/fda-committee-votes-against-blanket-recommendation-for-covid19-vaccine-boosters')]
    }),
    mechanism({
      name: 'Notice-and-comment rulemaking',
      actor: 'OSHA, 122,485 commenters',
      failure: 'acted-no-effect',
      note: '122,485 comments arrived after the rule had already taken effect',
      detail: paragraph(`
        The emergency temporary standard took effect on publication while
        simultaneously serving as the proposal for a final standard, with
        comments due a month later. 122,485 comments arrived against a rule
        already in force, and the Supreme Court stayed the rule before any final
        standard could reflect them. The emergency instrument sequenced
        participation after the decision.
      `),
      anchors: ['122,485 comments'],
      sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')]
    }),
    mechanism({
      name: 'Congressional review',
      actor: 'US Senate',
      failure: 'partial',
      note: 'The Senate vote did not repeal the rule, but the Supreme Court took note of it',
      detail: paragraph(`
        The Senate voted 52 to 48 to disapprove the OSHA rule in December 2021.
        The vote did not repeal the rule, but it entered the record the Court's
        majority drew on: one chamber had affirmatively rejected the agency
        rule.
      `),
      anchors: ['disapprove the OSHA regulation'],
      sources: [source('US Supreme Court', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Courts',
      actor: 'Federal courts, Supreme Court',
      failure: 'worked',
      note: 'Judges, not public input, settled who had the authority to mandate',
      detail: paragraph(`
        Courts resolved the contest the deliberative channels never hosted: the
        large-employer rule was stayed, the healthcare-worker mandate allowed,
        Maine's no-exemption mandate left standing. Resolution ran judicial, not
        deliberative.
      `),
      anchors: ['clearer congressional authorization'],
      sources: [source('US Supreme Court', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Union collective bargaining',
      actor: 'Police and municipal unions',
      failure: 'partial',
      note: 'Only unionized workers could force negotiation; they won process, not reversal',
      detail: paragraph(`
        Police and municipal unions litigated mandate terms that had not been
        collectively bargained and secured process, such as exemption timelines,
        rather than reversal. Bargaining forced negotiation only for unionized workforces; the 84 million workers under the federal rule had no
        equivalent channel.
      `),
      anchors: ['largest police union filed suit'],
      sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')]
    }),
    mechanism({
      name: 'City councils',
      actor: 'Municipal legislatures',
      failure: 'no-mechanism',
      note: 'Mayors and health officials issued the mandates; no city council voted',
      detail: paragraph(`
        No city council deliberation appears anywhere in the case record;
        municipal workforce mandates ran through mayoral and health-authority
        orders contested by unions and courts. This coding rests on absence from
        the case record, not legal research into charter authority, and is
        flagged for review.
      `),
      anchors: ['largest police union filed suit'],
      sources: []
    }),
    mechanism({
      name: 'Tribal consultation and self-governance',
      actor: 'Tribal governments, Indian Health Service',
      failure: 'worked',
      note: 'Tribes with real decision power reached the highest vaccination rate of any group',
      detail: paragraph(`
        The November 2020 choice between state allocation and the IHS route let
        tribal governments set their own prioritization, and by July 2021
        American Indian and Alaska Native people had the highest vaccination
        rate of any group. The case's clearest instance of participation with
        formal authority producing a measured favorable endpoint.
      `),
      anchors: ['Indian Health Service route'],
      sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
    }),
    mechanism({
      name: 'Federal data transparency',
      actor: 'CDC',
      failure: 'knew-no-act',
      note: 'Collected booster and hospitalization data and withheld it for a year',
      detail: paragraph(`
        CDC collected booster effectiveness data for adults 18 to 49,
        hospitalization breakdowns by vaccination status, and wastewater
        surveillance, and did not publish them for over a year, citing concern
        the public could misinterpret the findings. The agency judged
        transparency risky; no study measures the trust cost of the
        withholding.
      `),
      anchors: ['changing recommendations had confused'],
      sources: [source('New York Times', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects')]
    })
  ],

  impacts: [
    impact({
      name: 'Deaths and hospitalizations averted by vaccination',
      found: '12/2022',
      headline: paragraph(`
        Vaccination prevented more than 3 million deaths and 18 million
        hospitalizations in the US in the program's first two years.
      `),
      measures: paragraph(`
        The vaccination program prevented more than 18 million additional
        hospitalizations and over 3 million additional deaths in the US in its
        first two years.
      `),
      from: [
        { anchor: 'ACIP voted 11 to 0', strength: 'strong', note: 'The program the authorization launched' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Commonwealth Fund modeling covers the program's first two years and estimates <strong>3.2 million deaths and 18.5 million hospitalizations averted</strong>.
          `),
          grade: 'strong',
          sources: [source('Commonwealth Fund', 'https://www.commonwealthfund.org/blog/2022/two-years-covid-vaccines-prevented-millions-deaths-hospitalizations')]
        })
      ]
    }),
    impact({
      name: 'Deaths among unvaccinated adults',
      found: '04/2022',
      headline: paragraph(`
        Roughly 232,000 adult deaths between June 2021 and March 2022 would have
        been prevented by vaccination, per two independent estimates.
      `),
      measures: paragraph(`
        Roughly 232,000 to 234,000 adult deaths between June 2021 and March 2022
        would have been prevented by vaccination, per two independent estimates.
      `),
      from: [
        { anchor: 'Eligibility expands to all US adults', strength: 'moderate', note: 'A marker, not a cause: once supply stopped binding, the remaining gap was behavioral' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Peterson-KFF estimated <strong>approximately 234,000 preventable
            adult deaths</strong>; the European Journal of Epidemiology replication found at
            least 232,000 (95% CI 214,000 to 250,000).
          `),
          grade: 'strong',
          sources: [
            source('Peterson-KFF Health System Tracker', 'https://www.healthsystemtracker.org/brief/covid19-and-other-leading-causes-of-death-in-the-us/'),
            source('Jia et al. 2023', 'https://link.springer.com/article/10.1007/s10654-023-01006-3')
          ]
        })
      ]
    }),
    impact({
      name: 'The racial vaccination gap',
      found: '06/2022',
      headline: paragraph(`
        The Black-White vaccination gap closed from about 14 points at the April
        2021 peak to 5 points by mid-2022; no one has estimated the mortality
        cost of the spring 2021 lag by race.
      `),
      measures: paragraph(`
        The Black-White vaccination gap fell from about 14 points at the April
        2021 peak to 5 points by July 2022; by end of November 2021,
        at-least-one-dose coverage was similar across groups. The mortality cost
        of the spring 2021 lag has never been estimated by race.
      `),
      from: [
        { anchor: '20,792 doses', strength: 'weak', note: 'A local exemplar; one neighborhood site cannot carry a national narrowing' },
        { anchor: 'vaccine equity push', strength: 'weak', note: 'No published outcome evaluation of the line items' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            CDC MMWR reported <strong>the gap narrowing substantially by late 2021</strong>; the
            largest measured uptake effects in the record run through access
            interventions, not persuasion.
          `),
          grade: 'moderate',
          sources: [source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            The Annenberg panel tested five explanations for the Black-White narrowing and found <strong>only growing knowledge about vaccine safety and efficacy explained it</strong>; neither access nor media use did. Whether the access push deserves credit for the narrowing is unresolved.
          `),
          grade: 'moderate',
          sources: [source('Annenberg Public Policy Center', 'https://www.annenbergpublicpolicycenter.org/publication/what-caused-the-narrowing-of-black-white-covid-19-vaccination-disparity-in-the-us-a-test-of-5-hypotheses/')]
        })
      ]
    }),
    impact({
      name: 'Vaccination uptake after mandates',
      found: '06/2022',
      headline: paragraph(`
        First doses jumped 66% after mandate announcements abroad; US state
        mandates produced no detectable uptake change and preceded lower booster
        and flu vaccination.
      `),
      measures: paragraph(`
        Mandate announcements abroad were followed by a 66% increase in weekly
        first doses and cumulative gains of 5 to 12 points (Canada, France,
        Italy, Germany). US state mandates produced no detectable uptake change
        and were followed by lower booster and flu vaccination. The federal
        rule was stayed before enforcement, so the US evidence comes from
        state mandates.
      `),
      from: [
        { anchor: 'roughly 100 million Americans', strength: 'contested', note: 'Strong abroad, null in the US; the jurisdictional split is unstudied' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Karaivanov et al. (2022) compared regions before and after national mandate announcements and found <strong>weekly first doses rose 66 percent</strong> after announcement.
          `),
          grade: 'strong',
          sources: [source('Karaivanov et al. 2022', 'https://www.nature.com/articles/s41562-022-01363-1')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Rains et al. (PNAS 2024) found US state mandates <strong>did not
            influence uptake and depressed later booster and flu
            vaccination</strong>; a published reply letter contests the analysis.
          `),
          grade: 'moderate',
          quote: 'COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates',
          sources: [source('Rains et al. 2024', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Share all vaccine and case data, early and openly',
      method: 'Open Data & Public Briefings',
      anchor: 'ACIP voted 11 to 0',
      where: 'Federal; CDC',
      when: paragraph(`
        December 2020 to January 2021, at the start of the vaccination program:
        commit to recurring public telebriefings and county-level open
        dashboards before the rollout's persuasion phase, and hold that cadence
        through 2021, the year CDC held two telebriefings. The documented gap
        was federal: the county data vacuum that newspapers filled, and the
        withheld booster and hospitalization data of 2021-22.
      `),
      description: paragraph(`
        From the 6/8 session: if institutions adhere to a belief in the public's
        capability for rationality and share meaningful information early, they
        might head off the worst of polarization.
      `),
      banner: true,
      impactsMeasured: ['Deaths among unvaccinated adults'],
      impactsConjectured: ['Heading off polarization', 'The state, not a newspaper, performing the data function'],
      links: [
        propLink({
          name: 'Openness sustains trust, with an acceptance dip',
          claim: paragraph(`
            Transparency and frequent briefing sustain institutional trust.
            The randomized evidence adds a complication: transparent negative
            communication raises trust while lowering short-run acceptance, so
            the chain's first two arrows can point in opposite directions.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Petersen and colleagues, randomized studies with 13,000 Danish and
                American participants: transparent communication about negative
                vaccine features <strong>increased trust in health
                authorities</strong>; vague reassurance lowered both acceptance
                and trust and fed conspiracy beliefs. The authors conclude that
                “openness ensures long-term trust”, crucial “if we are to be
                revaccinated, or in relation to the next major health crisis”.
              `),
              grade: 'strong',
              quote: 'Openness ensures long-term trust, and this is crucial if we are to be revaccinated, or in relation to the next major health crisis.',
              sources: [source('Petersen et al. 2021', 'https://www.eurekalert.org/news-releases/829673')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2020 trust decline was partisan (<strong>on a 10-point scale, Trump voters fell 0.8 points, a significant drop; Biden voters 0.3, not significant</strong>), so a transparency push aimed at the general public may not reach the people whose trust fell.
              `),
              grade: 'moderate',
              sources: [source('RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
            })
          ]
        }),
        propLink({
          name: 'Trust raises vaccination',
          claim: paragraph(`
            Institutional trust raises uptake. The correlational record supports
            it; no causal test of raising institutional trust to raise uptake
            was identified, and the strongest US predictor of county uptake is
            partisan identity.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Across 177 countries, higher government and interpersonal trust
                had larger, statistically significant associations with
                <strong>lower infection rates and higher vaccine
                coverage</strong> in middle- and
                high-income countries.
              `),
              grade: 'moderate',
              quote: 'Measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates.',
              sources: [source('Bollyky et al. 2022', 'https://www.polisci.washington.edu/research/publications/pandemic-preparedness-and-covid-19-exploratory-analysis-infection-and')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Across 2,885 US counties, the Republican vote share had the
                strongest association with the unvaccinated share, stronger than
                income, education, or information environment. Randomized
                messaging trials moved intent little, and a Fauci endorsement
                reduced stated intent among conservatives. The one randomized
                messenger intervention that moved actual uptake used a
                partisan-congruent figure: a Trump endorsement ad across 2,032
                counties raised doses by <strong>about 103 per county at about
                $1 per dose</strong>.
              `),
              grade: 'strong',
              quote: 'the campaign increased the number of vaccines in the average treated county by 103',
              sources: [
                source('Dong et al. 2024', 'https://www.nature.com/articles/s41598-024-54441-x'),
                source('Larsen et al. 2022', 'https://arxiv.org/abs/2203.02625')
              ]
            })
          ]
        }),
        propLink({
          name: 'Vaccination prevents deaths',
          claim: paragraph(`
            Higher uptake prevents deaths among the unvaccinated.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Two independent estimates put preventable adult deaths at
                <strong>232,000 to 234,000</strong> for June 2021 to March 2022.
              `),
              grade: 'strong',
              sources: [source('Jia et al. 2023', 'https://link.springer.com/article/10.1007/s10654-023-01006-3')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Taiwan CECC Daily Briefings',
          where: 'Taiwan', when: '2020',
          authority: 'National government practice',
          outcome: paragraph(`
            Taiwan’s government held daily CECC briefings with app-based case
            updates, and government sources scored highest on credibility in a
            national survey. The evidence is correlational: a single survey in a
            confounded national context.
          `),
          strength: 'weak',
          sources: [source('Yueh et al. 2022', 'https://www.nature.com/articles/s41598-022-20312-6')]
        }),
        comparable({
          name: 'NYT, JHU and the COVID Tracking Project',
          where: 'United States', when: '2020-2023',
          authority: 'Private substitution for a state function',
          outcome: paragraph(`
            Newspapers and universities ran the national case-data function the
            state did not, proving it was performable at scale; the Times ended
            its tracker in 2023 when agencies reported less frequently and less
            reliably. No trust consequence was measured.
          `),
          strength: 'moderate',
          sources: [source('New York Times', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Public deliberation before any vaccine mandate',
      method: 'Citizens Assembly, Minipublic',
      anchor: 'majorities of Americans already supported',
      where: 'Federal, before the September 9, 2021 announcement; or New York City before its November 1 municipal mandate',
      when: paragraph(`
        June to August 2021. A mini-public convened in June 2021 and reporting
        by late August would have preceded both Executive Order 14043 and the
        OSHA rule, the two instruments the Senate and the Supreme Court later
        cut down. The proposal accepts regional variation: some places
        might decide not to vaccinate.
      `),
      description: paragraph(`
        From the 6/8 session: convene a mini-public before any mandate, on the
        value tradeoff rather than the science, with decentralized decisions
        accepted.
      `),
      banner: true,
      impactsMeasured: ['Vaccination uptake after mandates', 'Deaths among unvaccinated adults'],
      impactsConjectured: ['Political legitimacy of science', 'Avoiding the authority fight that ran through courts', 'Regional self-determination'],
      links: [
        propLink({
          name: 'Deliberation raises the decision\'s legitimacy',
          claim: paragraph(`
            A mini-public convened before the decision raises its perceived
            legitimacy, especially among low-trust citizens.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Survey experiment in Ireland (N=1,309): mini-public involvement
                <strong>raised perceived procedural fairness 0.7 points and
                acceptance 0.4 points</strong>, driven by citizens with low
                political trust.
              `),
              grade: 'moderate',
              quote: 'The legitimacy-generating effects of mini-publics are driven by citizens with low political trust.',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The gain <strong>largely disappears when the recommendation is
                rejected</strong>.
                For a government that intends to mandate regardless, convening an
                assembly it may override carries a measured legitimacy downside.
              `),
              grade: 'moderate',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ]
        }),
        propLink({
          name: 'Legitimacy could improve compliance',
          claim: paragraph(`
            Perceived legitimacy could improve compliance with the mandate or
            reduce backlash.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                In a survey of 1,595 Australians during early COVID lockdowns,
                felt duty to support the authorities was <strong>the dominant
                predictor of compliance, far ahead of sanction risk</strong>; a
                meta-analysis of
                64 studies finds legitimacy beliefs predict compliance with the
                law, with the effect running through legitimacy rather than
                procedure directly.
              `),
              grade: 'moderate',
              quote: 'normative concerns regarding duty to support the authorities dominated compliance decisions',
              sources: [
                source('Murphy et al. 2020', 'https://journals.sagepub.com/doi/full/10.1177/0004865820954484'),
                source('Walters and Bolger 2019', 'https://link.springer.com/article/10.1007/s11292-018-9338-2')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In a preregistered experiment (N=606), requirements <strong>strengthened vaccination intentions across all groups, including the participants most prone to pushing back</strong>, without any legitimacy-building step.
              `),
              grade: 'moderate',
              quote: 'Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance.',
              sources: [
                source('Albarracin et al. 2021', 'https://www.nature.com/articles/s41598-021-00256-z')
              ]
            }),
            evidence({
              finding: paragraph(`
                The first large hospital mandate worked without any deliberative step: only <strong>153 of 25,000 employees left</strong> rather than comply.
              `),
              grade: 'moderate',
              sources: [
                source('Texas Tribune', 'https://www.texastribune.org/2021/06/23/texas-hospital-houston-methodist-vaccine-employees-fired-resign/')
              ]
            }),
            evidence({
              finding: paragraph(`
                US state mandates produced <strong>no detectable uptake
                change</strong> and depressed later booster and flu vaccination.
              `),
              grade: 'moderate',
              quote: 'COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates',
              sources: [
                source('Rains et al. 2024', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')
              ]
            })
          ]
        }),
        propLink({
          name: 'A legitimate mandate could raise uptake',
          claim: paragraph(`
            A mandate carrying deliberative legitimacy could raise uptake at
            least as much as one imposed without it, with less backlash. The
            evidence below tests mandates alone; the deliberative increment is
            untested.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                National mandate announcements abroad were followed by
                <strong>a 66% increase in weekly first doses</strong> and
                cumulative gains up to 12 points.
              `),
              grade: 'strong',
              sources: [source('Karaivanov et al. 2022', 'https://www.nature.com/articles/s41562-022-01363-1')]
            }),
            evidence({
              finding: paragraph(`
                France's health pass, announced July 12, 2021: two-dose
                coverage of the eligible population rose <strong>from 49
                percent at announcement to 89 percent</strong> by mid-December
                2021.
              `),
              grade: 'strong',
              quote: 'the share of the eligible population vaccinated with two doses increased from 49% on 12 July to 89% by mid-December 2021',
              sources: [source('Ward et al. 2022', 'https://www.nature.com/articles/s41591-021-01661-7')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                US state mandates produced <strong>no detectable change</strong> and depressed
                later booster and flu uptake.
              `),
              grade: 'moderate',
              sources: [source('Rains et al. 2024', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')]
            }),
            evidence({
              finding: paragraph(`
                The same French health pass did not reduce hesitancy:
                the share of vaccinated people with doubts about the vaccine
                <strong>rose from 44 to 61 percent</strong> after
                implementation, and coverage
                lagged among the elderly, the poorest, and the most
                marginalized, with only 86 percent of people over 80
                vaccinated as of October 2021.
              `),
              grade: 'moderate',
              quote: 'the share of vaccinated people with doubts about the vaccine increased from 44% to 61% after the health pass was implemented',
              sources: [source('Ward et al. 2022', 'https://www.nature.com/articles/s41591-021-01661-7')]
            })
          ]
        }),
        propLink({
          name: 'Uptake prevents deaths',
          claim: paragraph(`
            Higher uptake prevents deaths.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                <strong>232,000 to 234,000 preventable adult deaths</strong>
                among the unvaccinated, June 2021 to March 2022.
              `),
              grade: 'strong',
              sources: [source('Jia et al. 2023', 'https://link.springer.com/article/10.1007/s10654-023-01006-3')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'France, Collectif Citoyen sur la Vaccination',
          where: 'France', when: '01-06/2021',
          authority: 'Advisory to the Health Ministry during rollout',
          outcome: paragraph(`
            35 randomly selected citizens advised the French Health Ministry
            over seven working sessions, answering its questions including on
            mandates. It is the one national case of deliberation running
            alongside a vaccination campaign; no outcome evaluation exists.
          `),
          strength: 'weak',
          sources: [source('Missions Publiques', 'https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19')]
        }),
        comparable({
          name: 'France, 2016 Vaccination Consultation and the 2018 Mandate Law',
          where: 'France', when: '2016-2018',
          authority: 'Consultative process preceding a parliamentary mandate',
          outcome: paragraph(`
            France ran a national vaccination consultation in 2016 and then passed the
            2018 law extending infant mandates from 3 to 11 vaccines, the one located
            instance of the exact sequence. The critical literature disputes that the
            recommendation came from the citizen jury, and Ward et al. (2022) report
            the extension drew no public backlash while leaving French vaccine
            confidence low.
          `),
          strength: 'moderate',
          sources: [source('Lévy-Bruhl et al. 2018', 'https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2018.23.17.18-00048')]
        }),
        comparable({
          name: 'South Korea, Shin-Gori Reactor Deliberation',
          where: 'South Korea', when: '2017',
          authority: 'Pre-commitment honored against the convener\'s position',
          outcome: paragraph(`
            471 citizens, selected by stratified random sampling from a pool of
            20,000 across 160 strata, deliberated September 13 to October 15,
            2017; 59.5% supported resuming construction while 53.2% favored
            reducing nuclear power long term, and the government reversed its own
            policy on the result within a week. The direction of coercion ran
            opposite to a mandate, which is a pending admissibility call.
          `),
          strength: 'moderate',
          sources: [source('Participedia', 'https://participedia.net/case/6875')]
        }),
        comparable({
          name: 'French Citizens Convention for Climate',
          where: 'France', when: '2019-2021',
          authority: 'Quasi-binding presidential promise to pass proposals without filter, eroded',
          outcome: paragraph(`
            The president promised to pass the convention’s proposals without
            filter. Tracking of all 149 recommendations found 20 percent
            implemented and 51 percent implemented in modified form, with
            roughly 29 percent dropped; the government was selective, favoring
            incentives over regulation and responding more to detailed
            recommendations. It is the measured record of what a binding
            promise is worth when a government keeps the final word.
          `),
          strength: 'strong',
          sources: [source('Knowledge Network on Climate Assemblies', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
        }),
        comparable({
          name: 'Calgary Fluoridation Removal and Reinstatement',
          where: 'Calgary, Canada', when: '2011-2025',
          authority: 'Council decision, then plebiscite, both binding',
          outcome: paragraph(`
            City council discontinued fluoridation in 2011. A
            controlled-comparison cohort study seven years later measured
            primary-tooth caries prevalence of 64.8 percent in Calgary against
            55.1 percent in Edmonton, which continued fluoridation. A 2021
            plebiscite produced 62 percent support for reinstating fluoride, and
            fluoride returned June 30, 2025. Public decision channels plus
            measured outcomes self-corrected on a decade timescale, at the price
            of a decade of excess childhood caries.
          `),
          strength: 'strong',
          sources: [
            source('Oral Health Group', 'https://www.oralhealthgroup.com/dental-governance-regulations/calgarys-fluoride-reinstatement-serves-as-cautionary-tale-for-u-s-quebec-1003987839/'),
            source('McLaren et al. 2022', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9663766/')
          ]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let communities design how vaccines reach them',
      method: 'Community Advisory & Co-Design',
      anchor: '20,792 doses',
      where: 'City and county level, at the siting of scarce supply',
      when: paragraph(`
        February 2021, when the Federal Retail Pharmacy Program and the
        Community Vaccination Centers were being sited: hand siting and
        scheduling authority for the equity allocations to neighborhood task
        forces on the Protect Chicago Plus model, which launched January 25,
        2021 and existed in time. The decision point recurs in April 2021, when
        the binding constraint shifted from supply to access logistics.
      `),
      description: paragraph(`
        Affected communities decide where and how vaccination access is built:
        siting, hours, mobile units, paid time off coordination. No study
        isolates the co-design component from the supply prioritization it was
        bundled with, which is what the end-to-end banner records.
      `),
      banner: true,
      impactsMeasured: ['The racial vaccination gap', 'Deaths among unvaccinated adults'],
      impactsConjectured: ['Community ownership', 'Standing infrastructure for the next emergency'],
      links: [
        propLink({
          name: 'Co-design could put access where the barriers are',
          claim: paragraph(`
            Community co-design could land access infrastructure where the
            barriers actually are. The co-design component has not been
            isolated from supply prioritization in any study.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Protect Chicago Plus: neighborhood task forces designed outreach
                and distribution in 13 high-vulnerability zip codes; the neighborhoods' vaccination rate went <strong>from 58 percent of the citywide rate to 92 percent in eight weeks</strong>.
                Unidos en Salud delivered 20,792 doses with 98.4% second-dose
                completion, 70.5% Latinx clients.
              `),
              grade: 'moderate',
              quote: 'The city worked with each prioritized community to create a neighborhood task force composed of diverse representatives to design vaccine outreach and distribution strategies.',
              sources: [
                source('Johnson et al. 2023', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093'),
                source('Marquez et al. 2021', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')
              ]
            }),
            evidence({
              finding: paragraph(`
                Tribal self-governance is the one US case where the deciding community held real authority rather than an advisory role, and by July 2021 American Indian and Alaska Native people <strong>had the highest vaccination rate in the nation</strong>. Direct supply through the Indian Health Service and strong community cohesion may account for part of the result.
              `),
              grade: 'moderate',
              sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                No study compares community-chosen siting against agency-chosen
                siting holding supply constant. The component remains untested
                in isolation.
              `),
              grade: 'moderate',
              sources: [source('Marquez et al. 2021', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')]
            })
          ]
        }),
        propLink({
          name: 'Access raises uptake',
          claim: paragraph(`
            Access infrastructure raises uptake. The best-measured link in the
            case.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                People living farther from a vaccination site were less likely to be vaccinated in 98 percent of 6,096 analyses; a Swiss randomized trial of mobile vaccination units <strong>moved uptake from 3.8% to 12.8%, a 3.4x effect</strong>. The largest measured uptake gains in the record come from making vaccination easier to reach, not from persuasion.
              `),
              grade: 'strong',
              sources: [source('Mazar et al. 2023', 'https://academic.oup.com/pnasnexus/article/2/12/pgad411/7459517')]
            })
          ]
        }),
        propLink({
          name: 'Equitable uptake could narrow the gap earlier',
          claim: paragraph(`
            Equitable uptake could have narrowed the racial gap earlier than it
            narrowed in fact, cutting the never-estimated mortality cost of the
            spring 2021 lag.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                By the end of November 2021 first-dose coverage was similar across racial groups; the failure the proposal targets is documented: one federal site delivered <strong>nearly 3 of 4 doses to White recipients in a city that is 33.8% White</strong>.
              `),
              grade: 'moderate',
              sources: [source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The Annenberg panel found the gap narrowed because <strong>knowledge about vaccine safety and efficacy spread</strong>, not because access improved; and no study breaks the preventable deaths down by race.
              `),
              grade: 'moderate',
              sources: [source('Annenberg Public Policy Center', 'https://www.annenbergpublicpolicycenter.org/publication/what-caused-the-narrowing-of-black-white-covid-19-vaccination-disparity-in-the-us-a-test-of-5-hypotheses/')]
            })
          ]
        }),
        propLink({
          name: 'Uptake prevents deaths',
          claim: paragraph(`
            Higher and earlier uptake prevents deaths, including the
            never-estimated excess deaths from the spring 2021 lag.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Two independent estimates put preventable adult deaths at
                <strong>232,000 to 234,000</strong> for June 2021 to March 2022;
                both report by age, never by race, so no one knows what share of those deaths the racial gap accounts for.
              `),
              grade: 'strong',
              sources: [source('Jia et al. 2023', 'https://link.springer.com/article/10.1007/s10654-023-01006-3')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Protect Chicago Plus',
          where: 'Chicago', when: '01-03/2021',
          authority: 'Neighborhood task forces with city supply priority',
          outcome: paragraph(`
            Neighborhood task forces, backed by city supply priority, designed
            outreach and distribution in 13 high-vulnerability zip codes, and
            the coverage rate ratio rose from 0.58 to 0.92 in eight weeks.
            There was no randomization, and co-design was bundled with supply.
          `),
          strength: 'moderate',
          sources: [source('Johnson et al. 2023', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
        }),
        comparable({
          name: 'Community-Based Monitoring of Clinics, Uganda',
          where: 'Uganda', when: '2004-2005',
          authority: 'Randomized; communities set monitoring priorities',
          outcome: paragraph(`
            In a randomized trial where communities set clinic monitoring
            priorities, under-5 mortality fell 33 percent (90 percent CI 8 to
            64 percent, roughly 550 averted deaths) and utilization rose 20% in
            treatment communities, with infant weight-for-age up 0.14 z. It is
            the cleanest causal chain from a designed community-voice
            instrument to a mortality endpoint; the wide interval is the honest
            bridge to a larger replication that found much weaker effects.
          `),
          strength: 'strong',
          sources: [source('Björkman and Svensson 2009', 'https://www.jakobsvensson.com/uploads/9/9/1/0/99107788/124-2-735.pdf')]
        }),
        comparable({
          name: 'Tribal IHS-Route Vaccination',
          where: 'United States', when: '11/2020 onward',
          authority: 'Formal allocation authority, own supply channel',
          outcome: paragraph(`
            Tribes that chose the IHS supply route held formal allocation
            authority, and reached the highest group vaccination rate in the
            country by July 2021 (45.5% one-dose against 33.7% for White
            Americans). Whether it belongs under co-design or devolved
            authority is a pending category call.
          `),
          strength: 'moderate',
          sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
        }),
        comparable({
          name: 'Community-Led Ebola Action, SMAC',
          where: 'Sierra Leone', when: '2014-2015',
          authority: 'Community-designed action plans inside an emergency response',
          outcome: paragraph(`
            SMAC deployed nearly 2,500 community mobilizers across all 14
            districts, reached over 12,000 communities, and engaged 2,113,902
            community members, with communities producing their own action plans
            and feedback loops to responders. The authors state the data were
            self-reported by communities and collected by community mobilizers,
            which may have resulted in reporting bias, and no experimental
            control exists.
          `),
          strength: 'moderate',
          sources: [source('Bedson et al. 2019', 'https://www.biorxiv.org/content/10.1101/661959v1.full.pdf')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Fund evaluation alongside every outreach program',
      method: 'Built-In Program Evaluation',
      anchor: 'vaccine equity push',
      where: 'HHS, in the award terms of the American Rescue Plan community engagement funding',
      when: paragraph(`
        March to April 2021, at obligation: the $323 million to community
        organizations, $250 million to local governments, and $500 million for
        community health workers. Award conditions are set once; that is the
        single point where an evaluation requirement could attach without new
        authority. This proposal is meta-level: its direct product is evidence,
        and every downstream impact is conditional on someone acting on it.
      `),
      description: paragraph(`
        Fund a counterfactual evaluation as a condition of every
        community-engagement award, so $1.1 billion in participation
        infrastructure does not persist in the record only as dollar figures
        and dose counts. This proposal is the research team's addition, drawn
        from the 6/8 session's question about whether available information is
        used and shared, rather than an intervention proposed in the session.
      `),
      banner: true,
      impactsMeasured: [],
      impactsConjectured: ['Effect estimates exist for the next emergency', 'Allocation shifts toward instruments with measured effects', 'Accountability for public money'],
      links: [
        propLink({
          name: 'Requiring evaluation could produce evaluations',
          claim: paragraph(`
            Requiring evaluation in award terms could produce evaluations.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The GSA Office of Evaluation Sciences runs randomized evaluations
                embedded in federal health programs at <strong>samples over
                55,000</strong>, demonstrating administrative feasibility.
              `),
              grade: 'moderate',
              sources: [
                source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')
              ]
            }),
            evidence({
              finding: paragraph(`
                GAO <strong>documented the gap the proposal fixes</strong>: state and local officials had little to no information about how federal doses were allocated, and GAO had to recommend that the agencies start gathering stakeholder feedback in their program reviews.
              `),
              grade: 'moderate',
              sources: [
                source('US Government Accountability Office', 'https://www.gao.gov/products/gao-22-104457')
              ]
            })
          ]
        }),
        propLink({
          name: 'Evidence could change later decisions',
          claim: paragraph(`
            Effect estimates could change later allocation, within the pandemic
            and in the next emergency.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                A randomized experiment with 2,150 Brazilian municipalities
                found mayors pay to learn evaluation results, update their
                beliefs, and that informing them about an effective policy
                <strong>raised its adoption by 10 percentage points</strong>.
              `),
              grade: 'strong',
              quote: 'informing mayors about research on a simple and effective policy, taxpayer reminder letters, increases the probability the policy is implemented by 10 percentage points',
              sources: [source('Hjort et al. 2021', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20190830')]
            }),
            evidence({
              finding: paragraph(`
                A follow-up of 73 randomized nudge trials run with 67 US city
                departments found cities adopted the tested treatment in later
                communications in <strong>27 percent of cases</strong>, with adoption driven more by whether the same staff were still there than by the strength of the evidence. Evidence does reach later decisions, but only partially.
              `),
              grade: 'moderate',
              quote: 'city departments adopt a nudge treatment in follow-on communication in 27% of cases',
              sources: [source('DellaVigna, Kim and Linos 2022', 'https://www.nber.org/papers/w30144')]
            }),
            evidence({
              finding: paragraph(`
                The OES portfolio's embedded evaluations <strong>corrected an
                optimistic published literature</strong>, finding that
                behaviorally-informed communications “can increase vaccination
                rates at scale but may have smaller, less reliable effects than
                the published literature suggests”; that reality check is what the proposal pays for, though no agency was identified changing its spending in response.
              `),
              grade: 'weak',
              caveat: 'Feasibility and correction evidence, not a test of decisions changing.',
              quote: 'behaviorally-informed direct communications can increase vaccination rates at scale but may have smaller, less reliable effects than the published literature suggests',
              sources: [source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')]
            })
          ]
        }),
        propLink({
          name: 'Better allocation could raise uptake',
          claim: paragraph(`
            Reallocation toward measured instruments could raise uptake and
            lower deaths. Conjectured by construction; no study can exist for a
            policy not adopted.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The closest evidence is from Rwanda: in a randomized rollout, tying health funding to measured results <strong>raised the share of births in clinics and preventive child visits</strong>, and the design shows the incentive, not the money alone, drove the gains.
              `),
              grade: 'weak',
              quote: 'the results indicate that an equal amount of financial resources without the incentives would not have achieved the same gain in outcomes',
              sources: [source('Basinga et al. 2011', 'https://ideas.repec.org/p/wbk/wbrwps/5190.html')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Progresa Conditional Cash Transfers',
          where: 'Mexico', when: '1997 onward',
          authority: 'Evaluation designed into the rollout, external evaluator',
          outcome: paragraph(`
            Mexico rolled out the Progresa cash-transfer program with randomized phased
            entry and IFPRI as external evaluator, producing measured impacts
            (consumption up 22%, child malnutrition down 17.2%, secondary enrollment up
            11% for girls and 7.5% for boys); the program survived a change of
            government. Estimated benefit-cost ratios of the evaluation
            considerably exceed one, the one figure about buying evaluation rather
            than about the program.
          `),
          strength: 'strong',
          sources: [
            source('Development Monitoring and Evaluation Office, NITI Aayog', 'https://dmeo.gov.in/sites/default/files/2021-08/Package2_WCD_CaseStudy19.pdf'),
            source('Behrman 2010', 'https://ideas.repec.org/a/eee/wdevel/v38y2010i10p1473-1485.html')
          ]
        }),
        comparable({
          name: 'GSA Office of Evaluation Sciences Portfolio',
          where: 'United States', when: '2021 onward',
          authority: 'Embedded randomized evaluation in federal delivery',
          outcome: paragraph(`
            OES ran randomized evaluations embedded in federal vaccination
            delivery, measuring effects of 0.27 and 0.7 percentage points from
            letter and postcard reminders at scale; the CVS megastudy added
            +1.05 points on boosters across 3.66 million patients.
          `),
          strength: 'strong',
          sources: [source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')]
        })
      ],
      sources: []
    })
  ]
});
