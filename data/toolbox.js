/* ============================================================
   toolbox.js — every computational tool we can point to a use of
   on the ten wikis, sorted by the job it does rather than by name.

   Counting rule: a cell is filled only when the team's own wiki
   shows the tool being used for something, with an output we can
   see. A sponsor logo, a tool list on an Attributions page, or a
   passing mention does not count. A blank cell therefore means
   "we could not point to a use", never "they did not use it".
   ============================================================ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  /* teams in PD.teams order:
     stanford, ucas, princeton, heidelberg, cornell, lyon, nus, ualberta, ucnz, uottawa */
  var N = null;
  var ROWS = [
    { r: { en: 'Structure prediction', zh: '結構預測' },
      v: [N, 1, 1, 1, N, 1, N, 1, 1, N],
      tools: 'AlphaFold2 · AlphaFold 3 · Boltz-2 · Protenix',
      job: 'design', access: 'web',
      q: { en: 'What shape is this sequence likely to take?', zh: '這段序列大概會折成什麼形狀？' } },
    { r: { en: '*De novo* binder design', zh: '*De novo* 結合蛋白設計' },
      v: [N, N, 1, 1, N, 1, N, N, N, N],
      tools: 'RFdiffusion3 · BindCraft · BoltzGen',
      job: 'design', access: 'gpu',
      q: { en: 'Give me a protein that sticks to this surface.', zh: '生一個會黏在這個表面上的蛋白給我。' } },
    { r: { en: 'Sequence design on a backbone', zh: '在骨架上設計序列' },
      v: [N, N, 1, 1, N, N, N, N, N, 1],
      tools: 'ProteinMPNN · LigandMPNN',
      job: 'design', access: 'web',
      q: { en: 'Which amino acids make this backbone foldable?', zh: '哪些胺基酸能讓這個骨架折得起來？' } },
    { r: { en: 'Stability and ΔΔG scanning', zh: '穩定性與 ΔΔG 掃描' },
      v: [N, N, N, 1, N, N, N, 1, N, 1],
      tools: 'FoldX · ThermoMPNN · PyRosetta',
      job: 'design', access: 'install',
      q: { en: 'Which single mutations are worth ordering?', zh: '哪些單點突變值得下單？' } },
    { r: { en: 'Docking and interface scoring', zh: '對接與介面評分' },
      v: [N, N, 1, 1, N, N, N, 1, N, 1],
      tools: 'HADDOCK · AutoDock Vina · PeSTo',
      job: 'design', access: 'web',
      q: { en: 'Where on the target does a ligand or partner sit?', zh: '配體或夥伴會坐在標靶的哪裡？' } },
    { r: { en: 'Molecular dynamics', zh: '分子動力學' },
      v: [N, 1, N, 1, N, N, N, 1, N, 1],
      tools: 'GROMACS · CHARMM36 · Martini 3 · umbrella sampling',
      job: 'design', access: 'hpc',
      q: { en: 'Does the structure hold, and how hard is it to pull apart?', zh: '這個結構撐得住嗎？要多大力才拉得開？' } },
    { r: { en: 'RNA secondary structure', zh: 'RNA 二級結構' },
      v: [1, N, N, N, N, N, N, N, N, N],
      tools: 'ViennaRNA (RNAfold, RNAcofold)',
      job: 'design', access: 'web',
      q: { en: 'Will this sensor fold, and will it hybridise?', zh: '這個感測器折得起來嗎？會不會雜交？' } },
    { r: { en: 'ODE / kinetic models', zh: 'ODE 與動力學模型' },
      v: [1, 1, 1, N, 1, 1, 1, 1, N, 1],
      tools: 'Hand-written ODEs · Hill · Michaelis–Menten · Gillespie',
      job: 'explain', access: 'free',
      q: { en: 'How does this quantity move over time, and why?', zh: '這個量隨時間怎麼走、為什麼？' } },
    { r: { en: 'Fitting a model to **their own** data', zh: '把模型擬合到**自己的**數據' },
      v: [1, N, 1, N, 1, 1, 1, 1, N, N],
      tools: 'Least squares · simulated annealing · Hill fits with published R²',
      job: 'explain', access: 'free',
      q: { en: 'Does the model reproduce the plate we actually ran?', zh: '模型重現得了我們真的跑過的那盤嗎？' } },
    { r: { en: 'Network and pathway models', zh: '網絡與路徑模型' },
      v: [N, N, N, N, 1, N, N, N, N, N],
      tools: 'Netflux · STRING',
      job: 'explain', access: 'web',
      q: { en: 'If I push this node, what else moves?', zh: '我推這個節點，還有什麼會動？' } },
    { r: { en: 'Transcriptomic atlases', zh: '轉錄體圖譜' },
      v: [1, 1, N, N, N, N, N, 1, N, N],
      tools: 'scRNA-seq cohorts · Human Lung Cell Atlas · GTEx',
      job: 'choose', access: 'web',
      q: { en: 'Which gene is actually specific to the cell I care about?', zh: '哪個基因真的只在我在乎的那種細胞裡？' } },
    { r: { en: 'Protein and localisation databases', zh: '蛋白與定位資料庫' },
      v: [N, 1, N, N, N, N, N, N, N, 1],
      tools: 'UniProt · Human Surfaceome',
      job: 'choose', access: 'web',
      q: { en: 'Is the target on the outside of the cell?', zh: '這個標靶在細胞外面嗎？' } },
    { r: { en: 'Machine learning on own data', zh: '對自有數據做機器學習' },
      v: [1, N, N, N, N, N, 1, N, N, N],
      tools: 'scikit-learn · PyTorch MLP · U-Net · UMAP',
      job: 'explain', access: 'free',
      q: { en: 'Can a model read this signal better than a threshold can?', zh: '模型讀這個訊號會比一條閾值準嗎？' } },
    { r: { en: 'Agentic / LLM harness', zh: '代理式／大模型框架' },
      v: [N, N, N, N, N, N, N, N, N, 1],
      tools: 'Cofactor (their own harness, proposing enzyme mutations)',
      job: 'design', access: 'api',
      q: { en: 'Can a model propose the next mutation, with a reason?', zh: '模型能提出下一個突變、而且講得出理由嗎？' } },
    { r: { en: 'CFD and finite element', zh: '計算流體與有限元' },
      v: [1, 1, N, N, 1, N, N, 1, N, N],
      tools: 'COMSOL · ANSYS Fluent · OpenFOAM · MPPD · FEA',
      job: 'size', access: 'licence',
      q: { en: 'Will the device deliver what the biology needs, where it needs it?', zh: '裝置送得到生物學需要的量、而且送到該去的地方嗎？' } },
    { r: { en: 'Transport / packed-bed PDE', zh: '傳輸與填充床 PDE' },
      v: [N, N, N, N, N, 1, N, 1, N, N],
      tools: 'One-dimensional column model · diffusion through a hydrogel',
      job: 'size', access: 'free',
      q: { en: 'How long until it breaks through, and how sharp is the front?', zh: '多久會穿透？前緣有多銳利？' } },
    { r: { en: 'PK / PD', zh: '藥動／藥效' },
      v: [N, 1, N, N, N, N, N, N, N, N],
      tools: 'Compartment model from published human parameters',
      job: 'size', access: 'free',
      q: { en: 'What dose reaches the tissue, and for how long?', zh: '有多少劑量到得了組織、能待多久？' } },
    { r: { en: 'Techno-economics and LCA', zh: '技術經濟與生命週期' },
      v: [N, N, N, N, N, N, N, N, 1, 1],
      tools: 'TEA spreadsheets · LCA inventory',
      job: 'size', access: 'free',
      q: { en: 'What would a tonne of this cost, and what does it emit?', zh: '做一噸要多少錢、排多少碳？' } },
    { r: { en: 'CAD and embedded hardware', zh: 'CAD 與嵌入式硬體' },
      v: [1, 1, 1, 1, 1, 1, 1, 1, 1, N],
      tools: 'Parametric CAD · 3D printing · ESP32 / Arduino firmware',
      job: 'size', access: 'free',
      q: { en: 'Can we build the thing that holds the biology?', zh: '裝得住這套生物學的東西，我們做得出來嗎？' } },
    { r: { en: 'Cloning design software', zh: '選殖設計軟體' },
      v: [N, N, 1, N, 1, N, N, N, 1, N],
      tools: 'SnapGene · Benchling',
      job: 'build', access: 'free',
      q: { en: 'Does the construct I am about to order actually assemble?', zh: '我正要下單的構建體真的接得起來嗎？' } },
    { r: { en: 'Sequence verification as a gate', zh: '把定序驗證當成關卡' },
      v: [N, N, 1, N, N, N, N, N, 1, N],
      tools: 'Plasmidsaurus whole-plasmid sequencing',
      job: 'build', access: 'paid',
      q: { en: 'Is the plasmid exactly what the map says?', zh: '這個質體跟圖譜完全一樣嗎？' } },
    { r: { en: 'Image analysis', zh: '影像分析' },
      v: [N, N, 1, N, N, N, N, 1, N, N],
      tools: 'ImageJ / Fiji',
      job: 'explain', access: 'free',
      q: { en: 'Turn a photograph into a number with an error bar.', zh: '把一張照片變成一個帶誤差棒的數字。' } },
    { r: { en: 'A named software deliverable', zh: '一個有名字的軟體交付物' },
      v: [1, 1, 1, 1, N, N, 1, 1, N, 1],
      tools: 'RADAR-Scout · CellFlow · SymPlify · GVSAM · SABLe · GLARE→HOPE · Cofactor',
      job: 'ship', access: 'free',
      q: { en: 'Is any of this usable by a team that is not us?', zh: '這些東西，不是我們的隊伍用得上嗎？' } }
  ];

  PD.pages.toolbox = {
    label: { en: 'Dry-lab toolbox', zh: '乾式工具箱' },
    title: { en: 'The dry-lab toolbox', zh: '乾式工具箱' },
    render: function (h) {
      var teams = PD.teams || [];
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'TOOL EXTRACTION · THE UNDERGRADUATE TEN', zh: '工具萃取 · 大學部十支隊伍' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Twenty-three jobs a dry lab can do, and the ==tool each team reached for==.',
          zh: '乾式實驗能做的二十三種工作，以及==每支隊伍伸手拿了哪個工具==。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Sorted by **the question the tool answers**, not by the tool\'s name, because the name changes every year and the question does not. Every filled cell is a use we can point to on the team\'s own wiki. The last two sections are the part we actually want: what a tool costs to get started with, and the order we would install them in.',
          zh: '這裡按**工具回答的問題**排序，而不是按工具名稱，因為名稱每年都在換、問題不會。每一個有顏色的格子，都是我們能在該隊 wiki 上指出來的實際使用。最後兩節才是我們真正要的東西：一個工具的入門成本，以及我們會用什麼順序把它們裝起來。'
        }) + '</p>' +
        '<div class="herometa">' + h.chips([
          { t: { en: '23 capability rows', zh: '23 條能力' }, k: 'b' },
          { t: { en: '10 teams', zh: '10 支隊伍' }, k: 'v' },
          { t: { en: 'Five jobs', zh: '五種工作' }, k: 'g' },
          { t: { en: 'Access and cost', zh: '取得與成本' }, k: 'a' },
          { t: { en: 'Install order for 2027', zh: '2027 安裝順序' }, k: 't' }
        ]) + '</div>' +
        h.stats([
          { v: '23', l: { en: 'Capability rows extracted', zh: '萃取出的能力條目' } },
          { v: '9 / 10', l: { en: 'Teams with at least one named software deliverable or model', zh: '至少有一個具名軟體或模型的隊伍' } },
          { v: '18 / 23', l: { en: 'Rows that cost nothing but the time to learn them', zh: '除了學習時間之外不花錢的條目' } },
          { v: '1', l: { en: 'Rows that need a paid licence', zh: '需要付費授權的條目' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'tb-what', t: { en: 'How we counted', zh: '怎麼數的' } },
        { id: 'tb-matrix', t: { en: 'The matrix', zh: '工具矩陣' } },
        { id: 'tb-jobs', t: { en: 'Five jobs', zh: '五種工作' } },
        { id: 'tb-table', t: { en: 'The table', zh: '工具表' } },
        { id: 'tb-cost', t: { en: 'What it costs', zh: '成本' } },
        { id: 'tb-min', t: { en: 'What we would install', zh: '我們會裝什麼' } }
      ]);

      /* ---------------- how we counted ---------------- */
      out += h.sec({
        id: 'tb-what',
        kick: { en: 'Method', zh: '方法' },
        h2: { en: 'A tool counts when we can see what came out of it', zh: '看得到它產出什麼，才算用過' },
        lede: {
          en: 'The useful question is not "which software did they have", it is "which software changed a decision".',
          zh: '有用的問題不是「他們有哪些軟體」，而是「哪個軟體改變了一個決定」。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'counts', zh: '算' }, k: 'g' }],
              h: { en: 'A figure, a number, or a named output', zh: '一張圖、一個數字，或一個有名字的輸出' },
              p: { en: 'The wiki shows a plot, a predicted structure, a fitted parameter or a ranked list, and says which tool produced it.', zh: 'wiki 上有一張圖、一個預測結構、一個擬合參數或一份排序清單，而且說明它是哪個工具產出的。' } },
            { chips: [{ t: { en: 'does not count', zh: '不算' }, k: 'r' }],
              h: { en: 'A logo, a list, or "we also used…"', zh: '一個標誌、一份清單，或「我們也用了……」' },
              p: { en: 'Attributions pages and sponsor blocks name software that never appears again. We left all of it out, which is why some cells that a team would fill in are blank here.', zh: 'Attributions 頁和贊助區塊會列出後面再也沒出現過的軟體。這些我們全部不算，所以有些該隊自己會填的格子，在這裡是空的。' } },
            { chips: [{ t: { en: 'scope', zh: '範圍' }, k: 'b' }],
              h: { en: 'The Undergraduate ten only, for now', zh: '目前只涵蓋大學部那十隊' },
              p: { en: 'This extraction covers the ten teams in this section. The Overgraduate and High School sections have twenty more wikis and the same matrix has not yet been built for them — when it is, the interesting comparison will be between the rows, not within them.', zh: '這份萃取只涵蓋本組的十支隊伍。研究生部與高中部還有另外二十個 wiki，同樣的矩陣尚未為它們建立——等建好之後，有趣的比較會發生在列與列之間，而不是列的內部。' } },
            { chips: [{ t: { en: 'the honest caveat', zh: '誠實的但書' }, k: 'a' }],
              h: { en: 'A blank cell is about us, not about them', zh: '空格說的是我們，不是他們' },
              p: { en: 'It means we could not point to a use on a public page, read in one pass, in November 2026. Wikis are long and ours is a reading, not an audit.', zh: '它代表我們在 2026 年 11 月、讀過一輪之後，無法在公開頁面上指出它的使用。wiki 很長，而我們做的是一次閱讀，不是稽核。' } }
          ], 'g3')
      });

      /* ---------------- the matrix ---------------- */
      out += h.sec({
        id: 'tb-matrix',
        kick: { en: 'The extraction', zh: '萃取結果' },
        h2: { en: 'Twenty-three capabilities against ten teams', zh: '二十三項能力對十支隊伍' },
        lede: {
          en: 'Read it by row, not by column. A row with one filled cell is a capability exactly one team thought was worth the trouble; a row with nine is table stakes.',
          zh: '請按列（橫的）讀，不要按欄讀。只有一格有顏色的那一列，代表只有一支隊伍認為這件事值得費心；有九格的那一列，就是入場門檻。'
        },
        body:
          h.fig({
            kind: 'matrix',
            tag: { en: 'TOOL EXTRACTION', zh: '工具萃取' },
            title: { en: 'What each dry lab could actually do', zh: '每個乾式實驗實際做得到什麼' },
            sub: { en: 'Rows are capabilities, columns are teams. A filled cell is a use we can point to; blank means we could not find one.', zh: '列為能力、欄為隊伍。有顏色代表我們指得出具體使用；空白代表我們找不到。' },
            data: {
              rows: ROWS.map(function (x) { return x.r; }),
              cols: teams.map(function (t) { return t.name; }),
              v: ROWS.map(function (x) { return x.v; })
            },
            opts: { cell: 26, vmax: 1 },
            caption: {
              en: '**The three findings in this grid.** First, the crowded rows are ODE models (8 of 10) and CAD/hardware (9 of 10) — not protein design. Second, structure prediction is now as common as cloning software, and nobody treats it as a contribution on its own. Third, the rows with a single filled cell — RNA folding, network models, agentic design, PK/PD, machine learning on own data — are where a team made itself different from the other nine.',
              zh: '**這張格子裡的三個發現。** 第一，最擁擠的兩列是 ODE 模型（10 之 8）與 CAD／硬體（10 之 9）——不是蛋白質設計。第二，結構預測現在和選殖軟體一樣普通，沒有人再把它本身當成貢獻。第三，只有一格的那幾列——RNA 折疊、網絡模型、代理式設計、PK/PD、對自有數據做機器學習——正是一支隊伍把自己和其他九隊區分開來的地方。'
            },
            source: { en: 'Compiled by us from the ten 2026 wikis, read 21–22 November 2026.', zh: '由我們從十個 2026 wiki 整理，閱讀時間 2026 年 11 月 21–22 日。' }
          })
      });

      /* ---------------- five jobs ---------------- */
      out += h.sec({
        id: 'tb-jobs',
        kick: { en: 'Classification', zh: '分類' },
        h2: { en: 'Every one of those rows is doing one of five jobs', zh: '那些能力全都在做五件事之一' },
        lede: {
          en: 'This is ours, and it is the part of the page that survives the tools changing. Pick the job first; the tool is a detail.',
          zh: '這個分類是我們的，也是這一頁在工具換代之後還留得下來的部分。先選工作，工具是細節。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'job 1 · choose', zh: '工作一 · 選擇' }, k: 'b' }],
              h: { en: 'Decide what the wet lab should build', zh: '決定濕式實驗該做什麼' },
              p: [
                { en: 'Atlases, expression databases, localisation databases, literature screens. Output: a shortlist with a stated disqualifying rule for each stage.', zh: '圖譜、表現量資料庫、定位資料庫、文獻篩選。輸出：一份候選名單，而且每一關都有明說的淘汰規則。' },
                { en: '**Who:** Stanford (26 scRNA-seq cohorts), UCAS (three databases → UPK1B), UAlberta (GLARE signature).', zh: '**誰在做：**Stanford（26 個單細胞資料集）、UCAS（三個資料庫→UPK1B）、UAlberta（GLARE 特徵）。' }
              ],
              foot: { en: 'Cheapest job on the list, and the one with the highest leverage: it is the only job that changes what gets ordered.', zh: '名單上最便宜的工作，槓桿也最大：它是唯一會改變「下單內容」的工作。' } },
            { chips: [{ t: { en: 'job 2 · design', zh: '工作二 · 設計' }, k: 'v' }],
              h: { en: 'Produce a sequence that does not exist yet', zh: '生出一段還不存在的序列' },
              p: [
                { en: 'Structure prediction, *de novo* diffusion, sequence design, ΔΔG scanning, docking, MD. Output: a ranked set of candidates and a cut-off.', zh: '結構預測、de novo 擴散生成、序列設計、ΔΔG 掃描、對接、分子動力學。輸出：一組排序過的候選與一條截斷線。' },
                { en: '**Who:** Heidelberg, Princeton, LYON, UAlberta, UOttawa.', zh: '**誰在做：**Heidelberg、Princeton、LYON、UAlberta、UOttawa。' }
              ],
              foot: { en: 'Most fashionable job, and the one where a team is most likely to produce 100,000 numbers and no decision.', zh: '最時髦的工作，也最容易產出十萬個數字卻沒有任何一個決定。' } },
            { chips: [{ t: { en: 'job 3 · explain', zh: '工作三 · 解釋' }, k: 'g' }],
              h: { en: 'Account for data that already exists', zh: '交代已經拿到的數據' },
              p: [
                { en: 'ODEs, Hill fits, network models, image analysis, machine learning on own measurements. Output: a fit, with a residual you are willing to publish.', zh: 'ODE、Hill 擬合、網絡模型、影像分析、對自有量測做機器學習。輸出：一次擬合，以及一個你願意公開的殘差。' },
                { en: '**Who:** eight of the ten, and the quality gap between them is enormous.', zh: '**誰在做：**十隊裡有八隊，而彼此的品質差距極大。' }
              ],
              foot: { en: 'The job that separates a model from a drawing: a model that was fitted can be wrong.', zh: '這是把「模型」和「插圖」分開的工作：擬合過的模型，才有可能是錯的。' } },
            { chips: [{ t: { en: 'job 4 · size', zh: '工作四 · 定規格' }, k: 'a' }],
              h: { en: 'Find out whether the real thing can work', zh: '弄清楚真的做出來行不行' },
              p: [
                { en: 'CFD, FEA, transport PDEs, PK/PD, techno-economics, LCA, CAD. Output: a dimension, a flow rate, a dose, a cost per tonne.', zh: '計算流體、有限元、傳輸 PDE、藥動藥效、技術經濟、生命週期、CAD。輸出：一個尺寸、一個流量、一個劑量、一噸多少錢。' },
                { en: '**Who:** Stanford (needle), UCAS (aerosol), LYON (column), UAlberta (lens), Cornell (fibre), UOttawa (P&ID and TEA).', zh: '**誰在做：**Stanford（微針）、UCAS（霧化）、LYON（管柱）、UAlberta（鏡片）、Cornell（纖維）、UOttawa（P&ID 與技術經濟）。' }
              ],
              foot: { en: 'The job most likely to kill a project early, which is exactly why it should be done early.', zh: '最可能早早把一個專案殺掉的工作——這正是它應該早做的理由。' } },
            { chips: [{ t: { en: 'job 5 · ship', zh: '工作五 · 交付' }, k: 't' }],
              h: { en: 'Leave behind something another team can run', zh: '留下別隊跑得動的東西' },
              p: [
                { en: 'A named tool, a documented pipeline, a dataset, a protocol with its gates. Output: a repository and an interface.', zh: '一個有名字的工具、一條寫清楚的流程、一份資料集、一套帶關卡的協定。輸出：一個 repo 和一個介面。' },
                { en: '**Who:** seven of the ten shipped a named piece of software; Princeton made it the project.', zh: '**誰在做：**十隊中有七隊交出了具名軟體；Princeton 直接把它變成整個專案。' }
              ],
              foot: { en: 'The only job whose value does not expire when the jamboree ends.', zh: '唯一一個在 Jamboree 結束後價值不會歸零的工作。' } }
          ], 'g2') +
          h.take({ en: 'The ranking we would argue for', zh: '我們主張的優先順序' },
            { en: 'For a team with one year and no cluster, the order of return is **choose → size → explain → ship → design**. Job 2 is last on that list and first on most teams\' instinct. Every hour spent designing a binder before anyone has checked whether the device can deliver it is an hour spent on the wrong end of the project.',
              zh: '對一支只有一年、而且沒有運算叢集的隊伍來說，投資報酬率的順序是**選擇→定規格→解釋→交付→設計**。工作二在這個順序裡排最後，卻是多數隊伍直覺上的第一。在還沒有人確認裝置送不送得到之前，花在設計結合蛋白上的每一個小時，都花在專案錯誤的那一端。' })
      });

      /* ---------------- the table ---------------- */
      out += h.sec({
        id: 'tb-table',
        kick: { en: 'Reference', zh: '對照' },
        h2: { en: 'The toolbox, row by row', zh: '工具箱逐條列出' },
        lede: {
          en: 'The "reach" column is ours: **web** needs only a browser, **free** needs an install and no licence, **licence** needs money or an institution, **GPU** needs a graphics card worth more than the rest of the lab, **HPC** needs a cluster account.',
          zh: '「取得方式」這一欄是我們標的：**web** 只要瀏覽器，**free** 要安裝但不用授權，**licence** 要錢或要機構，**GPU** 需要一張比實驗室其他東西都貴的顯示卡，**HPC** 需要叢集帳號。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Capability', zh: '能力' }, w: '17%' },
              { t: { en: 'The question it answers', zh: '它回答的問題' }, w: '24%' },
              { t: { en: 'Tools seen on the ten wikis', zh: '十個 wiki 上看到的工具' }, w: '26%' },
              { t: { en: 'Teams', zh: '隊數' }, w: '7%', num: true },
              { t: { en: 'Reach', zh: '取得' }, w: '9%' },
              { t: { en: 'Job', zh: '工作' }, w: '10%' }
            ],
            rows: ROWS.map(function (x) {
              var n = x.v.filter(function (c) { return c; }).length;
              var label = { web: 'web', free: 'free', install: 'free', licence: 'licence', gpu: 'GPU', hpc: 'HPC', api: 'API $', paid: 'paid' }[x.access] || x.access;
              return ['**' + h.T(x.r) + '**', x.q, '<span class="mono">' + x.tools + '</span>', String(n), '`' + label + '`', x.job];
            }),
            min: 900,
            source: { en: 'Tool names are the teams\' own; the question, the reach label and the job classification are ours.', zh: '工具名稱是各隊自己的；問題描述、取得方式標籤與工作分類是我們的。' }
          }) +
          h.warn({
            en: '**The row that should worry a school team is "molecular dynamics".** Four teams ran it, and in every case the useful output was a single number — a rupture force, a free-energy difference, an RMSD — that a reader could have been told in one sentence. MD is the easiest place on this list to spend three months and produce a movie.',
            zh: '**高中隊伍最該提防的一列是「分子動力學」。** 四支隊伍跑了它，而每一次真正有用的輸出都只是一個數字——一個斷裂力、一個自由能差、一個 RMSD——用一句話就能講完。在這份名單上，MD 是最容易花掉三個月、最後只產出一段影片的地方。'
          })
      });

      /* ---------------- cost ---------------- */
      out += h.sec({
        id: 'tb-cost',
        kick: { en: 'Cost', zh: '成本' },
        h2: { en: 'What a tool actually costs is the week you spend learning it', zh: '一個工具真正的成本，是你花在學它的那一週' },
        lede: {
          en: 'Thirteen of the twenty-three rows need nothing but a browser. The constraint in a student dry lab has never been money; it is the number of distinct things one person can hold at once.',
          zh: '二十三列裡有十三列只需要一個瀏覽器。學生乾式實驗的限制從來不是錢，而是一個人同時抓得住幾樣不同的東西。'
        },
        body:
          h.fig({
            kind: 'cols',
            tag: { en: 'ACCESS', zh: '取得方式' },
            title: { en: 'How the twenty-three capabilities are reached', zh: '二十三項能力分別怎麼取得' },
            sub: { en: 'Counted by capability row, not by tool. "Web" means a public server does the compute.', zh: '按能力列計算，不是按工具。「web」代表有公開伺服器幫你算。' },
            data: {
              cats: [
                { en: 'Browser only', zh: '只要瀏覽器' },
                { en: 'Free install', zh: '免費安裝' },
                { en: 'Paid service', zh: '付費服務' },
                { en: 'Licence', zh: '需要授權' },
                { en: 'GPU', zh: '需要 GPU' },
                { en: 'Cluster / paid API', zh: '叢集或付費 API' }
              ],
              series: [{ n: { en: 'Capability rows', zh: '能力條目' }, v: [7, 11, 1, 1, 1, 2] }]
            },
            opts: { dec: 0 },
            caption: {
              en: 'Eighteen of twenty-three rows are free. The single licensed row (CFD/FEA) is also the one most often replaceable: LYON got a defensible transport result from a one-dimensional model written by hand, with no licence at all.',
              zh: '二十三列裡有十八列是免費的。唯一需要授權的那一列（計算流體／有限元）也最常可以被取代：LYON 用一個手寫的一維模型就拿到了站得住腳的傳輸結果，完全沒有用到任何授權軟體。'
            }
          }) +
          h.kv([
            [{ en: 'Free, and worth a week', zh: '免費，而且值得花一週' },
              { en: 'ViennaRNA, SnapGene Viewer, UniProt, GTEx, STRING, ImageJ, a Python notebook with `scipy.optimize`. Every one of them pays back inside the same term.', zh: 'ViennaRNA、SnapGene Viewer、UniProt、GTEx、STRING、ImageJ，以及一本帶 `scipy.optimize` 的 Python 筆記本。每一個都會在同一學期內回本。' }],
            [{ en: 'Free, and a trap without a supervisor', zh: '免費，但沒有指導者就是陷阱' },
              { en: 'GROMACS, FoldX at scale, RFdiffusion3. Not because they are hard to run — because they are easy to run and hard to interpret, and a wrong run looks exactly like a right one.', zh: 'GROMACS、大規模 FoldX、RFdiffusion3。不是因為難跑——而是因為太好跑卻難解讀，而一次跑錯的結果看起來和跑對的一模一樣。' }],
            [{ en: 'Paid, and usually worth it', zh: '要錢，而且通常值得' },
              { en: 'Whole-plasmid sequencing. Princeton made a 100 % match a gate before anything downstream; UCNZ used it to find out that what arrived was not what was ordered.', zh: '全質體定序。Princeton 把「100% 相符」設成所有下游步驟之前的關卡；UCNZ 則用它查出「收到的不是訂的那個」。' }],
            [{ en: 'Paid, and usually not', zh: '要錢，而且通常不值得' },
              { en: 'A CFD licence, when the question is one-dimensional. Write the one-dimensional model, publish it, and move the money to consumables.', zh: '當問題其實是一維時的計算流體授權。把一維模型寫出來、公開它，然後把錢移到耗材上。' }]
          ])
      });

      /* ---------------- minimum stack ---------------- */
      out += h.sec({
        id: 'tb-min',
        kick: { en: 'For next year', zh: '為明年準備' },
        h2: { en: 'The order we would install them in', zh: '我們會用這個順序把它們裝起來' },
        lede: {
          en: 'Six stages. Each one has a gate, and nobody starts the next stage until the gate is written down — the gate, not the result.',
          zh: '六個階段。每一階都有一道關卡，而且在關卡被寫下來之前，沒有人可以開始下一階——是關卡被寫下來，不是結果出來。'
        },
        body:
          h.flow({
            title: { en: 'A dry lab a school team can actually staff', zh: '一個學校隊伍真的排得出人手的乾式實驗' },
            sub: { en: 'Each stage is one person for one to three weeks. The tools in each box are the ones we would start with; the line underneath is the gate.', zh: '每一階是一個人一到三週。方塊裡的工具是我們會先用的；下面那行是關卡。' },
            tag: { en: 'OUR RECOMMENDATION', zh: '我們的建議' },
            stages: [
              { label: { en: '1 · Pick the target by elimination', zh: '一 · 用淘汰法選標靶' }, tone: 'b',
                sub: { en: 'Three public databases, three disqualifying rules, written before the search.', zh: '三個公開資料庫、三條淘汰規則，在搜尋之前先寫好。' },
                items: [{ en: 'GTEx / an atlas', zh: 'GTEx／某個圖譜' }, { en: 'UniProt', zh: 'UniProt' }, { en: 'A spreadsheet', zh: '一張試算表' }] },
              { label: { en: '2 · Size the device before the biology', zh: '二 · 先定裝置規格、再談生物' }, tone: 'a',
                sub: { en: 'One back-of-envelope transport or dose calculation that could kill the idea this week.', zh: '一次這禮拜就能把點子殺掉的傳輸或劑量粗算。' },
                items: [{ en: 'Pen and paper', zh: '紙筆' }, { en: 'Python + SciPy', zh: 'Python＋SciPy' }, { en: 'A published parameter table', zh: '一張已發表的參數表' }] },
              { label: { en: '3 · Design the construct, not the protein', zh: '三 · 設計構建體，不是蛋白' }, tone: 'g',
                sub: { en: 'Cloning software and a sequence-verification gate before any ordering.', zh: '下單之前先有選殖軟體與定序驗證關卡。' },
                items: [{ en: 'SnapGene / Benchling', zh: 'SnapGene／Benchling' }, { en: 'ViennaRNA if RNA', zh: '若涉及 RNA 則用 ViennaRNA' }, { en: 'Whole-plasmid sequencing', zh: '全質體定序' }] },
              { label: { en: '4 · Fit something to the first real plate', zh: '四 · 對第一盤真數據做擬合' }, tone: 'g',
                sub: { en: 'A Hill curve or a two-state ODE, fitted, with R² published even when it is bad.', zh: '一條 Hill 曲線或一個雙態 ODE，做擬合，而且 R² 就算難看也照登。' },
                items: [{ en: 'scipy.optimize', zh: 'scipy.optimize' }, { en: 'Matplotlib', zh: 'Matplotlib' }, { en: 'A residual plot', zh: '一張殘差圖' }] },
              { label: { en: '5 · Predict structure only when it decides something', zh: '五 · 只在會決定某件事時才做結構預測' }, tone: 'v',
                sub: { en: 'Allowed once there is a specific mutation or fusion whose order depends on the answer.', zh: '只有當存在一個「下不下單取決於答案」的具體突變或融合時，才可以做。' },
                items: [{ en: 'AlphaFold / Boltz web server', zh: 'AlphaFold／Boltz 網頁服務' }, { en: 'PyMOL for RMSD', zh: '用 PyMOL 算 RMSD' }] },
              { label: { en: '6 · Ship one tool with an interface', zh: '六 · 交出一個有介面的工具' }, tone: 't',
                sub: { en: 'Whatever stages 1–5 produced, packaged so another team can run it without us.', zh: '把一到五階產出的東西包裝起來，讓別隊不需要我們也跑得動。' },
                items: [{ en: 'A repository', zh: '一個 repo' }, { en: 'A README with the gates', zh: '一份寫明關卡的 README' }, { en: 'A worked example', zh: '一個完整範例' }] }
            ],
            loop: { label: { en: 'Each stage can send the previous one back; nothing goes forward on a result alone', zh: '每一階都可以把前一階退回；沒有任何東西光靠一個結果就往前走' } },
            caption: {
              en: '**This ordering is ours and it is deliberately contrarian.** Structure prediction is stage five, not stage one, because on the ten wikis the predictions that changed a decision all came after a specific construct existed to decide about. UCNZ ran the thinnest dry lab on the list — AlphaFold 3 plus a PyMOL RMSD, used once as a pre-ordering gate — and reached the Top 10 with it.',
              zh: '**這個順序是我們的，而且刻意和直覺相反。** 結構預測排在第五而不是第一，因為在這十個 wiki 上，真正改變了決定的預測，全都發生在「已經有一個具體構建體要做決定」之後。UCNZ 跑了名單上最薄的乾式實驗——AlphaFold 3 加上一次 PyMOL RMSD，只當成下單前的關卡用一次——然後靠它進了前十名。'
            }
          }) +
          h.ul([
            { en: '**What we would not install in year one:** GROMACS, a CFD licence, a *de novo* diffusion pipeline, or any agentic design harness. Each needs a supervisor who can tell a wrong answer from a right one, and a team that has one of those should spend them on the measurement instead.', zh: '**第一年我們不會裝的東西：**GROMACS、計算流體授權、de novo 擴散生成流程，或任何代理式設計框架。每一個都需要一位分得出「錯答案」和「對答案」的指導者，而手上有這種人的隊伍，應該把他花在量測上。' },
            { en: '**What we would install on day one and never mention again:** a version-controlled repository, and a single spreadsheet of every parameter with a column saying whether it was measured, fitted, or assumed. Three teams on this list do the second one and it is visible from the first paragraph of their model page.', zh: '**第一天就會裝、之後再也不會提起的東西：**一個有版本控制的 repo，以及一張列出所有參數的試算表，附一欄說明它是量到的、擬合出來的，還是假設的。名單上有三隊做了第二件事，而從他們模型頁的第一段就看得出來。' },
            { en: '**The tool none of the ten had:** a shared definition of "done" for a dry-lab task. Every team shows outputs; none publishes the moment at which a model was declared finished. That is the gap we would like 2027 to close, and it costs nothing to try.', zh: '**十隊都沒有的那個工具：**對乾式任務的「完成」有一個共同定義。每一隊都展示輸出；沒有一隊寫下模型是在哪一刻被宣告做完的。那是我們希望 2027 年補上的缺口，而且嘗試它不花半毛錢。' }
          ])
      });

      return out;
    }
  };
})(window);
