# Athens — ApiconIASIS (Conservation, Greece) — Overgrad Top 10 2026
Title: ApiconIASIS — a targeted enzymatic therapy against European Foulbrood
Wiki: https://2026.igem.wiki/athens
Also: **Best Conservation Project (Undergrad & Overgrad combined) WINNER**, Gold.

## Core idea
**European Foulbrood (EFB)**, caused by *Melissococcus plutonius*, kills honeybee larvae before
pupation. The standard treatment in much of Europe **is fire**: past a threshold the colony is
killed and the frames burned on site, with up to three years of operational standstill. Antibiotics
work but are **unauthorised for bees in the EU** because no maximum residue limit exists for honey,
resistant strains are documented, and broad-spectrum treatment strips the very gut community in
which *M. plutonius* establishes most easily.
ApiconIASIS takes the weapon **from the pathogen's own genome**: bacteriophages that infect
*M. plutonius* left **endolysins** — peptidoglycan hydrolases that evolved to lyse exactly that
species — in dormant prophages inside its chromosome. Mine the genomes, express the enzyme, feed it
to the colony.

**Why this disease, and the answer is a sociological one.** Varroa and American Foulbrood have
constituencies — organised beekeepers who have been harmed and say so together — and biotech
attention followed them. EFB has none, and the reasons compound: **most infected colonies are
asymptomatic so beekeepers do not know they have it; the organism is hard to culture so researchers
left it alone; and it is rarely the sole cause of a collapse so it rarely gets blamed.** The team
found the gap by asking what they cared about before discussing project ideas at all, under a
**One Health** framing — which is also the argument for treating a managed-animal disease as a
conservation question rather than a veterinary one.

**The epidemiological case is built out of what the surveys cannot see.** A Michigan survey of 855
colonies: **36 % carried *M. plutonius*, 72 % of infected colonies were asymptomatic, and in June
54 % were infected while 22 % showed clinical disease.** Switzerland has risen annually since the
late 1990s *despite consistent culling*; it is the most widespread bacterial brood disease in the
UK; Norway broke out in 2010 after thirty quiet years, Czechia in 2015 after nearly forty. Then the
piece of reasoning that makes the page: the EU-wide **EPILOBEE** programme recorded **no clinical
cases across 161 Greek apiaries** — and they read their own null result against themselves,
because EPILOBEE measured *clinical* prevalence and **"a survey of visible disease cannot see a
pathogen whose defining characteristic is that it stays invisible."** Greece also has **16.8 % of
apiaries above 150 colonies against an EU mean of 2.9 %**, i.e. the structural feature associated
with outbreaks elsewhere. Conclusion: "We would rather have a treatment ready before Greece needs
one."
**And the spillover claim is deliberately not overstated.** *M. plutonius* has been detected in nine
wild bee species across three families in the US and in stingless bees in Brazil, more widely
distributed than the American foulbrood agent — but **"Detection is not the same as harm… No fitness
effect on any wild pollinator has yet been demonstrated. That absence is the point rather than a gap
in it."** A UK screen of commercial *Bombus terrestris* did **not** find it, and they publish that too.

## DRY LAB — the screen, and three models
**Genome mining instead of design, with the reason:** *M. plutonius* is difficult to culture, so
they started computationally "rather than designing one from scratch", mining enzymes that had
already evolved against it — which **sidesteps the exact bottleneck that left the organism
understudied**.
**The funnel is published with the criterion applied at each stage:**
| Stage | Remaining | Criterion |
|---|---|---|
| genomes screened | **165** | — |
| lytic enzyme genes in prophage regions | **646** | — |
| confidence and enzyme class | **169** | E-value of zero, and a class that acts freely on the wall |
| domain definition | **115** | clearly defined catalytic + cell-wall-binding domains |
| application fit | **2** | predicted pH optimum, thermostability, solubility |
They even name which step did the work: 646 → 169, because requiring an E-value of zero removes
chance matches **and excluding tail- and virion-associated lysins removes enzymes that only work
inside an assembled phage particle** — the wrong starting point for something expressed
recombinantly and applied externally. Thermostability mattered for a stated reason: "a therapeutic
protein has to stay folded and active inside a hive through a Greek summer."

