# UZurich — SeisMIC (Conservation, Switzerland) — Overgrad Top 10 2026
Title: SeisMIC — can microbially induced calcite precipitation stabilise shallow alpine soils?
Wiki: https://2026.igem.wiki/uzurich
Also: Best Conservation Project nominee (Undergrad & Overgrad combined), Gold.
Static HTML built with Jinja templates; the wiki ships a dedicated **AI Use** page split by
sub-team.

## Core idea
Heavy rainfall destabilises shallow alpine soils; slope failure threatens settlements,
infrastructure and a rare alpine biodiversity. **MICP** — microbially induced calcite precipitation —
uses urease-producing *Sporosarcina pasteurii* to hydrolyse urea into ammonium and carbonate, which
with calcium forms calcite bridges between soil grains, raising cohesion.

**The framing is the project's defining feature, and it is a negative one.** From the first page:
"Rather than assuming that MICP is ready for real-world deployment, we aim to understand where it
might be useful, what would be required for it to work under alpine conditions, and what questions
must be addressed before it could be considered." Every section then holds that line.

**Scope narrowed by a physical argument, not by convenience.** They began thinking about the
landslides that made the news — Brienz, Bondo, Blatten, Schwanden — then reasoned that **MICP relies
on infiltration and can only treat soil the solution reaches**, so it cannot be assumed to stabilise
deep-seated bedrock failures. So the target became **shallow landslides**, defined in Swiss practice
as a sliding surface no more than 2 m down, and backed with a field statistic: **90 % of recorded
Swiss shallow landslides failed at 1 m depth or less.** Lineage acknowledged: the idea came via
**AshesiGhana 2020**, which used the same urease pathway for coastal erosion.

**Three engineering targets, each derived from a condition rather than a wish:**
1. **Cold.** *S. pasteurii* is characterised well above alpine soil temperatures, and alpine soils
   are also nutrient-poor and mildly acidic.
2. **Controlling where precipitation happens.** The recurring MICP failure is calcite forming fast
   at the injection point and clogging the flow path before the solution spreads — one field trial
   reported **chemical efficiency of about 5 %** from preferential flow. So the goal became *when*
   precipitation starts, not how much calcite forms.
3. **Pathway choice with its cost stated.** Ureolytic MICP produces ammonium. They evaluated EICP
   and the carbonic anhydrase route, then **kept urease anyway** with the reason given — it is better
   characterised and field-proven for shear strength, and changing both the pathway and its
   regulation at once would have split their effort — followed by the sentence that matters: **"the
   nitrogen load remains a constraint we need to address, not a problem we have solved."**

## WET LAB
**Two hosts, for a stated reason.** *S. pasteurii* is the relevant organism but its genetic tools
are less established, so *E. coli* was used to iterate quickly while constructs were moved into
*S. pasteurii* from early on. **Replicating plasmids rather than genomic integration, chosen
explicitly to buy more DBTL cycles.** And the results page opens by qualifying itself: results came
from *E. coli*, which is neither a soil organism nor a strong MICP producer, with wild-type
*S. pasteurii* as the control, "and these differences should be considered when interpreting."

**Assay development as a first-class problem.** Because *S. pasteurii* already makes urease
natively, the measurements had to separate the engineered effect from the native one — so building
assays became part of the project rather than a preliminary.
- *Conductivity* as a screening tool: nine aTc concentrations from 0.3 to 160 ng/mL over 100
  intervals in an hour, repeated; reported as **relative conductivity change (%)** because absolute
  values were not comparable. Three concentrations (0.3 / 20 / 50 ng/mL) carried forward.
  For the dual-operon construct p2Cuzh03E, four aTc × four IPTG concentrations — aTc driving the main
  urease operon, IPTG the accessory proteins — as **a proof of concept for the combined induction
  system**. The strongest response came at **100 ng/mL aTc with no IPTG**, read as higher main-operon
  induction reducing the need for accessory protein. And then the limit: "conductivity changes alone
  cannot exactly determine the enzyme activity, as background effects and differences in starting
  biomass may influence the results."
