# Lambert-GA — SWARM (Conservation, USA) — High School GRAND PRIZE 2026
Wiki: https://2026.igem.wiki/lambert-ga · Best Village Project (Climate Crisis / Conservation /
Bioremediation group) winner · Gold.

## Core idea
Protect honeybees by attacking **both** halves of the main threat: **Deformed Wing Virus (DWV)** and
the ***Varroa destructor*** mite that spreads it.
- US beekeepers reported losing **55.6 % of managed colonies between April 2024 and April 2025**;
  Georgia operations lost ~88,000 colonies Oct 2025–Jun 2026 at 17–20 % quarterly.
- Current treatments and their limits are tabulated: synthetic miticides (documented resistance, wax
  residues), organic acids (formic harms brood at high temperature, oxalic does not penetrate brood
  cappings), mechanical methods (need combining), and the 2025-registered RNAi product Vadescana
  (**targets one mite gene, not DWV; requires open brood**). The gap in that table is the project.
- Quote that frames it, from Claressa Lucas of the Metro Atlanta Beekeepers Association: *"It's not a
  matter of if there are Varroa mites. Every colony has them."*

## Two wet-lab components
**1 · Minibinders against DWV VP3.** Started from a study where antibodies against capsid proteins
VP1/VP3 cut viral loads eightfold. Antibodies were rejected over digestion stability; **nanobodies
were rejected on the advice of Dr. Aashish Manglik (UCSF)** — "For our computational design
projects, we still make libraries of hundreds or thousands of candidates" — i.e. rejected on
screening economics, not on biology. Minibinders chosen instead, with a published comparison table
(size ~6–22 kDa vs ~15 nanobody vs ~150 antibody; melting temperatures; origin).
Target narrowed to **VP3's exposed P-domain** after contacting Prof. Benjamin Lamp and Prof.
Tatsuhiko Kadowaki. The P-domain is flexible and therefore a hard target, which Adaptyv Bio's Tudor
Cotet and Corey Howe addressed by recommending **binding hotspots**.
- **Round 1: 15 candidates, no confirmed binding.** Published as such.
- After feedback from an engineer at Boltz they refined the target structure and redirected designs
  to more accessible hotspots, and built **PRINCE** to choose them.
- **Round 2: 20 designs, one confirmed binder.** "To our knowledge, this is the first reported
  minibinder with confirmed binding to DWV's VP3, developed from **35 tested candidates with under
  $400 spent on computation**" — against a cited $10,000 GPU budget per single-target campaign in a
  recent Anthropic study. The economics *is* the contribution.
- Adaptyv BLI screening: lead candidate **603.6 nM combined affinity across two replicates
  (95 % CI 497.1–733.3 nM)**.

**2 · Multiplexed RNAi against Varroa.** siRNAs designed in-house against **three salivary gland
genes — Vd-CHIsal, Vd-CHIBIN, VdAV422** — multiplexed specifically to address the resistance problem
their own Table 1 identifies in single-gene treatments. Sf9 insect cells as the model system.

## The measurement discipline, which is the surprising part for a High School team
Every claim on the results page is sized to its evidence, and several are sized down to nothing:
- Minibinder co-elution: ImageJ integrated density published per fraction (VP3 peak 46,290 in Wash
  4, 32,936 in Elution 1; minibinder alone max 2,783). Combined sample Wash 3: anti-His 8,427,
  anti-FLAG 7,501. Conclusion kept at "**preliminary evidence** … although further testing is
  necessary to confirm binding specificity", with the logic spelled out — the minibinder has no His
  tag, so co-elution is the signal.
- A **GFP–nanobody positive control** run to validate the pull-down method itself (76 % of GFP-only
  fluorescence in flowthrough vs ~91 % of combined-condition fluorescence in the low-imidazole
  washes), and they state it used an **established anti-GFP nanobody, not their own de novo GFP
  candidates**.
- On the BLI result: the validation "**distinguishes binding to the tested VP3 construct from
  antiviral protection in bees, which was not established by this assay.**"
- RNAi gel: "**The gel alone does not establish sequence identity, complete annealing, or
  gene-silencing activity.**"
