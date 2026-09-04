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
      note: 'The law required DuPont to report what it knew about PFOA, but the company reported nothing, and the penalty came 24 years after the earliest violation',
      detail: paragraph(`
        Section 8(e) of the Toxic Substances Control Act (TSCA) required chemical
        companies to report substantial-risk information to the Environmental
        Protection Agency (EPA). The duty covered DuPont and 3M throughout the
        exposure window. Only the companies took part: they decided what to
        report, and no one outside them saw the findings. The rule gave EPA power
        to penalize a company that failed to report. DuPont held internal warnings
        about perfluorooctanoic acid (PFOA) from 1961, worker blood findings from
        the 1970s, and tap water contamination results from 1981. It reported none
        of them. EPA settled with DuPont in 2005 for failures to report going back
        to the 1980s. The settlement imposed a $10.25 million penalty and set no
        enforceable limits on continued production. The record does not show
        whether earlier reporting would have changed how EPA responded.
      `),
      anchors: ['internal warnings', 'failing to report substantial risk'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
    }),
    mechanism({
      name: 'Consent order verification',
      actor: 'EPA, under the 2009 TSCA 5(e) order',
      failure: 'knew-no-act',
      note: 'EPA required 99 percent capture in the 2009 order but did not check compliance for eight years, and no one had a duty to tell people downstream',
      detail: paragraph(`
        The Environmental Protection Agency (EPA) issued a consent order to DuPont
        in 2009 under Section 5(e) of the Toxic Substances Control Act (TSCA).
        The order recognized insufficient information and potential unreasonable
        risk and required the company to capture 99 percent of GenX emissions.
        EPA and DuPont negotiated the order between them. No resident, utility,
        or local government took part. The order gave EPA enforcement power, but
        it set no schedule for the agency to verify compliance. EPA's first
        on-site inspection at Fayetteville Works came on June 28, 2017, three
        weeks after the newspaper story. No mechanism existed to notify anyone
        downstream. The record does not show what the plant actually captured
        between 2009 and 2017.
      `),
      anchors: ['insufficient information and potential unreasonable risk', 'first on-site TSCA compliance monitoring inspection'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
    }),
    mechanism({
      name: 'Discharge permits and public comment',
      actor: 'NC DEQ and its predecessors, under the Clean Water Act',
      failure: 'did-not-know',
      note: 'The permit file never named GenX, so the public comment period at each renewal gave no one anything to object to',
      detail: paragraph(`
        The Clean Water Act required a discharge permit for Fayetteville Works.
        The North Carolina Department of Environmental Quality (DEQ) and its
        predecessor agencies issued the permit and renewed it from 1980 onward.
        Every renewal included a public comment period open to anyone. The
        public could comment, and DEQ made the decision. The permit applications
        contained no reference to GenX or to any chemical name, formula, or
        Chemical Abstracts Service (CAS) registry number that would identify it.
        A retired DEQ supervisor said he would not have understood that the
        process generated GenX as a byproduct. No one could object to a chemical
        the file never named. After 2017 the process worked: DEQ suspended the
        discharge provisions and ran the 2020 permit through draft, comment, and
        hearing. The record does not show whether anyone commented on the
        earlier permits.
      `),
      anchors: ['Discharge continued largely unmonitored'],
      sources: [source('North Carolina Department of Environmental Quality', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
    }),
    mechanism({
      name: 'Federal drinking water monitoring',
      actor: 'EPA, under UCMR3',
      failure: 'acted-no-effect',
      note: 'The federal monitoring program found GenX and published the data, but no one had a duty to tell residents, and the results sat in a database until a reporter found them in 2017',
      detail: paragraph(`
        The Environmental Protection Agency (EPA) ran the third Unregulated
        Contaminant Monitoring Rule (UCMR3), a national program that samples
        drinking water for chemicals not yet regulated. Sampling ran from 2013 to
        2015, and EPA published the data. Water utilities collected the samples.
        Residents played no part. The program could monitor and publish; it could
        not require anyone to act. No duty to notify anyone attached to the
        results. A reporter browsed the database in spring 2017 and broke the
        story. Journalism did the job the rule assigned to no one. The record
        does not show whether any agency or utility reviewed the Cape Fear
        results before 2017.
      `),
      anchors: ['stayed inside agencies and journals'],
      sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
    }),
    mechanism({
      name: 'Drinking water violation notices',
      actor: 'Utilities, under the Safe Drinking Water Act',
      failure: 'no-mechanism',
      note: 'The 24-hour warning rule covers only regulated chemicals, and GenX was unregulated, so the rule required no notice',
      detail: paragraph(`
        The Public Notification Rule under the Safe Drinking Water Act gives
        water suppliers 24 hours to notify people about the most serious
        violations of existing drinking water regulations. The rule has applied
        nationwide since 1998. Utilities such as the Cape Fear Public Utility
        Authority (CFPUA) send the notices, and residents receive them. Notice is
        mandatory for regulated contaminants. GenX was unregulated, so the rule
        required no notice at all. No jurisdiction has been identified with a
        detection-triggered notice law for unregulated contaminants. That claim
        rests on searches, not a legal survey.
      `),
      anchors: ['Toxin taints CFPUA drinking water'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
    }),
    mechanism({
      name: 'Toxics release right-to-know',
      actor: 'EPCRA, the Toxics Release Inventory',
      failure: 'no-mechanism',
      note: 'Right-to-know disclosure covers only listed chemicals, and PFAS were not listed until December 2019',
      detail: paragraph(`
        The Emergency Planning and Community Right-to-Know Act (EPCRA) created
        the Toxics Release Inventory (TRI), which requires facilities to report
        their annual releases of listed chemicals. The Environmental Protection
        Agency (EPA) publishes the reports. Facilities file them, and anyone can
        read them. The program discloses releases; it does not limit them. Every
        measured success of this kind of disclosure involves listed, named
        chemicals. Per- and polyfluoroalkyl substances (PFAS) entered the
        inventory only when the fiscal year 2020 National Defense Authorization
        Act added them on December 20, 2019. During the entire exposure window,
        no disclosure regime named these compounds. The record cannot show what
        a listing before 2019 would have changed.
      `),
      anchors: ['No regulatory disclosure required'],
      sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/toxics-release-inventory-tri-program/addition-certain-pfas-tri-national-defense-authorization-act')]
    }),
    mechanism({
      name: 'Worker safety rules',
      actor: 'OSHA',
      failure: 'no-mechanism',
      note: 'OSHA set no exposure limit for PFOA or GenX, and its whistleblower complaint channel was unreliable',
      detail: paragraph(`
        The Occupational Safety and Health Administration (OSHA) sets workplace
        exposure limits and runs a whistleblower complaint program. No exposure
        standard for perfluorooctanoic acid (PFOA) or GenX existed at Washington
        Works or Fayetteville Works at any point in the exposure window. Workers
        could file complaints, but only OSHA could act on them. A 2010 audit by
        the Government Accountability Office (GAO) found the whistleblower
        program lacked sufficient internal controls, with screening standards
        that varied by region. The record does not show whether any worker filed
        a complaint about PFOA or GenX at either plant, or whether workers knew
        of the companies' internal findings.
      `),
      anchors: ['continued exposure is not tolerable'],
      sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/gao-10-722')]
    }),
    mechanism({
      name: 'Citizen suits',
      actor: 'Cape Fear River Watch, SELC',
      failure: 'worked',
      note: 'Citizen suits could only start after the pollution became public, but once filed they won party status, enforcement power, a $12 million penalty, and 99 percent discharge cuts',
      detail: paragraph(`
        The Clean Water Act and the Toxic Substances Control Act (TSCA) have let
        citizens sue polluters since the 1970s. Cape Fear River Watch, with the
        Southern Environmental Law Center (SELC) as counsel, pursued citizen-suit
        strategies from May 2018. Any affected group could sue; no one selected
        the plaintiffs. A suit made them a party with enforcement power. The
        resulting 2019 consent order produced the best documented results in the
        case: party status for Cape Fear River Watch, independent enforcement
        authority over eleven provisions, a standing obligation on the North
        Carolina Department of Environmental Quality (DEQ) to meet with the
        group, a $12 million penalty, and 99 percent discharge reductions. No one
        could sue before the pollution was disclosed. The order covered one
        facility and set no statewide standard.
      `),
      anchors: ['citizen-suit strategies'],
      sources: [
        source('North Carolina Department of Environmental Quality', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order'),
        source('SELC', 'https://www.selc.org/wp-content/uploads/2022/12/2022-12-05-SELC-timeline-NC-GenX-PFAS-pollution-Chemours.pdf'),
        source('Consent Order', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')
      ]
    }),
    mechanism({
      name: 'Public comment on the consent order',
      actor: 'Residents, downstream utilities, advocacy groups',
      failure: 'worked',
      note: 'About 380 public comments produced itemized changes to the final 2019 consent order',
      detail: paragraph(`
        State law required public notice and comment before a court could enter
        the consent order between the North Carolina Department of Environmental
        Quality (DEQ), Cape Fear River Watch, and Chemours. The comment period
        ran in 2018 and 2019. Anyone could comment. Residents, downstream
        utilities, and advocacy groups filed about 380 comments. The comments
        were advisory; DEQ and the court decided. DEQ's own response-to-comments
        document records the additions the comments produced: downstream intake
        characterization, split sampling authority, and a 20-year filtration
        floor. Advocacy groups supplied the technical translation that made the
        comments substantive. The record does not show which comments produced
        which change, or how the final order would have read without them.
      `),
      anchors: ['public notice and comment'],
      sources: [source('Cape Fear River Watch', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
    })
  ],

  impacts: [
    impact({
      name: 'Exposure through drinking water',
      found: '11/2016',
      headline: paragraph(`
        Roughly 200,000 water customers, and up to 300,000 people downstream,
        drank water carrying GenX at a mean of 631 ng/L. The discharge ran from
        1980 to 2017.
      `),
      measures: paragraph(`
        Roughly 200,000 Cape Fear Public Utility Authority (CFPUA) customers, and
        250,000 to 300,000 people downstream, drank water with mean GenX
        concentrations of 631 ng/L. Levels at the intake reached about 4,500
        ng/L. The discharge ran from 1980 to 2017.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'The discharge is the exposure source' },
        { anchor: 'insufficient information and potential unreasonable risk', strength: 'moderate', note: 'The unverified order let the window run' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Sun et al. (2016) quantified GenX in finished drinking water and
            showed conventional treatment did not remove it.
          `),
          grade: 'strong',
          sources: [source('Sun et al. 2016', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')]
        })
      ]
    }),
    impact({
      name: 'PFAS measured in the blood of residents',
      found: '07/2020',
      headline: paragraph(`
        Fluoroethers made up about a quarter of the summed PFAS in the blood of
        tested Wilmington residents. Median levels fell 34 to 65 percent within
        six months of discharge controls.
      `),
      measures: paragraph(`
        Fluoroethers made up about a quarter of the summed PFAS in the blood of
        344 Wilmington residents. Four legacy PFAS sat above national levels in
        97 percent or more of participants. Median fluoroether levels fell 34 to
        65 percent within six months of discharge controls. Tests did not detect
        GenX above 2 ng/mL; the measured load is fluoroethers and legacy PFAS.
        Blood levels matter because PFAS exposure is linked to disease, recorded
        on its own card.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'Exposure shows up in the blood' },
        { anchor: 'public notice and comment', strength: 'strong', note: 'Controls were followed by measured declines' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Kotlarz et al. (2020) measured PFAS in blood from 344 Wilmington
            residents in the GenX Exposure Study cohort. In participants sampled
            twice, median fluoroether levels fell 34 to 65 percent in six months.
          `),
          grade: 'strong',
          sources: [
            source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')
          ]
        }),
        evidence({
          finding: paragraph(`
            A later NC State analysis of 119 archived blood samples collected
            from Wilmington residents between 2010 and 2016 found PFMOAA at a
            median of 42 ng/mL, the highest of 56 PFAS measured. The samples
            predate the 2017 disclosure.
          `),
          grade: 'moderate',
          quote: 'PFMOAA had the highest median concentration at 42 nanograms per milliliter (ng/mL)',
          sources: [
            source('NC State News', 'https://news.ncsu.edu/2025/10/high-levels-of-short-chain-pfas-found-in-wilmington-residents-blood/')
          ]
        }),
        evidence({
          finding: paragraph(`
            After exposure ended in Arnsberg, Germany, “PFOA levels decreased in all study participants”, falling by half about every 3.26 years. This supports every chain's claim that an earlier cutoff would have lowered blood levels.
          `),
          grade: 'strong',
          quote: 'PFOA levels decreased in all study participants from Arnsberg',
          sources: [
            source('TERA workshop summary of Brede et al. 2010', 'https://tera.org/Alliance%20for%20Risk/Workshop%20Xll/CaseSummaryPFOA.pdf')
          ]
        })
      ]
    }),
    impact({
      name: 'Disease linked to PFAS exposure',
      found: '04/2012',
      headline: paragraph(`
        The PFAS in residents' blood carry disease risk. The Wilmington cohort
        shows higher cholesterol, and large PFOA studies elsewhere show kidney
        and testicular cancer.
      `),
      measures: paragraph(`
        In the Wilmington cohort, residents with more PFOS and PFNA in their
        blood had higher total and non-HDL cholesterol, about 5 to 6 mg/dL per
        quartile, with the strongest link in older adults. Twelve percent of
        tested residents exceeded the blood level at which the National
        Academies recommend medical screening. PFOA was elevated in 97 percent
        or more of tested residents. For PFOA, the C8 Science Panel found
        probable links to kidney cancer, testicular cancer, thyroid disease,
        ulcerative colitis, high cholesterol, and pregnancy-induced
        hypertension. The International Agency for Research on Cancer (IARC)
        classified PFOA carcinogenic to humans in 2023. In animal studies, GenX
        produces liver and pancreatic tumors. No human disease study of GenX
        exists.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'moderate', note: 'Cholesterol associations are measured in this cohort; cancer evidence comes from PFOA populations elsewhere' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Rosen et al. (2022) measured blood fats in 326 GenX Exposure Study participants ages 6 to 86. They found “PFNA and PFOS were associated with higher levels of total and non-HDL cholesterol, with associations larger in magnitude among older adults”, about 5 to 6 mg/dL per quartile.
          `),
          grade: 'moderate',
          quote: 'PFNA and PFOS were associated with higher levels of total and non-HDL cholesterol, with associations larger in magnitude among older adults',
          sources: [source('Rosen et al. 2022', 'https://pubmed.ncbi.nlm.nih.gov/36069575/')]
        }),
        evidence({
          finding: paragraph(`
            The C8 Science Panel worked from blood samples and health data on about 69,000 PFOA-exposed residents. It found probable links to six conditions, including kidney and testicular cancer. The International Agency for Research on Cancer (IARC) classified PFOA carcinogenic to humans in 2023, with “limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)”.
          `),
          grade: 'strong',
          quote: 'limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)',
          sources: [
            source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
            source('Boston et al. 2025', 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1532277/full'),
            source('International Agency for Research on Cancer', 'https://www.iarc.who.int/news-events/iarc-monographs-evaluate-the-carcinogenicity-of-perfluorooctanoic-acid-pfoa-and-perfluorooctanesulfonic-acid-pfos')
          ]
        }),
        evidence({
          finding: paragraph(`
            The 2024 GenX Exposure Study report to participants applies the National Academies' screening thresholds, since “the NASEM published recommendations for medical monitoring of PFAS-exposed people based on the total (sum) concentration of 7 specific PFAS in blood”. In the study, 97 percent of participants sat above 2 ng/mL summed PFAS and 12 percent above 20 ng/mL, the level at which the Academies recommend medical monitoring.
          `),
          grade: 'moderate',
          quote: 'the NASEM published recommendations for medical monitoring of PFAS-exposed people based on the total (sum) concentration of 7 specific PFAS in blood',
          sources: [source('GenX Exposure Study', 'https://genxstudy.ncsu.edu/wp-content/uploads/sites/149/2025/11/Deidentified_2024_PFAS_ReportBack.pdf')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            No human disease study of GenX exists. EPA's toxicity assessment rests on animal studies, in which “the liver is the primary target organ for toxicity from oral exposure”. The cohort's cholesterol links track legacy PFAS, not fluoroethers; two fluoroethers went with higher HDL, the protective kind of cholesterol.
          `),
          grade: 'moderate',
          quote: 'the liver is the primary target organ for toxicity from oral exposure',
          sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/system/files/documents/2023-03/GenX-Tox-Assessment-technical-factsheet-March-2023-Update.pdf')]
        })
      ]
    }),
    impact({
      name: 'Filtration costs paid by water customers',
      found: '06/2022',
      headline: paragraph(`
        Water customers paid for the cleanup. Carbon filtration in Wilmington
        cost $82.8 million, funded by an 8 percent rate increase, and reverse
        osmosis in Brunswick County cost $158.7 million.
      `),
      measures: paragraph(`
        The Cape Fear Public Utility Authority (CFPUA) built granular activated
        carbon filtration for $43 million, or $82.8 million with maintenance,
        and paid for it with an 8 percent customer rate increase. Brunswick
        County built reverse osmosis for $158.7 million.
      `),
      from: [
        { anchor: 'Toxin taints CFPUA drinking water', strength: 'strong', note: 'Disclosure forced the treatment decision onto ratepayers' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            News reporting at the time documented the bills and who paid them: $82.8 million at CFPUA, funded through an 8 percent customer rate increase, and $158.7 million in Brunswick County.
          `),
          grade: 'strong',
          sources: [
            source('WUNC', 'https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill'),
            source('WUNC', 'https://www.wunc.org/politics/2025-04-17/wilmington-ted-davis-chemours-pfas-cape-fear'),
            source('Port City Daily', 'https://portcitydaily.com/local-news/2022/10/11/cfpua-reports-pfas-free-water-with-new-filtration-system-online/')
          ]
        })
      ]
    }),
    impact({
      name: 'Discharge cut 99 percent, a $12 million penalty',
      found: '02/2019',
      headline: paragraph(`
        The 2019 Consent Order cut air emissions 99 percent by the end of 2019,
        imposed a $12 million penalty, and delivered alternative drinking water
        to affected well owners.
      `),
      measures: paragraph(`
        The 2019 Consent Order cut air emissions 99 percent by the end of 2019
        through a thermal oxidizer operating at 99.99 percent efficiency. It
        imposed a $12 million penalty and delivered alternative drinking water
        to affected well owners. Fluoroether levels in residents' blood fell 34
        to 65 percent within six months of discharge controls.
      `),
      from: [
        { anchor: 'public notice and comment', strength: 'strong', note: 'The enforceable order produced the reductions' },
        { anchor: 'citizen-suit strategies', strength: 'strong', note: 'The suit made the community a party with enforcement power' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            The consent order and state enforcement records document the terms and the results: a $12 million penalty and 99 percent discharge reductions.
          `),
          grade: 'strong',
          sources: [source('Consent Order', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
        })
      ]
    }),
    impact({
      name: 'Statewide rule adoption',
      found: '05/2026',
      headline: paragraph(`
        Nine years of the case's most extensive participation produced
        remediation at one plant but no enforceable statewide standard. In May
        2026 the federal government proposed rescinding the GenX limit.
      `),
      measures: paragraph(`
        Nine years of the case's most extensive participation produced
        remediation at one plant and no enforceable North Carolina surface water
        standard. The state commission set aside surface water standards in
        favor of facility-authored minimization plans with no compliance
        deadline. In May 2026 the federal government proposed rescinding the
        GenX drinking water limit.
      `),
      from: [
        { anchor: 'public notice and comment', strength: 'moderate', note: 'Facility-scoped machinery, with no bridge to rulemaking' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            The federal government rescinded regulatory determinations for four
            PFAS substances in a May 2026 Federal Register notice; NC House Bill
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
      name: 'Give plant workers a protected channel to report chemical hazards to regulators',
      method: 'Protected worker reporting channel',
      summary: 'Workers can report substantial-risk findings directly to EPA through a channel with anti-retaliation protection and a duty on the agency to act.',
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
        Give workers at chemical plants a protected channel to report substantial-risk findings directly to EPA, with anti-retaliation protection. The agency must log, investigate, and publish what it receives, within existing trade-secret and occupational-safety law. Congress writes the duty into the chemicals statute; EPA and the OSHA whistleblower program administer it. Any worker can file at any time, and the report triggers a required agency response, so the regulator must act; the role is not advisory. The agency publishes its findings. The intervention dates to 1980. By then DuPont had confirmed elevated PFOA in its own workers, concluded internally that continued exposure was not tolerable, and begun discharging into the Cape Fear. The workers who saw the harm first had no channel.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Corporate accountability', 'Worker empowerment'],
      links: [
        propLink({
          name: 'A protected channel could produce more disclosures',
          claim: paragraph(`
            A protected, structured reporting channel could produce more disclosures of concealed findings; employees are the largest single detector of corporate fraud, but few report without strong protection.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Across all reported frauds at large US firms 1996 to 2004,
                employees were the single largest detector class:
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
                Blowing the whistle usually costs an employee more than it gains them, so few report without strong protection; GAO found “OSHA lacks sufficient internal controls to ensure that the whistleblower program operates as intended”.
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
            Worker disclosure could reach the regulator and produce scrutiny decades before litigation discovery did; 3M's 1998 disclosure did trigger EPA's first sustained look at PFAS.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                3M's 1998 disclosure letter triggered EPA's first sustained look at PFAS in blood and a compliance audit that collected over 700 studies. Firms targeted by an OSHA retaliation complaint showed measurably fewer irregularities afterward, and “those deterrent effects lasted for at least two full years after the whistleblower lodged the complaint”.
              `),
              grade: 'moderate',
              quote: 'those deterrent effects lasted for at least two full years after the whistleblower lodged the complaint',
              sources: [source('Wilde 2017', 'https://www.sciencedaily.com/releases/2017/01/170103151133.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                In this case the sanction arrived 24 years after the earliest violation and set no enforceable limits on continued production. Disclosure that reached only the agency might have sat for years, as the 2012 detection findings did.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier information could mean earlier control',
          claim: paragraph(`
            A regulator that knew earlier could have controlled the discharge earlier; this depends on the agency acting, which in this record took years even after disclosure.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Once information became public in June 2017, DEQ suspended the
                discharge-authorizing permit provisions effective November 30,
                2017, and the 2019 order produced 99 percent reductions. When
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
                regulator knowledge alone: regulators held the 2016 findings
                without acting.
              `),
              grade: 'moderate',
              sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
            })
          ]
        }),
        propLink({
          name: 'Less exposure means less PFAS in blood and lower disease risk',
          claim: paragraph(`
            An earlier cutoff lowers cumulative exposure and the PFAS in residents' blood, and PFAS exposure is linked to higher cholesterol, thyroid disease, and kidney and testicular cancer; these links are measured.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median fluoroether levels in blood declined 34 to 65 percent
                within six months of discharge controls; after exposure ends, PFOA levels in blood fall by half about every 3.26 years.
              `),
              grade: 'strong',
              sources: [
                source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837'),
                source('TERA workshop summary of Brede et al. 2010', 'https://tera.org/Alliance%20for%20Risk/Workshop%20Xll/CaseSummaryPFOA.pdf')
              ]
            }),
            evidence({
              finding: paragraph(`
                The disease link is measured for PFOA at population scale: the
                C8 Science Panel found probable links to kidney and testicular
                cancer among about 69,000 exposed residents, and the Wilmington
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
            Purdy’s resignation letter to EPA helped trigger the investigation
            of perfluorinated chemicals (PFCs); 3M announced the PFOS phaseout
            in 2000. He acted alone, without legal protection, and late. The
            record documents the outcome his disclosure moved.
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
            routine immunity made disclosure normal professional behavior. No
            one has measured the effect on hazards, and changes in technology
            and regulation over the same years make that effect hard to
            separate.
          `),
          strength: 'moderate',
          sources: [source('US Federal Aviation Administration', 'https://www.faasafety.gov/files/events/EA/EA23/2010/EA2334954/NASA_Reporting.pdf')]
        }),
        comparable({
          name: 'OSHA Whistleblower Program Audit',
          where: 'United States', when: '2010',
          authority: 'The existing statutory channel',
          outcome: paragraph(`
            The Government Accountability Office (GAO) audited the existing
            statutory channel, OSHA’s whistleblower program. It found the
            program lacked sufficient internal controls and could not measure
            its own outcomes. That is the measured baseline the proposal must
            exceed, not copy.
          `),
          strength: 'strong',
          sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/gao-10-722')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let residents report contamination signs and require an investigation',
      method: 'Resident reporting with investigation trigger',
      summary: 'Residents can report suspected contamination to a standing local body that must investigate, with community water sampling run alongside a laboratory partner.',
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
        Give residents a standing local body, run with the state environmental agency and the water utility, that must investigate resident reports of suspected contamination and support community water sampling with a laboratory partner. Anyone can report; the body must respond in writing within a set time and publish sampling results. A resident report requires an investigation, but it does not give residents a decision right, and state and federal water standards still govern the response. The 1998 anchor is Wilbur Tennant's documentation of cattle deaths in West Virginia, the first time someone in this record noticed something was off. On the Cape Fear, GenX at parts-per-trillion levels gave residents nothing to observe before 2012. A 2013 to 2015 community sampling program, once federal monitoring data existed, is the defensible local deployment.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Experiential knowledge honored', 'Community standing'],
      links: [
        propLink({
          name: 'Resident reports could trigger investigation before official detection',
          claim: paragraph(`
            Resident reports of suspicions and symptoms could trigger investigation before formal institutional detection; most reported cancer clusters find no environmental cause, so the trigger must tolerate false alarms.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Over 50,000 citizen complaints to the Texas environmental
                regulator increased inspections and notices of
                violation at the targeted facilities.
              `),
              grade: 'moderate',
              sources: [
                source('Evans and Shimshack 2018', 'https://www.aeaweb.org/conference/2018/preliminary/paper/eSR58nDd')
              ]
            }),
            evidence({
              finding: paragraph(`
                In Woburn, Massachusetts, parents counted the childhood leukemia cases in their neighborhood and pressed for an investigation. A Harvard study then confirmed children were developing leukemia at four times the expected rate, and linked the cases to two contaminated town wells.
              `),
              grade: 'moderate',
              sources: [
                source('Dan Kennedy, Woburn Files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')
              ]
            }),
            evidence({
              finding: paragraph(`
                Wilbur Tennant, a West Virginia farmer, videotaped his cattle sickening and dying near a DuPont landfill. His documentation became the lawsuit whose court files forced DuPont's hidden PFOA studies into the open.
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
          name: 'Reports could have produced earlier detection on the Cape Fear',
          claim: paragraph(`
            On the Cape Fear, resident reports would have produced earlier detection only if there was something to observe; before 2012 there was not, so this link depends on community sampling with a laboratory partner.
          `),
          strength: 'unstudied',
          evidence: [
            evidence({
              finding: paragraph(`
                Where residents sampled with a lab partner, they detected what
                official monitoring missed. Flint residents collected water
                samples from 269 homes, and Virginia Tech ran the analysis.
                That dataset exposed lead contamination that official sampling
                had not found. The authors report the citizen datasets were
                “the only internally consistent measures of water lead levels”.
              `),
              grade: 'moderate',
              quote: 'citizen science datasets collected without cheats represented the only internally consistent measures of water lead levels',
              sources: [source('Roy and Edwards 2019', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')]
            }),
            evidence({
              finding: paragraph(`
                A community sensor network in Imperial County, California identified 1,426 fine-particle pollution episodes against 116 found by government monitors: “Of the 1426 episodes identified by the community sensors, 723 (51%) were not observed by the government monitors”. The setting differs: air, not water, and sensors, not symptoms. The detection gain is measured.
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
                sign anyone could notice. No documented resident report preceded
                the 2012 detection. The first observable sign of a threat was a
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
            Earlier detection could bring the response forward, lowering exposure, the PFAS in residents' blood, and the disease risk it carries.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                This case supplies the measurement. After the June 2017 story the state acted within a week, and blood levels fell 34 to 65 percent within six months of discharge controls.
              `),
              grade: 'strong',
              sources: [
                source('WRAL', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/'),
                source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Detection alone stalled inside agencies for five years. The
                2017 response ran on press coverage.
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
            Starting in 2005, residents sampled their air with homemade bucket
            kits and found benzene. The state's follow-up study, begun in July
            2007, found elevated benzene and formaldehyde. A jury convicted the company on 14 of
            19 charges, with a $12.5 million penalty. Measured benzene fell 86
            percent at the industrial monitor and 68 percent at the residential
            monitor. The estimated excess cancer risk at the industrial
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
            Residents sampled their own taps, and Virginia Tech ran the analysis. They returned 84 percent of 300 kits (252 samples; 269 homes in the published analysis). Their data showed the water carried lead at hazardous levels, a 90th percentile of 25.2 ppb against the 15 ppb federal action level. Official sampling showed no violation. That finding preceded the January 2016 federal emergency and more than $600 million in relief.
          `),
          strength: 'strong',
          sources: [source('Flint Water Study', 'https://flintwaterstudy.org/information-for-flint-residents/results-for-citizen-testing-for-lead-300-kits/')]
        }),
        comparable({
          name: 'Woburn Leukemia Cluster',
          where: 'Woburn, MA', when: '1970s-1986',
          authority: 'Community observation plus academic partnership',
          outcome: paragraph(`
            Parents counted the childhood leukemia cases in their neighborhood. A Harvard study run with community volunteers confirmed children were developing leukemia at four times the expected rate. The confirmed cluster produced a settlement, a Superfund cleanup, a state cleanup fund, and a state cancer registry.
          `),
          strength: 'moderate',
          sources: [source('Dan Kennedy, Woburn Files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Notify downstream residents whenever a chemical discharge is approved',
      method: 'Statutory notice at discharge approval',
      summary: 'Every approval to discharge a chemical carries a duty to notify affected water users and attach a public local monitoring plan.',
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
        Require EPA, whenever it approves the manufacture or discharge of a chemical, to notify the downstream public by name of the substance and attach a public local monitoring plan, within existing trade-secret law. The duty falls on the agency and the permit holder; affected water users, utilities, and local governments receive the notice and the monitoring results. Notice is mandatory and immediate at approval; the public's role is to receive, monitor, and act, not to decide. Federal and state discharge standards stay in place. The 2009 consent order is the moment the federal government both recognized potential unreasonable risk from GenX and authorized its manufacture. Notice attached to that order would have reached every affected water user eight years before the June 2017 newspaper story. The 1980 permit file contained no chemical name a commenter could act on.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure', 'Filtration costs paid by water customers'],
      impactsConjectured: ['Externalities borne knowingly rather than unknowingly', 'Procedural fairness'],
      links: [
        propLink({
          name: 'Notice at approval could produce public knowledge from day one',
          claim: paragraph(`
            A notification duty attached to the approval could produce public knowledge from day one; in this record the approval file gave the public nothing to act on.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The machinery exists for regulated contaminants: the drinking
                water Public Notification Rule gives suppliers 24 hours for the
                most serious violations.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The rule does not cover unregulated contaminants, and no
                jurisdiction attaches public notice to a chemicals consent
                order. No one has studied this as enacted policy.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ]
        }),
        propLink({
          name: 'Public knowledge changes behavior',
          claim: paragraph(`
            Public knowledge of contamination changes behavior: avoidance, monitoring, market and political pressure; measured in bottled water sales and housing prices.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Drinking water violations raise bottled water sales, with “an increase in bottled water sales of 22 percent from violations due to microorganisms and 17 percent from violations due to elements and chemicals”. Industrial plant openings cut nearby housing values 11 percent within half a mile. Both show people act on contamination risks once they know about them.
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
                Avoiding contaminated water costs money: bottled water bought in response to violations cost about $60 million nationwide in 2005. The measured responses concentrate within a mile of a plant, while Cape Fear exposure ran 100 miles downstream.
              `),
              grade: 'moderate',
              sources: [
                source('Graff Zivin et al. 2011', 'https://www.nber.org/papers/w16695'),
                source('Currie et al. 2015', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')
              ]
            })
          ]
        }),
        propLink({
          name: 'Disclosure pressure reduces discharges',
          claim: paragraph(`
            Disclosure requirements reduce firm discharges before enforcement arrives; measured in water-quality reporting and chemical-use disclosure.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Disclosure requirements led to measurable changes in behavior. Mailed water quality reports “reduced total violations by between 30% and 44%” and severe health violations by 40–57%. In Massachusetts, companies required to report chemical use reduced on-site releases by 92%. In Germany, 61% of surveyed companies using listed substances reported replacing them with alternatives after REACH listed them.
              `),
              grade: 'strong',
              quote: 'reduced total violations by between 30% and 44%',
              sources: [
                source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html'),
                source('Toxics Use Reduction Institute', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf'),
                source('Journal of Business Chemistry', 'https://www.businesschemistry.org/article/impacts-of-the-reach-candidate-list-of-substances-subject-to-authorisation-the-reputation-mechanism-and-empirical-results-on-behavioral-adaptations-of-german-supply-chain-actors/')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Disclosure requirements depend on knowing which chemical is involved. The Toxics Release Inventory did not list PFAS until December 2019, and the Fayetteville permit file did not identify the chemical at all. Without that information, regulators could not apply chemical-specific disclosure requirements.
              `),
              grade: 'moderate',
              sources: [source('North Carolina Department of Environmental Quality', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Reduced discharge lowers exposure, blood levels, and filtration costs',
          claim: paragraph(`
            Reduced discharge lowers cumulative exposure, the PFAS in residents' blood, the disease risk it carries, and the filtration costs that fell on water customers.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                The declines in blood levels after controls and the $82.8
                million and $158.7 million filtration bills give measured
                numbers for what the exposure did and for what an earlier
                cutoff would have avoided.
              `),
              grade: 'strong',
              sources: [
                source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837'),
                source('WUNC', 'https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill')
              ]
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
            Under the Toxics Release Inventory’s mandatory annual public
            disclosure, on-site air releases of reportable chemicals fell 52
            percent, or 838 million pounds, from 2003 to 2013, and 21 percent
            since 2014 with a 32 percent air decline. Facilities report the
            quantities themselves, and the attribution to disclosure rests
            partly on literature this project could not fetch.
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
      name: 'Require public notice when a contaminant is detected in drinking water',
      method: 'Statutory notice triggered by detection',
      summary: 'When a peer-reviewed detection above a threshold reaches a regulator, the agency must notify the affected public within weeks.',
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
        Require a regulator that receives a peer-reviewed detection of a contaminant above a set threshold in drinking water to notify the affected public within weeks, whether or not the substance is yet regulated. Congress writes the duty into the drinking-water or chemicals statute; EPA executes it, with the state agency as the fallback trigger. The public's role is to receive notice; utilities and local governments then act under existing standards. Notice is mandatory, not discretionary. On the Cape Fear, EPA's own researchers detected GenX in August 2012 and the finding stayed inside agencies and journals until a newspaper story in June 2017. A federal trigger on the 2012 detection cuts five years of exposure; a state trigger on the November 2016 quantified paper still cuts about seven months. Notice would then come from an institution, not from a newsroom.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Journalism removed as a single point of failure', 'Institutional trust'],
      links: [
        propLink({
          name: 'A statutory trigger could turn a detection into public notice',
          claim: paragraph(`
            A statutory trigger could convert a regulator's receipt of a qualifying detection into public notice, in 2012 instead of 2017; the 24-hour machinery exists for regulated contaminants, and one reporter performed the function once by browsing public data.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The federal monitoring (UCMR3) data were public, and one
                reporter performed the function once by browsing them: “he
                loaded the data to see what would pop up for the Wilmington
                area. There were some local hits”. The 24-hour notification
                machinery exists for regulated contaminants.
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
                unregulated contaminants, so the mechanism is untested as
                enacted policy. The no-jurisdiction claim rests on searches, not
                a legal survey.
              `),
              grade: 'moderate',
              sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ]
        }),
        propLink({
          name: 'Public knowledge produces rapid agency response',
          claim: paragraph(`
            Once the public knew, agency response followed within weeks; this timetable is directly observed in 2017.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                The case measures this timetable. The story ran June 7, 2017.
                The state opened its investigation June 14, lowered its health
                goal 99.8 percent in five weeks, and announced within two weeks
                that the discharge would stop.
              `),
              grade: 'strong',
              sources: [source('WRAL', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2017 response ran on press coverage. No one has tested
                whether a statutory notice without a front page produces the
                same seven-day response. Mailed notices alone cut utility
                violations 30 to 44 percent, a real but modest response next to
                the near-total one of 2017.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier response could avoid years of exposure',
          claim: paragraph(`
            Earlier response could avoid up to five years of exposure at a mean of 631 ng/L, bringing forward the measured declines in blood levels and the disease risk they carry.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Blood samples stored from before disclosure show what the
                window produced: a PFMOAA median of 42 ng/mL, the highest of 56
                PFAS measured. Declines of 34 to 65 percent in the six months
                after controls show the gain per year of earlier cutoff.
              `),
              grade: 'strong',
              sources: [
                source('NC State News', 'https://news.ncsu.edu/2025/10/high-levels-of-short-chain-pfas-found-in-wilmington-residents-blood/'),
                source('Kotlarz et al. 2020', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')
              ]
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
            Resident sampling made the contamination public. Emergency
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
            newspaper performed the public-notice function. This proposal writes
            that sequence into law so notice does not depend on a newsroom.
          `),
          strength: 'strong',
          sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let affected residents appoint independent experts to verify health data',
      method: 'Community-appointed independent review',
      summary: 'In an emergency health assessment, community-appointed reviewers can split water and blood samples and publish their own findings.',
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
        Give affected residents the right to appoint their own reviewers whenever the state sets an emergency health screening level or returns exposure results. The reviewers can split water and blood samples, verify the state's analysis, and publish findings through a channel the community chose. The state health and environmental departments keep authority over the screening level and the response; the reviewers' role is verification and translation, and the state must answer their findings in writing. The affected community makes the appointments, paid by the responsible party or the state. In June to July 2017 in Wilmington, the state's health screening number moved from 71,000 to 140 parts per trillion in five weeks, and a key meeting between regulators, Chemours, and officials was closed to the public. The June 8 session framed this as the route around authorities the public distrusts.
      `),
      banner: true,
      impactsMeasured: [],
      impactsConjectured: ['Legitimacy of the response', 'Repaired trust', 'Sustained study participation and calibrated protective behavior'],
      links: [
        propLink({
          name: 'Community-appointed panels could produce findings that carry weight',
          claim: paragraph(`
            Independently appointed panels could produce credible findings that carry consequence; the C8 Science Panel, jointly appointed under a court settlement, is the precedent.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The C8 Science Panel, jointly appointed under a court settlement,
                delivered probable-link findings for six conditions, reporting
                “there is a probable link between exposure to C8 (also known as
                PFOA) and testicular cancer and kidney cancer”. The findings
                carried automatic legal consequence: DuPont agreed not to contest
                general causation for those diseases in class members' suits.
              `),
              grade: 'moderate',
              quote: 'there is a probable link between exposure to C8 (also known as PFOA) and testicular cancer and kidney cancer',
              sources: [
                source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
                source('In re DuPont C-8 Personal Injury Litigation, S.D. Ohio 2016', 'https://caselaw.findlaw.com/court/us-dis-crt-s-d-ohi-eas-div/1967795.html')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                A court appointed the C8 panel; the community did not choose it.
                The panel took seven years, far too long for an emergency
                response. The search found no community-chosen equivalent with
                measured outcomes.
              `),
              grade: 'moderate',
              sources: [source('C8 Science Panel', 'https://www.c8sciencepanel.org/')]
            })
          ]
        }),
        propLink({
          name: 'Independent verification could build a trusted channel for risk information',
          claim: paragraph(`
            Independent verification could improve trusted communication of risk; the report-back literature documents intentions and self-reports, not measured outcomes.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The report-back literature finds that returning personal results
                strengthens relationships and supports trust in science. It
                calls report-back “a powerful tool for increasing understanding
                of environmental health”. The documented effects are stated
                intentions and self-reports, not measured outcomes.
              `),
              grade: 'weak',
              quote: 'Personal exposure report-back is a powerful tool for increasing understanding of environmental health',
              sources: [source('Brody et al. 2014', 'https://link.springer.com/content/pdf/10.1186/1476-069X-13-40.pdf')]
            }),
            evidence({
              finding: paragraph(`
                Boronow et al. (2023) tested how returning individual or study-wide exposure results changed participants' knowledge, concern, and exposure-reducing behavior for endocrine-disrupting chemicals. In a Nevada cohort, the share who did not know how to reduce exposure fell from 79 to 35 percent after report-back, and one urinary chemical marker fell significantly.
              `),
              grade: 'moderate',
              sources: [
                source('Boronow et al. 2023', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP12565'),
                source('Rochester et al. 2024', 'https://www.mdpi.com/1660-4601/21/7/905')
              ]
            })
          ]
        }),
        propLink({
          name: 'A trusted channel could sustain study participation and protective behavior',
          claim: paragraph(`
            A trusted channel could sustain engagement, study participation, and calibrated protective behavior; the C8 Health Project enrolled 69,030 residents, but no study tests whether trust caused it.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The closest PFAS precedent is the court-created, independently run C8 Health Project. It returned individual PFOA results to participants, and “final study participation was 69,030, enrolled over a 13-month period in 2005-2006”. The studies describe the trust mechanism; none tests whether it caused the enrollment.
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
                body.
              `),
              grade: 'moderate',
              sources: [source('Consent Order', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'C8 Science Panel',
          where: 'West Virginia and Ohio', when: '2005-2012',
          authority: 'Appointed jointly by both sides; findings carried automatic legal consequence',
          outcome: paragraph(`
            The panel, three epidemiologists jointly selected by DuPont and the
            class, delivered probable-link findings for six conditions. It built
            on a companion health project that collected blood samples and
            questionnaires from about 69,000 exposed residents. Under the
            settlement, DuPont agreed not to contest general causation for the
            linked diseases in class members' injury suits.
          `),
          strength: 'strong',
          sources: [
            source('C8 Science Panel', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
            source('In re DuPont C-8 Personal Injury Litigation, S.D. Ohio 2016', 'https://caselaw.findlaw.com/court/us-dis-crt-s-d-ohi-eas-div/1967795.html')
          ]
        }),
        comparable({
          name: 'Stillwater Good Neighbor Agreement',
          where: 'Montana', when: '2000-present',
          authority: 'Binding oversight, council-hired experts',
          outcome: paragraph(`
            The binding agreement produced company-funded water monitoring
            stricter than state and federal standards, overseen by experts the
            community council hired. The parties report no arbitration or
            environmental litigation in 24 years. No independent evaluation
            exists.
          `),
          strength: 'moderate',
          sources: [source('World Resources Institute', 'https://www.wri.org/snapshots/community-benefits-snapshot-stillwater-good-neighbor-agreement')]
        }),
        comparable({
          name: 'Superfund Technical Assistance Grants',
          where: 'United States', when: '1988-present',
          authority: 'Federal funds for community-hired expertise',
          outcome: paragraph(`
            Communities that won the federal grants mostly hired technical
            advisors and kept residents informed. Uptake reached 9 percent of
            eligible communities under a lengthy application process.
          `),
          strength: 'moderate',
          sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Fund standing local monitoring and legal capacity with federal grants',
      method: 'Federally funded citizen oversight capacity',
      summary: 'A federal grant program pays for community-governed monitoring, technical, and legal staff whose deliverable is a petition for a statewide standard.',
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
        Create a federal grant program that funds standing, community-governed monitoring, technical, and legal capacity in affected regions. The deliverable is a set of petition-ready proposals for statewide standards, not another facility-specific order. Congress and EPA fund it; a local board of residents, utilities, and local governments directs the work; the state Environmental Management Commission remains the body that adopts standards. Residents' role is oversight of implementation and of the data, and the board must publish its monitoring results and petitions. The anchor is February 2019, when the Consent Order created facility-scoped machinery, citizen enforcement, a sampling network, and the exposure study, with no bridge to rulemaking. The 2024 to 2026 federal reversal on PFAS limits shows why a state layer must hold the standard.
      `),
      banner: true,
      impactsMeasured: ['Statewide rule adoption'],
      impactsConjectured: ['Durable accountability independent of any single order'],
      links: [
        propLink({
          name: 'Federal funding could build standing local capacity',
          claim: paragraph(`
            Federal funding could build standing local monitoring, legal, and technical capacity; the evidence comes from Good Neighbor Agreements, where implementation depended on community leverage and resources.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Superfund technical assistance grants funded community advisors.
                The NC legislature's $5 million to the Policy Collaboratory built
                a network sampling 190 surface water intakes and 158 municipal
                wells. That funding was state, not federal.
              `),
              grade: 'moderate',
              sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Grant uptake reached 9 percent of eligible communities under a
                lengthy, labor-intensive application process. Flint's funding
                arrived after exposure, not before.
              `),
              grade: 'moderate',
              sources: [source('US Government Accountability Office', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ]
        }),
        propLink({
          name: 'Local capacity could turn facility wins into statewide standards',
          claim: paragraph(`
            Standing local capacity could convert facility-level wins into statewide standards through petitions; this route is weakly evidenced and depends on the state commission acting.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                Michigan adopted enforceable drinking water limits for seven
                PFAS compounds, effective August 3, 2020, after its own
                facility-level crises. Woburn's aftermath produced a state
                cleanup fund and cancer registry.
              `),
              grade: 'weak',
              sources: [source('Michigan Department of Environment, Great Lakes, and Energy', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                This case's own record is the strongest counter-evidence. Nine
                years of the project's most extensive participation produced
                remediation at one plant and no enforceable state standard, and
                the House bill stalled in the Senate. The one large statistical
                study also finds regulators pull back their own enforcement
                where private lawsuits are active.
              `),
              grade: 'moderate',
              sources: [source('Langpap and Shimshack 2010', 'https://ideas.repec.org/a/eee/jeeman/v59y2010i3p235-249.html')]
            })
          ]
        }),
        propLink({
          name: 'Adopted standards could protect the next community before exposure',
          claim: paragraph(`
            Once adopted, standards could protect the next community before exposure rather than after; North Carolina's own rule adoption is the measured case.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Standards operate mechanically once adopted, and even
                disclosure-only mandates cut violations 30 to 44 percent.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Adoption does not guarantee persistence. In May 2026 the federal
                government proposed rescinding the GenX limit on procedural
                grounds.
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
            seven PFAS compounds after its own facility-level crises. That is
            the statewide step North Carolina did not take.
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
            left a public record made up mostly of counts of people reached,
            with one outcome finding on smoking declines. The search found no
            instance anywhere of federally funded, locally designed enforcement
            with measured outcomes. That absence is a finding in its own right.
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
      name: 'Seat affected residents in the review that approves a chemical discharge',
      method: 'Community seats in permit review',
      summary: 'Representatives of downstream communities sit on the initial approval review with standing to set the monitoring plan and demand its verification.',
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
        Give representatives of downstream communities designated seats in EPA's initial review of a chemical discharge, with standing to set the monitoring plan and to demand its verification, while the agency keeps the approval decision. The seats are filled from affected water systems and residents before the review opens; representatives see the same submissions as the agency, within trade-secret law, and their monitoring conditions become permit conditions. Participation is shared over monitoring and advisory over approval, and the agency must publish the plan and each verification. The anchor is the 2009 consent order, which set a 99 percent capture requirement that no one checked for eight years. The June 8 session described an FDA-like initial review that involves the public. This proposal and the notice-at-approval proposal intervene at the same moment: one sends notice out, the other brings the public in.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Disease linked to PFAS exposure'],
      impactsConjectured: ['Assurances under uncertainty the public can hold', 'A standing constituency for verification'],
      links: [
        propLink({
          name: 'Public seats could produce monitoring commitments under uncertainty',
          claim: paragraph(`
            Community seats in the approval review could produce monitoring commitments where the science is uncertain; the closest evidence is negotiated agreements, not permit reviews.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                In Finnish and Swedish nuclear waste siting, host municipalities
                held formal power at the approval decision, with publicly funded
                independent review. Both programs won community consent and are
                operating, while programs that imposed sites stalled. The analogy
                is imperfect: a different industry and a different kind of
                decision.
              `),
              grade: 'weak',
              sources: [source('Bellona', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
            })
          ]
        }),
        propLink({
          name: 'A public constituency could get the plan verified',
          claim: paragraph(`
            A standing public constituency for the monitoring plan could get it verified, closing the gap between an order's terms and anyone checking them; citizen complaints in Texas did raise regulator monitoring.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                An evaluation of 13 Good Neighbor Agreements between community groups and polluting facilities found most achieved substantial implementation of their monitoring and compliance commitments. Implementation depended on community leverage and resources; “the GNAs studied are generally quite effective”.
              `),
              grade: 'moderate',
              quote: 'The GNAs studied are generally quite effective',
              sources: [source('Kenney et al. 2004', 'https://scholar.law.colorado.edu/cgi/viewcontent.cgi?httpsredir=1&article=1018&context=books_reports_studies')]
            }),
            evidence({
              finding: paragraph(`
                Across more than 130,000 environmental citizen complaints in Texas, “complaints are associated with sharp increases in regulator monitoring and enforcement”. Investigations triggered by complaints found more violations, and more severe ones, than routine monitoring.
              `),
              grade: 'moderate',
              quote: 'complaints are associated with sharp increases in regulator monitoring and enforcement',
              sources: [source('Colmer, Evans and Shimshack 2023', 'https://ideas.repec.org/p/cep/cepdps/dp1903.html')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                This case measures the baseline without a constituency. The
                2009 order contained no scheduled verification, and EPA's first
                on-site inspection came June 28, 2017, three weeks after the
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
            Verified compliance shortens the exposure window, lowering the PFAS in residents' blood and the disease risk it carries; this link is measured.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median fluoroether levels in blood declined 34 to 65 percent
                within six months of discharge controls, the measured gain per
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
            Host municipalities in Finland and Sweden held a formal veto over
            nuclear waste repository siting. Sweden financed municipal expertise
            through the Nuclear Waste Fund. The fund paid Osthammar's review
            staff, so the municipality could assess the plan without depending
            on the industry, and the operator reported strong local support.
            Finland built the world's first operating deep repository. The
            source flags that community acceptance may reflect existing nuclear
            infrastructure more than rigorous safety evaluation.
          `),
          strength: 'moderate',
          sources: [source('Bellona', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
        })
      ],
      sources: []
    })
  ]
});
