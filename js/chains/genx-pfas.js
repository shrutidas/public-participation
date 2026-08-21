import { chain, link, evidence, participation, paragraph, source } from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * Case Study 3: GenX Contamination in the Cape Fear River
 *
 * Two chains, matching the two outcomes participation could plausibly have
 * improved:
 *
 *   DETECTION: could the problem have been identified earlier?
 *   RESPONSE: once identified, was the response faster or better because
 *               of participation?
 *
 * The record shows this was not a detection failure but a disclosure
 * failure: EPA research scientists detected the compounds in 2012, and the
 * missing instrument was a notification / right-to-know mechanism, not a
 * monitoring one.
 * -------------------------------------------------------------------------- */

const detection = chain({
  id: 'pfas-detection',
  label: 'Earlier Identification',
  track: 'detection',
  purpose: paragraph(`
    This chain traces why GenX contamination of the Cape Fear River stayed
    unknown to the public for decades after the companies, and later the
    regulators, knew.
  `),
  outcome: paragraph(`
    Approximately <strong>200,000</strong> CFPUA customers (250,000–300,000 in the wider
    downstream region) drank water with a mean GenX concentration of
    <strong>631 ng/L</strong> and concentrations up to approximately 4,500 ng/L
    (Sun et al., 2016).
  `),
  thesis: paragraph(`
    The available evidence indicates that detection worked and disclosure did
    not. <strong>EPA research scientists found the novel compounds in samples collected
    in 2012</strong>; academic quantification reached NC DEQ in November 2016. The step
    that failed was the one from institutional knowledge to public knowledge:
    roughly <strong>five years</strong> from federal detection, and roughly <strong>seven months</strong>
    from a peer-reviewed paper reaching the regulator, to a newspaper reporting
    what was in the tap water. On this record, participation instruments that
    improve <em>sensing</em> would not have changed the outcome; instruments that
    force <em>notification</em> address the step that failed.
  `),
  links: [

    link({
      id: 'D1',
      stage: 'structural',
      from: 'Corporate concealment, 1961 onward',
      to: 'Regulators without the information the law entitled them to',
      claim: paragraph(`
        Disclosure obligations existed and were not met. The asserted failure
        at this link is legal compliance.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            DuPont scientists issued internal warnings about PFOA health risks as
            early as <strong>1961</strong>; by 1980 the company had found elevated levels of
            the chemical in workers at its Washington Works plant. EPA's 2004
            administrative action charged multiple failures to report substantial-risk
            information about PFOA to EPA, obtained from as early as 1981, as
            <strong>TSCA Section 8(e)</strong> requires.
          `),
          quote: paragraph(`
            As early as 1961, DuPont scientists issued internal warnings about the
            health risks of PFOA [...] by 1980 had found elevated levels of the
            chemical in workers at the DuPont Washington Works plant.
          `),
          grade: 'strong',
          sources: [
            source('EWG EPA PFAS timeline', 'https://static.ewg.org/reports/2020/pfas-epa-timeline/EPA-PFAS-Timeline-10-21.pdf'),
            source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health'),
            source('EWG 3M/DuPont timeline', 'https://static.ewg.org/reports/2019/pfa-timeline/3M-DuPont-Timeline_sm.pdf')
          ]
        }),
        evidence({
          finding: paragraph(`
            A peer-reviewed analysis of internal industry documents (Gaber, Bero and
            Woodruff 2023, <em>Annals of Global Health</em>, reported by the Guardian)
            found that a <strong>1970</strong> internal DuPont information request from W.E.
            Hilton of the Fluorocarbons Division noted that Haskell Laboratory studies
            had already found C8 (PFOA) <strong>"highly toxic when inhaled and moderately
            toxic when ingested"</strong>. The analysis identified internal studies from
            1961 to 1994 showing evidence of PFAS toxicity that DuPont did not publish
            and did not report to EPA as TSCA requires.
          `),
          quote: paragraph(`
            In a 1970 internal information request, W.E. Hilton of the Fluorocarbons
            Division at the Washington Works plant notes that studies by Haskell
            Laboratory had already found C8 to be 'highly toxic when inhaled and
            moderately toxic when ingested.'
          `),
          grade: 'strong',
          caveat: 'The Guardian article could not be fetched for verification; the quote is from the underlying peer-reviewed study it reports on.',
          sources: [
            source('The Guardian', 'https://www.theguardian.com/environment/2023/jun/07/pfas-3m-dupont-chemical-industry-health-toxic-study'),
            source('Gaber et al. 2023, Annals of Global Health', 'https://annalsofglobalhealth.org/articles/10.5334/aogh.4013')
          ]
        }),
        evidence({
          finding: paragraph(`
            EPA announced on December 14, 2005 that DuPont would pay
            <strong>$10.25 million</strong> in civil administrative penalties, plus $6.25 million
            for supplemental environmental projects, to settle eight counts; seven
            alleged violations of TSCA Section 8(e), the requirement to report
            substantial-risk information, covering information DuPont obtained about
            PFOA from as early as 1981.
          `),
          quote: paragraph(`
            DuPont will pay $10.25 million -- the largest civil administrative penalty
            EPA has ever obtained under any federal environmental statute
          `),
          grade: 'strong',
          sources: [source('EPA newsroom archive', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
        }),
        evidence({
          finding: paragraph(`
            Per WRAL's documented timeline, a DuPont representative told DEQ regulators
            at a June 24, 2015 meeting, according to a state regulator's handwritten
            notes, that the GenX compound was "no longer discharged to river." On
            September 5, 2017, state officials publicly accused Chemours of misleading
            environmental regulators about the fluorinated chemicals it discharges.
          `),
          quote: paragraph(`
            State officials publicly accuse Chemours of misleading environmental
            regulators about the fluorinated chemicals it discharges into the Cape
            Fear River, including GenX.
          `),
          grade: 'moderate',
          sources: [source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')]
        })
      ],
      participation: [
        participation({
          date: '1998–2004',
          name: 'Tennant v. DuPont and the Leach class action',
          kind: 'litigation',
          actors: 'Wilbur Tennant, Rob Bilott, ~70,000 residents of six water districts',
          description: paragraph(`
            A West Virginia farmer's observation of cattle deaths produced court-ordered
            discovery of DuPont's internal PFOA records, the first time the concealed
            evidence entered the public domain. The 2004 Leach settlement funded the
            <strong>C8 Science Panel</strong>, three independent epidemiologists whose findings
            became the evidentiary basis for later regulation.
          `),
          effect: 'moved',
          sources: [source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')]
        }),
        participation({
          date: '1999',
          name: 'Richard Purdy resignation and disclosure to EPA',
          kind: 'whistleblowing',
          actors: 'Dr. Richard Purdy, 3M environmental toxicologist',
          description: paragraph(`
            3M environmental toxicologist Richard Purdy resigned in 1999 and sent his
            resignation letter to EPA, disclosing that 3M had told EPA that PFOS "had
            been found in the blood of animals" without mentioning that it was found
            in the blood of eaglets, and writing that "For 20 years the division has
            been stalling the collection of data needed for evaluating the
            environmental impact of fluorochemicals." Per the Minnesota Reformer's
            account, EPA began investigating the chemicals that year. Former Minnesota
            Attorney General Lori Swanson later testified to Congress that the company
            "engaged in a campaign to hide its own studies."
          `),
          effect: 'partial',
          sources: [source('Minnesota Reformer', 'https://minnesotareformer.com/2022/12/15/toxic-3m-knew-its-chemicals-were-harmful-decades-ago-but-didnt-tell-the-public-government/')]
        })
      ],
      gaps: [
        paragraph(`
          Litigation is the only instrument in this record that reliably pierced
          concealment, and it required a farmer noticing dead cattle, an attorney
          working the matter for two decades, and a discovery order. No
          non-adversarial instrument was identified that performed the same function
          in this case.
        `)
      ]
    }),

    link({
      id: 'D2',
      stage: 'structural',
      from: 'Regulators without the information the law entitled them to',
      to: 'No triggered inspection and no public notification',
      claim: paragraph(`
        Regulatory machinery specific to this substance existed from 2009 and did
        not produce an inspection until after public disclosure in 2017.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            EPA entered a <strong>TSCA Section 5(e) consent order with DuPont in 2009</strong> for
            GenX-related substances, requiring the manufacturing process to recover and
            capture (destroy) or recycle the substances at an overall efficiency of
            99 percent. Per the EPA Office of Inspector General (2020), EPA's <strong>first
            on-site TSCA compliance inspection at Fayetteville Works took place on
            June 28 and 29, 2017: eight years later, and three weeks after a newspaper
            broke the story.</strong>
          `),
          quote: paragraph(`
            Region 4 and EPA contractors conducted the Agency's first on-site TSCA
            compliance monitoring inspection at the Fayetteville Works facility on
            June 28 and 29, 2017
          `),
          grade: 'strong',
          sources: [
            source('EPA Office of Inspector General', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf'),
            source('EPA OIG notification memo, Sept. 23, 2019', 'https://www.epa.gov/sites/default/files/2019-09/documents/_epaoig_notificationmemo_9-23-19_dupont.pdf')
          ]
        }),
        evidence({
          finding: paragraph(`
            Rick Shiver, a retired DEQ regional supervisor, said the permit language on
            chemical precursors was insufficiently clear to convey that a byproduct
            stream was being discharged: the permit did not ask the question that would
            have surfaced the discharge.
          `),
          quote: paragraph(`
            "I would not understand that this process generated GenX as a byproduct,"
            Shiver said when shown a copy of the paragraph. "I don't think anyone in
            the regional office would understand that."
          `),
          grade: 'moderate',
          caveat: 'Think-tank source with a limited-government framing; sourced and dated, but not neutral.',
          sources: [source('John Locke Foundation', 'https://www.johnlocke.org/research/genx-early-responses-to-unregulated-contaminants-in-the-cape-fear-river/')]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          The record supplies a specific answer to why the existing mechanism did not
          work: a TSCA 5(e) consent order creates an <em>obligation on the company</em>
          with no scheduled verification and no notification duty to the affected
          public. Whether attaching a <strong>local monitoring plan with public
          involvement</strong> to every 5(e) order would close this gap has not been
          tested; no jurisdiction was identified that has built one.
        `)
      ]
    }),

    link({
      id: 'D3',
      stage: 'structural',
      from: 'No triggered inspection and no public notification',
      to: 'Detection achieved, but held inside institutions',
      claim: paragraph(`
        Detection was not the bottleneck. Between federal detection and public
        disclosure sat roughly five years in which the knowledge existed inside
        institutions and nowhere else.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            <strong>EPA's own research scientists detected the compounds first.</strong>
            Strynar et al. (EPA National Exposure Research Laboratory) identified 12
            novel PFECAs and PFESAs in the Cape Fear River watershed from samples
            collected in <strong>summer 2012</strong>, published in <em>Environmental
            Science &amp; Technology</em> in 2015.
          `),
          quote: paragraph(`
            We detected 12 novel perfluoroalkyl ether carboxylic and sulfonic acids in
            surface water in North Carolina, USA [...] In the summer of 2012, water
            samples were collected at locations on the Cape Fear River and its
            tributaries
          `),
          grade: 'strong',
          sources: [
            source('Strynar et al. 2015, ES&T', 'https://pubs.acs.org/doi/10.1021/acs.est.5b01215'),
            source('Strynar et al. 2015 (open copy, NC State CHHE)', 'https://chhe.research.ncsu.edu/wordpress/wp-content/uploads/2018/05/Ethers_Strynar_EST2015.pdf')
          ]
        }),
        evidence({
          finding: paragraph(`
            Sun, Knappe et al. (with two EPA co-authors) quantified GenX in Cape Fear
            drinking water source samples at a mean of <strong>631 ng/L</strong> and up to
            approximately <strong>4,500 ng/L</strong>, from sampling in June–December 2013 with
            additional samples in August 2014, published November 10, 2016.
          `),
          quote: paragraph(`
            the mean concentration of perfluoro-2-propoxypropanoic acid (PFPrOPrA), a
            replacement for PFOA, was 631 ng/L (n = 37)
          `),
          grade: 'strong',
          sources: [
            source('Sun et al. 2016, ES&T Letters', 'https://pubs.acs.org/doi/abs/10.1021/acs.estlett.6b00398'),
            source('Sun et al. 2016 (open copy, NC State CHHE)', 'https://chhe.research.ncsu.edu/wordpress/wp-content/uploads/2017/08/PFECAs_Sun_ESTL2016-2.pdf')
          ]
        }),
        evidence({
          finding: paragraph(`
            In November 2016, Knappe forwarded the published paper to multiple
            officials within NC DEQ and various cities; about a week later a UNCW
            professor sent it to CFPUA and several other public entities. NC Health
            News reported that the McCrory administration had received information
            about the EPA and NC State research in <strong>May or June 2016</strong>, and that
            the utilities and agencies alerted by Knappe did not publicize the
            findings.
          `),
          quote: paragraph(`
            in May or June 2016 the administration of former Republican Gov. Pat
            McCrory received information about EPA and N.C. State University research
            on GenX in the Cape Fear [...] local utilities and the state, alerted to
            the problem by Knappe, did not publicize the findings.
          `),
          grade: 'moderate',
          sources: [
            source('NC Health News', 'https://www.northcarolinahealthnews.org/2017/08/17/genx-pollution-what-happened-when/'),
            source('WECT', 'https://www.wect.com/story/35728729/cfpua-staff-acted-in-appropriate-manner-in-involvement-with-genx-study/')
          ]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          Two claims that would materially strengthen this link remain unverified:
          NRDC's assertion that NC agencies likely knew "at least a decade" earlier,
          and NC Newsline's report that a DEQ employee raised DuPont groundwater
          contamination roughly 15 years before with no result. Neither has been
          confirmed against primary records.
        `)
      ]
    }),

    link({
      id: 'D4',
      stage: 'participation',
      from: 'Detection achieved, but held inside institutions',
      to: 'Public knowledge (June 2017), via a newspaper',
      claim: paragraph(`
        The link was closed by a local newspaper reporter reading a federal
        transparency database, not by a regulator, a utility, or any participation
        instrument designed for the purpose.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Wilmington StarNews published "Toxin taints CFPUA drinking water" on
            <strong>June 7, 2017</strong>, reporting GenX discharge affecting drinking water for
            ~250,000 people in three counties from a plant 100 miles upstream. NC DEQ and
            DHHS began an investigation <strong>seven days later</strong>, on June 14, 2017.
          `),
          quote: paragraph(`
            "Toxin taints CFPUA drinking water" ran front page Wednesday, June 7, 2017
          `),
          grade: 'moderate',
          caveat: 'Article confirmed by date slug and by NC State\'s contemporaneous link; the StarNews site blocks automated retrieval, so substance is from three independent secondary accounts.',
          sources: [
            source('Coastal Review profile of the reporting', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/'),
            source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')
          ]
        }),
        evidence({
          finding: paragraph(`
            The reporter found the story by <strong>browsing EPA's UCMR3 monitoring
            data</strong>, noticing Wilmington-area detections, and reaching the Sun et al.
            paper through web searches. The federal monitoring data had been publicly
            available; no public notification had followed from it before the
            newspaper's report.
          `),
          quote: paragraph(`
            browsing websites in the spring of 2017, he came across something called
            the Unregulated Contaminant Monitoring Rule [...] he loaded the data to
            see what would pop up for the Wilmington area. There were some local hits
          `),
          grade: 'moderate',
          sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
        })
      ],
      participation: [
        participation({
          date: '06/2017',
          name: 'Local journalism as the de facto notification instrument',
          kind: 'journalism',
          actors: 'Vaughn Hagerty, Wilmington StarNews',
          description: paragraph(`
            One reporter at a regional paper, reading a federal monitoring database
            that had been public throughout, performed the notification function that
            no statute assigned to anyone: his June 7, 2017 front-page story was
            followed within seven days by a state investigation. The COVID case in
            this project shows the same substitution, with the New York Times and
            Johns Hopkins performing county-level reporting the federal government
            did not.
          `),
          effect: 'moved',
          sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
        })
      ],
      gaps: [
        paragraph(`
          In two independent cases in this project, in different domains, the
          information channel that actually reached the public was journalism
          substituting for a state function. What a <strong>statutory public
          notification trigger</strong> (one that fires when a peer-reviewed detection
          above a threshold reaches a regulator) would cost has not been assessed,
          and no jurisdiction was identified that has built one.
        `)
      ]
    }),

    link({
      id: 'D5',
      stage: 'harm',
      after: 'D3',
      from: 'Detection achieved, but held inside institutions',
      to: 'Measured body burden in the exposed population',
      claim: paragraph(`
        The harm is quantified in serum, and the quantification exists because a
        university built a study around a community, not because any regulator
        required it.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            In 344 Wilmington-area residents, Kotlarz et al. (2020) detected six
            fluoroethers in serum; Nafion by-product 2 and PFO4DA appeared in more
            than 99% of participants. Fluoroethers contributed <strong>23% of summed serum
            PFAS</strong> (median summed PFAS 25.0 ng/mL). Four legacy PFAS were detected in
            <strong>≥97%</strong> of participants at levels above 2015–2016 NHANES national
            levels. In participants with repeated samples, median fluoroether levels
            declined 34–65% over six months once discharge controls were in place.
          `),
          quote: paragraph(`
            The sum concentration of fluoroethers contributed 23% to participants'
            summed PFAS (median: 25.0 ng/mL). [...] GenX was not detected above our
            analytical method reporting limit (2 ng/mL).
          `),
          grade: 'strong',
          caveat: 'GenX itself was not detected above the 2 ng/mL reporting limit in any participant; the serum burden reflects co-discharged fluoroethers rather than the compound the crisis is named for. NC State\'s press release reports slightly different figures (24% of measured PFAS; declines of 28–65%; three fluoroethers detected in over 85% of samples).',
          sources: [
            source('Kotlarz et al., Environ Health Perspect 128(7)', 'https://doi.org/10.1289/EHP6837'),
            source('Kotlarz et al. (PubMed Central)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7375159/')
          ]
        }),
        evidence({
          finding: paragraph(`
            Rosen et al. (2022) found higher legacy PFAS (PFOS, PFNA) associated with
            higher non-HDL cholesterol, approximately 5 mg/dL per exposure quartile,
            with the strongest associations among the oldest participants.
          `),
          quote: paragraph(`
            non-HDL cholesterol was approximately 5mg/dL higher per exposure quartile
            [...] In age-stratified analyses, associations were strongest among the
            oldest participants.
          `),
          grade: 'moderate',
          caveat: 'Cross-sectional design; temporality between exposure and outcome is undetermined.',
          sources: [
            source('Rosen et al., Environ Health Perspect 130(9)', 'https://doi.org/10.1289/EHP11033'),
            source('Rosen et al. (PubMed)', 'https://pubmed.ncbi.nlm.nih.gov/36069575/')
          ]
        }),
        evidence({
          finding: paragraph(`
            Analysis of 119 archived adult serum samples collected 2010–2016
            (<strong>before disclosure</strong>) found PFMOAA at a median of 42 ng/mL, the
            highest of 56 PFAS measured, establishing body burden in the population
            years before the June 2017 public disclosure.
          `),
          quote: paragraph(`
            These data gave us a 'timestamp' of exposure before people knew their
            drinking water was contaminated.
          `),
          grade: 'moderate',
          sources: [source('NC State summary', 'https://news.ncsu.edu/2025/10/high-levels-of-short-chain-pfas-found-in-wilmington-residents-blood/')]
        }),
        evidence({
          finding: paragraph(`
            A companion analysis of the same cohort (Wilkie et al. 2023,
            <em>Environmental Research</em>) examined demographic and residential
            factors associated with serum PFAS concentrations in New Hanover County
            residents, in a population whose legacy PFAS levels exceeded national
            reference levels.
          `),
          grade: 'moderate',
          caveat: 'Cross-sectional analysis of a single cohort.',
          sources: [source('Wilkie et al. 2023, Environmental Research (PMC)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10591865/')]
        })
      ],
      participation: [],
      gaps: []
    })

  ]
});