**Two candidates, and the pair is an experiment.** **EndoLys** (WP_263612458, 433 aa, 22-aa signal
peptide removed, GH25_Cpl1-like + **two LysM** modules, BBa_26WG5LPE) and **Mur** (WP_263615132.1,
326 aa, GH25 + **ZoocinA target-recognition domain**, BBa_26XBER6P), both from CC13 prophage
regions. The design logic: **the catalytic chemistry is held constant (both GH25) and only the
targeting module varies**, so any difference in activity is attributable to targeting rather than
chemistry — "A broad binder paired against a narrow one is also the more informative test of a
specificity claim: if selectivity for *M. plutonius* matters, the two should not behave alike."
Annotation discipline: domain calls given with **InterPro accessions**, "meaning the match passed
curation rather than only clearing a member database's raw cutoff"; the **102-residue unassigned
stretch** in EndoLys is left unannotated rather than guessed; AlphaFold models compared to known
lysins with **FoldSeek**, with the reasoning that structural match is stronger evidence than
sequence identity. Then an **independent corroboration** from a different tool and database:
pLannotate recovered the same two-module architecture (CPL1 55.3 %, sle1 54.2 %) in the same
places — and a neat internal consistency check, **every pLannotate hit on the RR12 fusions sat
exactly 54 nt downstream of its position on the bare construct, matching RR12 plus spacer.** The
remaining pLannotate suggestions (Gam, TrxA) were 15–16 bp matches and **rejected as noise**.

**In silico optimisation — freeze what matters, then optimise hard.** The GH25 muramidase evolved
for intracellular lysis and expresses poorly (Protein-Sol **0.411 against a 0.45 threshold, with
inclusion bodies confirmed at the bench**). Strategy: a **40-position freeze list enforced as a hard
constraint, each position backed by at least two of three independent sources** (structural role,
ESM-2 evolutionary constraint, literature) — and then **an all-atom MD run to confirm those residues
really are rigid (RMSF < 2 Å) with a stable active site, "turning the list from a heuristic into a
tested claim."** Solubility and thermostability (ΔΔG) were optimised **simultaneously because they
conflict biophysically, solving for the Pareto front instead of a single answer.** Cascade:
ThermoMPNN point-mutation scan → **ESM-2 log-likelihood filter at −2.0, added as a correction after
an unconstrained run produced buried substitutions that scored well but would never fold** →
NSGA-II (pymoo) over the 17 surviving mutations → **ColabFold refold as a final structural gate that
also catches epistasis.** Output: three variants (A, B, C) sharing a **Y221K + S300R** consensus
core, plus **four falsifiable predictions P1–P4**, with **P4 flagging retained selectivity as the
main untested exposure because binding was never an optimisation objective.**
Limitations written as limitations: both objectives are model outputs so the front is optimal
"with respect to our predictors rather than with respect to reality"; **no wild-type melting
temperature exists because "a protein that will not express solubly cannot be melted"**, so every
stability figure is relative to an unmeasured baseline; one MD trajectory cannot exclude slower
transitions; and **the optimised properties are proxies** — proteolytic resistance, pH tolerance
across the gut range and functional half-life in situ were not modelled, "so a variant could improve
on both objectives and still be unsuitable for delivery." Status: refolding submitted, pass/fail
**pending**.
The MD also did double duty: the catalytic domain held **1.05 ± 0.12 Å internally while global
backbone RMSD rose above 7 Å**, the hinge term was **13.5×** larger, and two active-site distances
drifted under 0.4 Å — independent structural support for the two-module architecture asserted from
sequence.

