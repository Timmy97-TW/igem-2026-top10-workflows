# Muenster-University — P.A.C. Immunity (Agriculture, Germany) — Overgrad Top 10 2026
Title: P.A.C. Immunity — Protecting the plant And Capturing the pathogen
Wiki: https://2026.igem.wiki/muenster-university
Also: Best Agriculture Project nominee (Undergrad & Overgrad combined), Gold.
Project slogan, and the thesis: **"STOP SEARCHING — START DESIGNING!"**

## Core idea
Plant pathogens already cause **up to 30 % of global yield losses**, and the conventional route to
resistance is to screen thousands of specimens hoping to find a resistant plant, then breed the
trait in — **upwards of 10 years, usually with a yield trade-off**, and pathogens adapt out of it.

Their alternative designs the resistance instead. Plant **NLR** immune sensors (nucleotide-binding
leucine-rich repeat), when activated, oligomerise into a *resistosome*, insert their N-terminus into
the membrane as a **non-selective calcium channel**, and trigger local cell death — the
**hypersensitive reaction (HR)** — plus a ROS burst that **lignifies the surrounding tissue and
encapsulates the pathogen**. HR immunity works against bacteria, viruses, oomycetes, fungi and
nematodes. Crucially, an NLR's HR activity can be **synthetically blocked by an N-terminal
insertion**.
So: put a **pathogen-protease cleavage site (PCS) inside that blocker**. When the pathogen's own
protease cuts it, the blocker falls off, the NLR fires, and the plant traps the pathogen.
**Both halves are exchangeable** — swap the cleavage site for a different pathogen, swap the NLR for
a different crop — which is what makes it a platform rather than a resistance gene.

**Why proteases are the right trigger, argued rather than assumed:** most effectors are
interchangeable and pathogens substitute them under pressure, but many agriculturally important
pathogens secrete **conserved proteases as mandatory virulence factors** — viruses need them to
process their own polyproteins, bacteria use them to cut PTI immune signalling proteins. Targeting a
mandatory, conserved effector raises the evolutionary barrier to adaptation.
**Prior art and its flaws are named.** Decoy engineering (swapping the cleavage site in *Arabidopsis*
PBS1) already induces resistance to several viruses and bacteria, but PBS1 only works by activating
the NLR **RPS5, which most crops do not have or where it is unknown** — so you must either transform
the exogenous gene (yield cost) or study it first (slow), and the result is transgenic, which closes
the European market.
**The bottleneck they set out to solve is a knowledge gap, stated as a question:** "Which amino acid
motif is cut by protease XY?" Hence ProTEUS.

**A regulatory constraint used as a design specification.** Because EU legislation on new genomic
techniques is restrictive about insertions, their first experimental goal was explicitly **how small
can the blocker be and still suppress HR** — so the engineered sensor can qualify as an **NGT-1**
plant under the incoming EU rules. The size of a peptide, chosen by a law.

## WET LAB — three things a platform needs, tested separately
Their own framing: a platform needs **a reliable screening method, transmission to several crops,
and demonstration across pathogen kingdoms** — so the experiments are organised as four blocks that
each attack one of those, "identifying key challenges and bottlenecks".

