# UALBERTA — gleyeco (Therapeutics, Canada) — Top 10 Undergrad 2026
Title: gleyeco — a glycan-targeting ocular drug delivery platform
Wiki: https://2026.igem.wiki/ualberta
GLARE software: https://gitlab.igem.org/2026/software/ualberta/software-glare.git (Python package 0.2.0, Python ≥3.10)

## Core idea
Dry eye disease has a pooled global prevalence of **34.6%** (review of 119 studies, >15 million
participants) and **21.3%** of Canadian adults (~6.3 million). The blocker is not the drug but
residence time: blinking, tear turnover and nasolacrimal drainage clear topical protein in minutes.
gleyeco turns the eye's own **glycocalyx into an anchor**: a modular fusion protein carrying
(i) the **Galectin-3 carbohydrate-recognition domain (CRD)** targeting the mucin O-glycan
**Core 1 (Galβ1-3GalNAc)**, with **LacNAc (Galβ1-4GlcNAc)** named as the off-target to beat,
(ii) **two tandem copies of HABpep** (12-mer `GAHWQFNALTVR`, from phage display) binding
hyaluronic acid, and (iii) a cargo — **IL-1RA** as proof-of-concept therapeutic or **mScarlet** as
the measurable stand-in. Delivery is a hydrogel contact lens with HA built into the network as a
reversible anchor for HABpep.

## WET LAB workflow — one library, two parallel series, Design-Build-Test-Learn per step
The project is organised as **6 "operations" and 35 engineering cycles** (GLARE, CLEAR, InSiGHT,
VOIR, I-SPY, HOPE); CLEAR is the 14-cycle wet-lab spine. Protocols are numbered SOPs in five
bundles: **1.x microbiology** (1.1–1.6, incl. 1.5 His-tag IMAC, 1.6 denaturing IMAC), **2.x
molecular** (2.1–2.17, incl. 2.5 Gibson/NEB HiFi, 2.8 whole-plasmid Nanopore, 2.17 Bradford),
**3.x binding** (3.1 ex vivo *Xenopus* retention, 3.2 Gal-3/ASF, 3.3 HMW-HA, 3.4 PEAQ-ITC),
**4.x equipment calibration** (4.1 pH probe, 4.2 micropipette), **5.x hydrogel** (5.1 synthesis,
5.2 diffusion assay).
1. **Architecture before DNA.** Candidate domain orders were built and run through **AlphaFold 2**.
   Galectin-3 was **truncated to the CRD** because its N-terminal domain drives pentamerisation and
   is tied to tumour progression. Team-designed linkers gave poor AlphaFold predictions and domains
   that did not separate → rule adopted: **use linker sequences already published**, giving
   (GGGGS)₃ flexible, (EAAAK) rigid and GGGS short linkers (all registered).
2. **One backbone for everything**: **pET-28b(+)** (~5151 bp; T7, IPTG, KanR, 6×His), chosen for
   availability plus inducible expression and one purification tag for the whole library.
3. **Library designed for subtraction, not for the finished drug.** 15 architectures in three
   tiers — single domains / single-anchor fusions / dual-anchor fusions — each built **twice**, once
   with mScarlet and once with IL-1RA, so any binding behaviour can be attributed to the targeting
   domains rather than the payload. **12 assembled in-house, 1 bought synthetic from TWIST
   (mScarlet_HABpep₂_Galectin-3), 2 never built** (mScarlet_CD44₂_Galectin-3,
   IL-1RA_CD44₂_Galectin-3). Two iterations: **V1 = tandem CD44, V2 = tandem HABpep**, everything
   else held identical.
