/* ETH-Zurich — preCISe. Top 10 Overgraduate and Best Foundational Advance (Overgrad), iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/eth-zurich/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Build the dual-plasmid producer', zh: '建立雙質體生產菌' },
        s: { en: 'Structural PVC operon ~27 kbp KanR + regulatory cargo ~10 kbp AmpR; the double plate is the screen', zh: '結構型 PVC 操縱子約 27 kbp（KanR）＋調控型酬載約 10 kbp（AmpR）；雙抗盤本身就是篩選' } },
      { l: { en: 'Change method, not repeat it', zh: '換方法，而不是重複同一個方法' },
        s: { en: 'TSS failed three times on one strain → electrocompetent c02-dob, four washes in ice-cold 10 % glycerol', zh: 'TSS 在某一株上失敗三次→把 c02-dob 做成電穿孔勝任細胞，在冰冷 10% 甘油中洗四次' }, tone: 'a' },
      { l: { en: 'Purify, practising on the empty cage', zh: '純化，先在空殼上練習' },
        s: { en: 'PVC-00 as the trial run and the endotoxin negative control; gels compared against the published gels', zh: 'PVC-00 既是試跑也是內毒素陰性對照；膠體直接與已發表的膠體比對' } },
      { l: { en: 'Find the missing polymerase while writing the protocol', zh: '在寫流程時發現缺了聚合酶' },
        s: { en: 'MG1655 carries no T7 polymerase, so the pET constructs could never transcribe, caught before induction', zh: 'MG1655 沒有 T7 聚合酶，所以 pET 構建體永遠轉錄不出來——在誘導前就抓到' }, tone: 'r' },
      { l: { en: 'Build the reporter line and validate it twice', zh: '建立報告細胞株，並驗證兩次' },
        s: { en: 'piggyBac CD20-mCherry + Cre-loxP→EGFP in HEK293T; antibody stain and transient Cre', zh: 'piggyBac 把 CD20-mCherry 與 Cre-loxP→EGFP 打進 HEK293T；以抗體染色與瞬時 Cre 驗證' } },
      { l: { en: 'Conjugate a binder and inject', zh: '接上結合蛋白，然後注射' },
        s: { en: 'SpyTag003/SpyCatcher003, one hour at room temperature, after purification', zh: 'SpyTag003／SpyCatcher003，純化之後，室溫一小時' } }
    ],
    dry: [
      { l: { en: 'deCISion: a cell type to a construct', zh: 'deCISion：從細胞類型到構建體' },
        s: { en: '47 CSPA cell types → receptor by specificity → binder from solved structures only → three plasmids to order', zh: '47 種 CSPA 細胞類型→依專一性挑受體→只從已解結構挑結合蛋白→列出要訂的三個質體' } },
      { l: { en: 'Rank split sites in the browser', zh: '在瀏覽器裡排序切點' },
        s: { en: 'OpenSplitProtein: split tolerance and fragment reassembly, two scores kept apart', zh: 'OpenSplitProtein：兩個分數分開保留——切點耐受度與片段再組裝' }, tone: 'g' },
      { l: { en: 'Benchmark with a resolvability test', zh: '用可解析性檢定做基準測試' },
        s: { en: '21 published sites, three comparators, 2,000 re-draws; only one margin keeps its sign', zh: '21 個已發表切點、三個對照工具、2,000 次重抽；只有一個差距保住正負號' } },
      { l: { en: 'Refuse the select agents, twice', zh: '兩道關卡拒絕管制病原' },
        s: { en: 'By PDB identifier before any request leaves the browser, and by the structure’s own title records', zh: '在任何請求離開瀏覽器之前先用 PDB 編號攔，再用結構自身的標題紀錄攔' }, tone: 't' }
    ],
    links: [
      { w: 5, d: 0, l: { en: 'the tool proposes the binder and the plasmid list', zh: '工具提出結合蛋白與質體清單' }, up: true },
      { w: 2, d: 1, l: { en: 'dual targeting needs a split cargo', zh: '雙重導向需要被切開的酬載' } },
      { w: 4, d: 0, l: { en: 'CD20 came out of the receptor step', zh: 'CD20 來自受體篩選那一步' }, up: true }
    ]
  };

  PD.pages['og-eth'] = {
    label: { en: 'ETH-Zurich', zh: 'ETH-Zurich' },
    title: { en: 'ETH-Zurich — preCISe', zh: 'ETH-Zurich — preCISe' },
    render: function (h) {
      var t = team('eth');
      var out = h.teamhero(t, {
        h1: {
          en: 'Their headline result is reported as ==not statistically significant==, because the replicate was bad.',
          zh: '他們的招牌結果被報告為==統計上不顯著==，因為那個重複樣品壞了。'
        },
        lede: {
          en: 'About 79 % of the human proteome is intracellular, and no approved protein therapeutic delivers an exchangeable protein cargo to the cytosol. preCISe retargets a bacterial molecular syringe, a Photorhabdus virulence cassette, by clicking a separately produced binder onto its tail fibre an hour before use. The engineering is clean, the software is released with its own biosecurity screen and a published AI-use disclosure, and when a flow cytometry duplicate came back irregular they discarded it and said what that cost them.',
          zh: '人類蛋白體約有 79% 位於細胞內，而目前沒有任何已核準的蛋白藥物能把可替換的蛋白酬載送進細胞質。preCISe 的做法是改造一支細菌分子針筒——*Photorhabdus* 毒力卡匣——在使用前一小時把一個獨立生產的結合蛋白接到它的尾絲上。工程做得乾淨，軟體連同自己的生物安全篩檢與一份公開的 AI 使用聲明一起釋出；而當一個流式細胞儀的重複樣品結果異常時，他們把它丟掉，並說清楚這讓他們付出了什麼。'
        },
        chips: [
          { t: { en: 'eCIS / PVC nanosyringe', zh: 'eCIS／PVC 奈米針筒' }, k: 'b' },
          { t: { en: 'SpyTag003 retargeting', zh: 'SpyTag003 改導向' }, k: 'v' },
          { t: { en: 'Cre–loxP reporter line', zh: 'Cre–loxP 報告細胞株' }, k: 'g' },
          { t: { en: 'deCISion + OpenSplitProtein', zh: 'deCISion＋OpenSplitProtein' }, k: 'a' },
          { t: { en: 'Astro, static HTML', zh: 'Astro，靜態 HTML' }, k: 't' }
        ],
        stats: [
          { v: '1 h', l: { en: 'Room-temperature incubation that changes the particle\'s target', zh: '改變顆粒標靶所需的室溫培養時間' } },
          { v: '13.6 → 20.7 %', l: { en: 'GFP⁺ across the positive-control dose series, PBS baseline ~3 %', zh: '陽性對照劑量序列的 GFP⁺ 比例，PBS 基線約 3%' } },
          { v: '9.1 %', l: { en: 'GFP⁺ with the de novo anti-CD20 binder, ~3× every negative control', zh: '使用新設計 anti-CD20 結合蛋白的 GFP⁺，約為所有陰性對照的 3 倍' } },
          { v: '21st', l: { en: 'Median percentile of published split sites in their ranking (random = 50)', zh: '已發表切點在他們排序中的中位百分位（隨機 = 50）' } },
          { v: '2,000', l: { en: 'Re-draws behind every "resolvable" claim in the benchmark', zh: '基準測試中每個「可解析」主張背後的重抽次數' } },
          { v: '6.9 %', l: { en: 'Of SAbDab binders that have a measured Kd, stated as a limitation', zh: 'SAbDab 中有量測 Kd 的結合蛋白比例——他們列為限制' } }
        ]
      });

      out += h.toc([
        { id: 'e-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'e-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'e-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'e-assay', t: { en: 'The delivery assay', zh: '遞送試驗' } },
        { id: 'e-dry', t: { en: 'Two released tools', zh: '兩個已釋出的工具' } },
        { id: 'e-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'e-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'e-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A syringe whose target and payload are independent', zh: '一支標靶與酬載彼此獨立的針筒' },
        lede: {
          en: 'Proteins do not cross membranes, so almost every protein therapeutic acts on a surface or a secreted target. Intracellular proteins are a largely untapped class, and many are undruggable by small molecules.',
          zh: '蛋白無法穿過細胞膜，所以幾乎每一種蛋白藥物都作用在細胞表面或分泌型標靶上。細胞內蛋白是一個幾乎未被開發的類別，而其中許多無法用小分子成藥。'
        },
        body:
          h.p({
            en: '**Extracellular contractile injection systems (eCIS)** are bacterial molecular syringes. *Photorhabdus* virulence cassettes (PVCs) are the subtype preCISe uses: a 16-gene operon (*pvc1*–*pvc16*) encoding a contractile sheath around an inner tube, tail fibres on a baseplate, and a spike. The tail fibres decide which cell; contraction drives the spike and tube through the membrane and delivers cargo **directly into the cytosol, unfolded, bypassing the endosomal pathway entirely**.',
            zh: '**胞外收縮型注射系統（eCIS）**是細菌的分子針筒。preCISe 用的是其中的 *Photorhabdus* 毒力卡匣（PVC）：一個 16 基因操縱子（*pvc1*–*pvc16*），編碼包在內管外的可收縮鞘、基板上的尾絲，以及一根尖釘。尾絲決定打哪一個細胞；收縮把尖釘與內管推過細胞膜，把酬載**以未折疊狀態直接送入細胞質，完全繞過內體途徑**。'
          }) +
          h.take({ en: 'Why that makes it a platform', zh: '為什麼這讓它成為一個平台' }, {
            en: 'Because **the target and the cargo are set by different parts of the particle**, they can be chosen independently. ETH\'s contribution is to make that independence practical for a team that is not a structural biology lab: a tail fibre carrying **SpyTag003**, binders produced separately as **SpyCatcher003** fusions, and conjugation **in vitro after purification, one hour at room temperature.** Any SpyCatcher-fused binder can in principle be swapped in **without re-engineering the complex.**',
            zh: '因為**標靶與酬載是由顆粒的不同部分決定的**，所以兩者可以各自獨立選擇。ETH 的貢獻是讓這種獨立性對一個「不是結構生物學實驗室」的團隊也可行：尾絲帶 **SpyTag003**、結合蛋白以 **SpyCatcher003** 融合形式分開生產，而接合是**在純化之後於體外進行——室溫一小時。**原則上任何 SpyCatcher 融合的結合蛋白都能換進去，**而不需要重新改造整個複合體。**'
          }) +
          h.cards([
            { chips: [{ t: { en: 'target', zh: '標靶' }, k: 'b' }],
              h: { en: 'CD20, chosen by their own tool', zh: 'CD20，由他們自己的工具選出' },
              p: { en: 'The receptor step of **deCISion** ranks surface receptors by how few of the 47 CSPA cell types they appear on. CD20 came out of that step rather than out of a literature browse.', zh: '**deCISion** 的受體篩選步驟是依「某個受體只出現在 47 種 CSPA 細胞類型中的幾種」來排序。CD20 是從那一步跑出來的，而不是翻文獻挑的。' } },
            { chips: [{ t: { en: 'cargo', zh: '酬載' }, k: 'g' }],
              h: { en: 'Cre recombinase, because it makes a binary readout', zh: 'Cre 重組酶，因為它能給出二元讀值' },
              p: { en: 'Cre excises a loxP-flanked cassette and switches a reporter to EGFP, so cytosolic arrival becomes a gate on a flow cytometer rather than a Western blot.', zh: 'Cre 會切掉被 loxP 夾住的卡匣，讓報告基因切換成 EGFP，所以「是否抵達細胞質」就變成流式細胞儀上的一個閘，而不是一張西方墨點。' } },
            { chips: [{ t: { en: 'next layer', zh: '下一層' }, k: 'v' }],
              h: { en: 'Dual targeting needs a split protein', zh: '雙重導向需要一個被切開的蛋白' },
              p: { en: 'Receptors unique to one cell type are rare, so delivery can require **two** receptors: split the cargo, load each half into its own PVC with its own binder, and only a cell carrying both receptors reassembles a working protein. Which is why OpenSplitProtein exists.', zh: '只在單一細胞類型上出現的受體很少，所以遞送可以要求**兩個**受體：把酬載切成兩半，各自裝進帶不同結合蛋白的 PVC，只有同時帶有兩個受體的細胞才能重組出有功能的蛋白。這就是 OpenSplitProtein 存在的原因。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'e-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Where the tool proposes and the bench decides', zh: '工具提議、實驗檯決定的交界' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'preCISe: produce, retarget, inject, plus two tools beside it', zh: 'preCISe：生產、改導向、注射——旁邊還有兩個工具' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Engineering, Results and Software pages.', zh: '由我們依該隊 Description、Engineering、Results、Software 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'e-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'DBTL iterations where the Learn is a working rule', zh: '每個「Learn」都是一條可以照用的規則的 DBTL 迴圈' },
        body:
          h.phases([
            { h: { en: 'The production strain, and a method changed rather than repeated', zh: '生產菌株，以及一個「被更換而非被重複」的方法' },
              p: { en: 'A functional eCIS needs two plasmids in one cell: the **structural** plasmid carrying the PVC operon (~27 kbp, KanR) and the **regulatory** plasmid carrying the cargo (~10 kbp, AmpR).', zh: '一個有功能的 eCIS 需要同一個細胞裡有兩個質體：帶 PVC 操縱子的**結構型**質體（約 27 kbp，KanR），以及帶酬載的**調控型**質體（約 10 kbp，AmpR）。' },
              items: [
                { en: '**The resistance pairing is the screen.** Because all structural plasmids carry kanamycin resistance and all regulatory ones ampicillin, a dual-plasmid strain is the only thing that grows on a plate with both. Plasmids arrived from Addgene as bacterial stabs, and they purified only the small one on purpose.', zh: '**抗性配對本身就是篩選。**因為所有結構型質體都帶卡那黴素抗性、所有調控型都帶安比西林抗性，所以在同時含兩種抗生素的盤上，唯一能長的就是雙質體菌株。質體以細菌穿刺培養的形式從 Addgene 寄來，而他們刻意只純化小的那一個。' },
                { en: '*Iteration 1:* **TSS chemical transformation**, chosen because it is cheap and needs no specialised equipment. Success judged by colony counts on double-selection plates, **with a parallel single-antibiotic plate as a control for the viability of the competent cells themselves.** Four strains made; **one transformation failed three times, with no colonies at all.**', zh: '*第一輪：***TSS 化學轉形**，選它是因為便宜且不需要特殊設備。成功與否由雙抗盤上的菌落數判斷，**並用一個只含單一抗生素的平行盤作為「勝任細胞本身是否還活著」的對照**。做出四株；**其中一次轉形失敗了三次，雙抗盤上完全沒有菌落。**' },
                { en: '*Iteration 2:* made the **parental structural strain (c02-dob) electrocompetent**: exponential phase, OD 0.4–0.6, four washes in decreasing volumes of ice-cold 10 % glycerol at 4,000 rpm, 15 min, 4 °C. Then electroporated the regulatory plasmid in. Sparse but real colonies, and all controls behaved.', zh: '*第二輪：*把**親代結構型菌株 c02-dob 做成電穿孔勝任細胞**——指數期、OD 0.4–0.6，在冰冷 10% 甘油中以遞減體積洗四次（4,000 rpm、15 分鐘、4 °C）——再用電穿孔把調控型質體打進去。菌落稀疏但確實存在，而且所有對照都正常。' },
                { en: 'Their stated Learn: **"evaluate the transformation method based on the apparent difficulty of the transformation rather than defaulting and repeating the same one."**', zh: '他們寫下的 Learn：**「依這次轉形看起來的難度去選方法，而不是預設沿用、反覆做同一個。」**' }
              ],
              done: { en: 'Five dual-plasmid producers, with the fifth obtained by changing method on evidence.', zh: '五株雙質體生產菌，而第五株是依證據換方法才拿到的。' } },
            { h: { en: 'Purification: practise on the construct you need anyway', zh: '純化——在你反正也需要的那個構建體上練習' },
              p: { en: 'They reproduced the published protocol from the 2025 *Nature Biotechnology* PVC paper, after discussing the essential steps in the Pilhofer Lab.', zh: '他們在 Pilhofer 實驗室討論過必要步驟之後，重現了 2025 年《Nature Biotechnology》PVC 論文中的流程。' },
              items: [
                { en: '**Two deliberate deviations, each with its reason stated:** twice the culture volume, because they anticipated losses in purification; and **no protease inhibitor in the lysis buffer, because PVCs should be protease-resistant.**', zh: '**兩個刻意的偏離，各自寫明理由：**培養體積加倍，因為他們預期純化過程會有損失；以及**裂解液不加蛋白酶抑制劑，因為 PVC 本來就該耐蛋白酶。**' },
                { en: 'The trial run used **PVC-00, the empty non-injecting complex**, "making it the lowest-risk construct to practise on, and because it was independently needed as the endotoxin negative control."', zh: '試跑用的是 **PVC-00，那個空的、不會注射的複合體**——「這讓它成為風險最低的練習對象，而且它本來就被獨立需要作為內毒素陰性對照」。' },
                { en: 'Verification by SDS-PAGE of the final product and the post-centrifugation fractions **compared directly against the published gels**, with the band pattern judged consistent with the reference. It worked first time.', zh: '驗證方式是把最終產物與離心後各分液跑 SDS-PAGE，並**直接與已發表的膠體比對**，判定條帶樣式與參考一致。第一次就成功。' },
                { en: 'And the Learn is a logistics rule: not all fractions were saved, so **the highest-yielding preparation could never be imaged by TEM**: "which is why every subsequent run began with a full set of labelled fraction tubes."', zh: '而這裡的 Learn 是一條後勤規則：並非所有分液都被保存下來，所以**產率最高的那一批永遠無法用穿透式電子顯微鏡成像**——「這就是為什麼之後每一次執行都從一整組貼好標籤的分液管開始」。' }
              ] },
            { h: { en: 'The error caught by writing the protocol', zh: '因為「去寫流程」而抓到的錯誤' },
              p: { en: 'Four SpyCatcher003 binders on one common architecture: N-terminal His6, an XTEN linker, a C-terminal SpyCatcher003. Ordered as T7 pET constructs and transformed into MG1655.', zh: '四個 SpyCatcher003 結合蛋白，共用一套架構——N 端 His6、XTEN 連接子、C 端 SpyCatcher003——以 T7 pET 構建體訂購並轉形進 MG1655。' },
              items: [
                { en: 'Then, **before the first induction**, they sat down to write the purification protocol for the team, went back through the vector maps and the strain genotype, and discovered that **MG1655 does not carry T7 polymerase**, so the constructs could never have been transcribed.', zh: '接著，**在第一次誘導之前**，他們坐下來替團隊寫純化流程，回頭檢查載體圖與菌株基因型——然後發現 **MG1655 沒有帶 T7 聚合酶**，所以那些構建體根本永遠轉錄不出來。' },
                { en: 'Re-transformed into a T7 strain. Their own gloss: catching it while drafting the protocol rather than after a failed induction saved time, "and underscored the importance of understanding the bigger picture in wet lab work".', zh: '重新轉形進帶 T7 的菌株。他們自己的註解是：在草擬流程時抓到、而不是在一次失敗的誘導之後才抓到，省下了時間，「也強調了在濕式實驗工作中理解全局的重要性」。' },
                { en: '*Iteration 2:* two cytoplasmic constructs lysed by sonication on ice; **two periplasmic ones, designed periplasmic so intramolecular disulfides can form,** extracted with hypertonic TSE buffer then an ice-cold water osmotic shock; both routes over Ni-NTA. Checked **two ways**: SDS-PAGE of lysate, flowthrough, wash and elution against predicted masses, plus Nanodrop A280.', zh: '*第二輪：*兩個細胞質型構建體以冰上超音波破菌；**兩個周質型的——之所以設計成周質型，是為了讓分子內雙硫鍵能形成**——先用高滲 TSE 緩衝液萃取，再做冰冷水滲壓衝擊；兩條路線都走 Ni-NTA。以**兩種方式**檢查：裂解液、流穿、沖洗與洗提各分液跑 SDS-PAGE 對照預期分子量，再加 Nanodrop A280。' },
                { en: 'Both routes produced usable, correctly sized binder, but **periplasmic extraction gave consistently lower total yields**, and due to time constraints not all binders were properly characterised.', zh: '兩條路線都做出大小正確、可用的結合蛋白，但**周質萃取的總產量一致偏低**，而且因為時間限制，並非所有結合蛋白都被好好特性化。' }
              ] },
            { h: { en: 'Structure and stability, with an application decision attached', zh: '結構與穩定性，並附帶一個應用決定' },
              p: { en: 'Negative-stain TEM on their own PVC preparations resolved different functional states: extended and contracted particles in the same field.', zh: '對他們自己的 PVC 製備做負染穿透式電子顯微鏡，解析出不同的功能狀態——同一視野中同時有伸展與收縮的顆粒。' },
              items: [
                { en: 'pH stability: **structural collapse in acidic conditions, with assembled particles still visible at pH 7.0 and 10.0.** Labelled preliminary.', zh: 'pH 穩定性：**在酸性條件下結構崩解，而在 pH 7.0 與 10.0 下仍可見組裝好的顆粒。**標註為初步結果。' },
                { en: 'And connected straight to a product decision rather than left as a curiosity: oral administration is ruled out, because the complexes would not survive the acidic conditions of the gut.', zh: '而且這直接連到一個產品決定，而不是被當成一個有趣的現象放著：口服給藥被排除，因為這些複合體撐不過腸胃道的酸性環境。' }
              ] },
            { h: { en: 'The reporter line, validated twice by different means', zh: '報告細胞株，用兩種不同方法各驗證一次' },
              p: { en: 'HEK293T with two **piggyBac** knock-ins: CD20 fused to an intracellular **mCherry** domain, and a **Cre–loxP reporter that switches to EGFP** on recombination.', zh: 'HEK293T 打進兩個 **piggyBac** 插入：融合了細胞內 **mCherry** 域的 CD20，以及一個在重組後**切換成 EGFP 的 Cre–loxP 報告系統**。' },
              items: [
                { en: 'Validation 1: an **anti-CD20 antibody stain correlating strongly with the mCherry signal**, so the tag reports **properly folded surface CD20** and not merely protein present.', zh: '驗證一：**anti-CD20 抗體染色與 mCherry 訊號高度相關**，所以這個標籤報告的是**正確折疊、位於表面的 CD20**，而不只是「蛋白存在」。' },
                { en: 'Validation 2: **transient transfection with a Cre expression plasmid** confirming the reporter switches to GFP, with a dose-dependent response.', zh: '驗證二：**以 Cre 表達質體做瞬時轉染**，確認報告系統會切換成 GFP，而且呈劑量依賴。' },
                { en: 'Then **FACS-sorted to a higher-expressing polyclonal population** before the real assay, so the measurement is made on cells that actually carry the target.', zh: '接著在真正的試驗之前**用 FACS 分選出表達量較高的多株族群**，讓量測是在真的帶有標靶的細胞上進行。' }
              ],
              done: { en: 'A cell line where a GFP⁺ gate means "Cre reached the cytosol", established independently of any eCIS experiment.', zh: '一株細胞，其中 GFP⁺ 閘就代表「Cre 抵達了細胞質」，而這件事是獨立於任何 eCIS 實驗建立起來的。' } }
          ])
      });

      /* ---------------- the assay ---------------- */
      out += h.sec({
        id: 'e-assay',
        kick: { en: 'Results', zh: '結果' },
        h2: { en: 'The number they threw away', zh: '那個他們丟掉的數字' },
        lede: {
          en: 'Two experiments: does the reporter respond to eCIS-delivered Cre in a dose-dependent way, and does SpyTag–SpyCatcher conjugation redirect injection to a receptor of their choosing?',
          zh: '兩個實驗：報告系統是否會對 eCIS 遞送的 Cre 呈劑量依賴的反應；以及 SpyTag–SpyCatcher 接合是否能把注射改導向他們選定的受體？'
        },
        body:
          h.fig({
            kind: 'bars',
            tag: { en: 'DELIVERY', zh: '遞送' },
            title: { en: 'GFP⁺ cells, every arm of the final assay on one plate', zh: 'GFP⁺ 細胞比例：最終試驗同一盤上的每一組' },
            sub: { en: 'Everything above the 15 µg line is a treatment; everything below it is a control that was run in the same plate.', zh: '15 µg 那條線以上的都是處理組；以下的都是同一盤中一起跑的對照組。' },
            data: [
              { label: { en: 'Positive control eCIS (Ad5 knob), 18.75 µg', zh: '陽性對照 eCIS（Ad5 knob），18.75 µg' }, v: 20.7, note: { en: 'top of the dose series; binds CAR, present on all HEK293T', zh: '劑量序列的最高點；結合 CAR，所有 HEK293T 上都有' } },
              { label: { en: 'Ad5-knob-retargeted complex, 15 µg', zh: '以 Ad5 knob 改導向的複合體，15 µg' }, v: 18.8, note: { en: 'conjugation reconstitutes a known functional particle', zh: '接合把一個已知有功能的顆粒重建出來' } },
              { label: { en: 'Positive control eCIS, 3.75 µg', zh: '陽性對照 eCIS，3.75 µg' }, v: 13.6, note: { en: 'bottom of the dose series; the rise is significant by one-way ANOVA', zh: '劑量序列的最低點；上升趨勢以單因子變異數分析為顯著' } },
              { label: { en: 'De novo BindCraft anti-CD20 binder, 15 µg', zh: '新設計的 BindCraft anti-CD20 結合蛋白，15 µg' }, v: 9.1, note: { en: 'roughly threefold over every negative control in the same plate', zh: '約為同一盤中所有陰性對照的三倍' } },
              { label: { en: 'Empty cage with binder', zh: '空殼＋結合蛋白' }, v: 3.5, note: { en: 'reported as the 3.2–3.8 % range', zh: '報告為 3.2–3.8% 的範圍' } },
              { label: { en: 'Non-injecting control with Cre', zh: '不會注射的對照＋Cre' }, v: 3.0, note: { en: 'free Cre in the well does not switch the reporter', zh: '孔中游離的 Cre 不會讓報告系統切換' } },
              { label: { en: 'PBS', zh: 'PBS' }, v: 2.95, note: { en: 'the baseline', zh: '基線' } }
            ],
            opts: { unit: { en: '% GFP⁺', zh: '% GFP⁺' }, dec: 1, xlabel: { en: 'GFP-positive live single cells, %', zh: 'GFP 陽性的活單細胞百分比' } },
            caption: { en: 'Read from the team\'s Results page. The de novo binder result is the one they report as not statistically significant, for the reason below.', zh: '讀自該隊 Results 頁。新設計結合蛋白的那一個結果，就是他們因為下述原因而報告為統計上不顯著的那個。' }
          }) +
          h.take({ en: 'The control that doubles as an argument', zh: '那個同時也是論證的對照' }, {
            en: 'Particles were **not pelleted out of solution** in this round, so any Cre released by spontaneous contraction stayed in the well. Because empty and Cre-loaded cages gave the **same** signal, free Cre does not generate false-positive reporter switching. So **recombination requires receptor-mediated injection.** A limitation of the protocol turned into the proof that the mechanism is what they say it is.',
            zh: '這一輪**沒有把顆粒離心出溶液**，所以任何因自發收縮而釋出的 Cre 都留在孔裡。因為空殼與裝了 Cre 的殼給出**相同**的訊號，可知游離的 Cre 不會造成偽陽性的報告切換——因此**重組必須經由受體介導的注射才會發生。**一個流程上的限制，被轉成了「機制確實如他們所說」的證明。'
          }) +
          h.warn({
            en: 'And then: the duplicate of the de novo binder arm was **flagged by FlowJo as an irregular acquisition**. It read about **23.0 % GFP⁺**, which would have *strengthened* the result. The team **discarded it**, stating in the same breath that **the difference is therefore not statistically significant.** Their conclusion is hedged to match: the de novo binder *"seem[s] to have delivered cargo"*. The headline result of the project is reported as not significant because one replicate was bad.',
            zh: '接著是：新設計結合蛋白那一組的重複樣品被 **FlowJo 標記為異常取樣**——它讀到約 **23.0% GFP⁺**，而那會*強化*這個結果——而該隊**把它丟掉了**，並在同一句話裡說明**因此這個差異在統計上不顯著。**他們的結論也相應地留了餘地：那個新設計的結合蛋白*「看起來似乎有把酬載送進去」*。這個專案的招牌結果被報告為不顯著，原因是其中一個重複樣品壞了。'
          }) +
          h.p({
            en: 'Their three conclusions are each sized to the evidence. **"Delivery can be measured"** rests on the dose-dependent response, with both control lines behaving as a targeted particle predicts. **"Targeting is modular"** comes from a SpyCatcher003 Ad5 binder that redirected injection as effectively as the published Ad5 knob control. For **"Targeting is not limited to binders that already exist"**, the de novo BindCraft binder *seems* to have delivered cargo, which means the pipeline can propose targets for which no nanobody or viral knob has ever been raised.',
            zh: '他們的三個結論，每一個的大小都剛好配得上證據。**「遞送是可以被量測的」**——劑量依賴的反應，而且兩條對照細胞株的行為都符合一個「有導向的顆粒」應有的預測。**「導向是模組化的」**——一個 SpyCatcher003 的 Ad5 結合蛋白改導向的效果，和已發表的 Ad5 knob 對照一樣好。**「導向不限於已經存在的結合蛋白」**——那個新設計的 BindCraft 結合蛋白*看起來*把酬載送進去了，這意味著這條流程可以提出「從來沒有人做出奈米抗體或病毒 knob」的標靶。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'e-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Two tools, and each one names the experiment it has not done', zh: '兩個工具，而每一個都指名了自己還沒做的那個實驗' },
        body:
          h.h3({ en: 'deCISion: a cell type in, three plasmids out', zh: 'deCISion——輸入一個細胞類型，輸出三個質體' }) +
          h.ul([
            { en: 'Pick one of the **47 human cell types in the Cell Surface Protein Atlas (CSPA)** by name, disease or tissue. The tool lists that cell type\'s surface receptors with how strongly each was measured **and on how many of the 47 cell types it was detected. Fewer means more specific.**', zh: '依名稱、疾病或組織，從**細胞表面蛋白圖譜（CSPA）的 47 種人類細胞類型**中挑一個。工具會列出該細胞類型的表面受體，附上各自的量測強度，**以及它在 47 種細胞類型中被偵測到幾種——越少代表越專一。**' },
            { en: 'Compare where that receptor appears in healthy tissues, healthy cell types, blood cells and tumours, from the Human Protein Atlas and CSPA.', zh: '從 Human Protein Atlas 與 CSPA 比較該受體在健康組織、健康細胞類型、血球與腫瘤中的分布。' },
            { en: 'List nanobodies and scFvs against it **from solved structures only**, with the measured Kd where one exists (SAbDab). And **it refuses whole antibodies as binders because they are too large to use on a PVC.**', zh: '**只從已解出的結構中**列出針對它的奈米抗體與 scFv，並附上有量測值時的 Kd（SAbDab）——而且**它拒絕把完整抗體當結合蛋白，因為那太大，沒辦法用在 PVC 上。**' },
            { en: 'Offer the published **XTEN linker** to SpyCatcher, or accept a pasted alternative.', zh: '提供已發表的 **XTEN 連接子**接到 SpyCatcher，或接受使用者貼上自己的替代序列。' },
            { en: 'Assemble binder + linker + SpyCatcher as one protein with its DNA, **name the three plasmids to order** (the cage, the cargo and the binder arm) and export protein and DNA FASTA.', zh: '把結合蛋白＋連接子＋SpyCatcher 組成單一蛋白連同其 DNA，**列出要訂的三個質體**——殼、酬載、結合蛋白臂——並輸出蛋白與 DNA 的 FASTA。' }
          ]) +
          h.p({
            en: 'Origin and check: the tool was built after a conversation with Prof. Bernd Wollscheid, because the CSPA\'s own interface (SISYPHUS) answers single lookups but not *"which receptor should I target on this cell type"*. They then took the working tool **back** to Wollscheid, who confirmed it was a use of the atlas he saw value in. That round trip — expert, build, expert again — is rarer on iGEM wikis than the first half alone.',
            zh: '來由與檢核：這個工具是在與 Bernd Wollscheid 教授談過之後才建的，因為 CSPA 自己的介面（SISYPHUS）能回答單筆查詢，但不能回答*「在這個細胞類型上我該打哪一個受體」*。接著他們把做好的工具**帶回去**給 Wollscheid，而他確認這是他認為有價值的一種圖譜用法。這種「專家→建造→再回專家」的來回，在 iGEM wiki 上比只有前半段要罕見得多。'
          }) +
          h.warn({
            en: '**Their validation section is the honest one.** The right validation would be to use deCISion\'s output to target different cells at the bench, and *"we have neither the time nor the scale to run these tests."* The argument offered instead is that the underlying databases are themselves validated. A software tool that names its own missing experiment rather than borrowing credibility from its inputs.',
            zh: '**他們的驗證一節是誠實的那種。**正確的驗證方式是用 deCISion 的輸出在實驗檯上去打不同的細胞，而*「我們既沒有時間也沒有規模去跑這些測試」*。他們改提出的論據是：底層的那些資料庫本身是經過驗證的。一個軟體工具指名自己缺少的那個實驗，而不是把輸入資料的可信度借來當自己的。'
          }) +
          h.p({
            en: 'And the limitations are specific and uncomfortable: coverage is only those **47 cell types**; **selectivity across cultured lines is not tissue specificity**, and the normal-tissue overlay "should only be taken as a rough guideline"; **SAbDab reports a measured Kd for 1,019 of 14,860 binders (6.9 %)**; CSPA measures N-glycosylated surface protein, so **"not detected is not proof of absence"**; and the output is a DNA cassette, not a vector, with no backbone and no signal peptide and a warning on the final page that a disulfide-bonded binder needs a periplasmic signal peptide.',
            zh: '而限制寫得既具體也不好看：覆蓋範圍只有那 **47 種細胞類型**；**在培養細胞株之間的選擇性不等於組織專一性**，而正常組織的疊圖「只應被當成粗略的指引」；**SAbDab 中有量測 Kd 的只有 14,860 個結合蛋白中的 1,019 個（6.9%）**；CSPA 量的是 N-糖基化的表面蛋白，所以**「沒偵測到不等於不存在」**；而輸出是一個 DNA 卡匣，不是一個載體——沒有骨架、沒有訊號肽，並在最後一頁警告帶雙硫鍵的結合蛋白需要周質訊號肽。'
          }) +
          h.h3({ en: 'OpenSplitProtein: two scores kept deliberately apart', zh: 'OpenSplitProtein——兩個分數被刻意分開' }) +
          h.p({
            en: 'Given a structure it evaluates **every possible split site** and ranks it on two criteria that are **reported separately rather than fused into one number**: **split tolerance** (can both halves stay folded) and **fragment reassembly** (will they come back together). Each is the average of three geometric percentiles (`pack`, `core`, `exposure` and `contacts`, `interface`, cohesion), and each percentile is a rank *within your own structure*, so a 95 means only 5 % of positions in that protein score better.',
            zh: '給它一個結構，它會評估**每一個可能的切點**，並依兩個**分開報告、而不是被融合成單一數字**的判準排序：**切點耐受度**（兩半能否各自維持折疊）與**片段再組裝**（它們會不會重新接回去）。每一個都是三個幾何百分位的平均——`pack`、`core`、`exposure` 與 `contacts`、`interface`、cohesion——而每個百分位都是*在你自己那個結構裡*的排名，所以 95 代表該蛋白中只有 5% 的位置分數更好。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'BENCHMARK', zh: '基準測試' },
            title: { en: 'Median percentile of 21 published split sites: lower is better, 50 is the number to beat', zh: '21 個已發表切點的中位百分位——越低越好，要打敗的數字是 50' },
            sub: { en: 'From superfolder GFP, Cre, horseradish peroxidase, firefly luciferase, Cas9 and NanoLuc. A 22nd site was excluded because residues 714–717 are unresolved in the deposited structure, so there is no peptide bond there to score.', zh: '來自 superfolder GFP、Cre、辣根過氧化酶、螢火蟲螢光素酶、Cas9 與 NanoLuc。第 22 個切點被排除，因為已存結構中 714–717 號殘基未被解析，那裡根本沒有肽鍵可以評分。' },
            data: [
              { label: { en: 'OpenSplitProtein (theirs)', zh: 'OpenSplitProtein（他們的）' }, v: 21, note: { en: '13 of 21 sites in the top quarter', zh: '21 個切點中有 13 個落在前四分之一' } },
              { label: { en: 'SplitSeek-Pro', zh: 'SplitSeek-Pro' }, v: 24, note: { en: '13 of 21; margin spans zero, so not resolvable', zh: '21 個中 13 個；差距跨越零，因此無法解析' } },
              { label: { en: 'ThermoMPNN-I', zh: 'ThermoMPNN-I' }, v: 30, note: { en: '8 of 21; the only resolvably worse method', zh: '21 個中 8 個；唯一可解析地較差的方法' } },
              { label: { en: '2019 iGEM Protein-split Model', zh: '2019 iGEM Protein-split 模型' }, v: 32, note: { en: '5 of 21; margin spans zero', zh: '21 個中 5 個；差距跨越零' } },
              { label: { en: 'A cut picked at random', zh: '隨機挑一個切點' }, v: 50, note: { en: 'about 5.25 of 21 would land in the top quarter by chance', zh: '靠運氣大約有 21 個中的 5.25 個會落在前四分之一' } }
            ],
            opts: { unit: { en: 'percentile', zh: '百分位' }, dec: 0, xlabel: { en: 'median percentile of the known-good site in each method\'s own ranking', zh: '已知可用切點在各方法自身排序中的中位百分位' } },
            caption: { en: 'Read from the team\'s Software page. Resolvability was established by re-drawing the six proteins at random 2,000 times and requiring a margin to keep its sign throughout.', zh: '讀自該隊 Software 頁。可解析性的判定方式是把六個蛋白隨機重抽 2,000 次，並要求差距在全程都保持同一個正負號。' }
          }) +
          h.take({ en: 'The finding they chose to publish against themselves', zh: '他們選擇公開、而且對自己不利的那個發現' }, {
            en: '**ThermoMPNN-I beats them on the insertion measurement their own score is calibrated against, and still ranks the real split sites worse.** Their sentence: *"predicting the measurement better does not mean ranking the real split sites better"*. That is why they keep the two names apart. And on the second claim: **"packing density does not surpass the rule it replaced"** (counting contacts across the cut). They scored the same two columns four ways on 223 sites; two framings favour each, and **dropping one sequence family reverses the difference, so these sites cannot tell the two rules apart.**',
            zh: '**ThermoMPNN-I 在「他們自己的分數所校準的那個插入量測」上贏過他們，卻仍然把真實切點排得更差。**他們的句子是：*「把量測預測得更好，不代表把真實切點排得更好」*——這也是他們把兩個名稱分開的原因。至於第二個主張：**「堆積密度並沒有超越它所取代的那條規則」**（也就是數跨越切點的接觸數）。他們在 223 個切點上用四種方式評分同樣兩個欄位；兩種框架各支持一方，而**只要去掉一個序列家族就會讓差異反轉，所以這些切點無法分辨這兩條規則。**'
          }) +
          h.ul([
            { en: '**Calibration data, named:** split tolerance against **13,622 scanned backbone positions** (insertion stability), reassembly against **223 intein split sites across 22 sequence families, of which only six are evaluable**. Every confidence interval on the reassembly side includes zero, so "the order they put cut points in is a starting point rather than a conclusion".', zh: '**校準資料，明確列出：**切點耐受度對照 **13,622 個掃描過的主鏈位置**（插入穩定性），再組裝對照 **223 個內含肽切點、橫跨 22 個序列家族，其中只有六個可評估**——而再組裝那一側的每一個信賴區間都包含零，所以「它們排出的切點順序是一個起點，而不是一個結論」。' },
            { en: '**The tolerance label is honest about being a proxy.** It comes from insertion scans, where every measured variant **stays covalently connected**. So the label is the cost of perturbing an intact backbone at a position, not the folding autonomy of two separated halves. And: **"no split construct in this work has been built at the bench."**', zh: '**耐受度這個標籤誠實承認自己只是代理指標。**它來自插入掃描，而其中每個被量測的變異體**主鏈都還是連著的**——所以這個標籤代表的是「在某個位置擾動一條完整主鏈的代價」，而不是「兩個分開的半邊各自折疊的能力」。還有：**「這項工作中沒有任何一個切開的構建體在實驗檯上被做出來。」**' },
            { en: '**It runs entirely in the browser, and the engineering choices follow from the constraints.** Plain HTML/CSS/classic JavaScript, no framework, no build step, no package manager, "the source code is identical to what the browser executes". Classic scripts replace ES modules **so `index.html` works from a local `file://` copy without a server.** One Web Worker per feature gives roughly **7.8× speedup**, and **each worker starts at a distinct position in the random-number stream, so a run spread over many threads gives the same numbers as a run on one.**', zh: '**它完全在瀏覽器裡執行，而這些工程選擇都是由限制推出來的。**純 HTML／CSS／傳統 JavaScript，沒有框架、沒有建置步驟、沒有套件管理器，「原始碼與瀏覽器執行的東西完全一致」。用傳統 script 取代 ES 模組，**這樣 `index.html` 從本機 `file://` 副本就能運作，不需要伺服器。**每個特徵一個 Web Worker 帶來約 **7.8 倍加速**，而且**每個 worker 從隨機數流的不同位置開始，所以跨多執行緒跑出來的數字與單執行緒完全相同。**' },
            { en: '**On an igem.wiki host it makes no outside request at all.** The PDB-identifier box is hidden there, so a structure comes from the user\'s own machine, and 3Dmol.js is vendored in rather than fetched. A design response to the wiki\'s own no-external-requests rule, written down as such.', zh: '**在 igem.wiki 主機上它完全不發出任何外部請求**——PDB 編號輸入框在那裡是隱藏的，所以結構來自使用者自己的機器，而 3Dmol.js 是內嵌進來的、不是遠端抓的。這是對 wiki 自身「不得外部請求」規則的一個設計回應，而且就這樣被寫下來。' }
          ]) +
          h.h3({ en: 'Biosecurity inside the tool, twice over', zh: '把生物安全放進工具裡，而且放兩道' }) +
          h.p({
            en: 'Because *"the same ranking that helps somebody build a conditional biosensor would help somebody split a toxin"*, processing is refused for CDC and USDA select agents **at two layers**: by **PDB identifier before any request leaves the browser**, so the download never happens; and **by name, reading the structure\'s own title records once a file is loaded**. That is the check that catches a file dragged in from disk, where the identifier check cannot see. The list comes from the Federal Select Agent Program (42 CFR 73.3, 9 CFR 121.3), framed by the WHO Laboratory Biosafety Manual and WHO guidance on dual-use research of concern. **The check was introduced after a conversation with Dr. Alessandro Blasimme**, who teaches ethics of life science, about how to protect a released tool against future misuse.',
            zh: '因為*「那個幫助某人建出條件式生物感測器的排序，同樣會幫助某人把一個毒素切開」*，所以對 CDC 與 USDA 的管制病原，處理會在**兩個層級**被拒絕：一是**在任何請求離開瀏覽器之前就用 PDB 編號攔下**，讓下載根本不會發生；二是**在檔案載入後依名稱攔下，讀取結構自身的標題紀錄**——而這道檢查才抓得到從硬碟拖進來的檔案，那是編號檢查看不到的。清單來自聯邦管制病原計畫（42 CFR 73.3、9 CFR 121.3），框架則是 WHO 實驗室生物安全手冊與 WHO 關於兩用研究的指引。**這道檢查是在與教授生命科學倫理的 Alessandro Blasimme 博士談過之後才加上的**，談的主題是如何保護一個已釋出的工具不被未來誤用。'
          }) +
          h.note({
            en: '**Reproducibility furniture most iGEM software does not have:** CITATION.cff 1.2.0 + CodeMeta 2.0 + BibTeX + RIS all generated from one record; GPL-3.0-only with its SPDX identifier; a `dependencies.lock.json` naming the one vendored library\'s version, licence and **sha256**, with `make verify` to check your copy against it; a console control that **prints every recorded research number checked against its sha256**; CSV, TSV and JSON exports with identical columns; and one entry point (`rankStructure`) shared by the page, the CLI and any caller, so all three produce the same ranking. They also answer the SBOL question explicitly and explain why it does not apply to a tool that reads a structure and writes split sites.',
            zh: '**大多數 iGEM 軟體沒有的那些可重現性配件：**CITATION.cff 1.2.0＋CodeMeta 2.0＋BibTeX＋RIS 全部由同一筆記錄生成；GPL-3.0-only 並附 SPDX 識別碼；一個 `dependencies.lock.json` 列出唯一內嵌函式庫的版本、授權與 **sha256**，並用 `make verify` 檢查你手上的副本；一個主控台指令會**把每一個記錄下來的研究數字都對照其 sha256 印出來檢查**；CSV、TSV、JSON 匯出使用完全相同的欄位；以及一個由網頁、CLI 與任何呼叫者共用的入口（`rankStructure`），所以三者產出的排序一致。他們也明確回答了 SBOL 的問題，並解釋為什麼它不適用於一個「讀結構、輸出切點」的工具。'
          }) +
          h.h3({ en: 'A published AI-use disclosure', zh: '一份公開的 AI 使用聲明' }) +
          h.kv([
            [{ en: 'Model', zh: '模型' }, { en: 'Claude Opus (Anthropic), through Claude Code, during 2026, with access provided to iGEM participants.', zh: 'Claude Opus（Anthropic），經由 Claude Code，於 2026 年使用，並由 Anthropic 提供給 iGEM 參賽者。' }],
            [{ en: 'What it wrote', zh: '它寫了什麼' }, { en: 'The browser application and its test suites, the command line, audits for accessibility, security and terminology, the build and CI configuration, and prior-art searching **"carried out by reading the primary papers rather than summarizing abstracts"**.', zh: '瀏覽器應用程式與其測試套件、命令列工具、無障礙／安全／術語的稽核、建置與持續整合設定，以及先前技術的檢索，**「以閱讀原始論文的方式進行，而不是摘要摘要」**。' }],
            [{ en: 'What it did not do', zh: '它沒做什麼' }, { en: '**"No scientific claim, measured value, figure or citation here was produced by a model."** Every number was computed by the software or by the benchmark behind it, and the figures are drawn from the same tables the screens read, "so a figure cannot drift from the text".', zh: '**「本頁沒有任何科學主張、量測值、圖表或引用是由模型產生的。」**每個數字都是由軟體或其背後的基準測試計算出來的，而圖是從畫面讀取的同一批表格繪製的，「所以圖不可能與文字脫節」。' }],
            [{ en: 'How it was evaluated', zh: '如何被評估' }, { en: '**"Every check the model wrote was read by a team member and then run. Mistakes were caught that way, which is the reason the review exists."**', zh: '**「模型寫的每一個檢查都由一位團隊成員讀過、然後執行。錯誤就是這樣被抓到的，而這也是這道審查存在的理由。」**' }]
          ]) +
          h.p({
            en: 'Their bibliography also records the **licence of each external data source and what it requires**, including where they do not comply: *"their terms ask for a direct versioned URL beside specific data; we give no versioned URL."*',
            zh: '他們的參考書目還記錄了**每一個外部資料來源的授權條款以及它要求什麼**——連自己沒有遵守的地方也寫了出來：*「他們的條款要求在特定資料旁附上帶版本的直接網址；我們沒有提供帶版本的網址。」*'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'e-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Eight things that did not go to plan', zh: '八件不如計畫的事' },
        body:
          h.ul([
            { en: 'One dual-plasmid transformation **failed three times** by TSS. Fixed by changing method, not by repeating it.', zh: '有一次雙質體轉形以 TSS **失敗三次**——靠換方法解決，而不是靠重複。' },
            { en: '**MG1655 as the expression host:** no T7 polymerase, so the pET constructs could never transcribe. Caught before induction, while writing the protocol.', zh: '**用 MG1655 當表達宿主：**沒有 T7 聚合酶，所以 pET 構建體永遠轉錄不出來。在誘導前、寫流程時抓到。' },
            { en: '**Periplasmic binder extraction:** consistently lower yield than sonication; not all binders were properly characterised, for time.', zh: '**周質萃取結合蛋白：**產量一致低於超音波破菌；而且因為時間，並非所有結合蛋白都被好好特性化。' },
            { en: '**Fractions not saved** on the first purification run, so the highest-yielding preparation could never be imaged by TEM.', zh: '第一次純化時**沒有把所有分液保存下來**，所以產率最高的那一批永遠無法用電子顯微鏡成像。' },
            { en: '**The retargeting result:** duplicate discarded as an irregular acquisition, so the difference is not statistically significant, and the conclusion is hedged to match.', zh: '**改導向的結果：**重複樣品因取樣異常而被丟棄，所以差異在統計上不顯著，而結論也相應地留了餘地。' },
            { en: '**PVCs in acid:** structural collapse, which closes off oral administration, reported as preliminary.', zh: '**PVC 在酸中：**結構崩解，這就排除了口服給藥——並標註為初步結果。' },
            { en: '**deCISion:** no wet-lab validation at all, and they say so rather than letting the databases stand in for it.', zh: '**deCISion：**完全沒有濕式實驗驗證，而他們把這點說出來，而不是讓資料庫代替它。' },
            { en: '**OpenSplitProtein:** the new packing-density rule **cannot be shown to beat the old contact count**; no split construct was ever built; and ultracentrifugation purification is named as something that will not scale to manufacture.', zh: '**OpenSplitProtein：**新的堆積密度規則**無法被證明勝過舊的接觸計數**；從未做出任何切開的構建體；而超高速離心純化被明確指為「無法放大到製造規模」的一項。' }
          ]) +
          h.note({
            en: 'Their Outlook also names what therapeutic use would require before any of this matters: **reproducible and scalable manufacturing** (ultracentrifugation will not do); **immunogenicity on repeated dosing**, where a start-up\'s claim that repeat administration does not elicit an unfavourable response is explicitly flagged as **requiring independent validation**; and **biodistribution**, where a suggestion that bacteriophage models could predict PVC distribution is recorded as a hypothesis to test rather than a result.',
            zh: '他們的 Outlook 也指名了在上述這些有意義之前，治療應用需要先解決什麼：**可重現且可放大的製造**（超高速離心不行）；**重複給藥的免疫原性**，其中一家新創聲稱重複施用不會引發不良免疫反應，而這點被明確標為**需要獨立驗證**；以及**體內分布**，其中「噬菌體模型或可預測 PVC 分布」的建議被記錄為一個待檢驗的假設，而不是一個結果。'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'e-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from ETH-Zurich', zh: '我們會從 ETH-Zurich 抄什麼' },
        body:
          h.ul([
            { en: '**Write the protocol before the first run.** It is what found the missing T7 polymerase, and it cost nothing but an afternoon.', zh: '**在第一次執行之前先把流程寫出來。**正是這件事抓到了缺失的 T7 聚合酶，而代價只是一個下午。' },
            { en: '**Practise on the harmless construct you need anyway.** PVC-00 was both the trial run and the endotoxin negative control.', zh: '**在你反正也需要的那個無害構建體上練習。**PVC-00 既是試跑，也是內毒素陰性對照。' },
            { en: '**State your deviations from a published protocol, with the reason.** Double the volume because of expected losses; no protease inhibitor because the target resists proteases.', zh: '**寫出你對已發表流程做了哪些偏離，並附上理由。**體積加倍是因為預期有損失；不加蛋白酶抑制劑是因為標靶本來就耐蛋白酶。' },
            { en: '**Let the plasmid pair be the selection.** A KanR structural plasmid and an AmpR regulatory one mean the double plate *is* the screen.', zh: '**讓質體配對本身成為篩選。**結構型帶 KanR、調控型帶 AmpR，於是雙抗盤*就是*篩選。' },
            { en: '**Validate a reporter line twice, by different means**, before trusting it as an assay. Antibody stain for folded surface protein, transient Cre for the switch.', zh: '**在把一株報告細胞當成試驗工具之前，用兩種不同方法各驗證一次。**用抗體染色驗證表面蛋白有正確折疊，用瞬時 Cre 驗證開關會切換。' },
            { en: '**Report your headline result as not significant when it is not.** They discarded a bad replicate that would have helped them, and said what that cost.', zh: '**當你的招牌結果不顯著時，就把它報告為不顯著。**他們丟掉了一個對自己有利的壞重複，並說出這讓他們付出什麼。' },
            { en: '**Keep two scores apart instead of averaging them into one.** Split tolerance and reassembly are different questions, and refusing to blend them is what makes the ranking interpretable.', zh: '**把兩個分數分開，而不是平均成一個。**切點耐受度與再組裝是兩個不同的問題，而拒絕把它們混在一起，正是讓排序可被解讀的原因。' },
            { en: '**Benchmark with a resolvability test, not a leaderboard.** 2,000 re-draws, and margins that span zero are reported as unresolvable even when the ranking flatters you.', zh: '**用可解析性檢定做基準測試，而不是做排行榜。**2,000 次重抽，而跨越零的差距一律報告為無法解析——即使排名對你有利。' },
            { en: '**Publish the comparison that makes you look worse** if it is the true one. ThermoMPNN-I beating them on their own calibration label is the most useful line on the page.', zh: '**如果那是真的，就公開那個讓你看起來更差的比較。**ThermoMPNN-I 在他們自己的校準標籤上贏過他們，這是整頁最有用的一行。' },
            { en: '**Put the biosafety check inside the tool, twice, at the layer that can see each input.** Identifier before the request, title records after the file loads.', zh: '**把生物安全檢查放進工具裡，而且放兩道，各放在看得到那種輸入的層級。**請求之前用編號攔，檔案載入之後讀標題紀錄攔。' },
            { en: '**Hash the numbers.** A console button that re-checks every research number against its sha256 is cheaper than trust.', zh: '**為數字做雜湊。**一個把每個研究數字都對照 sha256 重新檢查的主控台按鈕，比「信任」便宜得多。' },
            { en: '**Name the experiment your tool has not had.** "We have neither the time nor the scale to run these tests" is a better sentence than any validation section built out of database citations.', zh: '**指名你的工具還沒做過的那個實驗。**「我們既沒有時間也沒有規模去跑這些測試」這句話，比任何用資料庫引用堆出來的驗證章節都更好。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that reporting the headline result as not significant is the most consequential editorial decision on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/eth-zurich](https://2026.igem.wiki/eth-zurich/).',
            zh: '標示為我們的看法：上面十二點，以及「把招牌結果報告為不顯著，是這個 wiki 上最有後果的一個編輯決定」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/eth-zurich](https://2026.igem.wiki/eth-zurich/)。'
          })
      });

      return out;
    }
  };
})(window);
