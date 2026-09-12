# Outside evidence for "Community-appointed panels produce findings that carry weight."

Proposal: GenX/PFAS pr/3, "Affected residents appoint independent experts to verify health data" (js/spine/genx-pfas.js, around line 1666). Outcome: "Residents who chose the reviewers trust the risk information." In this block, "carry weight" means the reviewers' findings are used by the agency, accepted by the other parties, and not simply dismissed. The only current evidence is the C8 Science Panel, which sits in the GenX case's own timeline, so it cannot count.

Bottom line first: no randomized or natural experiment tests what happens when the affected community picks the experts. The best outside study is observational with a selection correction (Daley 2007). It shows that where community groups hired their own technical advisors, the agency's decisions moved. After that the support is two Alaska cases. The counter-evidence is about as strong, and it points at one clear failure mode: community expertise that has no formal role in the decision, or that does not meet agency standards, gets set aside.

## Supporting evidence

- Type: evidence
  Headline: At hazardous waste sites where local groups organized or hired their own technical advisors, the EPA chose more health-protective cleanups.
  Finding: The study compares cleanup remedies at Superfund sites with and without Community Advisory Groups and Technical Assistance Grants, and corrects for the fact that such groups do not form at random. It finds that "the Environmental Protection Agency is more likely to choose health protective clean-up approaches when CAGs and TAGs have formed at Superfund sites", even after controlling for site characteristics. Under the grants, the EPA gives "funding to community groups to contract their own technical advisor to interpret and explain technical reports, site conditions, and EPA's proposed cleanup proposals and decisions." So these are experts the community picked, and sites that had them saw agency decisions shift. The study cannot separate the effect of the advisors from the effect of the organized group, and it measures decisions, not whether residents trusted the findings.
  Quote: "the Environmental Protection Agency is more likely to choose health protective clean-up approaches when CAGs and TAGs have formed at Superfund sites"
  Quote fetched from: https://api.openalex.org/works/doi:10.1002/pam.20251 (abstract)
  Second quote (fact, what a TAG is): "It provides funding to community groups to contract their own technical advisor to interpret and explain technical reports, site conditions, and EPA's proposed cleanup proposals and decisions."
  Second quote fetched from: https://www.epa.gov/superfund/technical-assistance-grant-tag-program (the page uses a soft hyphen in "condi-tions")
  Source label: Daley 2007, Journal of Policy Analysis and Management
  URL: https://doi.org/10.1002/pam.20251
  Design: national observational comparison of Superfund sites with a treatment-effects regression that models which sites got citizen groups
  Grade: moderate. The selection model is an attempt at identification, but it rests on modeling assumptions, not assignment. Note that the map already grades this study "strong" on pr "Federal grants fund standing local monitoring" (around line 1971). The team should pick one grade and use it in both places.
  Can show: agency decisions differ where communities have their own organized voice and self-hired technical advisors. Cannot show: that the advisors, and not the organizing, drove the difference, or that residents trusted the results more.
  Verified: YES (abstract via OpenAlex; EPA page refetched)
  Map note: the existing Daley card on the federal-grants proposal says "residents did not choose the experts". The EPA's own description says grant recipients "contract their own technical advisor", so that caveat looks wrong as written.

