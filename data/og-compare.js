/* Overgrad side by side — the comparison tables across the ten Overgraduate teams. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['og-compare'] = {
    label: { en: 'Side by side', zh: '橫向比較' },
    title: { en: 'Side by side — Overgraduate', zh: '橫向比較——研究生部' },
    render: function (h) {
      var out = '';
      var teams = PD.teamsOG || [];

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Ten Overgraduate workflows, in the same columns',
          zh: '十條研究生部工作流程，放進同樣的欄位'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The same questions, asked of all ten, so the answers can ==disagree in public==.',
          zh: '同樣的問題問十隊，讓答案可以==公開地互相矛盾==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'No wiki can tell you how its own choices compare with anyone else\'s. These five tables do only that, using one set of columns for all ten teams. Every cell is read from that team\'s own wiki; the columns are ours.',
          zh: '沒有任何 wiki 能告訴你「自己的選擇和別人比起來如何」。下面五張表只做這件事，而且對十隊使用同一組欄位。每一格都讀自該隊自己的 wiki；欄位是我們定的。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'gc-chassis', t: { en: 'Chassis and assembly', zh: '宿主與組裝' } },
        { id: 'gc-result', t: { en: 'What counted as a result', zh: '什麼算一個結果' } },
        { id: 'gc-dry', t: { en: 'Inside each dry-lab stack', zh: '乾式堆疊裡有什麼' } },
        { id: 'gc-prac', t: { en: 'Documented practices', zh: '有記載的做法' } },
        { id: 'gc-ship', t: { en: 'What each team shipped', zh: '每隊交付了什麼' } }
      ]);

      /* ---------------- chassis and assembly ---------------- */
      out += h.sec({
        id: 'gc-chassis',
        kick: { en: 'Build', zh: '建構' },
        h2: { en: 'Four of the ten explain why they left the obvious assembly standard', zh: '十隊中有四隊說明了為何離開最明顯的組裝標準' },
        lede: {
          en: 'One of them does it against iGEM\'s own Registry convention. The table below is every chassis and route; the four deviations are named underneath it.',
          zh: '其中一隊是明確地與 iGEM 自家登錄庫慣例相左。下表是十隊的宿主與路線；那四次偏離則列在表格下方。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '15%' },
              { t: { en: 'Chassis', zh: '宿主' }, w: '32%' },
              { t: { en: 'Assembly route', zh: '組裝路線' } }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', '<span class="mono">' + h.esc(t.chassis) + '</span>', t.assembly];
            }),
            min: 820,
            source: { en: 'Read from each team\'s Parts, Engineering, Experiments or Cloning pages.', zh: '讀自各隊的 Parts、Engineering、Experiments 或 Cloning 頁。' }
          }) +
          h.take({ en: 'The four deliberate deviations', zh: '四次刻意的偏離' }, {
            en: '**GU Frankfurt** sets the Registry standards aside explicitly — *"Despite iGEM using the RFC10 and Type IIS standards for the Registry of Standard Biological Parts, we selected an alternative approach"* — because they wanted full control over insert position while testing many binder variants, and the binder must join seamlessly for the fusion to translate. **UZurich** chose replicating plasmids over genomic integration specifically to buy more DBTL cycles. **KAUST-KSA** went the other way, choosing single-copy genomic integration over a multicopy plasmid because the plasmid would have inflated the expression they were trying to measure. And **Toronto** arranged its BsmBI sites so the Golden Gate scar lands inside the linker and cannot shift any cloned PETase\'s reading frame.',
            zh: '**GU Frankfurt** 明確把登錄庫標準擱在一邊——*「儘管 iGEM 在標準生物零件登錄庫使用 RFC10 與 Type IIS 標準，我們選擇了另一種做法」*——因為他們在測試許多結合蛋白版本時想完全掌控插入位置，而結合蛋白必須無縫接合，融合蛋白才會按預期轉譯。**UZurich** 選擇複製型質體而不是基因體整合，就是為了換取更多 DBTL 循環。**KAUST-KSA** 走了相反方向，選擇單拷貝基因體整合而不是多拷貝質體，因為質體會把他們想量測的表達量撐高。而 **Toronto** 把 BsmBI 切位排成讓 Golden Gate 接縫落在連接子裡，使它不可能改變任何接進去的 PETase 的讀框。'
          })
      });

      /* ---------------- what counted as a result ---------------- */
      out += h.sec({
        id: 'gc-result',
        kick: { en: 'Evidence', zh: '證據' },
        h2: { en: 'What each team decided a result was', zh: '每支隊伍如何決定「什麼是一個結果」' },
        lede: {
          en: 'The single most useful column on this site, because it is the one a wiki almost never states explicitly. These are our readings of where each team drew the line.',
          zh: '本站最有用的一欄，因為那是 wiki 幾乎從不明說的一件事。以下是我們對「每支隊伍把線畫在哪裡」的判讀。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '15%' },
              { t: { en: 'The bar they set', zh: '他們設的門檻' } },
              { t: { en: 'And the thing it rules out', zh: '以及它排除了什麼' }, w: '30%' }
            ],
            rows: [
              [{ en: '**TU Delft**', zh: '**TU Delft**' },
               { en: 'A number counts only if the instrument could have resolved it. Rheology runs are reported against the **calculated inertial torque of the geometry (166.4 nN·m)** before any modulus is interpreted.', zh: '一個數字只有在儀器本來就能解析它的情況下才算數。流變測試會先對照**該量測幾何的計算慣性扭矩（166.4 nN·m）**，才去解讀任何模數。' },
               { en: 'Rules out every modulus the instrument returned for the rest of the ELP library.', zh: '排除了儀器為 ELP 文庫其餘部分回報的每一個模數。' }],
              [{ en: '**WageningenUR**', zh: '**WageningenUR**' },
               { en: 'Above the limit of quantification, or it is indicative only. A reading between **LOD 3.1 µM and LOQ 9.37 µM** gets the sentence "we are hesitant to call this TFA activity".', zh: '要高於定量極限，否則只能當指示性數值。落在 **LOD 3.1 µM 與 LOQ 9.37 µM 之間**的讀值，得到的是「我們不敢把這稱為 TFA 活性」這句話。' },
               { en: 'Rules out the project\'s most wanted result, which they had three replicates of.', zh: '排除了這個專案最想要的那個結果——而他們手上有三個重複。' }],
              [{ en: '**Athens**', zh: '**Athens**' },
               { en: 'A proxy is a lower bound until a direct count replaces it. OD₆₀₀ reductions are **"lower bounds on killing rather than estimates of it"**, because wall fragments scatter and chained cells are shielded.', zh: '在直接計數取代它之前，代理指標只能當下界。OD₆₀₀ 的下降是**「殺菌的下界，而不是對殺菌的估計」**，因為細胞壁碎片會散射，而鏈狀細胞內部是被遮蔽的。' },
               { en: 'Rules out quoting their own headline percentages to three significant figures.', zh: '排除了把自家招牌百分比引用到三位有效數字的做法。' }],
              [{ en: '**ETH-Zurich**', zh: '**ETH-Zurich**' },
               { en: 'Statistical significance, with the replicate count that survived quality control. A duplicate flagged as an irregular acquisition is **discarded even though it read higher**, and the difference is then reported as not significant.', zh: '要有統計顯著性，而且要用通過品管的重複數。一個被標記為取樣異常的重複樣品**即使讀值更高也被丟棄**，而那個差異接著被報告為不顯著。' },
               { en: 'Rules out their own best delivery result as a significant finding.', zh: '把他們自己最好的遞送結果排除在「顯著發現」之外。' }],
              [{ en: '**GU Frankfurt**', zh: '**GU Frankfurt**' },
               { en: 'Two levels of evidence, normalised to the right comparison group: protein by anti-FLAG Western **normalised to the co-transfection with scrambled shRNA**, plus transcript by RT-qPCR.', zh: '要有兩個層級的證據，而且要對正確的比較組正規化：以 anti-FLAG 西方墨點量蛋白，**並以「與打亂 shRNA 的共轉染」為正規化基準**，再加上 RT-qPCR 量轉錄本。' },
               { en: 'Rules out comparing a co-transfection against a single transfection, which would have made every knockdown look larger.', zh: '排除了拿共轉染去比單獨轉染的做法——那會讓每個抑制效果看起來都更大。' }],
              [{ en: '**KAUST-KSA**', zh: '**KAUST-KSA**' },
               { en: 'Three readouts measuring three different things, on an assay whose range was fixed on wild type first. And the claim is scoped inline: **activities are distinguished from a demonstrated increase in resistance.**', zh: '要有三種量測不同東西的讀值，而且試驗的範圍要先在野生型上定好。而主張是就地標註範圍的：**「活動」與「已證明的抗性提升」被區分開來。**' },
               { en: 'Rules out claiming DNA protection from a survival assay — the comet assay is named as the missing measurement.', zh: '排除了用存活試驗去主張 DNA 保護——彗星試驗被指名為缺少的那個量測。' }],
              [{ en: '**Marburg**', zh: '**Marburg**' },
               { en: 'A result needs an energy budget it can afford. Hairpin opening is judged against the **−8 kcal/mol a PPR actually releases**, not against whether the construct was built.', zh: '一個結果需要一份它負擔得起的能量帳。髮夾能否被打開，是對照**PPR 實際釋放的 −8 kcal/mol** 來判斷的，而不是對照「構建體有沒有做出來」。' },
               { en: 'Rules out the whole Resolving approach, and converts it into a design rule.', zh: '排除了整條 Resolving 路線，並把它轉換成一條設計規則。' }],
              [{ en: '**Muenster-University**', zh: '**Muenster-University**' },
               { en: 'A negative control that behaves. When the mutated-site control cleaved too, the comparison was declared **"likely flawed and should be repeated"** rather than read selectively.', zh: '陰性對照必須表現正常。當突變切位對照也被切開時，那個比較被宣告為**「很可能有缺陷，應該重做」**，而不是被選擇性地判讀。' },
               { en: 'Rules out two of their own screens, one of them the cheap one that was supposed to protect the expensive one.', zh: '排除了他們自己的兩個篩選，其中一個正是本來要保護昂貴實驗的那個便宜篩選。' }],
              [{ en: '**Toronto**', zh: '**Toronto**' },
               { en: 'Beat a control that needs no model, on a split by the unit of independence the data actually has. **Sequence length and amino-acid composition are the bar**, and homology components are the fold.', zh: '必須在「依資料真正具有的獨立性單位切分」的條件下，打敗一個不需要模型的對照。**序列長度與胺基酸組成就是門檻**，而同源成分就是折。' },
               { en: 'Rules out their own fine-tuned language model on all twelve activity targets.', zh: '在全部十二個活性標的上排除了他們自己微調的語言模型。' }],
              [{ en: '**UZurich**', zh: '**UZurich**' },
               { en: 'The abiotic control has to fail. Mineral formation in soil counts only if **CaCl₂ without bacteria does not produce it**, and statistics are reported after Holm correction, not before.', zh: '非生物對照必須失敗。土壤中的礦物生成只有在**「只加 CaCl₂、不加菌時不會產生」**的情況下才算數，而統計是在 Holm 校正之後報告的，不是校正之前。' },
               { en: 'Rules out the soil columns as evidence of biological cementation.', zh: '把土柱排除在「生物性膠結的證據」之外。' }]
            ],
            min: 880,
            source: { en: 'The bars are our readings of each team\'s own practice, not quotations of a stated policy — except where a sentence is quoted directly.', zh: '這些門檻是我們對各隊實際做法的判讀，不是對某項明文政策的引用——除了直接引用的那些句子。' }
          })
      });

      /* ---------------- dry lab stacks ---------------- */
      out += h.sec({
        id: 'gc-dry',
        kick: { en: 'Dry lab', zh: '乾式實驗' },
        h2: { en: 'What is actually in each dry-lab stack', zh: '每個乾式堆疊裡實際上有什麼' },
        lede: {
          en: 'Counting distinct models or tools rather than pages. A high count is not better: UZurich\'s four models are staged, Marburg\'s one tool exists because a synthesis provider said no.',
          zh: '這裡數的是不同的模型或工具，不是頁數。數字高不代表更好：UZurich 的四個模型是分階段的，而 Marburg 的那一個工具之所以存在，是因為一家合成代工廠說了不。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '15%' },
              { t: { en: 'The stack', zh: '堆疊' } },
              { t: { en: 'Models or tools', zh: '模型／工具數' }, w: '12%', num: true }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', t.dry, String(t.dryN || '—')];
            }),
            min: 780,
            source: { en: 'Read from each team\'s Model and Software pages. The counts are ours and count distinct models or released tools.', zh: '讀自各隊的 Model 與 Software 頁。計數是我們做的，數的是不同的模型或已釋出的工具。' }
          }) +
          h.fig({
            kind: 'custom',
            tag: { en: 'OUR FRAMEWORK', zh: '我們的框架' },
            title: { en: 'The four places a dry lab can attach to a DBTL cycle', zh: '乾式實驗可以接在 DBTL 循環的四個位置' },
            sub: { en: 'Our framework, not any team\'s. Which attachment point a team uses predicts what its dry lab can and cannot decide.', zh: '這是我們的框架，不屬於任何隊伍。一支隊伍用哪個接點，會決定它的乾式實驗能決定什麼、不能決定什麼。' },
            caption: { en: 'The same ring appears on the Undergraduate side-by-side page. Drawn by wf.js.', zh: '同一個環也出現在大學部的橫向比較頁上。由 wf.js 繪製。' },
            svg: function (W) { return w.WF.d.dbtl(W); }
          }) +
          h.ul([
            { en: '**Before Design — the model picks the target.** ETH\'s deCISion ranks receptors by how few of 47 cell types carry them, and CD20 came out of that step. Toronto\'s PETadex is this attachment point taken to 307 million candidates.', zh: '**在 Design 之前——模型挑標靶。**ETH 的 deCISion 依「某個受體只出現在 47 種細胞類型中的幾種」排序，而 CD20 就是從那一步跑出來的。Toronto 的 PETadex 則是把這個接點推到 3.07 億個候選。' },
            { en: '**Between Design and Build — the model decides what gets ordered.** TU Delft\'s MOSAIC Designer makes a repetitive gene orderable at all; Marburg\'s PPR-opt exists because only one synthesis provider could make their repeats; Athens\' Pareto redesign exists because a solubility predictor was wrong.', zh: '**在 Design 與 Build 之間——模型決定什麼被下單。**TU Delft 的 MOSAIC Designer 讓一個重複序列的基因「可以被下單」；Marburg 的 PPR-opt 之所以存在，是因為只有一家代工廠做得出他們的重複序列；而 Athens 的 Pareto 重設計之所以存在，是因為一個溶解度預測器錯了。' },
            { en: '**Between Build and Test — the model sets the operating condition.** TU Delft\'s LCST model sets the purification temperature and salt; KAUST\'s metabolic models set the aeration requirement and the feedstock; UZurich\'s slope model sets the cohesion target the bacteria must hit.', zh: '**在 Build 與 Test 之間——模型設定操作條件。**TU Delft 的 LCST 模型決定純化溫度與鹽濃度；KAUST 的代謝模型決定曝氣需求與料源；UZurich 的坡面模型則設定了細菌必須達到的凝聚力目標。' },
            { en: '**After Test — the model explains the measurement.** Athens\' Emax kill law is fitted to their own lysis data and then tells them yield was the wrong lever; Marburg\'s energy budget explains a flat titration; Toronto\'s evaluation protocol explains why a ρ of 0.72 was not real.', zh: '**在 Test 之後——模型解釋量測。**Athens 的 Emax 殺菌動力學是擬合自他們自己的溶解數據，接著告訴他們產量是錯的槓桿；Marburg 的能量帳解釋了一條持平的滴定曲線；Toronto 的評估協議則解釋了為什麼 ρ = 0.72 不是真的。' }
          ])
      });

      /* ---------------- practice matrix ---------------- */
      out += h.sec({
        id: 'gc-prac',
        kick: { en: 'Practices', zh: '做法' },
        h2: { en: 'Which workflow practices each wiki documents', zh: '各 wiki 記載了哪些流程做法' },
        lede: {
          en: 'A filled cell means we found the practice documented on that team\'s wiki. An empty cell means we did not find it — which is not the same as it not happening.',
          zh: '有顏色的格子代表我們在該隊 wiki 上找到了這個做法的記載。空白格代表我們沒找到——這和「沒有做」不是同一件事。'
        },
        body:
          h.fig({
            kind: 'matrix',
            tag: { en: 'DOCUMENTED PRACTICE', zh: '有記載的做法' },
            title: { en: 'Seven workflow practices across the ten Overgrad teams', zh: '研究生部十隊的七項流程做法' },
            sub: { en: 'Not a score. Rows are teams, columns are practices; a filled cell is a documented instance we can point to on the team page.', zh: '這不是評分。列為隊伍、欄為做法；有顏色的格子代表我們能在團隊頁上指出來的具體記載。' },
            data: {
              rows: teams.map(function (t) { return t.name; }),
              cols: [
                { en: 'Gate or metric set before the data', zh: '數據之前先定門檻或指標' },
                { en: 'Control in the same run', zh: '對照同批次' },
                { en: 'Detection limits or calibration published', zh: '公開偵測極限或校正' },
                { en: 'Assay validated or rebuilt before use', zh: '使用前先驗證或重建量測' },
                { en: 'A claim scoped, limited or retracted', zh: '主張被標註範圍、限制或撤回' },
                { en: 'A baseline the team ran themselves', zh: '團隊自己跑過的基準' },
                { en: 'Failure named with its cause', zh: '失敗連原因一起具名' }
              ],
              /* teams order follows PD.teamsOG:
                 delft, wageningen, athens, eth, frankfurt, kaust, marburg, muenster, toronto, uzurich */
              v: [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, null, 1, 1, 1, 1],
                [1, 1, null, 1, 1, null, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, null, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, null, 1, 1, null, 1]
              ]
            },
            opts: { cell: 30, vmax: 1, dec: 0 },
            caption: {
              en: 'Our reading of the ten wikis. "A baseline the team ran themselves" means a comparator was re-run on the team\'s own scale rather than quoted from a paper. "Assay validated or rebuilt" means an experiment was spent on the method itself before it was used to judge a construct.',
              zh: '我們對十個 wiki 的判讀。「團隊自己跑過的基準」指某個對照方法是在該隊自己的尺度上重跑過的，而不是從論文裡引用的。「使用前先驗證或重建量測」指在用它評判構建體之前，先花了一個實驗在方法本身上。'
            }
          }) +
          h.take({ en: 'The two columns that are full, and the two that are not', zh: '兩欄是滿的，另外兩欄不是' }, {
            en: '**All ten** document a failure with its cause, and **all ten** scope, limit or retract a claim somewhere in the text. In the Undergraduate ten, the equivalent columns are not full. We read that as the clearest single difference between the divisions — and as the cheapest practice to adopt, since both are editorial decisions rather than experiments. The two sparser columns are **published detection limits or calibration (6 of 10)** and **a baseline the team ran themselves (6 of 10)**. Those are where we would put our own effort next season, because neither needs a budget either.',
            zh: '**十隊全部**都把失敗連原因一起記載，而**十隊全部**都在文中某處為某個主張標註範圍、設限或撤回。在大學部十隊中，對應的欄位並不是滿的。我們把這讀成兩個組別之間最清楚的單一差異——也是最便宜可以採用的做法，因為兩者都是編輯決定，不是實驗。較稀疏的兩欄是**公開偵測極限或校正（10 隊中 6 隊）**與**團隊自己跑過的基準（10 隊中 6 隊）**。那就是我們下一季會把力氣放上去的地方，因為這兩個也都不需要預算。'
          })
      });

      /* ---------------- what each team shipped ---------------- */
      out += h.sec({
        id: 'gc-ship',
        kick: { en: 'Output', zh: '產出' },
        h2: { en: 'What each team shipped that somebody else can pick up', zh: '每支隊伍交付了什麼是別人可以接手的' },
        lede: {
          en: 'The question we care about most, because it is the one that outlives a Jamboree. Nine of the ten released something installable, runnable or downloadable.',
          zh: '我們最在意的問題，因為那是唯一會比一場 Jamboree 活得更久的東西。十隊中有九隊釋出了可安裝、可執行或可下載的東西。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '15%' },
              { t: { en: 'What they released', zh: '他們釋出了什麼' } },
              { t: { en: 'Form', zh: '形式' }, w: '20%' }
            ],
            rows: [
              [{ en: '**TU Delft**', zh: '**TU Delft**' },
               { en: '**MOSAIC Designer** — codon-scrambles a repetitive ELP gene into an orderable, Golden-Gate-ready oligo set; plus the curated and raw **LCST datasets on Zenodo** (10.5281/zenodo.23532676), the LCST Extractor, and a Markdown copy of every wiki page.', zh: '**MOSAIC Designer**——把重複的 ELP 基因做密碼子洗牌，變成可下單、可直接做 Golden Gate 的寡核苷酸組；另外還有**存放在 Zenodo 的清理後與原始 LCST 資料集**（10.5281/zenodo.23532676）、LCST Extractor，以及每一頁 wiki 的 Markdown 副本。' },
               { en: 'Software + dataset + a machine-readable wiki', zh: '軟體＋資料集＋機器可讀的 wiki' }],
              [{ en: '**WageningenUR**', zh: '**WageningenUR**' },
               { en: '**DISARM** (retargets an existing aptamer to a new small-molecule ligand, with a seed MAWS never had) and **PIGEON** (50-round active-learning loop, written to be re-pointed at solubility or thermostability). Plus the fluoride assay documented as an adoptable protocol.', zh: '**DISARM**（把既有適體改導向新的小分子配體，並補上 MAWS 從來沒有的隨機種子）與 **PIGEON**（50 輪主動學習迴圈，寫法允許重新指向溶解度或熱穩定性）。另外還有被記載成「可直接採用」的氟離子分析流程。' },
               { en: 'Two tools on iGEM GitLab', zh: 'iGEM GitLab 上的兩個工具' }],
              [{ en: '**Athens**', zh: '**Athens**' },
               { en: 'Two endolysins in the Registry (**BBa_26WG5LPE**, **BBa_26XBER6P**), the prophage-mining parameters and thresholds documented "so another team can run it against their own target", and the dry-lab scripts.', zh: 'Registry 中的兩個內溶素（**BBa_26WG5LPE**、**BBa_26XBER6P**）、前噬菌體挖掘的參數與門檻（記載目的是「讓別的團隊能把它跑在自己的標靶上」），以及乾式實驗的腳本。' },
               { en: 'Parts + a documented pipeline', zh: '零件＋有記載的流程' }],
              [{ en: '**ETH-Zurich**', zh: '**ETH-Zurich**' },
               { en: '**deCISion** (a cell type in, three plasmids to order out) and **OpenSplitProtein** (browser-based split-site ranking, GPL-3.0-only, CITATION.cff + CodeMeta, sha256-locked dependencies, a CLI sharing one entry point with the page, and a select-agent refusal at two layers).', zh: '**deCISion**（輸入一個細胞類型，輸出要訂的三個質體）與 **OpenSplitProtein**（瀏覽器內的切點排序，GPL-3.0-only、附 CITATION.cff 與 CodeMeta、相依元件以 sha256 鎖定、CLI 與網頁共用同一個入口，並在兩個層級拒絕處理管制病原）。' },
               { en: 'Two tools, one runnable from `file://`', zh: '兩個工具，其中一個可從 `file://` 直接執行' }],
              [{ en: '**GU Frankfurt**', zh: '**GU Frankfurt**' },
               { en: '**HUSH** — an open-source RNAi designer for polymorphic protein families, built because no existing tool handles them: a guided web app, a CLI, a persistent terminal shell and an **MCP server so an AI agent can drive it**, with Bowtie-against-RefSeq off-target screening.', zh: '**HUSH**——一個針對高多型性蛋白家族的開源 RNAi 設計器，之所以被做出來，是因為現有工具都不處理它們：有引導式網頁、CLI、常駐終端介面，以及一個**讓 AI 代理可以驅動它的 MCP 伺服器**，並以 Bowtie 比對 RefSeq 做脫靶篩檢。' },
               { en: 'One tool, four interfaces', zh: '一個工具、四種介面' }],
              [{ en: '**KAUST-KSA**', zh: '**KAUST-KSA**' },
               { en: 'A **repaired anaerobic iBsu1147** genome-scale model with the two added pathways, released as a function on GitHub; a radiation-resistance testing handbook; a protein expression and ÄKTA purification handbook; a safety handbook; and the parts in the Registry.', zh: '一個**修好的厭氧版 iBsu1147** 全基因體模型，連同補進的兩條路徑，以函式形式釋出到 GitHub；一本輻射抗性測試手冊；一本蛋白表達與 ÄKTA 純化手冊；一本安全手冊；以及登錄在 Registry 的零件。' },
               { en: 'A corrected public model + three handbooks', zh: '一個被修正的公開模型＋三本手冊' }],
              [{ en: '**Marburg**', zh: '**Marburg**' },
               { en: '**PPR-opt** in two modes — Designer for one RNA target, Inventory for a whole organism-specific toolbox — delivered as form-driven Colab notebooks that need no installation; plus the **Chlamy-GRASP** module set with and without the LHCBM1i2 intron, and the parts collection.', zh: '**PPR-opt** 的兩種模式——Designer 針對單一 RNA 標靶、Inventory 產生整套該生物專用的工具箱——以表單驅動的 Colab 筆記本交付，不需要安裝；另外還有含與不含 LHCBM1i2 內含子兩種版本的 **Chlamy-GRASP** 模組組，以及零件集。' },
               { en: 'Two Colab notebooks + a ported toolbox', zh: '兩個 Colab 筆記本＋一套移植好的工具箱' }],
              [{ en: '**Muenster-University**', zh: '**Muenster-University**' },
               { en: '**ProTEUS** — a pipeline that designs candidate cleavage sites for proteases with *no characterised substrate at all*, which no existing tool does; plus the **GreenGate composite part** that turns their FRET cleavage sensor into a one-reaction build for any protease site.', zh: '**ProTEUS**——一條為「完全沒有已特性化底物」的蛋白酶設計候選切割位的流程，而現有工具都不做這件事；另外還有那個 **GreenGate 複合零件**，它讓他們的 FRET 切割感測器變成任何蛋白酶切位都能一次反應組好。' },
               { en: 'A described pipeline + a Registry part', zh: '一條有記載的流程＋一個 Registry 零件' }],
              [{ en: '**Toronto**', zh: '**Toronto**' },
               { en: 'The **PETadex corpus**, the **PlasticESM adapters** and the **PETai activity labels** on Hugging Face with each label source published separately; **LOBSTER**; an open-source **$204 CAD bioreactor**; and — their own stated priority — the **evaluation protocol** as a three-function statistics module.', zh: '**PETadex 語料庫**、**PlasticESM 適配器**與 **PETai 活性標籤**都放在 Hugging Face 上，而且每個標籤來源分別公開；**LOBSTER**；一台開源的 **204 加元生物反應器**；以及——他們自己說的首要項目——以三函數統計模組形式交付的**評估協議**。' },
               { en: 'Corpus + model + hardware + protocol', zh: '語料＋模型＋硬體＋協議' }],
              [{ en: '**UZurich**', zh: '**UZurich**' },
               { en: 'Four models with code and limitations documented per page — slope stability, reactive transport, nationwide MICP feasibility and expected annual damage — plus an integrated dashboard prototype joining two of the four, and an **expected-annual-damage figure for shallow landslides that did not exist in the literature.**', zh: '四個模型，各自在自己的頁面上附上程式碼與限制——坡面穩定、反應輸送、全國 MICP 可行性、年期望損失——另外還有一個把其中兩個接起來的整合儀表板原型，以及一個**文獻中原本不存在的淺層山崩年期望損失數字。**' },
               { en: 'Four documented models + a dashboard', zh: '四個有記載的模型＋一個儀表板' }]
            ],
            min: 880,
            source: { en: 'Read from each team\'s Software, Model, Contribution and Parts pages. Whether a thing is "pickable up" is our judgement.', zh: '讀自各隊的 Software、Model、Contribution 與 Parts 頁。至於某個東西是否「接手得起來」，是我們的判斷。' }
          }) +
          h.note({
            en: 'The one we would go and use first is **Toronto\'s evaluation protocol**, because it is the only item on this list that would change how we report a result rather than what we can build. The one we would copy without using is **ETH\'s dependency lock with a sha256 and a `make verify`** — four lines of discipline that make a released tool checkable by a stranger.',
            zh: '我們會第一個拿去用的是 **Toronto 的評估協議**，因為它是這份清單上唯一會改變「我們如何報告一個結果」、而不只是「我們能做出什麼」的項目。我們會抄、但不一定會用的是 **ETH 那份附 sha256 與 `make verify` 的相依元件鎖定檔**——四行紀律，就讓一個已釋出的工具可以被陌生人查核。'
          })
      });

      return out;
    }
  };
})(window);
