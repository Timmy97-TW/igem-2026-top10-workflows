# NUS-SINGAPORE — ORCHID (Biomanufacturing, Singapore) — Top 10 Undergrad 2026
Title: ORCHID — Observation of Real-time Cellular Health and Intracellular Dynamics for Predictive
Biomanufacturing
Wiki: https://2026.igem.wiki/nus-singapore/
Code: https://gitlab.igem.org/2026/software/nus-singapore/model

## Core idea
Industrial fermentation is steered by **physical and chemical metrics** (pH, dissolved oxygen,
nutrient and product concentration); the **biological** state of the cell is skipped because omics
and LC-MS are offline, destructive and arrive after the batch has finished. ORCHID puts the sensor
*inside* the cell: **SPECTRA yeast**, a set of modular transcriptional (and one non-transcriptional)
stress biosensors in *S. cerevisiae* **BY4741**, reporting ER stress, oxidative stress and energy
stress as different fluorescent proteins read on a plate reader. **SABLe** (Stress-Aware Biological
Learning) is the dry-lab half: a neural network trained on those plate reads that predicts growth,
product and stress from process conditions and proposes the next culture to run. Two halves, one
loop — "the wet lab validates and improves the dry lab model, while the dry lab guides the wet lab's
next steps."

## WET LAB workflow — one pipeline run three times in parallel, once per stress
Sensors were built **in parallel for three stresses but iterated in series**, and a lesson learned on
one sensor was transplanted to the others rather than re-derived.

1. **Protocols are numbered and published as a library, not as prose.** 16 DNA protocols
   **[D1]–[D16]**, 4 yeast protocols **[Y1]–[Y4]**, 13 media/reagent recipes **[M1]–[M13]**, each with
   catalogue numbers (NEB C3019 competent cells, NEBuilder HiFi 2× E2621, Qiagen 28115/27115 columns,
   NEB N0552/N0557 ladders, NEB R0176 DpnI, Axil BUF-3000 TAE, Bio Basic SD7002/SD7003 media,
   ThermoFisher S33102 SYBR Safe, Flavorgen RNA kit, Luna One-Step RT-qPCR kit). Results-page text
   links to the exact protocol for each assay.
2. **Assembly is Gibson throughout** — **NEBuilder HiFi 2× Mix**, 50 °C 1 h (3 h for >4 fragments),
   two- and three-fragment reactions, plus **overlap PCR [D15]** to pre-join fragments and **DpnI
   [D16]** to remove template. Binding sites and tags were introduced **in primer overhangs** rather
   than ordered as synthetic blocks; **QUEEN-2m** was the one externally obtained gene block.
3. **Backbone and chassis held constant so differences belong to the part.** A single low-copy
   **ARS/CEN** yeast plasmid with a **uracil selection marker**, core promoter **cP_ENO1** (or
   **cP_CYC1** as the deliberately weaker alternative), terminator **CYC1t**, reporter **mCitrine**;
   everything transformed into **BY4741** by the LiAc/PEG 3350/salmon-sperm-DNA heat-shock protocol
   **[Y1]** (42 °C, 30 min), selected on YNB + amino acids.
4. **Verification gate: colony PCR → MiniPrep → outsourced Sanger (Bio Basic).** NanoDrop for
   concentration. Sequencing is dispatched via protocol **[D13]** with a fixed sample/primer format.
5. **Fluorescence assay [Y4] is one fixed recipe, varied by one knob at a time.** Two-day pre-culture
   in YNB + 2% glucose → morning refresh to **OD600 = 1.0** → 4 h later re-dilute to **OD600 = 0.75**
   → 200 µL per well in a 96-well plate, **1 µL of a stock** added to hit the final dose → **30 °C,
   190 rpm, 4 h** → endpoint (and in several runs continuous) OD600 + RFU. Blanks are 100 µL culture +
   100 µL DI water. **n = 3 technical repeats within 3 biological repeats** on essentially every
   graph. Stock ladders are pre-made at 20/40/100/200/400/880–1000 mM so that every dose is a 1 µL
   addition.
