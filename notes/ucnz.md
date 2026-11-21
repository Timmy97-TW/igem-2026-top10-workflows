# UCNZ — NanoBrew (Biomanufacturing, New Zealand) — Top 10 Undergrad 2026
Title: NanoBrew — Transforming brewers' spent grains into high-value nanocellulose
Wiki: https://2026.igem.wiki/ucnz
Repo: gitlab.igem.org/2026/ucnz
Routes that exist (from the JS bundle; `/project-description` is a 404): `/description`, `/PlasmidDesign`,
`/engineering`, `/experiments`, `/results`, `/hardware`, `/parts`, `/contribution`, `/notebook`,
`/entrepreneurship`, `/human-practices`, `/safety-and-security`, `/education-and-outreach`, `/team`

## Core idea
**Brewers' spent grain (BSG)** — 39 Mt/yr globally, ~85 % of brewing waste by weight, ~13,700 t/yr
landfilled in New Zealand — is attractive as a nanocellulose feedstock specifically because it is
**lower in lignin** than wood pulp, so it needs less harsh chemistry. Two secreted enzymes do the
work in sequence: **XynA**, a *Bacillus subtilis* 168 endo-1,4-β-xylanase (from iGEM part
**BBa_K1175005**), strips hemicellulose (xylan, the largest BSG component) to expose cellulose;
then an **ancestral Cel5A endoglucanase ("EG")** cuts the exposed cellulose into fibrils.
The ancestral enzyme was **not reconstructed by the team** — it is the resurrected Precambrian
Cel5A of **Barruetabeña et al. 2019**, chosen off the shelf for its higher activity, wider thermal
and pH range, and better *E. coli* expression than modern homologues, and already used for
nanocellulose by **Alonso-Lerma et al. 2020**. Secretion was to come from **YebF** fusion
(**BBa_K1610300**, TAS_Taipei 2015) so a bioreactor could dose BSG directly. YebF failed, which
reorganised the whole second half of the project.

## WET LAB workflow — a five-goal ladder, each goal gated on the one before
The Results page is structured as **Goal 1 → Goal 5**, and each goal explicitly states what it
licensed the team to do next. Ordered pipeline:

1. **No assembly at all — constructs were ordered pre-cloned.** Six *E. coli* constructs were
   ordered from **Twist Biosciences** (sponsorship) already in vector, which the team states let
   them **ignore restriction-site design entirely**. Vectors: **pET_blank_Amp** (both XynA
   constructs) and **pET_blank_Kan** (all four EG constructs), both IPTG-inducible, chosen for
   having **no unwanted N-terminal His tag** and an insertion site that supplies promoter and RBS
   so the team only had to provide start and stop codons. Two different markers were picked
   deliberately **to keep co-expression open later**; ampicillin went to the xylanase because
   **ampicillin degrades faster and the xylanase is the enzyme that must be active first**.
   Codon-optimised for *E. coli*, checked in **SnapGene 8.2.3**.
2. **Construct grammar, held constant across all six.** Fixed elements: **C-terminal 6×His** for
   IMAC, joined by a **(GS)₁ = GGGGS 5-residue linker**; in every YebF fusion, a GS linker **plus a
   TEV protease site** between YebF and cargo, placed there in advance in case YebF interfered with
   activity. The His tag was put at the **C-terminus specifically because most constructs carry an
   N-terminal signal peptide that is cleaved in the cell** — a C-terminal tag keeps the signal
   peptide functional. Three no-YebF constructs (XynA, EG, EG-CBM) were built as **pre-planned
   fallbacks in case YebF failed**, and EG-without-CBM was built **in case the CBM itself blocked
   expression**. Both of those hedges paid off.
3. **Transformation + a hard sequence gate.** *E. coli* **BL21(DE3)**, chosen because all three
   source parts had been expressed separately in BL21(DE3) in the literature. Plasmid mini-prep
   concentrations published per construct: EG **137.4**, EG-CBM **141.2**, YebF-EG **60.9**,
   YebF-EG-CBM **60.4**, XynA **54.5**, YebF-XynA **296.3 ng/µL**. 20 µL of each sent to
   **Plasmidsaurus**; **all six were 100 % matches with no mutations**. The same overnight culture
   that was sequenced was used to make the glycerol stocks, so *every later experiment traces to a
   sequence-verified stock* — stated as the reason for doing it that way.
