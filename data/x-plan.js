/* The 2027 season as real dates. One published date, one inferred freeze, and everything else arithmetic.
   The week offsets come from the roadmap page; this page turns them into Wednesdays a team can print. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['x-plan'] = {
    label: { en: '2027 season plan', zh: '2027 賽季計畫' },
    title: { en: '2027 season plan — the roadmap as dates', zh: '2027 賽季計畫——把行程換成日期' },
    render: function (h) {
      var out = '';

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · the 2027 season in calendar dates · one published date, one inferred freeze',
          zh: 'GEMS Research · 用日曆日期寫的 2027 賽季 · 一個已公布的日期、一個推算的凍結日'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The 2027 Jamboree opens **26 days earlier in the year** than 2026\'s did. ==If you start when last year\'s team started, you have twenty-six fewer days and nobody will tell you.==',
          zh: '2027 年的 Jamboree 比 2026 年**在年內提前了 26 天**開幕。==如果你照去年那支隊伍的時間開始，你就少了二十六天，而不會有人來提醒你。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'The [roadmap page](#x-roadmap) counts the season in weeks before the wiki freeze, because that is the only honest way to count before iGEM publishes its calendar. This page does the arithmetic anyway. **iGEM\'s own events API gives the 2027 Grand Jamboree as 18–21 October 2027.** The freeze has fallen 19 to 23 days earlier, on a Wednesday, four seasons running — which puts it at **29 September 2027**. That one inferred date turns every week offset into a Wednesday you can write on a wall. Each date below is marked as published, inferred, or derived, and the page tells you exactly how to shift all of them in one step when iGEM announces the real one.',
          zh: '[選題指南](#x-roadmap)把整季以「wiki 凍結日前幾週」計算，因為在 iGEM 公布行程之前，那是唯一誠實的算法。這一頁還是把算術做完了。**iGEM 自己的 events API 把 2027 年 Grand Jamboree 列為 2027 年 10 月 18 至 21 日。**過去四季，凍結日都落在開幕前 19 到 23 天、而且都是星期三——推算下來是 **2027 年 9 月 29 日**。這一個推算出來的日期，把每一個週數偏移都變成一個你可以寫在牆上的星期三。以下每個日期都標示為「已公布」、「推算」或「導出」，而本頁也寫明：當 iGEM 公布真正的日期時，該怎麼一步把全部日期平移。'
        }) + '</p>' +
        h.stats([
          { v: '18–21 Oct', l: { en: '2027 Grand Jamboree, from iGEM\'s events API — the only published 2027 date', zh: '2027 年 Grand Jamboree，來自 iGEM events API——唯一已公布的 2027 日期' } },
          { v: '29 Sep', l: { en: 'Our inferred wiki freeze, from four seasons of the same interval', zh: '我們推算的 wiki 凍結日，依四個賽季相同的間隔' } },
          { v: '26 days', l: { en: 'Earlier in the calendar than the 2026 Jamboree — this is published, not inferred', zh: '比 2026 年 Jamboree 在日曆上提前的天數——這是公布的，不是推算的' } },
          { v: '13', l: { en: 'Dated milestones, every one of them a Wednesday', zh: '有日期的里程碑數，每一個都是星期三' } },
          { v: '4', l: { en: 'Points at which the plan says to kill the project rather than continue', zh: '計畫中明白寫著「該停掉而不是繼續」的時點數' } },
          { v: '0', l: { en: '2027 deadlines iGEM had published when we wrote this page', zh: '我們寫這一頁時，iGEM 已公布的 2027 期限數' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'pl-date', t: { en: 'What is actually known', zh: '真正已知的部分' } },
        { id: 'pl-week', t: { en: 'Thirteen Wednesdays', zh: '十三個星期三' } },
        { id: 'pl-sheet', t: { en: 'The January worksheet', zh: '一月工作單' } },
        { id: 'pl-gate', t: { en: 'Four kill points', zh: '四個停止點' } },
        { id: 'pl-slip', t: { en: 'What may slip', zh: '哪些可以延後' } }
      ]);

      /* ---------------- what is known ---------------- */
      out += h.sec({
        id: 'pl-date',
        kick: { en: 'Provenance', zh: '出處' },
        h2: { en: 'One date is published. The rest of this page is arithmetic on top of it, and says so', zh: '只有一個日期是公布的。這一頁其餘的部分都是建立在它之上的算術，而且會說明這一點' },
        lede: {
          en: 'A planning page that hides which of its dates are guesses is worse than no planning page, because a team will treat all of them the same way.',
          zh: '一份隱藏「哪些日期其實是猜的」的規劃頁，比沒有規劃頁更糟，因為團隊會用同一種態度對待所有日期。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Date', zh: '日期' }, w: '21%' },
              { t: { en: 'What it is', zh: '那是什麼' }, w: '26%' },
              { t: { en: 'Status', zh: '狀態' }, w: '14%' },
              { t: { en: 'Where it comes from', zh: '從哪裡來' } }
            ],
            rows: [
              [{ en: '**18–21 Oct 2027**', zh: '**2027 年 10 月 18–21 日**' },
               { en: 'Grand Jamboree', zh: 'Grand Jamboree' },
               { en: '**Published**', zh: '**已公布**' },
               { en: 'iGEM\'s own events API, read by us. The only 2027 date of any kind we could find.', zh: '由我們讀取 iGEM 自己的 events API。這是我們能找到的唯一一個 2027 年日期。' }],
              [{ en: '**26 days**', zh: '**26 天**' },
               { en: 'How much earlier 2027 is than 2026', zh: '2027 比 2026 提前多少' },
               { en: '**Published**', zh: '**已公布**' },
               { en: 'Subtraction of two published Jamboree dates: 13 Nov 2026 and 18 Oct 2027. No inference involved.', zh: '兩個已公布 Jamboree 日期相減：2026 年 11 月 13 日與 2027 年 10 月 18 日。不涉及任何推論。' }],
              [{ en: '**29 Sep 2027**', zh: '**2027 年 9 月 29 日**' },
               { en: 'Wiki freeze', zh: 'Wiki 凍結日' },
               { en: '*Inferred*', zh: '*推算*' },
               { en: 'The freeze has been 19–23 days before the Jamboree and a Wednesday in each of the last four seasons. 18 Oct 2027 is a Monday, so the Wednesday 19 days earlier is 29 Sep. **This is our arithmetic, not an announcement.**', zh: '過去四季，凍結日都在 Jamboree 前 19 到 23 天，而且都是星期三。2027 年 10 月 18 日是星期一，所以往前推十九天的星期三就是 9 月 29 日。**這是我們的算術，不是公告。**' }],
              [{ en: 'Everything else', zh: '其餘全部' },
               { en: 'The thirteen milestones below', zh: '以下十三個里程碑' },
               { en: '*Derived*', zh: '*導出*' },
               { en: 'Week offsets from our own roadmap page, counted back from 29 Sep 2027. They move if the freeze moves.', zh: '取自我們選題指南頁的週數偏移，自 2027 年 9 月 29 日往回算。凍結日一動，它們全部跟著動。' }]
            ],
            min: 820,
            source: { en: 'Our table. The three facts in it are: one API reading, one subtraction, and one four-point pattern. Nothing here is an iGEM commitment, and iGEM has made no 2027 commitment that we could find.', zh: '這是我們的表。裡面只有三件事：一次 API 讀取、一次減法、一個四個資料點的規律。這裡沒有任何一項是 iGEM 的承諾，而我們也找不到 iGEM 對 2027 年做過任何承諾。' }
          }) +
          h.take({ en: 'The one-step correction', zh: '一步修正' },
            { en: 'When iGEM publishes the real freeze, subtract it from 29 September 2027 and shift **every** date on this page by that many days. Do not re-plan. The plan is a set of intervals; only its anchor is uncertain.', zh: '當 iGEM 公布真正的凍結日，把它和 2027 年 9 月 29 日相減，然後把本頁**每一個**日期平移同樣的天數。不要重新規劃。這份計畫是一組間隔；不確定的只有它的錨點。' }) +
          h.warn({
            en: 'The 26 days are the part that bites. A team that starts its first meeting in the same school week as the 2026 team did, and keeps the same habits, reaches the 2027 freeze **with 26 days of work not done** — and the days it will have lost are September days, which in 2026 were the writing weeks. The common version of this failure is a team that measures everything it planned to measure and then has eleven days to write a wiki about it.',
            zh: '真正會咬人的是那 26 天。一支在學年同一週開第一次會、並且保持同樣習慣的隊伍，抵達 2027 年凍結日時會**有 26 天的工作沒做完**——而它失去的那些日子是九月的日子，也就是 2026 年的書寫週。這種失敗最常見的樣子是：一支隊伍把計畫中要量的全都量完了，然後只剩十一天可以寫出一個 wiki。'
          })
      });

      /* ---------------- thirteen Wednesdays ---------------- */
      out += h.sec({
        id: 'pl-week',
        kick: { en: 'The plan', zh: '計畫' },
        h2: { en: 'Thirteen Wednesdays between the first meeting and the freeze', zh: '從第一次會議到凍結日之間的十三個星期三' },
        lede: {
          en: 'Every milestone from the roadmap, converted to a real 2027 date. They are all Wednesdays because the freeze is a Wednesday and the offsets are whole weeks — which is convenient: a weekly meeting lands on every one of them.',
          zh: '選題指南裡的每一個里程碑，都換算成一個真實的 2027 年日期。它們全都是星期三，因為凍結日是星期三、而偏移都是整週——這剛好很方便：一個每週例會會落在其中每一個上面。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Date', zh: '日期' }, w: '15%' },
              { t: { en: 'Week', zh: '週次' }, w: '9%', num: true },
              { t: { en: 'Milestone', zh: '里程碑' }, w: '30%' },
              { t: { en: 'The test that it happened', zh: '它確實發生了的檢驗' } }
            ],
            rows: [
              [{ en: 'Wed 23 Dec 2026', zh: '2026 年 12 月 23 日（三）' }, { en: '−40', zh: '−40' },
               { en: 'Four candidate topics on paper', zh: '四個候選題目寫在紙上' },
               { en: 'Four paragraphs exist, one per topic, each naming a problem and who has it. No literature review yet.', zh: '存在四段文字，一個題目一段，各自指名一個問題與誰有這個問題。此時還不做文獻回顧。' }],
              [{ en: 'Wed 6 Jan 2027', zh: '2027 年 1 月 6 日（三）' }, { en: '−38', zh: '−38' },
               { en: 'All four through the gates in one meeting', zh: '在一次會議裡把四個都跑過關卡' },
               { en: 'The worksheet below is filled in, in writing, before anyone speaks. Two topics are dead by the end of the meeting.', zh: '下面那份工作單在任何人開口之前就已經書面填好。會議結束時有兩個題目已經死了。' }],
              [{ en: 'Wed 3 Feb 2027', zh: '2027 年 2 月 3 日（三）' }, { en: '−34', zh: '−34' },
               { en: 'Commit to one topic, and write the negative result', zh: '定案一個題目，並寫下負面結果' },
               { en: 'A dated sentence naming the outcome you would publish and dislike, signed by the whole team.', zh: '一句簽上日期的話，指名那個你會公開、而你不喜歡的結果，全隊簽名。' }],
              [{ en: 'Wed 10 Feb 2027', zh: '2027 年 2 月 10 日（三）' }, { en: '−33', zh: '−33' },
               { en: 'Cloning and assay development start together', zh: '選殖與量測開發同時開始' },
               { en: 'Two parallel protocols in the notebook on the same day, not one after the other.', zh: '同一天在實驗記錄裡出現兩份並行的流程，不是一前一後。' }],
              [{ en: 'Wed 17 Mar 2027', zh: '2027 年 3 月 17 日（三）' }, { en: '−28', zh: '−28' },
               { en: 'First real measurement, with its control', zh: '第一次真實量測，連對照一起' },
               { en: 'A standard curve with its own error bars, from a construct that is probably not final.', zh: '一條帶自己誤差線的標準曲線，來自一個大概還不是定版的構築。' }],
              [{ en: 'Wed 14 Apr 2027', zh: '2027 年 4 月 14 日（三）' }, { en: '−24', zh: '−24' },
               { en: 'First sample leaves the building', zh: '第一個樣本離開這棟建築' },
               { en: 'A courier receipt or a confirmation email with a named person and a named measurement in it.', zh: '一張快遞收據，或一封裡面有具名的人與具名量測的確認信。' }],
              [{ en: 'Wed 28 Apr 2027', zh: '2027 年 4 月 28 日（三）' }, { en: '−22', zh: '−22' },
               { en: 'Decide which links get evidence', zh: '決定哪些環節會拿到證據' },
               { en: 'The chain diagram re-marked. Exactly two boxes say "evidence"; the rest will be published as design.', zh: '重新標記鏈條圖。剛好兩個方塊寫著「證據」；其餘將以「設計」的形式公開。' }],
              [{ en: 'Wed 12 May 2027', zh: '2027 年 5 月 12 日（三）' }, { en: '−20', zh: '−20' },
               { en: 'The screen that produces a loser', zh: '會產出「輸家」的那個篩選' },
               { en: 'Two or more real options compared head to head, and the losing one written up rather than deleted.', zh: '兩個以上的真實選項正面比較，而輸掉的那一個被寫下來，不是被刪掉。' }],
              [{ en: 'Wed 23 Jun 2027', zh: '2027 年 6 月 23 日（三）' }, { en: '−14', zh: '−14' },
               { en: 'Dose–response, or its equivalent', zh: '劑量反應，或與之等價的東西' },
               { en: 'Five matched runs, not fifteen unmatched ones. This is the step that makes it a characterisation.', zh: '五組配對的實驗，不是十五組不配對的。這一步讓它成為一次特性化。' }],
              [{ en: 'Wed 21 Jul 2027', zh: '2027 年 7 月 21 日（三）' }, { en: '−10', zh: '−10' },
               { en: 'Freeze the dataset', zh: '凍結資料集' },
               { en: 'A dated archive. Anything measured after it is an addition, never a revision of the claim.', zh: '一份有日期的封存檔。在它之後測到的東西都是補充，絕不是對主張的修訂。' }],
              [{ en: 'Wed 4 Aug 2027', zh: '2027 年 8 月 4 日（三）' }, { en: '−8', zh: '−8' },
               { en: 'Release the artefact, and write the results page first', zh: '釋出成品，並先寫結果頁' },
               { en: 'Someone outside the team has the tool, part or device in hand and can try it. The results page exists before the description page.', zh: '團隊之外的人手上已經有那個工具、元件或裝置，並且能試用。結果頁在描述頁之前就存在。' }],
              [{ en: 'Wed 25 Aug 2027', zh: '2027 年 8 月 25 日（三）' }, { en: '−5', zh: '−5' },
               { en: 'Scope every claim inline', zh: '為每個主張就地標註範圍' },
               { en: 'Walk the results page sentence by sentence. A reader who stops at any one sentence has not been misled.', zh: '一句一句走過結果頁。任何在單一句話處停下的讀者都沒有被誤導。' }],
              [{ en: 'Wed 8 Sep 2027', zh: '2027 年 9 月 8 日（三）' }, { en: '−3', zh: '−3' },
               { en: 'Hand the wiki to an outsider', zh: '把 wiki 交給一個外人' },
               { en: 'One question asked: which claims do you think we proved? Every too-generous answer is a sentence to rewrite.', zh: '只問一個問題：你覺得我們證明了哪些主張？每一個「太寬厚」的答案都是一句該重寫的話。' }],
              [{ en: 'Wed 22 Sep 2027', zh: '2027 年 9 月 22 日（三）' }, { en: '−1', zh: '−1' },
               { en: 'Check the deliverables, not the prose', zh: '檢查交付項目，不是文章' },
               { en: 'Forms, attributions, safety, parts, licence, repository link. The cheapest marks in the competition, and the easiest to lose.', zh: '表單、致謝、安全、元件、授權、倉庫連結。整個競賽裡最便宜的分數，也是最容易丟掉的。' }]
            ],
            min: 900,
            source: { en: 'Derived by us: week offsets from our [roadmap page](#x-roadmap), counted back from an inferred freeze of 29 September 2027. Fourteen rows, thirteen of them in 2027. **Check the official calendar before you trust any of them.**', zh: '由我們導出：週數偏移取自我們的[選題指南](#x-roadmap)，自推算的 2027 年 9 月 29 日凍結日往回算。十四列，其中十三列在 2027 年。**在你相信其中任何一項之前，請先查官方行程。**' }
          }) +
          h.note({
            en: 'The two deliberate inversions survive the translation into dates and are the reason the table is worth printing: **the assay is built before the construct is final** (10 February, alongside cloning, not after it) and **the results page is written before the description page** (4 August). Both exist because the common failure is a team that spends thirty weeks producing material and eight weeks discovering it cannot say anything about it.',
            zh: '那兩個刻意的倒序在換成日期之後依然成立，也正是這張表值得印出來的理由：**量測在構築定版之前就建好**（2 月 10 日，與選殖並行，不是在它之後）、以及**結果頁在描述頁之前就寫**（8 月 4 日）。這兩件事之所以存在，是因為最常見的失敗就是一支隊伍花三十週產出材料，再用八週發現自己對它什麼也說不出來。'
          })
      });

      /* ---------------- the January worksheet ---------------- */
      out += h.sec({
        id: 'pl-sheet',
        kick: { en: 'A worksheet', zh: '一份工作單' },
        h2: { en: 'The 6 January worksheet: ten answers, written before anybody speaks', zh: '1 月 6 日工作單：十個答案，在任何人開口之前寫完' },
        lede: {
          en: 'The [scoring sheet](#x-roadmap) on the roadmap page is for comparing topics. This is the version you fill in. One copy per candidate topic, one pen each, twenty minutes of silence, and only then the discussion. The order matters: a team that talks first converges on whatever the most confident person said.',
          zh: '選題指南頁上的[評分表](#x-roadmap)是用來比較題目的。這一份是你實際填的版本。每個候選題目一份、每人一支筆、二十分鐘的安靜，然後才開始討論。順序是關鍵：先講話的團隊，最後會收斂到最有自信的那個人說的話。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Write this down', zh: '把這個寫下來' }, w: '27%' },
              { t: { en: 'In this form', zh: '用這個形式' }, w: '30%' },
              { t: { en: 'It is a real answer only if…', zh: '只有在這種情況下才算真答案……' } }
            ],
            rows: [
              [{ en: '**1 · The number**', zh: '**1 · 那個數字**' },
               { en: '"We will measure ______ in units of ______ on a ______."', zh: '「我們會在一台 ______ 上，以 ______ 為單位，量 ______。」' },
               { en: 'You can name the instrument and somebody has confirmed you may use it. "A plate reader" is not an instrument; "the plate reader in Room 3, Tuesdays" is.', zh: '你能指名那台儀器，而且有人確認過你可以使用它。「一台微孔盤讀儀」不是儀器；「三號室那台、每週二」才是。' }],
              [{ en: '**2 · The control**', zh: '**2 · 對照**' },
               { en: '"In the same run we will also measure ______."', zh: '「在同一批次裡我們也會量 ______。」' },
               { en: 'The control is in the same protocol document, on the same plate, on the same day. A control scheduled for later is a control that will not happen.', zh: '對照寫在同一份流程文件裡、在同一塊盤上、在同一天。排在之後的對照，就是不會發生的對照。' }],
              [{ en: '**3 · The chain**', zh: '**3 · 鏈條**' },
               { en: 'Draw the boxes. Count them. Write the count.', zh: '把方塊畫出來。數一數。把數字寫下來。' },
               { en: 'The count is two or three. At four you are not choosing a project, you are choosing which three things will be published as design.', zh: '數字是二或三。到四的時候，你不是在選一個專案，你是在選哪三件事會以「設計」的形式公開。' }],
              [{ en: '**4 · The outsider**', zh: '**4 · 外部的人**' },
               { en: '"______ at ______ will measure ______ for us, and may disagree."', zh: '「______ 單位的 ______ 會替我們量 ______，而且可能與我們不一致。」' },
               { en: 'A name, not a category. And they must be able to return an answer you dislike — a service that runs your sample is an instrument you rented, not a check.', zh: '一個名字，不是一個類別。而且他們必須能回給你一個你不喜歡的答案——幫你跑樣本的服務是你租來的儀器，不是檢驗。' }],
              [{ en: '**5 · The negative result**', zh: '**5 · 負面結果**' },
               { en: '"If ______ then our answer is ______, and we will publish it."', zh: '「如果 ______，那我們的答案就是 ______，而我們會公開它。」' },
               { en: 'Somebody on the team visibly does not want this sentence to be true. If nobody minds it, the project cannot fail, which means it cannot succeed either.', zh: '團隊裡有人明顯不希望這句話成立。如果沒有人在意它，這個專案就不可能失敗，也就意味著它不可能成功。' }],
              [{ en: '**6 · The baseline**', zh: '**6 · 基準**' },
               { en: '"Our model will be compared against ______, which we will run ourselves."', zh: '「我們的模型會跟 ______ 比較，而那個我們自己會跑。」' },
               { en: 'One of the baselines is embarrassingly simple — a straight line, a mean, a coin flip. If the simple one wins, that is the finding.', zh: '其中一個基準笨得讓人不好意思——一條直線、一個平均、一次擲硬幣。如果笨的那個贏了，那就是發現。' }],
              [{ en: '**7 · The person**', zh: '**7 · 那個人**' },
               { en: '"______ does ______ for a living, and we will ask them ______."', zh: '「______ 以 ______ 為業，而我們會問他們 ______。」' },
               { en: 'You can state what you expect them to change about the design. A conversation that cannot change the design is publicity, not practice.', zh: '你能說出你預期他們會改變設計的哪一部分。一場不可能改變設計的對話是宣傳，不是實踐。' }],
              [{ en: '**8 · Containment**', zh: '**8 · 圍阻**' },
               { en: '"The organism stays in ______ for the whole season."', zh: '「這個生物整季都留在 ______ 裡。」' },
               { en: 'The sentence ends in a tube, a plate or a sealed reactor. The moment it ends in soil, water or a person, you have a different project and a different rulebook.', zh: '這句話結尾是試管、培養皿或密閉反應器。一旦它結尾是土壤、水或人，你就有了另一個專案和另一本規則書。' }],
              [{ en: '**9 · The explanation**', zh: '**9 · 解釋**' },
               { en: 'Pick the quietest member. Have them explain it. Time it.', zh: '挑最安靜的那位成員。請他們解釋一次。計時。' },
               { en: 'Under two minutes, and the limits are in it. If only the lead can do this in January, only the lead will do it in October, in front of judges.', zh: '兩分鐘以內，而且限制包含在裡面。如果一月只有負責人做得到，十月在評審面前也只有負責人做得到。' }],
              [{ en: '**10 · What survives**', zh: '**10 · 留下來的東西**' },
               { en: '"After the freeze, ______ still works, and ______ can run it."', zh: '「凍結日之後，______ 依然有用，而 ______ 跑得起來。」' },
               { en: 'The second blank is a group outside your school. A wiki is not an artefact; a part, a dataset, a script or a device with a bill of materials is.', zh: '第二個空格是你學校以外的一群人。一個 wiki 不是成品；一個元件、一份資料集、一支程式或一台附物料清單的裝置才是。' }]
            ],
            min: 900,
            source: { en: 'Our worksheet. The ten prompts are the ten rows of the roadmap\'s scoring sheet, rewritten as sentences with blanks, because a score hides a disagreement and a filled-in sentence cannot.', zh: '這是我們的工作單。十個提問就是選題指南評分表的十列，改寫成帶空格的句子，因為分數會藏住分歧，而一句填好的話藏不住。' }
          }) +
          h.take({ en: 'How to run the meeting', zh: '這場會議怎麼開' },
            { en: 'Twenty minutes of writing, in silence, one sheet per topic per person. Then read **row 1 from every sheet** aloud before moving to row 2 — go across the rows, not down the sheets. Topics die on their own when four people read out four different numbers for the same project. Nobody has to argue.', zh: '二十分鐘的書寫，全程安靜，每人每題一份。然後**先把每一份的第 1 列**唸出來，再進到第 2 列——橫著走，不要豎著走。當四個人對同一個專案唸出四個不同的數字時，題目會自己死掉。沒有人需要吵架。' }) +
          h.warn({
            en: 'Two failure modes of this worksheet, both of which we have seen in our own meetings. **Filling it in after the decision** turns it into a justification document, and you can tell because every blank is full and confident. **Filling it in for only the favourite topic** removes the only thing it is for, which is the comparison — the sheet is useless on one topic and powerful on four.',
            zh: '這份工作單有兩種失敗模式，我們自己的會議裡都見過。**在決定之後才填**，會讓它變成一份正當化文件；辨識方法是每個空格都填滿而且充滿自信。**只為最喜歡的那個題目填**，則移除了它唯一的用處——比較；這張表用在一個題目上毫無用處，用在四個題目上威力強大。'
          })
      });

      /* ---------------- four kill points ---------------- */
      out += h.sec({
        id: 'pl-gate',
        kick: { en: 'Decisions', zh: '決定' },
        h2: { en: 'Four dates on which the plan says stop, not continue', zh: '計畫上寫著「停」而不是「繼續」的四個日期' },
        lede: {
          en: 'Written in January, when stopping is cheap, so that the decision in June is not made by whoever is most invested. Each one has a date, a measurement, and a number that decides.',
          zh: '在一月寫下來，因為那時候停下來很便宜；這樣六月的決定就不會由投入最多的那個人來做。每一個都有日期、量測，以及一個決定去留的數字。'
        },
        body:
          h.phases([
            { h: { en: '3 February · the commitment gate', zh: '2 月 3 日 · 定案關卡' },
              p: { en: 'Not a kill point for the project but for the other three topics. Its failure mode is keeping two alive "for now".', zh: '它不是砍專案的點，而是砍掉另外三個題目的點。它的失敗模式是「暫時」留兩個活著。' },
              items: [
                { en: 'The test: one topic is written on the board and the other three worksheets are physically thrown away.', zh: '檢驗：白板上只寫一個題目，另外三份工作單被實際丟掉。' },
                { en: 'What goes wrong: a team that keeps a second topic as insurance spends March doing two sets of half-experiments and arrives at April with neither assay working.', zh: '會出什麼錯：把第二個題目留著當保險的隊伍，三月會做兩套各做一半的實驗，四月抵達時兩個試驗都不成立。' }
              ],
              done: { en: 'One topic, one dated negative-result sentence, and three sheets in the bin.', zh: '一個題目、一句有日期的負面結果，以及三份在垃圾桶裡的工作單。' } },
            { h: { en: '17 March · the floor gate', zh: '3 月 17 日 · 地板關卡' },
              p: { en: 'The first point at which the project can be shown to be impossible, and the cheapest. Six weeks in, with almost nothing spent.', zh: '這是第一個能證明專案不可行的時點，也是最便宜的一個。進行六週，幾乎什麼都還沒花。' },
              items: [
                { en: 'The test: can your assay tell your positive control from your blank, with a gap you would defend in writing?', zh: '檢驗：你的試驗能不能把陽性對照和空白分開，而且那個差距是你願意書面辯護的？' },
                { en: 'The number: write it in January. If the effect you are hunting is smaller than the gap between two blanks on the same plate, the project is over and it is March.', zh: '那個數字：一月就寫下來。如果你要追的效應比同一塊盤上兩個空白之間的差距還小，專案就結束了——而現在是三月。' },
                { en: 'This gate is the reason the assay is built alongside the cloning rather than after it. Built after, it reports the same failure in July.', zh: '這道關卡正是「量測與選殖並行、而不是在它之後」的理由。如果放在之後建，同樣的失敗會在七月才被報出來。' }
              ],
              done: { en: 'A plate with blanks, a positive control and error bars, and a written statement of the smallest difference you can resolve.', zh: '一塊有空白、陽性對照與誤差線的盤，加上一句書面陳述：你能分辨的最小差異是多少。' } },
            { h: { en: '28 April · the two-link gate', zh: '4 月 28 日 · 兩環關卡' },
              p: { en: 'Not whether the project works, but whether it has shrunk to a size that can be finished. Most seasons are lost here, quietly, by not deciding.', zh: '這一關不問專案能不能成，而是問它有沒有縮小到做得完的尺寸。多數賽季是在這裡、安靜地、因為沒有做決定而輸掉的。' },
              items: [
                { en: 'The test: exactly two boxes on the chain diagram are marked "evidence", and the sentence that publishes the others as design is already drafted.', zh: '檢驗：鏈條圖上剛好兩個方塊被標成「證據」，而把其餘公開為「設計」的那句話已經草擬好了。' },
                { en: 'The number: five months to the freeze, which is one month per evidence box plus three for writing and release. If you have three boxes, you have no writing time.', zh: '那個數字：距凍結日五個月，等於每個證據方塊一個月，加上三個月給書寫與釋出。如果你有三個方塊，你就沒有書寫時間。' },
                { en: 'The outsider\'s first answer is due by now, from 14 April. If nobody outside has replied by the end of April, that is the finding to act on: change the outsider, not the deadline.', zh: '外部的第一個答覆到此時應該已經到了，從 4 月 14 日算起。如果到四月底外面都還沒有人回信，那就是該採取行動的發現：換外部對象，不是改期限。' }
              ],
              done: { en: 'A chain diagram with two evidence boxes, and one reply from outside the school in the inbox.', zh: '一張有兩個證據方塊的鏈條圖，以及收件匣裡一封來自校外的回信。' } },
            { h: { en: '21 July · the dataset gate', zh: '7 月 21 日 · 資料集關卡' },
              p: { en: 'The last honest stopping point. After this date, the project is whatever the data already says, and the work is writing.', zh: '最後一個誠實的停止點。這個日期之後，專案就是資料已經說出的那個樣子，剩下的工作是書寫。' },
              items: [
                { en: 'The test: archive the data, with a date, and ask what claim it supports. Not what claim you hoped for.', zh: '檢驗：把資料封存、標上日期，然後問它支持什麼主張。不是你原本希望的那個主張。' },
                { en: 'If the honest answer is the negative result you wrote on 3 February, the right move is to publish it properly rather than spend August chasing the positive one. Ten weeks of chasing produces a wiki that claims more than it shows, which is the single most visible weakness to a judge.', zh: '如果誠實的答案就是你 2 月 3 日寫下的那個負面結果，正確的做法是把它好好公開，而不是用八月去追那個正面的。追十週會產出一個「主張多於展示」的 wiki，而那是評審眼裡最顯眼的弱點。' },
                { en: 'Everything measured after this date is an addition. Label it as one on the page.', zh: '這個日期之後測到的一切都是補充。在頁面上就這樣標示它。' }
              ],
              done: { en: 'A dated archive, and one sentence stating what it supports — written before anybody starts the results page.', zh: '一份有日期的封存檔，以及一句陳述它支持什麼的話——在任何人開始寫結果頁之前寫好。' } }
          ]) +
          h.note({
            en: 'All four gates are written **before** the season starts, with their numbers filled in, and signed. A gate whose threshold is decided at the gate is not a gate. The point of dating them in January is that the person who will want to continue in July is the same person who writes the stopping rule in February, and in February they are still able to be fair about it.',
            zh: '這四道關卡都在賽季開始**之前**就寫好、數字填好、簽名。一道在抵達時才決定門檻的關卡不是關卡。在一月就把它們標上日期的用意是：七月那個想繼續下去的人，就是二月寫下停止規則的同一個人，而在二月他還有能力對這件事公正。'
          })
      });

      /* ---------------- what may slip ---------------- */
      out += h.sec({
        id: 'pl-slip',
        kick: { en: 'Slack', zh: '餘裕' },
        h2: { en: 'Which dates can move, which cannot, and where the twenty-six days have to come from', zh: '哪些日期可以動、哪些不行，以及那二十六天必須從哪裡挪出來' },
        lede: {
          en: 'A plan with no slack is a plan that fails on its first bad week, and every season has one. Here is where the slack actually is — and because 2027 is 26 days shorter, a team has to decide in January which of these it is spending.',
          zh: '沒有餘裕的計畫，會在第一個倒楣的星期就失效，而每一季都會有一個。這裡寫明餘裕實際上在哪裡——而因為 2027 年短了 26 天，一支隊伍必須在一月就決定要花掉哪一項。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Item', zh: '項目' }, w: '28%' },
              { t: { en: 'Can it slip?', zh: '可以延嗎？' }, w: '16%' },
              { t: { en: 'What happens if it does', zh: '延了會怎樣' } }
            ],
            rows: [
              [{ en: 'Choosing (to 3 February)', zh: '選題（到 2 月 3 日）' },
               { en: '**No**', zh: '**不行**' },
               { en: 'Every week lost here is taken from writing in September, because the lab weeks in between are already booked by biology that takes the time it takes.', zh: '這裡失去的每一週，都是從九月的書寫時間裡拿的，因為中間那些實驗週已經被「該花多久就花多久」的生物學佔住了。' }],
              [{ en: 'Assay development (from 10 February)', zh: '量測開發（自 2 月 10 日起）' },
               { en: '**No**', zh: '**不行**' },
               { en: 'It is the only thing protecting the 17 March kill point. Slip the assay and you learn in July what you could have learnt in March for the price of one plate.', zh: '它是唯一保護 3 月 17 日停止點的東西。量測一延，你會在七月才學到那件用一塊盤、三月就能學到的事。' }],
              [{ en: 'The outside measurement (14 April)', zh: '外部量測（4 月 14 日）' },
               { en: '*A little*', zh: '*一點點*' },
               { en: 'Slippable to about mid-May, and no later: the whole reason it is in April is that there must be time to act on an answer you did not want.', zh: '可以延到大約五月中，不能再晚：它之所以排在四月，整個理由就是必須留下時間，去對一個你不想要的答案做反應。' }],
              [{ en: 'The screen with a loser (12 May)', zh: '會有輸家的篩選（5 月 12 日）' },
               { en: '**Yes**', zh: '**可以**' },
               { en: 'The most droppable item on the page. It makes a project much stronger and it is not load-bearing — cut it to two options instead of four before you cut it entirely.', zh: '本頁最可以放棄的一項。它讓專案強很多，但不承重——在整個砍掉之前，先把它從四個選項減成兩個。' }],
              [{ en: 'Dose–response (23 June)', zh: '劑量反應（6 月 23 日）' },
               { en: '*A little*', zh: '*一點點*' },
               { en: 'Four weeks of slack exist between it and the dataset freeze, and they are the only real slack in the season. Spend them here, not earlier.', zh: '它與資料集凍結之間有四週餘裕，而那是整季唯一真正的餘裕。把它花在這裡，不要更早花掉。' }],
              [{ en: 'Dataset freeze (21 July)', zh: '資料集凍結（7 月 21 日）' },
               { en: '**No**', zh: '**不行**' },
               { en: 'Ten weeks is what writing, releasing and the forms actually take. Teams that slip this date do not write less; they write worse, and a judge can see it.', zh: '書寫、釋出與各種表單實際需要的就是十週。延後這個日期的隊伍不會寫得比較少；他們寫得比較差，而評審看得出來。' }],
              [{ en: 'Release the artefact (4 August)', zh: '釋出成品（8 月 4 日）' },
               { en: '*A little*', zh: '*一點點*' },
               { en: 'Two weeks at most. A release nobody outside has tried is a file, not a release, and trying it takes somebody else\'s calendar, not yours.', zh: '最多兩週。沒有外部的人試過的釋出是一個檔案，不是一次釋出，而試用它花的是別人的行程，不是你的。' }],
              [{ en: 'The outsider read (8 September)', zh: '外人試讀（9 月 8 日）' },
               { en: '**No**', zh: '**不行**' },
               { en: 'Three weeks is the minimum time to act on what they say. Slipped to the final week, it becomes a compliment rather than a review.', zh: '三週是對他們所說的話採取行動的最低時間。延到最後一週，它就變成一句讚美，不是一次審閱。' }],
              [{ en: 'Deliverables check (22 September)', zh: '交付項目檢查（9 月 22 日）' },
               { en: '**No**', zh: '**不行**' },
               { en: 'These are the cheapest marks in the competition and the only ones lost by administration rather than by science.', zh: '這些是整個競賽裡最便宜的分數，也是唯一會因為行政而不是因為科學而丟掉的分數。' }]
            ],
            min: 840,
            source: { en: 'Our judgement, from reading how the thirty 2026 Top 10 teams described their own timing — including the ones who said plainly what they ran out of time to do.', zh: '這是我們的判斷，來自閱讀 2026 年三十支前十名隊伍如何描述自己的時程——包括那些明白寫出「來不及做什麼」的隊伍。' }
          }) +
          h.take({ en: 'Where the twenty-six days come from', zh: '那二十六天從哪裡來' },
            { en: 'Three of the four slippable items add up to about six weeks of flexibility, and the 2027 calendar has already spent four of those weeks before your first meeting. So: **start the choosing phase in December 2026, not January 2027.** That is the whole answer, and it is free. Every other version of the answer costs an experiment.', zh: '四個可延項目裡有三個加起來約有六週彈性，而 2027 年的日曆在你第一次開會之前就已經花掉了其中四週。所以：**選題階段從 2026 年 12 月開始，不要從 2027 年 1 月開始。**這就是全部的答案，而且它免費。這個答案的其他每一個版本，都要用一個實驗來換。' })
      });

      return out;
    }
  };
})(window);
