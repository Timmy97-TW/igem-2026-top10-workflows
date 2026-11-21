# GHCIS — HoldeX (Conservation village, Shanghai, China) — Top 10 High School 2026
Wiki: https://2026.igem.wiki/ghcis · **Best Part Collection (HS)**, **Best Software (HS)**; village
nominee (Climate/Conservation/Bioremediation group), Best Wiki nominee.
Repo note: `wiki/pages/*.html` are mostly unfilled iGEM template stubs — **the real content is in
`wiki/content/*.html`**. The masthead, footer logo and hero title image call the project **HoldeX**,
above the tagline "Your toehold to the future of biology"; the content pages describe it plainly.

## Core idea
A paper-based cell-free test for three resistance genes in water — **MCR1** (colistin), **NDM1** and
**KPC2** (carbapenems) — aimed at livestock, agricultural and healthcare wastewater, framed with the
WHO One Health approach. Proposed workflow: sample → isothermal **RPA** → toehold switch → enzyme
colour on paper.

## The two halves, which is the honest centre of the page
**With data:** synthetic trigger RNA → switch → colour on filter paper.
**Design and hardware only:** sample → RPA → trigger. **RPA appears on the description, hardware and
contribution pages and nowhere in the results**, so the published evidence runs on **3–5 µM synthetic
trigger RNA**, not on DNA from a water sample.

## Round one, published as failing
Nine switches (three per gene), ~134 bp inserts, cloned by homologous recombination into DH5α,
Sanger-verified, screened with GFP in pJL1 cell-free. **Most gave no sustained rise; NDM1_3 rose but
identically with and without trigger**, so none gave sufficient separation. They re-examined the
predicted RNA secondary structure and wrote that the structural explanation "was not directly
established by these fluorescence measurements". Redesign used a locally installed **NUPACK 4.1.0.1**
(ViennaRNA + Python was the *first*-round screen); synthetic DNA as PCR products with vector-homology
ends cut synthesis turnaround **from 10 days to 3**. **MCR1_4, NDM1_4, KPC2_4** kept.

## Reporters and integration
lacZ/CPRG (visible at 10 µL enzyme, 0.25 mM CPRG), xylE/catechol (bright yellow at 0.25 mM, substrate
oxidation had to be controlled), gusA/X-Glc (blue at 1 mM; signal fell at 50 µL input, "possibly
rapid substrate depletion, although this was not directly tested"). SDS-PAGE bands near GusA
68.2 kDa, LacZ 116 kDa, XylE 34.5 kDa, soluble fractions included. Colour forms **within 5 s** of
mixing — and they state this is the catalytic reaction, **not the duration of the whole workflow**.
Paired MCR1_4–gusA, NDM1_4–xylE, KPC2_4–lacZ; deployed on Whatman paper by a multistep drying
procedure. **Background colour present at 0 µM.** ARGUS extracted mean RGB → CIELAB → **CIEDE2000
ΔE00**, noting that averaging RGB before conversion can differ from per-pixel conversion. With 5 µM
as PC, 0 µM as NC and 3 µM as sample: ΔE00(S1,PC) < ΔE00(NC,PC) for all three, relative changes
**46.80 % MCR1, 41.06 % KPC2, 40.20 % NDM1**. The software uses a fixed threshold "for preliminary
interpretation", and they write that the 3 µM comparison "**does not establish a limit of detection**".

## The closing sentence, the best in the division
The results "**do not yet establish a validated detection limit or the performance of the complete
DNA-to-color workflow.**" Note also the hedging register throughout: "**nominal** 20 µL reaction",
"**reported** composition". No `measurement.html` in their content folder; `notebook.html` is a PDF
iframe.
