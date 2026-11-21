# Toronto — PetaBite (Bioremediation, Canada) — Overgrad Top 10 2026
Title: PetaBite — the PETadex, PlasticESM, and two assays that read crystalline PET
Wiki: https://2026.igem.wiki/toronto
Also: Best Bioremediation Project (Overgrad) nominee, Gold.
Wiki source is MDX (Astro) with ~123 MDX files; the dry-lab model section alone is larger than most
teams' entire wiki, and the wet-lab section is among the smallest. The asymmetry is the project.

## Core idea
Nature has probably already evolved the enzyme you need. Toronto's long-term goal is a **workflow
that mines public sequencing data for a plastic-degrading enzyme for any condition and any plastic**,
and this year's **North Star Goal** was one enzyme that degrades **PET at room temperature** — a
target chosen *because of* human practices, not despite it: wastewater researchers, operators and
engineers told them that enzymes needing 70 °C are industrially useless, so the temperature became
the specification.
Why wastewater: every treatment plant already concentrates a city's microplastics in sludge and
effluent and has no process that degrades them. The bottleneck is the opportunity.

## DRY LAB — the centre of gravity, and unusually hard on itself
**PETadex.** Before 2026 the world had **495 experimentally validated plastic-degrading enzymes**.
They searched **27.3 million public sequencing datasets** through the Logan index and recovered
**>300 million putative plastic-degrading enzyme sequences — a ~600,000-fold increase** over the
known catalogue. The pipeline is published step by step as its own sub-pages: PETadex–PAZy reference
curation → CATH assignment → component assignment → NCBI-nr homology expansion → seed MSAs and
catalytic HMMs → Logan query extraction → clustering and corpus structure. Then annotation layers:
BioSample metadata profiles, localisation and signal peptides, domain annotation, **novel accessory
domains**, predicted structures, biochemical properties and ancestral reconstruction.

**Activity labels, including a measured audit of their own LLM.** Labels come from **three readings
of the literature — by hand and by machine — plus a plate screen run by a collaborator lab**, and
*each source is published separately alongside the merged set*. The LLM extraction pipeline was
then benchmarked against humans on 26 papers against 26 double-human-verified papers, and the
numbers are published with the human-human disagreement beside them, which is the only way they
mean anything: the LLM found **70 % of enzymes either human listed (a second human finds 83 %)** and
90 % of those both humans agreed on; only 7 of 180 LLM enzyme names had no human match, and those
were naming variants or whole-cell entries; on matched entries pH agreed **80 % (human 91 %)**,
buffer **75 % (84 %)**, temperature 92 %, plasmid 95 %. The error mode is named: a condition
borrowed from another assay in the same paper — pH 7 vs 8 for IsPETase, 37 vs 50 °C for Dkca1.

**PlasticESM.** General protein language models are trained on curated databases while most PETadex
sequences come from **unassembled metagenomes**, so they continued pretraining **ESM-C 300M** on
PETadex with masked-language modelling, training only **LoRA adapters on all four projections of
every transformer block** — 240 adapter tensors, **14.7 M parameters**, backbone frozen. A full epoch
over the 18.2 M 90 %-identity centroids would have taken **57 hours**, so they trained on one random
member of each of the **1,814,296 60 %-identity clusters**, then a second seed drawing a different
member. Because **48.7 % of clusters are singletons**, two draws hold 2,494,836 distinct sequences —
**1.38× one draw, not 2×**, and they say so. Both draws lowered held-out loss **1.696 → 1.684 nats**
(perplexity 5.39) and they quantify how small that is honestly: "about 279 times the difference
between two identical runs". Engineering changes cut training time 2.63×; every saved adapter was
checked against the live model.

**The evaluation, which is the real contribution.** Two rules stated up front: the **unit of
independence is the homology component** (enzymes connected at any identity threshold always fall
in the same fold, so nothing is scored on a close relative of its training data), and **a learned
representation counts only if it beats controls that need no model at all — sequence length and
amino-acid composition.**
- Embedding sanity check first: ESMC-600M embeddings of the 30 %-pid centroids, UMAP'd, with
  **negative controls (random and shuffled sequences from 64,730 family representatives, designed to
  separate composition from sequence order) and positive controls (random UniProt proteins, real
  sequence fragments)** embedded identically and plotted alongside. Shuffled and random controls form
  their own "junkyard" regions far from the real data, UniProt scatters, fragments hug the real data.
  Only then is the clustering treated as signal.
