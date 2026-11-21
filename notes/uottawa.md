# UOTTAWA — Nulfur (Bioremediation, Canada) — Top 10 Undergrad 2026
Title: Nulfur — Sustainable Crude Oil Processing Through Engineered Biodesulfurization
Wiki: https://2026.igem.wiki/uottawa · Repo: gitlab.igem.org/2026/uottawa
Software: gitlab.igem.org/2026/software/uottawa/cofactor (MIT)

## Core idea
Replace **hydrodesulfurization** with the **4S pathway** (DszC oxidises DBT → sulfone; DszA opens
the ring → sulfinate; DszB cleaves the C–S bond releasing **2-hydroxybiphenyl (2-HBP)** + sulfite;
DszD/flavin reductase regenerates FMNH₂) in **Pseudomonas putida KT2440**, chosen because its RND
efflux pumps (TtgABC, TtgGHI, SrpABC) survive a solvent load that kills *E. coli*. The wiki names
the four reasons biodesulfurization stalled industrially — feedback inhibition, slow kinetics,
thermal instability, metabolic cost — then organises the entire project as **one engineering tier
per limitation**: enzyme (stability/solubility), regulatory (promoter tuning), cellular
(biosurfactant + consortium). Every later page, including the TEA and LCA, argues against that list.

## WET LAB workflow as an ordered pipeline
**0. Admit the chassis has no toolkit.** The Alternative Platform page opens by naming three gaps
   before any experiment: no Golden-Gate-compatible broad-host-range vector for KT2440, no promoter
   set with *measured* strengths in this chassis, no reliable transformation protocol. The wet lab
   is then written as closing those three in order, and all three are published as artifacts.
1. **Domesticate pBBR1MCS-2** (pBBR1 origin, low copy, KanR, replicates in *E. coli* and
   *P. putida*). No BsaI sites in the MCS, one extra BsaI site outside it. **Three rounds of
   site-directed mutagenesis** — remove the external site, add two directional BsaI sites in the
   MCS — each **recircularised by KLD**, transformed into DH5α, **whole-plasmid sequenced after
   every round**. The wiki contradicts itself on the removed site: Results says "position 1,383
   (C to T)", Alternative Platform says "inside the kanamycin resistance gene". Published as
   **BBa_26NZYISB**, flagged **not RFC1000-compatible** because it contains BsaI sites.
2. **Insert design.** dszA, dszB, dszC, frm, lacI from *Rhodococcus erythropolis*, codon-optimised
   for KT2440, ordered from **IDT on pTwist holding plasmids**. Literature mutations built into the
   baseline rather than rediscovered: **DszB Y63F** (kinetics), **DszC W327C + A101K** (relieve
   product inhibition), native flavin reductase **replaced by frm from *Mycobacterium phlei***.
   Ends designed so the pathway **cannot ligate out of order**; **a different terminator per gene**,
   specifically so later promoter swaps would not create recombination substrates; **FLAG on
   DszA/DszB, His6 on DszC/frm/LacI** so two blots cover five proteins.
3. **Golden Gate, three iterations.** (i) Not an assembly at all but a **miniprep yield study** —
   5 mL vs 20 mL LB, 37 °C/16 h, NanoDrop; 20 mL won, and **260/230 ≈ 1** (residual ethanol) was
   fixed by an extra spin. (ii) Inserts left in circular pTwist, **1:1 molar**, BsaI + T4 ligase →
   colonies grew but **sequencing showed empty vector only**; blamed on BsaI inefficiency cutting
   inserts out of holding plasmids. (iii) PCR-amplify each insert with **universal primers binding
   outside the pTwist MCS (pTwistFWD/REV)**, assemble at **2:1** → all colonies carried **all 5
   inserts in the correct order**. Lesson written down in two parts: insert must be in excess, *and*
   you need a screen. Final construct **GGA6, 11,312 bp**.
4. **A screen designed to be cheap before thorough.** **internalFWD/REV** across dszC (middle of the
   construct, **1408 bp**) as a one-tube proxy for full assembly; **circuitFWD/internalREV** for the
   lacI–dszB–dszC half (**3789 bp**); **internalFWD/circuitREV** for the dszC–dszA–frm half
   (**3460 bp**). Taq colony PCR, 1.0% agarose + SYBR Safe, holding-plasmid positive and no-template
   negative on every gel. Only PCR-positives went to **whole-plasmid sequencing (Flowgenomics)**.
