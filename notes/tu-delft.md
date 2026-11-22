# TU Delft — MOSAIC (Biomanufacturing, Netherlands) — Overgrad GRAND PRIZE 2026
Title: MOSAIC — a platform for personalised implant coatings
Wiki: https://2026.igem.wiki/tu-delft
Also: Best Biomanufacturing Project (all sections), Gold.
Published .md mirror of every page exists (`/tu-delft/<page>.md`, plus `llms.txt`) — the only one of
the ten Overgrad wikis that ships a machine-readable copy of itself.

## Core idea
A **modular hydrogel implant coating built from elastin-like polypeptides (ELPs)** — repeats of the
pentapeptide VPGXG taken from human tropoelastin, produced in *E. coli*. One common ELP backbone
carries exchangeable functional motifs (antimicrobial peptide, RGD cell-adhesion, growth-factor
mimetic), either encoded in the gene or clicked on after purification, and is photo-crosslinked into
a hydrogel on the implant surface. The selling point is **one production route for every variant**:
change the function by changing DNA, not by changing the coating chemistry.

The physics the whole project rests on: an ELP has a **lower critical solution temperature (LCST)**.
Below T_t it is soluble; above it, it entropically phase-separates into a dense coacervate. T_t is
not a constant — it moves with guest residue, chain length, concentration, anything fused to the
backbone, and the salt in the buffer (Hofmeister). Read off a turbidity curve at OD350 vs
temperature; the clear→opaque window is 1–2 °C.

## The five modules (their own framing, and the site's spine)
Design · Modularity · Synthesis · Assembly · Functionality. Each module is written up with its own
Background / Experimental design / Results / Discussion / **Future perspective**, and the
Engineering page is organised as explicit DBTL iterations inside four of the five
(Synthesis, Assembly, Functionality, Modularity).

## DRY LAB — four models plus one software tool
1. **LCST prediction (XGBoost).** The headline dry-lab artefact.
   - Dataset built by hand from 86 candidate sources (71 papers/reviews + 15 patents) → 437 raw
     entries → **273 after cleaning**; raw + curated both on Zenodo (10.5281/zenodo.23532676).
   - Where a paper gave only a figure, they wrote a **browser-based "LCST Extractor"**: calibrate
     the axes, click along the curve, LOESS-smooth, take T_t from the steepest change in absorbance.
     A tool built to stop themselves eyeballing numbers off a graph.
   - 85/15 split (230/43). **Test MAE 3.17 °C, R² = 0.88.**
   - Benchmarked against **three** baselines, not zero: physics (Meyer & Chilkoti) 4.68 °C,
     k-NN "nearest ELPs" 4.64 °C, mean-of-training 11.00 °C. Reported as cumulative accuracy
     profiles, so the whole error distribution is visible, not one summary number.
   - They then publish their **five worst and five best** test points with the sequence and the
     conditions, and diagnose them: every high-error sequence carries non-ELP residues; the worst
     (index 209, error −15.18 °C) sat at 2918 µM when the dataset mean is ~400 µM and most points
     are under 100 µM.
   - The honest structural admission: **a tree cannot extrapolate.** Past its last split it keeps
     returning the answer for the highest concentration it ever saw. Stated as a property of the
     model class, with the fix named (flag out-of-range inputs, return a confidence, log-transform
     concentration, or hybridise with the physics equation — the two models fail on opposite points).
