# HongKong-HS — AmpliRen (Diagnostics, Hong Kong) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/hongkong-hs · nominee for Best Village Project
(ID/Therapeutics/Diagnostics/Oncology group) and Best Wiki (HS). **No special prize won.**

## Core idea
Detect **chronic kidney disease** from **urinary miRNA**, amplified **enzyme-free** by
**hybridisation chain reaction (HCR)** and read through **toehold switches** in a cell-free system.
Two targets carried in parallel rather than one: **miR-21-5p** (fibrosis) and **miR-192-5p**
(TGF-β1-linked, earlier), picked by a written screen from five candidates. The results page is framed
"from design to evidence".

## Design versus evidence — the split that matters
**Data:** cloning of all four switches (plate controls plus published Sanger traces for all four);
the cell-free assay (5 repeats, **28.1× positive control**, best switch **1.51× and not significant**,
one switch **down at 0.92×**); gel titrations (inconclusive — smears, faint PAGE bands in the 10 nM
lane only); **ThT fluorescence** (miR-21-5p 100 nM vs control **p < 0.001, n = 3**; miR-192-5p
contradictory, 1 nM significant *below* control); hemin/TMB (single run, **they call it inconclusive
themselves**); and the decisive control — **free miR-192-5p G4H1 colouring at 0.2000 against 0.2305
for the whole no-target mix**.
**Design only:** target selection (literature; no urine measured by them), the 16 miRADAR candidates
and the NUPACK screen, the miR-192-5p hairpins and both G4 pairs, the whole redesign list (longer
stems, G·C clamps, deeper InG4, 18–22 nt toeholds, split G4), real urine, a clinical cut-off,
specificity against related miRNAs, multiplexing the two targets.
**Attempted and never obtained:** the mCherry visible reporter — the engineering page says "still in
progress" and the notebook records **seven dated failures, 26 Aug to 9 Sep**.

## Two readings worth keeping
- The cell-free trigger was **25 µM — about 250× the top of their own HCR titration** — so the switch
  route is **untested at realistic concentrations** rather than merely weak.
- In both target pairs, the switch with the **smaller** HMFE−TMFE gap gave the **larger** response:
  the metric that chose the candidates did not order them.

## On HCR versus an enzymatic amplification
Their wiki gives only positive reasons for HCR — enzyme-free, isothermal at room temperature, one
target initiates many hairpin events, no fluorescence reader needed, literature LOD down to 92.7 fM —
and never weighs it against RPA, LAMP or qPCR, which are not mentioned anywhere on the wiki. The
reasoning is **not given**; we do not supply one.

## Internal inconsistencies a reader would trip on
The engineering timeline claims miR-21-5p ThT significance at 100 pM / 10 nM / 100 nM where the
results page reports only 100 nM. The human-practices stage-2 summary says they moved "from
colourimetric readout toward fluorescence", where every other page — including the Szeto interview on
that same page — describes fluorescence → colour. The street-interview count is "n~200" in prose and
**n = 137** in their own table. The miR-21-5p-7 figure is 1.14× in the table and 1.18× in the prose
below it.