5. **Transformation into *P. putida*, the hard step.** Electroporation (per Wang et al.) failed with
   repeated **"ARC" errors**; they tried new cuvettes, chilled components, DNA re-purification, salt
   reduction and altered parameters — **zero colonies**. They also found **KT2440 is intrinsically
   ampicillin resistant**, which silently invalidated selection for every AmpR pTwist construct, so
   individual-enzyme expression moved to *E. coli* BL21 and was never repeated in the real chassis.
   They then **built a heat-shock protocol for chemically competent *P. putida*** (from Giri et al.)
   and optimised it as a factorial over exactly **three variables**: storage (24 h at 4 °C vs
   flash-freeze/−80 °C), heat shock (42 °C/45 s vs 50 °C/3 min), recovery (2 h vs 6 h). Two rounds,
   no-DNA negative and empty-pBBR1MCS-2 positive on every plate, colonies counted. **Test 1 best =
   Trial 3 (4 °C/24 h, 42 °C/45 s, 6 h): >1000 pBBR1MCS-2 and >500 GGA6 colonies, vs the standard's
   184 and 2 — a ~10× gain.** Test 2 then isolated the freeze question and showed the *same*
   conditions giving 4 colonies in Test 1 and >1000 in Test 2; they attribute that to operator
   practice, not biology, and say so. The recommendation carries its own limit: freezing is fine for
   plasmids **≤5 kb**, 24 h at 4 °C for larger. Protocol published in full (NaCl → CaCl₂ →
   CaCl₂+10% glycerol, 3000 × g at 4 °C, 50 µL aliquots, 100–200 ng DNA, 450 µL pre-warmed SOC).
6. **Expression/solubility, diagnosis before fix.** Westerns on 10–12% gels, 60 min at 120 V;
   anti-FLAG or anti-His 1:2000 overnight, HRP-anti-mouse 1:10000, Thermo ECL; 0.5 mM IPTG overnight
   at 16–18 °C; lysozyme + sonication; **soluble and insoluble fractions run side by side**. Same
   answer in both chassis and in both holding plasmids and GGA6: **DszA (49.6 kDa) and DszB
   (39.0 kDa) soluble; DszC (44.90 kDa), LacI (38.6 kDa), frm (17.2 kDa) insoluble.** A His-tagged
   MW marker served as an internal antibody-performance control.
7. **Exhaust the cheap explanations before engineering the protein.** For DszC: **IPTG 0.5 → 0.2 mM**
   (slow expression to allow folding) and **0.03 mg/mL riboflavin** (raise FMN availability) — both
   failed; **BugBuster** chemical lysis also failed. Only then was it handed to the dry lab, with the
   written conclusion that expression conditions "will not be enough".
8. **Promoter characterisation before promoter tuning.** Four literature constitutive promoters —
   **BG42 (strong), BG17 (medium-strong), BG37 (medium-weak), BG28 (weak)** — each driving
   **mScarlet-i** in the sanitised vector. **Ex 569 / Em 593 nm** plus OD600 on a plate reader,
   normalised in a stated order: **(a) subtract LB background *and* *P. putida* autofluorescence,
   (b) divide by LB-blanked OD600**, reported as **log10(RFU)**. **Two biological replicates ×
   technical triplicate in *P. putida*; only one biological replicate in *E. coli* BL21* — labelled
   as such on the figure. Finding: **BG17 ≈ BG37, so three tiers not four**, contradicting the
   published ranking; both shift toward the strong promoter in *E. coli*. The *E. coli* run exists
   purely as a service to teams who prototype there.
9. **The 24-member library** = the **24 permutations** of assigning four promoter strengths to
   dszA/dszB/dszC/dszD, one copy of each promoter per construct. Vector **pre-linearised** this
   time, because promoter characterisation had thrown non-fluorescent background colonies from
   undigested circular vector (Golden Gate incubation had already been stretched to **2.5 h at
   37 °C** against the same problem). **Honest arithmetic, repeated on three pages: 13 of 24
   attempted → 8 passed colony PCR (2, 3, 6, 7, 8, 9, 12, 13) → 7 transformed into *P. putida*
   (construct 7 failed).** Time, not biology, is given as the reason the other 11 were never built.
