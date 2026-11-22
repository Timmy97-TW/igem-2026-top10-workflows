# ETH-Zurich — preCISe (Foundational Advance, Switzerland) — Overgrad Top 10 2026
Title: preCISe — a toolbox for targeted intracellular protein delivery with eCIS
Wiki: https://2026.igem.wiki/eth-zurich
Also: Best Foundational Advance Project (Overgrad) winner, Gold.
Built with Astro + Starlight: static HTML at every route, no client-side router — and the wiki says
so in its own README.

## Core idea
About **79 % of the human proteome is intracellular**, and no approved protein therapeutic delivers
an exchangeable protein cargo to the cytosol, because proteins do not cross membranes. preCISe uses
**extracellular contractile injection systems (eCIS)** — specifically *Photorhabdus* virulence
cassettes (PVCs), bacterial molecular syringes encoded by a 16-gene operon (*pvc1–pvc16*) — which
contract a sheath to drive a spike and inner tube through the target membrane and deliver cargo
**directly into the cytosol, unfolded, bypassing the endosome entirely**. Tail fibres decide which
cell; cargo is loaded separately. So target and payload are independent, which is what makes it a
platform rather than a drug.

Their contribution is to make that platform **usable by a team that is not a structural biology
lab**: target CD20, cargo Cre recombinase, retargeting by SpyTag003/SpyCatcher003 conjugation *after*
purification, plus two released software tools (deCISion, OpenSplitProtein) and a reporter cell line.

## WET LAB — DBTL iterations where the "Learn" is a working rule
**Production strain.** Two plasmids in one cell: structural (PVC operon, ~27 kbp, KanR) and
regulatory (cargo, ~10 kbp, AmpR). The resistance pairing *is* the screen — only a dual-plasmid
strain grows on both antibiotics. Plasmids came from Addgene as bacterial stabs, and they purified
only the small one on purpose.
- *Iteration 1:* TSS chemical transformation, chosen because it is cheap and needs no equipment.
  Colony counts on double-selection plates with a single-antibiotic plate in parallel as a
  competent-cell viability control. Four strains made; **one transformation failed three times**.
- *Iteration 2:* made the parental structural strain (c02-dob) electrocompetent — exponential phase,
  OD 0.4–0.6, four washes in decreasing volumes of ice-cold 10 % glycerol, 4,000 rpm 15 min 4 °C —
  and electroporated the regulatory plasmid in. Sparse but real colonies. Their stated Learn:
  **"evaluate the transformation method based on the apparent difficulty of the transformation
  rather than defaulting and repeating the same one."**

**eCIS purification.** Reproduced the published protocol from the 2025 *Nature Biotechnology* PVC
paper after discussing the essential steps in the Pilhofer Lab, with two deliberate deviations
stated with reasons: **twice the culture volume** because they anticipated purification losses, and
**no protease inhibitor** because PVCs should be protease-resistant. Trial run on **PVC-00, the
empty non-injecting complex** — the lowest-risk construct to practise on, and independently needed
as the endotoxin negative control. Verified by running SDS-PAGE of the final product and the
post-centrifugation fractions **directly against the published gels**. Worked first time. The Learn
is a logistics rule: not all fractions were saved, so the highest-yielding prep could never be
imaged by TEM, and **"every subsequent run began with a full set of labelled fraction tubes."**

**Binder purification — the error caught by writing the protocol.** Four SpyCatcher003 binders, one
common architecture (N-terminal His6 → XTEN linker → C-terminal SpyCatcher003), ordered as T7 pET
constructs and transformed into MG1655. Then, *before the first induction*, they sat down to write
the purification protocol for the team, went back through the vector maps and the strain genotype,
and discovered **MG1655 does not carry T7 polymerase**, so nothing could ever have been transcribed.
Re-transformed into a T7 strain. Their own gloss: catching it while drafting the protocol rather
than after a failed induction saved time. *Iteration 2:* two cytoplasmic constructs lysed by
sonication on ice; two periplasmic ones (designed periplasmic so intramolecular disulfides can
form) extracted with hypertonic TSE then ice-cold water osmotic shock; both over Ni-NTA; checked by
SDS-PAGE of lysate/flowthrough/wash/elution against predicted masses plus A280. Both routes gave
correctly sized binder; **periplasmic extraction consistently lower yield**, and not all binders
were fully characterised, for time.

**Structure and stability by TEM.** Negative-stain TEM on their own PVC preparations resolved
different functional states (extended vs contracted). pH stability: **structural collapse in acid,
assembled particles still visible at pH 7.0 and 10.0** — labelled preliminary, and connected
directly to an application decision, that oral administration is ruled out because the complexes
would not survive the stomach.

**preCISion reporter cell line.** HEK293T with two piggyBac knock-ins: CD20 fused to an
intracellular **mCherry** domain (so expression is sortable and gateable by flow), and a
**Cre–loxP reporter that switches to EGFP** on recombination. Validated twice and independently —
anti-CD20 antibody stain correlating with the mCherry signal (so the tag reports properly folded
surface CD20, not just protein present), and transient Cre transfection to prove the reporter
switches. Then FACS-sorted to a higher-expressing polyclonal population before the real assay.

