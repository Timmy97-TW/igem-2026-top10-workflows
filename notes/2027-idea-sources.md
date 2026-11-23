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

## The comparator is not perfect either — added to SPLITFISH after the research re-reported

* **EN ISO 19343:2017** is the European standard for histamine in fishery products (perchloric acid, dansyl
  chloride pre-column, HPLC-UV). Validation: Duflos et al. 2019, *Int J Food Microbiol* 288:97–101,
  [PMID 30170760](https://pubmed.ncbi.nlm.nih.gov/30170760/) — a 2013 inter-laboratory study, **nine
  laboratories in seven countries, eighteen samples each**, on tuna, mackerel and herring.
* **Annex B recoveries, nine participants**, at 25 / 100 / 220 mg/kg spikes: **tuna 96 / 93 / 91 %**
  (RSD_R 31 / 12 / 9 %), **mackerel 73 / 70 / 67 %** (15 / 9 / 10 %), **herring 44 / 27 / 41 %**
  (28 / 4 / 9 %). Verbatim: "results for tuna are excellent… recoveries for herring were **unacceptable
  low** (27 to 44 %)". **So species is a design decision**: a disagreement measured in herring is a statement
  about the comparator, not about the student assay.
* **The regulation's own prescribed method has never been ring-tested** — JRC EUR 26605 EN: "The method has
  not been validated by collaborative study." JRC LOD/LOQ: tuna 3.6/21, mackerel 3.1/25, herring 3.1/25,
  cod 1/4 mg/kg; day-to-day RSD 11–14 %; recovery with the prescribed internal standard **103–140 %**.
* **The two official methods are not equivalent**, verbatim: "the two methods are **not fully equivalent**.
  The EU mandated method has a tendency to **overestimate**, while the Codex method has a tendency to
  **underestimate**." One Deming regression puts the European method about **35 %** high.
* **Reference-method precision degrades near a low decision threshold**: Morello et al. 2024, *Toxins*
  16(11):456, [PMID 39591211](https://pubmed.ncbi.nlm.nih.gov/39591211/) — within-laboratory reproducibility
  RSD **16.5 % at 20 mg/kg, 15.4 % at 50, 2.8 % at 200**; LOD 6.2, LOQ 20.3; recovery 89.9–94.2 % over
  20–400 mg/kg.
* **The ±26 % acceptance band this site uses checks out**: AOAC 977.13 modified, sixteen laboratories at
  50 ppm, RSD_r 3.6 % and **RSD_R 9.4 %** (Rogers & Staruszkiewicz 1997). Other interlaboratory RSD_R for
  comparison: Beljaars 1998 HPLC-OPA 2.2–7.1 %; the German HPLC method 6.8–17.2 % at 12–18 mg/kg.
* **12–19 % of laboratories fail a histamine proficiency round**: Rachidi et al. 2011, *Int J Metrol Qual Eng*
  2(2):91–100 — 26 Moroccan laboratories on spiked canned ground mackerel, 23/26 satisfactory at one level
  and 21/26 at the other. The actionable consequence is to **ask a prospective partner laboratory which
  proficiency scheme it joins and what its last score was.**
* **No dedicated EU Reference Laboratory for histamine was found** — do not assert one exists.

---

## iGEM High School special awards, 2022–2026 — the competition data (23 Nov 2026)

**How to get it.** `competition.igem.org/results/<year>` is a JS-rendered shell. The real public endpoint is
`https://api.igem.org/v1/competitions/<uuid>/awards/results`, unauthenticated. Competition UUIDs from
`https://api.igem.org/v1/events`. 2026 = `58a7e73a-1e25-457f-9f59-36c47b3f652a`, 2025 = `d615db72-738d-47c0-a929-fbdeb4882fc0`,
2024 = `5198bd74-a6bc-482d-bf02-d0f7dc5f33c7`, 2023 = `d7dab5d6-eedb-40ed-8b50-ffbcb2053851`,
2022 = `3a8e556f-e347-4b47-8d0e-9b697f49fba5`. Each record carries `type` (special / village / community / medal /
grand-prize / finalist), each team entry carries `decision` (winner / nominee), `group` and `section`.
Verified against the rendered pages line by line for 2026 and 2022: identical, nominee lists included.
`/awards/results/overview` returns 401. `api.igem.org/v1/teams` is paginated at a fixed 20 and **rejects**
`limit`/`section`/`status` with HTTP 400 rather than ignoring them, so a short crawl cannot pass as a complete one.
`villages?year=` does honour the year, but each record's `latestVersion.year` always reports the newest year — read
the village set from list membership.

**The Gold rule, 2026.** A team elects **three** Special Awards on the Judging Form: at least one from
**General Bio Engineering** (Best Measurement, Best Model, Best New Basic Part, Best New Composite Part,
Best New Improved Part, Best Part Collection) and at least one from **Specializations** (Best Education,
Best Entrepreneurship, Best Hardware, Inclusivity Award, Best Integrated Human Practices,
Best Alternative Platform, Safety and Security Award, Best Software, Best Sustainable Development Impact).
**Best Presentation and Best Wiki are "All Teams"** — automatic, and they *cannot be elected* toward Gold.
Software & AI Village teams may not elect Best Software. *"High school is always evaluated separately"* and
*"up to three winners are recognized, one per section."* Sources: competition.igem.org/judging/awards/special
and /judging/awards/medals.

**Concentration.** 2026: 19 Special Awards went to High School teams, shared by **13 distinct teams**; top take 3
(GEMS-Taiwan: Measurement, Hardware, IHP — and Lambert-GA: Model, Wiki, SDI). 2025: 19 awards, **13 distinct
teams**, top take 4 (GreatBay-SCIE: Education, IHP, Model, Wiki). Adding the four HS Best Village Project prizes
(published under *Village Awards*, not Special Awards): 23 prizes / 15 teams in 2026, 23 / 14 in 2025.

**My earlier figure of 12 prizes across 6 teams was incomplete.** Everything in it checks out; it omitted
Best Alternative Platform (BGI-College), Best Entrepreneurship and Best Presentation (NFLSHS-CHINA),
Best New Composite Part (Squirrel-Beijing), Inclusivity (GreatBay-SCIE), Safety and Security (BASIS-China),
Best Project Promotion Video (ZQT-Nanjing) and iGEMers Prize (Labi-Taiwan). The HS field is about twice as
spread out as that list suggested.

**Shortlist size per 2026 HS award** (winner + published nominees) — the crowding proxy:
Best Wiki 10, Best Presentation 10, Best Hardware 6, Best Part Collection 6, Best SDI 6,
Best New Basic Part 5, Best New Composite Part 5, Best Measurement 5, Best Model 5, Best Education 5,
Best Entrepreneurship 5, Best IHP 5, **Inclusivity 3, Best Software 2, Best Alternative Platform 2**,
Best New Improved Part 1 and Safety and Security 1 (no nominees published — iGEM publishes none for
community-voted awards and for some judged ones, and it cannot be told apart from "none named").
Best Software's HS shortlist was two teams in both 2025 and 2026, and HK-Joint-School was the runner-up both times.

**No entrenched incumbent.** The only team ever to win the same HS Special Award in consecutive years,
2022–2026, is **GreatBay-SCIE — Best Integrated Human Practices, 2023, 2024 and 2025** — and it broke in 2026.
Non-consecutive repeats: AIS-China (New Improved Part 2023, 2025), Lambert-GA (Wiki 2022, 2026),
BASIS-China (Safety 2023, 2026). Thirteen of 2026's 19 HS prizes went to teams that had not won that award
the year before. Checked across the renames, so no repeat is hidden by one.

**A special prize does not need a Top-10 finish.** In both 2025 and 2026, **7 of the 13** HS Special Award
winners did not place Top 10 — BASIS-China, BGI-College, GreatBay-SCIE, NFLSHS-CHINA (two awards),
Squirrel-Beijing, ZQT-Nanjing and Labi-Taiwan in 2026. And in both years **4 of the 10** HS Top-10 teams won
no Special Award at all.

**High School section size.** Registered / accepted: 2022 89/72, 2023 125/119, 2024 142/128, 2025 145/143,
**2026 152/147**. Medalled (the only published proxy for "finished", a lower bound):
70 / 110 / 119 / 136 / 135. HS medal split 2026: 63 Gold, 68 Silver, 4 Bronze. All-section 2026 medals
226/149/18, matching the printed Medals tab. A team can be a Special Award nominee with no medal at all
(WIST 2023, NIS Almaty-Medeu 2026).

**2026 HS village distribution** (152 teams): Biomanufacturing 23, Bioremediation 21, Therapeutics 20,
Agriculture 17, Food & Nutrition 17, Fashion & Cosmetics 14, Diagnostics 13, Conservation 7, Oncology 6,
Space 4, **Foundational Advance 2**, **Software & AI 2**, Infectious Diseases 1, Art & Design 0,
Climate Crisis 0, no village 5 (all non-accepted). 2025 for comparison: Bioremediation 28, Therapeutics 23,
Biomanufacturing 17, Food & Nutrition 15, Agriculture 13, Fashion & Cosmetics 11, Diagnostics 10,
Oncology 7, Infectious Diseases 6, Conservation 5, Space 3, Climate Crisis 3, Foundational Advance 1,
Software & AI 1, Art & Design 1. **The Foundational Advance figure of 2 of 152 is confirmed.**

**Award lineage.** Best Software Tool → **Best Software** is a confirmed rename (identical description text
carried across 2025→2026). Best Plant Synthetic Biology → **Best Alternative Platform** is an *inference*,
not an iGEM statement: the 2026 description broadened to "anything that is not E. coli, S. cerevisiae and
B. subtilis… plant biology chassis, mammalian cells, cell-free platform, or non-model organisms", and the
plant award disappears the same year. Treat the lineage as unconfirmed. **iGEM Spirit Award** (new in 2026)
has no High School category and so no HS winner. Awards with no HS category in a given year: Best Measurement
2022, Safety and Security 2024, Best Software 2022–2023, Best Alternative Platform / Plant SynBio 2022.

**Unverified.** "Finished" is not published per section. Pre-2022 not crawled, so introduction dates are only
"absent in 2022–2026". 2025's four HS Best Village Project cluster labels overlap in iGEM's own data
(clusters 2 and 4 both Agriculture / Food & Nutrition / Fashion & Cosmetics) — reproduced as published.
No 2027 data exists: `villages?year=2027` is empty and the 2027 competition is `status: "pre-release"`,
so the award list may change again — Best Alternative Platform and iGEM Spirit Award are both one year old.

---

## The 2026 Judge Handbook, read verbatim (23 Nov 2026)

**Where it is.** `competition.igem.org` is a JS SPA and WebFetch returns an empty 7,294-byte shell on every
`/judging/...` URL. The content is in the deployed JS chunks, and the authoritative document is the
**108-page 2026 Judge Handbook PDF**:
`https://static.igem.org/websites/competition/2026/judging/2026-judge-handbook-digital-v5.pdf`.
Real current URLs: `/judging/awards/medals`, `/judging/awards/project`, `/judging/awards/special`,
`/judging/handbook`, `/judging/how-it-works`, `/judging/tips`. **There is no `/judging/rubric` page and no
published rubric document** — iGEM publishes the ballot questions and a generic 1–6 ladder
(1 "Poor work done or completely absent" … 6 "Amazing work; impressive") and **deliberately withholds the
per-question anchor wording**.

**Gold, verbatim.** *"Demonstrate excellence in your work toward three Special Awards of your choice. At least
one must come from the General Bio Engineering category and at least one from the Specializations category."*
The handbook spells the first category "General Biological Engineering" (p. 44). Also p. 44: *"You do not have
to win any Special Award awards to meet the Gold Medal criteria, but you do have to impress the judges in your
efforts towards each Special Award you select."* **Gold is new in 2026 and judges cast no separate Gold vote** —
each judge's yes/no per elected award is inferred from their rubric score against a performance standard, then
majority-counted, and **all three must come out yes**. Ties go to the team (3–3 = met).

**Three is a cap, not just a floor** (p. 47): *"Teams cannot apply for more than three Special Awards total,
whether they are seeking a gold medal or not. The limit is intended to encourage the teams to focus on quality
over quantity."* Outside the three, every team remains eligible for Village awards, Best Wiki, Best
Presentation, the iGEMers' award, Best Promotion Video and the iGEM Spirit Award.

**Best Wiki and Best Presentation are tagged "All Teams"**: *"Every team automatically competes for these
awards. Their scores also contribute to the Project Awards."* So they cannot be elected toward Gold **but they
are two of the three ballot sections (Project, Presentation, Wiki) whose weighted average decides Project
Awards, Village Awards and finalists.** The weights are **not published**.

**Standard URLs** — medals: `/contribution`, `/engineering`, `/human-practices`. Electives:
`/measurement`, `/model`, `/education`, `/entrepreneurship`, `/hardware`, `/inclusivity`, `/human-practices`,
`/alternative-platform`, `/safety-and-security`, `/software`, `/sustainability`. **Part awards have no standard
page** and are judged on the Registry entry; the part number goes on the Judging Form.

**The sentence that makes page placement load-bearing** (p. 41): *"If sufficient information to meet a specific
medal criterion or award cannot be found under its corresponding wiki page, you can choose to consider the
requirement unmet."* Plus p. 29: *"Judges are not required to independently seek out additional information…"*
and *"Content on sites external to iGEM servers cannot be judged."* For parts (p. 18): *"evaluate only what is
documented on the Registry, not the Team Wiki or any external site."*

**The ballot question that settles our Measurement argument.** Best Measurement's four questions are: could the
measurement be reproduced by other iGEM teams; are the methods or protocols described well; could it be useful
to other projects; did the team validate and calibrate their measurement process appropriately. **None asks
whether the thing measured worked.** By contrast the part awards ask *"Did the team show the part works as
expected (modeling data can be acceptable)?"* — note that modelling data is explicitly allowed — Best Part
Collection asks *"Did the team finish building a functional system using this collection?"*, Best New Improved
Part requires experiments on **both** parts with the old one as control, documented on both Registry pages, and
Best Alternative Platform asks *"How strong is the evidence that the team successfully engineered their
biological system?"* **So Alternative Platform is not a free property of an unusual chassis** — that is only
the eligibility condition. Best Model accepts *"experimental or other relevant data"*, so literature data
qualifies. Best Alternative Platform is also the only 2026 ballot question that directly scores documented
failure: *"Has the team documented what didn't work, why, and what others should watch out for?"*

**Hard eligibility gates explain the thin fields.** Best Software (p. 89) requires an OSI licence, source in
the team's repo on iGEM's GitLab (*"Code hosted anywhere else is not eligible for evaluation"*), a README, a
LICENSE, reproducible build/run instructions with source not binaries, pinned dependencies in a committed
lockfile, and a repo under 50 MB — *"If any are missing, the submission has not met the requirements."*
Software & AI Village teams are barred outright. Best Alternative Platform requires a chassis that is not
*E. coli*, *S. cerevisiae* or *B. subtilis*. Best New Improved Part requires the paired experiment.

**High School specifics.** *"high school is always evaluated separately"* with **no minimum team count**, while
each collegiate section needs ≥10 teams or they merge. Judges are told (p. 101) to *"judge High School teams
just as you would a standard collegiate team"* on the same language scale, adjusting only the tone of comments,
and that *"it can be considered a substantial achievement for a high school team to make a functioning Part."*
**HS Village Awards go to four combined groups** (p. 28): Group 1 Diagnostics / Infectious Diseases / Oncology /
Therapeutics; Group 2 Climate Crisis / Conservation / Bioremediation; Group 3 Agriculture / Food & Nutrition /
Fashion & Cosmetics / Art & Design; Group 4 Foundational Advance / Software & AI / Biomanufacturing / Space.
**Our arithmetic over the 147 accepted 2026 HS teams: Group 2 = 28, Group 4 = 31, Group 1 = 40, Group 3 = 48**
(sums to 147). So choosing a village chooses a competition 1.7× larger or smaller, and a thin village such as
Foundational Advance (2 teams) buys nothing because it sits with Biomanufacturing's 23. **2 HS finalists**
(3 undergrad, 2 overgrad). **White List**: p. 25 — HS teams *"do not have access to parts, organisms, or
activities that require a Check-in Form or Animal Use Form."*

**Judging mechanics.** Six judges per team, conflicts removed. 25-minute session: 5-minute team summary then
20 minutes of questions, hybrid, live-streamed and recorded, followed by a 10-minute private panel discussion.
Judges review the wiki and the 15-minute presentation video **before** the Jamboree. An award is not given at
all if no team clears the minimum performance standard, and judges are warned that abstaining can make a team
ineligible.

**New in 2026, and directly relevant to how the wiki is written** (pp. 94–95). *"The wiki is a scientific
record, and the team is accountable for every claim, citation, figure, and line of code published under its
name, however it was produced."* Four named violations to report to the RCC: fabricated or inaccurate citations;
misrepresented data figures (*"AI-generated, AI-modified, or AI-'cleaned' evidentiary figures are never
allowed"*); invented quotes; plagiarism including from a generative model. The AI rule is not a ban:
*"Polishing wording, fixing grammar, translating, suggesting structure, drafting alt text, writing
build/infrastructure code, and generating decorative illustrations are acceptable uses. Having a model author
the substance of the wiki — the reasoning, the choices about what the project did and why it matters — is not."*
The Attributions Form now carries an explicit **"AI Tool Use"** field, and judges are themselves forbidden to
use AI for substantive assessments. Quotable line (p. 95): *"A wiki that looks polished but rests on a
plausible-but-fabricated reference list, an AI-generated 'representative' gel, or numbers that correspond to no
real experiment has misrepresented the team's work, and should be treated as such."*

**Honesty over false precision** (p. 20): *"It is better that a team presents and acknowledges limited,
qualitative assessments than they attempt to report flawed quantitative measurements."*

**2027.** Published: **Grand Jamboree 18–21 October 2027, Paris Convention Centre, Pavilion 7.3** (events API).
The 2027 competition record `126a39f8-0af6-4b92-ba57-e7e444ad442e` was created 18 Nov 2026 with status
`pre-release`, and **all 13 phases return null open and close dates** — so as of 23 Nov 2026 no registration
date, fee deadline, Wiki Freeze, Judging Form Freeze or Safety Form deadline is published anywhere. 2026 had
**three separate freezes** (Wiki, Judging Form, Registry Part Pages) and iGEM warns *"no extensions will be
granted. (No exceptions!)"*, advising a Judging Form review **three days or more** before the deadline.

## Three idea pages sharpened from fresh research (23 Nov 2026)

**DRYRUN.** The RH table is now printed: Greenspan 1977, *J Res Natl Bur Stand* 81A(1):89–96 Table 2
([10.6028/jres.081A.011](https://doi.org/10.6028/jres.081A.011)), nine salts at 20/25/30/40 °C with his own
uncertainties (3× SD of the predicted value, **excluding** vapour-pressure and enhancement-factor uncertainty;
he prints to 0.01 % and says that "does not in any way imply an accuracy of 0.01 percent"). **K₂CO₃ and
potassium acetate have no 40 °C value** — real gaps in his fit ranges (0–30 °C and 11.2–31.0 °C), do not
extrapolate. **Three salts dropped on hazard grounds**: LiCl (H360), NaBr (same statement in ~53 % of
notifications), Mg(NO₃)₂ (oxidiser, category disputed). The six that remain give 22.5 / 32.8 / 43.2 / 75.3 /
84.3 / 97.3 % RH at 25 °C. K₂CO₃, LiCl and NaCl are temperature-flat; NaBr moves 6 points over 20–40 °C.
**Excess undissolved solid is required** (Greenspan §1, quoted). **ASTM E104-20** covers the same practice
(0–50 °C, closed systems, corrosivity warning) but is paywalled and was not read — cite Greenspan, never E104.
Equilibration: ~30 min stirred headspace, ~2 days sealed unstirred, **~12 days for a hygroscopic sample inside**
(abstract records, seed/food systems — orders of magnitude only), so t = 0 needs defining in advance.
**Vacuum desiccator with silica gel beat a laboratory freeze dryer 50 % vs 20 % at two weeks** on the same
formulation (PMC9098194), and open-air drying with 0.55 M trehalose carried a cell-free reaction **136 days at
37 °C** (Karig 2017, PMC5414909). Three named non-first-order failure modes to pre-register: Weibull p < 1
(Torino 2025), a ~10 % plateau (Karig), shoulder-then-collapse (PMC11939460). **Humidity is not a second
acceleration axis**: Tg ≈ 25 °C at 8 % moisture (Breen 2001), above which Arrhenius fails and WLF constants do
not transfer. Prefer **30 °C** over 37 °C for the accelerated arm (Wälchli 2020: rankings differ drastically at
40 vs 5 °C but correlate better 30 vs 5). Target **2–3 % residual moisture**, not the driest (Chang 2005
degradation-rate minimum). Gravimetric loss-on-drying RSD ~4–9 % at 1.1–4.4 % moisture but **17–47 % below 1 %**;
metal vessels roughly halve the scatter; run **sodium tartrate dihydrate (7.93 % water)** as an accuracy check
(May 1989). **Caution:** this round could not read ASTM F1980 and reports that secondary sources *do* attribute
Q10 = 2.0 to it — our page's existing F1980 wording quotes the standard's own text from an earlier read, so it
stands, but ICH Q1A(R2)/Q1E is the right framework either way.

**ENDOREAD — three corrections now printed on the page.** (1) **The duplex must not sit in the 5′UTR.** An
11–22 bp hairpin there occludes the RBS and blocks initiation regardless of cleavage, monotonically with length
— so walking duplex length in a 5′UTR produces a strong, significant, entirely artefactual length/output
correlation. Move it to the 3′UTR or an intercistronic position, as the existing Registry insulator parts
(BBa_K5291046/47) are deployed; if the 5′UTR is kept, every length needs a **structure-matched cleavage-dead
twin** (single proximal-box substitution, not a shortened stem). (2) **A cleavage readout has no internal
normaliser.** ADAR edits (gain, transcript survives, internal reference available); RNase III cleaves (loss,
transcript destroyed, a second plasmid cannot normalise what is being destroyed). Fix: constitutive marker CDS
**upstream on the same transcript, protected side of the cut**, report the ratio. Off-state prediction was
consistently worse than on-state across 91,534 switches. Never benchmark fold-change against literature: one
study measured ~7-fold for constructs reported at >600-fold. (3) **HT115(DE3) may be barred** — it is
tetracycline resistant, and resistance factors not in common use at the host institution need a Check-In an HS
team cannot file; it is also not isogenic with BL21 (differs in *rnc*, *rne*, background, T7 context, growth
rate). Use **YmdB overexpression** for an isogenic RNase III-low condition (prefer BBa_K3407003 or
BBa_25DMM6OH; **avoid BBa_K3407019**, whose tetA/tetR regulation reintroduces the AMR problem), paired with
cleavage-dead constructs because the two controls fail differently. **Statistics:** n = 24 detects only
R² ≥ 0.30, n = 96 only R² ≥ 0.08, published effects are R² = 0.001–0.16, and R² = 0.04 needs ~194 *working*
constructs — so a correlation is unreachable **and a null at n = 24–96 is not a publishable negative either.**
Reframed to a categorical test of whether published proximal/distal-box determinants transfer, where the
biochemistry offers 7, 14, 25, 30 and 50-fold effects at named positions with n = 3–6. **Novelty is narrower
than we claimed**: RNase III sites as insulators and stabilisers are established, TU Delft 2020 built YmdB and
Mini-III, a 2025 team built an *rnc* knockout, and 2026 teams design hairpins to *evade* RNase III using the
11-bp rule. What is unpublished is a **trigger-responsive** RNase III switch with a measured dynamic range.
Also: RNase III has ~615 endogenous targets including rRNA, capacity falls within 30 min of induction while
growth responds later; ~52 % of mapped in vivo sites were stationary-phase and 359 only there; and one
mis-prepared fluorescein standard produced a **29.1-fold** systematic error across a 244-lab study-year.

**NULLSET.** The **White List has moved** to `responsibility.igem.org/guidance/white-list` (the old
`technology.igem.org/safety/white-list` is a hard 404), and it states in its own words that high school teams
are *"unable to seek approval via Check-In Forms"* and *"should not engage collaborators to work beyond the
White List."* Organisms: Risk Group 1, with *E. coli* K-12 as the worked example and **no strain-by-strain
list**, so any RG1 *E. coli* including BL21 derivatives is permitted. Nothing in the NULLSET plan is
White-List-illegal. **Corrections to our own page:** G67A is wrong because it **partially matures** (leaky),
not because it reduces protein — fold stability is largely chromophore-independent. **Y66L drifts**: colourless
fresh, develops 374/412 nm chromophores on oxidation plus a His148 cross-link, so it needs a time course.
**Lead with R96M**, the only quantified folded-but-unmatured GFP (~7,500-fold slower maturation). **Drop E222Q**
— 32× slower than EGFP at pH 7 but *faster* at pH 9–10. **lacZ: E537Q** (160,000–300,000-fold) is the right
kill and its authors concluded the residual was wild-type protein from translational misreads — this project's
thesis, demonstrated in 1994; **E461 substitutions are <10 %** and fail our own few-percent test (E461 is the
acid/base catalyst, E537 the nucleophile). **Firefly H245D at 0.33 %** is borderline against a measured floor.
**No published chromophore-dead mRFP1 with a measured residual exists** — use a dark acceptor (Ultramarine,
QY 0.001) and characterise a dead twin of the 1,464-use E1010 rather than claiming novelty for dark FPs.
**Do not use BBa_J23112 as a dead promoter**: ~9 % of J23118 by fluorescence, inverted at the mRNA level, and
its own page says it duplicates J23103 — build a **−10 box knockout** instead (−35 changes do not abolish
transcription). **An early stop is not a translation kill**: readthrough reaches 80 % under stress, depends on
context to ±12 nt, is partly transcriptional, and several standard cloning strains carry ***supE44*, which
suppresses all three stop codons** — read the strain genotype first and measure readthrough in stationary phase
too. **Quote the floor in calibrated units**: arbitrary units gave a 95 % CI spanning five orders of magnitude
and **normalising to a control is specifically unreliable** because the control fails as the sample does
(Beal 2018) — so a floor expressed as a ratio to a dead part is circular. **The benchmark to beat: iGEM's own
InterLab filter accepted a negative control at up to 0.5 μM FITC/OD against a 3.02 median positive, ≈17 % of
the positive, and 28 % of submitted datasets failed even that.** Budget **60 blank wells** (≈9 % precision on
the SD estimate; 20 gives 16 %, 8 gives 27 %) split across days and operators. **Blank against spent medium**,
not fresh: the green autofluorescence is secreted flavins that accumulate with growth, cells releasing ~10×
what they retain. And one free, unpublished experiment: **empty vector versus no plasmid** in a calibrated
fluorescence assay.