### 1. Screening in *E. coli* — the cheap screen that failed, diagnosed
Logic first: find out whether the protease cuts the site **before investing weeks and significant
resources into plant experiments.**
Design: a PCS flanked by two **6×His-tagged** proteins — **sfGFP** (chosen over GFP for stability
against degradation) and **TrxA** (chosen because it is native to *E. coli*, "to minimize the risk
of unpredictable issues associated with heterologous proteins"). Both tagged, deliberately: "we
could distinguish them by size and two signals are better than one." Expected bands: 42 kDa uncut,
27 kDa GFP + 12 kDa TrxA cut.
**Plasmid pair engineered for the stoichiometry the assay needs:** the PCS construct on high-copy
**pET28b**, the protease on low-copy **pACYCDuet-1** with a different origin of replication so the
two do not compete — and the imbalance is justified, since one protease turns over many substrates.
Four GS-linker variants tested because **the optimal linker length was unknown**, including
NIaCS03 carrying the AQGSGASQN blocking peptide (so the plant construct's extra residues could be
tested for steric interference in advance) and **NIaCS03M with a mutated cleavage site as the
negative control.** A practical note published: the PCS sequences were too short to resolve on a
gel, so complementary oligos were annealed into a few-hundred-bp fragment and inserted by Golden
Gate through a BsaI dropout.
Three proteases chosen for distinct reasons: **NIa-Pro** from potato virus Y (literature-validated
to cleave its site and induce HR in *N. benthamiana*, and it attacks the crop their human practices
work pointed at), plus **AvrPphB** and **AvrRpt2** from two *Pseudomonas syringae* pathovars as
well-characterised bacterial controls. Each Myc-tagged so expression is separately checkable.
**The result is a negative one, and they publish it as such.** The anti-His blot showed the 42 kDa
construct where expected, **but a 27 kDa GFP band appeared in the pET28b-only samples that carry no
protease at all**, and also in the **mutated-site negative control**. Conclusion drawn against their
own assay: **"our PCS construct was cleaved by something other than our NIa-Pro protease."** On the
protease side, NIa-Pro was detectable at 29 kDa alone, but **no protease band appeared in any sample
carrying both plasmids**, and AvrPphB/AvrRpt2 gave nothing. They then ran **Ponceau total-protein
staining** as a non-specific cross-check, noted bands near the right masses for AvrRpt2 (22 kDa) and
AvrPphB (24 kDa) — and immediately undercut it, since the other samples showed a band at that
position too. An assay reported as uninterpretable, with the suspicion (endogenous *E. coli*
proteolysis) named.

### 2. FRET screening in planta — the replacement, built with the control the first assay lacked
Switched to **FRET** for quantifiable output: **mTurquoise** donor (Ex 442 / Em 465–505) and
**cpVenus173** acceptor (Ex 514 / Em 525–555) flanking the PCS, so cleavage separates the
fluorophores and the emission ratio drops; **NIa-Pro N-terminally fused to mScarlet-I** so protease
expression is visible in the same image.
Cloned by **GreenGate**, assembling six modules (UBQ10 promoter, THsp18.2M terminator, both
fluorophores, HygB cassette) into pGGZ004 **in one reaction**; and once the first construct existed
they used it as a **composite part** so the remaining four could skip the pGGC intermediate step —
a cloning shortcut created and then contributed to the Registry.
**Order of operations as risk management, stated:** they verified sensor expression in
*N. benthamiana* epidermal cells by confocal microscopy **after cloning the first construct and
before cloning the other four**, "to avoid wasting time and resources".
Results (n = 5 images per condition, Welch's two-sided t-test, p < 0.01): **CS01 and CS02 showed a
significant drop in emission ratio with NIa-Pro** — cleavage. **CS03 showed no significant
difference.** And **CS03M, the mutated negative control, dropped significantly too.** Rather than
claiming the half that worked, they declare the comparison broken: **"Because CS03M differs from
CS03 only in its PCS, the results are likely flawed and should be repeated."** Then they explain the
CS03 pair mechanistically: its linkers are **asymmetric — the N-terminal one 10 amino acids longer
than the C-terminal** — which could sterically block protease access *and* lower the baseline FRET
signal, since FRET efficiency falls steeply with donor–acceptor distance. Two effects that would
look the same in the data, separated in the discussion.
**The result that makes the method usable:** no cleavage of the FRET sensor by **endogenous
*N. benthamiana* proteases**, so no-protease samples are reliable negative controls — "This
separates the FRET-based screening method from our approach in *E. coli*." And the stated next step
is the missing control, not a new experiment: **repeat with mutated PCS in CS01 and CS02.**
They also note the method generalises: planned for plants, usable for protease cleavage **in any
organism**, and contributed as an interchangeable cloning method.

### 3. Blocker evaluation — minimal insertion, and controls for invisible phenotypes
Model NLR: *A. thaliana* **AtNRG1.1**, autoactivated by the **D485V** substitution in the MHD motif
(aAtNRG1.1). Cloning: aAtNRG1.1 with an N-terminal dropout into **pLab12.10** by Gibson — and
because the backbone is ~12 kbp and **"Gibson assembly becomes inefficient with very large
components, it was amplified in two fragments"** — then the dropout swapped for four blocker lengths
by Golden Gate with PaqCI. The negative control was made **by reverting the autoactivating mutation
by site-directed mutagenesis**, i.e. the identical construct minus the one thing that matters.
**Controls for a phenotype you read by eye:** a **p19 helper-strain-only infiltration** to rule out
the agroinfiltration helper as the cause of necrosis, and **trypan blue staining on a separate batch
to check for necrosis that is not visible** — so "no necrosis" means no cell death rather than no
visible cell death. aAtNRG1.1 gave strong punctate necrosis at 7 dpi; native AtNRG1.1 and p19 alone
gave none, confirmed by trypan blue. All AtNRG1.1 variants HA-tagged C-terminally and NIa-Pro
Myc-tagged so expression is checkable by Western blot alongside the phenotype.
Reported outcomes: **HR successfully blocked with minimal blockers**; **HR induced when the minimal
constructs were co-infiltrated with the corresponding protease**; and **effective blocking with
blockers that presumably conform to NGT-1** — the regulatory target met at the level of evidence
they have.

### 4. Orthologs and proteases — the two directions a platform must extend in
- *Crop NLRs:* **autoactivity successfully induced in partially undescribed secondary crop NLRs**,
  then **blocked by N-terminal insertion**, and **indications of HR induction when co-infiltrated
  with the corresponding protease.** The hedge ("indications") is theirs.
- *Bacterial proteases:* HR induction by bacterial proteases assessed in *N. benthamiana*, with
  **indications** that an engineered sensor carrying the matching cleavage site fires.

## DRY LAB — ProTEUS (Protease Target Elucidation Using Structural Modeling)
**The problem framed as a number:** a recognition site spans ~7 residues, i.e. **1.28 × 10⁹
combinations**, so random screening is impossible. And the existing tools do not answer this
question: PROSPER, PROSPERous, Procleave and iProt-Sub all predict **where a given substrate protein
is cut**, are trained models, and only cover proteases with **30 or more described cleavage sites** —
whereas ProTEUS is for proteases with **no characterised substrate at all**. The classical
alternatives are named with their costs: one-substrate-at-a-time immunoblots (needs a hypothesis
first) or LC-MS/MS peptide libraries (needs dedicated proteomics infrastructure).

**The pipeline is a de novo binder pipeline repurposed, which is the idea:** instead of designing a
binder for a surface, design a short peptide that **fits a protease's catalytic cavity**.
1. **AlphaFold3** structure for each protease — none of the four has a crystal structure — with the
   prediction quality verified as sufficient before use, and **pLDDT reported for the individual
   catalytic-triad residues as well as for the whole and core enzyme**, not just a global score.
2. Hotspots located by **aligning each protease against well-characterised proteases** and taking
   the key binding regions as RFdiffusion3 constraints.
3. **RFdiffusion3** generates thousands of backbones per protease; filtered on **distance to the
   catalytic triad**, rejecting clashes and designs sitting too far out.
4. **LigandMPNN** designs sequences for each backbone, multiple per backbone, duplicates removed to
   save compute.
5. **AlphaFold3** again on each unique sequence in complex with the protease — with an engineering
   result worth noting: **13 minutes per design optimised down to 30 seconds**. And a limitation
   found rather than hidden: **short peptides tend to be disordered, so their structure predictions
   are less reliable**, assessed via pLDDT and PAE across the interface.
6. **The scoring function exists because of a human-practices conversation.** From an interview with
   Lasse Middendorf, Michel Stevens and Michel Westerman they took the point that **AlphaFold
   predicting a peptide sitting in an active site cannot be equated with that peptide being
   cleaved** — so they built a ranking from the **geometric and chemical prerequisites of the
   cleavage mechanism itself**: nucleophilic attack distance, key hydrogen-bond distances, and
   interlocking geometric constraints such as the **face of attack** and the **conformer of the
   nucleophile side chain**. Derived from serine-protease catalysis as the standard model and then
   applied to cysteine proteases, with that substitution declared. Parameters extracted from the
   AlphaFold3 `.cif` output by a Python script using vector algebra, scored with selected weights,
   and the program written to be **rapidly re-adaptable to other protease types**.
7. **Top 100 candidates per protease** go to wet-lab screening.

**Validation on a protease whose answer is already known.** Run on **NIa-Pro**, ProTEUS **recovered
the key consensus residues (E/P6, V/P4, Q/P1) among its top 100** — a positive control for the
pipeline rather than a claim about a new protease.
**Then the four unknowns:** *RipT* (Cys123/His245/Asn264), *RipE1* (Cys175/His206/Asp226), *RipBN*
(Cys128/His214/Asp232) from *Ralstonia*, and *HopN1* (Cys172/His283/Asp299) from *P. syringae* pv.
tomato DC3000 — all type III secretion system effector cysteine proteases. For these it "pinpointed
potentially important residues", and in screening they **identified potential hits for HopN1, RipBN
and RipT** — immediately followed by **"but the screening assay needs further refinement to confirm
these results."** The abstract itself carries the caveat.

## What failed, in their own words
- The *E. coli* screen: the construct was cleaved **in samples with no protease and in the
  mutated-site control**, so something other than NIa-Pro cut it.
- No protease band was detectable in any double-plasmid sample; AvrPphB and AvrRpt2 undetected by
  Western blot, and the Ponceau cross-check was inconclusive because the control lanes matched too.
- The FRET negative control CS03M cleaved, so the CS03/CS03M comparison is "likely flawed and should
  be repeated"; the missing CS01/CS02 mutated controls are named as the next experiment.
- CS03 showed no cleavage, with two candidate explanations (steric hindrance from the asymmetric
  linker, lower baseline FRET from the greater donor–acceptor distance) and no claim between them.
- ProTEUS's short peptide predictions are less reliable because the peptides are disordered.
- Crop-NLR and bacterial-protease HR results are reported as **"indications"**, not demonstrations.
- The protease screening assay "needs further refinement" before the three hits count.

## What we would copy
1. **Build the cheap screen to protect the expensive one** — and when it fails, say what it cannot
   tell you instead of reading the lanes you like.
2. **Tag both halves of a cleavage reporter.** "Two signals are better than one" is the whole reason
   they could see that cleavage happened without the protease.
3. **Engineer the copy-number asymmetry the assay needs** (high-copy substrate, low-copy protease,
   different oris) and justify it from enzyme turnover.
4. **Check the first construct in the destination organism before cloning the other four.**
5. **Control for the phenotype you cannot see.** Trypan blue for invisible necrosis, and a
   helper-strain-only infiltration for necrosis caused by the method.
6. **Make the negative control by reverting the one mutation**, so the control differs in exactly
   one thing.
7. **Separate two explanations that would look identical in the data** — steric hindrance vs
   baseline FRET loss — instead of picking one.
8. **Validate a de novo design pipeline on the one target whose answer is published.** Recovering
   E/P6, V/P4, Q/P1 for NIa-Pro is what makes the four unknowns worth reading.
9. **Let an interview change the model's architecture.** "Binding is not cleavage" became a scoring
   function built from catalytic geometry.
10. **Let the regulation set a design parameter.** "How small can the blocker be" is an NGT-1
    question answered at the bench.
11. **Keep the caveat in the abstract.** "The screening assay needs further refinement to confirm
    these results" sits in the first paragraph of the model page, not in a footnote.
