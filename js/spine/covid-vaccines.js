import {
  spineData, mechanism, impact, spineProposal, outcome, claim,
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
      name: 'Federal health officials publish vaccine data and brief the public on a set schedule',
      method: 'Proactive Data Disclosure',
      summary: 'The Centers for Disease Control and Prevention publishes county vaccine data and holds regular public briefings from the first week of the rollout, bad news included.',
      anchor: 'ACIP voted 11 to 0',
      where: 'Federal, at the Centers for Disease Control and Prevention.',
      when: paragraph(`
        December 2020 to January 2021, before the push to persuade people began, with the schedule
        held through 2021. In 2021 the agency held two telebriefings.
      `),
      description: paragraph(`
        The Centers for Disease Control and Prevention (CDC) publishes county data on open
        dashboards from December 2020. The data cover vaccinations, cases, hospital stays, and
        reported side effects. The agency holds public briefings on a fixed schedule and takes
        questions. It shares findings that look bad for the vaccines, and it says what it does not
        yet know. The duty falls on the agency, and states, reporters, and residents use the data.
        Taiwan's disease control agency held a press conference every day in 2020 and posted daily
        updates on a messaging app. In 2021 the CDC held two telebriefings. Newspapers filled the
        gap in county data, and the agency withheld booster and hospital data in 2021 and 2022. In a
        randomized study, openness about a vaccine's downsides raised trust in health authorities,
        even as it made people warier of the shot. The aim is that more people, across parties,
        trust what federal health officials tell them about the vaccines and follow their guidance.
      `),
      outcome: outcome({
        text: 'More people, across parties, trust what federal health officials tell them about the vaccines and follow their guidance.',
        measured: null,
        claims: [
          claim({
            text: 'Trust in federal health officials divides along party lines.',
            evidence: [
              evidence({
                headline: 'Republicans\' trust in the CDC fell steeply as the pandemic went on, while trust among other Americans held steady.',
                finding: paragraph(`
                  Hatton, Barry, Levine, McGinty and Han surveyed the same national panel of Americans
                  four times between April 2020 and summer 2021. Republicans started out nearly as
                  trusting of the Centers for Disease Control and Prevention (CDC), the National
                  Institutes of Health and medical experts as Democrats and independents, then grew
                  more distrustful, most of all between the November 2020 election and July 2021.
                  Trust among other Americans stayed fairly stable. The authors write that “Once a
                  Democratic administration took over the federal government, Republicans became more
                  likely to distrust recommendations and information from federal scientific
                  agencies.” Local institutions kept their trust. The panel shows when the split
                  opened, not why.
                `),
                grade: 'moderate',
                quote: 'Once a Democratic administration took over the federal government, Republicans became more likely to distrust recommendations and information from federal scientific agencies.',
                sources: [source('Hatton, Barry, Levine, McGinty and Han 2022, Daedalus', 'https://doi.org/10.1162/daed_a_01945')]
              }),
              evidence({
                headline: 'In New Hampshire, Republicans\' trust in the CDC fell sharply in the first months of the pandemic, while Democrats and independents barely changed.',
                finding: paragraph(`
                  Hamilton and Safford ran three statewide surveys in New Hampshire from March to July
                  2020. “Over this period trust in science agencies such as the CDC for information on
                  the coronavirus fell dramatically among Republicans, while views among Democrats and
                  Independents changed little.” The authors see the president's reversal on the agency
                  as the obvious explanation. People with less trust in scientists also reported
                  following science-based health recommendations less. The surveys cover one state.
                `),
                grade: 'moderate',
                quote: 'Over this period trust in science agencies such as the CDC for information on the coronavirus fell dramatically among Republicans, while views among Democrats and Independents changed little.',
                sources: [source('Hamilton and Safford 2021, Sociological Perspectives', 'https://doi.org/10.1177/07311214211022391')]
              }),
              evidence({
                headline: 'Trust in the CDC fell during 2020 among Trump voters and nonvoters, while Biden voters barely moved.',
                finding: paragraph(`
                  RAND's national panel rated its trust in the Centers for Disease Control and
                  Prevention in May and again in October 2020, on a scale from 0 to 10. Trust fell 0.8
                  points among people intending to vote for Donald Trump and 1.1 points among people
                  voting for someone else or not voting, both significant, against a drop of 0.3 among
                  Biden voters, which was not. The authors write that views of the agency “are now
                  strongly politicized”.
                `),
                grade: 'moderate',
                quote: 'are now strongly politicized',
                sources: [source('Pollard and Davis 2021, RAND Corporation', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
              })
            ],
            counterEvidence: []
          }),
          claim({
            text: 'Health officials who are open about a vaccine\'s risks keep the public\'s trust.',
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
              }),
              evidence({
                headline: 'Unvaccinated Britons trusted a balanced account of a vaccine\'s risks and benefits as much as a message written to persuade them, and doubters trusted it more.',
                finding: paragraph(`
                  Kerr, Schneider, Freeman, Marteau and van der Linden randomly assigned 2,928
                  unvaccinated UK adults to read either a persuasive message about COVID-19 vaccines
                  or a balanced one that set out risks and benefits, stated what was uncertain, and
                  warned about common misperceptions. A second experiment did the same for nuclear
                  power. “We find that balanced messages are either perceived as trustworthy as
                  persuasive messages (Study 1), or more so (Study 2).” People who started out negative
                  or neutral about the topic consistently rated the balanced message as more
                  trustworthy, and vaccination intentions did not differ between the two vaccine
                  messages. The messages named no sender, so the study measures trust in the
                  information rather than in an agency.
                `),
                grade: 'strong',
                quote: 'We find that balanced messages are either perceived as trustworthy as persuasive messages (Study 1), or more so (Study 2).',
                sources: [source('Kerr, Schneider, Freeman, Marteau and van der Linden 2022, PNAS Nexus', 'https://doi.org/10.1093/pnasnexus/pgac280')]
              }),
              evidence({
                headline: 'After officials paused a vaccine over rare blood clots, most Americans surveyed said the news left their trust in vaccine safety checks the same or higher.',
                finding: paragraph(`
                  Salmon and colleagues ran online surveys of US adults before, during and after the
                  pause of the Johnson & Johnson vaccine, and asked one sample about the pause directly.
                  After reading a short description of the safety problem, “The information we provided
                  about the pause had no impact (40.1%) or increased trust (33.9%) in the vaccine safety
                  monitoring system for the majority of respondents.” The answers split by trust in the
                  Centers for Disease Control and Prevention (CDC): about half of those who distrusted
                  the agency said the news lowered their trust in the safety system, against about one
                  in eight of those who trusted it. People reported the change themselves, and no
                  comparison group went without the news.
                `),
                grade: 'weak',
                quote: 'The information we provided about the pause had no impact (40.1%) or increased trust (33.9%) in the vaccine safety monitoring system for the majority of respondents.',
                sources: [source('Salmon, Schuh, Sargent and colleagues 2022, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0274443')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'After officials paused a vaccine over rare blood clots, confidence in that vaccine fell in both parties and stayed low after the pause was lifted.',
                finding: paragraph(`
                  Rader, Chiang, Kriner, Weintraub and Brownstein surveyed 401,398 US adults in repeated
                  national samples from March to July 2021, before, during and after the pause of the
                  Johnson & Johnson vaccine. “We find widespread loss of confidence in the Janssen
                  vaccine across gender, age, and other demographics, which persisted over time and
                  after lifting of the halt.” The drop held across self-reported party. Reasons for
                  staying unvaccinated did not change, and confidence in the other vaccines rose
                  slightly. The survey measures confidence in each vaccine, not trust in the agencies.
                `),
                grade: 'moderate',
                quote: 'We find widespread loss of confidence in the Janssen vaccine across gender, age, and other demographics, which persisted over time and after lifting of the halt.',
                sources: [source('Rader, Chiang, Kriner, Weintraub and Brownstein 2022, Vaccine', 'https://doi.org/10.1016/j.vaccine.2022.11.035')]
              }),
              evidence({
                headline: 'Americans shown the full range of uncertainty in a pandemic death forecast came away with less support for science.',
                finding: paragraph(`
                  Kreps and Kriner ran five survey experiments with more than 6,000 Americans. In one,
                  people saw a leading model's forecast of COVID-19 deaths either as a single number or
                  as a wide range, and the range lowered their general support for science. “Emphasizing
                  uncertainty in projections can erode public trust in some contexts.” The forecast was
                  about deaths rather than a vaccine, and the measure was support for science rather
                  than trust in a named agency.
                `),
                grade: 'strong',
                quote: 'Emphasizing uncertainty in projections can erode public trust in some contexts.',
                sources: [source('Kreps and Kriner 2020, Science Advances', 'https://doi.org/10.1126/sciadv.abd4563')]
              }),
              evidence({
                headline: 'Vaccine-hesitant Germans rated a message that left out a vaccine\'s harms as trustworthy as one that disclosed them.',
                finding: paragraph(`
                  Wegwarth, Hertwig, Giese and Fineberg surveyed 763 vaccine-hesitant adults in Germany
                  online. About a third said official pandemic communication had made them more
                  skeptical of vaccines, and that group more often found the information hard to follow
                  or incomplete. Asked to rank sample messages, “the fully transparent message, which
                  reported the benefit and harms in terms of absolute risk, and the nontransparent
                  message, which reported only the benefit in terms of relative risk were both
                  considered equally trustworthy (p = 0.848)”. Only hesitant people took part, and the
                  rankings come from one survey.
                `),
                grade: 'moderate',
                quote: 'the fully transparent message, which reported the benefit and harms in terms of absolute risk, and the nontransparent message, which reported only the benefit in terms of relative risk were both considered equally trustworthy (p = 0.848)',
                sources: [source('Wegwarth, Hertwig, Giese and Fineberg 2024, Frontiers in Public Health', 'https://doi.org/10.3389/fpubh.2023.1256829')]
              })
            ]
          }),
          claim({
            text: 'People in both parties still give weight to vaccine advice from federal health officials.',
            evidence: [
              evidence({
                headline: 'In a strongly Republican state, a vaccine message won more support when it came from the CDC than from the state, most of all among Republicans.',
                finding: paragraph(`
                  Viskupič and Wiltse surveyed 747 South Dakota residents drawn from voter registration
                  lists and randomly varied whether a statement about requiring measles, mumps and
                  rubella shots for schoolchildren came from the Centers for Disease Control and
                  Prevention (CDC) or from a state agency. People who saw the CDC version supported the
                  requirement more. “Further analyses showed that messaging from the CDC was
                  particularly effective among Republicans.” The survey ran after the pandemic, in one
                  state, and concerned a childhood vaccine rather than COVID-19.
                `),
                grade: 'moderate',
                quote: 'Further analyses showed that messaging from the CDC was particularly effective among Republicans.',
                sources: [source('Viskupič and Wiltse 2024, Journal of Community Health', 'https://doi.org/10.1007/s10900-024-01334-9')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Unvaccinated Trump voters who watched a health expert give facts about the vaccine were no more willing to get it, while those who watched Trump endorse it were.',
                finding: paragraph(`
                  Robertson, Bentele, Meyerson, Wood and Salwa randomly assigned 387 unvaccinated Trump
                  voters across the country to watch a short clip of a public health expert giving
                  facts about the vaccine, a clip of Donald Trump endorsing it, or no clip. Trump's clip
                  raised intentions to get fully vaccinated. “There were no significant differences
                  between those hearing the public health expert excerpt and the control group”. The
                  sample was small, the Trump effect only just cleared the usual significance line, and
                  the study measured intentions rather than trust.
                `),
                grade: 'moderate',
                quote: 'There were no significant differences between those hearing the public health expert excerpt and the control group',
                sources: [source('Robertson, Bentele, Meyerson, Wood and Salwa 2021, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0257988')]
              })
            ]
          }),
          claim({
            text: 'People who trust the authorities follow their health advice more closely.',
            evidence: [
              evidence({
                headline: 'When European governments announced lockdowns, people in regions that already trusted their politicians cut unnecessary trips more.',
                finding: paragraph(`
                  Bargain and Aminjonov compared data on human mobility across European regions
                  before and after lockdown announcements, using trust in politicians measured
                  before the pandemic. “Using a double difference approach around the time of
                  lockdown announcements, we find that high-trust regions decrease their mobility
                  related to non-necessary activities significantly more than low-trust regions.”
                  Stricter rules cut travel further where trust was higher. The trust measured is in
                  politicians, not health officials, and regions with more trust may differ in other
                  ways.
                `),
                grade: 'moderate',
                quote: 'Using a double difference approach around the time of lockdown announcements, we find that high-trust regions decrease their mobility related to non-necessary activities significantly more than low-trust regions.',
                sources: [source('Bargain and Aminjonov 2020, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2020.104316')]
              }),
              evidence({
                headline: 'People who trusted their government\'s handling of the virus washed their hands and avoided crowds more, and kept it up longer.',
                finding: paragraph(`
                  Han and colleagues analyzed the PsyCorona survey of 23,733 people in 23 countries,
                  and followed up 7,785 of them. “Higher trust in government regarding COVID-19
                  control was significantly associated with higher adoption of health behaviours
                  (handwashing, avoiding crowded space, self-quarantine)”. People who trusted the
                  government more at the start showed a slower decline in these behaviors over time.
                  Governments seen as sending clear messages were trusted more. Behavior was
                  self-reported.
                `),
                grade: 'moderate',
                quote: 'Higher trust in government regarding COVID-19 control was significantly associated with higher adoption of health behaviours (handwashing, avoiding crowded space, self-quarantine)',
                sources: [source('Han, Zheng, Cristea and colleagues 2021, Psychological Medicine', 'https://doi.org/10.1017/S0033291721001306')]
              }),
              evidence({
                headline: 'Americans who trusted health authorities were more willing to take a COVID-19 vaccine.',
                finding: paragraph(`
                  Jamieson, Romer, Jamieson, Winneg and Pasek followed a national panel of more than
                  8,000 Americans as vaccines arrived. The panel “found that
                  trust in health authorities anchored acceptance of vaccination”. Knowledge about
                  vaccines, flu shot history and media habits did more than worry about COVID-19 to
                  move people from hesitance to acceptance. The study measured willingness to
                  vaccinate rather than shots given.
                `),
                grade: 'moderate',
                quote: 'found that trust in health authorities anchored acceptance of vaccination',
                sources: [source('Jamieson, Romer, Jamieson, Winneg and Pasek 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2112266118')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In eight Western democracies, people\'s trust in institutions did little to make them protect themselves from the virus.',
                finding: paragraph(`
                  Jørgensen, Bor and Petersen surveyed 26,508 people in eight countries in the first
                  wave of the pandemic, and followed some of them over time. Feeling threatened by the
                  virus and feeling able to act predicted protective behavior. By contrast
                  “interpersonal trust and institutional trust, have surprisingly little motivational
                  power during the first wave of the COVID-19 pandemic.” The surveys cover the first
                  months only, and behavior was self-reported.
                `),
                grade: 'moderate',
                quote: 'interpersonal trust and institutional trust, have surprisingly little motivational power during the first wave of the COVID-19 pandemic.',
                sources: [source('Jørgensen, Bor and Petersen 2021, British Journal of Health Psychology', 'https://doi.org/10.1111/bjhp.12519')]
              }),
              evidence({
                headline: 'Across twelve countries, trust in government made people less likely to follow virus rules where the government and scientists disagreed.',
                finding: paragraph(`
                  Algan, Cohen, Davoine, Foucault and Stantcheva followed the same people in twelve
                  countries through 2020. Trust in scientists drove support for and compliance with
                  restrictions. “The effect of trust in government is more ambiguous and tends to
                  diminish support for and compliance with NPIs in countries where the
                  recommendations from scientists and the government were not aligned.” The
                  abbreviation stands for nonpharmaceutical interventions.
                `),
                grade: 'moderate',
                quote: 'The effect of trust in government is more ambiguous and tends to diminish support for and compliance with NPIs in countries where the recommendations from scientists and the government were not aligned.',
                sources: [source('Algan, Cohen, Davoine, Foucault and Stantcheva 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2108576118')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'A citizens\' assembly weighs any vaccine mandate before it is imposed',
      method: 'Citizens\' Assembly',
      summary: 'Before ordering a mandate, the federal government or a city convenes residents chosen by lot and must publicly answer their recommendation.',
      anchor: 'majorities of Americans already supported',
      where: 'Federal, before the September 9, 2021 announcement, or New York City, before its November 1 mandate.',
      when: paragraph(`
        June to August 2021. An assembly convened in June and reporting by late August would have
        come before Executive Order 14043 and the workplace safety agency's vaccine rule.
      `),
      description: paragraph(`
        Before imposing a vaccine mandate, the federal government or a city convenes an assembly of
        residents chosen by lot. Experts brief members on the science. Members then weigh the values
        at stake, including whether to mandate, for whom, and with what exemptions. At a minimum,
        the government publishes the assembly's conclusion and a written response before it acts.
        Federal and state vaccination law and emergency use rules stay in place. The group accepted
        that places would differ, writing “some places might decide not to vaccinate; so be it.”
        France ran a version in 2021. At the Prime Minister's request, its economic and social
        council convened 35 citizens drawn by lot to advise on the vaccination campaign. In 2017,
        South Korea's president accepted a randomly selected panel's advice to resume building two
        nuclear reactors, reversing his own decision. In 2021, federal mandates came with no such
        step. The Senate and the Supreme Court later cut down both Executive Order 14043 and the
        workplace safety agency's vaccine rule. The group did not say how much power the assembly
        holds. It could hold a binding yes or no on the mandate, set the exemptions for a rollout
        that goes ahead anyway, or decide only how the mandate is explained. The form matters,
        because people accepted a decision more when the government followed the assembly and less
        when it set the advice aside. The aim is that more people, including people who oppose a
        mandate, accept it as legitimate and comply with it.
      `),
      outcome: outcome({
        text: 'More people, including those who oppose a mandate, accept it as legitimate and comply with it.',
        measured: null,
        claims: [
          claim({
            text: 'Imposing a vaccine mandate provokes resistance from the people who oppose it.',
            evidence: [
              evidence({
                headline: 'More people turned against a vaccine once it was to be required by law, while support for voluntary vaccination held.',
                finding: paragraph(`
                  Schmelz and Bowles followed the same German adults through the first and second
                  waves of the pandemic. They report: “We observe increased opposition to
                  vaccinations were they to be legally required. In contrast, for voluntary
                  vaccinations, there was higher and undiminished support. We find that public
                  distrust undermines vaccine acceptance, and is associated with a belief that the
                  vaccine is ineffective and, if enforced, compromises individual freedom.” People
                  answered about a requirement that did not yet exist, so the study measures stated
                  opposition, not behavior under a real mandate.
                `),
                grade: 'moderate',
                quote: 'We observe increased opposition to vaccinations were they to be legally required. In contrast, for voluntary vaccinations, there was higher and undiminished support. We find that public distrust undermines vaccine acceptance, and is associated with a belief that the vaccine is ineffective and, if enforced, compromises individual freedom.',
                sources: [source('Schmelz and Bowles 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2104912118')]
              }),
              evidence({
                headline: 'People who did not want a vaccine mandate resented being required to vaccinate most, especially when no one explained why high coverage mattered.',
                finding: paragraph(`
                  In a German experiment, people told that vaccination was compulsory reported more
                  resentment than people told it was voluntary, and “being mandated to vaccinate
                  elicited most reactance when support for a mandate was low and the importance of
                  high vaccination rates was not explained”. That resentment went with lower intention
                  to get an unrelated flu shot. The study measures stated resentment and intentions,
                  not behavior.
                `),
                grade: 'moderate',
                quote: 'Being mandated to vaccinate elicited most reactance when support for a mandate was low and the importance of high vaccination rates was not explained.',
                sources: [source('Sprengholz et al. 2022, Journal of Health Psychology', 'https://doi.org/10.1177/13591053211044535')]
              }),
              evidence({
                headline: 'Parents who resented a measles vaccine rule were less willing to vaccinate their children against other diseases, even though most parents backed the rule.',
                finding: paragraph(`
                  Neufeind and colleagues surveyed German parents after a measles vaccination
                  requirement took effect. Most, 74.1 percent, endorsed it. Even so, “the higher
                  parents’ levels of reactance, the lower the vaccination intentions and the
                  likelihood for the child to be vaccinated against other diseases”. Parents who
                  trusted institutions resented the rule less. Everyone surveyed lived under the same
                  requirement, so the study compares parents with one another rather than a mandate
                  with no mandate.
                `),
                grade: 'moderate',
                quote: 'The higher parents\' levels of reactance, the lower the vaccination intentions and the likelihood for the child to be vaccinated against other diseases.',
                sources: [source('Neufeind et al. 2022, BMC Public Health', 'https://doi.org/10.1186/s12889-022-14075-y')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Telling people a vaccine was required made them more willing to get it, even those most prone to push back.',
                finding: paragraph(`
                  Albarracin and colleagues ran a survey and three experiments in the United States
                  in which people read that a vaccine was either required or left to them. They found
                  that “requirements strengthened vaccination intentions across racial and ethnic
                  groups, across studies, and across levels of trait psychological reactance”. The
                  studies measure intentions, not whether people later saw the requirement as
                  legitimate.
                `),
                grade: 'moderate',
                quote: 'Requirements strengthened vaccination intentions across racial and ethnic groups, across studies, and across levels of trait psychological reactance.',
                sources: [source('Albarracin et al. 2021, Scientific Reports', 'https://www.nature.com/articles/s41598-021-00256-z')]
              })
            ]
          }),
          claim({
            text: 'People accept a decision as more legitimate when a randomly selected group of citizens helped make it, even when the decision goes against them.',
            evidence: [
              evidence({
                headline: 'People told a decision had gone against them were readier to accept it when a citizen panel had recommended it, and people who distrusted politics moved the most.',
                finding: paragraph(`
                  Germann, Marien and Muradova ran a preregistered survey experiment with 1,309 Irish
                  adults, all told the decision went against their view. When a panel of randomly
                  selected citizens had recommended the decision and officials followed it, people
                  judged the process fairer and were more willing to accept the result. The authors
                  find that “the legitimacy-enhancing effects of participatory processes are driven by
                  citizens with low political trust”. People read a scenario, so the study measures
                  judgments of a described decision rather than a real one.
                `),
                grade: 'moderate',
                quote: 'we find that the legitimacy-enhancing effects of participatory processes are driven by citizens with low political trust',
                sources: [source('Germann, Marien and Muradova 2024, Political Studies', 'https://doi.org/10.1177/00323217221137444')]
              }),
              evidence({
                headline: 'People judged a decision fairer when citizens had taken part in making it, even when the decision went against them.',
                finding: paragraph(`
                  Werner and Marien pooled twelve experiments from the Netherlands and Sweden. They
                  find “higher fairness perceptions for a participatory process than for a
                  representative process across all twelve experiments, even when the outcomes are
                  unfavourable”. The experiments measure fairness judgments, and none of the decisions
                  were health mandates.
                `),
                grade: 'moderate',
                quote: 'higher fairness perceptions for a participatory process than for a representative process across all twelve experiments, even when the outcomes are unfavourable',
                sources: [source('Werner and Marien 2022, British Journal of Political Science', 'https://doi.org/10.1017/S0007123420000459')]
              }),
              evidence({
                headline: 'People were readier to accept a decision that went against them when a group of people like them had made it.',
                finding: paragraph(`
                  Arnesen and Peters varied who made a decision in a Norwegian survey experiment. They
                  find “that people are more willing to accept a decision when it is made by a group of
                  people like them, and who are assigned as decision makers based on their expertise.
                  Descriptive representation also serves as a cushion for unfavorable decisions.” The
                  groups in the scenarios were described by their makeup, not chosen by lottery.
                `),
                grade: 'moderate',
                quote: 'In a Norwegian survey experiment, we find that people are more willing to accept a decision when it is made by a group of people like them, and who are assigned as decision makers based on their expertise. Descriptive representation also serves as a cushion for unfavorable decisions.',
                sources: [source('Arnesen and Peters 2018, Comparative Political Studies', 'https://doi.org/10.1177/0010414017720702')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'People with the strongest views on a divisive issue were half as ready as moderates to accept an assembly decision that went against them.',
                finding: paragraph(`
                  Garry and colleagues asked 2,015 people in Northern Ireland to imagine a decision on
                  Irish language rights that went against their own view, made in one of six ways.
                  Three in four said they would accept it from a citizens’ assembly, no more than from
                  party talks or an election, and fewer than the 94 percent who would accept it from a
                  referendum. Among the one in five with the strongest unionist or nationalist views,
                  just over 40 percent would accept the assembly’s decision, half the rate for
                  moderates. The authors write: “We find that the general public support
                  decision-making by a citizens’ assembly, even when the decision reached is one they
                  personally disagree with. However, support is lower among those with strong
                  ideological views.”
                `),
                grade: 'moderate',
                quote: 'We find that the general public support decision-making by a citizens’ assembly, even when the decision reached is one they personally disagree with. However, support is lower among those with strong ideological views.',
                sources: [source('Garry et al. 2021, Government and Opposition', 'https://doi.org/10.1017/gov.2021.4')]
              }),
              evidence({
                headline: 'Telling people a citizens\' assembly had backed a lockdown extension did not make them any more willing to go along with it.',
                finding: paragraph(`
                  Muradova and Suiter showed people in the United States and the United Kingdom a news
                  item about a lockdown extension decided after citizen deliberation, after a public
                  consultation, after politicians deliberated, or with nothing said. “The findings
                  show minipublics are unlikely to foster public compliance during a health crisis.
                  On the contrary, reading about a minipublic could decrease compliance when
                  individuals are distrustful of minipublics.” The study asked how willing people were
                  to comply with the rule, not how legitimate they judged it.
                `),
                grade: 'moderate',
                quote: 'The findings show minipublics are unlikely to foster public compliance during a health crisis. On the contrary, reading about a minipublic could decrease compliance when individuals are distrustful of minipublics.',
                sources: [source('Muradova and Suiter 2022, International Journal of Public Opinion Research', 'https://doi.org/10.1093/ijpor/edac026')]
              }),
              evidence({
                headline: 'Whether people got the outcome they wanted mattered far more to their acceptance than how the decision was made.',
                finding: paragraph(`
                  Esaiasson and colleagues ran vignette and field experiments that varied how a
                  decision was reached. They contend “that democratic governments can achieve little
                  in terms of acceptance of policy decisions by the procedural means at their
                  disposal. Instead, outcome favorability is the dominant determinant of decision
                  acceptance.” None of the decisions were made by a citizens’ assembly.
                `),
                grade: 'moderate',
                quote: 'democratic governments can achieve little in terms of acceptance of policy decisions by the procedural means at their disposal. Instead, outcome favorability is the dominant determinant of decision acceptance.',
                sources: [source('Esaiasson et al. 2019, British Journal of Political Science', 'https://doi.org/10.1017/S0007123416000508')]
              })
            ]
          }),
          claim({
            text: 'People accept a decision more when the authority follows a citizens\' assembly than when it sets the assembly\'s advice aside.',
            evidence: [
              evidence({
                headline: 'People supported their government more when it adopted a citizen panel\'s advice in full, and less than if politicians had decided alone when it did not.',
                finding: paragraph(`
                  Van Dijk and Lefevere ran an online survey experiment with 3,102 people in Belgium.
                  They find that “compared to a representative decision-making process, a minipublic
                  tends to bring about higher political support when its recommendations are fully
                  adopted by the government, whereas it generates lower political support when its
                  recommendations are not adopted”. The study measures support for the government and its decision after
                  reading a scenario.
                `),
                grade: 'moderate',
                quote: 'compared to a representative decision-making process, a minipublic tends to bring about higher political support when its recommendations are fully adopted by the government, whereas it generates lower political support when its recommendations are not adopted',
                sources: [source('van Dijk and Lefevere 2023, European Journal of Political Research', 'https://doi.org/10.1111/1475-6765.12523')]
              }),
              evidence({
                headline: 'People who lost a public vote accepted the result more when a citizen panel had reached the same conclusion, and acceptance fell when the panel had disagreed.',
                finding: paragraph(`
                  Koenen, Jacobs and Lehr ran a survey experiment on a representative Dutch sample in
                  which a referendum was held alone or after a citizen panel that agreed or disagreed
                  with the result. “We find a positive significant effect among our respondents when
                  there is congruence between the deliberative mini-public and the referendum outcome
                  and a negative significant effect when there is incongruence.” The two effects
                  cancelled out on average. The gain in acceptance among people who lost the vote
                  appeared only when the panel and the vote agreed.
                `),
                grade: 'moderate',
                quote: 'We find a positive significant effect among our respondents when there is congruence between the deliberative mini-public and the referendum outcome and a negative significant effect when there is incongruence.',
                sources: [source('Koenen, Jacobs and Lehr 2026, Political Behavior', 'https://doi.org/10.1007/s11109-026-10132-z')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When politicians explained in public why they set a citizen panel\'s advice aside, legitimacy came back almost to where it stood when they followed it.',
                finding: paragraph(`
                  Goovaerts, De Fine Licht and Marien ran a preregistered experiment with 2,659 people
                  in Belgium. People rated decision making as less legitimate when politicians did not
                  follow a citizen panel. When politicians showed respect for the recommendations and
                  publicly justified departing from them, “legitimacy perceptions substantially
                  increase, generally reaching the level of those cases where recommendations are
                  followed”. The repair worked only for people who found the reasons valid, and it held
                  for people who got the policy they wanted and for people who did not.
                `),
                grade: 'moderate',
                quote: 'legitimacy perceptions substantially increase, generally reaching the level of those cases where recommendations are followed',
                sources: [source('Goovaerts, De Fine Licht and Marien 2025, European Journal of Political Research', 'https://doi.org/10.1111/1475-6765.12711')]
              })
            ]
          }),
          claim({
            text: 'People follow a rule more closely when they see the authority behind it as legitimate.',
            evidence: [
              evidence({
                headline: 'People followed lockdown rules mostly out of a sense of duty to support the authorities, more than out of self-interest or worry about their health.',
                finding: paragraph(`
                  Murphy and colleagues surveyed 1,595 Australians about the lockdown rules early in
                  the pandemic. Many did not comply fully. The authors find that “while self-interest
                  and health concerns motivated compliance, normative concerns regarding duty to
                  support the authorities dominated compliance decisions”. The survey asked everyone
                  at one point in time and relied on what people said they did.
                `),
                grade: 'moderate',
                quote: 'while self-interest and health concerns motivated compliance, normative concerns regarding duty to support the authorities dominated compliance decisions',
                sources: [source('Murphy, Williamson, Sargeant and McCarthy 2020, Australian and New Zealand Journal of Criminology', 'https://doi.org/10.1177/0004865820954484')]
              }),
              evidence({
                headline: 'People followed pandemic guidelines a little more closely after their confidence in the government\'s handling of the crisis rose.',
                finding: paragraph(`
                  Wright, Steptoe and Fancourt followed 51,600 adults in the United Kingdom week by
                  week through the first three months of lockdown, tracking how each person changed
                  over time. They found “evidence of a small longitudinal association between
                  increased confidence in government to tackle the pandemic and higher self-reported
                  compliance”. The study measures confidence in how the government handled the
                  pandemic, not legitimacy as such, and compliance as people reported it.
                `),
                grade: 'moderate',
                quote: 'We found evidence of a small longitudinal association between increased confidence in government to tackle the pandemic and higher self-reported compliance',
                sources: [source('Wright, Steptoe and Fancourt 2021, The Lancet Regional Health Europe', 'https://doi.org/10.1016/j.lanepe.2021.100061')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A sense of duty to obey the authorities did not by itself make people follow pandemic rules, and it helped only when people also backed the rules.',
                finding: paragraph(`
                  Gurinskaya, Nalla and Paek surveyed 508 residents of Saint Petersburg, Russia, when
                  a mask rule took effect. They find “that normative alignment and obligation to obey
                  do not directly influence compliance but have an impact through support for
                  regulations”. Fear of police sanctions and of infection also went with compliance.
                  The survey asked people once about their willingness to comply.
                `),
                grade: 'moderate',
                quote: 'our findings suggest that normative alignment and obligation to obey do not directly influence compliance but have an impact through support for regulations',
                sources: [source('Gurinskaya, Nalla and Paek 2023, Criminal Justice Review', 'https://doi.org/10.1177/07340168231190471')]
              })
            ]
          }),
          claim({
            text: 'People follow a rule more closely when they had a say in choosing it than when someone imposes it on them.',
            evidence: [
              evidence({
                headline: 'Groups cooperated more under a rule they had voted for than under the same rule imposed on them from outside.',
                finding: paragraph(`
                  Dal Bó, Foster and Putterman ran a laboratory experiment in which groups either
                  voted on a rule for a money game or had the same rule set for them. They show “that
                  the effect of a policy on the level of cooperation is greater when it is chosen
                  democratically by the subjects than when it is exogenously imposed”. The design
                  separates the vote itself from the kind of people who choose the rule. The rule
                  was a payoff change in a game, not a health rule.
                `),
                grade: 'strong',
                quote: 'the effect of a policy on the level of cooperation is greater when it is chosen democratically by the subjects than when it is exogenously imposed',
                sources: [source('Dal Bó, Foster and Putterman 2010, American Economic Review', 'https://doi.org/10.1257/aer.100.5.2205')]
              }),
              evidence({
                headline: 'A mild penalty that people had voted to place on themselves won compliance, while the same penalty imposed from outside did not.',
                finding: paragraph(`
                  Tyran and Feld compared a mild penalty, a severe penalty, and no penalty in a
                  laboratory game where people chose how much to give to a shared pot. “The results
                  show that exogenously imposing mild law does not achieve compliance, but compliance
                  is much improved if mild law is endogenously chosen”. Voting for the rule led people
                  to expect others to cooperate, and they complied when they expected many others to
                  do so. The penalties were in money, in a game.
                `),
                grade: 'strong',
                quote: 'The results show that exogenously imposing mild law does not achieve compliance, but compliance is much improved if mild law is endogenously chosen',
                sources: [source('Tyran and Feld 2006, Scandinavian Journal of Economics', 'https://doi.org/10.1111/j.1467-9442.2006.00444.x')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A rule chosen by a group member picked by lottery won no more cooperation than the same rule imposed from outside, while a rule chosen by an elected member did.',
                finding: paragraph(`
                  Schories ran a laboratory experiment in which one group member chose a rule for the
                  group, and that member was either elected or picked at random. Schories finds a large
                  gain in cooperation “but only if the group leader is democratically chosen.
                  Especially the subjects who initially did not prefer the policy are more likely to
                  cooperate if it was brought about by an elected representative. There is no
                  democracy premium for randomly appointed group leaders.” The decision maker was one
                  person in a money game, not a panel that deliberates.
                `),
                grade: 'strong',
                quote: 'There is evidence of a large democracy premium in the sense that endogenously chosen institutions lead to more cooperation than identical exogenous institutions, but only if the group leader is democratically chosen. Especially the subjects who initially did not prefer the policy are more likely to cooperate if it was brought about by an elected representative. There is no democracy premium for randomly appointed group leaders.',
                sources: [source('Schories 2022, Experimental Economics', 'https://doi.org/10.1007/s10683-022-09750-1')]
              }),
              evidence({
                headline: 'Farmers gave less to a shared fund under a leader picked by lottery than under a leader they had elected.',
                finding: paragraph(`
                  Grossman and Baldassarri played a public goods game with 1,541 farmers from 50
                  Ugandan farmer groups, in which a monitor could punish people who gave little. The
                  monitor was either elected by the group or chosen by lottery. They find that
                  “subjects electing leaders contribute more to public goods than subjects who were
                  assigned leaders through a lottery”. Behavior in the game also predicted how much
                  farmers cooperated in their real farmer groups.
                `),
                grade: 'strong',
                quote: 'subjects electing leaders contribute more to public goods than subjects who were assigned leaders through a lottery',
                sources: [source('Grossman and Baldassarri 2012, American Journal of Political Science', 'https://doi.org/10.1111/j.1540-5907.2012.00596.x')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Neighborhood task forces decide where and how vaccines are delivered',
      method: 'Neighborhood Task Force',
      summary: 'City health departments let task forces of residents and local groups choose sites, hours, and outreach for doses set aside for hard-hit neighborhoods.',
      anchor: '20,792 doses',
      where: 'City and county health departments, where scarce supply was sited.',
      when: paragraph(`
        February 2021, when federal pharmacy and community vaccination sites were placed, and again
        in April 2021, when access replaced supply as the main barrier.
      `),
      description: paragraph(`
        Task forces of residents, community groups, clinics, churches, and employers decide how
        vaccines reach high-risk neighborhoods. They choose sites and hours, send out mobile units,
        recruit trusted messengers, and work with employers on paid time off. The city or county
        health department keeps control of supply, eligibility, and safety standards. It commits a
        share of doses to the task forces' plans and publishes uptake by zip code. Task forces form
        in February 2021, when agencies were siting scarce federal supply. They meet again in April
        2021, when the barrier shifted from supply to access. Early in the rollout, health
        facilities in heavily Black urban counties were less likely to be giving COVID-19 vaccines.
        Chicago launched Protect Chicago Plus on this model on January 25, 2021. No study separates
        the task forces' role from the extra supply that came with it. Delivery run this way may
        also strengthen neighborhood ties, which the September review saw as part of the point.
        People who helped neighbors through organized efforts early in the pandemic felt closer to
        their community. Much of the activity in online mutual aid groups faded after the first
        wave. Everyday ties matter in a crisis. In Chicago's deadly heat wave, people with friends
        nearby or group activities were less likely to die. The aim is that Black and Hispanic
        residents in the hardest-hit neighborhoods get vaccinated sooner, and fewer of them die of
        COVID-19.
      `),
      outcome: outcome({
        text: 'Black and Hispanic residents in the hardest-hit neighborhoods get vaccinated sooner, and fewer of them die of COVID-19.',
        measured: 'The racial gap in vaccination narrowed',
        claims: [
          claim({
            text: 'Vaccines reach the hardest-hit Black and Hispanic neighborhoods later than whiter, wealthier ones.',
            evidence: [
              evidence({
                headline: 'Early in the rollout, Black and Hispanic residents of poorer neighborhoods got vaccinated at less than half the rate of White residents of better-off ones.',
                finding: paragraph(`
                  Mody and colleagues tracked every COVID-19 vaccination recorded in the St. Louis and
                  Kansas City regions from December 2020 to February 2022. “During early phases of the
                  primary series rollout, Black and Hispanic individuals from high SVI zip codes were
                  vaccinated at less than half the rate of White individuals from low SVI zip codes”,
                  where SVI is the Social Vulnerability Index. Their rates later rose above White rates,
                  in the months when more shots were given at small community sites such as pharmacies,
                  but gaps by neighborhood remained after a year. The registry misses or misclassifies
                  some race and zip code entries.
                `),
                grade: 'strong',
                quote: 'During early phases of the primary series rollout, Black and Hispanic individuals from high SVI zip codes were vaccinated at less than half the rate of White individuals from low SVI zip codes',
                sources: [source('Mody et al. 2022, PLOS Medicine', 'https://doi.org/10.1371/journal.pmed.1004048')]
              }),
              evidence({
                headline: 'Early in the rollout, health facilities in the most heavily Black city counties were less likely to be giving COVID-19 vaccines.',
                finding: paragraph(`
                  Hernandez and colleagues matched every eligible health facility and pharmacy in the
                  country against the places actually giving COVID-19 vaccines in May 2021. In
                  metropolitan counties where more than 42 percent of residents were Black, facilities
                  had 32 percent lower odds of giving vaccines than in counties with a below-average
                  Black population. “Healthcare facilities in counties with higher Black composition, in
                  rural areas, and in hardest-hit communities were less likely to serve as COVID-19
                  vaccine administration locations in May 2021.” The count left out pop-up and other
                  nontraditional sites and covers a single month.
                `),
                grade: 'moderate',
                quote: 'Healthcare facilities in counties with higher Black composition, in rural areas, and in hardest-hit communities were less likely to serve as COVID-19 vaccine administration locations in May 2021.',
                sources: [source('Hernandez et al. 2022, PLOS Medicine', 'https://doi.org/10.1371/journal.pmed.1004069')]
              })
            ],
            counterEvidence: []
          }),
          claim({
            text: 'Residents and local groups who plan delivery put vaccination sites where their neighbors face the most barriers.',
            evidence: [
              evidence({
                headline: 'A vaccination site run with community groups in San Francisco\'s Mission District drew mostly Latino residents, who most often said they came because it was in their neighborhood.',
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
                headline: 'Small clinics held inside Black neighborhoods with local faith leaders\' help vaccinated far more Black residents than a nearby mass vaccination site.',
                finding: paragraph(`
                  Loma Linda University in San Bernardino County, California, worked with faith leaders
                  to share vaccine information and then ran low-barrier clinics inside Black
                  communities. From February to April 2021, 3.7 percent of the people given a first
                  dose at the university's mass site were Black, against 44 percent at the neighborhood
                  clinics: “The multi-tiered community approach (remote-site vaccination clinics)
                  resulted in a necessary overrepresentation of Black vaccinees, previously
                  underrepresented in the LLU traditional mass vaccination clinic effort (44% vs. 3.7%,
                  respectively).” This is a conference abstract that counts who came to each site, and
                  the neighborhood clinics gave far fewer doses.
                `),
                grade: 'weak',
                quote: 'The multi-tiered community approach (remote-site vaccination clinics) resulted in a necessary overrepresentation of Black vaccinees, previously underrepresented in the LLU traditional mass vaccination clinic effort (44% vs. 3.7%, respectively).',
                sources: [source('Abdul-Mutakabbir et al. 2021, Open Forum Infectious Diseases', 'https://doi.org/10.1093/ofid/ofab466.674')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Broad neighborhood-wide campaigns run by community coalitions made little or no difference to health habits, while programs using lay outreach workers did.',
                finding: paragraph(`
                  A review gathered 58 studies of health programs planned and run by coalitions that
                  included members of the racial or ethnic minority groups being served and at least
                  two community organizations. Programs that used lay outreach workers improved health
                  behaviors, while broad community-wide change strategies made little or no
                  difference, and no study was at low risk of bias. Because the studies said too little
                  about the coalitions themselves, “a definitive answer as to whether a coalition-led
                  intervention adds extra value to the types of community engagement intervention
                  strategies described in this review remains unattainable.” The review ends before
                  COVID-19 and does not look at where services were placed.
                `),
                grade: 'moderate',
                quote: 'Thus, a definitive answer as to whether a coalition-led intervention adds extra value to the types of community engagement intervention strategies described in this review remains unattainable.',
                sources: [source('Anderson et al. 2015, Cochrane Database of Systematic Reviews', 'https://doi.org/10.1002/14651858.CD009905.pub2')]
              }),
              evidence({
                headline: 'In poor neighborhoods of Islamabad and Rawalpindi, vaccination camps at venues residents chose raised uptake only near the city center, not in the two areas farthest from it.',
                finding: paragraph(`
                  Abdullah and colleagues surveyed residents of low-income localities in Islamabad and
                  Rawalpindi, Pakistan, before and after a campaign run with community leaders and local
                  groups. Mobile vaccination camps were set up with local organizations, and “the venue of
                  the vaccination site was chosen by the community as a locally well-known and accessible
                  location, such as a school or other landmarks.” Compared with a better-off control area,
                  willingness to be vaccinated rose in the two areas furthest from the city centers, “while
                  vaccine uptake increased in one of the treatment areas by 17.1%”, the one in central
                  Islamabad with clinics nearby. The authors write that the camps “were insufficient to
                  fulfill the extent of demand for vaccination.” Each survey round drew different residents,
                  and the campaign bundled outreach with the camps.
                `),
                grade: 'moderate',
                quote: 'We found that our interventions increased COVID-19 vaccine willingness in two treatment areas that are furthest from city centers by 7.6% and 6.6% respectively, while vaccine uptake increased in one of the treatment areas by 17.1%, compared to the control area.',
                sources: [source('Abdullah et al. 2022, PLOS ONE', 'https://doi.org/10.1371/journal.pone.0274718')]
              })
            ]
          }),
          claim({
            text: 'Trusted local messengers bring in residents that official channels miss.',
            evidence: [
              evidence({
                headline: 'A New York vaccination site reached far more Hispanic and Black residents through appointments booked by community groups than through its online sign-up.',
                finding: paragraph(`
                  NewYork-Presbyterian ran a vaccination site in upper Manhattan and let community
                  organizations, including senior centers, faith groups, and local practices, book and
                  hold appointments for their members. Diaz and colleagues compared who came through
                  each route. “Hispanic patients represented 21 484 of 36 862 patients (58%) scheduled
                  through CBO outreach, 7521 of 24 466 patients (31%) self-scheduled after local zip
                  codes restriction, and 712 of 16 235 patients (4%) of those self-scheduled prior to
                  restriction”. For Black patients the shares were 12, 10, and 2 percent. The study
                  covers one site and compares groups before and after the changes, with no outside
                  comparison.
                `),
                grade: 'moderate',
                quote: 'Hispanic patients represented 21 484 of 36 862 patients (58%) scheduled through CBO outreach, 7521 of 24 466 patients (31%) self-scheduled after local zip codes restriction, and 712 of 16 235 patients (4%) of those self-scheduled prior to restriction',
                sources: [source('Diaz et al. 2022, JAMA Network Open', 'https://doi.org/10.1001/jamanetworkopen.2022.17875')]
              }),
              evidence({
                headline: 'Vaccination events at churches and other faith groups reached more Hispanic, Marshallese, and uninsured people than events at clinics.',
                finding: paragraph(`
                  Community partners in Arkansas ran vaccination events at faith-based organizations
                  and at outpatient clinics, then surveyed 1,476 people while they waited after their
                  shot. “A higher proportion of Hispanic/Latino and Marshallese participants utilized
                  FBOs for vaccination, suggesting collaborations with FBOs can potentially increase
                  vaccination uptake among minority communities and help mitigate vaccination
                  disparities.” People at faith-based events were also more often uninsured and more
                  likely to say they completely trusted the vaccine. The survey describes who came to
                  each kind of event and does not show that they would otherwise have gone unvaccinated.
                `),
                grade: 'moderate',
                quote: 'A higher proportion of Hispanic/Latino and Marshallese participants utilized FBOs for vaccination, suggesting collaborations with FBOs can potentially increase vaccination uptake among minority communities and help mitigate vaccination disparities.',
                sources: [source('McElfish et al. 2022, Journal of Family Medicine and Primary Care', 'https://doi.org/10.4103/jfmpc.jfmpc_327_22')]
              }),
              evidence({
                headline: 'Men least willing to get vaccinated became more willing after hearing from people like themselves than from doctors.',
                finding: paragraph(`
                  Alsan and Eichmeyer showed Black and White men without a college degree vaccine
                  messages from either a layperson like themselves or a medical expert. “Our main
                  finding is that laypeople (nonexpert concordant senders) are most effective at
                  promoting vaccination, particularly among those least willing to become vaccinated.”
                  Lay senders were rated less qualified and less trustworthy, yet raised willingness to
                  get a COVID-19 vaccine by 8.8 percentage points. The authors credit social closeness.
                  The study measured stated willingness in an online experiment, not shots given.
                `),
                grade: 'moderate',
                quote: 'Our main finding is that laypeople (nonexpert concordant senders) are most effective at promoting vaccination, particularly among those least willing to become vaccinated.',
                sources: [source('Alsan and Eichmeyer 2024, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.20210393')]
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
            text: 'Bringing vaccination close to home gets people vaccinated sooner than urging them to go.',
            evidence: [
              evidence({
                headline: 'Swiss towns that got a mobile vaccination unit for one four-hour visit saw more than three times as many unvaccinated adults get a shot within three weeks.',
                finding: paragraph(`
                  Twenty Swiss communities were split into two groups, and half got a mobile
                  vaccination unit for four hours on a single day. Over the next three weeks, 12.8
                  percent of unvaccinated adults in those communities got vaccinated, against 3.8
                  percent elsewhere: “the vaccination rate in the sample of the treatment group
                  surpassed the rate in the control group by a factor of 3.4 (+9.0 percentage points)
                  over 3 weeks”. Vaccinations at other locations did not fall. Nothing here was
                  community-chosen, and the trial had no messaging arm.
                `),
                grade: 'strong',
                quote: 'The vaccination rate in the sample of the treatment group surpassed the rate in the control group by a factor of 3.4 (+9.0 percentage points) over 3 weeks.',
                sources: [source('Kulle, Schumacher and von Bieberstein 2024, Journal of Public Health', 'https://doi.org/10.1093/pubmed/fdad213')]
              }),
              evidence({
                headline: 'People who lived farther from a vaccination site were less likely to be vaccinated, and vaccination rose in Chicago zip codes after a site opened nearby.',
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
                headline: 'Text messages urging unvaccinated people to go get a shot did not get them vaccinated.',
                finding: paragraph(`
                  Rhode Island's health department texted 142,428 people who had been tested for
                  COVID-19 but not vaccinated, using language that had worked earlier in the rollout.
                  The trial found no evidence the messages “increased COVID-19 vaccination among people
                  who remained unvaccinated five or more weeks after becoming eligible”. It tested text
                  messages only, not in-person messengers.
                `),
                grade: 'strong',
                quote: 'increased COVID-19 vaccination among people who remained unvaccinated five or more weeks after becoming eligible',
                sources: [source('Rabb et al. 2022, Nature', 'https://doi.org/10.1038/s41586-022-04526-2')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'As Black adults caught up with White adults on vaccination, what tracked the change was learning about vaccine safety, not easier access.',
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
            text: 'Steering vaccines and outreach to the hardest-hit neighborhoods closes their vaccination gap sooner.',
            evidence: [
              evidence({
                headline: 'After Chicago let neighborhood task forces design vaccine outreach in its hardest-hit zip codes, vaccination there began climbing faster than in the rest of the city.',
                finding: paragraph(`
                  Under Protect Chicago Plus, “the city worked with each prioritized community to
                  create a neighborhood task force composed of diverse representatives to design
                  vaccine outreach and distribution strategies” in 13 high-vulnerability zip codes, 6
                  majority Latinx and 7 majority Black. Before the program, coverage in those zip codes
                  grew about half as fast as elsewhere. Afterward, “zip codes prioritized for the
                  program had 0.42% additional coverage per day as compared with 0.27% per day for
                  non-PCP zip codes.” First-dose coverage there rose from 58 percent of the rate in
                  other Chicago zip codes to 92 percent in under two months. The city widened vaccine
                  eligibility in the same zip codes, so the task forces' own share of the gain cannot be
                  separated out.
                `),
                grade: 'moderate',
                quote: 'In model analysis after program implementation, zip codes prioritized for the program had 0.42% additional coverage per day as compared with 0.27% per day for non-PCP zip codes.',
                sources: [source('Johnson et al. 2023, Public Health Reports', 'https://journals.sagepub.com/doi/full/10.1177/00333549221143093')]
              }),
              evidence({
                headline: 'When Rhode Island sent early vaccine supply and outreach in residents\' own languages to its hardest-hit, mostly Latino city, residents there got vaccinated sooner.',
                finding: paragraph(`
                  Rhode Island set aside part of its first vaccine supply for Central Falls, a small,
                  largely Latino city hit hard by COVID-19, and paired it with a
                  community engagement plan in residents' languages. Fortnam and colleagues estimated
                  what would have happened without the early priority. “Early geographic prioritization
                  increased vaccine uptake and reduced cases in Central Falls, thereby reducing
                  geographic disparities.” They estimate about 520 cases averted over 16 weeks. The
                  policy bundled early supply with outreach, so the two cannot be separated, and the
                  study covers one city.
                `),
                grade: 'strong',
                quote: 'Early geographic prioritization increased vaccine uptake and reduced cases in Central Falls, thereby reducing geographic disparities.',
                sources: [
                  source('Fortnam et al. 2024, American Journal of Public Health', 'https://doi.org/10.2105/AJPH.2024.307741'),
                  source('Associated Press via WBUR 2021', 'https://www.wbur.org/commonhealth/2021/02/24/central-falls-chelsea-coronavirus-vaccine-access')
                ]
              }),
              evidence({
                headline: 'When California steered vaccines to its least advantaged communities, vaccination there rose.',
                finding: paragraph(`
                  In March 2021 California gave vaccine priority to the communities its Healthy Places
                  Index ranked least advantaged. Hoover and colleagues compared those communities with
                  others before and after the policy. “Among prioritized communities, vaccination rates
                  increased 28.4 percent after policy implementation.” They estimate the policy also
                  averted 679 deaths, though those communities still bore more than their share of
                  cases and deaths. Communities were defined by a socioeconomic index, not by race, and
                  the policy tested supply priority rather than community control.
                `),
                grade: 'strong',
                quote: 'Among prioritized communities, vaccination rates increased 28.4 percent after policy implementation.',
                sources: [source('Hoover et al. 2024, Health Affairs', 'https://doi.org/10.1377/hlthaff.2023.01163')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Black neighborhoods in Chicago still had the lowest vaccination rates after a year of community outreach.',
                finding: paragraph(`
                  Researchers matched the timeline of Chicago’s vaccine outreach, led by Protect
                  Chicago Plus, to uptake in each community area. By December 2021, 51.3 percent of
                  Black Chicagoans had completed vaccination, against 63.6 percent of Hispanic, 69.8
                  percent of White, and 77.6 percent of Asian residents. “Despite citywide efforts to
                  build community infrastructure, Black communities had relatively lower levels of
                  vaccine uptake than other communities.” The study describes the pattern and does not
                  compare areas with and without task forces.
                `),
                grade: 'moderate',
                quote: 'Despite citywide efforts to build community infrastructure, Black communities had relatively lower levels of vaccine uptake than other communities.',
                sources: [source('Kim et al. 2024, Journal of Public Health Management and Practice', 'https://doi.org/10.1097/phh.0000000000001841')]
              }),
              evidence({
                headline: 'Black and Hispanic residents living side by side in the same public housing got vaccinated at very different rates.',
                finding: paragraph(`
                  Wong and colleagues surveyed residents of public housing in Watts, south Los Angeles,
                  between June 2021 and May 2022. Hispanic residents were 31 to 44 percentage points more
                  likely to be vaccinated than their Black neighbors, and about 40 percent of that gap
                  went with differing attitudes toward the vaccines. “There are sizeable racial and
                  ethnic COVID-19 vaccination disparities even within low-income and minoritized
                  communities.” The study compares residents at a single time and does not test any
                  delivery program.
                `),
                grade: 'moderate',
                quote: 'There are sizeable racial and ethnic COVID-19 vaccination disparities even within low-income and minoritized communities.',
                sources: [source('Wong et al. 2024, BMC Public Health', 'https://doi.org/10.1186/s12889-024-17968-2')]
              })
            ]
          }),
          claim({
            text: 'Raising vaccination in the hardest-hit neighborhoods prevents COVID-19 deaths there.',
            evidence: [
              evidence({
                headline: 'Chicago neighborhoods with lower vaccination lost more residents to COVID-19, and most of those deaths could have been prevented at the best-covered neighborhoods\' rates.',
                finding: paragraph(`
                  Zeng and colleagues followed COVID-19 deaths across 52 Chicago zip codes. In the least
                  vaccinated quarter of zip codes, 80 percent of residents were Black, against 8 percent
                  in the most vaccinated quarter. A zip code vaccination rate 10 points higher before the
                  Alpha wave went with a 39 percent lower risk of dying of COVID-19, and 24 percent lower
                  before the Delta wave. Comparing the two quarters across waves, they estimate that “119
                  Alpha wave deaths (72% [95% CI, 63%-81%]) and 108 Delta wave deaths (75% [95% CI,
                  66%-84%]) might have been prevented in the least vaccinated quartile of zip codes if it
                  had had the vaccination coverage of the most vaccinated quartile.” The comparison is
                  between zip codes, so other neighborhood differences may add to the gap.
                `),
                grade: 'moderate',
                quote: 'The difference-in-difference estimate was that 119 Alpha wave deaths (72% [95% CI, 63%-81%]) and 108 Delta wave deaths (75% [95% CI, 66%-84%]) might have been prevented in the least vaccinated quartile of zip codes if it had had the vaccination coverage of the most vaccinated quartile.',
                sources: [source('Zeng et al. 2022, JAMA Network Open', 'https://doi.org/10.1001/jamanetworkopen.2022.14753')]
              }),
              evidence({
                headline: 'Poorer US counties lost more people to COVID-19, and much of that extra loss went with their lower vaccination.',
                finding: paragraph(`
                  Goto and colleagues compared COVID-19 deaths across 3,142 US counties, using each
                  county's share of fully vaccinated residents at the end of 2021.
                  Each 10 percent rise in a county's poverty rate went with 25.3 more deaths per 100,000
                  people. Holding vaccination at the level of the best-covered tenth of counties removed
                  an estimated 37 percent of that gap, and at the highest observed level, 81 percent.
                  “Higher county-level poverty rates and lower vaccination rates were associated with
                  greater COVID-19 mortality rates in the United States.” The estimates come from one
                  snapshot of counties, which are larger than neighborhoods.
                `),
                grade: 'moderate',
                quote: 'Higher county-level poverty rates and lower vaccination rates were associated with greater COVID-19 mortality rates in the United States.',
                sources: [source('Goto, Kawachi, Kondo and Inoue 2023, Annals of Epidemiology', 'https://doi.org/10.1016/j.annepidem.2023.07.003')]
              }),
              evidence({
                headline: 'In Ontario, residents of the poorest neighborhoods kept dying of COVID-19 more often, and their lower vaccination accounted for more than half of that extra risk.',
                finding: paragraph(`
                  Wang and colleagues followed 11.2 million adults in Ontario from March 2020 to January
                  2022, grouping them by the income of their small neighborhood. After accounting for age,
                  health, and other social conditions, people in the poorest fifth of neighborhoods were
                  more likely to die of COVID-19, and that gap persisted across waves. They were also less
                  likely to be vaccinated, and “this inequality in vaccination accounted for 56.9% [22.5%-91.3%] of inequalities in
                  COVID-19 deaths between individuals in the lowest income vs highest income quintiles.” The
                  estimate splits observed deaths in the fourth and fifth waves into the part that ran
                  through vaccination and the rest, and its range is wide.
                `),
                grade: 'moderate',
                quote: 'This inequality in vaccination accounted for 56.9% [22.5%-91.3%] of inequalities in COVID-19 deaths between individuals in the lowest income vs highest income quintiles.',
                sources: [source('Wang et al. 2026, American Journal of Epidemiology', 'https://doi.org/10.1093/aje/kwaf051')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The poorest Dutch adults over 50 died of COVID-19 about three times as often as the richest, and worse health explained far more of that gap than lower vaccination.',
                finding: paragraph(`
                  Milkovska and colleagues linked Dutch records on health, medication, hospital stays, and
                  vaccination for 6.6 million people over 50 in 2021. People in the poorest fifth by income
                  were about three times as likely to die of COVID-19 as those in the richest fifth.
                  “Differences in pre-existing health are more important than differences in vaccination
                  uptake in explaining this gap.” For the poorest men and women, health differences explained
                  67 and 46 percent of the gap, and vaccination explained 14 and 19 percent. The study groups
                  people by their own income rather than by neighborhood.
                `),
                grade: 'moderate',
                quote: 'Differences in pre-existing health are more important than differences in vaccination uptake in explaining this gap.',
                sources: [source('Milkovska, Issa, van Baal and Wouterse 2026, International Journal of Epidemiology', 'https://doi.org/10.1093/ije/dyag188')]
              })
            ]
          }),
          claim({
            text: 'Closing the racial gap in vaccination narrows the racial gap in COVID-19 deaths.',
            evidence: [
              evidence({
                headline: 'In England, the higher risk of dying of COVID-19 that Black adults still faced after the vaccine rollout shrank sharply once their lower vaccination was counted.',
                finding: paragraph(`
                  Bosworth and colleagues linked census and health records for 28.8 million adults in
                  England and followed deaths from COVID-19 as vaccines rolled out. Groups with the
                  lowest vaccination, including Black African and Black Caribbean adults, had the
                  highest risk of death. In the third wave, accounting for vaccination status sharply
                  reduced the extra risk that remained for Black African, Black Caribbean, and Pakistani
                  adults. “Lower COVID-19 vaccination uptake in several ethnic minority groups may drive
                  some of the differences in COVID-19 mortality compared to White British.” The study
                  adjusts for measured differences between groups, and Bangladeshi adults kept a
                  higher risk.
                `),
                grade: 'moderate',
                quote: 'Lower COVID-19 vaccination uptake in several ethnic minority groups may drive some of the differences in COVID-19 mortality compared to White British.',
                sources: [source('Bosworth et al. 2023, BMC Medicine', 'https://doi.org/10.1186/s12916-022-02704-7')]
              }),
              evidence({
                headline: 'After vaccines reached dialysis clinics, where Black and Hispanic patients got vaccinated at least as often as White patients, their rise in deaths fell below White patients\'.',
                finding: paragraph(`
                  Kim and colleagues compared deaths among about 687,000 Medicare patients with kidney
                  failure against the number expected from earlier years. Until the end of January 2021,
                  deaths ran 31.9 percent above normal for Hispanic patients and 27.5 percent for Black
                  patients, against 16.4 percent for White patients. “However, these disparities were
                  substantially reduced and indeed reversed after the end of January 2021, when COVID-19
                  vaccines were widely distributed, with a percent excess deaths of 17.4% among Hispanic
                  patients, 19.4% among Black patients, and the highest (27.6%) among White patients.” The
                  authors point to “a higher take-up rate of vaccines among racial/ethnic minority compared
                  with White patients”, drawing on another study of dialysis facilities. This research letter
                  counts deaths from all causes, covers Medicare patients only, and does not measure
                  vaccination itself.
                `),
                grade: 'moderate',
                quote: 'However, these disparities were substantially reduced and indeed reversed after the end of January 2021, when COVID-19 vaccines were widely distributed, with a percent excess deaths of 17.4% among Hispanic patients, 19.4% among Black patients, and the highest (27.6%) among White patients.',
                sources: [source('Kim et al. 2023, Clinical Journal of the American Society of Nephrology', 'https://doi.org/10.2215/CJN.0000000000000226')]
              }),
              evidence({
                headline: 'In US counties with more minority and non-English-speaking residents, lower vaccination accounted for their higher share of COVID-19 cases ending in death.',
                finding: paragraph(`
                  Chen and colleagues used 2021 data for 3,112 US counties to trace how social vulnerability
                  related to vaccination coverage and to the share of COVID-19 cases that ended in death.
                  Counties that ranked higher on minority status and language had lower vaccination. The
                  analysis “found that 37.6% (mediation/total effect, 0.0014/0.0037), 10% (0.0003/0.0030)
                  and 100% (0.0005/0.0005) of the effects in the pathways involving socioeconomic status,
                  household composition & disability and minority status & language, respectively, were
                  mediated by VCR”, the vaccination coverage rate. The counties were compared at one time,
                  the outcome is deaths per case rather than per resident, and the minority status effect
                  was small.
                `),
                grade: 'moderate',
                quote: 'found that 37.6% (mediation/total effect, 0.0014/0.0037), 10% (0.0003/0.0030) and 100% (0.0005/0.0005) of the effects in the pathways involving socioeconomic status, household composition & disability and minority status & language, respectively, were mediated by VCR.',
                sources: [source('Chen, Zhang, Li and Li 2022, BMC Public Health', 'https://doi.org/10.1186/s12889-022-14592-w')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Most of the shrinking gap between Black and White COVID-19 death rates came from rising White deaths and the virus moving to rural areas.',
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
                headline: 'In Minnesota, Black, Hispanic, and Asian adults under 65 were more vaccinated than White adults, yet they still died of COVID-19 at far higher rates.',
                finding: paragraph(`
                  Wrigley-Field and colleagues analyzed Minnesota death certificates and vaccination rates by
                  age and race from 2020 to 2022. Black, Hispanic, and Asian adults under 65 were more highly
                  vaccinated than White adults of the same ages through most of the Delta and Omicron surges.
                  Yet at ages 45 to 64 during Omicron, COVID-19 mortality was 208 percent of the White rate
                  for Black adults, 164 percent for Asian adults, and 115 percent for Hispanic adults. “This
                  discrepancy between vaccination and mortality patterning by race/ethnicity suggests that if
                  the current period is a pandemic of the unvaccinated, it also remains a pandemic of the
                  disadvantaged in ways that can decouple from vaccination rates.” The study compares group
                  rates in one state and does not follow individuals.
                `),
                grade: 'moderate',
                quote: 'This discrepancy between vaccination and mortality patterning by race/ethnicity suggests that if the current period is a pandemic of the unvaccinated, it also remains a pandemic of the disadvantaged in ways that can decouple from vaccination rates.',
                sources: [source('Wrigley-Field, Berry, Stokes and Leider 2023, American Journal of Preventive Medicine', 'https://doi.org/10.1016/j.amepre.2022.08.005')]
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
      summary: 'Residents of the neighborhoods the money is meant for decide how a share of the American Rescue Plan community funds is spent.',
      anchor: 'vaccine equity push',
      where: 'City and county governments that received American Rescue Plan community engagement funds.',
      when: paragraph(`
        June to July 2021, when the outreach awards were made. The federal government gave $323
        million to 150 organizations for vaccination outreach and $250 million to 73 local
        governments for health literacy work. The rules for who decides are set once, at the award.
      `),
      description: paragraph(`
        Residents of the neighborhoods the money is meant to reach decide how a share of the
        community support funds is spent. The funding agency sets the size of that share and what
        the money can pay for. Neighborhood assemblies propose projects, debate them, and vote. The
        vote decides the spending rather than advising on it. The agency publishes what residents
        chose and what the money bought. Few local governments asked residents how to spend pandemic
        relief money. In Michigan, only about one in seven did. Federal reviews also found that
        COVID-19 equity and vaccine confidence money was slow to reach communities. The share
        residents control is then spent on the priorities they rank first. The aim is that residents
        get the help they need most and trust how the money is spent.
      `),
      outcome: outcome({
        text: 'Residents get the help they need most and trust how the money is spent.',
        measured: null,
        claims: [
          claim({
            text: 'Governments often decide how to spend relief money without asking residents what should come first.',
            evidence: [
              evidence({
                headline: 'Only about one in seven Michigan local governments asked residents to help plan how to spend their pandemic recovery money.',
                finding: paragraph(`
                  The University of Michigan's statewide survey of local government leaders asked how
                  they were planning and carrying out projects paid for by the American Rescue Plan.
                  It found that “15% of Michigan jurisdictions overall report engaging their community
                  members, for example through resident participation in formal committees or
                  community surveys to gauge support for spending options”. The largest jurisdictions
                  were more likely to do so, at 35 percent. The survey records what leaders reported
                  in one state, not what residents would have chosen.
                `),
                grade: 'moderate',
                quote: 'To plan or implement ARPA projects, 15% of Michigan jurisdictions overall report engaging their community members, for example through resident participation in formal committees or community surveys to gauge support for spending options',
                sources: [source('Fitzpatrick, Horner and Ivacko 2022, Michigan Public Policy Survey, University of Michigan', 'https://closup.umich.edu/sites/closup/files/2022-07/mpps-policy-brief-arpa-2022.pdf')]
              })
            ],
            counterEvidence: []
          }),
          claim({
            text: 'When residents allocate public money, spending shifts toward the services they rank first.',
            evidence: [
              evidence({
                headline: 'When Russian villages got hands-on help to run participatory budgeting, local budgets shifted toward the services residents ranked first.',
                finding: paragraph(`
                  Rural settlements were chosen at random to receive training, or training plus
                  on-the-ground help, to run participatory budgeting. Training alone did not work.
                  Where settlements had longer experience of governing themselves, “local
                  administrations allocated larger fractions of public budgets to services identified
                  as top priorities by citizens”, and residents were more satisfied with public
                  services. The budget shift shows up in that subgroup, not across the whole sample.
                `),
                grade: 'strong',
                quote: 'local administrations allocated larger fractions of public budgets to services identified as top priorities by citizens',
                sources: [source('Beuermann and Amelina 2018, Economics of Governance', 'https://link.springer.com/article/10.1007/s10101-018-0214-3')]
              }),
              evidence({
                headline: 'Brazilian cities that adopted participatory budgeting spent their money in closer line with what residents asked for.',
                finding: paragraph(`
                  Comparing Brazilian municipalities that did and did not adopt participatory budgeting
                  between 1990 and 2004, Gonçalves found that adopters “favored an allocation of public
                  expenditures that closely matched popular preferences and channeled a larger fraction
                  of their budgets to investments in sanitation and health services”. Cities chose
                  whether to adopt, so cities that adopted may already have differed from those that
                  did not.
                `),
                grade: 'moderate',
                quote: 'municipalities using participatory budgeting favored an allocation of public expenditures that closely matched popular preferences and channeled a larger fraction of their budgets to investments in sanitation and health services',
                sources: [source('Gonçalves 2014, World Development', 'https://doi.org/10.1016/j.worlddev.2013.01.009')]
              }),
              evidence({
                headline: 'When New York City council districts let residents choose capital projects, money moved from parks toward schools, streets, and public housing.',
                finding: paragraph(`
                  Comparing ten years of capital spending in council districts that did and did not
                  adopt participatory budgeting, researchers found that “when council districts
                  adopted PB, greater proportions of their discretionary capital budgets were
                  allocated to schools, streets and traffic improvements, and public housing”, and
                  less went to parks. They conclude that priorities shift when residents decide
                  directly. Districts chose whether to adopt, so council members who adopted it may
                  already have had different priorities.
                `),
                grade: 'moderate',
                quote: 'when council districts adopted PB, greater proportions of their discretionary capital budgets were allocated to schools, streets and traffic improvements, and public housing',
                sources: [source('Hagelskamp, Silliman, Godfrey and Schleifer 2020, New Political Science', 'https://doi.org/10.1080/07393148.2020.1773689')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When Indonesian villages chose projects by a direct vote instead of a village meeting, the projects chosen barely changed.',
                finding: paragraph(`
                  In 49 Indonesian villages, whether development projects were chosen by
                  representative meetings or by a direct vote of all villagers was assigned at random.
                  “Changing the political mechanism had much smaller effects on the actual projects
                  selected, with some evidence that plebiscites resulted in projects chosen by women
                  being located in poorer areas.” Villagers who voted were far more satisfied, but
                  the money went to much the same things.
                `),
                grade: 'strong',
                quote: 'Changing the political mechanism had much smaller effects on the actual projects selected, with some evidence that plebiscites resulted in projects chosen by women being located in poorer areas.',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              }),
              evidence({
                headline: 'Participatory budgeting in New York City spread money across more small projects but did not change what the money was spent on.',
                finding: paragraph(`
                  New York's process runs through council members' discretionary funds. Officials who
                  used participatory budgeting “fund more projects at lower average amounts than those
                  not involved but do not change the areas of funding”. The result comes from a system
                  built on legislative earmarks, and it disagrees with the New York study above.
                `),
                grade: 'moderate',
                quote: 'Officials involved fund more projects at lower average amounts than those not involved but do not change the areas of funding',
                sources: [source('Calabrese, Williams and Gupta 2020, Administration and Society', 'https://doi.org/10.1177/0095399720912548')]
              })
            ]
          }),
          claim({
            text: 'Residents who take part in budgeting rank priorities much as their neighbors who stay home would.',
            evidence: [
              evidence({
                headline: 'Cook County residents keen to join participatory budgeting would spend public money on much the same things as residents who were not.',
                finding: paragraph(`
                  A survey of Cook County, Illinois, residents asked who wanted to take part in
                  participatory budgeting and how they would spend a million dollars on public spaces
                  in their community. Interest ran higher among younger, Black, and Latine residents,
                  and also among better-off residents in neighborhoods already in good shape. The
                  projects the two groups named were broadly similar, and the authors conclude that
                  “inequalities in who is interested in participating may not radically affect policy
                  outcomes”. The survey measures stated interest, not who actually turned out.
                `),
                grade: 'moderate',
                quote: 'Our evidence also suggests that inequalities in who is interested in participating may not radically affect policy outcomes.',
                sources: [source('Doherty, Pavel, Jackson and Garbarski 2023, State Politics and Policy Quarterly', 'https://doi.org/10.1017/spq.2023.25')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In Chicago, the residents who voted in participatory budgeting were whiter, more educated, and better off than the neighborhoods they lived in.',
                finding: paragraph(`
                  Surveys and interviews from Chicago's process found that “residents who voted in PB
                  Chicago were more often white, college educated, and from higher-income households
                  relative to both the local population and politically active residents in Chicago”.
                  The authors also found that the narrow focus on capital works did not meet the needs
                  of less privileged residents.
                `),
                grade: 'moderate',
                quote: 'residents who voted in PB Chicago were more often white, college educated, and from higher‐income households relative to both the local population and politically active residents in Chicago',
                sources: [source('Pape and Lim 2019, Sociological Forum', 'https://doi.org/10.1111/socf.12550')]
              }),
              evidence({
                headline: 'In an Indonesian city\'s participatory budget, the poorest neighborhoods proposed fewer projects and received less than their share of the money.',
                finding: paragraph(`
                  Grillos traced every stage of Surakarta's participatory budget, from proposals to
                  priority setting to building. She found that “on average, sub-units with more poor
                  people receive a smaller percentage of funding than would correspond to their share
                  of the general population”. The gap began at the first step, because the poorest
                  neighborhoods were less likely to put forward proposals at all.
                `),
                grade: 'moderate',
                quote: 'on average, sub-units with more poor people receive a smaller percentage of funding than would correspond to their share of the general population',
                sources: [source('Grillos 2017, World Development', 'https://doi.org/10.1016/j.worlddev.2017.03.019')]
              })
            ]
          }),
          claim({
            text: 'Participatory budgeting raises residents\' trust in how public money is spent.',
            evidence: [
              evidence({
                headline: 'When Indonesian villagers voted directly on their local projects, they were far more satisfied with the projects and saw more benefit in them.',
                finding: paragraph(`
                  In 49 Indonesian villages, whether development projects were chosen by
                  representative meetings or by a direct vote of all villagers was assigned at random.
                  “Plebiscites resulted in dramatically higher satisfaction among villagers, increased
                  knowledge about the project, greater perceived benefits, and higher reported
                  willingness to contribute.” The study measures satisfaction with the projects chosen
                  and the legitimacy of the choice, not trust in how the money was later spent.
                `),
                grade: 'strong',
                quote: 'Plebiscites resulted in dramatically higher satisfaction among villagers, increased knowledge about the project, greater perceived benefits, and higher reported willingness to contribute.',
                sources: [source('Olken 2010, American Political Science Review', 'https://doi.org/10.1017/S0003055410000079')]
              }),
              evidence({
                headline: 'Buenos Aires residents told how the city\'s participatory budget worked rated their government as slightly more honest and well-meaning.',
                finding: paragraph(`
                  In a survey experiment in Buenos Aires, giving residents detailed information about
                  the city's participatory budget “marginally shapes voters' assessments of government
                  performance and political trust”. It raised their sense of the government's
                  benevolence and honesty, most among people who started out with low opinions of it.
                  The people surveyed heard about the budget rather than taking part in it, and the
                  effect is small.
                `),
                grade: 'moderate',
                quote: 'providing detailed information about citizen involvement and outputs of a participatory budget initiative marginally shapes voters\' assessments of government performance and political trust',
                sources: [source('Ardanaz, Otálvaro-Ramírez and Scartascini 2022, World Development', 'https://doi.org/10.1016/j.worlddev.2022.106132')]
              })
            ],
            counterEvidence: [
              evidence({
                  headline: 'Afghan villagers who chose and ran their own council projects thought better of their government while the money flowed, then went back to their old views once it ran out.',
                  finding: paragraph(`
                    Beath, Christia and Enikolopov followed 500 Afghan villages, half picked at random to join
                    the National Solidarity Programme, which set up elected village councils to choose and run
                    small projects with block grants. The programme brought water and electricity, but
                    “effects on perceptions of local and national government performance and material economic
                    outcomes were, however, more limited or short-lived.” Their fuller working paper reports
                    that “during project implementation, NSP improved perceptions of the central and
                    sub-national government, but this effect faded after project completion”, and that male
                    villagers came to rate local governance worse. The programme was a rural aid scheme in a
                    conflict zone, and the survey asked about government performance rather than trust in how
                    the money was spent.
                  `),
                  grade: 'strong',
                  quote: 'Effects on perceptions of local and national government performance and material economic outcomes were, however, more limited or short-lived.',
                  sources: [
                    source('Beath, Christia and Enikolopov 2015, International Peacekeeping', 'https://doi.org/10.1080/13533312.2015.1059287'),
                    source('Beath, Christia and Enikolopov 2013, WIDER Working Paper 2013/112', 'https://www.econstor.eu/bitstream/10419/93712/1/770277225.pdf')
                  ]
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
      name: 'Residents set the goals that outreach funds are judged against',
      method: 'Participatory Monitoring and Evaluation',
      summary: 'Residents of the neighborhoods an outreach award serves set the measures of success, and results are published against them.',
      anchor: 'vaccine equity push',
      linked: true,
      where: 'Any agency funding community outreach, with residents of the neighborhoods served.',
      when: paragraph(`
        June to July 2021, when the outreach awards were made. Award terms are set once, so that is
        where an evaluation duty can attach without new legal authority.
      `),
      description: paragraph(`
        Residents of the neighborhoods an outreach award is meant to reach decide what success looks
        like. They set the measures with the grantee and an independent evaluator before any money
        is spent. Results are then published against those measures. The funding agency writes this
        duty into the award terms. Residents do not decide how the money is spent. They decide what
        the spending is judged by, and they can see how much reached their neighborhood. That makes
        the role closer to citizen science than to a vote. Residents rarely know how much of the
        public money meant for them actually arrives. The aim is that outreach improves in the
        neighborhoods it is meant to reach, and residents trust government more.
      `),
      outcome: outcome({
        text: 'Outreach improves in the neighborhoods it is meant to reach, and residents trust government more.',
        measured: null,
        claims: [
          claim({
            text: 'Residents rarely know how much of the public money meant for them actually arrives.',
            evidence: [
              evidence({
                headline: 'Indonesian villagers sensed only a small part of the money missing from their road projects, because officials hid the theft where villagers could not see it.',
                finding: paragraph(`
                  Olken compared what villagers said about corruption in their village road project
                  with engineers’ estimates of how much money was actually missing from it. Villagers’
                  views carried some real information, but “the magnitude of the reported information,
                  however, is small, in part because officials hide corruption where it is hardest for
                  villagers to detect.” Villagers’ reports were also biased in some directions. The study
                  sets perceptions beside a measured amount in the same projects, so it shows how
                  little villagers could see, not what would help them see more.
                `),
                grade: 'moderate',
                quote: 'The magnitude of the reported information, however, is small, in part because officials hide corruption where it is hardest for villagers to detect.',
                sources: [source('Olken 2009, Journal of Public Economics', 'https://doi.org/10.1016/j.jpubeco.2009.03.001')]
              }),
              evidence({
                headline: 'American voters rewarded their representatives for how often they announced federal money for the district, not for how much money it was.',
                finding: paragraph(`
                  Using what members of Congress told constituents alongside survey experiments with
                  voters, the authors argue that constituents “lack the necessary information and
                  motivation” to give credit in proportion to the money spent in their district.
                  Legislators shape which spending they get credit for, and “constituents are more
                  responsive to the total number of messages sent rather than the amount claimed.” The
                  study measures credit for spending rather than what residents know about any one
                  grant.
                `),
                grade: 'strong',
                quote: 'constituents are more responsive to the total number of messages sent rather than the amount claimed',
                sources: [source('Grimmer, Messing and Westwood 2012, American Political Science Review', 'https://doi.org/10.1017/S0003055412000457')]
              })
            ]
          }),
          claim({
            text: 'When spending is published where residents can see it, they learn whether the money reached them.',
            evidence: [
              evidence({
                headline: 'When Indonesian villages posted who was owed subsidized rice, more households knew they were eligible, and they received more of the rice.',
                finding: paragraph(`
                  Eligible households received only about a third of the rice subsidy meant for them,
                  and in villages without cards only 30 percent could correctly say whether they were
                  eligible. In more than 550 villages, the government mailed cards telling eligible
                  households what they were owed, and in half of the card villages, chosen at random,
                  the list of eligible households was also posted around the village and announced over
                  the mosque loudspeaker. “While public information increased everyone’s knowledge about
                  their own eligibility status, this treatment appears to have also promoted
                  second-order knowledge”, and eligible households there gained twice the extra subsidy
                  that the cards alone produced. Households learned what they were owed before the rice
                  was handed out, rather than tracking spending afterward.
                `),
                grade: 'strong',
                quote: 'While public information increased everyone’s knowledge about their own eligibility status, this treatment appears to have also promoted second-order knowledge',
                sources: [source('Banerjee, Hanna, Kyle, Olken and Sumarto 2018, Journal of Political Economy', 'https://doi.org/10.1086/696226')]
              }),
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
                headline: 'When Brazil published audits of how cities spent federal money before an election, voters removed more of the mayors the audits found corrupt, most where local radio spread the findings.',
                finding: paragraph(`
                  Brazil’s federal government picked cities at random to audit their use of federal
                  transfers and released the reports to the public and the media. Comparing cities
                  audited before the 2004 municipal election with cities audited after it, at the same
                  level of reported corruption, the authors show “that the release of the audit
                  outcomes had a significant impact on incumbents’ electoral performance, and that
                  these effects were more pronounced in municipalities where local radio was present to
                  divulge the information.” Mayors whose audits found more corruption were less likely
                  to be reelected. What voters learned is read from how they voted rather than asked
                  directly.
                `),
                grade: 'strong',
                quote: 'We show that the release of the audit outcomes had a significant impact on incumbents\' electoral performance, and that these effects were more pronounced in municipalities where local radio was present to divulge the information.',
                sources: [source('Ferraz and Finan 2008, Quarterly Journal of Economics', 'https://doi.org/10.1162/qjec.2008.123.2.703')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'After village meetings in India explained how parents could oversee their schools, barely any more parents knew the school oversight committee existed.',
                finding: paragraph(`
                  In villages chosen at random, an education organization held meetings to tell
                  residents about the village education committee (VEC), the public funds it could
                  draw on, and how well the village’s children could read. Committee members learned
                  more about their role, but parents barely did: “these effects are strikingly small,
                  and the proportion of people who know about the VEC even after the interventions
                  remains very small, barely 7 percent.” None of the approaches led parents to get more
                  involved in the schools.
                `),
                grade: 'strong',
                quote: 'However, these effects are strikingly small, and the proportion of people who know about the VEC even after the interventions remains very small, barely 7 percent.',
                sources: [source('Banerjee, Banerji, Duflo, Glennerster and Khemani 2010, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.2.1.1')]
              }),
              evidence({
                headline: 'When report cards on Ugandan clinics were shared at community meetings, fewer than one in five households in those villages had even heard of the meetings.',
                finding: paragraph(`
                  A program in 16 Ugandan districts gave communities report cards on their health
                  center and brought residents and staff together to agree on fixes. It reached few
                  residents: “fewer than 20 percent of households surveyed at midline in treated
                  villages had even heard about the community dialogues or interface meetings.”
                  Residents’ knowledge of their rights as patients did not rise. The authors note that
                  low awareness is common in programs of this kind, and argue that the meetings still
                  drew enough people for pressure on staff to build, which it did not.
                `),
                grade: 'strong',
                quote: 'fewer than 20 percent of households surveyed at midline in treated villages had even heard about the community dialogues or interface meetings',
                caveat: 'Quote taken from the authors’ October 2020 working paper version. Check the wording against the published article.',
                sources: [
                  source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577'),
                  source('Raffler, Posner and Parkerson, working paper version, October 2020', 'http://piaraffler.com/wp-content/uploads/2020/10/Citizen-Pressure_Oct2020.pdf')
                ]
              })
            ]
          }),
          claim({
            text: 'Residents who set the goals judge a program by different measures than officials use.',
            evidence: [
              evidence({
                headline: 'When Indonesian villagers ranked their own neighbors for aid, they judged need by their own standard rather than the government’s formula, and were more satisfied with the result.',
                finding: paragraph(`
                  Across 640 villages, aid was assigned at random by a formula based on household
                  assets, by a community meeting that ranked every household, or by a mix. The
                  community picked somewhat different households than the formula did when poverty
                  was defined by consumption. Local elites did not drive the difference: “Elite
                  capture does not explain these results. Instead, communities appear to apply a
                  different concept of poverty. Consistent with this finding, community targeting
                  results in higher satisfaction.” The decision is who gets aid, not how a program is
                  judged afterward.
                `),
                grade: 'strong',
                quote: 'Elite capture does not explain these results. Instead, communities appear to apply a different concept of poverty. Consistent with this finding, community targeting results in higher satisfaction.',
                sources: [source('Alatas, Banerjee, Hanna, Olken and Tobias 2012, American Economic Review', 'https://doi.org/10.1257/aer.102.4.1206')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When Ugandan school committees wrote their own monitoring measures, they picked much the same priorities as the official scorecard.',
                finding: paragraph(`
                  In 100 rural primary schools, some management committees used a standard scorecard
                  drawn up with education officials, and others wrote their own goals and measures.
                  The committee-written scorecards differed from school to school, but “the priorities
                  reflected in the participatory scorecard appear well reflected in the standard
                  scorecard”, and teacher and pupil absence, a severe problem, appeared on fewer of
                  them. Schools whose committees wrote their own measures still improved more, which
                  the authors trace to committee members working together rather than to different
                  measures.
                `),
                grade: 'moderate',
                quote: 'The priorities reflected in the participatory scorecard appear well reflected in the standard scorecard.',
                caveat: 'Working paper. No peer-reviewed version was located.',
                sources: [source('Barr, Mugisha, Serneels and Zeitlin 2012, working paper', 'https://www.bristol.ac.uk/media-library/sites/cmpo/migrated/documents/zeitlin.pdf')]
              }),
              evidence({
                headline: 'When villages in Niger picked aid recipients themselves, households left out found the choice less fair than a formula, and the process was open to manipulation.',
                finding: paragraph(`
                  Villages in a national cash transfer program were assigned at random to choose
                  recipients by community meeting, by an asset-based formula, or by a food insecurity
                  formula. The asset formula did better at finding the households with the least to
                  spend. “Nonbeneficiaries find formula-based methods (PMT and FCS) more legitimate than
                  CBT. Manipulation and information imperfections affect CBT, which can explain why it
                  is not the most legitimate.” PMT and FCS are the two formulas, and CBT is the
                  community method. The decision is who gets aid, not how a program is judged
                  afterward.
                `),
                grade: 'strong',
                quote: 'Nonbeneficiaries find formula-based methods (PMT and FCS) more legitimate than CBT. Manipulation and information imperfections affect CBT, which can explain why it is not the most legitimate.',
                sources: [source('Premand and Schnitzer 2021, World Bank Economic Review', 'https://doi.org/10.1093/wber/lhaa019')]
              })
            ]
          }),
          claim({
            text: 'When residents monitor a public service, the service improves.',
            evidence: [
              evidence({
                headline: 'Ugandan communities that met to monitor their local clinics got more effort from health workers, more clinic visits, and fewer child deaths.',
                finding: paragraph(`
                  Communities around 50 Ugandan clinics were assigned at random to village meetings,
                  run by local nongovernmental groups, that built residents' capacity to hold clinic
                  staff to account for their performance. “A year after the intervention, treatment communities are more
                  involved in monitoring the provider, and the health workers appear to exert higher
                  effort to serve the community.” Clinic use rose, child deaths fell, and children
                  weighed more. The same team later found the gains lasted.
                `),
                grade: 'strong',
                quote: 'A year after the intervention, treatment communities are more involved in monitoring the provider, and the health workers appear to exert higher effort to serve the community.',
                sources: [source('Björkman and Svensson 2009, Quarterly Journal of Economics', 'https://doi.org/10.1162/qjec.2009.124.2.735')]
              }),
              evidence({
                headline: 'Sierra Leone clinics that communities monitored drew more patients, and fewer young children died.',
                finding: paragraph(`
                  Government clinics were assigned at random to a community monitoring program, to
                  nonfinancial awards for staff, or to neither. Before the Ebola outbreak, both
                  programs raised clinic use and patient satisfaction, and “community monitoring
                  additionally improved child health, leading to 38% fewer deaths of children under age
                  five”. During the outbreak, more Ebola cases were reported around the monitored
                  clinics. The trial cannot say which part of the monitoring package did the work.
                `),
                grade: 'strong',
                quote: 'Community monitoring additionally improved child health, leading to 38% fewer deaths of children under age five.',
                sources: [source('Christensen, Dube, Haushofer, Siddiqi and Voors 2021, Quarterly Journal of Economics', 'https://doi.org/10.1093/qje/qjaa039')]
              }),
              evidence({
                headline: 'Programs that let residents monitor and give feedback to frontline service staff often improved access and quality, but rarely improved health on their own.',
                finding: paragraph(`
                  A review pooled 35 programs in low- and middle-income countries that brought citizens
                  into planning, information, feedback, or monitoring of public services. Programs
                  building direct contact between service users and providers were “often effective in
                  stimulating active citizen engagement in service delivery and realising improvements
                  in access to services and quality of service provision, particularly for services that
                  involve direct interaction between citizens and providers”. Without fixes to supplies
                  and staffing, the authors warn, such programs “alone may not improve key wellbeing
                  outcomes”. The searches ended before the large null trial in Uganda was published.
                `),
                grade: 'strong',
                quote: 'The findings suggest that interventions promoting citizen engagement by improving direct engagement between service users and service providers, are often effective in stimulating active citizen engagement in service delivery and realising improvements in access to services and quality of service provision, particularly for services that involve direct interaction between citizens and providers.',
                caveat: 'Low- and middle-income countries only. Monitoring is one of four kinds of engagement pooled.',
                sources: [source('Waddington, Sonnenfeld, Finetti, Gaarder, John and Stevenson 2019, Campbell Systematic Reviews', 'https://doi.org/10.1002/cl2.1025')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When community monitoring of clinics was run across much more of Uganda, clinic use and child health did not improve.',
                finding: paragraph(`
                  A program in 16 Ugandan districts, modeled on the earlier Ugandan trial, gave
                  communities report cards on their health center and brought residents and staff
                  together to agree on fixes. Villages were assigned at random. “While we find modest
                  positive impacts on health provider behavior, we find no effects on citizen pressure,
                  utilization rates, or bottom-line health outcomes.” The authors point to much better
                  baseline health than in the original study.
                `),
                grade: 'strong',
                quote: 'While we find modest positive impacts on health provider behavior, we find no effects on citizen pressure, utilization rates, or bottom-line health outcomes.',
                sources: [source('Raffler, Posner and Parkerson 2025, Journal of Politics', 'https://doi.org/10.1086/736577')]
              }),
              evidence({
                headline: 'Ugandan village meetings that urged residents to take part, without giving them data on how their clinic performed, did not improve care.',
                finding: paragraph(`
                  The original Ugandan team tested a cheaper version that held participation meetings
                  but handed out no report card on staff performance. “We find no impact on the
                  quality of care or health outcomes of a lower cost intervention that focused on
                  encouraging participation but did not provide information on staff performance.”
                  Residents meeting to talk was not enough without performance data to judge against.
                `),
                grade: 'strong',
                quote: 'We find no impact on the quality of care or health outcomes of a lower cost intervention that focused on encouraging participation but did not provide information on staff performance.',
                sources: [source('Björkman Nyqvist, de Walque and Svensson 2017, American Economic Journal: Applied Economics', 'https://doi.org/10.1257/app.20150027')]
              })
            ]
          }),
          claim({
            text: 'Residents who help oversee a public program come to trust the government that runs it.',
            evidence: [
              evidence({
                headline: 'When Ugandan communities were trained to monitor local development projects, their trust in the central government rose slightly.',
                finding: paragraph(`
                  In a national program in northern Uganda, communities were assigned at random to
                  training in how to monitor their local projects, to information on project
                  performance, to both, or to neither. People in trained communities made more
                  complaints to officials. In the authors' 2019 revision, “We do find a statistically
                  significant increase in trust in the central government”, which they describe as small
                  next to trust levels in untreated communities. Views of project leaders and local officials
                  did not change significantly. The authors trace the rise to the visibility of the central
                  agency that ran the training.
                `),
                grade: 'moderate',
                quote: 'We do find a statistically significant increase in trust in the central government.',
                caveat: 'The trust results come from the working papers. The published article reports project and household results, and its abstract says the gains were not driven by responses from local leaders or officials.',
                sources: [
                  source('Fiala and Premand 2019, working paper revision', 'http://www.isid.ac.in/~epu/acegd2019/papers/NathanVincentFiala.pdf'),
                  source('Fiala and Premand 2025, Journal of Development Economics', 'https://doi.org/10.1016/j.jdeveco.2025.103537')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When police in six countries asked residents about local problems and worked to fix them, residents did not come to trust the police more.',
                finding: paragraph(`
                  Six coordinated field experiments in Brazil, Colombia, Liberia, Pakistan, the
                  Philippines, and Uganda assigned community policing at random. Police reached out to
                  residents to learn about community problems and then worked to fix them. In a preregistered
                  analysis pooling all six, “these interventions led to mixed implementation, largely
                  failed to improve citizen-police relations, and did not reduce crime.” Implementation
                  was uneven, and the service was policing rather than health outreach.
                `),
                grade: 'strong',
                quote: 'In a preregistered meta-analysis, we found that these interventions led to mixed implementation, largely failed to improve citizen-police relations, and did not reduce crime.',
                sources: [source('Blair, Weinstein, Christia and colleagues 2021, Science', 'https://doi.org/10.1126/science.abd3446')]
              }),
              evidence({
                headline: 'When Peruvian village leaders were trained to hold local government to account, they grew less satisfied with their mayors and more open to protest.',
                finding: paragraph(`
                  Sexton (2022) assigned villages in Peru at random to public workshops that taught village
                  leaders how local budgeting, elections, and transparency rules work. “The study finds that
                  training workshops in fact reduce participation in local participatory budgeting processes,
                  reduce satisfaction with mayors, and increase support for protest and recall elections.”
                  District government performance did not change the following year. The study measured
                  satisfaction with mayors rather than trust in government as a whole.
                `),
                grade: 'strong',
                quote: 'The study finds that training workshops in fact reduce participation in local participatory budgeting processes, reduce satisfaction with mayors, and increase support for protest and recall elections.',
                sources: [source('Sexton 2022, Quarterly Journal of Political Science', 'https://doi.org/10.1561/100.00020079')]
              })
            ]
          })
        ]
      }),
      sources: []
    })
  ]
});
