/* HFI — a two-bacteria lysine-degradation system for hyperlysinemia.
   Top 10 High School and Best Village Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/hfi/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Knock out ldcC first, before anything else', zh: '先剔除 ldcC，比任何其他步驟都早' },
        s: { en: 'CRISPR-Cas9 in EcN with pEcCas9 / pEcgRNA-ldcC; genomic PCR 3,272 bp in wild type against 1,134 bp in the knockout', zh: '在 EcN 中以 pEcCas9／pEcgRNA-ldcC 做 CRISPR-Cas9；基因體 PCR 野生型 3,272 bp、剔除株 1,134 bp' }, tone: 'g' },
      { l: { en: 'Display SpyTag on one strain, SpyCatcher on the other', zh: '一株展示 SpyTag，另一株展示 SpyCatcher' },
        s: { en: 'eCPX outer-membrane display, mCherry and EGFP as strain labels; fluorescence microscopy plus ImageJ on the merged images', zh: 'eCPX 外膜展示，以 mCherry 與 EGFP 標記兩株；螢光顯微鏡加上對疊合影像做 ImageJ 分析' } },
      { l: { en: 'Split the pathway across the two strains', zh: '把代謝路徑拆到兩株菌身上' },
        s: { en: 'Strain A carries LKR and SDH, strain B carries ALDH and AASDHPPT; HPLC-MS on supernatant lysine at three mixing ratios', zh: 'A 株帶 LKR 與 SDH、B 株帶 ALDH 與 AASDHPPT；以 HPLC-MS 測三種混合比例下的上清液離胺酸' } },
      { l: { en: 'Put both strains in artificial colon fluid', zh: '把兩株菌放進人工結腸液' },
        s: { en: '48 h incubation, no severe growth arrest, EGFP accumulation as the protein-stability readout', zh: '培養 48 小時、未出現嚴重生長停滯，以 EGFP 累積作為蛋白穩定性的讀值' }, tone: 'a' },
      { l: { en: 'Build the kill switch, then measure the lysis three ways', zh: '建出自殺開關，再用三種方式量裂解' },
        s: { en: 'Para-Bxb1 flipping an inverted lysis E cassette under PcyoA; OD₆₀₀, then CFU, then supernatant GFP release', zh: '以 Para-Bxb1 翻轉受 PcyoA 控制的反向 lysis E 卡匣；先 OD₆₀₀、再 CFU、最後上清液 GFP 釋放' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Screen SpyCatcher display capacity in silico', zh: '先在電腦裡篩 SpyCatcher 的展示容量' },
        s: { en: 'NetLogo 3D agent model, 200 cells, 2,000 ticks; 15 display sites hold the largest cluster near 24 % instead of 91–98 %', zh: 'NetLogo 3D 個體模型、200 顆細胞、2,000 個時間步；15 個展示位點讓最大群聚停在約 24%，而不是 91–98%' }, tone: 'v' },
      { l: { en: 'Simulate the three mixing ratios', zh: '模擬三種混合比例' },
        s: { en: 'Mean largest cluster 13.67 / 31.67 / 101.67 at 2:1, 1:1, 1:2 — and a persistent peak at size one in every case', zh: '2:1、1:1、1:2 下最大群聚平均為 13.67／31.67／101.67——而每一種情形都留下一個「大小＝1」的持續尖峰' }, tone: 'v' },
      { l: { en: 'Model the intermediates nobody could measure', zh: '替沒人量得到的中間產物建模' },
        s: { en: 'Mass-conserving ODE system, 3 compartments and 13 state variables, RK4; AASA peak 0.3767 at 2:1 against 0.1123 at 1:2', zh: '守質量的常微分方程系統、3 個區室與 13 個狀態變數、RK4；AASA 峰值在 2:1 為 0.3767，在 1:2 為 0.1123' }, tone: 't' }
    ],
    links: [
      { w: 1, d: 0, l: { en: 'the RBS was chosen before a single plasmid was built', zh: 'RBS 在任何一個質體被建出來之前就選定了' }, up: true },
      { w: 1, d: 1, l: { en: 'free single cells predicted, then seen', zh: '游離單細胞先被預測，後被看到' }, up: true },
      { w: 2, d: 2, l: { en: 'saccharopine and AASA were never quantified', zh: '糖離胺酸與 AASA 從未被定量' } }
    ]
  };

  PD.pages['hs-hfi'] = {
    label: { en: 'HFI', zh: 'HFI' },
    title: { en: 'HFI — two-bacteria lysine pathway', zh: 'HFI — 雙菌離胺酸路徑' },
    render: function (h) {
      var t = team('hfi');
      var out = h.teamhero(t, {
        h1: {
          en: 'Split a human metabolic pathway across two bacteria, staple the two together — then ==publish the figure in which the staple makes no significant difference==.',
          zh: '把一條人體代謝路徑拆給兩株細菌，再把兩株釘在一起——然後==把「那根釘子並未造成顯著差異」的那張圖公開出來==。'
        },
        lede: {
          en: 'The central idea was built, measured, and found to help less than expected — and that is what the wiki says, with the 24 h comparison marked **ns**. The free single cells that explain the shortfall had already been predicted by their own NetLogo model. The design: an orally administered pair of engineered *E. coli* Nissle 1917 strains that degrade lysine in the gut, one carrying the first two enzymes of the saccharopine pathway, the other the downstream steps, with SpyTag–SpyCatcher covalently stapling them into a metabolic tunnel. Hyperlysinemia is a congenital amino-acid disorder caused by mutations in **AASS**: lysine degradation is impaired and lysine accumulates in the intestine, blood and tissue. No specific drug exists, so patients live on a lifelong strict low-protein diet that risks nutritional deficiency in children and affects bone and brain development.',
          zh: '這個核心想法被做出來、被量測，而結果是它的幫助比預期小——而這正是這個 wiki 寫出來的話，24 小時的比較旁邊標著 **ns**。那些用來解釋落差的游離單細胞，早就被他們自己的 NetLogo 模型預測到了。設計本身是一對口服的改造 *E. coli* Nissle 1917 菌株，在腸道中降解離胺酸：一株帶糖離胺酸路徑的前兩個酵素、另一株帶下游步驟，再用 SpyTag–SpyCatcher 以共價方式把兩株釘成一條代謝隧道。高離胺酸血症是一種由 **AASS** 基因突變造成的先天性胺基酸代謝疾病：離胺酸的降解受阻，離胺酸在腸道、血液與組織中累積。目前沒有專一藥物，患者只能終身嚴格限制蛋白質攝取，而這對兒童有營養缺乏的風險，也影響骨骼與大腦發育。'
        },
        chips: [
          { t: { en: 'EcN ΔldcC chassis', zh: 'EcN ΔldcC 底盤' }, k: 'g' },
          { t: { en: 'SpyTag–SpyCatcher on eCPX', zh: 'eCPX 上的 SpyTag–SpyCatcher' }, k: 'b' },
          { t: { en: 'Split LKR-SDH / ALDH pathway', zh: '拆開的 LKR-SDH／ALDH 路徑' }, k: 'v' },
          { t: { en: 'NetLogo model plus an ODE model', zh: 'NetLogo 模型加一個 ODE 模型' }, k: 't' },
          { t: { en: 'Published the null result', zh: '把無顯著差異的結果公開' }, k: 'r' },
          { t: { en: 'Best Education (High School)', zh: '高中部最佳教育' }, k: 'a' }
        ],
        stats: [
          { v: '4', l: { en: 'DBTL cycles, in build order: chassis, binding, pathway, kill switch', zh: '四個 DBTL 循環，依建構順序：底盤、結合、路徑、自殺開關' } },
          { v: 'ns', l: { en: 'The 24 h comparison of Spy-crosslinked against freely mixed co-cultures', zh: 'Spy 交聯與自由混合共培養在 24 小時的比較結果' } },
          { v: '2:1', l: { en: 'Upstream : downstream ratio that cleared lysine best', zh: '清除離胺酸表現最好的上游：下游比例' } },
          { v: '19', l: { en: 'New parts contributed: 11 basic and 8 composite', zh: '新貢獻的元件數：11 個基礎元件與 8 個複合元件' } },
          { v: '48 h', l: { en: 'Both engineered strains sustained in artificial colon fluid', zh: '兩株改造菌在人工結腸液中維持的時間' } },
          { v: '79 → 96 %', l: { en: 'Correct answer on synthetic biology, pre to post, 24 students', zh: '合成生物學答對率，課前到課後，24 位學生' } }
        ]
      });

      out += h.toc([
        { id: 'f-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'f-clear', t: { en: 'Clear the background', zh: '先清掉背景' } },
        { id: 'f-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'f-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'f-limit', t: { en: 'The result that did not work', zh: '那個沒有成功的結果' } },
        { id: 'f-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'f-edu', t: { en: 'Education', zh: '教育' } },
        { id: 'f-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'f-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'f-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A disease treated with a diet, answered with a probiotic that eats the amino acid', zh: '一個只能靠飲食控制的疾病，用一株會吃掉那個胺基酸的益生菌來回答' },
        lede: {
          en: 'In hyperlysinemia the AASS protein is defective, the saccharopine pathway is blocked, and lysine builds up. There is no drug, so the treatment is the diet — and lysine is an essential amino acid, which is what makes the treatment itself a risk.',
          zh: '在高離胺酸血症中，AASS 蛋白有缺陷、糖離胺酸路徑受阻，離胺酸因此累積。沒有藥，所以治療就是飲食——而離胺酸是必需胺基酸，這正是讓「治療本身」成為風險的原因。'
        },
        body:
          h.p({
            en: 'Their Description page states the clinical problem as four separate failures of diet therapy rather than one: whether to intervene at all is ambiguous because elevated lysine biochemistry does not predict clinical outcome; a strict lysine-limited diet carries growth-retardation and malnutrition risk in infants and children; adherence is poor and the special metabolic formulas are expensive and unevenly available; and in **type II** hyperlysinemia, where SDH activity is lost while LKR activity remains, restricting lysine cannot clear the toxic **saccharopine** that accumulates downstream. The last of those is the one a diet structurally cannot fix.',
            zh: '他們的 Description 頁把臨床問題寫成飲食治療的四個各自獨立的失效，而不是一個：首先，是否該介入本身就不明確，因為離胺酸生化數值升高並不能預測臨床結果；其次，嚴格限制離胺酸的飲食對嬰幼兒有生長遲滯與蛋白質營養不良的風險；第三，遵從度低，而特殊代謝配方昂貴且各地取得程度不一；最後，在 **第二型** 高離胺酸血症中，SDH 活性喪失而 LKR 活性仍在，限制離胺酸並無法清掉在下游累積的有毒 **糖離胺酸**。最後這一項，是飲食在結構上就修不好的。'
          }) +
          h.p({
            en: 'Two stated inspirations: **live biotherapeutic products**, which is why the chassis is the probiotic *E. coli* Nissle 1917 (EcN) rather than an enzyme to be infused — a living micro-factory in the gut, acting before the meal\'s lysine reaches the bloodstream; and a **"cocktail" analogy**, which is why the pathway is divided between two strains instead of loaded into one, citing metabolic burden and low pathway efficiency in single-strain designs. After an interview they also fixed the product\'s position as **preventive** — reducing the post-meal lysine peak through continuous colonisation — rather than as an acute treatment.',
            zh: '他們明確寫出兩個靈感來源：**活體生物治療產品**，這是底盤選擇益生菌 *E. coli* Nissle 1917（EcN）而不是輸注酵素的理由——腸道裡的一座活的微型工廠，在一餐的離胺酸抵達血流之前就動作；以及一個**「雞尾酒」類比**，這是把路徑分給兩株菌、而不是全塞進一株的理由，他們引用的根據是單株設計的代謝負擔與路徑效率偏低。在一次訪談之後，他們也把產品定位釘成**預防性**的——透過持續定殖壓低餐後的離胺酸高峰——而不是急性治療。'
          }) +
          h.flow({
            title: { en: 'Chassis → binding → pathway → kill switch', zh: '底盤→結合→路徑→自殺開關' },
            sub: { en: 'Four modules, built in this order across four DBTL cycles. The order is the argument: nothing is measured until the thing that would confound the measurement is gone.', zh: '四個模組，在四個 DBTL 循環中依此順序建構。順序本身就是論點：在會干擾量測的那個東西被移除之前，什麼都不量。' },
            stages: [
              { label: { en: 'ΔldcC chassis', zh: 'ΔldcC 底盤' }, sub: { en: 'Remove the host\'s own lysine sink', zh: '移除宿主自己的離胺酸消耗' }, tone: 'g',
                items: [{ en: 'CRISPR-Cas9 deletion of ldcC', zh: '以 CRISPR-Cas9 剔除 ldcC' }] },
              { label: { en: 'Binding', zh: '結合' }, sub: { en: 'Couple the two strains on purpose', zh: '刻意把兩株菌耦合起來' }, tone: 'b',
                items: [{ en: 'One Spy partner per strain, on eCPX', zh: '每株菌一個 Spy 夥伴，載於 eCPX' }] },
              { label: { en: 'Pathway', zh: '路徑' }, sub: { en: 'Split the four enzymes two and two', zh: '把四個酵素二對二拆開' }, tone: 'v',
                items: [{ en: 'LKR-SDH upstream, ALDH downstream', zh: '上游 LKR-SDH、下游 ALDH' }] },
              { label: { en: 'Kill switch', zh: '自殺開關' }, sub: { en: 'Lyse once the cells leave the gut', zh: '細胞離開腸道後才裂解' }, tone: 'a',
                items: [{ en: 'Bxb1 flips it, then PcyoA fires it', zh: 'Bxb1 先翻轉，PcyoA 再點火' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Description and Engineering pages.', zh: '由我們依該隊 Description 與 Engineering 頁繪製。' }
          }) +
          h.p({
            en: 'One design decision inside the pathway module reverses an instinct most teams have. They originally wanted a **lysine-responsive promoter**, so the enzymes would be made when lysine appeared. An expert pointed out the lag: by the time sensing has produced enzyme, the meal\'s lysine has already entered the bloodstream and the therapeutic window is gone. So they deleted the sensor and expressed everything **constitutively** from BBa_J23100. A regulated circuit would have looked cleverer on the wiki; they took the one that can act in time.',
            zh: '路徑模組裡有一個設計決定翻轉了大多數隊伍的本能。他們原本想用一個**對離胺酸有反應的啟動子**，讓離胺酸出現時才製造酵素。一位專家指出其中的時間落差：等感測完成並做出酵素，一餐的離胺酸早已進入血流，治療時間窗已經過去。於是他們刪掉感測器，改由 BBa_J23100 **組成型**表達所有酵素。一個有調控的線路在 wiki 上看起來會更聰明；他們選的是來得及動作的那一個。'
          })
      });

      /* ---------------- clear the background ---------------- */
      out += h.sec({
        id: 'f-clear',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'The knockout is a measurement decision, not a cloning step', zh: '那個剔除是一個量測決定，不是一個選殖步驟' },
        lede: {
          en: 'EcN already consumes lysine. If you add a heterologous lysine pathway to a host that eats lysine on its own, every number you then produce is a sum of two effects you cannot separate.',
          zh: 'EcN 本來就會消耗離胺酸。如果你把一條外源離胺酸路徑加到一個本身就會吃離胺酸的宿主裡，之後你做出來的每一個數字，都是兩個你分不開的效應的總和。'
        },
        body:
          h.p({
            en: '*ldcC* encodes a constitutively expressed lysine decarboxylase that turns L-lysine into cadaverine. Two reasons to remove it, and the team gives both: it **consumes the substrate** and so interferes with any later evaluation of the introduced pathway, and **cadaverine accumulation inhibits EcN growth**. They also explain why *ldcC* and not the other decarboxylase: EcN carries *cadA* as well, but *cadA* belongs to the acid-induced *cad* stress response and is barely active near neutral pH, which is the pH of the gut they are aiming at. The target was picked with CHOPCHOP (chosen site 82.24 % predicted efficiency, 55 % GC), edited with the pEcCas9 / pEcgRNA system against a 998 bp fused homology template, and confirmed by genomic PCR: **3,272 bp in wild type, 1,134 bp in the knockout.**',
            zh: '*ldcC* 編碼一個組成型表達的離胺酸脫羧酶，會把 L-離胺酸轉成屍胺。移除它有兩個理由，而該隊兩個都寫了：它會**消耗底物**，因此干擾之後對外源路徑功能的評估；而且**屍胺累積會抑制 EcN 的生長**。他們也解釋了為什麼是 *ldcC* 而不是另一個脫羧酶：EcN 同時帶有 *cadA*，但 *cadA* 屬於酸誘導的 *cad* 逆境反應系統，在接近中性的 pH 下幾乎沒有活性，而那正是他們瞄準的腸道 pH。標的以 CHOPCHOP 挑選（所選位點預測效率 82.24%、GC 含量 55%），以 pEcCas9／pEcgRNA 系統搭配一段 998 bp 的融合同源模板進行編輯，並以基因體 PCR 確認：**野生型 3,272 bp、剔除株 1,134 bp。**'
          }) +
          h.take({ en: 'Knockout against a cell-free blank is ns, and that is what licenses everything after it', zh: '剔除株對無細胞空白組是 ns，而正是這一點讓後面所有事情站得住腳' }, {
            en: 'HPLC-MS on supernatant lysine over 24 h gives the three-way comparison that pays for the whole cycle: wild-type EcN consumes lysine continuously, the knockout consumes much less (**p < 0.001** against wild type at the 24 h endpoint), and the knockout against a cell-free blank is **ns**. That last comparison is the one that licenses everything afterwards — it is what lets a later drop in lysine be attributed to the engineered enzymes rather than to the host. Build the chassis first and you get that sentence; build the pathway first and you never can.',
            zh: '以 HPLC-MS 追蹤 24 小時內上清液的離胺酸，給出了讓整個循環值得做的那個三方比較：野生型 EcN 持續消耗離胺酸、剔除株消耗少得多（24 小時終點對野生型 **p < 0.001**），而剔除株對無細胞空白組則是 **ns**。最後那個比較才是讓後面所有事情站得住腳的那一個——它讓之後離胺酸的下降可以歸因於外源酵素，而不是宿主。先把底盤做好，你就能寫出這句話；先做路徑，你永遠寫不出來。'
          }) +
          h.h3({ en: 'Three times they threw away a readout and said why', zh: '三次他們丟掉一個讀值，並說出理由' }) +
          h.p({
            en: 'The same instinct shows up in how they treat their own assays. Three readouts were replaced during the project, and in each case the published reason is a property of the method rather than a mistake in the hands.',
            zh: '同樣的本能也出現在他們對待自己試驗的方式上。整個專案中有三個讀值被換掉，而每一次公開的理由都是方法本身的性質，而不是手上的失誤。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Readout', zh: '讀值' }, w: '22%' },
              { t: { en: 'What went wrong', zh: '出了什麼問題' } },
              { t: { en: 'What replaced it', zh: '用什麼取代' }, w: '26%' }
            ],
            rows: [
              [{ en: 'Ninhydrin colorimetry for lysine', zh: '以茚三酮比色法測離胺酸' },
               { en: 'The standard curve was fine (**y = 1.4484x + 0.1373, R² = 0.9954**) and the result was still useless: the three whole-cell groups read almost identically and the engineered group even read slightly **higher**. The reaction is not specific to lysine — it responds to every free α-amino group, and cells lysing during a 12 h whole-cell incubation release amino acids into the same supernatant being read.', zh: '標準曲線沒有問題（**y = 1.4484x + 0.1373、R² = 0.9954**），結果仍然沒有用：三組全細胞反應讀出來幾乎一樣，而改造組甚至還**偏高**。這個反應對離胺酸沒有專一性——它對每一個游離 α-胺基都有反應，而在 12 小時全細胞培養過程中裂解的細菌，會把胺基酸釋放到正在被讀的那個上清液裡。' },
               { en: '**FDAA derivatisation plus HPLC-MS.** Retention time 17.04 min, m/z 398.1, standard curve **R² = 0.9985**.', zh: '**FDAA 衍生化加 HPLC-MS。**滯留時間 17.04 分鐘、m/z 398.1、標準曲線 **R² = 0.9985**。' }],
              [{ en: 'OD₆₀₀ for kill-switch lysis', zh: '以 OD₆₀₀ 測自殺開關的裂解' },
               { en: 'Induced cultures did slow down, which looked like success — but they looked at the cells and saw obvious debris. OD₆₀₀ scatters off intact cells, dead cells and fragments alike, so the debris left behind by lysis **inflates the reading and overestimates survivors.**', zh: '誘導組的生長確實變慢，看起來像成功——但他們去看了細胞，發現明顯的碎片。OD₆₀₀ 對完整細胞、死細胞與碎片一律散射，所以裂解留下的碎片會**把讀值撐高，並高估存活數。**' },
               { en: '**CFU plate counting**, named as the gold standard; viable counts fell with **p < 0.0001** after induction.', zh: '**CFU 平板計數**，他們指名為黃金標準；誘導後活菌數下降，**p < 0.0001**。' }],
              [{ en: 'CFU counting', zh: 'CFU 計數' },
               { en: 'Accurate but slow: serial dilution, plating and overnight growth per time point, so it cannot carry a dense time course.', zh: '準確但慢：每個時間點都要連續稀釋、塗盤、隔夜培養，因此撐不起密集的時序。' },
               { en: '**Supernatant GFP-release RFU**, for kinetics, with CFU kept for endpoint confirmation. They also report that uninduced controls drift upward — trace circuit leakage plus natural cell death.', zh: '**上清液 GFP 釋放的 RFU**，用來做動力學，CFU 則保留給終點確認。他們也報告未誘導的對照組訊號會緩慢上升——微量的線路滲漏加上自然死亡。' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Measurement, Engineering and Results pages. The table is ours.', zh: '讀自該隊 Measurement、Engineering 與 Results 頁。表格是我們整理的。' }
          }) +
          h.note({
            en: 'Their Measurement page ends each of these with a comparison table — specificity, sensitivity, throughput, role — and assigns each method a role rather than a rank: ninhydrin for screening, HPLC-MS as the authority; OD₆₀₀ for screening, RFU for kinetics, CFU for confirmation. A discarded assay is kept on the page with its job description, which is more useful to the next team than quietly deleting it.',
            zh: '他們的 Measurement 頁在每一項後面都附上一張比較表——專一性、靈敏度、通量、角色——並且給每個方法一個角色而不是一個排名：茚三酮用於初篩、HPLC-MS 作為權威；OD₆₀₀ 用於初篩、RFU 用於動力學、CFU 用於確認。一個被棄用的試驗被留在頁面上、並附上它的職責說明，這對下一支隊伍比悄悄刪掉它有用得多。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'f-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A model that earned its place by predicting a negative', zh: '一個靠「預測出一個負面結果」而站住位置的模型' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'HFI: four DBTL cycles against two models', zh: 'HFI：四個 DBTL 循環對上兩個模型' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone. The arrow to watch is the middle one: the simulation said free single cells would persist, and the microscopy then found them.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。要看的是中間那一支：模擬說游離單細胞會持續存在，而顯微鏡後來真的找到了。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Measurement and Model pages.', zh: '由我們依該隊 Engineering、Results、Measurement 與 Model 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'f-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Four cycles, in the order they were actually run', zh: '四個循環，照它們實際被執行的順序' },
        body:
          h.phases([
            { h: { en: 'Chassis: delete the host\'s lysine decarboxylase', zh: '底盤：刪掉宿主的離胺酸脫羧酶' },
              p: { en: 'CRISPR-Cas9 deletion of *ldcC* in EcN with the pEcCas9 / pEcgRNA-ldcC two-plasmid system, 504 bp homology arms spliced by overlap PCR into a 998 bp repair template.', zh: '以 pEcCas9／pEcgRNA-ldcC 雙質體系統在 EcN 中用 CRISPR-Cas9 刪除 *ldcC*，兩段 504 bp 同源臂以重疊 PCR 接成 998 bp 的修復模板。' },
              items: [
                { en: 'Growth across a lysine gradient — **0, 0.5, 1, 2 and 5 mg/mL for 48 h** — shows the knockout still stressed by high lysine but less so than wild type; the head-to-head comparison is made **at 5 mg/mL (p < 0.05)**. Their Contribution page states the limit plainly: growth inhibition was **not eliminated**, only reduced.', zh: '在離胺酸梯度下的生長——**0、0.5、1、2、5 mg/mL，48 小時**——顯示剔除株仍會受高濃度離胺酸的壓力，但程度比野生型輕；正面比較是**在 5 mg/mL 下（p < 0.05）**做的。他們的 Contribution 頁把限制寫得很直白：生長抑制**並未被消除**，只是變小。' },
                { en: 'HPLC-MS on residual lysine at 0, 6, 12 and 24 h: wild type depletes it, the knockout barely does, and **knockout against blank is ns.** A cell-free blank was run alongside, which is what rules out non-biological degradation of lysine itself.', zh: '以 HPLC-MS 在 0、6、12、24 小時測殘餘離胺酸：野生型把它耗掉、剔除株幾乎沒有，而**剔除株對空白組是 ns。**他們同時跑了無細胞空白組，這才排除了離胺酸自身的非生物性降解。' },
                { en: 'The residual decline that the knockout does still show is attributed, not hidden: background activity of the acid-induced *cadA* decarboxylase, plus natural consumption.', zh: '剔除株仍然殘留的那一點下降趨勢被歸因、而不是被藏起來：酸誘導的 *cadA* 脫羧酶的背景活性，加上自然消耗。' }
              ],
              done: { en: 'A chassis whose own lysine consumption is statistically indistinguishable from an empty tube.', zh: '一個自身離胺酸消耗在統計上與空管子無法區分的底盤。' } },
            { h: { en: 'Binding: one Spy partner per strain, and a negative control that matters', zh: '結合：每株菌一個 Spy 夥伴，以及一個真正重要的陰性對照' },
              p: { en: 'The **SpyTag–SpyCatcher** system forms an irreversible isopeptide bond on contact with no cofactor; **eCPX**, the circularly permuted OmpX display scaffold, presents one partner on each strain\'s outer membrane. mCherry and EGFP mark the two populations so a mixed cluster is visible as overlap.', zh: '**SpyTag–SpyCatcher** 系統接觸即形成不可逆的異肽鍵，不需輔因子；**eCPX**（環狀置換過的 OmpX 展示支架）把其中一個夥伴呈現在各菌株的外膜上。mCherry 與 EGFP 標記兩個族群，使混合群聚可以透過疊合被看見。' },
              items: [
                { en: 'Co-culture produced red–green chimeric clusters, and **the controls without SpyTag–SpyCatcher hardly formed hybrid aggregates at all** — which is what excludes non-specific clumping. They describe the single overlap seen in the control field as probably accidental stacking rather than reading it as signal.', zh: '共培養產生紅綠嵌合群聚，而**沒有 SpyTag–SpyCatcher 的對照組幾乎完全不形成混合聚集**——這才排除了非專一性的黏聚。他們把對照視野中看到的那一個疊合描述為可能只是偶然堆疊，而不是把它讀成訊號。' },
                { en: 'Quantified by ImageJ on the merged images, cluster number and mean core area track the mixing ratio: ST:SC 2:1 gives **3 candidates per field at 15.04 μm²**, 1:1 gives **16 per field at 15.24 μm²**, 1:2 gives **14 per field at 19.41 μm²** — a higher SpyCatcher proportion giving larger clusters.', zh: '以 ImageJ 對疊合影像定量，群聚數與平均核心面積隨混合比例變化：ST:SC 為 2:1 時**每視野 3 個候選、15.04 μm²**；1:1 時**每視野 16 個、15.24 μm²**；1:2 時**每視野 14 個、19.41 μm²**——SpyCatcher 比例越高，群聚越大。' },
                { en: 'SDS-PAGE is reported as it came out rather than as it should have: the SpyTag-eCPX band was bright, the **SpyCatcher-eCPX band faint**, i.e. the lower-expressed partner is the one whose display capacity the model had deliberately kept low.', zh: 'SDS-PAGE 是照結果報的，而不是照「應該的樣子」報：SpyTag-eCPX 的條帶很亮，**SpyCatcher-eCPX 的條帶很淡**，也就是說，表達量較低的那個夥伴，正是模型刻意把展示容量壓低的那一個。' },
                { en: 'They also name what the imaging cannot do: microscopy plus ImageJ on a handful of fields carries statistical error, and the fixes they specify are flow cytometry or automated image analysis over many fields, plus antibody staining to measure display efficiency directly.', zh: '他們也指名這個影像方法做不到的事：在少數視野上用顯微鏡加 ImageJ 會帶來統計誤差，而他們指定的解法是流式細胞術或對大量視野做自動影像分析，再加上抗體染色以直接量展示效率。' }
              ] },
            { h: { en: 'Pathway: two enzymes upstream, two downstream, and a ratio series', zh: '路徑：上游兩個酵素、下游兩個酵素，再加一組比例序列' },
              p: { en: '**Strain A** expresses the **LKR** and **SDH** domains, taking lysine to saccharopine and on to AASA; **strain B** expresses **ALDH** and **AASDHPPT** for the downstream steps toward the TCA cycle. Both sit in the ΔldcC chassis and both carry their Spy display module.', zh: '**A 株**表達 **LKR** 與 **SDH** 兩個功能域，把離胺酸帶到糖離胺酸、再到 AASA；**B 株**表達 **ALDH** 與 **AASDHPPT**，負責往三羧酸循環方向的下游步驟。兩株都位於 ΔldcC 底盤中，也都帶著自己的 Spy 展示模組。' },
              items: [
                { en: 'SDS-PAGE matched all four heterologous enzymes to their predicted masses — **LKR 41.5, SDH 48.9, ALDH 155.3, AASDHPPT 30.7 kDa** — so "expressed" is a separate claim from "cloned".', zh: 'SDS-PAGE 把四個外源酵素都對上了預期分子量——**LKR 41.5、SDH 48.9、ALDH 155.3、AASDHPPT 30.7 kDa**——所以「有表達」是一個與「有選殖」分開的主張。' },
                { en: 'HPLC-MS on supernatant residual lysine across mixing ratios: all co-cultures consumed lysine over 24 h, and the **2:1 (upstream LKR-SDH : downstream ALDH-AASDHPPT)** ratio cleared best, with efficiency falling again at 1:1 and 1:2.', zh: '以 HPLC-MS 測不同混合比例下上清液的殘餘離胺酸：所有共培養在 24 小時內都消耗了離胺酸，而 **2:1（上游 LKR-SDH：下游 ALDH-AASDHPPT）** 比例清除得最好，到 1:1 與 1:2 時效率又下降。' },
                { en: 'The ratio result is explained against the simulation rather than on its own: 2:1 makes the *smallest* predicted clusters but carries the most upstream cells, and total upstream enzyme dose dominates. The best-clearing condition is therefore **not** the best-aggregating one.', zh: '這個比例結果是對著模擬來解釋的，而不是孤立成立的：2:1 預測出的群聚*最小*，但它帶有最多上游細胞，而系統中上游酵素的總量主導了結果。因此清除效果最好的條件，**並不是**聚集效果最好的那一個。' },
                { en: 'The comparison the whole design rests on — Spy-crosslinked against freely mixed at the same ratios — came out **slightly in favour of coupling, with the enhancement amplitude limited**, and the 24 h figure is labelled **ns**.', zh: '整個設計所倚賴的那個比較——相同比例下 Spy 交聯對自由混合——結果**略為偏向有耦合的一方，但增幅有限**，而 24 小時的那張圖標著 **ns**。' }
              ],
              done: { en: 'A measured ratio optimum, and an honest size for the effect the architecture was built to produce.', zh: '一個量出來的最佳比例，以及一個對「這套架構本來要產生的效應」誠實的尺寸。' } },
            { h: { en: 'Environment: both strains into artificial colon fluid', zh: '環境：把兩株菌放進人工結腸液' },
              p: { en: 'Added after an interview, not planned from the start: Professor Liujie Huo suggested verifying survival and protein stability in a simulated intestinal environment, so they ran one.', zh: '這是在訪談之後補上的，不是一開始就排進計畫的：霍教授建議在模擬腸道環境中驗證存活與蛋白穩定性，於是他們做了一組。' },
              items: [
                { en: 'Empty ΔldcC, the LKR-SDH strain and the ALDH strain all completed **48 h** in artificial colon fluid with no obvious growth arrest, though OD₆₀₀ declined slowly over the incubation.', zh: '空的 ΔldcC、LKR-SDH 株與 ALDH 株都在人工結腸液中完成 **48 小時**，沒有明顯的生長停滯，不過 OD₆₀₀ 在培養過程中緩慢下降。' },
                { en: '**EGFP as a model protein** rather than assaying the pathway enzymes: normalised fluorescence held and slowly rose over 48 h, i.e. heterologous protein can still be synthesised and stay stable in that medium.', zh: '用 **EGFP 當模型蛋白**，而不是去測那些路徑酵素：標準化後的螢光在 48 小時中維持並緩慢上升，也就是說在那個培養液中外源蛋白仍能被合成並保持穩定。' },
                { en: 'They call it preliminary, and name exactly what it is not: **anaerobic** gut-simulating culture has not been run, so neither the metabolic activity nor the kill-switch leakage risk has been tested under real gut oxygen conditions.', zh: '他們稱這是初步的，並明確指出它不是什麼：**厭氧**的腸道模擬培養還沒做，所以代謝活性與自殺開關的滲漏風險，都還沒有在真實腸道的氧氣條件下被測過。' }
              ] },
            { h: { en: 'Containment: a switch that flipped itself, then an RBS ladder', zh: '圍阻：一個自己翻掉的開關，接著是一道 RBS 階梯' },
              p: { en: 'The kill switch is two constraints in series: arabinose-induced **Para-Bxb1** recombinase inverts an attB/attP-flanked **lysis E** cassette, and only then can the oxygen-sensing **PcyoA** promoter express it — silent in the anaerobic gut, active once the cells are excreted.', zh: '這個自殺開關是兩道串在一起的限制：阿拉伯糖誘導的 **Para-Bxb1** 重組酶翻轉受 attB／attP 夾持的 **lysis E** 卡匣，之後感氧的 **PcyoA** 啟動子才能表達它——在厭氧的腸道中靜默，細胞被排出後才活化。' },
              items: [
                { en: 'The first build failed in a way only sequencing could catch: **without any arabinose, the cassette had already inverted**, leaving lysis E in the expressible orientation. They attribute it to basal leakage of Para combined with the strong RBS (taaggaggt) they had put in front of Bxb1 — a flip-flop switch is irreversible, so a trace of recombinase is enough.', zh: '第一版的失敗只有定序抓得到：**在完全沒有阿拉伯糖的情況下，卡匣就已經翻轉**，使 lysis E 處於可表達的方向。他們把原因歸於 Para 的基礎滲漏，加上他們放在 Bxb1 前面的那個強 RBS（taaggaggt）——翻轉式開關是不可逆的，所以一點點重組酶就足夠了。' },
                { en: 'Fix by screening translation strength, not by adding parts: five RBSs from the Registry in front of Bxb1. Sequencing showed **B0030 and B0035 still flipped prematurely; B0029, B0031 and B0033 did not.** The failures are listed by name alongside the successes.', zh: '修法是去篩轉譯強度，而不是再加元件：從 Registry 取五個 RBS 放在 Bxb1 前面。定序顯示 **B0030 與 B0035 仍然提早翻轉；B0029、B0031 與 B0033 沒有。** 失敗的那些與成功的那些被並列指名。' },
                { en: 'Then the readout ladder: OD₆₀₀ for a first look, **CFU falling with p < 0.0001** after induction, and supernatant **GFP-release RFU rising with p < 0.0001** — three measurements of three different things, with the limits of each written down.', zh: '接著是讀值的階梯：OD₆₀₀ 用來先看一眼，誘導後 **CFU 下降、p < 0.0001**，而上清液 **GFP 釋放的 RFU 上升、p < 0.0001**——三個量測量三件不同的事，而每一項的限制都寫下來了。' },
                { en: 'Their own stated gap on this module: lysis has been shown under **aerobic** conditions, but suppression under strict anaerobic conditions, and killing across the anaerobic-to-aerobic transition, have not been tested — and plasmid copy number\'s effect on Bxb1 basal expression is still open.', zh: '他們自己寫出這個模組的缺口：裂解是在**好氧**條件下被證明的，但嚴格厭氧下的抑制、以及由厭氧轉好氧過程中的殺滅效果，都還沒測過——而質體拷貝數對 Bxb1 基礎表達的影響也仍未解決。' }
              ] }
          ])
      });

      /* ---------------- the null result ---------------- */
      out += h.sec({
        id: 'f-limit',
        kick: { en: 'The honest headline', zh: '誠實的頭條' },
        h2: { en: 'The central idea was built, measured, and reported as helping less than expected', zh: '核心想法被做出來、被量測，並被報告為「幫助比預期小」' },
        lede: {
          en: 'Everything about this project points at one claim: that stapling two strains together channels the pathway. They tested it against the right control, got a small effect, and printed the small effect.',
          zh: '這個專案的一切都指向一個主張：把兩株菌釘在一起可以把代謝路徑導流起來。他們用正確的對照去測它，得到一個小的效應，然後把那個小的效應印出來。'
        },
        body:
          h.warn({
            en: 'The control is freely mixed co-culture of the same two strains at the same ratios, without Spy crosslinking — which is exactly the comparison that can falsify the design. At 24 h, residual lysine was **slightly lower with SpyTag–SpyCatcher than without it at all three ratios**, and the figure caption reports the comparison as **ns, not significant**. In the text: *"bacterial physical coupling can enhance pathway performance, although the improvement is relatively modest"*, and the Results page puts it as *"moderate improvement … yet the enhancement amplitude was limited."* The Model page is blunter still: *"physical cell aggregation provides only a moderate, nonsignificant boost."*',
            zh: '對照是同樣兩株菌、同樣比例、但沒有 Spy 交聯的自由混合共培養——而這正是能否證偽這個設計的那個比較。在 24 小時，**三種比例下有 SpyTag–SpyCatcher 的殘餘離胺酸都略低於沒有的那一組**，而圖說把這個比較報告為 **ns，無顯著差異**。正文寫的是：*「細菌的物理耦合可以提升路徑表現，雖然改善相對有限」*，而 Results 頁的說法是*「有中等程度的改善……但增幅有限」*。Model 頁說得更直接：*「物理性的細胞聚集只提供了中等、且不顯著的提升。」*'
          }) +
          h.h3({ en: 'And the reason is named, in four parts', zh: '而理由被指名，分成四項' }) +
          h.p({
            en: 'A large quantity of **free single cells persisted in every co-culture group.** Not all pairs formed the intended metabolic tunnel, so the architecture was never fully in place to be measured. They state outright that the system **cannot reach 100 % aggregation** even with long incubation, and give four causes:',
            zh: '**每一組共培養中都殘留著大量的游離單細胞。**並非所有配對都形成了預期的代謝隧道，所以那套架構從來沒有完整到位、可以被量測。他們直接寫出這個系統即使長時間培養也**無法達到 100% 的聚集**，並給出四個原因：'
          }) +
          h.ul([
            { en: '**Limited surface-display binding sites** — each cell can only ever make a finite number of bonds, and once its capacity is spent its cluster stops growing.', zh: '**表面展示的結合位點有限**——每個細胞能形成的鍵結數量本來就有上限，容量用完之後它所在的群聚就不再長大。' },
            { en: '**Random collision dynamics** in suspension culture: binding needs two partners with free capacity to meet, and diffusion only delivers so many meetings.', zh: '**懸浮培養中的隨機碰撞動力學**：結合需要兩個都還有剩餘容量的夥伴相遇，而擴散只能帶來有限次數的相遇。' },
            { en: '**Cell proliferation** during cultivation, which keeps adding new unbound cells to the field.', zh: '**培養期間的細胞增殖**，不斷把新的、未結合的細胞加進視野裡。' },
            { en: '**Heterogeneous surface-protein expression** between individual cells, so some cells were never going to bind at all.', zh: '**個別細胞之間表面蛋白表達的異質性**，所以有些細胞從一開始就不會結合。' }
          ]) +
          h.h3({ en: 'A second limit, stated as a limit on what the data can show', zh: '第二個限制，被寫成「資料能證明什麼」的限制' }) +
          h.p({
            en: 'For lack of time, the pathway intermediates **saccharopine and AASA were never quantified.** Their own sentence is the one we would quote at any team tempted to over-read a substrate curve: they *"can only confirm supernatant lysine reduction rather than provide direct evidence for complete multi-step degradation flow."* Lysine going down is consistent with the cascade running; it is not proof the cascade ran to the end.',
            zh: '因為時間不足，路徑的中間產物**糖離胺酸與 AASA 從未被定量。**他們自己的那句話，是我們會拿去給任何想把底物曲線讀過頭的隊伍看的：他們*「只能確認上清液中離胺酸的下降，而無法為完整的多步驟降解流程提供直接證據」*。離胺酸下降與整條級聯在運作是一致的；但它不是級聯跑到最後一步的證明。'
          }) +
          h.take({ en: 'They ran the control that could kill the design, and printed the ns', zh: '他們跑了可能殺掉這個設計的對照，並把那個 ns 印出來' }, {
            en: 'A high-school team spent most of a season on one architectural idea, ran the control that could kill it, and published the figure with **ns** on it — then explained the shortfall with a mechanism their own model had predicted in advance. That is a complete scientific act, and it is rarer on iGEM wikis than any positive result. The alternative versions of this page are easy to imagine: drop the free-mix control, or keep it and describe the difference as an improvement without the significance label, or quietly bury the 24 h panel. They did none of those. The negative is also *useful*: it tells the next team that surface-display coupling in suspension is capacity-limited and collision-limited, and that the fix is not longer incubation.',
            zh: '一支高中隊伍把一個賽季的大半時間花在一個架構性的想法上，跑了可能殺掉它的那個對照，並把標著 **ns** 的那張圖公開——然後用一個他們自己的模型事先就預測到的機制來解釋這個落差。這是一個完整的科學動作，而它在 iGEM 的 wiki 上比任何正面結果都更罕見。這一頁的其他版本很容易想像：拿掉自由混合對照；或者保留它、但把差異描述成「改善」而不標上顯著性；或者悄悄把 24 小時那一格埋掉。他們一個都沒做。而這個負面結果也是*有用的*：它告訴下一支隊伍，懸浮狀態下的表面展示耦合受容量與碰撞雙重限制，而解法不是把培養時間拉長。'
          }) +
          h.h3({ en: 'The expert who told them the whole premise was wrong', zh: '那位告訴他們整個前提是錯的專家' }) +
          h.p({
            en: 'Professor Yang Xiaofeng, a specialist in SpyCatcher–SpyTag systems and multi-enzyme assembly, **strongly questioned the necessity of dual-bacteria coupling**: cells are micron-scale while metabolites are nanoscale, so putting the enzymes in two cells forces every intermediate across two membranes and the space between. He recommended abandoning the architecture and building the whole pathway in one strain. They **tried it** — all four genes into one strain — and report that **almost no positive colonies grew**, which they attribute to gene load, unresolved at the time of writing. They kept the two-strain design, gave their reasons (enzyme ratios can be tuned by strain ratio; small intermediates inside a Spy-crosslinked aggregate should leak less), and also adopted his unrelated advice: enteric-coated capsules instead of engineering more acid resistance, and manufacturing stability as a named translation bottleneck.',
            zh: '楊教授是 SpyCatcher–SpyTag 系統與多酵素組裝的專家，他**強烈質疑雙菌耦合的必要性**：細胞是微米級的，而代謝物是奈米級的，所以把酵素放在兩個細胞裡，等於強迫每個中間產物穿過兩層膜與中間的空間。他建議放棄這個架構，把整條路徑建在單一菌株裡。他們**真的試了**——四個基因全放進同一株——並報告**幾乎長不出陽性單菌落**，他們把原因歸於基因負載過重，而這在撰稿時仍未解決。他們保留了雙菌設計，也給出理由（酵素比例可以靠菌株比例調整；在 Spy 交聯的聚集體內部，小分子中間產物應該較不易漏出），同時也採納了他其他不相關的建議：改用腸溶膠囊而不是再去改造更多耐酸性，並把生產穩定性列為一個被指名的轉譯瓶頸。'
          }) +
          h.note({
            en: 'Our read: publishing an expert\'s rejection of your core design, your attempt to follow it, and the failure of that attempt is harder than publishing the ns panel, and it is the same habit. The single-strain experiment is also the strongest argument *for* their architecture that the page contains — and it is an experimental one, not a rhetorical one.',
            zh: '我們的看法：把一位專家對你核心設計的否定、你照著做的嘗試、以及那次嘗試的失敗一起公開，比公開那張 ns 的圖更難，而它們出自同一個習慣。那個單株實驗同時也是整頁中最強的*支持*他們架構的論據——而它是實驗性的，不是修辭性的。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'f-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'One model chose a part; the other stood in for a measurement they could not make', zh: '一個模型選了一個元件；另一個替代了他們做不到的量測' },
        lede: {
          en: 'Two models, each with a job written down before it ran: an agent-based contact model of cluster formation, and a mass-conserving ODE model of the metabolite pools.',
          zh: '兩個模型，各自在跑之前就寫下了自己的工作：一個是群聚形成的個體接觸模型，另一個是代謝物池的守質量常微分方程模型。'
        },
        body:
          h.h3({ en: 'The cluster model: a part choice, made in silico, then confirmed', zh: '群聚模型：一個在電腦裡做出、之後被確認的元件選擇' }) +
          h.p({
            en: 'Built in **NetLogo 3D 7.0.4**. Each agent is a cell; an A–B contact within an interaction radius of 1.4 model units creates an undirected link and merges two clusters; a cluster is a connected component. 200 cells, 100 of each type, a periodic box from −16 to 16, diffusion 0.17 per tick, 2,000 ticks. Growth, death and protein re-synthesis are deliberately omitted, with the reason given: the binding experiment finishes in one to two hours. Links never break, which matches the covalent chemistry.',
            zh: '以 **NetLogo 3D 7.0.4** 建構。每個個體代表一顆細胞；A 與 B 在 1.4 個模型單位的交互半徑內接觸就建立一條無向連結並合併兩個群聚；一個群聚就是一個連通分量。200 顆細胞、每型各 100 顆，週期性盒子由 −16 到 16，擴散速度每時間步 0.17，共 2,000 個時間步。生長、死亡與蛋白再合成被刻意省略，而且給了理由：結合實驗在一到兩小時內就結束。連結永不斷裂，這與共價化學一致。'
          }) +
          h.p({
            en: 'The design question was how much SpyCatcher display capacity to carry, and the answer had to avoid two failure modes at once: too little binding gives no association, too much collapses the population into one giant network that sediments, burdens the cells and may block substrate diffusion inside the clump. Seven RBS variants were mapped onto display-site counts from 5 to 100. The transition is sharp: at **15 sites (B0035)** the mean largest cluster is **48.67 cells, about 24 % of the system**, while at **50 sites and above the largest component reaches 182–196 cells, 91–98 % of all cells.** B0035 was chosen on that basis, before any plasmid was built — and the wet lab then produced small composite clusters rather than bulky aggregates, which is the prediction coming true.',
            zh: '設計問題是要帶多少 SpyCatcher 展示容量，而答案必須同時避開兩種失效模式：結合太少就沒有關聯；結合太多則讓整個族群塌縮成一個巨大網絡，會沉降、加重細胞負擔，還可能阻礙聚集體內部的底物擴散。七個 RBS 變體被對映到 5 到 100 的展示位點數。這個轉變很陡：在 **15 個位點（B0035）** 時最大群聚平均為 **48.67 顆細胞，約佔系統的 24%**；而在 **50 個位點以上，最大連通分量達到 182–196 顆，佔全部細胞的 91–98%。** B0035 就是依此選定的，而且是在任何質體被建出來之前——接著濕式實驗做出的是小型複合群聚而不是笨重的聚集體，這就是預測成真。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'instability found', zh: '找到不穩定區' }, k: 'a' }],
              h: { en: 'They went back for 60 runs on the noisy condition', zh: '他們回頭對那個雜訊大的條件跑了 60 次' },
              p: { en: 'Three replicates at 30 sites disagreed badly on maximum cluster size, so the 30-site group was expanded to **60 independent runs**: average 8.27 ± 1.57, maximum **109.60 ± 34.48**. The conclusion is about the method, not the part: intermediate display strength produces highly unstable cluster sizes, so a middling RBS is the riskiest choice, not the safe compromise.', zh: '30 個位點的三次重複在最大群聚大小上差異很大，於是 30 位點這組被擴充到 **60 次獨立模擬**：平均 8.27 ± 1.57、最大 **109.60 ± 34.48**。結論關乎方法而不是元件：中等的展示強度會產生高度不穩定的群聚大小，所以一個中庸的 RBS 是最有風險的選擇，而不是安全的折衷。' } },
            { chips: [{ t: { en: 'negative prediction', zh: '負面預測' }, k: 'r' }],
              h: { en: 'The model said the clusters would never close', zh: '模型說那些群聚永遠不會收合完全' },
              p: { en: 'In the ratio simulations the size distribution keeps **a significant signal at size = 1** in every condition, and the text states that even after 2,000 ticks the system will not merge into a single cluster — a portion of free cells and small clusters always remains. The microscopy then found exactly that, and it is the mechanism that explains the ns coupling result.', zh: '在比例模擬中，每一個條件的大小分布都保留**一個「大小＝1」的明顯訊號**，而正文寫明即使跑完 2,000 個時間步，系統也不會合併成單一群聚——總會留下一部分游離細胞與小群聚。顯微鏡後來看到的正是這個，而它就是解釋那個 ns 耦合結果的機制。' } },
            { chips: [{ t: { en: 'limits stated', zh: '限制已說明' }, k: 'n' }],
              h: { en: 'Qualitative trend guidance, in their words', zh: '用他們的話說：定性的趨勢指引' },
              p: { en: 'The Results page says the model simplified biological reality — no heterogeneous expression between cells, no growth, no protein degradation — and therefore *"can only serve as qualitative trend guidance instead of precise quantitative prediction."* Note that one of the omitted factors is itself among the four reasons they give for incomplete aggregation.', zh: 'Results 頁寫明這個模型簡化了生物現實——沒有細胞間的表達異質性、沒有生長、沒有蛋白降解——因此*「只能作為定性的趨勢指引，而不是精確的定量預測」*。而被省略的因素之一，本身就在他們為「聚集不完全」給出的四個原因裡。' } }
          ]) +
          h.h3({ en: 'The metabolite model: built because the bench could not measure it', zh: '代謝物模型：因為實驗檯量不到才建的' }) +
          h.p({
            en: 'The second model exists for a stated reason: saccharopine and AASA could not be measured in the time available, so the intermediates were simulated instead. Three compartments — medium, upstream (SpyCatcher) cell interior, downstream (SpyTag) cell interior — four metabolites each plus an occupied binding capacity, **13 state variables**. Reactions are Michaelis–Menten-type with a half-saturation constant of 0.2; transport is concentration-driven both ways through one formula; contact adds an extra exchange channel between the strains through a saturating contact signal **H = B / (0.05 + B)**, which keeps binding strength separate from enzyme activity. Integrated with **fourth-order Runge–Kutta** at a base step of 0.001; they report a backbone mass-balance error of about **3.77 × 10⁻¹⁵**, which is the check that the bookkeeping is self-consistent.',
            zh: '第二個模型的存在有明說的理由：糖離胺酸與 AASA 在可用時間內量不到，於是改以模擬處理這些中間產物。三個區室——培養液、上游（SpyCatcher）細胞內部、下游（SpyTag）細胞內部——各含四種代謝物，再加上一個已佔用的結合容量，共 **13 個狀態變數**。反應採 Michaelis–Menten 型、半飽和常數為 0.2；運輸由濃度驅動，單一公式即可表示雙向；接觸則透過一個會飽和的接觸訊號 **H = B /（0.05 + B）** 在兩株之間額外開一條交換通道，使結合強度與酵素活性維持分離。以**四階 Runge–Kutta** 積分、基礎步長 0.001；他們報告主幹的質量守恆誤差約 **3.77 × 10⁻¹⁵**，這是帳目自我一致的檢查。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'SC : ST ratio', zh: 'SC：ST 比例' }, w: '16%' },
              { t: { en: 'SC / ST count', zh: 'SC／ST 數量' }, w: '16%', num: true },
              { t: { en: 'AASA peak', zh: 'AASA 峰值' }, num: true },
              { t: { en: 'AASA AUC', zh: 'AASA 曲線下面積' }, num: true },
              { t: { en: 'Final lysine', zh: '最終離胺酸' }, num: true }
            ],
            rows: [
              [{ en: '2:1', zh: '2:1' }, { en: '100 / 50', zh: '100／50' }, { en: '**0.3767**', zh: '**0.3767**' }, { en: '**10.4321**', zh: '**10.4321**' }, { en: '**0.0519**', zh: '**0.0519**' }],
              [{ en: '1:1', zh: '1:1' }, { en: '75 / 75', zh: '75／75' }, { en: '0.2142', zh: '0.2142' }, { en: '6.0133', zh: '6.0133' }, { en: '0.1247', zh: '0.1247' }],
              [{ en: '1:2', zh: '1:2' }, { en: '50 / 100', zh: '50／100' }, { en: '0.1123', zh: '0.1123' }, { en: '3.1380', zh: '3.1380' }, { en: '0.2980', zh: '0.2980' }]
            ],
            min: 640,
            source: { en: 'The team\'s own table of illustrative results at default parameters, from their Model page.', zh: '該隊 Model 頁中、在預設參數下的示例結果表，為其原始數據。' }
          }) +
          h.take({ en: 'The ratio that clears lysine fastest accumulates the most toxic intermediate', zh: '清除離胺酸最快的那個比例，累積了最多有毒的中間產物' }, {
            en: 'At 2:1 the final lysine is lowest (0.0519) and the AASA peak and AUC are highest (0.3767, 10.43); at 1:2 AASA is lowest (0.1123, 3.14) and the most lysine is left (0.2980). Their conclusion is that **rapid lysine clearance and low AASA are two different goals that must be traded against each other rather than maximised together** — which matters because the disease\'s type II form is defined by a toxic intermediate. So the wet lab\'s best ratio, 2:1, is also the model\'s worst ratio for intermediate accumulation. Nobody has measured which is right, and that is precisely the experiment the model has set up.',
            zh: '在 2:1 時最終離胺酸最低（0.0519），而 AASA 的峰值與曲線下面積最高（0.3767、10.43）；在 1:2 時 AASA 最低（0.1123、3.14），但剩下的離胺酸最多（0.2980）。他們的結論是：**快速清除離胺酸與維持低 AASA 是兩個不同的目標，必須互相權衡，而不是同時最大化**——這很重要，因為這個疾病的第二型本身就是由一個有毒中間產物所定義的。因此濕式實驗裡最好的比例 2:1，同時也是模型中中間產物累積最差的比例。沒有人量過哪一邊才對，而這正是這個模型所設定好的那個實驗。'
          }) +
          h.note({
            en: 'Both models were also deployed as interactive web pages where parameters can be changed in the browser, with no local install — the simulation is re-runnable by a reader rather than only readable. The calibration gap is stated in the same breath: without experimental saccharopine and AASA values the metabolite model **cannot be calibrated or verified**, and detecting those intermediates is listed as the first future task.',
            zh: '兩個模型也都被部署成可互動的網頁，參數可以直接在瀏覽器裡改，不需在本機安裝——讀者可以重跑這個模擬，而不只是讀它。校準上的缺口在同一段裡就被說明：在沒有糖離胺酸與 AASA 實驗數值的情況下，代謝物模型**無法被校準或驗證**，而偵測這些中間產物被列為第一項未來工作。'
          })
      });

      /* ---------------- education ---------------- */
      out += h.sec({
        id: 'f-edu',
        kick: { en: 'Education', zh: '教育' },
        h2: { en: 'Best Education, and the part that earned it is the assessment column', zh: '最佳教育，而真正讓它拿到這個獎的是「評估」那一欄' },
        lede: {
          en: 'Twelve activities across three audiences, each written up in the same five steps — Connect, Layer, Engage, Assess, Reinforce — where Assess reports a measurement and Reinforce says what changed in the next activity because of it.',
          zh: '橫跨三類對象的十二項活動，每一項都以同樣的五個步驟寫成——Connect、Layer、Engage、Assess、Reinforce——其中 Assess 報告一個量測結果，而 Reinforce 說明下一項活動因此改了什麼。'
        },
        body:
          h.p({
            en: 'The starting point is their own public survey, not a theme chosen in advance: **76.04 %** of respondents had heard of rare diseases but could not name a specific one and only **8.29 %** could name three or more; only **13.82 %** understood the full impact of dietary restriction on quality of life; and on synthetic biology, **46.08 %** called it the future of medicine while **23.96 %** could not evaluate it at all and **29.95 %** expressed caution about unknown risks. That split — broad but shallow awareness, plus a large undecided block — is what the activities were aimed at.',
            zh: '起點是他們自己的公眾問卷，而不是事先選定的主題：**76.04%** 的受訪者聽過罕見疾病卻說不出任何一種，只有 **8.29%** 能說出三種以上；只有 **13.82%** 了解飲食限制對生活品質的完整影響；而在合成生物學上，**46.08%** 認為它是醫學的未來，同時 **23.96%** 完全無法評價它、**29.95%** 對未知風險表示謹慎。這個分布——認知廣但淺，再加上一大塊未決定的族群——就是這些活動所瞄準的對象。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Activity', zh: '活動' }, w: '24%' },
              { t: { en: 'What was measured', zh: '量了什麼' } },
              { t: { en: 'What changed next', zh: '接下來改了什麼' }, w: '28%' }
            ],
            rows: [
              [{ en: 'Social media, WeChat and Instagram', zh: '社群媒體：微信與 Instagram' },
               { en: '15 posts, **248 likes, 955 views, 63 shares — and zero comments.** They print the zero and read it as a finding: content was being seen and shared but generating no conversation.', zh: '15 篇貼文、**248 個讚、955 次瀏覽、63 次分享——以及零則留言。**他們把這個零印出來，並把它讀成一個發現：內容被看到、被分享，但沒有產生對話。' },
               { en: 'Switch from one-way delivery to a live format, which is where the Q&A session came from.', zh: '從單向傳遞改為即時互動的形式，而那場 Q&A 就是這麼來的。' }],
              [{ en: 'Online Q&A, 4 July 2026', zh: '線上 Q&A，2026 年 7 月 4 日' },
               { en: 'Two hours on Tencent Meeting. Assessed by the questions asked, two of which they quote: what stigmatisation actually means, and how the product would be priced.', zh: '在騰訊會議上進行兩小時。以提出的問題作為評估，其中兩個被他們引用：汙名化到底是什麼意思，以及這個產品將如何定價。' },
               { en: 'Audience wanted to see experiments, not read about them, so the next step was recorded video.', zh: '聽眾想看到實驗，而不是讀關於實驗的文字，所以下一步是錄製影片。' }],
              [{ en: 'Video lessons', zh: '影片課程' },
               { en: '5 videos, **66 likes, 339 views, 5 comments** — lower reach than the posts but a higher comment rate per view, which is the metric they were chasing after the zero.', zh: '5 支影片、**66 個讚、339 次瀏覽、5 則留言**——觸及比貼文少，但每次瀏覽的留言率更高，而這正是他們在那個零之後所追求的指標。' },
               { en: 'Video kept as a core format; subtitles and other languages identified as the next extension.', zh: '影片被保留為核心形式；字幕與其他語言被指認為下一步的延伸。' }],
              [{ en: 'HFI Academic Summit', zh: 'HFI 學術高峰會' },
               { en: 'Pre- and post-event surveys, **n = 24**: correct identification of synthetic biology **79 % → 96 %**; of DNA being present in every living cell including fruit cells **42 % → 88 %**; the misconception that synthetic biology is another name for genetic testing **8 % → 0 %**, and that DNA can only be extracted from animals **13 % → 0 %**.', zh: '活動前後的問卷，**n = 24**：正確辨識合成生物學 **79% → 96%**；正確認知 DNA 存在於每個活細胞（包括水果細胞）**42% → 88%**；「合成生物學只是基因檢測的另一種叫法」這個誤解 **8% → 0%**；「DNA 只能從動物身上萃取」**13% → 0%**。' },
               { en: 'Two named fixes: slow down the kill-switch and sensing explanations with step-by-step animations, and replace abbreviations the audience could not follow.', zh: '兩項指名的修正：用逐步動畫把自殺開關與感測的解釋放慢，並替換聽眾跟不上的縮寫。' }],
              [{ en: 'Welfare institute outreach', zh: '社會福利院外展' },
               { en: 'Assessed by **verbal questioning and observation rather than a written survey**, with the reason given: the children were too young to read many characters, so a written test would have measured literacy. Many could say that not all bacteria are bad.', zh: '以**口頭提問與觀察、而不是書面問卷**來評估，並給出理由：孩子年紀太小、認不出許多字，書面測驗會量到的是識字能力。許多孩子能說出「不是所有細菌都是壞的」。' },
               { en: 'The finding that mattered: a slide deck alone was not enough for the institute\'s own teachers to run the lesson without the team present.', zh: '真正重要的發現是：單靠一份投影片，院方自己的老師在團隊不在場時無法把課上起來。' }],
              [{ en: 'Teaching packages', zh: '教學包' },
               { en: '**Four complete packages** — lesson plan with a read-aloud script, slides, printable picture books, game cards and true/false paddles, materials checklist — validated by having welfare-institute teachers **deliver the lessons themselves**. Their report: with the files, a television for projection was all they needed, and the printables could be sent straight to a print shop.', zh: '**四份完整的教學包**——附逐字稿的教案、投影片、可列印的圖畫書、遊戲卡與是非牌、材料清單——驗證方式是請福利院的老師**自己把課上完**。他們的回報是：拿到檔案之後，只需要一台電視做投影，而可列印的部分可以直接送印刷店。' },
               { en: 'Published free on the wiki for other teams and educators; expansion to more topics and age groups planned.', zh: '在 wiki 上免費公開給其他隊伍與教育者；並計畫擴充到更多主題與年齡層。' }],
              [{ en: 'Professional session, HSBC Guangzhou', zh: '專業場次：匯豐廣州' },
               { en: 'Pre- and post-session quiz, **n = 10**: the synthetic-biology question went from 8/10 to **10/10** correct, and all 10 correctly identified the product as an oral capsule that degrades excess lysine in the gut.', zh: '場次前後的小測驗，**n = 10**：合成生物學那一題由 8／10 進步到 **10／10** 全對，而 10 人全部正確指出這個產品是一顆在腸道中降解過量離胺酸的口服膠囊。' },
               { en: 'Their feedback on clinical data, reimbursement and hospital access was folded into the entrepreneurship plan.', zh: '他們在臨床資料、給付與醫院通路上的意見被納入創業規劃。' }]
            ],
            min: 820,
            source: { en: 'All figures from the team\'s Education page. The selection and the column headings are ours.', zh: '所有數字出自該隊 Education 頁。挑選與欄位標題是我們做的。' }
          }) +
          h.p({
            en: 'The reach work has its own shape. The microbiology comic book exists in **Cantonese and Mandarin dialect-assisted versions** for rural areas, with voice-over recordings in **English, Japanese and German**, and text versions in Arabic, German, Russian, French, Korean, Portuguese, Japanese, Thai, Spanish and Indonesian. They state why the text versions are text: the team does not speak those languages well enough to record them, so local educators can generate audio themselves. A limit named instead of a gap papered over.',
            zh: '觸及面的工作有它自己的形狀。那本微生物學漫畫書有**粵語與國語的方言輔助版本**供偏鄉使用，並有**英語、日語與德語**的配音錄音，以及阿拉伯語、德語、俄語、法語、韓語、葡萄牙語、日語、泰語、西班牙語與印尼語的文字版本。他們也說明為什麼那些是文字版：團隊不夠精通那些語言、無法錄音，因此可由當地教育者自行產生音訊。這是指名出來的限制，而不是被糊過去的缺口。'
          }) +
          h.take({ en: 'What makes this an education prize rather than an outreach list', zh: '是什麼讓這成為一個教育獎、而不是一份外展清單' }, {
            en: 'Three things, and they are all structural. The activities are **chained**: each one\'s Connect section cites the previous one\'s Assess, so the zero comments cause the Q&A, the Q&A causes the videos, and a slide deck that teachers could not use alone causes the teaching packages. The assessment instrument is **chosen to fit the audience**, including the decision not to give a written test to pre-readers. And the final artefact is **separable from the team** — four packages a teacher with no synthetic-biology background can run, tested by letting those teachers run them. Most iGEM education pages measure attendance. This one measures what changed, then changes something.',
            zh: '有三件事，而且都是結構性的。這些活動是**串起來的**：每一項的 Connect 一節都引用前一項的 Assess，所以零留言導致 Q&A、Q&A 導致影片，而一份老師無法獨立使用的投影片導致了教學包。評估工具是**依對象挑選**的，包括「不對還不識字的孩子做書面測驗」這個決定。而最後的產出是**可以和團隊分離的**——四份教學包，沒有合成生物學背景的老師也能上，而驗證方式就是讓那些老師自己上。大多數 iGEM 的教育頁量的是出席人數。這一頁量的是改變了什麼，然後真的去改了點什麼。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'f-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, mostly in their own words', zh: '哪些還沒解決，大致上用他們自己的話說' },
        lede: {
          en: 'Their Results page ends with three numbered limitations and three future directions. We have added the ones that are stated elsewhere on the wiki.',
          zh: '他們的 Results 頁以三條編號的限制與三個未來方向收尾。我們把 wiki 上其他地方寫到的也補了進來。'
        },
        body:
          h.ul([
            { en: '**Saccharopine and AASA were never quantified**, so the only direct evidence is supernatant lysine going down. Complete multi-step degradation is not demonstrated, and the metabolite model cannot be calibrated until those numbers exist.', zh: '**糖離胺酸與 AASA 從未被定量**，所以唯一的直接證據是上清液中離胺酸下降。完整的多步驟降解並未被示範，而代謝物模型在那些數字出現之前也無法被校準。' },
            { en: '**The coupling benefit is not statistically significant.** The architecture\'s central claim currently rests on a modest, ns difference, explained by persistent free single cells.', zh: '**耦合帶來的好處在統計上不顯著。**這套架構的核心主張目前建立在一個幅度不大、且 ns 的差異上，而其解釋是持續存在的游離單細胞。' },
            { en: '**Everything was run in aerobic shake flasks.** Only a preliminary artificial-colon-fluid test exists; anaerobic gut-simulating culture has not been applied to either metabolic performance or kill-switch leakage.', zh: '**所有實驗都是在好氧的搖瓶中進行的。**目前只有一次初步的人工結腸液測試；厭氧的腸道模擬培養還沒被用在代謝表現或自殺開關的滲漏上。' },
            { en: '**The kill switch is characterised in one direction only.** Arabinose-induced lysis under aerobic conditions is shown; suppression under strict anaerobic conditions and killing across the anaerobic-to-aerobic transition are not, and the effect of vector copy number on Bxb1 basal expression is unexplored.', zh: '**自殺開關只在一個方向上被特性化。**阿拉伯糖誘導、好氧條件下的裂解已被證明；嚴格厭氧下的抑制，以及厭氧轉好氧過程中的殺滅，則都還沒有，而載體拷貝數對 Bxb1 基礎表達的影響也未被探討。' },
            { en: '**The single-strain alternative is unresolved.** Assembling all four metabolic genes into one strain yielded almost no positive colonies; gene load is the stated cause, and optimising the transformation remains on their list.', zh: '**單株的替代方案仍未解決。**把四個代謝基因全組裝進同一株，幾乎長不出陽性菌落；他們說原因是基因負載，而優化轉型流程仍在他們的清單上。' },
            { en: '**No in vivo work and no patient-relevant dose.** The gut lysine concentration in patients is inferred from plasma levels and dilution, at a few hundred μM, rather than measured — and an expert noted during an interview that studies of intestinal lysine concentration are few and the evidence insufficient. Dosing is to be set later by dose-escalation studies in animals.', zh: '**沒有體內實驗，也沒有與病人相關的劑量。**患者腸道中的離胺酸濃度是由血漿濃度與稀釋效應推估出來的，約在幾百 μM，而不是量出來的——而一位專家在訪談中指出，關於腸道離胺酸濃度的研究很少、證據不足。劑量將在之後由動物的劑量遞增研究來決定。' },
            { en: '**Aggregation quantification is low-throughput and partly subjective** — fluorescence microscopy over a few fields plus ImageJ. Their own fix list is flow cytometry, automated image analysis, and antibody staining to measure surface display efficiency directly.', zh: '**聚集的定量通量低、而且有部分主觀成分**——在少數視野上做螢光顯微鏡加 ImageJ。他們自己的修正清單是流式細胞術、自動影像分析，以及用抗體染色直接量表面展示效率。' },
            { en: '**Horizontal gene transfer risk of the plasmid system is listed as a future safety study**, not a completed one, and the public is not yet reassured on containment: in their own survey only **33.18 %** were reassured by the suicide switch while **50.69 %** remained concerned it could fail.', zh: '**這個質體系統的水平基因轉移風險被列為未來的安全性研究**，而不是已完成的工作；而公眾對圍阻也還沒有被說服：在他們自己的問卷中，只有 **33.18%** 因為自殺開關而感到安心，**50.69%** 仍擔心它可能失效。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'f-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from HFI', zh: '我們會從 HFI 抄什麼' },
        body:
          h.ul([
            { en: '**Clear the background before you measure anything.** Delete the host activity that competes with your pathway, then prove it is gone with the comparison that licenses everything afterwards: knockout against a cell-free blank, ns. That one ns is worth more than any downstream p-value it makes interpretable.', zh: '**在你量任何東西之前，先把背景清掉。**把會和你的路徑競爭的宿主活性刪掉，然後用那個讓後面一切站得住腳的比較去證明它真的不在了：剔除株對無細胞空白組，ns。那一個 ns 比它所讓人能解讀的任何下游 p 值都更有價值。' },
            { en: '**Run the control that can kill your design, and publish what it says.** Freely mixed co-culture at the same ratios is the comparison that makes the coupling claim falsifiable. Printing it with **ns** on it is the whole difference between a project and a demonstration.', zh: '**跑那個可能殺掉你設計的對照，並把它說的話公開。**同樣比例下的自由混合共培養，就是讓耦合主張可被證偽的那個比較。把它連著 **ns** 一起印出來，就是「一個專案」與「一場展示」之間的全部差別。' },
            { en: '**Let a model earn its place by predicting a negative.** The NetLogo result that matters is not the part it selected but the free single cells it said would never bind. A model that tells you in advance which disappointment to expect has done more work than one that agrees with a result you already have.', zh: '**讓一個模型靠「預測出一個負面結果」來證明自己的價值。**NetLogo 真正重要的結果不是它挑出的那個元件，而是它說過永遠不會結合的那些游離單細胞。一個事先告訴你該預期哪種失望的模型，比一個只是同意你既有結果的模型做了更多事。' },
            { en: '**Go back and re-run the condition whose replicates disagree.** Three runs at 30 display sites disagreed, so they ran 60. The finding — that intermediate strength is the unstable regime — only exists because they treated the inconsistency as information.', zh: '**回頭重跑那個重複之間彼此不一致的條件。**30 個展示位點跑三次結果不一致，於是他們跑了 60 次。那個發現——中等強度正是不穩定的區間——只因為他們把不一致當成資訊，才存在。' },
            { en: '**Report a readout you abandoned, with the property of the method that broke it.** A perfect ninhydrin standard curve and a useless result in the same figure is a better lesson than a clean HPLC trace alone, and "OD₆₀₀ cannot tell a live cell from debris" belongs in every lysis paper.', zh: '**報告你棄用的讀值，並附上「是方法的哪個性質把它弄壞的」。**同一張圖裡放著一條完美的茚三酮標準曲線與一個沒有用的結果，比單獨一條漂亮的 HPLC 圖譜更有教育意義；而「OD₆₀₀ 分不出活細胞與碎片」這句話，應該出現在每一篇關於裂解的報告裡。' },
            { en: '**Give each surviving method a role, not a rank.** Screening, kinetics, confirmation. The team keeps all three readouts on the page with their jobs assigned, which is how a reader decides what to use rather than merely which one won.', zh: '**給每一個留下來的方法一個角色，而不是一個排名。**初篩、動力學、確認。該隊把三個讀值都留在頁面上並指派好職責，讓讀者能決定該用哪一個，而不只是知道哪一個勝出。' },
            { en: '**Reject the cleverer circuit when it cannot act in time.** Dropping a lysine-responsive promoter for a constitutive one because of sensing lag is the kind of decision that makes a wiki look less sophisticated and a product more plausible.', zh: '**當那個更聰明的線路來不及動作時，就否決它。**因為感測延遲而把對離胺酸有反應的啟動子換成組成型的，正是那種會讓 wiki 看起來比較不精巧、卻讓產品比較可信的決定。' },
            { en: '**Publish the expert who told you to start over, and what happened when you tried.** They were advised to abandon the two-strain architecture, attempted the single-strain version, got almost no colonies, said so, and kept their design with stated reasons. That sequence is more convincing than agreement would have been.', zh: '**把那位叫你從頭來的專家、以及你照著做之後發生的事一起公開。**他們被建議放棄雙菌架構，試了單株版本，幾乎沒長出菌落，把這件事說出來，然後帶著明說的理由保留原設計。這個順序比一句「我們同意」更有說服力。' },
            { en: '**Chain education activities so each one cites the last one\'s measurement.** Zero comments on 15 posts is a result; it caused a live session, which caused videos. An outreach list with no causal links between its items is a list, not a programme.', zh: '**把教育活動串起來，讓每一項都引用前一項的量測結果。**15 篇貼文得到零留言是一個結果；它導致了一場即時活動，而那又導致了影片。各項之間沒有因果連結的外展清單，是一份清單，不是一個計畫。' },
            { en: '**Choose the assessment instrument to fit the audience, and say when you did not use one.** Not giving a written survey to children who cannot yet read, and saying why, is better evidence of thinking about assessment than any percentage.', zh: '**依對象挑選評估工具，並說明你何時沒有用它。**不對還不會讀字的孩子做書面問卷，並說出理由，比任何百分比都更能證明你真的想過評估這件事。' },
            { en: '**Make the final deliverable work without you in the room, then prove it.** Four teaching packages, handed to teachers with no synthetic-biology background, who then taught the lessons alone. That is the test most open-source education material never gets.', zh: '**讓最終產出在你不在場時也能運作，然後去證明它。**四份教學包，交給沒有合成生物學背景的老師，而他們之後獨自把課上完了。那是大多數開放教材從來沒有接受過的測試。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the eleven items above, the column headings in the education table, and the judgement that the ns coupling panel plus its four named causes is the most transferable thing on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/hfi](https://2026.igem.wiki/hfi/).',
            zh: '標示為我們的看法：上面十一點、教育表格的欄位標題，以及「那張 ns 的耦合圖加上它被指名的四個原因，是這個 wiki 上最可轉移的東西」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/hfi](https://2026.igem.wiki/hfi/)。'
          })
      });

      return out;
    }
  };
})(window);
