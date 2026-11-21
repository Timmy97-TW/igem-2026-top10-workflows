# WageningenUR — Triton (Bioremediation, Netherlands) — Overgrad 1st RUNNER-UP 2026
Title: Triton — capture, degrade and sense TFA, the shortest forever chemical
Wiki: https://2026.igem.wiki/wageningenur
Also: Best Bioremediation Project (Overgrad), Gold.
Wiki is written in LaTeX (`latex_texts/`) and compiled through pandoc — the only one of the twenty
Top 10 wikis we read whose source is a set of .tex files.

## Core idea
**TFA (trifluoroacetate)** is the shortest PFAS, hydrophilic, extremely mobile, and the terminal
breakdown product of many other PFAS — so it is the most concentrated PFAS in the environment and
it does not degrade further. The C–F bond is the strongest single bond carbon forms (~130 kcal/mol).
Reverse osmosis is the only method in use and it only *relocates* TFA: the concentrate is discharged
to surface water. The EU Drinking Water Directive leaves TFA removal to member states, and many
decline. Triton is a **three-module system**: capture TFA on protein-functionalised bacterial
cellulose beads → elute into a bioreactor → degrade it enzymatically to oxalate and fluoride at
30 °C and 1 atm → and a riboswitch biosensor watching the reactor continuously.

Target reaction: CF₃COO⁻ + 2 H₂O → C₂O₄²⁻ + 3 F⁻ + 4 H⁺ (30 °C, 1 atm).

**Cross-division note:** LYON (Undergrad Top 10, Best Bioremediation Undergrad) attacked the same
molecule in the same year and, after its model said degradation would not work, dropped degradation
and did capture only. Wageningen kept all three legs and reported each one's exact distance from
working. Two Top 10 teams, one target, opposite answers to "how much of the system do you keep?"

## WET LAB — three modules, each with a named gate
### 1. Capture
- Literature + PDB sweep first: a table of every protein reported to bind TFA, fluoroacetate or
  acetate, with organism, PDB ID, length and whether the ligand is in the deposited structure.
  Conclusion written down before any design: **no protein is reported to bind TFA strongly.** The
  reasoning for going *de novo* is evolutionary — TFA did not exist before 1922, so nothing has been
  under selection to bind it, and TFA is a hard target anyway (tiny, fluorine barely polarisable).
- **β-lactoglobulin as a deliberate pipeline test, not a result.** Picked because literature reports
  weak PFAS/TFA interaction, so it should have been a positive control. Expressed (band at ~62 kDa,
  MBP fusion), purified by affinity chromatography, **11.0 mg/L**. DSF validated first on lysozyme:
  measured Tm 70.69 °C against 68.6 °C in literature with the same dye — i.e. the instrument, dye,
  channel and ramp were qualified before any candidate was judged. Then: **no reproducible
  TFA-dependent thermal shift.** Two candidate explanations given rather than one, and the one that
  blames themselves is kept: their dye was not the PFAS-specific GloMelt used in the paper, and they
  tested the MBP fusion rather than commercial bovine BLG. Verdict: cannot be used as a positive
  control, and "failure to reproduce the reported thermal shift cannot be interpreted as a complete
  absence of interaction."
- *De novo* candidates from the dry lab run through the **same** pipeline: Binder_283
  (Proteína-Complexa) and BoltzGen_r1. Both expressed at roughly the right mass. Yields
  **48 mg/L (Binder_283)** and **15 mg/L (BoltzGen_r1)** — the designed protein outperformed the
  literature one. Tm 51.44 ± 0.11 °C and 54.05 ± 0.14 °C. BoltzGen_r1: no shift. **Binder_283: a
  reproducible *negative* Tm shift at every TFA concentration**, read as evidence of interaction with
  the correct caveat that ligand-induced destabilisation is a known and less common signature.
  So: three proteins, one pipeline, one hit, and the hit is the computational one.
- **Scaffold.** *K. sucrofermentans* strain inherited from their own 2025 team (BCoated) producing
  bacterial cellulose, reshaped from sheets into **beads**. Functionalisation tested with GFP as a
  proxy because fluorescence is a direct readout: plain GFP adheres slightly, **GFP–CBD
  (cellulose-binding domain) adheres strongly**, quantified per bead rather than judged from the
  image. Beads are cell-free and work either as a packed column or as free-floating media in a basin.

