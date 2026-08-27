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
      note: 'Three-minute comments behind a committee whose own vote did not bind',
      detail: paragraph(`
        ACIP meetings are open by webcast with written comments and three-minute
        oral slots. The ceiling on effect is visible one level up: in September
        2021 ACIP voted down boosters for occupational-risk adults and the CDC
        director overruled the committee within hours. Where the statutory
        committee's own vote did not bind, the public comment behind it had no
        path to effect.
      `),
      anchors: ['ACIP voted 11 to 0'],
      sources: [source('STAT 2021', 'https://www.statnews.com/2021/10/07/cdc-director-defends-decision-to-overrule-expert-panel-on-covid-booster-shots-for-health-workers/')]
    }),
    mechanism({
      name: 'FDA advisory committee review',
      actor: 'VRBPAC',
      failure: 'partial',
      note: 'The advisory body that most visibly narrowed a federal decision',
      detail: paragraph(`
        VRBPAC voted 16 to 2 against boosters for everyone 16 and older, then 18
        to 0 for ages 65 and up and high risk; FDA's authorization tracked the
        narrowed recommendation before the occupational category widened again
        at the CDC step. Of the case's advisory mechanisms, the one that most
        visibly constrained a federal decision.
      `),
      anchors: ['full approval to Pfizer'],
      sources: [source('Healio 2021', 'https://www.healio.com/news/infectious-disease/20210917/fda-committee-votes-against-blanket-recommendation-for-covid19-vaccine-boosters')]
    }),
    mechanism({
      name: 'Notice-and-comment rulemaking',
      actor: 'OSHA, 122,485 commenters',
      failure: 'acted-no-effect',
      note: 'Comments were filed against a rule already in force',
      detail: paragraph(`
        The emergency temporary standard took effect on publication while
        simultaneously serving as the proposal for a final standard, with
        comments due a month later. 122,485 comments arrived against a rule
        already in force, and the Supreme Court stayed the rule before any final
        standard could reflect them. The emergency instrument sequenced
        participation after the decision.
      `),
      anchors: ['122,485 comments'],
      sources: [source('Federal Register 2021', 'https://www.federalregister.gov/documents/2021/11/05/2021-23643/covid-19-vaccination-and-testing-emergency-temporary-standard')]
    }),
    mechanism({
      name: 'Congressional review',
      actor: 'US Senate',
      failure: 'partial',
      note: 'Did not repeal the rule; entered the legitimacy record the Court used',
      detail: paragraph(`
        The Senate voted 52 to 48 to disapprove the OSHA rule in December 2021.
        The vote did not repeal the rule, but it entered the record the Court's
        majority drew on: one chamber had affirmatively rejected the agency
        rule.
      `),
      anchors: ['disapprove the OSHA regulation'],
      sources: [source('SCOTUS opinion', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Courts',
      actor: 'Federal courts, Supreme Court',
      failure: 'worked',
      note: 'The mechanism that resolved the authority contest',
      detail: paragraph(`
        Courts resolved the contest the deliberative channels never hosted: the
        large-employer rule was stayed, the healthcare-worker mandate allowed,
        Maine's no-exemption mandate left standing. Resolution ran judicial, not
        deliberative.
      `),
      anchors: ['clearer congressional authorization'],
      sources: [source('SCOTUS', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf')]
    }),
    mechanism({
      name: 'Union collective bargaining',
      actor: 'Police and municipal unions',
      failure: 'partial',
      note: 'Binding voice only for unionized workforces; secured process, not reversal',
      detail: paragraph(`
        Police and municipal unions litigated mandate terms that had not been
        collectively bargained and secured process, such as exemption timelines,
        rather than reversal. Bargaining gave binding voice only to unionized
        workforces; the 84 million workers under the federal rule had no
        equivalent channel.
      `),
      anchors: ['largest police union filed suit'],
      sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')]
    }),
    mechanism({
      name: 'City councils',
      actor: 'Municipal legislatures',
      failure: 'no-mechanism',
      note: 'Mandate authority ran through executives and health officials',
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
      note: 'Participation with formal authority produced the best group outcome',
      detail: paragraph(`
        The November 2020 choice between state allocation and the IHS route let
        tribal governments set their own prioritization, and by July 2021
        American Indian and Alaska Native people had the highest vaccination
        rate of any group. The case's clearest instance of participation with
        formal authority producing a measured favorable endpoint.
      `),
      anchors: ['Indian Health Service route'],
      sources: [source('PBS NOVA 2021', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
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
        the public could misinterpret the findings. The agency itself judged
        transparency risky; no study measures the trust cost of the
        withholding.
      `),
      anchors: ['changing recommendations had confused'],
      sources: [source('NACWA reprint of NYT 2022', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects')]
    })
  ],

  impacts: [
    impact({
      name: 'Deaths and hospitalizations averted by vaccination',
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
            Commonwealth Fund modeling of the first two years of the vaccine
            program.
          `),
          grade: 'strong',
          sources: [source('Commonwealth Fund 2022', 'https://www.commonwealthfund.org/blog/2022/two-years-covid-vaccines-prevented-millions-deaths-hospitalizations')]
        })
      ]
    }),
    impact({
      name: 'Deaths among unvaccinated adults',
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
            Peterson-KFF estimated approximately 234,000 preventable adult
            deaths; the European Journal of Epidemiology replication found at
            least 232,000 (95% CI 214,000 to 250,000).
          `),
          grade: 'strong',
          sources: [
            source('Peterson-KFF', 'https://www.healthsystemtracker.org/brief/covid19-and-other-leading-causes-of-death-in-the-us/'),
            source('Eur J Epidemiol 2023', 'https://pubmed.ncbi.nlm.nih.gov/37580441/')
          ]
        })
      ]
    }),
    impact({
      name: 'The racial vaccination gap',
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
            CDC MMWR reported the gap narrowing substantially by late 2021; the
            largest measured uptake effects in the record run through access
            interventions, not persuasion.
          `),
          grade: 'moderate',
          sources: [source('CDC MMWR 2022', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            The Annenberg panel tested five explanations for the Black-White
            narrowing and found only knowledge about safety and efficacy mediated
            it; neither differential access nor media use explained the increase.
            Attribution of the narrowing to the access push is unresolved.
          `),
          grade: 'moderate',
          sources: [source('Annenberg Public Policy Center', 'https://www.annenbergpublicpolicycenter.org/publication/what-caused-the-narrowing-of-black-white-covid-19-vaccination-disparity-in-the-us-a-test-of-5-hypotheses/')]
        })
      ]
    }),
    impact({
      name: 'Vaccination uptake after mandates',
      measures: paragraph(`
        Mandate announcements abroad were followed by a 66% increase in weekly
        first doses and cumulative gains of 5 to 12 points (Canada, France,
        Italy, Germany). US state mandates produced no detectable uptake change
        and were followed by lower booster and flu vaccination. The federal
        rule itself was stayed before enforcement, so the US evidence comes from
        state mandates.
      `),
      from: [
        { anchor: 'roughly 100 million Americans', strength: 'contested', note: 'Strong abroad, null in the US; the jurisdictional split is itself unstudied' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Nature Human Behaviour 2022 difference-in-differences estimates
            across national mandates.
          `),
          grade: 'strong',
          sources: [source('Nature Human Behaviour 2022', 'https://www.nature.com/articles/s41562-021-01272-9')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            Rains et al. (PNAS 2024) found US state mandates did not influence
            uptake and depressed later booster and flu vaccination; a published
            reply letter contests the analysis and needs library retrieval.
          `),
          grade: 'moderate',
          quote: 'COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates',
          sources: [source('Rains et al. 2024 (abstract)', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Share everything, early and openly',
      method: 'Open data & public briefings',
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
                vaccine features increased trust in health authorities; vague
                reassurance lowered both acceptance and trust and fed conspiracy
                beliefs.
              `),
              grade: 'strong',
              quote: 'Openness ensures long-term trust, and this is crucial if we are to be revaccinated, or in relation to the next major health crisis.',
              sources: [source('Petersen et al. (release)', 'https://www.eurekalert.org/news-releases/829673')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2020 trust decline was partisan (Trump voters minus 0.8,
                significant; Biden voters minus 0.3, not), so a general-public
                transparency intervention may not reach the population whose
                trust fell.
              `),
              grade: 'moderate',
              sources: [source('RAND RR-A308-12', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
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
                had larger, statistically significant associations with lower
                infection rates and higher vaccine coverage in middle- and
                high-income countries.
              `),
              grade: 'moderate',
              quote: 'Measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates.',
              sources: [source('Bollyky et al. (abstract)', 'https://www.polisci.washington.edu/research/publications/pandemic-preparedness-and-covid-19-exploratory-analysis-infection-and')]
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
                counties raised doses by about 103 per county at about $1 per
                dose.
              `),
              grade: 'strong',
              quote: 'the campaign increased the number of vaccines in the average treated county by 103',
              sources: [
                source('Scientific Reports 2024', 'https://www.nature.com/articles/s41598-024-54441-x'),
                source('Larsen et al. (arXiv)', 'https://arxiv.org/abs/2203.02625')
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
                Two independent estimates put preventable adult deaths at 232,000
                to 234,000 for June 2021 to March 2022.
              `),
              grade: 'strong',
              sources: [source('Eur J Epidemiol 2023', 'https://pubmed.ncbi.nlm.nih.gov/37580441/')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Taiwan CECC daily briefings',
          where: 'Taiwan', when: '2020',
          authority: 'National government practice',
          outcome: paragraph(`
            Daily briefings and app-based case updates coincided with government
            sources scoring highest on credibility. Correlational, single survey,
            confounded national context.
          `),
          strength: 'weak',
          sources: [source('Scientific Reports 2022', 'https://www.nature.com/articles/s41598-022-20312-6')]
        }),
        comparable({
          name: 'NYT, JHU and the COVID Tracking Project',
          where: 'United States', when: '2020-2023',
          authority: 'Private substitution for a state function',
          outcome: paragraph(`
            Proof the function was performable at scale; the Times ended it in
            2023 when agencies reported less frequently and less reliably. No
            measured trust consequence.
          `),
          strength: 'moderate',
          sources: [source('NACWA reprint of NYT', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Public deliberation before any mandate',
      method: 'Citizens assembly, minipublic',
      anchor: 'majorities of Americans already supported',
      where: 'Federal, before the September 9, 2021 announcement; or New York City before its November 1 municipal mandate',
      when: paragraph(`
        June to August 2021. A mini-public convened in June 2021 and reporting
        by late August would have preceded both Executive Order 14043 and the
        OSHA rule, the two instruments the Senate and the Supreme Court later
        cut down. The workshop framing accepts regional variation: some places
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
                raised perceived procedural fairness 0.7 points and acceptance 0.4
                points, driven by citizens with low political trust.
              `),
              grade: 'moderate',
              quote: 'The legitimacy-generating effects of mini-publics are driven by citizens with low political trust.',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The gain largely disappears when the recommendation is rejected.
                For a government that intends to mandate regardless, convening an
                assembly it may override carries a measured legitimacy downside.
              `),
              grade: 'moderate',
              sources: [source('Germann et al. 2024', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
            })
          ]
        }),
        propLink({
          name: 'Legitimacy improves compliance',
          claim: paragraph(`
            Perceived legitimacy improves compliance with the mandate or reduces
            backlash.
          `),
          strength: 'unstudied',
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Adjacent evidence runs both directions: requirements strengthened
                vaccination intentions across groups and reactance levels
                (preregistered experiment, N=606), and the first large hospital
                mandate saw 153 of 25,000 employees leave; against that, US state
                mandates showed no uptake change and later spillover costs.
              `),
              grade: 'moderate',
              quote: 'Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance.',
              sources: [
                source('Albarracin et al. 2021', 'https://www.nature.com/articles/s41598-021-00256-z'),
                source('Texas Tribune 2021', 'https://www.texastribune.org/2021/06/23/texas-hospital-houston-methodist-vaccine-employees-fired-resign/')
              ]
            })
          ]
        }),
        propLink({
          name: 'Mandates raise uptake',
          claim: paragraph(`
            A mandate carrying deliberative legitimacy raises uptake at least as
            much as one imposed without it, with less backlash. The evidence
            below tests mandates alone; the deliberative increment is untested.
          `),
          strength: 'contested',
          evidence: [
            evidence({
              finding: paragraph(`
                National mandate announcements abroad were followed by a 66%
                increase in weekly first doses and cumulative gains up to 12
                points.
              `),
              grade: 'strong',
              sources: [source('Nature Human Behaviour 2022', 'https://www.nature.com/articles/s41562-021-01272-9')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                US state mandates produced no detectable change and depressed
                later booster and flu uptake.
              `),
              grade: 'moderate',
              sources: [source('Rains et al. 2024 (abstract)', 'https://experts.arizona.edu/en/publications/us-state-vaccine-mandates-did-not-influence-covid-19-vaccination-/')]
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
                232,000 to 234,000 preventable adult deaths among the
                unvaccinated, June 2021 to March 2022.
              `),
              grade: 'strong',
              sources: [source('Eur J Epidemiol 2023', 'https://pubmed.ncbi.nlm.nih.gov/37580441/')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'France, Collectif citoyen sur la vaccination',
          where: 'France', when: '01-06/2021',
          authority: 'Advisory to the Health Ministry during rollout',
          outcome: paragraph(`
            35 randomly selected citizens, seven working sessions, answering
            ministry questions including on mandates. The one national case of
            deliberation running alongside a vaccination campaign; no outcome
            evaluation exists.
          `),
          strength: 'weak',
          sources: [source('Missions Publiques', 'https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19')]
        }),
        comparable({
          name: 'France, 2016 vaccination consultation and the 2018 mandate law',
          where: 'France', when: '2016-2018',
          authority: 'Consultative process preceding a parliamentary mandate',
          outcome: paragraph(`
            The one located instance of the exact sequence: consultation, then a
            law extending infant mandates from 3 to 11 vaccines. The critical
            literature disputes that the citizen jury itself recommended the
            mandate; coverage studies remain unfetched.
          `),
          strength: 'moderate',
          sources: [source('Eurosurveillance 2018', 'https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2018.23.17.18-00048')]
        }),
        comparable({
          name: 'South Korea, Shin-Gori reactor deliberation',
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
            Tracking of all 149 recommendations found 20 percent implemented and
            51 percent implemented in modified form, with roughly 29 percent
            dropped. The government was selective, prioritizing recommendations
            based on incentives rather than regulation, and was more responsive
            to more detailed recommendations. The measured record of what a
            binding promise is worth when a government keeps the final word.
          `),
          strength: 'strong',
          sources: [source('KNOCA briefing', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations')]
        }),
        comparable({
          name: 'Calgary fluoridation removal and reinstatement',
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
            source('Oral Health Group 2025', 'https://www.oralhealthgroup.com/dental-governance-regulations/calgarys-fluoride-reinstatement-serves-as-cautionary-tale-for-u-s-quebec-1003987839/'),
            source('McLaren et al.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9663766/')
          ]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let communities design how vaccines reach them',
      method: 'Community advisory & co-design',
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
          name: 'Co-design puts access where the barriers are',
          claim: paragraph(`
            Community co-design lands access infrastructure where the barriers
            actually are. The co-design component has not been isolated from
            supply prioritization in any study.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Protect Chicago Plus: neighborhood task forces designed outreach
                and distribution in 13 high-vulnerability zip codes; the
                vaccination rate ratio moved from 0.58 to 0.92 in eight weeks.
                Unidos en Salud delivered 20,792 doses with 98.4% second-dose
                completion, 70.5% Latinx clients.
              `),
              grade: 'moderate',
              quote: 'The city worked with each prioritized community to create a neighborhood task force composed of diverse representatives to design vaccine outreach and distribution strategies.',
              sources: [
                source('Public Health Reports 2023', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093'),
                source('PLOS ONE 2021', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')
              ]
            }),
            evidence({
              finding: paragraph(`
                Tribal self-governance is the one US case where the deciding
                community held formal authority rather than advisory status, and
                the group outcome led the nation by July 2021. Confounded by the
                IHS supply channel and community cohesion.
              `),
              grade: 'moderate',
              sources: [source('PBS NOVA 2021', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
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
              sources: [source('PLOS ONE 2021', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')]
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
                The distance-uptake association is negative in 98% of 6,096
                specifications; a Swiss mobile-vaccination cluster trial moved
                uptake from 3.8% to 12.8%, a 3.4x effect. The largest measured
                uptake effects in the record run through access, not persuasion.
              `),
              grade: 'strong',
              sources: [source('PNAS Nexus 2023', 'https://academic.oup.com/pnasnexus/article/2/12/pgad411/7459517')]
            })
          ]
        }),
        propLink({
          name: 'Equitable uptake narrows the gap earlier',
          claim: paragraph(`
            Equitable uptake narrows the racial gap earlier than it narrowed in
            fact, cutting the never-estimated mortality cost of the spring 2021
            lag.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                By end of November 2021 at-least-one-dose coverage was similar
                across groups; the specific failure the intervention targets is
                documented, such as a federal site delivering nearly 3 of 4 doses
                to White recipients in a 33.8% White city.
              `),
              grade: 'moderate',
              sources: [source('CDC MMWR 2022', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The Annenberg panel found only safety-and-efficacy knowledge
                mediated the observed narrowing; the racial decomposition of
                preventable deaths remains unestimated.
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
                Two independent estimates put preventable adult deaths at 232,000
                to 234,000 for June 2021 to March 2022; both report by age, never
                by race, so the equity share of the toll remains unestimated.
              `),
              grade: 'strong',
              sources: [source('Eur J Epidemiol 2023', 'https://pubmed.ncbi.nlm.nih.gov/37580441/')]
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
            Coverage rate ratio 0.58 to 0.92 in eight weeks across 13
            high-vulnerability zip codes. No randomization; co-design bundled
            with supply.
          `),
          strength: 'moderate',
          sources: [source('Public Health Reports 2023', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
        }),
        comparable({
          name: 'Community-based monitoring of clinics, Uganda',
          where: 'Uganda', when: '2004-2005',
          authority: 'Randomized; communities set monitoring priorities',
          outcome: paragraph(`
            A 33 percent reduction in under-5 mortality (90 percent CI 8 to 64
            percent, roughly 550 averted deaths) and 20% higher utilization in
            treatment communities, with infant weight-for-age up 0.14 z. The
            cleanest causal chain from a designed community-voice instrument to a
            mortality endpoint; the wide interval is the honest bridge to a
            larger replication that found much weaker effects.
          `),
          strength: 'strong',
          sources: [source('Björkman and Svensson, QJE 2009', 'https://www.jakobsvensson.com/uploads/9/9/1/0/99107788/124-2-735.pdf')]
        }),
        comparable({
          name: 'Tribal IHS-route vaccination',
          where: 'United States', when: '11/2020 onward',
          authority: 'Formal allocation authority, own supply channel',
          outcome: paragraph(`
            Highest group vaccination rate in the country by July 2021 (45.5%
            one-dose against 33.7% for White Americans). Whether it belongs under
            co-design or devolved authority is a pending category call.
          `),
          strength: 'moderate',
          sources: [source('PBS NOVA 2021', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')]
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
          sources: [source('bioRxiv preprint', 'https://www.biorxiv.org/content/10.1101/661959v1.full.pdf')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Fund evaluation alongside the programs',
      method: 'Built-in program evaluation',
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
        used and shared, rather than a workshop-authored intervention.
      `),
      banner: true,
      impactsMeasured: [],
      impactsConjectured: ['Effect estimates exist for the next emergency', 'Allocation shifts toward instruments with measured effects', 'Accountability for public money'],
      links: [
        propLink({
          name: 'Requiring evaluation produces evaluations',
          claim: paragraph(`
            Requiring evaluation in award terms produces evaluations.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The GSA Office of Evaluation Sciences runs randomized evaluations
                embedded in federal health programs at samples over 55,000,
                demonstrating administrative feasibility; oversight bodies
                documented the absence the proposal fixes.
              `),
              grade: 'moderate',
              sources: [
                source('OES vaccination portfolio', 'https://oes.gsa.gov/vaccines/'),
                source('GAO-22-104457', 'https://www.gao.gov/products/gao-22-104457')
              ]
            })
          ]
        }),
        propLink({
          name: 'Evidence changes later decisions',
          claim: paragraph(`
            Effect estimates change later allocation, within the pandemic and in
            the next emergency.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                The OES portfolio's embedded evaluations corrected an optimistic
                published literature, the epistemic service the proposal buys;
                whether any agency reallocated because of it was not identified.
              `),
              grade: 'weak',
              caveat: 'Feasibility and correction evidence, not a test of decisions changing.',
              quote: 'behaviorally-informed direct communications can increase vaccination rates at scale but may have smaller, less reliable effects than the published literature suggests',
              sources: [source('OES vaccination portfolio', 'https://oes.gsa.gov/vaccines/')]
            })
          ]
        }),
        propLink({
          name: 'Better allocation raises uptake',
          claim: paragraph(`
            Reallocation toward measured instruments raises uptake and lowers
            deaths. Conjectured by construction; no study can exist for a policy
            not adopted.
          `),
          strength: 'unstudied'
        })
      ],
      comparables: [
        comparable({
          name: 'Progresa conditional cash transfers',
          where: 'Mexico', when: '1997 onward',
          authority: 'Evaluation designed into the rollout, external evaluator',
          outcome: paragraph(`
            Randomized phased entry with IFPRI as external evaluator produced
            measured impacts (consumption up 22%, child malnutrition down 17.2%,
            secondary enrollment up 11% for girls and 7.5% for boys) and the
            program survived a change of government. Estimated benefit-cost
            ratios of the evaluation itself considerably exceed one, the one
            figure about buying evaluation rather than about the program.
          `),
          strength: 'strong',
          sources: [
            source('DMEO case study', 'https://dmeo.gov.in/sites/default/files/2021-08/Package2_WCD_CaseStudy19.pdf'),
            source('Behrman 2010', 'https://ideas.repec.org/a/eee/wdevel/v38y2010i10p1473-1485.html')
          ]
        }),
        comparable({
          name: 'GSA Office of Evaluation Sciences portfolio',
          where: 'United States', when: '2021 onward',
          authority: 'Embedded randomized evaluation in federal delivery',
          outcome: paragraph(`
            Measured effects of 0.27 and 0.7 percentage points from letter and
            postcard reminders at scale; the CVS megastudy added +1.05 points on
            boosters across 3.66 million patients.
          `),
          strength: 'strong',
          sources: [source('OES', 'https://oes.gsa.gov/vaccines/')]
        })
      ],
      sources: []
    })
  ]
});
