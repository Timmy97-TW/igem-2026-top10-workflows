# Cornell — Klothos (Fashion & Cosmetics, USA) — Top 10 Undergrad 2026
Title: Klothos: Engineering Anti-Fibrotic Wound Healing through Electrospinning with Arachne
Wiki: https://2026.igem.wiki/cornell

## Problem / design
Fibrotic scarring (>100 M people/yr). Target = CTGF (CCN2), C-terminal cysteine-knot domain.
Therapeutic = **810A**, a 12-aa peptide binding CTGF C-term (Xiao et al.).
Delivery = engineered probiotic encapsulated in coaxial alginate nanofibre mat ("smart bandage").
Gate = AND-gate promoter: hypoxia (pNarK-type) + ROS (pkatG) → 810A only in a chronic wound.
Chassis path: E. coli DH5α (cloning) → BL21(DE3) (expression) → planned E. coli Nissle 1917 /
Lactobacillaceae (consumer).

## WET LAB workflow (explicit 6 phases, DBTL cycles inside each)
Phase 1 810A assembly · Phase 2 CTGF/C assembly (parallel track to make the binding target)
Phase 3-6 = fibre/encapsulation + characterisation (circuitry, fibers, encasement, extrusion).
Pipeline per construct:
1. Design cassette in SnapGene (SUMO–6xHis–810A; TetR + overlapping tetR/tetA promoters from pUS212)
2. IDT gene block → PCR with 15 bp overhang primers (100 µM stock, 10 µM working)
3. 1% agarose gel → Monarch gel extraction → DpnI digest of parent plasmid (rCutSmart, 37 °C 30 min)
4. NanoDrop QC (A260/280, A260/230) → **NEB HiFi assembly** into pUC19 (2:1 vector:insert, 10 µL)
5. Transform chemically competent DH5α (Mix-and-Go) → blue/white screening (X-gal/IPTG/Amp)
6. Colony → miniprep → Sanger sequencing → re-transform BL21(DE3) for expression
7. IPTG/Tet induction → Ni-NTA (6xHis) purification → SDS-PAGE → SUMO protease cleavage → LC-MS
8. ELISA binding assay: immobilised CTGF/C + His-810A detected with anti-His antibody

### Failures they published (unusually honest)
- Gel extraction ruined by **reversed electrode polarity**; PCR repeated.
- 40 mL instead of 20 mL EtOH added to wash buffer (mislabelling) → A260/230 = 0.6 (spec 2.0–2.2).
- Cell stock left out of −80 °C for hours → dead competent cells; satellite-colony lawns on Amp plates.
- Sequencing gave a 30 bp deletion across the tetR/tetA promoter → construct became constitutive.
- Cycle 3 resolution: **gave up on in-house assembly and ordered the finished plasmid from IDT**
  (pET-IDT backbone, KanR, T7/IPTG); transformation only worked when heat shock was extended
  from 10 s (NEB protocol) to **45 s**.
- CTGF/C expressed in **E. coli SHuffle** because the mammalian domain needs disulfide bonds.

## MEASUREMENT (the strongest part of the project)
- pGLO E. coli electrospun into coaxial fibres, sodium-alginate core at 1 / 2.5 / 4 / 5 wt %.
  Viable CFU/mg counted at 0, 12, 24, 36, 48 h. Start load 1e8–1e10 CFU/mL.
  Result: >3 log loss in the first 24 h, then plateau at **1–4 CFU/mg** for every mat. n = 1 mat
  per concentration — they say so. Piece-to-piece variation 100× (clumping in viscous core).
- CaCl2 crosslink safety: 2 % CaCl2 for 0/1/3/4 min vs water → all plates TMBC, no visible loss.
  Reasoned against the competent-cell literature (50–100 mM for 30 min is routine).
- Settling study: 0 / 0.5 / 1.25 / 2 / 2.5 wt % alginate, OD600 at the surface over 12 h,
  blank-subtracted, normalised to max (N %), least-squares slope vs 0 by two-sided t-test
  (df = 14, α = 0.05). Settling stops between **0.5 and 1.25 wt %** → sets the minimum
  alginate for the spin formulation. Surface-drop correction described in the protocol.

## DRY LAB workflow — a chain of 6 models, each tied to one assay
1. **Production–degradation ODE**  dF/dt = αX − δ_F·F  (fusion peptide vs biomass)
2. **Hill induction model** for Tet (and future ROS/hypoxia) promoters
3. **Michaelis–Menten** for SUMO protease cleavage → how much protease, how long
4. **Hill–Langmuir binding isotherm** fitted to ELISA signal: Signal = B + Smax[P]/(KD+[P]);
   n fixed at 1 (single site) and they state that n ≠ 1 would mean error, not cooperativity
5. **Quadratic ligand-depletion model** for when [CTGF] ≈ [810A] ≈ KD (Langmuir invalid)
6. **Reduced-order network model of fibroblast state transition**: STRING v12.5 network,
   filtered on Human Phenotype Ontology "Scarring" HP:0100699 → 48 weighted edges, plus CTGF
   (CCN2) 20 first-degree + 10 second-degree neighbours, merged; hub nodes SMAD3, FN1, TGFB2.
   Simulated in **Netflux** (normalised logic-ODE, modified Hill activation/inhibition,
   per-node time constant τ) with **COL1A1 accumulation as the fibrosis endpoint**.
Structures: AlphaFold renders of 810A (12 aa, 1.4 kDa) and CTGF/C 242–349 (12.3 kDa).

## HARDWARE
**Arachne** — in-house coaxial electrospinner, ≤30 kV supply, control of voltage, humidity,
current, viscosity, needle–collector distance, flow rate → tunable fibre porosity. Built as a
cheap alternative to commercial units; protocols offered to future teams.

## Workflow signature
Wet lab and dry lab are **one-to-one**: every model exists to turn one planned assay into a
number (KD from ELISA, protease time from MM, minimum alginate from the settling t-test).
Hardware is in the critical path — without Arachne there is no product.