4. **Induction grid, then freeze the condition.** EG and EG-CBM screened over **2 IPTG
   concentrations (0.1, 1 mM) × 3 temperatures (22, 30, 37 °C)**, uninduced control held at 37 °C
   with no IPTG. Whole-cell lysate and soluble fractions prepared separately. **30 °C / 0.1 mM
   IPTG** won and became the standing condition for EG and EG-CBM; **25 °C / 0.1 mM IPTG** was
   used for the YebF constructs because the YebF literature (Zhang et al. 2005/2006) used it.
   Honest caveat printed: *most soluble-fraction lanes were empty from improper lysis*, so the
   condition was chosen on whole-cell bands **in the hope** it transferred to soluble expression.
5. **Four-compartment fractionation with a borrowed positive control.** Separate protocols for
   whole-cell lysate / soluble / **periplasmic / cytoplasmic** / **extracellular** (precipitated).
   The decisive move: they ran **HiSiaP**, a known periplasmic protein from their secondary PI's
   lab, **as a control on the fractionation method itself**. HiSiaP appeared where it should —
   confirming the periplasmic extraction worked — but **also appeared in the extracellular
   fraction, where it must not be**. They therefore ruled the extracellular lane untrustworthy
   (leakage/lysis) and refused to call XynA's extracellular band secretion. Later, EG-CBM (a
   cytoplasmic protein) in the extracellular lane was used the same way, as a **lysis tell-tale**.
6. **Western blot as the sensitivity escalation, not the default.** Anti-His primary antibody,
   with a **temporary Ponceau stain** step used to verify transfer before developing. Run on all
   six constructs at once so non-expressers could be compared against known expressers. This is
   what resolved **two XynA bands ~2–3 kDa apart** (immature with signal peptide vs mature
   without) that "in a typical SDS-PAGE gel would have blurred together" — and that observation
   **changed the purification plan**: XynA would be purified from the **periplasm only**, to avoid
   co-purifying the immature form abundant in whole-cell and soluble fractions.
7. **Purification, numbers published.** Both on a **Cytiva Äkta Go** with a **5 mL HisTrap HP**
   column, 5 CV washes, 100 % imidazole elution, 1 mL fractions, every fraction of interest checked
   on a gel before pooling.
   - **EG-CBM**: 2 L culture, lysate → IMAC → buffer exchange in **20 mL 30 kDa spin concentrators,
     5 rounds**, with **NanoDrop on the flowthrough each round to prove no protein was lost** →
     **~230 mg total yield**, concentrated to **~100 µM**, flash-frozen in 1 mL aliquots at −80 °C.
   - **XynA**: 2 L culture → **periplasmic extract** (room-temp sucrose buffer 10 min, 13,000 × g,
     then ice-cold water shock, 0.45 µm filtered) → IMAC → **3 × 5 mL HiTrap desalting columns in
     series** → **10 kDa spin concentrators** → nineteen 150 µL aliquots at **~10 µM**, total
     **~0.61 mg**. Only Peak 2 contained XynA, as a single band.
   - The asymmetry is reported as a workflow consequence, not hidden: **XynA scarcity became
     rate-limiting** and is named as the reason one nanocellulose arm could not be run at all.
8. **BSG pre-processing as its own protocol stack.** 50 g frozen BSG + 50 mL UltraPure water,
   **blended 160 s on high**; **freeze–thaw cycles at −20 °C overnight** (defined as the treatment
   variable: **LF = 1 cycle, HF = 4 cycles**); liquid-nitrogen flash freeze; **freeze-dried ≥72 h**
   (Thermo Savant Supermodulyo 230); **sieved through a 0.5 mm steel sieve**, weight recorded.
   **PEG 6000 at 0.018 g per 1 g BSG.** XynA pre-treatment ("X-BSG"): 0.5 µM XynA, 2 % w/v BSG,
   37 °C / 1000 rpm / 3 h, then **three washes at 20,000 × g into EG-CBM buffer** so no residual
   xylose survives into the next assay.
9. **Activity assays** (see MEASUREMENT). Standing conditions: **0.5 µM enzyme** for every enzyme,
   **0.5 % w/v** control substrate (CMC for EG-CBM, Birchwood xylan for XynA), **2 % w/v BSG**,
   ThermoShaker **37 °C / 1000 rpm**, 2–3 h.