- **The finding about evaluation itself:** under the random five-fold splits common in
  sequence-to-function work, stock ESM-C reaches **ρ = 0.72 on kcat and 0.74 on melting
  temperature** — numbers that look like a working model. Split by homology component, the same
  embeddings **lose 0.49 to 1.01** across the five human-curated targets while sequence length moves
  by at most 0.18. Between **90 % and 92 % of labelled sequences have a homologous relative elsewhere
  in the set**. Their sentence: *"Without the component split, we would have reported the inflated
  numbers."*
- **And then the result that most teams would have buried:** with leakage removed, **the two
  no-model controls outscore both embeddings on all twelve target sets.** On kcat (227 sequences
  across 40 components) **sequence length reaches ρ = +0.343 against −0.025 for stock ESM-C and
  −0.217 for PlasticESM.** Length's signal is real and replicates — longer PETases have higher
  catalytic efficiency (kcat/Km ρ = +0.350, p = 0.001, jackknife 0.152–0.522).
- **They then diagnose why their own model loses**, which turns the negative result into a plan:
  only **53 of 1,137 labelled sequences (4.7 %)** appear among the clusters PlasticESM trained on;
  most labels describe engineered literature variants rather than natural sequences; **48 % of all
  labelled sequences sit in one homology component**. "The model is being asked to rank point mutants
  within one family, from labels that barely overlap the population we want to screen."
- **The loop is designed to fix the labels, not to flatter the model.** Round 1: the wet lab screens
  the LOBSTER library of 1,744 sequences from the *Is*PETase and LCC clusters, adding measurements on
  the sequences the model is meant to explore. **Round 2 will be chosen by the model's uncertainty,
  not by its predicted activity** — among clusters whose environmental metadata looks promising, test
  the ones the model is least sure about — and judged on the same component-grouped benchmark with
  the same controls, "so any improvement we report will be one that a random split could not have
  produced."

**LOBSTER** (Library Optimization for Bioprospecting Sequences Through Economical Recombination).
Rather than buying full-length DNA per candidate, it designs **Golden Gate fragment pools plus
degenerate codons** that combinatorially assemble into full-length PETase cores, maximising
*coverage* of real PETadex cores subject to nucleotide-quantity and library-size caps — **~45 %
nucleotide cost reduction**. Prior art is named and the novelty is stated precisely: SwiftLib (2015)
and DeCoDe (2020) use degenerate codons only; GGAssembler (2024) adds fragment assembly but treats
coverage as position-independent; LOBSTER needs **sequence-level** coverage because several mutations
must co-occur to cover one PETase. A side effect they flag rather than hide: combinatorial assembly
also produces **chimeras that were never in the PETadex**, which may or may not be active — extra
screening space, not extra validated enzymes.

**Limitations, four of them, each with a number:** labels are thin where it matters (**only 200 of
the activity labels, 1.53 %, are negatives, and 168 of those come from a single halo screen**; the
repaired held-out fold holds **89 labels on 16 sequences**; two shipped targets span too few
components to be scored at all). Their strongest structural signal is not established — predicted
structural geometry tracked melting temperature at p = 0.0084, **but the same test passes a pure-noise
target in 4.5 % of null draws**, and it rests on one family with nowhere to replicate. **The model
has not been tested prospectively**: no library has yet been chosen by it. And annotation caveats:
four known profile-rule defects left unfixed (~1.5 % of profiled BioSamples), **50.6 % of BioSamples
carry no environment signal**, BacDive growth means unweighted, TED novelty cut-offs provisional.

**Reproducibility.** Adapters, pretraining corpus and activity labels all on Hugging Face, each
label source separately; the **model card reports the downstream results next to the weights "so no
one reuses the adapters expecting them to predict activity"**; every analysis step has a lab notebook
as its primary record **with retractions kept in place**. And the explicit ask: *"The part we most
want others to reuse is the evaluation protocol, not the model"* — split by connected homology
component, standardise each fold's predictions before pooling, use jackknife intervals and
permutation tests over components rather than a component bootstrap (**which they found excludes
zero far too often under the null**), and require any learned representation to beat length and
composition. Shipped as a three-function statistics module (`grouped_out_of_fold`, `jackknife_ci`,
`permutation_p`) that works on any enzyme family with activity labels.

## WET LAB — two assays built because both existing options are wrong
The framing: existing PETase screens trade substrate fidelity for throughput or throughput for
rigour. **Halo plate assays use BHET, the soluble subunit, not crystalline PET** — so they show
catalytic activity but not depolymerisation of a polymer, "the core claim that matters for plastic
waste". **HPLC quantifies the real products (TPA, MHET) and is the gold standard but caps a screen
at tens of enzymes**, and its cost ruled it out as a primary screen.

