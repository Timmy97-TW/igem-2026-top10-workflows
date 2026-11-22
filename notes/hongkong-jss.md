# HongKong-JSS — MerMAID (Agriculture, Hong Kong) — High School 1st RUNNER-UP 2026
Wiki: https://2026.igem.wiki/hongkong-jss · Best Village Project (Agriculture / Food & Nutrition /
Fashion & Cosmetics / Art & Design group) winner · Gold.
Full name: **MerR-based Mercury Assay for In-field Detection.**

## Core idea
A mercury-ion biosensor plus a portable fluorescence detector, aimed at **agricultural water and
soil** rather than at finished food. Principle: **Hg²⁺ recognition → reporter expression → visible
colour and measurable fluorescence.** *E. coli* with **MerR + the mercury-responsive pMer
promoter–operator** driving the red reporter **mRFP1e**, so one reporter gives two readouts.

**Why agriculture rather than seafood**, argued from somebody else's data: in Guizhou, Zhang et al.
found **rice rather than fish** was the principal methylmercury exposure pathway; in flooded
paddies anaerobic microorganisms methylate inorganic Hg²⁺ and crops translocate MeHg into grain.
Hong Kong grew about **2 % of its own fresh vegetables in 2024**, which is why the team frames the
problem as regional rather than local.

**Two scope statements that most teams would have left out:**
- *"These findings do not establish widespread mercury contamination of Hong Kong farmland.
  Rather, they motivated our preventive approach."*
- *"Our project targets Hg²⁺, an inorganic mercury ion. It does not directly measure methylmercury
  in rice or determine the total mercury content of food."*

## Engineering — two recognition strategies, one abandoned with its assumption named
The original plan was to develop **two** strategies in the same chassis with the same reporter so
they could be compared directly: a protein sensor (MerR) and an **RNA switch** built by adapting a
DNA mercury-recognition motif into an RNA regulatory structure.
The RNA route failed, and the post-mortem is the most transferable sentence on the wiki:
*"Reviewing the design revealed **an untested assumption**: we had transferred a DNA recognition
motif into an RNA regulatory structure without establishing that it would retain the necessary
binding and switching behaviour."* They stopped that route and concentrated on MerR.
They also describe the MerR mechanism correctly rather than loosely — MerR stays bound to its site
and mercury changes promoter DNA geometry to favour activation, *"MerR does not simply detach to
release repression"* — which matters because the wrong mental model would predict the wrong
leakiness.

## Results — the most carefully controlled High School dataset we read
**More than ten biosensor variants screened; Design 429 carried forward.** Characterised in **five
matched, independent runs from 0.005 to 5 µM Hg (≈1–1,000 ppb)**, measuring **pellet colour, pellet
fluorescence and culture fluorescence on the same cultures** so the three formats can be compared
without comparing unrelated experiments.
- **Graded response:** both pellet signals rose at every dose step of the four-hour series, and
  **all 51 assessed treatments exceeded their matching controls in both pellet formats.** The two
  pellet readouts ranked concentrations identically, **Spearman's ρ = 1.00.**
- **Low end:** at ≈1 ppb both pellet readouts rose above matched controls in **five of five runs**
  (paired t-test p = 0.0080 colour, p = 0.0346 pellet fluorescence).
- **Best readout:** at 5 µM pellet fluorescence gave **7.95× fold response** against 3.26× colour
  and 1.61× culture fluorescence, and was largest in every matched run. Between-run variation
  **7–9 % at ≈6–20 ppb**, while **colour was the steadier readout at ≈1–2 ppb** — so the
  recommendation is concentration-dependent rather than a single winner.
- **Selectivity:** mercury beat Pb, Zn and Cd in **all eight matched comparisons for every
  readout**; largest non-target response **6.5 % of the matched mercury response for pellet
  fluorescence, 32.0 % for colour.** The weaker readout's weakness is published.
- **Robustness by leave-one-run-out:** adding Run 4 moved the 5 µM fold responses only slightly
  (3.26× → 3.15× colour; 7.95× → 8.20× fluorescence), and removing Run 5 left the dose trend
  intact.
- **Run bookkeeping as a published table.** Run 1 used a different measurement OD; Runs 2–3 had an
  unusual reading or incomplete growth records; Run 4 is a robustness check; Runs 5–9 are the main
  matched comparison. *"Earlier results remain in the raw record. We did not assume that unusual
  results proved a particular handling error."*
