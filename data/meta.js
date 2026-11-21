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

  /* ------------------------------------------------------------------
     Overgraduate section. Same row shape as PD.teams above, so the
     overview, the comparison tables and the tab bar read either list
     without knowing which division they are in.
     Only the first two places are published in order; iGEM lists the
     remaining eight alphabetically, and so do we.
     ------------------------------------------------------------------ */
  PD.teamsOG = [
    {
      id: 'delft', slug: 'tu-delft', name: 'TU Delft',
      project: 'MOSAIC', country: { en: 'Netherlands', zh: '荷蘭' }, flag: '🇳🇱',
      village: { en: 'Biomanufacturing', zh: '生物製造' },
      award: { en: 'Grand Prize', zh: '首獎' }, rank: 1,
      one: {
        en: 'One elastin-like protein backbone, produced in E. coli, carrying whichever implant-coating function the patient needs.',
        zh: '一條在大腸桿菌中生產的類彈性蛋白骨架，掛上該名病人需要的那種植入物塗層功能。'
      },
      chassis: 'E. coli · titanium and PDMS surfaces · bovine stem cells',
      assembly: { en: 'MoClo Golden Gate: nine inserts in one reaction', zh: 'MoClo Golden Gate：九個插入片段一次反應' },
      dry: { en: 'XGBoost LCST model + CALVADOS 2 MD + omics motif selection + SuperPro plant + MOSAIC Designer', zh: 'XGBoost LCST 模型＋CALVADOS 2 分子動力學＋組學選motif＋SuperPro 產線＋MOSAIC Designer' },
      wetN: 5, dryN: 5, hw: false, sw: true
    },
    {
      id: 'wageningen', slug: 'wageningenur', name: 'WageningenUR',
      project: 'Triton', country: { en: 'Netherlands', zh: '荷蘭' }, flag: '🇳🇱',
      village: { en: 'Bioremediation', zh: '生物復育' },
      award: { en: '1st Runner-up', zh: '第二名' }, rank: 2,
      one: {
        en: 'Capture, degrade and sense TFA, the shortest forever chemical — and report exactly how far each of the three is from working.',
        zh: '捕捉、降解並感測最短的永久化學物質 TFA——並且明確交代三者各自距離「能用」還有多遠。'
      },
      chassis: 'E. coli BL21 · K. sucrofermentans (bacterial cellulose) · P. putida',
      assembly: { en: 'Restriction–ligation abandoned for Golden Gate after it proved too lossy', zh: '限制酶接合因損耗過高而改用 Golden Gate' },
      dry: { en: 'DISARM riboswitch retargeting (MAWS + AMBER + RNAfold) + PIGEON (ESM3 + ridge + Boltz-2, 50 rounds)', zh: 'DISARM 核開關再導向（MAWS＋AMBER＋RNAfold）＋PIGEON（ESM3＋脊迴歸＋Boltz-2，50 輪）' },
      wetN: 3, dryN: 2, hw: false, sw: true
    },
    {
      id: 'athens', slug: 'athens', name: 'Athens',
      project: 'ApiconIASIS', country: { en: 'Greece', zh: '希臘' }, flag: '🇬🇷',
      village: { en: 'Conservation', zh: '保育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 3,
      one: {
        en: 'Mine 165 pathogen genomes for the endolysin a phage already evolved against it, then publish the kill law that says yield was never the problem.',
        zh: '從 165 個病原基因體中挖出噬菌體早已演化出的內溶素，再公開那條說明「產量從來不是瓶頸」的殺菌動力學。'
      },
      chassis: 'E. coli BL21(DE3) → M. plutonius (non-pathogenic), L. apis, B. mellis',
      assembly: { en: 'Four constructs: two leads bare and fused to the AMP RR12', zh: '四個構建體：兩個先導各自裸體與融合抗菌肽 RR12' },
      dry: { en: '165-genome prophage screen + Pareto redesign (ThermoMPNN/ESM-2/NSGA-II) + Emax PK model + 105 L flowsheet', zh: '165 基因體前噬菌體篩選＋Pareto 重設計（ThermoMPNN/ESM-2/NSGA-II）＋Emax 藥動模型＋105 L 製程流程' },
      wetN: 4, dryN: 3, hw: false, sw: false
    },
    {
      id: 'eth', slug: 'eth-zurich', name: 'ETH-Zurich',
      project: 'preCISe', country: { en: 'Switzerland', zh: '瑞士' }, flag: '🇨🇭',
      village: { en: 'Foundational Advance', zh: '基礎推進' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 4,
      one: {
        en: 'A bacterial molecular syringe retargeted by clicking a binder onto its tail fibre an hour before use.',
        zh: '一支細菌分子針筒，使用前一小時把結合蛋白接到尾絲上就能改變標靶。'
      },
      chassis: 'E. coli (dual-plasmid PVC producer) · HEK293T preCISion reporter line',
      assembly: { en: 'No cloning on the retargeting path: SpyTag003/SpyCatcher003 in vitro, 1 h at room temperature', zh: '改標靶這條路完全不用選殖：SpyTag003／SpyCatcher003 體外室溫一小時' },
      dry: { en: 'deCISion (CSPA/HPA/SAbDab → construct) + OpenSplitProtein (in-browser split-site ranking with a 2,000-redraw benchmark)', zh: 'deCISion（CSPA／HPA／SAbDab→構建體）＋OpenSplitProtein（瀏覽器內切點排序，2,000 次重抽基準）' },
      wetN: 5, dryN: 2, hw: false, sw: true
    },
    {
      id: 'frankfurt', slug: 'gu-frankfurt', name: 'GU Frankfurt',
      project: 'HIDE', country: { en: 'Germany', zh: '德國' }, flag: '🇩🇪',
      village: { en: 'Therapeutics', zh: '治療' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 5,
      one: {
        en: 'Hide the mismatched HLAs instead of switching off the immune system: a synNotch receptor wired to an shRNA cassette.',
        zh: '把不相合的 HLA 藏起來，而不是關掉免疫系統：synNotch 受體串上 shRNA 卡匣。'
      },
      chassis: 'CD4+ T cell by design; every component tested in HEK293T',
      assembly: { en: 'NEBuilder HiFi, chosen against iGEM’s own RFC10 / Type IIS standards and the reason written down', zh: 'NEBuilder HiFi，刻意不用 iGEM 的 RFC10／Type IIS 標準，並寫下理由' },
      dry: { en: 'HUSH: open-source RNAi designer for polymorphic families — web app, CLI, shell and an MCP server, Bowtie against RefSeq', zh: 'HUSH：針對高多型性家族的開源 RNAi 設計器——網頁、CLI、終端與 MCP 伺服器，以 Bowtie 比對 RefSeq' },
      wetN: 3, dryN: 1, hw: false, sw: true
    },
    {
      id: 'kaust', slug: 'kaust-ksa', name: 'KAUST-KSA',
      project: 'SHIHAB', country: { en: 'Saudi Arabia', zh: '沙烏地阿拉伯' }, flag: '🇸🇦',
      village: { en: 'Space', zh: '太空' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 6,
      one: {
        en: 'Carry the production strain, not the finished drug: tardigrade Dsup for radiation, and a 2.2 kg bioreactor to grow it in.',
        zh: '帶生產菌株上太空，而不是帶成藥：用水熊蟲 Dsup 抗輻射，再用一台 2.2 公斤的生物反應器把它養起來。'
      },
      chassis: 'B. subtilis 168 · P. pastoris · S. cerevisiae (13 strains)',
      assembly: { en: 'Genomic integration of Dsup, deliberately single-copy rather than multicopy plasmid', zh: 'Dsup 基因體整合，刻意採單一拷貝而非多拷貝質體' },
      dry: { en: 'Repaired anaerobic iBsu1147 GEM + dynamic induction models + COMSOL CFD under lunar and transit gravity', zh: '修好的厭氧 iBsu1147 代謝模型＋動態誘導模型＋月面與航程重力下的 COMSOL 流場模擬' },
      wetN: 5, dryN: 3, hw: true, sw: false
    },
    {
      id: 'marburg', slug: 'marburg', name: 'Marburg',
      project: 'CLiPPR', country: { en: 'Germany', zh: '德國' }, flag: '🇩🇪',
      village: { en: 'Foundational Advance', zh: '基礎推進' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 7,
      one: {
        en: 'Give the chloroplast the dynamic control microbes already have: a nuclear PPR protein switching a plastid gene through a synthetic 5′ UTR.',
        zh: '把微生物早就有的動態調控給葉綠體：由核內 PPR 蛋白透過合成 5′ UTR 開關一個質體基因。'
      },
      chassis: 'Spinach chloroplast cell-free system · C. reinhardtii UVM4 · N. benthamiana',
      assembly: { en: 'GRASP modular Golden Gate, ported to C. reinhardtii codons by hand and then automated', zh: 'GRASP 模組化 Golden Gate，先手工移植到 C. reinhardtii 的密碼子，再自動化' },
      dry: { en: 'PPR-opt (Designer + Inventory, Colab) — codon-optimises GRASP modules and re-derives the Golden Gate overhangs', zh: 'PPR-opt（Designer＋Inventory，Colab）——為 GRASP 模組做密碼子最佳化並重新推導 Golden Gate 黏端' },
      wetN: 3, dryN: 1, hw: false, sw: true
    },
    {
      id: 'muenster', slug: 'muenster-university', name: 'Muenster-University',
      project: 'P.A.C. Immunity', country: { en: 'Germany', zh: '德國' }, flag: '🇩🇪',
      village: { en: 'Agriculture', zh: '農業' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 8,
      one: {
        en: 'Stop screening for resistance and design it: a plant immune sensor unblocked by the pathogen’s own protease.',
        zh: '不再篩選抗性，而是設計抗性：用病原自己的蛋白酶解開植物免疫感測器的鎖。'
      },
      chassis: 'E. coli BL21(DE3) screen · N. benthamiana · A. thaliana and crop NLRs',
      assembly: { en: 'Gibson into pET28b / pACYCDuet-1, then PaqCI Golden Gate for the blocker series', zh: 'Gibson 接入 pET28b／pACYCDuet-1，阻斷子系列再用 PaqCI Golden Gate' },
      dry: { en: 'ProTEUS: RFdiffusion3 → LigandMPNN → AlphaFold3, ranked by the geometry of catalysis rather than by binding', zh: 'ProTEUS：RFdiffusion3→LigandMPNN→AlphaFold3，以催化幾何而非結合力排序' },
      wetN: 4, dryN: 1, hw: false, sw: false
    },
    {
      id: 'toronto', slug: 'toronto', name: 'Toronto',
      project: 'PetaBite', country: { en: 'Canada', zh: '加拿大' }, flag: '🇨🇦',
      village: { en: 'Bioremediation', zh: '生物復育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 9,
      one: {
        en: '300 million candidate PETases out of public sequencing data, and an evaluation protocol that says their own model does not beat sequence length yet.',
        zh: '從公開定序資料裡撈出三億個候選 PETase，再用一套評估協議說明自家模型目前還贏不過序列長度。'
      },
      chassis: 'E. coli BL21(DE3) with INP surface display · copper-loaded PET mesh',
      assembly: { en: 'BsmBI Golden Gate into a display vector whose scar lands inside the linker', zh: 'BsmBI Golden Gate 接入展示載體，接縫刻意落在連接子裡' },
      dry: { en: 'PETadex (27.3 M datasets → 307 M sequences) + PlasticESM (ESM-C LoRA) + LOBSTER library optimiser', zh: 'PETadex（2,730 萬組資料→3.07 億序列）＋PlasticESM（ESM-C LoRA）＋LOBSTER 文庫最佳化' },
      wetN: 2, dryN: 3, hw: true, sw: true
    },
    {
      id: 'uzurich', slug: 'uzurich', name: 'UZurich',
      project: 'SeisMIC', country: { en: 'Switzerland', zh: '瑞士' }, flag: '🇨🇭',
      village: { en: 'Conservation', zh: '保育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 10,
      one: {
        en: 'Bind alpine soil with bacterial calcite — and publish the bacteria-free control that precipitated just as much.',
        zh: '用細菌方解石黏住高山土壤——並且公開那組沉澱量一樣多的無菌對照。'
      },
      chassis: 'E. coli (constructs) · S. pasteurii (wild type and evolved G1/G2)',
      assembly: { en: 'Replicating plasmids rather than genomic integration, chosen to buy more DBTL cycles', zh: '用複製型質體而非基因體整合，刻意換取更多 DBTL 循環' },
      dry: { en: 'Slope stability (Factor of Safety + roots) + reactive transport + nationwide MICP feasibility + expected annual damage', zh: '坡面穩定（安全係數＋根系）＋反應輸送＋全國 MICP 可行性＋年期望損失' },
      wetN: 3, dryN: 4, hw: false, sw: false
    }
  ];

  /* ------------------------------------------------------------------ *
   * High School Top 10, iGEM 2026.                                      *
   * Grand Prize first, 1st Runner-up second, then the remaining eight   *
   * alphabetically — the order the official results page uses.          *
   * ------------------------------------------------------------------ */
  PD.teamsHS = [
    {
      id: 'lambert', slug: 'lambert-ga', name: 'Lambert-GA',
      project: 'SWARM', country: { en: 'United States', zh: '美國' }, flag: '🇺🇸',
      village: { en: 'Conservation', zh: '保育' },
      award: { en: 'Grand Prize', zh: '總冠軍' }, rank: 1,
      one: {
        en: 'Attack both halves of the bee problem — a minibinder against the virus, multiplexed RNAi against the mite — and size every claim to the assay that produced it.',
        zh: '同時處理蜜蜂問題的兩半——用 minibinder 對病毒、用多重 RNAi 對蟎——並讓每個主張的大小剛好等於產生它的那個實驗。'
      },
      chassis: 'E. coli (reporter + expression) · Sf9 insect cells (RNAi) · external BLI at Adaptyv Bio',
      assembly: { en: 'HiFi assembly of the reporter plasmid, published as unverified: four colonies pooled, no diagnostic digest or sequencing reported', zh: '報告質體用 HiFi 組裝，並公開寫明未經驗證：四個菌落混合，未報告任何診斷酶切或定序' },
      dry: { en: 'PRINCE epitope-patch ranker, validated on a homology-controlled split (6,937 interfaces, 1,549 antigen clusters) + dosing, RNAi and a six-year colony epidemiology model', zh: 'PRINCE 抗原表位patch排序器，以同源性受控切分驗證（6,937 個界面、1,549 個抗原分群）＋劑量、RNAi 與六年蜂群流病模型' },
      wetN: 2, dryN: 4, hw: true, sw: true
    },
    {
      id: 'jss', slug: 'hongkong-jss', name: 'HongKong-JSS',
      project: 'MerMAID', country: { en: 'Hong Kong', zh: '香港' }, flag: '🇭🇰',
      village: { en: 'Agriculture', zh: '農業' },
      award: { en: '1st Runner-up', zh: '亞軍' }, rank: 2,
      one: {
        en: 'A mercury biosensor with a real dose–response across five matched runs, and a sentence saying that 1 ppb is the lowest concentration tested, not a validated detection limit.',
        zh: '一個在五組配對實驗中都做出真實劑量反應的汞生物感測器，並附上一句話：1 ppb 是測過的最低濃度，不是已驗證的偵測極限。'
      },
      chassis: 'E. coli, MerR / pMer driving mRFP1e',
      assembly: { en: 'Design 429 built and sequence-verified; an RNA-switch route dropped, with the untested assumption behind it named', zh: '建出並定序確認 Design 429；放棄 RNA 開關路線，並指名背後那個未經測試的假設' },
      dry: { en: 'Dose–response fitting over 0.005–5 µM across five matched runs; Spearman ρ = 1.00 between the two pellet readouts', zh: '0.005–5 µM、五組配對實驗的劑量反應擬合；兩種菌體沉澱讀值之間 Spearman ρ = 1.00' },
      wetN: 3, dryN: 2, hw: true, sw: false
    },
    {
      id: 'eton', slug: 'eton-college-uk', name: 'Eton-College-UK',
      project: 'ProteaSign', country: { en: 'United Kingdom', zh: '英國' }, flag: '🇬🇧',
      village: { en: 'Diagnostics', zh: '診斷' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 3,
      one: {
        en: 'Read a wound electrochemically: tethered peptide probes cut by MMP-9, under a model that publishes each of its checks as either a pass or a caveat.',
        zh: '用電化學讀傷口：被 MMP-9 切斷的繫鏈肽探針，底下那個模型把自己的每一項檢查都公布為「通過」或「有保留」。'
      },
      chassis: 'E. coli sfGFP reporter constructs; bench work hosted at Greenwich and KCL',
      assembly: { en: 'Reporter proteins quantified by Ni-NTA depletion rather than by a cleavage assay', zh: '報告蛋白以 Ni-NTA 耗竭法定量，而不是用切割試驗' },
      dry: { en: '10,472 confirmed cleavage windows across 7 proteases; an exact square-wave voltammetry solution with 10 automated checks', zh: '橫跨 7 種蛋白酶的 10,472 個已確認切割窗口；一個方波伏安法的精確解，配 10 項自動化檢查' },
      wetN: 2, dryN: 4, hw: true, sw: true
    },
    {
      id: 'gcgs', slug: 'gcgs', name: 'GCGS',
      project: 'Dual-response EcN', country: { en: 'China', zh: '中國' }, flag: '🇨🇳',
      village: { en: 'Diagnostics', zh: '診斷' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 4,
      one: {
        en: 'An AND gate that fires only where cystic fibrosis mucus is both iron-starved and full of Pseudomonas signal — characterised one module at a time.',
        zh: '一個只在囊狀纖維化黏液「缺鐵」且「充滿假單胞菌訊號」時才啟動的 AND 閘——而且是一個模組一個模組分別特性化的。'
      },
      chassis: 'E. coli Nissle 1917 (therapeutic chassis) · BL21(DE3) for enzyme production',
      assembly: { en: 'Three modules characterised separately, then assembled; the improved part RhlR-SsrA-ASV + P_rhl(LR) came out of a four-tag screen', zh: '三個模組分別特性化後再組裝；改良元件 RhlR-SsrA-ASV ＋ P_rhl(LR) 出自一次四種標籤的篩選' },
      dry: { en: 'Dose–response fitting of the assembled gate: C4-HSL LOD 53.1 nM at R² = 0.894, plus a cross-reactivity panel against other AHLs', zh: '對組裝後閘的劑量反應擬合：C4-HSL 偵測極限 53.1 nM、R² = 0.894，另有對其他 AHL 的交叉反應測試' },
      wetN: 4, dryN: 2, hw: false, sw: false
    },
    {
      id: 'gems', slug: 'gems-taiwan', name: 'GEMS-Taiwan',
      project: 'ReLEAF', country: { en: 'Taiwan', zh: '台灣' }, flag: '🇹🇼',
      village: { en: 'Biomanufacturing', zh: '生物製造' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 5,
      one: {
        en: 'Move the sensing out of the cell: electronics and a forecast decide when to make ACC deaminase, and green light tells the bacteria inside a contained reactor.',
        zh: '把感測從細胞裡搬出來：由電子元件與預報決定何時製造 ACC 去胺酶，再用綠光去告訴密閉反應器裡的細菌。'
      },
      chassis: 'B. subtilis WB800 (secretion-deficient-protease host), CcaSR green-light optogenetics',
      assembly: { en: 'A first design that released DesK–DesR sensing bacteria into soil was abandoned on expert advice, over containment and sensing precision', zh: '最初那個把帶 DesK–DesR 感測的細菌釋放到土壤的設計，在專家建議下因圍阻與感測精度而放棄' },
      dry: { en: 'AIoT stress prediction from leaf sensors plus weather forecasts, a digital twin of the rig, and MD on BoPEP4', zh: '以葉片感測器加氣象預報做 AIoT 逆境預測、該設備的數位孿生，以及 BoPEP4 的分子動力學' },
      wetN: 3, dryN: 3, hw: true, sw: true
    },
    {
      id: 'ghcis', slug: 'ghcis', name: 'GHCIS',
      project: 'HoldeX', country: { en: 'China', zh: '中國' }, flag: '🇨🇳',
      village: { en: 'Conservation', zh: '保育' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 6,
      one: {
        en: 'Three resistance genes, three colours on filter paper — and a summary that refuses to call any of it a detection limit.',
        zh: '三個抗藥性基因、濾紙上三種顏色——而它的總結拒絕把其中任何一項稱為偵測極限。'
      },
      chassis: 'E. coli cell-free (PURE-style extract) on Whatman filter paper; DH5α and BL21(DE3) for cloning and reporters',
      assembly: { en: 'Nine first-round switches gave no separation with or without trigger; redesigned, and MCR1_4 / NDM1_4 / KPC2_4 were kept', zh: '第一輪九個開關在有無觸發 RNA 下都分不開；重新設計後留下 MCR1_4／NDM1_4／KPC2_4' },
      dry: { en: 'ViennaRNA + Python switch design, then ARGUS: RGB → CIELAB → CIEDE2000 colour difference on the paper reactions', zh: 'ViennaRNA ＋ Python 設計開關，再用 ARGUS：把紙上反應從 RGB 轉 CIELAB、算 CIEDE2000 色差' },
      wetN: 4, dryN: 2, hw: true, sw: true
    },
    {
      id: 'hangzhou', slug: 'hangzhoufourteenap', name: 'HangzhouFourteenAP',
      project: 'Dental biofilm glycosidases', country: { en: 'China', zh: '中國' }, flag: '🇨🇳',
      village: { en: 'Biomanufacturing', zh: '生物製造' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 7,
      one: {
        en: 'Two glycosidases with complementary linkage specificity, each proved specific against its own heat-inactivated control before anything was combined.',
        zh: '兩個鍵結專一性互補的糖苷酶，在任何東西被組合起來之前，各自先用自己的熱去活對照證明了專一性。'
      },
      chassis: 'E. coli Rosetta(DE3), pET-32a Trx-His fusions, on-bead enterokinase cleavage',
      assembly: { en: 'Four Gibson constructs; the 21aa peptide expressed and the 18aa peptide gave no detectable induced band, so the 18aa was dropped', zh: '四個 Gibson 構築；21aa 肽有表達，18aa 肽則測不到誘導後的條帶，因此棄用 18aa' },
      dry: { en: 'Structure → conservation → FoldX pipeline on CoGH66 (PDB 8IUB, 18 pocket residues, 12 mutants against a pre-declared threshold) — and the bench reversed its ranking', zh: '針對 CoGH66 的「結構→保守性→FoldX」管線（PDB 8IUB、18 個口袋殘基、12 個突變體對上事先宣告的門檻）——而實驗檯把它的排序翻轉了' },
      wetN: 3, dryN: 2, hw: false, sw: false
    },
    {
      id: 'hfi', slug: 'hfi', name: 'HFI',
      project: 'LYSERA', country: { en: 'China', zh: '中國' }, flag: '🇨🇳',
      village: { en: 'Therapeutics', zh: '治療' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 8,
      one: {
        en: 'Split one metabolic pathway across two bacteria, staple them together with SpyTag–SpyCatcher — then report that the stapling helped less than expected.',
        zh: '把一條代謝路徑拆給兩株細菌，用 SpyTag–SpyCatcher 把它們釘在一起——然後回報：釘在一起的幫助比預期小。'
      },
      chassis: 'E. coli Nissle 1917 ΔldcC, eCPX outer-membrane display',
      assembly: { en: 'Chassis knockout first (ldcC, to clear the endogenous background), then the binding module, then the split pathway', zh: '先做底盤剔除（ldcC，清掉內源背景），再做結合模組，最後才是拆開的代謝路徑' },
      dry: { en: 'NetLogo agent-based simulation of cluster formation, which predicted the free single cells the microscopy then found', zh: '用 NetLogo 做群聚形成的個體模擬，而它預測到的游離單細胞後來真的在顯微鏡下看到了' },
      wetN: 4, dryN: 2, hw: false, sw: false
    },
    {
      id: 'hkssc', slug: 'hkssc', name: 'HKSSC',
      project: 'Paraben esterase for food waste', country: { en: 'Hong Kong', zh: '香港' }, flag: '🇭🇰',
      village: { en: 'Food & Nutrition', zh: '食品與營養' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 9,
      one: {
        en: 'One enzyme, one question, one readout chosen on its merits: does prbA let E. coli grow in paraben that would otherwise stop it?',
        zh: '一個酵素、一個問題、一個經過理由挑選的讀值：prbA 能不能讓大腸桿菌在原本會擋住它的對羥基苯甲酸酯中生長？'
      },
      chassis: 'E. coli BL21(DE3) carrying prbA paraben esterase',
      assembly: { en: 'Three-arm MIC design — positive control, paraben-only negative control, and the transgenic arm', zh: '三組 MIC 設計——陽性對照、只加對羥基苯甲酸酯的陰性對照、以及轉基因組' },
      dry: { en: 'CFU standard curves built first, so enzyme activity could be normalised per viable cell rather than per OD', zh: '先建立 CFU 標準曲線，讓酵素活性能以每個存活細胞、而不是每單位 OD 做標準化' },
      wetN: 3, dryN: 1, hw: false, sw: false
    },
    {
      id: 'hkhs', slug: 'hongkong-hs', name: 'HongKong-HS',
      project: 'AmpliRen', country: { en: 'Hong Kong', zh: '香港' }, flag: '🇭🇰',
      village: { en: 'Diagnostics', zh: '診斷' },
      award: { en: 'Top 10', zh: '前十名' }, rank: 10,
      one: {
        en: 'Urinary miRNA for chronic kidney disease, amplified without an enzyme cascade: hybridisation chain reaction read in a cell-free system.',
        zh: '用尿液 miRNA 看慢性腎病，而放大不靠酵素級聯：在無細胞系統中讀出的雜交鏈反應。'
      },
      chassis: 'Cell-free expression with toehold switches; E. coli cloning hosts',
      assembly: { en: 'Two miRNA targets carried in parallel rather than one, so a failure in one route did not end the project', zh: '兩個 miRNA 標的並行而不是只做一個，使其中一條路線失敗時專案不會因此結束' },
      dry: { en: 'Toehold and HCR hairpin design, with the detection route documented as design-then-evidence on one page', zh: 'Toehold 與 HCR 髮夾設計，並把偵測路線以「先設計、後證據」的方式寫在同一頁上' },
      wetN: 3, dryN: 2, hw: false, sw: false
    }
  ];

  /* The two divisions, keyed by the prefix their page ids carry. */
  PD.divisions = [
    {
      key: 'ug', prefix: '', teams: PD.teams,
      label: { en: 'Undergrad', zh: '大學部' },
      sub: { en: 'GEMS Research · Undergraduate section', zh: 'GEMS Research · 大學部組' },
      head: { en: 'Top 10 Undergraduate', zh: '大學部前十名' }
    },
    {
      key: 'og', prefix: 'og-', teams: PD.teamsOG,
      label: { en: 'Overgrad', zh: '研究生部' },
      sub: { en: 'GEMS Research · Overgraduate section', zh: 'GEMS Research · 研究生部組' },
      head: { en: 'Top 10 Overgraduate', zh: '研究生部前十名' }
    },
    {
      key: 'hs', prefix: 'hs-', teams: PD.teamsHS,
      label: { en: 'High School', zh: '高中部' },
      sub: { en: 'GEMS Research · High School section', zh: 'GEMS Research · 高中部組' },
      head: { en: 'Top 10 High School', zh: '高中部前十名' }
    },
    {
      key: 'xd', prefix: 'x-', teams: [],
      label: { en: 'Across tiers', zh: '三層比較' },
      sub: { en: 'GEMS Research · All three sections', zh: 'GEMS Research · 三個組別合看' },
      head: { en: 'All three sections', zh: '三個組別' },
      tabs: [
        { id: 'x-tiers', label: { en: 'Three tiers', zh: '三層分析' } },
        { id: 'x-roadmap', label: { en: '2027 roadmap', zh: '2027 選題指南' } }
      ]
    }
  ];

  function tabsFor(div) {
    return [
      { id: div.prefix + 'overview', label: { en: 'Overview', zh: '總覽' } },
      { id: div.prefix + 'compare', label: { en: 'Side by side', zh: '橫向比較' } }
    ].concat(div.teams.map(function (t) {
      return { id: div.prefix + t.id, label: { en: t.name, zh: t.name }, team: true };
    }));
  }
  /* A division may ship its own tab list (the cross-tier one does); otherwise it is derived. */
  PD.divisions.forEach(function (d) { if (!d.tabs) d.tabs = tabsFor(d); });

  PD.meta = {
    siteTitle: { en: 'iGEM 2026 Top 10 Workflow Atlas', zh: 'iGEM 2026 前十名工作流程圖譜' },
    updated: '2026-11-22',
    repo: 'https://github.com/Timmy97-TW/igem-2026-top10-workflows',
    tabs: PD.divisions[0].tabs,
    footer: {
      links: [
        { t: { en: 'GitHub repository', zh: 'GitHub 原始碼' }, u: 'https://github.com/Timmy97-TW/igem-2026-top10-workflows' },
        { t: { en: 'Official 2026 results', zh: '2026 官方成績' }, u: 'https://competition.igem.org/results/2026' },
        { t: { en: 'Protein Design Atlas', zh: '蛋白質設計圖譜' }, u: 'https://timmy97-tw.github.io/GEMS-ProteinDesign/' },
        { t: { en: 'Paris Jamboree report', zh: '巴黎 Jamboree 報告' }, u: 'https://timmy97-tw.github.io/igem-paris-2026-reports/' },
        { t: { en: 'iGEM', zh: 'iGEM 官網' }, u: 'https://igem.org/' }
      ],
      /* The High School wording of the same note. */
      noteHS: {
        en: 'A workflow study of the ten teams named to the **Top 10 High School** list at the iGEM 2026 Grand Jamboree, compiled by **GEMS Research (Taiwan)** in November 2026. Everything here is read from each team\'s own public 2026 wiki and the official results page; nothing was measured by us and no result on this site is ours. **GEMS-Taiwan is our own team, and its page says so at the top** — read our judgements about it with that in mind, and read the team\'s own wiki rather than taking ours for it. Each team page links to the wiki it was read from. Where a number appears it is the team\'s own number; where a judgement appears it is labelled as ours and can be disagreed with. iGEM publishes only the first two places in order; the remaining eight are listed alphabetically here, as they are on the official results page. Not affiliated with, or endorsed by, iGEM or any team named here.',
        zh: '\u672c\u7ad9\u662f\u5c0d iGEM 2026 Grand Jamboree **\u9ad8\u4e2d\u90e8\u524d\u5341\u540d**\u5341\u652f\u5718\u968a\u7684\u5de5\u4f5c\u6d41\u7a0b\u7814\u7a76\uff0c\u7531 **GEMS Research\uff08\u53f0\u7063\uff09** \u65bc 2026 \u5e74 11 \u6708\u5f59\u7de8\u3002\u6240\u6709\u5167\u5bb9\u90fd\u8b80\u81ea\u5404\u968a 2026 \u5e74\u516c\u958b wiki \u8207\u5b98\u65b9\u6210\u7e3e\u9801\uff1b\u6211\u5011\u6c92\u6709\u91cf\u6e2c\u4efb\u4f55\u6578\u64da\uff0c\u672c\u7ad9\u4e5f\u6c92\u6709\u4efb\u4f55\u7d50\u679c\u5c6c\u65bc\u6211\u5011\u3002**GEMS-Taiwan \u662f\u6211\u5011\u81ea\u5df1\u7684\u5718\u968a\uff0c\u90a3\u4e00\u9801\u7684\u6700\u4e0a\u65b9\u6703\u76f4\u63a5\u5beb\u660e\u9019\u4ef6\u4e8b**\u2014\u2014\u8acb\u5e36\u8457\u9019\u4e00\u9ede\u8b80\u6211\u5011\u5c0d\u5b83\u7684\u5224\u65ad\uff0c\u4e5f\u8acb\u53bb\u8b80\u8a72\u968a\u81ea\u5df1\u7684 wiki\uff0c\u800c\u4e0d\u662f\u76f8\u4fe1\u6211\u5011\u7684\u8aaa\u6cd5\u3002\u6bcf\u500b\u5718\u968a\u9801\u90fd\u9644\u4e0a\u5176 wiki \u9023\u7d50\u3002\u6587\u4e2d\u51fa\u73fe\u7684\u6578\u5b57\u90fd\u662f\u8a72\u968a\u81ea\u5df1\u7684\u6578\u5b57\uff1b\u6587\u4e2d\u51fa\u73fe\u7684\u5224\u65ad\u90fd\u6a19\u793a\u70ba\u6211\u5011\u7684\u770b\u6cd5\uff0c\u6b61\u8fce\u4e0d\u540c\u610f\u3002iGEM \u53ea\u516c\u5e03\u524d\u4e8c\u540d\u7684\u540d\u6b21\uff0c\u5176\u9918\u516b\u968a\u5728\u5b98\u65b9\u6210\u7e3e\u9801\u8207\u672c\u7ad9\u5747\u4f9d\u5b57\u6bcd\u5e8f\u5217\u51fa\u3002\u672c\u7ad9\u8207 iGEM \u53ca\u6587\u4e2d\u4efb\u4f55\u5718\u968a\u5747\u7121\u96b6\u5c6c\u95dc\u4fc2\uff0c\u4ea6\u672a\u7d93\u5176\u80cc\u66f8\u3002'
      },
      /* The cross-tier wording: these two pages are argument, not reporting. */
      noteXD: {
        en: 'These two pages are **our argument**, not a report of anybody\'s results. They read across the thirty Top 10 wikis of 2026 — High School, Undergraduate and Overgraduate — and draw conclusions from them. The facts underneath are each team\'s own, and each one links back to the team page and the wiki it came from; the patterns, the rankings of what matters, and the 2027 advice are ours, and a reasonable person can disagree with any of it. **We are a competitor**: GEMS-Taiwan placed in the High School Top 10 in 2026, which is both why this study exists and a reason to check it. Not affiliated with, or endorsed by, iGEM or any team named here.',
        zh: '\u9019\u5169\u9801\u662f**\u6211\u5011\u7684\u8a96\u8b70**\uff0c\u4e0d\u662f\u4efb\u4f55\u4eba\u7d50\u679c\u7684\u8f49\u8ff0\u3002\u5b83\u5011\u6a6a\u8b80 2026 \u5e74\u4e09\u5341\u500b\u524d\u5341\u540d wiki\u2014\u2014\u9ad8\u4e2d\u90e8\u3001\u5927\u5b78\u90e8\u3001\u7814\u7a76\u751f\u90e8\u2014\u2014\u4e26\u5f9e\u4e2d\u5f97\u51fa\u7d50\u8ad6\u3002\u5e95\u5c64\u7684\u4e8b\u5be6\u90fd\u5c6c\u65bc\u5404\u968a\u81ea\u5df1\uff0c\u6bcf\u4e00\u9ede\u90fd\u56de\u9023\u5230\u5718\u968a\u9801\u8207\u5b83\u7684\u4f86\u6e90 wiki\uff1b\u800c\u90a3\u4e9b\u6a21\u5f0f\u3001\u4ec0\u9ebc\u6bd4\u8f03\u91cd\u8981\u7684\u6392\u5e8f\uff0c\u4ee5\u53ca 2027 \u7684\u5efa\u8b70\uff0c\u90fd\u662f\u6211\u5011\u7684\uff0c\u4e14\u4efb\u4f55\u4e00\u9ede\u90fd\u53ef\u4ee5\u88ab\u5408\u7406\u5730\u53cd\u5c0d\u3002**\u6211\u5011\u662f\u53c3\u8cfd\u8005**\uff1aGEMS-Taiwan \u5728 2026 \u5e74\u9032\u5165\u9ad8\u4e2d\u90e8\u524d\u5341\u540d\u2014\u2014\u9019\u65e2\u662f\u9019\u4efd\u7814\u7a76\u5b58\u5728\u7684\u539f\u56e0\uff0c\u4e5f\u662f\u4f60\u8a72\u6aa2\u67e5\u5b83\u7684\u7406\u7531\u3002\u672c\u7ad9\u8207 iGEM \u53ca\u6587\u4e2d\u4efb\u4f55\u5718\u968a\u5747\u7121\u96b6\u5c6c\u95dc\u4fc2\uff0c\u4ea6\u672a\u7d93\u5176\u80cc\u66f8\u3002'
      },
      /* The Overgraduate wording of the same note; app.js picks by division. */
      noteOG: {
        en: 'A workflow study of the ten teams named to the **Top 10 Overgraduate** list at the iGEM 2026 Grand Jamboree, compiled by **GEMS Research (Taiwan)** in November 2026. Everything here is read from each team\'s own public 2026 wiki and the official results page; nothing was measured by us and no result on this site is ours. Each team page links to the wiki it was read from. Where a number appears it is the team\'s own number; where a judgement appears \u2014 what we think a workflow does well, what we would copy \u2014 it is labelled as ours and can be disagreed with. iGEM publishes only the first two places in order; the remaining eight are listed alphabetically here, as they are on the official results page. Not affiliated with, or endorsed by, iGEM or any team named here.',
        zh: '\u672c\u7ad9\u662f\u5c0d iGEM 2026 Grand Jamboree **\u7814\u7a76\u751f\u90e8\u524d\u5341\u540d**\u5341\u652f\u5718\u968a\u7684\u5de5\u4f5c\u6d41\u7a0b\u7814\u7a76\uff0c\u7531 **GEMS Research\uff08\u53f0\u7063\uff09** \u65bc 2026 \u5e74 11 \u6708\u5f59\u7de8\u3002\u6240\u6709\u5167\u5bb9\u90fd\u8b80\u81ea\u5404\u968a 2026 \u5e74\u516c\u958b wiki \u8207\u5b98\u65b9\u6210\u7e3e\u9801\uff1b\u6211\u5011\u6c92\u6709\u91cf\u6e2c\u4efb\u4f55\u6578\u64da\uff0c\u672c\u7ad9\u4e5f\u6c92\u6709\u4efb\u4f55\u7d50\u679c\u5c6c\u65bc\u6211\u5011\u3002\u6bcf\u500b\u5718\u968a\u9801\u90fd\u9644\u4e0a\u5176 wiki \u9023\u7d50\u3002\u6587\u4e2d\u51fa\u73fe\u7684\u6578\u5b57\u90fd\u662f\u8a72\u968a\u81ea\u5df1\u7684\u6578\u5b57\uff1b\u6587\u4e2d\u51fa\u73fe\u7684\u5224\u65ad\u2014\u2014\u6211\u5011\u8a8d\u70ba\u67d0\u500b\u6d41\u7a0b\u54ea\u88e1\u505a\u5f97\u597d\u3001\u6211\u5011\u6703\u6284\u54ea\u4e00\u6bb5\u2014\u2014\u90fd\u6a19\u793a\u70ba\u6211\u5011\u7684\u770b\u6cd5\uff0c\u6b61\u8fce\u4e0d\u540c\u610f\u3002iGEM \u53ea\u516c\u5e03\u524d\u4e8c\u540d\u7684\u540d\u6b21\uff0c\u5176\u9918\u516b\u968a\u5728\u5b98\u65b9\u6210\u7e3e\u9801\u8207\u672c\u7ad9\u5747\u4f9d\u5b57\u6bcd\u5e8f\u5217\u51fa\u3002\u672c\u7ad9\u8207 iGEM \u53ca\u6587\u4e2d\u4efb\u4f55\u5718\u968a\u5747\u7121\u96b6\u5c6c\u95dc\u4fc2\uff0c\u4ea6\u672a\u7d93\u5176\u80cc\u66f8\u3002'
      },
      note: {
        en: 'A workflow study of the ten teams named to the **Top 10 Undergraduate** list at the iGEM 2026 Grand Jamboree, compiled by **GEMS Research (Taiwan)** on 21 November 2026. Everything here is read from each team\'s own public 2026 wiki and the official results page; nothing was measured by us and no result on this site is ours. Each team page links to the wiki it was read from. Where a number appears it is the team\'s own number; where a judgement appears — what we think a workflow does well, what we would copy — it is labelled as ours and can be disagreed with. Not affiliated with, or endorsed by, iGEM or any team named here.',
        zh: '本站是對 iGEM 2026 Grand Jamboree **大學部前十名**十支團隊的工作流程研究，由 **GEMS Research（台灣）** 於 2026 年 11 月 21 日彙編。所有內容都讀自各隊 2026 年公開 wiki 與官方成績頁；我們沒有量測任何數據，本站也沒有任何結果屬於我們。每個團隊頁都附上其 wiki 連結。文中出現的數字都是該隊自己的數字；文中出現的判斷——我們認為某個流程哪裡做得好、我們會抄哪一段——都標示為我們的看法，歡迎不同意。本站與 iGEM 及文中任何團隊均無隸屬關係，亦未經其背書。'
      }
    }
  };
})(window);
