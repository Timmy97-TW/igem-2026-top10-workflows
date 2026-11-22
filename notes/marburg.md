# Marburg — CLiPPR (Foundational Advance, Germany) — Overgrad Top 10 2026
Title: CLiPPR — post-transcriptional control of chloroplast gene expression with synthetic PPRs
Wiki: https://2026.igem.wiki/marburg
Also: Best Foundational Advance Project (Overgrad) nominee, Gold.

## Core idea
Chloroplasts are the best protein factories a plant has — around **80 % of the protein in
*Arabidopsis* green leaves sits in the chloroplast**, a single recombinant protein can be more than
half of a leaf's soluble protein, and the inputs are water, CO₂ and light. The plastome is precisely
engineerable by homologous recombination and gives very high expression. So why is plant
bioproduction still overlooked? Because **growth and production compete**: high constitutive
expression imposes a metabolic burden, the plant stays small, and the total yield of recombinant
protein ends up low. In microbes you solve this with **dynamic control** — grow first, then switch
production on. Chloroplasts have no equivalent toolkit.

Plants themselves do have the mechanism: they regulate plastid genes **post-transcriptionally**
through nuclear-encoded **RNA-binding PPR proteins** (pentatricopeptide repeat). CLiPPR builds the
synthetic version — **synthetic 5′ UTRs placed upstream of any gene of interest, matched to
synthetic PPRs expressed from the nucleus under inducible promoters**, so a nuclear inducer controls
a chloroplast gene.

**Three mechanisms attempted, deliberately, rather than one:**
- **Blocking** — PPR binds over the start codon and stops the ribosome (down-regulation).
- **Protecting** — PPR binds the 5′ UTR and shields the transcript from 5′→3′ exonuclease
  (up-regulation).
- **Resolving** — PPR binds inside a hairpin that occludes the ribosome binding site and opens it
  (up-regulation).
Tested across **three systems of increasing complexity**: a spinach **chloroplast cell-free system
(CCFS)**, living **Chlamydomonas reinhardtii**, and **Nicotiana benthamiana** as the higher plant.

Scale, as the wiki counts it: **673 MoClo/Golden Gate reactions, 565 plasmids, 38 nuclear
transformations, 60 chloroplast transformations, 23 proteins purified, 1,140 CCFS reactions.**

## WET LAB
### PPR production, and an automation attempt that was abandoned with numbers
His-tag/Ni-NTA chosen on stated grounds: one step, cheap, reproducible by others, and a small 6×His
tag that should not interfere with RNA binding. They first tried a **semi-automated 96-well
purification (SAPP) on the MaxGENESYS biofoundry** at the Max Planck high-throughput facility — and
reverted to manual, with the reason quantified: automated yields landed in the **nanomolar to
single-digit micromolar** range, while manual purification gave **6 µM to 150 µM**, which is what
the downstream assays needed. Purity checked by Coomassie SDS-PAGE against expected masses
(48.9 kDa for 9-repeat PPRs, 66.8 kDa for the 14-repeat PPR 313b), aliquoted and flash-frozen to
avoid freeze–thaw. The throughput constraint is published as a constraint: **eight PPRs per run,
several days of prep plus a full day on the column, so they deliberately dropped part of their own
design set.** Total: **19 novel PPR proteins** taken from design through cloning, expression and
purification.

### Fluorescence polarisation — a binding assay with a real negative control
Seven 9-nt binding-site RNAs, each fluorescein-labelled on a 3′ adenine, plus **a nine-cytosine RNA
as the non-binding control**. Titration range anchored on a literature KD (7.6 nM for a PPR on the
*rpoA* 5′ UTR): 800 nM down to 0.39 nM in halving steps against 5 nM RNA, read at five time points
and analysed on the overnight data. Results, with 95 % CIs published:
PPR 106 **349.9 nM** (159.5–936.4), PPR 113 **195.1**, PPR 342 **143.2**, PPR 313a **129.2**,
PPR 1 **106.6**, PPR 334 **81.83**, and **PPR 107 < 2.5 nM — beyond the assay's resolution**, which
is half the probe concentration, so it is reported as a limit rather than a number. The non-binding
control never saturated, so its KD is reported as **> 800 nM** — which is simultaneously the
specificity control and the assay-functionality control.
**PPR 107 is the interesting one because the design reasoning is published and it was a prediction.**
They took the native *rpoA* recognition sequence and changed the first two bases "UU"→"AG" to make
an orthogonal part. That change swapped the N-terminal motifs ND-ND → TN-TD, **cutting the number of
D31-containing motifs (which the GRASP paper reports as lower-activity) from 6 to 4**, and since
N-terminal PPR–RNA interactions carry more weight, they *hypothesised in advance* that binding would
improve. It did, by at least threefold against the native sequence — among the best KDs in the
literature.