6. **Dose ladders.** H₂O₂ at **0, 0.1, 0.2, 0.5, 1, 2, 4 mM**; DTT at **0, 0.1, 0.2, 0.5, 1, 2, 5 mM**.
7. **Four extra condition sweeps run on every sensor generation, as deliberate robustness tests**
   (each is the same [Y4] with one substitution): **YPD instead of YNB** (non-selective rich media),
   **2% galactose instead of 2% glucose**, **CuSO₄ added** (the protocol says a 100 mM stock to a
   **100 µM final**; the Results text says cells were "grown in 100 mM of copper sulfate" — the wiki
   contradicts itself here), and **30 °C vs 37 °C run as two identically laid-out plates**.
8. **A crosstalk test is mandatory, not optional.** Every oxidative sensor was dosed with **DTT** and
   every ER sensor with **H₂O₂**, with the same ladder and the same replicate structure, because the
   end goal is multiplexing.
9. **A metabolic-burden test is mandatory too.** Every construct's OD600 was compared head-to-head
   against untransformed **BY4741** across the whole stressor ladder.
10. **An orthogonal-method check:** **RT-qPCR of TRX2** (the native Yap1 target) against housekeeping
    **UBC1**, on AY1 and NY1 at 0 / 0.2 / 0.5 mM H₂O₂, run specifically because an adviser said
    RT-qPCR is what industry would use. Result: RT-qPCR gave **1.2–1.7-fold** — the comparison was used
    to argue *their own sensor's fold change was still too low*, and simultaneously that RT-qPCR is
    high-variance.
11. **Linear-unmixing validation experiments** (separate from the sensors, see MEASUREMENT).
12. A **beta-carotene production and extraction assay [Y3]** (DMSO lysis at 70 °C, hexane extraction,
    A450) and a full **optogenetic part set** (GAL1, blue-light **6xC120-CYC1cp**, red-light
    **8xLexO-Eno1cp**, CrtE/CrtI/CrtYB/tHMG1, EL222 and iLight sensing elements) exist in the Registry
    and in the protocol library — **but no beta-carotene results appear anywhere on the wiki.**

### The three sensor lineages, with what each round actually produced
**Oxidative (Yap1/YRE):**
- **AY1** — 4× **YRE-Alt** (one nucleotide changed, taken from Dacquay & McMillen as their best
  dynamic-range design) + cP_ENO1 + mCitrine. Worked, but **LOD = 1 mM H₂O₂** by ANOVA and max
  **1.6-fold**; 0.1 vs 0.2 mM gave 1.2 vs 1.3-fold and 0.5 vs 1 mM both gave 1.6 — **no usable
  resolution**. Above 1 mM both signal and OD600 collapsed (lethal). Burden confirmed: OD600 **0.45 vs
  0.62** for BY4741 at 0 mM.
- **NY1** — went *against* the literature's recommended construct and used **4× native YRE**. Fold
  change did not move (Hill coefficients **0.76 vs 0.77**); LOD improved to **0.5 mM**. Explicit
  conclusion: the limit is **basal leakiness**, not binding-site affinity.
- **Round 3** — four leakiness fixes, each added **independently** to NY1 on three stated mechanistic
  principles (polymerase run-through, non-specific polymerase affinity, basal transcription):
  **RPP2Bt** terminator upstream, **Sko1** repressor site between promoter and TSS, **cP_CYC1** weaker
  core promoter, **ODC** degradation tag after mCitrine. All four cut basal signal. **Sko1** kept the
  0.5 mM LOD; **ODC** and **cP_CYC1** only reached significance at 1 mM; **NY1+RPP2Bt was declared
  non-functional** (indistinguishable from BY4741) and the stated suspicion is **steric hindrance**
  between RPP2Bt and the YREs, with the fix named as future work (more spacer bp). Headline claim:
  fold change improved **up to 24.6×**.

**ER (Hac1/UPRE):**
- **U1** — a single **UPRE1** (5′ GGACAGCGTGTC 3′, built out from the cUPRE-1 core 5′ CAGNGTG 3′) +
  cP_ENO1 + mCitrine. Worked; **LOD 1.0 mM DTT**, max **2-fold** at 2 mM; signal diverged by 2 h;
  unlike AY1 it did not die back at high dose. **Crosstalk with H₂O₂ was essentially zero** (fitted
  amplitude came out **negative**). **No significant burden vs BY4741** — so the plasmid loss in YPD
  was reattributed to heterogeneous segregation, not burden.
