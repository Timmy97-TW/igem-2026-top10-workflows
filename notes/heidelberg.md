# Heidelberg — VOYAGE (Foundational Advance, Germany) — Top 10 Undergrad 2026
Title: VOYAGE: Programmable Gas Vesicles for Acoustic Observation and Organization
Wiki: https://2026.igem.wiki/heidelberg  ·  Dry lab is branded **ATLAS**

## Core idea
Gas vesicles (GVs) — gas-filled protein nanostructures (shell = GvpA; GvpC binds the outer face
and stiffens it) — scatter ultrasound and **collapse at a defined pressure**. Engineer that
collapse pressure and you get (a) multiplexed acoustic imaging, (b) molecular biosensors read by
ultrasound, (c) an acoustic "handle" that lets a standing wave move only the labelled cells.
Two halves: **Observe** (GV → signal) and **Organize** (ultrasound → spatial control).

## WET LAB workflow
Track A — mammalian expression (HEK293T)
1. mARG_Ana two-cassette system from Hurt et al. 2023 (D. flos-aquae GVs). Cassette 1 = GvpA
   (+GFP), cassette 2 = accessory genes (+BFP). Transfected at a 1.3:1 ratio to start.
2. Lipofectamine 2000, 4 nL per ng DNA, 2 µg DNA per well of a 6-well plate.
3. **Flow cytometry as the GV assay, not just a transfection check**: FSC/SSC size gate →
   FSC-A/FSC-H singlet gate → GFP(B525)/BFP(V450) transfection gate → final gate on
   **high side scatter relative to forward scatter**, because GVs scatter light.
4. Optimisation runs: tcGvpA ratio tuned to **12.5 % of total GvpA plasmid** (above that,
   assembly breaks); moved from a two-plasmid to a **three-plasmid system** splitting cassette 2
   so accessory genes could be dosed independently.
5. Negative control: mGvpA with four substitutions in conserved residues (L20R, D21Y, K22E, G23C)
   that abolish assembly (Dutka et al. 2023).
Track B — bacterial expression + purification (E. coli BL21-AI)
6. Serratia sp. ATCC 39006 polycistronic cluster (chosen over ARG1 after ARG1 attempts).
7. Preculture in LB + 1 % glucose, 16 h → 10 mL into 320 mL 2xYT, 37 °C/160 rpm to OD600 0.5–0.7
   → induce 1 % L-arabinose (+0.8 mM IPTG for PAS screening), drop to 30 °C/140 rpm, 22 h.
8. **Buoyancy/flotation purification**: 35 mL aliquots, 300 × g for 3 h; intact GVs float the
   cells into a white surface layer. Lysis, low-speed spins, then GvpC stripping (urea),
   re-addition of recombinant GvpC variants, dialysis.
9. Side purifications: GvpC-His and DARPin–SpyCatcher by IMAC.
10. Characterisation stack: TEM + AFM (bending/ripples), DLS and zeta potential, pressurised
    absorbance spectroscopy, and ultrasound on a Verasonics system (5.2 MHz linear probe,
    **xAM** cross-amplitude modulation, agarose phantoms with three wells, transmit voltage
    stepped from 2 V, hydrophone-calibrated to acoustic pressure, peak 1150 kPa).
11. Diversity generation in the lab used **error-prone PCR** alongside the rational designs.
Track C — organisation
12. GvpC–SpyTag on the shell + **DARPin–SpyCatcher** fusion → covalent GV attachment to EGFR on
    the cell surface, as an alternative to intracellular expression.
13. Acoustic patterning: standing wave between transducer and reflector → parallel lines; a
    droplet sandwiched between hydrophilic/hydrophobic-patterned glass plates on a piezo →
    **ring patterns**. Acoustic streaming identified as the competing force; countered by using
    **spheroids** (ARF scales with particle volume) grown in microwell plates.
14. AcouWash sorting system for GV-labelled cells.

## Measured results worth quoting
- Two of seven biosensor variants shifted their pressure–response curve with target present;
  collapse pressure rose by an average of **60.2 kPa**.
- Cell acoustic contrast factor Φ ≈ **+0.1** in PBS; a GV is strongly negative, so a GV-loaded
  cell flips sign and moves to the opposite point of the standing wave.