### Cell-free system: the method work is published, not assumed
- **Three CCFS batches made in one season, each validated against a known-good extract — and from
  the second batch onward, each new batch tested alongside a sample of the previous one**, so batch
  drift is detectable rather than invisible. No-DNA and no-extract controls on every run. Validated
  with **UTC 7.0 (BBa_K3758301), a construct from Marburg's own 2021 team.**
- **Promoter chosen by experiment, not by preference.** Three synthetic 5′ UTRs were each built
  twice, once behind T7 and once behind **rrn16** — the native chloroplast promoter, chosen as a
  candidate *because* it is the promoter they use in *C. reinhardtii*, i.e. for translatability to
  the in vivo work. Result: the T7 constructs sat clearly above the no-extract control with
  construct-to-construct variability (which is what they wanted to see); **none of the rrn16
  constructs produced a signal above the no-extract control** — in fact the control was higher. So
  T7 it was, with the loss of in vivo comparability accepted and stated.
- **Blocking worked, and then was made to prove specificity twice.** PPR 1 binds the NanoLuc start
  codon region of a modified UTC 7.0. A 3×4 titration (0.1/1/10 nM DNA × 0.1/1/10/15 µM PPR) gave
  dose-dependent luminescence reduction, with the DNA dependence explained mechanistically (more
  template → more mRNA at fixed PPR → smaller relative effect). 1 µM chosen as the working
  concentration "as it was the best balance between seeing an effect and economizing protein."
  Then the specificity problem is named out loud — the effect could have come from unspecific
  interference with transcription or translation — and answered with **two separate controls**:
  (1) the same construct with **Firefly luciferase** in place of NanoLuc, and the control's weakness
  is published too (every CDS starts with ATG, so a 5-nt AAUGG motif is still bindable, which
  "may slightly dampen the contrast"); (2) the NanoLuc construct against a **non-cognate PPR 313a**,
  which gave **~100-fold reduction with PPR 1 and very little with PPR 313a**. Claimed as, to their
  knowledge, **the first demonstration that a synthetic PPR can shut down translation in a
  chloroplast extract.**
- **Protecting failed, and the failure was localised to the buffer.** XRN-1 chosen with the
  reasoning spelled out — it is 5′→3′ processive, i.e. it attacks from exactly the end the PPR
  occupies, where "a 3′→5′ nuclease would degrade from the far end and would not test our hypothesis
  at all" — and it needs a 5′ monophosphate, so RppH was held constant at 0.15 U to convert the
  triphosphate end. XRN-1 was diluted in **chloroplast lysis buffer rather than the supplier's
  NEBuffer 3, to protect the CCFS**, and that choice is what undid the assay. Seven levels from
  0.005 to 0.2 U, **each against a volume-matched buffer-only mock**: expression fell **97-fold**
  from 0 to 0.2 U — and the **enzyme-free mock fell 98-fold.** The signal loss was the buffer, not
  the nuclease. The working level was chosen on explicit signal-budget grounds anyway (0.1 U leaves
  195-fold over background; 0.2 U leaves 9-fold with high scatter; below 0.05 U is indistinguishable
  from no enzyme), 11 UTR–PPR pairs were screened, and the verdict is blunt: **"The main takeaway
  from this experiment is that the assay is not yet functional."** Individual pairs are described
  honestly, including "even more bizarre results — the XRN-1 sample was the highest of them all",
  NanoLuc contamination in two no-CCFS controls, and high standard deviations.
