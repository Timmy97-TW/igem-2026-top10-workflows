/* UOttawa — Nulfur. Top 10 Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/uottawa/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Domesticate the vector', zh: '把載體馴化' },
        s: { en: 'Three rounds of site-directed mutagenesis on pBBR1MCS-2, KLD recircularised, sequenced every round', zh: '對 pBBR1MCS-2 做三輪定點突變、以 KLD 重新環化，每一輪都全質體定序' } },
      { l: { en: 'Golden Gate, third time lucky', zh: 'Golden Gate，第三次才成' },
        s: { en: 'Circular pTwist gave empty vector; PCR\'d inserts at 2:1 gave all five in order — GGA6, 11,312 bp', zh: '用環狀 pTwist 只得到空載體；改以 PCR 擴增插入片段、2:1 比例，五個片段全部正確排列——GGA6，11,312 bp' } },
      { l: { en: 'Build a transformation protocol', zh: '自己做一套轉形流程' },
        s: { en: 'Electroporation gave zero colonies; a heat-shock factorial over three variables gave >500 GGA6 against 2', zh: '電穿孔零菌落；針對三個變項做熱衝擊因子設計，GGA6 菌落由 2 個變成 >500 個' } },
      { l: { en: 'Diagnose solubility before fixing it', zh: '先診斷溶解度，再去修它' },
        s: { en: 'DszA and DszB soluble; DszC, LacI and frm insoluble in both chassis, both holding plasmids and GGA6', zh: 'DszA 與 DszB 可溶；DszC、LacI、frm 在兩種宿主、兩種保存質體與 GGA6 中都不可溶' } },
      { l: { en: 'Characterise the promoters first', zh: '先把啟動子特性量出來' },
        s: { en: 'BG42/17/37/28 driving mScarlet-i; BG17 ≈ BG37, so three tiers not four, against the published ranking', zh: 'BG42/17/37/28 驅動 mScarlet-i；BG17 ≈ BG37，所以只有三級而非四級，與已發表排序不符' } },
      { l: { en: 'Assay the library, then the real feedstock', zh: '測試基因庫，再測真實原料' },
        s: { en: 'Gibbs at A610: only construct 6 gave signal; rhamnolipid E24 ≈ 95 % in diesel but ≈ 20 % in dilbit', zh: 'Gibbs 試劑於 A610：只有 6 號構建體有訊號；rhamnolipid 的 E24 在柴油約 95%，在稀釋瀝青約 20%' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Cofactor: an agentic harness', zh: 'Cofactor：一套代理式框架' },
        s: { en: 'Model-agnostic LLM, a phase machine, a 16-table SQLite store; it proposed the six DszC solubility mutants', zh: '不綁模型的 LLM、一台階段機、一個 16 張表的 SQLite 儲存層；六個 DszC 溶解度突變體就是它提的' } },
      { l: { en: 'Evaluate the harness, not the model', zh: '評估框架，而不是模型' },
        s: { en: 'Four regimes across six arms; 37/37 probes hold, and one found a real bypass in their own web API', zh: '四種設定、六個測試臂；37 個探針全部通過，其中一個找出他們自己 web API 的真實繞過漏洞' } },
      { l: { en: 'Two deliberately unlike predictors', zh: '兩個刻意不相似的預測器' },
        s: { en: 'FoldX intersect ThermoMPNN, then GROMACS with thresholds taken from the wild type\'s own fluctuations', zh: 'FoldX 與 ThermoMPNN 取交集，再以野生型自身波動所定的門檻跑 GROMACS' } },
      { l: { en: 'Consortium model, two ways', zh: '菌群模型，兩種做法' },
        s: { en: 'Analytical mass transfer gives 2.8–34×; iJN1463 FBA says metabolism does not bottleneck uptake', zh: '解析式質傳給出 2.8–34 倍；iJN1463 FBA 說代謝不是攝取的瓶頸' } },
      { l: { en: 'Cost and carbon', zh: '成本與碳排' },
        s: { en: 'Turton module costing → $4.57/bbl against $9.52 for HDS; openLCA 2 → 2.67 against 8.73 kg CO₂e/bbl', zh: 'Turton 模組成本法→每桶 $4.57，HDS 為 $9.52；openLCA 2→每桶 2.67 對 8.73 kg CO₂e' }, tone: 'g' }
    ],
    links: [
      { w: 3, d: 0, l: { en: 'the cheap fixes failed, so DszC goes to the harness', zh: '便宜的解法都失敗，DszC 交給框架' } },
      { w: 3, d: 2, l: { en: 'six designed mutants come back, all still insoluble', zh: '六個設計出來的突變體回到實驗檯，全部仍不可溶' }, up: true },
      { w: 5, d: 3, l: { en: 'their own dilbit E24 is filed against their own model', zh: '他們把自己的稀釋瀝青 E24 列為自家模型的反證' } }
    ]
  };

  PD.pages.uottawa = {
    label: { en: 'UOttawa', zh: 'UOttawa' },
    title: { en: 'UOttawa — Nulfur', zh: 'UOttawa — Nulfur' },
    render: function (h) {
      var t = team('uottawa');
      var out = h.teamhero(t, {
        h1: {
          en: 'Their one positive activity result came out ==stoichiometrically impossible==, so they printed the number, named the calibration artefact, and downgraded their own claim.',
          zh: '他們唯一的陽性活性結果在==化學計量上根本不可能==，於是他們把數字印出來、指出校正的瑕疵，並自己把主張降級。'
        },
        lede: {
          en: 'Nulfur replaces hydrodesulfurization with the 4S pathway in Pseudomonas putida KT2440, a chassis chosen because its RND efflux pumps survive a solvent load that kills E. coli. The wiki names the four reasons biodesulfurization stalled industrially — feedback inhibition, slow kinetics, thermal instability, metabolic cost — and then organises the entire project as one engineering tier per limitation. Before any of that, it admits the chassis has no toolkit, and closes and publishes the three missing pieces first.',
          zh: 'Nulfur 要用 4S 路徑取代加氫脫硫，宿主選的是 Pseudomonas putida KT2440，因為它的 RND 外排泵能在會殺死 E. coli 的溶劑負荷下存活。wiki 上指名了生物脫硫在工業上停滯的四個原因——產物回饋抑制、動力學太慢、熱穩定性不足、代謝成本——然後把整個專案組織成「每個限制對應一個工程層級」。而在這一切之前，他們先承認這個宿主沒有工具箱，並且先把缺的三樣東西補齊並公開。'
        },
        chips: [
          { t: { en: '4S pathway in P. putida KT2440', zh: 'P. putida KT2440 的 4S 路徑' }, k: 'b' },
          { t: { en: 'Golden-Gate pBBR1MCS-2', zh: 'Golden-Gate 版 pBBR1MCS-2' }, k: 'v' },
          { t: { en: 'Cofactor agentic AI', zh: 'Cofactor 代理式 AI' }, k: 'a' },
          { t: { en: 'FoldX ∩ ThermoMPNN', zh: 'FoldX ∩ ThermoMPNN' }, k: 'g' },
          { t: { en: 'TEA plus LCA in openLCA 2', zh: 'TEA 加 openLCA 2 的 LCA' }, k: 't' }
        ],
        stats: [
          { v: '1 of 24', l: { en: 'Library constructs that produced an activity signal', zh: '基因庫中真正產生活性訊號的構建體' } },
          { v: '11,312 bp', l: { en: 'GGA6, the five-gene pathway on one plasmid', zh: 'GGA6，把五個基因放在一個質體上的全路徑' } },
          { v: '4.68 µM', l: { en: '2-HBP from 1 µM DBT — impossible at 1:1, published anyway', zh: '由 1 µM DBT 得到的 2-HBP——1:1 下不可能，仍照實公開' } },
          { v: '37 / 37', l: { en: 'Adversarial and numerical probes that held on their own harness', zh: '在自家框架上通過的對抗性與數值探針' } },
          { v: '−69 %', l: { en: 'BDS against HDS greenhouse gas, 2.67 against 8.73 kg CO₂e/bbl', zh: 'BDS 相對 HDS 的溫室氣體，每桶 2.67 對 8.73 kg CO₂e' } },
          { v: '$4.57', l: { en: 'Net production cost per barrel, against $9.52 for HDS', zh: '每桶淨生產成本，HDS 為 $9.52' } }
        ]
      });

      out += h.toc([
        { id: 'uo-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'uo-swim', t: { en: 'Wet and dry', zh: '濕式與乾式' } },
        { id: 'uottawa-wik', t: { en: 'Their figures', zh: '他們的圖' } },
        { id: 'uo-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'uo-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'uo-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'uo-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'uo-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'uo-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'One engineering tier per named limitation', zh: '每一個被指名的限制，對應一個工程層級' },
        lede: {
          en: 'The 4S pathway runs in four steps: DszC oxidises dibenzothiophene to the sulfone, DszA opens the ring to a sulfinate, DszB cleaves the carbon-sulfur bond releasing 2-hydroxybiphenyl and sulfite, and DszD or a flavin reductase regenerates FMNH₂.',
          zh: '4S 路徑分四步：DszC 把 dibenzothiophene 氧化成 sulfone、DszA 開環成 sulfinate、DszB 切斷碳－硫鍵釋出 2-hydroxybiphenyl（2-HBP）與亞硫酸鹽，而 DszD 或黃素還原酶負責再生 FMNH₂。'
        },
        body:
          h.p({
            en: 'The structural decision is that the project is not organised by subteam but by limitation. Four reasons biodesulfurization stalled industrially are named up front — **feedback inhibition, slow kinetics, thermal instability, metabolic cost** — and then one engineering tier is built per limitation: **enzyme** (stability and solubility), **regulatory** (promoter tuning), **cellular** (biosurfactant plus consortium). Every later page, including the techno-economic analysis and the life-cycle assessment, argues against that same list. The chassis is **Pseudomonas putida KT2440**, chosen because its RND efflux pumps — TtgABC, TtgGHI, SrpABC — survive a solvent load that kills *E. coli*.',
            zh: '結構上的決定是：這個專案不是按子團隊劃分，而是按限制劃分。他們一開始就指名生物脫硫在工業上停滯的四個原因——**產物回饋抑制、動力學太慢、熱穩定性不足、代謝成本**——然後針對每個限制建一個工程層級：**酵素層**（穩定性與溶解度）、**調控層**（啟動子調校）、**細胞層**（生物界面活性劑加菌群）。之後每一頁，包括技術經濟分析（TEA）與生命週期評估（LCA），都是在針對同一張清單論證。宿主是 **Pseudomonas putida KT2440**，選它的理由是它的 RND 外排泵——TtgABC、TtgGHI、SrpABC——能在會殺死 *E. coli* 的溶劑負荷下存活。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'prerequisite', zh: '前置條件' }, k: 'b' }],
              h: { en: 'The chassis has no toolkit, and they say so first', zh: '宿主沒有工具箱，而他們先把這件事說出來' },
              p: { en: 'The Alternative Platform page opens by naming three gaps before any experiment: **no Golden-Gate-compatible broad-host-range vector for KT2440, no promoter set with measured strengths in this chassis, and no reliable transformation protocol.** The wet lab is then written as closing those three in order, and all three are published as artifacts — including two novel protocol PDFs among the 28 the team released.', zh: 'Alternative Platform 頁一開頭就在任何實驗之前指出三個缺口：**KT2440 沒有相容 Golden Gate 的廣宿主載體、這個宿主裡沒有一組量測過強度的啟動子、也沒有可靠的轉形流程。** 接著整個濕式流程就是依序把這三個缺口補起來，而三者都以可交付成果的形式公開——其中包含該隊釋出的 28 份流程 PDF 裡的兩份全新流程。' } },
            { chips: [{ t: { en: 'baseline first', zh: '先做基準線' }, k: 'v' }],
              h: { en: 'A deliberately non-industrial baseline', zh: '一個刻意不具工業可行性的基準線' },
              p: { en: 'The pathway is built IPTG-inducible, and the team says plainly why that is not viable at scale. Literature mutations are baked into the baseline rather than rediscovered: **DszB Y63F** for kinetics, **DszC W327C plus A101K** to relieve product inhibition, and the native flavin reductase replaced by **frm from *Mycobacterium phlei***. The dry-lab mutation campaign then targets stability only, explicitly because kinetics and product inhibition are already handled.', zh: '這條路徑被做成 IPTG 誘導型，而團隊直接說明為什麼這在規模化時不可行。文獻上的突變是直接寫進基準線，而不是再重新發現一次：**DszB Y63F** 改善動力學、**DszC W327C 加 A101K** 緩解產物抑制，並以**來自 *Mycobacterium phlei* 的 frm** 取代原生的黃素還原酶。因此乾式的突變工作只針對穩定性，理由明說是動力學與產物抑制已經處理掉了。' } },
            { chips: [{ t: { en: 'assembly grammar', zh: '組裝文法' }, k: 'g' }],
              h: { en: 'Designed so it cannot assemble wrong', zh: '設計成「組不錯」' },
              p: { en: 'The five inserts — dszA, dszB, dszC, frm and lacI from *Rhodococcus erythropolis*, codon-optimised for KT2440 — have ends designed so the pathway **cannot ligate out of order**. Each gene gets **a different terminator**, specifically so that later promoter swaps would not create recombination substrates. And the tags are split **FLAG on DszA and DszB, His6 on DszC, frm and LacI** so that two blots cover five proteins.', zh: '五個插入片段——來自 *Rhodococcus erythropolis* 並針對 KT2440 做密碼子最佳化的 dszA、dszB、dszC、frm 與 lacI——末端都設計成讓這條路徑**不可能以錯誤順序接起來**。每個基因配**不同的終止子**，就是為了讓之後更換啟動子時不會產生重組的基質。標籤也刻意分開：**DszA 與 DszB 掛 FLAG，DszC、frm 與 LacI 掛 His6**，於是兩張墨點就能覆蓋五個蛋白。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'uo-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A loop that closes on the insoluble enzyme, and fails there', zh: '一個在不可溶酵素上閉合、也在那裡失敗的迴圈' },
        lede: {
          en: 'The first two arrows are a complete design cycle: the bench hands an unsolved problem to an agentic harness, the harness proposes six mutants, and all six come back still insoluble. The third arrow is the team filing their own measurement as evidence against their own model.',
          zh: '前兩條箭頭構成一個完整的設計迴圈：實驗檯把一個未解的問題交給代理式框架、框架提出六個突變體、六個全部回來且仍然不可溶。第三條箭頭則是團隊把自己的量測結果，列為自己模型的反證。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'Nulfur: six wet stages, five dry stacks', zh: 'Nulfur：六個濕式階段、五層乾式堆疊' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Design, Results, Alternative Platform, Model, Software and Proof of Concept pages.', zh: '由我們依該隊 Design、Results、Alternative Platform、Model、Software、Proof of Concept 各頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the figures they drew themselves ---------------- */
      out += h.wikifigs('uottawa');

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'uo-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Close the toolkit gaps first, then build the library', zh: '先把工具箱的缺口補起來，再去建基因庫' },
        lede: {
          en: 'The distinguishing habit is that failure analysis is built into the method rather than appended to it: a one-tube colony-PCR proxy before paying for sequencing, cheap expression fixes exhausted before protein engineering is allowed to start.',
          zh: '最有辨識度的習慣是：失敗分析被內建在方法裡，而不是事後附加——在付錢定序之前先用一管菌落 PCR 當代理指標，在允許蛋白工程開始之前先把便宜的表達補救手段用盡。'
        },
        body:
          h.phases([
            { h: { en: 'Domesticate pBBR1MCS-2', zh: '馴化 pBBR1MCS-2' },
              p: { en: 'A pBBR1 origin, low copy, KanR vector that replicates in both *E. coli* and *P. putida*. It had no BsaI sites in the multiple cloning site and one extra BsaI site outside it.', zh: '這是一個 pBBR1 起點、低拷貝、帶 KanR，而且在 *E. coli* 與 *P. putida* 中都能複製的載體。它的多重選殖區（MCS）內沒有 BsaI 位點，而在 MCS 之外多了一個。' },
              items: [
                { en: '**Three rounds of site-directed mutagenesis** — remove the external site, then add two directional BsaI sites in the MCS — each recircularised by **KLD**, transformed into DH5α, and **whole-plasmid sequenced after every round**.', zh: '**三輪定點突變**——先移除外部位點，再在 MCS 內加入兩個具方向性的 BsaI 位點——每一輪都以 **KLD** 重新環化、轉形進 DH5α，並**在每一輪後做全質體定序**。' },
                { en: 'Published as **BBa_26NZYISB**, and flagged **not RFC1000-compatible** because it contains BsaI sites. The wiki contradicts itself on which site was removed: Results says position 1,383 (C to T), Alternative Platform says inside the kanamycin resistance gene.', zh: '以 **BBa_26NZYISB** 公開，並標註**不符合 RFC1000**，因為它含有 BsaI 位點。wiki 對「移除了哪一個位點」自相矛盾：Results 頁說是 1,383 位（C 變 T），Alternative Platform 頁說是在卡那黴素抗性基因內。' }
              ] },
            { h: { en: 'Golden Gate, three iterations, and the lesson in two parts', zh: 'Golden Gate 三次迭代，以及分成兩半的教訓' },
              p: { en: 'Iteration 1 was not an assembly at all but a miniprep yield study: 5 mL against 20 mL LB, 37 °C for 16 h, NanoDrop. 20 mL won, and a 260/230 ratio near 1 from residual ethanol was fixed by an extra spin.', zh: '第一次迭代根本不是組裝，而是一個 miniprep 產量研究：5 mL 對 20 mL LB、37 °C、16 小時、NanoDrop 定量。20 mL 勝出，而殘留乙醇造成的 260/230 比值接近 1，則以多離心一次解決。' },
              items: [
                { en: 'Iteration 2 left the inserts in circular pTwist at **1:1 molar** with BsaI plus T4 ligase. Colonies grew, but **sequencing showed empty vector only**, blamed on BsaI inefficiency cutting inserts out of holding plasmids.', zh: '第二次迭代把插入片段留在環狀 pTwist 上、以 **1:1 莫耳比**加 BsaI 與 T4 連接酶。菌落長出來了，但**定序顯示只有空載體**，原因歸於 BsaI 從保存質體上切出插入片段的效率不足。' },
                { en: 'Iteration 3 PCR-amplified each insert with **universal primers binding outside the pTwist MCS (pTwistFWD and pTwistREV)** and assembled at **2:1**. All colonies carried all five inserts in the correct order.', zh: '第三次迭代改用**結合在 pTwist MCS 之外的通用引子（pTwistFWD 與 pTwistREV）**把每個插入片段 PCR 擴增出來，再以 **2:1** 組裝。所有菌落都帶著五個片段，而且順序正確。' },
                { en: 'The lesson is written down in two parts, not one: **the insert must be in excess, and you need a screen.**', zh: '教訓被寫成兩半，而不是一句：**插入片段必須過量，而且你需要一道篩選。**' }
              ],
              done: { en: 'Final construct GGA6, 11,312 bp.', zh: '最終構建體 GGA6，11,312 bp。' } },
            { h: { en: 'A screen designed to be cheap before thorough', zh: '一道「先便宜、後周全」的篩選' },
              p: { en: 'Three primer pairs, each answering a different question about the same plasmid, so that a single tube can rule a colony out before anyone pays for a full read.', zh: '三對引子，各自回答同一個質體上的不同問題，讓一管反應就能在有人付錢做完整定序之前先排除掉一個菌落。' },
              items: [
                { en: '**internalFWD and internalREV** across dszC, in the middle of the construct, **1408 bp**, as a one-tube proxy for full assembly; **circuitFWD with internalREV** for the lacI-dszB-dszC half (**3789 bp**); **internalFWD with circuitREV** for the dszC-dszA-frm half (**3460 bp**).', zh: '**internalFWD 與 internalREV** 跨越構建體中段的 dszC，**1408 bp**，作為「整體組裝成功」的一管式代理指標；**circuitFWD 配 internalREV** 檢查 lacI-dszB-dszC 這一半（**3789 bp**）；**internalFWD 配 circuitREV** 檢查 dszC-dszA-frm 這一半（**3460 bp**）。' },
                { en: 'Taq colony PCR on 1.0 % agarose with SYBR Safe, with a **holding-plasmid positive and a no-template negative on every gel**. Only PCR-positives went to whole-plasmid sequencing at Flowgenomics.', zh: 'Taq 菌落 PCR、1.0% 洋菜膠加 SYBR Safe，**每一片膠都帶保存質體陽性對照與無模板陰性對照**。只有 PCR 陽性的才送 Flowgenomics 做全質體定序。' }
              ] },
            { h: { en: 'Build a transformation protocol, because the standard one gave zero', zh: '自己做一套轉形流程，因為標準方法給出零' },
              p: { en: 'Electroporation per Wang et al. failed with repeated ARC errors. They tried new cuvettes, chilled components, DNA re-purification, salt reduction and altered parameters: zero colonies throughout. They also found that KT2440 is intrinsically ampicillin resistant, which silently invalidated selection for every AmpR pTwist construct, so individual-enzyme expression moved to E. coli BL21 and was never repeated in the real chassis.', zh: '依 Wang 等人做的電穿孔反覆出現 ARC 錯誤。他們換新的電穿孔槽、預冷試劑、重新純化 DNA、降低鹽濃度、調整參數：全程零菌落。他們還發現 KT2440 本身就對安比西林具抗性，這使得每一個 AmpR 的 pTwist 構建體的篩選悄悄失效，因此單一酵素的表達工作移到 E. coli BL21，而且從未在真正的宿主上重做。' },
              items: [
                { en: 'They then built a heat-shock protocol for chemically competent *P. putida*, from Giri et al., and optimised it as a factorial over exactly **three variables**: storage (24 h at 4 °C against flash-freeze at −80 °C), heat shock (42 °C for 45 s against 50 °C for 3 min), recovery (2 h against 6 h). Two rounds, with a no-DNA negative and an empty-pBBR1MCS-2 positive on every plate, colonies counted.', zh: '接著他們依 Giri 等人建立一套化學勝任態 *P. putida* 的熱衝擊流程，並針對恰好**三個變項**做因子設計最佳化：保存方式（4 °C 24 小時 對 −80 °C 急凍）、熱衝擊（42 °C 45 秒 對 50 °C 3 分鐘）、恢復時間（2 小時 對 6 小時）。做了兩輪，每一盤都帶無 DNA 的陰性對照與空 pBBR1MCS-2 的陽性對照，並計數菌落。' },
                { en: '**Test 1 best was Trial 3** (4 °C for 24 h, 42 °C for 45 s, 6 h recovery): **over 1000 pBBR1MCS-2 and over 500 GGA6 colonies, against the standard protocol\'s 184 and 2** — roughly a tenfold gain.', zh: '**第一次測試最好的是 Trial 3**（4 °C 24 小時、42 °C 45 秒、恢復 6 小時）：**pBBR1MCS-2 超過 1000 個菌落、GGA6 超過 500 個，而標準流程分別只有 184 與 2 個**——大約十倍的提升。' },
                { en: 'Test 2 isolated the freeze question and showed the *same* conditions giving 4 colonies in Test 1 and over 1000 in Test 2; they **attribute that to operator practice rather than biology, and say so**. The recommendation carries its own limit: freezing is fine for plasmids of 5 kb or less, 24 h at 4 °C for larger ones.', zh: '第二次測試單獨檢驗冷凍這個變項，結果發現**完全相同**的條件在第一次測試只得 4 個菌落、在第二次測試卻超過 1000 個；他們**把這歸因於操作者熟練度而非生物學，並且明說出來**。這條建議也帶著自己的限制：5 kb 以下的質體可以冷凍保存，更大的則用 4 °C 存 24 小時。' }
              ],
              done: { en: 'The protocol is published in full: NaCl to CaCl₂ to CaCl₂ with 10 % glycerol, 3000 × g at 4 °C, 50 µL aliquots, 100 to 200 ng DNA, 450 µL pre-warmed SOC.', zh: '流程完整公開：NaCl→CaCl₂→CaCl₂ 加 10% 甘油、4 °C 下 3000 × g、分裝 50 µL、DNA 100 至 200 ng、450 µL 預熱的 SOC。' } },
            { h: { en: 'Diagnose solubility, then exhaust the cheap fixes', zh: '先診斷溶解度，再把便宜的解法用盡' },
              p: { en: 'Westerns on 10 to 12 % gels, 60 min at 120 V; anti-FLAG or anti-His at 1:2000 overnight, HRP-anti-mouse at 1:10000, Thermo ECL; 0.5 mM IPTG overnight at 16 to 18 °C; lysozyme plus sonication; soluble and insoluble fractions run side by side. A His-tagged molecular-weight marker served as an internal antibody-performance control.', zh: 'Western 在 10 至 12% 的膠上跑、120 V 60 分鐘；anti-FLAG 或 anti-His 以 1:2000 隔夜、HRP-anti-mouse 1:10000、Thermo ECL 顯色；0.5 mM IPTG 於 16 至 18 °C 隔夜誘導；溶菌酶加超音波破菌；可溶與不可溶部分並排跑。另外用一個帶 His 標籤的分子量標記作為抗體效能的內部對照。' },
              items: [
                { en: 'The same answer came out in both chassis, in both holding plasmids and in GGA6: **DszA (49.6 kDa) and DszB (39.0 kDa) soluble; DszC (44.90 kDa), LacI (38.6 kDa) and frm (17.2 kDa) insoluble.**', zh: '在兩種宿主、兩種保存質體與 GGA6 中都得到同一個答案：**DszA（49.6 kDa）與 DszB（39.0 kDa）可溶；DszC（44.90 kDa）、LacI（38.6 kDa）與 frm（17.2 kDa）不可溶。**' },
                { en: 'For DszC they then exhausted the cheap explanations before engineering the protein: **IPTG from 0.5 down to 0.2 mM** to slow expression and allow folding, and **0.03 mg/mL riboflavin** to raise FMN availability. Both failed. **BugBuster** chemical lysis also failed.', zh: '對 DszC，他們在動手改造蛋白之前先把便宜的解釋用盡：**IPTG 由 0.5 降到 0.2 mM** 以減慢表達、讓蛋白有時間摺疊，以及**0.03 mg/mL riboflavin** 以提高 FMN 可得量。兩者都失敗。**BugBuster** 化學破菌也失敗。' }
              ],
              done: { en: 'Only then was it handed to the dry lab, with the written conclusion that expression conditions "will not be enough".', zh: '只有在這之後才交給乾式團隊，並寫下結論：調整表達條件「不會夠」。' } },
            { h: { en: 'Characterise the promoters before tuning them', zh: '在調校啟動子之前先把它們的特性量出來' },
              p: { en: 'Four literature constitutive promoters — BG42 strong, BG17 medium-strong, BG37 medium-weak, BG28 weak — each driving mScarlet-i in the sanitised vector. Ex 569 and Em 593 nm plus OD600 on a plate reader.', zh: '四個文獻上的組成型啟動子——BG42 強、BG17 中強、BG37 中弱、BG28 弱——各自在淨化過的載體上驅動 mScarlet-i。以盤式讀儀在 Ex 569／Em 593 nm 加 OD600 量測。' },
              items: [
                { en: 'Normalised in a stated order: **first subtract LB background and *P. putida* autofluorescence, then divide by LB-blanked OD600**, reported as log10(RFU).', zh: '正規化的順序被寫明：**先扣除 LB 背景與 *P. putida* 自體螢光，再除以以 LB 歸零的 OD600**，並以 log10(RFU) 報告。' },
                { en: '**Two biological replicates with technical triplicate in *P. putida*, but only one biological replicate in *E. coli* BL21** — labelled as such on the figure rather than averaged into the rest.', zh: '**在 *P. putida* 中是兩個生物重複、各做三個技術重複，但在 *E. coli* BL21 中只有一個生物重複**——這一點直接標在圖上，而不是混進其他數據裡平均掉。' },
                { en: 'Finding: **BG17 is approximately equal to BG37, so there are three tiers and not four**, contradicting the published ranking; both shift toward the strong promoter in *E. coli*. The *E. coli* run exists purely as a service to teams who prototype there.', zh: '結果是：**BG17 與 BG37 大致相等，所以只有三級而不是四級**，與已發表的排序矛盾；而兩者在 *E. coli* 中都往強啟動子的方向偏移。那組 *E. coli* 的數據存在的目的純粹是服務在 *E. coli* 中做原型的團隊。' }
              ] },
            { h: { en: 'Build 13 of the 24, and publish the arithmetic', zh: '做了 24 個中的 13 個，並公開這個算術' },
              p: { en: 'The library is the 24 permutations of assigning four promoter strengths to dszA, dszB, dszC and dszD, one copy of each promoter per construct. The vector was pre-linearised this time, because promoter characterisation had already thrown non-fluorescent background colonies from undigested circular vector, and Golden Gate incubation had already been stretched to 2.5 h at 37 °C against the same problem.', zh: '這個基因庫就是把四種啟動子強度指派給 dszA、dszB、dszC、dszD 的 24 種排列，每個構建體裡每種啟動子各一份。這一次載體事先線性化，因為啟動子特性量測時已經因為未切開的環狀載體而冒出不會發螢光的背景菌落，而 Golden Gate 的反應時間也已經為了同一個問題拉長到 37 °C 下 2.5 小時。' },
              items: [
                { en: 'The arithmetic is honest and repeated on three pages: **13 of 24 attempted, 8 passed colony PCR (constructs 2, 3, 6, 7, 8, 9, 12, 13), 7 transformed into *P. putida* because construct 7 failed.** Time, not biology, is given as the reason the other 11 were never built.', zh: '這個算術很誠實，而且在三個頁面上重複：**24 個中嘗試了 13 個、8 個通過菌落 PCR（2、3、6、7、8、9、12、13 號）、7 個轉形進 *P. putida*，因為 7 號失敗。** 其餘 11 個從未被建出來的原因寫的是時間不足，而不是生物學。' },
                { en: 'Activity assay: the seven strains with **0 to 50 µM DBT**, 24 h, supernatant harvested, **CaCO₃ to alkalinise**, **Gibbs reagent (2,6-dichloroquinone-4-chloroimide)** for 20 min, **A610 in a 96-well plate in triplicate**, no-DBT blank subtracted.', zh: '活性分析：七個菌株配 **0 至 50 µM DBT**、24 小時，收上清液，**以 CaCO₃ 鹼化**，加 **Gibbs 試劑（2,6-dichloroquinone-4-chloroimide）** 反應 20 分鐘，**在 96 孔盤上以 A610 三重複讀值**，並扣除無 DBT 的空白。' }
              ],
              done: { en: 'Only construct 6 produced signal, at 1 µM and 10 µM DBT.', zh: '只有 6 號構建體產生訊號，而且是在 1 µM 與 10 µM DBT 下。' } }
          ]) +
          h.fig({
            kind: 'funnel',
            tag: { en: 'FUNNEL', zh: '漏斗' },
            title: { en: 'The 24-member promoter library, as the team reports it', zh: '24 個成員的啟動子基因庫，按該隊自己的報告' },
            sub: { en: 'The team repeats this arithmetic on three separate pages rather than reporting only the final number.', zh: '該隊在三個不同頁面上重複這個算術，而不是只報最後那個數字。' },
            data: [
              { label: { en: 'Permutations in the designed library', zh: '設計中的基因庫排列數' }, v: 24, note: { en: 'four promoter strengths across dszA, dszB, dszC, dszD', zh: '四種啟動子強度分配給 dszA、dszB、dszC、dszD' } },
              { label: { en: 'Attempted', zh: '實際嘗試' }, v: 13, note: { en: 'time, not biology, is given as the reason for the other 11', zh: '其餘 11 個未做的原因寫的是時間，不是生物學' } },
              { label: { en: 'Passed colony PCR', zh: '通過菌落 PCR' }, v: 8, note: { en: 'constructs 2, 3, 6, 7, 8, 9, 12, 13', zh: '2、3、6、7、8、9、12、13 號' } },
              { label: { en: 'Transformed into P. putida', zh: '轉形進 P. putida' }, v: 7, note: { en: 'construct 7 failed', zh: '7 號失敗' } },
              { label: { en: 'Produced a Gibbs signal', zh: '產生 Gibbs 訊號' }, v: 1, note: { en: 'construct 6, at 1 and 10 µM DBT, and downgraded to qualitative', zh: '6 號，在 1 與 10 µM DBT 下，而且被降級為定性結果' } }
            ],
            opts: { dec: 0 },
            caption: { en: 'Counts read from the team\'s Results, Alternative Platform and Proof of Concept pages.', zh: '數字讀自該隊 Results、Alternative Platform、Proof of Concept 各頁。' }
          })
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'uo-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The assay they had to build, and the error they published', zh: '他們必須自己做的分析，以及他們公開的那個錯誤' },
        lede: {
          en: 'LC-MS was tried first and failed in public. What replaced it is a colorimetric assay calibrated in the real sample matrix rather than in buffer — and the single most instructive paragraph on the whole wiki is the one where that calibration is shown to have broken.',
          zh: 'LC-MS 是最先嘗試的，而且是公開失敗的。取代它的是一個在真實樣品基質（而非緩衝液）中校正的比色分析——而整個 wiki 上最有啟發性的一段，正是那段說明這個校正其實壞掉了的文字。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Measurement', zh: '量測項目' }, w: '22%' },
              { t: { en: 'How it was run', zh: '怎麼做的' }, w: '38%' },
              { t: { en: 'What came out, including what did not', zh: '結果，包括沒成功的部分' } }
            ],
            rows: [
              [{ en: 'LC-MS for 2-HBP', zh: '2-HBP 的 LC-MS' }, { en: '2-HBP standards 10 to 100 µM in methanol, reverse-phase ESI, both ion modes.', zh: '2-HBP 標準品 10 至 100 µM 配於甲醇，逆相 ESI，正負兩種離子模式。' }, { en: 'LC worked: a clean UV-Vis peak at **retention time 10.117 min**, intensity scaling tenfold from 10 to 100 µM. MS did not: **[M+H]⁺ at m/z 171.21 and [M+Na]⁺ at m/z 193.20 were never detected at any concentration**, attributed to poor ionisation of a low-polarity analyte. The planned APCI probe fix was blocked by an **LC-MS mechanical failure from late August to early October**; the method is stated as still unvalidated.', zh: 'LC 部分成功：在**滯留時間 10.117 分鐘**有乾淨的 UV-Vis 峰，強度由 10 到 100 µM 線性放大十倍。MS 不成功：**[M+H]⁺ 的 m/z 171.21 與 [M+Na]⁺ 的 m/z 193.20 在任何濃度下都沒被偵測到**，歸因於低極性分析物的離子化效率差。原本計畫改用 APCI 探頭，卻因為 **LC-MS 從八月底到十月初機械故障**而無法進行；文中寫明這個方法仍未驗證。' }],
              [{ en: 'Gibbs assay for 2-HBP', zh: '2-HBP 的 Gibbs 分析' }, { en: 'Standards spiked into **spent *P. putida* KT2440 LB supernatant**, 0 to 500 µM, triplicate — calibrated in matrix, not in buffer, so the curve carries the real samples\' medium background.', zh: '標準品是加入**用過的 *P. putida* KT2440 LB 上清液**中，0 至 500 µM、三重複——在基質中而非緩衝液中校正，讓曲線帶著真實樣品的培養基背景。' }, { en: 'Only construct 6 gave signal. Interpolating it gives **4.68 µM 2-HBP from 1 µM DBT and 17.2 µM from 10 µM** — impossible at the pathway\'s 1:1 stoichiometry. See the take below.', zh: '只有 6 號構建體有訊號。內插後得到**由 1 µM DBT 得 4.68 µM 2-HBP、由 10 µM 得 17.2 µM**——在這條路徑 1:1 的化學計量下不可能。見下方的重點。' }],
              [{ en: 'DSF thermostability', zh: 'DSF 熱穩定性' }, { en: 'SYPRO Orange, Ni-NTA-purified and desalted protein, triplicate, on a qPCR machine, **Ex 470 and Em 520 nm, 25 to 95 °C at 1 °C/min**.', zh: 'SYPRO Orange、以 Ni-NTA 純化並去鹽的蛋白、三重複、在 qPCR 機上，**Ex 470／Em 520 nm，25 至 95 °C、每分鐘 1 °C**。' }, { en: '**WT 39.3 ± 0.6, E168K 38.0 ± 0, E247F 39.3 ± 1.5, Q315F 39.3 ± 1.1 °C** — read as within the resolution of the assay, so no gain but no loss. **DszC variants were never assayed**, and the reason is stated: soluble DszC could not be purified.', zh: '**WT 39.3 ± 0.6、E168K 38.0 ± 0、E247F 39.3 ± 1.5、Q315F 39.3 ± 1.1 °C**——判讀為落在分析方法的解析度之內，所以沒有提升、也沒有退步。**DszC 的變異體從未被測過**，而理由寫得很清楚：可溶的 DszC 純化不出來。' }],
              [{ en: 'Chassis tolerance', zh: '宿主耐受性' }, { en: 'OD600 in **0, 1, 2, 5, 10 and 20 % v/v diesel**, 30 °C, 220 rpm, read at 1, 2, 8 and 24 h, duplicates with standard deviation of the mean.', zh: '在 **0、1、2、5、10、20% v/v 柴油**中量 OD600，30 °C、220 rpm，於 1、2、8、24 小時讀值，雙重複並附平均值標準差。' }, { en: 'No difference across the range. Their own caveat is printed with it: **growth is not sulfur removal**.', zh: '整個範圍內沒有差異。他們自己的警語也一起印出來：**能長大不等於能脫硫**。' }],
              [{ en: 'Emulsification index E24', zh: '乳化指數 E24' }, { en: '2 mL oil plus 2 mL water with **40 mg/mL rhamnolipid**, 24 h at room temperature, layer heights measured separately and summed, with a surfactant-free negative control in both oils.', zh: '2 mL 油加 2 mL 水，含 **40 mg/mL rhamnolipid**，室溫 24 小時，分別量測各層高度再相加，兩種油都做無界面活性劑的陰性對照。' }, { en: '**About 95 % in diesel** (1.9 cm of layering in a 2.0 cm column, as 1.1 cm water-in-oil plus 0.8 cm oil-in-water) against **about 20 % in diluted bitumen** (0.4 cm). Measured rather than asserted — and the dilbit number is later filed as evidence against their own surfactant model.', zh: '**柴油約 95%**（2.0 cm 柱高中有 1.9 cm 分層，由 1.1 cm 油包水加 0.8 cm 水包油組成），**稀釋瀝青約 20%**（0.4 cm）。這是量出來的、不是斷言的——而稀釋瀝青那個數字後來被列為他們自家界面活性劑模型的反證。' }],
              [{ en: 'Mutagenesis QC', zh: '突變品管' }, { en: 'NEB back-to-back non-overlapping primers with Q5-HF, and a table of **annealing temperature and elongation time per mutation** (DszC amplicon 3600 bp at 1:48; DszB 3440 bp at 1:43). Triage: gel, then colony PCR, then whole-plasmid sequencing.', zh: 'NEB 的背對背非重疊引子搭配 Q5-HF，並附一張**每個突變各自的黏合溫度與延伸時間**表（DszC 片段 3600 bp、1:48；DszB 3440 bp、1:43）。分流順序：先膠體、再菌落 PCR、最後全質體定序。' }, { en: '**Sequencing failed for 6 of 16** (DszB E168R and E168G; DszC T46D, I412D, V62I and Q243E), rescued by a **gradient PCR from 60.0 to 72.0 °C in 8 steps**, which recovered all but **DszC I412D**.', zh: '**16 個中有 6 個定序失敗**（DszB 的 E168R、E168G；DszC 的 T46D、I412D、V62I、Q243E），以**60.0 至 72.0 °C 分 8 階的梯度 PCR** 搶救，除了 **DszC I412D** 之外全部救回。' }]
            ],
            source: { en: 'Condensed from the team\'s Results, Proof of Concept and Mutagenesis QC appendix.', zh: '濃縮自該隊 Results、Proof of Concept 與突變品管附錄。' }
          }) +
          h.take({ en: 'Calibrate in the matrix, then check the calibration against the chemistry', zh: '在基質中校正，然後用化學去檢查這條校正' }, {
            en: 'Interpolating construct 6 gives **4.68 µM 2-HBP from 1 µM DBT and 17.2 µM from 10 µM**, which the pathway\'s **1:1 stoichiometry forbids**. They diagnose it themselves: the curve was fitted over **10 to 500 µM** with a **baseline intercept of 0.1374 where it should be 0**, so the samples sit **above the limit of detection but below the limit of quantification**. The claim is then downgraded in place, from a titre to **qualitative proof of end-to-end flux**. Nothing is deleted. The impossible number and its cause are both printed, which is what lets a reader use the result at the strength it actually has.',
            zh: '把 6 號構建體內插後得到**由 1 µM DBT 得 4.68 µM 2-HBP、由 10 µM 得 17.2 µM**，而這是這條路徑的 **1:1 化學計量所不允許的**。他們自己做出診斷：曲線是在 **10 至 500 µM** 區間擬合的，而且**基線截距是 0.1374，本來應該是 0**，所以樣品落在**偵測極限之上、定量極限之下**。於是主張就地降級，從「產量」變成**「端到端通量的定性證據」**。什麼都沒有被刪掉。那個不可能的數字與它的原因都被印出來，而這正是讓讀者能按它實際的強度去使用這個結果的原因。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'uo-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'An agentic harness that was itself evaluated, and two unlike predictors', zh: '一套被自己評估過的代理式框架，加上兩個互不相似的預測器' },
        lede: {
          en: 'Cofactor exists because the team noticed their own protein-engineering workflow was "highly structured and formulaic", and when handed a second enzyme and a second objective, chose to formalise the loop rather than run it again by hand. It is released under MIT.',
          zh: 'Cofactor 之所以存在，是因為團隊注意到自己的蛋白工程流程「高度結構化而且公式化」，於是在面對第二個酵素與第二個目標時，選擇把這個迴圈形式化，而不是再手動跑一遍。它以 MIT 授權釋出。'
        },
        body:
          h.flow({
            title: { en: 'Cofactor, six layers, and where the enforcement lives', zh: 'Cofactor 的六層，以及規則到底在哪裡被執行' },
            sub: { en: 'The design claim is narrow and stated as such: the harness adds enforceable constraints and grounded evidence, it does not make the model smarter.', zh: '這個設計主張很窄，而且他們就是這樣寫的：這套框架增加的是可強制執行的約束與有根據的證據，它不會讓模型變聰明。' },
            stages: [
              { label: { en: 'Reasoning', zh: '推理層' }, sub: { en: 'A general-purpose LLM, model-agnostic, BYOK, any OpenAI-compatible endpoint', zh: '通用 LLM，不綁模型、自帶金鑰、任何 OpenAI 相容端點' }, tone: 'b' },
              { label: { en: 'Phase machine', zh: '階段機' }, sub: { en: 'Preconditions checked against the store, not against the model\'s claim that they are met', zh: '前置條件是對儲存層檢查，而不是信任模型說「已滿足」' }, tone: 'v',
                items: [{ en: 'per-turn tool-call cap forces a deliverable', zh: '每回合的工具呼叫上限強迫產出交付物' }] },
              { label: { en: 'State', zh: '狀態層' }, sub: { en: 'One SQLite database, sixteen tables, foreign keys on, WAL journaling, atomic commit and rollback', zh: '一個 SQLite 資料庫、十六張表、開啟外鍵、WAL 日誌、原子性提交與回滾' }, tone: 'g',
                items: [{ en: 'runs resume across sessions', zh: '執行可跨工作階段續跑' }, { en: 'readable if a team stops using Cofactor', zh: '即使團隊不再用 Cofactor 紀錄仍可讀' }] },
              { label: { en: 'Tools', zh: '工具層' }, sub: { en: 'Schema-declared deterministic tools: sequence ops, codon optimisation, RFC10 check, UniProt, NCBI, RCSB PDB, AlphaFold, PubMed, Europe PMC, local PDFs', zh: '以 schema 宣告的確定性工具：序列操作、密碼子最佳化、RFC10 檢查、UniProt、NCBI、RCSB PDB、AlphaFold、PubMed、Europe PMC、本地 PDF' }, tone: 'a' },
              { label: { en: 'Execution', zh: '執行層' }, sub: { en: 'Local, SSH or Slurm-over-SSH behind one interface; each job is a row attached to the hypothesis that motivated it', zh: '本地、SSH 或透過 SSH 的 Slurm 都在同一個介面後；每個工作都是一列資料，掛在提出它的那個假設上' }, tone: 't' },
              { label: { en: 'Interface', zh: '介面層' }, sub: { en: 'FastAPI web UI, Textual TUI, CLI', zh: 'FastAPI 網頁介面、Textual 文字介面、CLI' }, tone: 'n' }
            ],
            loop: { label: { en: 'five versions, each triggered by a named failure of the version before', zh: '五個版本，每一個都由前一版某個被指名的失敗所觸發' } },
            caption: { en: 'Drawn by us from the team\'s Software page and the Cofactor repository description.', zh: '由我們依該隊 Software 頁與 Cofactor 儲存庫說明繪製。' }
          }) +
          h.h3({ en: '1 · Cofactor — the preconditions are checked against the database, not the model', zh: '1 · Cofactor——前置條件是對資料庫檢查，不是對模型檢查' }) +
          h.p({
            en: 'The architectural decision that matters is that a **phase machine** checks its preconditions **against the store, not against the model\'s claim** that they are met. The store is one **SQLite database at .cofactor/research.sqlite3 with sixteen tables** — runs, hypotheses, evidence, claims with evidence links, panels, candidates, reflections, evaluations, decisions, cycles, checkpoints, artifacts, jobs, events and a budget ledger — with foreign keys on, WAL journaling and atomic commit and rollback, chosen so that runs resume across sessions and **the record stays readable if a team stops using Cofactor**. Local PDFs, including a supervisor\'s reprints and unpublished work, enter the evidence base "on the same footing as a citation". There are **five versions, each triggered by a named failure**: V1, a single-agent TUI, could develop plausible hypotheses but often skipped controls and counterevidence, so the process was moved into the harness; V2 added cluster backends, because V1 could propose compute it could not run; V3 added a web GUI with in-UI config, **because the wet lab found the TUI unusable**; V4 added formatted reports; V5 added the evaluations.',
            zh: '真正關鍵的架構決定是：**階段機**檢查它的前置條件時，是**對儲存層檢查，而不是信任模型宣稱**條件已滿足。儲存層是**位於 .cofactor/research.sqlite3 的單一 SQLite 資料庫，共十六張表**——執行、假設、證據、附證據連結的主張、面板、候選、反思、評估、決策、週期、檢查點、產出物、工作、事件，以及一本預算帳——開啟外鍵、採用 WAL 日誌並支援原子性提交與回滾，這樣設計是為了讓執行能跨工作階段續跑，而且**即使團隊不再使用 Cofactor，紀錄仍然讀得懂**。本地 PDF，包括指導者的抽印本與未發表作品，都以「與引用文獻同等地位」進入證據庫。它有**五個版本，每一個都由一個被指名的失敗所觸發**：V1 是單一代理的文字介面，能提出看似合理的假設，卻常常跳過對照與反證，所以他們把流程本身搬進框架裡；V2 加上叢集後端，因為 V1 會提出它自己跑不動的計算；V3 加上網頁介面與介面內設定，**因為濕式團隊覺得文字介面不能用**；V4 加上格式化報告；V5 加上評估。'
          }) +
          h.h3({ en: '2 · The evaluation — four regimes, six arms, and a bug in their own API', zh: '2 · 那場評估——四種設定、六個測試臂，以及他們自家 API 的一個漏洞' }) +
          h.p({
            en: 'The harness was evaluated like software, with the harness itself as the independent variable. Four regimes each add exactly one layer — **bare**, **bare_prompt** (Cofactor\'s prompt with the tool text stripped), **tools**, and **full** (plus the phase machine) — across six arms. **Arm A** asked whether the workflow rules can be bypassed, with **25 model-free adversarial probes** against the controller and the store: all 25 hold, and the promotion-requires-heldout probe **found a real bug, a promotion path through the web API that bypassed a gate enforced only in the controller**. **Arm B** checked numerical correctness of the deterministic tools with **12 probes**, including GRAVY against an independent Kyte-Doolittle implementation, net charge at pH 7, case and whitespace invariance, empty and degenerate input, and a no-overclaiming probe requiring heuristics to read as predictions: all hold, **37 of 37 across A and B**. **Arm C** tested compliance under user pressure across 8 adversarial scenarios times 4 conditions times 2 seeds, judged **by inspecting database rows** rather than by reading transcripts: bare 2/16, bare_prompt 1/16, tools 0/13, full 0/14, and **all three violations were the same failure, abandoning competing hypotheses under pressure from the user**.',
            zh: '這套框架是當成軟體來評估的，而自變項就是框架本身。四種設定各只多加一層——**bare**、**bare_prompt**（用 Cofactor 的提示但剝掉工具敘述）、**tools**、**full**（再加上階段機）——跨六個測試臂。**Arm A** 問的是工作流程規則能不能被繞過，用 **25 個不需要模型的對抗性探針**攻擊控制器與儲存層：25 個全部守住，而其中 promotion-requires-heldout 這個探針**找到一個真實的漏洞——一條經由 web API 的晉級路徑，繞過了只在控制器裡強制執行的關卡**。**Arm B** 以 **12 個探針**檢查確定性工具的數值正確性，包括以獨立實作的 Kyte-Doolittle 檢查 GRAVY、pH 7 下的淨電荷、大小寫與空白不變性、空輸入與退化輸入，以及一個要求啟發式結果必須被寫成「預測」的 no-overclaiming 探針：全部守住，**A 與 B 合計 37 比 37**。**Arm C** 測試在使用者施壓下的規則遵循，涵蓋 8 個對抗情境 × 4 種設定 × 2 個隨機種子，而且是**以檢查資料庫列的方式**評分，不是讀對話紀錄：bare 2/16、bare_prompt 1/16、tools 0/13、full 0/14，而**三次違規全部是同一種失敗：在使用者施壓下放棄競爭假設**。'
          }) +
          h.p({
            en: '**Arm D** scored design quality on a DszC task (UniProt **P54998**) with two independent judges over six axes of 0 to 2, and disagreements of more than one point were **left unscored rather than averaged**. The rubric scores came out **similar across conditions, and the team says so plainly**; the real gain is grounding, because the prompt-only condition **hallucinated amino-acid sequence in two proposed mutations** and found zero protected residues, while the grounded conditions did neither. **Arm E** reconstructed the methods of **six published papers**, scored against the papers\' *initial* designs: bare_prompt was competitive on strategy at 1.86 of 2 but scored **0.50 of 2 on target region against 1.50 for tools and 1.33 for full**. **Arm F** was differential diagnosis with expression, solubility, concentration and sequence already ruled out: every scorable run found the missing flavin cofactor system, and the conditions differed only in susceptibility to a plausible decoy. Contamination control in Arm E is unusually careful — three of the six papers postdate the model\'s cutoff, transcripts were audited for target-paper identifiers and titles, **no grounded run retrieved its target paper across 18 runs, and the scanner blocked 31 search records across 12 of 36 runs** — and they still write that this cannot rule out knowledge already encoded in the model\'s weights. Stated limitations: **Arms D and F are two runs per condition, described as preliminary**, and the ungrounded condition **exhausted its token budget in Arms D and E, leaving those unscored**.',
            zh: '**Arm D** 針對一個 DszC 任務（UniProt **P54998**）評估設計品質，由兩位獨立評審在六個面向上各給 0 到 2 分，而**差距超過一分的就不計分，而不是取平均**。評分結果**在各種設定間相近，團隊也直接這麼寫**；真正的收穫在於「有根據」：只有提示詞的那組**在兩個提議的突變中幻覺出了胺基酸序列**，而且找到零個受保護殘基，而有根據的那幾組兩者都沒發生。**Arm E** 要求重建**六篇已發表論文**的方法，並對照論文的*最初*設計評分：bare_prompt 在策略上有競爭力（1.86 分／2 分），但在目標區段上只有 **0.50／2 分，而 tools 是 1.50、full 是 1.33**。**Arm F** 是在表達量、溶解度、濃度與序列都已排除之後的鑑別診斷：每個可評分的執行都找出缺失的黃素輔因子系統，各設定之間的差別只在於對一個看似合理的誘餌有多容易上鉤。Arm E 的汙染控制做得異常謹慎——六篇論文中有三篇晚於模型的知識截止日、對話紀錄被稽核是否出現目標論文的識別碼與標題、**18 次有根據的執行中沒有任何一次取得自己的目標論文，而掃描器在 36 次執行中的 12 次裡阻擋了 31 筆搜尋紀錄**——而他們仍然寫明這無法排除已經編碼在模型權重裡的知識。他們寫出的限制是：**Arm D 與 F 每種設定只有兩次執行，被描述為初步結果**，而沒有根據的那組**在 Arm D 與 E 耗盡了 token 預算，使那兩項無法評分**。'
          }) +
          h.note({
            en: '**The loop closes in both directions.** Human Practices was used on the *output*: the team could not tell what belongs in an LLM-written report, so they asked **Dr. Corrie DeCosta**, a protein chemist, what such a report needs to be usable, and changed the format accordingly. And in the other direction, **Cofactor proposed the six DszC solubility mutants that were actually built and blotted** — all six of which came back insoluble.',
            zh: '**這個迴圈是雙向閉合的。** Human Practices 被用在*產出*上：團隊分不清一份由 LLM 撰寫的報告該包含什麼，於是他們去問蛋白化學家 **Dr. Corrie DeCosta**，這樣的報告要能被實際使用需要什麼，並據此改了格式。而另一個方向上，**Cofactor 提出了那六個真正被建出來並做了墨點的 DszC 溶解度突變體**——而六個全部回來都是不可溶的。'
          }) +
          h.h3({ en: '3 · FoldX and ThermoMPNN — two predictors chosen for being unlike each other', zh: '3 · FoldX 與 ThermoMPNN——刻意選兩個互不相似的預測器' }) +
          h.p({
            en: 'The mutation pipeline has four stages for both enzymes — residue selection, mutation scoring, structural validation, selection — and it **targets stability rather than catalysis**, explicitly because kinetics and product inhibition were already handled by the literature mutations in the baseline. The selection rule is that residues must be both **flexible** (by MD backbone RMSF) and **unconserved** (by **ConSurf**), excluding catalytic residues. Scoring uses **two methods chosen for being unlike each other**: **FoldX**, an empirical force field with a fixed backbone, and **ThermoMPNN**, deep learning on ProteinMPNN embeddings trained on experimental ΔΔG — with agreement between them as the filter. For **DszB** (PDB **2DE2**, catalytic Cys27, His60 and Arg70, lid loops 135 to 150 and 180 to 200) the funnel is **347 residues → 23 positions → 437 scored mutants → 150 predicted stabilising → 24 to MD → 22 passed → 5 to the bench**. MD ran in **GROMACS** with **amber99sb-ildn** and **TIP3P**, minimisation then NVT then NPT then production, with four pass-or-fail metrics: the Cys27 Sγ to Arg70 guanidinium nitrogen distance, the fraction of native catalytic contacts lost, active-site backbone drift, and per-residue flexibility deviation restricted to the two lid loops — and the **thresholds are derived from the wild type\'s own fluctuations rather than set a priori**. Both ΔΔG values are printed for the shortlist (FoldX then ThermoMPNN): **E168G −1.18/−0.65, Q315F −1.54/−0.07, E168R −1.19/−0.16, E247F −1.18/−0.04, E168K −0.82/−0.26**. They also report that the effect went the *opposite* way to the design intent: the dyad distance **decreased** and loop flexibility **increased** relative to wild type.',
            zh: '這條突變流程對兩個酵素都有四個階段——殘基選擇、突變評分、結構驗證、最終挑選——而它**針對穩定性而非催化活性**，理由明說是動力學與產物抑制已由基準線中的文獻突變處理掉了。挑選規則是殘基必須同時**具柔性**（依分子動力學主鏈 RMSF）且**不保守**（依 **ConSurf**），並排除催化殘基。評分使用**刻意選為互不相似的兩種方法**：**FoldX**（經驗式力場、主鏈固定）與 **ThermoMPNN**（基於 ProteinMPNN 嵌入、以實驗 ΔΔG 訓練的深度學習），並以兩者一致作為篩選條件。對 **DszB**（PDB **2DE2**，催化殘基 Cys27、His60、Arg70，蓋狀環 135 至 150 與 180 至 200）而言，漏斗是 **347 個殘基 → 23 個位置 → 437 個評分過的突變體 → 150 個預測為穩定化 → 24 個進分子動力學 → 22 個通過 → 5 個進實驗檯**。分子動力學在 **GROMACS** 中以 **amber99sb-ildn** 與 **TIP3P** 執行，先能量最小化、再 NVT、再 NPT、最後生產階段，並有四個通過／不通過的指標：Cys27 的 Sγ 到 Arg70 胍基氮的距離、原生催化接觸喪失的比例、活性位主鏈漂移，以及僅限於那兩個蓋狀環的逐殘基柔性偏差——而**門檻是由野生型自身的波動推導出來的，不是事先設定的**。入選名單的兩個 ΔΔG 值都印出來（先 FoldX、再 ThermoMPNN）：**E168G −1.18/−0.65、Q315F −1.54/−0.07、E168R −1.19/−0.16、E247F −1.18/−0.04、E168K −0.82/−0.26**。他們還報告效果走向與設計意圖*相反*：相對於野生型，雙元中心距離**變短**，環的柔性**反而增加**。'
          }) +
          h.p({
            en: 'For **DszC** (PDB **3X0Y**, an FMN-dependent monooxygenase that is **active as a tetramer**) the approach inverts: **whole-sequence saturation first**, with ThermoMPNN over **7,581 single mutations giving 646 stabilising across 141 positions**, deliberately decoupling scoring from filtering so that stability, conservation and geometry could be applied in parallel. A strict FoldX-and-ThermoMPNN consensus gave **only two hits, I77L and V62I**, so the rule was **widened explicitly rather than quietly**: consensus, or strong ThermoMPNN where FoldX falls inside its own noise band, plus **ConSurf grades 1 to 4**, giving **21 candidates over 18 positions**. Validation used a FoldX seed structure with FMN added back to the apo structure, **DBT docked with AutoDock Vina 1.2.0** into a **22 Å box centred on the FMN ring**, rigid receptor, **Gasteiger charges via Open Babel**, **exhaustiveness 16 and a fixed random seed**, plus a distance screen (contact under 4 Å, nearby under 6 Å, interface under 5 Å) against FMN, its N5 and C4A atoms, the 2-HBP network taken from **PLIP** analysis of docked poses, and the nearest neighbouring chain. **17 of 21 were viable, all passed docking, and the total spread across 22 structures was 0.049 kcal/mol — that is, no measurable effect on substrate binding.** The shortlist is split into declared tiers: **tier 1 is I77L (−0.04/−0.588) and V62I (−0.012/−0.144)**, charge-neutral and described as better interpreted as neutral to slightly stabilising than as strong evidence; **tier 2 is E105R (+0.169/−1.195), E113L (+0.290/−0.709) and E113I (+0.441/−0.679)**, advanced *despite* FoldX disagreeing, with the reason given — all three change net surface charge, and FoldX omits explicit unfolded-state terms and is documented to underestimate destabilisation at charged residues in long-range contacts.',
            zh: '對 **DszC**（PDB **3X0Y**，一個 FMN 依賴型單氧酶，而且**以四聚體形式才有活性**）做法是反過來的：**先做全序列飽和掃描**，以 ThermoMPNN 跑過 **7,581 個單點突變，得到分布在 141 個位置上的 646 個穩定化突變**，刻意把評分與篩選解耦，好讓穩定性、保守性與幾何條件可以並行施加。嚴格的 FoldX 與 ThermoMPNN 交集**只給出兩個命中：I77L 與 V62I**，於是規則被**明白地放寬，而不是悄悄放寬**：取交集，或是在 FoldX 落在自己噪音帶之內時採用強 ThermoMPNN 訊號，再加上 **ConSurf 等級 1 至 4**，得到 **18 個位置上的 21 個候選**。驗證使用 FoldX 的種子結構，把 FMN 放回去脫輔基結構，再**以 AutoDock Vina 1.2.0 把 DBT 對接**進一個**以 FMN 環為中心、22 Å 的盒子**，受體剛性、**以 Open Babel 指派 Gasteiger 電荷**、**exhaustiveness 16 並固定隨機種子**；另外加一道距離篩選（接觸小於 4 Å、鄰近小於 6 Å、介面小於 5 Å），對象包括 FMN 及其 N5 與 C4A 原子、由**PLIP** 分析對接構形所得的 2-HBP 作用網絡，以及最近的鄰接鏈。**21 個中有 17 個可行、全部通過對接，而 22 個結構的總分布範圍只有 0.049 kcal/mol——也就是對底物結合沒有可量測的影響。** 入選名單被分成明文宣告的層級：**第一層是 I77L（−0.04/−0.588）與 V62I（−0.012/−0.144）**，電荷中性，而他們形容這些值「與其當成強證據，不如解讀為中性到略微穩定化」；**第二層是 E105R（+0.169/−1.195）、E113L（+0.290/−0.709）與 E113I（+0.441/−0.679）**，在 FoldX *不同意*的情況下仍然推進，而理由也寫了出來——這三個都改變表面淨電荷，而 FoldX 沒有明確的未摺疊態項，並且有文獻記載它會低估帶電殘基在長程接觸中的去穩定效應。'
          }) +
          h.warn({
            en: '**The most honest paragraph on the page.** G26Q was excluded because it sits **4.2 Å from a neighbouring subunit at the tetramer interface** — and **FoldX, ThermoMPNN and the MD all ran on the monomer, so none of them could have caught it**, which the team states outright. At the bench neither campaign worked: the solubility mutants **T46D, Q110E, Q112E, P182D, Q243E and I412D** were all still insoluble, even with BugBuster, and the thermostability mutants showed no significant change in melting temperature. Both get the same stated follow-up: **single point mutations are insufficient, combinatorial mutagenesis is required.**',
            zh: '**整頁最誠實的一段。** G26Q 被排除，是因為它位在**四聚體介面上、距離鄰近次單元只有 4.2 Å**——而**FoldX、ThermoMPNN 與分子動力學全部都是在單體上跑的，所以三者都不可能抓到這一點**，而團隊把這句話直接寫出來。在實驗檯上，兩條路線都沒有成功：溶解度突變體 **T46D、Q110E、Q112E、P182D、Q243E、I412D** 全部仍然不可溶，連用 BugBuster 也一樣；熱穩定性突變體的熔點則沒有顯著變化。兩者得到同一個寫明的後續結論：**單點突變不足，必須做組合式突變。**'
          }) +
          h.h3({ en: '4 · Consortium model — one analytical, one constraint-based', zh: '4 · 菌群模型——一個解析式、一個約束式' }) +
          h.p({
            en: 'The engineering output of the mass-transfer model is a **two-tier titre target**: CMC for the area benefit at low carbon cost, grams per litre for the extra roughly threefold. Getting there took the whole modelling section being framed as a single question — where can the system be improved, and which interventions could realize it — with three candidate strategies and an explicit decision to model only two, because **pathway splitting was dropped on the grounds that previous work had already characterised its gain**.',
            zh: '質傳模型在工程上的輸出是一個**兩級的濃度目標**：以 CMC 等級拿到低碳成本的表面積效益，以每公升數公克的等級再多拿約三倍。而要走到這一步，整個建模章節被框成一個問題——這個系統哪裡還能改進、哪些介入能實現它——並提出三個候選策略，然後明白決定只建其中兩個的模型，因為**路徑分割被放棄，理由是先前的研究已經把它的效益特性化了**。'
          }, {
            en: 'The first model is mass transfer with surfactant, analytical, with two mechanisms modelled *separately* and then together: interfacial-tension reduction from **43 to about 0.9 mN/m** feeding **Hinze-Kolmogorov** droplet breakup at fixed agitation, and **micellar solubilisation** above the critical micelle concentration. It is closed with **film theory at the stagnant-sphere floor (Sh = 2)** and **Michaelis-Menten uptake**, and solved for the single unknown free-DBT concentration **by bisection**, after an argument that supply and demand are oppositely monotonic so the root is unique. **Six assumptions are listed before any result.**',
            zh: '第一個模型是帶界面活性劑的質量傳遞，屬解析式，兩個機制先*分別*建模再合併：界面張力由 **43 降到約 0.9 mN/m**，餵入固定攪拌強度下的 **Hinze-Kolmogorov** 液滴破碎；以及臨界微胞濃度以上的**微胞增溶**。它以**停滯球體下限（Sh = 2）的薄膜理論**與 **Michaelis-Menten 攝取**收斂，並在論證「供給與需求的單調方向相反、故根唯一」之後，用**二分法**求解唯一的未知量——游離 DBT 濃度。**六個假設在任何結果之前就先列出來。**'
          }) +
          h.kv([
            [{ en: 'Sauter mean diameter', zh: 'Sauter 平均直徑' }, { en: '**500 to 49.1 µm**', zh: '由 **500 降到 49.1 µm**' }],
            [{ en: 'Specific area', zh: '比表面積' }, { en: '**1200 to 12,210 m² m⁻³**', zh: '由 **1200 升到 12,210 m² m⁻³**' }],
            [{ en: 'Mass-transfer coefficient', zh: '質傳係數' }, { en: '**2.87 × 10⁻⁶ to 2.92 × 10⁻⁵ m s⁻¹**', zh: '由 **2.87 × 10⁻⁶ 升到 2.92 × 10⁻⁵ m s⁻¹**' }],
            [{ en: 'Tension plateau against the CMC', zh: '張力平台與 CMC 的關係' }, { en: 'Plateau reached by **80 mg L⁻¹**, at or near the **CMC of 56 mg L⁻¹** — so the whole area gain is available at CMC-level dosing.', zh: '張力在 **80 mg L⁻¹** 就到平台，落在 **56 mg L⁻¹ 的 CMC** 之上或附近——所以整個表面積增益在 CMC 等級的投藥量下就拿得到。' }],
            [{ en: 'Free DBT, as a fraction of equilibrium', zh: '游離 DBT 佔平衡值的比例' }, { en: '**5.6 % with no surfactant, 89.1 % at 100 mg L⁻¹**, then a **dip to 85.3 % at 1 g L⁻¹** before recovering — and they explain the dip, because micelles raise demand.', zh: '沒有界面活性劑時 **5.6%**、100 mg L⁻¹ 時 **89.1%**，接著在 1 g L⁻¹ **回落到 85.3%** 再回升——而他們解釋了這個凹陷，因為微胞也提高了需求。' }]
          ]) +
          h.p({
            en: 'The headline is **2.8- to 34-fold**, decomposed into an **invariant 2.7 to 2.92× solubilisation term** and a **dispersion-dependent up-to-11.5× area term**, with a sensitivity sweep over unaided droplet size from 500 down to 10 µm showing the area term collapsing to **1.00 at the fine end** and a **crossover near 150 µm**. It is then cross-checked against Abin-Fuentes et al., who found transfer *not* rate-limiting in a vigorously agitated system — consistent, they note, with their own results at the fine end of the table. The two mechanisms are **synergistic, exceeding the product of the isolated gains by 36 % at 1 g L⁻¹**.',
            zh: '頭條數字是 **2.8 至 34 倍**，並拆解為一個**不隨條件變動的 2.7 至 2.92 倍增溶項**與一個**取決於分散程度、最高 11.5 倍的表面積項**，再加上一組把「未輔助液滴尺寸」由 500 掃到 10 µm 的敏感度分析，顯示表面積項在細端塌縮到 **1.00**、**交叉點約在 150 µm**。接著再與 Abin-Fuentes 等人對照，後者在劇烈攪拌的系統中發現質傳*並非*限速步驟——他們註明這與自己表格細端的結果一致。兩個機制是**協同的，在 1 g L⁻¹ 時超過各自單獨增益的乘積 36%**。'
          }) +
          h.p({
            en: 'The second model is genome-scale: **COBRApy** with the published **iJN1463** KT2440 reconstruction extended by the four heterologous dsz reactions, LP solved with **GLPK**, biomass objective. The DBT exchange bound was **swept over 1000 points between two derived bounds rather than guessed**: the upper bound is an availability fraction of 1, a deliberately permissive ceiling, and the lower bound is a diffusion-only floor computed from a 100 m³ vessel at a height-to-diameter ratio of 3 (3.488 m diameter, 9.556 m² cross-section), Stokes-Einstein at 30 °C from a hard-sphere radius of **0.3878 nm**, Fickian penetration over a 24 h batch, giving an accessible volume of **0.0753 m³** and an availability fraction of **7.528 × 10⁻⁴, that is 0.075 % of inventory** — immediately labelled "deliberately severe" and better read as a boundary-layer length scale, used only to construct a floor. The result is **1.0 mol 2-HBP per mol DBT imported with no growth penalty, so metabolism does not bottleneck uptake**, which means the mass-transfer gains carry through undiminished. A third calculation forces DszB flux and re-maximises biomass with the DBT bound removed, so that any remaining limit is metabolic: the **NADH-limited ceiling rises 9.80 to 12.30 mmol gDCW⁻¹ h⁻¹, plus 25.5 %**, with formate at 17.3 mmol gDCW⁻¹ h⁻¹; unburdened growth rises **0.5842 to 0.7207 h⁻¹, plus 23.4 %**; the exchange holds at **0.140, 0.140 and 0.145 mmol dsz per mmol formate**, described as a constant exchange rate over a threefold range, **saturating near 13.0 above 25 mmol** where something other than reducing power becomes limiting, at about **57 % of the stoichiometric maximum**.',
            zh: '第二個模型是全基因組規模的：**COBRApy** 搭配已發表的 **iJN1463** KT2440 重建模型，再加上四個異源的 dsz 反應，線性規劃以 **GLPK** 求解，目標函數為生物量。DBT 的交換通量邊界是**在兩個推導出來的邊界之間掃過 1000 個點，而不是猜的**：上界取可得比例為 1，是一個刻意放寬的天花板；下界則是只考慮擴散的地板，由一個高徑比 3 的 100 m³ 反應槽推算（直徑 3.488 m、截面積 9.556 m²），以硬球半徑 **0.3878 nm** 套用 30 °C 的 Stokes-Einstein，再算 24 小時批次的 Fick 滲透深度，得到可接觸體積 **0.0753 m³**、可得比例 **7.528 × 10⁻⁴，也就是庫存的 0.075%**——而這個數字立刻被標為「刻意嚴苛」，並說它更適合讀成一個邊界層長度尺度，只用來建立地板。結果是**每輸入 1 mol DBT 得 1.0 mol 2-HBP，而且沒有生長代價，所以代謝不是攝取的瓶頸**，這意味著質傳的增益可以完整傳遞下去。第三個計算強制 DszB 的通量、移除 DBT 邊界後重新最大化生物量，讓剩下的限制必然是代謝性的：**受 NADH 限制的上限由 9.80 升到 12.30 mmol gDCW⁻¹ h⁻¹，提升 25.5%**，此時甲酸為 17.3 mmol gDCW⁻¹ h⁻¹；無負擔生長速率由 **0.5842 升到 0.7207 h⁻¹，提升 23.4%**；交換比維持在**每 mmol 甲酸 0.140、0.140、0.145 mmol dsz**，被形容為「在三倍範圍內維持固定的交換率」，而且**在 25 mmol 以上於約 13.0 處飽和**，此時限制因素已不再是還原力，約為**化學計量上限的 57%**。'
          }) +
          h.note({
            en: '**A consolidated Model Limitations section with seven named failure modes**, each tied to the result it weakens: a binary DBT and n-hexadecane feed against real competitive partitioning, and here they point at **their own dilbit E24 of 20 % as the observed instance**; rhamnolipid cytotoxicity at the gram-per-litre titres the model wants; a mass-solubilisation ratio **substituted from pyrene (0.0075) because no DBT-with-rhamnolipid value exists**, justified by log Kow (DBT 4.38 below pyrene 4.88) and labelled a conservative lower bound; Sh = 2 as a floor, so the real mass-transfer coefficient exceeds it; **biomass rounded down from the literature 0.505 to 0.4 gDCW per OD**, with the direction of the resulting bias stated; **the 12.30 ceiling is a zero-growth figure, and zero growth means washout** in a real chemostat; and FBA\'s unconstrained formate-to-NADH conversion requiring a **heterologous NAD⁺-dependent formate dehydrogenase that KT2440 largely lacks**.',
            zh: '**一個整合起來的「模型限制」章節，列出七種被指名的失效模式**，每一種都綁在它所削弱的那個結果上：以 DBT 與 n-hexadecane 的二元進料取代真實的競爭性分配，而這裡他們指向**自己量到的稀釋瀝青 E24 只有 20%，作為實際觀察到的例子**；在模型期望的每公升公克級濃度下 rhamnolipid 的細胞毒性；質量增溶比**因為沒有 DBT 配 rhamnolipid 的數值而改用 pyrene 的 0.0075**，並以 log Kow（DBT 4.38 低於 pyrene 4.88）為依據、標為保守下界；Sh = 2 只是下限，所以真實質傳係數會高於它；**生物量由文獻的 0.505 下修為 0.4 gDCW／OD**，而且說明這造成的偏差方向；**12.30 這個上限是零生長下的數字，而零生長在真實連續培養槽裡就等於被沖洗掉**；以及 FBA 裡未受約束的甲酸轉 NADH，需要一個**異源的 NAD⁺ 依賴型甲酸脫氫酶，而 KT2440 基本上沒有**。'
          }) +
          h.h3({ en: '5 · Process design, TEA and LCA — the honest framing is in the method', zh: '5 · 製程設計、TEA 與 LCA——誠實之處在方法裡，不在註腳裡' }) +
          h.p({
            en: 'Three plant sections: feed prep with a chemostat holding the culture at steady state, heated to **32 °C** at about 1 atm with an air blower; a **bubble column reactor**, chosen because it balances dissolved oxygen against mixing; and **hydrocyclone** separation, chosen for low energy duty on oil and water. **Stainless steel throughout**, and the reason is sourced to a conversation: **microbially influenced corrosion, raised by Dr. Larter**. Safety is a **P&ID plus a HAZOP to IEC 61882** over four nodes, scored on **OSHA risk matrices** with thresholds written down (12 or above intolerable, 6 to 8 undesirable). The **TEA** uses **Turton\'s module costing method**, escalated from **2001 to 2018 USD via CEPCI 397 to 603.17**, with bare-module factors and **a pressure factor of 1 everywhere because the process is near-ambient**. Drivers are named: **cooling water at 13,608 m³/h**, a **1.2 MW aeration blower**, direct operating cost **$20.8 M/yr**, net production cost **$55.0 M/yr = $4.57/bbl at 13.75 million bbl/yr** against **$9.52/bbl for HDS**, where **hydrogen is 63 % of HDS direct operating cost with no biological counterpart**. And the honest framing is in the method rather than a footnote: **because current biodesulfurization kinetics are too slow for industry, they set the BDS residence time equal to HDS\'s 2.34 h and state outright that this is what BDS would cost *once* kinetics improve.**',
            zh: '廠房分三段：進料準備，用一個連續培養槽把菌體維持在穩態，加熱到 **32 °C**、約 1 atm，配一台空氣鼓風機；一座**氣泡塔反應器**，選它的理由是它能在溶氧與混合之間取得平衡；以及**水力旋流器**分離，選它是因為對油水分離的能耗低。**全程使用不鏽鋼**，而理由有出處——**微生物影響腐蝕（MIC），由 Dr. Larter 提出**。安全方面是一份 **P&ID 加上依 IEC 61882 進行的 HAZOP**，涵蓋四個節點，以 **OSHA 風險矩陣**評分，門檻也寫下來（12 以上為不可接受、6 至 8 為不理想）。**TEA** 使用 **Turton 的模組成本法**，並**透過 CEPCI 由 397 升到 603.17，把 2001 年美元換算到 2018 年**，搭配裸模組係數，而**壓力係數一律取 1，因為製程接近常溫常壓**。主要成本動因被指名：**冷卻水每小時 13,608 m³**、一台 **1.2 MW 的曝氣鼓風機**、直接營運成本**每年 $20.8 M**、淨生產成本**每年 $55.0 M＝在每年 1,375 萬桶下每桶 $4.57**，而 HDS 是**每桶 $9.52**，其中**氫氣佔 HDS 直接營運成本的 63%，而生物法完全沒有對應項目**。而誠實之處在方法裡、不在註腳裡：**因為目前生物脫硫的動力學對工業來說太慢，他們把 BDS 的停留時間直接設成與 HDS 相同的 2.34 小時，並明白寫出這代表的是「等動力學改善之後」BDS 的成本。**'
          }) +
          h.p({
            en: 'The **LCA** runs in **openLCA 2** with the openLCA LCIA Methods package v2.8.2 and **IPCC 2021 GWP100**, functional unit **1 bbl (0.159 m³)**, no allocation or cut-off. The inventory was **generated by a parameterised Python script using olca-schema rather than entered by hand**, with fixed flow identifiers, so that any assumption can be updated — for example when the TEA figures change — and the model re-imported without rebuilding it. The per-barrel inventory is published: 0.318 m³ culture water; **0.284 kg S removed, giving 1.51 kg 2-HBP and 0.71 kg sulfite**; 44.7 m³ air and 2.64 MJ electricity from adiabatic compression at 1 vvm, 40 kPa discharge and 60 % efficiency — **noted as about nine times what oxygen respiration needs**; 40 MJ autoclave heat; 9.65 kg medium chemicals itemised; and **4.7 kg biogenic CO₂ recorded in the inventory but excluded from GWP**, with the convention named. Emission factors are tabled, including an **Ontario grid at 30 g CO₂e/kWh** and **SMR hydrogen at 10 kg CO₂ per kg H₂**. The result is **BDS 2.67 against HDS 8.73 kg CO₂e/bbl, a 69 % reduction** — and then the attribution becomes an engineering instruction: **99 % of the BDS footprint is autoclave heat**, while aeration electricity is about 1 % **only because Ontario\'s grid is clean**, so **heat recovery rather than electricity is the next lever**. Culture-medium production emissions are **declared missing from this version**.',
            zh: '**LCA** 在 **openLCA 2** 中執行，使用 openLCA LCIA Methods 套件 v2.8.2 與 **IPCC 2021 GWP100**，功能單位為 **1 桶（0.159 m³）**，不做分配也不設切斷準則。清單是**由一支使用 olca-schema 的參數化 Python 腳本產生，而不是手動輸入**，並固定了流項識別碼，這樣任何假設都能更新——例如當 TEA 的數字改變時——然後重新匯入模型而不必重建。每桶的清單都公開：培養水 0.318 m³；**移除 0.284 kg 硫，產生 1.51 kg 2-HBP 與 0.71 kg 亞硫酸鹽**；空氣 44.7 m³ 與電力 2.64 MJ，來自 1 vvm、出口 40 kPa、效率 60% 的絕熱壓縮——並**註明這大約是氧氣呼吸需求的九倍**；滅菌鍋熱量 40 MJ；培養基化學品 9.65 kg 逐項列出；以及**記入清單但不計入 GWP 的 4.7 kg 生源性 CO₂**，而且說明了所採用的慣例。排放係數也列成表，包括**安大略電網 30 g CO₂e/kWh** 與**蒸汽甲烷重組製氫每 kg H₂ 排放 10 kg CO₂**。結果是**BDS 每桶 2.67 對 HDS 每桶 8.73 kg CO₂e，減少 69%**——接著這個歸因就變成一條工程指令：**BDS 碳足跡的 99% 是滅菌鍋的熱**，而曝氣電力只佔約 1%，**而且只是因為安大略的電網乾淨**，所以**下一個該拉的槓桿是熱回收，而不是電力**。培養基生產的排放則**明白宣告在這一版中缺漏**。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'uo-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Named failures, a published impossible number, and live editorial placeholders', zh: '被指名的失敗、一個公開的不可能數字，以及還留在站上的編輯佔位符' },
        lede: {
          en: 'Every claim on this wiki is stated at the weakest form the evidence supports, which is why the failure list is long and specific rather than short and vague.',
          zh: '這個 wiki 上每個主張都是以證據所能支撐的最弱形式陳述，這就是為什麼它的失敗清單又長又具體，而不是又短又含糊。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'unsolved', zh: '未解決' }, k: 'r' }],
              h: { en: 'DszC insolubility, and what it undercuts', zh: 'DszC 的不可溶，以及它拖累了什麼' },
              p: { en: 'IPTG titration, riboflavin, BugBuster and six designed point mutations all failed. **frm and LacI are also insoluble**, and the Alternative Platform page states plainly that **flavin reductase expression still needs optimisation before cofactor regeneration can work** — which undercuts the pathway\'s fourth step. There was **no thermostability gain** either, and the **DszC mutants were never assayed** because soluble DszC could not be purified, so the thermostability campaign could not even be tested on the enzyme that needed it.', zh: 'IPTG 濃度調整、riboflavin、BugBuster 與六個設計出來的點突變全部失敗。**frm 與 LacI 也不可溶**，而 Alternative Platform 頁直接寫明**黃素還原酶的表達在輔因子再生能運作之前仍需最佳化**——這就拖累了這條路徑的第四步。熱穩定性也**沒有提升**，而且**DszC 的突變體從未被測過**，因為可溶的 DszC 純化不出來，所以熱穩定性這條路線甚至沒機會在最需要它的那個酵素上測試。' } },
            { chips: [{ t: { en: 'never worked', zh: '從未成功' }, k: 'r' }],
              h: { en: 'Electroporation, and a silent selection failure', zh: '電穿孔，以及一個無聲的篩選失效' },
              p: { en: 'Electroporation of *P. putida* **never worked**: repeated ARC errors, with five named remedies tried and zero colonies throughout. Worse, they found that **KT2440 is intrinsically ampicillin resistant**, which silently invalidated selection for every AmpR pTwist construct — so individual-enzyme expression moved to *E. coli* BL21 and **was never repeated in the real chassis**. Golden Gate from circular holding plasmids gave **empty vector only**.', zh: '*P. putida* 的電穿孔**從未成功**：反覆出現 ARC 錯誤，試過五種被指名的補救方式，全程零菌落。更糟的是，他們發現**KT2440 本身就對安比西林具抗性**，這使每一個 AmpR pTwist 構建體的篩選悄悄失效——因此單一酵素的表達工作移到 *E. coli* BL21，而且**從未在真正的宿主上重做**。從環狀保存質體做 Golden Gate 只得到**空載體**。' } },
            { chips: [{ t: { en: 'downgraded in place', zh: '就地降級' }, k: 'r' }],
              h: { en: 'The only positive activity result', zh: '唯一的陽性活性結果' },
              p: { en: '**Only 8 of 24 library constructs assembled, 7 transformed, 1 active.** And the one positive is explicitly downgraded to qualitative, with the calibration artefact that caused it published: a curve fitted over 10 to 500 µM with an intercept of **0.1374** where it should be 0, putting the samples above the limit of detection but below the limit of quantification, which is why interpolation returns a stoichiometrically impossible 4.68 µM from 1 µM DBT. **LC-MS was never validated**; the instrument was down about six weeks and the APCI fix was never tried.', zh: '**24 個基因庫構建體中只有 8 個組裝成功、7 個轉形、1 個有活性。** 而唯一的陽性結果被明白降級為定性，造成它的校正瑕疵也一併公開：曲線在 10 至 500 µM 區間擬合，截距是 **0.1374**，而它本來應該是 0，使樣品落在偵測極限之上、定量極限之下——這就是為什麼內插會由 1 µM DBT 得出化學計量上不可能的 4.68 µM。**LC-MS 從未被驗證**；儀器故障約六週，而 APCI 的補救方案始終沒機會試。' } },
            { chips: [{ t: { en: 'fails on the real feedstock', zh: '在真實原料上失效' }, k: 'r' }],
              h: { en: 'Rhamnolipid works on diesel, not on dilbit', zh: 'Rhamnolipid 對柴油有效，對稀釋瀝青無效' },
              p: { en: 'The emulsification index is **about 95 % in diesel against about 20 % in diluted bitumen** — and dilbit is the real Canadian feedstock. The team does not bury this: the dilbit number is filed in their own Model Limitations section as the observed instance of the binary-feed assumption failing. Separately, **BG17 and BG37 are not distinguishable** in KT2440, which contradicts the published ranking they started from, so the four-tier promoter set is three tiers in practice.', zh: '乳化指數在**柴油約 95%，在稀釋瀝青約 20%**——而稀釋瀝青才是加拿大真正的原料。團隊沒有把這件事埋起來：那個稀釋瀝青的數字被列在他們自己的「模型限制」章節裡，作為「二元進料假設失效」的實際觀察例子。另外，**BG17 與 BG37 在 KT2440 中無法區分**，這與他們一開始依據的已發表排序矛盾，所以那組四級啟動子其實只有三級。' } },
            { chips: [{ t: { en: 'invisible to every tool', zh: '所有工具都看不到' }, k: 'a' }],
              h: { en: 'G26Q, and other limits the dry lab states itself', zh: 'G26Q，以及乾式團隊自己寫出的其他限制' },
              p: { en: '**G26Q\'s interface clash was invisible to every tool used**, because FoldX, ThermoMPNN and the MD all ran on the monomer while DszC is active as a tetramer. The DszC tier-1 ΔΔG values are described as better interpreted as neutral. The mass-solubilisation ratio is a **pyrene substitute**. The 12.30 mmol ceiling is a **zero-growth number, and zero growth means washout**. Arms D and F are **two runs per condition**. And the contamination checks in Arm E **cannot exclude knowledge already in the model\'s weights**, which they say themselves.', zh: '**G26Q 在介面上的碰撞對所有用過的工具都是看不見的**，因為 FoldX、ThermoMPNN 與分子動力學全都在單體上跑，而 DszC 要以四聚體才有活性。DszC 第一層的 ΔΔG 值被形容為「更適合解讀為中性」。質量增溶比是**用 pyrene 代替的**。12.30 mmol 的上限是**零生長下的數字，而零生長就等於被沖洗掉**。Arm D 與 F **每種設定只有兩次執行**。而 Arm E 的汙染檢查**無法排除已經在模型權重裡的知識**，這句話是他們自己寫的。' } },
            { chips: [{ t: { en: 'still live on the wiki', zh: '仍留在 wiki 上' }, k: 'a' }],
              h: { en: 'Unfinished editorial placeholders, and two naming slips', zh: '未完成的編輯佔位符，以及兩個命名不一致' },
              p: { en: 'Results contains **"Discuss mutation found."** after whole-plasmid sequencing of GGA6, and **"As shown in Figures X"**; Proof of Concept cites **"Appendix X"** three times. So **a mutation in the final construct is acknowledged but never described**. Two naming slips are worth knowing before citing anything: **the Design page calls the vector "pBBR1MCS-1"** (as does Figure 7\'s caption on Results) while every other page, the Registry entry and the abstract say **pBBR1MCS-2**; and the flavin reductase is **frm** in the wet lab but **DszD** in the model and library pages. Also, **BG42 is characterised and used but has no part ID** — only BG17, BG37 and BG28 were submitted.', zh: 'Results 頁在 GGA6 全質體定序之後留著 **"Discuss mutation found."**，以及 **"As shown in Figures X"**；Proof of Concept 頁三次引用 **"Appendix X"**。因此**最終構建體裡的一個突變被承認存在，卻從未被描述**。另外有兩個命名不一致，在引用任何內容之前值得先知道：**Design 頁把載體稱為「pBBR1MCS-1」**（Results 頁圖 7 的圖說也是），而其他每一頁、Registry 條目與摘要都寫 **pBBR1MCS-2**；而黃素還原酶在濕式部分叫 **frm**，在模型與基因庫頁面卻叫 **DszD**。另外，**BG42 有被特性化也有被使用，卻沒有零件編號**——只有 BG17、BG37 與 BG28 被提交。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'uo-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Treat the missing chassis toolkit as a deliverable, and publish it before the science.** Naming three gaps — no Golden-Gate vector, no measured promoter set, no reliable transformation protocol — and then closing and publishing all three turns a season that produced one active construct into a season that produced a platform other teams can use. The *E. coli* promoter run exists purely as a service to teams who prototype there, and that is a deliberate choice.', zh: '**把宿主缺的工具箱當成交付成果，而且在科學之前先公開它。** 指名三個缺口——沒有 Golden Gate 載體、沒有量測過的啟動子組、沒有可靠的轉形流程——然後把三者都補起來並公開，就把「一季只做出一個有活性構建體」變成「一季做出一個別人能用的平台」。那組 *E. coli* 的啟動子數據存在的目的純粹是服務在 *E. coli* 中做原型的團隊，而這是個刻意的選擇。' },
            { en: '**Exhaust the cheap fixes before you engineer the protein, and write down that you did.** IPTG titration, riboflavin and BugBuster all failed on DszC *before* anything was handed to the dry lab, with the written conclusion that expression conditions will not be enough. That sentence is what makes the subsequent mutation campaign a reasonable use of time rather than a reflex.', zh: '**在動手改造蛋白之前把便宜的解法用盡，並把「你做過了」寫下來。** IPTG 濃度調整、riboflavin 與 BugBuster 都在任何東西交給乾式團隊*之前*就先在 DszC 上失敗了，並寫下結論：調整表達條件不會夠。正是這一句話讓後續的突變工作成為合理的時間運用，而不是一種反射動作。' },
            { en: '**Use two predictors chosen for being unlike each other, so agreement means something.** FoldX is an empirical force field with a fixed backbone; ThermoMPNN is deep learning trained on experimental ΔΔG. Consensus between them is informative precisely because they fail differently — and when the strict consensus gave only two hits, the rule was widened **explicitly, with the reason stated**, rather than quietly.', zh: '**選兩個刻意互不相似的預測器，讓「一致」本身有意義。** FoldX 是主鏈固定的經驗式力場，ThermoMPNN 是以實驗 ΔΔG 訓練的深度學習。兩者的交集之所以有資訊量，正是因為它們失敗的方式不同——而當嚴格交集只給出兩個命中時，規則是**明白地、連同理由一起**被放寬，而不是悄悄放寬。' },
            { en: '**Derive your pass thresholds from the wild type\'s own fluctuations.** Four MD pass-or-fail metrics with thresholds taken from how much the wild type itself moves is a cheap idea that removes the main way an MD screen fools its owner: a threshold chosen after seeing the mutants.', zh: '**讓你的通過門檻由野生型自身的波動推導出來。** 四個分子動力學的通過／不通過指標，門檻取自野生型本身的運動幅度——這是一個便宜的想法，卻消除了分子動力學篩選最常騙到自己人的那條路：看完突變體之後才決定門檻。' },
            { en: '**Audit your own software with model-free adversarial probes.** 25 probes against the controller and the store, no LLM involved, and one of them found a real promotion path through the web API that bypassed a gate enforced only in the controller. Any team shipping software can run this, and most do not.', zh: '**用不需要模型的對抗性探針稽核自己的軟體。** 25 個探針打向控制器與儲存層，完全不涉及 LLM，而其中一個找出一條經由 web API 的真實晉級路徑，繞過了只在控制器裡強制執行的關卡。任何要交付軟體的團隊都能做這件事，而大多數團隊沒有做。' },
            { en: '**When a number is impossible, print it with its cause and downgrade the claim in place.** 4.68 µM of 2-HBP from 1 µM of DBT cannot happen at 1:1, and the whole chain — the 10 to 500 µM fit, the 0.1374 intercept, above the detection limit and below the quantification limit — is published next to it, with the titre claim replaced by qualitative proof of flux. That is the single most transferable habit on this page.', zh: '**當一個數字不可能時，把它連同原因一起印出來，並就地把主張降級。** 由 1 µM DBT 得到 4.68 µM 的 2-HBP 在 1:1 下不可能發生，而整條推理——10 至 500 µM 的擬合、0.1374 的截距、落在偵測極限之上與定量極限之下——就印在它旁邊，並把「產量」的主張換成「通量的定性證據」。這是這一頁上最能被別人搬走的一個習慣。' },
            { en: 'What we would **not** copy: letting a techno-economic analysis set the biological residence time equal to the incumbent process. Setting BDS residence time to HDS\'s 2.34 h is stated clearly and is defensible as a thought experiment, but it means the headline $4.57/bbl describes a process nobody has yet built. The same applies to the editorial placeholders still live on the wiki: an acknowledged mutation in the final construct that is never described is the one gap that a reader cannot work around.', zh: '我們**不會**抄的是：讓技術經濟分析把生物製程的停留時間直接設成現有製程的數值。把 BDS 的停留時間設成 HDS 的 2.34 小時，這件事寫得很清楚，作為思想實驗也站得住腳，但它意味著頭條的每桶 $4.57 描述的是一個還沒有人建出來的製程。同樣的話也適用於那些仍留在 wiki 上的編輯佔位符：最終構建體裡有一個被承認卻從未被描述的突變，而這是讀者唯一繞不過去的缺口。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'UOttawa is the clearest case on this site of a team that engineered its own failure analysis into the method: a one-tube screen before paying for sequencing, cheap fixes exhausted before protein design, two deliberately unlike predictors, MD thresholds taken from the wild type, a model-free adversarial suite that found a bug in their own API, and a mass-transfer gain decomposed with the sweep that shows where it evaporates. One construct out of twenty-four produced signal, and they still managed to publish more usable method than most projects that worked.',
            zh: 'UOttawa 是本站最清楚的一個例子：一支把失敗分析直接工程化進方法裡的隊伍——付錢定序之前先用一管反應篩選、蛋白設計之前先把便宜的解法用盡、刻意選兩個互不相似的預測器、分子動力學門檻取自野生型、一套不需模型的對抗性測試找出自家 API 的漏洞，以及一個被拆解開來、連同「增益在哪裡消失」的掃描一起呈現的質傳收益。二十四個構建體裡只有一個產生訊號，而他們仍然公開了比多數「成功的」專案更堪用的方法。'
          })
      });

      return out;
    }
  };
})(window);
