# LYON — BioThetis (Bioremediation, France) — Top 10 Undergrad 2026
Title: BioThetis — binding TFA, the smallest forever chemical: protein design for cleaner water,
shaped by society
Wiki: https://2026.igem.wiki/lyon

## Core idea
**TFA (trifluoroacetic acid)** is the smallest PFAS, present in European tap water and not removed
by normal treatment. Plan A was to *degrade* it with a fluoroacetate dehalogenase; the modelling
said no, so the project pivoted to **capture**: protein binders anchored to cellulose beads in a
column, with heat-triggered release so the material is reusable.

## WET LAB workflow — thirteen numbered "blocks", each with objective / what we did / controls
Every block names the protocol numbers (P01–P25) from their lab book, and every block states its
controls. Each block is tagged with the axis it serves (extraction / degradation / both).
1. **Sequence verification as a gate before anything is scheduled.** Outsourced to Microsynth,
   every plasmid aligned to its expected sequence. Several inherited plasmids had **single-bp
   deletions that shift the frame**; their own new VNP15 orders came back wrong because of a
   specification error on their side. Fixed by **QuikChange** and re-sequenced; irreconcilable
   plasmids set aside.
2. **Strain comparison** — they re-tested the *previous team's* claim (MG1655 > BL21(DE3)) in the
   system where it was made: both strains, 2 h / 4 h / overnight, 20 and 100 ng/mL aTc, pellet vs
   supernatant, **equal cell equivalents per lane**, uninduced control on every gel. Conclusion:
   no consistent difference, and **strain and vector were confounded**, so the decision was taken
   on documented behaviour instead of on this comparison.
3. **Vector/inducer** — tried to rescue aTc induction first (several concentrations, several times,
   **old vs freshly prepared inducer stock to rule out reagent degradation**), then moved the whole
   collection to pET-29b(+)/T7/IPTG at the cost of a full re-synthesis order and several weeks.
4. **Production route** — VNP15 vesicular export vs cytoplasmic. FM4-64 microscopy showed vesicles,
   but SDS-PAGE through the purification showed the protein in **inclusion bodies**. Rule they
   wrote down: *no production route is adopted on a qualitative readout.*
5. **Expression / solubility / yield** with a gate set in advance (soluble, and enough for full
   characterisation from one batch). Microfluidizer lysis → HisTrap on ÄKTA → PD-10 desalting →
   Centricon → NanoDrop + BCA. Numbers published per construct: DAR3835 **117 mg/L**,
   RPA1163 **14 mg/L**, A0A6 all inclusion bodies (dropped); six binders 52.5–97.8 mg/L; seven of
   nine enzyme variants 11.8–168.2 mg/L; **Eurydice and Sao insoluble → dropped, not rescued**.
6. **Assay development and validation before judging any construct.** Phenol-red defluorination:
   dye moved out of the buffer and added per well at fixed final concentration; **four plate
   reading formats compared (no lid / through lid / from below / sealed film) because the
   substrates are volatile**; calibrated against six HCl points, **R² = 0.9979**, converting
   absorbance into nmol of protons. nanoDSF: standard vs premium capillaries (no difference),
   buffer blank every run, and a **per-protein signal check that eliminated RPA1163** (no
   transition, no Tm) before it could mislead them. Everything in duplicate, calibration in
   triplicate.
7–9. DAR3835 defluorination activity, TFA recognition by thermal shift, and the nine active-site
   variants, named after river gods (catalytic) and Nereids (non-catalytic).
10. **De novo binders**: apparent **Kd = 25.0 ± 4.9 mM (Ianassa N-term)** and **24.9 ± 4.0 mM
    (C-term)** by nanoDSF.
10bis. **A control most teams would skip**: is the TFA effect carried by the binder or by the
    CBM3a anchor? → **TEV cleavage, then nanoDSF on the cleaved CBM alone**.
11. Cellulose anchoring via CBM3a (depletion assay). 12. Thermal reversibility. 13. Crystallography
    of DAR3835. Then a section titled **"What is still open"**.

## DESIGN decisions, each with the alternative and what decided it
One plasmid for all **15 new constructs** so a difference between two proteins belongs to the
proteins, not the vector: pET-29b(+)/KanR, T7+IPTG, BL21(DE3) (TOP10 for plasmid prep),
**NdeI/XhoI as the same pair for every insert**, codon-optimised for BL21 and **checked over the
full length for internal NdeI/XhoI sites**, His6 + IMAC, one naming code per construct.
- **His6 placed at the terminus opposite the anchor**, so affinity purification cannot compete with
  cellulose binding.