- **Their response to a broken assay is to remove a variable.** Eliminate translation and measure
  mRNA directly: a **Pepper aptamer** (a fluorogenic RNA tag binding an otherwise dark dye) obtained
  from Michael Spädt of the Erb lab after asking around campus, validated in CCFS in one experiment,
  cloned into their Golden Gate standard — **and not tested in time, stated as such.** Then a third
  redesign: drop the extract entirely, initiate T7 transcription with **GMP so transcripts carry a
  monophosphate without RppH**, run transcription to completion before adding XRN-1 so the two do
  not overlap, dilute XRN-1 in NEBuffer 3 at 37 °C "which is what the unit definition refers to",
  and use a **9×U PPR as the non-binding control, itself pre-validated by fluorescence polarisation**.
  Two predicted problems are written down **before** the experiment: GMP initiation is incomplete so
  some transcripts stay invisible (with the control that measures that fraction specified), and
  **Pepper is a folded RNA that may stall the exonuclease by itself, so the no-PPR + XRN-1 reaction
  is the one to look at first.**
- **Resolving failed for a reason they put a number on.** Seven hairpin 5′ UTRs characterised alone
  first: basal expression spanned **four orders of magnitude** and broadly tracked predicted
  structure stability — barely structured UTR362 strongest, most stable UTR334 essentially silent —
  **but not strictly** (UTR322 and UTR343 expressed below UTR312/313 despite comparable or weaker
  predicted structure), so "folding energy alone does not set expression strength". Then each PPR
  titrated against its cognate construct over a 50-fold range: **flat, indistinguishable from the
  matched SEC-buffer control.** They also caught a confounder and fixed the comparison rather than
  the data — **SEC buffer itself dampens expression several-fold relative to water**, so UTR
  characterisation is compared to the water control and titrations to the buffer control. The
  diagnosis: **the only energy available to open a hairpin is the PPR's binding energy, ~−8 kcal/mol
  at their measured affinities, against hairpins predicted at −21 to −38 kcal/mol.** Hence a design
  rule handed to whoever comes next: **target the local opening energy at the ribosome binding site,
  not the global fold.**

### In vivo: *C. reinhardtii*
- **Strain choice settled by running both.** Chloroplast transformation is routine in CC-125;
  UVM4 is selected for efficient nuclear expression with reduced transgene silencing but its
  tolerance of biolistic bombardment was unknown — so **all 30 5′ UTR constructs were bombarded into
  both strains.** UVM4 produced enough transformants, so they continued with it alone. Antibiotic
  raised stepwise to drive toward homoplasmy, **and some constructs did not survive that selection,
  leaving 26.**
- **A PPR-independent screening readout, designed in.** NanoLuc sits downstream of the synthetic
  5′ UTR; **Firefly luciferase sits upstream in the opposite orientation**, in the same cassette as
  aadA and linked by an intercistronic expression element, so FLuc is expressed independently of any
  PPR. Since no-PPR strains should give little NLuc, **FLuc is the only way to recognise a
  transformant at all** — and the two luciferases use different substrates, so both can be read from
  one sample. Screening on FLuc/OD₇₅₀ gave **10 strains clearly above untransformed control**;
  utr107 and utr110 colonies gave none.
- **Synthesis was a hard constraint, named.** PPR coding sequences are highly repetitive and
  *C. reinhardtii*'s nuclear GC content is high, which "exceeded the complexity limits of
  traditional DNA synthesis companies" — **only Ansa Biotechnologies could make them, in limited
  quantity.** That constraint is the reason the Chlamy-GRASP toolbox exists.
- Eleven PPRs cloned for constitutive expression (P-AR promoter, C-terminal mNeonGreen) into strains
  already carrying the matching plastid UTR. Positives found by mNG/OD₇₅₀ with **untransformed UVM4
  in every panel as the chlorophyll-autofluorescence control**. Conclusion stated at exactly its
  strength: synthetic, codon-optimised, intron-containing PPRs **are expressed** in Chlamydomonas.