**One mechanism, two readouts.** Copper is loaded *into* a PET mesh. A PETase displayed on the outer
membrane of *E. coli* hydrolyses the mesh, which **physically releases copper** into the medium and
nearby periplasm, activating the copper-responsive **pCusC** promoter. The elegance is in the
geometry: **because the copper sits inside the polymer, the reporter can only fire if an enzyme cuts
the polymer itself rather than a soluble subunit.** Swap one gene to swap assay — **Biosensor** puts
msGFP2 downstream of pCusC (active PETase → fluorescent colony); **Selection** puts a sulfonamide
resistance gene there (active PETase → colony grows on antibiotic).

**Design decisions with reasons attached.**
- *Why copper at all:* it survives molten PET, where common inducers do not — IPTG decomposes below
  PET's melting point — so the assay can later be integrated into the polymer itself. Copper is also
  an established *S. cerevisiae* inducer, keeping a path to yeast open.
- *pCusC over pcopA:* CusC detects **periplasmic** copper, which is where copper arrives first, so
  it avoids the false negatives CueR's cytoplasm-only sensing would cause; it works optimally near
  toxic copper concentrations, which both removes a toxicity worry and makes it **less leaky**.
- *Plasmid orthogonality designed, not hoped for:* the display plasmid is ColE1-based with AmpR;
  the assay plasmid is **pJUMP26-1A, one of the only non-pBR322/ColE1 backbones in the 2026
  distribution kit, with a p15A ori and KanR** — different copy-number control system and different
  marker, so the two are independently maintained *and* double transformants are selectable.
- *Display system:* ice nucleation protein anchor (BBa_K523013) + a 20-residue GS linker designed on
  Chen et al. 2013 principles + outward-facing BsmBI sites arranged so **the Golden Gate scar lands
  on the last four nucleotides of the linker and cannot shift any cloned PETase's reading frame** +
  a C-terminal FLAG tag for display verification, **with a stop codon inside the spacer so the FLAG
  tag is only expressed when a PETase is actually cloned in** — i.e. the tag itself reports insertion.
- *Antibiotic chosen for assay logic:* bacteriostatic, not bactericidal, so cells have time to
  express PETase, degrade PET, release copper and switch on resistance. Trimethoprim/dfrB10 was
  considered and partly rejected for **high background escape via spontaneous folA mutations**; they
  went with sulfadiazine + sul1/sul2. Golden Gate was attempted with all three resistance genes and
  **only sul1 assembled**, so all testing used sul1. And because exogenous thymine or thymidine
  bypasses folate inhibition and makes susceptible cells look resistant, **all Selection assays run
  on thymine-free Mueller-Hinton agar** — a medium chosen to close a specific false-positive route.
- *Copper mesh preparation is written as a protocol with its failure modes:* NaOH pretreatment
  40 min at 37 °C then washed thoroughly, because **incomplete NaOH removal precipitates CuSO₄ and
  ruins the integration**; CuSO₄ boiled at ~90 °C with constant monitoring because **above 100 °C it
  precipitates**; MilliQ added in increments as water evaporates; neutralised to pH 7.5 before
  reading, specifically to make the copper test strips accurate.

**Controls run before results.** Copper toxicity titrated first (dilutions 10²–10¹⁰ against
0–8 mM CuSO₄): **up to 4 mM did not detrimentally alter growth**, which sets how much copper may be
loaded into the PET. A dedicated **copper-leakage test** — cells carrying only the reporter plasmid
with mesh on the agar — found no fluorescence, i.e. no false-positive route through leaching, and
negligible background. Copper-induced GFP verified across a dilution series with **two different
negative controls**: reporter plasmid on 0 mM copper (so fluorescence depends on copper) and empty
assay plasmid on copper (so fluorescence depends on msGFP2). With sul1, growth on every copper plate
except 8 mM.

**First assay runs, reported as partial.** Characterised PETases loaded into PD-V2 (LCC, Fast-PETase,
IsPETase, M4-Q IsPETase and — the important one — **Dead-IsPETase as a catalytically inactive
negative control**), plus empty vector. Biosensor: **only the M4-Q IsPETase plate grew in the initial
test, and those colonies did fluoresce** — "providing evidence that the Biosensor assay is
functional", which is as strong as one plate allows. Selection: **every test plate except
Dead-IsPETase showed growth**, which is the pattern a working assay should give. Open and stated:
colony fluorescence **cannot be quantified beyond binary for want of equipment**, and even a positive
"may also reflect PETase expressed at high levels" rather than a better enzyme; display has yet to
be verified by fluorescent FLAG antibody; dry-lab sequences had not yet been tested.

