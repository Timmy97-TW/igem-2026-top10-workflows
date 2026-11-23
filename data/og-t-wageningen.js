/* WageningenUR — Triton. 1st Runner-up, Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/wageningenur/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Rebuild the fluoride assay first', zh: '先把氟離子分析法重建起來' },
        s: { en: 'Alizarin + lanthanum, reagents fixed at 1:1 100 µM, denominator at the isosbestic point, LOD 3.8 µM', zh: '茜素＋鑭，試劑固定 1:1、100 µM，分母取等吸收點，LOD 3.8 µM' }, tone: 'g' },
      { l: { en: 'Screen the enzymes, including non-dehalogenases', zh: '篩選酵素，連非脫鹵酶也放進去' },
        s: { en: 'Three non-dehalogenase candidates included so any signal belongs to the FAcD class, not to oxidation', zh: '刻意納入三個非脫鹵酶候選，讓任何訊號只能歸給 FAcD 這一類，而不是氧化反應' } },
      { l: { en: 'Characterise the selection before using it', zh: '在使用選擇壓之前先把它特性化' },
        s: { en: 'TFA inhibits completely between 200 and 300 mM → 200 mM chosen; glyoxylate auxotroph rescued at 20 mM DFA', zh: 'TFA 在 200–300 mM 間完全抑制→選 200 mM；甘醛酸缺陷株在 20 mM DFA 下被救回' } },
      { l: { en: 'Run MutaT7 hypermutation', zh: '跑 MutaT7 超突變' },
        s: { en: 'Three lineages, two selection schemes; DFA improved where TFA was the pressure', zh: '三個譜系、兩種選擇方案；在以 TFA 為壓力時反而是 DFA 變好' }, tone: 'a' },
      { l: { en: 'Express and bind-test the capture proteins', zh: '表達並測試捕捉蛋白的結合' },
        s: { en: 'DSF qualified on lysozyme first; Binder_283 48 mg/L with a reproducible negative Tm shift', zh: 'DSF 先用溶菌酶驗證；Binder_283 產量 48 mg/L，並有可重現的負向 Tm 位移' } },
      { l: { en: 'Put a protein on a cellulose bead', zh: '把蛋白接到纖維素珠上' },
        s: { en: 'K. sucrofermentans beads from the 2025 team; GFP–CBD adheres strongly, plain GFP barely', zh: '沿用 2025 年隊伍的 K. sucrofermentans 珠；GFP–CBD 牢固附著，純 GFP 幾乎不附' } },
      { l: { en: 'Test 14 riboswitches', zh: '測 14 個核開關' },
        s: { en: '8 PFOA, 4 TFA, 2 scrambled. One worked, and it was a PFOA one', zh: '8 個 PFOA、4 個 TFA、2 個打亂序列。一個成功，而且是 PFOA 的那個' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Search for an existing binder', zh: '先找現成的結合蛋白' },
        s: { en: 'Literature + PDB table of every reported TFA/FAH/ACT binder; conclusion: none binds TFA strongly', zh: '用文獻＋PDB 列出所有報告過的 TFA／FAH／ACT 結合蛋白；結論：沒有一個能強結合 TFA' } },
      { l: { en: 'Generate binders de novo', zh: '從零生成結合蛋白' },
        s: { en: 'Proteína-Complexa and BoltzGen denoising; Boltz-2 over docking because TFA is tiny', zh: 'Proteína-Complexa 與 BoltzGen 去噪生成；因為 TFA 太小，用 Boltz-2 而不是對接' } },
      { l: { en: 'PIGEON: 50 rounds of in silico evolution', zh: 'PIGEON：50 輪電腦內演化' },
        s: { en: 'ESM3 embeddings → ridge regression → guided decoding → Boltz-2 → back into the training set', zh: 'ESM3 嵌入→脊迴歸→引導式解碼→Boltz-2→再放回訓練集' }, tone: 'g' },
      { l: { en: 'DISARM: retarget an aptamer, keep its fold', zh: 'DISARM：改導向既有適體，保留其折疊' },
        s: { en: 'AMBER interaction energy minus the two isolated parts; RNAfold check; a seed MAWS never had', zh: 'AMBER 交互作用能減去兩個獨立部分；RNAfold 檢查；補上 MAWS 從來沒有的隨機種子' } }
    ],
    links: [
      { w: 1, d: 0, l: { en: 'no native TFA enzyme exists, so evolve DFA activity', zh: '不存在天然的 TFA 酵素，所以改去演化 DFA 活性' }, up: true },
      { w: 4, d: 2, l: { en: 'the designed binder outyielded the literature one', zh: '設計出來的結合蛋白產量勝過文獻的那個' }, up: true },
      { w: 6, d: 3, l: { en: 'one of 50 candidates switched', zh: '50 個候選中有一個真的切換了' } }
    ]
  };

  PD.pages['og-wageningen'] = {
    label: { en: 'WageningenUR', zh: 'WageningenUR' },
    title: { en: 'WageningenUR — Triton', zh: 'WageningenUR — Triton' },
    render: function (h) {
      var t = team('wageningen');
      var out = h.teamhero(t, {
        h1: {
          en: 'Three modules, and the wiki tells you ==exactly how far each one is== from working.',
          zh: '三個模組，而這個 wiki 告訴你==每一個距離「能用」還有多遠==。'
        },
        lede: {
          en: 'Triton captures TFA on protein-functionalised cellulose beads, elutes it into a bioreactor, degrades it to oxalate and fluoride at 30 °C and 1 atm, and watches the reactor with a riboswitch biosensor. Not one of the three legs is finished, and the wiki says so in every section — most memorably when a fluoride reading above its own detection limit is met with "we are hesitant to call this TFA activity".',
          zh: 'Triton 以功能化的纖維素珠捕捉 TFA，洗提進生物反應器，在 30 °C、1 atm 下降解成草酸與氟離子，再用核開關生物感測器監看反應器。三條腿沒有一條完成，而這個 wiki 在每一節都說了出來——最令人記得的是，當一個氟離子讀值已經高過自家偵測極限時，他們的回應是「我們不敢把這稱為 TFA 活性」。'
        },
        chips: [
          { t: { en: 'TFA, the shortest PFAS', zh: 'TFA，最短的 PFAS' }, k: 'b' },
          { t: { en: 'Capture · degrade · sense', zh: '捕捉·降解·感測' }, k: 'v' },
          { t: { en: 'MutaT7 directed evolution', zh: 'MutaT7 定向演化' }, k: 'g' },
          { t: { en: 'Bacterial cellulose beads', zh: '細菌纖維素珠' }, k: 't' },
          { t: { en: 'DISARM + PIGEON', zh: 'DISARM＋PIGEON' }, k: 'a' }
        ],
        stats: [
          { v: '93 h', l: { en: 'Screen length, and no enzyme showed TFA activity at any point', zh: '篩選時長，而全程沒有任何酵素顯示 TFA 活性' } },
          { v: '3.8 / 11.6', l: { en: 'LOD and LOQ of their rebuilt fluoride assay, µM', zh: '重建後氟離子分析法的 LOD 與 LOQ，µM' } },
          { v: '1 of 14', l: { en: 'Riboswitches that met the success criterion', zh: '達到成功標準的核開關數' } },
          { v: '48 mg/L', l: { en: 'Yield of the de novo binder, against 11.0 for the literature protein', zh: '新設計結合蛋白的產率，文獻蛋白為 11.0' } },
          { v: '0.723', l: { en: 'Boltz-2 binding probability after 50 PIGEON rounds, from 0.54', zh: '50 輪 PIGEON 後的 Boltz-2 結合機率，起點 0.54' } },
          { v: '10×', l: { en: 'Penalty PIGEON charges for losing binding, inside the objective', zh: 'PIGEON 在目標函數裡對「結合力下降」收取的罰則倍數' } }
        ]
      });

      out += h.toc([
        { id: 'w-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'w-lyon', t: { en: 'The same molecule as LYON', zh: '和 LYON 同一個分子' } },
        { id: 'w-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'w-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'w-meas', t: { en: 'The assay is the deliverable', zh: '分析法本身就是交付物' } },
        { id: 'w-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'w-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'w-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'w-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Reverse osmosis does not remove TFA, it moves it', zh: '逆滲透沒有移除 TFA，只是把它搬走' },
        lede: {
          en: 'TFA is the shortest PFAS, hydrophilic, extremely mobile, and the terminal breakdown product of many other PFAS — so it is the most concentrated PFAS in the environment and it does not degrade further.',
          zh: 'TFA 是最短的 PFAS，親水、極易移動，而且是許多其他 PFAS 的最終分解產物——所以它是環境中濃度最高的 PFAS，而且不會再往下分解。'
        },
        body:
          h.p({
            en: 'The C–F bond is the strongest single bond carbon forms, around **130 kcal/mol**. Reverse osmosis is the only method in use for TFA, and the concentrate is discharged back to surface water — so the pathway relocates the problem rather than solving it. The EU Drinking Water Directive leaves TFA removal to member states, and many decline. Triton is a **three-module system** built to close that loop:',
            zh: 'C–F 鍵是碳能形成的最強單鍵，約 **130 kcal/mol**。目前唯一用於 TFA 的方法是逆滲透，而濃縮液會被排回地表水——所以這條路徑只是把問題搬家，不是解決它。歐盟飲用水指令把 TFA 的移除交給各會員國決定，而許多國家選擇不做。Triton 是一個**三模組系統**，目標就是把這個環閉起來：'
          }) +
          h.flow({
            title: { en: 'CF₃COO⁻ + 2 H₂O → C₂O₄²⁻ + 3 F⁻ + 4 H⁺, at 30 °C and 1 atm', zh: 'CF₃COO⁻ + 2 H₂O → C₂O₄²⁻ + 3 F⁻ + 4 H⁺，30 °C、1 atm' },
            sub: { en: 'The target reaction. Compare it with incineration at ~1000 °C or hydrothermal alkaline treatment at 200 °C and over 200 atm.', zh: '這是目標反應。對照一下：焚化約 1000 °C，或水熱鹼處理 200 °C 且超過 200 atm。' },
            stages: [
              { label: { en: 'Capture', zh: '捕捉' }, sub: { en: 'Protein binders on bacterial cellulose beads', zh: '細菌纖維素珠上的結合蛋白' }, tone: 'b',
                items: [{ en: 'cell-free, works as a packed column or as floating media', zh: '無細胞，可做成填充管柱或漂浮介質' }] },
              { label: { en: 'Elute', zh: '洗提' }, sub: { en: 'Wash the filter into a bioreactor', zh: '把濾材洗進生物反應器' }, tone: 'v',
                items: [{ en: 'the concentration step industry cannot do for a short-chain PFAS', zh: '這是業界對短鏈 PFAS 做不到的濃縮步驟' }] },
              { label: { en: 'Degrade', zh: '降解' }, sub: { en: 'Engineered E. coli expressing a defluorinase', zh: '表達脫氟酶的工程大腸桿菌' }, tone: 'g',
                items: [{ en: 'the enzyme does not exist yet; this is the module they evolved', zh: '這個酵素還不存在；這就是他們去演化的模組' }] },
              { label: { en: 'Sense', zh: '感測' }, sub: { en: 'Riboswitch driving mRFP1, read by flow cytometry', zh: '核開關驅動 mRFP1，以流式細胞儀讀取' }, tone: 't',
                items: [{ en: 'continuous, where HPLC-Orbitrap takes days per spot measurement', zh: '可連續監測；而 HPLC-Orbitrap 每個點量測要好幾天' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Description and Design pages.', zh: '由我們依該隊 Description 與 Design 頁繪製。' }
          })
      });

      /* ---------------- the LYON comparison ---------------- */
      out += h.sec({
        id: 'w-lyon',
        kick: { en: 'Cross-division', zh: '跨組對照' },
        h2: { en: 'Two Top 10 teams, one molecule, opposite answers', zh: '兩支前十名隊伍、一個分子、相反的答案' },
        lede: {
          en: 'LYON took Best Bioremediation Project in the Undergraduate section. Wageningen took it in the Overgraduate section. Both attacked TFA in the same year, and the interesting part is where they diverged.',
          zh: 'LYON 拿下大學部的 Best Bioremediation Project，Wageningen 拿下研究生部的同一個獎。兩隊在同一年對付 TFA，而真正有意思的是他們分岔的地方。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Decision', zh: '決定' }, w: '20%' },
              { t: { en: 'LYON (Undergrad)', zh: 'LYON（大學部）' } },
              { t: { en: 'WageningenUR (Overgrad)', zh: 'WageningenUR（研究生部）' } }
            ],
            rows: [
              [{ en: 'Degradation', zh: '降解' },
               { en: 'Dropped. The model said a fluoroacetate dehalogenase would not cleave TFA, and the project pivoted to capture only.', zh: '放棄。模型判定氟乙酸脫鹵酶無法切斷 TFA，專案因此轉向只做捕捉。' },
               { en: 'Kept, and reported as not yet working. No screened enzyme had TFA activity at 93 h, so they built an evolution platform instead.', zh: '保留，並報告為「還沒做到」。篩選的酵素在 93 小時內都沒有 TFA 活性，所以他們改去建一個演化平台。' }],
              [{ en: 'Capture', zh: '捕捉' },
               { en: 'Protein binders anchored to cellulose beads in a column, with heat-triggered release so the material is reusable.', zh: '結合蛋白錨定在管柱中的纖維素珠上，以加熱觸發釋放，使材料可重複使用。' },
               { en: 'De novo binders on bacterial cellulose beads via a cellulose-binding domain, inherited from their own 2025 team\'s strain.', zh: '以纖維素結合域把新設計的結合蛋白接到細菌纖維素珠上，菌株沿用自家 2025 年隊伍。' }],
              [{ en: 'Sensing', zh: '感測' },
               { en: 'Not a module.', zh: '不是一個模組。' },
               { en: 'A third module: a retargeted riboswitch, with its own software (DISARM) and 14 constructs tested.', zh: '第三個模組：改導向的核開關，有自己的軟體（DISARM），並測了 14 個構建體。' }],
              [{ en: 'What the model was for', zh: '模型的用途' },
               { en: 'To kill plan A before the bench spent a season on it.', zh: '在實驗檯花掉一整季之前，先把 A 計畫否決掉。' },
               { en: 'To narrow a search space, with a written warning that a Boltz-2 probability is a ranking signal and not a measured affinity.', zh: '用來縮小搜尋空間，並書面警告 Boltz-2 的機率只是排序訊號，不是量測出的親和力。' }]
            ],
            min: 740,
            source: { en: 'Read from both teams\' 2026 wikis. The comparison is ours.', zh: '讀自兩隊 2026 年的 wiki。這個對照是我們做的。' }
          }) +
          h.take({ en: 'Our reading', zh: '我們的判讀' }, {
            en: 'The two teams answer a question every iGEM team faces: **when a model says one leg of your system will not work, do you remove the leg or keep it and report the gap?** LYON removed it and shipped a narrower, more finished project. Wageningen kept it and shipped a wider project with a measured distance to the goal. Both approaches reached a Top 10 and a village award, so the lesson is not which is right — it is that **either is defensible when the reasoning is published**.',
            zh: '兩支隊伍回答了每個 iGEM 團隊都會碰到的問題：**當模型說你系統的某一條腿行不通時，你要砍掉那條腿，還是留著它並報告差距？**LYON 砍了，交出一個更窄但更完成的專案。Wageningen 留著，交出一個更寬、但明確量出「距離目標還有多遠」的專案。兩種做法都進了前十並拿到村獎，所以教訓不是哪個對——而是**只要理由被公開，兩者都站得住腳**。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'w-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The measurement comes first, and a literature search closes a door', zh: '量測排在最前面，而一次文獻搜尋關上了一扇門' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'Triton: three modules across two lanes', zh: 'Triton：橫跨兩條泳道的三個模組' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s LaTeX source pages: Project, Wet lab, Dry lab and Notebook.', zh: '由我們依該隊的 LaTeX 來源頁面繪製：Project、Wet lab、Dry lab、Notebook。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'w-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Three modules, each with a gate it had to pass', zh: '三個模組，每個都有一道必須通過的關卡' },
        body:
          h.h3({ en: 'Capture — one pipeline, three proteins, one hit', zh: '捕捉——一條流程、三個蛋白、一個命中' }) +
          h.p({
            en: 'The literature search came first and is published as a table: every protein reported to bind TFA, fluoroacetate or acetate, with organism, PDB ID, length and whether the ligand actually appears in the deposited structure. The conclusion is written down before any design work: **no protein is reported to bind TFA strongly.** The argument for going de novo is evolutionary rather than fashionable — **TFA did not exist before 1922**, so nothing has been under selection to bind it, and TFA is a hard target anyway, being tiny with barely polarisable fluorines.',
            zh: '文獻搜尋排在最前面，而且以表格形式公開：所有報告過能結合 TFA、氟乙酸或乙酸的蛋白，連同生物來源、PDB 編號、長度，以及該配體是否真的出現在已存結構裡。結論在任何設計工作之前就寫下來了：**沒有任何蛋白被報告能強結合 TFA。**走「從零設計」的理由是演化層面的，而不是因為流行——**TFA 在 1922 年之前並不存在**，所以不曾有任何東西受到結合它的選擇壓；而 TFA 本身也是難題，因為它很小、氟的極化率又很低。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'pipeline test', zh: '流程測試' }, k: 'v' }],
              h: { en: 'β-lactoglobulin: the positive control that was not', zh: 'β-乳球蛋白：那個沒當成的陽性對照' },
              p: [
                { en: 'Picked because literature reports weak PFAS/TFA interaction, so it *should* have been a positive control. Expressed as an MBP fusion (~62 kDa band), purified, **11.0 mg/L**.', zh: '選它是因為文獻報告它與 PFAS／TFA 有微弱交互作用，所以它*應該*可以當陽性對照。以 MBP 融合形式表達（約 62 kDa 的帶），純化後 **11.0 mg/L**。' },
                { en: 'DSF was **qualified on lysozyme first**: measured Tm 70.69 °C against 68.6 °C in literature with the same dye — the instrument, dye, channel and ramp were all checked before any candidate was judged.', zh: 'DSF **先用溶菌酶做驗證**：量到 Tm 70.69 °C，而文獻用同一種染劑是 68.6 °C——儀器、染劑、通道與溫度梯度都在任何候選被評判之前先檢查過。' },
                { en: 'Result: **no reproducible TFA-dependent thermal shift.** Two explanations are given rather than one, and the self-blaming one is kept: their dye was not the PFAS-specific GloMelt used in the paper, and they tested the MBP fusion rather than commercial bovine BLG. Verdict: it cannot serve as a positive control, and *"failure to reproduce the reported thermal shift cannot be interpreted as a complete absence of interaction."*', zh: '結果：**沒有可重現的 TFA 相關熱位移。**他們給了兩個解釋而不是一個，而且保留了責怪自己的那個：他們用的染劑不是論文裡那種 PFAS 專用的 GloMelt，而且他們測的是 MBP 融合蛋白，不是市售的牛 BLG。結論：它無法當陽性對照，而且*「沒能重現所報告的熱位移，不能被解讀為完全沒有交互作用」*。' }
              ] },
            { chips: [{ t: { en: 'the hit', zh: '命中的那個' }, k: 'g' }],
              h: { en: 'Binder_283 beat the literature protein on its own pipeline', zh: 'Binder_283 在同一條流程上贏過文獻蛋白' },
              p: [
                { en: 'Two dry-lab candidates through the **same** pipeline. Yields: **Binder_283 48 mg/L**, BoltzGen_r1 15 mg/L — against β-lactoglobulin\'s 11.0. Tm 51.44 ± 0.11 °C and 54.05 ± 0.14 °C.', zh: '兩個乾式實驗候選走**同一條**流程。產率：**Binder_283 為 48 mg/L**、BoltzGen_r1 為 15 mg/L——而 β-乳球蛋白是 11.0。Tm 分別為 51.44 ± 0.11 °C 與 54.05 ± 0.14 °C。' },
                { en: 'BoltzGen_r1: no shift. **Binder_283: a reproducible *negative* Tm shift at every TFA concentration tested**, read as evidence of interaction with the correct caveat that ligand-induced destabilisation is a known but less common signature.', zh: 'BoltzGen_r1：沒有位移。**Binder_283：在所有測試的 TFA 濃度下都出現可重現的*負向* Tm 位移**，被判讀為交互作用的證據，並正確附註「配體誘導的去穩定化」是已知但較少見的特徵。' },
                { en: 'Three proteins, one pipeline, one hit — and the hit is the computational one.', zh: '三個蛋白、一條流程、一個命中——而命中的那個是電腦設計出來的。' }
              ] },
            { chips: [{ t: { en: 'scaffold', zh: '載體' }, k: 't' }],
              h: { en: 'Beads inherited, then functionalised with a proxy', zh: '珠子是繼承來的，再用替代蛋白做功能化' },
              p: [
                { en: 'The *K. sucrofermentans* strain came from their own 2025 team (BCoated), reshaped from sheets into **beads**.', zh: '*K. sucrofermentans* 菌株來自自家 2025 年隊伍（BCoated），從膜狀改做成**珠狀**。' },
                { en: 'Functionalisation tested with **GFP as a proxy because fluorescence is a direct readout**: plain GFP adheres slightly, **GFP–CBD adheres strongly**, and the fluorescence was quantified per bead rather than judged from the image.', zh: '功能化用 **GFP 當替代，因為螢光是直接讀值**：純 GFP 只稍微附著，**GFP–CBD 則牢固附著**，而且螢光是逐顆珠量化，不是看圖判斷。' }
              ] }
          ]) +
          h.h3({ en: 'Degradation — the module that is honest about not being there yet', zh: '降解——那個誠實承認還沒到位的模組' }) +
          h.p({
            en: 'Fluoroacetate dehalogenases (FAcDs) are the only known non-metallic enzymes that hydrolyse C–F in α-fluorocarboxylic acids, via an Asp–His–Asp triad. The screen included **three non-dehalogenases — horseradish peroxidase, A6T7 RdhA and NADPH oxidase — specifically so that any signal could be attributed to the enzyme class rather than to oxidative or reductive chemistry in general.**',
            zh: '氟乙酸脫鹵酶（FAcD）是已知唯一能以 Asp–His–Asp 三元組水解 α-氟羧酸中 C–F 鍵的非金屬酵素。這次篩選**特別納入三個非脫鹵酶——辣根過氧化酶、A6T7 RdhA、NADPH 氧化酶——目的就是讓任何訊號只能歸給這一類酵素，而不是歸給一般的氧化或還原化學。**'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'ACTIVITY', zh: '活性' },
            title: { en: 'Fluoride released at 93 h, by substrate', zh: '93 小時釋出的氟離子，依底物分' },
            sub: { en: 'Log scale. Every value is the team\'s own, and so is the statement that the TFA bars are at or below the limit of detection.', zh: '對數刻度。每個數值都是該隊自己的，「TFA 的那幾根在偵測極限上或以下」這句也是他們自己說的。' },
            data: [
              { label: { en: 'H1NML on MFA', zh: 'H1NML 對 MFA' }, v: 6000, note: { en: '~1000 µM F⁻/OD within 3 h, rising to ~6000 by 93 h', zh: '3 小時內約 1000 µM F⁻/OD，到 93 小時升至約 6000' } },
              { label: { en: 'H1NML on DFA', zh: 'H1NML 對 DFA' }, v: 2500, note: { en: 'roughly half its MFA output', zh: '約為其 MFA 輸出的一半' } },
              { label: { en: '1Y37 on MFA', zh: '1Y37 對 MFA' }, v: 120, note: { en: 'about fiftyfold below H1NML but clearly above threshold', zh: '約比 H1NML 低五十倍，但明確高於閾值' } },
              { label: { en: '1Y37 on DFA', zh: '1Y37 對 DFA' }, v: 9, note: { en: 'above LOD, below LOQ — reported as indicative only', zh: '高於 LOD、低於 LOQ——僅作為指示性數值報告' } },
              { label: { en: 'Any enzyme on TFA', zh: '任何酵素對 TFA' }, v: 3.1, note: { en: 'at or below the strain-specific LOD at every time point to 93 h', zh: '到 93 小時的每個時間點都在該菌株的 LOD 上或以下' } }
            ],
            opts: { unit: { en: 'µM F⁻/OD', zh: 'µM F⁻/OD' }, log: true, dec: 1, xlabel: { en: 'fluoride released per unit OD at 93 h (log scale)', zh: '93 小時每單位 OD 釋出的氟離子（對數刻度）' } },
            caption: { en: 'Plotted by us from the team\'s Degradation results. The TFA bar is drawn at the 3.1 µM limit of detection because no measurement exceeded it.', zh: '由我們依該隊 Degradation 結果繪製。TFA 那一根畫在 3.1 µM 的偵測極限上，因為沒有任何量測超過它。' }
          }) +
          h.ul([
            { en: '**The screen decided the strategy.** Since nothing is natively TFA-active, the plan became *evolve DFA activity upward* rather than keep hunting for a native TFA defluorinase. The 93 h endpoint is justified from the data — the rate falls off markedly after two days — rather than chosen for convenience.', zh: '**篩選結果決定了策略。**既然沒有任何東西天生對 TFA 有活性，計畫就改成*把 DFA 活性往上演化*，而不是繼續找天然的 TFA 脫氟酶。93 小時這個終點是由數據推出來的——兩天之後速率明顯下降——而不是為了方便而選的。' },
            { en: '**A failure attributed to the construct, not the enzyme.** DAR3835 was dead in their construct because of an activity-associated point mutation they failed to repair across **three** attempts at site-saturated mutagenesis; later work in a different construct confirmed the enzyme itself is fine.', zh: '**一個被歸因於構建體、而不是酵素的失敗。**DAR3835 在他們的構建體裡是死的，原因是一個與活性相關的點突變，而他們用定點飽和突變嘗試了**三次**都沒修好；後來在另一個構建體上的工作確認酵素本身是好的。' },
            { en: '**Both selection schemes were characterised before use.** TFA dose–response gave complete inhibition between 200 and 300 mM, so **200 mM** was chosen — strong pressure but short of abolishing growth, so a marginally active variant still has an advantage. The glyoxylate auxotroph (C1-Gly) showed DFA-dependent growth at 20 mM against a no-glyoxylate control that never rose, proving growth depends on defluorination and not on residual carbon.', zh: '**兩種選擇方案在使用前都先被特性化。**TFA 的劑量反應顯示 200–300 mM 之間完全抑制，所以選了 **200 mM**——壓力夠強，但還沒到讓菌完全長不出來，所以活性只稍微提升的變異體仍然有優勢。甘醛酸缺陷株（C1-Gly）在 20 mM DFA 下表現出依賴 DFA 的生長，而無甘醛酸的對照完全沒有上升，證明生長依賴的是脫氟作用，不是殘留碳源。' },
            { en: '**But the coupling is reported as limiting, not as a success.** Final densities were OD₆₀₀ ≈ 0.3 and 0.5 against **>2** for the glyoxylate-fed control. Low-copy constructs supported **no** growth on DFA at all, which is why that arm had to be started with a supplement.', zh: '**但這個耦合被報告為「受限」，不是「成功」。**最終密度 OD₆₀₀ 約 0.3 與 0.5，而餵甘醛酸的對照是 **>2**。低拷貝構建體在只有 DFA 的條件下**完全**長不起來，這就是那一支必須先補充營養才能開始的原因。' },
            { en: '**The TFA auxotroph works and its cost is stated as a number.** Oxalate → formate via OxdC into the rGlyP pathway. At pH 7 nothing grew, which they had predicted from OxdC being ~13× slower at physiological pH; lowering pH restored growth only below 6.5. The cost: inserting the OxdC step **cost roughly an order of magnitude in sensitivity** — the strain needs 12.5–25 mM oxalate where the underlying formate auxotroph grows on 1 mM — so the selection no longer responds to the low fluxes it was chosen for.', zh: '**TFA 缺陷株可行，而它的代價被寫成一個數字。**路徑是草酸經 OxdC 變成甲酸，再進 rGlyP。pH 7 時完全不長，而他們事前就從「OxdC 在生理 pH 下慢約 13 倍」預測到了；把 pH 降到 6.5 以下才恢復生長。代價是：插入 OxdC 這一步**大約犧牲了一個數量級的靈敏度**——該菌株需要 12.5–25 mM 草酸，而它底下的甲酸缺陷株用 1 mM 就能長——所以這個選擇壓已經無法對它當初被選中的那種低通量做出反應。' }
          ]) +
          h.warn({
            en: 'The sentence that defines this wiki. Unnormalised fluoride from DAR3835 after one TFA round reached **~10 µM — above the 3.1 µM LOD, below the 9.37 µM LOQ** — and the team wrote: **"we are hesitant to call this TFA activity."** Three replicates had been run, and they still listed what confirmation would require: repeat over multiple time points to see whether fluoride accumulates as incubation allows, and cross-check with a second quantification method.',
            zh: '定義這個 wiki 的那句話。DAR3835 在一輪 TFA 選擇後的未正規化氟離子達到 **約 10 µM——高於 3.1 µM 的 LOD、低於 9.37 µM 的 LOQ**——而該隊寫道：**「我們不敢把這稱為 TFA 活性。」**他們已經做了三個重複，卻仍然列出確認所需的條件：在多個時間點重複，看氟離子是否隨培養時間累積，並用第二種定量方法交叉檢查。'
          }) +
          h.p({
            en: 'Under DFA auxotrophic selection, **no TFA defluorination was detected after either round** — and they explain why that was the *expected* outcome, since no TFA pressure was ever applied and the DFA activity under selection did not itself improve, so no route existed. Where DAR3835 gave no signal at OD 0.11 they call the absence **"uninformative rather than evidence against improvement."** The one positive: low-copy H1NML rose 9.1 → 16.0 µM total fluoride and ~8 → 59 µM F⁻/OD normalised, **while density fell** — which is hard to explain as a density artefact, and is described as "the one condition in which we observed evidence consistent with improved DFA activity under selection."',
            zh: '在 DFA 缺陷選擇下，**兩輪之後都沒有偵測到 TFA 脫氟** ——而他們解釋為什麼那是*預期中*的結果：因為全程從未施加 TFA 壓力，而被選擇的 DFA 活性本身也沒有提升，所以不存在任何可能的途徑。至於 DAR3835 在 OD 0.11 時沒有訊號，他們稱那個「沒有」是**「無資訊性的，而不是反對有改善的證據」**。唯一的正面結果：低拷貝的 H1NML 總氟離子從 9.1 升到 16.0 µM，正規化後從約 8 升到 59 µM F⁻/OD，**而菌體密度是下降的**——這很難用密度假象解釋，並被描述為「我們唯一觀察到與選擇下 DFA 活性提升相符的證據的條件」。'
          }) +
          h.h3({ en: 'Sensing — debugged before it was trusted', zh: '感測——在被信任之前先被除錯' }) +
          h.ul([
            { en: 'Riboswitch, not aptasensor, and the reason is written down: aptasensors are hard to amplify and lack signal reversibility, and the nanomaterial fixes foul — whereas a riboswitch plus a **degron on the reporter** gives reversibility, which a reactor monitor needs.', zh: '選核開關而不是適體感測器，理由寫得很清楚：適體感測器難以放大訊號、也缺乏訊號可逆性，而用奈米材料去補的做法會結垢——相反地，核開關再加上**報告蛋白上的降解標籤（degron）**就能有可逆性，而反應器監測器正需要這個。' },
            { en: 'The first fluoride-riboswitch (AEB-F12) experiment failed: high NaF inhibited growth and **there was no non-fluorescent control for autofluorescence**. They built the empty-backbone negative control, **wrote to the author of the original paper**, and moved from plate reader to flow cytometer (2 min or 100,000 events; ≥50,000 typical). Then the positive control behaved, with a dose-dependent right-shift at 150 and 300 mM.', zh: '第一次氟離子核開關（AEB-F12）實驗失敗：高濃度 NaF 抑制生長，而且**沒有不帶螢光的對照來扣除自體螢光**。他們做了空骨架陰性對照、**寫信給原始論文作者**，並從微孔盤讀儀改用流式細胞儀（2 分鐘或 10 萬個事件；通常可達 5 萬以上）。之後陽性對照就表現正常了，在 150 與 300 mM 出現劑量依賴的右移。' },
            { en: 'The cloning route changed for a documented reason: restriction–ligation through an sfGFP drop-out cassette (XbaI/SacI) *"wasn\'t always as successful, due to the randomness involved and the large amounts of laborious steps"*, so they designed a **Golden Gate** strategy instead, which worked.', zh: '選殖路線的改變有明確記錄的理由：透過 sfGFP 置換卡匣做限制酶接合（XbaI／SacI）*「並不總是成功，因為其中有隨機性，而且繁瑣步驟太多」*，所以他們改設計了 **Golden Gate** 策略，而那個成功了。' },
            { en: 'PFOA toxicity was assayed **with acid controls** — because PFOA behaves as a strong acid, they added NaOH-neutralised and HCl-only arms to separate compound toxicity from pH. And the TFA toxicity assay was **deliberately not run**, with the reason given: shorter chains are less cytotoxic, so it would have been redundant.', zh: 'PFOA 的毒性測試**附帶酸對照**——因為 PFOA 的行為像強酸，他們加入「以 NaOH 中和」與「只有 HCl」兩組，把化合物毒性與 pH 分開。而 TFA 的毒性測試**被刻意不做**，理由寫明：鏈越短細胞毒性越低，所以做了也是多餘。' },
            { en: '**14 riboswitches tested: 8 PFOA, 4 TFA, 2 scrambled. Exactly one met the success criterion — and it was a PFOA switch, not a TFA one.** Batch 1 were translational ON switches, batch 2 transcriptional OFF. The claim made from that is correspondingly narrow: the dry-lab pipeline can produce a functional retargeted riboswitch; a working TFA riboswitch does not yet exist, and a degron still has to be added for continuous use.', zh: '**測了 14 個核開關：8 個 PFOA、4 個 TFA、2 個打亂序列。剛好一個達到成功標準——而且是 PFOA 的那個，不是 TFA 的。**第一批是轉譯型 ON 開關，第二批是轉錄型 OFF 開關。據此做出的主張也相應地很窄：乾式流程能產出一個可用的改導向核開關；可用的 TFA 核開關還不存在，而要連續使用還得加上 degron。' }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'w-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The fluoride assay is the deliverable, and so is where it fails', zh: '氟離子分析法本身就是交付物，而它失效的地方也是' },
        lede: {
          en: 'A colourimetric fluoride assay — alizarin plus lanthanum, colour shifting on fluoride — rebuilt from a qualitative published method into a quantitative one, and documented so that another team can adopt it rather than rebuild it.',
          zh: '一個比色式氟離子分析法——茜素加鑭，遇氟離子變色——從一份只能定性的已發表方法重建成可定量的方法，而且記載到讓別的團隊可以直接採用、不必重建。'
        },
        body:
          h.kv([
            [{ en: 'Reagents', zh: '試劑' }, { en: 'Fixed at **1:1, 100 µM**, 1 h incubation — chosen rather than inherited.', zh: '固定為 **1:1、100 µM**，培養 1 小時——是選定的，不是沿用的。' }],
            [{ en: 'The ratio', zh: '比值' }, { en: 'The **denominator is placed at the isosbestic point**, so small changes in reagent concentration and path length cancel out.', zh: '**分母取在等吸收點**，讓試劑濃度與光程的小變化互相抵銷。' }],
            [{ en: 'Wavelength choice', zh: '波長選擇' }, { en: 'By search, not by habit: fit every candidate pair over the calibration range, keep slope, R² and LOD, and **lock the pair with the lowest LOD per medium**.', zh: '靠搜尋，不靠習慣：對每一組候選波長在校正範圍內做擬合，記下斜率、R² 與 LOD，再**為每種介質鎖定 LOD 最低的那一組**。' }],
            [{ en: 'Detection limits', zh: '偵測極限' }, { en: 'LOD = 3.3σ/b, LOQ = 10σ/b, with **σ from 10 blank wells**. Demi water, 0–40 µM: R² = 0.996, **LOD 3.8 µM, LOQ 11.6 µM**.', zh: 'LOD = 3.3σ/b、LOQ = 10σ/b，**σ 來自 10 個空白孔**。去離子水、0–40 µM：R²=0.996、**LOD 3.8 µM、LOQ 11.6 µM**。' }],
            [{ en: 'Baseline', zh: '基準' }, { en: 'The literature condition (50 µM, 1:1, 620/530 nm) was **reproduced before anything was changed**, so the optimisation has something to be measured against.', zh: '文獻條件（50 µM、1:1、620/530 nm）**在改動任何東西之前先被重現**，所以這個最佳化有東西可以對照衡量。' }],
            [{ en: 'Matrix controls', zh: '基質對照' }, { en: 'M9 as the **negative medium control that shows what phosphate interference looks like**; 93 h *E. coli* supernatant spiked with fluoride for incubation effects; medium spiked with fluorochemical for PFAS interference, reported as a recovery value.', zh: 'M9 作為**顯示磷酸鹽干擾長什麼樣的陰性介質對照**；加入氟離子的 93 小時大腸桿菌上清液用來看培養的影響；加入氟化物的介質用來看 PFAS 干擾，並以回收率報告。' }]
          ]) +
          h.warn({
            en: '**Where it does not work is published as carefully as where it does.** Phosphate interferes, so **M9 is unusable**. The response **saturates above 40 µM**. 5 mM fluorochemicals **suppress the signal by up to about 60 %**, which dilution fixes. And because the growth medium interferes, a **two-step assay** is required — so they formulated **M9\\*(HEPES)**, replacing the M9 salts with HEPES and resupplying nitrogen and phosphate, which supports *E. coli* growth *and* allows screening above the LOD. A medium invented to get around their own finding.',
            zh: '**它不適用的地方，記載得和適用的地方一樣仔細。**磷酸鹽會干擾，所以 **M9 不能用**。訊號**在 40 µM 以上飽和**。5 mM 的氟化物**會把訊號壓低多達約 60%**，可用稀釋解決。而由於生長培養基會干擾，必須做**兩步式分析**——所以他們配出了 **M9\\*(HEPES)**，把 M9 的鹽換成 HEPES 並補回氮與磷，它既能支持大腸桿菌生長，*又*能在 LOD 以上進行篩選。一種為了繞過自己的發現而發明出來的培養基。'
          }) +
          h.p({
            en: 'Applied to H1ML and a fluorinase in *E. coli* and *P. putida*, the assay distinguished rates between enzymes and between fluorochemicals, ran in parallel, and above 20 µM could be read by eye. Their own framing of the contribution: the protocol, controls and data analysis *"can provide the basis for any team working on C–F bond cleavage and be adopted, instead of completely rebuilding it."*',
            zh: '把它用在大腸桿菌與 *P. putida* 中的 H1ML 與氟化酶上，這個分析法能區分不同酵素之間、以及不同氟化物之間的速率，可平行進行，而且在 20 µM 以上可以肉眼判讀。他們自己對這項貢獻的定位是：這套流程、對照與資料分析*「可以成為任何在做 C–F 鍵切斷的團隊的基礎，直接採用，而不必整個重建」*。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'w-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Two released tools, both with their limits stated', zh: '兩個已釋出的工具，兩者都寫明了自己的限制' },
        body:
          h.h3({ en: 'DISARM — retarget an aptamer instead of generating one', zh: 'DISARM——改導向既有適體，而不是從零生成' }) +
          h.p({
            en: 'Built on MAWS. Instead of generating an aptamer de novo, it **retargets an existing one**, which keeps the folding information you would otherwise have to re-derive. Mechanically: AMBER potential energy as in MAWS, but **subtracting the energy of the nucleotide alone and the ligand alone**, so what is scored is the interaction rather than a nucleotide that happens to be sitting comfortably. The top positions are swapped, **RNAfold** checks the secondary structure against the original, and candidates whose structure is unchanged are recommended — and if fewer than 50 survive, **the list is topped up with structure-changing candidates rather than silently shortened**. Ranking is by total interaction energy with the number of swaps also reported, so the user chooses the trade-off.',
            zh: '建立在 MAWS 之上。它不是從零生成適體，而是**改導向一個既有的適體**，這樣就保留了原本必須重新推導的折疊資訊。機制上：和 MAWS 一樣用 AMBER 的位能，但**把核苷酸單獨與配體單獨的位能減掉**，所以被評分的是交互作用，而不是「剛好待在舒服位置」的核苷酸。前幾個位置被替換，**RNAfold** 比對二級結構與原始結構，結構未變的候選才被推薦——而如果存活下來的不到 50 個，**清單會以「結構有改變」的候選補滿，而不是悄悄變短**。排序依總交互作用能，同時也報告替換數量，讓使用者自己決定取捨。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'engineering', zh: '工程細節' }, k: 'a' }],
              h: { en: 'They added a seed to an inherited tool', zh: '他們為繼承來的工具補上隨機種子' },
              p: { en: '**MAWS had no seed option and recorded none**, so a run could not be reproduced. DISARM lets the user set one and **saves the seed when the user does not**. Same-base "swaps" are also allowed, so a template that already has a good contact at a position is recognised rather than forced to change.', zh: '**MAWS 沒有設定隨機種子的選項，也不記錄種子**，所以一次執行無法被重現。DISARM 讓使用者可以設定種子，而**使用者沒設定時會自動存下來**。它也允許「同一個鹼基的替換」，所以模板若在某個位置原本就有好的接觸，會被辨識出來，而不是被迫改掉。' } },
            { chips: [{ t: { en: 'limits', zh: '限制' }, k: 'v' }],
              h: { en: 'Affinity, not specificity', zh: '只管親和力，不管專一性' },
              p: { en: 'DISARM scores **affinity only**, so a hit probably also binds similar molecules. The fix is proposed rather than implied: score possible off-targets as input too, and combine into a score that rewards the target and punishes the off-target. And the scope is bounded: only small ligands, because a bigger ligand needs more swaps and each swap risks the fold.', zh: 'DISARM **只評分親和力**，所以命中的那個很可能也會結合相似分子。修法是明確提出的，不是暗示的：把可能的脫靶分子也當輸入去評分，再合成一個獎勵標靶、懲罰脫靶的分數。範圍也被限定：只適用小分子配體，因為配體越大需要的替換越多，而每次替換都有破壞折疊的風險。' } },
            { chips: [{ t: { en: 'their own summary', zh: '他們自己的總結' }, k: 'g' }],
              h: { en: '"A few dozen rather than a few billion"', zh: '「幾十個，而不是幾十億個」' },
              p: { en: 'Output is 50 candidates per ligand (58 with swaps for PFOA, 59 for TFA). Their closing sentence is the honest one: *"DISARM will not hand you one working riboswitch, but it can guide you to test a few dozen rather than a few billion."*', zh: '輸出是每個配體 50 個候選（PFOA 有 58 個帶替換、TFA 有 59 個）。他們的結語才是誠實的那句：*「DISARM 不會直接給你一個可用的核開關，但它能引導你去測幾十個，而不是幾十億個。」*' } }
          ]) +
          h.h3({ en: 'PIGEON — an active-learning loop, and a published objective function', zh: 'PIGEON——一個主動學習迴圈，以及一個公開的目標函數' }) +
          h.p({
            en: 'Protein In silico Guided Evolution and Optimization Network. Not a scoring model but a loop: **ESM3 embeddings** of the RSc1362 family → **ridge regression** (chosen because the embeddings vastly outnumber the training examples) with **repeated leave-one-out cross-validation** → **ESM3 guided decoding** proposing mutations against a custom objective → candidates folded in **Boltz-2** → their scores appended to the training set → next round. **Fifty rounds.** Four designs per parent, ten parents per round, best one per parent carried forward, and **binding-pocket residues protected from mutation** to preserve the rational designs.',
            zh: 'Protein In silico Guided Evolution and Optimization Network。它不是一個評分模型，而是一個迴圈：對 RSc1362 家族取 **ESM3 嵌入**→做**脊迴歸**（之所以選它，是因為嵌入維度遠多於訓練樣本）並搭配**重複留一交叉驗證**→用 **ESM3 引導式解碼**依自訂目標提出突變→候選以 **Boltz-2** 折疊→分數再加回訓練集→下一輪。**共 50 輪。**每個親本四個設計、每輪十個親本，每個親本只留目標分數最好的那個往下帶，而且**結合口袋的殘基被保護不被突變**，以保留理性設計的部分。'
          }) +
          h.note({
            en: 'The objective is published as an equation: `1.0·Δbind′ + 0.15·ΔpTM`, where a **loss** in binding is charged **ten times over**. The consequence is spelled out numerically: a 0.01 loss in binding would need a **+0.67 gain in pTM** to break even, which will not happen; whereas a 0.05 loss in pTM is offset by just +0.0075 in binding. A design trade-off made legible instead of buried in a config file.',
            zh: '目標函數以公式公開：`1.0·Δbind′ + 0.15·ΔpTM`，其中結合力**下降**時會被**加倍十倍**計罰。後果用數字講明：結合力下降 0.01 需要 **pTM 上升 0.67** 才能打平，那不會發生；而 pTM 下降 0.05 只要結合力上升 0.0075 就能補回。一個被攤開來看的設計取捨，而不是埋在設定檔裡的超參數。'
          }) +
          h.p({
            en: 'Result: RSc1362_v3 reached a Boltz-2 binding probability of **0.723, up more than 33 %** from 0.54, with model confidence held. Boltz-2 was used over docking because the target is tiny. And the caveat box is the part that carries the weight: a Boltz-2 probability is **a ranking signal, not a measured affinity**, to be used for deciding what enters the lab, with experiment as ground truth — plus **two specific questions handed to the bench**: whether a predicted binder binds in practice, and **whether TFA can even reach the binding pocket**. PIGEON is written to be re-pointed at solubility, thermostability or interface confidence by another team.',
            zh: '結果：RSc1362_v3 的 Boltz-2 結合機率達到 **0.723，比 0.54 提升超過 33%**，而模型信心維持不變。選 Boltz-2 而不是對接，是因為標靶太小。而那個警語方框才是真正承重的部分：Boltz-2 的機率是**排序訊號，不是量測出的親和力**，應該用來決定什麼進實驗室，以實驗為真值——另外還**丟給實驗檯兩個具體問題**：預測出的結合蛋白在現實中是否真的會結合，以及 **TFA 到底能不能進到結合口袋**。PIGEON 的寫法也允許別的團隊把它重新指向溶解度、熱穩定性或界面信心分數。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'w-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Nine things that did not work, and the project is still coherent', zh: '九件沒成功的事，而這個專案依然成立' },
        body:
          h.ul([
            { en: '**No screened enzyme has TFA activity** — 93 h, every trace at or below the limit of detection. The project\'s central enzyme does not exist yet.', zh: '**篩選過的酵素沒有一個有 TFA 活性**——93 小時，每條曲線都在偵測極限上或以下。這個專案最核心的酵素目前還不存在。' },
            { en: '**β-lactoglobulin as a positive control:** no reproducible shift, so there is no positive control for TFA binding at all.', zh: '**β-乳球蛋白作為陽性對照：**沒有可重現的位移，所以 TFA 結合這件事根本沒有陽性對照。' },
            { en: '**BoltzGen_r1:** no detectable interaction.', zh: '**BoltzGen_r1：**偵測不到交互作用。' },
            { en: '**The DAR3835 construct:** a dead point mutation, three failed repair attempts.', zh: '**DAR3835 構建體：**一個致死點突變，三次修復嘗試都失敗。' },
            { en: '**The TFA auxotroph:** works, but an order of magnitude less sensitive than the formate auxotroph it was built from, and finding its lower bound was work they ran out of time for.', zh: '**TFA 缺陷株：**可行，但比它所改造的甲酸缺陷株低一個數量級的靈敏度，而找出它的下界是他們來不及做的工作。' },
            { en: '**Restriction–ligation cloning of riboswitches:** too lossy, replaced by Golden Gate.', zh: '**核開關的限制酶接合選殖：**損耗太高，改用 Golden Gate。' },
            { en: '**13 of 14 riboswitches:** no response. The one that worked is for the wrong molecule.', zh: '**14 個核開關中有 13 個：**沒有反應。而成功的那一個是針對錯的分子。' },
            { en: '**M9 as an assay medium:** unusable, because phosphate interferes with the colour complex.', zh: '**M9 作為分析介質：**不能用，因為磷酸鹽會干擾顯色錯合物。' },
            { en: '**The first fluoride-riboswitch experiment:** invalid for want of an autofluorescence control, which they then built.', zh: '**第一次氟離子核開關實驗：**因為缺少自體螢光對照而無效，而他們接著把那個對照做了出來。' }
          ]) +
          h.take({ en: 'Why the list does not sink the project', zh: '為什麼這張清單沒有把專案拖垮' }, {
            en: 'Because each entry comes with the number that bounds it. "No TFA activity" is bounded by a 3.1 µM detection limit. "The auxotroph is less sensitive" is bounded at one order of magnitude. "One of fourteen" is a measured hit rate for a brand-new design pipeline. A reader can tell how far the system is from working, which is more than most finished-looking projects allow.',
            zh: '因為每一條都附上了限定它的數字。「沒有 TFA 活性」被 3.1 µM 的偵測極限限定。「缺陷株靈敏度較差」被限定在一個數量級。「十四個中有一個」是一條全新設計流程的實測命中率。讀者能判斷這個系統距離「能用」還有多遠——這比大多數看起來很完成的專案給得更多。'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'w-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from WageningenUR', zh: '我們會從 WageningenUR 抄什麼' },
        body:
          h.ul([
            { en: '**Put the literature search in a table and let it kill the easy plan.** "No protein is reported to bind TFA strongly" is why the de novo work is justified rather than fashionable.', zh: '**把文獻搜尋做成表格，並且讓它否決掉簡單的那個計畫。**「沒有任何蛋白被報告能強結合 TFA」正是「從零設計」之所以有正當性、而不只是流行的原因。' },
            { en: '**Qualify the instrument on a known sample first.** Lysozyme at 70.69 °C against 68.6 °C published, before any candidate is judged by DSF.', zh: '**先用已知樣品驗證儀器。**溶菌酶量到 70.69 °C、文獻是 68.6 °C，這一步在任何候選被 DSF 評判之前就先做了。' },
            { en: '**Report LOD and LOQ, and then obey them.** About 10 µM between a 3.1 µM LOD and a 9.37 µM LOQ became "we are hesitant to call this TFA activity" instead of a headline.', zh: '**報告 LOD 與 LOQ，然後遵守它們。**在 3.1 µM 的 LOD 與 9.37 µM 的 LOQ 之間的約 10 µM，變成了「我們不敢把這稱為 TFA 活性」，而不是一句標題。' },
            { en: '**Say when an absence is uninformative.** No signal at OD 0.11 is not evidence against improvement, and they say so instead of letting the reader assume either way.', zh: '**說清楚哪個「沒有」是沒有資訊的。**在 OD 0.11 時沒有訊號，並不是「沒有改善」的證據，而他們把這點講出來，不讓讀者自己往任一邊猜。' },
            { en: '**Write down what your normalisation assumes.** µM F⁻/OD only means activity if expression per cell is constant — which is exactly why they distrust their own round-3 drop.', zh: '**寫下你的正規化假設了什麼。**µM F⁻/OD 只有在每個細胞的表達量恆定時才代表活性——而這正是他們不信任自己第三輪下降的原因。' },
            { en: '**Publish where the assay fails, then engineer around your own finding.** Phosphate, 40 µM saturation, 60 % suppression — and then M9\\*(HEPES) so that growth and screening can share one vessel.', zh: '**公開分析法失效的地方，然後繞過自己的發現去做工程。**磷酸鹽、40 µM 飽和、60% 壓抑——接著配出 M9\\*(HEPES)，讓生長與篩選可以共用同一個容器。' },
            { en: '**Add a seed to the tool you inherited.** MAWS recorded none; DISARM does. Reproducibility is often a two-line patch nobody writes.', zh: '**為你繼承來的工具補上隨機種子。**MAWS 不記錄種子；DISARM 會。可重現性常常只是沒人去寫的兩行修補。' },
            { en: '**Price the trade-off inside the objective function.** Charging a binding loss ten times over is a design decision made visible, not a hyperparameter buried in a config.', zh: '**把取捨直接標價在目標函數裡。**對結合力下降收十倍罰則，是一個被攤開來看的設計決定，不是埋在設定檔裡的超參數。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the eight items above, the LYON comparison and the reading of it, and the claim that bounding each failure with a number is what keeps the project coherent. Everything else is the team\'s own, read from [2026.igem.wiki/wageningenur](https://2026.igem.wiki/wageningenur/).',
            zh: '標示為我們的看法：上面八點、與 LYON 的對照及其判讀，以及「用數字限定每個失敗」才是讓這個專案成立的主張。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/wageningenur](https://2026.igem.wiki/wageningenur/)。'
          })
      });

      return out;
    }
  };
})(window);