- **U2** — 4× **UPRE2** (10 bp, 5′ CTACGTGTC 3′). LOD unchanged at 1 mM, fold change unchanged, Hill
  **1.63 vs 1.57**. Same conclusion as the oxidative line: basal signal is the ceiling.
- **Round 3** — only the **two modifications that had won on the oxidative sensor** (Sko1, ODC) were
  carried over. On the Engineering page the test result for this round is literally
  **"[To be confirmed]"**; the Results page carries U2+Sko1/U2+ODC numbers in a paragraph still in
  draft form ("AIM: … Results: …"), reporting **U2+ODC crosstalk up to 4.2× with H₂O₂** against
  **~1.1-fold for U2+Sko1**.

**ATP/energy:**
- **Round 1 (CSRE)** — a transcriptional design using **Carbon Source Responsive Elements** from
  **ACS1** and **ICL1** upstream of mCitrine, tested on glucose:galactose ratios. **Non-functional** —
  no dependence on carbon source. Diagnosis from literature: ATP is homeostatically held, and real
  changes happen in **seconds to minutes**, far faster than transcription + maturation.
- **Round 2 (QUEEN-2m)** — abandoned the transcriptional architecture entirely for a **ratiometric
  circularly permuted eGFP ATP indicator** under constitutive **cP_TEF**. 48 h in 2% glucose YNB, then
  switched to 2% glucose / galactose / glycerol / ethanol / no carbon, **fluorescence at 410 nm and
  480 nm read continuously for 4 h**: glucose separated from the rest **within 10 minutes**.

## MEASUREMENT — what makes a result count
- **The unit is RFU/OD600, normalised at the same timepoint**, never against the starting OD600. The
  model page states this explicitly and shows raw vs normalised trajectories side by side because
  "a brighter well can mean more cells, more signal per cell, or both."
- **Fixed, published gain and channel**: mCitrine at **Ex480/Em530, gain = 75**. Growth stays as raw
  OD600.
- **Significance is ANOVA against the 0 mM well**, reported per panel with the full star convention,
  and "limit of detection" is *defined* as the lowest dose that is significant — not eyeballed.
- **Data they refuse to use:** doses where cells are dying give artificially low fluorescence and are
  **manually omitted from curve fitting**; higher doses stay plotted **in grey** so the reader sees
  what was excluded. The Hill fits use only **0–1 mM H₂O₂ (n = 5 dose means)** or **0–2 mM DTT
  (n = 6)**.
- **One Hill equation for every sensor and every crosstalk curve**, so sensors are comparable as
  four-number signatures (baseline R₀, signed amplitude A, K_A, steepness m), fitted by least squares
  on dose means with K_A searched **0.030–30.000 mM** and m **0.4–6.0**, baseline and saturation forced
  non-negative, RMSE reported. **A fit that hits the search boundary is printed as "30.000 (bound)"**
  and flagged as extrapolated rather than quietly reported. Published values include
  U1/DTT R₀ 4735.9, A 5337.5, K_A 0.709, m 1.882, RMSE 101.4; U2+ODC/DTT R₀ 157.6, A 514.5;
  NY1/H₂O₂ R₀ 2125.1, A 1887.1, K_A 0.206; AY1/H₂O₂ R₀ 2157.2, A 1433.0, K_A 0.198; and the bounded
  NY1+Sko1 (A 18421.4, K_A 30) and NY1+ODC (A 700687.4, K_A 30). They also say plainly that these
  bounded fits mean **the response is more linear than Hill-shaped** — and then argue a **low Hill
  coefficient is what they actually want**, because the sensor must be graded, not switch-like.