## HARDWARE — the third leg that closes the loop
The reason it exists is stated as a limitation of the wet lab: the two assays test **one condition at
a time**, and a fitness landscape needs temperature, pH and media varied — that ground-truth data is
what feeds the model. So: an open-source Arduino bioreactor **under $250 (about $204 CAD each)**,
designed to run in parallel batches of up to 96, plugged in over USB serial so it needs a laptop and
a wall socket and nothing else. Up to 7 per USB-C charger and 7 per laptop USB port.
- **Requirements table with a priority and a written justification per row**, including why something
  is *low* priority (25 → 37 °C in under an hour matters little against experiments that run for
  days) and where a tolerance comes from (0.3 mm sits inside the printer's 0.1–0.5 mm accuracy).
- Temperature: peak ~60 °C, held **37 °C within ±0.3 °C**, against a stated budget of ±1.5 °C
  (±1 control, ±0.5 probe).
- **OD done twice over:** a red LED with **two identical photodiodes — one reference for
  environmental and LED drift, one collecting** — so differences come from the environment rather
  than the hardware. Default output is **normalised OD (nOD), a multiple of the starting density,
  because it needs no calibration**; OD600 is available through an automatic **3-point quadratic
  calibration against a spectrophotometer** (yeast curve R² = 0.993) and is explicitly *not* the
  default. Live nOD plotting was added because stakeholders asked for it, replacing export-and-plot.
- Iteration details that read as real: V1's **8 jumper wires disconnected whenever the bioreactor was
  moved**, replaced by one Stemma QT connector per sensor; an I2C address conflict between the two
  identical photodiodes resolved; V1's fan **minimum speed of 1800 RPM risked harming the bacteria**,
  so stirring was brought down to a controllable 150–300 RPM; and in the dashboard, **controls were
  found to be going to all connected bioreactors instead of the selected one**, and fixed.
- Final experiment: the bioreactor **grew *E. coli* over 4 hours, confirmed against a
  spectrophotometer**. Three peristaltic pumps supported in architecture (two in, one out) with the
  subsystem fully working for one prototype pump — stated as such.

## What is open, in their own words
- Their own fine-tuned model **does not yet beat sequence length** on any of twelve activity targets.
- No library has yet been selected by the model; nothing is prospectively validated.
- Only 1.53 % of labels are negatives, mostly from one screen; 48 % of labels sit in one family.
- The structure–Tm signal could be noise (p = 0.0084 against a 4.5 % null pass rate).
- Biosensor output is binary only, and a positive may reflect expression level, not activity.
- Only one of five characterised PETases grew in the first Biosensor test.
- Only sul1 of three resistance genes assembled.
- PETase surface display not yet confirmed by antibody.
- Pump subsystem proven for one pump; pH control is future work.
- LOBSTER chimeras are plausible, not validated.

## What we would copy
1. **Let the stakeholder set the specification.** "70 °C is industrially useless" became a North Star
   Goal of room temperature — the clearest case in either Top 10 of human practices choosing a number.
2. **Split by homology component, not at random**, and say what the random split would have claimed.
   ρ = 0.72 → does not beat sequence length is the most useful sentence in the 2026 dry labs.
3. **Make a no-model control the bar.** Sequence length and amino-acid composition are free; if a
   language model cannot beat them, it has not earned the screen.
4. **Audit your LLM against human–human disagreement**, not against truth. 70 % vs 83 % is
   interpretable; "70 % accurate" would not be.
5. **Build the assay around what the claim requires.** Copper inside the polymer means a positive
   can only come from cutting the polymer.
6. **Design orthogonality instead of hoping for it** — different ori family, different marker, and
   the double plate as the screen.
7. **Put the scar where it cannot hurt.** BsmBI sites arranged so the Golden Gate scar lands inside
   the linker, and a stop codon that makes the verification tag report insertion.
8. **Choose the medium to close a false-positive route.** Thymine-free Mueller-Hinton, because
   thymidine uptake would fake resistance.
9. **Run the leakage control and the toxicity titration before the experiment**, and publish both.
10. **Make the default output the one that needs no calibration.** nOD by default, OD600 on request.
11. **Publish each label source separately, keep retractions in place, and put the downstream result
    on the model card** so nobody reuses the weights for a job they fail at.