### 2. Degradation — the module that is honest about not being there yet
- **Candidate screen with its own negative class.** Fluoroacetate dehalogenases (FAcDs) are the only
  known non-metallic enzymes that hydrolyse C–F in α-fluorocarboxylic acids (Asp–His–Asp triad).
  They screened the FAcDs plus three non-dehalogenases (horseradish peroxidase, A6T7 RdhA, NADPH
  oxidase) specifically so that any signal could be attributed to the enzyme class rather than to
  oxidative or reductive chemistry in general.
- Result: **no enzyme had detectable TFA activity at any time point to 93 h** — every trace at or
  below its strain-specific LOD and indistinguishable from the MG1655 negative control. On MFA,
  H1NML released ~1000 µM F⁻/OD within 3 h rising to ~6000 by 93 h; 1Y37 ~50× lower but clearly above
  threshold at ~120 µM F⁻/OD. On DFA, H1NML ~2500 µM F⁻/OD at 93 h; 1Y37 plateaued near **9 µM
  F⁻/OD — above LOD but below LOQ, so reported as indicative only**. The 93 h endpoint is justified
  from the data (rate falls off after two days) rather than chosen for convenience. DAR3835 was dead
  in their construct because of an activity-associated point mutation they failed to repair across
  **three** attempts at site-saturated mutagenesis; later work in a different construct confirmed
  the enzyme is fine — so the failure is attributed to the construct, not the enzyme.
- **The screen decided the strategy:** since nothing is natively TFA-active, evolve DFA activity
  upward rather than keep hunting for a native TFA defluorinase.
- **Two selection schemes, both characterised before use.**
  *Toxicity:* TFA dose–response gave complete growth inhibition between 200 and 300 mM, so **200 mM**
  was chosen — strong pressure but short of abolishing growth, so a marginally active variant still
  has an advantage. *Auxotrophy:* a glyoxylate auxotroph (C1-Gly) rescued only if the enzyme
  defluorinates. DFA-dependent growth confirmed at 20 mM for both high-copy constructs against a
  no-glyoxylate control that never rose — so growth depends on defluorination, not residual carbon.
  But final densities were OD₆₀₀ ≈ 0.3 and 0.5 against >2 for the glyoxylate-fed control: **the
  coupling works and the glyoxylate supply is limiting**, which they state as the starting position
  rather than a success. Low-copy constructs supported no growth on DFA at all, which is why that
  arm had to be started with supplement.
  A *TFA* auxotroph was also built (oxalate → formate via OxdC into the rGlyP pathway). Oxalate
  tolerance capped testing below 25 mM; at pH 7 nothing grew, which they predicted from OxdC being
  ~13× slower at physiological pH; lowering pH restored growth only below 6.5 (growth at 25 h at
  pH 6.0, within 10 h at pH 5.5). The cost is stated as a number: inserting the OxdC step **cost
  roughly an order of magnitude in sensitivity** — the strain needs 12.5–25 mM oxalate where the
  underlying formate auxotroph grows on 1 mM — so the selection no longer responds to the low fluxes
  it was chosen for, and finding the lower bound was work they ran out of time to do.
- **MutaT7 continuous hypermutation**, three lineages, selection by TFA toxicity or DFA auxotrophy.
  The clearest change was in **DFA** activity even though the pressure was TFA — read as incidental
  improvement under no counter-pressure. DAR3835 and H1NML peaked at 147 and 126 µM F⁻/OD then fell
  to ~102 at round 3, and they refuse to call the fall real because it coincides with a density
  collapse and their normalisation assumes OD is a proxy for enzyme content. 1Y37, starting near
  zero, crept 9 → 11 → 17 → 20 µM F⁻/OD, explained as drift with room to move rather than as
  directed improvement.
- The sentence that defines this wiki: unnormalised fluoride from DAR3835 after one TFA round reached
  ~10 µM — above the 3.1 µM LOD, below the 9.37 µM LOQ — and **"we are hesitant to call this TFA
  activity."** Three replicates, and they still list what would be needed to confirm or dismiss it:
  repeat over multiple time points to see whether fluoride accumulates as incubation allows, and
  cross-check with a second quantification method.
