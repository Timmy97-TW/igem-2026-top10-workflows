/* Idea 3 — SPLITFISH. A pre-registered method-comparison study: a team-built enzymatic
   histamine test against an accredited laboratory, on split homogenates of real market fish.
   Ours; never run. Regulatory text is quoted from the official standards; literature is cited
   inline. Sources in notes/2027-idea-sources.md */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var SWIM = {
    wet: [
      { l: { en: 'Express the enzyme, and prove it is the right one', zh: '表達那個酵素，並證明它是對的那一個' },
        s: { en: 'A histamine dehydrogenase, not a diamine oxidase. Then test it against cadaverine and putrescine', zh: '一個組織胺去氫酶，不是雙胺氧化酶。然後拿屍胺與腐胺去測它' }, tone: 'g' },
      { l: { en: 'Build the curve on spiked blanks first', zh: '先在加標空白上建好曲線' },
        s: { en: 'Fish matrix with known histamine added, across the decision threshold, before any market sample is bought', zh: '在買任何市場樣本之前，先用加入已知組織胺的魚肉基質跨過判定門檻' }, tone: 'g' },
      { l: { en: 'Homogenise each fish once, then split', zh: '每條魚均質一次，然後分樣' },
        s: { en: 'Ten grams into 490 mL water, blended one to two minutes. One homogenate per fish, then aliquots', zh: '十公克加 490 毫升水，均質一到兩分鐘。每條魚一份均質液，之後再分裝' } },
      { l: { en: 'Prove the split was fair before you use it', zh: '在你使用之前，先證明分樣是公平的' },
        s: { en: 'Ten sub-samples in duplicate, one-way analysis of variance, against the published homogeneity criterion', zh: '十個子樣本各做兩重複、單因子變異數分析，對照已發表的均質性判準' }, tone: 'a' },
      { l: { en: 'Send the laboratory an aliquot, never a second cut of fish', zh: '送去實驗室的是一份分裝，絕不是第二塊魚肉' },
        s: { en: 'The same homogenate, frozen, with the handoff stability checked. A different cut destroys the comparison', zh: '同一份均質液、冷凍，並檢查交付過程的穩定性。換一塊魚肉就毀掉整個比較' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Pre-register before the first fish', zh: '在第一條魚之前先登記' },
        s: { en: 'The threshold, the acceptance band, the sample size and its justification, the strata, and what counts as failure', zh: '門檻、接受帶、樣本數與其理由、分層，以及什麼算失敗' }, tone: 'v' },
      { l: { en: 'Size the study from a published table, not a rule of thumb', zh: '依已發表的表決定規模，不要靠經驗法則' },
        s: { en: 'Name the row your budget buys. A sensitivity interval of plus or minus ten points needs about thirty-five positives', zh: '指名你的預算買得起哪一列。一個正負十個百分點的敏感度區間，大約需要三十五個陽性' }, tone: 'v' },
      { l: { en: 'Analyse as agreement, not as correlation', zh: '以一致性分析，不是以相關性' },
        s: { en: 'Bias and limits of agreement on the log scale, a non-parametric regression, and accuracy at the legal limit', zh: '對數尺度上的偏差與一致性界限、一個非參數回歸，以及在法定限值上的準確度' }, tone: 'v' },
      { l: { en: 'Report intervals that cannot exceed one', zh: '報告不會超過 1 的區間' },
        s: { en: 'Thirty out of thirty correct honestly means sensitivity is at least about eighty-eight per cent, not one hundred', zh: '三十取三十全對，誠實的意思是敏感度至少約 88%，不是 100%' }, tone: 'v' },
      { l: { en: 'Publish the pairs, not the conclusion', zh: '公開那些配對，不是結論' },
        s: { en: 'Every paired measurement with its stratum and its date, so somebody else can reanalyse it differently', zh: '每一組配對量測連同它的分層與日期，好讓別人能用不同方式重新分析' }, tone: 'v' }
    ],
    links: [
      { w: 2, d: 1, l: { en: 'the pre-registration fixes the sample size', zh: '事先登記固定了樣本數' }, up: true },
      { w: 4, d: 2, l: { en: 'the paired aliquots are the dataset', zh: '配對的分裝就是那份資料集' }, up: false }
    ]
  };

  PD.pages['x-assay'] = {
    label: { en: 'Idea 3 · SPLITFISH', zh: '題目三 · SPLITFISH' },
    title: { en: 'SPLITFISH — the outside laboratory is the experiment', zh: 'SPLITFISH——把外部實驗室做成實驗' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Idea 3 of 5 · our proposal, never run · Food & Nutrition, or Diagnostics',
          zh: '五個題目中的第三個 · 我們的提案，從未執行 · 食品與營養，或診斷'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The legal sampling plan cannot find a few bad fish in a good lot. ==That, not the danger, is the argument for a cheap test.==',
          zh: '法定的抽樣計畫找不出一批好魚裡的幾條壞魚。==那件事，而不是「危險」，才是便宜檢測的理由。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Histamine in fish is one of the most-attempted themes in iGEM — **at least four teams in 2026 alone** — and across every one of them the evidence stops at a dose curve in buffer or on a surrogate. The thing nobody has built is not the sensor. It is the **study that would make a sensor mean something**: a pre-registered comparison against an accredited laboratory, on **aliquots of the same homogenate** from real market fish, reported as bias, limits of agreement and accuracy at the legal limit. And the motivation is sharper than "histamine is dangerous". The official sampling plans are weak by design: the FAO/WHO analysis of their operating characteristics shows the EU plan detects a non-compliant lot with 95 % confidence only when **more than 55 %** of units are already over the limit, and the United States plan only above **24 %**. **Neither can see a few bad fish in a good lot** — which is exactly what a test cheap enough to run on every fish could do, if anybody had ever shown that such a test agrees with the reference method.',
          zh: '魚類組織胺是 iGEM 最常被嘗試的主題之一——**單是 2026 年就至少有四支隊伍**——而其中每一支的證據都停在「緩衝液中或替代物上的一條劑量曲線」。沒有人做出來的不是那個感測器，而是**那個能讓感測器有意義的研究**：一份事先登記的、對照認證實驗室的比較，在真實市場魚的**同一份均質液分裝**上進行，並以偏差、一致性界限與法定限值上的準確度來報告。而這件事的動機比「組織胺很危險」更鋒利。官方的抽樣計畫在設計上就是弱的：FAO/WHO 對其操作特性的分析顯示，歐盟的計畫要在**超過 55%** 的樣本單位已經超標時，才能以 95% 信心偵測到一批不合格的貨；而美國的計畫也要在 **24%** 以上。**兩者都看不到一批好魚裡的幾條壞魚**——而那正是一個便宜到可以每條魚都測的檢測能做到的事，只要有人曾經證明過那樣的檢測與參考方法相符。'
        }) + '</p>' +
        h.stats([
          { v: '200', l: { en: 'mg/kg — Taiwan\'s limit, a single value on a single unit, with no sampling plan', zh: 'mg/kg——台灣的限量，單一數值、單一樣本單位，沒有抽樣計畫' } },
          { v: '55 %', l: { en: 'Of units that must already be over the limit for the EU plan to catch a lot', zh: '歐盟計畫要抓到一批貨，需要多少比例的樣本單位已經超標' } },
          { v: '10×', l: { en: 'The regulator\'s own working assumption for how much histamine varies within one fish', zh: '主管機關自己對「同一條魚內組織胺差異」所採用的工作假設' } },
          { v: '0', l: { en: 'Official Taiwanese test methods for histamine. The limit exists; the method does not', zh: '台灣官方的組織胺檢驗方法數。限量存在；方法不存在' } },
          { v: '0', l: { en: 'Of these experiments we have run. This is a plan', zh: '這些實驗我們做過幾個。這是一份計畫' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'sf-why', t: { en: 'Why it is a project', zh: '為什麼這是個專案' } },
        { id: 'sf-limit', t: { en: 'The limits', zh: '那些限量' } },
        { id: 'sf-enz', t: { en: 'Which enzyme', zh: '選哪個酵素' } },
        { id: 'sf-ref', t: { en: 'The comparator', zh: '那個比較方法' } },
        { id: 'sf-split', t: { en: 'Splitting the fish', zh: '把魚分樣' } },
        { id: 'sf-stat', t: { en: 'How it gets reported', zh: '怎麼報告' } },
        { id: 'sf-prior', t: { en: 'Who got closest', zh: '誰最接近' } },
        { id: 'sf-gate', t: { en: 'The five gates', zh: '五道關卡' } },
        { id: 'sf-flow', t: { en: 'The workflow', zh: '工作流程' } },
        { id: 'sf-tool', t: { en: 'Tools and money', zh: '工具與錢' } },
        { id: 'sf-plan', t: { en: 'The schedule', zh: '行程' } },
        { id: 'sf-risk', t: { en: 'What kills it', zh: '什麼會殺死它' } },
        { id: 'sf-ship', t: { en: 'What it ships', zh: '它交付什麼出去' } }
      ]);

      /* ---------------- why ---------------- */
      out += h.sec({
        id: 'sf-why',
        kick: { en: 'The argument', zh: '論證' },
        h2: { en: 'Find the argument that is not about danger', zh: '找出那個不是在講危險的論證' },
        lede: {
          en: 'Every fish-freshness project opens by saying histamine poisoning is common and the test is slow. That is true and it has not been enough, four times in 2026 alone. Here is a better opening, and it comes from the regulators\' own arithmetic.',
          zh: '每一個魚類鮮度專案的開場都是「組織胺中毒很常見，而檢驗很慢」。那是真的，而它不夠——單是 2026 年就不夠了四次。這裡有一個更好的開場，而它來自主管機關自己的算術。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'the real gap', zh: '真正的缺口' }, k: 'r' }],
              h: { en: 'The sampling plans are blind to a few bad fish', zh: '抽樣計畫對「幾條壞魚」是盲的' },
              p: { en: 'A joint FAO and WHO expert meeting plotted the operating characteristics of the official plans. At 95 % confidence, the European plan of nine samples detects a lot only when **more than 55 %** of its units are already above the limit; the United States plan of eighteen samples manages **above 24 %**. **Both are designed to catch a badly handled lot, and neither can catch a handful of abused fish inside a good one** — which is the failure mode that actually poisons people.', zh: 'FAO 與 WHO 的聯合專家會議畫出了官方抽樣計畫的操作特性曲線。在 95% 信心下，歐盟那個九個樣本的計畫，要在**超過 55%** 的樣本單位已經超標時才偵測得到一批貨；美國那個十八個樣本的計畫做到**24% 以上**。**兩者都是為了抓住一整批被不當處理的貨而設計的，而兩者都抓不到一批好貨裡少數幾條被不當處理的魚**——而那正是真正會讓人中毒的那個失效模式。' },
              foot: { en: 'FAO/WHO 2013, the operating-characteristic figure. A per-fish test is the structural answer to this.', zh: 'FAO/WHO 2013 的操作特性圖。對此，一個「每條魚都測」的檢測是結構性的答案。' } },
            { chips: [{ t: { en: 'the local opening', zh: '本地的機會' }, k: 'g' }],
              h: { en: 'Taiwan sets a limit and publishes no method', zh: '台灣訂了限量，卻沒有公布方法' },
              p: { en: 'Taiwan\'s contaminants standard sets **200 mg/kg** for high-histidine fishery products, as **a single maximum level on a single unit with no sampling plan** — which makes a per-unit test legally meaningful here in a way it is not under the European scheme. And the complete official method lists were enumerated: **214 announced methods and 438 recommended methods, 7,822 titles, and not one is for histamine.** Both the export-inspection scheme and the commercial laboratories run in-house procedures referencing an international method instead.', zh: '台灣的污染物標準對高組胺酸魚產品訂出 **200 mg/kg**，而且是**單一最大限量、單一樣本單位、沒有抽樣計畫**——這讓「逐一樣本檢測」在這裡具有歐盟制度下所沒有的法律意義。而官方方法清單已被完整列舉：**214 項公告檢驗方法與 438 項建議檢驗方法、共 7,822 個標題，其中沒有一項是組織胺。**出口檢驗制度與商業實驗室改用的是參照某個國際方法的自訂程序。' },
              foot: { en: 'A gap in the country\'s own toolkit is a legitimate thing for a student project to point at.', zh: '一個國家自己工具箱裡的缺口，是一個學生專案可以正當指出的東西。' } },
            { chips: [{ t: { en: 'the deliverable', zh: '交付物' }, k: 'b' }],
              h: { en: 'The study, not the sensor', zh: '那份研究，不是那個感測器' },
              p: { en: 'Four 2026 teams built a histamine or biogenic-amine sensor. One got as far as real fish and used **commercial strips** to do it. The one who came closest wrote the European reference method down by name after interviewing their national food authority — and then never ran the comparison, because the expression work stalled. **The sensor is the easy half.** What converts it into evidence is a paired study against a laboratory that was paid to disagree with you.', zh: '2026 年有四支隊伍做了組織胺或生物胺感測器。其中一支走到了真實的魚，而它用的是**市售試紙**。最接近的那一支在訪談過本國食品主管機關之後，把歐盟的參考方法照名字寫了下來——然後從未跑那個比較，因為表達工作卡住了。**感測器是容易的那一半。**把它變成證據的，是一份對照「被付錢來跟你不一致的實驗室」的配對研究。' },
              foot: { en: 'And one published study has now done most of it — see "Who got closest" below.', zh: '而現在已經有一份已發表研究做了其中大部分——見下面的「誰最接近」。' } }
          ])
      });

      /* ---------------- limits ---------------- */
      out += h.sec({
        id: 'sf-limit',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'The decision thresholds, quoted — and two of them changed recently', zh: '那些判定門檻，照引——而其中兩個最近變了' },
        lede: {
          en: 'Get these wrong and the whole study is pointed at the wrong number. The United States values in particular are not the ones most people quote.',
          zh: '這些弄錯，整份研究就瞄錯了數字。尤其美國的數值，並不是大多數人引用的那些。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Jurisdiction', zh: '管轄區' }, w: '16%' },
              { t: { en: 'The threshold', zh: '門檻' } },
              { t: { en: 'What to watch', zh: '要注意什麼' }, w: '32%' }
            ],
            rows: [
              [{ en: '**Taiwan**', zh: '**台灣**' },
               { en: '**200 mg/kg** for fishery products from high-histidine species, and **400 mg/kg** for brine-matured products such as fish sauces and pastes. From the contaminants and toxins standard, Appendix 3, item 7; the footnote limits it to products "placed on the market during their shelf-life".', zh: '高組胺酸魚種的魚產品 **200 mg/kg**；經鹽漬發酵處理的加工品如魚醬 **400 mg/kg**。出自污染物質與毒素衛生標準附表三第 7 項；註腳限定為「適用於在流通販賣期間或有效日期內販賣之產品」。' },
               { en: '**A single maximum level, with no n/c/m/M sampling plan** — structurally simpler than the European scheme and the reason a per-unit test is legally meaningful here. Also note a 2015 agriculture-ministry answer saying Taiwan had set no limit: that is **obsolete**, it predates the 2018 standard.', zh: '**單一最大限量，沒有 n/c/m/M 抽樣計畫**——比歐盟制度結構上更簡單，也是「逐一樣本檢測」在這裡具有法律意義的原因。另外請注意 2015 年農業主管機關曾答覆台灣未訂限量：那已**過時**，它早於 2018 年的標準。' }],
              [{ en: '**United States**', zh: '**美國**' },
               { en: 'The compliance policy guide was **revised on 4 November 2024**: fish are adulterated as decomposed "when histamine is present at or **above 35 ppm**", and as injurious to health "when histamine is present at or **above 200 ppm**". Sampling is up to thirty subsamples with **c = 0**, and both an original and a check analysis are required.', zh: '該合規政策指引在 **2024 年 11 月 4 日修訂**：當「組織胺達到或**超過 35 ppm**」時，魚被認定為腐敗而屬摻偽；當「組織胺達到或**超過 200 ppm**」時，屬有害健康。抽樣最多三十個子樣本、**c = 0**，而且需要原始分析與複檢分析各一次。' },
               { en: '**The famous 50 and 500 ppm pair is superseded** — but the hazards-and-controls guidance, fourth edition 2022, **still prints the 50 ppm guidance level** and the eighteen-samples-per-lot rule. Present both and say which is which, or a reader will think you used an old number.', zh: '**那組著名的 50 與 500 ppm 已被取代**——但第四版（2022）的危害與管制指引**仍然印著 50 ppm 的指引值**與「每批不少於十八個樣本」的規則。請兩個都呈現並說明哪個是哪個，否則讀者會以為你用了舊數字。' }],
              [{ en: '**European Union**', zh: '**歐盟**' },
               { en: 'A two-class plan: **m = 100, M = 200 mg/kg, n = 9, c = 2** for high-histidine species; a separate entry for brine-matured products at 200 and 400 with the same plan; and fish sauce at **400 mg/kg with n = 1**.', zh: '一個二分類計畫：高組胺酸魚種為 **m = 100、M = 200 mg/kg、n = 9、c = 2**；鹽漬熟成產品另有一條，為 200 與 400、同樣的計畫；魚露則是 **400 mg/kg、n = 1**。' },
               { en: 'The plan is why a European per-unit result is hard to interpret legally: two of nine units are allowed between m and M. **If you are comparing against a legal decision, say which jurisdiction\'s decision you mean.**', zh: '這個計畫正是「歐盟體系下的逐一樣本結果在法律上難以解讀」的原因：九個單位中允許有兩個落在 m 與 M 之間。**如果你要對照一個法律判定，請說清楚你指的是哪個管轄區的判定。**' }],
              [{ en: '**Codex and others**', zh: '**Codex 與其他**' },
               { en: 'Codex: **100 mg/kg** as an average for quality and **200 mg/kg** per unit for safety, with 400 for some fermented products. **Japan has no statutory limit.** China sets 400 mg/kg for high-histamine species and 200 for other sea fish.', zh: 'Codex：品質上以 **100 mg/kg** 為平均值，安全上每單位 **200 mg/kg**，部分發酵產品為 400。**日本沒有法定限量。**中國對高組織胺魚種訂 400 mg/kg、其他海水魚 200。' },
               { en: 'Codex proposes the fluorometric reference method "**or other scientifically equivalent validated methods**" — which is the clause that makes a method-comparison study the right shape of evidence.', zh: 'Codex 建議使用螢光法參考方法「**或其他在科學上等效並經驗證的方法**」——正是這個條款讓「方法比較研究」成為正確形狀的證據。' }],
              [{ en: '**Within one fish**', zh: '**同一條魚內**' },
               { en: 'The regulator\'s own stated assumption: "If 50 ppm is found in one section of a fish or lot, there is the possibility that **other sections may exceed 500 ppm**." And the sampling-site instruction: in large fish, "**the lower, anterior (forward) portion of the fish loin (not the belly flap)**" gives the best information.', zh: '主管機關自己陳述的假設是：「若在一條魚或一批貨的某一部位測得 50 ppm，就有可能**其他部位超過 500 ppm**。」以及取樣位置的指示：在大型魚上，「**魚腰下前段（不是腹鰭片）**」能提供最好的資訊。' },
               { en: '**This 10× gradient is the single biggest threat to the study**, because if you and the laboratory measure different pieces of fish, the gradient will masquerade as method disagreement and the comparison becomes uninterpretable.', zh: '**這個 10 倍的梯度是這份研究最大的威脅**，因為如果你與實驗室量的是不同塊魚肉，那個梯度會假裝成方法之間的不一致，而整個比較就無法解讀。' }]
            ],
            min: 1040,
            source: { en: 'Taiwan from the Ministry of Health and Welfare\'s own bilingual standard, Appendix 3 item 7, as amended with effect from 1 January 2024. United States from the compliance policy guide as revised 4 November 2024 and the 2022 hazards guidance, chapter 7. European Union from Regulation (EC) No 2073/2005 as amended. Operating characteristics and the Codex position from the 2013 FAO/WHO expert meeting report. All recorded with URLs in `notes/2027-idea-sources.md`. **We are quoting standards, not giving legal advice** — check the current text yourself before you design around it.', zh: '台灣部分出自衛生福利部自己的雙語標準附表三第 7 項，依自 2024 年 1 月 1 日生效之修正。美國部分出自 2024 年 11 月 4 日修訂的合規政策指引與 2022 年危害指引第 7 章。歐盟部分出自 (EC) No 2073/2005 及其修正。操作特性與 Codex 立場出自 2013 年 FAO/WHO 專家會議報告。全部連同網址記錄在 `notes/2027-idea-sources.md`。**我們是在引用標準，不是在提供法律意見**——在你依它設計之前，請自己核對現行條文。' }
          })
      });

      /* ---------------- enzyme ---------------- */
      out += h.sec({
        id: 'sf-enz',
        kick: { en: 'The correction', zh: '更正' },
        h2: { en: 'The obvious enzyme cannot work, and it fails in the worst possible direction', zh: '那個最明顯的酵素不能用，而且它失敗的方向是最糟的那個' },
        lede: {
          en: 'Our first draft specified diamine oxidase, which is what almost every published low-cost histamine test uses. The measured selectivity data says it is a total-diamine test wearing a histamine label.',
          zh: '我們的初稿指定了雙胺氧化酶，而那也是幾乎每一個已發表的低成本組織胺檢測所使用的。實測的選擇性數據說：它是一個貼著組織胺標籤的「總二胺檢測」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Substrate', zh: '底物' }, w: '24%' },
              { t: { en: 'Activity, measured on one enzyme lot', zh: '活性，在同一批酵素上量測' }, num: true, w: '24%' },
              { t: { en: 'Why it matters here', zh: '為什麼這在這裡重要' } }
            ],
            rows: [
              [{ en: 'Histamine', zh: '組織胺' }, '**100 %**',
               { en: 'The analyte you want.', zh: '你想要的那個分析物。' }],
              [{ en: 'Cadaverine', zh: '屍胺' }, '**~57 %**',
               { en: 'Produced by the same spoilage bacteria, in the same fish, at the same time.', zh: '由同一批腐敗菌、在同一條魚裡、同時產生。' }],
              [{ en: 'Putrescine', zh: '腐胺' }, '**~50 %**',
               { en: 'Likewise. A sample with little histamine and much cadaverine reads as a histamine positive.', zh: '同樣如此。一個組織胺少、屍胺多的樣本，會被讀成組織胺陽性。' }],
              [{ en: 'Tyramine', zh: '酪胺' }, '~6 %',
               { en: 'The one piece of good news: tyramine barely interferes.', zh: '唯一的好消息：酪胺幾乎不干擾。' }],
              [{ en: '**And the interference runs both ways**', zh: '**而干擾是雙向的' + '**' }, '**−35 % to −80 %**',
               { en: 'Putrescine and cadaverine each **reduced histamine degradation by about 35 % at a one-to-four ratio, and by 70 % and 80 % at one-to-twenty.** So in a badly spoiled fish the error runs toward a **false negative on exactly the dangerous sample.** That is the worst possible direction for a food-safety test to fail in.', zh: '腐胺與屍胺在 1 比 4 的比例下，各自**把組織胺的降解降低約 35%；在 1 比 20 時分別降低 70% 與 80%。**所以在一條嚴重腐敗的魚裡，誤差會走向**對那個最危險樣本的偽陰性。**對一個食品安全檢測來說，那是最糟的失敗方向。' }]
            ],
            min: 880,
            source: { en: 'Sánchez-Pérez et al. 2022, *Frontiers in Nutrition* 9:897028, [DOI](https://doi.org/10.3389/fnut.2022.897028), measured head-to-head on a single porcine-kidney enzyme lot. Corroborated across species: a reference enzyme database records histamine at 48 % of putrescine activity for the human enzyme, and in plant copper amine oxidases the catalytic efficiency for putrescine is **four to six orders of magnitude higher** than for histamine.', zh: 'Sánchez-Pérez 等，2022，*Frontiers in Nutrition* 9:897028，[DOI](https://doi.org/10.3389/fnut.2022.897028)，在同一批豬腎酵素上並列量測。跨物種佐證：一個參考酵素資料庫記載人類該酵素對組織胺的活性為腐胺的 48%；而在植物銅胺氧化酶中，對腐胺的催化效率比對組織胺高出**四到六個數量級**。' }
          }) +
          h.kv([
            [{ en: 'What to use instead', zh: '改用什麼' },
             { en: 'A **histamine dehydrogenase**. The *Rhizobium* enzyme is the better-documented choice and **has been expressed recombinantly in *E. coli***, which is what makes this a synthetic-biology project rather than a kit purchase. Cite it by its **database accession, not by an enzyme-commission number** — the commission numbers in circulation for this enzyme are wrong, and the one most often quoted belongs to spermidine dehydrogenase.', zh: '一個**組織胺去氫酶**。來自 *Rhizobium* 的那個酵素是文獻記載較完整的選擇，而且**已經在 *E. coli* 中重組表達過**，正是這件事讓這成為一個合成生物學專案，而不是一次試劑盒採購。請用它的**資料庫序號引用，不要用酵素編號**——市面上流傳的該酵素編號是錯的，而最常被引用的那一個其實屬於亞精胺去氫酶。' }],
            [{ en: 'The selectivity experiment is not optional', zh: '那個選擇性實驗不是選配' },
             { en: 'Whatever enzyme you pick, **run it against cadaverine and putrescine at realistic ratios and publish the numbers.** This is one plate, it is the experiment that distinguishes your test from every strip on the market, and the published data above tells you exactly what a bad answer looks like. A histamine test with no selectivity panel is a diamine test.', zh: '不管你挑哪個酵素，**都要用屍胺與腐胺在真實比例下去測它，並公開那些數字。**這是一盤的工作，是把你的檢測與市面上每一張試紙區分開來的那個實驗；而上面那些已發表的數據，正好告訴你一個壞答案長什麼樣子。一個沒有選擇性測試的組織胺檢測，就是一個二胺檢測。' }],
            [{ en: 'The performance to beat, from the reference tables', zh: '要超越的表現，取自參考表' },
             { en: 'The FAO comparison of methods puts a colorimetric assay at a limit of quantification around **20 mg/kg** with a working range of roughly 0.8 to 300, against 1 to 5 mg/kg for the fluorometric and chromatographic references. **20 mg/kg is comfortably below Taiwan\'s 200 and the United States\' 35** — so a colorimetric test is fit for that decision, and you should say which decision you are designing for rather than chasing the lowest number.', zh: 'FAO 的方法比較把顯色法的定量極限放在約 **20 mg/kg**、工作範圍大約 0.8 到 300，而螢光法與層析法參考方法是 1 到 5 mg/kg。**20 mg/kg 舒服地低於台灣的 200 與美國的 35**——所以顯色法對那個判定是適用的；而你應該說清楚你是為哪個判定而設計，而不是去追最低的那個數字。' }]
          ])
      });

      /* ---------------- the comparator ---------------- */
      out += h.sec({
        id: 'sf-ref',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'The reference method is not perfect either, and which fish you choose decides how imperfect', zh: '參考方法本身也不完美，而你挑哪種魚決定了它有多不完美' },
        lede: {
          en: 'We nearly published this page as though the accredited result were the truth and any gap were the student assay\'s fault. It is not that simple, and the numbers are public.',
          zh: '我們差點把這一頁寫成「認證結果就是真相，任何落差都是學生試驗的錯」。事情沒那麼簡單，而那些數字是公開的。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Species', zh: '魚種' }, w: '18%' },
              { t: { en: 'Recovery in the European standard\'s own ring test', zh: '歐盟標準自己的循環測試中的回收率' } },
              { t: { en: 'Between-laboratory spread', zh: '實驗室間變異' }, w: '24%' }
            ],
            rows: [
              [{ en: '**Tuna**', zh: '**鮪魚**' },
               { en: '**91 to 96 %** across spikes at 25, 100 and 220 mg/kg. The authors\' own verdict: "results for tuna are excellent".', zh: '在 25、100 與 220 mg/kg 的加標下為 **91 到 96%**。作者自己的判定是：「鮪魚的結果極佳」。' },
               { en: '9 to 31 %, worst at the lowest spike', zh: '9 到 31%，在最低加標時最差' }],
              [{ en: '**Mackerel**', zh: '**鯖魚**' },
               { en: '**67 to 73 %** — "quite acceptable", in their words.', zh: '**67 到 73%**——用他們的話說是「相當可接受」。' },
               { en: '9 to 15 %', zh: '9 到 15%' }],
              [{ en: '**Herring**', zh: '**鯡魚**' },
               { en: '**27 to 44 %.** Verbatim: "recoveries for herring were **unacceptable low**". The European reference method recovers roughly **a third** of the histamine in herring.', zh: '**27 到 44%。**原文：「鯡魚的回收率**低到不可接受**」。歐盟的參考方法在鯡魚上只回收了大約**三分之一**的組織胺。' },
               { en: '4 to 28 %', zh: '4 到 28%' }]
            ],
            min: 880,
            source: { en: 'Collaborative-study data from Annex B of the European standard, nine participating laboratories, reported via an AOAC conference poster; the validation study itself is Duflos et al. 2019, *Int J Food Microbiol* 288:97–101, [PMID 30170760](https://pubmed.ncbi.nlm.nih.gov/30170760/) — a 2013 inter-laboratory study across nine laboratories in seven countries, eighteen samples each, on tuna, mackerel and herring.', zh: '協同研究數據出自該歐盟標準的附錄 B，九間參與實驗室，經由一份 AOAC 會議海報報告；驗證研究本身是 Duflos 等，2019，*Int J Food Microbiol* 288:97–101，[PMID 30170760](https://pubmed.ncbi.nlm.nih.gov/30170760/)——一項 2013 年的實驗室間研究，橫跨七個國家的九間實驗室、每間十八個樣本，對象為鮪魚、鯖魚與鯡魚。' }
          }) +
          h.kv([
            [{ en: 'So choose tuna, and say why in the methods', zh: '所以挑鮪魚，並在方法一節說明理由' },
             { en: 'This is the single most actionable line on the page. **A disagreement measured in herring tells you almost nothing**, because the comparator itself is only recovering a third of the analyte there — your assay could be right and still look wrong. **In tuna the comparator is near-quantitative, so a disagreement is informative.** Pick the species where the reference method works, and record the species for every fish.', zh: '這是本頁最可以直接行動的一行。**在鯡魚上量到的不一致幾乎什麼也沒告訴你**，因為在那裡比較方法本身只回收了三分之一的分析物——你的試驗可能是對的，卻看起來像錯的。**在鮪魚上，比較方法接近定量，所以不一致才有資訊量。**請挑那個參考方法行得通的魚種，並為每一條魚記錄魚種。' }],
            [{ en: 'The two official methods disagree with each other', zh: '兩個官方方法彼此不一致' },
             { en: 'A European Commission research-centre study compared the regulation\'s prescribed method against the international fluorometric one and concluded, verbatim, that "the two methods are **not fully equivalent**. The EU mandated method has a tendency to **overestimate**, while the Codex method has a tendency to **underestimate**." On one regression the European method ran about **35 % high**. **So "the reference value" depends on which reference you used, and your write-up should name the method, not just the laboratory.**', zh: '歐盟執委會一個研究中心的研究，把法規所指定的方法與國際螢光法相比，結論原文是：「這兩個方法**並非完全等效**。歐盟指定的方法傾向**高估**，而 Codex 的方法傾向**低估**。」在其中一條回歸上，歐盟方法大約**高出 35%**。**所以「參考值」取決於你用的是哪一個參考；而你的書寫應該指名那個方法，不只是那間實驗室。**' }],
            [{ en: 'And the regulation\'s own method has never been ring-tested', zh: '而法規自己的方法從未做過循環測試' },
             { en: 'The same study states it plainly: "The method has not been validated by collaborative study." **A student project that pre-registers an acceptance band, runs a homogeneity check and publishes its paired data would, on that one axis, be better characterised than the method it is being judged against.** Say that carefully and only once — it is true, and it is the kind of sentence that has to be exactly right.', zh: '同一份研究說得很直接：「該方法未經協同研究驗證。」**一個會事先登記接受帶、做均質性檢查、並公開配對數據的學生專案，單就那一個面向而言，會比它被拿去比較的那個方法被特性化得更完整。**這句話請小心地、而且只說一次——它是真的，而這正是那種必須說得精確的句子。' }],
            [{ en: 'What the comparator\'s precision looks like near your threshold', zh: '在你的門檻附近，比較方法的精密度長什麼樣' },
             { en: 'A five-year accredited survey in northern Italy reports within-laboratory reproducibility of **16.5 % at 20 mg/kg, 15.4 % at 50, and 2.8 % at 200** — so the reference method is at its least precise exactly where a low-level decision sits, and at its best near Taiwan\'s limit. **Set the acceptance band from the comparator\'s precision at your decision concentration, not from a single headline figure.** For the record, the band this page uses — roughly **±26 %**, from a sixteen-laboratory reproducibility of **9.4 %** at 50 ppm for the international fluorometric method — sits inside that picture rather than contradicting it.', zh: '義大利北部一份五年期的認證調查報告的實驗室內再現性為：**20 mg/kg 時 16.5%、50 時 15.4%、200 時 2.8%**——所以參考方法在「低濃度判定」所在的位置精密度最差，而在台灣限值附近最好。**請依比較方法在你的判定濃度下的精密度來設定接受帶，不要用單一個招牌數字。**附帶說明：本頁所用的那個帶——約 **±26%**，源自國際螢光法在 50 ppm、十六間實驗室的再現性 **9.4%**——落在這個圖像之內，而不是與它矛盾。' }],
            [{ en: 'One more sobering number about the comparator', zh: '關於比較方法，還有一個令人清醒的數字' },
             { en: 'In a proficiency round run across **twenty-six laboratories** on spiked canned mackerel, **three failed at one level and five at the other** — so **roughly twelve to nineteen per cent of participating laboratories fail a histamine proficiency test.** That is not an argument for distrusting your accredited partner; it is an argument for **asking which proficiency scheme they participate in and what their last score was**, which is a question a student team is entitled to ask and almost never does.', zh: '在一次橫跨**二十六間實驗室**、以加標罐頭鯖魚進行的能力試驗中，**一個濃度有三間不合格、另一個濃度有五間不合格**——所以**大約百分之十二到十九的參與實驗室在組織胺能力試驗中不合格。**這不是「不要信任你的認證夥伴」的理由；這是「去問他們參加哪個能力試驗計畫、上一次分數是多少」的理由——而那是一支學生團隊有權問、卻幾乎從不問的問題。' }]
          ])
      });

      /* ---------------- splitting ---------------- */
      out += h.sec({
        id: 'sf-split',
        kick: { en: 'The method', zh: '方法' },
        h2: { en: 'Homogenise first, split second, and prove the split was fair', zh: '先均質、再分樣，並且證明分樣是公平的' },
        lede: {
          en: 'This is the section that decides whether the study produces a number or a mess, and it is the one most likely to be skipped. The whole comparison rests on the two laboratories measuring the same material.',
          zh: '這一節決定這份研究會產出一個數字還是一團混亂，而它也是最可能被跳過的一節。整個比較都建立在「兩間實驗室量的是同一份材料」之上。'
        },
        body:
          h.phases([
            { h: { en: 'Sample where the regulator says to sample', zh: '在主管機關說要取樣的地方取樣' },
              p: { en: 'The lower, anterior portion of the loin, not the belly flap; edible portion only, no skin or bone. Record the species, the outlet, the size class and the catch season.', zh: '魚腰的下前段，不是腹鰭片；只取可食部分，不含皮與骨。記錄魚種、販售場所、體型級別與捕獲季節。' },
              items: [
                { en: 'Size class and season are not incidental: one published study found about **nine-fold** between seasons and **six-and-a-half-fold** between size classes **within the same batch**. Block on them or record them, or they will turn up inside your limits of agreement.', zh: '體型級別與季節不是附帶條件：有一份已發表研究發現，**同一批貨內**季節之間差約**九倍**、體型級別之間差約**六點五倍**。要嘛分層、要嘛記錄，否則它們會跑進你的一致性界限裡。' },
                { en: 'And **species is a design decision, not a label** — see the section above. In the European standard\'s own ring test the reference method recovered 91 to 96 % from tuna and only 27 to 44 % from herring, so a comparison run on the wrong species measures the comparator rather than your assay.', zh: '而**魚種是一個設計決定，不是一個標籤**——見上一節。在歐盟標準自己的循環測試中，參考方法從鮪魚回收 91 到 96%，從鯡魚只回收 27 到 44%；所以在錯的魚種上做比較，量到的是比較方法，而不是你的試驗。' }
              ],
              done: { en: 'A sampling sheet with the site, species, outlet, size and season for every fish, filled in at the market.', zh: '一張取樣表，每條魚都有部位、魚種、販售場所、體型與季節，在市場現場就填好。' } },
            { h: { en: 'Homogenise the whole edible portion, once, per fish', zh: '每條魚，整個可食部分，均質一次' },
              p: { en: 'Ten grams into 490 millilitres of water, blended one to two minutes in a laboratory blender, following the standard fish sample-preparation method. One homogenate per fish. **Everything downstream comes out of that one jar.**', zh: '十公克加進 490 毫升水，在實驗室攪拌機中均質一到兩分鐘，依照標準的魚類樣本製備方法。每條魚一份均質液。**下游的一切都從那一罐裡出來。**' },
              items: [
                { en: 'Published practice is simple aqueous blending. **No guidance anywhere requires cryogenic milling for histamine in fish** — do not claim it does.', zh: '已發表的做法就是單純的水相攪拌。**沒有任何指引要求魚類組織胺必須做低溫研磨**——不要聲稱有。' },
                { en: 'And a trap worth knowing: **the bacterial enzyme that makes histamine survives freezing and reactivates on thawing.** A thawed aliquot in transit can genuinely gain histamine, which is a real difference between the two laboratories rather than a measurement error.', zh: '還有一個值得知道的陷阱：**製造組織胺的那個細菌酵素能在冷凍中存活，並在解凍時重新活化。**一份在運送途中解凍的分裝，真的可能增加組織胺；那是兩間實驗室之間的真實差異，不是量測誤差。' }
              ],
              done: { en: 'One labelled homogenate per fish, with the blending time and the dilution written on the label.', zh: '每條魚一份標記好的均質液，標籤上寫著均質時間與稀釋倍數。' } },
            { h: { en: 'Prove the split was fair, with a number', zh: '用一個數字證明分樣是公平的' },
              p: { en: 'Dispense into sub-samples, randomise them, then take **ten sub-samples and measure each in duplicate**. Compare the between-sub-sample standard deviation against the published homogeneity criterion by one-way analysis of variance.', zh: '分裝成子樣本、隨機化，然後取**十個子樣本、每個做兩重複**。用單因子變異數分析，把子樣本之間的標準差與已發表的均質性判準比較。' },
              items: [
                { en: 'The criterion in the proficiency-testing standards is that the between-sample standard deviation should be **no more than 0.3 times** the standard deviation used for assessment. **Report the ratio as a number**, not as a pass or fail.', zh: '能力試驗標準中的判準是：樣本之間的標準差應**不超過 0.3 倍**評估用標準差。**把那個比值當成一個數字報告出來**，不要只報「通過」或「不通過」。' },
                { en: 'And say the honest thing about the criterion: a peer-reviewed critique shows the test is **permissive** — it has a high probability of accepting batches whose standard deviation is a multiple of the limit, and the authors conclude the criteria "do not assure batch homogeneity". **Passing it is necessary and weak.** Saying so is the kind of sentence that makes a judge trust the rest of the page.', zh: '而且要把關於這個判準的誠實話說出來：一篇經同儕審查的批評顯示這個檢定是**寬鬆的**——即使批次標準差是上限的數倍，它仍有很高機率判定通過；作者的結論是這些判準「無法保證批次的均質性」。**通過它是必要的，而且是弱的。**把這件事說出來，正是那種會讓評審信任頁面其餘部分的句子。' }
              ],
              done: { en: 'A reported ratio of between-sub-sample to assessment standard deviation, with the analysis-of-variance table.', zh: '一個「子樣本間標準差對評估標準差」的比值，附上變異數分析表。' } },
            { h: { en: 'Send the laboratory an aliquot of that homogenate', zh: '送去實驗室的是那份均質液的一個分裝' },
              p: { en: 'Never a second cut of fish. This is the whole design, and the reason is in the numbers above: the regulator\'s own assumption is a **ten-fold** gradient within a single fish.', zh: '絕不是第二塊魚肉。這就是整個設計，而理由就在上面那些數字裡：主管機關自己的假設是單一條魚內有**十倍**的梯度。' },
              items: [
                { en: 'Check the handoff: compare the mean before and after the freeze-and-transport interval against the same 0.3 criterion, so that a change during the handoff is visible rather than silently absorbed into the comparison.', zh: '檢查交付過程：把冷凍與運送區間前後的平均值，對照同樣的 0.3 判準比較，好讓交付過程中的變化是看得見的，而不是被無聲地吸收進比較裉。' },
                { en: 'Confirm the laboratory\'s **accredited working range covers your expected values** before you send anything. One Taiwanese laboratory\'s accredited range on fresh product starts at **25 mg/kg** — so a result below that does not come back defensible, however much you paid for it.', zh: '在你寄出任何東西之前，先確認該實驗室的**認證工作範圍涵蓋你預期的數值**。台灣有一間實驗室對生鮮產品的認證範圍從 **25 mg/kg** 起算——所以低於那個值的結果不會以可辯護的形式回來，不管你付了多少錢。' }
              ],
              done: { en: 'A written confirmation of the laboratory\'s accredited range, and a chain-of-custody note per sample.', zh: '一份該實驗室認證範圍的書面確認，以及每個樣本的保管鏈紀錄。' } }
          ]) +
          h.take({ en: 'The design lesson that comes from somebody else\'s published study', zh: '來自別人已發表研究的那一課' }, {
            en: 'A 2022 study did exactly this: homogenised twenty market tuna loins **once each**, drew both the rapid-test aliquot and the accredited-laboratory aliquot **from the same homogenate** — and still recorded **fifteen per cent disagreement** between the two methods. Because they had designed sample heterogeneity out, that fifteen per cent is attributable to the **methods**. **If you send the laboratory a different piece of fish, the ten-fold within-fish gradient is free to masquerade as method error, and your study measures nothing.** Homogenise first, split second, prove the split was fair. Everything else on this page is downstream of that sentence.',
            zh: '2022 年有一份研究做的正是這件事：把二十片市售鮪魚腰肉**各均質一次**，快速檢測的分裝與認證實驗室的分裝都**取自同一份均質液**——而兩種方法之間仍然記錄到**百分之十五的不一致**。正因為他們把樣本不均質性設計掉了，那百分之十五才可以歸因於**方法**。**而如果你送給實驗室的是不同一塊魚肉，那個十倍的魚內梯度就能自由地假裝成方法誤差，而你的研究什麼也沒量到。**先均質、再分樣、證明分樣公平。本頁其他一切都在那句話的下游。'
          })
      });

      /* ---------------- statistics ---------------- */
      out += h.sec({
        id: 'sf-stat',
        kick: { en: 'Reporting', zh: '報告' },
        h2: { en: 'How a method comparison is reported, and the one arithmetic problem that will decide your scope', zh: '方法比較該怎麼報告，以及那個會決定你範圍的算術問題' },
        body:
          h.kv([
            [{ en: 'Report agreement, not correlation', zh: '報告一致性，不是相關性' },
             { en: 'A correlation coefficient between two methods is almost always high and almost always uninformative. What a regulator wants is **bias and limits of agreement** — plotted on the **log scale**, because histamine concentrations are log-normally distributed and the spread grows with the level — plus a **non-parametric regression** suitable when both methods carry error, and **accuracy at the decision threshold** as a two-by-two table.', zh: '兩個方法之間的相關係數幾乎總是很高、也幾乎總是沒有資訊量。法規單位想要的是**偏差與一致性界限**——而且畫在**對數尺度**上，因為組織胺濃度是對數常態分布的，散佈會隨水準增大——再加上一個適用於「兩個方法都帶誤差」情況的**非參數回歸**，以及在判定門檻上以二乘二表呈現的**準確度**。' }],
            [{ en: 'Pre-register the acceptance band, and take it from the reference method', zh: '事先登記接受帶，而且從參考方法那裡取' },
             { en: 'The cleanest available criterion: the international fluorometric reference method has a published **reproducibility relative standard deviation of 9.4 %**, so a between-method gap smaller than roughly **plus or minus 26 %** sits **inside the official method\'s own reproducibility** and is not evidence of disagreement at all. **Writing that down before you measure converts an argument into a test**, and it is a far stronger statement than "we found good agreement".', zh: '能取得的最乾淨判準是：國際螢光法參考方法有一個已發表的**再現性相對標準差 9.4%**，所以方法之間的差距若小於大約**正負 26%**，就落在**該官方方法自己的再現性之內**，根本不構成不一致的證據。**在你量測之前把這件事寫下來，就把一場爭論變成一個檢定**，而它比「我們發現一致性良好」要強得多。' }],
            [{ en: 'An interval that cannot exceed one', zh: '一個不會超過 1 的區間' },
             { en: 'If your test gets **thirty out of thirty** positives right, the naive interval is "100 % plus or minus nothing", which is nonsense. The score interval gives **88.6 % to 100 %**, and the exact method a lower bound of **88.4 %**. **So thirty out of thirty honestly means "sensitivity is at least about eighty-eight per cent."** Put that sentence in the plan, because somebody will otherwise write the nonsense version.', zh: '如果你的檢測在**三十個陽性中全對三十個**，天真的區間是「100% 正負零」，那是胡說。分數區間給出 **88.6% 到 100%**，而精確法給出 **88.4%** 的下界。**所以三十取三十，誠實的意思是「敏感度至少約 88%」。**把這句話放進計畫裡，否則總會有人寫出那個胡說的版本。' }],
            [{ en: 'The arithmetic problem, stated plainly', zh: '那個算術問題，直說' },
             { en: 'A sensitivity estimate with a **plus or minus ten point** interval needs about **thirty-five positive samples**. Market fish are mostly compliant — at an eight per cent rate above the limit, reaching thirty-five positives by random sampling would take roughly **four hundred and forty samples**, which no school can afford. **This is the number that decides the whole study, and it must be confronted in January.**', zh: '一個帶**正負十個百分點**區間的敏感度估計，大約需要**三十五個陽性樣本**。市場上的魚大多合格——在超標率 8% 的情況下，用隨機抽樣要湊到三十五個陽性，大約需要**四百四十個樣本**，沒有學校負擔得起。**這個數字決定了整份研究，而它必須在一月就被正面處理。**' }],
            [{ en: 'The fix, and it must be declared not hidden', zh: '解法，而且必須宣告、不能藏' },
             { en: 'A **two-strata enriched design**: deliberately over-sample material likely to be over the limit — temperature-abused fish, end-of-shelf-life fish, and dried or salted products, where published Taiwanese non-compliance runs much higher — and report sensitivity and specificity **within strata**. Then state unambiguously that **predictive values and overall accuracy are not estimable** from an enriched design. Sensitivity and specificity survive enrichment; predictive values do not. **Declaring it converts a fatal flaw into an acknowledged design choice**; leaving it undeclared is exactly what a reviewer marks down.', zh: '一個**兩層的富集設計**：刻意多取可能超標的材料——溫度處理不當的魚、接近效期末的魚，以及乾製或鹽漬產品（台灣已發表的不合格率在那裡高得多）——並**分層報告**敏感度與特異度。然後明確說明：在富集設計下，**預測值與整體準確度無法估計**。敏感度與特異度在富集後仍然成立；預測值不成立。**宣告它，就把一個致命缺陷變成一個被承認的設計選擇**；不宣告，正是審查者會扣分的地方。' }],
            [{ en: 'Size the study from a published table', zh: '依已發表的表決定研究規模' },
             { en: 'The FAO report tabulates sampling plans against assumed within-lot variability and the protection they deliver. At a within-lot log standard deviation of 0.5 and one-in-twenty protection with a limit of 100 mg/kg, the plan needs about **nineteen samples**. **Saying "our budget buys this row of this table, so our confidence is that" is a far stronger pre-registration statement than any generic rule of thumb** — and at the statutory per-sample price it is an affordable row.', zh: 'FAO 的報告把抽樣計畫對照「假設的批內變異度」與「它們提供的保護程度」列成表。在批內對數標準差 0.5、二十分之一保護、限值 100 mg/kg 的情況下，該計畫大約需要**十九個樣本**。**說「我們的預算買得起這張表的這一列，所以我們的信心是那樣」，比任何一般性的經驗法則都要強得多**——而在法定的每樣本價格下，那是一列負擔得起的。' }]
          ]) +
          h.note({
            en: 'Two more things worth pre-registering because they are cheap and they pre-empt the obvious objections. First, **the within-lot variability you assume**: histamine concentrations are log-normal, and across twenty-five published surveys the log standard deviation ranges from **0.05 to 2.79** — with the worst variability at exactly the intermediate concentrations where a 50-to-200 mg/kg decision sits. Assume 0.3 to 1.0 and say so. Second, **a session effect**: the published comparison study found session-to-session variation in its rapid test highly significant, so randomise which fish are measured on which day and include the day in the analysis.',
            zh: '還有兩件事值得事先登記，因為它們很便宜，而且能先堵住最明顯的反駁。第一，**你假設的批內變異度**：組織胺濃度是對數常態的，而在二十五份已發表調查中，對數標準差從 **0.05 到 2.79**——而最糟的變異度恰好出現在「50 到 200 mg/kg 的判定」所在的中間濃度。就假設 0.3 到 1.0，並把它說出來。第二，**場次效應**：那份已發表的比較研究發現，它的快速檢測在不同場次之間的變異高度顯著；所以請隨機安排哪些魚在哪一天量測，並把日期納入分析。'
          })
      });

      /* ---------------- prior art ---------------- */
      out += h.sec({
        id: 'sf-prior',
        kick: { en: 'Prior art', zh: '前人做過的' },
        h2: { en: 'One published study has already done most of this. Here is exactly what is left', zh: '已經有一份已發表研究做了其中大部分。剩下的部分，確切如下' },
        lede: {
          en: 'We first wrote that no paper reports accuracy at a regulatory limit for a low-cost histamine test. That was too strong, and we are correcting it here rather than quietly dropping it.',
          zh: '我們最初寫的是：沒有任何論文報告過低成本組織胺檢測在法規限值上的準確度。那個說法太強了，而我們在這裡更正它，而不是悄悄把它刪掉。'
        },
        body:
          h.kv([
            [{ en: 'What was done, in 2022', zh: '2022 年做了什麼' },
             { en: 'Twenty yellowfin tuna loins collected over four visits from **three kinds of outlet** — large retailers, local fish markets and fishmongers. Each loin homogenised once by the standard method, then assessed by a **commercial lateral-flow strip with its cut-off set at 100 mg/kg** and by **validated chromatography-mass spectrometry at an accredited public-health institute**, all in triplicate, both aliquots from the same homogenate.', zh: '二十片黃鰭鮪魚腰肉，分四次採集，來自**三種販售場所**——大型零售商、地方魚市與魚販。每片以標準方法均質一次，然後用一張**截止值設在 100 mg/kg 的市售橫向流試紙**與一間**認證公共衛生研究機構的已驗證層析質譜法**評估，全部三重複，兩份分裝都取自同一份均質液。' }],
            [{ en: 'What they found', zh: '他們發現了什麼' },
             { en: 'The strip flagged **one of twenty** above the cut-off; the reference method found **two**, at **332** and **263 mg/kg**. **Agreement 85 %, with 10 % false negatives and 5 % false positives** — and the two misses were not marginal, they were three times the cut-off. Their own conclusion: lateral-flow tests "must be reinforced by official methods if doubtful or positive results are achieved."', zh: '那張試紙標出**二十個中的一個**超過截止值；參考方法找到**兩個**，分別是 **332** 與 **263 mg/kg**。**一致性 85%，其中偽陰性 10%、偽陽性 5%**——而那兩個漏掉的並不勉強，它們是截止值的三倍。他們自己的結論是：橫向流檢測「若出現可疑或陽性結果，必須以官方方法加以強化」。' }],
            [{ en: 'So what is genuinely left undone', zh: '那麼真正還沒被做的是什麼' },
             { en: 'Three things, and they are the three the design above is built around. **It was not pre-registered**, and there is no sample-size justification. **It was not powered for an interval**: with only two positives, no usable confidence interval on sensitivity is possible at all — on two out of two the lower bound is around thirty-four per cent. And **there is no quantitative agreement analysis** — the strip was read as a binary, so there is no bias, no limits of agreement and no regression. It also tested a **commercial kit**, not an enzyme a team built.', zh: '三件事，而上面那個設計正是圍繞這三件事建立的。**它沒有事先登記**，也沒有樣本數的理由。**它的規模不足以得到一個區間**：只有兩個陽性，敏感度根本得不到一個可用的信賴區間——在二取二的情況下，下界大約是百分之三十四。而且**完全沒有定量的一致性分析**——那張試紙是被當成二元讀取的，所以沒有偏差、沒有一致性界限、沒有回歸。它測的也是一個**市售試劑盒**，不是某支隊伍自己做的酵素。' }],
            [{ en: 'The claim we would make, narrowed', zh: '我們會提出的主張，已縮小' },
             { en: '"A paired same-homogenate comparison against an accredited laboratory has been done once, on twenty samples, for a commercial strip, reported as percent agreement. **What has not been done is a pre-registered comparison, powered for a sensitivity confidence interval, reporting quantitative agreement alongside accuracy at the legal limit — for any low-cost histamine method, built or bought.**" That is narrower than our first draft and it is still worth a season.', zh: '「對照認證實驗室、同一份均質液的配對比較，已經被做過一次，二十個樣本，對象是一張市售試紙，並以百分比一致性報告。**還沒有被做的，是一份事先登記、規模足以得到敏感度信賴區間、並在法定限值準確度之外同時報告定量一致性的比較——對任何低成本組織胺方法，不論自製或購買。**」那比我們的初稿窄，而它仍然值得一個賽季。' }],
            [{ en: 'And cite it as the template, not as the thing to beat', zh: '而且請把它當成範本引用，不是當成要打敗的對象' },
             { en: 'Their sample-preparation recipe, their outlet stratification and their decision to draw both aliquots from one homogenate are all better than anything we would have invented. **Copy the method and add the three missing pieces.** A project that improves a published design in three stated ways is much easier for a judge to assess than one claiming to be first.', zh: '他們的樣本製備配方、他們依販售場所分層的做法，以及他們「兩份分裝都取自同一份均質液」的決定，全都比我們自己會想出來的更好。**抄那個方法，然後補上那三個缺掉的部分。**一個「以三個明確方式改進一份已發表設計」的專案，對評審來說比一個聲稱自己是第一個的專案好評估得多。' }]
          ]) +
          h.note({
            en: 'Inside iGEM the picture is different and the opening is wider. A crawl of every registered team wiki from 2022 to 2026 — 21,934 pages — found **"Bland-Altman" on exactly one wiki** (as a protocol, with no results), "limits of agreement" on two, and **"Passing-Bablok" on none**. All fifteen mentions of an accredited laboratory are entrepreneurship roadmaps rather than studies performed. The nearest thing to a precedent is a 2026 High School team that measured histamine in five species of real fish over twelve days — using commercial strips and a titration, not their own construct, and with no reference-method comparison.',
            zh: '在 iGEM 內部，情況不同，而機會更大。我們爬過 2022 到 2026 年每一個已登記的隊伍 wiki——21,934 個頁面——發現 **「Bland-Altman」只出現在一個 wiki 上**（而且是作為流程、沒有結果）、「limits of agreement」出現在兩個、而**「Passing-Bablok」一個也沒有**。所有十五次提到認證實驗室的地方，都是創業路線圖，而不是已執行的研究。最接近先例的，是 2026 年一支高中部隊伍在十二天內量測了五種真實魚類的組織胺——用的是市售試紙與一個滴定法，不是他們自己的構築，而且沒有與參考方法的比較。'
          })
      });

      /* ---------------- gates ---------------- */
      out += h.sec({
        id: 'sf-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'The five gates, answered in one sentence each', zh: '五道關卡，每一道用一句話回答' },
        body:
          h.phases([
            { h: { en: 'Gate 1 — the number and the instrument', zh: '關卡一——數字與儀器' },
              p: { en: 'By week 28 we will report the bias and the 95 % limits of agreement, on the log scale, between our assay and an accredited laboratory, in mg/kg, across a pre-registered number of paired samples.', zh: '到第 28 週，我們會在對數尺度上報告我們的試驗與一間認證實驗室之間的偏差與 95% 一致性界限，單位 mg/kg，涵蓋一個事先登記的配對樣本數。' },
              items: [
                { en: 'Our instrument is a plate reader or a photometer; **theirs is the one that matters**, and the thing to confirm in January is not ours but their **accredited working range** — a result below their accredited floor comes back undefendable.', zh: '我們的儀器是微孔盤讀儀或光度計；**真正重要的是他們那台**；而一月要確認的不是我們的，而是他們的**認證工作範圍**——低於他們認證下限的結果，回來時是不可辯護的。' },
                { en: 'Three laboratories in Taiwan are registered for this test under the export-inspection scheme. **Three is a small number — email all three in January.**', zh: '在出口檢驗制度下，台灣有三間實驗室登錄了這個項目。**三間是很小的數字——一月就把三間都寄信問過。**' }
              ],
              done: { en: 'A written quotation, the accredited range in writing, and a turnaround time.', zh: '一份書面報價、書面的認證範圍，以及一個作業時程。' } },
            { h: { en: 'Gate 2 — the control that could make us wrong', zh: '關卡二——可能讓我們是錯的對照' },
              p: { en: 'The split sample itself: the other aliquot of the same homogenate, measured by a laboratory that has no stake in our result and is contractually obliged to report what it finds.', zh: '那個對半分的樣本本身：同一份均質液的另一個分裝，由一間與我們的結果沒有利害關係、而且在合約上有義務回報它所發現的東西的實驗室量測。' },
              items: [
                { en: 'This is the strongest version of gate 4 available anywhere on this site, which is why it is also gate 2: **the outsider is the control.** You are not asking them to confirm you; you are paying them to disagree.', zh: '這是本站任何地方能取得的第四關最強版本，而這也正是它同時是第二關的原因：**外部的人就是那個對照。**你不是在請他們確認你；你是在付錢請他們不同意。' },
                { en: 'Second control, cheap and essential: the **selectivity panel** against cadaverine and putrescine. Without it, agreement with the reference method on spoiled fish could come from the wrong analyte.', zh: '第二個對照，便宜而且必要：對屍胺與腐胺的**選擇性測試**。少了它，在腐敗魚上與參考方法的一致，可能來自錯的那個分析物。' }
              ],
              done: { en: 'A signed arrangement with the laboratory, and a plate map with the selectivity panel already on it.', zh: '一份與實驗室簽定的安排，以及一張已經包含選擇性測試的盤位圖。' } },
            { h: { en: 'Gate 3 — the links, and we admit there are three', zh: '關卡三——環節，而我們承認有三環' },
              p: { en: 'Express the enzyme; get it working on real fish extract; compare the two methods. **That is three links, not two, and we scored ourselves 1 out of 2 on this row rather than pretend otherwise.**', zh: '表達酵素；讓它在真實魚肉萃取液上有效；比較兩個方法。**那是三環，不是兩環；我們在這一列給自己 2 分中的 1 分，而不是假裝不是這樣。**' },
              items: [
                { en: 'The mitigation that actually works: **buy a commercial kit as a fallback for the comparison arm**. If the expression work stalls — which is exactly what happened to the 2026 team that came closest — the study still runs, and the wiki says plainly which enzyme produced the numbers.', zh: '真正有效的緩解：**為比較那一組買一個市售試劑盒當備援**。如果表達工作卡住——而那正好就是 2026 年最接近的那支隊伍所遭遇的事——這份研究仍然跑得下去，而 wiki 會清楚寫明那些數字是哪個酵素產出的。' },
                { en: 'What we cut: a device. A phone camera and published colour analysis will read a colorimetric endpoint, and a 2026 team already released software that does exactly that for paper reactions.', zh: '我們砍掉的是：一台裝置。一支手機相機加上已公開的顏色分析就能讀出顯色終點，而 2026 年已經有一支隊伍釋出了正好為紙上反應做這件事的軟體。' }
              ],
              done: { en: 'A chain diagram with three boxes, one of them marked "fallback: commercial kit".', zh: '一張三個方塊的鏈條圖，其中一個標著「備援：市售試劑盒」。' } },
            { h: { en: 'Gate 4 — the outsider', zh: '關卡四——外部的人' },
              p: { en: 'An accredited food-testing laboratory, paid, on the other half of every sample. This is the only idea on this site where the outsider is not an addition to the design but the design itself.', zh: '一間付費的認證食品檢測實驗室，測每一個樣本的另一半。這是本站唯一一個「外部的人不是設計的附加，而就是設計本身」的題目。' },
              items: [
                { en: 'In Taiwan the price is unusually transparent: a statutory reference fee of about **NT$1,800 per sample** for this test under the export scheme, with the explicit rule that a laboratory **may not charge above the reference fee**, and a commercial list price of about **NT$2,400** elsewhere. **Your sample size is a budget decision you can make with real numbers in January.**', zh: '在台灣，價格透明得不尋常：在出口制度下，這個項目的法定參考費約為**每樣本新台幣 1,800 元**，並明訂實驗室**不得收取超過參考費額的費用**；另有一處的商業牌價約為**新台幣 2,400 元**。**你的樣本數是一個一月就能用真實數字做出的預算決定。**' },
                { en: 'The cheap route is compositing — eighteen samples combined into six is priced at roughly **NT$444 per original fish** — but see the trap: the composite critical limit is **below one laboratory\'s accredited floor**, so the cheap route cannot produce a defensible number at that limit. Decide which you are buying.', zh: '便宜的路線是混樣——十八個樣本併成六個，約相當於**每條原始魚新台幣 444 元**——但注意那個陷阱：混樣的關鍵限值**低於某間實驗室的認證下限**，所以便宜路線在那個限值上產不出可辯護的數字。請決定你買的是哪一種。' }
              ],
              done: { en: 'A quotation, a sample count, and the row of the published sampling table your budget corresponds to.', zh: '一份報價、一個樣本數，以及你的預算對應到已發表抽樣表的哪一列。' } },
            { h: { en: 'Gate 5 — the negative result, written first', zh: '關卡五——先寫下負面結果' },
              p: { en: 'Two sentences, both of which we would publish unchanged:', zh: '兩句話，兩句我們都會原封不動公開：' },
              items: [
                { en: '**"Our limits of agreement span *x* to *y* mg/kg, which is wider than the reference method\'s own reproducibility, so our assay cannot replace it; it can only triage."** That is a complete, useful answer to the question the study asked, and it is the outcome the published precedent would predict.', zh: '**「我們的一致性界限從 *x* 到 *y* mg/kg，比參考方法自身的再現性更寬，所以我們的試驗無法取代它；它只能做初篩。」**那是對這份研究所提問題的一個完整、有用的答案，而且是已發表前例會預測的那個結果。' },
                { en: '**"Of *n* samples above the legal limit, we missed *k*, so sensitivity is at least *z* per cent by the score interval."** Write the interval form now, so that nobody writes "100 %" in October.', zh: '**「在 *n* 個超過法定限值的樣本中，我們漏掉 *k* 個，所以依分數區間，敏感度至少為 *z* %。」**現在就把區間的寫法定下來，好讓十月不會有人寫出「100%」。' }
              ],
              done: { en: 'Both sentences in the January pre-registration, with the acceptance band and the strata beside them.', zh: '兩句話都在一月的事先登記文件裡，旁邊附上接受帶與分層。' } }
          ])
      });

      /* ---------------- flow ---------------- */
      out += h.sec({
        id: 'sf-flow',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'One homogenate per fish, and a pre-registration that comes before the first market visit', zh: '每條魚一份均質液，而事先登記發生在第一次上市場之前' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SPLITFISH: the dry lane writes the rules before the wet lane buys a fish', zh: 'SPLITFISH：乾式那條線在濕式那條線買魚之前就把規則寫好' },
          sub: { en: 'Wet lab above, dry lab below. The first handoff runs upward because the pre-registration fixes the sample size, the strata and the acceptance band before any sample exists; the second runs downward because the paired aliquots are the dataset. Note that the homogeneity check sits in the wet lane, not the dry one: proving the split was fair is bench work.', zh: '上為濕式、下為乾式。第一個交接向上，因為事先登記在任何樣本存在之前就固定了樣本數、分層與接受帶；第二個向下，因為配對的分裝就是那份資料集。請注意均質性檢查在濕式那條線，不在乾式：證明分樣公平是實驗檯的工作。' },
          caption: { en: 'Our plan, not a record of work. Nothing in this diagram has been performed.', zh: '這是我們的計畫，不是工作紀錄。本圖中沒有任何一步被執行過。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- tools ---------------- */
      out += h.sec({
        id: 'sf-tool',
        kick: { en: 'Logistics', zh: '後勤' },
        h2: { en: 'The budget is the study design, and in Taiwan the price is published', zh: '預算就是研究設計，而在台灣，價格是公開的' },
        lede: {
          en: 'This is the only idea on this site whose scope is set by a per-sample invoice. That is a disadvantage you can plan with and an advantage over the ideas whose costs are guesses.',
          zh: '這是本站唯一一個「範圍由每樣本的發票決定」的題目。那是一個你可以據以規劃的劣勢，也是相對於那些成本只能猜的題目的優勢。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What', zh: '項目' }, w: '22%' },
              { t: { en: 'Why and how', zh: '為什麼、怎麼做' } },
              { t: { en: 'Cost and the trap', zh: '成本與陷阱' }, w: '32%' }
            ],
            rows: [
              [{ en: '**Accredited testing**', zh: '**認證檢測**' },
               { en: 'The comparison arm, and the entire point of the project. Only three laboratories in Taiwan are registered for this test under the export-inspection scheme, and a fourth publishes an open list price.', zh: '比較那一組，也是整個專案的重點。在台灣，出口檢驗制度下只有三間實驗室登錄這個項目，另有一間公開牌價。' },
               { en: 'A **statutory reference fee of about NT$1,800 per sample**, with the published rule that a laboratory may not charge above it, inclusive of the report and tax. A commercial list price of about **NT$2,400**, with rush work at two to three times. **The cheapest route — eighteen fish composited into six, about NT$444 per fish — cannot give a defensible number at the composite limit, because that limit falls below the accredited range.**', zh: '**法定參考費約為每樣本新台幣 1,800 元**，並明訂實驗室不得超收，且已含報告與稅。另有商業牌價約**新台幣 2,400 元**，急件為二至三倍。**最便宜的路線——十八條魚併成六個、約每條 444 元——在混樣的限值上給不出可辯護的數字，因為那個限值低於認證範圍。**' }],
              [{ en: '**The fish**', zh: '**那些魚**' },
               { en: 'Real market samples, stratified by outlet as the published study did, plus a deliberately enriched stratum of material likely to be over the limit. Species, size and season recorded for every fish.', zh: '真實的市場樣本，照已發表研究那樣依販售場所分層，再加上一層刻意富集的「可能超標」材料。每條魚都記錄魚種、體型與季節。' },
               { en: 'Cheap in money and expensive in logistics: cold transport, a blender, and a freezer you can keep. **The enriched stratum is the part to think hardest about** — it is what makes thirty-five positives reachable at all.', zh: '錢上便宜、後勤上昂貴：冷鏈運送、一台攪拌機，以及一台你能持續佔用的冷凍櫃。**富集那一層是最需要用力想的部分**——它是讓三十五個陽性變得可達的唯一原因。' }],
              [{ en: '**The enzyme**', zh: '**那個酵素**' },
               { en: 'A histamine dehydrogenase expressed in *E. coli*. Cite it by database accession; the enzyme-commission numbers in circulation for it are wrong.', zh: '一個在 *E. coli* 中表達的組織胺去氫酶。請用資料庫序號引用；流傳的那些酵素編號是錯的。' },
               { en: 'Synthesis of the gene fits comfortably inside a sponsor allowance if you claim it in the first weeks of the season. **Budget a commercial kit as the fallback** — one research-grade kit is about **US$8.50 per test**, but nothing on its page validates it for a fish-muscle matrix, so check the matrix claim before you rely on it.', zh: '只要你在賽季最初幾週申請，基因合成能舒服地裝進贊助商額度裡。**把一個市售試劑盒列為備援預算**——有一個研究級試劑盒約為**每次測試 8.5 美元**，但它的頁面上沒有任何東西驗證它適用於魚肉基質，所以在你依賴它之前先確認基質聲明。' }],
              [{ en: '**The standards you should buy**', zh: '**你應該買的那些標準**' },
               { en: 'The European standard for determining histamine in fishery products is the one document that would settle the working range, detection limit and quantification limit questions this plan currently leaves open.', zh: '歐盟那份「魚產品中組織胺測定」的標準，是唯一一份能把本計畫目前留著的工作範圍、偵測極限與定量極限問題一次解決的文件。' },
               { en: 'About **€20**, which is the best-value purchase in this entire project. Note that the microbiological sample-preparation standard for fish is **not** the right one to cite for a chemical determination — use the official chemical sample-preparation method instead.', zh: '約 **20 歐元**，是整個專案裡最划算的一筆採購。請注意：魚類的**微生物學**樣本製備標準**不是**化學測定該引用的那一份——請改用官方的化學樣本製備方法。' }],
              [{ en: '**The readout**', zh: '**讀值**' },
               { en: 'A plate reader or a photometer for the quantitative arm. A phone camera plus published colour analysis is enough for the colorimetric endpoint, and a 2026 team has already released software that does exactly this for paper reactions.', zh: '定量那一組用微孔盤讀儀或光度計。顯色終點用一支手機相機加上已公開的顏色分析就夠了，而 2026 年已經有一支隊伍釋出了正好為紙上反應做這件事的軟體。' },
               { en: 'The item to confirm in January. If you have no plate reader, a 2026 High School team built and calibrated a photometer against a commercial instrument and published the slope and the intercept.', zh: '一月該確認的那一項。如果你沒有微孔盤讀儀，2026 年有一支高中部隊伍自己做了一台光度計、對照商用儀器校正，並公開了斜率與截距。' }]
            ],
            min: 1040,
            source: { en: 'Taiwanese prices read from the Bureau of Standards, Metrology and Inspection\'s own published reference-fee schedule dated 19 October 2026 and from a research institute\'s open catalogue, both recorded in `notes/2027-idea-sources.md`. Currency conversions are not given because we did not verify a rate. Confirm every price yourself before planning a budget.', zh: '台灣的價格讀自經濟部標準檢驗局自己公布、製表日期 2026 年 10 月 19 日的參考費額表，以及某研究機構的公開目錄，兩者都記錄在 `notes/2027-idea-sources.md`。我們沒有提供匯率換算，因為我們沒有確認過匯率來源。在做預算之前，請自己確認每一筆價格。' }
          })
      });

      /* ---------------- schedule ---------------- */
      out += h.sec({
        id: 'sf-plan',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'The pre-registration is the first deliverable, not the last', zh: '事先登記是第一個交付項目，不是最後一個' },
        lede: {
          en: 'iGEM has published only the 2027 Jamboree dates — 18 to 21 October 2027. The wiki freeze has fallen 19 to 23 days earlier in each of the last four seasons and has always been a Wednesday, which puts a 2027 freeze near **29 September 2027**. That is our arithmetic, not an announcement.',
          zh: 'iGEM 只公布了 2027 年 Jamboree 的日期——2027 年 10 月 18 至 21 日。過去四個賽季，wiki 凍結日都落在它前面 19 到 23 天，而且一直都是星期三，據此推算 2027 年的凍結日在 **2027 年 9 月 29 日**附近。那是我們的算術，不是公告。'
        },
        body:
          h.fig({
            kind: 'gantt',
            tag: { en: 'SCHEDULE', zh: '行程' },
            title: { en: 'SPLITFISH across the season, in months from the start', zh: 'SPLITFISH 的整季安排，以自起點起算的月份表示' },
            sub: { en: 'Month 0 is your first team meeting; month 9 is the wiki freeze. The two bars that must not slip are the laboratory arrangement and the pre-registration, because every later decision is constrained by both.', zh: '第 0 個月是你們第一次團隊會議；第 9 個月是 wiki 凍結日。絕對不能延後的是「實驗室安排」與「事先登記」，因為之後每一個決定都被這兩件事限制住。' },
            data: [
              { label: { en: 'Email all three laboratories', zh: '把三間實驗室都寄信問過' }, start: 0, end: 0.8, tone: 'r', note: { en: 'ask for the accredited range', zh: '要問認證範圍' } },
              { label: { en: 'Buy and read the method standard', zh: '買下並讀完方法標準' }, start: 0.3, end: 1, tone: 'v' },
              { label: { en: 'Pre-register the whole study', zh: '把整份研究事先登記' }, start: 0.8, end: 1.8, tone: 'v', note: { en: 'before any fish', zh: '在任何魚之前' } },
              { label: { en: 'Express the enzyme', zh: '表達那個酵素' }, start: 1, end: 3.5, tone: 'b' },
              { label: { en: 'Fallback kit ordered in parallel', zh: '備援試劑盒同時訂購' }, start: 1.5, end: 2.2, tone: 'a' },
              { label: { en: 'Selectivity panel against the diamines', zh: '對那些二胺的選擇性測試' }, start: 3, end: 4, tone: 'g', note: { en: 'one plate, decides everything', zh: '一盤，決定一切' } },
              { label: { en: 'Spiked-blank curve in fish matrix', zh: '魚肉基質中的加標空白曲線' }, start: 3.5, end: 4.8, tone: 'g' },
              { label: { en: 'Market sampling, stratified', zh: '市場取樣，分層' }, start: 4.5, end: 6.5, tone: 'b' },
              { label: { en: 'Homogenise, split, prove homogeneity', zh: '均質、分樣、證明均質性' }, start: 4.8, end: 6.8, tone: 'a' },
              { label: { en: 'Accredited laboratory runs the pairs', zh: '認證實驗室跑那些配對' }, start: 5.5, end: 7.5, tone: 'r', note: { en: 'allow for turnaround', zh: '要預留作業時程' } },
              { label: { en: 'Agreement analysis as pre-registered', zh: '依事先登記做一致性分析' }, start: 7, end: 8, tone: 'v' },
              { label: { en: 'Release the paired dataset', zh: '釋出配對資料集' }, start: 7.8, end: 8.5, tone: 'v' },
              { label: { en: 'Write the results page first', zh: '先寫結果頁' }, start: 8, end: 8.7, tone: 'r' },
              { label: { en: 'Freeze bundle: wiki, forms, Registry', zh: '凍結包：wiki、表單、Registry' }, start: 8.7, end: 9, tone: 'r' }
            ],
            opts: { min: 0, max: 10 },
            caption: { en: 'Our plan. The selectivity panel sits in month three on purpose: if the enzyme cannot tell histamine from cadaverine, everything after it is a diamine study, and you want to know that before you buy forty fish.', zh: '這是我們的計畫。選擇性測試刻意排在第三個月：如果那個酵素分不出組織胺與屍胺，那它之後的一切都是一份二胺研究；而你會希望在買四十條魚之前就知道這件事。' }
          }) +
          h.note({
            en: 'Two scheduling realities to build in. The laboratory\'s standard turnaround is measured in **working weeks, not days**, and rush service costs two to three times as much — so the last batch of samples must leave with weeks to spare, not days. And the pre-registration has to be **timestamped somewhere a judge can check**: a dated commit in your own repository is enough, and a 2026 High School team did exactly that — committing eleven algorithms, five metrics, a selection rule and eight predictions before measuring, then reporting that one prediction held, one failed and five were unsupported. **That team won Best Measurement in its section.** It is also our own team, which is why we are naming the practice rather than the result.',
            zh: '有兩個行程上的現實要納進來。實驗室的標準作業時程是以**工作週、不是天**計算的，而急件要貴二到三倍——所以最後一批樣本必須提前幾週、而不是幾天寄出。另外，事先登記必須**被打上時間戳，而且放在評審查得到的地方**：你自己倉庫裡一個簽了日期的提交就夠了，而 2026 年有一支高中部隊伍正是這樣做——在量測之前就把十一個演算法、五個指標、一條選擇規則與八個預測提交上去，之後報告其中一個預測成立、一個失敗、五個未獲支持。**那支隊伍拿下了該組的最佳量測獎。**那也是我們自己的隊伍，所以我們指名的是那個做法，而不是那個結果。'
          })
      });

      /* ---------------- risks ---------------- */
      out += h.sec({
        id: 'sf-risk',
        kick: { en: 'Risks', zh: '風險' },
        h2: { en: 'Five ways this goes wrong, and what we would do about each', zh: '這件事出錯的五種方式，以及我們對每一種會怎麼做' },
        body:
          h.cards([
            { chips: [{ t: { en: 'most likely', zh: '最可能' }, k: 'r' }],
              h: { en: 'Not enough samples above the limit', zh: '超過限值的樣本不夠' },
              p: { en: 'Market fish are mostly compliant. At an eight per cent rate above the limit, thirty-five positives would take around four hundred and forty random samples. **This is arithmetic, not bad luck**, and it is the single thing most likely to leave the study without a usable sensitivity interval.', zh: '市場上的魚大多合格。在 8% 的超標率下，三十五個陽性大約需要四百四十個隨機樣本。**這是算術，不是運氣不好**；而它是最可能讓這份研究得不到可用敏感度區間的那一件事。' },
              foot: { en: 'Mitigation: a declared enriched stratum, sensitivity and specificity reported within strata, and an explicit statement that predictive values are not estimable.', zh: '緩解：一個明確宣告的富集分層、分層報告敏感度與特異度，並明確聲明預測值無法估計。' } },
            { chips: [{ t: { en: 'fatal if missed', zh: '沒注意就致命' }, k: 'r' }],
              h: { en: 'You and the laboratory measure different fish', zh: '你與實驗室量的是不同的魚' },
              p: { en: 'The regulator assumes a **ten-fold** gradient within one fish. Send a separate cut and that gradient becomes indistinguishable from method disagreement — and the published study that designed heterogeneity out still found fifteen per cent disagreement, so you have no margin for adding sample variance back in.', zh: '主管機關假設單一條魚內有**十倍**的梯度。送出一塊不同的魚肉，那個梯度就會變得與方法不一致無法區分——而那份把不均質性設計掉的已發表研究仍然發現了 15% 的不一致，所以你沒有餘裕再把樣本變異加回去。' },
              foot: { en: 'Mitigation: one homogenate per fish, aliquots from it only, and a reported homogeneity ratio to prove the split was fair.', zh: '緩解：每條魚一份均質液、只從它分裝，並報告一個均質性比值以證明分樣公平。' } },
            { chips: [{ t: { en: 'the wrong analyte', zh: '錯的分析物' }, k: 'a' }],
              h: { en: 'Your assay measures total diamines', zh: '你的試驗量的是總二胺' },
              p: { en: 'The enzyme most low-cost tests use degrades cadaverine at about fifty-seven per cent and putrescine at about fifty per cent of its histamine activity, and the interference is bidirectional in the direction of false negatives. **Agreement with the reference method could then be a coincidence of correlated spoilage markers.**', zh: '大多數低成本檢測所使用的那個酵素，對屍胺與腐胺的活性分別約為其組織胺活性的 57% 與 50%，而干擾是雙向的、方向朝著偽陰性。**那麼與參考方法的一致，可能只是「彼此相關的腐敗指標」造成的巧合。**' },
              foot: { en: 'Mitigation: a histamine dehydrogenase rather than a diamine oxidase, and the selectivity panel published whatever it shows.', zh: '緩解：用組織胺去氫酶而不是雙胺氧化酶，而且不管選擇性測試顯示什麼都公開它。' } },
            { chips: [{ t: { en: 'the real answer', zh: '真正的答案' }, k: 'a' }],
              h: { en: 'The limits of agreement are too wide', zh: '一致性界限太寬' },
              p: { en: 'This is the pre-written negative result and the published precedent predicts it: a commercial strip against an accredited laboratory on the same homogenate managed eighty-five per cent agreement with two misses at three times the cut-off. **A study that reports wide limits honestly has answered its question.**', zh: '這是事先寫好的負面結果，而已發表的前例預測它會發生：一張市售試紙在同一份均質液上對照認證實驗室，做到 85% 的一致性，而兩個漏檢是截止值的三倍。**一份誠實報告出寬界限的研究，已經回答了自己的問題。**' },
              foot: { en: 'Report the band against the reference method\'s own reproducibility, and say which decision your test is and is not fit for.', zh: '把那個帶對照參考方法自身的再現性報告，並說清楚你的檢測適合與不適合哪一個判定。' } },
            { chips: [{ t: { en: 'expression', zh: '表達' }, k: 'r' }],
              h: { en: 'The enzyme never works', zh: '那個酵素一直做不出來' },
              p: { en: 'This is what happened to the 2026 team that came closest to this project: they built the strip chemistry, wrote down the reference method, interviewed their national food authority — and the expression work stalled, so the comparison never ran.', zh: '2026 年最接近這個專案的那支隊伍遇到的就是這件事：他們做出了試紙化學、寫下了參考方法、訪談了本國食品主管機關——而表達工作卡住了，所以那個比較從未進行。' },
              foot: { en: 'Mitigation: order the fallback kit in month two, and write the wiki so that the study stands whichever enzyme produced the numbers.', zh: '緩解：第二個月就訂下備援試劑盒，並把 wiki 寫成「不管數字是哪個酵素產出的，這份研究都站得住」。' } }
          ]) +
          h.warn({
            en: 'The limitation we would put on our own results page: **an agreement study on fish bought in one city, in one season, by one team, with an enriched stratum, is not a validation of the method.** It is one comparison, and the enrichment means predictive values and overall accuracy cannot be computed from it at all. We would write both sentences into the results page rather than the limitations section, and we would describe the study as what it is: **a pre-registered, powered, paired comparison on *n* fish — the thing the published precedent did once without pre-registration, power or quantitative agreement.**',
            zh: '我們會放在自己結果頁上的那個限制：**一份在一座城市、一個季節、由一支隊伍、帶著一個富集分層所做的一致性研究，不是對該方法的驗證。**它是一次比較；而富集意味著預測值與整體準確度根本無法從它計算出來。我們會把這兩句話寫進結果頁，而不是寫進限制一節；並且照實描述這份研究是什麼：**一份事先登記、規模足夠、在 *n* 條魚上做的配對比較——也就是已發表前例做過一次、但沒有事先登記、沒有足夠規模、也沒有定量一致性的那件事。**'
          })
      });

      /* ---------------- ships ---------------- */
      out += h.sec({
        id: 'sf-ship',
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
               { en: 'The strongest fit of any idea on this site. A pre-registered acceptance band taken from the reference method\'s own reproducibility, a selectivity panel, a demonstrated-homogeneity split, an accredited comparator, and confidence intervals that cannot exceed one. The ballot asks whether the measurement could be reproduced by other teams — the answer is a protocol, a paired dataset and a pre-registration with a timestamp.', zh: '本站所有題目中最契合的一個。一個取自參考方法自身再現性的事先登記接受帶、一份選擇性測試、一次有證明的均質分樣、一個認證比較方法，以及不會超過 1 的信賴區間。評分項會問其他隊伍能不能重現這個量測——答案是一份流程、一份配對資料集，以及一份帶時間戳的事先登記。' }],
              [{ en: '**Best Integrated Human Practices**', zh: '**最佳整合人類實踐**' },
               { en: 'Specialization', zh: '專項' },
               { en: 'A Gold medal needs at least one Specialization award, and this one is earned rather than decorative: the study design is shaped by what a regulator would accept, the threshold comes from a national standard, and the gap the project points at — a country that sets a limit and publishes no method — is one you can only find by reading the regulator\'s own documents. **Talk to an inspector, a vendor and a laboratory, and let each change something.**', zh: '金牌需要至少一個專項獎，而這一個是掙來的、不是裝飾：研究設計是由「法規單位會接受什麼」塑形的、門檻來自一份國家標準，而這個專案所指出的缺口——一個訂了限量卻沒有公布方法的國家——只有讀過主管機關自己的文件才找得到。**去和一位稽查人員、一位攤商、一間實驗室談，並讓每一方都改變一件事。**' }],
              [{ en: '**Best New Basic Part**', zh: '**最佳新基礎元件**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The enzyme itself, submitted with the selectivity panel behind it. A part whose documentation includes how badly it responds to the two obvious interferents is more useful to the next team than one that only reports what it detects.', zh: '那個酵素本身，連同背後的選擇性測試一起提交。一個「文件裡包含它對兩個最明顯干擾物反應有多差」的元件，對下一支隊伍比一個只報告自己能偵測什麼的元件有用得多。' }],
              [{ en: 'And the thing that is not an award', zh: '以及那個不是獎項的東西' },
               { en: '—', zh: '—' },
               { en: 'The **paired dataset** itself. Twenty to forty fish, each with a team measurement, an accredited measurement, a stratum and a date, released as a plain table. Nothing like it exists in iGEM, and it is the part of this project that another team could still be using in 2030.', zh: '那份**配對資料集**本身。二十到四十條魚，每一條都有一個團隊量測、一個認證量測、一個分層與一個日期，以純表格釋出。iGEM 裡不存在這樣的東西，而它是這個專案中「另一支隊伍到 2030 年還可能在用」的那一部分。' }]
            ],
            min: 940,
            source: { en: 'Award categories and criteria are from iGEM\'s 2026 Special Awards and Medals pages, recorded in `notes/2027-idea-sources.md`. In 2026 a Gold medal required excellence toward three Special Awards, at least one from each of the two categories, and **high school is always judged as its own section for every award**. Which to select is our judgement, not iGEM\'s advice.', zh: '獎項類別與標準出自 iGEM 2026 年的 Special Awards 與 Medals 頁面，記錄在 `notes/2027-idea-sources.md`。2026 年金牌要求在三個特別獎上展現卓越，兩個類別各至少一個，而且**每一個獎，高中部都是獨立評比的一個組別**。選哪些是我們的判斷，不是 iGEM 的建議。' }
          }) +
          h.note({
            en: 'One structural choice we would make and you might not: **register in Food & Nutrition rather than Diagnostics.** Diagnostics converted three of thirteen in the 2026 High School section and Food & Nutrition one of seventeen, so the arithmetic favours Diagnostics — but Food & Nutrition is the honest description of a fish-freshness study, and the High School village awards are bundled into four large groups anyway, which blunts the advantage. Choose the village that describes the work. The other four ideas are on [Five ideas](#x-ideas); the procedure is on [the 2027 roadmap](#x-roadmap).',
            zh: '有一個結構性的選擇，我們會這樣做而你可能不會：**登記在食品與營養，而不是診斷。**在 2026 年高中部，診斷的轉換是 13 取 3、食品與營養是 17 取 1，所以算術偏向診斷——但「食品與營養」才是一份魚類鮮度研究誠實的描述；而高中部的村獎本來就被併成四個大組，這讓那個優勢被削弱。請選那個能描述你工作的村別。另外四個題目在[五個題目](#x-ideas)；程序在[2027 選題指南](#x-roadmap)。'
          })
      });

      return out;
    }
  };
})(window);
