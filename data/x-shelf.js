/* Idea 2 — DRYRUN. The shelf life of a dried reaction as the result, with a pre-registered
   extrapolation the real-time arm is allowed to falsify. Ours; never run.
   Literature figures are cited inline. The iGEM prior-art counts come from a crawl of every
   registered team wiki 2022-2026 (2,012 wikis, 21,934 pages); release and transport rules are
   quoted from the official pages. All sources are in notes/2027-idea-sources.md */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var SWIM = {
    wet: [
      { l: { en: 'Make one batch, and only one', zh: '只做一批，就一批' },
        s: { en: 'Every aliquot in the study comes from one preparation, split on one day, or the arms are not comparable', zh: '研究中每個分裝都來自同一次製備、同一天分裝，否則各組不可比' }, tone: 'g' },
      { l: { en: 'Dry it in three formulations', zh: '用三種配方乾燥它' },
        s: { en: 'Unprotected, plus two excipients. Three arms is what makes a ranking reversal visible instead of invisible', zh: '無保護，加上兩種賦形劑。三組才能讓排序翻轉「看得見」而不是看不見' } },
      { l: { en: 'Measure fresh and dried as two different things', zh: '把「新鮮」與「乾燥後」當成兩件事量' },
        s: { en: 'Drying alone can cost most of the signal; if you skip this point you will blame storage for it', zh: '光是乾燥就可能吃掉大部分訊號；少了這個點，你會把它算到儲存頭上' }, tone: 'g' },
      { l: { en: 'Four temperatures, humidity fixed and logged', zh: '四個溫度，濕度固定並記錄' },
        s: { en: 'Sealed boxes over saturated salt, a logger in each. The storage condition is data, not an assumption', zh: '密封盒放在飽和鹽上方，每個盒子一個記錄器。儲存條件是數據，不是假設' } },
      { l: { en: 'Read the same plate layout every time', zh: '每次都用同一個盤位配置讀' },
        s: { en: 'Same wells, same gain, one reagent lot, a frozen reference on every plate. Drift invents a decay curve', zh: '同樣的孔、同樣的增益、一批試劑，每盤都放冷凍參考。飄移會自己發明衰退曲線' }, tone: 'g' }
    ],
    dry: [
      { l: { en: 'Pre-register the prediction and the failure criteria', zh: '事先登記預測與失敗判準' },
        s: { en: 'Fit the warm arms, predict the room-temperature half-life, list what would prove it wrong — before looking', zh: '擬合溫暖各組、預測室溫半衰期，並列出什麼會證明它是錯的——在看之前' }, tone: 'v' },
      { l: { en: 'Fit three kinetics, not one', zh: '擬合三種動力學，不是一種' },
        s: { en: 'First order, second order and Weibull, then say which won. Published dried enzymes have gone either way', zh: '一階、二階與 Weibull，然後說哪一個贏。已發表的乾燥酵素兩種結果都出現過' }, tone: 'v' },
      { l: { en: 'Arrhenius on the winner, with an interval', zh: '對贏的那個做 Arrhenius，附區間' },
        s: { en: 'An activation energy with a confidence interval, and a check for curvature near the glass transition', zh: '一個帶信賴區間的活化能，並檢查玻璃轉移附近有沒有曲率' }, tone: 'v' },
      { l: { en: 'Open the real-time arm and compare', zh: '打開實時組並比較' },
        s: { en: 'Predicted against measured, as a ratio with its uncertainty. This single number is the project', zh: '預測對實測，以帶不確定度的比值表示。這一個數字就是整個專案' }, tone: 'v' },
      { l: { en: 'Publish the dataset, not the conclusion', zh: '公開資料集，不是結論' },
        s: { en: 'Every reading with its date, temperature and logged humidity, so somebody can refit it differently', zh: '每個讀值連同日期、溫度與紀錄的濕度，好讓別人能用不同方式重新擬合' }, tone: 'v' }
    ],
    links: [
      { w: 2, d: 1, l: { en: 'the dried zero point sets every later ratio', zh: '乾燥後的零點決定之後每個比值' }, up: false },
      { w: 3, d: 2, l: { en: 'the warm arms make the prediction', zh: '溫暖各組做出那個預測' }, up: false }
    ]
  };

  PD.pages['x-shelf'] = {
    label: { en: 'Idea 2 · DRYRUN', zh: '題目二 · DRYRUN' },
    title: { en: 'DRYRUN — the shelf life is the result', zh: 'DRYRUN——把保存期限做成結果' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Idea 2 of 5 · our proposal, never run · Diagnostics',
          zh: '五個題目中的第二個 · 我們的提案，從未執行 · 診斷'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Five seasons of iGEM, 2,012 wikis, 591 teams that mention freeze-drying. ==Not one published a decay curve.==',
          zh: '五個賽季的 iGEM、2,012 個 wiki、591 支提到冷凍乾燥的隊伍。==沒有一支公開過一條衰退曲線。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'We crawled every registered iGEM team wiki from 2022 to 2026 — **21,934 pages** — looking for one thing: activity retained after a stated time at a stated temperature. **591 teams mention lyophilisation, freeze-drying or shelf life. The best measured datum in five years is a single four-day time point.** No team has ever run an accelerated-aging study with a temperature fit; one 2025 team built the shelf-life model and wrote down that it had no data to fit it with. Meanwhile the published literature on this exact question is brutal — an unprotected freeze-dried *E. coli* cell-free reaction loses **half its signal in one day at room temperature and all of it by day seven**, and the same system with the right excipients holds **100 % for a month**. The gap between a bench demonstration and a field claim is a factor of thirty, nobody in this competition has measured it, and **a school team with a cupboard can.**',
          zh: '我們爬過了 2022 到 2026 年每一個已登記的 iGEM 隊伍 wiki——**21,934 個頁面**——只找一件東西：在明確的時間、明確的溫度之後保留了多少活性。**有 591 支隊伍提到冷凍乾燥或保存期限。而五年之內最好的實測數據，是單一個「第四天」的時間點。**從來沒有任何隊伍做過帶溫度擬合的加速老化研究；2025 年有一支隊伍把保存期限模型做出來了，並且寫明他們沒有資料可以去擬合它。而已發表的文獻對這個問題的答案很殘酷——一個沒有保護的冷凍乾燥 *E. coli* 無細胞反應，在室溫下**一天就失去一半訊號、到第七天全部失去**；而同一個系統配上正確的賦形劑，可以**一個月維持 100%**。「實驗檯上的展示」與「田野的主張」之間的落差是三十倍，這個競賽裡沒有人量過它，而**一支有一個櫃子的學校團隊量得出來。**'
        }) + '</p>' +
        h.stats([
          { v: '0', l: { en: 'Decay curves published by any iGEM team in five seasons', zh: '五個賽季中任何 iGEM 隊伍公開過的衰退曲線數' } },
          { v: '1 day', l: { en: 'To lose half the signal, unprotected, at room temperature, in the literature', zh: '文獻中無保護、室溫下失去一半訊號所需的時間' } },
          { v: '30×', l: { en: 'Difference the published excipient formulations make', zh: '已發表的賦形劑配方造成的差距倍數' } },
          { v: '7', l: { en: 'Pre-registered criteria that would tell you the extrapolation failed', zh: '事先登記的判準數，用來判斷外推失敗了' } },
          { v: '0', l: { en: 'Of these experiments we have run. This is a plan', zh: '這些實驗我們做過幾個。這是一份計畫' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'dr-why', t: { en: 'Why it is a project', zh: '為什麼這是個專案' } },
        { id: 'dr-prior', t: { en: 'Who got closest', zh: '誰最接近' } },
        { id: 'dr-num', t: { en: 'What the literature says', zh: '文獻說了什麼' } },
        { id: 'dr-what', t: { en: 'What you deliver', zh: '你交付什麼' } },
        { id: 'dr-gate', t: { en: 'The five gates', zh: '五道關卡' } },
        { id: 'dr-flow', t: { en: 'The workflow', zh: '工作流程' } },
        { id: 'dr-fail', t: { en: 'Seven failure criteria', zh: '七個失敗判準' } },
        { id: 'dr-rule', t: { en: 'What may leave the lab', zh: '什麼可以離開實驗室' } },
        { id: 'dr-tool', t: { en: 'Tools and money', zh: '工具與錢' } },
        { id: 'dr-plan', t: { en: 'The schedule', zh: '行程' } },
        { id: 'dr-risk', t: { en: 'What kills it', zh: '什麼會殺死它' } },
        { id: 'dr-ship', t: { en: 'What it ships', zh: '它交付什麼出去' } }
      ]);

      /* ---------------- why ---------------- */
      out += h.sec({
        id: 'dr-why',
        kick: { en: 'The argument', zh: '論證' },
        h2: { en: 'Deployment is a claim about time, and nobody measures time', zh: '「可部署」是一個關於時間的主張，而沒有人量時間' },
        body:
          h.p({
            en: 'Almost every applied project in this competition ends with the same sentence: *this could be used where the laboratory is not.* A clinic without a cold room. A farm. A fish market. A water source two hours from a road. Every one of those settings is defined by **a delay between making the reagent and using it**, and that delay is the variable nobody reports. A dose–response curve tells you the test works on the day it was made. It tells you nothing about the only condition that separates a field test from a bench test.',
            zh: '這個競賽裡幾乎每一個應用型專案，都以同一句話結尾：*這可以用在實驗室不在的地方。*一間沒有冷房的診所。一座農場。一個魚市場。一個離馬路兩小時的水源。這些場景每一個都是由**「做出試劑」與「使用試劑」之間的那段延遲**所定義的，而那段延遲正是沒有人報告的那個變數。一條劑量反應曲線告訴你的是：這個測試在它被製造出來的那一天有效。它完全沒有告訴你那個唯一能把田野測試與實驗檯測試區分開來的條件。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'the gap, counted', zh: '那個缺口，數出來的' }, k: 'r' }],
              h: { en: 'Zero across five seasons, not just thirty wikis', zh: '五個賽季都是零，不只是三十個 wiki' },
              p: { en: 'We did not rely on reading the 2026 Top 10. We enumerated every registered team from **2022 to 2026** — 2,012 wikis with a registered address — and crawled up to fourteen pages each, **21,934 pages in all**, then ran a second deeper pass over the 591 teams that mention freeze-drying or shelf life. **Not one published a decay curve.** The best measured stability datum in five seasons is a single storage time point: **four days**, properly controlled, from Cambridge 2025.', zh: '我們沒有只靠讀 2026 年的前十名。我們列舉了 **2022 到 2026 年**每一支已登記的隊伍——有登記網址的共 2,012 個 wiki——每個爬最多十四頁、**總共 21,934 頁**，然後對其中 591 支提到冷凍乾燥或保存期限的隊伍再跑一次更深的掃描。**沒有一支公開過衰退曲線。**五個賽季中最好的實測穩定性數據，是單一個儲存時間點：**四天**，而且對照做得好，來自 Cambridge 2025。' },
              foot: { en: 'Crawl counts are ours, from the iGEM teams API and the per-team wiki endpoint, 23 Nov 2026.', zh: '爬取統計是我們做的，取自 iGEM 的 teams API 與各隊 wiki 端點，2026 年 11 月 23 日。' } },
            { chips: [{ t: { en: 'the design', zh: '那個設計' }, k: 'g' }],
              h: { en: 'The prediction is written before the answer is visible', zh: '預測在答案可見之前就寫好' },
              p: { en: 'Accelerated aging is standard industrial practice: store warm, fit the rate against temperature, extrapolate down. The part almost nobody publishes is the **check** — a real-time arm held back, and the honest ratio between extrapolation and truth. The World Health Organization\'s vaccine stability guideline is blunt about why: the analysis "**should not extrapolate from the accelerated conditions to the storage condition on the product label**, but rather be a direct comparison of the loss rates at the accelerated temperatures".', zh: '加速老化是標準的產業做法：溫度放高、把速率對溫度擬合、往下外推。幾乎沒有人公開的那一部分是**檢驗**——留下一組實時資料，並誠實給出外推與真相之間的比值。世界衛生組織的疫苗穩定性指引對理由講得很直接：分析「**不應從加速條件外推到產品標籤上的儲存條件**，而應該是對各加速溫度下損失速率的直接比較」。' },
              foot: { en: 'WHO TRS No. 962, Annex 3, §7. The strongest citation on this page.', zh: 'WHO TRS 第 962 號，附件 3，第 7 節。本頁最有力的引用。' } },
            { chips: [{ t: { en: 'why a school', zh: '為什麼是學校' }, k: 'b' }],
              h: { en: 'The scarce resource is patience, which schools have', zh: '稀缺資源是耐性，而學校有' },
              p: { en: 'A university group rarely spends eight months watching one preparation decay; a school team has nine months and a cupboard. None of the expensive parts of synthetic biology is needed. One published protocol does not even need a freeze-dryer — **open-air drying with trehalose** took a cell-free reaction from dead in a day to a tenfold loss only after **40 days at 37 °C** ([Karig 2017](https://doi.org/10.1098/rsif.2016.1039)).', zh: '一個大學研究群很少花八個月看著一份製備衰退；而一支學校團隊有九個月和一個櫃子。合成生物學裡昂貴的那些部分一個都不需要。有一份已發表的流程甚至不需要冷凍乾燥機——**用海藻糖做常壓風乾**，就把一個無細胞反應從「一天就死」變成「在 37 °C 下要到 **40 天**才掉十倍」（[Karig 2017](https://doi.org/10.1098/rsif.2016.1039)）。' },
              foot: { en: 'It is also the one idea on this site that cannot be rescued in September.', zh: '它也是本站上唯一一個九月無法補救的題目。' } }
          ]) +
          h.note({
            en: 'Be clear-eyed about one thing: **this is not a new technique.** Accelerated stability testing is routine in pharmaceutical and device engineering, with standards and a large literature behind it. What is new is doing it inside iGEM, on a reaction a student team built, and publishing the comparison between the extrapolation and the real-time data. The contribution is the dataset and the honesty of the check, not the method.',
            zh: '有一件事要看清楚：**這不是一項新技術。**加速穩定性測試在製藥與裝置工程中是常規，背後有標準與大量文獻。新的地方在於：把它放進 iGEM、用在一支學生團隊自己做出來的反應上，並公開外推與實時資料之間的比較。貢獻是那份資料集與那個檢驗的誠實，不是方法本身。'
          })
      });

      /* ---------------- prior art ---------------- */
      out += h.sec({
        id: 'dr-prior',
        kick: { en: 'Prior art', zh: '前人做過的' },
        h2: { en: 'Four teams got close. Read all four before you start', zh: '有四支隊伍很接近。開始之前先把四支都讀完' },
        lede: {
          en: 'An idea nobody has done is either an opening or a bad idea, and the way to tell the difference is to read the people who nearly did it. Three of these four stopped for reasons you can design around; the fourth tells you the gap exists in its own words.',
          zh: '一個沒人做過的題目，要嘛是一個機會、要嘛是一個壞主意；而分辨的方法，是去讀那些差一點就做了的人。這四支裡有三支停下來的理由是你可以設計規避的；第四支則用他們自己的話告訴你那個缺口存在。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '18%' },
              { t: { en: 'How far they got', zh: '他們走到哪裡' } },
              { t: { en: 'What that tells you', zh: '這告訴你什麼' }, w: '27%' }
            ],
            rows: [
              [{ en: '**Cambridge 2025**', zh: '**Cambridge 2025**' },
               { en: 'The best measured stability result in five seasons, and it is **one time point**. Paper discs with bound DNA probes, stored four days either refrigerated or lyophilised-and-kept-dry, then run through the same assay against target, non-target and no-target. The stored discs still gave target-specific signal, with the statistics published.', zh: '五個賽季中最好的實測穩定性結果，而它是**一個時間點**。帶有結合 DNA 探針的紙圓片，冷藏或冷凍乾燥後保持乾燥存放四天，再用同一套試驗對標的、非標的與無標的跑一次。存放後的圓片仍然給出標的專一的訊號，統計數據也公開了。' },
               { en: 'The design is right and the time axis is missing. **Four points instead of one, and you have the curve nobody has.**', zh: '設計是對的，缺的是時間軸。**把一個點變成四個點，你就有了那條沒有人擁有的曲線。**' }],
              [{ en: '**UZurich 2025**', zh: '**UZurich 2025**' },
               { en: 'Contributed an enzyme-stability tool "based on the Arrhenius equation" for "testing the real-world performance and shelf-life of a diagnostic", with a time-to-threshold heatmap. It is **a model only**, parameterised from size-matched proxy proteins in the literature, and the team documents its own "pragmatic approach to parameterization in the face of data scarcity".', zh: '他們貢獻了一個「基於 Arrhenius 方程」的酵素穩定性工具，用於「測試診斷產品的真實世界表現與保存期限」，並附一張「到達門檻時間」熱圖。它**只是一個模型**，參數取自文獻中尺寸相近的替代蛋白，而該隊自己記錄了他們面對「資料稀缺」時所採取的「務實參數化做法」。' },
               { en: 'The most useful sentence in this table is theirs: **the model exists and the data to fit it does not.** That is the gap, stated by the people who built the model.', zh: '這張表裡最有用的一句話是他們的：**模型已經存在，而用來擬合它的資料不存在。**那就是缺口，而且是由做出那個模型的人說出來的。' }],
              [{ en: '**Mingdao 2024**', zh: '**Mingdao 2024**' },
               { en: 'Wrote your real-time arm as a protocol, almost word for word: "analyze the enzyme activities in freeze-dried yeast powder stored at **37 °C over a period of 2 to 16 weeks**." **No results were published.**', zh: '把你的實時組幾乎逐字寫成了流程：「分析在 **37 °C 下存放 2 至 16 週**的冷凍乾燥酵母粉中的酵素活性。」**沒有公開任何結果。**' },
               { en: 'A High School team designed this study two years ago and did not finish it. Ask yourself why before you commit — our answer is that it was scheduled too late to survive.', zh: '兩年前就有一支高中部隊伍設計了這份研究，而且沒有做完。在你定案之前先問自己為什麼——我們的答案是：它被排得太晚，撐不下去。' }],
              [{ en: '**Lambert-GA 2021**', zh: '**Lambert-GA 2021**' },
               { en: 'Stated that lyophilised cells "hold a consistent shelf life of at least six days in a room-temperature environment", with extending it listed as future work. We could not open the 2021 wiki to check the figure ourselves — treat it as unverified.', zh: '寫到冷凍乾燥的細胞「在室溫環境下能維持至少六天的穩定保存期限」，並把延長它列為未來工作。我們無法打開 2021 年的 wiki 自行確認那個數字——請視為未經驗證。' },
               { en: 'Even the team that later built an externally validated dryer left shelf life at one number and a promise. **It is nobody\'s priority, which is exactly why it is available.**', zh: '即使是後來做出經外部驗證乾燥器的那支隊伍，也把保存期限停在一個數字與一個承諾。**它不是任何人的優先事項，而這正是它可以被拿走的原因。**' }]
            ],
            min: 980,
            source: { en: 'Found by our crawl of 2,012 team wikis, then read page by page. We are describing what each wiki publishes, not judging the teams: three of the four are strong projects that chose to spend their season elsewhere, which is a legitimate choice and the reason this opening is still open.', zh: '由我們對 2,012 個隊伍 wiki 的爬取找出，再逐頁閱讀。我們描述的是各 wiki 公開了什麼，不是在評判這些隊伍：四支中有三支是很強的專案，只是選擇把賽季花在別的地方，那是一個正當的選擇，也是這個機會至今仍然開著的原因。' }
          }) +
          h.note({
            en: 'One more thing the crawl found, and we are deliberately not naming the teams: **several wikis carry a stability number with no method, no figure and no time series behind it** — "retained functionality after four weeks at 40 °C" in a bullet list, "functional for up to six months at room temperature" on a safety page, "18 months at room temperature" quoted from an interview. We are not naming them because the point is not that they are wrong. The point is that a number like that is **exactly what your project would replace**, and that a reader cannot tell the difference between a measured shelf life and an assumed one unless somebody publishes the method. Several of those claims are also, on the published literature above, implausible for an unprotected preparation.',
            zh: '爬取還找到一件事，而我們刻意不指名那些隊伍：**有好幾個 wiki 上掛著一個保存期限數字，背後沒有方法、沒有圖、也沒有時間序列**——某份項目清單裡的「在 40 °C 下四週後仍保有功能」、某個安全頁上的「室溫下可用達六個月」、某段訪談裡被引述的「室溫 18 個月」。我們不指名，因為重點不是他們錯了。重點是：這樣的一個數字**正是你的專案要去取代的東西**，而讀者無法分辨一個保存期限是被量出來的、還是被假設的——除非有人把方法公開。而依上面那些已發表的文獻，其中有幾個主張對一個沒有保護的製備而言，也不太可能成立。'
          })
      });

      /* ---------------- the numbers ---------------- */
      out += h.sec({
        id: 'dr-num',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'The numbers you are aiming at, all of them somebody else\'s', zh: '你要瞄準的那些數字，全部都是別人的' },
        lede: {
          en: 'Read this table before you design the arms. It tells you which temperatures will give you a curve, which excipients are worth a run, and what a published half-life on a dried enzyme actually looks like.',
          zh: '在你設計各組之前先讀這張表。它告訴你哪些溫度會給你一條曲線、哪些賦形劑值得花一輪，以及一個已發表的乾燥酵素半衰期實際長什麼樣子。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What was measured', zh: '量了什麼' }, w: '26%' },
              { t: { en: 'The number', zh: '那個數字' } },
              { t: { en: 'Source', zh: '出處' }, w: '22%' }
            ],
            rows: [
              [{ en: 'Unprotected freeze-dried *E. coli* cell-free reaction, room temperature', zh: '無保護的冷凍乾燥 *E. coli* 無細胞反應，室溫' },
               { en: '**50 % of signal lost after one day**; 75 % by days 4–5; "By day 7 (1 week), all stability was lost". Freeze-drying itself cost about **63 %** of the fresh signal before storage even began.', zh: '**一天後失去 50% 訊號**；到第 4–5 天失去 75%；「到第 7 天（一週），全部穩定性都失去了」。而光是冷凍乾燥本身，在儲存還沒開始之前就吃掉了約 **63%** 的新鮮訊號。' },
               { en: 'Shivakumar et al. 2025, *Bioengineering* 12(3):223, [DOI](https://doi.org/10.3390/bioengineering12030223)', zh: 'Shivakumar 等，2025，*Bioengineering* 12(3):223，[DOI](https://doi.org/10.3390/bioengineering12030223)' }],
              [{ en: 'The same system with an optimised excipient mix', zh: '同一系統，配上最佳化的賦形劑組合' },
               { en: '25 mM maltodextrin + 20 mM β-lactose + PEG 6000: **no significant loss from week 0 to week 4** (p = 0.81), below 50 % by week 6, **inactive by week 8**. The cleanest published decay curve to copy a protocol from.', zh: '25 mM 麥芽糊精 ＋ 20 mM β-乳糖 ＋ PEG 6000：**第 0 到第 4 週沒有顯著損失**（p = 0.81），第 6 週低於 50%，**第 8 週失活**。這是最乾淨、最值得照抄流程的一條已發表衰退曲線。' },
               { en: 'Same paper', zh: '同一篇' }],
              [{ en: 'Open-air dried reaction with trehalose, held at 37 °C', zh: '加海藻糖常壓風乾的反應，持續置於 37 °C' },
               { en: 'Without trehalose the mixture "lacked viability after **1 day**"; with it, no full tenfold yield loss "until after **40 days at 37 °C**". Separating the phosphate donor during drying pushed measurable signal out to **eight months at 37 °C**. **No freeze-dryer was used.**', zh: '不加海藻糖的混合物「**1 天**後就失去活性」；加了之後，要到「**37 °C 下 40 天**之後」才出現完整的十倍產量損失。而在乾燥時把磷酸供體分開，把可量測訊號推到 **37 °C 下八個月**。**過程中沒有用到冷凍乾燥機。**' },
               { en: 'Karig et al. 2017, *J R Soc Interface* 14(129), [DOI](https://doi.org/10.1098/rsif.2016.1039)', zh: 'Karig 等，2017，*J R Soc Interface* 14(129)，[DOI](https://doi.org/10.1098/rsif.2016.1039)' }],
              [{ en: 'Freeze-dried PURE-system pellets, room temperature', zh: '冷凍乾燥的 PURE 系統小球，室溫' },
               { en: 'Activity remaining "after **a year of room temperature storage**" — but the methods state storage was "protected from light, **under nitrogen gas** and in the presence of silica gel desiccation packages". **The year-at-room-temperature claim is a controlled-atmosphere claim**, and it is a purified system, not a crude lysate.', zh: '「在**室溫儲存一年**之後」仍有活性——但方法一節寫明儲存是「避光、**在氮氣下**、並放有矽膠乾燥包」。**那個「室溫一年」的主張是一個受控氣氛下的主張**，而且它是一個純化系統，不是粗萃取物。' },
               { en: 'Pardee et al. 2014, *Cell* 159(4):940, [DOI](https://doi.org/10.1016/j.cell.2014.10.004)', zh: 'Pardee 等，2014，*Cell* 159(4):940，[DOI](https://doi.org/10.1016/j.cell.2014.10.004)' }],
              [{ en: 'Sugar dose–response, five sugars over 0–120 mM', zh: '糖的劑量反應，五種糖、0–120 mM' },
               { en: 'Non-monotonic. Best retention around **5 mM** trehalose, maltose or lactose; trehalose peaked at **125 % of fresh at 3.7 mM**. And the finding that changes your design: yields were "the **same after 1 day and 2 weeks** of dry storage" — **the loss is front-loaded at the drying step, not during storage.**', zh: '非單調。最佳保留出現在約 **5 mM** 的海藻糖、麥芽糖或乳糖；海藻糖在 **3.7 mM 時達到新鮮值的 125%**。而真正會改變你設計的那個發現是：產量「在乾燥儲存 **1 天與 2 週後相同**」——**損失集中發生在乾燥那一步，不是在儲存期間。**' },
               { en: 'Guzman-Chavez et al. 2022, *ACS Synth Biol* 11(3):1114, [DOI](https://doi.org/10.1021/acssynbio.1c00342)', zh: 'Guzman-Chavez 等，2022，*ACS Synth Biol* 11(3):1114，[DOI](https://doi.org/10.1021/acssynbio.1c00342)' }],
              [{ en: 'A dried enzyme with a published half-life and an Arrhenius fit', zh: '一個有已發表半衰期與 Arrhenius 擬合的乾燥酵素' },
               { en: 'β-glucuronidase freeze-dried in plant tissue: half-life **69 days at 21 °C**. First-order, second-order and Weibull were all fitted; first order won; Arrhenius was then fitted to the first-order rate constants with **R² = 1.00**. **This is the analysis chain to copy.**', zh: '在植物組織中冷凍乾燥的 β-葡萄糖苷酸酶：**21 °C 下半衰期 69 天**。一階、二階與 Weibull 三種都擬合過；一階勝出；再對一階速率常數做 Arrhenius 擬合，**R² = 1.00**。**這就是該抄的分析鏈。**' },
               { en: 'Joh et al. 2006, *Biotechnol Prog* 22(3):723, [DOI](https://doi.org/10.1021/bp0503235)', zh: 'Joh 等，2006，*Biotechnol Prog* 22(3):723，[DOI](https://doi.org/10.1021/bp0503235)' }],
              [{ en: 'Activation energies for lyophilised products', zh: '冷凍乾燥產品的活化能' },
               { en: '"The majority… falls in the range of **8 to 25 kcal/mol**" — roughly 33 to 105 kJ/mol. Use it as a sanity check on your own fit, not as an input.', zh: '「大多數……落在 **8 到 25 kcal/mol** 的範圍」——大約 33 到 105 kJ/mol。把它當成對你自己擬合結果的合理性檢查，不是當成輸入值。' },
               { en: 'Shalaev et al. 2023, *J Pharm Sci* 112(6):1509, [DOI](https://doi.org/10.1016/j.xphs.2023.02.008)', zh: 'Shalaev 等，2023，*J Pharm Sci* 112(6):1509，[DOI](https://doi.org/10.1016/j.xphs.2023.02.008)' }],
              [{ en: 'Does dried material survive being posted?', zh: '乾燥材料寄得過去嗎？' },
               { en: 'Yes, and the precedent includes the part everybody forgets: dried mixtures were "stable 2 weeks after drying, **including transatlantic shipping and delays due to customs services**", with up to **60 % recovery** at three months.', zh: '可以，而且這個先例連大家都會忘記的那一段都包含在內：乾燥後的混合物「在乾燥後 2 週仍穩定，**包含跨大西洋運送與海關延誤**」，三個月時仍有高達 **60% 的回收**。' },
               { en: 'Guzman-Chavez et al. 2022, as above', zh: 'Guzman-Chavez 等，2022，同前' }]
            ],
            min: 1040,
            source: { en: 'Every figure in this table is from the cited paper, not from us, and we have read each one only as far as the quoted sentence. Verify them before you build a plan on them — and note the two papers that **disagree**: Shivakumar found sucrose and maltodextrin the worst performers in lysate, explicitly "not in agreement" with the work that found maltodextrin protective to 50 °C. Two competent laboratories disagree, which is a real and citable open question.', zh: '這張表裡的每一個數字都出自所引論文，不是我們的，而我們對每一篇的閱讀只到被引用的那句話為止。在你把計畫建立在它們之上之前，請自己確認——並注意有兩篇論文**彼此不一致**：Shivakumar 發現蔗糖與麥芽糊精在萃取液系統中表現最差，並明確寫到這與「發現麥芽糊精在 50 °C 仍有保護力」的研究「不一致」。兩間有能力的實驗室意見相反，這是一個真實而可引用的未解問題。' }
          }) +
          h.kv([
            [{ en: 'The standard conditions, so you can pick arms that mean something', zh: '那些標準條件，讓你挑出有意義的各組' },
             { en: 'ICH Q1A(R2) defines **accelerated** as 40 °C ± 2 °C / 75 % RH ± 5 %, **intermediate** as 30 °C / 65 % RH, and **long term** as the applicant\'s choice of 25 °C / 60 % RH **or** 30 °C / 65 % RH — choosing the second removes the intermediate condition. For a refrigerated product, long term is 5 °C and the *accelerated* condition is 25 °C, not 40 °C.', zh: 'ICH Q1A(R2) 把**加速**定義為 40 °C ± 2 °C／75% RH ± 5%、**中間**為 30 °C／65% RH，而**長期**由申請者在 25 °C／60% RH **或** 30 °C／65% RH 之間選擇——選後者就不需要中間條件。對冷藏產品而言，長期是 5 °C，而*加速*條件是 25 °C，不是 40 °C。' }],
            [{ en: 'What counts as a change', zh: '什麼算是一個變化' },
             { en: 'ICH\'s own definition of significant change is "a **5 % change in assay** from its initial value; **or failure to meet the acceptance criteria for potency when using biological or immunological procedures**." For an activity readout it is the second limb that applies, so **define your potency acceptance criterion before you start** rather than arguing about 5 % afterwards.', zh: 'ICH 自己對「顯著變化」的定義是：「相對初始值的**檢定值變化 5%**；**或在使用生物或免疫方法時未能符合效價的接受標準**。」對一個活性讀值而言，適用的是後半句，所以請**在開始之前就定義你的效價接受標準**，而不是事後才來爭論 5%。' }],
            [{ en: 'How far you may extrapolate', zh: '你可以外推多遠' },
             { en: 'ICH Q1E allows, at best, up to **twice but not more than 12 months beyond** the long-term data — and only when there is no significant change at the accelerated condition and a statistical analysis supports it. With variability and no analysis it falls to 1.5× and 6 months. **A nine-month season does not buy you a two-year claim.**', zh: 'ICH Q1E 最寬的情況也只允許外推到長期資料的**兩倍、且不超過其後 12 個月**——而且僅限於加速條件下沒有顯著變化、並且有統計分析支持時。若資料有變異而又沒有做分析，上限降為 1.5 倍與 6 個月。**一個九個月的賽季，買不到一個兩年的主張。**' }],
            [{ en: 'The correction we had to make to our own draft', zh: '我們必須對自己草稿做的更正' },
             { en: 'It is widely repeated that the accelerated-aging standard **ASTM F1980** prescribes a temperature coefficient of 2. It does not: the standard\'s own text says "Determining AAFs are beyond the scope of this guide", requires "**conservative**" factors when little is known, calls an accelerated expiry "**tentative** until the results of real time aging studies are completed", and requires real-time studies to run **in parallel**. Attribute the ten-degree rule to the device literature, not to the standard.', zh: '一個被廣泛重複的說法是：加速老化標準 **ASTM F1980** 規定了溫度係數為 2。它沒有：該標準自己的文字寫著「決定加速老化因子超出本指引的範圍」，要求在所知甚少時使用「**保守的**」係數，稱由加速資料得到的有效期是「**暫定的**，直到實時老化研究的結果完成」，並要求實時研究**並行**進行。請把「十度法則」歸給裝置領域的文獻，不要歸給那份標準。' }]
          ])
      });

      /* ---------------- what ---------------- */
      out += h.sec({
        id: 'dr-what',
        kick: { en: 'The deliverable', zh: '交付物' },
        h2: { en: 'A decay dataset, a protocol other teams can run, and one honest ratio', zh: '一份衰退資料集、一份別的隊伍跑得起來的流程，以及一個誠實的比值' },
        body:
          h.kv([
            [{ en: 'The arms', zh: '那些組' },
             { en: 'Three formulations — unprotected, and two excipients chosen from the table above — at four temperatures. **Three formulations, not one**, because the published failure mode of accelerated aging is that the *ranking* of formulations reverses between warm and cold storage, and with a single formulation that reversal is invisible.', zh: '三種配方——無保護，加上兩種從上表挑出的賦形劑——放在四個溫度下。**三種配方，不是一種**，因為加速老化已發表的失效模式是：配方之間的*排序*會在溫暖與低溫儲存之間翻轉，而只有一種配方時，那個翻轉是看不見的。' }],
            [{ en: 'The temperatures', zh: '那些溫度' },
             { en: '4 °C as the reference, room temperature as the sealed real-time arm, and **30 °C and 37 °C** as the warm arms. We would not go to 50 °C: two studies on multiple proteins found that stability rankings at 40–50 °C were "**drastically different**" from, and "broadly misleading" about, refrigerated behaviour, while 30 °C tracked it much better.', zh: '4 °C 作為參考、室溫作為封存的實時組，而**30 °C 與 37 °C**作為溫暖各組。我們不會做到 50 °C：有兩份針對多種蛋白質的研究發現，40–50 °C 下的穩定性排序與冷藏行為「**差異極大**」、而且會「造成廣泛的誤導」，而 30 °C 追蹤得好得多。' }],
            [{ en: 'The number', zh: '那個數字' },
             { en: 'Half-life in days at each temperature with a confidence interval, and then the one that matters: **predicted room-temperature half-life divided by measured room-temperature half-life.** A ratio of 1 means accelerated aging worked here. A ratio of 4 is a more useful finding.', zh: '每個溫度下的半衰期（天）附信賴區間，然後是真正重要的那一個：**預測的室溫半衰期除以實測的室溫半衰期。**比值為 1 代表加速老化在這裡有效。比值為 4 則是更有用的發現。' }],
            [{ en: 'The two zero points', zh: '兩個零點' },
             { en: 'Fresh, and dried-but-not-stored, measured separately. One published study found yields identical after one day and after two weeks of dry storage — **the loss happened during drying.** A team with only one zero point would have reported that as storage decay.', zh: '新鮮、以及乾燥但未儲存，分開量測。有一份已發表的研究發現，乾燥儲存一天與兩週後的產量相同——**損失是在乾燥時發生的。**一支只有一個零點的隊伍，會把那件事報告成儲存衰退。' }],
            [{ en: 'The protocol', zh: '那份流程' },
             { en: 'Written so that a team with no freeze-dryer can reproduce it, including how you fixed the humidity and how you read the blank. The protocol is the part that outlives the project — and there is a 2025 team that built the shelf-life model and had no data for it, so somebody is already waiting for this dataset.', zh: '寫成一支沒有冷凍乾燥機的隊伍也能重現的樣子，包含你怎麼固定濕度、怎麼讀空白。流程是這個專案裡活得最久的部分——而 2025 年有一支隊伍做出了保存期限模型卻沒有資料可用，所以已經有人在等這份資料集了。' }],
            [{ en: 'What you do not deliver', zh: '你不交付什麼' },
             { en: 'A new sensor. Build nothing novel: age something that already works, ideally a published reaction or one of your own earlier constructs. Every hour spent making the thing is an hour not spent watching it die, and the watching is the project.', zh: '一個新的感測器。不要做任何新東西：去老化一個已經能用的，最好是一個已發表的反應、或你們自己早先的構築。每一小時花在「做那個東西」上，就是沒有花在「看它死去」上的一小時；而看著它，才是這個專案。' }]
          ])
      });

      /* ---------------- gates ---------------- */
      out += h.sec({
        id: 'dr-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'The five gates, answered in one sentence each', zh: '五道關卡，每一道用一句話回答' },
        body:
          h.phases([
            { h: { en: 'Gate 1 — the number and the instrument', zh: '關卡一——數字與儀器' },
              p: { en: 'By week 30 we will report a half-life in days at each of four temperatures, with a 95 % interval, from activity readings taken on the same plate reader with the same gain and the same reagent lot all season.', zh: '到第 30 週，我們會報告四個溫度各自的半衰期（天）附 95% 區間，資料來自整季都用同一台微孔盤讀儀、同樣增益、同一批試劑所讀取的活性值。' },
              items: [
                { en: 'The instrument question here is unusual: you do not need a better plate reader, you need **the same one for eight months**. Confirm that in January with whoever owns it, because a mid-season instrument change ends the study.', zh: '這裡的儀器問題不太一樣：你不需要更好的微孔盤讀儀，你需要**同一台用八個月**。一月就和它的管理者確認好，因為賽季中換儀器會終結整個研究。' },
                { en: 'The storage conditions are instruments too. Four shelves you can keep and a logger in each box — an unlogged storage temperature is an assumption pretending to be a method.', zh: '儲存條件也是儀器。四個你能持續佔用的架位，每個盒子裡一個記錄器——一個沒被記錄的儲存溫度，是一個假裝自己是方法的假設。' }
              ],
              done: { en: 'In writing: the instrument, the shelves, and the person who agreed you can keep both until October.', zh: '書面寫下：那台儀器、那些架位，以及同意你把兩者留到十月的那個人。' } },
            { h: { en: 'Gate 2 — the control that could make us wrong', zh: '關卡二——可能讓我們是錯的對照' },
              p: { en: 'The real-time arm, stored at room temperature from day one and **not fitted until the prediction from the warm arms has been written down and dated.**', zh: '實時那一組，從第一天就放在室溫，而且**在溫暖各組的預測被寫下來並簽上日期之前，不去擬合它。**' },
              items: [
                { en: 'This is the cleanest built-in falsification of any idea on this site: the prediction exists on paper before the data that tests it is looked at. Nothing can be adjusted afterwards without it being visible.', zh: '這是本站所有題目裡最乾淨的內建否證：預測在「用來檢驗它的那份資料被看之前」就已經寫在紙上。之後任何調整都會留下痕跡。' },
                { en: 'Second control, cheap and often decisive: a **frozen reference** aliquot from the same batch, read on every measurement day. If the frozen arm also declines, your assay drifted and the decay curves are partly an artefact of the method.', zh: '第二個對照，便宜而且常常是決定性的：同一批留下的**冷凍參考**分裝，在每一個量測日都讀。如果冷凍那一組也在下降，那就是你的試驗飄移了，而那些衰退曲線有一部分是方法造成的假象。' }
              ],
              done: { en: 'A sealed, dated envelope — literally — with the predicted room-temperature half-life inside it.', zh: '一個封好、簽上日期的信封——真的一個信封——裡面寫著預測的室溫半衰期。' } },
            { h: { en: 'Gate 3 — two links, and we name them', zh: '關卡三——兩環，而且我們指名它們' },
              p: { en: 'Link one: the preparation dries and retains activity at the dried zero point. Link two: the activity is measured reproducibly over time. There is no third link, because nothing new is being built.', zh: '第一環：那份製備乾燥後在「乾燥零點」仍保有活性。第二環：活性隨時間被可重現地量測。沒有第三環，因為沒有任何新東西在被建造。' },
              items: [
                { en: 'What we cut: building the sensor. If your team built a reporter construct last season, that is the ideal subject and it costs nothing.', zh: '我們砍掉的是：做那個感測器。如果你們團隊上一季做過一個報告構築，那就是最理想的對象，而且不花任何成本。' },
                { en: 'What we also cut: a device. A dried pellet in a tube is the product; a reader, a case and a phone app are three more links and none of them is the question.', zh: '我們也砍掉的是：一台裝置。試管裡一顆乾燥的小球就是產品；一台讀取器、一個外殼、一個手機應用程式是另外三環，而其中沒有一環是那個問題。' }
              ],
              done: { en: 'A chain diagram with two boxes, and the sentence "we are not building anything new" in the January document.', zh: '一張只有兩個方塊的鏈條圖，以及一月文件裡「我們不做任何新東西」這句話。' } },
            { h: { en: 'Gate 4 — the outsider, within the rules', zh: '關卡四——外部的人，在規定之內' },
              p: { en: 'A partner team in a different climate dries material by your protocol, stores it, and measures it on their own instrument — and the material is chosen so that nothing requiring permission has to travel.', zh: '另一個氣候帶的夥伴隊伍，依你的流程乾燥材料、儲存它、並在自己的儀器上量測——而材料的選擇要讓「任何需要許可的東西」都不必旅行。' },
              items: [
                { en: 'There is a published precedent that this works, customs included: dried cell-free mixtures survived "transatlantic shipping and delays due to customs services" and were still active two weeks later.', zh: '有一個已發表的先例顯示這行得通，連海關都算進去了：乾燥的無細胞混合物經過「跨大西洋運送與海關延誤」仍在兩週後有活性。' },
                { en: 'There is **no precedent inside iGEM**: across 2,012 wikis we found no team that shipped its product to another team for independent measurement. The only thing resembling it is the official InterLab study, which shipped plasmids for fluorescence calibration, not stability.', zh: '但在 **iGEM 內部沒有先例**：在 2,012 個 wiki 裡，我們沒有找到任何隊伍把自己的產物寄給另一支隊伍做獨立量測。唯一類似的是官方的 InterLab 研究，而它寄的是用於螢光校正的質體，不是穩定性。' },
                { en: 'The difficulty is administrative, not scientific, and it has its own section below: a dried preparation made by an engineered organism is a **product of synthetic biology** under iGEM policy, and High School teams cannot file the form that normally permits it to leave the lab.', zh: '困難在行政，不在科學，而它在下面有自己一節：由工程化生物所製造的乾燥製備，在 iGEM 政策下屬於**合成生物學的產物**，而高中部隊伍無法提交那份通常用來允許它離開實驗室的表單。' }
              ],
              done: { en: 'A named partner team, a named measurement, a date in the first half of the season, and a written answer to what is in the parcel.', zh: '一支具名的夥伴隊伍、一個具名的量測、一個落在賽季前半的日期，以及一份關於「包裹裡是什麼」的書面答覆。' } },
            { h: { en: 'Gate 5 — the negative result, written first', zh: '關卡五——先寫下負面結果' },
              p: { en: 'Two sentences, both of which we would publish unchanged:', zh: '兩句話，兩句我們都會原封不動公開：' },
              items: [
                { en: '**"The extrapolation from the warm arms over-predicted the measured room-temperature half-life by a factor of *n*, so accelerated aging did not substitute for real-time data in this system."** There is precedent in both directions: a study of three commercial diagnostic materials found accelerated predictions "longer in 2 instances and much shorter in another".', zh: '**「由溫暖各組所做的外推，把實測的室溫半衰期高估了 *n* 倍，所以在這個系統中，加速老化無法取代實時資料。」**兩個方向都有前例：一份針對三種商業診斷材料的研究發現，加速預測「在 2 個案例中偏長，而在另一個案例中短得多」。' },
                { en: '**"The preparation lost most of its activity during drying, so every half-life below is conditional on a starting point that is already a minority of the fresh reaction."** One published system lost about 63 % to freeze-drying before storage began. If that happens to you, say it in the first sentence rather than the last.', zh: '**「這份製備在乾燥過程中就失去了大部分活性，所以下面每一個半衰期，都以一個「已經只是新鮮反應的少部分」的起點為條件。」**有一個已發表的系統在儲存開始之前，就因冷凍乾燥而損失了約 63%。如果那發生在你身上，就在第一句話說，不要放到最後一句。' }
              ],
              done: { en: 'Both sentences in the January document, and the sealed prediction envelope beside them.', zh: '兩句話都在一月的文件裡，旁邊放著那個封好的預測信封。' } }
          ])
      });

      /* ---------------- flow ---------------- */
      out += h.sec({
        id: 'dr-flow',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'One batch, five wet steps, and a prediction sealed before the test', zh: '一批材料、五個濕式步驟，以及在檢驗之前就封好的預測' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'DRYRUN: everything downstream depends on one preparation and two zero points', zh: 'DRYRUN：下游的一切都依賴同一份製備與兩個零點' },
          sub: { en: 'Wet lab above, dry lab below. Both dashed handoffs point the same way, from bench to analysis, because this project has no design loop: the material is fixed in month two and the rest is measurement.', zh: '上為濕式、下為乾式。兩個虛線交接都指向同一個方向，從實驗檯到分析，因為這個專案沒有設計迴圈：材料在第二個月就固定，剩下的全是量測。' },
          caption: { en: 'Our plan, not a record of work. Nothing in this diagram has been performed.', zh: '這是我們的計畫，不是工作紀錄。本圖中沒有任何一步被執行過。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- failure criteria ---------------- */
      out += h.sec({
        id: 'dr-fail',
        kick: { en: 'Pre-registration', zh: '事先登記' },
        h2: { en: 'Seven things that would tell you the extrapolation failed, written down before any data exists', zh: '七件會告訴你「外推失敗了」的事，在任何資料存在之前就先寫下來' },
        lede: {
          en: 'This list is the methodological heart of the idea. Each criterion comes from a published case where accelerated aging misled somebody, and each is detectable with the arms described above. Put all seven in your January document.',
          zh: '這份清單是這個題目方法論上的核心。每一條判準都來自一個「加速老化誤導了某人」的已發表案例，而每一條都能用上面描述的那些組偵測出來。把七條全部放進你一月的文件裡。'
        },
        body:
          h.ul([
            { en: '**Curvature in the Arrhenius plot**, especially a break near the glass transition temperature of your formulation. A review of accelerated storage for freeze-dried products found Arrhenius holds "in most cases" but that "in some instances there is a break in the Arrhenius plot around the glass transition temperature", with "no definitive conclusions on the type of pattern one can expect". Practical consequence: **keep every warm arm below your formulation\'s glass transition**, and measure it if you can.', zh: '**Arrhenius 圖上的曲率**，特別是在你配方的玻璃轉移溫度附近出現轉折。一份關於冷凍乾燥產品加速儲存的回顧指出，Arrhenius「在大多數情況下」成立，但「在某些情況下，Arrhenius 圖會在玻璃轉移溫度附近出現轉折」，而且「對於可以預期哪一種型態，沒有確定的結論」。實務後果是：**把每個溫暖組都保持在你配方的玻璃轉移之下**，而且如果能量就去量它。' },
            { en: '**A ranking reversal between your warmest and coolest arms.** The most sensitive early warning, and the reason for three formulations. Two antibodies studied from 5 to 50 °C over a year showed that aggregation mechanisms "change between 40 °C and 5 °C" and that the stability ranking of formulations was "drastically different at 40 °C and 5 °C" while correlating much better between 30 °C and 5 °C. A later study on four more antibodies found 30–50 °C data "broadly misleading" about refrigerated ranking.', zh: '**最暖與最冷兩組之間出現排序翻轉。**最敏感的早期警訊，也是要做三種配方的理由。有兩種抗體在 5 到 50 °C 之間被追蹤一年，結果顯示聚集機制「在 40 °C 與 5 °C 之間改變」，而各配方的穩定性排序在「40 °C 與 5 °C 下差異極大」，但在 30 °C 與 5 °C 之間則相符得多。之後一份針對另外四種抗體的研究發現，30–50 °C 的資料對冷藏下的排序「造成廣泛的誤導」。' },
            { en: '**The real-time point falls outside the prediction interval** of your Arrhenius fit. This is the criterion your whole design exists to test, and it only counts if the interval was computed and recorded before the real-time arm was opened.', zh: '**實時那個點落在你 Arrhenius 擬合的預測區間之外。**這是你整個設計存在的目的所要檢驗的判準，而它只有在「區間是在實時組被打開之前算好並記錄下來」時才算。' },
            { en: '**Pairwise temperature coefficients that disagree between temperature pairs.** The ten-degree rule is an approximation whose value depends on both the activation energy and the absolute temperature, so it is only valid near one reference point. In one published system the coefficient drifted from about 1.3 to 13 as temperature fell, with a visibly nonlinear Arrhenius plot. If your 30-to-37 coefficient and your 25-to-30 coefficient disagree, a single fixed factor is already falsified.', zh: '**不同溫度配對之間算出的溫度係數彼此不一致。**十度法則是一個近似，其數值同時取決於活化能與絕對溫度，所以它只在某一個參考點附近有效。在一個已發表的系統中，該係數隨溫度下降從約 1.3 漂移到 13，而 Arrhenius 圖呈現明顯的非線性。如果你 30 到 37 的係數與 25 到 30 的係數不一致，那麼單一固定係數已經被否證了。' },
            { en: '**A non-monotonic or threshold response to moisture, or water content drifting during storage.** "Drier is better" is false: a lyophilised antibody stored across moisture contents from under 1 % to 17 % showed "a minimum in degradation rate at 2 %–3 % water content", and glass dynamics "could not explain the stability results". Other work reports a threshold rather than a smooth curve — behaviour a fixed-coefficient model structurally cannot represent.', zh: '**對水分呈現非單調或門檻式的反應，或儲存期間含水量漂移。**「越乾越好」是錯的：一個冷凍乾燥的抗體在含水量從不到 1% 到 17% 的範圍內儲存，結果顯示「降解速率在 2%–3% 含水量處有一個最小值」，而玻璃態動力學「無法解釋那些穩定性結果」。另有研究報告的是一個門檻、而不是一條平滑曲線——那是固定係數模型在結構上無法表現的行為。' },
            { en: '**The degradation-product profile changes with temperature.** If what the warm arms are producing is chemically different from what the cool arms produce, you are extrapolating across two different reactions and a single rate constant is meaningless, however well it fits.', zh: '**降解產物的組成隨溫度改變。**如果溫暖各組所產生的東西，在化學上與低溫各組所產生的不同，那你就是在橫跨兩個不同反應做外推，而單一速率常數不管擬合得多好都沒有意義。' },
            { en: '**The kinetics are not first order at all.** Published dried systems have shown square-root-of-time dependence, and a two-phase shape — a sensitive subpopulation dying first, then first-order decay of the survivors — is very likely here precisely because the drying step damages part of the material. If you see that, the honest move is to fit the second phase and say so, not to report a half-life for the whole curve.', zh: '**動力學根本不是一階。**已發表的乾燥系統出現過「與時間平方根相關」的依賴性；而一個兩段式的形狀——敏感的一小群先死，之後存活者才呈一階衰退——在這裡很可能出現，正是因為乾燥那一步會破壞一部分材料。如果你看到那個，誠實的做法是擬合第二段並把這件事說出來，而不是對整條曲線報告一個半衰期。' }
          ]) +
          h.take({ en: 'Why this list is worth more than the result', zh: '為什麼這份清單比結果更有價值' }, {
            en: 'A team that publishes a half-life has published a number. A team that publishes **the seven ways it checked whether that number means anything, written down before the data arrived**, has published a method — and the method is what another team can use next year on a completely different reagent. Every criterion above is also an answer to a judge\'s question you would otherwise have to improvise. The cost is one afternoon in January.',
            zh: '一支公開了半衰期的隊伍，公開了一個數字。一支公開了**「它用七種方式檢查那個數字到底有沒有意義」、而且是在資料出現之前就寫下來的**隊伍，公開的是一套方法——而方法才是別的隊伍明年能用在完全不同試劑上的東西。上面每一條判準同時也是一個評審問題的答案，否則你就得臨場發揮。成本是一月的一個下午。'
          })
      });

      /* ---------------- rules ---------------- */
      out += h.sec({
        id: 'dr-rule',
        kick: { en: 'Rules', zh: '規定' },
        h2: { en: 'The administrative question that decides this project, and it is not a scientific one', zh: '決定這個專案的那個行政問題，而它不是一個科學問題' },
        lede: {
          en: 'We nearly published this idea with a shipping arm that a High School team is not allowed to run. Read this before you promise anybody a parcel.',
          zh: '我們差點把這個題目連著一個「高中部隊伍不被允許執行」的寄送設計一起發表。在你答應任何人一個包裹之前，先讀這一節。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What travels', zh: '什麼在旅行' }, w: '24%' },
              { t: { en: 'What iGEM\'s published policy says', zh: 'iGEM 已公開的政策怎麼說' } },
              { t: { en: 'What that means for a High School team', zh: '這對高中部隊伍意味著什麼' }, w: '28%' }
            ],
            rows: [
              [{ en: '**Plasmid DNA or cells, lab to lab**', zh: '**質體 DNA 或細胞，實驗室到實驗室**' },
               { en: 'Listed explicitly as **not** a release event: "transporting cells or DNA between two labs, in proper packaging, for research or teaching purposes".', zh: '被明確列為**不屬於**釋放事件：「在兩間實驗室之間、以適當包裝、為研究或教學目的運送細胞或 DNA」。' },
               { en: 'Allowed. Still check how your host laboratory ships — many carriers require UN 3373 packaging even domestically.', zh: '可以。仍然要問清楚你的接待實驗室怎麼寄——許多貨運業者即使在國內也要求 UN 3373 包裝。' }],
              [{ en: '**A dried preparation made by your engineered strain**', zh: '**由你的工程化菌株做出的乾燥製備**' },
               { en: 'A product of synthetic biology. The policy names "purified proteins and biomaterials" and "cell-free biosensors" directly, and says products count "even if you purify them". Advance permission is required before it leaves the lab.', zh: '屬於合成生物學的產物。政策直接點名「純化的蛋白質與生物材料」與「無細胞生物感測器」，並寫明這些產物「即使你把它純化了」也算。在它離開實驗室之前需要事先許可。' },
               { en: '**Do not plan on this.** The Check-In form is not offered to the high-school section, and the alternative route is an email, not a right.', zh: '**不要把計畫押在這上面。**Check-In 表單不提供給高中部，而替代路線是一封信，不是一項權利。' }],
              [{ en: '**A commercial, non-engineered enzyme dried by your protocol**', zh: '**依你的流程乾燥的市售、未工程化酵素**' },
               { en: 'Not a product of a genetically modified organism, so the release policy does not reach it. It is an ordinary laboratory reagent.', zh: '不是基因改造生物的產物，所以釋放政策管不到它。它就是一般的實驗室試劑。' },
               { en: 'The clean route, and the one we would take. The partner arm tests your **protocol and your model**, which is exactly what you want checked.', zh: '這是乾淨的路線，也是我們會走的那一條。夥伴那一組檢驗的是你的**流程與你的模型**，而那正是你想要被檢查的東西。' }],
              [{ en: '**Showing dried pellets at the Jamboree**', zh: '**在 Jamboree 展示乾燥小球**' },
               { en: 'Bringing a product to the exhibition space needs advance permission — but the 2026 **Expo Booth Safety Proposal** is a deliverable whose audience excludes only remote attendance, not the high-school section.', zh: '把產物帶到展覽空間需要事先許可——但 2026 年的 **Expo Booth Safety Proposal** 是一個交付項目，其適用對象只排除遠距參加，並未排除高中部。' },
               { en: 'This is the one documented out-of-lab channel we found that is open to High School teams. File it on time.', zh: '這是我們找到的、對高中部開放的唯一一個有明文記載的「出實驗室」管道。按時繳交。' }],
              [{ en: '**Asking somebody else to do the restricted step**', zh: '**請別人去做那個受限的步驟**' },
               { en: 'Closed in policy text. The White List says a team unable to obtain approval, including "by virtue of being a high school team (and therefore unable to seek approval via Check-In Forms)", "should not engage collaborators to work beyond the White List".', zh: '在政策文字中被關掉。白名單寫明：一支無法取得核可的隊伍——包含「由於身為高中部隊伍（因此無法透過 Check-In 表單尋求核可）」——「不應委請合作者去做超出白名單的工作」。' },
               { en: 'So a university partner cannot do your beyond-list step for you. They **can** measure a white-listed sample, which is what gate 4 asks of them.', zh: '所以大學夥伴不能替你做名單外的步驟。他們**可以**量測一個在白名單內的樣本，而那正是第四關向他們要求的事。' }]
            ],
            min: 1000,
            source: { en: 'Quotations are from iGEM\'s Release Beyond Containment policy and the White List guidance page, with URLs in `notes/2027-idea-sources.md`. **We are not a safety authority and this is not advice** — it is our reading of published text as of 23 November 2026. Whether the email route is open to a High School team is not addressed anywhere we could find, so ask safety@igem.org in January rather than assuming either answer.', zh: '引文出自 iGEM 的 Release Beyond Containment 政策與白名單指引頁，網址在 `notes/2027-idea-sources.md`。**我們不是安全主管機關，這也不是法規意見**——這是我們在 2026 年 11 月 23 日對已公開文字的判讀。那條「寫信」的路線對高中部隊伍是否開放，我們找不到任何地方有說明，所以請在一月寫信問 safety@igem.org，不要自己假設任何一個答案。' }
          }) +
          h.take({ en: 'Why we left this in rather than quietly fixing it', zh: '為什麼我們把這件事留著，而不是悄悄修掉' }, {
            en: 'Our first version of this idea had partner schools in three countries opening parcels of our own freeze-dried cell-free reaction. It is a better experiment and a High School team cannot run it. We could have published the pretty version and let somebody discover the problem in August. **The constraint is the most useful thing on this page**, because it applies to every project that wants its product to leave the building — and the fix, moving the travelling arm onto a non-engineered reagent, costs the study almost nothing.',
            zh: '我們這個題目的第一版，是三個國家的夥伴學校各自打開一包我們自己的冷凍乾燥無細胞反應。那是一個更好的實驗，而高中部隊伍不能做。我們本來可以公開那個漂亮的版本，讓某個人在八月才發現問題。**這條限制是本頁最有用的東西**，因為它適用於每一個「想讓自己的產物離開這棟樓」的專案——而那個修法，也就是把旅行的那一組換成未經工程化的試劑，幾乎沒有讓這份研究損失任何東西。'
          })
      });

      /* ---------------- tools ---------------- */
      out += h.sec({
        id: 'dr-tool',
        kick: { en: 'Logistics', zh: '後勤' },
        h2: { en: 'What you need, and the three things that are not optional', zh: '你需要什麼，以及三件不能省的東西' },
        lede: {
          en: 'Costs are our estimates and will be wrong in your country. The three non-optional items are the shelf, the logger and the single reagent lot — and note that a freeze-dryer is not on the list.',
          zh: '成本是我們的估算，在你的國家一定不準。三件不能省的東西是：那個架位、那個記錄器，以及那一批試劑——而請注意，冷凍乾燥機不在清單上。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What', zh: '項目' }, w: '22%' },
              { t: { en: 'Why this project needs it', zh: '這個專案為什麼需要它' } },
              { t: { en: 'Notes on cost and substitutes', zh: '關於成本與替代方案' }, w: '30%' }
            ],
            rows: [
              [{ en: '**Four storage conditions you can keep**', zh: '**四個你能持續佔用的儲存條件**' },
               { en: 'The whole study is four shelves: a fridge, a room-temperature cupboard, and two warm places at about 30 and 37 °C. Their stability and your ability to keep them for eight months matter more than the exact temperatures.', zh: '整份研究就是四個架位：一台冰箱、一個室溫櫃子，以及兩個約 30 與 37 °C 的溫暖位置。它們的穩定度，以及你能不能保有它們八個月，比精確溫度更重要。' },
               { en: 'Usually free, and usually the hardest thing to get. Ask the teacher who owns the incubator in January and put the agreement in writing.', zh: '通常免費，而且通常是最難拿到的東西。一月就去問那台培養箱的管理老師，並把同意寫成書面。' }],
              [{ en: '**A logger per box**', zh: '**每個盒子一個記錄器**' },
               { en: 'Temperature and humidity, recorded continuously. Without logs your storage condition is a label on a door, and moisture drift is one of the seven failure criteria you cannot check.', zh: '溫度與濕度，連續記錄。沒有紀錄，你的儲存條件只是門上的一張標籤，而「含水量漂移」是七條失敗判準中你無法檢查的一條。' },
               { en: 'Cheap, and the single highest-value purchase in the project.', zh: '便宜，而且是這個專案裡價值最高的一筆採購。' }],
              [{ en: '**Sealed boxes and a humidity salt**', zh: '**密封盒與一種控濕鹽**' },
               { en: 'A saturated salt solution in a sealed box holds a known relative humidity. Fixing humidity is what separates a stability study from leaving tubes in a drawer — and the published moisture optimum means you should not simply dry as hard as possible.', zh: '密封盒裡的飽和鹽溶液能維持一個已知的相對濕度。把濕度固定下來，正是「一份穩定性研究」與「把試管丟在抽屜裡」的差別——而已發表的含水量最佳值，意味著你不該只是盡可能把東西弄乾。' },
               { en: 'Almost free: airtight containers and a common salt. **Take the equilibrium humidity values from Greenspan\'s 1977 NBS tables or ASTM E104, not from memory and not from us** — we deliberately do not print them here.', zh: '幾乎免費：氣密容器加一種常見鹽類。**平衡濕度數值請取自 Greenspan 1977 年的 NBS 表或 ASTM E104，不要憑記憶、也不要取自我們**——我們刻意不在這裡印出那些數值。' }],
              [{ en: '**One reagent lot for the season**', zh: '**整季一批試劑**' },
               { en: 'Substrate, buffer and plates bought once. A new lot in month five moves your blank, and a moving blank manufactures a decay curve that is not there.', zh: '底物、緩衝液與盤子一次買足。第五個月換一批新的會移動你的空白，而一個移動的空白會製造出一條原本不存在的衰退曲線。' },
               { en: 'Budget it in week one. The cheapest mistake on this page to avoid and the most expensive to discover late.', zh: '第一週就把它編進預算。這是本頁上最便宜就能避免、卻在晚期才發現時最貴的一個錯誤。' }],
              [{ en: '**A way to dry the material — not necessarily a freeze-dryer**', zh: '**一種把材料乾燥的方法——不一定是冷凍乾燥機**' },
               { en: 'The finding that makes the project affordable. A published protocol dried a cell-free reaction **in open air with trehalose** and still reached a tenfold loss time of 40 days at 37 °C. A vacuum desiccator or a validated low-cost dryer is the next step up.', zh: '這是讓這個專案變得負擔得起的那個發現。有一份已發表的流程是**在常壓下加海藻糖風乾**一個無細胞反應，仍然達到「37 °C 下 40 天才掉十倍」。真空乾燥器或一台經驗證的低成本乾燥器是下一級。' },
               { en: 'A 2026 High School team built a vacuum dryer for about **USD 80** in components and had it validated at two universities. Read that precedent before buying anything.', zh: '2026 年有一支高中部隊伍以約 **80 美元**的零件做出一台真空乾燥器，並在兩所大學完成驗證。在你買任何東西之前先讀那個先例。' }],
              [{ en: '**The same plate reader, all season**', zh: '**整季同一台微孔盤讀儀**' },
               { en: 'Not a better one. The same one, with the gain written into the protocol and a fresh blank on every plate.', zh: '不是更好的一台。是同一台，把增益寫進流程，而且每一盤都重測空白。' },
               { en: 'If access is uncertain, that is a reason to choose a different idea — this is the one project here that cannot survive losing its instrument.', zh: '如果取用權不確定，那就是「改選別的題目」的理由——這是這裡唯一一個「失去儀器就活不下去」的專案。' }],
              [{ en: '**Statistics, free**', zh: '**統計，免費**' },
               { en: 'Fit first order, second order and Weibull; report which won; fit the temperature dependence to the winner; propagate to a half-life interval. Published accelerated-stability work notes that small samples make interval methods undercover, so report a bootstrap interval alongside the analytic one.', zh: '擬合一階、二階與 Weibull；報告哪一個勝出；對勝出者擬合溫度依賴性；再傳遞到半衰期的區間。已發表的加速穩定性研究指出，小樣本會讓區間方法的覆蓋率不足，所以請在解析區間旁邊再報一個拔靴法區間。' },
               { en: 'Free, and there are open R packages for exactly this analysis. The hard part is choosing the model honestly, not computing it.', zh: '免費，而且正好有開源的 R 套件做這個分析。難的是誠實地選模型，不是算它。' }]
            ],
            min: 1000,
            source: { en: 'Our estimates and our judgement. The open-air trehalose drying, the 40-day figure and the moisture optimum are from the papers cited in the key-data section; the USD 80 dryer and its two external validations are a 2026 team\'s own published figures, sourced on their page on this site. Confirm every cost yourself.', zh: '這是我們的估算與判斷。常壓海藻糖風乾、40 天那個數字與含水量最佳值，出自關鍵數據一節所引的論文；那台 80 美元的乾燥器與它的兩次外部驗證，是 2026 年某支隊伍自己公開的數字，出處在本站該隊的頁面。每一項成本請自己確認。' }
          })
      });

      /* ---------------- schedule ---------------- */
      out += h.sec({
        id: 'dr-plan',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'The one schedule on this site with no slack in month one', zh: '本站唯一一個「第一個月沒有餘裕」的行程' },
        lede: {
          en: 'iGEM has published only the 2027 Jamboree dates — 18 to 21 October 2027. On four seasons of precedent the wiki freeze falls 19 to 23 days earlier and has always been a Wednesday, which points at about **29 September 2027**; that is our arithmetic, not an announcement. Every week you start late is a week of real-time data you will never have.',
          zh: 'iGEM 只公布了 2027 年 Jamboree 的日期——2027 年 10 月 18 至 21 日。依四個賽季的前例，wiki 凍結日落在它前面 19 到 23 天，而且一直都是星期三，據此指向 **2027 年 9 月 29 日**左右；那是我們的算術，不是公告。你每晚開始一週，就是你永遠不會擁有的一週實時資料。'
        },
        body:
          h.fig({
            kind: 'gantt',
            tag: { en: 'SCHEDULE', zh: '行程' },
            title: { en: 'DRYRUN across the season, in months from the start', zh: 'DRYRUN 的整季安排，以自起點起算的月份表示' },
            sub: { en: 'Month 0 is your first team meeting; month 9 is the wiki freeze. The storage bars are the project — they cannot be compressed, only started earlier.', zh: '第 0 個月是你們第一次團隊會議；第 9 個月是 wiki 凍結日。那些儲存條就是這個專案——它們無法被壓縮，只能更早開始。' },
            data: [
              { label: { en: 'Choose what to age, and get the shelf', zh: '決定要老化什麼，並拿到架位' }, start: 0, end: 0.8, tone: 'r', note: { en: 'agree this first', zh: '先談定這件事' } },
              { label: { en: 'Build the assay and the blank routine', zh: '建立試驗與空白流程' }, start: 0.3, end: 1.5, tone: 'g' },
              { label: { en: 'Pre-register prediction and failure criteria', zh: '事先登記預測與失敗判準' }, start: 1, end: 1.5, tone: 'v', note: { en: 'all seven', zh: '七條全部' } },
              { label: { en: 'One batch, three formulations, dried', zh: '一批材料、三種配方、乾燥' }, start: 1.3, end: 2, tone: 'b' },
              { label: { en: 'Fresh and dried zero points', zh: '新鮮與乾燥後的零點' }, start: 2, end: 2.3, tone: 'g', note: { en: 'two numbers', zh: '兩個數字' } },
              { label: { en: 'Storage: 37 °C arm', zh: '儲存：37 °C 組' }, start: 2.3, end: 5, tone: 'r' },
              { label: { en: 'Storage: 30 °C arm', zh: '儲存：30 °C 組' }, start: 2.3, end: 6.5, tone: 'a' },
              { label: { en: 'Storage: room temperature, sealed', zh: '儲存：室溫，封存不看' }, start: 2.3, end: 7.5, tone: 'b', note: { en: 'sealed, not fitted', zh: '封存，不擬合' } },
              { label: { en: 'Storage: 4 °C reference arm', zh: '儲存：4 °C 參考組' }, start: 2.3, end: 7.5, tone: 'b' },
              { label: { en: 'Fit the warm arms, seal the prediction', zh: '擬合溫暖各組，封存預測' }, start: 5, end: 5.5, tone: 'v', note: { en: 'dated', zh: '簽日期' } },
              { label: { en: 'Partner team dries and measures', zh: '夥伴隊伍乾燥並量測' }, start: 3.5, end: 6, tone: 'a' },
              { label: { en: 'Open the real-time arm, compute the ratio', zh: '打開實時組，算出比值' }, start: 7.5, end: 8, tone: 'v', note: { en: 'the result', zh: '這就是結果' } },
              { label: { en: 'Release the dataset and protocol', zh: '釋出資料集與流程' }, start: 7.8, end: 8.5, tone: 'v' },
              { label: { en: 'Write the results page first', zh: '先寫結果頁' }, start: 8, end: 8.7, tone: 'r' },
              { label: { en: 'Freeze bundle: wiki, forms, Registry', zh: '凍結包：wiki、表單、Registry' }, start: 8.7, end: 9, tone: 'r' }
            ],
            opts: { min: 0, max: 10 },
            caption: { en: 'Our plan. The 37 °C arm ends early on purpose: if it has not decayed measurably by month four, the temperature range is wrong and you still have time to move it.', zh: '這是我們的計畫。37 °C 那一組刻意提早結束：如果到第四個月它還沒有可量測的衰退，那溫度範圍就選錯了，而你還有時間去改。' }
          }) +
          h.note({
            en: 'The decision point is **month 4 to 5**, when the warm arms are fitted and the prediction is sealed. If by then the 37 °C arm has not lost measurable activity, the honest move is to add a hotter arm rather than wait and hope — and that choice only exists for a team that started storage in month two. **A 2024 High School team published this exact protocol — freeze-dried powder at 37 °C over 2 to 16 weeks — and never published results.** Two further notes from the literature: published stability studies sample roughly every three months for long-term arms and at least three points for accelerated ones, and a published guideline warns that modelling a release specification on less than twelve months of data is "highly unreliable" — so describe your season as what it is, **a nine-month study**.',
            zh: '決策點在**第 4 到 5 個月**，也就是溫暖各組被擬合、預測被封存的時候。如果到那時 37 °C 那一組還沒有可量測的活性損失，誠實的做法是再加一個更高溫的組，而不是等下去期待——而那個選擇只對「第二個月就開始儲存」的隊伍存在。**2024 年有一支高中部隊伍公開了完全相同的流程——冷凍乾燥粉末在 37 °C 下 2 至 16 週——而從未公開結果。**另外兩個來自文獻的提醒：已發表的穩定性研究對長期各組大約每三個月取樣一次、對加速各組至少三個時間點；而一份已發表的指引警告，用不到十二個月的資料去建模一個放行規格是「極不可靠的」——所以請照實描述你的賽季，**一份九個月的研究**。'
          })
      });

      /* ---------------- risks ---------------- */
      out += h.sec({
        id: 'dr-risk',
        kick: { en: 'Risks', zh: '風險' },
        h2: { en: 'Five ways this goes wrong, and what we would do about each', zh: '這件事出錯的五種方式，以及我們對每一種會怎麼做' },
        body:
          h.cards([
            { chips: [{ t: { en: 'most likely', zh: '最可能' }, k: 'r' }],
              h: { en: 'Drying takes most of the activity before storage starts', zh: '乾燥在儲存開始前就拿走了大部分活性' },
              p: { en: 'One published system lost about **63 %** to freeze-drying itself, and another found that essentially all of the loss happened at the drying step rather than during storage. If your dried zero point is a tenth of fresh, every half-life you report sits on top of that.', zh: '有一個已發表的系統光是因為冷凍乾燥就損失了約 **63%**，而另一個發現幾乎全部的損失都發生在乾燥那一步、而不是儲存期間。如果你乾燥後的零點只有新鮮值的十分之一，那你報告的每一個半衰期都疊在那件事上面。' },
              foot: { en: 'Mitigation: two zero points, always, and report the drying loss as its own number in the first sentence.', zh: '緩解：永遠做兩個零點，並把乾燥損失當成它自己的數字寫在第一句話裡。' } },
            { chips: [{ t: { en: 'the real answer', zh: '真正的答案' }, k: 'a' }],
              h: { en: 'The extrapolation is wrong', zh: '外推是錯的' },
              p: { en: 'The pre-written negative result, and the most valuable thing the project can produce. There is published precedent in both directions, and a review of freeze-dried products warns there are "no definitive conclusions on the type of pattern one can expect".', zh: '事先寫好的負面結果，也是這個專案所能產出最有價值的東西。兩個方向都有已發表的前例；而一份針對冷凍乾燥產品的回顧警告說，「對於可以預期哪一種型態，沒有確定的結論」。' },
              foot: { en: 'Report the ratio with its uncertainty and resist the urge to explain it away. The ratio is the finding.', zh: '把比值連同它的不確定度一起報告，並抵抗「把它解釋掉」的衝動。那個比值就是發現。' } },
            { chips: [{ t: { en: 'quiet killer', zh: '安靜的殺手' }, k: 'r' }],
              h: { en: 'The assay drifts and you measure your own method', zh: '試驗飄移了，你量到的是自己的方法' },
              p: { en: 'Over eight months a plate reader, a reagent lot, an operator and a laboratory temperature all change, and any of those can produce a smooth downward trend that looks exactly like decay.', zh: '在八個月裡，微孔盤讀儀、試劑批號、操作者與實驗室溫度都會變，而其中任何一項都能製造出一條平滑的下降趨勢，看起來就和衰退一模一樣。' },
              foot: { en: 'Mitigation: the frozen reference aliquot on every single measurement day. If it declines, your curves are partly artefact and you must say so.', zh: '緩解：每一個量測日都讀那個冷凍參考分裝。如果它在下降，你的曲線就有一部分是假象，而你必須說出來。' } },
            { chips: [{ t: { en: 'rules', zh: '規定' }, k: 'r' }],
              h: { en: 'You promised a parcel you cannot send', zh: '你答應了一個你寄不出去的包裹' },
              p: { en: 'Covered in its own section above, and worth repeating because it is the failure that happens in August rather than March: a dried product of an engineered organism needs advance permission to leave the lab, and the form that normally grants it is not offered to High School teams.', zh: '上面有自己一節講這件事，而值得重複，因為這是那種「發生在八月而不是三月」的失敗：一個工程化生物的乾燥產物，離開實驗室需要事先許可，而通常用來取得許可的那份表單並不提供給高中部隊伍。' },
              foot: { en: 'Mitigation: a non-engineered reagent in the travelling arm from the start, and an email to safety@igem.org in January if you want more.', zh: '緩解：從一開始就把未工程化的試劑放進旅行那一組；如果你想要更多，一月就寫信給 safety@igem.org。' } },
            { chips: [{ t: { en: 'human', zh: '人' }, k: 'a' }],
              h: { en: 'Somebody tidies the cupboard', zh: '有人整理了那個櫃子' },
              p: { en: 'An eight-month study lives or dies on whether other people in the building leave it alone. Freezer failures, cleaning, a teacher reclaiming an incubator, a holiday power cut: all of these have ended longer studies than this one.', zh: '一份八個月的研究，存亡取決於這棟樓裡的其他人會不會放它一馬。冷凍設備故障、清掃、老師收回培養箱、假期跳電：這些都終結過比這份更長的研究。' },
              foot: { en: 'Mitigation: label everything with a return date and a name, split each arm across two locations, and tell the technician what you are doing.', zh: '緩解：每樣東西都標上歸還日期與姓名、把每一組分放在兩個地點，並且告訴技術人員你在做什麼。' } }
          ]) +
          h.warn({
            en: 'The limitation we would put on our own results page: **a half-life measured on one preparation, in one formulation, in one laboratory, is not a shelf life for the product.** A real shelf life needs multiple batches, because batch-to-batch variation is usually larger than the effect of a few degrees, and the published guidance is explicit that accelerated data supports real-time data rather than replacing it. We would describe the study as what it is: **one batch, three formulations, watched carefully, with the extrapolation checked.**',
            zh: '我們會放在自己結果頁上的那個限制：**在一間實驗室、一種配方、一份製備上量到的半衰期，不是這個產品的保存期限。**一個真正的保存期限需要多個批次，因為批次間的變異通常大於幾度溫差的效應；而已發表的指引也明確說，加速資料是支持實時資料、不是取代它。我們會照實描述這份研究是什麼：**一批材料、三種配方，被仔細看著，而且外推值被檢驗過。**'
          })
      });

      /* ---------------- ships ---------------- */
      out += h.sec({
        id: 'dr-ship',
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
               { en: 'The natural home of the project: eight months of one calibrated readout, a logged storage condition, a frozen reference on every plate, two zero points, and a blind external arm. iGEM\'s ballot asks whether other teams could reproduce the measurement — the answer here is a protocol and a dataset.', zh: '這個專案自然的歸屬：八個月、同一個校正過的讀值、被記錄的儲存條件、每盤都有的冷凍參考、兩個零點，以及一組盲測的外部資料。iGEM 的評分項會問其他隊伍能不能重現這個量測——這裡的答案是一份流程加一份資料集。' }],
              [{ en: '**Best Model**', zh: '**最佳模型**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'A model that made a prediction, on paper, before the data that tested it existed — plus three competing kinetic forms, a published activation-energy range to check your fit against, and seven pre-registered criteria for when the model should be abandoned. **And a 2025 team has already published the model this dataset would fit.**', zh: '一個在「用來檢驗它的資料存在之前」就在紙上做出預測的模型——加上三種互相競爭的動力學形式、一個可用來檢查你擬合結果的已發表活化能範圍，以及七條「何時該放棄這個模型」的事先登記判準。**而 2025 年已經有一支隊伍公開了「這份資料集可以去擬合」的那個模型。**' }],
              [{ en: '**Best Hardware**, if you build the dryer', zh: '若你做了乾燥器，則是**最佳硬體**' },
               { en: 'Specialization', zh: '專項' },
               { en: 'You need at least one Specialization award for a Gold medal. A low-cost dryer with a bill of materials and an external recovery test is a known-good iGEM deliverable — but only take this if you actually build and validate one, because the criterion is about utility and reproducibility, not a photograph.', zh: '金牌需要至少一個專項獎。一台附物料清單、並做過外部回收率測試的低成本乾燥器，是 iGEM 公認有效的交付物——但只有在你真的做出並驗證一台時才選它，因為那個標準講的是實用性與可重現性，不是一張照片。' }],
              [{ en: 'Or **Best Education**, if the dryer is out of reach', zh: '若做不出乾燥器，則選**最佳教育**' },
               { en: 'Specialization', zh: '專項' },
               { en: '"How long does your reagent last, and how would you know?" is a question most teams have never been asked. A short, honest teaching module on stability, detection floors and why "drier is better" is false costs no equipment and is a legitimate Specialization selection.', zh: '「你的試劑能放多久，而你怎麼知道？」是大多數隊伍從沒被問過的問題。一個關於穩定性、偵測地板，以及「為什麼『越乾越好』是錯的」的簡短誠實教學單元，不需要任何設備，而且是一個正當的專項選擇。' }]
            ],
            min: 940,
            source: { en: 'Award categories and criteria are from iGEM\'s 2026 Special Awards and Medals pages, with URLs in `notes/2027-idea-sources.md`. In 2026 a Gold medal required excellence toward three Special Awards, at least one from each of the two categories, and **high school is always judged as its own section for every award**. Which to select is our judgement, not iGEM\'s advice.', zh: '獎項類別與標準出自 iGEM 2026 年的 Special Awards 與 Medals 頁面，網址在 `notes/2027-idea-sources.md`。2026 年金牌要求在三個特別獎上展現卓越，兩個類別各至少一個，而且**每一個獎，高中部都是獨立評比的一個組別**。選哪些是我們的判斷，不是 iGEM 的建議。' }
          }) +
          h.note({
            en: 'The other four ideas, each through the same gates, are on [Five ideas](#x-ideas). The procedure and the scoring sheet are on [the 2027 roadmap](#x-roadmap). The dryer precedent and the external validation that makes it credible are on the [Lambert-GA](#hs-lambert) page.',
            zh: '另外四個題目，每一個都跑過同樣的關卡，在[五個題目](#x-ideas)。程序與評分表在[2027 選題指南](#x-roadmap)。那個乾燥器的先例，以及讓它可信的那次外部驗證，在 [Lambert-GA](#hs-lambert) 頁上。'
          })
      });

      return out;
    }
  };
})(window);