- *The "Big Assay"* (growth + pH over ~57.5 h), three runs: p2Auzh01E (urease), p2Cuzh03E (urease),
  then p2Iuzh07E / p2Juzh08E (carbonic anhydrase). **Statistics done properly and reported with
  their weaknesses:** mean pH increase went **−0.84 (no inducer) → +0.98 (low) → +1.32 (mid) →
  +1.48 (high)**, with the *S. pasteurii* control at **+1.03**; Spearman **ρ = 0.72, p = 0.001,
  n = 18**; Kruskal–Wallis **H = 10.18, p = 0.017**; and then — **"pairwise comparisons of each group
  against zero did not reach significance after Holm correction (adjusted p = 0.143 for all). This
  reflects the small sample size and not a lack of effect."** The zero-inducer cultures slightly
  *acidified*, which is what metabolism without ammonia production should do — the negative control
  behaving as predicted rather than merely flat.
- **Exclusion declared with a sensitivity analysis.** Vials 19 and 20 (zero inducer) were excluded
  for contamination because both rose more than 1.4 pH units without induction; including them
  **still gives a significant trend but a weaker one (ρ = 0.48, p = 0.032, n = 20)**, and both
  numbers are published.

**Crystals: a long chain of instruments, and the control that broke the claim.**
Synchrotron **PXRD** on two batches, with the batches' differences tabulated (2 vs 3 days
incubation; oven 220 °C overnight vs Steris irradiation; 0.48452 Å ≈ 25.6 keV vs 0.56334 Å ≈ 22.0
keV) and the consequence stated: higher-energy X-rays interact less, so **absolute intensities cannot
be compared between batches** — the angle shift was handled by converting to the scattering vector Q.
Phases matched against the ICDD database, fractions assigned by a beamline expert and reported **as
fractions of crystalline content only, with amorphous material excluded from the percentages.**
- *S. pasteurii* precipitated crystalline CaCO₃ in both batches: batch 1 ~**98 % vaterite / 2 %
  calcite**, batch 2 **20–39 % calcite**, remainder vaterite. They refuse to explain the shift:
  batch 2 differed in *both* incubation time and sterilisation method, "it is not possible to tell
  which factor, or combination of factors, caused the shift", and the fix is named (test each
  condition separately).
- Contamination diagnosed rather than ignored: an *E. coli* no-inducer sample showing vaterite is
  attributed to cross-contamination while loading holders; **samples loaded last were amorphous**;
  weak NaCl/KCl signals traced most plausibly to the sterilisation vials; **four samples held a
  crystalline phase matching nothing in the catalogue**, and in batch 2 an unidentified phase with a
  unit cell large enough to be "probably a protein crystal". Recommendation to themselves: prepare
  samples in a crystalline-contaminant-free environment so remaining reflections can be attributed.
- **The soil experiment's negative control is the project's hardest result:** in soil, the
  **CaCl₂-treated soil *without bacteria* showed vaterite and calcite comparable to the treated
  columns — i.e. abiotic precipitation**, which means the soil columns cannot demonstrate biological
  cementation. Published in the conclusion, in one sentence, unhedged. And beside it: "the calcium
  depletion, XRF, gravimetry and stability measurements failed for identified reasons."
- Instruments attempted and reported: PXRD, calcium depletion, stability measurements, microCT,
  XAS, XRF, SEM, carbon mass gravimetry — a measurement section that is mostly a record of which
  methods did not yield usable data.

