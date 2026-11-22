/* Overview — the comparative analysis across all ten teams. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.overview = {
    label: { en: 'Overview', zh: '總覽' },
    title: { en: 'Overview', zh: '總覽' },
    render: function (h) {
      var out = '';
      var teams = PD.teams || [];

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · read from ten public wikis · compiled 21 November 2026',
          zh: 'GEMS Research · 讀自十個公開 wiki · 彙編於 2026 年 11 月 21 日'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'In the 2026 Top 10, the dry lab is not a deliverable beside the wet lab. It is ==what decides what the wet lab builds==.',
          zh: '在 2026 年前十名裡，乾式實驗不是擺在濕式實驗旁邊的一項交件，而是==決定濕式實驗要做什麼的那一方==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Ten teams were named to the Top 10 Undergraduate list at the iGEM 2026 Grand Jamboree in Paris. This site reads all ten wikis for one thing only: **how the work was actually run**. Which assembly route, which strain, what counted as a result, which model was fitted and which was a placeholder, and where the two halves of the project handed each other something. One overview page, one page per team, and every number traced back to the team that measured it.',
          zh: '2026 年巴黎 iGEM Grand Jamboree 的大學部前十名共有十支隊伍。本站把十個 wiki 全部讀過，只為一件事：**這些工作實際上是怎麼跑的**。用了哪條組裝路線、哪個菌株，什麼才算一個結果，哪個模型是擬合出來的、哪個只是暫定值，以及專案的兩半在什麼地方把東西交到對方手上。一頁總覽、每隊一頁，而每個數字都回溯到量測它的那支隊伍。'
        }) + '</p>' +
        h.stats([
          { v: '10', l: { en: 'Teams on the Undergrad Top 10 list', zh: '大學部前十名隊伍' } },
          { v: '7', l: { en: 'Of the ten that published a named negative result', zh: '十隊中公開寫出具名負面結果的隊數' } },
          { v: '9', l: { en: 'Of the ten whose dry lab changed a wet-lab decision', zh: '十隊中乾式實驗改變了濕式決策的隊數' } },
          { v: '5', l: { en: 'Teams running generative protein design', zh: '使用生成式蛋白質設計的隊數' } },
          { v: '4', l: { en: 'Teams that had to build or rebuild their own assay', zh: '必須自建或重建量測方法的隊數' } },
          { v: '3', l: { en: 'Teams whose model disqualified their own experiment', zh: '模型否決了自家實驗的隊數' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'o-what', t: { en: 'What this is', zh: '這是什麼' } },
        { id: 'o-ten', t: { en: 'The ten', zh: '十支隊伍' } },
        { id: 'o-find', t: { en: 'Six findings', zh: '六個發現' } },
        { id: 'o-where', t: { en: 'Where dry meets wet', zh: '乾濕交界' } },
        { id: 'o-meas', t: { en: 'The measurement ladder', zh: '量測階梯' } },
        { id: 'o-fail', t: { en: 'Failure as method', zh: '把失敗當方法' } },
        { id: 'o-arch', t: { en: 'Four archetypes', zh: '四種原型' } },
        { id: 'o-funnel', t: { en: 'Design funnels', zh: '設計漏斗' } },
        { id: 'o-method', t: { en: 'How we read this', zh: '我們怎麼讀的' } },
        { id: 'o-gems', t: { en: 'What we would take', zh: '我們會帶走什麼' } }
      ]);

      /* ---------------- what this is ---------------- */
      out += h.sec({
        id: 'o-what',
        kick: { en: 'What this is', zh: '這是什麼' },
        h2: { en: 'A workflow study, not a ranking and not a review of the science', zh: '一份工作流程研究，不是排名，也不是對科學內容的評論' },
        body:
          h.cards([
            { chips: [{ t: { en: 'what it is', zh: '它是什麼' }, k: 'g' }],
              h: { en: 'Ten workflows, described in the same terms', zh: '十條工作流程，用同一套語彙描述' },
              p: { en: 'Each team page answers the same questions in the same order: the design decision, where the two lanes touched, the wet-lab pipeline, what counted as a result, the model stack, what failed, and what we would copy. That makes the ten comparable, which no single wiki can do for you.', zh: '每個團隊頁都用同樣的順序回答同樣的問題：設計決策、兩條泳道在哪裡相接、濕式流程、什麼算一個結果、模型堆疊、什麼失敗了、以及我們會抄什麼。這讓十隊之間可以互相比較——而單獨看任何一個 wiki 都做不到這件事。' } },
            { chips: [{ t: { en: 'what it is not', zh: '它不是什麼' }, k: 'r' }],
              h: { en: 'Not our results, and not a judgement of who deserved what', zh: '不是我們的成果，也不評斷誰該得什麼獎' },
              p: { en: 'We measured nothing. Every number here belongs to the team that produced it and is linked to the page it came from. We also do not rank the ten against each other: the official result is the official result, and finishing order inside a Top 10 list is not published.', zh: '我們沒有量測任何東西。這裡的每個數字都屬於產出它的隊伍，並連回它的來源頁。我們也不把十隊互相排名：官方成績就是官方成績，而前十名之內的名次並未公布。' } },
            { chips: [{ t: { en: 'who it is for', zh: '給誰看' }, k: 'b' }],
              h: { en: 'Written by a student team, for student teams', zh: '由學生團隊寫給學生團隊' },
              p: { en: 'Compiled by GEMS Research (Taiwan), whose own 2026 project was in the High School Top 10 the same year — so this is one competitor reading another\'s method, with the bias that implies. The practices we single out are the ones we think a team with a modest budget can actually adopt next season.', zh: '由 GEMS Research（台灣）彙編；我們自己 2026 年的專案同年進入高中部前十名——所以這是一支參賽隊伍在讀另一支隊伍的方法，也帶著這件事隱含的偏見。我們特別點出的做法，都是我們認為預算有限的團隊下一季真的採用得起的。' } }
          ])
      });

      /* ---------------- the ten ---------------- */
      out += h.sec({
        id: 'o-ten',
        kick: { en: 'The ten', zh: '十支隊伍' },
        h2: { en: 'Top 10 Undergraduate, iGEM 2026', zh: 'iGEM 2026 大學部前十名' },
        lede: {
          en: 'Listed with the Grand Prize and the two runners-up first, then alphabetically as the official page lists them. Click a card to open that team\'s workflow page.',
          zh: '先列首獎與兩位 runner-up，其後依官方頁面的字母順序。點一張卡片即可打開該隊的工作流程頁。'
        },
        body:
          '<div class="g2">' + teams.map(function (t) {
            var k = t.rank === 1 ? 'g' : (t.rank <= 3 ? 'b' : 'n');
            return '<div class="card lift" data-go="' + t.id + '" style="cursor:pointer">' +
              h.chips([{ t: t.award, k: k }, { t: t.village, k: 'n' }]) +
              '<h4 style="margin-top:9px">' + h.esc(t.flag + '  ' + t.name) + ' · <span style="color:var(--blue)">' + h.esc(t.project) + '</span></h4>' +
              '<p>' + h.md(t.one) + '</p>' +
              '<p class="small" style="margin-top:10px"><b>' + h.T({ en: 'Chassis', zh: '宿主' }) + ':</b> <span class="mono">' + h.esc(t.chassis) + '</span></p>' +
              '</div>';
          }).join('') + '</div>' +
          h.note({
            en: 'Also announced on the same page: TU Delft took the Overgrad Grand Prize and Lambert-GA the High School Grand Prize. **All three sections now have their own part of this site** — use the switch above the tabs, or go straight to the [Overgraduate overview](#og-overview) or the [High School overview](#hs-overview). The **Across tiers** section reads all thirty wikis against each other in [Three tiers](#x-tiers) and turns them into a [2027 roadmap](#x-roadmap). The full official list is at [competition.igem.org/results/2026](https://competition.igem.org/results/2026).',
            zh: '同一頁公布的其他結果：TU Delft 取得研究生組首獎，Lambert-GA 取得高中組首獎。**三個組別現在在本站都有自己的一區**——使用分頁列上方的切換鈕，或直接前往[研究生部總覽](#og-overview)或[高中部總覽](#hs-overview)。**三層比較**那一區把三十個 wiki 互相對讀，成果在[三層分析](#x-tiers)，並整理成一份[2027 選題指南](#x-roadmap)。完整官方名單見 [competition.igem.org/results/2026](https://competition.igem.org/results/2026)。'
          })
      });

      /* ---------------- six findings ---------------- */
      out += h.sec({
        id: 'o-find',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'Six things all ten wikis say when you read them together', zh: '把十個 wiki 一起讀時，它們共同說出的六件事' },
        lede: {
          en: 'These are our conclusions, drawn from the ten pages that follow. Each one names the teams it rests on so you can check it.',
          zh: '以下是我們從後面十頁得出的結論。每一條都列出它所依據的隊伍，方便你自己查核。'
        },
        body:
          h.h3({ en: '1 · The model picks the target before the lab touches a pipette', zh: '1 · 在實驗室碰到移液器之前，模型已經挑好標靶' }, 'o-f1') +
          h.p({
            en: 'Stanford\'s RADAR-Scout scores three cell populations across **26 single-cell cohorts and 960,518 cells** and hands the lab five gene names; the 5×5 sensor panel *is* the screen\'s output. UCAS-China\'s first target (CCSP) died in the lab, and its replacement came from a four-filter screen — Human Lung Cell Atlas → DESeq2 → Human Surfaceome → UniProt topology → GTEx — that returned **68 candidates of which UPK1B passed all four**. UAlberta\'s GLARE narrows **>50,000 catalogued glycan sequences** to a short list before a construct exists. In none of these cases could the target have been chosen by reading papers.',
            zh: 'Stanford 的 RADAR-Scout 在 **26 個單細胞資料集、960,518 顆細胞**上為三個細胞族群打分，然後交給實驗室五個基因名；那個 5×5 感測器矩陣*就是*篩選流程的輸出。UCAS-China 的第一個標靶（CCSP）在實驗室裡死掉了，替代者來自一套四重篩選——Human Lung Cell Atlas→DESeq2→Human Surfaceome→UniProt 拓樸→GTEx——得到 **68 個候選，其中 UPK1B 通過全部四項**。UAlberta 的 GLARE 在任何構建體存在之前，就把 **50,000 筆以上已編目的醣鏈序列**縮成一張短名單。這幾個例子裡，標靶都不可能靠讀文獻挑出來。'
          }) +
          h.h3({ en: '2 · The podium teams had to build their own measurement', zh: '2 · 站上前三的隊伍都必須自己建量測方法' }, 'o-f2') +
          h.p({
            en: 'Princeton is the clearest case: plaque counting works for wild-type M13, but **constructs with more than two tag inserts gave colonies rather than plaques**, so the measurement had to be rebuilt — four protocols, each with its own DBTL round, ending in a dual-selection transduction count where *"a plaque reports that a particle was infective. It never reports what was inside it."* Stanford defines eight metrics once and fixes the comparison inside a single transfection because flow runs on different days drift. UCAS-China bounds its binding window at **both** ends (PRS shift below 2.5 µM, non-specific above 5 µM). NUS-Singapore validates its linear unmixing on **mixtures of single-reporter strains in known ratios** before trusting it on a real sample.',
            zh: 'Princeton 是最清楚的例子：噬菌斑計數對野生型 M13 有效，但**帶超過兩個標籤插入的構建體長出的是菌落、不是噬菌斑**，於是整個量測必須重建——四套流程、每套都有自己的 DBTL 循環，最後落在雙重選擇的轉導計數上，並寫下*「噬菌斑只報告一顆顆粒具感染性，從不報告它裡面裝了什麼。」* Stanford 把八個指標定義一次，並因為不同日期的流式會漂移，把比較固定在同一次轉染內。UCAS-China 把結合窗口的**兩端**都界定出來（PRS 在 2.5 µM 以下才位移、5 µM 以上出現非專一結合）。NUS-Singapore 則先用**已知比例混合的單一報告基因菌株**驗證線性解混，才敢把它用在真實樣品上。'
          }) +
          h.h3({ en: '3 · Generative protein design is routine, and nobody trusts one score', zh: '3 · 生成式蛋白質設計已是常規，而沒有人只信一個分數' }, 'o-f3') +
          h.p({
            en: 'Five of the ten ran generative design, and every one of them put a **gate written in advance** in front of it. Heidelberg: LigandMPNN redesign in four tiers, then a four-criterion gate (AlphaFold2 i_pAE ≤ 12, contacts with all four chains in ≥4 of 5 Boltz-2 runs, pose reproducible within 2 Å, composition filter) taking **200 designs → 135 → 121**, with only the i_pAE threshold calibrated against controls and the other three declared a priori. LYON: BoltzGen 0.3.2 generated **10,000 candidates → 5 kept → 3 built**, and in silico affinity scoring **did not beat the wild type, so nothing was selected on it**. UAlberta: **117,732 FoldX mutant structures → 10 to the bench**, chosen to discriminate between two docking programs rather than to confirm either. Princeton ships the gate as software, with a difficulty score that carries its own disclaimer. UOttawa deliberately pairs two unlike ΔΔG predictors — FoldX (physics) and ThermoMPNN (deep learning) — so that agreement carries information.',
            zh: '十隊中有五隊使用生成式設計，而每一隊都在它前面放了一道**事先寫好的門檻**。Heidelberg：LigandMPNN 分四級重設計，再經四項判準（AlphaFold2 i_pAE ≤ 12、五次 Boltz-2 中至少四次與四條鏈都有接觸、姿態可重現於 2 Å 內、組成篩選），把 **200 個設計→135→121**，而其中只有 i_pAE 門檻是用對照校正的，另外三項明說是事先設定。LYON：BoltzGen 0.3.2 產生 **10,000 個候選→留 5 個→做 3 個**，而計算親和力評分**並未勝過野生型，因此不以它選株**。UAlberta：**117,732 個 FoldX 突變結構→10 個進實驗台**，挑選標準是能分辨兩套對接程式，而不是去確認其中任一套。Princeton 把門檻本身做成軟體，附上一個自帶免責聲明的難度分數。UOttawa 則刻意並用兩種性質不同的 ΔΔG 預測器——FoldX（物理）與 ThermoMPNN（深度學習）——好讓「兩者一致」本身帶有資訊。'
          }) +
          h.h3({ en: '4 · Fitted, or labelled: credible models say which', zh: '4 · 擬合或標註：可信的模型會說清楚是哪一種' }, 'o-f4') +
          h.p({
            en: 'Stanford fits three parameters by **simulated annealing against someone else\'s qPCR data** and reports them as its own numbers (p_entry 10.7 % per division, k_sat 232 plasmids per nucleus, k_tx 0.273 h⁻¹), alongside a table of **82 parameters each with value, unit, source and a note on what still needs measuring**. LYON labels every single filter parameter *design choice / computed / placeholder / operating range*, and prints that its reference capacity of 25 mg/g is a placeholder against a **measured upper bound of 0.135 mg/g** — a factor of about 185. Princeton reads plasmid copy numbers off the actual origin annotations and **publishes a correction to its own earlier parameter** (a_h 0.96 → 0.729, after realising M13K07 replicates from p15A, not an intact f1 origin). UAlberta declares Y = 1 a fitting parameter awaiting bench data. The pattern is consistent: the number is either tied to a measurement, or it is wearing a label.',
            zh: 'Stanford 用**模擬退火對別人的 qPCR 數據**擬合三個參數，並把它們當成自己的數字報出（每次分裂 p_entry 10.7%、每核 k_sat 232 個質體、k_tx 0.273 h⁻¹），同時附上一張 **82 個參數的表，每個都有數值、單位、出處，以及「還需要量什麼」的備註**。LYON 把濾床模型的每一個參數都標成*設計選擇／計算／暫定值／操作範圍*，並寫明其參考容量 25 mg/g 是暫定值，而**實測上界是 0.135 mg/g**——相差約 185 倍。Princeton 直接從複製起點註解讀出質體拷貝數，並**為自己先前的參數公開更正**（a_h 0.96→0.729，因為發現 M13K07 是靠 p15A 而非完整 f1 起點複製）。UAlberta 明白宣告 Y = 1 是一個等待實驗數據的擬合參數。模式很一致：一個數字要嘛綁在量測上，要嘛身上貼著標籤。'
          }) +
          h.h3({ en: '5 · The strongest move on display is a model that disqualifies your own experiment', zh: '5 · 全場最強的一招，是用模型否決自家實驗' }, 'o-f5') +
          h.p({
            en: 'UAlberta used its ocular transport model to argue that protein should move about **1 mm per hour**, which means the deeper slices in their own diffusion assay are artefact — so D_gel is still taken from the literature rather than from their data. UCNZ ran a borrowed periplasmic protein (**HiSiaP**) purely to audit their own fractionation, and it **disqualified every extracellular lane they had**, taking their secretion claim with it. LYON\'s structural model concluded that cleaving TFA is blocked by attack geometry rather than affinity, which **ended the degradation route and turned the project into a capture project**. Three different teams, one habit: point the model at your own evidence first.',
            zh: 'UAlberta 用自家的眼部傳輸模型論證蛋白質每小時大約只能移動 **1 mm**，也就是說他們自己擴散試驗中較深的切片是假影——因此 D_gel 至今仍取自文獻，而非他們的數據。UCNZ 借來一個週質蛋白（**HiSiaP**）純粹為了稽核自己的分層純化，結果它**否決了他們所有的胞外樣品泳道**，連帶拉掉了分泌的主張。LYON 的結構模型結論是：切斷 TFA 卡在攻擊幾何、而非親和力，這**終結了降解路線，把專案改造成一個捕捉型專案**。三支不同的隊伍，同一個習慣：先把模型對準自己的證據。'
          }) +
          h.h3({ en: '6 · The published failure is the most transferable part of a Top 10 wiki', zh: '6 · 前十名 wiki 上最可移植的部分，是公開的失敗' }, 'o-f6') +
          h.p({
            en: 'Cornell lists reversed gel electrode polarity, 40 mL of ethanol instead of 20 in a wash buffer, competent cells left out of −80 °C for hours, and a 30 bp deletion across a promoter that turned an inducible construct constitutive — then says that a 10 s heat shock never worked and 45 s did. UOttawa published an activity number that is **stoichiometrically impossible** (4.68 µM 2-HBP from 1 µM DBT), named the calibration artefact behind it, and downgraded its own claim to qualitative. UCNZ reports that YebF never secreted and that the product was never confirmed to be nanocellulose. For a team planning next season, these four paragraphs are worth more than any successful result on the same pages, because they are the parts you can avoid repeating.',
            zh: 'Cornell 列出膠體電極接反、洗滌緩衝液該加 20 mL 乙醇卻加了 40 mL、勝任細胞被放在 −80 °C 外好幾個小時、以及跨越啟動子的 30 bp 缺失把一個可誘導構建體變成組成性表達——接著說 10 秒熱衝擊從來沒成功，45 秒才行。UOttawa 公開了一個**在化學計量上不可能**的活性數字（1 µM DBT 產生 4.68 µM 2-HBP），指名背後的校正假影，並把自己的主張降級為定性。UCNZ 報告 YebF 從未成功分泌，而產物也從未被確認是奈米纖維素。對正在規劃下一季的團隊來說，這四段文字比同一些頁面上任何成功結果都更有價值，因為它們正是你可以不必重蹈的部分。'
          })
      });

      /* ---------------- where dry meets wet ---------------- */
      out += h.sec({
        id: 'o-where',
        kick: { en: 'The joint', zh: '接點' },
        h2: { en: 'Where the dry lab attaches to the cycle', zh: '乾式實驗接在循環的哪個位置' },
        lede: {
          en: 'A dry lab can attach at four points of a Design-Build-Test-Learn round, and which point it attaches at is the clearest single difference between these ten projects.',
          zh: '乾式實驗可以接在 Design-Build-Test-Learn 循環的四個位置上，而接在哪一個位置，是這十個專案之間最清楚的單一差異。'
        },
        body:
          h.wf('dbtl', {
            tag: { en: 'ANALYSIS', zh: '分析' },
            title: { en: 'Four attachment points, and who uses each', zh: '四個接點，以及誰用哪一個' },
            sub: { en: 'Teams appear more than once where their dry lab attaches in more than one place.', zh: '若某隊的乾式實驗接在多個位置，該隊會重複出現。' },
            caption: { en: 'Our classification, drawn from the ten team pages on this site.', zh: '我們的分類，依本站十個團隊頁繪製。' }
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'Handoff we could name', zh: '我們能指名的交接' } },
              { t: { en: 'Direction', zh: '方向' }, w: '17%' }
            ],
            rows: [
              [{ en: '**Stanford**', zh: '**Stanford**' }, { en: 'The screen names the five trigger genes; flow data then replaces GC content with folding ΔG as the ranking filter; the expression lag in primary fibroblasts is what forced the ODE framework into existence.', zh: '篩選流程指定五個觸發基因；流式數據接著用折疊 ΔG 取代 GC 含量作為排序篩選；原代纖維母細胞的表達延遲，則是逼出整套 ODE 架構的原因。' }, { en: 'both ways, twice', zh: '雙向，兩次' }],
              [{ en: '**UCAS-China**', zh: '**UCAS-China**' }, { en: 'A bioinformatic screen replaces a target that failed at the bench; the wet lab\'s own OD350 curves then calibrate the CAPE free-energy model.', zh: '生物資訊篩選取代了在實驗台上失敗的標靶；濕式實驗自己的 OD350 曲線接著校正 CAPE 自由能模型。' }, { en: 'both ways', zh: '雙向' }],
              [{ en: '**Princeton**', zh: '**Princeton**' }, { en: 'A measurement that came out backwards is modelled to find out why; the binder designs come back from the app with an LPXT tag ready for ligation.', zh: '一個結果反過來的量測被拿去建模以查明原因；結合蛋白設計則帶著可直接接合的 LPXT 標籤從軟體回到實驗台。' }, { en: 'both ways', zh: '雙向' }],
              [{ en: '**Heidelberg**', zh: '**Heidelberg**' }, { en: 'Gated designs become real GvpC variants; measured collapse pressures test the MD prediction; their own microscopy images are the training set for GVSAM.', zh: '通過門檻的設計變成真的 GvpC 變異體；實測崩塌壓力檢驗 MD 預測；而他們自己的顯微影像就是 GVSAM 的訓練集。' }, { en: 'both ways, three times', zh: '雙向，三次' }],
              [{ en: '**Cornell**', zh: '**Cornell**' }, { en: 'Each model exists to turn one planned assay into a number — K_D from the ELISA, protease time from Michaelis-Menten, minimum alginate from a settling t-test.', zh: '每個模型的存在，都是為了把一個預定的試驗變成一個數字——由 ELISA 得 K_D、由 Michaelis-Menten 得蛋白酶時間、由沉降 t 檢定得最低海藻酸濃度。' }, { en: 'dry serves wet', zh: '乾式服務濕式' }],
              [{ en: '**LYON**', zh: '**LYON**' }, { en: 'The structural model closed the degradation route entirely; later, measured K_D replaced a placeholder in the filter model.', zh: '結構模型完全關掉了降解路線；之後實測 K_D 取代了濾床模型裡的暫定值。' }, { en: 'dry redirects the project', zh: '乾式改變專案方向' }],
              [{ en: '**NUS-Singapore**', zh: '**NUS-Singapore**' }, { en: 'Plate reads train the network, the network proposes the next culture — and the team threw out its own model\'s recommendation on methodological grounds before closing the loop once for real.', zh: '盤讀數據訓練網路、網路提出下一次培養條件——而團隊在真正閉環一次之前，先以方法學理由丟掉了自家模型的建議。' }, { en: 'closed loop, once', zh: '閉環，一次' }],
              [{ en: '**UAlberta**', zh: '**UAlberta**' }, { en: 'Five pipelines hand a decision down a chain; the ten bench mutants were picked to adjudicate between two dockers, and the transport model then ruled out part of their own assay.', zh: '五條流程把決策一棒接一棒往下交；十個進實驗台的突變體是為了裁決兩套對接程式而挑的，而傳輸模型接著否決了他們自家試驗的一部分。' }, { en: 'dry leads, wet adjudicates', zh: '乾式領路、濕式裁決' }],
              [{ en: '**UCNZ**', zh: '**UCNZ**' }, { en: 'AlphaFold 3 plus a PyMOL RMSD check used as a gate before paying for synthesis, and nothing more — stated as a deliberate choice, because the enzymes were taken off the shelf rather than designed.', zh: 'AlphaFold 3 加上 PyMOL RMSD 檢查，作為付錢合成之前的門檻，僅此而已——而且明說這是刻意的選擇，因為酵素是現成取用而非設計出來的。' }, { en: 'dry as a purchase gate', zh: '乾式作為採購門檻' }],
              [{ en: '**UOttawa**', zh: '**UOttawa**' }, { en: 'An agentic harness proposes mutations and is itself evaluated like software; the consortium model and the techno-economic analysis both argue against the same four named limitations.', zh: '代理式框架提出突變，而它本身像軟體一樣被評估；菌群模型與技術經濟分析都在反駁同樣那四個具名限制。' }, { en: 'dry as tooling', zh: '乾式作為工具層' }]
            ],
            min: 760,
            source: { en: 'Our reading of each team\'s own pages. "Both ways" means we could name a handoff in each direction.', zh: '依我們對各隊頁面的判讀。「雙向」代表我們能在兩個方向上各指名一次交接。' }
          })
      });

      /* ---------------- measurement ladder ---------------- */
      out += h.sec({
        id: 'o-meas',
        kick: { en: 'Measurement', zh: '量測' },
        h2: { en: 'Five rungs between "we got a reading" and "this is a result"', zh: '從「我們讀到一個數」到「這是一個結果」之間的五階' },
        lede: {
          en: 'Reading the ten together, the difference is rarely the instrument. It is how many of these rungs the team actually owns.',
          zh: '把十隊一起讀，差別很少在儀器，而在於這支隊伍真正掌握了幾階。'
        },
        body:
          h.wf('ladder', {
            tag: { en: 'ANALYSIS', zh: '分析' },
            title: { en: 'The measurement ladder, with who climbs which rung', zh: '量測階梯，以及誰爬到哪一階' },
            sub: { en: 'Examples are the clearest case we found for each rung, not an exhaustive list.', zh: '例子是我們為每一階找到最清楚的案例，並非完整清單。' },
            caption: { en: 'Our framework. The examples are each team\'s own documented practice.', zh: '這個框架是我們的；例子則是各隊自己記載的做法。' }
          }) +
          h.take({ en: 'The cheapest upgrade available to any team', zh: '任何團隊都買得起的最便宜升級' }, {
            en: 'Rung 3 costs nothing. Putting the control in the same plate, the same run and the same day as the sample — and writing down why — is free, needs no equipment, and is the single thing that separates a readable panel of 25 constructs from 25 anecdotes.',
            zh: '第三階不花錢。把對照放進與樣本同一塊盤、同一批次、同一天跑——並寫下理由——是免費的、不需要任何設備，而這一件事正是「25 個構建體的可讀矩陣」與「25 則軼事」之間的分界。'
          })
      });

      /* ---------------- failure ---------------- */
      out += h.sec({
        id: 'o-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'What a team does with a failed experiment', zh: '一支團隊如何處理失敗的實驗' },
        lede: {
          en: 'None of these ten wikis hides a failure. They differ in how far they take it, and the distance is worth more to the reader than the result.',
          zh: '這十個 wiki 沒有一個藏起失敗。他們的差別在於把失敗推進到多遠，而那段距離對讀者的價值超過結果本身。'
        },
        body:
          h.wf('failure', {
            tag: { en: 'ANALYSIS', zh: '分析' },
            title: { en: 'Four responses, in order of how much they give the next team', zh: '四種回應，依它們能給下一屆多少東西排序' },
            caption: { en: 'Our framework, with examples taken from the ten team pages.', zh: '框架是我們的，例子取自十個團隊頁。' }
          }) +
          h.cards([
            { chips: [{ t: { en: 'pivot', zh: '轉向' }, k: 'g' }],
              h: { en: 'LYON: the model closed the original plan', zh: 'LYON：模型關掉了原本的計畫' },
              p: { en: 'Degradation of TFA was the project. A structural model said the barrier is attack geometry on a fully substituted carbon, the phenol-red assay showed no activity, and the project became a capture project — with the abandoned Langevin-based filter model kept in the write-up because it is what told them the scale limit.', zh: '原本的專案是降解 TFA。結構模型指出障礙在全取代碳上的攻擊幾何，phenol red 試驗也測不到活性，於是專案改成捕捉——而那個被放棄的 Langevin 濾床模型仍留在文件裡，因為正是它告訴他們尺度極限在哪。' } },
            { chips: [{ t: { en: 'pivot', zh: '轉向' }, k: 'g' }],
              h: { en: 'UCNZ: the secretion tag never worked', zh: 'UCNZ：分泌標籤從未成功' },
              p: { en: 'YebF fusion was the reason a bioreactor could dose spent grain directly. It failed, their own HiSiaP control invalidated the extracellular lanes, and the second half of the project reorganised around that — reported in the same register as the successes.', zh: 'YebF 融合原本是生物反應器可以直接投料啤酒糟的理由。它失敗了，而他們自己的 HiSiaP 對照又否定了胞外泳道，於是專案後半段整個圍著這件事重組——並以與成功結果相同的口吻報告。' } },
            { chips: [{ t: { en: 'explained', zh: '解釋' }, k: 'b' }],
              h: { en: 'Princeton: the ratio went the wrong way', zh: 'Princeton：比值走錯方向' },
              p: { en: 'They expected the engineered phagemid to be enriched each round. It fell instead — 1.58, then 1.40×10⁻², 1.54×10⁻³, 6.13×10⁻⁴ — and the explanation (pIII sets infectivity at ~5 copies per virion, so a fully modified coat infects worse than a hybrid one) became a simulation with 52 automated tests.', zh: '他們預期工程化 phagemid 每一輪都會被富集。結果反而下降——1.58，接著 1.40×10⁻²、1.54×10⁻³、6.13×10⁻⁴——而解釋（pIII 決定感染力，每顆病毒粒子只有約 5 copies，所以全修飾外殼的感染力比混合外殼差）變成了一套附帶 52 項自動測試的模擬。' } },
            { chips: [{ t: { en: 'reported', zh: '報告' }, k: 'a' }],
              h: { en: 'UOttawa: a number that cannot be true', zh: 'UOttawa：一個不可能為真的數字' },
              p: { en: '4.68 µM of 2-HBP from 1 µM of DBT is stoichiometrically impossible. They printed it, named the calibration artefact (an intercept of 0.1374, signal between LOD and LOQ) and downgraded the claim to qualitative rather than deleting the experiment.', zh: '1 µM DBT 產生 4.68 µM 2-HBP 在化學計量上不可能。他們把它印出來，指名背後的校正假影（截距 0.1374、訊號落在 LOD 與 LOQ 之間），並把主張降級為定性，而不是把這個實驗刪掉。' } }
          ])
      });

      /* ---------------- archetypes ---------------- */
      out += h.sec({
        id: 'o-arch',
        kick: { en: 'Patterns', zh: '模式' },
        h2: { en: 'Four workflow archetypes, and what each one needs to work', zh: '四種工作流程原型，以及各自需要什麼才行得通' },
        lede: {
          en: 'Our classification. A team can sit in two archetypes; what matters is that each archetype has a precondition, and a team that adopts the shape without the precondition gets the shape only.',
          zh: '這是我們的分類。一支隊伍可以同時落在兩種原型裡；重點是每種原型都有一個前提條件，而只抄形狀卻沒有前提的隊伍，就只會得到形狀。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Archetype', zh: '原型' }, w: '20%' },
              { t: { en: 'Teams', zh: '隊伍' }, w: '20%' },
              { t: { en: 'What it needs before it works', zh: '它行得通的前提' } }
            ],
            rows: [
              [{ en: '**Model-first targeting** — the computation chooses what to build', zh: '**模型先行選靶**——由計算決定要做什麼' },
               { en: 'Stanford · UCAS-China · UAlberta', zh: 'Stanford · UCAS-China · UAlberta' },
               { en: 'A public dataset large enough to be worth mining, and a reason the mining answers your question rather than a neighbouring one. Stanford\'s whole target section exists because a RADAR sensor reads single cells, so tissue averages are the wrong statistic.', zh: '一個大到值得挖的公開資料集，以及一個理由說明這份挖掘回答的是你的問題、而不是旁邊那個問題。Stanford 整個標靶章節之所以存在，是因為 RADAR 感測器讀的是單一細胞，所以組織平均是錯的統計量。' }],
              [{ en: '**Design-and-gate** — generate many sequences, then filter hard', zh: '**生成後設門檻**——大量產生序列，再嚴格過篩' },
               { en: 'Heidelberg · LYON · Princeton · UOttawa', zh: 'Heidelberg · LYON · Princeton · UOttawa' },
               { en: 'Thresholds written before the designs are seen, controls to calibrate at least one of them, and the discipline to say which thresholds are calibrated and which are a priori. Without that, the funnel is decoration.', zh: '在看到設計之前先寫下門檻、用對照校正其中至少一個、並有紀律說明哪些門檻經過校正、哪些只是事先設定。沒有這些，漏斗只是裝飾。' }],
              [{ en: '**Assay-first** — own the measurement, then judge constructs', zh: '**量測先行**——先掌握量測，再評判構建體' },
               { en: 'LYON · Princeton · NUS-Singapore · UCNZ', zh: 'LYON · Princeton · NUS-Singapore · UCNZ' },
               { en: 'Willingness to spend weeks on an experiment that produces no biology. LYON spent a whole block comparing four plate-reading formats because the substrate is volatile; UCNZ ran five DBTL rounds on the DNS assay before judging a single construct.', zh: '願意花幾週做一個不產生任何生物學結果的實驗。LYON 用了一整個區塊比較四種讀盤方式，只因為基質易揮發；UCNZ 在評判任何構建體之前，先對 DNS 試驗跑了五輪 DBTL。' }],
              [{ en: '**Process-out** — design the thing that would have to be built', zh: '**從製程倒推**——設計真正要被建造出來的那個東西' },
               { en: 'UOttawa · LYON · Cornell · UCNZ', zh: 'UOttawa · LYON · Cornell · UCNZ' },
               { en: 'A unit operation specific enough to cost. UOttawa runs module costing and an openLCA model; LYON sizes a real column (1.50 m × 0.80 m, 10 m³/h) and gets a closed-form rule for its lifetime; Cornell had to build the electrospinner because the product does not exist without it.', zh: '一個具體到可以估價的單元操作。UOttawa 做模組成本估算與 openLCA 模型；LYON 把一座真的管柱算出尺寸（1.50 m×0.80 m、10 m³/h）並得到壽命的封閉解；Cornell 則必須自建靜電紡絲機，因為沒有它就沒有產品。' }]
            ],
            min: 720
          })
      });

      /* ---------------- funnels ---------------- */
      out += h.sec({
        id: 'o-funnel',
        kick: { en: 'Scale', zh: '尺度' },
        h2: { en: 'How many candidates it takes to justify one construct', zh: '要多少候選才撐得起一個構建體' },
        lede: {
          en: 'Each bar is the number of in-silico candidates a team reports entering its selection, on a logarithmic scale. The point is not that bigger is better: it is that every one of these numbers is published alongside how many survived.',
          zh: '每一條是該隊報告進入篩選的計算候選數，採對數尺度。重點不是越大越好，而是這些數字每一個都與「最後活下來幾個」一起被公開。'
        },
        body:
          h.fig({
            kind: 'bars',
            tag: { en: 'COMPARISON', zh: '比較' },
            title: { en: 'Candidates entering selection, per team', zh: '各隊進入篩選的候選數' },
            sub: { en: 'Logarithmic axis. Values are each team\'s own stated count.', zh: '對數軸。數值為各隊自己寫出的數字。' },
            data: [
              { label: { en: 'Stanford · RADAR sensor library rows screened', zh: 'Stanford · 被篩選的 RADAR 感測器資料列' }, v: 7000000 },
              { label: { en: 'UAlberta · FoldX mutant structures built', zh: 'UAlberta · 建出的 FoldX 突變結構' }, v: 117732 },
              { label: { en: 'UAlberta · catalogued glycan sequences filtered', zh: 'UAlberta · 被過濾的已編目醣鏈序列' }, v: 50000 },
              { label: { en: 'LYON · BoltzGen de novo binder candidates', zh: 'LYON · BoltzGen 全新設計結合蛋白候選' }, v: 10000 },
              { label: { en: 'Heidelberg · GvpC redesigns evaluated', zh: 'Heidelberg · 被評估的 GvpC 重設計' }, v: 200 },
              { label: { en: 'UOttawa · expression-library members designed', zh: 'UOttawa · 設計的表達庫 member 數' }, v: 24 }
            ],
            opts: { log: true },
            caption: {
              en: 'What survived: Stanford built a 5×5 panel of 25 sensors; UAlberta took 10 mutants to the bench; LYON kept 5 and built 3 binders in two orientations each; Heidelberg passed 135 on i_pAE and 121 on the full gate; UOttawa assembled 8 of 24 and detected activity from 1.',
              zh: '活下來的部分：Stanford 做出 5×5 共 25 個感測器的矩陣；UAlberta 把 10 個突變體帶進實驗台；LYON 留下 5 個、實際做出 3 個結合蛋白各兩種方向；Heidelberg 有 135 個通過 i_pAE、121 個通過完整門檻；UOttawa 把 24 個中的 8 個組裝出來，並從 1 個測到活性。'
            },
            source: { en: 'Each team\'s own Model, Software or Results page.', zh: '各隊自己的 Model、Software 或 Results 頁。' }
          }) +
          h.warn({
            en: 'Read these as *reported* counts, not as comparable units of effort. A row in a published sensor table is not the same kind of object as a FoldX mutant structure or a diffusion-model backbone, and only Heidelberg, LYON, UAlberta and UOttawa state both the input and the surviving count in the same place.',
            zh: '請把這些讀成*被報告的*數量，而不是可以互相比較的工作量單位。一張已發表感測器表裡的一列，和一個 FoldX 突變結構或一條擴散模型骨架，並不是同一種東西；而且只有 Heidelberg、LYON、UAlberta 與 UOttawa 把輸入數與存活數寫在同一個地方。'
          })
      });

      /* ---------------- method ---------------- */
      out += h.sec({
        id: 'o-method',
        kick: { en: 'Method', zh: '方法' },
        h2: { en: 'How this was put together, and what it cannot tell you', zh: '這份東西是怎麼做出來的，以及它不能告訴你什麼' },
        body:
          h.ul([
            { en: '**Source.** The Top 10 Undergraduate list was read from the official results page on 21 November 2026. Each team\'s workflow was then read from its own 2026 wiki — the Description, Design, Engineering, Experiments, Results, Measurement, Model, Software and Hardware pages where they exist. Every team page on this site links to the wiki it was read from.', zh: '**來源。** 大學部前十名名單於 2026 年 11 月 21 日讀自官方成績頁。各隊的工作流程則讀自其 2026 年 wiki 本身——存在的話包括 Description、Design、Engineering、Experiments、Results、Measurement、Model、Software 與 Hardware 各頁。本站每個團隊頁都連回它所讀的 wiki。' },
            { en: '**Numbers.** Every figure is the team\'s own, quoted as they state it. Where a wiki does not state something we needed — an instrument model, a tool version, a replicate count — the team page says so instead of filling the gap.', zh: '**數字。** 每個數值都是該隊自己的，照他們的寫法引用。若某個我們需要的資訊 wiki 上沒寫——儀器型號、工具版本、重複次數——團隊頁會直接說「沒寫」，而不是把空缺填起來。' },
            { en: '**What is ours.** The swimlane diagrams, the measurement ladder, the failure taxonomy, the four archetypes, and every "what we would copy" list are our analysis, and they are labelled as such on the page where they appear.', zh: '**哪些是我們的。** 泳道圖、量測階梯、失敗分類、四種原型，以及每一份「我們會抄什麼」清單，都是我們的分析，並在出現的頁面上標示清楚。' },
            { en: '**What this cannot tell you.** Nothing here reproduces a result, checks a gel, or verifies that a protocol was followed. A wiki is a claim about what happened in a lab, written by the people who were there and want to win. We read the claims carefully; we did not audit them.', zh: '**它不能告訴你什麼。** 這裡沒有任何內容重現了一個結果、檢查了一張膠片，或驗證了某個流程真的被遵守。wiki 是一份關於實驗室裡發生了什麼的主張，由在場且想獲勝的人所寫。我們仔細讀了這些主張；我們沒有稽核它們。' },
            { en: '**Also unknowable from a wiki:** how much of the work was done by one person, what the budget was, and which core facility ran the instrument. Those three things explain a lot of what separates these ten from everyone else, and none of them is on the page.', zh: '**從 wiki 上也無法得知：** 有多少工作其實是一個人做完的、預算多少、以及哪個核心設施操作了儀器。這三件事相當程度解釋了這十隊與其他人的差距，而它們都不在頁面上。' }
          ])
      });

      /* ---------------- GEMS ---------------- */
      out += h.sec({
        id: 'o-gems',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'The five practices we would take into next season', zh: '我們會帶進下一季的五個做法' },
        lede: { en: 'A judgement, not a measurement. Chosen because they cost time and discipline rather than money or equipment.', zh: '這是判斷、不是量測。之所以挑這五個，是因為它們花的是時間與紀律，而不是錢或設備。' },
        body:
          h.phases([
            { h: { en: 'Define the metrics once, before the data', zh: '在數據之前，把指標定義一次' },
              p: { en: 'Stanford\'s eight definitions and two explicit bars for "this counts" are the single most copyable artefact in the whole Top 10, and they are free.', zh: 'Stanford 的八個定義與兩條「這才算成立」的明確門檻，是整個前十名裡最值得照抄的單一產物，而且完全免費。' },
              done: { en: 'A results page where no quantity has to be explained twice.', zh: '一個沒有任何量需要解釋兩次的成果頁。' } },
            { h: { en: 'Validate the assay before it judges anything', zh: '在試驗評判任何事之前先驗證它' },
              p: { en: 'LYON\'s block 6 and UCNZ\'s five DNS iterations both spend an experiment on the instrument rather than the biology. Both then get to say their later comparisons mean something.', zh: 'LYON 的第 6 區塊與 UCNZ 對 DNS 試驗的五次迭代，都把一個實驗花在儀器而不是生物學上。而兩者之後都能說：我們後面的比較是有意義的。' },
              done: { en: 'A calibration curve with an R² in the write-up, and a named reason for every assay choice.', zh: '文件裡有一條附 R² 的校正曲線，而每個試驗設計選擇都有一個具名理由。' } },
            { h: { en: 'Label every model parameter with its status', zh: '為每個模型參數標上狀態' },
              p: { en: 'LYON prints *design choice / computed / placeholder* beside each value, and prints the 185-fold gap between its placeholder capacity and the measured bound. That single column is what makes a student model readable by an adult.', zh: 'LYON 在每個數值旁印上*設計選擇／計算／暫定值*，並印出暫定容量與實測上界之間 185 倍的差距。就是那一欄，讓一個學生模型能被成年人讀懂。' },
              done: { en: 'No reader has to guess which conclusions are load-bearing.', zh: '讀者不必猜哪些結論是承重的。' } },
            { h: { en: 'Point the model at your own evidence first', zh: '先把模型對準自己的證據' },
              p: { en: 'UAlberta used a transport model to disqualify its own diffusion assay; UCNZ ran a borrowed control that invalidated its own secretion lanes. Both are stronger than any positive result on the same page.', zh: 'UAlberta 用傳輸模型否決了自家的擴散試驗；UCNZ 跑了一個借來的對照，結果否定了自家的分泌泳道。這兩者都比同一頁上任何正面結果更有力。' },
              done: { en: 'At least one experiment retired by your own analysis, in writing.', zh: '至少有一個實驗被你自己的分析退役，並且寫下來。' } },
            { h: { en: 'Write the failure down at the level of the mistake', zh: '把失敗寫到犯錯的那個層級' },
              p: { en: 'Not "transformation was difficult" but "the wash buffer got 40 mL of ethanol instead of 20 because of a mislabelled bottle, the A260/230 came back at 0.6, and the 10 s heat shock in the supplier protocol never worked for us — 45 s did."', zh: '不要寫「轉形有困難」，而要寫「洗滌緩衝液因為瓶身標錯而加了 40 mL 乙醇而非 20 mL，A260/230 量到 0.6，而供應商流程裡的 10 秒熱衝擊在我們手上從來沒成功——45 秒才行」。' },
              done: { en: 'A section the next team reads before they repeat it.', zh: '一個下一屆在重蹈之前會先讀的章節。' } }
          ]) +
          h.take({ en: 'The one-line version', zh: '一句話版本' }, {
            en: 'What the 2026 Top 10 have in common is not better equipment or cleverer biology. It is that each of them can tell you, in writing, why a number on their page is allowed to mean what they say it means.',
            zh: '2026 年前十名的共同點，不是更好的設備或更聰明的生物學，而是每一隊都能用文字告訴你：為什麼他們頁面上的某個數字，被允許代表他們說它代表的那個意思。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'next page', zh: '下一頁' }, k: 'b' }],
              h: { en: 'The dry-lab toolbox →', zh: '乾式工具箱 →' },
              p: { en: 'Twenty-three capabilities against these ten teams, sorted by the question each tool answers, with what it costs to reach and the order we would install them in. [Open it](#toolbox).', zh: '二十三項能力對這十支隊伍，按「每個工具回答什麼問題」排序，附上取得成本以及我們會採用的安裝順序。[開啟](#toolbox)。' } },
            { chips: [{ t: { en: 'next page', zh: '下一頁' }, k: 'g' }],
              h: { en: 'The bench gate sheet →', zh: '實驗關卡表 →' },
              p: { en: 'What crosses from an Undergraduate lab to a High School one, six cheap questions to ask of an idea, and a six-column sheet filled in for every planned result before the experiment runs. [Open it](#next).', zh: '從大學部實驗室到高中實驗室什麼過得來、問一個點子的六個便宜問題，以及每個預定結果在實驗開跑前就填好的六欄表格。[開啟](#next)。' } }
          ], 'g2')
      });

      return out;
    }
  };
})(window);
