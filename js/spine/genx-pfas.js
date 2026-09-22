import {
  spineData, mechanism, impact, spineProposal, outcome, claim,
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
        Roughly 200,000 water customers, and up to 300,000 people downstream, drank
        Cape Fear River water. Water entering Wilmington's treatment plant carried GenX at a
        mean of 631 ng/L, and treatment did not remove it. The discharge ran from 1980 to 2017.
      `),
      measures: paragraph(`
        Roughly 200,000 Cape Fear Public Utility Authority (CFPUA) customers, and
        250,000 to 300,000 people downstream, drank Cape Fear River water. Water
        entering the Wilmington treatment plant carried a mean GenX concentration of 631 ng/L,
        with intake levels up to about 4,500 ng/L, and treatment did not remove it. The discharge ran from 1980 to 2017.
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
            source('Kotlarz et al. 2020', 'https://doi.org/10.1289/EHP6837')
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
        residents with more PFAS had higher cholesterol. Large reviews tie PFAS
        to higher cholesterol and kidney cancer, with weaker evidence for
        testicular cancer.
      `),
      measures: paragraph(`
        In the Wilmington cohort, residents with more PFOS and PFNA in their
        blood had higher total and non-HDL cholesterol, about 5 to 6 mg/dL per
        quartile, with the strongest link in older adults. Twelve percent of
        tested residents exceeded the blood level at which the National
        Academies recommend medical screening. PFOA was elevated in 97 percent
        or more of tested residents. A National Academies review found
        sufficient evidence tying PFAS to high cholesterol, kidney cancer,
        lower antibody response, and lower fetal growth, and limited evidence
        for testicular cancer. The International Agency for Research on Cancer
        (IARC) classified PFOA carcinogenic to humans in 2023, mainly on animal
        and mechanistic evidence. In animal studies, GenX produces liver and
        pancreatic tumors. No human disease or mortality study of GenX exists.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'moderate', note: 'Cholesterol associations are measured in this cohort; cancer and mortality evidence comes from PFOA populations elsewhere' }
      ],
      evidence: [
        evidence({
          headline: 'A National Academies review found strong evidence tying PFAS exposure to higher cholesterol, kidney cancer, weaker antibody response, and smaller babies.',
          finding: paragraph(`
            A National Academies committee weighed the federal toxicological profile and recent human studies to advise doctors on PFAS testing. “The committee found sufficient evidence of an association for the following diseases and health outcomes: decreased antibody response (in adults and children), dyslipidemia (in adults and children), decreased infant and fetal growth, and increased risk of kidney cancer (in adults).” It rated the evidence for testicular cancer, thyroid disease, ulcerative colitis, and pregnancy-induced hypertension as limited or suggestive, and found too little to judge many other conditions. The committee advised added clinical follow-up above a summed blood level of 20 ng/mL. In the GenX Exposure Study, 12 percent of tested Wilmington residents were above that level. The review covers legacy PFAS such as PFOA and PFOS, not GenX.
          `),
          grade: 'strong',
          quote: 'The committee found sufficient evidence of an association for the following diseases and health outcomes: decreased antibody response (in adults and children), dyslipidemia (in adults and children), decreased infant and fetal growth, and increased risk of kidney cancer (in adults).',
          sources: [
            source('National Academies of Sciences, Engineering, and Medicine 2022, Guidance on PFAS Exposure, Testing, and Clinical Follow-Up', 'https://doi.org/10.17226/26156'),
            source('GenX Exposure Study, 2024 report to participants', 'https://genxstudy.ncsu.edu/wp-content/uploads/sites/149/2025/11/Deidentified_2024_PFAS_ReportBack.pdf')
          ]
        }),
        evidence({
          headline: 'The World Health Organization\'s cancer agency classified PFOA as a cause of cancer in humans.',
          finding: paragraph(`
            In 2023 a working group of 30 experts convened by the International Agency for Research on Cancer (IARC) classified PFOA as carcinogenic to humans, its highest category. “PFOA is carcinogenic to humans (Group 1), on the basis of sufficient evidence for cancer in experimental animals and strong mechanistic evidence (for epigenetic alterations and immunosuppression) in exposed humans.” The human cancer studies on their own gave “limited evidence for cancer in humans (renal cell carcinoma and testicular cancer)”. PFOS was classified as possibly carcinogenic. GenX was not evaluated.
          `),
          grade: 'strong',
          quote: 'PFOA is carcinogenic to humans (Group 1), on the basis of sufficient evidence for cancer in experimental animals and strong mechanistic evidence (for epigenetic alterations and immunosuppression) in exposed humans.',
          sources: [
            source('International Agency for Research on Cancer 2023', 'https://www.iarc.who.int/news-events/iarc-monographs-evaluate-the-carcinogenicity-of-perfluorooctanoic-acid-pfoa-and-perfluorooctanesulfonic-acid-pfos'),
            source('Zahm et al. 2024, Lancet Oncology', 'https://doi.org/10.1016/S1470-2045(23)00622-8')
          ]
        }),
        evidence({
          headline: 'Wilmington residents with more of two legacy PFAS in their blood had higher cholesterol.',
          finding: paragraph(`
            Rosen et al. (2022) measured blood fats in 326 GenX Exposure Study participants ages 6 to 86. They found “PFNA and PFOS were associated with higher levels of total and non-HDL cholesterol, with associations larger in magnitude among older adults”, about 5 to 6 mg/dL per quartile.
          `),
          grade: 'moderate',
          quote: 'PFNA and PFOS were associated with higher levels of total and non-HDL cholesterol, with associations larger in magnitude among older adults',
          sources: [source('Rosen et al. 2022, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP11033')]
        })
      ],
      counterEvidence: [
        evidence({
          finding: paragraph(`
            No human disease study of GenX exists. EPA's toxicity assessment rests on animal studies, in which “the liver is the primary target organ for toxicity from oral exposure”. The cohort's cholesterol links track legacy PFAS, not fluoroethers; two fluoroethers went with higher HDL, the protective kind of cholesterol.
          `),
          grade: 'moderate',
          quote: 'the liver is the primary target organ for toxicity from oral exposure',
          sources: [
            source('US Environmental Protection Agency', 'https://www.epa.gov/system/files/documents/2023-03/GenX-Tox-Assessment-technical-factsheet-March-2023-Update.pdf'),
            source('Rosen et al. 2022, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP11033')
          ]
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
      name: 'Protected channels for workers to report chemical hazards.',
      method: 'Protected Worker Disclosure',
      summary: 'Workers report chemical hazards through a protected channel at the local, state, or federal level, and the body that receives the report must act.',
      anchor: 'continued exposure is not tolerable',
      where: 'Congress and the Environmental Protection Agency, with protections against retaliation.',
      when: paragraph(`
        1980, when DuPont had confirmed high PFOA levels in its workers and its Fayetteville plant
        began discharging into the Cape Fear River. The earliest point to act was 1961.
      `),
      description: paragraph(`
        Workers at chemical plants get protected ways to report hazards they see on the job. A
        federal channel runs to the Environmental Protection Agency (EPA). It protects workers from
        retaliation, and the agency must log, investigate, and publish what it receives. State and
        local channels sit beside it for workers who distrust a distant regulator. They work like a
        university ombuds office next to the formal complaints office, and they pass reports to a
        body that can act. Workers keep any in-house route their company offers. Any worker can file
        at any time, and every report requires a response. Congress writes the federal duty into the
        chemicals law. Aviation has run such a channel since 1976. The Federal Aviation
        Administration asked NASA to take confidential safety reports because workers would not
        trust a system run by the regulator that enforces rules against them. By 1980, DuPont had
        found high levels of perfluorooctanoic acid (PFOA) in its own workers and concluded
        internally that continued exposure was not tolerable. That same year its Fayetteville plant
        began discharging into the Cape Fear River. Government auditors later found the federal
        complaint channel weak, and the record does not show whether any worker used it. DuPont's
        1981 data reached EPA only in 2001, through a lawsuit. The company was already required to
        report that data and did not. A protected worker channel gives regulators a second route
        when a company's own reporting duty fails. Regulators would then learn of chemical hazards
        from workers years before a lawsuit or a newspaper exposes them. The aim is that hazards
        come to light before more residents are exposed.
      `),
      outcome: outcome({
        text: 'Chemical hazards come to light years sooner, before more residents are exposed.',
        measured: 'Residents carried high PFAS levels in their blood',
        claims: [
          claim({
            text: 'Workers often notice a hazard before anyone outside the company does.',
            evidence: [
              evidence({
                headline: 'Workers at a chemical plant suspected too many bladder cancers among them, and the federal study their union asked for found far more cases than expected.',
                finding: paragraph(`
                  The National Institute for Occupational Safety and Health studied a chemical plant in
                  western New York “in response to a union request for an evaluation of a possible
                  excess number of cases of bladder cancer”. Among the plant's 1,749 workers it found
                  13 cases where about 3.6 were expected, and the risk rose with years worked in the
                  department that used ortho-toluidine and aniline. It is one plant. It shows that the
                  workers' concern was borne out, not how often worker concerns are.
                `),
                grade: 'moderate',
                quote: 'A retrospective cohort study of the incidence of bladder cancer was conducted in response to a union request for an evaluation of a possible excess number of cases of bladder cancer at a chemical plant in western New York State.',
                sources: [source('Ward et al. 1991, Journal of the National Cancer Institute', 'https://doi.org/10.1093/jnci/83.7.501')]
              }),
              evidence({
                headline: 'Employees brought more large corporate frauds to light than auditors or the securities regulator did.',
                finding: paragraph(`
                  Dyck, Morse and Zingales studied every reported fraud at large United States
                  companies from 1996 to 2004. They found that “fraud detection does not rely on
                  standard corporate governance actors (investors, SEC, and auditors), but rather takes
                  a village, including several nontraditional players (employees, media, and industry
                  regulators)”. Employees brought 17 percent of the cases to light. The frauds are
                  financial rather than chemical hazards.
                `),
                grade: 'moderate',
                quote: 'We find that fraud detection does not rely on standard corporate governance actors (investors, SEC, and auditors), but rather takes a village, including several nontraditional players (employees, media, and industry regulators).',
                sources: [source('Dyck, Morse and Zingales 2010, Journal of Finance', 'https://doi.org/10.1111/j.1540-6261.2010.01614.x')]
              }),
              evidence({
                headline: 'When the Environmental Protection Agency offered reduced penalties to companies that came forward, 89 companies handed over more than 11,000 chemical risk studies they had never reported.',
                finding: paragraph(`
                  The chemicals statute requires companies to tell the Environmental Protection Agency
                  of information that reasonably supports the conclusion that a chemical presents a
                  “substantial risk of injury to health or the environment”. The agency found “that
                  some regulated industries were not submitting information on chemical hazards and
                  exposures”, and in 1991 it offered reduced penalties to companies that audited their
                  own files. When the program closed in 1997, the agency reported that it “has received
                  over 11,000 previously unreported studies or reports from 89 companies on chemicals
                  that may present a substantial risk of injury to health or the environment”, about 80
                  percent of all the reports the duty had ever produced. The record shows how much
                  companies had held back, not how long each study had been held.
                `),
                grade: 'strong',
                quote: 'Under the TSCA section 8(e) CAP, the EPA has received over 11,000 previously unreported studies or reports from 89 companies on chemicals that may present a substantial risk of injury to health or the environment.',
                caveat: 'An official record of what companies submitted under an amnesty. It cannot show what the studies contained or how long they had been withheld.',
                sources: [source('US Environmental Protection Agency, news release of April 25, 1997', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/1babc3a8f4a802c58525648400594f58.html')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Workers made seriously ill by flavoring chemicals had no symptoms that tracked their shifts, and for years no one saw the disease as a work hazard.',
                finding: paragraph(`
                  Kreiss, an epidemiologist at the National Institute for Occupational Safety and
                  Health, traced how a lung disease in workers exposed to the flavoring chemical
                  diacetyl came to be recognized: “For half of the 30-odd years that diacetyl-exposed
                  workers have developed disabling lung disease, obliterative bronchiolitis was
                  unrecognized as an occupational risk.” She attributes the delay to “the absence of a
                  work-related temporal pattern of symptoms; failure to recognize clusters of cases;
                  complexity of exposure environments”. The review follows one disease. It shows how a
                  slow chemical harm can stay hidden from the workers who suffer it, not how common
                  that is.
                `),
                grade: 'weak',
                quote: 'For half of the 30-odd years that diacetyl-exposed workers have developed disabling lung disease, obliterative bronchiolitis was unrecognized as an occupational risk.',
                sources: [source('Kreiss 2017, Toxicology', 'https://doi.org/10.1016/j.tox.2016.06.009')]
              })
            ]
          }),
          claim({
            text: 'Workers report more hazards when speaking up puts their job at less risk.',
            evidence: [
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
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'After Congress wrote new protections for employees following the accounting scandals, employees did not bring more frauds to light.',
                finding: paragraph(`
                  The same census of corporate frauds compared who exposed them before and after the
                  Sarbanes-Oxley Act (SOX). The authors write that “by contrast, we do not find any
                  evidence that the protection offered to employees by Section 303 of SOX has any
                  effect”. Employees' share of detections fell from 18 to 13 percent, while auditors'
                  share rose. Several reforms took effect at once, and the authors say their separate
                  effects cannot be told apart. Naming
                  yourself stayed costly: “in 82% of the cases, the whistleblower was fired, quit under
                  duress, or had significantly altered responsibilities”.
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
                  retaliation increased and whistle-blowers increasingly sought anonymity.” The
                  surveys cannot tell which change drove which.
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
              }),
              evidence({
                headline: 'The government\'s auditors found that the federal program for workers who report hazards could not be shown to work as intended.',
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
            ]
          }),
          claim({
            text: 'Reporting routes that skip the boss catch problems that in-house routes miss.',
            evidence: [
              evidence({
                headline: 'Companies that gave employees a way to report without going to their boss found more fraud.',
                finding: paragraph(`
                  Using survey data from publicly listed Australian companies, where such channels are
                  not required, the authors “find a positive association between ARCs and reported
                  fraud. These results indicate that ARCs are effective in detecting fraud.” Small
                  firms gained most. Companies chose whether to have a channel, so the comparison is
                  between companies that did and companies that did not.
                `),
                grade: 'moderate',
                quote: 'we find a positive association between ARCs and reported fraud. These results indicate that ARCs are effective in detecting fraud.',
                sources: [source('Johansson and Carey 2016, Journal of Business Ethics', 'https://doi.org/10.1007/s10551-015-2673-6')]
              }),
              evidence({
                headline: 'In one hospital, five separate ways of reporting problems each caught different safety problems, with little overlap.',
                finding: paragraph(`
                  Researchers sorted the reports from five routes at one academic hospital: staff
                  incident reports, patient complaints, risk management, malpractice claims, and safety
                  walk rounds by executives. “Overall, there was little overlap, although each
                  reporting system identified important safety issues.” Incident reports mostly
                  flagged mislabeled specimens, walk rounds turned up equipment problems, and
                  complaints and claims pointed to failures of communication. Who reported changed
                  with the route: “Physicians accounted for 50% of risk management reports, but in
                  adverse event reporting, where nurses were the main reporters, physicians accounted
                  for only 2.5% of reports.” It is one hospital, and two of the routes are used by
                  patients rather than staff.
                `),
                grade: 'moderate',
                quote: 'Overall, there was little overlap, although each reporting system identified important safety issues.',
                caveat: 'One hospital. It shows that different routes surface different problems. It cannot show that adding an outside route would raise the total reported.',
                sources: [source('Levtzion-Korach et al. 2010, Joint Commission Journal on Quality and Patient Safety', 'https://doi.org/10.1016/s1553-7250(10)36059-4')]
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
            ]
          }),
          claim({
            text: 'Regulators act sooner on problems that workers report.',
            evidence: [
              evidence({
                headline: 'Regulators started enforcement cases over false company accounts sooner when an employee had blown the whistle.',
                finding: paragraph(`
                  Call, Martin, Sharp and Wilde matched employee whistleblowing complaints obtained from
                  the federal government to every enforcement action for financial misrepresentation
                  brought after the Sarbanes-Oxley Act. Cases with a whistleblower ended in larger
                  penalties and longer prison sentences, and “regulators more quickly begin
                  enforcement proceedings when whistleblowers are involved”. The study compares cases
                  that had a whistleblower with cases that did not, and the misconduct is financial
                  rather than a chemical hazard.
                `),
                grade: 'moderate',
                quote: 'We also find that regulators more quickly begin enforcement proceedings when whistleblowers are involved.',
                sources: [source('Call, Martin, Sharp and Wilde 2018, Journal of Accounting Research', 'https://doi.org/10.1111/1475-679X.12177')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When whistleblowers were protected, more of them reported, but investigators followed up less often and no more wrongdoing was caught.',
                finding: paragraph(`
                  Mechtenberg, Muehlheusser and Roider ran a laboratory experiment in which paid
                  participants played employees, firms, and prosecutors, with and without protection
                  for whistleblowers. “As expected, protecting whistleblowers leads to more reporting of
                  misbehavior. However, the predicted improvements in detection and deterrence do not
                  materialize in the experiment. This is mainly driven by prosecutors being less
                  inclined to investigate upon a report when protection is in place.” The setting is a
                  laboratory game, not a workplace or a real regulator.
                `),
                grade: 'strong',
                quote: 'However, the predicted improvements in detection and deterrence do not materialize in the experiment. This is mainly driven by prosecutors being less inclined to investigate upon a report when protection is in place.',
                sources: [source('Mechtenberg, Muehlheusser and Roider 2020, European Economic Review', 'https://doi.org/10.1016/j.euroecorev.2020.103447')]
              }),
              evidence({
                headline: 'Government lawyers were more likely to take up whistleblower fraud cases that looked easy to win and lucrative, and cases they left to whistleblowers did not change how firms behaved.',
                finding: paragraph(`
                  Heese, Krishnan and Ramasubramanian studied how the Department of Justice handles
                  whistleblower lawsuits over fraud against the federal government. They found that “the DOJ
                  is more likely to intervene in and conduct longer investigations of cases that have a higher
                  chance of victory and yield greater monetary proceeds, indicating that DOJ enforcement is
                  influenced by its performance measures”. Firms whose cases the department joined improved
                  their internal controls. By contrast, “we do not find that cases pursued by whistleblowers
                  alone affect firms' or whistleblowers' behavior”. The study compares cases the department
                  joined with cases it did not, and the misconduct is fraud rather than a chemical hazard.
                `),
                grade: 'moderate',
                quote: 'We find that the DOJ is more likely to intervene in and conduct longer investigations of cases that have a higher chance of victory and yield greater monetary proceeds, indicating that DOJ enforcement is influenced by its performance measures.',
                sources: [source('Heese, Krishnan and Ramasubramanian 2021, Journal of Accounting and Economics', 'https://doi.org/10.1016/j.jacceco.2020.101357')]
              })
            ]
          }),
          claim({
            text: 'Acting on a reported hazard lowers people\'s exposure to it.',
            evidence: [
              evidence({
                headline: 'Chinese factories cut their pollution after their violations were reported to the regulator, most of all when the reports were made in public.',
                finding: paragraph(`
                  Buntaine, Greenstone, He, Liu, Wang and Zhang ran a nationwide field experiment in
                  China. Firms that broke pollution standards were assigned at random to have their
                  violations raised with the regulator in a public appeal on social media, in a
                  private appeal, or not at all. “First, public appeals to the regulator through social
                  media substantially reduce violations and pollution emissions, while private appeals
                  cause more modest environmental improvements.” The cuts at treated firms were not
                  offset by more pollution at firms left out. The appeals came from outside the firms,
                  not from workers inside them.
                `),
                grade: 'strong',
                quote: 'First, public appeals to the regulator through social media substantially reduce violations and pollution emissions, while private appeals cause more modest environmental improvements.',
                sources: [source('Buntaine, Greenstone, He, Liu, Wang and Zhang 2024, American Economic Review', 'https://doi.org/10.1257/aer.20221215')]
              }),
              evidence({
                headline: 'After manufacturers stopped making the PFAS chemical PFOS, Americans carried steadily less of it in their blood.',
                finding: paragraph(`
                  Kato, Wong, Jia, Kuklenyik and Calafat measured four PFAS in 7,876 blood samples from
                  a representative sample of Americans aged 12 and older, collected in the national
                  health survey from 1999 to 2008. “Since 1999-2000, PFOS concentrations showed a
                  significant downward trend, because of discontinuing industrial production of PFOS,
                  but PFNA concentrations showed a significant upward trend.” PFOA was highest at the
                  start and then held steady. All four chemicals were still found in more than 95
                  percent of people, so levels fell while almost everyone stayed exposed. The survey
                  tracks levels over time, and the link to the end of production is the authors'
                  reading of that trend.
                `),
                grade: 'strong',
                quote: 'Since 1999-2000, PFOS concentrations showed a significant downward trend, because of discontinuing industrial production of PFOS, but PFNA concentrations showed a significant upward trend.',
                sources: [source('Kato, Wong, Jia, Kuklenyik and Calafat 2011, Environmental Science and Technology', 'https://doi.org/10.1021/es1043613')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'In Chinese provinces, more pollution complaints sent to environmental offices by letter or visit did not bring local pollution down.',
                finding: paragraph(`
                  Ma, Song and Zhang followed 30 Chinese provinces from 2011 to 2020 and compared local
                  pollution with several ways the public took part in pollution control, using a dynamic
                  spatial panel model. Participation “based on environmental letters and visits have no
                  significant impact on local pollution reduction,” while online searches about pollution,
                  proposals from legislators, and microblogging were linked to lower emissions. The study
                  compares provinces over time rather than following the polluters named in each complaint,
                  and it counts complaints in total, not whether each one reported a real violation.
                `),
                grade: 'moderate',
                quote: 'based on environmental letters and visits have no significant impact on local pollution reduction, while the Baidu search index of environmental pollution has the greatest effect on emission reduction, followed by environmental protection strategies based on the National People\'s Congress (NPC) and microblogging.',
                sources: [source('Ma, Song and Zhang 2023, Journal of Environmental Management', 'https://doi.org/10.1016/j.jenvman.2023.118046')]
              }),
              evidence({
                headline: 'As rules on PFOS tightened, Chinese factories used more of a substitute chemical, and most people tested now carry it in their blood.',
                finding: paragraph(`
                  He and colleagues reviewed studies of F-53B, a chlorinated PFAS that the Chinese
                  electroplating industry uses in place of PFOS. “Due to greater restrictions on PFOS
                  globally in recent years, the production and use of F-53B correspondingly increased,
                  consequently causing more emissions into the environment.” In the studies they
                  reviewed, the substitute was found in almost 80 percent of human blood samples, and
                  they describe it as the most persistent PFAS in humans found to date, with a
                  half-life of 15.3 years. The review draws on studies from China and does not measure
                  whether total PFAS exposure rose or fell.
                `),
                grade: 'moderate',
                quote: 'Due to greater restrictions on PFOS globally in recent years, the production and use of F-53B correspondingly increased, consequently causing more emissions into the environment.',
                sources: [source('He, Lv, Li, Liu, Liu and Han 2022, Environment International', 'https://doi.org/10.1016/j.envint.2022.107108')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Downstream residents direct independent checks whenever a chemical is approved.',
      method: 'Community Review and Monitoring Body',
      summary: 'When a plant seeks approval to make or release a chemical, downstream residents form a body that sets the monitoring plan and directs an independent checker.',
      anchor: 'insufficient information and potential unreasonable risk',
      where: 'EPA\'s chemical safety office, with the body drawn from downstream communities. The state agency and the water utility handle reporting and sampling.',
      when: paragraph(`
        2009, at the EPA consent order. That order recognized possible unreasonable risk and still
        authorized production, and its 99 percent capture requirement went unchecked for eight
        years.
      `),
      description: paragraph(`
        Whenever a plant seeks approval to make or release a chemical, residents downstream form a
        review body. The body sees what the company submits to the Environmental Protection Agency
        (EPA), within trade secret law. It sets the monitoring plan, and its conditions become
        permit conditions. An independent laboratory or auditor, separate from both the company and
        the agency, then checks the plant against its limits from the day they take effect. The
        plant funds the checks but does not choose or pay the checker. The body approves the checker
        and receives every result. The agency publishes the plan and each result. The body can also
        decide on or veto the permit and tell the public about the risks. Between approvals, anyone
        who notices a problem, such as a farmer whose cattle are dying, can report it to the body
        and get a written response within a set time. A new discharge upstream sets off a campaign
        telling residents how to get their water tested, since no one can test for PFAS at home. In
        2009, an EPA consent order authorized production and required the plant to capture 99
        percent of the chemicals from its wastewater and air emissions. No one checked that
        requirement for eight years. EPA's first inspection came three weeks after the June 2017
        newspaper story. The discharge permit file never named GenX, so no member of the public
        could object to it. In Tonawanda, New York, residents sampled their own air with bucket kits
        in 2005, and a state study two years later confirmed high benzene near the coke plant.
        Chemours is privately owned, and privately owned plants have responded less to enforcement
        actions than government-owned plants. The closest study had a regulator assign and pay
        auditors at random, and no study yet tests a checker that residents approve. The aim is that
        plants stay within their discharge limits, so less pollution reaches residents' drinking
        water.
      `),
      outcome: outcome({
        text: 'Plants stay within their discharge limits, so less pollution reaches residents\' drinking water.',
        measured: 'Residents drank water contaminated with GenX',
        claims: [
          claim({
            text: 'Compliance checks that rely on a company\'s own reports miss violations.',
            evidence: [
              evidence({
                headline: 'Plants reported large cuts in their toxic air emissions that nearby government air monitors did not pick up.',
                finding: paragraph(`
                  The authors compared the air emissions that plants reported to the Toxics Release
                  Inventory with the concentrations that federal monitors measured near them. They “find
                  that the large drops in air emissions reported by firms in the TRI are not always matched
                  by similar reductions in measured concentrations from EPA monitors”, and the reported
                  figures for two chemicals failed a statistical test of whether they looked authentic. The
                  study compares reports with measurements. It does not show which plants misreported on
                  purpose.
                `),
                grade: 'moderate',
                quote: 'We find that the large drops in air emissions reported by firms in the TRI are not always matched by similar reductions in measured concentrations from EPA monitors.',
                sources: [source('de Marchi and Hamilton 2006, Journal of Risk and Uncertainty', 'https://ideas.repec.org/a/kap/jrisku/v32y2006i1p57-76.html')]
              }),
              evidence({
                headline: 'Satellite images caught Wisconsin livestock farms spreading manure in winter far more often than the farms themselves reported.',
                finding: paragraph(`
                  Winter manure spreading violates environmental law in many states, and federal and state
                  agencies have tracked it mainly through the farms' own reports. Chugg and colleagues
                  labeled daily to weekly satellite images of 330 large livestock farms in Wisconsin and
                  trained a model to spot spreading. “We show that the prevalence of land application is
                  much higher than what is self-reported by facilities.” The estimate comes from a model
                  applied to one state over one winter, and the violation is manure spreading rather than a
                  chemical discharge.
                `),
                grade: 'moderate',
                quote: 'We show that the prevalence of land application is much higher than what is self-reported by facilities.',
                sources: [source('Chugg, Rothbacher, Feng, Long and Ho 2022, Proceedings of the ACM International Conference on Information and Knowledge Management', 'https://doi.org/10.1145/3511808.3557104')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Companies that reported their own violations to regulators went on to comply better with environmental rules.',
                finding: paragraph(`
                  Toffel and Short studied firms that disclosed their own violations through a regulator's
                  voluntary self-reporting program. Regulators shifted inspections away from those firms,
                  and “these firms that voluntarily disclosed regulatory violations and committed to
                  self-policing improved their regulatory compliance and environmental performance, which
                  suggests that the enforcement relief they received was warranted.” The firms chose to
                  disclose, so the result describes companies that opt in to self-policing, not the routine
                  reports every permit holder must file.
                `),
                grade: 'moderate',
                quote: 'We also find that these firms that voluntarily disclosed regulatory violations and committed to self-policing improved their regulatory compliance and environmental performance, which suggests that the enforcement relief they received was warranted.',
                sources: [source('Toffel and Short 2011, Journal of Law and Economics', 'https://doi.org/10.1086/658494')]
              })
            ]
          }),
          claim({
            text: 'Checks run by government agencies alone miss violations.',
            evidence: [
              evidence({
                headline: 'Cities cut air pollution on the days federal monitors took readings and let it climb on the days they did not.',
                finding: paragraph(`
                  Many federal air quality monitors sample once every six days on a published schedule. Eric
                  Zou compared satellite measures of air quality on sampled and unsampled days: “Using
                  satellite data of monitored areas, I show that air quality is significantly worse on
                  unmonitored days.” The gap was largest when a city was close to breaking the standard, and
                  cities issued more air quality warnings on monitored days, which points to local
                  governments coordinating the cuts. The readings cover a city's air, not one plant's
                  permit.
                `),
                grade: 'strong',
                quote: 'Using satellite data of monitored areas, I show that air quality is significantly worse on unmonitored days.',
                sources: [source('Zou 2021, American Economic Review', 'https://doi.org/10.1257/aer.20181346')]
              }),
              evidence({
                headline: 'When China took its air monitors out of local officials\' hands, reported pollution jumped by a third.',
                finding: paragraph(`
                  China automated its air pollution monitors to stop suspected tampering by local officials,
                  and switched cities over on different days. Comparing readings just before and after each
                  switch, the authors “find an immediate and lasting increase of 35 percent in reported PM10
                  concentrations post-automation.” Online searches for face masks and air filters rose too.
                  The monitors measured city air quality, on which local officials were judged, rather than
                  a single plant's discharge.
                `),
                grade: 'strong',
                quote: 'Exploiting 654 regression discontinuity designs based on city-level variation in the day that monitoring was automated, we find an immediate and lasting increase of 35 percent in reported PM10 concentrations post-automation.',
                sources: [source('Greenstone, He, Jia and Liu 2022, American Economic Review: Insights', 'https://doi.org/10.1257/aeri.20200373')]
              }),
              evidence({
                headline: 'Some US local agencies switched off their air monitors on days they expected the air to be bad.',
                finding: paragraph(`
                  Local governments run many of the monitors that decide whether their own areas meet
                  federal air standards. Mu, Rubin and Zou tested whether monitors stopped sampling on the
                  days those governments had forecast bad air. A Jersey City monitor suspected of a
                  deliberate shutdown during the 2013 Bridgegate traffic jam sampled a third less often on
                  alert days. Testing “more than 1,300 monitors across the United States”, they found
                  “fourteen metropolitan areas with clusters of monitors showing similar strategic
                  behavior.” The test flags a pattern of skipped days. It does not prove intent at any one
                  monitor.
                `),
                grade: 'moderate',
                quote: 'Building on large-scale inference tools, we then apply the method to test more than 1,300 monitors across the United States, finding fourteen metropolitan areas with clusters of monitors showing similar strategic behavior.',
                sources: [source('Mu, Rubin and Zou 2026, Review of Economics and Statistics', 'https://doi.org/10.1162/rest_a_01477')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Government inspections and fines reduce violations and emissions, at the plants checked and at other plants.',
                finding: paragraph(`
                  Gray and Shimshack reviewed the empirical studies of environmental monitoring and
                  enforcement, most of them on the Environmental Protection Agency and state agencies. The
                  studies consistently find that “environmental monitoring and enforcement activities
                  generate substantial specific deterrence, reducing future violations at the targeted
                  firm”, that they deter violations at other facilities, and that they bring significant
                  cuts in emissions. The review measures what inspections and penalties achieve when they
                  happen, not how many violations go unseen between them.
                `),
                grade: 'moderate',
                quote: 'environmental monitoring and enforcement activities generate substantial specific deterrence, reducing future violations at the targeted firm',
                sources: [source('Gray and Shimshack 2011, Review of Environmental Economics and Policy', 'https://doi.org/10.1093/reep/req017')]
              }),
              evidence({
                headline: 'An Indian regulator\'s own choice of which plants to inspect cut three times as much pollution as inspections assigned at random.',
                finding: paragraph(`
                  The Gujarat regulator worked with researchers to double the inspection rate at randomly
                  chosen plants, with the extra inspections assigned at random. “We find that treatment
                  plants only slightly increased compliance.” The random inspections found fewer extreme
                  violators than the regulator's own, and the authors estimate that “inspections that the
                  regulator assigns cause three times more abatement than would the same number of randomly
                  assigned inspections.” The same study finds the regulator's information on plant pollution
                  was poor, and that better monitoring would cut emissions.
                `),
                grade: 'strong',
                quote: 'Counterfactual simulations show that discretion in targeting helps enforcement: inspections that the regulator assigns cause three times more abatement than would the same number of randomly assigned inspections.',
                sources: [source('Duflo, Greenstone, Pande and Ryan 2018, Econometrica', 'https://doi.org/10.3982/ECTA12876')]
              })
            ]
          }),
          claim({
            text: 'Checkers who are independent of the company catch violations that company-controlled checks miss.',
            evidence: [
              evidence({
                headline: 'Auditors in India reported plant pollution truthfully once plants no longer chose and paid them, and the plants then cut their emissions.',
                finding: paragraph(`
                  In Gujarat, industrial plants chose and paid their own environmental auditors. A two-year
                  field experiment randomly assigned half of 473 plants to a reformed system. Each treatment
                  plant got an auditor assigned at random, paid a fixed fee from a central pool. Independent
                  technical staff rechecked a random fifth of the readings, and in the second year auditors'
                  pay depended on their accuracy. Under the old system, auditors were “systematically
                  reporting plant emissions just below the standard, although true emissions were typically
                  higher”. Under the reform, auditors reported more truthfully, far fewer plants were falsely
                  reported as compliant, and “treatment plants, in turn, reduced their pollution emissions.”
                  The auditors were paid professionals working under a regulator, and the setting is
                  industrial emissions in India.
                `),
                grade: 'strong',
                quote: 'Second, the treatment caused auditors to report more truthfully and very significantly lowered the fraction of plants that were falsely reported as compliant with pollution standards. Third, treatment plants, in turn, reduced their pollution emissions.',
                sources: [
                  source('Duflo, Greenstone, Pande and Ryan 2013, Quarterly Journal of Economics', 'https://doi.org/10.1093/qje/qjt024'),
                  source('Duflo, Greenstone, Pande and Ryan 2013, NBER Working Paper 19259', 'https://www.nber.org/papers/w19259')
                ]
              }),
              evidence({
                headline: 'Factory auditors reported fewer violations when the factory being audited paid for the audit.',
                finding: paragraph(`
                  Short, Toffel and Hugill analyzed nearly 17,000 code-of-conduct audits of about 6,000
                  supplier factories around the world. Auditors “report fewer violations when individual
                  auditors have audited the factory before, when audit teams are less experienced or less
                  trained, when audit teams are all male, and when audits are paid for by the audited
                  supplier.” The audits covered labor and safety conditions, and the study compares audits
                  as they happened rather than assigning who paid.
                `),
                grade: 'moderate',
                quote: 'Our analysis of nearly 17,000 supplier audits reveals that auditors report fewer violations when individual auditors have audited the factory before, when audit teams are less experienced or less trained, when audit teams are all male, and when audits are paid for by the audited supplier.',
                sources: [source('Short, Toffel and Hugill 2016, Strategic Management Journal', 'https://doi.org/10.1002/smj.2417')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Private emissions test centers in Mexico City took bribes to pass cars that should have failed.',
                finding: paragraph(`
                  Mexico City required cars to pass emissions tests at licensed test centers. Paulina Oliva
                  built a statistical test for one kind of cheating, bribing the center technicians, and a
                  model of how owners decide to retest or cheat. “Results suggest that 9.6 percent of car
                  owners paid US$20 to circumvent the regulation.” The checkers were separate from the car
                  owners, and some still sold a passing result.
                `),
                grade: 'moderate',
                quote: 'Results suggest that 9.6 percent of car owners paid US$20 to circumvent the regulation.',
                sources: [source('Oliva 2015, Journal of Political Economy', 'https://doi.org/10.1086/680936')]
              })
            ]
          }),
          claim({
            text: 'Affected residents who take part in oversight get a plant\'s compliance checked.',
            evidence: [
              evidence({
                headline: 'Residents\' complaints in Texas sent inspectors to facilities and turned up more, and more serious, violations than routine checks.',
                finding: paragraph(`
                  Across more than 130,000 environmental citizen complaints in Texas, “complaints are
                  associated with sharp increases in regulator monitoring and enforcement. Complaints
                  uncover more, and more severe violations, than more standard monitoring approaches.”
                  Investigations triggered by complaints were about 1.5 times as likely to find any
                  violation and about 10 times as likely to find a severe one. The authors find
                  suggestive evidence that these investigations take days away from routine
                  inspections, and judge that effect small overall.
                `),
                grade: 'moderate',
                quote: 'Complaints are associated with sharp increases in regulator monitoring and enforcement. Complaints uncover more, and more severe violations, than more standard monitoring approaches.',
                sources: [source('Colmer, Evans and Shimshack, Journal of Political Economy Microeconomics', 'https://doi.org/10.1086/740210')]
              }),
              evidence({
                headline: 'When citizens sued polluters, regulators monitored those polluters more, though they fined them less.',
                finding: paragraph(`
                  Langpap and Shimshack studied how private environmental lawsuits change what regulators
                  do, using features of the courts to separate the effect of a suit from other differences
                  between facilities. “We find that private citizen suits crowd in public monitoring but
                  significantly crowd out public sanctions.” Regulators checked sued facilities more often
                  and penalized them less.
                `),
                grade: 'strong',
                quote: 'We find that private citizen suits crowd in public monitoring but significantly crowd out public sanctions.',
                sources: [source('Langpap and Shimshack 2010, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2010.01.001')]
              }),
              evidence({
                headline: 'Polluted city waterways in China got cleaner when outside monitoring reports went to the officials responsible, but not when they were posted for the public.',
                finding: paragraph(`
                  Urban waterways in Jiangsu province already slated for cleanup were assigned at random to
                  monitoring by a nongovernmental group for 15 months. Researchers also assigned at random who
                  received the results. “Disseminating results from monitoring to local and provincial
                  governments improved water quality, but disseminating results to the public did not have
                  detectable effects on water quality or residents' pursuit of remediation through official and
                  volunteer channels.” The monitors were an outside group, not members of a review body.
                `),
                grade: 'strong',
                quote: 'Disseminating results from monitoring to local and provincial governments improved water quality, but disseminating results to the public did not have detectable effects on water quality or residents\' pursuit of remediation through official and volunteer channels.',
                sources: [source('Buntaine, Zhang and Hunnicutt 2021, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.2015175118')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Community panels sponsored by chemical plants built trust but rarely changed how the plants performed.',
                finding: paragraph(`
                  A national survey of members and company representatives at chemical industry community
                  advisory panels found that the panels “alert companies to community concerns and promote
                  trust”, but “are less effective in stimulating changes in environmental performance and,
                  like many citizen advisory groups, have difficulties serving as systematic links back to
                  the community.” Environmental, community, and health professionals were underrepresented
                  on the panels, and most community members said access to independent technical experts
                  made a panel more effective. The survey reports what participants perceive, not measured
                  emissions.
                `),
                grade: 'moderate',
                quote: 'CAPs are less effective in stimulating changes in environmental performance and, like many citizen advisory groups, have difficulties serving as systematic links back to the community.',
                sources: [source('Lynn, Busenberg, Cohen and Chess 2000, Environmental Science and Technology', 'https://doi.org/10.1021/es9906599')]
              }),
              evidence({
                headline: 'Community negotiations with nearby plants worked only where the company was willing and residents had independent technical help.',
                finding: paragraph(`
                  Five community-initiated negotiations with Minnesota manufacturers were examined: “three
                  community-company partnerships (a container plant, a foundry, and a cabinet manufacturer)
                  were successful and two (a munitions plant and a petroleum refinery) were not”. The
                  successes shared a company willing to negotiate, an internal champion, an independent
                  facilitator, and independent technical assistance for the community participants. Nothing
                  here measures emissions or compliance.
                `),
                grade: 'moderate',
                quote: 'Three community-company partnerships (a container plant, a foundry, and a cabinet manufacturer) were successful and two (a munitions plant and a petroleum refinery) were not.',
                sources: [source('Murdock and Sexton 2002, Environmental Science and Technology', 'https://doi.org/10.1021/es011272k')]
              }),
              evidence({
                headline: 'A northern Canadian review board shared with Aboriginal communities made fair decisions but did not follow up on individual projects.',
                finding: paragraph(`
                  The authors assessed the Mackenzie Valley Environmental Impact Review Board, a co-managed
                  environmental assessment body. It “excels in its use of traditional and local knowledge, and
                  its fair and rigorous decision-making process”. But the process does not “provide
                  project-specific follow-up”. Communities turned to private agreements with mining companies
                  instead. This is one board.
                `),
                grade: 'weak',
                quote: 'While the MVEIRB EA process excels in its use of traditional and local knowledge, and its fair and rigorous decision-making process, significant deficiencies remain, as the EA process does not adequately consider benefits, provide project-specific follow-up, or build trust and capacity among stakeholders.',
                sources: [source('Galbraith, Bradshaw and Rutherford 2007, Impact Assessment and Project Appraisal', 'https://doi.org/10.3152/146155107x190596')]
              }),
              evidence({
                headline: 'Residents who sampled the air near refineries themselves struggled to get the state to work with them on the results.',
                finding: paragraph(`
                  O'Rourke and Macey evaluated community bucket brigades, in which residents near refineries
                  and chemical plants take their own air samples. Sampling changed how residents saw the
                  risks and drew them into emergency response and right-to-know efforts. Judged against
                  community policing, though, “the bucket brigades are currently limited in their ability to
                  encourage “co‐production” of environmental protection between citizens and the state.”
                `),
                grade: 'weak',
                quote: 'However, when viewed through the lens of the more developed literature on community policing, the bucket brigades are currently limited in their ability to encourage “co‐production” of environmental protection between citizens and the state.',
                sources: [source('O\'Rourke and Macey 2003, Journal of Policy Analysis and Management', 'https://doi.org/10.1002/pam.10138')]
              }),
              evidence({
                headline: 'Regulators dismissed air samples that residents took near refineries because the samples did not fit official standards.',
                finding: paragraph(`
                  In a study of community air toxics monitoring with “buckets”, the author finds that
                  standards cut both ways. They give bucket data some legitimacy with experts, but
                  “standards simultaneously serve a boundary-policing function, allowing experts to
                  dismiss bucket data as irrelevant to the central project of air quality assessment.”
                  Community measurements carried weight only where they matched the methods regulators
                  already used. The data came from residents themselves, not from experts they hired.
                `),
                grade: 'weak',
                quote: 'standards simultaneously serve a boundary-policing function, allowing experts to dismiss bucket data as irrelevant to the central project of air quality assessment',
                sources: [source('Ottinger 2010, Science, Technology, and Human Values', 'https://doi.org/10.1177/0162243909337121')]
              })
            ]
          }),
          claim({
            text: 'Fines for confirmed violations push polluters back under their discharge limits.',
            evidence: [
              evidence({
                headline: 'After regulators fined a plant for water pollution violations, violations fell sharply the next year, at that plant and at other plants in the state.',
                finding: paragraph(`
                  Shimshack and Ward studied how enforcement of water pollution limits changed plants'
                  compliance. “We find that, on the margin, the impact of a fine for water pollutant
                  violations is about a two-thirds reduction in the statewide violation rate in the
                  year following a fine.” Plants that were not fined responded almost as strongly as
                  the plant that was. Sanctions without a fine had no detected effect, and a fine did
                  more for compliance than an inspection. The study follows violation rates across
                  plants and years after fines, not how long any one violation lasted.
                `),
                grade: 'moderate',
                quote: 'We find that, on the margin, the impact of a fine for water pollutant violations is about a two-thirds reduction in the statewide violation rate in the year following a fine.',
                sources: [source('Shimshack and Ward 2005, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2005.02.002')]
              }),
              evidence({
                headline: 'When regulators fined water polluters, plants that had broken their limits cut discharges beyond what the law required, and plants already under their limits cut further.',
                finding: paragraph(`
                  Shimshack and Ward followed how plants with water pollution permits changed their discharges
                  after regulators issued fines. “We find that many plants with discharges typically below
                  legally permitted levels reduce discharges further when regulators issue fines, even on other
                  plants.” Plants that were out of compliance often cut discharges by more than the law
                  required after a sanction. The study tracks discharges across plants and years around fines,
                  so it shows how plants responded to the threat of a fine, not to any one inspection.
                `),
                grade: 'moderate',
                quote: 'We find that many plants with discharges typically below legally permitted levels reduce discharges further when regulators issue fines, even on other plants.',
                sources: [source('Shimshack and Ward 2008, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2007.05.003')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Privately owned plants did not measurably improve their compliance with water pollution limits after enforcement actions, while government-owned plants did.',
                finding: paragraph(`
                  Earnhart and Jacobson used monthly records from 1997 to 2016 on major Clean Water Act
                  facilities in six states to ask whether private and government-owned plants respond
                  differently to inspections and enforcement. “More importantly, while we find no significant
                  evidence of a deterrence effect of enforcement actions for privately owned facilities, both
                  kinds of government-owned facilities show evidence of deterrence.” The study compares
                  responses across ownership types, and its result for private plants covers enforcement
                  actions in general rather than fines alone.
                `),
                grade: 'moderate',
                quote: 'More importantly, while we find no significant evidence of a deterrence effect of enforcement actions for privately owned facilities, both kinds of government-owned facilities show evidence of deterrence.',
                sources: [source('Earnhart and Jacobson 2025, Environmental and Resource Economics', 'https://doi.org/10.1007/s10640-024-00940-4')]
              }),
              evidence({
                headline: 'When California required minimum fines for wastewater violations, late reports fell, but the fines were small next to the cost of keeping many pollutants under their limits.',
                finding: paragraph(`
                  Treves and colleagues compared California with other states after it stepped up $3,000
                  mandatory minimum penalties for wastewater violations, and paired the numbers with case
                  studies of treatment plants. “Our results suggest that the increase in sanctions was
                  associated with decreases in violations with relatively low compliance costs (such as
                  reporting violations), but that there may be considerable mismatch between the scale of
                  penalties and compliance costs for keeping many types of pollutants within regulatory
                  limits.” For ammonia, oxygen-demanding waste, and solids at municipal plants, they saw no
                  evidence that the enforcement push changed how often limits were exceeded.
                `),
                grade: 'moderate',
                quote: 'Our results suggest that the increase in sanctions was associated with decreases in violations with relatively low compliance costs (such as reporting violations), but that there may be considerable mismatch between the scale of penalties and compliance costs for keeping many types of pollutants within regulatory limits, and an underappreciation of critical factors like political pressure that are uncaptured by classical theory.',
                sources: [source('Treves et al. 2025, PLOS Water', 'https://doi.org/10.1371/journal.pwat.0000326')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Residents are told of any detection in drinking water and direct the follow-up testing.',
      method: 'Citizen Science',
      summary: 'When a regulator receives a peer-reviewed finding of a chemical in drinking water, it must tell the public within a day, and residents choose where follow-up testing happens.',
      anchor: 'stayed inside agencies and journals',
      where: 'Congress writes the duty into federal law. The Environmental Protection Agency carries it out, and the North Carolina Department of Environmental Quality acts as the backup.',
      when: paragraph(`
        November 2016, when the study measuring GenX in drinking water reached the state. EPA's own
        researchers had detected GenX in the river in 2012.
      `),
      description: paragraph(`
        When a regulator receives a peer-reviewed study that finds a chemical in drinking water, it
        must tell the public within a day. The duty applies whether or not the chemical is regulated
        yet. Congress writes it into federal law, and the Environmental Protection Agency (EPA)
        carries it out. The state environmental agency acts if EPA does not. Within weeks of the
        notice, affected residents meet. They choose where follow-up sampling happens and hear the
        agency's response plan. The agency answers their questions in writing. Duties to tell
        customers about violations have pushed water systems to cut some violations, but here the
        utility sat downstream of the polluter and had broken no drinking water rule. This proposal
        differs from the downstream resident body in its trigger, a finding in drinking water rather
        than a plant's approval. EPA's own researchers detected GenX in the Cape Fear River in 2012.
        A study measuring it in drinking water reached the state in November 2016. The finding
        stayed inside agencies and journals until a newspaper story in June 2017. A duty tied to
        that study would have told residents about seven months sooner, and notice would have come
        from an agency rather than a newsroom. The aim is that residents stop drinking contaminated
        water sooner after a chemical is found in it.
      `),
      outcome: outcome({
        text: 'Residents stop drinking contaminated water sooner after a chemical is found in it.',
        measured: 'Residents drank water contaminated with GenX',
        claims: [
          claim({
            text: 'Detections of unregulated chemicals in drinking water can stay out of public view for years.',
            evidence: [
              evidence({
                headline: 'New Jersey found PFAS in the water of 21 systems and told town officials, and residents learned of it only four years later, when a nonprofit obtained the results.',
                finding: paragraph(`
                  Marcus and Mueller trace how PFAS contamination in New Jersey became public. State
                  regulators sampled 29 community water systems in 2009 and 2010 and found PFAS in 21
                  of them. “While NJDEP contacted municipalities and told them about the PFAS
                  detection, no residents were notified and the results were not publicly released.”
                  In July 2013 a nonprofit got the results through a public records request, posted
                  them, and contacted reporters. Paulsboro, the town with the highest levels, received
                  a state health advisory in January 2014. The authors describe the contamination as
                  hidden from the public for four years. This account is background to their housing
                  price study, and it covers one state.
                `),
                grade: 'moderate',
                quote: 'While NJDEP contacted municipalities and told them about the PFAS detection, no residents were notified and the results were not publicly released.',
                sources: [
                  source('Marcus and Mueller 2024, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2024.102987'),
                  source('Marcus and Mueller, NBER Working Paper 31731', 'https://www.nber.org/papers/w31731')
                ]
              }),
              evidence({
                headline: 'Federal rules give water systems up to a year to tell customers that results for unregulated chemicals are available.',
                finding: paragraph(`
                  Federal rules require water systems that test for unregulated contaminants to tell
                  customers only that the results are available, and to do so “no later than 12 months
                  after the monitoring results are known”. California requires a water system to give
                  notice within 30 days of a confirmed detection above a state notification level, but
                  that notice goes to the system's governing body and local governments, not to
                  customers. Neither provision triggers on a research finding reaching a regulator.
                `),
                grade: 'moderate',
                quote: 'The owner or operator of a community water system or non-transient, non-community water system required to monitor under § 141.40 must notify persons served by the system of the availability of the results of such sampling no later than 12 months after the monitoring results are known.',
                caveat: 'A record of what two provisions require, not of how they work in practice. No fifty-state survey was done.',
                sources: [
                  source('40 CFR 141.207', 'https://www.govinfo.gov/link/cfr/40/141?sectionnum=207&year=mostrecent&link-type=xml'),
                  source('California Health and Safety Code 116455', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=116455.')
                ]
              })
            ],
            counterEvidence: []
          }),
          claim({
            text: 'A legal deadline to tell the public makes those who find a problem disclose it sooner.',
            evidence: [
              evidence({
                headline: 'Companies in states with a deadline to report data breaches disclosed them much faster than companies in states without one.',
                finding: paragraph(`
                  Ashraf, Jiang and Wang compared how quickly companies disclosed data breaches across
                  US states, some of which set a deadline for telling the public and some of which do
                  not. “Exploiting this state-level variation in disclosure deadlines, we find that,
                  when facing a deadline, firms disclose a data breach 90 percent faster but are 58
                  percent less likely to disclose breach details.” The faster notices said less about
                  what had happened. The setting is company data breaches, not drinking water.
                `),
                grade: 'moderate',
                quote: 'Exploiting this state-level variation in disclosure deadlines, we find that, when facing a deadline, firms disclose a data breach 90 percent faster but are 58 percent less likely to disclose breach details.',
                sources: [source('Ashraf, Jiang and Wang 2022, Journal of Finance and Data Science', 'https://doi.org/10.1016/j.jfds.2022.08.001')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Under a rule to notify customers within 30 days, about three in ten water systems\' notices of bacteria went out more than six months late.',
                finding: paragraph(`
                  Monthly coliform bacteria violations require water systems to notify the public
                  within 30 days. In data on when systems actually sent those notices, Marcus found
                  that most went out within the first week, but “this distribution has a long right
                  tail with about 30 percent of public notifications occurring more than 6 months after
                  the determination date.” The deadline was in place and a large share of notices still
                  came months late. The paper does not say why those notices were late or whether
                  regulators acted on the delays.
                `),
                grade: 'moderate',
                quote: 'However, this distribution has a long right tail with about 30 percent of public notifications occurring more than 6 months after the determination date.',
                sources: [
                  source('Marcus 2022, Review of Economics and Statistics', 'https://doi.org/10.1162/rest_a_01006'),
                  source('Marcus, author\'s version, November 2020', 'https://michellemmarcus.com/wp-content/uploads/2020/12/marcus_testingthewater.pdf')
                ]
              })
            ]
          }),
          claim({
            text: 'Residents act on a contamination notice when it reaches them promptly.',
            evidence: [
              evidence({
                headline: 'Households bought more bottled water when water systems had to warn them of bacteria within a day, but not when the warning could wait a month.',
                finding: paragraph(`
                  Marcus compared household bottled water purchases during two kinds of coliform
                  bacteria violations that differ in how fast the public must be told. Violations that
                  require notice within 24 hours “are associated with a statistically significant 78
                  percent increase in bottled water sales during the violation”, while violations that
                  allow notice within 30 days brought no change in purchases. Where notice of the
                  slower kind happened to go out within a day, purchases looked like those for the
                  faster kind, though that estimate was imprecise. The author concludes that
                  “individuals avoid the negative health impacts of coliform bacteria violations only
                  when informed immediately.” Purchases show residents learned and acted; the study
                  does not measure awareness directly, and the two kinds of violation also differ in
                  how serious the contamination is.
                `),
                grade: 'strong',
                quote: 'Individuals avoid the negative health impacts of coliform bacteria violations only when informed immediately.',
                sources: [
                  source('Marcus 2022, Review of Economics and Statistics', 'https://doi.org/10.1162/rest_a_01006'),
                  source('Marcus, author\'s version, November 2020', 'https://michellemmarcus.com/wp-content/uploads/2020/12/marcus_testingthewater.pdf')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Many customers who read a water quality report could not tell whether it reported a health violation, even when the front page said so.',
                finding: paragraph(`
                  Johnson randomly assigned New Jersey water customers to read different versions of an
                  annual water quality report, some of them reporting a violation of a health standard.
                  Overall, readers of the violation versions were more likely to report a violation,
                  but “many respondents had trouble identifying the presence or absence of substance
                  amounts or violations, despite their seeming obviousness (e.g., in a ‘bottom line’
                  summary on the front page of each report), suggesting many were not processing this
                  information carefully.” Readers saw the reports inside a survey rather than in the
                  mail, and an annual report is less urgent than a notice of a new detection.
                `),
                grade: 'moderate',
                quote: 'Many respondents had trouble identifying the presence or absence of substance amounts or violations, despite their seeming obviousness (e.g., in a "bottom line" summary on the front page of each report), suggesting many were not processing this information carefully.',
                sources: [source('Johnson 2003, Risk Analysis', 'https://doi.org/10.1111/1539-6924.00375')]
              }),
              evidence({
                headline: 'Rural, low-income communities bought no more bottled water after nitrate violations, even though they faced more of them.',
                finding: paragraph(`
                  Allaire, Mackay, Zheng and Lall tracked weekly bottled water sales in 2,151 counties
                  against drinking water violation records from 2006 to 2015. Violations that pose an
                  immediate health risk went with a 14 percent rise in sales, but “rural, low-income
                  communities do not take significant averting action for elevated levels of nitrate,
                  yet experience a higher prevalence of nitrate violations.” Nitrate violations fall in
                  the federal rule's fastest notice tier. Sales measure buying, not awareness, so the
                  missing response may reflect cost or distrust as well as notice that never landed.
                `),
                grade: 'strong',
                quote: 'Rural, low-income communities do not take significant averting action for elevated levels of nitrate, yet experience a higher prevalence of nitrate violations.',
                sources: [source('Allaire, Mackay, Zheng and Lall 2019, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.1905385116')]
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
                headline: 'When Pennsylvania well owners sampled their own private wells, nearly one in five had a contaminant above a health-based drinking water limit.',
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
              }),
              evidence({
                headline: 'Flint residents who sampled their own water with a university lab found lead nearly double the federal action level while officials said there was no problem.',
                finding: paragraph(`
                  Flint residents collected water samples from 269 homes and a university lab ran the
                  analysis. “Our city-wide citizen science water lead results contradicted official claims
                  that there was no problem - our 90th percentile was 26.8 μg/L, which was almost double the
                  Lead and Copper Rule action level of 15 μg/L.” The team writes that the citizen datasets
                  “represented the only internally consistent measures of water lead levels” during the
                  crisis. It is one city, so it cannot say how often resident sampling catches what official
                  sampling misses.
                `),
                grade: 'moderate',
                quote: 'Our city-wide citizen science water lead results contradicted official claims that there was no problem- our 90th percentile was 26.8 μg/L, which was almost double the Lead and Copper Rule action level of 15 μg/L.',
                sources: [
                  source('Pieper et al. 2018, Environmental Science and Technology', 'https://doi.org/10.1021/acs.est.8b00791'),
                  source('Roy and Edwards 2019, Citizen Science: Theory and Practice', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')
                ]
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
            ]
          }),
          claim({
            text: 'Households told their water is contaminated switch to safer water.',
            evidence: [
              evidence({
                headline: 'Indian households told their drinking water was contaminated were more likely to start purifying it than households given no test results.',
                finding: paragraph(`
                  Jalan and Somanathan chose households in an Indian city at random to learn whether
                  their drinking water had tested positive for fecal contamination. “Households
                  initially not purifying their water and told that their drinking water was possibly
                  contaminated, were 11 percentage points more likely to begin some form of home
                  purification in the next eight weeks than households that received no information.”
                  They also spent more on purification. Households told their water was clean did not
                  cut back on purification they already did. The contaminant was fecal bacteria, and
                  the response was followed for eight weeks.
                `),
                grade: 'strong',
                quote: 'Households initially not purifying their water and told that their drinking water was possibly contaminated, were 11 percentage points more likely to begin some form of home purification in the next eight weeks than households that received no information.',
                sources: [source('Jalan and Somanathan 2008, Journal of Development Economics', 'https://doi.org/10.1016/j.jdeveco.2007.10.002')]
              }),
              evidence({
                headline: 'Bangladeshi families told their wells held arsenic mostly switched wells, and the arsenic in their bodies fell by nearly half.',
                finding: paragraph(`
                  In a cohort of 11,746 people in Araihazar, researchers told households their well
                  test results, labeled the wells, and installed deep community wells where exposure was
                  worst. Two years later, 58 percent of participants with unsafe wells had switched.
                  Among those who switched to a safe well, average urinary arsenic fell 46 percent, from
                  375 to 200 micrograms per gram of creatinine, toward the level of people who had used
                  safe wells all along. Well labeling and village health education went with more
                  switching to safe wells. The authors conclude that “testing of wells and informing
                  households of the consequences of As exposure, combined with installation of deep
                  community wells where most needed, can effectively address the continuing public
                  health emergency from arsenic in drinking water in Bangladesh.” Notice came as a
                  package with new wells, and the study follows one cohort before and after.
                `),
                grade: 'moderate',
                quote: 'Our study shows that testing of wells and informing households of the consequences of As exposure, combined with installation of deep community wells where most needed, can effectively address the continuing public health emergency from arsenic in drinking water in Bangladesh.',
                sources: [source('Chen, van Geen, Graziano, Pfaff, Madajewicz et al. 2007, Environmental Health Perspectives', 'https://doi.org/10.1289/ehp.9833')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Showing Cambodian households proof their water was contaminated moved only poorer families who had thought it safe, and better-off families did not change.',
                finding: paragraph(`
                  Brown, Hamoudi, Jeuland and Turrini ran a randomized experiment in two periurban
                  areas of Cambodia, showing households specific evidence that their water was
                  contaminated. They open by noting that “providing information about environmental
                  health risks only sometimes induces protective action.” Poorer households who had
                  believed their water safe changed their view of the risk and wanted a treatment
                  product more. “However, demand for the treatment product among higher and initially
                  more pessimistic SES households did not change significantly.” The outcome is demand
                  for a treatment product, not what people drank.
                `),
                grade: 'strong',
                quote: 'However, demand for the treatment product among higher and initially more pessimistic SES households did not change significantly.',
                sources: [source('Brown, Hamoudi, Jeuland and Turrini 2017, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2016.08.005')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('Baker, Bennear and Olmstead 2023, Journal of the Association of Environmental and Resource Economists', 'https://doi.org/10.1086/722619'),
        source('Bennear and Olmstead 2008, Journal of Environmental Economics and Management', 'https://doi.org/10.1016/j.jeem.2008.03.002'),
        source('Grooms 2015, The B.E. Journal of Economic Analysis and Policy', 'https://doi.org/10.1515/bejeap-2014-0205')
      ]
    }),

    spineProposal({
      name: 'Affected residents choose independent experts to check health data.',
      method: 'Community-Appointed Expert Review',
      summary: 'When the state sets an emergency health level or returns test results, residents choose reviewers who can split samples and publish what they find.',
      anchor: 'State action began only after public disclosure',
      where: 'The North Carolina Department of Health and Human Services and the Department of Environmental Quality.',
      when: paragraph(`
        June to July 2017 in Wilmington, when the state's screening level for GenX moved from 71,000
        to 140 parts per trillion in five weeks.
      `),
      description: paragraph(`
        Affected residents choose their own reviewers whenever the state sets an emergency health
        screening level or returns exposure results. The reviewers can split water and blood samples
        and check the state's analysis. They publish what they find through a channel the community
        picks. Their findings and the state's written answers also go to every household whose water
        or blood was tested. The state health and environmental departments keep authority over the
        screening level and the response. The state must answer the reviewers' findings in writing,
        and it must correct its numbers in public if the reviewers find errors. The community makes
        the appointments. The polluter or the state pays into a fund that has no say over who is
        hired. In Montana, an agreement has required a mining company since 2000 to pay for mining
        and water experts who advise residents' councils. The federal Superfund program pays for
        technical advisors that communities near cleanup sites hire themselves. In Wilmington in
        June and July 2017, the state's health screening level for GenX dropped from 71,000 to 140
        parts per trillion in five weeks. A key early meeting between regulators, Chemours, and
        officials was closed to the public, with one pool reporter. Residents who already believe
        their exposure is high may distrust a finding that it is low, whoever delivers it. The aim
        is that residents trust the state's water and blood test results and act on them.
      `),
      outcome: outcome({
        text: 'Residents trust the state\'s water and blood test results and act on them.',
        measured: null,
        claims: [
          claim({
            text: 'People living with contamination often distrust the test results that agencies give them.',
            evidence: [
              evidence({
                headline: 'After experts declared Flint\'s water safe, Flint residents still trusted the agencies in charge of it less than people in nearby counties did.',
                finding: paragraph(`
                  Researchers surveyed people online in Flint and the surrounding counties of
                  southeast Michigan about their water. Although technical experts had pronounced the
                  water safe, “Flint residents express lower levels of trust in entities that are
                  tasked with managing risks.” Flint residents also saw more risk and took more
                  protective steps than their neighbors. The survey compares places at one point in
                  time, so it shows where distrust sits, not how it grew.
                `),
                grade: 'moderate',
                quote: 'On the contrary, Flint residents express lower levels of trust in entities that are tasked with managing risks.',
                sources: [source('Sarathchandra and Taylor 2024, Environmental Sociology', 'https://doi.org/10.1080/23251042.2024.2408703')]
              }),
              evidence({
                headline: 'Flint home values stayed low long after officials declared the water safe again.',
                finding: paragraph(`
                  Economists compared home prices in Flint with prices in similar cities before and
                  after the water crisis. Flint's housing stock lost $520 million to $559 million in
                  value despite more than $400 million in repairs, and “home prices remain depressed
                  through August 2019, 16 months after the water was declared safe for consumption.”
                  The authors' summary names lost public trust, stigma, continued bottled water use,
                  and plumbing damage as possible reasons. Prices show that buyers did not act on the
                  all-clear. They do not measure trust directly.
                `),
                grade: 'strong',
                quote: 'Home prices remain depressed through August 2019, 16 months after the water was declared safe for consumption.',
                sources: [
                  source('Christensen, Keiser and Lade 2023, American Economic Journal: Economic Policy', 'https://doi.org/10.1257/pol.20190391'),
                  source('American Economic Association research summary', 'https://www.aeaweb.org/research/environmental-crises-economic-effects-flint')
                ]
              }),
              evidence({
                headline: 'People in communities with these chemicals in their drinking water described losing trust in the agencies that responded.',
                finding: paragraph(`
                  Researchers interviewed nine community members and state health department staff
                  from areas with contaminated drinking water. The stress people reported “included
                  health concerns and uncertainty, institutional delegitimization and associated
                  distrust, and financial burdens.” It is a small set of interviews, chosen to inform
                  public health practice.
                `),
                grade: 'weak',
                quote: 'Reported stressors included health concerns and uncertainty, institutional delegitimization and associated distrust, and financial burdens.',
                sources: [source('Calloway et al. 2020, International Journal of Environmental Research and Public Health', 'https://doi.org/10.3390/ijerph17238706')]
              })
            ],
            counterEvidence: []
          }),
          claim({
            text: 'People trust risk information more when it comes from someone they believe shares their values and interests.',
            evidence: [
              evidence({
                headline: 'Readers trusted a journalist writing about genetically modified food more when he shared their view.',
                finding: paragraph(`
                  In two experiments, researchers varied whether a journalist's stated attitude matched
                  the reader's. The first “confirmed that a journalist writing about genetically
                  modified (GM) food was trusted more when his attitude was congruent with that of his
                  readers,” and the effect ran through how similar readers felt he was. In the second,
                  agreement on an unrelated topic also raised trust. Similarity here means sharing a
                  view, which is not the same as sharing a stake in the outcome.
                `),
                grade: 'strong',
                quote: 'The first experiment (N = 261) confirmed that a journalist writing about genetically modified (GM) food was trusted more when his attitude was congruent with that of his readers.',
                sources: [source('Meijnders et al. 2009, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.2009.01240.x')]
              }),
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
                headline: 'People gave more weight to risk advice from advisers whose values matched their own.',
                finding: paragraph(`
                  In experiments, participants received risk advice from advisers who differed in past
                  accuracy and in how closely their values matched the participant's. The authors
                  “show that past quality of advice and degree of similarity between advisors' and
                  judges' values have separate (non-interacting) effects on two types of agent
                  behavior: the degree of trust expressed in a source (stated trust) and the weight
                  given to the source's advice (revealed trust).” So shared values moved how much
                  people relied on the advice, not only what they said about the adviser. Reliance
                  also tracked the adviser's past accuracy.
                `),
                grade: 'strong',
                quote: 'We show that past quality of advice and degree of similarity between advisors\' and judges\' values have separate (non-interacting) effects on two types of agent behavior: the degree of trust expressed in a source (stated trust) and the weight given to the source\'s advice (revealed trust).',
                sources: [source('Twyman, Harvey and Harries 2008, Judgment and Decision Making', 'https://doi.org/10.1017/s1930297500000218')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When people read the same facts about these chemicals from scientists or from the government, they found them equally believable.',
                finding: paragraph(`
                  In an Australian experiment, 1,031 people read a short resource about these
                  chemicals, attributed either to scientists or to the government, with four kinds of
                  message. “The experimental conditions did not significantly influence level of
                  concern about PFAS, perceived hazardousness of PFAS, or information credibility.”
                  People who trusted scientists in general were less concerned. Participants
                  were members of the public, not residents of a contaminated area.
                `),
                grade: 'strong',
                quote: 'The experimental conditions did not significantly influence level of concern about PFAS, perceived hazardousness of PFAS, or information credibility.',
                sources: [source('Morphett, Magi-Prowse, Roiko and Fielding 2025, Journal of Risk Research', 'https://doi.org/10.1080/13669877.2025.2522653')]
              }),
              evidence({
                headline: 'People trusted food risk sources that answered to someone more than sources with no oversight at all.',
                finding: paragraph(`
                  Across interviews and a survey of 888 people about food risk information, “contrary
                  to previous research, complete freedom does not lead to trust-rather sources which
                  possess moderate accountability are seen to be the most trusted”. The setting is
                  food risk, so it cannot be read straight onto environmental health reviewers.
                `),
                grade: 'moderate',
                quote: 'Contrary to previous research, complete freedom does not lead to trust-rather sources which possess moderate accountability are seen to be the most trusted.',
                sources: [source('Frewer, Howard, Hedderley and Shepherd 1996, Risk Analysis', 'https://doi.org/10.1111/j.1539-6924.1996.tb01094.x')]
              })
            ]
          }),
          claim({
            text: 'Affected people trust a risk judgment more when they had a say in how it was reached.',
            evidence: [
              evidence({
                headline: 'When every interest group got a say in a risk decision, people trusted the decision maker more and accepted the decision more readily.',
                finding: paragraph(`
                  Three experiments presented students with a decision about storing carbon
                  underground, varying who had been heard. “Decision-making procedures providing
                  different interest groups with equal opportunities to voice their opinions instigate
                  more trust in the decision maker and, in turn, lead to greater willingness to accept
                  decisions”, compared with no voice at all or voice for only one kind of group. The
                  voice here is a say in the decision, not the right to pick who checks the
                  evidence, and a say for one side only did not build the same trust.
                `),
                grade: 'strong',
                quote: 'Decision-making procedures providing different interest groups with equal opportunities to voice their opinions instigate more trust in the decision maker and, in turn, lead to greater willingness to accept decisions',
                sources: [source('Terwel, Harinck, Ellemers and Daamen 2010, Journal of Experimental Psychology: Applied', 'https://doi.org/10.1037/a0019977')]
              }),
              evidence({
                headline: 'People who learned that the public had helped make a risk decision supported it more and saw less risk in it.',
                finding: paragraph(`
                  In an experiment on space exploration risks, one group was told the policies came
                  from a participatory process and a control group was not. “After receiving
                  information during risk communication that cast risk policies about space
                  exploration as the product of a participatory decision process, participants in the
                  study felt more supportive of the resulting decisions than did participants in a
                  control group.” They also judged the risks lower. The author notes they were more
                  satisfied with the process than with the outcome itself.
                `),
                grade: 'strong',
                quote: 'after receiving information during risk communication that cast risk policies about space exploration as the product of a participatory decision process, participants in the study felt more supportive of the resulting decisions than did participants in a control group',
                sources: [source('Arvai 2003, Risk Analysis', 'https://doi.org/10.1111/1539-6924.00308')]
              }),
              evidence({
                headline: 'In Alaska, a risk study steered jointly by citizens, industry, and government settled a tanker safety dispute that dueling studies had stalled.',
                finding: paragraph(`
                  A policy scientist compared two disputes over the marine oil trade in Alaska. Where
                  each side produced its own technical analysis, the adversarial analysis caused a
                  stalemate. Where the groups built one shared analysis, “collaborative analysis is
                  found to facilitate the resolution of a policy dispute.” The shared analysis was the
                  Prince William Sound Risk Assessment. The consultants who ran it report that the
                  stakeholders formed a steering committee of the oil industry, government, local
                  industry, and local citizens, and that “various stakeholders made multimillion
                  dollar investments to reduce the risk of further oil spills based on the results of
                  the risk assessment.” Citizens shared the steering role with industry and
                  government, so this is joint selection, not selection by the community alone. It
                  is also two cases, and the consultants were reporting on their own work.
                `),
                grade: 'weak',
                quote: 'In the second case, collaborative analysis is found to facilitate the resolution of a policy dispute.',
                sources: [
                  source('Busenberg 1999, Policy Sciences', 'https://doi.org/10.1023/A:1004414605851'),
                  source('Merrick, van Dorp, Mazzuchi, Harrald, Spahn and Grabowski 2002, Interfaces', 'https://doi.org/10.1287/inte.32.6.25.6474')
                ]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'A participatory water monitoring committee at a Peruvian mine did not produce a shared view of the mine\'s impacts, and it narrowed what residents could claim.',
                finding: paragraph(`
                  Studying a participatory environmental monitoring committee in Ancash, Peru, the
                  author finds that “the work of the committee has not led to a cohesive environmental
                  knowledge community”. By leaning on an expert framework for judging water quality,
                  “the committee has helped to demarcate the boundaries of credible environmental
                  knowledge in ways that tend to constrain the capacity of area residents to hold the
                  mining firm accountable for observed impacts on downstream water resources.” A
                  participatory verification body can end up weakening the residents it was meant to
                  serve. The study does not say how the committee's experts were chosen.
                `),
                grade: 'weak',
                quote: 'Through its privileging of an expert framework for knowing and judging water quality, the committee has helped to demarcate the boundaries of credible environmental knowledge in ways that tend to constrain the capacity of area residents to hold the mining firm accountable for observed impacts on downstream water resources.',
                sources: [source('Himley 2014, Environment and Planning A', 'https://doi.org/10.1068/a45631')]
              })
            ]
          }),
          claim({
            text: 'People accept a finding more readily when a source they trust delivers it.',
            evidence: [
              evidence({
                headline: 'After a waterborne disease outbreak, residents who trusted the authorities felt safer and accepted their tap water again.',
                finding: paragraph(`
                  Studying residents' responses after a drinking water outbreak, the authors tested whether trust
                  shaped acceptance of the water or the other way round. “The results supported the
                  causal chain model suggesting a causal role for trust,” with trust working through
                  lower perceived risk. Trust itself rose with prior trust in institutions and with
                  the authorities' communication with the public. The analysis rests on correlations and path
                  models, so the order of cause is inferred, not tested.
                `),
                grade: 'moderate',
                quote: 'The results supported the causal chain model suggesting a causal role for trust.',
                sources: [source('Bratanova, Morrison, Fife-Schaw, Chenoweth and Mangold 2013, Journal of Applied Social Psychology', 'https://doi.org/10.1111/jasp.12113')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'People already worried about a hazard distrusted messages saying it was safe, whoever sent them.',
                finding: paragraph(`
                  Two experiments on food additives varied whether a message said an additive was
                  risky or safe, and measured prior attitudes. Risky messages were trusted more, but
                  “positive messages were distrusted only by those with negative prior attitudes.”
                  In the second study, people trusted whichever message fit what they already
                  believed. An earlier set of experiments found that results showing a health risk were
                  trusted more than results showing little risk, and “this effect was independent of
                  the credibility of the information source.” A reviewer who confirms that exposure is low may not reach residents who
                  already believe it is high.
                `),
                grade: 'strong',
                quote: 'Positive messages were distrusted only by those with negative prior attitudes.',
                sources: [
                  source('White, Pahl, Buehner and Haye 2003, Risk Analysis', 'https://doi.org/10.1111/1539-6924.00350'),
                  source('Siegrist and Cvetkovich 2001, Risk Analysis', 'https://doi.org/10.1111/0272-4332.211102')
                ]
              }),
              evidence({
                headline: 'Who delivered information about genetically modified food barely changed what people thought, because their views shaped whom they trusted.',
                finding: paragraph(`
                  In an experiment with 1,405 consumers in four European countries, the same
                  information was attributed to an industry group, a consumer group, or the
                  government. Source made little difference to attitudes, and “the extent to which
                  people trusted the information sources appeared to be driven by people's attitudes
                  to genetically modified foods, rather than trust influencing the way that people
                  reacted to the information.” Trust in a source may follow people's views of a
                  hazard rather than lead them.
                `),
                grade: 'strong',
                quote: 'The extent to which people trusted the information sources appeared to be driven by people\'s attitudes to genetically modified foods, rather than trust influencing the way that people reacted to the information.',
                sources: [source('Frewer, Scholderer and Bredahl 2003, Risk Analysis', 'https://doi.org/10.1111/j.0272-4332.2003.00385.x')]
              }),
              evidence({
                headline: 'Residents near a nuclear site trusted an outside research center more than federal agencies, yet some were dismayed when it found no link to thyroid disease.',
                finding: paragraph(`
                  A National Academies panel reviewed how the draft Hanford Thyroid Disease Study was
                  released. Many residents distrusted the federal energy department, and “it appears
                  that the Fred Hutchinson Cancer Research Center in Seattle enjoyed greater public
                  trust than the federal agencies while carrying out the HTDS.” Even so, the finding
                  of no link “was not expected by concerned members of the public in the region,”
                  and “the release of the Draft Final Report led to unhappiness and dismay among some
                  citizens in the Hanford area, not only because of the main message, but also because
                  of how the message was delivered.” The panel faulted the release as well as the
                  message, and residents did not choose the researchers.
                `),
                grade: 'weak',
                quote: 'The release of the Draft Final Report led to unhappiness and dismay among some citizens in the Hanford area, not only because of the main message, but also because of how the message was delivered.',
                sources: [source('National Research Council 2000, Review of the Hanford Thyroid Disease Study Draft Final Report', 'https://www.ncbi.nlm.nih.gov/books/NBK225224/')]
              }),
              evidence({
                headline: 'Experts paid well by one side were seen as hired guns, and people neither liked nor believed them.',
                finding: paragraph(`
                  In three mock jury experiments, researchers varied how much an expert witness was
                  paid and how often the expert testified. “Experts who are highly paid for their
                  testimony and who testify frequently are perceived as ‘hired guns.’ They are neither
                  liked nor believed.” The effect was strongest when the testimony was complex. The
                  judges were neutral jurors, not the people who hired the expert, so it speaks to how
                  others, including the state, would read reviewers paid on residents' behalf.
                `),
                grade: 'strong',
                quote: 'The results of the first two studies demonstrated that experts who are highly paid for their testimony and who testify frequently are perceived as "hired guns." They are neither liked nor believed.',
                sources: [source('Cooper and Neuhaus 2000, Law and Human Behavior', 'https://doi.org/10.1023/A:1005476618435')]
              })
            ]
          }),
          claim({
            text: 'People take steps to protect themselves when they learn their own exposure is high.',
            evidence: [
              evidence({
                headline: 'When households in Bangladesh learned their own well water held unsafe arsenic, many switched to a safer well within a year.',
                finding: paragraph(`
                  Researchers tested each well in one area of Bangladesh, labeled it safe or unsafe, and told
                  its users. Because arsenic levels were unrelated to household characteristics, they
                  could compare otherwise similar households. “Knowing that the household's well water
                  has an unsafe concentration of arsenic raises the probability that the household
                  changes to another well within one year by 0.37,” even though switching meant far
                  more time spent fetching water. The authors add that their campaign “provides
                  well-specific arsenic levels without which behavior does not change.”
                `),
                grade: 'strong',
                quote: 'knowing that the household\'s well water has an unsafe concentration of arsenic raises the probability that the household changes to another well within one year by 0.37',
                sources: [source('Madajewicz et al. 2007, Journal of Development Economics', 'https://doi.org/10.1016/j.jdeveco.2006.12.002')]
              }),
              evidence({
                headline: 'After Nevada participants got their own chemical results, fewer said they did not know how to cut their exposure, and one chemical in their urine fell.',
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
                  corrected misconceptions and took some steps to cut exposure, and “total behavior was
                  associated with knowledge and concern but not race, education, or report type”.
                `),
                grade: 'strong',
                quote: 'total behavior was associated with knowledge and concern but not race, education, or report type',
                sources: [source('Boronow et al. 2023, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP12565')]
              }),
              evidence({
                headline: 'More than a quarter of Maine households told their well water held unsafe arsenic did nothing about it.',
                finding: paragraph(`
                  Researchers surveyed 386 households in central Maine told three to seven years
                  earlier that their well water held arsenic above the safety threshold. Most had
                  installed treatment or switched to bottled water, “but the remaining 27% of households
                  did not act.” Households with lower arsenic levels were more likely to do nothing, and
                  15 percent of the treatment systems checked still let too much arsenic through. The
                  actions are as households reported them.
                `),
                grade: 'moderate',
                quote: 'Another 30% report taking other mitigation actions such as drinking bottled water because of the As, but the remaining 27% of households did not act.',
                sources: [source('Flanagan, Marvinney, Johnston, Yang and Zheng 2015, Science of the Total Environment', 'https://doi.org/10.1016/j.scitotenv.2014.03.079')]
              })
            ]
          })
        ]
      }),
      sources: []
    }),

    spineProposal({
      name: 'Federal grants fund local groups to monitor PFAS and push for state limits.',
      method: 'Funded Community Oversight',
      summary: 'A federal grant program pays for community-run monitoring, technical, and legal staff who petition the state for enforceable PFAS limits.',
      anchor: 'public notice and comment',
      where: 'Congress and the Environmental Protection Agency fund it. The North Carolina Environmental Management Commission sets the standards it feeds.',
      when: paragraph(`
        February 2019, when the consent order took effect. The order built oversight for one plant
        but no path to statewide rules.
      `),
      description: paragraph(`
        A federal grant program pays for standing monitoring, technical, and legal staff in affected
        regions. A local board of residents, utilities, and local governments directs the work and
        publishes its monitoring results. Its main product is a petition for enforceable statewide
        limits on per- and polyfluoroalkyl substances (PFAS).
        Congress and the Environmental Protection Agency fund the program. The state Environmental
        Management Commission still decides whether to adopt limits. The 2019 consent order created
        citizen enforcement, a sampling network, and an exposure study for one plant, with no path
        to statewide rules. In 2018 the legislature funded a statewide PFAS testing network run by
        university researchers rather than local residents. In 2024 state regulators recommended
        limits for eight PFAS, and a commission committee narrowed that to three. Between 2024 and
        2026 the federal government moved to roll back its PFAS limits, and a state standard would
        hold even if federal limits fall. The money comes from the federal government and the
        petition goes to a state commission, so the groups do not press the body that funds them.
        Lawmakers have moved mainly when protest and work inside the process came together, and
        groups funded by government tend to avoid protest. The aim is that the state adopts
        enforceable PFAS limits and residents' exposure falls.
      `),
      outcome: outcome({
        text: 'The state adopts enforceable PFAS limits, and residents\' exposure falls.',
        measured: 'North Carolina set no enforceable PFAS standard',
        claims: [
          claim({
            text: 'Industry takes part in rulemaking far more than affected residents do.',
            evidence: [
              evidence({
                headline: 'When federal agencies wrote new rules, businesses filed most of the comments and ordinary citizens rarely filed any.',
                finding: paragraph(`
                  Golden examined the comments on eleven rules drawn at random from the Environmental
                  Protection Agency, the highway safety agency, and the housing department. She reports
                  “a dearth of citizen commenters, the predominance of participation by business
                  interests, and the presence of issue networks, and the absence of any discernible bias
                  in whose voices get heard”. The study counts who took part. It found no sign that
                  agencies favored the business comments they received.
                `),
                grade: 'moderate',
                quote: 'Among the findings are: a dearth of citizen commenters, the predominance of participation by business interests, and the presence of issue networks, and the absence of any discernible bias in whose voices get heard.',
                sources: [source('Golden 1998, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/oxfordjournals.jpart.a024380')]
              }),
              evidence({
                headline: 'Federal agencies started most new rules inside ongoing programs where business interests dominate.',
                finding: paragraph(`
                  Tracing where 276 federal rules came from, West and Raso find that “agency decisions to
                  initiate rulemaking are heavily grounded in the implementation of ongoing programs and
                  subgovernment relationships in which economic interests tend to be predominant”. They
                  also find that Congress plays a prominent part in setting which rules get written. The
                  study describes where rules start. It does not measure what residents could have
                  started.
                `),
                grade: 'moderate',
                quote: 'We find that agency decisions to initiate rulemaking are heavily grounded in the implementation of ongoing programs and subgovernment relationships in which economic interests tend to be predominant.',
                sources: [source('West and Raso 2013, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/mus028')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'When businesses and public interest groups petitioned federal agencies for new rules, the agencies treated them about the same.',
                finding: paragraph(`
                  Walters followed every rulemaking petition filed with three federal agencies from 2000
                  to 2016 from filing to resolution. He finds that “although business interests may
                  participate at a higher rate than public interest groups and individuals, there is
                  little evidence of full-on regulatory capture via petitions”, and that agencies stayed
                  largely evenhanded. He also finds that petitions from any side rarely changed much.
                  The article appeared in a law review.
                `),
                grade: 'moderate',
                quote: 'I find that, although business interests may participate at a higher rate than public interest groups and individuals, there is little evidence of full-on regulatory capture via petitions.',
                sources: [source('Walters 2019, Harvard Environmental Law Review', 'https://scholarship.law.tamu.edu/facscholar/1574')]
              })
            ]
          }),
          claim({
            text: 'Public grants keep community groups able to press for policy change.',
            evidence: [
              evidence({
                headline: 'Community groups in low-income neighborhoods that brought in outside money were more likely to keep going.',
                finding: paragraph(`
                  Walker and McCarthy followed a sample of community organizing groups in low- and
                  moderate-income areas from 1990 to 2004 and asked which ones survived. They find
                  that, “beyond the considerable effects of externally obtained resources, CBOs also
                  benefit considerably by engaging in even a small amount of grassroots fundraising”,
                  and conclude that cultivating resources is the surest path to survival. The study
                  compares groups that differed in their funding. It does not isolate public grants
                  from other outside money.
                `),
                grade: 'moderate',
                quote: 'beyond the considerable effects of externally obtained resources, CBOs also benefit considerably by engaging in even a small amount of grassroots fundraising',
                sources: [source('Walker and McCarthy 2010, Social Problems', 'https://doi.org/10.1525/sp.2010.57.3.315')]
              }),
              evidence({
                headline: 'Nonprofits that received more government money did slightly more policy advocacy, not less.',
                finding: paragraph(`
                  Pooling 218 estimates from 38 studies, Lu finds a slight positive link between
                  government funding and advocacy, and concludes that “government funding could be a
                  weak catalyst, rather than an obstacle, for nonprofits to participate in the policy
                  process”. Funded groups leaned toward working inside the process. The pooled studies
                  compare organizations with more and less funding, and Lu judges funding not a key
                  predictor of how much a group advocates.
                `),
                grade: 'moderate',
                quote: 'Government funding could be a weak catalyst, rather than an obstacle, for nonprofits to participate in the policy process.',
                sources: [source('Lu 2018, The American Review of Public Administration', 'https://doi.org/10.1177/0275074016680024')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'European advocacy groups that drew more of their budgets from government spent less on lobbying.',
                finding: paragraph(`
                  Using the European Union's lobbying register, Bloodgood and Tremblay-Boire find that
                  “the share of government funding in NGO budgets is negatively associated with lobbying
                  expenditure”, an effect they call substantial. They offer two readings: funders
                  discipline groups that turn too political, and more radical groups avoid government
                  money. The study compares groups at one point and cannot tell those two apart.
                `),
                grade: 'moderate',
                quote: 'we find that the share of government funding in NGO budgets is negatively associated with lobbying expenditure',
                sources: [source('Bloodgood and Tremblay-Boire 2017, European Political Science Review', 'https://doi.org/10.1017/S1755773915000430')]
              }),
              evidence({
                headline: 'Government-funded homeless service groups lobbied mainly to protect their own funding and avoided confronting officials.',
                finding: paragraph(`
                  Interviewing managers of homeless service nonprofits, Mosley found that government
                  funding made them eager to advocate, but that “advocacy goals are focused primarily on
                  brokering resources and promoting the organization rather than substantive policy
                  change or client representation”. To stay legitimate partners, the groups rejected
                  confrontational tactics. The study is qualitative and covers one field of services.
                `),
                grade: 'weak',
                quote: 'As a result, advocacy goals are focused primarily on brokering resources and promoting the organization rather than substantive policy change or client representation.',
                sources: [source('Mosley 2012, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/mus003')]
              })
            ]
          }),
          claim({
            text: 'Groups that weigh in during rulemaking change the rules agencies write.',
            evidence: [
              evidence({
                headline: 'When interest groups commented on proposed federal rules, agencies often changed the final rules toward what the groups asked.',
                finding: paragraph(`
                  Yackee compared 1,444 interest group comments on forty federal rules with the changes
                  between each proposed and final rule. She concludes that “those who voice their
                  preferences during the notice and comment period rulemaking are often able to change
                  government policy outputs to better match their preferences”. The study links what
                  groups asked for to what changed. It cannot rule out that agencies would have made
                  some of those changes anyway.
                `),
                grade: 'moderate',
                quote: 'I conclude that those who voice their preferences during the notice and comment period rulemaking are often able to change government policy outputs to better match their preferences.',
                sources: [source('Yackee 2006, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/mui042')]
              }),
              evidence({
                headline: 'In state environmental rulemaking, groups other than industry also had real chances to change what regulators decided.',
                finding: paragraph(`
                  Crow, Albright, and Koebele studied how stakeholders took part in rulemaking, and what
                  came of it, in three environmental policy areas across five states. They find that “while industry may be influential during rulemaking across cases,
                  consequential opportunities for non-industry stakeholders to influence regulatory
                  decisions also exist”. The study compares a small set of rulemakings in depth.
                `),
                grade: 'moderate',
                quote: 'We find that while industry may be influential during rulemaking across cases, consequential opportunities for non-industry stakeholders to influence regulatory decisions also exist.',
                sources: [source('Crow, Albright, and Koebele 2020, Policy Studies Journal', 'https://doi.org/10.1111/psj.12314')]
              }),
              evidence({
                headline: 'Where the public held real power over environmental decisions, the decisions set stronger environmental terms.',
                finding: paragraph(`
                  The authors coded 305 published cases of public environmental decision making and
                  modeled how participation related to results. They “find a generally positive effect
                  of participation on the environmental standard of governance outputs, in particular
                  where communication intensity is high and where participants are delegated
                  decision-making power”. The cases come from published accounts, not a random sample.
                `),
                grade: 'moderate',
                quote: 'we find a generally positive effect of participation on the environmental standard of governance outputs, in particular where communication intensity is high and where participants are delegated decision-making power',
                sources: [source('Jager, Newig, Challies and Kochskämper 2019, Journal of Public Administration Research and Theory', 'https://doi.org/10.1093/jopart/muz034')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'Business comments shifted final federal rules, while comments from other groups did not.',
                finding: paragraph(`
                  Analyzing almost 1,700 comments on more than thirty federal rules, Yackee and Yackee
                  find that “business commenters, but not nonbusiness commenters, hold important
                  influence over the content of final rules”, and that business influence grew as
                  business made up more of the commenters. They conclude that notice and comment has
                  not opened agency decisions to the public as much as its defenders suggest.
                `),
                grade: 'moderate',
                quote: 'We find that business commenters, but not nonbusiness commenters, hold important influence over the content of final rules.',
                sources: [source('Yackee and Yackee 2006, Journal of Politics', 'https://doi.org/10.1111/j.1468-2508.2006.00375.x')]
              })
            ]
          }),
          claim({
            text: 'Sustained organized pressure leads governments to adopt stricter environmental rules.',
            evidence: [
              evidence({
                headline: 'Where residents mobilized against fracking, towns were more likely to pass local pauses on fracking.',
                finding: paragraph(`
                  Tracing the spread of opposition to fracking across the Marcellus Shale states, Vasi
                  and colleagues find that “local screenings of Gasland contributed to anti-fracking
                  mobilizations, which, in turn, affected the passage of local fracking moratoria”. The
                  study draws on internet searches, social media posts, and newspaper coverage to trace
                  that sequence. It covers town governments, not state standards.
                `),
                grade: 'moderate',
                quote: 'Local screenings of Gasland contributed to anti-fracking mobilizations, which, in turn, affected the passage of local fracking moratoria in the Marcellus Shale states.',
                sources: [source('Vasi, Walker, Johnson, and Tan 2015, American Sociological Review', 'https://doi.org/10.1177/0003122415598534')]
              }),
              evidence({
                headline: 'States where environmental groups spent more on politics adopted stronger renewable energy standards.',
                finding: paragraph(`
                  Following 48 states from 1997 to 2020, Haseloff shows that “Democratic party power,
                  higher political spending from environmental organizations, lower investor-owned
                  utility market share, higher publicly owned utility market share, and lower levels of
                  fossil fuel production and political spending lead to more stringent policies”. The
                  study compares states over time. The spending it measures is by established
                  environmental organizations, not by local community groups.
                `),
                grade: 'moderate',
                quote: 'I show that Democratic party power, higher political spending from environmental organizations, lower investor-owned utility market share, higher publicly owned utility market share, and lower levels of fossil fuel production and political spending lead to more stringent policies.',
                sources: [source('Haseloff 2024, Socius', 'https://doi.org/10.1177/23780231241266520')]
              }),
              evidence({
                headline: 'In two New England communities with contaminated water, a small number of residents helped shape drinking water rules for these chemicals.',
                finding: paragraph(`
                  Interviewing 40 residents of Portsmouth, New Hampshire, and Hyannis, Massachusetts,
                  Garrett and colleagues found that “the work of a fairly small number of residents can
                  generate important knowledge and contribute to local and national outcomes, including
                  drinking water regulation and medical guidelines”. They also found structural barriers
                  to community action, and that similar levels of action can lead to different outcomes.
                `),
                grade: 'weak',
                quote: 'These case studies show how the work of a fairly small number of residents can generate important knowledge and contribute to local and national outcomes, including drinking water regulation and medical guidelines.',
                sources: [source('Garrett et al. 2024, Journal of Environmental Studies and Sciences', 'https://doi.org/10.1007/s13412-024-00994-2')]
              })
            ],
            counterEvidence: [
              evidence({
                headline: 'The environmental movement moved Congress to pass laws only when it lobbied and protested heavily at the same time.',
                finding: paragraph(`
                  Studying the environmental movement and Congress from 1961 to 1990, Johnson, Agnone,
                  and McCarthy found that movement activity of every kind went with more hearings on the
                  environment. But “only when there are high levels of both protest and institutional
                  activity is there any evidence that the environmental movement directly influences the
                  passage of environmental laws”. The study compares years at the national level.
                `),
                grade: 'moderate',
                quote: 'Only when there are high levels of both protest and institutional activity is there any evidence that the environmental movement directly influences the passage of environmental laws.',
                sources: [source('Johnson, Agnone, and McCarthy 2010, Social Forces', 'https://doi.org/10.1353/sof.2010.0038')]
              }),
              evidence({
                headline: 'Across published studies, advocacy groups and movements changed policy no more than half the time.',
                finding: paragraph(`
                  Coding studies published in leading sociology and political science journals from
                  1990 to 2000, Burstein and Linton find that “political organizations affect policy no
                  more than half the time”. They also find some evidence that groups matter most when
                  their activity speaks to elected officials' electoral concerns.
                `),
                grade: 'moderate',
                quote: 'political organizations affect policy no more than half the time',
                sources: [source('Burstein and Linton 2002, Social Forces', 'https://doi.org/10.1353/sof.2003.0004')]
              })
            ]
          }),
          claim({
            text: 'Enforceable standards lower exposure once they take effect.',
            evidence: [
              evidence({
                headline: 'Arsenic in people\'s bodies fell after the federal limit took effect, and only among those drinking public water.',
                finding: paragraph(`
                  Researchers compared people on public water with private well users, whom the rule
                  does not cover, in a repeated national health survey. Urinary arsenic fell 17 percent
                  over a decade among public water users and did not change among well water users.
                  The authors conclude that “the decline
                  in urinary arsenic among public water but not private well users in NHANES 2003-2014
                  indicates that the implementation of the current MCL has reduced arsenic exposure in
                  the US population”.
                `),
                grade: 'strong',
                quote: 'The decline in urinary arsenic among public water but not private well users in NHANES 2003-2014 indicates that the implementation of the current MCL has reduced arsenic exposure in the US population.',
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
                headline: 'After the arsenic limit took effect, small groundwater systems and those serving Hispanic communities were more likely to keep exceeding it.',
                finding: paragraph(`
                  Comparing monitoring records from 36,406 community water systems before and after the
                  federal arsenic limit took effect, Nigra and colleagues found arsenic fell nationwide, but
                  “CWSs reliant on groundwater, serving smaller populations, located in the Southwest, and
                  serving Hispanic communities were more likely to continue exceeding the arsenic MCL, raising
                  environmental justice concerns”. The records show who stayed out of compliance, not why.
                `),
                grade: 'strong',
                quote: 'CWSs reliant on groundwater, serving smaller populations, located in the Southwest, and serving Hispanic communities were more likely to continue exceeding the arsenic MCL, raising environmental justice concerns.',
                sources: [source('Nigra et al. 2020, Environmental Health Perspectives', 'https://doi.org/10.1289/EHP7313')]
              }),
              evidence({
                headline: 'Millions of people still drink from water systems that break federal health standards.',
                finding: paragraph(`
                  Tracking 17,900 community water systems from 1982 to 2015, Allaire, Wu, and Lall found
                  violations rising in several states and repeat violations common in hot spots, and note that
                  “in 2015, nearly 21 million people relied on community water systems that violated
                  health-based quality standards”. Rural systems violated standards far more often than urban
                  ones.
                `),
                grade: 'strong',
                quote: 'Efforts to reduce violations are of national concern given that, in 2015, nearly 21 million people relied on community water systems that violated health-based quality standards.',
                sources: [source('Allaire, Wu, and Lall 2018, Proceedings of the National Academy of Sciences', 'https://doi.org/10.1073/pnas.1719805115')]
              })
            ]
          })
        ]
      }),
      sources: [
        source('North Carolina Health News, 17 July 2024, North Carolina regulators pass on establishing standards for forever chemicals', 'https://www.northcarolinahealthnews.org/2024/07/17/north-carolina-regulators-pass-on-establishing-standards-for-forever-chemicals/'),
        source('US Government Accountability Office, T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')
      ]
    })
  ]
});
