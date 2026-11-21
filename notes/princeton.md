# Princeton — SymPleco (Foundational Advance, USA) — **2nd Runner-up, Undergrad 2026**
Title: SymPleco: Engineering a High-Surface-Area, Light-Regenerable, Bio-Safe Phage Platform for
Precision Toxin Sequestration
Wiki: https://2026.igem.wiki/princeton  ·  Software: **SymPlify**

## Core idea
Use the **M13 filamentous phage** as a sequestration sponge. Chassis chosen on a number:
M13's surface-area-to-volume ratio is **5.7–6.7 × 10⁸ m⁻¹**, about half that of activated charcoal
(1.0–4.5 × 10⁹ m⁻¹), the adsorption gold standard. Cargo is attached **covalently** by
**sortase-mediated transpeptidation** instead of the usual non-covalent phage display, which lifts
the size limit and survives mechanical stress. Two orthogonal sortases:
*S. aureus* SrtA (LPXTG → G₅-pIII, low copy, spatially controlled) and *S. pyogenes* SrtA
(LPXTA → A₂G₄-pVIII, high density, ~2700 copies). GS linkers give the enzyme access.

## WET LAB workflow
1. **Design** every construct in **Benchling + SnapGene** before synthesis.
2. Phage variant library on the **HP17K07** helper backbone (Addgene #120346):
   HP17_Sort3, _Strep3, _Sort8, _Sort8Strep3, _Sort8Sort3 — single and double modifications of
   pIII and pVIII.
3. **Biosafety by architecture, not by protocol**: they rejected the standard phagemid system
   because it packages a replication-competent genome. Instead the M13 origin (phagemid pHK002.2,
   ~3.8 kb, AmpR) is separated from the structural genes (helper plasmid HP17K07, pSC101/Rep101,
   5–12 copies/cell), so **every particle produced is replication-incompetent**.
4. Cloning loop: PCR → gel → **InFusion** assembly → transform **E. coli ER2738** (F⁺, the
   phage-display host) → miniprep → **Plasmidsaurus** whole-plasmid sequencing, with "successful"
   defined as a **100 % match over the region of interest**.
5. Cargo proteins expressed and purified separately, quantified by NanoDrop/Bradford:
   LPXTA-GFP (counts tagged pVIII), LPXTA-GFP nanobody (functional binding),
   LPXTG-Cg-Defensin-GFP (binding to PLA plastic — the hardware link),
   LPXTG-VHH7 (macrophage uptake — the safety link).
6. **Sortase reactions run in vitro**, deliberately, to control stoichiometry instead of relying
   on secreted enzyme at unknown dilution.
7. Validation stack: **dot blot** (anti-pVIII, Alexa 488, GelDoc fluorescein, 1–2 s, quantified in
   ImageJ, all images at identical laser power and exposure) → **Western blot** with HRP anti-His
   (Cg-Defensin-sfGFP on pIII, band at the expected 97–102 kDa) → **SDS-PAGE** for pVIII+nanobody
   → **Strep-Tactin plate ELISA** → a **phage ELISA with a GFP calibration curve** to estimate how
   many GFP molecules a single double-modified phage captures.
8. Scale-up when titre was too low: culture volume **5 mL → 200 mL**.

## MEASUREMENT — the standout section: they had to invent their assay
**Four protocols, not one**, each with its own DBTL round:
1. traditional plaque assay (found ER2738 to be the best host),
2. multi-transformation plaque assay — **constructs with more than two tag inserts gave colonies,
   not plaques**, which killed plaque counting for exactly the constructs the project is about,
3. the "Sally" assay — a diagnostic built to isolate one failure cause at a time (Amp plate for
   plasmid transfer, phage-only control for contamination, bacteria-only control); its
   selective-plating logic became the permanent readout,
4. the **Phage Jumpstart Assay** — recursive growth scored every round.
Why the alternatives fail, stated plainly: M13 is non-lytic so a plaque is slowed growth, not
clearing; a dot blot and SDS-PAGE are **genotype-blind** (the sortase tag is too small to shift the
pVIII band); and *"a plaque reports that a particle was infective. It never reports what was inside
it."* What they needed was **packaged genome per particle across serial rounds**.
The assay: **dual-selection transduction counting**. Each genome carries a different marker, so one
infection event = one countable colony of known genotype. Amp colony = phagemid entered;
Kan colony = helper entered. **Both plates come from the same diluted sample, so dilution error,
plating efficiency and host competence cancel in the ratio.**
Three stated conditions, each justified: host in **mid-log** (F pili only in exponential phase, so
stationary cells under-report), **outgrowth before selection** (or real events score as zero), and
**one genome per cell** (pilus retraction + superinfection exclusion) — and they explicitly flag
that exclusion is not absolute, so a rare co-infected cell would bias the ratio.
Result, against their own prediction: Jumpstart R1 = **1.58**, and every Phase 2 round fell below 1
(HP17 wt **1.40 × 10⁻²**, Sort8Sort3 **1.54 × 10⁻³**, Sort8 **6.13 × 10⁻⁴**). Explanation: pIII
sets infectivity at only ~5 copies per virion, and the fully modified coat infects worse than the
part-wild-type hybrid coat.

## DRY LAB — two separate pieces
**1 The Phage Refinery model** — a mechanistic simulation of the Jumpstart assay built to explain
why the ratio inverted. 7 Python files (`jumpstart.py`, `jumpstart_mechanistic.py`, `passage.py`,
`phase2.py`, `recursion.py` as orchestrator, `plotstyle.py`, `test_model.py` with **52 automated
checks**); `python3 recursion.py` runs the whole assay.
- Jumpstart stage: 4 ODE states (phagemid-only cells, dual-infected, two free-particle pools) with
  a **pilus saturation term** (a cell has only a few pili however many particles are around), a
  carrying-capacity term, a **growth penalty on infected cells**, and kanamycin killing uninfected
  cells at t = 75 min.
- Passage: 500 µL into 5 mL is modelled as **Poisson sampling, not division**, so a species can
  genuinely go extinct instead of asymptoting to zero.
- Phase 2: 7 states, each particle type infecting at its own weight, with **σ = superinfection
  exclusion at ~5 % of the naive rate** (same form for every particle, because a cell cannot know
  which genome is arriving).
- The key parameter is **derived from gene dosage, not fitted**: a hybrid cell carries the helper's
  wild-type pIII genes and HP17K07's modified ones, so a_h = wt_frac + (1 − wt_frac)·eps →
  **a_h ≈ 0.729** at 20 M13K07 copies and 8 HP17 copies.
- **They published a correction**: an earlier revision used 200 M13K07 copies giving a_h ≈ 0.96,
  which was the figure for wild-type f1 rolling-circle replication — M13K07's f1 origin is
  interrupted by KanR and it actually replicates from a separate p15A origin.
- Every input is marked as *confirmed* or *estimated* (copy numbers read off the actual Benchling
  origin annotations: pBR322+rop ≈ 15–20, pSC101 ≈ 5–12, p15A ≈ 10–30), MOI = 2.5 is flagged as an
  assumption, and the no-dual-infection simplification is flagged with the reason the wet lab
  assay (parallel single selection, not double selection) cannot measure the co-infection fraction.
**2 SymPlify** — a web app that makes de novo binder design usable without a CLI or GPU knowledge.
Pipeline: upload or fetch a target (RCSB PDB ID, ligand code, or a PDB/CIF file) → **auto-routing**
(a chain with fewer than three standard amino-acid types, including macrocycles and modified
peptides, is treated as a small molecule) → protein targets to **BindCraft**, small molecules to
**RFdiffusion3** (all-atom, co-diffuses binder and ligand) → hotspots proposed by **PeSTo** scores
rendered on the 3-D structure (BindCraft works best with **3–5**, so low scorers can be removed)
or by an **RDKit pharmacophore** for small molecules → job files generated and submitted to the
user's cluster with queue/elapsed/resubmit tracking → filter and rank primarily on **ipTM**, also
showing pTM, pLDDT, ΔG (REU), surface hydrophobicity, shape complementarity, unsatisfied H-bonds,
C-term accessibility and SASA → download PDBs, optionally with GS linkers added for ligation.
BindCraft's four internal stages are documented: hallucination (AF2-multimer) → **SolubleMPNN** →
AF2 monomer re-prediction ("harsh, but robust") → confidence filtering.
**Difficulty scorer**: 0–100, graded Easy→Very Hard, from five weighted factors for proteins
(epitope chemistry 30 %, hotspot patch tightness 25 % — >30 Å triggers a warning because one binder
cannot reach that far, flexibility 20 % read as **B-factor for experimental structures and pLDDT
for predicted ones**, globularity 15 % from radius of gyration, size 10 %) and five RDKit
descriptors for small molecules (logP 30 %, heavy atoms 20 %, rotatable bonds 20 %, TPSA 20 %,
aromatic rings 10 %). **Shipped with a disclaimer in the app**: not experimentally validated, no
affinity metric, and it only sees the uploaded PDB.
Experts gave conflicting advice on AlphaFold version (2 vs 3 vs the Server), so they tried several
and compared. Designs deposited on **Zenodo**.

## Workflow signature
The project's hardest problem was **measurement**, and the dry lab exists to explain a measurement
that contradicted the prediction — with a published correction to its own parameter. The software
is built for other people to use, with its own uncertainty labelled on the screen.