- **Then the question expression cannot answer:** a nuclear PPR must be imported across the
  chloroplast envelope, and neither the targeting sequence's behaviour with a synthetic protein nor
  tolerance of the C-terminal tag could be assumed. Confocal microscopy on one representative strain
  showed PPRs **in the chloroplast, and more often than not in the pyrenoid**, the CO₂-concentrating
  subcompartment — an unplanned observation reported as one.
- **The decisive comparison:** strains with the plastid reporter alone vs the same plus the cognate
  nuclear PPR. **utr102 + PPR 100 reached ~4× the parent's NLuc output, reproduced in all three
  independently picked colonies** — explicitly argued as evidence against a single-integration
  artefact. utr113 + PPR 113 gave a comparable increase from **the one colony recovered**. **utr106 +
  PPR 106 did not exceed its parent.** Reported as **two of three cognate pairs, not all of them.**
- **The repressible system failed and the failure is diagnosed, not excused.** METE (B12-repressed
  promoter) and the THI4 thiamine riboswitch were **stacked in one construct on purpose** — after a
  discussion with Alison Smith — hoping for tighter control than either alone. The logic is spelled
  out: the system is ON by default, so screening had to be done uninduced. Only a handful of
  transformants appeared; **many were unusable because of their transplastomic background — the
  5′ UTR was not degraded even when unprotected, so the PPR-dependent difference could not exist**;
  others did not grow. Conclusion: those elements together may not give enough expression strength.
- **Replacement systems chosen and, crucially, being characterised alone first.** Three alternatives
  — the salt-inducible *C. reinhardtii* **CrGPDH3**, plus estradiol- and IPTG-inducible systems
  recently published for the red alga *Cyanidioschyzon merolae* — each placed directly upstream of
  NanoLuc, with the reasoning published: combining them with a PPR **"before their dynamic range and
  leakiness are known would only confound both readouts."**
- **Chlamy-GRASP proof of concept designed as a control.** A deliberately **nonsense PPR**
  (BBa_263SXY7Y), matched to none of their UTRs, so the only question it answers is whether a
  toolbox-designed construct is expressed at all — **and once confirmed, the same strain becomes the
  non-binding negative control their in vivo measurements currently lack.** In selection at freeze.

### In vivo: *N. benthamiana*
Transient agroinfiltration chosen over stable transformation with the reason given — regenerating
chloroplast-transformed tobacco takes far longer than an iGEM season, transient assays take days.
Infiltrated areas outlined with marker pen so leaf discs are sampled from the right place. They
**reproduced the published rapamycin-inducible system** (Gal4 DBD + 6× Gal4 operator + QFAD
activation domain, plasmids and advice from Dominik Schirmer): **~10-fold GFP increase on induction
in both plants**, with the no-Gal4-DBD negative control at the level of infiltration medium. One
induced replicate fell well below the other two and they say so.

## DRY LAB — PPR-opt, and a baseline measured on the same scale
The GRASP toolbox assembles synthetic PPRs modularly, but it is **codon-optimised for *E. coli***.
Porting it means codon-optimising every module, which moves the Golden Gate fusion sites, which
changes assembly fidelity and module boundaries — "a set of interdependent decisions we worked
through by hand". **PPR-opt automates that for any organism**, in two modes: *Designer* (one PPR for
one RNA sequence) and *Inventory* (a whole GRASP-style toolbox for an organism). Delivered as
form-driven Colab notebooks that run entirely remotely. And the disclaimer is on the page:
**"All outputs are software predictions and have not yet been validated experimentally. As of now,
one PPR from the Chlamy-GRASP toolbox has been successfully transformed into the nucleus."**

How the Chlamy toolbox was built by hand, which is what PPR-opt encodes:
- Fusion sites placed **inside the ARELF motif**, following Dennis et al., because it carries the
  repeat's most variable codons and therefore the largest pool of possible overhangs.
- *C. reinhardtii* codon usage taken from the Kazusa table and published **as a full 64-row
  comparison against *E. coli* with the percentage-point difference per codon** — the extremes are
  striking (AAA/AAG differs by 65.6 points, GAA/GAG by 59.4, UAC/UAU by 54.7).
- From the most abundantly expressed *C. reinhardtii* proteins they **set a threshold and excluded
  every codon below 50 % relative abundance**, translated ARELF into what remained, and searched
  that pool by trial and error for overhang sets predicted to ligate cleanly, **targeting >75 %
  fidelity**. Four pairs survived; they define the B, C and D module overhangs.