- Type: evidence
  Headline: In Alaska, a risk study steered jointly by citizens, industry, and government settled a tanker safety dispute that dueling studies had stalled.
  Finding: A policy scientist compared two disputes over the marine oil trade in Alaska. Where each side produced its own technical analysis, "adversarial analysis is found to cause a stalemate in the policy process". Where the groups built one shared analysis, "collaborative analysis is found to facilitate the resolution of a policy dispute." The shared analysis was, as far as I can tell, the Prince William Sound Risk Assessment. The consultants who ran it report that the stakeholders "formed a steering committee to represent all the major stakeholders in the oil industry, in the government, in local industry, and among the local citizens", and that "various stakeholders made multimillion dollar investments to reduce the risk of further oil spills based on the results of the risk assessment." Citizens shared the steering role with industry and government, so this is joint selection, not selection by the community alone. It is also two cases.
  Quote: "In the second case, collaborative analysis is found to facilitate the resolution of a policy dispute."
  Quote fetched from: https://link.springer.com/article/10.1023/A:1004414605851 (publisher abstract; fetched through a cookie redirect, so the scripted verifier may not be able to reach it)
  Second quote: "In all, various stakeholders made multimillion dollar investments to reduce the risk of further oil spills based on the results of the risk assessment."
  Second quote fetched from: https://ideas.repec.org/a/inm/orinte/v32y2002i6p25-40.html (abstract of Merrick, van Dorp, Mazzuchi, Harrald, Spahn and Grabowski 2002, Interfaces, https://doi.org/10.1287/inte.32.6.25.6474)
  Source label: Busenberg 1999, Policy Sciences; Merrick et al. 2002, Interfaces
  URL: https://doi.org/10.1023/A:1004414605851
  Design: two-case comparison (Busenberg), plus a practitioner account by the consultant team (Merrick et al.)
  Grade: weak
  Can show: in one matched pair of disputes, a jointly steered analysis was acted on and dueling analyses were not. Cannot show: that community appointment in particular made the difference. The Merrick authors were the analysts themselves.
  Verified: YES by hand for both quotes (the scripted verifier returns NO ABSTRACT because no index carries this abstract; all four DOIs cited in this report resolve). The Busenberg quote is word for word from the Springer abstract (OpenAlex and Semantic Scholar carry no abstract). The Merrick quote is from the IDEAS abstract page. UNVERIFIED LINK: the Busenberg abstract does not name its two cases. That its collaborative case is the Prince William Sound Risk Assessment is my inference from the subject, the date, and the secondary literature. Confirm it in the full text before joining the two sources on one card; otherwise use Busenberg alone.
  Lead not verified: a web search summary says the National Research Council's 1998 review of this study raised concerns about "a loss of independence on the part of the contractor analysts" and poor representation of stakeholders left off the steering committee. The NAP pages are image-only and I could not fetch that text, so I have not used it. If someone can open the PDF (doi:10.17226/6126), it may be a strong counter card.

## Counter-evidence

- Type: counterEvidence
  Headline: In a review of environmental stakeholder processes, participants with strong technical help sometimes changed little because the process gave them no real say.
  Finding: Researchers coded 239 published case studies of stakeholder processes. Most had adequate technical resources, but the author reports that "in a number of cases, highly trained participants or those with access to high quality technical resources did not have much of an impact on substantive outcomes because the design of the process gave them little ability to make or contribute to decisions." Across cases, the process-quality score and the outcome-quality score were only weakly correlated (0.22). For this proposal, that means reviewers whose role is limited to verification and translation, while the state keeps authority, may be well informed and still carry little weight.
  Quote: "In a number of cases, highly trained participants or those with access to high quality technical resources did not have much of an impact on substantive outcomes because the design of the process gave them little ability to make or contribute to decisions."
  Quote fetched from: http://www.rff.org/files/sharepoint/WorkImages/Download/RFF-DP-00-56.pdf
  Source label: Beierle 2000, Resources for the Future Discussion Paper 00-56 (published as Beierle 2002, Risk Analysis)
  URL: https://doi.org/10.1111/0272-4332.00065
  Design: case survey, systematic coding of 239 published case studies
  Grade: moderate
  Can show: technical capacity without decision authority can fail to change outcomes. Cannot show: how often, or anything about panels the community appointed. The coded cases were written by many different authors.
  Verified: YES (quote found in the RFF PDF; I did not check whether the sentence survives in the paywalled journal version, so cite the discussion paper for the quote)