- **The assay they had to invent: linear unmixing with a ground truth.** Because a strain carrying
  every reporter gives no known correct answer, they **mixed single-reporter strains by volume in
  known ratios** and required the algorithm to recover those ratios from fluorescence alone. Cultures
  were equalised to the same OD600, then **washed and resuspended in water to remove YNB's fluorescent
  B vitamins**, 200 µL per well.
  - **Experiment 1 (three reporters):** BY4741 expressing **mApple / mCitrine / mTurquoise2**, plus
    untransformed BY4741 for autofluorescence and water-only wells for instrument background,
    **6 wells per condition**; full emission scans 400–650 nm at four excitations, plus **six fixed
    channels** (Ex560/Em590, Ex560/Em600, Ex485/Em530, Ex485/Em540, Ex430/Em500, Ex430/Em520). Result:
    **within ~2 percentage points**; a 50/25/25 mix read as 47/25/28.
  - **Experiment 2 (four reporters):** added **eGFP expressed in *E. coli*** — chosen *because* it
    overlaps mCitrine — with two extra **Ex470** channels (eight total), **all 24 orderings of a
    1:2:3:4 ratio** so every reporter appears at every proportion, **triplicate**. Result: **~9
    percentage points**; eGFP overestimated and mTurquoise2 underestimated by **11–12 points** each.
  - They **diagnose the failure instead of excusing it**: the whole plate was **6–17× dimmer**, mApple
    and mTurquoise2 sat only **~160 and ~690 RFU above water**, mTurquoise2's own-channel signal was
    **below the water background**, and unexplained signal gets dumped onto the brightest neighbour.
    The named fix is to repeat at higher cell density.
  - **Channel minimisation as an explicit deliverable:** every channel subset was refitted, and **one
    well-chosen channel per reporter matched the full set** in both experiments (3 of 6, 4 of 8) —
    turning an hour-long spectral scan into a minutes-long read, which is what makes routine
    bioreactor sampling possible.
  - **Honest scope statement:** the mixtures are "a proxy"; autofluorescence currently rides along
    inside each strain's reference spectrum and will have to become **an explicit extra column of S**
    once all reporters sit in one cell.

## DESIGN decisions, each with the alternative and what decided it
- **Transcriptional sensing** for ER and oxidative stress (native UAS → core promoter → FP) but
  **deliberately not** for ATP, after the CSRE sensor failed on timescale grounds.
- **Against the literature's own recommendation**: AY1 used the paper's best-dynamic-range YRE-Alt,
  NY1 used the native YRE the same paper rejected — and the measurement showed neither mattered,
  which is what redirected the whole project to leakiness.
- **Four leakiness mechanisms tested one at a time, never combined**, so the winner is attributable.
  Inherited directly from **NUS iGEM 2021** (Sko1 as an activator+repressor combination).
- **cP_CYC1 chosen *because* it is weaker**, not stronger — the design target was lower basal
  recruitment, not more signal.
- **eGFP chosen as the fourth reporter precisely because it is the hardest case** (20° from mCitrine).
- **Expressing eGFP in *E. coli* rather than yeast was argued for, not hand-waved**: the reference
  spectrum is a property of the protein and was measured from the same culture used in the mixtures,
  and fitting **volume fractions** rather than per-OD values avoids comparing OD600 between yeast and
  *E. coli*.
- **A Gibson screening trick they turned into a published rule:** colony PCR kept giving wrong or
  missing bands; sequencing showed **the backbone had self-annealed despite having no homologous
  site**. Fix: **split the AmpR selection marker across both fragments**, so only a correct join can
  survive. Of **28 colony PCRs across four re-attempted assemblies, only one colony was off**, and the
  approach was adopted for all later two- and three-fragment assemblies. Published as a contribution
  under the heading "When designing Gibson fragments, keep the selection marker split across two
  fragments."
