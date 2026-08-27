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
      sources: [source('EPA 2005', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
    }),
    mechanism({
      name: 'Consent order verification',
      actor: 'EPA, under the 2009 TSCA 5(e) order',
      failure: 'knew-no-act',
      note: 'An order requiring 99% capture, with no scheduled check for eight years',
      detail: paragraph(`
        The 2009 consent order recognized insufficient information and potential
        unreasonable risk, required 99 percent capture, and contained no
        scheduled mechanism for EPA to verify compliance. EPA's first on-site
        inspection at Fayetteville Works came on June 28, 2017, three weeks
        after the newspaper story. For notifying anyone downstream, no mechanism
        existed at all.
      `),
      anchors: ['insufficient information and potential unreasonable risk', 'first on-site TSCA compliance monitoring inspection'],
      sources: [source('EPA OIG 2020', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
    }),
    mechanism({
      name: 'Discharge permits and public comment',
      actor: 'NC DEQ and its predecessors, under the Clean Water Act',
      failure: 'did-not-know',
      note: 'The permit file never named the chemical, so comment could not fire',
      detail: paragraph(`
        Permit applications contained no reference to GenX or to any chemical
        name, formula, or CAS number that would identify it. A retired DEQ
        supervisor said he would not have understood that the process generated
        GenX as a byproduct. Public comment existed at every renewal and could
        not fire on what the file never named. After 2017 the mechanism worked:
        DEQ suspended the discharge provisions and ran the 2020 permit through
        draft, comment, and hearing.
      `),
      anchors: ['Discharge continued largely unmonitored'],
      sources: [source('NC DEQ letter, Nov. 16, 2017', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
    }),
    mechanism({
      name: 'Federal drinking water monitoring',
      actor: 'EPA, under UCMR3',
      failure: 'acted-no-effect',
      note: 'The data were public; no notification duty attached',
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
      note: '24-hour notice exists only for regulated contaminants',
      detail: paragraph(`
        The Public Notification Rule gives water suppliers 24 hours to notify
        people about violations of existing drinking water regulations. GenX was
        unregulated, so nothing in the rule could fire. No jurisdiction has been
        identified with a detection-triggered notice law for unregulated
        contaminants.
      `),
      anchors: ['Toxin taints CFPUA drinking water'],
      sources: [source('EPA Public Notification Rule', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
    }),
    mechanism({
      name: 'Toxics release right-to-know',
      actor: 'EPCRA, the Toxics Release Inventory',
      failure: 'no-mechanism',
      note: 'PFAS entered the inventory only in December 2019',
      detail: paragraph(`
        Every measured disclosure-regime success operates on listed, named
        chemicals. PFAS entered TRI only when the FY2020 National Defense
        Authorization Act added them on December 20, 2019. During the entire
        exposure window, no disclosure regime named these compounds.
      `),
      anchors: ['No regulatory disclosure required'],
      sources: [source('EPA TRI PFAS page', 'https://www.epa.gov/toxics-release-inventory-tri-program/addition-certain-pfas-tri-national-defense-authorization-act')]
    }),
    mechanism({
      name: 'Worker safety rules',
      actor: 'OSHA',
      failure: 'no-mechanism',
      note: 'No exposure standard existed; the reporting channel was weak',
      detail: paragraph(`
        No PFOA or GenX exposure standard existed at Washington Works or
        Fayetteville. The whistleblower channel that did exist was documented by
        GAO as lacking sufficient internal controls, with screening standards
        that varied by region.
      `),
      anchors: ['continued exposure is not tolerable'],
      sources: [source('GAO-10-722', 'https://www.gao.gov/products/gao-10-722')]
    }),
    mechanism({
      name: 'Citizen suits',
      actor: 'Cape Fear River Watch, SELC',
      failure: 'worked',
      note: 'Available since the 1970s; fired in 2018 and moved the record',
      detail: paragraph(`
        Citizen suits under the Clean Water Act and TSCA were available since
        the 1970s and could not fire before disclosure. Once they fired, they
        produced the highest documented efficacy in the case: plaintiff party
        status, independent enforcement authority over eleven provisions, a
        standing DEQ meeting obligation, a $12 million penalty, and 99 percent
        discharge reductions. The scope was one facility, not a standard.
      `),
      anchors: ['citizen-suit strategies'],
      sources: [source('NC DEQ consent order page', 'https://www.deq.nc.gov/news/key-issues/genx-investigation/chemours-consent-order')]
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
            showed conventional treatment did not remove it.
          `),
          grade: 'strong',
          sources: [source('Sun et al. 2016, ES&T Letters', 'https://pubs.acs.org/doi/10.1021/acs.estlett.6b00398')]
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
        summed serum PFAS; four legacy PFAS sat above national levels in 97
        percent or more of participants. Median fluoroether levels declined 34
        to 65 percent within six months of discharge controls. GenX itself was
        not detected above 2 ng/mL; the measured burden is fluoroethers and
        legacy PFAS.
      `),
      from: [
        { anchor: 'Discharge continued largely unmonitored', strength: 'strong', note: 'Exposure shows up in the blood' },
        { anchor: 'public notice and comment', strength: 'strong', note: 'Controls were followed by measured declines' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Kotlarz et al. (2020) measured serum PFAS in the GenX Exposure Study
            cohort; archived 2010-2016 serum showed PFMOAA medians of 42 ng/mL.
            PFOA elimination kinetics (half-life 3.26 years after exposure ended
            in Arnsberg, Germany) support the earlier-cutoff counterfactual in
            every chain.
          `),
          grade: 'strong',
          quote: 'PFOA levels decreased in all study participants from Arnsberg',
          sources: [
            source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837'),
            source('Brede et al. 2010 (TERA summary)', 'https://tera.org/Alliance%20for%20Risk/Workshop%20Xll/CaseSummaryPFOA.pdf')
          ]
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
        Brunswick County built reverse osmosis for $158.7 million. The costs are
        the measured price of decades of unknowing exposure.
      `),
      from: [
        { anchor: 'Toxin taints CFPUA drinking water', strength: 'strong', note: 'Disclosure forced the treatment decision onto ratepayers' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Utility filtration costs and rate increases are documented in
            contemporaneous reporting.
          `),
          grade: 'strong',
          sources: [
            source('WUNC 2025', 'https://www.wunc.org/environment/2025-06-09/chemours-genx-cape-fear-river-pollution-pfas-wilmington'),
            source('Port City Daily 2022', 'https://portcitydaily.com/local-news/2022/06/24/brunswick-officials-celebrate-low-pfas-in-water-typically-achieved-through-reverse-osmosis/')
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
        affected well owners. Serum fluoroethers declined 34 to 65 percent
        within six months of discharge controls.
      `),
      from: [
        { anchor: 'public notice and comment', strength: 'strong', note: 'The enforceable order produced the reductions' },
        { anchor: 'citizen-suit strategies', strength: 'strong', note: 'The suit made the community a party with enforcement power' }
      ],
      evidence: [
        evidence({
          finding: paragraph(`
            Consent order terms and compliance reductions are documented in the
            order and state enforcement records.
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
            The federal government rescinded regulatory determinations for four
            PFAS substances in a May 2026 Federal Register notice; NC House Bill
            569 passed the House 104 to 3 and stalled in the Senate.
          `),
          grade: 'strong',
          sources: [source('Federal Register 2026', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
        })
      ]
    })
  ],

  proposals: [
    spineProposal({
      name: 'Give workers a protected way to report',
      method: 'Worker committees & protected disclosure',
      anchor: 'continued exposure is not tolerable',
      where: 'Congress and EPA, with worker anti-retaliation machinery as the shield',
      when: paragraph(`
        1980, and federally. By 1980 DuPont had confirmed elevated PFOA in its
        workers and concluded internally that continued exposure was not
        tolerable, the same year Fayetteville Works began discharging into the
        Cape Fear. A protected worker channel with a duty to transmit
        substantial-risk findings belongs in the chemicals statute itself. The
        earliest leverage point is 1961; 1980 is the first year the intervention
        touches this river.
      `),
      description: paragraph(`
        From the 6/8 session: a mechanism for involving workers in oversight.
        DuPont observed unusual medical issues among its own workers, who were
        the canary in the coal mine with no say.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents'],
      impactsConjectured: ['Corporate accountability', 'Worker empowerment'],
      links: [
        propLink({
          name: 'A protected channel produces disclosures',
          claim: paragraph(`
            A protected, structured worker reporting channel produces
            disclosures of concealed findings.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Across all reported frauds at large US firms 1996 to 2004,
                employees were the single largest detector class, ahead of
                regulators and auditors.
              `),
              grade: 'moderate',
              quote: 'Only 6% of the frauds are revealed by the SEC and 14% by the auditors. More important monitors are media (14%), industry regulators (16%), and employees (19%).',
              sources: [source('Dyck, Morse and Zingales (NBER w12882)', 'https://www.nber.org/papers/w12882')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Employees bear net costs from whistleblowing, which suppresses
                reporting absent strong protection; GAO found the existing OSHA
                whistleblower program lacked sufficient internal controls.
              `),
              grade: 'moderate',
              quote: 'OSHA lacks sufficient internal controls to ensure that the whistleblower program operates as intended',
              sources: [source('GAO-10-722', 'https://www.gao.gov/products/gao-10-722')]
            })
          ]
        }),
        propLink({
          name: 'Disclosure reaches and moves the regulator',
          claim: paragraph(`
            Worker disclosure reaches the regulator and produces scrutiny
            decades before litigation discovery would.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                3M's 1998 disclosure letter triggered EPA's first sustained look
                at PFAS in blood and a compliance audit collecting over 700
                studies; firms targeted by an OSHA retaliation complaint showed
                measurably fewer irregularities for at least two years after.
              `),
              grade: 'moderate',
              quote: 'those deterrent effects lasted for at least two full years after the whistleblower lodged the complaint',
              sources: [source('Wilde 2017 (summary)', 'https://www.sciencedaily.com/releases/2017/01/170103151133.htm')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The in-case sanction arrived 24 years after the earliest
                violation year and imposed no enforceable limits on continued
                production; disclosure reaching only the agency might have
                replicated the five-year stall the detection findings hit.
              `),
              grade: 'moderate',
              sources: [source('EPA 2005', 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/fdcb2f665cac66bb852570d7005d6665.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier information, earlier discharge control',
          claim: paragraph(`
            Earlier regulator information produces earlier discharge control.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Once information became public in June 2017, DEQ suspended the
                discharge-authorizing permit provisions effective November 30,
                2017, and the 2019 order produced 99 percent reductions. The
                response function is demonstrated fast when it fires.
              `),
              grade: 'moderate',
              sources: [source('NC DEQ letter, Nov. 16, 2017', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
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
          name: 'Shorter window, lower body burden',
          claim: paragraph(`
            An earlier cutoff lowers cumulative exposure and the PFAS measured
            in residents' blood.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median serum fluoroethers declined 34 to 65 percent within six
                months of discharge controls; PFOA's elimination half-life after
                exposure ends is 3.26 years.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Richard Purdy resignation disclosure',
          where: '3M, Minnesota', when: '1999',
          authority: 'Individual, unprotected',
          outcome: paragraph(`
            His resignation letter to EPA helped trigger the PFC investigation;
            3M announced the PFOS phaseout in 2000. Individual, unprotected, and
            late; the outcome it moved is documented.
          `),
          strength: 'moderate',
          sources: [source('Minnesota Reformer', 'https://minnesotareformer.com/2022/12/15/toxic-3m-knew-its-chemicals-were-harmful-decades-ago-but-didnt-tell-the-public-government/')]
        }),
        comparable({
          name: 'NASA Aviation Safety Reporting System',
          where: 'United States', when: '1976-present',
          authority: 'Third-party receipt, routinized immunity',
          outcome: paragraph(`
            Over 500,000 confidential reports and about 4,000 alerting messages;
            disclosure became normal professional behavior. Hazard-reduction
            endpoint unmeasured and confounded with technology and regulation.
          `),
          strength: 'moderate',
          sources: [source('FAA Safety', 'https://www.faasafety.gov/files/events/EA/EA23/2010/EA2334954/NASA_Reporting.pdf')]
        }),
        comparable({
          name: 'OSHA whistleblower program audit',
          where: 'United States', when: '2010',
          authority: 'The existing statutory channel',
          outcome: paragraph(`
            GAO found the program lacked sufficient internal controls and could
            not measure its own outcomes. The measured baseline the proposal must
            exceed, not copy.
          `),
          strength: 'strong',
          sources: [source('GAO-10-722', 'https://www.gao.gov/products/gao-10-722')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let residents report early warning signs',
      method: 'Participatory science & community reporting',
      anchor: 'cattle deaths',
      where: 'EPA Region 3 and West Virginia for the documented 1998 signal; NC DEQ and CFPUA for a 2013-2015 Cape Fear deployment',
      when: paragraph(`
        The chip sits at 1998 because that is where the workshop anchored it:
        the first time someone notices something is off, which in this record is
        the farmer Wilbur Tennant's documentation in West Virginia. On the Cape
        Fear itself the instrument had little to grip before 2012, because GenX
        at ng/L levels produced no resident-observable signal. A defensible Cape
        Fear deployment is 2013 to 2015, when UCMR3 data existed and an
        organized community water sampling program could have found and
        publicized what the utility did not. Whether the map should keep the
        workshop's anchor or move to the 2012 detection is a pending call.
      `),
      description: paragraph(`
        From the 6/8 session, anchored to 1998: local meetings, information
        spreading, and crowdsourced data collection at the first sign of a
        threat, with a standing institution that treats resident reports as
        experiential knowledge.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents'],
      impactsConjectured: ['Experiential knowledge honored', 'Community standing'],
      links: [
        propLink({
          name: 'Resident reports trigger investigation',
          claim: paragraph(`
            Resident reports of suspicions and symptoms trigger investigation
            before formal institutional detection.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Over 50,000 citizen complaints to the Texas environmental
                regulator increased inspections and notices of violation at the
                targeted facilities; Woburn's community observation plus an
                academic study confirmed a fourfold leukemia excess; Tennant's
                cattle documentation pierced concealment in the PFOA arc.
              `),
              grade: 'moderate',
              sources: [
                source('AEA 2018 conference paper', 'https://www.aeaweb.org/conference/2018/preliminary/paper/eSR58nDd'),
                source('Kennedy, Woburn files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Cancer-cluster base rates run hard against symptom-triggered
                detection.
              `),
              grade: 'moderate',
              quote: 'In the 108 CDC cancer cluster investigations that resulted, no meaningful environmental causes explained any of the clusters',
              sources: [source('Connecticut DPH technical brief', 'https://portal.ct.gov/-/media/departments-and-agencies/dph/dph/environmental_health/eoha/pdf/cancerclustertechbrieffinalpdf.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Reports produce detection in this case',
          claim: paragraph(`
            On the Cape Fear, resident reports would have produced earlier
            detection.
          `),
          strength: 'unstudied',
          counterEvidence: [
            evidence({
              finding: paragraph(`
                GenX is odorless and tasteless at ng/L levels and produced no
                acute observable signal; no documented resident report preceded
                the 2012 detection. The first observable sign of a threat was a
                published paper, not an experience.
              `),
              grade: 'moderate',
              sources: [source('Strynar et al. 2015', 'https://pubs.acs.org/doi/10.1021/acs.est.5b01215')]
            })
          ]
        }),
        propLink({
          name: 'Detection to response to lower body burden',
          claim: paragraph(`
            Earlier detection produces earlier response, lower exposure, and
            lower measured body burden.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The post-2017 response function and serum decline kinetics are
                measured in the case itself.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Detection alone stalled inside agencies for five years; the
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
          name: 'Tonawanda bucket brigade',
          where: 'Tonawanda, NY', when: '2004-2013',
          authority: 'Resident sampling, then state study, then criminal enforcement',
          outcome: paragraph(`
            Residents' bucket sampling found benzene and formaldehyde; the state
            study confirmed the excess, and the company was convicted on 14 of 19
            charges with a $12.5 million penalty. Measured benzene fell 86
            percent at the industrial monitor and 68 percent at the residential
            monitor, and the estimated excess cancer risk at the industrial
            monitor fell from 75 in one million to 11 in one million.
          `),
          strength: 'strong',
          sources: [
            source('NY DEC fact sheet', 'https://extapps.dec.ny.gov/docs/air_pdf/tonfact1011.pdf'),
            source('DOJ', 'https://www.justice.gov/archives/opa/pr/tonawanda-coke-and-manager-sentenced-violating-clean-air-act-and-resource-conservation-and')
          ]
        }),
        comparable({
          name: 'Flint resident water sampling',
          where: 'Flint, MI', when: '2015',
          authority: 'Resident-collected samples with Virginia Tech',
          outcome: paragraph(`
            Residents returned 84 percent of 300 sampling kits (252 samples;
            269 homes in the published analysis); the resident dataset
            contradicted official sampling (90th percentile lead 25.2 ppb) and
            preceded the January 2016 federal emergency and more than $600
            million in relief.
          `),
          strength: 'strong',
          sources: [source('Flint Water Study', 'https://flintwaterstudy.org/information-for-flint-residents/results-for-citizen-testing-for-lead-300-kits/')]
        }),
        comparable({
          name: 'Woburn leukemia cluster',
          where: 'Woburn, MA', when: '1970s-1986',
          authority: 'Community observation plus academic partnership',
          outcome: paragraph(`
            A confirmed fourfold leukemia excess, a settlement, a Superfund
            cleanup, a state cleanup fund, and a state cancer registry.
          `),
          strength: 'moderate',
          sources: [source('Kennedy, Woburn files', 'https://dankennedy.net/woburn-files/a-civil-action-the-real-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Warn the public when discharge is approved',
      method: 'Statutory right-to-know',
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
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents', 'Filtration costs paid by water customers'],
      impactsConjectured: ['Externalities borne knowingly rather than unknowingly', 'Procedural fairness'],
      links: [
        propLink({
          name: 'Notice at approval produces public knowledge',
          claim: paragraph(`
            A notification duty attached to the approval produces public
            knowledge from day one.
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
              sources: [source('EPA Public Notification Rule', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The rule does not address unregulated contaminants, and no
                jurisdiction attaches public notice to a chemicals consent
                order. As enacted policy, unstudied.
              `),
              grade: 'moderate',
              sources: [source('EPA Public Notification Rule', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
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
                Drinking water violations raise bottled water sales 17 to 22
                percent; industrial plant openings cut housing values 11 percent
                within half a mile, evidence markets capitalize known risk.
              `),
              grade: 'strong',
              quote: 'an increase in bottled water sales of 22 percent from violations due to microorganisms and 17 percent from violations due to elements and chemicals',
              sources: [
                source('Graff Zivin et al. (NBER w16695)', 'https://www.nber.org/papers/w16695'),
                source('Currie et al., AER 2015', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Avoidance is costly and regressive, and salience effects
                concentrate within a mile of a plant while Cape Fear exposure ran
                100 miles downstream.
              `),
              grade: 'moderate',
              sources: [source('Currie et al., AER 2015', 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20121656')]
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
                Mailed water quality reports cut violations 30 to 44 percent and
                severe health violations 40 to 57 percent; Massachusetts firms
                cut on-site releases 92 percent under use reporting; 61 percent
                of surveyed German downstream users substituted substances after
                REACH listing.
              `),
              grade: 'strong',
              quote: 'reduced total violations by between 30% and 44%',
              sources: [
                source('Bennear and Olmstead 2008 (abstract)', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html'),
                source('TURI overview', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf')
              ]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Every measured disclosure success operates on listed, named
                chemicals; PFAS entered TRI only in December 2019, and the
                Fayetteville permit file named no chemical at all. Approval-time
                naming is the load-bearing step.
              `),
              grade: 'moderate',
              sources: [source('NC DEQ letter, Nov. 16, 2017', 'https://files.nc.gov/ncdeq/GenX/Letter%20November%2011-16-17.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Reduced discharge, lower exposure and cost',
          claim: paragraph(`
            Reduced discharge lowers cumulative exposure, body burden, and the
            filtration costs that fell on ratepayers.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                The serum declines after controls and the $82.8 million and
                $158.7 million filtration bills are the measured quantities on
                both sides of the counterfactual.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
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
            On-site air releases of TRI-reportable chemicals fell 52 percent,
            or 838 million pounds, from 2003 to 2013, and 21 percent since 2014
            with a 32 percent air decline; attribution to disclosure rests
            partly on literature that could not be fetched, and quantities are
            self-reported by facilities.
          `),
          strength: 'moderate',
          sources: [
            source('EPA (Teitelbaum)', 'https://www.epa.gov/sites/default/files/2015-09/documents/teitelbaum.pdf'),
            source('EPA TRI National Analysis', 'https://www.epa.gov/trinationalanalysis/releases-chemicals')
          ]
        }),
        comparable({
          name: 'Massachusetts Toxics Use Reduction Act',
          where: 'Massachusetts', when: '1990-2016',
          authority: 'Mandatory use reporting and planning',
          outcome: paragraph(`
            Toxic chemical use down 66 percent, byproduct down 72 percent,
            on-site releases down 92 percent, per preliminary state analysis.
          `),
          strength: 'moderate',
          sources: [source('TURI overview', 'https://www.turi.org/wp-content/uploads/2024/03/TURAOverview.June2018.pdf')]
        }),
        comparable({
          name: 'REACH candidate list substitution',
          where: 'European Union', when: '2011 survey',
          authority: 'Listing-triggered disclosure regime',
          outcome: paragraph(`
            61 percent of surveyed German downstream users replaced a listed
            substance with a less hazardous one.
          `),
          strength: 'moderate',
          sources: [source('Business Chemistry', 'https://www.businesschemistry.org/article/impacts-of-the-reach-candidate-list-of-substances-subject-to-authorisation-the-reputation-mechanism-and-empirical-results-on-behavioral-adaptations-of-german-supply-chain-actors/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'A law that forces public notice on detection',
      method: 'Right-to-know trigger',
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
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents'],
      impactsConjectured: ['Journalism removed as a single point of failure', 'Institutional trust'],
      links: [
        propLink({
          name: 'A trigger produces public knowledge',
          claim: paragraph(`
            A statutory trigger converts regulator receipt of a qualifying
            detection into public notice, in 2012 instead of 2017.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The UCMR3 data were public and one reporter performed the
                function once by browsing them; the 24-hour notification
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
                unregulated contaminants; as enacted policy the mechanism is
                untested, and the no-jurisdiction claim rests on searches, not a
                legal survey.
              `),
              grade: 'moderate',
              sources: [source('EPA Public Notification Rule', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
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
                June 14; health goal lowered 99.8 percent in five weeks;
                discharge cessation announced within two weeks.
              `),
              grade: 'strong',
              sources: [source('WRAL timeline', 'https://www.wral.com/story/timeline-tracking-the-route-of-genx-in-the-cape-fear-river/16869639/')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The 2017 response ran on press amplification; whether a statutory
                notice without a front page produces the same seven-day response
                is untested. Mailed notices alone changed utility behavior 30 to
                44 percent, a floor rather than the 2017 cliff.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008 (abstract)', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ]
        }),
        propLink({
          name: 'Earlier response, avoided exposure',
          claim: paragraph(`
            Earlier response avoids up to five years of exposure at mean 631
            ng/L and brings the measured serum declines forward.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Archived pre-disclosure serum gives the burden the window
                produced (PFMOAA median 42 ng/mL, the highest of 56 PFAS
                measured); post-control declines of 34 to 65 percent in six
                months show the gain per year of earlier cutoff.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Drinking water Public Notification Rule',
          where: 'United States', when: '1998-present',
          authority: 'Enacted, regulated contaminants only',
          outcome: paragraph(`
            The enacted template: 24-hour notice for the most serious
            violations, operational nationwide. Its regulated-only scope is the
            boundary this proposal erases.
          `),
          strength: 'moderate',
          sources: [source('EPA', 'https://www.epa.gov/dwreginfo/public-notification-rule')]
        }),
        comparable({
          name: 'Flint emergency response after resident data',
          where: 'Flint, MI', when: '2015-2016',
          authority: 'Public knowledge converting into action',
          outcome: paragraph(`
            Once resident sampling made contamination public, emergency
            declarations and more than $600 million in relief followed.
          `),
          strength: 'strong',
          sources: [source('Citizen Science: Theory and Practice', 'https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.154')]
        }),
        comparable({
          name: 'The June 2017 story itself',
          where: 'Wilmington, NC', when: '06/2017',
          authority: 'Journalism performing the missing function',
          outcome: paragraph(`
            Front-page story to state investigation in seven days, health goal
            cut 99.8 percent in five weeks. The proposal is this story, made
            statutory.
          `),
          strength: 'strong',
          sources: [source('Coastal Review', 'https://coastalreview.org/2022/06/vaughn-hagerty-the-reporter-who-broke-the-genx-story/')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Let the public choose experts to review the evidence',
      method: 'Independent science review',
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
          name: 'Independent panels produce findings that stick',
          claim: paragraph(`
            Independently appointed panels produce credible findings that carry
            consequence.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                The C8 Science Panel, jointly appointed under a court settlement,
                delivered probable-link findings for six conditions that carried
                automatic legal consequence for roughly 70,000 class members and
                became the evidentiary basis for later regulation.
              `),
              grade: 'moderate',
              quote: 'there is a probable link between exposure to C8 (also known as PFOA) and testicular cancer and kidney cancer',
              sources: [source('C8 Science Panel report', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The C8 panel was appointed by a court, not chosen by the
                community, and took seven years, a timescale mismatched to
                emergency response. No directly community-chosen analog with
                measured outcomes was identified.
              `),
              grade: 'moderate',
              sources: [source('C8 Science Panel', 'https://www.c8sciencepanel.org/')]
            })
          ]
        }),
        propLink({
          name: 'Independent verification builds trusted communication',
          claim: paragraph(`
            Independent verification improves trusted communication of risk.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                The report-back literature finds returning personal results
                strengthens relationships and supports trust in science; the
                documented effects are qualitative intentions and self-reports.
              `),
              grade: 'weak',
              quote: 'Personal exposure report-back is a powerful tool for increasing understanding of environmental health',
              sources: [source('Brody et al. 2014', 'https://link.springer.com/content/pdf/10.1186/1476-069X-13-40.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Trusted channels sustain engagement and outcomes',
          claim: paragraph(`
            A trusted channel sustains engagement, study participation, and
            calibrated protective behavior, feeding measured outcomes.
          `),
          strength: 'unstudied',
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
            Probable-link findings for six conditions, built on a companion
            health project that collected blood samples and questionnaires from
            about 69,000 exposed residents; DuPont precluded from denying
            causation for class members; DuPont-funded medical monitoring
            followed.
          `),
          strength: 'strong',
          sources: [source('C8 Science Panel report', 'http://www.c8sciencepanel.org/pdfs/Probable_Link_C8_Cancer_16April2012_v2.pdf')]
        }),
        comparable({
          name: 'Stillwater Good Neighbor Agreement',
          where: 'Montana', when: '2000-present',
          authority: 'Binding oversight, council-hired experts',
          outcome: paragraph(`
            Water monitoring more stringent than state and federal standards,
            company-funded; no arbitration or environmental litigation in 24
            years, as reported by the parties without independent evaluation.
          `),
          strength: 'moderate',
          sources: [source('WRI snapshot', 'https://www.wri.org/snapshots/community-benefits-snapshot-stillwater-good-neighbor-agreement')]
        }),
        comparable({
          name: 'Superfund Technical Assistance Grants',
          where: 'United States', when: '1988-present',
          authority: 'Federal funds for community-hired expertise',
          outcome: paragraph(`
            Recipients primarily hired technical advisors and kept residents
            informed; uptake reached 9 percent of eligible communities under a
            lengthy application process.
          `),
          strength: 'moderate',
          sources: [source('GAO T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Federal funding, enforcement designed locally',
      method: 'Federal funding, local design',
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
          name: 'Federal funding builds local capacity',
          claim: paragraph(`
            Federal funding builds standing local monitoring, legal, and
            technical capacity.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Superfund technical assistance grants funded community advisors;
                the NC legislature's $5 million to the Policy Collaboratory built
                a network sampling 190 surface water intakes and 158 municipal
                wells, though that funding was state, not federal.
              `),
              grade: 'moderate',
              sources: [source('GAO T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Grant uptake reached 9 percent of eligible communities under a
                lengthy, labor-intensive application process; Flint's funding was
                reactive, arriving after exposure.
              `),
              grade: 'moderate',
              sources: [source('GAO T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
            })
          ]
        }),
        propLink({
          name: 'Local capacity converts wins into standards',
          claim: paragraph(`
            Standing local capacity converts facility wins into statewide
            standards.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                Michigan adopted enforceable drinking water limits for seven
                PFAS compounds, effective August 3, 2020, following its own
                facility-level crises; Woburn's aftermath produced a state
                cleanup fund and cancer registry.
              `),
              grade: 'weak',
              sources: [source('Michigan EGLE', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The in-case record is the strongest counter-evidence: nine years
                of the project's most extensive participation produced
                remediation at one plant and no enforceable state standard, with
                the House bill stalling in the Senate. Private enforcement also
                crowds out public sanctions in the one large-n study.
              `),
              grade: 'moderate',
              sources: [source('Langpap and Shimshack 2010 (abstract)', 'https://ideas.repec.org/a/eee/jeeman/v59y2010i3p235-249.html')]
            })
          ]
        }),
        propLink({
          name: 'Standards protect the next community',
          claim: paragraph(`
            Once adopted, standards protect the next community before exposure,
            not after.
          `),
          strength: 'moderate',
          evidence: [
            evidence({
              finding: paragraph(`
                Standards operate mechanically once adopted, and even
                disclosure-only mandates cut violations 30 to 44 percent.
              `),
              grade: 'moderate',
              sources: [source('Bennear and Olmstead 2008 (abstract)', 'https://ideas.repec.org/a/eee/jeeman/v56y2008i2p117-130.html')]
            })
          ],
          counterEvidence: [
            evidence({
              finding: paragraph(`
                Adoption does not guarantee persistence: the federal GenX limit
                was proposed for rescission in May 2026 on procedural grounds.
              `),
              grade: 'moderate',
              sources: [source('Federal Register 2026', 'https://www.federalregister.gov/documents/2026/05/20/2026-10085/rescission-of-regulatory-determinations-and-removal-of-related-provisions-for-four-pfas-substances')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Michigan PFAS drinking water limits',
          where: 'Michigan', when: '2020',
          authority: 'Enforceable statewide rules',
          outcome: paragraph(`
            Seven compounds regulated statewide following facility-level
            crises: the generalization North Carolina did not achieve.
          `),
          strength: 'moderate',
          sources: [source('Michigan EGLE', 'https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/pfas-drinking-water-rules')]
        }),
        comparable({
          name: 'CDC REACH program',
          where: 'United States', when: '1999-present',
          authority: 'Federal money, local design, health delivery',
          outcome: paragraph(`
            Two decades of federal-local programs whose public record is
            dominated by reach counts; one fetched outcome finding on smoking
            declines. No instance of federally funded, locally designed
            enforcement with measured outcomes was found anywhere; that absence
            is itself the finding.
          `),
          strength: 'weak',
          sources: [source('CDC MMWR Supplement 2014', 'https://www.cdc.gov/mmwr/preview/mmwrhtml/su6301a2.htm')]
        }),
        comparable({
          name: 'Superfund Technical Assistance Grants',
          where: 'United States', when: '1988-present',
          authority: 'The existing federal-funds-for-local-capacity template',
          outcome: paragraph(`
            Measured uptake of 9 percent of eligible communities, with
            documented administrative barriers.
          `),
          strength: 'moderate',
          sources: [source('GAO T-RCED-93-1', 'https://www.gao.gov/products/t-rced-93-1')]
        })
      ],
      sources: []
    }),

    spineProposal({
      name: 'Put the public inside the approval review',
      method: 'Stakeholder participation in initial review',
      anchor: 'insufficient information and potential unreasonable risk',
      where: 'EPA Office of Chemical Safety and Pollution Prevention, with the review body seated from affected downstream communities',
      when: paragraph(`
        2009, at the consent order. From the 6/8 session: an FDA-like initial
        review that involves the public, so approval under uncertainty carries
        public assurances about how monitoring will happen and who verifies it.
        The 2009 order set a 99 percent capture requirement and no one checked
        for eight years; a review with public seats builds the constituency
        that checks. This proposal and the notice-at-approval proposal split
        the same moment: notice going out against the public coming in.
      `),
      description: paragraph(`
        Approval of a discharge, drug, or technology seats affected-community
        representatives inside the initial review, with standing to set the
        monitoring plan and demand its verification.
      `),
      banner: true,
      impactsMeasured: ['Exposure through drinking water', 'PFAS measured in the blood of residents'],
      impactsConjectured: ['Assurances under uncertainty the public can hold', 'A standing constituency for verification'],
      links: [
        propLink({
          name: 'Public seats produce monitoring commitments',
          claim: paragraph(`
            Public seats in the approval review produce monitoring commitments
            under uncertainty.
          `),
          strength: 'weak',
          evidence: [
            evidence({
              finding: paragraph(`
                In Finnish and Swedish nuclear waste siting, host municipalities
                held formal power at the approval decision with publicly funded
                independent review, and both programs reached consented,
                operating outcomes where non-consensual programs stalled.
                Analogical: a different industry and decision type.
              `),
              grade: 'weak',
              sources: [source('Bellona 2016', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
            })
          ]
        }),
        propLink({
          name: 'A public constituency gets the plan verified',
          claim: paragraph(`
            A public constituency for the monitoring plan gets it verified,
            closing the gap between an order's terms and anyone checking them.
          `),
          strength: 'unstudied',
          counterEvidence: [
            evidence({
              finding: paragraph(`
                The baseline without a constituency is measured in this case: the
                2009 order contained no scheduled verification, and EPA's first
                on-site inspection came June 28, 2017, three weeks after the
                newspaper story.
              `),
              grade: 'strong',
              sources: [source('EPA OIG 2020', 'https://www.epa.gov/sites/default/files/2020-05/documents/_epaoig_20200528-20-e-0177_0.pdf')]
            })
          ]
        }),
        propLink({
          name: 'Verified compliance shortens the exposure window',
          claim: paragraph(`
            Verified compliance shortens the exposure window and lowers the PFAS
            measured in residents' blood.
          `),
          strength: 'strong',
          evidence: [
            evidence({
              finding: paragraph(`
                Median serum fluoroethers declined 34 to 65 percent within six
                months of discharge controls, the measured gain per year of
                earlier enforcement.
              `),
              grade: 'strong',
              sources: [source('Kotlarz et al. 2020, EHP', 'https://ehp.niehs.nih.gov/doi/10.1289/EHP6837')]
            })
          ]
        })
      ],
      comparables: [
        comparable({
          name: 'Finnish and Swedish municipal nuclear waste veto',
          where: 'Finland and Sweden', when: '1980s-2020s',
          authority: 'Host municipalities held formal veto power, with funded independent review',
          outcome: paragraph(`
            Sweden financed municipal expertise through the Nuclear Waste Fund,
            so Osthammar's review staff were paid by the fund, enabling
            independent assessment rather than industry reliance, and the
            operator reported strong local support. Finland built the world's
            first operating deep repository. The source flags that community
            acceptance may reflect existing nuclear infrastructure rather than
            rigorous safety evaluation.
          `),
          strength: 'moderate',
          sources: [source('Bellona 2016', 'https://bellona.org/news/nuclear-issues/radioactive-waste-and-spent-nuclear-fuel/2016-08-21710')]
        })
      ],
      sources: []
    })
  ]
});