- Under DFA auxotrophic selection: **no TFA defluorination detected after either round**, and they
  explain why that was the *expected* outcome (no TFA pressure was ever applied, and the DFA activity
  under selection did not itself improve, so no route existed). Where DAR3835 gave no signal at
  OD 0.11 they call the absence **"uninformative rather than evidence against improvement."**
  The one positive: low-copy H1NML rose 9.1 → 16.0 µM total fluoride and ~8 → 59 µM F⁻/OD normalised,
  **while density fell**, which is hard to explain as a density artefact — "the one condition in
  which we observed evidence consistent with improved DFA activity under selection."

### 3. Sensing
- Riboswitch, not aptasensor, and the reason is written down: aptasensors are hard to amplify and
  lack signal reversibility, and the nanomaterial fixes foul — a riboswitch plus a degron on the
  reporter gives reversibility, which a reactor monitor needs.
- **They debugged the method before trusting it.** The first fluoride-riboswitch (AEB-F12) experiment
  failed: high NaF inhibited growth and there was no non-fluorescent control for autofluorescence.
  They built the empty-backbone negative control, **wrote to the author of the original paper**, and
  moved from plate reader to flow cytometer (2 min or 100,000 events; ≥50,000 typical). Then the
  positive control behaved: dose-dependent right-shift at 150 and 300 mM.
- Cloning route changed for a documented reason: restriction–ligation through an sfGFP drop-out
  cassette (XbaI/SacI) "wasn't always as successful, due to the randomness involved and the large
  amounts of laborious steps", so they designed a **Golden Gate** strategy instead, which worked.
- PFOA toxicity assay with acid controls (PFOA behaves as a strong acid, so NaOH-neutralised and
  HCl-only arms) to separate compound toxicity from pH. TFA toxicity assay deliberately *not* run,
  with the reason given: shorter chains are less cytotoxic, so it would have been redundant.
- **14 riboswitches tested: 8 PFOA, 4 TFA, 2 scrambled. Exactly one met the success criterion — and
  it was a PFOA switch, not a TFA one.** Batch 1 were translational ON switches, batch 2
  transcriptional OFF. The claim they make from that is correspondingly narrow: the dry-lab pipeline
  can produce a functional retargeted riboswitch; a working TFA riboswitch does not yet exist and a
  degron still has to be added for continuous use.

## MEASUREMENT — the assay is the deliverable
A colourimetric fluoride assay (alizarin + lanthanum, colour shift on fluoride) rebuilt from a
qualitative published method into a quantitative one, and documented so another team can adopt it:
- Reagents fixed at **1:1, 100 µM**, 1 h incubation. The ratio **denominator is placed at the
  isosbestic point** so small changes in reagent concentration and path length cancel.
- Wavelength pair chosen by search, not by habit: fit every candidate pair over the calibration
  range, keep slope, R² and LOD, lock the pair with the lowest LOD **per medium**.
- LOD = 3.3σ/b, LOQ = 10σ/b, σ from **10 blank wells**. Demi water, 0–40 µM: R² = 0.996,
  **LOD 3.8 µM, LOQ 11.6 µM**. The literature condition (50 µM, 1:1, 620/530 nm) was reproduced
  before anything was changed, so the optimisation has a baseline.
- **Where it does not work is published as carefully as where it does:** phosphate interferes, so
  M9 is unusable; response saturates above 40 µM; 5 mM fluorochemicals suppress the signal by up to
  ~60 % (fixable by dilution). Because the growth medium interferes, a **two-step assay** is needed —
  so they formulated **M9\*(HEPES)** (M9 salts replaced by HEPES, N/P resupplied) which supports
  *E. coli* growth *and* allows screening above the LOD, i.e. grow and screen in one vessel.
- Matrix controls spelled out: M9 as the negative medium control that shows what phosphate
  interference looks like; 93 h *E. coli* supernatant spiked with fluoride for incubation effects;
  medium spiked with fluorochemical for PFAS interference, reported as a recovery value.
- Applied to H1ML and a fluorinase in *E. coli* and *P. putida*; the assay distinguished rates
  between enzymes and between fluorochemicals, runs in parallel, and above 20 µM can be read by eye.