- **TEV site between anchor and binder in every fusion**, specifically so a property can be
  assigned to the binder rather than to the fusion.
- Anchor = **CBM3a** (CipA scaffoldin, *C. thermocellum*, family III, binds crystalline cellulose
  tightly) over CBM1 (family I, reversible, released by water), because the column must hold the
  binder while TFA cycles on and off.
- **Anchor position could not be predicted, so both orientations were built for every binder**
  (N-term: CBM3a–KEPGG linker–TEV–binder–His6; C-term: His6–binder–TPVSG–TEV–CBM3a) and the
  measurement decides. All six are in the Registry.
- They explicitly **de-confounded the 2025 team's inheritance**: three separate comparisons
  (strain alone, vector+inducer alone, tag alone) because one comparison could not separate three
  entangled variables. Tagless beat VNP15.

## DRY LAB workflow — five models, each with the decision it produced and how it was tested
| # | Model | Decision |
|---|-------|----------|
| 1 | **Packed-bed transport model of the filter** | geometry is a free choice; affinity and capacity set lifetime |
| 2 | Structural model of DAR3835 + TFA (**Protenix** on the 8SDC/8SDD scaffold) | **No** — the barrier is attack geometry on a fully substituted carbon, not affinity → pivot to capture |
| 3 | Structure-guided design of 9 variants | which residues to mutate |
| 4 | **BoltzGen 0.3.2** de novo binders | 10,000 candidates → 5 kept → 3 to the bench, both orientations |
| 5 | **Lumry–Eyring** analysis of thermal unfolding | the design target is refolding rate vs aggregation rate, **not Tm** |
The filter model, in detail: a first model that followed individual molecules from a **Langevin
equation** was **set aside and kept in the write-up** because ~10¹⁵ TFA molecules pass through a
real filter. The replacement is a continuum packed-bed model in two fields, C(z,t) in the water and
q(z,t) on the beads:
ε ∂C/∂t + u_s ∂C/∂z = ε D_L ∂²C/∂z² − ρ_b ∂q/∂t, with a **linear-driving-force** uptake
∂q/∂t = k_LDF (q*(C) − q) and a **Langmuir** isotherm q* = q_max K_L C/(1 + K_L C), K_L = 1/Kd.
Danckwerts inlet condition, zero gradient at the outlet, empty bed at t = 0; finite differences
with a stiff solver (**MATLAB ode15s**). Outputs: breakthrough curve, **BV10/BV50**, EBCT, bed
Péclet (~5000) and Damköhler (~310) numbers.
Reference case: L = 1.50 m, D = 0.80 m, V = 0.75 m³, Q = 10 m³/h, u_s = 5.5 mm/s, inlet
**1–10 µg/L TFA**, EBCT 4.5 min. **Verified four ways**: against the analytical limit, grid
convergence, numerical mass balance (closes to better than **0.03 %** after 2 bed volumes), and an
**independent re-implementation**.
The result is a closed-form rule — BV50 = ε + ρ_b q_max K_L/(1 + K_L C0) = **14.03 for every
geometry tested** — i.e. *what the filter holds, not how it is shaped, sets how long it lasts.*
**Radical honesty**: the model's status is printed at the top ("we did not manage to finalise and
exploit it as we wanted"); **every parameter is labelled Design choice / Computed / Placeholder /
Operating range**; the reference q_max of 25 mg/g is marked a placeholder against a **measured
upper bound of 0.135 mg/g** (≈185× optimistic), K_L is "placeholder, not measured", and the
assumption table lists **when each assumption fails** (narrow columns, multilayer binding, short
contact times, fouling, competing anions in real water). There is a Reproducibility section.
Two negative results are named as the results that shaped the project: TFA cleavage with this
enzyme family is unlikely, and **in silico affinity scoring did not beat the wild type**, so no
design was selected on it.

## Workflow signature
Decision-table engineering. Every design choice is a row — alternatives compared, the experiment
that decided, the decision — and every parameter carries its own status label. Negative results and
abandoned models are kept in the record because they are what produced the pivot.
