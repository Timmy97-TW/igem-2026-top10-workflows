/* Side by side — the ten workflows in one place. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.compare = {
    label: { en: 'Side by side', zh: '橫向比較' },
    title: { en: 'Side by side', zh: '橫向比較' },
    render: function (h) {
      var teams = PD.teams || [];
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'Ten workflows · one set of columns', zh: '十條工作流程 · 同一組欄位' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The same questions, asked of all ten: ==what did you build it with, and what made a number count?==',
          zh: '對十隊問同樣的問題：==你用什麼做出來的，以及什麼讓一個數字算得上成立？=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Each row is a team. Nothing in these tables is scored or ranked. The cells say what each wiki documents, and an empty cell means we did not find it, not that it was not done.',
          zh: '每一列是一支隊伍。這些表格不評分、不排名——格子裡寫的是各隊 wiki 記載了什麼；空白的格子代表我們沒有找到，而不是代表他們沒做。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'c-build', t: { en: 'How it was built', zh: '怎麼做出來的' } },
        { id: 'c-count', t: { en: 'What counted', zh: '什麼算成立' } },
        { id: 'c-dry', t: { en: 'Dry-lab stacks', zh: '乾式堆疊' } },
        { id: 'c-prac', t: { en: 'Practice matrix', zh: '做法矩陣' } },
        { id: 'c-fail', t: { en: 'Named failures', zh: '具名失敗' } }
      ]);

      /* ---------------- build ---------------- */
      out += h.sec({
        id: 'c-build',
        kick: { en: 'Construction', zh: '建構' },
        h2: { en: 'Half the field runs in E. coli alone, and one team did no assembly at all', zh: '全場有一半只在 E. coli 裡做，而有一隊完全沒做組裝' },
        lede: {
          en: 'Two of the ten run a mammalian line as the main chassis; one works in yeast, one in Pseudomonas, one in a phage. The assembly route each one chose is the fourth column.',
          zh: '十隊中有兩隊以哺乳動物細胞為主要宿主；一隊在酵母、一隊在 Pseudomonas、一隊在噬菌體。各隊選的組裝路線在第四欄。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '14%' },
              { t: { en: 'Project', zh: '專案' }, w: '11%' },
              { t: { en: 'Chassis', zh: '宿主' }, w: '24%' },
              { t: { en: 'Assembly route', zh: '組裝路線' } }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', t.project, '<span class="mono">' + t.chassis + '</span>', t.assembly];
            }),
            min: 740,
            source: { en: 'Read from each team\'s Design, Engineering or Experiments page.', zh: '讀自各隊的 Design、Engineering 或 Experiments 頁。' }
          }) +
          h.note({
            en: '**The outlier is instructive.** UCNZ ordered six constructs pre-cloned from Twist and state that this let them ignore restriction-site design entirely, a legitimate workflow choice that buys weeks. The cost of it shows up later, since they then had no in-house cloning route when a construct needed changing.',
            zh: '**這個例外很有啟發。** UCNZ 向 Twist 訂了六個已接好的構建體，並明說這讓他們完全不必處理限制酶切位設計——這是一個正當的流程選擇，換來好幾週時間；而它的代價在後面顯現：當某個構建體需要改動時，他們手上沒有自建的接株路線。'
          })
      });

      /* ---------------- what counted ---------------- */
      out += h.sec({
        id: 'c-count',
        kick: { en: 'Measurement', zh: '量測' },
        h2: { en: 'What each team decided a result was', zh: '每支隊伍如何決定「什麼是一個結果」' },
        lede: {
          en: 'This column is the one we would read first if we were judging. It is also the column most student wikis leave empty.',
          zh: '如果我們是評審，這一欄是我們會先讀的。而它也是多數學生 wiki 留空的那一欄。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '14%' },
              { t: { en: 'Primary readout', zh: '主要讀值' }, w: '26%' },
              { t: { en: 'The rule that makes it comparable', zh: '讓它可比較的那條規則' } }
            ],
            rows: [
              ['**Stanford**', { en: 'Three-colour flow cytometry', zh: '三色流式細胞術' },
                { en: 'Eight metrics defined once; **every match-vs-mismatch comparison inside one transfection**, because flow runs on different days are not comparable; significance needs three biological replicates and p < 0.05.', zh: '八個指標定義一次；**每組配對／錯配比較都在同一次轉染內**，因為不同日期的流式無法互相比較；顯著性需要三個生物重複且 p < 0.05。' }],
              ['**UCAS-China**', { en: 'EMSA, calcein leakage, OD350 turbidity', zh: 'EMSA、calcein 滲漏、OD350 濁度' },
                { en: 'A working window bounded at **both** ends (PRS shift below 2.5 µM, non-specific binding at ≥5 µM); BSA at matched molar concentration as the turbidity control; ambiguous dose-response reported with two candidate causes.', zh: '工作窗口的**兩端**都界定（PRS 在 2.5 µM 以下位移、≥5 µM 出現非專一結合）；濁度對照用同莫耳濃度的 BSA；劑量關係不明時連同兩個可能原因一起報告。' }],
              ['**Princeton**', { en: 'Dual-selection transduction counting', zh: '雙重選擇轉導計數' },
                { en: 'Both plates come from **the same diluted sample**, so dilution error, plating efficiency and host competence cancel in the ratio. Three conditions stated and justified: mid-log host, outgrowth before selection, one genome per cell.', zh: '兩塊盤取自**同一份稀釋樣品**，所以稀釋誤差、塗盤效率與宿主勝任度在比值中互相抵消。三個條件被明白寫出並給理由：宿主處於對數中期、選擇前先讓細胞生長、每顆細胞一個基因體。' }],
              ['**Heidelberg**', { en: 'Pressurised absorbance at 500 nm; xAM ultrasound', zh: '500 nm 加壓吸光；xAM 超音波' },
                { en: 'Collapse pressure defined as **P50, the inflection of a logistic fit**; ultrasound ROIs summarised by **median intensity with MAD** so wall echoes cannot move the number; a pre-registered effect-size rule for the MD work (≥6° with a CI excluding zero).', zh: '崩塌壓力定義為**邏輯擬合的轉折點 P50**；超音波 ROI 以**中位數強度搭配 MAD** 概括，使管壁回音無法移動數值；MD 部分則有事先登記的效應量規則（≥6° 且 95% CI 不含 0）。' }],
              ['**Cornell**', { en: 'CFU per mg of fibre mat; OD600 at the surface', zh: '每毫克纖維墊的 CFU；液面 OD600' },
                { en: 'Blank-corrected OD expressed as a percentage of each vial\'s own maximum, with the slope tested against zero by a **two-sided t-test (df = 14, α = 0.05)**; **n = 1 mat per concentration is stated on the figure**, and the 100× piece-to-piece spread is explained as clumping.', zh: '扣除空白後的 OD 以各瓶自身最大值的百分比表示，斜率以**雙尾 t 檢定（df = 14、α = 0.05）**對 0 檢驗；**每個濃度 n = 1 片墊直接寫在圖上**，而 100 倍的片間差異則以聚團現象解釋。' }],
              ['**LYON**', { en: 'Phenol-red defluorination; nanoDSF', zh: 'phenol red 脫氟；nanoDSF' },
                { en: 'The assay was validated before it judged anything: four plate-reading formats compared because the substrate is volatile, **HCl calibration R² = 0.9979** converting absorbance into nmol of protons, and a per-protein signal check that removed RPA1163 before it could mislead them.', zh: '試驗在評判任何事之前先被驗證：因為基質易揮發而比較四種讀盤方式、**HCl 校正 R² = 0.9979** 把吸光換成質子的 nmol 數，以及一項逐蛋白訊號檢查——它在 RPA1163 誤導他們之前就把它剔除。' }],
              ['**NUS-Singapore**', { en: 'Plate-reader fluorescence, one fixed assay', zh: '盤讀螢光，一套固定試驗' },
                { en: 'One frozen assay for every sensor generation (**4 h, 30 °C, 190 rpm, Ex480/Em530, gain 75, n = 3×3**), **one Hill equation fitted to every dose and crosstalk curve**, dying-cell doses excluded but still plotted in grey, and boundary-hit fits printed as "30.000 (bound)".', zh: '每一代感測器都用同一套凍結的試驗（**4 小時、30 °C、190 rpm、Ex480/Em530、gain 75、n = 3×3**）、**每條劑量與交叉干擾曲線都擬合同一個 Hill 方程**、細胞死亡的劑量點被排除但仍以灰色畫出，而撞到邊界的擬合則印成「30.000 (bound)」。' }],
              ['**UAlberta**', { en: 'Fluorescence binding, ex vivo retention', zh: '螢光結合、離體滯留' },
                { en: 'Per-construct fluorescence standard curves; results reported in **both µg/mL and µM with a stated reason**; non-specific-adsorption baselines used as the threshold; the frog-eye application was **blinded**; and ΔG differences below the published error band are declared meaningless.', zh: '每個構建體各自的螢光標準曲線；結果**同時以 µg/mL 與 µM 報告並說明理由**；以非專一吸附的基線作為門檻；蛙眼施用採**盲法**；而低於公開誤差帶的 ΔG 差異被宣告為無意義。' }],
              ['**UCNZ**', { en: 'DNS reducing-sugar absorbance at 540 nm', zh: 'DNS 還原糖在 540 nm 的吸光' },
                { en: 'Five DBTL iterations **on the assay itself** before any construct was judged on it, plus a triplicate enzyme-top-up experiment whose only purpose was to tell "dead enzyme" from "spent substrate", and whose answer then set incubation times everywhere else.', zh: '在任何構建體被它評判之前，先對**試驗本身**做了五輪 DBTL；另有一個三重複的「補酵素」實驗，唯一目的是分辨「酵素死了」與「基質用完了」——而它的答案接著決定了其他所有實驗的培養時間。' }],
              ['**UOttawa**', { en: 'Gibbs assay absorbance for 2-HBP', zh: '以 Gibbs 試驗吸光偵測 2-HBP' },
                { en: 'The honest case: the one positive number was **stoichiometrically impossible** (4.68 µM 2-HBP from 1 µM DBT), so they named the calibration artefact (intercept 0.1374, signal between LOD and LOQ) and **downgraded their own claim to qualitative** rather than removing it.', zh: '最誠實的案例：唯一的正面數字在**化學計量上不可能**（1 µM DBT 產生 4.68 µM 2-HBP），於是他們指名背後的校正假影——截距 0.1374、訊號落在 LOD 與 LOQ 之間——並**把自己的主張降級為定性**，而不是把它刪掉。' }]
            ],
            min: 780
          })
      });

      /* ---------------- dry stacks ---------------- */
      out += h.sec({
        id: 'c-dry',
        kick: { en: 'Dry lab', zh: '乾式實驗' },
        h2: { en: 'What is actually in each dry-lab stack', zh: '每個乾式堆疊裡實際有什麼' },
        lede: {
          en: 'Named tools only. Where a wiki does not name a version, we do not either.',
          zh: '只列有具名的工具。wiki 沒寫版本的，我們也不寫。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '14%' },
              { t: { en: 'Models and software, as named on the wiki', zh: 'wiki 上具名的模型與軟體' } },
              { t: { en: 'Pieces', zh: '件數' }, w: '9%', num: true }
            ],
            rows: teams.map(function (t) {
              return ['**' + t.name + '**', t.dry, String(t.dryN || '—')];
            }),
            min: 680,
            source: { en: '"Pieces" is our count of distinct models or software deliverables described on the team\'s own pages, not a quality score.', zh: '「件數」是我們依各隊頁面所描述、可區分的模型或軟體交付件數，不是品質分數。' }
          }) +
          h.cards([
            { chips: [{ t: { en: 'molecular dynamics', zh: '分子動力學' }, k: 'v' }],
              h: { en: 'Two teams ran MD, for opposite reasons', zh: '兩隊跑了 MD，理由相反' },
              p: { en: 'Heidelberg simulates two ribs of GvpA in CHARMM36 to get a bending stiffness and therefore a predicted collapse pressure: a number with a unit. UCAS-China coarse-grains three 1000-residue fusion proteins in Martini 3 to answer one yes/no question: is the RNA-binding domain buried inside the assembly?', zh: 'Heidelberg 用 CHARMM36 模擬兩條 GvpA 肋，為了得到彎曲剛度、進而推出預測的崩塌壓力——一個帶單位的數字。UCAS-China 則用 Martini 3 把三個千餘殘基的融合蛋白做粗粒化，只為回答一個是／否問題：RNA 結合域有沒有被包埋在組裝體內部？' } },
            { chips: [{ t: { en: 'generative design', zh: '生成式設計' }, k: 'b' }],
              h: { en: 'Three generators, two scanners, one shared habit', zh: '三個生成器、兩個掃描器，一個共同的習慣' },
              p: { en: 'Three teams ran a model that **writes new sequences**: RFdiffusion3 and LigandMPNN (Heidelberg), BoltzGen 0.3.2 (LYON), BindCraft and RFdiffusion3 behind a web app (Princeton). Two more ran a model that **scores mutations of a sequence they already had**. UAlberta put 117,732 FoldX mutants through five filters to reach 10, and UOttawa paired FoldX with ThermoMPNN. The distinction matters, and we had it wrong on this page at first. What all five share is a filter the team wrote down before looking at the output.', zh: '有三隊跑了一個會**寫出新序列**的模型：RFdiffusion3 與 LigandMPNN（Heidelberg）、BoltzGen 0.3.2（LYON）、藏在網頁應用後面的 BindCraft 與 RFdiffusion3（Princeton）。另外兩隊跑的模型是**為自己已經有的序列的突變體打分**——UAlberta 把 117,732 個 FoldX 突變體通過五道篩選剩下 10 個，UOttawa 則把 FoldX 與 ThermoMPNN 併用。這個區別是有意義的，而我們這一頁起初弄錯了。五隊共有的是一道團隊在看到輸出之前就寫下的篩選。' } },
            { chips: [{ t: { en: 'machine learning', zh: '機器學習' }, k: 'g' }],
              h: { en: 'Three teams trained a model on their own data', zh: '三隊用自己的數據訓練了模型' },
              p: { en: 'Heidelberg fine-tuned CellSAM on **108 of their own microscopy images** and reports F1 rising from 0.2 % to 42 % with false positives down 97 %. NUS-Singapore trained an MLP (128-128-64) on their own plate reads with whole-condition hold-outs. Stanford\'s U-Net turns a scar photograph into a printable patch.', zh: 'Heidelberg 用**自家 108 張顯微影像**微調 CellSAM，報告 F1 從 0.2% 升到 42%、偽陽性下降 97%。NUS-Singapore 用自家盤讀數據訓練一個 MLP（128-128-64），並採整組條件留出法。Stanford 的 U-Net 則把疤痕照片變成可列印的貼片。' } },
            { chips: [{ t: { en: 'engineering economics', zh: '工程經濟' }, k: 'a' }],
              h: { en: 'One team costed the plant', zh: '有一隊把廠房算了成本' },
              p: { en: 'UOttawa runs Turton module costing and an openLCA 2 model with IPCC 2021 GWP100, and reports the mass balance per kilogram of sulfur removed. LYON sizes a real column and derives a closed-form rule for its service life. Both treat the unit operation as the object of design.', zh: 'UOttawa 採用 Turton 模組成本法，並用 openLCA 2 搭配 IPCC 2021 GWP100 建模，報告每公斤脫硫的質量平衡。LYON 則把一座真的管柱算出尺寸，並導出其使用壽命的封閉解。兩者都把單元操作本身當成設計對象。' } }
          ]) +
          h.note({
            en: 'This table lists the stacks as the teams name them. The **[dry-lab toolbox](#toolbox)** takes the same material apart the other way: twenty-three capabilities sorted by the question each one answers, with what it costs to get at and which teams we can show using it.',
            zh: '這張表按各隊自己的命名列出堆疊。**[乾式工具箱](#toolbox)**則用另一個方向把同一批材料拆開：二十三項能力，按「每一項回答什麼問題」排序，附上取得成本，以及我們能舉證哪幾隊用過它。'
          })
      });

      /* ---------------- practice matrix ---------------- */
      out += h.sec({
        id: 'c-prac',
        kick: { en: 'Practices', zh: '做法' },
        h2: { en: 'Which workflow practices each wiki documents', zh: '各 wiki 記載了哪些流程做法' },
        lede: {
          en: 'A filled cell means we found the practice documented on that team\'s wiki. An empty cell means we did not find it, which is not the same as it not happening.',
          zh: '有顏色的格子代表我們在該隊 wiki 上找到了這個做法的記載。空白格代表我們沒找到——這和「沒有做」不是同一件事。'
        },
        body:
          h.fig({
            kind: 'matrix',
            tag: { en: 'DOCUMENTED PRACTICE', zh: '有記載的做法' },
            title: { en: 'Seven workflow practices across the ten teams', zh: '十支隊伍的七項流程做法' },
            sub: { en: 'Not a score. Rows are teams, columns are practices; a filled cell is a documented instance we can point to.', zh: '這不是評分。列為隊伍、欄為做法；有顏色的格子代表我們能指出來的具體記載。' },
            data: {
              rows: teams.map(function (t) { return t.name; }),
              cols: [
                { en: 'Metrics defined before the data', zh: '數據之前先定義指標' },
                { en: 'Control in the same run', zh: '對照同批次' },
                { en: 'Calibration curve published', zh: '公開校正曲線' },
                { en: 'Assay validated or rebuilt', zh: '試驗經驗證或重建' },
                { en: 'Parameters labelled by status', zh: '參數標註狀態' },
                { en: 'A model fitted to data', zh: '有模型擬合到數據' },
                { en: 'Failure named with its cause', zh: '失敗連原因一起具名' }
              ],
              /* teams order follows PD.teams: stanford, ucas, princeton, heidelberg, cornell, lyon, nus, ualberta, ucnz, uottawa */
              v: [
                [1, 1, 1, null, 1, 1, 1],
                [null, 1, null, 1, null, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, null, 1, 1],
                [null, 1, null, null, null, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, null, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [null, 1, 1, 1, null, null, 1],
                [1, 1, 1, 1, 1, 1, 1]
              ]
            },
            opts: { cell: 30, vmax: 1, dec: 0 },
            caption: {
              en: 'Our reading of the ten wikis. "Parameters labelled by status" means a model parameter is explicitly marked as measured, computed, fitted or placeholder. "Assay validated or rebuilt" means an experiment was spent on the method itself before it was used to judge a construct.',
              zh: '我們對十個 wiki 的判讀。「參數標註狀態」指模型參數被明確標成量測、計算、擬合或暫定值。「試驗經驗證或重建」指在用它評判構建體之前，先花了一個實驗在方法本身上。'
            }
          }) +
          h.take({ en: 'The two columns that are not full', zh: '沒有填滿的那兩欄' }, {
            en: 'Five of the ten label their model parameters by status, and seven of the ten defined their metrics before the data arrived. **Every other column here stands at eight or above**: controls in the same run and named failures are at ten. So the field separates on exactly two habits, and neither of them needs a budget. That is where we would put our own effort next season.',
            zh: '十隊中有五隊為模型參數標註狀態，有七隊在數據到手之前就先定義了指標。**這裡其他每一欄都站在八以上**——對照同批次與具名失敗都是十。所以把全場分開的剛好是兩個習慣，而兩者都不需要預算。那就是我們下一季會把力氣放上去的地方。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'c-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'The named failure on each wiki', zh: '每個 wiki 上具名的那個失敗' },
        lede: {
          en: 'One per team, chosen as the most useful to a reader rather than the most serious.',
          zh: '每隊一則，挑的是對讀者最有用的那個，而不是最嚴重的那個。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '14%' },
              { t: { en: 'What they published', zh: '他們公開了什麼' } },
              { t: { en: 'What it cost them', zh: '這讓他們付出什麼' }, w: '26%' }
            ],
            rows: [
              ['**Stanford**', { en: 'Transfecting primary dermal and keloid fibroblasts was the hard part of the season; self-amplifying RNA designs were built but are stated as needing further testing.', zh: '轉染原代皮膚與瘢痕纖維母細胞是整季最難的一關；自我擴增 RNA 的設計已經做出來，但他們明說還需要更多測試。' }, { en: 'The therapeutic output in the target cell type is still low.', zh: '在目標細胞型別中的治療輸出仍然偏低。' }],
              ['**UCAS-China**', { en: 'The first target, CCSP, was abandoned after structure prediction suggested the fusion would break its homodimer and the localisation could not be resolved; the calcein assay showed membrane damage but no dose response.', zh: '第一個標靶 CCSP 在結構預測顯示融合會破壞其同源二聚體、且定位無法判定後被放棄；calcein 試驗顯示膜受損但沒有劑量關係。' }, { en: 'A whole engineering track restarted from a bioinformatic screen.', zh: '整個工程軌道從一次生物資訊篩選重新開始。' }],
              ['**Princeton**', { en: 'Plaque counting broke for any construct with more than two tag inserts; the Amp:Kan ratio then fell every round instead of rising.', zh: '任何帶超過兩個標籤插入的構建體都無法用噬菌斑計數；而 Amp:Kan 比值接著每一輪都下降，而不是上升。' }, { en: 'Four measurement protocols, and a correction to their own model parameter.', zh: '四套量測流程，以及一次對自家模型參數的更正。' }],
              ['**Heidelberg**', { en: 'No biosensor design passed every computational filter. Most failed at the final step, where the full construct is predicted alongside the target.', zh: '沒有任何生物感測器設計通過全部的計算篩選——多數在最後一步失敗，也就是把完整構建體與標靶一起預測的那一步。' }, { en: 'Only two of seven built variants shifted with the target.', zh: '七個做出來的變異體中只有兩個隨標靶位移。' }],
              ['**Cornell**', { en: 'Reversed gel electrode polarity; 40 mL of ethanol instead of 20 in a wash buffer giving A260/230 = 0.6; competent cells left out of −80 °C; a 30 bp deletion across the promoter turning the construct constitutive.', zh: '膠體電極接反；洗滌緩衝液加了 40 mL 乙醇而非 20 mL，使 A260/230 = 0.6；勝任細胞被放在 −80 °C 外；跨越啟動子的 30 bp 缺失讓構建體變成組成性表達。' }, { en: 'Three DBTL cycles, then buying the finished plasmid.', zh: '三個 DBTL 循環，最後直接購買做好的質體。' }],
              ['**LYON**', { en: 'The enzyme family cannot cleave TFA: the barrier is attack geometry, not affinity. In silico affinity scoring did not beat the wild type, so no design was selected on it. Two variants were insoluble and were dropped.', zh: '這個酵素家族切不了 TFA——障礙在攻擊幾何，而不是親和力。計算親和力評分並未勝過野生型，因此沒有任何設計是靠它被選中。兩個變異體不溶，直接剔除。' }, { en: 'The project changed from degradation to capture.', zh: '專案從降解改成捕捉。' }],
              ['**NUS-Singapore**', { en: 'Two consecutive binding-site engineering rounds failed, which is what identified basal leakiness as the ceiling; the team then discarded its own model\'s recommendation on methodological grounds.', zh: '連續兩輪結合位點工程失敗，正是這件事指出基礎滲漏才是天花板；團隊接著以方法學理由丟掉了自家模型的建議。' }, { en: 'Four separate leakiness fixes, tested one at a time.', zh: '四種不同的降滲漏方案，一次測一個。' }],
              ['**UAlberta**', { en: 'CD44 was killed twice (unclonable, then a truncated transmembrane region); the entire ITC arm is reported as unusable including its controls; HA binding beat glycan binding; one mutant retained less than wild type.', zh: 'CD44 被否決兩次（無法接株，之後又因跨膜區截斷）；整個 ITC 分支連同其對照都被報告為不可用；HA 結合勝過醣鏈結合；有一個突變體的滯留比野生型更差。' }, { en: 'No K_D was successfully measured all season.', zh: '整季都沒有成功量到任何 K_D。' }],
              ['**UCNZ**', { en: 'YebF never secreted; a borrowed periplasmic control invalidated every extracellular lane; the product was never confirmed to be nanocellulose (the best FTIR match was a synthetic oil); their own combination assay contradicted the project\'s premise.', zh: 'YebF 從未成功分泌；一個借來的週質蛋白對照否定了所有胞外泳道；產物從未被確認是奈米纖維素（FTIR 最佳匹配竟是一種合成油）；而他們自己的組合試驗與專案前提相矛盾。' }, { en: 'The second half of the project was reorganised.', zh: '專案後半段整個重組。' }],
              ['**UOttawa**', { en: 'LC-ESI-MS never validated: the expected masses were never detected and the instrument was down for weeks; the one positive activity number is stoichiometrically impossible and was downgraded to qualitative; editorial placeholders are still live on the published wiki.', zh: 'LC-ESI-MS 始終未能驗證——預期的質量數從未被偵測到，而儀器還停機數週；唯一的正面活性數字在化學計量上不可能，已被降級為定性；已發表的 wiki 上甚至還留著編輯用的佔位文字。' }, { en: 'Activity from 1 of 8 assembled library members, qualitative only.', zh: '8 個組裝出的庫 member 中只有 1 個測到活性，且僅為定性。' }]
            ],
            min: 800
          }) +
          h.take({ en: 'Why this table is the point of the site', zh: '為什麼這張表才是本站的重點' }, {
            en: 'Every row here is a mistake you can now avoid making, published by a team that still finished in the Top 10. That combination — published failure plus a Top 10 finish — is the argument for writing yours down.',
            zh: '這裡每一列都是你現在可以避免再犯的錯，而且是由一支仍然拿到前十名的隊伍公開的。「公開失敗」加上「拿到前十名」這個組合，就是把你自己的失敗寫下來的理由。'
          })
      });

      return out;
    }
  };
})(window);