## DRY LAB workflow — ATLAS, three modules
**1 Understand — all-atom MD of the shell** (the part almost nobody in iGEM does)
- Two neighbouring ribs of 20–25 GvpA (PDB 8GBS) in a periodic box, TIP3P water, 150 mM NaCl,
  CHARMM36. GvpC 33-residue repeats docked on the outer face with HADDOCK.
- Bending stiffness **EI from thermal ripples**: ⟨|h_q|²⟩ = k_BT /(L·EI·q⁴); equal 1.5–2 ns
  blocks per variant, Welch's t-test between variants.
- Collapse pressure from shell theory: p_cr = 3EI/(s·R³), R = 42.5 nm, s = 4.9 nm → because R and
  s are constant, **predicted strengthening = stiffness ratio**.
- GvpC binding free energy by **steered MD (1 nm/ns, k = 1000 kJ/nm²) → 25 umbrella windows →
  WHAM → PMF → ΔG_binding**.
- Tested the rival collapse mechanism (water condensation, Zhao 2023): 3.5 nm water droplet on the
  inner wall, contact angle and penetration. **Pre-registered decision rule**: ≥6° contact-angle
  increase with a 95 % CI excluding zero counts as an effect; <3° with CI inside ±6° counts as none.
**2 Engineer — three generative design pipelines**
- *In silico evolution of GvpC*: AlphaFold2 Serratia GvpA tetramer + GvpC repeat aligned onto the
  Dolichospermum cryo-EM structure (85 % GvpA identity, all six epitope residues shared).
  ΔSASA with Shrake–Rupley (1.4 Å probe) splits the 33-mer into interface vs solvent-exposed.
  Six anchors (4, 11, 12, 15, 19, 22) → four redesign tiers T0–T3 by how much of the interface
  LigandMPNN may touch; 20 exposed positions redesigned for helix propensity, native charge kept.
  Screening gate: AlphaFold2 **i_pAE ≤ 12**, contacts with all four GvpA chains in ≥4 of 5 Boltz-2
  runs, pose reproducible within **2 Å**, composition filter — then ranked on Boltz-2 buried area.
  Only the i_pAE threshold was calibrated (native binder + 9 negative controls); the other three
  were set a priori and they say so. **200 designs → 135 pass i_pAE → 121 pass the full gate.**
  Position 4 Met→Phe in every design; position 15 Leu in 98 %.
- *De novo GvpA binders*: GvpA's outward face is hydrophilic and the inward face hydrophobic, which
  breaks hallucination-based design → used **RFdiffusion3** backbones against 4 GvpA chains →
  **ProteinMPNN** 8 sequences per backbone → AlphaFold2 re-prediction → pLDDT / RMSD / i_pAE gate.
  PyRosetta used as the physics-based cross-check.
- *Biosensor design (binder + latch + target binder)*: RFdiffusion3 generates a **latch** that
  blocks the GV-binding interface at several lengths; target binder (nanobody **LaG2** against GFP)
  fused to the free end in the orientation that gives steric hindrance; the whole construct is
  re-predicted and **must fail to bind GvpA alone**. Honest negative: no design passed every filter.
**3 Analyse — two measurement tools**
- **GVSAM**: CellSAM (SAM + CellFinder/Anchor DETR, ViT-B) fine-tuned on their own 108
  phase-contrast images (960×720), two independent annotators in napari, 70/20/10 split with
  GV-present and GV-absent images split separately. 50 epochs, batch 3, lr 1e-4 (backbone 1e-5);
  **best checkpoint at epoch 6**. Matching rule: centre within ±2 px and area ratio within 4×.
  **F1 rises from 0.2 % (base CellSAM) to 42 %, false positives fall 97 %** on 10 test images with
  114 annotated clusters.
- **GAS** ultrasound pipeline: each ROI summarised by **median intensity** with noise from
  **median absolute deviation** (robust to wall echoes), signal-vs-voltage → pressure curves;
  plus a physics-informed fit.
- **PAS hardware** (hydrostatic, not acoustic): compressor + absorbance at 500 nm, pressure stepped
  in small increments, curve fitted with a logistic A(P) whose inflection **P50 is the collapse
  pressure** and b the width. Built because ultrasound screening is slow and expensive.

## Workflow signature
The only team in the Top 10 whose dry lab spans **MD → generative design → deep-learning image
analysis**, with a screening gate written down in advance and controls used to calibrate exactly
one threshold. Advisers named per method (Jendrusch, Rohr, Kittner). A "Fail Forward" programme
makes published failure part of the project.