**Directed evolution — the clearest positive result, and the control that makes it one.**
Two populations evolved in parallel: **G1** under decreasing temperature (adapted to 17 °C) and
**G2 at a constant 30 °C as a media-adaptation control** — so "grew better in the cold" can be
separated from "got better at growing in this medium". Five strongest strains per group plus
wild type plus a medium blank. Final curves at 30 °C and **18 °C, because the plate reader's cooling
add-on could not go below 18 °C** even though adaptation was at 17 °C.
- At 30 °C: all three groups plateau around OD 1.5–1.6; median lag **G1 2.2 h, G2 3.45 h, WT 1.8 h**;
  µmax **0.830 / 0.825 / 0.807 h⁻¹** — "evolution did not produce a substantial increase in maximum
  growth rate", and notably **G2 was *worse* than WT at the temperature it was evolved at**, which
  they flag as unexpected rather than skipping.
- At 18 °C: median lag **G1 ≈ 3.9 h, WT ≈ 5.1 h, G2 ≈ 11.5 h**; µmax **0.336 / 0.338 / 0.341 h⁻¹**,
  effectively identical. The conclusion is therefore mechanistically precise: **cold adaptation
  shortened the time to *initiate* growth, not the rate of division**, and the G2 comparison is what
  lets them attribute it to the cold regime rather than to repeated passaging.
- **The trade-off check:** an evolved strain is useless if it stopped precipitating, so WT, G1 and G2
  were each given CaCl₂ and all three precipitated — MICP function retained. Qualitative, and
  labelled qualitative.
- **Whole-genome sequencing is announced, not claimed:** four replicates per group plus WT, with the
  comparison logic laid out in advance (G2 vs WT isolates cultivation effects; G1 vs both isolates
  cold effects), and the honest scheduling note — **"These data will be collected after the
  WikiFreeze and presented in time for the Jamboree."**

## DRY LAB — four models staged as a pipeline from risk to cost
1. **Slope Stability.** Infinite-slope Factor of Safety from rainfall, soil properties and terrain,
   **including root reinforcement**, over Switzerland with historical rainfall and landslide data.
   Its output is a requirement handed to the wet lab: **the additional cohesion the bacteria would
   have to supply** to return an unstable slope to stability.
2. **Reactive Transport.** A published Michaelis–Menten-based model adapted to predict calcite
   precipitation in mol/L along a **0.5 m vertical soil column**, with temperature, concentrations
   and soil conditions as user inputs, intended as a pre-deployment check. Caveat stated where it
   matters: it is built on **laboratory column conditions**, so applying it to whole slopes needs
   further validation. The simulations' message is the same as the engineering target — soil
   chemistry and **even distribution of bacteria** dominate.
3. **MICP Feasibility.** Public soil and terrain data classified on stone content, water storage
   capacity, permeability and slope to map where MICP is technically feasible nationwide, then
   **overlaid with the instability map** so the shortlist is areas that are both unstable *and*
   treatable "under our assumptions".
4. **Economic.** Built because Human Practices asked what shallow landslides cost and **no published
   figure isolating their damage costs could be found**. Modelled runout areas against roads,
   buildings, railways, forest and agricultural land, giving an **expected annual damage (EAD)** from
   historical records, across **four scenarios: bare soil, root cohesion, MICP, and roots + MICP.**
- Integration reported as partial: the dashboard prototype joins **slope stability and feasibility
  only; the other models remain separate and monitoring is still a future goal.**

## HUMAN PRACTICES — where it changed the claim, not the packaging
Conversations with researchers, specialists, industry and insurers shaped engineering targets,
measurement strategy and modelling. Residents below alpine slopes emphasised the surrounding nature,
which is why **nitrogen depletion and the ammonium load were investigated more closely**. And the
finding that reframes the whole project: **two local families challenged the assumption that
residents would welcome the intervention** — the consequences of a landslide go beyond damaged
buildings, **relocation may sometimes be the better option, and any intervention must respect the
wishes of the people who live with it.** The wiki states the resulting communication rule: explain
how it works, what it might offer and **what remains uncertain, including the environmental
trade-offs** — "Human Practices did not give us a simple answer about whether MICP should be used."
"Protect, refuse or relocate: the choice belongs to residents."

