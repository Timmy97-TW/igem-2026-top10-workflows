/* Toronto — PetaBite. Top 10 Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/toronto/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Load copper into the PET mesh', zh: '把銅載進 PET 網' },
        s: { en: 'NaOH pretreatment then CuSO₄ boiled at ~90 °C; neutralise to pH 7.5 before reading strips', zh: 'NaOH 前處理後在約 90 °C 煮 CuSO₄；讀試紙前先中和到 pH 7.5' } },
      { l: { en: 'Display the PETase on the outer membrane', zh: '把 PETase 展示在外膜上' },
        s: { en: 'INP anchor + 20-residue GS linker + BsmBI sites arranged so the scar lands inside the linker', zh: 'INP 錨定＋20 殘基 GS 連接子＋BsmBI 切位，刻意讓接縫落在連接子裡' } },
      { l: { en: 'Titrate copper toxicity first', zh: '先滴定銅的毒性' },
        s: { en: 'Up to 4 mM did not detrimentally alter growth, which sets how much copper the mesh may carry', zh: '到 4 mM 都沒有明顯影響生長，這就決定了網子最多能帶多少銅' }, tone: 'g' },
      { l: { en: 'Run the leakage control', zh: '做滲漏對照' },
        s: { en: 'Reporter plasmid only, mesh on the agar: no fluorescence, so no false-positive route', zh: '只放報告質體、網子放在培養基上：沒有螢光，所以沒有偽陽性路徑' } },
      { l: { en: 'Test with characterised PETases, including a dead one', zh: '用已特性化的 PETase 測試，包括一個失活的' },
        s: { en: 'Selection: every plate grew except Dead-IsPETase. Biosensor: only M4-Q grew, and it fluoresced', zh: 'Selection：除了 Dead-IsPETase 以外每個盤都長。Biosensor：只有 M4-Q 長起來，而它發螢光' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Mine 27.3 M public datasets', zh: '挖掘 2,730 萬組公開資料' },
        s: { en: 'Logan index → 307 M candidate sequences, against 495 experimentally validated before 2026', zh: 'Logan 索引→3.07 億候選序列，而 2026 年前只有 495 個經實驗驗證' } },
      { l: { en: 'Audit the LLM against human disagreement', zh: '以「人與人之間的不一致」稽核大型語言模型' },
        s: { en: '26 papers vs 26 double-human-verified: the LLM finds 70 %, a second human 83 %', zh: '26 篇對 26 篇經兩位人類驗證的：模型找到 70%，第二位人類找到 83%' } },
      { l: { en: 'Adapt the language model to metagenomes', zh: '把語言模型適配到宏基因體' },
        s: { en: 'ESM-C 300M + LoRA on 1.8 M 60 %-identity clusters; held-out loss 1.696 → 1.684 nats', zh: 'ESM-C 300M＋LoRA，在 180 萬個 60% 相似度叢集上訓練；保留集損失 1.696→1.684 nats' } },
      { l: { en: 'Split by homology component, not at random', zh: '依同源成分切分，而不是隨機切分' },
        s: { en: 'And discover the model does not beat sequence length on any of twelve targets', zh: '然後發現這個模型在十二個標的上都贏不過序列長度' }, tone: 'r' },
      { l: { en: 'Cut the library cost with LOBSTER', zh: '用 LOBSTER 降低文庫成本' },
        s: { en: 'Golden Gate fragment pools plus degenerate codons: ~45 % less nucleotide for the same coverage', zh: 'Golden Gate 片段池加上退化密碼子：同樣覆蓋率下核苷酸成本少約 45%' } }
    ],
    links: [
      { w: 1, d: 4, l: { en: 'LOBSTER designs the 1,744-sequence round 1 library', zh: 'LOBSTER 設計出 1,744 條序列的第一輪文庫' }, up: true },
      { w: 4, d: 3, l: { en: 'round 1 supplies the labels the model lacks', zh: '第一輪提供模型目前缺少的標籤' } }
    ]
  };

  PD.pages['og-toronto'] = {
    label: { en: 'Toronto', zh: 'Toronto' },
    title: { en: 'Toronto — PetaBite', zh: 'Toronto — PetaBite' },
    render: function (h) {
      var t = team('toronto');
      var out = h.teamhero(t, {
        h1: {
          en: 'A 600,000-fold bigger catalogue, and the sentence ==their own model does not beat sequence length==.',
          zh: '一份大了六十萬倍的目錄，以及那句==他們自己的模型贏不過序列長度==。'
        },
        lede: {
          en: 'Nature has probably already evolved the enzyme you need. Toronto\'s long-term goal is a workflow that mines public sequencing data for a plastic-degrading enzyme for any condition and any plastic; this year\'s North Star Goal was one enzyme that degrades PET at room temperature. Human practices set that target, because wastewater researchers and operators told them that enzymes needing 70 °C are industrially useless. The dry lab is the largest we read in 2026, and its own evaluation protocol says the model is not ready.',
          zh: '大自然很可能早就演化出你需要的那個酵素了。Toronto 的長期目標是一條「從公開定序資料中挖出適用於任何條件、任何塑膠的分解酵素」的流程；而今年的北極星目標是一個能在室溫下分解 PET 的酵素——這個標的是由社會實踐工作定下的，因為廢水研究者與操作人員告訴他們，需要 70 °C 的酵素在工業上沒有用。這是我們在 2026 年讀到最大的乾式實驗，而它自己的評估協議說：這個模型還沒準備好。'
        },
        chips: [
          { t: { en: 'PETadex, 307 M sequences', zh: 'PETadex，3.07 億序列' }, k: 'b' },
          { t: { en: 'PlasticESM (ESM-C LoRA)', zh: 'PlasticESM（ESM-C LoRA）' }, k: 'v' },
          { t: { en: 'Copper-release biosensor', zh: '銅釋放生物感測器' }, k: 'g' },
          { t: { en: 'LOBSTER library optimiser', zh: 'LOBSTER 文庫最佳化' }, k: 'a' },
          { t: { en: '$204 CAD bioreactor', zh: '204 加元生物反應器' }, k: 't' }
        ],
        stats: [
          { v: '495 → 307 M', l: { en: 'Validated plastic-degrading enzymes before 2026, against their candidate corpus', zh: '2026 年前經驗證的塑膠分解酵素，對上他們的候選序列集' } },
          { v: '0.72 → loses', l: { en: 'ρ on kcat under a random split, against losing to sequence length when split properly', zh: '隨機切分下的 ρ，對上正確切分後輸給序列長度' } },
          { v: '1.53 %', l: { en: 'Of their activity labels that are negatives, 168 of 200 from one screen', zh: '活性標籤中屬於負例的比例，200 個中有 168 個來自同一次篩選' } },
          { v: '48 %', l: { en: 'Of all labelled sequences sitting in a single homology component', zh: '所有已標註序列中落在單一同源成分內的比例' } },
          { v: '~45 %', l: { en: 'Nucleotide cost removed by LOBSTER for the same coverage', zh: 'LOBSTER 在相同覆蓋率下省下的核苷酸成本' } },
          { v: '±0.3 °C', l: { en: 'Temperature held at 37 °C by the $204 bioreactor', zh: '204 加元生物反應器在 37 °C 下維持的溫度' } }
        ]
      });

      out += h.toc([
        { id: 't-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 't-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 't-dry', t: { en: 'The dry lab', zh: '乾式流程' } },
        { id: 't-eval', t: { en: 'The evaluation', zh: '評估協議' } },
        { id: 't-wet', t: { en: 'Two new assays', zh: '兩個新試驗' } },
        { id: 't-hw', t: { en: 'Hardware', zh: '硬體' } },
        { id: 't-fail', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 't-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 't-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'The temperature in the goal came from an interview', zh: '目標裡的那個溫度來自一次訪談' },
        lede: {
          en: 'In 2019 the world made about 460 million tonnes of plastic; of the 353 million tonnes that became waste that year, 9 % was recycled. Since mass production began, roughly 8.3 billion tonnes have been made and less than a tenth recycled.',
          zh: '2019 年全世界生產了約 4.6 億噸塑膠；那一年成為廢棄物的 3.53 億噸中，只有 9% 被回收。自大量生產開始以來，大約生產了 83 億噸，而回收的不到十分之一。'
        },
        body:
          h.p({
            en: 'Existing approaches manage plastic waste rather than eliminating it. Mechanical recycling degrades the material every cycle; chemical recycling can recover PET\'s building blocks but virgin plastic from fossil fuels stays cheaper; incineration turns solid waste into emissions. **And none of them remove the plastic already in waterways.** So Toronto targeted wastewater, because **every treatment plant already concentrates a city\'s microplastics in sludge and effluent and has no process that degrades them.** The bottleneck is the opportunity.',
            zh: '現有做法是在管理塑膠廢棄物，而不是消除它。機械回收每一輪都讓材料品質下降；化學回收能回收 PET 的建構單元，但來自化石燃料的新塑膠仍然更便宜；焚化則把固體廢棄物變成排放。**而這些做法沒有一個能移除已經進入水域的塑膠。**所以 Toronto 把目標放在廢水，因為**每一座處理廠本來就把整座城市的微塑膠濃縮在污泥與出水裡，卻沒有任何程序去分解它們。**那個瓶頸就是機會。'
          }) +
          h.take({ en: 'The specification is a stakeholder\'s sentence', zh: '這個規格是一位相關人說的一句話' }, {
            en: 'Through interviews with wastewater researchers, operators and engineers they learned that **current enzymes capable of functioning only at 70 °C would be impractical for any industrial deployment.** As a result, the **North Star Goal was set around room-temperature enzymatic activity.** This is the clearest case we found in either division of human practices choosing a number rather than endorsing a plan.',
            zh: '透過與廢水研究者、操作人員與工程師的訪談，他們了解到**目前只能在 70 °C 下運作的酵素，對任何工業部署來說都不切實際。**因此，**北極星目標被設定在室溫下的酵素活性。**這是我們在兩個組別中找到最清楚的一個例子：社會實踐工作選定了一個數字，而不只是替一個計畫背書。'
          }) +
          h.p({
            en: 'The scientific premise is stated plainly: an enzyme\'s shape, and therefore its function, is determined by its amino acid sequence. So **a sequence database can be turned into a functional database.** And nature has spent billions of years evolving proteins for virtually every environment, so for many reactions **a version of the enzyme adapted to the conditions you care about already exists somewhere.** The challenge is finding it.',
            zh: '科學前提寫得很直白：一個酵素的形狀、因此也包括它的功能，是由它的胺基酸序列決定的——所以**一個序列資料庫可以被轉換成一個功能資料庫。**而大自然花了數十億年為幾乎每一種環境演化蛋白，所以對許多反應來說，**一個已經適應你在意的那些條件的酵素版本，很可能已經存在於某處。**難題在於找到它。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 't-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'An unusually lopsided project, on purpose', zh: '一個刻意極度不對稱的專案' },
        lede: {
          en: 'The dry-lab model section is larger than most teams\' entire wiki, and the wet-lab section is among the smallest. The asymmetry is the project: 307 million candidates is useless without a screen, and a screen is useless without a reason to pick which candidates to screen.',
          zh: '他們乾式實驗的模型章節比大多數隊伍整個 wiki 都大，而濕式章節是我們讀過最小的之一。這個不對稱就是這個專案本身：3.07 億個候選如果沒有篩選方法就沒有用，而一個篩選方法如果沒有「該篩哪些候選」的理由也沒有用。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'PetaBite: a corpus, a model, two assays and a bioreactor', zh: 'PetaBite：一個語料庫、一個模型、兩個試驗、一台生物反應器' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Project Description, Dry Lab Model, Wet Lab and Hardware pages.', zh: '由我們依該隊 Project Description、Dry Lab Model、Wet Lab、Hardware 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 't-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'The PETadex, and an audit of their own extraction model', zh: 'PETadex，以及對自家抽取模型的一次稽核' },
        body:
          h.fig({
            kind: 'funnel',
            tag: { en: 'SCALE', zh: '規模' },
            title: { en: 'From the known catalogue to the candidate corpus', zh: '從已知目錄到候選語料庫' },
            sub: { en: 'Log scale. The first row is the entire validated literature before 2026; the last is what one season of public-data mining returned.', zh: '對數刻度。第一列是 2026 年前全部經驗證的文獻；最後一列是一季公開資料挖掘的成果。' },
            data: [
              { label: { en: 'Experimentally validated plastic-degrading enzymes, before 2026', zh: '2026 年前經實驗驗證的塑膠分解酵素' }, v: 495, note: { en: 'the entire known catalogue', zh: '整個已知目錄' } },
              { label: { en: 'Public sequencing datasets searched', zh: '搜尋過的公開定序資料集' }, v: 27300000, note: { en: 'through the Logan index', zh: '透過 Logan 索引' } },
              { label: { en: 'Putative plastic-degrading enzyme sequences recovered', zh: '找回的推定塑膠分解酵素序列' }, v: 307000000, note: { en: 'a ~600,000-fold increase over the known catalogue', zh: '約為已知目錄的 60 萬倍' } },
              { label: { en: 'PETai activity labels', zh: 'PETai 活性標籤' }, v: 1137, note: { en: 'what the model actually learns to predict from', zh: '模型實際用來學習預測的那些資料' } },
              { label: { en: 'Sequences in the LOBSTER round 1 library', zh: 'LOBSTER 第一輪文庫中的序列數' }, v: 1744, note: { en: 'from the IsPETase and LCC clusters', zh: '來自 IsPETase 與 LCC 叢集' } }
            ],
            opts: { log: true, dec: 0 },
            caption: { en: 'Counts read from the team\'s Dry Lab Model and Project Description pages.', zh: '數字讀自該隊 Dry Lab Model 與 Project Description 頁。' }
          }) +
          h.p({
            en: 'The pipeline is published step by step as its own sub-pages: PETadex–PAZy reference curation → CATH assignment → component assignment → NCBI-nr homology expansion → seed MSAs and catalytic HMMs → Logan query extraction → clustering and corpus structure. Then annotation layers on top: BioSample metadata profiles, localisation and signal peptides, domain annotation, **novel accessory domains**, predicted structures, and biochemical properties with ancestral reconstruction.',
            zh: '整條流程以各自的子頁面逐步公開：PETadex–PAZy 參考策展→CATH 指派→成分指派→NCBI-nr 同源擴充→種子多序列比對與催化 HMM→Logan 查詢抽取→叢集與語料結構。接著是疊在上面的註解層：BioSample 詮釋資料剖析、定位與訊號肽、功能域註解、**新的輔助功能域**、預測結構，以及生化性質與祖先序列重建。'
          }) +
          h.h3({ en: 'The activity labels, and a measured audit of their own LLM', zh: '活性標籤，以及對自家大型語言模型的實測稽核' }) +
          h.p({
            en: 'Labels come from **three readings of the literature (by hand and by machine) plus a plate screen run by a collaborator lab**, and *each source is published separately alongside the merged set.* The LLM extraction pipeline was then benchmarked against humans on **26 LLM-extracted papers against 26 double-human-verified papers**. The numbers are published **with the human–human disagreement beside them**, which is the only way they mean anything.',
            zh: '標籤來自**三次文獻閱讀——人工與機器各自進行——再加上一間合作實驗室跑的盤式篩選**，而*每個來源都與合併後的集合一起分別公開*。接著他們把大型語言模型的抽取流程拿去和人類比對：**26 篇由模型抽取的論文，對上 26 篇經兩位人類驗證的論文**——而這些數字是**連同「人與人之間的不一致」一起公開的**，而那才是讓它們有意義的唯一方式。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'LLM AUDIT', zh: '模型稽核' },
            title: { en: 'LLM extraction against a second human, on the same papers', zh: '在同一批論文上，模型抽取對上第二位人類' },
            sub: { en: 'Agreement is only interpretable next to the human–human number, which is why both are published.', zh: '一致率只有在旁邊擺上「人對人」的數字時才可判讀，這就是為什麼兩者都被公開。' },
            data: [
              { label: { en: 'Enzymes found: LLM', zh: '找到的酵素——模型' }, v: 70, note: { en: 'of those either human listed; 90 % of those both humans agreed on', zh: '相對於「任一位人類列出的」；而兩位人類都同意的那些，模型找到 90%' } },
              { label: { en: 'Enzymes found: a second human', zh: '找到的酵素——第二位人類' }, v: 83, note: { en: 'the ceiling this task actually has', zh: '這項任務實際上的上限' } },
              { label: { en: 'pH agreement: LLM', zh: 'pH 一致——模型' }, v: 80, note: { en: 'when the enzyme and value match', zh: '在酵素與數值都對上的情況下' } },
              { label: { en: 'pH agreement: a second human', zh: 'pH 一致——第二位人類' }, v: 91, note: { en: 'same comparison', zh: '同一個比較' } },
              { label: { en: 'Buffer agreement: LLM', zh: '緩衝液一致——模型' }, v: 75, note: { en: 'against 84 % for a second human', zh: '而第二位人類是 84%' } },
              { label: { en: 'Temperature agreement: LLM', zh: '溫度一致——模型' }, v: 92, note: { en: 'and plasmid 95 %, called "good"', zh: '質體則是 95%——他們稱之為「好」' } }
            ],
            opts: { unit: { en: '%', zh: '%' }, dec: 0, xlabel: { en: 'agreement, %', zh: '一致率，%' } },
            caption: { en: 'Read from the team\'s Dry Lab Model page. The error mode is named too. A condition is borrowed from another assay in the same paper: pH 7 vs 8 for IsPETase, 37 vs 50 °C for Dkca1.', zh: '讀自該隊 Dry Lab Model 頁。錯誤模式也被指名了：從同一篇論文的另一個試驗借來的條件——IsPETase 的 pH 7 對 8、Dkca1 的 37 對 50 °C。' }
          }) +
          h.note({
            en: 'Only **7 of 180 LLM enzyme names had no human match**, and those were naming variants or whole-cell entries. The useful part is not the accuracy figure; it is that **a 70 % against a human ceiling of 83 % is interpretable, where "70 % accurate" would not be.**',
            zh: '**180 個模型抽出的酵素名稱中只有 7 個找不到人類對應**，而那些是命名變體或全細胞條目。有用的部分不是那個準確率數字，而是**「70% 對上人類上限 83%」是可判讀的，而單寫「準確率 70%」則不是。**'
          }) +
          h.h3({ en: 'PlasticESM, with the arithmetic of its own training set', zh: 'PlasticESM，連訓練集的算術一起公開' }) +
          h.p({
            en: 'General protein language models are trained mostly on curated databases, while **most PETadex sequences come from unassembled metagenomes.** So they continued pretraining **ESM-C 300M** on PETadex with masked-language modelling, training only **LoRA adapters on all four projections of every transformer block**. **240 adapter tensors, 14.7 M parameters, backbone frozen.**',
            zh: '一般的蛋白語言模型主要是在策展過的資料庫上訓練的，而**PETadex 的序列大多來自未組裝的宏基因體。**所以他們以遮罩語言建模在 PETadex 上繼續預訓練 **ESM-C 300M**，只訓練**每個 transformer 區塊全部四個投影上的 LoRA 適配器**——**240 個適配器張量、1,470 萬參數、主幹凍結。**'
          }) +
          h.ul([
            { en: 'A full epoch over the 18.2 M 90 %-identity centroids would have taken **57 hours**, so they trained on one randomly drawn member of each of the **1,814,296 60 %-identity clusters**, then a second seed drawing a different member.', zh: '在 1,820 萬個 90% 相似度中心序列上跑完一個 epoch 要 **57 小時**，所以他們改為從 **1,814,296 個 60% 相似度叢集**中各隨機抽一個成員來訓練，接著用第二個隨機種子再抽一個不同的成員。' },
            { en: 'And the arithmetic is published rather than rounded up: because **48.7 % of clusters are singletons**, two draws together hold **2,494,836 distinct sequences, 1.38× one draw and not 2×.**', zh: '而這個算術是被公開的、沒有被湊整：因為**48.7% 的叢集只有一個成員**，兩次抽樣合起來只有 **2,494,836 條不同的序列——是一次抽樣的 1.38 倍，不是 2 倍。**' },
            { en: 'Training on both draws lowered held-out loss from **1.696 to 1.684 nats** (perplexity 5.39). They quantify how small that is honestly: **"about 279 times the difference between two identical runs."**', zh: '用兩次抽樣一起訓練把保留集損失從 **1.696 降到 1.684 nats**（困惑度 5.39）——而他們誠實地量化了這有多小：**「大約是兩次完全相同執行之間差異的 279 倍。」**' },
            { en: 'Engineering changes cut training time **2.63-fold**, and **every saved adapter was checked against the live model, with none left untrained.**', zh: '工程上的改動把訓練時間縮短了 **2.63 倍**，而**每一個存下來的適配器都對照線上模型檢查過，沒有任何一個是沒訓練到的。**' }
          ])
      });

      /* ---------------- evaluation ---------------- */
      out += h.sec({
        id: 't-eval',
        kick: { en: 'Evaluation', zh: '評估' },
        h2: { en: 'The part they most want you to reuse is not the model', zh: '他們最希望你重複使用的，不是那個模型' },
        lede: {
          en: 'Two rules stated up front: the unit of independence is the homology component, and a learned representation counts only if it beats controls that need no model at all.',
          zh: '兩條規則寫在最前面：獨立性的單位是同源成分，而一個學到的表徵只有在打敗「完全不需要模型」的對照時才算數。'
        },
        body:
          h.ul([
            { en: '**The unit of independence is the homology component.** Enzymes connected at any identity threshold always fall in the same fold, **so a model is never scored on a close relative of something it trained on.**', zh: '**獨立性的單位是同源成分。**在任何相似度門檻下相連的酵素一律被歸到同一個 fold，**所以一個模型永遠不會在「它訓練過的東西的近親」上被評分。**' },
            { en: '**A learned representation counts only if it beats controls that need no model at all**: sequence length and amino-acid composition. Both are free to compute.', zh: '**一個學到的表徵只有在打敗完全不需要模型的對照時才算數**——也就是序列長度與胺基酸組成。兩者的計算成本都是零。' }
          ]) +
          h.h3({ en: 'First, an embedding sanity check with real controls', zh: '首先，一次用了真正對照的嵌入合理性檢查' }) +
          h.p({
            en: 'ESMC-600M embeddings of the 30 %-pid centroids were UMAP\'d, **with negative controls (random and shuffled sequences from 64,730 family representatives, designed to separate composition from sequence order) and positive controls (random UniProt proteins, real sequence fragments) embedded identically and plotted alongside.** Result: shuffled and random controls form their own "junkyard" regions far from the real data, UniProt scatters randomly, and fragments hug the real data closely. **Only then is the clustering treated as signal.**',
            zh: '他們把 30% 相似度中心序列的 ESMC-600M 嵌入做了 UMAP——**並且把陰性對照（從 64,730 個家族代表序列產生的隨機與打亂序列，刻意用來把組成與序列順序分開）與陽性對照（隨機 UniProt 蛋白、真實序列片段）以完全相同方式嵌入並畫在一起。**結果：打亂與隨機對照形成自己的「垃圾場」區域，遠離真實資料；UniProt 隨機散落；而片段緊貼真實資料。**只有在這之後，那些叢集才被當成訊號。**'
          }) +
          h.warn({
            en: '**The finding about evaluation itself.** Under the random five-fold splits common in sequence-to-function work, stock ESM-C reaches **ρ = 0.72 on turnover number (kcat) and 0.74 on melting temperature**. Numbers that would look like a working model. Split by homology component, the same embeddings **lose 0.49 to 1.01 across the five human-curated targets**, while sequence length moves by at most 0.18. Between **90 % and 92 % of labelled sequences have a homologous relative elsewhere in the set**, so a random split almost always scores a model on a relative of something it trained on. Their sentence: **"Without the component split, we would have reported the inflated numbers."**',
            zh: '**關於「評估本身」的那個發現。**在序列對功能研究中常見的隨機五折切分下，原版 ESM-C 在**轉換數（kcat）上達到 ρ = 0.72、在熔點上達到 0.74**——這些數字看起來就像一個可用的模型。但改成依同源成分切分之後，同一組嵌入在**五個人工策展標的上掉了 0.49 到 1.01**，而序列長度最多只移動 0.18。**已標註序列中有 90% 到 92% 在集合中別處存在同源近親**，所以隨機切分幾乎總是在「它訓練過的東西的親戚」上評分。他們的句子是：**「如果沒有依成分切分，我們就會報告那些被吹大的數字。」**'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'CONTROLS WIN', zh: '對照勝出' },
            title: { en: 'Spearman ρ on kcat, after the leakage is removed', zh: '移除洩漏之後，kcat 上的 Spearman ρ' },
            sub: { en: '227 sequences across 40 homology components. The two no-model controls outscore both embeddings on all twelve target sets.', zh: '227 條序列、橫跨 40 個同源成分。兩個不需要模型的對照在全部十二個標的集合上都勝過兩種嵌入。' },
            data: [
              { label: { en: 'Sequence length (no model)', zh: '序列長度（無模型）' }, v: 0.343, note: { en: 'longer PETases have higher catalytic efficiency: ρ = +0.350, p = 0.001', zh: '較長的 PETase 有較高催化效率：ρ = +0.350、p = 0.001' } },
              { label: { en: 'Stock ESM-C embeddings', zh: '原版 ESM-C 嵌入' }, v: -0.025, note: { en: 'no usable signal', zh: '沒有可用的訊號' } },
              { label: { en: 'PlasticESM embeddings (theirs)', zh: 'PlasticESM 嵌入（他們的）' }, v: -0.217, note: { en: 'worse than stock, and worse than free', zh: '比原版更差，也比「免費的方法」更差' } }
            ],
            opts: { dec: 3, xlabel: { en: 'Spearman ρ against measured kcat', zh: '對實測 kcat 的 Spearman ρ' } },
            caption: { en: 'Read from the team\'s Dry Lab Model page. Length\'s own signal replicates: jackknife interval 0.152 to 0.522.', zh: '讀自該隊 Dry Lab Model 頁。序列長度自身的訊號是可重現的：jackknife 區間 0.152 到 0.522。' }
          }) +
          h.take({ en: 'And then they diagnose why their own model loses', zh: '接著他們診斷自己的模型為什麼輸' }, {
            en: 'Only **53 of 1,137 labelled sequences (4.7 %)** appear among the 60 %-cluster draws PlasticESM trained on. Most labels describe **engineered literature variants rather than natural sequences**, and **48 % of all labelled sequences sit in one homology component.** Their reading: *"The model is being asked to rank point mutants within one family, from labels that barely overlap the population we want to screen."* That turns a negative result into a plan instead of an excuse.',
            zh: '在 PlasticESM 訓練用的 60% 叢集抽樣中，只有 **1,137 個已標註序列中的 53 個（4.7%）**出現過。大多數標籤描述的是**文獻中的工程變異體，而不是天然序列**，而且**所有已標註序列中有 48% 落在同一個同源成分裡。**他們的判讀是：*「這個模型被要求在單一家族內部為點突變體排序，而所用的標籤幾乎與我們想篩選的那個族群沒有交集。」*這就把一個負面結果變成一個計畫，而不是一個藉口。'
          }) +
          h.p({
            en: '**And the loop is designed to fix the labels, not to flatter the model.** Round 1: the wet lab screens the LOBSTER library of **1,744 sequences** from the *Is*PETase and LCC clusters, adding measurements on the sequences the model is meant to explore. **Round 2 will be chosen by the model\'s uncertainty, not by its predicted activity**: among the clusters whose environmental metadata looks promising, test the ones the model is least sure about. It will be judged on the same component-grouped benchmark with the same controls, **"so any improvement we report will be one that a random split could not have produced."**',
            zh: '**而這個迴圈的設計是為了修標籤，不是為了讓模型好看。**第一輪：濕式實驗篩選由 LOBSTER 設計、來自 *Is*PETase 與 LCC 叢集的 **1,744 條序列**文庫，為模型真正該探索的那些序列補上量測。**第二輪將依模型的不確定性、而不是依它預測的活性來挑選**——在環境詮釋資料看起來有希望的叢集中，去測模型最沒把握的那些——而且仍以同一套依成分分組的基準與同樣的對照來評判，**「這樣我們報告的任何改善，都不可能是隨機切分造成的」。**'
          }) +
          h.note({
            en: '**Their explicit ask:** *"The part we most want others to reuse is the evaluation protocol, not the model."* Split by connected homology components rather than at random; standardise each fold\'s predictions before pooling them; use jackknife intervals and permutation tests over components **rather than a component bootstrap, which they found excludes zero far too often under the null**; and require any learned representation to beat sequence length and composition. Shipped as a three-function statistics module (`grouped_out_of_fold`, `jackknife_ci`, `permutation_p`) **that applies unchanged to any enzyme family with activity labels.**',
            zh: '**他們的明確請求：***「我們最希望別人重複使用的是這套評估協議，不是模型。」*依相連的同源成分切分、而不是隨機切分；在合併之前先把每一折的預測標準化；在成分層級使用 jackknife 區間與排列檢定，**而不是成分層級的 bootstrap——他們發現後者在虛無假設下排除零的頻率遠高於應有的水準**；並要求任何學到的表徵都必須打敗序列長度與胺基酸組成。這些以一個三函數的統計模組交付——`grouped_out_of_fold`、`jackknife_ci`、`permutation_p`——**而且可以原封不動套用到任何有活性標籤的酵素家族上。**'
          }) +
          h.h3({ en: 'LOBSTER, and the prior art it had to beat', zh: 'LOBSTER，以及它必須超越的先前技術' }) +
          h.p({
            en: '**L**ibrary **O**ptimization for **B**ioprospecting **S**equences **T**hrough **E**conomical **R**ecombination. Rather than buying full-length DNA per candidate, it designs **Golden Gate fragment pools plus degenerate codons** that combinatorially assemble into full-length PETase cores, maximising *coverage* of real PETadex cores subject to nucleotide-quantity and library-size caps. **A roughly 45 % nucleotide cost reduction.**',
            zh: '**L**ibrary **O**ptimization for **B**ioprospecting **S**equences **T**hrough **E**conomical **R**ecombination。它不是為每個候選買一條全長 DNA，而是設計**Golden Gate 片段池加上退化密碼子**，讓它們能組合組裝成全長的 PETase 核心，在核苷酸用量與文庫大小的上限下最大化對真實 PETadex 核心的*覆蓋率*——**核苷酸成本大約降低 45%。**'
          }) +
          h.p({
            en: 'The prior art is named and the novelty stated precisely: **SwiftLib (2015)** and **DeCoDe (2020)** share the goal of maximising coverage with minimal purchases but **use degenerate codons only**; **GGAssembler (2024)** introduces fragment assembly but **treats coverage as position-independent**. In their case coverage occurs at the sequence level and multiple mutations must co-occur to cover one PETase, so **LOBSTER\'s novelty is considering both degenerate codon and fragment operations to maximise coverage on a sequence level.** A side effect they flag rather than hide: combinatorial assembly also produces **chimeras that were never in the PETadex**: extra screening space, plausibly active, but not extra validated enzymes.',
            zh: '先前技術被點名，而新穎性被精確陳述：**SwiftLib（2015）**與 **DeCoDe（2020）**雖然同樣追求「用最少採購量最大化覆蓋率」，但**只使用退化密碼子**；**GGAssembler（2024）**引入了片段組裝，但**把覆蓋率當成與位置無關**。在他們的情況裡，覆蓋率發生在序列層級，而且要覆蓋一個 PETase 需要多個突變同時出現，所以 **LOBSTER 的新穎性在於同時考慮退化密碼子與片段操作，以在序列層級最大化覆蓋率。**一個他們主動標出而不是藏起來的副作用：組合組裝也會產生**從未出現在 PETadex 中的嵌合體**——那是額外的篩選空間，也可能有活性，但不是額外被驗證的酵素。'
          })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 't-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Two assays built because both existing options are wrong', zh: '兩個因為「現有兩個選項都不對」而被做出來的試驗' },
        lede: {
          en: 'Existing PETase screens trade substrate fidelity for throughput, or throughput for rigour. Neither is sufficient at the scale of millions of candidates.',
          zh: '現有的 PETase 篩選要嘛用底物真實性換通量，要嘛用通量換嚴謹性。在數百萬個候選的規模下，兩者都不夠。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Existing option', zh: '現有選項' }, w: '20%' },
              { t: { en: 'What it gives, and what it cannot', zh: '它給了什麼、又給不了什麼' } }
            ],
            rows: [
              [{ en: '**Halo plate assay**', zh: '**暈圈平板試驗**' },
               { en: 'Dissolves **BHET, the soluble subunit of PET**, into agar and reads the reaction product as a white halo around each colony. It establishes that an enzyme is catalytically active. But **"it does not clearly establish whether the enzyme can depolymerize a crystalline polymer — the core claim that matters for plastic waste."**', zh: '把**BHET，也就是 PET 的可溶性單元**溶進培養基，再把反應產物讀成菌落周圍的白色暈圈。它能確立一個酵素有催化活性——但**「它無法明確確立這個酵素是否能把結晶態聚合物解聚——而那才是對塑膠廢棄物真正重要的核心主張。」**' }],
              [{ en: '**HPLC**', zh: '**HPLC**' },
               { en: 'Resolves and quantifies the actual degradation products TPA and MHET, and remains the gold standard for measuring activity. But it **limits a screen to tens of enzymes rather than thousands**, and the cost ruled it out as a primary screening procedure.', zh: '能分離並定量真正的分解產物 TPA 與 MHET，仍然是量測活性的黃金標準——但**它把一次篩選限制在數十個酵素、而不是數千個**，而成本使它無法作為主要篩選流程。' }]
            ],
            min: 620,
            source: { en: 'Read from the team\'s Wet Lab Overview.', zh: '讀自該隊 Wet Lab Overview。' }
          }) +
          h.take({ en: 'One mechanism, two readouts, and the geometry is the argument', zh: '一個機制、兩種讀值，而幾何本身就是論證' }, {
            en: 'Copper is loaded **into** a PET mesh. A PETase displayed on the outer membrane of *E. coli* hydrolyses the mesh, which **physically releases copper** into the medium and nearby periplasm, activating the copper-responsive **pCusC** promoter. The elegance is in the geometry: **because the copper sits inside the polymer, the reporter can only fire if an enzyme cuts the polymer itself rather than a soluble subunit.** Swap one gene to swap assay. **Biosensor** puts msGFP2 downstream of pCusC so an active PETase makes its colony fluoresce; **Selection** puts a sulfonamide resistance gene there instead, so an active PETase lets its colony grow on antibiotic.',
            zh: '銅被載進 PET 網的**內部**。展示在大腸桿菌外膜上的 PETase 水解這張網，於是**在物理上把銅釋放**到培養基與附近的周質中，啟動對銅有反應的 **pCusC** 啟動子。巧妙之處在幾何：**因為銅就坐在聚合物裡面，報告系統只有在某個酵素切開聚合物本身、而不是切開可溶單元時才會啟動。**換一個基因就能換試驗——**Biosensor** 把 msGFP2 接在 pCusC 下游，於是有活性的 PETase 會讓它的菌落發螢光；**Selection** 則換成磺胺類抗性基因，於是有活性的 PETase 會讓它的菌落在抗生素上長起來。'
          }) +
          h.h3({ en: 'Design decisions with reasons attached', zh: '每個設計決定都附上理由' }) +
          h.ul([
            { en: '**Why copper at all:** it survives molten PET, where common inducers do not. **IPTG decomposes below PET\'s melting point**, so the inducer can later be integrated into the polymer itself. Copper is also an established *S. cerevisiae* inducer, which keeps a path to yeast open.', zh: '**為什麼用銅：**它能撐過熔融的 PET，而常見的誘導劑不能——**IPTG 在低於 PET 熔點的溫度就分解**——所以這個誘導劑之後可以被整合進聚合物本身。銅同時也是 *S. cerevisiae* 的既有誘導劑，這讓通往酵母的路留著。' },
            { en: '**pCusC over pcopA:** CusC detects **periplasmic** copper, which "may be the first location of copper intake into cells", so it avoids the false negatives CueR\'s cytoplasm-only sensing would cause. It also **works optimally near toxic copper concentrations**, which both removes a toxicity worry and makes it **a less leaky promoter.**', zh: '**選 pCusC 而不是 pcopA：**CusC 偵測的是**周質**中的銅，而那「可能是銅進入細胞的第一個位置」，所以它避開了 CueR 只偵測細胞質會造成的偽陰性。它同時也**在接近毒性濃度的銅下運作最佳**，這既消除了毒性顧慮，也讓它成為**一個比較不漏的啟動子。**' },
            { en: '**Plasmid orthogonality designed, not hoped for:** the display plasmid is ColE1-based with AmpR; the assay plasmid is **pJUMP26-1A, "one of the only non-pBR322/ColE1 ori-based backbones in the 2026 iGEM distribution kit", with a medium-copy p15A ori and KanR**. A different copy-number determination system and a different marker, so the two are independently and stably maintained *and* double transformants are selectable.', zh: '**質體正交性是設計出來的，不是祈求來的：**展示質體以 ColE1 為基礎、帶 AmpR；而試驗質體是 **pJUMP26-1A，「2026 年 iGEM 配送套件中少數非 pBR322／ColE1 複製起點的骨架之一」，使用中拷貝的 p15A 複製起點與 KanR**——不同的拷貝數決定系統、不同的標記，所以兩者能各自獨立且穩定地維持，*而且*雙轉形株可以被選出來。' },
            { en: '**The display scar is placed where it cannot hurt.** An ice nucleation protein anchor (BBa_K523013) plus a **20-residue flexible GS linker designed on Chen et al. 2013 principles**, then **outward-facing BsmBI sites arranged so the vector overhang corresponds to the last four nucleotides of the GS linker**, ensuring the Golden Gate scar **cannot shift the reading frame of any PETase cloned in.**', zh: '**展示系統的接縫被放在不會造成傷害的地方。**一個冰核蛋白錨定（BBa_K523013）加上一個**依 Chen 等人 2013 年原則設計的 20 殘基柔性 GS 連接子**，接著是**向外的 BsmBI 切位，刻意安排成讓載體黏端對應 GS 連接子的最後四個核苷酸**——確保 Golden Gate 的接縫**不可能改變任何接進去的 PETase 的讀框。**' },
            { en: '**And the verification tag reports insertion.** Downstream of the BsmBI sites sits a second GS linker and a FLAG tag for confirming surface display, with **a stop codon added inside the spacer so the C-terminal FLAG tag is only expressed in constructs that actually contain a PETase.** The tag is the insertion check, not a separate experiment.', zh: '**而驗證標籤本身就報告「有沒有接進去」。**BsmBI 切位下游是第二個 GS 連接子與一個用來確認表面展示的 FLAG 標籤——而**間隔序列裡刻意加了一個終止密碼子，讓 C 端的 FLAG 標籤只有在真的含有 PETase 的構建體中才會表達。**這個標籤本身就是插入檢查，不是另一個實驗。' },
            { en: '**The antibiotic was chosen for assay logic.** Bacteriostatic rather than bactericidal, "providing cells enough time to express PETase, break down PET, release copper, and activate the resistance gene". Trimethoprim/dfrB10 was considered and partly rejected because trimethoprim systems are **susceptible to high background escape frequency by spontaneous folA mutations**; they went with sulfadiazine plus sul1/sul2. Golden Gate was attempted with all three resistance genes and **only sul1 assembled**, so all testing used sul1.', zh: '**抗生素是依試驗邏輯選的。**選抑菌型而不是殺菌型，「讓細胞有足夠時間表達 PETase、分解 PET、釋放銅並啟動抗性基因」。甲氧苄啶／dfrB10 被考慮過並部分排除，因為甲氧苄啶系統**容易因 folA 自發突變而有高背景逃脫率**；他們改用磺胺嘧啶搭配 sul1／sul2。三個抗性基因都試過 Golden Gate，而**只有 sul1 成功組起來**，所以所有測試都用 sul1。' },
            { en: '**And the medium was chosen to close a specific false-positive route.** Because **exogenous thymine or thymidine bypasses folate inhibition and makes susceptible bacteria appear resistant**, all Selection assays run on **thymine- and thymidine-free Mueller-Hinton agar.**', zh: '**而培養基是為了封住一條特定的偽陽性路徑而選的。**因為**外源的胸腺嘧啶或胸苷會繞過葉酸抑制，讓原本感受性的細菌看起來像有抗性**，所以所有 Selection 試驗都在**不含胸腺嘧啶與胸苷的 Mueller-Hinton 培養基**上進行。' }
          ]) +
          h.h3({ en: 'Controls run before results', zh: '對照在結果之前先做' }) +
          h.ul([
            { en: '**Copper toxicity titrated first:** dilutions from 10² to 10¹⁰ against 0, 0.25, 0.5, 1, 2, 4 and 8 mM CuSO₄ mixed into agar. **Up to 4 mM did not detrimentally alter bacterial growth**, which sets how much copper may be loaded into the PET.', zh: '**先滴定銅的毒性：**從 10² 到 10¹⁰ 的稀釋對上混進培養基的 0、0.25、0.5、1、2、4、8 mM CuSO₄。**到 4 mM 都沒有明顯不利影響細菌生長**，這就決定了能把多少銅載進 PET。' },
            { en: '**A dedicated copper-leakage test:** cells carrying only the reporter plasmid, with mesh placed on the agar. **No fluorescence**, so leaching is not a false-positive route. Background fluorescence was insignificant.', zh: '**一個專門的銅滲漏測試：**只帶報告質體的細胞，把網子放在培養基上。**沒有螢光**——所以滲漏不是一條偽陽性路徑——而背景螢光也不顯著。' },
            { en: '**Copper-induced GFP verified with two different negative controls:** the reporter plasmid on 0 mM copper, confirming fluorescence depends on copper; and the **empty assay plasmid with no msGFP2 on copper**, confirming fluorescence depends on msGFP2 rather than on copper or anything else.', zh: '**銅誘導 GFP 用兩個不同的陰性對照驗證：**報告質體在 0 mM 銅上，確認螢光依賴銅；以及**不含 msGFP2 的空試驗質體在含銅條件下**，確認螢光依賴 msGFP2，而不是依賴銅或其他任何東西。' }
          ]) +
          h.warn({
            en: '**First assay runs, reported as partial.** Characterised PETases were loaded into PD-V2: LCC, Fast-PETase, IsPETase, M4-Q IsPETase and, the important one, **Dead-IsPETase as a catalytically inactive negative control**, plus empty vector. **Biosensor: only the M4-Q IsPETase plate grew in the initial test, and those colonies did fluoresce**, "providing evidence that the Biosensor assay is functional", which is as strong as one plate allows. **Selection: every test plate except Dead-IsPETase showed growth**, which is the pattern a working assay should give. Still open and stated: colony fluorescence **cannot be quantified beyond binary for want of equipment**, and even a positive *"may also reflect PETase expressed at high levels, where higher enzyme amounts increase catalytic activity and inducer access"* rather than a better enzyme; display has yet to be verified by fluorescent FLAG antibody; and dry-lab sequences had not yet been tested.',
            zh: '**第一輪試驗結果，以「部分完成」報告。**已特性化的 PETase 被裝進 PD-V2——LCC、Fast-PETase、IsPETase、M4-Q IsPETase，以及重要的那一個：**作為催化失活陰性對照的 Dead-IsPETase**——再加上空載體。**Biosensor：初次測試中只有 M4-Q IsPETase 那個盤長起來，而那些菌落確實發出螢光**，「提供了 Biosensor 試驗可運作的證據」——而這是一個盤所能支撐的最大強度。**Selection：除了 Dead-IsPETase 以外，每個測試盤都有生長**，而那正是一個可用試驗應該給出的樣式。仍然未決並被寫出來的部分：菌落螢光**因為設備不足而無法量化到二元以上**，而且即使是陽性也*「可能只是反映 PETase 表達量高，而較多的酵素會提高催化活性與誘導劑的可及性」*，而不是代表那是更好的酵素；表面展示尚未用螢光 FLAG 抗體驗證；而乾式實驗產出的序列當時還沒測試。'
          }) +
          h.note({
            en: 'The copper-mesh preparation is written as a protocol **with its failure modes attached**: NaOH pretreatment for 40 minutes at 37 °C then washed thoroughly, because **incomplete NaOH removal precipitates CuSO₄ and compromises the integration**; CuSO₄ heated to ~90 °C **with constant monitoring to avoid exceeding 100 °C, which promotes precipitation**; MilliQ added in small increments as water evaporates; and the solution **neutralised to pH 7.5 specifically to optimise the accuracy of the copper test strip reading.**',
            zh: '銅網的製備被寫成一份**附帶失敗模式的流程**：先在 37 °C 用 NaOH 前處理 40 分鐘，然後徹底沖洗，因為**NaOH 沒洗乾淨會讓 CuSO₄ 沉澱、破壞整個載入過程**；CuSO₄ 加熱到約 90 °C，而且**要持續監看以避免超過 100 °C，因為那會促進沉澱**；水分蒸發時以小量逐次補加 MilliQ 水；而溶液**被中和到 pH 7.5，目的明確就是為了讓銅試紙的讀值更準確。**'
          })
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 't-hw',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: 'The third leg exists because of a limitation of the second', zh: '第三條腿之所以存在，是因為第二條腿的一個限制' },
        lede: {
          en: 'The reason is stated as a limitation of the wet lab: the two assays test one condition at a time, and a fitness landscape needs temperature, pH and media varied. That ground-truth data is what feeds the model.',
          zh: '理由被寫成濕式實驗的一個限制：那兩個試驗一次只能測一個條件，而要描繪適存度地景需要改變溫度、pH 與培養基。那些真值資料正是餵給模型的東西。'
        },
        body:
          h.p({
            en: 'So: an open-source Arduino bioreactor **under $250, about $204 CAD each**, designed to run in parallel batches of **up to 96**, connected over USB serial so it needs a laptop and a wall socket and nothing else. Up to seven per USB-C charger and seven per laptop USB port. In the final experiment it **grew *E. coli* over four hours, confirmed against a spectrophotometer.**',
            zh: '於是：一台開源的 Arduino 生物反應器，**成本低於 250 美元、每台約 204 加元**，設計上可以**最多 96 台**平行成批運行，透過 USB 序列連線，所以只需要一台筆電與一個插座、別無其他。每個 USB-C 充電器最多接七台、每個筆電 USB 埠最多七台。在最終實驗中，它**在四小時內養出了大腸桿菌，並以分光光度計確認。**'
          }) +
          h.ul([
            { en: '**A requirements table with a priority and a written justification per row**, including why something is *low* priority (25 → 37 °C in under an hour matters little against experiments that run for days, and no user intervention is needed after setting the target) and where a tolerance comes from (**0.3 mm sits inside the printer\'s 0.1–0.5 mm accuracy**).', zh: '**一張需求表，每一列都有優先度與書面理由**——包括為什麼某項是*低*優先度（25→37 °C 一小時內達成，對要跑好幾天的實驗影響很小，而且設定目標之後不需要使用者介入），以及某個公差是怎麼來的（**0.3 mm 落在列印機 0.1–0.5 mm 的精度範圍內**）。' },
            { en: '**Temperature:** peak around 60 °C, and **37 °C held within ±0.3 °C** against a stated budget of ±1.5 °C total (±1 control accuracy, ±0.5 probe accuracy). The budget is published, so the measured number can be judged.', zh: '**溫度：**峰值約 60 °C，而**37 °C 維持在 ±0.3 °C 以內**，而他們寫明的預算是總計 ±1.5 °C（控制精度 ±1、探頭精度 ±0.5）。預算被公開，所以量到的數字才能被評價。' },
            { en: '**OD done twice over.** A red LED with **two identical photodiodes, one reference for environmental and LED drift and one collecting**, so differences come from the environment rather than from the hardware, with an I2C address conflict between the two identical sensors resolved. Two photodiodes is noted as standard in bioreactors.', zh: '**OD 做了兩套。**一顆紅光 LED 搭配**兩個完全相同的光二極體——一個作為參考以扣除環境與 LED 漂移、一個負責量測**——讓差異來自環境、而不是來自硬體；而兩個相同感測器之間的 I2C 位址衝突也被解決了。他們指出「兩顆光二極體」在生物反應器中是標準做法。' },
            { en: '**The default output is the one that needs no calibration.** Normalised OD (nOD), a multiple of the starting density, is the default **because it needs no calibration**; OD600 is available through an automatic **3-point quadratic calibration against a spectrophotometer** (yeast curve **R² = 0.993**) and is explicitly *not* the default, "because not all experiments need OD600".', zh: '**預設輸出是那個不需要校正的。**正規化 OD（nOD），也就是起始密度的倍數，是預設值，**因為它不需要校正**；OD600 則透過自動的**三點二次校正對照分光光度計**取得（酵母曲線 **R²=0.993**），而且明確*不是*預設值，「因為不是所有實驗都需要 OD600」。' },
            { en: '**Iteration details that read as real:** V1\'s **eight jumper wires disconnected whenever the bioreactor was moved**, so users had to rewire eight connections each time. Replaced by one plug-in Stemma QT connector per sensor. V1\'s fan **minimum speed of 1800 RPM risked harming the bacteria**, so stirring was brought down to a controllable **150–300 RPM**, the recommended healthy range for *E. coli* with a stir bar. And in the dashboard, **controls were found to be going to all connected bioreactors instead of the selected one**, and fixed.', zh: '**讀起來像真的那些迭代細節：**V1 的**八條杜邦線只要搬動反應器就會鬆脫**，使用者每次都得重接八個接點——後來改成每個感測器一個插拔式 Stemma QT 接頭。V1 的風扇**最低轉速 1800 RPM 有傷害細菌的風險**，所以攪拌被降到可控的 **150–300 RPM**，那是用攪拌子培養大腸桿菌的建議健康範圍。而在儀表板上，他們發現**控制指令被送到所有已連線的反應器、而不是被選定的那一台**，並修掉了。' },
            { en: '**Live plotting was added because stakeholders asked for it**, replacing export-and-plot: users previously had to plot results in external apps after the experiment, and stakeholder feedback asked for it to be built in "to make it more scalable and less dependent on the user\'s own tools".', zh: '**即時繪圖是因為相關人要求才加上的**，取代「匯出再畫圖」：使用者原本必須在實驗結束後用外部程式畫圖，而相關人的回饋要求把它內建進去，「讓它更可擴展、也更不依賴使用者自己的工具」。' },
            { en: 'Three peristaltic pumps supported in the architecture, two inlet and one outlet, **with the subsystem fully functioning for one pump prototype**, and pH control named as future work. Stated as such rather than implied complete.', zh: '架構上支援三個蠕動泵——兩進一出——**而這個子系統目前在一個泵的原型上完全可運作**，pH 控制則被列為未來工作。這點被明確寫出來，而不是被暗示為已完成。' }
          ])
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 't-fail',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'Four limitations, each with a number', zh: '四個限制，每一個都有數字' },
        body:
          h.ul([
            { en: '**The labels are thin where it matters most.** Only **200 of the activity labels (1.53 %) are negatives, and 168 of those come from a single halo screen.** Once the split is repaired so that no homology group spans folds, **the held-out test fold holds 89 evaluated labels on 16 sequences.** One homology component contains 48 % of all labelled sequences, and **two shipped targets, relative activity and weight loss, span too few components to be scored at all.**', zh: '**標籤在最關鍵的地方很薄。**活性標籤中只有 **200 個（1.53%）是負例，而其中 168 個來自同一次暈圈篩選。**在切分被修正、使任何同源群組都不跨越折之後，**保留測試折只剩下 16 條序列上的 89 個被評估標籤。**單一個同源成分就包含了所有已標註序列的 48%，而**兩個已發布的標的——相對活性與重量損失——跨越的成分太少，根本無法被評分。**' },
            { en: '**Their strongest candidate signal is not established.** Structural geometry from predicted structures tracked melting temperature at **p = 0.0084**. But **the same test passes a pure-noise target in 4.5 % of null draws.** It rests on one family, "with nowhere to replicate it".', zh: '**他們最強的那個候選訊號並未被確立。**來自預測結構的結構幾何與熔點相關，**p = 0.0084**——但**同一個檢定在虛無抽樣中有 4.5% 的機率會讓一個純雜訊的標的通過。**它只建立在一個家族上，「而沒有地方可以重現它」。' },
            { en: '**The model has not been tested prospectively.** Wet-lab validation so far comes from a single round of assays, and **no library has yet been chosen by the model.** Round 2 will be the first, selected by model uncertainty, and **only its results can show whether that choice beats random sampling.**', zh: '**這個模型尚未被前瞻性地測試過。**目前的濕式驗證只來自一輪試驗，而**還沒有任何文庫是由模型挑選的。**第二輪會是第一次，依模型的不確定性挑選，而**只有它的結果才能顯示那樣的挑選是否勝過隨機抽樣。**' },
            { en: '**Annotation layers carry their own caveats.** Four known profile-rule defects remain unfixed, touching about 1.5 % of profiled BioSamples; the independent temperature check is real but small (**ε² = 0.044**); **half of BioSamples (50.6 %) carry no environment signal**, so profiled data leans toward well-described studies; BacDive growth means are unweighted; and the TED novelty cut-offs are provisional.', zh: '**註解層各自帶著自己的警語。**四個已知的剖析規則缺陷仍未修正，影響約 1.5% 的已剖析 BioSample；獨立的溫度檢查是真的，但效應很小（**ε² = 0.044**）；**半數 BioSample（50.6%）沒有環境訊號**，所以已剖析的資料偏向那些描述得比較完整的研究；BacDive 的生長平均值未加權；而 TED 的新穎性門檻是暫定的。' },
            { en: 'Plus, from the wet lab: **biosensor output is binary only**, for want of equipment; **only one of five characterised PETases grew in the first Biosensor test**; **only sul1 of three resistance genes assembled**; **PETase surface display is not yet confirmed by antibody**; the **pump subsystem is proven for one pump**; and **LOBSTER chimeras are plausible, not validated.**', zh: '另外，來自濕式實驗的部分：**生物感測器的輸出只能是二元的**，因為設備不足；**五個已特性化的 PETase 中只有一個在首次 Biosensor 測試中長起來**；**三個抗性基因中只有 sul1 組起來**；**PETase 的表面展示尚未由抗體確認**；**泵子系統只在一個泵上被證實**；而**LOBSTER 產生的嵌合體只是合理，而非已驗證。**' }
          ]) +
          h.note({
            en: '**Reproducibility.** The adapters, the pretraining corpus and the activity labels are all on Hugging Face, **with each label source also published separately**; the **model card reports the downstream results alongside the weights, "so no one reuses the adapters expecting them to predict activity"**; and every analysis step has a lab notebook as its primary record, **with retractions kept in place.**',
            zh: '**可重現性。**適配器、預訓練語料與活性標籤都放在 Hugging Face 上，**而每個標籤來源也各自分別公開**；**模型卡把下游結果與權重並列呈現，「這樣就沒有人會以為這些適配器可以用來預測活性而重複使用它們」**；而每個分析步驟都以實驗記錄本作為主要紀錄，**而且撤回的內容被原樣保留。**'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 't-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Toronto', zh: '我們會從 Toronto 抄什麼' },
        body:
          h.ul([
            { en: '**Let the stakeholder set the specification.** "70 °C is industrially useless" became a North Star Goal of room temperature. The clearest case in either Top 10 of human practices choosing a number rather than endorsing a plan.', zh: '**讓相關人決定規格。**「70 °C 在工業上沒有用」變成了一個「室溫」的北極星目標——這是兩份前十名中，社會實踐工作選定了一個數字、而不只是替計畫背書的最清楚例子。' },
            { en: '**Split by homology component, not at random, and say what the random split would have claimed.** ρ = 0.72 → does not beat sequence length is the single most useful sentence in the 2026 dry labs.', zh: '**依同源成分切分、而不是隨機切分，並且說清楚隨機切分本來會主張什麼。**ρ = 0.72→贏不過序列長度，是 2026 年所有乾式實驗中最有用的一句話。' },
            { en: '**Make a no-model control the bar.** Sequence length and amino-acid composition are free to compute; if a language model cannot beat them, it has not earned a place in the screen.', zh: '**把「不需要模型的對照」當成門檻。**序列長度與胺基酸組成的計算成本是零；如果一個語言模型打不過它們，它就還沒有資格進到篩選流程裡。' },
            { en: '**Audit your LLM against human–human disagreement, not against truth.** 70 % against a human ceiling of 83 % is interpretable; "70 % accurate" would not be.', zh: '**用「人與人之間的不一致」來稽核你的大型語言模型，而不是用「真值」。**70% 對上人類上限 83% 是可判讀的；單寫「準確率 70%」則不是。' },
            { en: '**Publish the arithmetic you could have rounded up.** Two seeds over 1.8 M clusters give 1.38× the sequences, not 2×, because 48.7 % of clusters are singletons.', zh: '**把你本來可以含糊帶過的算術公開。**在 180 萬個叢集上用兩個隨機種子，得到的是 1.38 倍而不是 2 倍的序列數，因為 48.7% 的叢集只有一個成員。' },
            { en: '**Build the assay around what the claim requires.** Copper inside the polymer means a positive can only come from cutting the polymer. The single best piece of assay design we read this year.', zh: '**依你的主張所要求的條件去設計試驗。**銅在聚合物內部，意味著陽性結果只可能來自切開聚合物——這是我們今年讀到最好的一個試驗設計。' },
            { en: '**Design orthogonality instead of hoping for it**: a different ori family, a different marker, and the double plate as the screen.', zh: '**把正交性設計出來，而不是祈求它** ——不同的複製起點家族、不同的標記，而雙抗盤本身就是篩選。' },
            { en: '**Put the scar where it cannot hurt, and make the verification tag report insertion.** BsmBI sites arranged so the Golden Gate scar lands inside the linker, and a stop codon that makes the FLAG tag appear only when a PETase is present.', zh: '**把接縫放在不會造成傷害的地方，並讓驗證標籤本身報告插入。**BsmBI 切位被安排成讓 Golden Gate 接縫落在連接子裡，而一個終止密碼子讓 FLAG 標籤只在有 PETase 時才出現。' },
            { en: '**Choose the medium to close a false-positive route.** Thymine-free Mueller-Hinton, because thymidine uptake would fake resistance.', zh: '**為了封住一條偽陽性路徑而選培養基。**不含胸腺嘧啶的 Mueller-Hinton，因為攝取胸苷會偽造出抗性。' },
            { en: '**Run the leakage control and the toxicity titration before the experiment, and publish both.** Either one, left out, would have made the first positive uninterpretable.', zh: '**在實驗之前先做滲漏對照與毒性滴定，而且兩者都公開。**少了任何一個，第一個陽性結果都會變得無法判讀。' },
            { en: '**Make the default output the one that needs no calibration.** nOD by default, OD600 on request. A decision that respects the user who has no spectrophotometer.', zh: '**把預設輸出設成那個不需要校正的。**預設 nOD，需要時才給 OD600——一個尊重「手上沒有分光光度計的使用者」的決定。' },
            { en: '**Publish each label source separately, keep retractions in place, and put the downstream result on the model card** so nobody reuses your weights for a job they fail at.', zh: '**把每個標籤來源分別公開、把撤回的內容原樣保留，並把下游結果寫在模型卡上**，這樣就沒有人會把你的權重拿去做它做不到的事。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that the evaluation protocol — not the corpus and not the model — is the most valuable thing Toronto produced this year. Everything else is the team\'s own, read from [2026.igem.wiki/toronto](https://2026.igem.wiki/toronto/).',
            zh: '標示為我們的看法：上面十二點，以及「那套評估協議——不是語料庫、也不是模型——才是 Toronto 今年最有價值的產出」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/toronto](https://2026.igem.wiki/toronto/)。'
          })
      });

      return out;
    }
  };
})(window);
