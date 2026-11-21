/* NUS-Singapore — ORCHID. Top 10 Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/nus-singapore/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Freeze the backbone', zh: '把骨架凍住' },
        s: { en: 'One ARS/CEN low-copy plasmid, uracil marker, cP_ENO1, CYC1t, mCitrine, all in BY4741', zh: '單一 ARS/CEN 低拷貝質體、尿嘧啶標記、cP_ENO1、CYC1t、mCitrine，全都放進 BY4741' } },
      { l: { en: 'Gibson with the marker split', zh: 'Gibson，但把標記拆開' },
        s: { en: 'NEBuilder HiFi 2× at 50 °C; AmpR split across both fragments after the backbone self-annealed', zh: 'NEBuilder HiFi 2×、50 °C；骨架自我接合後改把 AmpR 拆到兩個片段上' }, tone: 'g' },
      { l: { en: 'Freeze the plate assay', zh: '把盤式試驗凍住' },
        s: { en: 'OD600 1.0 → 0.75, 1 µL of stock per well, 30 °C and 190 rpm for 4 h, n = 3 in 3', zh: 'OD600 1.0→0.75、每孔加 1 µL 母液、30 °C 190 rpm 4 小時、3 重複乘 3 生物重複' } },
      { l: { en: 'Four sweeps, every generation', zh: '每一代都跑四組條件' },
        s: { en: 'YPD, galactose, CuSO₄ and 37 °C — plus crosstalk and burden, treated as mandatory', zh: 'YPD、半乳糖、CuSO₄ 與 37 °C——加上交叉干擾與代謝負擔，全部視為必做' } },
      { l: { en: 'Three lineages, one knob each', zh: '三條系譜，每次只動一個旋鈕' },
        s: { en: 'AY1 → NY1 → four leakiness fixes; U1 → U2 → Sko1/ODC; CSRE fails, QUEEN-2m replaces it', zh: 'AY1→NY1→四個抗滲漏修正；U1→U2→Sko1/ODC；CSRE 失敗，改用 QUEEN-2m' }, tone: 'a' },
      { l: { en: 'Build a ground truth', zh: '先做出一組標準答案' },
        s: { en: 'Single-reporter strains mixed by volume in known ratios, washed into water to kill YNB fluorescence', zh: '把單一報告蛋白的菌株按已知體積比混合，洗進純水以去除 YNB 的螢光' }, tone: 'g' }
    ],
    dry: [
      { l: { en: 'Drop the genome-scale model', zh: '放掉全基因體代謝模型' },
        s: { en: 'Dropped after an adviser warned GEMs mis-represent real cells; SABLe learns from measured reads', zh: '在顧問指出 GEM 會失真之後放棄；SABLe 改從實際讀值學習' }, tone: 'n' },
      { l: { en: 'Test the architecture first', zh: '先檢驗架構值不值得' },
        s: { en: 'Neural state-space model vs MLP on synthetic data: both R² 0.76, so the complexity is unjustified', zh: '在合成資料上比較神經狀態空間模型與 MLP：兩者 R² 都是 0.76，複雜度不成立' } },
      { l: { en: 'Fail in the lab, in public', zh: '公開地在實驗室裡失敗' },
        s: { en: 'The 37 °C pick predicted 5,019 mApple RFU/OD600 against about 783 measured; product R² ≈ −3.92', zh: '選出的 37 °C 預測 5,019 mApple RFU/OD600，實測約 783；產物 R² ≈ −3.92' }, tone: 'r' },
      { l: { en: 'Rebuild on one batch', zh: '在單一批次上重建' },
        s: { en: '24 + 30 °C, 40 conditions, 10 bootstrap models; R² 0.955 / 0.891 / 0.842', zh: '24＋30 °C、40 個條件、10 個 bootstrap 模型；R² 0.955／0.891／0.842' } },
      { l: { en: 'Propose the next culture', zh: '提出下一個該跑的培養' },
        s: { en: 'Exploration score picks 27 °C, 1 mM DTT, 0.15 % galactose; UMAP then reads the latent space', zh: '探索分數選出 27 °C、1 mM DTT、0.15% 半乳糖；再用 UMAP 讀潛空間' } },
      { l: { en: 'Unmix with a declared limit', zh: '解混，並宣告自己的極限' },
        s: { en: 'NNLS on y = S f + b + ε; their own threshold is 28°, and mCitrine–eGFP sits at 20°', zh: '對 y = S f + b + ε 做 NNLS；自訂門檻為 28°，而 mCitrine–eGFP 只有 20°' }, tone: 'r' }
    ],
    links: [
      { w: 2, d: 2, l: { en: 'plate reads are the whole training set', zh: '盤式讀值就是全部訓練資料' } },
      { w: 4, d: 4, l: { en: 'the model\'s 27 °C culture was actually grown', zh: '模型推薦的 27 °C 真的被養了出來' }, up: true },
      { w: 5, d: 5, l: { en: 'known mixing ratios score the unmixing', zh: '已知混合比例為解混打分' } }
    ]
  };

  PD.pages.nus = {
    label: { en: 'NUS-Singapore', zh: 'NUS-Singapore' },
    title: { en: 'NUS-Singapore — ORCHID', zh: 'NUS-Singapore — ORCHID' },
    render: function (h) {
      var t = team('nus');
      var out = h.teamhero(t, {
        h1: {
          en: 'One frozen backbone, one frozen four-hour assay, and ==a ground truth built before the measurement was trusted==.',
          zh: '一個凍住的骨架、一個凍住的四小時試驗，以及==在相信量測之前先做出來的標準答案==。'
        },
        lede: {
          en: 'Industrial fermentation is steered by pH, dissolved oxygen and nutrient concentration; the biological state of the cell is skipped because omics and LC-MS are offline, destructive and arrive after the batch has finished. ORCHID puts the sensor inside the cell — SPECTRA yeast, a set of modular stress biosensors in S. cerevisiae BY4741 reading ER, oxidative and energy stress as different fluorescent proteins — and SABLe is the dry-lab half that learns from those plate reads and proposes the next culture to run.',
          zh: '工業發酵是靠 pH、溶氧與營養濃度在操控的；細胞的生物狀態之所以被跳過，是因為體學與 LC-MS 都是離線、破壞性的，而且等結果出來時這一批已經結束了。ORCHID 把感測器放進細胞裡——SPECTRA 酵母，一組放在 S. cerevisiae BY4741 中的模組化壓力生物感測器，用不同的螢光蛋白分別讀出內質網壓力、氧化壓力與能量壓力——而 SABLe 是乾式的那一半，從這些盤式讀值學習，並提出下一個該跑的培養條件。'
        },
        chips: [
          { t: { en: 'SPECTRA yeast biosensors', zh: 'SPECTRA 酵母生物感測器' }, k: 'b' },
          { t: { en: 'S. cerevisiae BY4741', zh: 'S. cerevisiae BY4741' }, k: 'v' },
          { t: { en: 'Linear unmixing with a ground truth', zh: '有標準答案的線性解混' }, k: 'g' },
          { t: { en: 'SABLe neural network', zh: 'SABLe 神經網路' }, k: 't' },
          { t: { en: 'Numbered protocol library', zh: '編號化的流程庫' }, k: 'a' }
        ],
        stats: [
          { v: '24.6×', l: { en: 'Headline fold-change improvement on the oxidative sensor', zh: '氧化壓力感測器主打的倍率改善' } },
          { v: '0.5 mM', l: { en: 'Best H₂O₂ limit of detection, defined by ANOVA', zh: '最佳 H₂O₂ 偵測極限，由 ANOVA 定義' } },
          { v: '40', l: { en: 'Unique conditions in the single-batch training set', zh: '單一批次訓練集中的獨立條件數' } },
          { v: '700', l: { en: 'Culture-time records behind the network', zh: '支撐該網路的培養×時間紀錄數' } },
          { v: '~9 pt', l: { en: 'Four-reporter unmixing error, against ~2 pt for three', zh: '四報告蛋白解混誤差，三者時約為 2 個百分點' } },
          { v: '2.4×', l: { en: 'mApple rise at the model\'s 27 °C recommendation vs 24 °C', zh: '模型推薦的 27 °C 相對 24 °C 的 mApple 上升倍數' } }
        ]
      });

      out += h.toc([
        { id: 'ns-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'ns-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'ns-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'ns-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'ns-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'ns-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'ns-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'ns-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Put the sensor inside the cell, because the offline assay arrives too late', zh: '把感測器放進細胞裡，因為離線的檢測來得太晚' },
        lede: {
          en: 'A fermentation can be corrected only while it is running. That single constraint decides the readout, the chassis and the shape of the whole project.',
          zh: '一批發酵只有在它還在跑的時候才修正得了。光是這一個限制，就決定了讀值方式、宿主，以及整個專案的形狀。'
        },
        body:
          h.p({
            en: 'The stated gap is not that biological state is unmeasurable, but that it is measured too late: omics and LC-MS are **offline, destructive and arrive after the batch has finished**. So the project builds modular transcriptional stress biosensors — and one deliberately **non-transcriptional** one — in *S. cerevisiae* **BY4741**, read on a plate reader as fluorescence per unit of optical density. The two halves are stated as one loop: the wet lab validates and improves the model, and the model guides the wet lab\'s next steps.',
            zh: '他們指出的缺口不是「生物狀態量不到」，而是「量得太晚」：體學與 LC-MS 都是**離線、破壞性的，而且等結果出來這一批已經結束了**。因此這個專案在 *S. cerevisiae* **BY4741** 中建了一組模組化的轉錄型壓力生物感測器——外加一個刻意採用**非轉錄**架構的感測器——並在盤式讀取儀上以「每單位光密度的螢光」讀出。兩半被明寫成同一個迴圈：濕式端驗證並改進模型，模型則指引濕式端的下一步。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'three stresses', zh: '三種壓力' }, k: 'b' }],
              h: { en: 'ER, oxidative, energy', zh: '內質網、氧化、能量' },
              p: { en: 'Built **in parallel for three stresses but iterated in series**, so a lesson learned on one sensor was transplanted to the others rather than re-derived. ER uses Hac1/UPRE, oxidative uses Yap1/YRE, and energy ended up as a ratiometric ATP indicator.', zh: '三種壓力是**平行建構、但串行迭代**，所以在一個感測器上學到的教訓是被移植到其他感測器上，而不是重新推導一遍。內質網用 Hac1/UPRE、氧化用 Yap1/YRE，而能量最後落在一個比值式 ATP 指示劑上。' } },
            { chips: [{ t: { en: 'one variable', zh: '一次一個變數' }, k: 'v' }],
              h: { en: 'The backbone never moves', zh: '骨架從不動' },
              p: { en: 'A single low-copy **ARS/CEN** plasmid with a uracil marker, core promoter **cP_ENO1** (or **cP_CYC1** as the deliberately weaker alternative), terminator **CYC1t** and reporter **mCitrine** — held constant so that any difference belongs to the part under test.', zh: '單一個低拷貝 **ARS/CEN** 質體，帶尿嘧啶標記、核心啟動子 **cP_ENO1**（或刻意選用較弱的 **cP_CYC1**）、終止子 **CYC1t** 與報告蛋白 **mCitrine**——全部固定不動，好讓任何差異都歸屬於被測試的那個元件。' } },
            { chips: [{ t: { en: 'advisers as a loop', zh: '把顧問做成迴圈' }, k: 't' }],
              h: { en: 'Three engagements that changed the build', zh: '三次改變了建構內容的交流' },
              p: { en: 'Integrated human practices runs as a single named loop — **Question → Engage → Investigate → Integrate** — over **19 numbered cycles (1.1–4.5)** across about 21–23 logged engagements, each with its effect on the build written down. Three redirections are traceable: a point about thousands of interlinked reactions **killed the digital-twin goal** and produced the framework instead; a warning about genome-scale models **killed the GEM**; and a remark that industry assays stress by RT-qPCR **created the TRX2 benchmark experiment**.', zh: '整合型人文實務是作為一個具名迴圈在運作的——**提問 → 接觸 → 調查 → 整合**——共跑了 **19 個編號循環（1.1–4.5）**、約 21–23 次有紀錄的交流，而且每一次對建構內容的影響都被寫下來。其中三次轉向是可追溯的：一個關於「數千個互相連結的反應」的意見**終結了數位孿生這個目標**，取而代之產出了這套框架；一個對全基因體模型的警告**終結了 GEM**；而一句「業界是用 RT-qPCR 量壓力」的話**催生了 TRX2 這個基準實驗**。' } },
            { chips: [{ t: { en: 'the end goal', zh: '最終目標' }, k: 'g' }],
              h: { en: 'Multiplexing is why crosstalk is mandatory', zh: '因為要多工，交叉干擾才是必做項' },
              p: { en: 'Because the plan is to read several stresses in one cell, every oxidative sensor is dosed with DTT and every ER sensor with H₂O₂, on the same ladder and the same replicate structure. The multiplexing goal makes a test obligatory that most projects treat as optional.', zh: '因為計畫是在同一個細胞內讀出多種壓力，所以每個氧化感測器都要被 DTT 處理、每個內質網感測器都要被 H₂O₂ 處理，而且用同一道濃度階梯與同樣的重複結構。多工這個目標讓一個多數專案視為可選的測試變成義務。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'ns-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The loop closed once, and the closure is reported with its miss', zh: '迴圈真的閉合了一次，而閉合是連同它的誤差一起報的' },
        lede: {
          en: 'Plate reads are the only training data the network has, and the network\'s recommendation was actually grown. The third handoff is the rarer one: the measurement was scored against a mixture whose answer was known in advance.',
          zh: '盤式讀值是這個網路唯一的訓練資料，而網路給出的建議真的被養了出來。第三次交接是比較罕見的那一種：量測是用一組事先已知答案的混合物來打分的。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'ORCHID: the two lanes and the three handoffs', zh: 'ORCHID：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Model and Contribution pages.', zh: '由我們依該隊 Engineering、Results、Model、Contribution 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'ns-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Numbered protocols, one moving variable, and two mandatory tests per generation', zh: '編號化的流程、一次只動一個變數，以及每一代兩項必做測試' },
        lede: {
          en: 'The pipeline is frozen on purpose so that three sensor lineages can be compared to each other, and so that a failure is readable as a statement about the design rather than about the day.',
          zh: '這條流程是刻意凍住的，好讓三條感測器系譜能彼此比較，也好讓一次失敗能被讀成關於設計的陳述，而不是關於那一天的陳述。'
        },
        body:
          h.phases([
            { h: { en: 'Publish the protocols as a numbered library, not as prose', zh: '把流程以編號庫的形式發布，而不是寫成散文' },
              p: { en: '16 DNA protocols **[D1]–[D16]**, 4 yeast protocols **[Y1]–[Y4]**, 13 media and reagent recipes **[M1]–[M13]**, each with catalogue numbers, and the Results text links to the exact protocol used for each assay.', zh: '16 個 DNA 流程 **[D1]–[D16]**、4 個酵母流程 **[Y1]–[Y4]**、13 個培養基與試劑配方 **[M1]–[M13]**，每一個都附貨號，而 Results 的文字會連到每項試驗實際使用的那個流程。' },
              items: [
                { en: 'Named catalogue items include NEB C3019 competent cells, NEBuilder HiFi 2× E2621, Qiagen 28115/27115 columns, NEB N0552/N0557 ladders, NEB R0176 DpnI, Axil BUF-3000 TAE, Bio Basic SD7002/SD7003 media, ThermoFisher S33102 SYBR Safe, a Flavorgen RNA kit and the Luna One-Step RT-qPCR kit.', zh: '列出貨號的項目包含 NEB C3019 勝任細胞、NEBuilder HiFi 2× E2621、Qiagen 28115/27115 管柱、NEB N0552/N0557 分子量標記、NEB R0176 DpnI、Axil BUF-3000 TAE、Bio Basic SD7002/SD7003 培養基、ThermoFisher S33102 SYBR Safe、Flavorgen RNA 套組，以及 Luna One-Step RT-qPCR 套組。' },
                { en: 'The Registry output is a kit rather than a demo: **17 basic parts and 12 composite parts**, with the three sensor generations deposited as separate composites so the lineage is reproducible. The wiki does not map each new BBa ID to its part name in text, so that pairing has to be read off the Registry.', zh: 'Registry 的產出是一套工具組、而不是一次示範：**17 個基本元件與 12 個複合元件**，而且三代感測器是各自作為獨立複合元件存放的，讓整條系譜可以被重現。wiki 的文字並沒有把每個新的 BBa 編號對上它的元件名稱，所以那個對應關係必須回到 Registry 上去讀。' },
                { en: 'Strains are NEB Stable Competent *E. coli* and *S. cerevisiae* BY4741, both Risk Group 1, and the safety page names **sporulation under nitrogen or carbon starvation** as the specific hazard to immunocompromised handlers — a risk most teams would not flag for yeast at all.', zh: '菌株為 NEB Stable Competent *E. coli* 與 *S. cerevisiae* BY4741，兩者都是風險等級 1，而安全頁指出的具體危害是**氮源或碳源飢餓下的孢子形成**對免疫低下操作者的風險——這是多數團隊根本不會為酵母標示的一項風險。' }
              ] },
            { h: { en: 'Assemble by Gibson, and fix the screening problem at the design stage', zh: '以 Gibson 組裝，並在設計階段解決篩選問題' },
              p: { en: '**NEBuilder HiFi 2× Mix** throughout, 50 °C for 1 h (3 h for more than four fragments), two- and three-fragment reactions, with **overlap PCR [D15]** to pre-join fragments and **DpnI [D16]** to remove template. Binding sites and tags were introduced **in primer overhangs** rather than ordered as synthetic blocks; **QUEEN-2m** was the one externally obtained gene block.', zh: '全程使用 **NEBuilder HiFi 2× Mix**，50 °C 一小時（超過四個片段則三小時），做兩片段與三片段反應，並以**重疊 PCR [D15]** 先把片段接起來、以 **DpnI [D16]** 去除模板。結合位與標籤是寫在**引子突出端**裡帶進去的，而不是另外訂合成片段；**QUEEN-2m** 是唯一一個外部取得的基因片段。' },
              items: [
                { en: 'Colony PCR kept giving wrong or missing bands, and sequencing showed **the backbone had self-annealed despite having no homologous site**. The fix: **split the AmpR selection marker across both fragments**, so only a correct join survives.', zh: '菌落 PCR 一直給出錯誤或缺失的條帶，定序顯示**骨架在沒有同源區的情況下仍自我接合了**。解法是：**把 AmpR 選擇標記拆到兩個片段上**，這樣只有正確接合的產物才能存活。' },
                { en: 'Of **28 colony PCRs across four re-attempted assemblies, only one colony was off**, and the trick was adopted for all later two- and three-fragment assemblies and published as a contribution.', zh: '在四次重做的組裝中共 **28 個菌落 PCR，只有一個菌落不對**，這個做法因此被用在後續所有兩片段與三片段組裝上，並作為一項 contribution 發布。' }
              ],
              done: { en: 'A screening failure turned into a published design rule: keep the selection marker split across two fragments.', zh: '一次篩選上的失敗被轉成一條公開的設計規則：把選擇標記拆在兩個片段上。' } },
            { h: { en: 'Verify on a fixed gate', zh: '用固定的門檻驗證' },
              p: { en: 'Colony PCR → MiniPrep → outsourced Sanger sequencing (Bio Basic), with NanoDrop for concentration. Sequencing is dispatched through protocol **[D13]** with a fixed sample and primer format.', zh: '菌落 PCR→MiniPrep→外送 Sanger 定序（Bio Basic），並以 NanoDrop 測濃度。定序透過流程 **[D13]** 以固定的樣本與引子格式送出。' },
              items: [
                { en: 'Transformation into BY4741 is the LiAc / PEG 3350 / salmon-sperm-DNA heat-shock protocol **[Y1]** at 42 °C for 30 min, selected on YNB plus amino acids.', zh: '轉形進 BY4741 用的是 LiAc／PEG 3350／鮭魚精 DNA 熱衝擊流程 **[Y1]**，42 °C 30 分鐘，並以 YNB 加胺基酸選擇。' }
              ] },
            { h: { en: 'Freeze the assay, then vary one knob at a time', zh: '把試驗凍住，然後一次只動一個旋鈕' },
              p: { en: 'Fluorescence assay **[Y4]** is one fixed recipe: two-day pre-culture in YNB with 2 % glucose → morning refresh to **OD600 = 1.0** → 4 h later re-dilute to **OD600 = 0.75** → 200 µL per well in a 96-well plate → **1 µL of a stock** added to hit the final dose → **30 °C, 190 rpm, 4 h** → endpoint (and in several runs continuous) OD600 and RFU.', zh: '螢光試驗 **[Y4]** 是一份固定配方：在含 2% 葡萄糖的 YNB 中前培養兩天→早上更新至 **OD600 = 1.0**→四小時後再稀釋至 **OD600 = 0.75**→96 孔盤每孔 200 µL→加入 **1 µL 母液**達到最終劑量→**30 °C、190 rpm、4 小時**→終點（部分批次為連續）讀取 OD600 與 RFU。' },
              items: [
                { en: 'Stock ladders are pre-made at **20 / 40 / 100 / 200 / 400 / 880–1000 mM** so that every dose is a 1 µL addition — the volume added never changes, so the dilution never changes either.', zh: '母液階梯事先配成 **20／40／100／200／400／880–1000 mM**，讓每個劑量都只需加 1 µL——加入的體積永遠不變，稀釋倍數因此也永遠不變。' },
                { en: 'Dose ladders: H₂O₂ at **0, 0.1, 0.2, 0.5, 1, 2, 4 mM**; DTT at **0, 0.1, 0.2, 0.5, 1, 2, 5 mM**. Blanks are 100 µL culture plus 100 µL DI water. **n = 3 technical repeats within 3 biological repeats** on essentially every graph.', zh: '劑量階梯：H₂O₂ 為 **0、0.1、0.2、0.5、1、2、4 mM**；DTT 為 **0、0.1、0.2、0.5、1、2、5 mM**。空白為 100 µL 培養液加 100 µL 去離子水。幾乎每張圖都是 **3 個技術重複乘 3 個生物重複**。' }
              ] },
            { h: { en: 'Make crosstalk, burden and four condition sweeps mandatory', zh: '把交叉干擾、代謝負擔與四組條件掃描列為必做' },
              p: { en: 'Each sweep is the same **[Y4]** with one substitution: **YPD instead of YNB**, **2 % galactose instead of 2 % glucose**, **CuSO₄ added**, and **30 °C against 37 °C run as two identically laid-out plates**.', zh: '每一組掃描都是同一個 **[Y4]** 只換掉一項：**用 YPD 取代 YNB**、**用 2% 半乳糖取代 2% 葡萄糖**、**加入 CuSO₄**，以及**把 30 °C 與 37 °C 做成兩塊排版完全相同的盤**。' },
              items: [
                { en: '**Crosstalk:** every oxidative sensor dosed with DTT and every ER sensor with H₂O₂, same ladder, same replicate structure.', zh: '**交叉干擾：**每個氧化感測器都用 DTT 處理、每個內質網感測器都用 H₂O₂ 處理，階梯相同、重複結構相同。' },
                { en: '**Burden:** every construct\'s OD600 compared head-to-head against untransformed **BY4741** across the whole stressor ladder.', zh: '**代謝負擔：**每個構建體的 OD600 都在整條壓力階梯上與未轉形的 **BY4741** 直接對比。' },
                { en: '**Orthogonal method:** RT-qPCR of **TRX2** against housekeeping **UBC1**, on AY1 and NY1 at 0 / 0.2 / 0.5 mM H₂O₂, run because an adviser said RT-qPCR is what industry would use. It gave **1.2–1.7-fold**, which they used to argue that their own sensor\'s fold change was still too low *and* that RT-qPCR is high-variance.', zh: '**正交方法：**對 AY1 與 NY1 在 0／0.2／0.5 mM H₂O₂ 下做 **TRX2** 的 RT-qPCR，並以持家基因 **UBC1** 為對照；之所以做是因為一位顧問說業界會用 RT-qPCR。結果是 **1.2–1.7 倍**，而他們用這個結果同時主張兩件事：自家感測器的倍率仍然太低，*而且* RT-qPCR 本身變異很大。' }
              ],
              done: { en: 'Because the sweeps run every generation, two limitations became publishable facts: NY1 does not work at 37 °C and loses responsiveness in galactose.', zh: '正因為每一代都跑這些掃描，兩項限制才變成可以發布的事實：NY1 在 37 °C 下無效，而且在半乳糖中失去反應性。' } },
            { h: { en: 'Move one variable per round, across three lineages', zh: '三條系譜，每一輪只動一個變數' },
              p: { en: 'Oxidative: **AY1** (4× YRE-Alt) → **NY1** (4× native YRE) → four independent leakiness fixes. ER: **U1** (1× UPRE1) → **U2** (4× UPRE2) → only the two modifications that had won on the oxidative side. Energy: a CSRE transcriptional design, then **QUEEN-2m**.', zh: '氧化：**AY1**（4× YRE-Alt）→**NY1**（4× 原生 YRE）→四個各自獨立的抗滲漏修正。內質網：**U1**（1× UPRE1）→**U2**（4× UPRE2）→只沿用在氧化端勝出的那兩項修改。能量：先是 CSRE 轉錄型設計，之後改為 **QUEEN-2m**。' },
              items: [
                { en: 'AY1 worked but gave **LOD = 1 mM H₂O₂** and a maximum **1.6-fold**; 0.1 against 0.2 mM gave 1.2 against 1.3-fold, and 0.5 and 1 mM both gave 1.6 — **no usable resolution**. Burden confirmed: OD600 **0.45 against 0.62** for BY4741 at 0 mM.', zh: 'AY1 有作用，但 **LOD = 1 mM H₂O₂**、最大僅 **1.6 倍**；0.1 與 0.2 mM 分別是 1.2 與 1.3 倍，0.5 與 1 mM 都是 1.6 倍——**沒有可用的解析度**。負擔也被確認：0 mM 時 OD600 為 **0.45 對 BY4741 的 0.62**。' },
                { en: 'NY1 went **against the literature\'s recommended construct** and used native YRE. Fold change did not move (Hill coefficients **0.76 against 0.77**), but LOD improved to **0.5 mM** — and the explicit conclusion is that the limit is **basal leakiness, not binding-site affinity**.', zh: 'NY1 **刻意違反文獻推薦的構建體**，改用原生 YRE。倍率沒有改變（Hill 係數 **0.76 對 0.77**），但 LOD 改善到 **0.5 mM**——而他們明寫的結論是：限制在於**基礎滲漏，而不是結合位的親和力**。' },
                { en: 'Round 3 added four fixes **independently**, on three stated mechanistic principles: **RPP2Bt** terminator upstream, a **Sko1** repressor site between promoter and TSS, the weaker **cP_CYC1** core promoter, and an **ODC** degradation tag after mCitrine. All four cut basal signal; Sko1 kept the 0.5 mM LOD; ODC and cP_CYC1 only reached significance at 1 mM. Headline claim: fold change improved **up to 24.6×**.', zh: '第三輪**各自獨立**加入四項修正，依據三條明寫的機制原理：上游加 **RPP2Bt** 終止子、在啟動子與轉錄起始點之間放 **Sko1** 抑制子結合位、改用較弱的 **cP_CYC1** 核心啟動子，以及在 mCitrine 之後加 **ODC** 降解標籤。四者都降低了基礎訊號；Sko1 維持住 0.5 mM 的 LOD；ODC 與 cP_CYC1 只有在 1 mM 才達顯著。主打的說法是：倍率最多改善 **24.6 倍**。' },
                { en: 'The ER line reached **LOD 1.0 mM DTT and a maximum 2-fold** at 2 mM for U1, with signal diverging by 2 h; **crosstalk with H₂O₂ was essentially zero** (the fitted amplitude came out negative) and there was **no significant burden** against BY4741.', zh: '內質網那條線在 U1 達到 **LOD 1.0 mM DTT、2 mM 時最大 2 倍**，訊號在 2 小時就分開；**與 H₂O₂ 的交叉干擾基本為零**（擬合出的振幅是負值），而且相對 BY4741 **沒有顯著負擔**。' },
                { en: 'The energy line was rebuilt rather than tuned: the CSRE design was **non-functional** and the diagnosis was architectural — ATP is homeostatically held and real changes happen in **seconds to minutes**, far faster than transcription plus maturation. **QUEEN-2m**, a ratiometric circularly permuted eGFP ATP indicator under constitutive **cP_TEF**, separated glucose from the rest **within 10 minutes** at 410 and 480 nm.', zh: '能量那條線是被重建、而不是被微調的：CSRE 設計**完全沒有功能**，而診斷是架構層面的——ATP 受恆定機制維持，真正的變化發生在**數秒到數分鐘**，遠快於轉錄加上成熟所需的時間。**QUEEN-2m** 是一個在組成性 **cP_TEF** 之下的比值式環狀重排 eGFP ATP 指示劑，在 410 與 480 nm 下**十分鐘內**就把葡萄糖與其他碳源分開。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'ns-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'One Hill equation for every curve, and an exclusion rule you can see', zh: '每條曲線都用同一個 Hill 方程，而排除規則是看得見的' },
        lede: {
          en: 'Every sensor on this project becomes four comparable numbers, and the doses that were thrown away stay on the plot in grey so the reader can see what was excluded.',
          zh: '這個專案的每個感測器最後都變成四個可以互相比較的數字；而被丟掉的那些劑量仍以灰色留在圖上，讓讀者看得到什麼被排除了。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Rule', zh: '規則' }, w: '26%' },
              { t: { en: 'Exactly what it is', zh: '確切定義' } }
            ],
            rows: [
              [{ en: 'The unit', zh: '單位' }, { en: '**RFU / OD600, normalised at the same timepoint**, never against the starting OD600. The model page states this outright and shows raw against normalised trajectories side by side, because "a brighter well can mean more cells, more signal per cell, or both."', zh: '**RFU／OD600，而且在同一個時間點上正規化**，絕不對起始 OD600 正規化。模型頁直接寫明這點，並把原始與正規化後的軌跡並排顯示，理由是「一個比較亮的孔可能代表細胞更多、每顆細胞訊號更強，或兩者皆是」。' }],
              [{ en: 'Instrument settings', zh: '儀器設定' }, { en: 'Fixed and published: mCitrine at **Ex480 / Em530, gain = 75**. Growth stays as raw OD600. (The plate-reader model itself is never named on the wiki.)', zh: '固定並公布：mCitrine 用 **Ex480／Em530、gain = 75**。生長則維持原始 OD600。（但 wiki 上從未指名盤式讀取儀的型號。）' }],
              [{ en: 'Significance', zh: '顯著性' }, { en: '**ANOVA against the 0 mM well**, reported per panel with the full star convention.', zh: '**對 0 mM 孔做 ANOVA**，逐一在每個分圖中以完整的星號慣例標示。' }],
              [{ en: 'Limit of detection', zh: '偵測極限' }, { en: '*Defined* as the lowest dose that is significant — not eyeballed off a curve.', zh: '被*定義*為最低的達顯著劑量——不是從曲線上目測出來的。' }],
              [{ en: 'Data they refuse to use', zh: '他們拒絕使用的數據' }, { en: 'Doses where cells are dying give artificially low fluorescence and are **manually omitted from curve fitting**, while the higher doses stay plotted **in grey** so the reader sees what was excluded. The Hill fits use only **0–1 mM H₂O₂ (n = 5 dose means)** or **0–2 mM DTT (n = 6)**.', zh: '細胞正在死亡的那些劑量會給出人為偏低的螢光，因此**在曲線擬合時被手動排除**，而較高的劑量仍以**灰色**留在圖上，讓讀者看見什麼被排除了。Hill 擬合只用 **0–1 mM H₂O₂（n = 5 個劑量平均）**或 **0–2 mM DTT（n = 6）**。' }],
              [{ en: 'One equation for everything', zh: '所有東西一個方程' }, { en: 'One Hill equation for every sensor and every crosstalk curve, so a sensor is a four-number signature: baseline R₀, signed amplitude A, K_A and steepness m. Least squares on dose means, K_A searched **0.030–30.000 mM** and m **0.4–6.0**, baseline and saturation forced non-negative, RMSE reported.', zh: '每個感測器、每條交叉干擾曲線都用同一個 Hill 方程，於是一個感測器就是四個數字的簽名：基線 R₀、帶正負號的振幅 A、K_A 與陡度 m。對劑量平均值做最小平方擬合，K_A 的搜尋範圍為 **0.030–30.000 mM**、m 為 **0.4–6.0**，基線與飽和值強制非負，並報出 RMSE。' }],
              [{ en: 'What a boundary hit means', zh: '擬合撞到邊界代表什麼' }, { en: 'A fit that hits the search boundary is printed as **"30.000 (bound)"** and flagged as extrapolated rather than quietly reported. They then say plainly that such fits mean **the response is more linear than Hill-shaped** — and argue a low Hill coefficient is what they actually want, because the sensor must be graded rather than switch-like.', zh: '撞到搜尋邊界的擬合會被印成 **「30.000 (bound)」**，並標示為外推，而不是悄悄照報。他們接著直言這類擬合代表**反應比 Hill 形更接近線性**——並主張低 Hill 係數其實正是他們想要的，因為這個感測器必須是漸進式的，而不是開關式的。' }]
            ],
            source: { en: 'Published fit values include U1/DTT R₀ 4735.9, A 5337.5, K_A 0.709, m 1.882, RMSE 101.4; NY1/H₂O₂ R₀ 2125.1, A 1887.1, K_A 0.206; AY1/H₂O₂ R₀ 2157.2, A 1433.0, K_A 0.198; U2+ODC/DTT R₀ 157.6, A 514.5; and the bounded NY1+Sko1 (A 18421.4, K_A 30) and NY1+ODC (A 700687.4, K_A 30).', zh: '公布的擬合值包含 U1/DTT R₀ 4735.9、A 5337.5、K_A 0.709、m 1.882、RMSE 101.4；NY1/H₂O₂ R₀ 2125.1、A 1887.1、K_A 0.206；AY1/H₂O₂ R₀ 2157.2、A 1433.0、K_A 0.198；U2+ODC/DTT R₀ 157.6、A 514.5；以及撞到邊界的 NY1+Sko1（A 18421.4、K_A 30）與 NY1+ODC（A 700687.4、K_A 30）。' }
          }) +
          h.take({ en: 'The rule that makes their numbers comparable', zh: '讓他們的數字可以互相比較的那條規則' }, {
            en: '*"A brighter well can mean more cells, more signal per cell, or both."* So the unit is **RFU / OD600 normalised at the same timepoint**, never against the starting OD600, read at a fixed gain of 75 on a fixed channel — and every sensor, including every crosstalk curve, is then fitted with the same Hill equation. That is what turns three sensor lineages into one comparable table.',
            zh: '*「一個比較亮的孔可能代表細胞更多、每顆細胞訊號更強，或兩者皆是。」* 因此單位是**在同一時間點正規化的 RFU／OD600**，絕不對起始 OD600 正規化，並以固定 gain 75、固定通道讀取——然後每個感測器，包含每一條交叉干擾曲線，都用同一個 Hill 方程擬合。就是這一點把三條感測器系譜變成一張可以互相比較的表。'
          }) +
          h.h3({ en: 'The assay they had to invent: unmixing with an answer key', zh: '他們必須自己發明的那套試驗：帶標準答案的解混' }) +
          h.p({
            en: 'A strain carrying every reporter gives no known correct answer, so there is nothing to validate the unmixing against. Their move is to **mix single-reporter strains by volume in known ratios** and require the algorithm to recover those ratios from fluorescence alone. Cultures were equalised to the same OD600, then **washed and resuspended in water to remove YNB\'s fluorescent B vitamins**, 200 µL per well.',
            zh: '一株同時帶有所有報告蛋白的菌株並不會給你已知的正確答案，因此沒有東西可以用來驗證解混。他們的做法是**把單一報告蛋白的菌株按已知體積比混合**，並要求演算法只憑螢光就還原出那些比例。各培養液先調到相同 OD600，再**洗滌並重新懸浮於純水中，以去除 YNB 中會發螢光的 B 群維生素**，每孔 200 µL。'
          }) +
          h.ul([
            { en: '**Experiment 1, three reporters:** BY4741 expressing mApple, mCitrine and mTurquoise2, plus untransformed BY4741 for autofluorescence and water-only wells for instrument background, **6 wells per condition**; full emission scans 400–650 nm at four excitations plus **six fixed channels**. Result: **within about 2 percentage points** — a 50/25/25 mix read as 47/25/28.', zh: '**實驗一，三個報告蛋白：**BY4741 分別表達 mApple、mCitrine 與 mTurquoise2，加上未轉形的 BY4741 作自體螢光對照、只有水的孔作儀器背景，**每個條件 6 個孔**；在四個激發波長下做 400–650 nm 全波段掃描，再加上**六個固定通道**。結果：**誤差約在 2 個百分點內**——一個 50/25/25 的混合被讀成 47/25/28。' },
            { en: '**Experiment 2, four reporters:** added **eGFP expressed in *E. coli*** — chosen *because* it overlaps mCitrine — with two extra Ex470 channels (eight in total) and **all 24 orderings of a 1:2:3:4 ratio** so every reporter appears at every proportion, in triplicate. Result: **about 9 percentage points**, with eGFP overestimated and mTurquoise2 underestimated by **11–12 points** each.', zh: '**實驗二，四個報告蛋白：**加入**在 *E. coli* 中表達的 eGFP**——選它正是*因為*它與 mCitrine 重疊——並多加兩個 Ex470 通道（總共八個），而且把 1:2:3:4 比例的**全部 24 種排列**都做過，讓每個報告蛋白都出現在每一種比例上，一式三份。結果：**約 9 個百分點**，其中 eGFP 被高估、mTurquoise2 被低估，各約 **11–12 個百分點**。' },
            { en: '**They diagnose the failure instead of excusing it:** the whole plate was **6–17× dimmer**, mApple and mTurquoise2 sat only about **160 and 690 RFU above water**, mTurquoise2\'s own-channel signal was **below the water background**, and unexplained signal gets dumped onto the brightest neighbour. The named fix is to repeat at higher cell density.', zh: '**他們是診斷失敗，不是為失敗找藉口：**整塊盤**暗了 6–17 倍**，mApple 與 mTurquoise2 只比純水高出約 **160 與 690 RFU**，mTurquoise2 在自己通道上的訊號甚至**低於水的背景值**，而無法解釋的訊號會被倒給最亮的鄰居。他們指明的修法是在更高細胞密度下重做。' },
            { en: '**Channel minimisation as an explicit deliverable:** every channel subset was refitted, and **one well-chosen channel per reporter matched the full set** in both experiments (3 of 6, and 4 of 8) — turning an hour-long spectral scan into a minutes-long read, which is what would make routine bioreactor sampling possible.', zh: '**把「通道最小化」當成明確的交付項：**他們把每一種通道子集都重新擬合過，結果在兩個實驗中**每個報告蛋白只要一個挑得好的通道，就能達到全通道組的水準**（6 取 3、8 取 4）——把一小時的光譜掃描變成幾分鐘的讀取，而這正是讓例行性生物反應器取樣成為可能的關鍵。' },
            { en: '**Honest scope statement:** the mixtures are called "a proxy", and autofluorescence currently rides along inside each strain\'s reference spectrum — it will have to become **an explicit extra column of S** once all the reporters sit in one cell.', zh: '**誠實的適用範圍聲明：**他們把這些混合物稱為「替代品」，而自體螢光目前是夾帶在每一株的參考光譜裡的——等到所有報告蛋白真的放進同一個細胞時，它就必須成為 **S 矩陣中明確多出來的一欄**。' }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'ns-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'SABLe: five cycles, two of which end in the team rejecting their own model', zh: 'SABLe：五個循環，其中兩個以團隊否決自己的模型收場' },
        lede: {
          en: 'The unusual thing here is not the network. It is that two results the network produced were thrown away on methodological grounds by the people who produced them.',
          zh: '這裡罕見的不是那個網路，而是：這個網路產出的兩個結果，被產出它們的人以方法學理由丟掉了。'
        },
        body:
          h.flow({
            title: { en: 'SABLe: from a failed mechanistic fit to a culture worth running', zh: 'SABLe：從一個失敗的機制擬合到一個值得去跑的培養' },
            sub: { en: 'Each stage is a decision, and each decision ruled out the alternative before the next stage was built.', zh: '每個階段都是一個決定，而每個決定都在下一階段被建起來之前先排除了替代選項。' },
            stages: [
              { label: { en: 'Try mechanism first', zh: '先試機制模型' }, sub: { en: 'Hill dose-responses plus logistic-growth ODEs', zh: 'Hill 劑量反應加上邏輯生長 ODE' }, tone: 'n',
                items: [{ en: 'Growth R² ≈ 0.91–0.93', zh: '生長 R² ≈ 0.91–0.93' }, { en: 'Stress only 0.33–0.47', zh: '壓力訊號僅 0.33–0.47' }] },
              { label: { en: 'Justify the architecture', zh: '檢驗架構值不值得' }, sub: { en: 'Neural state-space model against an MLP, on synthetic data', zh: '在合成資料上比較神經狀態空間模型與 MLP' }, tone: 'b',
                items: [{ en: 'Both R² 0.76 → MLP', zh: '兩者 R² 皆 0.76→選 MLP' }] },
              { label: { en: 'Fail in the lab', zh: '在實驗室裡失敗' }, sub: { en: 'The 37 °C recommendation; product R² ≈ −3.92', zh: '37 °C 的建議；產物 R² ≈ −3.92' }, tone: 'a',
                items: [{ en: 'Predicted 5,019 RFU/OD600', zh: '預測 5,019 RFU/OD600' }, { en: 'Measured about 783', zh: '實測約 783' }] },
              { label: { en: 'Rebuild on one batch', zh: '在單一批次上重建' }, sub: { en: '24 + 30 °C, 40 conditions, 10 bootstrap models', zh: '24＋30 °C、40 個條件、10 個 bootstrap 模型' }, tone: 'g',
                items: [{ en: 'R² 0.955 / 0.891 / 0.842', zh: 'R² 0.955／0.891／0.842' }] },
              { label: { en: 'Propose, then grow it', zh: '先提議，然後真的去養' }, sub: { en: 'Exploration score, not gradient ascent, picks 27 °C', zh: '選出 27 °C 的是探索分數，不是梯度上升' }, tone: 'g',
                items: [{ en: '1 mM DTT, 0.15 % galactose', zh: '1 mM DTT、0.15% 半乳糖' }] }
            ],
            loop: { label: { en: 'the grown culture becomes training data for the next round', zh: '養出來的培養成為下一輪的訓練資料' } },
            caption: { en: 'Drawn by us from the team\'s Model page. All R² values and doses are the team\'s.', zh: '由我們依該隊 Model 頁繪製；所有 R² 與劑量皆為該隊所報。' }
          }) +
          h.h3({ en: '1 · The mechanistic model that justifies the network', zh: '1 · 那個為神經網路提供理由的機制模型' }) +
          h.p({
            en: 'Machine learning is justified by a failed mechanistic fit rather than asserted. They first fitted **Hill dose-responses plus simple ODEs** — logistic growth dN/dt = µN(1 − N/N_max), and ds/dt = k_S·S_T(D) − γ_S·s, dp/dt = k_P·P_T(G) − γ_P·p. Growth fitted at **R² ≈ 0.91–0.93**, but the stress signal only reached **0.33–0.47** and mApple **0.41–0.42**. That gap is the stated reason the network exists.',
            zh: '機器學習的正當性來自一個失敗的機制擬合，而不是來自斷言。他們先擬合了 **Hill 劑量反應加上簡單 ODE**——邏輯生長 dN/dt = µN(1 − N/N_max)，以及 ds/dt = k_S·S_T(D) − γ_S·s、dp/dt = k_P·P_T(G) − γ_P·p。生長擬合到 **R² ≈ 0.91–0.93**，但壓力訊號只有 **0.33–0.47**、mApple 只有 **0.41–0.42**。這個落差就是他們明寫的「神經網路為何存在」的理由。'
          }) +
          h.h3({ en: '2 · Architecture tested before it was adopted', zh: '2 · 架構在被採用之前先被檢驗' }) +
          h.p({
            en: 'A **neural state-space model** was compared against a plain **MLP** on a *synthetic* dataset with a 60/20/20 split. Both reached **R² 0.76**, so the dynamics-aware architecture was dropped as unjustified complexity. A **genome-scale metabolic model** had been ruled out earlier still, after an adviser warned that GEMs mis-represent real cells through byproducts and competing pathways — so SABLe learns from measured biosensor data instead.',
            zh: '他們在一個*合成*資料集上以 60/20/20 的切分比較了**神經狀態空間模型**與一般的 **MLP**。兩者都達到 **R² 0.76**，因此那個「懂動態」的架構被當成不成立的複雜度而放棄。更早之前，**全基因體代謝模型**就已被排除，因為一位顧問指出 GEM 會因副產物與競爭路徑而無法代表真實細胞——所以 SABLe 改為從實測的生物感測器數據學習。'
          }) +
          h.h3({ en: '3 · The MLP, fully stated, and the hold-out discipline', zh: '3 · 完整寫出的 MLP，以及留出資料的紀律' }) +
          h.p({
            en: 'Inputs are temperature, DTT, galactose and **time of measurement**; hidden layers **128, 128, 64 with ReLU**; outputs OD600, mApple/OD600 and mCitrine/OD600, with **each requested timepoint predicted directly** rather than integrated forward. RMSE in native units: **0.054 OD600, 85 RFU/OD600 (mApple), 710 RFU/OD600 (mCitrine)**. The data behind it: 2 temperatures × **5 DTT doses (0–1 mM)** × **4 galactose doses (0–0.2 %)** = **40 unique conditions**, 3 independent plate cultures each, read at 0, 3, 5, 7, 9 and about 24–26 h, technical wells averaged first, leaving **700 culture-time records**. The independent unit is **declared to be a whole culture, not a well**.',
            zh: '輸入為溫度、DTT、半乳糖與**量測時間**；隱藏層為 **128、128、64 並使用 ReLU**；輸出為 OD600、mApple/OD600 與 mCitrine/OD600，而且**每個被要求的時間點都是直接預測**，不是往前積分出來的。原始單位下的 RMSE 為：**OD600 0.054、mApple 85 RFU/OD600、mCitrine 710 RFU/OD600**。背後的數據是：2 個溫度 × **5 個 DTT 劑量（0–1 mM）** × **4 個半乳糖劑量（0–0.2%）** = **40 個獨立條件**，每個條件 3 個獨立的盤式培養，在 0、3、5、7、9 與約 24–26 小時讀取，技術重複先平均，最後留下 **700 筆培養×時間紀錄**。獨立單位被**明確宣告為一整個培養，而不是一個孔**。'
          }) +
          h.note({
            en: '**The hold-out rule is the most careful thing on the page.** Whole condition combinations are kept together — all three cultures and all timepoints of a combination go to the same split — at **60 % train / 20 % validate / 20 % test**, followed by **5-fold condition-grouped cross-validation reshuffled five times**. That is what stops a model from being graded on a timepoint it has effectively already seen.',
            zh: '**整個頁面上最謹慎的就是這條留出規則。** 整個條件組合會被放在一起——同一個組合的三個培養與所有時間點都進同一個切分——比例為 **60% 訓練／20% 驗證／20% 測試**，之後再做**以條件分群、重新洗牌五次的 5 折交叉驗證**。這就是避免模型被用「它其實已經看過的時間點」來評分的做法。'
          }) +
          h.h3({ en: '4 · The exploration rule, written as an equation', zh: '4 · 以方程式寫出來的探索規則' }) +
          h.p({
            en: '**E(x) = σ(x)/max σ + d(x)/max d**, where σ is the spread of ten bootstrap predictions and d is the scaled Euclidean distance to the nearest already-measured or already-proposed point; the model exploits only if **mean − 1 SD still beats the best measured signal**. Plain gradient ascent only returned a corner that had already been measured, which is why the exploration score exists — and the whole rule is labelled explicitly as "decision rules, not estimates of biological certainty". The proposal it produced was **27 °C, 1 mM DTT, 0.15 % galactose**.',
            zh: '**E(x) = σ(x)/max σ + d(x)/max d**，其中 σ 是十個 bootstrap 預測的分散度，d 是到最近的「已量測或已提議」點的縮放歐氏距離；模型只有在**平均值減一個標準差仍勝過最佳實測訊號**時才採取利用策略。單純的梯度上升只會回到一個已經量過的角落，這就是探索分數存在的理由——而整條規則被明白標示為「決策規則，而不是對生物確定性的估計」。它產出的提議是 **27 °C、1 mM DTT、0.15% 半乳糖**。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'RESULT', zh: '結果' },
            title: { en: 'The loop closed, and the model still underestimated by about 3×', zh: '迴圈閉合了，而模型仍然低估了約三倍' },
            sub: { en: 'Late-read mApple per OD600 at 0.5 mM DTT and 0.2 % galactose, against the frozen pre-experiment prediction for 27 °C.', zh: '0.5 mM DTT 與 0.2% 半乳糖下的後期 mApple/OD600 讀值，與實驗前凍結的 27 °C 預測值對照。' },
            data: [
              { label: { en: '27 °C · measured', zh: '27 °C·實測' }, v: 491, note: { en: 'The model\'s recommended condition, grown', zh: '模型推薦的條件，實際養出來' } },
              { label: { en: '24 °C · measured', zh: '24 °C·實測' }, v: 204 },
              { label: { en: '30 °C · measured', zh: '30 °C·實測' }, v: 179 },
              { label: { en: '27 °C · frozen prediction', zh: '27 °C·凍結的預測' }, v: 188, color: 's3', note: { en: 'Predicted before the experiment was run', zh: '在實驗進行之前就做出的預測' } }
            ],
            opts: { unit: { en: 'mApple RFU / OD600', zh: 'mApple RFU／OD600' }, xlabel: { en: 'mApple RFU / OD600 (late read)', zh: 'mApple RFU／OD600（後期讀值）' } },
            caption: { en: '491 against 204 and 179 is the 2.4× and 2.7× the team leads with; 491 against the frozen 188 is the roughly 3× underprediction they report in the same breath.', zh: '491 對 204 與 179 就是該隊主打的 2.4 倍與 2.7 倍；而 491 對凍結預測的 188，則是他們在同一段文字裡一起報出的約三倍低估。' },
            source: { en: 'The team\'s Model page: 24 h cultures, nine DTT/galactose combinations, three cultures each.', zh: '該隊 Model 頁：24 小時培養、九種 DTT／半乳糖組合、每種三個培養。' }
          }) +
          h.h3({ en: '5 · UMAP, stress-tested rather than shown once', zh: '5 · UMAP 是被壓力測試過的，不是只畫一次' }) +
          h.p({
            en: '**UMAP** on the MLP\'s **64-dimensional latent space** over 20,000 simulated conditions found an association the network was never built to contain: **DTT → stress → product**, with **79 %** of high-predicted-product conditions being high-DTT and **81 %** high-predicted-stress. The plot is drawn **16 ways**, with the stated reading that the shapes and spacing move and only the colour gradient is informative, and the axes are declared to have no biological units.',
            zh: '在 MLP 的 **64 維潛空間**上，對 20,000 個模擬條件做 **UMAP**，找到一個這個網路本來並未被設計要包含的關聯：**DTT → 壓力 → 產物**，其中被預測為高產物的條件有 **79%** 是高 DTT，被預測為高壓力的則有 **81%**。這張圖被畫了 **16 種版本**，而他們明寫的判讀是：形狀與間距會變動，只有顏色梯度有資訊量，而那兩個軸被宣告為沒有生物學單位。'
          }) +
          h.p({
            en: 'The discovery was then re-tested on measured cultures rather than left as a picture: Spearman ρ of **0.404, p = 0.136** at 24 °C with 0 % galactose against **0.873, p < 0.001** at 24 °C with 0.05 %, fitted trends of about **13×, 7.8× and 5.2× per mM DTT** at 24, 27 and 30 °C with galactose present, and a no-galactose control used to bound mCitrine→mApple optical bleed at **no more than 8 %** of the rise. The p-value is labelled **exploratory** because the cultures share three plates, and causation is explicitly disclaimed.',
            zh: '這個發現接著是在實際量測的培養上被重新檢驗，而不是停在一張圖上：24 °C、0% 半乳糖時 Spearman ρ 為 **0.404、p = 0.136**，而 24 °C、0.05% 時為 **0.873、p < 0.001**；在有半乳糖的情況下，24、27、30 °C 的擬合趨勢約為**每 mM DTT 13 倍、7.8 倍與 5.2 倍**；並以無半乳糖的對照把 mCitrine→mApple 的光學串色限定在該上升量的**不超過 8%**。由於這些培養共用三塊盤，那個 p 值被標示為**探索性**，而因果關係則被明白地免責。'
          }) +
          h.h3({ en: '6 · Linear unmixing, with a separability threshold they then fail', zh: '6 · 線性解混，以及一個他們自己沒通過的可分離性門檻' }) +
          h.p({
            en: 'Written out as maths: **y = S f + b + ε**, solved as **non-negative least squares (Lawson–Hanson)**, with background b measured from water wells and subtracted first, and the residual interpreted as an unexpected fluorescent source. Separability is quantified two ways — the **pairwise angle between reference spectra** (mApple / mCitrine / mTurquoise2 at **83–88°**, κ ≈ **1.2**; with eGFP added, mCitrine–eGFP at **20°**, the others 62–81°, κ ≈ **7.1**) and a **simulation-derived threshold**: 3,000 random two-reporter mixtures per angle from 2° to 90° with 5 % noise gave **28°** as the angle below which median error exceeds 5 points. **mCitrine–eGFP sits below their own threshold, and they say so.** The named future alternative for dim signals is **Richardson–Lucy** spectral unmixing.',
            zh: '這部分被寫成數學式：**y = S f + b + ε**，以**非負最小平方（Lawson–Hanson）**求解，背景 b 由純水孔量得並先行扣除，殘差則被解讀為某個未預期的螢光來源。可分離性用兩種方式量化——**參考光譜之間的兩兩夾角**（mApple／mCitrine／mTurquoise2 為 **83–88°**、κ ≈ **1.2**；加入 eGFP 後，mCitrine–eGFP 只有 **20°**、其餘 62–81°、κ ≈ **7.1**），以及一個**由模擬得出的門檻**：在 2° 到 90° 的每個角度各做 3,000 組隨機兩報告蛋白混合、加入 5% 雜訊，得到 **28°** 這個「低於此角度中位誤差就超過 5 個百分點」的界線。**mCitrine–eGFP 落在他們自己訂的門檻之下，而他們把這件事寫出來。** 他們為微弱訊號指名的未來替代方案是 **Richardson–Lucy** 光譜解混。'
          }) +
          h.warn({
            en: '**A tooling gap, stated as a gap.** The wiki names **no plate-reader model**, **no ML framework** (no PyTorch, scikit-learn or TensorFlow), no language or version, and no package versions anywhere; only the GitLab notebook link stands in for them. We have not filled any of this in — the architecture above is reproducible as a description, but not as an environment.',
            zh: '**一個工具鏈上的缺口，而我們把它當缺口寫出來。** wiki 上從未指名**盤式讀取儀型號**、從未指名**任何機器學習框架**（沒有 PyTorch、scikit-learn 或 TensorFlow），也沒有語言、版本或套件版本；唯一替代這些資訊的只有那個 GitLab notebook 連結。我們沒有替他們補上任何一項——上面的架構作為「描述」是可重現的，但作為「執行環境」不是。'
          })
      });

      /* ---------------- failures and gaps ---------------- */
      out += h.sec({
        id: 'ns-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'Named failures, discarded data, and the places the wiki is unfinished', zh: '指名道姓的失敗、被丟掉的數據，以及 wiki 還沒寫完的地方' },
        lede: {
          en: 'The first six cards are the team\'s own negative results. The last three are gaps and contradictions we found on the wiki and did not resolve, because nothing on the wiki resolves them.',
          zh: '前六張卡是該隊自己的陰性結果。後三張是我們在 wiki 上找到、而且沒有去解決的缺口與矛盾——因為 wiki 上沒有任何東西能解決它們。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'non-functional', zh: '完全沒有功能' }, k: 'r' }],
              h: { en: 'The CSRE ATP sensor', zh: 'CSRE 的 ATP 感測器' },
              p: { en: 'Carbon Source Responsive Elements from ACS1 and ICL1 upstream of mCitrine showed **no dependence on carbon source**. The root cause was identified as the **architecture, not the parts**: ATP is homeostatically held and real changes happen in seconds to minutes, far faster than transcription plus maturation.', zh: '取自 ACS1 與 ICL1 的碳源反應元件放在 mCitrine 上游，結果**完全不隨碳源改變**。根本原因被判定為**架構問題、而不是元件問題**：ATP 受恆定機制維持，真正的變化發生在數秒到數分鐘，遠快於轉錄加上成熟所需的時間。' } },
            { chips: [{ t: { en: 'non-functional', zh: '完全沒有功能' }, k: 'r' }],
              h: { en: 'NY1 + RPP2Bt', zh: 'NY1 + RPP2Bt' },
              p: { en: 'Declared non-functional, **indistinguishable from untransformed BY4741**. The stated suspicion is **steric hindrance** between RPP2Bt and the YREs, with the fix named as future work: more spacer base pairs.', zh: '被宣告為完全沒有功能，**與未轉形的 BY4741 無法區分**。他們明寫的懷疑是 RPP2Bt 與 YRE 之間的**立體障礙**，而修法被列為未來工作：加入更多間隔鹼基對。' } },
            { chips: [{ t: { en: 'negative result, twice', zh: '兩次陰性結果' }, k: 'r' }],
              h: { en: 'Binding-site engineering did not work', zh: '結合位工程沒有用' },
              p: { en: 'Neither YRE-Alt → native YRE nor 1× UPRE1 → 4× UPRE2 improved fold change. Both negative results are what produced the leakiness programme — and in NY1 **leakiness exceeded maximum amplitude** (R₀ > A), so fold change is capped below 2, stated plainly.', zh: '不論是 YRE-Alt → 原生 YRE，或 1× UPRE1 → 4× UPRE2，都沒有改善倍率。正是這兩個陰性結果催生了整個抗滲漏計畫——而在 NY1 中**滲漏超過了最大振幅**（R₀ > A），因此倍率被壓在 2 以下，這點他們直接寫明。' } },
            { chips: [{ t: { en: 'trade-off named', zh: '明寫的取捨' }, k: 'a' }],
              h: { en: 'Sko1 is best for signal and worst for crosstalk', zh: 'Sko1 訊號最好，交叉干擾最糟' },
              p: { en: '**U2+ODC shows severe crosstalk, up to 4.2× to H₂O₂**, against about 1.1-fold for U2+Sko1 — while on the oxidative side Sko1 is the winner. The trade-off is named rather than averaged away.', zh: '**U2+ODC 顯示嚴重的交叉干擾，對 H₂O₂ 最高達 4.2 倍**，而 U2+Sko1 約為 1.1 倍——但在氧化那一側 Sko1 才是勝出者。這個取捨是被指名寫出的，不是被平均掉的。' } },
            { chips: [{ t: { en: 'limitation of the deliverable', zh: '交付成果的限制' }, k: 'r' }],
              h: { en: 'NY1 fails at 37 °C and in galactose', zh: 'NY1 在 37 °C 與半乳糖中失效' },
              p: { en: 'The response curve flattens at 37 °C, and responsiveness is lost in galactose because galactose respiration pre-activates TRX2. Both are published as limitations of the part, which is only possible because the sweeps were mandatory. Separately, **CuSO₄ chemically neutralises H₂O₂**, so the high-dose response is partly masked — they reason that since a fold change survives at 4 mM, it cannot have consumed all of it.', zh: '在 37 °C 下反應曲線變平，而在半乳糖中失去反應性，因為半乳糖呼吸會預先活化 TRX2。兩者都被當作該元件的限制公布——而這之所以辦得到，正因為那些條件掃描是必做的。另外，**CuSO₄ 會在化學上中和 H₂O₂**，因此高劑量的反應被部分遮蓋——他們的推論是：既然 4 mM 時倍率仍然存在，CuSO₄ 就不可能把 H₂O₂ 全部消耗掉。' } },
            { chips: [{ t: { en: 'data discarded', zh: '數據被丟掉' }, k: 'a' }],
              h: { en: 'The 39 °C and 27 °C sets, thrown out by the team', zh: '39 °C 與 27 °C 兩組數據，被團隊自己丟掉' },
              p: { en: '**39 °C data discarded** for excessive replicate variance. **27 °C data discarded** for a confounded starting OD and batch: those cultures started at **half** the cell density and came from a **different batch**, and the stated reason is that normalisation fixes the arithmetic, not the batch effect. The second one cost them an R² of 0.949 / 0.840 / 0.828 and a recommendation they liked.', zh: '**39 °C 的數據因重複間變異過大而被丟掉。** **27 °C 的數據因起始 OD 與批次混淆而被丟掉**：那些培養的起始細胞密度只有**一半**，而且來自**不同批次**，而他們寫出的理由是——正規化能修的是算術，不是批次效應。第二次丟掉，代價是放棄一組 R² 0.949／0.840／0.828 以及一個他們喜歡的建議。' } },
            { chips: [{ t: { en: 'wiki gap', zh: 'wiki 缺口' }, k: 'r' }],
              h: { en: 'A protocol that contradicts its own results text', zh: '流程與自己的結果文字互相矛盾' },
              p: { en: 'On the CuSO₄ sweep, **the protocol says a 100 mM stock added to a 100 µM final, while the Results text says cells were "grown in 100 mM of copper sulfate"** — a thousand-fold discrepancy. The wiki contradicts itself here and we have not chosen between the two readings.', zh: '在 CuSO₄ 那組掃描上，**流程寫的是把 100 mM 母液加到最終 100 µM，而 Results 的文字卻寫細胞是「在 100 mM 硫酸銅中生長」**——相差一千倍。wiki 在這裡自相矛盾，而我們沒有在兩種讀法之間做選擇。' } },
            { chips: [{ t: { en: 'wiki gap', zh: 'wiki 缺口' }, k: 'r' }],
              h: { en: 'Results that are not there yet', zh: '還不存在的結果' },
              p: { en: 'The **ER Round 3 test result reads "[To be confirmed]"** on the Engineering page, and the matching Results text is still in draft "AIM: … Results: …" form — the wiki ships visibly unfinished in that one spot. A full **optogenetic part set and a beta-carotene assay [Y3]** exist in the Registry and the protocol library, but **no beta-carotene results appear anywhere on the wiki**. One cross-page number also does not line up: the UMAP stress/product overlap is 81 % on both pages, while the companion product–DTT figure is quoted as **79 %** on the Model page against an Engineering page that calls the same analysis a pending sensitivity check on a 24/30 °C model.', zh: '**內質網第三輪的測試結果在 Engineering 頁上寫著「[To be confirmed]」**，而對應的 Results 文字仍是草稿形式的「AIM: … Results: …」——wiki 在這一處是明顯未完成就上線的。Registry 與流程庫中有完整的**光遺傳學元件組與 β-胡蘿蔔素試驗 [Y3]**，但**wiki 上任何地方都找不到 β-胡蘿蔔素的結果**。還有一個跨頁數字對不上：UMAP 的壓力／產物重疊在兩頁上都是 81%，但與之搭配的產物–DTT 數字在 Model 頁被引為 **79%**，而 Engineering 頁則把同一個分析稱為針對 24/30 °C 模型待做的敏感度檢查。' } },
            { chips: [{ t: { en: 'explicitly unvalidated', zh: '明示未經驗證' }, k: 'a' }],
              h: { en: 'What the team says is not yet demonstrated', zh: '團隊自己說還沒被證明的事' },
              p: { en: 'In their own words: the 25–27 °C exploration proposals are "model recommendations for future testing, not completed wet lab validations"; the 27 °C result "requires further work to verify"; the DTT–mApple link "does not establish a causal mechanism"; unmixing is validated **only on cell mixtures**, never on a co-expressing strain, **which does not yet exist**; and **ORCHID has never been run in a bioreactor** — the Implementation page is a three-stage vision, not a demonstration.', zh: '用他們自己的話：25–27 °C 的探索提議是「供未來測試的模型建議，不是已完成的濕式驗證」；27 °C 的結果「需要進一步工作來驗證」；DTT–mApple 的關聯「並未建立因果機制」；解混**只在細胞混合物上被驗證過**，從未在共表達的菌株上驗證，**而那樣的菌株目前還不存在**；以及 **ORCHID 從未在生物反應器中跑過**——Implementation 頁是一個三階段的願景，不是一次示範。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'ns-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Build the measurement\'s ground truth before you trust the measurement.** Mixing single-reporter strains in known ratios and demanding that the algorithm recover them is the single most transferable idea on this wiki, and it needs no new equipment — only cultures you already have and an answer key you wrote down first.', zh: '**在相信一個量測之前，先把它的標準答案做出來。** 把單一報告蛋白的菌株按已知比例混合、並要求演算法把比例還原出來，是這個 wiki 上最可移植的一個想法，而且不需要任何新設備——只需要你本來就有的培養液，以及一份你事先寫下的答案。' },
            { en: '**Freeze the assay, then move one knob per round.** One backbone, one four-hour recipe, one variable. That is why two consecutive failures on binding sites could be read as a statement about leakiness instead of as noise.', zh: '**把試驗凍住，然後每一輪只動一個旋鈕。** 一個骨架、一份四小時配方、一次一個變數。正因為如此，連續兩次結合位的失敗才能被讀成關於滲漏的陳述，而不是被當成雜訊。' },
            { en: '**Make crosstalk and metabolic burden mandatory per generation, not extras.** Running them every round is what let NY1\'s 37 °C and galactose failures be published as properties of the part rather than discovered by whoever reuses it.', zh: '**把交叉干擾與代謝負擔列為每一代的必做項，而不是加分項。** 每輪都跑，才讓 NY1 在 37 °C 與半乳糖下的失效能作為該元件的性質被公布，而不是留給下一個拿去用的人自己踩到。' },
            { en: '**Fit one equation to every curve, and print the boundary hits.** Four numbers per sensor makes a library comparable; printing "30.000 (bound)" is what stops a bad fit from being quoted as a parameter.', zh: '**每條曲線都用同一個方程擬合，並把撞到邊界的情況印出來。** 每個感測器四個數字，讓整個元件庫變得可比較；而把「30.000 (bound)」印出來，才避免一個壞擬合被當成參數引用。' },
            { en: '**Keep whole conditions together in the hold-out, and be willing to throw away your own model\'s recommendation.** The 39 °C variance and the 27 °C batch confound were both caught by the team, not by a reviewer. Reporting the 2.4× hit and the 3× underprediction in the same sentence is the behaviour we would copy first.', zh: '**在留出資料時把整個條件放在一起，並願意丟掉自己模型的建議。** 39 °C 的變異與 27 °C 的批次混淆，都是團隊自己抓出來的，不是審查者抓出來的。把 2.4 倍的命中與約三倍的低估寫在同一句話裡，是我們最想先抄走的那個行為。' },
            { en: 'What we would **not** copy: shipping without naming the plate reader, the ML framework or any package version. The hold-out discipline above is excellent and currently unreproducible by anyone outside the team — and the unfinished "[To be confirmed]" entry sits in the one place a reader would go to check the ER lineage.', zh: '我們**不會**抄的是：在沒有指名盤式讀取儀、機器學習框架或任何套件版本的情況下就上線。上面那套留出紀律非常好，但目前團隊之外的任何人都無法重現——而那個未完成的「[To be confirmed]」，偏偏就落在讀者會去查核內質網系譜的那一處。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'NUS-Singapore made the Top 10 on a habit rather than a technique: build a measurement\'s ground truth before trusting the measurement, freeze everything else so one variable can be read, and then be willing to discard your own model\'s best recommendation on methodological grounds — while leaving the wiki honest about the instrument names, the framework and the one result that is still "[To be confirmed]".',
            zh: 'NUS-Singapore 進入前十靠的是一個習慣、而不是一項技術：在相信量測之前先做出它的標準答案、把其他一切凍住好讓單一變數讀得出來，然後願意以方法學理由丟掉自己模型最好的建議——同時在 wiki 上誠實地留下儀器型號、框架名稱，以及那個仍寫著「[To be confirmed]」的結果。'
          })
      });

      return out;
    }
  };
})(window);
