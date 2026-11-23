/* Overgrad overview — the comparative analysis across the ten Overgraduate teams. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['og-overview'] = {
    label: { en: 'Overview', zh: '總覽' },
    title: { en: 'Overview: Overgraduate', zh: '總覽——研究生部' },
    render: function (h) {
      var out = '';
      var teams = PD.teamsOG || [];

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · read from ten public wikis · Overgraduate section',
          zh: 'GEMS Research · 讀自十個公開 wiki · 研究生部組'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Every one of these ten wikis publishes a result that ==works against its own project==.',
          zh: '這十個 wiki 每一個都公開了一個==對自己專案不利==的結果。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Ten teams were named to the Top 10 **Overgraduate** list at the iGEM 2026 Grand Jamboree. We read all ten for one thing only: how the work was actually run. What we did not expect to find is that the thing they have most in common is not a technique or a chassis. It is that **all ten report, in their own words, a measurement that undermines something they wanted to claim**: a bacteria-free control that precipitated as much as the treated soil, a model that does not beat sequence length, a headline result reported as not statistically significant, a fluoride reading above the detection limit that the team refuses to call activity.',
          zh: '2026 年 iGEM Grand Jamboree 的 **研究生部**前十名共有十支隊伍。我們把十個 wiki 全部讀過，只為一件事：這些工作實際上是怎麼跑的。我們沒料到的是，它們最大的共同點不是某種技術或某個宿主，而是**十隊全部都用自己的話報告了一個會削弱自己想主張的東西的量測**——一個沉澱量與處理過土壤相當的無菌對照、一個贏不過序列長度的模型、一個被報告為統計上不顯著的招牌結果，以及一個高於偵測極限、而團隊卻拒絕稱之為活性的氟離子讀值。'
        }) + '</p>' +
        h.stats([
          { v: '10', l: { en: 'Teams on the Overgrad Top 10 list, all ten with Gold', zh: '研究生部前十名隊伍，全部拿到金牌' } },
          { v: '10', l: { en: 'Of the ten that publish a named negative result with its cause', zh: '十隊中公開具名負面結果並附上原因的隊數' } },
          { v: '9', l: { en: 'Released a tool, model or dataset another team can pick up', zh: '釋出了別的團隊可以直接接手的工具、模型或資料集' } },
          { v: '8', l: { en: 'Spent an experiment on the measurement before trusting it', zh: '在信任量測之前先花了一個實驗在它身上' } },
          { v: '4', l: { en: 'Take an explicit public position on AI use', zh: '對 AI 使用採取明確公開立場的隊數' } },
          { v: '3', l: { en: 'Report their own headline claim as not established', zh: '把自己的招牌主張報告為「尚未確立」的隊數' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'go-find', t: { en: 'Six findings', zh: '六個發現' } },
        { id: 'go-scope', t: { en: 'The claim ladder', zh: '主張階梯' } },
        { id: 'go-neg', t: { en: 'Ten negative results', zh: '十個負面結果' } },
        { id: 'go-ai', t: { en: 'AI, disclosed', zh: 'AI 的聲明' } },
        { id: 'go-arch', t: { en: 'Four archetypes', zh: '四種原型' } },
        { id: 'go-ug', t: { en: 'Against the Undergrad ten', zh: '與大學部十隊對照' } },
        { id: 'go-ten', t: { en: 'The ten', zh: '十支隊伍' } },
        { id: 'go-what', t: { en: 'What this is', zh: '這是什麼' } },
        { id: 'go-method', t: { en: 'How we read this', zh: '我們怎麼讀的' } },
        { id: 'go-gems', t: { en: 'What we would take', zh: '我們會帶走什麼' } }
      ]);

      /* ---------------- what this is — held back, appended below the analysis ---------------- */
      var secAbout = h.sec({
        id: 'go-what',
        kick: { en: 'What this is', zh: '這是什麼' },
        h2: { en: 'A workflow study of the Overgraduate section, in the same terms as the Undergraduate one', zh: '一份研究生部的工作流程研究，用與大學部相同的語彙' },
        body:
          h.cards([
            { chips: [{ t: { en: 'what it is', zh: '它是什麼' }, k: 'g' }],
              h: { en: 'Ten workflows, described in the same order', zh: '十條工作流程，用同樣的順序描述' },
              p: { en: 'Each team page answers the same questions: the design decision, where the two lanes touched, the wet-lab pipeline, what counted as a result, the model and software stack, what failed, and what we would copy. The Undergraduate section of this site is built the same way, so the two divisions can be read against each other.', zh: '每個團隊頁都回答同樣的問題：設計決策、兩條泳道在哪裡相接、濕式流程、什麼算一個結果、模型與軟體堆疊、什麼失敗了，以及我們會抄什麼。本站的大學部也是用同一套方式建的，所以兩個組別可以互相對照閱讀。' } },
            { chips: [{ t: { en: 'what it is not', zh: '它不是什麼' }, k: 'r' }],
              h: { en: 'Not our results, and not a ranking', zh: '不是我們的成果，也不是排名' },
              p: { en: 'We measured nothing. Every number belongs to the team that produced it and links to the page it came from. iGEM published the Grand Prize and one runner-up for this section and listed the remaining eight alphabetically; **no Overgrad 2nd Runner-up appears on the official page**, and we do not infer an order where none was published.', zh: '我們沒有量測任何東西。每個數字都屬於產出它的隊伍，並連回它的來源頁。iGEM 為這個組別公布了首獎與一位 runner-up，其餘八隊依字母順序列出；**官方頁面上沒有研究生部第三名**，而我們不會在沒有公布名次的地方推測名次。' } },
            { chips: [{ t: { en: 'who it is for', zh: '給誰看' }, k: 'b' }],
              h: { en: 'Written by a student team, for student teams', zh: '由學生團隊寫給學生團隊' },
              p: { en: 'Compiled by GEMS Research (Taiwan), whose own 2026 project was in the High School Top 10 that year. The practices we single out are the ones we think a team with a modest budget can actually adopt, which is why so many of them are about what you write down rather than what you buy.', zh: '由 GEMS Research（台灣）彙編；我們自己 2026 年的專案同年進入高中部前十名。我們特別點出的做法，都是我們認為預算有限的團隊真的採用得起的——這也是為什麼其中有這麼多是關於「你寫下什麼」，而不是「你買了什麼」。' } }
          ])
      });

      /* ---------------- the ten — held back, appended below the analysis ---------------- */
      var secTen = h.sec({
        id: 'go-ten',
        kick: { en: 'The ten', zh: '十支隊伍' },
        h2: { en: 'Top 10 Overgraduate, iGEM 2026', zh: 'iGEM 2026 研究生部前十名' },
        lede: {
          en: 'The Grand Prize and the 1st Runner-up first, then the remaining eight alphabetically, exactly as the official results page lists them. Click a card to open that team\'s workflow page.',
          zh: '先列首獎與第二名，其餘八隊依字母順序，與官方成績頁的列法完全一致。點一張卡片即可打開該隊的工作流程頁。'
        },
        body:
          '<div class="g2">' + teams.map(function (t) {
            var k = t.rank === 1 ? 'g' : (t.rank === 2 ? 'b' : 'n');
            return '<div class="card lift" data-go="og-' + t.id + '" style="cursor:pointer">' +
              h.chips([{ t: t.award, k: k }, { t: t.village, k: 'n' }]) +
              '<h4 style="margin-top:9px">' + h.esc(t.flag + '  ' + t.name) + ' · <span style="color:var(--blue)">' + h.esc(t.project) + '</span></h4>' +
              '<p>' + h.md(t.one) + '</p>' +
              '<p class="small" style="margin-top:10px"><b>' + h.T({ en: 'Chassis', zh: '宿主' }) + ':</b> <span class="mono">' + h.esc(t.chassis) + '</span></p>' +
              '</div>';
          }).join('') + '</div>' +
          h.note({
            en: 'All ten received Gold. Village awards inside this cohort: **TU Delft** Best Biomanufacturing Project, **Athens** Best Conservation Project and **KAUST-KSA** Best Space Project (all three across Undergrad and Overgrad together), **WageningenUR** Best Bioremediation Project (Overgrad) and **ETH-Zurich** Best Foundational Advance Project (Overgrad). Village-award nominees: GU Frankfurt (Therapeutics), Marburg (Foundational Advance), Muenster-University (Agriculture), Toronto (Bioremediation) and UZurich (Conservation). Source: [competition.igem.org/results/2026](https://competition.igem.org/results/2026).',
            zh: '十隊全部獲得金牌。本組別內的村獎：**TU Delft** 最佳生物製造專案、**Athens** 最佳保育專案、**KAUST-KSA** 最佳太空專案（這三個是大學部與研究生部合併評選），以及 **WageningenUR** 最佳生物復育專案（研究生部）與 **ETH-Zurich** 最佳基礎推進專案（研究生部）。村獎入圍：GU Frankfurt（治療）、Marburg（基礎推進）、Muenster-University（農業）、Toronto（生物復育）、UZurich（保育）。資料來源：[competition.igem.org/results/2026](https://competition.igem.org/results/2026)。'
          })
      });

      /* ---------------- six findings ---------------- */
      out += h.sec({
        id: 'go-find',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'Six things the ten Overgrad wikis say when you read them together', zh: '把研究生部十個 wiki 一起讀時，它們共同說出的六件事' },
        lede: {
          en: 'These are our conclusions, drawn from the ten team pages on this site. Each one names the teams it rests on, so you can disagree with it precisely. The ten are [listed further down](#go-ten), with what this study is and is not.',
          zh: '以下是我們從本站十個團隊頁得出的結論。每一條都點出它依據哪些隊伍，讓你可以精確地提出不同意見。十支隊伍[列在下方](#go-ten)，連同這份研究是什麼、不是什麼。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: '1', zh: '1' }, k: 'b' }],
              h: { en: 'The strongest wikis publish the control that cost them the claim', zh: '最強的 wiki 都公開了那個讓自己失去主張的對照' },
              p: { en: 'UZurich\'s soil columns cannot show biological cementation, because the **CaCl₂-treated soil without bacteria precipitated as much as the treated columns.** Marburg\'s protection assay collapsed because the **enzyme-free mock fell 98-fold against the nuclease\'s 97-fold**: the buffer, not the enzyme. Muenster published an *E. coli* screen in which **GFP appeared in protease-free lanes and in the mutated-site control.** In every case the control is what makes the rest of the page believable.', zh: 'UZurich 的土柱無法證明生物性膠結，因為**只加 CaCl₂、不加菌的土壤，沉澱量與處理過的管柱相當。**Marburg 的保護試驗崩掉，是因為**不含酵素的空白組下降 98 倍，而含核酸酶的是 97 倍**——問題在緩衝液，不在酵素。Muenster 公開了一個大腸桿菌篩選，其中**不含蛋白酶的道與突變切位對照都出現 GFP。**每一個案例裡，正是那個對照讓同一頁其餘部分變得可信。' } },
            { chips: [{ t: { en: '2', zh: '2' }, k: 'v' }],
              h: { en: 'The dry lab\'s best output is often a fixed tool, not a prediction', zh: '乾式實驗最好的產出常常是一個修好的工具，而不是一個預測' },
              p: { en: 'KAUST found the published *B. subtilis* model **iBsu1147 does not grow anaerobically**, engineered in two pathways and released the revised model, "one of the most important outputs of our dry lab team", and the thing every anaerobic conclusion depends on. Wageningen **added a random seed to MAWS**, which recorded none. Toronto ships an **evaluation protocol** and says it is what they most want reused. TU Delft wrote an **LCST Extractor** so nobody has to eyeball numbers off a published figure.', zh: 'KAUST 發現已發表的 *B. subtilis* 模型 **iBsu1147 在厭氧下長不起來**，於是補進兩條路徑並釋出修訂版——那是「我們乾式實驗團隊最重要的產出之一」，也是每一個厭氧結論所依賴的東西。Wageningen **為 MAWS 補上了隨機種子**，而原本它一個都不記錄。Toronto 釋出的是一套**評估協議**，並說那才是他們最希望被重複使用的東西。TU Delft 寫了一個 **LCST Extractor**，讓沒有人需要再用眼睛從已發表的圖上估數字。' } },
            { chips: [{ t: { en: '3', zh: '3' }, k: 'g' }],
              h: { en: 'A baseline you run yourself beats a baseline you cite', zh: '自己跑過的基準勝過引用來的基準' },
              p: { en: 'Marburg could not compare an NEB-calculator prediction with the original GRASP toolbox\'s **measured** fidelity, so they **ran the original overhangs through the same calculator**: 78 % against their 82 %, on one scale. TU Delft benchmarked its LCST model against **three** baselines including "what a researcher would actually do". ETH established resolvability by **re-drawing six proteins 2,000 times** and reporting every margin that spans zero as unresolvable.', zh: 'Marburg 無法把 NEB 計算器的預測值和原始 GRASP 工具箱的**實測**保真度相比，所以他們**把原始黏端也丟進同一個計算器**——78% 對他們的 82%，在同一個尺度上。TU Delft 把自己的 LCST 模型對上**三個**基準，其中一個是「研究者實際上會怎麼做」。ETH 則以**把六個蛋白隨機重抽 2,000 次**來建立可解析性，並把每一個跨越零的差距都報告為無法解析。' } },
            { chips: [{ t: { en: '4', zh: '4' }, k: 't' }],
              h: { en: 'Human practices chose numbers, not just directions', zh: '社會實踐工作選的是數字，不只是方向' },
              p: { en: 'Toronto\'s **North Star Goal is room temperature** because wastewater operators said 70 °C enzymes are industrially useless. Muenster\'s **first experimental goal is how small the blocker can be**, because EU NGT-1 rules restrict insertions. UZurich\'s two local families produced **"protect, refuse or relocate: the choice belongs to residents"**, a finding against the project\'s own premise. Athens treats **adoption friction as an efficacy variable**: a treatment only well-resourced beekeepers can run does not protect pollinators at landscape scale.', zh: 'Toronto 的**北極星目標是室溫**，因為廢水操作人員說需要 70 °C 的酵素在工業上沒有用。Muenster 的**第一個實驗目標是「阻斷子可以做到多小」**，因為歐盟 NGT-1 規範限制插入序列。UZurich 訪談的兩戶當地家庭產生了**「防護、拒絕或遷村：選擇權屬於居民」**——一個與專案自身前提相左的發現。Athens 則把**採用門檻當成一個效力變數**：一種只有資源充足的蜂農才跑得動的療法，無法在地景尺度上保護授粉者。' } },
            { chips: [{ t: { en: '5', zh: '5' }, k: 'a' }],
              h: { en: 'Eight of the ten spent an experiment on the measurement first', zh: '十隊中有八隊先花了一個實驗在量測本身上' },
              p: { en: 'Wageningen rebuilt a qualitative fluoride assay into a quantitative one, **LOD 3.8 µM and LOQ 11.6 µM from ten blank wells**, and published where it fails. KAUST optimised the irradiation dose range **on wild type before comparing any engineered strain.** Marburg validated **each cell-free batch against the previous batch**, not only against a standard. Toronto titrated copper toxicity and ran a leakage control **before** the first assay. The pattern is that the method gets a results section of its own.', zh: 'Wageningen 把一個只能定性的氟離子分析法重建成可定量的，**以十個空白孔定出 LOD 3.8 µM 與 LOQ 11.6 µM**，並公開它失效的地方。KAUST **在比較任何改造菌株之前，先在野生型上**把照射劑量範圍最佳化。Marburg 把**每一批無細胞萃取物對照上一批驗證**，而不只是對照標準品。Toronto 在第一個試驗**之前**就滴定了銅毒性並做了滲漏對照。這個模式就是：方法本身拿到了一個屬於它自己的結果章節。' } },
            { chips: [{ t: { en: '6', zh: '6' }, k: 'b' }],
              h: { en: 'The platform teams all answer "what does the robustness cost?"', zh: '做平台的隊伍都回答了「這個強健性要付什麼代價？」' },
              p: { en: 'KAUST compared FfIBP yield in wild-type against Dsup *B. subtilis* and found **comparable recovery**, so radiation protection does not cost the payload. UZurich gave WT, G1 and G2 calcium chloride to check that **an evolved strain still precipitates.** TU Delft asked whether inverse transition cycling leaves the protein termini free, because the motifs have to go there. A platform claim without this control is a component claim.', zh: 'KAUST 比較了野生型與帶 Dsup 的 *B. subtilis* 的 FfIBP 產量，發現**回收量相當**，所以輻射保護並不以酬載為代價。UZurich 給野生型、G1 與 G2 都加了氯化鈣，檢查**演化後的菌株是否還會沉澱。**TU Delft 則追問逆相變循環是否讓蛋白兩端保持空白，因為那些 motif 必須接在那裡。一個沒有這道對照的平台主張，其實只是一個元件主張。' } }
          ], 'g2')
      });

      /* ---------------- claim ladder ---------------- */
      out += h.sec({
        id: 'go-scope',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'Five rungs between "we have a reading" and "we have a result"', zh: '從「我們讀到一個數」到「我們有一個結果」之間的五階' },
        lede: {
          en: 'This ladder is ours, not theirs. We built it because the Overgrad cohort differs from the Undergrad one mainly in how precisely it states what a number is allowed to support, so a scale for that is the useful comparison.',
          zh: '這個階梯是我們的，不是他們的。我們之所以建它，是因為研究生部這一組與大學部最大的差別，就在於它們多精確地交代「一個數字被允許支撐什麼」——所以為這件事做一個尺度，才是有用的比較方式。'
        },
        body:
          h.fig({
            kind: 'custom',
            tag: { en: 'OUR FRAMEWORK', zh: '我們的框架' },
            title: { en: 'The measurement ladder, as we read it across the twenty Top 10 wikis', zh: '量測階梯：我們橫跨二十個前十名 wiki 的判讀' },
            sub: { en: 'A judgement of ours, not a report of what any wiki says. Higher is stronger.', zh: '這是我們的判斷，不是任何 wiki 的陳述。越高越強。' },
            caption: { en: 'The same ladder appears on the Undergraduate overview. Drawn by wf.js.', zh: '同一個階梯也出現在大學部總覽上。由 wf.js 繪製。' },
            svg: function (W) { return w.WF.d.ladder(W); }
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Rung', zh: '階' }, w: '16%' },
              { t: { en: 'What it means', zh: '它的意思' } },
              { t: { en: 'Clearest example in this cohort', zh: '本組別中最清楚的例子' }, w: '32%' }
            ],
            rows: [
              [{ en: '**1 · A reading**', zh: '**1 · 一個讀值**' },
               { en: 'An instrument returned a number. Nothing has been established about the sample yet.', zh: '儀器回傳了一個數字。關於樣品本身還什麼都沒有確立。' },
               { en: 'TU Delft\'s rheometer torque at 136–170 nN·m against a calculated inertial torque of 166.4: "the moduli reported for these runs do not describe the sample."', zh: 'TU Delft 的流變儀扭矩 136–170 nN·m，而計算出的慣性扭矩是 166.4——「這些測試回報的模數並不描述樣品。」' }],
              [{ en: '**2 · A reading with a floor**', zh: '**2 · 有底線的讀值**' },
               { en: 'The limit of detection and the limit of quantification are known, so you can tell whether the number is allowed to mean anything.', zh: '偵測極限與定量極限都已知，所以你能判斷這個數字是否被允許代表任何事。' },
               { en: 'Wageningen\'s ~10 µM fluoride, above a 3.1 µM LOD and below a 9.37 µM LOQ: "we are hesitant to call this TFA activity."', zh: 'Wageningen 的約 10 µM 氟離子，高於 3.1 µM 的 LOD、低於 9.37 µM 的 LOQ：「我們不敢把這稱為 TFA 活性。」' }],
              [{ en: '**3 · A reading with a control in the same run**', zh: '**3 · 同批次有對照的讀值**' },
               { en: 'A negative control that would catch the most likely artefact was run alongside, not borrowed from another day.', zh: '一個能抓到最可能假象的陰性對照是同批跑的，不是從別天借來的。' },
               { en: 'Toronto\'s copper-leakage test and its two separate GFP negative controls; Muenster\'s p19-only infiltration and trypan blue.', zh: 'Toronto 的銅滲漏測試與兩個分開的 GFP 陰性對照；Muenster 只打 p19 的浸潤與 trypan blue 染色。' }],
              [{ en: '**4 · A result with its proxy declared**', zh: '**4 · 已聲明代理性質的結果**' },
               { en: 'The team says what the measurement is a proxy for, and how far the proxy can be pushed.', zh: '團隊說清楚這個量測是什麼的代理指標，以及這個代理能被推到多遠。' },
               { en: 'Athens on OD₆₀₀: "our percentage reductions are lower bounds on killing rather than estimates of it", with a 1.5-fold gap separating recovery from death.', zh: 'Athens 對 OD₆₀₀ 的說法：「我們的百分比下降是殺菌的下界，而不是對殺菌的估計」，而 1.5 倍的差距就分開了恢復與死亡。' }],
              [{ en: '**5 · A result that survives its own reanalysis**', zh: '**5 · 撐過自己再分析的結果**' },
               { en: 'The team looked again with a better method and kept the narrower claim.', zh: '團隊用更好的方法再看一次，並保留較窄的那個主張。' },
               { en: 'Athens again: "We had previously argued that the absence of a dose-response was evidence of no off-target activity. That argument does not survive our own analysis."', zh: '又是 Athens：「我們先前主張，沒有劑量反應就是沒有脫靶活性的證據。那個論證撐不過我們自己的分析。」' }]
            ],
            min: 800,
            source: { en: 'The ladder and the placements are ours. The quotations are the teams\' own.', zh: '階梯與各階的歸位是我們做的。引文都是各隊自己的話。' }
          }) +
          h.take({ en: 'The practice we would copy before any other', zh: '我們會第一個抄的那個做法' }, {
            en: 'KAUST-KSA does something almost no other wiki in either division does: it **scopes the claim inside the sentence that makes it.** "Genetic integration and radiation-testing activities should be distinguished from a demonstrated increase in resistance." A limitations section at the end of a page is read by a judge and nobody else; a clause inside the claim is read by everyone who reads the claim, including whoever later cites it.',
            zh: 'KAUST-KSA 做了一件兩個組別裡幾乎沒有其他 wiki 會做的事：它**把主張的範圍寫在提出那個主張的同一句話裡。**「基因整合與輻射測試活動，應與已證明的抗性提升區分開來。」放在頁面最後的限制一節只有評審會讀，其他人不會；而寫在主張裡的那個子句，每個讀到那個主張的人都會讀到，包括之後引用它的人。'
          })
      });

      /* ---------------- ten negative results ---------------- */
      out += h.sec({
        id: 'go-neg',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'The named negative result on each of the ten wikis', zh: '十個 wiki 上各自具名的那個負面結果' },
        lede: {
          en: 'One per team, chosen as the most useful to a reader rather than the most serious. What makes this cohort unusual is not that failures exist. It is that in every case the wiki attaches a cause.',
          zh: '每隊一則，挑的是對讀者最有用的那個，而不是最嚴重的那個。這一組特別的地方不是「有失敗」——而是每一個案例的 wiki 都附上了原因。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '15%' },
              { t: { en: 'What they published', zh: '他們公開了什麼' } },
              { t: { en: 'The cause they give', zh: '他們給出的原因' }, w: '28%' }
            ],
            rows: [
              [{ en: '**TU Delft**', zh: '**TU Delft**' },
               { en: 'Single-step cobalt IMAC did not deliver a pure product; flow nearly stopped at 0.125 mL/min against 1.33 for the all-lysine construct, and protein stayed on the resin after elution.', zh: '單步鈷離子 IMAC 無法得到純產物；流速幾乎停在 0.125 mL/min，而全離胺酸構建體是 1.33，而且洗提後蛋白仍留在樹脂上。' },
               { en: 'Phase transition **on the column**: binding concentrates the ELP on the bead, and both salt and local concentration lower T_t. And they refuse to call it proved.', zh: '**在管柱上**發生相變——結合把 ELP 濃縮在珠體上，而鹽與局部濃度都會降低 T_t。而他們拒絕說這已被證明。' }],
              [{ en: '**WageningenUR**', zh: '**WageningenUR**' },
               { en: 'No screened enzyme showed TFA activity at any time point to 93 h; 13 of 14 riboswitches gave no response, and the one that worked was for PFOA, not TFA.', zh: '篩選的酵素到 93 小時都沒有任何 TFA 活性；14 個核開關中有 13 個沒有反應，而成功的那一個是針對 PFOA、不是 TFA。' },
               { en: 'Every trace at or below the strain-specific limit of detection, and the LOQ is published beside it.', zh: '每條曲線都在該菌株的偵測極限上或以下，而定量極限就印在它旁邊。' }],
              [{ en: '**Athens**', zh: '**Athens**' },
               { en: 'DeepSoluE predicted both candidates soluble; the great majority of all four proteins went into inclusion bodies under both induction regimes.', zh: 'DeepSoluE 預測兩個候選都可溶；但四個蛋白的絕大部分在兩種誘導條件下都進了包涵體。' },
               { en: '"A sequence-based solubility prediction, at least for this enzyme class in this host, did not forecast the behaviour we observed."', zh: '「至少對這個酵素類別在這個宿主中，一個基於序列的溶解度預測並未預測到我們觀察到的行為。」' }],
              [{ en: '**ETH-Zurich**', zh: '**ETH-Zurich**' },
               { en: 'The de novo anti-CD20 binder gave 9.1 % GFP⁺ against ~3 % in every control, and the difference is reported as **not statistically significant.**', zh: '新設計的 anti-CD20 結合蛋白給出 9.1% GFP⁺，而所有對照約 3%——但這個差異被報告為**統計上不顯著。**' },
               { en: 'The duplicate was flagged by FlowJo as an irregular acquisition and discarded, even though it read higher.', zh: '那個重複樣品被 FlowJo 標記為異常取樣而被丟棄，即使它的讀值更高。' }],
              [{ en: '**GU Frankfurt**', zh: '**GU Frankfurt**' },
               { en: 'The HLA-into-PiggyBac construct never assembled despite multiple HiFi attempts, so no stable cell line exists; and HUSH\'s validation Western blots indicated broad off-target hits.', zh: '把 HLA 接入 PiggyBac 的構建體在多次 HiFi 嘗試後仍未組起來，所以不存在穩定細胞株；而 HUSH 驗證用的西方墨點顯示有廣泛的脫靶命中。' },
               { en: '"As all experiments were only conducted once, this does not represent a definitive verdict on whether allele-selective shRNA designs are feasible."', zh: '「由於所有實驗都只做了一次，這並不構成『依等位基因選擇性的 shRNA 設計是否可行』的最終結論。」' }],
              [{ en: '**KAUST-KSA**', zh: '**KAUST-KSA**' },
               { en: 'Dsup improves survival in every assay they ran — and none of those assays can establish that it protects DNA.', zh: 'Dsup 在他們跑的每一個試驗中都提升了存活——而那些試驗沒有一個能確立它保護了 DNA。' },
               { en: 'Every readout measures growth, metabolic activity or survival. The comet assay is the missing measurement, and the protocol is published without having been run.', zh: '每一種讀值量的都是生長、代謝活性或存活。彗星試驗是缺少的那個量測，而流程已公開、但還沒跑過。' }],
              [{ en: '**Marburg**', zh: '**Marburg**' },
               { en: 'The Protecting approach gave no measurable regulation, and the Resolving approach gave a flat titration across a 50-fold range.', zh: 'Protecting 路線沒有可量測的調控效果，而 Resolving 路線在 50 倍濃度範圍內的滴定完全持平。' },
               { en: 'Protecting: the **enzyme-free mock fell 98-fold**. It was the buffer. Resolving: a PPR releases **−8 kcal/mol** against hairpins predicted at −21 to −38.', zh: 'Protecting：**不含酵素的空白組下降 98 倍**——原因是緩衝液。Resolving：PPR 釋出 **−8 kcal/mol**，而髮夾預測為 −21 到 −38。' }],
              [{ en: '**Muenster-University**', zh: '**Muenster-University**' },
               { en: 'The *E. coli* cleavage screen could not be read: GFP appeared in protease-free samples and in the mutated-site negative control. And the FRET negative control CS03M cleaved too.', zh: '大腸桿菌切割篩選讀不出來：不含蛋白酶的樣品與突變切位陰性對照都出現 GFP。而 FRET 的陰性對照 CS03M 也被切了。' },
               { en: '"Our PCS construct was cleaved by something other than our NIa-Pro protease." And: "the results are likely flawed and should be repeated."', zh: '「我們的切割位構建體是被某個不是 NIa-Pro 的東西切開的。」以及：「這些結果很可能是有缺陷的，應該重做。」' }],
              [{ en: '**Toronto**', zh: '**Toronto**' },
               { en: 'With homology leakage removed, the two no-model controls outscore both embeddings **on all twelve target sets**: sequence length ρ = +0.343 on kcat against −0.217 for their own fine-tuned model.', zh: '移除同源洩漏之後，兩個不需要模型的對照**在全部十二個標的集合上**都勝過兩種嵌入：序列長度在 kcat 上 ρ = +0.343，而他們自己微調的模型是 −0.217。' },
               { en: '"Without the component split, we would have reported the inflated numbers." 90–92 % of labelled sequences have a homologous relative in the set.', zh: '「如果沒有依成分切分，我們就會報告那些被吹大的數字。」已標註序列中有 90–92% 在集合中存在同源近親。' }],
              [{ en: '**UZurich**', zh: '**UZurich**' },
               { en: 'In soil, CaCl₂-treated soil **without bacteria** showed vaterite and calcite comparable to the treated columns. Plus: calcium depletion, XRF, gravimetry and stability measurements all failed.', zh: '在土壤中，只加 CaCl₂、**不加菌**的土壤，其球霰石與方解石含量與處理過的管柱相當。另外：鈣耗竭、XRF、重量分析與穩定性量測全部失敗。' },
               { en: 'Abiotic precipitation, so the soil columns cannot demonstrate biological cementation. Stated in one sentence in the conclusion, unhedged.', zh: '非生物性沉澱——所以那些土柱無法證明生物性膠結。在結論裡以一句話寫出，沒有任何緩和修飾。' }]
            ],
            min: 860,
            source: { en: 'Each entry is read from that team\'s own wiki, and linked on the team page. Which failure is "most useful to a reader" is our judgement.', zh: '每一條都讀自該隊自己的 wiki，並在團隊頁上附連結。至於哪個失敗「對讀者最有用」，是我們的判斷。' }
          }) +
          h.fig({
            kind: 'custom',
            tag: { en: 'OUR FRAMEWORK', zh: '我們的框架' },
            title: { en: 'What a team can do with a failed experiment', zh: '一支團隊能拿一個失敗的實驗做什麼' },
            sub: { en: 'Our taxonomy, not theirs. The useful distinction is not whether a failure is reported but whether it is given a mechanism and a next step.', zh: '這是我們的分類，不是他們的。有用的區分不在於失敗有沒有被報告，而在於它有沒有被給出機制與下一步。' },
            caption: { en: 'The same taxonomy appears on the Undergraduate overview. Drawn by wf.js.', zh: '同一個分類也出現在大學部總覽上。由 wf.js 繪製。' },
            svg: function (W) { return w.WF.d.failure(W); }
          })
      });

      /* ---------------- AI ---------------- */
      out += h.sec({
        id: 'go-ai',
        kick: { en: 'New in 2026', zh: '2026 年的新現象' },
        h2: { en: 'Four of the ten take an explicit public position on AI use', zh: '十隊中有四隊對 AI 使用採取明確的公開立場' },
        lede: {
          en: 'This did not exist as a wiki section in previous years, and in 2026 it exists in four mutually incompatible forms. We think the disagreement is more interesting than any one position.',
          zh: '這在往年並不是 wiki 的一個章節，而在 2026 年它以四種彼此不相容的形式存在。我們認為這個分歧本身比任何單一立場都更有意思。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'The position, in their words', zh: '他們自己的說法' } }
            ],
            rows: [
              [{ en: '**ETH-Zurich**', zh: '**ETH-Zurich**' },
               { en: 'A full disclosure on the software page: the model named (Claude Opus via Claude Code), what it wrote (the browser application, test suites, CLI, accessibility and security audits, CI config, prior-art searching "by reading the primary papers rather than summarizing abstracts"), **what it did not do, "no scientific claim, measured value, figure or citation here was produced by a model"**, and how it was evaluated: "every check the model wrote was read by a team member and then run."', zh: '在軟體頁上做了完整聲明：指名模型（透過 Claude Code 使用的 Claude Opus）、它寫了什麼（瀏覽器應用程式、測試套件、CLI、無障礙與安全稽核、CI 設定，以及「以閱讀原始論文而非摘要摘要的方式」做先前技術檢索）、**它沒做什麼——「本頁沒有任何科學主張、量測值、圖表或引用是由模型產生的」**——以及它如何被評估：「模型寫的每一個檢查都由一位團隊成員讀過、然後執行。」' }],
              [{ en: '**UZurich**', zh: '**UZurich**' },
               { en: 'A dedicated page split by sub-team, opening "AI is a tool. The choice about how it gets deployed and used is ours." The epistemics are spelled out: **"Comparisons between AI Models can help identify disagreements, although agreement alone does not establish that a prediction is correct"**. There is also a candid criticism of the tool: "the outputs were overly over-complicated and added unnecessary boiler code."', zh: '一個依分組劃分的專門頁面，開頭是「AI 是一個工具。至於它怎麼被部署與使用，選擇是我們的。」並把知識論立場寫明——**「不同 AI 模型之間的比較可以幫助找出分歧，但光是意見一致並不能確立某個預測是正確的」**——以及一句對工具的直言批評：「那些輸出過度複雜，而且加了不必要的樣板程式。」' }],
              [{ en: '**KAUST-KSA**', zh: '**KAUST-KSA**' },
               { en: 'No manifesto, but every AI-generated illustration is captioned as one: "Card illustrations: **Generated with GPT-6.**" Twice on the project description page, once per card set.', zh: '沒有宣言，但每一張 AI 生成的插圖都在圖說中標明：「卡片插圖：**以 GPT-6 生成。**」在專案描述頁上出現兩次，每組卡片一次。' }],
              [{ en: '**GU Frankfurt**', zh: '**GU Frankfurt**' },
               { en: 'Three words in the site footer, on every page: **"No AI was used."**', zh: '網站頁尾上、每一頁都有的四個字：**「沒有使用 AI。」**' }]
            ],
            min: 680,
            source: { en: 'Read from each team\'s own wiki. The grouping is ours.', zh: '讀自各隊自己的 wiki。分組是我們做的。' }
          }) +
          h.take({ en: 'What we take from the disagreement', zh: '我們從這個分歧裡取走什麼' }, {
            en: 'The four positions are not reconcilable, and they do not need to be. What they share is that **a reader can tell what was done.** The line we would put in our own wiki is UZurich\'s, because it is the only one that addresses verification rather than attribution: two models agreeing is not evidence. And the practice we would adopt is KAUST\'s, because a caption costs nothing and survives being quoted out of context.',
            zh: '這四種立場無法彼此調和，而它們也不需要調和。它們的共同點是：**讀者能判斷實際上做了什麼。**我們會放進自己 wiki 的那一句是 UZurich 的，因為那是唯一一句處理「驗證」而不只是「出處」的：兩個模型一致並不是證據。而我們會採用的做法是 KAUST 的，因為一行圖說不花任何成本，而且即使被斷章引用也還站得住。'
          })
      });

      /* ---------------- archetypes ---------------- */
      out += h.sec({
        id: 'go-arch',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'Four workflow archetypes, and what each one needs to work', zh: '四種工作流程原型，以及各自需要什麼才行得通' },
        lede: {
          en: 'Our grouping of the ten, by where the project\'s weight sits. Every team does some of all four; we are naming where the centre of gravity is.',
          zh: '我們依「專案重量放在哪裡」把十隊分組。每支隊伍四種都做了一些；我們命名的是重心所在。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'A · corpus-first', zh: 'A · 語料優先' }, k: 'b' }],
              h: { en: 'Toronto, Athens', zh: 'Toronto、Athens' },
              p: [
                { en: 'Mine public data at a scale no bench can match, then spend the season making the screen that can test any of it. **Needs:** an evaluation protocol that cannot flatter you, and a filter written from the application backwards.', zh: '以實驗檯無法企及的規模挖掘公開資料，再把整季花在「能測試其中任何一個」的篩選方法上。**需要：**一套無法對你有利的評估協議，以及一道從應用端往回寫的篩選。' },
                { en: 'Toronto\'s 307 M candidates are useless without the copper assay; Athens\' 165 genomes are useless without the two-protein pair that makes a specificity claim testable.', zh: 'Toronto 的 3.07 億個候選，沒有那個銅試驗就沒有用；Athens 的 165 個基因體，沒有那一對讓專一性主張可被檢驗的雙蛋白設計也沒有用。' }
              ] },
            { chips: [{ t: { en: 'B · platform-first', zh: 'B · 平台優先' }, k: 'g' }],
              h: { en: 'TU Delft, ETH-Zurich, KAUST-KSA', zh: 'TU Delft、ETH-Zurich、KAUST-KSA' },
              p: [
                { en: 'Build the thing that makes the next thing cheap: one backbone with exchangeable functions, one syringe with an exchangeable binder, one reactor with an exchangeable strain. **Needs:** a module boundary you can defend, and the control that proves modularity costs nothing.', zh: '做出讓下一件事變便宜的那個東西：一條可換功能的骨架、一支可換結合蛋白的針筒、一台可換菌株的反應器。**需要：**一個你守得住的模組邊界，以及一道證明「模組化不用付代價」的對照。' },
                { en: 'TU Delft\'s nine-insert Golden Gate, ETH\'s one-hour room-temperature conjugation and KAUST\'s single-copy Dsup are all the same move: make the swap the easy part.', zh: 'TU Delft 的九插入 Golden Gate、ETH 的室溫一小時接合、KAUST 的單拷貝 Dsup，都是同一個動作：讓「替換」成為最容易的那一步。' }
              ] },
            { chips: [{ t: { en: 'C · mechanism-first', zh: 'C · 機制優先' }, k: 'v' }],
              h: { en: 'Marburg, Muenster-University, GU Frankfurt', zh: 'Marburg、Muenster-University、GU Frankfurt' },
              p: [
                { en: 'Attempt several mechanisms on purpose, and let the one that works tell you why the others did not. **Needs:** an energy or stoichiometry budget you can compute, and the discipline to publish the mechanism of each failure.', zh: '刻意同時嘗試幾種機制，再讓成功的那個告訴你其他為什麼不行。**需要：**一個你算得出來的能量或化學計量預算，以及把每個失敗的機制都公開的紀律。' },
                { en: 'Marburg\'s three approaches collapse to one design rule; Muenster\'s two screens collapse to one missing control; Frankfurt\'s synNotch + shRNA join is a mechanism nobody had tried.', zh: 'Marburg 的三條路線收斂成一條設計規則；Muenster 的兩個篩選收斂成一個缺少的對照；Frankfurt 的 synNotch＋shRNA 接合則是一個沒有人試過的機制。' }
              ] },
            { chips: [{ t: { en: 'D · site-first', zh: 'D · 現地優先' }, k: 't' }],
              h: { en: 'WageningenUR, UZurich', zh: 'WageningenUR、UZurich' },
              p: [
                { en: 'Start from a place and a regulation rather than from a molecule, and let the site decide the scope. **Needs:** a physical limit that narrows the target honestly, and a model whose output is a requirement handed to the bench.', zh: '從一個地方與一條法規出發，而不是從一個分子出發，並讓現地決定範圍。**需要：**一個誠實地縮小目標的物理限制，以及一個「輸出是交給實驗檯的需求」的模型。' },
                { en: 'UZurich\'s slope model names the cohesion the bacteria must supply; Wageningen\'s three modules each report their exact distance from working, because the site is a drinking-water stream and nothing less than a number is useful.', zh: 'UZurich 的坡面模型指定了細菌必須提供多少凝聚力；Wageningen 的三個模組各自報告自己距離「能用」還有多遠，因為現地是一條飲用水水流，而少於一個數字的東西都沒有用。' }
              ] }
          ]) +
          h.note({
            en: 'This grouping is ours and is debatable. ETH could sit in C as easily as in B, and Athens spans A and C. We publish it because a four-way split is more useful to a team choosing how to spend a season than a ranked list would be.',
            zh: '這個分組是我們的，也可以被爭論。ETH 放在 C 和放在 B 一樣合理，而 Athens 橫跨 A 與 C。我們之所以公開它，是因為對一支正在決定「這一季要怎麼花」的團隊來說，一個四分法比一份排名清單更有用。'
          })
      });

      /* ---------------- against the undergrad ten ---------------- */
      out += h.sec({
        id: 'go-ug',
        kick: { en: 'Cross-division', zh: '跨組對照' },
        h2: { en: 'How this cohort differs from the Undergraduate ten', zh: '這一組與大學部十隊的差別' },
        lede: {
          en: 'Both divisions are on this site, built the same way, so the comparison is available. Three differences stood out, and one thing we expected to find did not.',
          zh: '兩個組別都在本站上，而且用同一套方式建構，所以這個比較是可做的。有三個差異很突出，而我們預期會找到的一件事並沒有出現。'
        },
        body:
          h.ul([
            { en: '**The Overgrad cohort writes limits into claims more often.** In the Undergraduate ten we counted four of ten labelling model parameters by status; here, three teams report their own headline claim as not established (ETH, Toronto, UZurich), one scopes claims inline throughout (KAUST), and one retracts an earlier argument of its own (Athens). We read that as experience rather than as better science.', zh: '**研究生部這一組更常把限制寫進主張裡。**在大學部十隊中，我們數到有四隊為模型參數標註狀態；而在這裡，有三隊把自己的招牌主張報告為尚未確立（ETH、Toronto、UZurich）、一隊全頁都就地標註主張範圍（KAUST）、一隊撤回了自己先前的論證（Athens）。我們把這讀成「經驗」，而不是「科學更好」。' },
            { en: '**The software is more often shipped as a tool, not described as a model.** Nine of ten released something installable or runnable: a Colab notebook, a browser page that works from `file://`, a CLI, an MCP server, a Hugging Face model card, a corrected genome-scale model. In the Undergraduate ten the dry lab more often ends in a figure.', zh: '**軟體更常以「工具」的形式交付，而不是以「模型」的形式被描述。**十隊中有九隊釋出了可安裝或可執行的東西——一個 Colab 筆記本、一個能從 `file://` 直接開的網頁、一個 CLI、一個 MCP 伺服器、一張 Hugging Face 模型卡、一個被修正的全基因體模型。在大學部十隊中，乾式實驗更常以一張圖收尾。' },
            { en: '**Two bioreactors, both built to a budget rather than to a spec.** KAUST\'s is 2.2 kg and 30 W because it has to fly; Toronto\'s is about $204 CAD because it has to be built 96 times. Both publish their iterations as "Changed / Learned", including the reversals: a PID controller removed, a magnetic stirrer abandoned, a fan too fast for the bacteria.', zh: '**兩台生物反應器，都是依預算而不是依規格做出來的。**KAUST 的是 2.2 公斤、30 W，因為它必須上太空；Toronto 的約 204 加元，因為它必須被做 96 次。兩者都把迭代以「改了什麼／學到什麼」公開，包括那些被推翻的——移除 PID 控制器、放棄磁攪拌、風扇對細菌來說太快。' },
            { en: '**What we expected and did not find: a generative-design arms race.** Five of the Undergraduate ten ran generative protein design. Here the generative tools appear (BindCraft, RFdiffusion3, LigandMPNN, BoltzGen, Boltz-2, ESM3) but almost always **behind a filter the team built themselves**: Athens\' ESM-2 plausibility cut-off, Muenster\'s catalytic-geometry score, Wageningen\'s ten-times penalty on losing binding, ETH\'s select-agent refusal. The interesting work in 2026 is in the filters, not the generators.', zh: '**我們預期會找到、但沒有找到的：生成式設計的軍備競賽。**大學部十隊中有五隊使用生成式蛋白設計。在這裡，生成式工具確實出現了（BindCraft、RFdiffusion3、LigandMPNN、BoltzGen、Boltz-2、ESM3），但幾乎都**擺在團隊自己做的篩選後面**——Athens 的 ESM-2 合理性門檻、Muenster 的催化幾何評分、Wageningen 對「結合力下降」的十倍罰則、ETH 對管制病原的拒絕處理。2026 年有意思的工作在篩選器裡，不在生成器裡。' },
            { en: '**And one direct collision.** LYON took Best Bioremediation Project in the Undergraduate section and WageningenUR took it in the Overgraduate section, **both attacking TFA, the shortest PFAS, in the same year.** LYON\'s model said degradation would not work and the project pivoted to capture only; Wageningen kept all three legs and reported each one\'s exact distance from working. Two Top 10s and two village awards from opposite answers to the same question, which is the most useful thing a cross-division comparison can show.', zh: '**還有一次正面相撞。**LYON 拿下大學部的最佳生物復育專案，而 WageningenUR 拿下研究生部的同一個獎——**兩隊在同一年對付同一個分子：最短的 PFAS，TFA。**LYON 的模型判定降解行不通，專案因此轉向只做捕捉；Wageningen 則保留三條腿，並報告每一條距離「能用」還有多遠。對同一個問題給出相反答案，卻各自得到前十名與村獎——這是跨組比較最能展示的事。' }
          ]) +
          h.note({
            en: 'The [Undergraduate](#overview) and [High School](#hs-overview) sections are one click away, in the switch at the top of the page, and the **Across tiers** section compares all three in [Three tiers](#x-tiers), turns them into a [2027 roadmap](#x-roadmap), puts five candidate 2027 topics through that procedure in [Five ideas](#x-ideas), reads the Gold rule as an award strategy in [Three special prizes](#x-prize), and dates the whole season in [2027 season plan](#x-plan). All three sections use the same page template, the same figure engine and the same bilingual layer, so the differences above are differences in the wikis rather than in how we read them.',
            zh: '[大學部](#overview)與[高中部](#hs-overview)就在頁面頂端的切換鈕上，一鍵即到；而**三層比較**那一區在[三層分析](#x-tiers)裡把三個組別一起比較，整理成一份[2027 選題指南](#x-roadmap)，在[五個題目](#x-ideas)裡把五個 2027 候選題目跑過那套程序，在[三個特別獎](#x-prize)裡把金牌規則當成獎項策略來讀，並在[2027 賽季計畫](#x-plan)裡把整季換算成日期。三個組別都使用相同的頁面模板、相同的圖表引擎與相同的雙語層，所以上述差異是 wiki 之間的差異，而不是我們閱讀方式的差異。'
          })
      });

      /* the roster and the framing, after the findings they support */
      out += secTen + secAbout;

      /* ---------------- method ---------------- */
      out += h.sec({
        id: 'go-method',
        kick: { en: 'Method', zh: '方法' },
        h2: { en: 'How this was put together, and what it cannot tell you', zh: '這份東西是怎麼做出來的，以及它不能告訴你什麼' },
        body:
          h.cards([
            { chips: [{ t: { en: 'sources', zh: '來源' }, k: 'b' }],
              h: { en: 'Ten public wikis and one results page', zh: '十個公開 wiki 與一頁成績' },
              p: { en: 'Every page was read from the team\'s own 2026 wiki, plus the official results page for the awards. Where a wiki publishes its own source, we read that too: TU Delft ships a Markdown copy of every page, Wageningen writes in LaTeX, ETH in Astro. But only what the published page shows is reported here.', zh: '每一頁都讀自各隊自己的 2026 年 wiki，獎項則讀自官方成績頁。凡是 wiki 自己公開了原始碼的——TU Delft 為每頁提供 Markdown 副本、Wageningen 用 LaTeX 撰寫、ETH 用 Astro——我們也讀了，但這裡只報告公開頁面上顯示的內容。' } },
            { chips: [{ t: { en: 'limits', zh: '限制' }, k: 'r' }],
              h: { en: 'A wiki is a claim, not an audit trail', zh: 'wiki 是一種主張，不是稽核軌跡' },
              p: { en: 'We did not reproduce anything. A wiki is written by the people who were there and who wanted to win, and a practice we could not find is not the same as a practice that did not happen. Several of these teams state that measurements were still ahead of them at the wiki freeze; where they say so, we say so.', zh: '我們沒有重現任何東西。wiki 是由當時在場、而且想要獲獎的人寫的；而「我們找不到某個做法」並不等於「那個做法沒有發生」。這些團隊中有幾隊明說在 wiki 凍結時還有量測沒做完；他們這樣說的地方，我們也這樣說。' } },
            { chips: [{ t: { en: 'bias', zh: '偏見' }, k: 'v' }],
              h: { en: 'We are a competitor, and that shows', zh: '我們是參賽者，而這是看得出來的' },
              p: { en: 'GEMS Research competed in 2026 and reached the High School Top 10. We single out practices a small team can copy, which systematically under-weights anything that needs a synchrotron, a biofoundry or a supercomputer. And three of these ten used exactly those.', zh: 'GEMS Research 參加了 2026 年的比賽並進入高中部前十名。我們特別點出小團隊抄得起的做法，而這會系統性地低估任何需要同步輻射、生物工廠或超級電腦的東西——而這十隊中有三隊正好用了這些。' } }
          ])
      });

      /* ---------------- what we would take ---------------- */
      out += h.sec({
        id: 'go-gems',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'The six practices we would take into next season', zh: '我們會帶進下一季的六個做法' },
        lede: {
          en: 'Chosen because none of them needs a budget. Every one is a decision about what you write down or what order you do things in.',
          zh: '之所以選這六個，是因為沒有一個需要預算。每一個都是關於「你寫下什麼」或「你用什麼順序做事」的決定。'
        },
        body:
          h.ul([
            { en: '**Scope the claim inside the sentence that makes it** (KAUST-KSA). "Activities should be distinguished from a demonstrated increase" costs one clause and travels with the claim wherever it is quoted.', zh: '**在提出主張的那句話裡就標出範圍**（KAUST-KSA）。「這些活動應與已證明的提升區分開來」只花一個子句，而且無論主張被引用到哪裡，範圍都跟著走。' },
            { en: '**Put the mock control in the titration** (Marburg). A 97-fold drop with enzyme and 98-fold without is the entire finding, and without the mock it would have looked like a working dose–response.', zh: '**在滴定裡放進空白對照**（Marburg）。加酵素下降 97 倍、不加下降 98 倍，這就是整個發現；而沒有空白對照，它看起來就會像一條可用的劑量反應曲線。' },
            { en: '**Split by the unit of independence your data actually has** (Toronto). Homology components rather than random folds, and then publish what the random split would have claimed. The same logic applies to any dataset with relatives in it.', zh: '**依你的資料真正具有的獨立性單位來切分**（Toronto）。用同源成分而不是隨機折，然後公開「隨機切分本來會主張什麼」。同樣的邏輯適用於任何「裡面有親戚」的資料集。' },
            { en: '**Make the negative control differ in exactly one thing** (Muenster-University). Revert the one mutation rather than reaching for an empty vector, so nothing else has to be argued about.', zh: '**讓陰性對照只差在一件事上**（Muenster-University）。把那一個突變回復，而不是去拿一個空載體，這樣其他就完全不必爭論。' },
            { en: '**Qualify the instrument on a known sample before judging a candidate** (WageningenUR, and TU Delft\'s inertial-torque paragraph is the same instinct). Lysozyme at 70.69 °C against 68.6 °C published, before any candidate is allowed to fail.', zh: '**在評判任何候選之前，先用已知樣品驗證儀器**（WageningenUR；而 TU Delft 那段慣性扭矩也是同一種直覺）。溶菌酶量到 70.69 °C、文獻是 68.6 °C，這一步在任何候選被判定失敗之前就先做。' },
            { en: '**Write the protocol before the first run** (ETH-Zurich). It is what found that their expression host carried no T7 polymerase, before a single induction was wasted.', zh: '**在第一次執行之前先把流程寫出來**（ETH-Zurich）。正是這件事在浪費掉任何一次誘導之前，發現了他們的表達宿主沒有帶 T7 聚合酶。' }
          ]) +
          h.take({ en: 'And the one we are least comfortable with', zh: '以及我們最不自在的那一個' }, {
            en: 'Athens\' retraction, "That argument does not survive our own analysis", is the practice we admire most and would find hardest to do. It is easy to publish a failed experiment. It is much harder to publish that an argument you already made in public was wrong, and to prefer the narrower claim that replaces it.',
            zh: 'Athens 的那次撤回——「那個論證撐不過我們自己的分析」——是我們最佩服、也最難做到的做法。公開一個失敗的實驗很容易；但要公開「你已經公開講過的一個論證是錯的」，並且偏好那個取代它的、較窄的主張，難得多。'
          })
      });

      return out;
    }
  };
})(window);