4. **Cloning.** gBlocks (IDT) + PCR overhangs → **Gibson assembly** → *E. coli* **DH5α** → colony
   PCR (NEB Taq) → QIAGEN miniprep → **whole-plasmid Nanopore sequencing (MBSU)** → transform
   **SHuffle T7 Express**. Expected amplicons published per construct: mScarlet 796 bp, IL-1RA
   527 bp, CD44 650 bp, Galectin-3 464 bp, mScar-CD44 1,388 bp, mScar-Gal3 1,202 bp, IL-1RA-CD44
   1,154 bp, IL-1RA-Gal3 974 bp, HABpep₂ 126 bp, HABpep₂_mScarlet 867 bp, IL-1RA_HABpep₂ 627 bp,
   IL-1RA_HABpep₂_Galectin-3 1,092 bp — with the note that **Gibson primers add ~40–50 bp at each
   end**, so bands legitimately run larger than literature sizes. TOP10 cells and electroporation
   were tried on the two failed three-domain constructs; one construct (IL-1RA–Galectin-3) was
   Sanger- rather than Nanopore-verified.
5. **Mutant panel on one scaffold.** The ten Galectin-3 variants α–κ were built as
   Galectin-3_mScarlet fusions, so **all eleven share a single primer pair and a single expected
   amplicon (≈1,202 bp)** and the whole panel screens on one gel (with a wt gBlock as +CNTL; one
   lane flagged as an accidental loading duplication). They state explicitly that a correctly sized
   band says nothing here, because variants differ only by point substitutions — **sequencing is the
   gate**.
6. **Expression.** CD44₂ was undetectable in the soluble fraction, recovered only after
   **urea solubilisation** (Western blot band at **22 kDa**) → inspection showed the CD44 fragment
   was a **truncated transmembrane region**, not the soluble HA-binding domain. Optimisation:
   IPTG at **0.5 / 1.0 / 2.0 / 3.0 mM** (strongest at 3.0 mM), **LB vs TB** (TB stronger). Final
   condition for everything: **TB, induce at OD₆₀₀ ≈ 0.8, 3.0 mM IPTG, overnight at 20 °C, 200 rpm,
   500 mL cultures** (~5 g wet pellet). Coomassie gels carry a **+CNTL of α-1 antitrypsin at
   45 kDa** and a water −CNTL; pink pellets on a UV transilluminator are used as a first expression
   check.
7. **Purification, decided by comparison not by default.** Gravity Ni-IMAC → **5 mL Cytiva HisTrap
   HP on FPLC** → FPLC enriched the targets but **kept substantial background even at higher
   imidazole stringency** → FPLC fractions **re-purified on gravity columns** came out cleaner →
   decision: gravity becomes a dedicated cleanup step and the **primary** method for the mutants.
   HABpep alone (≈4.35 kDa) is below the gel's resolving range and is reported as not visible.
8. **Quantification.** Bradford (**Coomassie G-250, A₅₉₅**) against a **BSA standard curve**,
   elutions 3 & 4 pooled, reported as **both µg/mL and µM** from theoretical MW (ExPASy) — because
   the library spans a wide MW range and **the two units rank it differently**. Galectin-3 alone
   **≈4991 µg/mL = 309.9 µM** (highest); Galectin-3_mScarlet **361 µg/mL = 8.3 µM** (mid-library by
   mass, **lowest by molarity**); mutant panel on the ≈43.7 kDa scaffold: **α (A34Q)** and
   **γ (N54S)** above wt, while **ζ, θ, ι, κ fell to ≈⅓ of wt (1.9–2.8 µM)** → stated conclusion
   that 1–2 substitutions are tolerated and **mutational load costs recoverable yield**.
9. **Plate binding assay 1 — asialofetuin (ASF).** Opaque black plates coated with ASF, blocked
   with BSA, mScarlet constructs at five loads (0.125–2 µM), overnight incubation, wash, read on a
   **VICTOR Nivo (λex 580 / λem 625)**. Three-domain fusion retention above both controls rose from
   **5-fold at 0.125 µM to 19-fold at 1 µM**; **Galectin-3_mScarlet was not significantly different
   from mScarlet alone**, which they attribute to removing the oligomerisation domain rather than to
   a dead CRD, and name as a limitation of the assay. n = 3 wells, single plate, Tukey HSD
   (** p < 0.01), `n.d.` printed where the post-wash value was zero after background subtraction.
