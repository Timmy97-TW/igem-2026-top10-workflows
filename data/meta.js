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
  PD.divisions.forEach(function (d) { d.tabs = tabsFor(d); });

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