- Reporter plasmid: colony growth on selection "did not by itself confirm correct reporter
  assembly"; four colonies pooled to 177.7 ng/µl and then — "**No diagnostic digest or sequencing
  result is reported, so the identity of the pooled reporter preparation remains unverified.**"
- They even explain a step they skipped and why: no gel check of the HiFi assembly, because low DNA
  concentration plus anomalous migration of circular products would have been uninterpretable.
- 12 transfection conditions in Sf9: **inconclusive**, with two named causes (cell availability
  below what the design needed, so density was inconsistent; substantial background luminescence).
  "None of the tested conditions could be confidently identified as optimal", so siRNA knockdown
  could not be evaluated at all.

## PRINCE (software) — the dry-lab contribution, validated like a paper
Purpose written from their own failure: round 1 produced no binders from 15 candidates "despite
promising computational predictions", which "prompted us to reconsider how we selected binding
sites". Dr. Michael Hecht (Princeton) on the uncertainty of epitope selection pushed the same way.
- PRINCE ranks surface **patches** rather than individual residues, so candidate interfaces can be
  compared; combines a trained antibody-epitope ranker with a lightweight structural surface scorer.
- A **crystal-contact and geometry check**: compares a chain alone against its crystal surroundings,
  flags where neighbouring copies cover a proposed site, and flags missing sections and positional
  uncertainty — because "a region exposed in an isolated protein or cropped structure may be less
  accessible in the biological assembly."
- Presents **literature evidence alongside** the structural analysis.
- **Validation with a homology-controlled split**, which is the part worth copying: benchmark of
  **6,937 experimentally observed antibody–antigen interfaces across 1,549 antigen clusters**, split
  **by antigen cluster** with sequence-homology checks between train/validation/test. Cluster-averaged
  **top-three majority-hit 50.8 % across 251 test clusters against 23.3 % random**; and in the
  harder retrospective subset of **93 clusters with no training homolog at ≥30 % identity, 45.8 %
  against 23.8 % random.** A "hit" is defined (≥1 of 3 patches containing >50 % true epitope
  residues). Also compared at residue level against **BepiPred-3.0 and PeSTo** on 110 common
  interfaces.
- Shipped as an open-source web app **and** a CLI.

## Hardware — Vapor-X, and the external validation
An automated vacuum dryer built because "drying biological samples often requires equipment beyond
the budgets of school laboratories": **$80.07 in prototype components, $95.52 including PCB
assembly.** A pump lowers chamber pressure so liquid evaporates at lower temperature; a small
controller runs pump and heater together. Refined across successive prototypes (chamber seal,
heating, sample holders).
**Tested by somebody else, which is rare at any level:** external testing at the **University of
Alabama at Birmingham recovered 38 of 43 measured compounds (88.4 %) within 5 % of undried
controls**; further testing at **Georgia Tech** showed GFP fluorescence comparable to controls after
drying GFP DNA and cell lysates. Plus internal recovery tests and classroom use.

## Other models
Four modelling tabs: minibinder design, minibinder dosing, RNAi, and a **six-year colony
epidemiological model** testing how SWARM could preserve colony survival and crop pollination in
**Atlanta and Ithaca** — two sites, not one.

## What failed
- Round 1 minibinders: 15 candidates, zero confirmed binders.
- Nanobody route abandoned on screening economics.
- Sf9 transfection optimisation: inconclusive, two causes named.
- RNAi silencing: never evaluated, because the reporter assay never worked.
- Reporter plasmid identity: unverified, and said so.

## What we would copy
1. **Put the competing treatments in a table and let the empty cell be the project.** Vadescana
   targets one mite gene and not the virus; SWARM targets both.
2. **Reject a method on screening economics and say so.** "Hundreds or thousands of candidates" is
   why a High School team cannot use nanobodies, and that is a legitimate, publishable reason.
3. **Report the cost of the computation.** $400 against a cited $10,000 benchmark makes the result
   reproducible by other school teams, which is the actual contribution.
4. **Split your benchmark by cluster and report the no-homolog subset separately.** 50.8 % overall,
   45.8 % with no training homolog, 23–24 % random — three numbers, and the middle one is the honest
   one.
5. **Say what a gel does not establish.** Three separate times on one results page.
6. **Get your hardware tested by somebody who does not want it to work.** UAB and Georgia Tech, with
   the recovery fraction published as 38 of 43.
