/* ============================================================
   next.js — "Take it to 2027".

   Everything on this page is ours: a method for turning the ten
   workflows into an idea screen, an archetype choice, a gate sheet
   and a calendar for a 2027 project. The teams are cited as
   evidence for each rule, never as endorsing it.

   What is deliberately NOT on this page: our actual 2027 topic
   shortlist. This repository is public and we are a competing
   team. The screen is here; the candidates are not.
   ============================================================ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages.next = {
    label: { en: 'Bench gate sheet', zh: '實驗關卡表' },
    title: { en: 'The bench gate sheet', zh: '實驗關卡表' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({ en: 'TRANSFER · FROM THESE TEN TO OUR BENCH', zh: '轉用 · 從這十隊到我們的實驗台' })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Once a topic is chosen, the next decision is ==what counts as a result== — and that is settled before the experiment runs, or not at all.',
          zh: '題目定下來之後，下一個決定是==什麼才算一個結果==——而這件事要嘛在實驗跑之前就決定，要嘛永遠不會被決定。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Three things, all drawn from the ten Undergraduate workflows: what crosses the gap from an Undergraduate lab to a High School one and what does not, six cheap questions to ask of an idea before anyone books bench time, and **a six-column sheet filled in for every planned result before the experiment runs**. Every rule names the team it came from, so you can go and disagree with the evidence rather than with us.',
          zh: '三件事，全部來自大學部那十條工作流程：從大學部實驗室到高中實驗室，什麼過得來、什麼過不來；在有人預約實驗台之前要先問一個點子的六個便宜問題；以及**每個預定結果在實驗開跑前都要填好的六欄表格**。每一條規則都註明它來自哪一隊，你可以直接去跟證據吵，而不是跟我們吵。'
        }) + '</p>' +
        '<div class="herometa">' + h.chips([
          { t: { en: 'What transfers', zh: '什麼帶得走' }, k: 'b' },
          { t: { en: 'An idea screen', zh: '點子篩選' }, k: 'v' },
          { t: { en: 'A six-column gate sheet', zh: '六欄關卡表' }, k: 'g' },
          { t: { en: 'A failure budget', zh: '失敗額度' }, k: 'a' },
          { t: { en: 'Scored on our own 2026 project', zh: '拿我們自己的 2026 專案打分' }, k: 'r' }
        ]) + '</div>' +
        '<p class="small" style="margin-top:16px">' + h.md({
          en: 'Written by **GEMS Research (Taiwan)**, a High School team, reading Undergraduate work. The first section is about what that difference costs.',
          zh: '由**GEMS Research（台灣）**撰寫——一支高中隊伍在讀大學部的作品。第一節談的就是這個差距要付出什麼代價。'
        }) + '</p>' +
        '</div></div>';

      out += h.toc([
        { id: 'nx-rule', t: { en: 'What transfers', zh: '什麼帶得走' } },
        { id: 'nx-screen', t: { en: 'The idea screen', zh: '點子篩選' } },
        { id: 'nx-gate', t: { en: 'The gate sheet', zh: '關卡表' } },
        { id: 'nx-fail', t: { en: 'The failure budget', zh: '失敗額度' } },
        { id: 'nx-work', t: { en: 'A worked example', zh: '完整範例' } },
        { id: 'nx-off', t: { en: 'What is not here', zh: '沒放上來的' } }
      ]);

      out += '<div class="wrap" style="padding-top:26px">' + h.note({
        en: '**This page and the [2027 roadmap](#x-roadmap) answer different questions.** The roadmap reads all thirty Top 10 wikis and helps you *choose a topic*: five gates, six project shapes, a scoring sheet and a season calendar. This page reads only the ten Undergraduate workflows and picks up afterwards, at the bench: once the topic exists, what counts as a result, and who writes that down before the plate goes in the incubator.',
        zh: '**這一頁和[2027 選題指南](#x-roadmap)回答的是不同的問題。** 選題指南讀的是全部三十個前十名 wiki，幫你*選出題目*：五道關卡、六種專案形狀、一張計分表與一份賽季行事曆。這一頁只讀大學部那十條工作流程，接在它後面、從實驗台開始：題目已經存在之後，什麼才算一個結果，以及誰要在培養盤進培養箱之前把它寫下來。'
      }) + '</div>';

      /* ---------------- what transfers ---------------- */
      out += h.sec({
        id: 'nx-rule',
        kick: { en: 'The transfer rule', zh: '轉用規則' },
        h2: { en: 'Three things cross the gap, two things cost more than they look, one thing does not cross at all', zh: '有三件事過得來、兩件事比看起來貴、一件事根本過不來' },
        lede: {
          en: 'A High School team does not have 960,518 cells of public single-cell data to mine, or a cluster, or a supervisor on every bench. It does have the same year and the same judging rubric.',
          zh: '一支高中隊伍沒有 960,518 顆細胞的公開單細胞資料可以挖、沒有運算叢集、也沒辦法每張實驗桌旁邊都站一位指導者。但它有一樣長的一年，和一樣的評審標準。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'crosses free', zh: '免費帶得走' }, k: 'g' }],
              h: { en: 'Discipline about measurement', zh: '量測上的紀律' },
              p: { en: 'Rung 3 of the measurement ladder — control in the same plate, same run, same day — costs nothing and is the single largest quality difference between the ten wikis and an average one. Nothing about it needs a budget.', zh: '量測階梯第三階——對照放在同一盤、同一批次、同一天——不花錢，而且是這十個 wiki 和普通 wiki 之間最大的品質差距。它完全不需要預算。' },
              foot: { en: 'Evidence: all ten, and it is what separates the top of our ladder from the bottom.', zh: '證據：十隊皆然，也正是我們的階梯上段與下段的分野。' } },
            { chips: [{ t: { en: 'crosses free', zh: '免費帶得走' }, k: 'g' }],
              h: { en: 'Writing the threshold before the data', zh: '在數據之前先寫下門檻' },
              p: { en: 'Princeton set "100 % Plasmidsaurus match" as a gate before anything downstream ran. That is a sentence in a protocol, not a resource.', zh: 'Princeton 在任何下游步驟開始之前，就把「Plasmidsaurus 100% 相符」設成關卡。那是協定裡的一句話，不是一項資源。' },
              foot: { en: 'Evidence: Princeton, LYON, Stanford.', zh: '證據：Princeton、LYON、Stanford。' } },
            { chips: [{ t: { en: 'crosses free', zh: '免費帶得走' }, k: 'g' }],
              h: { en: 'Publishing the failure with its cause', zh: '把失敗連同原因一起登出來' },
              p: { en: 'UOttawa printed a stoichiometrically impossible number and named the calibration artefact behind it. The cost is nerve, not money.', zh: 'UOttawa 把一個化學計量上不可能的數字印了出來，並指名背後的校正偽影。代價是膽量，不是金錢。' },
              foot: { en: 'Evidence: UOttawa, Princeton, UCNZ, LYON.', zh: '證據：UOttawa、Princeton、UCNZ、LYON。' } },
            { chips: [{ t: { en: 'costs more than it looks', zh: '比看起來貴' }, k: 'a' }],
              h: { en: 'The design-and-gate funnel', zh: '設計再篩選的漏斗' },
              p: { en: 'Generating 10,000 candidates is now free. Deciding which 5 to build is not: it needs thresholds somebody can defend, and at least one of them calibrated against a measurement. A funnel without that is a picture of a funnel.', zh: '生成一萬個候選現在是免費的，決定要做哪五個則不是：它需要有人辯護得了的門檻，而且其中至少一個要對著某個量測校正過。沒有這些的漏斗，只是一張漏斗的圖。' },
              foot: { en: 'Evidence: Heidelberg and LYON state both the input and the surviving count; most teams state only one.', zh: '證據：Heidelberg 與 LYON 同時寫出投入數與存活數；多數隊伍只寫其中一個。' } },
            { chips: [{ t: { en: 'costs more than it looks', zh: '比看起來貴' }, k: 'a' }],
              h: { en: 'Building your own instrument', zh: '自己做儀器' },
              p: { en: 'Cornell built an electrospinner because the product does not exist without one. That is the right reason. Building an instrument because it looks like a Hardware medal is six weeks you will want back in September.', zh: 'Cornell 做靜電紡絲機，是因為沒有它就沒有產品——那是對的理由。為了看起來像一面硬體獎而做儀器，等於是九月時你會非常想要回來的六個星期。' },
              foot: { en: 'Evidence: Cornell, UCAS, UCNZ all built hardware the project could not proceed without.', zh: '證據：Cornell、UCAS、UCNZ 做的硬體，都是專案沒有它就走不下去的東西。' } },
            { chips: [{ t: { en: 'does not cross', zh: '過不來' }, k: 'r' }],
              h: { en: 'Mining a dataset that does not exist for your organism', zh: '挖一個你的生物沒有的資料集' },
              p: { en: 'Stanford\'s target screen works because 26 human single-cell cohorts exist and are public. Model-first targeting is the one archetype that is simply unavailable when the atlas for your system has not been built. Checking this takes an afternoon and should happen before the topic is chosen, not after.', zh: 'Stanford 的標靶篩選之所以成立，是因為 26 個人類單細胞資料集存在而且公開。當你的系統沒有人做過圖譜時，「模型先選標靶」這個原型根本就不可用。確認這件事只要一個下午，而且應該在選定題目之前做，不是之後。' },
              foot: { en: 'Evidence: three of the ten use this archetype and all three work on human cells.', zh: '證據：十隊中有三隊用這個原型，而三隊做的都是人類細胞。' } }
          ], 'g3')
      });

      /* ---------------- idea screen ---------------- */
      out += h.sec({
        id: 'nx-screen',
        kick: { en: 'Ideation', zh: '題目發想' },
        h2: { en: 'Six questions, asked in this order, each with a kill rule', zh: '六個問題，照這個順序問，每個都有淘汰規則' },
        lede: {
          en: 'The order matters more than the questions. Every one of them is cheap to answer and the early ones kill ideas that the later ones would have cost months to kill.',
          zh: '順序比問題本身更重要。每一個問題都很便宜就能回答，而前面幾個殺掉的點子，留到後面才殺要花掉好幾個月。'
        },
        body:
          h.phases([
            { h: { en: 'What is the number, and who reads it?', zh: '那個數字是什麼？誰讀它？' },
              p: { en: 'Name the single quantity the project will move, its unit, and the instrument that will read it — in one sentence, before anything else.', zh: '用一句話說出這個專案要移動的那一個量、它的單位，以及要用什麼儀器讀它——在其他事情之前。' },
              items: [
                { en: 'NUS could draw this as a figure: physical and chemical metrics are measurable, biological metrics are not, and that gap *is* the project.', zh: 'NUS 把這件事畫成了一張圖：物理與化學指標量得到、生物指標量不到，而那個缺口*就是*專案本身。' },
                { en: 'If the instrument is "a plate reader we do not have", the idea is not dead — but the first six weeks just became instrument weeks, and that must be in the plan from day one.', zh: '如果儀器是「一台我們沒有的盤讀機」，點子不算死——但前六週就變成儀器週了，而這件事必須從第一天就寫進計畫。' }
              ],
              done: { en: 'One sentence containing a quantity, a unit and a named instrument.', zh: '一句話裡同時有一個量、一個單位、一台指名的儀器。' } },
            { h: { en: 'Does a dataset exist that would change what we build?', zh: '有沒有一個資料集會改變我們要做什麼？' },
              p: { en: 'An afternoon on the public databases, before the topic is fixed. The answer decides whether the model-first archetype is open to you at all.', zh: '在題目定下來之前，花一個下午翻公開資料庫。答案決定「模型先選標靶」這個原型對你到底開不開放。' },
              items: [
                { en: 'Yes, and it is specific to our organism → model-first targeting is available (Stanford, UCAS, UAlberta).', zh: '有，而且專屬於我們的生物 → 可以走模型先選標靶（Stanford、UCAS、UAlberta）。' },
                { en: 'Only for a neighbouring organism → usable, but say so out loud and expect the transfer to be the hard part.', zh: '只有鄰近物種的 → 可以用，但要大聲說出來，而且「轉移」會是最難的部分。' },
                { en: 'No → choose assay-first or process-out instead, and stop looking.', zh: '沒有 → 改選量測優先或製程導向，然後不要再找了。' }
              ],
              done: { en: 'A named database, a named query, and a yes/no written down.', zh: '一個指名的資料庫、一條指名的查詢，以及一個寫下來的是或否。' } },
            { h: { en: 'What is the smallest thing that could kill this, and can we check it this month?', zh: '什麼最小的事就能殺死它？這個月查得掉嗎？' },
              p: { en: 'A transport calculation, a solubility limit, a dose, a growth rate, a price per tonne. One number, from published parameters, before any cloning.', zh: '一次傳輸計算、一個溶解度上限、一個劑量、一個生長速率、一噸多少錢。一個數字，用已發表的參數算，在任何選殖之前。' },
              items: [
                { en: 'UAlberta\'s own transport model later put their diffusion claim in doubt. Better to run that calculation in month one than in month nine.', zh: 'UAlberta 自己的傳輸模型後來對他們的擴散主張打上問號。那個計算在第一個月做，遠勝於第九個月才做。' },
                { en: 'LYON\'s structural model closed the degradation route and the project became a capture project. The pivot was cheap because the model came early.', zh: 'LYON 的結構模型把降解路線關掉，專案轉成捕捉專案。那次轉向之所以便宜，就是因為模型做得早。' }
              ],
              done: { en: 'One calculation, one page, with the assumption that would overturn it named.', zh: '一個計算、一頁長度，並寫明「哪個假設被推翻就全部作廢」。' } },
            { h: { en: 'What would we build in the first four weeks, and what does it control for?', zh: '前四週我們會做出什麼？它控制了什麼？' },
              p: { en: 'Not the full system — the first construct, and the matched negative that makes it readable.', zh: '不是整套系統，而是第一個構建體，以及讓它讀得出來的那個配對陰性對照。' },
              items: [
                { en: 'UCNZ\'s six constructs are a matched set: the difference between (b) and (e) is one secretion tag, which is why a negative result stayed interpretable.', zh: 'UCNZ 的六個構建體是一組對照：(b) 和 (e) 的差別只有一個分泌標籤，所以陰性結果仍然解讀得了。' },
                { en: 'Stanford put match and mismatch triggers in the *same* transfection. Same day, same cells, same operator.', zh: 'Stanford 把配對與錯配的觸發放在*同一次*轉染裡。同一天、同一批細胞、同一個操作者。' }
              ],
              done: { en: 'A construct map and the one-variable difference to its control, drawn.', zh: '一張構建體圖譜，以及它和對照之間那個「只差一個變數」的差異，畫出來。' } },
            { h: { en: 'If every experiment works, what have we given the next team?', zh: '如果每個實驗都成功，我們給了下一支隊伍什麼？' },
              p: { en: 'A part, a protocol with its gates, a dataset, a tool, a measurement other people can reproduce. If the honest answer is "a nice result", the idea is thin.', zh: '一個 part、一套帶關卡的協定、一份資料集、一個工具、一個別人重現得了的量測。如果誠實的答案是「一個漂亮的結果」，這個點子就太薄了。' },
              items: [
                { en: 'Princeton made this the whole project: the deliverable is a binder-design app other teams run.', zh: 'Princeton 把這件事變成了整個專案：交付物是一個別隊可以跑的結合蛋白設計應用。' },
                { en: 'Seven of the ten shipped a named piece of software. It is now close to table stakes rather than a differentiator.', zh: '十隊中有七隊交出了具名軟體。這件事現在接近入場門檻，而不是加分項。' }
              ],
              done: { en: 'A noun, and the name of a team outside ours who would use it.', zh: '一個名詞，以及我們隊伍之外、會用它的某支隊伍的名字。' } },
            { h: { en: 'What are we willing to publish when it does not work?', zh: '如果做不出來，我們願意公開什麼？' },
              p: { en: 'Decide the register now, while nothing has failed yet, because the decision is much harder in September.', zh: '現在就決定好語氣，趁還沒有任何東西失敗——因為到了九月，這個決定會難上許多。' },
              items: [
                { en: 'The four responses we found, worst to best: silent · reported · explained · pivoted. Only the last two give the next team anything.', zh: '我們找到的四種反應，由差到好：不提·有報告·有解釋·有轉向。只有後兩種對下一支隊伍有用。' },
                { en: 'A failure you can explain is a contribution. A failure you can pivot on is a project.', zh: '一個你解釋得了的失敗是一項貢獻；一個你能據以轉向的失敗，就是一個專案。' }
              ],
              done: { en: 'A written sentence in the team charter, agreed in January.', zh: '一句寫進隊伍章程、在一月就取得共識的句子。' } }
          ]) +
          h.fig({
            kind: 'funnel',
            tag: { en: 'OUR SCREEN', zh: '我們的篩選' },
            title: { en: 'What the six questions do to a list of ideas', zh: '六個問題會把一份點子清單變成什麼' },
            sub: { en: 'Illustrative shape, not a measurement: the point is where the attrition happens, which is early and on paper.', zh: '這是示意形狀而非量測：重點在於淘汰發生在哪裡——發生得早，而且發生在紙上。' },
            data: [
              { label: { en: 'Ideas on the board in January', zh: '一月白板上的點子' }, v: 40 },
              { label: { en: 'Survive Q1 — a quantity, a unit, an instrument', zh: '通過 Q1：有量、有單位、有儀器' }, v: 18 },
              { label: { en: 'Survive Q2–Q3 — a dataset and a killing calculation', zh: '通過 Q2–Q3：有資料集、有能殺掉它的計算' }, v: 8 },
              { label: { en: 'Survive Q4 — a first construct with a matched control', zh: '通過 Q4：有第一個構建體與配對對照' }, v: 4 },
              { label: { en: 'Survive Q5–Q6 — a deliverable and a failure plan', zh: '通過 Q5–Q6：有交付物、有失敗計畫' }, v: 2 }
            ],
            caption: {
              en: 'The reason to run the screen on forty ideas rather than three is that questions 1–3 cost about an hour each. Forty ideas is a fortnight of work in January and it replaces a pivot in July.',
              zh: '之所以要拿四十個點子來跑這張篩選、而不是三個，是因為問題一到三每個大約只要一小時。四十個點子等於一月的兩週工作量，而它換掉的是七月的一次大轉向。'
            }
          })
      });

      /* ---------------- archetype ---------------- */
      /* ---------------- gate sheet ---------------- */
      out += h.sec({
        id: 'nx-gate',
        kick: { en: 'Experiment design', zh: '實驗設計' },
        h2: { en: 'One sheet per planned result, filled in before the experiment runs', zh: '每個預定結果一張表，在實驗跑之前就填好' },
        lede: {
          en: 'This is the single practice we would impose on 2027 if we could only impose one. Six columns; the last two are the ones everybody skips.',
          zh: '如果 2027 年只能強制推行一件事，就是這個。六個欄位，而最後兩欄是所有人都會跳過的。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Column', zh: '欄位' }, w: '16%' },
              { t: { en: 'What goes in it', zh: '裡面填什麼' }, w: '30%' },
              { t: { en: 'A filled-in example from the ten', zh: '十隊中的實際範例' } }
            ],
            rows: [
              [{ en: '**1 · The claim**', zh: '**一 · 主張**' },
               { en: 'One sentence that could be false. Not a topic, not an aim — a claim.', zh: '一句有可能是假的話。不是主題、不是目標，是主張。' },
               { en: '"A fully sortase-modified M13 coat infects worse than a hybrid coat." (Princeton)', zh: '「完全被 sortase 修飾的 M13 外殼，感染力比混合外殼差。」（Princeton）' }],
              [{ en: '**2 · The reading**', zh: '**二 · 讀數**' },
               { en: 'The quantity, the unit, the instrument and the gate inside the instrument.', zh: '量、單位、儀器，以及儀器內部的那道閘。' },
               { en: 'Activation read as EGFP geometric mean *inside the top-5 % mCherry gate*, not across all events. (Stanford)', zh: '啟動量定義為 EGFP 幾何平均，*且限於 mCherry 前 5% 閘內*，不是全部事件。（Stanford）' }],
              [{ en: '**3 · The control**', zh: '**三 · 對照**' },
               { en: 'The one-variable-different thing, and where it sits in space and time relative to the sample.', zh: '只差一個變數的那個東西，以及它在空間與時間上相對於樣本的位置。' },
               { en: 'Mismatch trigger in the *same transfection* as the matched trigger. (Stanford) · HiSiaP as a lysis control, which then invalidated their own extracellular lanes. (UCNZ)', zh: '錯配觸發與配對觸發放在*同一次轉染*。（Stanford）·用 HiSiaP 當裂解對照，結果反過來推翻了他們自己的胞外結果。（UCNZ）' }],
              [{ en: '**4 · The pass value**', zh: '**四 · 通過值**' },
               { en: 'The number, written now. Not "significant" — the number.', zh: '那個數字，現在就寫下來。不是「有顯著」，是數字。' },
               { en: '100 % whole-plasmid sequence match before anything downstream. (Princeton) · i_pAE threshold applied before any design was looked at. (Heidelberg)', zh: '下游任何事之前，全質體定序必須 100% 相符。（Princeton）·在看任何設計之前就先套用 i_pAE 門檻。（Heidelberg）' }],
              [{ en: '**5 · Status of every number used**', zh: '**五 · 每個用到的數字的狀態**' },
               { en: 'Measured, fitted, or assumed — one word per parameter, in a column of its own.', zh: '量到的、擬合的、假設的——每個參數一個字，自己獨立一欄。' },
               { en: '82 model parameters tabulated with value, unit and source; nuclear entry probability marked as *fitted* at 10.7 %, not assumed. (Stanford)', zh: '82 個模型參數列出數值、單位、出處；進核機率標為*擬合值* 10.7%，不是假設值。（Stanford）' }],
              [{ en: '**6 · What we publish if it fails**', zh: '**六 · 失敗時我們公開什麼**' },
               { en: 'Written before the result exists, because afterwards it is a negotiation.', zh: '在結果出現之前就寫好，因為之後它會變成一場談判。' },
               { en: '4.68 µM of product from 1 µM of substrate is impossible; printed anyway, with the calibration intercept named and the claim downgraded to qualitative. (UOttawa)', zh: '1 µM 受質產出 4.68 µM 產物是不可能的；仍然照登，指名校正截距，並把主張降級為定性。（UOttawa）' }]
            ],
            min: 860,
            source: { en: 'The six columns are ours. Every example is the team\'s own documented practice, linked from their page on this site.', zh: '這六個欄位是我們訂的。每個範例都是該隊自己有記載的做法，可從本站各隊頁面連過去。' }
          }) +
          h.note({
            en: '**Why column 5 matters more than it looks.** A model whose parameters are all "assumed" cannot be wrong, so it also cannot be evidence. Three of the ten label parameter status explicitly, and in all three cases you can tell from the first paragraph of the model page that the team knows which of their numbers are load-bearing.',
            zh: '**為什麼第五欄比看起來重要。** 一個參數全部標「假設」的模型不可能出錯，所以它也不可能成為證據。十隊中有三隊明確標示參數狀態，而這三隊你從模型頁第一段就看得出來：他們知道自己的哪些數字是承重的。'
          })
      });

      /* ---------------- calendar ---------------- */
      /* ---------------- failure budget ---------------- */
      out += h.sec({
        id: 'nx-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Budget for three named failures, and spend the budget', zh: '編列三個具名失敗的額度，而且要把它花掉' },
        lede: {
          en: 'A team that reports no failures has either run no risks or is not telling you. Neither reads well, and the ten wikis all chose the third option.',
          zh: '一支沒有報告任何失敗的隊伍，不是沒冒過險，就是沒告訴你。兩種讀起來都不好看，而這十個 wiki 全都選了第三條路。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'budget line 1', zh: '額度一' }, k: 'b' }],
              h: { en: 'One construct that does not express', zh: '一個表現不出來的構建體' },
              p: { en: 'Expected. What makes it a contribution is the matched set around it — UCNZ could say the difference between the working lane and the failed lane was one secretion tag.', zh: '意料之中。讓它變成貢獻的是周圍那組對照——UCNZ 能明確說出「成功那條和失敗那條只差一個分泌標籤」。' } },
            { chips: [{ t: { en: 'budget line 2', zh: '額度二' }, k: 'g' }],
              h: { en: 'One model that disqualifies our own experiment', zh: '一個把我們自己的實驗判出局的模型' },
              p: { en: 'The strongest single move on the whole site, and three teams made it: UAlberta\'s transport model against their own diffusion assay, UCNZ\'s HiSiaP control against their own secretion lanes, LYON\'s structural model against their own degradation route.', zh: '全站最強的一個動作，而且有三隊做到了：UAlberta 的傳輸模型打自己的擴散試驗、UCNZ 的 HiSiaP 對照打自己的胞外結果、LYON 的結構模型打自己的降解路線。' } },
            { chips: [{ t: { en: 'budget line 3', zh: '額度三' }, k: 'a' }],
              h: { en: 'One number we print although it cannot be true', zh: '一個明知不可能為真、但我們照登的數字' },
              p: { en: 'With the artefact named and the claim downgraded, not deleted. UOttawa did exactly this and it is the most credible paragraph on their wiki.', zh: '連同指名的偽影，把主張降級而不是刪除。UOttawa 正是這麼做的，而那是他們 wiki 上最可信的一段。' } }
            ], 'g3') +
          h.warn({
            en: '**Spending the budget is the hard part.** In September, every one of these three looks like a reason to cut the section. The decision has to be made in January, written into the charter, and defended by whoever is least invested in the result.',
            zh: '**難的是真的把額度花掉。** 到了九月，這三件事每一件看起來都像是「應該把這一節刪掉」的理由。這個決定必須在一月就做好、寫進章程，並且由對結果最沒有感情投資的那個人來守住。'
          })
      });

      /* ---------------- worked example ---------------- */
      out += h.sec({
        id: 'nx-work',
        kick: { en: 'Worked example', zh: '完整範例' },
        h2: { en: 'Running the screen backwards on a project we already know', zh: '拿一個我們已經知道的專案，把篩選倒著跑一次' },
        lede: {
          en: 'To show what a filled sheet looks like without publishing a 2027 candidate, we ran the six questions on our own 2026 project — plant stress mitigation with an ACC-deaminase chassis — which is already public, and scored it honestly.',
          zh: '為了展示一張填好的表長什麼樣、又不洩漏 2027 的候選題目，我們把六個問題拿去跑我們自己 2026 年的專案——以 ACC deaminase 為底盤的植物逆境緩解——它已經是公開的，而且我們誠實打分。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Question', zh: '問題' }, w: '22%' },
              { t: { en: 'Answer, as it actually stood', zh: '實際上的答案' }, w: '44%' },
              { t: { en: 'Verdict', zh: '判定' }, w: '12%' },
              { t: { en: 'What we would change', zh: '我們會改什麼' } }
            ],
            rows: [
              [{ en: 'Q1 · The number and its instrument', zh: 'Q1 · 數字與儀器' },
               { en: 'Enzyme activity in mU/mL by DNPH assay, and chlorophyll a/b by spectrophotometer. Both real, both ours.', zh: 'DNPH 法測得的酵素活性（mU/mL），以及分光光度計測得的葉綠素 a/b。兩者都是真的、都是我們的。' },
               { en: '**Pass**', zh: '**通過**' },
               { en: 'Nothing. Having two independent readings on two different layers of the system was the right call.', zh: '不改。在系統的兩個不同層級上各有一個獨立讀數，這個決定是對的。' }],
              [{ en: 'Q2 · A dataset that changes what we build', zh: 'Q2 · 會改變建構內容的資料集' },
               { en: 'No plant-stress atlas was used to choose the enzyme. The chassis came from the literature, not from a screen.', zh: '沒有用任何植物逆境圖譜來選酵素。底盤來自文獻，不是來自篩選。' },
               { en: '**Fail**', zh: '**未通過**' },
               { en: 'Either run the screen or say in one sentence that the archetype is not model-first. Leaving it unstated reads as an omission.', zh: '要嘛真的跑一次篩選，要嘛用一句話說明這個專案的原型不是「模型先選標靶」。不說，讀起來就像漏掉了。' }],
              [{ en: 'Q3 · The smallest thing that could kill it', zh: 'Q3 · 能殺掉它的最小事項' },
               { en: 'Whether a PLP-dependent oligomeric enzyme can be secreted at all. We found this late, in a construct audit, not in month one.', zh: '一個依賴 PLP 的寡聚體酵素到底能不能被分泌。我們很晚才發現這件事，是在構建體稽核時，不是第一個月。' },
               { en: '**Fail**', zh: '**未通過**' },
               { en: 'This is the single clearest lesson. A two-hour literature check in January would have reshaped the construct design.', zh: '這是最清楚的一課。一月份花兩小時查文獻，就會重塑整個構建體設計。' }],
              [{ en: 'Q4 · First construct and its control', zh: 'Q4 · 第一個構建體與對照' },
               { en: 'Built, and the 0 mM control turned out to be the lowest value in the whole dataset — a control that behaved wrongly and therefore told us something.', zh: '有做出來，而且 0 mM 對照組結果是整組數據的最低值——一個表現異常、因此反而告訴了我們事情的對照。' },
               { en: '**Partial**', zh: '**部分通過**' },
               { en: 'The control existed; what was missing was a written pass value, so the anomaly was found during analysis rather than during the run.', zh: '對照是有的；缺的是事先寫下的通過值，所以那個異常是在分析時才被發現，而不是在實驗進行中。' }],
              [{ en: 'Q5 · What the next team gets', zh: 'Q5 · 下一隊拿到什麼' },
               { en: 'A bioreactor, an operator UI, a digital-twin protocol, a 434-hour growth dataset and a published parts package.', zh: '一台生物反應器、一套操作介面、一份數位分身協定、一筆 434 小時的生長數據，以及一組公開的 parts。' },
               { en: '**Pass**', zh: '**通過**' },
               { en: 'Nothing, except to package the dataset earlier so it could be used by someone during the season rather than after it.', zh: '不改，唯一要改的是更早把資料集包裝好，讓別人在賽季中就用得到，而不是賽季之後。' }],
              [{ en: 'Q6 · What we publish when it fails', zh: 'Q6 · 失敗時公開什麼' },
               { en: 'We did publish the four formula errors in the chlorophyll analysis and the 1.46× standard-concentration error in the first DNPH assay.', zh: '我們確實公開了葉綠素分析裡的四個公式錯誤，以及第一次 DNPH 試驗中 1.46 倍的標準品濃度誤差。' },
               { en: '**Pass**', zh: '**通過**' },
               { en: 'Move it from a correction buried in an appendix to a named section, in the same register as the results.', zh: '把它從附錄深處的一段更正，移成一個有標題的章節，語氣與結果章節一致。' }]
            ],
            min: 900,
            source: { en: 'Our own 2026 project, scored against our own screen. Four passes, two fails, one partial — which is roughly what we would expect an honest first pass to look like.', zh: '我們自己 2026 年的專案，用我們自己的篩選表打分。四個通過、兩個未通過、一個部分通過——這大概就是一次誠實的初評應該有的樣子。' }
          }) +
          h.take({ en: 'The transferable lesson', zh: '可轉用的那一課' },
            { en: 'Both failures are **Q2 and Q3** — the two questions that are cheapest to answer and that we answered last. That is not a coincidence and it is probably not specific to us: the questions that cost an afternoon are exactly the ones a team in January feels too busy to run, and they are the ones that decide whether the other nine months are spent on the right object.',
              zh: '兩個未通過都落在 **Q2 與 Q3**——也就是最便宜回答、而我們卻最後才回答的兩個問題。這不是巧合，而且大概也不只是我們的問題：花一個下午就能回答的問題，正是一月份的隊伍覺得自己太忙、沒空做的那些；而它們決定了接下來九個月做的是不是正確的東西。' })
      });

      /* ---------------- what is not here ---------------- */
      out += h.sec({
        id: 'nx-off',
        kick: { en: 'Disclosure', zh: '揭露' },
        h2: { en: 'What is deliberately not on this page', zh: '這一頁刻意沒有放的東西' },
        lede: {
          en: 'This repository is public and we are a competing team. Saying which parts we withheld is cheaper than pretending we withheld nothing.',
          zh: '這個 repo 是公開的，而我們是一支參賽隊伍。直接說明我們保留了哪些部分，比假裝什麼都沒保留要誠實得多。'
        },
        body:
          h.ul([
            { en: '**Our 2027 topic shortlist.** The screen is here in full and anyone can run it; the candidates we ran it on are not. If you are a 2027 team reading this, you lose nothing — the method is the transferable part and the candidates would not be yours anyway.', zh: '**我們 2027 年的候選題目清單。** 篩選方法完整放在這裡，任何人都能跑；我們拿來跑的候選題目沒有放。如果你是正在讀這頁的 2027 隊伍，你沒有任何損失——可轉用的是方法，而那些候選題目本來也不會是你的。' },
            { en: '**Which of the four archetypes we have actually chosen.** The table says which pair we would aim for and why; it does not say what we did.', zh: '**我們實際上選了四種原型中的哪一個。** 表格說明了我們會瞄準哪一組合以及理由；沒有說我們做了什麼。' },
            { en: '**Nothing else.** Every rule, every kill criterion, every column of the gate sheet and the whole calendar are here as we would run them. If a rule looks wrong, the evidence for it is one click away on the team page it came from.', zh: '**其他都沒有保留。** 每一條規則、每一個淘汰標準、關卡表的每一欄、以及整份行事曆，都是照我們自己會跑的樣子放上來的。如果某條規則看起來不對，它的證據就在它出處那一隊的頁面上，點一下就到。' }
          ])
      });

      return out;
    }
  };
})(window);
