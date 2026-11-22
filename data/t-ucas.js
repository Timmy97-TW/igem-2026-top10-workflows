/* UCAS-China — PARCEL. 1st Runner-up, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/ucas-china/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Choose the target twice', zh: '標靶選了兩次' },
        s: { en: 'CCSP tried and dropped; the bioinformatic screen returns UPK1B, and the off-target is published', zh: '先試 CCSP 後放棄；生物資訊篩選選出 UPK1B，並公開其脫靶部位' } },
      { l: { en: 'Express and purify the carrier', zh: '表達並純化載體' },
        s: { en: 'Integrated ELP-Pum2-2EEP13 in BL21(DE3); 8 M urea to expose the His-tag, then IMAC', zh: 'BL21(DE3) 表達整合型 ELP-Pum2-2EEP13；8 M 尿素暴露 His-tag 後做 IMAC' } },
      { l: { en: 'Prove each domain alone', zh: '逐一驗證每個結構域' },
        s: { en: 'EMSA for Pum2–PRS, calcein-AM leakage for 2EEP13; both windows bounded on two sides', zh: 'Pum2–PRS 用 EMSA、2EEP13 用 calcein-AM 滲漏；兩者的工作區間都是兩側有界的' }, tone: 'a' },
      { l: { en: 'LLPS, then the pH switch', zh: '先 LLPS，再驗 pH 開關' },
        s: { en: 'OD350 turbidity vs temperature against BSA at matched molarity; four buffers from pH 7.66 down', zh: 'OD350 濁度對溫度，以同莫耳濃度 BSA 為對照；四種緩衝液自 pH 7.66 往下' } },
      { l: { en: 'Conjugate, then contain', zh: '先接合，再圍堵' },
        s: { en: 'eSrtA on an eCFP/eYFP pair before the scFv; LuxRm lysis; hok/sok with sok under pBAD', zh: 'eSrtA 先在 eCFP/eYFP 對上驗證再接 scFv；LuxRm 裂解；hok/sok 且 sok 置於 pBAD 下' } }
    ],
    dry: [
      { l: { en: 'Pick the target in silico', zh: '在計算上選定標靶' },
        s: { en: 'HLCA → DESeq2 → Surfaceome → UniProtKB topology → GTEx; 68 candidates, UPK1B passes all four', zh: 'HLCA→DESeq2→Surfaceome→UniProtKB 拓樸→GTEx；68 個候選，UPK1B 通過全部四關' }, tone: 'g' },
      { l: { en: 'Time the cell factory', zh: '抓住細胞工廠的時機' },
        s: { en: 'QS kinetics plus growth dilution; growth fitted with a simplified Baranyi equation to their own OD data', zh: 'QS 動力學加上生長稀釋；生長以簡化 Baranyi 方程擬合他們自己的 OD 數據' } },
      { l: { en: 'Watch it self-assemble', zh: '看它自己組裝起來' },
        s: { en: 'AlphaFold 3 monomers → Martini 3 in GROMACS at 298 K → CAPE free-energy model', zh: 'AlphaFold 3 單體→GROMACS 內 Martini 3、298 K→CAPE 自由能模型' } },
      { l: { en: 'Get it into the lung', zh: '把它送進肺裡' },
        s: { en: 'MPPD v3.04 on the Yeh–Schum five-lobe geometry as a screen, then CFD in ANSYS Fluent', zh: '先用 MPPD v3.04 跑 Yeh–Schum 五肺葉幾何做篩選，再以 ANSYS Fluent 做 CFD' } },
      { l: { en: 'Inside the cell, then the patient', zh: '先進細胞，再進病人' },
        s: { en: 'ODE + Gillespie for cytosolic RNA variability, then PK/PD ending at FeNO and FEV₁', zh: 'ODE＋Gillespie 給出細胞質 RNA 的變異度，再接 PK/PD，終點是 FeNO 與 FEV₁' } },
      { l: { en: 'Predict the response', zh: '預測細胞反應' },
        s: { en: 'Affine baseline benchmarked against residual CellFlow; cross-donor generalisation fails', zh: '仿射基線與 residual CellFlow 互相對照；跨捐贈者泛化失敗' }, tone: 'r' }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the screen hands the bench UPK1B', zh: '篩選把 UPK1B 交到實驗台上' }, up: true },
      { w: 1, d: 1, l: { en: 'their own OD curves fit Baranyi', zh: '他們自己的 OD 曲線擬合 Baranyi' } },
      { w: 3, d: 2, l: { en: 'the OD350 series calibrates CAPE', zh: 'OD350 系列校正 CAPE' } }
    ]
  };

  PD.pages.ucas = {
    label: { en: 'UCAS-China', zh: 'UCAS-China' },
    title: { en: 'UCAS-China — PARCEL', zh: 'UCAS-China — PARCEL' },
    render: function (h) {
      var t = team('ucas');
      var out = h.teamhero(t, {
        h1: {
          en: 'The carrier is a protein, so its own physics is the design variable — and ==every stage of the journey has its own model==.',
          zh: '載體是一個蛋白質，所以它自身的物理性質就是設計變數——而==這段旅程的每一個階段都有自己的模型==。'
        },
        lede: {
          en: 'PARCEL is an inhaled mRNA therapy for maintenance asthma in which the carrier is not a lipid nanoparticle but a single engineered protein: ELP phase-separates to form the condensate, Pum2 grips the tagged mRNA, EEP13 breaks the endosome, and histidines in the ELP hydrophobic block make the whole particle come apart in the endosome\'s own acid. The workflow signature is model-per-stage: made, assembled, inhaled, internalised, translated, clinical effect — six models, one per physical step the drug takes.',
          zh: 'PARCEL 是一套針對氣喘長期控制的吸入型 mRNA 療法，而它的載體不是脂質奈米顆粒，而是單一個改造過的蛋白質：ELP 相分離形成凝聚體、Pum2 抓住帶標籤的 mRNA、EEP13 破壞內體，而 ELP 疏水區段裡的組胺酸讓整顆顆粒在內體自身的酸性環境中解體。它的流程特徵是「每個階段一個模型」：被製造、被組裝、被吸入、被內吞、被轉譯、產生臨床效果——六個模型，對應藥物在物理上走過的每一步。'
        },
        chips: [
          { t: { en: 'ELP phase separation', zh: 'ELP 相分離' }, k: 'b' },
          { t: { en: 'Pum2–PRS RNA grip', zh: 'Pum2–PRS 抓握 RNA' }, k: 'v' },
          { t: { en: 'pH-triggered endosomal escape', zh: 'pH 觸發的內體逃脫' }, k: 'g' },
          { t: { en: 'Inhaled, not injected', zh: '吸入，而非注射' }, k: 't' },
          { t: { en: 'hok/sok kill switch', zh: 'hok/sok 自殺開關' }, k: 'a' }
        ],
        stats: [
          { v: '68', l: { en: 'Candidate targets entering the four-filter screen', zh: '進入四道篩選的候選標靶數' } },
          { v: '45.92 %', l: { en: 'Of Club cells in which UPK1B is detected', zh: 'UPK1B 在 Club cells 中被偵測到的比例' } },
          { v: '0.6048', l: { en: 'SURFY surfaceome score for UPK1B', zh: 'UPK1B 的 SURFY 表面體分數' } },
          { v: '2.5 µM', l: { en: 'Pum2 below which PRS binding stays specific', zh: 'Pum2 低於此濃度時 PRS 結合仍具專一性' } },
          { v: '8 M', l: { en: 'Urea used to expose the His-tag before IMAC', zh: 'IMAC 之前用來暴露 His-tag 的尿素濃度' } },
          { v: '6', l: { en: 'Models, one per stage of the product\'s journey', zh: '模型數量，產品旅程每階段一個' } }
        ]
      });

      out += h.toc([
        { id: 'uc-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'uc-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'ucas-wik', t: { en: 'Their figures', zh: '他們的圖' } },
        { id: 'uc-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'uc-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'uc-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'uc-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'uc-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'uc-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'If the carrier is a protein, you can design when it falls apart', zh: '如果載體是蛋白質，你就能設計它什麼時候解體' },
        lede: {
          en: 'An LNP is delivered and then hoped about. A protein condensate has a transition temperature and a titratable residue, which means release can be put on a schedule the cell itself keeps.',
          zh: '脂質奈米顆粒送出去之後，剩下的只能靠期待。蛋白凝聚體有轉變溫度、也有可滴定的殘基，這代表「釋放」這件事可以被放進一個由細胞自己執行的時程表裡。'
        },
        body:
          h.p({
            en: 'The carrier is **ELP–Pum2–EEP13**, and each part is doing one job. **ELP** (elastin-like polypeptide, VPGXG repeats) phase-separates above its transition temperature, which is what forms the particle. **Pum2** (the human Pumilio2 homology domain, 8 of its 10 repeats) grips mRNA that has been tagged with the **PRS** sequence 5′-UGUANAUA-3′. **EEP13** is a dimeric amphipathic helix (Mast18 joined to LL-III through a GGSGGGS linker) that breaks the endosome. The design decision that ties them together is chemical: **histidines in the ELP hydrophobic block make the condensate pH-responsive**, so the endosome\'s own acidification is what disassembles the particle.',
            zh: '載體是 **ELP–Pum2–EEP13**，每一段只負責一件事。**ELP**（類彈性蛋白胜肽，VPGXG 重複序列）在高於轉變溫度時相分離，顆粒就是這樣形成的。**Pum2**（人類 Pumilio2 同源結構域，取其 10 個重複中的 8 個）抓住帶有 **PRS** 序列 5′-UGUANAUA-3′ 標籤的 mRNA。**EEP13** 是一個二聚體兩親性螺旋（Mast18 以 GGSGGGS 連接子接上 LL-III），負責破壞內體。把這三者綁在一起的設計決定是化學性的：**ELP 疏水區段中的組胺酸讓凝聚體具 pH 反應性**，因此是內體自身的酸化作用把顆粒拆開。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'payload', zh: '酬載' }, k: 'b' }],
              h: { en: 'Two mRNAs, aimed at one cell type', zh: '兩個 mRNA，瞄準一種細胞' },
              p: { en: 'IFN-λ1 and SLPI mRNA, both in vitro transcribed, capped and poly(A)-tailed, aimed at the **Club cells** of the bronchiole.', zh: 'IFN-λ1 與 SLPI 的 mRNA，都是體外轉錄、加帽並加上 poly(A) 尾，目標是細支氣管的 **Club cells**。' } },
            { chips: [{ t: { en: 'targeting', zh: '標靶化' }, k: 'v' }],
              h: { en: 'An scFv, attached enzymatically', zh: '以酵素接上的 scFv' },
              p: { en: 'An anti-UPK1B scFv is conjugated by **evolved Sortase A**, pairing an LPETG tag with an N-terminal GGG — so the targeting moiety is a separate, swappable module rather than a fusion.', zh: '抗 UPK1B 的 scFv 以**演化過的 Sortase A** 接合，配對 LPETG 標籤與 N 端 GGG——因此標靶部件是一個獨立、可替換的模組，而不是融合蛋白的一部分。' } },
            { chips: [{ t: { en: 'four modules', zh: '四個模組' }, k: 'g' }],
              h: { en: 'Cell factory → processing → delivery → biosafety', zh: '細胞工廠→蛋白處理→遞送→生物安全' },
              p: { en: 'The project is organised as four modules, and the biosafety one is not an afterthought: quorum-sensing lysis releases the protein, and a **hok/sok** toxin–antitoxin pair keeps the chassis inside the vessel.', zh: '整個專案按四個模組組織，而生物安全那一個不是事後補上的：群體感應裂解負責釋放蛋白，而 **hok/sok** 毒素–抗毒素對負責把宿主留在反應槽內。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'uc-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The screen chose the target, and the bench calibrated the free-energy model', zh: '篩選選定標靶，實驗台則校正了自由能模型' },
        lede: {
          en: 'Seven engineering tracks ran in the wet lab and six models in the dry lab. The handoffs below are the ones where one side could not have produced its result alone.',
          zh: '濕式端跑了七條工程路線，乾式端有六個模型。下圖標出的交接，都是其中一邊單憑自己做不出該結果的地方。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'PARCEL: the two lanes and the three handoffs', zh: 'PARCEL：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Model and Software pages.', zh: '由我們依該隊 Engineering、Results、Model、Software 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the figures they drew themselves ---------------- */
      out += h.wikifigs('ucas');

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'uc-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Seven tracks, and the first one is a target that had to be abandoned', zh: '七條路線，而第一條是一個必須被放棄的標靶' },
        lede: {
          en: 'The target track is the clearest dry-to-wet handoff in the project, because iteration 1 failed for a reason that only a structure prediction could have surfaced in advance.',
          zh: '標靶這條路線是整個專案裡最清楚的乾式→濕式交接，因為第一次迭代失敗的原因，只有結構預測能事先浮現出來。'
        },
        body:
          h.phases([
            { h: { en: 'Iteration 1 · CCSP, tried and dropped', zh: '第 1 次迭代 · 試過 CCSP，然後放棄' },
              p: { en: 'They started from CCSP (Club-cell secretory protein). The AlphaFold server predicted both the CCSP homodimer and the CCSP-mCherry fusion, and the prediction said **steric hindrance on both sides would break the native homodimer and block membrane binding** — so a P2A was inserted.', zh: '他們一開始選的是 CCSP（Club cell 分泌蛋白）。AlphaFold server 同時預測了 CCSP 同源二聚體與 CCSP-mCherry 融合蛋白，而預測結果顯示**兩側的立體障礙都會破壞原生的同源二聚體並阻斷膜結合**——因此他們插入了一個 P2A。' },
              items: [
                { en: 'PEI transient transfection of HEK293-T (about 1 × 10⁷ cells per well, 5 h), fluorescence microscopy, then medium / cytosol / membrane fractions by sonication and centrifugation, read on SDS-PAGE.', zh: '以 PEI 對 HEK293-T 做暫時性轉染（每孔約 1 × 10⁷ 細胞、5 小時），螢光顯微觀察，再以超音波破碎與離心分出培養液／細胞質／膜部分，用 SDS-PAGE 判讀。' },
                { en: 'Verdict, stated in three parts: localisation was unresolvable, **flow cytometry was impossible because they had no instrument**, and a *secreted* protein is the wrong kind of target for a surface-binding carrier.', zh: '結論分三點寫出：定位無法判定、**因為沒有儀器所以做不了流式細胞術**，而且對一個靠表面結合的載體來說，*分泌型*蛋白本來就是錯的標靶類型。' }
              ],
              done: { en: 'The track produced a decision, not a result: stop looking for a secreted marker.', zh: '這條路線產出的是一個決定，而不是一個結果：不要再找分泌型標記。' } },
            { h: { en: 'Iteration 2 · a four-filter screen instead of a hunch', zh: '第 2 次迭代 · 用四道篩選取代直覺' },
              p: { en: '**Human Lung Cell Atlas** → QC → pseudobulk counts → **DESeq2** → intersect with the **Human Surfaceome** → **UniProtKB** topology, which must show an extracellular region → **GTEx** for off-tissue expression.', zh: '**Human Lung Cell Atlas** → 品質管控 → pseudobulk 計數 → **DESeq2** → 與 **Human Surfaceome** 取交集 → **UniProtKB** 拓樸（必須有胞外區段）→ **GTEx** 檢查其他組織的表現。' },
              items: [
                { en: '**68 candidates; UPK1B passed all four filters** — log₂FC 1.19, adjusted P = 0.00559, detected in 45.92 % of Club cells, SURFY score 0.6048.', zh: '**68 個候選，UPK1B 通過全部四道篩選**——log₂FC 1.19、校正後 P = 0.00559、在 45.92% 的 Club cells 中被偵測到、SURFY 分數 0.6048。' },
                { en: 'The off-target is published rather than buried: UPK1B is also present in bladder and urothelium, and they argue it is acceptable **only because delivery is inhaled**.', zh: '脫靶部位是公開寫出來的、不是藏起來的：UPK1B 也存在於膀胱與泌尿道上皮，而他們主張這**只有在遞送途徑是吸入時**才可以接受。' }
              ],
              done: { en: 'A target with four stated numbers and one stated liability.', zh: '一個附帶四個明確數字與一項明確弱點的標靶。' } },
            { h: { en: 'Express the integrated carrier, and fight the His-tag', zh: '表達整合型載體，並與 His-tag 搏鬥' },
              p: { en: 'Integrated ELP-Pum2-2EEP13 was expressed in **BL21(DE3)**, with **8 M urea used to expose the His-tag** before IMAC purification — a detail that says the tag was buried inside the condensate-forming protein.', zh: '整合型 ELP-Pum2-2EEP13 在 **BL21(DE3)** 中表達，並在 IMAC 純化前**以 8 M 尿素暴露 His-tag**——這個細節本身就說明了標籤被埋在這個會形成凝聚體的蛋白內部。' },
              items: [
                { en: 'Named parts registered: Pum2 BBa_26RL1I1H, PRS BBa_26L8LDNU, EEP13 BBa_26PAC6W8, integrated ELP BBa_263ZN48F.', zh: '登錄的具名元件：Pum2 BBa_26RL1I1H、PRS BBa_26L8LDNU、EEP13 BBa_26PAC6W8、整合型 ELP BBa_263ZN48F。' }
              ] },
            { h: { en: 'Prove each domain on its own, with a bounded window', zh: '各結構域單獨驗證，並給出有界的工作區間' },
              p: { en: 'Two assays, each run so that the answer is a window rather than a yes.', zh: '兩個試驗，而且都被設計成答案是一個區間、而不是一個「有」。' },
              items: [
                { en: '**Pum2–PRS by EMSA**: PRS-containing RNA shifts below **2.5 µM** Pum2; PRS-free RNA barely shifts; **at or above 5 µM the binding becomes non-specific**. The working window is bounded on both sides, not merely demonstrated.', zh: '**Pum2–PRS 用 EMSA**：含 PRS 的 RNA 在 Pum2 低於 **2.5 µM** 時發生位移；不含 PRS 的 RNA 幾乎不位移；**到達或超過 5 µM 時結合變成非專一性**。這個工作區間兩側都有界，而不只是「有被證明存在」。' },
                { en: '**EEP13 by calcein-AM leakage**: EEP13 is too small to see on a gel, so a tandem **2EEP13** (100 aa, 10.36 kDa, pI 11.78, charge +21.5 at pH 7) was used instead. 0–1 µM on about 1 × 10⁶ cells, 37 °C, 2 h, with calcein read **in the supernatant** because intracellular fluorescence swamped the image.', zh: '**EEP13 用 calcein-AM 滲漏**：EEP13 太小、在膠上看不到，因此改用串聯的 **2EEP13**（100 個胺基酸、10.36 kDa、pI 11.78、pH 7 時帶電 +21.5）。0–1 µM 作用於約 1 × 10⁶ 細胞、37 °C、2 小時，而 calcein 是**在上清液中**判讀，因為細胞內螢光會把影像蓋掉。' }
              ],
              done: { en: 'Calcein leakage was **P < 0.001 against the no-peptide control, but with no dose response** — reported with two candidate reasons rather than as a win.', zh: 'Calcein 滲漏相對於無胜肽對照為 **P < 0.001，但沒有劑量關係**——他們連同兩個可能原因一起寫出來，而不是當成一次勝利。' } },
            { h: { en: 'Show the phase transition, then show the pH switch', zh: '先證明相變，再證明 pH 開關' },
              p: { en: 'Turbidity at **OD350** (and OD ratios) against temperature, with **BSA at matched molar concentration as the control**: a logistic rise above **1 µM** and an onset below **40 °C**.', zh: '以 **OD350** 濁度（以及 OD 比值）對溫度作圖，並**以同莫耳濃度的 BSA 作為對照**：在 **1 µM** 以上出現邏輯式上升，起始溫度低於 **40 °C**。' },
              items: [
                { en: 'Then the pH series — **pH 7.66 down to the 5 range, four buffers** — to prove the designed switch, **including the cooling leg**, so the transition is shown to be reversible rather than assumed to be.', zh: '接著是 pH 序列——**pH 7.66 降到 5 多，共四種緩衝液**——用來證明設計出的那個開關，而且**包含降溫那一段**，所以相變的可逆性是被展示出來的，不是被假設的。' }
              ] },
            { h: { en: 'Conjugate on an easy pair first, then contain the chassis', zh: '先在容易的配對上接合，再把宿主圍堵起來' },
              p: { en: 'Sortase A ligation was demonstrated on an **eCFP/eYFP pair before** it was attempted on anti-UPK1B-scFv ↔ ELP — a reporter pair makes the ligation itself readable.', zh: 'Sortase A 的接合**先在 eCFP/eYFP 這組配對上**被證明，才去嘗試 anti-UPK1B-scFv ↔ ELP——用一對報告蛋白可以讓「接合本身」變得看得見。' },
              items: [
                { en: 'Quorum sensing uses a **mutated LuxRm–pLuxR** carried over from UCAS-China 2023, chosen for higher activity and less leak than wild-type LuxR–pLux, with J23115 driving luxR constitutively.', zh: '群體感應使用從 UCAS-China 2023 延續下來的**突變型 LuxRm–pLuxR**，選它是因為活性比野生型 LuxR–pLux 高且滲漏較少，並以 J23115 組成性驅動 luxR。' },
                { en: 'Kill switch: **hok/sok** type-I toxin–antitoxin with *sok* under **pBAD**, so arabinose in the fermenter keeps the antitoxin on and escape from the vessel means loss of arabinose and death.', zh: '自殺開關：**hok/sok** 第一型毒素–抗毒素，且 *sok* 置於 **pBAD** 之下，因此發酵槽中的阿拉伯糖讓抗毒素持續表達，一旦逃出槽外就失去阿拉伯糖而死亡。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'uc-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The control is chosen to match the physics, not the protocol', zh: '對照是依物理原理挑的，不是依操作慣例挑的' },
        lede: {
          en: 'Every assay on this project reads a physical property of a protein — turbidity, mobility shift, dye leakage — so the discipline is in what each number is read against.',
          zh: '這個專案的每一項試驗讀的都是某個蛋白的物理性質——濁度、位移、染劑滲漏——所以紀律就落在「每個數字是對照什麼讀出來的」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Assay', zh: '試驗' }, w: '22%' },
              { t: { en: 'Read against', zh: '對照對象' }, w: '24%' },
              { t: { en: 'What that choice buys, and what it still leaves open', zh: '這個選擇換到什麼、又留下什麼未解' } }
            ],
            rows: [
              [{ en: 'ELP LLPS by OD350', zh: 'ELP LLPS，以 OD350 判讀' }, { en: 'BSA at **matched molar concentration**', zh: '**同莫耳濃度**的 BSA' }, { en: 'Turbidity depends on particle number, so a mass-matched control would compare different numbers of molecules. Matching molarity is what makes the logistic rise above 1 µM attributable to the ELP rather than to protein load.', zh: '濁度取決於顆粒數，所以若用「等質量」對照，比較的會是不同數量的分子。對齊莫耳濃度，才讓 1 µM 以上那段邏輯式上升可以歸因於 ELP，而不是歸因於蛋白總量。' }],
              [{ en: 'pH switch', zh: 'pH 開關' }, { en: 'Four buffers, pH 7.66 downwards, **with the cooling leg**', zh: '四種緩衝液、自 pH 7.66 往下，**並含降溫段**' }, { en: 'Running the cooling leg turns a one-way observation into a reversibility claim. Without it, aggregation and phase separation look the same.', zh: '把降溫段跑出來，才讓一個單向觀察變成關於可逆性的主張。少了它，聚集與相分離看起來是一樣的。' }],
              [{ en: 'Pum2–PRS by EMSA', zh: 'Pum2–PRS，以 EMSA 判讀' }, { en: 'PRS-free RNA, plus a concentration ladder', zh: '不含 PRS 的 RNA，再加上一道濃度階梯' }, { en: 'Gives a bounded window — specific below 2.5 µM, non-specific at or above 5 µM — instead of a single binding claim. The upper bound is a design constraint on dosing.', zh: '得到的是一個有界的區間——低於 2.5 µM 專一、達到或超過 5 µM 非專一——而不是一句「會結合」。那個上界本身就是劑量設計上的限制。' }],
              [{ en: '2EEP13 by calcein-AM leakage', zh: '2EEP13，以 calcein-AM 滲漏判讀' }, { en: 'No-peptide cells; dye read in the **supernatant**', zh: '無胜肽的細胞；染劑在**上清液**中判讀' }, { en: 'Significant at P < 0.001 but **with no dose response**, and they name two candidate reasons: electrostatic adsorption of anionic calcein onto the cationic peptide, and unequal illumination time causing bleaching.', zh: '顯著性達 P < 0.001 卻**沒有劑量關係**，而他們指出兩個可能原因：陰離子性的 calcein 靜電吸附到陽離子胜肽上，以及照光時間不一致造成的褪色。' }],
              [{ en: 'Sortase A ligation', zh: 'Sortase A 接合' }, { en: 'An eCFP/eYFP pair, before the scFv', zh: '先用 eCFP/eYFP 配對，才做 scFv' }, { en: 'Validates the chemistry on a readout you can see, so a later failure on the scFv is attributable to the scFv and not to the enzyme.', zh: '先在看得見的讀值上驗證化學反應，之後 scFv 若失敗，就能歸因於 scFv 而不是歸因於酵素。' }]
            ],
            source: { en: 'Read from the team\'s Results and Engineering pages.', zh: '讀自該隊 Results 與 Engineering 頁。' }
          }) +
          h.take({ en: 'The rule that makes their numbers comparable', zh: '讓他們的數字可以互相比較的那條規則' }, {
            en: 'Every turbidity curve is read against **BSA at matched molar concentration**, not matched mass. Turbidity scales with the number of scattering particles, so only a molarity-matched control lets the OD350 rise be attributed to the ELP transition — and the same instinct runs through the project: the EMSA carries a PRS-free RNA, the calcein assay carries no-peptide cells, and the sortase chemistry is proven on a fluorescent pair before it is trusted on the scFv.',
            zh: '每一條濁度曲線都是對照**同莫耳濃度的 BSA** 讀出來的，不是同質量。濁度隨散射顆粒數變化，所以只有莫耳濃度對齊的對照，才能讓 OD350 的上升被歸因於 ELP 的相變——而同樣的直覺貫穿整個專案：EMSA 帶著一條不含 PRS 的 RNA、calcein 試驗帶著無胜肽的細胞，而 sortase 化學是先在一對螢光蛋白上被證明，才被信任用在 scFv 上。'
          }) +
          h.note({
            en: 'One instrument limitation is stated outright and changes what can be claimed: **flow cytometry was impossible because the team had no instrument**, which is one of the three reasons the CCSP localisation question was closed rather than answered.',
            zh: '有一項儀器限制被直接寫出來，而且改變了他們能主張的範圍：**因為團隊沒有儀器，所以做不了流式細胞術**——這也是 CCSP 定位問題最後是「被結案」而不是「被回答」的三個理由之一。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'uc-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Six models, one per physical step the drug takes', zh: '六個模型，對應藥物在物理上走的每一步' },
        lede: {
          en: 'Made → assembled → inhaled → internalised → translated → clinical effect. Each stage has its own tool named, and two of the six are calibrated against the team\'s own measurements.',
          zh: '被製造→被組裝→被吸入→被內吞→被轉譯→產生臨床效果。每個階段都指名了自己的工具，而六者之中有兩個是用該隊自己的量測結果校正的。'
        },
        body:
          h.flow({
            title: { en: 'How UPK1B was chosen: four filters, in this order', zh: 'UPK1B 是怎麼選出來的：四道篩選，依此順序' },
            sub: { en: 'The order matters: differential expression comes first and surface topology later, so the expensive check runs on the short list.', zh: '順序是有意義的：差異表現在前、表面拓樸在後，昂貴的檢查才會只跑在短名單上。' },
            stages: [
              { label: { en: 'Atlas and QC', zh: '圖譜與品質管控' }, sub: { en: 'Human Lung Cell Atlas → QC → pseudobulk counts', zh: 'Human Lung Cell Atlas→品管→pseudobulk 計數' }, tone: 'b' },
              { label: { en: 'Differential expression', zh: '差異表現' }, sub: { en: 'DESeq2 on the pseudobulk counts', zh: '對 pseudobulk 計數跑 DESeq2' }, tone: 'b',
                items: [{ en: 'UPK1B log₂FC 1.19', zh: 'UPK1B log₂FC 1.19' }, { en: 'adjusted P = 0.00559', zh: '校正後 P = 0.00559' }] },
              { label: { en: 'Is it on the surface?', zh: '它在表面上嗎？' }, sub: { en: 'Intersect with the Human Surfaceome', zh: '與 Human Surfaceome 取交集' }, tone: 'v',
                items: [{ en: 'SURFY score 0.6048', zh: 'SURFY 分數 0.6048' }] },
              { label: { en: 'Is it reachable?', zh: '它碰得到嗎？' }, sub: { en: 'UniProtKB topology must show an extracellular region', zh: 'UniProtKB 拓樸必須顯示有胞外區段' }, tone: 'v' },
              { label: { en: 'Where else is it?', zh: '它還長在哪裡？' }, sub: { en: 'GTEx off-tissue expression; bladder and urothelium found and published', zh: 'GTEx 檢查其他組織；發現並公開膀胱與泌尿道上皮' }, tone: 'g',
                items: [{ en: '68 candidates in', zh: '輸入 68 個候選' }, { en: 'UPK1B passes all four', zh: 'UPK1B 通過全部四關' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s target-track write-up. Counts and statistics are the team\'s.', zh: '由我們依該隊標靶路線的敘述繪製；數量與統計值為該隊所報。' }
          }) +
          h.h3({ en: '1 · Cell factory — ODEs with growth fitted to their own OD data', zh: '1 · 細胞工廠——以自家 OD 數據擬合生長的 ODE' }) +
          h.p({
            en: 'ODEs combining **growth dilution** with **quorum-sensing kinetics**, where growth is fitted with a **simplified Baranyi equation** to the team\'s own OD measurements. The question it answers is a timing question: when to trigger lysis so that protein is maximal **before the phase transition happens inside the cell**.',
            zh: '把**生長稀釋**與**群體感應動力學**結合起來的 ODE，其中生長以**簡化的 Baranyi 方程**擬合該隊自己的 OD 量測值。它回答的是一個時機問題：什麼時候觸發裂解，才能在**相變在細胞內發生之前**讓蛋白量達到最大。'
          }) +
          h.h3({ en: '2 · Self-assembly — Martini 3, then a reduced model because MD is too expensive', zh: '2 · 自組裝——先 Martini 3，再因 MD 太貴而改用簡化模型' }) +
          h.p({
            en: 'Three constructs (control, antibody-functionalised, CPP-functionalised; **1052 / 1322 / 1068 residues**) were built from **AlphaFold 3** monomers and coarse-grained with **Martini 3 in GROMACS at 298 K**. The readouts are assembly dynamics, **per-domain radius of gyration**, and the question that actually matters for the design — **is Pum2 buried inside the assembly**, as it must be if the RNA is to be protected. Then **CAPE**, a reduced free-energy model (common-tangent phase coexistence plus a square-gradient interfacial cost), **calibrated against the wet lab\'s OD curves** and built explicitly because microsecond MD per design is unaffordable.',
            zh: '三個構建體（對照、抗體修飾、CPP 修飾；**1052／1322／1068 個殘基**）由 **AlphaFold 3** 單體建起，再以 **GROMACS 中的 Martini 3、298 K** 做粗粒化。讀出的是組裝動態、**各結構域的迴轉半徑**，以及對設計真正重要的那個問題——**Pum2 是否被埋在組裝體內部**，而若要保護 RNA 它就必須如此。接著是 **CAPE**，一個簡化的自由能模型（共同切線相共存加上平方梯度的界面代價），**以濕式端的 OD 曲線校正**，而且明說之所以建它，是因為對每個設計都跑微秒級 MD 負擔不起。'
          }) +
          h.h3({ en: '3 · Pulmonary delivery — a cheap screen before the expensive CFD', zh: '3 · 肺部遞送——昂貴的 CFD 之前先做便宜的篩選' }) +
          h.p({
            en: 'Two stages. First a screen in **MPPD v3.04** (US EPA) on the adult **Yeh–Schum five-lobe** geometry, scoring deposition in the last three conducting generations per lobe (**13–15, 15–17, 14–16** depending on lobe), with upper-respiratory-tract and total lung deposition as secondary criteria; log-normal mass-weighted distributions anchored on published vibrating-mesh output (**MMAD 3.38 µm / GSD 1.61** and **6.05 / 1.75**), inspiratory profiles of **20 L/min × 3 s** and **30 L/min × 2 s**, breath-holds of 0/2/5 s and 0/5/10 s, refined at **0.5 µm MMAD steps**. Then **CFD in ANSYS Fluent** on a reconstructed lung geometry for transport and deposition. Particle size was flagged as critical by **two respiratory physicians** in their human-practices work, which is why this stage exists at this resolution.',
            zh: '分兩階段。先用 **MPPD v3.04**（美國 EPA）在成人 **Yeh–Schum 五肺葉**幾何上做篩選，評分各肺葉最後三個傳導世代的沉積（依肺葉為 **13–15、15–17、14–16**），並以上呼吸道與全肺沉積為次要判準；質量加權的對數常態分布錨定在已發表的振動篩霧化輸出（**MMAD 3.38 µm／GSD 1.61** 與 **6.05／1.75**），吸氣曲線為 **20 L/min × 3 秒**與 **30 L/min × 2 秒**，閉氣 0/2/5 秒與 0/5/10 秒，並以 **0.5 µm 的 MMAD 間距**細化。之後再以 **ANSYS Fluent 的 CFD** 在重建的肺部幾何上計算傳輸與沉積。顆粒大小是他們人文實務工作中**兩位呼吸科醫師**指出的關鍵——這也是這個階段要做到這種解析度的原因。'
          }) +
          h.h3({ en: '4 · Inside the cell — ODE plus Gillespie, for variability not just a mean', zh: '4 · 細胞內——ODE 加 Gillespie，要的是變異度而不只是平均值' }) +
          h.p({
            en: 'A hybrid **ODE + Gillespie stochastic** model covering surface binding, internalisation, endosomal acidification, carrier disassembly, **discrete membrane-opening events** and RNA degradation. Because membrane opening is a small-number event, the output is the *amount and the variability* of cytosolic RNA rather than an average that no single cell experiences.',
            zh: '一個 **ODE＋Gillespie 隨機**混合模型，涵蓋表面結合、內吞、內體酸化、載體解體、**離散的膜破裂事件**與 RNA 降解。由於膜破裂是小數目事件，輸出的是細胞質 RNA 的*量與變異度*，而不是一個沒有任何單一細胞真正經歷到的平均值。'
          }) +
          h.h3({ en: '5 · PK/PD — ending at numbers a clinician already reads', zh: '5 · PK/PD——終點是臨床上本來就在看的數字' }) +
          h.p({
            en: 'A compartmental PK model for mRNA turnover and protein production feeds a literature-based immune-signalling network with **Hill terms**, ending in **clinically observable outputs: FeNO and FEV₁**, plus IL-13-driven goblet-cell metaplasia, mucus dynamics and active neutrophil elastase. The scope is declared: mild asthma, under stated assumptions.',
            zh: '一個描述 mRNA 代謝與蛋白生產的室體 PK 模型，餵進一個基於文獻、含 **Hill 項**的免疫訊號網路，終點是**臨床上看得到的輸出：FeNO 與 FEV₁**，另外還有 IL-13 驅動的杯狀細胞化生、黏液動態與活化的嗜中性球彈性蛋白酶。適用範圍被明寫出來：輕度氣喘，且在所述假設之下。'
          }) +
          h.h3({ en: '6 · Response prediction — and the generalisation it does not have', zh: '6 · 反應預測——以及它所不具備的泛化能力' }) +
          h.p({
            en: 'Single-cell perturbation prediction on public data: an **affine baseline** (shift and reshape the population in PCA space) benchmarked against **residual CellFlow**, with r² and distributional distances as metrics. The section carries an explicit discussion of **cross-donor generalisation failing**, and their framing for why a mean is not enough is "programs as well as proportions".',
            zh: '在公開資料上做單細胞擾動預測：一個**仿射基線**（在 PCA 空間中平移並重塑族群分布）與 **residual CellFlow** 互相對照，指標為 r² 與分布距離。這一節明白地討論了**跨捐贈者泛化失敗**這件事，而他們用來說明「為什麼平均值不夠」的說法是「不只是比例，還有表現程式」。'
          }) +
          h.note({
            en: 'Software and hardware are part of the same loop rather than side projects: **AeroEase**, an Android companion app for the inhaler (BLE link, offline record assistant, diary); the **UPK1B bioinformatics screen** above; **FeroEase**, a fermenter-control app with **turbidity-based harvest detection** — which is the cell-factory model\'s timing question turned into a button; and an education quiz. The hardware is a vibrating-mesh nebuliser for the condensate, plus the fermenter that FeroEase drives.',
            zh: '軟體與硬體是同一個迴圈的一部分，而不是旁支專案：**AeroEase**，吸入器的 Android 伴隨程式（BLE 連線、離線紀錄助理、日誌）；上面那個 **UPK1B 生物資訊篩選**；**FeroEase**，一個帶**濁度判斷收穫時機**的發酵槽控制程式——那其實就是細胞工廠模型的時機問題被做成一個按鈕；以及一個教育測驗。硬體則是給凝聚體用的振動篩霧化器，加上 FeroEase 所控制的那台發酵槽。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'uc-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Negative and ambiguous results, reported with reasons', zh: '陰性與模糊的結果，連同理由一起報出來' },
        body:
          h.cards([
            { chips: [{ t: { en: 'target abandoned', zh: '標靶被放棄' }, k: 'r' }],
              h: { en: 'CCSP, for three separate reasons', zh: 'CCSP，有三個獨立的理由' },
              p: { en: 'Localisation was unresolvable; flow cytometry was impossible because they had no instrument; and a secreted protein is the wrong kind of target for a surface-binding carrier. The structure prediction had already warned of steric hindrance on both sides of the fusion.', zh: '定位無法判定；因為沒有儀器所以做不了流式細胞術；而對靠表面結合的載體來說，分泌型蛋白本來就是錯的標靶類型。結構預測其實已經先警告過融合蛋白兩側都有立體障礙。' } },
            { chips: [{ t: { en: 'ambiguous result', zh: '模糊的結果' }, k: 'a' }],
              h: { en: 'Calcein leakage: significant, but flat', zh: 'Calcein 滲漏：顯著，但平的' },
              p: { en: '**P < 0.001 against the no-peptide control, with no dose response.** Two candidate reasons are given: electrostatic adsorption of anionic calcein onto the cationic peptide, and unequal illumination time causing bleaching. Neither is resolved on the wiki.', zh: '**相對無胜肽對照為 P < 0.001，但沒有劑量關係。** 他們給了兩個可能原因：陰離子性的 calcein 靜電吸附到陽離子胜肽上，以及照光時間不一致導致褪色。wiki 上這兩者都沒有被解決。' } },
            { chips: [{ t: { en: 'substituted construct', zh: '替代構建體' }, k: 'a' }],
              h: { en: 'EEP13 was never assayed as EEP13', zh: 'EEP13 從未以 EEP13 的形式被測過' },
              p: { en: 'The peptide is too small to see on a gel, so all the membrane-damage data are from the tandem **2EEP13** (100 aa, 10.36 kDa). The number that was measured and the part that will be delivered are not the same molecule.', zh: '這個胜肽太小、在膠上看不到，所以所有膜破壞的數據都來自串聯的 **2EEP13**（100 個胺基酸、10.36 kDa）。被量到的那個分子與將要被遞送的那個元件並不是同一個。' } },
            { chips: [{ t: { en: 'stated off-target', zh: '明列脫靶' }, k: 'r' }],
              h: { en: 'UPK1B is also in bladder and urothelium', zh: 'UPK1B 也存在於膀胱與泌尿道上皮' },
              p: { en: 'Published rather than buried, with the argument that it is acceptable **only because delivery is inhaled**. That makes the route of administration a load-bearing part of the safety case, not a convenience.', zh: '這一點是公開寫出的、不是藏起來的，而他們的論證是：這**只有在遞送途徑是吸入時**才可以接受。也就是說，給藥途徑是安全性論證的承重結構，而不是方便而已。' } },
            { chips: [{ t: { en: 'model limitation', zh: '模型限制' }, k: 'r' }],
              h: { en: 'Cross-donor generalisation fails', zh: '跨捐贈者泛化失敗' },
              p: { en: 'The perturbation-prediction section has an explicit passage on this. A model that cannot transfer between donors cannot be used to pick a dose for a new patient, and they say so instead of reporting only the within-donor r².', zh: '擾動預測那一節有明確的一段在談這件事。一個無法在不同捐贈者之間轉移的模型，不能用來為新病人選劑量；而他們把這點寫出來，而不是只報捐贈者內部的 r²。' } },
            { chips: [{ t: { en: 'declared scope', zh: '明示適用範圍' }, k: 'a' }],
              h: { en: 'PK/PD is scoped to mild asthma', zh: 'PK/PD 的適用範圍限於輕度氣喘' },
              p: { en: 'The clinical endpoints — FeNO and FEV₁ — are real and checkable, which is exactly why the scope statement matters: the model is not offered as a prediction for severe disease.', zh: '那些臨床終點——FeNO 與 FEV₁——是真實且可查核的，這正是適用範圍聲明重要的原因：這個模型並沒有被當成對重度疾病的預測來提供。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'uc-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Give every physical stage of your product its own model, and let the cheap one screen for the expensive one.** MPPD before ANSYS Fluent, CAPE before microsecond MD. The pattern costs nothing but ordering, and it is what lets six models exist in one season.', zh: '**讓產品的每一個物理階段都有自己的模型，並讓便宜的那個替昂貴的那個做篩選。** MPPD 在 ANSYS Fluent 之前、CAPE 在微秒級 MD 之前。這個模式除了「排順序」之外不花任何成本，而它正是一季之內能有六個模型的原因。' },
            { en: '**Match the control to the physics of the readout.** BSA at matched molarity rather than matched mass, because turbidity counts particles. Picking the control from first principles is free and it decides whether the curve means anything.', zh: '**讓對照配合讀值背後的物理。** 用同莫耳濃度而非同質量的 BSA，因為濁度數的是顆粒。從第一原理挑對照不花錢，而它決定了那條曲線到底有沒有意義。' },
            { en: '**Report the window, not the binding.** "Specific below 2.5 µM, non-specific at or above 5 µM" is a usable dosing constraint; "Pum2 binds PRS" is not. Running the ladder in both directions costs one extra set of lanes.', zh: '**報區間，不要只報「會結合」。**「低於 2.5 µM 專一、達到或超過 5 µM 非專一」是一個可以拿來用的劑量限制；「Pum2 會結合 PRS」不是。把濃度階梯兩端都跑完，代價只是多幾條電泳道。' },
            { en: '**Validate a new chemistry on a reporter pair before you trust it on the real part.** eCFP/eYFP before anti-UPK1B-scFv means a later failure is attributable. The same logic applies to any ligation, tag or cleavage step.', zh: '**在信任一個新化學反應用在真正的元件上之前，先在一對報告蛋白上驗證它。** 先 eCFP/eYFP 再 anti-UPK1B-scFv，之後若失敗就能歸因。同樣的邏輯適用於任何接合、標籤或切割步驟。' },
            { en: 'What we would **not** copy: letting the assayed molecule drift from the delivered one. All the membrane-damage evidence is for 2EEP13, a tandem built because the real peptide was invisible on a gel — so the dose-response question is still open for the part that actually ships.', zh: '我們**不會**抄的是：讓「被測的分子」和「被遞送的分子」慢慢分岔。所有膜破壞的證據都屬於 2EEP13，而它只是因為真正的胜肽在膠上看不見才被串聯出來的——所以對真正要出貨的那個元件來說，劑量關係這個問題還是開著的。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'UCAS-China came second because the carrier\'s own physics is the design variable and every step of the journey has a model with a named tool — and because the two models that could be calibrated against their own bench data were.',
            zh: 'UCAS-China 之所以拿下第二，是因為載體自身的物理性質就是設計變數、旅程的每一步都有一個指名工具的模型——也因為那兩個能用自家實驗數據校正的模型，他們真的拿去校正了。'
          })
      });

      return out;
    }
  };
})(window);
