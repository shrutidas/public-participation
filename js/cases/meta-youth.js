import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: 'Case Study 4',
  slug: 'meta-youth',
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
      date: '04/2012',
      category: 'orange',
      actors: 'Facebook, Instagram, Mark Zuckerberg',
      text:       paragraph(`
        <strong>Facebook purchases Instagram</strong> for $1 billion, placing the platform's design,
        algorithm, and user data under its control at the precise moment Instagram was reaching
        mass adolescent adoption.
      `),
      sources: [source('Yahoo Finance', 'https://finance.yahoo.com/blogs/breakout/facebook-snaps-instagram-1-billion-deal-193538763.html')],
    }),

    entry({
      date: '2010s',
      category: 'green',
      actors: 'Academic Researchers',
      text:       paragraph(`
        Researchers now identify the early 2010s as a major inflection point, when visually-driven platforms like
        Instagram and Snapchat took off.
        Analysis of the HILDA survey, which tracks more than 17,000 Australians each year from 2001 onward, found that the mental health scores of young women ages 15–24
        were stable through 2011, then fell from 73% to 62% by 2022.
        Another study of 11,876 children similarly found that <strong>increases in social media use during early adolescence
        predicted greater depressive symptoms one year later</strong>.
      `),
      sources: [
        source('SBS News', 'https://www.sbs.com.au/news/article/strikingly-low/djrl43rwz'),
        source('PubMed', 'https://pubmed.ncbi.nlm.nih.gov/40397441/'),
      ],
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
        media, still remains unresolved.
      `),
      sources: [source('PubMed', 'https://pubmed.ncbi.nlm.nih.gov/30944443')],
    }),

    entry({
      date: '01/2018',
      category: 'orange',
      actors: 'Facebook, Adam Mosseri, Mark Zuckerberg',
      text:       paragraph(`
        Facebook changed its News Feed algorithm to show users more posts that were likely to generate comments and reactions.
        To make room for this content, Facebook <strong>reduced the visibility of posts from news organizations and public pages.</strong>
        The company argued that encouraging more social interaction would improve users’ wellbeing, but it did not publicly disclose 
        what its internal research suggested about the long-term effects of these engagement-driven changes on teenagers.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2018/01/news-feed-fyi-bringing-people-closer-together')],
    }),

    entry({
      date: '04/2018',
      category: 'blue',
      actors: 'Ponemon Institute, ~3,000 Facebook users',
      text:       paragraph(`
        Trust in Facebook collapses 66% after Cambridge Analytica. Only 28% of
        Facebook users believe the company is committed to protecting personal
        information, down from 79% just one year earlier in 2017. Meta conducts
        harmful practices, gets caught, and apologizes.
      `),
      sources: [source('Business Insider', 'https://www.businessinsider.com/facebook-trust-collapses-after-cambridge-analytica-data-scandal-2018-4')],
    }),
    

    entry({
      date: '09/2020',
      category: 'green',
      actors: 'CDC, Academic Researchers, Clinical Professionals',
      text:       paragraph(`
        <strong>Adolescent mental health trends worsen measurably and publicly</strong>. The CDC, youth
        health researchers, and school counselors publish rising rates of teen
        depression, anxiety, self-harm, and suicidality. Emergency room visits for
        self-harm among girls ages 10 to 14 have more than doubled since 2009,
        according to CDC data. Independent researchers cannot identify causes because
        they lack access to platform data.
      `),
      sources: [source('PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9176070/')],
    }),

    entry({
      date: '03/2021',
      category: 'orange',
      actors: 'Meta, Adam Mosseri',
      text:       paragraph(`
        Facebook confirms it is developing Instagram Kids for under‑13 tweens, 
        describing it as a “parent‑controlled experience” in a statement and blog posts after BuzzFeed first reports the project.
      `),
      sources: [source('Business Insider', 'https://www.businessinsider.com/facebook-building-instagram-app-for-kids-under-13-report-2021-3/')],
    }),

    entry({
      date: '03/2021',
      category: 'red',
      actors: 'Congress',
      text:       paragraph(`
        Senate proposes the CAMRA Act (Children and Media Research Advancement Act). Bipartisan bill led by Senators Bennet and Markey 
        to give NIH tens of millions of dollars to <strong>study how social media and other digital media affect childhood</strong> cognitive, physical, 
        and socio‑emotional development. Introduced 2018, reintroduced 2019 and 2021, but not actually passed until it was folded into the 2023 omnibus.

      `),
      sources: [source('Senate', 'https://www.markey.senate.gov/news/press-releases/senators-markey-sasse-blunt-schatz-collins-bennet-and-reps-raskin-gonzalez-trahan-reintroduce-bipartisan-bicameral-legislation-to-study-impact-of-technology-and-media-on-children')],
    }),

    entry({
      date: '05/2021',
      category: 'blue',
      actors: 'State AGs',
      text:       paragraph(`
        A bipartisan group of 44 state attorney generals and 90+ advocacy groups publicly <strong>urge Zuckerberg to abandon Instagram Kids</strong>, 
        warning it would harm children’s mental health and privacy.
      `),
      sources: [source('NAAG', 'https://www.naag.org/press-releases/attorneys-general-urge-facebook-to-abandon-launch-of-instagram-kids/')],
    }),


    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Wall Street Journal, Meta Researchers, Leadership',
      text:       paragraph(`
        WSJ publishes the 'Facebook Files' revealing internal Meta research slides. One slide states, "we make 
        body image issues worse for one in three teen girls." The research documents associations
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
      actors: 'Fox News \'Fox & Friends First\', California psychotherapist mother and daughter',
      text:       paragraph(`
        National media coverage highlighted <strong>broad parental concerns about social media’s impact on children and young teens</strong>. 
        Parents expressed alarm that platforms view younger users as a valuable growth market and design products in ways that 
        encourage prolonged engagement. They also worried that children can easily encounter inappropriate or harmful content online, 
        with potentially lasting effects on their well-being and development.
      `),
      sources: [source('Fox News', 'https://www.foxnews.com/media/facebook-targeting-children-parents-trust-social-media')],
    }),

    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Meta, Instagram, Adam Mosseri',
      text:       paragraph(`
        Meta <strong>paused development of Instagram Kids</strong>, while continuing parental
        supervision tools for teens. This is the <strong>clearest public product-decision
        reversal after public criticism</strong>. Meta framed it as time to work with
        parents, experts, policymakers, and regulators.
      `),
      sources: [
        source('Meta Newsroom', 'https://about.fb.com/news/2021/09/pausing-instagram-kids-building-parental-supervision-tools'),
        source('BBC', 'https://www.bbc.com/news/technology-58707753'),
      ],
    }),

    entry({
      date: '09/2021',
      category: 'orange',
      actors: 'Senate Commerce Subcommittee, Antigone Davis',
      text:       paragraph(`
        Senate holds series of hearings on Facebook and Instagram.   
        Senator Richard Blumenthal convened the Senate Commerce Subcommittee on Consumer Protection hearing titled 
        "Protecting Kids Online: Facebook, Instagram, and Mental Health Harms".
        Antigone Davis, the Head of Global Safety at Facebook, was the primary witness.
      `),
      sources: [
        source('Senate Commerce', 'https://www.commerce.senate.gov/meetings/subcommittee-protecting-kids-online-facebook-instagram-and-mental-health-harms/'),
        source('CNBC', 'https://www.cnbc.com/2021/09/23/facebook-exec-will-testify-at-senate-hearing-after-report-finds-instagram-harms-teen-mental-health.html'),
      ],
    }),

    entry({
      date: '09/2021',
      category: 'red',
      actors: 'Senate Commerce Subcommittee',
      text:       paragraph(`
        Senators Markey and Blumenthal reintroduce the KIDS Act (Kids Internet Design and Safety Act). The bill would <strong>ban manipulative design features</strong> for
        users under 16 (autoplay, push alerts, badges that reward time spent, like buttons and follower counts) and extend protections against manipulative marketing
        to 13–15 year olds on platforms with reasonable evidence of use by kids 15 or under. It was first introduced in March 2020 and reintroduced on September 30, 2021,
        the day of the Senate Commerce hearing on Facebook's research into harms to children.
      `),
      sources: [
        source('Sen. Markey', 'https://www.markey.senate.gov/news/press-releases/senators-markey-and-blumenthal-rep-castor-reintroduce-legislation-to-protect-children-and-teens-from-online-manipulation-and-harm'),
        source('Sen. Markey', 'https://www.markey.senate.gov/news/press-releases/senators-markey-and-blumenthal-introduce-first-of-its-kind-legislation-to-protect-children-online-from-harmful-content-design-features_'),
        source('Fairplay', 'https://fairplayforkids.org/the-kids-act-imagines-a-whole-new-internet-for-children-and-teens/'),
      ],
    }),

    entry({
      date: '10/2021',
      category: 'orange',
      actors: 'Frances Haugen, Senate Subcommittee',
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
        it was not adding value and highly distressing due to the highly curated nature of 
        profiles, driving constant comparison and superficial self‑presentation.
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
        dispute about swhether public institutions had been misled and denied
        documents.
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
        their data safe. 73% do not trust Meta. The company <strong>ranks last among major consumer
        tech companies</strong>. 33% of people expect Facebook to become much less popular in
        the next 12 months.
      `),
      sources: [source('CivicScience', 'https://civicscience.com/trust-issues-sour-outlook-for-meta-facebook-popularity-falls/')],
    }),

    entry({
      date: '05/2023',
      category: 'green',
      actors: 'FTC',
      text:       paragraph(`
        FTC proposed a <strong>blanket prohibition on Meta monetizing youth data</strong> and a pause
        on new products and features absent independent privacy compliance
        confirmation. A serious governance attempt focused on youth data, privacy
        compliance, and product-launch constraints.
      `),
      sources: [source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-proposes-blanket-prohibition-preventing-facebook-monetizing-youth-data')],
    }),

    entry({
      date: '05/2023',
      category: 'green',
      actors: 'US Surgeon General Vivek Murthy, HHS',
      text:       paragraph(`
        The US Surgeon General ran a metatstudy concluding social media carries benefits
        and risks, but that <strong>evidence is insufficient to deem platforms safe for youth</strong>. They
        stress missing independent access to platform data and recommending
        precaution in the face of uncertainty.
      `),
      sources: [source('HHS', 'https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html')],
    }),

    entry({
      date: '06/2023',
      category: 'purple',
      actors: 'Meta, Stanford Deliberative Democracy Lab, Behavioral Insights Team',
      text:       paragraph(`
        Meta and the Stanford Deliberative Democracy Lab release report from the <strong>Meta
        Community Forum</strong>, a structured global Deliberative Poll on bullying
        and harassment online. 6,300+ people from 32 countries in 23 languages, described as
        the largest deliberative exercise ever conducted. <strong>Participants indicated wanting 
        stronger platform accountability and
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
        knew it was causing harm, and deceived parents about it. The complaints named specific design features, including
        infinite scroll, algorithmic rabbit holes, near-constant push notifications, and social validation loops, as intentional mechanisms 
        targeting adolescent brain development to maximize time on platform. 
        As of 2026, no settlement has been reached.
      `),
      sources: [source('NY AG', 'https://ag.ny.gov/press-release/2023/attorney-general-james-and-multistate-coalition-sue-meta-harming-youth')],
    }),

    entry({
      date: '10/2023',
      category: 'purple',
      actors: 'Meta, Stanford DDL, Behavioral Insights Team',
      text:       paragraph(`
        Stanford DDL, Meta, and the Behavioural Insights Team conduct another structured deliberative process, this time on AI chatbots.
        1,545 people from the USA, Germany, Spain, and Brazil engage in two online
        sessions with AI-moderated small-group deliberation. Participants across all four countries
        want developers to build chatbots with <strong>transparency and control features</strong>. Results are
        publicly released.
      `),
      sources: [
        source('Stanford Deliberation', 'https://deliberation.stanford.edu/meta-community-forum-generative-ai-results'),
        source('Democracy Technologies', 'https://democracy-technologies.org/ai-data/meta-community-forums-generative-ai-data/'),
        source('Meta Newsroom', 'https://about.fb.com/news/2024/04/leading-the-way-in-governance-innovation-with-community-forums-on-ai/'),
      ],
    }),

    entry({
      date: '10/2023',
      category: 'blue',
      actors: 'Pew Research Center, 8,842 US adults, 1,453 US teens surveyed',
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
        The FTC proposed <strong>amendments to the Children’s Online Privacy Protection Rule (COPPA)</strong> and opened a 60-day public comment window,
        which drew nearly 300 comments.
        The proposal carried three concrete new requirements: a separate,
        unbundled opt-in consent specifically for targeted advertising
        (meaning a parent could consent to an app while refusing ad monetization of their child's data),
        a mandatory written data retention policy prohibiting indefinite storage of children’s personal information,
        and expanded definitions of "personal information" to include biometric identifiers.
        The Commission voted 5–0 to finalize the rule in January 2025.
      `),
      sources: [
        source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2023/12/ftc-proposes-strengthening-childrens-privacy-rule-further-limit-companies-ability-monetize-childrens'),
        source('FTC', 'https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data'),
      ],
    }),

    entry({
      date: '07/2024',
      category: 'red',
      actors: 'Senate',
      text:       paragraph(`
        Senate voted 91–3 to pass the <strong>Kids Online Safety Act (KOSA)</strong>.  
        It was the <strong>first major federal tech regulation to advance in the Senate since 1998</strong>, w
        hen the original Children’s Online Privacy Protection Rule (COPPA) passed.
      `),
      sources: [source('Reuters', 'https://www.reuters.com/world/us/us-senate-set-pass-major-online-child-safety-reforms-2024-07-30/')],
    }),

    entry({
      date: '10/2024',
      category: 'blue',
      actors: 'Pew Research Center, 1,391 US Teens and Parents',
      text:       paragraph(`
        Pew Research found that 48% of teens say <strong>social media has a mostly negative
        effect on people their age</strong>, up from 32% in 2022. Only 11% view it as mostly
        positive for peers. Parents share the worry. A 2023 Harris Poll for Nationwide Children's Hospital found that 50% of parents believe their child's mental health
        suffered in the past 12 months because of social media use. In the same poll, the share of
        Americans saying children's social media use has a positive influence on their mental
        health fell to 35%, down from 43% in 2022.
      `),
      sources: [
        source('Pew Research', 'https://www.pewresearch.org/wp-content/uploads/sites/20/2025/04/PI_2025.04.22_teens-social-media-mental-health_REPORT.pdf'),
        source('Nationwide Children\'s', 'https://www.nationwidechildrens.org/newsroom/news-releases/2023/05/oos_socialmedia_mmr'),
      ],
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
        FTC finalized COPPA amendments strengthening child-data protections. The final
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
        Meta expands Teen Account protections across Instagram, Facebook, and
        Messenger. Platform self-regulation shifting from Instagram-only defaults to
        <strong>cross-platform youth safety settings</strong>.
      `),
      sources: [source('Meta Newsroom', 'https://about.fb.com/news/2025/04/introducing-new-built-in-restrictions-instagram-teen-accounts-expanding-facebook-messenger')],
    }),

    entry({
      date: '02/2026',
      category: 'orange',
      actors: 'National PTA, Meta, Google, ConnectSafely, Family Online Safety Institute',
      text:       paragraph(`
        The National Parents Teacher Association (PTA) broke partnership with Meta in February 2026, ending 15 years of corporate
        sponsorship, after internal documents exposed in the Los Angeles trial revealed
        the full extent of what Meta knew about teen mental health. For over a decade,
        Meta and Google quietly funded a network of US child-safety and parent
        organizations, including the National PTA, ConnectSafely, and the Family Online
        Safety Institute, then <strong>cited those same groups as independent third-party
        endorsers in regulatory filings and congressional testimony, without disclosing
        the funding relationship</strong>.
      `),
      sources: [
        source('The Next Web', 'https://thenextweb.com/news/meta-google-fund-us-kids-groups-conflict-of-interest'),
        source('Reuters', 'https://www.reuters.com/legal/litigation/meta-google-fund-us-kids-groups-critics-warn-social-media-risk-2026-05-14/'),
      ],
    }),

    entry({
      date: '03/2026',
      category: 'orange',
      actors: 'Jury, Meta, Google, Plaintiff KGM',
      text:       paragraph(`
        A Los Angeles jury <strong>found Meta and Google negligent</strong> in a social-media harms
        trial and awarded $6 million, treating <strong>platform design features as defective-product issues</strong>. This validates the frame and may affect thousands of
        pending cases.
      `),
      sources: [source('NPR', 'https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict')],
    }),
  ]
});
