# UCAS-China — PARCEL (Therapeutics, China) — **1st Runner-up, Undergrad 2026**
Title: PARCEL: Pumilio-Assisted RNA Carrier via ELP Transition for Asthma Treatment
Wiki: https://2026.igem.wiki/ucas-china

## Core idea
Inhaled mRNA therapy for maintenance asthma. The carrier is **not an LNP** — it is a protein:
**ELP–Pum2–EEP13**. ELP (elastin-like polypeptide, VPGXG repeats) phase-separates above its
transition temperature; **Pum2** (human Pumilio2 homology domain, 8 of 10 repeats) grips mRNA
tagged with the **PRS** 5'-UGUANAUA-3'; **EEP13** (dimeric amphipathic helix, Mast18 + LL-III via
GGSGGGS) breaks the endosome. Histidines in the ELP hydrophobic block make the condensate
**pH-responsive**, so the endosome's own acidification disassembles the particle.
Payloads: IFN-λ1 and SLPI mRNA (IVT, capped + poly(A)), aimed at **Club cells** in the bronchiole.
Targeting: anti-UPK1B scFv conjugated by **evolved Sortase A** (LPETG tag ↔ N-terminal GGG).
Four modules: cell factory → protein processing → delivery → biosafety.

## WET LAB workflow — seven engineering tracks, DBTL cycles each
Tracks: **Target · EEP13 · ELP Purification · ELP LLPS · Quorum Sensing · Sortase A · AeroEase**
*Target track (how they chose UPK1B — the clearest dry-lab→wet-lab handoff in the project)*
- Iteration 1: tried **CCSP** (Club-cell secretory protein). AlphaFold server predicted the CCSP
  homodimer and the CCSP-mCherry fusion → **steric hindrance on both sides would break the native
  homodimer and block membrane binding**, so a P2A was inserted. PEI transient transfection of
  HEK293-T (~1×10⁷ cells/well, 5 h), fluorescence microscopy, then medium/cytosol/membrane
  fractions by sonication + centrifugation and SDS-PAGE. Verdict: localisation unresolvable, flow
  cytometry impossible (no instrument), and a *secreted* protein is the wrong kind of target.
- Iteration 2: switched to a bioinformatic screen. **Human Lung Cell Atlas** → QC → pseudobulk
  counts → **DESeq2** → intersect with the **Human Surfaceome** → **UniProtKB** topology
  (must have an extracellular region) → **GTEx** for off-tissue expression.
  **68 candidates; UPK1B passed all four filters** (log₂FC 1.19, adj. P = 0.00559, detected in
  45.92 % of Club cells, SURFY score 0.6048). They publish the off-target honestly: UPK1B is also
  in bladder/urothelium, and argue it is acceptable only because delivery is inhaled.
*Component assays actually run*
- **Pum2–PRS binding by EMSA**: shift for PRS-containing RNA below **2.5 µM** Pum2; PRS-free RNA
  barely shifts; **≥5 µM gives non-specific binding** — so the working window is bounded on both
  sides, not just "it binds".
- **EEP13 membrane damage by calcein-AM leakage**: EEP13 is too small to see on a gel, so a
  tandem **2EEP13** (100 aa, 10.36 kDa, pI 11.78, charge +21.5 at pH 7) was used instead.
  0–1 µM on ~1×10⁶ cells, 37 °C, 2 h; calcein read in the supernatant because intracellular
  fluorescence swamped the image. **P < 0.001 vs no-peptide, but no dose response**, and they give
  two candidate reasons (electrostatic adsorption of anionic calcein onto the cationic peptide;
  unequal illumination time causing bleaching).
- **ELP LLPS**: integrated ELP-Pum2-2EEP13 expressed in BL21(DE3), **8 M urea to expose the His-tag**
  for IMAC. Turbidity at **OD350** (and OD ratios) vs temperature with BSA at matched molar
  concentration as the control: logistic rise above **1 µM**, onset below **40 °C**; then the pH
  series (pH 7.66 → 5.x, four buffers) to prove the designed pH switch, including the cooling leg.
