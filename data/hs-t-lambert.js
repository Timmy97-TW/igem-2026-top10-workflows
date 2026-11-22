/* Lambert-GA — SWARM. High School Grand Prize, Best Model, Best Wiki,
   Best Sustainable Development Impact and Best Village Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/lambert-ga/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Send 15 designs out, get nothing back', zh: '送出 15 個設計，什麼都沒拿回來' },
        s: { en: 'Adaptyv Bio screening, round 1: nine negative binding calls, six with no usable measurement, zero binders', zh: 'Adaptyv Bio 第一輪篩選：九個判為不結合、六個沒有可用讀值、結合者零個' }, tone: 'r' },
      { l: { en: 'Build the expression system while waiting', zh: '等結果的同時把表達系統建好' },
        s: { en: 'VP3 into pET-28a(+) with an N-terminal 6×His tag; the minibinder into pET-11a with a C-terminal FLAG tag, so the two can be told apart on one column', zh: 'VP3 放進 pET-28a(+) 並帶 N 端 6×His 標記；minibinder 放進 pET-11a 並帶 C 端 FLAG 標記，好讓兩者在同一支管柱上可以被分辨' } },
      { l: { en: 'Test the method on a pair that is known to bind', zh: '先用一組已知會結合的配對檢查方法本身' },
        s: { en: 'GFP with an established anti-GFP nanobody, run through the same Ni-NTA pull-down and dot blot before any VP3 sample', zh: 'GFP 搭配既有的 anti-GFP 奈米抗體，在任何 VP3 樣品之前先跑同一套 Ni-NTA 沉降與點墨法' }, tone: 'g' },
      { l: { en: 'Round 2: 20 designs, one binder', zh: '第二輪：20 個設計，一個結合者' },
        s: { en: 'l79_s469532_mpnn9, 79 amino acids, BLI dissociation constant 603.6 nM; co-elution with VP3 reproduced in house by dot blot', zh: 'l79_s469532_mpnn9，79 個胺基酸，BLI 解離常數 603.6 nM；與 VP3 的共沖提在自己實驗室用點墨法重現' } },
      { l: { en: 'The RNAi arm stops at the reporter', zh: 'RNAi 這一支停在報告系統上' },
        s: { en: 'dsRNA transcribed against three mite genes, a pooled HiFi reporter plasmid left unverified, and 12 Sf9 transfection conditions that came out inconclusive', zh: '對三個蟎基因轉錄出 dsRNA、一個混合的 HiFi 報告質體沒有被驗證、12 個 Sf9 轉染條件的結果無法判定' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Ask the data whether the scores work', zh: '問資料：那些分數到底有沒有用' },
        s: { en: '5,721 labelled designs across 41 targets; 849 binders against 4,872 non-binders. Minimum ipSAE reaches ROC-AUC 0.806, a 38-metric ensemble only 0.541', zh: '41 個標靶上的 5,721 個有標註設計；849 個結合者對 4,872 個非結合者。minimum ipSAE 的 ROC-AUC 達 0.806，而 38 個指標的集成只有 0.541' }, tone: 'v' },
      { l: { en: 'Build PRINCE to rank patches, not residues', zh: '做出 PRINCE，排序表面區塊而不是單一殘基' },
        s: { en: 'Neighbouring residues grouped into candidate surface patches, with a crystal-contact and geometry check that flags where a neighbouring copy covers the proposed site', zh: '把相鄰殘基分組成候選表面區塊，並附帶晶體接觸與幾何檢查，標出鄰近複本蓋住提議位點的地方' } },
      { l: { en: 'Validate it on a split by antigen cluster', zh: '用依抗原分群切開的資料驗證它' },
        s: { en: '6,937 interfaces, 1,549 antigen clusters; 50.8 % top-three majority-hit over 251 test clusters, and 45.8 % on the 93 clusters with no training homolog', zh: '6,937 個界面、1,549 個抗原分群；251 個測試分群上前三命中率 50.8%，而在沒有訓練同源物的 93 個分群上是 45.8%' }, tone: 't' },
      { l: { en: 'Re-choose the epitope, then re-design', zh: '重新挑抗原表位，再重新設計' },
        s: { en: 'The first target region was unresolved in the capsid assembly; designs moved to the QP / A-ridge, where Q325 and P326 are exposed in the analysed assembly', zh: '第一個標靶區在外殼組裝體中沒有被解出；設計改到 QP / A-ridge，那裡的 Q325 與 P326 在所分析的組裝體中是外露的' } },
      { l: { en: 'Model the dose and the colony', zh: '把劑量和蜂群都建成模型' },
        s: { en: '1,000 parameter sets for a 40,000-bee colony over 56 days, and 800 six-year colony simulations across Atlanta and Ithaca', zh: '針對 4 萬隻蜂的蜂群、為期 56 天跑 1,000 組參數，以及橫跨 Atlanta 與 Ithaca 的 800 次六年蜂群模擬' }, tone: 'a' }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the empty round gave the dry lab its question', zh: '那個空手而回的輪次給了乾式實驗它的問題' } },
      { w: 3, d: 3, l: { en: 'a new epitope, chosen before the second batch shipped', zh: '一個新的抗原表位，在第二批送出之前就先選定' }, up: true }
    ]
  };

  PD.pages['hs-lambert'] = {
    label: { en: 'Lambert-GA', zh: 'Lambert-GA' },
    title: { en: 'Lambert-GA — SWARM', zh: 'Lambert-GA — SWARM' },
    render: function (h) {
      var t = team('lambert');
      var out = h.teamhero(t, {
        h1: {
          en: 'Design a binder against a target nobody has designed against — and ==write every claim at the size of the assay that produced it==.',
          zh: '對一個沒有人設計過的標靶做出結合蛋白——並且==把每個主張都寫成只有產生它的那個實驗那麼大==。'
        },
        lede: {
          en: 'Beekeepers in a US survey reported losing 55.6 % of their managed colonies in a single year, and the mite behind much of that carries Deformed Wing Virus with it. SWARM goes after both halves at once: a de novo minibinder against the viral capsid protein VP3, and a multiplexed RNAi construct against three *Varroa destructor* salivary-gland genes. The first design round produced 15 candidates and no binders; the second produced one, at 603.6 nM, after the team built PRINCE to re-choose where on VP3 to aim. What earns this page its own section below is not the binder. It is that the claims are written at the size of the assay behind them — "The gel alone does not establish sequence identity, complete annealing, or gene-silencing activity" — and that the sentence sits on the results page itself, not in a footnote at the bottom.',
          zh: '在一份美國調查中，養蜂人回報單一年度就損失了 55.6% 的管理蜂群，而造成其中大部分損失的那種蟎，身上還帶著畸翅病毒（DWV）。SWARM 同時處理兩半：一個對病毒外殼蛋白 VP3 的 de novo minibinder，以及一個對三個 *Varroa destructor* 唾液腺基因的多重 RNAi 構築。第一輪設計做出 15 個候選，沒有任何結合者；第二輪做出一個，親和力 603.6 nM，而在那之前，他們先做了 PRINCE 來重新挑選要打 VP3 的哪個位置。下面之所以要給這一頁單獨一節，不是因為那個結合蛋白，而是因為：這裡的主張都被寫成只有背後那個實驗那麼大——「光靠這張膠體並不足以證明序列身分、完全黏合，或基因沉默活性」——而且那句話就印在結果頁上，不是放在頁尾的註腳裡。'
        },
        chips: [
          { t: { en: 'DWV VP3 minibinder', zh: 'DWV VP3 結合蛋白' }, k: 'b' },
          { t: { en: 'Multiplexed RNAi, three genes', zh: '三基因多重 RNAi' }, k: 'v' },
          { t: { en: 'PRINCE, open source', zh: 'PRINCE，開放原始碼' }, k: 't' },
          { t: { en: 'Vapor-X, $80.07 in parts', zh: 'Vapor-X，零件 80.07 美元' }, k: 'g' },
          { t: { en: 'Claims sized to the assay', zh: '主張大小等於實驗' }, k: 'a' }
        ],
        stats: [
          { v: '1 of 35', l: { en: 'Confirmed binders across both campaigns — 18 negative calls, 16 with no usable measurement', zh: '兩輪合計確認的結合者——另有 18 個判為不結合、16 個沒有可用讀值' } },
          { v: '603.6 nM', l: { en: 'Combined BLI dissociation constant for that one binder, 95 % CI 497.1–733.3 nM', zh: '那一個結合者的合併 BLI 解離常數，95% 信賴區間 497.1–733.3 nM' } },
          { v: '45.8 % vs 23.8 %', l: { en: 'PRINCE top-three majority-hit on the 93 test clusters with no training homolog at ≥30 % identity', zh: 'PRINCE 在 93 個「沒有 ≥30% 同源訓練樣本」的測試分群上的前三命中率，對比隨機選取' } },
          { v: 'under $400', l: { en: 'Their own computation spend across the 35 tested candidates', zh: '35 個受測候選全部的運算花費，由他們自己報出' } },
          { v: '38 of 43', l: { en: 'Compounds recovered within 5 % of undried controls — measured at UAB, not by them', zh: '回收量落在未乾燥對照 5% 以內的化合物——由 UAB 量的，不是他們自己量的' } },
          { v: '12 conditions', l: { en: 'Sf9 transfection conditions tested, and published as inconclusive', zh: '測試過的 Sf9 轉染條件，而且公開寫明無法判定' } }
        ]
      });

      out += h.toc([
        { id: 'l-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'l-scope', t: { en: 'Claims sized to assays', zh: '主張與實驗等大' } },
        { id: 'l-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'l-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'l-dry', t: { en: 'Dry lab / PRINCE', zh: '乾式流程／PRINCE' } },
        { id: 'l-hard', t: { en: 'Hardware', zh: '硬體' } },
        { id: 'l-cost', t: { en: 'The economics claim', zh: '那個成本主張' } },
        { id: 'l-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'l-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'l-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'They tabulated the existing treatments, and the empty cell became the project', zh: '他們把現有療法列成一張表，而表上那個空格就變成了專案本身' },
        lede: {
          en: 'The mite and the virus are one problem with two halves. Every treatment on the market handles at most one of them.',
          zh: '蟎和病毒是同一個問題的兩半。市面上每一種療法最多只處理其中一半。'
        },
        body:
          h.p({
            en: '*Varroa destructor* wedges itself beneath the overlapping plates of a bee\'s abdomen and feeds on the fat body underneath; while it feeds, **Deformed Wing Virus escapes the mite and enters the bee**. Kill the mite and the virus load still has to fall; neutralise the virus and the mite still reproduces in capped brood. The numbers the team opens with are a US survey reporting **55.6 % of managed colonies lost between April 2024 and April 2025**, and large Georgia operations losing **about 88,000 colonies between October 2025 and June 2026**, at 17–20 % quarterly.',
            zh: '*Varroa destructor* 會把自己楔進蜜蜂腹部重疊的甲板底下，吸食下方的脂肪體組織；在牠吸食的過程中，**畸翅病毒就從蟎身上脫離、進入蜜蜂體內**。殺掉蟎，病毒量還是得降下來；中和病毒，蟎還是會在封蓋的育幼房裡繁殖。這支隊伍開場用的數字是一份美國調查：**2024 年 4 月到 2025 年 4 月之間有 55.6% 的管理蜂群損失**，而 Georgia 的大型蜂場在 **2025 年 10 月到 2026 年 6 月之間損失了約 88,000 群**，季度損失率 17–20%。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Approach', zh: '做法' }, w: '24%' },
              { t: { en: 'Examples', zh: '例子' }, w: '24%' },
              { t: { en: 'Limitation, as their table states it', zh: '限制，照他們表上的寫法' } }
            ],
            rows: [
              [{ en: 'Synthetic miticides', zh: '合成殺蟎劑' },
               { en: 'Amitraz, tau-fluvalinate, coumaphos', zh: 'Amitraz、tau-fluvalinate、coumaphos' },
               { en: 'Resistance **has been documented**; some leave residues in wax.', zh: '抗藥性**已有文獻記載**；有些會在蜂蠟中留下殘留。' }],
              [{ en: 'Organic acids', zh: '有機酸' },
               { en: 'Formic acid, oxalic acid', zh: '蟻酸、草酸' },
               { en: 'Formic acid can harm brood at high temperatures; **oxalic acid does not penetrate brood cappings.**', zh: '蟻酸在高溫下會傷害育幼；**草酸無法穿透育幼房的封蓋。**' }],
              [{ en: 'Mechanical and cultural methods', zh: '機械與管理手段' },
               { en: 'Drone brood removal, screened bottom boards', zh: '移除雄蜂育幼、網狀底板' },
               { en: 'Usually need to be combined with other controls.', zh: '通常必須和其他防治手段合併使用。' }],
              [{ en: 'RNA interference, registered 2025', zh: 'RNA 干擾，2025 年登記' },
               { en: 'Vadescana, sold as Norroa', zh: 'Vadescana，商品名 Norroa' },
               { en: '**Targets one mite gene, not DWV; requires open brood.**', zh: '**只針對一個蟎基因，不針對 DWV；而且需要未封蓋的育幼。**' }]
            ],
            min: 680,
            source: { en: 'Their Table 1, reproduced from the Project Description page. The emphasis is ours.', zh: '他們的 Table 1，轉錄自 Project Description 頁。粗體強調是我們加的。' }
          }) +
          h.take({ en: 'Why the table matters more than the molecule', zh: '為什麼這張表比那個分子更重要' }, {
            en: 'Read the last row again. The newest registered product in the field **targets one mite gene and does not touch the virus**, and it only works when the brood is open. SWARM is literally the two cells that table leaves blank: a binder for the virus, and three mite genes instead of one. Most iGEM projects assert a gap. This one **prints the gap as a table and lets the reader find it.**',
            zh: '把最後一列再讀一次。這個領域裡最新登記的產品**只針對一個蟎基因，而且完全碰不到病毒**，還必須在育幼未封蓋時才有效。SWARM 就是那張表留白的兩格：一個對付病毒的結合蛋白，以及三個而不是一個蟎基因。大多數 iGEM 專案是「宣稱」有缺口，而這支隊伍**把缺口印成一張表，讓讀者自己找到它。**'
          }) +
          h.p({
            en: 'And the framing quote is not from a paper. Claressa Lucas, a board member of the Metro Atlanta Beekeepers Association, told them: *"It\'s not a matter of IF there are Varroa mites — every colony has them."* Their own note on what changed as a result: her emphasis on how widespread the infestation is **moved SWARM from a preventative measure to something needed in colonies that are already struggling.**',
            zh: '而用來定調的那句話不是來自論文。Metro Atlanta Beekeepers Association 的理事 Claressa Lucas 告訴他們：*「問題不是有沒有瓦蟎——每一群都有。」*他們自己記下這句話改變了什麼：她強調感染有多普遍，**把 SWARM 從一個預防手段，挪成了一個已經在苦撐的蜂群現在就需要的東西。**'
          }) +
          h.cards([
            { chips: [{ t: { en: 'half one: the virus', zh: '第一半：病毒' }, k: 'b' }],
              h: { en: 'A de novo minibinder against VP3', zh: '一個對 VP3 的 de novo 結合蛋白' },
              p: { en: 'The starting evidence was a study in which **antibodies against the capsid proteins VP1 and VP3 cut viral loads eightfold** in infected bees. The team\'s own framing of the target: DWV had **no previously reported de novo minibinders and no experimentally validated minibinder-binding epitopes.**', zh: '出發點的證據是一項研究：**針對外殼蛋白 VP1 與 VP3 的抗體，把受感染蜜蜂的病毒量降到八分之一**。這支隊伍自己對標靶的描述是：DWV **先前沒有任何已報告的 de novo 結合蛋白，也沒有任何經實驗驗證的結合位點。**' } },
            { chips: [{ t: { en: 'half two: the mite', zh: '第二半：蟎' }, k: 'v' }],
              h: { en: 'Three salivary-gland genes, on purpose', zh: '刻意選三個唾液腺基因' },
              p: { en: '**Vd-CHIsal, Vd-CHIBIN and VdAV422**, each with a published effect behind it — reduced survival, 98–99 % transcript knockdown, reduced ingestion and fertility. Multiplexing is the answer to the resistance problem their own Table 1 names in the single-gene product, and they say so in those words.', zh: '**Vd-CHIsal、Vd-CHIBIN 與 VdAV422**，每一個背後都有已發表的效果——存活下降、轉錄本敲降 98–99%、攝食與生殖力下降。做成多重，正是對他們自己 Table 1 在單基因產品上指出的抗藥性問題的對策，而他們也就是這樣寫的。' } }
          ])
      });

      /* ---------------- claims sized to assays ---------------- */
      out += h.sec({
        id: 'l-scope',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'The standout: every claim is the size of the assay that produced it', zh: '最突出的一點：每個主張的大小，剛好等於產生它的那個實驗' },
        lede: {
          en: 'Not a limitations section. These sentences are the conclusions, written down where the result is reported, in the paragraph that reports it.',
          zh: '這不是一個限制一節。這些句子本身就是結論，被寫在結果被報告的地方、就在報告它的那一段裡。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '21%' },
              { t: { en: 'The sentence, as published', zh: '公開的那句話' } }
            ],
            rows: [
              [{ en: 'Minibinder co-elution', zh: '結合蛋白共沖提' },
               { en: '"Together these results provide **preliminary evidence** of successful VP3–minibinder binding, **although further testing is necessary to confirm binding specificity.**" The logic is printed with it: the minibinder lacks a His tag, so co-elution is the signal. ImageJ integrated density, per fraction — VP3 peaks at 46,290 in Wash 4 and 32,936 in Elution 1; the minibinder alone never exceeds 2,783; the combined sample gives 8,427 anti-His against 7,501 anti-FLAG in Wash 3.', zh: '「綜合起來，這些結果提供了 VP3 與結合蛋白成功結合的**初步證據**，**不過仍需進一步測試來確認結合專一性。**」推論的邏輯和結論一起印出來：結合蛋白沒有 His 標記，所以共沖提就是訊號。ImageJ 的積分密度逐一分管列出——VP3 在 Wash 4 達到 46,290、Elution 1 為 32,936；單獨的結合蛋白從未超過 2,783；混合樣品在 Wash 3 為 anti-His 8,427 對 anti-FLAG 7,501。' }],
              [{ en: 'GFP positive control', zh: 'GFP 陽性對照' },
               { en: '"These experiments used an **established anti-GFP nanobody, not our de novo GFP minibinder candidates.**" The control validated the pull-down method, not their own designs — 76 % of recovered GFP-only fluorescence in the flowthrough, against about 91 % of combined-condition fluorescence in the low-imidazole washes.', zh: '「這些實驗使用的是**既有的 anti-GFP 奈米抗體，不是我們自己 de novo 設計的 GFP 候選。**」這個對照驗證的是沉降方法，不是他們自己的設計——單獨 GFP 的回收螢光有 76% 出現在流穿液，而混合條件下約 91% 的螢光出現在低 imidazole 洗液中。' }],
              [{ en: 'The BLI affinity result', zh: 'BLI 親和力結果' },
               { en: 'The validation results "**distinguish binding to the tested VP3 construct from antiviral protection in bees, which was not established by this assay.**" Elsewhere: "the precise contact residues remain computationally predicted."', zh: '驗證結果「**把『與所測試的 VP3 構築結合』和『在蜜蜂體內的抗病毒保護』區分開來；後者並未由這個實驗建立。**」另一處還寫著：「確切的接觸殘基目前仍只是運算預測。」' }],
              [{ en: 'RNA gel', zh: 'RNA 膠體' },
               { en: '"The gel alone **does not establish sequence identity, complete annealing, or gene-silencing activity.**"', zh: '「光靠這張膠體**並不足以證明序列身分、完全黏合，或基因沉默活性。**」' }],
              [{ en: 'A gel check they skipped', zh: '一個他們略過的膠體檢查' },
               { en: '"We did **not** verify the assembled product by gel electrophoresis, as the low DNA concentration and the **anomalous migration of circular assembly products** would have made the result difficult to interpret." The step they did not take, and the reason, in one sentence.', zh: '「我們**沒有**用膠體電泳驗證組裝產物，因為 DNA 濃度低、加上**環狀組裝產物的異常遷移**，會讓結果難以判讀。」沒有做的那一步、以及為什麼沒做，寫在同一句話裡。' }],
              [{ en: 'Reporter plasmid identity', zh: '報告質體的身分' },
               { en: 'Colony growth on selection "did **not by itself** confirm correct reporter assembly". Four colonies were pooled to 177.7 ng/µl, and then: "**No diagnostic digest or sequencing result is reported, so the identity of the pooled reporter preparation remains unverified.**"', zh: '在選擇性培養基上長出菌落「**本身並不**能確認報告系統組裝正確」。四個菌落混合後濃度為 177.7 ng/µl，接著寫道：「**沒有報告任何診斷性酶切或定序結果，所以這份混合報告質體製備物的身分仍未經驗證。**」' }],
              [{ en: '12 Sf9 transfection conditions', zh: '12 個 Sf9 轉染條件' },
               { en: '"**None of the tested conditions could be confidently identified as optimal.**" Two causes named: cell availability lower than the design required, so density was inconsistent; and substantial background luminescence. Consequence stated: knockdown "could not be reliably evaluated".', zh: '「**沒有任何一個受測條件能被有把握地認定為最佳。**」原因指名了兩個：可用細胞數低於設計所需，使得密度不一致；以及明顯的背景發光。後果也寫明：敲降「無法被可靠地評估」。' }],
              [{ en: 'Who gets the credit for round 2', zh: '第二輪的功勞歸誰' },
               { en: '"Although the experimental results **cannot establish which individual filtering modification was responsible for this success**, the second campaign demonstrated that our revised workflow could produce a confirmed binder." Said again about the advice they received: "the later binding result cannot establish which individual change led to success."', zh: '「雖然實驗結果**無法確定是哪一項個別的篩選修改造成了這次成功**，但第二輪確實顯示我們修訂後的流程能做出一個經確認的結合者。」對於收到的建議，他們也再說了一次：「後來的結合結果無法確定是哪一項個別改動導致了成功。」' }],
              [{ en: 'A protein assay on the hardware page', zh: '硬體頁上的一個蛋白測定' },
               { en: '"The Bradford assay measures **dye-binding protein, not biological function.** Apparent recoveries above 100 % cannot establish minimal protein loss… These data support **detection** of BSA after drying, but **do not yet establish quantitative recovery or retained function.**"', zh: '「Bradford 測定量的是**會與染劑結合的蛋白，不是生物功能。**表觀回收率高於 100% 並不能證明蛋白損失極小……這些資料支持乾燥後 BSA 的**可被偵測**，但**還不足以證明定量回收或功能保留。**」' }],
              [{ en: 'A footnote on their own siRNA table', zh: '他們自己 siRNA 表的註腳' },
               { en: '"A dash indicates an unreported DSIR score; **the reason for retaining T2_127 without this score is not documented. The coordinate reference frame is unspecified.**" A team flagging a gap in its own record-keeping, in the table caption.', zh: '「破折號代表未報告的 DSIR 分數；**保留 T2_127 而不附此分數的理由沒有被記錄。座標參考框架未指明。**」一支隊伍在自己的表格說明裡，標出自己紀錄上的缺漏。' }],
              [{ en: 'The colony model\'s comparison tables', zh: '蜂群模型的比對表' },
               { en: '"The field studies provide comparisons for model behavior; **they do not establish independent validation or treatment efficacy for SWARM.**" And per row: "A survey average, **not an upper limit**"; "These values are **simulation outputs, not measurements of SWARM.**"', zh: '「這些田間研究提供的是模型行為的比對依據；**它們並不構成對 SWARM 的獨立驗證，也不證明療效。**」逐列還寫著：「這是調查平均值，**不是上限**」；「這些數值是**模擬輸出，不是對 SWARM 的量測。**」' }],
              [{ en: 'The dosing model\'s inputs', zh: '劑量模型的輸入' },
               { en: '"The 100 nM concentration was **selected for the simulation and is not an established protective threshold.**" The circulating half-life is labelled in the parameter table itself as "**not a measured minibinder half-life**", and the internal checks as "**distinct from experimental validation**".', zh: '「那個 100 nM 的濃度是**為了模擬而選定的，並不是一個已確立的保護閾值。**」循環半衰期在參數表裡就直接標註為「**不是實測的結合蛋白半衰期**」，而內部一致性檢查則標註為「**與實驗驗證是兩回事**」。' }]
            ],
            min: 760,
            source: { en: 'All twelve quoted from the team\'s own Results, Minibinder Design, RNAi Design, Hardware and Modeling pages. Pulling them into one table is ours; the bold is ours.', zh: '十二句全部引自該隊自己的 Results、Minibinder Design、RNAi Design、Hardware 與 Modeling 頁。把它們收攏成一張表是我們做的；粗體也是我們加的。' }
          }) +
          h.take({ en: 'Why we are giving a High School team its own section for this', zh: '為什麼我們為這件事給一支高中隊伍單獨一節' }, {
            en: 'The usual High School pattern is a true result described one size too large: a gel becomes a working construct, a pull-down becomes a therapeutic. Lambert-GA does the opposite, and does it **where it costs them something** — on the page that reports their headline binder, in the caption of their own siRNA table, in the parameter list of the model that produces their dosing number. **Three of the twelve sentences above exist only to prevent a reader from over-reading a result that is already good.** That is a harder habit than any single technique on this wiki, and it is the one we would teach first.',
            zh: '高中組常見的樣態是：一個真實的結果被描述成大了一號——一張膠體變成一個可用的構築，一次沉降變成一種療法。Lambert-GA 做的恰恰相反，而且是在**對他們自己有代價的地方**做的——在報告他們招牌結合蛋白的那一頁、在他們自己 siRNA 表的說明裡、在產生劑量數字的那個模型的參數清單裡。**上面十二句裡有三句的存在，純粹是為了阻止讀者把一個本來就不錯的結果讀得太大。**這比這個 wiki 上任何單一技術都更難養成，而這也是我們會優先教的那一件事。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'l-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'An empty first round, and a piece of software built to answer it', zh: '一個空手而回的第一輪，以及一個為了回答它而寫出來的軟體' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SWARM: the failure that set the dry lab\'s question, and the epitope that came back', zh: 'SWARM：那次失敗給了乾式實驗問題，而乾式實驗送回了一個抗原表位' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Minibinder Design, Minibinder Experimentation, Results, Software, RNAi and Modeling pages.', zh: '由我們依該隊 Minibinder Design、Minibinder Experimentation、Results、Software、RNAi 與 Modeling 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'l-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Fifteen designs, nothing, and then the part most teams skip', zh: '十五個設計、什麼都沒有，接著是大多數隊伍會跳過的那一段' },
        body:
          h.phases([
            { h: { en: 'Round 1: 15 candidates, zero confirmed binders — published as such', zh: '第一輪：15 個候選、零個確認的結合者——就這樣公開' },
              p: { en: 'Generated with Mosaic, BindCraft and BoltzGen, screened by Protenix and Boltz-2 on interface confidence scores, then sent to Adaptyv Bio under a sponsorship of 20 to 30 free expression and affinity assays.', zh: '用 Mosaic、BindCraft 與 BoltzGen 生成，以 Protenix 與 Boltz-2 的界面信賴分數篩選，再送到 Adaptyv Bio，由一筆 20 至 30 次免費表達與親和力測定的贊助支持。' },
              items: [
                { en: 'The outcome is broken down rather than summarised: **nine candidates received negative binding calls, six did not yield usable binding measurements.** Zero is reported as zero.', zh: '結果是被拆開寫的，不是概括寫的：**九個候選被判為不結合，六個沒有產生可用的結合讀值。**零就報成零。' },
                { en: 'The counter-example gets named: **5G51_V4_seed01 achieved an ipSAE of 0.927 and an ipTM of 0.958 and still came back negative.** A single best-scoring prediction was not a prediction of binding.', zh: '反例被指名了：**5G51_V4_seed01 的 ipSAE 達 0.927、ipTM 達 0.958，回來仍然是陰性。**一個分數最高的預測，並不是一個「會結合」的預測。' },
                { en: 'Adaptyv\'s Tudor Cotet read the raw data from two expression runs — near-zero sensor loading, low split-GFP — and told them **another run would not help.** Their own note on that: diagnosing the failure was worth more than repeating it.', zh: 'Adaptyv 的 Tudor Cotet 看了兩次表達運行的原始資料——感測器負載訊號趨近於零、split-GFP 偏低——並直接告訴他們**再跑一次也沒有用。**他們自己記下的心得是：診斷這次失敗，比重跑一次更有價值。' }
              ],
              done: { en: 'A failure specific enough to act on: two candidate causes, epitope selection and solubility, rather than "it did not work".', zh: '一次具體到可以據此行動的失敗：兩個候選原因——抗原表位的選擇與溶解度——而不是一句「它沒成功」。' } },
            { h: { en: 'Antibodies and nanobodies rejected — one on stability, one on screening economics', zh: '抗體與奈米抗體被排除——一個因為穩定性，一個因為篩選的經濟學' },
              p: { en: 'The published comparison table is three columns wide: size (~150 kDa antibody, ~15 kDa nanobody, roughly 6–22 kDa for a 50–200-residue minibinder design), thermal stability, and origin — with the caveat that the ranges are broad because the values come from separate studies.', zh: '公開的比較表有三欄：大小（抗體約 150 kDa、奈米抗體約 15 kDa、50–200 個殘基的結合蛋白設計大約 6–22 kDa）、熱穩定性，以及來源——並附帶說明：範圍之所以寬，是因為數值來自不同研究。' },
              items: [
                { en: 'Antibodies went first, on **concerns about retaining activity through digestion** — which matters because the delivery route is a feeder, not an injection.', zh: '抗體先被排除，理由是**擔心它們通過消化道後還能不能保有活性**——這件事之所以重要，是因為投遞途徑是餵食器，不是注射。' },
                { en: 'Nanobodies went on advice from **Dr. Aashish Manglik (UCSF)**: *"For our computational design projects, we still make libraries of hundreds or thousands of candidates."* He also asked them directly what their odds were if they could only express and test 10 to 50 designs, and **pointed them at minibinders instead.**', zh: '奈米抗體則是依 **Dr. Aashish Manglik（UCSF）**的建議排除的：*「在我們的運算設計專案裡，我們還是會做出成百上千個候選的庫。」*他也直接問他們：如果只能表達並測試 10 到 50 個設計，勝算有多少——然後**把他們指向了結合蛋白。**' },
                { en: '**This is a method rejected on a budget, and the budget is stated.** Not "nanobodies are worse" — "the screening scale that makes nanobody design work is not available to us." We think that is a more useful sentence than most design rationales in iGEM.', zh: '**這是一個因為預算而被排除的方法，而且預算被寫了出來。**不是「奈米抗體比較差」，而是「讓奈米抗體設計能成立的篩選規模，我們拿不到」。我們認為這句話比 iGEM 裡大多數的設計理由都更有用。' }
              ] },
            { h: { en: 'Narrow the target by asking people who have bound it', zh: '靠問那些真的結合過它的人，把標靶縮小' },
              p: { en: 'Two virologists and two people from the company running the assay, each answering a different question.', zh: '兩位病毒學家，加上兩位來自執行測定那家公司的人，各自回答一個不同的問題。' },
              items: [
                { en: '**Prof. Benjamin Lamp** (Justus Liebig University Giessen) confirmed the P-domain as a valid neutralising target — his lab had tested neutralising sera against that region — and supplied **roughly 1,300 nt of DWV coding sequence with the 434-residue translation, P-domain colour-coded**, i.e. the exact boundaries they then designed against.', zh: '**Prof. Benjamin Lamp**（Justus Liebig University Giessen）確認 P-domain 是一個有效的中和標靶——他的實驗室測試過針對該區域的中和血清——並提供了**約 1,300 nt 的 DWV 編碼序列與 434 個殘基的轉譯，P-domain 以顏色標出**，也就是他們後來據以設計的確切邊界。' },
                { en: '**Prof. Tatsuhiko Kadowaki** (Xi\'an Jiaotong-Liverpool University) said to design **multiple binders covering the whole P-domain rather than one site**, since different points inside an epitope behave differently — and in the same conversation **exposed a naming discrepancy in the DWV literature** (he referred to VP1 where they had the P-domain on VP3), which they then had to resolve.', zh: '**Prof. Tatsuhiko Kadowaki**（Xi\'an Jiaotong-Liverpool University）要他們**設計涵蓋整個 P-domain 的多個結合蛋白，而不是只打一個位點**，因為同一個抗原表位內不同的點表現不同——而在同一次對談中，他也**暴露出 DWV 文獻裡的一個命名歧異**（他講的是 VP1，而他們把 P-domain 歸在 VP3），這件事他們後來必須自己釐清。' },
                { en: '**Tudor Cotet and Corey Howe (Adaptyv Bio)** said the P-domain is flexible and therefore hard, and to aim at **binding hotspots** rather than the domain as a whole. Cotet added the concrete filter: designs filtered on **AlphaFold2 pLDDT above 80 express reliably**, and that filter went into the pipeline before batch 2.', zh: '**Tudor Cotet 與 Corey Howe（Adaptyv Bio）**指出 P-domain 具有柔性、因此難打，並建議瞄準**結合熱點**而不是整個 domain。Cotet 還給了一個具體的篩選條件：以 **AlphaFold2 pLDDT 高於 80** 過濾的設計表達得很穩定——這個條件在第二批送出之前就加進了流程。' }
              ] },
            { h: { en: 'Round 2: 20 designs, one confirmed binder, and the number reported with its interval', zh: '第二輪：20 個設計、一個確認的結合者，而且數字附上了區間' },
              p: { en: '103 computational candidate entries were generated and 20 were selected for testing — this time with the epitope moved, SolubleMPNN redesign for expression, and agreement across independent structure predictions rather than a single best score.', zh: '產生了 103 個運算候選項目，選出 20 個送測——這一次抗原表位換過了、以 SolubleMPNN 針對表達重新設計序列，並且看多個獨立結構預測之間是否一致，而不是只看單一最高分。' },
              items: [
                { en: 'Outcome, again broken down: **nine negative calls, ten with no usable measurement, one confirmed binder** — *l79_s469532_mpnn9*, 79 amino acids, generated by BindCraft, associated with the **QP / A-ridge** region where Q325 and P326 are exposed in the analysed assembly.', zh: '結果同樣被拆開寫：**九個判為不結合、十個沒有可用讀值、一個確認的結合者**——*l79_s469532_mpnn9*，79 個胺基酸，由 BindCraft 生成，對應到所分析組裝體中 Q325 與 P326 外露的 **QP / A-ridge** 區域。' },
                { en: '**Biolayer interferometry across two replicates: combined dissociation constant 603.6 nM, 95 % confidence interval 497.1–733.3 nM, individual replicates about 546 nM and 666 nM.** Not a point estimate on its own.', zh: '**兩個重複的生物層干涉測量：合併解離常數 603.6 nM，95% 信賴區間 497.1–733.3 nM，個別重複大約是 546 nM 與 666 nM。**不是一個孤零零的點估計。' },
                { en: 'And the one that cost them something: **the successful design did not have the highest minimum ipSAE among the 20 submitted.** They print that, because it is consistent with their own benchmarking result that confidence scores do not reliably pick winners within one target.', zh: '還有一個對他們自己有代價的事實：**在送測的 20 個裡，成功的那個並不是 minimum ipSAE 最高的。**他們把這點印出來，因為這和他們自己的基準測試結論一致：在同一個標靶之內，信賴分數無法可靠地挑出贏家。' },
                { en: 'The in-house confirmation is a separate experiment, not a re-reading of Adaptyv\'s: **His/FLAG pull-down on Ni-NTA with anti-His and anti-FLAG dot blots**, with the individual proteins run alone first so that co-elution in the combined sample means something.', zh: '自己實驗室的確認是另一個實驗，不是把 Adaptyv 的結果再讀一遍：**在 Ni-NTA 上做 His/FLAG 沉降，搭配 anti-His 與 anti-FLAG 點墨法**，並且先把兩個蛋白各自單獨跑過一次，混合樣品裡的共沖提才有意義。' }
              ],
              done: { en: 'To their knowledge, the first reported minibinder with confirmed binding to DWV VP3 — stated as binding to the tested construct, not as protection in bees.', zh: '據他們所知，這是第一個報告出「對 DWV VP3 有確認結合」的結合蛋白——而且被寫成對所測試構築的結合，不是在蜜蜂體內的保護。' } },
            { h: { en: 'The RNAi arm, designed around the kit it had to run on', zh: 'RNAi 這一支，是圍著它必須搭配的那套試劑設計的' },
              p: { en: 'siRNAs designed in house rather than taken from a tool built for mammalian rules, because the Promega T7 RiboMAX Express system imposed its own constraint: **a 19-nucleotide target region following the 5′-G-N₁₇-C-3′ pattern.**', zh: 'siRNA 是自己設計的，而不是直接套用一個依哺乳類規則建立的工具，因為 Promega T7 RiboMAX Express 系統本身帶來一個限制：**一段 19 個核苷酸、符合 5′-G-N₁₇-C-3′ 樣式的標靶區。**' },
              items: [
                { en: 'Off-target screening with BLAST+ on **both guide and passenger strands against six reference datasets** — *V. destructor*, *Apis mellifera*, *Spodoptera frugiperda*, Sf9, *Galendromus occidentalis* and human — plus a cross-check among their own three genes. Stated conclusion: predicted off-target concerns reduced **within the datasets examined**, with experimental testing still necessary.', zh: '以 BLAST+ 做脫靶篩選，**導引股與伴隨股都比對六個參考資料集**——*V. destructor*、*Apis mellifera*、*Spodoptera frugiperda*、Sf9、*Galendromus occidentalis* 與人類——並額外檢查自己三個基因之間有無交叉。寫出的結論是：**在所檢視的資料集範圍內**，預測的脫靶顧慮降低了，但實驗測試仍然必要。' },
                { en: 'The reporter was engineered rather than adopted: psiCHECK-2 is a mammalian vector whose **SV40 promoter performs poorly in insect cells**, so the Renilla promoter was replaced with **HSV-TK**, following a published result that it gives usable ratios in Sf9.', zh: '報告系統是改造出來的，不是直接拿來用：psiCHECK-2 是哺乳類載體，其 **SV40 啟動子在昆蟲細胞中表現不佳**，所以 Renilla 的啟動子被換成 **HSV-TK**，依據的是一項已發表的結果：這樣在 Sf9 中能得到可用的比值。' },
                { en: '**And then it stopped.** dsRNA was transcribed and a gel run; the HiFi reporter assembly was transformed and selected but never sequenced; 12 transfection conditions were tested and none could be called optimal, so **siRNA knockdown was never evaluated.** All three statements are theirs.', zh: '**然後它就停住了。**dsRNA 被轉錄出來、跑了膠體；HiFi 組裝的報告質體完成轉形與選殖，但從未定序；12 個轉染條件測試過，但沒有任何一個能被稱為最佳，所以**siRNA 的敲降從未被評估。**這三句話都是他們自己寫的。' }
              ] }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'l-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'PRINCE, and a benchmark split so that it could fail', zh: 'PRINCE，以及一個切開到足以讓它失敗的基準測試' },
        lede: {
          en: 'The software exists because of the empty first round. Its purpose sentence is written from that failure, not from a market gap.',
          zh: '這個軟體之所以存在，是因為那個空手而回的第一輪。它的目的句是從那次失敗寫出來的，不是從一個市場缺口寫出來的。'
        },
        body:
          h.p({
            en: '**Their own words for why it exists:** the first campaign produced no confirmed binders among 15 tested candidates "despite promising computational predictions", which "prompted us to reconsider how we selected binding sites". **Dr. Michael Hecht** (Princeton) pushed the same way — epitope selection remains uncertain, and a region that looks promising in a prediction still needs experimental validation. PRINCE is the answer to a question the bench asked.',
            zh: '**他們自己說它為什麼存在：**第一輪在 15 個受測候選中沒有產出任何確認的結合者，「儘管運算上的預測看起來不錯」，這件事「促使我們重新思考我們是怎麼挑選結合位點的」。**Dr. Michael Hecht**（Princeton）也往同一個方向推——抗原表位的選擇仍然充滿不確定，而一個在預測裡看起來不錯的區域，仍然需要實驗驗證。PRINCE 是對一個由實驗檯提出的問題的回答。'
          }) +
          h.h3({ en: 'The thing worth copying: a split by antigen cluster, and a harder subset reported separately', zh: '值得抄的那一點：依抗原分群切分，並且把更難的子集單獨報出來' }) +
          h.p({
            en: 'A benchmark of **6,937 experimentally observed antibody–antigen interfaces across 1,549 antigen clusters**, split **by antigen cluster** with sequence-homology checks between training, validation and test sets. A "hit" is defined before the number is given: **at least one of the three selected patches contains more than 50 % true epitope residues.**',
            zh: '一個包含**1,549 個抗原分群、共 6,937 個實驗觀測到的抗體—抗原界面**的基準資料集，**依抗原分群**切分，並在訓練、驗證與測試集之間做序列同源性檢查。「命中」的定義在數字之前就先給了：**所選三個表面區塊中，至少有一個含有超過 50% 的真實抗原表位殘基。**'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Evaluation', zh: '評估' }, w: '34%' },
              { t: { en: 'PRINCE', zh: 'PRINCE' }, w: '16%', num: true },
              { t: { en: 'Baseline', zh: '基線' }, w: '16%', num: true },
              { t: { en: 'What the row is', zh: '這一列是什麼' } }
            ],
            rows: [
              [{ en: 'Top-three majority-hit, 251 test clusters', zh: '前三命中率，251 個測試分群' },
               { en: '50.8 %', zh: '50.8%' }, { en: '23.3 %', zh: '23.3%' },
               { en: 'Cluster-averaged, so a cluster with many interfaces cannot dominate the score.', zh: '以分群為單位取平均，所以界面很多的分群不會主導整個分數。' }],
              [{ en: 'Same, on 93 clusters with no training homolog at ≥30 % identity', zh: '同上，但限定在 93 個「沒有 ≥30% 同源訓練樣本」的分群' },
               { en: '45.8 %', zh: '45.8%' }, { en: '23.8 %', zh: '23.8%' },
               { en: '**The honest number.** It is lower, it is published next to the higher one, and it is the one their page summary leads with.', zh: '**誠實的那個數字。**它比較低，被放在比較高的那個旁邊公開，而且是他們頁面摘要裡率先寫出的那一個。' }],
              [{ en: 'Residue-level macro AUROC, 110 common interfaces', zh: '殘基層級 macro AUROC，110 個共同界面' },
               { en: '0.6722', zh: '0.6722' }, { en: '0.6524 / 0.6521', zh: '0.6524／0.6521' },
               { en: 'Against **BepiPred-3.0** and **PeSTo**, labelled as point estimates from an earlier benchmark. The margin is small and not dressed up.', zh: '對手是 **BepiPred-3.0** 與 **PeSTo**，並標明這是較早一次基準測試的點估計。差距很小，而且沒有被包裝。' }],
              [{ en: 'Web app\'s lightweight scorer', zh: '網頁版的輕量評分器' },
               { en: '0.648', zh: '0.648' }, { en: '0.645', zh: '0.645' },
               { en: 'Baseline here is **surface exposure alone** — i.e. they report the case where their own scorer barely beats the trivial answer.', zh: '這裡的基線是**單純的表面外露程度**——也就是說，他們把「自己的評分器只勝過最簡單的答案一點點」這個情況也報了出來。' }],
              [{ en: 'Minibinder site retrospective, 13 evaluable targets', zh: '結合蛋白位點回溯分析，13 個可評估標靶' },
               { en: '10 of 13', zh: '13 之中的 10' }, { en: '≈49 %', zh: '約 49%' },
               { en: 'Exposure ranking put the experimentally best site in the top three for 77 % of targets, reported p = 0.032, from **1,307 experimentally tested designs across 15 targets.**', zh: '以外露程度排序，在 77% 的標靶上把實驗表現最好的位點排進前三，報告的 p = 0.032，資料來自**15 個標靶上 1,307 個經實驗測試的設計。**' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Software page. Every pairing of a score with its baseline is theirs; the fourth column is ours.', zh: '讀自該隊 Software 頁。每一組「分數配基線」都是他們自己的；第四欄是我們寫的。' }
          }) +
          h.take({ en: 'What the two percentages do together', zh: '那兩個百分比放在一起做了什麼' }, {
            en: '50.8 % is what you quote. 45.8 % is what survives when every test antigen with a close relative in training is removed. **Publishing both is the difference between a benchmark and a demonstration**, and it is a High School team doing it on their own software. The random baselines move barely at all between the two rows — 23.3 % to 23.8 % — which is how a reader can tell the harder subset was not also an easier one.',
            zh: '50.8% 是你會拿出去引用的那個數字。45.8% 是把每一個「在訓練集裡有近親」的測試抗原都移掉之後，還留下來的那個數字。**同時公開兩個，就是基準測試與示範表演之間的差別**，而這是一支高中隊伍在自己的軟體上做到的。兩列之間的隨機基線幾乎沒有動——23.3% 對 23.8%——讀者正是靠這點才能判斷：那個更難的子集，並沒有同時變得更容易。'
          }) +
          h.h3({ en: 'The rest of the dry lab, and the one modelling result that argues against their own tools', zh: '乾式實驗的其餘部分，以及一個反駁他們自己工具的建模結果' }) +
          h.cards([
            { chips: [{ t: { en: 'geometry', zh: '幾何' }, k: 't' }],
              h: { en: 'A crystal-contact check, because exposure is contextual', zh: '一個晶體接觸檢查，因為「外露」是看情境的' },
              p: { en: 'PRINCE compares a chain on its own against its surroundings in the crystal, flags where neighbouring copies cover a proposed site, and flags missing sections and positional uncertainty — their reason: *"a region exposed in an isolated protein or cropped structure may be less accessible in the biological assembly."* This is not hypothetical for them: **their first target region was unresolved in the analysed capsid assembly.**', zh: 'PRINCE 會把單獨一條鏈和它在晶體中的周圍環境比較，標出鄰近複本蓋住提議位點的地方，也標出缺失片段與原子位置的不確定性——他們的理由是：*「一個在孤立蛋白或被裁切結構中外露的區域，在生物組裝體中可能沒那麼容易接近。」*這對他們不是假設：**他們第一個標靶區在所分析的外殼組裝體中根本沒有被解出。**' } },
            { chips: [{ t: { en: 'negative result', zh: '負面結果' }, k: 'r' }],
              h: { en: 'More metrics made the prediction worse', zh: '更多指標讓預測變差了' },
              p: { en: 'On 5,721 labelled designs across 41 targets: minimum ipSAE reaches ROC-AUC 0.806, while **a 38-metric ensemble reaches 0.541 — barely above chance.** And minimum ipSAE itself *"performed less effectively when designs were compared within individual protein targets"*, which is exactly the case SWARM needed. A benchmark that undercuts the convenient answer.', zh: '在 41 個標靶上的 5,721 個有標註設計上：minimum ipSAE 的 ROC-AUC 達 0.806，而**一個結合 38 個指標的集成只有 0.541——幾乎等於隨機。**而 minimum ipSAE 本身*「在同一個蛋白標靶之內互相比較設計時，表現較差」*，而那正是 SWARM 需要的那個情況。一個戳破方便答案的基準測試。' } },
            { chips: [{ t: { en: 'variance', zh: '變異' }, k: 'a' }],
              h: { en: 'The same candidate scored 0.000 to 0.676', zh: '同一個候選的分數從 0.000 到 0.676' },
              p: { en: 'Repeated predictions of one design produced minimum ipSAE values across that whole range. Their conclusion: **taking only the highest-scoring prediction misrepresents a design\'s reliability** — so the filter looks at agreement across repeated and independent evaluations, not at a maximum.', zh: '對同一個設計反覆做預測，minimum ipSAE 的值散佈在整個這個範圍內。他們的結論是：**只取分數最高的那次預測，會錯誤呈現一個設計的可靠度**——所以篩選看的是反覆與獨立評估之間的一致性，而不是最大值。' } },
            { chips: [{ t: { en: 'tool diversity', zh: '工具多樣性' }, k: 'v' }],
              h: { en: 'Two design tools, measured for overlap', zh: '兩個設計工具，實際量了它們的重疊程度' },
              p: { en: 'Across **1,176 pairwise comparisons** of BindCraft and Mosaic designs, the median Jaccard similarity of target-contact residues was **0.000**, with interface centres a median of about **42.9 Å** apart. So running both tools was justified by measurement rather than by preference.', zh: '在 BindCraft 與 Mosaic 設計之間的 **1,176 次兩兩比較**中，標靶接觸殘基的 Jaccard 相似度中位數是 **0.000**，而界面中心之間的距離中位數約為 **42.9 Å**。所以「兩個工具都跑」是靠量測證成的，不是靠偏好。' } }
          ]) +
          h.note({
            en: '**Shipped, not just described:** an open-source web application and a command-line interface, with the trained antibody site ranker behind a separate CLI entry point, plus a reproduction guide and the evaluation records. Also on the dry-lab shelf: a dosing model (**1,000 parameter sets, a 40,000-bee colony, 56 days**), a 13-ODE RNAi model of Sf9 reporter silencing, a **six-year colony epidemiological model run at two sites, Atlanta and Ithaca** (800 six-year simulations, 20 matched weather sequences per scenario), and a seven-video modelling instructional series for teams with no modelling experience.',
            zh: '**是交付出來的，不只是被描述的：**一個開放原始碼的網頁應用與一套命令列介面，訓練過的抗體位點排序器放在另一個命令列入口後面，另外還附上重現指引與評估紀錄。乾式實驗架上還有：一個劑量模型（**1,000 組參數、4 萬隻蜂的蜂群、56 天**）、一個用 13 條常微分方程描述 Sf9 報告系統沉默的 RNAi 模型、一個**在 Atlanta 與 Ithaca 兩地跑的六年蜂群流行病學模型**（800 次六年模擬，每個情境 20 組對齊的天氣序列），以及一套七支影片的建模教學系列，對象是完全沒有建模經驗的隊伍。'
          })
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 'l-hard',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: 'Vapor-X: $80.07 of parts, and two labs that were not theirs', zh: 'Vapor-X：80.07 美元的零件，以及兩個不屬於他們的實驗室' },
        lede: {
          en: 'A vacuum dryer built because benchtop lyophilisers cost $5,000 to $25,000. The interesting part is who tested it.',
          zh: '一台真空乾燥器，起因是檯上型凍乾機要價 5,000 到 25,000 美元。有意思的地方在於是誰測試了它。'
        },
        body:
          h.kv([
            [{ en: 'What it is', zh: '它是什麼' },
             { en: 'A pump lowers chamber pressure so liquid evaporates at a lower temperature; a small controller runs pump and heater together. Refined across successive prototypes — chamber seal, heating, sample holders.', zh: '一個泵把腔室壓力降下來，讓液體在較低溫度下蒸發；一個小型控制器同時驅動泵與加熱器。經過一連串原型逐步改良——腔室密封、加熱、樣品座。' }],
            [{ en: 'Cost, as published', zh: '成本，依公開數字' },
             { en: '**$80.07** in prototype components; **$95.52** including PCB assembly. Both figures are given, in the page summary and again in a bill of materials.', zh: '原型零件 **80.07 美元**；含 PCB 組裝為 **95.52 美元**。兩個數字都給了，在頁面摘要裡出現、在物料清單裡再出現一次。' }],
            [{ en: 'Why it exists', zh: '它為什麼存在' },
             { en: 'They needed to assess the storage stability of their minibinders, and *"drying biological samples often requires equipment beyond the budgets of school laboratories."*', zh: '他們需要評估自己結合蛋白的儲存穩定性，而*「乾燥生物樣品往往需要超出學校實驗室預算的設備。」*' }]
          ]) +
          h.h3({ en: 'Tested by people with no stake in it working', zh: '由對它成功與否毫無利害關係的人來測試' }) +
          h.tbl({
            cols: [
              { t: { en: 'Who', zh: '誰' }, w: '26%' },
              { t: { en: 'What they ran, and what came back', zh: '他們跑了什麼，結果回來是什麼' } }
            ],
            rows: [
              [{ en: 'Biochemical Genetics Laboratory, University of Alabama at Birmingham', zh: 'University of Alabama at Birmingham 生化遺傳實驗室' },
               { en: 'Mr. John Moore dried 100 µl of authentic amino-acid standards at 70 °C and ran the reconstituted sample **in series with an unevaporated control on a dedicated amino acid analyzer**. Result as the team then computed it from his workbook: **all 43 measured compounds were detected**, and **38 of 43 (88.4 %) had apparent recoveries within 5 % of their undried controls.** The four below that are named (GLN 93.30 %, BALA 93.84 %, TRP 91.59 %, UREA 105.24 %), and so is the outlier — **3MHIS at 131.37 %**, with the statement that the data alone do not establish its cause. Excluding the outlier gives 38 of 42, **and they explain why the denominator changed.**', zh: 'Mr. John Moore 在 70 °C 下乾燥 100 µl 的標準胺基酸溶液，並把復溶後的樣品**與未蒸發的對照一起在專用胺基酸分析儀上連續跑**。該隊後來依他的工作簿算出的結果是：**43 個受測化合物全部都被偵測到**，而**其中 38 個（88.4%）的表觀回收率落在未乾燥對照的 5% 以內。**低於這個範圍的四個被一一指名（GLN 93.30%、BALA 93.84%、TRP 91.59%、UREA 105.24%），離群值也被指名——**3MHIS 達 131.37%**，並寫明單憑這些資料無法確定原因。排除離群值後是 42 之中的 38，**而他們解釋了分母為什麼改變。**' }],
              [{ en: 'Styczynski Lab, Georgia Institute of Technology', zh: 'Georgia Institute of Technology，Styczynski 實驗室' },
               { en: 'Suvin Baek and Cassandra Parada dried GFP plasmid DNA (**54.6 → 47.4 ng/µl after reconstitution, about 86.8 %**) and 40 µl of cell lysate, then ran **cell-free expression in triplicate with every combination of fresh and reconstituted DNA and lysate.** Their words: GFP fluorescence *"remained comparable to the fresh control even when both the GFP plasmid and cell lysate were dried and rehydrated, retaining approximately 98 % of the fluorescence observed in the fully fresh condition after 3 hours."*', zh: 'Suvin Baek 與 Cassandra Parada 乾燥了 GFP 質體 DNA（**54.6 → 復溶後 47.4 ng/µl，約 86.8%**）以及 40 µl 的細胞裂解液，然後**以新鮮與復溶的 DNA、裂解液的各種組合做三重複的無細胞表達。**他們的原話是：GFP 螢光*「即使在 GFP 質體與細胞裂解液兩者都經乾燥與再水合之後，仍與新鮮對照相當；三小時後保留了全新鮮條件下所觀測螢光的約 98%。」*' }],
              [{ en: 'A biotechnology classroom', zh: '一個生物科技課堂' },
               { en: 'Students used it to change the concentration of CaCl₂ for transformation — the third test, and the one that matches the market the device was built for.', zh: '學生用它來改變轉形用 CaCl₂ 的濃度——這是第三個測試，也是最符合這台裝置原本設定市場的那一個。' }]
            ],
            min: 740,
            source: { en: 'Read from the team\'s Hardware page, with the raw workbooks and data files linked there to GitLab.', zh: '讀自該隊 Hardware 頁，原始工作簿與資料檔在該頁連到 GitLab。' }
          }) +
          h.take({ en: 'The part we would put on a slide', zh: '我們會放上投影片的那一部分' }, {
            en: 'Two external labs, one quoted recovery fraction given as **38 of 43 rather than 88 %**, one outlier named rather than dropped, and a changed denominator explained in the same bullet. **External validation at High School level is rare; external validation where the team then does the arithmetic on somebody else\'s raw workbook and publishes the awkward row is rarer still.** Note also what they did not claim: the Bradford result on their own bench is restricted to *detection* of BSA, explicitly not to quantitative recovery or retained function.',
            zh: '兩個外部實驗室、一個被寫成 **43 之中的 38 而不是 88% 的回收比例**、一個被指名而不是被丟掉的離群值，以及在同一個條目裡解釋清楚的分母變動。**在高中組，有外部驗證本來就少見；而「團隊接著拿別人的原始工作簿自己算一遍，並把那條難看的列也公開」更少見。**另外也看看他們沒有主張什麼：他們自己實驗檯上的 Bradford 結果，被限制在 BSA 的*可被偵測*，明確不包含定量回收或功能保留。'
          })
      });

      /* ---------------- economics ---------------- */
      out += h.sec({
        id: 'l-cost',
        kick: { en: 'Read carefully', zh: '要仔細讀的部分' },
        h2: { en: '"35 tested candidates with under $400 spent on computation"', zh: '「35 個受測候選，運算花費不到 400 美元」' },
        lede: {
          en: 'This is the sentence the project will be quoted on. It is also the one place on the wiki where we would hold the comparison at arm\'s length.',
          zh: '這是這個專案將來最可能被引用的一句話。它同時也是整個 wiki 上唯一一處，我們會把那個對比拿遠一點看的地方。'
        },
        body:
          h.p({
            en: 'Their claim, in full and in their words: *"To our knowledge, this is the first reported minibinder with confirmed binding to DWV\'s VP3, developed from 35 tested candidates with under $400 spent on computation."* The comparison follows immediately: *"For comparison, Anthropic allocated a $10,000 GPU budget to each single-target design campaign in its recent study"*, cited to a 2026 technical report.',
            zh: '他們的主張，完整照他們的話：*「據我們所知，這是第一個報告出對 DWV 的 VP3 有確認結合的結合蛋白，由 35 個受測候選發展而來，運算花費不到 400 美元。」*對比緊接在後：*「作為對照，Anthropic 在其近期研究中為每一次單一標靶的設計活動配置了 10,000 美元的 GPU 預算」*，並引用一份 2026 年的技術報告。'
          }) +
          h.warn({
            en: '**Ours, not theirs — how we would read this.** The $400 is their own spend and is theirs to report. The $10,000 is **a figure they cite from somebody else\'s paper, and it is an allocated budget rather than a measured cost of an equivalent result**; nothing on the wiki claims the two campaigns tested the same thing, at the same scale, with the same success criterion. Note also what the $400 does not include: the Adaptyv Bio screening — the step that actually produced the binding calls — came through a **sponsorship of 20 to 30 free expression and affinity assays**, and 35 designs were tested against that. Read as "a school team reached a confirmed binder on a computation budget of a few hundred dollars", the claim stands on their own numbers. Read as "de novo design is 25× cheaper than reported", it does not, and they do not write that sentence.',
            zh: '**這是我們的看法，不是他們的——我們會怎麼讀這件事。**那 400 美元是他們自己的花費，他們當然有資格報。那 10,000 美元是**他們從別人論文裡引用的數字，而且那是一筆被配置的預算，不是達成同等結果的實測成本**；這個 wiki 上沒有任何地方主張兩次設計活動測的是同一件事、規模相同、成功判準相同。另外也看看那 400 美元沒有包含什麼：真正產出結合判定的那一步——Adaptyv Bio 的篩選——來自**一筆 20 至 30 次免費表達與親和力測定的贊助**，而 35 個設計就是在這個額度下受測的。如果讀成「一支學校隊伍用幾百美元的運算預算做出了一個經確認的結合蛋白」，這個主張站在他們自己的數字上是成立的。如果讀成「de novo 設計比已報告的便宜 25 倍」，它就不成立——而他們也沒有寫出那一句。'
          }) +
          h.take({ en: 'Why we still think the claim is the contribution', zh: '為什麼我們仍然認為這個主張就是貢獻本身' }, {
            en: 'Because of who can repeat it. A school team reading this page learns that **35 designs and a few hundred dollars of compute, plus a sponsored assay, is a campaign that can produce a confirmed binder against a target with no prior de novo binders.** That is a reproducible envelope, and nobody else in either division publishes one. We would just want the sentence to compare their cost against their own first campaign rather than against a number from a paper.',
            zh: '因為誰有能力重複它。一支學校隊伍讀到這一頁，學到的是：**35 個設計、幾百美元的運算、再加上一筆被贊助的測定，就構成一次有可能對「先前沒有任何 de novo 結合蛋白的標靶」做出確認結合者的設計活動。**那是一個可重現的範圍，而兩個組別裡沒有別人公開過這種範圍。我們唯一會希望的是：那句話拿來對比的，是他們自己的第一輪成本，而不是論文裡的一個數字。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'l-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, in their own words', zh: '用他們自己的話說，哪些還沒解決' },
        lede: {
          en: 'Three of these are load-bearing: the therapeutic claim, the entire mite arm, and the identity of a plasmid.',
          zh: '其中三件是承重的：療效主張、整個對蟎的那一支，以及一個質體的身分。'
        },
        body:
          h.ul([
            { en: '**No antiviral protection in bees has been demonstrated.** BLI establishes binding to the tested VP3 construct. Their own sentence: *"Additional testing against the assembled virus will be necessary to determine whether binding translates into DWV neutralization."* The contact residues are still computational predictions.', zh: '**在蜜蜂體內的抗病毒保護並未被示範出來。**BLI 建立的是與所測試 VP3 構築的結合。他們自己的句子是：*「仍需對組裝後的病毒做額外測試，才能判斷結合是否轉化為對 DWV 的中和。」*接觸殘基目前仍是運算預測。' },
            { en: '**siRNA knockdown was never evaluated.** The reporter assay did not work: 12 Sf9 transfection conditions, none identifiable as optimal, two named causes — cell availability below the design requirement, and substantial background luminescence. The mite half of SWARM has a designed construct and no efficacy data.', zh: '**siRNA 的敲降從未被評估。**報告系統的測定沒有成功：12 個 Sf9 轉染條件，沒有任何一個能被認定為最佳，原因指名了兩個——可用細胞數低於設計需求，以及明顯的背景發光。SWARM 對蟎的那一半，有一個設計好的構築，但沒有任何效力資料。' },
            { en: '**The reporter plasmid\'s identity is unverified**, and they say so: four colonies pooled to 177.7 ng/µl, no diagnostic digest, no sequencing. The one HiFi gel check that might have caught a problem was deliberately skipped, with the reason given.', zh: '**報告質體的身分未經驗證**，而他們自己寫明了：四個菌落混合到 177.7 ng/µl，沒有診斷性酶切、沒有定序。那一次可能抓到問題的 HiFi 膠體檢查是刻意略過的，並附上了理由。' },
            { en: '**Their own de novo GFP minibinders did not bind.** Three candidates were designed and tested; GFP appeared in the flow-through regardless of when it was introduced, giving insufficient evidence of binding. So the second-target demonstration of the pipeline is **unconfirmed**, and the GFP positive control that does work used an established nanobody instead.', zh: '**他們自己 de novo 設計的 GFP 結合蛋白沒有結合。**三個候選被設計並測試；不論 GFP 在哪個時點加入，它都出現在流穿液中，不足以支持結合。所以這條流程在第二個標靶上的示範是**未被確認的**，而那個真的有效的 GFP 陽性對照，用的是既有的奈米抗體。' },
            { en: '**One binder out of 35 is one binder.** 18 negative calls and 16 assays that produced no usable measurement — so for nearly half the submitted designs the outcome is unresolved, not negative, and they label it that way.', zh: '**35 個裡的一個結合者，就只是一個結合者。**18 個判為不結合、16 次測定沒有產生可用讀值——所以在將近一半的送測設計上，結果是未定，而不是陰性，而他們也就是這樣標註的。' },
            { en: '**Which change produced round 2 is unknown.** New epitope, SolubleMPNN redesign, a pLDDT filter and a broader evaluation framework all shipped together, and they state that the result cannot attribute the success to any one of them — including to PRINCE.', zh: '**是哪一項改動造就了第二輪，並不清楚。**新的抗原表位、SolubleMPNN 重新設計序列、一個 pLDDT 篩選條件與一套更廣的評估框架是一起上線的，而他們寫明這個結果無法把成功歸給其中任何單獨一項——包括 PRINCE。' },
            { en: 'The **dosing model has no bee-specific measurements in it**: digestive and circulating half-lives come from aphid peptide and juvenile-hormone-esterase analogs, the 100 nM target is a chosen simulation setting rather than a protective threshold, and the estimates exclude tags, linkers, formulation and manufacturing losses.', zh: '**劑量模型裡沒有任何蜜蜂專屬的量測**：消化道與循環中的半衰期來自蚜蟲肽與幼年荷爾蒙酯酶的類比系統，那個 100 nM 的目標是選定的模擬設定而不是保護閾值，而估計值排除了標記、連接子、配方與製造損耗。' },
            { en: 'The **colony model is a model**: 800 six-year simulations at two sites, compared against survey statistics and field studies that, in their words, *"do not establish independent validation or treatment efficacy for SWARM."* RNAi supplies most of the predicted benefit — under assumptions, not measurements.', zh: '**蜂群模型就是一個模型**：兩地共 800 次六年模擬，拿來和調查統計與田間研究比對，而依他們的話，那些比對*「並不構成對 SWARM 的獨立驗證，也不證明療效。」*預測出的好處大部分來自 RNAi——那是在假設之下，不是量出來的。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'l-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Lambert-GA', zh: '我們會從 Lambert-GA 抄什麼' },
        body:
          h.ul([
            { en: '**Put the competing treatments in a table and let the empty cell be the project.** The newest registered product targets one mite gene and not the virus. You do not have to argue for a gap that a reader can see.', zh: '**把競爭療法列成一張表，讓那個空格成為你的專案。**最新登記的產品只針對一個蟎基因、不針對病毒。一個讀者自己看得見的缺口，你不必再去論證。' },
            { en: '**Write every conclusion at the size of its assay, in the paragraph that reports it.** "The gel alone does not establish sequence identity, complete annealing, or gene-silencing activity" is one sentence and it costs nothing. A limitations section at the bottom of the page is read by a judge; a clause inside the claim is read by everyone.', zh: '**把每個結論寫成只有它的實驗那麼大，而且就寫在報告它的那一段裡。**「光靠這張膠體並不足以證明序列身分、完全黏合，或基因沉默活性」只是一句話，而且不花你任何成本。頁面底部的限制一節只有評審會讀；寫在主張裡的子句，每個人都會讀到。' },
            { en: '**Reject a method on screening economics and say so.** "Hundreds or thousands of candidates" is why a school team cannot design nanobodies, and that is a legitimate, publishable design rationale. Most teams invent a biological reason instead.', zh: '**因為篩選的經濟學而排除一個方法，並且把它寫出來。**「成百上千個候選」正是一支學校隊伍無法設計奈米抗體的原因，而這是一個正當、可以公開寫出的設計理由。大多數隊伍會改掉它，編一個生物學上的理由。' },
            { en: '**Break a failed round down instead of summarising it.** "Nine negative calls, six with no usable measurement" tells the next team which half of the problem to fix. "No binders" tells them nothing.', zh: '**把失敗的那一輪拆開來寫，不要概括。**「九個判為不結合、六個沒有可用讀值」會告訴下一支隊伍該修問題的哪一半。「沒有結合者」什麼都沒告訴他們。' },
            { en: '**Validate the method on a pair that is known to bind, before you run your own samples through it.** GFP plus an established anti-GFP nanobody through the same pull-down and dot blot — and then say in writing that the control used the established nanobody and not your own candidates.', zh: '**在把自己的樣品送進去之前，先用一組已知會結合的配對驗證方法本身。**GFP 搭配既有的 anti-GFP 奈米抗體，跑同一套沉降與點墨法——然後明白寫出：這個對照用的是既有的奈米抗體，不是你自己的候選。' },
            { en: '**Split your benchmark by cluster, and report the no-homolog subset separately.** 50.8 % overall, 45.8 % with no training homolog, 23–24 % random. Three numbers; the middle one is the one that means something, and it is the one their own summary leads with.', zh: '**把你的基準測試依分群切開，並把「沒有同源物」的子集單獨報出來。**整體 50.8%、沒有同源訓練樣本時 45.8%、隨機 23–24%。三個數字，中間那個才有意義，而那也是他們自己摘要裡率先寫出的那一個。' },
            { en: '**Publish the benchmark that undercuts your convenient answer.** A 38-metric ensemble at ROC-AUC 0.541, and one candidate scoring anywhere from 0.000 to 0.676 across repeated predictions. Both make their own filtering harder to justify by a single number, which is why they are worth printing.', zh: '**公開那個戳破你方便答案的基準測試。**38 個指標的集成 ROC-AUC 只有 0.541，而同一個候選在反覆預測中從 0.000 到 0.676 都有。這兩件事都讓他們自己的篩選更難用單一數字說得過去——而這正是它們值得印出來的原因。' },
            { en: '**Get your hardware tested by somebody who does not need it to work**, and then do the arithmetic on their raw file yourself. 38 of 43, the four low compounds named, the 131 % outlier named, and the changed denominator explained.', zh: '**讓你的硬體交給一個不需要它成功的人去測試**，然後自己拿他的原始檔案算一遍。43 之中的 38、四個偏低的化合物各自指名、131% 的離群值指名，以及分母為什麼改變的解釋。' },
            { en: '**Report the cost of your computation.** Under $400 across 35 tested candidates makes the campaign reproducible by other school teams, and that envelope is worth more to the next team than the affinity figure. Compare it against your own earlier round, though, not against a budget in someone else\'s paper.', zh: '**把你的運算成本報出來。**35 個受測候選不到 400 美元，讓這次設計活動對其他學校隊伍是可重現的，而那個範圍對下一支隊伍的價值高於親和力數字本身。不過，拿來對比的應該是你自己前一輪的成本，而不是別人論文裡的一筆預算。' },
            { en: '**Say which change you cannot credit.** "The experimental results cannot establish which individual filtering modification was responsible for this success" is how you keep a good result from becoming a false mechanism — and it protects the next team from copying the wrong half of what you did.', zh: '**說清楚哪一項改動你不能記功。**「實驗結果無法確定是哪一項個別的篩選修改造成了這次成功」就是你讓一個好結果不變成一個假機制的方法——而且它也保護了下一支隊伍，不去抄你做過的事情裡錯的那一半。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the ten items above, the reading of the $400 against $10,000 comparison in the section before this one, and the judgement that writing claims at the size of their assay is the most transferable practice on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/lambert-ga](https://2026.igem.wiki/lambert-ga/).',
            zh: '標示為我們的看法：上面十點、前一節中對「400 美元對 10,000 美元」那個對比的解讀，以及「把主張寫成只有它的實驗那麼大，是這個 wiki 上最可轉移的做法」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/lambert-ga](https://2026.igem.wiki/lambert-ga/)。'
          })
      });

      return out;
    }
  };
})(window);