- **The replicate definition, written down:** *"Each run was initiated from a separately prepared
  biological culture and analysed as one biological replicate. Different timepoints and ImageJ
  regions from the same run were not counted as additional biological replicates. Measuring the
  same experiment several times gives more information about that experiment, but does not replace
  repeating the experiment independently."*
- **Imaging controlled:** the **same phone camera with locked settings** throughout, ImageJ with
  three defined measurement methods (pellet colour on a white tile, green channel; pellet
  fluorescence; culture fluorescence), each with its own reference and calculation.

**And the limitations box, which is the part we would copy verbatim:**
- *"Our thresholds were calculated and evaluated on the same five runs, so **1 ppb is the lowest
  concentration tested, not a validated detection limit.**"*
- The visual readout **needs a centrifuge**: colour in unspun culture is distinguishable by eye only
  above about 0.5 µM.
- **Soil mercury was not measured directly**, and the alginate bead work was qualitative.

## Towards field use
Soil extracts gave pellet-fluorescence responses **up to 10.44×**; **alginate-encapsulated cells**
produced visible red at some 1 and 5 µM treatments, showing the reporter survives encapsulation; and
they built a **3D-printed fluorescence box (BP570 excitation, BP610 emission)** and imaged every
sample with one phone at locked settings.

## Hardware — changed by user testing, with the gap left open
An **Extraction Unit** (environmental matrix → assay-ready sample) and a **Detection Unit**
(reporter output → digital readout). Agricultural personnel tested **Extraction Platform V1.0**
(2 µm pre-filter + 0.45 µm membrane) and reported **excessive syringe force, too many manual steps,
and liquid left in the tubing needing an air purge.** V2.0 answered with **push-button peristaltic
pumping and narrower tubing** — and the wiki then says the change "addressed the reported
difficulties, although **complete-workflow usability remains to be evaluated**." The feedback loop
is published as what users experienced → what was changed → **what still requires evaluation**.

## What we would copy
1. **Define a biological replicate in writing, and say what does not count as one.** Timepoints and
   ImageJ regions from one run are not replicates.
2. **Publish a run table with each run's role**, including the ones excluded from the main analysis
   and why — and keep them in the raw record.
3. **Say "lowest concentration tested, not a validated detection limit"** when thresholds were fitted
   on the same runs they are evaluated on.
4. **Compare readouts on the same cultures**, so the comparison is between formats and not between
   experiments.
5. **Report leave-one-run-out robustness** as two numbers, before and after.
6. **Name the untested assumption when a route fails.** A DNA motif moved into an RNA context, with
   no evidence it keeps its behaviour.
7. **Lock the camera settings.** A phone is a perfectly good instrument if you treat it like one.

## Additions from the full wiki read (22 Nov)
- **13 prototypes**, 2 aptamer-based and 11 protein-based; **two protein designs responded**. The
  working construct is **Design 429**, submitted as **BBa_26BL7PZU**.
- Range-finding ran 0–15 µM before the matched comparison; the main matched comparison is their
  **Runs 5–9** (five runs, numbered 5 to 9 — their labels, kept rather than renumbered).
- Selectivity against other metals: **6.5 %** and **32.0 %**.
- Calibration published as **log-linear equations with 20 calibration and 10 held-out measurements**
  and RMSE in µM. Untreated controls were used for background subtraction but **not included as
  concentration points, because the logarithm of zero is undefined** — their reasoning, published.
- Earlier screens had **missing controls**, which they report and then fix; there is a **P3
  subculture scare** and an **ECF20 reversal** in the engineering record.
- Dry lab also covers **PHREEQC** and **OpenFOAM** work plus a Route-1 extraction model.
- Hardware splits cleanly into **built and tested** (imaging box, Detection V1–V3, Extraction V1–V3,
  each with run statistics) and **proposed** (Detection V4.0 direction, UV-AOP Tracks A and B).
- Ten separate places where they refuse to over-claim, including: the detection limit, the definition
  of a replicate, naked-eye reading, reference division, soil extracts, the Hg²⁺-only target,
  motivation versus evidence, the green LED, the model page auditing its own held-out set, and who
  did the cloning.
