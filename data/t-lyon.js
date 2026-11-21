/* LYON — BioThetis. Top 10, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/lyon/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Sequence first, schedule after', zh: '先定序，再排實驗' },
        s: { en: 'Every plasmid aligned at Microsynth; frame-shifting single-bp deletions fixed by QuikChange', zh: '每個質體都在 Microsynth 比對；造成移碼的單鹼基缺失以 QuikChange 修正' }, tone: 'g' },
      { l: { en: 'De-confound the inheritance', zh: '把繼承下來的變數解開' },
        s: { en: 'Strain, vector+inducer and tag compared separately; equal cell equivalents per lane', zh: '菌株、載體＋誘導劑、標籤各自獨立比較；每個膠道上樣相同細胞當量' } },
      { l: { en: 'Settle the production route', zh: '定下生產路線' },
        s: { en: 'VNP15 vesicles vs cytoplasmic: FM4-64 showed vesicles, SDS-PAGE showed inclusion bodies', zh: 'VNP15 囊泡與細胞質路線對比：FM4-64 看到囊泡，SDS-PAGE 卻顯示包涵體' } },
      { l: { en: 'Express to a gate set in advance', zh: '依事先設好的閘表達' },
        s: { en: 'Microfluidizer → HisTrap on AKTA → PD-10 → Centricon → NanoDrop plus BCA', zh: 'Microfluidizer 破菌→AKTA 上 HisTrap→PD-10→Centricon→NanoDrop 加 BCA' } },
      { l: { en: 'Validate the assay, then judge', zh: '先驗證方法，才評斷構建體' },
        s: { en: 'Four plate-reading formats compared; six HCl calibration points give R² = 0.9979', zh: '比較四種讀盤方式；六個 HCl 校正點給出 R² = 0.9979' }, tone: 'g' },
      { l: { en: 'Bind, then cut the anchor off', zh: '先測結合，再把錨切掉' },
        s: { en: 'nanoDSF Kd 25.0 ± 4.9 mM; TEV cleavage, then nanoDSF on the bare CBM3a', zh: 'nanoDSF 測得 Kd 25.0 ± 4.9 mM；以 TEV 切開後再單獨測 CBM3a' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Can it even be cleaved?', zh: '它到底能不能被切？' },
        s: { en: 'Protenix on the 8SDC/8SDD scaffold: the barrier is attack geometry, not affinity', zh: '以 Protenix 在 8SDC/8SDD 骨架上建模：障礙是攻擊幾何，不是親和力' }, tone: 'r' },
      { l: { en: 'Design nine variants', zh: '設計九個變體' },
        s: { en: 'Structure-guided active-site mutations; which residues to change, and why', zh: '結構導引的活性位點突變；要改哪些殘基、理由為何' } },
      { l: { en: 'Generate binders', zh: '生成結合蛋白' },
        s: { en: 'BoltzGen 0.3.2: 10,000 candidates → 5 kept → 3 to the bench, in both orientations', zh: 'BoltzGen 0.3.2：10,000 個候選→留下 5 個→3 個上實驗桌，兩種方位都做' } },
      { l: { en: 'Model the column', zh: '為管柱建模' },
        s: { en: 'Packed-bed PDE with linear driving force and a Langmuir isotherm, MATLAB ode15s', zh: '填充床 PDE，搭配線性驅動力與 Langmuir 等溫式，用 MATLAB ode15s 求解' } },
      { l: { en: 'Reframe stability', zh: '重新定義穩定性目標' },
        s: { en: 'Lumry–Eyring: the design target is refolding rate against aggregation rate, not Tm', zh: 'Lumry–Eyring：設計目標是再折疊速率對聚集速率，而不是 Tm' }, tone: 't' }
    ],
    links: [
      { w: 3, d: 2, l: { en: 'BoltzGen hands 3 of 10,000 to the bench', zh: 'BoltzGen 把 10,000 中的 3 個交給實驗桌' }, up: true },
      { w: 5, d: 3, l: { en: 'the depletion assay caps q_max 185× below the placeholder', zh: '耗竭實驗把 q_max 上限壓到佔位值的 1/185' } },
      { w: 4, d: 4, l: { en: 'the design target became refolding, not Tm', zh: '設計目標改成再折疊，而不是 Tm' }, up: true }
    ]
  };

  PD.pages.lyon = {
    label: { en: 'LYON', zh: 'LYON' },
    title: { en: 'LYON — BioThetis', zh: 'LYON — BioThetis' },
    render: function (h) {
      var t = team('lyon');
      var out = h.teamhero(t, {
        h1: {
          en: 'The model said degradation would not work, so ==the project changed its mind before the bench did==.',
          zh: '模型判定降解行不通，於是==這個專案在實驗桌之前先改變了主意==。'
        },
        lede: {
          en: 'TFA is the smallest PFAS, it is in European tap water, and normal treatment does not remove it. Plan A was to destroy it with a fluoroacetate dehalogenase; the structural modelling said the barrier was attack geometry on a fully substituted carbon rather than affinity, and the project pivoted to capture — protein binders anchored to cellulose beads in a column, released by heat so the material is reusable. What makes this workflow worth copying is not the pivot, it is the bookkeeping: every design choice is a row with its alternative and the experiment that decided it, and every model parameter carries a label saying whether it was chosen, computed, or made up.',
          zh: 'TFA 是最小的 PFAS，存在於歐洲自來水中，而常規處理並不能去除它。A 計畫是用氟乙酸脫鹵酶把它分解掉；結構建模指出障礙在於全取代碳上的攻擊幾何、而不是親和力，於是專案轉向捕捉——把蛋白結合體錨定在管柱內的纖維素珠上，再以加熱釋放，使材料可重複使用。這套流程值得照抄的不是那次轉向，而是它的記帳方式：每個設計決定都是一列，附上替代方案與決定它的那個實驗；而每個模型參數都帶一個標籤，說明它是被選的、算出來的，還是編出來的。'
        },
        chips: [
          { t: { en: 'TFA, the smallest PFAS', zh: 'TFA，最小的 PFAS' }, k: 'b' },
          { t: { en: 'CBM3a cellulose anchor', zh: 'CBM3a 纖維素錨' }, k: 't' },
          { t: { en: 'BoltzGen de novo binders', zh: 'BoltzGen 從頭設計結合蛋白' }, k: 'v' },
          { t: { en: 'Packed-bed filter model', zh: '填充床濾床模型' }, k: 'g' },
          { t: { en: 'Decision-table engineering', zh: '決策表式工程' }, k: 'a' }
        ],
        stats: [
          { v: '15', l: { en: 'New constructs, all on one backbone and one cut-site pair', zh: '新構建體數，全部用同一骨架與同一對切位' } },
          { v: '117 mg/L', l: { en: 'Published yield for DAR3835, their best producer', zh: '產量最高者 DAR3835 的公開產量' } },
          { v: '25.0 mM', l: { en: 'Apparent Kd of the Ianassa N-term binder (± 4.9)', zh: 'Ianassa N 端結合體的表觀 Kd（± 4.9）' } },
          { v: '0.9979', l: { en: 'R² of the six-point HCl calibration behind the assay', zh: '支撐該檢測的六點 HCl 校正 R²' } },
          { v: '14.03', l: { en: 'BV50 of the filter, identical for every geometry tested', zh: '濾床的 BV50，所有測試幾何皆相同' } },
          { v: '185×', l: { en: 'How optimistic the placeholder capacity is, by their own measurement', zh: '依他們自己的量測，佔位容量值樂觀了多少倍' } }
        ]
      });

      out += h.toc([
        { id: 'ly-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'ly-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'ly-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'ly-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'ly-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'ly-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'ly-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'ly-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'One backbone, one cut-site pair, and both orientations of everything', zh: '一個骨架、一對切位，而且每樣東西都做兩種方位' },
        lede: {
          en: 'The design decisions on this project are almost all about making a later comparison legal. That is a different instinct from making a construct work.',
          zh: '這個專案的設計決定，幾乎全都是為了讓之後的某個比較在方法上站得住腳。這跟「讓一個構建體能動」是不同的直覺。'
        },
        body:
          h.p({
            en: 'All **15 new constructs** sit on the same vector: **pET-29b(+)** with KanR, T7 and IPTG, expressed in **BL21(DE3)** with TOP10 used for plasmid prep, and **NdeI/XhoI as the same cut-site pair for every insert** — each insert codon-optimised for BL21 and checked over its full length for internal NdeI or XhoI sites. The stated reason is the one that matters: if two proteins behave differently, the difference belongs to the proteins and not to the vector.',
            zh: '全部 **15 個新構建體**都放在同一個載體上：**pET-29b(+)**，帶 KanR、T7 與 IPTG 誘導，在 **BL21(DE3)** 中表達、以 TOP10 做質體製備，而且**每個插入片段都用同一對切位 NdeI/XhoI**——每段插入序列都針對 BL21 做密碼子最佳化，並全長檢查有無內部 NdeI 或 XhoI 切位。他們給出的理由正是關鍵：如果兩個蛋白表現不同，那個差異要屬於蛋白、而不是屬於載體。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'anchor choice', zh: '錨的選擇' }, k: 'b' }],
              h: { en: 'CBM3a, because the column has to hold', zh: '選 CBM3a，因為管柱必須抓得住' },
              p: { en: 'The anchor is **CBM3a** from the CipA scaffoldin of *C. thermocellum* — family III, binds crystalline cellulose tightly — chosen over **CBM1**, which is family I and reversible, released by water. The reason is operational: TFA cycles on and off the column many times, and the binder has to still be there.', zh: '錨選的是 *C. thermocellum* CipA 支架蛋白的 **CBM3a**——家族 III、與結晶纖維素結合緊密——而不是 **CBM1**：後者屬家族 I、結合可逆，會被水釋放。理由是操作上的：TFA 會在管柱上反覆吸附與脫附，而結合體必須還留在原位。' } },
            { chips: [{ t: { en: 'built so it can be attributed', zh: '為了能歸因而設計' }, k: 'v' }],
              h: { en: 'A TEV site in every fusion, on purpose', zh: '每個融合蛋白裡都放一個 TEV 切位，是故意的' },
              p: { en: 'Every fusion carries a **TEV site between anchor and binder**, specifically so that a measured property can later be assigned to the binder rather than to the fusion. The His6 tag is placed at the terminus **opposite** the anchor, so affinity purification cannot compete with cellulose binding.', zh: '每個融合蛋白都在**錨與結合體之間放一個 TEV 切位**，目的就是讓之後量到的性質能被歸給結合體、而不是歸給融合蛋白。His6 標籤放在與錨**相對**的那一端，讓親和層析不會跟纖維素結合互相競爭。' } },
            { chips: [{ t: { en: 'unpredictable, so both', zh: '無法預測，所以兩種都做' }, k: 't' }],
              h: { en: 'Anchor position was not predicted, it was measured', zh: '錨的位置不是預測出來的，是量出來的' },
              p: { en: 'Because the right end for the anchor could not be predicted, **both orientations were built for every binder** — N-term: CBM3a-KEPGG linker-TEV-binder-His6; C-term: His6-binder-TPVSG-TEV-CBM3a — and the measurement decides. All six are in the Registry.', zh: '因為錨該接在哪一端無法預測，所以**每個結合體都做了兩種方位**——N 端版：CBM3a–KEPGG 連接子–TEV–結合體–His6；C 端版：His6–結合體–TPVSG–TEV–CBM3a——由量測來決定。六個全部登錄在 Registry。' } },
            { chips: [{ t: { en: 'inherited, then separated', zh: '繼承下來，然後拆開' }, k: 'g' }],
              h: { en: 'Three comparisons, because one could not separate three variables', zh: '做三個比較，因為一個比較分不開三個變數' },
              p: { en: 'The 2025 team handed down a strain, a vector with an inducer, and a tag, entangled in one claim. LYON ran **three separate comparisons — strain alone, vector plus inducer alone, tag alone** — because a single comparison cannot de-confound three variables. Tagless beat VNP15.', zh: '2025 年的團隊交下來的是一株菌、一個帶誘導劑的載體，以及一個標籤，三者糾結在同一個結論裡。LYON 因此跑了**三個獨立比較——只比菌株、只比載體加誘導劑、只比標籤**——因為單一比較無法把三個變數解耦。結果是無標籤版勝過 VNP15。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'ly-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Thirteen numbered blocks on one side, five models on the other', zh: '一邊十三個編號區塊，另一邊五個模型' },
        lede: {
          en: 'The wet lab is organised as thirteen blocks, each with an objective, what was done, and its controls, and each tagged with the axis it serves. The swimlane below condenses them into the six that change what happens next.',
          zh: '濕式流程被編成十三個區塊，每個都寫出目標、做了什麼、以及對照，並標註它服務的軸線。下面的泳道把它們濃縮成真正改變後續走向的六個。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'BioThetis: the two lanes and the three handoffs', zh: 'BioThetis：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Design, Results, Model and Contribution pages.', zh: '由我們依該隊 Design、Results、Model、Contribution 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'ly-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Every block names its controls, and two blocks exist only to protect the others', zh: '每個區塊都寫出自己的對照，而其中兩個區塊只為了保護其他區塊而存在' },
        lede: {
          en: 'Every block names the protocol numbers (P01–P25) from the lab book. The order below is the order that matters: verification, de-confounding, and assay validation all come before any construct is judged.',
          zh: '每個區塊都標出實驗記錄本中的協議編號（P01–P25）。下面的順序才是重點：序列驗證、變數解耦與方法驗證，全都排在評斷任何構建體之前。'
        },
        body:
          h.phases([
            { h: { en: 'Sequence verification as a gate, before anything is scheduled', zh: '把序列驗證當成閘，排任何實驗之前先過' },
              p: { en: 'Sequencing was outsourced to Microsynth and every plasmid was aligned against its expected sequence before it entered the plan.', zh: '定序外包給 Microsynth，每個質體在進入實驗計畫之前都要與預期序列比對。' },
              items: [
                { en: 'Several inherited plasmids carried **single-bp deletions that shift the frame** — the kind of error that produces a clean-looking gel and a meaningless result.', zh: '幾個繼承來的質體帶有**造成移碼的單鹼基缺失**——這種錯誤會給出乾淨漂亮的膠圖，和一個毫無意義的結果。' },
                { en: 'Their own new VNP15 orders also came back wrong, and the cause is published as **a specification error on their side**, not a vendor error.', zh: '他們自己新訂的 VNP15 也拿回錯的序列，而原因被公開寫成**他們這邊規格寫錯**，不是供應商的錯。' },
                { en: 'Fixed by **QuikChange** and re-sequenced; irreconcilable plasmids were set aside rather than used.', zh: '以 **QuikChange** 修正並重新定序；無法修好的質體就擱置，而不是拿來用。' }
              ] },
            { h: { en: 'Re-test the inherited claim in the system where it was made', zh: '在當初做出該主張的系統裡重測它' },
              p: { en: 'The previous team had claimed MG1655 outperforms BL21(DE3). LYON re-ran it: both strains, 2 h / 4 h / overnight, 20 and 100 ng/mL aTc, pellet against supernatant.', zh: '前一屆團隊曾主張 MG1655 優於 BL21(DE3)。LYON 重跑了一次：兩株菌、2 小時／4 小時／隔夜、20 與 100 ng/mL aTc、菌體與上清各自比較。' },
              items: [
                { en: '**Equal cell equivalents per lane** and an uninduced control on every gel — without both, a strain comparison measures growth, not expression.', zh: '**每個膠道上樣相同的細胞當量**，而且每張膠都有未誘導對照——少了這兩項，菌株比較量到的是生長、不是表達。' },
                { en: 'Conclusion published as a null: no consistent difference, and **strain and vector were confounded**, so the decision was taken on documented behaviour instead of on this comparison.', zh: '結論以空結果公開：沒有一致的差異，而且**菌株與載體互相混淆**，因此最後的決定是依既有文件記載的行為做的，不是依這個比較做的。' }
              ],
              done: { en: 'A negative result that is allowed to be negative: the inherited claim is neither confirmed nor quietly reused.', zh: '一個被允許是否定的否定結果：那個繼承來的主張既沒被證實，也沒被默默沿用。' } },
            { h: { en: 'Rescue the inducer first, then change everything', zh: '先試著救誘導劑，不行才全部換掉' },
              p: { en: 'Before abandoning aTc induction they tried to rescue it — several concentrations, several timepoints, and old against freshly prepared inducer stock to rule out reagent degradation.', zh: '在放棄 aTc 誘導之前，他們先試著救它——好幾種濃度、好幾個時間點，並以舊的與新配的誘導劑母液對比，排除試劑降解的可能。' },
              items: [
                { en: 'Only then did the whole collection move to **pET-29b(+) with T7 and IPTG**, at the cost of a full re-synthesis order and several weeks.', zh: '直到那之後，整組構建體才搬到 **pET-29b(+)、T7 與 IPTG**，代價是整批重新合成的訂單與好幾個星期。' },
                { en: 'The production route was decided the same way: VNP15 vesicular export against cytoplasmic expression. **FM4-64 microscopy showed vesicles, but SDS-PAGE through the purification showed the protein in inclusion bodies.**', zh: '生產路線也是用同樣方式決定的：VNP15 囊泡外送對上細胞質表達。**FM4-64 顯微鏡看到了囊泡，但沿著純化流程做的 SDS-PAGE 顯示蛋白在包涵體裡。**' }
              ],
              done: { en: 'The rule they wrote down from it: **no production route is adopted on a qualitative readout.**', zh: '他們由此寫下的規則：**不以定性讀出結果決定採用哪條生產路線。**' } },
            { h: { en: 'Express and purify against a gate set in advance', zh: '依事先設好的閘表達與純化' },
              p: { en: 'The gate was fixed before the work: soluble, and enough material for full characterisation from a single batch. Microfluidizer lysis → HisTrap on an AKTA → PD-10 desalting → Centricon → NanoDrop plus BCA.', zh: '閘在工作開始前就定好：必須可溶，而且單一批次的量足以完成完整特性分析。Microfluidizer 破菌→AKTA 上 HisTrap→PD-10 去鹽→Centricon 濃縮→NanoDrop 加 BCA。' },
              items: [
                { en: 'Yields published per construct: **DAR3835 at 117 mg/L**, **RPA1163 at 14 mg/L**, six binders at **52.5–97.8 mg/L**, and seven of nine enzyme variants at **11.8–168.2 mg/L**.', zh: '逐一構建體公開產量：**DAR3835 為 117 mg/L**、**RPA1163 為 14 mg/L**、六個結合體為 **52.5–97.8 mg/L**，九個酵素變體中有七個為 **11.8–168.2 mg/L**。' },
                { en: '**A0A6 came back entirely as inclusion bodies and was dropped; Eurydice and Sao were insoluble and were dropped, not rescued.** The gate was applied rather than renegotiated.', zh: '**A0A6 全部是包涵體，被捨棄；Eurydice 與 Sao 不可溶，同樣被捨棄、而不是設法搶救。** 閘是被執行的，不是被重新談判的。' }
              ] },
            { h: { en: 'Validate the assay before judging a single construct', zh: '在評斷任何一個構建體之前，先驗證方法' },
              p: { en: 'Two assays, both validated as objects in their own right before any protein was ranked with them.', zh: '兩個檢測方法，在被用來為任何蛋白排名之前，都先被當成獨立的對象驗證過。' },
              items: [
                { en: 'Phenol-red defluorination: the dye was moved out of the buffer and added per well at a fixed final concentration, and **four plate-reading formats were compared — no lid, through the lid, from below, and sealed with film — because the substrates are volatile.**', zh: '酚紅去氟檢測：把染劑從緩衝液中移出、改為每孔以固定終濃度加入，並**比較了四種讀盤方式——不蓋蓋子、透過蓋子、從下方讀、以封膜密封——因為基質具揮發性。**' },
                { en: 'Calibrated against six HCl points at **R² = 0.9979**, which converts absorbance into **nmol of protons** rather than into arbitrary units.', zh: '以六個 HCl 點校正，**R² = 0.9979**，使吸光值換算成**質子的 nmol 數**，而不是任意單位。' },
                { en: 'nanoDSF: standard against premium capillaries (no difference), a buffer blank every run, and a **per-protein signal check that eliminated RPA1163 before it could mislead them** — it showed no transition and no Tm. Everything in duplicate, calibration in triplicate.', zh: 'nanoDSF：標準毛細管與高階毛細管對比（無差異）、每次都有緩衝液空白，以及**逐一蛋白的訊號檢查，在 RPA1163 誤導他們之前就把它剔除**——它沒有轉變、也沒有 Tm。所有實驗兩重複，校正三重複。' }
              ] },
            { h: { en: 'Measure the binding, then take the anchor off and measure again', zh: '量完結合，再把錨切掉重量一次' },
              p: { en: 'Blocks 7 to 13 cover DAR3835 defluorination activity, TFA recognition by thermal shift, the nine active-site variants named after river gods (catalytic) and Nereids (non-catalytic), cellulose anchoring, thermal reversibility and crystallography.', zh: '第 7 到 13 區塊涵蓋 DAR3835 的去氟活性、以熱位移偵測 TFA 辨識、九個以河神（有催化活性）與涅瑞伊得斯（無催化活性）命名的活性位點變體、纖維素錨定、熱可逆性，以及結晶學。' },
              items: [
                { en: 'De novo binders gave an apparent **Kd = 25.0 ± 4.9 mM for Ianassa N-term and 24.9 ± 4.0 mM for the C-term** version by nanoDSF.', zh: '從頭設計的結合體以 nanoDSF 測得表觀 **Kd：Ianassa N 端版 25.0 ± 4.9 mM、C 端版 24.9 ± 4.0 mM**。' },
                { en: 'Then the control most teams would skip: **is the TFA effect carried by the binder or by the CBM3a anchor? TEV cleavage, then nanoDSF on the cleaved CBM alone.** This is what the TEV site was designed in for.', zh: '接著是多數團隊會跳過的那個對照：**TFA 的效應到底是結合體帶來的，還是 CBM3a 錨帶來的？以 TEV 切開，再單獨對切下來的 CBM 做 nanoDSF。** 這正是當初在設計裡放入 TEV 切位的用途。' },
                { en: 'The write-up closes with a section titled **"What is still open"** rather than with a conclusion.', zh: '整份記錄以一節標題為 **「What is still open」（還沒解決的部分）** 作結，而不是以結論作結。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'ly-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The assay is validated as an object before it is used as a judge', zh: '方法先被當成對象驗證，才被當成裁判使用' },
        lede: {
          en: 'Everything in this table is cheap. What it buys is the right to say that a difference between two constructs belongs to the constructs.',
          zh: '這張表裡的每一項都很便宜。它買到的是「兩個構建體之間的差異確實屬於這兩個構建體」這句話的資格。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '22%' },
              { t: { en: 'The control or check', zh: '對照或檢查' }, w: '40%' },
              { t: { en: 'What it bought them', zh: '它換到了什麼' } }
            ],
            rows: [
              [{ en: 'Defluorination assay', zh: '去氟檢測' },
               { en: 'Four plate-reading formats compared (no lid, through lid, from below, sealed film), because the substrates are volatile; dye added per well at a fixed final concentration instead of being carried in the buffer.', zh: '比較四種讀盤方式（不蓋蓋子、透過蓋子、從下方讀、封膜密封），因為基質具揮發性；染劑改為每孔以固定終濃度加入，而非溶在緩衝液中。' },
               { en: 'Numbers that are not a function of how the lid was handled on the day.', zh: '得到的數字不會取決於那天蓋子是怎麼處理的。' }],
              [{ en: 'The same assay, calibrated', zh: '同一檢測的校正' },
               { en: 'Six HCl points at R² = 0.9979, in triplicate.', zh: '六個 HCl 點、R² = 0.9979，三重複。' },
               { en: 'Absorbance converted into nmol of protons — a unit another lab can reproduce, rather than an arbitrary signal.', zh: '把吸光值換算成質子 nmol 數——一個別的實驗室可以重現的單位，而不是任意訊號。' }],
              [{ en: 'nanoDSF', zh: 'nanoDSF' },
               { en: 'Standard against premium capillaries (no difference found), a buffer blank every run, and a per-protein signal check before any ranking.', zh: '標準與高階毛細管對比（未發現差異）、每次都有緩衝液空白，並在任何排名之前先做逐一蛋白的訊號檢查。' },
               { en: 'RPA1163 was eliminated before it could mislead them: no transition, no Tm, therefore no comparison.', zh: 'RPA1163 在誤導他們之前就被剔除：沒有轉變、沒有 Tm，因此不列入比較。' }],
              [{ en: 'Strain comparison', zh: '菌株比較' },
               { en: 'Equal cell equivalents per lane, an uninduced control on every gel, two induction levels (20 and 100 ng/mL aTc) and three timepoints.', zh: '每個膠道相同細胞當量、每張膠都有未誘導對照、兩個誘導濃度（20 與 100 ng/mL aTc）與三個時間點。' },
               { en: 'The right to publish a null — and to say that strain and vector were confounded, so this comparison could not decide.', zh: '取得公開「空結果」的資格——並說明菌株與載體互相混淆，因此這個比較無法做出決定。' }],
              [{ en: 'Binder attribution', zh: '結合體歸因' },
               { en: 'TEV cleavage, then nanoDSF on the cleaved CBM3a alone, asking whether the TFA effect is the binder\'s or the anchor\'s.', zh: '以 TEV 切開，再單獨對切下來的 CBM3a 做 nanoDSF，問 TFA 的效應是結合體的還是錨的。' },
               { en: 'A Kd that can be attributed to a binder rather than to a fusion — which is why the TEV site was in the design from the start.', zh: '一個可以歸給結合體、而不是歸給融合蛋白的 Kd——這也是為什麼 TEV 切位從一開始就在設計裡。' }],
              [{ en: 'Filter model parameters', zh: '濾床模型參數' },
               { en: 'Every parameter labelled Design choice / Computed / Placeholder / Operating range, plus an assumption table listing when each assumption fails.', zh: '每個參數都標成「設計選擇／計算得出／佔位值／操作範圍」，並附一張假設表列出每個假設何時失效。' },
               { en: 'A reader can tell which conclusions are load-bearing without re-deriving the model.', zh: '讀者不必重推整個模型，就能分辨哪些結論在承重。' }]
            ],
            source: { en: 'Condensed from the team\'s Results, Design and Model pages.', zh: '濃縮自該隊 Results、Design 與 Model 頁。' }
          }) +
          h.take({ en: 'The rule that makes their numbers comparable', zh: '讓他們的數字可比的規則' }, {
            en: '*"No production route is adopted on a qualitative readout."* They wrote it after FM4-64 microscopy showed vesicles and the SDS-PAGE through the purification showed inclusion bodies — a pretty image and a wrong conclusion. Paired with equal cell equivalents per lane, an uninduced control on every gel, and a per-protein signal check that threw out RPA1163 before it could be ranked, it is the reason a yield of 117 mg/L and a yield of 14 mg/L on this page can be read side by side.',
            zh: '*「不以定性讀出結果決定採用哪條生產路線。」* 這條規則是在 FM4-64 顯微鏡看到囊泡、而沿純化流程做的 SDS-PAGE 卻顯示包涵體之後寫下的——一張漂亮的影像，加上一個錯的結論。再配上每個膠道相同細胞當量、每張膠都有未誘導對照，以及在 RPA1163 被排名之前就把它剔除的逐一蛋白訊號檢查，這就是這一頁上 117 mg/L 與 14 mg/L 兩個產量能夠並排閱讀的理由。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'ly-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Five models, and the first one killed the original project', zh: '五個模型，而第一個殺掉了原本的專案' },
        lede: {
          en: 'Each model is published with the decision it produced and how it was tested. Two of the five produced negative results, and those two are named as the results that shaped the project.',
          zh: '每個模型都連同「它產生了什麼決定」與「它是怎麼被檢驗的」一起公開。五個裡有兩個給出否定結果，而這兩個被明白寫成「塑造了整個專案」的結果。'
        },
        body:
          h.flow({
            title: { en: 'From "can we destroy TFA?" to "how long does a column last?"', zh: '從「我們能不能把 TFA 分解掉？」到「一根管柱能用多久？」' },
            sub: { en: 'The first stage returned no, and the rest of the project is the answer to that no.', zh: '第一階段的答案是「不行」，而專案剩下的部分就是對那個「不行」的回應。' },
            stages: [
              { label: { en: 'Can it even be cleaved?', zh: '它到底能不能被切？' }, sub: { en: 'Protenix on the 8SDC/8SDD scaffold', zh: '以 Protenix 在 8SDC/8SDD 骨架上建模' }, tone: 'r',
                items: [{ en: 'the barrier is attack geometry on a fully substituted carbon', zh: '障礙是全取代碳上的攻擊幾何' }, { en: 'answer: no → pivot to capture', zh: '答案：不行→轉向捕捉' }] },
              { label: { en: 'Design the variants', zh: '設計變體' }, sub: { en: 'Structure-guided active-site mutations', zh: '結構導引的活性位點突變' }, tone: 'b',
                items: [{ en: 'nine variants, named for river gods and Nereids', zh: '九個變體，以河神與涅瑞伊得斯命名' }] },
              { label: { en: 'Generate the binders', zh: '生成結合蛋白' }, sub: { en: 'BoltzGen 0.3.2', zh: 'BoltzGen 0.3.2' }, tone: 'v',
                items: [{ en: '10,000 candidates → 5 kept → 3 built', zh: '10,000 個候選→留 5 個→做 3 個' }, { en: 'both orientations for each', zh: '每個都做兩種方位' }] },
              { label: { en: 'Model the column', zh: '為管柱建模' }, sub: { en: 'Packed-bed PDE, LDF uptake, Langmuir isotherm', zh: '填充床 PDE、線性驅動力吸附、Langmuir 等溫式' }, tone: 'g',
                items: [{ en: 'MATLAB ode15s, verified four ways', zh: 'MATLAB ode15s，以四種方式驗證' }, { en: 'BV50 = 14.03 for every geometry tested', zh: '所有測試幾何的 BV50 皆為 14.03' }] },
              { label: { en: 'Reframe stability', zh: '重新定義穩定性' }, sub: { en: 'Lumry–Eyring analysis of thermal unfolding', zh: '以 Lumry–Eyring 分析熱變性' }, tone: 't',
                items: [{ en: 'the target is refolding rate against aggregation rate', zh: '目標是再折疊速率對聚集速率' }, { en: 'not Tm', zh: '不是 Tm' }] }
            ],
            loop: { label: { en: 'the measured capacity upper bound sends q_max back to the filter model', zh: '量到的容量上限把 q_max 送回濾床模型' } },
            caption: { en: 'Drawn by us from the team\'s Model page. Every count, tool version and number is the team\'s.', zh: '由我們依該隊 Model 頁繪製；所有數量、工具版本與數字皆為該隊所報。' }
          }) +
          h.h3({ en: '1 · The model that produced the pivot', zh: '1 · 產生轉向的那個模型' }) +
          h.p({
            en: 'A structural model of **DAR3835 with TFA**, built with **Protenix** on the 8SDC/8SDD scaffold, returned the decision the whole project rests on: **no.** The reason is specific and is the useful part — the barrier is not affinity but **attack geometry on a fully substituted carbon**. TFA has no hydrogen to replace, so the chemistry a fluoroacetate dehalogenase performs has nowhere to land. The team states the generalisation plainly as a negative result: TFA cleavage with this enzyme family is unlikely.',
            zh: '以 **Protenix** 在 8SDC/8SDD 骨架上建出的 **DAR3835 與 TFA** 結構模型，給出了整個專案所倚賴的那個決定：**不行。** 理由很具體，而這正是有用的部分——障礙不在親和力，而在**全取代碳上的攻擊幾何**。TFA 沒有可被取代的氫，所以氟乙酸脫鹵酶所做的那種化學反應根本無處落腳。團隊把這個推廣結論直接寫成一個否定結果：以這一族酵素切開 TFA 不太可能成功。'
          }) +
          h.h3({ en: '2 · BoltzGen, with the funnel published', zh: '2 · BoltzGen，並公開整條漏斗' }) +
          h.p({
            en: 'De novo binders were generated with **BoltzGen 0.3.2**: **10,000 candidates, 5 kept, 3 taken to the bench**, each in both anchor orientations. The second negative result of the project sits right here and is stated rather than buried: **in silico affinity scoring did not beat the wild type, so no design was selected on it.** The three that were built were built to be measured, not because a score said they would work.',
            zh: '從頭設計的結合體以 **BoltzGen 0.3.2** 生成：**10,000 個候選、留下 5 個、3 個上實驗桌**，而且每個都做兩種錨方位。專案的第二個否定結果就在這裡，而且是寫出來、不是藏起來：**電腦上的親和力評分沒有勝過野生型，所以沒有任何設計是靠它被選上的。** 那三個被做出來的，是為了被量測而做，不是因為分數說它們會成功。'
          }) +
          h.h3({ en: '3 · The filter model, and the model it replaced', zh: '3 · 濾床模型，以及它取代掉的那個模型' }) +
          h.p({
            en: 'The first attempt followed individual molecules with a **Langevin equation**. It was **set aside and kept in the write-up**, with the reason given: roughly **10¹⁵ TFA molecules** pass through a real filter, so a per-molecule model cannot reach the question being asked. The replacement is a continuum packed-bed model in two fields — C(z,t) in the water and q(z,t) on the beads: **ε ∂C/∂t + u_s ∂C/∂z = ε D_L ∂²C/∂z² − ρ_b ∂q/∂t**, with a **linear-driving-force** uptake ∂q/∂t = k_LDF (q_eq(C) − q), where q_eq is the equilibrium loading from a **Langmuir** isotherm q_eq = q_max K_L C/(1 + K_L C) with K_L = 1/Kd. A Danckwerts inlet condition, zero gradient at the outlet, an empty bed at t = 0, finite differences and a stiff solver (**MATLAB ode15s**).',
            zh: '第一次嘗試是用 **Langevin 方程式**追蹤個別分子。它被**擱置、但留在文件裡**，並附上理由：真實濾床中大約有 **10¹⁵ 個 TFA 分子**通過，所以逐分子模型到不了他們要問的那個問題。取而代之的是一個雙場的連續體填充床模型——水中的 C(z,t) 與珠上的 q(z,t)：**ε ∂C/∂t + u_s ∂C/∂z = ε D_L ∂²C/∂z² − ρ_b ∂q/∂t**，吸附採**線性驅動力** ∂q/∂t = k_LDF (q_eq(C) − q)，其中 q_eq 是平衡吸附量，由 **Langmuir** 等溫式 q_eq = q_max K_L C/(1 + K_L C) 給出，且 K_L = 1/Kd。入口用 Danckwerts 條件、出口梯度為零、t = 0 時床體為空，以有限差分搭配剛性求解器（**MATLAB ode15s**）計算。'
          }) +
          h.p({
            en: 'The reference case is an actual piece of equipment: **L = 1.50 m, D = 0.80 m, V = 0.75 m³, Q = 10 m³/h, u_s = 5.5 mm/s, inlet 1–10 µg/L TFA, EBCT 4.5 min**, with outputs of a breakthrough curve, **BV10 and BV50**, EBCT, a bed Péclet number around 5000 and a Damköhler number around 310. It is **verified four ways**: against the analytical limit, by grid convergence, by numerical mass balance (closing to better than **0.03 %** after two bed volumes), and by an **independent re-implementation**. And the result is a closed-form rule: **BV50 = ε + ρ_b q_max K_L/(1 + K_L C0) = 14.03 for every geometry tested** — meaning that what the filter holds, not how it is shaped, sets how long it lasts.',
            zh: '參考案例是一台真實的設備：**L = 1.50 m、D = 0.80 m、V = 0.75 m³、Q = 10 m³/h、u_s = 5.5 mm/s、進水 TFA 1–10 µg/L、EBCT 4.5 分鐘**，輸出包括貫穿曲線、**BV10 與 BV50**、EBCT、床體 Péclet 數約 5000 與 Damköhler 數約 310。它用**四種方式驗證**：對照解析極限、網格收斂、數值質量平衡（兩個床體積之後閉合到優於 **0.03%**），以及一次**獨立重新實作**。而結果是一條封閉形式的規則：**BV50 = ε + ρ_b q_max K_L/(1 + K_L C0) = 14.03，所有測試過的幾何都一樣**——意思是決定壽命的是濾床能抓住多少，而不是它長成什麼形狀。'
          }) +
          h.warn({
            en: 'The model\'s own status is printed at the top of it: *"we did not manage to finalise and exploit it as we wanted."* The reference **q_max of 25 mg/g is labelled a placeholder** against a **measured upper bound of 0.135 mg/g** — about **185× optimistic** — and **K_L is labelled "placeholder, not measured"**. The assumption table lists when each assumption fails: narrow columns, multilayer binding, short contact times, fouling, and competing anions in real water. There is a Reproducibility section. We have put this in a warning box because the BV50 = 14.03 result is attractive and should not be quoted without the sentence above it.',
            zh: '這個模型把自己的狀態印在最上面：*「我們沒有成功把它完成並按原本希望的方式運用。」* 參考值 **q_max = 25 mg/g 被標為佔位值**，而他們**量到的上限是 0.135 mg/g**——大約**樂觀了 185 倍**——而 **K_L 被標為「佔位值，未量測」**。假設表列出每個假設何時失效：窄管柱、多層吸附、接觸時間過短、積垢，以及真實水體中的競爭陰離子。文件另有「可重現性」一節。我們把這段放進警示框，是因為 BV50 = 14.03 這個結果很吸引人，而它不該在沒有上面那句話的情況下被引用。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'CAPACITY', zh: '容量' },
            title: { en: 'The placeholder capacity against their own measured upper bound', zh: '佔位容量值與他們自己量到的上限' },
            sub: { en: 'Log scale. Both numbers come from the team, and so does the label that one of them is a placeholder.', zh: '對數刻度。兩個數字都來自該隊，「其中一個是佔位值」這個標註也是他們自己寫的。' },
            data: [
              { label: { en: 'q_max in the reference case (placeholder)', zh: '參考案例中的 q_max（佔位值）' }, v: 25, note: { en: 'labelled a placeholder in the parameter table, not a measurement', zh: '在參數表中被標為佔位值，不是量測值' } },
              { label: { en: 'Measured upper bound', zh: '量測得到的上限' }, v: 0.135, note: { en: 'about 185× below the placeholder used by the filter model', zh: '約為濾床模型所用佔位值的 1/185' } }
            ],
            opts: { unit: { en: 'mg/g', zh: 'mg/g' }, log: true, xlabel: { en: 'capacity, mg of TFA per g of material (log scale)', zh: '容量，每公克材料可吸附的 TFA 毫克數（對數刻度）' } },
            caption: { en: 'Plotted by us from the parameter table on the team\'s Model page.', zh: '由我們依該隊 Model 頁的參數表繪製。' }
          }) +
          h.h3({ en: '4 · Lumry–Eyring, which changed what the thermal assay is for', zh: '4 · Lumry–Eyring，它改變了熱檢測的用途' }) +
          h.p({
            en: 'The reusable-material requirement is a thermal cycle, so stability matters — but the **Lumry–Eyring** analysis of thermal unfolding moved the design target off the obvious number. The target is the **refolding rate against the aggregation rate, not Tm**. A protein with a high Tm that aggregates on the way back down is useless in a column that is heated to release its cargo, and this model is what makes that statement quantitative.',
            zh: '「材料可重複使用」這個需求本身就是一個熱循環，所以穩定性很重要——但對熱變性所做的 **Lumry–Eyring** 分析，把設計目標從那個最顯而易見的數字上移開了。目標是**再折疊速率對聚集速率，而不是 Tm**。一個 Tm 很高、但降溫途中會聚集的蛋白，在一根靠加熱釋放吸附物的管柱裡毫無用處；而這個模型就是讓這句話變得可量化的東西。'
          }) +
          h.kv([
            [{ en: 'Model 1 — packed-bed transport', zh: '模型 1 — 填充床傳輸' }, { en: 'Decision: geometry is a free choice; affinity and capacity set lifetime.', zh: '決定：幾何形狀可以自由選擇；真正決定壽命的是親和力與容量。' }],
            [{ en: 'Model 2 — DAR3835 with TFA (Protenix)', zh: '模型 2 — DAR3835 與 TFA（Protenix）' }, { en: 'Decision: no. The barrier is attack geometry on a fully substituted carbon, not affinity — pivot from degradation to capture.', zh: '決定：不行。障礙是全取代碳上的攻擊幾何、而非親和力——從降解轉向捕捉。' }],
            [{ en: 'Model 3 — structure-guided variant design', zh: '模型 3 — 結構導引的變體設計' }, { en: 'Decision: which residues to mutate, giving the nine variants.', zh: '決定：要突變哪些殘基，由此產生九個變體。' }],
            [{ en: 'Model 4 — BoltzGen 0.3.2 de novo binders', zh: '模型 4 — BoltzGen 0.3.2 從頭設計結合蛋白' }, { en: 'Decision: 10,000 candidates down to 5 kept and 3 built, in both orientations — but not selected on affinity score, which did not beat the wild type.', zh: '決定：10,000 個候選縮到留下 5 個、做出 3 個，兩種方位都做——但不是依親和力評分選的，因為那個評分沒有勝過野生型。' }],
            [{ en: 'Model 5 — Lumry–Eyring thermal analysis', zh: '模型 5 — Lumry–Eyring 熱分析' }, { en: 'Decision: the design target is refolding rate against aggregation rate, not Tm.', zh: '決定：設計目標是再折疊速率對聚集速率，而不是 Tm。' }]
          ])
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'ly-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'The negatives are the project, not an appendix to it', zh: '否定結果就是這個專案本身，不是它的附錄' },
        lede: {
          en: 'Two negative results are named by the team as the results that shaped the project. A third category — abandoned models and dropped constructs — is kept in the record rather than cleaned out of it.',
          zh: '團隊自己指名有兩個否定結果塑造了整個專案。第三類——被擱置的模型與被捨棄的構建體——則是留在紀錄裡，而不是從紀錄裡清掉。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'negative result that redirected everything', zh: '改變整個方向的否定結果' }, k: 'r' }],
              h: { en: 'TFA cleavage is unlikely with this enzyme family', zh: '以這一族酵素切開 TFA 不太可能成功' },
              p: { en: 'The Protenix model of DAR3835 with TFA located the barrier in **attack geometry on a fully substituted carbon**, not in affinity. Plan A was degradation; it was dropped on this result, before the bench had spent a season on it.', zh: 'DAR3835 與 TFA 的 Protenix 模型把障礙定位在**全取代碳上的攻擊幾何**，而不是親和力。A 計畫是降解；它因為這個結果被放棄，而且是在實驗桌為它耗掉一整季之前。' } },
            { chips: [{ t: { en: 'negative result kept visible', zh: '被保留在明處的否定結果' }, k: 'r' }],
              h: { en: 'In silico affinity scoring did not beat the wild type', zh: '電腦上的親和力評分沒有勝過野生型' },
              p: { en: 'So **no design was selected on it**. The BoltzGen funnel is still published — 10,000 to 5 to 3 — but the selection is explicitly not justified by the score, which is the opposite of how a generative pipeline is usually presented.', zh: '所以**沒有任何設計是靠它被選上的**。BoltzGen 的漏斗仍然公開——10,000 到 5 到 3——但他們明說選擇並非由那個分數證成，而這與生成式流程通常的呈現方式正好相反。' } },
            { chips: [{ t: { en: 'model set aside', zh: '被擱置的模型' }, k: 'a' }],
              h: { en: 'The Langevin filter model, kept in the write-up', zh: 'Langevin 濾床模型，留在文件裡' },
              p: { en: 'A first model that followed individual molecules was abandoned because roughly 10¹⁵ TFA molecules pass through a real filter. It stays in the record with the reason attached, which is how a reader can tell the continuum model was a decision rather than a default.', zh: '第一個追蹤個別分子的模型被放棄，因為真實濾床中大約有 10¹⁵ 個 TFA 分子通過。它連同理由一起留在紀錄中，讀者因此能看出連續體模型是一個決定，而不是預設值。' } },
            { chips: [{ t: { en: 'stated limitation', zh: '明列限制' }, k: 'r' }],
              h: { en: 'The filter model is 185× optimistic on capacity', zh: '濾床模型在容量上樂觀了 185 倍' },
              p: { en: 'The reference **q_max of 25 mg/g is a placeholder** against their own **measured upper bound of 0.135 mg/g**, and **K_L is marked "placeholder, not measured"**. The status of the model is printed at the top: they did not manage to finalise and exploit it as they wanted.', zh: '參考值 **q_max = 25 mg/g 是佔位值**，而他們自己**量到的上限是 0.135 mg/g**，另外 **K_L 被標為「佔位值，未量測」**。模型的狀態印在最上面：他們沒有成功把它完成並按原本希望的方式運用。' } },
            { chips: [{ t: { en: 'constructs dropped', zh: '被捨棄的構建體' }, k: 'a' }],
              h: { en: 'A0A6, Eurydice and Sao did not pass the solubility gate', zh: 'A0A6、Eurydice 與 Sao 沒通過可溶性的閘' },
              p: { en: '**A0A6 came back entirely as inclusion bodies; Eurydice and Sao were insoluble and were dropped, not rescued.** The gate — soluble, and enough for full characterisation from one batch — was set in advance and then applied.', zh: '**A0A6 全部是包涵體；Eurydice 與 Sao 不可溶，被捨棄而不是搶救。** 那個閘——必須可溶，且單一批次足以完成完整特性分析——是事先設好，然後被執行的。' } },
            { chips: [{ t: { en: 'weeks lost', zh: '耗掉的時間' }, k: 'a' }],
              h: { en: 'aTc induction was never rescued', zh: 'aTc 誘導始終沒救回來' },
              p: { en: 'Several concentrations, several timepoints, and old against freshly prepared inducer stock — and then the whole collection moved to pET-29b(+) with T7 and IPTG at the cost of **a full re-synthesis order and several weeks**. The strain comparison that might have guided the move came back null and confounded.', zh: '試過好幾種濃度、好幾個時間點，以及舊的與新配的誘導劑母液對比——最後整組構建體還是搬到 pET-29b(+)、T7 與 IPTG，代價是**整批重新合成的訂單與好幾個星期**。而原本可能指引這個決定的菌株比較，結果是空的，而且變數互相混淆。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'ly-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Label every model parameter Design choice / Computed / Placeholder / Operating range.** This is the single cheapest thing on this entire site and it is why their filter model is readable despite being unfinished: BV50 = 14.03 and "q_max is a placeholder 185× above our measured bound" can sit on the same page without either being a lie.', zh: '**把每個模型參數標成「設計選擇／計算得出／佔位值／操作範圍」。** 這是整個網站上最便宜的一件事，也正是他們的濾床模型雖然沒完成卻仍讀得懂的原因：BV50 = 14.03 與「q_max 是個比我們量到的上限高 185 倍的佔位值」可以並存在同一頁上，而兩句都不是謊話。' },
            { en: '**Validate the assay as an object before using it as a judge.** Four plate-reading formats compared because the substrate is volatile, a six-point HCl calibration at R² = 0.9979, and a per-protein signal check that removed RPA1163 before it could be ranked. None of this needs equipment you do not already have.', zh: '**先把方法當成對象驗證，才拿它當裁判。** 因為基質揮發而比較了四種讀盤方式、六點 HCl 校正達 R² = 0.9979，以及在 RPA1163 被排名之前就把它剔除的逐一蛋白訊號檢查。這些都不需要你手上還沒有的設備。' },
            { en: '**Put the cleavage site in the design so a property can be attributed later.** A TEV site between anchor and binder in every fusion is what turns "the fusion shifts with TFA" into "the binder shifts with TFA". Design for the control you will want, not just for the construct you want.', zh: '**在設計裡放入切位，讓性質之後能被歸因。** 每個融合蛋白都在錨與結合體之間放一個 TEV 切位，才能把「融合蛋白會因 TFA 位移」變成「結合體會因 TFA 位移」。要為你將來會需要的那個對照而設計，不只是為你想要的構建體而設計。' },
            { en: '**Build both options when the model cannot choose.** The anchor terminus could not be predicted, so both orientations were made for every binder and all six went into the Registry. Two constructs is cheaper than a season spent arguing about which end.', zh: '**當模型無法做選擇時，就兩個都做。** 錨該接哪一端無法預測，於是每個結合體都做了兩種方位，六個全部進 Registry。做兩個構建體，比花一整季爭論接哪一端便宜。' },
            { en: '**Re-test an inherited claim in the system that produced it, and be willing to publish a null.** Their re-test of MG1655 against BL21(DE3) came back with no consistent difference and with strain and vector confounded — so the decision was taken on documented behaviour instead. Most teams inherit the claim and the confound together.', zh: '**在當初產生某個主張的系統裡重測它，並且願意公開空結果。** 他們重測 MG1655 對 BL21(DE3)，結果是沒有一致差異、而且菌株與載體互相混淆——於是改依既有文件記載的行為做決定。多數團隊是把主張與混淆一起繼承下來。' },
            { en: 'What we would **not** copy: letting the filter model stay unfinished while the measured capacity bound already exists. The 0.135 mg/g upper bound is their own number, and re-running the breakthrough curve on it would turn the project\'s headline engineering claim from a demonstration into a design. We would spend that week before adding a sixth model.', zh: '我們**不會**抄的是：在量測得到的容量上限已經存在的情況下，還讓濾床模型停在未完成狀態。0.135 mg/g 這個上限是他們自己的數字，拿它重跑一次貫穿曲線，就能把整個專案的主要工程主張從「示範」變成「設計」。我們會先花掉那一週，再去加第六個模型。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'LYON is the Top 10\'s best argument that a negative result is a deliverable: a structural model that cancelled the original project, a scoring function that was not allowed to pick the designs, and a parameter table that tells you exactly which of their own numbers to trust.',
            zh: 'LYON 是前十名中「否定結果本身就是交付物」的最佳論據：一個取消了原始專案的結構模型、一個不被允許挑選設計的評分函數，以及一張明白告訴你該信他們自己哪些數字的參數表。'
          })
      });

      return out;
    }
  };
})(window);
