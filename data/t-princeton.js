/* Princeton — SymPleco. 2nd Runner-up, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/princeton/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Design before synthesis', zh: '合成之前先設計完' },
        s: { en: 'Every construct drawn in Benchling + SnapGene; HP17K07 helper backbone (Addgene #120346)', zh: '每個構建體都先在 Benchling＋SnapGene 畫完；HP17K07 輔助骨架（Addgene #120346）' } },
      { l: { en: 'Split the genome in two', zh: '把基因體拆成兩半' },
        s: { en: 'Phagemid pHK002.2 (~3.8 kb, AmpR) apart from HP17K07, so every particle is replication-incompetent', zh: 'phagemid pHK002.2（約 3.8 kb、AmpR）與 HP17K07 分離，使每顆顆粒都無法複製' } },
      { l: { en: 'Clone to a 100 % gate', zh: '選殖以 100% 為門檻' },
        s: { en: 'PCR → gel → InFusion → E. coli ER2738 (F⁺) → miniprep → Plasmidsaurus whole-plasmid read', zh: 'PCR→膠體→InFusion→E. coli ER2738（F⁺）→miniprep→Plasmidsaurus 全質體定序' } },
      { l: { en: 'Four assay attempts', zh: '四次量測嘗試' },
        s: { en: 'Plaque → multi-transformation (colonies, not plaques) → the Sally diagnostic → Phage Jumpstart', zh: '噬菌斑→多重轉形（長出菌落而非噬菌斑）→Sally 診斷→Phage Jumpstart' }, tone: 'a' },
      { l: { en: 'Ligate in vitro, then prove it', zh: '體外接合，然後證明' },
        s: { en: 'Two orthogonal sortases; dot blot → Western (97–102 kDa) → SDS-PAGE → Strep-Tactin and phage ELISA', zh: '兩種正交 sortase；點墨→西方墨點（97–102 kDa）→SDS-PAGE→Strep-Tactin 與噬菌體 ELISA' } }
    ],
    dry: [
      { l: { en: 'Phage Refinery model', zh: 'Phage Refinery 模型' },
        s: { en: '4-state Jumpstart ODEs and 7-state Phase 2, pilus saturation, Poisson passaging, 52 automated checks', zh: 'Jumpstart 4 狀態 ODE 與第 2 階段 7 狀態、菌毛飽和、Poisson 傳代、52 項自動測試' } },
      { l: { en: 'Parameters from gene dosage', zh: '參數來自基因劑量' },
        s: { en: 'Copy numbers read off the Benchling origin annotations; a_h = wt_frac + (1 − wt_frac)·eps ≈ 0.729', zh: '拷貝數讀自 Benchling 的複製起點註解；a_h = wt_frac + (1 − wt_frac)·eps ≈ 0.729' }, tone: 'g' },
      { l: { en: 'A published correction', zh: '公開更正自己' },
        s: { en: 'An earlier revision used 200 M13K07 copies and got a_h ≈ 0.96; M13K07 replicates from p15A, not f1', zh: '早先版本用 200 個 M13K07 拷貝得到 a_h ≈ 0.96；M13K07 其實由 p15A 而非 f1 複製' }, tone: 'r' },
      { l: { en: 'SymPlify, for other people', zh: 'SymPlify，做給別人用' },
        s: { en: 'PeSTo hotspots → BindCraft (protein) or RFdiffusion3 (small molecule) → rank primarily on ipTM', zh: 'PeSTo 熱點→BindCraft（蛋白）或 RFdiffusion3（小分子）→主要以 ipTM 排序' } },
      { l: { en: 'Difficulty scorer', zh: '難度評分器' },
        s: { en: '0–100 from five weighted factors, shipped with its own disclaimer on screen', zh: '五項加權因子給出 0–100 分，並在畫面上附自己的免責聲明' }, tone: 'a' }
    ],
    links: [
      { w: 0, d: 1, l: { en: 'origin annotations give the copy numbers', zh: '複製起點註解提供拷貝數' } },
      { w: 3, d: 0, l: { en: 'the ratio inverted, so model it', zh: '比值反轉，於是建模解釋' } },
      { w: 4, d: 3, l: { en: 'designs come back with an LPXT tag', zh: '設計帶著 LPXT 標籤回到實驗台' }, up: true }
    ]
  };

  PD.pages.princeton = {
    label: { en: 'Princeton', zh: 'Princeton' },
    title: { en: 'Princeton — SymPleco', zh: 'Princeton — SymPleco' },
    render: function (h) {
      var t = team('princeton');
      var out = h.teamhero(t, {
        h1: {
          en: 'Plaque counting broke on exactly the constructs the project is about, so they ==built the assay instead==.',
          zh: '噬菌斑計數偏偏在這個專案最核心的那些構建體上失效，於是他們==把量測方法自己做出來==。'
        },
        lede: {
          en: 'SymPleco turns the M13 filamentous phage into a covalently functionalised sequestration sponge, with cargo attached by sortase-mediated transpeptidation rather than by phage display. The project is worth reading for one reason above the construct: its hardest problem was measurement. Four protocols were tried before one could count what the project needed counted, and the dry lab exists to explain a number that came out the opposite way round from the prediction.',
          zh: 'SymPleco 把 M13 絲狀噬菌體做成共價修飾的吸附海綿，酬載以 sortase 轉肽作用接上，而不是靠傳統的噬菌體表面展示。這個專案值得讀的理由在構建體之上：它最難的問題是量測。他們試了四種流程，才有一種能數到專案真正需要數的東西；而乾式實驗之所以存在，是為了解釋一個與預測方向完全相反的數字。'
        },
        chips: [
          { t: { en: 'M13 phage platform', zh: 'M13 噬菌體平台' }, k: 'b' },
          { t: { en: 'Sortase transpeptidation', zh: 'Sortase 轉肽作用' }, k: 'v' },
          { t: { en: 'Dual-selection transduction counting', zh: '雙重選擇轉導計數' }, k: 'g' },
          { t: { en: 'Phage Refinery ODE model', zh: 'Phage Refinery ODE 模型' }, k: 't' },
          { t: { en: 'SymPlify binder-design app', zh: 'SymPlify 結合蛋白設計工具' }, k: 'a' }
        ],
        stats: [
          { v: '5.7–6.7 × 10⁸ m⁻¹', l: { en: 'M13 surface-area-to-volume ratio, the reason for the chassis', zh: 'M13 的表面積體積比，也是選用此載體的理由' } },
          { v: '~2700', l: { en: 'pVIII copies the high-density sortase can reach', zh: '高密度 sortase 能接上的 pVIII 拷貝數' } },
          { v: '100 %', l: { en: 'Sequence match required before a clone counts as successful', zh: '一個選殖株算成功所需的序列相符率' } },
          { v: '1.58', l: { en: 'Jumpstart round-1 Amp : Kan colony ratio', zh: 'Jumpstart 第 1 輪的 Amp：Kan 菌落比' } },
          { v: '6.13 × 10⁻⁴', l: { en: 'Lowest Phase 2 ratio (Sort8) — three orders below round 1', zh: '第 2 階段最低比值（Sort8），比第 1 輪低三個數量級' } },
          { v: '52', l: { en: 'Automated checks shipped with the model', zh: '隨模型一起發布的自動測試項數' } }
        ]
      });

      out += h.toc([
        { id: 'pr-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'pr-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'pr-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'pr-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'pr-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'pr-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'pr-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'pr-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A chassis chosen on a number, and a bond chosen against the convention', zh: '用一個數字選定載體，用一個鍵結違反慣例' },
        lede: {
          en: 'The phage is not here for display. It is here because of its surface area, and because a covalent bond behaves differently from a displayed peptide when the sponge is stirred.',
          zh: '這裡用噬菌體不是為了展示。用它是因為它的表面積，也因為當吸附海綿被攪動時，共價鍵的表現和展示出來的胜肽並不一樣。'
        },
        body:
          h.p({
            en: 'The project builds a toxin-sequestration sponge out of **M13 filamentous phage**. The chassis argument is quantitative: M13 has a surface-area-to-volume ratio of **5.7–6.7 × 10⁸ m⁻¹**, roughly half that of activated charcoal (**1.0–4.5 × 10⁹ m⁻¹**), which is the adsorption gold standard — so the comparison is made against the incumbent material rather than against nothing.',
            zh: '這個專案用 **M13 絲狀噬菌體**做出一塊捕捉毒素的吸附海綿。選用這個載體的論證是定量的：M13 的表面積體積比為 **5.7–6.7 × 10⁸ m⁻¹**，大約是活性碳（**1.0–4.5 × 10⁹ m⁻¹**，吸附材料的黃金標準）的一半——也就是說，比較的對象是既有材料，而不是空無一物。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'chemistry', zh: '化學' }, k: 'b' }],
              h: { en: 'Covalent, not displayed', zh: '共價，而非展示' },
              p: { en: 'Cargo is attached by **sortase-mediated transpeptidation** instead of the usual non-covalent phage display. The stated gains are two: the size limit on the cargo is lifted, and the linkage survives mechanical stress.', zh: '酬載以 **sortase 轉肽作用**接上，而不是常見的非共價噬菌體表面展示。他們寫出來的兩個好處是：酬載的大小限制被解除，而且這個連結能承受機械應力。' } },
            { chips: [{ t: { en: 'two enzymes', zh: '兩種酵素' }, k: 'v' }],
              h: { en: 'One for position, one for density', zh: '一個管位置，一個管密度' },
              p: { en: '*S. aureus* SrtA writes LPXTG onto G₅-pIII — low copy, spatially controlled. *S. pyogenes* SrtA writes LPXTA onto A₂G₄-pVIII — high density, about 2700 copies. GS linkers are there to give the enzyme access.', zh: '*S. aureus* 的 SrtA 把 LPXTG 接到 G₅-pIII 上——拷貝數低、位置可控。*S. pyogenes* 的 SrtA 把 LPXTA 接到 A₂G₄-pVIII 上——密度高，約 2700 個拷貝。GS 連接子的作用是讓酵素接近得到。' } },
            { chips: [{ t: { en: 'biosafety', zh: '生物安全' }, k: 'g' }],
              h: { en: 'Safety in the architecture, not in the protocol', zh: '安全寫在架構裡，不是寫在操作規範裡' },
              p: { en: 'They rejected the standard phagemid system because it packages a replication-competent genome. The M13 origin (phagemid pHK002.2, ~3.8 kb, AmpR) is kept apart from the structural genes (helper HP17K07, pSC101/Rep101, 5–12 copies per cell), so **every particle produced is replication-incompetent**.', zh: '他們否決了標準 phagemid 系統，因為它會包裝一個具複製能力的基因體。M13 複製起點（phagemid pHK002.2，約 3.8 kb、AmpR）與結構基因（輔助質體 HP17K07，pSC101/Rep101，每個細胞 5–12 個拷貝）分開，因此**所有產生出來的顆粒都沒有複製能力**。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'pr-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The model is downstream of a measurement that surprised them', zh: '模型位在一個讓他們意外的量測結果的下游' },
        lede: {
          en: 'Most teams build a model to predict an experiment. Here the middle arrow runs the other way: the assay produced a ratio that inverted, and the model was written to find out why.',
          zh: '多數團隊建模型是為了預測實驗。這裡中間那支箭頭的方向相反：試驗做出一個反轉的比值，模型是為了找出原因才被寫出來的。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SymPleco: the two lanes and the three handoffs', zh: 'SymPleco：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Model and Software pages.', zh: '由我們依該隊 Engineering、Results、Model、Software 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'pr-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'A library, a sequencing gate, and a validation stack that is genotype-blind on purpose', zh: '一個變異庫、一道定序門檻，以及一套刻意承認自己看不見基因型的驗證堆疊' },
        body:
          h.phases([
            { h: { en: 'Design the whole library on screen first', zh: '先在螢幕上把整個庫設計完' },
              p: { en: 'Every construct is drawn in Benchling and SnapGene before anything is ordered. The variants are single and double modifications of pIII and pVIII on the HP17K07 helper backbone (Addgene #120346).', zh: '每個構建體都先在 Benchling 與 SnapGene 畫完，才去訂任何東西。這些變異體是在 HP17K07 輔助骨架（Addgene #120346）上對 pIII 與 pVIII 做的單一與雙重修飾。' },
              items: [
                { en: 'Named variants: **HP17_Sort3, HP17_Strep3, HP17_Sort8, HP17_Sort8Strep3, HP17_Sort8Sort3**.', zh: '變異體名稱：**HP17_Sort3、HP17_Strep3、HP17_Sort8、HP17_Sort8Strep3、HP17_Sort8Sort3**。' },
                { en: 'The same Benchling annotations are later read by the dry lab for plasmid copy numbers, which is why the design file is a shared artefact rather than a private note.', zh: '乾式實驗後來就是從同一份 Benchling 註解裡讀出質體拷貝數，這也是為什麼那份設計檔是共用的產物，而不是私人筆記。' }
              ] },
            { h: { en: 'Clone, and define what success means', zh: '選殖，並定義什麼叫成功' },
              p: { en: 'PCR → gel → **InFusion** assembly → transform **E. coli ER2738** (F⁺, the phage-display host) → miniprep → **Plasmidsaurus** whole-plasmid sequencing.', zh: 'PCR→膠體→**InFusion** 組裝→轉形 **E. coli ER2738**（F⁺，噬菌體展示宿主）→miniprep→**Plasmidsaurus** 全質體定序。' },
              items: [
                { en: 'Successful is defined in advance as a **100 % match over the region of interest** — not "the band is the right size".', zh: '「成功」事先就被定義為**目標區域 100% 相符**——而不是「條帶大小看起來對」。' }
              ] },
            { h: { en: 'Express the cargo separately, and pick cargo that answers a question', zh: '酬載分開表達，而且選能回答問題的酬載' },
              p: { en: 'Cargo proteins are expressed and purified on their own, quantified by NanoDrop and Bradford. Each one exists to test a different claim.', zh: '酬載蛋白單獨表達與純化，以 NanoDrop 與 Bradford 定量。每一個都是為了檢驗一個不同的主張而存在。' },
              items: [
                { en: '**LPXTA-GFP** counts tagged pVIII; **LPXTA-GFP nanobody** shows functional binding.', zh: '**LPXTA-GFP** 用來數有標籤的 pVIII；**LPXTA-GFP 奈米抗體**用來證明有功能的結合。' },
                { en: '**LPXTG-Cg-Defensin-GFP** tests binding to PLA plastic — the link to the hardware. **LPXTG-VHH7** tests macrophage uptake — the link to safety.', zh: '**LPXTG-Cg-Defensin-GFP** 測對 PLA 塑膠的結合——這是與硬體的接點。**LPXTG-VHH7** 測巨噬細胞攝取——這是與安全性的接點。' }
              ] },
            { h: { en: 'Run the sortase reaction in vitro, deliberately', zh: '刻意把 sortase 反應放在體外做' },
              p: { en: 'The enzyme is not secreted and left to act at an unknown dilution. The reactions are run in vitro so stoichiometry is a controlled variable.', zh: '他們沒有讓酵素被分泌出去、在未知稀釋倍數下自己作用。反應在體外進行，讓化學計量成為一個受控變數。' },
              items: [
                { en: 'This is the same instinct as the measurement work: prefer the version of the experiment in which you know the denominator.', zh: '這和他們在量測上的直覺是同一個：寧可選那個「你知道分母是多少」的實驗版本。' }
              ] },
            { h: { en: 'Validate up a stack, and scale only when forced', zh: '沿著一疊方法往上驗證，被迫了才放大' },
              p: { en: '**Dot blot** (anti-pVIII, Alexa 488, GelDoc fluorescein, 1–2 s exposure, quantified in ImageJ with every image taken at identical laser power and exposure) → **Western blot** with HRP anti-His, Cg-Defensin-sfGFP on pIII at the expected **97–102 kDa** → **SDS-PAGE** for pVIII plus nanobody → **Strep-Tactin plate ELISA** → a **phage ELISA against a GFP calibration curve**.', zh: '**點墨法**（anti-pVIII、Alexa 488、GelDoc fluorescein、曝光 1–2 秒，於 ImageJ 定量，而且每張影像都用相同雷射功率與曝光時間）→ 以 HRP anti-His 做**西方墨點**，pIII 上的 Cg-Defensin-sfGFP 落在預期的 **97–102 kDa** → pVIII 加奈米抗體做 **SDS-PAGE** → **Strep-Tactin 盤式 ELISA** → 對 GFP 校正曲線做**噬菌體 ELISA**。' },
              items: [
                { en: 'The phage ELISA is what turns a blot into a number: an estimate of how many GFP molecules one double-modified phage captures.', zh: '噬菌體 ELISA 才是把墨點變成數字的那一步：估出一顆雙重修飾的噬菌體能抓住幾個 GFP 分子。' },
                { en: 'When titre was too low, culture volume went from **5 mL to 200 mL** — a scale-up driven by a measurement limit, not by ambition.', zh: '當效價太低時，培養體積從 **5 mL 提高到 200 mL**——這是量測極限驅動的放大，不是野心驅動的放大。' }
              ],
              done: { en: 'Identical laser power and exposure across every dot-blot image, and a GFP calibration curve behind the capture estimate.', zh: '所有點墨影像都用相同雷射功率與曝光，而捕捉量的估計背後有一條 GFP 校正曲線。' } }
          ])
      });

      /* ---------------- measurement: the heart of the page ---------------- */
      out += h.sec({
        id: 'pr-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'Four protocols, because a plaque never reports what was inside it', zh: '四種流程，因為噬菌斑永遠不會告訴你裡面裝了什麼' },
        lede: {
          en: 'This is the heart of the project. The assay the field hands you does not measure the quantity this project needs, and they say so in one sentence rather than working around it quietly.',
          zh: '這是整個專案的核心。這個領域交給你的那套試驗，量不到這個專案需要的那個量；而他們用一句話把它說清楚，而不是悄悄繞過去。'
        },
        body:
          h.p({
            en: 'The quantity that matters is **packaged genome per particle across serial rounds**. Plaque counting cannot report it, and the write-up gives three independent reasons rather than one excuse: M13 is **non-lytic**, so a plaque is slowed growth rather than clearing; a dot blot and SDS-PAGE are **genotype-blind**, because the sortase tag is too small to shift the pVIII band; and, most directly, *"a plaque reports that a particle was infective. It never reports what was inside it."*',
            zh: '真正重要的量是**連續傳代中每顆顆粒所包裝的基因體**。噬菌斑計數報不出這個量，而他們給的是三個互相獨立的理由，而不是一個藉口：M13 是**非溶菌性**的，所以噬菌斑代表的是生長變慢、而不是清空；點墨法與 SDS-PAGE 是**對基因型盲目的**，因為 sortase 標籤太小，不足以讓 pVIII 的條帶位移；而最直接的理由是：*「噬菌斑只告訴你某顆顆粒具有感染性。它永遠不會告訴你裡面裝了什麼。」*'
          }) +
          h.tbl({
            cols: [
              { t: '#', w: '6%' },
              { t: { en: 'Protocol attempted', zh: '嘗試過的流程' }, w: '26%' },
              { t: { en: 'What it produced, and what it could not', zh: '它產出了什麼、又做不到什麼' } }
            ],
            rows: [
              ['1', { en: 'Traditional plaque assay', zh: '傳統噬菌斑試驗' }, { en: 'Its useful output was host selection: **ER2738 was identified as the best host**. It could not report genome content, for the three reasons above.', zh: '它有用的產出是宿主的選擇：**確認 ER2738 是最佳宿主**。但由於上述三個理由，它報不出基因體的內容。' }],
              ['2', { en: 'Multi-transformation plaque assay', zh: '多重轉形噬菌斑試驗' }, { en: '**Constructs with more than two tag inserts gave colonies, not plaques** — so plaque counting failed on exactly the constructs the project is about. This is the point at which inventing an assay stopped being optional.', zh: '**帶超過兩個標籤插入的構建體長出的是菌落、不是噬菌斑**——也就是說，噬菌斑計數偏偏在這個專案最核心的那些構建體上失效。從這一刻起，自己發明一套試驗不再是選項之一，而是必須。' }],
              ['3', { en: 'The "Sally" assay', zh: '「Sally」試驗' }, { en: 'A diagnostic built to isolate **one failure cause at a time**: an Amp plate for plasmid transfer, a phage-only control for contamination, a bacteria-only control. Its selective-plating logic became the permanent readout.', zh: '一個為了**一次只隔離一個失敗原因**而建的診斷：Amp 盤看質體是否轉移、只有噬菌體的對照看污染、只有細菌的對照。它的選擇性塗盤邏輯後來變成固定的讀值方式。' }],
              ['4', { en: 'Phage Jumpstart Assay', zh: 'Phage Jumpstart 試驗' }, { en: 'Recursive growth, **scored every round**. This is the assay the model simulates and the one the headline numbers come from.', zh: '遞迴式生長，**每一輪都計分**。這就是模型所模擬的那個試驗，也是主要數字的來源。' }]
            ],
            source: { en: 'Condensed from the team\'s Engineering and Results pages; each attempt carried its own DBTL round.', zh: '濃縮自該隊 Engineering 與 Results 頁；每次嘗試都帶著自己的一輪 DBTL。' }
          }) +
          h.h3({ en: 'The assay they ended up with: dual-selection transduction counting', zh: '他們最後採用的試驗：雙重選擇轉導計數' }) +
          h.p({
            en: 'Each genome carries a **different selection marker**, so one infection event becomes one countable colony of known genotype: an **Amp colony means the phagemid entered**, a **Kan colony means the helper entered**. The design turns an absolute count, which no student lab can trust, into a ratio whose error sources are shared.',
            zh: '每個基因體帶**不同的選擇標記**，於是一次感染事件就變成一個可以數、而且基因型已知的菌落：**Amp 菌落代表 phagemid 進去了**，**Kan 菌落代表輔助質體進去了**。這個設計把一個沒有學生實驗室敢信的絕對計數，變成一個誤差來源彼此共用的比值。'
          }) +
          h.take({ en: 'The rule that makes their numbers comparable', zh: '讓他們的數字可以互相比較的那條規則' }, {
            en: '**Both plates come from the same diluted sample**, so dilution error, plating efficiency and host competence cancel in the ratio. Everything downstream — the round-1 value, the Phase 2 collapse, the model fitted to explain it — is a ratio of two numbers that shared a pipette.',
            zh: '**兩塊盤來自同一份稀釋後的樣本**，所以稀釋誤差、塗盤效率與宿主勝任度都會在比值裡互相抵消。後面所有東西——第 1 輪的數值、第 2 階段的崩塌、為了解釋它而擬合的模型——都是兩個共用同一支移液器的數字之比。'
          }) +
          h.h3({ en: 'Three stated conditions, each with its reason', zh: '三個明寫的條件，每個都附理由' }) +
          h.kv([
            [{ en: 'Host in mid-log', zh: '宿主處於對數中期' }, { en: 'F pili are only present in exponential phase, so stationary cells under-report infection.', zh: 'F 菌毛只在指數生長期出現，所以靜止期的細胞會低報感染事件。' }],
            [{ en: 'Outgrowth before selection', zh: '選擇之前先讓它長' }, { en: 'Without it, real infection events score as zero.', zh: '少了這一步，真實發生的感染事件會被記成零。' }],
            [{ en: 'One genome per cell', zh: '每個細胞一個基因體' }, { en: 'Enforced by pilus retraction and superinfection exclusion — and they **explicitly flag that exclusion is not absolute**, so a rare co-infected cell would bias the ratio.', zh: '靠菌毛回縮與超感染排斥來達成——而他們**明白標示排斥並非絕對**，因此偶發的雙重感染細胞會使比值偏移。' }]
          ]) +
          h.fig({
            kind: 'bars',
            tag: { en: 'RESULT', zh: '結果' },
            title: { en: 'The ratio inverted: Amp : Kan colonies across rounds', zh: '比值反轉了：各輪的 Amp：Kan 菌落比' },
            sub: { en: 'Log scale. Round 1 matched the prediction; every Phase 2 round fell below 1, and the fully modified coat is the worst of the three.', zh: '對數尺度。第 1 輪符合預測；第 2 階段每一輪都低於 1，而修飾最完全的外殼是三者中最差的。' },
            data: [
              { label: { en: 'Jumpstart round 1', zh: 'Jumpstart 第 1 輪' }, v: 1.58, note: { en: '1.58 — above 1, as predicted', zh: '1.58——高於 1，與預測相符' } },
              { label: { en: 'Phase 2 · HP17 wild type', zh: '第 2 階段·HP17 野生型' }, v: 0.0140, note: { en: '1.40 × 10⁻²', zh: '1.40 × 10⁻²' } },
              { label: { en: 'Phase 2 · Sort8Sort3', zh: '第 2 階段·Sort8Sort3' }, v: 0.00154, note: { en: '1.54 × 10⁻³', zh: '1.54 × 10⁻³' } },
              { label: { en: 'Phase 2 · Sort8', zh: '第 2 階段·Sort8' }, v: 0.000613, note: { en: '6.13 × 10⁻⁴', zh: '6.13 × 10⁻⁴' } }
            ],
            opts: { log: true, xlabel: { en: 'Amp : Kan colony ratio (log)', zh: 'Amp：Kan 菌落比（對數）' } },
            caption: { en: 'Exact values as published: 1.58, 1.40 × 10⁻², 1.54 × 10⁻³, 6.13 × 10⁻⁴.', zh: '公布的精確數值：1.58、1.40 × 10⁻²、1.54 × 10⁻³、6.13 × 10⁻⁴。' },
            source: { en: 'The team\'s Results page.', zh: '該隊 Results 頁。' }
          }) +
          h.note({
            en: 'Their own explanation for the collapse, given on the wiki: **pIII sets infectivity at only about 5 copies per virion**, and the fully modified coat infects worse than the part-wild-type hybrid coat. The result is reported against their own prediction, which it contradicts.',
            zh: '他們在 wiki 上對這次崩塌給出的解釋是：**pIII 決定感染性，而每顆病毒顆粒只有約 5 個拷貝**，而修飾完全的外殼比「部分野生型」的混合外殼更不會感染。這個結果是對照他們自己的預測被報出來的——而它與該預測相反。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'pr-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'One model to explain their own surprise, one app for everyone else', zh: '一個模型解釋自己的意外，一個工具給所有其他人' },
        lede: {
          en: 'The two dry-lab pieces have different audiences. The Phage Refinery model is written for themselves; SymPlify is written for a team that has no CLI and no GPU.',
          zh: '這兩塊乾式工作的讀者不同。Phage Refinery 模型是寫給自己的；SymPlify 是寫給那些沒有命令列、也沒有 GPU 的團隊的。'
        },
        body:
          h.flow({
            title: { en: 'SymPlify: from a PDB ID to a ranked set of binders', zh: 'SymPlify：從一個 PDB 編號到一組排序好的結合蛋白' },
            sub: { en: 'The routing decision at step two is the design: a chain is treated as a small molecule when it has fewer than three standard amino-acid types.', zh: '第二步那個分流判斷就是整個設計的關鍵：當一條鏈所含的標準胺基酸種類少於三種時，就被當作小分子處理。' },
            stages: [
              { label: { en: 'Load the target', zh: '載入標靶' }, sub: { en: 'RCSB PDB ID, ligand code, or an uploaded PDB/CIF file', zh: 'RCSB PDB 編號、配體代碼，或上傳 PDB/CIF 檔' }, tone: 'b' },
              { label: { en: 'Auto-route', zh: '自動分流' }, sub: { en: 'Fewer than three standard amino-acid types → treated as a small molecule', zh: '標準胺基酸種類少於三種→當成小分子處理' }, tone: 'v',
                items: [{ en: 'Covers macrocycles', zh: '涵蓋大環化合物' }, { en: 'Covers modified peptides', zh: '涵蓋修飾過的胜肽' }] },
              { label: { en: 'Choose hotspots', zh: '選擇熱點' }, sub: { en: 'PeSTo scores rendered on the 3-D structure, or an RDKit pharmacophore', zh: 'PeSTo 分數畫在三維結構上，或改用 RDKit 藥效基團' }, tone: 'b',
                items: [{ en: 'BindCraft works best with 3–5', zh: 'BindCraft 以 3–5 個熱點最佳' }, { en: 'Low scorers can be removed', zh: '分數低的可以移除' }] },
              { label: { en: 'Generate', zh: '生成' }, sub: { en: 'Protein targets to BindCraft; small molecules to RFdiffusion3, all-atom', zh: '蛋白標靶交給 BindCraft；小分子交給全原子的 RFdiffusion3' }, tone: 'g',
                items: [{ en: 'Job files go to the user\'s own cluster', zh: '工作檔送到使用者自己的叢集' }, { en: 'Queue, elapsed and resubmit tracked', zh: '追蹤排隊、耗時與重送' }] },
              { label: { en: 'Rank and download', zh: '排序與下載' }, sub: { en: 'Primarily on ipTM, with eight more metrics shown beside it', zh: '主要依 ipTM，旁邊同時顯示另外八個指標' }, tone: 'g',
                items: [{ en: 'Optional GS linkers for ligation', zh: '可選擇加上接合用的 GS 連接子' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Software page. Tool names and thresholds are theirs.', zh: '由我們依該隊 Software 頁繪製；工具名稱與門檻為該隊所訂。' }
          }) +
          h.h3({ en: '1 · The Phage Refinery model, in Python with 52 tests', zh: '1 · Phage Refinery 模型：Python 寫成，附 52 項測試' }) +
          h.p({
            en: 'A mechanistic simulation of the Jumpstart assay, built to explain why the ratio inverted. Seven Python files are named on the wiki — `jumpstart.py`, `jumpstart_mechanistic.py`, `passage.py`, `phase2.py`, `recursion.py` as the orchestrator, `plotstyle.py`, and `test_model.py` with **52 automated checks** — and `python3 recursion.py` runs the whole assay end to end.',
            zh: '這是對 Jumpstart 試驗的機制模擬，目的就是解釋比值為什麼會反轉。wiki 上列出七個 Python 檔——`jumpstart.py`、`jumpstart_mechanistic.py`、`passage.py`、`phase2.py`、作為總控的 `recursion.py`、`plotstyle.py`，以及含 **52 項自動測試**的 `test_model.py`——而 `python3 recursion.py` 能從頭到尾跑完整個試驗。'
          }) +
          h.ul([
            { en: '**Jumpstart stage: 4 ODE states** — phagemid-only cells, dual-infected cells, and two free-particle pools — with a **pilus saturation term** (a cell has only a few pili however many particles surround it), a carrying-capacity term, a **growth penalty on infected cells**, and kanamycin killing uninfected cells at t = 75 min.', zh: '**Jumpstart 階段：4 個 ODE 狀態**——只帶 phagemid 的細胞、雙重感染的細胞，以及兩個游離顆粒池——並包含一個**菌毛飽和項**（不論周圍有多少顆粒，一個細胞只有幾根菌毛）、一個承載容量項、一個**對受感染細胞的生長懲罰**，以及在 t = 75 分鐘讓卡那黴素殺死未感染細胞。' },
            { en: '**Passage is Poisson sampling, not division.** Transferring 500 µL into 5 mL is modelled as sampling, so a species can genuinely go extinct instead of asymptoting towards zero forever.', zh: '**傳代是 Poisson 取樣，不是除法。** 把 500 µL 轉進 5 mL 被建模為取樣，因此某個物種可以真的滅絕，而不是永遠漸近趨近於零。' },
            { en: '**Phase 2: 7 states**, each particle type infecting at its own weight, with **σ = superinfection exclusion at about 5 % of the naive rate** — given the same form for every particle type, on the argument that a cell cannot know which genome is arriving.', zh: '**第 2 階段：7 個狀態**，每種顆粒以自己的權重感染，並設 **σ = 超感染排斥為初始速率的約 5%**——每種顆粒都用同一個形式，理由是細胞無法知道即將進來的是哪一個基因體。' }
          ]) +
          h.h3({ en: '2 · The key parameter is derived from gene dosage, not fitted', zh: '2 · 關鍵參數是從基因劑量推導出來的，不是擬合出來的' }) +
          h.p({
            en: 'A hybrid cell carries both the helper\'s wild-type pIII genes and HP17K07\'s modified ones, so the model writes **a_h = wt_frac + (1 − wt_frac)·eps**, giving **a_h ≈ 0.729** at 20 M13K07 copies and 8 HP17 copies. Copy numbers are read off the actual Benchling origin annotations — **pBR322 + rop ≈ 15–20, pSC101 ≈ 5–12, p15A ≈ 10–30** — and every input is marked **confirmed** or **estimated**.',
            zh: '混合型細胞同時帶著輔助質體的野生型 pIII 基因與 HP17K07 的修飾版本，因此模型寫成 **a_h = wt_frac + (1 − wt_frac)·eps**，在 20 個 M13K07 拷貝與 8 個 HP17 拷貝下得到 **a_h ≈ 0.729**。拷貝數是直接讀自實際的 Benchling 複製起點註解——**pBR322 + rop ≈ 15–20、pSC101 ≈ 5–12、p15A ≈ 10–30**——而每一個輸入都標示為**已確認**或**推估**。'
          }) +
          h.warn({
            en: '**They published a correction to their own parameter.** An earlier revision used 200 M13K07 copies and got **a_h ≈ 0.96**, but that figure belongs to wild-type f1 rolling-circle replication. M13K07\'s f1 origin is interrupted by KanR, and it actually replicates from a separate **p15A** origin — which is how 200 became 20 and 0.96 became 0.729.',
            zh: '**他們公開更正了自己的參數。** 早先的版本用 200 個 M13K07 拷貝，得到 **a_h ≈ 0.96**，但那個數字屬於野生型 f1 的滾環複製。M13K07 的 f1 複製起點被 KanR 打斷，它實際上是由另一個 **p15A** 複製起點複製的——200 因此變成 20，0.96 也因此變成 0.729。'
          }) +
          h.h3({ en: '3 · SymPlify, with BindCraft\'s own stages documented', zh: '3 · SymPlify，並把 BindCraft 自己的階段寫清楚' }) +
          h.p({
            en: 'Ranking is primarily on **ipTM**, with pTM, pLDDT, ΔG (REU), surface hydrophobicity, shape complementarity, unsatisfied H-bonds, C-terminal accessibility and SASA shown alongside, so a user can override the primary sort. The four internal stages of **BindCraft** are documented rather than hidden: hallucination with **AF2-multimer** → **SolubleMPNN** → AF2 monomer re-prediction, which the page calls harsh but robust → confidence filtering. Where experts disagreed on which AlphaFold version to use — 2, 3, or the Server — the team tried several and compared instead of picking one on authority. Designs are deposited on **Zenodo**.',
            zh: '排序主要依 **ipTM**，同時並列顯示 pTM、pLDDT、ΔG（REU）、表面疏水性、形狀互補性、未滿足的氫鍵、C 端可及性與 SASA，使用者因此可以推翻主要的排序依據。**BindCraft** 內部的四個階段是被寫出來、而不是被藏起來的：以 **AF2-multimer** 做幻覺生成→**SolubleMPNN**→AF2 單體重新預測（頁面上形容這一步嚴苛但穩健）→信心度篩選。當專家們對該用哪個 AlphaFold 版本（2、3 或 Server 版）意見不一致時，這個團隊是試了幾種並加以比較，而不是憑權威選一個。設計成果存放在 **Zenodo**。'
          }) +
          h.h3({ en: '4 · The difficulty scorer, and its disclaimer on the same screen', zh: '4 · 難度評分器，以及和它同一個畫面上的免責聲明' }) +
          h.p({
            en: 'A 0–100 score graded Easy to Very Hard. For protein targets it is five weighted factors; for small molecules, five RDKit descriptors. The point worth copying is not the weighting but what sits next to it: the app itself states that the score is **not experimentally validated**, carries **no affinity metric**, and **only sees the uploaded PDB**.',
            zh: '一個 0–100 分、分級為「容易」到「非常困難」的分數。對蛋白標靶是五項加權因子；對小分子是五個 RDKit 描述子。值得照抄的不是權重本身，而是旁邊放了什麼：這個工具自己就寫出，這個分數**未經實驗驗證**、**不含任何親和力指標**，而且**只看得到使用者上傳的那個 PDB**。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Protein-target factor', zh: '蛋白標靶因子' }, w: '32%' },
              { t: { en: 'Weight', zh: '權重' }, w: '12%' },
              { t: { en: 'How it is read', zh: '它怎麼被讀出來' } }
            ],
            rows: [
              [{ en: 'Epitope chemistry', zh: '抗原決定位的化學性質' }, '30 %', { en: 'The chemistry of the surface being targeted.', zh: '被標靶的那塊表面的化學性質。' }],
              [{ en: 'Hotspot patch tightness', zh: '熱點區塊的緊密度' }, '25 %', { en: 'Above **30 Å** the app raises a warning, because one binder cannot reach that far.', zh: '超過 **30 Å** 時工具會發出警告，因為單一結合蛋白跨不了那麼遠。' }],
              [{ en: 'Flexibility', zh: '柔性' }, '20 %', { en: 'Read as **B-factor for experimental structures and pLDDT for predicted ones** — two different quantities, named as such.', zh: '**實驗結構讀 B-factor、預測結構讀 pLDDT**——兩個不同的量，而且被明白指名。' }],
              [{ en: 'Globularity', zh: '球狀程度' }, '15 %', { en: 'From the radius of gyration.', zh: '由迴轉半徑計算。' }],
              [{ en: 'Size', zh: '大小' }, '10 %', { en: 'Target size.', zh: '標靶的大小。' }]
            ],
            source: { en: 'The small-molecule branch uses logP 30 %, heavy atoms 20 %, rotatable bonds 20 %, TPSA 20 %, aromatic rings 10 %.', zh: '小分子那一支使用 logP 30%、重原子數 20%、可旋轉鍵 20%、TPSA 20%、芳香環 10%。' }
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'pr-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Named failures, and assumptions labelled as assumptions', zh: '指名道姓的失敗，以及被標成假設的假設' },
        body:
          h.cards([
            { chips: [{ t: { en: 'method failed', zh: '方法失效' }, k: 'r' }],
              h: { en: 'Plaque counting, on the constructs that matter', zh: '噬菌斑計數，偏偏敗在最重要的構建體上' },
              p: { en: 'In the multi-transformation plaque assay, **constructs with more than two tag inserts gave colonies rather than plaques**. The readout failed precisely where the project lives, which is why four protocols exist.', zh: '在多重轉形噬菌斑試驗裡，**帶超過兩個標籤插入的構建體長出的是菌落、不是噬菌斑**。這個讀值方式恰恰在專案的核心地帶失效——這就是為什麼會有四種流程。' } },
            { chips: [{ t: { en: 'result against prediction', zh: '結果與預測相反' }, k: 'r' }],
              h: { en: 'Every Phase 2 round fell below 1', zh: '第 2 階段每一輪都低於 1' },
              p: { en: 'Round 1 gave 1.58; Phase 2 gave 1.40 × 10⁻² (HP17 wild type), 1.54 × 10⁻³ (Sort8Sort3) and 6.13 × 10⁻⁴ (Sort8). Their explanation: pIII sets infectivity at only about 5 copies per virion, and the fully modified coat infects worse than the hybrid coat.', zh: '第 1 輪是 1.58；第 2 階段則是 1.40 × 10⁻²（HP17 野生型）、1.54 × 10⁻³（Sort8Sort3）與 6.13 × 10⁻⁴（Sort8）。他們的解釋是：pIII 決定感染性而每顆病毒只有約 5 個拷貝，且修飾完全的外殼比混合外殼更不會感染。' } },
            { chips: [{ t: { en: 'corrected in public', zh: '公開更正' }, k: 'a' }],
              h: { en: 'a_h ≈ 0.96 became a_h ≈ 0.729', zh: 'a_h ≈ 0.96 變成 a_h ≈ 0.729' },
              p: { en: 'An earlier model revision used 200 M13K07 copies, a figure that belongs to wild-type f1 rolling-circle replication. M13K07\'s f1 origin is interrupted by KanR and replication runs from a separate p15A origin. The correction is published rather than silently patched.', zh: '早先的模型版本用了 200 個 M13K07 拷貝，而那個數字屬於野生型 f1 的滾環複製。M13K07 的 f1 複製起點被 KanR 打斷，複製其實由另一個 p15A 起點進行。這個更正是公開的，不是默默改掉的。' } },
            { chips: [{ t: { en: 'flagged assumption', zh: '標示過的假設' }, k: 'a' }],
              h: { en: 'MOI 2.5, and no dual infection', zh: 'MOI 2.5，以及不考慮雙重感染' },
              p: { en: '**MOI = 2.5 is flagged as an assumption.** The no-dual-infection simplification is flagged together with its reason: the wet-lab assay uses parallel single selection rather than double selection, so it cannot measure the co-infection fraction. They also note that superinfection exclusion is not absolute, which is the same limitation seen from the bench side.', zh: '**MOI = 2.5 被標示為假設。** 不考慮雙重感染的簡化則連同理由一起被標出：濕式試驗用的是平行的單一選擇、而不是雙重選擇，因此量不到共同感染的比例。他們也寫明超感染排斥並非絕對——這就是同一個限制從實驗台那一側看過去的樣子。' } },
            { chips: [{ t: { en: 'stated limitation', zh: '明列限制' }, k: 'r' }],
              h: { en: 'The difficulty score is not a measurement', zh: '難度分數不是一個量測值' },
              p: { en: 'Shipped with a disclaimer inside the app: not experimentally validated, no affinity metric, and it only sees the uploaded PDB. A 0–100 number that says in the same screen what it cannot tell you.', zh: '工具內就附了免責聲明：未經實驗驗證、沒有親和力指標，而且只看得到使用者上傳的那個 PDB。一個 0–100 的數字，在同一個畫面上就說清楚它不能告訴你什麼。' } },
            { chips: [{ t: { en: 'forced by the data', zh: '被數據迫使' }, k: 'a' }],
              h: { en: 'Titre too low at 5 mL', zh: '5 mL 的效價太低' },
              p: { en: 'Culture volume had to go from 5 mL to 200 mL for the downstream assays to have enough material. The scale-up is reported as a response to a measurement limit.', zh: '為了讓下游試驗有足夠的材料，培養體積必須從 5 mL 提高到 200 mL。這次放大是被當作「對量測極限的回應」寫出來的。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'pr-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Write down what your assay cannot report, in one sentence, before you design the next one.** "A plaque reports that a particle was infective. It never reports what was inside it" is the sentence that produced three more protocols. The equivalent sentence for most projects can be written in an afternoon.', zh: '**在設計下一套試驗之前，先用一句話寫下你現在的試驗報不出什麼。**「噬菌斑只告訴你某顆顆粒具有感染性，永遠不會告訴你裡面裝了什麼」——就是這句話催生了另外三套流程。對多數專案來說，這種句子一個下午就能寫出來。' },
            { en: '**Build the ratio so that the error sources cancel.** Two plates from the same diluted sample means dilution error, plating efficiency and host competence drop out. It costs one extra plate and buys comparability across rounds.', zh: '**把比值設計成讓誤差來源互相抵消。** 兩塊盤取自同一份稀釋樣本，稀釋誤差、塗盤效率與宿主勝任度就都會消掉。代價是多一塊盤，換到的是跨輪次的可比性。' },
            { en: '**Make a diagnostic assay whose only job is to isolate one failure cause.** The Sally assay is three controls, and its selective-plating logic became the permanent readout. A diagnostic is cheaper than a guess.', zh: '**做一個唯一任務就是隔離單一失敗原因的診斷試驗。** Sally 試驗就是三個對照，而它的選擇性塗盤邏輯後來成了固定的讀值方式。一個診斷比一次猜測便宜。' },
            { en: '**Derive a parameter from the construct, then correct it in public when the construct turns out to work differently.** Reading copy numbers off your own origin annotations is free; publishing the 0.96 → 0.729 correction is what makes the rest of the model believable.', zh: '**從構建體本身推導參數，而當構建體的運作方式其實不同時，就公開更正它。** 從自己的複製起點註解讀出拷貝數不花錢；而公開 0.96 → 0.729 這個更正，才是讓模型其餘部分可信的原因。' },
            { en: 'What we would **not** copy: shipping a 0–100 difficulty score at all. The disclaimer is honest, but a single graded number invites exactly the use the disclaimer forbids — and the five weights are not calibrated against any experimental outcome.', zh: '我們**不會**抄的是：發布一個 0–100 的難度分數這件事本身。免責聲明很誠實，但一個單一的分級數字，正好會誘發免責聲明所禁止的那種使用方式——而那五個權重並沒有對任何實驗結果做過校正。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'Princeton placed third because they treated measurement as the research problem: four protocols until one could count packaged genomes, a ratio engineered so its errors cancel, and a model whose job was to explain a number that contradicted their own prediction — with its key parameter corrected in public.',
            zh: 'Princeton 之所以拿下第三名，是因為他們把量測本身當成研究問題：四套流程直到有一套能數出被包裝的基因體、一個被設計成讓誤差自相抵消的比值，以及一個任務就是解釋「與自己預測相反的數字」的模型——而它的關鍵參數還公開更正過。'
          })
      });

      return out;
    }
  };
})(window);
