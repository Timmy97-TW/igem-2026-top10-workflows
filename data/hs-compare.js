/* High School side by side — the ten teams in one set of tables. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['hs-compare'] = {
    label: { en: 'Side by side', zh: '橫向比較' },
    title: { en: 'Side by side: High School', zh: '橫向比較——高中部' },
    render: function (h) {
      var out = '';
      var teams = PD.teamsHS || [];

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · ten High School workflows in one table',
          zh: 'GEMS Research · 十條高中部工作流程放進一張表'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Three columns are full for all ten teams. ==One column has two entries.==',
          zh: '有三欄對十隊全部都是滿的。==有一欄只有兩個項目。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'The same seven workflow practices, checked against all ten High School Top 10 wikis. Calibrating the readout first, running a control that could make you wrong, and naming a failure with its cause are **universal in this cohort**: every one of the ten documents all three. Getting a number from a laboratory outside the team is documented by **two**. That gap is the most actionable thing on this site for a High School team planning 2027.',
          zh: '同樣七項流程做法，對照全部十個高中部前十名 wiki 檢查。「先校正讀值」、「跑一個可能讓你是錯的對照」、「把失敗連原因一起具名」這三件事在這一批隊伍中是**普遍存在的**——十隊每一隊都記載了全部三項。而「從團隊之外的實驗室取得一個數字」只有**兩隊**有記載。對一支正在規劃 2027 年的高中部隊伍來說，那個落差是本站最可以行動的一件事。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'hc-chassis', t: { en: 'Chassis and assembly', zh: '宿主與組裝' } },
        { id: 'hc-result', t: { en: 'What counted as a result', zh: '什麼算一個結果' } },
        { id: 'hc-dry', t: { en: 'Inside each dry-lab stack', zh: '乾式堆疊裡有什麼' } },
        { id: 'hc-prac', t: { en: 'Documented practices', zh: '有記載的做法' } },
        { id: 'hc-ship', t: { en: 'What each team shipped', zh: '每隊交付了什麼' } }
      ]);

      /* ---------------- chassis and assembly ---------------- */
      out += h.sec({
        id: 'hc-chassis',
        kick: { en: 'Build', zh: '建構' },
        h2: { en: 'Chassis and assembly route', zh: '宿主與組裝路線' },
        lede: {
          en: 'Nine of the ten work in *E. coli* or a cell-free extract derived from it. The exception is the one project that had to keep its organism inside a machine.',
          zh: '十隊中有九隊在 *E. coli*、或由它衍生的無細胞萃取物中工作。唯一的例外，是那個必須把自己的生物關在機器裡的專案。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'Chassis', zh: '宿主' }, w: '32%' },
              { t: { en: 'The decision behind the build', zh: '建構背後的那個決定' } }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', '<span class="mono">' + h.esc(t.chassis) + '</span>', t.assembly];
            }),
            min: 860,
            source: { en: 'Read from each team\'s Parts, Engineering, Experiments or Results pages. The third column is the team\'s own stated reasoning, condensed by us.', zh: '讀自各隊的 Parts、Engineering、Experiments 或 Results 頁。第三欄是該隊自己陳述的理由，由我們壓縮。' }
          }) +
          h.take({ en: 'The three decisions worth copying', zh: '三個值得抄的決定' }, {
            en: '**HFI knocked out *ldcC* before building anything else**, because the endogenous lysine decarboxylase would have consumed the substrate they were about to measure. That is a cloning step taken for a measurement reason, and it is the cleanest example of it in the section. **GEMS-Taiwan moved the sensing out of the cell entirely** after expert advice said a soil-released organism could not be contained and biological sensing was not precise enough. The containment objection that ends most environmental-release projects was removed by changing the architecture rather than by arguing. And **HongKong-HS carried two miRNA targets in parallel** rather than one: twice the cloning, bought as insurance, and one of the two routes did indeed fail.',
            zh: '**HFI 在建造其他任何東西之前，先剔除了 *ldcC***，因為那個內源的離胺酸脫羧酶會吃掉他們接下來要量測的底物。那是一個為了量測理由而做的選殖步驟，也是這個組別裡最乾淨的例子。**GEMS-Taiwan 把感測完全搬出細胞**，起因是專家建議指出，釋放到土壤的生物無法被圍阻、而生物感測也不夠精確——那個會終結大多數環境釋放型專案的圍阻質疑，是靠改變架構、而不是靠爭辯而被移除的。而 **HongKong-HS 並行帶了兩個 miRNA 標的**而不是一個：兩倍的選殖工作，買來當保險，而那兩條路線中確實有一條失敗了。'
          })
      });

      /* ---------------- what counted as a result ---------------- */
      out += h.sec({
        id: 'hc-result',
        kick: { en: 'Evidence', zh: '證據' },
        h2: { en: 'What each team decided a result was', zh: '每支隊伍如何決定「什麼是一個結果」' },
        lede: {
          en: 'The single most revealing column in this study. A team\'s definition of a result tells you what it was prepared to be wrong about.',
          zh: '這份研究中最能說明問題的一欄。一支隊伍對「結果」的定義，會告訴你它準備好在什麼事情上出錯。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'The headline number', zh: '招牌數字' }, w: '27%' },
              { t: { en: 'What it is, and what it is not', zh: '它是什麼、不是什麼' } }
            ],
            rows: [
              [{ en: '**Lambert-GA**', zh: '**Lambert-GA**' },
               { en: '**603.6 nM** binder affinity, 95 % CI 497.1–733.3 nM, from 35 tested candidates', zh: '**603.6 nM** 結合親和力，95% 信賴區間 497.1–733.3 nM，出自 35 個受測候選' },
               { en: 'Measured by a commercial BLI service across two replicates. Their own sentence says it "distinguishes binding to the tested VP3 construct from antiviral protection in bees, which was not established by this assay."', zh: '由商業 BLI 服務在兩次重複中測得。他們自己的句子寫著：它「把『結合到所測試的 VP3 構築』與『在蜜蜂體內的抗病毒保護』區分開來，而後者並未由本試驗確立」。' }],
              [{ en: '**HongKong-JSS**', zh: '**HongKong-JSS**' },
               { en: '**7.95×** pellet fluorescence at 5 µM mercury; **ρ = 1.00** between the two pellet readouts', zh: '5 µM 汞下菌體沉澱螢光 **7.95 倍**；兩種沉澱讀值之間 **ρ = 1.00**' },
               { en: 'A dose–response across five matched runs over 0.005–5 µM, with calibration equations and a held-out set. Not a detection limit: "1 ppb is the lowest concentration tested."', zh: '0.005–5 µM、五組配對實驗的劑量反應，附校正方程式與一個留出集。不是偵測極限：「1 ppb 是測過的最低濃度。」' }],
              [{ en: '**Eton-College-UK**', zh: '**Eton-College-UK**' },
               { en: 'A peak current falling from **2.20 × 10⁻⁸ to 2.61 × 10⁻⁹ A** at 200 nM protease', zh: '在 200 nM 蛋白酶下，峰電流從 **2.20 × 10⁻⁸ 降到 2.61 × 10⁻⁹ A**' },
               { en: 'With a cleavable-versus-control divergence at 20 nM. Their model\'s agreement with the measured peak is published as holding "partly by construction and from a single uncontrolled run".', zh: '並在 20 nM 出現可切割組與對照組的分歧。他們的模型與實測峰位的相符，被公開為「一部分是建構出來的，而且來自單一次未設對照的實驗」。' }],
              [{ en: '**GCGS**', zh: '**GCGS**' },
               { en: '**C4-HSL LOD 53.1 nM** at dose–response R² = 0.894, from the assembled AND gate', zh: '組裝後 AND 閘的 **C4-HSL 偵測極限 53.1 nM**，劑量反應 R² = 0.894' },
               { en: 'Six conditions, and only low-iron plus high C4-HSL fired. The gate is characterised; the therapeutic effect is not. Enzyme activity was measured on purified sodium alginate, never on live *P. aeruginosa* biofilm.', zh: '六個條件，而只有「低鐵加高 C4-HSL」會啟動。閘已經被特性化；治療效果沒有——酵素活性是在純化海藻酸鈉上量的，從未在活體 *P. aeruginosa* 生物膜上量過。' }],
              [{ en: '**GEMS-Taiwan**', zh: '**GEMS-Taiwan**' },
               { en: 'A self-built photometer at **slope 1.001** against a commercial instrument, with a **−0.123 OD** intercept', zh: '自製光度計對照商用儀器**斜率 1.001**，截距 **−0.123 OD**' },
               { en: 'The intercept is traced to the stored blank rather than hidden; saturation found at about OD 2.7. Their own open section says the full system has never run end to end, so none of these numbers is the light switch doing anything.', zh: '那個截距被追溯到儲存的空白值，而不是被藏起來；飽和點找在約 OD 2.7。他們自己的「還沒解決」一節寫明整個系統從未端到端跑過，所以這些數字裡沒有一個是「光開關做了什麼事」。' }],
              [{ en: '**GHCIS**', zh: '**GHCIS**' },
               { en: 'CIEDE2000 colour difference, with relative changes of **46.80 %, 41.06 % and 40.20 %** for the three genes', zh: 'CIEDE2000 色差，三個基因的相對變化為 **46.80%、41.06% 與 40.20%**' },
               { en: 'Three colours on filter paper, driven by 3–5 µM synthetic trigger RNA. Not a detection limit, and not the whole workflow: the amplification step never appears in the results.', zh: '濾紙上三種顏色，由 3–5 µM 的合成觸發 RNA 驅動。不是偵測極限，也不是整套流程：放大那一步從未出現在結果裡。' }],
              [{ en: '**HangzhouFourteenAP**', zh: '**HangzhouFourteenAP**' },
               { en: 'Biofilm reduced by **57.1 %** (crystal violet) and **91.4 %** (acridine orange) against PBS', zh: '生物膜相對 PBS 減少 **57.1%**（結晶紫）與 **91.4%**（吖啶橙）' },
               { en: 'From a six-arm leave-one-out design, which is unusually strong for this section, and read on a *B. subtilis* surrogate biofilm rather than *S. mutans*, at n = 3, with the planned t-tests uncorrected and labelled exploratory by the team. Gravimetry failed to discriminate, and they publish that.', zh: '出自一個六組「逐一移除」設計，這在本組別裡強得不尋常——但讀的是 *B. subtilis* 替代生物膜而不是 *S. mutans*，n = 3，計畫中的 t 檢定未做多重校正，並被團隊自己標為探索性。重量法無法區分，而他們把這件事公開了。' }],
              [{ en: '**HFI**', zh: '**HFI**' },
               { en: 'Supernatant lysine falls over 24 h, best at a **2 : 1** strain ratio', zh: '上清液離胺酸在 24 小時內下降，在 **2 : 1** 菌株比例下最佳' },
               { en: 'Quantified by HPLC-MS against a standard curve, on a chassis with the endogenous pathway knocked out. The Spy-coupling benefit the design rests on is **not significant** at 24 h, and the intermediates were never quantified.', zh: '以 HPLC-MS 對照標準曲線定量，且底盤的內源路徑已被剔除。設計所倚賴的 Spy 偶合效益在 24 小時**不顯著**，而中間產物從未定量。' }],
              [{ en: '**HKSSC**', zh: '**HKSSC**' },
               { en: 'Wild type stops at **400–500 mg/L** paraben; the first transgenic cycle grew at **1000 mg/L**', zh: '野生型在 **400–500 mg/L** 對羥基苯甲酸酯下停止生長；第一個轉基因循環在 **1000 mg/L** 仍生長' },
               { en: 'Read as CFU on standard curves built first. But the uninduced plates carried colonies at the same concentrations, the range is not broken down by induction level, and cycle 2 came in **lower**. No degradation rate and no faster digestion is claimed.', zh: '以 CFU 讀取，而標準曲線是先建好的。但未誘導的培養盤在同樣濃度下也長出菌落、該範圍未按誘導程度拆分，而第二個循環的結果**更低**。他們沒有主張任何降解速率，也沒有主張消化變快。' }],
              [{ en: '**HongKong-HS**', zh: '**HongKong-HS**' },
               { en: 'ThT fluorescence for one miRNA at **100 nM, p < 0.001, n = 3**', zh: '其中一個 miRNA 在 **100 nM** 的 ThT 螢光，**p < 0.001，n = 3**' },
               { en: 'The amplification half has evidence on three readouts with leak controls. The recognition half does not: the best toehold switch gave **1.51× and not significant**, and the visible reporter was never obtained.', zh: '「放大」那一半在三種讀值上都有證據，並附洩漏對照。「辨識」那一半沒有：最好的 toehold 開關只有 **1.51 倍且不顯著**，而可見的報告子始終沒做出來。' }]
            ],
            min: 1000,
            source: { en: 'All numbers are each team\'s own, read from their 2026 wikis and sourced in detail on that team\'s page here. The third column is our summary of what the team itself says the number does and does not show.', zh: '所有數字都是各隊自己的，讀自他們 2026 年的 wiki，並在本站該隊頁面有詳細出處。第三欄是我們對「該隊自己說這個數字顯示了什麼、沒顯示什麼」的摘要。' }
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'hc-dry',
        kick: { en: 'Dry lab', zh: '乾式實驗' },
        h2: { en: 'What is actually in each dry-lab stack', zh: '每個乾式堆疊裡實際上有什麼' },
        lede: {
          en: 'Rendered animations and burden maps are not modelling, and we have tried to keep the distinction. Three of these stacks contain a model that chose something the bench then did.',
          zh: '算繪動畫與疾病負擔地圖不是建模，我們盡量守住這個區別。這些堆疊中有三個，含有一個「做出選擇、而實驗檯後來真的照著做」的模型。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'Dry-lab stack', zh: '乾式堆疊' } },
              { t: { en: 'Wet', zh: '濕' }, num: true, w: '7%' },
              { t: { en: 'Dry', zh: '乾' }, num: true, w: '7%' },
              { t: { en: 'HW', zh: '硬體' }, num: true, w: '7%' },
              { t: { en: 'SW', zh: '軟體' }, num: true, w: '7%' }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', t.dry, String(t.wetN), String(t.dryN),
                t.hw ? '●' : '·', t.sw ? '●' : '·'];
            }),
            min: 920,
            source: { en: '"Wet" and "Dry" count the distinct documented workflow stages we could identify on each wiki, which is our count and not the team\'s. ● marks a team with a hardware or software deliverable.', zh: '「濕」與「乾」計的是我們在各 wiki 上能辨識出的、彼此不同的流程階段數，這是我們的計數，不是該隊的。● 代表該隊有硬體或軟體交付物。' }
          }) +
          h.take({ en: 'The three models that changed what happened at the bench', zh: '三個改變了實驗檯上發生什麼事的模型' }, {
            en: '**Lambert-GA\'s PRINCE** was built because round 1 produced no binders from 15 candidates; it re-chose the epitope, and round 2 produced one. **HFI\'s NetLogo simulation** predicted that a large fraction of cells would stay unpaired no matter how long the co-culture ran. The microscopy then found exactly those free single cells, which is a model earning its keep by predicting a disappointment. **HangzhouFourteenAP\'s FoldX pipeline** scored twelve mutants of CoGH66 against a threshold declared in advance, and then the bench **reversed its ranking**: the mutant it ranked below wild type outperformed both. All three are more useful than a model that agreed with everybody.',
            zh: '**Lambert-GA 的 PRINCE** 之所以被做出來，是因為第一輪 15 個候選沒有產出任何結合子；它重新選了抗原表位，而第二輪產出了一個。**HFI 的 NetLogo 模擬**預測：不管共培養跑多久，都會有很大一部分細胞保持未配對——而顯微鏡後來找到的正是那些游離單細胞，這是一個靠「預測一個失望」來證明自己價值的模型。**HangzhouFourteenAP 的 FoldX 管線**用事先宣告的門檻為 CoGH66 的十二個突變體打分，而實驗檯接著**把它的排序翻轉了**：被它排在野生型之下的那個突變體，表現勝過兩者。這三個都比一個「與所有人意見一致」的模型有用。'
          })
      });

      /* ---------------- practices matrix ---------------- */
      out += h.sec({
        id: 'hc-prac',
        kick: { en: 'Practices', zh: '做法' },
        h2: { en: 'Which workflow practices each wiki documents', zh: '各 wiki 記載了哪些流程做法' },
        lede: {
          en: 'Not a score. Rows are teams, columns are practices; a filled cell is a documented instance we can point to on that team\'s page. An empty cell means we did not find one, not that the team did not do it.',
          zh: '這不是評分。列為隊伍、欄為做法；有顏色的格子代表我們能在該隊頁面上指出來的具體記載。空格代表我們沒找到，不代表該隊沒做。'
        },
        body:
          h.fig({
            kind: 'matrix',
            tag: { en: 'DOCUMENTED PRACTICE', zh: '有記載的做法' },
            title: { en: 'Seven workflow practices across the ten High School teams', zh: '高中部十隊的七項流程做法' },
            sub: { en: 'Read the columns, not the rows: three are full, one is nearly empty, and that is the finding.', zh: '請讀欄，不要讀列：有三欄是滿的、一欄幾乎是空的，而那就是這張圖的發現。' },
            data: {
              rows: teams.map(function (t) { return t.name; }),
              cols: [
                { en: 'Readout calibrated or validated before use', zh: '讀值在使用前先校正或驗證' },
                { en: 'A control in the same run that could make them wrong', zh: '同批次有一個可能讓他們是錯的對照' },
                { en: 'A screen with a published loser', zh: '一次有公開「輸家」的篩選' },
                { en: 'Failure named with its cause', zh: '失敗連原因一起具名' },
                { en: 'A claim scoped inside the sentence that makes it', zh: '主張在它自己那句話裡就被標出範圍' },
                { en: 'A number produced outside the team', zh: '有數字是由團隊之外產出的' },
                { en: 'Released something another team can run', zh: '釋出了別的團隊跑得起來的東西' }
              ],
              /* team order follows PD.teamsHS:
                 lambert, jss, eton, gcgs, gems, ghcis, hangzhou, hfi, hkssc, hkhs */
              v: [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, 1, 1, 1, 1, null],
                [1, 1, 1, 1, null, null, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, 1, 1, 1, null, 1],
                [1, 1, null, 1, null, null, 1],
                [1, 1, 1, 1, 1, null, null]
              ]
            },
            caption: { en: 'Compiled by us from the ten team pages on this site. Every filled cell is sourced there to the team\'s own wiki. The judgement about what counts as each practice is ours and can be argued with.', zh: '由我們依本站十個團隊頁彙整。每個有顏色的格子在那裡都標註了來自該隊自己 wiki 的出處。「什麼算得上是某項做法」的判斷是我們的，可以被爭論。' }
          }) +
          h.take({ en: 'The three full columns, and the one that is not', zh: '三個滿的欄，與那個不滿的欄' }, {
            en: 'Three columns are full, and they are the floor rather than the thing that separates teams: all ten calibrated a readout before trusting it, all ten ran a control that could have gone against them, and all ten named a failure with a cause. **The sixth column has two entries.** Lambert-GA and Eton-College-UK are the only two teams who had a number produced outside their own team, and also the only two in this Top 10 based outside East Asia. We mention the coincidence because somebody will notice it, and because we do not think ten data points support any explanation of it. What we do think is in [the overview](#hs-overview): a number from a laboratory that could have returned a result you disliked is the cheapest credibility available to a school team, and two out of ten is an opportunity rather than a verdict.',
            zh: '有三欄是滿的，而它們是地板、不是把隊伍分開的東西：十隊全部都在信任讀值之前先校正過它、全部都跑了一個有可能對自己不利的對照、全部都把一個失敗連原因一起具名。**第六欄只有兩個項目。**Lambert-GA 與 Eton-College-UK 是唯二「有數字是由自己團隊之外產出」的隊伍，也是這份前十名中唯二不位於東亞的隊伍——這個巧合我們提一下，是因為總會有人注意到，也因為我們認為十個資料點支撐不起任何對它的解釋。我們確實認為的寫在[總覽](#hs-overview)裡：一個來自「有可能回給你不喜歡的結果」的實驗室的數字，是學校團隊能取得最便宜的可信度；而十隊裡只有兩隊，是一個機會、不是一個判決。'
          })
      });

      /* ---------------- what each team shipped ---------------- */
      out += h.sec({
        id: 'hc-ship',
        kick: { en: 'Output', zh: '產出' },
        h2: { en: 'What each team shipped that somebody else can pick up', zh: '每支隊伍交付了什麼是別人可以接手的' },
        lede: {
          en: 'A wiki expires as a source the moment the next season starts. A tool, a part with characterisation behind it, or a device with a bill of materials does not.',
          zh: '一個 wiki 在下一季開始的那一刻，就不再是一個好用的來源。而一個工具、一個背後有特性化的元件、或一台附物料清單的裝置，不會。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'Software', zh: '軟體' }, w: '28%' },
              { t: { en: 'Hardware', zh: '硬體' }, w: '26%' },
              { t: { en: 'Parts and data', zh: '元件與資料' } }
            ],
            rows: [
              [{ en: '**Lambert-GA**', zh: '**Lambert-GA**' },
               { en: '**PRINCE**: epitope-patch ranker, web app **and** CLI, benchmarked on 6,937 interfaces across 1,549 antigen clusters with a homology-controlled split', zh: '**PRINCE**——抗原表位 patch 排序器，網頁版**與** CLI 皆有，以 1,549 個抗原分群、6,937 個界面做同源性受控切分的基準測試' },
               { en: '**Vapor-X** vacuum dryer, **$80.07** in components (**$95.52** with PCB assembly), externally validated at two universities', zh: '**Vapor-X** 真空乾燥器，零件 **80.07 美元**（含 PCB 組裝 **95.52 美元**），在兩所大學完成外部驗證' },
               { en: 'Minibinder designs and the RNAi constructs; a six-year colony epidemiology model', zh: 'minibinder 設計與 RNAi 構築；一個六年期的蜂群流病模型' }],
              [{ en: '**HongKong-JSS**', zh: '**HongKong-JSS**' },
               { en: 'Calibration equations published with a held-out set rather than a fitted line alone', zh: '公開的校正方程式附帶留出集，而不是只有一條擬合線' },
               { en: 'An imaging box and three generations of detection and extraction units, with run statistics per generation', zh: '一個成像箱，以及三代偵測與萃取單元，每一代都附實驗統計' },
               { en: 'Design 429 as a Registry part; the dose–response dataset over 0.005–5 µM', zh: 'Design 429 以 Registry 元件形式提交；0.005–5 µM 的劑量反應資料集' }],
              [{ en: '**Eton-College-UK**', zh: '**Eton-College-UK**' },
               { en: 'A substrate predictor trained on **10,472 confirmed cleavage windows** across 7 proteases, plus an exact square-wave voltammetry solution with 10 automated checks', zh: '一個以 7 種蛋白酶、**10,472 個已確認切割窗口**訓練的底物預測器，加上一個方波伏安法的精確解與 10 項自動化檢查' },
               { en: 'A disposable cartridge with 4 working electrodes and a reusable reader', zh: '一個帶 4 個工作電極的一次性卡匣，與一台可重複使用的讀取器' },
               { en: 'sfGFP reporter constructs; the LabChecks table itself, which is a reusable template', zh: 'sfGFP 報告構築；以及 LabChecks 那張表本身——它是一個可重用的範本' }],
              [{ en: '**GCGS**', zh: '**GCGS**' },
               { en: '—', zh: '—' },
               { en: '—', zh: '—' },
               { en: '**Best New Improved Part**: RhlR-SsrA-ASV with P_rhl(LR), an improvement on a leaky existing part, with the four-tag screen published behind it', zh: '**最佳新改良元件**：RhlR-SsrA-ASV 搭配 P_rhl(LR)，是對一個會洩漏的既有元件的改良，背後附上四種標籤的篩選結果' }],
              [{ en: '**GEMS-Taiwan**', zh: '**GEMS-Taiwan**' },
               { en: 'The application that runs the rig, plus a digital twin of it', zh: '驅動該設備的應用程式，以及它的數位孿生' },
               { en: '**Best Hardware**: a hollow-fiber perfusion reactor, a calibrated photometer and a hydroponics test box', zh: '**最佳硬體**：一台中空纖維灌流反應器、一台校正過的光度計與一個水耕測試箱' },
               { en: 'A Registry collection; the photometer calibration dataset against a commercial instrument', zh: '一組 Registry 元件集；以及光度計對照商用儀器的校正資料集' }],
              [{ en: '**GHCIS**', zh: '**GHCIS**' },
               { en: '**Best Software** for **ARGUS**: RGB → CIELAB → CIEDE2000 colour analysis for paper reactions, with the threshold published as provisional', zh: '**最佳軟體**——**ARGUS**：把紙上反應從 RGB 轉 CIELAB、算 CIEDE2000 色差，並把門檻公開為暫定值' },
               { en: 'An RPA unit and a sample holder, released as STEP and STL files', zh: '一個 RPA 單元與一個樣本座，以 STEP 與 STL 檔案釋出' },
               { en: '**Best Part Collection**: the three switch–reporter pairs, plus both rounds of switch designs, including the nine that failed', zh: '**最佳元件集**：三組開關—報告子配對，加上兩輪開關設計——包含失敗的那九個' }],
              [{ en: '**HangzhouFourteenAP**', zh: '**HangzhouFourteenAP**' },
               { en: 'The FoldX mutant-scoring pipeline, with its pre-declared threshold', zh: 'FoldX 突變體評分管線，附其事先宣告的門檻' },
               { en: '—', zh: '—' },
               { en: 'Two CoGH66 mutants registered as parts, one of which beat wild type against the model\'s own prediction', zh: '兩個 CoGH66 突變體註冊為元件，其中一個違反模型自己的預測、勝過野生型' }],
              [{ en: '**HFI**', zh: '**HFI**' },
               { en: 'A NetLogo agent-based model of cluster formation that predicted the free single cells', zh: '一個 NetLogo 個體模型，模擬群聚形成，並預測到那些游離單細胞' },
               { en: '—', zh: '—' },
               { en: 'A part collection for the split lysine pathway and the SpyTag–SpyCatcher display modules; **Best Education** materials', zh: '拆分離胺酸路徑與 SpyTag–SpyCatcher 展示模組的元件集；以及**最佳教育**的教材' }],
              [{ en: '**HKSSC**', zh: '**HKSSC**' },
               { en: '—', zh: '—' },
               { en: '—', zh: '—' },
               { en: '**Best New Basic Part**: the prbA esterase CDS and its native promoter with RBS, with CFU standard curves behind the characterisation', zh: '**最佳新基礎元件**：prbA 酯酶 CDS 與其原生啟動子加 RBS，特性化背後有 CFU 標準曲線' }],
              [{ en: '**HongKong-HS**', zh: '**HongKong-HS**' },
               { en: 'A NUPACK screen over 16 toehold candidates, published with the metric that failed to order them', zh: '對 16 個 toehold 候選的 NUPACK 篩選，並公開了那個「沒能把它們排對順序」的指標' },
               { en: '—', zh: '—' },
               { en: 'Four toehold switches with Sanger traces for all four, and both HCR hairpin pairs', zh: '四個 toehold 開關，四個都附 Sanger 定序結果，以及兩組 HCR 髮夾配對' }]
            ],
            min: 1060,
            source: { en: 'Read from each team\'s Contribution, Parts, Software and Hardware pages, cross-checked against the official prize list. A dash means we found nothing of that kind, which is not a criticism. Eight of the ten shipped something reusable, and three shipped software.', zh: '讀自各隊的 Contribution、Parts、Software 與 Hardware 頁，並與官方獎項名單交叉比對。破折號代表我們沒有找到那一類的東西，這不是批評——十隊中有八隊交付了可重用的東西，三隊交付了軟體。' }
          }) +
          h.note({
            en: '**GHCIS published both rounds of switch designs, including the nine that gave no separation.** A design that failed is the most useful thing a Registry collection can contain, because nobody else will generate it on purpose. **Lambert-GA shipped PRINCE as a web app and a command-line tool**, which means a team with no Python environment and a team with a cluster can both use it. Shipping twice costs an afternoon and doubles who can pick it up.',
            zh: '**GHCIS 把兩輮開關設計都公開了，包含那九個分不出差別的。**一個失敗的設計是一個 Registry 元件集裡最有用的東西，因為沒有別人會刻意去產生它。**Lambert-GA 把 PRINCE 同時做成網頁與命令列工具**，這意味著一支沒有 Python 環境的隊伍、與一支有叢集的隊伍，都能用它。交付兩次只花一個下午，卻讓能接手的人數加倍。'
          })
      });

      return out;
    }
  };
})(window);