- Type: counterEvidence
  Headline: Regulators dismissed air samples that residents took near refineries because the samples did not fit official standards.
  Finding: In a study of community air-toxics monitoring with "buckets", the author finds that standards cut both ways. They give bucket data some legitimacy with experts, but "standards simultaneously serve a boundary-policing function, allowing experts to dismiss bucket data as irrelevant to the central project of air quality assessment." Community-generated measurements carried weight only where they matched the methods regulators already used. That bears directly on reviewers who split samples and publish their own results.
  Quote: "standards simultaneously serve a boundary-policing function, allowing experts to dismiss bucket data as irrelevant to the central project of air quality assessment"
  Quote fetched from: https://api.openalex.org/works/doi:10.1177/0162243909337121 (abstract)
  Source label: Ottinger 2010, Science, Technology, and Human Values
  URL: https://doi.org/10.1177/0162243909337121
  Design: qualitative case study (ethnography of one community monitoring effort)
  Grade: weak
  Can show: a clear route by which community-produced findings get discounted. Cannot show: how common this is. The data came from residents themselves, not appointed experts. The Louisiana Bucket Brigade already appears as a comparator in js/chains/genx-pfas.js.
  Verified: YES (abstract)

- Type: counterEvidence
  Headline: A participatory water monitoring committee at a Peruvian mine did not produce a shared view of the mine's impacts, and it narrowed what residents could claim.
  Finding: Studying a participatory environmental monitoring committee in Ancash, Peru, the author finds that "the work of the committee has not led to a cohesive environmental knowledge community". By leaning on an expert framework for judging water quality, "the committee has helped to demarcate the boundaries of credible environmental knowledge in ways that tend to constrain the capacity of area residents to hold the mining firm accountable for observed impacts on downstream water resources." A participatory verification body can end up weakening the residents it was meant to serve.
  Quote: "Through its privileging of an expert framework for knowing and judging water quality, the committee has helped to demarcate the boundaries of credible environmental knowledge in ways that tend to constrain the capacity of area residents to hold the mining firm accountable for observed impacts on downstream water resources."
  Quote fetched from: https://api.openalex.org/works/doi:10.1068/a45631 (abstract)
  Source label: Himley 2014, Environment and Planning A
  URL: https://doi.org/10.1068/a45631
  Design: qualitative case study of one committee
  Grade: weak
  Can show: a participatory monitoring body can fail to settle a dispute and can shrink residents' room to contest findings. Cannot show: how the committee's experts were chosen. I could not confirm from the abstract that the community appointed them, so describe it only as "participatory".
  Verified: YES (abstract)

## Verifier runs

verify-quotes.mjs: Daley MATCH (punctuation differs, the hyphen in "clean-up"), Ottinger MATCH, Himley MATCH, Busenberg NO ABSTRACT (checked by hand against the Springer page), Beierle PDF. verify-pdfs.py: Beierle MATCH in the RFF PDF.

## Verdict

The claim now has some real outside support, but it is thin. Only one supporting study is large-N with a design aimed at cause (Daley 2007). It measures agency decisions, not whether findings were accepted or trusted, and it cannot separate the self-hired advisors from the organized group. The Alaska evidence is two cases, and the citizens shared selection with industry and government, which is the same joint-selection structure as the C8 panel. No study anywhere randomizes or naturally varies who picks the experts and then measures whether the findings are accepted.

The counter-evidence is of similar quality and more specific. Beierle's 239 cases show that technical capacity without decision authority often changed little. Ottinger and Himley show community-linked findings being set aside when they do not fit agency standards. On the evidence, the honest wording would be closer to "Findings from experts the community hires can shift agency decisions, but they are often set aside when the process gives them no formal role". I have not reworded the claim; this is for the team to decide. If the claim stays as worded, grade the overall support weak to moderate.

## Searches run and what they found

