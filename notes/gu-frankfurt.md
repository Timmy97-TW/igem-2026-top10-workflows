# GU Frankfurt — HIDE (Therapeutics, Germany) — Overgrad Top 10 2026
Title: HIDE — hiding mismatched HLAs on a transplanted organ instead of suppressing the immune system
Wiki: https://2026.igem.wiki/gu-frankfurt
Also: Best Therapeutics Project nominee (Undergrad & Overgrad combined), Gold.
Fifth consecutive iGEM team at Goethe University, entirely student-run.
**Their wiki footer carries two words no other Top 10 wiki carries: "No AI was used."**

## Core idea
~183,000 transplants a year against **over 600,000 people on waiting lists**, so organs are allocated
by urgency, which means **mismatched organs get transplanted**. Donor and recipient **HLAs** differ,
the immune system attacks, and the only answer available is lifelong immunosuppression — which
leaves patients vulnerable to infection and cancer, does not fully prevent rejection, and
**damages the graft itself, with up to 50 % of transplanted organs lost within ten years.**

HIDE inverts the target: **do not suppress the immune system, downregulate the mismatched HLAs on
the organ** so the differences become invisible while immune surveillance stays intact. Turn a 4/6
match into a 4/4 match retroactively.
Mechanism, three components in a patient-derived **CD4+ T cell** (chosen for mobility and deep
organ infiltration, and because they are numerous and easily modifiable):
1. **The HIDE receptor** — a **synNotch** receptor with an extracellular HLA binder, the human Notch
   core, and an intracellular transcription factor. Two properties are load-bearing: synNotch is
   modular, which suits the "immense variety of HLA mismatches", and **it activates by mechanical
   pulling force, which is what guarantees HIDE only fires when the cell is physically at the
   organ.** A bonus they point out: the Notch core also sheds its extracellular domain, so the
   released binder keeps occupying the non-self HLA and shields it from T-cell contact for a while.
2. **The transcription factor** — a fusion of the *S. cerevisiae* **Gal4 DNA-binding domain** with
   **four human Oct-2 repeats**, chosen against two stated criteria: orthogonal to a T cell, and
   able to recruit **polymerase III rather than polymerase II**.
3. **The shRNA cassette** — **4× Gal4 UAS in front of a minimal U6 promoter**, i.e. they took the
   constitutive U6 and **replaced its enhancer element with the Gal4 UAS** so a constitutive Pol III
   promoter becomes inducible while still recruiting Pol III. The shRNA is processed to siRNA, exported
   in **extracellular vesicles**, taken up by graft cells, and silences the mismatched HLAs by RNAi.
They state the novelty precisely: **combining a synNotch receptor with an shRNA cassette "has not
been done before."**

**Binders designed across two scaffolds on purpose.** Nanobodies and fully de novo multi-helix
binders (e.g. DB05, built with BindCraft), **5–15 kDa — small deliberately, because the amino-acid
differences between HLA alleles sit in the peptide-binding groove and a binder has to reach in.**
And the honest pivot: the original aim was a binder specific for the HLA **independent of the
peptide**, but because the differences lie in the peptide-binding cleft the peptide is itself part
of the epitope — so they **also built binders against an HLA + organ-specific-peptide combination**
to stay organ-specific. The design target is a two-sided one: selective enough to enrich cells at
the organ, and high-affinity enough to exert the pulling force synNotch requires.

## WET LAB — a proof of concept that admits it is in a surrogate chassis
**Chassis substitution declared up front.** The therapy lives in a patient T cell, but each
component was tested individually in **HEK293T** cells, "as they are less complex to handle and have
a higher transfection rate", with the cells made to express a fused **HLA–β2m** construct instead.
The project is split into the three verbs — **BIND / TRIGGER / SILENCE** — and each gets its own
results page.

**BIND, and the reporter problem they had to solve.** Because the system drives **polymerase III**,
they **could not use a protein reporter at all** — Pol III does not make mRNA for one. So the readout
was inverted: stable eGFP-expressing HEK293T cells, with the anti-HLA shRNA **replaced by an
anti-eGFP shRNA**, so **loss of green means the receptor fired.** And to separate receptor
functionality from binder quality, the first version replaced the HLA binder with a **SNAP-tag,
activated by covalent binding to benzylguanine-coated beads** — so the synNotch core could be
validated on a synthetic ligand while the binders were tested separately.

**TRIGGER.** Extracellular vesicles characterised rather than assumed: **nanoparticle tracking
analysis plus Western blots** to confirm the vesicles were **exosomes**.

**SILENCE — the part with the most careful controls on the wiki.**
- Target choice argued from population genetics: **HLA-A\*01 affects 14.6 % of the European
  population** and is also found across North and South Africa, South West Asia and North America.
  The non-targets were chosen for the same reason — HLA-A\*02, \*03, \*11, \*24 are among the most
  common worldwide, so "our medication would have high probability to encounter them, which makes
  them perfect examples to test our shRNA specificity", with **HLA-A\*24 at 30–40 % in Japan and
  Southeast Asia against 8.6 % in Europe**. And the design accounts for known cross-reactivity:
  **A\*03 cross-reacts with A\*01, A\*02 with A\*24**, so those pairs are the hard cases.
