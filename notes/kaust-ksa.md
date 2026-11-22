# KAUST-KSA — SHIHAB (Space, Saudi Arabia) — Overgrad Top 10 2026
Title: SHIHAB — on-demand biologics production for long-duration spaceflight
Wiki: https://2026.igem.wiki/kaust-ksa
Also: Best Space Project (all sections) winner, Gold.
Content lives as plain Markdown in `src/content/en/` with a parallel Arabic locale — the wiki is
built bilingual at the source level.

## Core idea
Beyond the ISS, resupply stops being a plan: replacement medication may take months or never
arrive, storage mass competes with everything else, and no manifest can anticipate every illness.
SHIHAB proposes **carrying the production strain instead of the finished drug** — a library of
freeze-dried microbes or spores, a shared compact bioreactor, and automated purification, so the
crew selects a payload and makes it on site. Five proposed stages: Preserve → Select → Grow →
Produce → Purify. Six declared contributions across wet lab, dry lab and hardware.

**The thing this wiki does that almost no other does: it labels the scope of its own claims
inline.** Not in a limitations section at the bottom, but in the sentence that makes the claim:
"Genetic integration and radiation-testing activities should be distinguished from a demonstrated
increase in resistance"; "Selection for the library does not imply that every payload has been
experimentally produced or purified"; "These analyses evaluate modeled capabilities rather than
experimentally proving production performance in space"; the production workflow carries a
**"Proposed"** badge; and the AI-generated card illustrations are captioned "Generated with GPT-6".

## WET LAB
**Three chassis, chosen and then re-chosen.** *Bacillus subtilis*, *Saccharomyces cerevisiae*,
*Pichia pastoris* — 13 engineered strains in all. Preservation by lyophilisation or sporulation
"where biologically appropriate".

**Radiation resistance via Dsup**, the tardigrade damage-suppressor protein.
- **Genomic integration, not a plasmid, on purpose.** Their stated reason: earlier studies mostly
  used episomal systems where high plasmid copy number inflates expression, so the question they
  wanted to answer was whether **a single integrated copy** gives measurable protection. It did, in
  *B. subtilis* and *P. pastoris*.
- WT Dsup integrated and expressed in all three chassis, confirmed by **Western blot of the
  myc-tagged version** — the tag exists so that "integrated" can be distinguished from "expressed".
- An **improved Dsup variant with enhanced nuclear localisation** was built and compared head to head
  against WT in *P. pastoris*, and gave greater protection.
- **Order of operations, written down:** rather than going straight to engineered-vs-wild-type, they
  ran extensive preliminary experiments on **wild type alone** first, to establish the irradiation
  conditions, find the informative doses and optimise the readouts. The comparison only happened
  once the assay had a working range.
- **Three complementary readouts, not one:** spot dilution assays (survival/growth, resolving up to
  **four orders of magnitude** between conditions), resazurin reduction (metabolic activity), and
  OD₆₀₀ time courses (post-irradiation growth dynamics). Two radiation types with different damage
  mechanisms: X-ray (ionising) and UV-C (photochemical).
- Numbers: Dsup *B. subtilis* retains **one to two orders of magnitude more colony-forming cells
  than wild type at 12 mJ/m² UV-C, consistent across three technical replicates**; Dsup
  *B. subtilis* **holds its OD after X-ray doses above 1000 Gy** where wild type falls below its
  starting density; Dsup *P. pastoris* **grows across all six serial dilutions up to 24 mJ/m² UV-C**
  where the control does not. X-ray dose response characterised **to 2000 Gy in all three chassis**,
  which both sets each organism's working dose range and **ranks their relative radioresistance**.
- Assay development treated as a result in itself: the resazurin assay needed a defined **working
  cell density and reading window** before it could separate irradiated from unirradiated cultures,
  and that gets its own results section.

**Payload library and production.** Therapeutic nanobodies **anti-PD-L1** and **Nb1_gbHSV**;
antifreeze proteins **FfIBP** (*Flavobacterium frigoris*, Antarctic) and **LeIBP** (*Leucosporidium*
sp. AY30, Arctic); GFP and mCherry as expression reporters.
- Four payloads expressed and purified from *P. pastoris* (methanol induction, ÄKTA HisTrap).
- FfIBP also secreted and purified from *B. subtilis* (IPTG induction, same ÄKTA route).
- **Secretion efficiency measured rather than assumed**: intracellular vs extracellular protein
  compared for the α-factor-signalled antifreeze protein.
- Induction optimised separately per chassis: IPTG series for GFP in *B. subtilis* 168; methanol
  conditions for mCherry in *P. pastoris*.
- **The control question a platform has to answer:** does carrying Dsup cost you yield? They
  compared FfIBP production and purification in WT vs Dsup *B. subtilis* and found comparable
  recovery — so **constitutive Dsup under a constitutive promoter does not significantly reduce
  payload production** under their conditions. Radiation protection without giving up the day job.