10. **Nanocellulose production**, adapted from Alonso-Lerma et al. 2020: 800 mg BSG in 40 mL buffer
    (2 % w/v), 0.5 µM EG-CBM, 3 h at 37 °C / 180 rpm with the tube **tilted so BSG cannot settle**,
    reaction stopped on ice 10 min, **Hielscher UP200S ultrasonication 25 min at 70 % amplitude,
    0.5 on/off**, then **4,200 × g / 5 min** to clear solids and **33,000 × g / 1 h at 4 °C** to
    pellet the product. Yields by weight: **~90 mg from HF+PEG BSG vs ~40 mg from LF BSG.**
11. **Characterisation — and this is where the project stops.** **AFM** (external help, Dr Donn
    Adam Gito), run side by side with **donated pure cellulose nanocrystals as a reference
    material**. Then **FTIR** on an **Anton Paar Lyza 7000**, **24 scans, 4 cm⁻¹ resolution,
    400–4000 cm⁻¹**, again with a powdered CNC control. Neither confirmed the product (below).

**Controls and replicates, as stated:** uninduced controls on every expression trial; untransformed
BL21(DE3) and blank SHuffle negatives; EG-CBM as a positive expression control when moving strains;
a **substrate-only, no-enzyme sample incubated alongside every assay and sampled at both t=0 and
endpoint**, so the sugar released by heating alone is subtracted rather than assumed; a 0-minute
reference for every time series. **n = 3 with standard-deviation error bars** on the two assays
where a claim turns on a difference (XynA top-up, X-BSG vs BSG) — the time-series exploratory assays
are single-run and not labelled otherwise.

## MEASUREMENT — the assay is the deliverable
The team's own framing: the **DNS assay had to be built before any construct could be judged**, and
they put it on the Engineering page as a **five-iteration DBTL cycle**, which is more development
than most teams give an assay.
- **Iteration 1** — scaled the BenchChem cuvette protocol down 10× (100 µL sugar + 100 µL DNS,
  95 °C / 10 min, ice 5 min, + 800 µL water, read **540 nm**). Linear standard curves for **glucose
  and xylose** obtained. Problem found: insoluble BSG interferes with turbidity **and degrades
  during the 95 °C step, inflating the reading**.
- **Iteration 2** — read **only the soluble fraction** after centrifugation. Validated by
  substrate-only samples giving low readings.
- **Iteration 3** — moved to a **96-well plate / PCR-plate format** (50 µL sample + 50 µL DNS,
  95 °C 10 min in a PCR cycler, 4 °C 5 min, 40 µL + 160 µL water), and **checked the scaled version
  reproduced the unscaled readings** before trusting it.
- **Iteration 4** — the real innovation: **5 µL of 1 M NaOH pre-loaded into each well** so the
  enzyme is killed the instant the timepoint is taken, with the sample volume adjusted to 45 µL to
  keep the **1:1 sample:DNS ratio**. They rejected the obvious alternative (add DNS directly)
  **because DNS is light-sensitive**. This is what produced Michaelis–Menten-shaped curves.
- **Iteration 5** — for low-signal samples, **drop the final dilution from 5× to 2.5×** rather than
  change substrate or DNS amount, so the comparison between samples stays intact and the dilution
  is back-calculated. The protocol says explicitly: only use 2.5× if prior experience showed a
  sensitivity problem.
- **How a result was judged to count:** absorbance at 540 nm → sugar concentration via a **glucose
  or xylose standard curve prepared fresh on the day of every assay**, minus the substrate-only
  heating control. Because DNS reagent behaviour **varied between days**, they state they could
  **only compare samples run on the same day**, and ran samples together for that reason.
- **Where calibration was refused:** in the combined XynA + EG-CBM assay, results are published as
  **raw A540, not sugar concentration**, because DNS cannot separate xylose from glucose and
  **"it is impossible to calibrate the combination assay to a standard sugar curve."**
- **An assay built to answer a mechanistic question:** XynA activity plateaued at 2 h, so they ran a
  **triplicate enzyme-top-up assay** — add 0.5 µM fresh XynA at 2 h vs not — to distinguish
  *enzyme dead* from *substrate exhausted*. No significant difference, **t(4) = 0.3831, p = 0.7211**
  ⇒ substrate exhaustion. That result was then used to **set the incubation times for every later
  assay**, including the 3 h XynA pre-treatment.