- **The positive control is the construct's own architecture turned into a tool.** Because every HLA
  construct is a **covalent HLA–β2m fusion**, one mRNA encodes both — so an **anti-β2m shRNA should
  knock down every HLA in the panel**, establishing the maximum downregulation achievable in that
  system. The negative control is a **scrambled shRNA designed to lack complementarity to anything
  in the human genome**, which also tests that the shRNA machinery is not itself toxic or
  expression-altering.
- **Detection designed against its own failure mode:** the HLA construct terminates in a **FLAG-tag**
  so it is detected by anti-FLAG, "whilst ruling out non-specific binding of the antibody to the HLA
  construct". Loading normalised to **vinculin** as a housekeeping control, with the reason given
  (cytoskeletal, evenly expressed). Control transfections of shRNA cassettes **without** HLA gave no
  FLAG signal — i.e. the antibody's specificity is demonstrated, not assumed.
- **Plasmid prep hygiene as part of the design:** the two co-transfected plasmids carry **different
  resistance cassettes — carbenicillin for the HLA plasmids, kanamycin for the shRNA plasmids — "to
  avoid cross contamination during plasmid production."**
- **A scaled-down plan, with the person who talked them out of the bigger one named.** They had
  planned stable single-HLA cell lines; after consulting postdoc Philipp Münick (Dötsch lab) they
  concluded **co-transfection was sufficient for initial candidate screening.** Harvest window set at
  36–48 h after consulting Prof. Robert Tampé plus their own optimisation experiments. The HLA
  construct design itself came with advice from Dr. Simon Trowitzsch (Tampé lab).
- **A timecourse that contradicted the literature and said so.** Published work suggested expression
  and downregulation become detectable at 24 h; harvesting at 0, 4, 12, 24, 36, 48 and 60 h showed
  **both already detectable at 12 h**, and both still detectable at 60 h — with the span capped at
  60 h for a stated biological reason: **the cells began to overgrow and die after two days.** Three
  biological repeats, normalised to vinculin, with extended data published separately.
- **The normalisation argument is the best piece of reasoning on the page.** Each transfection uses
  the same *total* plasmid mass, so in a co-transfection each individual plasmid is **half** what a
  single transfection delivers — and since shRNA must always be co-transfected with HLA, every
  comparison is normalised **to the co-transfection of the matching HLA with scrambled shRNA**,
  not to a single-plasmid control. Samples were additionally normalised to **cell count and to total
  protein by BCA**.
- **A false-positive risk flagged against their own result:** HLA-A\*24 expressed lower than A\*01 and
  A\*02, which "while being included in expression comparison could lead to false positive
  downregulation results due to the detection limit of Western blot analysis."
- Two levels of evidence, not one: protein by Western blot **and** transcript by RT-qPCR.

## DRY LAB — HUSH, built because the tools did not exist
**HUSH: Human genome-Universal Silencing Hairpin designer.** The origin story is a tool search that
failed, and the reasons are itemised:
- **No available design tool accounts for highly polymorphic families like HLAs**, where coding
  sequences differ by a few base pairs. They bridged it manually with multiple sequence alignments
  and found **no way to integrate that into any tool they could find.**
- Commercial RNAi design services are **proprietary** — algorithms and selection criteria
  inaccessible, option sets varying between platforms "usually without any reasoning given that
  would be clear to the user."
- **siDirect**, the non-commercial option they actually used for the first designs, gives more
  theory but is **neither open-source nor pipeline-integrable.**
- And the structural diagnosis: research on designing RNAi constructs between highly similar
  sequences has advanced, and **"the available tools for researchers have remained mostly stagnant."**

Three stated tenets, each with teeth:
1. **Research-first.** Every design choice carries the research it comes from and how to use it, so
   the tool is auditable rather than a black box, plus a **novel analysis package for polymorphic
   protein families.**
2. **Accessibility.** A guided wizard that proposes optimal choices from the sequence's own
   characteristics, including **converting designed siRNAs into shRNAs with guidance on which hairpin
   loop to use and thermodynamic evaluation of the structure's integrity** — plus a compact **expert
   mode** exposing thermodynamic constants and selection rules for pipeline integration.
3. **Safety, argued from the pharmacology.** siRNA effects last days but **shRNA can silence for
   much longer, which is desirable clinically and is exactly what makes an off-target dangerous.**
   So HUSH filters candidates by comparative sequence analysis **against NCBI human RefSeq using the
   open-source aligner Bowtie** — chosen explicitly for transparency — and they **propose extending
   off-target screening to known SNPs**, which standard practice does not cover.

**Four interfaces over one core (`HushSession`)**: web app, CLI, a persistent terminal shell, and —
unusually — an **MCP server so an AI agent can drive HUSH**. Input is **FASTA**, with the choice
justified (established 1985, universal across IPD-IMGT/HLA, NCBI and industry), separated into a
target sequence and an optional **sequence panel for the MSA module** — which is the part that makes
allele-selective design possible at all. Open-source on iGEM GitLab.