const response = chain({
  id: 'pfas-response',
  label: 'Faster and Better Response',
  track: 'response',
  purpose: paragraph(`
    This chain traces what happened after public disclosure in June 2017:
    which forms of participation forced remediation, and which protections
    never followed.
  `),
  outcome: paragraph(`
    A <strong>$12 million</strong> penalty, a consent order with a citizen group holding
    independent enforcement authority, a 99% discharge reduction, filtered water
    for Wilmington by 2022; and, nine years on, <strong>still no enforceable North
    Carolina surface water standard for GenX</strong>, with the federal drinking water
    limit proposed for rescission in May 2026.
  `),
  thesis: paragraph(`
    The assembled evidence shows three different instruments closing three
    different links, in sequence and not interchangeably: <strong>journalism</strong>
    produced disclosure, <strong>litigation</strong> produced scope, and <strong>public comment</strong>
    produced downstream coverage. None of them was deliberative. The documented
    participation record is adversarial and legal, and it produced more
    documented change than any deliberative instrument in the other two cases in
    this project.
  `),
  links: [

    link({
      id: 'R1',
      stage: 'compliance',
      from: 'Public disclosure (June 2017)',
      to: 'Emergency agency action within one week',
      claim: paragraph(`
        Press attention, not participation, unlocked the initial regulatory response.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            DEQ and DHHS began an investigation on June 14, 2017, seven days after
            publication. DHHS set a preliminary health goal of <strong>71,000 ppt</strong> on
            June 8, 2017 and lowered it to <strong>140 ppt</strong> on July 14, 2017, after
            consulting with EPA scientists: a 99.8% reduction in the number in
            roughly five weeks.
          `),
          quote: paragraph(`
            state health officials announce they've lowered the safety threshold for
            GenX to 140 parts per trillion after consulting with EPA scientists
          `),
          grade: 'moderate',
          sources: [source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')]
        }),
        evidence({
          finding: paragraph(`
            A contemporaneous legal analysis by the Center for Progressive Reform
            argued the causal driver was the press, describing DEQ's pre-coverage
            posture as "dilatory and lax" and its post-coverage posture as active
            enforcement.
          `),
          quote: paragraph(`
            media attention – and the public reaction it can engender – can have a
            significant catalytic impact on regulatory officials
          `),
          grade: 'moderate',
          sources: [source('Center for Progressive Reform', 'https://progressivereform.org/cpr-blog/north-carolina-v-chemours-early-reflections-on-an-ongoing-state-environmental-enforcement-case/')]
        })
      ],
      participation: [
        participation({
          date: '06/21/2017',
          name: 'Cape Fear River Watch community forum',
          kind: 'consultative',
          actors: 'Cape Fear River Watch, Riverkeeper Kemp Burdette, former Mayor Harper Peterson, UNCW scientists, 300+ residents',
          description: paragraph(`
            Convened the day after Chemours announced voluntary cessation of GenX
            discharge, and following a DEQ/Chemours/officials meeting that had been
            <strong>closed to the public, with only one pool reporter permitted</strong>.
            More than 300 attended; Burdette told the crowd, "they chose not to tell
            the communities downstream. Clean water is our right."
          `),
          effect: 'partial',
          sources: [source('NC Newsline', 'https://ncnewsline.com/briefs/former-wilmington-mayor-express-outrage-genx-contamination-drinking-water-cape-fear/')]
        }),
        participation({
          date: '06/28/2017',
          name: 'Press-organized public forum, UNCW',
          kind: 'consultative',
          actors: 'WHQR, WWAY-TV, StarNews, 16-member expert panel including Knappe, ~450 residents',
          description: paragraph(`
            Hosted by WHQR News, WWAY-TV News and StarNews Media at UNCW's Kenan
            Auditorium, with about 450 attendees and a 16-member panel of scientists,
            environmental advocates, elected officials and health officials. The two
            largest early public meetings in the case were convened by a riverkeeper
            group and by news organizations, not by the regulator.
          `),
          effect: 'partial',
          sources: [source('Coastal Review', 'https://coastalreview.org/2017/07/genx-unknowns-frustrate-folks-forum/')]
        }),
        participation({
          date: '08/23/2017',
          name: 'Legislative Environmental Review Commission hearing, Wilmington',
          kind: 'consultative',
          actors: 'NC General Assembly ERC (20 members), overflow public crowd; Chemours declined to appear',
          description: paragraph(`
            The 20-member commission questioned local officials for almost five hours
            before an overflow crowd; Chemours declined an invitation to speak. The
            administration's $2.6 million funding request received no vote; the
            legislature subsequently appropriated <strong>$435,000</strong> over a veto in
            October 2017.
          `),
          effect: 'partial',
          sources: [
            source('WHQR', 'https://whqr.org/post/genx-general-assembly-commission-meets-wilmington'),
            source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')
          ]
        })
      ],
      gaps: []
    }),

    link({
      id: 'R2',
      stage: 'structural',
      from: 'Emergency agency action within one week',
      to: 'A weak draft order omitting groundwater and surface water pathways',
      claim: paragraph(`
        The regulator's June 2018 draft order covered two contamination pathways
        and left others unaddressed. The sequence is documented: the narrow draft
        came <em>before</em> the citizen suit was filed; the comprehensive order
        came <em>after</em> it.
      `),
      strength: 'moderate',
      evidence: [
        evidence({
          finding: paragraph(`
            DEQ's June 11, 2018 draft Proposed Order required control of air emissions
            and continued the process wastewater prohibition, but did
            <strong>not prevent other releases to surface water and groundwater</strong>.
            Cape Fear River Watch had served its notice of intent to sue on May 7, 2018.
          `),
          quote: paragraph(`
            The draft Proposed Order does not prevent other releases of PFAS into
            surface waters that drain into the Cape Fear River and groundwater.
          `),
          grade: 'strong',
          sources: [
            source('SELC timeline', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf'),
            source('ONE J (Oil and Gas, Natural Resources, and Energy Journal) case note', 'https://digitalcommons.law.ou.edu/cgi/viewcontent.cgi?article=1510&context=onej')
          ]
        })
      ],
      participation: [],
      gaps: []
    }),

    link({
      id: 'R3',
      stage: 'participation',
      from: 'A weak draft order omitting groundwater and surface water pathways',
      to: 'A comprehensive draft order, with the citizen group as a party',
      claim: paragraph(`
        A 1,100-member nonprofit resolved two live lawsuits in exchange for party
        status, independent enforcement authority over eleven provisions, and a
        standing obligation on the regulator to meet with it.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            The Consent Order's own text records that it resolves Cape Fear River
            Watch's two pending actions and that the State and Chemours consented to
            the group's intervention <strong>as a plaintiff</strong>. Entered February 25, 2019,
            Bladen County Superior Court, 17 CVS 580.
          `),
          quote: paragraph(`
            For the purpose of entering into this Consent Order and resolving Cape
            Fear River Watch's pending actions in Cape Fear River Watch v. North
            Carolina Department of Environmental Quality, 18 CVS 2462 [...] and Cape
            Fear River Watch v. Chemours Company FC, LLC, No. 7:18-cv-00159 (E.D.N.C.)
          `),
          grade: 'strong',
          sources: [source('Consent Order (NC DEQ)', 'https://files.nc.gov/ncdeq/GenX/Consent-order-11212018.pdf')]
        }),
        evidence({
          finding: paragraph(`
            <strong>Paragraph 33: $12,000,000 civil penalty plus $1,000,000 investigative
            costs</strong>, reported at the time as the largest fine ever levied by DEQ.
            Air: GenX emission reductions of 82% by October 2018, <strong>92% by
            end-2018</strong> and 99% by end-2019, with a thermal oxidizer controlling PFAS
            emissions at 99.99% efficiency. Drinking water: public connection or
            filtration for contaminated wells within 9 months, with filtration
            maintained for a <strong>20-year</strong> minimum.
          `),
          quote: paragraph(`
            By no later than thirty (30) days following entry of this Order, Chemours
            shall pay [...] a civil penalty in the amount of $12,000,000 and
            investigative costs in the amount of $1,000,000.
          `),
          grade: 'strong',
          sources: [
            source('Consent Order (NC DEQ)', 'https://files.nc.gov/ncdeq/GenX/Consent-order-11212018.pdf'),
            source('Bladen Journal', 'https://www.bladenjournal.com/news/21094/chemours-ordered-to-reduce-emissions-pay-fine'),
            source('NC DEQ press release, Nov. 21, 2018', 'https://www.deq.nc.gov/news/press-releases/2018/11/21/release-state-officials-require-chemours-provide-permanent-drinking')
          ]
        }),
        evidence({
          finding: paragraph(`
            <strong>Paragraph 38</strong> gives Cape Fear River Watch independent authority to
            enforce eleven substantive provisions of the order (paragraphs 7, 8, 10,
            11, 12, 13, 15, 16(d), 29, 40 and 46). <strong>Paragraph 40</strong> obliges DEQ to
            make relevant staff available for an in-person meeting with the group
            within 30 days of receiving compliance reports. <strong>Paragraph 29</strong>
            requires Chemours to hold public meetings on PFAS-related facility changes
            and to notify both DEQ and the citizen group four weeks in advance.
          `),
          quote: paragraph(`
            Within thirty (30) days of receiving those reports, DEQ shall make
            relevant staff available for an in person meeting with Cape Fear River
            Watch to discuss the status
          `),
          grade: 'strong',
          sources: [source('Consent Order (NC DEQ)', 'https://files.nc.gov/ncdeq/GenX/Consent-order-11212018.pdf')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            The public utility that paid for remediation <strong>did not obtain party
            status</strong>. CFPUA moved to intervene on September 8, 2020, more than 18
            months after entry; the motion was denied as untimely and the denial was
            affirmed by the NC Court of Appeals on June 21, 2022. Party status went to
            the group that filed early, not to the entity bearing the cost.
          `),
          quote: paragraph(`
            This Court entered judgment in this case in the form of a Consent Order on
            February 25, 2019, over eighteen months ago.
          `),
          grade: 'strong',
          sources: [source('State ex rel. Biser v. Chemours, COA21-225', 'https://caselaw.findlaw.com/court/nc-court-of-appeals/2176275.html')]
        })
      ],
      participation: [
        participation({
          date: '05/2018–08/2018',
          name: 'Cape Fear River Watch / SELC citizen suit',
          kind: 'litigation',
          actors: 'Cape Fear River Watch (1,100 members), Southern Environmental Law Center',
          description: paragraph(`
            SELC, on behalf of Cape Fear River Watch, served Chemours a 60-day Notice
            of Intent to Sue under the Clean Water Act and the Toxic Substances
            Control Act on May 7, 2018, and petitioned DEQ for a declaratory ruling.
            A petition for judicial review of DEQ's denial followed on July 13; a
            federal CWA/TSCA suit was filed August 29 (7:18-cv-00159, E.D.N.C.). Both
            actions were resolved through the group's intervention in the Consent
            Order.
          `),
          effect: 'moved',
          sources: [source('SELC timeline', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf')]
        })
      ],
      gaps: [
        paragraph(`
          <strong>No formal evaluation of this mechanism exists.</strong> The National Sea Grant
          Law Center's overview is descriptive and offers no verdict; the Court of
          Appeals decision is doctrinal, about timeliness, not policy. No published
          assessment was identified that evaluates citizen-group party status in a
          consent order as a model for other states.
        `)
      ]
    }),

    link({
      id: 'R4',
      stage: 'participation',
      from: 'A comprehensive draft order, with the citizen group as a party',
      to: 'A final order with downstream protections and citizen enforcement authority',
      claim: paragraph(`
        Public comment on the draft order produced documented, itemized,
        agency-acknowledged changes to its terms.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            Approximately <strong>380 comments</strong> were received between November 2018 and
            January 7, 2019, more than 200 supportive. DEQ's published response
            documents specific changes: new <strong>¶11.1</strong> requiring Chemours to
            characterize its PFAS contribution <em>at downstream public utility raw
            water intakes</em>; new <strong>¶11.2</strong> on river sediment; <strong>¶12(e)</strong>
            modified to increase Old Outfall 002 reduction potentially <strong>three to
            four times</strong>; filtration maintenance set at a 20-year minimum; new
            <strong>¶25.1</strong> affirming DEQ's right to split samples and test
            independently. The added provisions cover downstream utilities and
            communities that were not parties to the original negotiation.
          `),
          quote: paragraph(`
            analyze the Facility's contribution of PFAS to raw water intakes of
            downstream public utilities [...] a minimum of 20 years or until such
            time as Chemours demonstrates that each PFAS in Attachment C is below an
            applicable health advisory, whichever is later
          `),
          grade: 'strong',
          sources: [source('DEQ Response to Public Comment', 'https://www.deq.nc.gov/genx/2019-02-20-final-deq-response-comments-proposed-consent/download')]
        }),
        evidence({
          finding: paragraph(`
            The 2020 Addendum, also subject to a 30-day comment period before entry,
            required a <strong>1.5-mile subsurface barrier wall</strong> with groundwater
            extraction achieving ≥99% PFAS removal, treatment of four contaminated
            seeps, and stipulated penalties of $150,000 plus $20,000 per week for
            barrier-wall delay.
          `),
          quote: paragraph(`
            construction of a subsurface barrier wall approximately 1.5 miles long and
            groundwater extraction system that will remove at least 99% of PFAS to be
            completed by March 2023
          `),
          grade: 'strong',
          sources: [
            source('NC DEQ', 'https://www.deq.nc.gov/news/press-releases/2020/08/13/deq-orders-additional-pfas-reductions-chemours'),
            source('NC Health News', 'https://www.northcarolinahealthnews.org/2020/09/09/nc-getting-tougher-on-pfas-polluters-but-researchers-say-more-action-is-needed/')
          ]
        })
      ],
      participation: [
        participation({
          date: '11/2018–01/2019',
          name: 'Consent Order public comment period',
          kind: 'consultative',
          actors: '~380 commenters, NC DEQ, SELC and Cape Fear River Watch (public information session, Dec 12, 2018)',
          description: paragraph(`
            SELC and Cape Fear River Watch held a public information session on the
            proposed Consent Order in Wilmington on December 12, 2018, before the
            comment deadline, explaining the draft and answering community questions:
            intermediary translation work preceding a comment period that produced
            documented changes.
          `),
          effect: 'moved',
          sources: [
            source('DEQ Consent Order page', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order'),
            source('SELC timeline', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf')
          ]
        })
      ],
      gaps: [
        paragraph(`
          No comment count for the 2020 Addendum was published. No study was
          identified examining what made this comment period effective when most are
          not; candidate factors (a specific draft document, a defined adversary, an
          intermediary doing translation work, a live lawsuit in the background) are
          testable across other consent orders and have not been tested.
        `)
      ]
    }),

    link({
      id: 'R5',
      stage: 'participation',
      from: 'A final order with downstream protections and citizen enforcement authority',
      to: 'Sustained community research capacity and returned individual results',
      claim: paragraph(`
        Beyond the order itself, the episode produced durable research
        infrastructure: a statewide monitoring network and a longitudinal exposure
        study that returns results to the people it studies.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            The NC General Assembly allocated <strong>$5,013,000</strong> to the NC Policy
            Collaboratory, which created the NC PFAS Testing (PFAST) Network:
            faculty from six universities overseeing statewide sampling that
            collected raw water from <strong>190 surface water intakes, 158 municipal
            groundwater wells</strong> and 57 county or regional water supplies.
          `),
          quote: paragraph(`
            Untreated (raw) water samples from 190 surface water intakes, 158
            municipal groundwater wells, and 57 county or regional water supplies were
            collected
          `),
          grade: 'strong',
          sources: [
            source('NC Policy Collaboratory', 'https://collaboratory.unc.edu/news/2018/08/01/n-c-policy-collaboratory-launches-new-statewide-study-on-genx-with-5-million-state-appropriation/'),
            source('PFAST Network report to NCGA', 'https://webservices.ncleg.gov/ViewDocSiteFile/18237')
          ]
        }),
        evidence({
          finding: paragraph(`
            The GenX Exposure Study grew from 344 New Hanover County participants
            (enrolled from November 2017) to <strong>1,020</strong> across Wilmington,
            Fayetteville and Pittsboro (November 2020–November 2021), designed to
            follow participants for at least five and up to 20 years.
          `),
          quote: paragraph(`
            The plan for this study is to follow people for at least five years and up
            to 20 years to learn more about how PFAS chemicals impact human health.
          `),
          grade: 'strong',
          sources: [
            source('GenX Exposure Study timeline', 'https://genxstudy.ncsu.edu/study-timeline/'),
            source('NIEHS Environmental Factor', 'https://www.niehs.nih.gov/news/factor/2023/1/feature/3-feature-genx-exposure-study')
          ]
        })
      ],
      participation: [
        participation({
          date: '11/2017–present',
          name: 'GenX Exposure Study return-of-results',
          kind: 'monitoring',
          actors: 'Jane Hoppin (NC State), ECU, Cape Fear River Watch, New Hanover County Health Dept, 1,020+ participants',
          description: paragraph(`
            At launch the researchers committed that "All results from the study will
            be shared with both the community as a whole and each individual
            participant." In October 2022 participants received "an 11-page letter
            including an overview of the overall study findings, individual blood
            PFAS results, and NASEM recommendations," and an October 2022 community
            meeting included an expert panel answering questions from participants
            and residents.
          `),
          effect: 'unmeasured',
          sources: [
            source('NC State launch', 'https://news.ncsu.edu/2017/11/genx-study/'),
            source('NIEHS Environmental Factor', 'https://www.niehs.nih.gov/news/factor/2023/1/feature/3-feature-genx-exposure-study')
          ]
        }),
        participation({
          date: '11/2017',
          name: 'Clean Cape Fear formation',
          kind: 'service',
          actors: 'Emily Donovan, community organizers',
          description: paragraph(`
            A grassroots community advocacy organization that has since functioned as
            a standing community voice in state rulemaking. At the 2026 EMC
            proceedings on PFAS minimization rules, co-founder Emily Donovan objected
            that the approach is voluntary: "There's no due date that says, 'you've
            got to stop these releases by this point in time.'"
          `),
          effect: 'partial',
          sources: [
            source('Clean Cape Fear', 'https://www.cleancapefear.org/'),
            source('WUNC, May 2026', 'https://www.wunc.org/environment/2026-05-14/pfas-dioxane-water-pollution-monitoring-minimization-emc-deq')
          ]
        }),
        participation({
          date: '2000–present',
          name: 'Louisiana Bucket Brigade fenceline air monitoring (comparator, different case)',
          kind: 'monitoring',
          actors: 'Anne Rolfes, Louisiana Bucket Brigade, St. Bernard Citizens for Environmental Quality, fenceline residents',
          description: paragraph(`
            <strong>A comparator from a different case (Louisiana refinery air
            monitoring), not a Cape Fear event</strong>, included as a documented model
            of the organized citizen-led sampling absent from this case. Anne Rolfes
            founded the Louisiana Bucket Brigade in 2000; the group trains fenceline
            residents to take air samples with the EPA-approved "bucket," described by
            the organization as "a $75 version of a much more expensive device, a
            $2,000 summa canister." The design dates to 1995, when attorney Edward
            Masry, depicted in the film "Erin Brockovich," "got sick from fumes from a
            petroleum refinery he was suing on behalf of residents of Contra Costa
            County, Calif." The Chalmette Air Monitoring Project, run by the St.
            Bernard Citizens for Environmental Quality and the Louisiana Bucket
            Brigade across the street from ExxonMobil's Chalmette refinery in St.
            Bernard Parish, publishes public air monitoring data updated "every single
            minute." Yale Climate Connections reporting (2025) credits independent
            bucket sampling with documenting emissions above officially estimated
            levels and contributing to new EPA fenceline air-quality monitoring
            standards.
          `),
          effect: 'partial',
          sources: [
            source('Louisiana Bucket Brigade', 'https://labucketbrigade.org/pollution-tools-resources/the-bucket/'),
            source('Yale Climate Connections', 'https://yaleclimateconnections.org/2025/12/the-epa-let-companies-estimate-their-own-pollution-levels-we-discovered-real-emissions-are-far-worse/'),
            source('Chalmette Air Monitoring Project', 'https://airmonitorchalmette.com/')
          ]
        })
      ],
      gaps: [
        paragraph(`
          Return-of-results is a designed, recurring, eight-year practice here and
          <strong>no evaluation of its effects was identified</strong>: on participant trust,
          on willingness to stay enrolled, on community mobilization, or on policy.
          Given how rare a sustained return-of-results program is, this is a
          high-value and unusually tractable study.
        `),
        paragraph(`
          No standing Chemours community advisory board and no organized citizen-led
          water sampling program were identified in this case. The documented
          participation record is adversarial and legal, not deliberative. The
          Louisiana Bucket Brigade instance above is a comparator from a different
          case, not evidence that such a program operated on the Cape Fear.
        `)
      ]
    }),

    link({
      id: 'R6',
      stage: 'structural',
      after: 'R4',
      from: 'A final order with downstream protections and citizen enforcement authority',
      to: 'A generalizable standard: the link does not hold',
      claim: paragraph(`
        The link does not hold. Nine years of the most extensive participation
        record in the project produced remediation at one plant and no
        enforceable state standard for the contaminant.
      `),
      strength: 'strong',
      evidence: [
        evidence({
          finding: paragraph(`
            CFPUA's granular activated carbon system came online in September 2022,
            with October 2022 testing finding no PFAS: built for <strong>$43 million</strong>,
            with costs since grown to <strong>$82.8 million</strong> for building and maintaining
            the eight filters, funded through an 8% rate increase on
            <strong>customers</strong>. CFPUA sued Chemours and DuPont in 2017 to recover the
            costs. Brunswick County separately spent $158.7 million on a reverse
            osmosis plant.
          `),
          quote: paragraph(`
            the costs of the Sweeney Plant filtration improvements are currently
            falling on taxpayers [...] No PFAS whatsoever detected
          `),
          grade: 'moderate',
          sources: [
            source('WUNC', 'https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill'),
            source('Port City Daily', 'https://portcitydaily.com/local-news/2022/10/11/cfpua-reports-pfas-free-water-with-new-filtration-system-online/')
          ]
        }),
        evidence({
          finding: paragraph(`
            North Carolina's Environmental Management Commission adopted groundwater
            standards for PFOA, PFOS and GenX in September 2025, <strong>narrowed from the
            eight compounds DEQ proposed</strong>. Surface water standards were set aside in
            favor of a "minimization plan" approach; the 2026 monitoring rules cover
            three compounds, require one year of monitoring followed by
            facility-authored reduction plans, and carry <strong>no compliance
            deadline</strong>.
          `),
          quote: paragraph(`
            certain wastewater treatment plants and industrial facilities will monitor
            their PFAS and 1,4 dioxane discharges for one year. Then, based on those
            results, certain plants and facilities will come up with their own
            reduction plan.
          `),
          grade: 'strong',
          sources: [
            source('WUNC, May 2026', 'https://www.wunc.org/environment/2026-05-14/pfas-dioxane-water-pollution-monitoring-minimization-emc-deq'),
            source('WUNC, September 2025', 'https://www.wunc.org/environment/2025-09-11/emc-nc-pfas-deq-genx-pfoa-pfos-wetlands-e-coli')
          ]
        }),
        evidence({
          finding: paragraph(`
            EPA's April 2024 PFAS drinking water rule set an MCL of <strong>10 ppt for
            HFPO-DA (GenX)</strong>. On <strong>May 20, 2026 EPA proposed rescinding it</strong>, along
            with the PFHxS, PFNA and Hazard Index limits, on the procedural ground
            that the rule was proposed alongside a preliminary rather than final
            regulatory determination. Comments were due July 20, 2026; the proposal
            was not final as of August 2026.
          `),
          quote: paragraph(`
            the soonest the EPA may publish a proposed regulation is with the final
            regulatory determination, not with the preliminary regulatory
            determination
          `),
          grade: 'strong',
          sources: [source('Federal Register 2026-10085', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
        }),
        evidence({
          finding: paragraph(`
            NC House Bill 569 ("PFAS Pollution and Polluter Liability"), which would
            let DEQ order a PFAS manufacturer under consent order to reimburse
            utilities, passed the House <strong>104-3</strong> on May 7, 2025; a floor
            amendment limited eligibility to utilities that spent at least $50
            million. The bill was re-referred in the Senate on June 5, 2025 and has
            not moved since.
          `),
          quote: paragraph(`
            Re-ref to Agriculture, Energy, and Environment. If fav, re-ref to
            Judiciary. If fav, re-ref to Rules and Operations of the Senate.
          `),
          grade: 'strong',
          sources: [
            source('NCGA HB 569', 'https://www.ncleg.gov/BillLookup/2025/H569'),
            source('WUNC', 'https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill')
          ]
        })
      ],
      participation: [],
      gaps: [
        paragraph(`
          On this record, participation instruments in this domain are
          <strong>facility-scoped by construction</strong>. A citizen suit produced relief at
          one plant; a comment period improved one order. Neither reached the rule
          that would protect the next community, because rulemaking is a different
          forum with different participants operating on a different clock. Whether
          any participation instrument has ever converted a facility-level win into
          a generalizable standard in this domain has not been established.
        `)
      ]
    })

  ]
});

export default [detection, response];