- The one significance test that carries a design decision: **X-BSG vs BSG for EG-CBM,
  t(4) = 3.5353, p = 0.02412** (glucose almost doubled) ⇒ XynA pre-treatment is worth keeping.
- **Normalisation caveat they volunteer:** EG-CBM on BSG gave ~half the final sugar of CMC, but
  **"accounting for the difference in starting weights, roughly 12.5 % the activity on BSG"** —
  the same 12.5 % figure is given for XynA on BSG vs Birchwood xylan.
- **No U/mg, no specific activity, no kcat/Km, no temperature or pH optimum was measured.** All
  activity is reported as sugar concentration or raw absorbance over time. No azo-CMC, no 4-MUC.
  No DLS, no XRD crystallinity, no zeta potential, no TEM/SEM — characterisation is **AFM + FTIR
  only**, and both were inconclusive.

## DRY LAB workflow — small, and honest about being small
| Tool / version | What question it answered | Verdict |
|---|---|---|
| **AlphaFold 3** | does adding YebF / CBM / linkers / His tag break the fold or the active site? | run **before ordering genes**; go-ahead |
| **PyMOL 3.2.0a** | quantify that, by RMSD against the unmodified enzyme | all **< 2 Å** ⇒ proceed |
| **SnapGene 8.2.3** | plasmid QC, and later primer design (24 bp binding + 20 bp overhang) | — |
| **Capillarix** (unreleased) | can a differential capillary microviscometer read < 100 µL? | yes to **< 5 % error** vs water, **up to 22.87 %** vs oil |
| **Lan et al. 2024 CNF-1 TEA**, scaled | what would a pilot plant cost? | benchmark only, **explicitly not a NanoBrew number** |

- **There is no in-house ancestral sequence reconstruction.** No sequence search, alignment,
  phylogeny (no IQ-TREE/RAxML/MrBayes), no ASR tool (no FastML/PAML/GRASP), no model selection —
  the ancestral Cel5A is taken as a published sequence from Barruetabeña et al. 2019 and the CBM
  from *Acetivibrio thermocellus* with it. The wiki is straightforward about this, and lists
  "trialling our own ancestral sequence reconstruction to create a xylanase that can rival the
  ancestral EG-CBM" as **future work**. No MD, no docking, no kinetic model.
- **The structure prediction was used as a gate, with the numbers published per construct.**
  RMSD vs unmodified enzyme: XynA **0.101 Å**, YebF-XynA **0.117 Å**; EG **0.183 Å**, EG-CBM
  **0.155 Å**, YebF-EG **0.173 Å**, YebF-EG-CBM **0.135 Å**. pTM is reported alongside and is
  *not* glossed over: mature XynA **0.97**, modified XynA **0.82**, YebF-XynA **0.60**;
  unmodified EG **0.97**, EG **0.95**, EG-CBM **0.62**, YebF-EG **0.56**, YebF-EG-CBM **0.58** —
  i.e. every fusion prediction is low-confidence, and the caption says so, noting that the
  **positions and orientation of YebF and CBM are highly variable** while the catalytic core
  aligns. The claim made is only about the active site, which is the claim the RMSD supports.
- **Hardware is a second, parallel engineering track** (two DBTL iterations, integrated into a UC
  engineering course with two external collaborators, Maisie and Nathan, advised by Prof. Volker
  Nock). Requirement set first: **read a sample of < 100 µL**. A literature review shortlisted four
  physical properties — **viscosity, electrical impedance, turbidity/absorbance, laser
  diffraction** — and **two were killed before any build**: diffraction for signal-to-noise within
  UC laser safety limits, impedance for time. Viscosity was simulated in **Capillarix**
  (unreleased software supplied by its author, Rhys Marchant-Ludlow); **capillary field-effect
  transistors were dropped entirely** after iteration 1 because CFETs would not switch cleanly
  across the viscosity range a nanocellulose sample might have, and "exclusion of CFETs" became a
  written design specification. Final viscometer errors vs a water reference: **2 %, 2.56 %,
  4.275 %, 4.32 %**; vs an oil reference they degrade badly — **1.7 %, 6.7 %, 11.31 %, 14.48 %,
  22.87 %** — and the page states surface roughness is not modelled. The absorbance sensor strobes
  **R/G/B LEDs** and runs a **machine-learning calibration on an on-board ESP32**; after an optical
  chassis redesign (printed **modular so only the chassis needed reprinting**) it read guar gum at
  **10 → 10.57 %, 25 → 22.03 %, 50 → 43.49 %, 60 → 57.7 %** (errors 5.7 / 11.88 / 13.02 / 3.83 %).
  **Neither sensor was ever tested on nanocellulose** — guar gum was a substitute because the
  nanocellulose had run out — and the page says so plainly.
