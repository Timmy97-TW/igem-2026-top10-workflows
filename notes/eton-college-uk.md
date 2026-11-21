# Eton-College-UK — ProteaSign (Diagnostics, UK) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/eton-college-uk · Village nominee (ID/Therapeutics/Diagnostics/Oncology
group), Best Education nominee, Best IHP nominee. **No special prize won.**
Repo is a Vite/React site; prose lives in `site/src/pages/<page>/*.tsx` and `*.ts` data files.

## Core idea
Read a wound electrochemically. Peptide probes tethered to an electrode are cut by wound proteases
(**MMP-9** and neutrophil serine proteases); the cut releases a redox reporter, and square-wave
voltammetry reads the drop in peak current. Disposable cartridge with **4 working electrodes, read
one at a time**, plus a reusable reader.

## Dry lab — the stack, and the honesty
- Substrate predictor: **10,472 confirmed cleavage windows across 7 proteases**.
- Estimated rate MMP-9 cuts the tethered probes: **13,500 M⁻¹ s⁻¹**.
- An **exact single-pulse SWV solution** with **10 automated tests** on the model chain.
- `model/LabChecks.tsx` is the best artefact on any 2026 HS wiki: every model check published as a
  pass or a caveat. Exact solution agrees with a numerical solver to 5 × 10⁻¹³; 400,000 simulated
  chains give mean label distance 2.19 nm against the model's 2.18 nm; electron-transfer rates
  within 10–12 % of Chidsey at the formal potential; steady state is exactly the λ → 1 limit.
- The caveats they publish themselves: predicted vs measured peak −251 mV against −244 mV, agreeing
  "**partly by construction and from a single uncontrolled run**", with the measured peak broader;
  predictor vs Kridel's measured MMP-9 rates **ρ = 0.70 (PSSM) / 0.58 (logistic)** "**on only 11
  peptides: a positive association, not proof of rate prediction**"; published methylene blue peaks
  ~80 mV against their predicted 58 mV, with the reason given; surface efficiency 0.20 a central
  estimate between 0.01 and 1; doubling 10→20 Hz should raise the peak 2.04-fold.
- **The result that went against them:** every MMP-targeted candidate scored a specificity margin
  ≤ 0; only the elastase-targeted one reached +0.5107. That is why the clinical claim is pitched at
  protease-class level rather than at MMP-9.

## Wet lab
Bench work hosted at the **University of Greenwich** and **King's College London**, notebook kept
per site. Remade MCH stock; first monolayer failed and was diagnosed as evaporation **after** proving
the electrodes alive on ferricyanide; diluent swapped once the MB peptide out-competed C6-Fc; a
0.1 % BSA control run before any enzyme. Peak current **2.20 × 10⁻⁸ → 2.61 × 10⁻⁹ A at 200 nM**;
cleavable and control peptides diverge at **20 nM**. On the KCL side, cleavage read by **Ni-NTA
depletion** of sfGFP reporters rather than by a cleavage assay. pDUAL never worked; three causes named.

## Hardware
Biocoin/AD5940 lineage, TMUX1104 multiplexer, idle electrodes deliberately disconnected. Their own
doubt, published: the currents are "about 50× smaller … 35–352 nA vs their 2–16 µA", so whether the
AD5940 stays accurate at this scale is an open question they raise themselves.

## What we took
The LabChecks table as a reusable template, and the habit of proving the instrument before blaming
the chemistry.