**HUSH's validation is a table of expected vs observed, and it does not flatter the tool.**
Five HUSH-designed shRNAs (A03, A24, A02+A24, A03+A24, A01+A02+A24) against four HLA-A alleles, with
each cell marked for whether the result was expected and whether it was confirmed by Western blot or
RT-qPCR. Their own verdict: **every target they expected to hit was downregulated**, but "the
magnitude of off-target effects on other HLA subtypes that made up the design panel is difficult to
gauge"; **RT-qPCR "only supported, but underreported" expected downregulation**, while **Western
blots "showed mixed results, generally indicating broad off-target hits alongside support of
expected targets."** And the limit on all of it, stated: **"as all experiments were only conducted
once, however, this does not represent a definitive verdict on whether specific, allele-selective
shRNA designs are feasible."** A software team publishing that its own validation is n = 1.

**Outlook written as a transfer list, not a vision.** The real problem HUSH solves —
distinguishing closely related transcripts — recurs in **KIR, LILR and FCGR** receptor families, in
polymorphic blood-group genes such as **ABO**, in **APOL1** risk alleles; in plants in **NLR**
resistance-gene families and the **S-locus** self-incompatibility genes; in insects in **cytochrome
P450 insecticide-resistance alleles in *Anopheles funestus***; and in host-induced gene silencing
against fungal pathogens, either across conserved sequences in many isolates or to distinguish
strains. Each one is caveated: feasibility "depends on target-organism biology, RNA uptake and
processing, and the availability of suitable delivery methods", and protein-level variation has to
be mapped back onto coding sequences and transcript isoforms first.

## Cloning — a standards decision made against iGEM's own default, with reasons
**NEBuilder HiFi DNA Assembly** (same exonuclease principle as Gibson) rather than restriction or
Golden Gate, and they say plainly: **"Despite iGEM using the RFC10 and Type IIS standards for the
Registry of Standard Biological Parts, we selected an alternative approach."** The reasons are
specific to the project: they intended to test **many HLA binder variants**, so they wanted full
control over insert position without designing restriction sites in; the binder has to be joined
**seamlessly** so the fusion between binder and receptor translates as intended; HiFi is
field-proven (>12,000 citations) and already familiar to team members.
**Four plasmids designed in silico, and the one that failed is reported.** The **HLA-into-PiggyBac**
construct — intended to make stable HLA-expressing lines by transposase integration at TTAA sites —
**did not assemble despite multiple HiFi attempts**, and was dropped for time. Two reasons are given
for why that was tolerable rather than fatal: a successful cloning would still have needed **at
least four weeks** to establish and verify a stable line, and **co-transfection of the HLA and binder
plasmids worked**, so the plasmid was no longer essential. The other three — SNAP-synNotch with
anti-eGFP shRNA (the prototype), HLA-binder synNotch with anti-eGFP shRNA (the full receptor), and
**HLA binder fused to GFP for measuring binding alone by FACS** — form a deliberate ladder from
"does the core work" to "does the binder work" to "does the whole thing work".

## What is open, in their own words
- The whole proof of concept runs in **HEK293T, not in T cells**, component by component rather than
  as an assembled system.
- HUSH validation experiments were each run **once**; Western blots indicated **broad off-target
  hits**; RT-qPCR underreported the expected effect.
- HLA-A\*24's lower expression could produce **false-positive downregulation** at the blot's
  detection limit.
- The **PiggyBac** stable-line plasmid never assembled; no stable line exists.
- The peptide-independent binder was not achievable, so peptide-dependent binders had to be designed
  alongside.
- The SNP extension to off-target screening is **proposed**, not implemented.

## What we would copy
1. **Invert the reporter when the biology forbids the obvious one.** Pol III cannot make a protein
   reporter, so they silenced a stable eGFP instead and read the absence of green.
2. **Validate the machine before the specificity.** A SNAP-tag on beads tests the synNotch core
   without involving any binder.
3. **Turn your construct's architecture into the positive control.** A covalent HLA–β2m fusion means
   an anti-β2m shRNA defines the maximum achievable knockdown in your own system.
4. **Pick the non-targets by prevalence and known cross-reactivity**, so a specificity claim is
   tested where it is most likely to break.
5. **Normalise to the co-transfection, not the single transfection** — because equal total plasmid
   mass means unequal individual plasmid dose, and the comparison is otherwise wrong.
6. **Give co-transfected plasmids different resistance markers** so plasmid prep cannot
   cross-contaminate.
7. **Prove the antibody.** shRNA-only transfections with no FLAG signal are what make every other
   FLAG band mean something.
8. **Say which number is at your detection limit** before someone else notices.
9. **Let the tool gap justify the tool.** Proprietary algorithms, no MSA integration, no pipeline
   hooks, stagnant implementations of new research — four specific reasons, then an open-source tool.
10. **Choose the transparent dependency on purpose.** NCBI RefSeq plus Bowtie, named as the choice
    that makes the safety filter auditable.
11. **Publish the validation table with "expected" marked separately from "observed"**, and the n.
12. **Explain a deviation from the community standard instead of ignoring it.** RFC10 and Type IIS
    were set aside for a project-specific reason that is written down.
