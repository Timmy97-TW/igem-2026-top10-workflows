# Sources behind the 2027 project-idea pages

Everything on `#x-ideas`, `#x-control`, `#x-shelf`, `#x-assay`, `#x-reader` and `#x-seed` is either
(a) a figure from a cited primary source, (b) a count we made from an official iGEM API, or (c) a
**target** we propose, labelled as a target. This file is the audit trail for (a) and (b).

Collected 23 November 2026.

## iGEM rules and structure

| Fact | Source |
| --- | --- |
| **2027 Grand Jamboree: 18–21 October 2027.** Venue not announced; the 2027 competition record is `status: pre-release` with every phase date `null` and no deliverables. | `https://api.igem.org/v1/events` (verified directly: the 2027 record returns `startDate 2027-10-18`, `endDate 2027-10-21`), `https://api.igem.org/v1/competitions` |
| 2026 Grand Jamboree 13–16 November 2026; 2025 28–31 October; 2024 23–26 October; 2023 2–5 November. So 2027 sits **three to four weeks earlier in the year than 2026**. | `https://api.igem.org/v1/events` |
| 2026 wiki freeze **21 October 2026, 15:00 UTC**, shared by Wiki, Judging Form, Registry Contributions, Attributions Form and Software (all flagged `freeze: true`). Gap from freeze to Jamboree start: **23 days**. | `https://api.igem.org/v1/competitions/58a7e73a-1e25-457f-9f59-36c47b3f652a/deliverables`, `https://competition.igem.org/about/calendar` |
| **High School teams must use only the current iGEM White List**, from the 2025 season onwards, and "all team activities must strictly align with the items included in the White List". | `https://competition.igem.org/high-school` |
| **The Safety Check-in Form and the Animal Use Safety Form are not offered to High School teams**: both carry `audience.section.notIn: ["high-school"]` in the deliverables API. The Project Safety Form is required of everybody. | `https://api.igem.org/v1/competitions/58a7e73a-1e25-457f-9f59-36c47b3f652a/deliverables` |
| A Check-In is required before "bringing any product of synthetic biology outside of the lab", before using anything not on the White List, and before acquiring any Red-Flagged Registry part. | `https://responsibility.igem.org/safety-policies`, `https://responsibility.igem.org/guidance/working-safely` |
| Sharing biological resources with another team is a **Transfer** under iGEM's safety framework. DNA by mail is "governed by national and international laws"; many carriers require UN 3373 / IATA Packing Instruction 650 even domestically; disguising a shipment is never acceptable. | `https://responsibility.igem.org/guidance/working-safely` |
| **2026 Gold medal = "Demonstrate excellence in your work toward three Special Awards of your choice. At least one must come from the General Bio Engineering category and at least one from the Specializations category."** There is no 2026 gold criterion about collaborating with another team or validating another team's part. | `https://competition.igem.org/judging/awards/medals` |
| **High school is always evaluated as its own section for every Special Award**; undergraduate and overgraduate are separated only if each has at least 10 teams. Up to three winners per award, one per section. | `https://competition.igem.org/judging/awards/special` |
| General Bio Engineering awards: Best Measurement, Best Model, Best New Basic Part, Best New Composite Part, Best New Improved Part, Best Part Collection. Specializations: Best Education, Best Entrepreneurship, Best Hardware, Inclusivity, Best Integrated Human Practices, **Best Alternative Platform**, Safety and Security, Best Software, Best Sustainable Development Impact. Plus Best Presentation and Best Wiki for all teams. | `https://competition.igem.org/judging/awards/special` |
| Best Measurement criterion: "Measurements are how you show that a system, physical or computational, behaves as expected, that data are reliable, and that a result actually matters." Ballot asks whether the measurement could be reproduced by other teams and whether the team validated and calibrated the process. | `https://competition.igem.org/judging/awards/special` |
| Best Part Collection criterion: the collection must be registered and must "document the ensemble as a whole"; the collection page "explains how the parts were designed to work together… and how other teams can reuse the collection". | `https://competition.igem.org/judging/awards/special` |
| Best New Improved Part explicitly asks whether "the old part was used as a control in the testing of the new part". | `https://competition.igem.org/judging/awards/special` |
| **The last official InterLab study was the 7th, in 2023**; the 2022 study is archived and no 2024–2026 InterLab exists. Calibrants named in the 2023 materials list: fluorescein sodium salt (green), sulforhodamine-101 (red), Cascade Blue (blue), NanoCym 950 nm monodisperse silica nanoparticles (OD/cell count). | `https://technology.igem.org/collaborations/interlabs`; protocol PDF at `https://static.igem.org/websites/technology/interlab/2023/protocols/interlab-2023-calibration-protocol-v3n.pdf` |
| InterLab's published conclusion on cell counting: "serial dilution of silica microspheres is by far the best of these three protocols under the conditions tested". | *Commun Biol* 2020;3:512 |
| **Since 2019 teams no longer send DNA samples to the Registry** — it is a documentation and sequence database. Parts are obtained by synthesis or from the annual Distribution Kit (two 384-well plates, sequencing-QC and transformation tested). | `https://technology.igem.org/technologies/synthesis`, `https://technology.igem.org/distribution-kit` |
| The 2026 Distribution Kit includes the Open Reporter Collection (chromoproteins, fluorescent proteins, luciferases), the Open Enzymes Collections, an *E. coli* Protein Expression Toolkit of over 100 Golden Gate parts, the JUMP vector collection, Open Yeast, Plant (PhytoBricks) and a Mammalian collection from Asimov. | `https://technology.igem.org/distribution-kit` |
| **Registry API**: `https://api.registry.igem.org/v1/parts` works without a key and returns `usageCount` per part; 97,892 published parts. `parts.igem.org` and `old.igem.org` now return 403 to automated clients. `sort=usage` works but `order` is ignored, so the most-used parts are on the **last** page. | `https://api.registry.igem.org/v1/parts?sort=usage&pageSize=100&page=979` |
| Most-used parts by `usageCount`: BBa_B0034 RBS 9,937 · BBa_B0012 TE from coliphage T7 9,515 · BBa_B0010 T1 terminator 9,236 · BBa_B0015 double terminator 5,161 · BBa_E0040 GFP 2,555 · BBa_R0040 TetR-repressible promoter 1,863 · BBa_E1010 mRFP 1,464 · BBa_J23100 1,370 · BBa_C0062 luxR 1,027 · BBa_C0040 TetR 829 · BBa_C0012 lacI 654 · BBa_C0051 cI 646. | Registry API, as above |
| Registry part pages now carry a biosafety screening status with a date and an explicit licence (BBa_R0040: "Cleared · April 23, 2026", CC-BY-4.0). | `https://registry.igem.org/parts/bba-r0040` |
| Villages live in 2026 (15): Agriculture, Art & Design, Biomanufacturing, Bioremediation, Climate Crisis, Conservation, Diagnostics, Fashion & Cosmetics, Food & Nutrition, Foundational Advance, Infectious Diseases, Oncology, Software & AI, Space, Therapeutics. A **Measurement village existed but last ran in 2017**; a High School village last ran in 2023. No 2027 village list is published. | `https://api.igem.org/v1/villages` |

