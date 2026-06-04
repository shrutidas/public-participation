import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 1',
  title: 'Youth Mental Health & Addiction on Meta Platforms',
  overview:   paragraph(`
    This case argues that governance failed because critical knowledge about harm was
    controlled by the companies creating it. Platforms designed powerful recommender
    systems, but the data needed to assess their risks remained largely inaccessible
    to the public, researchers, and regulators. Democratic oversight lagged, forced to
    rely on incomplete external evidence while key scientific insights stayed inside
    firms. The consequence was a reactive system. Harms surfaced through public
    fallout, with parents, youth, and civil society raising concerns. This case
    therefore focuses on how limited access to information shaped both the failure of
    oversight and the adversarial nature of the public response.
  `),
  entries: [
    entry({
      date: '02/2017',
      category: 'green',
      actors: 'Academic Researchers',
      text:       paragraph(`
        External academic literature on social media and adolescent mental health
        grows substantially; researchers in the UK and the US publish contested but
        influential findings. Evidence is correlational. The direction of causation,
        whether social media causes depression or depressed teens use more social
        media, remains unresolved.
      `),
      sources: [source('PubMed', 'https://pubmed.ncbi.nlm.nih.gov/30944443')],
    }),

    entry({
      date: '01/2018',
      category: 'orange',
      actors: 'Facebook/Meta; Adam Mosseri; Mark Zuckerberg',
      text:       paragraph(`
        Facebook changes News Feed ranking algorithm to prioritize posts likely to
        spark meaningful social interactions, explicitly reducing distribution of
        public page content, publisher content, and passive viewing. The ranking
        change was justified in relational and wellbeing language, but internal
        trade-offs were known. The long-term behavioral effects on teens were not
        publicly disclosed.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2018/01/news-feed-fyi-bringing-people-closer-together')],
    }),

    entry({
      date: '04/2018',
      category: 'blue',
      actors: 'Ponemon Institute; ~3,000 Facebook users',
      text:       paragraph(`
        Trust in Facebook collapses 66% after Cambridge Analytica. Only 28% of
        Facebook users believe the company is committed to protecting personal
        information, down from 79% just one year earlier in 2017. Meta conducts
        harmful practices, gets caught, apologizes, and trust partially recovers. The
        teen harm issue arrives in a context of already-depleted credibility.
      `),
      sources: [source('Business Insider', 'https://www.businessinsider.com/facebook-trust-collapses-after-cambridge-analytica-data-scandal-2018-4')],
    }),

    entry({
      date: '09/2020',
      category: 'green',
      actors: 'CDC; Academic Researchers; Clinical Professionals',
      text:       paragraph(`
        Adolescent mental health trends worsen measurably and publicly. The CDC, youth
        health researchers, and school counselors publish rising rates of teen
        depression, anxiety, self-harm, and suicidality. Emergency room visits for
        self-harm among girls ages 10 to 14 have more than doubled since 2009,
        according to CDC data. Independent researchers cannot identify causes because
        they lack access to platform data.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9176070/')],
    }),

    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Wall Street Journal; Meta Researchers and Leadership',
      text:       paragraph(`
        WSJ publishes Facebook Files, Part 2: 'We Make Body Image Issues Worse'.
        Internal Meta/Instagram research slide states: 'We make body image issues
        worse for one in three teen girls.' The research documents associations
        between Instagram use and negative body image, anxiety, depression, and social
        comparison among teen girls.
      `),
      sources: [
        source('Meta Newsroom', 'https://about.fb.com/news/2021/09/research-teen-well-being-and-instagram'),
        source('WSJ', 'https://www.wsj.com/tech/personal-tech/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739'),
      ],
    }),

    entry({
      date: '09/2021',
      category: 'blue',
      actors: 'Fox News \'Fox & Friends First\'; California psychotherapist mother and daughter',
      text:       paragraph(`
        Fox News parent segments: cross-partisan parental alarm. Mother Danielle
        Bloom: 'Why do we care about tweens? They are a valuable but untapped
        audience' — citing internal Meta documents. 'These apps want them even more
        addicted and not be kids.' Bloom's 11-year-old daughter Ruby: 'You can
        accidentally click on something and see something really bad and then it could
        scar you for life.'
      `),
      sources: [source('Fox News', 'https://www.foxnews.com/media/facebook-targeting-children-parents-trust-social-media')],
    }),

    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Meta/Instagram; Adam Mosseri',
      text:       paragraph(`
        Meta paused development of Instagram Kids, while continuing parental
        supervision tools for teens. This is the clearest public product-decision
        reversal or delay after criticism. Meta framed it as time to work with
        parents, experts, policymakers, and regulators.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2021/09/pausing-instagram-kids-building-parental-supervision-tools')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'Senate Commerce Subcommittee; Facebook Safety Executive',
      text:       paragraph(`
        Senate held hearings on Facebook, Instagram, and mental health harms with
        Antigone Davis, the Head of Global Safety at Facebook. Congress explicitly made Facebook's internal research, its
        actions to address risks, and policy safeguards the object of public inquiry.
      `),
      sources: [source('Senate Commerce', 'https://www.commerce.senate.gov/meetings/subcommittee-protecting-kids-online-facebook-instagram-and-mental-health-harms/')],
    }),

    entry({
      date: '10/2021',
      category: 'orange',
      actors: 'Frances Haugen; Senate Subcommittee',
      text:       paragraph(`
        Frances Haugen testified that Facebook products harmed children, amplified
        harmful content, and that only Facebook could inspect the system. Haugen's
        role was to transform private internal knowledge into a case for transparency,
        independent research access, and algorithmic accountability.
      `),
      sources: [source('Written Testimony', 'https://www.commerce.senate.gov/wp-content/uploads/media/doc/Frances%20Haugen%20Written%20Testimony.pdf')],
    }),

    entry({
      date: '10/2021',
      category: 'blue',
      actors: 'New York Times',
      text:       paragraph(`
        'Teenage Girls Say Instagram's Mental Health Impacts Are No Surprise': Iris
        Tsouris, freshman at Yale, says the findings 'didn't surprise me at all.'
        Multiple teens describe friends who deleted the app because it 'was not adding
        value to their lives.' Teens describe Instagram as 'the most challenging
        platform due to the highly curated nature of users' profiles.' Peer comparison
        and superficiality described as systemic.
      `),
      sources: [source('New York Times', 'https://www.nytimes.com/live/2021/10/05/technology/facebook-whistleblower-frances-haugen')],
    }),

    entry({
      date: '10/2021',
      category: 'orange',
      actors: 'Senate Commerce Leadership',
      text:       paragraph(`
        Senator Blumenthal requested Zuckerberg or Mosseri testimony and alleged Meta
        concealed information and downplayed internal research. The letter highlights
        dispute about whether public institutions had been misled and denied
        documents.
      `),
      sources: [source('Blumenthal Letter', 'https://www.blumenthal.senate.gov/imo/media/doc/2021.10.20%20-%20Facebook%20and%20Instagram%20-%20Consumer%20Protection%20Invitation.pdf')],
    }),

    entry({
      date: '11/2021',
      category: 'blue',
      actors: 'CivicScience; ~2,700 US adults surveyed',
      text:       paragraph(`
        CivicScience survey finds 73% of Americans do not trust Meta; Facebook
        favorability at all-time recorded low. 13% of respondents trust Meta to keep
        their data safe. 73% do not trust Meta. Facebook's favorability rating hits
        its lowest ever recorded level — the company ranks last among major consumer
        tech companies. 33% of people expect Facebook to become 'much less popular' in
        the next 12 months.
      `),
      sources: [source('CivicScience', 'https://civicscience.com/trust-issues-sour-outlook-for-meta-facebook-popularity-falls/')],
    }),

    entry({
      date: '12/2021',
      category: 'blue',
      actors: 'Washington Post / George Mason University Schar School; nationally representative sample',
      text:       paragraph(`
        Washington Post poll found 72% of internet users distrust Facebook with
        personal data; 64% want stronger tech regulation. Targeted advertising seen as
        'intrusive and bothersome' by a large majority.
      `),
      sources: [source('Washington Post', 'https://www.washingtonpost.com/technology/2021/12/22/tech-trust-survey/')],
    }),

    entry({
      date: '05/2023',
      category: 'green',
      actors: 'FTC',
      text:       paragraph(`
        FTC proposed a blanket prohibition on Meta monetizing youth data and a pause
        on new products and features absent independent privacy compliance
        confirmation. A serious governance attempt focused on youth data, privacy
        compliance, and product-launch constraints.
      `),
      sources: [source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-proposes-blanket-prohibition-preventing-facebook-monetizing-youth-data')],
    }),

    entry({
      date: '05/2023',
      category: 'red',
      actors: 'US Surgeon General Vivek Murthy; HHS',
      text:       paragraph(`
        The US Surgeon General ran a metatstudy concluding social media carries benefits
        and risks, but that evidence is insufficient to deem platforms safe for youth. They
        stress missing independent access to platform data and recommending
        precaution in the face of uncertainty.
      `),
      sources: [source('HHS', 'https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html')],
    }),

    entry({
      date: '06/2023',
      category: 'purple',
      actors: 'Meta; Stanford Deliberative Democracy Lab; Behavioral Insights Team',
      text:       paragraph(`
        Meta and the Stanford Deliberative Democracy Lab launched the first Meta
        Community Forum, a structured global Deliberative Poll on Metaverse bullying
        and harassment. 6,300+ people from 32 countries in 23 languages, described as
        the largest deliberative exercise ever conducted. After deliberation,
        participants shifted toward wanting stronger platform accountability and
        clearer content norms. Meta committed to incorporating results into Metaverse
        governance.
      `),
      sources: [source('Stanford CDDRL', 'https://cddrl.fsi.stanford.edu/news/results-first-global-deliberative-pollr-announced-stanfords-deliberative-democracy-lab')],
    }),

    entry({
      date: '10/2023',
      category: 'orange',
      actors: 'State Attorney Generals',
      text:       paragraph(`
        Attorneys general from 42 states sued Meta in federal and state courts on the same day, 
        alleging the company deliberately engineered Instagram and Facebook to addict children, 
        knew it was causing harm, and deceived parents about it. The complaints named specific design features, including
        infinite scroll, algorithmic rabbit holes, near-constant push notifications, and social validation loops, as intentional mechanisms 
        targeting adolescent brain development to maximize time on platform. 
        As of 2026, no settlement has been reached, though the first jury trial in March 2026 resulted in a $6 million verdict against Meta, 
        and the Supreme Court refused in May 2026 to block the state cases from proceeding .
      `),
      sources: [source('NY AG', 'https://ag.ny.gov/press-release/2023/attorney-general-james-and-multistate-coalition-sue-meta-harming-youth')],
    }),

    entry({
      date: '10/2023',
      category: 'purple',
      actors: 'Meta; Stanford DDL; Behavioral Insights Team',
      text:       paragraph(`
        Second structured deliberative process with Stanford DDL and BIT.
        Approximately 1,500 people the USA, Germany, Spain, and Brazil. Two online
        sessions with AI-moderated small-group deliberation. Strong cross-national
        preference for transparency and human override options. Concern about AI
        chatbots providing emotional support to children without safeguards. Results
        publicly released.
      `),
      sources: [source('Stanford Deliberation', 'https://deliberation.stanford.edu/meta-community-forum-generative-ai-results')],
    }),

    entry({
      date: '10/2023',
      category: 'blue',
      actors: 'Pew Research Center; 8,842 US adults, 1,453 US teens surveyed',
      text:       paragraph(`
        Pew Research finds 81% support requiring parental consent for minors to create
        social media accounts. 71% favor age verification. 69% favor time limits for
        minors. Support is consistent across party lines. Young adults (18–29) show
        67% support. Teens show 46% support parental consent; 56% support age
        verification; split on time limits (34% support, 36% oppose).
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/short-reads/2023/10/31/81-of-us-adults-versus-46-of-teens-favor-parental-consent-for-minors-to-use-social-media/')],
    }),

    entry({
      date: '12/2023',
      category: 'red',
      actors: 'FTC',
      text:       paragraph(`
        The FTC opened a formal 60-day public comment window
        that drew approximately 300 formal comments for amendments to Children's Online Privacy Protection Rule (COPPA).
        The Commission voted to finalize COPPA with three concrete new requirements: a separate, unbundled opt-in consent specifically for targeted advertising 
        (meaning a parent could consent to an app while refusing ad monetization of their child's data), 
        a mandatory written data retention policy prohibiting indefinite storage of children's personal information, 
        and expanded definitions of "personal information" to include biometric identifiers. 
      `),
      sources: [source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2023/12/ftc-proposes-strengthening-childrens-privacy-rule-further-limit-companies-ability-monetize-childrens')],
    }),

    entry({
      date: '07/2024',
      category: 'red',
      actors: 'Senate',
      text:       paragraph(`
        Senate voted 91–3 to pass the Kids Online Safety Act (KOSA).  It was the first major federal tech regulation to advance in the Senate since 1998, when the original Children's Online Privacy Protection Rule (COPPA) passed.
      `),
      sources: [source('Reuters', 'https://www.reuters.com/world/us/us-senate-set-pass-major-online-child-safety-reforms-2024-07-30/')],
    }),

    entry({
      date: '10/2024',
      category: 'blue',
      actors: 'Pew Research Center; 1,391 US Teens and Parents',
      text:       paragraph(`
        Pew Research found that 48% of teens say social media has a mostly negative
        effect on people their age, up from 32% in 2022. Only 11% view it as mostly
        positive for peers. 50% of parents believe their child's mental health
        suffered in the past 12 months because of social media use. The number of
        Americans saying social media has a positive influence on children's mental
        health fell to 35%, down from 43% in 2022.
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/wp-content/uploads/sites/20/2025/04/PI_2025.04.22_teens-social-media-mental-health_REPORT.pdf')],
    }),

    entry({
      date: '09/2024',
      category: 'orange',
      actors: 'Meta/Instagram',
      text:       paragraph(`
        Meta launched Instagram Teen Accounts with private defaults, messaging
        restrictions, sensitive-content limits, time reminders, sleep mode, and
        parental supervision features.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2024/09/instagram-teen-accounts')],
    }),

    entry({
      date: '01/2025',
      category: 'red',
      actors: 'FTC',
      text:       paragraph(`
        FTC finalized Children's Online Privacy Protection Act amendments strengthening child-data protections. The final
        rule strengthened targeted-advertising consent, data retention, data security,
        and transparency requirements, but did not adopt the proposed
        push-notification limits.
      `),
      sources: [source('FTC Final Rule', 'https://www.ftc.gov/system/files/ftc_gov/pdf/coppa_sbp_1.16_0.pdf')],
    }),

    entry({
      date: '04/2025',
      category: 'orange',
      actors: 'Meta',
      text:       paragraph(`
        Meta expanded Teen Account protections across Instagram, Facebook, and
        Messenger. Platform self-regulation shifting from Instagram-only defaults to
        cross-platform youth safety settings.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2025/04/introducing-new-built-in-restrictions-instagram-teen-accounts-expanding-facebook-messenger')],
    }),

    entry({
      date: '03/2026',
      category: 'orange',
      actors: 'Jury; Meta; Google; Plaintiff KGM',
      text:       paragraph(`
        A Los Angeles jury found Meta and Google negligent in a social-media harms
        trial and awarded $6 million, treating platform design features as defective-product issues. This validates the frame and may affect thousands of
        pending cases.
      `),
      sources: [source('NPR', 'https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict')],
    }),
  ]
});