10. **The activity assay.** The seven strains + **0–50 µM DBT**, 24 h, supernatant harvested,
    **CaCO₃ to alkalinise**, **Gibbs reagent (2,6-dichloroquinone-4-chloroimide)** 20 min,
    **A610 in a 96-well plate, triplicate**, no-DBT blank subtracted. **Only construct 6 produced
    signal, at 1 µM and 10 µM DBT.**

## MEASUREMENT — the assay they had to build, and the error they published
- **LC-MS was tried first and failed in public.** 2-HBP standards 10–100 µM in methanol,
  reverse-phase ESI, both ion modes. LC worked: clean UV-Vis peak at **retention time 10.117 min**,
  intensity scaling 10× from 10 to 100 µM. MS did not: **[M+H]⁺ m/z 171.21** and **[M+Na]⁺
  m/z 193.20** (MW 170.21) **never detected at any concentration**, attributed to poor ionisation of
  a low-polarity analyte. The planned **APCI probe** fix was blocked by an **LC-MS mechanical failure
  from late August to early October**; the method is stated as still unvalidated.
- **Gibbs assay built as the replacement, calibrated in matrix not buffer:** standards spiked into
  **spent *P. putida* KT2440 LB supernatant, 0–500 µM, triplicate**, so the curve carries the real
  samples' medium background.
- **The calibration error is the most instructive thing on the Results page.** Interpolating
  construct 6 gives **4.68 µM 2-HBP from 1 µM DBT and 17.2 µM from 10 µM** — impossible at the
  pathway's **1:1 stoichiometry**. They diagnose it themselves: the curve was fitted over
  **10–500 µM** with a **baseline intercept of 0.1374 where it should be 0**, so the samples sit
  **above the LOD but below the LOQ**. The claim is then downgraded in place to *qualitative* proof
  of end-to-end flux. Nothing is deleted — the impossible number and its cause are both printed.
- **DSF thermostability:** SYPRO Orange, Ni-NTA-purified and desalted protein, triplicate, qPCR
  machine, **Ex 470 / Em 520 nm, 25 → 95 °C at 1 °C/min**. **WT 39.3 ± 0.6, E168K 38.0 ± 0,
  E247F 39.3 ± 1.5, Q315F 39.3 ± 1.1 °C** — read as "within the resolution of the assay", i.e. no
  gain but no loss. **DszC variants never assayed**, and the reason is stated: soluble DszC could not
  be purified.
- **Chassis tolerance:** OD600 in **0/1/2/5/10/20% (v/v) diesel**, 30 °C, 220 rpm, read at
  **1, 2, 8, 24 h, duplicates ± SDM**; no difference. Their own caveat: growth is not sulfur removal.
- **Emulsification index (E24)** measured rather than asserted: 2 mL oil + 2 mL water with
  **40 mg/mL rhamnolipid**, 24 h RT, layer heights measured separately and summed — **≈95% in
  diesel** (1.9 cm of layering in a 2.0 cm column, as 1.1 cm water-in-oil + 0.8 cm oil-in-water)
  vs **≈20% in diluted bitumen** (0.4 cm), with a surfactant-free negative control in both.
- **Mutagenesis QC as its own appendix.** NEB back-to-back non-overlapping primers, Q5-HF, with a
  table of **annealing temperature and elongation time per mutation** (DszC amplicon 3600 bp/1:48;
  DszB 3440 bp/1:43). Triage: gel → colony PCR → whole-plasmid sequencing. **Sequencing failed for
  6 of 16** (DszB E168R, E168G; DszC T46D, I412D, V62I, Q243E); rescued by a **gradient PCR,
  60.0–72.0 °C in 8 steps**, which recovered all but **DszC I412D**.