- **Sortase A**: eSrtA ligation first demonstrated on an eCFP/eYFP pair, then on
  anti-UPK1B-scFv ↔ ELP.
- **Quorum sensing + lysis**: mutated **LuxRm–pLuxR** (carried over from UCAS-China 2023, higher
  activity and less leak than wild-type LuxR–pLux), J23115 driving luxR constitutively.
- **Kill switch**: **hok/sok** type-I toxin–antitoxin with *sok* under **pBAD** — arabinose in the
  fermenter keeps the antitoxin on, so escape from the vessel means loss of arabinose and death.
  Named parts registered (Pum2 BBa_26RL1I1H, PRS BBa_26L8LDNU, EEP13 BBa_26PAC6W8,
  integrated ELP BBa_263ZN48F).

## DRY LAB workflow — six model parts, one per stage of the product's journey
**Part 1 — quorum-sensing controller for ELP accumulation.** ODEs combining growth dilution with
QS kinetics; growth fitted with a **simplified Baranyi equation** to their own OD data; asks when
to trigger lysis so protein is maximal before the phase transition happens inside the cell.
**Part 2 — self-assembly.** Three constructs (control, antibody-functionalised, CPP-functionalised;
1052 / 1322 / 1068 residues) built from **AlphaFold 3** monomers, coarse-grained with
**Martini 3 in GROMACS** at 298 K. Readouts: assembly dynamics, **per-domain radius of gyration**,
and the question that matters — **is Pum2 buried inside the assembly** (it must be, to protect the
RNA). Then **CAPE**, a reduced free-energy model (common-tangent phase coexistence + square-gradient
interfacial cost) **calibrated against the wet lab's OD curves**, built explicitly because
microsecond MD per design is too expensive.
**Part 3 — pulmonary delivery.** Two-stage: (a) screening with **MPPD v3.04** (US EPA) on the adult
**Yeh–Schum five-lobe** geometry, scoring deposition in the last three conducting generations per
lobe (13–15, 15–17, 14–16 depending on lobe), with URT and total lung deposition as secondary
criteria; log-normal mass-weighted distributions anchored on published vibrating-mesh output
(**MMAD 3.38 µm/GSD 1.61** and **6.05/1.75**), inspiratory profiles 20 L/min × 3 s and
30 L/min × 2 s, breath-holds 0/2/5 s and 0/5/10 s, refined at **0.5 µm MMAD steps**.
(b) **CFD in ANSYS Fluent** on a reconstructed lung geometry for transport and deposition.
Particle size was flagged as critical by two respiratory physicians in their human-practices work.
**Part 4 — intracellular delivery.** Hybrid **ODE + Gillespie stochastic** model: surface binding,
internalisation, endosomal acidification, carrier disassembly, discrete membrane-opening events,
RNA degradation — giving the *amount and the variability* of cytosolic RNA, not just a mean.
**Part 5 — PK/PD.** Compartmental PK for mRNA turnover and protein production feeding a
literature-based immune-signalling network with Hill terms, ending in **clinically observable
outputs: FeNO and FEV₁**, plus IL-13-driven goblet-cell metaplasia, mucus dynamics and active
neutrophil elastase. Scoped to mild asthma under stated assumptions.
**Part 6 — predicting airway epithelial responses.** Single-cell perturbation prediction on public
data: an **affine baseline** (shift and reshape the population in PCA space) benchmarked against
**residual CellFlow**; metrics include r² and distributional distances, with an explicit section
on **cross-donor generalisation failing**. "Programs as well as proportions" is their framing.

## SOFTWARE / HARDWARE
Four software pieces: **AeroEase** Android companion app for the inhaler (BLE link, offline record
assistant, diary), **the UPK1B bioinformatics screen** above, **FeroEase** fermenter-control app
with **turbidity-based harvest detection**, and an education quiz.
Hardware: vibrating-mesh nebuliser for the condensate, plus the fermenter the app drives.

## Workflow signature
Model-per-stage: every step the product physically takes (made → assembled → inhaled → internalised
→ translated → clinical effect) has its own model, and the carrier's own physics (LLPS temperature,
pH switch) is the design variable. Negative and ambiguous results are reported with reasons.