## Our own counts, reused rather than re-derived

Taken from [Three tiers](../data/x-tiers.js) and [Side by side — High School](../data/hs-compare.js), where they are sourced in full:
203 Undergraduate, 152 High School and 75 Overgraduate teams in 2026, so ten places is 4.9 % / 6.6 % / 13.3 %;
Foundational Advance held **2 of 152** High School teams; Diagnostics converted **3 of 13** in High School and
**0 of 22** across the two senior sections; Bioremediation was the second-largest High School village at 21 teams
with no places; and **2 of 10** High School Top 10 teams had a number produced outside their own team.

## Caveats carried onto the pages

* `https://competition.igem.org/high-school` was still showing 2025-season text on 23 Nov 2026. Its White List
  constraint is independently corroborated by the deliverables API; treat the rest of that page as 2025-era and
  re-check it before committing to a 2027 plan.
* No 2027 deadline of any kind is published. Every schedule on the idea pages is counted in **weeks before the
  wiki freeze**, and the one calendar inference we make is labelled as ours.

## Stanford-University 2026 (KelePatch) — the mechanism behind idea 4

Read from `gitlab.igem.org/2026/stanford-university` (a no-build static React site whose page copy lives in
`src/content/<page>.js`); cross-checked against [our own page for the team](../data/t-stanford.js).

* **Mechanism.** A synthetic mRNA carries **two in-frame UAG stop codons**, each embedded in a sequence
  complementary to a different keloid-enriched endogenous transcript. The cell's **own ADAR1** edits a stop
  codon away only where that transcript is present, so the payload is translated only in a cell containing
  both marker transcripts. **The logic is enforced at translation, not transcription.**
* **The design principle we borrow:** do not build a reader protein — form a duplex with a transcript the
  target cell already has, and let an enzyme the host already expresses decide whether the output is made.
* **The number idea 4 is built on:** against their flow output, sensor partition-function ΔG reached
  **Spearman ρ = 0.62–0.63**, while GC content — one of the published design criteria — sat near **−0.2**;
  regression on the best predictor gave only **Q² = 0.20** across a **25-sensor** library. All 19 predictors
  were computed with ViennaRNA 2.7.2 (RNAfold, RNAplfold, RNAcofold).
* **Their own two stated limits:** the analysis covers RNA **secondary** structure only, with no 3-D
  modelling; and the sensors analysed express **reporters, not therapeutic payloads**, which would add
  sequence and change the folding.
* Their wiki has **no Software and no Hardware page** in the 14-page set, although RADAR-Scout is documented
  on the Model page and published at radar-scout.vercel.app.

## Aarhus-University 2026 (RiboLogic) — the mechanism behind idea 5

Read from `gitlab.igem.org/2026/aarhus-university` (Vite/React, prose in `src/contents/*.tsx`). Aarhus is
**not** on this site elsewhere, because they are not in a 2026 Top 10.

* **Mechanism.** RL = RiboLogic; RL1/RL2/RL3 are generations. RL2 is a linear RNA scaffold carrying loops: an
  miRNA-A toehold, an miRNA-B toehold, an invader (output) toehold, a masking region sequestering the **RBS**,
  and the gene downstream. A separate **key strand** is annealed across both input sites. Each miRNA displaces
  only its own share of the key; the key leaves only when **both** have bound; the freed key's invader domain
  then peels the mask off the RBS and translation starts. Their own rule: *"Logic is built into the cascade
  because each displacement step after the first can only occur if the previous one did."*
* **Chassis:** none. *"Cell-free in our case refers to the chassis, not the destination."* Bacteria appeared
  only as a way to make DNA templates. Prototyping was designed around in vitro transcription plus a cell-free
  translation kit (PURExpress) that **was never run**.
* **15 registered parts**: six mature-miRNA DNA sequences (hsa-miR-182-5p, -19b-3p, -130b-5p, -301b-5p,
  -196b-5p, -1290) and nine RiboLogic components (four two-strand systems plus one single-strand RL3).
  Logic-domain parts are 59–173 bp; the built construct is ~1000 nt because the CDS is added by the user.
