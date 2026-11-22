/* GU Frankfurt — HIDE. Top 10 Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/gu-frankfurt/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'BIND — validate the receptor core, not the binder', zh: 'BIND——先驗證受體核心，不是結合蛋白' },
        s: { en: 'SNAP-tag on benzylguanine beads in place of the HLA binder, so synNotch is tested alone', zh: '用接在苄基鳥嘌呤珠上的 SNAP-tag 取代 HLA 結合蛋白，讓 synNotch 單獨被測試' } },
      { l: { en: 'Invert the reporter, because Pol III cannot make one', zh: '把報告系統反過來，因為 Pol III 做不出報告蛋白' },
        s: { en: 'Stable eGFP HEK293T + anti-eGFP shRNA: loss of green means the receptor fired', zh: '穩定表達 eGFP 的 HEK293T＋anti-eGFP shRNA：綠色消失就代表受體啟動了' }, tone: 'g' },
      { l: { en: 'TRIGGER — characterise the vesicles', zh: 'TRIGGER——把囊泡特性化' },
        s: { en: 'Nanoparticle tracking analysis plus Western blots confirm they are exosomes', zh: '奈米顆粒追蹤分析加上西方墨點，確認它們是外泌體' } },
      { l: { en: 'SILENCE — co-transfect HLA and shRNA', zh: 'SILENCE——共轉染 HLA 與 shRNA' },
        s: { en: 'Different resistance cassettes on the two plasmids, to avoid cross-contamination during prep', zh: '兩個質體用不同的抗性卡匣，避免製備時交叉污染' } },
      { l: { en: 'Read protein and transcript', zh: '讀蛋白，也讀轉錄本' },
        s: { en: 'Anti-FLAG Western normalised to vinculin, then RT-qPCR; harvest window set by its own timecourse', zh: '以 anti-FLAG 西方墨點對 vinculin 正規化，再做 RT-qPCR；收樣時間由自己的時序實驗決定' } }
    ],
    dry: [
      { l: { en: 'Design the binders', zh: '設計結合蛋白' },
        s: { en: 'Nanobodies and de novo α-helical binders, 5–15 kDa, small enough to reach the peptide groove', zh: '奈米抗體與從零設計的 α 螺旋結合蛋白，5–15 kDa，小到能伸進肽結合溝' } },
      { l: { en: 'Fail at peptide-independence, and say so', zh: '在「與肽無關」上失敗，並說出來' },
        s: { en: 'The differences sit in the peptide-binding cleft, so the peptide is part of the epitope', zh: '差異就落在肽結合溝裡，所以那個肽本身就是抗原決定位的一部分' }, tone: 'r' },
      { l: { en: 'Build HUSH because the tools do not exist', zh: '因為沒有工具存在，所以自己做 HUSH' },
        s: { en: 'No designer accounts for polymorphic families; the commercial ones are proprietary', zh: '沒有設計工具處理高多型性家族；而商用的那些都是閉源' } },
      { l: { en: 'Screen off-targets against RefSeq', zh: '以 RefSeq 篩檢脫靶' },
        s: { en: 'Bowtie against NCBI human RefSeq, chosen for transparency; SNP extension proposed', zh: '以 Bowtie 比對 NCBI 人類 RefSeq，選它是為了透明；並提議擴及 SNP' }, tone: 't' }
    ],
    links: [
      { w: 3, d: 2, l: { en: 'HUSH designs the shRNA the bench tests', zh: 'HUSH 設計出實驗檯要測的 shRNA' }, up: true },
      { w: 4, d: 3, l: { en: 'the blot and the qPCR are the tool’s validation table', zh: '墨點與 qPCR 就是這個工具的驗證表' } }
    ]
  };

  PD.pages['og-frankfurt'] = {
    label: { en: 'GU Frankfurt', zh: 'GU Frankfurt' },
    title: { en: 'GU Frankfurt — HIDE', zh: 'GU Frankfurt — HIDE' },
    render: function (h) {
      var t = team('frankfurt');
      var out = h.teamhero(t, {
        h1: {
          en: 'Do not suppress the immune system — ==hide the mismatch== from it.',
          zh: '不要壓制免疫系統——==把不相合的部分藏起來==不讓它看到。'
        },
        lede: {
          en: 'About 183,000 transplants a year against over 600,000 people waiting, so organs are allocated by urgency and mismatched organs get transplanted. The only answer available is lifelong immunosuppression, which leaves patients vulnerable, does not fully prevent rejection, and damages the graft: up to 50 % of transplanted organs are lost within ten years. HIDE instead downregulates only the mismatched HLAs on the organ, turning a 4/6 match into a 4/4 match retroactively while immune surveillance stays intact. Their wiki footer carries two words no other Top 10 wiki carries: "No AI was used."',
          zh: '每年約 18.3 萬例移植，而等待名單上超過 60 萬人，所以器官按緊急程度分配，不相合的器官還是會被移植。目前唯一可用的對策是終身免疫抑制，它讓病人門戶大開、無法完全防止排斥，而且會傷害移植器官本身：高達 50% 的移植器官在十年內失去功能。HIDE 改為只下調移植器官上那些不相合的 HLA，事後把 4/6 相合變成 4/4 相合，同時讓免疫監視保持完整。他們的 wiki 頁尾有一行其他前十名 wiki 都沒有的字：「沒有使用 AI。」'
        },
        chips: [
          { t: { en: 'synNotch receptor', zh: 'synNotch 受體' }, k: 'b' },
          { t: { en: 'shRNA cassette, Pol III', zh: 'shRNA 卡匣，Pol III' }, k: 'v' },
          { t: { en: 'Extracellular vesicles', zh: '胞外囊泡' }, k: 'g' },
          { t: { en: 'HUSH, open-source', zh: 'HUSH，開源' }, k: 'a' },
          { t: { en: 'CD4+ T cell chassis', zh: 'CD4+ T 細胞底盤' }, k: 't' }
        ],
        stats: [
          { v: '50 %', l: { en: 'Of transplanted organs lost within ten years — the gap they attack', zh: '十年內失去功能的移植器官比例——他們要解決的缺口' } },
          { v: '14.6 %', l: { en: 'Of the European population carrying HLA-A*01, their first target', zh: '歐洲人口中帶有其首個標靶 HLA-A*01 的比例' } },
          { v: '12 h', l: { en: 'When expression and knockdown were already detectable, against 24 h in the literature', zh: '表達與抑制已可偵測的時間點，而文獻為 24 小時' } },
          { v: '4', l: { en: 'Recombinant plasmids designed; one never assembled', zh: '設計的重組質體數；其中一個始終沒接起來' } },
          { v: '4', l: { en: 'Ways to run HUSH: web app, CLI, shell, MCP server', zh: 'HUSH 的四種執行方式：網頁、CLI、終端、MCP 伺服器' } },
          { v: 'n = 1', l: { en: 'Replicates behind the HUSH validation table, stated by them', zh: 'HUSH 驗證表背後的重複數，由他們自己註明' } }
        ]
      });

      out += h.toc([
        { id: 'f-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'f-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'f-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'f-norm', t: { en: 'The normalisation', zh: '正規化' } },
        { id: 'f-dry', t: { en: 'HUSH', zh: 'HUSH' } },
        { id: 'f-clone', t: { en: 'A standards decision', zh: '一個標準的選擇' } },
        { id: 'f-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'f-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'f-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Three components in a patient-derived T cell', zh: '病人自身 T 細胞裡的三個元件' },
        lede: {
          en: 'HLAs are highly polymorphic, so a transplanted organ carries proteins the recipient\'s immune system reads as "non-self". Matching is almost impossible at the scale of the waiting list, so HIDE changes the organ rather than the immune system.',
          zh: 'HLA 具有高度多型性，所以移植來的器官帶著受贈者免疫系統會讀成「非我」的蛋白。在等待名單的規模下，要配對幾乎不可能，所以 HIDE 選擇改變器官，而不是改變免疫系統。'
        },
        body:
          h.flow({
            title: { en: 'Bind → trigger → silence, all inside one engineered T cell', zh: '結合→觸發→沉默，全部在一個改造過的 T 細胞裡' },
            sub: { en: 'The wiki organises its own wet lab around these three verbs, one results page each.', zh: '這個 wiki 的濕式實驗就是依這三個動詞組織的，每個動詞一頁結果。' },
            stages: [
              { label: { en: 'BIND', zh: 'BIND' }, sub: { en: 'A synNotch receptor with an HLA binder outside and a transcription factor inside', zh: '一個 synNotch 受體，外側是 HLA 結合蛋白、內側是轉錄因子' }, tone: 'b',
                items: [
                  { en: 'activated by mechanical pulling force, so it only fires at the organ', zh: '由機械拉力啟動，所以只在器官處才會觸發' },
                  { en: 'the Notch core also sheds the binder, which keeps blocking that HLA for a while', zh: 'Notch 核心也會把結合蛋白釋出，而它會繼續擋住那個 HLA 一段時間' }
                ] },
              { label: { en: 'TRIGGER', zh: 'TRIGGER' }, sub: { en: 'Gal4 DBD fused to four human Oct-2 repeats, recruiting polymerase III', zh: 'Gal4 DNA 結合域融合四個人類 Oct-2 重複序列，用來招募聚合酶 III' }, tone: 'v',
                items: [
                  { en: 'two criteria: orthogonal to a T cell, and Pol III rather than Pol II', zh: '兩個條件：對 T 細胞正交，而且是 Pol III 而不是 Pol II' },
                  { en: '4× Gal4 UAS replaces the enhancer of a minimal U6 promoter', zh: '4× Gal4 UAS 取代最小化 U6 啟動子的增強子元件' }
                ] },
              { label: { en: 'SILENCE', zh: 'SILENCE' }, sub: { en: 'shRNA → siRNA, exported in extracellular vesicles, RNAi in the graft', zh: 'shRNA→siRNA，經胞外囊泡輸出，在移植器官中進行 RNAi' }, tone: 'g',
                items: [
                  { en: 'one HLA target is enough to bind; the silencing then covers all mismatches', zh: '結合只需要一個 HLA 標靶；之後的沉默作用則覆蓋所有不相合者' }
                ] }
            ],
            caption: { en: 'Drawn by us from the team\'s Project Description and Wetlab Overview.', zh: '由我們依該隊 Project Description 與 Wetlab Overview 繪製。' }
          }) +
          h.take({ en: 'The novelty, stated precisely', zh: '被精確陳述的新穎性' }, {
            en: 'synNotch receptors are established and shRNA cassettes are established. Their claim is the join: **"What is very novel about HIDE is the combination of a synNotch receptor and an shRNA cassette, something that has not been done before."** And the engineering consequence is a promoter problem — U6 is a constitutive Pol III promoter, so they **replaced its enhancer element with a Gal4 upstream activating sequence**, making a constitutive promoter inducible while keeping it recognisable to polymerase III.',
            zh: 'synNotch 受體是既有技術，shRNA 卡匣也是。他們主張的是兩者的接合：**「HIDE 真正新穎的地方，是把 synNotch 受體與 shRNA 卡匣結合起來，這件事以前沒有人做過。」**而工程上的後果是一個啟動子問題——U6 是組成型的 Pol III 啟動子，所以他們**把它的增強子元件換成 Gal4 上游活化序列**，讓一個組成型啟動子變成可誘導的，同時仍然能被聚合酶 III 辨識。'
          }) +
          h.h3({ en: 'The binder design, and the aim they had to give up', zh: '結合蛋白設計，以及他們不得不放棄的那個目標' }) +
          h.p({
            en: 'HLAs can differ by only a few amino acids, so the binders are deliberately small — **nanobodies and fully de novo multi-helix binders, 5 to 15 kDa** — because the differences sit in the peptide-binding groove and a binder has to reach in. The target is two-sided: selective enough to enrich cells at the organ, and **high-affinity enough to exert the mechanical pulling force synNotch requires.**',
            zh: 'HLA 之間可能只差幾個胺基酸，所以結合蛋白被刻意做小——**奈米抗體與完全從零設計的多螺旋結合蛋白，5 到 15 kDa**——因為那些差異位在肽結合溝裡，結合蛋白必須伸得進去。目標是雙面的：既要有足夠的選擇性把細胞富集在器官處，**又要有足夠的親和力去施加 synNotch 所需的機械拉力。**'
          }) +
          h.warn({
            en: '**The original aim was a binder specific for the HLA and completely independent of the peptide. It was not achievable**, and the reason is written down: because the amino-acid differences lie mostly in the peptide-binding cleft, the peptide itself is heavily affected by them and is involved in forming the epitope. So they **also designed binders against an HLA + organ-specific-peptide combination**, to stay organ-specific — a scope change reported as a scope change.',
            zh: '**原本的目標是一個只認 HLA、完全與肽無關的結合蛋白。這件事做不到**，而理由被寫了下來：因為胺基酸差異大多落在肽結合溝裡，那個肽本身受這些差異影響很大，而且參與構成抗原決定位。所以他們**另外設計了針對「HLA＋器官特有肽」組合的結合蛋白**，以維持器官專一性——一次被當成範圍變更來報告的範圍變更。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'f-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A surrogate chassis, declared up front', zh: '一個事先聲明的替代底盤' },
        lede: {
          en: 'The therapy lives in a patient-derived T cell. Every component was tested in HEK293T instead, "as they are less complex to handle and have a higher transfection rate", with the cells made to express a fused HLA–β2m construct.',
          zh: '這個療法是住在病人自身的 T 細胞裡的。但每一個元件都改在 HEK293T 中測試，「因為它們操作上較不複雜、轉染率也較高」，並讓這些細胞表達一個 HLA–β2m 融合構建體。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'HIDE: three verbs in the wet lab, one tool in the dry lab', zh: 'HIDE：濕式的三個動詞、乾式的一個工具' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Wetlab, RNA Interference, Cloning and Software pages.', zh: '由我們依該隊 Wetlab、RNA Interference、Cloning、Software 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'f-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Three verbs, and the reporter problem that shaped all of them', zh: '三個動詞，以及形塑了它們全部的那個報告系統問題' },
        body:
          h.phases([
            { h: { en: 'BIND — validate the machine before the specificity', zh: 'BIND——先驗證機器，再驗證專一性' },
              p: { en: 'The synNotch core is the only fixed part; the extracellular and intracellular ends can be freely exchanged. They tested de novo binders, nanobodies **and a SNAP-tag** for the extracellular domain, always with the Gal4–Oct-2 fusion inside.', zh: 'synNotch 核心是唯一固定的部分；胞外與胞內兩端都可以自由替換。他們在胞外域測試了從零設計的結合蛋白、奈米抗體**以及一個 SNAP-tag**，而胞內一律是 Gal4–Oct-2 融合蛋白。' },
              items: [
                { en: 'For the initial test the binder was **replaced with a SNAP-tag, activated by covalent binding to benzylguanine-covered beads** — so the general functionality of the synNotch could be established on a synthetic ligand, **and the binders validated separately.**', zh: '在最初的測試中，結合蛋白被**換成 SNAP-tag，並以與苄基鳥嘌呤包覆珠的共價結合來活化**——這樣 synNotch 的一般功能性就能在一個人工配體上建立起來，**而結合蛋白則另外單獨驗證。**' },
                { en: 'And the reporter had to be inverted, because of the biology. Since the U6 promoter and the Oct-2 transcription factor recruit **polymerase III**, "we could not express a reporter protein" — Pol III does not make mRNA for one. So they used **stably eGFP-expressing HEK293T cells and replaced the anti-HLA shRNA with an anti-eGFP shRNA**: loss of fluorescence means the receptor fired.', zh: '而報告系統必須被反過來做，原因出在生物學。因為 U6 啟動子與 Oct-2 轉錄因子招募的是**聚合酶 III**，「我們沒辦法表達一個報告蛋白」——Pol III 不會為它做出 mRNA。所以他們用了**穩定表達 eGFP 的 HEK293T 細胞，並把 anti-HLA shRNA 換成 anti-eGFP shRNA**：螢光消失就代表受體啟動了。' }
              ],
              done: { en: 'A readout in which the absence of a signal is the positive result, built because the obvious readout was unavailable.', zh: '一個「訊號消失才是陽性結果」的讀值，而它之所以存在，是因為顯而易見的那種讀值做不出來。' } },
            { h: { en: 'TRIGGER — characterise the vesicles rather than assume them', zh: 'TRIGGER——把囊泡特性化，而不是假設它們是什麼' },
              p: { en: 'Delivery uses the cell\'s own extracellular vesicle pathway: the effector cell produces vesicles containing siRNA, which enter the organ tissue.', zh: '遞送利用細胞自己的胞外囊泡途徑：效應細胞產生含 siRNA 的囊泡，進入移植器官的組織。' },
              items: [
                { en: 'Using **nanoparticle tracking analysis and Western blots**, they confirmed the vesicles were **exosomes** — a characterisation step, where a "we used EVs" claim would have been easier.', zh: '他們用**奈米顆粒追蹤分析與西方墨點**確認那些囊泡是**外泌體**——這是一個特性化步驟，而寫一句「我們用了胞外囊泡」會容易得多。' }
              ] },
            { h: { en: 'SILENCE — targets chosen by prevalence and cross-reactivity', zh: 'SILENCE——依盛行率與交叉反應性挑標靶' },
              p: { en: 'First target **HLA-A\\*01:01:01**, chosen because HLA-A\\*01 affects **14.6 % of the European population** and is also common across North and South Africa, South West Asia and North America.', zh: '首個標靶是 **HLA-A\\*01:01:01**，之所以選它，是因為 HLA-A\\*01 影響**歐洲人口的 14.6%**，而且在北非、南非、西南亞與北美也很常見。' },
              items: [
                { en: 'The non-targets were chosen on the same logic, inverted: HLA-A\\*02, \\*03, \\*11 and \\*24 are among the most common worldwide, so *"our medication would have high probability to encounter them, which makes them perfect examples to test our shRNA specificity"* — with **HLA-A\\*24 at 30–40 % in Japan and Southeast Asia against 8.6 % in Europe.**', zh: '非標靶的選擇用的是同一套邏輯的反面：HLA-A\\*02、\\*03、\\*11、\\*24 是全球最常見的幾種，所以*「我們的藥物有很高機率會遇到它們，這讓它們成為測試 shRNA 專一性的完美例子」*——其中 **HLA-A\\*24 在日本與東南亞達 30–40%，而歐洲是 8.6%。**' },
                { en: 'And the design accounts for known cross-reactivity, so the hard cases are deliberately in the panel: **A\\*03 cross-reacts with A\\*01, and A\\*02 with A\\*24.**', zh: '而且設計考慮了已知的交叉反應性，所以困難的案例是刻意被放進測試組合的：**A\\*03 與 A\\*01 交叉反應，A\\*02 與 A\\*24 交叉反應。**' }
              ] },
            { h: { en: 'The positive control is the construct\'s own architecture', zh: '陽性對照就是這個構建體自己的架構' },
              p: { en: 'Because every HLA construct is a **covalent HLA–β2m fusion**, one mRNA encodes both — so an **anti-β2m shRNA should knock down every HLA in the panel**, establishing the maximum downregulation achievable in that system.', zh: '因為每個 HLA 構建體都是**共價的 HLA–β2m 融合蛋白**，一條 mRNA 同時編碼兩者——所以一個 **anti-β2m shRNA 應該會把測試組合中的每一個 HLA 都壓下來**，從而界定在那個系統中可達到的最大下調幅度。' },
              items: [
                { en: 'The negative control is a **scrambled shRNA designed to lack complementarity to anything in the human genome**, which also tests that shRNA production and its machinery are not themselves toxic or expression-altering.', zh: '陰性對照是一個**刻意設計成與人類基因體中任何序列都沒有互補性的打亂 shRNA**，它同時也在測試 shRNA 的生產與相關機制本身是否有毒、或是否會改變表達量。' },
                { en: 'Detection designed against its own failure mode: the HLA construct terminates in a **FLAG-tag** so it is detected by anti-FLAG, *"whilst ruling out non-specific binding of the antibody to the HLA construct"*. Loading normalised to **vinculin**, with the reason given — cytoskeletal, so evenly expressed.', zh: '偵測方式是針對自身失敗模式設計的：HLA 構建體以 **FLAG-tag** 結尾，所以由 anti-FLAG 偵測，*「同時排除抗體與 HLA 構建體的非專一性結合」*。上樣量以 **vinculin** 正規化，並寫明理由——它是細胞骨架蛋白，所以表達均勻。' },
                { en: 'And the antibody\'s specificity is **demonstrated rather than assumed**: control transfections of shRNA cassettes **without** any HLA construct gave **no detectable FLAG signal**.', zh: '而抗體的專一性是**被證明的，不是被假設的**：**不含**任何 HLA 構建體、只有 shRNA 卡匣的對照轉染，**完全沒有可偵測的 FLAG 訊號**。' },
                { en: 'Plasmid prep hygiene is part of the design: the two co-transfected plasmids carry **different resistance cassettes — carbenicillin for the HLA plasmids, kanamycin for the shRNA plasmids — "to avoid cross contamination during plasmid production."**', zh: '質體製備的衛生也是設計的一部分：兩個共轉染的質體帶**不同的抗性卡匣——HLA 質體用羧苄青黴素、shRNA 質體用卡那黴素——「以避免質體生產過程中的交叉污染」。**' }
              ] },
            { h: { en: 'A scaled-down plan, and the person who talked them out of the bigger one', zh: '一個縮小後的計畫，以及勸他們別做大版本的那個人' },
              p: { en: 'They had planned stable single-HLA cell lines. After consulting postdoc Philipp Münick from the Dötsch lab on the experimental design, they concluded **co-transfection was sufficient for initial candidate screening.**', zh: '他們原本計畫做穩定表達單一 HLA 的細胞株。在就實驗設計諮詢 Dötsch 實驗室的博士後 Philipp Münick 之後，他們的結論是**共轉染對初步候選篩選已經足夠。**' },
              items: [
                { en: 'The harvest window of 36–48 h was set after consulting Prof. Robert Tampé **plus their own optimisation experiments** — advice and data, not advice alone. The HLA construct design itself came with advice from Dr. Simon Trowitzsch of the same lab.', zh: '36–48 小時的收樣視窗是在諮詢 Robert Tampé 教授**並加上他們自己的最佳化實驗**之後定下的——是建議加數據，不是只有建議。而 HLA 構建體本身的設計也得到同一實驗室 Simon Trowitzsch 博士的建議。' },
                { en: 'A timecourse at 0, 4, 12, 24, 36, 48 and 60 h then **contradicted the literature and said so**: published work suggested expression and downregulation become detectable at 24 h, and **both were already detectable at 12 h**, with both still detectable at 60 h.', zh: '接著在 0、4、12、24、36、48、60 小時做的時序實驗**與文獻矛盾，而他們把這點說出來**：已發表的研究指出表達與下調在 24 小時才變得可偵測，而**兩者在 12 小時就已經可偵測**，到 60 小時仍然可偵測。' },
                { en: 'The span was capped at 60 h **for a stated biological reason: the cells began to overgrow and die after two days.** Three biological repeats, normalised to vinculin, with extended data published separately.', zh: '時間範圍被限制在 60 小時，**理由是生物學上的：細胞在兩天之後開始過度生長並死亡。**三次生物重複，以 vinculin 正規化，延伸數據另外公開。' }
              ] }
          ])
      });

      /* ---------------- normalisation ---------------- */
      out += h.sec({
        id: 'f-norm',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The best piece of reasoning on the wiki is about plasmid mass', zh: '這個 wiki 上最好的一段推理，講的是質體的質量' },
        lede: {
          en: 'A co-transfection does not deliver the same amount of each plasmid as a single transfection does, and almost nobody says so.',
          zh: '共轉染送進去的每個質體的量，和單獨轉染不一樣——而幾乎沒有人會把這件事說出來。'
        },
        body:
          h.p({
            en: 'Their argument, in full: protein expression levels depend on transfection efficiency and on HLA plasmid amount. **Each transfection uses the same total amount of plasmid, but in a co-transfection the individual amount of each plasmid is half as much as in a single-plasmid transfection.** And since shRNA must always be co-transfected with HLA, every comparison is normalised **to the co-transfection of the corresponding HLA with scrambled shRNA** — not to a single-plasmid control, which would have made the knockdown look larger than it is. Samples were additionally normalised to **cell count** and, by BCA assay, to **total protein**.',
            zh: '他們的完整論點是：蛋白表達量取決於轉染效率與 HLA 質體的量。**每次轉染使用的質體總量相同，但在共轉染中，每個質體各自的量只有單質體轉染時的一半。**而既然 shRNA 永遠必須與 HLA 共轉染，所以每一個比較都是**以「對應的 HLA 加打亂 shRNA 的共轉染」為基準正規化**——而不是以單質體對照為基準，否則抑制效果看起來會比實際更大。樣品另外還以**細胞數**正規化，並以 BCA 分析對**總蛋白量**正規化。'
          }) +
          h.take({ en: 'Why this is worth a paragraph', zh: '為什麼這值得一整段' }, {
            en: 'Three normalisations in series — housekeeping protein, cell count, total protein — are good practice. But the **choice of comparison group** is the one that changes the answer, and it is the one most knockdown figures get wrong by quietly comparing a co-transfection against a single transfection. Writing the arithmetic out is what makes their percentages mean anything.',
            zh: '串接三道正規化——內參蛋白、細胞數、總蛋白——是好做法。但真正會改變答案的是**比較組的選擇**，而這也是大多數抑制圖表最容易出錯的地方：悄悄拿共轉染去比單獨轉染。把這個算術寫出來，才是讓他們的百分比有意義的原因。'
          }) +
          h.warn({
            en: 'And a false-positive risk flagged against their own result: **HLA-A\\*24 expressed lower than A\\*01 and A\\*02**, which "while being included in expression comparison could lead to false positive downregulation results due to the detection limit of Western blot analysis." A lane near the detection limit will always look knocked down.',
            zh: '還有一個針對自己結果提出的偽陽性風險：**HLA-A\\*24 的表達量低於 A\\*01 與 A\\*02**，而這「雖然被納入表達量比較，但可能因為西方墨點分析的偵測極限而導致偽陽性的下調結果」。一條靠近偵測極限的帶，看起來永遠都像被抑制了。'
          }) +
          h.p({
            en: 'Two levels of evidence, not one: protein by anti-FLAG Western blot, and transcript by **RT-qPCR** — because siRNA binding promotes degradation of the target mRNA, so a reduction should be visible at both levels if the mechanism is what they claim.',
            zh: '兩個層級的證據，而不是一個：蛋白層級用 anti-FLAG 西方墨點，轉錄本層級用 **RT-qPCR**——因為 siRNA 的結合會促使標靶 mRNA 降解，所以如果機制如他們所主張，兩個層級都應該看得到下降。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'f-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'HUSH exists because the tool search failed, and the reasons are itemised', zh: 'HUSH 之所以存在，是因為找工具失敗了，而理由被逐條列出' },
        lede: {
          en: 'Human genome-Universal Silencing Hairpin designer. Open-source, on iGEM GitLab, with four interfaces over one core.',
          zh: 'Human genome-Universal Silencing Hairpin designer。開源，放在 iGEM GitLab 上，一個核心、四種介面。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'reason 1', zh: '理由 1' }, k: 'v' }],
              h: { en: 'Nothing handles polymorphic families', zh: '沒有工具能處理高多型性家族' },
              p: { en: 'HLA coding sequences can differ by a few base pairs, and **no available design tool accounts for that.** They bridged it manually with multiple sequence alignments — and found **no way to integrate that step into any tool they could find.**', zh: 'HLA 的編碼序列可能只差幾個鹼基對，而**現有的設計工具沒有一個處理這件事。**他們用多序列比對手動補上這一步——然後發現**找不到任何工具能把那一步整合進去。**' } },
            { chips: [{ t: { en: 'reason 2', zh: '理由 2' }, k: 'b' }],
              h: { en: 'The commercial ones are black boxes', zh: '商用的那些是黑盒子' },
              p: { en: 'Algorithms and selection criteria are proprietary, and option sets vary between platforms **"usually without any reasoning given that would be clear to the user."** Even siDirect, the non-commercial tool they actually used first, is **neither open-source nor pipeline-integrable.**', zh: '演算法與篩選標準都是閉源的，而各平台提供的選項不一致，**「通常也沒有給出使用者看得懂的理由」**。即使是他們最初真正使用的非商業工具 siDirect，也**既非開源、也無法整合進流程。**' } },
            { chips: [{ t: { en: 'reason 3', zh: '理由 3' }, k: 'r' }],
              h: { en: 'The field moved and the tools did not', zh: '領域前進了，工具沒有' },
              p: { en: 'Their research found promising advances towards designing RNAi constructs between highly similar sequences, and no tool mentioned incorporating them. The diagnosis is structural: **"while research in the field of RNAi design has progressed, the available tools for researchers have remained mostly stagnant."**', zh: '他們的調查找到一些在「高度相似序列之間設計 RNAi 構建體」方面有前景的進展，而沒有任何工具提到把它們納入。他們的診斷是結構性的：**「雖然 RNAi 設計這個領域的研究有進展，但可供研究者使用的工具大致停滯。」**' } }
          ]) +
          h.h3({ en: 'Three tenets, each with teeth', zh: '三條原則，每一條都有牙齒' }) +
          h.kv([
            [{ en: 'Research-first', zh: '研究優先' }, { en: 'Every design choice carries the research it comes from and how to use it, so the tool is auditable rather than a black box — plus a **novel analysis package for polymorphic protein families**, which is the part no other tool has.', zh: '每一個設計選擇都附上它的研究來源與使用方式，所以這個工具是可稽核的，而不是黑盒子——另外還有一個**針對高多型性蛋白家族的新分析套件**，那是其他工具都沒有的部分。' }],
            [{ en: 'Accessibility', zh: '可用性' }, { en: 'A guided wizard that **proposes optimal choices from the sequence\'s own characteristics**, including converting designed siRNAs into shRNAs with guidance on which hairpin loop to use and **thermodynamic evaluation of the structure\'s integrity** — plus a compact **expert mode** exposing thermodynamic constants and selection rules for pipeline integration.', zh: '一個引導式精靈，會**依序列自身的特性提出最佳選擇**，包括把設計好的 siRNA 轉成 shRNA，並指引該用哪一種髮夾環，以及**對結構完整性做熱力學評估**——另外還有一個精簡的**專家模式**，把熱力學常數與篩選規則攤開，供整合進流程使用。' }],
            [{ en: 'Safety', zh: '安全' }, { en: 'Argued from the pharmacology: siRNA effects last days, but **shRNA can silence for considerably longer, which is desirable clinically and is exactly what makes an off-target dangerous.** So HUSH filters candidates by comparative sequence analysis **against NCBI human RefSeq using the open-source aligner Bowtie**, chosen explicitly for transparency — and they **propose extending off-target screening to known SNPs**, which standard practice does not cover.', zh: '這條原則是從藥理學推出來的：siRNA 的效果持續數天，但 **shRNA 可以沉默相當長的時間，這在臨床上是想要的，而這正是脫靶之所以危險的原因。**所以 HUSH 會以比較序列分析篩選候選，**比對 NCBI 人類 RefSeq，使用開源比對器 Bowtie**，而選它明確是為了透明——他們還**提議把脫靶篩檢擴及已知的單核苷酸多型性（SNP）**，那是標準做法沒有涵蓋的。' }]
          ]) +
          h.p({
            en: 'Four interfaces over one core (`HushSession`): a **web app** with a guided wizard, a **CLI** for one-shot design in a pipeline, a **persistent terminal shell** with saved input and panels, and — unusually for an iGEM tool — an **MCP server so an AI agent can drive HUSH**. Input is **FASTA**, with the choice justified rather than assumed: established in 1985, universal across the IPD-IMGT/HLA database, the NCBI databases and industry. The input is separated into a target sequence and **an optional sequence panel required by the MSA module** — which is the part that makes allele-selective design possible at all.',
            zh: '一個核心（`HushSession`）上有四種介面：帶引導精靈的**網頁應用**、可在流程中一次性設計的 **CLI**、一個會保存輸入與面板的**常駐終端介面**，以及——在 iGEM 工具中相當罕見的——一個 **MCP 伺服器，讓 AI 代理可以驅動 HUSH**。輸入格式是 **FASTA**，而這個選擇是被論證過的、不是預設的：1985 年即確立，在 IPD-IMGT/HLA 資料庫、NCBI 各資料庫與產業界通用。輸入被分成標靶序列，以及**一個 MSA 模組所需的可選序列面板**——而那正是「依等位基因做選擇性設計」之所以可能的關鍵。'
          }) +
          h.h3({ en: 'The validation table, which does not flatter the tool', zh: '那張對工具並不客氣的驗證表' }) +
          h.p({
            en: 'Five HUSH-designed shRNAs (A03, A24, A02+A24, A03+A24, A01+A02+A24) against four HLA-A alleles, with **each cell marked for whether the result was expected and whether it was confirmed by Western blot or by RT-qPCR.** Their own verdict: **every target they expected to hit was downregulated**, but *"the magnitude of off-target effects on other HLA subtypes that made up the design panel is difficult to gauge"*; the RT-qPCR experiments *"only supported, but underreported"* expected downregulation, while the Western blots *"showed mixed results, generally indicating broad off-target hits alongside support of expected targets."*',
            zh: '五個由 HUSH 設計的 shRNA（A03、A24、A02+A24、A03+A24、A01+A02+A24）對上四個 HLA-A 等位基因，而**每一格都標示了該結果是否為預期，以及是由西方墨點或 RT-qPCR 確認的。**他們自己的結論是：**所有他們預期會打到的標靶都被下調了**，但*「對設計組合中其他 HLA 亞型的脫靶效應幅度很難評估」*；RT-qPCR 實驗*「只是支持、但低報了」*預期的下調幅度，而西方墨點*「結果混雜，整體上顯示有廣泛的脫靶命中，同時也支持了預期的標靶」*。'
          }) +
          h.warn({
            en: 'And then the limit on all of it, stated by them: **"as all experiments were only conducted once, however, this does not represent a definitive verdict on whether specific, allele-selective shRNA designs are feasible."** A software team publishing that its own validation is n = 1 — and leaving the sentence in rather than running a smaller claim past it.',
            zh: '接著是他們自己為這一切設下的界線：**「然而，由於所有實驗都只做了一次，這並不構成『專一的、依等位基因選擇性的 shRNA 設計是否可行』的最終結論。」**一個軟體團隊把自己的驗證是 n = 1 這件事公開出來——而且把這句話留著，而不是改寫一個比較小的主張繞過它。'
          }) +
          h.h3({ en: 'The outlook is a transfer list, not a vision', zh: 'Outlook 是一張移轉清單，不是一個願景' }) +
          h.p({
            en: 'The real problem HUSH solves — **distinguishing closely related transcripts** — recurs widely, and each case is named with its caveat. In immunology: **KIR, LILR and FCGR** receptor families, where selective suppression of individual alleles could separate the contributions of individual receptor variants. Elsewhere in medicine: polymorphic blood-group genes such as **ABO**, and disease-associated variants such as **APOL1** risk alleles. In plants: **NLR** resistance-gene families, where selective suppression could test which alleles contribute to disease resistance, and the highly polymorphic **S-locus** self-incompatibility genes. In insects: **cytochrome P450 insecticide-resistance alleles in *Anopheles funestus***, where constructs that distinguish resistant from susceptible alleles could separate resistance phenotypes from their fitness costs. In plant pathology: host-induced gene silencing, either across conserved sequences in many pathogen isolates or to distinguish particular strains.',
            zh: 'HUSH 真正解決的問題——**分辨高度相似的轉錄本**——到處都在重演，而他們把每一個案例連同警語一起列出。在免疫學中：**KIR、LILR 與 FCGR** 受體家族，在那裡選擇性地抑制個別等位基因，可以把個別受體變異體各自的貢獻分開。醫學的其他角落：像 **ABO** 這樣的多型性血型基因，以及像 **APOL1** 風險等位基因這樣的疾病相關變異。在植物中：**NLR** 抗病基因家族，選擇性抑制可以檢驗哪些等位基因貢獻了抗病性；以及高度多型的 **S 位點**自交不親和基因。在昆蟲中：***Anopheles funestus* 的細胞色素 P450 殺蟲劑抗性等位基因**，能分辨抗性與感受性等位基因的構建體，可以把抗性表現型與其適存度代價分開。在植物病理學中：宿主誘導的基因沉默，既可針對許多病原分離株中的保守序列，也可用來分辨特定菌株。'
          }) +
          h.note({
            en: 'Each is caveated rather than claimed: feasibility *"depends on target-organism biology, RNA uptake and processing, and the availability of suitable delivery methods"*, and because RNAi constructs target nucleotide sequences in transcripts rather than protein sequences, **protein-level variation has to be mapped back onto coding sequences and relevant transcript isoforms first.**',
            zh: '每一項都附帶警語而非被當成主張：可行性*「取決於標靶生物的生物學、RNA 的攝取與處理，以及是否有合適的遞送方法」*；而由於 RNAi 構建體針對的是轉錄本中的核苷酸序列、而不是蛋白序列，**蛋白層級的變異必須先被對映回編碼序列與相關的轉錄本異構物。**'
          })
      });

      /* ---------------- cloning ---------------- */
      out += h.sec({
        id: 'f-clone',
        kick: { en: 'Standards', zh: '標準' },
        h2: { en: 'A decision made against iGEM\'s own default, with the reasons written down', zh: '一個刻意不走 iGEM 預設做法的決定，而理由被寫下來' },
        body:
          h.p({
            en: 'They used **NEBuilder HiFi DNA Assembly** — the same exonuclease-based principle as Gibson — and say it plainly: **"Despite iGEM using the RFC10 and Type IIS standards for the Registry of Standard Biological Parts, we selected an alternative approach."** The reasons are specific to the project rather than general preference: they intended to test **many HLA binder variants**, so they wanted full control over insert position without having to design restriction sites in; the binder has to be joined **seamlessly** so that the fusion between binder and receptor translates as intended; and HiFi is field-proven (over 12,000 citations), widely used in their university, and already familiar to some team members.',
            zh: '他們用的是 **NEBuilder HiFi DNA Assembly**——與 Gibson 相同的核酸外切酶原理——而且說得很直白：**「儘管 iGEM 在標準生物零件登錄庫使用 RFC10 與 Type IIS 標準，我們選擇了另一種做法。」**理由是專案特有的，不是一般性的偏好：他們打算測試**很多個 HLA 結合蛋白變異體**，所以希望完全掌控插入位置，而不必在設計裡嵌入限制酶切位；結合蛋白必須被**無縫接合**，這樣結合蛋白與受體之間的融合才會按預期轉譯；而 HiFi 是經過實證的方法（超過 12,000 次引用）、在他們學校廣泛使用，而且部分團隊成員本來就熟悉。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Plasmid', zh: '質體' }, w: '26%' },
              { t: { en: 'What it was for', zh: '它的用途' } },
              { t: { en: 'Outcome', zh: '結果' }, w: '20%' }
            ],
            rows: [
              [{ en: 'HLA sequence into **PiggyBac**', zh: 'HLA 序列接入 **PiggyBac**' },
               { en: 'Stable cell lines consistently expressing the target HLA, by transposase integration at TTAA sites — so that downregulation experiments would be more reliable.', zh: '透過轉位酶在 TTAA 位點整合，建立穩定且持續表達目標 HLA 的細胞株——讓下調實驗更可靠。' },
               { en: '**Never assembled**, despite multiple HiFi attempts. Dropped for time.', zh: '**始終沒接起來**，雖然試了多次 HiFi。因時間而放棄。' }],
              [{ en: '**SNAP-synNotch** with anti-eGFP shRNA', zh: '**SNAP-synNotch** 加 anti-eGFP shRNA' },
               { en: 'A prototype using a SNAP-tag instead of an HLA binder, for initial testing of the receptor\'s activation.', zh: '以 SNAP-tag 取代 HLA 結合蛋白的原型，用於受體活化的初步測試。' },
               { en: 'Built.', zh: '完成。' }],
              [{ en: '**HLA binder synNotch** with anti-eGFP shRNA', zh: '**HLA 結合蛋白 synNotch** 加 anti-eGFP shRNA' },
               { en: 'The complete HIDE receptor, with the dry lab\'s binders in place of the SNAP-tag.', zh: '完整的 HIDE 受體，用乾式實驗設計的結合蛋白取代 SNAP-tag。' },
               { en: 'Built.', zh: '完成。' }],
              [{ en: '**HLA binder fused to GFP**', zh: '**HLA 結合蛋白融合 GFP**' },
               { en: 'Testing the binders alone, measuring their attachment to HLAs by FACS — binding separated from signalling.', zh: '單獨測試結合蛋白，以 FACS 量測它們與 HLA 的附著——把結合與訊號傳遞分開。' },
               { en: 'Built.', zh: '完成。' }]
            ],
            min: 700,
            source: { en: 'Read from the team\'s Cloning page.', zh: '讀自該隊 Cloning 頁。' }
          }) +
          h.take({ en: 'A failure with two reasons why it was tolerable', zh: '一個失敗，附帶兩個「為什麼還可以接受」的理由' }, {
            en: 'The PiggyBac construct never assembled. Rather than leaving that as a gap, they give two reasons it was not fatal: even a successful cloning would still have needed **at least four weeks** to establish and verify a stable line, "without considering complications"; and **co-transfection of the HLA and binder plasmids worked**, so the plasmid stopped being essential. The other three form a deliberate ladder — does the core work, does the binder work, does the whole thing work — and the ladder survived losing its top rung.',
            zh: 'PiggyBac 構建體始終沒接起來。但他們沒有把它留成一個缺口，而是給出兩個「這不致命」的理由：即使選殖成功，建立並驗證一株穩定細胞株仍需要**至少四週**，「而這還沒把各種意外算進去」；以及 **HLA 與結合蛋白質體的共轉染成功了**，所以那個質體不再是必要的。其餘三個構成一個刻意設計的階梯——核心能不能用、結合蛋白能不能用、整套能不能用——而這個階梯在失去最上面一階之後依然成立。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'f-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'What is open, in their own words', zh: '用他們自己的話說，哪些還沒解決' },
        body:
          h.ul([
            { en: 'The whole proof of concept runs in **HEK293T, not in T cells**, and **component by component rather than as an assembled system**. Declared at the top of the wet lab, not buried.', zh: '整個概念驗證是在 **HEK293T 而不是 T 細胞**中進行的，而且是**逐元件測試，不是整套系統一起測**。這一點寫在濕式實驗的開頭，不是埋在後面。' },
            { en: '**HUSH validation experiments were each run once.** Western blots indicated **broad off-target hits**; RT-qPCR **underreported** the expected effect.', zh: '**HUSH 的驗證實驗每一個都只做了一次。**西方墨點顯示有**廣泛的脫靶命中**；RT-qPCR **低報**了預期效應。' },
            { en: '**HLA-A\\*24\'s lower expression could produce false-positive downregulation** at the blot\'s detection limit — flagged by them against their own data.', zh: '**HLA-A\\*24 較低的表達量，在墨點的偵測極限附近可能造成偽陽性的下調**——這是他們自己針對自己的數據提出的。' },
            { en: '**The PiggyBac stable-line plasmid never assembled**, so no stable line exists.', zh: '**PiggyBac 穩定細胞株質體始終沒接起來**，所以不存在穩定細胞株。' },
            { en: '**The peptide-independent binder was not achievable**, so peptide-dependent binders had to be designed alongside — a change to the project\'s own premise, reported as one.', zh: '**與肽無關的結合蛋白做不到**，所以必須同時設計依賴肽的結合蛋白——這是對專案自身前提的一次修改，而他們就把它當成修改來報告。' },
            { en: '**The SNP extension to off-target screening is proposed, not implemented.**', zh: '**把脫靶篩檢擴及 SNP 這件事是「提議」，不是「已實作」。**' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'f-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from GU Frankfurt', zh: '我們會從 GU Frankfurt 抄什麼' },
        body:
          h.ul([
            { en: '**Invert the reporter when the biology forbids the obvious one.** Polymerase III cannot make a protein reporter, so they silenced a stable eGFP instead and read the absence of green. A constraint turned into a cleaner readout than the one they wanted.', zh: '**當生物學不允許用顯而易見的報告系統時，就把它反過來。**聚合酶 III 做不出蛋白報告子，所以他們改去抑制一個穩定表達的 eGFP，讀「綠色不見了」。一個限制被轉成了比原本想要的更乾淨的讀值。' },
            { en: '**Validate the machine before the specificity.** A SNAP-tag on benzylguanine beads tests the synNotch core without involving any binder at all.', zh: '**先驗證機器，再驗證專一性。**接在苄基鳥嘌呤珠上的 SNAP-tag，可以在完全不牽涉任何結合蛋白的情況下測試 synNotch 核心。' },
            { en: '**Turn your construct\'s architecture into the positive control.** A covalent HLA–β2m fusion means an anti-β2m shRNA defines the maximum achievable knockdown *in your own system*, which no literature value can give you.', zh: '**把你的構建體架構本身變成陽性對照。**共價的 HLA–β2m 融合蛋白意味著，一個 anti-β2m shRNA 就能界定*在你自己系統中*可達到的最大抑制幅度——這是任何文獻數值都給不了你的。' },
            { en: '**Pick the non-targets by prevalence and known cross-reactivity**, so a specificity claim is tested exactly where it is most likely to break.', zh: '**依盛行率與已知交叉反應性去挑非標靶**，讓專一性主張正好在它最可能破掉的地方被檢驗。' },
            { en: '**Normalise to the co-transfection, not the single transfection** — because equal total plasmid mass means unequal individual plasmid dose, and the comparison is otherwise wrong.', zh: '**以共轉染而不是單獨轉染為正規化基準**——因為質體總量相同代表每個質體各自的劑量不同，否則那個比較從一開始就錯了。' },
            { en: '**Give co-transfected plasmids different resistance markers** so plasmid prep cannot cross-contaminate. A two-minute design decision that removes an invisible failure mode.', zh: '**讓共轉染的質體帶不同的抗性標記**，這樣質體製備就不可能交叉污染。一個兩分鐘的設計決定，消掉一個看不見的失敗模式。' },
            { en: '**Prove the antibody.** shRNA-only transfections with no FLAG signal are what make every other FLAG band mean something.', zh: '**證明你的抗體。**只有 shRNA、沒有 FLAG 訊號的對照轉染，才是讓其他每一條 FLAG 帶有意義的東西。' },
            { en: '**Say which number sits at your detection limit** before a reader notices it for you.', zh: '**在讀者替你發現之前，先說清楚哪個數字落在你的偵測極限上。**' },
            { en: '**Let the tool gap justify the tool.** Proprietary algorithms, no MSA integration, no pipeline hooks, and a documented stagnation in implementing new research — four specific reasons, and then an open-source tool.', zh: '**讓工具的缺口去正當化你的工具。**閉源演算法、無法整合多序列比對、沒有流程接口，以及新研究遲遲未被實作的停滯——四個具體理由，然後才是一個開源工具。' },
            { en: '**Choose the transparent dependency on purpose.** NCBI RefSeq plus Bowtie, named as the choice that makes the safety filter auditable by someone else.', zh: '**刻意選擇透明的相依元件。**NCBI RefSeq 加 Bowtie，而且明說選它就是為了讓安全篩選能被別人稽核。' },
            { en: '**Publish the validation table with "expected" marked separately from "observed", and state the n.** A table that shows where the tool was wrong is worth more than a paragraph that says it works.', zh: '**公開驗證表，把「預期」與「觀察到」分開標示，並寫出 n。**一張能看出工具在哪裡錯了的表，比一段說它有效的文字更有價值。' },
            { en: '**Explain a deviation from the community standard instead of ignoring it.** RFC10 and Type IIS were set aside for a project-specific reason, and that reason is on the page.', zh: '**解釋你為什麼偏離社群標準，而不是無視它。**RFC10 與 Type IIS 因為一個專案特有的理由被擱置，而那個理由就寫在頁面上。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that the plasmid-mass normalisation paragraph is the best piece of reasoning on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/gu-frankfurt](https://2026.igem.wiki/gu-frankfurt/).',
            zh: '標示為我們的看法：上面十二點，以及「質體質量正規化那一段是這個 wiki 上最好的一段推理」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/gu-frankfurt](https://2026.igem.wiki/gu-frankfurt/)。'
          })
      });

      return out;
    }
  };
})(window);
