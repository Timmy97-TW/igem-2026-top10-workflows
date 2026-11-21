# HangzhouFourteenAP — dental biofilm glycosidases (Biomanufacturing, Hangzhou, China) — Top 10 HS 2026
Wiki: https://2026.igem.wiki/hangzhoufourteenap · **Best Village Project (HS)** for the
Space/Foundational Advance/Software & AI/Biomanufacturing group; nominee for Best Measurement, Best
Presentation, Best Wiki and Best IHP (HS). No short codename.
Repo is Vite/React; page prose lives in `src/data/pages/*.ts` plus `src/data/documents/*.json`.

## Core idea
Attack dental calculus and cariogenic biofilm as a polysaccharide-matrix problem: two glycosidases
with complementary linkage specificity plus an antimicrobial peptide.

## Burden framing (their numbers)
Oral disease affects an estimated **3.7 billion people**; India and China carry the largest
cumulative caseloads of the top five oral diseases at **632 M** and **599 M**; the Western Pacific
Region has ~**960 M (43 %)** with untreated conditions and an estimated **US$192 bn** burden. China's
Fourth National Oral Health Survey: **96.7 %** of adults 35–44 with calculus, **87.4 %** with gingival
bleeding, calculus detection **84.5 % at 12** and **91.0 % at 15**, only **9.1 %** with a healthy
periodontium, elderly past-year dental visit rate **20.1 %**.

## Four constructs, one of which failed
All codon-optimised, Gibson-assembled into **pET-32a** (Trx-His fusions), cloned in DH5α, expressed
in ***E. coli* Rosetta(DE3)**: glycosidases **CoGH66** and **PmGH87**, peptides **18aa** and **21aa**.
Colony PCR insert bands ~1777, ~2917, ~141 and ~154 bp.
Induced bands **~76.54 kDa (CoGH66)** and **~116.24 kDa (PmGH87)**, mostly soluble; after native
Ni-affinity and **on-bead enterokinase cleavage**, tag-free at **~59.46** and **~99.16 kDa**. The
**21aa** fusion expressed at **~19.55 kDa**; the **18aa gave no detectable induced band** and no
inhibition zone. Three candidate explanations published — poor expression, rapid degradation, host
toxicity — and 18aa dropped.

## The control design, which is the thing to copy
**α-1,3-glucan extracted from shiitake (*Lentinula edodes*)** by solvent extraction, alkaline
treatment and acetic acid precipitation. DNS reducing sugar; glucose standard curve
**y = 3.702x + 0.3017, R² = 0.9606**. Each enzyme run against **PBS, a heat-inactivated preparation,
and the swapped linkage type**: PmGH87 active on α-1,3 and inactive on α-1,6 (so strictly
α-1,3-specific); CoGH66 strongly active on α-1,6 and weakly on the shiitake extract, consistent with
α-1,6 branches in it. Complementary specificity is the stated reason for combining them. Mean ± SD,
three independent replicates. **21aa gave a clear inhibition zone; 18aa and the negative control none.**

## Correction to our first read: the combination *was* tested
The **measurement** page runs the "subsequent artificial calculus degradation experiments" the results
page points forward to: a *B. subtilis* biofilm plus five mineralisation cycles, then a **six-arm
leave-one-out design** (PBS, −DNase, −papain, −PmGH87, −CoGH66, Complete) read by gravimetry, crystal
violet (**57.1 %** reduction vs PBS, F(5,12) = 29.8) and acridine orange (**91.4 %**, F = 82.0).
**Gravimetry failed to discriminate, and they publish that.** Open: *B. subtilis* not *S. mutans*
(White List; HS teams cannot file a Check-In Form), no mineral-phase measurement, n = 3 with
uncorrected planned t-tests they label exploratory themselves, single application, no mouth. The
95.5 % biofilm-degradation headline is **borrowed from Cortez et al.**, not theirs.

## Dry lab is real modelling
Structure → conservation → energy pipeline on CoGH66: PDB **8IUB** already substrate-bound (no
docking), PyMOL 4.0 Å pocket = 18 contact residues, MAFFT/ESPript over 30–70 % BLASTp homologs
leaving 7 substitutable sites, **12 mutants scored in FoldX against a pre-declared threshold** — and
**the bench reversed the ranking**: Q172P net OD₅₄₀ **1.881** vs WT **0.996** vs Y166Q **0.629**,
after BCA-normalising crude lysate to 5 µg/mL, with Q172P winning on the lowest protein load. Both
mutants registered as parts. The GBD-2019 maps and Remotion calculus renders are figures, not models.