## AI USE — disclosed per sub-team, with the failure modes named
A dedicated page, opening "AI is a tool. The choice about how it gets deployed and used is ours."
- *Wet lab:* Claude and ChatGPT (GPT-6 Astra for complex reasoning, smaller models for routine
  work) for data interpretation and analysis, code, literature review, language, **and protocol
  development and experimental planning**. Review paragraph is the strong part: outputs checked
  against literature and, where applicable, bioinformatics and experimental evidence, with the
  epistemics spelled out — **"Comparisons between AI Models can help identify disagreements,
  although agreement alone does not establish that a prediction is correct"** — and the rule that
  AI suggestions were "inputs to scientific evaluation rather than experimental evidence".
  Reliability flagged as lower when data are limited or a tool is used outside its validation domain.
- *Dry lab:* Claude Pro (Opus 5.5) for code, debugging, documentation, code review and bug finding,
  plus conceptual visuals. Verification: logic checked, **"we independently verified that the results
  matched our exact equations"**, and a candid criticism of the tool — **"the outputs were overly
  over-complicated and added unnecessary boiler code"**, so unnecessary complexity was removed.
- *Human practices:* ChatGPT for writing, translation into English and structure; NotebookLM for
  literature; Gemini for illustrations.
- Generated figures are captioned as generated, e.g. the MICP treatment illustrations "Generated
  with OpenAI ChatGPT image generation, based on the scientific concepts and visual direction
  provided by the UZurich iGEM 2026 team."

## What failed, in their own words
- **Engineered *E. coli* did not reliably precipitate crystalline calcium carbonate**; only
  *S. pasteurii* did.
- **In soil, bacteria-free CaCl₂ controls precipitated as much as the treated columns** — abiotic
  precipitation, so the soil work cannot show biological cementation.
- Calcium depletion, XRF, gravimetry and stability measurements all failed, "for identified reasons".
- p2Cuzh03E showed no induction dependence, consistent with leaky expression or a plateaued pH.
- The Wilbur–Anderson assay gave **too few usable data points to quantify carbonic anhydrase**.
- Functional validation in *S. pasteurii* remained incomplete.
- Pairwise significance lost after Holm correction; attributed to n, not to absence of effect.
- Two vials excluded for contamination, with the including-them analysis published.
- Unidentified crystalline phases in both PXRD batches.
- Whole-genome sequencing not done before WikiFreeze.
- Only two of four models are joined in the dashboard; monitoring does not exist.
- The ammonium load is unresolved; a kill-switch for outdoor use does not exist.

## What we would copy
1. **Let a physical limit set the scope.** MICP needs infiltration → shallow failures only → and a
   field statistic (90 % at ≤1 m) to show the restricted target is still the common case.
2. **Evolve a second population as the control.** G2 at constant 30 °C is why "cold-adapted" means
   something instead of "passaged".
3. **Check the trade-off the improvement might cost.** An evolved strain that no longer precipitates
   would have been worthless, so they tested it.
4. **Read the mechanism out of which parameter moved.** Lag phase changed, µmax did not — so the
   claim is "starts sooner", not "grows faster".
5. **Publish the abiotic control that kills your own soil result.**
6. **Declare exclusions and show the analysis with them included.**
7. **Tabulate what differed between batches, then refuse to explain a difference you confounded.**
8. **Report fractions on the basis you measured.** Crystalline-only phase fractions, amorphous
   excluded, said out loud.
9. **Keep the constraint in the sentence.** "The nitrogen load remains a constraint we need to
   address, not a problem we have solved."
10. **Let human practices reach the conclusion, not the framing.** "Protect, refuse or relocate" is
    a finding against the project's own premise.
11. **Disclose AI use per sub-team with its failure modes** — including that model agreement is not
    evidence, and that the generated code was too complicated and had to be cut back.
