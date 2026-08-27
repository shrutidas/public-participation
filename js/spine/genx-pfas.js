import {
  spineData, mechanism, impact, spineProposal, propLink, comparable,
  evidence, paragraph, source
} from '../cases/helpers.js';

/* --------------------------------------------------------------------------
 * GenX Contamination in the Cape Fear River: spine-layer data.
 * Research pass: research/genx-proposal-chains.md (August 2026).
 * Framing constraint: this was a disclosure failure, not a detection failure.
 * -------------------------------------------------------------------------- */

export default spineData({
  slug: 'genx-pfas',

  mechanisms: [
    mechanism({
      name: 'Substantial-risk reporting to EPA',
      actor: 'DuPont, 3M under TSCA Section 8(e)',
      failure: 'knew-no-act',
      note: 'The company knew and did not report; the sanction came 24 years late',
      detail: paragraph(`
        The law required companies to report substantial-risk information. DuPont
        held internal warnings from 1961, worker blood findings from the 1970s,
        and tap water contamination results from 1981, and reported none of them.
        The 2005 EPA settlement covered failures to report going back to the
        1980s, imposed a $10.25 million penalty, and set no enforceable limits on
        continued production.
      `),
      anchors: ['internal warnings', 'failing to report substantial risk'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
    }),
    mechanism({
      name: 'Consent order verification',
      actor: 'EPA, under the 2009 TSCA 5(e) order',
      failure: 'knew-no-act',
      note: 'EPA required 99% capture but did not check compliance for eight years',
      detail: paragraph(`
        The 2009 consent order recognized insufficient information and potential
        unreasonable risk, required 99 percent capture, and contained no
        scheduled mechanism for EPA to verify compliance. EPA's first on-site
        inspection at Fayetteville Works came on June 28, 2017, three weeks
        after the newspaper story. For notifying anyone downstream, no mechanism
        existed at all.
      `),
      anchors: ['insufficient information and potential unreasonable risk', 'first on-site TSCA compliance monitoring inspection'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
    }),
    mechanism({
      name: 'Discharge permits and public comment',
      actor: 'NC DEQ and its predecessors, under the Clean Water Act',
      failure: 'did-not-know',
      note: 'The permit file never named the chemical, so no one knew to object',
      detail: paragraph(`
        Permit applications contained no reference to GenX or to any chemical
        name, formula, or CAS number that would identify it. A retired DEQ
        supervisor said he would not have understood that the process generated
        GenX as a byproduct. Public comment existed at every renewal, but no one could object to a chemical the file never named. After 2017 the mechanism worked:
        DEQ suspended the discharge provisions and ran the 2020 permit through
        draft, comment, and hearing.
      `),
      anchors: ['Discharge continued largely unmonitored'],
      sources: [source('North Carolina Department of Environmental Quality', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
    }),
    mechanism({
      name: 'Federal drinking water monitoring',
      actor: 'EPA, under UCMR3',
      failure: 'acted-no-effect',
      note: 'The test results sat in a public database; no one had a duty to tell residents',
      detail: paragraph(`
        UCMR3 sampling ran 2013 to 2015 and the data were published. No duty to
        notify anyone attached to the results, and the link closed only when a
        reporter browsed the database in spring 2017. Journalism substituted for
        the missing notice duty.
      `),
      anchors: ['stayed inside agencies and journals'],
      sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
    }),
    mechanism({
      name: 'Drinking water violation notices',
      actor: 'Utilities, under the Safe Drinking Water Act',
      failure: 'no-mechanism',
      note: 'The 24-hour warning rule covers only regulated chemicals, and GenX was unregulated',
      detail: paragraph(`
        The Public Notification Rule gives water suppliers 24 hours to notify
        people about violations of existing drinking water regulations. GenX was unregulated, so the rule required no notice at all. No jurisdiction has been
        identified with a detection-triggered notice law for unregulated
        contaminants.
      `),
      anchors: ['Toxin taints CFPUA drinking water'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
    }),
    mechanism({
      name: 'Toxics release right-to-know',
      actor: 'EPCRA, the Toxics Release Inventory',
      failure: 'no-mechanism',
      note: 'Disclosure rules cover only listed chemicals; PFAS were not listed until December 2019',
      detail: paragraph(`
        Every measured disclosure-regime success operates on listed, named
        chemicals. PFAS entered TRI only when the FY2020 National Defense
        Authorization Act added them on December 20, 2019. During the entire
        exposure window, no disclosure regime named these compounds.
      `),
      anchors: ['No regulatory disclosure required'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/toxics-release-inventory-tri-program/addition-certain-pfas-tri-national-defense-authorization-act')]
    }),
    mechanism({
      name: 'Worker safety rules',
      actor: 'OSHA',
      failure: 'no-mechanism',
      note: 'OSHA had no PFAS exposure limit, and its complaint channel was unreliable',
      detail: paragraph(`
        No PFOA or GenX exposure standard existed at Washington Works or
        Fayetteville. The whistleblower channel that did exist was documented by
        GAO as lacking sufficient internal controls, with screening standards
        that varied by region.
      `),
      anchors: ['continued exposure is not tolerable'],
      sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/gao-10-722')]
    }),
    mechanism({
      name: 'Citizen suits',
      actor: 'Cape Fear River Watch, SELC',
      failure: 'worked',
      note: 'The lawsuit could only come after disclosure; once filed, it won concrete changes',
      detail: paragraph(`
        Citizen suits under the Clean Water Act and TSCA were available since the 1970s but could not be used before the pollution was disclosed. Once filed, they produced the highest documented efficacy in the case: plaintiff party
        status, independent enforcement authority over eleven provisions, a
        standing DEQ meeting obligation, a $12 million penalty, and 99 percent
        discharge reductions. The scope was one facility, not a standard.
      `),
      anchors: ['citizen-suit strategies'],
      sources: [source('North Carolina Department of Environmental Quality', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order')]
    }),
    mechanism({
      name: 'Public comment on the consent order',
      actor: 'Residents, downstream utilities, advocacy groups',
      failure: 'worked',
      note: 'About 380 comments produced itemized changes to the final order',
      detail: paragraph(`
        The 2018-19 comment period produced itemized changes in the final order:
        downstream intake characterization, split sampling authority, and a
        20-year filtration floor. The agency's own response-to-comments document
        records the additions, with the advocacy groups supplying the technical
        translation that made comments substantive.
      `),
      anchors: ['public notice and comment'],
      sources: [source('Cape Fear River Watch', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
    })
  ],

  impacts: [
    impact({
      name: 'Exposure through drinking water',
      headline: paragraph(`
        Roughly 200,000 water customers, with up to 300,000 people downstream,
        drank water carrying GenX at a mean of 631 ng/L over a discharge window
        running from 1980 to 2017.
      `),
      measures: paragraph(`
        Roughly 200,000 CFPUA customers, with 250,000 to 300,000 people
        downstream, drank water with mean GenX concentrations of 631 ng/L and up
        to about 4,500 ng/L at the intake, over a discharge window running from
        1980 to 2017.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'The discharge is the exposure source' },
        { anchor: 'insufficient information and potential unreasonable risk', strength: 'moderate', note: 'The unverified order let the window run' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Sun et al. (2016) quantified GenX in finished drinking water and
            showed <strong>conventional treatment did not remove it</strong>.
          `),
          grade: 'strong',
          sources: [source('Sun et al. 2016', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')]
        })
      ]
    }),
    impact({
      name: 'PFAS measured in the blood of residents',
      headline: paragraph(`
        Fluoroethers made up about a quarter of summed PFAS in the blood of tested
        Wilmington residents; median levels fell 34 to 65 percent within six
        months of discharge controls.
      `),
      measures: paragraph(`
        In 344 Wilmington residents, fluoroethers contributed about a quarter of
        the summed PFAS in blood; four legacy PFAS sat above national levels in
        97 percent or more of participants. Median fluoroether levels declined
        34 to 65 percent within six months of discharge controls. GenX
        was not detected above 2 ng/mL; the measured load is fluoroethers and
        legacy PFAS. Blood levels matter because PFAS exposure is linked to
        disease, recorded on its own card.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'Exposure shows up in the blood' },
        { anchor: 'public notice and comment', strength: 'strong', note: 'Controls were followed by measured declines' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Kotlarz et al. (2020) measured PFAS in blood from the GenX Exposure
            Study cohort: samples stored from 2010 to 2016 showed <strong>PFMOAA
            medians of 42 ng/mL</strong>.
          `),
          grade: 'strong',
          sources: [
            source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')
          ]
        }),
        evidence({
          finding: paragraph(`
            After exposure ended in Arnsberg, Germany, PFOA levels in residents' blood <strong>fell by half about every 3.26 years</strong>, which supports every
            chain's claim that an earlier cutoff would have lowered blood
            levels.
          `),
          grade: 'strong',
          quote: 'PFOA levels decreased in all study participants from Arnsberg',
          sources: [
            source('Brede et al. 2010', 'https://tera.org/Alliance%20for%20Risk/Workshop%20Xll/CaseSummaryPFOA.pdf')
          ]
        })
      ]
    }),
    impact({
      name: 'Disease linked to PFAS exposure',
      headline: paragraph(`
        The PFAS in residents' blood is linked to disease: higher cholesterol
        measured in the Wilmington cohort, and kidney and testicular
        cancer where PFOA was studied at population scale.
      `),
      measures: paragraph(`
        In the Wilmington cohort, PFOS and PFNA were associated with higher
        total and non-HDL cholesterol, about 5 to 6 mg/dL per quartile,
        strongest in older adults. Twelve percent of tested residents exceeded
        the blood level at which the National Academies recommend medical
        screening. For PFOA, elevated in 97 percent or more of tested
        residents, the C8 Science Panel found probable links to kidney cancer,
        testicular cancer, thyroid disease, ulcerative colitis, high
        cholesterol, and pregnancy-induced hypertension, and IARC classified it
        carcinogenic to humans in 2023. In animal studies, GenX produces liver
        and pancreatic tumors; no human disease study of GenX
        exists.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'moderate', note: 'Cholesterol associations are measured in this cohort; cancer evidence comes from PFOA populations elsewhere' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Rosen et al. (2022) measured lipids in 326 GenX Exposure Study
            participants ages 6 to 86: PFOS and PFNA were associated with
            higher total and non-HDL cholesterol, <strong>about 5 to 6 mg/dL per
            quartile</strong>, with the largest associations in older adults.
          `),
          grade: 'moderate',
          quote: 'PFNA and PFOS were associated with higher levels of total and non-HDL cholesterol, with associations larger in magnitude among older adults',
          sources: [source('Rosen et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/36069575/')]
        }),
        evidence({
          finding: paragraph(`
            The C8 Science Panel, working from blood samples and health data on
            about 69,000 PFOA-exposed residents, found <strong>probable links to six
            conditions including kidney and testicular cancer</strong>; IARC classified
            PFOA carcinogenic to humans in 2023, with limited human evidence
            for renal cell and testicular cancer.
          `),
          grade: 'strong',
          quote: 'limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)',
          sources: [
            source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
            source('International Agency for Research on Cancer', 'https://www.iarc.who.int/news-events/iarc-monographs-evaluate-the-carcinogenicity-of-perfluorooctanoic-acid-pfoa-and-perfluorooctanesulfonic-acid-pfos')
          ]
        }),
        evidence({
          finding: paragraph(`
            The 2024 GenX Exposure Study report to participants applies the
            National Academies' screening thresholds: 97 percent of
            participants sat above 2 ng/mL summed PFAS and <strong>12 percent above 20
            ng/mL</strong>, the level at which medical monitoring is recommended.
          `),
          grade: 'moderate',
          quote: 'the NASEM published recommendations for medical monitoring of PFAS-exposed people based on the total (sum) concentration of 7 specific PFAS in blood',
          sources: [source('GenX Exposure Study', 'https://genxstudy.ncsu.edu/wp-content/uploads/sites/149/2025/11/Deidentified_2024_PFAS_ReportBack.pdf')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            <strong>No human disease study of GenX exists</strong>: EPA's toxicity
            assessment rests on animal studies, with the liver as the primary
            target organ, and the cohort's cholesterol associations track
            legacy PFAS rather than fluoroethers, two of which were associated
            with higher HDL.
          `),
          grade: 'moderate',
          quote: 'the liver is the primary target organ for toxicity from oral exposure',
          sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/system/files/documents/2023-03/GenX-Tox-Assessment-technical-factsheet-March-2023-Update.pdf')]
        })
      ]
    }),
    impact({
      name: 'Filtration costs paid by water customers',
      headline: paragraph(`
        Water customers paid for the cleanup: $82.8 million for carbon filtration
        in Wilmington funded by an 8 percent rate increase, and $158.7 million
        for reverse osmosis in Brunswick County.
      `),
      measures: paragraph(`
        CFPUA built granular activated carbon filtration for $43 million, $82.8
        million with maintenance, funded by an 8 percent customer rate increase;
        Brunswick County built reverse osmosis for $158.7 million.
      `),
      from: [
        { anchor: 'Toxin taints CFPUA drinking water', strength: 'strong', note: 'Disclosure forced the treatment decision onto ratepayers' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            News reporting at the time documented the bills and who paid them: <strong>$82.8 million at CFPUA, funded through an 8 percent customer rate increase, and $158.7 million in Brunswick County</strong>.
          `),
          grade: 'strong',
          sources: [
            source('WUNC', 'https://www.wunc.org/environment/2025-06-09/chemours-genx-cape-fear-river-pollution-pfas-wilmington'),
            source('Port City Daily', 'https://portcitydaily.com/local-news/2022/06/24/brunswick-officials-celebrate-low-pfas-in-water-typically-achieved-through-reverse-osmosis/')
          ]
        })
      ]
    }),
    impact({
      name: 'Discharge cut 99 percent, a $12 million penalty',
      headline: paragraph(`
        The 2019 Consent Order cut air emissions 99 percent by the end of 2019,
        imposed a $12 million penalty, and delivered alternative drinking water
        to affected well owners.
      `),
      measures: paragraph(`
        The 2019 Consent Order produced a 99 percent air emission reduction by
        the end of 2019 through a thermal oxidizer operating at 99.99 percent
        efficiency, a $12 million penalty, and alternative drinking water for
        affected well owners. Fluoroether levels in residents' blood declined
        34 to 65 percent within six months of discharge controls.
      `),
      from: [
        { anchor: 'public notice and comment', strength: 'strong', note: 'The enforceable order produced the reductions' },
        { anchor: 'citizen-suit strategies', strength: 'strong', note: 'The suit made the community a party with enforcement power' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            The consent order and state enforcement records document the terms and the results: <strong>a $12 million penalty and 99 percent discharge reductions</strong>.
          `),
          grade: 'strong',
          sources: [source('Consent Order', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
        })
      ]
    }),
    impact({
      name: 'Statewide rule adoption',
      headline: paragraph(`
        Nine years of the case's most extensive participation produced
        remediation at one plant but no enforceable statewide standard, and the
        federal GenX limit was proposed for rescission in May 2026.
      `),
      measures: paragraph(`
        Nine years of the case's most extensive participation produced
        remediation at one plant and no enforceable North Carolina surface water
        standard. The state commission set aside surface water standards for
        facility-authored minimization plans with no compliance deadline, and
        the federal GenX drinking water limit was proposed for rescission in May
        2026.
      `),
      from: [
        { anchor: 'public notice and comment', strength: 'moderate', note: 'Facility-scoped machinery, with no bridge to rulemaking' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            The federal government <strong>rescinded regulatory determinations for four
            PFAS substances</strong> in a May 2026 Federal Register notice; NC House Bill
            569 passed the House 104 to 3 and stalled in the Senate.
          `),
          grade: 'strong',
          sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Give workers a protected way to report chemical risks',
      method: 'Worker Committees & Protected Disclosure',
      anchor: 'continued exposure is not tolerable',
      where: 'Congress and EPA, with worker anti-retaliation machinery as the shield',
      when: paragraph(`
        1980, and federally. By 1980 DuPont had confirmed elevated PFOA in its
        workers and concluded internally that continued exposure was not
        tolerable, the same year Fayetteville Works began discharging into the
        Cape Fear. A protected worker channel with a duty to transmit
        substantial-risk findings belongs in the chemicals statute. The
        earliest leverage point is 1961; 1980 is the first year the intervention
        touches this river.
      `),
      description: paragraph(`
        From the 6/8 session: a mechanism for involving workers in oversight.
        DuPont observed unusual medical issues among its own workers, who saw
        the harm first and had no say.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Corporate accountability', 'Worker empowerment'],
      links: [
        propLink({
          name: 'A protected channel could produce more disclosures',
          claim: paragraph(`
            A protected, structured worker reporting channel could produce more
            disclosures of concealed findings.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Across all reported frauds at large US firms 1996 to 2004,
                employees were the <strong>single largest detector class</strong>:
                “Only 6% of the frauds are revealed by the SEC and 14% by the
                auditors. More important monitors are media (14%), industry
                regulators (16%), and employees (19%).”
              `),
              grade: 'moderate',
              quote: 'Only 6% of the frauds are revealed by the SEC and 14% by the auditors. More important monitors are media (14%), industry regulators (16%), and employees (19%).',
              sources: [source('Dyck, Morse and Zingales 2007', 'https://www.nber.org/papers/w12882')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Blowing the whistle usually costs an employee more than it gains them, so few report without strong protection; GAO found the existing OSHA
                whistleblower program <strong>lacked sufficient internal controls</strong>.
              `),
              grade: 'moderate',
              quote: 'OSHA lacks sufficient internal controls to ensure that the whistleblower program operates as intended',
              sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/gao-10-722')]
            })
          ]
        }),
        propLink({
          name: 'Disclosure could reach and move the regulator',
          claim: paragraph(`
            Worker disclosure could reach the regulator and produce scrutiny
            decades before litigation discovery did.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                3M's 1998 disclosure letter triggered EPA's first sustained look
                at PFAS in blood and a compliance audit collecting over 700
                studies; firms targeted by an OSHA retaliation complaint showed
                <strong>measurably fewer irregularities for at least two years</strong> after.
              `),
              grade: 'moderate',
              quote: 'those deterrent effects lasted for at least two full years after the whistleblower lodged the complaint',
              sources: [source('Wilde 2017', 'https://www.sciencedaily.com/releases/2017/01/170103151133.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In this case the sanction arrived <strong>24 years after the earliest violation</strong> and set no enforceable limits on continued production; disclosure that reached only the agency might have sat for years, as the 2012 detection findings did.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier information could mean earlier control',
          claim: paragraph(`
            A regulator that knew earlier could have controlled the discharge
            earlier.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Once information became public in June 2017, DEQ suspended the
                discharge-authorizing permit provisions effective November 30,
                2017, and the 2019 order produced <strong>99 percent reductions</strong>. When
                the information arrived, the response came fast.
              `),
              grade: 'moderate',
              sources: [source('North Carolina Department of Environmental Quality', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The demonstrated response ran on public and press knowledge, not
                regulator knowledge alone: regulators <strong>held the 2016 findings
                without acting</strong>.
              `),
              grade: 'moderate',
              sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
            })
          ]
        }),
        propLink({
          name: 'Less exposure could mean less disease',
          claim: paragraph(`
            An earlier cutoff lowers cumulative exposure and the PFAS in
            residents' blood. The blood levels matter because PFAS exposure is
            linked to disease: higher cholesterol, thyroid disease, and kidney
            and testicular cancer.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median fluoroether levels in blood <strong>declined 34 to 65 percent
                within six months</strong> of discharge controls; after exposure ends, PFOA levels in blood fall by half about every 3.26 years.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            }),
            evidence({
              finding: paragraph(`
                The disease link is measured for PFOA at population scale: the
                C8 Science Panel found probable links to <strong>kidney and testicular
                cancer among about 69,000 exposed residents</strong>, and the Wilmington
                cohort shows PFAS-associated higher cholesterol. GenX
                has no human disease study.
              `),
              grade: 'moderate',
              sources: [
                source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
                source('Rosen et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/36069575/')
              ]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Richard Purdy Resignation Disclosure',
          where: '3M, Minnesota', when: '1999',
          authority: 'Individual, unprotected',
          outcome: paragraph(`
            Purdy’s resignation letter to EPA helped trigger the PFC
            investigation; 3M announced the PFOS phaseout in 2000. He acted
            alone, without legal protection, and late, but the outcome his
            disclosure moved is documented.
          `),
          strength: 'moderate',
          sources: [source('Minnesota Reformer', 'https://minnesotareformer.com/2022/12/15/toxic-3m-knew-its-chemicals-were-harmful-decades-ago-but-didnt-tell-the-public-government/')]
        }),
        comparable({
          name: 'NASA Aviation Safety Reporting System',
          where: 'United States', when: '1976-present',
          authority: 'Third-party receipt, routinized immunity',
          outcome: paragraph(`
            Aviation workers filed over 500,000 confidential reports with NASA
            as a third-party recipient, producing about 4,000 alerting messages;
            routinized immunity made disclosure normal professional behavior.
            The hazard-reduction endpoint is unmeasured and confounded with
            technology and regulation.
          `),
          strength: 'moderate',
          sources: [source('US Federal Aviation Administration', 'https://www.faasafety.gov/files/events/EA/EA23/2010/EA2334954/NASA_Reporting.pdf')]
        }),
        comparable({
          name: 'OSHA Whistleblower Program Audit',
          where: 'United States', when: '2010',
          authority: 'The existing statutory channel',
          outcome: paragraph(`
            GAO audited the existing statutory channel, OSHA’s whistleblower
            program, and found it lacked sufficient internal controls and could
            not measure its own outcomes. That is the measured baseline the
            proposal must exceed, not copy.
          `),
          strength: 'strong',
          sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/gao-10-722')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let residents report early signs of contamination',
      method: 'Participatory Science & Community Reporting',
      anchor: 'cattle deaths',
      where: 'EPA Region 3 and West Virginia for the documented 1998 signal; NC DEQ and CFPUA for a 2013-2015 Cape Fear deployment',
      when: paragraph(`
        The proposal sits at 1998 because this is the first time someone notices
        something is off, which in this record is the farmer Wilbur Tennant's
        documentation in West Virginia. On the Cape
        Fear, the instrument had little to grip before 2012, because GenX
        at ng/L levels produced no resident-observable signal. A defensible Cape
        Fear deployment is 2013 to 2015, when UCMR3 data existed and an
        organized community water sampling program could have found and
        publicized what the utility did not. Whether the map should keep the
        1998 anchor or move to the 2012 detection is a pending call.
      `),
      description: paragraph(`
        From the 6/8 session, anchored to 1998: local meetings, information
        spreading, and crowdsourced data collection at the first sign of a
        threat, with a standing institution that treats resident reports as
        experiential knowledge.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Experiential knowledge honored', 'Community standing'],
      links: [
        propLink({
          name: 'Resident reports could trigger investigation',
          claim: paragraph(`
            Resident reports of suspicions and symptoms could trigger
            investigation before formal institutional detection.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Over 50,000 citizen complaints to the Texas environmental
                regulator <strong>increased inspections and notices of
                violation</strong> at the targeted facilities.
              `),
              grade: 'moderate',
              sources: [
                source('Evans and Shimshack 2018', 'https://www.aeaweb.org/conference/2018/preliminary/paper/eSR58nDd')
              ]
            }),
            evidence({
              finding: paragraph(`
                In Woburn, Massachusetts, parents counted the childhood leukemia cases in their neighborhood and pressed for an investigation; a Harvard study then confirmed children were developing leukemia at <strong>four times the expected rate</strong>, linked to two contaminated town wells.
              `),
              grade: 'moderate',
              sources: [
                source('Dan Kennedy, Woburn Files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')
              ]
            }),
            evidence({
              finding: paragraph(`
                Wilbur Tennant, a West Virginia farmer, videotaped his cattle sickening and dying near a DuPont landfill; his documentation became the lawsuit whose court files <strong>forced DuPont's hidden PFOA studies into the open</strong>.
              `),
              grade: 'moderate',
              sources: [
                source('Levin Law', 'https://levinlaw.com/dupont-c8-and-health')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Most community-reported cancer clusters turn out to have no identifiable environmental cause: “In the 108 CDC cancer cluster investigations that
                resulted, no meaningful environmental causes explained any of
                the clusters”.
              `),
              grade: 'moderate',
              quote: 'In the 108 CDC cancer cluster investigations that resulted, no meaningful environmental causes explained any of the clusters',
              sources: [source('Connecticut Department of Public Health', 'https://portal.ct.gov/-/media/departments-and-agencies/dph/dph/environmental_health/eoha/pdf/cancerclustertechbrieffinalpdf.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Reports could produce detection in this case',
          claim: paragraph(`
            On the Cape Fear, resident reports would have produced earlier
            detection.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Where residents sampled with a lab partner, they <strong>detected what
                official monitoring missed</strong>: Flint residents collected water
                samples from 269 homes with Virginia Tech running the analysis,
                producing the dataset that exposed lead contamination official
                sampling had not; the authors report the citizen datasets were
                “the only internally consistent measures of water lead levels”.
              `),
              grade: 'moderate',
              quote: 'citizen science datasets collected without cheats represented the only internally consistent measures of water lead levels',
              sources: [source('Roy and Edwards 2019', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')]
            }),
            evidence({
              finding: paragraph(`
                A community sensor network in Imperial County, California
                identified <strong>1,426 fine-particle pollution episodes against 116
                found by government monitors</strong>; half the community-detected
                episodes never appeared in official data. The setting differs, air rather than water and sensors rather than symptoms, but the detection gain is measured.
              `),
              grade: 'moderate',
              quote: 'Of the 1426 episodes identified by the community sensors, 723 (51%) were not observed by the government monitors',
              sources: [source('Seto et al. 2019', 'https://www.mdpi.com/1660-4601/16/18/3268')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                GenX is odorless and tasteless at ng/L levels and produced no
                acute observable signal; <strong>no documented resident report preceded
                the 2012 detection</strong>. The first observable sign of a threat was a
                published paper, not an experience.
              `),
              grade: 'moderate',
              sources: [source('Strynar et al. 2015', 'https://pubs.acs.org/doi/10.1021/acs.est.5b01215')]
            })
          ]
        }),
        propLink({
          name: 'Earlier detection could mean less exposure',
          claim: paragraph(`
            Earlier detection could bring the response forward, lowering
            exposure, the PFAS in residents' blood, and the disease risk it
            carries.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                This case supplies the measurement: after the June 2017 story the state acted within a week, and blood levels <strong>fell 34 to 65 percent within six months</strong> of discharge controls.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Detection alone <strong>stalled inside agencies for five years</strong>; the
                response demonstrated in 2017 ran on press amplification.
              `),
              grade: 'moderate',
              sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Tonawanda Bucket Brigade',
          where: 'Tonawanda, NY', when: '2004-2013',
          authority: 'Resident sampling, then state study, then criminal enforcement',
          outcome: paragraph(`
            Starting in 2005, residents sampled their air with homemade bucket kits and found benzene and formaldehyde; the state's follow-up study confirmed the excess, and the company was convicted on 14 of 19
            charges with a $12.5 million penalty. Measured benzene fell 86
            percent at the industrial monitor and 68 percent at the residential
            monitor, and the estimated excess cancer risk at the industrial
            monitor fell from 75 in one million to 11 in one million.
          `),
          strength: 'strong',
          sources: [
            source('New York State Department of Environmental Conservation', 'https://extapps.dec.ny.gov/docs/air_pdf/tonfact1011.pdf'),
            source('US Department of Justice', 'https://www.justice.gov/archives/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and'),
            source('Citizen Science Community Resources', 'https://www.csresources.org/our-history')
          ]
        }),
        comparable({
          name: 'Flint Resident Water Sampling',
          where: 'Flint, MI', when: '2015',
          authority: 'Resident-collected samples with Virginia Tech',
          outcome: paragraph(`
            Residents sampled their own taps with Virginia Tech running the analysis and returned 84 percent of 300 kits (252 samples; 269 homes in the published analysis). Their data showed the water carried lead at hazardous levels, a 90th percentile of 25.2 ppb against the 15 ppb federal action level, while official sampling showed no violation. That finding preceded the January 2016 federal emergency and more than $600 million in relief.
          `),
          strength: 'strong',
          sources: [source('Flint Water Study', 'https://flintwaterstudy.org/information-for-flint-residents/results-for-citizen-testing-for-lead-300-kits/')]
        }),
        comparable({
          name: 'Woburn Leukemia Cluster',
          where: 'Woburn, MA', when: '1970s-1986',
          authority: 'Community observation plus academic partnership',
          outcome: paragraph(`
            Parents counted the childhood leukemia cases in their neighborhood; a Harvard study run with community volunteers confirmed children were developing leukemia at four times the expected rate. The confirmed cluster produced a settlement, a Superfund cleanup, a state cleanup fund, and a state cancer registry.
          `),
          strength: 'moderate',
          sources: [source('Dan Kennedy, Woburn Files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Warn the public when chemical discharge is approved',
      method: 'Statutory Right-to-Know',
      anchor: 'insufficient information and potential unreasonable risk',
      where: 'EPA Office of Chemical Safety and Pollution Prevention; the 1980 permit is the earlier anchor',
      when: paragraph(`
        2009. The consent order is the single document where the federal
        government simultaneously recognized potential unreasonable risk and
        authorized manufacture; attaching downstream notification and a public
        local monitoring plan to that order reaches every affected water user
        eight years before the newspaper did. The 1980 permit record shows why
        disclosure must be structural: the file contained no chemical name a
        commenter could act on.
      `),
      description: paragraph(`
        From the 6/8 session: every time a company starts discharging under an
        approval, the affected public is notified and a local monitoring plan
        attaches.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure', 'Filtration costs paid by water customers'],
      impactsConjectured: ['Externalities borne knowingly rather than unknowingly', 'Procedural fairness'],
      links: [
        propLink({
          name: 'Notice at approval could produce public knowledge',
          claim: paragraph(`
            A notification duty attached to the approval could produce public
            knowledge from day one.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The machinery exists for regulated contaminants: the drinking
                water Public Notification Rule gives suppliers <strong>24 hours for the
                most serious violations</strong>.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The rule <strong>does not address unregulated contaminants</strong>, and no
                jurisdiction attaches public notice to a chemicals consent
                order. As enacted policy, unstudied.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ]
        }),
        propLink({
          name: 'Public knowledge changes behavior',
          claim: paragraph(`
            Public knowledge changes behavior: monitoring, avoidance, market and
            political pressure.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Drinking water violations raise <strong>bottled water sales 17 to 22
                percent</strong>; industrial plant openings cut nearby housing values 11 percent within half a mile. Both show people act on contamination risks once they know about them.
              `),
              grade: 'strong',
              quote: 'an increase in bottled water sales of 22 percent from violations due to microorganisms and 17 percent from violations due to elements and chemicals',
              sources: [
                source('Graff Zivin et al. 2011', 'https://www.nber.org/papers/w16695'),
                source('Currie et al. 2015', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Avoiding contaminated water costs money and burdens poor households most, and the measured responses <strong>concentrate within a mile of a plant</strong>, while Cape Fear exposure ran 100 miles downstream.
              `),
              grade: 'moderate',
              sources: [source('Currie et al. 2015', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')]
            })
          ]
        }),
        propLink({
          name: 'Disclosure pressure reduces discharges',
          claim: paragraph(`
            Disclosure pressure reduces firm discharges before enforcement
            arrives.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Mailed water quality reports <strong>cut violations 30 to 44 percent</strong> and
                severe health violations 40 to 57 percent; Massachusetts firms
                cut on-site releases 92 percent under use reporting; 61 percent
                of surveyed German downstream users substituted substances after
                REACH listing.
              `),
              grade: 'strong',
              quote: 'reduced total violations by between 30% and 44%',
              sources: [
                source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html'),
                source('Toxics Use Reduction Institute', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Disclosure requirements depend on knowing which chemical is involved. PFAS was not added to the Toxic Release Inventory until December 2019, and the Fayetteville permit file <strong>did not identify the chemical at all</strong>. Without that information, regulators could not apply chemical-specific disclosure requirements.
              `),
              grade: 'moderate',
              sources: [source('North Carolina Department of Environmental Quality', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Reduced discharge, lower exposure and cost',
          claim: paragraph(`
            Reduced discharge lowers cumulative exposure, the PFAS in
            residents' blood and the disease risk it carries, and the
            filtration costs that fell on water customers.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                The declines in blood levels after controls and the <strong>$82.8
                million and $158.7 million filtration bills</strong> give measured
                numbers for what the exposure did and for what an earlier
                cutoff would have avoided.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Toxics Release Inventory',
          where: 'United States', when: '1986-present',
          authority: 'Mandatory annual public disclosure of listed releases',
          outcome: paragraph(`
            Under TRI’s mandatory annual public disclosure, on-site air
            releases of reportable chemicals fell 52 percent, or 838 million
            pounds, from 2003 to 2013, and 21 percent since 2014 with a 32
            percent air decline; attribution to disclosure rests
            partly on literature that could not be fetched, and quantities are
            self-reported by facilities.
          `),
          strength: 'moderate',
          sources: [
            source('US Environmental Protection Agency', 'https://www.epa.gov/sites/default/files/2015-09/documents/teitelbaum.pdf'),
            source('US Environmental Protection Agency', 'https://www.epa.gov/trinationalanalysis/releases-chemicals')
          ]
        }),
        comparable({
          name: 'Massachusetts Toxics Use Reduction Act',
          where: 'Massachusetts', when: '1990-2016',
          authority: 'Mandatory use reporting and planning',
          outcome: paragraph(`
            Under mandatory use reporting and planning, Massachusetts firms cut
            toxic chemical use 66 percent, byproduct 72 percent, and on-site
            releases 92 percent, per preliminary state analysis.
          `),
          strength: 'moderate',
          sources: [source('Toxics Use Reduction Institute', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf')]
        }),
        comparable({
          name: 'REACH Candidate List Substitution',
          where: 'European Union', when: '2011 survey',
          authority: 'Listing-triggered disclosure regime',
          outcome: paragraph(`
            After the EU's REACH regulation put substances of very high concern on a
            public candidate list, 61 percent of surveyed German downstream users
            replaced a listed substance with a less hazardous one.
          `),
          strength: 'moderate',
          sources: [source('Journal of Business Chemistry', 'https://www.businesschemistry.org/article/impacts-of-the-reach-candidate-list-of-substances-subject-to-authorisation-the-reputation-mechanism-and-empirical-results-on-behavioral-adaptations-of-german-supply-chain-actors/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'A law that forces public notice when contamination is found',
      method: 'Right-to-Know Trigger',
      anchor: 'stayed inside agencies and journals',
      where: 'Congress writing the duty into the drinking water or chemicals statute; EPA executing; NC DEQ for the state-scale fallback',
      when: paragraph(`
        August 2012, on EPA's own research detection: that converts a five-year
        silence into weeks. The state fallback is November 2016, on receipt of
        the quantified paper, which still cuts roughly seven months of exposure
        and makes the disclosure institutional rather than journalistic. The
        window choice (five years against seven months, federal against state
        trigger) is flagged for review. This proposal has the tightest fit of
        the six to the case's central finding, because it targets the exact
        link that failed.
      `),
      description: paragraph(`
        A notification requirement that fires when a peer-reviewed detection
        above a threshold reaches a regulator: the June 2017 newspaper story,
        made statutory.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Journalism removed as a single point of failure', 'Institutional trust'],
      links: [
        propLink({
          name: 'A trigger could produce public knowledge',
          claim: paragraph(`
            A statutory trigger could convert regulator receipt of a qualifying
            detection into public notice, in 2012 instead of 2017.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The UCMR3 data were public and one reporter performed the
                function once by browsing them: “he loaded the data to see what
                would pop up for the Wilmington area. There were some local
                hits”. The 24-hour notification machinery exists for regulated
                contaminants.
              `),
              grade: 'moderate',
              quote: 'he loaded the data to see what would pop up for the Wilmington area. There were some local hits',
              sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                No jurisdiction has a detection-triggered notice law for
                unregulated contaminants; as enacted policy the mechanism is
                untested, and the no-jurisdiction claim rests on searches, not a
                legal survey.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ]
        }),
        propLink({
          name: 'Public knowledge produces rapid response',
          claim: paragraph(`
            Public knowledge produces rapid agency response on the demonstrated
            timetable.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Measured in the case: story June 7, 2017; state investigation
                June 14; <strong>health goal lowered 99.8 percent in five weeks</strong>;
                discharge cessation announced within two weeks.
              `),
              grade: 'strong',
              sources: [source('WRAL', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2017 response ran on press amplification; whether a statutory
                notice without a front page produces the same seven-day response
                is untested. Mailed notices alone <strong>cut utility violations 30 to 44 percent</strong>, a real but modest response next to the near-total one of 2017.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier response could avoid years of exposure',
          claim: paragraph(`
            Earlier response could avoid up to five years of exposure at a mean
            of 631 ng/L, bringing the measured declines in blood levels, and
            the disease risk they carry, forward.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Blood samples stored from before disclosure show what the
                window produced (PFMOAA median 42 ng/mL, the highest of 56 PFAS
                measured); <strong>post-control declines of 34 to 65 percent in six
                months</strong> show the gain per year of earlier cutoff.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Drinking Water Public Notification Rule',
          where: 'United States', when: '1998-present',
          authority: 'Enacted, regulated contaminants only',
          outcome: paragraph(`
            This enacted federal rule requires 24-hour notice for the most
            serious violations and operates nationwide. It covers regulated
            contaminants only, the boundary this proposal erases.
          `),
          strength: 'moderate',
          sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
        }),
        comparable({
          name: 'Flint Emergency Response After Resident Data',
          where: 'Flint, MI', when: '2015-2016',
          authority: 'Public knowledge converting into action',
          outcome: paragraph(`
            Once resident sampling made contamination public, emergency
            declarations and more than $600 million in relief followed.
          `),
          strength: 'strong',
          sources: [source('Roy and Edwards 2019', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')]
        }),
        comparable({
          name: 'The June 2017 Wilmington StarNews Story',
          where: 'Wilmington, NC', when: '06/2017',
          authority: 'Journalism performing the missing function',
          outcome: paragraph(`
            On June 7, 2017, the Wilmington StarNews reported on its front page that
            GenX was in the Cape Fear drinking water. The state opened an
            investigation within seven days, cut its provisional health goal 99.8
            percent in five weeks, and Chemours agreed to stop the discharge. A
            newspaper performed the public-notice function; this proposal writes that
            sequence into law so notice does not depend on a newsroom.
          `),
          strength: 'strong',
          sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let the public choose experts to review the health evidence',
      method: 'Independent Science Review',
      anchor: 'State action began only after public disclosure',
      where: 'NC DHHS and NC DEQ',
      when: paragraph(`
        June to July 2017, Wilmington: the five-week window in which the
        state's health screening number moved from 71,000 ppt to 140 ppt and a
        key early meeting between DEQ, Chemours, and officials was closed to
        the public with one pool reporter. The specific fit is a standing rule
        that emergency health-goal setting seats community-appointed reviewers
        with authority to split samples.
      `),
      description: paragraph(`
        From the 6/8 session: let the public appoint its own experts to
        independently verify blood panels and water analyses and translate
        findings through a trusted channel. The session framed this as a fork:
        either the public trusts the input process, or a mechanism exists to
        route around authorities it does not trust. Community-appointed
        reviewers with split-sample authority are that bypass, the civilian
        counterpart of the worker channel's third-party receipt.
      `),
      banner: true,
      impactsMeasured: [],
      impactsConjectured: ['Legitimacy of the response', 'Repaired trust', 'Sustained study participation and calibrated protective behavior'],
      links: [
        propLink({
          name: 'Independent panels could produce findings that stick',
          claim: paragraph(`
            Independently appointed panels could produce credible findings that
            carry consequence.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The C8 Science Panel, jointly appointed under a court settlement,
                delivered probable-link findings for six conditions, reporting
                “there is a probable link between exposure to C8 (also known as
                PFOA) and testicular cancer and kidney cancer”; the findings
                carried <strong>automatic legal consequence for roughly 70,000
                class members</strong> and became the evidentiary basis for
                later regulation.
              `),
              grade: 'moderate',
              quote: 'there is a probable link between exposure to C8 (also known as PFOA) and testicular cancer and kidney cancer',
              sources: [source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The C8 panel was appointed by a court, not chosen by the
                community, and <strong>took seven years</strong>, a timescale mismatched to
                emergency response. No directly community-chosen analog with
                measured outcomes was identified.
              `),
              grade: 'moderate',
              sources: [source('C8 Science Panel', 'https://www.c8sciencepanel.org/')]
            })
          ]
        }),
        propLink({
          name: 'Independent verification could build trusted communication',
          claim: paragraph(`
            Independent verification could improve trusted communication of
            risk.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The report-back literature finds returning personal results
                strengthens relationships and supports trust in science, calling
                report-back “a powerful tool for increasing understanding of
                environmental health”; the documented effects are qualitative
                intentions and self-reports.
              `),
              grade: 'weak',
              quote: 'Personal exposure report-back is a powerful tool for increasing understanding of environmental health',
              sources: [source('Brody et al. 2014', 'https://link.springer.com/content/pdf/10.1186/1476-069X-13-40.pdf')]
            }),
            evidence({
              finding: paragraph(`
                A randomized study of 135 cohort members found personal
                exposure report-back raised concern about consumer product
                chemicals and participants took exposure-reducing actions,
                notably for PFAS; in a Nevada cohort, the share who did not
                know how to reduce exposure <strong>fell from 79 to 35 percent</strong> after
                report-back, and one urinary chemical marker fell
                significantly.
              `),
              grade: 'moderate',
              quote: 'report-back increased concern for consumer product chemicals',
              sources: [
                source('Boronow et al. 2023', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP12565'),
                source('Rochester et al. 2024', 'https://www.mdpi.com/1660-4601/21/7/905')
              ]
            })
          ]
        }),
        propLink({
          name: 'Trusted channels could sustain engagement',
          claim: paragraph(`
            A trusted channel could sustain engagement, study participation,
            and calibrated protective behavior, feeding measured outcomes.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The closest PFAS precedent: the court-created, independently
                run C8 Health Project <strong>enrolled 69,030 exposed residents in 13
                months</strong>, returning individual PFOA results to participants. The studies describe the trust mechanism; none tests whether it caused the enrollment.
              `),
              grade: 'weak',
              quote: 'Final study participation was 69,030, enrolled over a 13-month period in 2005-2006',
              sources: [source('Frisbee et al. 2009', 'https://researchonline.lshtm.ac.uk/id/eprint/4315/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The measured exposure reductions in this case flowed from
                litigation, enforcement, and comment, not from any expert-review
                body; the exposure study's growth from 344 to 1,020 participants
                is not attributed to any communication design by any study.
              `),
              grade: 'moderate',
              sources: [source('GenX Exposure Study', 'https://genxstudy.ncsu.edu/study-overview')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'C8 Science Panel',
          where: 'West Virginia and Ohio', when: '2005-2012',
          authority: 'Bilaterally appointed, findings carried automatic legal consequence',
          outcome: paragraph(`
            The bilaterally appointed panel delivered probable-link findings
            for six conditions, built on a companion health project that
            collected blood samples and questionnaires from about 69,000
            exposed residents. The findings precluded DuPont from denying
            causation for class members, and DuPont-funded medical monitoring
            followed.
          `),
          strength: 'strong',
          sources: [source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf')]
        }),
        comparable({
          name: 'Stillwater Good Neighbor Agreement',
          where: 'Montana', when: '2000-present',
          authority: 'Binding oversight, council-hired experts',
          outcome: paragraph(`
            The binding agreement produced company-funded water monitoring more
            stringent than state and federal standards, overseen by experts the
            community council hired; the parties report no arbitration or
            environmental litigation in 24 years, without independent
            evaluation.
          `),
          strength: 'moderate',
          sources: [source('World Resources Institute', 'https://www.wri.org/snapshots/community-benefits-snapshot-stillwater-good-neighbor-agreement')]
        }),
        comparable({
          name: 'Superfund Technical Assistance Grants',
          where: 'United States', when: '1988-present',
          authority: 'Federal funds for community-hired expertise',
          outcome: paragraph(`
            Communities that won the federal grants primarily hired technical
            advisors and kept residents informed; uptake reached 9 percent of
            eligible communities under a lengthy application process.
          `),
          strength: 'moderate',
          sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Federal funding for locally designed enforcement',
      method: 'Federal Funding, Local Design',
      anchor: 'public notice and comment',
      where: 'Congress and EPA for the funding; the NC Environmental Management Commission for the standard-setting it must feed',
      when: paragraph(`
        February 2019, at Consent Order entry. The order created
        facility-scoped machinery (citizen enforcement, a sampling network, the
        exposure study) with no bridge to rulemaking. The intervention is a
        federal grant program funding standing local technical and legal
        capacity whose deliverable is a petition-ready statewide standard
        rather than another facility order. The 2024 to 2026 federal reversal
        shows why the state layer must hold it.
      `),
      description: paragraph(`
        From the 6/8 session: federally funded programs whose enforcement and
        implementation are locally designed, so facility-level wins convert
        into protections that reach the next community.
      `),
      banner: true,
      impactsMeasured: ['Statewide rule adoption'],
      impactsConjectured: ['Durable accountability independent of any single order'],
      links: [
        propLink({
          name: 'Federal funding could build local capacity',
          claim: paragraph(`
            Federal funding could build standing local monitoring, legal, and
            technical capacity.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Superfund technical assistance grants funded community advisors;
                the NC legislature's $5 million to the Policy Collaboratory built
                a network sampling <strong>190 surface water intakes and 158 municipal
                wells</strong>, though that funding was state, not federal.
              `),
              grade: 'moderate',
              sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Grant uptake reached <strong>9 percent of eligible communities</strong> under a
                lengthy, labor-intensive application process; Flint's funding was
                reactive, arriving after exposure.
              `),
              grade: 'moderate',
              sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ]
        }),
        propLink({
          name: 'Local capacity could convert wins into standards',
          claim: paragraph(`
            Standing local capacity could convert facility wins into statewide
            standards.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                Michigan adopted <strong>enforceable drinking water limits for seven
                PFAS compounds</strong>, effective August 3, 2020, following its own
                facility-level crises; Woburn's aftermath produced a state
                cleanup fund and cancer registry.
              `),
              grade: 'weak',
              sources: [source('Michigan Department of Environment, Great Lakes, and Energy', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                This case's own record is the strongest counter-evidence: nine years
                of the project's most extensive participation produced
                <strong>remediation at one plant and no enforceable state standard</strong>, with
                the House bill stalling in the Senate. The one large statistical study also finds regulators pull back their own enforcement where private lawsuits are active.
              `),
              grade: 'moderate',
              sources: [source('Langpap and Shimshack 2010', 'https://ideas.repec.org/a/eee/jeeman/v59y2010i3p235-249.html')]
            })
          ]
        }),
        propLink({
          name: 'Standards could protect the next community',
          claim: paragraph(`
            Once adopted, standards could protect the next community before
            exposure, not after.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Standards operate mechanically once adopted, and even
                disclosure-only mandates <strong>cut violations 30 to 44 percent</strong>.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Adoption does not guarantee persistence: the federal GenX limit
                was <strong>proposed for rescission in May 2026</strong> on procedural grounds.
              `),
              grade: 'moderate',
              sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Michigan PFAS Drinking Water Limits',
          where: 'Michigan', when: '2020',
          authority: 'Enforceable statewide rules',
          outcome: paragraph(`
            Michigan adopted enforceable statewide drinking water rules for
            seven PFAS compounds after its own facility-level crises, the
            generalization North Carolina did not achieve.
          `),
          strength: 'moderate',
          sources: [source('Michigan Department of Environment, Great Lakes, and Energy', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
        }),
        comparable({
          name: 'CDC REACH Program',
          where: 'United States', when: '1999-present',
          authority: 'Federal money, local design, health delivery',
          outcome: paragraph(`
            Two decades of federally funded, locally designed health programs
            left a public record dominated by reach counts, with one fetched
            outcome finding on smoking declines. No instance of federally funded, locally designed
            enforcement with measured outcomes was found anywhere; the absence
            is a finding in its own right.
          `),
          strength: 'weak',
          sources: [source('US Centers for Disease Control and Prevention', 'https://www.cdc.gov/mmwr/preview/mmwrhtml/su6301a2.htm')]
        }),
        comparable({
          name: 'Superfund Technical Assistance Grants',
          where: 'United States', when: '1988-present',
          authority: 'The existing federal-funds-for-local-capacity template',
          outcome: paragraph(`
            The existing federal-funds-for-local-capacity program reached 9
            percent of eligible communities, with documented administrative
            barriers.
          `),
          strength: 'moderate',
          sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Put the public inside the chemical approval review',
      method: 'Stakeholder Participation in Initial Review',
      anchor: 'insufficient information and potential unreasonable risk',
      where: 'EPA Office of Chemical Safety and Pollution Prevention, with the review body seated from affected downstream communities',
      when: paragraph(`
        2009, at the consent order. From the 6/8 session: an FDA-like initial
        review that involves the public, so approval under uncertainty carries
        public assurances about how monitoring will happen and who verifies it.
        The 2009 order set a 99 percent capture requirement and no one checked
        for eight years; a review with public seats builds the constituency
        that checks. This proposal and the notice-at-approval proposal
        intervene at the same moment; one sends notice out, the other brings
        the public in.
      `),
      description: paragraph(`
        Approval of a discharge, drug, or technology seats affected-community
        representatives inside the initial review, with standing to set the
        monitoring plan and demand its verification.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Assurances under uncertainty the public can hold', 'A standing constituency for verification'],
      links: [
        propLink({
          name: 'Public seats could produce monitoring commitments',
          claim: paragraph(`
            Public seats in the approval review could produce monitoring
            commitments under uncertainty.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                In Finnish and Swedish nuclear waste siting, host municipalities
                held formal power at the approval decision with publicly funded
                independent review, and both programs <strong>won community consent and are operating</strong>, where programs that imposed sites stalled. The analogy is imperfect: a different industry and a different kind of decision.
              `),
              grade: 'weak',
              sources: [source('Bellona', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
            })
          ]
        }),
        propLink({
          name: 'A public constituency could get the plan verified',
          claim: paragraph(`
            A public constituency for the monitoring plan could get it
            verified, closing the gap between an order's terms and anyone
            checking them.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                An evaluation of 13 Good Neighbor Agreements between community
                groups and polluting facilities found <strong>most achieved substantial
                implementation</strong> of their monitoring and compliance commitments,
                conditional on community leverage and resources.
              `),
              grade: 'moderate',
              quote: 'The GNAs studied are generally quite effective',
              sources: [source('Kenney et al. 2004', 'https://scholar.law.colorado.edu/cgi/viewcontent.cgi?httpsredir=1&article=1018&context=books_reports_studies')]
            }),
            evidence({
              finding: paragraph(`
                Across more than 130,000 environmental citizen complaints in
                Texas, complaint-triggered investigations increased regulator
                monitoring and <strong>found more, and more severe, violations</strong> than
                routine monitoring.
              `),
              grade: 'moderate',
              quote: 'complaints are associated with sharp increases in regulator monitoring and enforcement',
              sources: [source('Colmer, Evans and Shimshack 2023', 'https://ideas.repec.org/p/cep/cepdps/dp1903.html')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The baseline without a constituency is measured in this case: the
                2009 order contained no scheduled verification, and EPA's <strong>first
                on-site inspection came June 28, 2017</strong>, three weeks after the
                newspaper story.
              `),
              grade: 'strong',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Verified compliance shortens the exposure window',
          claim: paragraph(`
            Verified compliance shortens the exposure window, lowering the PFAS
            in residents' blood and the disease risk it carries.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median fluoroether levels in blood <strong>declined 34 to 65 percent
                within six months</strong> of discharge controls, the measured gain per
                year of earlier enforcement.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Finnish and Swedish Municipal Nuclear Waste Veto',
          where: 'Finland and Sweden', when: '1980s-2020s',
          authority: 'Host municipalities held formal veto power, with funded independent review',
          outcome: paragraph(`
            Host municipalities in Finland and Sweden held a formal veto over nuclear
            waste repository siting. Sweden financed municipal expertise through the
            Nuclear Waste Fund, so Osthammar's review staff were paid by the fund,
            enabling independent assessment rather than industry reliance, and the
            operator reported strong local support. Finland built the world's first
            operating deep repository. The source flags that community acceptance may
            reflect existing nuclear infrastructure rather than rigorous safety
            evaluation.
          `),
          strength: 'moderate',
          sources: [source('Bellona', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
        })
      ],
      sources: []
    })
  ]
});
