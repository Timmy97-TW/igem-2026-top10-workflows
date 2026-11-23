/* Heidelberg — VOYAGE. Top 10, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/heidelberg/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Express GVs in HEK293T', zh: '在 HEK293T 中表達 GV' },
        s: { en: 'mARG_Ana two cassettes (Hurt et al. 2023), Lipofectamine 2000, 2 µg DNA per 6-well', zh: 'mARG_Ana 雙卡匣（Hurt 等人 2023）、Lipofectamine 2000、每 6 孔盤孔 2 µg DNA' } },
      { l: { en: 'Gate on scatter, not colour', zh: '以散射設閘，不只看顏色' },
        s: { en: 'FSC/SSC size → singlet → GFP/BFP → high side scatter relative to forward scatter', zh: 'FSC/SSC 大小→單細胞→GFP/BFP→側向散射相對前向散射偏高' }, tone: 'g' },
      { l: { en: 'Tune the dose', zh: '調整劑量' },
        s: { en: 'tcGvpA held at 12.5 % of total GvpA plasmid; two-plasmid system split into three', zh: 'tcGvpA 固定為總 GvpA 質體的 12.5%；雙質體系統拆成三質體' } },
      { l: { en: 'Float the vesicles out', zh: '把氣囊浮選出來' },
        s: { en: 'BL21-AI, Serratia cluster, 1 % L-arabinose at 30 °C for 22 h, then 300 × g for 3 h', zh: 'BL21-AI、Serratia 基因簇、1% L-阿拉伯糖、30 °C 22 小時，再 300 × g 離心 3 小時' } },
      { l: { en: 'Read the collapse pressure', zh: '讀取崩解壓力' },
        s: { en: 'TEM, AFM, DLS, then Verasonics 5.2 MHz xAM in agarose phantoms, peak 1150 kPa', zh: 'TEM、AFM、DLS，再以 Verasonics 5.2 MHz xAM 於洋菜膠假體中量測，峰值 1150 kPa' } },
      { l: { en: 'Move cells with sound', zh: '用聲音移動細胞' },
        s: { en: 'GvpC-SpyTag plus DARPin-SpyCatcher onto EGFR; standing-wave lines and ring patterns', zh: 'GvpC-SpyTag 加 DARPin-SpyCatcher 接到 EGFR；駐波線與環狀圖樣' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Build the shell in silico', zh: '在電腦裡建出外殼' },
        s: { en: 'Two ribs of 20–25 GvpA (PDB 8GBS), CHARMM36, TIP3P water, 150 mM NaCl', zh: '兩條各 20–25 個 GvpA 的肋（PDB 8GBS）、CHARMM36、TIP3P 水、150 mM NaCl' } },
      { l: { en: 'Stiffness from noise', zh: '從雜訊算出剛性' },
        s: { en: 'Thermal ripples give EI; p_cr = 3EI/(s·R³) with R 42.5 nm and s 4.9 nm held constant', zh: '熱波紋給出 EI；p_cr = 3EI/(s·R³)，其中 R 42.5 nm、s 4.9 nm 固定' }, tone: 'g' },
      { l: { en: 'Pull GvpC off', zh: '把 GvpC 拉開' },
        s: { en: 'Steered MD at 1 nm/ns, k = 1000 kJ/nm² → 25 umbrella windows → WHAM → PMF', zh: '導引 MD，1 nm/ns、k = 1000 kJ/nm²→25 個傘形視窗→WHAM→PMF' } },
      { l: { en: 'Redesign GvpC', zh: '重新設計 GvpC' },
        s: { en: 'LigandMPNN tiers T0–T3 behind one gate: i_pAE ≤ 12, Boltz-2 in 4 of 5 runs, 2 Å pose', zh: 'LigandMPNN 的 T0–T3 分級，後面接一個閘：i_pAE ≤ 12、5 次 Boltz-2 中 4 次、姿態 2 Å 內' } },
      { l: { en: 'De novo binders and latches', zh: '從頭設計結合蛋白與閂' },
        s: { en: 'RFdiffusion3 backbones → ProteinMPNN 8 sequences each → AlphaFold2 → PyRosetta check', zh: 'RFdiffusion3 骨架→每個骨架 ProteinMPNN 8 條序列→AlphaFold2→PyRosetta 交叉檢查' } },
      { l: { en: 'Count and fit', zh: '計數與擬合' },
        s: { en: 'GVSAM fine-tune lifts F1 from 0.2 % to 42 %; GAS median/MAD; PAS logistic P50', zh: 'GVSAM 微調把 F1 從 0.2% 提到 42%；GAS 取中位數／MAD；PAS 以邏輯曲線求 P50' }, tone: 't' }
    ],
    links: [
      { w: 0, d: 3, l: { en: 'the design gate decides what gets built', zh: '設計閘決定要做哪些' }, up: true },
      { w: 4, d: 1, l: { en: 'measured collapse pressure tests p_cr', zh: '量到的崩解壓力檢驗 p_cr' } },
      { w: 4, d: 5, l: { en: '108 of their own images fine-tune GVSAM', zh: '他們自己的 108 張影像用來微調 GVSAM' } }
    ]
  };

  PD.pages.heidelberg = {
    label: { en: 'Heidelberg', zh: 'Heidelberg' },
    title: { en: 'Heidelberg — VOYAGE', zh: 'Heidelberg — VOYAGE' },
    render: function (h) {
      var t = team('heidelberg');
      var out = h.teamhero(t, {
        h1: {
          en: 'A design gate written down in advance, and ==only one of its four thresholds was calibrated== — they say so.',
          zh: '一個事先寫下來的設計篩選閘，而==四個門檻裡只有一個被校正過==——這句話是他們自己寫的。'
        },
        lede: {
          en: 'The dry lab, branded ATLAS, is the widest in the Top 10: all-atom molecular dynamics, three generative design pipelines, and a fine-tuned segmentation model — with the screening thresholds and a pre-registered decision rule written before the runs. What it is pointed at: VOYAGE engineers gas vesicles, gas-filled protein nanostructures that scatter ultrasound and collapse at a defined pressure, into a programmable acoustic interface. One half, Observe, turns a vesicle into a signal; the other half, Organize, turns ultrasound into a handle that moves only the labelled cells.',
          zh: '他們稱為 ATLAS 的乾式實驗是前十名中跨度最大的：全原子分子動力學、三條生成式設計流程，以及一個微調過的影像分割模型——而篩選門檻與一條預先登錄的判定規則都在開跑前就寫好。它對準的是什麼：VOYAGE 把氣囊（充氣的蛋白質奈米結構，會散射超音波並在特定壓力下崩解）改造成一個可程式化的聲學介面。其中一半「Observe」把氣囊變成訊號；另一半「Organize」把超音波變成只會移動被標記細胞的把手。'
        },
        chips: [
          { t: { en: 'Gas vesicles (GvpA / GvpC)', zh: '氣囊（GvpA／GvpC）' }, k: 'b' },
          { t: { en: 'Ultrasound xAM imaging', zh: '超音波 xAM 影像' }, k: 't' },
          { t: { en: 'All-atom MD (CHARMM36)', zh: '全原子 MD（CHARMM36）' }, k: 'g' },
          { t: { en: 'LigandMPNN / RFdiffusion3 / Boltz-2', zh: 'LigandMPNN／RFdiffusion3／Boltz-2' }, k: 'v' },
          { t: { en: 'GVSAM segmentation', zh: 'GVSAM 影像分割' }, k: 'a' }
        ],
        stats: [
          { v: '60.2 kPa', l: { en: 'Average rise in collapse pressure with target present', zh: '有標的存在時崩解壓力的平均上升量' } },
          { v: '2 / 7', l: { en: 'Biosensor variants whose pressure response actually shifted', zh: '壓力反應真的位移了的生物感測器變體數' } },
          { v: '121 / 200', l: { en: 'GvpC designs that passed the full screening gate', zh: '通過完整篩選閘的 GvpC 設計數' } },
          { v: '42 %', l: { en: 'GVSAM F1, up from 0.2 % for base CellSAM', zh: 'GVSAM 的 F1，基礎 CellSAM 為 0.2%' } },
          { v: '1150 kPa', l: { en: 'Peak hydrophone-calibrated acoustic pressure', zh: '以水聽器校正的峰值聲壓' } },
          { v: '108', l: { en: 'Their own phase-contrast images behind the training set', zh: '支撐訓練集的自有相位差影像張數' } }
        ]
      });

      out += h.toc([
        { id: 'hd-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'hd-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'heidelberg-wik', t: { en: 'Their figures', zh: '他們的圖' } },
        { id: 'hd-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'hd-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'hd-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'hd-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'hd-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'hd-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'If you can engineer the collapse pressure, the vesicle becomes an address', zh: '只要能改造崩解壓力，氣囊就變成一個位址' },
        lede: {
          en: 'A gas vesicle has a GvpA shell; GvpC binds the outer face and stiffens it. Stiffness sets the pressure at which the vesicle collapses, and collapse is what an ultrasound machine can see.',
          zh: '氣囊的外殼由 GvpA 構成；GvpC 結合在外表面並使其變硬。剛性決定氣囊在多大壓力下崩解，而崩解正是超音波機器看得見的東西。'
        },
        body:
          h.p({
            en: 'The whole project follows from one mechanical fact: **collapse pressure is a property you can design**. Make a vesicle that collapses at a different pressure and you have a second channel, so several reporters can be read in one ultrasound image. Make collapse conditional on a target and you have a biosensor read through tissue. And because a gas vesicle has a strongly negative acoustic contrast factor, attaching one to a cell flips the sign of that cell\'s response to a standing wave — the project\'s measured cell contrast factor is about **+0.1** in PBS — so the labelled cells move to the opposite point of the field from everything else. The two halves of VOYAGE are named for exactly this split: **Observe** (vesicle to signal) and **Organize** (ultrasound to spatial control).',
            zh: '整個專案都從一個力學事實推出來：**崩解壓力是可以設計的性質**。做出在不同壓力下崩解的氣囊，就多一個通道，於是一張超音波影像裡可以讀到好幾個報告子。讓崩解取決於某個標的，就得到一個能穿過組織讀取的生物感測器。而由於氣囊的聲學對比因子是強烈的負值，把一顆氣囊接到細胞上就會翻轉該細胞對駐波的反應正負號——他們量到的細胞對比因子在 PBS 中約為 **+0.1**——因此被標記的細胞會移動到聲場中與其他一切相反的位置。VOYAGE 的兩半正是按這個分法命名：**Observe**（氣囊到訊號）與 **Organize**（超音波到空間控制）。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'the design handle', zh: '設計的把手' }, k: 'b' }],
              h: { en: 'Engineer GvpC, not GvpA', zh: '改造 GvpC，而不是 GvpA' },
              p: { en: 'GvpA is the shell itself and its two faces have opposite character — the outward face hydrophilic, the inward face hydrophobic. GvpC is the accessory that binds the outer face and sets the stiffness, so it is the part the design pipelines rebuild, in 33-residue repeats.', zh: 'GvpA 本身就是外殼，而它的兩面性質相反——朝外親水、朝內疏水。GvpC 是結合在外表面、決定剛性的附屬蛋白，所以設計流程重建的是它，以 33 個殘基的重複單元為單位。' } },
            { chips: [{ t: { en: 'one equation, one consequence', zh: '一個方程式、一個推論' }, k: 'g' }],
              h: { en: 'Strengthening equals the stiffness ratio', zh: '強化倍率等於剛性比值' },
              p: { en: 'Shell theory gives p_cr = 3EI/(s·R³) with radius R = 42.5 nm and thickness s = 4.9 nm. Because R and s are held constant across variants, **the predicted change in collapse pressure is simply the ratio of bending stiffnesses** — which is why a molecular dynamics number can be compared against an ultrasound measurement at all.', zh: '殼層理論給出 p_cr = 3EI/(s·R³)，其中半徑 R = 42.5 nm、厚度 s = 4.9 nm。由於各變體的 R 與 s 保持固定，**預測的崩解壓力變化就只是彎曲剛性的比值**——這也正是分子動力學算出的數字能拿去跟超音波量測比較的理由。' } },
            { chips: [{ t: { en: 'two routes to the shell', zh: '兩條把氣囊裝上去的路' }, k: 'v' }],
              h: { en: 'Express it inside, or bolt it on outside', zh: '在細胞內表達，或從外面扣上去' },
              p: { en: 'The mammalian route expresses the vesicle cluster inside HEK293T. The alternative skips expression entirely: **GvpC-SpyTag on the shell plus a DARPin-SpyCatcher fusion** attaches a purified vesicle covalently to EGFR on a cell surface.', zh: '哺乳類路線是在 HEK293T 內部表達整套氣囊基因簇。另一條路乾脆跳過表達：**殼上的 GvpC-SpyTag 加上 DARPin-SpyCatcher 融合蛋白**，把純化好的氣囊共價接到細胞表面的 EGFR 上。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'hd-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The design gate sits between the lanes', zh: '設計閘就坐在兩條泳道之間' },
        lede: {
          en: 'The first handoff is the unusual one: a computational gate, not a person, decides which variants reach the bench — and the same characterisation step supplies the test of the physics and the training data for the image model.',
          zh: '第一次交接是不尋常的那次：決定哪些變體能上實驗桌的是一個計算上的閘，而不是某個人——而同一個特性分析步驟，同時提供了檢驗物理的數據與影像模型的訓練資料。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'VOYAGE: the two lanes and the three handoffs', zh: 'VOYAGE：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Results, Model and Software pages.', zh: '由我們依該隊 Description、Results、Model、Software 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the figures they drew themselves ---------------- */
      out += h.wikifigs('heidelberg');

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'hd-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Three tracks: express, purify, then push cells around', zh: '三條軌道：表達、純化，然後推動細胞' },
        lede: {
          en: 'Track A is mammalian expression, track B is bacterial expression and purification, track C is the acoustic organisation work. Diversity came from error-prone PCR alongside the rational and generative designs.',
          zh: 'A 軌是哺乳類表達、B 軌是細菌表達與純化、C 軌是聲學排列的工作。多樣性除了理性設計與生成式設計之外，也來自易錯 PCR。'
        },
        body:
          h.phases([
            { h: { en: 'Express the vesicle cluster in HEK293T', zh: '在 HEK293T 中表達氣囊基因簇' },
              p: { en: 'The mARG_Ana two-cassette system from Hurt et al. 2023, built on D. flos-aquae vesicles: cassette 1 carries GvpA with GFP, cassette 2 the accessory genes with BFP.', zh: '採用 Hurt 等人 2023 的 mARG_Ana 雙卡匣系統，建立在 D. flos-aquae 氣囊上：卡匣 1 帶 GvpA 與 GFP，卡匣 2 帶附屬基因與 BFP。' },
              items: [
                { en: 'Transfected at a **1.3:1 ratio** to begin with, using Lipofectamine 2000 at 4 nL per ng DNA and 2 µg DNA per well of a 6-well plate.', zh: '一開始以 **1.3:1 的比例**轉染，使用 Lipofectamine 2000、每 ng DNA 搭配 4 nL 試劑，6 孔盤每孔 2 µg DNA。' },
                { en: 'The negative control is a construct, not an empty well: **mGvpA with four substitutions in conserved residues (L20R, D21Y, K22E, G23C)** that abolish assembly, from Dutka et al. 2023.', zh: '陰性對照是一個構建體、不是空孔：取自 Dutka 等人 2023 的 **mGvpA，在保守殘基上帶四個取代（L20R、D21Y、K22E、G23C）**，使組裝無法進行。' }
              ] },
            { h: { en: 'Make flow cytometry the vesicle assay', zh: '把流式細胞術變成氣囊本身的檢測' },
              p: { en: 'Four gates in sequence: an FSC/SSC size gate, an FSC-A/FSC-H singlet gate, a GFP(B525)/BFP(V450) transfection gate, and then the one that matters.', zh: '依序四個閘：FSC/SSC 大小閘、FSC-A/FSC-H 單細胞閘、GFP(B525)/BFP(V450) 轉染閘，然後是真正關鍵的那一個。' },
              items: [
                { en: 'The final gate is on **high side scatter relative to forward scatter**, because gas vesicles scatter light. Flow is therefore reporting assembly, not just whether the DNA got in.', zh: '最後一個閘設在**側向散射相對前向散射偏高**，因為氣囊會散射光。因此流式回報的是組裝是否發生，而不只是 DNA 有沒有進去。' },
                { en: 'Optimisation came out as two numbers: **tcGvpA tuned to 12.5 % of total GvpA plasmid** (above that, assembly breaks), and a move from a two-plasmid to a **three-plasmid** system splitting cassette 2 so the accessory genes could be dosed independently.', zh: '最佳化的結果是兩個數字：**tcGvpA 調到總 GvpA 質體的 12.5%**（超過這個比例組裝就壞掉），以及從雙質體改為**三質體**系統、把卡匣 2 拆開，讓附屬基因能獨立調整劑量。' }
              ],
              done: { en: 'A flow gate that reads assembly and a dosing ratio that breaks it above 12.5 % — both obtained from the same panel.', zh: '一個讀得出組裝的流式閘，加上一個超過 12.5% 就會壞掉的劑量比例——兩者來自同一組實驗。' } },
            { h: { en: 'Grow and float out the vesicles', zh: '培養並浮選出氣囊' },
              p: { en: 'Bacterial production in E. coli BL21-AI using the Serratia sp. ATCC 39006 polycistronic cluster, chosen over ARG1 after ARG1 attempts.', zh: '以 E. coli BL21-AI 進行細菌生產，採用 Serratia sp. ATCC 39006 的多順反子基因簇；這是在嘗試 ARG1 之後改選的。' },
              items: [
                { en: 'Preculture in LB with 1 % glucose for 16 h, then 10 mL into 320 mL 2xYT at 37 °C and 160 rpm to OD600 0.5–0.7, induce with **1 % L-arabinose** (plus 0.8 mM IPTG for the PAS screening work), drop to 30 °C and 140 rpm, 22 h.', zh: '先在含 1% 葡萄糖的 LB 中預培養 16 小時，再取 10 mL 接入 320 mL 2xYT，37 °C、160 rpm 培養至 OD600 0.5–0.7，以 **1% L-阿拉伯糖**誘導（PAS 篩選工作另加 0.8 mM IPTG），降至 30 °C、140 rpm，共 22 小時。' },
                { en: 'Purification uses the vesicles\' own physics: **35 mL aliquots at 300 × g for 3 h**, and intact vesicles float the cells into a white surface layer. Then lysis, low-speed spins, GvpC stripping with urea, re-addition of recombinant GvpC variants, dialysis.', zh: '純化直接利用氣囊本身的物理：**每份 35 mL、300 × g 離心 3 小時**，完好的氣囊會把細胞浮成一層白色表層。接著裂解、低速離心、以尿素剝除 GvpC、加回重組的 GvpC 變體、透析。' },
                { en: 'Side purifications by IMAC: GvpC-His, and the DARPin-SpyCatcher fusion.', zh: '另外以 IMAC 純化：GvpC-His，以及 DARPin-SpyCatcher 融合蛋白。' }
              ] },
            { h: { en: 'Characterise, with ultrasound as one method among several', zh: '做特性分析，而超音波只是其中一種方法' },
              p: { en: 'TEM and AFM for bending and ripples, DLS and zeta potential, pressurised absorbance spectroscopy, and ultrasound on a Verasonics system.', zh: '以 TEM 與 AFM 觀察彎曲與波紋、DLS 與界面電位、加壓吸光光譜，以及 Verasonics 系統上的超音波。' },
              items: [
                { en: 'Ultrasound: a **5.2 MHz linear probe** running **xAM** cross-amplitude modulation on agarose phantoms with three wells, transmit voltage stepped from 2 V, hydrophone-calibrated into acoustic pressure, peak **1150 kPa**.', zh: '超音波：**5.2 MHz 線性探頭**在三孔洋菜膠假體上執行 **xAM** 交叉振幅調變，發射電壓自 2 V 起逐步提升，並以水聽器校正換算為聲壓，峰值 **1150 kPa**。' },
                { en: 'The stripping-and-re-adding step is what makes this a measurement of GvpC rather than of a preparation: the same vesicle core carries each variant in turn.', zh: '「剝除再加回」這一步，才讓這成為對 GvpC 的量測、而不是對某一批製備的量測：同一批氣囊核心依序戴上每一個變體。' }
              ],
              done: { en: 'Two of seven biosensor variants shifted their pressure-response curve when the target was present, with collapse pressure rising by an average of **60.2 kPa**.', zh: '七個生物感測器變體中有兩個在標的存在時壓力反應曲線發生位移，崩解壓力平均上升 **60.2 kPa**。' } },
            { h: { en: 'Push the labelled cells around', zh: '推動被標記的細胞' },
              p: { en: 'Two patterning geometries and one competing force that had to be engineered around.', zh: '兩種排列幾何，以及一個必須繞過的競爭作用力。' },
              items: [
                { en: 'A standing wave between a transducer and a reflector gives **parallel lines**; a droplet sandwiched between hydrophilic/hydrophobic-patterned glass plates on a piezo gives **ring patterns**.', zh: '在換能器與反射板之間建立駐波可得到**平行線**；把液滴夾在壓電元件上、以親水／疏水圖樣處理過的玻璃板之間，則得到**環狀圖樣**。' },
                { en: '**Acoustic streaming** is named as the competing force, and the fix is geometric rather than acoustic: use **spheroids**, because the acoustic radiation force scales with particle volume. The spheroids are grown in microwell plates.', zh: '他們指出競爭的作用力是**聲流**，而解法是幾何而非聲學的：改用**球體（spheroid）**，因為聲輻射力隨顆粒體積放大。這些球體在微孔盤中培養。' },
                { en: 'An **AcouWash** sorting system handles the vesicle-labelled cells.', zh: '**AcouWash** 分選系統負責處理被氣囊標記的細胞。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'hd-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'Four thresholds, one calibration, and a rule written before the run', zh: '四個門檻、一次校正，以及一條在開跑前寫好的規則' },
        lede: {
          en: 'This is the part of the project we would copy first, and almost none of it needs a Verasonics machine. Each rule below exists to stop a number being read generously.',
          zh: '這是整個專案我們最想先抄的部分，而其中幾乎沒有一項需要 Verasonics 機器。下面每一條規則的存在，都是為了阻止一個數字被寬鬆地解讀。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '22%' },
              { t: { en: 'The rule', zh: '規則' }, w: '40%' },
              { t: { en: 'What it protects against', zh: '它防的是什麼' } }
            ],
            rows: [
              [{ en: 'GvpC design screening', zh: 'GvpC 設計篩選' },
               { en: 'AlphaFold2 **i_pAE ≤ 12**, contacts with all four GvpA chains in **at least 4 of 5 Boltz-2 runs**, pose reproducible within **2 Å**, plus a composition filter; survivors ranked on Boltz-2 buried area.', zh: 'AlphaFold2 **i_pAE ≤ 12**、在 **5 次 Boltz-2 中至少 4 次**與四條 GvpA 鏈都有接觸、姿態可在 **2 Å** 內重現，再加一個組成過濾；通過者依 Boltz-2 埋藏面積排序。' },
               { en: 'Picking designs after seeing which ones scored well. The gate is written out as four conditions rather than a ranking you can slide.', zh: '防止「看到哪些分數好才回頭挑設計」。這個閘被寫成四個條件，而不是一條可以滑動的排名。' }],
              [{ en: 'The same gate, honestly labelled', zh: '同一個閘，誠實標註' },
               { en: '**Only the i_pAE threshold was calibrated** (against the native binder plus 9 negative controls). The other three were set a priori and the team says so in writing.', zh: '**只有 i_pAE 門檻經過校正**（以天然結合蛋白加 9 個陰性對照校正）。另外三個是先驗設定的，而團隊在文件中明說這件事。' },
               { en: 'A reader assuming the whole gate is empirical. Naming which threshold is evidence and which is a choice is the rare part.', zh: '防止讀者誤以為整個閘都是實證得來的。寫明哪個門檻是證據、哪個是選擇，才是少見的部分。' }],
              [{ en: 'The water-condensation test', zh: '水凝結機制檢驗' },
               { en: 'A pre-registered decision rule: a contact-angle increase of **6° or more with a 95 % CI excluding zero counts as an effect; under 3° with the CI inside ±6° counts as none**.', zh: '一條預先登錄的判定規則：接觸角增加 **6° 以上且 95% 信賴區間不含 0 算有效應；小於 3° 且信賴區間落在 ±6° 內算沒有效應**。' },
               { en: 'Arguing with a rival mechanism after the fact. The thresholds for "effect" and "no effect" were both fixed before the simulation ran.', zh: '防止事後才來跟對立機制爭論。「有效應」與「沒有效應」兩邊的門檻都在模擬開跑前就定好。' }],
              [{ en: 'MD variant comparison', zh: 'MD 變體比較' },
               { en: 'Equal **1.5–2 ns blocks per variant**, compared with **Welch\'s t-test** between variants.', zh: '每個變體取等長的 **1.5–2 ns 區塊**，變體之間以 **Welch t 檢定**比較。' },
               { en: 'Longer sampling of the variant you like. Equal blocks make the stiffness ratio a comparison rather than an anecdote.', zh: '防止對偏愛的變體多跑取樣。等長區塊讓剛性比值成為一個比較，而不是一則軼事。' }],
              [{ en: 'GVSAM evaluation', zh: 'GVSAM 評估' },
               { en: 'Two independent annotators in napari; a **70/20/10 split with GV-present and GV-absent images split separately**; a prediction counts as a match only if its centre is **within ±2 px** and its area ratio **within 4×**.', zh: '在 napari 中由兩位獨立標註者標註；**70/20/10 切分，且有氣囊與無氣囊的影像分開切分**；只有中心落在 **±2 px 內**且面積比在 **4 倍以內**的預測才算配對成功。' },
               { en: 'A model that scores well by finding blobs. The matching rule and the stratified split are both stated, so the F1 means something.', zh: '防止一個靠「找到一團東西」就拿高分的模型。配對規則與分層切分都寫出來，F1 才有意義。' }],
              [{ en: 'Ultrasound and PAS curves', zh: '超音波與 PAS 曲線' },
               { en: 'Each ROI summarised by its **median** intensity with noise from the **median absolute deviation**, because wall echoes are outliers; transmit voltage is converted to pressure by hydrophone calibration. PAS fits a logistic A(P) whose inflection **P50 is the collapse pressure**.', zh: '每個 ROI 以強度**中位數**摘要、雜訊取**中位絕對偏差**，因為管壁回音屬於離群值；發射電壓透過水聽器校正換算為壓力。PAS 以邏輯函數 A(P) 擬合，其轉折點 **P50 即為崩解壓力**。' },
               { en: 'A single bright echo dragging a mean. Median and MAD make two runs on two days comparable.', zh: '防止單一亮回音把平均值拉走。中位數與 MAD 讓不同日期的兩次量測可以比較。' }]
            ],
            source: { en: 'Condensed from the team\'s Model, Software and Measurement pages.', zh: '濃縮自該隊 Model、Software 與 Measurement 頁。' }
          }) +
          h.take({ en: 'Both outcomes were defined before the simulation ran, so a negative could still be a result', zh: '兩種結果都在模擬開跑前就定義好，所以否定答案仍然算是一個結果' }, {
            en: 'The pre-registered rule for the rival collapse mechanism is the sentence to steal: *an increase of 6° or more in contact angle with a 95 % CI excluding zero counts as an effect; under 3° with the CI inside ±6° counts as no effect.* Both outcomes were defined before the simulation ran, so the test could come back negative and still be a result. Paired with "only the i_pAE threshold was calibrated, the other three were set a priori", it means a reader can tell exactly how much of the screening gate is evidence.',
            zh: '針對對立崩解機制那條預先登錄的規則，就是值得抄走的一句話：*接觸角增加 6° 以上且 95% 信賴區間不含 0 算有效應；小於 3° 且信賴區間落在 ±6° 內算沒有效應。* 兩種結果都在模擬開跑前就定義好，所以這個檢驗即使得到否定答案，仍然是一個結果。再配上「只有 i_pAE 門檻經過校正，其餘三個是先驗設定」，讀者就能精確判斷這個篩選閘裡有多少是證據。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'hd-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'ATLAS: molecular dynamics, generative design, and a model that counts vesicles', zh: 'ATLAS：分子動力學、生成式設計，以及一個會數氣囊的模型' },
        lede: {
          en: 'Three modules — Understand, Engineer, Analyse — and the first of them is the part almost nobody in iGEM attempts: all-atom molecular dynamics of a protein shell, used to produce a number the bench can check.',
          zh: '三個模組——Understand、Engineer、Analyse——其中第一個是 iGEM 裡幾乎沒人會嘗試的部分：對蛋白質外殼做全原子分子動力學，而且算出一個實驗桌可以檢驗的數字。'
        },
        body:
          h.flow({
            title: { en: 'From a shell in a water box to a design the bench will build', zh: '從水盒裡的外殼到實驗桌會去做的設計' },
            sub: { en: 'Each stage hands the next one a quantity, and the last stage hands measurements back.', zh: '每一階段交給下一階段一個量，而最後一階段把量測結果交還回去。' },
            stages: [
              { label: { en: 'Build the shell', zh: '建出外殼' }, sub: { en: 'Two ribs of 20–25 GvpA from PDB 8GBS', zh: '取自 PDB 8GBS 的兩條 20–25 個 GvpA 的肋' }, tone: 'b',
                items: [{ en: 'CHARMM36, TIP3P water, 150 mM NaCl', zh: 'CHARMM36、TIP3P 水、150 mM NaCl' }, { en: 'GvpC 33-residue repeats docked with HADDOCK', zh: 'GvpC 的 33 殘基重複單元以 HADDOCK 對接' }] },
              { label: { en: 'Stiffness from noise', zh: '從雜訊取得剛性' }, sub: { en: 'Thermal ripples give EI', zh: '熱波紋給出 EI' }, tone: 'g',
                items: [{ en: 'mean square h_q = k_BT/(L·EI·q⁴)', zh: 'h_q 均方值 = k_BT/(L·EI·q⁴)' }, { en: 'equal 1.5–2 ns blocks, Welch\'s t-test', zh: '等長 1.5–2 ns 區塊、Welch t 檢定' }] },
              { label: { en: 'Predict collapse', zh: '預測崩解' }, sub: { en: 'p_cr = 3EI/(s·R³), R and s constant', zh: 'p_cr = 3EI/(s·R³)，R 與 s 固定' }, tone: 'g',
                items: [{ en: 'so predicted strengthening = stiffness ratio', zh: '因此預測強化倍率 = 剛性比值' }] },
              { label: { en: 'Redesign and gate', zh: '重新設計並設閘' }, sub: { en: 'LigandMPNN tiers T0–T3, then four conditions', zh: 'LigandMPNN 的 T0–T3 分級，再過四個條件' }, tone: 'v',
                items: [{ en: '200 designs in, 121 out', zh: '投入 200 個設計，出來 121 個' }, { en: 'RFdiffusion3 + ProteinMPNN for de novo binders', zh: '從頭結合蛋白用 RFdiffusion3＋ProteinMPNN' }] },
              { label: { en: 'Read the data back', zh: '把數據讀回來' }, sub: { en: 'GVSAM, GAS and PAS', zh: 'GVSAM、GAS 與 PAS' }, tone: 't',
                items: [{ en: 'F1 0.2 % to 42 %, false positives down 97 %', zh: 'F1 由 0.2% 提升到 42%，假陽性下降 97%' }, { en: 'PAS P50 from a logistic fit', zh: 'PAS 以邏輯擬合求 P50' }] }
            ],
            loop: { label: { en: 'xAM and PAS curves come back to test the predicted stiffness ratio', zh: 'xAM 與 PAS 曲線回頭檢驗預測的剛性比值' } },
            caption: { en: 'Drawn by us from the team\'s Model and Software pages. Counts and thresholds are the team\'s.', zh: '由我們依該隊 Model 與 Software 頁繪製；數量與門檻皆為該隊所報。' }
          }) +
          h.h3({ en: '1 · All-atom MD, built so that one number leaves the model', zh: '1 · 全原子 MD，設計成只讓一個數字離開模型' }) +
          h.p({
            en: 'Two neighbouring ribs of **20–25 GvpA** subunits (PDB **8GBS**) are placed in a periodic box with **TIP3P** water, **150 mM NaCl** and the **CHARMM36** force field, and GvpC 33-residue repeats are docked onto the outer face with **HADDOCK**. Bending stiffness **EI** is then read out of the thermal fluctuations themselves — the mean square amplitude of ripple mode q equals **k_BT/(L·EI·q⁴)** — with equal **1.5–2 ns** blocks per variant and **Welch\'s t-test** between variants. Because the shell-theory relation **p_cr = 3EI/(s·R³)** holds R = 42.5 nm and s = 4.9 nm constant, the model\'s claim is a ratio, and a ratio is something ultrasound can argue with.',
            zh: '兩條相鄰的肋、各含 **20–25 個 GvpA** 次單元（PDB **8GBS**），放進週期性盒中，使用 **TIP3P** 水、**150 mM NaCl** 與 **CHARMM36** 力場，並以 **HADDOCK** 把 GvpC 的 33 殘基重複單元對接到外表面。彎曲剛性 **EI** 直接從熱擾動本身讀出——波紋模態 q 的振幅均方等於 **k_BT/(L·EI·q⁴)**——每個變體取等長的 **1.5–2 ns** 區塊，變體之間以 **Welch t 檢定**比較。由於殼層理論關係式 **p_cr = 3EI/(s·R³)** 中 R = 42.5 nm 與 s = 4.9 nm 保持固定，模型主張的其實是一個比值，而比值是超音波可以跟它爭論的東西。'
          }) +
          h.p({
            en: 'The GvpC binding free energy is obtained the hard way rather than scored: **steered MD at 1 nm/ns with k = 1000 kJ/nm², then 25 umbrella windows, WHAM, a PMF, and ΔG_binding off the PMF.** And the rival explanation for collapse — water condensation on the inner wall (Zhao 2023) — was tested rather than dismissed, with a 3.5 nm water droplet placed on the inner wall and contact angle and penetration measured against the pre-registered decision rule.',
            zh: 'GvpC 的結合自由能是用硬功夫取得、而不是打分數得來的：**導引 MD，1 nm/ns、k = 1000 kJ/nm²，接著 25 個傘形視窗、WHAM、PMF，再從 PMF 讀出 ΔG_binding。** 而關於崩解的對立解釋——內壁上的水凝結（Zhao 2023）——是被檢驗、而不是被打發掉：他們在內壁放上一顆 3.5 nm 水滴，依預先登錄的判定規則量測接觸角與滲入程度。'
          }) +
          h.h3({ en: '2 · Three generative pipelines, one gate', zh: '2 · 三條生成式流程，一個閘' }) +
          h.p({
            en: '**In silico evolution of GvpC** starts from an AlphaFold2 Serratia GvpA tetramer with the GvpC repeat aligned onto the Dolichospermum cryo-EM structure (85 % GvpA identity, all six epitope residues shared). **ΔSASA** with a Shrake–Rupley 1.4 Å probe splits the 33-mer into interface and solvent-exposed positions; six anchors (**4, 11, 12, 15, 19, 22**) define four redesign tiers **T0–T3** by how much of the interface **LigandMPNN** is allowed to touch, while 20 exposed positions are redesigned for helix propensity with native charge kept. Of **200 designs, 135 passed the i_pAE threshold and 121 passed the full gate**. Position 4 came back Met to Phe in every design, and position 15 was Leu in 98 % of them.',
            zh: '**GvpC 的電腦演化**從 AlphaFold2 預測的 Serratia GvpA 四聚體開始，並把 GvpC 重複單元對位到 Dolichospermum 的冷凍電顯結構上（GvpA 相同度 85%，六個抗原決定位殘基全部相同）。以 Shrake–Rupley 1.4 Å 探針計算 **ΔSASA**，把 33 聚體分成介面位置與溶劑暴露位置；六個錨點（**4、11、12、15、19、22**）依 **LigandMPNN** 被允許動到多少介面而定出 **T0–T3** 四個重設計層級，另外 20 個暴露位置則在保留原生電荷的前提下為螺旋傾向重新設計。**200 個設計中有 135 個通過 i_pAE 門檻、121 個通過完整的閘。** 位置 4 在每一個設計中都從 Met 變成 Phe，位置 15 則有 98% 是 Leu。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'SCREENING', zh: '篩選' },
            title: { en: 'The GvpC design gate, as the team reports it', zh: 'GvpC 設計閘的通過數，依該隊所報' },
            sub: { en: 'Three numbers, published together. Only the first threshold in this gate was calibrated against controls.', zh: '三個一起公開的數字。這個閘裡只有第一道門檻是以對照校正過的。' },
            data: [
              { label: { en: 'Designs generated', zh: '產生的設計數' }, v: 200, note: { en: 'LigandMPNN, redesign tiers T0–T3', zh: 'LigandMPNN，重設計層級 T0–T3' } },
              { label: { en: 'Pass AlphaFold2 i_pAE ≤ 12', zh: '通過 AlphaFold2 i_pAE ≤ 12' }, v: 135, note: { en: 'the one threshold calibrated, against the native binder plus 9 negative controls', zh: '唯一經過校正的門檻，以天然結合蛋白加 9 個陰性對照校正' } },
              { label: { en: 'Pass the full gate', zh: '通過完整的閘' }, v: 121, note: { en: 'Boltz-2 contacts in 4 of 5 runs, pose within 2 Å, composition filter', zh: '5 次 Boltz-2 中 4 次有接觸、姿態 2 Å 內、通過組成過濾' } }
            ],
            opts: { unit: { en: 'designs', zh: '個設計' }, xlabel: { en: 'number of designs', zh: '設計數量' } },
            caption: { en: 'Plotted by us from the counts on the team\'s Model page.', zh: '由我們依該隊 Model 頁的數字繪製。' }
          }) +
          h.p({
            en: '**De novo GvpA binders** had to take a different route, and the reason is stated: GvpA\'s outward face is hydrophilic while its inward face is hydrophobic, which breaks hallucination-based design. So **RFdiffusion3** generates backbones against four GvpA chains, **ProteinMPNN** writes 8 sequences per backbone, AlphaFold2 re-predicts, and a pLDDT / RMSD / i_pAE gate filters, with **PyRosetta** as a physics-based cross-check. The **biosensor** designs add a **latch** generated by RFdiffusion3 at several lengths to block the vesicle-binding interface, with the GFP nanobody **LaG2** fused to the free end in the orientation that gives steric hindrance — and the whole construct is re-predicted under the requirement that it **must fail to bind GvpA alone**.',
            zh: '**從頭設計的 GvpA 結合蛋白**必須走另一條路，理由也寫得清楚：GvpA 朝外的面親水、朝內的面疏水，這會讓基於 hallucination 的設計失效。因此改用 **RFdiffusion3** 針對四條 GvpA 鏈生成骨架，**ProteinMPNN** 為每個骨架寫出 8 條序列，AlphaFold2 重新預測，再用 pLDDT／RMSD／i_pAE 的閘過濾，並以 **PyRosetta** 做基於物理的交叉檢查。**生物感測器**設計則多加一個由 RFdiffusion3 以數種長度生成的**閂（latch）**，用來遮住氣囊結合介面，再把抗 GFP 的奈米抗體 **LaG2** 以會產生立體阻礙的方位融合在自由端——整個構建體都要重新預測，條件是它**單獨對 GvpA 必須無法結合**。'
          }) +
          h.h3({ en: '3 · Two tools that turn images and echoes into numbers', zh: '3 · 兩個把影像與回音變成數字的工具' }) +
          h.p({
            en: '**GVSAM** is CellSAM (SAM with CellFinder/Anchor DETR, ViT-B) fine-tuned on **108 of the team\'s own phase-contrast images** at 960×720, labelled by two independent annotators in napari, with a 70/20/10 split made separately for GV-present and GV-absent images. Training ran 50 epochs at batch 3 and lr 1e-4 (backbone 1e-5), and the **best checkpoint arrived at epoch 6**. On 10 test images holding 114 annotated clusters, **F1 rose from 0.2 % for base CellSAM to 42 %, with false positives down 97 %**.',
            zh: '**GVSAM** 是把 CellSAM（SAM 搭配 CellFinder／Anchor DETR、ViT-B）在**團隊自己的 108 張相位差影像**（960×720）上微調而成，由兩位獨立標註者在 napari 中標註，並對有氣囊與無氣囊的影像分別做 70/20/10 切分。訓練跑 50 個 epoch、batch 3、學習率 1e-4（骨幹 1e-5），而**最佳檢查點出現在第 6 個 epoch**。在含 114 個標註團簇的 10 張測試影像上，**F1 從基礎 CellSAM 的 0.2% 上升到 42%，假陽性下降 97%**。'
          }) +
          h.p({
            en: 'The **GAS** ultrasound pipeline summarises each ROI by its median intensity with noise from the median absolute deviation, so wall echoes cannot drag the signal, and converts signal-versus-voltage into pressure curves with a physics-informed fit alongside. The **PAS** hardware is the cheap substitute for a Verasonics slot: it is hydrostatic rather than acoustic — a compressor plus absorbance at 500 nm, pressure stepped in small increments — and the curve is fitted with a logistic A(P) whose inflection **P50 is the collapse pressure** and whose b is the width. They say plainly why it exists: ultrasound screening is slow and expensive.',
            zh: '**GAS** 超音波流程把每個 ROI 以強度中位數摘要、雜訊取中位絕對偏差，因此管壁回音拉不動訊號，並把「訊號對電壓」轉換成壓力曲線，同時另做一個物理資訊導引的擬合。**PAS** 硬體則是 Verasonics 機時的廉價替代品：它是靜水壓而非聲學的——一台壓縮機加上 500 nm 吸光值、壓力以小增量逐步提升——曲線以邏輯函數 A(P) 擬合，其轉折點 **P50 即崩解壓力**、b 為曲線寬度。他們直接說出它存在的理由：超音波篩選又慢又貴。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'hd-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Named negatives, and a programme built to produce them', zh: '寫出來的否定結果，以及一個為此而設的計畫' },
        lede: {
          en: 'A "Fail Forward" programme makes published failure part of the project. These are the entries that matter for anyone copying the workflow.',
          zh: '一個名為「Fail Forward」的計畫把「公開失敗」做成專案的一部分。以下這些條目，對任何想照抄這套流程的人最重要。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'honest negative', zh: '誠實的否定結果' }, k: 'r' }],
              h: { en: 'No biosensor design passed every filter', zh: '沒有任何生物感測器設計通過所有過濾條件' },
              p: { en: 'The binder-plus-latch-plus-target-binder architecture is written up in full, including the requirement that it must fail to bind GvpA on its own — and then the result is stated: **no design passed every filter**. The pipeline is published anyway, as a design, not as a hit.', zh: '「結合蛋白＋閂＋標的結合蛋白」的架構被完整寫出來，包括「單獨不得結合 GvpA」這個要求——然後結果也直接寫出：**沒有任何設計通過每一項過濾**。這條流程仍然公開，但公開的是一個設計、不是一個命中。' } },
            { chips: [{ t: { en: 'uncalibrated thresholds', zh: '未校正的門檻' }, k: 'a' }],
              h: { en: 'Three of four gate conditions were set a priori', zh: '閘的四個條件裡有三個是先驗設定' },
              p: { en: 'Only the i_pAE threshold was calibrated, against the native binder plus nine negative controls. The Boltz-2 reproducibility count, the 2 Å pose tolerance and the composition filter were chosen in advance without controls. The team writes this down rather than leaving it to be inferred.', zh: '只有 i_pAE 門檻經過校正，用的是天然結合蛋白加九個陰性對照。Boltz-2 的重現次數、2 Å 的姿態容許值與組成過濾都是事先選定、沒有對照。團隊把這件事寫下來，而不是留給讀者自己去推。' } },
            { chips: [{ t: { en: 'small positive', zh: '很小的正面結果' }, k: 'a' }],
              h: { en: 'Two of seven variants, not seven of seven', zh: '七個變體裡只有兩個，而不是七個' },
              p: { en: 'The headline biosensor result is that **two of seven** variants shifted their pressure-response curve with target present, with collapse pressure rising by an average of **60.2 kPa**. The denominator is published next to the effect size.', zh: '生物感測器的主結果是：**七個變體中有兩個**在標的存在時壓力反應曲線位移，崩解壓力平均上升 **60.2 kPa**。分母就印在效應量旁邊。' } },
            { chips: [{ t: { en: 'training is fragile', zh: '訓練結果脆弱' }, k: 'a' }],
              h: { en: 'The best GVSAM checkpoint is epoch 6 of 50', zh: 'GVSAM 最佳檢查點是 50 個 epoch 中的第 6 個' },
              p: { en: 'An F1 of 42 % on 10 test images with 114 annotated clusters, from 108 training images, with the best checkpoint six epochs into a fifty-epoch run. All four of those numbers are published, which is what makes the 42 % interpretable rather than impressive.', zh: '以 108 張訓練影像，在含 114 個標註團簇的 10 張測試影像上得到 42% 的 F1，而最佳檢查點出現在五十個 epoch 中的第六個。這四個數字全部公開，才讓那個 42% 變成「可以解讀」而不只是「看起來厲害」。' } },
            { chips: [{ t: { en: 'route abandoned', zh: '放棄的路線' }, k: 'r' }],
              h: { en: 'ARG1 first, Serratia second', zh: '先 ARG1，後 Serratia' },
              p: { en: 'The bacterial production route uses the Serratia sp. ATCC 39006 polycistronic cluster, and the write-up says it was chosen **after ARG1 attempts** rather than presenting Serratia as the original plan.', zh: '細菌生產路線使用 Serratia sp. ATCC 39006 的多順反子基因簇，而文件寫的是它**在嘗試 ARG1 之後**才被選上，而不是把 Serratia 當成原本的計畫來寫。' } },
            { chips: [{ t: { en: 'physics in the way', zh: '物理擋在前面' }, k: 'r' }],
              h: { en: 'Acoustic streaming competes with the force you want', zh: '聲流與你想要的那個力互相競爭' },
              p: { en: 'In the Organize half, acoustic streaming is identified as the force competing with acoustic radiation. The workaround is not a better transducer but bigger objects: **spheroids**, because the radiation force scales with particle volume. The limitation is kept visible in the design rather than solved away.', zh: '在 Organize 這一半，他們指認出與聲輻射力競爭的是聲流。解法不是更好的換能器，而是更大的物體：**球體**，因為輻射力隨顆粒體積放大。這個限制被保留在設計中可見的位置，而不是被「解決掉」。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'hd-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Write the screening gate as conditions, before you generate anything.** Four conditions and a ranking metric, published with the counts that passed each one (200 → 135 → 121). A gate written afterwards is a ranking, and a ranking can always be slid until your favourite design is on top.', zh: '**在產生任何東西之前，就把篩選閘寫成條件。** 四個條件加一個排序指標，並連同每一道的通過數一起公開（200 → 135 → 121）。事後才寫的閘其實是排名，而排名永遠可以滑動到你偏愛的設計排在最上面。' },
            { en: '**Say which of your thresholds is evidence and which is a choice.** "Only the i_pAE threshold was calibrated; the other three were set a priori" is one sentence, costs nothing, and tells a judge exactly how much weight the gate can carry.', zh: '**寫明你的哪些門檻是證據、哪些是選擇。** 「只有 i_pAE 門檻經過校正，其餘三個是先驗設定」只有一句話、不花成本，卻精確告訴評審這個閘能承受多少重量。' },
            { en: '**Pre-register the decision rule for the test you might lose.** Defining "effect" as 6° or more with a CI excluding zero and "no effect" as under 3° with the CI inside ±6° is what lets a negative result about a rival mechanism be a result at all.', zh: '**對你可能會輸的那個檢驗，先把判定規則登錄下來。** 把「有效應」定義為 6° 以上且信賴區間不含 0、把「沒有效應」定義為小於 3° 且信賴區間落在 ±6° 內——這才讓關於對立機制的否定結果能算是一個結果。' },
            { en: '**Make the flow gate measure the thing, not the transfection.** Gating on high side scatter relative to forward scatter turns a routine transfection check into an assembly assay, because gas vesicles scatter light. The same move exists in most projects and is usually skipped.', zh: '**讓流式的閘去量真正的目標，而不是量轉染。** 把閘設在「側向散射相對前向散射偏高」，就把例行的轉染檢查變成組裝檢測，因為氣囊會散射光。多數專案都有同樣可做的一步，卻通常被跳過。' },
            { en: '**Build the cheap instrument that replaces the expensive booking.** PAS is a compressor and an absorbance reading at 500 nm, and its logistic fit yields P50 directly. Screening moves from a Verasonics slot to a bench, which is what lets seven variants be tested rather than two.', zh: '**做出那台能取代昂貴機時預約的便宜儀器。** PAS 就是一台壓縮機加 500 nm 吸光讀值，邏輯擬合直接給出 P50。篩選於是從 Verasonics 的機時搬回實驗桌，這才有可能測七個變體、而不是兩個。' },
            { en: 'What we would **not** copy: the breadth. Three generative pipelines, all-atom MD, umbrella sampling and a fine-tuned segmentation model is a lot of surface for an undergraduate season, and the honest negative — no biosensor design passed every filter — lands on the newest of those pipelines. We would run two of the three and spend the saved time on more than seven variants.', zh: '我們**不會**抄的是：這個跨度。三條生成式流程、全原子 MD、傘形取樣，再加一個微調過的分割模型，對一個大學部賽季來說攤得很開；而那個誠實的否定結果——沒有生物感測器設計通過所有過濾——正好落在這幾條流程裡最新的那一條。我們會只跑其中兩條，把省下的時間用在測超過七個變體上。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'Heidelberg is the Top 10\'s clearest demonstration that a dry lab earns trust by publishing its gate, its calibration and its failures: one equation that reduces a molecular dynamics run to a ratio an ultrasound machine can argue with, and a written admission of exactly which thresholds were guesses.',
            zh: 'Heidelberg 是前十名中最清楚的示範：乾式實驗之所以能被信任，是因為它把自己的閘、校正與失敗都公開——一條把分子動力學結果化為「超音波可以跟它爭論的比值」的方程式，加上一句寫明哪些門檻其實是猜的自白。'
          })
      });

      return out;
    }
  };
})(window);