* **What was measured.** In silico only: NUPACK at 37 °C, RNA06, 1.0 M Na. Four RL2 designs fold and bind;
  **3 of 4** expose the translation initiation site; RL2-04 fails because the released key prefers to fold on
  itself. At the bench, a 30 kDa cut-off filter assay was run twice and **did not work** — their words:
  *"our assumption that the miRNAs would pass through the filters does not hold, and nothing can be concluded
  from the experiment"*, *"From this test we learned about our method rather than our construct"*, and
  *"The binding question remains open and needs an assay that reports association directly."*
* **The opening idea 5 is built on, in their own words:** *"we chose not to model systems containing only a
  subset of the target miRNAs"* — so the single-input and zero-input states were never modelled, let alone
  measured, and they expect *"it is likely that the RL2 system has some leakage."* **The specificity of the
  AND gate, which is the entire purpose of the design, has no supporting data of any kind.**
* **Their design argument, quoted:** *"many delivery systems rely only on a single cellular biomarker to
  detect disease, which is simply not optimal for specificity"*; *"Most current systems rely on a single miRNA
  as input for activation and therefore lack the ability to utilize the advantages of combinatorial
  computation."*
* **Free tooling a school can use today:** RL Designer (`rl-designer.online`, no installation, miRBase and
  HMDD built in), AROS (open-source Rust inverse-folding tool), NUPACK and ViennaRNA. Aarhus completed the
  build and test phases of two generations entirely in silico when the bench route failed.
* **Why a school cannot simply repeat their bench work:** denaturing urea PAGE hand-cast at 25 W, FPLC
  size-exclusion purification on an ÄKTA, SYBR Gold on an Amersham Typhoon laser scanner, a refrigerated
  centrifuge at 14,000 × g, RNase-free facilities, and PURExpress at tens of euros per reaction.
* One unresolved inconsistency in their own source, flagged by a developer comment in `model.tsx`: whether the
  filter assay used RL2-01 or RL2-02. Treat the identity of that construct as unresolved.

## The High School White List, in the detail that changes designs

From **https://responsibility.igem.org/guidance/white-list** — three tables, Organisms / Parts / Activities.
Organisms and Parts are allow-lists ("Any organism not explicitly white listed" → Check In Required);
Activities is a deny-list ("All activity, except those explicitly listed as requiring a check in").

* **The sentence that matters most**, quoted from the page's own 3rd-Party Collaborators box: a team that
  cannot get approval "either due to insufficient information in your Check-In… the Safety and Security
  Committee declining to approve… or **by virtue of being a high school team (and therefore unable to seek
  approval via Check-In Forms)**, you should not engage collaborators to work beyond the White List." So the
  obvious workaround — have a university lab or a vendor do the beyond-list step — is closed in policy text.
  Note the scope: it closes beyond-list **work**, not having an outside lab **measure** a white-listed sample.
* *E. coli* **K-12** is named explicitly as a Risk Group 1 example. No other *E. coli* strain is named
  anywhere, so BL21(DE3) (a B strain) and HT115(DE3) (a K-12 derivative) are covered only by the category
  rule — not by an iGEM ruling. Treat specific strains as a question for safety@igem.org.
* *S. cerevisiae* and *Komagataella (Pichia) pastoris* were added **15 April 2025**, with a spore-formation
  mitigation plan required. Phages T2, T4, T7, M13, P1, ΦX174 and λ are listed; so are *C. elegans*,
  *Arabidopsis* and *Nicotiana* spp.