- **Sporulation closed the loop**: engineered *B. subtilis* was sporulated and then GFP was produced
  from the spore-derived culture — the "Preserve" stage demonstrated rather than asserted.
- Functional test of a payload: **freeze–thaw survival assay using purified FfIBP**.

## DRY LAB — constraint-based metabolic modelling that changed the project
Genome-scale models (*S. cerevisiae*, *P. pastoris*, *B. subtilis*, and *Synechococcus elongatus*
PCC 7942 as a sucrose-exporting partner) plus dynamic batch models of induction timing, plus COMSOL
CFD for the reactor.
- **The chassis decision was reversed by the model.** They started expecting yeast, the default for
  a secreted eukaryotic-style product. Anaerobically, *B. subtilis* keeps about **54 % of its
  nanobody flux where yeast keeps 18 %** — roughly 3.4× more — while growth falls 57 % against 74 %.
  **With oxygen the two are within ~10 %.** So the conclusion is conditional and they say so: "the
  whole chassis argument stands or falls on how much aeration a habitat can afford", and the
  advantage depends on nitrate being supplied for respiration.
- **The feedstock decision was checked before it was committed to.** Sucrose from a growth-capped
  cyanobacterial partner rather than glucose: per carbon atom the switch costs *B. subtilis* nothing
  anaerobically, "which is what made the co-culture defensible rather than merely necessary."
- **The aeration question was reframed.** Not "aerobic or anaerobic" but *how much growth is worth
  supplying oxygen for* — growth rises roughly in proportion to oxygen supply in both hosts;
  *B. subtilis* grows without oxygen and faster with nitrate; yeast only if sterols are supplied.
  That is a reactor requirement, not a modelling result.
- **A model output that says where NOT to spend effort.** Competing-pathway knockouts in the
  cyanobacterial supplier: the models say they do nothing, "and which we now understand FBA cannot
  evaluate" — the negative result and the reason the method cannot be trusted on it, together.
- **The dry lab writes the wet lab's to-do list, including where the models disagree.** Build the
  nanobody in both hosts and measure titre *and folding quality*, "because FBA measures capacity and
  not quality"; run the co-culture at the capped operating point and measure sucrose *and* dissolved
  oxygen; measure the induction window, because both dynamic models say the optimum is early with an
  asymmetric penalty for missing it **and the two models disagree about how early, "which is itself
  a result to settle experimentally"**; and confirm that the two gap-filling reactions they added
  correspond to activity the strain actually has.
- **Their main dry-lab artefact is a repaired model, not a prediction.** The published *B. subtilis*
  GEM **iBsu1147 does not grow anaerobically**; they found and engineered two additional pathways so
  it can produce biomass without oxygen, and released the revised model and the function on GitHub.
  They call it "one of the most important outputs of our dry lab team" — and it is, because every
  anaerobic conclusion above depends on it.
- **Limitations stated as properties of the method:** FBA has no regulation, so any strategy that
  works by changing a stress response is invisible to it; FBA has no time axis, which is why the
  dynamic models exist — but those have no metabolism beyond lumped Monod terms; **only the yeast
  maximum specific growth rate is FBA-derived and every other parameter is literature-supported but
  not strain-specific**; and the co-culture arithmetic is idealised (steady state, all exported
  sucrose arriving, ignoring transfer losses, spatial gradients, nutrient competition, pH coupling).

## HARDWARE — 25 logged iterations, each one "Changed / Learned"
A 20 × 24 × 31 cm, **2.2 kg, 30 W** bioreactor plus an automated purification train. Bioreactor
**11 iterations**, filtration unit **7**, fluid dispensing **7**, each published as what was changed
and what it taught.
- **COMSOL CFD decided the rotor, and the simulation is scoped.** Flow changed strongly with
  gravity, so buoyancy-driven convection cannot be relied on → motor-driven rotor. Three geometries
  compared: the large paddle left the upper vessel slow, large blades split the flow into separate
  loops, **small tilted blades (29 mm, 39°, three rows) gave one continuous circulation loop over
  the full height** and became the final design. And then the honest part: even with that rotor,
  circulation on the Moon and in transit **stayed partly confined at 200 rpm**, which limits oxygen
  supply and yield — plus "all of our laboratory tests were run at Earth gravity, and the results
  above have not yet been checked against a real culture in reduced gravity."
- Iterations worth their own line: magnetic stirring abandoned because the bead **traced an
  off-centre circle instead of spinning in place**; a 100 W heater replaced because it was too
  high-rated and too large, two 30 W jacket heaters taking water **18 → 47 °C on about 18 W**; a
  **PID controller tried and then removed** because simple on/off held ±0.5 °C and "PID only added
  complexity and delay"; a 10-hour run exposing a blank-screen fault **fixed by separating high- and
  low-current circuits**.
