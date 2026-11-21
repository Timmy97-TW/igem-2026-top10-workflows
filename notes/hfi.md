# HFI — LYSERA (Therapeutics, Guangzhou, China) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/hfi · **Best Village Project (HS)** for the
Infectious Diseases/Therapeutics/Diagnostics/Oncology group; **Best Education (HS)**; nominee for
Best Part Collection, Best Presentation and Best Wiki (HS). The awards page calls the project LYSERA.

## The disease
Hyperlysinemia: a congenital amino-acid metabolic disorder from mutations in **AASS**. Lysine
degradation is impaired and lysine accumulates in intestine, blood and tissue. No specific drug;
patients follow a lifelong strict low-protein diet, which risks nutritional deficiency in children
and long-term effects on bone and brain development.

## Build order — chassis first, then binding, then pathway
1. **ldcC knockout** in EcN. *ldcC* encodes a lysine decarboxylase that would consume the substrate
   they were about to measure, and cadaverine accumulation inhibits EcN growth. After knockout,
   **HPLC-MS showed endogenous lysine consumption initially eliminated** and the growth-inhibitory
   effect of exogenous lysine alleviated against wild-type EcN (lysine gradient; comparison at
   **5 mg/mL**; FDAA derivatisation and an HPLC L-lysine standard curve). *This is a cloning step
   taken for a measurement reason — the cleanest example in the section.*
2. **Controllable coupling** with **SpyTag–SpyCatcher**, displayed via the **eCPX** outer-membrane
   vector, one partner per strain. Co-culture gave red–green chimeric clusters; **negative controls
   without Spy hardly formed hybrid aggregates**, excluding non-specific clumping. Cluster number and
   mean area tracked the mixing ratio (fluorescence microscopy + ImageJ). **But free single cells
   persisted in every group**, and they state the system **cannot reach 100 % aggregation**, naming
   four causes: limited display sites, random collision dynamics in suspension, cell proliferation,
   heterogeneous per-cell expression.
3. **Split pathway.** Strain A expresses **LKR** and **SDH** (lysine → saccharopine); Strain B
   expresses **ALDH** and **AASDHPPT** downstream into the TCA cycle. HPLC-MS on supernatant residual
   lysine: all co-cultures consumed lysine over 24 h; the **2:1 (upstream:downstream)** ratio cleared
   best. **Spy-crosslinked beat freely mixed only moderately, and the 24 h comparison is reported as
   not significant (ns)** — explained by the free single cells, so not all pairs formed the intended
   metabolic tunnel. For lack of time, **saccharopine and AASA were never quantified**, so they can
   confirm only supernatant lysine reduction "rather than provide direct evidence for complete
   multi-step degradation flow".
4. **Simulated colon.** On Professor **Liujie Huo**'s suggestion, both strains sustained **48 h** in
   artificial colon fluid without severe growth arrest, with **EGFP** showing stable heterologous
   protein accumulation. They call it preliminary.

## The model that earned its keep
A **NetLogo agent-based simulation** of cluster formation predicted that a large fraction of cells
would stay unpaired however long the co-culture ran — and the microscopy then found exactly those
free single cells. A model predicting a disappointment is worth more than one that agrees.

## Other notes
Professor Yang rejected the two-strain premise outright, and their single-strain attempt produced
almost no positive colonies. Their IHP model is a five-step cycle they call **CLEAR**. The wiki says
*putrescine* in two places where the Description page and the cadaverine-inhibition argument say
*cadaverine*.

## The honest headline
The central engineering idea was built, measured, and found to help less than expected — and
published that way. That is more valuable than a clean result.
