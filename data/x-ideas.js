/* Five project ideas for 2027 — ours, not read off anybody's wiki.
   Each one is derived from a specific finding on this site, and each is put through the
   five gates on the 2027 roadmap page. We have not run any of them.
   Ideas 4 and 5 are built on the mechanisms used by Stanford-University and
   Aarhus-University in 2026, because our own wet-lab team is working with both. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['x-ideas'] = {
    label: { en: 'Five ideas', zh: '五個題目' },
    title: { en: 'Five project ideas for a 2027 High School team', zh: '給 2027 高中部隊伍的五個題目' },
    render: function (h) {
      var out = '';

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · five candidate topics · ours, untested, and argued for in public',
          zh: 'GEMS Research · 五個候選題目 · 我們提的、沒做過的、攤開來講理由的'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Thirty teams showed us what a High School project can prove. ==Every opening they left is about something nobody measures.==',
          zh: '三十支隊伍讓我們看到一個高中部專案能證明什麼。==他們留下的每一個缺口，都在「沒有人去量的那些東西」上。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'A 2026 High School Top 10 wiki is unusually good at calibrating a readout, running a control that could go against it, and naming a failure with its cause. **All ten did all three.** What almost nobody did was get a number from outside their own team (**2 of 10**), enter the village standing empty (**Foundational Advance: 2 High School teams out of 152**), ask how long their finished device stays alive, or test whether their sensor can tell its target from the target\'s own relatives. These five ideas are each built out of one of those gaps. **Two of them — ideas 4 and 5 — are built on the mechanisms two 2026 teams used**, because those are the mechanisms our own wet-lab team is working with: Stanford-University\'s ADAR-read RNA sensor and Aarhus-University\'s microRNA-gated activation. Nothing here is a result. They are **candidate topics with the arithmetic done**, each through the five gates, with a workflow, a bill of materials, a week-by-week schedule and the negative result already written.',
          zh: '2026 年高中部前十名的 wiki 在三件事上出乎意料地好：把讀值校正好、跑一個可能對自己不利的對照、把失敗連原因一起具名——**十隊全部三件都做了。**而幾乎沒有人做的是：從自己團隊之外拿到一個數字（**十隊中只有 2 隊**）、走進那個空著的村別（**基礎推進：152 支高中部隊伍裡只有 2 支**）、問自己做好的那台裝置還能活多久，或者測試自己的感測器能不能把標的與標的的近親分開。這五個題目各自是從其中一個缺口長出來的。**其中第四與第五個，是建立在兩支 2026 年隊伍所用的機制上**，因為那正是我們自己濕式團隊正在處理的兩個機制：Stanford-University 由 ADAR 讀取的 RNA 感測器，以及 Aarhus-University 由微小 RNA 把關的活化設計。這裡沒有任何一個結果。它們是**已經把算術做完的候選題目**，每一個都跑過五道關卡，附上流程、物料清單、逐週行程，以及事先寫好的負面結果。'
        }) + '</p>' +
        h.stats([
          { v: '5', l: { en: 'Candidate topics, each traced to one finding on this site', zh: '候選題目數，每一個都回溯到本站的某一項發現' } },
          { v: '2', l: { en: 'Independent links in each one, by design', zh: '每一個刻意控制在幾個彼此獨立的環節' } },
          { v: '5 of 5', l: { en: 'Of them that put a number in somebody else\'s hands', zh: '其中有幾個把某個數字交到別人手上' } },
          { v: '2', l: { en: 'Built on a mechanism a 2026 team published', zh: '建立在某支 2026 年隊伍已公開機制上的題目數' } },
          { v: '0', l: { en: 'Experiments we have run to support any of this', zh: '我們為支撐這些內容做過的實驗數' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'ix-how', t: { en: 'How we got here', zh: '怎麼得到的' } },
        { id: 'ix-three', t: { en: 'The five', zh: '五個題目' } },
        { id: 'ix-rule', t: { en: 'The White List rule', zh: '白名單這條規定' } },
        { id: 'ix-pick', t: { en: 'Which one is yours', zh: '哪一個適合你' } },
        { id: 'ix-common', t: { en: 'What they share', zh: '共同點' } },
        { id: 'ix-sheet', t: { en: 'Scored on our own sheet', zh: '用我們自己的表打分' } },
        { id: 'ix-not', t: { en: 'What we rejected', zh: '被我們丟掉的' } }
      ]);

      /* ---------------- derivation ---------------- */
      out += h.sec({
        id: 'ix-how',
        kick: { en: 'Derivation', zh: '推導' },
        h2: { en: 'Each idea is an empty cell on a table somewhere else on this site', zh: '每個題目都是本站某張表上的一個空格' },
        lede: {
          en: 'We did not brainstorm. We looked for the places where thirty winning wikis agree that something is missing, and then asked what a school team could do about one of them in nine months.',
          zh: '我們沒有腦力激盪。我們去找那些「三十個得名 wiki 一致顯示某件事缺著」的地方，然後問：一支學校團隊能在九個月裡對其中一件做出什麼。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'The gap we found', zh: '我們找到的缺口' }, w: '27%' },
              { t: { en: 'Where it is on this site', zh: '它在本站的哪裡' }, w: '22%' },
              { t: { en: 'The idea it turns into', zh: '它變成哪個題目' } }
            ],
            rows: [
              [{ en: '**Everybody runs controls. Nobody can say how dead theirs was.** A control in the same run is the floor practice in this section: ten out of ten. But **195** Registry parts mention a negative control and almost every one has been used **0 to 3 times**, none carries a residual-activity figure, and in the published literature two laboratories found their dead enzyme\'s entire residual activity was contaminating wild-type protein.', zh: '**每個人都跑對照，但沒有人能說自己的對照死得多徹底。**「同批次有一個對照」是這個組別的地板做法——十隊全部都有。但 Registry 裡有 **195** 個元件提到負面對照，而幾乎每一個都只被使用過 **0 到 3 次**，沒有一個附上殘餘活性數值；而在已發表的文獻裡，有兩間實驗室發現自己失活酵素的全部殘餘活性都是被污染進去的野生型蛋白。' },
               { en: 'The practices matrix on [Side by side: High School](#hs-compare), columns 2 and 7; Registry counts from iGEM\'s own API', zh: '[橫向比較——高中部](#hs-compare)上的做法矩陣，第 2 與第 7 欄；Registry 數字取自 iGEM 自己的 API' },
               { en: '**Idea 1 · NULLSET.** Build the controls as the product, and publish **three numbers** for each: the residual activity as a bound, the floor of the assay that checked it, and the wild-type contamination that would fake it. [Read it](#x-control)', zh: '**題目一 · NULLSET**——把對照本身做成產品，並為每一個公開**三個數字**：以界限表示的殘餘活性、檢查它的那個試驗的地板，以及足以偽造它的野生型污染量。[看內容](#x-control)' }],
              [{ en: '**Nobody asks how long their device lives.** We crawled every registered team wiki from 2022 to 2026, **21,934 pages**, and found **591** teams that mention freeze-drying or shelf life and **not one** that published a decay curve. The best measured datum in five seasons is a single four-day time point, and one 2025 team built the shelf-life model and wrote down that it had no data to fit it with.', zh: '**沒有人問自己的裝置能活多久。**我們爬過 2022 到 2026 年每一個已登記的隊伍 wiki——**21,934 個頁面**——找到 **591** 支提到冷凍乾燥或保存期限的隊伍，而**沒有一支**公開過衰退曲線。五個賽季中最好的實測數據是單一個第四天的時間點；而 2025 年有一支隊伍做出了保存期限模型，並寫明他們沒有資料可以去擬合它。' },
               { en: 'Our crawl of 2,012 team wikis; the deployment claims are listed on [Three tiers](#x-tiers)', zh: '我們對 2,012 個隊伍 wiki 的爬取；部署主張列在[三層分析](#x-tiers)' },
               { en: '**Idea 2 · DRYRUN.** Make the decay the result. Accelerated aging of a dried reaction at four temperatures, an extrapolation to room temperature, and then a real-time arm that is allowed to prove the extrapolation wrong. [Read it](#x-shelf)', zh: '**題目二 · DRYRUN**——把衰退本身做成結果。把一個乾燥反應在四個溫度下做加速老化、外推到室溫，然後用一條實時組去證明那個外推是錯的。[看內容](#x-shelf)' }],
              [{ en: '**Two teams out of ten had a number produced outside their own lab**, and they were the two teams whose headline claims a stranger can most easily check. The cheapest credibility in the competition was used by a fifth of the section.', zh: '**十隊中只有 2 隊有「由自己實驗室之外產出的數字」**——而那兩隊，剛好就是招牌主張最容易被陌生人檢查的兩隊。整個競賽裡最便宜的可信度，只被這個組別的五分之一用上。' },
               { en: 'Column 6 of the practices matrix on [Side by side](#hs-compare); the take under it', zh: '[橫向比較](#hs-compare)做法矩陣的第 6 欄，以及它下面的結論' },
               { en: '**Idea 3 · SPLITFISH.** Make the outside laboratory the whole point. Build a cheap enzymatic test, then split real market samples with an accredited food laboratory and publish the agreement study, bias and all. [Read it](#x-assay)', zh: '**題目三 · SPLITFISH**——把外部實驗室變成整件事的重點。做一個便宜的酵素測試，然後把真實市場樣本與一間認證食品實驗室對半分，公開那份一致性研究，連偏差一起。[看內容](#x-assay)' }],
              [{ en: '**The best design rule in the cohort rests on 25 sensors.** The Undergraduate Grand Prize team tested whether predicted folding free energy ranks RNA sensors, and it does: Spearman **ρ = 0.62–0.63**, against **−0.2** for the GC-content rule it replaced. But regression on that predictor gave only **Q² = 0.20**. The rule is real and weak, and improving it needs more sensors than a mammalian-cell lab can afford to build.', zh: '**這一批隊伍裡最好的設計規則，建立在 25 個感測器上。**大學部首獎隊測試了「預測的摺疊自由能能不能為 RNA 感測器排序」，答案是可以——Spearman **ρ = 0.62–0.63**，而它所取代的 GC 含量規則只有 **−0.2**。但用那個預測因子做回歸只得到 **Q² = 0.20**。這條規則是真的，也是弱的；而要改進它，需要的感測器數量超過一間哺乳動物細胞實驗室做得起的。' },
               { en: 'The RADAR-Scout section on [Stanford-University](#t-stanford)', zh: '[Stanford-University](#t-stanford) 頁上的 RADAR-Scout 一節' },
               { en: '**Idea 4 · ENDOREAD.** Same design question, a chassis that costs a hundredth as much, and twice the sensors. Build the sensor library where the reader is an enzyme the host already has, and publish the design-rule dataset nobody can afford in cells. [Read it](#x-reader)', zh: '**題目四 · ENDOREAD**——同一個設計問題，換一個成本只有百分之一的宿主，做兩倍數量的感測器。在「讀取者是宿主本來就有的酵素」的系統裡建出感測器庫，並公開那份在細胞裡沒人出得起錢做的設計規則資料集。[看內容](#x-reader)' }],
              [{ en: '**Every microRNA-gated therapy assumes a sensor can tell its target from the target\'s own family. Nobody measures it.** Aarhus-University\'s own description page says that relying on "a single cellular biomarker to detect disease… is simply not optimal for specificity", which is why they went to two inputs. But microRNA families share a seed region, so the specificity of *each* input against *its own relatives* is the load-bearing assumption of the whole design, and it is unpublished.', zh: '**每一個由微小 RNA 把關的療法，都假設感測器能把標的與標的的近親分開——而沒有人去量。**Aarhus-University 自己的描述頁寫著：只依賴「單一個細胞生物標記來偵測疾病……在專一性上根本不是最佳做法」，這正是他們改用兩個輸入的理由。但微小 RNA 家族共用種子區，所以**每一個**輸入對**自己家族成員**的專一性，才是整個設計的承重假設，而它沒有被公開過。' },
               { en: 'Aarhus\' own [2026 wiki](https://2026.igem.wiki/aarhus-university/); the toehold screen on [HongKong-HS](#hs-hkhs)', zh: 'Aarhus 自己的 [2026 wiki](https://2026.igem.wiki/aarhus-university/)；以及 [HongKong-HS](#hs-hkhs) 的 toehold 篩選' },
               { en: '**Idea 5 · SEEDTEST.** Measure the thing the mechanism depends on. One sensor against every member of its target\'s family, in a cell-free reaction, published as the cross-reactivity matrix that does not exist. [Read it](#x-seed)', zh: '**題目五 · SEEDTEST**——去量那個機制所依賴的東西。一個感測器對上它標的家族的每一個成員，在無細胞反應中進行，並公開那張目前不存在的交叉反應矩陣。[看內容](#x-seed)' }]
            ],
            min: 1020,
            source: { en: 'The gaps are our readings of the thirty team pages on this site, each of which sources its claims to that team\'s own 2026 wiki; the two Aarhus quotations are from their own description page, which is not on this site because Aarhus is not in a 2026 Top 10. The ideas are ours and have never been run.', zh: '這些缺口是我們對本站三十個團隊頁的判讀，而那些頁面的主張都標註了來自各隊自己 2026 年 wiki 的出處；兩句 Aarhus 的引文來自他們自己的描述頁，該隊不在本站，因為他們不在 2026 年的前十名之列。題目是我們提的，從未被執行過。' }
          }) +
          h.warn({
            en: 'Read this before you read anything else on these six pages. **We have not run these experiments.** Every number on the five idea pages is either (a) a figure from the published literature, an official regulation or an official iGEM source, cited where it appears, or (b) a **target** we think a school team should aim at, labelled as a target. Costs are estimates from current public prices and will be wrong in your country. A plan is not evidence, and the fact that an idea passes our own gates on paper says only that it is worth a January meeting, not that it will work.',
            zh: '在你讀這六頁的任何其他東西之前，先讀這一段。**這些實驗我們沒有做過。**五個題目頁上的每個數字，都屬於下列兩種之一：(a) 來自已發表文獻、官方法規或 iGEM 官方來源的數值，並在出現處標註來源；或 (b) 一個我們認為學校團隊應該瞄準的**目標值**，並標明是目標。成本是依目前公開價格估算的，在你的國家一定不準。計畫不是證據；一個題目在紙上通過我們自己的關卡，只說明它值得一次一月的會議——不說明它會成功。'
          })
      });

      /* ---------------- the five ---------------- */
      out += h.sec({
        id: 'ix-three',
        kick: { en: 'The five', zh: '五個題目' },
        h2: { en: 'Side by side, before you read any of them in full', zh: '在你完整讀任何一個之前，先並排看一次' },
        lede: {
          en: 'The rows are the questions from the five gates. Read down a column to see a whole project; read across a row to see five different answers to the same question.',
          zh: '列就是五道關卡的問題。縱著讀一欄，是一個完整的專案；橫著讀一列，是同一個問題的五種不同答案。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: '', zh: '' }, w: '13%' },
              { t: { en: '1 · NULLSET', zh: '1 · NULLSET' } },
              { t: { en: '2 · DRYRUN', zh: '2 · DRYRUN' } },
              { t: { en: '3 · SPLITFISH', zh: '3 · SPLITFISH' } },
              { t: { en: '4 · ENDOREAD', zh: '4 · ENDOREAD' } },
              { t: { en: '5 · SEEDTEST', zh: '5 · SEEDTEST' } }
            ],
            rows: [
              [{ en: '**In one line**', zh: '**一句話**' },
               { en: 'The negative control is the product', zh: '把負面對照做成產品' },
               { en: 'The shelf life is the result', zh: '把保存期限做成結果' },
               { en: 'The outside laboratory is the experiment', zh: '把外部實驗室做成實驗' },
               { en: 'Borrow the host\'s own enzyme as the reader', zh: '借宿主自己的酵素當讀取者' },
               { en: 'A gate that cannot tell a family apart is not a gate', zh: '分不出一個家族的閘，不是閘' }],
              [{ en: '**Built on**', zh: '**建立在**' },
               { en: 'A gap: ten of ten run controls, none ships one', zh: '一個缺口：十隊都跑對照，沒有一隊交付對照' },
               { en: 'A gap: thirty wikis, no shelf life', zh: '一個缺口：三十個 wiki，零個保存期限' },
               { en: 'A gap: 2 of 10 had an outside number', zh: '一個缺口：十隊中只有 2 隊有外部數字' },
               { en: 'Stanford-University 2026: ADAR-read RNA sensors', zh: 'Stanford-University 2026：由 ADAR 讀取的 RNA 感測器' },
               { en: 'Aarhus-University 2026: microRNA-gated activation', zh: 'Aarhus-University 2026：由微小 RNA 把關的活化' }],
              [{ en: '**The number**', zh: '**那個數字**' },
               { en: 'Residual activity as a bound, the assay floor beside it, and the contamination that would fake it', zh: '以界限表示的殘餘活性、旁邊的試驗地板，以及足以偽造它的污染量' },
               { en: 'Half-life in days at each of four temperatures, with a confidence interval', zh: '四個溫度下各自的半衰期（天），附信賴區間' },
               { en: 'Bias in mg/kg against the accredited laboratory, with limits of agreement', zh: '相對認證實驗室的偏差（mg/kg），附一致性界限' },
               { en: 'Spearman ρ between predicted free energy and measured output, across 48 sensors', zh: '48 個感測器上，預測自由能與實測輸出之間的 Spearman ρ' },
               { en: 'Cross-reactivity of one sensor against every family member, as a percentage of the true target', zh: '一個感測器對每個家族成員的交叉反應，以真正標的的百分比表示' }],
              [{ en: '**The control that could make you wrong**', zh: '**可能讓你是錯的對照**' },
               { en: 'Wild-type protein in the same plate, same day, same operator', zh: '同一盤、同一天、同一位操作者下的野生型蛋白' },
               { en: 'The real-time arm, which the extrapolation has to match', zh: '實時組，外推值必須與它相符' },
               { en: 'The split sample itself, the other half of the same fish', zh: '對半分的樣本本身——同一條魚的另一半' },
               { en: 'The reader removed: the same library in a host that lacks the enzyme', zh: '把讀取者移除：同一個庫放進缺少該酵素的宿主' },
               { en: 'A scrambled input, and the family member one base away', zh: '一個打亂序列的輸入，以及只差一個鹼基的那個家族成員' }],
              [{ en: '**Independent links**', zh: '**獨立環節**' },
               { en: 'Two: make the variant, measure the activity', zh: '兩環：做出變異體、量活性' },
               { en: 'Two: dry the reaction, measure the decay', zh: '兩環：把反應乾燥、量衰退' },
               { en: 'Two: get the enzyme working on real extract, compare the methods', zh: '兩環：讓酵素在真實萃取液中有效、比較兩種方法' },
               { en: 'Two: build the library, read the output', zh: '兩環：建出那個庫、讀出輸出' },
               { en: 'Two: build one sensor, titrate every relative against it', zh: '兩環：做出一個感測器、把每個近親對它做滴定' }],
              [{ en: '**The outsider**', zh: '**外部的人**' },
               { en: 'A university laboratory re-measures two variants **blind**', zh: '一間大學實驗室對兩個變異體做**盲測**重量' },
               { en: 'A partner team measures what it received on its own reader, using a non-engineered reagent, so nothing needs permission to travel', zh: '一支夥伴隊伍用自己的讀取儀量測收到的材料——而那是未經工程化的試劑，所以沒有東西需要許可才能旅行' },
               { en: 'An accredited food-testing laboratory, paid, on the other half of every sample', zh: '一間付費的認證食品檢測實驗室，測每個樣本的另一半' },
               { en: 'Another team runs six of the 48 sensors from our released sequences', zh: '另一支隊伍依我們釋出的序列，跑那 48 個感測器中的 6 個' },
               { en: 'A laboratory with a quantitative method confirms two of the inputs independently', zh: '一間有定量方法的實驗室，獨立確認其中兩個輸入' }],
              [{ en: '**The negative result, pre-written**', zh: '**事先寫好的負面結果**' },
               { en: '"*k* of our variants retained activity above our floor, so they are not controls"', zh: '「我們有 *k* 個變異體的活性高於我們的地板，所以它們不是對照」' },
               { en: '"The extrapolation over-predicted room-temperature life by a factor of *n*"', zh: '「外推值把室溫壽命高估了 *n* 倍」' },
               { en: '"Our limits of agreement are wider than the regulatory decision band"', zh: '「我們的一致性界限比法規的判定帶更寬」' },
               { en: '"Predicted free energy did not rank our sensors, so the rule does not transfer"', zh: '「預測自由能沒能為我們的感測器排序，所以那條規則搬不過來」' },
               { en: '"The sensor fires on the family, so single-input specificity is not available here"', zh: '「感測器會被整個家族觸發，所以在這裡拿不到單輸入專一性」' }],
              [{ en: '**Village we would register**', zh: '**我們會登記的村別**' },
               { en: 'Foundational Advance: **2 High School teams in 2026**, no places, a village standing empty', zh: '基礎推進——**2026 年只有 2 支高中部隊伍**，零席次，一個空著的村別' },
               { en: 'Diagnostics: **3 of 13** in High School, the one village that converts here', zh: '診斷——高中部 **13 取 3**，這裡唯一轉換得好的村別' },
               { en: 'Food & Nutrition, or Diagnostics: a real trade-off, argued on the page', zh: '食品與營養，或診斷——這是一個真的取捨，頁上有論證' },
               { en: 'Foundational Advance: a design-rule dataset is the definition of the village', zh: '基礎推進——一份設計規則資料集正是這個村別的定義' },
               { en: 'Foundational Advance, or Therapeutics if you keep the disease framing', zh: '基礎推進；若保留疾病敘事則為治療' }],
              [{ en: '**Hard part**', zh: '**難的地方**' },
               { en: 'Proving a negative. You cannot measure zero, so you must measure your own floor.', zh: '證明一個否定。你量不到零，所以你必須量出自己的地板。' },
               { en: 'Patience, and the rules about sending material anywhere.', zh: '耐性，以及「把材料寄到任何地方」的那些規定。' },
               { en: 'Logistics and money. Samples, splitting, cold chain, and an invoice.', zh: '後勤與錢。樣本、分樣、冷鏈，以及一張發票。' },
               { en: 'Building 48 of anything, and keeping the plate-to-plate variance small enough to see a rank order.', zh: '把任何東西做 48 個，而且要把盤間變異度壓到小得足以看出排序。' },
               { en: 'Getting the inputs right: synthetic RNA is the budget, and one base is the whole question.', zh: '把輸入弄對：合成 RNA 就是預算，而一個鹼基就是整個問題。' }],
              [{ en: '**Why a judge should care**', zh: '**評審為什麼該在意**' },
               { en: 'It hands every future team a reagent they currently fake or skip', zh: '它把一個現在大家都用假的、或乾脆跳過的試劑，交到每一支未來隊伍手上' },
               { en: 'It is the measurement that decides whether any field claim on any wiki is true', zh: '它正是那個決定「任何 wiki 上任何田野主張是否為真」的量測' },
               { en: 'It is the study a regulator would ask for, done by a school', zh: '它是一間學校做出了「法規單位真正會要求的那份研究」' },
               { en: 'It extends a Grand Prize team\'s result instead of admiring it', zh: '它把一支首獎隊伍的結果往前推，而不是只去讚嘆它' },
               { en: 'It tests the assumption a whole class of therapy is built on', zh: '它檢驗了一整類療法所建立的那個假設' }]
            ],
            min: 1480,
            source: { en: 'Our table. Village counts come from the conversion table on [Three tiers](#x-tiers), counted from the iGEM teams and villages APIs on 22 November 2026. Stanford\'s ρ and Q² are their own numbers, sourced on [their page here](#t-stanford).', zh: '這是我們的表。村別數字取自[三層分析](#x-tiers)的轉換表，於 2026 年 11 月 22 日自 iGEM 的 teams 與 villages API 統計。Stanford 的 ρ 與 Q² 是他們自己的數字，出處在[本站他們的頁面](#t-stanford)。' }
          })
      });

      /* ---------------- the White List rule ---------------- */
      out += h.sec({
        id: 'ix-rule',
        kick: { en: 'Constraint', zh: '限制' },
        h2: { en: 'One official rule shaped all five of these more than any scientific judgement did', zh: '有一條官方規定，對這五個題目的塑造超過任何科學判斷' },
        lede: {
          en: 'If you are a High School team planning 2027, this is the paragraph to read twice. We did not know it when we started, and it removed one of our candidate designs outright.',
          zh: '如果你是一支正在規劃 2027 年的高中部隊伍，這一段請讀兩次。我們開始的時候並不知道這件事，而它直接刪掉了我們一個候選設計。'
        },
        body:
          h.kv([
            [{ en: 'The rule', zh: '那條規定' },
             { en: 'iGEM\'s own High School page states that **from the 2025 season, high school teams must use only the organisms and components on the current iGEM White List**, and that "all team activities must strictly align with the items included in the White List."', zh: 'iGEM 自己的高中部頁面寫明：**自 2025 賽季起，高中部隊伍只能使用現行 iGEM 白名單上的生物與元件**，而且「團隊的所有活動都必須嚴格符合白名單中所列的項目。」' }],
            [{ en: 'Why it bites harder than it looks', zh: '為什麼它比看起來更有份量' },
             { en: 'Collegiate teams that need something off the list file a **Check-In** with the Safety and Security Committee. High School teams cannot: in iGEM\'s own deliverables data for 2026, the Safety Check-in Form and the Animal Use Safety Form are both marked as **not offered to the high-school section**. The escape hatch the senior sections use does not exist for you.', zh: '大學部隊伍需要名單外的東西時，可以向安全與保全委員會提出 **Check-In**。高中部隊伍不行：在 iGEM 自己 2026 年的交付項目資料裡，Safety Check-in 表與 Animal Use 表都被標記為**不提供給高中部**。高年級組別用的那個逃生門，對你並不存在。' }],
            [{ en: 'What it did to these five ideas', zh: '它對這五個題目做了什麼' },
             { en: 'It is the reason ideas 4 and 5 are *not* the Stanford and Aarhus projects. Both of those run in mammalian cells, and both read their output on a flow cytometer. Our versions move the same design question into a bacterial or cell-free system. That is not a compromise we are proud of; it is the only version a High School team can actually run.', zh: '它正是第四與第五個題目**不是** Stanford 與 Aarhus 專案本身的原因。那兩個都在哺乳動物細胞裡跑，而且都用流式細胞儀讀輸出。我們的版本把同一個設計問題搬進細菌或無細胞系統——這不是一個我們自豪的妥協，而是高中部隊伍唯一真的跑得起來的版本。' }],
            [{ en: 'The sharpest instance, and it reshaped idea 5', zh: '最鋒利的那個例子，而它改變了第五個題目' },
             { en: 'The Parts table white-lists "microRNAs… **that do not target human genes**" and requires a Check-In for the same list "**that target human genes**". A human microRNA used as a human microRNA is therefore closed to a High School team, which is exactly what the Aarhus design runs on. Idea 5 is built on a **non-human** family instead, and the discrimination question it asks is identical.', zh: '元件那張表把「微小 RNA……**不以人類基因為標的者**」列入白名單，而同一類「**以人類基因為標的者**」則需要 Check-In。因此，一個「作為人類微小 RNA 使用的人類微小 RNA」對高中部隊伍是關著的——而那正是 Aarhus 的設計所依賴的東西。第五個題目改為建立在一個**非人類**的家族上，而它所問的辨識問題完全相同。' }],
            [{ en: 'What to do in January', zh: '一月該做的事' },
             { en: 'Open the White List before you choose a topic, not after. If your design needs something that is not on it, you have two honest options: change the design, or write to **safety@igem.org** in January and ask. iGEM\'s own guidance tells teams to do exactly that when they are unsure. An email in August gets you nothing.', zh: '在選題之前就打開白名單，不要事後才看。如果你的設計需要名單外的東西，你有兩個誠實的選項：改設計，或者在一月寫信給 **safety@igem.org** 去問——iGEM 自己的指引就是告訴隊伍在不確定時這樣做。八月才寄的信什麼也換不到。' }],
            [{ en: 'The other rule in the same family', zh: '同一類的另一條規定' },
             { en: 'A Check-In is also required before **"bringing any product of synthetic biology outside of the lab"**. Any plan that posts material to another school runs into this, which is why idea 2 is built around a version that needs no engineered material to travel at all. Read that page before you promise a partner team a parcel.', zh: '另外，在**「把任何合成生物學的產物帶到實驗室之外」**之前也需要 Check-In。任何「把材料寄給另一所學校」的計畫都會碰到這一條，這正是第二個題目被設計成「完全不需要讓工程化材料旅行」的原因。在你答應夥伴隊伍一個包裹之前，先去讀那一頁。' }]
          ]) +
          h.note({
            en: 'Sources for this section: [competition.igem.org/high-school](https://competition.igem.org/high-school) for the White List requirement, iGEM\'s 2026 deliverables data for the sections each safety form is offered to, and [responsibility.igem.org](https://responsibility.igem.org/safety-policies) for the Check-In policies. **Caveat we have to state:** on 23 November 2026 the High School page was still carrying 2025-season text in places. The White List requirement is corroborated by the deliverables data independently of that page, but check the page again before you plan a 2027 season on it.',
            zh: '本節的來源：白名單要求出自 [competition.igem.org/high-school](https://competition.igem.org/high-school)；各安全表單提供給哪些組別，出自 iGEM 2026 年的交付項目資料；Check-In 政策出自 [responsibility.igem.org](https://responsibility.igem.org/safety-policies)。**必須說明的保留：**2026 年 11 月 23 日，那個高中部頁面有部分內容仍然是 2025 賽季的文字。白名單那項要求有交付項目資料獨立佐證，與該頁無關；但在你拿它來規劃 2027 賽季之前，請再去看一次那一頁。'
          })
      });

      /* ---------------- which one is yours ---------------- */
      out += h.sec({
        id: 'ix-pick',
        kick: { en: 'Choosing', zh: '選擇' },
        h2: { en: 'Which one to take, decided by what you already have', zh: '該拿哪一個，由你已經有什麼來決定' },
        lede: {
          en: 'Not by which sounds best. A nine-month season is decided in the first six weeks by access: to an instrument, to a laboratory, to samples, and to a teacher who will let you keep a shelf for eight months.',
          zh: '不是由「哪一個聽起來最好」來決定。一個九個月的賽季，在前六週就被「取用權」決定了：對一台儀器、一間實驗室、一批樣本，以及一位願意讓你佔用一個架子八個月的老師。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'take NULLSET', zh: '選 NULLSET' }, k: 'b' }],
              h: { en: 'If you have a plate reader and a cloning bench, and no outside contacts yet', zh: '如果你有微孔盤讀儀與一個選殖工作檯，而還沒有外部人脈' },
              p: { en: 'The cheapest of the five and the one most under your own control: synthetic DNA, a transformation, a protein, an absorbance or fluorescence assay. It is also the easiest to *start late*. If your first topic collapses in March, a dozen variants and one assay can still be done properly before a freeze. The thing it needs from outside is small and late.', zh: '五個之中最便宜、也最在你自己掌握中的一個：合成 DNA、一次轉形、一個蛋白質、一個吸光或螢光試驗。它也是最容易**晚啟動**的一個——如果你的第一個題目在三月崩掉，十幾個變異體與一個試驗仍然能在凍結日前做得完整。它需要外部提供的東西又小又晚。' },
              foot: { en: 'Biggest risk: it reads as a reagent catalogue unless you write the argument well.', zh: '最大風險：除非你把論證寫好，它會讀起來像一份試劑目錄。' } },
            { chips: [{ t: { en: 'take DRYRUN', zh: '選 DRYRUN' }, k: 'v' }],
              h: { en: 'If you can start in the first month and you can keep an incubator for the season', zh: '如果你能在第一個月就開始，而且能整季佔用一台培養箱' },
              p: { en: 'Time is the reagent here. Eight months of real-time storage cannot be bought in September, which makes this the one idea that is **impossible to rescue late**. For the same reason, it is the one nobody else in the section will have. It needs incubators you can keep, a sealed box per humidity condition, and a plan for the shipping rules before you promise anybody a parcel.', zh: '這裡的試劑是時間。八個月的實時儲存沒辦法在九月買到，所以這是五個之中**唯一無法晚期補救**的題目——也正因如此，是這個組別裡沒有別人會有的題目。它需要你能持續佔用的培養箱、每個濕度條件一個密封盒，以及在你答應任何人一個包裹之前，先把寄送規定想清楚。' },
              foot: { en: 'Biggest risk: an incubator failure takes a whole arm with it. Build in a spare arm.', zh: '最大風險：一次培養箱故障會帶走一整組。要多做一組備份。' } },
            { chips: [{ t: { en: 'take SPLITFISH', zh: '選 SPLITFISH' }, k: 'g' }],
              h: { en: 'If you have a budget line and somebody who can talk to a commercial laboratory', zh: '如果你有一筆預算，以及一個能跟商業實驗室談話的人' },
              p: { en: 'The money is the barrier and also the point: accredited testing is priced per sample, so the size of your study is a budget decision you must make in January. In exchange you get the only kind of evidence in this competition that does not depend on trusting the team: a comparison against a laboratory that was paid to disagree with you.', zh: '錢是門檻，也正是重點：認證檢測是按樣本計價的，所以你研究的規模是一個必須在一月做的預算決定。換來的是這個競賽裡唯一一種「不依賴相信團隊」的證據——一次對照「被付錢來跟你不一致」的實驗室的比較。' },
              foot: { en: 'Biggest risk: not enough samples above the legal limit. The page says what to do about that.', zh: '最大風險：超過法規限值的樣本數不夠。那一頁寫了該怎麼辦。' } },
            { chips: [{ t: { en: 'take ENDOREAD', zh: '選 ENDOREAD' }, k: 'a' }],
              h: { en: 'If somebody on the team can program, and you can run the same plate forty-eight times', zh: '如果團隊裡有人會寫程式，而且你有辦法把同一種盤做四十八次' },
              p: { en: 'The most dry-lab of the five, and the one whose design we have already had to correct twice. **A correlation across many designs is not reachable**: the published effects in this area sit around R² = 0.04, which needs roughly two hundred *working* constructs. The result is instead a categorical test of whether published determinants transfer, where the literature hands you effects of seven to fiftyfold at named positions. That needs a handful of constructs and three to six replicates, not a library. It suits a team with one strong computational member and a patient wet lab, and it is the one that most directly extends published work, which cuts both ways: you inherit a real question, and you will be compared with the people who asked it first. **Read [the three things we got wrong](#x-reader) before you cost this one.**', zh: '五個之中最偏乾式的一個，也是我們已經不得不修正過兩次設計的那一個。**跨多個設計的相關性是達不到的**——這個領域已發表的效應大約在 R² = 0.04，那需要大約兩百個**能用的**構築——所以結果改成一個「已發表的決定因子會不會搬過來」的類別式檢驗，而文獻在具名位置上給了你七倍到五十倍的效應。那只需要少數幾個構築、三到六次重複，不需要一個庫。它適合一支有一位強力計算成員、加上一個耐得住的濕式團隊，也是最直接延伸已發表工作的一個，而這有兩面：你繼承了一個真問題，也會被拿來跟最先提出它的人比較。**在你為這個題目編預算之前，請先讀[我們弄錯的三件事](#x-reader)。**' },
              foot: { en: 'Biggest risk: a confound that produces a convincing result for the wrong reason. Two of them are named on the page.', zh: '最大風險：一個會因為錯誤理由而產出有說服力結果的干擾。頁面上已經指名了兩個。' } },
            { chips: [{ t: { en: 'take SEEDTEST', zh: '選 SEEDTEST' }, k: 't' }],
              h: { en: 'If you want the therapeutic question without the therapeutic chain', zh: '如果你想要那個療法層級的問題，但不想要那條療法的鏈條' },
              p: { en: 'The attraction is that it asks a question people building real therapies need answered, using inputs you can buy as synthetic RNA and a readout you can run in a tube. The constraint is that the budget is almost entirely oligonucleotides, so the design meeting is a shopping list: how many family members, how many concentrations, how many replicates. Decide that before you order anything.', zh: '它的吸引力在於：它問的是一個真正在做療法的人需要答案的問題，而用的輸入是你買得到的合成 RNA、讀值是你在試管裡跑得出來的。限制在於預算幾乎全是寡核苷酸，所以設計會議其實是一張購物清單：幾個家族成員、幾個濃度、幾次重複。在你訂任何東西之前先把這件事定下來。' },
              foot: { en: 'Biggest risk: ordering the inputs before you know your replicate structure. That mistake is unrecoverable.', zh: '最大風險：在你還不知道自己的重複結構之前就把輸入訂下去。那個錯誤無法回頭。' } }
          ]) +
          h.note({
            en: 'If none of the five fits what you have, that is the right outcome and the whole point of the exercise. Use the [five gates](#x-roadmap) on your own topic instead. **The gates travel; our five topics do not have to.**',
            zh: '如果五個都不符合你手上有的東西，那就是正確的結果，也正是這個練習的全部用意。請改用[五道關卡](#x-roadmap)去檢查你自己的題目。**關卡是可以搬的；我們這五個題目不必被搬。**'
          })
      });

      /* ---------------- what they share ---------------- */
      out += h.sec({
        id: 'ix-common',
        kick: { en: 'Pattern', zh: '模式' },
        h2: { en: 'Four properties all five were built to have', zh: '五個題目都被刻意設計成具有的四個性質' },
        body:
          h.phases([
            { h: { en: 'The measurement exists before the biology does', zh: '量測先於生物存在' },
              p: { en: 'In all five, the first weeks of bench work produce no biological material at all. They produce a calibrated readout.', zh: '五個題目的前幾週實驗檯工作都不產出任何生物材料。它們產出的是一個校正好的讀值。' },
              items: [
                { en: 'NULLSET builds the activity assay on commercial protein before any variant exists, because the floor of that assay is half the result.', zh: 'NULLSET 在任何變異體存在之前，先用市售蛋白把活性試驗建好，因為那個試驗的地板就是結果的一半。' },
                { en: 'DRYRUN measures the fresh reaction many times over to get the day-zero variance, because every half-life it reports is a ratio to that number.', zh: 'DRYRUN 把新鮮反應反覆量很多次以取得第零天的變異度，因為它報告的每一個半衰期都是相對那個數字的比值。' },
                { en: 'ENDOREAD measures plate-to-plate variance on one construct in week three, because a rank order you cannot resolve is not a dataset.', zh: 'ENDOREAD 在第三週就用單一個構築量盤間變異度，因為一個你分辨不出來的排序不是資料集。' },
                { en: 'SPLITFISH runs the test on spiked blanks before a single market sample is bought; SEEDTEST titrates the true target before any relative is ordered.', zh: 'SPLITFISH 在買進任何市場樣本之前，先用加標空白跑測試；SEEDTEST 在訂購任何近親之前，先把真正的標的做完滴定。' }
              ],
              done: { en: 'A standard curve with its own error bars, dated, before the first construct is sequenced.', zh: '一條帶自己誤差線、簽上日期的標準曲線，出現在第一個構築被定序之前。' } },
            { h: { en: 'Somebody outside the team produces a number you cannot edit', zh: '團隊之外的人產出一個你改不動的數字' },
              p: { en: 'Deliberately chosen so that the outsider can return an answer you dislike. A service that runs your sample is an instrument you rented; a laboratory that can disagree with you is a check.', zh: '刻意這樣設計，好讓外部的人能回給你一個你不喜歡的答案。幫你跑樣本的服務是你租來的儀器；一間能跟你不一致的實驗室才是檢驗。' },
              items: [
                { en: 'Blind re-measurement (NULLSET), an independent reader elsewhere (DRYRUN), an accredited method on the same homogenate (SPLITFISH), another team rebuilding six of your sensors from your released sequences (ENDOREAD), an independent confirmation of two inputs (SEEDTEST).', zh: '盲測重量（NULLSET）、別處的獨立讀取者（DRYRUN）、同一份均質液上的認證方法（SPLITFISH）、另一支隊伍依你釋出的序列重建六個感測器（ENDOREAD）、兩個輸入的獨立確認（SEEDTEST）。' },
                { en: 'In 2026 this was done by **2 of 10** High School Top 10 teams, and both were among the strongest evidence bases in the section.', zh: '2026 年這件事由高中部前十名中的**2 隊**做到，而那兩隊都屬於這個組別證據最強的隊伍。' }
              ],
              done: { en: 'An email sent in the first half of the season, with a named person and a named measurement in it.', zh: '一封在賽季前半寄出的信，裡面有具名的人與具名的量測。' } },
            { h: { en: 'The project is two links long, and we say which two', zh: '專案只有兩環長，而且我們指明是哪兩環' },
              p: { en: 'Each idea had a third and fourth link available, and each page says what we cut and what we would publish as design instead of evidence.', zh: '每個題目原本都有第三、第四環可以加，而每一頁都寫明我們砍掉了什麼、以及我們會把什麼當成「設計」而不是「證據」來公開。' },
              items: [
                { en: 'NULLSET does not attempt a pathway. DRYRUN does not attempt a new sensor; it ages one that already works. SPLITFISH does not attempt a device. ENDOREAD does not attempt a therapeutic payload. SEEDTEST does not attempt a cell.', zh: 'NULLSET 不嘗試做一條路徑。DRYRUN 不嘗試做新的感測器——它去老化一個已經能用的。SPLITFISH 不嘗試做裝置。ENDOREAD 不嘗試做治療性負載。SEEDTEST 不嘗試進細胞。' },
                { en: 'Ideas 4 and 5 are the clearest case: the projects they come from are four and five links long, and both of those teams are senior sections with cell culture. Cutting to two links is what makes the same question answerable in a school.', zh: '第四與第五個題目是最清楚的例子：它們所出自的專案有四到五環長，而那兩支隊伍都屬於有細胞培養能力的高年級組別。砍到兩環，正是讓同一個問題在學校裡變得可回答的原因。' }
              ],
              done: { en: 'A one-page chain diagram where exactly two boxes are marked "evidence".', zh: '一張單頁鏈條圖，上面剛好有兩個方塊被標成「證據」。' } },
            { h: { en: 'The disappointing outcome is still publishable, and is written down first', zh: '令人失望的結果仍然可以公開，而且是先寫下來的' },
              p: { en: 'All five are designed so that the result a team would least like is a finding rather than a dead season. That is the property that lets a school team commit in January without a plan B.', zh: '五個題目都被設計成：團隊最不想要的那個結果，仍然是一個發現，而不是一個白費的賽季。正是這個性質，讓一支學校團隊能在一月就定案，而不需要備案。' },
              items: [
                { en: 'A variant that is not dead is a published warning about an assay floor. An extrapolation that fails is the most useful thing anybody could learn about accelerated aging. Limits of agreement that are too wide are the answer to the question the study asked. A design rule that does not transfer is a boundary on a published rule. A sensor that fires on the whole family is the result the field most needs and least wants.', zh: '一個沒死透的變異體，是一份關於試驗地板的公開警告。一個失敗的外推，是任何人能從加速老化學到的最有用的東西。一致性界限太寬，就是這份研究所提問題的答案。一條搬不過來的設計規則，是對一條已發表規則的邊界。一個被整個家族觸發的感測器，是這個領域最需要、也最不想要的那個結果。' }
              ],
              done: { en: 'The sentence is in your January document, and you would copy it into the results page unchanged.', zh: '那句話在你一月的文件裡，而你願意原封不動把它貼進結果頁。' } }
          ])
      });

      /* ---------------- scored on our own sheet ---------------- */
      out += h.sec({
        id: 'ix-sheet',
        kick: { en: 'Self-check', zh: '自我檢查' },
        h2: { en: 'We put our own ideas through our own scoring sheet, and the result is a criticism of the sheet', zh: '我們把自己的題目放進自己的評分表，而結果是對那張表的批評' },
        lede: {
          en: 'The ten rows are the sheet on the roadmap page, 0 to 2 each. We designed these ideas against that sheet, so of course they score well. That circularity is the finding.',
          zh: '這十列就是選題指南頁上的那張表，每列 0 到 2 分。我們是對著那張表設計這些題目的，所以它們當然分數高。那個循環性本身就是發現。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Row of the sheet', zh: '表上的列' } },
              { t: { en: 'NULL', zh: 'NULL' }, num: true, w: '8%' },
              { t: { en: 'DRY', zh: 'DRY' }, num: true, w: '8%' },
              { t: { en: 'SPLIT', zh: 'SPLIT' }, num: true, w: '8%' },
              { t: { en: 'ENDO', zh: 'ENDO' }, num: true, w: '8%' },
              { t: { en: 'SEED', zh: 'SEED' }, num: true, w: '8%' },
              { t: { en: 'Where the honest point is lost', zh: '誠實地說，分數掉在哪裡' }, w: '26%' }
            ],
            rows: [
              [{ en: 'Number with units, instrument named, access confirmed', zh: '有單位的數字、具名儀器、已確認取用' }, '2', '2', '2', '2', '2',
               { en: 'All five name a plate reader or a photometer you already have. Confirm the access before you score this honestly.', zh: '五個都指名你已經有的微孔盤讀儀或光度計。要誠實打這一分，先確認取用權。' }],
              [{ en: 'Control in the same protocol', zh: '對照寫在同一份流程裡' }, '2', '2', '2', '2', '2',
               { en: 'Built in by construction: wild type, real-time arm, split sample, reader-free host, scrambled input.', zh: '結構上就內建：野生型、實時組、對半樣本、無讀取者宿主、打亂序列的輸入。' }],
              [{ en: 'Independent links that must work', zh: '必須成立的獨立環節數' }, '2', '2', '1', '2', '2',
               { en: 'SPLITFISH loses a point: expressing the enzyme, getting it to work in fish extract, and the comparison are arguably three links, not two.', zh: 'SPLITFISH 掉一分：表達酵素、讓它在魚肉萃取液中有效、再加上比較，可以說是三環而不是兩環。' }],
              [{ en: 'Somebody outside measures one number', zh: '外部的人量其中一個數字' }, '2', '2', '2', '1', '2',
               { en: 'ENDOREAD loses a point honestly: another iGEM team rebuilding six of your sensors is a replication, but it is not a laboratory with an independent method.', zh: 'ENDOREAD 誠實地掉一分：另一支 iGEM 隊伍重建你六個感測器是一次重現，但那不是一間有獨立方法的實驗室。' }],
              [{ en: 'The negative result is written down', zh: '負面結果已經寫下來' }, '2', '2', '2', '2', '2',
               { en: 'Written on each page, in one sentence, in advance. Copy ours or write a better one.', zh: '每一頁上都事先用一句話寫好了。抄我們的，或寫一句更好的。' }],
              [{ en: 'A baseline for every model', zh: '每個模型都有基準' }, '2', '2', '2', '2', '2',
               { en: 'Random-residue baseline, linear decay, the test\'s own blank, a shuffled-sequence baseline, and a scrambled input respectively.', zh: '分別是：隨機殘基基準、線性衰退、測試自己的空白、打亂序列基準，以及一個打亂的輸入。' }],
              [{ en: 'Who is affected, and have you asked them', zh: '誰受影響，而你問過他們了嗎' }, '1', '1', '2', '1', '1',
               { en: 'The honest zeros of this exercise. Four of the five serve *other researchers and other teams*. That is a real constituency, but a narrow one, and we have not asked them. Only SPLITFISH has vendors, inspectors and a poisoning statistic.', zh: '這個練習裡誠實的失分處。五個之中有四個服務的是**其他研究者與其他隊伍**——那是一個真實但狹窄的受眾，而我們還沒有問過他們。只有 SPLITFISH 有攤商、稽查人員，以及一個中毒統計。' }],
              [{ en: 'Does the biology leave containment', zh: '生物必須離開圍阻嗎' }, '2', '2', '2', '2', '2',
               { en: 'Nothing lives in any of the five deliverables, and DRYRUN is deliberately designed so that no engineered material has to travel.', zh: '五個交付物裡都沒有活的東西，而 DRYRUN 刻意被設計成不需要讓任何工程化材料旅行。' }],
              [{ en: 'Can one person explain the whole project', zh: '有一個人能解釋整個專案嗎' }, '2', '2', '1', '1', '2',
               { en: 'Two honest losses. SPLITFISH needs a member to learn Bland–Altman, Passing–Bablok and a legal limit; ENDOREAD needs one to explain what a rank correlation is and is not.', zh: '兩個誠實的失分。SPLITFISH 需要有成員學會 Bland–Altman、Passing–Bablok 與一個法定限值；ENDOREAD 需要有人能解釋「等級相關是什麼、不是什麼」。' }],
              [{ en: 'Will anything survive the season', zh: '有東西會在賽季之後留下來嗎' }, '2', '2', '2', '2', '2',
               { en: 'A part collection, a dataset with a protocol, a validation report, a design-rule dataset, a cross-reactivity matrix. All five outlive the wiki.', zh: '一組元件集、一份附流程的資料集、一份驗證報告、一份設計規則資料集、一張交叉反應矩陣。五個都活得比 wiki 久。' }],
              [{ en: '**Total out of 20**', zh: '**20 分滿分總計**' }, '**19**', '**19**', '**18**', '**17**', '**19**',
               { en: 'Which tells you almost nothing, and that is the lesson below.', zh: '這幾乎沒告訴你任何事，而那就是下面那一課。' }]
            ],
            min: 1100,
            source: { en: 'Scored by us against our own sheet on [the 2027 roadmap](#x-roadmap). Scores for ideas nobody has run are predictions about ourselves, which is the weakest kind of evidence on this site.', zh: '由我們依[2027 選題指南](#x-roadmap)上自己的表評分。給「沒有人做過的題目」打的分數，是對我們自己的預測，而那是本站最弱的一種證據。' }
          }) +
          h.take({ en: 'What the high scores actually mean', zh: '高分真正的意思' }, {
            en: 'A sheet you design a project against will always score that project highly. **The sheet is a tool for comparing topics you brought from somewhere else, not a target to optimise.** The useful output above is not the totals. It is the seven places where we could not honestly award a 2: four of the five ideas serve researchers rather than people, SPLITFISH is longer than two links and harder to explain, and ENDOREAD\'s outsider is a peer rather than an independent method. Those seven ones carry more information than the forty-three twos. If your own candidate topic scores 19, go back and find the row where you are flattering yourself.',
            zh: '一張你拿來設計專案的表，永遠會給那個專案高分。**這張表是用來比較「你從別處帶來的題目」的工具，不是一個該去最佳化的目標。**上面有用的產出不是總分，而是那七個我們無法誠實給 2 分的地方：五個題目裡有四個服務的是研究者而不是一般人、SPLITFISH 比兩環長又比較難解釋、而 ENDOREAD 的外部人是同儕而不是一個獨立方法。那七個 1 分比那四十三個 2 分更有資訊量。如果你自己的候選題目拿到 19 分，回去找那一列你在自我奉承的地方。'
          })
      });

      /* ---------------- rejected ---------------- */
      out += h.sec({
        id: 'ix-not',
        kick: { en: 'Rejected', zh: '被丟掉的' },
        h2: { en: 'Five ideas we worked up and threw away, and the gate that killed each one', zh: '我們做過功課後丟掉的五個題目，以及各自死在哪一關' },
        lede: {
          en: 'Published because the rejections carry more information than the survivors. Each of these is a topic a 2027 team might otherwise spend February on.',
          zh: '公開這些，是因為被否決的比存活的更有資訊量。這裡每一個都可能是某支 2027 隊伍會拿二月去燒掉的題目。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'died at gate 4', zh: '死在第四關' }, k: 'r' }],
              h: { en: 'Re-measuring other teams\' prize-winning parts', zh: '重新量測別的隊伍得獎的元件' },
              p: { en: 'Take ten past Best Part winners, express them in one chassis under one protocol, and publish which claims reproduce. We liked it for a week. It dies on the outsider gate in an unusual way: **the outsider is the original team, and they cannot disagree with you about their own part without a dispute.** A replication study whose subject is other school students is the wrong instrument for a school to pick up, and the version that avoids that, replicating your own parts, is not interesting.', zh: '拿十個過去的最佳元件得獎者，在同一個宿主、同一套流程下表達，然後公開哪些主張可以重現。我們喜歡了它一個星期。它以一種不尋常的方式死在「外部人」那一關：**外部人就是原作團隊，而他們無法在「自己的元件」這件事上跟你不一致而不變成爭執。**一份以其他學校學生為對象的重現性研究，不是一間學校該拿起來的工具；而避開這點的版本——重現自己的元件——又不有趣。' },
              foot: { en: 'If somebody does run it, run it on parts from large consortia, not on student parts.', zh: '如果真有人要做，請拿大型聯盟的元件來做，不要拿學生的元件。' } },
            { chips: [{ t: { en: 'died at gate 3', zh: '死在第三關' }, k: 'r' }],
              h: { en: 'A school-grade absolute-units calibration round robin', zh: '學校等級的絕對單位跨校循環測試' },
              p: { en: 'Ship an identical calibration kit to eight partner schools, have everybody measure the same reference construct, and publish the between-school variance. A genuinely useful study, and we would read it. It dies on link counting: **every partner school is a link, and eight links that can each fail independently is not a project a school can steer.** It also runs straight into the rule about taking material out of the lab. The salvage is inside DRYRUN, which keeps the idea of an outside reader but survives losing one.', zh: '把一套完全相同的校正套件寄給八所夥伴學校，讓所有人量測同一個參考構築，然後公開校際變異度。這是一份真正有用的研究，我們會想讀。它死在環節計數上：**每一所夥伴學校都是一環，而八個能各自獨立失敗的環節，不是一支學校隊伍能駕駛的專案。**它同時直接撞上「把材料帶出實驗室」那條規定。可回收的部分放進了 DRYRUN，它保留了「外部讀取者」這個想法，但少一個也還活著。' },
              foot: { en: 'Also: iGEM\'s own InterLab study last ran in 2023. Check what exists before you rebuild it.', zh: '另外：iGEM 自己的 InterLab 研究最後一次是 2023 年。在你重蓋之前，先查清楚已經有什麼。' } },
            { chips: [{ t: { en: 'died at gate 1', zh: '死在第一關' }, k: 'r' }],
              h: { en: 'Anything that degrades a pollutant', zh: '任何「降解某個污染物」的題目' },
              p: { en: 'Twenty-one High School teams registered in Bioremediation in 2026 and none placed, while the same village produced four Top 10 teams across the two senior sections. Our reading is not that the biology is harder. It is that **the readout is harder.** Showing that a compound is gone needs chromatography a school rarely has; showing that cells grew in its presence is a different claim. If you want this village, the project is the measurement, and you should read HKSSC\'s page before you commit.', zh: '2026 年有 21 支高中部隊伍登記在生物復育村，沒有一支得名；而同一個村別在兩個高年級組別共產出四支前十名隊伍。我們的判讀不是生物學比較難——而是**讀值比較難。**要證明一個化合物不見了，需要學校很少有的層析設備；而要證明細胞在它存在下長起來了，那是另一個主張。如果你想要這個村別，那麼專案本身就是那個量測，而且你應該在定案之前先讀 HKSSC 的頁面。' },
              foot: { en: 'The village table is on Three tiers. 0 of 21 is one year of data, not a law.', zh: '村別表在三層分析頁。21 取 0 是一年的資料，不是定律。' } },
            { chips: [{ t: { en: 'died at gate 3', zh: '死在第三關' }, k: 'a' }],
              h: { en: 'A paper nucleic-acid test with an amplification step', zh: '帶放大步驟的紙上核酸檢測' },
              p: { en: 'The most popular High School diagnostic shape, and two 2026 Top 10 teams show you the cost: **GHCIS** published a colour test whose amplification step never appears in the results, and **HongKong-HS** got its amplification half to work on three readouts while the recognition half gave 1.51× and not significant. Both placed, because both said so plainly. The chain is sample → extract → amplify → recognise → report, which is four or five links. If you want the shape, buy the amplification as a kit and treat it as an instrument, not a result.', zh: '最受歡迎的高中部診斷形狀，而 2026 年有兩支前十名隊伍替你示範了代價：**GHCIS** 公開了一個顯色測試，而它的放大步驟從未出現在結果裡；**HongKong-HS** 的「放大」那一半在三種讀值上都成立，而「辨識」那一半只有 1.51 倍且不顯著。兩隊都得名了，因為兩隊都明說了。那條鏈是 樣本 → 萃取 → 放大 → 辨識 → 報告，也就是四到五環。如果你想要這個形狀，就把放大當成試劑盒買來、當成儀器看待，而不是當成一個結果。' },
              foot: { en: 'Or cut the amplification entirely by choosing an analyte that is already abundant. That is how SPLITFISH got to two links.', zh: '或者直接砍掉放大——挑一個本來就大量存在的分析物。SPLITFISH 就是這樣變成兩環的。' } },
            { chips: [{ t: { en: 'died at gate 5', zh: '死在第五關' }, k: 'a' }],
              h: { en: 'A survey-driven education project with a measured outcome', zh: '以問卷驅動、並量測成效的教育專案' },
              p: { en: 'Teach a module to 300 students, measure knowledge before and after, publish the gain. We could not write an honest negative result for it: a pre-post gain in a group that volunteered, taught by the people who wrote the test, will be positive. Making it falsifiable means a control group that gets a different lesson, which a school can run but which has nothing to do with synthetic biology. **HFI** won Best Education in 2026 without claiming a measured learning outcome, which we think is the right answer.', zh: '對 300 名學生上一個單元，量測前後知識，公開成長幅度。我們沒辦法為它寫出一個誠實的負面結果：一群自願參加、由出題的人來教的學生，前後測的成長一定是正的。要讓它可被否證，就需要一個上不同課程的對照組，而那是一間學校做得到、但與合成生物學毫無關係的研究設計。**HFI** 在 2026 年拿下最佳教育獎，並沒有主張任何被量測的學習成效，我們認為那才是正確答案。' },
              foot: { en: 'Education is worth doing. It is not worth faking a measurement for.', zh: '教育值得做。但不值得為它假造一個量測。' } }
          ]) +
          h.warn({
            en: 'The honest summary of this page: **we are a team that read thirty wikis, not a team that has run any of these five projects.** The arithmetic is checked, the literature and official numbers are cited where they appear, and the plans are specific enough to argue with, which is the most we can offer. If you take one of these and it fails for a reason we did not anticipate, that failure is a better contribution to the competition than this page is, and we would like to read it.',
            zh: '本頁誠實的總結是：**我們是一支讀了三十個 wiki 的隊伍，不是一支做過這五個專案中任何一個的隊伍。**算術查過了、文獻與官方數字在出現處標了來源、計畫寫得具體到可以被反駁——這就是我們能提供的全部。如果你拿了其中一個去做，而它因為我們沒預料到的理由失敗了，那次失敗對這個競賽的貢獻比本頁更大，而我們會很想讀到它。'
          })
      });

      return out;
    }
  };
})(window);