- **Techno-economics, stated as a benchmark rather than a result.** They adopted the **CNF-1
  pathway of Lan et al. 2024** (enzymatic hydrolysis before mechanical fibrillation) as the closest
  published analogue: minimum selling price **US$3,087/dry tonne (US$3.09/kg)** at 50 dry t/day vs
  a **US$2,837/t** non-enzymatic baseline, the premium coming from extra capacity and cellulose
  loss. Their own plant is scaled to **0.01 dry t/day**, needing **0.48–1.04 t wet BSG/day** and
  **120–260 t/yr** against a 5-year Christchurch target of **136–200 t/yr**. Capital scaled by a
  **linear factor of 0.0004** to **US$44,699**, operating cost to **US$27.87/day** — and both are
  immediately disowned in text: capital costs "do not necessarily scale linearly", a pilot plant
  needs a floor of infrastructure regardless of capacity, and **"rather than presenting an
  unreliable cost per kilogram, we will use the literature values as a benchmark."** They write out
  the NPV formula and then **decline to compute an NPV** because yield is unconfirmed.
  Market sizing is similarly annotated: SAM estimated by scaling the **US$947 M** global market by
  ANZ's **1.72 %** share of world GDP and then by the CNF share **56.3 %** → **US$9.1 M**, with the
  assumption "demand is approximately proportional to economic size" flagged as a limitation. The
  SOM table carries a note naming its two unconfirmed inputs (**20 % collection, ~40 % recovery**).
- **A life-cycle assessment is promised, not done** — explicitly as a commercialisation-stage task,
  to compare landfill vs animal feed vs NanoBrew *including replacement feed*, with the stated
  motive of "prioritising measurable sustainability over greenwashing."

## Named failures and caveats
- **YebF is the headline negative result, and the team turned it into their main contribution.**
  In BL21(DE3): **YebF-EG and YebF-EG-CBM did not express at all** (confirmed by anti-His Western,
  so it is absence, not low abundance — or translation terminating before the C-terminal tag).
  **YebF-XynA expressed and reached the periplasm but never the medium**, and the blots showed
  **~23 kDa and ~24 kDa cleaved species**, i.e. YebF being cut off in the **linker region**, in at
  least two places, **in both periplasm and cytoplasm**. The team notes the cleavage is *not*
  explained by the TEV site they designed in, because no TEV protease was added, and says the
  mechanism **remains unknown and uninvestigated**. Moving to **SHuffle T7** (oxidising cytoplasm,
  on the suggestion of a member of the Dobson lab) **rescued expression of YebF-EG-CBM but still
  gave no secretion**, and **YebF-EG never expressed in either strain**. Conclusion recorded as a
  rule: *"even if something worked in the literature, there is no guarantee it will work for you."*
  The documentation gap is named too — YebF was poorly documented in the Registry, so there was
  nothing to troubleshoot against; their fix is to document it across
  **BBa_26Y2NT4J / BBa_26UUPW2I / BBa_269T95XD**.
- **The product is unverified.** AFM showed "unevenly distributed, aggregate-like particles that
  did not at all resemble the nanocrystals, nor the nanofibrils that we expected"; the CNC
  reference imaged correctly (**uniform particles under 500 nm**). FTIR then failed on the sample:
  the CNC control matched cellulose at **HQI = 92.17**, while their freeze-dried sample's best
  match was **Klüber Syntheso HT, a polyglycol synthetic oil, at HQI = 2.78** — a result they
  publish rather than omit, attributing it to the flaky thin freeze-dried sample. **At wiki freeze
  the product is not demonstrated to be nanocellulose**, and the Entrepreneurship page repeats the
  disclaimer at the top of its market analysis ("we were unable to characterize our product").
  Planned fix: **ATR-FTIR** on the liquid/gel suspension.
