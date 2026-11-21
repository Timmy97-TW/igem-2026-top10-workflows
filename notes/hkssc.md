# HKSSC — paraben esterase for food waste (Food & Nutrition, Hong Kong) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/hkssc · **Best New Basic Part (HS)**; nominee for Best Village Project
(Agriculture/Food & Nutrition/Fashion & Cosmetics/Art & Design group) and Best Education (HS).
No short codename.

## Core idea — aimed at one named facility
Over **1.05 billion tonnes** of food wasted a year (2022); food waste is **29 % of Hong Kong's
landfilled MSW** (2024). Hong Kong recycles it at facilities such as **O·PARK**, using microbes that
break it down into renewable energy — and **preservatives in food waste paralyse those microbes,
drastically slowing the process**. Over **90 %** of US food samples carry parabens. A High School
project aimed at one real plant with one real bottleneck, rather than at a global abstraction.

## The science
**prbA**, an esterase that hydrolyses **methyl-paraben** into less antimicrobial compounds, expressed
in ***E. coli* BL21(DE3)**. Proof-of-concept question: does prbA reduce paraben's inhibition of
*E. coli* growth, which would let food-waste treatment run faster?

## The readout came before the result — the centre of the page
They chose **CFU plate counts over OD₆₀₀ and published the reason**: CFU counts cells that are alive
and dividing, where OD can be skewed by precipitate and dead cell bodies. They then note that CFU
standard curves are **required for proper normalisation** (activity per viable cell) and that without
CFU calibration **"conclusions may be misleading or incorrect"**. So they built **BL21(DE3) CFU
standard curves from OD 0.1 to OD 1.0** before the MIC work, deliberately plating selected dilutions
(10⁻¹ and 10⁻² as a safeguard for the lowest optical densities; higher dilutions on the expectation
that a log-phase culture holds 10⁸–10⁹ cells/mL) rather than every step of a ten-fold series, to
avoid wasting plates. Target counting window 30–300, with the failure mode named at each end.

## Three arms, stated in advance
(1) positive control, *E. coli* in LB, expected to grow; (2) negative control, *E. coli* in LB with
methyl-paraben, expected not to grow; (3) experimental, transgenic *E. coli* in LB with
methyl-paraben. MIC defined on their page as the lowest concentration that completely stops visible
growth.

## What the results do NOT establish — important
They do **not** establish that prbA *expression* is what raised the MIC. Wild type stops at
**400–500 mg/L**; cycle 1 (prbA-idt) grew at **1000 mg/L** with sparse colonies at 1500. But in the
grids that set that range, the **uninduced 0.0 mM IPTG plates carried colonies at the same paraben
concentrations**, the published range is **not broken down by induction level**, and the figure
legends show **one plate per paraben × IPTG combination** (only the wild-type baseline used three
technical repeats; only the growth curves are n = 3). Cycle 2 then came in **lower** at 500–600 mg/L;
cycle 3's MIC was never measured. The HPLC meant to show paraben disappearing produced two standards
and, in cycle 1, **no paraben peak at any time point** — so no degradation rate, no percentage
removed, and no faster digestion was ever measured. Their Human Practices page also claims they
tested the microbes under different pH conditions, but **no pH series appears on Results, Engineering
or Experiments**.

## The part
The wiki never says which basic part the prize went to. The two with characterisation behind them are
**BBa_26SZRX0Y** (prbA CDS) and **BBa_262HI0IB** (native promoter + RBS); the promoter is the one
genuinely new to the Registry. We say so rather than guess.
