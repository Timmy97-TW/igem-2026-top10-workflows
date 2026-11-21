/* UAlberta — gleyeco. Top 10 Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/ualberta/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Design the library for subtraction', zh: '為「相減」而設計基因庫' },
        s: { en: '15 architectures in three tiers, each built twice — once with mScarlet, once with IL-1RA', zh: '三層共 15 種架構，每種都做兩次：一次接 mScarlet、一次接 IL-1RA' } },
      { l: { en: 'Clone on one backbone', zh: '全部用同一個骨架' },
        s: { en: 'gBlocks + Gibson → DH5α → whole-plasmid Nanopore → SHuffle T7 Express; pET-28b(+) throughout', zh: 'gBlocks＋Gibson→DH5α→全質體 Nanopore→SHuffle T7 Express；全程 pET-28b(+)' } },
      { l: { en: 'Express and purify by comparison', zh: '靠比較決定表達與純化' },
        s: { en: 'TB, induce at OD₆₀₀ 0.8, 3.0 mM IPTG, 20 °C overnight; FPLC left background, gravity Ni-IMAC was cleaner', zh: 'TB、OD₆₀₀ 0.8 誘導、3.0 mM IPTG、20 °C 隔夜；FPLC 仍留背景，重力 Ni-IMAC 更乾淨' } },
      { l: { en: 'Plate binding: ASF, then HMW-HA', zh: '盤式結合：先 ASF 再 HMW-HA' },
        s: { en: 'VICTOR Nivo with a standard curve per construct; mScarlet\'s 2.6 % adsorption is the threshold', zh: 'VICTOR Nivo、每個構建體一條標準曲線；mScarlet 的 2.6% 吸附就是門檻' } },
      { l: { en: 'Ex vivo frog eye, blinded', zh: '離體蛙眼，盲化' },
        s: { en: 'Xenopus eyes from the Carr Lab; HABpep₂ retained 10 % against Galectin-3\'s 2.89 %', zh: 'Xenopus 眼球由 Carr Lab 提供；HABpep₂ 保留 10%，Galectin-3 只有 2.89%' }, tone: 'a' },
      { l: { en: 'Hydrogel, then slice it', zh: '做水膠，然後切片' },
        s: { en: '1 % alginate, 2 % CMC, 10 % PEG 4000, 0.5 % HA, 10 mM CaCl2; protein stayed in the top 0.8 cm', zh: '1% 褐藻膠、2% CMC、10% PEG 4000、0.5% HA、10 mM CaCl2；蛋白只停在最上面 0.8 cm' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'GLARE — pick the glycan', zh: 'GLARE——選定醣' },
        s: { en: 'Over 50,000 catalogued glycans filtered to 134 ocular structures; motif search, never a name match', zh: '五萬多筆已收錄醣結構篩到 134 個眼部結構；用模組比對，絕不靠名稱配對' } },
      { l: { en: 'InSiGHT — mutate in silico', zh: 'InSiGHT——計算突變' },
        s: { en: 'FoldX on PDB 3ZSJ, then Glide XP and HADDOCK independently, then GROMACS; both dockers must agree', zh: '對 PDB 3ZSJ 跑 FoldX，再分別跑 Glide XP 與 HADDOCK，最後 GROMACS；兩個對接必須一致' } },
      { l: { en: 'VOIR — choose valency', zh: 'VOIR——選價數' },
        s: { en: 'valentBind polyfc; optimum at a 47-residue linker, divalency 31-fold beyond additive', zh: 'valentBind polyfc；最佳接頭為 47 個殘基，二價比加成高出 31 倍' } },
      { l: { en: 'I-SPY — chassis yield', zh: 'I-SPY——宿主產量' },
        s: { en: 'iBB1018 plus COBRApy FBA; a Pareto operating window, with the shikimate pathway named as bottleneck', zh: 'iBB1018＋COBRApy FBA；給出 Pareto 操作窗口，並指名 shikimate 路徑為瓶頸' } },
      { l: { en: 'HOPE — delivery', zh: 'HOPE——遞送' },
        s: { en: 'Canal-Peppas mesh size 17.5 to 10.3 nm; 1-D Python ODE with k_clear = 0.60 per hour assumed', zh: 'Canal-Peppas 網目 17.5 降到 10.3 nm；一維 Python ODE 的 k_clear = 0.60 /h 是假設值' }, tone: 'g' }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'GLARE names Core 1 and the LacNAc off-target', zh: 'GLARE 指定 Core 1 與脫靶的 LacNAc' }, up: true },
      { w: 1, d: 1, l: { en: '10 of 117,732 mutants get cloned', zh: '117,732 個突變體中有 10 個被選去選殖' }, up: true },
      { w: 5, d: 4, l: { en: 'slice data goes up, and comes back disqualified', zh: '切片數據交上去，再被判定不成立' } }
    ]
  };

  PD.pages.ualberta = {
    label: { en: 'UAlberta', zh: 'UAlberta' },
    title: { en: 'UAlberta — gleyeco', zh: 'UAlberta — gleyeco' },
    render: function (h) {
      var t = team('ualberta');
      var out = h.teamhero(t, {
        h1: {
          en: 'Fifteen architectures, each built twice, so that ==subtraction== could say which domain did the work.',
          zh: '十五種架構、每一種都做兩次，好讓==相減==能說出究竟是哪個結構域在起作用。'
        },
        lede: {
          en: 'gleyeco anchors a drug to the eye\'s own glycocalyx. One fusion protein carries the Galectin-3 carbohydrate-recognition domain, aimed at the mucin O-glycan Core 1 (Galβ1-3GalNAc), two tandem copies of the hyaluronic-acid-binding peptide HABpep, and a cargo that is either IL-1RA or mScarlet. What is worth studying here is not the construct. It is that the library was designed so that a negative result would still be readable, that every dry-lab pipeline states out loud the heavier tool it declined, and that the ocular transport model was used to disqualify the team\'s own diffusion assay.',
          zh: 'gleyeco 把藥物錨定在眼睛自己的 glycocalyx 上。一個融合蛋白同時帶著瞄準黏液素 O-glycan Core 1（Galβ1-3GalNAc）的 Galectin-3 碳水化合物辨識區（CRD）、兩段串聯的玻尿酸結合肽 HABpep，以及 IL-1RA 或 mScarlet 兩種酬載之一。這一頁值得研究的不是構建體本身，而是這個基因庫被設計成「連陰性結果都讀得出來」、每一條乾式流程都明說自己放棄了哪個更重的工具，以及眼表傳輸模型最後被用來否定他們自己的擴散實驗。'
        },
        chips: [
          { t: { en: 'Galectin-3 CRD', zh: 'Galectin-3 CRD' }, k: 'b' },
          { t: { en: 'HABpep₂ / HA anchor', zh: 'HABpep₂／HA 錨定' }, k: 'g' },
          { t: { en: 'Hydrogel contact lens', zh: '水膠隱形眼鏡' }, k: 't' },
          { t: { en: 'GLARE software', zh: 'GLARE 軟體' }, k: 'v' },
          { t: { en: 'FoldX + Glide XP + HADDOCK', zh: 'FoldX＋Glide XP＋HADDOCK' }, k: 'a' }
        ],
        stats: [
          { v: '117,732', l: { en: 'Mutant structures built and scored in silico', zh: '在電腦上建出並評分的突變體結構數' } },
          { v: '10', l: { en: 'Of those that reached the bench', zh: '其中真正走上實驗檯的數量' } },
          { v: '15 x 2', l: { en: 'Architectures, each with mScarlet and with IL-1RA', zh: '架構數，每種各做 mScarlet 與 IL-1RA 版' } },
          { v: '134', l: { en: 'Ocular glycan structures left from over 50,000', zh: '從五萬多筆篩到剩下的眼部醣結構' } },
          { v: '2.6 %', l: { en: 'mScarlet\'s non-specific HA adsorption, used as the threshold', zh: 'mScarlet 對 HA 的非專一吸附，被當作門檻' } },
          { v: '298 nM', l: { en: 'ITC Kd the team itself calls not credible (literature 45 µM)', zh: '團隊自己說不可信的 ITC Kd（文獻為 45 µM）' } }
        ]
      });

      out += h.toc([
        { id: 'ua-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'ua-swim', t: { en: 'Wet and dry', zh: '濕式與乾式' } },
        { id: 'ua-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'ua-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'ua-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'ua-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'ua-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'ua-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'The problem is residence time, not the drug', zh: '問題在滯留時間，不在藥物本身' },
        lede: {
          en: 'Dry eye disease has a pooled global prevalence of 34.6 % across a review of 119 studies and over 15 million participants, and 21.3 % among Canadian adults. Blinking, tear turnover and nasolacrimal drainage clear a topical protein in minutes.',
          zh: '乾眼症在一篇涵蓋 119 篇研究、超過 1,500 萬名受試者的回顧中，全球合併盛行率為 34.6%，加拿大成人為 21.3%。眨眼、淚液更新與鼻淚管排流會在幾分鐘內把點在眼表的蛋白沖掉。'
        },
        body:
          h.p({
            en: 'The design decision is to stop fighting clearance and instead bind to something that is already staying put. The eye\'s **glycocalyx** becomes the anchor: the **Galectin-3 carbohydrate-recognition domain (CRD)** targets the mucin O-glycan **Core 1**, with **LacNAc (Galβ1-4GlcNAc)** named in advance as the off-target to beat, and **two tandem copies of HABpep** (the 12-mer GAHWQFNALTVR, from phage display) bind hyaluronic acid. Delivery is a hydrogel contact lens with HA built into the network, so HABpep has something to hold inside the lens as well as on the eye.',
            zh: '他們的設計決定是：不再和清除速率對打，而是去結合某個本來就留在原處的東西。眼表的 **glycocalyx** 就成為錨點：**Galectin-3 碳水化合物辨識區（CRD）** 瞄準黏液素 O-glycan **Core 1**，並事先把 **LacNAc（Galβ1-4GlcNAc）** 寫明為必須勝過的脫靶對象；**兩段串聯的 HABpep**（12 個胺基酸的 GAHWQFNALTVR，來自噬菌體展示）負責結合玻尿酸。遞送載體是把 HA 直接做進網絡裡的水膠隱形眼鏡，讓 HABpep 在鏡片內和在眼表都有東西可抓。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'truncation', zh: '截短' }, k: 'b' }],
              h: { en: 'Galectin-3 was cut down on purpose', zh: '刻意把 Galectin-3 截短' },
              p: { en: 'Only the CRD was used, because the N-terminal domain drives pentamerisation and is tied to tumour progression. The cost of that choice shows up later: Galectin-3_mScarlet was indistinguishable from mScarlet alone on asialofetuin, which the team attributes to removing the oligomerisation domain rather than to a dead CRD.', zh: '只用 CRD，因為 N 端結構域會驅動五聚化，而且與腫瘤進展有關。這個選擇的代價後來就出現了：在 asialofetuin 上，Galectin-3_mScarlet 與單獨的 mScarlet 無法區分，而團隊把原因歸給移除了寡聚化結構域，而不是 CRD 失效。' } },
            { chips: [{ t: { en: 'library design', zh: '基因庫設計' }, k: 'v' }],
              h: { en: 'Built for subtraction, not for the finished drug', zh: '為相減而建，不是為成品藥而建' },
              p: { en: '15 architectures in three tiers — single domains, single-anchor fusions, dual-anchor fusions — each built twice, once with mScarlet and once with IL-1RA, so any binding behaviour can be attributed to the targeting domains rather than the payload. Two iterations held everything else identical: V1 is tandem CD44, V2 is tandem HABpep.', zh: '三層共 15 種架構——單一結構域、單錨定融合、雙錨定融合——每種都做兩次，一次接 mScarlet、一次接 IL-1RA，這樣任何結合行為都能歸因於標靶結構域而非酬載。兩個迭代版本把其他條件完全固定：V1 用串聯 CD44、V2 用串聯 HABpep。' } },
            { chips: [{ t: { en: 'linker rule', zh: '接頭規則' }, k: 'g' }],
              h: { en: 'A rule adopted after the first failure', zh: '第一次失敗之後定下的規則' },
              p: { en: 'Candidate domain orders were run through AlphaFold 2 before any DNA existed. Team-designed linkers gave poor predictions and domains that did not separate, so a rule was adopted and kept: use linker sequences that are already published. That gave (GGGGS)₃ flexible, (EAAAK) rigid and GGGS short, all registered.', zh: '在任何 DNA 存在之前，候選的結構域排列順序就先過一遍 AlphaFold 2。團隊自行設計的接頭預測結果不佳、結構域也分不開，於是定下並維持一條規則：只用已發表的接頭序列。因此採用了 (GGGGS)₃ 柔性、(EAAAK) 剛性與 GGGS 短接頭三種，並全部登錄。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'ua-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Three handoffs, and the last one goes against the team', zh: '三次交接，而最後一次是對自己不利的' },
        lede: {
          en: 'Two of the dashed arrows are the software telling the lab what to build. The third is the lab\'s own data going up to a model that then refuses to use it.',
          zh: '三條虛線裡有兩條是軟體告訴實驗室要做什麼。第三條是實驗室自己的數據交給模型，而模型接著拒絕採用它。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'gleyeco: six wet stages, five named dry pipelines', zh: 'gleyeco：六個濕式階段、五條有名字的乾式流程' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Engineering, Results, Model and Software pages.', zh: '由我們依該隊 Description、Engineering、Results、Model、Software 各頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'ua-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Six operations, 35 engineering cycles, and numbered SOPs', zh: '六個 operation、35 個工程迴圈，加上編號的 SOP' },
        lede: {
          en: 'The project is organised as six named operations (GLARE, CLEAR, InSiGHT, VOIR, I-SPY, HOPE) with CLEAR as the 14-cycle wet-lab spine. Protocols are numbered in five bundles: 1.x microbiology, 2.x molecular, 3.x binding, 4.x equipment calibration, 5.x hydrogel.',
          zh: '整個專案被組織成六個有名字的 operation（GLARE、CLEAR、InSiGHT、VOIR、I-SPY、HOPE），其中 CLEAR 是 14 個迴圈的濕式主幹。實驗方法以編號分成五組：1.x 微生物、2.x 分子、3.x 結合、4.x 儀器校正、5.x 水膠。'
        },
        body:
          h.phases([
            { h: { en: 'Architecture before DNA', zh: '先定架構，再碰 DNA' },
              p: { en: 'Candidate domain orders were modelled in AlphaFold 2, and the backbone question was settled once for the whole library.', zh: '候選的結構域排列順序先用 AlphaFold 2 建模，骨架問題則一次性為整個基因庫決定。' },
              items: [
                { en: 'One backbone for everything: **pET-28b(+)** (about 5,151 bp; T7, IPTG-inducible, KanR, 6xHis), chosen for availability plus one purification tag across the whole library.', zh: '全部只用一個骨架：**pET-28b(+)**（約 5,151 bp；T7、IPTG 誘導、KanR、6xHis），理由是容易取得，而且整個基因庫共用同一個純化標籤。' },
                { en: 'Galectin-3 truncated to the CRD; published linkers only, after the team\'s own linkers failed in prediction.', zh: 'Galectin-3 截短到只剩 CRD；在自行設計的接頭預測失敗後，只用已發表的接頭。' }
              ] },
            { h: { en: 'Clone, with sequencing as the gate', zh: '選殖，而且以定序為門檻' },
              p: { en: 'gBlocks (IDT) with PCR overhangs, Gibson assembly, E. coli DH5α, colony PCR with NEB Taq, QIAGEN miniprep, whole-plasmid Nanopore sequencing at MBSU, then transformation into SHuffle T7 Express.', zh: 'IDT 的 gBlocks 加 PCR 重疊端、Gibson 組裝、E. coli DH5α、NEB Taq 菌落 PCR、QIAGEN miniprep、在 MBSU 做全質體 Nanopore 定序，最後轉形進 SHuffle T7 Express。' },
              items: [
                { en: 'Expected amplicon sizes are published per construct, together with the note that **Gibson primers add about 40 to 50 bp at each end**, so bands legitimately run larger than literature sizes.', zh: '每個構建體的預期片段大小都公開，並附註 **Gibson 引子在兩端各加上約 40 到 50 bp**，所以條帶跑得比文獻值大是合理的。' },
                { en: 'The ten Galectin-3 variants α to κ were all built as Galectin-3_mScarlet fusions, so **all eleven share one primer pair and one expected amplicon of about 1,202 bp** and the whole panel screens on a single gel.', zh: '十個 Galectin-3 變異體 α 到 κ 全部做成 Galectin-3_mScarlet 融合，因此**十一個樣品共用同一對引子、同一個約 1,202 bp 的預期片段**，整組在一片膠上就能篩完。' },
                { en: 'They state explicitly that a correctly sized band says nothing for that panel, because the variants differ only by point substitutions: **sequencing is the gate**. One lane is flagged as an accidental loading duplication.', zh: '他們明白寫出，對那一組來說「大小正確的條帶什麼也不能說明」，因為變異體之間只差點突變：**定序才是門檻**。其中一個 lane 被標註為不小心重複上樣。' }
              ],
              done: { en: '12 constructs assembled in-house, 1 bought synthetic from TWIST, 2 never built.', zh: '12 個構建體自行組裝完成、1 個向 TWIST 購買合成、2 個始終沒做出來。' } },
            { h: { en: 'Express, and let the gel rewrite the part list', zh: '表達，並讓膠體改寫零件清單' },
              p: { en: 'CD44₂ was undetectable in the soluble fraction and recovered only after urea solubilisation, as a Western blot band at 22 kDa. Inspection then showed the cloned CD44 fragment was a truncated transmembrane region, not the soluble HA-binding domain.', zh: 'CD44 的雙拷貝版在可溶部分完全檢測不到，只有在尿素溶解後才以 Western blot 22 kDa 條帶出現。進一步檢查發現，所選殖的 CD44 片段是截短的跨膜區，而不是可溶的 HA 結合區。' },
              items: [
                { en: 'Optimisation was a grid, not a guess: IPTG at **0.5 / 1.0 / 2.0 / 3.0 mM** (strongest at 3.0 mM) and **LB against TB** (TB stronger).', zh: '最佳化是做格點掃描而不是猜：IPTG 取 **0.5／1.0／2.0／3.0 mM**（3.0 mM 最強），以及 **LB 對 TB**（TB 較強）。' },
                { en: 'Coomassie gels carry a positive control of **α-1 antitrypsin at 45 kDa** and a water negative control; pink pellets on a UV transilluminator are used as a first expression check.', zh: 'Coomassie 膠都帶一個 **45 kDa 的 α-1 antitrypsin** 陽性對照與一個水的陰性對照；在紫外燈台上看菌體沉澱是否偏粉紅，則用作第一道表達檢查。' }
              ],
              done: { en: 'Final condition for everything: TB, induce at OD₆₀₀ about 0.8, 3.0 mM IPTG, overnight at 20 °C and 200 rpm, 500 mL cultures, giving about 5 g wet pellet.', zh: '全部構建體的最終條件：TB、OD₆₀₀ 約 0.8 誘導、3.0 mM IPTG、20 °C 隔夜、200 rpm、500 mL 培養，得到約 5 g 濕菌體。' } },
            { h: { en: 'Purify by comparison, not by default', zh: '靠比較決定純化方式，而不是照慣例' },
              p: { en: 'Gravity Ni-IMAC, then a 5 mL Cytiva HisTrap HP on FPLC. FPLC enriched the targets but kept substantial background even at higher imidazole stringency; FPLC fractions re-purified on gravity columns came out cleaner.', zh: '先做重力式 Ni-IMAC，再上 FPLC 的 5 mL Cytiva HisTrap HP。FPLC 確實富集了目標蛋白，但即使提高 imidazole 嚴格度仍留下相當多背景；把 FPLC 的分離液再過一次重力管柱反而更乾淨。' },
              items: [
                { en: 'Decision recorded: gravity becomes a dedicated cleanup step and the **primary** method for the mutant panel.', zh: '記錄下來的決定：重力管柱成為專門的清潔步驟，也是突變體組的**主要**純化方法。' },
                { en: 'HABpep alone, at about 4.35 kDa, is below the gel\'s resolving range and is reported as not visible rather than quietly omitted.', zh: '單獨的 HABpep 約 4.35 kDa，低於膠體的解析範圍，他們直接寫「看不到」，而不是默默略過。' }
              ] },
            { h: { en: 'Quantify in two units, then bind on plates', zh: '用兩種單位定量，再上盤做結合' },
              p: { en: 'Bradford with Coomassie G-250 at A₅₉₅ against a BSA standard curve, elutions 3 and 4 pooled, reported as both µg/mL and µM from the ExPASy theoretical molecular weight.', zh: 'Bradford 以 Coomassie G-250 在 A₅₉₅ 對 BSA 標準曲線定量，第 3、4 次沖提合併，並同時以 µg/mL 與 µM（由 ExPASy 理論分子量換算）報告。' },
              items: [
                { en: 'Galectin-3 alone reached about **4,991 µg/mL = 309.9 µM**, the highest in the library. Galectin-3_mScarlet at **361 µg/mL = 8.3 µM** is mid-library by mass and **lowest by molarity** — the two units rank the library differently, which is the stated reason for printing both.', zh: '單獨的 Galectin-3 達到約 **4,991 µg/mL = 309.9 µM**，是全庫最高。Galectin-3_mScarlet 為 **361 µg/mL = 8.3 µM**，以質量算屬中段，以莫耳濃度算卻是**最低**——兩種單位對整個基因庫的排序不同，這正是他們兩種都列出來的理由。' },
                { en: 'Mutant yields on the roughly 43.7 kDa scaffold: **α (A34Q) and γ (N54S) above wild type**, while **ζ, θ, ι and κ fell to about one third of wild type (1.9 to 2.8 µM)** — read as 1 to 2 substitutions being tolerated while **mutational load costs recoverable yield**.', zh: '在約 43.7 kDa 的骨架上，突變體產量為：**α（A34Q）與 γ（N54S）高於野生型**，而 **ζ、θ、ι、κ 掉到野生型的約三分之一（1.9 至 2.8 µM）**——他們的解讀是 1 到 2 個取代可以忍受，但**突變負荷會吃掉可回收的產量**。' },
                { en: 'ASF plate assay: three-domain fusion retention above both controls rose from **5-fold at 0.125 µM to 19-fold at 1 µM**, while **Galectin-3_mScarlet was not significantly different from mScarlet alone**. HMW-HA plate assay: the fusion retained **8.3 to 12.9 %**, falling from 12.9 % at 0.5 µM to 8.3 % at 2 µM, read as saturable binding, while **HABpep₂_mScarlet reached only 1.1 to 1.7x baseline, not significant**.', zh: 'ASF 盤式實驗：三結構域融合相對兩個對照的保留量，從 **0.125 µM 的 5 倍上升到 1 µM 的 19 倍**，而 **Galectin-3_mScarlet 與單獨 mScarlet 無顯著差異**。HMW-HA 盤式實驗：融合蛋白保留 **8.3 至 12.9%**，從 0.5 µM 的 12.9% 降到 2 µM 的 8.3%，被解讀為可飽和結合；而 **HABpep₂_mScarlet 只到基線的 1.1 至 1.7 倍，不顯著**。' }
              ],
              done: { en: 'Unequal group sizes (mScarlet n = 3, HABpep₂ n = 5, fusion n = 5) led them to use Tukey-Kramer in place of Tukey HSD, and to say so on the page.', zh: '因為各組樣本數不等（mScarlet n = 3、HABpep₂ n = 5、融合 n = 5），他們改用 Tukey-Kramer 取代 Tukey HSD，並在頁面上寫明這件事。' } },
            { h: { en: 'ITC and the frog eye', zh: 'ITC 與蛙眼' },
              p: { en: 'Nine titrations on a MicroCal PEAQ-ITC including a buffer-only control: 150 µL protein at 5 µM in the cell, 60 µL Core 1 glycan at 50 µM in the syringe, 13 injections (one of 0.4 µL then twelve of 3 µL), reference power 10 µcal/s, 25 °C, pH 8.', zh: '在 MicroCal PEAQ-ITC 上做九次滴定，含一次只有緩衝液的對照：細胞內 150 µL、5 µM 的蛋白，針筒內 60 µL、50 µM 的 Core 1 醣，13 次注射（先一次 0.4 µL，再十二次 3 µL），參考功率 10 µcal/s、25 °C、pH 8。' },
              items: [
                { en: 'The full therapeutic gave **Kd about 298 nM** (figure fit Kd 288 nM, n = 0.28 sites, ΔH -81.5 kcal/mol) against a literature **45 µM** for Gal-3C with Core 1 — two orders of magnitude too strong, so **the team calls it not credible**.', zh: '完整治療蛋白測得 **Kd 約 298 nM**（圖上擬合為 Kd 288 nM、n = 0.28 個位點、ΔH -81.5 kcal/mol），而 Gal-3C 對 Core 1 的文獻值是 **45 µM**——強了兩個數量級，所以**團隊直接說這不可信**。' },
                { en: '"ITC buffer" was **352.9 mM imidazole, 35.3 mM HEPES, 141.2 mM NaCl, 14.7 mM ammonium bicarbonate**, matched by dilution rather than dialysis because they had no dialysis equipment. Diagnosis from Dr. Badmalia (MolScreen) and Dr. Di Trani: buffer mismatch, components with high heat of ionisation, and co-purifying contaminants.', zh: '所謂「ITC buffer」是 **352.9 mM imidazole、35.3 mM HEPES、141.2 mM NaCl、14.7 mM ammonium bicarbonate**，而且因為沒有透析設備，是用稀釋而非透析去配平的。Dr. Badmalia（MolScreen）與 Dr. Di Trani 的診斷是：緩衝液不匹配、含有高離子化熱的成分，以及共純化的雜質。' },
                { en: 'Frog eye wash-off, blinded: **mScarlet 0.002 %, mScarlet_HABpep₂ 10 %, mScarlet_HABpep₂_Galectin-3 9 %, mScarlet_Galectin-3 2.89 %, variant α 0.675 %** — so **HA binding, not glycan binding, carried retention**, and the α mutation made it worse.', zh: '盲化的蛙眼沖洗實驗：**mScarlet 0.002%、mScarlet_HABpep₂ 10%、mScarlet_HABpep₂_Galectin-3 9%、mScarlet_Galectin-3 2.89%、變異體 α 0.675%**——也就是說**撐住滯留的是 HA 結合，不是醣結合**，而 α 突變反而更差。' }
              ],
              done: { en: 'They immediately disqualify their own comparison: applied concentrations ranged 50 to 2,932 µg/mL and were never matched, so α\'s higher post-wash CTCF (125.832 against 4.067) is an artefact of 610 against 50 µg/mL. The fix is stated: standardised loads, n = 5, longer incubation, harsher washes.', zh: '他們立刻否定自己的這組比較：施用濃度從 50 到 2,932 µg/mL，從未配平，所以 α 沖洗後較高的 CTCF（125.832 對 4.067）是 610 對 50 µg/mL 造成的假象。補救方式也寫了出來：統一施用量、n = 5、拉長培養時間、加重沖洗。' } },
            { h: { en: 'Hydrogel, then slice it', zh: '做水膠，然後切片' },
              p: { en: 'Thermal crosslinking was ruled out before any bench work, because 70 to 100 °C would denature the protein. The first choice, photocrosslinked PEGDA plus MeHA with a riboflavin against Irgacure 2959 comparison, was abandoned because PEGDA and MeHA could not be obtained, and unfunctionalised PEG plus HA plus riboflavin did not gel.', zh: '熱交聯在任何實驗之前就被排除，因為 70 到 100 °C 會讓蛋白變性。第一選擇是光交聯的 PEGDA 加 MeHA，並比較 riboflavin 與 Irgacure 2959 兩種光起始劑；但因為買不到 PEGDA 與 MeHA，而手上未官能化的 PEG 加 HA 加 riboflavin 又不膠化，這條路被放棄。' },
              items: [
                { en: 'The pivot to ionic alginate with Ca2+ is published as a question-tried-outcome-decision table: **xanthan gum never gelled and was dropped; 10 mM CaSO4 gave the stiffest smoothest gel but left visible undissolved chunks and was dropped; 5 mM CaEDTA did not gel**; 5 mM CaCl2 had better texture but ions diffused too slowly so large gels did not crosslink in the middle, which is why 10 mM was kept.', zh: '轉向以 Ca2+ 離子交聯褐藻膠這一段，是以「問題－嘗試－結果－決定」的表格公開的：**xanthan gum 始終不膠化而被放棄；10 mM CaSO4 做出最硬最平滑的膠，但留下看得見的未溶解顆粒而被放棄；5 mM CaEDTA 不膠化**；5 mM CaCl2 質地較好，但離子擴散太慢，大塊膠體中心交聯不起來，所以保留 10 mM。' },
                { en: 'Final physical formulation: **1 % w/v alginate, 2 % w/v CMC, 10 % w/v PEG 4000, 0.5 % w/v HA, 10 mM CaCl2** — and the page states plainly that it still needs full characterization. The 2 to 3 % CMC came from an adviser\'s suggestion and fixed brittleness; HA made the gel stronger even though HA is not crosslinked, and is described as a semi-interpenetrating network rather than an inert filler.', zh: '最終的物理配方是 **1% w/v 褐藻膠、2% w/v CMC、10% w/v PEG 4000、0.5% w/v HA、10 mM CaCl2**——而頁面上直接寫著它仍然需要完整的表徵。2 到 3% 的 CMC 來自指導者的建議，解決了脆裂問題；HA 雖然沒有被交聯，卻讓膠更強韌，他們把它描述為半互穿網絡而非惰性填充物。' },
                { en: 'Diffusion assay (SOP 5.2, adapted from Adeoye and de Alba 2025): eight formulations crosslinked as columns in microcentrifuge tubes at 50 mM CaCl2, 200 µL of 0.5 µM mScarlet-HABpep layered on top, then five 0.4 cm slices read at 1, 2.5, 5 and 8 h with blank subtraction.', zh: '擴散實驗（SOP 5.2，改自 Adeoye 與 de Alba 2025）：八種配方在微量離心管中以 50 mM CaCl2 交聯成柱狀，上層加 200 µL、0.5 µM 的 mScarlet-HABpep，再在 1、2.5、5、8 小時各切五片 0.4 cm 並扣除空白。' }
              ],
              done: { en: 'Protein stayed within the top 0.8 cm in every gel at every time point, slices 3 to 5 sat within ± 0.05 µM of zero, and nothing reached the bottom in 8 h. L1 and Y0.5 were carried forward as the only two whose concentration-weighted average depth increased monotonically — with one run per formulation, printed as a caveat.', zh: '每一種膠、每一個時間點，蛋白都只停留在最上面 0.8 cm 之內；第 3 到第 5 片都落在零上下 0.05 µM 之內；八小時內沒有任何東西到達底部。只有 L1 與 Y0.5 的濃度加權平均深度單調增加，因此被帶往下一步——而每種配方只跑一次，這一點被當成警語印出來。' } }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'ua-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'Eight rules about when a number was allowed to count', zh: '八條規則，決定一個數字什麼時候才算數' },
        lede: {
          en: 'This team wrote two assays from scratch — a plate-based fluorescence lectin-glycan binding assay and the sliced-column hydrogel diffusion assay — so most of these rules exist because nothing else was going to supply them.',
          zh: '這支隊伍自己寫了兩個實驗方法——盤式螢光凝集素與醣的結合實驗，以及切片柱狀水膠擴散實驗——所以這些規則多半是因為沒有別人會提供，他們才自己訂的。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Rule', zh: '規則' }, w: '24%' },
              { t: { en: 'Exactly what it is', zh: '確切做法' }, w: '38%' },
              { t: { en: 'What it licensed', zh: '它允許了什麼' } }
            ],
            rows: [
              [{ en: 'Per-construct calibration, not a shared curve', zh: '每個構建體各有校正曲線，不共用一條' }, { en: 'Every mScarlet construct got its own serial dilution on the VICTOR Nivo, buffer-only background subtraction and linear regression; retained protein = RFU divided by the fitted slope, in µM.', zh: '每個 mScarlet 構建體都在 VICTOR Nivo 上做自己的序列稀釋、扣除只有緩衝液的背景，再做線性回歸；保留的蛋白量＝RFU 除以擬合斜率，單位為 µM。' }, { en: 'Slopes of **7 to 9 x 10^6 RFU/µM** for mScarlet, Galectin-3_mScarlet and the three-domain fusion show fusion does not quench mScarlet, which is what makes cross-construct comparison legal at all.', zh: 'mScarlet、Galectin-3_mScarlet 與三結構域融合的斜率都在 **7 到 9 x 10^6 RFU/µM**，說明融合並不淬滅 mScarlet，而這正是跨構建體比較得以成立的唯一依據。' }],
              [{ en: 'Two units, with a stated reason', zh: '兩種單位，並說明理由' }, { en: 'Bradford values reported as both µg/mL and µM, with a note that they are standard-curve estimates and sequence-dependent.', zh: 'Bradford 結果同時以 µg/mL 與 µM 報告，並註明這些是標準曲線估計值，且與序列有關。' }, { en: 'Mass and molarity rank the library differently, and the downstream assays are molar.', zh: '質量與莫耳濃度對整個基因庫的排序不同，而下游實驗用的是莫耳濃度。' }],
              [{ en: 'Baselines used as thresholds', zh: '把基線當門檻用' }, { en: 'The mScarlet control\'s concentration-independent **2.6 %** non-specific adsorption on HMW-HA.', zh: 'mScarlet 對照在 HMW-HA 上與濃度無關的 **2.6%** 非專一吸附。' }, { en: 'It defines what counts as binding. Values of n.d. and negative numbers are printed, not hidden.', zh: '它定義了什麼才算結合。n.d. 與負值都照實印出，不被藏起來。' }],
              [{ en: 'The test fits the design', zh: '統計檢定配合實驗設計' }, { en: 'Unequal group sizes on the HA assay (mScarlet n = 3, HABpep₂ n = 5, fusion n = 5).', zh: 'HA 實驗各組樣本數不等（mScarlet n = 3、HABpep₂ n = 5、融合 n = 5）。' }, { en: '**Tukey-Kramer in place of Tukey HSD**, stated on the figure rather than left for a reader to notice.', zh: '**改用 Tukey-Kramer 取代 Tukey HSD**，而且直接寫在圖上，不是留給讀者自己發現。' }],
              [{ en: 'Blinding on the only animal-tissue experiment', zh: '唯一的動物組織實驗做盲化' }, { en: 'A non-affiliated third party relabelled the groups as "Treatment 1, 2, ..." before application; one eye per treatment and never both eyes of one frog.', zh: '施用之前由一位無關的第三方把組別重新標為「Treatment 1、2、…」；每個處理一隻眼，而且絕不使用同一隻蛙的兩隻眼。' }, { en: 'Eyes were donated by the Carr Lab from animals euthanised for other work, with all handling by trained Carr Lab members.', zh: '眼球由 Carr Lab 提供，來自為其他研究而安樂死的動物，所有操作都由受過訓練的 Carr Lab 成員執行。' }],
              [{ en: 'An error band below which nothing counts', zh: '一條「以下都不算」的誤差帶' }, { en: 'ΔG = RT ln(Kd) with R = 1.985 x 10^-3 kcal per mol per K at 298.15 K, so **1.4 kcal/mol is about 10x in Kd**. Glide XP reproduces affinities to about 2 kcal/mol; FoldX is cited as differing from experiment by 1.0 to 1.78 kcal/mol.', zh: 'ΔG = RT ln(Kd)，R = 1.985 x 10^-3 kcal per mol per K、298.15 K，所以 **1.4 kcal/mol 大約等於 Kd 差 10 倍**。Glide XP 重現親和力的誤差約 2 kcal/mol；FoldX 則被引述為與實驗相差 1.0 到 1.78 kcal/mol。' }, { en: 'Differences of **1 kcal/mol or less between mutants are explicitly declared meaningless**, before any mutant is ranked.', zh: '在任何突變體被排序之前，就先明文宣告**突變體之間 1 kcal/mol 以內的差異沒有意義**。' }],
              [{ en: 'Flag the background, do not absorb it', zh: '把背景標出來，不要吸收掉' }, { en: 'HABpep₂_mScarlet\'s calibration y-intercept of **plus 7 x 10^6 RFU**.', zh: 'HABpep₂_mScarlet 校正曲線的 y 軸截距為 **加 7 x 10^6 RFU**。' }, { en: 'Printed as a background problem rather than quietly used, which is why its 1.1 to 1.7x result is read as not significant.', zh: '被當成背景問題印出來，而不是默默沿用；這也是為什麼它 1.1 至 1.7 倍的結果被判讀為不顯著。' }],
              [{ en: 'Numbering convention declared', zh: '明文宣告編號慣例' }, { en: 'The modelling pages use CRD numbering (α = **A34Q**) while the Registry parts use full-length Galectin-3 numbering (α = **A146Q**).', zh: '建模頁用 CRD 編號（α = **A34Q**），而 Registry 零件用全長 Galectin-3 編號（α = **A146Q**）。' }, { en: 'So κ is R32E/H46R/N48W/R50H/E53M/R74E = R144E/H158R/N160W/R162H/E165M/R186E (BBa_26ZS7QR0), and a reader cannot mis-map a residue.', zh: '因此 κ 是 R32E/H46R/N48W/R50H/E53M/R74E＝R144E/H158R/N160W/R162H/E165M/R186E（BBa_26ZS7QR0），讀者不會把殘基對錯。' }]
            ],
            source: { en: 'Rules quoted and condensed from the team\'s Results, Model and Parts pages. Registry: 17 basic parts, 23 primers, 20 composite parts.', zh: '規則引自並濃縮於該隊 Results、Model、Parts 各頁。Registry：17 個基本零件、23 個引子、20 個複合零件。' }
          }) +
          h.take({ en: 'The rule behind the rules', zh: '規則背後的規則' }, {
            en: 'Nothing in this library is compared across constructs until the calibration table has shown it is allowed. Each mScarlet construct carries its own standard curve, and the published slopes — **7 to 9 x 10^6 RFU/µM** for mScarlet, for Galectin-3_mScarlet and for the three-domain fusion — are presented as evidence in their own right, because equal slopes mean fusion is not quenching the reporter. The calibration table is not housekeeping here; it is the permission slip for every comparison on the page.',
            zh: '在這個基因庫裡，任何跨構建體的比較都要等校正表證明「可以比」之後才做。每個 mScarlet 構建體都有自己的標準曲線，而公開出來的斜率——mScarlet、Galectin-3_mScarlet 與三結構域融合都在 **7 到 9 x 10^6 RFU/µM**——本身就被當作證據呈現，因為斜率相同代表融合沒有淬滅報告蛋白。這裡的校正表不是雜務，而是這一頁上每一組比較的通行證。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'ua-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Five named pipelines, each handing a decision to the next', zh: '五條有名字的流程，每一條把一個決定交給下一條' },
        lede: {
          en: 'Each operation chooses its abstraction level out loud, naming the heavier tool it declined and the missing measurement that would have made the heavier tool pointless. GLARE is released as a Python package (0.2.0, Python 3.10 or later).',
          zh: '每個 operation 都公開說明自己選了哪一層抽象，並點名它放棄了哪個更重的工具、以及缺了哪個量測會讓那個更重的工具變得沒意義。GLARE 以 Python 套件形式釋出（0.2.0，需 Python 3.10 或以上）。'
        },
        body:
          h.flow({
            title: { en: 'From a glycan database to a mutant on a gel', zh: '從醣資料庫到膠體上的一個突變體' },
            sub: { en: 'Five operations, read left to right. Each one names what it declined to model.', zh: '五個 operation，由左至右。每一個都說出自己放棄建模的是什麼。' },
            stages: [
              { label: { en: 'GLARE', zh: 'GLARE' }, sub: { en: 'Which glycan, and which look-alike to beat', zh: '選哪個醣，以及要勝過哪個相似物' }, tone: 'b',
                items: [{ en: 'over 50,000 glycans to 134 ocular', zh: '五萬多筆醣篩到 134 個眼部結構' }, { en: 'motif search, never a name match', zh: '以模組比對，不靠名稱配對' }] },
              { label: { en: 'InSiGHT', zh: 'InSiGHT' }, sub: { en: 'In-silico mutagenesis with two independent dockers', zh: '以兩個獨立對接程式做計算突變' }, tone: 'v',
                items: [{ en: '117,732 mutant structures', zh: '117,732 個突變體結構' }, { en: '10 to the bench', zh: '10 個進入實驗檯' }] },
              { label: { en: 'VOIR', zh: 'VOIR' }, sub: { en: 'How many arms, and how long a linker', zh: '要幾隻手臂、接頭要多長' }, tone: 'g',
                items: [{ en: 'valentBind polyfc', zh: 'valentBind polyfc' }, { en: '(GGGGS)₆₋₁₆ recommended', zh: '建議 (GGGGS)₆₋₁₆' }] },
              { label: { en: 'I-SPY', zh: 'I-SPY' }, sub: { en: 'Can the chassis actually make it', zh: '宿主到底做不做得出來' }, tone: 'a',
                items: [{ en: 'iBB1018 plus COBRApy', zh: 'iBB1018＋COBRApy' }, { en: 'bottleneck: shikimate pathway', zh: '瓶頸：shikimate 路徑' }] },
              { label: { en: 'HOPE', zh: 'HOPE' }, sub: { en: 'Mesh size, and how long the drug has', zh: '網目大小，以及藥物還有多少時間' }, tone: 't',
                items: [{ en: 'Canal-Peppas, ξ 17.5 to 10.3 nm', zh: 'Canal-Peppas，ξ 由 17.5 降到 10.3 nm' }, { en: 'release model unvalidated', zh: '釋放模型未經驗證' }] }
            ],
            loop: { label: { en: 'the frog eye and the slice data come back and overturn two of these claims', zh: '蛙眼與切片數據回頭推翻了其中兩個主張' } },
            caption: { en: 'Drawn by us from the team\'s Model and Software pages. All counts are the team\'s.', zh: '由我們依該隊 Model 與 Software 頁繪製；所有數字均為該隊所報。' }
          }) +
          h.fig({
            kind: 'funnel',
            tag: { en: 'FUNNEL', zh: '漏斗' },
            title: { en: 'InSiGHT: 117,732 structures to one mutant on a frog eye', zh: 'InSiGHT：從 117,732 個結構到蛙眼上的一個突變體' },
            sub: { en: 'Log scale. Each step is a published gate, not an attrition estimate.', zh: '對數尺度。每一步都是公開寫明的篩選門檻，不是損耗估計。' },
            data: [
              { label: { en: 'Mutant structures built with FoldX and scored', zh: '用 FoldX 建出並評分的突變體結構' }, v: 117732, note: { en: 'four mutation sets plus sets made while testing the pipeline', zh: '四組突變集，加上測試流程時產生的集合' } },
              { label: { en: 'Advanced to the bench (both dockers agreed)', zh: '進入實驗檯（兩個對接程式一致）' }, v: 10, note: { en: 'picked to spread across positions and mutation counts', zh: '刻意分散在不同位置與不同突變數上' } },
              { label: { en: 'Purified', zh: '完成純化' }, v: 8, note: { en: 'β and η dropped', zh: 'β 與 η 被放棄' } },
              { label: { en: 'Taken to ITC', zh: '進到 ITC' }, v: 3, note: { en: 'α, γ, Δ, picked by yield', zh: 'α、γ、Δ，以產量挑選' } },
              { label: { en: 'Applied to a frog eye', zh: '用在蛙眼上' }, v: 1, note: { en: 'α, and it retained less than wild type', zh: 'α，而它的保留量低於野生型' } }
            ],
            opts: { log: true, dec: 0 },
            caption: { en: 'Counts read from the team\'s Model and Results pages. The ITC data was later reported as unusable.', zh: '數字讀自該隊 Model 與 Results 頁。ITC 數據後來被該隊報告為不可用。' }
          }) +
          h.h3({ en: '1 · GLARE — it never matches by name', zh: '1 · GLARE——它從不靠名稱配對' }) +
          h.p({
            en: 'GLARE filters a database of over **50,000 catalogued glycan sequences** down to **134 unique ocular structures** across cornea, tear film and lacrimal gland, then answers three questions in order: is the target there, does Gal-3 bind look-alikes elsewhere in the body, and does the target survive the disease. Its one real engineering idea is that **it never matches by name**, because nomenclature differs across databases, so it runs a motif-level structural pattern search instead; the **Tn antigen (Core 1 minus its galactose) is used as a negative control** to show Gal-3 is not binding indiscriminately. Disease is encoded as a literature-derived glycan signature because the database has no dry-eye labels, and motifs are tested with **Welch\'s t-test and Fisher\'s exact test under Benjamini-Hochberg correction**. The organ panel is lungs and kidneys plus three cancers: the eye sits on an **O-glycan axis** and the organs on an N-glycan and core-fucosylation axis, but the **cervix shares the eye\'s axis** and is named as the tissue that would need direct testing. Their own limitation list includes database coverage, the point that **presence is not abundance**, binding inferred from published microarray data rather than their own protein, and **LacNAc selectivity still unmeasured**.',
            zh: 'GLARE 把一個收錄超過 **50,000 筆醣序列**的資料庫，篩到角膜、淚膜與淚腺共 **134 個獨特的眼部結構**，然後依序回答三個問題：標靶在那裡嗎、Gal-3 會不會在身體其他地方結合相似物、標靶在疾病狀態下還存在嗎。它唯一真正的工程創意是**從不靠名稱配對**——因為不同資料庫的命名法不同——而改做模組層級的結構樣式搜尋；並以 **Tn 抗原（Core 1 去掉半乳糖）當陰性對照**，證明 Gal-3 不是什麼都結合。由於資料庫沒有乾眼症標籤，疾病是以文獻推導出的醣特徵來編碼，各個模組則以 **Welch t 檢定與 Fisher 精確檢定，並做 Benjamini-Hochberg 校正**來檢驗。器官比對組是肺、腎加上三種癌症：眼睛落在 **O-glycan 軸**上，器官落在 N-glycan 與核心岩藻糖化軸上，但**子宮頸與眼睛共用同一軸**，而且被明白點名為需要直接測試的組織。他們自己列出的限制包括資料庫覆蓋率、**「存在不等於豐度」**這一點、結合是由已發表的微陣列資料推論而非他們自己的蛋白，以及 **LacNAc 選擇性仍未量測**。'
          }) +
          h.h3({ en: '2 · InSiGHT — the panel was designed to adjudicate between two dockers', zh: '2 · InSiGHT——這組突變體是為了裁判兩個對接程式而設計的' }) +
          h.p({
            en: 'The search-space arithmetic is published first: the CRD is about **138 residues**, so all single substitutions come to **2,622** and all doubles exceed **3 million**, which is why the search is restricted to substitutions only and to **1 to 3 simultaneous mutations**. Sites come from three independent sources rather than one — literature hydrogen-bonding residues (H46, N48, R50, N62, W69, E72, plus nearby polar R32, E53, R74); a **Clustal Omega alignment of all mammalian galectins**, which **excluded W69 and N62 as perfectly conserved** and licensed non-polar substitutions at the poorly conserved E53; and a **PyMOL structural alignment of the 12 galectins that have structures**, which found the E53 to V58 loop rearranged in Gal-1 (rejected as a copy target because the change includes an insertion), splayed in Gal-8, and spotted that I33 to F in Gal-8 pushes R32 into the pocket. Structures were built with **FoldX RepairPDB then BuildModel** on PDB **3ZSJ** (X-ray, 0.86 Å, lactose-bound), chosen over AlphaFold 2 because it is cheap from an existing structure and returns a stability estimate; batching was **2 to 3 times faster than serial** and about **5 times faster on rented RunPod cloud GPUs**. The ligand is not a free sugar but a **MUC1 fragment glycosylated at Thr86 with ReGlyco**, using GLYCAM-Web sugars. Scoring is deliberately redundant — **Schrodinger Glide XP** (rigid receptor) and **HADDOCK** (flexible, information-driven) run independently, then **GROMACS** MD on the docked complexes — and the rule is stated: **only mutants supported by both dockers advance**. The wild type predicted **-4.21 kcal/mol for Core 1 and -6.21 for LacNAc** against ITC literature of -4.92 and -6.17. The ten chosen mutants were picked to spread across positions and mutation counts so that, in the team\'s own words, bench data would provide the most information possible about the model — the panel exists to discriminate between HADDOCK and Schrodinger, not to confirm either.',
            zh: '搜尋空間的算術先被公開：CRD 約 **138 個殘基**，所以所有單點取代共 **2,622** 種，所有雙點取代超過 **300 萬**種，這就是為什麼搜尋只限於取代（不含插入刪除）且只做 **1 到 3 個同時突變**。位點來自三個互相獨立的來源而非一個——文獻中的氫鍵殘基（H46、N48、R50、N62、W69、E72，加上附近的極性 R32、E53、R74）；一份**涵蓋所有哺乳類 galectin 的 Clustal Omega 比對**，它**因為完全保守而排除了 W69 與 N62**，也讓保守度低的 E53 可以做非極性取代；以及一份**對 12 個有結構的 galectin 所做的 PyMOL 結構比對**，發現 E53 到 V58 這段環在 Gal-1 中重排（因為該變化包含一段插入而被否決為模仿對象）、在 Gal-8 中外張，並注意到 Gal-8 的 I33 換成 F 會把 R32 推進口袋裡。結構以 **FoldX 的 RepairPDB 再 BuildModel** 在 PDB **3ZSJ**（X 光、0.86 Å、結合乳糖）上建出；選它而不選 AlphaFold 2，是因為由現成結構出發便宜，而且還會回傳穩定度估計。分批運算比序列執行**快 2 到 3 倍**，在租用的 RunPod 雲端 GPU 上**快約 5 倍**。配體不是游離的糖，而是**以 ReGlyco 在 Thr86 上加糖的 MUC1 片段**，糖源取自 GLYCAM-Web。評分刻意做成冗餘——**Schrodinger Glide XP**（剛性受體）與 **HADDOCK**（柔性、資訊驅動）各自獨立執行，之後再對對接後的複合體跑 **GROMACS** 分子動力學——而規則寫得很清楚：**只有兩個對接程式都支持的突變體才能往前走**。野生型預測為 **Core 1 的 -4.21 kcal/mol 與 LacNAc 的 -6.21**，對照 ITC 文獻的 -4.92 與 -6.17。最後選出的十個突變體刻意分散在不同位置與不同突變數上，用該隊自己的話說，是為了讓實驗數據「對模型提供最多的資訊」——這組突變體存在的目的是裁判 HADDOCK 與 Schrodinger，而不是替哪一邊背書。'
          }) +
          h.note({
            en: '**The pipeline disagrees with itself, in print.** Variant γ scored **-6.495** in one HADDOCK run and **-3.84 kcal/mol** in another; both numbers are published and repeats are named as necessary. The alanine-scan predictions are separately declared low-confidence with four mechanistic reasons given (H46A, N48A, R50A and N62A together scored -4.982 against the wild type\'s -4.21 kcal/mol, which is the wrong direction for an alanine scan of a binding site).',
            zh: '**這條流程自己跟自己不一致，而且照實印出來。** 變異體 γ 在一次 HADDOCK 執行中得到 **-6.495**，在另一次得到 **-3.84 kcal/mol**；兩個數字都公開，並寫明需要重複執行。丙胺酸掃描的預測另外被宣告為低可信度，並給出四個機制上的理由（H46A、N48A、R50A 與 N62A 合計得到 -4.982，而野生型是 -4.21 kcal/mol——對一個結合位點的丙胺酸掃描來說，方向是錯的）。'
          }) +
          h.h3({ en: '3 · VOIR — the abstraction level is argued for, not assumed', zh: '3 · VOIR——抽象層級是論證出來的，不是預設的' }) +
          h.p({
            en: 'VOIR uses **valentBind\'s polyfc** and justifies that choice by abstraction level: particle reaction-diffusion tools such as **eGFRD or ReaDDy 2** would resolve geometry, but receptor density is itself unmeasured in the literature, so a finer model would only add unconstrained inputs. Rtot is constructed from four literature factors and then swept rather than asserted — MUC1 per cell from an antibody epitope count giving about **5.5 x 10^3 MUC1 per cell, flagged as an upper bound** because OVCAR-3 overexpresses; O-glycan sites per MUC1; a Core 1 fraction of about **64 %**; and a Gal-3 accessibility fraction of **0.5 (range 0.2 to 0.7)**. Fixed inputs are a per-arm **Kd of 47 µM**, **L0 = 100 nM**, valency free over 1 to 5 (capped by the removal of the pentamerising N-terminal domain), Rtot scaled from **1 x 10^5 to 6.34 x 10^6 Core 1 per cell**, and an inter-epitope distance of **4 nm (range 2 to 5)**. Linkers started at (GGGGS)₁, ₃ and ₅ and were then swept continuously from **5 to 150 residues**. The outputs are an optimum at **47 residues**, **divalency 31-fold beyond additive**, **no crosslinking at all below linker length 10**, and a usable recommendation of **(GGGGS)₆₋₁₆**, within 10 % of the optimum, with the note that too long is far safer than too short. They also correct their own axis: for a divalent construct the additive floor of the avidity ratio is **2, not 1**, so only values above 2 are real crosslinking. The whole result is stated plainly as untested in vitro.',
            zh: 'VOIR 使用 **valentBind 的 polyfc**，並以抽象層級來說明這個選擇：像 **eGFRD 或 ReaDDy 2** 這類顆粒反應擴散工具能解析幾何，但受體密度本身在文獻裡就沒有被量測過，所以更細的模型只會多出一堆沒有約束的輸入。Rtot 是由四個文獻因子組成，然後掃描而不是斷言——每個細胞的 MUC1 數由抗體抗原決定位計數推得約 **5.5 x 10^3 個，並標註為上限**，因為 OVCAR-3 本身過度表達；每個 MUC1 上的 O-glycan 位點數；Core 1 佔比約 **64%**；以及 Gal-3 可及性比例 **0.5（範圍 0.2 至 0.7）**。固定輸入為每隻手臂的 **Kd 47 µM**、**L0 = 100 nM**、價數在 1 至 5 之間自由（上限來自移除了會五聚化的 N 端結構域）、Rtot 由 **1 x 10^5 掃到 6.34 x 10^6 個 Core 1 每細胞**，抗原決定位間距 **4 nm（範圍 2 至 5）**。接頭從 (GGGGS)₁、₃、₅ 開始，之後在 **5 到 150 個殘基**之間連續掃描。輸出是：最佳值在 **47 個殘基**、**二價比加成高出 31 倍**、**接頭長度低於 10 時完全不交聯**，以及一個實際可用的建議 **(GGGGS)₆₋₁₆**（落在最佳值的 10% 內），並附註「太長遠比太短安全」。他們還修正了自己的座標軸：對二價構建體來說，親和力比值的加成基準線是 **2 而不是 1**，所以只有大於 2 才是真正的交聯。整個結果被直接寫明「未經體外驗證」。'
          }) +
          h.h3({ en: '4 · I-SPY — a model of the strain they actually used', zh: '4 · I-SPY——為他們真正使用的菌株建的模型' }) +
          h.p({
            en: 'I-SPY is a genome-scale metabolic model built from **iBB1018**, a published BL21(DE3) reconstruction, because **SHuffle T7 Express is BL21-derived and no SHuffle model exists**. It uses the BiGG namespace so identifiers map unchanged, and is curated and simulated in **COBRApy** with a hand-added fusion-protein synthesis reaction whose amino-acid demands are read off the **363-residue** construct, each precursor checked and blocking steps gap-filled. A weighted biomass-against-secretion sweep produced a **Pareto frontier and an operating window** instead of a single yield number, and the bottleneck is named: the construct is **13.5 % Phe, Tyr, Trp and His**, so the **shikimate pathway** is the route to measure. Three pieces of honesty are built in. **SHuffle\'s trxB and gor knockouts cannot be represented in stoichiometric FBA, so wild-type bounds were kept.** Some gap-filled reactions lacked clear biological justification and were **flagged for review rather than trusted**. And the **validation step was designed but never run**, because no yield data existed this season; it is handed to future teams as a ready-to-run plan.',
            zh: 'I-SPY 是以已發表的 BL21(DE3) 重建模型 **iBB1018** 為基礎所建的全基因組代謝模型，理由是 **SHuffle T7 Express 源自 BL21，而且沒有 SHuffle 的模型存在**。它採用 BiGG 命名空間，讓識別碼可以原樣對應，並在 **COBRApy** 中整理與模擬，手動加入一條融合蛋白合成反應，其胺基酸需求直接由這個 **363 個殘基**的構建體讀出，每個前驅物都檢查過，被阻斷的步驟則做 gap-filling。以生物量對分泌量做加權掃描後，得到的是一個 **Pareto 前緣與操作窗口**，而不是單一產量數字；瓶頸也被指名：這個構建體有 **13.5% 是 Phe、Tyr、Trp 與 His**，所以 **shikimate 路徑**才是該去量測的那條路。裡面內建了三處誠實。**SHuffle 的 trxB 與 gor 基因剔除無法在化學計量式 FBA 中表示，所以沿用了野生型的邊界條件。** 部分 gap-filling 的反應缺乏明確的生物學依據，因此被**標記為待審查，而不是直接採信**。而**驗證步驟雖然設計好了卻從未執行**，因為這一季沒有產量數據；它被當成一份可以直接跑的計畫交給未來的隊伍。'
          }) +
          h.h3({ en: '5 · HOPE — a model that disqualified its own team\'s data', zh: '5 · HOPE——一個否定了自己隊伍數據的模型' }) +
          h.p({
            en: 'HOPE is two models of different maturity, and the page says which is which. The first is mesh size and diffusivity: a four-step chain from polymer volume fraction to mesh size to the ratio of gel and free diffusivity, on **Canal-Peppas** derived via Peppas-Merrill from Flory-Rehner, with the whole parameter table printed and sourced. Swelling is **logarithmically interpolated from Levin et al.\'s 2.03 and 5.85 kDa PEGDA data to 4 kDa**, specifically to match the PEG 4000 used at the bench, and both the interpolation equation and its nine source data points are published. Hindered diffusion uses a form with **Y = 1 declared a fitting parameter awaiting bench data**, and the hydrodynamic radius was upgraded from a **BSA placeholder of 3.6 nm** to **3.398 nm**, computed from an AlphaFold 2 structure through the **US-SOMO GRPY** method — and they say which figure uses which. Mesh size **falls from 17.5 nm to 10.3 nm between 5 % and 25 % w/v PEGDA**, with a sensitivity band for a ± 30 % error in swelling that they describe as wide enough to make swelling the single input most worth measuring. A dedicated section explains **why the model is written for a gel they never built**: Canal-Peppas needs a defined molecular weight between crosslinks, and alginate\'s calcium egg-box junctions are multi-chain and variable, so no single value exists.',
            zh: 'HOPE 其實是成熟度不同的兩個模型，而頁面上寫清楚哪個是哪個。第一個是網目大小與擴散係數：從高分子體積分率到網目大小、再到膠內與自由擴散係數比值的四步鏈，建立在由 Flory-Rehner 經 Peppas-Merrill 推導出的 **Canal-Peppas** 上，整張參數表都印出來並附出處。膨潤度是**從 Levin 等人 2.03 與 5.85 kDa PEGDA 的數據以對數內插到 4 kDa**，就是為了對應實驗檯上用的 PEG 4000，而內插方程式與九個來源資料點都公開。受阻擴散所用的式子裡，**Y = 1 被宣告為一個等待實驗數據的擬合參數**；水動力半徑則從 **BSA 的佔位值 3.6 nm** 升級為 **3.398 nm**，由 AlphaFold 2 結構經 **US-SOMO GRPY** 方法算出——而且他們會說明哪張圖用的是哪一個。網目大小**在 5% 到 25% w/v PEGDA 之間由 17.5 nm 降到 10.3 nm**，並附上膨潤度正負 30% 誤差的敏感度帶，他們形容這條帶寬到足以讓膨潤度成為最值得去量的那一個輸入。還有專門一節解釋**為什麼這個模型是為一個他們從未做出來的膠寫的**：Canal-Peppas 需要明確的交聯間分子量，而褐藻膠的鈣「蛋盒」接點是多鏈且變動的，根本不存在單一數值。'
          }) +
          h.p({
            en: 'The second model is ocular retention, and it is the most instructive thing on the page. An **OpenFOAM** attempt was abandoned because corneal absorption had to be written as a custom C++ boundary condition that never ran reliably; **COMSOL Multiphysics** is named as the planned platform but **not built**. What exists is a 1-D finite-volume Python model with a clearance term, **k_clear = 0.60 per hour**, which they call a first-pass assumption rather than a measured clearance constant, solved by implicit Euler at a **300 s** step whose convergence they say still needs checking, over four layers: lens 100 µm, tear film 5 µm, composite cornea 555 µm, aqueous humor 3 mm. The effective diffusivities are borrowed from Park et al. and **explicitly labelled as coming from intravitreal ranibizumab, not topical lens release**. And then the model is used against its own team: free protein should travel only about 1 mm in 1 h, so protein found in deeper slices **cannot be diffusion**. Therefore the diffusion assay **cannot yet yield a gel diffusivity**, and the model still runs on literature values. No release-against-time curve exists. TFOS DEWS II parameters (tear film 2 to 5.5 µm, turnover 16 ± 5 % per minute, 2 to 3 times evaporation in dry eye) are listed and deliberately **not** yet frozen into a healthy-against-disease table.',
            zh: '第二個模型是眼表滯留，也是整頁最有啟發性的部分。**OpenFOAM** 的嘗試被放棄，因為角膜吸收必須寫成一個自訂的 C++ 邊界條件，而它從來跑不穩；**COMSOL Multiphysics** 被點名為計畫中的平台，但**沒有做出來**。真正存在的是一個帶清除項的一維有限體積 Python 模型，**k_clear = 0.60 /h**，他們稱之為「第一版的假設，而非量測到的清除常數」；以隱式 Euler 法、**300 s** 時間步求解，而他們說這個步長的收斂性仍需檢查；模型跨四層：鏡片 100 µm、淚膜 5 µm、複合角膜 555 µm、前房液 3 mm。有效擴散係數借自 Park 等人，並**明白標註其來源是玻璃體內注射的 ranibizumab，而不是隱形眼鏡的局部釋放**。接著，這個模型被用來對付自己的隊伍：自由蛋白一小時只應該走大約 1 mm，所以在更深切片中找到的蛋白**不可能是擴散**。因此那個擴散實驗**目前還無法得出膠內擴散係數**，模型仍然跑在文獻數值上。沒有任何釋放對時間的曲線存在。TFOS DEWS II 的參數（淚膜 2 至 5.5 µm、更新率每分鐘 16 正負 5%、乾眼時蒸發量 2 至 3 倍）被列出，而且刻意**還沒有**被固化成一張健康對疾病的對照表。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'ua-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Two arms of the project are reported as failed measurements', zh: '專案中有兩條支線被直接報告為失敗的量測' },
        lede: {
          en: 'The honesty runs in both directions here. Wet-lab results killed a part and an entire assay, and a dry-lab model was used to disqualify a wet-lab assay rather than to dress it up.',
          zh: '這裡的誠實是雙向的。濕式結果殺掉了一個零件和一整套量測，而一個乾式模型被用來否定一個濕式實驗，而不是替它化妝。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'killed twice', zh: '兩次被殺掉' }, k: 'r' }],
              h: { en: 'CD44 was the wrong part, in two separate ways', zh: 'CD44 以兩種方式都是錯的零件' },
              p: { en: 'The two three-domain CD44 constructs never assembled, and the fragment they had already cloned turned out to be the **insoluble transmembrane region**, not the soluble HA-binding domain. A parallel literature review added that CD44 is a multifunctional cancer-associated receptor, which is a liability in a therapeutic. It was replaced by HABpep₂ at **126 bp, about one fifth the length**, after which the equivalent three-domain construct cloned successfully. TOP10 cells and electroporation were both tried on the failed constructs first.', zh: '兩個含 CD44 的三結構域構建體始終組裝不起來，而他們已經選殖好的那段片段，結果是**不可溶的跨膜區**，不是可溶的 HA 結合區。同時進行的文獻回顧又補上一點：CD44 是一個多功能、與癌症相關的受體，對治療用途而言是個風險。它被 **126 bp、長度約五分之一**的 HABpep₂ 取代，之後同樣的三結構域構建體就選殖成功了。在放棄之前，他們也先對失敗的構建體試過 TOP10 細胞與電穿孔。' } },
            { chips: [{ t: { en: 'failed measurement', zh: '失敗的量測' }, k: 'r' }],
              h: { en: 'The entire ITC arm, including its controls', zh: '整條 ITC 支線，連對照一起' },
              p: { en: 'The full therapeutic\'s Kd of about 298 nM is two orders of magnitude stronger than the literature 45 µM and is called not credible. The **Galectin-3 positive control gave no interpretable binding**, and even the **buffer-only control misbehaved**. Three causes are named (buffer mismatch, components with high heat of ionisation, co-purifying contaminants) and three fixes (dialysis, simple low-ionisation buffers, size-exclusion chromatography). The whole arm is reported as a failed measurement rather than as a result with a caveat.', zh: '完整治療蛋白的 Kd 約 298 nM，比文獻的 45 µM 強了兩個數量級，被該隊稱為不可信。**Galectin-3 陽性對照完全沒有可解讀的結合**，連**只有緩衝液的對照也表現異常**。他們點出三個原因（緩衝液不匹配、含高離子化熱的成分、共純化的雜質）與三個解法（透析、簡單的低離子化緩衝液、粒徑排除層析）。整條支線被報告為一次失敗的量測，而不是「附帶警語的結果」。' } },
            { chips: [{ t: { en: 'opposite of intent', zh: '與設計意圖相反' }, k: 'r' }],
              h: { en: 'HA binding beat glycan binding, and the engineered mutant was worse', zh: 'HA 結合勝過醣結合，而改造過的突變體更差' },
              p: { en: 'On the frog eye, mScarlet_HABpep₂ retained 10 % while mScarlet_Galectin-3 retained 2.89 % and variant α retained **0.675 %** — the opposite of the design intent. The team then disqualifies its own comparison, because applied concentrations ranged 50 to 2,932 µg/mL and were never matched, n = 3 with large variance. Separately, **Galectin-3_mScarlet was indistinguishable from the mScarlet control on ASF**, so the glycan anchor never demonstrated itself in isolation.', zh: '在蛙眼上，mScarlet_HABpep₂ 保留 10%，而 mScarlet_Galectin-3 保留 2.89%、變異體 α 只有 **0.675%**——與設計意圖完全相反。接著團隊自己否定這組比較，因為施用濃度從 50 到 2,932 µg/mL，從未配平，而且 n = 3、變異很大。另外，**在 ASF 上 Galectin-3_mScarlet 與 mScarlet 對照無法區分**，所以醣錨定從未單獨證明過自己。' } },
            { chips: [{ t: { en: 'self-disqualified', zh: '自己判定不成立' }, k: 'a' }],
              h: { en: 'The transport model rejected the diffusion assay', zh: '傳輸模型否決了擴散實驗' },
              p: { en: 'Protein appearing in slice 2 within 1 h is not consistent with diffusion — the 1-D model says free protein should travel only about 1 mm in that time — so the suspected cause is **seepage along the gel and tube wall, or carry-over during slicing**. One run per formulation. And because the probe carries HABpep while the gel contains HA, the measured transport is confounded by the very binding the project wants: the **no-HABpep and no-HA controls are named as still undone**.', zh: '一小時內就出現在第 2 片的蛋白不符合擴散——一維模型說自由蛋白在那段時間只應該走大約 1 mm——所以懷疑的原因是**沿著膠體與管壁的滲漏，或切片時的帶入**。每種配方只跑一次。而且因為探針帶著 HABpep、膠裡又含有 HA，量到的傳輸被專案本身想要的那個結合混淆了：**沒有 HABpep 與沒有 HA 的對照被明白寫成「尚未做」**。' } },
            { chips: [{ t: { en: 'never obtained', zh: '買不到' }, k: 'a' }],
              h: { en: 'The gel the model was written for was never built', zh: '模型所針對的那個膠從來沒做出來' },
              p: { en: '**PEGDA and MeHA could not be obtained**, and the unfunctionalised substitutes did not gel. Xanthan gum at 1 to 10 % never gelled and was dropped; 10 mM CaSO4 gave the stiffest smoothest gel but left visible undissolved chunks and was dropped; 5 mM CaEDTA did not gel. The alginate formulation that was actually built is the one Canal-Peppas cannot model, which is why the mesh-size theory and the bench gel never meet.', zh: '**PEGDA 與 MeHA 買不到**，而未官能化的替代品不會膠化。1 到 10% 的 xanthan gum 始終不膠化而被放棄；10 mM CaSO4 做出最硬最平滑的膠，卻留下看得見的未溶解顆粒而被放棄；5 mM CaEDTA 不膠化。真正做出來的褐藻膠配方，恰好是 Canal-Peppas 無法建模的那一種，這就是為什麼網目理論與實驗檯上的膠始終碰不到一起。' } },
            { chips: [{ t: { en: 'declared unvalidated', zh: '明文宣告未驗證' }, k: 'a' }],
              h: { en: 'A list the team wrote itself', zh: '一份團隊自己寫出來的清單' },
              p: { en: 'VOIR\'s linker optimum, never tested in vitro. I-SPY\'s yield prediction, validation plan unrun. HOPE\'s release model, with no release curve, Y = 1 unfitted and gel diffusivity taken from the literature. The final hydrogel formulation, which "still needs full characterization". GLARE\'s dry-eye enrichment magnitude and its Core-1-over-LacNAc selectivity, both of which still have to be measured. And the **ε outlier at 0.25 µM giving 97 % retention with SD 0.048**, printed as something that warrants further investigation before any conclusions are drawn.', zh: 'VOIR 的接頭最佳值，從未在體外測試。I-SPY 的產量預測，驗證計畫未執行。HOPE 的釋放模型，沒有釋放曲線、Y = 1 未擬合、膠內擴散係數取自文獻。最終水膠配方，「仍需完整表徵」。GLARE 的乾眼富集幅度與 Core 1 相對 LacNAc 的選擇性，兩者都還沒量測。還有 **ε 在 0.25 µM 給出 97% 保留、SD 0.048 的離群值**，被印出來並註明「在做出任何結論之前值得進一步研究」。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'ua-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Build every architecture twice, once with the reporter and once with the real payload.** This is the cheapest idea on their wiki and the one with the largest effect: because mScarlet and IL-1RA versions exist side by side, any binding behaviour can be attributed to the targeting domains rather than to the cargo. It also means a failed therapeutic arm still leaves a readable reporter arm.', zh: '**每一種架構都做兩次，一次接報告蛋白、一次接真正的酬載。** 這是他們 wiki 上最便宜、效果卻最大的一個想法：因為 mScarlet 版與 IL-1RA 版並排存在，任何結合行為都能歸因於標靶結構域而不是酬載。這也意味著治療支線失敗了，報告支線還是讀得出東西。' },
            { en: '**Put the whole mutant panel on one primer pair and one expected band, then say out loud that the band proves nothing.** Eleven variants on the same Galectin-3_mScarlet scaffold share one amplicon of about 1,202 bp, so the panel screens on a single gel — and the page states that since the variants differ only by point substitutions, sequencing is the gate. That is a cheap screen with its own limitation printed next to it.', zh: '**讓整組突變體共用一對引子與一個預期條帶，然後大聲說出條帶什麼也不能證明。** 十一個變異體都在同一個 Galectin-3_mScarlet 骨架上，共用一個約 1,202 bp 的片段，所以整組在一片膠上就篩完了——而頁面上寫明，既然變異體之間只差點突變，定序才是門檻。這是一個便宜的篩選，而且限制就印在旁邊。' },
            { en: '**Declare the error band before you rank anything.** Glide XP reproduces affinities to about 2 kcal/mol, FoldX differs from experiment by 1.0 to 1.78, so differences of 1 kcal/mol or less between mutants are declared meaningless. Writing that down first is what stops a ranking table from becoming a ranking claim.', zh: '**在排序任何東西之前先宣告誤差帶。** Glide XP 重現親和力的誤差約 2 kcal/mol、FoldX 與實驗相差 1.0 到 1.78，因此突變體之間 1 kcal/mol 以內的差異被宣告沒有意義。先把這件事寫下來，才能讓一張排序表不會變成一個排序主張。' },
            { en: '**Make the control the threshold, and name the number.** mScarlet\'s 2.6 % non-specific adsorption on HA is not a footnote; it is the line everything else is measured against, which is why "1.1 to 1.7 times baseline" can be called not significant without further argument.', zh: '**把對照變成門檻，並把數字說出來。** mScarlet 對 HA 的 2.6% 非專一吸附不是註腳，而是其他一切被量測的那條線；這就是為什麼「基線的 1.1 至 1.7 倍」可以不必再多論證就被判為不顯著。' },
            { en: '**Let a model contradict your own bench data in public.** The 1-D transport model says free protein travels about 1 mm in 1 h, so protein in slice 2 after 1 h cannot be diffusion. They print that, and the diffusion assay loses the right to produce a number. A team that never lets the model argue back has a decoration, not a model.', zh: '**讓模型公開反駁你自己的實驗數據。** 一維傳輸模型說自由蛋白一小時走大約 1 mm，所以一小時後出現在第 2 片的蛋白不可能是擴散。他們把這件事印出來，於是擴散實驗失去了產出數字的資格。一支從不讓模型回嘴的隊伍，手上有的是裝飾品，不是模型。' },
            { en: 'What we would **not** copy: running the key affinity measurement in a buffer matched by dilution because no dialysis equipment was available. The ITC arm cost nine titrations and produced nothing usable, including its controls. If the only available buffer match is a dilution, the honest move is to postpone the experiment rather than to run it and then explain it.', zh: '我們**不會**抄的是：因為沒有透析設備，就用稀釋去配平緩衝液來跑最關鍵的親和力量測。那條 ITC 支線花掉九次滴定，卻什麼可用的都沒產出，連對照都是。如果唯一能做到的配平方式是稀釋，誠實的做法是把實驗延後，而不是跑完再解釋。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'UAlberta is the clearest case on this site of a project built so that failure is informative: the library was designed for subtraction, the mutant panel was chosen to adjudicate between two dockers rather than to confirm either, and when the bench contradicted the design — HA beating glycan, the engineered mutant retaining less than wild type, the transport model refusing the diffusion data — all of it was published at the strength the evidence actually supports.',
            zh: 'UAlberta 是本站最清楚的一個例子：整個專案被設計成「失敗也有資訊」——基因庫為相減而設計、突變體組是為裁判兩個對接程式而選，而不是為了替哪一邊背書；當實驗檯反過來否定設計時——HA 勝過醣、改造過的突變體保留得比野生型少、傳輸模型拒絕採用擴散數據——這些全部都以證據真正支撐得起的強度被公開。'
          })
      });

      return out;
    }
  };
})(window);