- **The methodological move worth copying:** fidelity was predicted with the NEB ligase fidelity
  calculator, and because **"the calculator models the reaction rather than measuring it"**, its
  output cannot be compared with the *experimentally measured* fidelity reported for the original
  GRASP toolbox — so they **ran the original GRASP overhangs through the same calculator** to get a
  baseline on the same scale. Result: original GRASP level 0 **78 %**, Chlamy-GRASP level 0 **82 %**
  (+4 points, ~5 % relative); level 1 unchanged at **99 %** for both, **which is what keeps the new
  modules compatible with the original toolbox.**
- Module sequences trimmed or extended so each overhang sits where it is generated; the A module's
  5′ and E module's 3′ overhangs **were not theirs to choose** (fixed by the backbone's BpiI site);
  the full CDS codon-optimised and **every overhang re-checked and corrected afterwards** so it still
  matched the chosen set; a BsaI site added for cloning from synthesis into level −1, with the 5′ and
  3′ constructs symmetric except for reverse-complementation.
- **Introns added where the literature says they help**: the LHCBM1i2 intron (best-performing in
  Baier et al.) placed in the B and D modules, **shipped with and without it** so designs stay
  flexible.

## What failed, in their own words
- The **Protecting** approach: no measurable regulation, because XRN-1 is barely active in the
  conditions the chloroplast extract requires — the 98-fold mock drop names the buffer as the cause.
- The **Resolving** approach: no effect, because −8 kcal/mol of binding energy cannot open a
  −21 to −38 kcal/mol hairpin.
- The two failures converge: in *C. reinhardtii* the unprotected 5′ UTR **also** persisted without a
  PPR, so there was nothing to protect there either. Their reading: **"Two very different systems
  failing for the same reason makes it a tractable problem rather than a mysterious one — what the
  approach needs is a degradation baseline, not tighter binding."**
- The stacked METE/THI4 repressible system: too weak, no usable dynamic range.
- One of three cognate PPR–UTR pairs gave no in vivo increase.
- Automated 96-well purification: yields an order of magnitude too low, reverted to manual.
- rrn16 in the cell-free system: no signal above the no-extract control.
- The Pepper aptamer constructs and the Blocking PPR in tobacco: built, not tested in time.
- Strains lost in transfer; some constructs did not survive homoplasmy selection; several in vivo
  results rest on a single colony.
- The constraint behind all of it, stated: **chloroplast plus nuclear transformation takes about
  eight weeks, i.e. one iteration per season.**

## What we would copy
1. **Build the screening readout that works when the experiment fails.** FLuc upstream, in the
   opposite orientation, PPR-independent — without it, a no-PPR transformant is invisible.
2. **Run both strains when you cannot predict which will work.** 30 constructs × 2 strains, then
   drop one with a reason.
3. **Validate every new batch against the previous batch, not just against a standard.**
4. **Pre-register the hypothesis behind a design change.** The ND-ND → TN-TD motif argument was made
   before PPR 107 was measured, which is why its sub-2.5 nM KD means something.
5. **Report a result as a limit when it exceeds your assay's resolution** — "< 2.5 nM", "> 800 nM".
6. **Put the mock control in the titration.** A 97-fold drop with enzyme and 98-fold without is the
   whole finding.
7. **Name the confounder and fix the comparison.** SEC buffer dampens expression, so titrations are
   compared to buffer and characterisations to water.
8. **Convert a failure into a number and then into a design rule.** −8 vs −21…−38 kcal/mol →
   "target the local opening energy at the ribosome binding site, not the global fold."
9. **Characterise an inducible system before you put anything in front of it**, so dynamic range and
   leakiness are not confounded with the thing you are measuring.
10. **Make your proof-of-concept construct double as the negative control you are missing.**
11. **Benchmark a predictor against the same predictor, not against someone's measurement.** Running
    the original GRASP overhangs through the NEB calculator is the cleanest comparison move in the
    2026 dry labs.
12. **Write the two things you expect to go wrong before you run the assay.**