**Pharmacokinetic model of the larval midgut.** Single-compartment deterministic ODE, built around
the biology rather than borrowed: the midgut is **a sealed, expanding lumen that voids only once at
pupation**, so there is no convective outflow and the pathogen is tracked as an **absolute cell
number rather than a concentration, "which keeps gut expansion from being mistaken for killing."**
Nurse bees feed **~4,300 times a day**, so dosing is modelled as a continuous drip with no
peak-to-trough swing. The kill law is fitted to their own in vitro data as a saturating Emax:
**φmax ≈ 0.006125 min⁻¹, KE ≈ 0.633 µg/mL, R² = 0.935.**
A pH-plate experiment **separated two effects that would otherwise be confounded**: fresh kill rate
is essentially flat across the lumen band (pH 5.5–7.5), while **stability is strongly pH-dependent**
(t½ ≈ 140–280 h at pH 5.5–6.7; **≈ 7 h at pH 4**; ≈ 12 h at pH 7.5). Consequence: the enzyme is
**~30× more stable in the lumen than assumed, so dilution rather than degradation dominates loss,
and the required food concentration falls ~31×.**
And the result that reframes the project: because killing saturates, **φmax/r ≈ 1.53 is a ceiling no
dose can raise**, and if *M. plutonius* grows faster than ~0.0061 min⁻¹ in vivo **no dose clears the
infection**. Complete sterilisation in 48 h works only up to **~283 cells under the 23 µg/mL
larva-safe cap** (~455 cells with unlimited enzyme — "a saturation limit, not a dose limit"), and a
**300-cell inoculum already needs 26.2 µg/mL, just above the safe cap.** Then they change the
criterion rather than the number: under a **recovery** criterion (pathogen below a lethal load and
falling) the handleable inoculum rises **four to five orders of magnitude to ~10⁷**, because a
saturating dose strips **99.65 % every 48 h**. Flagged as the single most consequential refinement:
resolving φmax by replicated high-concentration measurements.

**Scale-up.** A medium-scale plant modelled as a flowsheet, each bench operation a discrete unit
operation, upstream (seed train: baffled shake flask → seed bioreactor where oxygen transfer becomes
limiting → production fermenter at high cell density) and downstream. Result: **105 L working
volume, 51.62 g/L biomass, 2.55 g product per batch.**

## WET LAB
**Four constructs, two of them a hypothesis under test.** EndoLys and Mur bare, plus each fused to
the antimicrobial peptide **RR12** as a "molecular hook" to accelerate membrane attachment — with
the cost declared in advance: **"we note openly that antimicrobial peptides carry a broader spectrum
than endolysins do, which introduces a specificity cost we test for rather than assume away."**
All four expressed in *E. coli* BL21(DE3), Ni-NTA purified **with endotoxin removal**.
- Expression: unfused constructs reached **OD₆₀₀ 5.4 and 5.5 at ~21 h**; fusions arrested early and
  were harvested at **1.3 and 1.55 at 9–10 h**. Yields per litre: **EndoLys 3.27 > Mur 1.60 >
  RR12-Mur 0.95 > RR12-EndoLys 0.46 mg/L.**
- **A medium comparison reported as weaker than it looks.** Terrific Broth tripled RR12-Mur recovery
  (0.11 mg at 4 h → 0.33 mg per 180 mL at 8 h, i.e. 1.83 mg/L vs 0.95 in LB) and was still rising —
  and then: "Note that this medium comparison was run on RR12-Mur rather than on the lead construct,
  once per medium and at different scales (1 L in LB, 180 mL in TB), **so it indicates a direction
  rather than a settled result.**"
- **Solubility rescue:** 0.75 M trehalose in the lysis buffer gave sharp symmetrical A280 peaks and
  raised recovery **3.27 → 9.26 mg/L for EndoLys**, 1.60 → 2.27 for Mur, and little for the fusions.
- Activity: EndoLys cut *M. plutonius* (LMG 20360) OD₆₀₀ by **28.3 ± 0.5 % at 1 µg/mL rising to
  38.9 ± 0.3 % at 100 µg/mL over 70 min, against 5.1 % control drift**, beating all three other
  constructs at every concentration.
- **Why a non-pathogenic strain, stated as a containment decision, not a limitation to be hidden:**
  efficacy was run against a non-pathogenic strain "so the mechanism could be validated without
  culturing a brood pathogen in a university laboratory"; the cell wall is shared across clonal
  complexes so binding is expected to hold; **"Repeating the assay against a virulent strain, under
  proper containment, is the next experiment rather than a refinement of this one."**
