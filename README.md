# iGEM 2026 Top 10 Workflow Atlas / iGEM 2026 前十名工作流程圖譜

**[→ Read the site](https://timmy97-tw.github.io/igem-2026-top10-workflows/)**

How the ten teams named to the **Top 10 Undergraduate** list at the iGEM 2026 Grand Jamboree
actually ran their wet lab and their dry lab. One overview analysis, one page per team, read from
each team's own public 2026 wiki. Bilingual (English / 繁體中文), figure-led, no build step, no
dependencies.

Compiled by **GEMS Research (Taiwan)**.

一份關於 iGEM 2026 Grand Jamboree **大學部前十名**十支隊伍「實際上怎麼做事」的研究：用了哪條組裝
路線、什麼才算一個結果、哪個模型是擬合出來的、哪個只是暫定值，以及濕式與乾式實驗在什麼地方把
東西交到對方手上。一頁總覽、每隊一頁，全部讀自各隊 2026 年公開 wiki。中英雙語、無建置流程、
無相依套件。

---

## What this is, and what it is not

This repository contains **secondary analysis of ten public wikis**. We measured nothing. Every
number is the team's own, quoted as they state it, and every team page links to the wiki it was
read from.

It is **not a ranking**. The official result is the official result, and finishing order inside a
Top 10 list is not published. Where this site makes a *judgement* rather than reporting what a wiki
says — the measurement ladder, the failure taxonomy, the four archetypes, the "what we would copy"
lists — it is labelled as ours on the page where it appears, so it can be disagreed with precisely.

It is also **not an audit**. A wiki is a claim about what happened in a lab, written by the people
who were there and who wanted to win. We read the claims carefully; we did not reproduce them.

本專案收錄的是**對十個公開 wiki 的二次分析**。我們沒有量測任何東西，每個數字都屬於產出它的隊伍。
本站**不做排名**；凡屬*判斷*而非轉述的部分，都在頁面上標示為我們的看法，以便讀者精確地提出不同意見。

## The ten teams

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

Source: [competition.igem.org/results/2026](https://competition.igem.org/results/2026), read
2026-11-21.

## Pages

| Page | What is in it |
|---|---|
| Overview | Six findings across all ten, the four places a dry lab attaches to a DBTL cycle, the measurement ladder, failure as method, four workflow archetypes, and the design funnels |
| Side by side | Chassis and assembly route, what each team decided a result was, the dry-lab stacks, a documented-practice matrix, and the named failure on every wiki |
| **Dry-lab toolbox** | Twenty-three capabilities against ten teams as a matrix, the five jobs a dry lab can do, a reference table with what each capability costs to reach, and the order we would install them in |
| **Take it to 2027** | Six questions to screen ideas with, the archetype choice, a one-page gate sheet for every planned result, a twelve-month calendar with the dry lab on it, a failure budget, and the screen run backwards on our own 2026 project |
| One page per team | The design decision · a wet/dry swimlane diagram · **the overview figures from their own wiki** · the wet-lab pipeline step by step · the measurement discipline · the model and software stack · what failed · what we would copy |

## Structure

```
index.html        design system + shell (the only HTML file)
app.js            hash router, EN/中文 layer, and the content helpers each page builds with
fig.js            figure engine: bars, columns, lines, matrix, funnel, flow, gantt, scatter, custom
wf.js             workflow diagrams: the wet/dry swimlane, the DBTL attachment ring,
                  the measurement ladder, the failure taxonomy
data/meta.js      site metadata, tab order, and the one row per team every page reads from
data/overview.js  the comparative analysis
data/compare.js   the side-by-side tables
data/toolbox.js   the dry-lab tool extraction: 23 capabilities x 10 teams
data/next.js      the 2027 transfer method: idea screen, gate sheet, calendar
data/figs.js      the figures lifted from each team's wiki, with our reading of each
data/t-<team>.js  one page module per team
assets/wiki/      30 overview figures downloaded from the ten wikis, unmodified, CC BY 4.0
notes/            the raw working notes each page was written from, one file per team
```

## The figures

`assets/wiki/` holds thirty figures downloaded from the ten team wikis on 22 November 2026 and
stored here unmodified, so the site does not depend on anyone else's CDN. iGEM team wiki content is
published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — nine of the ten wikis
state this on the page itself; UAlberta's carries no statement we could find, and its figure is used
on the same terms. Every figure on the site names the team and links to the page it came from.
The titles and captions next to them are **ours**: a reading of what the figure shows, not the
team's own caption. Any team who would rather a figure were removed can open an issue here.

Where a team drew no overview figure of their own, the wet/dry swimlane at the top of their page is
our drawing of the same thing.

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
