/* Idea 5 — SEEDTEST. Aarhus-University's 2026 mechanism (activate only where the cell's own
   microRNA profile matches) depends on a sensor telling its target from the target's own family,
   and that specificity is unmeasured. This measures it, on a non-human family a High School team
   is allowed to use. Ours; never run. Sequences from miRBase; literature cited inline.
   Sources in notes/2027-idea-sources.md */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var SWIM = {
    wet: [
      { l: { en: 'Pilot the trigger length before ordering a panel', zh: '在訂購整組之前先試觸發子長度' },
        s: { en: 'Two oligos, one question: does a 22-mer switch anything at all? Published precedent says it may not', zh: '兩條寡核苷酸、一個問題：一條 22 聚體到底能不能啟動任何東西？已發表的前例說可能不能' }, tone: 'r' },
      { l: { en: 'Build one sensor and titrate its real target', zh: '做一個感測器，並對它真正的標的做滴定' },
        s: { en: 'A full dose curve before any relative is ordered. No headroom on target means no cross-talk measurable', zh: '在訂購任何近親之前先做完整劑量曲線。對標的沒有餘裕，就量不到交叉反應' }, tone: 'g' },
      { l: { en: 'Run every family member at matched concentration', zh: '每個家族成員都在相同濃度下跑' },
        s: { en: 'Same run, same plate, normalised to the on-target in that run. Never to each off-target\'s own maximum', zh: '同一批次、同一盤，對該批次的標的做標準化。絕不是對每個非標的自己的最大值' }, tone: 'g' },
      { l: { en: 'Co-spike the right target with each wrong one', zh: '把對的標的與每個錯的標的一起加' },
        s: { en: 'The row almost every specificity matrix omits: does a near-relative suppress the real signal?', zh: '幾乎每一張專一性矩陣都漏掉的那一列：近親會不會壓抑真正的訊號？' } },
      { l: { en: 'Measure the two impossible pairs too', zh: '那兩對不可能的配對也要量' },
        s: { en: 'Members with identical sequences cannot be separated even in principle. Any difference you see is your noise floor', zh: '序列完全相同的成員在原理上就分不開。你看到的任何差異就是你的雜訊地板' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Pick the family from the sequences, not from the disease', zh: '依序列挑家族，不是依疾病挑' },
        s: { en: 'Count the actual pairwise differences first. The obvious family turns out to be the easy one', zh: '先數出真正的兩兩差異。那個最明顯的家族，結果是最簡單的那一個' }, tone: 'v' },
      { l: { en: 'Build a difficulty ladder, not a flat panel', zh: '建一個難度階梯，不是一張平的名單' },
        s: { en: 'Identical, one, two, five and nine differences. That turns a matrix into a dose-response of discrimination', zh: '相同、一個、兩個、五個、九個差異。那把一張矩陣變成「辨識力的劑量反應」' }, tone: 'v' },
      { l: { en: 'Pre-register which pairs you expect to fail', zh: '事先登記你預期哪幾對會失敗' },
        s: { en: 'Terminal and wobble mismatches are the published failure modes, and the folding tools do not warn you', zh: '末端與搖擺配對錯配是已發表的失效模式，而摺疊工具不會警告你' }, tone: 'v' },
      { l: { en: 'Report a bound, not an absence', zh: '報告一個界限，不是一個「沒有」' },
        s: { en: 'Zero activations in three replicates bounds cross-reactivity at sixty-three per cent. Say so', zh: '三次重複中零次啟動，只能把交叉反應限制在 63%。把這件事說出來' }, tone: 'v' },
      { l: { en: 'Publish the matrix ordered by similarity', zh: '以相似度排序公開那張矩陣' },
        s: { en: 'Rows and columns sorted by mismatch count, on a log colour scale. Alphabetical order hides the result', zh: '列與欄依錯配數排序，用對數色階。按字母排序會把結果藏起來' }, tone: 'v' }
    ],
    links: [
      { w: 0, d: 2, l: { en: 'the pilot decides the whole panel', zh: '先導試驗決定整組名單' }, up: true },
      { w: 2, d: 4, l: { en: 'the matrix is the deliverable', zh: '那張矩陣就是交付物' }, up: false }
    ]
  };

  PD.pages['x-seed'] = {
    label: { en: 'Idea 5 · SEEDTEST', zh: '題目五 · SEEDTEST' },
    title: { en: 'SEEDTEST — a gate that cannot tell a family apart is not a gate', zh: 'SEEDTEST——分不出一個家族的閘，不是閘' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Idea 5 of 5 · our proposal, never run · built on Aarhus-University 2026 · Foundational Advance',
          zh: '五個題目中的第五個 · 我們的提案，從未執行 · 建立在 Aarhus-University 2026 上 · 基礎推進'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'A whole class of therapy assumes a sensor can tell its target from the target\'s relatives. ==Its own designers wrote down that they did not check.==',
          zh: '一整類療法都假設感測器能把標的與標的的近親分開。==而它的設計者自己寫下了：他們沒有去檢查。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Aarhus-University\'s 2026 project is delivered broadly and activated only inside cells whose microRNA profile matches a disease — an AND gate built from two microRNA inputs, because, in their words, relying on "a single cellular biomarker to detect disease… is simply not optimal for specificity". But microRNAs come in families that share a seed, and in the human let-7 family the closest members differ by **a single nucleotide**. So the load-bearing assumption of the whole design is that each input can be told apart from its own relatives — and on their model page the team states plainly: **"we chose not to model systems containing only a subset of the target miRNAs."** The single-input state is unmodelled there, and it is very nearly unmeasured in the literature too: across the canonical two-input RNA AND gates, **nobody has published output measured over a grid of both input concentrations**, and the one published microRNA-responsive toehold switch in mammalian cells has a dynamic range of **about two** — no headroom to measure cross-talk with at all. **This project measures the thing the mechanism rests on.**',
          zh: 'Aarhus-University 的 2026 專案採廣泛遞送、只在「微小 RNA 圖譜符合某個疾病」的細胞內活化——那是一個由兩個微小 RNA 輸入構成的 AND 閘；用他們自己的話說，因為只依賴「單一個細胞生物標記來偵測疾病……在專一性上根本不是最佳做法」。但微小 RNA 是以共用種子區的家族形式存在的，而在人類 let-7 家族中，最接近的成員只差**一個核苷酸**。所以整個設計的承重假設是：每個輸入都能與自己的近親被分開——而在他們的模型頁上，該隊明白寫著：**「我們選擇不去模擬只含部分標的 miRNA 的系統。」**單輸入狀態在那裡沒有被模擬，而在文獻裡也幾乎沒有被量測：在那些經典的雙輸入 RNA AND 閘中，**沒有人公開過「在兩個輸入濃度構成的網格上量測輸出」**；而唯一一個已發表的、在哺乳動物細胞中對微小 RNA 有反應的 toehold 開關，動態範圍**大約是二**——根本沒有餘裕可以用來量交叉反應。**這個專案要量的，正是那個機制所倚賴的東西。**'
        }) + '</p>' +
        h.stats([
          { v: '4', l: { en: 'Pairs in the chosen family that differ by exactly one nucleotide', zh: '所選家族中剛好只差一個核苷酸的配對數' } },
          { v: '6', l: { en: 'Pairs in it that are exactly identical — the built-in impossibility control', zh: '其中完全相同的配對數——內建的「不可能」對照' } },
          { v: '5 to 38', l: { en: 'Discrimination a purpose-built ultraspecific sensor achieves in cell-free, against >100 in cells', zh: '一個專門設計的超專一感測器在無細胞中達到的辨識倍數，而在細胞內是 >100' } },
          { v: '63 %', l: { en: 'What "zero activations in three replicates" actually bounds cross-reactivity at', zh: '「三次重複中零次啟動」真正能把交叉反應限制到的上限' } },
          { v: '0', l: { en: 'Of these experiments we have run. This is a plan', zh: '這些實驗我們做過幾個。這是一份計畫' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'sd-why', t: { en: 'Why it is a project', zh: '為什麼這是個專案' } },
        { id: 'sd-fam', t: { en: 'The family panel', zh: '家族名單' } },
        { id: 'sd-open', t: { en: 'What is actually unmeasured', zh: '真正沒被量的是什麼' } },
        { id: 'sd-pilot', t: { en: 'The pilot that comes first', zh: '必須先做的先導試驗' } },
        { id: 'sd-gate', t: { en: 'The five gates', zh: '五道關卡' } },
        { id: 'sd-flow', t: { en: 'The workflow', zh: '工作流程' } },
        { id: 'sd-report', t: { en: 'How to report it', zh: '怎麼報告' } },
        { id: 'sd-tool', t: { en: 'Tools and money', zh: '工具與錢' } },
        { id: 'sd-plan', t: { en: 'The schedule', zh: '行程' } },
        { id: 'sd-risk', t: { en: 'What kills it', zh: '什麼會殺死它' } },
        { id: 'sd-ship', t: { en: 'What it ships', zh: '它交付什麼出去' } }
      ]);

      /* ---------------- why ---------------- */
      out += h.sec({
        id: 'sd-why',
        kick: { en: 'The argument', zh: '論證' },
        h2: { en: 'The gate is only a gate if the inputs can be told apart', zh: '只有在輸入能被分開時，那個閘才是一個閘' },
        body:
          h.kv([
            [{ en: 'What Aarhus built', zh: 'Aarhus 做了什麼' },
             { en: 'A linear RNA scaffold where two microRNA inputs each displace part of a separate "key" strand; the key leaves only when both have bound, and only a fully released key can expose the ribosome binding site so the payload is translated. **The logic is the cascade itself** — each displacement can only happen if the previous one did — so the AND gate costs no extra machinery. Fifteen parts registered, and the design is modular: swap the input sequences, keep the logic.', zh: '一個線性 RNA 支架，兩個微小 RNA 輸入各自置換掉一條獨立「鑰匙」股的一部分；鑰匙只有在兩者都結合後才會離開，而只有完全釋放的鑰匙才能暴露核糖體結合位、讓負載被轉譯。**邏輯就是那個級聯本身**——每一次置換只有在前一次發生之後才能發生——所以那個 AND 閘不需要額外機制。登錄了十五個元件，而設計是模組化的：換掉輸入序列、保留邏輯。' }],
            [{ en: 'Where the assumption sits', zh: '那個假設在哪裡' },
             { en: 'In the input sequences. A microRNA family shares a seed region by definition, and in the human let-7 family **let-7a and let-7c differ by one nucleotide** at position 19, **let-7b and let-7c by one** at position 17. If a sensor keyed to one member fires on its relatives, a gate that was supposed to require two specific markers is firing on a much broader class of cells — which is precisely the specificity the architecture exists to provide.', zh: '在輸入序列裡。一個微小 RNA 家族按定義就共用種子區；而在人類 let-7 家族中，**let-7a 與 let-7c 在第 19 位只差一個核苷酸**，**let-7b 與 let-7c 在第 17 位只差一個**。如果一個以某個成員為鑰匙的感測器會被它的近親觸發，那麼一個本來要求兩個特定標記的閘，就會在一個寬得多的細胞類別上啟動——而那正是這個架構存在所要提供的專一性。' }],
            [{ en: 'What the team says about it', zh: '該隊對這件事說了什麼' },
             { en: 'On their model page, under the limitations of their method, verbatim: **"For this reason, we chose not to model systems containing only a subset of the target miRNAs."** Their stated reason is a real one — the thermodynamic models do not capture the energy barriers, so a partially bound state\'s predicted structure may not be the one that forms. **That is an honest limitation, not an oversight, and it is exactly why somebody has to measure it instead of predicting it.**', zh: '在他們模型頁的方法限制一節，原文是：**「為此，我們選擇不去模擬只含部分標的 miRNA 的系統。」**他們陳述的理由是真實的——熱力學模型捕捉不到能量障壁，所以一個部分結合狀態的預測結構，可能不是真正會形成的那一個。**那是一個誠實的限制，不是疏漏；而那也正是為什麼必須有人去「量」它，而不是去「預測」它。**' }],
            [{ en: 'Why a High School team can do it and they could not', zh: '為什麼高中部隊伍做得到，而他們做不到' },
             { en: 'Because the question does not need cells. It needs **one sensor, a set of synthetic RNA inputs and a plate reader** — the inputs are short oligos you buy, and the readout is fluorescence in a tube. Aarhus\'s own bench route stalled on an assay that could not answer its question; this question is answerable with the cheapest possible setup, and the whole difficulty is in the experimental design rather than the equipment.', zh: '因為這個問題不需要細胞。它需要的是**一個感測器、一組合成 RNA 輸入，以及一台微孔盤讀儀**——輸入是你買得到的短寡核苷酸，而讀值是試管裡的螢光。Aarhus 自己的實驗檯路線卡在一個「答不了自己問題」的試驗上；而這個問題用最便宜的配置就答得出來，全部的困難在實驗設計，不在設備。' }],
            [{ en: 'And the rule that reshaped it', zh: '以及那條重塑了它的規定' },
             { en: 'iGEM\'s White List white-lists microRNAs "**that do not target human genes**" and requires a Check-In for the same list "**that target human genes**" — and High School teams cannot file a Check-In. So the human let-7 family, which is what makes the question urgent, is closed. **This project is built on a non-human family instead, and the discrimination question it asks is identical** — in fact, as the next section shows, the family we would choose is a *harder* test than human let-7.', zh: 'iGEM 的白名單把「**不以人類基因為標的**」的微小 RNA 列入白名單，而對「**以人類基因為標的**」的同一類要求 Check-In——而高中部隊伍無法提交 Check-In。所以讓這個問題顯得迫切的人類 let-7 家族，是關著的。**這個專案改為建立在一個非人類家族上，而它所問的辨識問題完全相同**——事實上，如下一節所示，我們會選的那個家族比人類 let-7 **更難**。' }]
          ])
      });

      /* ---------------- family panel ---------------- */
      out += h.sec({
        id: 'sd-fam',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'Choose the family by counting its sequences, because the obvious choice is the easy one', zh: '靠「數它的序列」來挑家族，因為那個最明顯的選擇是最簡單的那一個' },
        lede: {
          en: 'This is the section that decides whether the study tests anything. We counted every pairwise difference in three candidate families from the sequence database, and the family everybody would reach for first turns out not to contain the experiment.',
          zh: '這一節決定這份研究有沒有在測任何東西。我們從序列資料庫把三個候選家族的每一組兩兩差異都數過，而大家第一個會想到的那個家族，結果裡面並沒有那個實驗。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Family', zh: '家族' }, w: '20%' },
              { t: { en: 'Members and the hardest pair in it', zh: '成員數，以及其中最難的那一對' } },
              { t: { en: 'Role in the panel', zh: '在名單中的角色' }, w: '26%' }
            ],
            rows: [
              [{ en: '***Arabidopsis* miR169** — the primary family', zh: '***Arabidopsis* miR169**——主要家族' },
               { en: 'Fourteen annotated members. **Four pairs differ by exactly one nucleotide of equal length**: 169a against 169c at position 21, 169i against 169m at 22, 169j against 169m at 22, and 169m against 169n at 22. Two-difference pairs give the next rung, three-difference pairs the one after. **And six pairs are exactly identical**: d equals e, f equals g, h equals k, i equals j, i equals n, j equals n.', zh: '十四個已註記成員。**有四對是「等長、剛好差一個核苷酸」**：169a 對 169c 在第 21 位、169i 對 169m 在第 22 位、169j 對 169m 在第 22 位、169m 對 169n 在第 22 位。差兩個的配對構成下一階，差三個的再下一階。**而有六對是完全相同的**：d 等於 e、f 等於 g、h 等於 k、i 等於 j、i 等於 n、j 等於 n。' },
               { en: 'The experiment. **The four single-nucleotide pairs are the test, and the six identical pairs are the impossibility control** — a sensor cannot separate them even in principle, so any apparent difference between them is your measurement noise and calibrates the floor of the whole matrix.', zh: '就是那個實驗。**四對單核苷酸配對是測試本身，而六對完全相同的配對是「不可能」對照**——感測器在原理上就分不開它們，所以它們之間任何看起來的差異都是你的量測雜訊，並為整張矩陣校出地板。' }],
              [{ en: '***C. elegans* let-7** — the easy anchor', zh: '***C. elegans* let-7**——簡單端的錨點' },
               { en: 'Five members share nucleotides one to eight exactly. But the **hardest pair is five substitutions apart** (let-7 against miR-84), and the differences cluster in the supplementary and tail regions. **There is no single-substitution equal-length pair in this family at all.**', zh: '五個成員的第一到第八個核苷酸完全相同。但**最難的一對相差五個置換**（let-7 對 miR-84），而差異集中在補充區與尾端區。**這個家族裡根本沒有任何一對「等長、只差一個置換」的配對。**' },
               { en: 'The obvious choice, and **not the experiment.** A project built on this family alone would report high discrimination and would not have tested what it set out to test. Keep two members as the easy end of the ladder.', zh: '那個最明顯的選擇，而**它不是那個實驗。**一個只建立在這個家族上的專案，會報告出很高的辨識力，而其實沒有測到它原本要測的東西。留兩個成員當階梯的簡單端。' }],
              [{ en: '***Arabidopsis* miR166** — the floor control', zh: '***Arabidopsis* miR166**——地板對照' },
               { en: 'Seven annotated members, **two distinct sequences**, differing only by a single terminal nucleotide at the three-prime end.', zh: '七個已註記成員、**兩條不同的序列**，只差三端的一個末端核苷酸。' },
               { en: 'Two oligos, and a rhetorically useful inclusion: for some real families **the specificity question is not hard but undefined**, and no amount of sensor engineering can fix it. Worth the twenty dollars.', zh: '兩條寡核苷酸，而且是一個修辭上有用的加入：對某些真實家族來說，**專一性問題不是困難，而是沒有定義**，而再多的感測器工程都無法解決。值得那二十美元。' }]
            ],
            min: 980,
            source: { en: 'Pairwise differences computed from the sequence database\'s mature-microRNA file, release 22.1, downloaded 23 November 2026 — 2,789 human, 442 *C. elegans* and 597 *A. thaliana* mature entries. The counts are ours, computed by script rather than recalled, and the accessions and sequences are in `notes/2027-idea-sources.md`. **Check them against the current release yourself before ordering anything** — annotations change.', zh: '兩兩差異由該序列資料庫的成熟微小 RNA 檔案（release 22.1，2026 年 11 月 23 日下載）計算而得——共 2,789 筆人類、442 筆 *C. elegans* 與 597 筆 *A. thaliana* 的成熟條目。這些計數是我們的，由程式計算而非憑記憶，而序號與序列在 `notes/2027-idea-sources.md`。**在訂購任何東西之前，請自己對照現行版本核對**——註記會變。' }
          }) +
          h.take({ en: 'The design this unlocks, and why it beats a flat matrix', zh: '它解開的那個設計，以及為什麼它勝過一張平的矩陣' }, {
            en: 'Three families together give a **graded difficulty ladder: identical, one difference, two, five and nine.** That turns the deliverable from a square matrix of numbers into **a dose-response of discrimination against sequence distance** — a curve, with a measured floor at the identical pairs and a measured ceiling at the distant ones. A curve is a result; a matrix of mostly-blank cells is a table. And there is a prediction to pre-register: in the primary family the differences sit almost entirely at **position 1 and in the three-prime tail**, which is the **hardest** case for a hybridisation sensor, because a terminal mismatch has only one stacking neighbour and so carries the smallest thermodynamic penalty. **Write down before you measure that you expect those four pairs to be where the sensor fails.** If it succeeds there, that is a much better paper than if you had expected it to.',
            zh: '三個家族合起來，給出一個**分級的難度階梯：相同、差一個、差兩個、差五個、差九個。**那把交付物從「一張方形的數字矩陣」變成**「辨識力對序列距離的劑量反應」**——一條曲線，在完全相同的配對處有一個實測的地板，在最遠的配對處有一個實測的天花板。曲線是結果；一張大半是空格的矩陣只是表格。而且有一個預測值得事先登記：在主要家族中，差異幾乎全部落在**第 1 位與三端尾部**，而那對一個雜交型感測器是**最難**的情況，因為末端錯配只有一個堆疊鄰居，所以熱力學代價最小。**在你量測之前就寫下：你預期那四對就是感測器失敗的地方。**如果它在那裡成功了，那會是一篇比「你本來就預期它成功」好得多的論文。'
          })
      });

      /* ---------------- what is unmeasured ---------------- */
      out += h.sec({
        id: 'sd-open',
        kick: { en: 'Prior art', zh: '前人做過的' },
        h2: { en: 'What has been measured, what has not, and the one number that shows the question is open', zh: '什麼被量過、什麼沒有，以及那個顯示問題還開著的數字' },
        body:
          h.tbl({
            cols: [
              { t: { en: 'The question', zh: '問題' }, w: '26%' },
              { t: { en: 'What the literature has', zh: '文獻裡有什麼' } },
              { t: { en: 'Source', zh: '出處' }, w: '17%' }
            ],
            rows: [
              [{ en: '**Can a purpose-built sensor resolve one nucleotide?**', zh: '**一個專門設計的感測器能分辨一個核苷酸嗎？' + '**' },
               { en: 'Yes, in cells — a dedicated ultraspecific riboregulator routinely reaches a **discrimination factor above 100**. But the same designs in **cell-free reactions fall to 5 to 38**, which the authors state plainly. And the failure mode is named: **G-U wobble mismatches give only 4 to 20**, "including three cases where the thermodynamic model predicts an energy penalty of zero." **So the folding software will not warn you about the mismatches most likely to defeat you.**', zh: '在細胞裡可以——一個專門設計的超專一核酸調控元件，通常能達到**超過 100 的辨識倍數**。但同樣的設計在**無細胞反應中降到 5 到 38**，作者明白寫出了這件事。而失效模式也被指名了：**G-U 搖擺錯配只給出 4 到 20**，「其中有三個案例，熱力學模型預測的能量代價是零」。**所以摺疊軟體不會對那些最可能打敗你的錯配提出警告。**' },
               { en: '[PMID 32109414](https://pubmed.ncbi.nlm.nih.gov/32109414/) and its [erratum](https://pubmed.ncbi.nlm.nih.gov/33125894/)', zh: '[PMID 32109414](https://pubmed.ncbi.nlm.nih.gov/32109414/) 及其[更正](https://pubmed.ncbi.nlm.nih.gov/33125894/)' }],
              [{ en: '**Has a family matrix ever been done?**', zh: '**有人做過家族矩陣嗎？' + '**' },
               { en: 'Once, on a different platform, and it is the model to copy: a true **five-by-five matrix** of let-7 assays against let-7 targets, every cell measured. Cross-reaction was **0.1 to 3.7 % for members differing by a single nucleotide**, and — independently of the sensor literature — "most cross-reactions resulted from **G-T mismatches**". **Two platforms, same mechanism, same culprit.** That is a strong basis for a pre-registered prediction.', zh: '做過一次，在另一個平台上，而它正是該抄的範本：一個真正的**五乘五矩陣**，let-7 的各個檢測對上 let-7 的各個標的，每一格都量。對於只差一個核苷酸的成員，交叉反應是 **0.1 到 3.7%**；而且——與感測器文獻各自獨立地——「大多數交叉反應來自 **G-T 錯配**」。**兩個平台、同一個機制、同一個元凶。**那是一個事先登記預測的有力基礎。' },
               { en: '[PMID 16314309](https://pubmed.ncbi.nlm.nih.gov/16314309/)', zh: '[PMID 16314309](https://pubmed.ncbi.nlm.nih.gov/16314309/)' }],
              [{ en: '**Can the published microRNA switch even ask the question?**', zh: '**已發表的那個微小 RNA 開關，連問這個問題都問不了嗎？' + '**' },
               { en: 'No, and this is the clearest evidence the gap is real. The one published microRNA-responsive toehold switch in mammalian cells reports, verbatim, that "the dynamic range of current design of toehold switch is **about two**", with a "modest level of orthogonality" — and it was tested only against **an unrelated microRNA**, never a family panel. **A dynamic range of two leaves no headroom in which to measure cross-talk at all.**', zh: '不能，而這是「這個缺口是真的」最清楚的證據。那唯一一個已發表的、在哺乳動物細胞中對微小 RNA 有反應的 toehold 開關，原文寫著「目前 toehold 開關設計的動態範圍**大約是二**」，而正交性只有「中等程度」——而且它只被拿去對**一個不相關的微小 RNA**測試過，從未對一整個家族名單。**動態範圍是二，就根本沒有餘裕可以量交叉反應。**' },
               { en: '[PMID 31039307](https://pubmed.ncbi.nlm.nih.gov/31039307/)', zh: '[PMID 31039307](https://pubmed.ncbi.nlm.nih.gov/31039307/)' }],
              [{ en: '**Does anybody report the false-ON with one input?**', zh: '**有人報告單一輸入下的偽開啟嗎？' + '**' },
               { en: 'Plotted everywhere, quantified almost nowhere — the number that reaches the text is nearly always the TRUE state over the **no-input** baseline, not over the **worst FALSE** state. Where it is given, it varies by mechanism rather than by being RNA: single inputs sit **at or below baseline** for one in-cell split-trigger gate, at about **1.8 times baseline** for a locked-arm junction, and at **6 to 20 per cent of the TRUE output** for a cell-free gate built from two different regulator types. **So leakage is a property of the architecture, and nobody can tell you what yours will be.**', zh: '到處都畫了，卻幾乎沒有地方被量化——進入正文的那個數字，幾乎總是 TRUE 狀態對**無輸入**基線的比值，而不是對**最糟的 FALSE** 狀態。在有給出的地方，它隨機制而異，而不是隨「它是 RNA」而異：在某個細胞內的拆分觸發閘中，單輸入**等於或低於基線**；在某個鎖臂接合中約為基線的 **1.8 倍**；而在一個由兩種不同調控元件組成的無細胞閘中，是 **TRUE 輸出的 6 到 20%**。**所以洩漏是架構的性質，而沒有人能告訴你你的會是多少。**' },
               { en: '[PMID 28746304](https://pubmed.ncbi.nlm.nih.gov/28746304/) · [PMID 35288660](https://pubmed.ncbi.nlm.nih.gov/35288660/) · [PMID 31393707](https://pubmed.ncbi.nlm.nih.gov/31393707/)', zh: '[PMID 28746304](https://pubmed.ncbi.nlm.nih.gov/28746304/) · [PMID 35288660](https://pubmed.ncbi.nlm.nih.gov/35288660/) · [PMID 31393707](https://pubmed.ncbi.nlm.nih.gov/31393707/)' }],
              [{ en: '**Has a two-input dose matrix ever been published?**', zh: '**有人公開過雙輸入的劑量矩陣嗎？' + '**' },
               { en: '**For a two-input RNA AND gate characterised in living cells, no.** Every canonical gate is characterised **only at the corners**, with inputs binary — expressed or not expressed — so there is no concentration axis at all. The one exception titrates both inputs simultaneously but in **cell-free** and as **plasmid** concentration rather than input RNA; it found that **leakage is itself a function of dose**, which a four-bar truth table structurally cannot show.', zh: '**對於在活細胞中被特性化的雙輸入 RNA AND 閘，沒有。**每一個經典的閘都**只在四個角落**被特性化，輸入是二元的——表達或不表達——所以根本沒有濃度軸。唯一的例外同時滴定了兩個輸入，但是在**無細胞**中、而且是以**質體**濃度而不是輸入 RNA；它發現**洩漏本身就是劑量的函數**，而那是一張四條柱的真值表在結構上無法呈現的。' },
               { en: '[PMID 31393707](https://pubmed.ncbi.nlm.nih.gov/31393707/)', zh: '[PMID 31393707](https://pubmed.ncbi.nlm.nih.gov/31393707/)' }],
              [{ en: '**Is there a tool for this?**', zh: '**有工具能做這件事嗎？' + '**' },
               { en: 'One was built — by an iGEM team in 2021, claiming to be "the first ever software tool to quantify the target RNA specificity of toehold switches". It has **no peer-reviewed paper and no wet-lab validation**, its repository was archived in 2022 and its package stopped at an early version. Meanwhile every machine-learning predictor in this field is trained on a **cognate** on-off label; in the two large papers "off-target" means the switch\'s own leakage, not a near-relative. **The gap is real, and it has been checked rather than assumed.**', zh: '有人做過一個——2021 年一支 iGEM 隊伍做的，聲稱是「有史以來第一個量化 toehold 開關對標的 RNA 專一性的軟體工具」。它**沒有經同儕審查的論文，也沒有濕式驗證**；它的程式倉庫在 2022 年被封存，套件也停在一個很早的版本。而同時，這個領域裡每一個機器學習預測器都是用**同源**的開關標籤訓練的；在那兩篇大型論文裡，「非標的」指的是開關自己的洩漏，不是一個近親。**這個缺口是真的，而且是被查證過、不是被假設的。**' },
               { en: 'Our check of the tool, its repository and both large datasets', zh: '我們對該工具、其程式倉庫與兩個大型資料集的查核' }]
            ],
            min: 1060,
            source: { en: 'Every figure is the cited paper\'s own. The Aarhus quotation is verbatim from their model page\'s limitations section. **One honest note on the framing**: leakage is not universally bad across RNA gates — it ranges from about a tenth of a per cent of the ON state to a quarter of it depending on the architecture, so the project should say that mechanism predicts leakage rather than claim that all RNA gates leak.', zh: '每個數字都出自所引論文。Aarhus 那句引文原文照引自他們模型頁的限制一節。**關於框架的一個誠實提醒**：在各種 RNA 閘之間，洩漏並非普遍地糟——依架構而異，它從 ON 狀態的約千分之一到四分之一都有；所以這個專案應該說「是機制在預測洩漏」，而不是主張所有 RNA 閘都會洩漏。' }
          })
      });

      /* ---------------- pilot ---------------- */
      out += h.sec({
        id: 'sd-pilot',
        kick: { en: 'Feasibility', zh: '可行性' },
        h2: { en: 'One pilot experiment decides whether this project is possible at all, and it costs two oligos', zh: '有一個先導實驗決定這個專案到底可不可能，而它只花兩條寡核苷酸' },
        lede: {
          en: 'We nearly published this idea without this section. It is the single most important thing on the page, because getting it wrong means ordering a sixteen-hundred-dollar oligo panel for an assay that cannot respond to any of it.',
          zh: '我們差點沒放這一節就把這個題目發出去。它是本頁最重要的一件事，因為弄錯它，意味著為一個「對它們全都不會反應」的試驗訂下一組一千六百美元的寡核苷酸。'
        },
        body:
          h.p({
            en: 'Every published cell-free trigger that works is **36 nucleotides or longer** — that is the standard length in the founding toehold-switch design and in every diagnostic built on it. A mature microRNA is **about 22**. And the one published attempt to drive a cell-free toehold switch with a short chemically synthesised microRNA oligo reports, verbatim, that **"neither the synthetic 100 μM miRNA trigger nor the EXPAR product was able to trigger either version"** of the switch — at a hundred micromolar, roughly twenty times a normal working concentration, there was no activation at all. The authors attribute it to "the short length and low GC contents of matured miRNA".',
            zh: '每一個行得通的已發表無細胞觸發子，長度都是 **36 個核苷酸或更長**——那是奠基性 toehold 開關設計、以及每一個建立在它之上的診斷所採用的標準長度。而一個成熟的微小 RNA 大約是 **22**。而唯一一次已發表的「用短的化學合成微小 RNA 寡核苷酸去驅動無細胞 toehold 開關」的嘗試，原文報告：**「不論是 100 μM 的合成 miRNA 觸發子，或是 EXPAR 產物，都無法啟動任何一個版本」**的開關——在一百微莫耳、約為正常工作濃度二十倍的情況下，完全沒有活化。作者把它歸因於「成熟 miRNA 的長度短與低 GC 含量」。'
          }) +
          h.kv([
            [{ en: 'The pilot', zh: '那個先導試驗' },
             { en: 'Buy **two oligos** — the on-target microRNA at its real 22-nucleotide length, and a 36-nucleotide extended version of the same sequence — and ask one question: **does the short one switch anything?** Run a dose series on both. Everything else in the project waits for that answer, and the answer costs under three hundred dollars.', zh: '買**兩條寡核苷酸**——標的微小 RNA 的真實 22 個核苷酸長度版本，以及同一序列延長到 36 個核苷酸的版本——然後問一個問題：**短的那條能啟動任何東西嗎？**兩條都做劑量序列。這個專案其他一切都等那個答案，而那個答案花不到三百美元。' }],
            [{ en: 'If the short trigger works', zh: '如果短觸發子行得通' },
             { en: 'Proceed as planned, and **report the dose curve** — a working 22-mer trigger in cell-free is itself a publishable contradiction of the one published attempt, and it is the kind of result another team will cite.', zh: '照計畫進行，並**公開那條劑量曲線**——一個在無細胞中有效的 22 聚體觸發子，本身就是對那唯一一次已發表嘗試的一個可公開的反例，而且是別的隊伍會引用的那種結果。' }],
            [{ en: 'If it does not', zh: '如果不行' },
             { en: 'You have two honest routes and must choose in writing. **Extend the trigger to 36 nucleotides** — but then it is no longer a microRNA, and the project must say so, because the claim changes from "can a sensor tell microRNA family members apart" to "can a sensor tell these sequences apart". Or **change the readout**: a hybridisation or beacon assay measures the same discrimination question without needing translation at all, and the family panel is unchanged.', zh: '你有兩條誠實的路線，而且必須書面選一條。**把觸發子延長到 36 個核苷酸**——但那樣它就不再是一個微小 RNA 了，而專案必須把這件事說出來，因為主張從「感測器能不能分辨微小 RNA 家族成員」變成了「感測器能不能分辨這些序列」。或者**換掉讀值**：一個雜交或分子信標型試驗，在完全不需要轉譯的情況下量測同一個辨識問題，而家族名單不變。' }],
            [{ en: 'The fallback that is arguably better anyway', zh: '那個可以說本來就更好的備援' },
             { en: 'A published beacon approach reaches **discrimination factors of 12 to 1,144, median 117**, across twenty model single-nucleotide mutations — and it does it with a trick worth stealing: **you improve specificity not by redesigning the sensor but by adding unlabelled hairpin oligos that soak up the near-relatives.** For a family panel that is an obvious, inexpensive second experiment, and it works at microRNA length.', zh: '一個已發表的分子信標做法，在二十個單核苷酸突變模型上達到**辨識倍數 12 到 1,144、中位數 117**——而它用的是一個值得偷的訣竅：**你不是靠重新設計感測器來改善專一性，而是靠加入未標記的髮夾寡核苷酸去把近親吸收掉。**對一個家族名單來說，那是一個明顯而便宜的第二實驗，而且它在微小 RNA 的長度上就能運作。' }],
            [{ en: 'And one more thing to budget for', zh: '還有一件要編進預算的事' },
             { en: 'Any naked short RNA in a crude cell-free extract needs an **RNase inhibitor**, and that is not optional: one published study got **no signal at all at 40 nanomolar without it**. Add it to the pilot, not to the panel.', zh: '任何在粗萃取無細胞系統中的裸露短 RNA 都需要**核酸酶抑制劑**，而那不是選配：有一份已發表研究在**不加它的情況下，40 奈莫耳完全沒有訊號**。把它加進先導試驗，不是加進正式名單。' }]
          ]) +
          h.warn({
            en: '**Do not order the family panel before the pilot answers.** The panel is the entire budget — a fourteen-member set of synthetic RNA oligos runs to roughly **sixteen hundred dollars** at the cheaper supplier, against perhaps fifty to a hundred dollars of cell-free reagent if you run the published 1.8 microlitre reaction volume rather than a full one. **The oligos are a fixed cost that multiplies by panel size, and the reagent is almost free by comparison.** Design the panel against the oligo bill: six to eight members covering the four single-nucleotide pairs, two identical pairs and one distant control is the efficient design, and it is a better experiment than fourteen members measured badly.',
            zh: '**在先導試驗給出答案之前，不要訂那組家族名單。**那組名單就是全部的預算——一組十四個成員的合成 RNA 寡核苷酸，在較便宜的供應商那裡大約要**一千六百美元**；而如果你跑的是已發表的 1.8 微升反應體積、而不是整管，無細胞試劑大概只要五十到一百美元。**寡核苷酸是一筆會隨名單規模倍增的固定成本，而相比之下試劑幾乎是免費的。**請依寡核苷酸的帳單來設計名單：六到八個成員，涵蓋那四對單核苷酸配對、兩對完全相同的配對與一個遠距對照，就是有效率的設計；而它是一個比「十四個成員但量得很差」更好的實驗。'
          })
      });

      /* ---------------- gates ---------------- */
      out += h.sec({
        id: 'sd-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'The five gates, answered in one sentence each', zh: '五道關卡，每一道用一句話回答' },
        body:
          h.phases([
            { h: { en: 'Gate 1 — the number and the instrument', zh: '關卡一——數字與儀器' },
              p: { en: 'By week 26 we will report, for each family member, its response as a percentage of the on-target response at the same concentration in the same run, with a 95 % interval, read as fluorescence or absorbance on a plate reader we can book.', zh: '到第 26 週，我們會為每個家族成員報告：它的反應佔同一批次、同一濃度下標的反應的百分比，附 95% 區間，以螢光或吸光在我們訂得到的微孔盤讀儀上讀取。' },
              items: [
                { en: 'Normalise **every cell to the on-target in the same run**, never to each off-target\'s own maximum. And **state the concentration in the axis label**, because a cross-reactivity percentage measured at one concentration changes if you change that concentration — a switch sensor saturates.', zh: '**每一格都對同一批次的標的做標準化**，絕不是對每個非標的自己的最大值。而且**把濃度寫在軸標籤上**，因為在某一個濃度下量到的交叉反應百分比，在你換濃度之後就會變——開關型感測器會飽和。' },
                { en: 'A colorimetric readout is the cheaper and more robust choice: one published workflow reads an enzyme product at a single visible wavelength on any plate reader, where fluorescence fights extract autofluorescence.', zh: '顯色讀值是較便宜、也較穩健的選擇：有一個已發表的流程在任何微孔盤讀儀上以單一可見波長讀取一個酵素產物，而螢光則得與萃取液自體螢光對抗。' }
              ],
              done: { en: 'A booking in writing, a named readout chemistry, and a plate map with the normalisation wells on it.', zh: '一份書面的儀器預約、一個指名的讀值化學，以及一張標上標準化孔位的盤位圖。' } },
            { h: { en: 'Gate 2 — the control that could make us wrong', zh: '關卡二——可能讓我們是錯的對照' },
              p: { en: 'Two of them, and both come free with the family: the **identical pairs**, which cannot be separated even in principle and therefore measure our noise floor, and the **distant pair**, which must be separated if the assay works at all.', zh: '兩個，而且兩個都隨那個家族免費附贈：**完全相同的配對**，它們在原理上就分不開，所以量的是我們的雜訊地板；以及**最遠的那一對**，如果這個試驗根本有效，它就必須被分開。' },
              items: [
                { en: 'This is a floor and a ceiling in the same experiment, and it is the strongest control structure of any idea on this site — **a negative matrix is worth little without proof that the assay would have detected cross-reactivity had there been any.** One published diagnostic did exactly this: it deliberately included a guide designed to cross-react and showed that it did.', zh: '這是同一個實驗裡的一個地板與一個天花板，而它是本站所有題目裡最強的對照結構——**一張全是負值的矩陣，如果沒有「要是真有交叉反應、這個試驗本來會偵測到」的證明，就價值不高。**有一個已發表的診斷正是這樣做的：它刻意放進一條被設計成會交叉反應的嚮導，並顯示它真的會。' },
                { en: 'Third control, almost always omitted: **co-spike the on-target with each off-target.** A matrix testing each relative alone answers "does the wrong input switch it on?" It does not answer "does the wrong input, present alongside the right one, suppress the real signal?" — and for near-identical sequences competing for one sensor, the second question matters more.', zh: '第三個對照，幾乎總是被漏掉：**把標的與每個非標的一起加。**一張「各個近親單獨測」的矩陣，回答的是「錯的輸入會不會把它打開？」它沒有回答「錯的輸入與對的輸入同時存在時，會不會壓抑真正的訊號？」——而對於爭奪同一個感測器的近乎相同的序列，第二個問題更重要。' }
              ],
              done: { en: 'A plate map with the identical pair, the distant pair and one co-spike row already on it, drawn before ordering.', zh: '一張在訂購之前就畫好的盤位圖，上面已經有那對相同配對、那對遠距配對，以及一列共加樣。' } },
            { h: { en: 'Gate 3 — two links, and we name them', zh: '關卡三——兩環，而且我們指名它們' },
              p: { en: 'Link one: one sensor responds to its own target with enough range to measure against. Link two: every family member is titrated against it. There is no third link because there is no cell, no disease and no payload.', zh: '第一環：一個感測器對自己的標的有足夠的反應範圍可供比較。第二環：每個家族成員都對它做滴定。沒有第三環，因為沒有細胞、沒有疾病、沒有治療負載。' },
              items: [
                { en: 'What we cut: the AND gate. **Measure one input\'s specificity properly before combining two** — the published two-input gates are characterised only at the corners, so a two-input study would be two unmeasured things at once. The AND gate is the stated next step.', zh: '我們砍掉的是：那個 AND 閘。**在把兩個輸入組合起來之前，先把一個輸入的專一性量好**——已發表的雙輸入閘只在四個角落被特性化，所以一個雙輸入研究會是「同時有兩件沒被量過的事」。那個 AND 閘是明確的下一步。' },
                { en: 'What we also cut: cells. The question is sequence discrimination, and sequence discrimination happens in a tube.', zh: '我們也砍掉的是：細胞。問題是序列辨識，而序列辨識發生在試管裡。' }
              ],
              done: { en: 'A chain diagram with two boxes marked "evidence", and the AND gate drawn as design.', zh: '一張鏈條圖，兩個方塊標「證據」，而那個 AND 閘畫成「設計」。' } },
            { h: { en: 'Gate 4 — the outsider', zh: '關卡四——外部的人' },
              p: { en: 'A laboratory with a quantitative nucleic-acid method confirms the identity and concentration of at least two of your input oligos independently, so the matrix cannot be explained by a mislabelled tube.', zh: '一間有定量核酸方法的實驗室，獨立確認你至少兩條輸入寡核苷酸的身分與濃度，好讓那張矩陣無法被「一支貼錯標籤的管子」解釋掉。' },
              items: [
                { en: 'This is the cheapest and most overlooked failure mode in a sequence-discrimination study: **if two oligos are swapped at the supplier or in your freezer, the matrix is wrong in a way no statistic will reveal.** An outside quantification of two of them closes it.', zh: '這是一個序列辨識研究中最便宜、也最常被忽略的失效模式：**如果兩條寡核苷酸在供應商那裡或在你的冷凍櫃裡被調換了，那張矩陣就會以任何統計都揭露不出來的方式是錯的。**對其中兩條做外部定量，就把它關上了。' },
                { en: 'A second option, if a laboratory is hard to reach: another team runs two cells of your matrix from your released sequences and protocol. That is a replication rather than an independent method, and you should say which you got.', zh: '如果實驗室難找，還有第二個選項：讓另一支隊伍依你釋出的序列與流程，跑你矩陣中的兩格。那是一次重現而不是一個獨立方法，而你應該說清楚你拿到的是哪一種。' }
              ],
              done: { en: 'A named contact, a named measurement, and a date in the first half of the season.', zh: '一個具名的聯絡人、一個具名的量測，以及一個落在賽季前半的日期。' } },
            { h: { en: 'Gate 5 — the negative result, written first', zh: '關卡五——先寫下負面結果' },
              p: { en: 'Two sentences, and the first one is the outcome the published evidence predicts:', zh: '兩句話，而第一句正是已發表證據所預測的那個結果：' },
              items: [
                { en: '**"The sensor did not distinguish the single-nucleotide pairs: the differentiation factor was *n*, below our pre-declared threshold, so single-input specificity at this sequence distance is not available in this system."** That is a direct, useful answer about a class of device, and it is what the terminal-mismatch and wobble literature predicts for this family.', zh: '**「這個感測器沒有分辨出那些單核苷酸配對：辨識倍數為 *n*，低於我們事先宣告的門檻，所以在這個系統中、在這個序列距離上，拿不到單輸入專一性。」**那是一個關於一整類裝置的直接、有用的答案，而且正是末端錯配與搖擺配對的文獻對這個家族所預測的結果。' },
                { en: '**"The identical pairs differed by *m* per cent, which is our noise floor, so no discrimination below that figure can be claimed by this assay."** Write this one too — it is the sentence that makes every other cell in the matrix interpretable.', zh: '**「那些完全相同的配對之間相差 *m* %，而那就是我們的雜訊地板，所以這個試驗無法主張任何低於那個數字的辨識力。」**這一句也要寫——它是讓矩陣裡其他每一格都變得可解讀的那句話。' }
              ],
              done: { en: 'Both sentences in the January document, with the pre-declared differentiation-factor threshold beside them.', zh: '兩句話都在一月的文件裡，旁邊附上事先宣告的辨識倍數門檻。' } }
          ])
      });

      /* ---------------- flow ---------------- */
      out += h.sec({
        id: 'sd-flow',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A pilot, a dose curve, then one matrix measured carefully', zh: '一個先導試驗、一條劑量曲線，然後一張被仔細量過的矩陣' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SEEDTEST: the family is chosen by counting sequences, and the panel is sized by the oligo bill', zh: 'SEEDTEST：家族靠數序列來選，而名單規模由寡核苷酸的帳單決定' },
          sub: { en: 'Wet lab above, dry lab below. The first handoff runs upward because the pilot result decides the whole panel; the second runs downward because the matrix is the deliverable. Note that the first wet step is a two-oligo feasibility test, not a construction: the cheapest possible way to find out whether the project can exist.', zh: '上為濕式、下為乾式。第一個交接向上，因為先導試驗的結果決定了整組名單；第二個向下，因為那張矩陣就是交付物。請注意第一個濕式步驟是一次兩條寡核苷酸的可行性測試，不是一次建造：這是「找出這個專案到底能不能存在」最便宜的方式。' },
          caption: { en: 'Our plan, not a record of work. Nothing in this diagram has been performed.', zh: '這是我們的計畫，不是工作紀錄。本圖中沒有任何一步被執行過。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- reporting ---------------- */
      out += h.sec({
        id: 'sd-report',
        kick: { en: 'Reporting', zh: '報告' },
        h2: { en: 'The arithmetic that turns "we saw no cross-reactivity" into a result', zh: '把「我們沒看到交叉反應」變成一個結果的那段算術' },
        body:
          h.kv([
            [{ en: 'Call it analytical specificity', zh: '叫它「分析專一性」' },
             { en: 'The measurement standards recommend **"analytical specificity"** or "selectivity" rather than bare "specificity", explicitly to avoid confusion with diagnostic specificity in laboratory medicine. And for the number itself, use the field\'s own term: **differentiation factor** — the response to the correct target divided by the response to the wrong one.', zh: '量測標準建議使用**「分析專一性」**或「選擇性」，而不是單用「專一性」，明確是為了避免與臨床實驗室醫學中的「診斷專一性」混淆。而那個數字本身，就用這個領域自己的詞：**辨識倍數**——對正確標的的反應除以對錯誤標的的反應。' }],
            [{ en: 'A percentage without a concentration is uninterpretable', zh: '沒有濃度的百分比無法解讀' },
             { en: 'Two different quantities are both called "per cent cross-reactivity": the **signal ratio at equal concentration**, and the **ratio of concentrations giving equal signal**. They coincide only if both dose curves are parallel and linear, and a switch sensor saturates. **Report full dose curves for the on-target and each off-target, give the ratio of the concentrations that hit a fixed threshold, and also give the signal ratio at one named concentration** for readers who want the simple number.', zh: '有兩個不同的量都被叫做「交叉反應百分比」：**在相同濃度下的訊號比值**，以及**給出相同訊號所需濃度的比值**。只有在兩條劑量曲線平行且線性時它們才一致，而開關型感測器會飽和。**請為標的與每個非標的都報告完整劑量曲線、給出「達到某個固定門檻所需濃度」的比值，並且也給出在某一個具名濃度下的訊號比值**，給那些想要簡單數字的讀者。' }],
            [{ en: 'What "zero in three replicates" actually means', zh: '「三次重複中零次」真正的意思' },
             { en: 'Zero activations in three replicates bounds the true activation rate at **63 per cent** by the exact one-sided interval. Zero in ten bounds it at 26 per cent; zero in thirty, at 9.5 per cent. **So the format most student projects use excludes almost nothing** — and saying that out loud is exactly the move that distinguishes a serious project from a confident one.', zh: '三次重複中零次啟動，以精確單側區間計算，只能把真實啟動率限制在 **63%**。十次中零次是 26%；三十次中零次是 9.5%。**所以大多數學生專案所採用的那個格式幾乎排除不了任何東西**——而把這件事說出來，正是把一個嚴謹的專案與一個自信的專案區分開來的那個動作。' }],
            [{ en: 'Better still, do not dichotomise at all', zh: '更好的做法是：根本不要二分' },
             { en: 'Report each off-target as a **fold-change over background with a 95 % interval**, against the assay\'s own limit of blank. "The off-target response was 1.02-fold background, interval 0.91 to 1.14; the sensor\'s detection limit for the on-target is 0.4 nanomolar, so cross-reactivity is below 2 per cent of the on-target response at 10 nanomolar" **is a result. "No cross-reactivity was observed" is not.**', zh: '把每個非標的報告為**對背景的倍數變化，附 95% 區間**，並對照該試驗自己的空白極限。「非標的的反應是背景的 1.02 倍，區間 0.91 到 1.14；感測器對標的的偵測極限是 0.4 奈莫耳，所以在 10 奈莫耳下交叉反應低於標的反應的 2%」——**那是一個結果。「未觀察到交叉反應」不是。**' }],
            [{ en: 'Do not correct for multiple comparisons', zh: '不要做多重比較校正' },
             { en: 'It is the instinct of a careful student and it is wrong here. Correcting a specificity matrix **increases the type II error rate**, which in this context means **making you more likely to miss a real cross-reaction** — the opposite of conservative. Report effect sizes with intervals instead. And note that at three replicates the two-sided interval half-width is about two and a half standard deviations, so **five or six replicates buy you more than extra family members do.**', zh: '那是一個謹慎學生的本能，而在這裡它是錯的。對一張專一性矩陣做校正會**提高第二型錯誤率**，而在這個情境下那意味著**讓你更可能漏掉一個真實的交叉反應**——與「保守」相反。請改為報告帶區間的效應量。而且請注意：在三次重複下，雙側區間的半寬約為兩個半標準差，所以**五到六次重複買到的東西，比多加幾個家族成員更多。**' }],
            [{ en: 'Draw the matrix so the result is visible', zh: '把矩陣畫成讓結果看得見的樣子' },
             { en: 'Two linked panels. A heatmap of normalised response on a **log colour scale** — cross-reactivity spans orders of magnitude and a linear scale makes everything but the diagonal look identical — with **rows and columns ordered by mismatch count, never alphabetically.** That ordering is what turns a table of numbers into a mechanistic result. Then the numbers as a table: each off-target, its accession, its mismatch count and positions, the concentration, the replicate count, the mean with its interval, and the call against a pre-declared threshold.', zh: '兩個相連的面板。一張標準化反應的熱圖，用**對數色階**——交叉反應橫跨數個數量級，而線性尺度會讓對角線以外的一切看起來都一樣——而且**列與欄依錯配數排序，絕不按字母。**正是那個排序把一張數字表變成一個機制性的結果。然後是數字表：每個非標的、它的序號、它的錯配數與位置、濃度、重複次數、平均值與其區間，以及對照事先宣告門檻的判定。' }],
            [{ en: 'Pre-register five things', zh: '事先登記五件事' },
             { en: 'Panel membership, the test concentration, the replicate count per cell, the normalisation rule, and the **numeric** positive-call threshold. One published sensor paper marks a differentiation factor of **20** with a dashed line as its de facto threshold; borrow that or justify your own. Pre-registration costs nothing and converts "we found no cross-reactivity" into a testable claim.', zh: '名單成員、測試濃度、每格的重複次數、標準化規則，以及**數值化的**陽性判定門檻。有一篇已發表的感測器論文以一條虛線標出辨識倍數 **20** 作為它事實上的門檻；借用它，或為你自己的門檻提出理由。事先登記不花任何成本，而它把「我們沒有發現交叉反應」變成一個可被檢驗的主張。' }]
          ]) +
          h.note({
            en: 'One more thing the folding software will not tell you, and it is worth putting in your model section rather than discovering it in September: **the standard tool\'s RNA parameters exist only at one sodium concentration and there is no magnesium correction available for RNA at all** — which is a direct problem for a cell-free reaction, where magnesium is a central component. A 2026 High School team hit exactly this wall and said so on their wiki, attributing part of their prediction-to-measurement mismatch to ionic conditions the tool does not model. **Use the tool to generate and to check crosstalk; do not use it to predict the magnitude of anything.**',
            zh: '還有一件摺疊軟體不會告訴你、而且值得寫進你的模型一節、而不是等到九月才發現的事：**那個標準工具的 RNA 參數只存在於一個鈉濃度下，而且對 RNA 根本沒有可用的鎂修正**——這對一個無細胞反應是直接的問題，因為鎂是其中的核心成分。2026 年有一支高中部隊伍正好撞上這道牆，並在他們的 wiki 上說了出來，把部分的「預測與實測不符」歸因於那個工具沒有建模的離子條件。**用那個工具來產生候選、來檢查交叉反應；不要用它來預測任何東西的大小。**'
          })
      });

      /* ---------------- tools ---------------- */
      out += h.sec({
        id: 'sd-tool',
        kick: { en: 'Logistics', zh: '後勤' },
        h2: { en: 'The oligos are the budget, and the reaction volume is the free lever', zh: '寡核苷酸就是預算，而反應體積是那個免費的槓桿' },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What', zh: '項目' }, w: '22%' },
              { t: { en: 'Why and how', zh: '為什麼、怎麼做' } },
              { t: { en: 'Cost and the trap', zh: '成本與陷阱' }, w: '32%' }
            ],
            rows: [
              [{ en: '**The synthetic RNA inputs**', zh: '**合成 RNA 輸入**' },
               { en: 'One oligo per family member, plus the on-target and the scrambled control. **This is the entire budget and it scales with panel size**, which is why the panel is designed against the bill rather than against the family.', zh: '每個家族成員一條寡核苷酸，加上標的與打亂序列對照。**這就是全部的預算，而它隨名單規模放大**，這也是為什麼名單要依帳單、而不是依家族來設計。' },
               { en: 'RNA is priced per base with a **minimum synthesis scale** far larger than any experiment needs. At the cheaper of two suppliers a 22-mer is about **US$115**; at the other, about **US$209** before purification. **A fourteen-member panel is roughly US$1,600 at the cheaper supplier.** Six to eight members covering the four single-nucleotide pairs is the efficient design.', zh: 'RNA 以每個鹼基計價，而且**最小合成規模**遠大於任何實驗所需。在兩家供應商中較便宜的那家，一條 22 聚體約 **115 美元**；另一家約 **209 美元**，還不含純化。**一組十四個成員的名單，在較便宜那家約 1,600 美元。**六到八個成員、涵蓋那四對單核苷酸配對，是有效率的設計。' }],
              [{ en: '**One tube lasts the whole project**', zh: '**一管撐完整個專案**' },
               { en: 'Worth knowing because it changes how you think about the cost: the minimum synthesis scale is absurdly over-sized for this work. A published reaction volume at a working concentration consumes single-digit picomoles, so one tube covers **thousands of reactions**.', zh: '這件事值得知道，因為它改變你看成本的方式：最小合成規模對這份工作來說大得荒謬。一個已發表的反應體積在工作濃度下消耗的是個位數皮莫耳，所以一管就能覆蓋**數千次反應**。' },
               { en: 'So the oligo is a **fixed cost, not a per-reaction cost** — which is exactly why panel membership, and not replicate count, is where the money goes. Add replicates freely; add family members carefully.', zh: '所以寡核苷酸是一筆**固定成本，不是每次反應的成本**——而這正是為什麼錢花在「名單成員」上，而不是花在「重複次數」上。重複可以放心加；家族成員要小心加。' }],
              [{ en: '**The cell-free reaction**', zh: '**無細胞反應**' },
               { en: 'Where the sensor is read. A reconstituted commercial kit is the reliable choice; a home-made extract is the cheap one but needs a five-day preparation and an exact protocol.', zh: '感測器被讀取的地方。重組型商業套組是可靠的選擇；自製萃取液是便宜的那個，但需要五天的製備與一份精確的流程。' },
               { en: 'Commercial kits run roughly **US$0.4 to 1.3 per microlitre**. **The free cost lever is volume**: published toehold assays run at **1.4 to 1.8 microlitres**, not the 25 to 50 the kit protocol assumes — so a published-scale reaction is about **two dollars**, against nearly thirty for a full one. Home-made extract is published at **about one cent per microlitre**, a 98 % reduction, with one preparation giving roughly three thousand reactions.', zh: '商業套組大約**每微升 0.4 到 1.3 美元**。**免費的成本槓桿是體積**：已發表的 toehold 試驗跑的是 **1.4 到 1.8 微升**，而不是套組流程假設的 25 到 50——所以一個已發表規模的反應約為**兩美元**，而整管接近三十美元。自製萃取液已發表為**每微升約一美分**，降幅 98%，而一次製備約可得三千次反應。' }],
              [{ en: '**An RNase inhibitor**', zh: '**一個核酸酶抑制劑**' },
               { en: 'Not optional for naked short RNA in a crude extract.', zh: '對粗萃取液中的裸露短 RNA，這不是選配。' },
               { en: 'One published study got **no signal at all at 40 nanomolar without it.** Budget it from the pilot onwards, and record the concentration in the protocol.', zh: '有一份已發表研究在**不加它的情況下，40 奈莫耳完全沒有訊號。**從先導試驗就把它編進預算，並把濃度記進流程。' }],
              [{ en: '**The sensor itself**', zh: '**感測器本身**' },
               { en: 'A short DNA template, which is far cheaper than its RNA inputs, and the Registry already holds related parts from several teams.', zh: '一段短的 DNA 模板，比它的 RNA 輸入便宜得多；而 Registry 裡已經有好幾支隊伍的相關元件。' },
               { en: 'Gene fragments run around seven cents per base pair, so the sensor is tens of dollars and a sponsor allowance covers it comfortably if you claim it in the first weeks of the season.', zh: '基因片段大約每個鹼基對七美分，所以感測器是數十美元；而只要你在賽季最初幾週申請，贊助商額度就能舒服地覆蓋它。' }],
              [{ en: '**Free software, used correctly**', zh: '**免費軟體，正確地使用**' },
               { en: 'The folding tools to generate candidate sensors and to check predicted crosstalk against the rest of the panel. One team has published a free design tool aimed at exactly this question — and it has no peer-reviewed validation and an archived repository, so treat it as a starting point rather than an authority.', zh: '那些摺疊工具，用來產生候選感測器、並對照名單其餘成員檢查預測的交叉反應。有一支隊伍公開了一個正是針對這個問題的免費設計工具——而它沒有經同儕審查的驗證、程式倉庫也已封存，所以請把它當成起點，不是權威。' },
               { en: 'Free. And remember what the large datasets say: thermodynamic features are poor predictors of switch performance, so use these tools for generation and crosstalk, not for ranking.', zh: '免費。並記住那些大型資料集說的：熱力學特徵對開關表現的預測力很差，所以把這些工具用在產生候選與交叉反應上，不要用在排名上。' }]
            ],
            min: 1040,
            source: { en: 'Oligo prices read from two suppliers\' public price lists in November 2026; cell-free prices from distributor list pages and from the published home-made extract costing. Per-reaction figures are our arithmetic from the published volumes. All recorded in `notes/2027-idea-sources.md`. Confirm every price yourself before planning a budget.', zh: '寡核苷酸價格讀自兩家供應商 2026 年 11 月的公開價目表；無細胞價格出自經銷商牌價頁與已發表的自製萃取液成本估算。每次反應的數字是我們依已發表體積做的算術。全部記錄在 `notes/2027-idea-sources.md`。在做預算之前請自己確認每一筆價格。' }
          })
      });

      /* ---------------- schedule ---------------- */
      out += h.sec({
        id: 'sd-plan',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'Nothing gets ordered until the pilot answers', zh: '在先導試驗給出答案之前，什麼都不訂' },
        lede: {
          en: 'iGEM has published only the 2027 Jamboree dates — 18 to 21 October 2027. The wiki freeze has fallen 19 to 23 days earlier in each of the last four seasons and has always been a Wednesday, which puts a 2027 freeze near **29 September 2027**. That is our arithmetic, not an announcement.',
          zh: 'iGEM 只公布了 2027 年 Jamboree 的日期——2027 年 10 月 18 至 21 日。過去四個賽季，wiki 凍結日都落在它前面 19 到 23 天，而且一直都是星期三，據此推算 2027 年的凍結日在 **2027 年 9 月 29 日**附近。那是我們的算術，不是公告。'
        },
        body:
          h.fig({
            kind: 'gantt',
            tag: { en: 'SCHEDULE', zh: '行程' },
            title: { en: 'SEEDTEST across the season, in months from the start', zh: 'SEEDTEST 的整季安排，以自起點起算的月份表示' },
            sub: { en: 'Month 0 is your first team meeting; month 9 is the wiki freeze. The decision point is month three: the pilot either clears the project or redirects it, and the panel order waits for it.', zh: '第 0 個月是你們第一次團隊會議；第 9 個月是 wiki 凍結日。決策點在第三個月：先導試驗要嘛放行這個專案、要嘛改變它的方向，而名單的訂購等它。' },
            data: [
              { label: { en: 'Count the family sequences yourself', zh: '自己數那些家族序列' }, start: 0, end: 0.8, tone: 'v', note: { en: 'the obvious family is the easy one', zh: '最明顯的家族是最簡單的' } },
              { label: { en: 'Order the two pilot oligos', zh: '訂購兩條先導寡核苷酸' }, start: 0.5, end: 1.2, tone: 'r' },
              { label: { en: 'Build the sensor template', zh: '建造感測器模板' }, start: 0.8, end: 2, tone: 'b' },
              { label: { en: 'Pre-register the five choices', zh: '事先登記那五個選擇' }, start: 1.5, end: 2.2, tone: 'v', note: { en: 'threshold included', zh: '含門檻' } },
              { label: { en: 'The pilot: does a 22-mer switch anything', zh: '先導：22 聚體能啟動任何東西嗎' }, start: 2, end: 3, tone: 'r', note: { en: 'the project waits here', zh: '專案在這裡等' } },
              { label: { en: 'On-target dose curve, full range', zh: '標的的劑量曲線，全範圍' }, start: 3, end: 4, tone: 'g' },
              { label: { en: 'Order the family panel', zh: '訂購家族名單' }, start: 3.5, end: 4.3, tone: 'b', note: { en: 'only now', zh: '到現在才訂' } },
              { label: { en: 'The matrix, five or six replicates', zh: '那張矩陣，五到六次重複' }, start: 4.5, end: 6.5, tone: 'g' },
              { label: { en: 'Identical and distant pair controls', zh: '相同與遠距配對對照' }, start: 4.5, end: 5.5, tone: 'a' },
              { label: { en: 'The co-spike row', zh: '共加樣那一列' }, start: 5.5, end: 6.5, tone: 'a' },
              { label: { en: 'Outside confirmation of two oligos', zh: '兩條寡核苷酸的外部確認' }, start: 4, end: 6, tone: 'a' },
              { label: { en: 'Registry entries and the matrix dataset', zh: 'Registry 條目與矩陣資料集' }, start: 6.5, end: 8, tone: 'v' },
              { label: { en: 'Write the results page first', zh: '先寫結果頁' }, start: 7.5, end: 8.5, tone: 'r' },
              { label: { en: 'Freeze bundle: wiki, forms, Registry', zh: '凍結包：wiki、表單、Registry' }, start: 8.5, end: 9, tone: 'r' }
            ],
            opts: { min: 0, max: 10 },
            caption: { en: 'Our plan. The gap between the pilot ending and the panel being ordered is deliberate: it is the week in which the team decides, in writing, whether the claim is about microRNAs or about sequences.', zh: '這是我們的計畫。先導試驗結束與名單訂購之間的那個空檔是刻意的：那是團隊書面決定「這個主張是關於微小 RNA，還是關於序列」的那一週。' }
          })
      });

      /* ---------------- risks ---------------- */
      out += h.sec({
        id: 'sd-risk',
        kick: { en: 'Risks', zh: '風險' },
        h2: { en: 'Four ways this goes wrong, and what we would do about each', zh: '這件事出錯的四種方式，以及我們對每一種會怎麼做' },
        body:
          h.cards([
            { chips: [{ t: { en: 'biggest', zh: '最大' }, k: 'r' }],
              h: { en: 'A 22-nucleotide trigger does not work', zh: '22 個核苷酸的觸發子行不通' },
              p: { en: 'The one published attempt got no activation at a hundred micromolar — twenty times a normal working concentration. **This is the risk that would waste the whole budget if the panel were ordered first**, which is why the pilot exists and why nothing is ordered until it answers.', zh: '那唯一一次已發表的嘗試，在一百微莫耳——正常工作濃度的二十倍——下毫無活化。**如果先訂了名單，這就是會浪費掉整個預算的那個風險**；而這正是先導試驗存在的理由，也是「在它給出答案之前什麼都不訂」的理由。' },
              foot: { en: 'Mitigation: the two-oligo pilot in month three, and a written decision between extending the trigger and changing the readout.', zh: '緩解：第三個月的兩條寡核苷酸先導試驗，以及一個「延長觸發子」與「換掉讀值」之間的書面決定。' } },
            { chips: [{ t: { en: 'likely', zh: '很可能' }, k: 'a' }],
              h: { en: 'The sensor cannot resolve one nucleotide', zh: '感測器分不出一個核苷酸' },
              p: { en: 'Expected, and pre-written. The differences in the chosen family sit at position one and in the tail, where a mismatch has only one stacking neighbour and so the smallest thermodynamic penalty — and a purpose-built ultraspecific sensor only reaches a differentiation factor of **5 to 38** in cell-free conditions anyway.', zh: '這是預期中的，也已經事先寫好了。所選家族的差異落在第一位與尾部，那裡的錯配只有一個堆疊鄰居，所以熱力學代價最小——而即使是一個專門設計的超專一感測器，在無細胞條件下也只達到 **5 到 38** 的辨識倍數。' },
              foot: { en: 'Report the differentiation factor with its interval against the identical-pair noise floor, and say which sequence distances are and are not resolvable.', zh: '把辨識倍數連同其區間，對照「相同配對」的雜訊地板報告，並說清楚哪些序列距離分得開、哪些分不開。' } },
            { chips: [{ t: { en: 'invisible', zh: '看不見的' }, k: 'r' }],
              h: { en: 'Two oligos get swapped', zh: '兩條寡核苷酸被調換了' },
              p: { en: 'In a study whose entire output is a matrix of sequence identities, a mislabelled tube at the supplier or in your own freezer produces a wrong result that **no statistic will reveal** — the matrix will look perfectly self-consistent.', zh: '在一份「全部產出就是一張序列身分矩陣」的研究裡，供應商那裡或你自己冷凍櫃裡一支貼錯標籤的管子，會產生一個**任何統計都揭露不出來**的錯誤結果——那張矩陣會看起來完全自洽。' },
              foot: { en: 'Mitigation: outside quantification and identification of at least two inputs, and a photographed tube inventory before the first experiment.', zh: '緩解：對至少兩條輸入做外部定量與鑑定，並在第一個實驗之前拍照留存管子清冊。' } },
            { chips: [{ t: { en: 'presentation', zh: '呈現' }, k: 'a' }],
              h: { en: 'It reads as a negative with nothing in it', zh: '它讀起來像一個「裡面什麼都沒有」的負面結果' },
              p: { en: 'A matrix of blanks persuades nobody. **A negative matrix is worth little without proof that the assay would have detected cross-reactivity had there been any** — and without a stated bound, "we saw none" excludes almost nothing, since zero in three replicates bounds the rate at sixty-three per cent.', zh: '一張全是空格的矩陣說服不了任何人。**一張全是負值的矩陣，如果沒有「要是真有交叉反應、這個試驗本來會偵測到」的證明，價值不高**——而若沒有一個明確的界限，「我們沒看到」幾乎排除不了任何東西，因為三次重複中零次只能把比率限制在百分之六十三。' },
              foot: { en: 'Mitigation: the identical pair as the floor, the distant pair as the ceiling, and every cell reported as a fold-change with an interval rather than a tick.', zh: '緩解：以相同配對作為地板、遠距配對作為天花板，並把每一格都報告成「帶區間的倍數變化」，而不是一個勾。' } }
          ]) +
          h.warn({
            en: 'The limitation we would put on our own results page: **a specificity matrix measured in one cell-free system, at one concentration, with synthetic oligos standing in for real microRNAs, is not a statement about what happens inside a cell.** The published evidence is explicit that cell-free discrimination is several-fold worse than in-cell discrimination for the same designs, so our numbers would be a **lower bound on what is achievable** rather than an estimate of it. And the inputs are bought, not endogenous — their real abundance, their loading into the silencing machinery and their competition with natural targets are all untested. We would write both sentences into the results page rather than the limitations section.',
            zh: '我們會放在自己結果頁上的那個限制：**在一個無細胞系統、一個濃度下、用合成寡核苷酸代替真實微小 RNA 所量到的專一性矩陣，不是關於「細胞內會發生什麼」的陳述。**已發表的證據明確指出，對同樣的設計，無細胞的辨識力比細胞內差上數倍；所以我們的數字會是**對「可達成程度」的一個下界**，而不是對它的估計。而那些輸入是買來的，不是內源的——它們真實的豐度、它們被裝載進沉默機制的過程，以及它們與天然標的的競爭，全都沒有被測試。我們會把這兩句話寫進結果頁，而不是寫進限制一節。'
          })
      });

      /* ---------------- ships ---------------- */
      out += h.sec({
        id: 'sd-ship',
        kick: { en: 'Output', zh: '產出' },
        h2: { en: 'What survives the season, and which awards it maps onto', zh: '什麼會在賽季之後留下來，以及它對應哪些獎項' },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What you would select', zh: '你會選什麼' }, w: '26%' },
              { t: { en: 'Category', zh: '類別' }, w: '20%' },
              { t: { en: 'What this project puts in front of the judges', zh: '這個專案把什麼放到評審面前' } }
            ],
            rows: [
              [{ en: '**Best Measurement**', zh: '**最佳量測**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'A specificity matrix with a measured noise floor, a measured ceiling, a pre-declared threshold, intervals instead of ticks, and an outside confirmation of the inputs. The ballot asks whether other teams could reproduce the measurement — the answer is a protocol, a sequence table with accessions, and a matrix anybody can extend by buying one more oligo.', zh: '一張帶實測雜訊地板、實測天花板、事先宣告門檻、以區間而非勾號呈現，並有輸入外部確認的專一性矩陣。評分項會問其他隊伍能不能重現這個量測——答案是一份流程、一張附序號的序列表，以及一張任何人只要再買一條寡核苷酸就能延伸的矩陣。' }],
              [{ en: '**Best Part Collection**', zh: '**最佳元件集**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The sensor plus the characterised input set, documented as an ensemble: each family member with its accession, its mismatch count and positions, and its measured response. **A collection whose documentation includes what it cannot distinguish is more useful than one that only reports what it can.**', zh: '感測器加上已特性化的輸入組，以「整體」的方式記錄：每個家族成員附上序號、錯配數與位置，以及實測反應。**一個「文件裡包含它分不出什麼」的集合，比一個只報告它分得出什麼的集合有用得多。**' }],
              [{ en: '**Best Model** — framed as crosstalk, not ranking', zh: '**最佳模型**——框架是交叉反應，不是排名' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'A pre-registered prediction of which pairs will fail, drawn from the published terminal-mismatch and wobble literature, measured against outcome. **Do not claim the folding tools rank designs** — the largest measured dataset puts the best thermodynamic feature at an R² of 0.04 — and do mention that the tool\'s RNA parameters have no magnesium correction, which is a real limitation in a cell-free reaction.', zh: '一個事先登記的「哪幾對會失敗」預測，取自已發表的末端錯配與搖擺配對文獻，並對實際結果驗證。**不要主張摺疊工具能為設計排名**——最大的實測資料集把最佳熱力學特徵放在 R² 等於 0.04——而且要提到那個工具的 RNA 參數沒有鎂修正，那在無細胞反應中是一個真實的限制。' }],
              [{ en: '**Best Software**, if you finish the tool', zh: '若你把工具做完，則是**最佳軟體**' },
               { en: 'Specialization', zh: '專項' },
               { en: 'A Gold medal needs at least one Specialization award. There is an unusual opening here: the only tool ever built to quantify an RNA sensor\'s specificity against near-relatives came from an iGEM team, has no peer-reviewed validation, and its repository has been archived since 2022. **A working, validated, maintained replacement — validated against your own matrix — is a genuine contribution**, and the eligibility gate is only that it be open-source in iGEM\'s own repository.', zh: '金牌需要至少一個專項獎。這裡有一個不尋常的機會：唯一一個為「量化 RNA 感測器對近親的專一性」而建造的工具來自一支 iGEM 隊伍，它沒有經同儕審查的驗證，而它的程式倉庫自 2022 年起就被封存。**一個能用、經驗證、有人維護的替代品——而且是用你自己的矩陣驗證的——是一個真實的貢獻**，而資格門檻只是它必須以開源形式放在 iGEM 自己的程式倉庫裡。' }]
            ],
            min: 940,
            source: { en: 'Award categories and criteria are from iGEM\'s 2026 Special Awards and Medals pages, recorded in `notes/2027-idea-sources.md`. In 2026 a Gold medal required excellence toward three Special Awards, at least one from each of the two categories, and **high school is always judged as its own section for every award**. Which to select is our judgement, not iGEM\'s advice.', zh: '獎項類別與標準出自 iGEM 2026 年的 Special Awards 與 Medals 頁面，記錄在 `notes/2027-idea-sources.md`。2026 年金牌要求在三個特別獎上展現卓越，兩個類別各至少一個，而且**每一個獎，高中部都是獨立評比的一個組別**。選哪些是我們的判斷，不是 iGEM 的建議。' }
          }) +
          h.note({
            en: 'The project this one is derived from is Aarhus-University\'s 2026 RiboLogic, on [their own wiki](https://2026.igem.wiki/aarhus-university/) — they are not on this site because they are not in a 2026 Top 10, and we would encourage you to read their model page\'s limitations section in full rather than take our quotation for it. The sibling idea built on the other mechanism our wet-lab team works with is [ENDOREAD](#x-reader); the other three, and the procedure they all went through, are on [Five ideas](#x-ideas) and [the 2027 roadmap](#x-roadmap).',
            zh: '這個題目所衍生自的專案是 Aarhus-University 2026 年的 RiboLogic，在[他們自己的 wiki](https://2026.igem.wiki/aarhus-university/) 上——他們不在本站，因為他們不在 2026 年的前十名之列；而我們會鼓勵你完整讀過他們模型頁的限制一節，而不是相信我們的引文。建立在我們濕式團隊所處理的另一個機制上的姊妹題目是 [ENDOREAD](#x-reader)；另外三個，以及它們全都跑過的那套程序，在[五個題目](#x-ideas)與[2027 選題指南](#x-roadmap)。'
          })
      });

      return out;
    }
  };
})(window);
