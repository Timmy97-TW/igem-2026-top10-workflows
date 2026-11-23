/* Idea 1 — NULLSET. A collection of negative controls whose residual activity is reported
   against a measured floor. Ours; never run.
   Literature figures are cited inline with their PubMed IDs; Registry counts were read from
   api.registry.igem.org and the iGEM prior art from a crawl of 2,012 team wikis.
   Sources in notes/2027-idea-sources.md */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var SWIM = {
    wet: [
      { l: { en: 'Build the assay on commercial enzyme first', zh: '先用市售酵素把試驗建好' },
        s: { en: 'Blank, wild type and a dilution series, three days, two operators. The floor before any variant exists', zh: '空白、野生型與一組稀釋系列，三天、兩位操作者。地板在任何變異體存在之前' }, tone: 'g' },
      { l: { en: 'Order the variants as synthetic DNA', zh: '把變異體當成合成 DNA 訂下去' },
        s: { en: 'A ladder of three on one enzyme, plus one variant each on four others, inside the sponsor allowance', zh: '同一個酵素上三階一組，另外四個酵素各一個變異體，裝進贊助商額度內' } },
      { l: { en: 'Express without cloning', zh: '不選殖就表達' },
        s: { en: 'Linear PCR product straight into cell-free extract with nuclease protection; no transformation, no plasmid', zh: '線性 PCR 產物直接加進無細胞萃取液並加核酸酶保護；不轉形、不用質體' } },
      { l: { en: 'Measure activity and protein in the same well', zh: '在同一個孔裡同時量活性與蛋白' },
        s: { en: 'A variant with no signal because there is no protein is not a control, and this is how you tell', zh: '一個「因為沒有蛋白而沒有訊號」的變異體不是對照，而這就是你分辨的方法' }, tone: 'g' },
      { l: { en: 'Run the artefact test on the deadest one', zh: '對最死的那一個做假象測試' },
        s: { en: 'Spike wild type in at known trace levels and see whether it reproduces your residual', zh: '把野生型以已知的微量加進去，看它會不會重現出你的殘餘活性' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Pick substitutions from measured literature', zh: '從有實測數據的文獻挑置換' },
        s: { en: 'Only positions with a published fold-loss and, where possible, a published structure of the variant', zh: '只挑那些有已發表倍數損失、而且盡可能有該變異體結構的位置' }, tone: 'v' },
      { l: { en: 'Check the numbering twice', zh: '把編號查兩次' },
        s: { en: 'Literature and database numbering differ for most of these; a primer off the wrong coordinate hits the wrong codon', zh: '多數情況下文獻與資料庫編號不同；用錯座標設計的引子會打到錯的密碼子' }, tone: 'v' },
      { l: { en: 'Compute the contamination ceiling', zh: '算出污染上限' },
        s: { en: 'For each target fold-loss, the trace wild type that would account for the whole residual', zh: '對每一個目標倍數損失，算出「足以解釋整個殘餘活性」的微量野生型' }, tone: 'v' },
      { l: { en: 'One-sided bound per variant', zh: '每個變異體一個單側界限' },
        s: { en: 'Report an upper bound, never a point estimate, and never the word zero', zh: '報告一個上界，絕不用點估計，也絕不用「零」這個字' }, tone: 'v' },
      { l: { en: 'Ship the floor calculator', zh: '釋出地板計算器' },
        s: { en: 'Blank readings in, limit of blank and contamination ceiling out. Usable by any team on day one', zh: '輸入空白讀值，輸出空白極限與污染上限。任何隊伍第一天就能用' }, tone: 'v' }
    ],
    links: [
      { w: 0, d: 2, l: { en: 'the floor sets the ceiling', zh: '地板決定上限' }, up: false },
      { w: 1, d: 0, l: { en: 'the literature chose the variants', zh: '文獻挑出了那些變異體' }, up: true }
    ]
  };

  PD.pages['x-control'] = {
    label: { en: 'Idea 1 · NULLSET', zh: '題目一 · NULLSET' },
    title: { en: 'NULLSET — the negative control as the product', zh: 'NULLSET——把負面對照做成產品' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Idea 1 of 5 · our proposal, never run · Foundational Advance',
          zh: '五個題目中的第一個 · 我們的提案，從未執行 · 基礎推進'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Everyone in the section ran a control. ==Nobody can tell you how dead theirs was.==',
          zh: '這個組別的每一個人都跑了對照。==但沒有人能告訴你他們的對照「死得多徹底」。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'In 1992 a laboratory reported three active-site mutants of an amylase at **more than 15,000-fold** reduced activity, then put the preparations over an affinity column and found that **the entire residual was contaminating wild-type enzyme**. In 2014 another group showed that **0.093 mol %** of a wild-type contaminant inflated a dead mutant\'s apparent catalytic efficiency **46-fold** — and reproduced the artefact on purpose by spiking a clean batch. Two more labs, independently, explained their own dead mutants\' residual activity as trace wild type made by translational misreads. **So the number that decides whether a negative control is a negative control is not the fold-loss. It is the floor** — how little activity your assay can honestly distinguish from none, and how little wild-type carryover it takes to fake it. We could not find a single paper that reports a dead variant\'s residual activity **together with** that floor, and across 2,012 iGEM wikis nobody has either. This idea is to measure it.',
          zh: '1992 年，有一間實驗室報告了一個澱粉酶的三個活性位點突變體，活性降低**超過 15,000 倍**；他們接著把那些製備過一次親和管柱，發現**整個殘餘活性都是被污染進去的野生型酵素**。2014 年，另一組人證明 **0.093 mol%** 的野生型污染，就足以讓一個失活突變體的表觀催化效率被高估 **46 倍**——而且他們刻意把乾淨的批次加標，重現了這個假象。另外還有兩間實驗室各自獨立地把自己失活突變體的殘餘活性解釋為「轉譯誤讀所產生的微量野生型」。**所以，決定一個負面對照到底算不算負面對照的那個數字，不是倍數損失，而是地板**——你的試驗能誠實地把「多小的活性」與「沒有活性」區分開來，以及多少野生型殘留就足以偽造它。我們找不到任何一篇論文把一個失活變異體的殘餘活性**連同**那個地板一起報告，而在 2,012 個 iGEM wiki 裡也沒有人做過。這個題目就是去量它。'
        }) + '</p>' +
        h.stats([
          { v: '0', l: { en: 'Sources we found that report a dead variant\'s residual and the assay floor together', zh: '我們找到「同時報告失活殘餘活性與試驗地板」的來源數' } },
          { v: '46×', l: { en: 'Overestimate caused by 0.093 mol % wild-type contamination in one published case', zh: '某個已發表案例中，0.093 mol% 野生型污染造成的高估倍數' } },
          { v: '1 ppm', l: { en: 'Wild-type carryover that would account for a 10⁶-fold-dead variant\'s whole residual', zh: '足以解釋一個「死了 10⁶ 倍」變異體全部殘餘活性的野生型殘留量' } },
          { v: '3', l: { en: 'Numbers we would publish per variant, not one', zh: '我們每個變異體會公開的數字個數，不是一個' } },
          { v: '0', l: { en: 'Of these experiments we have run. This is a plan', zh: '這些實驗我們做過幾個。這是一份計畫' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'nl-why', t: { en: 'Why it is a project', zh: '為什麼這是個專案' } },
        { id: 'nl-floor', t: { en: 'The floor is the subject', zh: '地板就是題目' } },
        { id: 'nl-var', t: { en: 'Which variants, and why', zh: '選哪些變異體，為什麼' } },
        { id: 'nl-prior', t: { en: 'Who got closest', zh: '誰最接近' } },
        { id: 'nl-what', t: { en: 'What you deliver', zh: '你交付什麼' } },
        { id: 'nl-gate', t: { en: 'The five gates', zh: '五道關卡' } },
        { id: 'nl-flow', t: { en: 'The workflow', zh: '工作流程' } },
        { id: 'nl-tool', t: { en: 'Tools and money', zh: '工具與錢' } },
        { id: 'nl-plan', t: { en: 'The schedule', zh: '行程' } },
        { id: 'nl-risk', t: { en: 'What kills it', zh: '什麼會殺死它' } },
        { id: 'nl-ship', t: { en: 'What it ships', zh: '它交付什麼出去' } }
      ]);

      /* ---------------- why ---------------- */
      out += h.sec({
        id: 'nl-why',
        kick: { en: 'The argument', zh: '論證' },
        h2: { en: 'An empty vector is not a control for a protein you expressed', zh: '空載體不是「你表達的某個蛋白」的對照' },
        lede: {
          en: 'Two separate arguments make this a project rather than a reagent order. The first is about what a control has to hold constant. The second is about what "no activity" can possibly mean.',
          zh: '有兩個獨立的論證讓這件事成為一個專案、而不是一張試劑訂單。第一個關於「一個對照必須固定住什麼」。第二個關於「沒有活性」這句話到底可能是什麼意思。'
        },
        body:
          h.p({
            en: 'When you compare a strain carrying your enzyme against a strain carrying an empty vector, the two differ in **more than one thing**: the enzyme, but also how much protein the ribosomes were making, the metabolic load of that synthesis, the plasmid size and often the copy number. Any of those can move an absorbance reading or a growth rate. The comparison you want holds the **expression** constant and changes only the **function**, and that is what a point mutation at the active site gives you — the same transcript, the same protein mass, the same burden, and nothing happening.',
            zh: '當你把「帶有你的酵素」的菌株和「帶空載體」的菌株相比，兩者相差的**不只一件事**：酵素不同，但核糖體製造了多少蛋白、那次合成的代謝負擔、質體大小、常常還有複製數，也都不同。這些當中任何一項都能移動一個吸光讀值或一個生長速率。你想要的那個比較，是把**表達量**固定住、只改變**功能**——而那正是活性位點上的一個點突變所給你的：同樣的轉錄本、同樣的蛋白質量、同樣的負擔，而什麼事都沒發生。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'the trap in our own first draft', zh: '我們自己初稿裡的陷阱' }, k: 'r' }],
              h: { en: 'A dark variant can be dark because the protein is not there', zh: '一個「暗」的變異體，可能是因為蛋白不在那裡' },
              p: { en: 'We first proposed killing GFP\'s chromophore. The literature says our substitutions were wrong twice over. **Y66H is bright blue, Y66W is cyan, T203Y is yellow and S65T is EGFP** — those are colour shifts, not kills. And **G67A is the wrong kind of control**: Gly substitutions there "substantially diminish the amount of GFP protein" ([PMID 15894286](https://pubmed.ncbi.nlm.nih.gov/15894286/)), so no signal confounds with no protein — exactly the failure this project exists to avoid. The published colourless control is **Y66L**; **R96M** and **S205A** kill the chromophore while leaving the protein intact.', zh: '我們最初提議要殺掉 GFP 的發色團。文獻說我們挑的置換錯了兩層。**Y66H 是亮藍色、Y66W 是青色、T203Y 是黃色、S65T 就是 EGFP**——那些是顏色位移，不是殺死。而 **G67A 是錯的那一種對照**：那個位置的甘胺酸置換會「大幅減少 GFP 蛋白的量」（[PMID 15894286](https://pubmed.ncbi.nlm.nih.gov/15894286/)），於是「沒有訊號」與「沒有蛋白」混在一起——正是這個專案存在要避開的那個失敗。已發表的無色對照是 **Y66L**；而 **R96M** 與 **S205A** 會殺掉發色團、同時讓蛋白保持完整。' },
              foot: { en: 'We left this mistake on the page because it is the clearest possible illustration of the argument above.', zh: '我們把這個錯誤留在頁面上，因為它是上面那個論證最清楚的示範。' } },
            { chips: [{ t: { en: 'the discipline', zh: '那個紀律' }, k: 'b' }],
              h: { en: 'You cannot measure zero, so measure the floor', zh: '你量不到零，所以去量地板' },
              p: { en: 'The literature has four ways of saying a variant is dead, in ascending order of honesty: "no detectable activity" with no floor stated; a fold-loss against wild type; a fold-loss against the **uncatalysed** rate; and an explicit inequality with a stated bound — *"the upper limit for k_cat/K_M is ≤ 0.008 M⁻¹s⁻¹"* ([PMID 23909928](https://pubmed.ncbi.nlm.nih.gov/23909928/)). Only the fourth is reusable by somebody else, and it is the minority convention.', zh: '文獻裡有四種說「某個變異體失活了」的方式，誠實度由低到高：沒有說明地板的「未偵測到活性」；相對野生型的倍數損失；相對**未催化**速率的倍數損失；以及一個帶有明確界限的不等式——*「k_cat/K_M 的上限為 ≤ 0.008 M⁻¹s⁻¹」*（[PMID 23909928](https://pubmed.ncbi.nlm.nih.gov/23909928/)）。只有第四種是別人可以重用的，而它是少數派的寫法。' },
              foot: { en: 'A measured zero is a statement about the assay, not about the enzyme.', zh: '一個量到的零，是關於那個試驗的陳述，不是關於那個酵素的陳述。' } },
            { chips: [{ t: { en: 'why nobody has', zh: '為什麼沒人做過' }, k: 'g' }],
              h: { en: 'Controls get made once and never reused', zh: '對照被做出來一次，之後再也沒人用' },
              p: { en: 'A Registry search returns **195** parts mentioning "negative control", **74** mentioning catalytically dead or inactive, and **43** mentioning "scrambled" — so teams clearly build them. The usage counts are the finding: almost all sit between **0 and 3**. And the dead parts that *are* reused are not controls at all — "catalytically dead" in iGEM almost always means a **dCas tool**. No part in the Registry carries a residual-activity figure.', zh: '在 Registry 搜尋會得到 **195** 個提到「negative control」的元件、**74** 個提到催化失活、**43** 個提到「scrambled」——所以隊伍顯然都在做它們。使用次數才是發現：幾乎全部落在 **0 到 3** 之間。而那些真的被重用的「失活」元件根本不是對照——在 iGEM 裡，「催化失活」幾乎總是指一個 **dCas 工具**。Registry 裡沒有任何一個元件附上殘餘活性的數值。' },
              foot: { en: 'Counted from api.registry.igem.org, 23 Nov 2026.', zh: '自 api.registry.igem.org 統計，2026 年 11 月 23 日。' } }
          ])
      });

      /* ---------------- the floor ---------------- */
      out += h.sec({
        id: 'nl-floor',
        kick: { en: 'The real subject', zh: '真正的題目' },
        h2: { en: 'The floor is set by contamination, not by chemistry — and that is the measurement', zh: '地板是由污染決定的，不是由化學決定的——而那正是那個量測' },
        lede: {
          en: 'This is the section that turns a reagent catalogue into a Foundational Advance project. Read the three cases, then read the arithmetic, which is the thing your project would publish.',
          zh: '正是這一節把一份試劑目錄變成一個「基礎推進」專案。先讀那三個案例，再讀那段算術——那段算術就是你的專案要公開的東西。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'The case', zh: '案例' }, w: '22%' },
              { t: { en: 'What happened', zh: '發生了什麼' } },
              { t: { en: 'Source', zh: '出處' }, w: '18%' }
            ],
            rows: [
              [{ en: '**The whole residual was carryover**', zh: '**整個殘餘活性都是殘留' + '**' },
               { en: 'Three active-site mutants of *B. subtilis* α-amylase measured **more than 15,000-fold** down. Gel electrophoresis suggested the residual "derived from the wild-type enzyme contaminating the mutant preparations, which could be removed by use of an acarbose affinity column; thus, these mutants are completely devoid of activity."', zh: '*B. subtilis* α-澱粉酶的三個活性位點突變體，測得活性降低**超過 15,000 倍**。膠體電泳顯示那些殘餘活性「來自污染在突變體製備中的野生型酵素，而它可以用阿卡波糖親和管柱移除；因此這些突變體完全沒有活性。」' },
               { en: '[PMID 1576155](https://pubmed.ncbi.nlm.nih.gov/1576155/)', zh: '[PMID 1576155](https://pubmed.ncbi.nlm.nih.gov/1576155/)' }],
              [{ en: '**The artefact, quantified and deliberately reproduced**', zh: '**那個假象，被量化並刻意重現' + '**' },
               { en: 'A yeast double mutant with a true catalytic efficiency of 13 M⁻¹s⁻¹ was contaminated with **0.093 mol %** wild-type enzyme from another organism, inflating the apparent value to about 600 — a **46-fold** overestimate, with "more than 95 % of the activity… actually due to contaminating" enzyme. The authors then **spiked a clean batch with 0.015 mol % and reproduced it.** Diagnostic signature: a timecourse that is not first-order at the start.', zh: '一個真實催化效率為 13 M⁻¹s⁻¹ 的酵母雙突變體，被 **0.093 mol%** 來自另一個生物的野生型酵素污染，使表觀值被抬高到約 600——**高估 46 倍**，而且「超過 95% 的活性……實際上來自污染的」酵素。作者接著**把乾淨的批次加標 0.015 mol%，重現了這個現象。**診斷特徵是：時間曲線在起始處不呈一階。' },
               { en: '[PMID 24393696](https://pubmed.ncbi.nlm.nih.gov/24393696/)', zh: '[PMID 24393696](https://pubmed.ncbi.nlm.nih.gov/24393696/)' }],
              [{ en: '**Two labs reached for the same explanation**', zh: '**兩間實驗室想到同一個解釋' + '**' },
               { en: 'β-galactosidase E537Q and E537V measure **160,000 to 300,000-fold** down, and the authors concluded the residual "was probably due to the presence of a few wild-type enzyme molecules (formed from misreads)" and that the variants "appear to be totally inactive". A β-lactamase group attributed their S70A residual to "mistranslation that leads to production of wild-type enzyme".', zh: 'β-半乳糖苷酶的 E537Q 與 E537V 測得活性降低 **160,000 到 300,000 倍**，而作者的結論是殘餘活性「很可能來自少數幾個野生型酵素分子（由誤讀產生）」，並認為這些變異體「看起來完全沒有活性」。另一個 β-內醯胺酶研究群，則把他們 S70A 的殘餘活性歸因於「導致產生野生型酵素的轉譯錯誤」。' },
               { en: '[PMID 7909660](https://pubmed.ncbi.nlm.nih.gov/7909660/) · [PMID 8823158](https://pubmed.ncbi.nlm.nih.gov/8823158/)', zh: '[PMID 7909660](https://pubmed.ncbi.nlm.nih.gov/7909660/) · [PMID 8823158](https://pubmed.ncbi.nlm.nih.gov/8823158/)' }],
              [{ en: '**Fold-loss is a property of the substrate, not the protein**', zh: '**倍數損失是底物的性質，不是蛋白的性質' + '**' },
               { en: 'The *same* β-galactosidase variant, E461G, scores **more than 500,000-fold** down on one substrate and only **1,300-fold** down on another — and on the first substrate the residual was "due entirely to a wild type enzyme contaminant". A peroxidase variant scores **3,000-fold** down on one electron donor and **4.6-fold** on another. Same protein, same mutation.', zh: '**同一個** β-半乳糖苷酶變異體 E461G，在一種底物上測得降低**超過 500,000 倍**，在另一種底物上只降低 **1,300 倍**——而在第一種底物上，那個殘餘活性「完全來自一個野生型酵素污染物」。另一個過氧化物酶變異體，對某個電子供體降低 **3,000 倍**，對另一個只降低 **4.6 倍**。同一個蛋白、同一個突變。' },
               { en: '[PMID 8823173](https://pubmed.ncbi.nlm.nih.gov/8823173/) · [PMID 2851317](https://pubmed.ncbi.nlm.nih.gov/2851317/)', zh: '[PMID 8823173](https://pubmed.ncbi.nlm.nih.gov/8823173/) · [PMID 2851317](https://pubmed.ncbi.nlm.nih.gov/2851317/)' }]
            ],
            min: 1000,
            source: { en: 'Each row is the cited paper\'s own finding and wording, retrieved from PubMed. We have read each only as far as the quoted sentence; verify before building on them.', zh: '每一列都是所引論文自己的發現與用語，取自 PubMed。我們對每一篇的閱讀只到被引用的那句話為止；在以它們為基礎之前請先確認。' }
          }) +
          h.take({ en: 'The arithmetic that is the deliverable', zh: '那段算術就是交付物' }, {
            en: 'The 2014 paper gives a usable relation between an observed residual, the true mutant activity and the wild-type fraction. Run it backwards and you get the number nobody publishes: **for a variant that is genuinely 10⁶-fold dead, wild-type carryover must stay below roughly 1 part per million for the contaminant to contribute less than the mutant itself. For 10⁵-fold, about 10 ppm.** That is far stricter than any routine purity specification — which means **a residual activity reported without a contamination ceiling beside it is uninterpretable.** Publishing that ceiling for every variant in the collection is the contribution, and it is arithmetic plus one spiking experiment, not a new technique.',
            zh: '2014 年那篇論文給出了「觀測殘餘活性、真實突變體活性、野生型比例」之間一個可用的關係式。把它倒過來算，你就得到那個沒有人公開的數字：**對一個真的死了 10⁶ 倍的變異體來說，野生型殘留必須低於大約百萬分之一，污染的貢獻才會小於突變體本身。若是 10⁵ 倍，大約是百萬分之十。**那遠比任何常規純度規格都嚴格——也就是說，**一個旁邊沒有污染上限的殘餘活性數值，是無法被解讀的。**為集合裡每一個變異體公開那個上限，就是這個專案的貢獻；而它是一段算術加上一次加標實驗，不是一項新技術。'
          }) +
          h.note({
            en: 'There is a second, cheaper way to prove the residual belongs to your protein, and the literature treats it as the gold standard: **add a stoichiometric inhibitor that binds the active site, and show the residual disappears.** One subtilisin study abolished its variants\' residual completely with a protein inhibitor; another group removed theirs on an affinity column. Either turns "we measured 10⁻⁶" into "10⁻⁶ belongs to this protein", and without one a reviewer\'s first question has no answer. A third option is **chemical rescue**: if adding a small molecule restores activity, the site is intact and accessible, which is itself evidence the protein folded.',
            zh: '還有第二種、更便宜的方式去證明那個殘餘活性屬於你的蛋白，而文獻把它當成黃金標準：**加入一個會結合活性位點的化學計量抑制劑，並顯示殘餘活性消失。**有一份枯草桿菌蛋白酶的研究用一個蛋白質抑制劑完全消除了變異體的殘餘活性；另一組人則用親和管柱把自己的殘餘活性移除。兩者都能把「我們量到 10⁻⁶」變成「這個 10⁻⁶ 屬於這個蛋白」；而少了其中一個，評審的第一個問題就沒有答案。第三個選項是**化學救援**：如果加入一個小分子能恢復活性，那就代表活性位點完整且可接近，而那本身就是蛋白摺疊正確的證據。'
          })
      });

      /* ---------------- variants ---------------- */
      out += h.sec({
        id: 'nl-var',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'Which variants to build, with the published number each one has to beat', zh: '該做哪些變異體，以及每一個必須超越的已發表數字' },
        lede: {
          en: 'Every entry below has a measured fold-loss in the literature, so your result is comparable rather than isolated. Two of them are deliberately chosen because the number does not exist yet.',
          zh: '下面每一項在文獻中都有實測的倍數損失，所以你的結果會是「可比較的」而不是孤立的。其中有兩項是刻意挑的，因為那個數字還不存在。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Target and substitution', zh: '標的與置換' }, w: '22%' },
              { t: { en: 'Published fold-loss, and why this one', zh: '已發表的倍數損失，以及為什麼選它' } },
              { t: { en: 'Readout', zh: '讀值' }, w: '17%' },
              { t: { en: 'Source', zh: '出處' }, w: '13%' }
            ],
            rows: [
              [{ en: '**Alkaline phosphatase** S102G, S102A, S102C', zh: '**鹼性磷酸酶** S102G、S102A、S102C' },
               { en: '**6×10⁵, 10⁵ and 10⁴-fold** down in catalytic efficiency — a **three-point ladder in one enzyme**, which is exactly what a detection-floor study wants, and all three were crystallised showing "little departure from the wild-type model", so the folding control is already published. Numbering trap: the literature\'s Ser102 is residue **124** in the database entry.', zh: '催化效率分別降低 **6×10⁵、10⁵ 與 10⁴ 倍**——這是**同一個酵素裡的三階梯**，正是一份偵測地板研究所需要的；而且三個都做過晶體，顯示「與野生型模型差異甚小」，所以摺疊對照已經是公開的了。編號陷阱：文獻裡的 Ser102 在資料庫條目中是第 **124** 號殘基。' },
               { en: 'pNPP → absorbance at 405 nm. No measurable spontaneous hydrolysis for the alkyl ester, so the floor is your blank and your contamination, not chemistry.', zh: 'pNPP → 405 nm 吸光。烷基酯沒有可量測的自發水解，所以地板是你的空白與你的污染，不是化學。' },
               { en: '[PMID 9533886](https://pubmed.ncbi.nlm.nih.gov/9533886/)', zh: '[PMID 9533886](https://pubmed.ncbi.nlm.nih.gov/9533886/)' }],
              [{ en: '**β-galactosidase** E537Q', zh: '**β-半乳糖苷酶** E537Q' },
               { en: '**160,000 to 300,000-fold** down, and the paper that reports it is the best precedent for this whole project — the authors hit their floor and said so. **Use E537Q, not E537D**, which is only about 100-fold down. **Avoid every E461 variant**: E461H keeps about 10 % of activity, and E461 mutants are chemically resurrected by imidazole, azide and 2-mercaptoethanol — and imidazole is standard His-tag elution buffer.', zh: '降低 **160,000 到 300,000 倍**，而報告它的那篇論文是整個專案最好的前例——作者碰到了自己的地板，而且把這件事說出來。**用 E537Q，不要用 E537D**，後者只降低約 100 倍。**避開所有 E461 變異體**：E461H 保留約 10% 活性，而 E461 突變體會被咪唑、疊氮化物與 2-巰基乙醇化學性地復活——而咪唑正是標準的 His 標籤沖提緩衝液成分。' },
               { en: 'ONPG → 420 nm; CPRG gives roughly tenfold more sensitivity. Needs a host or lysate with the native gene deleted.', zh: 'ONPG → 420 nm；CPRG 的靈敏度大約高十倍。需要原生基因已被刪除的宿主或萃取液。' },
               { en: '[PMID 7909660](https://pubmed.ncbi.nlm.nih.gov/7909660/)', zh: '[PMID 7909660](https://pubmed.ncbi.nlm.nih.gov/7909660/)' }],
              [{ en: '**A fluorescent protein**, Y66L or S205A', zh: '**一個螢光蛋白**，Y66L 或 S205A' },
               { en: 'The published colourless control is **Y66L**; **R96M** and **S205A** kill the chromophore while leaving the protein intact. **Do not use G67A** — it reduces the amount of protein, so no signal confounds with no protein. Dark variants are also buyable off the shelf, which makes this the cheapest honest entry in the collection.', zh: '已發表的無色對照是 **Y66L**；**R96M** 與 **S205A** 會殺掉發色團但讓蛋白保持完整。**不要用 G67A**——它會減少蛋白的量，於是「沒有訊號」與「沒有蛋白」混在一起。暗色變異體也可以直接買到現成的，這讓它成為整個集合裡最便宜而誠實的一項。' },
               { en: 'Fluorescence, and absorbance at the chromophore band in the same well as a protein check.', zh: '螢光，以及在同一個孔裡量發色團吸收帶的吸光作為蛋白檢查。' },
               { en: '[PMID 26469148](https://pubmed.ncbi.nlm.nih.gov/26469148/) · [PMID 15894286](https://pubmed.ncbi.nlm.nih.gov/15894286/)', zh: '[PMID 26469148](https://pubmed.ncbi.nlm.nih.gov/26469148/) · [PMID 15894286](https://pubmed.ncbi.nlm.nih.gov/15894286/)' }],
              [{ en: '**A serine hydrolase**, both the serine *and* the histidine', zh: '**一個絲胺酸水解酶**，同時做絲胺酸**與**組胺酸' },
               { en: 'The counter-intuitive published result worth copying: in one thioesterase the **histidine** mutant is **17× deader** than the serine mutant, because water substitutes for the missing serine. Building both turns one variant into a comparison, and the comparison is a result.', zh: '一個值得照抄的反直覺已發表結果：在某個硫酯酶中，**組胺酸**突變體比絲胺酸突變體**死了 17 倍**，因為水會替代掉缺失的那個絲胺酸。把兩個都做出來，就把「一個變異體」變成「一個比較」，而那個比較就是一個結果。' },
               { en: 'A chromogenic ester. Warning: *E. coli* lysate has its own esterases, so pick a chemistry with no native counterpart or use a knockout lysate.', zh: '一個顯色酯類。警告：*E. coli* 萃取液本身就有酯酶，所以要挑一個沒有原生對應物的化學，或使用基因剔除的萃取液。' },
               { en: '[PMID 16515533](https://pubmed.ncbi.nlm.nih.gov/16515533/)', zh: '[PMID 16515533](https://pubmed.ncbi.nlm.nih.gov/16515533/)' }],
              [{ en: '**Luciferase and a protease** — the two deliberate gaps', zh: '**螢光素酶與一個蛋白酶**——兩個刻意留下的缺口' },
               { en: 'We went looking for a published inactive luciferase point mutant with a measured residual light output, and for the equivalent on a common protease, and **could not find either**. Two of the most widely used reporters in synthetic biology have no quantified dead control in the literature. **That makes them the two most valuable measurements in the project** — and the two most likely to fail, so schedule them where a failure is survivable.', zh: '我們去找「有實測殘餘發光量的已發表失活螢光素酶點突變體」，以及某個常用蛋白酶的對應物，而**兩個都沒找到**。合成生物學裡兩個最廣泛使用的報告系統，在文獻中都沒有被定量過的失活對照。**這讓它們成為這個專案裡最有價值的兩個量測**——同時也是最可能失敗的兩個，所以請把它們排在「失敗還活得下去」的位置。' },
               { en: 'Luminescence; a fluorogenic peptide. Both need their own floor before they need a variant.', zh: '冷光；一個螢光肽。兩者都是「在需要變異體之前，先需要自己的地板」。' },
               { en: 'Gap, not a citation', zh: '這是缺口，不是引用' }]
            ],
            min: 1120,
            source: { en: 'Fold-losses, substitutions and warnings are the cited papers\' own findings, retrieved from PubMed and cross-checked against database active-site annotations. **Two corrections to our own first draft are in this table**: the fluorescent-protein substitutions, and dropping horseradish peroxidase, which cannot realistically be made in *E. coli* — every published dead-mutant number for it came from insect cells. Check the residue numbering yourself against the exact sequence you order; literature and database numbering differ for most of these.', zh: '倍數損失、置換與警告都是所引論文自己的發現，取自 PubMed，並與資料庫的活性位點註記交叉核對。**這張表裡有兩處對我們自己初稿的更正**：螢光蛋白的置換，以及放棄辣根過氧化物酶——它實際上無法在 *E. coli* 中製造，所有已發表的失活突變體數字都來自昆蟲細胞。請自己拿你要訂的確切序列核對殘基編號；這些目標大多在文獻與資料庫之間編號不同。' }
          }) +
          h.note({
            en: 'The reason the collection needs more than one enzyme: **residual activity is not predictable from the substitution.** In blood-group glycosyltransferases, two substitutions at the same position behave oppositely — one pair "retain significant activity despite disrupted active site architecture" while another "maintains active site architecture but exhibits zero activity" — and near-identical enzymes differ up to **13-fold** for the same change. Elsewhere, removing a catalytic base bought only **1,500-fold** while binding stayed fully intact, and a phospholipase active-site mutant was only **500-fold** down. "Mutate the catalytic residue" does not reliably buy even three orders of magnitude, which is precisely why each member of a control collection needs its own measurement rather than an inherited assumption.',
            zh: '這個集合之所以需要一個以上的酵素：**殘餘活性無法從置換本身預測。**在血型醣基轉移酶中，同一個位置的兩種置換表現相反——其中一組「儘管活性位點架構被破壞仍保有可觀活性」，而另一組「維持了活性位點架構卻呈現零活性」——而幾乎相同的酵素對同一個改動差異可達 **13 倍**。在別處，拿掉一個催化鹼只換到 **1,500 倍**，而結合能力完全保留；某個磷脂酶的活性位點突變體只降低 **500 倍**。「去突變那個催化殘基」連三個數量級都不可靠地保證得到——而這正是為什麼一個對照集合裡的每一個成員，都需要自己的量測，而不是一個繼承來的假設。'
          })
      });

      /* ---------------- prior art ---------------- */
      out += h.sec({
        id: 'nl-prior',
        kick: { en: 'Prior art', zh: '前人做過的' },
        h2: { en: 'Three teams and one database got close. None measured a floor', zh: '三支隊伍與一個資料庫很接近。沒有一個量了地板' },
        body:
          h.kv([
            [{ en: 'PSI Korea 2026 — the nearest miss, and also a High School team', zh: 'PSI Korea 2026——最接近的一次，而且也是高中部隊伍' },
             { en: 'Submitted a **seven-allele activity ladder** on one enzyme with measured relative output: wild type 100 %, then 92, 84, 45, 24, 7 and **3 % for the variant they describe as "catalytically dead" and as "the expected loss-of-function control"**. They even compared their values against the literature and noted that two of the rankings disagreed. **No assay floor, no limit of blank, no contamination test** — and the purpose was pathway tuning, not a control library. This is the strongest evidence that the idea is both feasible for a school team and still unclaimed.', zh: '他們提交了一個酵素上的**七個等位活性階梯**，附實測相對輸出：野生型 100%，接著是 92、84、45、24、7，以及他們描述為「催化失活」與「預期的功能喪失對照」的那個變異體的 **3%**。他們甚至把自己的數值與文獻比較，並指出其中兩個排序不一致。**沒有試驗地板、沒有空白極限、沒有污染測試**——而且他們的目的是路徑調校，不是一個對照庫。這是最有力的證據，說明這個題目對一支學校團隊是可行的，而且仍然沒有被占走。' }],
            [{ en: 'XMU-China 2026 — controls submitted as controls', zh: 'XMU-China 2026——把對照當成對照提交' },
             { en: 'Three active-site point mutants of a nuclease, submitted **explicitly as negative controls** for a plasmid-interference assay, with the protocol published. No residual-activity or background numbers appear. So the *framing* exists in iGEM; the *measurement* does not.', zh: '一個核酸酶的三個活性位點點突變體，**明確以負面對照的身分**為一個質體干擾試驗提交，流程也公開了。但沒有出現任何殘餘活性或背景數值。所以在 iGEM 裡，那個**框架**存在；那個**量測**不存在。' }],
            [{ en: 'ZZU 2026 — the only team that measured a floor properly', zh: 'ZZU 2026——唯一一支把地板量對的隊伍' },
             { en: 'Estimated a detection limit from **20 full-process no-target controls**, which is the nearest thing in iGEM to a measured limit of blank. The standard reference on limits of blank and detection is cited by five 2025–2026 teams and **operationalised by one**. Read their measurement page before you write your own.', zh: '他們以 **20 個完整流程的無標的對照**估計偵測極限，這是 iGEM 裡最接近「實測空白極限」的做法。那份關於空白極限與偵測極限的標準文獻被 2025–2026 年的五支隊伍引用，而**只有一支把它真的做出來**。在你寫自己的量測頁之前，先去讀他們的。' }],
            [{ en: 'Outside iGEM — large, and still not the thing', zh: 'iGEM 之外——規模很大，但仍然不是那件事' },
             { en: 'A public plasmid repository returns roughly **1,900 hits** for "catalytically inactive" and a similar number for "catalytically dead", but they are overwhelmingly dCas variants deposited one at a time by unrelated laboratories, with no common assay and **no activity data**. Deep mutational scanning has measured every variant of an active site — one study covered **160,000 variants across four active-site residues** — but reports fitness scores rather than absolute activity, and distributes a dataset rather than plasmids. **Nobody distributes controls with numbers on them.**', zh: '一個公開的質體資源庫對「catalytically inactive」約有 **1,900 筆**命中、對「catalytically dead」數量相近，但它們絕大多數是由彼此無關的實驗室逐一寄存的 dCas 變異體，沒有共同的試驗，也**沒有活性數據**。深度突變掃描已經量過一個活性位點的每一個變異體——有一項研究涵蓋**四個活性位點殘基上的 160,000 個變異體**——但它報告的是適應度分數而不是絕對活性，而且散佈的是資料集而不是質體。**沒有人散佈「身上帶著數字」的對照。**' }]
          ])
      });

      /* ---------------- what ---------------- */
      out += h.sec({
        id: 'nl-what',
        kick: { en: 'The deliverable', zh: '交付物' },
        h2: { en: 'Three numbers per variant, one collection page, one script', zh: '每個變異體三個數字、一個元件集頁面、一段程式' },
        body:
          h.kv([
            [{ en: 'Number one — the residual, as a bound', zh: '第一個數字——殘餘活性，以界限表示' },
             { en: 'Residual activity as a percentage of wild type, reported as a **one-sided upper bound** with the substrate named, because the same variant can score 500,000-fold down on one substrate and 1,300-fold on another. Never "zero", never a bare "no activity detected".', zh: '殘餘活性佔野生型的百分比，以**單側上界**報告，並寫明底物，因為同一個變異體在一種底物上可能降低 500,000 倍、在另一種上只降低 1,300 倍。絕不寫「零」，也絕不只寫「未偵測到活性」。' }],
            [{ en: 'Number two — the floor', zh: '第二個數字——地板' },
             { en: 'The assay\'s limit of blank and limit of detection, from a stated number of full-process no-enzyme controls. This is the number that makes number one mean anything, and the one nobody publishes.', zh: '該試驗的空白極限與偵測極限，由明確數量的「完整流程、不加酵素」對照算出。正是這個數字讓第一個數字有意義，而它也是沒有人公開的那一個。' }],
            [{ en: 'Number three — the contamination ceiling', zh: '第三個數字——污染上限' },
             { en: 'The wild-type fraction that would, on its own, account for the entire residual you measured. For a variant 10⁶-fold down this is around a part per million. Publishing it tells the next team whether your bound is about the protein or about your purification.', zh: '那個「光靠自己就足以解釋你所量到的全部殘餘活性」的野生型比例。對一個降低 10⁶ 倍的變異體，這大約是百萬分之一。公開它，才能告訴下一支隊伍：你的界限講的是那個蛋白，還是講的是你的純化。' }],
            [{ en: 'The artefact test', zh: '那個假象測試' },
             { en: 'On at least the deadest variant: spike wild type back in at trace levels and show whether it reproduces your residual, or abolish the residual with an active-site inhibitor. One of the two, or the bound is not yours.', zh: '至少要對最死的那個變異體做：把野生型以微量加回去，顯示它會不會重現出你的殘餘活性；或者用一個活性位點抑制劑把殘餘活性消除。兩者至少做一個，否則那個界限不屬於你。' }],
            [{ en: 'The parts and the collection page', zh: '那些元件與元件集頁面' },
             { en: 'Each variant as its own Registry entry carrying all three numbers, plus a collection page that explains the ensemble rather than the parts. The ensemble argument writes itself, because the collection is defined by a question: *what is the correct negative control for the part you are using, and how dead is it?*', zh: '每個變異體各自一個 Registry 條目，附上三個數字；再加上一個解釋「整體」而不是「個別元件」的集合頁面。整體的論證會自己寫出來，因為這個集合是由一個問題定義的：*你正在用的那個元件，它正確的負面對照是什麼，而它死得多徹底？*' }],
            [{ en: 'The script', zh: '那段程式' },
             { en: 'Blank readings in; limit of blank, limit of detection and contamination ceiling out. Twenty lines, released with the collection, because the reagent is only useful to somebody who can state their own floor.', zh: '輸入空白讀值；輸出空白極限、偵測極限與污染上限。二十行，隨集合一起釋出，因為這個試劑只對「能說出自己地板」的人有用。' }],
            [{ en: 'What you do not deliver', zh: '你不交付什麼' },
             { en: 'A pathway, an application, or any claim that these controls improve somebody\'s result. The collection is infrastructure. Say so, and resist attaching a disease to it.', zh: '一條路徑、一個應用，或任何「這些對照能改善某人結果」的主張。這個集合是基礎設施。把這件事說明白，並抵抗把一個疾病掛上去。' }]
          ])
      });

      /* ---------------- gates ---------------- */
      out += h.sec({
        id: 'nl-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'The five gates, answered in one sentence each', zh: '五道關卡，每一道用一句話回答' },
        body:
          h.phases([
            { h: { en: 'Gate 1 — the number and the instrument', zh: '關卡一——數字與儀器' },
              p: { en: 'By week 20 we will report, for each variant, residual activity as a one-sided 95 % upper bound against a floor measured from at least twenty full-process no-enzyme controls, on a plate reader we can book.', zh: '到第 20 週，我們會為每個變異體報告：殘餘活性的單側 95% 上界，對照一個由至少二十個「完整流程、不加酵素」對照所量出的地板，使用我們訂得到的微孔盤讀儀。' },
              items: [
                { en: 'Pick **one** readout chemistry and stay in it. A collection measured three different ways is three small projects, and the floor would have to be established three times.', zh: '挑**一種**讀值化學並留在裡面。一個用三種不同方法量出來的集合是三個小專案，而地板也得被建立三次。' },
                { en: 'Choose a chemistry with no native counterpart in your expression system, or use a knockout lysate. One published cell-free protocol exists specifically because the authors needed extract with "no detectable background" for their reporter — and note the irony: **that background is the floor this project exists to measure.**', zh: '挑一個在你的表達系統裡沒有原生對應物的化學，或使用基因剔除的萃取液。有一份已發表的無細胞流程之所以存在，正是因為作者需要對他們的報告系統「沒有可偵測背景」的萃取液——而請注意這個諷刺：**那個背景就是這個專案存在要量的地板。**' }
              ],
              done: { en: 'A booking in writing for plate-reader time in three separate weeks, and a named readout chemistry.', zh: '一份書面的儀器預約，涵蓋三個不同週次的時段，以及一個指名的讀值化學。' } },
            { h: { en: 'Gate 2 — the control that could make us wrong', zh: '關卡二——可能讓我們是錯的對照' },
              p: { en: 'Wild type in the same plate on the same day, the empty-vector comparison we are arguing against, **and the spiked trace wild type** that would reproduce our residual if contamination explains it.', zh: '同一盤、同一天的野生型；我們所要反駁的那個空載體比較；**以及被加標的微量野生型**——如果污染才是解釋，它就會重現出我們的殘餘活性。' },
              items: [
                { en: 'The spiking arm is the sharpest control available and it is cheap: one published group reproduced a 46-fold artefact deliberately by adding 0.015 mol % wild type to a clean preparation.', zh: '加標那一組是能取得的最鋒利的對照，而且很便宜：有一個已發表的研究群，只靠在乾淨製備中加入 0.015 mol% 野生型，就刻意重現了一個 46 倍的假象。' },
                { en: 'Second control, free: measure protein in the same well as activity. A variant with no signal because there is no protein is the failure this project is about.', zh: '第二個對照，免費：在量活性的同一個孔裡量蛋白。一個「因為沒有蛋白而沒有訊號」的變異體，正是這個專案在講的那個失敗。' }
              ],
              done: { en: 'A plate map drawn before the first expression reaction, with the spike series already in wells.', zh: '一張在第一次表達反應之前就畫好的盤位圖，加標系列已經在孔裡。' } },
            { h: { en: 'Gate 3 — two links, and we name them', zh: '關卡三——兩環，而且我們指名它們' },
              p: { en: 'Link one: the variant gets expressed as protein. Link two: activity and protein get measured against a floor. Nothing downstream depends on either.', zh: '第一環：變異體被表達成蛋白。第二環：活性與蛋白對照地板被量出來。沒有任何下游的東西依賴它們當中任何一個。' },
              items: [
                { en: 'What we cut: purification. Cell-free expression from a **linear PCR product with nuclease protection** removes cloning, transformation and plasmid preparation in one step — one published protocol states the template is "added to the reaction as linear DNA without cloning".', zh: '我們砍掉的是：純化。用**帶核酸酶保護的線性 PCR 產物**做無細胞表達，一次砍掉選殖、轉形與質體製備——有一份已發表的流程寫明模板是「以線性 DNA 的形式加入反應，不經選殖」。' },
                { en: 'What we also cut: showing that these controls improve anybody else\'s measurement. That needs a third party\'s experiment and a season we do not have, so we would publish it as the stated next step.', zh: '我們也砍掉的是：證明這些對照能改善別人的量測。那需要第三方的實驗、以及一個我們沒有的賽季，所以我們會把它公開為「明確的下一步」。' }
              ],
              done: { en: 'A chain diagram with two boxes marked "evidence" and one marked "design".', zh: '一張鏈條圖，兩個方塊標「證據」、一個標「設計」。' } },
            { h: { en: 'Gate 4 — the outsider, and the rule that makes it legal', zh: '關卡四——外部的人，以及讓這件事合法的那條規定' },
              p: { en: 'Two constructs, coded A and B, sent to a university laboratory with the protocol and no expectations, re-measured blind and reported back as numbers.', zh: '兩個構築，編號 A 與 B，連同流程、不帶任何期待，送到一間大學實驗室，做盲測重量，再以數字回報。' },
              items: [
                { en: 'This is allowed and the policy says why: iGEM lists "transporting cells or DNA between two labs, in proper packaging, for research or teaching purposes" as **not** a release event. DNA going to a laboratory is the cleanest case in the whole policy.', zh: '這是被允許的，而政策寫明了理由：iGEM 把「在兩間實驗室之間、以適當包裝、為研究或教學目的運送細胞或 DNA」列為**不屬於**釋放事件。DNA 送往一間實驗室，是整份政策裡最乾淨的情況。' },
                { en: 'Blind matters more than independent. If they know which construct is supposed to be dead, you have rented an instrument rather than bought a check.', zh: '盲測比獨立更重要。如果他們知道哪一個構築「應該是死的」，你租到的是一台儀器，而不是買到一次檢驗。' },
                { en: 'Ask in January. The request is unusually easy here: you are asking somebody to run one plate, not to host your team.', zh: '一月就去問。這裡的請求出乎意料地容易：你是在請人跑一盤，不是請人收容你的團隊。' }
              ],
              done: { en: 'A named contact, a named measurement, and a date before the midpoint of the season.', zh: '一個具名的聯絡人、一個具名的量測，以及一個落在賽季中點之前的日期。' } },
            { h: { en: 'Gate 5 — the negative result, written first', zh: '關卡五——先寫下負面結果' },
              p: { en: 'Two sentences, both of which we would publish unchanged:', zh: '兩句話，兩句我們都會原封不動公開：' },
              items: [
                { en: '**"Of our variants, *k* retained activity above the floor of our assay, so they cannot be offered as negative controls."** Any value of *k* is publishable, and a high *k* is the most useful outcome for whoever comes next — the literature says residual activity is not predictable from the substitution, so a collection where half the members fail is a real finding.', zh: '**「我們的變異體中有 *k* 個的活性高於我們試驗的地板，所以它們無法作為負面對照提供。」***k* 不管是多少都可以公開；而一個高的 *k* 對後來的人來說是最有用的結果——文獻說殘餘活性無法從置換預測，所以一個「半數成員都不合格」的集合是一個真實的發現。' },
                { en: '**"Our floor was set by contamination at *x* ppm, which means no statement is possible about residual activity below *y* % of wild type."** That is a limitation of the preparation, not of the team, and it is the single most reusable sentence the project can produce.', zh: '**「我們的地板是由 *x* ppm 的污染所決定的，這意味著對低於野生型 *y* % 的殘餘活性無法做出任何陳述。」**那是製備的限制，不是團隊的限制，而它是這個專案所能產出最可被重用的一句話。' }
              ],
              done: { en: 'Both sentences in the January document, dated, and shown to the whole team.', zh: '兩句話都在一月的文件裡，簽上日期，並給全隊看過。' } }
          ])
      });

      /* ---------------- flow ---------------- */
      out += h.sec({
        id: 'nl-flow',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Five wet steps, five dry steps, and no cloning anywhere', zh: '五個濕式步驟、五個乾式步驟，而且全程沒有選殖' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'NULLSET: the floor is built first, and the variants are chosen from measured literature', zh: 'NULLSET：先把地板建好，而變異體從有實測數據的文獻裡挑出來' },
          sub: { en: 'Wet lab above, dry lab below. The two handoffs both run early — the literature picks the variants before anything is ordered, and the floor sets the contamination ceiling before anything is interpreted.', zh: '上為濕式、下為乾式。兩個交接都發生在前期——文獻在任何東西被訂購之前先挑好變異體，而地板在任何東西被解讀之前先定出污染上限。' },
          caption: { en: 'Our plan, not a record of work. Nothing in this diagram has been performed.', zh: '這是我們的計畫，不是工作紀錄。本圖中沒有任何一步被執行過。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- tools ---------------- */
      out += h.sec({
        id: 'nl-tool',
        kick: { en: 'Logistics', zh: '後勤' },
        h2: { en: 'What it costs, and why the honest answer is "free if you plan a year ahead"', zh: '它要花多少錢，以及為什麼誠實的答案是「提前一年規劃就免費」' },
        lede: {
          en: 'Prices below are the ones we could verify from public pages in November 2026. They will be wrong in your country and they move; treat them as the shape of the decision, not as a quote.',
          zh: '下面的價格是我們在 2026 年 11 月能從公開頁面確認到的。它們在你的國家一定不準，而且會變動；請把它們當成「這個決定的形狀」，不是一份報價。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What', zh: '項目' }, w: '22%' },
              { t: { en: 'Why this project needs it', zh: '這個專案為什麼需要它' } },
              { t: { en: 'Cost, and how to not pay it', zh: '成本，以及怎麼不必付' }, w: '32%' }
            ],
            rows: [
              [{ en: '**The variant DNA**', zh: '**變異體 DNA**' },
               { en: 'Twelve coding sequences with one or two substitutions each.', zh: '十二個編碼序列，每個帶一或兩個置換。' },
               { en: 'Two routes, and the crossover is real. Site-directed mutagenesis off one template works out around **USD 50 per mutant** all-in, so roughly **USD 625** for twelve. Synthesis as gene fragments is about **USD 70 per 1 kb mutant** before cloning. Mutagenesis wins above about 750 bp; below about 500 bp a flat per-sequence synthesis price wins outright. **For a registered iGEM team the honest answer is zero**: one 2026 sponsor offered up to **40 kb** of free fragments per team, and twelve 1 kb variants is 12 kb. Those windows close early — one closed in September 2026 — so this is a 2027 calendar item, not a budget item.', zh: '有兩條路線，而交叉點是真實存在的。從同一個模板做定點突變，全部算進去大約**每個突變體 50 美元**，十二個約 **625 美元**。以基因片段合成則大約**每個 1 kb 變異體 70 美元**，還不含選殖。超過約 750 bp 時定點突變較便宜；低於約 500 bp 時，「每條序列固定價」的合成會完全勝出。**而對一支已登記的 iGEM 隊伍，誠實的答案是零**：2026 年有一家贊助商提供每隊最多 **40 kb** 的免費片段，而十二個 1 kb 變異體是 12 kb。那些申請窗口關得很早——其中一個在 2026 年 9 月就關了——所以這是 2027 年的行事曆項目，不是預算項目。' }],
              [{ en: '**Cell-free expression, instead of cloning**', zh: '**無細胞表達，取代選殖' + '**' },
               { en: 'This is the decision that makes the project fit a school lab. Linear PCR product plus nuclease protection expresses protein with no transformation, no plasmid prep and no selection. Published precedent includes a cell-free expressed **cellulase mutant library with measured specific activities per variant**, chosen explicitly to avoid transformation.', zh: '這是讓這個專案裝得進學校實驗室的那個決定。線性 PCR 產物加上核酸酶保護，就能表達蛋白，不必轉形、不必做質體、不必篩選。已發表的前例包含一個無細胞表達的**纖維素酶突變庫，每個變異體都有實測比活性**，而他們選這條路正是為了避開轉形。' },
               { en: 'Commercial kits run roughly **USD 1 per microlitre**. Home-made extract is published at "**98 % cost reduction**" with one preparation yielding up to **3,000 reactions**, and an autolysis protocol exists that needs **no specialised equipment** — no sonicator, no press. There is also a published desiccated-extract method **203 to 424 times cheaper** than commercial, written explicitly for low-resource and teaching settings.', zh: '商業套組大約**每微升 1 美元**。自製萃取液已發表為「**成本降低 98%**」，而一次製備可產出多達 **3,000 個反應**；另外還有一套自溶流程**不需要任何特殊設備**——不用超音波破碎機、不用高壓均質機。還有一份已發表的乾燥萃取液方法，比商業產品**便宜 203 到 424 倍**，而且是明確為資源有限與教學場景而寫的。' }],
              [{ en: '**A plate reader**', zh: '**一台微孔盤讀儀**' },
               { en: 'Activity and the protein check come off the same instrument in the same run, which is what makes the control expression-matched.', zh: '活性與蛋白檢查從同一台儀器、同一批次出來，而那正是讓對照成為「表達量相符」的東西。' },
               { en: 'The item to confirm in January rather than assume. Routes: your own, a university teaching laboratory, or build one — a 2026 Top 10 team calibrated a self-built photometer against a commercial instrument and published the slope and the intercept.', zh: '一月該確認、而不是假設的那一項。路線有：自己的、大學教學實驗室的，或者自己做一台——2026 年有一支前十名隊伍把自製光度計對照商用儀器校正，並公開了斜率與截距。' }],
              [{ en: '**Sequencing**', zh: '**定序**' },
               { en: 'One read per variant, to prove the substitution is the one you ordered and nothing else came with it.', zh: '每個變異體一次定序，用來證明那個置換就是你訂的那個，而且沒有別的東西跟著來。' },
               { en: 'No public price list exists from the main providers, but university cores quote roughly **USD 4 to 6 per reaction**, so **USD 50 to 70** for twelve. Note that university Sanger services are thinning — one closed its in-house service in early 2026 — so confirm your route before you rely on it.', zh: '主要供應商都沒有公開價目表，但大學核心設施報價大約**每個反應 4 到 6 美元**，十二個約 **50 到 70 美元**。請注意大學的 Sanger 服務正在減少——有一家在 2026 年初關閉了自有服務——所以在你依賴某條路線之前先確認它還在。' }],
              [{ en: '**Buffer screening, nearly free and possibly publishable**', zh: '**緩衝液篩選，幾乎免費，而且可能本身就能發表' + '**' },
               { en: 'Before you trust any bound, check your buffers for rescue agents. **Imidazole, azide and 2-mercaptoethanol chemically resurrect** some dead variants, and imidazole is the standard His-tag elution buffer — so a "dead" control eluted conventionally may be partly alive for reasons that have nothing to do with the mutation.', zh: '在你相信任何界限之前，先檢查你的緩衝液裡有沒有救援劑。**咪唑、疊氮化物與 2-巰基乙醇會化學性地復活**某些失活變異體，而咪唑正是標準的 His 標籤沖提緩衝液——所以一個用常規方式沖提出來的「失活」對照，可能有一部分是活的，而原因與那個突變完全無關。' },
               { en: 'The cost is a few extra wells. For a controls paper this is arguably a result in its own right, and we have not seen it collected anywhere as a warning to the people who need it.', zh: '成本是多幾個孔。對一份「關於對照」的論文來說，這本身可以算是一個結果；而我們沒有在任何地方看到有人把它彙整成一份、給真正需要它的人的警告。' }]
            ],
            min: 1040,
            source: { en: 'Prices and protocols are from the vendor and journal sources our research pass could reach in November 2026; several vendors publish no price at all, which we have said rather than guessed. The synthesis allowance is from iGEM\'s own 2026 sponsor pages, recorded in `notes/2027-idea-sources.md`. Confirm every number before planning a budget.', zh: '價格與流程出自我們 2026 年 11 月的研究能觸及到的供應商與期刊來源；有幾家供應商完全不公開價格，我們把這件事說出來，而不是猜。合成額度出自 iGEM 自己 2026 年的贊助頁面，記錄在 `notes/2027-idea-sources.md`。在做預算之前，請確認每一個數字。' }
          })
      });

      /* ---------------- schedule ---------------- */
      out += h.sec({
        id: 'nl-plan',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'Nine months, with the floor measured in month one', zh: '九個月，而地板在第一個月就量好' },
        lede: {
          en: 'iGEM has published only the 2027 Jamboree dates — 18 to 21 October 2027. The wiki freeze has fallen 19 to 23 days earlier in each of the last four seasons and has always been a Wednesday, which puts a 2027 freeze near **29 September 2027**. That is our arithmetic from four data points, not an announcement.',
          zh: 'iGEM 只公布了 2027 年 Jamboree 的日期——2027 年 10 月 18 至 21 日。過去四個賽季，wiki 凍結日都落在它前面 19 到 23 天，而且一直都是星期三，據此推算 2027 年的凍結日在 **2027 年 9 月 29 日**附近。那是我們用四個資料點做的算術，不是公告。'
        },
        body:
          h.fig({
            kind: 'gantt',
            tag: { en: 'SCHEDULE', zh: '行程' },
            title: { en: 'NULLSET across the season, in months from the start', zh: 'NULLSET 的整季安排，以自起點起算的月份表示' },
            sub: { en: 'Month 0 is your first team meeting; month 9 is the wiki freeze. The two bars that must not slip are the floor and the synthesis claim.', zh: '第 0 個月是你們第一次團隊會議；第 9 個月是 wiki 凍結日。絕對不能延後的是「地板」與「合成申請」這兩條。' },
            data: [
              { label: { en: 'Pick variants from measured literature', zh: '從有實測數據的文獻挑變異體' }, start: 0, end: 1.2, tone: 'v', note: { en: 'check the numbering twice', zh: '編號查兩次' } },
              { label: { en: 'Build the assay, measure the floor', zh: '建立試驗、量出地板' }, start: 0.3, end: 2.5, tone: 'g', note: { en: 'before any variant exists', zh: '在任何變異體存在之前' } },
              { label: { en: 'Claim the synthesis allowance', zh: '申請合成額度' }, start: 0.3, end: 1.3, tone: 'r', note: { en: 'closes earliest', zh: '最早關閉' } },
              { label: { en: 'Order the variants', zh: '訂購變異體' }, start: 1.3, end: 2.3, tone: 'b' },
              { label: { en: 'Email a host lab for the blind arm', zh: '為盲測組寫信給接待實驗室' }, start: 1, end: 2, tone: 'a', note: { en: 'January, not August', zh: '一月，不是八月' } },
              { label: { en: 'Cell-free expression, all variants', zh: '無細胞表達，全部變異體' }, start: 2.3, end: 3.5, tone: 'b' },
              { label: { en: 'Activity and protein, run one', zh: '活性與蛋白，第一輪' }, start: 3.3, end: 4.5, tone: 'g', note: { en: 'the load-bearing run, early', zh: '承重的那一輪，提早做' } },
              { label: { en: 'The spiking artefact test', zh: '加標假象測試' }, start: 4.5, end: 5.5, tone: 'a', note: { en: 'turns a bound into a claim', zh: '把界限變成主張' } },
              { label: { en: 'Runs two and three, other operators', zh: '第二、三輪，換操作者' }, start: 5, end: 6.5, tone: 'g' },
              { label: { en: 'Blind re-measurement outside', zh: '外部盲測重量' }, start: 5, end: 7, tone: 'a' },
              { label: { en: 'Registry entries and collection page', zh: 'Registry 條目與元件集頁面' }, start: 6.5, end: 8, tone: 'v' },
              { label: { en: 'Release the floor script', zh: '釋出地板計算程式' }, start: 7, end: 8, tone: 'v' },
              { label: { en: 'Write the results page first', zh: '先寫結果頁' }, start: 7.5, end: 8.5, tone: 'r' },
              { label: { en: 'Freeze bundle: wiki, forms, Registry', zh: '凍結包：wiki、表單、Registry' }, start: 8.5, end: 9, tone: 'r' }
            ],
            opts: { min: 0, max: 10 },
            caption: { en: 'Our plan. The freeze is a bundle: in 2026 the wiki, judging form, Registry contributions, attributions form and software all shared one deadline, so a Registry submission is not a post-freeze task.', zh: '這是我們的計畫。凍結日是一個包：2026 年 wiki、評審表、Registry 貢獻、致謝表與軟體全部共用同一個期限，所以 Registry 繳交不是凍結日之後的工作。' }
          }) +
          h.take({ en: 'The two inversions that matter here', zh: '這裡重要的兩個倒序' }, {
            en: 'The floor is measured in **month 1**, before a single variant exists, because the floor decides what any later result can say — and because the contamination ceiling it implies tells you in month one whether your deadest target is even measurable with the preparation you can make. And the load-bearing run happens in **month 4**, not month 8, so that a disappointing answer still leaves five months to act on. A 2026 Top 10 team measured the comparison its whole design rested on at the very end of the season, found it was not significant, and had no time left to change the ratio, the system or the claim. That is the mistake this schedule is shaped to avoid.',
            zh: '地板在**第 1 個月**就量，在任何一個變異體存在之前，因為地板決定了之後任何結果能說什麼——也因為它所推出的污染上限，會在第一個月就告訴你：用你做得出來的製備，你最死的那個標的到底量不量得出來。而承重的那一輪發生在**第 4 個月**，不是第 8 個月，好讓一個令人失望的答案仍然留下五個月可以處理。2026 年有一支前十名隊伍，把整個設計所倚賴的那個比較放在賽季最末才量，發現它不顯著，而已經沒有時間去改比例、改系統或改主張。這份行程的形狀，就是為了避開那個錯誤。'
          })
      });

      /* ---------------- risks ---------------- */
      out += h.sec({
        id: 'nl-risk',
        kick: { en: 'Risks', zh: '風險' },
        h2: { en: 'Five ways this goes wrong, and what we would do about each', zh: '這件事出錯的五種方式，以及我們對每一種會怎麼做' },
        body:
          h.cards([
            { chips: [{ t: { en: 'most likely', zh: '最可能' }, k: 'r' }],
              h: { en: 'Your floor is higher than the variant is dead', zh: '你的地板比變異體死得還高' },
              p: { en: 'If the published fold-loss is 10⁶ and your assay plus your preparation can only resolve 10³, you cannot say anything about that variant — and you will not know until you have measured the floor. **This is why the floor comes first**, and why the contamination ceiling is computed in month one rather than discovered in month eight.', zh: '如果已發表的倍數損失是 10⁶，而你的試驗加上你的製備只能分辨到 10³，那你對那個變異體就什麼也說不出來——而你在量出地板之前不會知道。**這就是為什麼地板要先做**，也是為什麼污染上限是在第一個月算出來的，而不是在第八個月才發現。' },
              foot: { en: 'Mitigation: include a variant that is only about 10⁴-fold down, so at least one member is inside reach whatever happens.', zh: '緩解：放進一個只降低約 10⁴ 倍的變異體，這樣不管發生什麼，至少有一個成員在能力範圍內。' } },
            { chips: [{ t: { en: 'the real answer', zh: '真正的答案' }, k: 'a' }],
              h: { en: 'The residual turns out to be contamination', zh: '殘餘活性其實是污染' },
              p: { en: 'Not a failure — this is the published outcome in at least three independent cases, and demonstrating it is a stronger result than a clean bound. It also means the variant is **deader** than you could show, which you should say in exactly those words.', zh: '這不是失敗——這在至少三個獨立案例中都是已發表的結果，而把它展示出來，比一個乾淨的界限是更強的結果。它同時意味著那個變異體**比你能證明的更死**，而你應該用這幾個字原原本本說出來。' },
              foot: { en: 'The spiking arm is what lets you say it. Without it the same data reads as a leaky control.', zh: '是加標那一組讓你能這樣說。少了它，同樣的資料會被讀成「一個會漏的對照」。' } },
            { chips: [{ t: { en: 'presentation', zh: '呈現' }, k: 'a' }],
              h: { en: 'It reads as a reagent catalogue', zh: '它讀起來像一份試劑目錄' },
              p: { en: 'Entirely a writing problem. A list of twelve dead parts is dull; a page that opens with two laboratories discovering their dead enzyme\'s activity was carryover is not. **Lead with the contamination argument, not with the collection.** The Best Part Collection ballot asks whether the collection is coherent or just a list — answer that in your first paragraph.', zh: '這完全是書寫問題。十二個失活元件的清單很枯燥；而一個「以兩間實驗室發現自己失活酵素的活性其實是殘留」開場的頁面，不枯燥。**用污染那個論證開場，不要用集合開場。**最佳元件集的評分項會問：這個集合是連貫的，還是只是一份清單——在你的第一段就回答它。' },
              foot: { en: 'Our own first draft failed this test. The fix was finding the 1992 amylase paper.', zh: '我們自己的初稿就沒通過這個測試。解法是找到 1992 年那篇澱粉酶論文。' } },
            { chips: [{ t: { en: 'rules', zh: '規定' }, k: 'r' }],
              h: { en: 'A part you chose is not available to you', zh: '你挑的某個元件你不能用' },
              p: { en: 'High School teams are confined to the iGEM White List and **cannot file a Check-In**, so a Red-Flagged Registry part is closed to you, as is anything in a dangerous category — toxins, virulence factors, immune-regulating factors, and anything likely to increase horizontal gene transfer. Note that **a β-lactamase is an antimicrobial-resistance factor**, which puts it close to an activity trigger if it is not already in common use in your host institution.', zh: '高中部隊伍被限制在 iGEM 白名單內，而且**不能提交 Check-In**，所以被紅旗標記的 Registry 元件對你是關著的；任何落在危險類別的東西也是——毒素、致病因子、免疫調節因子，以及任何可能增加水平基因轉移的東西。請注意**β-內醯胺酶是一個抗微生物抗性因子**，如果它在你的接待機構裡不是常用的東西，那它就很接近一個「活動類」的觸發條件。' },
              foot: { en: 'Check the Red Flag list and the activity triggers against your twelve choices in January, before the order.', zh: '一月就把紅旗清單與活動類觸發條件對照你那十二個選擇查一遍，在下訂之前。' } },
            { chips: [{ t: { en: 'quiet killer', zh: '安靜的殺手' }, k: 'a' }],
              h: { en: 'Your expression system has the activity you are measuring', zh: '你的表達系統本身就有你要量的那個活性' },
              p: { en: '*E. coli* lysate carries its own esterases and its own β-galactosidase; serine hydrolases alone are more than 1 % of its genes. If your readout chemistry has a native counterpart, the background is not your variant and the floor you measure is the host\'s, not the assay\'s.', zh: '*E. coli* 萃取液本身就帶有自己的酯酶與自己的 β-半乳糖苷酶；光是絲胺酸水解酶就占了它基因的 1% 以上。如果你的讀值化學在宿主裡有原生對應物，那個背景就不是你的變異體；而你量到的地板是宿主的，不是試驗的。' },
              foot: { en: 'Mitigation: a knockout lysate, or a chemistry with no native counterpart. Decide this before you order anything.', zh: '緩解：使用基因剔除的萃取液，或挑一個沒有原生對應物的化學。在你訂任何東西之前先決定這件事。' } }
          ]) +
          h.warn({
            en: 'The limitation we would put on our own results page: **this collection would show that *n* variants are inactive to a stated bound, in one assay, in one preparation, in one laboratory.** It would not show that they are inactive in yours — the literature is explicit that the same mutation scores two orders of magnitude differently on two substrates — and it would not show that using them improves anybody\'s result, which needs an experiment somebody else runs. We would write both sentences into the collection page itself rather than into a limitations section at the bottom, so that a reader who stops after the first paragraph has not been misled.',
            zh: '我們會放在自己結果頁上的那個限制：**這個集合能顯示的是，有 *n* 個變異體在一種試驗、一份製備、一間實驗室中，沒有活性到某個明確的界限。**它不能顯示它們在你那裡沒有活性——文獻明確指出，同一個突變在兩種底物上的分數可以差兩個數量級——它也不能顯示使用它們能改善任何人的結果，那需要別人去跑一個實驗。我們會把這兩句話寫進元件集頁面本身，而不是寫進頁面底部的限制一節，好讓一個只讀完第一段就停下的讀者，不會被誤導。'
          })
      });

      /* ---------------- what it ships ---------------- */
      out += h.sec({
        id: 'nl-ship',
        kick: { en: 'Output', zh: '產出' },
        h2: { en: 'What survives the season, and which awards it actually maps onto', zh: '什麼會在賽季之後留下來，以及它實際對應哪些獎項' },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What you would select', zh: '你會選什麼' }, w: '26%' },
              { t: { en: 'Category', zh: '類別' }, w: '20%' },
              { t: { en: 'What this project puts in front of the judges', zh: '這個專案把什麼放到評審面前' } }
            ],
            rows: [
              [{ en: '**Best Part Collection**', zh: '**最佳元件集**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'Parts that only make sense together, with a collection page whose argument is a question. iGEM\'s criterion asks that the page explain "how the parts were designed to work together… and how other teams can reuse the collection" — a set of controls for named widely-used parts answers that almost mechanically. **No Best Part Collection winner from 2022 to 2026 is a controls collection, and none of the 510 collections registered in 2025–2026 is one either.**', zh: '只有放在一起才有意義的元件，加上一個以問題作為論證的集合頁面。iGEM 的標準要求該頁說明「這些元件如何被設計成一起運作……以及其他隊伍如何重用這個集合」——一組「針對具名、廣泛使用元件的對照」幾乎是機械性地就回答了它。**2022 到 2026 年的最佳元件集得獎者裡沒有一個是對照集合，2025–2026 年登記的 510 個集合裡也沒有。**' }],
              [{ en: '**Best Measurement**', zh: '**最佳量測**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The floor is the measurement story: a calibrated assay, a stated detection limit from a stated number of blanks, a contamination ceiling, a spiking artefact test, and a blind external re-measurement. The ballot asks whether other teams could reproduce the measurement and whether you validated and calibrated it — which is this project\'s entire first third.', zh: '地板就是那個量測故事：一個校正過的試驗、一個由明確數量空白算出的偵測極限、一個污染上限、一次加標假象測試，以及一次外部盲測重量。評分項會問其他隊伍能不能重現這個量測、以及你有沒有驗證與校正它——而那正是這個專案前三分之一的全部內容。' }],
              [{ en: '**Best Education**, or **Best Software** if the floor tool is released properly', zh: '**最佳教育**；若地板工具釋出得完整，則是**最佳軟體**' },
               { en: 'Specialization', zh: '專項' },
               { en: 'A Gold medal needs at least one from this category. The honest fit is Education — "how to state your own detection limit, and why your dead control may not be dead" is genuinely teachable and most teams get it wrong. Software is available if the floor calculator is released under an open licence in iGEM\'s own repository, which is a hard eligibility gate rather than a preference.', zh: '金牌需要這個類別至少一項。誠實的落點是教育——「怎麼說出你自己的偵測極限，以及為什麼你的失活對照可能沒死」是真正可以教、而大多數隊伍都做錯的事。若那個地板計算器以開放授權釋出在 iGEM 自己的程式倉庫裡，軟體獎也可以——那是一道硬性的資格門檻，不是偏好問題。' }],
              [{ en: 'Not **Best New Improved Part**', zh: '不要選**最佳新改良元件**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'Tempting, because the award explicitly asks whether "the old part was used as a control in the testing of the new part" — and here the control *is* the new part. But the award is for a part that **performs better**, and an inactive variant does not. Claiming it would be the kind of stretch a judge notices.', zh: '很有誘惑力，因為那個獎明確會問「舊元件有沒有被當成新元件測試中的對照」——而這裡對照*就是*新元件。但那個獎是給**表現更好**的元件，而一個失活的變異體並沒有更好。去主張它，正是評審會注意到的那種牽強。' }]
            ],
            min: 940,
            source: { en: 'Award categories and criteria quotations are from iGEM\'s 2026 Special Awards and Medals pages; the winner and collection counts come from the official awards API and the Registry collections endpoint. All recorded in `notes/2027-idea-sources.md`. **High school is always evaluated as its own section for every Special Award**, which is the structural fact that makes a narrow, well-executed collection competitive. Which awards to select is our judgement, not advice from iGEM.', zh: '獎項類別與標準引文出自 iGEM 2026 年的 Special Awards 與 Medals 頁面；得獎者與集合數量取自官方獎項 API 與 Registry 的集合端點。全部記錄在 `notes/2027-idea-sources.md`。**每一個特別獎，高中部都是獨立評比的一個組別**，正是這個結構性事實讓一個範圍窄、但執行完整的集合具有競爭力。選哪些獎是我們的判斷，不是 iGEM 的建議。' }
          }) +
          h.note({
            en: 'Where to go next: the same gates applied to four other topics are on [Five ideas](#x-ideas), and the procedure itself — with the scoring sheet and the season read backwards — is on [the 2027 roadmap](#x-roadmap). If you want to see how the 2026 High School teams handled calibration and controls before you commit to this, the practices matrix on [Side by side](#hs-compare) is the shortest route.',
            zh: '接下來可以去哪裡：同樣的關卡套用在另外四個題目上，在[五個題目](#x-ideas)；而程序本身——連評分表與倒推的賽季行程——在[2027 選題指南](#x-roadmap)。如果你想在投入之前先看 2026 年高中部隊伍怎麼處理校正與對照，[橫向比較](#hs-compare)上的做法矩陣是最短的路。'
          })
      });

      return out;
    }
  };
})(window);