**The delivery assay, and the number they threw away.**
- *Dose–response:* positive-control eCIS displaying the Ad5 knob (binds CAR, present on all
  HEK293T) across a dose series gave **13.6 % GFP⁺ at 3.75 µg rising to 20.7 % at 18.75 µg** against
  a PBS baseline of ~3 %, significant by one-way ANOVA. Receptor-only cells with no Cre reporter
  gave no GFP at any dose — so the signal is Cre reaching the cytosol, not fluorescence drift.
- *Retargeting:* conjugation is **one hour at room temperature** between a SpyTag003-bearing Pvc13
  tail fibre and a separately produced SpyCatcher003 binder, which is the whole modularity claim —
  any binder swaps in with no re-engineering of the cage. At 15 µg the **Ad5-knob-retargeted complex
  gave 18.8 %**, matching the published particle, and the **de novo BindCraft anti-CD20 binder gave
  9.1 %**, about threefold over every negative control in the same plate (PBS ~2.95 %, empty cage
  with binder ~3.2–3.8 %, non-injecting Cre control ~3.0 %).
- The control that doubles as an argument: particles were not pelleted out, so any Cre released by
  spontaneous contraction stayed in the well — and because empty and Cre-loaded cages gave the same
  signal, **free Cre does not cause false-positive switching**, so recombination requires
  receptor-mediated injection.
- And then: the duplicate was flagged by FlowJo as an irregular acquisition (it read ~23.0 % GFP⁺),
  **they discarded it, and state in the same breath that the difference is therefore not
  statistically significant.** The headline result of the project is reported as not significant
  because the replicate was bad. Their conclusion is hedged to match: the de novo binder
  *"seem[s] to have delivered cargo"*.

## DRY LAB — two released tools, and unusually explicit about what each one is not
**deCISion** — turns a cell type into an orderable PVC construct in five steps:
1. pick one of the **47 human cell types in the Cell Surface Protein Atlas (CSPA)** by name, disease
   or tissue; it lists that cell type's surface receptors with measurement strength and **on how many
   of the 47 cell types each was detected — fewer means more specific**;
2. compare where the receptor appears in healthy tissue, healthy cell types, blood and tumours
   (Human Protein Atlas + CSPA);
3. list nanobodies and scFvs against that receptor **from solved structures only**, with measured Kd
   where one exists (SAbDab) — and it **refuses whole antibodies as too large for a PVC**;
4. offer the published XTEN linker to SpyCatcher, or accept a pasted alternative;
5. assemble binder + linker + SpyCatcher as one protein with its DNA, name the **three plasmids to
   order** (cage, cargo, binder arm), and export protein and DNA FASTA.
Origin and check: built after a conversation with Prof. Bernd Wollscheid, because the CSPA's own
interface (SISYPHUS) answers single lookups but not "which receptor should I target on this cell
type"; they took the working tool **back** to Wollscheid, who confirmed it was a use of the atlas he
saw value in. Limitations are specific and uncomfortable: coverage is only those 47 cell types;
**selectivity across cultured lines is not tissue specificity**, and the HPA overlay is "a rough
guideline" only; **SAbDab reports a measured Kd for 1,019 of 14,860 binders (6.9 %)**; CSPA measures
N-glycosylated surface protein, so **"not detected" is not proof of absence**; and the output is a
DNA cassette, not a vector — no backbone, no signal peptide, with a warning on the final page that a
disulfide-bonded binder needs a periplasmic signal peptide.
**Validation, stated plainly:** the right validation would be to use deCISion's output to target
different cells at the bench, and *"we have neither the time nor the scale to run these tests"* —
so the argument offered instead is that the underlying databases are themselves validated. A
software tool that names its own missing experiment.

**OpenSplitProtein** — for the dual-targeting plan (cargo split in two, each half in its own PVC
against a different receptor, so delivery needs both receptors on one cell). Given a structure it
evaluates **every possible split site** and ranks it on two criteria kept deliberately separate
rather than fused into one score: **split tolerance** (can both halves stay folded) and **fragment
reassembly** (will they come back together). Each is the average of three geometric percentiles —
`pack`, `core`, `exposure` and `contacts`, `interface`, cohesion — and each percentile is a rank
*within your own structure*.
- Runs entirely in the browser, **plain HTML/CSS/classic JS, no framework, no build step, no package
  manager, source identical to what executes**; classic scripts instead of ES modules so it works
  from `file://`; one Web Worker per feature for ~7.8× speedup, each worker **starting at a distinct
  position in the random-number stream so a multi-thread run gives the same numbers as one thread**.
  On an igem.wiki host it makes no outside request at all, and the PDB-identifier box is hidden
  there — a design response to the wiki's own no-external-requests rule. Structure stays on the
  user's device. 3Dmol.js is vendored in, not fetched.
- **Calibration data, named:** split tolerance against **13,622 scanned backbone positions**
  (insertion stability), reassembly against **223 intein split sites across 22 sequence families,
  of which only six are evaluable**.
