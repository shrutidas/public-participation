import {
  spineData, mechanism, impact, spineProposal, outcome, claim, supportingCase,
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
      sources: [
        source('NACWA (New York Times excerpt)', 'https://www.nacwa.org/news-publications/news-detail/2022/02/22/the-c.d.c.-isn-t-publishing-large-portions-of-the-covid-data-it-collects'),
        source('CBN News', 'https://cbn.com/news/politics/cdc-withheld-important-covid-19-data-america-report-says')
      ]
    })
  ],

  impacts: [
    impact({
      name: 'Vaccines prevented millions of deaths and hospitalizations',
      found: '12/2022',
      headline: paragraph(`
        Vaccines prevented more than 3 million deaths and 18 million
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
      name: 'Vaccination could have saved about 232,000 more adults',
      found: '04/2022',
      headline: paragraph(`
        Two independent estimates find that vaccines could have saved roughly
        232,000 adults who died between June 2021 and March 2022.
      `),
      measures: paragraph(`
        Two independent estimates find that vaccines could have saved roughly
        232,000 to 234,000 adults who died between June 2021 and March 2022.
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
      name: 'The racial gap in vaccination narrowed',
      found: '06/2022',
      headline: paragraph(`
        The Black-White vaccination gap shrank from about 14 points at the April
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
        }),
        // The gap in deaths the vaccination gap sat on top of.
        evidence({
          headline: 'Black, Latino, and American Indian and Alaska Native people died of COVID-19 in the hospital at far higher rates than White people in the first pandemic year.',
          finding: paragraph(`
            Acosta et al. (2021) counted COVID-19 hospital deaths in 99 counties across 14 states from March 2020 to February 2021. After adjusting for age, the death rate was 2.6 times the White rate for Black people, 3.9 times for Latino people, and 7.2 times for American Indian and Alaska Native people.
          `),
          grade: 'strong',
          quote: 'American Indian or Alaska Native, Latino, Black, and Asian or Pacific Islander persons were more likely than White persons to have a COVID-19–associated hospitalization, ICU admission, or in-hospital death during the first year of the US COVID-19 pandemic',
          caveat: 'Counts only deaths in the hospital, and mostly covers the months before vaccines were widely available.',
          sources: [source('Acosta et al. 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8531997/')]
        }),
        evidence({
          headline: 'Racial gaps in COVID-19 deaths persisted into 2021, after vaccines arrived.',
          finding: paragraph(`
            Andrasfay and Goldman (2022) estimated how much the pandemic cut life expectancy by race and ethnicity. In 2020, Black and Latino losses were more than twice the White loss. In 2021 they were slightly below twice, mostly because White deaths rose faster. “Our estimates indicate that racial/ethnic disparities have persisted.”
          `),
          grade: 'moderate',
          quote: 'Our estimates indicate that racial/ethnic disparities have persisted',
          caveat: 'The 2021 figures are projections, and life expectancy is a summary of deaths, not a count.',
          sources: [source('Andrasfay and Goldman 2022', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9432732/')]
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
      name: 'Mandates raised vaccination abroad but not in US states',
      found: '06/2022',
      headline: paragraph(`
        First doses jumped 66% after countries abroad announced mandates. US
        state mandates did not change uptake, and booster and flu vaccination
        fell afterward.
      `),
      measures: paragraph(`
        Weekly first doses rose 66% after Canada, France, Italy, and Germany
        announced mandates, with cumulative gains of 5 to 12 points. US state
        mandates did not change uptake, and booster and flu vaccination fell
        afterward. The Supreme Court stayed the federal rule before anyone
        enforced it, so the US evidence comes from state mandates.
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
      method: 'Proactive Data Disclosure',
      summary: 'CDC commits to county-level open dashboards and recurring on-record briefings from the first week of the rollout, including unfavorable findings.',
      anchor: 'ACIP voted 11 to 0',
      where: 'Federal; CDC',
      when: paragraph(`
        December 2020 to January 2021, at the start of the vaccination program: commit to recurring
        public telebriefings and county-level open dashboards before the rollout's persuasion phase,
        and hold that cadence through 2021, the year CDC held two telebriefings. The documented gap
        was federal: the county data vacuum that newspapers filled, and the withheld booster and
        hospitalization data of 2021-22.
      `),
      description: paragraph(`
        Require CDC to publish county-level vaccination, case, hospitalization, and adverse-event
        data on open dashboards from December 2020 through the rollout. Require recurring on-record
        public briefings, including findings unfavorable to the vaccines. The duty falls on the
        federal agency; states and the public are users of the data. Briefings run on a fixed
        schedule with questions taken, and the agency must state what it does not yet know. This is
        a transparency commitment. It does not create a participation right. In 2021 CDC held two
        telebriefings, newspapers filled the county-data vacuum, and CDC withheld booster and
        hospitalization data in 2021-22. The randomized evidence suggests openness about negatives
        raises trust in the authorities even when it lowers short-run acceptance.
      `),
      outcome: outcome({
        text: 'Regular public data and briefings build trust in government, raise compliance with health rules, and reduce fear and misinformation.',
        measured: null,
        claims: [
          claim({
            text: 'Openness about bad news keeps trust in public health authorities.',
            evidence: [
              evidence({
                headline: 'Being open about a vaccine\'s downsides raised trust in health authorities, even though it made people warier of the shot.',
                finding: paragraph(`
                  In preregistered experiments with more than 13,000 Americans and Danes, messages
                  disclosing a vaccine’s negative features lowered willingness to take it but raised
                  trust in the authorities. “The evidence demonstrates that transparent negative
                  communication may indeed harm vaccine acceptance here and now but that it
                  increases trust in health authorities.” Vague reassurance did no better on
                  acceptance and led to lower trust and more belief in conspiracy theories. The
                  study measures attitudes right after people read one message.
                `),
                grade: 'strong',
                quote: 'The evidence demonstrates that transparent negative communication may indeed harm vaccine acceptance here and now but that it increases trust in health authorities.',
                sources: [source('Petersen, Bor, Jørgensen and Lindholt 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2024597118')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Trust in the disease control agency fell during 2020 among Trump voters and nonvoters, while Biden voters barely moved.',
                finding: paragraph(`
                  The same national panel rated its trust in the agency in May and again in October
                  2020, on a scale from 0 to 10. Trust fell 0.8 points among people intending to
                  vote for Donald Trump and 1.1 points among people voting for someone else or not
                  voting, both significant, against a drop of 0.3 among Biden voters, which was not.
                  The authors write that views of the agency “are now strongly politicized”.
                `),
                grade: 'moderate',
                quote: 'are now strongly politicized',
                sources: [source('Pollard and Davis 2021, RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Taiwan Daily Epidemic Briefings',
                where: 'Taiwan', when: '2020',
                authority: 'National government practice',
                outcome: paragraph(`
                  Taiwan’s disease control agency and its epidemic command center held daily press
                  conferences and posted updates every day through a messaging app. In an online
                  survey of 610 Taiwanese adults, government information was rated more credible
                  than news media, the internet, social media, academic institutes, friends or
                  family. The same respondents thought themselves less likely than others to be
                  infected.
                `),
                strength: 'weak',
                sources: [source('Yueh and colleagues 2022, Scientific Reports', 'https://doi.org/10.1038/s41598-022-20312-6')]
              })
            ]
          }),
          claim({
            text: 'People who trust their government follow its health rules more closely.',
            evidence: [
              evidence({
                headline: 'When European governments announced lockdowns, people in regions that already trusted their politicians cut unnecessary trips more.',
                finding: paragraph(`
                  Trust measured before the pandemic predicted how sharply travel fell once
                  lockdowns began across 233 regions in 19 countries. “Using a double difference
                  approach around the time of lockdown announcements, we find that high-trust
                  regions decrease their mobility related to non-necessary activities significantly
                  more than low-trust regions.” Stricter rules cut travel further where trust was
                  higher.
                `),
                grade: 'moderate',
                quote: 'Using a double difference approach around the time of lockdown announcements, we find that high-trust regions decrease their mobility related to non-necessary activities significantly more than low-trust regions.',
                sources: [source('Bargain and Aminjonov 2020, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2020.104316')]
              }),
              evidence({
                headline: 'After American stay-at-home orders took effect, people in high-trust counties cut their travel more than people in low-trust counties.',
                finding: paragraph(`
                  Using phone records of trips and distance traveled, the authors find that
                  “mobility decreases significantly more in high-trust counties than in low-trust
                  counties after the stay-at-home orders are implemented, with larger effects for
                  more stringent orders”. The gap was widest for confidence in the press and in
                  government, and narrower for confidence in medicine and science.
                `),
                grade: 'moderate',
                quote: 'Using cell phone data measuring changes in non-essential trips and average distance traveled, we find that mobility decreases significantly more in high-trust counties than in low-trust counties after the stay-at-home orders are implemented, with larger effects for more stringent orders.',
                sources: [source('Brodeur, Grigoryeva and Kattan 2021, Journal of Population Economics', 'https://doi.org/10.1007/s00148-021-00848-z')]
              }),
              evidence({
                headline: 'Countries where people trusted their government had lower infection rates, and richer ones also reached higher vaccine coverage.',
                finding: paragraph(`
                  Across 177 countries, “measures of trust in the government and interpersonal
                  trust, as well as less government corruption, had larger, statistically
                  significant associations with lower standardised infection rates”. The link to
                  vaccine coverage held among middle-income and high-income countries, where
                  vaccines were more widely available.
                `),
                grade: 'moderate',
                quote: 'Measures of trust in the government and interpersonal trust, as well as less government corruption, had larger, statistically significant associations with lower standardised infection rates.',
                sources: [source('COVID-19 National Preparedness Collaborators 2022, The Lancet', 'https://doi.org/10.1016/S0140-6736(22)00172-6')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Across twelve countries, people who trusted scientists followed the rules more closely, while trust in government sometimes pushed the other way.',
                finding: paragraph(`
                  Following the same people through 2020, trust in scientists drove support for and
                  compliance with restrictions. “The effect of trust in government is more ambiguous
                  and tends to diminish support for and compliance with NPIs in countries where the
                  recommendations from scientists and the government were not aligned.” The
                  abbreviation stands for nonpharmaceutical interventions.
                `),
                grade: 'moderate',
                quote: 'The effect of trust in government is more ambiguous and tends to diminish support for and compliance with NPIs in countries where the recommendations from scientists and the government were not aligned.',
                sources: [source('Algan, Cohen, Davoine, Foucault and Stantcheva 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2108576118')]
              }),
              evidence({
                headline: 'Partisanship, more than income or news habits, tracked which American counties stayed unvaccinated.',
                finding: paragraph(`
                  Across 2,885 counties, “political affiliation, as determined by the proportion of
                  votes received by the Republican candidate in the 2020 presidential election, has
                  the strongest association with our response variable, the percent of the
                  population that received no COVID-19 vaccine”. Median household income came next,
                  and cable news viewing and online misinformation showed no significant link.
                `),
                grade: 'moderate',
                quote: 'political affiliation, as determined by the proportion of votes received by the Republican candidate in the 2020 presidential election, has the strongest association with our response variable, the percent of the population that received no COVID-19 vaccine',
                sources: [source('Dong, Nixon and Gardner 2024, Scientific Reports', 'https://doi.org/10.1038/s41598-024-54441-x')]
              }),
              evidence({
                headline: 'Counties shown an advertisement of Donald Trump urging vaccination got more shots, though the gain was uncertain.',
                finding: paragraph(`
                  Counties were chosen at random to see a short video of the former president
                  recommending the vaccine. “Results indicate that the number of vaccines increased
                  in the average treated county by 103 (with a one-tailed P value of 0.097)”, about
                  a dollar of advertising per extra vaccination across 1,014 treated counties. The
                  authors add that at a 95 percent confidence level they cannot rule out no effect.
                  A matched messenger moved behavior where general trust messaging did not.
                `),
                grade: 'moderate',
                quote: 'Results indicate that the number of vaccines increased in the average treated county by 103 (with a one-tailed P value of 0.097).',
                sources: [source('Larsen and colleagues 2023, Science Advances', 'https://doi.org/10.1126/sciadv.adg9434')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'Clear, regular official information reduces fear.',
            evidence: [
              evidence({
                headline: 'Early in the outbreak in China, people who had up-to-date, accurate health information reported less anxiety and stress.',
                finding: paragraph(`
                  In a survey of 1,210 people across 194 Chinese cities at the end of January 2020,
                  “specific up-to-date and accurate health information (e.g., treatment, local
                  outbreak situation) and particular precautionary measures (e.g., hand hygiene,
                  wearing a mask) were associated with a lower psychological impact of the outbreak
                  and lower levels of stress, anxiety, and depression”. The sample was recruited
                  online and cannot separate official from other sources.
                `),
                grade: 'moderate',
                quote: 'Specific up-to-date and accurate health information (e.g., treatment, local outbreak situation) and particular precautionary measures (e.g., hand hygiene, wearing a mask) were associated with a lower psychological impact of the outbreak and lower levels of stress, anxiety, and depression',
                sources: [source('Wang and colleagues 2020, International Journal of Environmental Research and Public Health', 'https://doi.org/10.3390/ijerph17051729')]
              }),
              evidence({
                headline: 'Americans who ran into conflicting virus information reported more acute stress and more symptoms of depression.',
                finding: paragraph(`
                  Across three national samples totaling 6,514 people in spring 2020,
                  “preexisting mental and physical health diagnoses, daily COVID-19-related media
                  exposure, conflicting COVID-19 information in media, and secondary stressors were
                  all associated with acute stress and depressive symptoms”. Heavier daily news
                  exposure also went with more distress, so volume alone did not calm people.
                `),
                grade: 'moderate',
                quote: 'Preexisting mental and physical health diagnoses, daily COVID-19-related media exposure, conflicting COVID-19 information in media, and secondary stressors were all associated with acute stress and depressive symptoms.',
                sources: [source('Holman, Thompson, Garfin and Silver 2020, Science Advances', 'https://doi.org/10.1126/sciadv.abd5390')]
              }),
              evidence({
                headline: 'Migrant workers who got virus information in a live phone call ended up less anxious than those sent the same information by text.',
                finding: paragraph(`
                  Workers in India were assigned at random to receive the same information by text
                  message, recorded audio, or a live call. “Phone calls increased knowledge among
                  individuals without smartphones and reduced depression and anxiety overall.” How
                  crisis information reaches people changed their anxiety, though every group was
                  informed and the sender was a research team, not a health authority.
                `),
                grade: 'moderate',
                quote: 'Phone calls increased knowledge among individuals without smartphones and reduced depression and anxiety overall.',
                sources: [source('Sadish, Adhvaryu and Nyshadham 2021, Journal of Development Economics', 'https://doi.org/10.1016/j.jdeveco.2021.102699')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Germans who checked virus news more often and for longer reported more anxiety, not less.',
                finding: paragraph(`
                  In a survey of 6,233 adults in spring 2020, “frequency, duration and diversity of
                  media exposure were positively associated with more symptoms of depression and
                  unspecific and COVID-19 specific anxiety”. More frequent public information
                  carries a plausible cost, though the study cannot separate official briefings from
                  other media.
                `),
                grade: 'moderate',
                quote: 'Frequency, duration and diversity of media exposure were positively associated with more symptoms of depression and unspecific and COVID-19 specific anxiety.',
                sources: [source('Bendau and colleagues 2021, European Archives of Psychiatry and Clinical Neuroscience', 'https://doi.org/10.1007/s00406-020-01171-6')]
              }),
              evidence({
                headline: 'In Italy, official messages that stressed personal vulnerability went along with more fear in what people posted.',
                finding: paragraph(`
                  Studying more than 200,000 posts during the government’s stay-at-home campaign,
                  the authors find that “messages about people’s individual vulnerability and the
                  associated sense of an external locus of control correlated positively with levels
                  of fear”, while talk of European cooperation went with better mood. Official
                  communication moved feeling both ways, depending on content.
                `),
                grade: 'weak',
                quote: 'Conversely, messages about people\'s individual vulnerability and the associated sense of an external locus of control correlated positively with levels of fear.',
                sources: [source('Lerouge, Lema and Arnaboldi 2023, Government Information Quarterly', 'https://doi.org/10.1016/j.giq.2022.101798')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'Timely official information limits the spread of misinformation.',
            evidence: [
              evidence({
                headline: 'When the disease control agency answered a false health post itself, readers believed the falsehood less.',
                finding: paragraph(`
                  In an experiment using a simulated social media feed, “while a single correction
                  from another user did not reduce misperceptions, the CDC on its own could correct
                  misinformation”, and corrections worked best on the people who started out most
                  misinformed. Correcting cost the agency nothing in credibility.
                `),
                grade: 'moderate',
                quote: 'Using an experimental design, our results suggest that while a single correction from another user did not reduce misperceptions, the CDC on its own could correct misinformation.',
                sources: [source('Vraga and Bode 2017, Science Communication', 'https://doi.org/10.1177/1075547017731776')]
              }),
              evidence({
                headline: 'In an outbreak experiment, corrections from a government health agency fixed false beliefs better than corrections from other people.',
                finding: paragraph(`
                  Seven hundred American adults saw misinformation and then a rebuttal, a fuller
                  explanation, or nothing. Corrections fixed the false beliefs, and “government
                  agency and news media sources are found to be more successful in improving belief
                  accuracy compared to social peers”. The scenario was a one-off online vignette.
                `),
                grade: 'moderate',
                quote: 'Moreover, government agency and news media sources are found to be more successful in improving belief accuracy compared to social peers.',
                sources: [source('van der Meer and Jin 2020, Health Communication', 'https://doi.org/10.1080/10410236.2019.1573295')]
              }),
              evidence({
                headline: 'Countries whose governments started talking about the virus earlier saw less public interest in a major conspiracy theory.',
                finding: paragraph(`
                  Across 111 countries, the later a government began its risk communication relative
                  to its first case, the more people searched for conspiracy content: “a
                  one-standard deviation (26.2days) increase in communication lateness is associated
                  with a 26% increase in QAnon interest”. Governments that spoke early differ in
                  many ways, and a companion survey found only limited support for the same effect
                  on people’s own beliefs.
                `),
                grade: 'moderate',
                quote: 'A one-standard deviation (26.2days) increase in communication lateness is associated with a 26% increase in QAnon interest.',
                sources: [source('Chan, Rizio, Skali and Torgler 2021, Frontiers in Psychology', 'https://doi.org/10.3389/fpsyg.2021.681975')]
              }),
              evidence({
                headline: 'On a large microblog, rebuttals made users less willing to pass unverified news on, and the effect faded within days.',
                finding: paragraph(`
                  Studying the platform’s official rumor-rebuttal account, the authors find that
                  “refuting rumors reduces user willingness to forward positive or negative news,
                  with more impact on negative news”, strongest in the 72 hours after a rebuttal.
                  This measures spread rather than belief, but the rebuttals came from the platform,
                  not a health authority.
                `),
                grade: 'moderate',
                quote: 'Refuting rumors reduces user willingness to forward positive or negative news, with more impact on negative news.',
                sources: [source('Lu, Sun, Chen, Wang and Tan 2022, Frontiers in Public Health', 'https://doi.org/10.3389/fpubh.2022.765581')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Fact-checks cut false virus beliefs in three countries, then the correction wore off even when people saw it again.',
                finding: paragraph(`
                  Preregistered experiments in the United States, Great Britain and Canada found
                  fact-checks reduced the targeted false beliefs, especially among the people most
                  prone to them. “However, these reductions in COVID-19 misperception beliefs do not
                  persist over time in panel data even after repeated exposure.” A briefing schedule
                  would have to be continuous to matter.
                `),
                grade: 'moderate',
                quote: 'However, these reductions in COVID-19 misperception beliefs do not persist over time in panel data even after repeated exposure.',
                sources: [source('Carey and colleagues 2022, Nature Human Behaviour', 'https://doi.org/10.1038/s41562-021-01278-3')]
              }),
              evidence({
                headline: 'An official message debunking the vaccine and autism myth corrected the belief but left the most hesitant parents less willing to vaccinate.',
                finding: paragraph(`
                  In a two-wave experiment with 1,759 American parents, “refuting claims of an
                  MMR/autism link successfully reduced misperceptions that vaccines cause autism but
                  nonetheless decreased intent to vaccinate among parents who had the least
                  favorable vaccine attitudes”. None of the four official messages raised intent to
                  vaccinate.
                `),
                grade: 'moderate',
                quote: 'Refuting claims of an MMR/autism link successfully reduced misperceptions that vaccines cause autism but nonetheless decreased intent to vaccinate among parents who had the least favorable vaccine attitudes.',
                sources: [source('Nyhan, Reifler, Richey and Freed 2014, Pediatrics', 'https://doi.org/10.1542/peds.2013-2365')]
              })
            ],
            cases: []
          }),
          claim({
            text: 'A public data function at national scale is feasible.',
            evidence: [
              evidence({
                headline: 'Most public virus dashboards around the world were built by governments, and most covered a whole country.',
                finding: paragraph(`
                  An assessment of 158 public dashboards from 53 countries in July 2020 found that
                  “dashboards were predominately developed by government authorities (100/158,
                  63.0%) and were national (93/158, 58.9%) in scope”. Quality varied: about a
                  quarter did not say where their data came from, and only one in five explained
                  what the numbers meant.
                `),
                grade: 'moderate',
                quote: 'Dashboards were predominately developed by government authorities (100/158, 63.0%) and were national (93/158, 58.9%) in scope.',
                sources: [source('Ivanković and colleagues 2021, Journal of Medical Internet Research', 'https://doi.org/10.2196/25682')]
              })
            ],
            counterEvidence: [],
            cases: [
              supportingCase({
                name: 'National Dashboards Across the European Region',
                where: '33 countries', when: '2020-2021',
                authority: 'National government practice',
                outcome: paragraph(`
                  Eighty people from 33 national dashboard teams described building public
                  dashboards under pressure. “Most dashboards were launched swiftly during the first
                  months of the pandemic, February to May 2020.” Teams worked with thin staffing,
                  urgent deadlines, and privacy constraints, and the authors conclude that initial
                  unpreparedness “was offset by high-level political endorsement, the
                  professionalism of teams, accelerated data improvements and immediate support with
                  commercial software solutions”.
                `),
                strength: 'moderate',
                sources: [source('Barbazza and colleagues 2022, Digital Health', 'https://doi.org/10.1177/20552076221121154')]
              }),
              supportingCase({
                name: 'Johns Hopkins University COVID-19 Dashboard',
                where: 'Global, run from the United States', when: '2020-2023',
                authority: 'University substitution for a state function',
                outcome: paragraph(`
                  A university engineering team launched a public global case tracker the day after
                  the first American case and ran it for years, with the data free to reuse. The
                  team reports that “as of June 1, 2022, the dashboard has served the global
                  audience for more than 30 consecutive months, totalling over 226 billion feature
                  layer requests and 3·6 billion page views”. It rested on government reporting
                  underneath, and the usage figures are the operators’ own.
                `),
                strength: 'moderate',
                sources: [
                  source('Dong, Du and Gardner 2020, The Lancet Infectious Diseases', 'https://doi.org/10.1016/S1473-3099(20)30120-1'),
                  source('Dong and colleagues 2022, The Lancet Infectious Diseases', 'https://doi.org/10.1016/S1473-3099(22)00434-0')
                ]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Citizens\' assembly shapes any vaccine mandate before it is imposed',
      method: 'Citizens\' Assembly',
      summary: 'Before ordering a mandate, the federal government or a city convenes a randomly selected assembly on the value tradeoff and must publicly answer its recommendation.',
      anchor: 'majorities of Americans already supported',
      where: 'Federal, before the September 9, 2021 announcement; or New York City before its November 1 municipal mandate',
      when: paragraph(`
        June to August 2021. A mini-public convened in June 2021 and reporting by late August would
        have preceded both Executive Order 14043 and the OSHA rule, the two instruments the Senate
        and the Supreme Court later cut down.
      `),
      description: paragraph(`
        Require the federal government, or a city considering its own mandate, to convene a randomly
        selected assembly of residents before imposing a vaccine mandate. Experts brief the assembly
        on the science, and the assembly weighs the value question: whether to mandate, for whom,
        and with what exemptions. How much force its conclusion carries is open, and the note lists
        the options. At a minimum the convening authority publishes the assembly's conclusion and a
        written response before acting. Existing federal and state vaccination law and emergency-use
        rules stay in place. The group accepted regional variation: “some places might decide not to
        vaccinate; so be it.” An assembly convened in June 2021 and reporting by late August would
        have preceded Executive Order 14043 and the OSHA rule. The Senate and the Supreme Court later
        cut down both.
      `),
      note: paragraph(`
        The group did not say how much say the assembly has, and the record does not settle it. The
        assembly could hold a binding yes or no on the mandate. It could set the exemption clauses
        of a rollout that is going ahead anyway. Or it could decide only how the mandate is
        explained to the community. People found mandates paternalistic and wanted a say; what "say"
        means is an open question for the reconvened group.
      `),
      outcome: outcome({
        text: 'A mandate residents helped shape holds trust in health guidance.',
        measured: null,
        claims: [
          claim({
            text: 'Deliberation before a decision raises its perceived legitimacy, most among people who distrust government.',
            evidence: [
              evidence({
                headline: 'People who distrust politics gained the most when a citizen panel helped make a decision.',
                finding: paragraph(`
                  A survey experiment in Ireland found that involving a citizen panel raised how
                  fair people judged the decision by 0.7 points on a ten point scale, and raised
                  their willingness to accept a decision that went against them by 0.4 points. The
                  authors find that “the legitimacy-enhancing effects of participatory processes are
                  driven by citizens with low political trust”.
                `),
                grade: 'moderate',
                quote: 'we find that the legitimacy-enhancing effects of participatory processes are driven by citizens with low political trust',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When politicians overturned the citizen panel, most of the gain in acceptance disappeared.',
                finding: paragraph(`
                  The same experiment found the gains “are largely limited to situations in which
                  their recommendations are honored”. With the recommendation overturned, people
                  still judged the process somewhat fairer, but they were no more willing to accept
                  the decision. It made no difference whether parliament or a referendum did the
                  overturning.
                `),
                grade: 'moderate',
                quote: 'these beneficial effects are largely limited to situations in which their recommendations are honored',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://journals.sagepub.com/doi/10.1177/00323217221137444')]
              }),
              evidence({
                headline: 'When politicians explained why they were setting the panel\'s advice aside, most of the lost legitimacy came back.',
                finding: paragraph(`
                  In a preregistered experiment, people rated decision making as less legitimate
                  when politicians departed from a citizen panel’s recommendation. “When politicians
                  communicate responsively about this, meaning that they show respect for the
                  recommendations and publicly justify why they deviated from them, legitimacy
                  perceptions substantially increase, generally reaching the level of those cases
                  where recommendations are followed.” It worked only where people found the reasons
                  valid. This is the written response the proposal promises.
                `),
                grade: 'moderate',
                quote: 'legitimacy perceptions substantially increase, generally reaching the level of those cases where recommendations are followed',
                sources: [source('Goovaerts and colleagues 2025, European Journal of Political Research', 'https://doi.org/10.1111/1475-6765.12711')]
              })
            ],
            cases: [
              supportingCase({
                name: 'France, Citizens\' Collective on Vaccination',
                where: 'France', when: '01-06/2021',
                authority: 'Advisory to the Economic, Social and Environmental Council during the rollout',
                outcome: paragraph(`
                  At the Prime Minister’s request, France’s Economic, Social and Environmental
                  Council convened 35 citizens drawn by lot, 33 from mainland France and two from
                  overseas. Over seven working sessions of two and a half days they answered the
                  government’s questions, including on compulsory vaccination. The organizers report
                  no evaluation of what the group changed.
                `),
                strength: 'weak',
                sources: [source('Missions Publiques', 'https://missionspubliques.org/pf/le-collectif-citoyen-sur-la-campagne-vaccinale-covid-19')]
              }),
              supportingCase({
                name: 'South Korea, Shin-Kori Reactor Deliberation',
                where: 'South Korea', when: '2017',
                authority: 'Non-binding recommendation accepted against the government\'s own position',
                outcome: paragraph(`
                  471 citizens, drawn by stratified random sampling from a pool of 20,000 across 160
                  strata, deliberated over a month in 2017. Of them, 59.5 percent supported resuming
                  reactor construction, while 53.2 percent favored reducing nuclear power in the
                  long run. The president accepted the non-binding result within a week, reversing
                  his own position. A later study reports that “despite the intensive deliberation
                  process, most people did not change their initial opinions; rather, they tended to
                  make judgments based on their values, especially their political ideologies”. The
                  coercion here ran the opposite way from a mandate.
                `),
                strength: 'weak',
                sources: [
                  source('Participedia', 'https://participedia.net/case/6875'),
                  source('Chung 2020, Energy Policy', 'https://doi.org/10.1016/j.enpol.2020.111724')
                ]
              })
            ]
          }),
          claim({
            text: 'People comply with rules they see as legitimate.',
            evidence: [
              evidence({
                headline: 'People followed lockdown rules mainly out of a sense of duty to the authorities, more than out of self-interest.',
                finding: paragraph(`
                  In a survey of 1,595 Australians early in the pandemic, “normative concerns
                  regarding duty to support the authorities dominated compliance decisions”, ahead of
                  self-interest and health worries. A review pooling 64 studies found that people who
                  see authority as legitimate are more likely to obey the law, while the direct path
                  from fair procedure to compliance was weak.
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
                headline: 'Requirements strengthened vaccination intentions even among people most prone to push back.',
                finding: paragraph(`
                  Across a survey and three experiments in the United States, telling people a
                  vaccine was required rather than left to them made them more willing to get it:
                  “requirements strengthened vaccination intentions across racial and ethnic groups,
                  across studies, and across levels of trait psychological reactance”. That held even
                  for the people most prone to push back.
                `),
                grade: 'moderate',
                quote: 'Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance.',
                sources: [source('Albarracin et al. 2021', 'https://www.nature.com/articles/s41598-021-00256-z')]
              }),
              evidence({
                headline: 'At one of the first US hospital systems to require the shot, 153 workers left and nearly 25,000 got vaccinated.',
                finding: paragraph(`
                  Houston Methodist announced on April 1, 2021 that staff had to be vaccinated to
                  keep their jobs. It “terminated or accepted the resignations of 153 workers”, while
                  “24,947 workers did get vaccinated by earlier deadlines”. The count shows how few
                  left. It cannot show what uptake would have been without the rule.
                `),
                grade: 'weak',
                quote: 'terminated or accepted the resignations of 153 workers',
                sources: [source('Texas Tribune', 'https://www.texastribune.org/2021/06/23/texas-hospital-houston-methodist-vaccine-employees-fired-resign/')]
              }),
              evidence({
                headline: 'COVID-19 vaccination in US states did not shift in the weeks around state mandates.',
                finding: paragraph(`
                  Using federal vaccination data, researchers found that “COVID-19 vaccine adoption
                  did not significantly change in the weeks before and after states implemented
                  vaccine mandates”. They also reported lower booster and flu uptake in mandate
                  states than in states that banned vaccine requirements, but a published reanalysis
                  reversed that result by dropping one control, and the authors agreed they “cannot
                  rule out this possibility definitively”.
                `),
                grade: 'moderate',
                quote: 'COVID-19 vaccine adoption did not significantly change in the weeks before and after states implemented vaccine mandates',
                sources: [source('Rains and Richards 2024, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2313610121')]
              })
            ],
            cases: [
              supportingCase({
                name: 'French Citizens Convention for Climate',
                where: 'France', when: '2019-2021',
                authority: 'Presidential promise to pass the proposals with “no filter”, which eroded',
                outcome: paragraph(`
                  The president promised to pass the convention’s proposals with “no filter”.
                  Tracking of all 149 recommendations found 20 percent implemented in full and 51
                  percent implemented in changed form or through another measure, while 22 percent
                  were abandoned, vetoed or left undone, and the rest were claimed as already covered
                  or as needing European action. The government was selective, favoring incentives
                  over regulation and responding more to detailed recommendations. Researchers who
                  studied the convention add that its process, “while succeeding in creating
                  consensus among the citizens who were involved”, failed to generate significant
                  support among the broader public.
                `),
                strength: 'moderate',
                sources: [
                  source('Knowledge Network on Climate Assemblies', 'https://www.knoca.eu/briefings/policy-impact-of-the-french-citizens-convention-for-the-climate-untangling-the-fate-of-the-citizens-recommendations'),
                  source('Giraudet et al. 2022, Humanities and Social Sciences Communications', 'https://doi.org/10.1057/s41599-022-01212-6')
                ]
              })
            ]
          }),
          claim({
            text: 'A mandate with public backing meets less backlash.',
            evidence: [
              evidence({
                headline: 'When one shot was made compulsory in a game, people wary of vaccines got angry and took the next voluntary shot far less often.',
                finding: paragraph(`
                  In a randomized game with real money at stake, “compulsory vaccination increased
                  the level of anger among individuals with a rather negative vaccination attitude,
                  whereas voluntary vaccination did not. This led to a decrease in vaccination uptake
                  by 39% in the second voluntary vaccination”. Compulsion in one place lowered
                  voluntary uptake elsewhere, and the drop sat with the hesitant. The effect is
                  identified inside a laboratory game, not on real vaccination.
                `),
                grade: 'moderate',
                quote: 'compulsory vaccination increased the level of anger among individuals with a rather negative vaccination attitude, whereas voluntary vaccination did not. This led to a decrease in vaccination uptake by 39% in the second voluntary vaccination',
                sources: [source('Betsch and Böhm 2016, European Journal of Public Health', 'https://doi.org/10.1093/eurpub/ckv154')]
              }),
              evidence({
                headline: 'People who did not want a vaccine mandate resented it most, and explaining why high coverage matters took some of that resentment away.',
                finding: paragraph(`
                  In a German experiment, being told vaccination was compulsory produced more
                  resentment than a voluntary policy: “being mandated to vaccinate elicited most
                  reactance when support for a mandate was low and the importance of high vaccination
                  rates was not explained”. That resentment went with lower intention to get an
                  unrelated flu shot. A person’s own support for a mandate is not the same thing as
                  public backing, and the study measures stated reactance, not behavior.
                `),
                grade: 'moderate',
                quote: 'Being mandated to vaccinate elicited most reactance when support for a mandate was low and the importance of high vaccination rates was not explained.',
                sources: [source('Sprengholz et al. 2022, Journal of Health Psychology', 'https://doi.org/10.1177/13591053211044535')]
              }),
              evidence({
                headline: 'People who disagreed with a decision on something they cared about accepted it more when voters had decided it directly.',
                finding: paragraph(`
                  In a German experiment, people read about a decision made either by a direct vote,
                  by a governing party, or by an expert committee. “For important issues, direct
                  democracy generates greater acceptance; this finding holds particularly for those
                  voters who do not agree with a collectively chosen outcome.” On issues people cared
                  little about, who decided made no difference. A referendum is not an assembly, and
                  none of the decisions were health mandates.
                `),
                grade: 'moderate',
                quote: 'Our results show that for important issues, direct democracy generates greater acceptance; this finding holds particularly for those voters who do not agree with a collectively chosen outcome.',
                sources: [source('Towfigh et al. 2016, Public Choice', 'https://doi.org/10.1007/s11127-016-0330-y')]
              }),
              evidence({
                headline: 'People judged a decision fairer when citizens had taken part in making it, even when the decision went against them.',
                finding: paragraph(`
                  Across twelve experiments in the Netherlands and Sweden, a decision reached with
                  citizen participation was rated fairer than the same decision made by
                  representatives alone. The re-analysis finds “higher fairness perceptions for a
                  participatory process than for a representative process across all twelve
                  experiments, even when the outcomes are unfavourable”. It measures fairness
                  judgments, not opposition or refusal, and none of the decisions were health
                  mandates.
                `),
                grade: 'moderate',
                quote: 'higher fairness perceptions for a participatory process than for a representative process across all twelve experiments, even when the outcomes are unfavourable',
                sources: [source('Werner and Marien 2022, British Journal of Political Science', 'https://doi.org/10.1017/S0007123420000459')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Telling people a citizens\' assembly had backed a lockdown extension did not make them any more willing to obey it.',
                finding: paragraph(`
                  In an experiment in the United States and the United Kingdom, people read a news
                  item about a lockdown extension decided after citizen deliberation, after a public
                  consultation, after politician deliberation, or with nothing said. “The findings
                  show minipublics are unlikely to foster public compliance during a health crisis.
                  On the contrary, reading about a minipublic could decrease compliance when
                  individuals are distrustful of minipublics.” None of the three processes beat saying
                  nothing. This is the closest test of the claim: the same coercive pandemic rule,
                  with and without citizen backing, and the backing bought nothing.
                `),
                grade: 'moderate',
                quote: 'The findings show minipublics are unlikely to foster public compliance during a health crisis. On the contrary, reading about a minipublic could decrease compliance when individuals are distrustful of minipublics.',
                sources: [source('Muradova and Suiter 2022, International Journal of Public Opinion Research', 'https://doi.org/10.1093/ijpor/edac026')]
              }),
              evidence({
                headline: 'France\'s health pass pushed doubters to get the shot without easing their doubts, and drew large protests.',
                finding: paragraph(`
                  The pass “elicited strong criticism from opposition parties, as well as protests
                  across France in early August attended by up to 240,000 people”, and was still
                  backed by around 30 percent of the population that September. Even so, “despite
                  protests and opposition, public attitudes toward COVID-19 vaccination do not seem to
                  have deteriorated”. Coverage stayed lower among the elderly, the poorest and the
                  most marginalized, and “the share of vaccinated people with doubts about the vaccine
                  increased from 44% to 61% after the health pass was implemented”. The doubt figure
                  compares people vaccinated before the pass with people vaccinated after it, so it
                  reflects who came forward late.
                `),
                grade: 'weak',
                quote: 'the share of vaccinated people with doubts about the vaccine increased from 44% to 61% after the health pass was implemented',
                sources: [source('Ward et al. 2022, Nature Medicine', 'https://doi.org/10.1038/s41591-021-01661-7')]
              }),
              evidence({
                headline: 'Whether people got the outcome they wanted mattered far more than how the decision was made.',
                finding: paragraph(`
                  Across a set of vignette and field experiments, the way a decision was reached moved
                  acceptance only a little. The authors contend “that democratic governments can
                  achieve little in terms of acceptance of policy decisions by the procedural means at
                  their disposal. Instead, outcome favorability is the dominant determinant of
                  decision acceptance.” For people who lose on the substance, process is a weak lever.
                `),
                grade: 'moderate',
                quote: 'democratic governments can achieve little in terms of acceptance of policy decisions by the procedural means at their disposal. Instead, outcome favorability is the dominant determinant of decision acceptance.',
                sources: [source('Esaiasson et al. 2019, British Journal of Political Science', 'https://doi.org/10.1017/S0007123416000508')]
              }),
              evidence({
                headline: 'A measles vaccine rule most parents endorsed still left the parents who resented it less likely to vaccinate against other diseases.',
                finding: paragraph(`
                  Of German parents surveyed after a measles vaccination requirement took effect, 74.1
                  percent endorsed it. Even so, “the higher parents’ levels of reactance, the lower
                  the vaccination intentions and the likelihood for the child to be vaccinated against
                  other diseases”. Parents who trusted institutions resented the rule less. Everyone
                  surveyed lived under the same requirement, so there is no less popular mandate to
                  set against it.
                `),
                grade: 'moderate',
                quote: 'The higher parents\' levels of reactance, the lower the vaccination intentions and the likelihood for the child to be vaccinated against other diseases.',
                sources: [source('Neufeind et al. 2022, BMC Public Health', 'https://doi.org/10.1186/s12889-022-14075-y')]
              })
            ],
            cases: [
              supportingCase({
                name: 'France, 2016 Vaccination Consultation and the 2017 Mandate Law',
                where: 'France', when: '2016-2018',
                authority: 'Consultative process preceding a parliamentary mandate',
                outcome: paragraph(`
                  France ran a national vaccination consultation in 2016, built on 44 hearings, more
                  than 10,000 public contributions online, and two juries, one of health
                  professionals and one of ordinary citizens. Its steering committee recommended
                  extending infant mandates, and parliament passed the law in December 2017 for
                  children born from January 2018. This is the one located instance of the sequence
                  the proposal describes. Ward and colleagues report the extension drew no public
                  backlash and left French vaccine confidence low, an assertion in a commentary with
                  no measure behind it.
                `),
                strength: 'weak',
                sources: [
                  source('Lévy-Bruhl et al. 2018, Eurosurveillance', 'https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2018.23.17.18-00048'),
                  source('Ward et al. 2022, Nature Medicine', 'https://doi.org/10.1038/s41591-021-01661-7')
                ]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Neighborhood task forces decide where and how vaccines are delivered',
      method: 'Neighborhood Co-Governance Board',
      summary: 'City health departments hand siting, hours, and outreach decisions for equity allocations to task forces of residents and local organizations.',
      anchor: '20,792 doses',
      where: 'City and county level, at the siting of scarce supply',
      when: paragraph(`
        February 2021, when the Federal Retail Pharmacy Program and the Community Vaccination
        Centers were being sited: hand siting and scheduling authority for the equity allocations to
        neighborhood task forces on the Protect Chicago Plus model, which launched January 25, 2021
        and existed in time. The decision point recurs in April 2021, when the binding constraint
        shifted from supply to access logistics.
      `),
      description: paragraph(`
        Give neighborhood task forces of residents, community organizations, clinics, churches, and
        employers shared authority over where, when, and how vaccines are delivered in
        high-vulnerability zip codes. The point is the point of distribution and who reaches it, not
        the supply chain: site selection, hours, mobile units, trusted messengers, and paid-time-off
        coordination. The city or county health department keeps control of supply, eligibility
        rules, and safety standards, and commits a share of doses to the task forces' plans. Task
        forces form in February 2021, when agencies were siting scarce federal supply, and again in
        April 2021 when the constraint became access. The task forces hold shared decision power,
        and the department publishes uptake by zip code. Delivery run this way also activates the
        neighborhood's anchor institutions and mutual aid networks, which the September review took
        to be part of the point. The June session notes have no line for this proposal, so the
        record does not show the group proposing it. Protect Chicago Plus launched January 25, 2021
        on this model. No study
        separates its co-governance component from the supply prioritization bundled with it, and
        none compares community-chosen sites with agency-chosen ones while holding supply constant.
      `),
      note: paragraph(`
        What follows when neighbors organize to help each other is only partly known. People who
        helped neighbors through organized community efforts early in the pandemic felt a stronger
        bond with their community, and that bond went with better mental health. Much of that
        activity faded after the first wave, at least in online mutual aid groups. Outside mutual
        aid, when villages ran their own local projects, residents took a bigger part in local
        decisions, but their social networks and trust did not change. Stronger everyday ties do
        matter in a crisis: in Chicago's deadly heat wave, people with friends nearby or group
        activities were less likely to die, and European regions with more social capital recorded
        fewer COVID-19 cases and deaths. No source shows whether pandemic mutual aid groups left a
        lasting mark on civic life or on how communities handle the next emergency.
      `),
      outcome: outcome({
        text: 'Community-run delivery raises trust and uptake, narrows the racial vaccination gap, lowers deaths, and strengthens neighborhood institutions.',
        measured: 'The racial gap in vaccination narrowed',
        claims: [
          claim({
            text: 'Community task forces put access where the barriers are.',
            evidence: [
              evidence({
                headline: 'After Chicago let neighborhood task forces design vaccine outreach in its hardest-hit zip codes, their vaccination rate moved much closer to the rest of the city\'s.',
                finding: paragraph(`
                  Under Protect Chicago Plus, “the city worked with each prioritized community to
                  create a neighborhood task force composed of diverse representatives to design
                  vaccine outreach and distribution strategies” in 13 high-vulnerability zip codes, 6
                  majority Latinx and 7 majority Black. First-dose coverage there rose from 58 percent
                  of the rate in other Chicago zip codes to 92 percent in under two months, then held
                  near 87 percent. The city widened vaccine eligibility in the same zip codes, so the
                  task forces' own share of the gain cannot be separated out.
                `),
                grade: 'moderate',
                quote: 'the city worked with each prioritized community to create a neighborhood task force composed of diverse representatives to design vaccine outreach and distribution strategies',
                sources: [source('Johnson et al. 2023, Public Health Reports', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
              }),
              evidence({
                headline: 'A neighborhood vaccination site in San Francisco\'s Mission District reached mostly Latino residents, many of them uninsured and without a regular doctor.',
                finding: paragraph(`
                  Unidos en Salud, a partnership of community groups, a university, and the health
                  department, gave 20,792 doses over 16 weeks. Of the people vaccinated, 70.5 percent
                  were Latinx and 98.4 percent completed both doses. “The most frequently reported
                  reasons for choosing vaccination at the site were its neighborhood location (28.6%),
                  easy and convenient scheduling (26.9%) and recommendation by someone they trusted
                  (18.1%).” The site had no comparison group, and the reasons are self-reported.
                `),
                grade: 'weak',
                quote: 'The most frequently reported reasons for choosing vaccination at the site were its neighborhood location (28.6%), easy and convenient scheduling (26.9%) and recommendation by someone they trusted (18.1%)',
                sources: [source('Marquez et al. 2021, PLOS ONE', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111')]
              }),
              evidence({
                headline: 'American Indian and Alaska Native people, many served by tribes that ran their own vaccine plans, had the highest vaccination rate of any group in federal tracking data.',
                finding: paragraph(`
                  Tribes could follow their state's plan or design their own: “Many tribes elected to
                  use their own plans.” In federal tracking data from early July 2021, 45.5 percent
                  of American Indian and Alaska Native people had at least one dose, against 33.7
                  percent of White people. A national survey of adults found lower coverage for this
                  group, and nothing compares tribes that ran their own plans with tribes that used
                  state plans.
                `),
                grade: 'weak',
                quote: 'Many tribes elected to use their own plans.',
                sources: [
                  source('Haroz et al. 2022, American Journal of Public Health', 'https://doi.org/10.2105/ajph.2021.306635'),
                  source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/')
                ]
              }),
              evidence({
                headline: 'Early in the rollout, health facilities in heavily Black urban counties were less likely to be giving COVID-19 vaccines.',
                finding: paragraph(`
                  By May 2021, eligible facilities in the most heavily Black metropolitan counties were
                  giving vaccines less often than facilities in counties with a below-average Black
                  population: “32% (95% CI 14% to 47%, p = 0.001) lower odds of serving as COVID
                  administration facility”. In rural counties the same held for heavily Hispanic
                  counties. The study leaves out mass and nontraditional sites, and it measures where
                  vaccine was available, not uptake.
                `),
                grade: 'moderate',
                quote: 'lower odds of serving as COVID administration facility compared to facilities in counties with below US average Black population',
                sources: [source('Hernandez et al. 2022, PLOS Medicine', 'https://doi.org/10.1371/journal.pmed.1004069')]
              }),
              evidence({
                headline: 'The federal vaccination center in Cleveland gave nearly three of four shots to White people in a city about one-third White.',
                finding: paragraph(`
                  Site-by-site federal data showed that “nearly 3 out of every 4 shots administered at
                  the federal government's Covid vaccination center in Cleveland went into the arms of
                  white people”, in a city where “non-Hispanic whites are 33.8 percent of the city's
                  population”. This is the barrier the proposal targets, recorded at one agency-run
                  site.
                `),
                grade: 'weak',
                quote: 'Nearly 3 out of every 4 shots administered at the federal government\'s Covid vaccination center in Cleveland went into the arms of white people',
                sources: [source('NBC News, on Federal Emergency Management Agency data', 'https://www.nbcnews.com/politics/white-house/federal-vaccination-data-show-mixed-record-equity-n1276833')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A national survey found American Indian and Alaska Native adults had the lowest vaccination coverage of any group in spring 2021, and they still trailed White adults months later.',
                finding: paragraph(`
                  The National Immunization Survey found American Indian and Alaska Native adults had
                  the lowest coverage of at least one dose at the end of April 2021. “By the end of
                  November 2021, national ≥1-dose COVID-19 vaccination coverage was similar for Black
                  (78.2%), Hispanic (81.3%), NH/OPI (75.7%), and White adults (78.7%); however,
                  coverage remained lower for AI/AN (61.8%) and multiple or other race (68.0%)
                  adults.” The survey does not separate people served through tribal or Indian Health
                  Service programs from other American Indian and Alaska Native adults.
                `),
                grade: 'strong',
                quote: 'By the end of November 2021, national ≥1-dose COVID-19 vaccination coverage was similar for Black (78.2%), Hispanic (81.3%), NH/OPI (75.7%), and White adults (78.7%); however, coverage remained lower for AI/AN (61.8%) and multiple or other race (68.0%) adults.',
                sources: [source('Kriss et al. 2022, Morbidity and Mortality Weekly Report', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Protect Chicago Plus',
                where: 'Chicago', when: '01-03/2021',
                authority: 'Neighborhood task forces, with vaccine eligibility widened in their zip codes',
                outcome: paragraph(`
                  Neighborhood task forces designed outreach and distribution in 13 high-vulnerability
                  zip codes, and the city widened vaccine eligibility there. Coverage in those zip
                  codes rose from 0.58 to 0.92 of the rate in other Chicago zip codes between February
                  5 and March 29, 2021, then held near 0.87. There was no randomization, and the task
                  forces came bundled with expanded eligibility.
                `),
                strength: 'moderate',
                sources: [source('Johnson et al. 2023, Public Health Reports', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
              }),
              supportingCase({
                name: 'Tribal Indian Health Service Route Vaccination',
                where: 'United States', when: '11/2020 onward',
                authority: 'Tribes chose their own supply channel and set their own priorities',
                outcome: paragraph(`
                  In November 2020 tribes could take vaccine through their state or separately through
                  the Indian Health Service, and many chose the Indian Health Service so they could set
                  their own priorities. In federal tracking data from early July 2021, American Indian
                  and Alaska Native people had the highest rate of any group, 45.5 percent with at
                  least one dose against 33.7 percent of White people. A national survey of adults
                  found lower coverage for this group, and no source compares tribes by route.
                `),
                strength: 'weak',
                sources: [
                  source('PBS NOVA', 'https://www.pbs.org/wgbh/nova/article/native-americans-highest-covid-vaccination-rate-us/'),
                  source('Haroz et al. 2022, American Journal of Public Health', 'https://doi.org/10.2105/ajph.2021.306635'),
                  source('Kriss et al. 2022, Morbidity and Mortality Weekly Report', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')
                ]
              })
            ]
          }),
          claim({
            text: 'Easier access raises uptake more than persuasion does.',
            evidence: [
              evidence({
                headline: 'Swiss towns that got a mobile vaccination unit for one four-hour visit saw more than three times as many unvaccinated adults get a shot.',
                finding: paragraph(`
                  Twenty Swiss communities were split into two groups, and half got a mobile
                  vaccination unit for four hours on a single day. Over the next three weeks, 12.8
                  percent of unvaccinated adults in those communities got vaccinated, against 3.8
                  percent elsewhere: “the vaccination rate in the sample of the treatment group
                  surpassed the rate in the control group by a factor of 3.4 (+9.0 percentage points)
                  over 3 weeks”. Vaccinations at other locations did not fall. Nothing here was
                  community-chosen, and there was no persuasion arm.
                `),
                grade: 'strong',
                quote: 'The vaccination rate in the sample of the treatment group surpassed the rate in the control group by a factor of 3.4 (+9.0 percentage points) over 3 weeks.',
                sources: [source('Kulle, Schumacher and von Bieberstein 2024, Journal of Public Health', 'https://doi.org/10.1093/pubmed/fdad213')]
              }),
              evidence({
                headline: 'Californians who lived farther from a vaccination site were less likely to be vaccinated, and Chicago zip codes saw vaccination rise after a site opened nearby.',
                finding: paragraph(`
                  Across California zip codes, longer distance to a vaccination site went with lower
                  vaccination in 98 percent of thousands of model versions, and the link was
                  statistically significant in 86 percent, regardless of partisanship. In Chicago,
                  vaccination rose in zip codes after a nearby site opened. “COVID-19 vaccination is
                  hampered not only by vaccine hesitancy but also by structural barriers like
                  distance.”
                `),
                grade: 'moderate',
                quote: 'COVID-19 vaccination is hampered not only by vaccine hesitancy but also by structural barriers like distance.',
                sources: [source('Mazar et al. 2023, PNAS Nexus', 'https://academic.oup.com/pnasnexus/article/2/12/pgad411/7459517')]
              }),
              evidence({
                headline: 'Text messages from Rhode Island\'s health department did not get holdouts vaccinated.',
                finding: paragraph(`
                  Rhode Island's health department texted 142,428 people who had been tested for
                  COVID-19 but not vaccinated, using language that had worked earlier in the rollout.
                  The trial found no evidence the messages “increased COVID-19 vaccination among people
                  who remained unvaccinated five or more weeks after becoming eligible”. This is one
                  form of persuasion, and it says nothing about in-person trusted messengers.
                `),
                grade: 'strong',
                quote: 'increased COVID-19 vaccination among people who remained unvaccinated five or more weeks after becoming eligible',
                sources: [source('Rabb et al. 2022, Nature', 'https://doi.org/10.1038/s41586-022-04526-2')]
              })
            ]
          }),
          claim({
            text: 'Delivery through trusted local institutions raises trust in the vaccine.',
            evidence: [
              evidence({
                headline: 'People who got vaccinated through churches and other faith groups said they trusted the vaccine more than people vaccinated at clinics.',
                finding: paragraph(`
                  Community partners ran vaccination events at faith-based organizations and at
                  outpatient clinics, then surveyed 1,476 people while they waited after their shot.
                  “FBO participants were more likely to report ‘completely’ trusting the COVID-19
                  vaccine”, 30.6 percent against 19.8 percent. The faith-based sites reached more
                  Hispanic, Marshallese, and uninsured people. People chose their own site, so the
                  comparison cannot show that the site raised trust, and the two groups were equally
                  hesitant about the vaccine.
                `),
                grade: 'moderate',
                quote: 'FBO participants were more likely to report “completely” trusting the COVID-19 vaccine. There was no significant difference between FBO and clinic participants with regard to the level of vaccine hesitancy.',
                sources: [source('McElfish et al. 2022, Journal of Family Medicine and Primary Care', 'https://doi.org/10.4103/jfmpc.jfmpc_327_22')]
              }),
              evidence({
                headline: 'Men without a college degree became more willing to get vaccinated after hearing from people like themselves than from doctors, even though they rated those people as less trustworthy.',
                finding: paragraph(`
                  Black and White men were shown vaccine messages from either a layperson like
                  themselves or a medical expert. “Our main finding is that laypeople (nonexpert
                  concordant senders) are most effective at promoting vaccination, particularly among
                  those least willing to become vaccinated.” Lay senders were rated less qualified and
                  less trustworthy, yet raised willingness to get a COVID-19 vaccine by 8.8 percentage
                  points. The result cuts against the trust mechanism: the senders who moved people
                  most were the ones rated less trustworthy, and the authors credit social closeness
                  instead.
                `),
                grade: 'moderate',
                quote: 'Our main finding is that laypeople (nonexpert concordant senders) are most effective at promoting vaccination, particularly among those least willing to become vaccinated.',
                sources: [source('Alsan and Eichmeyer 2024, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.20210393')]
              }),
              evidence({
                headline: 'Black men in Oakland who met a Black doctor chose more preventive care than those who met a doctor who was not Black.',
                finding: paragraph(`
                  Black men were randomly assigned to Black or non-Black male doctors at a clinic.
                  They chose “a similar number of preventives in the pre-consultation stage, but are
                  much more likely to select every preventive service, particularly invasive services,
                  once meeting with a racially concordant doctor”. The study measures which services
                  men chose, not trust in any vaccine, and a doctor of the same race is a trusted
                  messenger rather than a neighborhood institution.
                `),
                grade: 'strong',
                quote: 'Subjects select a similar number of preventives in the pre-consultation stage, but are much more likely to select every preventive service, particularly invasive services, once meeting with a racially concordant doctor.',
                sources: [source('Alsan, Garrick and Graziani 2019, American Economic Review', 'https://doi.org/10.1257/aer.20181446')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Having a doctor of the same race barely changed whether people said they would get vaccinated.',
                finding: paragraph(`
                  Survey respondents read a standard prompt about the COVID-19 vaccine, with the race
                  of the doctor varied. “Analyses reveal that racially concordant care has a negligible
                  effect on vaccine hesitancy, but does ameliorate other harmful beliefs regarding
                  one's likelihood of experiencing discrimination and racism in healthcare more
                  generally.” The scenario was hypothetical, and no real vaccination was observed.
                `),
                grade: 'moderate',
                quote: 'Analyses reveal that racially concordant care has a negligible effect on vaccine hesitancy, but does ameliorate other harmful beliefs regarding one\'s likelihood of experiencing discrimination and racism in healthcare more generally.',
                sources: [source('Anderson 2023, Social Science and Medicine', 'https://doi.org/10.1016/j.socscimed.2023.116335')]
              })
            ]
          }),
          claim({
            text: 'Equitable access narrows the racial gap in vaccination.',
            evidence: [
              evidence({
                headline: 'By late 2021, Black, Hispanic, and White adults had similar first-dose coverage.',
                finding: paragraph(`
                  The National Immunization Survey recorded that “by the end of November 2021, national
                  ≥1-dose COVID-19 vaccination coverage was similar for Black (78.2%), Hispanic
                  (81.3%), NH/OPI (75.7%), and White adults (78.7%)”. This is a record of what
                  happened to the gap. It does not say what closed it.
                `),
                grade: 'strong',
                quote: 'By the end of November 2021, national ≥1-dose COVID-19 vaccination coverage was similar for Black (78.2%), Hispanic (81.3%), NH/OPI (75.7%), and White adults (78.7%)',
                sources: [source('Kriss et al. 2022, Morbidity and Mortality Weekly Report', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In a national panel, the Black-White vaccination gap closed as Black adults learned more about vaccine safety, while differences in access did not explain the change.',
                finding: paragraph(`
                  A national panel followed the same adults from April 2021 to July 2022 and tested
                  five explanations for why Black vaccination caught up. “Only increases in knowledge
                  about the safety and efficacy of COVID-19 vaccines uniquely mediated the increase in
                  vaccination uptake among non-Hispanic Black compared to White, Asian and Hispanic
                  panelists”, and neither differential access nor media use explained the increase. The
                  authors suggest the knowledge spread from within the Black community. Access was
                  self-reported, and the national sample could miss local effects.
                `),
                grade: 'moderate',
                quote: 'Only increases in knowledge about the safety and efficacy of COVID-19 vaccines uniquely mediated the increase in vaccination uptake among non-Hispanic Black compared to White, Asian and Hispanic panelists.',
                sources: [source('Romer, Patterson, Jamieson and Jamieson 2024, Journal of Health Communication', 'https://doi.org/10.1080/10810730.2024.2354360')]
              })
            ]
          }),
          claim({
            text: 'Higher vaccination in hard-hit neighborhoods prevents deaths and narrows racial gaps in deaths.',
            evidence: [
              evidence({
                headline: 'When California steered vaccines to its least advantaged communities, vaccination there rose and hundreds of deaths were prevented.',
                finding: paragraph(`
                  In March 2021 California gave vaccine priority to the communities its Healthy Places
                  Index ranked least advantaged. Vaccination there rose 28.4 percent after the policy,
                  and “an estimated 160,892 COVID-19 cases, 10,248 hospitalizations, and 679 deaths in
                  the least-advantaged communities were averted by the policy”. Those communities still
                  bore more than their share of cases, hospital stays, and deaths. Communities were
                  defined by a socioeconomic index, not by race, and the policy tested supply priority
                  rather than community control.
                `),
                grade: 'strong',
                quote: 'Furthermore, an estimated 160,892 COVID-19 cases, 10,248 hospitalizations, and 679 deaths in the least-advantaged communities were averted by the policy.',
                sources: [source('Hoover et al. 2024, Health Affairs', 'https://doi.org/10.1377/hlthaff.2023.01163')]
              }),
              evidence({
                headline: 'US counties with higher vaccination coverage had lower COVID-19 death rates.',
                finding: paragraph(`
                  Across 2,558 counties over the first year of the rollout, “a 10% improvement in
                  vaccination coverage was associated with an 8% (95% confidence interval 8% to 9%)
                  reduction in mortality rates”. The comparison is between counties, gives no results
                  by race, and cannot rule out other county differences.
                `),
                grade: 'moderate',
                quote: 'A 10% improvement in vaccination coverage was associated with an 8% (95% confidence interval 8% to 9%) reduction in mortality rates',
                sources: [source('Suthar et al. 2022, The BMJ', 'https://doi.org/10.1136/bmj-2021-069317')]
              }),
              evidence({
                headline: 'Giving hard-hit places vaccine priority at every age would have reached the people most likely to die better than age cutoffs did.',
                finding: paragraph(`
                  Using death rates in California and Minnesota, researchers compared vaccine
                  schedules. Schedules based only on age “benefit the older white populations at the
                  expense of younger BIPOC populations with higher risk of death”, while “strategies
                  that prioritize high-risk geographic areas for vaccination at all ages better target
                  mortality risk than age-based strategies alone”. The schedules compared were never
                  run, so no real outcomes are observed.
                `),
                grade: 'moderate',
                quote: 'We find that strategies that prioritize high-risk geographic areas for vaccination at all ages better target mortality risk than age-based strategies alone, although they do not always perform as well as direct prioritization of high-risk racial/ethnic groups.',
                sources: [source('Wrigley-Field et al. 2021, Science Advances', 'https://doi.org/10.1126/sciadv.abj2099')]
              }),
              evidence({
                headline: 'In Ontario, lower vaccination in low-income neighborhoods accounted for more than half of their higher death rate.',
                finding: paragraph(`
                  Among 11.2 million Ontario adults, people in the lowest-income neighborhoods were
                  less likely to be vaccinated. “This inequality in vaccination accounted for 56.9%
                  [22.5%-91.3%] of inequalities in COVID-19 deaths between individuals in the lowest
                  income vs highest income quintiles.” The analysis is by income rather than race, it
                  is in Canada, and the interval is wide.
                `),
                grade: 'moderate',
                quote: 'This inequality in vaccination accounted for 56.9% [22.5%-91.3%] of inequalities in COVID-19 deaths between individuals in the lowest income vs highest income quintiles.',
                sources: [source('Wang et al. 2026, American Journal of Epidemiology', 'https://doi.org/10.1093/aje/kwaf051')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Most of the shrinking Black-White gap in COVID-19 deaths came from rising White deaths and the virus moving to rural areas.',
                finding: paragraph(`
                  From the first pandemic wave to the Omicron wave, the Black-White gap in death rates
                  fell from 339 to 45 deaths per 100,000 person-years. “This study found that most of
                  the national decrease in racial and ethnic disparities in COVID-19 mortality between
                  the initial and Omicron waves was explained by increased mortality among non-Hispanic
                  White adults and changes in the geographic spread of the pandemic.” Falling Black
                  death rates explained about two fifths of the drop. The study does not measure
                  vaccination.
                `),
                grade: 'moderate',
                quote: 'This study found that most of the national decrease in racial and ethnic disparities in COVID-19 mortality between the initial and Omicron waves was explained by increased mortality among non-Hispanic White adults and changes in the geographic spread of the pandemic.',
                sources: [source('Lundberg et al. 2023, JAMA Network Open', 'https://doi.org/10.1001/jamanetworkopen.2023.11098')]
              }),
              evidence({
                headline: 'In Ontario, the gap in hospital stays and deaths between poor and rich neighborhoods did not shrink, even with neighborhood vaccine priority in place.',
                finding: paragraph(`
                  Ontario's equity measures included geographic prioritization of vaccine eligibility
                  and allocation. Even so, “despite attempts at equity-informed policies alongside
                  fluctuating levels of public health measures, the magnitude of inequalities in
                  hospitalizations and deaths remained unchanged across waves”. The measures are
                  descriptive, they cannot isolate the vaccine policy, and they are by income rather
                  than race.
                `),
                grade: 'moderate',
                quote: 'Despite attempts at equity-informed policies alongside fluctuating levels of public health measures, the magnitude of inequalities in hospitalizations and deaths remained unchanged across waves.',
                sources: [source('Ma et al. 2023, Open Forum Infectious Diseases', 'https://doi.org/10.1093/ofid/ofac690')]
              })
            ]
          }),
          claim({
            text: 'Organizing delivery together strengthens community ties and reduces isolation.',
            evidence: [
              evidence({
                headline: 'Lonely older adults given a volunteer role calling isolated elders became less lonely than peers offered classes and social gatherings.',
                finding: paragraph(`
                  In Hong Kong, lonely adults aged 50 to 70 were assigned either to volunteer by phone
                  with lonely, low-income older people or to a comparison program of classes and
                  social gatherings. “After 6 months, volunteers compared to controls, showed benefits
                  on loneliness, social network engagement, stress and depressive symptoms.” The
                  volunteers phoned strangers, not neighbors.
                `),
                grade: 'strong',
                quote: 'After 6 months, volunteers compared to controls, showed benefits on loneliness, social network engagement, stress and depressive symptoms.',
                sources: [source('Warner et al. 2024, American Journal of Geriatric Psychiatry', 'https://doi.org/10.1016/j.jagp.2023.12.022')]
              }),
              evidence({
                headline: 'Homebound adults who got regular calls from briefly trained young volunteers felt less lonely within a month.',
                finding: paragraph(`
                  Clients of a meal delivery program were assigned either to receive phone calls from
                  volunteers aged 17 to 23 or to receive no calls. “A layperson-delivered,
                  empathy-oriented telephone call program reduced loneliness, depression, and anxiety
                  compared with the control group and improved the general mental health of
                  participants within 4 weeks.” One of the two loneliness scales did not reach
                  significance, and the trial measured the people served, not the volunteers.
                `),
                grade: 'strong',
                quote: 'A layperson-delivered, empathy-oriented telephone call program reduced loneliness, depression, and anxiety compared with the control group and improved the general mental health of participants within 4 weeks.',
                sources: [source('Kahlon et al. 2021, JAMA Psychiatry', 'https://doi.org/10.1001/jamapsychiatry.2021.0113')]
              }),
              evidence({
                headline: 'Liberian villages that ran their own rebuilding projects cooperated better on a shared fundraising task, but only where men and women worked on it together.',
                finding: paragraph(`
                  A rebuilding program that set up village committees to choose and carry out local
                  projects was assigned to villages at random. “Using a matching funds experiment we
                  find evidence that these interventions can alter cooperation capacity. However, we
                  observe effects only in communities in which, by design, both men and women faced
                  the collective action challenge.” The outcome is behavior in a real-money game, not
                  loneliness or personal ties, and the setting is post-war and donor-funded.
                `),
                grade: 'strong',
                quote: 'Using a matching funds experiment we find evidence that these interventions can alter cooperation capacity. However, we observe effects only in communities in which, by design, both men and women faced the collective action challenge.',
                sources: [source('Fearon, Humphreys and Weinstein 2015, American Political Science Review', 'https://doi.org/10.1017/S0003055415000283')]
              }),
              evidence({
                headline: 'Health programs that involved residents in the work raised the social support people felt.',
                finding: paragraph(`
                  A review pooled 131 controlled trials of public health programs for disadvantaged
                  groups in wealthy countries that engaged community members. The programs raised
                  “perceived social support (d = .41, 95% CI .23, .65)” along with health behavior
                  self-efficacy. The pooled trials mix randomized and non-randomized designs, and the
                  review cannot separate community involvement from the rest of each program.
                `),
                grade: 'moderate',
                quote: 'The interventions were also effective in increasing health consequences (d = .16, 95% CI .06, .27); health behaviour self-efficacy (d = .41, 95% CI .16, .65) and perceived social support (d = .41, 95% CI .23, .65).',
                sources: [source('O\'Mara-Eves et al. 2015, BMC Public Health', 'https://doi.org/10.1186/s12889-015-1352-y')]
              }),
              evidence({
                headline: 'Britons who helped neighbors through organized community efforts in the first lockdown felt closer to their community.',
                finding: paragraph(`
                  A survey run in June 2020 found that “coordinated community helping predicted the
                  psychological bonding of community members by building a sense of community
                  identification and unity during the pandemic, which predicted increased well-being
                  and reduced depression and anxiety”. The survey was a single wave, so it cannot
                  establish which came first.
                `),
                grade: 'moderate',
                quote: 'coordinated community helping predicted the psychological bonding of community members by building a sense of community identification and unity during the pandemic, which predicted increased well-being and reduced depression and anxiety',
                sources: [source('Bowe et al. 2022, Journal of Community and Applied Social Psychology', 'https://doi.org/10.1002/casp.2520')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A year after lonely older adults began volunteering, most of the drop in loneliness had faded.',
                finding: paragraph(`
                  The same Hong Kong trial followed its volunteers to twelve months. “Although most of
                  the positive effects of volunteering were not sustained at T3, the volunteers who
                  continued to volunteer for more than 2 h per week at T3 reported lower levels of
                  loneliness than those who did not maintain volunteering.” Who kept volunteering was
                  the participants' own choice, so that last comparison is not randomized.
                `),
                grade: 'strong',
                quote: 'Although most of the positive effects of volunteering were not sustained at T3, the volunteers who continued to volunteer for more than 2 h per week at T3 reported lower levels of loneliness than those who did not maintain volunteering.',
                sources: [source('Yeung et al. 2025, The Lancet Healthy Longevity', 'https://doi.org/10.1016/j.lanhl.2024.100664')]
              }),
              evidence({
                headline: 'Sudanese villages that ran their own development projects took a bigger part in local decisions, but villagers\' social networks and norms did not change.',
                finding: paragraph(`
                  Villages were assigned at random to a program that had residents plan and run local
                  projects. “The program did not affect either networks or norms, but civic
                  participation and the participatory nature of local governance increased.” The
                  authors credit the rise in participation to more open local institutions, not to
                  stronger social ties. The study says nothing about loneliness, and rural Sudan
                  differs sharply from a US neighborhood.
                `),
                grade: 'strong',
                quote: 'The program did not affect either networks or norms, but civic participation and the participatory nature of local governance increased.',
                sources: [source('Avdeenko and Gilligan 2015, American Political Science Review', 'https://doi.org/10.1017/S0003055415000210')]
              }),
              evidence({
                headline: 'Programs that had residents choose and run local projects in four war-affected countries did little to build the cohesion they aimed for.',
                finding: paragraph(`
                  A synthesis of randomized field experiments in Afghanistan, the Democratic Republic
                  of the Congo, Liberia, and Sierra Leone concluded that “the evidence tells us that
                  CDD programs are far from “proven impact” interventions”, where community-driven
                  development means programs in which residents choose and run local projects. The
                  settings are poor and war-affected, not rich-country neighborhoods facing an acute
                  health crisis.
                `),
                grade: 'strong',
                quote: 'The evidence tells us that CDD programs are far from “proven impact” interventions.',
                sources: [source('King and Samii 2014, World Development', 'https://doi.org/10.1016/j.worlddev.2014.06.030')]
              }),
              evidence({
                headline: 'Volunteers report better mental health in long-running surveys, but the few trials that assigned people to volunteer did not confirm it.',
                finding: paragraph(`
                  A review of 40 studies found that “cohort studies showed volunteering had favourable
                  effects on depression, life satisfaction, wellbeing but not on physical health. These
                  findings were not confirmed by experimental studies.” The trials were few and small,
                  the searches ended before the Hong Kong trial above, and loneliness and social ties
                  were not the review's main outcomes.
                `),
                grade: 'moderate',
                quote: 'Cohort studies showed volunteering had favourable effects on depression, life satisfaction, wellbeing but not on physical health. These findings were not confirmed by experimental studies.',
                sources: [source('Jenkinson et al. 2013, BMC Public Health', 'https://doi.org/10.1186/1471-2458-13-773')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Residents allocate community support funds through participatory budgeting',
      method: 'Participatory Budgeting',
      summary: 'Residents of the neighborhoods the money is meant to reach decide how a share of the American Rescue Plan community support funds is spent.',
      anchor: 'vaccine equity push',
      where: 'City and county governments receiving American Rescue Plan community engagement funds',
      when: paragraph(`
        June to July 2021, when the community outreach awards were made: $323 million from the
        American Rescue Plan to 150 local and national organizations for vaccination outreach, and
        $250 million to 73 local governments for health literacy work. The rules for who decides how
        the money is spent are set once, at the award.
      `),
      description: paragraph(`
        Let residents of the neighborhoods the money is meant to reach decide, through a
        participatory budgeting process, how a share of the community support funds is spent. The
        funding agency sets the share and the eligible uses. Neighborhood assemblies propose,
        deliberate, and vote, and the agency publishes what was chosen and what it bought. Residents
        hold a real allocation decision, not an advisory one. The September review proposed this, as
        one of two proposals replacing a grant evaluation proposal the research team had added.
        Federal reviews found that COVID-19 equity and vaccine confidence money was slow to reach
        communities, held up by long contracting and by local partners with limited capacity.
      `),
      outcome: outcome({
        text: 'Residents who allocate the funds get spending that fits their needs and trust how it is used.',
        measured: null,
        claims: [
          claim({
            text: 'Residents who allocate public money direct it to what their neighborhoods lack.',
            evidence: [
              evidence({
                headline: 'When Russian villages got hands-on help to run participatory budgeting, local budgets shifted toward the services residents ranked first.',
                finding: paragraph(`
                  Rural settlements were chosen at random to receive training, or training plus
                  on-the-ground help, to run participatory budgeting. Training alone did not work.
                  Where settlements had longer experience of governing themselves, “local
                  administrations allocated larger fractions of public budgets to services identified
                  as top priorities by citizens”, and residents were more satisfied with public
                  services. The budget shift shows up in that subgroup, not across the whole sample,
                  and nothing here measures which services were most lacking.
                `),
                grade: 'strong',
                quote: 'local administrations allocated larger fractions of public budgets to services identified as top priorities by citizens',
                sources: [source('Beuermann and Amelina 2018, Economics of Governance', 'https://link.springer.com/article/10.1007/s10101-018-0214-3')]
              }),
              evidence({
                headline: 'When New York City council districts adopted participatory budgeting, more of their capital money went to schools, streets, and public housing.',
                finding: paragraph(`
                  Comparing ten years of capital spending in council districts that did and did not
                  adopt participatory budgeting, researchers found that “when council districts
                  adopted PB, greater proportions of their discretionary capital budgets were
                  allocated to schools, streets and traffic improvements, and public housing”, and
                  less went to parks. Districts chose whether to adopt, so council members who
                  adopted it may already have had different priorities.
                `),
                grade: 'moderate',
                quote: 'when council districts adopted PB, greater proportions of their discretionary capital budgets were allocated to schools, streets and traffic improvements, and public housing',
                sources: [source('Hagelskamp, Silliman, Godfrey and Schleifer 2020, New Political Science', 'https://doi.org/10.1080/07393148.2020.1773689')]
              }),
              evidence({
                headline: 'Brazilian cities that adopted participatory budgeting spent more on health and saw infant deaths fall.',
                finding: paragraph(`
                  Brazilian municipalities that adopted participatory budgeting “channeled a larger
                  fraction of their budgets to investments in sanitation and health services”, a
                  change “accompanied by a reduction in infant mortality rates”. A second team found
                  the same link between participatory budgeting, health spending, and fewer infant
                  deaths, and found it grew stronger the longer programs lasted. Both studies compare
                  cities that chose to adopt with cities that did not.
                `),
                grade: 'moderate',
                quote: 'channeled a larger fraction of their budgets to investments in sanitation and health services',
                sources: [
                  source('Gonçalves 2014, World Development', 'https://doi.org/10.1016/j.worlddev.2013.01.009'),
                  source('Touchton and Wampler 2014, Comparative Political Studies', 'https://doi.org/10.1177/0010414013512601')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Participatory budgeting in New York City did not move money to the city\'s poorest neighborhoods.',
                finding: paragraph(`
                  Comparing council districts that adopted participatory budgeting with districts
                  that adopted it later, researchers found adopting districts sent more capital money
                  to near-poorest census tracts, but “participatory budgeting does not redirect funds
                  to the lowest income census tracts”. The finding covers a slice of capital money,
                  not a whole budget.
                `),
                grade: 'strong',
                quote: 'participatory budgeting does not redirect funds to the lowest income census tracts',
                sources: [source('Shybalkina and Bifulco, Public Budgeting and Finance', 'https://doi.org/10.1111/pbaf.12212')]
              }),
              evidence({
                headline: 'Participatory budgeting in New York City spread money across more small projects but did not change what the money was spent on.',
                finding: paragraph(`
                  New York's process runs through council members' discretionary funds. Officials who
                  used participatory budgeting “fund more projects at lower average amounts than those
                  not involved but do not change the areas of funding”. The result comes from a system
                  built on legislative earmarks, and it disagrees with the study above on the same
                  city.
                `),
                grade: 'moderate',
                quote: 'Officials involved fund more projects at lower average amounts than those not involved but do not change the areas of funding',
                sources: [source('Calabrese, Williams and Gupta 2020, Administration and Society', 'https://doi.org/10.1177/0095399720912548')]
              }),
              evidence({
                headline: 'Brazilian cities with participatory budgeting spent slightly more on health and education but showed little sign of better living conditions.',
                finding: paragraph(`
                  A study of Brazil's 220 largest cities found that “PB municipalities spend a
                  slightly higher share of their budget on health and education programs, but there is
                  little evidence that this shift in budget priorities affects measurable outcomes”.
                  It covers the same setting as the supporting cards, over a shorter period.
                `),
                grade: 'moderate',
                quote: 'We find that PB municipalities spend a slightly higher share of their budget on health and education programs, but there is little evidence that this shift in budget priorities affects measurable outcomes.',
                sources: [source('Boulding and Wampler 2010, World Development', 'https://doi.org/10.1016/j.worlddev.2009.05.002')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Brazilian Municipal Participatory Budgeting',
                where: 'Brazil', when: 'Studied 1990-2004, and over about 20 years',
                authority: 'Annual, city scale',
                outcome: paragraph(`
                  Brazilian municipalities that adopted participatory budgeting put a larger share of
                  their budgets into health, and in one study sanitation, and saw infant mortality
                  fall. An earlier study of Brazil's largest cities found only a slight spending shift
                  and little sign of better outcomes.
                `),
                strength: 'moderate',
                sources: [
                  source('Gonçalves 2014, World Development', 'https://doi.org/10.1016/j.worlddev.2013.01.009'),
                  source('Touchton and Wampler 2014, Comparative Political Studies', 'https://doi.org/10.1177/0010414013512601'),
                  source('Boulding and Wampler 2010, World Development', 'https://doi.org/10.1016/j.worlddev.2009.05.002')
                ]
              })
            ]
          }),
          claim({
            text: 'Residents who decide how money is spent trust how it is used.',
            evidence: [
              evidence({
                headline: 'When villagers voted directly on local projects, they were far more satisfied with the result, even though the projects barely changed.',
                finding: paragraph(`
                  In 49 Indonesian villages, whether development projects were chosen by
                  representative meetings or by a direct vote of all villagers was assigned at random.
                  “Plebiscites resulted in dramatically higher satisfaction among villagers, increased
                  knowledge about the project, greater perceived benefits, and higher reported
                  willingness to contribute.” The projects chosen changed much less. The study
                  measures satisfaction and perceived legitimacy after a vote on project choice, not
                  trust in how money was later spent.
                `),
                grade: 'strong',
                quote: 'Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute.',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              }),
              evidence({
                headline: 'Buenos Aires residents told how the city\'s participatory budget worked rated the government as slightly more honest and well-meaning.',
                finding: paragraph(`
                  In a survey experiment, giving residents detailed information about the city's
                  participatory budget “marginally shapes voters' assessments of government
                  performance and political trust”, and raised their sense of the government's
                  benevolence and honesty, most among people who started out with low opinions of it.
                  The people treated did not take part in budgeting, and the effect is marginal.
                `),
                grade: 'moderate',
                quote: 'providing detailed information about citizen involvement and outputs of a participatory budget initiative marginally shapes voters\' assessments of government performance and political trust',
                sources: [source('Ardanaz, Otálvaro-Ramírez and Scartascini 2022, World Development', 'https://doi.org/10.1016/j.worlddev.2022.106132')]
              })
            ]
          }),
          claim({
            text: 'Taking part in budgeting draws residents into civic life.',
            evidence: [
              evidence({
                headline: 'New Yorkers who took part in participatory budgeting became more likely to vote, especially those least likely to vote before.',
                finding: paragraph(`
                  New Yorkers who voted in participatory budgeting were matched with similar voters in
                  council districts without it. Taking part “increased individuals' probability of
                  voting by an average of 8.4 percentage points”, with larger gains for young,
                  lower-income, less educated, and Black voters. Participants chose to take part, so
                  matching on what can be observed cannot rule out that more civic-minded people
                  joined.
                `),
                grade: 'moderate',
                quote: 'increased individuals\' probability of voting by an average of 8.4 percentage points',
                sources: [source('Johnson, Carlson and Reynolds, Political Behavior', 'https://doi.org/10.1007/s11109-021-09679-w')]
              }),
              evidence({
                headline: 'When Russian villages got hands-on help to run participatory budgeting, more residents took part in public decisions.',
                finding: paragraph(`
                  In the same field experiment in rural Russia, “the implementation of PB increased
                  citizen's engagement in public decision making and raised local tax revenue
                  collection”, with larger effects where settlements had more experience governing
                  themselves. The engagement measured is in the budget process itself, not voting or
                  civic activity beyond it.
                `),
                grade: 'strong',
                quote: 'we find that the implementation of PB increased citizen’s engagement in public decision making and raised local tax revenue collection',
                sources: [source('Beuermann and Amelina 2018, Economics of Governance', 'https://link.springer.com/article/10.1007/s10101-018-0214-3')]
              }),
              evidence({
                headline: 'Brazilian cities that kept participatory budgeting longer also gained more civil society organizations.',
                finding: paragraph(`
                  Across Brazil's largest cities over twenty years, participatory budgeting programs
                  “are strongly associated with increases in health care spending, increases in civil
                  society organizations, and decreases in infant mortality rates”, and the link grew
                  stronger the longer programs stayed in place. Cities with more organized residents
                  may have been likelier to adopt it in the first place.
                `),
                grade: 'moderate',
                quote: 'We find PB programs are strongly associated with increases in health care spending, increases in civil society organizations, and decreases in infant mortality rates.',
                sources: [source('Touchton and Wampler 2014, Comparative Political Studies', 'https://doi.org/10.1177/0010414013512601')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In Chicago, the residents who voted in participatory budgeting were whiter, more educated, and better off than the neighborhoods they lived in.',
                finding: paragraph(`
                  Surveys and interviews from Chicago's process found that “residents who voted in PB
                  Chicago were more often white, college educated, and from higher-income households
                  relative to both the local population and politically active residents in Chicago”,
                  with little evidence that less advantaged residents were reaching the civic learning
                  and empowerment the process promised. It describes who took part, not what
                  participation did to anyone's later civic life, and it points the other way from the
                  New York voter-file study above.
                `),
                grade: 'moderate',
                quote: 'residents who voted in PB Chicago were more often white, college educated, and from higher‐income households relative to both the local population and politically active residents in Chicago',
                sources: [source('Pape and Lim 2019, Sociological Forum', 'https://doi.org/10.1111/socf.12550')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('HHS Office of Inspector General A-06-22-04004', 'https://oig.hhs.gov/reports-and-publications/all-reports-and-publications/cdc-provided-oversight-and-assistance-but-recipients-faced-challenges-in-implementing-a-covid-19-vaccine-confidence-strategy'),
        source('Government Accountability Office GAO-23-105500', 'https://www.gao.gov/assets/gao-23-105500.pdf'),
        source('Health Resources and Services Administration health workforce fact sheet', 'https://www.hrsa.gov/sites/default/files/hrsa/about/hrsa-health-workforce-fact-sheet.pdf'),
        source('HHS Office of Minority Health, June 28, 2021', 'https://minorityhealth.hhs.gov/news/hhs-announces-awardees-250-million-fight-covid-19-and-improve-health-literacy-among-racial-and')
      ]
    }),

    spineProposal({
      name: 'Residents define the measures of success for outreach funds',
      method: 'Participatory Monitoring and Evaluation',
      summary: 'Residents of the neighborhoods an outreach award is meant to reach define what would count as success, and the results are published against those measures.',
      anchor: 'vaccine equity push',
      linked: true,
      where: 'Any agency funding community outreach, with residents of the neighborhoods served',
      when: paragraph(`
        June to July 2021, when the community outreach awards were made: $323 million from the
        American Rescue Plan to 150 local and national organizations for vaccination outreach, and
        $250 million to 73 local governments for health literacy work. Award conditions are set
        once, and that is the single point where an evaluation requirement could attach without new
        authority.
      `),
      description: paragraph(`
        Let residents of the neighborhoods an outreach award is meant to reach define what would
        count as success. Residents, with the grantee and an independent evaluator, decide the
        measures before the money is spent, and the results are published against them. The funding
        agency carries the duty in the award terms. Residents are not making the spending decision:
        they say what it must be judged by, and they see where the money went, which is closer to
        citizen science than to a vote. The September review proposed this, as one of two proposals
        replacing a grant evaluation proposal the research team had added.
      `),
      outcome: outcome({
        text: 'Residents who define success see where the money went, which brings more systematic evaluation, more engagement, more trust in government, and a stronger sense that they can influence it.',
        measured: null,
        claims: [
          claim({
            text: 'When residents help set the measures, evaluations get done and published.',
            evidence: [
              evidence({
                headline: 'Nearly all community-partnered health research teams said they shared their results with residents, but fewer than half of their published papers described doing so.',
                finding: paragraph(`
                  A review of 101 studies run in partnership with communities asked whether results
                  reached people beyond academic journals. “Dissemination beyond scientific
                  publication was reported in 48% of publications with varying levels of detail.
                  However, among survey respondents, 98% reported dissemination of results to
                  community participants and 84% reported dissemination to the general public.” The
                  survey answers are self-reported, and no conventional studies were included for
                  comparison.
                `),
                grade: 'weak',
                quote: 'Dissemination beyond scientific publication was reported in 48% of publications with varying levels of detail. However, among survey respondents, 98% reported dissemination of results to community participants and 84% reported dissemination to the general public.',
                caveat: 'Nothing here compares evaluations with resident-set measures against evaluations without them.',
                sources: [source('Chen, Diaz, Lucas and Rosenthal 2010, American Journal of Preventive Medicine', 'https://doi.org/10.1016/j.amepre.2010.05.021')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Community Score Card, Ntcheu District',
                where: 'Malawi', when: '2011-2013',
                authority: 'Residents and health workers wrote their own measures and scored them in repeated cycles',
                outcome: paragraph(`
                  Community members and service providers created their own indicators for local
                  reproductive health services and scored them over repeated cycles. The published
                  evaluation reported that “all 13 community- and provider-developed indicators
                  improved, with 6 of them showing significant improvements”. The community-set
                  indicators were tracked only where the program ran, so there is nothing to compare
                  them with, and an organization with an evaluation team already in place ran the
                  program. It shows the process can be carried through to a published evaluation.
                `),
                strength: 'weak',
                sources: [source('Gullo et al. 2017, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0171316')]
              })
            ]
          }),
          claim({
            text: 'Community monitoring of a public service improves the service.',
            evidence: [
              evidence({
                headline: 'Sierra Leone clinics that communities monitored drew more patients, and fewer young children died.',
                finding: paragraph(`
                  Government clinics were assigned at random to a community monitoring program, to
                  nonfinancial staff awards, or to neither. Before the Ebola outbreak, clinic use and
                  patient satisfaction rose, and “community monitoring additionally improved child
                  health, leading to 38% fewer deaths of children under age five”. During the
                  outbreak, communities around the monitored clinics reported more Ebola cases. The
                  trial cannot say which part of the package did the work.
                `),
                grade: 'strong',
                quote: 'Community monitoring additionally improved child health, leading to 38% fewer deaths of children under age five.',
                sources: [source('Christensen, Dube, Haushofer, Siddiqi and Voors 2021, Quarterly Journal of Economics', 'https://doi.org/10.1093/qje/qjaa039')]
              }),
              evidence({
                headline: 'Ugandan clinics that villagers monitored kept their gains in care and child health years later, with little further support.',
                finding: paragraph(`
                  The original Ugandan research team returned to the community monitoring sites for a
                  later follow-up. “Short-run improvements in health care delivery and health outcomes
                  remained in the longer run despite minimal follow-up.” The follow-up is by the same
                  team in the same sites, so it cannot show whether the effects travel.
                `),
                grade: 'strong',
                quote: 'Short-run improvements in health care delivery and health outcomes remained in the longer run despite minimal follow-up.',
                sources: [source('Björkman Nyqvist, de Walque and Svensson 2017, American Economic Journal: Applied Economics', 'https://doi.org/10.1257/app.20150027')]
              }),
              evidence({
                headline: 'Malawi health centers that used community scorecards made more home visits to pregnant women and left women more satisfied with care.',
                finding: paragraph(`
                  Ten matched pairs of communities were randomized to a scorecard process that brought
                  residents, health workers, and local officials together to score services and agree
                  on fixes. The evaluation found “significantly greater improvements in the proportion
                  of women receiving a home visit during pregnancy (B = 0.20, P < .01), receiving a
                  postnatal visit (B = 0.06, P = .01), and overall service satisfaction (B = 0.16, P
                  < .001) in intervention compared to control areas”. With only twenty clusters the
                  estimates are imprecise, health outcomes were not measured, and the evaluators work
                  with the implementing organization.
                `),
                grade: 'strong',
                quote: 'DiD analyses showed significantly greater improvements in the proportion of women receiving a home visit during pregnancy (B = 0.20, P < .01), receiving a postnatal visit (B = 0.06, P = .01), and overall service satisfaction (B = 0.16, P < .001) in intervention compared to control areas.',
                sources: [source('Gullo et al. 2017, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0171316')]
              }),
              evidence({
                headline: 'Ugandan schools did better when parent committees wrote their own monitoring measures than when they were handed a standard scorecard.',
                finding: paragraph(`
                  In 100 rural primary schools, some management committees received a standard
                  scorecard and others designed their own monitoring instrument, defining the
                  objectives, roles, and indicators of progress themselves. The authors “find
                  substantial impacts of the participatory treatment on pupil test scores as well as
                  pupil and teacher absenteeism, while the standard treatment has small and
                  insignificant effects”. This is the closest test of residents defining the measures
                  themselves. It is a small experiment, and no published version of the paper was
                  found.
                `),
                grade: 'moderate',
                quote: 'We find substantial impacts of the participatory treatment on pupil test scores as well as pupil and teacher absenteeism, while the standard treatment has small and insignificant effects',
                caveat: 'Working paper. No peer-reviewed version was located, so this card should be checked before it is relied on.',
                sources: [source('Barr, Mugisha, Serneels and Zeitlin 2012, working paper', 'https://www.bristol.ac.uk/media-library/sites/cmpo/migrated/documents/zeitlin.pdf')]
              }),
              evidence({
                headline: 'Across poor countries, community monitoring cut corruption and raised clinic use and test scores, but did not lower child deaths.',
                finding: paragraph(`
                  A systematic review pooled 15 experimental and quasi-experimental studies.
                  “Community monitoring interventions can reduce corruption. They also improve use of
                  health services, but no significant effect is found on school enrolments or
                  dropouts. There is no improvement in health service waiting times, but there is an
                  improvement in weight for age, though not child mortality.” The review has few
                  studies per outcome, its searches end well before the later null results, and its
                  authors decline to draw strong conclusions.
                `),
                grade: 'moderate',
                quote: 'Community monitoring interventions can reduce corruption. They also improve use of health services, but no significant effect is found on school enrolments or dropouts. There is no improvement in health service waiting times, but there is an improvement in weight for age, though not child mortality.',
                sources: [source('Molina, Carella, Pacheco, Cruces and Gasparini 2016, Campbell Systematic Reviews', 'https://doi.org/10.4073/csr.2016.8')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When community monitoring of clinics was run across much more of Uganda a decade later, clinic use and child health did not improve.',
                finding: paragraph(`
                  A larger program modeled on the original Ugandan design gave communities report
                  cards, action plans, and joint meetings with health center staff. “While we find
                  modest positive impacts on health provider behavior, we find no effects on citizen
                  pressure, utilization rates, or bottom-line health outcomes.” The authors point to
                  much better baseline health conditions than in the original study, and fewer than
                  one in five treated households had heard of the meetings.
                `),
                grade: 'strong',
                quote: 'While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes.',
                sources: [source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577')]
              }),
              evidence({
                headline: 'Ugandan village meetings that urged residents to take part, without giving them data on how their clinic performed, changed nothing.',
                finding: paragraph(`
                  The original Ugandan team tested a cheaper version that held participation meetings
                  but handed out no report card on staff performance. “We find no impact on the
                  quality of care or health outcomes of a lower cost intervention that focused on
                  encouraging participation but did not provide information on staff performance.”
                  Residents gathering to talk was not enough without performance data to judge
                  against.
                `),
                grade: 'strong',
                quote: 'We find no impact on the quality of care or health outcomes of a lower cost intervention that focused on encouraging participation but did not provide information on staff performance.',
                sources: [source('Björkman Nyqvist, de Walque and Svensson 2017, American Economic Journal: Applied Economics', 'https://doi.org/10.1257/app.20150027')]
              }),
              evidence({
                headline: 'In Indian villages, efforts to get parents to monitor schools did not change teacher effort or what children learned in school.',
                finding: paragraph(`
                  Three randomized efforts in Uttar Pradesh encouraged parents to take part in
                  monitoring schools, including training villagers to test children. “These
                  interventions had no impact on community involvement, teacher effort, or learning
                  outcomes inside the school.” Only a volunteer-run reading camp outside the school
                  raised reading skills. None of the three let residents define the measures.
                `),
                grade: 'strong',
                quote: 'These interventions had no impact on community involvement, teacher effort, or learning outcomes inside the school.',
                sources: [source('Banerjee, Banerji, Duflo, Glennerster and Khemani 2010, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.2.1.1')]
              }),
              evidence({
                headline: 'A community-led program to improve care for mothers and newborns in Indonesia and Tanzania did not change how mothers used that care.',
                finding: paragraph(`
                  The program was built to be community-led, giving communities information and
                  support to plan their own fixes, across 100 treatment and 100 control communities
                  in each country. “We find that on average, this program did not have a statistically
                  significant impact on the use or content of maternal and newborn health services,
                  nor on perceptions of civic efficacy or civic participation among recent mothers in
                  the communities where it was offered.” The authors trace the null result to
                  communities stalling between planning and action.
                `),
                grade: 'strong',
                quote: 'We find that on average, this program did not have a statistically significant impact on the use or content of maternal and newborn health services, nor on perceptions of civic efficacy or civic participation among recent mothers in the communities where it was offered.',
                sources: [source('Arkedis et al. 2021, World Development', 'https://doi.org/10.1016/j.worlddev.2020.105369')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Community-Based Monitoring of Clinics, Uganda',
                where: 'Uganda', when: '2004-2006',
                authority: 'Communities chose the clinic problems to fix and agreed a monitoring plan with clinic staff',
                outcome: paragraph(`
                  Fifty rural clinics in nine districts were assigned at random. In treatment
                  villages, residents received a report card on their clinic built from household and
                  facility surveys. They picked the problems that mattered most and agreed a plan
                  with clinic staff for fixing and monitoring them. A year later, general outpatient
                  visits were 20 percent higher and infants weighed more, by 0.14 standard deviations
                  in weight-for-age. Under-5 mortality was 33 percent lower, with a 90 percent
                  confidence interval of 8 to 64 percent, which the authors put at roughly 550 child
                  deaths averted across about 55,000 households. The gains lasted in a later
                  follow-up. Village meetings held without the report card did nothing, and a larger
                  program with a similar design across 187 Ugandan health centers about a decade
                  later changed health worker behavior modestly but not clinic use or child health.
                `),
                strength: 'strong',
                sources: [
                  source('Björkman and Svensson 2009, Quarterly Journal of Economics', 'https://doi.org/10.1162/qjec.2009.124.2.735'),
                  source('Björkman Nyqvist, de Walque and Svensson 2017, American Economic Journal: Applied Economics', 'https://doi.org/10.1257/app.20150027'),
                  source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577')
                ]
              })
            ]
          }),
          claim({
            text: 'Residents who track public spending know more about where the money went.',
            evidence: [
              evidence({
                headline: 'Once Uganda printed its school grant payments in newspapers, head teachers near newspaper sellers knew more about the grant.',
                finding: paragraph(`
                  Uganda began publishing monthly school grant transfers in national newspapers. On a
                  later knowledge test, “head teachers serving in schools close to a newspaper outlet
                  are better informed about the formula used for deriving the capitation grant” and
                  about when funds were released. They were no better informed about topics the
                  newspapers did not cover. The test went to head teachers rather than residents, and
                  it was given once, so there is no before-and-after.
                `),
                grade: 'moderate',
                quote: 'Head teachers serving in schools close to a newspaper outlet are better informed about the formula used for deriving the capitation grant',
                sources: [source('Reinikka and Svensson 2011, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2011.02.006')]
              }),
              evidence({
                headline: 'Indonesian households mailed a card stating their rice subsidy entitlement received more of the subsidy they were owed.',
                finding: paragraph(`
                  In more than 550 villages, eligible households were mailed cards with program
                  information. “On net, beneficiaries received 26 percent more subsidy in card
                  villages. Ineligible households received no less, so this represents substantially
                  lower leakage.” Households were told what they were owed rather than tracking
                  spending, so the fit to this claim is partial, and the knowledge result appears only
                  in the working paper version.
                `),
                grade: 'strong',
                quote: 'On net, beneficiaries received 26 percent more subsidy in card villages. Ineligible households received no less, so this represents substantially lower leakage.',
                sources: [source('Banerjee, Hanna, Kyle, Olken and Sumarto 2018, Journal of Political Economy', 'https://doi.org/10.1086/696226')]
              })
            ]
          }),
          claim({
            text: 'Taking part in evaluation raises trust in government and people\'s sense that they can influence it.',
            evidence: [
              evidence({
                headline: 'Urban teens who carried out their own research on problems in their schools grew more skilled and more motivated to influence their schools and communities.',
                finding: paragraph(`
                  Students in urban public schools were placed into a youth-led participatory research
                  class or a comparison class. “We find that attending a participatory research
                  elective class during the school day was associated with increases in sociopolitical
                  skills, motivation to influence their schools and communities, and participatory
                  behavior. We found no significant effects for perceived control at school.” The
                  participants were teenagers researching their own schools, and trust in government
                  was not measured.
                `),
                grade: 'strong',
                quote: 'We find that attending a participatory research elective class during the school day was associated with increases in sociopolitical skills, motivation to influence their schools and communities, and participatory behavior. We found no significant effects for perceived control at school.',
                sources: [source('Ozer and Douglas 2012, American Journal of Community Psychology', 'https://doi.org/10.1007/s10464-012-9546-2')]
              }),
              evidence({
                headline: 'Chinese residents invited to decide how their community budgets were spent became more civically active and more satisfied with national policy.',
                finding: paragraph(`
                  In a program reaching more than 20 million people, some communities were chosen at
                  random to let residents deliberate and decide on local budgets. “We find that
                  participatory decision-making in community budgeting increased a wide range of
                  civic-engagement behaviours outside of the budgeting domain 6 months after the start
                  of the intervention”, and those changes came with a more positive outlook and more
                  satisfaction with the country's policies. Participation meant deciding budgets, not
                  evaluating results, the setting is an authoritarian state, and satisfaction with
                  policy is not trust in government.
                `),
                grade: 'strong',
                quote: 'We find that participatory decision-making in community budgeting increased a wide range of civic-engagement behaviours outside of the budgeting domain 6 months after the start of the intervention.',
                sources: [source('Wu, Mai, Zhuang and Yi 2024, Nature Human Behaviour', 'https://doi.org/10.1038/s41562-024-01964-y')]
              }),
              evidence({
                headline: 'When Indonesian villagers voted directly on local projects, they were more satisfied and knew more about the projects.',
                finding: paragraph(`
                  In 49 villages, whether projects were chosen by representative meetings or by a
                  direct vote was assigned at random. Villagers who voted were far more satisfied and
                  knew more about the project, though the projects chosen barely changed. “The results
                  suggest that direct participation in political decision making can substantially
                  increase satisfaction and legitimacy.” Participation meant choosing projects, not
                  evaluating them, and legitimacy was measured for the decision rather than as trust
                  in government.
                `),
                grade: 'strong',
                quote: 'The results suggest that direct participation in political decision making can substantially increase satisfaction and legitimacy.',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Mothers in Indonesian and Tanzanian communities that ran their own health improvement program felt no more able to influence public affairs than mothers elsewhere.',
                finding: paragraph(`
                  The program was community-led and did not prescribe what communities should do. It
                  had no effect on service use, and the evaluation also found no effect “on
                  perceptions of civic efficacy or civic participation among recent mothers in the
                  communities where it was offered”. Efficacy was measured among recent mothers across
                  the community, not only among the people who attended meetings.
                `),
                grade: 'strong',
                quote: 'nor on perceptions of civic efficacy or civic participation among recent mothers in the communities where it was offered',
                sources: [source('Arkedis et al. 2021, World Development', 'https://doi.org/10.1016/j.worlddev.2020.105369')]
              }),
              evidence({
                headline: 'Mexican voters told about corruption in their local government voted less and grew less attached to any party.',
                finding: paragraph(`
                  Before municipal elections, households were given information on how local
                  incumbents had misspent public funds. The information “not only decreases incumbent
                  party support in local elections in Mexico, but also decreases voter turnout and
                  support for the challenger party, as well as erodes partisan attachments”. Residents
                  here received audit findings passively, so it cannot show what happens when they
                  produce the findings themselves.
                `),
                grade: 'strong',
                quote: 'We provide experimental evidence that such information not only decreases incumbent party support in local elections in Mexico, but also decreases voter turnout and support for the challenger party, as well as erodes partisan attachments.',
                sources: [source('Chong, De La O, Karlan and Wantchekon 2015, Journal of Politics', 'https://doi.org/10.1086/678766')]
              })
            ]
          })
        ]
      }),
      sources: []
    })
  ]
});