* **Certified human and primate cell lines are on the list** ("such as MCF-7; consult your vendor about
  certification!"), but **all primary isolated cells require a Check-In** and are therefore closed to High
  School teams — which is exactly what Stanford's primary-fibroblast work needs.
* **The rule that reshaped idea 5:** white-listed are "CRISPR guide RNAs, microRNAs, small interfering RNAs,
  and short hairpin RNAs **that do not target human genes**"; the same list with "**that target human genes**"
  requires a Check-In. A human miRNA used as a human miRNA is therefore closed to a High School team, and a
  non-human family — *C. elegans* let-7, for instance — is not.
* Human protein-coding genes are white-listed by default ("Proteins or protein-coding genes from animals,
  plants, or Risk Group 1 / Risk Group 2 microorganisms, EXCEPT those in the list of dangerous categories"),
  the excluded categories being virulence factors, immune-evasion and immune-regulating factors (cytokines,
  interferons), toxins, and parts likely to increase horizontal gene transfer.
* Cell-free expression kits are not mentioned anywhere on the list. The page's own definition puts them
  outside the organism rule: "a 'whole organism' is an entire cell or multicellular organism, whether alive or
  dead… **Individual nucleic acids and proteins are also parts.**"
* Activities closed to High School teams include experiments on human samples "including from members of the
  team", work with animals, several antimicrobial-resistance categories, gene drives, and **"Bringing a product
  of a genetically modified organism outside the lab"**.
* Stability guarantee, quoted: "we might add things to the White List, but **we will not remove things from the
  White List until after the Jamboree each year**."

## Release beyond containment — what may and may not leave the lab

From **https://responsibility.igem.org/safety-policies/release-beyond-containment**:

* Scope, quoted: "You must submit a Check In Form BEFORE bringing **any product of synthetic biology** outside
  of the lab for any purpose… Products of synthetic biology include, but are not limited to, biosynthetic
  fragrances and dyes, **cell-free biosensors**, and **purified proteins and biomaterials**."
* Counted as release: "Taking the products of your GMOs outside of the lab without advance permission…
  'Products' includes any chemicals that your GMOs might synthesize, **even if you purify them**."
* **Not** release: "**Transporting cells or DNA between two labs, in proper packaging, for research or teaching
  purposes**"; releasing software or hardware; a field experiment with a wild-type organism; disposing of
  sterilised waste.
* There is a documented route that does not need the Check-In form: "You may be able to get permission to test
  something produced by an engineered organism, **if you can demonstrate that the product has no modified
  organisms on or in it. Please contact safety@igem.org**." Whether the Safety and Security Committee grants
  this to a High School team is **not addressed anywhere in published text** — treat it as an open question to
  settle by email in January, not as a plan.
* The one out-of-lab channel that is documented as open to High School teams is the **Expo Booth Safety
  Proposal**: unlike the Safety Check-in Form, its 2026 audience filter excludes only remote attendance, not
  the high-school section.

## Wiki freeze dates, and what they imply for 2027

| Season | Wiki freeze | Jamboree start | Gap |
| --- | --- | --- | --- |
| 2023 | 12 Oct 2023, 16:00 UTC | 2 Nov 2023 | 21 days |
| 2024 | 2 Oct 2024, 14:00 UTC | 23 Oct 2024 | 21 days |
| 2025 | 9 Oct 2025, 15:00 UTC | 28 Oct 2025 | 19 days |
| 2026 | 21 Oct 2026, 15:00 UTC | 13 Nov 2026 | 23 days |
| 2027 | **not published** | **18 Oct 2027** | — |

Freeze dates from each season's `deliverables` endpoint (2023 from iGEM's own blog post of 13 Sep 2023);
Jamboree dates from `api.igem.org/v1/events`. Mean gap 21 days over four seasons, range 19–23, and **the
freeze has been a Wednesday four years running**. 18 Oct 2027 is a Monday, so the Wednesday 19 days before it
is **29 September 2027** — our single best estimate, and an inference from n = 4, not an iGEM announcement.
The freeze is a bundle: in 2026 five deliverables shared the timestamp (Wiki, Judging Form, Registry
Contributions, Attributions Form, Software).

## Free DNA synthesis, 2026 season

IDT "up to 40 kb of FREE IDT gene fragments" (2026 registration closed 21 Sep 2026) · Twist Bioscience 20 kb
of insert sequence, vector free and not counted, with a green/yellow/red feasibility score on length, GC
content and homology · GenScript 10 free FLASH Gene orders, **3,000 bp per construct maximum**, longer
sequences not eligible. All from the sponsor pages at `competition.igem.org/sponsorships/…`. Claim deadlines
are sponsor-specific and early in the season.

## Negative controls that already exist in the Registry

Searched `api.registry.igem.org/v1/parts?search=…`: "negative control" returns 195 matches, "scrambled" 43,
"catalytically dead" 18, "non-fluorescent" 15, "null mutant" 7, "InterLab negative control" **0**.

So negative-control parts exist — and **essentially every one has a usageCount of 0 to 3**. They are made once
for one project and never reused. Real examples: `Dead-IsPETase` (0 uses), `Canonical dCas12m` (0),
`dCas12m (RFC10 compatible)` (1), `dTnpB Part with Inducible Ptac promoter` (2), `pBbB8k-TnpB D209A` (0),
`pBbB8k-dTnpB D190A` (0), `Scrambled shRNA (Functional Unit)` (0), and a matched κB-site pair
(BBa_26XLNI3R, 10× sites, against BBa_26IXE2LC, 0× sites).

Against that, the most-used protein-coding parts and their usage counts: **BBa_E0040 GFP 2,555 ·
BBa_E1010 mRFP 1,464 · BBa_C0062 luxR 1,027 · BBa_C0040 TetR 829 · BBa_C0012 lacI 654 · BBa_C0051 cI 646**
(and BBa_B0034 RBS at 9,937, BBa_R0040 TetR-repressible promoter at 1,863). **We searched for an inactive
counterpart to each and found none**: "dead TetR" returns 0 results, "non-fluorescent GFP" returns one
unrelated chromoprotein, "inactive lacI" returns one unrelated kill switch. That gap is idea 1.

One oddity worth knowing if you quote Registry titles: the live data is messy. BBa_E0040's title has a leading
space, an unclosed parenthesis and misspells *Aequorea* as "Aequeora"; BBa_E1010's contains a literal
`**highly**`; BBa_C0062's has a double space. Quote them as they are or clean them deliberately.

## Prior art inside iGEM — a crawl, not an impression

Method: every registered team for 2022–2026 enumerated from `api.igem.org/v1/teams?year=<y>` (357/403/415/421/463
teams), each team's wiki resolved through the per-team wiki endpoint (2,012 of 2,059 have one registered), then
up to 14 pages crawled per team — **21,934 pages** — against 25 keyword families, with a deeper second pass over
the 591 teams that mention lyophilisation, freeze-drying or shelf life. Awards came from
`/v1/competitions/<uuid>/awards` and `/v1/teams/<id>/awards`; parts from `api.registry.igem.org/v1/parts?search=`,
which does reach pre-2022 parts.

**Not searchable, and it matters:** pre-2022 team wikis (`<year>.igem.org/Team:…`) return HTTP 403 to automated
clients, so there is no full-text search of 2008–2021. Part-level evidence is all-years. A pre-2022 project could
exist that this crawl cannot see.

### Idea 1 — negative-control collection
* No team 2022–2026 made a controls collection its project. **None of the 15 Best Part Collection winners
  2022–2026 is one, and none of the 510 collections registered in 2025–2026 is one.**
* Nearest miss, and also a High School team: **PSI Korea 2026** submitted a seven-allele *tnaA* activity ladder
  with measured relative output — 100 %, 92, 84, 45, 24, 7 and **3 % for the K270A variant they call
  "catalytically dead"** and "the expected loss-of-function control" — and compared their values against the
  literature, noting two rankings disagreed. No assay floor, no limit of blank, no contamination test.
* **XMU-China 2026** submitted three dTnpB active-site point mutants *explicitly as negative controls*
  (BBa_26JQ3AOM D190A, BBa_26D8MDO2 D376A, BBa_26D2I5SD E290A) with the protocol but no residual-activity numbers.
* **ZZU 2026** estimated a detection limit from **20 full-process no-target controls** — the nearest thing in
  iGEM to a measured limit of blank. The standard limit-of-blank reference is cited by five 2025–2026 teams and
  operationalised by one.
* In iGEM, "catalytically dead" almost always means a **dCas tool**, not a control: of 74 such hits the
  overwhelming majority are dCas9/12/13 variants. Registry keyword counts: negative control 195, catalytically
  inactive 56, deactivated 91, scrambled 43, catalytically dead 18, null mutant 7, dead mutant 4.
* The InterLab negative controls are **BBa_R0040** (2016–2021; a promoter with no CDS, which is why a 54 bp part
  sits at 1,863 uses) and **BBa_J428100 "Interlab_NegC"** (2022). No InterLab control parts exist after 2022.
* Outside iGEM: a public plasmid repository returns ~1,900 hits each for "catalytically inactive" and
  "catalytically dead", overwhelmingly dCas deposits with **no activity data**; none of its curated collections
  is a dead-enzyme panel. Deep mutational scanning has measured 160,000 variants across four active-site
  residues but reports fitness scores and distributes a dataset, not plasmids.

### Idea 2 — shelf life
* **No team has published a decay curve for a freeze-dried reaction.** Of 591 teams mentioning the topic, 64
  pair it with a number and a time unit, and on reading, essentially all are product specs, business-plan
  assumptions, literature citations, protocol steps or future work.
* Best measured datum in five seasons: **Cambridge 2025**, one storage time point (4 days), paper discs with
  bound DNA probes, refrigerated or lyophilised, still target-specific — Welch's ANOVA F(2, 35.561) = 37.296,
  p = 1.86×10⁻⁹.
* **No team has ever run an accelerated-aging study with an Arrhenius fit.** All 23 Arrhenius mentions are
  kinetic or growth models. **UZurich 2025** contributed an "Enzyme Stability Model… based on the Arrhenius
  equation" for shelf-life prediction, parameterised from literature proxy proteins, documenting its own
  "pragmatic approach to parameterization in the face of data scarcity" — the model exists, the data does not.
* **Mingdao 2024** published this project's real-time arm as a protocol — "analyze the enzyme activities in
  freeze-dried yeast powder stored at 37 °C over a period of 2 to 16 weeks" — and published no results.
* **No team has shipped product to other teams for independent measurement.** All 37 shipping matches are
  education or meetups. The only iGEM precedent for distributing material and having others measure it is the
  HQ-run InterLab study, which shipped plasmids for fluorescence calibration.
* Several wikis carry a stability claim with no method, figure or time series behind it. Not named on our pages.

### Idea 3 — histamine agreement study
* The theme is well worn: at least a dozen teams 2009–2026, four in 2026 alone. **The evidence ceiling across
  all of them is a dose curve in buffer or on a surrogate.**
* **RooseveltSATX 2026** (high school) went furthest: histamine, ammonia and TVB-N measured in commercially
  bought cod, tilapia, trout, salmon and yellowfin tuna over 12 days — but with commercial QuantiQuik strips and
  a Conway microdiffusion titration, not their construct, and no HPLC.
* **Aalto-Helsinki 2026** built the diamine-oxidase-on-cellulose strip, interviewed the Finnish Food Authority,
  and wrote the EU reference method down by name (NMKL "Biogenic amines. HPLC determination in foods", after
  Eerola et al. 1993) — then never ran it, because the expression work stalled.
* Across 21,934 pages: **"Bland-Altman" matches one team, "limits of agreement" two, "Passing-Bablok" zero.**
  All 15 "accredited laboratory" mentions are entrepreneurship roadmaps, not studies performed.
* The only pre-registration precedent is **GEMS-Taiwan 2026** — our own team, Best Measurement (High School) —
  which committed eleven algorithms, five metrics, a selection rule and eight predictions to a repository before
  measuring, published the raw data, and reported that of eight predictions one held, one failed and five were
  unsupported; plus instrument agreement of 3.8 % median paired difference and slope 1.001 against a benchtop
  photometer. The analyte is OD600 and the reference is an in-house instrument, not an accredited laboratory.

## Dead-variant literature behind NULLSET

* **Alkaline phosphatase S102G / S102A / S102C: 6×10⁵, 10⁵ and 10⁴-fold** down in k_cat/K_M, "still substantially
  higher than the non-catalyzed reaction"; all three crystallised with "little departure from the wild-type
  model" — [PMID 9533886](https://pubmed.ncbi.nlm.nih.gov/9533886/). Numbering trap: literature Ser102 is
  UniProt residue 124 (P00634), offset 22.
* **β-galactosidase E537Q: k_cat down 160,000–300,000-fold**; E537V 30,000–60,000; **E537D only ~100** — avoid.
  The authors concluded the residual "was probably due to the presence of a few wild-type enzyme molecules
  (formed from misreads)" — [PMID 7909660](https://pubmed.ncbi.nlm.nih.gov/7909660/). **Avoid all E461
  variants**: E461H keeps ~10 % activity, and E461 mutants are chemically rescued by imidazole, azide and
  2-mercaptoethanol ([PMID 7908253](https://pubmed.ncbi.nlm.nih.gov/7908253/)) — imidazole is standard His-tag
  elution buffer.
* **Our GFP premise was wrong.** Y66H is bright blue, Y66W cyan, T203Y yellow, S65T is EGFP — colour shifts, not
  kills. The published colourless control is **Y66L**; **R96M** and **S205A** kill the chromophore with the
  protein intact; **G67A is the wrong kind of control** because Gly substitutions there "substantially diminish
  the amount of GFP protein" ([PMID 15894286](https://pubmed.ncbi.nlm.nih.gov/15894286/)).
* **The floor is set by contamination, not chemistry.** *B. subtilis* α-amylase mutants >15,000-fold down, whole
  residual was wild-type carryover removable on an affinity column
  ([PMID 1576155](https://pubmed.ncbi.nlm.nih.gov/1576155/)). OMPDC: **0.093 mol %** wild-type contamination
  inflated apparent k_cat/K_M **46-fold**, ">95 % of the activity was actually due to contaminating" enzyme, and
  the artefact was reproduced by spiking 0.015 mol % ([PMID 24393696](https://pubmed.ncbi.nlm.nih.gov/24393696/)).
  Derived from that relation (**our arithmetic, not a quoted claim**): a variant 10⁶-fold down needs wild-type
  carryover below ~1 ppm; 10⁵-fold needs ~10 ppm.
* **Fold-loss is a property of the substrate.** β-gal E461G: >500,000-fold down on trifluoroethyl galactoside,
  **1,300-fold** on pNP-galactoside, and on the first the residual was "due entirely to a wild type enzyme
  contaminant" ([PMID 8823173](https://pubmed.ncbi.nlm.nih.gov/8823173/)). Cytochrome c peroxidase W191F:
  3,000-fold on one donor, **4.6-fold** on another ([PMID 2851317](https://pubmed.ncbi.nlm.nih.gov/2851317/)).
* **"Dead" is often not very dead.** TIM E165D only 1,500-fold down with binding fully retained
  ([PMID 3887397](https://pubmed.ncbi.nlm.nih.gov/3887397/)); a phospholipase H48Q only 500-fold
  ([PMID 16669624](https://pubmed.ncbi.nlm.nih.gov/16669624/)); blood-group glycosyltransferases where E303C/D
  "retain significant activity despite disrupted active site architecture" while E303Q "exhibits zero activity",
  with near-identical enzymes differing up to 13-fold for the same substitution.
* **Best practice for reporting**: an explicit inequality with the bound stated — "the upper limit for
  (k_cat/K_m) is ≤ 0.008 M⁻¹ s⁻¹" ([PMID 23909928](https://pubmed.ncbi.nlm.nih.gov/23909928/)). Folding/presence
  controls in use: crystal structure; a stoichiometric active-site inhibitor abolishing the residual (gold
  standard, [PMID 2199971](https://pubmed.ncbi.nlm.nih.gov/2199971/)); chemical rescue; retained K_d. A
  non-binding "dead" variant is a worse control than a binding one.
* **Cell-free, no cloning**: template "added to the reaction as linear DNA without cloning" with GamS/Chi/Ku
  protection; home-made TXTL at 2.3 mg/mL and one prep giving up to 3,000 reactions at "98 % cost reduction";
  OnePot PURE at $0.09/µL; **desiccated extracts 203–424× cheaper than commercial, dried on silica beads rather
  than freeze-dried, written for low-resource and teaching settings**
  ([PMID 35259873](https://pubmed.ncbi.nlm.nih.gov/35259873/)); an autolysis prep needing no specialised
  equipment ([PMID 28795570](https://pubmed.ncbi.nlm.nih.gov/28795570/)) — whose authors had to produce
  autolysates with "no detectable background LacZ activity", i.e. lysate background is real and **is** the floor
  this project measures. *E. coli* serine hydrolases are >1 % of its genes.
* **Dropped from our own plan on this evidence**: horseradish peroxidase (2–3 % yield after a refold; every
  published dead-mutant number came from insect cells) and carbonic anhydrase II (no mutant ≥10⁴-fold dead on a
  cheaply measurable activity). **Luciferase and a common protease are gaps** — no published inactive point
  mutant with a measured residual — which is why the page proposes them as the two novel measurements.

## Idea 4 (ENDOREAD) — RADAR, RNase III, and the design-rule correction

**RADAR, the mechanism idea 4 transposes.** Kaseniit et al., *Nat Biotechnol* 2023;41(4):482–487,
[PMID 36198772](https://pubmed.ncbi.nlm.nih.gov/36198772/) (plus its erratum PMID 36418591). Sensor =
marker CDS → a sequence reverse-complementary to the target carrying an **editing-enhancing C:A mismatch at
a central UAG** → output CDS, with self-cleaving 2A sequences flanking the sensor. Design rules: central
**CCA**, no in-frame stop in the reverse complement, unique by BLAST, **35–80 % GC**, no homopolymers.
Performance "largely maintained **down to 72 bp** dsRNA"; the **36 bp sensor is non-functional**; a split
design rescues it. Only **~3 %** of sensor RNAs are edited (~7 % by sequencing); output is linear in trigger
across two orders of magnitude; **endogenous ADAR1 is necessary** ("abolished in the absence"). Candid
failure modes: baseline is *not* leaky editing or readthrough ("our observation was contrary to the
prediction"), only **a subset of sensors are functional** against endogenous triggers, and bystander editing
runs **1–2.5 %** of reads.

**The RNase III geometry.** Pertzev & Nicholson, *Nucleic Acids Res* 2006;34(13):3708–21,
[PMID 16896014](https://pubmed.ncbi.nlm.nih.gov/16896014/). An **11 bp helix** "represents the shortest
length that provides significant reactivity"; **−1 bp = 50-fold** drop, **−2 bp "essentially abolishes
cleavage"**, and gel shift shows both are **loss of binding**. Typical substrates are ~two helical turns
(~22 bp). Determinants inside that helix: **distal box 2 bp** (every substitution >5-fold; UG→GU = 50-fold),
**middle box 2 bp** (one change enhances, another drops to 0.36), **proximal box 4 bp** — and **pb position 4
is a *catalytic* antideterminant**: two substitutions cost **14-fold and 7-fold in cleavage without
inhibiting binding**, i.e. a free "bind but do not cut" control. Coaxial stacking of short helices counts
toward the length. The paper's own caveat: the shortest reactive helix "has not been defined for any bacterial
RNase III ortholog". Trans duplexes *are* cleaved in vivo — a nucleotide-resolution map covers "both
intra-molecular and **inter-molecular** duplex substrates"
([PMID 30113670](https://pubmed.ncbi.nlm.nih.gov/30113670/)).

**The 200-fold natural precedent.** Wilson et al., *EMBO J* 2002;21(15):4154–61,
[PMID 12145215](https://pubmed.ncbi.nlm.nih.gov/12145215/): in phage lambda, "by preventing N autoregulation,
**RNase III activates N gene translation at least 200-fold**."

**Prior art: a clean negative.** No paper, preprint or iGEM project has built a bacterial riboregulator gated
by endogenous RNase III cleaving a **trans** sensor–target duplex. Nearest: **Lee et al., *NAR* 2016**
([PMID 26837577](https://pubmed.ncbi.nlm.nih.gov/26837577/)) — asRNA binds an sgRNA, RNase III cleaves the
duplex, derepression up to 95 %, but dependence is **partial** (71 % in the deficient strain vs 91 %
functional) and the authors say RNase III "is not the only component of the mechanism". And **Liu et al.,
*Nat Commun* 2022** ([PMID 35410423](https://pubmed.ncbi.nlm.nih.gov/35410423/)) built the closest
architecture — engineered tracrRNA hybridising **endogenous transcripts** — and **ruled RNase III out**:
"RNase III is not required for our CRISPRa system", confirmed with deficient strain, functional strain and
complementation. In the Registry, **JilinU_China 2018** (BBa_K2541201–10) built *cis*, temperature-gated
RNase III switches upstream of an RBS with the db+pb determinants conserved at 11–13 bp stems; **HKUST-GZ
2024** rebuilt it with 22 more parts (BBa_K5280410–31). Otherwise iGEM treats RNase III as the enemy —
knockouts, inhibitors (ymdB, BBa_K3407003), insulators.

**Two corrections we had to make.** (1) **HT115(DE3) is tetracycline-RESISTANT**, not sensitive — the
*rnc14*::ΔTn10 allele derives from the Tn10 tetracycline-resistance transposon and the deletion derivatives
are transposition-defective but retain *tetAR*; the stock-centre record says "tetracycline resistant" and
published protocols select on it at 12.5–15 µg/mL. Genotype verbatim:
`F-, mcrA, mcrB, IN(rrnD-rrnE)1, rnc14::Tn10(DE3 lysogen: lacUV5 promoter-T7 polymerase)`. Sourcing: the
*C. elegans* Genetics Center, **$10 academic / $150 commercial, $30 annual account fee**, a **$1 international
processing fee from 1 Mar 2026**, a **registered lab code required**, and no redistribution outside the
recipient's organisation — so a school should email first. (2) **BL21 Star (DE3) is *rne131*, an RNase E
truncation — it is NOT RNase III-deficient**, which means the toehold literature's "RNase-deficient strain"
effect is not evidence about RNase III at all. Also available: the ***rnc70*** allele is catalytically dead
but **still binds dsRNA** — the sharpest possible control.

**The design-rule correction that killed our first version of idea 4.** Angenent-Mari et al., *Nat Commun*
2020;11:5057, [PMID 33028812](https://pubmed.ncbi.nlm.nih.gov/33028812/), measured **91,534** toehold
switches: best single thermodynamic feature **R² = 0.04** for ON/OFF, ensemble defect **0.03**, an RBS
calculator **0.0001**, best kinetic feature **0.001**, an MLP on all 30 thermodynamic features **0.20**, and
an MLP on **raw sequence alone 0.43**. Verdict: "these correlation metrics were **too weak for practical use
in computer-aided design**", and "**significant information loss occurs when performing thermodynamic
calculations** on toehold-switch sequences". Green's founding paper says the same of itself: thermodynamic
analyses "did not reveal significant correlations" for switch–trigger or toehold–trigger binding energy.
Valeri et al. ([PMID 33028819](https://pubmed.ncbi.nlm.nih.gov/33028819/)) used predicted energy only as a
**last-resort tie-breaker**. **So Stanford's ρ = 0.62–0.63 would beat the published literature, and their
Q² = 0.20 lands exactly on the thermodynamic ceiling** — a fair, defensible place to be, with the caveat that
such correlations shrink on larger unfiltered libraries. Benchmarks for a school-buildable switch: the
original riboregulators re-measure at **11 ± 2 and 13 ± 4**; first-generation toeholds averaged **43-fold**
across 168 designs with only **20 above 100**; second-generation averaged **406**.

## Idea 5 (SEEDTEST) — the family panel and the specificity literature

**Sequences and pairwise differences computed from the miRBase release-22.1 `mature.fa` file**, downloaded
23 Nov 2026 (2,789 human, 442 *C. elegans*, 597 *A. thaliana* mature entries); counts computed by script.

* ***A. thaliana* miR169 — the primary family.** 14 members. **Four true single-substitution, equal-length
  pairs**: 169a/169c at position 21 (A>G), 169i/169m at 22 (A>U), 169j/169m at 22 (A>U), 169m/169n at 22
  (U>A). **Six exactly identical pairs**: d=e, f=g, h=k, i=j, i=n, j=n. Differences cluster at **position 1
  and the 3′ tail (20–22)** — the hardest case for a hybridisation sensor, since a terminal mismatch has only
  one stacking neighbour.
* ***C. elegans* let-7 — the easy anchor, and NOT the experiment.** Five members share nt 1–8 exactly
  (`UGAGGUAG`), but the hardest pair is **5 substitutions** apart (let-7 vs miR-84) and **there is no
  single-substitution equal-length pair in the family at all**. A project built on it alone would not test
  what it set out to test.
* ***A. thaliana* miR166 — the floor control.** Seven members, **two distinct sequences**, differing by one
  3′-terminal U. Costs two oligos.
* Human context: all nine let-7 members share the seed GAGGUAG, and **let-7a/let-7c differ by one nt**
  (position 19) as do **let-7b/let-7c** (position 17).

**What discrimination is achievable.** Hong et al., *Cell* 2020;180(5):1018–1032,
[PMID 32109414](https://pubmed.ncbi.nlm.nih.gov/32109414/) (+ erratum PMID 33125894): purpose-built
ultraspecific riboregulators reach a **differentiation factor >100 in cells** but **5 to 38 in cell-free**;
**G-U wobble mutations give only 4–20**, "including three cases where the thermodynamic model predicts an
energy penalty of zero"; a mutation coinciding with an existing sensor mismatch gives DF ≈ 1; their de facto
threshold line is **DF = 20**. Independently, the stem-loop RT-qPCR let-7 **5×5 matrix** (Chen et al., *NAR*
2005;33(20):e179, [PMID 16314309](https://pubmed.ncbi.nlm.nih.gov/16314309/)) found **0.1–3.7 %**
cross-reaction for single-nucleotide differences and "most cross-reactions resulted from **G–T mismatches**".
**Two platforms, same culprit.**

**Why the question is open.** The one published miRNA-responsive toehold switch in mammalian cells reports a
dynamic range of "**about two**" with "modest" orthogonality, tested only against an unrelated miRNA
([PMID 31039307](https://pubmed.ncbi.nlm.nih.gov/31039307/)) — no headroom to measure cross-talk. Across the
canonical two-input RNA AND gates the **worst-FALSE state is almost never quantified in the text**; where it
is, it ranges from **at/below baseline** (Green 2017, [PMID 28746304](https://pubmed.ncbi.nlm.nih.gov/28746304/))
to **1.84× null** (Ma 2022, [PMID 35288660](https://pubmed.ncbi.nlm.nih.gov/35288660/)) to **6–20 % of TRUE**
(Lehr 2019, [PMID 31393707](https://pubmed.ncbi.nlm.nih.gov/31393707/)). **For a two-input RNA AND gate in
living cells, nobody has published output over a grid of both input concentrations** — every canonical gate is
characterised at the corners only. Lehr 2019 is the sole 2-D titration and it varies *plasmid*, in cell-free.
The only tool ever built for sensor specificity is **ToeholdTools** (iGEM City of London UK 2021) — no
peer-reviewed paper, no wet-lab validation, repository archived 2022.

**The feasibility threat.** Every published working cell-free trigger is **36 nt or longer**; a mature miRNA is
~22. The one published attempt with a short synthetic miRNA oligo reports that "**neither the synthetic 100 μM
miRNA trigger nor the EXPAR product was able to trigger either version**" of the switch
([Copeland & Kwon 2023](https://doi.org/10.1016/j.biotno.2023.11.003)). McSweeney et al. explain why —
standard switches are designed for 36-nt triggers — and add that **one mutation in a hypersensitive region cut
activation 98.6 %, while triggers with up to seven mutations elsewhere still gave 5-fold induction**
([PMID 36802167](https://pubmed.ncbi.nlm.nih.gov/36802167/)). Naked short RNA in crude extract needs an RNase
inhibitor: one study got **no signal at 40 nM without it**.

**Costs.** RNA oligos are the budget: IDT list **$9.50/base at the 100 nmole floor** (a 22-mer ≈ **$209**,
+$100 HPLC); Eurofins **$5.25/base** (22-mer ≈ **$115.50**). **A 14-member panel ≈ $1,600** at the cheaper
supplier. One tube covers thousands of reactions, so it is a **fixed cost that multiplies by panel size**.
Cell-free: PURExpress ≈ **$1.26/µL**, NEBExpress ≈ **$0.49/µL**, home-made TX-TL **$0.011/µL** ("98 % cost
reduction", one prep ≈ 3,000 reactions). **The free lever is volume** — published toehold assays run at
**1.4–1.8 µL**, so a published-scale reaction is ~**$2** against ~$28 for a full 25 µL one. Unamplified
detection sits at **10–60 nM** across four papers; every femtomolar claim comes from NASBA, not the switch.
**NUPACK's RNA parameters exist only at 1 M Na⁺ with no Mg²⁺ correction for RNA at all.**

**Reporting.** Use "**analytical specificity**" (Eurachem) and "**differentiation factor**" (Hong 2020). Two
different quantities are both called "% cross-reactivity" — signal ratio at equal concentration, and the ratio
of concentrations giving equal signal — and they coincide only if both dose curves are parallel and linear, so
**a percentage without a stated concentration is uninterpretable**. **Zero activations in 3 replicates bounds
the rate at 63 %** (exact one-sided); 0/10 at 26 %, 0/30 at 9.5 %. Report fold-change over background with an
interval against the limit of blank instead of dichotomising. **Do not Bonferroni-correct a specificity
matrix** — it raises the type II error, i.e. makes you more likely to miss a real cross-reaction. At n = 3 the
two-sided interval half-width is ≈2.5 SD, so **5–6 replicates buy more than extra family members**. Order the
heatmap rows and columns **by mismatch count, on a log colour scale**. And steal DETECTR's control: deliberately
include something designed to cross-react and show that it does.
