/* Muenster-University — P.A.C. Immunity. Top 10 Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/muenster-university/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Screen cleavage in E. coli, cheaply', zh: '先在大腸桿菌裡便宜地篩切割' },
        s: { en: 'A cleavage site between 6×His-tagged sfGFP and TrxA; high-copy substrate, low-copy protease', zh: '把切割位放在兩個 6×His 標記的 sfGFP 與 TrxA 之間；高拷貝做底物、低拷貝做蛋白酶' } },
      { l: { en: 'Discover the screen cannot be read', zh: '發現這個篩選讀不出來' },
        s: { en: 'GFP appeared in protease-free lanes and in the mutated-site control: something else cut it', zh: '不含蛋白酶的道與突變切位對照都出現 GFP：是別的東西切的' }, tone: 'r' },
      { l: { en: 'Rebuild it as FRET, in planta', zh: '改建成植物體內的 FRET' },
        s: { en: 'mTurquoise and cpVenus173 flanking the site; mScarlet-I on the protease so expression is visible', zh: 'mTurquoise 與 cpVenus173 夾住切位；蛋白酶接 mScarlet-I，讓表達看得見' }, tone: 'g' },
      { l: { en: 'Find the blocker’s minimum size', zh: '找出阻斷子的最小尺寸' },
        s: { en: 'Four lengths on autoactive AtNRG1.1; the EU NGT-1 rules set the target', zh: '在自活化的 AtNRG1.1 上試四種長度；歐盟 NGT-1 規範決定了目標' } },
      { l: { en: 'Control for necrosis you cannot see', zh: '為看不見的細胞死亡設對照' },
        s: { en: 'A p19-only infiltration, and trypan blue on a separate batch', zh: '只打 p19 的浸潤，以及另一批植株的 trypan blue 染色' } },
      { l: { en: 'Extend to crop NLRs and bacterial proteases', zh: '擴展到作物 NLR 與細菌蛋白酶' },
        s: { en: 'Autoactivity induced in partly undescribed crop NLRs, then blocked, then indications of release', zh: '在部分未被描述的作物 NLR 中誘導出自活性，再阻斷，再看到解開的跡象' } }
    ],
    dry: [
      { l: { en: 'Frame the problem as a number', zh: '把問題寫成一個數字' },
        s: { en: 'A ~7-residue recognition site is 1.28 × 10⁹ combinations, so random screening is out', zh: '約 7 個殘基的辨識位有 1.28×10⁹ 種組合，所以隨機篩選不可行' } },
      { l: { en: 'Model four uncharacterised proteases', zh: '為四個未被特性化的蛋白酶建模' },
        s: { en: 'AlphaFold3 structures, with pLDDT reported per catalytic-triad residue', zh: '用 AlphaFold3 建結構，並逐一報告催化三元組各殘基的 pLDDT' } },
      { l: { en: 'Generate peptides into the cavity', zh: '把胜肽生成進催化腔' },
        s: { en: 'RFdiffusion3 backbones filtered on distance to the triad, then LigandMPNN sequences', zh: 'RFdiffusion3 產生主鏈並依「到三元組的距離」篩選，再用 LigandMPNN 設計序列' } },
      { l: { en: 'Rank by the geometry of catalysis', zh: '依催化幾何排序' },
        s: { en: 'Because an interview established that binding in the site is not cleavage', zh: '因為一次訪談確立了「待在活性位裡」不等於「會被切」' }, tone: 'g' }
    ],
    links: [
      { w: 2, d: 3, l: { en: 'the pipeline hands over 100 candidates per protease', zh: '這條流程每個蛋白酶交出 100 個候選' }, up: true },
      { w: 1, d: 3, l: { en: 'the screen must be fixed before the hits count', zh: '篩選要先修好，命中才算數' } }
    ]
  };

  PD.pages['og-muenster'] = {
    label: { en: 'Muenster-University', zh: 'Muenster-University' },
    title: { en: 'Muenster-University — P.A.C. Immunity', zh: 'Muenster-University — P.A.C. Immunity' },
    render: function (h) {
      var t = team('muenster');
      var out = h.teamhero(t, {
        h1: {
          en: 'Stop searching for resistance and ==design it== — then publish the screen that could not be read.',
          zh: '不要再去篩抗性，==把它設計出來==——然後把那個讀不出來的篩選公開。'
        },
        lede: {
          en: 'Plant pathogens cause up to 30 % of global yield losses, and the conventional route to resistance is to screen thousands of specimens hoping to find a resistant plant, then breed the trait in. That takes upwards of ten years, usually with a yield trade-off, and pathogens adapt out of it. P.A.C. Immunity puts a pathogen-protease cleavage site inside the blocker that keeps a plant immune sensor switched off, so the pathogen\'s own virulence factor unlocks the plant\'s defence. Both halves are exchangeable, which is what makes it a platform. And where the evidence is thin, the wiki says "indications".',
          zh: '植物病原造成全球高達 30% 的產量損失，而取得抗性的傳統路徑是篩上千個品系、希望找到一棵有抗性的植株，再把那個性狀育種進去——動輒十年以上，而且通常伴隨產量折損，然後病原又演化掉它。P.A.C. Immunity 把一個病原蛋白酶的切割位放進「讓植物免疫感測器維持關閉」的阻斷子裡，於是病原自己的毒力因子就成了解開植物防禦的鑰匙。兩半都可以更換，而這正是它之所以是平台的原因。而在證據不足的地方，這個 wiki 寫的是「跡象」。'
        },
        chips: [
          { t: { en: 'NLR immune sensors', zh: 'NLR 免疫感測器' }, k: 'b' },
          { t: { en: 'Pathogen protease trigger', zh: '病原蛋白酶觸發' }, k: 'v' },
          { t: { en: 'FRET cleavage screen', zh: 'FRET 切割篩選' }, k: 'g' },
          { t: { en: 'ProTEUS design pipeline', zh: 'ProTEUS 設計流程' }, k: 'a' },
          { t: { en: 'Built for EU NGT-1', zh: '依歐盟 NGT-1 設計' }, k: 't' }
        ],
        stats: [
          { v: '1.28 × 10⁹', l: { en: 'Combinations in a ~7-residue recognition site', zh: '約 7 個殘基的辨識位所含的組合數' } },
          { v: '30 or more', l: { en: 'Cleavage sites existing tools need before they can predict anything', zh: '現有工具在能預測之前所需的已知切割位數量' } },
          { v: '13 min → 30 s', l: { en: 'AlphaFold3 time per design, after optimisation', zh: '最佳化後每個設計的 AlphaFold3 時間' } },
          { v: 'top 100', l: { en: 'Candidates per protease handed to the wet lab', zh: '每個蛋白酶交給濕式實驗的候選數' } },
          { v: 'E/P6 V/P4 Q/P1', l: { en: 'Known NIa-Pro consensus residues the pipeline recovered', zh: '這條流程成功找回的 NIa-Pro 已知共識殘基' } },
          { v: '3 of 4', l: { en: 'Unknown proteases with potential hits: "needs further refinement"', zh: '出現潛在命中的未知蛋白酶數——「仍需進一步改良」' } }
        ]
      });

      out += h.toc([
        { id: 'u-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'u-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'u-screen', t: { en: 'Two screens', zh: '兩個篩選' } },
        { id: 'u-blocker', t: { en: 'The blocker', zh: '阻斷子' } },
        { id: 'u-dry', t: { en: 'ProTEUS', zh: 'ProTEUS' } },
        { id: 'u-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'u-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'u-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Use the pathogen\'s mandatory weapon as the key to the lock', zh: '把病原非用不可的武器，當成那把鎖的鑰匙' },
        lede: {
          en: 'Plant NLR immune sensors, when activated, oligomerise into a resistosome, insert their N-terminus into the membrane as a non-selective calcium channel, and trigger local cell death, the hypersensitive reaction.',
          zh: '植物的 NLR 免疫感測器一旦被活化，就會聚合成 resistosome，把 N 端插入細胞膜形成非選擇性鈣離子通道，引發局部細胞死亡——也就是超敏反應。'
        },
        body:
          h.p({
            en: 'The accompanying ROS burst primes the plant and **lignifies the surrounding tissue, encapsulating the pathogen**. HR immunity is effective against bacteria, viruses, oomycetes, fungi and nematodes. And the fact the whole project turns on: **an NLR\'s HR activity can be synthetically blocked by an N-terminal insertion.** So put a **pathogen-protease cleavage site inside that blocker.** When the pathogen\'s protease cuts it, the blocker comes off, the NLR fires, and the plant traps the pathogen. Hence **P**rotecting the plant **A**nd **C**apturing the pathogen.',
            zh: '隨之而來的活性氧爆發會讓植物進入警備狀態，並**把周圍組織木質化，把病原包起來**。超敏反應型免疫對細菌、病毒、卵菌、真菌與線蟲都有效。而整個專案所依賴的那個事實是：**NLR 的超敏反應活性可以用一個 N 端插入序列人工阻斷。**所以就把**病原蛋白酶的切割位放進那個阻斷子裡。**當病原的蛋白酶把它切開，阻斷子脫落、NLR 啟動，植物就把病原困住——這就是 **P**rotecting the plant **A**nd **C**apturing the pathogen 的由來。'
          }) +
          h.take({ en: 'Why proteases, argued rather than assumed', zh: '為什麼選蛋白酶：這是被論證的，不是被假設的' }, {
            en: 'Most effectors are interchangeable and pathogens substitute them under pressure. But many agriculturally important pathogens secrete **conserved proteases as mandatory virulence factors**. Viruses need them to process their own polyproteins; bacteria use them to cut the immune signalling proteins of pattern-triggered immunity. Targeting a **mandatory, conserved** effector therefore raises the evolutionary barrier to adaptation, instead of inviting the pathogen to drop one effector and use another.',
            zh: '大多數效應子是可互換的，病原在壓力下就換掉它們。但許多在農業上重要的病原會分泌**保守的蛋白酶作為非用不可的毒力因子**——病毒需要它們來切割自己的多蛋白，細菌則用它們來切斷模式觸發免疫的訊號蛋白。所以瞄準一個**非用不可且保守**的效應子，會提高病原適應的演化障礙，而不是邀請它丟掉一個效應子換另一個。'
          }) +
          h.h3({ en: 'The prior art is named with its flaws', zh: '先前技術被連同缺點一起點名' }) +
          h.p({
            en: '**Decoy engineering** already works: swapping the cleavage site in the *Arabidopsis* immune protein PBS1 induced resistance to several viruses and pathogenic bacteria. But PBS1 only triggers an immune response **by activating the NLR RPS5, which most crops do not have or where it is unknown.** So you must either transform the exogenous gene, which can reduce yield in high-performing strains, or study it extensively first, which slows down fast and modular development. And the transgenic nature of the result makes it unattractive for the European market.',
            zh: '**Decoy engineering** 已經可行：在阿拉伯芥免疫蛋白 PBS1 中替換切割位，就能誘導對數種病毒與病原細菌的抗性。但 PBS1 之所以能引發免疫反應，是**透過活化 NLR RPS5，而大多數作物沒有它、或根本不知道它在哪。**所以你要嘛把外源基因轉進去——這在高產品系中可能降低產量——要嘛先大量研究它，而那會拖慢快速而模組化的開發。而且結果屬於基改，使它在歐洲市場缺乏吸引力。'
          }) +
          h.warn({
            en: '**The bottleneck they set out to solve is a knowledge gap, stated as a question:** *"Which amino acid motif is cut by protease XY?"* Only a few plant pathogen proteases are well characterised, and for even fewer are the substrates known, let alone the exact cleavage motifs. That question is why ProTEUS exists.',
            zh: '**他們設定要解決的瓶頸是一個知識缺口，而且被寫成一個問句：***「蛋白酶 XY 切的是哪一個胺基酸 motif？」*只有少數幾個植物病原蛋白酶被好好特性化過，而知道其底物——更別說確切切割 motif——的更少。這個問題就是 ProTEUS 存在的理由。'
          }) +
          h.take({ en: 'A regulation used as a design specification', zh: '一條法規被當成設計規格' }, {
            en: 'Because EU legislation on plants obtained by new genomic techniques is restrictive about insertions, their **first experimental goal was explicitly how small the blocker can be while still suppressing HR**, so that the engineered sensor can qualify as an **NGT-1** plant under the incoming rules. The size of a peptide, chosen by a law rather than by convenience.',
            zh: '因為歐盟對「以新基因技術取得的植物」在插入序列上的規範相當嚴格，他們的**第一個實驗目標被明確設定為：阻斷子最小可以做到多小、而仍能抑制超敏反應**——這樣改造後的感測器才能在即將上路的規範下符合 **NGT-1** 的資格。一段胜肽的長度，是由一條法律決定的，不是由方便決定的。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'u-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Three things a platform needs, attacked separately', zh: '一個平台需要的三件事，分開攻' },
        lede: {
          en: 'Their own framing: a platform needs a reliable screening method, transmission to several crops, and demonstration across pathogen kingdoms. So the experiments are organised as four blocks, each attacking one of those and "identifying key challenges and bottlenecks".',
          zh: '他們自己的框架：一個平台需要可靠的篩選方法、能轉移到數種作物，以及在不同病原界別上的示範——所以實驗被組織成四個區塊，各自攻其中一項，並「找出關鍵挑戰與瓶頸」。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'P.A.C. Immunity: a screen rebuilt, and a pipeline that fills a knowledge gap', zh: 'P.A.C. Immunity：一個被重建的篩選，以及一條填補知識缺口的流程' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Results and Model pages.', zh: '由我們依該隊 Description、Results、Model 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- two screens ---------------- */
      out += h.sec({
        id: 'u-screen',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The cheap screen, and what they did when it could not be read', zh: '那個便宜的篩選，以及它讀不出來之後他們做了什麼' },
        body:
          h.phases([
            { h: { en: 'The E. coli screen, designed to protect the expensive experiment', zh: '大腸桿菌篩選，設計目的是保護那個昂貴的實驗' },
              p: { en: 'The logic is written first: find out whether the protease cuts the site **"before investing weeks and a significant amount of resources into plant experiments."**', zh: '邏輯先寫在前面：先搞清楚蛋白酶會不會切這個位點，**「在把好幾週與大量資源投進植物實驗之前」。**' },
              items: [
                { en: 'Design: a protease cleavage site flanked by two **6×His-tagged** proteins: **sfGFP** (chosen over GFP for stability against degradation) and **TrxA** (chosen because it is native to *E. coli*, "to minimize the risk of unpredictable issues associated with heterologous proteins"). Both were tagged deliberately: *"we could distinguish them by size and two signals are better than one."* Expected bands: **42 kDa uncut, 27 kDa GFP + 12 kDa TrxA cut.**', zh: '設計：一個蛋白酶切割位，兩側各接一個帶 **6×His 標籤**的蛋白——**sfGFP**（選它而不是 GFP，是因為它對降解更穩定）與 **TrxA**（選它是因為它本來就是大腸桿菌的蛋白，「以降低異源蛋白帶來不可預期問題的風險」）。兩者都刻意加標籤：*「我們可以用大小把它們分開，而兩個訊號比一個好。」*預期條帶：**未切 42 kDa、切了之後 GFP 27 kDa＋TrxA 12 kDa。**' },
                { en: 'The plasmid pair is engineered for the stoichiometry the assay needs: substrate on **high-copy pET28b**, protease on **low-copy pACYCDuet-1 with a different origin of replication so the two do not compete**. The imbalance is justified, since one protease turns over many substrate molecules.', zh: '質體配對是為這個試驗所需的化學計量而設計的：底物放在**高拷貝的 pET28b**，蛋白酶放在**低拷貝、而且複製起點不同的 pACYCDuet-1，讓兩者不會互相競爭**——而這個不平衡是有理由的，因為一個蛋白酶會轉換很多個底物分子。' },
                { en: 'Four GS-linker variants, **because the optimal linker length was unknown**. NIaCS03 carries the AQGSGASQN blocking peptide, so the extra residues the plant construct will need could be tested for steric interference in advance. And **NIaCS03M carries a mutated cleavage site as the negative control.**', zh: '四種 GS 連接子版本，**因為最佳連接子長度未知**——其中 NIaCS03 帶有 AQGSGASQN 阻斷胜肽，讓植物構建體將來需要的那些額外殘基能先被測試是否造成立體阻礙；而 **NIaCS03M 帶有突變的切割位，作為陰性對照。**' },
                { en: 'A practical note published rather than hidden: the cleavage-site sequences were **too short to resolve on a gel**, so complementary oligos were annealed into a few-hundred-bp fragment and inserted by Golden Gate through a BsaI dropout.', zh: '一個被公開而不是被藏起來的實務細節：切割位序列**太短，在膠上分不開**，所以他們把互補的寡核苷酸互相黏合成一個數百 bp 的片段，再透過 BsaI 置換以 Golden Gate 插入。' },
                { en: 'Three proteases, each with a stated reason: **NIa-Pro** from potato virus Y (literature-validated to cleave its site and induce HR in *N. benthamiana*, and it attacks the crop their human practices work pointed at), plus **AvrPphB** and **AvrRpt2** from two *Pseudomonas syringae* pathovars as well-characterised bacterial controls. Each **Myc-tagged**, so expression is separately checkable.', zh: '三個蛋白酶，各有明確理由：來自馬鈴薯 Y 病毒的 **NIa-Pro**（文獻已驗證它能切自己的位點並在 *N. benthamiana* 中誘導超敏反應，而且它攻擊的正是他們社會實踐工作指向的那個作物），以及來自兩個 *Pseudomonas syringae* 致病變種的 **AvrPphB** 與 **AvrRpt2**，作為已被充分特性化的細菌對照。每一個都**加上 Myc 標籤**，讓表達能被單獨檢查。' }
              ],
              done: { en: 'A cheap, fast screen with a negative control and a protease-expression check built in. And then it failed.', zh: '一個便宜、快速、內建陰性對照與蛋白酶表達檢查的篩選——然後它失敗了。' } },
            { h: { en: 'The result is a negative one, and they publish it as such', zh: '結果是負面的，而他們就這樣公開' },
              p: { en: 'The anti-His blot showed the 42 kDa construct where expected. But a **27 kDa GFP band appeared in the pET28b-only samples that carry no protease at all**, and also **in the mutated-site negative control.**', zh: 'anti-His 墨點在預期的位置顯示出 42 kDa 的構建體。但**一條 27 kDa 的 GFP 帶出現在只有 pET28b、完全不含蛋白酶的樣品中**，而且**也出現在突變切位的陰性對照中。**' },
              items: [
                { en: 'The conclusion is drawn against their own assay: **"These findings implied that our PCS construct was cleaved by something other than our NIa-Pro protease."**', zh: '結論是對自己的試驗下的：**「這些發現意味著我們的切割位構建體是被某個不是 NIa-Pro 的東西切開的。」**' },
                { en: 'On the protease side, NIa-Pro was detectable at 29 kDa alone, but **no protease band appeared in any sample carrying both plasmids**, and AvrPphB and AvrRpt2 gave nothing.', zh: '在蛋白酶那一側，NIa-Pro 單獨存在時可在 29 kDa 偵測到，但**在任何同時帶兩個質體的樣品中都沒有出現蛋白酶條帶**，而 AvrPphB 與 AvrRpt2 完全沒有訊號。' },
                { en: 'They then ran **Ponceau total-protein staining as a non-specific cross-check**, noted bands near the right masses for AvrRpt2 (22 kDa) and AvrPphB (24 kDa), **and immediately undercut it**, because the other samples showed a band at that position too.', zh: '接著他們做了**Ponceau 全蛋白染色作為非專一性的交叉檢查**，注意到 AvrRpt2（22 kDa）與 AvrPphB（24 kDa）附近有大小吻合的條帶——**然後立刻把它推翻**，因為其他樣品在同一個位置也有一條帶。' }
              ] },
            { h: { en: 'Rebuilt as FRET, with the control the first assay lacked', zh: '改建成 FRET，並補上第一個試驗缺少的那個對照' },
              p: { en: 'They switched to **FRET** for a quantifiable output: **mTurquoise** as donor (Ex 442 / Em 465–505 nm) and **cpVenus173** as acceptor (Ex 514 / Em 525–555 nm) flanking the cleavage site, so cleavage separates the fluorophores and the emission ratio drops; and **NIa-Pro N-terminally fused to mScarlet-I** so protease expression is visible in the same image.', zh: '他們改用 **FRET** 以取得可量化的輸出：**mTurquoise** 當供體（激發 442／發射 465–505 nm）、**cpVenus173** 當受體（激發 514／發射 525–555 nm），兩者夾住切割位，於是切割會把兩個螢光團分開、發射比值下降；而 **NIa-Pro 的 N 端融合 mScarlet-I**，讓蛋白酶的表達在同一張影像裡就看得見。' },
              items: [
                { en: 'Cloned by **GreenGate**, assembling six modules (UBQ10 promoter, THsp18.2M terminator, both fluorophores, HygB cassette) into pGGZ004 **in one reaction**. And once the first construct existed they used it as a **composite part**, so the remaining four could skip the pGGC intermediate step: a cloning shortcut created and then contributed to the Registry.', zh: '以 **GreenGate** 選殖，把六個模組——UBQ10 啟動子、THsp18.2M 終止子、兩個螢光團、HygB 卡匣——**一次反應**組進 pGGZ004。而第一個構建體一做出來，他們就把它當成**複合零件**使用，讓剩下四個可以跳過 pGGC 中間步驟：一個被創造出來、接著被貢獻到 Registry 的選殖捷徑。' },
                { en: '**Order of operations as risk management, stated:** they verified sensor expression in *N. benthamiana* epidermal cells by confocal microscopy **after cloning the first construct and before cloning the other four**, "to avoid wasting time and resources".', zh: '**操作順序被當成風險管理，而且明說：**他們在**做完第一個構建體之後、開始做另外四個之前**，就先用共軛焦顯微確認感測器在 *N. benthamiana* 表皮細胞中有表達，「以避免浪費時間與資源」。' },
                { en: 'Results, n = 5 images per condition, Welch\'s two-sided t-test at p < 0.01: **CS01 and CS02 showed a significant drop in emission ratio with NIa-Pro**. Cleavage. **CS03 showed no significant difference. And CS03M, the mutated negative control, dropped significantly too.**', zh: '結果，每個條件 n = 5 張影像，以 Welch 雙尾 t 檢定、p < 0.01：**CS01 與 CS02 在有 NIa-Pro 時發射比值顯著下降**——有切割。**CS03 沒有顯著差異。而 CS03M，那個突變的陰性對照，也顯著下降了。**' }
              ] }
          ]) +
          h.warn({
            en: 'Rather than claiming the half that worked, they declare the comparison broken: **"Because CS03M differs from CS03 only in its PCS, the results are likely flawed and should be repeated."** And the stated next step is the missing control, not a new experiment: **repeat with a mutated PCS in CS01 and CS02**, which "would serve as negative controls and should show no FRET reduction in the presence of NIa-Pro".',
            zh: '他們沒有只拿成功的那一半來主張，而是直接宣告這個比較壞了：**「因為 CS03M 與 CS03 只差在切割位，這些結果很可能是有缺陷的，應該重做。」**而他們寫下的下一步是補上缺少的對照，不是做一個新實驗：**在 CS01 與 CS02 上用突變的切割位重做**，那些「可以作為陰性對照，而且在有 NIa-Pro 時應該不會出現 FRET 下降」。'
          }) +
          h.take({ en: 'And they separate two explanations that would look identical', zh: '而且他們把兩個看起來一樣的解釋分開' }, {
            en: 'CS03\'s linkers are **asymmetric: the N-terminal one is 10 amino acids longer than the C-terminal.** That could **sterically block protease access** *and* it could **lower the baseline FRET signal**, since FRET efficiency falls steeply with donor–acceptor distance. Two mechanisms that produce the same flat result, named separately rather than collapsed into one convenient story.',
            zh: 'CS03 的連接子是**不對稱的——N 端那一段比 C 端長 10 個胺基酸。**這可能**在立體上阻礙蛋白酶接近**，*也*可能**降低 FRET 的基線訊號**，因為 FRET 效率隨供體—受體距離急遽下降。兩個會產生同一個「持平結果」的機制，被分開指出，而不是被壓縮成一個方便的說法。'
          }) +
          h.note({
            en: '**The result that makes the method usable:** no cleavage of the FRET sensor by **endogenous *N. benthamiana* proteases**, so no-protease samples are reliable negative controls. *"This separates the FRET-based screening method from our approach in E. coli."* They also note the method generalises: planned for plants, usable **in any organism**, and contributed as an interchangeable cloning method for protease-cleavage evaluation.',
            zh: '**讓這個方法可用的那個結果：**FRET 感測器**沒有被 *N. benthamiana* 的內源蛋白酶**切割，所以不含蛋白酶的樣品是可靠的陰性對照——*「這就把這個基於 FRET 的篩選方法與我們在大腸桿菌中的做法區分開來。」*他們也指出這個方法可以通用：原本是為植物設計的，但**在任何生物中都可用**，並作為一種可互換的選殖方法貢獻出來，供蛋白酶切割評估使用。'
          })
      });

      /* ---------------- blocker ---------------- */
      out += h.sec({
        id: 'u-blocker',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'The blocker, and controls for a phenotype you read by eye', zh: '阻斷子，以及為「靠眼睛判讀的表現型」設的對照' },
        body:
          h.p({
            en: 'The model NLR is *A. thaliana* **AtNRG1.1**, autoactivated by the **D485V** substitution in the MHD motif (written aAtNRG1.1). Cloning: aAtNRG1.1 with an N-terminal dropout into **pLab12.10** by Gibson. Because the backbone is ~12 kbp and **"Gibson assembly becomes inefficient with very large components, it was amplified in two fragments"**. The dropout was then swapped for four blocker lengths by Golden Gate with PaqCI.',
            zh: '模型 NLR 是阿拉伯芥的 **AtNRG1.1**，透過 MHD motif 上的 **D485V** 置換使其自活化（寫成 aAtNRG1.1）。選殖方式：以 Gibson 把帶 N 端置換序列的 aAtNRG1.1 接入 **pLab12.10**——而因為骨架約 12 kbp，而且**「Gibson 組裝在元件非常大時效率會變差，所以它被分成兩個片段擴增」**——接著用 PaqCI 做 Golden Gate，把置換序列換成四種長度的阻斷子。'
          }) +
          h.take({ en: 'The negative control differs in exactly one thing', zh: '陰性對照只差在一件事上' }, {
            en: 'They made it **by reverting the autoactivating mutation by site-directed mutagenesis**: the identical construct, minus the one substitution that matters. Not a different plasmid, not an empty vector: the same construct with D485V put back to D.',
            zh: '他們是**用定點突變把那個自活化突變回復**來做出陰性對照的——完全相同的構建體，只少了那一個關鍵置換。不是另一個質體、不是空載體：同一個構建體，只是把 D485V 改回 D。'
          }) +
          h.ul([
            { en: '**A p19-only infiltration** was included to rule out the agroinfiltration helper strain as the cause of necrosis. p19 is used in every infiltration, and a phenotype it caused would be indistinguishable from the one they want.', zh: '**只打 p19 的浸潤組**被納入，用來排除農桿菌浸潤的輔助菌株本身造成細胞死亡的可能——因為每次浸潤都會用到 p19，而由它造成的表現型與他們想看的那個無法區分。' },
            { en: '**Trypan blue staining on a separate batch of plants**, to check for necrosis that is not visible to the eye, so "no necrosis" means no cell death rather than no *visible* cell death.', zh: '**在另一批植株上做 trypan blue 染色**，檢查是否有肉眼看不到的細胞死亡——這樣「沒有細胞死亡」才是真的沒有細胞死亡，而不是沒有*看得見的*細胞死亡。' },
            { en: 'Result: aAtNRG1.1 gave strong punctate necrosis at 7 days post infiltration; **native AtNRG1.1 and p19 alone gave none, confirmed by trypan blue.** Three biological replicates for infiltration, one for the staining, each with three technical replicates. The numbers are stated.', zh: '結果：aAtNRG1.1 在浸潤後第 7 天出現明顯的點狀壞死；**原生 AtNRG1.1 與只打 p19 的組都沒有，並經 trypan blue 確認。**浸潤做了三個生物重複、染色做了一個，各有三個技術重複——而這些數字都被寫出來。' },
            { en: 'All AtNRG1.1 variants were **HA-tagged C-terminally** and NIa-Pro **Myc-tagged**, so expression is checkable by Western blot alongside the visual phenotype. The phenotype is never the only evidence.', zh: '所有 AtNRG1.1 變異體都在 **C 端加 HA 標籤**、NIa-Pro 加 **Myc 標籤**，所以表達可以用西方墨點與視覺表現型並行檢查——表現型從來不是唯一的證據。' }
          ]) +
          h.p({
            en: 'Reported outcomes: **HR successfully blocked using minimal blockers**; **HR induced when the minimal constructs were co-infiltrated with the corresponding protease**; and **effective blocking with blockers that presumably conform to NGT-1**. The regulatory target met at the level of evidence they actually have, with "presumably" doing the work.',
            zh: '報告的結果：**以最小化阻斷子成功阻斷超敏反應**；**當最小化構建體與對應蛋白酶共同浸潤時誘導出超敏反應**；以及**用「推測符合 NGT-1」的阻斷子達成有效阻斷**——法規目標在他們實際擁有的證據強度上被達成，而「推測」這個詞承擔了該承擔的保留。'
          }) +
          h.h3({ en: 'And the two directions a platform must extend in', zh: '以及一個平台必須延伸的兩個方向' }) +
          h.cards([
            { chips: [{ t: { en: 'crops', zh: '作物' }, k: 'b' }],
              h: { en: 'Autoactivity induced in partly undescribed crop NLRs', zh: '在部分未被描述的作物 NLR 中誘導出自活性' },
              p: { en: 'Then **blocked by N-terminal insertion**, and then **"indications for HR induction of crop NLR when co-infiltrated with the corresponding protease."** The hedge is theirs: three steps, with the third stated as an indication rather than a demonstration.', zh: '接著**以 N 端插入序列阻斷**，然後是**「當與對應蛋白酶共同浸潤時，作物 NLR 出現超敏反應誘導的跡象」。**那個保留語是他們自己寫的——三個步驟，而第三步被寫成「跡象」而不是「證明」。' } },
            { chips: [{ t: { en: 'kingdoms', zh: '界別' }, k: 'v' }],
              h: { en: 'Bacterial proteases, assessed in N. benthamiana', zh: '在 N. benthamiana 中評估細菌蛋白酶' },
              p: { en: 'HR induction by bacterial proteases was assessed, with **"indications"** that an engineered sensor carrying the matching cleavage site fires. The platform claim across pathogen kingdoms is therefore carried by the same word.', zh: '他們評估了細菌蛋白酶誘導超敏反應的情形，並有**「跡象」**顯示帶有對應切割位的改造感測器會啟動。所以「跨病原界別」的平台主張也是由同一個詞承擔的。' } }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'u-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'ProTEUS: a binder pipeline pointed at a catalytic cavity', zh: 'ProTEUS——把結合蛋白設計流程指向一個催化腔' },
        lede: {
          en: 'Protease Target Elucidation Using Structural Modeling. Built for proteases with no characterised substrate at all, which is what no existing tool does.',
          zh: 'Protease Target Elucidation Using Structural Modeling。它是為「完全沒有已特性化底物」的蛋白酶而建的，而這正是現有工具都不做的事。'
        },
        body:
          h.p({
            en: '**The problem framed as a number:** a recognition site spans about seven residues, i.e. **1.28 × 10⁹ combinations**, so random screening is impossible. And the existing tools answer a different question: PROSPER, PROSPERous, Procleave and iProt-Sub all predict **where a given substrate protein is cut**, are trained models, and only cover proteases with **30 or more described cleavage sites.** The classical alternatives are named with their costs too: one-substrate-at-a-time immunoblots need a hypothesis first, and LC-MS/MS peptide libraries need dedicated proteomics infrastructure.',
            zh: '**問題被寫成一個數字：**一個辨識位約七個殘基，也就是 **1.28×10⁹ 種組合**，所以隨機篩選不可能。而現有工具回答的是另一個問題：PROSPER、PROSPERous、Procleave 與 iProt-Sub 都是在預測**一個給定的底物蛋白會在哪裡被切**，它們都是訓練好的模型，而且只涵蓋那些**已描述 30 個以上切割位**的蛋白酶。傳統替代方案也連同代價一起被點名：一次一個底物的免疫墨點需要先有假設，而 LC-MS/MS 胜肽庫需要專屬的蛋白體學設施。'
          }) +
          h.flow({
            title: { en: 'A de novo binder pipeline, repurposed to fill a catalytic pocket', zh: '一條從零設計結合蛋白的流程，被改用來填進催化口袋' },
            sub: { en: 'Instead of designing a binder for a surface, design a short peptide that fits a protease\'s catalytic cavity.', zh: '不是為一個表面設計結合蛋白，而是設計一段能剛好嵌進蛋白酶催化腔的短胜肽。' },
            stages: [
              { label: { en: 'Structure', zh: '結構' }, sub: { en: 'AlphaFold3 on four proteases with no crystal structure', zh: '對四個沒有晶體結構的蛋白酶跑 AlphaFold3' }, tone: 'b',
                items: [{ en: 'pLDDT reported per catalytic-triad residue, not only globally', zh: 'pLDDT 逐一報告催化三元組各殘基，而不只是整體值' }] },
              { label: { en: 'Hotspots', zh: '熱點' }, sub: { en: 'Align against well-characterised proteases to locate key binding regions', zh: '對照已充分特性化的蛋白酶做比對，定出關鍵結合區' }, tone: 'v' },
              { label: { en: 'Backbones', zh: '主鏈' }, sub: { en: 'RFdiffusion3, thousands per protease', zh: 'RFdiffusion3，每個蛋白酶數千個' }, tone: 'v',
                items: [{ en: 'filtered on distance to the catalytic triad: clashes and too-far designs rejected', zh: '依「到催化三元組的距離」篩選：碰撞與距離太遠的設計被剔除' }] },
              { label: { en: 'Sequences', zh: '序列' }, sub: { en: 'LigandMPNN, several per backbone, duplicates removed', zh: 'LigandMPNN，每個主鏈數條，去除重複' }, tone: 'g' },
              { label: { en: 'Complexes', zh: '複合體' }, sub: { en: 'AlphaFold3 again, on each unique sequence with its protease', zh: '再跑一次 AlphaFold3，把每條獨特序列與其蛋白酶一起預測' }, tone: 'g',
                items: [{ en: '13 minutes per design optimised down to 30 seconds', zh: '每個設計從 13 分鐘最佳化到 30 秒' }] },
              { label: { en: 'Rank', zh: '排序' }, sub: { en: 'By the geometry and chemistry of the cleavage mechanism itself', zh: '依切割機制本身的幾何與化學條件' }, tone: 'a',
                items: [{ en: 'top 100 candidates per protease go to the bench', zh: '每個蛋白酶的前 100 個候選進入實驗檯' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Model page.', zh: '由我們依該隊 Model 頁繪製。' }
          }) +
          h.take({ en: 'The scoring function exists because of an interview', zh: '這個評分函數之所以存在，是因為一次訪談' }, {
            en: 'From a conversation with Lasse Middendorf, Michel Stevens and Michel Westerman they took the point that **AlphaFold predicting a peptide sitting in an active site cannot be equated with that peptide being cleaved.** So instead of ranking by predicted binding, they built a ranking from the **geometric and chemical prerequisites of the cleavage mechanism itself**: nucleophilic attack distance, key hydrogen-bond distances, and more complex interlocking constraints such as the **face of attack** and the **conformer of the nucleophile side chain.** Derived from serine-protease catalysis as the standard model and then applied to cysteine proteases, **with that substitution declared.**',
            zh: '在與 Lasse Middendorf、Michel Stevens 與 Michel Westerman 的談話中，他們接受了這個觀點：**AlphaFold 預測一段胜肽坐在活性位裡，不能等同於那段胜肽會被切斷。**所以他們不是依預測的結合力排序，而是從**切割機制本身的幾何與化學前提**建立排序：親核攻擊距離、關鍵氫鍵距離，以及更複雜的連鎖幾何限制，例如**攻擊面**與**親核基側鏈的構形**。這些推導是以絲胺酸蛋白酶的催化作為標準模型，再套用到半胱胺酸蛋白酶上，**而這個替換被明確聲明。**'
          }) +
          h.p({
            en: 'Parameters are extracted from the AlphaFold3 output by a Python script using **vector algebra, "so that values may be calculated quickly and with high accuracy"**, scored with selected weights, and the program is written to be **rapidly re-adaptable to other protease types.** A limitation found rather than hidden: **short peptides tend to be disordered, so their structure predictions are less reliable**, assessed via pLDDT and PAE across the protease–peptide interface.',
            zh: '參數由一個 Python 腳本從 AlphaFold3 的輸出中抽取，使用**向量代數，「以便快速且高精度地計算這些數值」**，再以選定的權重評分；而程式的寫法讓它能**快速重新適配到其他類型的蛋白酶。**一個被找出來而不是被藏起來的限制：**短胜肽傾向於無序，所以它們的結構預測比較不可靠**，這一點是透過蛋白酶—胜肽界面上的 pLDDT 與 PAE 來評估的。'
          }) +
          h.fig({
            kind: 'funnel',
            tag: { en: 'VALIDATION', zh: '驗證' },
            title: { en: 'Validated on the one protease whose answer is already published', zh: '在唯一一個答案已公開的蛋白酶上做驗證' },
            sub: { en: 'NIa-Pro has a known consensus. Recovering it is the positive control that gives the four unknowns any standing.', zh: 'NIa-Pro 有已知的共識序列。把它找回來，就是讓另外四個未知蛋白酶站得住腳的那個陽性對照。' },
            data: [
              { label: { en: 'Combinations in a ~7-residue recognition site', zh: '約 7 個殘基辨識位的組合數' }, v: 1280000000, note: { en: 'why random screening is impossible', zh: '這就是隨機篩選不可行的原因' } },
              { label: { en: 'Backbones generated per protease', zh: '每個蛋白酶生成的主鏈數' }, v: 1000, note: { en: '"thousands", coarsely filtered for proper binding sites', zh: '「數千個」，再粗篩出位置正確的結合位' } },
              { label: { en: 'Candidates taken to wet-lab screening', zh: '進入濕式篩選的候選數' }, v: 100, note: { en: 'the top 100 per protease, by the geometry score', zh: '依幾何分數取每個蛋白酶的前 100 個' } },
              { label: { en: 'Known NIa-Pro consensus residues recovered', zh: '找回的 NIa-Pro 已知共識殘基數' }, v: 3, note: { en: 'E/P6, V/P4 and Q/P1, among the top 100', zh: 'E/P6、V/P4 與 Q/P1，都在前 100 名內' } }
            ],
            opts: { log: true, dec: 0 },
            caption: { en: 'Counts read from the team\'s Model page; the backbone count is their word "thousands", plotted at 1,000 as a floor.', zh: '數字讀自該隊 Model 頁；主鏈數是他們寫的「數千個」，這裡以 1,000 作為下界繪製。' }
          }) +
          h.warn({
            en: 'Then the four unknowns, all type III secretion system effector cysteine proteases, each with its catalytic triad published: **RipT** (Cys123/His245/Asn264), **RipE1** (Cys175/His206/Asp226), **RipBN** (Cys128/His214/Asp232) from *Ralstonia*, and **HopN1** (Cys172/His283/Asp299) from *P. syringae* pv. tomato DC3000. For these ProTEUS "pinpointed potentially important residues", and in screening they **identified potential hits for HopN1, RipBN and RipT**, immediately followed by **"but the screening assay needs further refinement to confirm these results."** That caveat sits in the first paragraph of the model page, not in a footnote.',
            zh: '接著是那四個未知的——全部都是第三型分泌系統效應子半胱胺酸蛋白酶，而且各自的催化三元組都被公開：來自 *Ralstonia* 的 **RipT**（Cys123/His245/Asn264）、**RipE1**（Cys175/His206/Asp226）、**RipBN**（Cys128/His214/Asp232），以及來自 *P. syringae* pv. tomato DC3000 的 **HopN1**（Cys172/His283/Asp299）。對這些，ProTEUS「指出了可能重要的殘基」，而在篩選中他們**為 HopN1、RipBN 與 RipT 找到了潛在命中**——緊接著就是**「但這個篩選試驗仍需進一步改良，才能確認這些結果。」**那句警語就寫在模型頁的第一段，不是放在註腳裡。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'u-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Seven things that did not work, and a hedge used consistently', zh: '七件沒成功的事，以及一個被一致使用的保留語' },
        body:
          h.ul([
            { en: '**The *E. coli* screen:** the construct was cleaved **in samples with no protease and in the mutated-site control**, so something other than NIa-Pro cut it. The screen is reported as uninterpretable rather than read selectively.', zh: '**大腸桿菌篩選：**那個構建體**在不含蛋白酶的樣品與突變切位對照中都被切開了**，所以切它的是別的東西。這個篩選被報告為「無法判讀」，而不是被選擇性地讀。' },
            { en: '**No protease band** was detectable in any double-plasmid sample; AvrPphB and AvrRpt2 were undetected by Western blot, and the **Ponceau cross-check was inconclusive** because the control lanes matched too.', zh: '**在任何雙質體樣品中都偵測不到蛋白酶條帶**；AvrPphB 與 AvrRpt2 在西方墨點上完全沒有訊號，而 **Ponceau 的交叉檢查無法定論**，因為對照道也出現了同樣的條帶。' },
            { en: '**The FRET negative control CS03M cleaved**, so the CS03/CS03M comparison is "likely flawed and should be repeated"; the missing CS01/CS02 mutated controls are named as the next experiment.', zh: '**FRET 的陰性對照 CS03M 也被切了**，所以 CS03／CS03M 的比較「很可能有缺陷，應該重做」；而缺少的 CS01／CS02 突變對照被列為下一個實驗。' },
            { en: '**CS03 showed no cleavage**, with two candidate explanations (steric hindrance from the asymmetric linker, or a lower baseline FRET from the greater donor–acceptor distance) and **no claim between them.**', zh: '**CS03 沒有出現切割**，有兩個候選解釋（不對稱連接子造成的立體阻礙，或供體—受體距離變大造成基線 FRET 下降），而他們**在兩者之間不做主張。**' },
            { en: '**ProTEUS\'s short-peptide predictions are less reliable** because the peptides tend to be disordered. A limitation of the method, stated as one.', zh: '**ProTEUS 對短胜肽的預測比較不可靠**，因為那些胜肽傾向於無序——這是方法本身的限制，而他們就當成限制寫出來。' },
            { en: '**Crop-NLR and bacterial-protease HR results are reported as "indications"**, not demonstrations. The same word in both places, which is what makes it a convention rather than a slip.', zh: '**作物 NLR 與細菌蛋白酶的超敏反應結果都被報告為「跡象」**，而不是「證明」——兩處用同一個詞，這讓它成為一個慣例，而不是一次筆誤。' },
            { en: '**The protease screening assay "needs further refinement"** before the three hits count, and that sentence is in the model page\'s abstract.', zh: '**那個蛋白酶篩選試驗「仍需進一步改良」**，三個命中才算數——而這句話就寫在模型頁的摘要裡。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'u-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Muenster-University', zh: '我們會從 Muenster-University 抄什麼' },
        body:
          h.ul([
            { en: '**Build the cheap screen to protect the expensive one.** When it fails, say what it cannot tell you instead of reading the lanes you like.', zh: '**做那個便宜的篩選來保護昂貴的那個**——而當它失敗時，說清楚它無法告訴你什麼，而不是只讀你喜歡的那幾道。' },
            { en: '**Tag both halves of a cleavage reporter.** "Two signals are better than one" is the whole reason they could see that cleavage happened without the protease.', zh: '**在切割報告系統的兩半都加標籤。**「兩個訊號比一個好」正是他們之所以能看出「沒有蛋白酶也發生了切割」的全部原因。' },
            { en: '**Engineer the copy-number asymmetry the assay needs**, and justify it from enzyme turnover rather than from convenience.', zh: '**為試驗所需的拷貝數不對稱做工程設計**，並以酵素轉換率、而不是以方便為理由。' },
            { en: '**Check the first construct in the destination organism before cloning the other four.** It costs one confocal session and can save a month.', zh: '**在做另外四個之前，先在目標生物中檢查第一個構建體。**代價是一次共軛焦顯微，可能省下一個月。' },
            { en: '**Control for the phenotype you cannot see.** Trypan blue for invisible necrosis, and a helper-strain-only infiltration for necrosis caused by the method rather than the construct.', zh: '**為你看不見的表現型設對照。**用 trypan blue 抓看不見的細胞死亡，用只打輔助菌株的浸潤抓「由方法而不是構建體造成」的細胞死亡。' },
            { en: '**Make the negative control by reverting the one mutation**, so the control differs in exactly one thing and nothing else has to be argued.', zh: '**用「把那一個突變回復」的方式做陰性對照**，讓對照只差在一件事上，其他就不必再爭論。' },
            { en: '**Separate two explanations that would look identical in the data** instead of picking the one that reads better.', zh: '**把兩個在數據上看起來一樣的解釋分開**，而不是挑讀起來比較順的那一個。' },
            { en: '**Validate a de novo design pipeline on the one target whose answer is published.** Recovering E/P6, V/P4 and Q/P1 for NIa-Pro is what gives the four unknown proteases any credibility at all.', zh: '**在唯一一個答案已公開的標靶上驗證你的從零設計流程。**為 NIa-Pro 找回 E/P6、V/P4 與 Q/P1，才是讓那四個未知蛋白酶的結果具有可信度的原因。' },
            { en: '**Let an interview change the model\'s architecture, not its wording.** "Binding is not cleavage" became a scoring function built from catalytic geometry.', zh: '**讓一次訪談改變模型的架構，而不只是改變措辭。**「結合不等於切割」變成了一個由催化幾何建構出來的評分函數。' },
            { en: '**Let the regulation set a design parameter.** "How small can the blocker be" is an NGT-1 question answered at the bench, which is a better reason for an experiment than curiosity.', zh: '**讓法規決定一個設計參數。**「阻斷子可以做到多小」是一個在實驗檯上回答的 NGT-1 問題，而那是比好奇心更好的實驗理由。' },
            { en: '**Keep the caveat in the abstract.** "The screening assay needs further refinement to confirm these results" sits in the first paragraph of the model page, where a reader cannot miss it.', zh: '**把警語留在摘要裡。**「這個篩選試驗仍需進一步改良，才能確認這些結果」就寫在模型頁的第一段，讓讀者不可能漏看。' },
            { en: '**Use one hedge word consistently.** "Indications" appears in the same sense in both extension experiments, which turns a hedge into a reportable standard of evidence.', zh: '**一致地使用同一個保留語。**「跡象」在兩個延伸實驗中都以相同意義出現，這讓一個保留語變成一個可報告的證據等級。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that publishing an uninterpretable screen in full is what makes the rest of this wiki trustworthy. Everything else is the team\'s own, read from [2026.igem.wiki/muenster-university](https://2026.igem.wiki/muenster-university/).',
            zh: '標示為我們的看法：上面十二點，以及「把一個無法判讀的篩選完整公開，才是讓這個 wiki 其餘部分值得信任的原因」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/muenster-university](https://2026.igem.wiki/muenster-university/)。'
          })
      });

      return out;
    }
  };
})(window);