10. **Mutant ASF assay.** wt and six variants retained **0.1–1.4%**; **γ and Δ dropped to the
    mScarlet baseline** (read as possibly improved selectivity, since ASF is not the design target);
    **ε at 0.25 µM gave 97% retention with SD 0.048** and is printed as an outlier that "warrants
    further investigation before any conclusions are drawn". Mutants are reported in **raw RFU**
    because protein was too scarce to run per-construct calibrations.
11. **Plate binding assay 2 — HMW hyaluronic acid.** mScarlet set a concentration-independent
    baseline of **2.6%** (non-specific adsorption), used as the threshold for everything else.
    **HABpep₂_mScarlet reached only 1.1–1.7× baseline, not significant**; the three-domain fusion
    retained **8.3–12.9%** (≈3× HABpep₂_mScarlet, 3–5× baseline) and fell from **12.9% at 0.5 µM to
    8.3% at 2 µM**, read as saturable binding. Unequal group sizes (mScarlet n = 3, HABpep₂ n = 5,
    fusion n = 5) → **Tukey–Kramer used in place of Tukey HSD**, and said so.
12. **ITC (MicroCal PEAQ-ITC), 9 titrations including a buffer-only control.** 150 µL protein at
    **5 µM** in the cell, 60 µL **Core 1 glycan at 50 µM** in the syringe, **13 injections
    (1 × 0.4 µL then 12 × 3 µL)**, reference power **10 µcal/s**, **25 °C**, pH 8. "ITC buffer" =
    **352.9 mM imidazole, 35.3 mM HEPES, 141.2 mM NaCl, 14.7 mM ammonium bicarbonate**, matched by
    **dilution rather than dialysis** (no dialysis equipment). The full therapeutic gave
    **Kd ≈ 298 nM** (figure fit: **Kd 288 nM, n = 0.28 sites, ΔH −81.5 kcal/mol**) against a
    literature **45 µM** for Gal-3C–Core 1 — **two orders of magnitude too strong, so they call it
    not credible**. The **Galectin-3 positive control gave no interpretable binding**, and even the
    buffer-only control misbehaved. Diagnosis obtained from **Dr. Badmalia (MolScreen)** and
    **Dr. Di Trani**: buffer mismatch, buffer components with high heat of ionisation, and
    co-purifying contaminants → fixes named as **dialysis, simple low-ionisation buffers, and
    size-exclusion chromatography**. The whole ITC arm is reported as a failed measurement.
13. **Ex vivo *Xenopus laevis* eye wash-off.** Eyes **donated by the Carr Lab from animals
    euthanised for other work** (no animals killed for this experiment); all handling by trained
    Carr Lab members; **a non-affiliated third party relabelled the groups "Treatment 1, 2, …" to
    blind application**; one eye per treatment and **never both eyes of one frog**. Procedure:
    pre-image for ocular damage → dropwise application → post-treatment image → **15 min incubation
    → 3 washes of 100 µL PBS with 1 min between** → post-wash image. **Phoenix imager, mCherry
    channel (ex 587 / em 610)**; ImageJ with **Enhance Local Contrast (block 127, 256 histogram
    bins, max slope 3.00), brightness 5–80, red channel only, standardised ROI 100.470**;
    **CTCF = (integrated density − background) × (mean red intensity − background)**;
    **% retention = post-wash CTCF / post-treatment CTCF × 100**; n = 3 eyes, Tukey HSD p < 0.05.
    Result: **mScarlet 0.002%, mScarlet_HABpep₂ 10%, mScarlet_HABpep₂_Galectin-3 9%,
    mScarlet_Galectin-3 2.89%, variant α 0.675%** — i.e. **HA binding, not glycan binding, carried
    retention**, and the α mutation made it worse. They immediately disqualify their own comparison:
    applied concentrations ranged **50–2932 µg/mL** and were never matched (α's higher post-wash
    CTCF, **125.832 vs 4.067**, is an artefact of 610 vs 50 µg/mL), n = 3 with large variance, and
    the fix is stated (standardised loads, n = 5, longer incubation, harsher washes).