- Filtration told as a clogging problem solved by arithmetic: a 0.2 µm syringe filter clogged after
  ~100 mL → two stages → three stages (500, 11, 0.2 µm) passing ~650 mL but bulky with large dead
  volume → **chamber heights printed at 5, 10, 15 and 20 mm and compared**, the 15 mm chamber
  passing ~570 mL while ~25 % smaller → press-fit joints replaced by M42 threads (still leaked
  plastic-on-plastic) → **laser-cut silicone gaskets: no leaks over 500 mL at 240 mL/min across at
  least 30 assembly cycles** → identical threads at both ends so the middle module **stacks**, one
  standardised part that scales the number of stages.
- Dispensing: peristaltic vs stepper syringe pump compared in CAD, syringes chosen for
  customisability and cost; **A4988 drivers swapped for TMC2209** with the Learn written as advice
  ("driver choice strongly affected reliability and accuracy, so test drivers early"); limit switches
  giving a home position at the 60 mL mark; volume **calculated and then calibrated by real
  dispensing trials, with the calculation called "only a starting point"**; check valves for
  backflow-free alternation; booster pumps **with an air inlet, because without one a vacuum limits
  how much liquid clears**; a servo valve routing to collection or waste.
- **Validation with real numbers:** temperature held at a 36.00 °C setpoint with mean 35.97 °C,
  steady-state error **−0.03 °C**, range 35.94–36.00, SD ≈ 0.03 °C, under plain on/off control. pH
  sensor tracked deliberate acid and base spikes (6.4 → 5.5 → 4.1 → 6.8) and settled within **one to
  two minutes** each time. Acid/base dosing for a 500 mL culture derived from the pH difference, the
  medium's buffering and the titrant concentration rather than by trial. Plus *E. coli* growth in
  the vessel, and sterility validation — autoclavable glass, and non-autoclavable parts either
  replaced or wiped with 70 % ethanol.

## MEASUREMENT — written as a handbook for someone else
Their measurement page is explicitly about *how to assess radiation resistance in a microbial
chassis*, with the protocol optimisation included rather than hidden: UV and X-ray conditions, the
three complementary readouts, how the working cell density was set, and the comparison of WT Dsup
against the improved variant. Documented as a laboratory handbook and shipped with the parts to the
Registry so another team can reproduce it. Separate handbooks released for **protein expression and
ÄKTA purification** and for **safety**.
**Limitations, in their own order:** (1) every readout measures growth, metabolic activity or
survival, so **none of them can independently establish that Dsup protects DNA** — the comet assay
is the missing measurement, and they have already adapted the protocol and published it without
having run it; (2) more independent **biological** replicates are needed; (3) the working-cell-density
step needs standardising so the resazurin range survives in every strain; (4) the mechanism is
unproven — they have not yet shown by microscopy that the added nuclear localisation signals
actually put Dsup in the nucleus, which is the premise of their best result.

## What is open, in their own words
- Dsup protects cells in their assays; **DNA protection itself is not demonstrated** (no comet assay
  yet).
- Nuclear localisation of the improved variant is inferred from protection, not imaged.
- Mixing in reduced gravity is still partly confined; nothing has been tested off Earth, or in
  simulated microgravity with a live culture.
- iBsu1147 needed two pathways added to grow anaerobically, and those additions need experimental
  confirmation.
- Most dynamic-model parameters are not strain-specific.
- Not every payload in the library was produced or purified, and the five-stage workflow is marked
  Proposed.

## What we would copy
1. **Scope the claim in the sentence that makes it.** "Genetic integration and radiation-testing
   activities should be distinguished from a demonstrated increase in resistance" is a model
   sentence for any iGEM wiki.
2. **Optimise the assay on wild type before you compare strains.** Dose range and readout window
   first; the comparison second.
3. **Three readouts measuring three different things**, so "survived" and "still metabolising" and
   "grew again" cannot be confused.
4. **Make the hard choice the harder one.** Single genomic copy instead of multicopy plasmid,
   because the plasmid would have flattered the result.
5. **Ask whether the robustness modification costs you the product.** FfIBP yield in WT vs Dsup is
   the control that makes the platform claim real.
6. **Publish a model output that says where not to spend effort**, with the reason the method cannot
   settle it.
7. **Fix the public model and release the fix.** A corrected iBsu1147 outlives the project.
8. **Log hardware as Changed / Learned, every iteration, including the ones you reversed** — PID
   removed, magnetic stirrer abandoned, heater downsized.
9. **Calibrate what you calculated.** Motor rotations for 10 mL were a starting point, not an answer.
10. **Label the AI-generated image.** "Generated with GPT-6" under the card that used one.