- **Registry output is a modular kit, not a demo**: **17 basic parts + 12 composite parts**, with the
  three sensor generations deposited as separate composites so the lineage is reproducible — e.g.
  BBa_26SJPSKY-class basic parts (4xYRE-Alt, 4xYRE, 1xUPRE1, 4xUPRE2, Sko1, RPP2Bt, ODC, cP_TEF,
  cP_CYC1, CYC1t, QUEEN-2m, mApple/mCitrine/mTurquoise2/eGFP-class reporters), and composites
  `4xYRE-alt-cP_ENO-mCitrine_CYCt`, `4xYRE-cP_ENO-mCitrine-CYCt`, `4xYRE-cP_CYC-mCitrine_CYCt`,
  `4xYRE-cP_ENO-mCitrine-ODC-CYCt`, `4xYRE-cP_ENO-sko1-mCitrine-CYCt`,
  `RPP2Bt-4xYRE-cP_ENO1-mCitrine-CYCt`, `1xUPRE1-cP_ENO-mCitrine-CYCt`,
  `4xUPRE2-cP_ENO-mCitrine-CYCt`, `4xUPRE2-cP_ENO-mApple-CYCt`, `4xUPRE2-cP_ENO-sko1-mCitrine-CYCt`,
  `4xUPRE2-cP_ENO1-mCitrine-ODC-CYCt`, `P_TEF-Queen-2m-CYCt`. New 2026 IDs span **BBa_26212WSS,
  BBa_264JLM5Y, BBa_265JOVTZ, BBa_265K95KY, BBa_2674UEZG, BBa_269Y0SF1, BBa_26A6YDCT, BBa_26BZX8EJ,
  BBa_26CJZAZX, BBa_26CTGU1E, BBa_26EKHUWW, BBa_26FDQ061, BBa_26G2P0F9, BBa_26G6T7VH, BBa_26GPQ6ZN,
  BBa_26I4R5NX, BBa_26KDTVQE, BBa_26KOLP08, BBa_26L065B6, BBa_26MEBDT5, BBa_26MXFL6S, BBa_26R5SXUB,
  BBa_26SJPSKY, BBa_26SLEQH0, BBa_26SMDGIY, BBa_26TPPIV3, BBa_26Z788D4**, reusing
  BBa_K3570021, BBa_K4121019, BBa_K3190050, BBa_K530000/1/2, BBa_K4000002, BBa_25ZJF9QC, BBa_25D3N3TY,
  BBa_25OHBQA0, BBa_25NATICZ. (The wiki does not map each ID to its part name in text, so the pairing
  has to be read off the Registry.)
- **Strains:** NEB Stable Competent *E. coli* and *S. cerevisiae* BY4741, both Risk Group 1; the safety
  page names *S. cerevisiae* sporulation under nitrogen/carbon starvation as the specific hazard to
  immunocompromised handlers, which most teams would not flag for yeast.

## DRY LAB workflow — five cycles, each with the decision it produced and what killed the alternative
| # | Model / tool | Question answered | Verdict |
|---|---|---|---|
| 0 | **Genome-scale metabolic model** (considered) | can pathway knowledge substitute for data? | **No** — dropped after Sook Wei Lim warned GEMs mis-represent real cells (byproducts, competing pathways); SABLe learns from measured biosensor data instead |
| 1 | **Neural State-Space Model** vs **MLP**, on a *synthetic* dataset, 60/20/20 split | is a dynamics-aware architecture worth it? | **No** — both hit **R² 0.76**; complexity unjustified → MLP |
| 2 | **MLP** on real cultures, 4 temperatures (24/27/30/39 °C), **80 condition combinations** | can it predict growth/product/stress? | **Failed in the lab** — picked **37 °C**; predicted **5,019** mApple RFU/OD600 vs **~783** measured across three cultures (0.5 mM DTT, 0.2% galactose), **product R² ≈ −3.92** at 37 °C while growth R² stayed 0.86 |
| 3 | Same MLP, **39 °C excluded** | was the anomaly the data? | R² **0.949 / 0.840 / 0.828** and a 26–27 °C recommendation — then **rejected by the team themselves**, because the 27 °C cultures started at **half** the cell density and came from a **different batch**: normalisation fixes the arithmetic, not the batch effect |
| 4 | MLP on **one consistent batch** (24 + 30 °C, **40 conditions**) + **uncertainty-based exploration** over **10 bootstrap models** | what should we run next? | R² **0.955 ± 0.002 / 0.891 ± 0.020 / 0.842 ± 0.012**; gradient ascent only returned a corner already measured, so the **exploration score** proposed **27 °C, 1 mM DTT, 0.15% galactose** |
| 5 | **UMAP** on the MLP's **64-dim latent space**, 20,000 simulated conditions | what did the network learn? | an unbuilt-in **DTT → stress → product** association: **79%** of high-predicted-product conditions were high-DTT, **81%** high-predicted-stress |

Details that matter for method:
- **Data:** 2 temperatures × **5 DTT doses (0–1 mM)** × **4 galactose doses (0–0.2%)** = **40 unique
  conditions**, **3 independent plate cultures** each, read at **0, 3, 5, 7, 9 and ~24–26 h**;
  technical wells averaged first; **700 culture-time records** survive. **The independent unit is
  declared to be a whole culture, not a well.**