- **The off-target panel is small on purpose, and it is the hard version.** *Lactobacillus apis* and
  *Bombilactobacillus mellis* — both **Lactobacillales, the same order as the pathogen, both
  Gram-positive**, i.e. the bee-gut organisms most likely to share enough wall structure to be hit.
  "A negative result against Gram-negative symbionts would say less, since their outer membrane
  blocks access regardless of specificity. **Testing the near relatives first is the harder test,
  not the easier one.**" Panel settled after a conversation with Dr. Kollia.
- **Stability:** EndoLys retained **>74 % of lytic activity after 48 h at pH 5.5 and 6.7**, the
  larval midgut range, and decayed fast at pH 4.0 (k_deg 0.0930 h⁻¹) and more slowly at 7.5 (0.0555).

## Delivery, and the conservation constraint taken seriously
A powder mixed into standard commercial feed, eaten by adult workers and passed to the brood by
**trophallaxis**, so "the colony's own food-sharing performs the delivery and nothing about
beekeeping practice has to change." The protein must survive storage, dilution into high-osmolarity
syrup and the adult crop, and arrive in the midgut folded.
- **Adoption friction treated as an efficacy variable:** "a treatment only well-resourced operations
  can run does not protect pollinators at landscape scale."
- Target chosen partly because the **larval gut is a low-density microbial environment**, so the
  enzyme lands where there is least to disrupt — but adults handle the feed, so screening against
  the richer adult community is named as still necessary.
- **Non-target exposure addressed as a contradiction in their own aim:** feeding stations are reached
  by foragers from other colonies and by wild bees and wasps, and "an intervention that helped hives
  while exposing wild pollinators to an untested enzyme would defeat its own purpose" — hence
  access-restricting station design and extending specificity testing to other pollinators' gut flora.
- **"Encapsulation: explored, not adopted."** A liposomal formulation was designed and **none was
  produced**; it is explicitly not part of the product, and what they cost and model is the purified
  enzyme in plain feed.
- **Why a protein and not a living therapeutic**, argued from the openness of a hive: foragers range
  kilometres and the product ends up in wax, comb and landscape, so a self-replicating release is
  hard to justify — the product cannot replicate, colonise or transfer genes, and the engineering
  stays in the contained production strain.

## The two predictions that failed, reported first
They lead the conclusions with the failures, "because they are the places where the project learned
most":
1. **The solubility prediction was wrong.** DeepSoluE called both candidates soluble; in practice
   **the great majority of all four proteins went to inclusion bodies under both induction regimes
   tested (37 °C/4 h and 23 °C/16–18 h)**, the soluble fraction needing concentration before it was
   even visible on a gel. "A sequence-based solubility prediction, at least for this enzyme class in
   this host, did not forecast the behaviour we observed" — and the trehalose intervention exists
   because of it.
2. **The fusion hypothesis failed.** RR12 fusions produced less protein (**~7× less for
   RR12-EndoLys**), arrested growth earlier, and delivered no resolvable killing advantage. "The
   design hypothesis was clearly stated in advance and clearly refuted, and the project's lead
   construct is consequently the simplest one we made."
3. And a third disagreement they chose to publish: **the model favoured the other candidate on
   predicted thermostability, and the bench chose EndoLys.** "We report both because the disagreement
   is the engineering cycle working rather than failing: the prediction narrowed hundreds of
   candidates to two, and the bench decided between them."

## The interpretation section, which is the most self-critical writing in either Top 10
- **Saturation reconciles results they had treated as separate problems.** With KE = 0.633 µg/mL,
  1 µg/mL already delivers 61 % of attainable rate, 5 µg/mL 89 %, 50 µg/mL 99 % — **90 % of
  everything the enzyme can do is present at 5.7 µg/mL.** That explains both why crude lysate matched
  purified EndoLys (two points on a flat curve) and why k_kill looked flat across 5–100 µg/mL in the
  pH experiment (its lowest dose was already at 89 %). **"Neither result needed a separate
  explanation."** Useful operating window: **~1.2 to 6 µg/mL**, with the 23 µg/mL safe cap fourfold
  above it.