2. **Molecular dynamics (CALVADOS 2 coarse-grained, one bead per residue, surface-attached brush,
   supercomputer pipeline).** Three questions, three modules, each ending in a *design rule*:
   - *Stiffness.* Attachment density dominates: ~8× across its range, **81 % of explained
     variance**; chain length, lysine spacing and ionic strength 6–7 % each. Response surface
     R² = 0.98, cross-validated R² = 0.94 on held-out designs. The map spans ~20× in the proxy;
     anchored on a ~3 kPa base construct that is ~0.3–6 kPa, which brackets fat, liver and muscle.
   - *Crosslink placement.* With four lysines per chain fixed, the arrangement decides **bridges vs
     loops**, not the crosslink count (median 19–22 of 22 either way). Median bridges: 3 clustered →
     7 focused → 14 random → **19 uniform** (one lysine per block); loops fall 16 → 3. The predictor
     is distance along the sequence to the nearest lysine on the same chain: 5 residues away → ~13 %
     bridge, 20 → ~50 %, 60 → ~80 %. Model on that one feature predicts held-out bridges R² = 0.88.
     Best designs put lysines ~100 residues apart.
   - *Motif accessibility.* RGD at the chain ends is most exposed; both ends beats one. Shuffling the
     functional domains did **not** change the collapse — so accessibility can be optimised without
     breaking thermoresponsiveness.
3. **Omics-guided motif selection.** Matches known cell-adhesion motifs to the target tissue from
   transcriptomic + proteomic signatures, and outputs "ELP coating recipes" per tissue. Their own
   caveat section is titled *transcriptomics and proteomics do not always agree*.
4. **Large-scale production model (SuperPro Designer).** Requested *by* the entrepreneurship team
   with a written spec: flexible ELP switching per batch cycle, ≥10.2 kg ELP/year to coat 117 million
   continuous glucose monitors without hitting full capacity, lyophilised final product. Three
   sections — fermentation, pretreatment, purification — with an interactive flowsheet, stream and
   equipment characterisation, and an LCA.
5. **MOSAIC Designer (software).** The thing that makes the platform orderable. Repetitive ELP genes
   get rejected by synthesis providers or routed into expensive bespoke service. The tool cuts the
   repetitive sequence into swappable parts separated by locked linkers carrying the Golden Gate cut
   sites, **codon-scrambles the parts so the order passes a provider's complexity filter**, and
   exports a synthesis-ready oligo set. Page documents how its search works, how the score is
   defined, how it differs from the published method, and *what to check in a new design*.

