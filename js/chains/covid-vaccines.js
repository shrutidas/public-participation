import { chain, link, evidence, participation, proposal, paragraph, source } from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * Case Study 2: COVID-19 Vaccine Mandates
 *
 * Two chains, because the case has two distinct outcomes and participation
 * was asked to do a different job in each:
 *
 *   TOTAL: harm reduction mediated by overall uptake. Trust is the
 *            hypothesized mediator; coercion is the fallback instrument.
 *   FAIR: harm reduction mediated by equitable reach. Access is the
 *            hypothesized mediator; community infrastructure is the instrument.
 *
 * Across both chains, the assembled causal evidence supports access
 * interventions strongly and trust interventions weakly.
 * -------------------------------------------------------------------------- */

const total = chain({
  id: 'vax-total',
  label: 'Total Harm Reduction',
  track: 'total',
  screen: 'vax-harm',
  nodes: {
    'Federal messaging fails, on top of existing distrust': 'intervenable',
    'Trust in public health agencies falls': 'intervenable',
    'Fewer people follow guidance and get vaccinated': 'intervenable',
    'Preventable deaths': 'outcome',
    'Trust-building outreach tries to raise vaccination': 'intervenable',
    'Mandates replace persuasion; more get vaccinated, but a fight over authority begins': 'outcome'
  },
  nodeDates: {
    'Federal messaging fails, on top of existing distrust': '12/2020',
    'Trust in public health agencies falls': '01/2022',
    'Fewer people follow guidance and get vaccinated': '06/2021',
    'Preventable deaths': '03/2022',
    'Trust-building outreach tries to raise vaccination': '06/2021',
    'Mandates replace persuasion; more get vaccinated, but a fight over authority begins': '11/2021'
  },
  purpose: paragraph(`
    This chain traces how declining trust in public health institutions
    reduced vaccine uptake, and what lower uptake cost in preventable deaths.
  `),
  outcome: paragraph(`
    An estimated <strong>232,000–234,000 preventable adult deaths</strong> among the unvaccinated,
    against <strong>3.2 million</strong> deaths averted by the vaccination program overall.
  `),
  thesis: paragraph(`
    The chain from institutional trust to compliance to harm is well
    established at every link except the one participation interventions are
    designed to act on. Multi-country evidence shows that trust in public
    health institutions predicts compliance. <strong>No credible causal evidence was
    identified that any American COVID-era participation intervention raised
    trust in a way that raised uptake</strong>, and one randomized test of the
    trusted-messenger mechanism returned a null result. The instruments with
    measured effects on uptake (mobile vaccination units, mandates, text
    reminders) do not operate on trust. On the available record, the claim that trust-building participation reduced total harm is unsupported.
  `),
  links: [

    link({
      id: 'V1',
      name: 'Messaging failures reduce trust',
      stage: 'trust',
      from: 'Federal messaging fails, on top of existing distrust',
      to: 'Trust in public health agencies falls',
      claim: paragraph(`
        Documented CDC communication failures degraded the agency's information
        channel, and public assessment of the public health response declined
        over the same period.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            The Manhattan Institute (2022) documents that CDC knowingly released a
            flawed diagnostic test early in 2020, delaying accurate case detection,
            and that its 2021 school guidance drew a public rebuke from the same
            scientists it cited as its evidentiary basis.
          `),
          quote: paragraph(`
            Early in 2020, CDC knowingly released a flawed test for health-care
            providers to assess whether people were sick from the novel coronavirus.
            [...] CDC's guidance on schools to support safe in-person learning drew a
            public rebuke in 2021 from the very scientists it cited, who claimed that
            CDC misinterpreted their research.
          `),
          grade: 'moderate',
          sources: [source('Manhattan Institute', 'https://manhattan.institute/article/cdcs-covid-19-communication-failures')]
        }),
        evidence({
          finding: paragraph(`
            NPR (2022) reported that CDC held only <strong>two public telebriefings in all
            of 2021</strong>, prompting criticism from public health experts including former
            CDC Director Tom Frieden and a commitment from Director Walensky to brief
            more often.
          `),
          quote: paragraph(`
            This is hard and I am committed to continue to improve. I anticipate that
            this will be the first of many briefings, and I very much look forward to
            them.
          `),
          grade: 'strong',
          sources: [source('NPR', 'https://www.npr.org/sections/health-shots/2022/01/07/1071449137/cdc-is-criticized-for-failing-to-communicate-promises-to-do-better')]
        }),
        evidence({
          finding: paragraph(`
            Pew Research Center (January 2022): 50% rated public health officials'
            COVID response excellent or good, <strong>down from 79%</strong> early in the
            pandemic.
          `),
          quote: paragraph(`
            Half of Americans now say public health officials, such as those at the
            CDC, are doing an excellent or good job responding to the outbreak [...]
            down from a high of 79% early in the outbreak.
          `),
          grade: 'strong',
          sources: [source('Pew Research Center', 'https://www.pewresearch.org/science/2022/02/09/increasing-public-criticism-confusion-over-covid-19-response-in-u-s')]
        }),
        evidence({
          finding: paragraph(`
            Cramer's <em>The Politics of Resentment</em> (University of Chicago Press,
            2016), based on fieldwork in rural Wisconsin communities from 2007 to
            2012, documents "rural consciousness": distrust in government rooted in
            the perception that rural communities receive an unfair share of
            government resources, decision-making power, and respect, rather than in
            historical institutional harm. The fieldwork predates the pandemic by
            nearly a decade, identifying a driver of distrust distinct from
            COVID-era communication failures.
          `),
          quote: paragraph(`
            Rural voters are distrustful that politicians will respect the distinct
            values of their communities and allocate a fair share of resources.
          `),
          grade: 'moderate',
          caveat: 'Qualitative fieldwork in a single state; documents the structure and origin of the attitude, not its magnitude or trend.',
          sources: [source('University of Chicago Press', 'https://press.uchicago.edu/ucp/books/book/chicago/P/bo22879533.html')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            RAND's American Life Panel measured trust in CDC (0–10 scale) from May to
            October 2020 and found the decline was <strong>partisan, not racial</strong>:
            White −0.8 (significant), Hispanic −0.7 (significant), <strong>Black −0.3 (not
            significant)</strong>; Trump voters −0.8 (significant), Biden voters −0.3 (not
            significant). The decline did not fall hardest on the communities that
            equity-focused participation interventions target.
          `),
          quote: paragraph(`
            Non-Hispanic White and Hispanic respondents reported significant declines
            in trust [...] Changes were not statistically significant for non-Hispanic
            black or respondents of other races.
          `),
          grade: 'moderate',
          sources: [source('RAND RR-A308-12', 'https://www.rand.org/pubs/research_reports/RRA308-12.html')]
        })
      ],
      participation: [
        participation({
          date: '01/2020–2023',
          name: 'NYT, JHU CSSE and the COVID Tracking Project',
          kind: 'journalism',
          actors: 'New York Times (160+ contributors), Johns Hopkins CSSE, volunteer trackers',
          description: paragraph(`
            The federal government did not publish county-level case and death data
            during the first year. A single NYT reporter's spreadsheet scaled to 160+
            contributors across 12 departments and was viewed over a billion times;
            the Times won the 2021 Pulitzer Prize for Public Service for coverage that
            "filled a data vacuum that helped local governments, healthcare providers,
            businesses and individuals to be better prepared and protected." JHU CSSE
            was the first entity to publicly aggregate case data. The Times ended the
            project in 2023, stating that state and local agencies were "reporting
            their data less frequently and less reliably."
          `),
          effect: 'moved',
          sources: [
            source('NYT', 'https://www.nytimes.com/2020/06/29/insider/coronavirus-cases-new-york-times.html'),
            source('NYT Co.', 'https://www.nytco.com/press/updating-our-covid-data-project/'),
            source('Pulitzer Prizes 2021', 'https://www.pulitzer.org/prize-winners-by-year/2021')
          ]
        })
      ],
      proposals: [
        proposal({
          name: 'Share everything, early and openly',
          method: 'Open data & public briefings',
          description: paragraph(`
            From the 6/8 session: in an emergency, some recognition of expertise
            is warranted, but not deference. Publish hospitalization and death
            rates at the local level and ladder them up; brief frequently on
            what is and is not known; start early enough that the information
            informs public understanding rather than arriving late. The
            session's premise is that if institutions adhere to a belief in the
            public's capability for rationality and share meaningful
            information, they might head off the worst of polarization. The
            actual record here is the substitution documented at this link: a
            newspaper performed the function.
          `),
          mechanism: paragraph(`
            Consistent official transparency early sustains trust in public
            health institutions, the trust that V2 shows predicts compliance.
          `),
          unstudied: false
        })
      ],
      gaps: [
        paragraph(`
          A private, non-governmental channel outperformed official reporting on
          consistency for most of the pandemic. No study was identified that asks
          whether that substitution had trust consequences of its own: whether
          routing public information through a newspaper stabilized or further
          destabilized the relationship between communities and the state.
        `)
      ]
    }),

    link({
      id: 'V2',
      name: 'Trust shapes who follows guidance',
      stage: 'compliance',
      from: 'Trust in public health agencies falls',
      to: 'Fewer people follow guidance and get vaccinated',
      claim: paragraph(`
        Compliance tracks trust in <strong>public health institutions and
        professionals</strong>, not trust in political leaders; declining institutional
        trust therefore reduced compliance.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            A 12-country study of 3,369 subjects (Behavioral Sciences, 2022) found
            trust in national political leaders was <strong>not</strong> predictive of
            compliance with prevention measures, while trust in national and local
            public health institutions was a consistent predictor across cultures,
            fostered by concrete practices: providing rationale, securing public
            feedback, and honestly expressing uncertainty.
          `),
          quote: paragraph(`
            higher trust in national and local public health institutions was a
            universally consistent predictor of public health compliance [...] trust
            in national political leaders was not predictive of compliance across
            cultures and geographical regions.
          `),
          grade: 'strong',
          sources: [
            source('Behavioral Sciences 12(6):170', 'https://www.mdpi.com/2076-328X/12/6/170')
          ]
        }),
        evidence({
          finding: paragraph(`
            In a Thailand study of 809 respondents (Healthcare, 2021), trust in health professionals (physicians, nurses, pharmacists) <strong>fully explained</strong> the effect of government trust on compliance: once trust in professionals was accounted for, trust in government no longer predicted compliance on its own (β falling from 0.133, p < 0.001, to 0.015, p > 0.05).
          `),
          quote: paragraph(`
            professional trust was a full mediator between the relationship between
            public trust in the government and the willingness of respondents to
            comply
          `),
          grade: 'moderate',
          sources: [
            source('Healthcare 9(2):151', 'https://mdpi.com/2227-9032/9/2/151/htm')
          ]
        }),
        evidence({
          finding: paragraph(`
            Comparator evidence from Taiwan: the Central Epidemic Command Center
            held daily press conferences and distributed daily case updates through
            the Line messaging app from 2020 (Chinese Journal of Communication,
            2022). A survey of <strong>610 Taiwanese respondents</strong> conducted February
            27 to March 4, 2020 (Scientific Reports, 2022) found government sources
            scored highest of all information-source types for perceived
            credibility, and social trust, information credibility, and personal
            protective measures were positively correlated.
          `),
          quote: paragraph(`
            Information from the government and research institutes had higher
            credibility than that from other sources, with the government having the
            highest score [...] When people trust the government and its
            information, they also take more precautionary behaviors.
          `),
          grade: 'weak',
          caveat: 'Comparator from a different national context; confounders identified in the literature on public compliance in Taiwan (prior SARS experience, population density, cultural deference to authority, media structure) complicate generalizing the outcome. The credibility and behavior findings are correlational, from a single early-2020 survey.',
          sources: [
            source('Chinese Journal of Communication', 'https://www.tandfonline.com/doi/abs/10.1080/17544750.2021.2011343'),
            source('Scientific Reports 12', 'https://www.nature.com/articles/s41598-022-20312-6'),
            source('Policing: An International Journal 2024', 'https://www.researchgate.net/publication/384897615_Correlates_of_public_compliance_with_COVID-19_regulations_in_Taiwan')
          ]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          Whether compliance is better raised by <strong>choosing which institutional
          and professional channels government routes information through</strong> (a
          design question about institutional form) than by interventions on public
          sentiment has not been tested.
        `)
      ]
    }),

    link({
      id: 'V3',
      name: 'Missed doses become deaths',
      stage: 'harm',
      from: 'Fewer people follow guidance and get vaccinated',
      to: 'Preventable deaths',
      claim: paragraph(`
        Non-vaccination among eligible adults produced deaths that vaccination
        would have prevented; two independent estimates place the toll above
        230,000.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Peterson-KFF Health System Tracker: approximately <strong>234,000 preventable
            adult deaths</strong> June 2021 – March 2022, 60% of all adult COVID deaths in
            the period. The unvaccinated share of deaths fell from 86% (June 2021) to
            58% (January 2022).
          `),
          quote: paragraph(`
            Approximately 234,000 deaths since June 2021 could have been prevented
            with primary series vaccination. These vaccine-preventable deaths
            represent 60% of all adult COVID-19 deaths since June 2021.
          `),
          grade: 'moderate',
          caveat: 'Modeled from surveillance in 25 jurisdictions (66% of population), sensitive to vaccine-effectiveness assumptions.',
          sources: [source('Peterson-KFF Health System Tracker', 'https://www.healthsystemtracker.org/brief/covid19-and-other-leading-causes-of-death-in-the-us/')]
        }),
        evidence({
          finding: paragraph(`
            Independent replication (European Journal of Epidemiology, 2023):
            <strong>at least 232,000 preventable deaths (95% CI 214,000–250,000)</strong>
            among unvaccinated adults, May 2021 – September 2022, estimated from a
            nationally representative dataset with adjustment for age and time.
          `),
          quote: paragraph(`
            at least 232,000 deaths could have been prevented among unvaccinated
            adults during the 15 months had they been vaccinated with at least a
            primary series
          `),
          grade: 'moderate',
          sources: [source('European Journal of Epidemiology', 'https://pubmed.ncbi.nlm.nih.gov/37093505/')]
        }),
        evidence({
          finding: paragraph(`
            The Commonwealth Fund estimates the program as a whole averted
            <strong>3.2 million deaths</strong>, 18.5 million hospitalizations and nearly
            120 million infections, and saved $1.15 trillion in medical costs
            (Dec 2020 – Nov 2022).
          `),
          quote: paragraph(`
            prevented more than 3.2 million additional deaths [...] prevented more
            than 18.5 million additional hospitalizations [...] saved the U.S. $1.15
            trillion (Credible Interval: $1.10 trillion–$1.19 trillion) in medical
            costs.
          `),
          grade: 'moderate',
          caveat: 'Agent-based simulation, not an empirical counterfactual.',
          sources: [source('Commonwealth Fund', 'https://www.commonwealthfund.org/blog/2022/two-years-covid-vaccines-prevented-millions-deaths-hospitalizations')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          None of these estimates decompose averted or preventable deaths by race
          or ethnicity. The specific <strong>fair harm reduction</strong> quantity, excess
          minority deaths attributable to the vaccination lag of spring 2021,
          appears never to have been estimated; no study reporting it was
          identified.
        `)
      ]
    }),

    link({
      id: 'V4',
      name: 'Trust-building outreach, not proven to work',
      stage: 'participation',
      after: 'V2',
      from: 'Fewer people follow guidance and get vaccinated',
      to: 'Trust-building outreach tries to raise vaccination',
      claim: paragraph(`
        Participation interventions that operate on trust (community engagement,
        trusted messengers) are asserted to have raised COVID-19 vaccine uptake.
        Direct causal tests of this mechanism are scarce, and the randomized
        tests available returned null results.
      `),
      strength: 'contested',
      evidence: [
        evidence({
          finding: paragraph(`
            A meta-analysis of community engagement in vaccination promotion (JMIR
            Public Health and Surveillance, 2024) found engagement went with vaccination rates <strong>18 percentage points higher on average (95% CI 7 to 29)</strong>. But of the 20 included studies (2006–2021), only 5 were randomized, and only one concerned COVID-19 vaccination; that one tracked a single group before and after, with no control group. Results varied so widely across studies (I² = 98.4%) that the average is hard to interpret.
          `),
          quote: paragraph(`
            the random effects meta-analysis of between-group intervention effects
            showed a small positive effect size of community engagement on promoting
            vaccination rates (RD 0.18, 95% CI 0.07-0.29, I² = 98.4%, P<.001)
          `),
          grade: 'moderate',
          caveat: 'The evidence base for community engagement in vaccination is real but almost entirely non-COVID.',
          sources: [source('JMIR Public Health Surveill 2024', 'https://publichealth.jmir.org/2024/1/e49695')]
        }),
        evidence({
          finding: paragraph(`
            NIH's CEAL program, the largest federal community-engagement effort,
            showed significantly higher adult full-vaccination rates in CEAL counties
            than in comparison counties matched on Social Vulnerability Index
            components (AJPH, 2024).
          `),
          quote: paragraph(`
            The mean percentage of vaccinated adults was significantly higher in CEAL
            counties than in matched (social vulnerability index) comparison counties.
          `),
          grade: 'moderate',
          caveat: 'Nonequivalent control group design. Selection into CEAL is non-random and plausibly correlated with local public-health capacity.',
          sources: [source('AJPH 2024 (DOI 10.2105/AJPH.2023.307517)', 'https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2023.307517')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            A three-arm randomized trial at a Federally Qualified Health Center
            (BMC Public Health, 2024) tested adding a <strong>personalized clinician
            recommendation</strong> (the trusted-messenger mechanism, isolated) to text
            outreach. 90-day vaccination: <strong>plain text 11.5%</strong>, plus <strong>clinician
            recommendation 11.6%</strong>, plus two-way SMS 8.5%. The trial found no
            improvement from the clinician recommendation.
          `),
          quote: paragraph(`
            Digitally-enabled outreach that included SMS messaging outreach augmented
            with clinician recommendations did not improve COVID-19 vaccination
            rates.
          `),
          grade: 'strong',
          sources: [source('BMC Public Health 2024 (NCT04952376)', 'https://pubmed.ncbi.nlm.nih.gov/39026196/')]
        }),
        evidence({
          finding: paragraph(`
            An online randomized trial of 4,190 unvaccinated adults (April 2021),
            oversampling Black, Latinx, conservative and religious respondents,
            randomly tailored messages to participant identity and varied celebrity
            endorsers, and found no support for the hypothesis that customized
            messages or endorsers reduce hesitancy. In a post hoc analysis, a Fauci
            endorsement <em>reduced</em> stated intent among conservatives.
          `),
          quote: paragraph(`
            We find no support for the hypothesis that customized messages or
            endorsers reduce vaccine hesitancy among our segments. [...] A post hoc
            analysis finds evidence that a vaccine endorsement from Dr. Fauci reduces
            stated intent to vaccinate among conservatives.
          `),
          grade: 'strong',
          caveat: 'Measures intent, not uptake.',
          sources: [source('Prev Med Rep 2022', 'https://escholarship.org/uc/item/40k8998w')]
        }),
        evidence({
          finding: paragraph(`
            The textbook trusted-messenger study, a Popular Opinion Leader cluster-randomized trial for COVID vaccine information and uptake among Black adults with
            rheumatic conditions in Boston and Chicago, <strong>began recruiting in
            February 2024</strong>, three years after the rollout, and had not reported
            results as of the protocol's publication.
          `),
          quote: paragraph(`
            This cluster randomised controlled trial began recruitment in February
            2024 in Boston, Massachusetts and Chicago, Illinois, USA.
          `),
          grade: 'strong',
          sources: [source('BMJ Open protocol (NCT05822219)', 'https://pubmed.ncbi.nlm.nih.gov/39181556/')]
        }),
        evidence({
          finding: paragraph(`
            For scale comparison: a cluster RCT of <strong>mobile vaccination units</strong>
            across 20 communities produced <strong>12.8% vs 3.8%: a 9.0 point, 3.4×
            effect</strong>, with no measured reduction at fixed sites. Text reminders
            across 3.66 million CVS patients raised <strong>30-day booster uptake by
            1.05 percentage points</strong> (Nature, 2024). Mandates produced
            cumulative gains of +4.7 to +12 points (Nature Human Behaviour, 2022).
            None of these instruments operates on trust.
          `),
          quote: paragraph(`
            The vaccination rate in the sample of the treatment group surpassed the
            rate in the control group by a factor of 3.4 (+9.0 percentage points)
            over 3 weeks.
          `),
          grade: 'strong',
          sources: [
            source('J Public Health 2024 (mobile units RCT)', 'https://academic.oup.com/jpubhealth/article/46/1/151/7434434'),
            source('Nature 2024 (nudge megastudy)', 'https://www.nature.com/articles/s41586-024-07591-x')
          ]
        })
      ],
      participation: [
        participation({
          date: '02/2021–05/2021',
          name: 'Unidos en Salud, Mission District, San Francisco',
          kind: 'service',
          actors: 'Latino Task Force, UCSF, community health workers, 11,098 residents',
          description: paragraph(`
            A community-run low-barrier vaccination site. <strong>20,792 doses</strong> to 11,098
            unique people over 16 weeks; <strong>98.4% second-dose completion</strong>; 70.5% of
            clients Latinx against 13.3% of the city's overall vaccinated population.
            Among Latinx clients, 47.3% were uninsured (vs 16.0% of non-Latinx clients)
            and 62.4% lacked a primary care provider (vs 36.2%). <strong>58.3% of clients
            reported they were able to get vaccinated earlier</strong> because of the site.
          `),
          effect: 'unmeasured',
          sources: [
            source('PLOS ONE', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257111'),
            source('PubMed 34543291', 'https://pubmed.ncbi.nlm.nih.gov/34543291/')
          ]
        }),
        participation({
          date: '2021',
          name: 'Barbershops, salons and public libraries as vaccination and information sites',
          kind: 'service',
          actors: 'Barbers, stylists, public librarians, community members',
          description: paragraph(`
            In-depth interviews with 16 South Carolina barbers and stylists (Vaccines,
            2024) found delivering COVID-19 testing and vaccination promotion through
            barbershops acceptable to them, grounded in "strong trust relationships
            with clients" and perceived community influence. A study of 80 libraries'
            web and social media communication (Public Library Quarterly, 2023) found
            that sharing local-partnership and accessibility information was among the
            categories associated with higher vaccination rates.
          `),
          effect: 'unmeasured',
          sources: [
            source('Vaccines 12(9):1011', 'https://doi.org/10.3390/vaccines12091011'),
            source('Public Library Quarterly', 'https://www.tandfonline.com/doi/full/10.1080/01616846.2023.2197842')
          ]
        })
      ],
      gaps: [
        paragraph(`
          Community engagement was deployed at very large scale, and no credible
          causal estimates of its effect on COVID-19 uptake were identified. The
          community-engagement literature is dominated by single-arm evaluations
          that report <em>reach</em> (who showed up) and infer <em>effect</em> (who would
          not otherwise have been vaccinated). Unidos en Salud is the best of these
          and its own authors state they cannot disentangle the components. Citing
          "70.5% Latinx vs 13.3% citywide" as an effect size reads a composition
          statistic as a causal estimate.
        `),
        paragraph(`
          No barbershop or salon RCT for COVID vaccination uptake was identified.
          The barbershop trial evidence base is chronic-disease work; the
          inferential leap to COVID vaccination has not been tested.
        `)
      ]
    }),

    link({
      id: 'V5',
      name: 'Mandates replace persuasion',
      stage: 'compliance',
      from: 'Trust-building outreach tries to raise vaccination',
      to: 'Mandates replace persuasion; more get vaccinated, but a fight over authority begins',
      claim: paragraph(`
        Mandates raised uptake through requirement rather than persuasion, and
        their adoption triggered a separate contest over authority that was
        resolved in courts and legislatures rather than in any deliberative
        channel.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Difference-in-differences across ten Canadian provinces plus time-series
            analysis for France, Italy and Germany (Nature Human Behaviour, 2022):
            mandate announcements were associated with a <strong>66% increase in weekly
            first doses</strong>; cumulative gains by Oct 31, 2021 of up to +5 points
            (Canada), +8 (France), +12 (Italy), +4.7 (Germany).
          `),
          quote: paragraph(`
            mandate announcement is associated with an increase of about 66% (50.6
            log points; P = 0.001; 95% CI, 25–77)
          `),
          grade: 'strong',
          sources: [source('Nature Human Behaviour 2022', 'https://www.nature.com/articles/s41562-022-01363-1')]
        }),
        evidence({
          finding: paragraph(`
            The legitimacy contest resolved judicially rather than deliberatively:
            on January 13, 2022 the Supreme Court stayed the OSHA large-employer rule
            (NFIB v. OSHA) while allowing the CMS healthcare-worker mandate to take
            effect (Biden v. Missouri), and the Senate voted 52–48 on December 8,
            2021 to disapprove the OSHA regulation.
          `),
          quote: paragraph(`
            OSHA's COVID–19 Vaccination and Testing; Emergency Temporary Standard, 86
            Fed. Reg. 61402, is stayed pending disposition
          `),
          grade: 'strong',
          sources: [
            source('NFIB v. OSHA', 'https://www.supremecourt.gov/opinions/21pdf/21a244_hgci.pdf'),
            source('Biden v. Missouri', 'https://www.supremecourt.gov/opinions/21pdf/21a240_d18e.pdf'),
            source('CNBC (Senate vote)', 'https://www.cnbc.com/2021/12/08/biden-vaccine-mandate-senate-votes-to-overturn-osha-rule.html')
          ]
        }),
        evidence({
          finding: paragraph(`
            In KFF's April 2025 tracking poll, 59% of adults trusted the CDC to
            provide reliable vaccine information; Democrats' trust fell to <strong>70%
            from 88% in 2023</strong> while Republicans' rose to <strong>51% from 40%</strong>, a
            partisan convergence. Confidence that the COVID-19 vaccines are safe:
            87% of Democrats, 30% of Republicans.
          `),
          quote: paragraph(`
            Just over half (56%) of adults say they are at least "somewhat confident"
            that the COVID-19 vaccines are safe, including nearly nine in ten
            Democrats (87%), about half of independents (55%), but just three in ten
            Republicans.
          `),
          grade: 'moderate',
          caveat: 'Cross-sectional polling; the partisan composition of trust shifted with the change of administration, so trust measures may track the identity of officeholders rather than a stable institutional attitude.',
          sources: [
            source('KFF Vaccine Monitor', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-dashboard/'),
            source('KFF Tracking Poll April 2025', 'https://www.kff.org/health-information-trust/kff-tracking-poll-on-health-information-and-trust-vaccine-safety-and-trust/')
          ]
        })
      ],
      participation: [
        participation({
          date: '10/2021',
          name: 'Police and municipal union litigation against city mandates',
          kind: 'litigation',
          actors: 'NYPD unions, Chicago and Washington police unions, municipal employees',
          description: paragraph(`
            Unions sued to block municipal vaccine mandates in October 2021, arguing
            the terms had not been collectively bargained. The same instrument that
            gave teachers binding voice on school reopening gave police binding voice
            on mandates: collective bargaining supplied a procedural channel that
            bound the employer, a channel other stakeholder groups did not have.
          `),
          effect: 'partial',
          sources: [source('New York Times', 'https://www.nytimes.com/2021/10/25/nyregion/nypd-police-covid-vaccine-mandate-deblasio.html')]
        })
      ],
      proposals: [
        proposal({
          name: 'Public deliberation before any mandate',
          method: 'Citizens assembly / mini-public',
          description: paragraph(`
            From the 6/8 session: convene a mini-public before any mandate, on
            the value tradeoff rather than the science, in which ordinary
            citizens engage expert knowledge as a means of generating the
            political legitimacy of science. Decisions decentralized, with
            regional variation accepted as an output rather than a failure:
            "some places might decide not to vaccinate; so be it." The session
            read this and the GenX case as counterexamples to the claim that
            complex policy domains exceed the competence of ordinary citizens
            deciding in assembly.
          `),
          mechanism: paragraph(`
            A deliberative process convened before a mandate changes subsequent
            compliance or the perceived legitimacy of the mandate.
          `),
          unstudied: true
        })
      ],
      gaps: [
        paragraph(`
          No study was identified testing whether a deliberative process convened
          <em>before</em> a mandate (on the value tradeoff, not the science) changes
          subsequent compliance or perceived legitimacy. The question is answerable
          prospectively in a future public health emergency.
        `)
      ]
    })

  ]
});