- **They then turn the finding against their own season's work:** "A substantial part of the wet-lab
  season was spent raising yield — trehalose supplementation, the move to Terrific Broth, and the
  three-vessel bioreactor scale-up. **The kill law indicates that yield was not the binding
  constraint on efficacy.**" The levers that remain are a more catalytically active variant, a slower
  pathogen, or a smaller inoculum — and since the clearable inoculum is ~283 cells, **"early
  detection is worth more to the project than additional protein."**
- **They discredit their own headline metric.** OD₆₀₀ cannot reach zero under complete lysis (wall
  fragments scatter; *M. plutonius* grows in chains whose interior cells are shielded), so
  "our percentage reductions are therefore lower bounds on killing rather than estimates of it" —
  demonstrated by a recovery assay where a **1.5-fold turbidity difference (30.7 % vs 47.0 %)
  separated a subculture that recovered from one that did not.** Hence: "A proxy that compresses a
  qualitative difference into a 1.5-fold change is not one we should be quoting to three significant
  figures as though it were a kill percentage", and CFU enumeration is first on the list.
- **They retract their own specificity argument.** Pre-planned equivalence testing against a
  **± 5 percentage-point margin** confirmed no substantial effect (every mean difference between
  −3.4 and +4.4 points for commensals, against 20–34 points for the pathogen), **22 of 46 conditions
  formally equivalent and most of the rest inconclusive on three replicates rather than indicative
  of harm.** But a regression over all **60 purified-enzyme measurements per species** found a small
  consistent dose-dependence — **+2.15 percentage points per 10-fold increase in *B. mellis*, +1.19
  in *L. apis*, surviving six robustness checks, all eight construct-specific slopes positive.**
  Then: **"We had previously argued that the absence of a dose-response was evidence of no off-target
  activity. That argument does not survive our own analysis."** The corrected claim: the constructs
  **do** act on commensals, weakly and in proportion to dose, **three to thirty-eight times less
  strongly than on the pathogen** — "a narrower claim than the one we started with and a more useful
  one, because a graded effect points at a mechanism — a diffusion barrier rather than a recognition
  threshold — where a clean absence would have pointed at nothing."

## Transferability
"Nothing about this pipeline is specific to *M. plutonius*. Any Gram-positive pathogen with sequenced
genomes can be mined the same way, and the case is strongest exactly where we found ourselves: with
an organism that resists culture and is therefore poorly studied" — with parameters, thresholds and
tooling documented so another team can retarget it. Scripts on GitHub.

## What we would copy
1. **Pick the problem nobody is advocating for, and say why nobody is.** The three compounding
   reasons EFB was passed over are the project's justification.
2. **Read your own null result against your method.** EPILOBEE found no clinical cases in Greece;
   EPILOBEE measures clinical prevalence; the pathogen is asymptomatic.
3. **Hold the mechanism constant and vary only the thing you are claiming about.** Same GH25
   catalytic domain, different targeting module — so a difference means targeting.
4. **Pick the off-target panel that could hurt you.** Same order, same Gram stain: the harder test.
5. **Declare the specificity cost of a design choice before testing it**, then test it.
6. **Freeze on evidence, then verify the freeze list.** Two of three independent sources per
   position, and an MD run to check the residues are actually rigid.
7. **Add the filter that fixes the failure mode you saw.** The ESM-2 −2.0 cut-off exists because an
   unconstrained run produced buried substitutions that would never fold.
8. **Solve for the Pareto front when two objectives genuinely conflict**, instead of weighting them
   into one score.
9. **Say what your optimisation did not optimise.** Binding was never an objective, so selectivity
   is flagged as the untested exposure.
10. **Build the compartment the biology actually has.** A sealed expanding lumen tracked in absolute
    cell numbers, so gut growth is not mistaken for killing.
11. **Separate rate from stability in a pH experiment** — the finding that moved the required dose
    31-fold.
12. **When the target is unreachable, change the criterion and say you did.** Sterilisation caps at
    283 cells; recovery handles 10⁷.
13. **Let the model tell you your own season was spent on the wrong lever**, and print that sentence.
14. **Distrust your proxy out loud.** A 1.5-fold turbidity gap separating recovery from death is the
    argument for CFU counts.
15. **Retract your own argument when a better analysis kills it**, and prefer the narrower claim
    because it points at a mechanism.
