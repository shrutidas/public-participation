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
      answer: 'The evidence is mixed',
      note: 'The committee took public comments before each vaccine vote, but the record does not show whether any comment changed a vote, and the CDC director could overrule the committee',
      detail: paragraph(`
        The Advisory Committee on Immunization Practices (ACIP) advises the Centers for Disease Control and Prevention (CDC) on vaccine recommendations. Its meetings ran by open webcast from December 2020 onward. Anyone could file a written comment or sign up for a three-minute oral slot, so commenters selected themselves. The committee could only recommend, and the CDC director made the final decision. In September 2021 ACIP voted against boosters for adults at occupational risk, and the CDC director overruled the committee within hours. The record does not show whether any public comment changed a committee vote. No study measured the effect of the comment process.
      `),
      anchors: ['ACIP voted 11 to 0'],
      sources: [source('STAT', 'https://www.statnews.com/2021/10/07/cdc-director-defends-decision-to-overrule-expert-panel-on-covid-booster-shots-for-health-workers/')]
    }),
    mechanism({
      name: 'FDA advisory committee review',
      actor: 'Vaccines and Related Biological Products Advisory Committee (VRBPAC)',
      failure: 'partial',
      note: 'The FDA advisory committee narrowed the booster authorization in September 2021, but it could only recommend, and the occupational category widened again at the CDC step',
      detail: paragraph(`
        The Food and Drug Administration (FDA) convened its Vaccines and Related Biological Products Advisory Committee (VRBPAC) in September 2021 to review the Pfizer booster application. The members are outside experts the FDA appoints. The committee could only advise. It voted 16 to 2 against boosters for everyone 16 and older, then 18 to 0 for people 65 and older and people at high risk. The FDA followed the narrowed recommendation in its authorization. The Centers for Disease Control and Prevention (CDC) then widened the occupational category. Of the advisory bodies in this case, this committee changed a federal decision most visibly. No study measured whether the narrowing changed uptake or trust.
      `),
      anchors: ['full approval to Pfizer'],
      sources: [source('Healio', 'https://www.healio.com/news/infectious-disease/20210917/fda-committee-votes-against-blanket-recommendation-for-covid19-vaccine-boosters')]
    }),
    mechanism({
      name: 'Notice-and-comment rulemaking',
      actor: 'OSHA, 122,485 commenters',
      failure: 'acted-no-effect',
      note: 'OSHA took 122,485 public comments on its vaccine rule, but the rule had already taken effect, and the Supreme Court stayed it before any comment could change it',
      detail: paragraph(`
        The Occupational Safety and Health Administration (OSHA) published its emergency temporary standard in November 2021. The rule took effect on publication. The same document served as the proposal for a final standard, with comments due a month later. Anyone could comment, and 122,485 people and organizations did. The comment process was consultative. The rule was already in force when the comments arrived. The Supreme Court stayed the rule in January 2022 before OSHA issued any final standard. The record does not show that any comment changed the rule. The emergency instrument put participation after the decision.
      `),
      anchors: ['122,485 comments'],
      sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')]
    }),
    mechanism({
      name: 'Congressional review',
      actor: 'US Senate',
      failure: 'partial',
      note: 'The Senate voted to disapprove the OSHA rule in December 2021, and the Supreme Court noted that vote, but the vote did not repeal the rule',
      detail: paragraph(`
        The Senate can vote to disapprove an agency rule. In December 2021 it voted 52 to 48 to disapprove the Occupational Safety and Health Administration (OSHA) vaccine rule. Elected senators cast the votes. The vote could review the rule but could not repeal it on its own, and the rule stayed in force. The vote did enter the record. In January 2022 the Supreme Court majority noted that one chamber had affirmatively rejected the agency rule. The record does not show how much weight the vote carried in the Court's decision.
      `),
      anchors: ['disapprove the OSHA regulation'],
      sources: [source('US Supreme Court', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Courts',
      actor: 'Federal courts, Supreme Court',
      failure: 'worked',
      note: 'Federal courts settled who had the authority to mandate, and the agencies had to follow their rulings, but no public deliberation fed into them',
      detail: paragraph(`
        Workers, states, businesses, and unions sued over the mandates from fall 2021. Federal judges and the Supreme Court decided the cases. The parties were whoever had standing to sue, and judges hold decision-making power. In November 2021 the Court declined to block Maine's no-exemption mandate. In January 2022 it stayed the large-employer rule and allowed the healthcare-worker mandate. The rulings took effect at once. Courts settled the question of authority that no deliberative process ever addressed. No study measured whether the rulings changed public trust or uptake.
      `),
      anchors: ['clearer congressional authorization'],
      sources: [source('US Supreme Court', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Union collective bargaining',
      actor: 'Police and municipal unions',
      failure: 'partial',
      note: 'Police and municipal unions forced cities to negotiate mandate terms, but they won exemption timelines and process, not reversal',
      detail: paragraph(`
        Police and municipal unions sued in October 2021 over mandate terms that cities had not bargained with them. The union members were the workers the mandates covered. Bargaining gave the unions a consultative role with legal force behind it. They won process, such as time to seek exemptions. They did not reverse any mandate. Only unionized workforces had this channel. The 84 million workers under the federal rule had no equivalent way to force negotiation. The record does not show whether the negotiated terms changed vaccination rates.
      `),
      anchors: ['largest police union filed suit'],
      sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')]
    }),
    mechanism({
      name: 'City councils',
      actor: 'Municipal legislatures',
      failure: 'no-mechanism',
      note: 'Mayors and health officials issued the municipal mandates by order, and no city council voted on them',
      detail: paragraph(`
        No city council debated or voted on a workforce vaccine mandate anywhere in the case record. Mayors and health authorities issued the mandates by order in fall 2021. Unions and courts then contested them. Council members are elected and hold legislative power, but the record shows no council using it here. This coding rests on absence from the case record. It does not rest on legal research into what each city charter allowed, and it is flagged for review.
      `),
      anchors: ['largest police union filed suit'],
      sources: []
    }),
    mechanism({
      name: 'Tribal consultation and self-governance',
      actor: 'Tribal governments, Indian Health Service',
      failure: 'worked',
      note: 'Tribal governments that chose the Indian Health Service route set their own vaccine priorities, and by July 2021 American Indian and Alaska Native people had the highest vaccination rate of any US group',
      detail: paragraph(`
        In November 2020 each tribal government chose between state allocation and the Indian Health Service (IHS) route for vaccine supply. Elected tribal governments made the choice. Those that chose IHS held decision-making power over their own prioritization, and many protected elders, language keepers, and teachers first. By July 2021 American Indian and Alaska Native people had the highest vaccination rate of any US group. This is the clearest case in the record of a community with formal authority reaching a measured favorable result. No study separates the effect of tribal authority from the direct supply channel and community cohesion.
      `),
      anchors: ['Indian Health Service route'],
      sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
    }),
    mechanism({
      name: 'Federal data transparency',
      actor: 'CDC',
      failure: 'knew-no-act',
      note: 'The CDC collected booster and hospitalization data in 2021 and withheld much of it for more than a year',
      detail: paragraph(`
        The Centers for Disease Control and Prevention (CDC) collected booster effectiveness data for adults 18 to 49, hospitalization breakdowns by vaccination status, and wastewater surveillance during 2021. Agency staff collected and held the data, and no outside body took part. The CDC had full power to publish. It did not publish these data for over a year and said the public could misinterpret the findings. Newspapers and universities filled part of the gap with their own trackers. No study measured what the withholding cost in public trust.
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
            Commonwealth Fund modeling covers the program's first two years. It estimates 3.2 million deaths and 18.5 million hospitalizations averted.
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
        Vaccination would have prevented roughly 232,000 adult deaths between
        June 2021 and March 2022, per two independent estimates.
      `),
      measures: paragraph(`
        Vaccination would have prevented roughly 232,000 to 234,000 adult deaths
        between June 2021 and March 2022, per two independent estimates.
      `),
      from: [
        { anchor: 'Eligibility expands to all US adults', strength: 'moderate', note: 'A marker, not a cause: once supply stopped binding, the remaining gap was behavioral' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Peterson-KFF estimated approximately 234,000 preventable
            adult deaths. The European Journal of Epidemiology replication found at
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
        2021 peak to 5 points by mid-2022. No one has estimated the mortality
        cost of the spring 2021 lag by race.
      `),
      measures: paragraph(`
        The Black-White vaccination gap fell from about 14 points at the April
        2021 peak to 5 points by July 2022. By the end of November 2021,
        at-least-one-dose coverage was similar across groups. No one has
        estimated the mortality cost of the spring 2021 lag by race.
      `),
      from: [
        { anchor: '20,792 doses', strength: 'weak', note: 'A local exemplar; one neighborhood site cannot carry a national narrowing' },
        { anchor: 'vaccine equity push', strength: 'weak', note: 'No published outcome evaluation of the line items' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            The CDC's Morbidity and Mortality Weekly Report showed the gap
            narrowing substantially by late 2021. The largest measured uptake
            effects in the record come from access interventions, not persuasion.
          `),
          grade: 'moderate',
          sources: [source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            The Annenberg panel tested five explanations for the Black-White narrowing. Only growing knowledge about vaccine safety and efficacy explained it; neither access nor media use did. The record does not settle whether the access push deserves credit for the narrowing.
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
        Weekly first doses rose 66% after mandate announcements abroad, with
        cumulative gains of 5 to 12 points (Canada, France, Italy, Germany).
        US state mandates produced no detectable uptake change, and booster
        and flu vaccination fell afterward. The Supreme Court stayed the
        federal rule before enforcement, so the US evidence comes from state
        mandates.
      `),
      from: [
        { anchor: 'roughly 100 million Americans', strength: 'contested', note: 'Strong abroad, null in the US; the jurisdictional split is unstudied' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Karaivanov et al. (2022) compared regions before and after national mandate announcements. Weekly first doses rose 66 percent after announcement.
          `),
          grade: 'strong',
          sources: [source('Karaivanov et al. 2022', 'https://www.nature.com/articles/s41562-022-01363-1')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Rains et al. (PNAS 2024) found “COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates”. They also found that mandates depressed later booster and flu vaccination. A published reply letter contests the analysis.
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
      name: 'Publish vaccine safety and case data early, with regular public briefings',
      method: 'Mandatory open data and briefings',
      summary: 'CDC commits to county-level open dashboards and recurring on-record briefings from the first week of the rollout, including unfavorable findings.',
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
        Require CDC to publish county-level vaccination, case, hospitalization, and adverse-event data on open dashboards from December 2020 through the rollout. Require recurring on-record public briefings, including findings unfavorable to the vaccines. The duty falls on the federal agency; states and the public are users of the data. Briefings run on a fixed schedule with questions taken, and the agency must state what it does not yet know. This is a transparency commitment. It does not create a participation right. In 2021 CDC held two telebriefings, newspapers filled the county-data vacuum, and CDC withheld booster and hospitalization data in 2021-22. The randomized evidence suggests openness about negatives raises trust in the authorities even when it lowers short-run acceptance.
      `),
      banner: true,
      impactsMeasured: ['Deaths among unvaccinated adults'],
      impactsConjectured: ['Heading off polarization', 'The state, not a newspaper, performing the data function'],
      links: [
        propLink({
          name: 'Openness may sustain trust, at the cost of a short-run acceptance dip',
          claim: paragraph(`
            Transparent, frequent briefing may sustain trust in health authorities. The randomized evidence adds a complication: openness about negative vaccine features raises trust while lowering short-run acceptance, so the first two arrows can pull in opposite directions.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Petersen and colleagues ran randomized studies with 13,000 Danish and
                American participants. Transparent communication about negative
                vaccine features increased trust in health authorities. Vague
                reassurance lowered both acceptance and trust and fed conspiracy
                beliefs. The authors conclude that “openness ensures long-term
                trust”, crucial “if we are to be revaccinated, or in relation to
                the next major health crisis”.
              `),
              grade: 'strong',
              quote: 'Openness ensures long-term trust, and this is crucial if we are to be revaccinated, or in relation to the next major health crisis.',
              sources: [source('Petersen et al. 2021', 'https://www.eurekalert.org/news-releases/829673')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2020 trust decline was partisan. On a 10-point scale, Trump voters fell 0.8 points, a significant drop; Biden voters fell 0.3, not significant. A transparency push aimed at the general public may not reach the people whose trust fell.
              `),
              grade: 'moderate',
              sources: [source('RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
            })
          ]
        }),
        propLink({
          name: 'Trust in authorities may raise vaccination',
          claim: paragraph(`
            Higher institutional trust goes with higher uptake across countries. No study tests whether raising trust raises uptake, and the strongest US county predictor is partisan identity.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Across 177 countries, “measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates”, and with higher vaccine coverage in middle- and high-income countries.
              `),
              grade: 'moderate',
              quote: 'Measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates.',
              sources: [source('Bollyky et al. 2022', 'https://www.polisci.washington.edu/research/publications/pandemic-preparedness-and-covid-19-exploratory-analysis-infection-and')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Across 2,885 US counties, the Republican vote share had the strongest association with the unvaccinated share, stronger than income, education, or information environment. Randomized messaging trials moved intent little, and a Fauci endorsement reduced stated intent among conservatives. Only one randomized messenger intervention moved actual uptake, and it used a partisan-matched figure. A Trump endorsement ad across 2,032 counties “increased the number of vaccines in the average treated county by 103”, at about $1 per dose.
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
            Higher uptake prevents deaths among unvaccinated adults. Studies measure this link directly.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Two independent estimates put preventable adult deaths at
                232,000 to 234,000 for June 2021 to March 2022.
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
            Taiwan’s government held daily Central Epidemic Command Center (CECC)
            briefings with app-based case updates. Government sources scored
            highest on credibility in a national survey. The evidence shows
            correlation only: a single survey in one country, where many other
            factors could explain the result.
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
            state did not. They proved the job could be done at scale. The Times
            ended its tracker in 2023 when agencies reported less often and less
            reliably. No one measured the trust consequence.
          `),
          strength: 'moderate',
          sources: [source('New York Times', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Convene a citizens\' assembly before any vaccine mandate is imposed',
      method: 'Deliberative forum before mandates',
      summary: 'Before ordering a mandate, the federal government or a city convenes a randomly selected assembly on the value tradeoff and must publicly answer its recommendation.',
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
        Require the federal government, or a city considering its own mandate, to convene a randomly selected assembly of residents before imposing a vaccine mandate. Experts brief the assembly on the science. The assembly decides the value question: whether to mandate, and for whom. The convening authority keeps the final decision but must publish the assembly's recommendation and a written response before acting. Participation is deliberative and advisory. Existing federal and state vaccination law and emergency-use rules stay in place. The proposal accepts regional variation: some places might choose not to mandate. An assembly convened in June 2021 and reporting by late August would have preceded Executive Order 14043 and the OSHA rule. The Senate and the Supreme Court later cut down both.
      `),
      banner: true,
      impactsMeasured: ['Vaccination uptake after mandates', 'Deaths among unvaccinated adults'],
      impactsConjectured: ['Political legitimacy of science', 'Avoiding the authority fight that ran through courts', 'Regional self-determination'],
      links: [
        propLink({
          name: 'Deliberation before the decision may raise its perceived legitimacy',
          claim: paragraph(`
            A citizens' assembly convened before the decision may raise how legitimate the public finds it, especially among low-trust citizens. Survey experiments measure the effect; no study measures it on a mandate.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                A survey experiment in Ireland (N=1,309) found that mini-public involvement raised perceived procedural fairness 0.7 points and acceptance 0.4 points. It found that “the legitimacy-generating effects of mini-publics are driven by citizens with low political trust”.
              `),
              grade: 'moderate',
              quote: 'The legitimacy-generating effects of mini-publics are driven by citizens with low political trust.',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The gain largely disappears when the government rejects the
                recommendation. A government that intends to mandate regardless
                would convene an assembly it may override, and that carries a
                measured legitimacy downside.
              `),
              grade: 'moderate',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ]
        }),
        propLink({
          name: 'Higher legitimacy could improve compliance or reduce backlash',
          claim: paragraph(`
            Perceived legitimacy could improve compliance with a mandate or reduce backlash. The evidence comes from policing and lockdown compliance; no study tests it on vaccination.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                In a survey of 1,595 Australians during early COVID lockdowns, “normative concerns regarding duty to support the authorities dominated compliance decisions”, far ahead of sanction risk. A meta-analysis of 64 studies finds that legitimacy beliefs predict compliance with the law. The effect runs through legitimacy, not directly through procedure.
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
                In a preregistered experiment (N=606), “requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance”. That includes the participants most prone to pushing back, and the study used no legitimacy-building step.
              `),
              grade: 'moderate',
              quote: 'Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance.',
              sources: [
                source('Albarracin et al. 2021', 'https://www.nature.com/articles/s41598-021-00256-z')
              ]
            }),
            evidence({
              finding: paragraph(`
                The first large hospital mandate worked without any deliberative step. Only 153 of 25,000 employees left instead of complying.
              `),
              grade: 'moderate',
              sources: [
                source('Texas Tribune', 'https://www.texastribune.org/2021/06/23/texas-hospital-houston-methodist-vaccine-employees-fired-resign/')
              ]
            }),
            evidence({
              finding: paragraph(`
                US state mandates produced no detectable uptake change: “COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates”. Mandates also depressed later booster and flu vaccination.
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
          name: 'A mandate with deliberative backing could raise uptake',
          claim: paragraph(`
            A mandate carrying deliberative legitimacy could raise uptake at least as much as one imposed without it, with less backlash. The evidence tests mandates alone, with contested results. No study tests the added effect of deliberation.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                Weekly first doses rose 66% after national mandate announcements
                abroad, with cumulative gains up to 12 points.
              `),
              grade: 'strong',
              sources: [source('Karaivanov et al. 2022', 'https://www.nature.com/articles/s41562-022-01363-1')]
            }),
            evidence({
              finding: paragraph(`
                France announced its health pass on July 12, 2021. After that, “the share of the eligible population vaccinated with two doses increased from 49% on 12 July to 89% by mid-December 2021”.
              `),
              grade: 'strong',
              quote: 'the share of the eligible population vaccinated with two doses increased from 49% on 12 July to 89% by mid-December 2021',
              sources: [source('Ward et al. 2022', 'https://www.nature.com/articles/s41591-021-01661-7')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                US state mandates produced no detectable change and depressed
                later booster and flu uptake.
              `),
              grade: 'moderate',
              sources: [source('Rains et al. 2024', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')]
            }),
            evidence({
              finding: paragraph(`
                The same French health pass did not reduce hesitancy: “the share of vaccinated people with doubts about the vaccine increased from 44% to 61% after the health pass was implemented”. Coverage lagged among the elderly, the poorest, and the most marginalized. Only 86 percent of people over 80 were vaccinated as of October 2021.
              `),
              grade: 'moderate',
              quote: 'the share of vaccinated people with doubts about the vaccine increased from 44% to 61% after the health pass was implemented',
              sources: [source('Ward et al. 2022', 'https://www.nature.com/articles/s41591-021-01661-7')]
            })
          ]
        }),
        propLink({
          name: 'Higher uptake prevents deaths',
          claim: paragraph(`
            Higher uptake prevents deaths. Studies measure this link directly.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Two independent estimates put preventable adult deaths among the
                unvaccinated at 232,000 to 234,000 for June 2021 to March 2022.
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
            over seven working sessions. They answered the ministry's questions,
            including on mandates. It is the one national case of deliberation
            running alongside a vaccination campaign. No outcome evaluation
            exists.
          `),
          strength: 'weak',
          sources: [source('Missions Publiques', 'https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19')]
        }),
        comparable({
          name: 'France, 2016 Vaccination Consultation and the 2018 Mandate Law',
          where: 'France', when: '2016-2018',
          authority: 'Consultative process preceding a parliamentary mandate',
          outcome: paragraph(`
            France ran a national vaccination consultation in 2016. In 2018 it
            passed a law extending infant mandates from 3 to 11 vaccines. This is
            the one located instance of the exact sequence. Critics dispute that
            the recommendation came from the citizen jury. Ward et al. (2022)
            report the extension drew no public backlash and left French vaccine
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
            20,000 across 160 strata, deliberated from September 13 to October
            15, 2017. 59.5% supported resuming construction, while 53.2% favored
            reducing nuclear power long term. The government reversed its own
            policy on the result within a week. The coercion here ran the
            opposite way from a mandate, so whether the case counts as a
            comparable is still an open call.
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
            filter. Tracking of all 149 recommendations found the government
            implemented 20 percent, implemented 51 percent in modified form, and
            dropped roughly 29 percent. The government was selective: it favored
            incentives over regulation and responded more to detailed
            recommendations. This is the measured record of what a binding
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
            City council discontinued fluoridation in 2011. Seven years later, a
            controlled-comparison cohort study found tooth decay in the primary
            teeth of 64.8 percent of Calgary children, against 55.1 percent in
            Edmonton, which continued fluoridation. A 2021 plebiscite produced
            62 percent support for reinstating fluoride, and fluoride returned
            June 30, 2025. Public decision channels plus measured outcomes
            self-corrected over a decade, at the price of a decade of extra
            childhood tooth decay.
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
      name: 'Let neighborhood task forces decide where and how vaccines are delivered',
      method: 'Co-governance of vaccine delivery',
      summary: 'City health departments hand siting, hours, and outreach decisions for equity allocations to task forces of residents and local organizations.',
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
        Give neighborhood task forces of residents, community organizations, clinics, and employers shared authority over where, when, and how vaccines are delivered in high-vulnerability zip codes. That covers site selection, hours, mobile units, and paid-time-off coordination. The city or county health department keeps control of supply, eligibility rules, and safety standards, and commits a share of doses to the task forces' plans. Task forces form in February 2021, when agencies were siting scarce federal supply, and again in April 2021 when the constraint became access. The task forces hold shared decision power, and the department publishes uptake by zip code. Protect Chicago Plus launched January 25, 2021 on this model. No study separates its co-governance component from the supply prioritization bundled with it.
      `),
      banner: true,
      impactsMeasured: ['The racial vaccination gap', 'Deaths among unvaccinated adults'],
      impactsConjectured: ['Community ownership', 'Standing infrastructure for the next emergency'],
      links: [
        propLink({
          name: 'Task forces could put access where the barriers are',
          claim: paragraph(`
            Community task forces could place access infrastructure where the barriers actually are. No study separates the co-governance component from supply prioritization.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Under Protect Chicago Plus, “the city worked with each prioritized community to create a neighborhood task force composed of diverse representatives to design vaccine outreach and distribution strategies” in 13 high-vulnerability zip codes. The neighborhoods' vaccination rate rose from 58 percent of the citywide rate to 92 percent in eight weeks. Unidos en Salud delivered 20,792 doses with 98.4% second-dose completion, and 70.5% of its clients were Latinx.
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
                Tribal self-governance is the one US case where the deciding community held real authority instead of an advisory role. By July 2021 American Indian and Alaska Native people had the highest vaccination rate in the nation. Direct supply through the Indian Health Service and strong community cohesion may account for part of the result.
              `),
              grade: 'moderate',
              sources: [source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                No study compares community-chosen siting against agency-chosen
                siting while holding supply constant. No study tests the
                component on its own.
              `),
              grade: 'moderate',
              sources: [source('Marquez et al. 2021', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')]
            })
          ]
        }),
        propLink({
          name: 'Access raises uptake',
          claim: paragraph(`
            Access infrastructure raises uptake; this is the best-measured link in this case.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                People living farther from a vaccination site were less likely to be vaccinated in 98 percent of 6,096 analyses. A Swiss randomized trial of mobile vaccination units moved uptake from 3.8% to 12.8%, a 3.4x effect. The largest measured uptake gains in the record come from making vaccination easier to reach. Persuasion campaigns did not match those gains.
              `),
              grade: 'strong',
              sources: [source('Mazar et al. 2023', 'https://academic.oup.com/pnasnexus/article/2/12/pgad411/7459517')]
            })
          ]
        }),
        propLink({
          name: 'Earlier equitable uptake could narrow the racial gap sooner',
          claim: paragraph(`
            Equitable uptake could have narrowed the racial vaccination gap earlier than it narrowed in fact. No one has estimated the mortality cost of the spring 2021 lag.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                By the end of November 2021 first-dose coverage was similar across racial groups. The record documents the failure the proposal targets: one federal site delivered nearly 3 of 4 doses to White recipients in a city that is 33.8% White.
              `),
              grade: 'moderate',
              sources: [source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The Annenberg panel found the gap narrowed because knowledge about vaccine safety and efficacy spread, not because access improved. No study breaks the preventable deaths down by race.
              `),
              grade: 'moderate',
              sources: [source('Annenberg Public Policy Center', 'https://www.annenbergpublicpolicycenter.org/publication/what-caused-the-narrowing-of-black-white-covid-19-vaccination-disparity-in-the-us-a-test-of-5-hypotheses/')]
            })
          ]
        }),
        propLink({
          name: 'Higher and earlier uptake prevents deaths',
          claim: paragraph(`
            Higher and earlier uptake prevents deaths, including the unestimated excess deaths from the spring 2021 lag.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Two independent estimates put preventable adult deaths at
                232,000 to 234,000 for June 2021 to March 2022. Both report by
                age, never by race, so no one knows what share of those deaths
                the racial gap accounts for.
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
            outreach and distribution in 13 high-vulnerability zip codes. The
            coverage rate ratio rose from 0.58 to 0.92 in eight weeks. The study
            had no randomization, and co-design came bundled with supply.
          `),
          strength: 'moderate',
          sources: [source('Johnson et al. 2023', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
        }),
        comparable({
          name: 'Community-Based Monitoring of Clinics, Uganda',
          where: 'Uganda', when: '2004-2005',
          authority: 'Randomized; communities set monitoring priorities',
          outcome: paragraph(`
            In a randomized trial, communities set clinic monitoring priorities.
            Under-5 mortality fell 33 percent (90 percent CI 8 to 64 percent,
            roughly 550 averted deaths), clinic use rose 20% in treatment
            communities, and infant weight-for-age rose 0.14 standard
            deviations. This is the cleanest causal chain from a designed
            community-voice instrument to a mortality endpoint. The wide
            interval is the honest bridge to a larger replication that found
            much weaker effects.
          `),
          strength: 'strong',
          sources: [source('Björkman and Svensson 2009', 'https://www.jakobsvensson.com/uploads/9/9/1/0/99107788/124-2-735.pdf')]
        }),
        comparable({
          name: 'Tribal IHS-Route Vaccination',
          where: 'United States', when: '11/2020 onward',
          authority: 'Formal allocation authority, own supply channel',
          outcome: paragraph(`
            Tribes that chose the Indian Health Service (IHS) supply route held
            formal allocation authority. They reached the highest group
            vaccination rate in the country by July 2021 (45.5% one-dose
            against 33.7% for White Americans). Whether the case belongs under
            co-design or devolved authority is still an open call.
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
            community members. Communities produced their own action plans and
            feedback loops to responders. The authors state that communities
            self-reported the data and community mobilizers collected them, so
            reporting bias is possible. No experimental control exists.
          `),
          strength: 'moderate',
          sources: [source('Bedson et al. 2019', 'https://www.biorxiv.org/content/10.1101/661959v1.full.pdf')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Require an independent evaluation with every community outreach grant',
      method: 'Evaluation condition in grant terms',
      summary: 'HHS makes a comparison-group evaluation a condition of each American Rescue Plan community-engagement award, with results published.',
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
        Require HHS to make a comparison-group evaluation a condition of every American Rescue Plan community-engagement award, with results published. That way $1.1 billion in participation funding leaves effect estimates, not just dollar figures and dose counts. The duty falls on the funding agency and its grantees; the public's role is as reader of the published results. HHS sets award terms once, in March to April 2021, at obligation of the $323 million to community organizations, $250 million to local governments, and $500 million for community health workers. This is an accountability condition on public money. It does not create a participation right. The research team added it from the June 8 session's question about whether information is used; it did not come from the session. Its direct product is evidence; every further effect depends on someone acting on it.
      `),
      banner: true,
      impactsMeasured: [],
      impactsConjectured: ['Effect estimates exist for the next emergency', 'Allocation shifts toward instruments with measured effects', 'Accountability for public money'],
      links: [
        propLink({
          name: 'Requiring evaluation in award terms could produce evaluations',
          claim: paragraph(`
            Award conditions could produce evaluations that otherwise would not exist. Agencies that embedded evaluation did produce them, with smaller effects than the published literature suggested.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The GSA Office of Evaluation Sciences runs randomized evaluations
                embedded in federal health programs at samples over
                55,000. That shows the approach is administratively feasible.
              `),
              grade: 'moderate',
              sources: [
                source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')
              ]
            }),
            evidence({
              finding: paragraph(`
                The Government Accountability Office (GAO) documented the gap the proposal fixes. State and local officials had little to no information about how the federal government allocated doses. GAO had to recommend that the agencies start gathering stakeholder feedback in their program reviews.
              `),
              grade: 'moderate',
              sources: [
                source('US Government Accountability Office', 'https://www.gao.gov/products/gao-22-104457')
              ]
            })
          ]
        }),
        propLink({
          name: 'Published effect estimates could change later spending',
          claim: paragraph(`
            Effect estimates could change later allocation, within the pandemic and in the next emergency. Cities and mayors do adopt evaluated policies, but only partially, and the research found no agency that changed its spending in response.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                A randomized experiment with 2,150 Brazilian municipalities found that mayors pay to learn evaluation results and update their beliefs. It also found that “informing mayors about research on a simple and effective policy, taxpayer reminder letters, increases the probability the policy is implemented by 10 percentage points”.
              `),
              grade: 'strong',
              quote: 'informing mayors about research on a simple and effective policy, taxpayer reminder letters, increases the probability the policy is implemented by 10 percentage points',
              sources: [source('Hjort et al. 2021', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20190830')]
            }),
            evidence({
              finding: paragraph(`
                A follow-up of 73 randomized nudge trials run with 67 US city departments found “city departments adopt a nudge treatment in follow-on communication in 27% of cases”. Whether the same staff were still there drove adoption more than the strength of the evidence did. Evidence does reach later decisions, but only partially.
              `),
              grade: 'moderate',
              quote: 'city departments adopt a nudge treatment in follow-on communication in 27% of cases',
              sources: [source('DellaVigna, Kim and Linos 2022', 'https://www.nber.org/papers/w30144')]
            }),
            evidence({
              finding: paragraph(`
                The OES portfolio's embedded evaluations corrected an optimistic
                published literature. They found that behaviorally-informed
                communications “can increase vaccination rates at scale but may
                have smaller, less reliable effects than the published literature
                suggests”. That reality check is what the proposal pays for. The
                research found no agency that changed its spending in response.
              `),
              grade: 'weak',
              caveat: 'This shows feasibility and correction. It does not test whether decisions changed.',
              quote: 'behaviorally-informed direct communications can increase vaccination rates at scale but may have smaller, less reliable effects than the published literature suggests',
              sources: [source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')]
            })
          ]
        }),
        propLink({
          name: 'Better allocation could raise uptake',
          claim: paragraph(`
            Reallocation toward instruments with measured effects could raise uptake and lower deaths. No study can exist for a policy that no one adopted.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The closest evidence comes from Rwanda. In a randomized rollout, tying health funding to measured results raised the share of births in clinics and preventive child visits. The authors state that “the results indicate that an equal amount of financial resources without the incentives would not have achieved the same gain in outcomes”.
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
            Mexico rolled out the Progresa cash-transfer program with randomized
            phased entry and the International Food Policy Research Institute
            (IFPRI) as external evaluator. The evaluation measured consumption up
            22%, child malnutrition down 17.2%, and secondary enrollment up 11%
            for girls and 7.5% for boys. The program survived a change of
            government. Estimated benefit-cost ratios of the evaluation
            considerably exceed one, the one figure about buying evaluation
            instead of about the program.
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
            The Office of Evaluation Sciences (OES) ran randomized evaluations
            embedded in federal vaccination delivery. It measured effects of
            0.27 and 0.7 percentage points from letter and postcard reminders
            at scale. The CVS megastudy added +1.05 points on boosters across
            3.66 million patients.
          `),
          strength: 'strong',
          sources: [source('Office of Evaluation Sciences', 'https://oes.gsa.gov/vaccines/')]
        })
      ],
      sources: []
    })
  ]
});