## WET LAB — module by module, with the gate each one had to pass
**Modularity / assembly route.** MoClo Golden Gate (BsaI), parts ordered from IDT and Twist from
MOSAIC Designer output. Level 0: each ELP part into the universal acceptor **pAGM9121** (Addgene
MoClo kit #1000000044), screened by colony PCR for lacZ replacement (657 bp) — insert sizes
153–175 bp for MIKII/RGD vs 743–1217 bp for SpyCatcher003-sfGFP/mEffBlue/ScOrange, so the gel reads
unambiguously. Whole-plasmid Nanopore sequencing on 2 clones each: 100 % match for 7 of 9 parts,
one mismatch and one gap in the odd clone of the other two. Level 1: **nine inserts in a single
Golden Gate reaction** into pJUMP29-1A(sfGFP) (BBa_J428326) → p(MIKII-RGD)3-ELP and
p(MIKII)3-Blue-RGD-Orange-ELP, both 100 % identity on whole-plasmid sequencing (4 and 2 clones).
The documented-practice detail: their own screen was nearly useless for one construct because the
assembled product (891 bp) differs from the empty vector by **44 bp** on a 1 % gel, so they write
the recommendation down — pair a backbone primer with one annealing across the insert/backbone
junction, and never treat colony PCR as verification for a repetitive insert.

**Expression.** *E. coli*, T7/IPTG constructs in TB. The result they did not plan for: RGD(+)-ELP
had **already accumulated strongly before IPTG was added**, and 0.5 or 1 mM IPTG made no clear
difference. They adopted **uninduced high-density overnight growth** as the production route on the
strength of that, and said plainly they never measured promoter activity so the cause (leaky T7)
is unresolved. Two separate honesty notes: the SpyTag-ELP cultures gave a prominent band at ~15 kDa
against an expected 21 kDa, and the gel alone cannot say what it is; Thrombin-cleavable-ELP was
invisible in whole-cell lysate but appeared after purification — so **"not detected" was explicitly
not allowed to mean "not expressed"**. And the one most teams would have deleted: the kanamycin
stock was found to be non-selective (an Amp-resistant test strain grew in kan medium), so the
RGD(+)-ELP cultures had no effective plasmid selection, plasmid loss was never measured, and the
effect "cannot be quantified".

**Purification — a documented head-to-head, and the losing method explained.**
- *IMAC* (gravity Co²⁺): failed as a single step. Many bands in every eluted fraction; flow nearly
  stopped for the RGD constructs (**0.125 mL/min vs 1.33 mL/min** for K30-ELP); brown precipitate in
  the resin bed; protein still on the resin after elution. Diagnosis is specific rather than
  hand-waved: the known *E. coli* IMAC contaminants need 30–80 mM imidazole, so a 10 mM wash could
  not displace them and a single 150 mM elution brought everything down together; and the likely
  real culprit is **phase transition on the column**, because binding concentrates the ELP on the
  bead surface and both salt and local concentration lower T_t. They name the construct-level
  evidence (K30-ELP is all-lysine, T_t high; the RGD constructs are isoleucine-block, T_t low) and
  then refuse to call it demonstrated: "this remains an interpretation rather than a demonstrated
  mechanism". The standard remedy — more salt in the wash — is ruled out *because* NaCl lowers T_t.
- *Inverse transition cycling* won. Contaminant bands drop with each cycle; after **four cycles** the
  ELP band is essentially the only one; the fifth adds nothing. Yield drops with the contaminants, so
  the rule they write is "verify purity by SDS-PAGE, do not rely on a cycle number", and for some
  uses three cycles may be the better trade. No tag, no resin — only NaCl and a centrifuge, which
  also leaves both protein termini free for functional motifs. Cost: 3–4 days per purification, two
  cycles a day at most, 12 h to redissolve a hot-spin pellet. **1 L cultures gave 59.1 mg and 63.4 mg
  of lyophilised RGD(+)-ELP and RDG(-)-ELP** after 72 h freeze-drying. Small-scale caveat recorded:
  below ~1 mg of pellet you cannot tell whether a hot spin worked.
- *Analysis module* exists because the standard assays lie about ELPs: Bradford and A280 under-read a
  hydrophobic, aromatic-poor protein, so BCA (peptide backbone) was used instead; ELPs run above
  their calculated mass as a diffuse smear on SDS-PAGE; endotoxin quantified because the application
  is medical.

**Assembly — the result that is a measurement result about the instrument.** Rheology on the ELP
library: in most runs the measured torque was **indistinguishable from the inertial torque**
(136–170 nN·m against a calculated 166.4 nN·m, within 2 %), and they state outright that *the moduli
reported for those runs do not describe the sample*. Only V72-ELP at 61.5 mg/mL resolved: G′ rose
~12 → 33.3 Pa at 33.6 °C then fell to 26 Pa at 37 °C. Two to three orders of magnitude below
published ELP gels. Conclusion drawn against their own hypothesis: this is **liquid–liquid phase
separation, not gelation** — turbidity says the transition happens, rheology says no load-bearing
network forms, confocal shows coacervate droplets — and it follows from the sequence, since
(VPGVG)n encodes thermoresponsiveness and nothing that makes a persistent junction. They even
explain away their one positive: the 61.5 mg/mL run is inconsistent with its nominal concentration
and was probably the dense phase loaded into the geometry, so no concentration dependence may be
read from it.

**Surface attachment.** ELP functionalised with diazirine, photo-crosslinked to PDMS and titanium,
washed with SDS and with beads. UV-exposed ELP-D stayed on PDMS where non-UV-exposed ELP-D washed
off. **Titanium: inconclusive, and published as inconclusive** — labelling with sulfo-NHS-Cy3 worked
but conditions could not be compared. Listed causes: possible low diazirine conjugation efficiency
(fix named: TNBS assay for primary amines), possible inefficient UV activation. Plate reader
declared **unsuitable** for this measurement (controls without ELP or dye gave high signal; Cy3's
~20 nm Stokes shift plus reflective titanium/PDMS). Epifluorescence was better but only one of three
replicates per condition was imaged, for time, "so the outcome is sensitive to outliers". A missing
control is admitted: no non-diazirine ELP control in the main PDMS experiment, for want of protein,
which is exactly the control needed to separate diazirine from UV.

**Functionality.**
- *Antimicrobial.* SAAP-148 against five strains including three clinical LVAD-driveline isolates.
  MIC 6.4 µM lab MSSA, 25.6 µM lab *E. coli*, **12.8 µM for all three clinical isolates — MRSA the
  same as MSSA**, so methicillin resistance gave no protection. The interesting move is that they
  then argue their own lab strain is the wrong benchmark: *S. aureus* 8325-4 descends from NCTC 8325,
  which carries an *rsbU* mutation leaving σB nearly inactive (and is *tcaR*-defective), giving a
  biofilm-negative phenotype — so the **clinical isolates, needing 8–16× more, set the target
  concentration for the coating**, and the MBPC rather than the MIC is the number that matters for a
  coating. Neither *E. coli* strain formed biofilm in simulated wound fluid, so Gram-negative
  biofilm prevention was **not assessed**; they diagnose the medium and conditions rather than the
  strain. Limitations listed: duplicates not triplicates, biofilm in wells not on a surface, all
  aerobic while implants often sit in anaerobic sites, only two species.
- *Cell adhesion.* RGD(+)-ELP vs the scrambled RDG(-)-ELP control (same composition, motif
  destroyed). RGD(+) promotes initial attachment, supports focal adhesions in serum-containing
  medium and supports proliferation; on RDG(-) the cells instead secrete extracellular matrix rather
  than divide — a different cell state, not simply less adhesion.
- *Cleavable sites.* Thrombin-cleavable-ELP, 0/2/4/8/20 h, with a positive control protein and
  uncleaved ELP as negative. Full-length band gone by 20 h, negative control unchanged. Claim kept
  deliberately small: "20 h is an **upper bound** for the reaction time, and the cleavage efficiency
  remains unquantified"; the expected 37.5 + 26.2 kDa fragments did not both resolve, and the fix is
  named (anti-His Western on the C-terminal fragment). The limitation that matters for the product is
  stated: this was soluble protein at room temperature, whereas the coating is a dense coacervate at
  37 °C, which likely lowers accessibility.
- *Platform expansion* is explicitly conceptual, not claimed: growth-factor mimetics, an
  infection-sensing reporter, immunomodulation, drug delivery — each with a "risks and limitations".

## What failed, in their own words
- IMAC as a one-step purification (and the mechanism is the project's own physics turning on it).
- Titanium attachment: inconclusive, published as such.
- Gelation: did not happen; the material is a coacervate, and the sequence explains why.
- The plate reader as a surface-attachment instrument: ruled unsuitable.
- Non-selective kanamycin stock, admitted with its consequence unquantified.
- Induction: the inducible system was not needed, which invalidated the planned expression design.
- ML model on complex sequences: stated as a dataset limitation and a tree-model limitation.

## What we would copy
1. **Three baselines and a published error table.** The physics equation, a k-NN "what a researcher
   would do", and mean-of-training. Then the five worst points with their conditions. An ML claim
   becomes checkable instead of impressive.
2. **Build the small tool that stops you eyeballing data.** The LCST Extractor exists only because
   literature T_t values live in figures.
3. **Let the model answer a design question, not a modelling question.** Each MD module ends in one
   rule a wet-lab person can act on ("set attachment density first, fine-tune with ionic strength").
4. **Separate "detected" from "recovered".** Thrombin-cleavable-ELP was invisible in lysate and real
   after purification; they refused to read absence as failure.
5. **Say when the instrument, not the sample, produced the number.** The inertial-torque paragraph is
   the single most transferable thing on this wiki.
6. **Have the business side write a numbered spec for the model.** 10.2 kg/year, 117 M devices,
   lyophilised — so the SuperPro flowsheet has a pass/fail condition.
