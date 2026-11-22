# GCGS — Dual-response EcN (Diagnostics village, Foshan, China) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/gcgs · **Best New Improved Part (HS)**; village nominee (health group),
Best Presentation and Best Wiki nominee. Homepage runs SENSE / RESPOND / RESTORE. No codename.
Note: registered in **Diagnostics** although the project is a therapy.

## Core idea
An *E. coli* **Nissle 1917** probiotic carrying a **Fur–RhlR AND gate**: it fires only where cystic
fibrosis mucus is both iron-starved (host nutritional immunity) and full of *P. aeruginosa*
quorum signal. Effector: alginate lyase, to break the alginate-rich biofilm.

## Modules, each characterised alone
1. **Iron-sensing gate.** Two iron-regulated promoters compared with mCherry. **P_fepA gave a
   negligible rise even under strong chelation (2,2′-bipyridine, DP)**; **P_fhuA1** held low basal
   expression under iron-rich conditions and activated dose-dependently, peaking at **200 µM DP**.
   Growth curves confirmed DP was not severely cytotoxic in that window, so the signal is promoter
   activity and not cell density. P_fhuA1 chosen.
2. **Quorum module.** RhlR chosen because many clinical CF isolates lose *lasR* but keep RhlR. The
   existing part **BBa_K2315014** leaked. Four SsrA tags (LAA, LVA, ASV, AAV) fused to RhlR's
   C-terminus: leakage fell but **most variants lost C4-HSL induction completely** — diagnosed as
   wild-type P_rhl being too weak to survive SsrA degradation. Fixed with **another team's part**,
   the enhanced **P_rhl(LR) (BBa_K1529310)** from TokyoTech 2016. Best: **RhlR-SsrA-ASV + P_rhl(LR)**,
   submitted as **BBa_26QSD9SO**. Note their own table scores LVA as fastest-degrading while the
   text blames LAA's turnover for the growth penalty.
3. **Effector.** PL5-family alginate lyase (GenBank AAR23929.1, from *Pseudomonas* sp. QD03) in
   BL21(DE3), Ni-NTA purified, DNS assay. Optimum **37 °C**, pH optimum **8.0** with activity
   retained at 7.0, no saturation 0–60 min, ~42.2 kDa band. An extra close-migrating SDS-PAGE band
   was attributed to incomplete denaturation.
4. **Assembled gate** in EcN, GFP version and effector version (alginate lyase strong RBS, Lysis E
   weak RBS). Over 8 h, **only low-iron + high C4-HSL gave a prominent rise**; five other conditions
   stayed near basal. After IHP feedback they added a gradient: **C4-HSL LOD 53.1 nM, R² = 0.894**,
   with weak secondary activation by C12-HSL. The assembled gate used 100 µM DP where the promoter
   screen peaked at 200 µM.

## The discrepancy to report fairly
Results §4 describes a therapeutic-effect test in **artificial lung fluid** (supernatant SDS-PAGE,
DNS activity, Lysis E autolysis); the **Discussion says that same test "has not been fully
completed"** and that they "lack direct evidence for circuit-triggered protein release in
CF-mimicking medium". Engineering Cycle 4 reads with §4. A reader cannot tell which is current; the
safe reading is the cautious one. No speculation about why.

## Published limits
School safety rules prevented any work with live *P. aeruginosa* biofilm, so activity was measured
only on purified sodium alginate in a cell-free assay — **Dr. Ran An** quoted that substrate-level
data cannot predict real biofilm degradation. No strain survival, circuit stability, horizontal gene
transfer or microbiome data; **Dr. Huihui Bao** on those being mandatory for registration. The
inhaled live-biotherapeutic formulation (trehalose–mannitol spray-drying, mesh nebuliser or DPI) is
labelled an expert-guided **conceptual** design. Their model/measurement/hardware/software pages are
unfilled iGEM template text.