- Survey or vignette experiments on who selects the experts, and the resulting trust or acceptance ("survey experiment who selects experts", "advisory committee appointed by stakeholders", "vignette review panel community representatives versus industry", "credibility of citizen-collected data experiment"). Nothing tests the selection of experts by the affected community. Nearest hits:
  - Terwel, Harinck, Ellemers and Daamen 2010, J. Experimental Psychology: Applied (https://doi.org/10.1037/a0019977). Three experiments in which giving interest groups equal voice raised trust in the decision maker and acceptance of the decision. The causal design is strong, but it is about voice in decisions, not expert panels. Not proposed, because it would stretch the claim.
  - Beyers and Arras 2021 survey experiment on open consultations in Belgium. About consultations, not experts.
- Cultural cognition. Kahan, Braman, Cohen, Gastil and Slovic 2010 (https://doi.org/10.1007/s10979-009-9201-0) and Kahan, Jenkins-Smith and Braman 2011 (https://doi.org/10.1080/13669877.2010.511246) are experiments showing that people judge an expert's credibility by whether the expert's position fits their values. This is a plausible counter: a panel seen as the community's may be discounted by everyone else. The abstracts do not state that result plainly, and the PDF text extracts with broken spacing, so I could not produce a clean verified quote. Held back.
- Joint fact-finding. The literature is practitioner reflection and case description, with no comparative outcome data:
  - Karl, Susskind and Wallace 2007, Environment (https://doi.org/10.3200/ENVT.49.1.20-34)
  - McCreary, Gamman and Brooks 2001, Mediation Quarterly (https://doi.org/10.1002/crq.3890180403). Its abstract is a description of practice.
  - Adler's user guide on mediate.com
  - CBI and MIT Science Impact pages
  None meet the standard.
- Beierle 2002 case survey (https://doi.org/10.1111/0272-4332.00065). Its abstract is about decision quality, and finds that stakeholder processes improved decisions and had adequate technical resources. That does not speak to "carry weight". The body of the RFF version yielded the counter card above.
- National Research Council 2008, Dietz and Stern (doi:10.17226/12434). The search summary gives the line "When done correctly, public participation improves the quality of federal agencies' decisions about the environment". The NAP OpenBook pages are image-only, and the NAE and GlobalChange pages did not carry the text, so I could not verify it. It is also about participation in general, not panels. Not used.
- Cash et al. 2003, PNAS (https://doi.org/10.1073/pnas.1231332100). A multi-case study. Its abstract says efforts are more effective when they enhance "salience, credibility, and legitimacy". That is too general for this claim. Not used.
- Emerson, Orr, Keyes and McKnight 2009, Conflict Resolution Quarterly. A 52-case evaluation of environmental conflict resolution. Its abstract reports engagement of parties as the key driver and says nothing about jointly developed information. Full text is paywalled. Not used.
- Leach and Sabatier 2005, APSR. Trust among stakeholders in watershed partnerships, not about panel findings. Not used.
- Minkler et al. 2008, Health Education and Behavior. A four-site descriptive study of community-based participatory research partnerships and policy. Weak fit. Not used.
- Superfund advisory groups and grants. Found Daley 2007 (used). The GAO T-RCED-93-1 audit is already in the map.
- Hanford, Rocky Flats, Fernald dose reconstruction. The Hanford Technical Steering Panel included state, tribal, and public appointees and was created to avoid a credibility problem, per official records. I found no peer-reviewed evaluation of whether its findings were accepted. Not used.
- Health Effects Institute. Found no peer-reviewed evaluation of its credibility. It is also jointly funded by the EPA and industry, not community-appointed. Not used.
- Participatory monitoring in mining (Peru, UNDP guides). Practitioner guidance plus Himley 2014 (used).
- Citizen science in regulation. Kinchy, Jalbert and Lyons 2014 found regulators have reservations about volunteer fracking water data. It is a book chapter in Political Power and Social Theory. Could stand in for Ottinger if the bucket brigade overlap is a concern.
- Prince William Sound. Busenberg 1999 and Merrick et al. 2002 (used). The NRC 1998 review (doi:10.17226/6126) is a promising counter, but I could not fetch its text.
- Love Canal and Woburn were not pursued (Woburn is already used elsewhere in the map).