- **Hold-out discipline:** whole condition combinations are kept together — all three cultures and all
  timepoints of a combination go to the same split — **60% train / 20% validate / 20% test**, then
  **5-fold condition-grouped cross-validation reshuffled five times**. This is the single most careful
  thing on the page.
- **Architecture, fully stated:** MLP, inputs temperature / DTT / galactose / **time of measurement**;
  hidden **128, 128, 64 with ReLU**; outputs OD600, mApple/OD600, mCitrine/OD600; **each requested
  timepoint predicted directly** rather than integrated forward. RMSE in native units:
  **0.054 OD600, 85 RFU/OD600 (mApple), 710 RFU/OD600 (mCitrine)**.
- **Why ML at all is justified by a failed mechanistic model, not asserted:** they first fitted Hill
  dose-responses plus simple ODEs (logistic growth dN/dt = µN(1−N/N_max), and
  ds/dt = k_S·S_T(D) − γ_S·s, dp/dt = k_P·P_T(G) − γ_P·p). Growth fitted at **R² ≈ 0.91–0.93**; the
  stress signal at **0.33–0.47** and mApple at **0.41–0.42**. That gap is the stated reason for the
  network.
- **Exploration rule written as an equation:** E(x) = σ(x)/max σ + d(x)/max d, where σ is the spread
  of ten bootstrap predictions and d the scaled Euclidean distance to the nearest already-measured or
  already-proposed point; exploit only if mean − 1 SD still beats the best measured signal. Labelled
  explicitly as "decision rules, not estimates of biological certainty."
- **Linear unmixing, written out as maths:** y = S f + b + ε solved as **non-negative least squares**
  (Lawson–Hanson), with background b measured from water wells and subtracted first, and the residual
  interpreted as an unexpected fluorescent source. Separability is quantified two ways — **pairwise
  angle between reference spectra** (mApple/mCitrine/mTurquoise2 **83–88°**, κ ≈ **1.2**; with eGFP,
  mCitrine–eGFP **20°**, others 62–81°, κ ≈ **7.1**) and a **simulation-derived threshold**: 3,000
  random two-reporter mixtures per angle from 2° to 90° with **5% noise** gave **28°** as the angle
  below which median error exceeds 5 points. mCitrine–eGFP sits **below** their own threshold and they
  say so. Named future alternative for dim signals: **Richardson–Lucy** spectral unmixing.
- **UMAP is stress-tested rather than shown once:** drawn **16 ways**, with the stated reading that
  "the shapes and spacing move" and only the colour gradient is informative; the axes are declared to
  have no biological units.
- **The loop actually closed, and the closure is reported with its miss.** The model's 27 °C
  recommendation was grown: 24 h cultures, nine DTT/galactose combinations, three cultures each. At
  **0.5 mM DTT / 0.2% galactose** the late read reached **491 mApple/OD600** vs **204 at 24 °C** and
  **179 at 30 °C** (**2.4× and 2.7×**) — but the **frozen** pre-experiment model had predicted only
  **188**, i.e. it underestimated by ~3×. Both the hit and the miss are presented as the output.
- **Mechanism check on their own discovery:** the DTT→mApple association was re-tested on measured
  cultures (Spearman ρ, e.g. **0.404, p = 0.136** at 24 °C/0% galactose vs **0.873, p < 0.001** at
  24 °C/0.05%), fitted trends of **~13×, 7.8×, 5.2× per mM DTT** at 24/27/30 °C with galactose present,
  and a **no-galactose control used to bound mCitrine→mApple optical bleed at ≤8%** of the rise. The
  p-value is labelled **exploratory** because the cultures share three plates, and causation is
  explicitly disclaimed.
- **Tooling gap:** no plate-reader model, no ML framework (PyTorch/scikit-learn/TensorFlow), no
  language or version, and no package versions are named anywhere on the wiki; only the GitLab
  notebook link stands in for them.

## Named failures, negative results and explicit caveats
- **CSRE/ACS1/ICL1 ATP sensor: non-functional**, and the architecture (transcriptional) was identified
  as the root cause, not the parts.
- **NY1+RPP2Bt: non-functional**, indistinguishable from untransformed BY4741, with a mechanistic
  hypothesis (steric hindrance) and a concrete fix deferred.