14. **Hydrogel fabrication.** Thermal crosslinking ruled out before any bench work (70–100 °C would
    denature the protein; room-vs-body-temperature behaviour would not transfer). First choice was
    photocrosslinked **PEGDA + MeHA** with a **riboflavin vs Irgacure 2959** photoinitiator
    comparison (FMN noted as the soluble riboflavin form) — abandoned because **PEGDA and MeHA could
    not be obtained**, and what they had (unfunctionalised PEG + HA + riboflavin) **did not gel**.
    Pivot to ionic alginate/Ca²⁺, iterated as a published question → tried → outcome → decision
    table: 1% alginate alone (10 mM CaCl₂) clear and strong, poor texture; **10% PEG + 1% alginate**
    held its shape; 10% PEG + 0.5% gellan gum flaked then gelled but less clear; **10% PEG +
    1–10% xanthan gum never gelled → dropped**; 5 vs 10 mM CaCl₂ (5 mM had better texture but ions
    diffused too slowly and **large gels did not crosslink in the middle** → keep 10 mM); 1% vs 3%
    alginate (3% weak → keep 1%); **10 mM CaSO₄ gave the stiffest smoothest gel but left visible
    undissolved chunks → dropped**; 5 mM CaEDTA did not gel; **+0.5% HA stronger even though HA is
    not crosslinked**; **+2–3% CMC** (on an adviser's suggestion) fixed brittleness. Final physical
    formulation: **1% w/v alginate, 2% w/v CMC, 10% w/v PEG 4000, 0.5% w/v HA, 10 mM CaCl₂** — and
    the page states plainly that it **"still needs full characterization"**. HA's role is described
    as a semi-interpenetrating network, not an inert filler.
15. **Diffusion assay (built in-house, SOP 5.2, adapted from Adeoye & de Alba 2025).** Eight
    formulations (**B, L1–L4, Y0.5, Y1, Y2**, HA fixed at 0.5%) crosslinked as columns in
    microcentrifuge tubes at **50 mM CaCl₂**, **200 µL of 0.5 µM mScarlet-HABpep** layered on top,
    then **five 0.4 cm slices read at 1, 2.5, 5 and 8 h** with blank subtraction. The working
    formulation was too thick to assay; raising crosslinker to **0.5 M CaCl₂ over-crosslinked and
    shrank the gels away from the protein**, so the polymer content was lowered and a mini
    centrifuge used to force consistent gel/crosslinker contact. Result: protein stayed **within the
    top 0.8 cm in every gel at every time point**, slices 3–5 sat **within ±0.05 µM of zero** (which
    is how they explain the slightly negative readings), and nothing reached the bottom in 8 h.
    **L1 and Y0.5** were carried forward as the only two whose concentration-weighted average depth
    increased monotonically. Caveats printed: **one run per formulation**, protein appearing in
    slice 2 within 1 h is not consistent with diffusion (suspected **seepage along the gel/tube wall
    or carry-over during slicing**), and because the probe carries HABpep and the gel contains HA,
    the measured transport is confounded by the very binding they want — the no-HABpep / no-HA
    controls are named as still undone.

## MEASUREMENT — how a number was allowed to count
- **Per-construct calibration, not a shared curve.** Every mScarlet construct got its own serial
  dilution on the VICTOR Nivo, buffer-only background subtraction and linear regression; retained
  protein = RFU ÷ fitted slope, in µM. The calibration table is itself used as evidence: slopes of
  **7–9 × 10⁶ RFU/µM** for mScarlet, Galectin-3_mScarlet and the three-domain fusion show fusion
  does not quench mScarlet, which licenses cross-construct comparison. **HABpep₂_mScarlet's
  y-intercept of +7 × 10⁶** is flagged as a background problem rather than quietly used.
- **Dual units with a stated reason** (mass vs molar rank the library differently; downstream
  assays are molar), and a note that Bradford values are **standard-curve estimates and
  sequence-dependent**.
- **Baselines as thresholds**: the mScarlet control's 2.6% non-specific adsorption on HA *defines*
  what counts as binding; `n.d.` and negative values are printed, not hidden.
- **Blinding** on the only animal-tissue experiment, and the statistical test chosen to fit the
  design (Tukey–Kramer for unequal n).
- **Decision rules on computed numbers**: ΔG = RT·ln(Kd) with R = 1.985 × 10⁻³ kcal·mol⁻¹·K⁻¹ at
  298.15 K, so **1.4 kcal/mol ≈ 10× in Kd**; Glide XP reproduces affinities to **~2 kcal/mol**, so
  **differences ≤1 kcal/mol between mutants are explicitly declared meaningless**; FoldX is cited as
  differing from experiment by **1.0–1.78 kcal/mol**; selectivity reported as a coefficient
  **K_sel = Kd,off-target / Kd,on-target**.
- **Two assays they had to build themselves**: the plate-based fluorescence lectin–glycan binding
  assay (their stated wet-lab contribution: ASF-coated black plates, per-construct standard curve,
  buffer and ASF-coated blanks defining background and detection limits, output as both bound µM and
  % recovery, validated with a non-binding mScarlet control) and the sliced-column hydrogel
  diffusion assay.
- **Numbering convention declared**: the modelling pages use CRD numbering (α = **A34Q**) while the
  Registry parts use full-length Galectin-3 numbering (α = **A146Q**) — e.g. κ is
  R32E/H46R/N48W/R50H/E53M/R74E = R144E/H158R/N160W/R162H/E165M/R186E (BBa_26ZS7QR0).
- Registry: 17 basic parts, 23 primers and 20 composite parts, e.g. Galectin-3 CRD
  **BBa_26MGKANO**, HABpep **BBa_26I0SKGO**, mScarlet **BBa_269MHXST**, IL-1RA **BBa_26I7YX4I**,
  (GGGGS)₃ **BBa_26CXWMD4**, EAAAK **BBa_26DCC8VC**, IL1RA-HABpep-Galectin-3 **BBa_26FU0703**.

## DRY LAB workflow — five named pipelines, each handing a decision to the next
| # | Operation | Tooling | Decision it produced |
|---|-----------|---------|----------------------|
| 1 | **GLARE** — glycan/lectin selection | Python package 0.2.0, CLI | Target = Core 1 on the eye; off-target = LacNAc |
| 2 | **InSiGHT** — in-silico mutagenesis | FoldX → Glide XP + HADDOCK → GROMACS | 117,732 mutants → **10 to the bench** |
| 3 | **VOIR** — valency | valentBind `polyfc` | Divalent, linker **(GGGGS)₆₋₁₆** |
| 4 | **I-SPY** — chassis yield | iBB1018 + COBRApy FBA | Operating window; bottleneck = shikimate pathway |
| 5 | **HOPE** — delivery | Canal–Peppas + AlphaFold2/US-SOMO; 1-D Python ODE, COMSOL planned | Mesh size vs protein; release model unvalidated |

**GLARE.** Filters a database of **>50,000 catalogued glycan sequences** down to **134 unique
ocular structures** (cornea, tear film, lacrimal gland), then answers three questions in order: is
the target there, does Gal-3 bind look-alikes elsewhere, does the target survive disease. Its one
real engineering idea is that **it never matches by name** — nomenclature differs across databases,
so it does a **motif-level structural pattern search**, and the **Tn antigen (Core 1 minus its
galactose) is used as a negative control** to show Gal-3 is not binding indiscriminately. Disease
is encoded as a **literature-derived glycan signature** (the database has no dry-eye labels), and
motifs are tested with **Welch's t-test and Fisher's exact test under Benjamini–Hochberg
correction**; the published volcano plot names the exact command that made it
(`python3 main.py --disease-compare dry_eye`), with Core 1 at log₂FC > 0 and adjusted p < 0.05.
The organ panel is lungs and kidneys plus three cancers (cervical, kidney, respiratory): the eye
sits on an **O-glycan axis**, the organs on an **N-glycan/core-fucosylation axis**, and the
**cervix shares the eye's axis** and is named as the tissue that would need direct testing.
Limitations are itemised: database coverage, **"presence is not abundance"**, binding inferred from
published microarray data rather than their own protein, a tissue panel that is not the body, and
LacNAc selectivity still unmeasured.

**InSiGHT** — five steps, with the search space arithmetic published: the CRD is **~138 residues**,
so all single substitutions = **2,622**, all doubles **>3 million**; they restrict to substitutions
(no indels) and to **1–3 simultaneous mutations**. Sites come from three sources, not one:
literature H-bonding residues (**H46, N48, R50, N62, W69, E72**, plus nearby polar R32, E53, R74);
a **Clustal Omega MSA (EMBL-EBI) of all mammalian galectins** — which **excluded W69 and N62 as
perfectly conserved** and licensed non-polar substitutions at the poorly conserved E53; and a
**PyMOL structural alignment of the 12 galectins with structures (1–5, 7–11, 13, 14, 16)** against
Gal-3, which found the **E53–V58 loop** rearranged in Gal-1 (rejected as a copy target because the
change includes an insertion) and splayed in Gal-8, and spotted that **I33→F in Gal-8 pushes R32
into the pocket**. Four mutation sets plus sets generated while testing the pipeline total
**117,732 distinct mutant structures**. Build: **FoldX RepairPDB then BuildModel** on PDB **3ZSJ**
(X-ray, **0.86 Å**, lactose-bound), chosen over AlphaFold2 because it is cheap from an existing
structure and returns a stability estimate; a Python script enumerates combinations and splits them
into batches, which was **2–3× faster than serial** and **~5× faster on rented RunPod cloud GPUs**.
The ligand is not a free sugar: a **MUC1 fragment from its AlphaFold prediction**, glycosylated at
**Thr86 with ReGlyco** using GLYCAM-Web sugars (**GlyTouCan G00031MO** Core 1, **G00055MO** LacNAc).
Scoring is deliberately redundant — **Schrödinger Glide XP (rigid receptor) and HADDOCK (flexible,
information-driven) independently**, then **GROMACS MD** on the docked complexes for the binding
energy — and the rule is stated: **only mutants supported by both dockers advance**. The wild type
predicted **−4.21 kcal/mol (Core 1) / −6.21 (LacNAc)** against ITC literature of −4.92 (248 µM) /
−6.17 (30 µM) and −5.9 (47 µM) / −5.92 (45.6 µM) elsewhere. **10 mutants went to the bench**
(α A34Q; β N48K; γ N54S; Δ R71L; ε N31Y+I33P; ζ D36N+V58H; η R50C+E53G; θ H46Q+E53R+R74H;
ι E53A+N54S+N55T+R56A; κ R32E+H46R+N48W+R50H+E53M+R74E), chosen to spread across positions and
mutation counts **"so that wet lab data would provide the most information possible about the
model"** — i.e. the panel is designed to discriminate between HADDOCK and Schrödinger, not just to
win. 10 cloned → 8 purified (β, η dropped) → 3 to ITC (α, γ, Δ, picked by yield) → 1 to the frog
eye (α).

**VOIR.** Uses **valentBind's `polyfc`** and justifies the choice by abstraction level: particle
reaction-diffusion (eGFRD, ReaDDy 2) would resolve geometry, but **receptor density is itself
unmeasured in the literature**, so a finer model would only add unconstrained inputs. Rtot is
constructed from four literature factors and swept rather than asserted: MUC1 per cell from a 3A5
antibody epitope count (3 × 10⁴ OVCAR-3 cells → ~1 × 10¹⁰ sites → ~3.3 × 10⁵ epitopes/cell →
**~5.5 × 10³ MUC1/cell**, flagged as an **upper bound** because OVCAR-3 overexpresses), O-glycan
sites per MUC1, Core 1 fraction (**~64% α2-6-sialyl Core 1**), and a Gal-3 accessibility fraction of
**0.5 (range 0.2–0.7)**. Fixed inputs: per-arm **Kd = 47 µM**, **L0 = 100 nM**, valency free over
1–5 (capped by the removal of the pentamerising N-terminal domain), Rtot scaled **1 × 10⁵ to
6.34 × 10⁶ Core 1/cell**, inter-epitope distance **d = 4 nm (range 2–5)**; linkers started at
(GGGGS)₁/₃/₅ and were then **swept continuously from 5 to 150 residues**. Outputs: optimum at
**n = 47 residues**, **divalency 31-fold beyond additive**, **no crosslinking at all below linker
length 10**, and a usable recommendation of **(GGGGS)₆₋₁₆ (within 10% of optimum)** with the note
that too long is far safer than too short. They also correct their own axis: for a divalent
construct the additive floor of the avidity ratio is **2, not 1**, so only >2 is real crosslinking.
Stated plainly as untested in vitro.

**I-SPY.** A genome-scale metabolic model of the actual expression strain, built from **iBB1018**
(a published BL21(DE3) reconstruction) because **SHuffle T7 Express is BL21-derived and no SHuffle
model exists**; BiGG namespace so identifiers map unchanged; curated and simulated in **COBRApy**
with a hand-added fusion-protein synthesis reaction whose amino-acid demands are read off the
**363-aa** construct, each precursor checked and blocking steps gap-filled. A weighted
biomass-vs-secretion sweep produced a **Pareto frontier and an operating window** instead of a
single yield number, and the bottleneck is named: the construct is **13.5% Phe/Tyr/Trp/His**, so the
**shikimate pathway** is the route to measure. Honesty is built in: **SHuffle's trxB/gor knockouts
cannot be represented in stoichiometric FBA, so wild-type bounds were kept**; some gap-filled
reactions **"lacked clear biological justification and were flagged for review rather than
trusted"**; and the **validation step was designed but never run** (no yield data this season) and
handed to future teams as a ready-to-run plan.

**HOPE**, two models with different maturity. (a) *Mesh size and diffusivity*: a four-step chain
**φs → M_c → ξ → D_gel/D_free** on **Canal–Peppas** (derived via Peppas–Merrill from
Flory–Rehner), with the whole parameter table printed and sourced (f = 4, l = 0.154 nm, C∞ = 4.0
PEGDA / 12.0 MeHA, λ = 1, M_c = 4000 / 1060 g/mol, M_o = 44.05/3 ≈ 14.7 g/mol). Swelling is
**logarithmically interpolated from Levin et al.'s 2.03 and 5.85 kDa PEGDA data to 4 kDa**
specifically to match the PEG 4000 they used at the bench, and the interpolation equation and the
nine source data points are published. Hindered diffusion is
**(1 − r_h/ξ)² · exp(−Y·φ_p/(1 − φ_p))** with **Y = 1 declared a fitting parameter awaiting bench
data**; D_free from Stokes–Einstein at **310.15 K**. The hydrodynamic radius was upgraded from a
**BSA placeholder of 3.6 nm** to **3.398 nm**, computed by **AlphaFold2 structure → US-SOMO GRPY
method** — and they say which figure is which. Results: **ξ falls 17.5 nm → 10.3 nm from 5% to 25%
w/v PEGDA**, with a sensitivity band for a **±30% error in swelling** that they describe as wide
enough to make swelling the single input most worth measuring. A dedicated section explains **why
the model is written for a gel they never built**: Canal–Peppas needs a defined M_c, and alginate's
Ca²⁺ "egg-box" junctions are multi-chain and variable, so no single M_c exists — hence they
measured the alginate gel's diffusion directly instead and kept the theory for PEGDA/MeHA.
(b) *Ocular retention*: an **OpenFOAM** attempt was abandoned because corneal absorption had to be
written as a **custom C++ boundary condition** that never ran reliably; **COMSOL Multiphysics** is
named as the planned platform but **not built**. What exists is a 1-D finite-volume Python model,
**∂C/∂t = ∂/∂z(D_eff ∂C/∂z) − k_clear·C** with **k_clear = 0.60 h⁻¹** (called "a first-pass
assumption rather than a measured clearance constant"), implicit Euler at a **300 s** step whose
convergence they say still needs checking, over four layers — **lens 100 µm, tear film 5 µm,
composite cornea 555 µm, aqueous humor 3 mm** — with D_eff values borrowed from Park et al. and
explicitly labelled as coming from **intravitreal ranibizumab, not topical lens release**.
Baseline hydrogel state: 2.03 kDa PEGDA at 18.4 wt%, **J = 7.6, φs = 0.132, ε = 0.868**;
**D₀ = 9.68 × 10⁻¹¹ m²/s** at 310.15 K and µ = 0.691 mPa·s. Most tellingly, **the model was used to
disqualify their own wet-lab data**: free protein should travel only ~1 mm in 1 h, so protein found
in deeper slices cannot be diffusion — therefore the diffusion assay **cannot yet yield a D_gel**
and the model still runs on literature values. No release-vs-time curve exists; solving Fick's
second law for the lens geometry is listed as the next step, along with TFOS DEWS II parameters
(tear film **2–5.5 µm**, turnover **16 ± 5%/min**, **2–3×** evaporation in DED) that are
deliberately **not** yet frozen into a healthy-vs-DED table.

## Named failures, negative results and things declared unvalidated
- **CD44 was the wrong part, twice over**: the two three-domain CD44 constructs never assembled, and
  the fragment they had cloned turned out to be the **insoluble transmembrane region**; a parallel
  literature review added that CD44 is a multifunctional cancer-associated receptor, i.e. **a
  liability in a therapeutic**. Replaced by HABpep₂ (**126 bp, ~⅕ the length**), after which the
  equivalent three-domain construct cloned successfully.
- **mScarlet_HABpep₂_Galectin-3 was never cloned in-house** and was bought from TWIST.
- **β and η mutants dropped** (aberrant SHuffle transformation, inconclusive westerns, time).
- **The entire ITC dataset is reported as unusable**, including the positive and buffer-only
  controls, with the three causes and three fixes named.
- **Galectin-3_mScarlet was indistinguishable from the mScarlet control on ASF** — the glycan anchor
  did not demonstrate itself in isolation.
- **HA binding beat glycan binding** on the frog eye, and the engineered α mutant retained *less*
  than wild type (0.675% vs 2.889%) — the opposite of the design intent.
- **Alanine-scan predictions declared low-confidence** with four mechanistic reasons
  (H46A/N48A/R50A/N62A scored −4.982 vs WT −4.21 kcal/mol).
- **The pipeline disagrees with itself**: γ scored **−6.495** and **−3.84 kcal/mol** in two separate
  HADDOCK runs; printed, with repeats named as necessary.
- **Xanthan gum never gelled; CaSO₄ and CaEDTA dropped; PEGDA/MeHA never obtained.**
- Explicitly unvalidated: VOIR's linker optimum (never tested in vitro), I-SPY's yield prediction
  (validation plan unrun), HOPE's release model (no release curve, Y = 1 unfitted, D_gel from
  literature), the final hydrogel formulation ("still needs full characterization"), GLARE's
  dry-eye enrichment magnitude and Core-1-over-LacNAc selectivity (both "still have to be
  measured"), and the ε outlier at 97% retention.

## Workflow signature
Prediction is treated as a hypothesis generator that must be built to be falsifiable, so the library
is designed for subtraction — every architecture exists twice (reporter and therapeutic), every
anchor exists alone and in combination, and the ten mutants were picked to spread across positions
and mutation counts specifically so bench data could adjudicate between two dockers rather than
confirm either. Each dry-lab operation chooses its abstraction level out loud, naming the heavier
tool it declined (ReaDDy 2, AlphaFold2 for mutants, COMSOL, CFD) and the missing measurement that
would make the heavier tool pointless. The honesty runs in both directions: wet-lab results killed
CD44 and the ITC arm, and the ocular transport model was used to disqualify their own diffusion
assay rather than to dress it up. Every number is published with the unit it is sensitive to, the
baseline it is measured against, and the error band below which differences are declared meaningless.