## DRY LAB — "Cofactor": an agentic harness that was itself evaluated
**Why it exists:** they noticed their own protein-engineering workflow was "highly structured and
formulaic", and when handed a second enzyme and objective, chose to formalise the loop.
**Six layers.** A general-purpose LLM does all reasoning (**model-agnostic, BYOK, any
OpenAI-compatible endpoint**). A **phase machine** whose preconditions are checked *against the
store, not against the model's claim* that they are met. A **state layer** = one **SQLite database
at `.cofactor/research.sqlite3`, sixteen tables** (runs, hypotheses, evidence, claims + evidence
links, panels, candidates, reflections, evaluations, decisions, cycles, checkpoints, artifacts,
jobs, events, budget ledger), foreign keys on, WAL journaling, atomic commit/rollback — chosen so
runs resume across sessions and **the record stays readable if a team stops using Cofactor**. A
**tool layer** of schema-declared deterministic tools (sequence ops, codon optimisation, RFC10 check,
restriction analysis, solubility scan, UniProt/NCBI/RCSB PDB/AlphaFold, PubMed + Europe PMC + local
PDFs, shell/Python, memory). An **execution layer** (`ExecutionManager`) with **local / SSH /
Slurm-over-SSH** behind one interface, each job stored as a row attached to the hypothesis that
motivated it. An **interface layer** of three frontends (FastAPI web UI at `127.0.0.1:8787`,
Textual TUI, CLI). A per-turn **tool-call cap forces a deliverable**, so no run loops forever. Local
PDFs — a supervisor's reprints, unpublished work — enter the evidence base "on the same footing as
a citation".
**Five versions, each triggered by a named failure:** V1 TUI single-agent — *"could develop
plausible hypotheses but often skipped controls and counterevidence"* → enforce the process in the
harness; V2 cluster backends, because V1 could propose compute it could not run; V3 web GUI +
in-UI config, because **the wet lab** found the TUI unusable; V4 formatted reports; V5 the evals.
**Evaluated like software, with the harness as the independent variable.** Four regimes each adding
exactly one layer — `bare`, `bare_prompt` (Cofactor's prompt, tool text stripped), `tools`,
`full` (+ phase machine) — across six arms:
| Arm | Tests | Result |
|---|---|---|
| A | Can the workflow rules be bypassed? **25 model-free adversarial probes** against controller + store | all 25 hold; **the `promotion-requires-heldout` probe found a real bug — a promotion path through the web API that bypassed a gate enforced only in the controller** |
| B | Numerical correctness of deterministic tools, **12 probes** (GRAVY vs independent Kyte–Doolittle, net charge at pH 7, case/whitespace invariance, empty + degenerate input, and `no-overclaiming`: heuristics must read as predictions) | all hold; **37/37 across A+B** |
| C | Compliance under user pressure: 8 adversarial scenarios × 4 conditions × 2 seeds, judged **by inspecting database rows** | bare 2/16, bare_prompt 1/16, tools 0/13, full 0/14; **all three violations were "abandoning competing hypotheses under pressure from the user"** |
| D | Design quality on a DszC task (**UniProt P54998**), two independent judges, six axes × 0–2 = 12, disagreements >1 point left unscored rather than averaged | rubric scores **similar across conditions — they say so plainly**; the real gain is grounding: prompt-only **hallucinated amino-acid sequence in two proposed mutations** and found 0 protected residues; grounded conditions did neither |
| E | Reconstruct the methods of **six published papers**, scored against the papers' *initial* designs | `bare_prompt` competitive on strategy (1.86/2) but **0.50/2 on target region vs 1.50 (tools), 1.33 (full)** |
| F | Differential diagnosis with expression/solubility/concentration/sequence already ruled out | every scorable run found the missing flavin cofactor system; conditions differed only in susceptibility to a plausible decoy |
**Contamination control in Arm E** is unusually careful: three of six papers postdate the model's
cutoff; transcripts were audited for target-paper identifiers and titles; **no grounded run
retrieved its target paper across 18 runs, and the scanner blocked 31 search records across 12 of
36 runs** — and they still write that this "cannot rule out knowledge already encoded in the
model's weights". **Stated limitations:** Arms D and F are **two runs per condition**
("preliminary"); the ungrounded condition **exhausted its token budget in Arms D and E, leaving
those unscored**. The conclusion is deliberately narrow: the harness adds enforceable constraints
and grounded evidence, it does not make the model smarter.
**Closed loop both ways:** Human Practices was used on the *output* — they could not tell what
belongs in an LLM-written report, so they asked **Dr. Corrie DeCosta**, a protein chemist, what such
a report needs to be usable, and changed the format accordingly. And **Cofactor proposed the six
DszC solubility mutants that were actually built and blotted**.

## DRY LAB — structure-guided mutation pipeline (four stages, both enzymes)
Residue selection → mutation scoring → structural validation → selection. **Targets stability, not
catalysis**, explicitly because kinetics and product inhibition were already handled by the
literature mutations in the baseline. Selection rule: residues both **flexible** (MD backbone RMSF)
and **unconserved** (**ConSurf**), excluding catalytic residues. Scoring by **two methods chosen for
being unlike each other** — **FoldX** (empirical force field, fixed backbone) and **ThermoMPNN**
(deep learning on ProteinMPNN embeddings, trained on experimental ΔΔG) — with agreement as the
filter.
- **DszB** (PDB **2DE2**; catalytic **Cys27/His60/Arg70**; lid loops **135–150** and **180–200**):
  **347 residues → 23 positions → 437 scored mutants → 150 predicted stabilising → 24 to MD → 22
  passed → 5 to the bench.** MD in **GROMACS**, **amber99sb-ildn**, **TIP3P**, minimisation → NVT →
  NPT → production. Four pass/fail metrics: Cys27 Sγ–Arg70 guanidinium N distance, fraction of native
  catalytic contacts lost, active-site backbone drift, and per-residue flexibility deviation
  restricted to the two lid loops — with **thresholds derived from the wild type's own fluctuations
  rather than set a priori**. Shortlist with both ΔΔG values printed (FoldX / ThermoMPNN):
  **E168G −1.18/−0.65, Q315F −1.54/−0.07, E168R −1.19/−0.16, E247F −1.18/−0.04, E168K −0.82/−0.26.**
  They also report the effect went the *opposite* way to the design intent: dyad distance
  **decreased** and loop flexibility **increased** relative to WT.
- **DszC** (PDB **3X0Y**, FMN-dependent monooxygenase, **active as a tetramer**): **whole-sequence
  saturation first — ThermoMPNN over 7,581 single mutations → 646 stabilising across 141
  positions** — deliberately decoupling scoring from filtering so stability, conservation and
  geometry could be applied in parallel. Strict FoldX∩ThermoMPNN consensus gave **only two hits
  (I77L, V62I)**, so the rule was **widened explicitly, not quietly**: consensus OR strong
  ThermoMPNN where FoldX falls inside its own noise band, plus **ConSurf grades 1–4** →
  **21 candidates over 18 positions**. Validation: FoldX seed structure, FMN added back to the apo
  structure, **DBT docked with AutoDock Vina 1.2.0** into a **22 Å box centred on the FMN ring**,
  rigid receptor, **Gasteiger charges via Open Babel**, **exhaustiveness 16, fixed random seed**;
  plus a distance screen (contact <4 Å, nearby <6 Å, interface <5 Å) against FMN, its N5/C4A atoms,
  the 2-HBP network taken from **PLIP** analysis of docked poses (site II 32, 36, 37, 271, 272, 275,
  276, 280, 376, 378, 380; site V 96, 132, 134, 135, 161, 391), and the nearest neighbouring chain.
  **17 of 21 viable; all passed docking — total spread across 22 structures 0.049 kcal/mol, i.e. no
  measurable effect on substrate binding.**
  **The most honest paragraph on the page: G26Q was excluded because it sits 4.2 Å from a
  neighbouring subunit at the tetramer interface — and FoldX, ThermoMPNN and the MD all ran on the
  monomer, so none of them could have caught it**, which they state outright.
  Shortlist split into declared tiers: **tier 1 I77L (−0.04/−0.588), V62I (−0.012/−0.144)**,
  charge-neutral but "better interpreted as neutral to slightly stabilising than as strong evidence";
  **tier 2 E105R (+0.169/−1.195), E113L (+0.290/−0.709), E113I (+0.441/−0.679)**, advanced *despite*
  FoldX disagreeing, with the reason given — all three change net surface charge, and FoldX omits
  explicit unfolded-state terms and is documented to underestimate destabilisation at charged
  residues in long-range contacts.
- **At the bench, neither campaign worked.** Solubility mutants **T46D, Q110E, Q112E, P182D, Q243E,
  I412D** all still insoluble, even with BugBuster; thermostability mutants no significant ΔTm. Both
  get the same stated follow-up: **single point mutations are insufficient, combinatorial mutagenesis
  is required.**

## DRY LAB — consortium model: one analytical, one constraint-based
Framed as a single question — *"Where can the system be improved, and which interventions could
realize it?"* — with three candidate strategies and an explicit decision to model only two:
**pathway splitting was dropped because previous work had already characterised its gain.**
1. **Mass transfer / surfactant (analytical).** Two mechanisms modelled *separately* then together:
   interfacial-tension reduction (**43 → ~0.9 mN/m**, water/n-hexadecane) feeding
   **Hinze–Kolmogorov** droplet breakup at fixed agitation, and **micellar solubilisation** above the
   CMC. Closed with **film theory at the stagnant-sphere floor (Sh = 2)** and **Michaelis–Menten
   uptake**, solved for the single unknown C_free **by bisection** after an argument that supply and
   demand are oppositely monotonic so the root is unique. **Six assumptions listed before any
   result.** Numbers: **d₃₂ 500 → 49.1 µm**, specific area **1200 → 12,210 m² m⁻³**, k_L
   **2.87×10⁻⁶ → 2.92×10⁻⁵ m s⁻¹**; tension plateau by **80 mg L⁻¹**, at/near the **CMC of
   56 mg L⁻¹**, so the whole area gain is available at CMC-level dosing. Free DBT sits at **5.6% of
   equilibrium with no surfactant → 89.1% at 100 mg L⁻¹**, then **dips to 85.3% at 1 g L⁻¹** before
   recovering — and they explain the dip (micelles raise demand). Headline **2.8- to 34-fold**,
   decomposed into an **invariant 2.7–2.92× solubilisation** term and a **dispersion-dependent
   up-to-11.5× area** term, with a **sensitivity sweep over unaided droplet size (500 → 10 µm)**
   showing the area term collapsing to 1.00 at the fine end, **crossover near 150 µm**, then
   cross-checked against Abin-Fuentes et al., who found transfer *not* rate-limiting in a vigorously
   agitated system — "consistent with our results at the fine end of the table". The two mechanisms
   are **synergistic, exceeding the product of the isolated gains by 36% at 1 g L⁻¹**, with the
   reason derived from the flux equation. Engineering output: a **two-tier titre target** — CMC for
   the area benefit at low carbon cost, g L⁻¹ for the extra ~3×.
2. **Genome-scale model.** **COBRApy** + published **iJN1463** KT2440 GSMM extended with the four
   heterologous dsz reactions; LP solved with **GLPK**; biomass objective. The DBT exchange bound was
   **swept over 1000 points** between two **derived** bounds, not guessed: upper **f_avail = 1** as a
   deliberately permissive ceiling; lower a diffusion-only floor computed from a 100 m³ vessel at
   H/D = 3 (3.488 m diameter, 9.556 m² cross-section), Stokes–Einstein at 30 °C from a hard-sphere
   radius of **0.3878 nm**, Fickian penetration over a 24 h batch → accessible volume **0.0753 m³**,
   **f_avail = 7.528 × 10⁻⁴, i.e. 0.075% of inventory** — immediately labelled "deliberately severe"
   and "better read as a boundary-layer length scale", used "only to construct a floor". Result:
   **1.0 mol 2-HBP per mol DBT imported, no growth penalty — metabolism does not bottleneck
   uptake**, so the mass-transfer gains carry through undiminished.
3. **Redox ceiling and formate co-feeding.** Forcing DszB flux and re-maximising biomass with the DBT
   bound removed, so any limit is metabolic: **NADH-limited ceiling 9.80 → 12.30 mmol gDCW⁻¹ h⁻¹
   (+25.5%)** with formate at **17.3 mmol gDCW⁻¹ h⁻¹**; unburdened growth **0.5842 → 0.7207 h⁻¹
   (+23.4%)**; growth cost per mmol dsz **−0.0584 → −0.0577 h⁻¹**; exchange **0.140, 0.140, 0.145
   mmol dsz per mmol formate** ("a constant exchange rate over a threefold range"), **saturating near
   13.0 above 25 mmol, where something other than reducing power becomes limiting**, ≈**57% of the
   stoichiometric maximum**.
**A consolidated Model Limitations section with seven named failure modes**, each tied to the result
it weakens: binary DBT/n-hexadecane feed vs real competitive partitioning (and they point at *their
own* dilbit E24 = 20% as the observed instance); rhamnolipid cytotoxicity at the g L⁻¹ titres the
model wants; **MSR substituted from pyrene (0.0075) because no DBT/rhamnolipid MSR exists**,
justified by log Kow (DBT 4.38 < pyrene 4.88) and labelled a conservative lower bound; Sh = 2 as a
floor, so real k_L exceeds it; **biomass rounded down from the literature 0.505 to 0.4 gDCW/OD**,
with the direction of the resulting bias stated; **the 12.30 ceiling is a µ = 0 figure and µ = 0
means washout** in a real chemostat; and FBA's unconstrained formate→NADH conversion requires a
**heterologous NAD⁺-dependent FDH** that KT2440 largely lacks.

## PROCESS DESIGN / TEA / LCA — a chemical-engineering layer most iGEM teams skip
Three plant sections: feed prep (chemostat holding the culture at steady state, heat to **32 °C**,
~1 atm, air blower), a **bubble column reactor** (balances dissolved oxygen against mixing), and
**hydrocyclone** separation (low energy duty on oil/water). **Stainless steel throughout**, and the
reason is sourced to a conversation — **microbially influenced corrosion, raised by Dr. Larter**.
Safety is a **P&ID plus a HAZOP to IEC 61882** over four nodes (reactant mixture, air supply,
bioreactor, outlets), scored on **OSHA risk matrices** with thresholds written down (≥12 intolerable,
6–8 undesirable).
**TEA** by **Turton's module costing method**, log₁₀(C°p) = K₁ + K₂log₁₀(A) + K₃[log₁₀(A)]²,
escalated **2001 → 2018 USD via CEPCI 397 → 603.17**, bare-module factors with **F_p = 1 everywhere
because the process is near-ambient**, rolled up as **C_GR = C_TM + 0.50·ΣC°_BM,i**; OPEX by the
percentage factors of Guobin et al. Drivers named: **cooling water 13,608 m³/h**, **1.2 MW aeration
blower**, direct operating cost **$20.8M/yr**, NPC **$55.0M/yr = $4.57/bbl at 13.75 million bbl/yr**
against **$9.52/bbl for HDS**, where **hydrogen is 63% of HDS direct operating cost with no
biological counterpart**. **The honest framing is in the method, not a footnote: because current BDS
kinetics are too slow for industry, they set BDS residence time equal to HDS's (2.34 h) and state
outright that this is what BDS would cost *once* kinetics improve.**
**LCA** in **openLCA 2** with the **openLCA LCIA Methods package v2.8.2**, **IPCC 2021 GWP100**,
functional unit **1 bbl (0.159 m³)**, no allocation or cut-off. The inventory was **generated by a
parameterised Python script using olca-schema rather than entered by hand**, with fixed flow
identifiers, "so we can update any assumption, for example when the TEA figures change, and
re-import the model without rebuilding it". Per-barrel inventory published: 0.318 m³ culture water;
**0.284 kg S removed → 1.51 kg 2-HBP + 0.71 kg sulfite**; 44.7 m³ air and 2.64 MJ electricity from
adiabatic compression at 1 vvm, 40 kPa discharge, 60% efficiency — **noted as ~9× the oxygen
respiration needs**; 40 MJ autoclave heat; 9.65 kg medium chemicals itemised; **4.7 kg biogenic CO₂
recorded in the inventory but excluded from GWP**, with the convention named. Emission factors
tabled (**Ontario grid 30 g CO₂e/kWh**, natural gas 56.1 kg CO₂/GJ at 85% boiler efficiency, fuel oil
77.4, **SMR hydrogen 10 kg CO₂/kg H₂**). Result **BDS 2.67 vs HDS 8.73 kg CO₂e/bbl (−69%)**, and the
attribution becomes an engineering instruction: **99% of the BDS footprint is autoclave heat**, while
aeration electricity is ~1% *only because Ontario's grid is clean*, so **heat recovery, not
electricity, is the next lever**. Culture-medium production emissions are **declared missing from
this version**.

## Named failures, negative results, stated caveats
- Golden Gate from circular holding plasmids: **empty vector only**.
- Electroporation of *P. putida*: **never worked**, ARC errors, five named remedies tried.
- **KT2440's intrinsic ampicillin resistance** invalidated selection for every AmpR pTwist construct.
- **DszC insolubility is unsolved** — IPTG titration, riboflavin, BugBuster and six designed point
  mutations all failed. frm and LacI are also insoluble, and the Alternative Platform page states
  plainly that **flavin reductase expression still needs optimisation before cofactor regeneration
  can work** — which undercuts the pathway's fourth step.
- **No thermostability gain**; **DszC mutants never assayed** because soluble DszC could not be
  purified.
- **Only 8 of 24 library constructs assembled, 7 transformed, 1 active.**
- **The one positive activity result is explicitly downgraded to qualitative**, with the calibration
  artefact that caused it published (intercept 0.1374, LOD < signal < LOQ).
- **LC-MS never validated**; instrument down ~6 weeks; APCI untried.
- **Rhamnolipid fails on the real feedstock**: E24 ≈ 20% in dilbit vs ≈95% in diesel.
- **BG17 and BG37 are not distinguishable** in KT2440, contradicting their published ranking.
- Dry lab: **G26Q's interface clash was invisible to every tool used**; DszC tier-1 ΔΔG values
  "better interpreted as neutral"; **MSR is a pyrene substitute**; the 12.30 mmol ceiling is a
  zero-growth number; Arms D and F are two runs per condition; contamination checks cannot exclude
  the model's weights.
- **Unfinished editorial placeholders are still live on the published wiki**: Results contains
  **"Discuss mutation found."** after whole-plasmid sequencing of GGA6 and **"As shown in Figures X"**;
  Proof of Concept cites **"Appendix X"** three times. A mutation in the final construct is therefore
  acknowledged but never described.
- Naming slips worth noting before citing them: **the Design page calls the vector "pBBR1MCS-1"**
  (as does Figure 7's caption on Results) while every other page, the Registry entry and the abstract
  say **pBBR1MCS-2**; the flavin reductase is **frm** in the wet lab and **DszD** in the model and
  library pages.

## Parts and protocols
**32 Registry parts submitted as one collection**, ordered on the page "in the order a team would
build with them". Vector **BBa_26NZYISB** (Golden-Gate-ready pBBR1MCS-2; pBBR1 oriV 1500–2271 rev,
Rep 837–1499 rev, NeoR/KanR 3751–4545 fwd); promoters **BBa_26PVZX45** (BG17), **BBa_26MADWRY**
(BG37), **BBa_264JISZZ** (BG28); reporter **BBa_26RFOU0G** (mScarlet-I); CDSs **BBa_26XEH6RY**
(FLAG-dszA), **BBa_269R6F1W** (FLAG-dszB, Y63F), **BBa_26XEW0BI** (HIS-dszC, W327C + A101K),
**BBa_261JDKYV** (HIS-frm), **BBa_26QFH88M** (HIS-lacI, two silent mutations removing BsaI sites),
**BBa_26GSJB34** (LacI repressor unit); IPTG-inducible cassettes incl. **BBa_26E94L96** (dszA) and
**BBa_26TGUWW1** (dszB); and the whole pathway as one inducible assembly, **BBa_26DW4JXK**. Note
**BG42 is characterised and used but has no part ID on the page** — only BG17/BG37/BG28 are
submitted. **28 protocol PDFs** published by category, including the two novel ones (chemically
competent *P. putida*; *P. putida* heat-shock transformation) and a standalone handbook page.

## Workflow signature
Baseline-then-tiers engineering, where every claim is stated at the weakest form the evidence
supports. They build a deliberately non-industrial baseline (IPTG-inducible, and they say why it is
not viable), attack one named limitation per tier, and treat the missing chassis toolkit — vector,
promoter set, transformation protocol — as prerequisites to be closed and published before the
science. The distinguishing habit is that failure analysis is built into the method rather than
appended: a one-tube colony-PCR proxy before paying for sequencing, cheap expression fixes exhausted
before protein engineering, two deliberately unlike ΔΔG predictors so agreement means something,
pass thresholds derived from the wild type's own fluctuations, a model-free adversarial suite that
found a real bypass in their own API, and a decomposed mass-transfer gain with the sweep that shows
where it evaporates. And when the one positive activity number came out stoichiometrically
impossible, they printed the number, named the calibration artefact, and downgraded their own claim.
