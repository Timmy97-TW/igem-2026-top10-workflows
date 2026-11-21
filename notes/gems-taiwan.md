# GEMS-Taiwan — ReLEAF (Biomanufacturing, Taipei, Taiwan) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/gems-taiwan · **Best Measurement (HS)**, **Best Hardware (HS)**,
**Best Integrated Human Practices (HS)** — three special prizes, more than any other HS Top 10 team.
Village nominee (Space/FA/Software/Biomanufacturing group), Best Presentation and Best Wiki nominee.

**CONFLICT OF INTEREST: this is our own team.** Notes kept to the same standard as the other
twenty-nine, but our judgements about this project are worth less than our judgements about the rest.

## Core idea
An AIoT model predicts crop stress from leaf sensors plus weather forecasts; when it decides
intervention is due, **green light (CcaSR optogenetics)** switches on production in ***B. subtilis*
WB800**, which secretes **ACC deaminase**. A **hollow-fiber perfusion reactor** contains the cells,
so nothing is released. A digital twin, a custom photometer and a hydroponics box sit alongside.
**LEA14** and **BoPEP4** were built as parts for future work; MD was run on BoPEP4 only.

## The pivot, which is the spine of the project
The first ReLEAF released bacteria with **DesK–DesR** temperature sensing into soil. Two April
conversations killed it: **Prof. Chen Wen-Liang (10 Apr)** — use a bioreactor instead of soil
release, physical containment primary; **Dr. Jennifer Brophy (18 Apr)** — containment over a kill
switch. The response was to move sensing **out of the cell** into electronics and a forecast, and to
build a machine to hold the cells. Three of the four hardware builds exist because of that decision.
Caveat worth recording: the Description page states the containment and sensing objections as expert
advice without naming an adviser; the IHP page names the containment advisers with dates but never
mentions DesK–DesR (it appears once in the whole wiki) and publishes **no data** from the abandoned
design. So the pivot is a decision that was taken, not an experiment that failed.

## Measurement (the prize-winning part), reported sceptically
2 mm flow cuvette, 90:10 beam splitter. TiO₂ run 23 Aug; 1 µm SiO₂ run 10 Oct with the concentration
axis set by pipetted volume. Against the BioDrop: **slope 1.001** with a **−0.123 OD intercept**,
which is traced to the stored blank rather than hidden. **3.8 % median paired difference**, no
transform fitted. Saturation at about **OD 2.7**. A **91.5 % integer-quantisation** artefact was being
reported as "bubbles" until it was identified. **Five of eight pre-registered predictions were
overturned.** Software gates took the worst bubble error from **2.44 to 0.016 OD**.

## Hardware
Lab rig is a 600 × 900 mm wire-grid panel. The **40 × 24 × 62 cm** figure is the *commercial cabinet
design*, which the Hardware page says has **not been built** and whose output per day, power and
weight are listed as "not yet known". Parts page says **35** Registry parts.

## What is open — the harshest section on the site, deliberately
The system has **never run end to end**: none of the photometer numbers is the light switch doing
anything. The switch is not a dial. Containment rests on **two single platings with no recorded
detection limit**. The ELISA is defeated by its own WB800 control. And the farmer payback figure is
**68 years on the Math Model page against 4.9 on the Geospatial page** — an unresolved internal
contradiction.

## The causal claim we cannot show
Best IHP probably followed from the pivot, since the project was redesigned by its human-practices
work. That is our reading, labelled as ours; we have no way to demonstrate it.
