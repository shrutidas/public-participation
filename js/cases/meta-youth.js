import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 1',
  title: 'Youth Mental Health & Addiction on Meta Platforms',
  overview:   paragraph(`
    This case argues that <strong>governance failed because critical knowledge about harm was
    controlled by the companies creating it</strong>. Platforms designed powerful recommender
    systems, but the data needed to assess their risks remained largely inaccessible
    to the public, researchers, and regulators. Democratic oversight lagged, forced to
    rely on incomplete external evidence while key scientific insights stayed inside
    firms. The consequence was a <strong>reactive system</strong>. Harms surfaced through public
    fallout, with parents, youth, and civil society raising concerns. This case
    therefore focuses on how <strong>limited access to information shaped both the failure of
    oversight and the adversarial nature of the public response</strong>.
  `),
  entries: [

    entry({
      date: '05/2007',
      category: 'orange',
      actors: 'Comscore',
      text:       paragraph(`
        When Facebook dropped its university-email requirement, teen usage exploded. 
        By May 2007, the 12–17 age group had grown 149% year-over-year, from 1.6 million to 4.1 million US teen visitors in a single year.
        Pages viewed grew 143% and average time on site rose to 186 minutes per visitor per month. 
      `),
      sources: [source('Comscore', 'https://www.comscore.com/Insights/Press-Releases/2007/07/Teenagers-and-Adults-Flood-Facebook')],
    }),

    entry({
      date: '2010-2011',
      category: 'green',
      actors: 'Academic Researchers',
      text:       paragraph(`
        Instagram launched in 2010 and Snapchat in 2011. Both transformed social media into a more visual, continuous, and <strong>comparison-driven experience</strong>. 
        During the same period, <strong>youth mental health indicators began to decline</strong>. Australian HILDA Survey data shows that mental health among young women ages 15–24 fell from 73% in 2011 to 62% in 2022. 
        A study of 11,876 children found that increases in social media use during early adolescence predicted higher depressive symptoms one year later, "finding that youth mental health was stable 
        but then began falling sharply after 2012, which coincides with the time when photo and video-sharing social media platforms became widely popular."
      `),
      sources: [source('PudMed', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10294999/')],
    }),

    entry({
      date: '02/2017',
      category: 'green',
      actors: 'Academic Researchers',
      text:       paragraph(`
        External academic literature on social media and adolescent mental health
        grows substantially; researchers in the UK and the US publish contested but
        influential findings. <strong>Evidence is correlational</strong>. The direction of causation,
        whether social media causes depression or depressed teens use more social
        media, <strong>remains unresolved</strong>.
      `),
      sources: [source('PubMed', 'https://pubmed.ncbi.nlm.nih.gov/30944443')],
    }),

    entry({
      date: '01/2018',
      category: 'orange',
      actors: 'Facebook/Meta; Adam Mosseri; Mark Zuckerberg',
      text:       paragraph(`
        Facebook changes News Feed ranking algorithm to <strong>prioritize posts likely to
        spark meaningful social interactions</strong>, explicitly reducing distribution of
        public page content, publisher content, and passive viewing. The ranking
        change was justified in relational and wellbeing language, but internal
        trade-offs were known. <strong>The long-term behavioral effects on teens were not
        publicly disclosed</strong>.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2018/01/news-feed-fyi-bringing-people-closer-together')],
    }),

    entry({
      date: '04/2018',
      category: 'blue',
      actors: 'Ponemon Institute; ~3,000 Facebook users',
      text:       paragraph(`
        <strong>Trust in Facebook collapses</strong> 66% after Cambridge Analytica. Only 28% of
        Facebook users believe the company is committed to protecting personal
        information, down from 79% just one year earlier in 2017. Meta conducts
        harmful practices, gets caught, apologizes, and trust partially recovers. The
        <strong>teen harm issue arrives in a context of already-depleted credibility</strong>.
      `),
      sources: [source('Business Insider', 'https://www.businessinsider.com/facebook-trust-collapses-after-cambridge-analytica-data-scandal-2018-4')],
    }),
    

    entry({
      date: '09/2020',
      category: 'green',
      actors: 'CDC; Academic Researchers; Clinical Professionals',
      text:       paragraph(`
        <strong>Adolescent mental health trends worsen measurably and publicly</strong>. The CDC, youth
        health researchers, and school counselors publish rising rates of teen
        depression, anxiety, self-harm, and suicidality. Emergency room visits for
        self-harm among girls ages 10 to 14 have more than doubled since 2009,
        according to CDC data. <strong>Independent researchers cannot identify causes because
        they lack access to platform data</strong>.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9176070/')],
    }),

    entry({
      date: '03/2021',
      category: 'orange',
      actors: 'Meta; Adam Mosseri',
      text:       paragraph(`
        Facebook confirms it is developing <strong>“Instagram Kids”</strong> for under‑13 tweens, 
        describing it as a <strong>“parent‑controlled experience”</strong> in a statement and blog posts after BuzzFeed first reports the project.
      `),
      sources: [source('Business Insider', 'https://www.businessinsider.com/facebook-building-instagram-app-for-kids-under-13-report-2021-3/')],
    }),

    entry({
      date: '03/2021',
      category: 'red',
      actors: 'Congress',
      text:       paragraph(`
        Senate proposes the <strong>CAMRA Act (Children and Media Research Advancement Act)</strong>. Bipartisan bill led by Senators Bennet and Markey 
        to give NIH tens of millions of dollars to study how social media, apps, games, and other digital media affect children’s cognitive, physical, 
        and socio‑emotional development. Introduced 2018, reintroduced 2019 and 2021, but <strong>not actually passed until it was folded into the 2023 omnibus</strong>.

      `),
      sources: [source('Senate', 'https://www.markey.senate.gov/news/press-releases/senators-markey-sasse-blunt-schatz-collins-bennet-and-reps-raskin-gonzalez-trahan-reintroduce-bipartisan-bicameral-legislation-to-study-impact-of-technology-and-media-on-children')],
    }),

    entry({
      date: '05/2021',
      category: 'blue',
      actors: 'State AGs',
      text:       paragraph(`
        A bipartisan group of 44 state attorney generals and 90+ advocacy groups publicly <strong>urge Zuckerberg to abandon Instagram Kids</strong>, 
        warning it would <strong>harm children’s mental health and privacy</strong>
      `),
      sources: [source('NAAG', 'https://www.naag.org/press-releases/attorneys-general-urge-facebook-to-abandon-launch-of-instagram-kids/')],
    }),


    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Wall Street Journal; Meta Researchers; Leadership',
      text:       paragraph(`
        WSJ publishes "Facebook Files" revealing internal Meta/Instagram research slides. One slide states, <strong>'We make 
        body image issues worse for one in three teen girls.'</strong> The research documents associations
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
        National media coverage highlighted broad parental concerns about social media’s impact on children and young teens. 
        Parents expressed alarm that platforms view <strong>younger users as a valuable growth market</strong> and design products in ways that 
        encourage <strong>prolonged engagement</strong>. They also worried that children can easily encounter inappropriate or harmful content online, 
        with potentially lasting effects on their well-being and development.
      `),
      sources: [source('Fox News', 'https://www.foxnews.com/media/facebook-targeting-children-parents-trust-social-media')],
    }),

    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Meta, Instagram; Adam Mosseri',
      text:       paragraph(`
        Meta <strong>paused development of Instagram Kids</strong>, while continuing parental
        supervision tools for teens. This is the <strong>clearest public product-decision
        reversal or delay after criticism</strong>. Meta framed it as time to work with
        parents, experts, policymakers, and regulators.
      `),
      sources: [
        source('Meta Newsroom', 'https://about.fb.com/news/2021/09/pausing-instagram-kids-building-parental-supervision-tools'),
        source('BBC', 'https://www.bbc.com/news/technology-58707753'),
      ],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'Senate Commerce Subcommittee; Facebook Safety Executive',
      text:       paragraph(`
        Senate held hearings on Facebook, Instagram, and mental health harms with
        Antigone Davis, the Head of Global Safety at Facebook. Congress explicitly made <strong>Facebook's internal research, its
        actions to address risks, and policy safeguards the object of public inquiry</strong>.
      `),
      sources: [source('Senate Commerce', 'https://www.commerce.senate.gov/meetings/subcommittee-protecting-kids-online-facebook-instagram-and-mental-health-harms/')],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'Senate Commerce Subcommittee',
      text:       paragraph(`
        <strong>KIDS Act (Kids Internet Design and Safety Act)</strong> was introduced by Senators Markey and Blumenthal. The bill was meant to ban manipulative design features for
        minors (autoplay, endless scroll, streaks, “like” counts, push‑notification nags) and to extend protections against targeted ads up to age 15 on platforms 
        “reasonably likely” to be used by kids. It was introduced in 2020 and reintroduced in September 2021 after the Facebook Files, but <strong>never advanced out of 
        committee and never got a floor vote</strong> in either chamber during that Congress .
      `),
      sources: [source('Senate Commerce', 'https://www.commerce.senate.gov/meetings/subcommittee-protecting-kids-online-facebook-instagram-and-mental-health-harms/')],
    }),

    entry({
      date: '10/2021',
      category: 'orange',
      actors: 'Frances Haugen; Senate Subcommittee',
      text:       paragraph(`
        Frances Haugen reveals herself as the whistleblower on 60 Minutes. Haugen then testifies in front of Congress that <strong>Facebook's own internal research showed its products could harm children</strong> and
        amplify harmful and divisive content. She argued that the company had long been aware of these risks and possessed the 
        technical ability to make Facebook and Instagram safer, but <strong>repeatedly chose not to implement meaningful reforms because doing 
        so could reduce engagement and profits</strong>. Haugen also argued that meaningful oversight was impossible as long as only Facebook could examine the effects of its systems.
      `),
      sources: [source('Written Testimony', 'https://www.commerce.senate.gov/wp-content/uploads/media/doc/Frances%20Haugen%20Written%20Testimony.pdf')],
    }),

    entry({
      date: '10/2021',
      category: 'blue',
      actors: 'New York Times',
      text:       paragraph(`
        Teenage girls across schools say Instagram’s harms are obvious. In a New York Times piece, 
        students interviewed after the Facebook Files said the findings <strong>“didn't surprise [them] at all.”</strong> 
        Yale freshman Iris Tsouris and several high‑schoolers described friends who had deleted Instagram because 
        it was “not adding value” and called it the <strong>“most challenging platform”</strong> due to the highly curated nature of 
        profiles, which drives constant peer comparison and superficial self‑presentation.
      `),
      sources: [source('New York Times', 'https://www.nytimes.com/live/2021/10/05/technology/facebook-whistleblower-frances-haugen')],
    }),

    entry({
      date: '10/2021',
      category: 'orange',
      actors: 'Senate Commerce Leadership',
      text:       paragraph(`
        Senator Blumenthal requested Zuckerberg or Mosseri testimony and alleged Meta
        <strong>concealed information and downplayed internal research</strong>. The letter highlights
        dispute about <strong>whether public institutions had been misled and denied
        documents</strong>.
      `),
      sources: [source('Blumenthal Letter', 'https://www.blumenthal.senate.gov/imo/media/doc/2021.10.20%20-%20Facebook%20and%20Instagram%20-%20Consumer%20Protection%20Invitation.pdf')],
    }),

    entry({
      date: '11/2021',
      category: 'blue',
      actors: 'CivicScience, US adults surveyed',
      text:       paragraph(`
        CivicScience survey finds 73% of Americans do not trust Meta; <strong>Facebook
        favorability at all-time recorded low</strong>. 13% of respondents trust Meta to keep
        their data safe. 73% do not trust Meta. Facebook's favorability rating hits
        its lowest ever recorded level — <strong>the company ranks last among major consumer
        tech companies</strong>. 33% of people expect Facebook to become 'much less popular' in
        the next 12 months.
      `),
      sources: [source('CivicScience', 'https://civicscience.com/trust-issues-sour-outlook-for-meta-facebook-popularity-falls/')],
    }),

    entry({
      date: '12/2021',
      category: 'blue',
      actors: 'Washington Post, George Mason University; US adults surveyed',
      text:       paragraph(`
        Washington Post poll found 72% of internet users distrust Facebook with
        personal data; 64% want stronger tech regulation. <strong>Targeted advertising seen as
        'intrusive and bothersome'</strong> by a large majority.
      `),
      sources: [source('Washington Post', 'https://www.washingtonpost.com/technology/2021/12/22/tech-trust-survey/')],
    }),

    entry({
      date: '05/2023',
      category: 'green',
      actors: 'FTC',
      text:       paragraph(`
        FTC proposed a <strong>blanket prohibition on Meta monetizing youth data</strong> and a <strong>pause
        on new products and features absent independent privacy compliance
        confirmation</strong>. A serious governance attempt focused on youth data, privacy
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
        and risks, but that <strong>evidence is insufficient to deem platforms safe for youth</strong>. They
        stress <strong>missing independent access to platform data</strong> and recommending
        precaution in the face of uncertainty.
      `),
      sources: [source('HHS', 'https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html')],
    }),

    entry({
      date: '06/2023',
      category: 'purple',
      actors: 'Meta; Stanford Deliberative Democracy Lab; Behavioral Insights Team',
      text:       paragraph(`
        Meta and the Stanford Deliberative Democracy Lab launched the first <strong>Meta
        Community Forum</strong>, a structured global Deliberative Poll on Metaverse bullying
        and harassment. 6,300+ people from 32 countries in 23 languages, described as
        the largest deliberative exercise ever conducted. After deliberation,
        participants <strong>shifted toward wanting stronger platform accountability and
        clearer content norms</strong>. Meta committed to incorporating results into Metaverse
        governance.
      `),
      sources: [source('Stanford CDDRL', 'https://cddrl.fsi.stanford.edu/news/results-first-global-deliberative-pollr-announced-stanfords-deliberative-democracy-lab')],
    }),

    entry({
      date: '10/2023',
      category: 'orange',
      actors: 'State Attorney Generals',
      text:       paragraph(`
        Attorney generals from 42 states sued Meta in federal and state courts on the same day, 
        alleging the company <strong>deliberately engineered Instagram and Facebook to addict children</strong>, 
        <strong>knew it was causing harm, and deceived parents about it</strong>. The complaints named specific design features, including
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
        sessions with AI-moderated small-group deliberation. <strong>Strong cross-national
        preference for transparency and human override options</strong>. Concern about <strong>AI
        chatbots providing emotional support to children without safeguards</strong>. Results
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
        minors. <strong>Support is consistent across party lines</strong>. Young adults (18–29) show
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
        that drew approximately 300 formal comments for amendments to <strong>Children’s Online Privacy Protection Rule (COPPA)</strong>.
        The Commission voted to finalize COPPA with three concrete new requirements: a <strong>separate, unbundled opt-in consent specifically for targeted advertising</strong> 
        (meaning a parent could consent to an app while refusing ad monetization of their child's data), 
        a mandatory written data retention policy prohibiting indefinite storage of children’s personal information, 
        and expanded definitions of "personal information" to include biometric identifiers. 
      `),
      sources: [source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2023/12/ftc-proposes-strengthening-childrens-privacy-rule-further-limit-companies-ability-monetize-childrens')],
    }),

    entry({
      date: '07/2024',
      category: 'red',
      actors: 'Senate',
      text:       paragraph(`
        Senate voted 91–3 to pass the <strong>Kids Online Safety Act (KOSA)</strong>.  It was the <strong>first major federal tech regulation to advance in the Senate since 1998</strong>, when the original Children’s Online Privacy Protection Rule (COPPA) passed.
      `),
      sources: [source('Reuters', 'https://www.reuters.com/world/us/us-senate-set-pass-major-online-child-safety-reforms-2024-07-30/')],
    }),

    entry({
      date: '10/2024',
      category: 'blue',
      actors: 'Pew Research Center; 1,391 US Teens and Parents',
      text:       paragraph(`
        Pew Research found that 48% of teens say <strong>social media has a mostly negative
        effect on people their age</strong>, up from 32% in 2022. Only 11% view it as mostly
        positive for peers. 50% of parents believe their child's <strong>mental health
        suffered in the past 12 months because of social media use</strong>. The number of
        Americans saying social media has a positive influence on children’s mental
        health fell to 35%, down from 43% in 2022.
      `),
      sources: [source('Pew Research', 'https://www.pewresearch.org/wp-content/uploads/sites/20/2025/04/PI_2025.04.22_teens-social-media-mental-health_REPORT.pdf')],
    }),

    entry({
      date: '09/2024',
      category: 'orange',
      actors: 'Meta/Instagram',
      text:       paragraph(`
        Meta launched <strong>Instagram Teen Accounts</strong> with private defaults, messaging
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
        FTC finalized <strong>Children’s Online Privacy Protection Act amendments</strong> strengthening child-data protections. The final
        rule strengthened targeted-advertising consent, data retention, data security,
        and transparency requirements, but <strong>did not adopt the proposed
        push-notification limits</strong>.
      `),
      sources: [source('FTC Final Rule', 'https://www.ftc.gov/system/files/ftc_gov/pdf/coppa_sbp_1.16_0.pdf')],
    }),

    entry({
      date: '04/2025',
      category: 'orange',
      actors: 'Meta',
      text:       paragraph(`
        Meta expanded <strong>Teen Account protections</strong> across Instagram, Facebook, and
        Messenger. Platform self-regulation shifting from Instagram-only defaults to
        <strong>cross-platform youth safety settings</strong>.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2025/04/introducing-new-built-in-restrictions-instagram-teen-accounts-expanding-facebook-messenger')],
    }),

    entry({
      date: '03/2026',
      category: 'orange',
      actors: 'Jury; Meta; Google; Plaintiff KGM',
      text:       paragraph(`
        A Los Angeles jury <strong>found Meta and Google negligent</strong> in a social-media harms
        trial and awarded $6 million, treating <strong>platform design features as defective-product issues</strong>. This validates the frame and may affect thousands of
        pending cases.
      `),
      sources: [source('NPR', 'https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict')],
    }),
  ]
});
