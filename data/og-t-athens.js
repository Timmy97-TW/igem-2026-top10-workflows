/* Athens — ApiconIASIS. Top 10 Overgraduate and Best Conservation Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/athens/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Express four constructs', zh: '表達四個構建體' },
        s: { en: 'Two leads bare and fused to the AMP RR12; E. coli BL21(DE3); Ni-NTA with endotoxin removal', zh: '兩個先導各自裸體與融合抗菌肽 RR12；大腸桿菌 BL21(DE3)；Ni-NTA 並去內毒素' } },
      { l: { en: 'Rescue the solubility', zh: '搶救溶解度' },
        s: { en: '0.75 M trehalose in the lysis buffer: EndoLys 3.27 → 9.26 mg/L; fusions gained little', zh: '裂解液加 0.75 M 海藻糖：EndoLys 由 3.27 升到 9.26 mg/L；融合體幾乎沒改善' }, tone: 'a' },
      { l: { en: 'Kill the pathogen', zh: '殺死病原' },
        s: { en: 'OD₆₀₀ down 28.3 % at 1 µg/mL to 38.9 % at 100, against 5.1 % control drift', zh: 'OD₆₀₀ 在 1 µg/mL 下降 28.3%、100 µg/mL 下降 38.9%，對照漂移 5.1%' } },
      { l: { en: 'Counter-screen the gut', zh: '反向篩選腸道菌' },
        s: { en: 'L. apis and B. mellis — same order, same Gram stain: the harder test, not the easier one', zh: 'L. apis 與 B. mellis——同目、同革蘭氏染色：這是更難的測試，不是更簡單的' }, tone: 'g' },
      { l: { en: 'Hold it at midgut pH', zh: '在中腸 pH 下維持活性' },
        s: { en: '>74 % activity after 48 h at pH 5.5 and 6.7; fast decay at pH 4.0', zh: 'pH 5.5 與 6.7 下 48 小時後仍保有 >74% 活性；pH 4.0 下快速衰減' } }
    ],
    dry: [
      { l: { en: 'Mine 165 genomes', zh: '挖掘 165 個基因體' },
        s: { en: 'Dormant prophages in M. plutonius → 646 lytic enzyme genes → 169 → 115 → 2', zh: 'M. plutonius 中的休眠前噬菌體→646 個溶菌酶基因→169→115→2' } },
      { l: { en: 'Annotate with a second tool', zh: '用第二個工具再註解一次' },
        s: { en: 'InterPro-curated domains, AlphaFold + FoldSeek, then pLannotate from a different database', zh: 'InterPro 策展的功能域、AlphaFold＋FoldSeek，再用另一個資料庫的 pLannotate' } },
      { l: { en: 'Redesign for solubility', zh: '為溶解度重新設計' },
        s: { en: '40 frozen positions verified by MD; ThermoMPNN → ESM-2 filter → NSGA-II → ColabFold gate', zh: '40 個凍結位置由 MD 驗證；ThermoMPNN→ESM-2 篩選→NSGA-II→ColabFold 關卡' }, tone: 'g' },
      { l: { en: 'Fit the kill law', zh: '擬合殺菌動力學' },
        s: { en: 'Saturating Emax: φmax 0.006125 min⁻¹, KE 0.633 µg/mL, R² = 0.935', zh: '飽和型 Emax：φmax 0.006125 min⁻¹、KE 0.633 µg/mL、R²=0.935' }, tone: 'r' },
      { l: { en: 'Cost the plant', zh: '把產線算成錢' },
        s: { en: 'Seed train to a 105 L production fermenter: 51.62 g/L biomass, 2.55 g per batch', zh: '從種子鏈到 105 L 生產發酵槽：菌體 51.62 g/L、每批 2.55 g 產物' } }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the screen hands over exactly two candidates', zh: '篩選交出剛好兩個候選' }, up: true },
      { w: 1, d: 2, l: { en: 'the solubility prediction was wrong, so redesign', zh: '溶解度預測錯了，所以重新設計' } },
      { w: 2, d: 3, l: { en: 'the dose-response becomes the kill law', zh: '劑量反應變成殺菌動力學' } }
    ]
  };

  PD.pages['og-athens'] = {
    label: { en: 'Athens', zh: 'Athens' },
    title: { en: 'Athens — ApiconIASIS', zh: 'Athens — ApiconIASIS' },
    render: function (h) {
      var t = team('athens');
      var out = h.teamhero(t, {
        h1: {
          en: 'They fitted a kill law, and it told them ==their own season had worked on the wrong lever==.',
          zh: '他們擬合出一條殺菌動力學，而它告訴他們==自己整季都在拉錯的那根槓桿==。'
        },
        lede: {
          en: 'European Foulbrood has no treatment: past a threshold the colony is killed and the frames burned. ApiconIASIS mines 165 pathogen genomes for an endolysin a phage already evolved against it, expresses it, and shows it kills the pathogen without touching two honeybee gut commensals. Then the results page does something almost no iGEM wiki does: it reads its own four findings together, and concludes that the yield work was not the binding constraint, that its headline metric compresses the effect it measures, and that an earlier specificity argument does not survive its own reanalysis.',
          zh: '歐洲幼蟲病（European Foulbrood）沒有療法：超過一定門檻，整群蜂就被撲殺、巢框就地焚燒。ApiconIASIS 從 165 個病原基因體中挖出噬菌體早已針對它演化出的內溶素，把它表達出來，並證明它能殺死病原、卻不碰兩種蜜蜂腸道共生菌。然後他們的結果頁做了一件幾乎沒有 iGEM wiki 會做的事：把自己的四個發現放在一起讀，然後下結論說——產量工作並不是真正的瓶頸、他們的招牌指標會壓縮它所量測的效應，而他們先前的專一性論證撐不過自己的再分析。'
        },
        chips: [
          { t: { en: 'Phage endolysins', zh: '噬菌體內溶素' }, k: 'b' },
          { t: { en: 'Prophage genome mining', zh: '前噬菌體基因體挖掘' }, k: 'v' },
          { t: { en: 'Pareto redesign', zh: 'Pareto 重新設計' }, k: 'g' },
          { t: { en: 'Larval-gut PK model', zh: '幼蟲腸道藥動模型' }, k: 't' },
          { t: { en: 'Delivered by trophallaxis', zh: '以交哺遞送' }, k: 'a' }
        ],
        stats: [
          { v: '165 → 2', l: { en: 'Genomes screened to candidates carried forward', zh: '從基因體篩選到帶進下一步的候選' } },
          { v: '5.7 µg/mL', l: { en: 'Where 90 % of everything the enzyme can do is already present', zh: '在此濃度下酵素能做的事已有 90% 到位' } },
          { v: '1.53', l: { en: 'φmax/r — the ceiling no dose can raise', zh: 'φmax/r——任何劑量都提不高的上限' } },
          { v: '283', l: { en: 'Cells clearable in 48 h under the larva-safe cap', zh: '在幼蟲安全上限下 48 小時可清除的菌數' } },
          { v: '+2.15', l: { en: 'Percentage points of off-target effect per 10× dose, in B. mellis', zh: 'B. mellis 中每 10 倍劑量的脫靶效應（百分點）' } },
          { v: '~7×', l: { en: 'Less protein from the fusion than from its unfused parent', zh: '融合體比未融合親本少產出的倍數' } }
        ]
      });

      out += h.toc([
        { id: 'a-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'a-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'a-dry', t: { en: 'The screen', zh: '篩選流程' } },
        { id: 'a-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'a-model', t: { en: 'The kill law', zh: '殺菌動力學' } },
        { id: 'a-read', t: { en: 'Reading the numbers together', zh: '把數字合起來讀' } },
        { id: 'a-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'a-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'a-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A disease with no advocates, and three reasons why', zh: '一個沒有人替它說話的疾病，以及三個原因' },
        lede: {
          en: 'The standard treatment for European Foulbrood is fire. Because the disease is internationally notifiable, many countries legally mandate total culling, with up to three years of operational standstill.',
          zh: '歐洲幼蟲病的標準療法是火。因為這是國際應通報疾病，許多國家法律上強制全群撲殺，並附帶最長三年的營運停擺。'
        },
        body:
          h.p({
            en: 'The only pharmaceutical alternative is antibiotics, which are **unauthorised for beekeeping in the EU** because no maximum residue limit exists for honey, which strip the gut microbiome, and which risk resistance. Neither fire nor antibiotics is a treatment; both are what you do when there is no treatment.',
            zh: '唯一的藥物替代方案是抗生素，而它在歐盟**不被允許用於養蜂**，因為蜂蜜沒有最大殘留限量標準；它還會剝除腸道菌相，並有抗藥性風險。火與抗生素都不是療法；它們是「沒有療法時你會做的事」。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'invisible', zh: '看不見' }, k: 'v' }],
              h: { en: 'Most infected colonies show nothing', zh: '多數受感染的蜂群什麼症狀都沒有' },
              p: { en: 'In a survey of **855 Michigan colonies, 36 % carried *M. plutonius* and 72 % of those showed no symptoms at all**; in June more than half of all colonies were infected while 22 % showed clinical disease. "Official case counts record the colonies an inspector can see."', zh: '在一份針對**密西根州 855 群蜂的調查中，36% 帶有 *M. plutonius*，而其中 72% 完全沒有症狀**；六月時超過一半的蜂群已感染，但只有 22% 出現臨床病徵。「官方病例數記錄的，是檢查員看得到的那些蜂群。」' } },
            { chips: [{ t: { en: 'unculturable', zh: '難培養' }, k: 'b' }],
              h: { en: 'Hard to culture, so researchers left it alone', zh: '難以培養，所以研究者放著它不管' },
              p: { en: 'Which is also the argument for their method: mining sequenced genomes **sidesteps the exact bottleneck that kept the organism understudied**.', zh: '而這同時也是他們方法的論據：挖掘已定序的基因體**正好繞過了讓這個菌長期被研究不足的那個瓶頸**。' } },
            { chips: [{ t: { en: 'unblamed', zh: '不被歸咎' }, k: 't' }],
              h: { en: 'Rarely the sole cause, so rarely blamed', zh: '很少是唯一原因，所以很少被歸咎' },
              p: { en: 'Varroa and American Foulbrood have organised constituencies and biotechnological attention followed them. The beekeepers Athens spoke to who had hives burned "needed a treatment. None of them had anyone to say it to."', zh: 'Varroa 與美洲幼蟲病有組織化的受害者社群，而生技關注跟著他們走。那些曾被燒掉蜂箱、與 Athens 談過的養蜂人「需要一種療法。而他們沒有人可以對誰說這件事。」' } }
          ]) +
          h.h3({ en: 'They read their own country\'s null result against the method that produced it', zh: '他們拿自己國家的「零結果」去對照產生它的方法' }) +
          h.p({
            en: 'The EU-wide **EPILOBEE** programme recorded **no clinical cases across 161 Greek apiaries**. Rather than treating that as reassurance, the wiki takes it apart: EPILOBEE measured *clinical* prevalence, counting an apiary only if a colony showed visible symptoms confirmed by laboratory analysis — and **"a survey of visible disease cannot see a pathogen whose defining characteristic is that it stays invisible."** They then note that EFB is WOAH-listed and notifiable under Greek law but **does not appear among the bee diseases in the EU Animal Health Law**, so the European picture is assembled from national schemes of varying rigour. And Greece carries the structural feature associated with outbreaks elsewhere: **16.8 % of apiaries hold more than 150 colonies, against an EU mean of 2.9 %.**',
            zh: '歐盟層級的 **EPILOBEE** 計畫在**希臘 161 個養蜂場中記錄到零個臨床病例**。這個 wiki 沒有把它當成安心的理由，而是把它拆開來看：EPILOBEE 量的是*臨床*盛行率，只有當某群蜂出現可見症狀且經實驗室確認時才算一個養蜂場——而**「一項針對可見疾病的調查，看不到一個以『保持看不見』為特徵的病原」**。接著他們指出，EFB 列於 WOAH 名單、在希臘法律下應通報，但**並未出現在歐盟動物衛生法的蜜蜂疾病清單中**，所以歐洲的整體圖像是由嚴謹度不一的各國制度拼出來的。而希臘具備其他地方爆發時的那個結構特徵：**16.8% 的養蜂場擁有超過 150 群蜂，而歐盟平均是 2.9%。**'
          }) +
          h.warn({
            en: 'The spillover claim is deliberately not overstated. *M. plutonius* has been detected in nine wild bee species across three families in the US and in stingless bees in Brazil — more widely distributed than the American foulbrood agent. And then: **"Detection is not the same as harm... No fitness effect on any wild pollinator has yet been demonstrated. That absence is the point rather than a gap in it."** A UK screen of commercial *Bombus terrestris* did **not** find it, and they publish that too.',
            zh: '跨物種外溢的主張被刻意控制住。*M. plutonius* 已在美國三個科的九種野生蜂、以及巴西的無螫蜂中被偵測到——分布比美洲幼蟲病的病原更廣。接著是：**「偵測到不等於造成傷害……目前尚未證明對任何野生授粉者有適存度影響。那個『沒有』本身就是重點，而不是重點裡的缺口。」**英國一項針對商業用 *Bombus terrestris* 的篩檢**並未**發現它，而他們也把這點公開。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'a-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A computational start, forced by an unculturable organism', zh: '一個由「難培養的菌」逼出來的電腦起點' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'ApiconIASIS: mine, express, counter-screen, then model', zh: 'ApiconIASIS：挖掘、表達、反向篩選，然後建模' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Design, Wet Lab, Results and Model pages.', zh: '由我們依該隊 Description、Design、Wet Lab、Results、Model 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the screen ---------------- */
      out += h.sec({
        id: 'a-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: '165 genomes to two candidates, with the criterion at every stage', zh: '從 165 個基因體到兩個候選，每一階段都寫出判準' },
        lede: {
          en: 'Bacteriophages that once infected M. plutonius left their genomes in its chromosome as dormant prophages. Among those genes is the endolysin the phage used to break the cell open — still readable, still synthesisable.',
          zh: '曾經感染 M. plutonius 的噬菌體，把自己的基因體留在它的染色體裡成為休眠前噬菌體。其中就有那個噬菌體用來把細胞打開的內溶素基因——至今仍可讀取、仍可合成。'
        },
        body:
          h.fig({
            kind: 'funnel',
            tag: { en: 'FUNNEL', zh: '漏斗' },
            title: { en: 'The screen, with the criterion applied at each stage', zh: '篩選流程，每一階段附上所用判準' },
            sub: { en: 'Log scale. Each step is a published gate, not an attrition estimate.', zh: '對數刻度。每一步都是寫明的門檻，不是損耗估計。' },
            data: [
              { label: { en: '*M. plutonius* genomes screened', zh: '篩選的 *M. plutonius* 基因體' }, v: 165, note: { en: 'all publicly available', zh: '所有公開可得的' } },
              { label: { en: 'Lytic enzyme genes in prophage regions', zh: '前噬菌體區域中的溶菌酶基因' }, v: 646, note: { en: 'extracted and ranked by statistical significance', zh: '抽出後依統計顯著性排序' } },
              { label: { en: 'Confidence and enzyme class', zh: '可信度與酵素類別' }, v: 169, note: { en: 'E-value of zero, and a class that acts freely on the wall', zh: 'E 值為零，且屬於能自由作用於細胞壁的類別' } },
              { label: { en: 'Domain definition', zh: '功能域明確' }, v: 115, note: { en: 'clearly defined catalytic and cell-wall-binding domains', zh: '催化域與細胞壁結合域都明確定義' } },
              { label: { en: 'Application fit', zh: '應用條件相符' }, v: 2, note: { en: 'predicted pH optimum, thermostability and solubility', zh: '預測的最適 pH、熱穩定性與溶解度' } }
            ],
            opts: { log: true, dec: 0 },
            caption: { en: 'Counts read from the team\'s Results page. They name 646 → 169 as the step that does most of the work.', zh: '數字讀自該隊 Results 頁。他們自己指出 646→169 是做掉最多工的一步。' }
          }) +
          h.take({ en: 'The gate worth copying', zh: '值得抄的那道門檻' }, {
            en: 'Requiring an **E-value of zero** removes chance matches. But the second half of that filter is the thoughtful one: **excluding tail-associated and other virion-associated lysins**, because those only function as part of an assembled phage particle — which makes them the wrong starting point for something to be expressed recombinantly and applied externally. A filter written from the application backwards.',
            zh: '要求 **E 值為零**可以排除偶然比中的匹配。但這道篩選的後半才是有想法的那一半：**排除尾部相關與其他病毒顆粒相關的溶菌酶**，因為那些只有在組裝好的噬菌體顆粒裡才有功能——這讓它們成為「要被重組表達並從外部施用」這件事的錯誤起點。一道從應用端往回寫的篩選。'
          }) +
          h.h3({ en: 'Two candidates, and the pair is itself an experiment', zh: '兩個候選，而這一對本身就是一個實驗' }) +
          h.tbl({
            cols: [
              { t: { en: '', zh: '' }, w: '22%' },
              { t: { en: 'EndoLys (candidate 1)', zh: 'EndoLys（候選 1）' } },
              { t: { en: 'Mur (candidate 2)', zh: 'Mur（候選 2）' } }
            ],
            rows: [
              [{ en: 'RefSeq', zh: 'RefSeq' }, 'WP_263612458', 'WP_263615132.1'],
              [{ en: 'Length', zh: '長度' }, { en: '433 aa, 22-aa signal peptide removed', zh: '433 aa，去掉 22 aa 訊號肽' }, { en: '326 aa, no signal peptide', zh: '326 aa，無訊號肽' }],
              [{ en: 'Catalytic domain', zh: '催化域' }, { en: 'GH25 (CDD cd06415, GH25_Cpl1-like)', zh: 'GH25（CDD cd06415，GH25_Cpl1-like）' }, { en: 'GH25 (Pfam Glyco_hydro_25)', zh: 'GH25（Pfam Glyco_hydro_25）' }],
              [{ en: 'Targeting domain', zh: '導向域' }, { en: '**two LysM modules** — the commonest strategy in characterised endolysins, broadly distributed', zh: '**兩個 LysM 模組**——已特性化內溶素中最常見的策略，分布廣泛' }, { en: '**ZoocinA target recognition domain** — from a streptococcal hydrolase, targets more narrowly', zh: '**ZoocinA 標靶辨識域**——來自鏈球菌水解酶，導向範圍更窄' }],
              [{ en: 'Registry part', zh: 'Registry 零件' }, 'BBa_26WG5LPE', 'BBa_26XBER6P'],
              [{ en: 'Predicted Tm', zh: '預測 Tm' }, { en: '45–48 °C (DeepStabP)', zh: '45–48 °C（DeepStabP）' }, { en: '50 °C (DeepStabP)', zh: '50 °C（DeepStabP）' }]
            ],
            min: 720,
            source: { en: 'Read from the team\'s Results page, Identification tab.', zh: '讀自該隊 Results 頁的 Identification 分頁。' }
          }) +
          h.p({
            en: 'The design logic is stated: **the catalytic chemistry is held constant and only the targeting module varies**, so any difference in activity is attributable to targeting rather than chemistry. And *"a broad binder paired against a narrow one is also the more informative test of a specificity claim: if selectivity for M. plutonius matters, the two should not behave alike."*',
            zh: '設計邏輯寫得很明白：**催化化學固定不變，只改變導向模組**，所以活性上的任何差異都只能歸因於導向，而不是化學。而且*「把一個廣譜結合者和一個窄譜結合者配成一對，也是對專一性主張更有資訊量的測試：如果對 M. plutonius 的選擇性真的重要，這兩者就不該表現得一樣。」*'
          }) +
          h.h3({ en: 'Annotation discipline, and an independent corroboration', zh: '註解紀律，以及一次獨立佐證' }) +
          h.ul([
            { en: 'Domain calls are given with **InterPro accessions**, *"meaning the match passed curation rather than only clearing a member database\'s raw cutoff."*', zh: '功能域判定都附上 **InterPro 編號**，*「這代表該匹配通過了策展，而不只是過了成員資料庫的原始門檻」*。' },
            { en: 'The **102-residue unassigned stretch** in EndoLys, between the catalytic domain and the first LysM module, carries no domain call in any member database and is **left unannotated** rather than guessed at.', zh: 'EndoLys 中那段位於催化域與第一個 LysM 模組之間的 **102 個殘基未分配區段**，在任何成員資料庫都沒有功能域判定，於是**就留著不註解**，而不是去猜。' },
            { en: 'AlphaFold models compared against known lysins with **FoldSeek**, with the reasoning given: sequence identity to a characterised lysin can be modest while the fold is conserved, so **a structural match is better evidence than any sequence search alone**.', zh: 'AlphaFold 模型用 **FoldSeek** 與已知溶菌酶比對，並寫出理由：與已特性化溶菌酶的序列相似度可能不高，但折疊可能保留，所以**結構上的匹配比任何單獨的序列搜尋都是更好的證據**。' },
            { en: 'Then an independent check from a different tool and database: **pLannotate** recovered the same two-module architecture (CPL1 at 55.3 %, sle1 at 54.2 %) in the same places. The remaining pLannotate suggestions, Gam and TrxA, were 15–16 bp matches against a common-feature list and were **rejected as noise**.', zh: '接著是來自不同工具與不同資料庫的獨立檢查：**pLannotate** 在相同位置找回了相同的雙模組架構（CPL1 相似度 55.3%、sle1 為 54.2%）。其餘 pLannotate 的建議（Gam 與 TrxA）只是對常見特徵清單的 15–16 bp 匹配，**被判為雜訊而剔除**。' },
            { en: 'And a neat internal consistency check: **every pLannotate hit on the RR12 fusion constructs sat exactly 54 nt downstream of its position on the bare construct**, matching the 18 residues of RR12 and its spacer. "The offset held across an independent tool."', zh: '還有一個漂亮的內部一致性檢查：**RR12 融合構建體上的每一個 pLannotate 命中，都剛好落在裸構建體對應位置下游 54 nt 處**，正好對應 RR12 的 18 個殘基加上間隔序列。「這個位移在一個獨立工具上也成立。」' }
          ]) +
          h.h3({ en: 'In silico redesign: freeze what matters, then optimise hard', zh: '電腦內重新設計：先凍結重要的，再用力最佳化' }) +
          h.p({
            en: 'The GH25 muramidase evolved for intracellular lysis, so it expresses poorly — **Protein-Sol 0.411 against a 0.45 threshold, with inclusion bodies confirmed at the bench.** The strategy is a **40-position freeze list enforced as a hard constraint**, each position backed by at least two of three independent sources (structural role, ESM-2 evolutionary constraint, literature) — and then **an all-atom MD run to confirm those residues really are rigid (RMSF < 2 Å) with a stable active site, "turning the list from a heuristic into a tested claim."**',
            zh: '這個 GH25 胞壁醯胺酶是為了細胞內溶解而演化的，所以表達不良——**Protein-Sol 0.411，門檻是 0.45，而實驗檯也確認形成包涵體。**策略是一份**以硬性限制強制執行的 40 個位置凍結清單**，每個位置都有三種獨立來源中至少兩種支持（結構角色、ESM-2 演化限制、文獻）——接著**跑一次全原子分子動力學去確認那些殘基真的是剛性的（RMSF < 2 Å）、活性位點也穩定，「把這份清單從經驗法則變成一個被測試過的主張」。**'
          }) +
          h.flow({
            title: { en: 'The optimisation cascade, and the filter that was added after a failure', zh: '最佳化串接流程，以及一次失敗之後才補上的篩選' },
            sub: { en: 'Solubility and thermostability were optimised simultaneously, because they conflict biophysically — so the output is a Pareto front, not a single answer.', zh: '溶解度與熱穩定性被同時最佳化，因為兩者在生物物理上互相衝突——所以輸出是一條 Pareto 前緣，不是單一答案。' },
            stages: [
              { label: { en: 'Scan', zh: '掃描' }, sub: { en: 'ThermoMPNN point-mutation stability', zh: 'ThermoMPNN 點突變穩定性' }, tone: 'b' },
              { label: { en: 'Filter', zh: '篩選' }, sub: { en: 'ESM-2 log-likelihood, threshold −2.0', zh: 'ESM-2 對數似然，門檻 −2.0' }, tone: 'r',
                items: [{ en: 'added after an unconstrained run produced buried substitutions that scored well but would never fold', zh: '在一次無限制的執行產生了「分數很好但永遠折不起來」的埋藏位置替換之後才補上' }] },
              { label: { en: 'Search', zh: '搜尋' }, sub: { en: 'NSGA-II (pymoo) over the 17 surviving mutations', zh: 'NSGA-II（pymoo）在存活的 17 個突變上搜尋' }, tone: 'v' },
              { label: { en: 'Gate', zh: '關卡' }, sub: { en: 'ColabFold refold of every candidate', zh: '每個候選以 ColabFold 重新折疊' }, tone: 'g',
                items: [{ en: 'a structural gate that also catches epistasis', zh: '一道同時能抓到上位效應的結構關卡' }] },
              { label: { en: 'Ship', zh: '交付' }, sub: { en: 'Three variants sharing a Y221K + S300R core', zh: '三個共享 Y221K＋S300R 核心的變異體' }, tone: 't',
                items: [{ en: 'plus four falsifiable predictions, P1–P4', zh: '另附四條可被否證的預測 P1–P4' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s In silico Optimisation model page.', zh: '由我們依該隊 In silico Optimisation 模型頁繪製。' }
          }) +
          h.warn({
            en: '**P4 flags retained selectivity as the main untested exposure, because binding was never an optimisation objective.** The limitations go further: both objectives are model outputs, so the Pareto front is "optimal with respect to our predictors rather than with respect to reality"; **no wild-type melting temperature exists, because "a protein that will not express solubly cannot be melted"**, so every stability figure is relative to an unmeasured baseline; one MD trajectory cannot exclude slower transitions; and the optimised properties are **proxies** — proteolytic resistance, pH tolerance across the gut range and functional half-life in situ were not modelled, "so a variant could improve on both objectives and still be unsuitable for delivery."',
            zh: '**P4 把「選擇性是否保留」標為主要的未測試風險，因為結合力從來不是最佳化目標。**限制還講得更遠：兩個目標都是模型輸出，所以這條 Pareto 前緣「是相對於我們的預測器最佳，而不是相對於現實最佳」；**野生型的熔點根本不存在，因為「一個無法可溶表達的蛋白沒辦法做熔解」**，所以所有穩定性數值都是相對於一個未被量測的基準；單一條 MD 軌跡無法排除較慢的構形轉換；而被最佳化的性質都是**代理指標**——蛋白酶抗性、整個腸道 pH 範圍的耐受度、以及在現場的功能半衰期都沒有被建模，「所以一個變異體可能在兩個目標上都變好，卻仍然不適合遞送」。'
          })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'a-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Four constructs, and two of them are a hypothesis under test', zh: '四個構建體，而其中兩個是正在被檢驗的假設' },
        body:
          h.phases([
            { h: { en: 'Express — and the fusion declares its cost in advance', zh: '表達——而融合設計事先聲明自己的代價' },
              p: { en: 'EndoLys and Mur bare, plus each fused to the antimicrobial peptide **RR12** as a "molecular hook" to accelerate membrane attachment. All four in *E. coli* BL21(DE3), Ni-NTA purified with endotoxin removal.', zh: 'EndoLys 與 Mur 各自裸體，加上兩者分別融合抗菌肽 **RR12** 作為加速膜附著的「分子鉤」。四者都在大腸桿菌 BL21(DE3) 中表達，以 Ni-NTA 純化並去內毒素。' },
              items: [
                { en: 'The cost is declared **before** the test: *"we note openly that antimicrobial peptides carry a broader spectrum than endolysins do, which introduces a specificity cost we test for rather than assume away."*', zh: '代價在測試**之前**就聲明了：*「我們公開指出，抗菌肽的作用譜比內溶素更廣，這帶來一個專一性上的代價——我們去測它，而不是假設它不存在。」*' },
                { en: 'Unfused constructs reached **OD₆₀₀ 5.4 and 5.5 at ~21 h**; the fusions arrested early and were harvested at **1.3 and 1.55 at 9–10 h**.', zh: '未融合的構建體在約 21 小時達到 **OD₆₀₀ 5.4 與 5.5**；融合體提早停滯，在 9–10 小時就於 **1.3 與 1.55** 收菌。' },
                { en: 'Yields per litre: **EndoLys 3.27 > Mur 1.60 > RR12-Mur 0.95 > RR12-EndoLys 0.46 mg/L.**', zh: '每公升產率：**EndoLys 3.27 > Mur 1.60 > RR12-Mur 0.95 > RR12-EndoLys 0.46 mg/L。**' }
              ] },
            { h: { en: 'A medium comparison reported as weaker than it looks', zh: '一次被報告得比看起來更弱的培養基比較' },
              p: { en: 'Terrific Broth tripled RR12-Mur recovery — 0.11 mg at 4 h to **0.33 mg per 180 mL at 8 h**, normalising to 1.83 mg/L against 0.95 in LB — and yield was still rising at the final timepoint.', zh: 'Terrific Broth 讓 RR12-Mur 的回收量增加到三倍——4 小時 0.11 mg 到 **8 小時每 180 mL 0.33 mg**，換算為 1.83 mg/L，而 LB 是 0.95——而且在最後一個時間點產量還在上升。' },
              items: [
                { en: 'And then the caveat that most teams would omit: *"Note that this medium comparison was run on RR12-Mur rather than on the lead construct, once per medium and at different scales (1 L in LB, 180 mL in TB), so it indicates a direction rather than a settled result."*', zh: '接著是多數團隊會省略的那段警語：*「請注意，這個培養基比較是在 RR12-Mur 上做的，不是在主力構建體上；每種培養基只做一次，而且規模不同（LB 1 L、TB 180 mL），所以它指出的是一個方向，而不是一個定案的結果。」*' }
              ] },
            { h: { en: 'Rescue the solubility, because the prediction was wrong', zh: '搶救溶解度，因為預測錯了' },
              p: { en: '**0.75 M trehalose** in the lysis buffer produced sharp, symmetrical A280 elution peaks and raised recovery substantially for EndoLys (**3.27 → 9.26 mg/L**), more modestly for Mur (1.60 → 2.27), and **little for the two fusions**.', zh: '裂解液中加入 **0.75 M 海藻糖**，讓 A280 洗提峰變得尖銳對稱，並使 EndoLys 的回收量大幅提升（**3.27→9.26 mg/L**）、Mur 中等提升（1.60→2.27），而**兩個融合體幾乎沒有改善**。' },
              items: [
                { en: 'The intervention exists because DeepSoluE had predicted both candidates soluble and **the great majority of all four proteins went into inclusion bodies** under both induction regimes tested (37 °C for 4 h, 23 °C for 16–18 h), with the soluble fraction too dilute to visualise without concentration.', zh: '這個處置之所以存在，是因為 DeepSoluE 預測兩個候選都可溶，而**四個蛋白的絕大部分都進了包涵體**——在兩種測試的誘導條件下皆然（37 °C 4 小時、23 °C 16–18 小時），而可溶部分太稀，不先濃縮根本看不到。' }
              ],
              done: { en: 'A usable lead at 9.26 mg/L, and a sequence-based solubility predictor marked as unreliable for this enzyme class in this host.', zh: '一個產率 9.26 mg/L 的可用主力，以及一個被標註為「對這個酵素類別在這個宿主中不可靠」的序列型溶解度預測器。' } },
            { h: { en: 'Kill the pathogen — in a non-pathogenic strain, on purpose', zh: '殺死病原——刻意在非致病菌株上做' },
              p: { en: 'EndoLys cut *M. plutonius* (LMG 20360) OD₆₀₀ by **28.3 ± 0.5 % at 1 µg/mL rising to 38.9 ± 0.3 % at 100 µg/mL over 70 minutes**, against a 5.1 % untreated control drift, and beat all three other constructs at every concentration.', zh: 'EndoLys 在 70 分鐘內讓 *M. plutonius*（LMG 20360）的 OD₆₀₀ **在 1 µg/mL 下降 28.3 ± 0.5%，在 100 µg/mL 下降 38.9 ± 0.3%**，而未處理對照的漂移為 5.1%，並且在每個濃度都勝過其他三個構建體。' },
              items: [
                { en: 'The strain choice is framed as a containment decision rather than hidden as a limitation: efficacy was run against a non-pathogenic strain *"so the mechanism could be validated without culturing a brood pathogen in a university laboratory"*; the cell wall is shared across the clonal complexes, so binding is expected to hold.', zh: '菌株的選擇被定位成一個生物安全決定，而不是被藏起來的限制：效力測試用非致病菌株進行，*「這樣機制可以被驗證，而不需要在大學實驗室裡培養一個幼蟲病原」*；細胞壁在各個無性繁殖群之間是共通的，所以結合預期仍然成立。' },
                { en: 'And the next step is named as a different experiment, not a refinement: *"Repeating the assay against a virulent strain, under proper containment, is the next experiment rather than a refinement of this one."*', zh: '而下一步被定位成一個不同的實驗，而不是同一個實驗的改良：*「在適當的生物防護下對致病菌株重做這個試驗，是下一個實驗，而不是這個實驗的改良。」*' }
              ] },
            { h: { en: 'Counter-screen the gut — the hard version', zh: '反向篩選腸道菌——用難的那個版本' },
              p: { en: '*Lactobacillus apis* and *Bombilactobacillus mellis*: both **Lactobacillales, the same order as the pathogen, and both Gram-positive** — the bee-gut organisms most likely to share enough cell-wall structure to be caught by an enzyme aimed at *M. plutonius*. Panel settled after a conversation with Dr. Kollia.', zh: '*Lactobacillus apis* 與 *Bombilactobacillus mellis*：兩者都是**乳酸桿菌目，與病原同目，而且都是革蘭氏陽性**——在蜜蜂腸道中最可能與 *M. plutonius* 共享足夠細胞壁結構、因此最可能被誤殺的生物。這個組合是在與 Kollia 博士談過之後定案的。' },
              items: [
                { en: 'Their reasoning: *"A negative result against Gram-negative symbionts would say less, since their outer membrane blocks access regardless of specificity. **Testing the near relatives first is the harder test, not the easier one.**"*', zh: '他們的理由：*「對革蘭氏陰性共生菌的陰性結果說明力較弱，因為它們的外膜無論專一性如何都會阻擋接觸。**先測近親才是更難的測試，不是更簡單的。**」*' },
                { en: 'Stability measured where it has to hold: EndoLys retained **>74 % of its lytic activity after 48 h at pH 5.5 and 6.7**, the range spanning the larval midgut, while decaying fast at pH 4.0 (k_deg 0.0930 h⁻¹) and more slowly at pH 7.5 (0.0555 h⁻¹).', zh: '穩定性是在它必須成立的地方量的：EndoLys 在 **pH 5.5 與 6.7 下 48 小時後仍保有 >74% 的溶菌活性**，那正是幼蟲中腸的範圍；而在 pH 4.0 下迅速衰減（k_deg 0.0930 h⁻¹）、pH 7.5 下較慢（0.0555 h⁻¹）。' }
              ] }
          ]) +
          h.h3({ en: 'Delivery, and a conservation constraint taken seriously', zh: '遞送，以及一個被認真對待的保育限制' }) +
          h.p({
            en: 'A powder mixed into standard commercial feed, eaten by adult workers and passed to the brood by **trophallaxis**, so *"the colony\'s own food-sharing performs the delivery and nothing about beekeeping practice has to change."* On the way the protein has to survive storage, dilution into high-osmolarity syrup, and the adult crop.',
            zh: '把粉末混入標準市售飼料，由成蜂工蜂取食，再經**交哺**傳給幼蟲，所以*「遞送是由蜂群自己的食物分享完成的，養蜂的作業方式完全不必改」*。途中蛋白必須撐過儲存、被高滲糖漿稀釋，以及成蜂的蜜胃。'
          }) +
          h.ul([
            { en: '**Adoption friction is treated as an efficacy variable:** *"a treatment only well-resourced operations can run does not protect pollinators at landscape scale."*', zh: '**採用門檻被當成一個效力變數：***「一種只有資源充足的蜂場才跑得動的療法，無法在地景尺度上保護授粉者。」*' },
            { en: 'The larval gut is targeted partly because it is a **low-density microbial environment**, so the enzyme lands where there is least to disrupt — but adults handle the feed, so screening against the richer adult community is named as still necessary.', zh: '選擇以幼蟲腸道為標的，部分原因是那裡是**微生物密度很低的環境**，所以酵素落在最少東西可被干擾的地方——但成蜂會處理飼料，所以對成蜂那個更複雜的菌群做篩檢被明確列為仍然必要。' },
            { en: '**Non-target exposure is addressed as a contradiction in their own aim:** feeding stations are reached by foragers from other colonies and by wild bees and wasps, and "an intervention that helped hives while exposing wild pollinators to an untested enzyme would defeat its own purpose" — hence access-restricting station design and extending specificity testing to other pollinators\' gut flora.', zh: '**非標的暴露被當成他們自身目標內部的一個矛盾來處理：**餵食站會被其他蜂群的採集蜂、以及野生蜂與胡蜂造訪，而「一種幫助了蜂箱、卻讓野生授粉者暴露於未經測試酵素的干預，會打敗它自己的目的」——因此有了限制取食的餵食站設計，以及把專一性測試擴及其他授粉者的腸道菌群。' },
            { en: '**"Encapsulation: explored, not adopted."** A liposomal formulation was designed and **none was produced**; it is explicitly not part of the product, and what they cost and model is the purified enzyme in plain feed.', zh: '**「包覆：探討過，未採用。」**他們設計了一個脂質體配方，但**一個都沒做出來**；它被明確排除在產品之外，而他們計價與建模的對象是「純化酵素加普通飼料」。' },
            { en: '**Why a protein and not a living therapeutic**, argued from the openness of a hive: foragers range kilometres and the product ends up in wax, comb and the surrounding landscape, so a self-replicating release is hard to justify. The product cannot replicate, colonise or transfer genetic material, and the engineering stays in the contained production strain.', zh: '**為什麼是蛋白而不是活體療法**，理由建立在蜂箱本身的開放性上：採集蜂活動範圍達數公里，產品最終會進入蜂蠟、巢片與周圍地景，所以釋放一個能自我複製的東西很難被正當化。他們的產品不能複製、不能定殖、也不能轉移遺傳物質，而工程改造留在被圍堵的生產菌株裡。' }
          ])
      });

      /* ---------------- the kill law ---------------- */
      out += h.sec({
        id: 'a-model',
        kick: { en: 'Model', zh: '模型' },
        h2: { en: 'A compartment built from the biology it is modelling', zh: '一個由它所建模的生物學本身構造出來的隔室' },
        lede: {
          en: 'A deterministic single-compartment ODE model of a honeybee larval midgut, asking how much enzyme is needed to clear an infection before the pathogen kills the larva around day 4–5.',
          zh: '一個蜜蜂幼蟲中腸的確定性單隔室 ODE 模型，問的是：要多少酵素才能在病原於第 4–5 天殺死幼蟲之前清除感染。'
        },
        body:
          h.kv([
            [{ en: 'The compartment', zh: '隔室' }, { en: 'The midgut is treated as a **sealed, expanding lumen that voids only once at pupation**, so there is no convective outflow — and the pathogen is tracked as an **absolute cell number rather than a concentration**, "which keeps gut expansion from being mistaken for killing".', zh: '中腸被當成一個**密閉、會擴張、只在化蛹時排空一次的管腔**，所以沒有對流外流——而病原是以**絕對菌數而非濃度**追蹤的，「這樣腸道擴張就不會被誤認為殺菌」。' }],
            [{ en: 'The dosing', zh: '給藥' }, { en: 'Nurse bees feed roughly **4,300 times a day**, so delivery behaves like a continuous drip with no peak-to-trough swings, and the enzyme settles at a quasi-steady concentration.', zh: '保母蜂一天餵食約 **4,300 次**，所以遞送的行為像連續滴注，沒有峰谷起伏，酵素會停在一個準穩定濃度。' }],
            [{ en: 'The kill law', zh: '殺菌動力學' }, { en: 'Emax-type saturating, fitted to their own in-vitro lysis data: **φmax ≈ 0.006125 min⁻¹, KE ≈ 0.633 µg/mL, R² = 0.935.** A 100-fold rise in enzyme buys only about **1.6× more kill rate**, because the enzyme can only bind a finite number of cell-surface sites.', zh: '飽和型 Emax，擬合自他們自己的體外溶解數據：**φmax ≈ 0.006125 min⁻¹、KE ≈ 0.633 µg/mL、R²=0.935。**酵素濃度提高 100 倍只換到約 **1.6 倍的殺菌速率**，因為酵素只能結合有限數量的細胞表面位點。' }],
            [{ en: 'The pH finding', zh: 'pH 的發現' }, { en: 'A pH-plate experiment **split pH into two separate effects**: the fresh kill rate is essentially flat across the lumen band (pH 5.5–7.5), but **stability is strongly pH-dependent** — t½ ≈ 140–280 h at pH 5.5–6.7, **≈ 7 h at pH 4**, ≈ 12 h at pH 7.5.', zh: '一個 pH 盤實驗**把 pH 拆成兩個獨立效應**：新鮮的殺菌速率在管腔範圍（pH 5.5–7.5）內基本上是平的，但**穩定性強烈依賴 pH**——pH 5.5–6.7 下 t½ ≈ 140–280 小時、**pH 4 下約 7 小時**、pH 7.5 下約 12 小時。' }],
            [{ en: 'What that changed', zh: '這改變了什麼' }, { en: 'The enzyme is about **30× more stable in the lumen than previously assumed**, so **dilution rather than degradation now dominates enzyme loss**, and the required food concentration falls roughly **31-fold**.', zh: '酵素在管腔中**比原先假設穩定約 30 倍**，所以**現在主導酵素損失的是稀釋而不是降解**，而所需的飼料濃度下降約 **31 倍**。' }]
          ]) +
          h.fig({
            kind: 'bars',
            tag: { en: 'SATURATION', zh: '飽和' },
            title: { en: 'How much of the attainable kill rate each tested dose delivers', zh: '每個測試劑量交付了可達殺菌速率的多少比例' },
            sub: { en: 'From their own fitted KE of 0.633 µg/mL. Ninety per cent of everything the enzyme can do is already present at 5.7 µg/mL.', zh: '由他們自己擬合出的 KE = 0.633 µg/mL 推得。在 5.7 µg/mL 時，酵素能做的事已有九成到位。' },
            data: [
              { label: { en: '1 µg/mL', zh: '1 µg/mL' }, v: 61, note: { en: 'already above the 1.19 µg/mL minimum effective concentration', zh: '已高於 1.19 µg/mL 的最低有效濃度' } },
              { label: { en: '5 µg/mL', zh: '5 µg/mL' }, v: 89, note: { en: 'the lowest dose in the pH experiment — which is why k_kill looked flat there', zh: 'pH 實驗中的最低劑量——這就是為什麼那裡的 k_kill 看起來是平的' } },
              { label: { en: '10 µg/mL', zh: '10 µg/mL' }, v: 94, note: { en: 'close to the modelled working peak of 9.56 µg/mL', zh: '接近模型中 9.56 µg/mL 的工作峰值' } },
              { label: { en: '50 µg/mL', zh: '50 µg/mL' }, v: 99, note: { en: 'the dose in the project\'s headline result', zh: '這個專案招牌結果所用的劑量' } },
              { label: { en: '100 µg/mL', zh: '100 µg/mL' }, v: 99.4, note: { en: 'a hundredfold the first row, for 1.6× the kill rate', zh: '是第一列的一百倍，只換到 1.6 倍的殺菌速率' } }
            ],
            opts: { unit: { en: '% of φmax', zh: 'φmax 的 %' }, dec: 1, xlabel: { en: 'percentage of the attainable kill rate', zh: '可達殺菌速率的百分比' } },
            caption: { en: 'Calculated by us from the team\'s published φmax and KE. The percentages themselves are stated on their Interpretation tab.', zh: '由我們依該隊公開的 φmax 與 KE 計算。這些百分比本身也寫在他們的 Interpretation 分頁上。' }
          }) +
          h.warn({
            en: 'Because killing saturates, **φmax/r ≈ 1.53 is a ceiling that no dose can raise**, and if *M. plutonius* grows faster than about **0.0061 min⁻¹** in vivo, no dose clears the infection at all. Complete sterilisation within 48 h is achievable only for inocula up to about **283 cells** under the 23 µg/mL larva-safe cap — and even with unlimited enzyme the ceiling is about **455 cells**, "a saturation limit, not a dose limit". A 300-cell inoculum already needs **26.2 µg/mL, just above the safe cap**.',
            zh: '因為殺菌會飽和，**φmax/r ≈ 1.53 是任何劑量都提不高的上限**，而如果 *M. plutonius* 在體內的生長速率超過約 **0.0061 min⁻¹**，那麼任何劑量都無法清除感染。在 23 µg/mL 的幼蟲安全上限下，48 小時內完全滅菌只能做到約 **283 個菌**——而即使酵素無限量，上限也只有約 **455 個菌**，那是「飽和上限，不是劑量上限」。300 個菌的接種量就已經需要 **26.2 µg/mL，剛好超過安全上限**。'
          }) +
          h.take({ en: 'Then they change the criterion, and say that they did', zh: '然後他們換掉判準，並且說自己換了' }, {
            en: 'Under a **recovery** criterion — the pathogen below a lethal load and falling — the handleable inoculum rises **four to five orders of magnitude, to about 10⁷ cells**, because a saturating dose strips about **99.65 % of the population every 48 h** and simply reaches extinction a few days later. Measured against sterilisation the treatment looks narrow; measured against recovery it does not. Both readings are printed, with the change of criterion visible.',
            zh: '在**恢復**判準下——病原低於致死負荷且持續下降——可處理的接種量上升**四到五個數量級，到約 10⁷ 個菌**，因為一個飽和劑量每 48 小時就剝除約 **99.65% 的族群**，只是要再過幾天才真正滅絕。以滅菌為尺度，這個療法看起來很窄；以恢復為尺度就不是。兩種讀法都被印出來，而換判準這件事是看得見的。'
          })
      });

      /* ---------------- reading the numbers together ---------------- */
      out += h.sec({
        id: 'a-read',
        kick: { en: 'Interpretation', zh: '判讀' },
        h2: { en: 'The most self-critical section in either Top 10', zh: '兩個前十名中最自我批判的一節' },
        lede: {
          en: 'Four results that are usually read in isolation. Taken together, the team says, they change what the project should optimise next.',
          zh: '四個通常會被分開讀的結果。該隊說，把它們合起來讀，就改變了這個專案接下來該最佳化什麼。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: '1 · saturation', zh: '1 · 飽和' }, k: 'b' }],
              h: { en: 'Two separate problems turn out to be one', zh: '兩個分開的問題結果是同一個' },
              p: { en: 'Saturation explains why crude lysate matched purified EndoLys and exceeded purified Mur — two points on a flat curve read alike if the lysate carries more than ~6 µg/mL of enzyme equivalent. It also explains why k_kill looked flat across 5–100 µg/mL in the pH experiment, since that experiment\'s lowest dose was already at 89 % of maximum. **"Neither result needed a separate explanation."**', zh: '飽和解釋了為什麼粗萃取液的效果和純化後的 EndoLys 相當、還勝過純化後的 Mur——如果萃取液中的酵素當量超過約 6 µg/mL，那麼平坦曲線上的兩個點讀起來就是一樣的。它也解釋了為什麼 pH 實驗中 5–100 µg/mL 的 k_kill 看起來是平的，因為那個實驗的最低劑量就已經在最大值的 89%。**「這兩個結果都不需要各自的解釋。」**' } },
            { chips: [{ t: { en: '2 · the wrong lever', zh: '2 · 錯的槓桿' }, k: 'r' }],
              h: { en: 'They turn the finding against their own season', zh: '他們用這個發現來檢討自己的整季' },
              p: { en: '*"A substantial part of the wet-lab season was spent raising yield — trehalose supplementation, the move to Terrific Broth, and the three-vessel bioreactor scale-up. The kill law indicates that yield was not the binding constraint on efficacy."* Above ~6 µg/mL, more enzyme does not kill more. The remaining levers are a more catalytically active variant, a slower pathogen, or a smaller inoculum — and since the clearable inoculum is ~283 cells, **"early detection is worth more to the project than additional protein."**', zh: '*「濕式實驗這一季有相當大一部分花在提高產量上——補充海藻糖、改用 Terrific Broth、以及三槽生物反應器放大。而殺菌動力學顯示，產量並不是效力上的真正瓶頸。」*超過約 6 µg/mL 之後，更多酵素不會殺死更多菌。剩下的槓桿是：催化活性更高的變異體、更慢的病原，或更小的接種量——而既然可清除的接種量約 283 個菌，**「對這個專案來說，早期偵測比更多蛋白更有價值。」**' } },
            { chips: [{ t: { en: '3 · the proxy', zh: '3 · 代理指標' }, k: 'v' }],
              h: { en: 'They discredit their own headline metric', zh: '他們自己打掉自己的招牌指標' },
              p: { en: 'OD₆₀₀ cannot reach zero under complete lysis, because wall fragments and released contents keep scattering light and *M. plutonius* grows in chains whose interior cells are shielded. So *"our percentage reductions are therefore lower bounds on killing rather than estimates of it."* The recovery assay shows the compression: a **1.5-fold turbidity difference, 30.7 % against 47.0 %, separated a subculture that recovered from one that did not.** Hence CFU enumeration is first on their list, "rather than an optional refinement".', zh: 'OD₆₀₀ 在完全溶解下也到不了零，因為細胞壁碎片與釋出的內容物仍會散射光，而 *M. plutonius* 以鏈狀生長，鏈內部的細胞是被遮蔽的。所以*「我們的百分比下降因此是殺菌的下界，而不是對殺菌的估計」*。恢復試驗顯示了這種壓縮：**1.5 倍的濁度差異——30.7% 對 47.0%——就分開了「能恢復」與「不能恢復」的次培養。**因此菌落計數被排在他們清單的第一位，「而不是一個可選的改良」。' } },
            { chips: [{ t: { en: '4 · the retraction', zh: '4 · 撤回' }, k: 'g' }],
              h: { en: 'An argument that does not survive their own reanalysis', zh: '一個撐不過自己再分析的論證' },
              p: { en: 'Pre-planned equivalence testing against a **± 5 percentage-point margin** confirmed no substantial effect on either commensal (every mean difference between −3.4 and +4.4 points, against 20–34 for the pathogen; **22 of 46 conditions formally equivalent**, most of the rest inconclusive on three replicates). But a regression over **all 60 purified-enzyme measurements per species** found a small consistent dose-dependence: **+2.15 percentage points per 10-fold increase in *B. mellis*, +1.19 in *L. apis*, surviving six robustness checks, with all eight construct-specific slopes positive.**', zh: '事先規劃的等效性檢定以 **±5 個百分點**為界，確認對兩種共生菌都沒有顯著影響（所有平均差落在 −3.4 到 +4.4 個百分點之間，而病原是 20–34 個百分點；**46 個條件中有 22 個在形式上等效**，其餘多數在三個重複下屬於無法判定）。但對**每個物種全部 60 個純化酵素量測值**做迴歸，卻找到一個微小但一致的劑量依賴：**在 *B. mellis* 中每 10 倍劑量增加 2.15 個百分點、*L. apis* 中 1.19 個百分點，通過六項穩健性檢查，而八條依構建體分的斜率全部為正。**' } }
          ]) +
          h.warn({
            en: 'And then the sentence: **"We had previously argued that the absence of a dose-response was evidence of no off-target activity. That argument does not survive our own analysis."** The corrected claim is that the constructs **do** act on the commensals, weakly and in proportion to dose, **between three and thirty-eight times less strongly than on *M. plutonius*** depending on species and comparison. Their reason for preferring it: *"a narrower claim than the one we started with and a more useful one, because a graded effect points at a mechanism — a diffusion barrier rather than a recognition threshold — where a clean absence would have pointed at nothing."*',
            zh: '接著是那句話：**「我們先前主張，沒有劑量反應就是沒有脫靶活性的證據。那個論證撐不過我們自己的分析。」**修正後的主張是：這些構建體**確實**會作用在共生菌上，程度微弱且與劑量成比例，依物種與比較方式而定，**比對 *M. plutonius* 弱三到三十八倍**。他們偏好這個版本的理由是：*「比我們一開始的主張更窄，但更有用，因為一個分級的效應指向一個機制——擴散障壁，而不是辨識門檻——而一個乾淨的『沒有』什麼都不指向。」*'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'a-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Three predictions that did not survive contact with the bench — reported first', zh: '三個沒能撐過實驗檯的預測——而且被放在最前面報告' },
        lede: {
          en: 'The conclusions section leads with the failures, "because they are the places where the project learned most".',
          zh: '結論一節是以失敗開場的，「因為那些是這個專案學到最多的地方」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'The prediction', zh: '預測' }, w: '20%' },
              { t: { en: 'What happened', zh: '實際發生什麼' } },
              { t: { en: 'What it produced', zh: '它產生了什麼' }, w: '24%' }
            ],
            rows: [
              [{ en: '**Both candidates are soluble** (DeepSoluE)', zh: '**兩個候選都可溶**（DeepSoluE）' },
               { en: 'The great majority of all four proteins partitioned into inclusion bodies under both induction regimes; the soluble fraction needed concentrating before it was visible on a gel. *"A sequence-based solubility prediction, at least for this enzyme class in this host, did not forecast the behaviour we observed."*', zh: '四個蛋白的絕大部分在兩種誘導條件下都進了包涵體；可溶部分必須先濃縮才在膠上看得到。*「至少對這個酵素類別在這個宿主中，一個基於序列的溶解度預測並未預測到我們觀察到的行為。」*' },
               { en: 'The trehalose intervention, and the whole Pareto redesign pipeline.', zh: '海藻糖處置，以及整條 Pareto 重新設計流程。' }],
              [{ en: '**RR12 will act as a molecular hook**', zh: '**RR12 會當成分子鉤**' },
               { en: 'It did not. Both fusions yielded less protein (**RR12-EndoLys roughly sevenfold less**), arrested host growth earlier, and delivered no killing advantage the assay could resolve. *"The design hypothesis was clearly stated in advance and clearly refuted."*', zh: '它沒有。兩個融合體的產量都更低（**RR12-EndoLys 約少七倍**）、更早讓宿主停止生長，而且在這個試驗能分辨的範圍內沒有帶來任何殺菌優勢。*「這個設計假設事先被明確陳述，也被明確否證。」*' },
               { en: 'The project\'s lead construct "is consequently the simplest one we made".', zh: '這個專案的主力構建體「因此是我們做過最簡單的那一個」。' }],
              [{ en: '**Mur is the more thermostable lead**', zh: '**Mur 是熱穩定性更好的主力**' },
               { en: 'Computationally the model favoured Mur on predicted thermostability. In assay, **EndoLys was the one that performed.** *"We report both because the disagreement is the engineering cycle working rather than failing: the prediction narrowed hundreds of candidates to two, and the bench decided between them."*', zh: '在電腦上，模型依預測熱穩定性偏好 Mur。在實測中，**表現好的是 EndoLys。***「我們把兩者都報告出來，因為這個不一致代表工程循環在運作，而不是在失敗：預測把數百個候選縮到兩個，而實驗檯在兩者之間做了決定。」*' },
               { en: 'A published statement of what prediction is for.', zh: '一份關於「預測是用來做什麼的」的公開聲明。' }]
            ],
            min: 780,
            source: { en: 'Read from the team\'s Results page, Conclusions tab.', zh: '讀自該隊 Results 頁的 Conclusions 分頁。' }
          }) +
          h.note({
            en: 'Still open, in their own words: the three redesigned variants are **submitted for refolding with the pass/fail pending**; the efficacy assay has not been repeated against a virulent strain; the adult gut community has not been screened; **φmax needs resolving by replicated high-concentration measurements**, flagged as the single most consequential refinement; and whether the enzyme survives the adult crop and the syrup has not been tested.',
            zh: '以他們自己的話，仍然未決的部分：三個重新設計的變異體**已送去做重新折疊，通過與否仍待定**；效力試驗尚未對致病菌株重做；成蜂的腸道菌群尚未篩檢；**φmax 需要以重複的高濃度量測來解析**，並被標為最具後果的單一改良；以及酵素能否撐過成蜂蜜胃與糖漿，尚未測試。'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'a-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Athens', zh: '我們會從 Athens 抄什麼' },
        body:
          h.ul([
            { en: '**Pick the problem nobody is advocating for, and say why nobody is.** Asymptomatic, unculturable, rarely blamed — three compounding reasons are the project\'s justification, and they are better than any market-size slide.', zh: '**選一個沒有人替它說話的問題，並說清楚為什麼沒有人。**無症狀、難培養、很少被歸咎——三個互相疊加的原因就是這個專案的正當性，而它們勝過任何市場規模投影片。' },
            { en: '**Read your own null result against the method that produced it.** EPILOBEE found no clinical cases in Greece; EPILOBEE measures clinical prevalence; the pathogen is asymptomatic.', zh: '**拿自己的零結果去對照產生它的方法。**EPILOBEE 在希臘找到零個臨床病例；EPILOBEE 量的是臨床盛行率；而這個病原是無症狀的。' },
            { en: '**Hold the mechanism constant and vary only what you are claiming about.** Same GH25 catalytic domain, different targeting module, so a difference in behaviour means targeting.', zh: '**固定機制，只改變你要主張的那個東西。**相同的 GH25 催化域、不同的導向模組，所以行為差異就代表是導向造成的。' },
            { en: '**Pick the off-target panel that could actually hurt you.** Same order, same Gram stain — and say out loud that this is the harder test.', zh: '**選那個真的可能傷到你的脫靶組合。**同目、同革蘭氏染色——而且把「這是更難的測試」講出來。' },
            { en: '**Declare the specificity cost of a design choice before you test it**, then test it. The RR12 paragraph names the risk, runs the counter-screen, and reports the refutation.', zh: '**在測試之前先聲明一個設計選擇的專一性代價**，然後去測它。RR12 那一段指出風險、做反向篩選、再報告否證結果。' },
            { en: '**Freeze on evidence, then verify the freeze list.** Two of three independent sources per position, and an MD run to check the residues are genuinely rigid.', zh: '**依證據凍結，然後驗證凍結清單。**每個位置要有三種獨立來源中的兩種支持，再跑一次 MD 確認那些殘基真的是剛性的。' },
            { en: '**Add the filter that fixes the failure mode you actually saw.** The ESM-2 −2.0 cut-off exists because an unconstrained run produced buried substitutions that would never fold.', zh: '**補上那個修掉你真的看到的失敗模式的篩選。**ESM-2 −2.0 的門檻之所以存在，是因為一次無限制的執行產生了永遠折不起來的埋藏位置替換。' },
            { en: '**Build the compartment the biology actually has.** A sealed, expanding lumen tracked in absolute cell numbers, so gut growth cannot be mistaken for killing.', zh: '**建出生物學真正具有的那個隔室。**一個密閉、會擴張的管腔，以絕對菌數追蹤，這樣腸道生長就不會被誤認為殺菌。' },
            { en: '**Separate rate from stability in a pH experiment.** That one split moved the required dose 31-fold.', zh: '**在 pH 實驗中把速率與穩定性分開。**就這一次拆分，把所需劑量改變了 31 倍。' },
            { en: '**Let the model tell you your own season worked on the wrong lever, and print that sentence.** This is the single bravest paragraph we read in 2026.', zh: '**讓模型告訴你自己整季都在拉錯的槓桿，然後把那句話印出來。**這是我們在 2026 年讀到最勇敢的一段。' },
            { en: '**Distrust your proxy out loud.** A 1.5-fold turbidity gap separating recovery from death is the argument for CFU counts, and it is their argument, not a reviewer\'s.', zh: '**公開地不信任自己的代理指標。**1.5 倍的濁度差距就分開了恢復與死亡，這就是該改用菌落計數的論據——而且這是他們自己提出的，不是審查者提出的。' },
            { en: '**Retract your own argument when a better analysis kills it, and prefer the narrower claim** — because a graded effect points at a mechanism where a clean absence points at nothing.', zh: '**當更好的分析殺掉你自己的論證時就撤回它，並且偏好較窄的主張**——因為一個分級的效應指向一個機制，而一個乾淨的「沒有」什麼都不指向。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that the Interpretation section is the most self-critical writing across both Top 10 lists. Everything else on this page is the team\'s own, read from [2026.igem.wiki/athens](https://2026.igem.wiki/athens/).',
            zh: '標示為我們的看法：上面十二點，以及「Interpretation 一節是兩份前十名清單中最自我批判的文字」這個判斷。本頁其餘內容都是該隊自己的，讀自 [2026.igem.wiki/athens](https://2026.igem.wiki/athens/)。'
          })
      });

      return out;
    }
  };
})(window);
