/* site metadata, tab order, footer */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  /* One row per team. The overview page, the comparison tables and the tab bar
     all read this list, so a team's facts live in exactly one place. */
  PD.teams = [
    {
      id: 'stanford', slug: 'stanford-university', name: 'Stanford University',
      project: 'Kele Patch', country: { en: 'United States', zh: '美國' }, flag: '🇺🇸',
      village: { en: 'Therapeutics', zh: '治療' },
      award: { en: 'Grand Prize', zh: '首獎' }, rank: 1,
      one: {
        en: 'mRNA sensors that only switch on inside a keloid fibroblast, delivered by microneedle patch.',
        zh: '只在瘢痕纖維母細胞內啟動的 mRNA 感測器，以微針貼片遞送。'
      },
      chassis: 'HEK293 · primary dermal / keloid fibroblasts',
      assembly: { en: 'NEB HiFi, 20 bp overhangs', zh: 'NEB HiFi，20 bp 重疊' },
      dry: { en: 'scRNA-seq screen + ViennaRNA + fitted ODEs + FEA + U-Net', zh: '單細胞篩選＋ViennaRNA＋擬合 ODE＋有限元＋U-Net' },
      wetN: 5, dryN: 6, hw: true, sw: true
    },
    {
      id: 'ucas', slug: 'ucas-china', name: 'UCAS-China',
      project: 'PARCEL', country: { en: 'China', zh: '中國' }, flag: '🇨🇳',
      village: { en: 'Therapeutics', zh: '治療' },
      award: { en: '1st Runner-up', zh: '第二名' }, rank: 2,
      one: {
        en: 'A protein, not a lipid, as the mRNA carrier: ELP phase separation grips RNA and the endosome\'s own acid releases it.',
        zh: '用蛋白質而非脂質當 mRNA 載體：ELP 相分離抓住 RNA，內體自身的酸性負責釋放。'
      },
      chassis: 'E. coli BL21(DE3) · HEK293-T',
      assembly: { en: 'Synthesised constructs, IMAC under 8 M urea', zh: '合成構建體，8 M 尿素下 IMAC' },
      dry: { en: 'Martini 3 MD + free-energy CAPE + MPPD/Fluent + Gillespie + PK/PD + CellFlow', zh: 'Martini 3 MD＋自由能 CAPE＋MPPD/Fluent＋Gillespie＋PK/PD＋CellFlow' },
      wetN: 7, dryN: 6, hw: true, sw: true
    },
    {
      id: 'princeton', slug: 'princeton', name: 'Princeton',
      project: 'SymPleco', country: { en: 'United States', zh: '美國' }, flag: '🇺🇸',
      village: { en: 'Foundational Advance', zh: '基礎推進' },
      award: { en: '2nd Runner-up', zh: '第三名' }, rank: 3,
      one: {
        en: 'M13 phage as a covalently functionalised sequestration sponge, plus a binder-design app for everyone else.',
        zh: '把 M13 噬菌體做成共價修飾的吸附海綿，並為所有人做了一個結合蛋白設計工具。'
      },
      chassis: 'E. coli ER2738 (F⁺)',
      assembly: { en: 'InFusion, Plasmidsaurus 100 % match gate', zh: 'InFusion，Plasmidsaurus 100% 相符為門檻' },
      dry: { en: 'Phage-refinery ODE model (52 tests) + SymPlify (BindCraft / RFdiffusion3 / PeSTo)', zh: '噬菌體精煉 ODE 模型（52 項測試）＋SymPlify（BindCraft／RFdiffusion3／PeSTo）' },
      wetN: 4, dryN: 2, hw: true, sw: true
    },
    {
      id: 'heidelberg', slug: 'heidelberg', name: 'Heidelberg',
      project: 'VOYAGE', country: { en: 'Germany', zh: '德國' }, flag: '🇩🇪',
      village: { en: 'Foundational Advance', zh: '基礎推進' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 4,
      one: {
        en: 'Gas vesicles turned into a programmable acoustic interface: ultrasound both reads cells and moves them.',
        zh: '把氣囊變成可程式化的聲學介面：超音波既能讀取細胞，也能移動細胞。'
      },
      chassis: 'HEK293T · E. coli BL21-AI (Serratia GV cluster)',
      assembly: { en: 'Rational design + error-prone PCR + generative design', zh: '理性設計＋易錯 PCR＋生成式設計' },
      dry: { en: 'All-atom MD (CHARMM36) + umbrella sampling + LigandMPNN/Boltz-2/RFdiffusion3 + GVSAM', zh: '全原子 MD（CHARMM36）＋傘形取樣＋LigandMPNN/Boltz-2/RFdiffusion3＋GVSAM' },
      wetN: 3, dryN: 3, hw: true, sw: true
    },
    {
      id: 'cornell', slug: 'cornell', name: 'Cornell',
      project: 'Klothos', country: { en: 'United States', zh: '美國' }, flag: '🇺🇸',
      village: { en: 'Fashion & Cosmetics', zh: '時尚與化妝品' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 5,
      one: {
        en: 'A gated probiotic spun into alginate nanofibre by a home-built coaxial electrospinner.',
        zh: '以自製同軸靜電紡絲機把受控益生菌紡進海藻酸鈉奈米纖維。'
      },
      chassis: 'E. coli DH5α → BL21(DE3) → SHuffle (planned Nissle 1917)',
      assembly: { en: 'NEB HiFi into pUC19, blue/white screening', zh: 'NEB HiFi 接入 pUC19，藍白篩選' },
      dry: { en: 'Six chained models: ODE → Hill → Michaelis–Menten → Langmuir → depletion → STRING/Netflux', zh: '六個串接模型：ODE→Hill→MM→Langmuir→耗竭→STRING/Netflux' },
      wetN: 6, dryN: 6, hw: true, sw: false
    },
    {
      id: 'lyon', slug: 'lyon', name: 'LYON',
      project: 'BioThetis', country: { en: 'France', zh: '法國' }, flag: '🇫🇷',
      village: { en: 'Bioremediation', zh: '生物復育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 6,
      one: {
        en: 'Capture TFA, the smallest PFAS, on cellulose-anchored binders — after the model said degradation would not work.',
        zh: '在模型判定降解行不通之後，改以錨定於纖維素的結合蛋白捕捉最小的 PFAS：TFA。'
      },
      chassis: 'E. coli BL21(DE3) (TOP10 for plasmid prep)',
      assembly: { en: 'One backbone, one site pair: pET-29b(+), NdeI/XhoI', zh: '一個骨架、一對切位：pET-29b(+)、NdeI/XhoI' },
      dry: { en: 'Packed-bed PDE filter model + Protenix + BoltzGen + Lumry–Eyring', zh: '填充床 PDE 濾床模型＋Protenix＋BoltzGen＋Lumry–Eyring' },
      wetN: 13, dryN: 5, hw: true, sw: false
    },
    {
      id: 'nus', slug: 'nus-singapore', name: 'NUS-Singapore',
      project: 'ORCHID', country: { en: 'Singapore', zh: '新加坡' }, flag: '🇸🇬',
      village: { en: 'Biomanufacturing', zh: '生物製造' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 7,
      one: {
        en: 'Multiplexed intracellular biosensors so a fermentation can be corrected before the stress shows up in the titre.',
        zh: '多工細胞內生物感測器，讓發酵在壓力反映到產量之前就能被修正。'
      },
      chassis: 'S. cerevisiae BY4741',
      assembly: { en: 'Gibson (NEBuilder HiFi) onto one frozen ARS/CEN backbone', zh: 'Gibson（NEBuilder HiFi）接到一個凍結不動的 ARS/CEN 骨架' },
      dry: { en: 'One Hill fit per curve, linear unmixing, SABLe MLP 128-128-64', zh: '每條曲線一個 Hill 擬合、線性解混、SABLe MLP 128-128-64' },
      wetN: 3, dryN: 5, hw: true, sw: true
    },
    {
      id: 'ualberta', slug: 'ualberta', name: 'UAlberta',
      project: 'gleyeco', country: { en: 'Canada', zh: '加拿大' }, flag: '🇨🇦',
      village: { en: 'Therapeutics', zh: '治療' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 8,
      one: {
        en: 'Engineered galectins anchor a drug to inflamed eye tissue, held there by a hydrogel contact lens.',
        zh: '以改造的 galectin 把藥物錨定在發炎的眼表，再用水膠隱形眼鏡留住它。'
      },
      chassis: 'E. coli SHuffle T7 Express',
      assembly: { en: '15 architectures in pET-28b(+), each built twice', zh: '15 種架構於 pET-28b(+)，每種各做兩版' },
      dry: { en: 'GLARE → InSiGHT → VOIR → I-SPY → HOPE; 117,732 FoldX mutants → 10', zh: 'GLARE→InSiGHT→VOIR→I-SPY→HOPE；117,732 個 FoldX 突變→10 個' },
      wetN: 5, dryN: 5, hw: true, sw: true
    },
    {
      id: 'ucnz', slug: 'ucnz', name: 'UCNZ',
      project: 'NanoBrew', country: { en: 'New Zealand', zh: '紐西蘭' }, flag: '🇳🇿',
      village: { en: 'Biomanufacturing', zh: '生物製造' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 9,
      one: {
        en: 'Brewers\' spent grain towards nanocellulose with a xylanase and a resurrected ancestral endoglucanase - after the secretion tag failed.',
        zh: '用木聚醣酶與復原的祖先內切葡聚醣酶把啤酒糟推向奈米纖維素——在分泌標籤失效之後。'
      },
      chassis: 'E. coli (YebF fusion, pET Amp/Kan)',
      assembly: { en: 'None - six constructs ordered pre-cloned from Twist', zh: '完全不組裝——六個構建體直接向 Twist 訂購已接好的質體' },
      dry: { en: 'Deliberately thin: AlphaFold 3 + PyMOL RMSD as a pre-ordering gate', zh: '刻意從簡：AlphaFold 3＋PyMOL RMSD 作為下單前的門檻' },
      wetN: 5, dryN: 1, hw: true, sw: false
    },
    {
      id: 'uottawa', slug: 'uottawa', name: 'UOttawa',
      project: 'Nulfur', country: { en: 'Canada', zh: '加拿大' }, flag: '🇨🇦',
      village: { en: 'Bioremediation', zh: '生物復育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 10,
      one: {
        en: 'The 4S desulfurization pathway tuned in Pseudomonas putida, with an agentic AI proposing the enzyme mutations.',
        zh: '在 Pseudomonas putida 中調校 4S 脫硫路徑，並由代理式 AI 提出酵素突變。'
      },
      chassis: 'Pseudomonas putida KT2440 · E. coli',
      assembly: { en: 'Golden Gate on a sanitised pBBR1MCS-2; 24-member library, 8 built', zh: '在淨化過的 pBBR1MCS-2 上做 Golden Gate；24 member 設計庫，組出 8 個' },
      dry: { en: 'Cofactor agentic harness, FoldX/ThermoMPNN, consortium model, TEA/LCA', zh: 'Cofactor 代理式框架、FoldX/ThermoMPNN、菌群模型、TEA/LCA' },
      wetN: 4, dryN: 4, hw: false, sw: true
    }
  ];

  PD.meta = {
    siteTitle: { en: 'iGEM 2026 Top 10 Workflow Atlas', zh: 'iGEM 2026 前十名工作流程圖譜' },
    updated: '2026-11-21',
    repo: 'https://github.com/Timmy97-TW/igem-2026-top10-workflows',
    tabs: [
      { id: 'overview', label: { en: 'Overview', zh: '總覽' } },
      { id: 'compare',  label: { en: 'Side by side', zh: '橫向比較' } },
      { id: 'toolbox',  label: { en: 'Dry-lab toolbox', zh: '乾式工具箱' } },
      { id: 'next',     label: { en: 'Take it to 2027', zh: '帶到 2027' } }
    ].concat(PD.teams.map(function (t) {
      return { id: t.id, label: { en: t.name, zh: t.name }, team: true };
    })),
    footer: {
      links: [
        { t: { en: 'GitHub repository', zh: 'GitHub 原始碼' }, u: 'https://github.com/Timmy97-TW/igem-2026-top10-workflows' },
        { t: { en: 'Official 2026 results', zh: '2026 官方成績' }, u: 'https://competition.igem.org/results/2026' },
        { t: { en: 'Protein Design Atlas', zh: '蛋白質設計圖譜' }, u: 'https://timmy97-tw.github.io/GEMS-ProteinDesign/' },
        { t: { en: 'Paris Jamboree report', zh: '巴黎 Jamboree 報告' }, u: 'https://timmy97-tw.github.io/igem-paris-2026-reports/' },
        { t: { en: 'iGEM', zh: 'iGEM 官網' }, u: 'https://igem.org/' }
      ],
      note: {
        en: 'A workflow study of the ten teams named to the **Top 10 Undergraduate** list at the iGEM 2026 Grand Jamboree, compiled by **GEMS Research (Taiwan)** on 21 November 2026. Everything here is read from each team\'s own public 2026 wiki and the official results page; nothing was measured by us and no result on this site is ours. Each team page links to the wiki it was read from. Where a number appears it is the team\'s own number; where a judgement appears — what we think a workflow does well, what we would copy — it is labelled as ours and can be disagreed with. Figures reproduced from a team\'s wiki are unmodified, credited to that team, and used under the Creative Commons Attribution 4.0 licence that nine of the ten wikis state on the page itself; UAlberta\'s wiki carries no licence statement we could find, and that figure is used on the same terms as the rest. Any team who would rather a figure were removed can open an issue on the repository and we will take it down. Not affiliated with, or endorsed by, iGEM or any team named here.',
        zh: '本站是對 iGEM 2026 Grand Jamboree **大學部前十名**十支團隊的工作流程研究，由 **GEMS Research（台灣）** 於 2026 年 11 月 21 日彙編。所有內容都讀自各隊 2026 年公開 wiki 與官方成績頁；我們沒有量測任何數據，本站也沒有任何結果屬於我們。每個團隊頁都附上其 wiki 連結。文中出現的數字都是該隊自己的數字；文中出現的判斷——我們認為某個流程哪裡做得好、我們會抄哪一段——都標示為我們的看法，歡迎不同意。轉載自各隊 wiki 的圖片均未經修改、標註該隊出處，並依十個 wiki 中有九個在頁面上自行聲明的「創用 CC 姓名標示 4.0」授權使用；UAlberta 的 wiki 我們找不到授權聲明，該圖以與其餘相同的條件使用。任何團隊若希望撤下某張圖，可在本專案 repo 開 issue，我們會移除。本站與 iGEM 及文中任何團隊均無隸屬關係，亦未經其背書。'
      }
    }
  };
})(window);
