/* 2027 roadmap — a project-selection guide built from what the thirty 2026 Top 10 wikis actually did.
   Advice is ours. Every example is a team on this site, and links to the page it came from. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['x-roadmap'] = {
    label: { en: '2027 roadmap', zh: '2027 選題指南' },
    title: { en: '2027 roadmap — choosing a project', zh: '2027 選題指南——怎麼選一個專案' },
    render: function (h) {
      var out = '';

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · a planning guide for the 2027 season · our advice, built from 2026 evidence',
          zh: 'GEMS Research · 2027 賽季的規劃指南 · 我們的建議，建立在 2026 年的證據上'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Do not choose the most important problem. ==Choose the most important problem you can produce one honest number about.==',
          zh: '不要選最重要的問題。==選一個你能對它產出一個誠實數字的、最重要的問題。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Every team we read picked a real problem. That is not what separated them. What separated them is whether, nine months in, the project had produced **a measurement whose meaning a stranger could check** — and whether the team had decided in advance what that measurement would have to show. This page turns the thirty 2026 Top 10 wikis into a selection procedure: five gates to put a candidate topic through, six project shapes that worked and what each one costs, a scoring sheet, a season calendar read backwards from the wiki freeze, and the six ways 2026 teams lost time. **It is advice, not a formula.** Three of the five gates are about measurement, because that is where almost every season actually fails.',
          zh: '我們讀過的每一支隊伍都選了一個真實的問題。那不是差別所在。差別在於：九個月之後，這個專案有沒有產出**一個意義能被陌生人檢查的量測**——以及團隊有沒有事先決定那個量測必須呈現什麼。本頁把 2026 年三十個前十名 wiki 轉成一套選題程序：五道讓候選題目通過的關卡、六種有效的專案形狀與各自的代價、一張評分表、一份從 wiki 凍結日往回推的賽季行程，以及 2026 年隊伍失去時間的六種方式。**這是建議，不是公式。**五道關卡裡有三道關於量測，因為幾乎每一季真正失敗的地方都在那裡。'
        }) + '</p>' +
        h.stats([
          { v: '5', l: { en: 'Gates a candidate topic should pass before you commit to it', zh: '在你決定投入之前，候選題目應通過的關卡數' } },
          { v: '3 of 5', l: { en: 'Of those gates that are about measurement, not biology', zh: '其中關於量測、而不是關於生物學的關卡數' } },
          { v: '6', l: { en: 'Project shapes that reached a 2026 Top 10, with their evidence cost', zh: '進入 2026 前十名的專案形狀數，附各自的證據成本' } },
          { v: '2', l: { en: 'Independent things a school-lab project should need — not four', zh: '一個學校實驗室專案應該需要幾件彼此獨立的事成立——不是四件' } },
          { v: '1', l: { en: 'Number you should get measured outside your own lab', zh: '你應該拿到自己實驗室之外去量的數字個數' } },
          { v: '0', l: { en: 'Formulas on this page that will place you in a Top 10', zh: '本頁能保證讓你進前十名的公式數' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'r-use', t: { en: 'How to use this', zh: '怎麼用這一頁' } },
        { id: 'r-gate', t: { en: 'Five gates', zh: '五道關卡' } },
        { id: 'r-shape', t: { en: 'Six shapes', zh: '六種形狀' } },
        { id: 'r-sheet', t: { en: 'Scoring sheet', zh: '評分表' } },
        { id: 'r-cal', t: { en: 'The season, backwards', zh: '倒推整個賽季' } },
        { id: 'r-anti', t: { en: 'Six anti-patterns', zh: '六個反模式' } },
        { id: 'r-write', t: { en: 'Writing the claim', zh: '把主張寫出來' } },
        { id: 'r-ours', t: { en: 'What we would change', zh: '我們會改什麼' } }
      ]);

      /* ---------------- how to use ---------------- */
      out += h.sec({
        id: 'r-use',
        kick: { en: 'Before anything else', zh: '先講清楚' },
        h2: { en: 'This is a filter for topics you already care about, not a generator', zh: '這是一個用來過濾「你已經在意的題目」的篩子，不是題目產生器' },
        body:
          h.cards([
            { chips: [{ t: { en: 'use it for', zh: '適合用來' }, k: 'g' }],
              h: { en: 'Killing three of your four candidate topics', zh: '殺掉你四個候選題目中的三個' },
              p: { en: 'The hardest thing a team does in January is give up a topic somebody loves. Gates are for that: they give you a reason that is not a matter of taste. Run all your candidates through the same five gates in the same meeting, write the answers down, and let the sheet carry the decision.', zh: '一支隊伍在一月最難做的事，是放棄某個人很喜歡的題目。關卡就是為此而設：它給你一個不屬於口味問題的理由。在同一次會議裡把所有候選題目都跑過同樣五道關卡，把答案寫下來，讓這張表去承擔那個決定。' } },
            { chips: [{ t: { en: 'do not use it for', zh: '不適合用來' }, k: 'r' }],
              h: { en: 'Picking a village by its 2026 conversion rate', zh: '依 2026 年的轉換率來挑村別' },
              p: { en: 'The village table on the **Three tiers** page has numerators between 0 and 3. If two topics survive the gates and you genuinely cannot choose, village crowding is a legitimate tiebreaker. As a first filter it is superstition — and a village chosen for arithmetic rather than interest will not survive a nine-month season.', zh: '**三層分析**頁上那張村別表，分子介於 0 到 3 之間。如果有兩個題目都通過了關卡、而你真的無法取捨，村別的擁擠程度是個合理的決勝依據。但把它當成第一道篩子就是迷信——而一個因為算術而不是因為興趣被選上的村別，撐不過九個月的賽季。' } },
            { chips: [{ t: { en: 'the honest caveat', zh: '誠實的保留' }, k: 'a' }],
              h: { en: 'We read winners only', zh: '我們只讀了得名者' },
              p: { en: 'Everything here is distilled from thirty teams that placed. We did not read the 433 that did not, so we cannot tell you which of these practices actually distinguishes a winner from the field, and which is just what everybody does. Treat each gate as a hypothesis with a worked example, not a proven rule.', zh: '這裡的一切都是從三十支有名次的隊伍身上萃取出來的。我們沒有讀另外 433 支沒有名次的隊伍，所以我們無法告訴你這些做法裡哪一個真的把得名者和其他人分開，哪一個只是大家都在做的事。請把每一道關卡當成一個「附帶實例的假設」，而不是一條已被證明的規則。' } }
          ])
      });

      /* ---------------- five gates ---------------- */
      out += h.sec({
        id: 'r-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'Five gates. A topic that fails any one of them will cost you the season', zh: '五道關卡。任何一道沒過的題目，都會讓你損失一整季' },
        lede: {
          en: 'Answer each one in writing, in one sentence, before you order a single primer. If you cannot answer it in a sentence, you do not know the answer.',
          zh: '在你訂購任何一支引子之前，先用一句話把每一道關卡書面回答完。如果你沒辦法用一句話回答，就是你還不知道答案。'
        },
        body:
          h.phases([
            { h: { en: 'Gate 1 — Name the number, and the instrument that will produce it', zh: '關卡一——指名那個數字，以及會產生它的那台儀器' },
              p: { en: 'Not "we will show the enzyme works". A number, with units, and the specific machine or assay that outputs it, and whether you can book that machine.', zh: '不是「我們會證明這個酵素有用」。要一個數字，有單位，有那台具體會輸出它的機器或試驗，以及你訂不訂得到那台機器。' },
              items: [
                { en: '**Why it is gate 1:** the 2026 High School projects that stalled did not stall on cloning. They stalled on the readout. Bioremediation was the second-largest High School village in 2026 and placed nobody — degrading a pollutant is easy to design and expensive to measure.', zh: '**為什麼它是第一關：**2026 年卡住的高中部專案，不是卡在選殖，而是卡在讀值。Bioremediation 是 2026 年高中部第二大的村別，零席次——降解一個污染物很好設計，卻很貴才量得出來。' },
                { en: 'Worked example of passing it: **HKSSC** chose colony-forming units over OD₆₀₀ *and wrote down why* — CFU counts cells that are alive and dividing, where OD can be skewed by precipitate and dead cells — then built the standard curves before running the comparison. The readout decision came before the experiment.', zh: '通過的實例：**HKSSC** 選了菌落形成單位而不是 OD₆₀₀，*而且寫下了理由*——CFU 數的是活著並在分裂的細胞，而 OD 可能被沉澱物與死細胞扭曲——然後在跑比較實驗之前先建好標準曲線。讀值的決定發生在實驗之前。' },
                { en: 'If the honest answer is "we would need an instrument we do not have", that is not a dead topic. It is gate 4.', zh: '如果誠實的答案是「我們會需要一台我們沒有的儀器」，那不代表題目死了。那是第四關的事。' }
              ],
              done: { en: 'One sentence of the form: "By week N we will report X ± Y <units>, measured on <named instrument>, which we can access because <reason>."', zh: '一句這樣的話：「到第 N 週，我們會報告 X ± Y〈單位〉，用〈具名儀器〉測得，而我們取用得到它，因為〈理由〉。」' } },
            { h: { en: 'Gate 2 — Name the control that could make you wrong', zh: '關卡二——指名那個可能讓你是錯的對照' },
              p: { en: 'For the number in gate 1, what is the comparison that would show the effect is not yours? Heat-inactivated enzyme, the substrate swapped, the bacteria left out, the model replaced by sequence length.', zh: '對於第一關的那個數字，什麼樣的比較會顯示那個效應其實不是你造成的？熱去活的酵素、換掉的底物、不放細菌、把模型換成序列長度。' },
              items: [
                { en: 'Worked example: **HangzhouFourteenAP** ran each glycosidase against PBS, against a heat-inactivated preparation, **and against the other linkage type**. That third arm is what makes "strictly specific for α-1,3-glucan" a claim rather than an impression.', zh: '實例：**HangzhouFourteenAP** 讓每個糖苷酶分別對上 PBS、對上熱去活的製備，**以及對上另一種鍵結型別**。正是第三組才讓「嚴格專一於 α-1,3-葡聚糖」成為一個主張，而不是一個印象。' },
                { en: 'In dry lab the control is a baseline. **Lambert-GA\'s PRINCE** reports top-three majority hit 50.8 % against **23.3 % random**, and 45.8 % against 23.8 % on the harder no-homolog subset. Without the random column there is no result.', zh: '在乾式工作裡，對照就是基準。**Lambert-GA 的 PRINCE** 報告前三名多數命中 50.8%，對上**隨機的 23.3%**；在沒有同源物的較難子集上是 45.8% 對 23.8%。少了隨機那一欄，就沒有結果。' },
                { en: 'If you cannot name the control, you cannot be wrong, and a claim that cannot be wrong is not evidence of anything.', zh: '如果你指不出那個對照，你就不可能是錯的；而一個不可能是錯的主張，不構成任何東西的證據。' }
              ],
              done: { en: 'The control is in the same protocol document as the measurement, scheduled in the same week, not added later.', zh: '那個對照和量測寫在同一份實驗流程文件裡，排在同一週，而不是事後補上。' } },
            { h: { en: 'Gate 3 — Count the independent things that must work', zh: '關卡三——數一數有幾件彼此獨立的事必須成立' },
              p: { en: 'Write the chain from sample to answer. Count the links where a failure stops everything downstream. **Two is a project. Four is a proposal.**', zh: '把從樣本到答案的鏈條寫出來。數一數有幾個環節一旦失敗就會讓下游全停。**兩環是一個專案，四環是一份提案。**' },
              items: [
                { en: 'The cost of getting this wrong, from 2026: **GHCIS** designed sample → RPA amplification → toehold switch → enzyme colour on paper. Three of those four links have data; the RPA step appears on their description, hardware and contribution pages but not in the results, so the published evidence runs on **micromolar synthetic trigger RNA**, not on DNA from a water sample. Their own summary says the performance of the complete workflow is not established — and they still placed, because they said so. A team that had not said so would have been caught by a judge.', zh: '弄錯的代價，來自 2026 年：**GHCIS** 設計的是樣本 → RPA 放大 → toehold 開關 → 紙上酵素顯色。四環中有三環有數據；RPA 那一步出現在他們的描述、硬體與貢獻頁，卻沒有出現在結果裡，所以已公開的證據跑在**微莫耳級的合成觸發 RNA** 上，而不是跑在水樣的 DNA 上。他們自己的總結寫明完整流程的表現尚未確立——而他們仍然進了前十名，因為他們把這件事說了出來。如果沒說，就會被評審抓到。' },
                { en: 'The other way to pass: **cut the chain and move the hard link outside.** That is what Lambert-GA did with binder affinity, and Eton-College-UK with its bench work.', zh: '另一種通過方式：**把鏈條切斷，把最難的那一環搬到外面去。**Lambert-GA 對結合親和力就是這樣做的，Eton-College-UK 對它的實驗檯工作也是。' },
                { en: 'If your chain is four links and you keep all four, decide now which two you will have evidence for, and plan to publish the other two as design. That is a legitimate outcome, and it is much better than a surprise in September.', zh: '如果你的鏈條有四環、而你全部要留，那就現在決定哪兩環你會拿到證據，並計畫把另外兩環當成設計公開。那是一個正當的結果，而且遠勝於九月才發現的意外。' }
              ],
              done: { en: 'A one-page diagram of the chain, with each link marked "evidence" or "design", dated in January and revisited monthly.', zh: '一張單頁的鏈條圖，每一環標上「證據」或「設計」，一月簽上日期，之後每月重看一次。' } },
            { h: { en: 'Gate 4 — Name the outsider who will produce one of your numbers', zh: '關卡四——指名那個會替你產出其中一個數字的外部人' },
              p: { en: 'A named lab, service or facility, and the thing you will send them. This is the cheapest credibility available and the most consistently skipped.', zh: '一個具名的實驗室、服務或設施，以及你會送去的那個東西。這是能取得的最便宜的可信度，也是最常被跳過的一項。' },
              items: [
                { en: '**Lambert-GA** sent its $80 vacuum dryer to the University of Alabama at Birmingham, which recovered **38 of 43 compounds within 5 %** of undried controls, and then to Georgia Tech. Both numbers are on the wiki, including the 5 compounds that fell outside.', zh: '**Lambert-GA** 把它 80 美元的真空乾燥器送到阿拉巴馬大學伯明罕分校，對方在 43 個化合物中有 **38 個回收到與未乾燥對照相差 5% 以內**，之後又送到喬治亞理工。兩組數字都在 wiki 上，包含超出範圍的那 5 個。' },
                { en: 'The distinction that matters: **a service you pay to run your sample is an instrument you rented; a lab that can hand back a number you dislike is a check.** Aim for the second. Ask in January — host labs and university contacts need lead time, and an email in August gets nothing.', zh: '關鍵的區別是：**你付錢請人跑你的樣本，那是你租來的儀器；一個有能力回給你「你不喜歡的數字」的實驗室，才是檢驗。**瞄準第二種。一月就去問——接待實驗室與大學的聯繫人需要前置時間，八月寄的信什麼也換不到。' }
              ],
              done: { en: 'A named contact, a named measurement, and a date in the first half of the season.', zh: '一個具名的聯絡人、一個具名的量測，以及一個落在賽季前半的日期。' } },
            { h: { en: 'Gate 5 — Write the negative result you would be willing to publish', zh: '關卡五——把你願意公開的那個負面結果寫出來' },
              p: { en: 'Before you start. In one sentence. If no outcome of your project would read as a disappointment, your project cannot produce evidence.', zh: '在你開始之前。用一句話。如果你的專案不存在任何「讀起來像個失望」的結果，那你的專案就無法產出證據。' },
              items: [
                { en: 'Every one of the thirty 2026 Top 10 wikis publishes something that works against it. **HFI** reported its central engineering idea — stapling two strains to channel a split pathway — as giving only a limited improvement, **not significant** at 24 h. It placed in the Top 10 and won its village group and Best Education.', zh: '2026 年三十個前十名 wiki，每一個都公開了對自己不利的東西。**HFI** 報告自己的核心工程想法——把兩株菌釘在一起以導通拆分的路徑——只帶來有限的提升，在 24 小時**不顯著**。它仍然進了前十名，並拿下自己那一組的村獎與最佳教育獎。' },
                { en: 'Writing it in advance does two things: it tells you whether your measurement can distinguish outcomes at all, and it removes the incentive to quietly redefine success in October.', zh: '事先寫下來有兩個作用：它告訴你你的量測到底能不能區分不同結果，而且它拿掉了「十月悄悄重新定義成功」的誘因。' }
              ],
              done: { en: 'A sentence in your January planning document that you would be content to copy onto the results page in October, unchanged.', zh: '一月的規劃文件裡有一句話，而你願意在十月原封不動地把它貼到結果頁上。' } }
          ]) +
          h.warn({
            en: 'The order matters. Gates 1, 2 and 4 are about measurement; gate 3 is about scope; gate 5 is about honesty. **A topic that passes 3 and 5 but fails 1 is the classic lost season**: a beautiful, well-scoped, honestly-described project with no number in it.',
            zh: '順序是有意義的。第一、二、四關關於量測；第三關關於範圍；第五關關於誠實。**一個通過第三與第五關、卻在第一關失敗的題目，就是最典型的「賽季白費」**：一個漂亮、範圍清楚、描述誠實，但裡面沒有數字的專案。'
          })
      });

      /* ---------------- six shapes ---------------- */
      out += h.sec({
        id: 'r-shape',
        kick: { en: 'Options', zh: '選項' },
        h2: { en: 'Six project shapes that placed in 2026, and what each one costs you', zh: '2026 年有名次的六種專案形狀，以及各自的代價' },
        lede: {
          en: 'Pick a shape before you pick a disease. The shape determines your whole season — what you buy, who you need, and what you will be able to claim.',
          zh: '在選疾病之前先選形狀。形狀決定你整個賽季——你要買什麼、你需要誰，以及你最後能主張什麼。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Shape', zh: '形狀' }, w: '15%' },
              { t: { en: 'What you deliver', zh: '你交付什麼' } },
              { t: { en: 'Evidence cost', zh: '證據成本' } },
              { t: { en: '2026 example', zh: '2026 年的例子' }, w: '18%' }
            ],
            rows: [
              [{ en: '**One enzyme, properly**', zh: '**一個酵素，做好做滿**' },
               { en: 'Clone it, purify it, show activity on a real substrate against two controls, and characterise one condition dependence (pH, temperature, linkage).', zh: '選殖、純化、在真實底物上對兩組對照呈現活性，並特性化一種條件依賴性（pH、溫度、鍵結型別）。' },
               { en: '**Lowest.** One construct, one assay, two controls. The whole thing fits in a school lab with a plate reader. The risk is that it reads as small unless you pick a substrate nobody has tried.', zh: '**最低。**一個構築、一個試驗、兩組對照。整件事在一間有微孔盤讀儀的學校實驗室裡就裝得下。風險是：除非你挑了一個沒人試過的底物，否則它會讀起來很小。' },
               { en: 'HKSSC (paraben esterase) · HangzhouFourteenAP (two glycosidases)', zh: 'HKSSC（對羥基苯甲酸酯酶）· HangzhouFourteenAP（兩個糖苷酶）' }],
              [{ en: '**A logic gate**', zh: '**一個邏輯閘**' },
               { en: 'Two inputs, one output, each input module characterised alone and then the assembled gate shown to fire only on the correct combination.', zh: '兩個輸入、一個輸出，每個輸入模組先單獨特性化，再呈現組裝後的閘只在正確組合下啟動。' },
               { en: '**Medium, and front-loaded.** You need a screen per module, which means a loser to publish, and the six-condition logic table at the end. Dose–response on each input is what turns it from a demo into a sensor.', zh: '**中等，而且集中在前期。**每個模組都要一次篩選，意味著會有一個「輸家」要公開，最後還要那張六條件的邏輯表。每個輸入的劑量反應，才是把它從展示變成感測器的東西。' },
               { en: 'GCGS (Fur–RhlR AND gate in EcN)', zh: 'GCGS（EcN 中的 Fur–RhlR AND 閘）' }],
              [{ en: '**A biosensor with a dose curve**', zh: '**一個帶劑量曲線的生物感測器**' },
               { en: 'A reporter that responds monotonically across a stated concentration range, with the range and the replicate structure published.', zh: '一個在明確濃度範圍內單調反應的報告系統，並公開那個範圍與重複實驗的結構。' },
               { en: '**Medium.** Cheap to run, expensive to do honestly: the gap between "it lit up" and "here is a curve across five matched runs" is most of the season. Detection limit is the trap — state the lowest concentration tested instead.', zh: '**中等。**跑起來便宜，誠實地做很貴：從「它亮了」到「這是五組配對實驗的曲線」之間的距離，就是大半個賽季。偵測極限是陷阱——改成寫出測過的最低濃度。' },
               { en: 'HongKong-JSS (mercury, MerR/pMer)', zh: 'HongKong-JSS（汞，MerR／pMer）' }],
              [{ en: '**Designer plus one wet test**', zh: '**設計器加一次濕式測試**' },
               { en: 'A computational tool that chooses candidates, validated on a held-out split, plus a small number of its picks tested at the bench or by a service.', zh: '一個會挑候選的計算工具，在留出切分上完成驗證，加上少數被它挑中的候選在實驗檯或服務商處被測試。' },
               { en: '**High, but mostly in thinking.** The split has to be homology-controlled or the number is meaningless, and you must publish the random baseline. One confirmed hit from 35 candidates is a real result; zero from 15 is also publishable, as Lambert-GA showed.', zh: '**高，但主要花在思考上。**切分必須做同源性控制，否則數字毫無意義；而且你必須公開隨機基準。35 個候選裡有 1 個確認命中是一個真實結果；15 個裡 0 個也是可以公開的，Lambert-GA 已經示範過。' },
               { en: 'Lambert-GA (PRINCE + minibinders)', zh: 'Lambert-GA（PRINCE ＋ minibinder）' }],
              [{ en: '**Cheap instrument**', zh: '**便宜的儀器**' },
               { en: 'A device that removes a bottleneck other teams also have, with a bill of materials, and a recovery or accuracy test against the commercial equivalent.', zh: '一台能解掉「別人也有」的瓶頸的裝置，附物料清單，以及一次對照商用同類的回收率或準確度測試。' },
               { en: '**Low in money, high in discipline.** The device is easy; the validation is the project. Get it tested somewhere else or it is a photograph of a box.', zh: '**金錢上低、紀律上高。**裝置很好做；驗證才是專案本身。拿去別的地方測，不然它只是一張箱子的照片。' },
               { en: 'Lambert-GA (Vapor-X, $80.07) · GEMS-Taiwan (photometer)', zh: 'Lambert-GA（Vapor-X，80.07 美元）· GEMS-Taiwan（光度計）' }],
              [{ en: '**Move the sensing out of the cell**', zh: '**把感測搬出細胞**' },
               { en: 'Electronics or software decide; biology only executes. Containment and control become engineering problems with known answers.', zh: '由電子元件或軟體做決定，生物只負責執行。圍阻與控制因此變成有已知答案的工程問題。' },
               { en: '**High, and it needs two skill sets.** You are now judged on the hardware and the circuit. The payoff is that the containment objection — the one that kills most environmental-release projects in review — disappears.', zh: '**高，而且需要兩種技能。**你現在會同時被硬體與線路評判。回報是：那個會在審查中殺死大多數環境釋放型專案的圍阻質疑，消失了。' },
               { en: 'GEMS-Taiwan (ReLEAF, after the soil-release design was dropped)', zh: 'GEMS-Taiwan（ReLEAF，在土壤釋放設計被放棄之後）' }]
            ],
            min: 1060,
            source: { en: 'Shapes and costs are our categorisation. Every example links to that team\'s page on this site, where the underlying claims are sourced to the team\'s own wiki.', zh: '形狀與成本是我們的分類。每個例子都對應本站該隊的頁面，而底層主張在那裡都標註了來自該隊自己的 wiki。' }
          }) +
          h.take({ en: 'The combination that won in 2026', zh: '2026 年獲勝的那個組合' }, {
            en: 'Both High School teams at the top of their section combined **two shapes, not one**: Lambert-GA ran a designer with a wet test *and* a cheap instrument, and published a release of each. HongKong-JSS ran a biosensor with a dose curve *and* a reader to put it in. One shape done honestly places you in the field; two shapes, where the second one serves the first, is what the top of the section looked like. **Do not attempt three.**',
            zh: '那兩支站在自己組別最前面的高中部隊伍，都結合了**兩種形狀，不是一種**：Lambert-GA 同時做了「設計器加濕式測試」*與*一台便宜儀器，並各自公開釋出。HongKong-JSS 同時做了「帶劑量曲線的生物感測器」*與*一台可以把它放進去的讀取器。一種形狀做得誠實，可以讓你站上賽場；而兩種形狀、其中第二種為第一種服務，就是那個組別頂端的樣子。**不要嘗試三種。**'
          })
      });

      /* ---------------- scoring sheet ---------------- */
      out += h.sec({
        id: 'r-sheet',
        kick: { en: 'A tool', zh: '一個工具' },
        h2: { en: 'The sheet: score each candidate topic out of 20, in one meeting', zh: '那張表：在一次會議裡，給每個候選題目打出 20 分滿分的分數' },
        lede: {
          en: 'Ten rows, 0–2 each. Copy it onto a whiteboard. The point is not the total; it is that the zeros are visible to everybody at the same time.',
          zh: '十列，每列 0 到 2 分。抄到白板上。重點不是總分，而是那些 0 分同時被所有人看見。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Ask', zh: '問題' } },
              { t: { en: '0 points', zh: '0 分' }, w: '22%' },
              { t: { en: '1 point', zh: '1 分' }, w: '22%' },
              { t: { en: '2 points', zh: '2 分' }, w: '22%' }
            ],
            rows: [
              [{ en: 'Can you name the number, with units?', zh: '你能指名那個數字，並附上單位嗎？' },
               { en: '"We will show it works"', zh: '「我們會證明它有用」' },
               { en: 'A quantity, no instrument named', zh: '有一個量，但沒指名儀器' },
               { en: 'A quantity, an instrument, and access confirmed', zh: '有量、有儀器，而且取用已經確認' }],
              [{ en: 'Is the control in the same protocol?', zh: '對照寫在同一份流程裡嗎？' },
               { en: 'No control identified', zh: '沒有指出對照' },
               { en: 'A control, scheduled later', zh: '有對照，但排在之後' },
               { en: 'Control and measurement in the same run', zh: '對照與量測在同一批次' }],
              [{ en: 'How many independent links must work?', zh: '有幾個彼此獨立的環節必須成立？' },
               { en: 'Four or more', zh: '四個或更多' },
               { en: 'Three', zh: '三個' },
               { en: 'Two', zh: '兩個' }],
              [{ en: 'Will somebody outside measure one number?', zh: '會有外部的人量其中一個數字嗎？' },
               { en: 'No', zh: '不會' },
               { en: 'A paid service will run our sample', zh: '會有付費服務幫我們跑樣本' },
               { en: 'A named lab that can disagree with us', zh: '一個有能力否決我們的具名實驗室' }],
              [{ en: 'Have you written the negative result?', zh: '你把負面結果寫出來了嗎？' },
               { en: 'No outcome would disappoint us', zh: '沒有任何結果會讓我們失望' },
               { en: 'We know what failure looks like', zh: '我們知道失敗長什麼樣子' },
               { en: 'It is written down, and we would publish it', zh: '已經寫下來了，而且我們會公開它' }],
              [{ en: 'Is there a baseline for every model?', zh: '每個模型都有基準嗎？' },
               { en: 'No model, or no baseline', zh: '沒有模型，或沒有基準' },
               { en: 'A literature comparison', zh: '有一個文獻比較' },
               { en: 'A baseline we run ourselves, including a dumb one', zh: '一個我們自己跑的基準，包含一個很笨的基準' }],
              [{ en: 'Who is affected, and have you asked them?', zh: '誰受影響，而你問過他們了嗎？' },
               { en: 'Nobody specific', zh: '沒有具體的人' },
               { en: 'We surveyed the public', zh: '我們做過公眾問卷' },
               { en: 'A named practitioner changed our design', zh: '一位具名的從業者改變了我們的設計' }],
              [{ en: 'Does the biology have to leave containment?', zh: '生物必須離開圍阻嗎？' },
               { en: 'Yes, released into an environment', zh: '是，會被釋放到某個環境中' },
               { en: 'Yes, but inside a device', zh: '是，但在一個裝置內部' },
               { en: 'No — it stays in a reactor or a tube', zh: '不必——它留在反應器或試管裡' }],
              [{ en: 'Can one person explain the whole project?', zh: '有一個人能解釋整個專案嗎？' },
               { en: 'Only in parts, by different people', zh: '只能分段，由不同的人講' },
               { en: 'The lead can', zh: '負責人可以' },
               { en: 'Any member can, including the limits', zh: '任何成員都可以，連限制一起' }],
              [{ en: 'Will anything survive the season?', zh: '有東西會在賽季之後留下來嗎？' },
               { en: 'A wiki', zh: '一個 wiki' },
               { en: 'Parts in the Registry', zh: '在 Registry 裡的元件' },
               { en: 'A tool, dataset or device another team can run', zh: '一個別的團隊跑得起來的工具、資料集或裝置' }]
            ],
            min: 980,
            source: { en: 'Our sheet, built from the thirty 2026 Top 10 wikis. The scoring is a device for making disagreement visible, not a measurement — do not report a total to anybody outside your team.', zh: '這是我們的表，依 2026 年三十個前十名 wiki 建立。這套計分是讓分歧浮現的工具，不是一個量測——不要把總分報給團隊以外的任何人。' }
          }) +
          h.note({
            en: 'How to read a total: **16 or more** and your problem is execution, not selection. **11 to 15** is normal in January; the zeros tell you what to fix in February. **10 or less** and the topic is a proposal — either shrink it until gate 3 passes, or move the hard link outside until gate 4 does. A topic with a zero in the first five rows should not be chosen no matter how high the total is.',
            zh: '怎麼讀總分：**16 分以上**，你的問題是執行，不是選題。**11 到 15 分**在一月是正常的；那些 0 分告訴你二月該修什麼。**10 分或更低**，這個題目還只是一份提案——要嘛把它縮小到第三關能過，要嘛把最難的那一環搬到外面去，直到第四關能過。而只要前五列裡有任何一個 0 分，不管總分多高，都不應該選這個題目。'
          })
      });

      /* ---------------- the season, backwards ---------------- */
      out += h.sec({
        id: 'r-cal',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'The season read backwards from the wiki freeze', zh: '從 wiki 凍結日往回推的賽季' },
        lede: {
          en: 'Counted in weeks before the freeze rather than in calendar months, because the 2027 dates are not ours to state. Check the official calendar for the real ones.',
          zh: '以「凍結日前幾週」計算，而不是用日曆月份，因為 2027 年的日期不是我們能宣告的。真正的日期請查官方行程。'
        },
        body:
          h.timeline([
            { h: { en: 'Choosing', zh: '選題' }, range: { en: '~40 to ~34 weeks before the freeze', zh: '凍結日前約 40 到 34 週' },
              d: { en: 'The most valuable weeks of the season, and the ones most often spent reading papers instead of deciding.', zh: '整季最有價值的幾週，也最常被拿去讀論文而不是做決定。' },
              items: [
                { y: { en: 'W-40', zh: '第-40 週' }, t: { en: 'Four candidate topics, on paper', zh: '四個候選題目，寫在紙上' },
                  d: { en: 'One paragraph each: the problem, who has it, the proposed intervention. No literature review yet.', zh: '各一段：問題是什麼、誰有這個問題、提議的干預方式。此時還不做文獻回顧。' } },
                { y: { en: 'W-38', zh: '第-38 週' }, t: { en: 'Run all four through the five gates in one meeting', zh: '在一次會議裡把四個都跑過五道關卡' }, hi: true,
                  d: { en: 'Written answers, same room, same day. Kill two.', zh: '書面回答、同一個房間、同一天。殺掉兩個。' },
                  c: { en: 'The hard part is social, not scientific.', zh: '困難的部分是人情，不是科學。' } },
                { y: { en: 'W-36', zh: '第-36 週' }, t: { en: 'Write the first contact emails', zh: '寫出第一批聯絡信' },
                  d: { en: 'Host labs, practitioners, measurement services. For both surviving topics, before you choose between them — the replies will choose for you.', zh: '接待實驗室、從業者、量測服務。兩個存活的題目都寫，在你還沒做選擇之前——那些回信會替你選。' } },
                { y: { en: 'W-34', zh: '第-34 週' }, t: { en: 'Commit, and write the negative result', zh: '定案，並把負面結果寫下來' }, hi: true,
                  d: { en: 'One topic. One sentence naming the outcome you would publish and dislike. Date it and keep it.', zh: '一個題目。一句話，指名那個你會公開、而你不喜歡的結果。簽上日期並留著。' } }
              ] },
            { h: { en: 'Building the readout', zh: '建立讀值' }, range: { en: '~33 to ~22 weeks before', zh: '凍結日前約 33 到 22 週' },
              d: { en: 'The counter-intuitive part: the measurement comes before the thing being measured.', zh: '反直覺的部分：量測要先於被量測的對象。' },
              items: [
                { y: { en: 'W-33', zh: '第-33 週' }, t: { en: 'Cloning starts, and so does assay development', zh: '選殖開始，量測開發也同時開始' },
                  d: { en: 'In parallel, not in sequence. Standard curves, calibration, working range, replicate structure.', zh: '並行，不是依序。標準曲線、校正、工作範圍、重複實驗結構。' },
                  c: { en: 'HKSSC built CFU standard curves before the MIC comparison; GEMS-Taiwan calibrated a photometer against a commercial instrument and found where the commercial one saturates.', zh: 'HKSSC 在做 MIC 比較之前先建好 CFU 標準曲線；GEMS-Taiwan 把自製光度計對照商用儀器校正，並找出商用那台在哪裡飽和。' } },
                { y: { en: 'W-28', zh: '第-28 週' }, t: { en: 'First real measurement, with its control', zh: '第一次真實量測，連對照一起' }, hi: true,
                  d: { en: 'Even if the construct is not final. You are testing the measurement, not the biology.', zh: '即使構築還沒定版。你此刻測的是量測本身，不是生物。' } },
                { y: { en: 'W-24', zh: '第-24 週' }, t: { en: 'Send the first sample outside', zh: '把第一個樣本送到外面去' },
                  d: { en: 'Deliberately early, so there is time to act on an answer you did not want. Lambert-GA\'s round 1 produced no binders at this stage and the season still finished with one.', zh: '刻意提早，好讓你還有時間對一個「你不想要的答案」做反應。Lambert-GA 的第一輪在這個階段沒有做出任何結合子，而那一季最後仍然拿到了一個。' } },
                { y: { en: 'W-22', zh: '第-22 週' }, t: { en: 'Decide which links get evidence', zh: '決定哪些環節會拿到證據' }, hi: true,
                  d: { en: 'Mark the chain diagram again. Anything still unmarked at this point will be published as design — plan the sentence now, not in October.', zh: '再標一次鏈條圖。此刻仍然沒標記的環節，都會以「設計」的形式公開——現在就把那句話想好，不要留到十月。' } }
              ] },
            { h: { en: 'Producing results', zh: '產出結果' }, range: { en: '~21 to ~8 weeks before', zh: '凍結日前約 21 到 8 週' },
              d: { en: 'The part every team plans for, and the shortest part of the season.', zh: '每支隊伍都會為它做計畫的部分，也是整季最短的部分。' },
              items: [
                { y: { en: 'W-20', zh: '第-20 週' }, t: { en: 'The screen with a loser in it', zh: '那個會產出「輸家」的篩選' },
                  d: { en: 'Compare the real options against each other — two promoters, four tags, three substrates — and publish the one that lost. GCGS\'s promoter and SsrA-tag screens are the model.', zh: '把真實的選項互相比較——兩個啟動子、四種標籤、三種底物——並公開輸掉的那一個。GCGS 的啟動子與 SsrA 標籤篩選就是範本。' } },
                { y: { en: 'W-14', zh: '第-14 週' }, t: { en: 'Dose–response, or the equivalent', zh: '劑量反應，或與之等價的東西' }, hi: true,
                  d: { en: 'The step that turns a demonstration into a characterisation. Five matched runs beats fifteen unmatched ones.', zh: '把一個展示變成一個特性化的那一步。五組配對的實驗勝過十五組不配對的。' } },
                { y: { en: 'W-10', zh: '第-10 週' }, t: { en: 'Freeze the dataset', zh: '凍結資料集' },
                  d: { en: 'Everything measured after this point goes in as an addition, not as a revision of what the project claims.', zh: '這個時間點之後測到的東西，都以「補充」的形式加入，而不是去修改專案主張的內容。' } },
                { y: { en: 'W-8', zh: '第-8 週' }, t: { en: 'Release the tool, part or device', zh: '釋出工具、元件或裝置' },
                  d: { en: 'Registry submissions, repository, bill of materials, licence. Eight weeks out, because a release needs somebody outside to try it.', zh: 'Registry 繳交、程式倉庫、物料清單、授權。提前八週，因為一次釋出需要外部的人去試用它。' } }
              ] },
            { h: { en: 'Writing', zh: '書寫' }, range: { en: '~8 weeks before, to the freeze', zh: '凍結日前約 8 週，到凍結日' },
              d: { en: 'Where seasons are lost that were not lost in the lab.', zh: '那些在實驗室裡沒輸掉的賽季，是在這裡輸掉的。' },
              items: [
                { y: { en: 'W-8', zh: '第-8 週' }, t: { en: 'Write the results page first', zh: '先寫結果頁' }, hi: true,
                  d: { en: 'Before the description, before the homepage. Every other page is written to support what the results page can actually say.', zh: '在描述頁之前、在首頁之前。其他每一頁都是為了支撐結果頁真正說得出口的內容而寫的。' } },
                { y: { en: 'W-5', zh: '第-5 週' }, t: { en: 'Scope every claim inline', zh: '為每個主張就地標註範圍' },
                  d: { en: 'Walk the results page sentence by sentence and add the clause that says what each one is not evidence for.', zh: '一句一句走過結果頁，為每一句加上「它不構成什麼的證據」那個子句。' },
                  c: { en: 'A reader who stops at any single sentence must not have been misled.', zh: '任何在單一句話處停下的讀者，都不能被誤導。' } },
                { y: { en: 'W-3', zh: '第-3 週' }, t: { en: 'Hand the wiki to somebody who was not on the team', zh: '把 wiki 交給一個不在團隊裡的人' },
                  d: { en: 'Ask them one question: which claims do you think we proved? Every answer that is too generous is a sentence to rewrite.', zh: '只問他們一個問題：你覺得我們證明了哪些主張？每一個「太寬厚」的答案，都是一句該重寫的話。' } },
                { y: { en: 'W-1', zh: '第-1 週' }, t: { en: 'Check the deliverables, not the prose', zh: '檢查交付項目，不是文章' },
                  d: { en: 'Forms, attributions, safety, parts, licence, the repository link. These are judged and they are the cheapest marks in the competition.', zh: '表單、致謝、安全、元件、授權、倉庫連結。這些都會被評判，而且是整個競賽裡最便宜的分數。' } }
              ] }
          ]) +
          h.note({
            en: 'The two deliberate inversions in this calendar are the whole point: **the assay is built before the construct is final**, and **the results page is written before the description page**. Both exist because the common failure is a team that spends thirty weeks producing material and eight weeks discovering it cannot say anything about it.',
            zh: '這份行程裡刻意安排的兩個倒序就是全部重點：**量測在構築定版之前就先建好**，而**結果頁在描述頁之前就先寫**。這兩件事之所以存在，是因為最常見的失敗，就是一支隊伍花三十週產出材料，再用八週發現自己對它什麼也說不出來。'
          })
      });

      /* ---------------- anti-patterns ---------------- */
      out += h.sec({
        id: 'r-anti',
        kick: { en: 'Warnings', zh: '警告' },
        h2: { en: 'Six ways 2026 teams lost time, each visible on a wiki that still placed', zh: '2026 年隊伍失去時間的六種方式，每一種都看得見，而那些隊伍仍然有名次' },
        lede: {
          en: 'These are not criticisms. They are published, which is why we can learn from them — and every team named here finished in a Top 10.',
          zh: '這些不是批評。它們是被公開的，所以我們才學得到——而且這裡被指名的每一支隊伍都進了前十名。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: '1', zh: '1' }, k: 'r' }],
              h: { en: 'The readout decided last', zh: '最後才決定讀值' },
              p: { en: 'If the assay is chosen after the material exists, the material decides what you can claim. The fix is in the calendar above: assay development runs in parallel with cloning from week one, and the standard curve exists before the comparison.', zh: '如果試驗是在材料做出來之後才挑的，那就是材料在決定你能主張什麼。解法在上面的行程裡：量測開發從第一週就與選殖並行，而標準曲線要在比較實驗之前就存在。' },
              foot: { en: 'Positive example: HKSSC, who wrote down why CFU beats OD₆₀₀ before using it.', zh: '正面例子：HKSSC，在使用之前就寫下了為什麼 CFU 勝過 OD₆₀₀。' } },
            { chips: [{ t: { en: '2', zh: '2' }, k: 'r' }],
              h: { en: 'A four-link chain kept to the end', zh: '一條四環鏈條撐到最後' },
              p: { en: 'Each link needs its own validation, and the season ends with the middle link untested. **GHCIS** published a paper test whose amplification step never appears in the results, and said so in their summary. They placed because they were explicit. The cheaper route is to notice in January.', zh: '每一環都需要自己的驗證，而季末時中間那一環還沒測過。**GHCIS** 公開了一個紙上測試，而它的放大步驟從未出現在結果裡，他們也在總結裡說了。他們之所以有名次，是因為他們說得明確。更便宜的路線是一月就注意到。' },
              foot: { en: 'Gate 3. Two links, or move the hard one outside.', zh: '第三關。留兩環，或把最難的那一環搬到外面。' } },
            { chips: [{ t: { en: '3', zh: '3' }, k: 'r' }],
              h: { en: 'The tag, promoter or variant screen run too late to act on', zh: '標籤、啟動子或變異體篩選跑得太晚、來不及反應' },
              p: { en: '**GCGS** fused four SsrA degradation tags to RhlR; leakage fell, and most variants lost induction entirely. The fix was somebody else\'s part — an enhanced promoter from TokyoTech 2016 — and it worked. That rescue needed weeks that a late screen does not leave you.', zh: '**GCGS** 把四種 SsrA 降解標籤接到 RhlR 上；洩漏下降了，但大多數變異體完全失去誘導。解法來自別人的元件——TokyoTech 2016 的強化啟動子——而且成功了。那次補救需要幾週時間，而一次太晚的篩選不會留給你。' },
              foot: { en: 'Schedule the screen that can fail in the first half of the season.', zh: '把「有可能失敗的那次篩選」排在賽季前半。' } },
            { chips: [{ t: { en: '4', zh: '4' }, k: 'r' }],
              h: { en: 'The central idea measured only once, at the end', zh: '核心想法只在最後被量了一次' },
              p: { en: '**HFI**\'s whole design rested on SpyTag–SpyCatcher coupling improving a split pathway. The comparison came back as a limited improvement, not significant at 24 h, and the intermediates were never quantified for lack of time. If the coupling comparison had run in week 20 instead, there would have been time to change the ratio, the display system or the claim.', zh: '**HFI** 整個設計都建立在「SpyTag–SpyCatcher 偶合能改善拆分路徑」上。那個比較回來的結果是有限的提升、在 24 小時不顯著，而中間產物因為時間不夠從未定量。如果那次偶合比較是在第 20 週跑的，就還有時間去改比例、改展示系統，或改主張。' },
              foot: { en: 'Measure the load-bearing claim first, not last.', zh: '先量那個承重的主張，不要最後才量。' } },
            { chips: [{ t: { en: '5', zh: '5' }, k: 'a' }],
              h: { en: 'Two sections of the wiki that disagree', zh: 'wiki 裡有兩節互相矛盾' },
              p: { en: 'On one 2026 wiki the results section describes a test in artificial lung fluid while the discussion says the same test "has not been fully completed". A reader cannot tell which is current, so the safe reading is the cautious one — and a judge will read it that way too. This costs nothing to prevent: one person reads the whole results page end to end in the last fortnight.', zh: '在 2026 年的某個 wiki 上，結果一節描述了一項人工肺液中的測試，而討論一節卻說同一項測試「尚未完全完成」。讀者無法判斷哪一個是現況，所以安全的讀法是較保守的那一個——評審也會這樣讀。預防這件事不花任何成本：最後兩週讓一個人把整個結果頁從頭到尾讀一遍。' },
              foot: { en: 'One reader, one pass, whole page. Not section by section.', zh: '一個讀者、一次通讀、整頁。不要分節讀。' } },
            { chips: [{ t: { en: '6', zh: '6' }, k: 'a' }],
              h: { en: 'Illustration mistaken for evidence', zh: '把插圖當成證據' },
              p: { en: 'Rendered animations, burden maps and 3-D models make a wiki look finished, and none of them is a measurement. They are worth building — several 2026 Top 10 wikis use them well — but the results page has to be able to stand with every figure removed. The test: delete every illustration and read what is left.', zh: '算繪動畫、疾病負擔地圖與 3D 模型會讓一個 wiki 看起來完成了，但它們都不是量測。它們值得做——2026 年有好幾個前十名 wiki 用得很好——但結果頁必須在所有圖都被拿掉之後還站得住。測試方法：刪掉所有插圖，讀剩下的東西。' },
              foot: { en: 'Our judgement, applied to our own pages first.', zh: '這是我們的判斷，而且我們先用在自己的頁面上。' } }
          ])
      });

      /* ---------------- writing the claim ---------------- */
      out += h.sec({
        id: 'r-write',
        kick: { en: 'Craft', zh: '手藝' },
        h2: { en: 'The sentence pattern, and why it is worth a whole section', zh: '那個句型，以及為什麼它值得單獨一節' },
        lede: {
          en: 'The single most portable practice in the 2026 cohort costs one clause and can be applied to a page you have already written.',
          zh: '2026 這一批隊伍中最容易搬運的做法，成本是一個子句，而且可以套用在你已經寫好的頁面上。'
        },
        body:
          h.p({
            en: 'The pattern: **state what you did, then state what it is not evidence for, in the same sentence.** Not in a limitations section at the bottom of the page — that is read by a judge and nobody else. In the sentence, where it is read by everyone who reads the claim, including the person who cites you next year.',
            zh: '句型是：**先說你做了什麼，然後在同一句話裡說它不構成什麼的證據。**不要放在頁面底部的限制一節——那只有評審會讀。要放在句子裡，那裡每個讀到主張的人都會讀到，包括明年引用你的那個人。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'What you want to say', zh: '你想說的' }, w: '26%' },
              { t: { en: 'How a 2026 Top 10 team said it', zh: '2026 年前十名隊伍怎麼說' } },
              { t: { en: 'Who', zh: '誰' }, w: '16%' }
            ],
            rows: [
              [{ en: 'Our sensor detects 1 ppb', zh: '我們的感測器能偵測到 1 ppb' },
               { en: '"**1 ppb is the lowest concentration tested, not a validated detection limit.**"', zh: '「**1 ppb 是測過的最低濃度，不是經驗證的偵測極限。**」' },
               { en: 'HongKong-JSS', zh: 'HongKong-JSS' }],
              [{ en: 'Our predictor predicts cleavage rates', zh: '我們的預測器能預測切割速率' },
               { en: '"Predictor scores rise with measured MMP-9 rates (ρ = 0.70), **but on only 11 peptides: a positive association, not proof of rate prediction.**"', zh: '「預測分數隨實測 MMP-9 速率上升（ρ = 0.70），**但只有 11 條肽：一個正相關，不是速率預測的證明。**」' },
               { en: 'Eton-College-UK', zh: 'Eton-College-UK' }],
              [{ en: 'Our strain is radiation resistant', zh: '我們的菌株具有抗輻射性' },
               { en: '"Genetic integration and radiation-testing **activities** should be distinguished from a **demonstrated increase in resistance**."', zh: '「基因整合與輻射測試**活動**，應與**已證明的抗性提升**區分開來。」' },
               { en: 'KAUST-KSA', zh: 'KAUST-KSA' }],
              [{ en: 'Our enzyme degrades the pathogen\'s biofilm', zh: '我們的酵素能降解病原體的生物膜' },
               { en: 'Activity was measured on purified substrate in a cell-free assay only, because safety rules prevented work with the live pathogen — and **substrate-level data cannot predict real biofilm degradation**.', zh: '活性只在無細胞試驗中、對純化底物測過，因為安全規定不允許操作活體病原——而**底物層級的數據無法預測真實生物膜的降解**。' },
               { en: 'GCGS', zh: 'GCGS' }],
              [{ en: 'Our colour test works on water samples', zh: '我們的顯色測試可用於水樣' },
               { en: 'The results "**do not yet establish a validated detection limit or the performance of the complete DNA-to-color workflow.**"', zh: '這些結果「**尚未建立經驗證的偵測極限，也尚未建立完整 DNA 到顏色流程的表現。**」' },
               { en: 'GHCIS', zh: 'GHCIS' }],
              [{ en: 'Coupling the strains improves degradation', zh: '把菌株偶合起來能改善降解' },
               { en: 'The improvement was moderate and limited, reported as **not significant** at 24 h; intermediates were not quantified, so only lysine reduction is confirmed, "**rather than direct evidence for complete multi-step degradation flow.**"', zh: '提升是中等而有限的，在 24 小時被報告為**不顯著**；中間產物未定量，所以只能確認離胺酸下降，「**而非完整多步降解通量的直接證據。**」' },
               { en: 'HFI', zh: 'HFI' }]
            ],
            min: 900,
            source: { en: 'All six quoted or closely paraphrased from the teams\' own 2026 wikis; each is sourced on that team\'s page here. The collection is ours. Four of the six are High School teams.', zh: '六句全部引自、或緊貼轉述自各隊自己 2026 年的 wiki；每一句都在本站該隊頁面標註來源。整理成表是我們做的。六句中有四句來自高中部隊伍。' }
          }) +
          h.take({ en: 'The test to run before the freeze', zh: '凍結日之前要跑的測試' }, {
            en: 'Hand your results page to somebody who was not on the team and ask one question: **which claims do you think we proved?** Every answer more generous than what you actually have is a sentence that needs the clause. This costs an afternoon and it is the highest-return hour of the whole season — and unlike almost everything else on this page, it works just as well three weeks before the freeze as it does in January.',
            zh: '把結果頁交給一個不在團隊裡的人，只問一個問題：**你覺得我們證明了哪些主張？**每一個比你實際擁有的更寬厚的答案，都是一句需要加上那個子句的話。這花掉一個下午，卻是整季回報最高的一小時——而且與本頁幾乎所有其他東西不同，它在凍結日前三週和在一月一樣有效。'
          })
      });

      /* ---------------- what we would change ---------------- */
      out += h.sec({
        id: 'r-ours',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would do differently, having read all thirty', zh: '讀完三十個之後，我們自己會改什麼' },
        lede: {
          en: 'Written for our own next season, and published because a recommendation you are not willing to apply to yourself is not worth much.',
          zh: '為我們自己的下一季而寫，並公開出來——因為一個你不願意套用在自己身上的建議，價值不高。'
        },
        body:
          h.ul([
            { en: '**Send something out for measurement in the first half of the season, not the second.** The strongest evidence we found on any 2026 High School wiki was produced by a laboratory with no stake in the result. We would budget for one external measurement the way we budget for reagents, and we would send it early enough that a bad answer is still actionable.', zh: '**在賽季前半、而不是後半，把東西送出去量。**我們在 2026 年任何高中部 wiki 上找到的最強證據，都是由一個與結果毫無利害關係的實驗室產出的。我們會把一次外部量測像試劑一樣列入預算，而且會送得夠早，讓一個壞答案仍然來得及處理。' },
            { en: '**Put a random baseline next to every ranking we publish.** Any score, prediction or ordering on our wiki should sit beside the dumbest comparison it ought to beat. Lambert-GA\'s 50.8 % is only meaningful because 23.3 % is printed next to it.', zh: '**在我們公開的每一個排序旁邊放一個隨機基準。**我們 wiki 上任何分數、預測或排序，旁邊都該擺著它理當打敗的那個最笨的比較。Lambert-GA 的 50.8% 之所以有意義，只因為 23.3% 就印在它旁邊。' },
            { en: '**Write the results page in week 8 before the freeze, and the description page after it.** Every season we have written them in the other order, and every season the description page has promised something the results page then has to carry.', zh: '**在凍結日前第 8 週寫結果頁，描述頁放在它之後寫。**過去每一季我們都用相反的順序寫，而每一季描述頁都承諾了某個之後結果頁必須扛起來的東西。' },
            { en: '**Keep the chain to two links, and say so out loud in January.** We know from our own 2026 project that moving the sensing out of the cell removed the containment objection; what it did not remove is the number of things that have to work at once. A project with an AIoT model, an optogenetic circuit, a secreted enzyme and a perfusion reactor has four links, and we should have chosen two of them to carry evidence and planned the other two as design from the start.', zh: '**把鏈條控制在兩環，而且一月就大聲說出來。**我們從自己 2026 年的專案知道，把感測搬出細胞解掉了圍阻的質疑；但它沒有解掉的，是「同時必須成立的事情數量」。一個同時有 AIoT 模型、光遺傳線路、分泌酵素與灌流反應器的專案有四環，而我們本來就應該挑出其中兩環來承載證據，並從一開始就把另外兩環規劃成設計。' },
            { en: '**Score the candidate topics on paper, in one meeting, with the sheet above.** We chose our 2026 topic the usual way — enthusiasm, then a literature review that confirmed it. The gates would not have changed the topic, but they would have changed the order we did things in, which is where the season actually went.', zh: '**用上面那張表，在一次會議裡把候選題目打在紙上。**我們 2026 年的題目是用常見的方式選的——先有熱情，再做一次確認它的文獻回顧。那些關卡不會改變我們的題目，但會改變我們做事的順序，而那正是整季真正花掉的地方。' },
            { en: '**Read the High School wikis for writing and the Overgraduate wikis for scope.** This was the surprise of the whole study. We expected the senior sections to teach us how to write a result. The section that taught us most was our own.', zh: '**要學書寫就讀高中部的 wiki，要學範圍就讀研究生部的 wiki。**這是整份研究最意外的地方。我們原本以為高年級的組別會教我們怎麼寫一個結果。結果教我們最多的，是我們自己的組別。' }
          ]) +
          h.warn({
            en: 'And the recommendation we are least comfortable with: **this page tells you how to make a project legible to a jury.** That is not the same as telling you how to do good science, and the two come apart in at least one place — the shapes that score well here are the ones that fit inside a nine-month season with a school budget, which is a constraint on the problems worth working on, not a feature of them. If you have a reason to spend a season on something that will not finish, that is a legitimate choice, and no scoring sheet should talk you out of it. Just make it with your eyes open.',
            zh: '以及我們最不自在的那一條建議：**本頁教你的是怎麼讓一個專案在評審眼中變得可讀。**那和教你怎麼做好的科學不是同一件事，而這兩者至少在一個地方會分岔——在這裡得分高的形狀，都是能裝進九個月賽季與學校預算裡的那些，而那是對「值得做的問題」的一種限制，不是那些問題的特質。如果你有理由把一季花在一件不會完成的事情上，那是一個正當的選擇，不該有任何評分表把你勸退。只要張開眼睛做這個決定就好。'
          })
      });

      return out;
    }
  };
})(window);
