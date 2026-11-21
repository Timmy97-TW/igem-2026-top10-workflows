# iGEM 2026 Top 10 Workflow Atlas / iGEM 2026 前十名工作流程圖譜

**[→ Read the site](https://timmy97-tw.github.io/igem-2026-top10-workflows/)**

How the twenty teams named to the **Top 10 Undergraduate** and **Top 10 Overgraduate** lists at the
iGEM 2026 Grand Jamboree actually ran their wet lab and their dry lab. Two sections, one overview
and one comparison page each, one page per team, read from each team's own public 2026 wiki.
Bilingual (English / 繁體中文), figure-led, no build step, no dependencies.

Compiled by **GEMS Research (Taiwan)**.

一份關於 iGEM 2026 Grand Jamboree **大學部前十名**與**研究生部前十名**共二十支隊伍「實際上怎麼做事」
的研究：用了哪條組裝路線、什麼才算一個結果、哪個模型是擬合出來的、哪個只是暫定值，以及濕式與乾式
實驗在什麼地方把東西交到對方手上。兩個分組、各有總覽與橫向比較、每隊一頁，全部讀自各隊 2026 年公開
wiki。中英雙語、無建置流程、無相依套件。

---

## What this is, and what it is not

This repository contains **secondary analysis of twenty public wikis**. We measured nothing. Every
number is the team's own, quoted as they state it, and every team page links to the wiki it was
read from.

It is **not a ranking**. The official result is the official result. iGEM publishes the Grand Prize
and the runners-up in order and lists the rest of each Top 10 alphabetically; where no order was
published, we do not infer one. Where this site makes a *judgement* rather than reporting what a
wiki says — the measurement ladder, the failure taxonomy, the four archetypes, the "what we would
copy" lists — it is labelled as ours on the page where it appears, so it can be disagreed with
precisely.

It is also **not an audit**. A wiki is a claim about what happened in a lab, written by the people
who were there and who wanted to win. We read the claims carefully; we did not reproduce them.

本專案收錄的是**對二十個公開 wiki 的二次分析**。我們沒有量測任何東西，每個數字都屬於產出它的隊伍。
本站**不做排名**；凡屬*判斷*而非轉述的部分，都在頁面上標示為我們的看法，以便讀者精確地提出不同意見。

## The twenty teams

### Top 10 Undergraduate

| Award | Team | Project | Village |
|---|---|---|---|
| Grand Prize | Stanford University 🇺🇸 | Kele Patch | Therapeutics |
| 1st Runner-up | UCAS-China 🇨🇳 | PARCEL | Therapeutics |
| 2nd Runner-up | Princeton 🇺🇸 | SymPleco | Foundational Advance |
| Top 10 | Heidelberg 🇩🇪 | VOYAGE | Foundational Advance |
| Top 10 | Cornell 🇺🇸 | Klothos | Fashion & Cosmetics |
| Top 10 | LYON 🇫🇷 | BioThetis | Bioremediation |
| Top 10 | NUS-Singapore 🇸🇬 | ORCHID | Biomanufacturing |
| Top 10 | UAlberta 🇨🇦 | gleyeco | Therapeutics |
| Top 10 | UCNZ 🇳🇿 | NanoBrew | Biomanufacturing |
| Top 10 | UOttawa 🇨🇦 | Nulfur | Bioremediation |

### Top 10 Overgraduate

| Award | Team | Project | Village |
|---|---|---|---|
| Grand Prize | TU Delft 🇳🇱 | MOSAIC | Biomanufacturing |
| 1st Runner-up | WageningenUR 🇳🇱 | Triton | Bioremediation |
| Top 10 | Athens 🇬🇷 | ApiconIASIS | Conservation |
| Top 10 | ETH-Zurich 🇨🇭 | preCISe | Foundational Advance |
| Top 10 | GU Frankfurt 🇩🇪 | HIDE | Therapeutics |
| Top 10 | KAUST-KSA 🇸🇦 | SHIHAB | Space |
| Top 10 | Marburg 🇩🇪 | CLiPPR | Foundational Advance |
| Top 10 | Muenster-University 🇩🇪 | P.A.C. Immunity | Agriculture |
| Top 10 | Toronto 🇨🇦 | PetaBite | Bioremediation |
| Top 10 | UZurich 🇨🇭 | SeisMIC | Conservation |

The official results page lists only the Grand Prize and the 1st Runner-up in order for the
Overgraduate section — **no Overgrad 2nd Runner-up is published** — and the remaining eight
alphabetically. This site follows that order. All ten Overgraduate teams received Gold.

Source: [competition.igem.org/results/2026](https://competition.igem.org/results/2026), read
2026-11-21.

## Pages

| Page | What is in it |
|---|---|
| Overview (per section) | The findings across that section's ten, the measurement ladder, failure as method, the workflow archetypes, and what we would take from it |
| Side by side (per section) | Chassis and assembly route, what each team decided a result was, the dry-lab stacks, a documented-practice matrix, and — in the Overgrad section — what each team shipped that another team can use |
| One page per team | The design decision · a wet/dry swimlane diagram · the wet-lab pipeline step by step · the measurement discipline · the model and software stack · what failed · what we would copy |

Switch between the two sections with the **Undergrad / Overgrad** control at the left of the tab
bar. The division is carried in the page id (`#og-…` for Overgraduate), so every deep link keeps
working.

## Structure

```
index.html          design system + shell (the only HTML file)
app.js              hash router, division switch, EN/中文 layer, content helpers
fig.js              figure engine: bars, columns, lines, matrix, funnel, flow, gantt, scatter, custom
wf.js               workflow diagrams: the wet/dry swimlane, the DBTL attachment ring,
                    the measurement ladder, the failure taxonomy
data/meta.js        site metadata, both team rosters, the two divisions and their tab orders
data/overview.js    the comparative analysis, Undergraduate
data/compare.js     the side-by-side tables, Undergraduate
data/t-<team>.js    one page module per Undergraduate team
data/og-overview.js the comparative analysis, Overgraduate
data/og-compare.js  the side-by-side tables, Overgraduate
data/og-t-<team>.js one page module per Overgraduate team
notes/              the raw working notes each page was written from, one file per team
```

Every page is a plain object with a `render(h)` function, and every string is a
`{ en: '…', zh: '…' }` pair. There is no framework, no bundler and no network call at runtime: open
`index.html` and it works.

## Running it locally

```bash
python3 -m http.server 8731
```

Then open `http://localhost:8731/`.

## Licence

Code and prose in this repository: MIT (see `LICENSE`). The underlying facts belong to the teams
who published them; each team page links to the wiki it was read from. Not affiliated with, or
endorsed by, iGEM or any team named here.