- **Benchmark against three comparators on 21 published split sites** from superfolder GFP, Cre,
  horseradish peroxidase, firefly luciferase, Cas9 and NanoLuc (a 22nd, Cas9 713/714, excluded
  because residues 714–717 are unresolved, so there is no peptide bond to score). Median percentile:
  **OpenSplitProtein 21st, SplitSeek-Pro 24th, ThermoMPNN-I 30th, the 2019 iGEM Protein-split Model
  32nd, random 50th**; top quarter 13 / 13 / 8 / 5 of 21 against ~5.25 by guessing. Resolvability
  established by **re-drawing the six proteins at random 2,000 times** and counting a margin only if
  it kept its sign throughout — **only ThermoMPNN-I is resolvably behind**; every other margin spans
  zero and is reported as unresolvable.
- The finding they chose to publish against themselves: ThermoMPNN-I **beats them on the insertion
  measurement their own score is calibrated against, and still ranks the real split sites worse** —
  "predicting the measurement better does not mean ranking the real split sites better". And:
  **"packing density does not surpass the rule it replaced"** (counting contacts across the cut) —
  scored four ways on the 223 sites, two ways favour each, and dropping one sequence family reverses
  it, so the data cannot tell the two rules apart.
- Further limits: the tolerance label comes from insertions, where the backbone stays covalently
  connected, so it measures the cost of perturbing an intact chain rather than the folding autonomy
  of two separated halves — **"no split construct in this work has been built at the bench"**; every
  reassembly confidence interval includes zero; and the tool ranks cuts only, not linkers, fusion
  partners or dimerisation modules.
- **Biosecurity built into the software**, after a conversation with Dr. Alessandro Blasimme (ethics
  of life science) about future misuse: because the same ranking that helps build a biosensor would
  help split a toxin, processing is refused for CDC/USDA select agents **twice over** — by PDB
  identifier before any request leaves the browser, and by the structure's own title records once a
  file is loaded, which is the check that catches a file dragged in from disk. List from the Federal
  Select Agent Program (42 CFR 73.3, 9 CFR 121.3), framed by the WHO Laboratory Biosafety Manual and
  WHO DURC guidance.
- **Reproducibility furniture most iGEM software does not have:** CITATION.cff 1.2.0 + CodeMeta 2.0
  + BibTeX + RIS all generated from one record; GPL-3.0-only with SPDX identifier;
  `dependencies.lock.json` naming the one vendored library's version, licence and **sha256**, with
  `make verify` to check your copy; a console control that **prints every recorded research number
  checked against its sha256**; CSV/TSV/JSON exports with identical columns; one entry point
  (`rankStructure`) shared by the page, the CLI and any caller, so all three give the same ranking.
  They also answer the SBOL question explicitly and say why it does not apply here.
- **A published AI-use disclosure** naming the model (Claude Opus via Claude Code), what it wrote
  (the application, test suites, CLI, accessibility/security/terminology audits, CI config,
  prior-art searching by reading primary papers), what it did not do (**no scientific claim,
  measured value, figure or citation**), and how it was evaluated (every check the model wrote was
  read by a team member and then run).
- Their bibliography records the **licence** of each external data source and what it requires —
  including noting where they do not comply ("their terms ask for a direct versioned URL beside
  specific data; we give no versioned URL").

## What failed, or stayed open, in their own words
- One dual-plasmid transformation, three times, by TSS — fixed by changing method, not by repeating.
- MG1655 as the expression host: no T7 polymerase, caught before induction.
- Periplasmic binder extraction: lower yield than sonication; binders not all characterised, for time.
- Fractions not saved on the best purification run, so it could not be imaged.
- The retargeting result: duplicate discarded, difference not statistically significant.
- PVCs in acid: structural collapse, which closes off oral administration.
- deCISion: no wet-lab validation, and they say so.
- OpenSplitProtein: the new packing-density rule cannot be shown to beat the old contact count; no
  split construct was ever built; ultracentrifugation purification will not scale to manufacture.

## What we would copy
1. **Write the protocol before the first run.** It is what found the missing T7 polymerase.
2. **Practise on the harmless construct that you need anyway.** PVC-00 was both the trial run and
   the endotoxin negative control.
3. **State your deviations from a published protocol with the reason.** Double the volume because of
   expected losses; no protease because the target resists proteases.
4. **Let the plasmid pair be the selection.** KanR structural + AmpR regulatory means the double
   plate *is* the screen.
5. **Validate a reporter line twice, by different means**, before trusting it as an assay.
6. **Report your headline result as not significant when it is not.** They discarded a bad
   replicate and said what that cost them.
7. **Keep two scores apart instead of averaging them into one.** Split tolerance and reassembly are
   different questions, and OpenSplitProtein refuses to pretend otherwise.
8. **Benchmark with a resolvability test, not a leaderboard.** 2,000 re-draws; margins that span
   zero are reported as unresolvable even when the ranking flatters you.
9. **Publish the comparison that makes you look worse** if it is the true one.
10. **Put the biosafety check inside the tool, twice**, at the layer that can see each input.
11. **Hash the numbers.** A console button that re-checks every research number against its sha256
    is cheaper than trust.