const fair = chain({
  id: 'vax-fair',
  label: 'Fair Harm Reduction',
  track: 'fair',
  screen: 'vax-harm',
  nodes: {
    'Access barriers, plus past harm from institutions': 'immovable',
    'Early vaccination is unequal by race': 'outcome',
    'Access, not hesitancy, is the main barrier': 'intervenable',
    'Federal equity programs roll out at scale': 'intervenable',
    'The racial vaccination gap narrows': 'outcome'
  },
  nodeDates: {
    'Access barriers, plus past harm from institutions': '04/2021',
    'Early vaccination is unequal by race': '04/2021',
    'Access, not hesitancy, is the main barrier': '05/2021',
    'Federal equity programs roll out at scale': '06/2021',
    'The racial vaccination gap narrows': '11/2021'
  },
  purpose: paragraph(`
    This chain traces why vaccination rates started unequal across racial
    groups, which barriers (access or conviction) drove the gap, and what
    closed it.
  `),
  outcome: paragraph(`
    Early vaccination gaps of 13–14 percentage points by race and 10.3 points by
    social vulnerability, substantially narrowed by late 2021, with the cause of
    the narrowing unestablished and the mortality cost of the lag never estimated.
  `),
  thesis: paragraph(`
    The equity chain is better supported than the trust chain: the evidence
    indicates the binding constraint on early uptake in minority communities was
    mostly <strong>access, not conviction</strong>, and access is what community
    infrastructure delivers. The attribution question remains unresolved: the
    best available longitudinal analysis finds the narrowing of the racial gap
    was explained by <em>knowledge spreading within communities</em>, and explicitly <em>not</em> by trust in CDC or by differences in access.
  `),
  links: [

    link({
      id: 'F1',
      name: 'Barriers make early vaccination unequal',
      stage: 'harm',
      from: 'Access barriers, plus past harm from institutions',
      to: 'Early vaccination is unequal by race',
      claim: paragraph(`
        The early gap was real, large, and <em>widening</em> by social vulnerability
        at the moment supply was expanding.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            KFF administrative data, late April 2021, at least one dose: <strong>White
            38%</strong>, <strong>Hispanic 25%</strong>, <strong>Black 24%</strong>: gaps of 13 and 14
            percentage points.
          `),
          quote: paragraph(`
            Between late April 2021, when most adults became eligible for vaccines
            across states, and July 11, 2022, the gap in vaccination rates between
            White and Black people fell from 14 percentage points (38% vs. 24%) to 5
            percentage points
          `),
          grade: 'moderate',
          caveat: 'State administrative data with incomplete race reporting.',
          sources: [source('KFF', 'https://www.kff.org/covid-19/latest-data-on-covid-19-vaccinations-by-race-ethnicity/')]
        }),
        evidence({
          finding: paragraph(`
            CDC (MMWR, 2021): by May 1, 2021 adult coverage was <strong>49.0% in the
            highest-SVI county quartile vs 59.3% in the lowest</strong> (a 10.3 point gap)
            and disparities by social vulnerability <strong>increased over time</strong>.
          `),
          quote: paragraph(`
            By May 1, 2021, vaccination coverage was lower among adults living in
            counties with the highest overall SVI (Q4 coverage = 49.0% versus Q1
            coverage = 59.3%) [...] Disparities in vaccination coverage by SVI
            increased over time
          `),
          grade: 'moderate',
          sources: [source('MMWR 70(22)', 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7022e1.htm')]
        }),
        evidence({
          finding: paragraph(`
            KFF Vaccine Monitor, among unvaccinated Hispanic adults (April 2021):
            <strong>64% worried about missing work due to side effects</strong>, 52% about
            out-of-pocket cost, <strong>49% concerned they could not get the vaccine from
            a place they trust</strong>, 35% had immigration-status concerns (63% among
            likely-undocumented). <strong>54% of employed respondents not yet ready to
            vaccinate</strong> said paid time off would make them more likely to do so.
          `),
          quote: paragraph(`
            Nearly two-thirds (64%) are concerned about missing work due to side
            effects [...] Nearly half are concerned they won't be able to get the
            vaccine from a place they trust (49%).
          `),
          grade: 'moderate',
          sources: [source('KFF Vaccine Monitor', 'https://www.kff.org/covid-19/kff-covid-19-vaccine-monitor-access-information-experiences-hispanic-adults/')]
        }),
        evidence({
          finding: paragraph(`
            Focus-group research with Black, Latinx/Indigenous Latin American and
            Native American communities (Culture, Medicine and Psychiatry, 2023)
            found historical institutional trauma shaped trust in testing and
            vaccination <strong>independent of message quality</strong>; identical guidance
            produced different responses depending on trust history.
          `),
          quote: paragraph(`
            Historical, cultural, and social trauma induce fear and mistrust in
            public health and medical institutions influencing COVID-19 testing and
            vaccination decisions in communities of color in Inland Southern
            California.
          `),
          grade: 'moderate',
          sources: [source('Culture, Medicine & Psychiatry', 'https://link.springer.com/article/10.1007/s11013-023-09835-3')]
        })
      ],
      participation: [],
      gaps: []
    }),

    link({
      id: 'F2',
      name: 'Access is the real barrier',
      stage: 'structural',
      from: 'Early vaccination is unequal by race',
      to: 'Access, not hesitancy, is the main barrier',
      claim: paragraph(`
        Distance to vaccination sites causally reduced uptake, and interventions
        that removed distance produced the largest measured uptake effects in
        the literature reviewed.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            A PNAS Nexus study (2023) tested the link between distance and uptake 6,096 different ways: <strong>in 98% of the analyses, people living farther from a vaccination site were less likely to be vaccinated</strong> (significant in 86%), regardless of partisanship. When Chicago opened new sites, vaccination rose in 73% of the analyses, and among seniors every analysis showed a gain (96% significant).
          `),
          quote: paragraph(`
            vaccine uptake significantly increased after site opening in 560 of 768
            models (73%) [...] reducing distance may be a promising, noncoercive
            lever for addressing undervaccination
          `),
          grade: 'strong',
          sources: [source('PNAS Nexus 2023', 'https://academic.oup.com/pnasnexus/article/2/12/pgad411/7459517')]
        }),
        evidence({
          finding: paragraph(`
            Cluster RCT of mobile vaccination units: <strong>12.8% vs 3.8% vaccinated</strong>,
            a 9.0 point / 3.4× effect across 20 randomized communities and 20,414
            unvaccinated adults, with no measured reduction at fixed sites (2.7% vs
            2.8% at vaccination centers).
          `),
          quote: paragraph(`
            The vaccination rate in the sample of the treatment group surpassed the
            rate in the control group by a factor of 3.4 (+9.0 percentage points)
            over 3 weeks.
          `),
          grade: 'strong',
          caveat: 'Switzerland, not the US.',
          sources: [source('J Public Health 46(1):151', 'https://academic.oup.com/jpubhealth/article/46/1/151/7434434')]
        })
      ],
      participation: [],
      proposals: [
        proposal({
          name: 'Let communities design how vaccines reach them',
          method: 'Community advisory & co-design',
          description: paragraph(`
            Affected communities decide where and how vaccination access is
            delivered: siting of mobile units, hours, locations, paid-time-off
            coordination. Of the proposals in this project, this is the one
            whose mechanism rests on the strongest causal evidence: distance reduced uptake in 98 percent of the analyses, and the randomized trial of mobile units produced the largest measured uptake effect in the
            literature reviewed here. The design question the record leaves
            open is who chooses the sites, not whether sites work.
          `),
          mechanism: paragraph(`
            Removing access barriers raises uptake; community knowledge of
            local material conditions places the infrastructure where the
            barriers actually are.
          `),
          unstudied: false
        })
      ],
      gaps: []
    }),

    link({
      id: 'F3',
      name: 'Equity programs run, but go unmeasured',
      stage: 'participation',
      from: 'Access, not hesitancy, is the main barrier',
      to: 'Federal equity programs roll out at scale',
      claim: paragraph(`
        Federal equity programs documented reach in detail; no evaluation
        measuring their effect on uptake was identified, and in one case the
        responsible agency lacked the data systems needed to measure equity
        outcomes.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            The Federal Retail Pharmacy Program administered <strong>219 million doses</strong>
            (44.5% of all doses given nationwide, Feb 2021 – Jan 2022), scaling from
            ~10,000 to >35,000 sites by May 2021. <strong>46.5% of doses went to
            high-Equitable-Distribution-Index areas</strong>, rising from 26.6% in Q1 to
            50.9% in Q2.
          `),
          quote: paragraph(`
            From February 11, 2021, through January 31, 2022, FRPP received 293
            million vaccine doses and administered 219 million doses [...] FRPP
            initially provided 10 000 vaccination sites for people to access COVID-19
            vaccines, which was increased to >35 000 vaccination sites by May 2021
          `),
          grade: 'moderate',
          caveat: 'Reach measure. No counterfactual for what coverage would have been without it.',
          sources: [source('Public Health Reports 138(6)', 'https://journals.sagepub.com/doi/10.1177/00333549231186606')]
        }),
        evidence({
          finding: paragraph(`
            HHS reports community health centers administered nearly 19 million
            doses, <strong>68% to racial and/or ethnic minority patients</strong> (as of
            January 2022). A JAMA Network Open study of 1,096 FQHCs serving 25.9
            million patients found <strong>61.4% of doses went to people of color
            against a 40% national average</strong> (Jan – Jul 2021).
          `),
          quote: paragraph(`
            Health centers have administered nearly 19 million COVID-19 vaccine doses
            [...] Overall, 68 percent has gone to racial and/or ethnic minority
            patients as of January 14, 2022.
          `),
          grade: 'moderate',
          sources: [
            source('HHS fact sheet', 'https://www.hhs.gov/sites/default/files/black-history-month-2022-fact-sheet.pdf'),
            source('JAMA Network Open', 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2787869'),
            source('BU School of Public Health summary', 'https://www.bu.edu/sph/news/articles/2022/health-centers-are-improving-covid-19-vaccine-equity-among-people-of-color')
          ]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            DHS's Inspector General (2022) found FEMA <strong>had not finalized its equity
            guidance and lacked systems to collect demographic data on
            applicants</strong>, leaving the agency unable to verify whom its vaccination
            resources reached.
          `),
          quote: paragraph(`
            Without a system of records, FEMA cannot accurately identify and target
            resources to underserved and marginalized communities.
          `),
          grade: 'strong',
          sources: [source('DHS OIG-22-74', 'https://www.oig.dhs.gov/sites/default/files/assets/2022-09/OIG-22-74-Sep22.pdf')]
        }),
        evidence({
          finding: paragraph(`
            An NBC News analysis found federal Community Vaccination Center
            performance varied widely by site: Cleveland delivered <strong>nearly 3 of
            every 4 doses to White recipients in a city 33.8% White</strong>, while Newark
            delivered 16.8% to White recipients in an 11%-White city. Demographic
            data were available for only 81.4% of doses (roughly 19% had none).
          `),
          quote: paragraph(`
            At the New Jersey Institute of Technology's Wellness and Events Center in
            Newark, just 16.8 percent of nearly 286,000 shots were administered to
            whites. The city's population is 11 percent non-Hispanic white.
          `),
          grade: 'moderate',
          sources: [source('NBC News analysis', 'https://www.nbcnews.com/politics/white-house/federal-vaccination-data-show-mixed-record-equity-n1276833')]
        })
      ],
      participation: [
        participation({
          date: '2021–2022',
          name: 'Federal community-engagement funding',
          kind: 'service',
          actors: 'HHS, 150 community-based organizations across 50 states, 73 local governments',
          description: paragraph(`
            <strong>$323M</strong> to 150 community-based organizations for vaccine outreach,
            <strong>$250M</strong> to 73 local governments for culturally appropriate health
            literacy, <strong>$500M</strong> across two awards for community health workers
            ($300M for high-risk populations, $200M for vaccination in underserved
            communities), $2.25B for COVID health disparities, $29M for
            vaccine-confidence research in communities of color.
          `),
          effect: 'unmeasured',
          sources: [
            source('HHS fact sheet', 'https://www.hhs.gov/sites/default/files/black-history-month-2022-fact-sheet.pdf'),
            source('Healthcare Dive', 'https://www.healthcaredive.com/news/hhs-will-send-250m-in-grants-for-vaccine-equity-push/596372/')
          ]
        })
      ],
      proposals: [
        proposal({
          name: 'Fund evaluation alongside the programs',
          method: 'Built-in program evaluation',
          description: paragraph(`
            Fund a counterfactual evaluation as a condition of every
            community-engagement award, so that roughly $1.1 billion in
            participation infrastructure does not exist in the record only as
            dollar figures and dose counts. The 6/8 session's question sits
            behind this: what information is already available, and is it used
            by and shared with the public?
          `),
          mechanism: paragraph(`
            Evaluation funded alongside delivery produces the effect estimates
            this link currently lacks, and future emergencies inherit evidence
            instead of reach statistics.
          `),
          unstudied: true
        })
      ],
      gaps: [
        paragraph(`
          No published outcome evaluation of any of these line items was
          identified. Roughly $1.1 billion in participation infrastructure exists
          in the record as dollar figures and dose counts and nothing else.
          Whether funding evaluation at the same time as program delivery would
          close this gap is untested; on the current record the programs' effect
          on uptake cannot be estimated.
        `)
      ]
    }),

    link({
      id: 'F4',
      name: 'The gap narrows',
      stage: 'harm-reduction',
      from: 'Federal equity programs roll out at scale',
      to: 'The racial vaccination gap narrows',
      claim: paragraph(`
        The gap narrowed by late 2021. Attribution to any specific intervention
        is unestablished, and the best available analysis identifies a different
        mediator than the funded programs targeted.
      `),
      strength: 'unstudied',
      evidence: [
        evidence({
          finding: paragraph(`
            By the end of November 2021, CDC survey data showed at-least-one-dose
            coverage was similar across groups: Black 78.2%, Hispanic 81.3%, White
            78.7%. Among those still unvaccinated in late 2021, intent to get
            vaccinated was <strong>higher</strong> among Black (11.2%) and Hispanic (9.3%)
            adults than White adults (6.2%).
          `),
          quote: paragraph(`
            By the end of November 2021, national ≥1-dose COVID-19 vaccination
            coverage was similar for Black (78.2%), Hispanic (81.3%), NH/OPI (75.7%),
            and White adults (78.7%)
          `),
          grade: 'moderate',
          caveat: 'Administrative data disagree: KFF still showed a 5-point Black–White gap in July 2022, and self-report tends to overstate minority coverage. Whether the gap closed depends on the measure used.',
          sources: [source('MMWR 71(23)', 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7123a2.htm')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            A national probability panel of more than 1,800 individuals (Annenberg
            Public Policy Center) tracked reported dose receipt April 2021 – July
            2022 and tested five explanations for the narrowing. <strong>Only knowledge explained it.</strong> Trust in CDC correlated with vaccination at baseline but
            had <strong>no association with the change</strong> in coverage, and neither
            differential access nor media use explained the increase. The authors
            attribute the change to knowledge transmitted <em>from within the Black
            community</em>.
          `),
          quote: paragraph(`
            Only increases in knowledge about the safety and efficacy of COVID-19
            vaccines uniquely mediated the increase in vaccination uptake among
            non-Hispanic Black compared to White, Asian and Hispanic panelists. [...]
            neither differential access nor media use explained the increase.
          `),
          grade: 'strong',
          caveat: 'Observational mediation analysis. It rules out differential access and CDC trust as mediators of the change but does not identify which community processes transmitted the knowledge.',
          sources: [source('Annenberg Public Policy Center', 'https://www.annenbergpublicpolicycenter.org/publication/what-caused-the-narrowing-of-black-white-covid-19-vaccination-disparity-in-the-us-a-test-of-5-hypotheses/')]
        }),
        evidence({
          finding: paragraph(`
            A national longitudinal survey (Vaccine, 2023; n=6,078, Dec 2020 – Jul
            2021) found that after adjusting for education, household income, marital
            status, chronic conditions, trust in vaccine development, and perceived
            infection risk, <strong>no significant racial or ethnic differences in
            initiation or completion remained</strong>. The disparities ran through social and economic conditions, psychological influences, and chronic health conditions.
          `),
          quote: paragraph(`
            After accounting for the mediators, there were no significant differences
            in vaccine initiation or completion between each minoritized group as
            compared to White Americans.
          `),
          grade: 'moderate',
          sources: [source('Vaccine 41(14)', 'https://pubmed.ncbi.nlm.nih.gov/36894396/')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          No published analysis attributes the 2021 narrowing to any specific
          intervention. Supply normalization plus time plus endogenous
          within-community information spread remains unexcluded and is the most
          parsimonious explanation; the claim that community engagement closed the
          gap is not currently supported by the literature.
        `),
        paragraph(`
          The mediator the Annenberg analysis identifies (knowledge moving
          <em>through</em> community networks) is a form of participation that no
          program designed, funded, or measured. No study was identified that
          tests whether a designed intervention can reproduce that endogenous
          diffusion.
        `)
      ]
    })

  ]
});

export default [total, fair];