- **The combined-enzyme assay was inconclusive and is labelled so.** Final absorbance of the
  combination ≈ the sum of the individual enzymes ⇒ "this indicates that XynA is **not** making the
  cellulose more accessible" — the opposite of the project's premise — with the honest rider that
  the combination curves had not yet levelled off, so a longer incubation might differ. The
  sequential pre-treatment experiment (which *did* show a benefit) was designed precisely because
  the simultaneous one could not separate the two sugars.
- **Buffer confound admitted in print:** the combination assays suspended BSG in **XynA** storage
  buffer for pipetting reasons, "the caveat for this decision is that the activity of the EG-CBM
  could have been affected by being in a different buffer."
- **PEG 6000 helped XynA but not EG-CBM** — reported as a negative for the enzyme that matters most.
- **One arm could not be run:** xylanase pre-treatment of the nanocellulose BSG was skipped because
  **there was not enough purified XynA**.
- **A pipetting error is published:** the yeast PCR for **EG-CBM_T2A_Xyn** produced a ~1600 bp band
  (EG-CBM-sized) instead of 2197 bp, diagnosed as the **wrong reverse primer added to the mix**;
  they proceeded with the three that worked rather than redo it before the freeze.
- **Vector incompatibility caught late:** the four yeast constructs were ordered in GenScript's
  **pAO815**, which turned out **not to be compatible with the only yeast strain the lab had
  (OpenPichia)**, forcing a primer-design and **NEBuilder** re-assembly into **pPICZ**. Yeast work
  started **3.5 weeks before the wiki freeze** and reaches only "DNA ready for assembly" — no yeast
  expression or secretion data exists.
- **DNS limitations listed as three bullets** on the Engineering page: non-specificity (with
  **xylose over-inflated relative to glucose** in their own standard curves), day-to-day DNS
  variability, and compounding technical error across many transfers of non-uniform insoluble
  material. Their own recommended replacement is named: **HPAEC-PAD**.
- **T2A ordering caveat quantified from literature before building:** the downstream protein can be
  **up to 70 % less** abundant and the upstream one keeps an **18–22 bp scar**, which is why both
  gene orders were ordered rather than one.

## Parts submitted
*E. coli*: XynA **BBa_2630GWS2**; YebF-XynA **BBa_26Y2NT4J**; EG **BBa_26PXMG0G**;
**EG-CBM BBa_26TOG7XZ** (the flagship new part — ~230 mg from 2 L, active on CMC and on BSG);
YebF-EG **BBa_26UUPW2I**; YebF-EG-CBM **BBa_269T95XD**.
*K. pastoris* (designed, untested): EG-CBM **BBa_262LOPFE**; XynA **BBa_26Q6GVXE**;
EG-CBM_T2A_XynA **BBa_266IKFQ3**; XynA_T2A_EG-CBM **BBa_26OB3D76** — all with an **N-terminal OST1
signal sequence** and **no purification tag**, on the reasoning that the only point of yeast is
secreted protein and purified enzyme already existed from *E. coli*. T2A is **BBa_25UBVI8J** /
**BBa_K1993019** (SYSU-MEDICINE 2016).

## Workflow signature
Controls on the method, not just on the sample. The recurring move is to spend an experiment
validating the instrument before letting it adjudicate anything: five DBTL iterations on the DNS
assay before a single construct was judged, a borrowed periplasmic protein (HiSiaP) run to audit
their own fractionation — which then disqualified every extracellular lane they had — a triplicate
enzyme-top-up assay purely to decide whether a plateau meant dead enzyme or spent substrate, and a
donated cellulose-nanocrystal reference carried through both AFM and FTIR. Because the enzymes were
bought rather than designed, the dry lab is deliberately thin and used as a pre-ordering gate
(AlphaFold 3 + PyMOL RMSD, with the low pTM of the fusions stated rather than buried), and the
quantitative modelling is explicitly labelled a literature benchmark with the NPV left uncomputed.
The result is a project that reports what it could not conclude — an unidentified product, a
secretion tag that never worked, a premise its own combination assay contradicted — in the same
register as what it could.