## DRY LAB — two tools, both released, both with their limits stated
**DISARM** (riboswitch retargeting, built on MAWS). Instead of generating an aptamer de novo, it
*retargets an existing one*, which keeps the folding information you would otherwise have to
re-derive. Mechanically: AMBER potential energy as in MAWS, but **subtracting the energy of the
nucleotide alone and the ligand alone**, so what is scored is the interaction rather than a
nucleotide that happens to be comfortable. Top-ranked positions are swapped, **RNAfold** checks the
secondary structure against the original, and candidates whose structure is unchanged are
recommended; if fewer than 50 survive, the list is topped up with structure-changing ones rather
than silently shortened. Ranking is by total interaction energy with the number of swaps also
reported, so the user chooses the trade. Two engineering details that matter more than the biology:
same-base "swaps" are allowed, so a template that already has a good contact is recognised; and
**MAWS had no seed and recorded none, so DISARM sets one and saves it when the user does not** —
reproducibility added to an inherited tool. Output: 50 candidates per ligand (58 with swaps for
PFOA, 59 for TFA). Stated limits: it scores **affinity, not specificity**, so a hit probably also
binds similar molecules (fix proposed: score off-targets and subtract); and it only works for small
ligands, because a bigger ligand needs more swaps and each swap risks the fold. Their own summary:
"DISARM will not hand you one working riboswitch, but it can guide you to test a few dozen rather
than a few billion."

**PIGEON** (Protein In silico Guided Evolution and Optimization Network). Active-learning loop
rather than a scoring model: ESM3 embeddings of the RSc1362 family → **ridge regression** (chosen
because embeddings vastly outnumber training examples) with **repeated leave-one-out CV** → ESM3
guided decoding proposes mutations against a custom objective → candidates folded in **Boltz-2** →
scores appended to the training set → next round. **50 rounds.** The objective is published as an
equation: `1.0·Δbind′ + 0.15·ΔpTM`, where a *loss* in binding is charged **ten times over**, so
binding can never be traded for model confidence (a 0.01 binding loss would need +0.67 pTM to break
even). Binding-pocket residues were protected from mutation to preserve the rational designs; four
designs per parent, ten parents per round, best one per parent carried forward. Result: RSc1362_v3
reached a Boltz-2 binding probability of **0.723, up >33 %** from 0.54, with pTM held. Boltz-2 over
docking because the target is tiny. The caveat box is the part worth copying: a Boltz-2 probability
is **a ranking signal, not a measured affinity**, to be used for deciding what enters the lab, with
experiment as ground truth — and two specific questions are handed to the bench, whether the
predicted binder binds at all and **whether TFA can even reach the pocket**. PIGEON is written to be
re-pointed at solubility, thermostability or ipTM by another team.

## What failed, in their own words
- No screened enzyme has TFA activity (93 h, every trace at or below LOD). The project's central
  enzyme does not exist yet.
- β-lactoglobulin as a positive control: no reproducible shift, so there is no positive control.
- BoltzGen_r1: no detectable interaction.
- DAR3835 construct: dead point mutation, three failed repair attempts.
- The TFA auxotroph: works, but an order of magnitude less sensitive than the formate auxotroph it
  was built from.
- Restriction–ligation cloning of riboswitches: too lossy, replaced by Golden Gate.
- 13 of 14 riboswitches: no response. The one that worked is for the wrong molecule.
- M9 as an assay medium: unusable (phosphate).
- The first fluoride-riboswitch experiment: invalid for want of an autofluorescence control.

## What we would copy
1. **Put the literature search in a table and let it kill the easy plan.** "No protein is reported to
   bind TFA strongly" is why the de novo work is justified instead of fashionable.
2. **Qualify the instrument on a known sample first.** Lysozyme at 70.69 °C vs 68.6 °C published,
   before any candidate is judged by DSF.
3. **Report LOD and LOQ and then obey them.** ~10 µM between a 3.1 µM LOD and a 9.37 µM LOQ became
   "we are hesitant to call this TFA activity" instead of a headline.
4. **Say when an absence is uninformative.** No signal at OD 0.11 is not evidence against
   improvement, and they say so.
5. **Write down what your normalisation assumes.** µM F⁻/OD only means activity if expression per
   cell is constant — which is exactly why they distrust their own round-3 drop.
6. **Publish where the assay fails.** Phosphate, 40 µM saturation, 60 % suppression at 5 mM — and
   then formulate M9\*(HEPES) to get around your own finding.
7. **Add a seed to the tool you inherited.** MAWS recorded none; DISARM does.
8. **Price the trade-off inside the objective function.** Charging binding losses 10× is a design
   decision made legible, not a hyperparameter buried in a config.
