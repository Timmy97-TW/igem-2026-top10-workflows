/* Stanford University — Kele Patch. Grand Prize, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/stanford-university/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Build the sensors', zh: '建構感測器' },
        s: { en: 'KAPA HiFi PCR with 20 bp overhangs → DpnI → NEB HiFi at 50 °C → EK438 backbone', zh: 'KAPA HiFi PCR（20 bp 重疊）→DpnI→50 °C NEB HiFi→EK438 骨架' } },
      { l: { en: 'Transfect HEK293', zh: '轉染 HEK293' },
        s: { en: '100k cells/well · Lipofectamine 3000 + P3000 · 500 ng DNA · match and mismatch in the SAME transfection', zh: '每孔 10 萬細胞·Lipofectamine 3000+P3000·500 ng DNA·配對與錯配同一次轉染' } },
      { l: { en: 'Read three colours', zh: '讀三個顏色' },
        s: { en: 'mCherry = sensor, mTagBFP = trigger, EGFP = activation; output read inside the top-5 % mCherry gate', zh: 'mCherry=感測器、mTagBFP=觸發、EGFP=啟動；在 mCherry 前 5% 閘內讀輸出' } },
      { l: { en: 'Move off plasmid', zh: '脫離質體' },
        s: { en: 'T7 + Kozak carried in the PCR primer → HiScribe → Vaccinia capping → poly(A) → MessengerMAX', zh: 'T7＋Kozak 寫在 PCR 引子裡→HiScribe→Vaccinia 加帽→poly(A)→MessengerMAX' } },
      { l: { en: 'Harder cells, new payloads', zh: '更難的細胞、新的酬載' },
        s: { en: 'Keloid and healthy primary fibroblasts · SuCas12a2 in co-culture · VEEV saRNA designs built', zh: '瘢痕與健康原代纖維母細胞·共培養測 SuCas12a2·建好 VEEV saRNA 架構' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Pick the targets', zh: '選標靶' },
        s: { en: '26 scRNA-seq cohorts, 960,518 cells; score pathological vs healthy vs bystander, never a tissue average', zh: '26 個單細胞資料集、960,518 顆細胞；比較病變／健康／旁觀細胞，不用組織平均' } },
      { l: { en: 'Rank the designs', zh: '排序設計' },
        s: { en: '19 ViennaRNA predictors; sensor folding ΔG ρ = 0.62–0.63 against GC content ≈ −0.2', zh: '19 個 ViennaRNA 預測子；感測器折疊 ΔG ρ=0.62–0.63，GC 含量僅約 −0.2' }, tone: 'g' },
      { l: { en: 'Five linked ODE models', zh: '五個相連 ODE 模型' },
        s: { en: 'Lipoplex cascade + stochastic occupancy; 82 parameters tabulated with value, unit, source', zh: '脂質複合體級聯＋隨機佔據；82 個參數列出數值、單位、出處' } },
      { l: { en: 'Fit, do not assume', zh: '擬合，不假設' },
        s: { en: 'Simulated annealing against published qPCR → p_entry 10.7 %, k_sat 232 plasmids/nucleus, k_tx 0.273 h⁻¹', zh: '對已發表 qPCR 做模擬退火→p_entry 10.7%、k_sat 232 個/核、k_tx 0.273 h⁻¹' } },
      { l: { en: 'Model the device', zh: '裝置建模' },
        s: { en: '0.9 mm needles; nociceptor model + Fick/Einstein–Stokes/Darcy FEA against a 6 h deadline', zh: '0.9 mm 微針；痛覺受器模型＋Fick/Einstein–Stokes/Darcy 有限元，對上 6 小時期限' } },
      { l: { en: 'Fit the patch to the scar', zh: '貼片貼合疤痕' },
        s: { en: 'U-Net segmentation of a scar photo → 3D-printable STL', zh: '用 U-Net 分割疤痕照片→可 3D 列印的 STL' } }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the model names the five genes', zh: '模型指定五個基因' }, up: true },
      { w: 2, d: 1, l: { en: 'flow data refits the ranking', zh: '流式數據重新擬合排序' } },
      { w: 3, d: 2, l: { en: 'the delay forced the ODEs', zh: '表達延遲迫使建立 ODE' } }
    ]
  };

  PD.pages.stanford = {
    label: { en: 'Stanford University', zh: 'Stanford University' },
    title: { en: 'Stanford University — Kele Patch', zh: 'Stanford University — Kele Patch' },
    render: function (h) {
      var t = team('stanford');
      var out = h.teamhero(t, {
        h1: {
          en: 'The model chose the targets, the lab built exactly those, and the flow data ==rewrote the model==.',
          zh: '模型選定標靶，實驗室就做那些，而流式數據==改寫了模型==。'
        },
        lede: {
          en: 'Kele Patch is an mRNA therapy for keloid scars delivered by microneedle patch. The therapeutic is only made inside cells whose transcriptional state says "keloid fibroblast", because the sensor is read by the cell\'s own ADAR enzyme. What won the Grand Prize is not the construct: it is that the dry lab and the wet lab are the same loop, run four times, with the measurement rules written down before the data arrived.',
          zh: 'Kele Patch 是以微針貼片遞送的瘢痕 mRNA 療法。治療蛋白只在轉錄狀態符合「瘢痕纖維母細胞」的細胞內被製造，因為感測器是由細胞自己的 ADAR 酵素讀取的。拿下首獎的不是這個構建體，而是乾式與濕式實驗構成同一個迴圈、跑了四輪，而且量測規則在數據出現之前就先寫下來。'
        },
        chips: [
          { t: { en: 'RADAR / ADAR editing', zh: 'RADAR／ADAR 編輯' }, k: 'b' },
          { t: { en: 'AND gate', zh: 'AND 閘' }, k: 'v' },
          { t: { en: 'IVT mRNA delivery', zh: 'IVT mRNA 遞送' }, k: 'g' },
          { t: { en: 'Microneedle patch', zh: '微針貼片' }, k: 't' },
          { t: { en: 'RADAR-Scout software', zh: 'RADAR-Scout 軟體' }, k: 'a' }
        ],
        stats: [
          { v: '26', l: { en: 'scRNA-seq cohorts in the target screen', zh: '標靶篩選使用的單細胞資料集' } },
          { v: '960,518', l: { en: 'Cells behind the target choice', zh: '支撐標靶選擇的細胞數' } },
          { v: '5×5', l: { en: 'Sensor panel built from the screen', zh: '由篩選結果建出的感測器矩陣' } },
          { v: '0.62–0.63', l: { en: 'Spearman ρ of folding ΔG vs output', zh: '折疊 ΔG 與輸出的 Spearman ρ' } },
          { v: '82', l: { en: 'Model parameters, each with a source', zh: '模型參數數，每個都有出處' } },
          { v: '10.7 %', l: { en: 'Fitted chance a plasmid enters the nucleus per division', zh: '擬合出的每次分裂質體進核機率' } }
        ]
      });

      out += h.toc([
        { id: 's-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 's-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 's-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 's-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 's-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 's-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 's-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 's-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A sensor that reads a cell\'s state, not a tissue\'s average', zh: '讀細胞狀態、而不是組織平均的感測器' },
        lede: {
          en: 'Keloid scars grow past the edge of the wound and never regress; recurrence after surgical excision alone is reported at 45–100 %. Steroid injection hurts and spreads unevenly.',
          zh: '瘢痕會長出傷口邊界且不會自行消退；單靠手術切除的復發率被報告為 45–100%。類固醇注射既痛，分布也不均。'
        },
        body:
          h.p({
            en: 'The platform is **RADAR** (Kaseniit et al., 2023, Gao lab). A sensor transcript carries a stop codon in front of the payload. When the target transcript hybridises to the sensor, the cell\'s own **ADAR** enzyme edits that stop codon away, and only then is the payload translated. The consequence for the whole project is the one that matters: *a RADAR sensor reads single cells*, so a target chosen by comparing average expression between diseased and healthy tissue is the wrong target.',
            zh: '平台是 **RADAR**（Kaseniit 等人，2023，Gao 實驗室）。感測器轉錄本在酬載前面帶一個終止密碼子。當標靶轉錄本與感測器雜交，細胞自己的 **ADAR** 酵素會把那個終止密碼子編輯掉，酬載才會被轉譯。對整個專案真正關鍵的推論是：*RADAR 感測器讀的是單一細胞*，所以用「病變組織 vs 健康組織的平均表現量」挑出來的標靶是錯的標靶。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'specificity', zh: '專一性' }, k: 'b' }],
              h: { en: 'Two triggers, one gate', zh: '兩個觸發、一個閘' },
              p: { en: 'The safety design is an AND gate: two trigger sequences in tandem on one sensor (POSTN C0 + ASPN C7 on the EK438 backbone), so the payload needs both transcripts present at once.', zh: '安全設計是一個 AND 閘：同一個感測器上串聯兩段觸發序列（EK438 骨架上的 POSTN C0＋ASPN C7），酬載必須兩個轉錄本同時存在才會產生。' } },
            { chips: [{ t: { en: 'delivery', zh: '遞送' }, k: 'g' }],
              h: { en: 'mRNA, not DNA', zh: '是 mRNA，不是 DNA' },
              p: { en: 'Every component was remade as in-vitro-transcribed mRNA, which removes nuclear entry from the problem entirely — and the modelling shows exactly how much that step was costing.', zh: '每個元件都改做成體外轉錄的 mRNA，直接把「進核」這一步從問題裡移除——而模型正好量化了那一步原本有多貴。' } },
            { chips: [{ t: { en: 'device', zh: '裝置' }, k: 't' }],
              h: { en: 'A patch, because the needle is the complaint', zh: '做貼片，因為病人抱怨的是針' },
              p: { en: 'Patients reported pain and clinicians reported uneven spread from repeated single-needle injection, so the delivery device is an array of 16 short needles rather than one long one.', zh: '病人抱怨痛、醫師抱怨反覆單針注射分布不均，所以遞送裝置是 16 根短針的陣列，而不是一根長針。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 's-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Where the dry lab actually touched the wet lab', zh: '乾式實驗真正碰到濕式實驗的地方' },
        lede: {
          en: 'Three handoffs, each in a different direction. The dashed arrows are the whole argument of this page.',
          zh: '三次交接，方向各不相同。那些虛線箭頭就是這一頁的全部論點。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'Kele Patch: the two lanes and the three handoffs', zh: 'Kele Patch：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Experiments, Results and Model pages.', zh: '由我們依該隊 Description、Experiments、Results、Model 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 's-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Five steps, and the fourth one changes the chemistry', zh: '五個步驟，而第四步換掉了化學' },
        body:
          h.phases([
            { h: { en: 'Targets arrive from the software', zh: '標靶由軟體產生' },
              p: { en: 'POSTN, ASPN, ADAM12, COL11A1, SFRP4 — five genes, five sensor candidates each, giving a 5×5 panel of 25 (later extended to 26).', zh: 'POSTN、ASPN、ADAM12、COL11A1、SFRP4——五個基因、每個五個候選感測器，構成 5×5 共 25 個的矩陣（後來擴到 26 個）。' },
              items: [
                { en: 'Nothing was chosen by browsing the literature; the panel is the screen\'s output.', zh: '沒有任何標靶是靠翻文獻挑的；這個矩陣就是篩選流程的輸出。' },
                { en: 'Three plasmids recur and are named by their original identifiers: **EK438** sensor backbone (SFFV promoter), **EK574** ADAR1 p150, **I043** trigger backbone.', zh: '三個質體反覆出現並沿用原始編號：**EK438** 感測器骨架（SFFV 啟動子）、**EK574** ADAR1 p150、**I043** 觸發骨架。' }
              ] },
            { h: { en: 'Build', zh: '建構' },
              p: { en: 'KAPA HiFi PCR with 20 bp Gibson overhangs → DpnI digest → gel purify → NEB HiFi assembly at 50 °C → transform → sequence.', zh: 'KAPA HiFi PCR（20 bp Gibson 重疊）→DpnI 消化→膠體回收→50 °C NEB HiFi 組裝→轉形→定序。' },
              items: [
                { en: 'Because the backbones share flanking sequence, **one primer pair per fragment produced three different constructs** — a design decision that shows up as fewer oligos ordered.', zh: '由於骨架共用兩側序列，**每個片段只要一對引子就能做出三個不同構建體**——這個設計決定直接反映為更少的寡核苷酸訂單。' },
                { en: 'Long backbone amplicons at 20 cycles with 6–7.5 min extensions; short inserts at 30 cycles.', zh: '長骨架片段 20 個循環、延伸 6–7.5 分鐘；短插入片段 30 個循環。' }
              ] },
            { h: { en: 'Test, with the control inside the same well-plate run', zh: '測試，對照放在同一次盤內' },
              p: { en: 'HEK293 in 24-well plates at 100,000 cells per well, transfected the following day with Lipofectamine 3000 + P3000 reagent at 500 ng total DNA per well.', zh: 'HEK293 於 24 孔盤、每孔 10 萬細胞，隔日用 Lipofectamine 3000＋P3000 試劑、每孔總 DNA 500 ng 轉染。' },
              items: [
                { en: 'Every sensor is run in a **matched** and a **mismatched** trigger condition. The mismatch is the off state.', zh: '每個感測器都同時跑**配對**與**錯配**觸發條件。錯配就是關閉狀態。' },
                { en: 'Imaged on an EVOS-FL at roughly 6, 12 and 24 h, then harvested into a 96-well U-bottom plate for flow cytometry (FACS buffer later supplemented with EDTA to stop clumping).', zh: '約 6、12、24 小時用 EVOS-FL 拍照，再收到 96 孔 U 型底盤做流式（FACS buffer 後來加 EDTA 以避免聚團）。' }
              ],
              done: { en: 'Replicate agreement across the panel was r = 0.94.', zh: '整個矩陣的重複間一致性為 r = 0.94。' } },
            { h: { en: 'Replace plasmid with IVT mRNA', zh: '用 IVT mRNA 取代質體' },
              p: { en: 'Rather than ordering dedicated T7 constructs for every part, templates were generated by PCR from plasmids they already had.', zh: '他們沒有為每個元件訂製 T7 構建體，而是直接用手上的質體以 PCR 產生模板。' },
              items: [
                { en: 'The forward primer carries the whole 5′ architecture: GC spacer, T7 promoter, ACAG spacer, Kozak, start codon, then 17–22 nt of gene. The reverse primer adds the poly(A).', zh: '正向引子帶著整個 5′ 結構：GC 間隔、T7 啟動子、ACAG 間隔、Kozak、起始密碼子，再接 17–22 nt 的基因序列。反向引子負責加上 poly(A)。' },
                { en: 'HiScribe T7 → DNase I → precipitate → **Vaccinia capping** → precipitate → enzymatic poly(A) tailing → purify.', zh: 'HiScribe T7→DNase I→沉澱→**Vaccinia 加帽**→沉澱→酵素加 poly(A) 尾→純化。' },
                { en: 'Delivered with Lipofectamine **MessengerMAX** at 500 ng per well, **omitting P3000**, which is only needed to get DNA into the nucleus.', zh: '以 Lipofectamine **MessengerMAX** 每孔 500 ng 遞送，**不加 P3000**——那只有要把 DNA 送進核時才需要。' }
              ] },
            { h: { en: 'Push into primary cells and swap the payload', zh: '推進原代細胞並更換酬載' },
              p: { en: 'Healthy dermal and keloid fibroblasts; a Cas-based payload; and a self-amplifying design.', zh: '健康皮膚與瘢痕纖維母細胞；一個以 Cas 為基礎的酬載；以及一個自我擴增設計。' },
              items: [
                { en: '**SuCas12a2** (Addgene #257717, NLS-Tag-P2A-TagBFP) tested in a 50:50 co-culture of HEK293T-eGFP and HEK293-mScarlet, 25,000 + 25,000 cells per well, with a targeting and a non-targeting guide.', zh: '**SuCas12a2**（Addgene #257717，NLS-Tag-P2A-TagBFP）在 HEK293T-eGFP 與 HEK293-mScarlet 1:1 共培養中測試，每孔各 25,000 顆，並比較標靶與非標靶 guide。' },
                { en: 'Self-amplifying RNA: three architectures coupling the **VEEV** nsp1–4 replicase to the sensor — built, not yet working.', zh: '自我擴增 RNA：三種把 **VEEV** nsp1–4 複製酶接到感測器上的架構——已建好，但還沒跑通。' },
                { en: 'Next step named on the wiki: **GenoSkin** human skin models.', zh: 'wiki 上寫明的下一步：**GenoSkin** 人體皮膚模型。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 's-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'Eight metrics, defined once, then used without re-explaining', zh: '八個指標，定義一次，之後不再解釋' },
        lede: {
          en: 'This is the single most copyable page on their wiki. The metrics are split into two families, and the reason for the split is a claim about what a therapy needs to be true.',
          zh: '這是他們 wiki 上最值得照抄的一頁。指標被分成兩族，而分族的理由本身就是一個關於「療法需要什麼成立」的主張。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Metric', zh: '指標' }, w: '26%' },
              { t: { en: 'Family', zh: '族' }, w: '14%' },
              { t: { en: 'Exactly what it is', zh: '確切定義' } }
            ],
            rows: [
              [{ en: 'Sensor expression level', zh: '感測器表現量' }, { en: 'activation', zh: '啟動' }, { en: '% of cells that are mCherry-positive, since mCherry is translated constitutively from the sensor transcript. Synonymous with sensor transfection efficiency.', zh: 'mCherry 陽性細胞百分比，因為 mCherry 由感測器轉錄本組成性轉譯。等同於感測器轉染效率。' }],
              [{ en: 'Trigger expression level', zh: '觸發表現量' }, { en: 'activation', zh: '啟動' }, { en: '% of cells that are mTagBFP-positive.', zh: 'mTagBFP 陽性細胞百分比。' }],
              [{ en: 'Sensor activation efficiency', zh: '感測器啟動效率' }, { en: 'activation', zh: '啟動' }, { en: '% of mCherry-positive cells that are also EGFP-positive — the fraction of cells in which the therapeutic would be made. Stated as a **lower bound**, because several transcripts probably have to activate before EGFP clears noise.', zh: 'mCherry 陽性細胞中同時 EGFP 陽性的比例——也就是真的會生產治療蛋白的細胞比例。明說這是**下界**，因為可能要多個轉錄本被啟動，EGFP 才會超過背景。' }],
              [{ en: 'Activation fold change', zh: '啟動倍率變化' }, { en: 'activation', zh: '啟動' }, { en: 'Activation efficiency in the matched condition ÷ the same quantity in the mismatch condition. How separated on and off are.', zh: '配對條件的啟動效率 ÷ 錯配條件的同一量。代表開與關分得多開。' }],
              [{ en: 'Output per sensor', zh: '每個感測器的輸出' }, { en: 'output', zh: '輸出' }, { en: 'Geometric-mean EGFP ÷ geometric-mean mCherry, **within the mCherry-high gate (top 5 % of mCherry-positive cells)**. How much payload those cells make.', zh: '幾何平均 EGFP ÷ 幾何平均 mCherry，**在 mCherry 高表現閘內（mCherry 陽性細胞的前 5%）**。代表那些細胞做出多少酬載。' }],
              [{ en: 'Output fold change', zh: '輸出倍率變化' }, { en: 'output', zh: '輸出' }, { en: 'Output per sensor, matched ÷ mismatched, in the same gate.', zh: '同一個閘內，配對 ÷ 錯配的每感測器輸出。' }],
              [{ en: 'Leakiness', zh: '滲漏' }, { en: 'output', zh: '輸出' }, { en: 'Output per sensor in the mismatch condition — the denominator of the fold change. Should be near zero if the off state is truly off, *and only if no endogenous trigger is present*.', zh: '錯配條件下的每感測器輸出——也就是倍率變化的分母。若關閉狀態真的關著就該接近零，*而且前提是沒有內源性觸發存在*。' }],
              [{ en: 'Trigger-dependent activation', zh: '觸發依賴性啟動' }, { en: 'the bar', zh: '門檻' }, { en: 'Within each transfection, activation efficiency is greater in the matched than the mismatched condition.', zh: '在同一次轉染內，配對條件的啟動效率高於錯配條件。' }],
              [{ en: 'Statistically significant', zh: '統計上顯著' }, { en: 'the bar', zh: '門檻' }, { en: 'Three biological replicates completed **and** p < 0.05 on activation efficiency.', zh: '完成三個生物重複**且**啟動效率的 p < 0.05。' }]
            ],
            source: { en: 'Definitions quoted and condensed from the team\'s Results page.', zh: '定義引自並濃縮於該隊 Results 頁。' }
          }) +
          h.take({ en: 'The rule behind the rules', zh: '規則背後的規則' }, {
            en: '*"Flow cytometry runs acquired on different days are not directly comparable, because instrument settings, cell passage number and transfection efficiency all drift between sessions."* So **every match-versus-mismatch comparison is made within one transfection**. That one sentence is why their panel of 25 is readable at all, and it is free to copy.',
            zh: '*「不同日期取得的流式數據無法直接比較，因為儀器設定、細胞代數與轉染效率都會在不同批次之間漂移。」* 因此**每一組配對／錯配比較都在同一次轉染內完成**。就是這一句話讓他們 25 個感測器的矩陣讀得出東西，而這一句可以免費抄走。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 's-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'RADAR-Scout: six modules, and one of them overturned a published heuristic', zh: 'RADAR-Scout：六個模組，其中一個推翻了一條已發表的經驗法則' },
        lede: {
          en: 'The software is public at radar-scout.vercel.app, and it is built so that another team can point it at another disease.',
          zh: '這個軟體公開在 radar-scout.vercel.app，而且是為了讓別的團隊能把它指向另一種疾病而設計的。'
        },
        body:
          h.flow({
            title: { en: 'From a public dataset to a sensor worth building', zh: '從公開資料集到值得建構的感測器' },
            sub: { en: 'The pipeline Stanford runs before anyone touches a pipette.', zh: 'Stanford 在有人碰到移液器之前所跑的流程。' },
            stages: [
              { label: { en: 'Score three populations', zh: '為三個族群打分' }, sub: { en: 'P vs H vs B, per cell type', zh: '依細胞型別比較 P/H/B' }, tone: 'b',
                items: [{ en: '26 cohorts, 5 organs', zh: '26 個資料集、5 個器官' }, { en: '960,518 cells', zh: '960,518 顆細胞' }] },
              { label: { en: 'Check the isoform exists', zh: '確認該異構物存在' }, sub: { en: 'GTEx long-read: is the trigger sequence actually in fibroblasts?', zh: 'GTEx 長讀：觸發序列真的在纖維母細胞裡嗎？' }, tone: 'b' },
              { label: { en: 'Filter 7 M candidates', zh: '篩選 700 萬候選' }, sub: { en: 'Out-of-core, so the table never loads into memory', zh: '核外處理，整張表不進記憶體' }, tone: 'v',
                items: [{ en: '698 designs for ADAM12', zh: 'ADAM12 有 698 個設計' }, { en: '1,303 for COL11A1', zh: 'COL11A1 有 1,303 個' }] },
              { label: { en: 'Rank on structure', zh: '依結構排序' }, sub: { en: '19 ViennaRNA 2.7.2 predictors; folding ΔG replaces GC content', zh: '19 個 ViennaRNA 2.7.2 預測子；折疊 ΔG 取代 GC 含量' }, tone: 'g' },
              { label: { en: 'Simulate the experiment', zh: '模擬實驗' }, sub: { en: 'Five ODE models of delivery and editing', zh: '五個關於遞送與編輯的 ODE 模型' }, tone: 'g' }
            ],
            loop: { label: { en: 'flow cytometry results refit the ranking and the parameters', zh: '流式結果重新擬合排序與參數' } },
            caption: { en: 'Drawn by us from the team\'s Model page. Counts are the team\'s.', zh: '由我們依該隊 Model 頁繪製；數字為該隊所報。' }
          }) +
          h.h3({ en: '1 · Target selection, built against the technology', zh: '1 · 針對這個技術而設計的標靶選擇' }) +
          h.p({
            en: 'Conventional differential expression is **rejected on principle**, and the replacement is three populations scored against each other: **P** the pathological cell type, **H** the same cell type from healthy donors, **B** the bystander cell types in diseased tissue. P against H finds transcripts associated with disease; P against B asks whether they are specific to the cell you intend to hit. Cross-organ comparison of the top 300 genes per organ over five fibrosis types gave **1,136 distinct genes across 1,500 rank positions, of which 857 appear in only one organ** — fibrosis signatures are mostly organ-specific, which is itself a result.',
            zh: '傳統的差異表現分析被**從原理上否決**，取而代之的是三個族群互比：**P** 病變細胞型別、**H** 健康捐贈者的同一細胞型別、**B** 病變組織中的旁觀細胞型別。P 對 H 找出與疾病相關的轉錄本；P 對 B 則問這些轉錄本是否專屬於你打算打的那種細胞。對五種纖維化各取前 300 個基因做跨器官比較，1,500 個名次中出現 **1,136 個不同基因，其中 857 個只出現在一個器官** ——纖維化特徵大致上是器官專一的，這本身就是一個結果。'
          }) +
          h.h3({ en: '2 · Nineteen predictors, and the finding', zh: '2 · 十九個預測子，以及那個發現' }) +
          h.p({
            en: 'All 19 were computed with **ViennaRNA 2.7.2** (RNAfold, RNAplfold, RNAcofold) in six families: sequence composition, sensor secondary structure, sensor accessibility, trigger secondary structure, trigger accessibility, and sensor–trigger hybridisation. Correlated against the flow output, **sensor partition-function ΔG reached Spearman ρ = 0.62–0.63 while GC content — one of the published design criteria — sat near −0.2.** Folding free energy was then wired into RADAR-Scout as the ranking filter, so shortlisting is no longer sorted by GC content alone.',
            zh: '19 個預測子全部用 **ViennaRNA 2.7.2**（RNAfold、RNAplfold、RNAcofold）計算，分為六族：序列組成、感測器二級結構、感測器可及性、觸發二級結構、觸發可及性、以及感測器–觸發雜交。與流式輸出相關後，**感測器配分函數 ΔG 的 Spearman ρ 達 0.62–0.63，而 GC 含量——原本已發表的設計判準之一——只有約 −0.2。** 折疊自由能於是被寫進 RADAR-Scout 當作排序篩選，候選名單不再只按 GC 含量排。'
          }) +
          h.h3({ en: '3 · Five ODE models, because regression was not enough', zh: '3 · 五個 ODE 模型，因為回歸不夠用' }) +
          h.p({
            en: 'Linear regression on the best predictor gave only **Q² = 0.20** across the 25-sensor library, and reporter expression lagged transfection badly in primary fibroblasts. That is the stated reason for building a mechanistic framework instead: a shared lipoplex delivery cascade (attachment, wash-off, endocytosis, endosomal escape, endosome degradation, unpacking) adapted from Ligon, Leonhardt & Rädler (2014), plus a **stochastic multi-lipoplex occupancy** variant that tracks pits and endosomes by how many particles they hold.',
            zh: '用最佳預測子做線性回歸，在 25 個感測器上只有 **Q² = 0.20**，而在原代纖維母細胞中報告基因表現遠遠落後轉染時間。這就是他們明說改建機制模型的理由：一條共用的脂質複合體遞送級聯（附著、沖走、內吞、內體逃脫、內體降解、解包），改寫自 Ligon、Leonhardt 與 Rädler（2014），再加上一個**隨機多顆脂質複合體佔據**版本，依每個凹坑與內體含幾顆顆粒分別追蹤。'
          }) +
          h.tbl({
            cols: [{ t: '#', w: '6%', num: false }, { t: { en: 'Model', zh: '模型' }, w: '30%' }, { t: { en: 'The question it answers', zh: '它回答的問題' } }],
            rows: [
              ['1', { en: 'Plasmid nuclear entry (fitted by simulated annealing)', zh: '質體進核（以模擬退火擬合）' }, { en: 'How much plasmid reaches the nucleus, and how that depends on dose and cell division.', zh: '有多少質體進到核裡，以及這如何取決於劑量與細胞分裂。' }],
              ['2', { en: 'Single trigger, plasmid delivery', zh: '單一觸發、質體遞送' }, { en: 'The first experimental setup; the baseline everything else is compared against.', zh: '第一個實驗設定；其他一切的比較基準。' }],
              ['3', { en: 'Single trigger, RNA delivery', zh: '單一觸發、RNA 遞送' }, { en: 'Is delivering RNA directly faster, and how long does the response last?', zh: '直接遞送 RNA 是否更快，反應能持續多久？' }],
              ['4', { en: 'AND gate, plasmid delivery', zh: 'AND 閘、質體遞送' }, { en: 'The safety design: a sensor requiring two triggers at once.', zh: '安全設計：需要兩個觸發同時存在的感測器。' }],
              ['5', { en: 'AND gate, RNA delivery', zh: 'AND 閘、RNA 遞送' }, { en: 'The same safety design under the clinical delivery route.', zh: '同樣的安全設計，但走臨床上會用的遞送路徑。' }]
            ]
          }) +
          h.note({
            en: '**Model 1 is fitted, not assumed.** Three free parameters — p_entry, k_tx, k_sat — were optimised by simulated annealing in Python against Cohen et al.\'s internally standardised qPCR measurements of plasmid copies in isolated nuclei, giving **p_entry = 10.7 % per division, k_sat = 232 plasmids per nucleus, k_tx = 0.273 h⁻¹**. Nuclear entry is modelled as mitosis-gated with k_div = ln2 / T_doubling, and the write-up states plainly that **k_div is not the entry rate**, because not every cytoplasmic plasmid present at envelope breakdown gets captured.',
            zh: '**模型 1 是擬合出來的，不是假設的。** 三個自由參數——p_entry、k_tx、k_sat——用 Python 的模擬退火，對 Cohen 等人以內部標準化 qPCR 量測的「分離細胞核中質體拷貝數」做擬合，得到 **p_entry = 每次分裂 10.7%、k_sat = 每核 232 個質體、k_tx = 0.273 h⁻¹**。進核被建模為受分裂閘控，k_div = ln2 / T_doubling，而文中明白寫出 **k_div 不是進核速率**，因為核膜崩解時在細胞質裡的質體並非全都會被捕獲。'
          }) +
          h.h3({ en: '4 · The device, modelled from both directions', zh: '4 · 裝置，從兩個方向建模' }) +
          h.p({
            en: 'They started from a **DeSimone-lab** saRNA-LNP patch (8 × 5 mm, 16 needles in four rows, 0.5 mm base, 0.6 mm long) and lengthened the needles to **0.9 mm**, with the trade-off written out: keloid tissue is thicker and the dermal–epidermal junction has to be crossed, but needles longer than 1000 µm reach nerve endings and cause bleeding and inflammation. The nociceptor model says a 3.0 mm needle crosses **30.75× more nociceptors** and produces **4.46× more reported pain**. The second justification is mechanosensing: YAP/TAZ-driven collagen production is the keloid mechanism, and the **reticular** dermis fibroblasts are the stiffness-sensitive ones (Type I collagen, 100–20,000 Pa) versus **papillary** (Type III, sometimes below 1 Pa).',
            zh: '他們從 **DeSimone 實驗室**的 saRNA-LNP 貼片出發（8×5 mm、四排共 16 根針、底徑 0.5 mm、長 0.6 mm），把針長改為 **0.9 mm**，並把取捨寫清楚：瘢痕組織更厚、必須穿過表皮–真皮交界，但針長超過 1000 µm 會碰到神經末梢並造成出血與發炎。痛覺受器模型指出，3.0 mm 的針會穿過 **30.75 倍的痛覺受器**，病人回報疼痛增加 **4.46 倍**。第二個理由是機械感知：YAP/TAZ 驅動的膠原生成才是瘢痕機制，而對硬度敏感的是**網狀層**纖維母細胞（I 型膠原、100–20,000 Pa），而非**乳突層**（III 型膠原，有時低於 1 Pa）。'
          }) +
          h.p({
            en: 'The diffusion model then sets a deadline that comes from the drug rather than from the clinic: finite-element analysis with Fick\'s second law, Einstein–Stokes and Darcy\'s law (needle pressure), 1-D, D_eff = 1.57 × 10⁻¹⁴ m²/s over 2.5 mm of dermis — and because the LNP\'s PEG layer is gone in ≤6 h while bare mRNA has a half-life near 5 minutes, **the payload has about six hours to arrive**. Adding collagenase and applying pressure are tested inside the model as ways to meet it.',
            zh: '擴散模型接著設下一個來自藥物本身、而非診間的期限：以 Fick 第二定律、Einstein–Stokes 與 Darcy 定律（微針壓力）做有限元分析，一維、D_eff = 1.57×10⁻¹⁴ m²/s、跨越 2.5 mm 真皮——而由於 LNP 的 PEG 層在 6 小時內消失，裸 mRNA 半衰期又只有約 5 分鐘，**酬載大約只有六小時可以抵達**。模型內還測了加入膠原酶與施加壓力這兩種達成它的方法。'
          }) +
          h.p({
            en: 'Finally a **U-Net** segments a photograph of a scar and emits a 3D-printable STL, so the patch can be cut to one patient\'s geometry.',
            zh: '最後用 **U-Net** 分割疤痕照片並輸出可 3D 列印的 STL，讓貼片能依單一病人的幾何形狀製作。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 's-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Named limits, on their own wiki', zh: '他們自己 wiki 上寫出來的限制' },
        body:
          h.cards([
            { chips: [{ t: { en: 'not working yet', zh: '尚未跑通' }, k: 'a' }],
              h: { en: 'Transfecting primary fibroblasts', zh: '原代纖維母細胞的轉染' },
              p: { en: 'Stated as the hard part of the season. RNA delivery raised sensor expression in both fibroblast lines and in HEK293, but therapeutic output stayed low.', zh: '他們明說這是整季最難的一關。改用 RNA 遞送後，兩種纖維母細胞與 HEK293 的感測器表現都上升，但治療輸出仍然偏低。' } },
            { chips: [{ t: { en: 'built, not shown', zh: '已建、未成' }, k: 'a' }],
              h: { en: 'Self-amplifying RNA', zh: '自我擴增 RNA' },
              p: { en: 'Three VEEV replicase architectures designed and assembled; the wiki says the designs need further testing rather than claiming amplification.', zh: '設計並組裝了三種 VEEV 複製酶架構；wiki 寫的是這些設計還需要更多測試，而不是宣稱已達成擴增。' } },
            { chips: [{ t: { en: 'stated limitation', zh: '明列限制' }, k: 'r' }],
              h: { en: 'Only secondary structure, only reporters', zh: '只有二級結構、只有報告基因' },
              p: { en: 'Two limits they write themselves: the analysis covers RNA **secondary** structure only, with no 3-D RNA modelling; and the sensors analysed express reporters, not therapeutic payloads, which would add sequence and change the folding.', zh: '他們自己寫出的兩個限制：分析只涵蓋 RNA **二級**結構，沒有三維 RNA 建模；而被分析的感測器表達的是報告基因、不是治療酬載，後者會增加序列並改變折疊。' } },
            { chips: [{ t: { en: 'flagged assumption', zh: '標示過的假設' }, k: 'v' }],
              h: { en: 'The occupancy cap of 10', zh: '佔據上限 10' },
              p: { en: 'Inherited from the mRNA-lipoplex literature and never established for plasmid lipoplexes. They label it a model assumption to be calibrated against single-particle data, rather than a measurement.', zh: '這個上限沿用自 mRNA 脂質複合體文獻，對質體脂質複合體從未被證實。他們把它標為「待用單顆粒數據校正的模型假設」，而不是量測值。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 's-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Define the metrics once, at the top of the results page, and never re-explain them.** Eight definitions and two explicit bars for "this counts" turn 25 messy flow experiments into a readable table. This costs nothing and needs no equipment.', zh: '**在成果頁最上方把指標定義一次，之後絕不重複解釋。** 八個定義加上兩條「這才算成立」的明確門檻，就把 25 組雜亂的流式實驗變成一張讀得懂的表。這不花錢，也不需要任何設備。' },
            { en: '**Put the control in the same run as the sample, and say why.** "Different days are not comparable" is the reason their panel works; it is also the reason most student panels do not.', zh: '**把對照與樣本放在同一批次裡跑，並說出理由。** 「不同日期不可比」是他們的矩陣行得通的原因；也是多數學生矩陣行不通的原因。' },
            { en: '**Fit at least one parameter to published data instead of quoting it.** Simulated annealing against someone else\'s qPCR gives three numbers that are theirs, and it is the difference between a model and a diagram.', zh: '**至少把一個參數擬合到已發表數據上，而不是引用它。** 對別人的 qPCR 做模擬退火，就得到三個屬於他們自己的數字；這正是「模型」與「示意圖」的差別。' },
            { en: '**Report the parameter table with sources and a "still needs measuring" column.** 82 rows is not showing off; it is the only way a reader can tell which conclusions are load-bearing.', zh: '**把參數表連同出處與「仍待量測」一欄一起公開。** 82 列不是炫技，而是讀者能分辨哪些結論承重的唯一方法。' },
            { en: 'What we would **not** copy: the amount of the project that depends on reporters. Their own limitation section says the payload will change the folding, and the folding is their best predictor — so the main result may not transfer to the therapeutic construct.', zh: '我們**不會**抄的是：專案中有多少部分建立在報告基因上。他們自己的限制一節就寫到酬載會改變折疊，而折疊正是他們最好的預測子——所以主要結果未必能轉移到真正的治療構建體。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'Stanford won because the loop closes: the screen picks the genes, the lab builds exactly those, the flow data replaces a published heuristic, and the model that explains the lag is fitted to someone else\'s measurements rather than to hope.',
            zh: 'Stanford 之所以贏，是因為迴圈閉合了：篩選挑出基因、實驗室就做那些、流式數據取代了一條已發表的經驗法則，而解釋延遲的模型是擬合到別人的量測上，而不是擬合到願望上。'
          })
      });

      return out;
    }
  };
})(window);