- **Binding-site engineering did not work, twice** — neither YRE-Alt→native YRE nor 1×UPRE1→4×UPRE2
  improved fold change. Both negative results are what produced the leakiness programme.
- **Leakiness exceeded maximum amplitude** in NY1 (R₀ > A), i.e. fold change capped below 2, stated
  plainly.
- **Metabolic burden is real for the oxidative sensor and absent for the ER sensor** — and because U1
  showed no burden, the YPD plasmid-loss explanation was *revised* from "burden" to "heterogeneous
  segregation."
- **NY1 does not work at 37 °C** (response curve flattens) and **loses responsiveness in galactose**
  (galactose respiration pre-activates TRX2) — both published as limitations of the deliverable.
- **CuSO₄ chemically neutralises H₂O₂**, so the high-dose response is partly masked; they reason that
  since a fold change survives at 4 mM, it cannot have consumed all of it.
- **U2+ODC shows severe crosstalk (up to 4.2× to H₂O₂)**; U2+Sko1 ~1.1×. Sko1 is simultaneously the
  best for signal and the worst for crosstalk on the oxidative side — the trade-off is named.
- **Hill fits that hit the K_A = 30 bound are labelled as such** and the curve is said to be
  ill-fitted.
- **39 °C data discarded** for excessive replicate variance; **27 °C data discarded** for confounded
  starting OD and batch.
- **The ER Round 3 test reads "[To be confirmed]"** on the Engineering page, and the matching Results
  text is still in draft "AIM: … Results: …" form — the wiki ships visibly unfinished in that one spot.
- **Explicitly unvalidated:** the 25–27 °C exploration proposals are "model recommendations for future
  testing, not completed wet lab validations"; the 27 °C result "requires further work to verify";
  the DTT–mApple link "does not establish a causal mechanism"; unmixing is validated **only on cell
  mixtures**, never on a co-expressing strain, which does not yet exist; **ORCHID has never been run
  in a bioreactor** — the Implementation page is a three-stage vision, not a demonstration; and the
  beta-carotene/optogenetic validation layer is deposited as parts with a protocol but **no data**.
- One cross-page number mismatch worth noting: the UMAP stress/product overlap is given as **81%** on
  both pages but the companion product–DTT figure is quoted as **79%** on the model page and the
  Engineering page reports the same analysis against a **24/30 °C** model it calls a pending
  sensitivity check.

## Integrated HP, as workflow rather than outreach
A single named loop — **Question → Engage → Investigate → Integrate** — run **19 numbered cycles**
(1.1–4.5) across **~21–23 logged engagements**, with each cycle's effect on the build written down.
Three traceable redirections: Dr Dong Yup Lee's point about thousands of interlinked reactions
**killed the digital-twin goal** and produced the framework; Sook Wei Lim's warning **killed the
genome-scale model**; Dr Jee Loon Foo's remark that industry assays stress by RT-qPCR **created the
TRX2 RT-qPCR benchmark experiment**. The Description page also ships a **"non-specialist mode"**
toggle that swaps in inline definition pop-ups, and the wiki opens with a **reading-order flow
diagram** plus a four-icon legend (goal / worked / did not work / tip for future teams) used
consistently on every page.

## Workflow signature
Three sensor lineages built on one frozen backbone and one frozen 4-hour plate assay, then driven
through rounds where **only one variable moves** — so when binding-site engineering failed twice in a
row, the failure itself was readable as "the ceiling is leakiness," and four leakiness mechanisms could
then be tested one at a time and ranked. The team treats **crosstalk, metabolic burden, and three
alternative media/temperature conditions as mandatory per generation**, not as extras, and fits **the
same Hill equation to every curve** so any sensor becomes four comparable numbers with a visible
exclusion rule for dying cells. On the dry side they are unusually willing to **throw away their own
model's recommendation on methodological grounds** (the 39 °C variance, the 27 °C batch confound) and
to keep whole-condition hold-outs intact; the loop is then closed once for real, and the write-up
leads with both the 2.4–2.7× hit and the 3× underprediction. What is distinctive is less any single
technique than the habit of **building a measurement's ground truth before trusting the measurement** —
mixing single-reporter strains in known ratios rather than assuming unmixing works, and minimising the
channel set so the readout would survive contact with a real bioreactor.
