import {
  spineData, mechanism, impact, spineProposal, outcome, claim, supportingCase,
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
        of them. EPA settled with DuPont in 2005 over information the company held
        from June 1981 onward. The settlement imposed a $10.25 million penalty plus
        $6.25 million for supplemental environmental projects. The record does not
        show whether earlier reporting would have changed how EPA responded.
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
        risk and required the company to recover and capture 99 percent of the
        substances from its process wastewater and its air emissions.
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
      note: 'The federal monitoring program tested for older PFAS and published the data, but no one had a duty to tell residents, and the results sat in a database until a reporter found them in 2017',
      detail: paragraph(`
        The Environmental Protection Agency (EPA) ran the third Unregulated
        Contaminant Monitoring Rule (UCMR3), a national program that samples
        drinking water for chemicals not yet regulated. Its contaminant list
        covered six older PFAS and not GenX. Sampling ran from 2013 to
        2015, and EPA published the data. Water utilities collected the samples.
        Residents played no part. The program could monitor and publish; it could
        not require anyone to act. No duty to notify anyone attached to the
        results. A reporter browsed the database in spring 2017, found local hits
        for older PFAS, and reached the university research on GenX from there.
        Journalism did the job the rule assigned to no one. The record
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
      name: 'Residents drank water contaminated with GenX',
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
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'The discharge is the exposure source' }
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
      name: 'Residents carried high PFAS levels in their blood',
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
        Blood levels matter because studies tie PFAS exposure to disease, which
        the next card covers.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'Exposure shows up in the blood' }
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
            After filtration was installed in Arnsberg, Germany, “the geometric means of PFOA plasma levels declined by 39% (children and mothers) and 26% (men) in Arnsberg and by 13-15% in the corresponding subgroups from the reference areas”, with a plasma half-life of 3.26 years. This supports every chain's claim that an earlier cutoff would have lowered blood levels.
          `),
          grade: 'moderate',
          quote: 'The geometric means of PFOA plasma levels declined by 39% (children and mothers) and 26% (men) in Arnsberg and by 13-15% in the corresponding subgroups from the reference areas.',
          sources: [
            source('Brede et al. 2010, International Journal of Hygiene and Environmental Health', 'https://doi.org/10.1016/j.ijheh.2010.03.007')
          ]
        })
      ]
    }),
    impact({
      name: 'Studies tie PFAS exposure to higher disease risk',
      found: '04/2012',
      headline: paragraph(`
        The PFAS in residents' blood raise their disease risk. Wilmington
        residents with more PFAS had higher cholesterol. Large PFOA studies elsewhere show kidney and
        testicular cancer, and more deaths from kidney disease among exposed
        workers.
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
        classified PFOA carcinogenic to humans in 2023. Among 5,791 DuPont
        workers, deaths from kidney cancer and other kidney disease rose with
        PFOA exposure. In animal studies, GenX produces liver and pancreatic
        tumors. No human disease or mortality study of GenX exists.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'moderate', note: 'Cholesterol associations are measured in this cohort; cancer and mortality evidence comes from PFOA populations elsewhere' }
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
        }),
        evidence({
          headline: 'DuPont workers exposed to more PFOA at the West Virginia plant died more often of kidney cancer and other kidney disease.',
          finding: paragraph(`
            Steenland and Woskie (2012) followed 5,791 workers at DuPont's Washington Works plant. Deaths from chronic kidney disease ran about three times the rate of other DuPont workers in the region. “In conclusion, the authors found evidence of positive exposure-response trends for malignant and nonmalignant renal disease.”
          `),
          grade: 'moderate',
          quote: 'In conclusion, the authors found evidence of positive exposure-response trends for malignant and nonmalignant renal disease.',
          caveat: 'The trends rest on 12 kidney cancer deaths and 13 other kidney disease deaths. The study found no exposure trend for diabetes or heart disease deaths.',
          sources: [source('Steenland and Woskie 2012', 'https://academic.oup.com/aje/article/176/10/909/167357')]
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
      name: 'Water customers paid for filtration',
      found: '06/2022',
      headline: paragraph(`
        Water customers paid for the cleanup. Carbon filtration in Wilmington
        cost $82.8 million, which an 8 percent rate increase paid for, and
        reverse osmosis in Brunswick County cost $158.7 million.
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
      name: 'The consent order cut air emissions 99 percent',
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
        { anchor: 'public notice and comment', strength: 'strong', note: 'The enforceable order produced the reductions' }
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
      name: 'North Carolina set no enforceable PFAS standard',
      found: '05/2026',
      headline: paragraph(`
        Nine years of the case's most extensive participation got one plant
        cleaned up but no enforceable statewide standard. In May
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
            The Environmental Protection Agency proposed rescinding its
            regulatory determinations for four PFAS substances in a May 2026
            Federal Register notice, which is a proposal and not a final rule.
            NC House Bill 569 passed the House 104 to 3 and stalled in the
            Senate.
          `),
          grade: 'strong',
          sources: [source('Federal Register', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Accessible channels for workers to report chemical hazards, at local, state, and national level',
      method: 'Protected Worker Disclosure',
      summary: 'Workers can report substantial-risk findings through a protected channel at the level they trust, local, state, or federal, and the receiving body must act.',
      anchor: 'continued exposure is not tolerable',
      where: 'Congress and EPA, with worker anti-retaliation machinery as the shield',
      when: paragraph(`
        1980, and federally. By 1980 DuPont had confirmed elevated PFOA in its workers and concluded
        internally that continued exposure was not tolerable, the same year Fayetteville Works began
        discharging into the Cape Fear. A protected worker channel with a duty to transmit
        substantial-risk findings belongs in the chemicals statute. The earliest leverage point is
        1961; 1980 is the first year the intervention touches this river.
      `),
      description: paragraph(`
        Give workers at chemical plants accessible, protected channels to report substantial-risk
        findings, at more than one level. A federal channel to EPA with anti-retaliation protection
        and a duty on the agency to log, investigate, and publish what it receives; and state and
        local channels beside it, for workers who distrust a distant regulator but would talk to
        someone nearby, the way a university ombuds office sits beside the formal complaint office.
        Congress writes the federal duty into the chemicals statute; states and localities stand up
        their own routes. Any worker can file at any time, and a report triggers a required
        response, so the role is not advisory. The existing channel, the OSHA whistleblower program,
        was found insufficient by the Government Accountability Office in 2010. The intervention
        dates to 1980. By then DuPont had confirmed elevated PFOA in its own workers, concluded
        internally that continued exposure was not tolerable, and begun discharging into the Cape
        Fear. A federal complaint channel existed, but an audit later found it weak, and the record
        does not show whether any worker used it.
      `),
      outcome: outcome({
        text: 'Workers who can report safely bring hazards to light before exposure spreads.',
        measured: null,
        claims: [
          claim({
            text: 'The reporting duties and whistleblower channels that exist today leave hazards unreported.',
            evidence: [
              evidence({
                headline: 'A chemical company must tell the Environmental Protection Agency when it learns its chemical poses a substantial risk, and DuPont paid the agency\'s largest administrative penalty for not telling.',
                finding: paragraph(`
                  The chemicals statute requires a manufacturer that obtains information reasonably
                  supporting the conclusion that its chemical presents a substantial risk to
                  “immediately inform the Administrator”. In 2005 the Environmental Protection Agency
                  settled eight counts against DuPont over PFOA, seven of them failures to report
                  under that duty: “DuPont will pay $10.25 million -- the largest civil administrative
                  penalty EPA has ever obtained under any federal environmental statute -- to settle
                  violations alleged by EPA over the company's failure to comply with federal law”,
                  along with $6.25 million for supplemental environmental projects. The withheld
                  information included 1981 data showing the chemical crossing the placenta in humans,
                  and contamination of the drinking water inside people's homes. The duty ran only
                  between company and agency.
                `),
                grade: 'strong',
                quote: 'DuPont will pay $10.25 million -- the largest civil administrative penalty EPA has ever obtained under any federal environmental statute -- to settle violations alleged by EPA over the company\'s failure to comply with federal law.',
                caveat: 'An official record of what the duty is and what the agency found. It cannot show that earlier reporting would have changed any outcome.',
                sources: [
                  source('US Environmental Protection Agency, news release of December 14, 2005', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html'),
                  source('EPA memorandum to the Environmental Appeals Board, December 14, 2005', 'https://www.epa.gov/sites/default/files/2013-08/documents/eabmemodupontpfoasettlement121405.pdf'),
                  source('15 U.S.C. 2607(e)', 'https://www.law.cornell.edu/uscode/text/15/2607')
                ]
              }),
              evidence({
                headline: 'The government\'s auditors found that the federal whistleblower complaint program could not be shown to work as intended.',
                finding: paragraph(`
                  The Government Accountability Office audited the Occupational Safety and Health
                  Administration whistleblower program in 2010. “OSHA lacks sufficient internal
                  controls to ensure that the whistleblower program operates as intended due to
                  several factors, including inconsistent program operations, inadequate tracking of
                  program expenses, and insufficient performance monitoring. Program operations vary
                  by region in significant ways, as exemplified by differing standards used to screen
                  out complaints.” The program then handled complaints under 18 statutes, the
                  chemicals statute among them, so this is the channel a chemical plant worker would
                  have had to use.
                `),
                grade: 'strong',
                quote: 'OSHA lacks sufficient internal controls to ensure that the whistleblower program operates as intended due to several factors, including inconsistent program operations, inadequate tracking of program expenses, and insufficient performance monitoring.',
                caveat: 'An official record of what the audit found. It cannot show whether workers used the channel, or that a better channel would surface hazards.',
                sources: [source('US Government Accountability Office, GAO-10-722', 'https://www.gao.gov/products/gao-10-722')]
              })
            ],
            cases: [
              supportingCase({
                name: 'OSHA Whistleblower Program Audit',
                where: 'United States', when: '2010',
                authority: 'The existing statutory channel',
                outcome: paragraph(`
                  The Government Accountability Office audited the existing statutory channel, the
                  Occupational Safety and Health Administration's whistleblower program, which then
                  handled complaints under 18 statutes including the chemicals statute. It found the
                  program lacked sufficient internal controls, that complaint screening standards
                  differed by region, and that the program tracked neither its expenses nor its
                  performance well enough to monitor itself.
                `),
                strength: 'strong',
                sources: [source('US Government Accountability Office, GAO-10-722', 'https://www.gao.gov/products/gao-10-722')]
              })
            ]
          }),
          claim({
            text: 'Workers see the harm first, but few report without strong protection.',
            evidence: [
              evidence({
                headline: 'Employees brought more large corporate frauds to light than auditors or the securities regulator did, and most who were named lost their jobs or their duties.',
                finding: paragraph(`
                  Across every reported fraud at large United States companies from 1996 to 2004,
                  detection came mostly from outside the usual governance roles: “employees (17% of
                  the cases), non-financial-market regulators (13%), and the media (13%)”. Naming
                  yourself was costly: “in 82% of the cases, the whistleblower was fired, quit under
                  duress, or had significantly altered responsibilities”. The authors conclude that
                  “given these costs, the surprising part is not that most employees do not talk, but
                  that some talk at all”.
                `),
                grade: 'moderate',
                quote: 'in 82% of the cases, the whistleblower was fired, quit under duress, or had significantly altered responsibilities',
                sources: [source('Dyck, Morse and Zingales 2010, Journal of Finance', 'https://doi.org/10.1111/j.1540-6261.2010.01614.x')]
              }),
              evidence({
                headline: 'When losing a job got less costly, workers filed more safety complaints against their employers, and regulators found more violations.',
                finding: paragraph(`
                  Using large increases in state unemployment insurance benefits, which cut the cost
                  of the most common retaliation, the authors “find that increases in UI benefits
                  increase the number of facility-level employee workplace safety complaints filed
                  with the regulator. Furthermore, UI benefit increases also result in more violations
                  and more penalties. The effects are concentrated in firms where retaliation is more
                  likely.” The outcome measured is complaints to the workplace safety regulator, the
                  channel this proposal would rebuild, though nothing here is specific to chemical
                  hazards.
                `),
                grade: 'strong',
                quote: 'We find that increases in UI benefits increase the number of facility-level employee workplace safety complaints filed with the regulator. Furthermore, UI benefit increases also result in more violations and more penalties.',
                sources: [source('Heese and Perez-Cavazos 2021, Journal of Accounting and Economics', 'https://doi.org/10.1016/j.jacceco.2020.101385')]
              }),
              evidence({
                headline: 'When courts made whistleblower rewards larger, more people came forward, and their pay never fully recovered.',
                finding: paragraph(`
                  Using appeals-court decisions that raised the money available to whistleblowers,
                  the authors find that “greater incentives increase the number of lawsuits filed with
                  the regulator, the regulator's investigation length, the percentage of intervened
                  lawsuits, and the percentage of settled lawsuits”. Whistleblowers' long-term annual
                  income still fell about 8.6 percent. Rewards are not the same instrument as
                  protection.
                `),
                grade: 'strong',
                quote: 'Exploiting appeals-court decisions that increase financial incentives for whistleblowing, we find that greater incentives increase the number of lawsuits filed with the regulator, the regulator\'s investigation length, the percentage of intervened lawsuits, and the percentage of settled lawsuits.',
                sources: [source('Dey, Heese and Perez-Cavazos 2021, Journal of Accounting Research', 'https://doi.org/10.1111/1475-679X.12370')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The federal protection Congress wrote for employees after the accounting scandals did not change who brought frauds to light.',
                finding: paragraph(`
                  The same census of corporate frauds tested whether the post-scandal federal employee
                  protection changed detection: “by contrast, we do not find any evidence that the
                  protection offered to employees by Section 303 of SOX has any effect”. Auditors'
                  share of detections rose over the same period. The employee protection's did not.
                `),
                grade: 'moderate',
                quote: 'By contrast, we do not find any evidence that the protection offered to employees by Section 303 of SOX has any effect.',
                sources: [source('Dyck, Morse and Zingales 2010, Journal of Finance', 'https://doi.org/10.1111/j.1540-6261.2010.01614.x')]
              }),
              evidence({
                headline: 'Laws meant to encourage federal workers to report wrongdoing were followed by more reporting and by more retaliation.',
                finding: paragraph(`
                  Surveys of federal employees taken at three points over twelve years found that
                  “laws intended to encourage whistle-blowing seem to have two desired effects: to
                  reduce the incidence of perceived wrongdoing and to increase the likelihood of
                  whistle-blowing. However, two unintended effects are also observed: perceived
                  retaliation increased and whistle-blowers increasingly sought anonymity.” Which
                  change drove which cannot be told apart here.
                `),
                grade: 'moderate',
                quote: 'Laws intended to encourage whistle-blowing seem to have two desired effects: to reduce the incidence of perceived wrongdoing and to increase the likelihood of whistle-blowing. However, two unintended effects are also observed: perceived retaliation increased and whistle-blowers increasingly sought anonymity.',
                sources: [source('Miceli, Rehg, Near and Ryan 1999, Work and Occupations', 'https://doi.org/10.1177/0730888499026001007')]
              }),
              evidence({
                headline: 'Whistleblowers were punished most when what they reported mattered most, and no way of reporting protected them.',
                finding: paragraph(`
                  A nationwide study of whistleblowers and of employees who saw wrongdoing and stayed
                  silent found that “whistle-blowers suffer severe retaliation from management,
                  especially when their information proves significant” and that “no special method of
                  disclosure or personal characteristics can insulate the whistle-blower from such
                  retaliation”. The people surveyed had already identified themselves as
                  whistleblowers, so the study cannot give the rate of retaliation among all workers
                  who see wrongdoing.
                `),
                grade: 'moderate',
                quote: 'whistle-blowers suffer severe retaliation from management, especially when their information proves significant; and (d) no special method of disclosure or personal characteristics can insulate the whistle-blower from such retaliation.',
                sources: [source('Rothschild and Miethe 1999, Work and Occupations', 'https://doi.org/10.1177/0730888499026001006')]
              })
            ]
          }),
          claim({
            text: 'Channels outside the chain of command draw reports that formal channels miss.',
            evidence: [
              evidence({
                headline: 'Hospitals\' own incident reporting systems recorded about one in seven of the harms their patients suffered.',
                finding: paragraph(`
                  Federal auditors matched harm events found by medical record review against what
                  hospital staff had filed. “Of the events experienced by Medicare beneficiaries
                  discharged in October 2008, hospital incident reporting systems captured only an
                  estimated 14 percent.” Most of the rest went unreported because staff did not think
                  the event was reportable. This measures how much an in-house channel misses, not
                  what an outside channel would catch.
                `),
                grade: 'strong',
                quote: 'Of the events experienced by Medicare beneficiaries discharged in October 2008, hospital incident reporting systems captured only an estimated 14 percent.',
                sources: [source('HHS Office of Inspector General, OEI-06-09-00091', 'https://oig.hhs.gov/reports/all/2012/hospital-incident-reporting-systems-do-not-capture-most-patient-harm/')]
              }),
              evidence({
                headline: 'Patients interviewed after they went home described serious, preventable harm that the hospital\'s own records never recorded.',
                finding: paragraph(`
                  Comparing interviews with medical record review for 998 recently hospitalized
                  adults, 23 percent had at least one adverse event found by interview against 11
                  percent found by record review. “Interviews identified an additional 21 serious and
                  preventable events that were not documented in the medical record.” Asking the
                  people affected surfaced events the institution's own record did not hold, though
                  the interviews came after the fact rather than through a reporting channel.
                `),
                grade: 'moderate',
                quote: 'Interviews identified an additional 21 serious and preventable events that were not documented in the medical record',
                sources: [source('Weissman et al. 2008, Annals of Internal Medicine', 'https://doi.org/10.7326/0003-4819-149-2-200807150-00006')]
              }),
              evidence({
                headline: 'Companies that gave employees a way to report without going to their boss found more fraud.',
                finding: paragraph(`
                  Using survey data from publicly listed Australian companies, where such channels are
                  not required, the authors “find a positive association between ARCs and reported
                  fraud. These results indicate that ARCs are effective in detecting fraud.” Small
                  firms gained most. Because companies chose whether to have a channel, the study
                  cannot show the channel caused the detection.
                `),
                grade: 'moderate',
                quote: 'we find a positive association between ARCs and reported fraud. These results indicate that ARCs are effective in detecting fraud.',
                sources: [source('Johansson and Carey 2016, Journal of Business Ethics', 'https://doi.org/10.1007/s10551-015-2673-6')]
              }),
              evidence({
                headline: 'Firms whose employees used the internal reporting line more heavily later paid fewer and smaller government fines.',
                finding: paragraph(`
                  From nearly two million internal reports filed at more than 1,000 publicly traded
                  United States firms, the authors “show that internal WB report volume is associated
                  with fewer and lower amounts of government fines and material lawsuits”. These are
                  in-house systems, usually run by an outside vendor, so they sit beside the chain of
                  command rather than outside the company, and the pattern is an association.
                `),
                grade: 'moderate',
                quote: 'we show that internal WB report volume is associated with fewer and lower amounts of government fines and material lawsuits',
                sources: [source('Stubben and Welch 2020, Journal of Accounting Research', 'https://doi.org/10.1111/1475-679X.12303')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Giving employees an anonymous route made them less willing to use the named routes.',
                finding: paragraph(`
                  In an experiment on intentions to report questionable acts, “results show that the
                  existence of an anonymous channel does reduce the likelihood of reporting to
                  non-anonymous channels”. The study measured stated intentions, not reports filed, so
                  the net effect on reporting is unknown.
                `),
                grade: 'moderate',
                quote: 'Results show that the existence of an anonymous channel does reduce the likelihood of reporting to non-anonymous channels',
                sources: [source('Kaplan and Schultz 2007, Journal of Business Ethics', 'https://doi.org/10.1007/s10551-006-0021-6')]
              }),
              evidence({
                headline: 'A hotline run by an outside body drew less willingness to report than one run in-house.',
                finding: paragraph(`
                  Two experiments on fraud reporting found the opposite of what the researchers
                  expected: intentions to report were stronger under an internally administered
                  hotline. “Thus, our results suggest that an externally administered anonymous
                  hotline may not increase fraud reporting.” Again the outcome is stated willingness,
                  not reports filed.
                `),
                grade: 'moderate',
                quote: 'Thus, our results suggest that an externally administered anonymous hotline may not increase fraud reporting.',
                sources: [source('Kaplan, Pany, Samuels and Zhang 2009, Auditing: A Journal of Practice and Theory', 'https://doi.org/10.2308/aud.2009.28.2.273')]
              })
            ],
            cases: [
              supportingCase({
                name: 'NASA Aviation Safety Reporting System',
                where: 'United States', when: '1976-present',
                authority: 'Third-party receipt, outside the regulator',
                outcome: paragraph(`
                  The Federal Aviation Administration asked NASA to run aviation's confidential
                  reporting system because, in the program's own words, “its regulatory and
                  enforcement roles would discourage the aviation community from trusting and using
                  the new program if the FAA were to operate the system”. Aviation workers have since
                  filed more than a million confidential reports, and the program has issued about
                  4,000 alerting messages to the Federal Aviation Administration and the aviation
                  community. No one has measured the effect on hazards.
                `),
                strength: 'weak',
                sources: [source('NASA Aviation Safety Reporting System', 'https://asrs.arc.nasa.gov/docs/rs/60_Case_for_Confidential_Incident_Reporting.pdf')]
              })
            ]
          }),
          claim({
            text: 'Worker disclosure reaches the regulator and triggers scrutiny years before litigation does.',
            evidence: [
              evidence({
                headline: 'Firms accused by an employee whistleblower cut their misreporting for at least two years afterward, compared with similar firms.',
                finding: paragraph(`
                  Using employee whistleblower cases obtained from the United States government, the
                  study finds that “firms subject to whistleblowing allegations exhibit significant
                  decreases in financial misreporting and tax aggressiveness, compared with control
                  firms”, and that “this deterrent effect persists for at least two years beyond the
                  year of the allegation”. The cases are retaliation complaints made to the
                  Occupational Safety and Health Administration between 2003 and 2010 by employees of
                  317 large, publicly traded firms.
                `),
                grade: 'moderate',
                quote: 'firms subject to whistleblowing allegations exhibit significant decreases in financial misreporting and tax aggressiveness, compared with control firms',
                sources: [source('Wilde 2017, The Accounting Review', 'https://doi.org/10.2308/accr-51661')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In this case the hidden studies reached the agency through a lawsuit, not through a worker, twenty years late.',
                finding: paragraph(`
                  DuPont obtained the human data in 1981, and the Environmental Protection Agency
                  learned of it only in 2001: “an attorney working on a class action suit on behalf of
                  citizens in Ohio and West Virginia brought this information to the EPA in 2001.” The
                  settlement memorandum says of the 1981 data that “EPA was not aware of this
                  information until Bilott sent it to EPA in 2001”. The penalty followed in 2005.
                  Litigation, not disclosure, moved the information.
                `),
                grade: 'strong',
                quote: 'EPA was not aware of this information until Bilott sent it to EPA in 2001.',
                sources: [
                  source('US Environmental Protection Agency, press advisory of July 8, 2004', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/826fe743d67d744685256f620074c136.html'),
                  source('EPA memorandum to the Environmental Appeals Board, December 14, 2005', 'https://www.epa.gov/sites/default/files/2013-08/documents/eabmemodupontpfoasettlement121405.pdf')
                ]
              })
            ],
            cases: [
              supportingCase({
                name: 'Richard Purdy Resignation Disclosure',
                where: '3M, Minnesota', when: '1999',
                authority: 'One employee, acting without protection',
                outcome: paragraph(`
                  Richard Purdy, a 3M toxicologist, resigned in 1999 and sent his resignation letter
                  to the Environmental Protection Agency, telling the agency that 3M had reported
                  finding PFOS in the blood of animals without saying it was in the blood of eaglets.
                  The agency began investigating the chemicals that year. In May 2000, after
                  negotiations with the agency, 3M announced it would phase out PFOS. The agency's own
                  release credited the company rather than the chemist. Nothing establishes what his
                  letter changed.
                `),
                strength: 'weak',
                sources: [
                  source('Minnesota Reformer', 'https://minnesotareformer.com/2022/12/15/toxic-3m-knew-its-chemicals-were-harmful-decades-ago-but-didnt-tell-the-public-government/'),
                  source('US Environmental Protection Agency, news release of May 16, 2000', 'https://archive.epa.gov/epapages/newsroom_archive/newsreleases/33aa946e6cb11f35852568e1005246b4.html')
                ]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'A body of affected residents convenes whenever a chemical is approved for manufacture or discharge',
      method: 'Community Advisory Board',
      summary: 'A pending approval to manufacture or discharge a chemical convenes a body of downstream residents with power over the monitoring plan, the permit, and what the public is told.',
      anchor: 'insufficient information and potential unreasonable risk',
      where: 'EPA Office of Chemical Safety and Pollution Prevention, with the body seated from downstream communities; the state agency and the water utility for the reporting and sampling paths',
      when: paragraph(`
        2009, at the consent order. That order is the single document where the federal government
        both recognized potential unreasonable risk and authorized manufacture, and it set a 99
        percent capture requirement that no one checked for eight years. A resident body convened at
        that approval reaches every affected water user eight years before the newspaper did, and
        builds the constituency that checks. The 1980 permit record shows why this must be
        structural: the file contained no chemical name a commenter could act on.
      `),
      description: paragraph(`
        Whenever a chemical is up for approval to be manufactured or discharged, convene a body of
        the residents downstream of it. The trigger is the pending approval. The body sees the
        same submissions as the agency, within trade-secret law; its monitoring conditions become
        permit conditions; and the agency must publish the plan and each verification. Between
        approvals the body is the place residents report suspected contamination, with a written
        response due within a set time and community water sampling run with a laboratory partner.
        This proposal merges three the group wrote separately: notice to downstream residents at
        approval, resident reporting with a required investigation, and community seats in the
        approval review. Notification alone is not participation; what unifies the three is the
        trigger and the body it convenes. The 2009 consent order is the anchor. Notice attached to
        it would have reached every affected water user eight years before the June 2017 newspaper
        story, and a body seated at it would have had someone checking the 99 percent capture
        requirement.
      `),
      note: paragraph(`
        What the body can do: set up a public monitoring plan; decide or veto the permit; take the
        question out for wider community input; assess the risks and communicate them to the public.
        It also gives residents two reporting paths. A passive path, where someone who notices
        something wrong, a farmer whose cattle are dying, has somewhere to report it and a
        guaranteed response. An active path, where a new discharge upstream triggers an information
        campaign telling residents what to look for and how to get water tested, because no one can
        test for PFAS in a garage.
      `),
      outcome: outcome({
        text: 'Residents who review chemical approvals cut exposure through drinking water.',
        measured: 'Residents drank water contaminated with GenX',
        claims: [
          claim({
            text: 'Residents who can report and sample find contamination before officials do.',
            evidence: [
              evidence({
                headline: 'Flint residents\' own samples showed lead nearly double the federal action level while officials said there was no problem.',
                finding: paragraph(`
                  Flint residents collected water samples from 269 homes and a university lab ran the
                  analysis. “Our city-wide citizen science water lead results contradicted official
                  claims that there was no problem - our 90th percentile was 26.8 μg/L, which was
                  almost double the Lead and Copper Rule action level of 15 μg/L.” The team writes
                  that the citizen datasets “represented the only internally consistent measures of
                  water lead levels” during the crisis. It is one city, so it cannot say how often
                  resident sampling beats official sampling.
                `),
                grade: 'moderate',
                quote: 'Our city-wide citizen science water lead results contradicted official claims that there was no problem- our 90th percentile was 26.8 μg/L, which was almost double the Lead and Copper Rule action level of 15 μg/L.',
                sources: [
                  source('Pieper et al. 2018, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.8b00791'),
                  source('Roy and Edwards 2019, Citizen Science: Theory and Practice', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')
                ]
              }),
              evidence({
                headline: 'A dense community sensor network in California spotted many pollution episodes the government monitors never saw.',
                finding: paragraph(`
                  In Imperial County, California, 38 community-run particle monitors identified 1,426
                  pollution episodes over five months, against 116 identified by six government
                  monitors: “Of the 1426 episodes identified by the community sensors, 723 (51%) were
                  not observed by the government monitors.” The community network had far more
                  monitors, which is much of why it saw more. The setting differs from Cape Fear: air,
                  not water, and sensors, not symptoms.
                `),
                grade: 'moderate',
                quote: 'Of the 1426 episodes identified by the community sensors, 723 (51%) were not observed by the government monitors',
                sources: [source('Seto et al. 2019, International Journal of Environmental Research and Public Health', 'https://doi.org/10.3390/ijerph16183268')]
              }),
              evidence({
                headline: 'Woburn parents counted the childhood leukemia cases in their neighborhood and pushed the investigations that followed.',
                finding: paragraph(`
                  Residents of Woburn, Massachusetts noticed a run of childhood leukemia and pressed
                  for an investigation. A federal and state investigation recorded that “residents of
                  Woburn were concerned over what they perceived to be a large number of childhood
                  leukemia cases” and found that “six of the persons with leukemia were located close
                  to each other in one census tract, 7.5 times the expected number”. A later state
                  case-control study counted 21 childhood leukemia cases against 5.52 expected over
                  seventeen years, and found a dose-response relationship with mothers' likely
                  exposure to water from the two closed wells. The odds ratio for that exposure period
                  was wide and not itself significant.
                `),
                grade: 'moderate',
                quote: 'Six of the persons with leukemia were located close to each other in one census tract, 7.5 times the expected number.',
                sources: [
                  source('Cutler et al. 1986, Public Health Reports', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1477799/'),
                  source('Costas, Knorr and Condon 2002, Science of the Total Environment', 'https://doi.org/10.1016/s0048-9697(02)00169-9')
                ]
              }),
              evidence({
                headline: 'A West Virginia farmer\'s videotapes of his dying cattle started the lawsuit that pried DuPont\'s own chemical studies loose.',
                finding: paragraph(`
                  Wilbur Tennant, a cattle farmer downstream of a DuPont landfill, brought videotapes
                  and photographs of his sick and dying cows to a lawyer. The lawyer later “stumbled
                  upon a letter DuPont had sent to the E.P.A. that mentioned a substance at the
                  landfill with a cryptic name: PFOA”, and in the fall of 2000 a court order forced
                  DuPont to hand over “thousands of unorganized documents ... private internal
                  correspondence, medical and health reports and confidential studies conducted by
                  DuPont scientists”. This is a factual account of one case, from journalism.
                `),
                grade: 'weak',
                quote: 'stumbled upon a letter DuPont had sent to the E.P.A. that mentioned a substance at the landfill with a cryptic name: PFOA',
                sources: [
                  source('Nathaniel Rich, The New York Times Magazine, January 6, 2016', 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html'),
                  source('Haider, Indiana Law Review 57(1)', 'https://mckinneylaw.iu.edu/practice/law-reviews/ilr/pdf/vol57p199.pdf')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Investigations of reported cancer clusters almost never find an environmental cause.',
                finding: paragraph(`
                  A review of state and federal cancer cluster investigations reports: “We reviewed
                  428 investigations evaluating 567 cancers of concern. An increase in incidence was
                  confirmed for 72 (13%) cancer categories ... Three of those were linked (with
                  variable degree of certainty) to hypothesized exposures, but only one investigation
                  revealed a clear cause.” An earlier account of the federal series found the same
                  pattern across 108 clusters the agency investigated: “no clear cause was found for
                  any cluster”.
                `),
                grade: 'moderate',
                quote: 'We reviewed 428 investigations evaluating 567 cancers of concern. An increase in incidence was confirmed for 72 (13%) cancer categories',
                sources: [
                  source('Goodman, Naiman, Goodman and LaKind 2012, Critical Reviews in Toxicology', 'https://doi.org/10.3109/10408444.2012.675315'),
                  source('Caldwell 1990, American Journal of Epidemiology', 'https://doi.org/10.1093/oxfordjournals.aje.a115787')
                ]
              }),
              evidence({
                headline: 'Finding GenX took a nontargeted laboratory screen of river water, not anything a resident could notice.',
                finding: paragraph(`
                  Federal chemists found the Cape Fear fluoroethers by running nontargeted
                  high-resolution mass spectrometry on river samples: “we detected 12 novel
                  perfluoroalkyl ether carboxylic and sulfonic acids in surface water in North
                  Carolina, USA using this approach”. That is the limit of the reporting path in this
                  proposal. Nothing about the discharge was available to ordinary observation, and no
                  resident report figures in the published account.
                `),
                grade: 'moderate',
                quote: 'We detected 12 novel perfluoroalkyl ether carboxylic and sulfonic acids in surface water in North Carolina, USA using this approach.',
                sources: [source('Strynar et al. 2015, Environmental Science and Technology', 'https://pubs.acs.org/doi/10.1021/acs.est.5b01215')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Woburn Leukemia Cluster',
                where: 'Woburn, MA', when: '1970s-1986',
                authority: 'Community observation plus academic partnership',
                outcome: paragraph(`
                  Parents counted the childhood leukemia cases in their neighborhood and forced an
                  investigation. State and federal investigators confirmed a cluster, and a Harvard
                  team working with community volunteers found statistical associations between access
                  to water from the two contaminated wells and childhood leukemia. A later state
                  case-control study counted 21 cases against 5.52 expected and found a dose-response
                  relationship with maternal exposure. The case produced settlements with two
                  companies, a Superfund cleanup in East Woburn, a state cleanup fund, and a state
                  cancer registry.
                `),
                strength: 'moderate',
                sources: [
                  source('Cutler et al. 1986, Public Health Reports', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1477799/'),
                  source('Lagakos, Wessen and Zelen 1986, Journal of the American Statistical Association', 'https://cfpub.epa.gov/si/si_public_record_report.cfm?LAB=ORD&dirEntryID=47569'),
                  source('Costas, Knorr and Condon 2002, Science of the Total Environment', 'https://doi.org/10.1016/s0048-9697(02)00169-9'),
                  source('Dan Kennedy, Woburn Files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')
                ]
              }),
              supportingCase({
                name: 'Tonawanda Bucket Brigade',
                where: 'Tonawanda, NY', when: '2004-2013',
                authority: 'Resident sampling, then state study, then criminal enforcement',
                outcome: paragraph(`
                  Starting in 2005, residents sampled their own air with homemade bucket kits and
                  found benzene. The state began a year-long community monitoring study in July 2007
                  and found elevated benzene and formaldehyde. A federal jury convicted the company on
                  eleven Clean Air Act counts and three Resource Conservation and Recovery Act counts,
                  and the court imposed a $12.5 million penalty plus $12.2 million in community service
                  payments. Measured benzene later fell 86 percent at the industrial monitor and 68
                  percent at the residential monitor, which the state attributes in part to plant
                  changes made in response to inspections and enforcement. The estimated excess
                  lifetime cancer risk at the industrial monitor fell from 75 in one million to 11 in
                  one million.
                `),
                strength: 'moderate',
                sources: [
                  source('New York State Department of Environmental Conservation', 'https://extapps.dec.ny.gov/docs/air_pdf/tonfact1011.pdf'),
                  source('US Department of Justice', 'https://web.archive.org/web/20210118152454/https://www.justice.gov/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and'),
                  source('Citizen Science Community Resources', 'https://www.csresources.org/our-history')
                ]
              }),
              supportingCase({
                name: 'Flint Resident Water Sampling',
                where: 'Flint, MI', when: '2015',
                authority: 'Resident-collected samples with Virginia Tech',
                outcome: paragraph(`
                  Residents sampled their own taps and Virginia Tech ran the analysis. Residents
                  returned 84 percent of the kits, 252 of 300, and the 90th percentile came back at
                  25.2 parts per billion against the 15 parts per billion federal action level, while
                  state regulators were still calling the situation normal. A federal emergency was
                  declared in Flint on January 16, 2016.
                `),
                strength: 'moderate',
                sources: [
                  source('Flint Water Study', 'https://flintwaterstudy.org/information-for-flint-residents/results-for-citizen-testing-for-lead-300-kits/'),
                  source('Mantha et al. 2020, Water Research X', 'https://doi.org/10.1016/j.wroa.2020.100047')
                ]
              })
            ]
          }),
          claim({
            text: 'Notice at approval gives the public knowledge from day one, and people act on what they know.',
            evidence: [
              evidence({
                headline: 'Water suppliers already must notify the public within 24 hours of the most serious violations.',
                finding: paragraph(`
                  The machinery exists for regulated contaminants. Under the drinking water public
                  notification rule, “any time a situation occurs where there is the potential for
                  human health to be immediately impacted, water suppliers have 24 hours to notify
                  people who may drink the water”.
                `),
                grade: 'moderate',
                quote: 'Any time a situation occurs where there is the potential for human health to be immediately impacted, water suppliers have 24 hours to notify people who may drink the water.',
                sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
              }),
              evidence({
                headline: 'Water violations raised bottled water sales, and plant openings cut nearby home values.',
                finding: paragraph(`
                  Drinking water violations raise bottled water sales: “we find an increase in bottled
                  water sales of 22 percent from violations due to microorganisms and 17 percent from
                  violations due to elements and chemicals”. Separately, industrial “plant openings
                  lead to 11 percent declines in housing values within 0.5 mile”. Both show people
                  acting on contamination risks once they know about them.
                `),
                grade: 'strong',
                quote: 'we find an increase in bottled water sales of 22 percent from violations due to microorganisms and 17 percent from violations due to elements and chemicals',
                sources: [
                  source('Graff Zivin, Neidell and Schlenker 2011, American Economic Review', 'https://www.aeaweb.org/articles?id=10.1257/aer.101.3.448'),
                  source('Currie, Davis, Greenstone and Walker 2015, American Economic Review', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The notice duty is triggered by violating a drinking water rule, and GenX was not covered by one.',
                finding: paragraph(`
                  The public notification requirement attaches to systems that “violate EPA or state
                  drinking water regulations (including monitoring requirements)”. GenX had no
                  drinking water standard to violate, so nothing triggered a notice.
                `),
                grade: 'moderate',
                quote: 'violate EPA or state drinking water regulations (including monitoring requirements)',
                caveat: 'Whether any jurisdiction attaches public notice to a chemicals consent order was not established. Treat that as an open question, not a finding.',
                sources: [source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
              }),
              evidence({
                headline: 'Avoiding contaminated water costs households money, and it is a poor substitute for stopping the discharge.',
                finding: paragraph(`
                  Bottled water bought in response to drinking water violations cost roughly $60
                  million nationwide in 2005, which the authors call “a significant understatement of
                  the total willingness to pay to eliminate violations”. Avoidance is what people can
                  do on their own. It does not reach everyone, and it does not remove the
                  contaminant.
                `),
                grade: 'moderate',
                quote: 'Back-of-the envelope calculations yield costs of avoidance behavior at roughly $60 million for all nationwide violations in 2005, which likely reflects a significant understatement of the total willingness to pay to eliminate violations.',
                sources: [source('Graff Zivin, Neidell and Schlenker 2011, American Economic Review', 'https://www.aeaweb.org/articles?id=10.1257/aer.101.3.448')]
              }),
              evidence({
                headline: 'Even a clear warning to boil water reaches only about two thirds of the people it needs to.',
                finding: paragraph(`
                  Across eleven studies of how the public responds to boil water advisories,
                  “reported rates of compliance were generally high, but when rate of awareness and
                  non-compliant behavior such as brushing teeth were factored in, the median effective
                  compliance rate was found to be around 68 percent”, which the authors call an
                  overestimate. Notice is necessary, and by itself it does not produce protective
                  behavior.
                `),
                grade: 'moderate',
                quote: 'Reported rates of compliance were generally high, but when rate of awareness and non-compliant behavior such as brushing teeth were factored in, the median effective compliance rate was found to be around 68 percent.',
                sources: [source('Vedachalam, Spotte-Smith and Riha 2016, Water Research', 'https://doi.org/10.1016/j.watres.2016.02.014')]
              })
            ]
          }),
          claim({
            text: 'Disclosure pressure cuts discharges before enforcement arrives.',
            evidence: [
              evidence({
                headline: 'Utilities required to mail water quality reports to customers cut their violations.',
                finding: paragraph(`
                  When federal law required larger utilities to mail annual water quality reports
                  directly to customers, those utilities “reduced total violations by between 30% and
                  44% as a result of this policy, and reduced the more severe health violations by
                  40-57%”. The size threshold that decided which utilities had to mail reports
                  provides the comparison group.
                `),
                grade: 'strong',
                quote: 'Results suggest that larger utilities required to mail CCRs directly to customers reduced total violations by between 30% and 44% as a result of this policy, and reduced the more severe health violations by 40-57%.',
                sources: [source('Bennear and Olmstead 2008, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2008.03.002')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The permit file named no chemical that a disclosure rule or a commenter could act on.',
                finding: paragraph(`
                  The state found “no evidence in the permit file indicating that Chemours or DuPont
                  (Chemours' predecessor) disclosed the discharge to surface water of GenX compounds
                  at the Fayetteville Works”, and that the renewal applications “contain no reference
                  to 'GenX' or to any chemical name, formula, or CAS number that would identify any
                  GenX compounds in the discharge”. Separately, PFAS were not reportable to the
                  Toxics Release Inventory until Congress added them in the fiscal 2020 defense
                  authorization.
                `),
                grade: 'moderate',
                quote: 'We have found no evidence in the permit file indicating that Chemours or DuPont (Chemours\' predecessor) disclosed the discharge to surface water of GenX compounds at the Fayetteville Works.',
                sources: [
                  source('North Carolina Department of Environmental Quality, November 16, 2017', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf'),
                  source('US Environmental Protection Agency, addition of certain PFAS to the Toxics Release Inventory', 'https://www.epa.gov/toxics-release-inventory-tri-program/addition-certain-pfas-tri-national-defense-authorization-act')
                ]
              }),
              evidence({
                headline: 'Companies\' own reported emissions cuts are not always matched by what monitors measure.',
                finding: paragraph(`
                  Comparing air emissions reported under the Toxics Release Inventory with
                  concentrations measured by federal monitors, the authors “find that the large drops
                  in air emissions reported by firms in the TRI are not always matched by similar
                  reductions in measured concentrations from EPA monitors”, and the reported figures
                  for two chemicals failed a statistical test of authenticity. A disclosure regime
                  built on self-reported numbers can overstate the real reduction.
                `),
                grade: 'moderate',
                quote: 'We find that the large drops in air emissions reported by firms in the TRI are not always matched by similar reductions in measured concentrations from EPA monitors.',
                sources: [source('de Marchi and Hamilton 2006, Journal of Risk and Uncertainty', 'https://ideas.repec.org/a/kap/jrisku/v32y2006i1p57-76.html')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Toxics Release Inventory',
                where: 'United States', when: '1986-present',
                authority: 'Mandatory annual public disclosure of listed releases',
                outcome: paragraph(`
                  Under the Toxics Release Inventory's mandatory annual public disclosure, facilities'
                  reported on-site air releases fell 52 percent, or 838 million pounds, from 2003 to
                  2013, and total reported releases fell 21 percent compared with 2014, with a 32
                  percent decline in air emissions. The agency attributes much of the air decline to
                  electric utilities switching away from coal and installing controls, so this is a
                  record of what disclosure made visible rather than a measure of what disclosure
                  caused. Facilities report the quantities themselves.
                `),
                strength: 'moderate',
                sources: [
                  source('US Environmental Protection Agency', 'https://www.epa.gov/sites/default/files/2015-09/documents/teitelbaum.pdf'),
                  source('US Environmental Protection Agency, TRI national analysis', 'https://www.epa.gov/trinationalanalysis/releases-chemicals')
                ]
              }),
              supportingCase({
                name: 'Massachusetts Toxics Use Reduction Act',
                where: 'Massachusetts', when: '1990-2016',
                authority: 'Mandatory use reporting and planning',
                outcome: paragraph(`
                  Under mandatory use reporting and planning, Massachusetts firms cut toxic chemical
                  use 66 percent, byproduct 72 percent, and on-site releases 92 percent, on the state
                  institute's own preliminary analysis. The figures are program totals, reported by the
                  firms, with nothing to compare them against.
                `),
                strength: 'weak',
                sources: [source('Toxics Use Reduction Institute', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf')]
              }),
              supportingCase({
                name: 'REACH Candidate List Substitution',
                where: 'European Union', when: '2011 survey',
                authority: 'Listing-triggered disclosure regime',
                outcome: paragraph(`
                  After the European Union's chemicals regulation put substances of very high concern
                  on a public candidate list, 61 percent of the German downstream users answering a
                  European Commission survey said the listing led them to decide to replace the
                  substance with a less hazardous one. It is a one-off self-report, and a decision to
                  replace is not a completed substitution.
                `),
                strength: 'weak',
                sources: [source('Grunwald and Hennig 2014, Journal of Business Chemistry', 'https://www.businesschemistry.org/article/impacts-of-the-reach-candidate-list-of-substances-subject-to-authorisation-the-reputation-mechanism-and-empirical-results-on-behavioral-adaptations-of-german-supply-chain-actors/')]
              })
            ]
          }),
          claim({
            text: 'Public seats in the review produce monitoring commitments and get them verified.',
            evidence: [
              evidence({
                headline: 'Citizen complaints in Texas triggered inspections that found more and worse violations than routine checks.',
                finding: paragraph(`
                  Across more than 130,000 environmental citizen complaints in Texas, “complaints are
                  associated with sharp increases in regulator monitoring and enforcement. Complaints
                  uncover more, and more severe violations, than more standard monitoring approaches.”
                  Investigations triggered by complaints were two to four times more likely to find a
                  violation. The same work finds complaints draw inspections away from other
                  facilities, and no effect on overall compliance in the county.
                `),
                grade: 'moderate',
                quote: 'Complaints are associated with sharp increases in regulator monitoring and enforcement. Complaints uncover more, and more severe violations, than more standard monitoring approaches.',
                sources: [source('Colmer, Evans and Shimshack, Journal of Political Economy Microeconomics', 'https://doi.org/10.1086/740210')]
              }),
              evidence({
                headline: 'Three of five negotiations between community groups and nearby plants produced agreements, and the ones that worked shared the same conditions.',
                finding: paragraph(`
                  Five community-initiated negotiations with Minnesota manufacturers were examined:
                  “three community-company partnerships (a container plant, a foundry, and a cabinet
                  manufacturer) were successful and two (a munitions plant and a petroleum refinery)
                  were not”. The successes shared a company willing to negotiate, an internal
                  champion, an independent facilitator, and independent technical assistance for the
                  community participants. Nothing here measures emissions.
                `),
                grade: 'moderate',
                quote: 'Three community-company partnerships (a container plant, a foundry, and a cabinet manufacturer) were successful and two (a munitions plant and a petroleum refinery) were not.',
                sources: [source('Murdock and Sexton 2002, Environmental Science and Technology', 'https://doi.org/10.1021/es011272k')]
              }),
              evidence({
                headline: 'Community groups that negotiated agreements with nearby polluters rated most of them as working.',
                finding: paragraph(`
                  A study of eleven negotiated Good Neighbor Agreements, commissioned by a community
                  group that had signed one of them, concluded that “the GNAs studied are generally
                  quite effective”. The ratings come from the participants themselves, and the report
                  cautions that “signed and apparently legally-binding agreements do not ensure
                  successful implementation”, with implementation in at least one case achieved only
                  under constant community pressure.
                `),
                grade: 'weak',
                quote: 'The case studies strongly suggest that when used in appropriate circumstances, the GNA approach can be (and often is) an effective and appropriate approach for a community group to address environmentally-oriented company-community conflicts.',
                sources: [source('Kenney et al. 2004, Natural Resources Law Center', 'https://scholar.law.colorado.edu/cgi/viewcontent.cgi?httpsredir=1&article=1018&context=books_reports_studies')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Nobody inspected the plant for eight years, and the first visit came three weeks after the newspaper story.',
                finding: paragraph(`
                  Until June 2017 the agency's verification of the 2009 order “consisted of tracking
                  and reviewing information provided by Chemours”, and the order “was not reviewed or
                  approved by the Office of Enforcement and Compliance Assurance, which is responsible
                  for conducting inspections to verify compliance”. After the local coverage,
                  headquarters asked the region to inspect, and inspectors went on site June 28 and
                  29, 2017, having been “unaware of the 2009 Consent Order and its requirements until
                  the inspection was requested”.
                `),
                grade: 'strong',
                quote: 'Until June 2017, the EPA\'s actions to verify compliance with the 2009 Consent Order and new chemicals testing requirements consisted of tracking and reviewing information provided by Chemours.',
                sources: [source('EPA Office of Inspector General, 20-E-0177', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
              }),
              evidence({
                headline: 'Industry-sponsored community panels build trust but rarely change what the plant emits.',
                finding: paragraph(`
                  A national survey of members and company representatives at chemical industry
                  community advisory panels found: “The survey suggests that CAPs alert companies to
                  community concerns and promote trust between members and sponsoring companies. CAPs
                  are less effective in stimulating changes in environmental performance and, like
                  many citizen advisory groups, have difficulties serving as systematic links back to
                  the community.” Environmental, community, and health professionals were
                  underrepresented on the panels. The survey reports what participants perceive, not
                  measured emissions.
                `),
                grade: 'moderate',
                quote: 'CAPs are less effective in stimulating changes in environmental performance and, like many citizen advisory groups, have difficulties serving as systematic links back to the community.',
                sources: [source('Lynn, Busenberg, Cohen and Chess 2000, Environmental Science and Technology', 'https://doi.org/10.1021/es9906599')]
              })
            ]
          }),
          claim({
            text: 'Earlier detection and verified compliance shorten the exposure window.',
            evidence: [
              evidence({
                headline: 'The state opened an investigation within a week of the story, and residents\' blood levels of the plant\'s compounds fell after the discharge stopped.',
                finding: paragraph(`
                  The newspaper series began June 8, 2017, and state agencies began investigating June
                  14. In blood samples taken six months apart from residents, “the median decrease in
                  fluoroether levels ranged from 34% for Nafion byproduct 2 to 65% for PFO4DA in 6
                  months due to wastewater discharge control”. GenX itself was not detected in blood
                  above the method's reporting limit. The repeated samples come from 44 of the 344
                  enrolled participants, with no control group.
                `),
                grade: 'moderate',
                quote: 'the median decrease in fluoroether levels ranged from 34% for Nafion byproduct 2 to 65% for PFO4DA in 6 months due to wastewater discharge control',
                sources: [
                  source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/'),
                  source('Kotlarz et al. 2020, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP6837')
                ]
              }),
              evidence({
                headline: 'Two utilities spent more than $240 million on filtration after the discharge came to light.',
                finding: paragraph(`
                  “Brunswick County has spent $158.7 million to build a reverse osmosis water
                  treatment plant and the Wilmington-area Cape Fear Public Utility Authority has spent
                  $82.8 million building and maintaining eight granular activated carbon filters”,
                  with continuing costs as the filter media are replaced. These are the measured costs
                  of removing the contamination downstream, not an estimate of what earlier notice
                  would have saved.
                `),
                grade: 'moderate',
                quote: 'Brunswick County has spent $158.7 million to build a reverse osmosis water treatment plant and the Wilmington-area Cape Fear Public Utility Authority has spent $82.8 million building and maintaining eight granular activated carbon filters.',
                sources: [source('WUNC', 'https://www.wunc.org/politics/2025-05-09/chemours-pay-pfas-removal-nc-house-bill')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Agencies and researchers knew before the public did, and nothing moved until a reporter published.',
                finding: paragraph(`
                  State regulators were told about a forthcoming federal study identifying a new
                  perfluorinated compound in the river in June 2015, and a published university study
                  was emailed to state officials in November 2016. The state investigation opened in
                  June 2017, six days after a freelance reporter's series began. He found the data
                  “entirely by chance” while browsing federal monitoring results.
                `),
                grade: 'moderate',
                quote: 'entirely by chance',
                sources: [
                  source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/'),
                  source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')
                ]
              }),
              evidence({
                headline: 'Stopping the discharge did not stop the contamination reaching the river.',
                finding: paragraph(`
                  Sampling upstream and downstream of the plant from 2018 to 2021 found that “despite
                  the cessation of PFAS process wastewater discharge from the plant in November 2017,
                  and the phase-out of perfluorooctane sulfonic acid (PFOS) and perfluorooctanoic acid
                  (PFOA) in North America, both fluoroethers and legacy PFAS continue to reach the
                  river in significant quantities, reflecting groundwater discharge to the river and
                  other continuing inputs”. Earlier detection shortens the discharge window, not the
                  contamination.
                `),
                grade: 'moderate',
                quote: 'both fluoroethers and legacy PFAS continue to reach the river in significant quantities, reflecting groundwater discharge to the river and other continuing inputs',
                sources: [source('Pétré et al. 2022, Science of the Total Environment', 'https://doi.org/10.1016/j.scitotenv.2022.154763')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Residents are told of any detection in drinking water and direct the follow-up testing',
      method: 'Citizen Science',
      summary: 'When a peer-reviewed detection above a threshold reaches a regulator, the agency must notify the affected public within weeks, and the residents notified choose where the follow-up sampling happens.',
      anchor: 'stayed inside agencies and journals',
      where: 'Congress writing the duty into the drinking water or chemicals statute; EPA executing; NC DEQ for the state-scale fallback',
      when: paragraph(`
        August 2012, on EPA's own research detection: that converts a five-year silence into weeks.
        The state fallback is November 2016, on receipt of the quantified paper, which still cuts
        roughly seven months of exposure and makes the disclosure institutional rather than
        journalistic. The window choice (five years against seven months, federal against state
        trigger) is flagged for review. This proposal has the tightest fit of the five to the case's
        central finding, because it targets the exact link that failed.
      `),
      description: paragraph(`
        Require a regulator that receives a peer-reviewed detection of a contaminant above a set
        threshold in drinking water to notify the affected public within weeks, whether or not the
        substance is yet regulated. Congress writes the duty into the drinking-water or chemicals
        statute; EPA executes it, with the state agency as the fallback trigger. Within a set number
        of weeks of notice, affected residents convene. They choose where follow-up sampling happens
        and hear the agency's response plan, and the agency answers their questions in writing. This
        proposal differs from the resident body in Proposal 2 by its trigger: a detection in
        drinking water, not a pending approval. Notice is mandatory, not discretionary. On the Cape
        Fear, EPA's own researchers detected GenX in August 2012 and the finding stayed inside
        agencies and journals until a newspaper story in June 2017. A federal trigger on the 2012
        detection cuts five years of exposure; a state trigger on the November 2016 quantified paper
        still cuts about seven months. Notice would then come from an institution, not from a
        newsroom.
      `),
      outcome: outcome({
        text: 'Residents told of a detection, and given a role in the response, cut years of exposure through drinking water.',
        measured: 'Residents drank water contaminated with GenX',
        claims: [
          claim({
            text: 'A statutory trigger turns a regulator\'s detection into public notice.',
            counterEvidence: [
              evidence({
                headline: 'Laws that do require notice of unregulated contaminants let it wait a year, go only to officials, or be skipped by shutting the well.',
                finding: paragraph(`
                  Federal rules require water systems to tell customers only that unregulated
                  monitoring results are available, and to do so “no later than 12 months after the
                  monitoring results are known”. California requires notice within 30 days of a
                  detection above its advisory levels, but at the lower level the notice goes to local
                  governing bodies. For PFAS above its response levels, a utility may “take a water
                  source where detected levels exceed the response level out of use or provide public
                  notification within 30 days of the confirmed detection”. None of these three
                  provisions triggers on a research finding reaching a regulator.
                `),
                grade: 'moderate',
                quote: 'The owner or operator of a community water system or non-transient, non-community water system required to monitor under § 141.40 must notify persons served by the system of the availability of the results of such sampling no later than 12 months after the monitoring results are known.',
                caveat: 'A record of what three provisions require, not of their effect. No fifty-state survey was done, so these are examples rather than the whole picture.',
                sources: [
                  source('40 CFR 141.207', 'https://www.govinfo.gov/link/cfr/40/141?sectionnum=207&year=mostrecent&link-type=xml'),
                  source('California Health and Safety Code 116455', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116455.'),
                  source('California Health and Safety Code 116378', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116378.')
                ]
              })
            ],
            cases: [
              supportingCase({
                name: 'California Notice Above Advisory Levels',
                where: 'California', when: 'Current law',
                authority: 'Enacted; 30-day notice after a confirmed detection above an advisory level',
                outcome: paragraph(`
                  California requires a public water system to act “within 30 days after it is first
                  informed of a confirmed detection of a contaminant found in drinking water ... that
                  is in excess of a maximum contaminant level, a notification level, or a response
                  level established by the department”, where notification levels are health-based
                  advisory levels for contaminants that have no maximum contaminant level. For PFAS
                  above a response level, the system may instead take the source out of use. This is
                  the closest enacted version of the proposal, and it triggers on the utility's own
                  monitoring rather than on a detection reaching a regulator.
                `),
                strength: 'moderate',
                sources: [
                  source('California Health and Safety Code 116455', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116455.'),
                  source('California Health and Safety Code 116378', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116378.')
                ]
              }),
              supportingCase({
                name: 'Drinking Water Public Notification Rule',
                where: 'United States', when: '2000-present',
                authority: 'Enacted; 24-hour notice for violations, 12-month notice of availability for unregulated results',
                outcome: paragraph(`
                  The federal rule, revised in 2000, gives water systems 24 hours to notify people
                  when a situation could immediately affect health. For unregulated contaminants it
                  requires only a notice that monitoring results are available, no later than 12
                  months after they are known. This proposal replaces a year-long notice of
                  availability with notice of the detection itself within weeks.
                `),
                strength: 'moderate',
                sources: [
                  source('US Environmental Protection Agency', 'https://www.epa.gov/dwreginfo/public-notification-rule'),
                  source('40 CFR 141.207', 'https://www.govinfo.gov/link/cfr/40/141?sectionnum=207&year=mostrecent&link-type=xml')
                ]
              }),
              supportingCase({
                name: 'The June 2017 Wilmington StarNews Story',
                where: 'Wilmington, NC', when: '06/2017',
                authority: 'Journalism performing the missing function',
                outcome: paragraph(`
                  On June 7, 2017, the Wilmington StarNews reported on its front page that GenX from
                  an upstream plant was in the Cape Fear drinking water. The same day, the local
                  utility asked the state for help. The state opened an investigation on June 14,
                  Chemours announced on June 20 that it would “capture, remove and safely dispose of”
                  wastewater containing GenX instead of releasing it into the river, and by July 14
                  the state's health goal had fallen from 71,000 to 140 parts per trillion. A
                  newspaper performed the public-notice function. This proposal writes that duty into
                  law so it does not depend on a newsroom. State regulators had also seen the research
                  before the story ran, so the response cannot be credited to the newspaper alone.
                `),
                strength: 'moderate',
                sources: [
                  source('Wilmington StarNews, June 7, 2017', 'https://www.starnewsonline.com/story/news/environment/2017/06/07/toxin-taints-cfpua-drinking-water/20684831007/'),
                  source('North Carolina Department of Environmental Quality, June 27, 2017', 'https://www.deq.nc.gov/news/press-releases/2017/06/27/deq-verifies-chemours-has-stopped-discharging-genx-wastewater'),
                  source('North Carolina Department of Health and Human Services, GenX', 'https://epi.dph.ncdhhs.gov/oee/a_z/genx.html'),
                  source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')
                ]
              }),
              supportingCase({
                name: 'A Reporter Reading the Federal Monitoring Data',
                where: 'Wilmington, NC', when: '2017',
                authority: 'No duty on anyone; the data were public and unread',
                outcome: paragraph(`
                  The Environmental Protection Agency's national data on unregulated contaminants were
                  public, but no one had to tell residents what they showed. A freelance reporter
                  loaded the data “to see what would pop up for the Wilmington area. There were some
                  local hits”, for older PFAS, which led him to the university research on GenX.
                `),
                strength: 'weak',
                sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
              })
            ]
          }),
          claim({
            text: 'Once the public knows, agencies issue advisories and open investigations within weeks.',
            evidence: [
              evidence({
                headline: 'When large water utilities had to mail water quality reports to their customers, they broke drinking water rules less often.',
                finding: paragraph(`
                  Under a federal rule that took effect in the late 1990s, Massachusetts utilities
                  serving 10,000 people or more had to mail annual water quality reports to
                  customers, while smaller utilities only had to make them available on request.
                  These reports are called Consumer Confidence Reports, or CCRs. Comparing the two
                  groups before and after the rule, “mailing CCRs reduced total
                  violations for this group by between 30 and 44 percent, and reduced more serious
                  health violations by 40 to 57 percent”. The study measures how utilities behaved
                  once customers were told, not how fast agencies acted.
                `),
                grade: 'moderate',
                quote: 'Mailing CCRs reduced total violations for this group by between 30 and 44 percent, and reduced more serious health violations by 40 to 57 percent.',
                sources: [
                  source('Bennear and Olmstead 2008, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2008.03.002'),
                  source('Bennear and Olmstead, Resources', 'https://www.resources.org/common-resources/information-disclosure-and-drinking-water-quality/')
                ]
              }),
              evidence({
                headline: 'Across the United States, water systems broke health-based drinking water rules less often once they had to disclose violations to customers.',
                finding: paragraph(`
                  Federal law began requiring community water systems to report violations to
                  customers in annual water quality reports. Matching systems and comparing violations
                  before and after the requirement across the country, the authors “find that this
                  information disclosure requirement reduced drinking water violations significantly
                  and that the primary effect of disclosure on violations persists for at least four
                  years after policy implementation”. Like the Massachusetts study, it measures how
                  utilities behaved, not how fast agencies acted.
                `),
                grade: 'strong',
                quote: 'We find that this information disclosure requirement reduced drinking water violations significantly and that the primary effect of disclosure on violations persists for at least four years after policy implementation.',
                sources: [source('Baker, Bennear and Olmstead 2023, Journal of the Association of Environmental and Resource Economists', 'https://doi.org/10.1086/722619')]
              })
            ],
            cases: [
              supportingCase({
                name: 'State Response After the StarNews Story',
                where: 'Wilmington, NC', when: '06/2017-02/2019',
                authority: 'Investigation within a week; binding order about 20 months later',
                outcome: paragraph(`
                  The state opened an investigation a week after the story, and Chemours announced the
                  discharge would stop within two weeks. The state's health goal fell 99.8 percent
                  within five weeks. The binding consent order with Chemours was not signed until
                  February 26, 2019, about 20 months after the investigation began. The utility had
                  asked the state for help the same day as the story, and state regulators already
                  had the research before it ran, so this one case cannot separate the newspaper from
                  the rest.
                `),
                strength: 'moderate',
                sources: [
                  source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/'),
                  source('North Carolina Department of Environmental Quality, June 27, 2017', 'https://www.deq.nc.gov/news/press-releases/2017/06/27/deq-verifies-chemours-has-stopped-discharging-genx-wastewater'),
                  source('North Carolina Department of Environmental Quality, GenX investigation', 'https://www.deq.nc.gov/news/key-issues/genx-investigation')
                ]
              }),
              supportingCase({
                name: 'Flint Emergency Response After Resident Data',
                where: 'Flint, MI', when: '2015-2016',
                authority: 'County advisory within days; federal emergency order about four months later',
                outcome: paragraph(`
                  Residents working with Virginia Tech engineers sampled their taps in 2015 and
                  exposed the contamination. Doctors released their analysis of children's blood lead
                  on September 24, 2015. The county health department issued a health advisory on
                  September 29, the state health department confirmed the analysis on October 1, and
                  Flint switched back to Detroit water on October 16. The federal emergency order came
                  on January 21, 2016. That was about seven months after an EPA scientist's interim
                  report on high lead levels was released to the public in June 2015. The EPA
                  Inspector General found that federal staff answered residents' complaints with form
                  letters telling them to contact the state or the water system. Michigan reports providing more than $350 million to
                  Flint, on top of $100 million in federal funds.
                `),
                strength: 'moderate',
                sources: [
                  source('Roy and Edwards 2019, Citizen Science: Theory and Practice', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154'),
                  source('Flint Water Advisory Task Force, March 2016', 'https://www.michigan.gov/-/media/Project/Websites/formergovernors/Folder6/FWATF_FINAL_REPORT_21March2016.pdf?rev=113dd3bfc7e540c9acaeeade6b47a9a1'),
                  source('EPA Office of Inspector General, Report 18-P-0221, July 19, 2018', 'https://www.epa.gov/office-inspector-general/report-management-weaknesses-delayed-response-flint-water-crisis'),
                  source('State of Michigan, January 16, 2016', 'https://www.michigan.gov/flintwater/news/2016/01/16/president-obama-grants-gov--rick-snyders-request-for-emergency-declaration-in-flint'),
                  source('Pieper, Tang and Edwards 2017, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.6b04034')
                ]
              }),
              supportingCase({
                name: 'Vermont PFOA Advisory After Hoosick Falls',
                where: 'Vermont', when: '02-03/2016',
                authority: 'State health advisory within weeks of a resident raising concerns',
                outcome: paragraph(`
                  After PFOA was found in Hoosick Falls, New York, a resident of nearby North
                  Bennington raised concerns with local legislators. “The state of Vermont reacted
                  quickly”, drafting a PFOA health advisory of 20 parts per trillion in February 2016
                  and finalizing it in March. When state testing of private wells found levels well
                  above the advisory, the state quickly provided bottled water.
                `),
                strength: 'moderate',
                sources: [source('Cordner et al. 2019, Journal of Exposure Science and Environmental Epidemiology', 'https://doi.org/10.1038/s41370-018-0099-9')]
              }),
              supportingCase({
                name: 'Hoosick Falls Do-Not-Drink Advice and Superfund Listing',
                where: 'Hoosick Falls, NY', when: '11/2015-09/2016',
                authority: 'Federal advice not to drink; Superfund listing proposed about nine months later',
                outcome: paragraph(`
                  On November 25, 2015, EPA recommended that residents not drink or cook with the
                  village water because PFOA was above 400 parts per trillion. EPA proposed the
                  Saint-Gobain McCaffrey Street plant for the Superfund list on September 9, 2016,
                  about nine and a half months later. The quick step was advice, and the binding step
                  took most of a year.
                `),
                strength: 'moderate',
                sources: [source('US Environmental Protection Agency, January 2017 archive', 'https://19january2017snapshot.epa.gov/ny/hoosick-falls-water-contamination_.html')]
              }),
              supportingCase({
                name: 'New Jersey PFAS Results Released by a Reporter',
                where: 'New Jersey', when: '2009-2014',
                authority: 'State advisory about six months after the public learned',
                outcome: paragraph(`
                  The state sampled drinking water systems in 2009 and 2010 and found PFAS in most of
                  them. It told the towns but “no residents were notified and the results were not
                  publicly released”. On July 16, 2013, a reporter obtained the results through a
                  public records request. The first state health advisory, for Paulsboro, came in
                  January 2014, about six months later, and recommended bottled water or formula for
                  infants. Here the advisory took months, not weeks.
                `),
                strength: 'moderate',
                sources: [
                  source('Marcus and Mueller 2024, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2024.102987'),
                  source('Marcus and Mueller 2023, NBER Working Paper 31731', 'https://www.nber.org/system/files/working_papers/w31731/revisions/w31731.rev0.pdf')
                ]
              })
            ]
          }),
          claim({
            text: 'Residents who direct testing find exposure that official sampling misses.',
            evidence: [
              evidence({
                headline: 'In Flint, the homes residents chose to test matched the city\'s housing better than the sites the state chose, including poor wards the state skipped.',
                finding: paragraph(`
                  After Flint returned to Detroit water, the state tracked lead at sentinel sites it
                  picked, while residents tested their own homes with free kits. “Although houses with
                  higher WLL were more likely to be sampled repeatedly, voluntary sampling turned out
                  to reproduce fairly well the main characteristics (i.e. presence of lead service
                  lines (LSL), construction year) of Flint housing stock. State-controlled sampling
                  was less representative.” There was also “no sentinel site with LSL in two of the
                  most impoverished wards”. Homes with high lead were more likely to be retested,
                  which biases the resident data the other way.
                `),
                grade: 'moderate',
                quote: 'Although houses with higher WLL were more likely to be sampled repeatedly, voluntary sampling turned out to reproduce fairly well the main characteristics (i.e. presence of lead service lines (LSL), construction year) of Flint housing stock. State-controlled sampling was less representative',
                sources: [source('Goovaerts 2017, Science of the Total Environment', 'https://doi.org/10.1016/j.scitotenv.2017.02.183')]
              }),
              evidence({
                headline: 'When Pennsylvania well owners sampled their own private wells, nearly one in five had PFAS above a health-based drinking water limit.',
                finding: paragraph(`
                  Private wells face “limited regulation”, so routine official sampling rarely reaches
                  them. Across 167 wells sampled by their owners over three years, “eighteen percent
                  of the wells exceeded at least one health-related maximum contaminant level”, and
                  levels in the same well changed between rounds. The owners chose to take part, so
                  the wells may not represent all wells, and there is no official sampling to compare
                  against.
                `),
                grade: 'moderate',
                quote: 'Eighteen percent of the wells exceeded at least one health-related maximum contaminant level.',
                sources: [source('Kosiarski et al. 2025, Journal of Environmental Management', 'https://doi.org/10.1016/j.jenvman.2025.125863')]
              }),
              evidence({
                headline: 'Cape Fear residents who collected their own tap and river water found chemicals traced to the local plant, some above the federal drinking water limit.',
                finding: paragraph(`
                  Community groups recruited residents along the Cape Fear River, who collected
                  drinking water at home or recreational water nearby. “Notably, at several locations,
                  PFOA (39.8 ng/L) and PFOS (205.3 ng/L) were at levels that exceeded the mandatory
                  EPA maximum contaminant level (MCL) of 4 ng/L. Additionally, several sites had
                  detectable levels of PFAS that are unique to a local chemical manufacturer.” Results
                  went back to residents through the same community groups. Some samples were
                  recreational water, where the drinking water limit does not apply, and nothing here
                  compares the results with official sampling.
                `),
                grade: 'weak',
                quote: 'Notably, at several locations, PFOA (39.8 ng/L) and PFOS (205.3 ng/L) were at levels that exceeded the mandatory EPA maximum contaminant level (MCL) of 4 ng/L. Additionally, several sites had detectable levels of PFAS that are unique to a local chemical manufacturer.',
                sources: [source('Weed et al. 2024, Toxics', 'https://doi.org/10.3390/toxics12060403')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In Pittsburgh, homes that asked for lead tests showed less lead than the utility\'s required test sites.',
                finding: paragraph(`
                  After Pittsburgh's water utility exceeded the lead action level, it ran both the
                  required compliance sampling and testing on customer request. “The LCR sampling
                  results, at locations expected to be elevated when corrosion is not well
                  controlled, had higher concentrations than customer-requested homes.” The authors
                  add that “broader water quality sampling provides information about specific homes
                  but is not well suited to assessing the efficacy of corrosion control efforts by
                  utilities”. Where official sampling is done properly at high-risk sites, resident
                  requests did not find more exposure. Customers only requested tests; the utility ran
                  them.
                `),
                grade: 'moderate',
                quote: 'The LCR sampling results, at locations expected to be elevated when corrosion is not well controlled, had higher concentrations than customer-requested homes',
                sources: [source('Vijayashanthar, Small and VanBriesen 2023, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.2c06614')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Lead Rising in One Flint Home',
                where: 'Flint, MI', when: '2014-2015',
                authority: 'Home sampling, investigated by university engineers',
                outcome: paragraph(`
                  Ten months after Flint switched to river water, “water samples collected from a
                  Flint residence revealed progressively rising water lead levels (104, 397, and 707
                  μg/L) coinciding with increasing water discoloration”. The published account credits
                  the state of emergency to the analysis of children's blood lead in September 2015,
                  and says the filters and bottled water that followed “likely averted an even worse
                  exposure event”. It is one home, and the record does not say who collected the
                  samples.
                `),
                strength: 'weak',
                sources: [source('Pieper, Tang and Edwards 2017, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.6b04034')]
              })
            ]
          }),
          claim({
            text: 'Earlier response avoids years of exposure.',
            evidence: [
              evidence({
                headline: 'Wilmington residents\' blood carried high levels of the plant\'s chemicals before the public knew, and two of those chemicals fell sharply within six months of the discharge stopping.',
                finding: paragraph(`
                  Blood drawn from Wilmington adults between 2010 and 2016 and kept in a biobank showed
                  that “twenty PFAS were detected in >50% of serum samples; perfluoromethoxyacetic
                  acid (PFMOAA) and trifluoroacetic acid (TFA) exhibited the highest median
                  concentrations (PFMOAA: 42 ng/mL; TFA: 17 ng/mL)”, out of 56 PFAS measured. After
                  the discharge was controlled in 2017, residents tested twice saw two of the plant's
                  compounds fall, from 34 percent for Nafion byproduct 2 to 65 percent for PFO4DA in
                  six months, while four older PFAS changed between 0 and 13 percent. The studies show
                  exposure during the years before disclosure and a drop after control. They do not
                  measure how much an earlier response would have prevented.
                `),
                grade: 'moderate',
                quote: 'Twenty PFAS were detected in >50% of serum samples; perfluoromethoxyacetic acid (PFMOAA) and trifluoroacetic acid (TFA) exhibited the highest median concentrations (PFMOAA: 42 ng/mL; TFA: 17 ng/mL)',
                sources: [
                  source('Cheng et al. 2025, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.5c08146'),
                  source('Kotlarz et al. 2020, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP6837')
                ]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Affected residents appoint independent experts to verify health data',
      method: 'Independent Science Panel',
      summary: 'In an emergency health assessment, community-appointed reviewers can split water and blood samples and publish their own findings.',
      anchor: 'State action began only after public disclosure',
      where: 'NC DHHS and NC DEQ',
      when: paragraph(`
        June to July 2017, Wilmington: the five-week window in which the state's health screening
        number moved from 71,000 ppt to 140 ppt and a key early meeting between DEQ, Chemours, and
        officials was closed to the public with one pool reporter. The specific fit is a standing
        rule that emergency health-goal setting seats community-appointed reviewers with authority
        to split samples.
      `),
      description: paragraph(`
        Give affected residents the right to appoint their own reviewers whenever the state sets an
        emergency health screening level or returns exposure results. The reviewers can split water
        and blood samples, verify the state's analysis, and publish findings through a channel the
        community chose. The state health and environmental departments keep authority over the
        screening level and the response; the reviewers' role is verification and translation, and
        the state must answer their findings in writing. The affected community makes the
        appointments, paid by the responsible party or the state. In June to July 2017 in
        Wilmington, the state's health screening number moved from 71,000 to 140 parts per trillion
        in five weeks, and a key meeting between regulators, Chemours, and officials was closed to
        the public. The June 8 session framed this as the route around authorities the public
        distrusts.
      `),
      outcome: outcome({
        text: 'Residents who chose the reviewers trust the risk information.',
        measured: null,
        claims: [
          claim({
            text: 'Community-appointed panels produce findings that carry weight.',
            evidence: [
              evidence({
                headline: 'DuPont and lawyers for the affected class jointly chose a science panel, and DuPont agreed not to contest the links it found.',
                finding: paragraph(`
                  Under the class action settlement approved in February 2005, DuPont and the class's
                  representatives jointly selected three epidemiologists. The panel reported that
                  “there is a probable link between exposure to C8 (also known as PFOA) and
                  testicular cancer and kidney cancer”, and found probable links for six disease
                  categories in all: high cholesterol, ulcerative colitis, thyroid disease,
                  testicular cancer, kidney cancer, and pregnancy-induced hypertension. The court's
                  2016 opinion records that DuPont agreed not to contest general causation in those
                  actions.
                `),
                grade: 'weak',
                quote: 'there is a probable link between exposure to C8 (also known as PFOA) and testicular cancer and kidney cancer',
                caveat: 'One case, and the people who chose the panel were lawyers for the class, not residents. It cannot carry the claim as worded.',
                sources: [
                  source('C8 Science Panel, probable link evaluation of cancer', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
                  source('C8 Science Panel', 'https://www.c8sciencepanel.org/'),
                  source('In re DuPont C-8 Personal Injury Litigation, S.D. Ohio 2016', 'https://caselaw.findlaw.com/court/us-dis-crt-s-d-ohi-eas-div/1967795.html')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Lawyers on both sides picked the panel, and its findings took seven years to arrive.',
                finding: paragraph(`
                  The panel members were “chosen jointly by the parties to the legal settlement”, so
                  residents did not select them. The court recorded that the panel engaged in its work
                  for seven years before issuing findings in 2011 and 2012, a pace no emergency health
                  response could match.
                `),
                grade: 'weak',
                quote: 'chosen jointly by the parties to the legal settlement of a case between plaintiffs and DuPont regarding releases of C8 from the plant',
                sources: [
                  source('C8 Science Panel', 'https://www.c8sciencepanel.org/'),
                  source('In re DuPont C-8 Personal Injury Litigation, S.D. Ohio 2016', 'https://caselaw.findlaw.com/court/us-dis-crt-s-d-ohi-eas-div/1967795.html')
                ]
              })
            ],
            cases: [
              supportingCase({
                name: 'C8 Science Panel',
                where: 'West Virginia and Ohio', when: '2005-2013',
                authority: 'Appointed jointly by both sides; findings carried automatic legal consequence',
                outcome: paragraph(`
                  The panel, three epidemiologists jointly selected by DuPont and the class,
                  delivered probable-link findings for six conditions. It built on a companion
                  health project that collected blood samples and questionnaires from 69,030
                  exposed residents. Under the settlement, DuPont agreed not to contest general
                  causation for the linked diseases in class members' injury suits.
                `),
                strength: 'moderate',
                sources: [
                  source('C8 Science Panel, probable link evaluation of cancer', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf'),
                  source('C8 Science Panel', 'https://www.c8sciencepanel.org/'),
                  source('In re DuPont C-8 Personal Injury Litigation, S.D. Ohio 2016', 'https://caselaw.findlaw.com/court/us-dis-crt-s-d-ohi-eas-div/1967795.html')
                ]
              })
            ]
          }),
          claim({
            text: 'Independent verification builds a trusted channel for risk information.',
            evidence: [
              evidence({
                headline: 'Residents trusted independent scientists most about contaminated land, and trusted neighbors\' groups almost as much.',
                finding: paragraph(`
                  Residents of two English urban regions rated six sources of information about
                  contaminated land. “Overall, scientists were trusted most and developers least, but
                  this was only partly due to their greater perceived expertise.” Resident groups and
                  friends and family “were also trusted, despite being seen as relatively inexpert,
                  since they scored highly on openness and shared interests, these latter two
                  attributes being more important predictors of trust in individual sources than
                  perceived expertise”. It measures what predicts trust, not what a community
                  appointment process changes.
                `),
                grade: 'moderate',
                quote: 'Overall, scientists were trusted most and developers least, but this was only partly due to their greater perceived expertise.',
                sources: [source('Eiser, Stafford, Henneberry and Catney 2009, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.2008.01131.x')]
              }),
              evidence({
                headline: 'People who received their own chemical results said getting them built their trust in science.',
                finding: paragraph(`
                  Drawing on a set of studies that returned personal results to the people tested, the
                  authors report that “participants and researchers who have participated in
                  report-back identified benefits: increasing trust in science, retention in cohort
                  studies, environmental health literacy, individual and community empowerment, and
                  motivation to reduce exposures”. They call report-back “a powerful tool for
                  increasing understanding of environmental health”.
                `),
                grade: 'weak',
                quote: 'Personal exposure report-back is a powerful tool for increasing understanding of environmental health',
                sources: [source('Brody et al. 2014, Environmental Health', 'https://doi.org/10.1186/1476-069X-13-40')]
              }),
              evidence({
                headline: 'After Nevada participants got their own chemical results, far fewer said they did not know how to cut their exposure.',
                finding: paragraph(`
                  In a Nevada health project, before results went back, “79% cited not knowing what to
                  do” about reducing exposure, and “this dropped to 35% after report-back”. Among the
                  48 people who gave urine samples before and after, one phthalate marker fell. There
                  was no comparison group, and most of the measures are self-reported.
                `),
                grade: 'weak',
                quote: 'When asked what challenges they faced in reducing exposure, 79% cited not knowing what to do. This dropped to 35% after report-back.',
                sources: [source('Rochester et al. 2024, International Journal of Environmental Research and Public Health', 'https://doi.org/10.3390/ijerph21070905')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Women who received their own chemical results changed their habits no more than women who got only the study-wide findings.',
                finding: paragraph(`
                  Women in a long-running California cohort were randomly assigned to receive a report
                  with their own chemical results or only the study-wide findings. Both groups
                  corrected misconceptions and acted on what they read, and “total behavior was
                  associated with knowledge and concern but not race, education, or report type”.
                `),
                grade: 'strong',
                quote: 'total behavior was associated with knowledge and concern but not race, education, or report type',
                sources: [source('Boronow et al. 2023, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP12565')]
              }),
              evidence({
                headline: 'Complete independence is not what makes a source trusted; some accountability is.',
                finding: paragraph(`
                  Across interviews and a survey of 888 people about food risk information, “contrary
                  to previous research, complete freedom does not lead to trust-rather sources which
                  possess moderate accountability are seen to be the most trusted”. The setting is
                  food risk, so it cannot be read straight onto environmental health reviewers.
                `),
                grade: 'moderate',
                quote: 'Contrary to previous research, complete freedom does not lead to trust-rather sources which possess moderate accountability are seen to be the most trusted.',
                sources: [source('Frewer, Howard, Hedderley and Shepherd 1996, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.1996.tb01094.x')]
              }),
              evidence({
                headline: 'Researchers who return results rarely test whether their reports worked.',
                finding: paragraph(`
                  A systematic review of 32 report-back studies found that “only three studies applied
                  formal communication or evaluation frameworks, and only one-third described how
                  materials were developed”, with evaluation resting mostly on surveys and interviews
                  after the fact. That says the evidence is thin, not that report-back does not work.
                `),
                grade: 'moderate',
                quote: 'only three studies applied formal communication or evaluation frameworks, and only one-third described how materials were developed',
                sources: [source('Germano et al. 2026, Environmental Health', 'https://doi.org/10.1186/s12940-026-01281-z')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Stillwater Good Neighbor Agreement',
                where: 'Montana', when: '2000-present',
                authority: 'Binding agreement; company-funded experts advising the local councils',
                outcome: paragraph(`
                  The agreement holds the mine to water quality metrics “more stringent than existing
                  state and federal regulatory standards” and “requires the company to fund mining and
                  water experts who advise the local organizations”. Two oversight committees split
                  their seats evenly between the company and the councils. The World Resources
                  Institute reports that in 24 years “there has been no arbitration or environmental
                  litigation”. No peer-reviewed evaluation of the agreement was found.
                `),
                strength: 'weak',
                sources: [source('World Resources Institute', 'https://www.wri.org/snapshots/community-benefits-snapshot-stillwater-good-neighbor-agreement')]
              }),
              supportingCase({
                name: 'Superfund Technical Assistance Grants',
                where: 'United States', when: '1988-present',
                authority: 'Federal funds for community-hired expertise',
                outcome: paragraph(`
                  Auditors found that “communities use the grants primarily to hire technical advisors
                  to help them understand the technical aspects of a site cleanup in their area”. In
                  the program's first four years the grants reached “9 percent of the approximately
                  1,150 communities that may be eligible”, and the auditors flagged that it was
                  unclear how far recipients could use the money to “independently verify or clarify
                  existing site cleanup analyses or information”.
                `),
                strength: 'moderate',
                sources: [source('US Government Accountability Office, T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
              })
            ]
          }),
          claim({
            text: 'A trusted channel sustains study participation and protective behavior.',
            evidence: [
              evidence({
                headline: 'A settlement-funded project run by an outside company enrolled 69,030 residents in thirteen months and told each of them their own blood level.',
                finding: paragraph(`
                  The C8 Health Project was set up so class members could learn their own PFOA levels,
                  and “an independent company, Brookmar, Inc., was created to design, publicize, and
                  implement the Project under court supervision”. “Final study participation was
                  69,030, enrolled over a 13-month period in 2005-2006.”
                `),
                grade: 'weak',
                quote: 'Final study participation was 69,030, enrolled over a 13-month period in 2005-2006',
                sources: [source('Frisbee et al. 2009, Environmental Health Perspectives', 'https://doi.org/10.1289/ehp.0800379')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The health project that enrolled 69,030 residents paid each of them up to $400, and joining was the route to settlement money.',
                finding: paragraph(`
                  “Each verified participant received $150 for completing the health survey and an
                  additional $250 for providing a blood sample (regardless of sample quantity or
                  quality)”, and project participation was the established route for class members to
                  benefit from the settlement. Money and eligibility, not only trust, stand behind the
                  enrollment figure.
                `),
                grade: 'weak',
                quote: 'Each verified participant received $150 for completing the health survey and an additional $250 for providing a blood sample (regardless of sample quantity or quality).',
                sources: [source('Frisbee et al. 2009, Environmental Health Perspectives', 'https://doi.org/10.1289/ehp.0800379')]
              }),
              evidence({
                headline: 'The order that forced the plant to cut its pollution came out of a state lawsuit joined by a river group, not out of an expert review.',
                finding: paragraph(`
                  The state sued Chemours in Bladen County Superior Court, and “Chemours and DEQ have
                  consented to the intervention of Cape Fear River Watch in this matter for the purpose
                  of entering into this Consent Order”. The order requires Chemours to install
                  abatement technology at the facility, including a thermal oxidizer, and sets
                  emission reduction milestones. No expert review body appears in it.
                `),
                grade: 'weak',
                quote: 'Chemours and DEQ have consented to the intervention of Cape Fear River Watch in this matter for the purpose of entering into this Consent Order',
                sources: [source('Consent Order, Bladen County 17 CVS 580', 'https://capefearriverwatch.org/wp-content/uploads/2020/07/Consent-Order-file-stamped-and-fully-executed-b-w-.pdf')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Federal grants fund standing local monitoring and legal capacity',
      method: 'Funded Community Oversight',
      summary: 'A federal grant program pays for community-governed monitoring, technical, and legal staff whose deliverable is a petition for a statewide standard.',
      anchor: 'public notice and comment',
      where: 'Congress and EPA for the funding; the NC Environmental Management Commission for the standard-setting it must feed',
      when: paragraph(`
        February 2019, at Consent Order entry. The order created facility-scoped machinery (citizen
        enforcement, a sampling network, the exposure study) with no bridge to rulemaking. The
        intervention is a federal grant program funding standing local technical and legal capacity
        whose deliverable is a petition-ready statewide standard rather than another facility order.
        The 2024 to 2026 federal reversal shows why the state layer must hold it.
      `),
      description: paragraph(`
        Create a federal grant program that funds standing, community-governed monitoring,
        technical, and legal capacity in affected regions. The deliverable is a set of
        petition-ready proposals for statewide standards, not another facility-specific order.
        Congress and EPA fund it; a local board of residents, utilities, and local governments
        directs the work; the state Environmental Management Commission remains the body that adopts
        standards. Residents' role is oversight of implementation and of the data, and the board
        must publish its monitoring results and petitions. The anchor is February 2019, when the
        Consent Order created facility-scoped machinery, citizen enforcement, a sampling network,
        and the exposure study, with no bridge to rulemaking. The 2024 to 2026 federal reversal on
        PFAS limits shows why a state layer must hold the standard.
      `),
      outcome: outcome({
        text: 'Standing local capacity carries the fight to statewide rule adoption.',
        measured: 'North Carolina set no enforceable PFAS standard',
        claims: [
          claim({
            text: 'Federal funding builds standing local capacity.',
            evidence: [
              evidence({
                headline: 'At hazardous waste sites where residents organized or won a technical grant, regulators picked more health-protective cleanups.',
                finding: paragraph(`
                  Comparing cleanup remedies chosen at hazardous waste sites with and without
                  organized citizen groups, and correcting for the fact that such groups do not form
                  at random, the study finds that “even when controlling for other factors that may
                  guide agency decisionmaking, such as site characteristics, the Environmental
                  Protection Agency is more likely to choose health protective clean-up approaches
                  when CAGs and TAGs have formed at Superfund sites”. It cannot separate the advisory
                  groups from the grants, and residents did not choose the experts.
                `),
                grade: 'strong',
                quote: 'the Environmental Protection Agency is more likely to choose health protective clean-up approaches when CAGs and TAGs have formed at Superfund sites',
                sources: [source('Daley 2007, Journal of Policy Analysis and Management', 'https://doi.org/10.1002/pam.20251')]
              }),
              evidence({
                headline: 'Federal grants paid for technical advisors that communities near hazardous waste sites hired themselves.',
                finding: paragraph(`
                  Auditors found that “communities use the grants primarily to hire technical advisors
                  to help them understand the technical aspects of a site cleanup in their area”, and
                  that recipients “were generally pleased with the benefits they derived from those
                  grants”.
                `),
                grade: 'moderate',
                quote: 'Communities use the grants primarily to hire technical advisors to help them understand the technical aspects of a site cleanup in their area.',
                sources: [source('US Government Accountability Office, T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In its first years the federal grant program reached fewer than one in ten of the communities that could have applied.',
                finding: paragraph(`
                  The Environmental Protection Agency had awarded 103 grants, “only 9 percent of the
                  approximately 1,150 communities that may be eligible for the program”. Auditors laid
                  the low uptake mainly to limited outreach, and separately reported that residents
                  found the application process “lengthy, labor intensive, and intimidating”.
                `),
                grade: 'moderate',
                quote: 'These 103 grants represent only 9 percent of the approximately 1,150 communities that may be eligible for the program.',
                sources: [source('US Government Accountability Office, T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Superfund Technical Assistance Grants',
                where: 'United States', when: '1988-present',
                authority: 'The existing federal-funds-for-local-capacity template',
                outcome: paragraph(`
                  Four years in, the program had awarded 103 grants, “only 9 percent of the
                  approximately 1,150 communities that may be eligible for the program”, and
                  recipients described an application process that was “lengthy, labor intensive, and
                  intimidating”, procurement rules that made hiring an advisor hard, and reimbursement
                  delays.
                `),
                strength: 'moderate',
                sources: [source('US Government Accountability Office, T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
              }),
              supportingCase({
                name: 'North Carolina PFAS Testing Network',
                where: 'North Carolina', when: '2018-2021',
                authority: 'State money, capacity held by universities',
                outcome: paragraph(`
                  Session Law 2018-5 sent “five million thirteen thousand dollars ($5,013,000)” to the
                  North Carolina Collaboratory, which planned sampling of 348 sites across the state,
                  190 surface water intakes and 158 municipal public water supply wells, and in the
                  end collected two rounds from “376 county and municipal drinking water sources in
                  NC”. The money was state money and the capacity sat in universities, not in a
                  community body.
                `),
                strength: 'weak',
                sources: [
                  source('North Carolina PFAS Testing Network, progress report to the General Assembly', 'https://ncpfasnetwork.com/wp-content/uploads/sites/1328/2023/05/collaboratory-pfas-ncga-progress-report-2018-10.pdf'),
                  source('North Carolina PFAS Testing Network, final report', 'https://coastalreview.org/wp-content/uploads/2021/05/NC-PFAST-Network-Final-Report_revised_30Apr2021-1.pdf')
                ]
              }),
              supportingCase({
                name: 'Racial and Ethnic Approaches to Community Health',
                where: 'United States', when: '2002-2006',
                authority: 'Federal money, local design, health delivery',
                outcome: paragraph(`
                  The Centers for Disease Control and Prevention compared its funded communities with
                  men in the same states: “the prevalence of current smoking significantly decreased
                  and the quit ratio (percentage of ever smokers who have quit) significantly
                  increased in REACH Vietnamese and Cambodian communities, but changes were minimal
                  among all men in California or Massachusetts (where these communities were
                  located)”. The funding agency evaluated its own program.
                `),
                strength: 'weak',
                sources: [source('Zhou et al. 2014, Morbidity and Mortality Weekly Report Supplements', 'https://pubmed.ncbi.nlm.nih.gov/24743665/')]
              })
            ]
          }),
          claim({
            text: 'Standing local capacity turns facility wins into statewide standards.',
            evidence: [
              evidence({
                headline: 'Michigan set enforceable statewide drinking water limits for seven of these chemicals.',
                finding: paragraph(`
                  Michigan's rules “amend current drinking water rules by establishing maximum
                  contaminant levels (MCLs) and sampling requirements for seven PFAS compounds”, and
                  the state reports that the final rules took effect on August 3, 2020. The record
                  shows the adoption. It says nothing about what local capacity did to produce it.
                `),
                grade: 'weak',
                quote: 'These rules amend current drinking water rules by establishing maximum contaminant levels (MCLs) and sampling requirements for seven PFAS compounds.',
                sources: [source('Michigan Department of Environment, Great Lakes, and Energy', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Where private citizens sued polluters, regulators monitored more but penalized less.',
                finding: paragraph(`
                  Tracing what happens to public enforcement when citizens bring their own suits, the
                  authors “use judicial instruments in an attempt to isolate the causal influence of
                  private enforcement on public enforcement”, and “find that private citizen suits
                  crowd in public monitoring but significantly crowd out public sanctions”.
                `),
                grade: 'strong',
                quote: 'We find that private citizen suits crowd in public monitoring but significantly crowd out public sanctions.',
                sources: [source('Langpap and Shimshack 2010, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2009.12.001')]
              }),
              evidence({
                headline: 'North Carolina\'s House passed a bill to make these polluters pay for cleanup, and the Senate has not acted on it.',
                finding: paragraph(`
                  House Bill 569 passed the House 104 to 3 in May 2025. The Senate received it,
                  referred it to committee on June 5, 2025, and the legislature's own record shows no
                  action after that. Nine years of participation on the Cape Fear produced remediation
                  at one plant, and no statewide standard has followed.
                `),
                grade: 'weak',
                sources: [source('North Carolina General Assembly, House Bill 569 (2025-2026)', 'https://www.ncleg.gov/BillLookUp/2025/H569')]
              })
            ],
            cases: [
              supportingCase({
                name: 'Michigan PFAS Drinking Water Limits',
                where: 'Michigan', when: '2020',
                authority: 'Enforceable statewide rules',
                outcome: paragraph(`
                  The rules set maximum contaminant levels and sampling requirements for seven PFAS
                  compounds and took effect on August 3, 2020. The state applies them to “all
                  community water supplies and nontransient noncommunity water supplies”.
                `),
                strength: 'weak',
                sources: [source('Michigan Department of Environment, Great Lakes, and Energy', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
              })
            ]
          }),
          claim({
            text: 'Adopted standards protect the next community before exposure.',
            evidence: [
              evidence({
                headline: 'Arsenic in people\'s bodies fell after the federal limit took effect, and only among those drinking public water.',
                finding: paragraph(`
                  Comparing public water users with private well users, whom the rule does not cover,
                  urinary arsenic fell 17 percent over a decade among public water users while no
                  change was observed among well water users. The authors conclude that “the decline
                  in urinary arsenic among public water but not private well users in NHANES 2003-2014
                  indicates that the implementation of the current MCL has reduced arsenic exposure in
                  the US population”.
                `),
                grade: 'strong',
                quote: 'The decline in urinary arsenic among public water but not private well users in NHANES 2003-2014 indicates that the implementation of the current MCL has reduced arsenic exposure in the US population.',
                caveat: 'It measures exposure falling after a standard took effect, not a community protected before exposure began.',
                sources: [source('Nigra et al. 2017, The Lancet Public Health', 'https://doi.org/10.1016/S2468-2667(17)30195-0')]
              }),
              evidence({
                headline: 'Levels in New Jersey tap water fell after the state moved to set limits for these chemicals.',
                finding: paragraph(`
                  New Jersey's drinking water institute recommended limits for three of these
                  compounds between 2015 and 2018. Comparing quarterly test results from 47 water
                  systems before and after, the researchers found “a 55% (95% CI: 11%, 77%) and 50%
                  (95% CI: 14%, 71%) decline in PFOA and PFNA levels, respectively, following
                  recommendation of MCLs”. There is no comparison group, and the authors note
                  voluntary reductions and industry phase-outs as possible explanations.
                `),
                grade: 'moderate',
                quote: 'There was a 55% (95% CI: 11%, 77%) and 50% (95% CI: 14%, 71%) decline in PFOA and PFNA levels, respectively, following recommendation of MCLs.',
                sources: [source('Iyer et al. 2026, Environment International', 'https://doi.org/10.1016/j.envint.2026.110179')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The Environmental Protection Agency proposed rescinding the limits for four of these chemicals, including GenX.',
                finding: paragraph(`
                  Adoption does not guarantee persistence. In May 2026 the agency proposed “to rescind
                  its regulatory determinations to regulate four per- and polyfluoroalkyl substances
                  (PFAS)”, GenX among them, on the ground that under the best reading of the statute it
                  is not authorized to set determinations and limits at the same time. The rescission
                  is a proposal, not a final rule.
                `),
                grade: 'moderate',
                quote: 'The Environmental Protection Agency (EPA) is proposing to rescind its regulatory determinations to regulate four per- and polyfluoroalkyl substances (PFAS)',
                sources: [source('Federal Register, May 20, 2026', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
              }),
              evidence({
                headline: 'States with more water-focused rules for these chemicals showed more detections, not fewer.',
                finding: paragraph(`
                  Across 56,856 public water systems, “total policy counts were not associated with
                  lower PFAS detection in UCMR5, except for a borderline reduction in PFBS”, and
                  “greater concentrations of water-focused policies were linked to increased PFAS
                  detections, likely reflecting enhanced surveillance or responses in high-burden
                  states”. The authors read this as more looking rather than less protection.
                `),
                grade: 'moderate',
                quote: 'Greater concentrations of water-focused policies were linked to increased PFAS detections, likely reflecting enhanced surveillance or responses in high-burden states.',
                sources: [source('Li et al. 2026, Next Research', 'https://doi.org/10.1016/j.nexres.2026.101827')]
              })
            ]
          })
        ]
      }),
      sources: []
    })
  ]
});
