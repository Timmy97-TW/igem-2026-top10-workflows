/* Three special prizes — the 2026 Gold rule and the published ballot questions, read as a strategy.
   Award names, ballot questions, Standard URLs, winners and section sizes are iGEM's own. Strategy is ours. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['x-prize'] = {
    label: { en: 'Three special prizes', zh: '三個特別獎' },
    title: { en: 'Three special prizes — choosing which three', zh: '三個特別獎——該選哪三個' },
    render: function (h) {
      var out = '';

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · the 2026 Gold rule and the published ballot questions · iGEM\'s text, our strategy',
          zh: 'GEMS Research · 2026 年金牌規則與已公布的評分題 · iGEM 的文字，我們的策略'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'Three special awards is a **ceiling**, not a target. ==You may apply for three. Not four. So the choice you make in February is the only one you get.==',
          zh: '三個特別獎是**上限**，不是目標。==你可以申請三個。不能四個。所以你二月做的那個選擇，是你唯一的一次機會。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'iGEM\'s 2026 handbook is explicit: *"Teams cannot apply for more than three Special Awards total, whether they are seeking a gold medal or not."* Three is also the number Gold requires — at least one from **General Bio Engineering**, at least one from **Specializations**. iGEM publishes the four or five **ballot questions** judges answer for every award, and reading them changes which three a High School team should pick: **of the six General Bio Engineering awards, Best Measurement is the only one whose questions never ask whether the thing being measured worked.** This page puts those questions next to five seasons of High School results — who won what, which shortlists had two teams and why, and which three we would elect for 2027, including the argument against repeating the three we won in 2026.',
          zh: 'iGEM 2026 年手冊寫得很明白：*「不論是否追求金牌，隊伍都不能申請超過三個特別獎。」*三也正是金牌所要求的數字——至少一個來自**一般生物工程**，至少一個來自**專項**。iGEM 公布了評審為每個獎所回答的那四到五道**評分題**，而讀過它們會改變一支高中隊伍該選哪三個：**在六個「一般生物工程」獎裡，Best Measurement 是唯一一個，它的題目從來不問「被量測的那個東西有沒有成功」。**本頁把那些題目與五個賽季的高中組結果並排：誰拿了什麼、哪些入圍名單只有兩隊而且為什麼，以及我們 2027 年會選哪三個——包含反對重複我們 2026 年所贏那三個的理由。'
        }) + '</p>' +
        h.stats([
          { v: '3', l: { en: 'Special Awards a team may apply for — a hard cap, not just the Gold requirement', zh: '一支隊伍可申請的特別獎數——這是硬上限，不只是金牌的要求' } },
          { v: '0', l: { en: 'Special Awards you must actually win to earn Gold', zh: '要拿到金牌、實際上必須贏得的特別獎數' } },
          { v: '19', l: { en: 'Special Awards that went to High School teams in 2026, shared by 13 teams', zh: '2026 年由高中組取得的特別獎數，由 13 支隊伍分享' } },
          { v: '7 of 13', l: { en: 'Of those winners who did not place in the High School Top 10', zh: '那些得獎者中沒有進入高中組前十名的隊數' } },
          { v: '1', l: { en: 'Teams that have ever won the same High School award twice in a row, 2022–2026', zh: '2022–2026 間曾連續兩年拿下同一個高中組獎項的隊數' } },
          { v: '6', l: { en: 'Judges per team, who see your wiki and video before the Jamboree', zh: '每支隊伍的評審人數，他們在 Jamboree 之前就看過你的 wiki 與影片' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'pz-rule', t: { en: 'The rule', zh: '規則' } },
        { id: 'pz-ask', t: { en: 'What each award asks', zh: '每個獎問什麼' } },
        { id: 'pz-gate', t: { en: 'Why thin fields are thin', zh: '稀薄的項目為何稀薄' } },
        { id: 'pz-field', t: { en: 'The field', zh: '競爭現況' } },
        { id: 'pz-pick', t: { en: 'Which three', zh: '該選哪三個' } },
        { id: 'pz-cost', t: { en: 'What each costs', zh: '各自的成本' } },
        { id: 'pz-trap', t: { en: 'How teams lose one', zh: '隊伍怎麼丟掉一個' } },
        { id: 'pz-honest', t: { en: 'New in 2026', zh: '2026 年的新規定' } },
        { id: 'pz-map', t: { en: 'Our five ideas', zh: '我們的五個題目' } }
      ]);

      /* ---------------- the rule ---------------- */
      out += h.sec({
        id: 'pz-rule',
        kick: { en: 'The rule', zh: '規則' },
        h2: { en: 'One of your three must depend on the bench. The other two need not', zh: '你的三個獎裡有一個必須依賴實驗檯。另外兩個不必' },
        lede: {
          en: 'That sentence is the whole strategy, and it falls out of how iGEM groups the awards rather than out of any advice. Four facts first, all quoted from iGEM.',
          zh: '那句話就是整個策略，而它來自 iGEM 如何把獎項分組，不是來自任何人的建議。先看四個事實，全部引自 iGEM。'
        },
        body:
          h.kv([
            [{ en: 'The Gold criterion, in full', zh: '金牌條件，完整原文' },
             { en: '*"Demonstrate excellence in your work toward three Special Awards of your choice. At least one must come from the General Bio Engineering category and at least one from the Specializations category."* The third may come from either list. Source: [judging/awards/medals](https://competition.igem.org/judging/awards/medals). The Judge Handbook calls the first category "General Biological Engineering" — same six awards, different spelling.', zh: '*「在你自選的三個特別獎上展現卓越的工作成果。其中至少一個必須來自一般生物工程類，至少一個來自專項類。」*第三個可以來自任一清單。來源：[judging/awards/medals](https://competition.igem.org/judging/awards/medals)。評審手冊把第一類寫成「General Biological Engineering」——同樣六個獎，寫法不同。' }],
            [{ en: 'Three is a ceiling as well as a floor', zh: '三是上限，也是下限' },
             { en: '*"Teams cannot apply for more than three Special Awards total, whether they are seeking a gold medal or not. The limit is intended to encourage the teams to focus on quality over quantity."* Judge Handbook, p. 47. **This is the fact most teams get wrong.** You cannot hedge by applying for six and seeing what lands.', zh: '*「不論是否追求金牌，隊伍都不能申請超過三個特別獎。這個限制是為了鼓勵隊伍在競賽中把精力放在品質而不是數量上。」*評審手冊第 47 頁。**這是多數隊伍搞錯的一點。**你無法用「申請六個看哪個中」來分散風險。' }],
            [{ en: 'You do not have to win', zh: '你不必贏' },
             { en: '*"You do not have to win any Special Award awards to meet the Gold Medal criteria, but you do have to impress the judges in your efforts towards each Special Award you select."* Judge Handbook, p. 44. So the three on your form are a **medal requirement**; a prize is a separate and much rarer outcome. Keep the two apart when you talk to your team.', zh: '*「你不需要贏得任何特別獎就能達成金牌條件，但你必須在你所選的每一個特別獎上讓評審印象深刻。」*評審手冊第 44 頁。所以表單上那三個是**獎牌的要求**；得獎是另一回事，而且罕見得多。跟團隊講的時候要把兩者分開。' }],
            [{ en: 'How the Gold vote actually works', zh: '金牌那一票實際上怎麼運作' },
             { en: 'New in 2026, and it changes how you should write. *"Judges do not cast a separate Gold vote. Each judge already scores those awards on their rubrics, and that judge\'s yes/no for an award is inferred from their score... Each of the three selected awards must reach a final result of yes."* Majority of six judges decides, and *"ties are ruled in favor of the team"* — three yes and three no means met. **All three must pass.** One weak leg costs the medal, not a third of it.', zh: '這是 2026 年的新制，而它會改變你該怎麼寫。*「評審不另投金牌一票。每位評審本來就會依評分表為那些獎打分，而該評審對某個獎的「是／否」是由分數推得……三個所選的獎每一個都必須得到「是」的最終結果。」*由六位評審的多數決定，而*「平手時判給隊伍」*——三比三算達成。**三個都必須過。**一條腿弱，丟掉的是整面獎牌，不是三分之一。' }]
          ]) +
          h.cards([
            { chips: [{ t: { en: 'at least one', zh: '至少一個' }, k: 'b' }, { t: { en: 'six awards', zh: '六個獎' } }],
              h: { en: 'General Bio Engineering', zh: '一般生物工程' },
              p: { en: 'Best Measurement · Best Model · Best New Basic Part · Best New Composite Part · Best New Improved Part · Best Part Collection. **This is where your season\'s biological risk is concentrated**, whether you plan it there or not — five of the six ask, in one form or another, whether a part works.', zh: 'Best Measurement · Best Model · Best New Basic Part · Best New Composite Part · Best New Improved Part · Best Part Collection。**不管你有沒有刻意安排，你這一季的生物風險都集中在這裡**——六個裡有五個都以某種形式在問：那個元件能不能用。' },
              foot: { en: 'The rule forces exactly one leg in here. It does not force two.', zh: '規則強迫你在這裡放剛好一腳。它沒有強迫你放兩腳。' } },
            { chips: [{ t: { en: 'at least one', zh: '至少一個' }, k: 'g' }, { t: { en: 'nine awards', zh: '九個獎' } }],
              h: { en: 'Specializations', zh: '專項' },
              p: { en: 'Best Education · Best Entrepreneurship · Best Hardware · Inclusivity Award · Best Integrated Human Practices · Best Alternative Platform · Safety and Security Award · Best Software · Best Sustainable Development Impact. **Most of these can be won in a season where the construct never worked.** One caveat from iGEM: Software & AI Village teams cannot elect Best Software, and are not eligible for it at all.', zh: 'Best Education · Best Entrepreneurship · Best Hardware · Inclusivity Award · Best Integrated Human Practices · Best Alternative Platform · Safety and Security Award · Best Software · Best Sustainable Development Impact。**其中多數，即使你的構築從來沒成功，那一季也拿得到。**iGEM 的一個例外：Software & AI Village 的隊伍不能選 Best Software，而且完全沒有資格。' },
              foot: { en: 'This is where you buy independence from your own biology.', zh: '你在這裡買到的是「不受自己生物學拖累」。' } },
            { chips: [{ t: { en: 'cannot be elected', zh: '不能選定' }, k: 'a' }, { t: { en: 'two awards', zh: '兩個獎' } }],
              h: { en: 'All Teams — Best Wiki and Best Presentation', zh: '全體隊伍——Best Wiki 與 Best Presentation' },
              p: { en: 'Neither counts toward your three, and you do not need to apply: *"Every team automatically competes for these awards. Their scores also contribute to the Project Awards."* **Read that second sentence twice.** The wiki and the video are not a side quest — they are two of the three ballot sections that decide the Top 10 and the Grand Prize, alongside Project. In the 2026 High School section they also had the longest shortlists of any award, ten teams each.', zh: '兩者都不算進你的三個，而你也不需要申請：*「每支隊伍都自動競爭這些獎。它們的分數同時也計入專案獎。」***第二句請讀兩次。**wiki 與影片不是支線任務——它們與「專案」一起，是決定前十名與首獎的三個評分區塊中的兩個。在 2026 年高中組，它們同時也是所有獎項中入圍名單最長的，各十隊。' },
              foot: { en: 'So: unelectable for Gold, and load-bearing for the Top 10.', zh: '所以：拿不到金牌的資格，卻是前十名的承重結構。' } }
          ], 'g3') +
          h.take({ en: 'Read the rule as a budget', zh: '把規則當成預算來讀' },
            { en: 'The rule says: *spend at least one of your three on an award whose evidence a failed experiment can destroy.* It does not say spend two or three there. A team that elects Measurement, Model and Part Collection has put all three prizes behind the same gate — if the construct fails in July, all three fail together and the Gold goes with them. A team that elects one General Bio Engineering award and two Specializations has one prize behind that gate and two beside it.', zh: '這條規則說的是：*你的三個獎裡，至少要有一個押在「證據會被一次失敗的實驗毀掉」的獎上。*它沒有說要押兩個或三個。一支選了 Measurement、Model 與 Part Collection 的隊伍，把三個獎都放在同一道閘門後面——如果七月構築失敗，三個一起失敗，金牌也跟著走。一支選一個「一般生物工程」加兩個「專項」的隊伍，只有一個在閘門後面，另外兩個在旁邊。' }) +
          h.note({
            en: 'Two more rules worth knowing before the form. **High school is evaluated separately for every Special Award:** *"For each Special Award, up to three winners are recognized, one per section... high school is always evaluated separately."* You compete against roughly 150 High School teams, not the whole competition — and unlike the collegiate sections, which need at least ten teams to get their own award, high school is always separate with no minimum. **And an award can go unawarded:** *"an Award will not be awarded if there are no nominated teams with high enough scores."* A thin field is not a free prize; there is a floor you still have to clear. Source: [judging/awards/special](https://competition.igem.org/judging/awards/special), Judge Handbook p. 47.',
            zh: '填表之前還有兩條規則值得知道。**每一個特別獎都把高中組分開評審：***「每一個特別獎最多表彰三位得獎者，每個組別一位……高中組一律分開評審。」*你競爭的對象是大約 150 支高中隊伍，不是整個競賽——而且不同於大學部與研究生部（各需至少十隊才有自己的獎），高中組一律分開，沒有下限。**而且一個獎可以不頒出去：***「如果沒有任何被提名的隊伍分數夠高，該獎就不會頒出。」*稀薄的項目不是免費的獎；還是有一條你必須越過的底線。來源：[judging/awards/special](https://competition.igem.org/judging/awards/special)、評審手冊第 47 頁。'
          })
      });

      /* ---------------- what each award asks ---------------- */
      out += h.sec({
        id: 'pz-ask',
        kick: { en: 'The questions', zh: '那些題目' },
        h2: { en: 'iGEM publishes the questions judges answer. Read them before you choose', zh: 'iGEM 公布了評審要回答的題目。選之前先讀它們' },
        lede: {
          en: 'Every award has four to six ballot questions, published in full, each scored 1 to 6. The per-question wording behind each score is deliberately withheld, and there is no rubric document — but the questions themselves are the specification, and most teams never read them. Below: the question that most decides each award, and whether answering it well requires the biology to have worked.',
          zh: '每個獎都有四到六道評分題，全文公布，各以 1 到 6 分計分。每個分數背後的逐題文字是刻意不公布的，也沒有評分表文件——但那些題目本身就是規格，而多數隊伍從來沒讀過。以下列出最能決定每個獎的那一題，以及把它答好是否需要「生物學已經成功」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Award', zh: '獎項' }, w: '17%' },
              { t: { en: 'Judged from', zh: '從哪裡評' }, w: '17%' },
              { t: { en: 'The question that decides it (iGEM\'s words)', zh: '決定它的那一題（iGEM 原文）' }, w: '40%' },
              { t: { en: 'Needs the biology to have worked?', zh: '需要生物學已經成功嗎？' } }
            ],
            rows: [
              [{ en: '**Best Measurement**', zh: '**Best Measurement**' }, { en: '`/measurement` page', zh: '`/measurement` 頁' },
               { en: '*"Did the team validate and calibrate their measurement process appropriately for their approach?"* The other three ask whether the measurement could be reproduced by other teams, whether the protocols are described well, and whether it could be useful to other projects.', zh: '*「團隊是否針對自己的方法，適當地驗證與校正了量測流程？」*另外三題問的是：其他隊伍能否重現這個量測、流程是否描述清楚、以及它對其他專案是否有用。' },
               { en: '**No.** Not one of the four questions asks whether the thing being measured worked.', zh: '**不需要。**四道題裡沒有任何一題在問「被量測的那個東西有沒有成功」。' }],
              [{ en: 'Best Model', zh: 'Best Model' }, { en: '`/model` page', zh: '`/model` 頁' },
               { en: '*"Did the team use experimental **or other relevant data** to develop, train, or validate the model or computational approach?"*', zh: '*「團隊是否使用了實驗資料**或其他相關資料**來建立、訓練或驗證這個模型或計算方法？」*' },
               { en: 'Not strictly — "or other relevant data" admits published data. A model fitted only to the literature is weaker, but it is eligible.', zh: '嚴格說不需要——「或其他相關資料」容許已發表的資料。只擬合文獻的模型比較弱，但仍然合格。' }],
              [{ en: 'Best New Basic Part', zh: 'Best New Basic Part' }, { en: 'the Registry entry', zh: 'Registry 條目' },
               { en: '*"Did the team show the part works as expected **(modeling data can be acceptable)**?"*', zh: '*「團隊是否展示了該元件如預期運作**（模型資料可以被接受）**？」*' },
               { en: 'Yes in substance — but note iGEM says modelling data **can be acceptable**. Few teams seem to know that.', zh: '實質上需要——但請注意 iGEM 說模型資料**可以被接受**。似乎很少隊伍知道這件事。' }],
              [{ en: 'Best New Composite Part', zh: 'Best New Composite Part' }, { en: 'the Registry entry', zh: 'Registry 條目' },
               { en: 'Same question, and *"How well characterized (experimentally measured or modeled) is this Composite Part?"*', zh: '同一道題，加上*「這個複合元件被特性化得多好（實測或模型）？」*' },
               { en: 'Yes in substance, modelling again allowed.', zh: '實質上需要，同樣允許模型。' }],
              [{ en: 'Best New Improved Part', zh: 'Best New Improved Part' }, { en: 'both Registry entries', zh: '兩個 Registry 條目' },
               { en: '*"Did the team show that the improved part functions better than the old part? (i.e., the old part was used as a control in the testing of the new part.)"*', zh: '*「團隊是否展示了改良元件的功能優於舊元件？（即：舊元件在新元件的測試中被當作對照使用。）」*' },
               { en: '**Yes, hardest of all.** The handbook makes it an eligibility rule: experiments must be run with both parts, and documented on both Registry pages.', zh: '**需要，而且是最硬的。**手冊把它列為資格規定：兩個元件都必須做實驗，並且在兩個 Registry 頁面上都記載。' }],
              [{ en: 'Best Part Collection', zh: 'Best Part Collection' }, { en: 'the collection page on the Registry', zh: 'Registry 上的元件集頁面' },
               { en: '*"Is this collection a coherent group of parts meant to be used as a collection, or just a list of all the parts the team made?"* and *"Did the team finish building a functional system using this collection?"*', zh: '*「這個元件集是一群刻意要被當作集合使用的、連貫的元件，還是只是團隊做過的所有元件的清單？」*以及*「團隊是否用這個元件集完成了一個可運作的系統？」*' },
               { en: '**Yes.** The second question is explicit about a functional system.', zh: '**需要。**第二題明白要求一個可運作的系統。' }],
              [{ en: '**Best Hardware**', zh: '**Best Hardware**' }, { en: '`/hardware` page', zh: '`/hardware` 頁' },
               { en: '*"Did the team conduct user testing and learn from user feedback?"* plus *"Is the documentation of the hardware system sufficient to enable reproduction by other teams?"*', zh: '*「團隊是否進行了使用者測試，並從使用者回饋中學習？」*以及*「硬體系統的文件是否足以讓其他隊伍重現？」*' },
               { en: 'No — the device must work, and the biology need not. But note that **user testing** is a ballot question, so a rig nobody outside the team ever used is answering one of four with nothing.', zh: '不需要——裝置必須能用，生物學不必。但請注意**使用者測試**本身就是一道評分題，所以一台團隊之外沒有人用過的裝置，四題中有一題交的是空白。' }],
              [{ en: 'Best Integrated Human Practices', zh: 'Best Integrated Human Practices' }, { en: '`/human-practices` page', zh: '`/human-practices` 頁' },
               { en: '*"How well was the Human Practices work integrated throughout the project?"* and *"How well did it incorporate different stakeholder views?"*', zh: '*「人類實踐工作在整個專案中被整合得多好？」*以及*「它納入不同利害關係人觀點的程度如何？」*' },
               { en: 'No. But "throughout" is doing real work: this is the award most sensitive to **when** the conversations happened.', zh: '不需要。但「整個」兩字有實質作用：這是最在意那些對話**何時**發生的一個獎。' }],
              [{ en: 'Best Education', zh: 'Best Education' }, { en: '`/education` page', zh: '`/education` 頁' },
               { en: '*"How well did their work promote mutual learning and/or a dialogue?"*', zh: '*「他們的工作促進相互學習與／或對話的程度如何？」*' },
               { en: 'No. iGEM states the activities *"do not have to relate directly to your project."*', zh: '不需要。iGEM 明言這些活動*「不必與你的專案直接相關」*。' }],
              [{ en: 'Inclusivity Award', zh: 'Inclusivity Award' }, { en: '`/inclusivity` page', zh: '`/inclusivity` 頁' },
               { en: '*"Was there a dialogue with members of the target group, and were their needs, opinions and values considered?"*', zh: '*「是否與目標群體的成員有過對話，而他們的需求、意見與價值是否被考慮？」*' },
               { en: 'No. Also unrelated to the project by design.', zh: '不需要。在設計上也與專案無關。' }],
              [{ en: 'Best Entrepreneurship', zh: 'Best Entrepreneurship' }, { en: '`/entrepreneurship` page', zh: '`/entrepreneurship` 頁' },
               { en: '*"Has the team identified their first potential customers and their unmet need(s) that are not yet covered by existing solutions?"*', zh: '*「團隊是否指認出最早的潛在客戶，以及現有方案尚未涵蓋的未滿足需求？」*' },
               { en: 'No, but it needs a number from outside — a cost, a price, a market size somebody else will stand behind.', zh: '不需要，但它需要一個來自外部的數字——一個成本、一個價格、一個別人願意背書的市場規模。' }],
              [{ en: 'Safety and Security Award', zh: 'Safety and Security Award' }, { en: '`/safety-and-security` page', zh: '`/safety-and-security` 頁' },
               { en: '*"Did the team make a contribution to biosafety and/or biosecurity?"* and *"Is their contribution well-characterized and/or well-validated?"*', zh: '*「團隊是否對生物安全與／或生物安保做出貢獻？」*以及*「他們的貢獻是否被充分特性化與／或充分驗證？」*' },
               { en: 'No. The word doing the work is **contribution**: filing your own safety forms is not one.', zh: '不需要。關鍵字是**貢獻**：提交自己的安全表單不算是一項貢獻。' }],
              [{ en: 'Best Software', zh: 'Best Software' }, { en: '`/software` page + iGEM GitLab', zh: '`/software` 頁 ＋ iGEM GitLab' },
               { en: '*"How well was the software validated (e.g., through experimental work, **test data, or benchmarking**)?"* — one of six questions, the most of any award.', zh: '*「這個軟體被驗證得多好（例如透過實驗工作、**測試資料或基準測試**）？」*——六道題之一，是所有獎項中最多的。' },
               { en: 'No. Benchmarking against test data counts, so a tool can be fully validated with no wet lab at all.', zh: '不需要。用測試資料做基準測試就算，所以一個工具完全可以在沒有濕式實驗的情況下被完整驗證。' }],
              [{ en: 'Best Alternative Platform', zh: 'Best Alternative Platform' }, { en: '`/alternative-platform` page', zh: '`/alternative-platform` 頁' },
               { en: '*"How strong is the evidence that the team successfully engineered their biological system?"* and *"How tightly are the team\'s outputs coupled to the platform?"*', zh: '*「團隊成功改造其生物系統的證據有多強？」*以及*「團隊的產出與該平台的耦合有多緊密？」*' },
               { en: '**Yes — we got this wrong at first.** Being on an unusual chassis is the eligibility condition, not the award. The first question asks for successful engineering.', zh: '**需要——我們一開始弄錯了。**使用不尋常的宿主只是資格條件，不是獎項本身。第一題要求的是「成功的改造」。' }],
              [{ en: 'Best Sustainable Development Impact', zh: 'Best Sustainable Development Impact' }, { en: '`/sustainability` page', zh: '`/sustainability` 頁' },
               { en: '*"Has the team\'s work measurably and significantly addressed one or more SDGs?"*', zh: '*「團隊的工作是否已可量測且顯著地處理了一個或多個永續發展目標？」*' },
               { en: 'Partly — and "measurably" is the trap. This is the entry most often weakened by claiming an impact the project never measured.', zh: '部分需要——而「可量測」就是陷阱。這份作品最常因為「主張一個專案從未量測過的影響」而被弱化。' }]
            ],
            min: 1100,
            source: { en: 'Ballot questions and Standard URLs quoted verbatim from [competition.igem.org/judging/awards/special](https://competition.igem.org/judging/awards/special) and the 2026 Judge Handbook. Which question "decides it" is our selection from each award\'s full set, and the last column is our reading, not iGEM\'s. Judges score each question 1 to 6; iGEM publishes the ladder (1 "Poor work done or completely absent" to 6 "Amazing work; impressive") but deliberately not the per-question wording behind each number.', zh: '評分題與 Standard URL 逐字引自 [competition.igem.org/judging/awards/special](https://competition.igem.org/judging/awards/special) 與 2026 年評審手冊。哪一題「決定它」是我們從每個獎的完整題組中挑出來的，而最後一欄是我們的解讀，不是 iGEM 的。評審為每題打 1 到 6 分；iGEM 公布了分級（1「做得很差或完全沒有」到 6「驚人的工作；令人印象深刻」），但刻意不公布每個分數背後的逐題文字。' }
          }) +
          h.take({ en: 'The one finding in this table', zh: '這張表裡唯一的發現' },
            { en: '**Best Measurement is the only one of the six General Bio Engineering awards whose published questions never ask whether the thing being measured worked.** Reproducibility by other teams, protocol description, usefulness to other projects, appropriate validation and calibration — all four exist whether or not your construct cooperates. Since the rule forces at least one leg into that group, this is where to put it. You can check this yourself: read the four questions.', zh: '**在六個「一般生物工程」獎裡，Best Measurement 是唯一一個，它公布的題目從來不問「被量測的那個東西有沒有成功」。**其他隊伍能否重現、流程描述、對其他專案是否有用、驗證與校正是否適當——這四件事不論你的構築是否配合都存在。既然規則強迫你在那一組放至少一腳，那就放在這裡。這件事你可以自己查證：把那四道題讀一遍。' })
      });

      /* ---------------- why thin fields are thin ---------------- */
      out += h.sec({
        id: 'pz-gate',
        kick: { en: 'Gates', zh: '門檻' },
        h2: { en: 'The thinnest High School fields are thin because of a checklist, not because nobody wants them', zh: '高中組最稀薄的項目之所以稀薄，是因為一張檢查表，不是因為沒人想要' },
        lede: {
          en: 'Count the winner plus the published nominees for each 2026 High School award and you get the length of the shortlist the judges produced. It ran from ten teams down to two. Then look at why the short ones are short.',
          zh: '把 2026 年高中組每個獎的得主加上公布的入圍者數出來，就得到評審所產生的入圍名單長度。範圍從十隊一路到兩隊。然後再看那些短的為什麼短。'
        },
        body:
          h.fig({
            kind: 'bars',
            tag: { en: 'SHORTLIST', zh: '入圍名單' },
            title: { en: '2026 High School shortlist length per Special Award, winner plus published nominees', zh: '2026 年高中組各特別獎入圍名單長度，得主加上公布的入圍者' },
            sub: { en: 'A shorter bar is a thinner judged field. The two longest bars are the two awards that cannot be elected toward Gold.', zh: '條越短，評審項目越稀薄。最長的那兩條，正是兩個不能被選為金牌之一的獎。' },
            data: [
              { label: { en: 'Best Wiki (All Teams)', zh: 'Best Wiki（全體隊伍）' }, v: 10, tone: 'a' },
              { label: { en: 'Best Presentation (All Teams)', zh: 'Best Presentation（全體隊伍）' }, v: 10, tone: 'a' },
              { label: { en: 'Best Hardware', zh: 'Best Hardware' }, v: 6 },
              { label: { en: 'Best Part Collection', zh: 'Best Part Collection' }, v: 6 },
              { label: { en: 'Best Sustainable Development Impact', zh: 'Best Sustainable Development Impact' }, v: 6 },
              { label: { en: 'Best Measurement', zh: 'Best Measurement' }, v: 5 },
              { label: { en: 'Best Model', zh: 'Best Model' }, v: 5 },
              { label: { en: 'Best Education', zh: 'Best Education' }, v: 5 },
              { label: { en: 'Best Entrepreneurship', zh: 'Best Entrepreneurship' }, v: 5 },
              { label: { en: 'Best Integrated Human Practices', zh: 'Best Integrated Human Practices' }, v: 5 },
              { label: { en: 'Best New Basic Part', zh: 'Best New Basic Part' }, v: 5 },
              { label: { en: 'Best New Composite Part', zh: 'Best New Composite Part' }, v: 5 },
              { label: { en: 'Inclusivity Award', zh: 'Inclusivity Award' }, v: 3, tone: 'g' },
              { label: { en: 'Best Software', zh: 'Best Software' }, v: 2, tone: 'g' },
              { label: { en: 'Best Alternative Platform', zh: 'Best Alternative Platform' }, v: 2, tone: 'g' }
            ],
            opts: { unit: { en: ' teams', zh: ' 隊' } },
            caption: { en: 'Counted by us from iGEM\'s published 2026 High School results. Best New Improved Part and the Safety and Security Award are left off: iGEM published no nominees for either, and a one-team shortlist cannot be told apart from an unpublished one.', zh: '由我們依 iGEM 公布的 2026 年高中組結果計數。Best New Improved Part 與 Safety and Security Award 未列入：iGEM 兩者都沒有公布入圍名單，而「只有一隊入圍」與「入圍名單未公布」無法分辨。' }
          }) +
          h.h3({ en: 'Three of the four thinnest have a hard eligibility gate you can decide to pass in January', zh: '最稀薄的四個裡有三個，有一道你可以在一月決定要通過的硬性資格門檻' }) +
          h.kv([
            [{ en: 'Best Software — shortlist of 2, two years running', zh: 'Best Software——入圍 2 隊，連續兩年' },
             { en: 'iGEM requires **all** of: an OSI-approved open-source licence; the source hosted in the team\'s repository on iGEM\'s own GitLab (*"Code hosted anywhere else is not eligible for evaluation"*); a README explaining install, run and how to reproduce the main results; a LICENSE file; reproducible build and run instructions, with source rather than compiled binaries; pinned dependencies in a committed lockfile; and a repository under 50 MB. *"If any are missing, the submission has not met the requirements for the award."* **None of that is scientific difficulty. It is an afternoon of discipline that most teams never spend.** The High School shortlist was two teams in 2025 and two again in 2026, with the same runner-up both times.', zh: 'iGEM 要求**全部**符合：一個 OSI 核可的開源授權；原始碼放在團隊於 iGEM 自家 GitLab 上的倉庫（*「放在其他任何地方的程式碼都沒有被評審的資格」*）；一份說明如何安裝、執行與重現主要結果的 README；一個 LICENSE 檔；可重現的建置與執行說明，且必須是原始碼而不是編譯後的執行檔；在已提交的 lockfile 中鎖定依賴版本；以及一個小於 50 MB 的倉庫。*「只要缺少任何一項，該件就未達成此獎的要求。」***這些都不是科學上的困難。這是一個下午的紀律，而多數隊伍從來沒花過。**高中組入圍名單 2025 年兩隊、2026 年又是兩隊，而兩年的第二名是同一支。' }],
            [{ en: 'Best Alternative Platform — shortlist of 2, new in 2026', zh: 'Best Alternative Platform——入圍 2 隊，2026 年新設' },
             { en: 'Eligibility is a property of your chassis: iGEM says the award *"covers anything that is not E. coli, S. cerevisiae, and B. subtilis"* and may go to a team working in *"plant biology chassis, mammalian cells, cell-free platform, or non-model organisms."* **But eligibility is not the award.** The first ballot question is *"How strong is the evidence that the team successfully engineered their biological system?"* — so an unusual chassis with nothing demonstrated on it scores badly. It replaced Best Plant Synthetic Biology; a High School team should also check it still exists in 2027, because it is one year old.', zh: '資格是你宿主的一個性質：iGEM 說這個獎*「涵蓋任何非 E. coli、S. cerevisiae 與 B. subtilis 的系統」*，並可能頒給使用*「植物生物宿主、哺乳類細胞、無細胞平台或非模式生物」*的隊伍。**但資格不等於獎項。**第一道評分題是*「團隊成功改造其生物系統的證據有多強？」*——所以一個不尋常的宿主上面什麼都沒做出來，分數會很差。它取代了 Best Plant Synthetic Biology；高中隊伍也應該確認它在 2027 年還存在，因為它才一歲。' }],
            [{ en: 'Best New Improved Part — no nominees published at all', zh: 'Best New Improved Part——完全沒有公布入圍者' },
             { en: 'The gate is an experiment, not a form: *"Experiments to demonstrate the significant improvement must be performed with both the existing part (as a control) and the improved part"*, and the improvement *"must be documented on the Registry for both"* pages, which must reference each other. Running the old part alongside the new one costs roughly nothing on top of running the new one — **and almost nobody does it.** This is the clearest instance on the page of a prize gated by a decision rather than by capability.', zh: '這道門檻是一個實驗，不是一份表單：*「用以證明顯著改良的實驗，必須同時對既有元件（作為對照）與改良元件執行」*，而該改良*「必須在兩者的 Registry 頁面上都記載」*，且兩頁必須互相引用。把舊元件和新元件一起跑，相對於只跑新元件，幾乎沒有額外成本——**而幾乎沒有人這麼做。**這是本頁最清楚的一個例子：一個被「決定」而不是被「能力」擋住的獎。' }],
            [{ en: 'Inclusivity Award — shortlist of 3', zh: 'Inclusivity Award——入圍 3 隊' },
             { en: 'No eligibility gate at all, which makes it the odd one out: this field is thin because few teams attempt it, not because few qualify. iGEM states the work *"does not have to relate directly to your team\'s project"* — so it competes for weeks with nothing else in your season, and that, we think, is why the queue is short.', zh: '完全沒有資格門檻，這讓它成為異類：這個項目稀薄是因為很少隊伍嘗試，不是因為很少隊伍合格。iGEM 明言這項工作*「不必與你團隊的專案直接相關」*——所以它跟你這一季的其他任何事情都不共用時間，而我們認為那正是這個隊伍短的原因。' }]
          ]) +
          h.warn({
            en: 'Two honest limits before you act on this section. **A shortlist is what the judges produced, not how many teams entered** — a short bar may mean few competed, or that many competed and few convinced anybody. iGEM does not publish entry counts per award, so we cannot tell those apart. **And a thin field is not a free prize:** iGEM will not award a prize at all if no team clears the minimum performance standard. Choosing an award because its queue is short, and then doing thin work in it, gets you nothing and costs you one of your only three slots.',
            zh: '在你依據本節行動之前，有兩個誠實的限制。**入圍名單是評審產出的東西，不是有多少隊伍報名**——一條短的條可能表示競爭者少，也可能表示很多隊伍競爭但沒幾隊說服得了任何人。iGEM 不公布各獎的報名數，所以我們無法分辨。**而稀薄的項目不是免費的獎：**如果沒有任何隊伍越過最低表現標準，iGEM 根本不會頒出那個獎。因為隊伍短而選一個獎、然後在裡面做出單薄的工作，你什麼也拿不到，還花掉了你僅有三個名額中的一個。'
          })
      });

      /* ---------------- the field ---------------- */
      out += h.sec({
        id: 'pz-field',
        kick: { en: 'The field', zh: '競爭現況' },
        h2: { en: 'Nineteen High School awards, thirteen teams, and no incumbent anywhere', zh: '十九個高中組獎項、十三支隊伍，而且沒有任何一個獎有在位者' },
        lede: {
          en: 'We expected the prizes to pile up on three or four strong teams. They do not. Read against five seasons of iGEM\'s own award records, the High School special-prize field is about as open as a field can be — the most encouraging set of numbers on this site.',
          zh: '我們原本預期獎項會堆在三、四支強隊身上。並沒有。把 iGEM 自己五個賽季的獎項紀錄讀過之後，高中組的特別獎競爭大概已經是一個競爭能有的最開放的樣子——這是本站最令人振奮的一組數字。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What we checked', zh: '我們查的事' }, w: '30%' },
              { t: { en: '2026', zh: '2026' }, w: '18%' },
              { t: { en: '2025', zh: '2025' }, w: '18%' },
              { t: { en: 'What it means for you', zh: '對你的意義' } }
            ],
            rows: [
              [{ en: 'Special Awards won by High School teams', zh: '高中組隊伍取得的特別獎' },
               { en: '19', zh: '19' }, { en: '19', zh: '19' },
               { en: 'Stable. There are nineteen chances in the section, not three.', zh: '穩定。這個組別裡有十九個機會，不是三個。' }],
              [{ en: 'Distinct teams sharing them', zh: '分享它們的不同隊伍' },
               { en: '**13**', zh: '**13**' }, { en: '**13**', zh: '**13**' },
               { en: 'The prizes do not concentrate. Most winners won exactly one.', zh: '獎項不會集中。多數得獎者就只拿了一個。' }],
              [{ en: 'Most awards taken by one team', zh: '單一隊伍拿到最多的獎數' },
               { en: '3 (two teams tied)', zh: '3（兩隊並列）' }, { en: '4', zh: '4' },
               { en: 'A sweep has never happened, and since 2026 nobody can even apply for more than three.', zh: '沒有人全包過，而且自 2026 年起，沒有人能申請超過三個。' }],
              [{ en: 'Winners with no Top-10 finish', zh: '沒有進前十名的得獎者' },
               { en: '**7 of 13**', zh: '**13 之中的 7**' }, { en: '**7 of 13**', zh: '**13 之中的 7**' },
               { en: 'The majority. A special prize is a separate contest, not a consolation for near-winners.', zh: '是多數。特別獎是一場獨立的競爭，不是給差一點的隊伍的安慰獎。' }],
              [{ en: 'Top-10 teams with no special award', zh: '沒有拿到特別獎的前十名隊伍' },
               { en: '4 of 10', zh: '10 之中的 4' }, { en: '4 of 10', zh: '10 之中的 4' },
               { en: 'The reverse holds too: a Top-10 finish does not deliver a prize.', zh: '反過來也成立：進前十名不會自動帶來一個獎。' }],
              [{ en: 'Awards that changed hands from the year before', zh: '與前一年相比換手的獎項' },
               { en: '13 of 19', zh: '19 之中的 13' }, { en: '—', zh: '—' },
               { en: 'Last year\'s winner is not the obstacle you think. In five seasons only one team ever repeated an award in consecutive years.', zh: '去年的得主並不是你以為的那道障礙。五個賽季裡只有一支隊伍曾在連續兩年拿下同一個獎。' }],
              [{ en: 'High School teams registered / accepted', zh: '高中組隊伍註冊／獲接受' },
               { en: '**152 / 147**', zh: '**152 / 147**' }, { en: '145 / 143', zh: '145 / 143' },
               { en: 'Up from 89 / 72 in 2022. The section has grown 70 % in four years, and nineteen awards have not.', zh: '相較 2022 年的 89／72。這個組別四年成長了 70%，而十九個獎項沒有。' }]
            ],
            min: 880,
            source: { en: 'Read by us from iGEM\'s own awards records for the five competitions 2022–2026, and cross-checked line by line against the published results pages including nominee lists. Excludes Best Village Project, which iGEM publishes under Village Awards rather than Special Awards.', zh: '由我們讀自 iGEM 自己 2022 至 2026 五場競賽的獎項紀錄，並與公布的結果頁逐行核對，包含入圍名單。不含 Best Village Project，因為 iGEM 把它公布在 Village Awards 而不是 Special Awards 之下。' }
          }) +
          h.kv([
            [{ en: 'The only incumbency in five seasons', zh: '五個賽季裡唯一的在位紀錄' },
             { en: '**GreatBay-SCIE took Best Integrated Human Practices three years running — 2023, 2024 and 2025 — and lost it in 2026.** No other High School team has won the same Special Award in two consecutive years since 2022. Three repeated an award non-consecutively: AIS-China (Best New Improved Part, 2023 and 2025), Lambert-GA (Best Wiki, 2022 and 2026) and BASIS-China (Safety and Security, 2023 and 2026).', zh: '**GreatBay-SCIE 連續三年拿下 Best Integrated Human Practices——2023、2024、2025——並在 2026 年失去它。**自 2022 年以來，沒有其他高中隊伍在連續兩年拿下同一個特別獎。有三支隊伍非連續地重複拿過同一個獎：AIS-China（Best New Improved Part，2023 與 2025）、Lambert-GA（Best Wiki，2022 與 2026）與 BASIS-China（Safety and Security，2023 與 2026）。' }],
            [{ en: 'Gold is common; a prize is not', zh: '金牌很常見；得獎不是' },
             { en: 'Of the 135 High School teams that earned a medal in 2026, **63 earned Gold** — so electing three awards and doing creditable work in each is a gate most of your section clears. Nineteen prizes across 147 accepted teams is about one team in eight. Electing three is a medal requirement; winning one is an outcome you can only make likely.', zh: '2026 年拿到獎牌的 135 支高中隊伍中，**63 支拿到金牌**——所以「選定三個獎並在每一個上做出說得過去的工作」是你這個組別多數人都過得了的門檻。十九個獎對 147 支獲接受的隊伍，大約是八分之一。選定三個是獎牌的要求；贏得一個是你只能提高機率的結果。' }]
          ]) +
          h.h3({ en: 'And one number that decides a different award before the season starts', zh: '還有一個數字，在賽季開始前就決定了另一個獎' }) +
          h.p({
            en: 'The Village Award is not a Special Award and needs no election — but in the High School section it works in a way almost nobody plans for. iGEM awards it over **four combined village groups**, not per village: *"High School Village Awards are given by combined Village Groups, where each group shares a broader thematic category and contains at least 10 high school teams."* So choosing a village chooses which three or four other villages you are ranked against, and the groups are nowhere near the same size.',
            zh: 'Village Award 不是特別獎，也不需要選定——但在高中組，它的運作方式幾乎沒有人會事先規劃。iGEM 是按**四個合併的 village 群組**頒發，而不是每個 village 一個：*「高中組的 Village Award 依合併的 Village 群組頒發，每個群組共享一個較廣的主題類別，並包含至少 10 支高中隊伍。」*所以選一個 village，就是在選你會被拿來跟哪三、四個其他 village 一起排名，而這些群組的大小差得很遠。'
          }) +
          h.fig({
            kind: 'cols',
            tag: { en: 'VILLAGE GROUPS', zh: 'VILLAGE 群組' },
            title: { en: 'Accepted 2026 High School teams in each of the four village groups', zh: '2026 年四個 village 群組各自獲接受的高中隊伍數' },
            sub: { en: 'One Village Award per group. Group 2 is the smallest competition and Group 3 the largest, by a factor of 1.7.', zh: '每個群組一個 Village Award。第 2 組是最小的競爭、第 3 組最大，相差 1.7 倍。' },
            data: [
              { label: { en: 'Group 2 — Climate Crisis, Conservation, Bioremediation', zh: '第 2 組——氣候危機、保育、生物復育' }, v: 28, tone: 'g' },
              { label: { en: 'Group 4 — Foundational Advance, Software & AI, Biomanufacturing, Space', zh: '第 4 組——基礎推進、軟體與 AI、生物製造、太空' }, v: 31 },
              { label: { en: 'Group 1 — Diagnostics, Infectious Diseases, Oncology, Therapeutics', zh: '第 1 組——診斷、傳染病、腫瘤、治療' }, v: 40 },
              { label: { en: 'Group 3 — Agriculture, Food & Nutrition, Fashion & Cosmetics, Art & Design', zh: '第 3 組——農業、食品與營養、時尚與化妝品、藝術與設計' }, v: 48, tone: 'r' }
            ],
            opts: { unit: { en: ' teams', zh: ' 隊' } },
            caption: { en: 'Our arithmetic: iGEM\'s published 2026 group definitions, summed over iGEM\'s own village counts for the 147 accepted High School teams. 28 + 31 + 40 + 48 = 147. Note the trap: Foundational Advance had only 2 High School teams in 2026, but it sits in a group with Biomanufacturing\'s 23 — so a thin village buys no advantage at all in the Village Award.', zh: '這是我們的算術：iGEM 公布的 2026 年群組定義，對 iGEM 自己的 village 隊數加總，涵蓋 147 支獲接受的高中隊伍。28＋31＋40＋48＝147。請注意這個陷阱：基礎推進在 2026 年只有 2 支高中隊伍，但它和生物製造的 23 隊同組——所以稀薄的 village 在 Village Award 上完全買不到任何優勢。' }
          })
      });

      /* ---------------- which three ---------------- */
      out += h.sec({
        id: 'pz-pick',
        kick: { en: 'Our pick', zh: '我們的選擇' },
        h2: { en: 'Two defensible slates, the one we would elect, and the case against repeating ourselves', zh: '兩份站得住腳的名單、我們會選的那一份，以及反對重複自己的理由' },
        lede: {
          en: 'Efficiency and independence pull against each other, and a team has to decide which it is buying. We won Best Measurement, Best Hardware and Best Integrated Human Practices in the 2026 High School section, so the interesting question is not whether that worked but whether we would elect the same three again.',
          zh: '效率與獨立性互相拉扯，而一支隊伍必須決定自己要買哪一個。我們在 2026 年高中組拿下 Best Measurement、Best Hardware 與 Best Integrated Human Practices，所以有趣的問題不是那樣有沒有用，而是我們會不會再選同樣的三個。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'slate A · efficient', zh: '名單 A · 效率' }, k: 'b' }],
              h: { en: 'Best Measurement + Best Hardware + Best Software', zh: 'Best Measurement ＋ Best Hardware ＋ Best Software' },
              p: ['The cheapest three in weeks, because the first two share most of their evidence: **one body of work — build an instrument, then characterise it against a commercial one — is the substance of both a Hardware entry and a Measurement entry.** The third leg is dry, so nothing that goes wrong on a bench can reach it, and it meets a checklist rather than a crowd.',
                  'The risk is the mirror of the saving. One late rig loses two prizes at once, and with them the Gold, because all three elected awards must pass.'],
              foot: { en: '2026 High School shortlists: 5, 6 and 2.', zh: '2026 年高中組入圍名單：5、6、2。' } },
            { chips: [{ t: { en: 'slate B · independent', zh: '名單 B · 獨立' }, k: 'g' }],
              h: { en: 'Best Measurement + Best Integrated Human Practices + Best Education', zh: 'Best Measurement ＋ Best Integrated Human Practices ＋ Best Education' },
              p: ['Three activities, three groups of people, and no single failure that takes out more than one leg. Neither of the last two depends on an experiment working, so a season that loses its construct in July still has two live entries and an honest account of the third.',
                  'It buys no efficiency at all. Three legs is three sets of weeks, three sets of records and three sets of people to manage, and for a small team this is the slate that quietly eats September.'],
              foot: { en: '2026 High School shortlists: 5, 5 and 5.', zh: '2026 年高中組入圍名單：5、5、5。' } }
          ]) +
          h.take({ en: 'What we would elect for 2027, and why', zh: '我們 2027 年會選什麼，以及為什麼' },
            { en: '**Slate A, with Best Measurement as the General Bio Engineering leg.** Not because measurement is our habit — because of what the published ballot questions say. Best Measurement asks whether the measurement could be reproduced by others, whether the protocols are described well, whether it could be useful to other projects, and whether the process was validated and calibrated appropriately. **None of the four asks whether the thing being measured worked.** The other five awards in that group all do, in one form or another: a basic part that works, a composite part that works, an improved part beaten in a head-to-head against its parent, a collection that completes a functional system, or a model with data behind it. The rule forces one leg into that group. Put it where a bad July cannot reach it.', zh: '**名單 A，由 Best Measurement 擔任「一般生物工程」那一腳。**不是因為量測是我們的習慣——而是因為公布的評分題這麼說。Best Measurement 問的是：這個量測其他人能否重現、流程是否描述清楚、對其他專案是否有用、以及流程是否被適當地驗證與校正。**四道題沒有一道在問「被量測的那個東西有沒有成功」。**那一組裡另外五個獎都在問，形式各異：一個能用的基礎元件、一個能用的複合元件、一個在正面對決中勝過母元件的改良元件、一個完成了可運作系統的元件集，或一個背後有資料的模型。規則強迫你在那一組放一腳。把它放在「七月出事也碰不到」的地方。' }) +
          h.h3({ en: 'The case against electing the three we already won', zh: '反對選我們已經贏過的那三個的理由' }) +
          h.p({
            en: 'Two of our 2026 prizes reappear in slate A, which deserves suspicion rather than comfort: a team that picks the awards it already won is picking its own past. Here is the argument against, as honestly as we can put it.',
            zh: '我們 2026 年的獎裡有兩個又出現在名單 A，這值得懷疑而不是安心：一支挑「自己已經贏過的獎」的隊伍，挑的是自己的過去。以下盡可能誠實地寫下反方論點。'
          }) +
          h.ul([
            { en: '**Repeating is historically rare.** In five seasons, exactly one High School team won the same Special Award in consecutive years, and that run ended in 2026. Thirteen of 2026\'s nineteen High School awards changed hands. Whatever the mechanism — judges, rotation, or teams simply turning over every year — the base rate for a repeat is low.', zh: '**重複在歷史上很罕見。**五個賽季裡，剛好只有一支高中隊伍在連續兩年拿下同一個特別獎，而那段紀錄在 2026 年結束。2026 年高中組十九個獎裡有十三個換手。不管機制是什麼——評審、輪替，或單純因為隊伍每年都在換——重複的基礎機率很低。' },
            { en: '**Dropping Integrated Human Practices gives up what we were best at.** Our 2026 architecture was rewritten by its human-practices work in April, before most of the bench work existed, and we think that order of events is what the award recognised. The ballot asks *"How well was the Human Practices work integrated throughout the project?"* — and "throughout" is exactly what an April rewrite answers. Slate B keeps it.', zh: '**放掉 Integrated Human Practices，等於放掉我們最擅長的那件事。**我們 2026 年的架構是在四月被人類實踐工作改寫的，當時大部分實驗還不存在；我們認為那個事件順序正是那個獎所表彰的。評分題問的是*「人類實踐工作在整個專案中被整合得多好？」*——而一次四月的改寫，正好回答了「整個」這兩個字。名單 B 保留了它。' },
            { en: '**Best Software is a bet on one person.** A dry leg is only uncorrelated with the bench if somebody can write *and document* a tool a stranger runs — six ballot questions\' worth, including standards compatibility and whether it integrates with external tools. If that person leaves, or has exams in August, the leg chosen for independence becomes the leg that fails alone and takes the Gold with it.', zh: '**Best Software 是押在一個人身上。**一條乾式的腳要真正與實驗檯無關，前提是有人寫得出、**也記錄得出**一個陌生人跑得起來的工具——那是六道評分題的量，包含與標準的相容性、以及能否與外部工具整合。如果那個人離隊，或八月要考試，那條為了獨立性而選的腳，就會成為唯一失敗的那一腳，並且帶走金牌。' },
            { en: '**And the caveat about all of it.** We are the team that benefited from this reasoning in 2026, so the paragraph above arguing for Measurement is the sentence on this page most likely to be self-serving. Judging has reasons we cannot see, and iGEM deliberately does not publish the wording behind each score. Nothing here is a mechanism, and no slate on this page will put you on a shortlist.', zh: '**還有一個關於上述一切的附註。**我們是 2026 年從這套推論中受益的那支隊伍，所以上面替 Measurement 說話的那一段，大概是本頁最可能帶有自利傾向的一句。評審有我們看不見的理由，而 iGEM 刻意不公布每個分數背後的文字。這裡沒有任何東西是機制，而本頁上的任何一份名單都不會讓你進入入圍名單。' }
          ])
      });

      /* ---------------- what each costs ---------------- */
      out += h.sec({
        id: 'pz-cost',
        kick: { en: 'Cost', zh: '成本' },
        h2: { en: 'What each award costs in weeks, and which pairs share their evidence', zh: '每個獎用週數計算的成本，以及哪些成對的獎共用證據' },
        lede: {
          en: 'The question that actually decides a slate is not which awards you would like, but which two can be served by one body of work — and the same column tells you where your risk is correlated.',
          zh: '真正決定一份名單的問題，不是你想要哪些獎，而是哪兩個獎能靠同一份工作被滿足——而同一欄也告訴你，你的風險在哪裡是相關的。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Award', zh: '獎項' }, w: '23%' },
              { t: { en: 'Group', zh: '分組' }, w: '13%' },
              { t: { en: 'Weeks', zh: '週數' }, w: '10%', num: true },
              { t: { en: 'Shares its work with — and what that costs you', zh: '與誰共用工作——以及那讓你付出什麼' } }
            ],
            rows: [
              [{ en: 'Best Measurement', zh: 'Best Measurement' }, { en: 'Gen Bio Eng', zh: '一般生物工程' }, { en: '6–10', zh: '6–10' },
               { en: 'Best Hardware, if you built the instrument you are characterising, and Best Model, because a fitted model needs a calibrated readout first. The safest leg on the page.', zh: '與 Best Hardware（前提是你要特性化的儀器是你自己做的），以及 Best Model（因為擬合模型需要先有校正過的讀值）。本頁最安全的一腳。' }],
              [{ en: 'Best Hardware', zh: 'Best Hardware' }, { en: 'Specialization', zh: '專項' }, { en: '8–14', zh: '8–14' },
               { en: 'Best Measurement. The strongest pairing here: one rig, honestly characterised, is the substance of both. The cost is that a late rig fails both at once.', zh: '與 Best Measurement。這裡最強的配對：一台誠實特性化過的裝置，就是兩者的實質內容。代價是裝置一延，兩個同時失敗。' }],
              [{ en: 'Best Software', zh: 'Best Software' }, { en: 'Specialization', zh: '專項' }, { en: '5–10', zh: '5–10' },
               { en: 'Nothing, which is the point — and the cost is that nothing can rescue it either. Barred entirely if you are in the Software & AI Village.', zh: '不與任何人共用，而那正是重點——代價是也沒有任何東西能救它。如果你在 Software & AI Village，完全沒有資格。' }],
              [{ en: 'Best Integrated Human Practices', zh: 'Best Integrated Human Practices' }, { en: 'Specialization', zh: '專項' }, { en: '10–16', zh: '10–16' },
               { en: 'Best Education and Best Sustainable Development Impact in people and travel, but not in evidence: the judges want a design that changed, not an audience reached.', zh: '在人力與交通上與 Best Education 及 Best Sustainable Development Impact 共用，但不共用證據：評審要的是一個被改掉的設計，不是一個被觸及的受眾。' }],
              [{ en: 'Best Education', zh: 'Best Education' }, { en: 'Specialization', zh: '專項' }, { en: '8–14', zh: '8–14' },
               { en: 'Best Integrated Human Practices, in logistics only. iGEM says the activities need not relate to your project, so this leg can start in January before the science exists.', zh: '只在後勤上與 Best Integrated Human Practices 共用。iGEM 說這些活動不必與你的專案相關，所以這一腳可以在一月、科學還不存在時就開始。' }],
              [{ en: 'Best Part Collection', zh: 'Best Part Collection' }, { en: 'Gen Bio Eng', zh: '一般生物工程' }, { en: '10–18', zh: '10–18' },
               { en: 'Best New Basic Part and Best New Composite Part — one cloning campaign produces all three. **Also the most correlated trio on the page: one failed assembly damages all of them.**', zh: '與 Best New Basic Part 及 Best New Composite Part——一次選殖行動產出三份作品。**也是本頁相關性最高的三個：一次失敗的組裝就同時損害三者。**' }],
              [{ en: 'Best Model', zh: 'Best Model' }, { en: 'Gen Bio Eng', zh: '一般生物工程' }, { en: '6–12', zh: '6–12' },
               { en: 'Best Measurement. Note iGEM accepts "experimental or other relevant data", so published data is eligible — but a model with no data of your own was the commonest weakness we saw in 2026.', zh: '與 Best Measurement。請注意 iGEM 接受「實驗資料或其他相關資料」，所以已發表的資料也合格——但「沒有自家資料的模型」是我們 2026 年看到最常見的弱點。' }],
              [{ en: 'Best Alternative Platform', zh: 'Best Alternative Platform' }, { en: 'Specialization', zh: '專項' }, { en: '0 extra', zh: '0 額外' },
               { en: 'Nothing. Eligibility is a property of a chassis you already chose, but the award still asks for strong evidence that you engineered it successfully — so the weeks are the project\'s, not the award\'s.', zh: '不與任何人共用。資格是你本來就選定的宿主的一個性質，但這個獎仍然要求「你成功改造了它」的有力證據——所以那些週數屬於專案，不屬於這個獎。' }],
              [{ en: 'Safety and Security Award', zh: 'Safety and Security Award' }, { en: 'Specialization', zh: '專項' }, { en: '4–8', zh: '4–8' },
               { en: 'The safety forms you file anyway — the cheapest entry on the table, and the one most often left as a form rather than made into the contribution the ballot asks for.', zh: '與你本來就要提交的安全表單共用——本表最便宜的作品，也是最常停留在「一份表單」、而沒有做成評分題所要求的「貢獻」的那一個。' }],
              [{ en: 'Inclusivity Award', zh: 'Inclusivity Award' }, { en: 'Specialization', zh: '專項' }, { en: '6–12', zh: '6–12' },
               { en: 'Best Education in audience, not in evidence. A three-team shortlist in 2026 and no eligibility gate, so the barrier is purely that the weeks compete with nothing else.', zh: '在受眾上與 Best Education 共用，在證據上不共用。2026 年入圍三隊、沒有資格門檻，所以障礙純粹是那些週數跟別的事情互不相干。' }],
              [{ en: 'Best Entrepreneurship', zh: 'Best Entrepreneurship' }, { en: 'Specialization', zh: '專項' }, { en: '8–14', zh: '8–14' },
               { en: 'Nothing on the bench. It needs a number from outside — a cost, a price, a market size somebody else will stand behind — and five ballot questions, more than most.', zh: '實驗檯上不共用。它需要一個外部數字——一個成本、一個價格、一個別人願意背書的市場規模——而且有五道評分題，比多數獎都多。' }],
              [{ en: 'Best Sustainable Development Impact', zh: 'Best Sustainable Development Impact' }, { en: 'Specialization', zh: '專項' }, { en: '8–14', zh: '8–14' },
               { en: 'Best Integrated Human Practices in fieldwork. A six-team shortlist, and the entry most often weakened by claiming an impact the project never measured — the ballot asks for "measurably".', zh: '在田野工作上與 Best Integrated Human Practices 共用。入圍六隊，也是最常因為「主張一個專案從未量測過的影響」而被弱化的作品——評分題要求的是「可量測地」。' }]
            ],
            min: 1000,
            source: { en: 'Week ranges are our estimates for a High School team of roughly ten to twenty people, not iGEM figures. The group column, the Software & AI restriction and every quoted phrase are iGEM\'s.', zh: '週數範圍是我們針對一支約十到二十人的高中隊伍所做的估計，不是 iGEM 的數字。分組欄、Software & AI 的限制與每一句引文都是 iGEM 的。' }
          }) +
          h.note({
            en: 'Read the last column as a risk column as well as a saving column. The three part awards share the most work and carry the most correlated risk: a team that elects Best New Basic Part, Best New Composite Part and Best Part Collection has written one bet three times, and because all three elected awards must pass for Gold, one failed assembly run costs the medal. **Best Measurement with Best Hardware is the pairing we would take, because the shared thing is an instrument you control rather than a transformation you are hoping for.**',
            zh: '把最後一欄同時當成風險欄來讀，而不只是節省欄。三個元件獎共用最多工作，也帶有最高的相關風險：一支選了 Best New Basic Part、Best New Composite Part 與 Best Part Collection 的隊伍，是把同一個賭注寫了三次，而因為三個選定的獎都必須過才有金牌，一次失敗的組裝就會賠掉整面獎牌。**Best Measurement 搭 Best Hardware 是我們會選的配對，因為共用的東西是一台你控制得了的儀器，而不是一次你還在期待的轉形。**'
          })
      });

      /* ---------------- how teams lose one ---------------- */
      out += h.sec({
        id: 'pz-trap',
        kick: { en: 'Traps', zh: '陷阱' },
        h2: { en: 'Five ways a team loses an award it had already earned', zh: '一支隊伍丟掉自己已經拿到的獎的五種方式' },
        lede: {
          en: 'Every one of these is administrative rather than scientific, which is why they are worth a section: they are the only losses on this site that cost nothing to prevent. Each is backed by a sentence iGEM wrote for its judges.',
          zh: '以下每一項都是行政性的、而不是科學性的，這正是它們值得一節的原因：它們是本站唯一一種「預防起來不花任何成本」的損失。每一項都有一句 iGEM 寫給評審看的話作後盾。'
        },
        body:
          h.phases([
            { h: { en: 'Not electing it', zh: '沒有把它選上' },
              p: { en: 'The three go on the Judging Form, and you cannot name a fourth. An award you did the work for and did not elect does not become one of your three, however good the evidence is.', zh: '三個要填在評審表上，而你不能填第四個。一個你做了工作卻沒有選定的獎，不管證據多好，都不會成為你的三個之一。' },
              items: [
                { en: 'Decide the three in **February**, not September, because the choice changes what you record all season — and because you only get three, deciding late means deciding with no information you did not already have in February.', zh: '在**二月**決定那三個，不要等到九月，因為那個選擇會改變你整季記錄的內容——而且因為你只有三個名額，晚決定等於是在「沒有任何二月時還不知道的新資訊」的情況下決定。' },
                { en: 'iGEM\'s own advice on the form: *"This should be a team activity... This should not be the responsibility of a single person."* And review it at least three days before the freeze, because fixing a wiki page takes time.', zh: 'iGEM 自己對這份表單的建議：*「這應該是一項團隊活動……不應該是某一個人的責任。」*而且至少在凍結日前三天就要複查，因為修一個 wiki 頁面需要時間。' }
              ],
              done: { en: 'Three award names on a dated page in February, and nobody surprised by them in August.', zh: '二月有一頁標上日期、寫著三個獎名，而到了八月沒有人對它們感到意外。' } },
            { h: { en: 'Putting the evidence somewhere the judge will not look', zh: '把證據放在評審不會看的地方' },
              p: { en: 'Each elective award has a **Standard URL** — `/measurement`, `/model`, `/hardware`, `/software`, `/education`, `/inclusivity`, `/human-practices`, `/entrepreneurship`, `/safety-and-security`, `/sustainability`, `/alternative-platform` — and the part awards are judged on the Registry entry instead. iGEM is blunt about what happens if the work is elsewhere.', zh: '每個選定類的獎都有一個 **Standard URL**——`/measurement`、`/model`、`/hardware`、`/software`、`/education`、`/inclusivity`、`/human-practices`、`/entrepreneurship`、`/safety-and-security`、`/sustainability`、`/alternative-platform`——而元件類的獎改以 Registry 條目評審。對於「工作放在別處會怎樣」，iGEM 說得很直接。' },
              items: [
                { en: '*"If sufficient information to meet a specific medal criterion or award cannot be found under its corresponding wiki page, you can choose to consider the requirement unmet."* That is written to judges, about your page.', zh: '*「如果在對應的 wiki 頁面下找不到足以達成某個獎牌條件或獎項的資訊，你可以選擇視該要求為未達成。」*那是寫給評審的，講的是你的頁面。' },
                { en: '*"Judges are not required to independently seek out additional information about a team\'s effort for an award."* You may link onward to supplementary pages on your own wiki, but **not** to external sites: *"Content on sites external to iGEM servers cannot be judged."*', zh: '*「評審沒有義務自行去尋找關於某隊伍為某個獎所做努力的額外資訊。」*你可以從標準頁連到自己 wiki 上的補充頁，但**不能**連到外部網站：*「位於 iGEM 伺服器之外的網站上的內容無法被評審。」*' },
                { en: 'For part awards: *"All part-related documentation must be on the iGEM Registry... evaluate only what is documented on the Registry, not the Team Wiki or any external site."*', zh: '元件類獎項：*「所有與元件相關的文件都必須在 iGEM Registry 上……只評審記載在 Registry 上的內容，不評審隊伍 wiki 或任何外部網站。」*' }
              ],
              done: { en: 'One page per elected award, each standing on its own, each with the number on the first screen.', zh: '每個選定的獎一頁，每一頁都能獨立讀懂，而且第一個畫面上就有數字。' } },
            { h: { en: 'Claiming more than the page shows', zh: '主張超過頁面所展示的內容' },
              p: { en: 'The most visible weakness in the thirty wikis we read, and the one that costs an award otherwise within reach. A claim a judge checks and finds overstated contaminates the claims beside it.', zh: '這是我們讀過的三十個 wiki 裡最顯眼的弱點，也是最常讓一個原本拿得到的獎落空的原因。一個評審查核後發現被誇大的主張，會污染它旁邊的主張。' },
              items: [
                { en: 'The handbook gives a High School team explicit cover for the honest version: *"It is better that a team presents and acknowledges limited, qualitative assessments than they attempt to report flawed quantitative measurements."*', zh: '手冊明白給了高中隊伍一個「誠實版本」的掩護：*「一支隊伍呈現並承認有限的、定性的評估，比它試圖報告有缺陷的定量量測來得好。」*' },
                { en: 'Walk every sentence on the three award pages and add the clause that says what it is **not** evidence for. One afternoon in late August, and the highest-value hour on the calendar.', zh: '把三個獎頁上的每一句話走過一次，為它加上「它**不**構成什麼的證據」那個子句。八月底一個下午，也是整個行程裡價值最高的一小時。' }
              ],
              done: { en: 'A reader who stops at any single sentence on any of the three pages has not been misled.', zh: '任何在三個頁面任一句話處停下的讀者，都沒有被誤導。' } },
            { h: { en: 'Missing the artefact the award is judged on', zh: '漏掉那個「獎項實際評審的對象」' },
              p: { en: 'Several awards are judged on a thing, not a page: a Registry entry, a GitLab repository, a bill of materials. The artefact is not the proof of the work. It is the condition for the work being looked at.', zh: '有幾個獎評審的是一個東西，不是一個頁面：一個 Registry 條目、一個 GitLab 倉庫、一份物料清單。那個產出不是工作的證明，它是工作「會被看一眼」的前提。' },
              items: [
                { en: 'Best Software: the source must be in the team\'s repository on iGEM\'s GitLab, with an OSI licence, a README, pinned dependencies and reproducible build instructions. *"If any are missing, the submission has not met the requirements for the award."*', zh: 'Best Software：原始碼必須在團隊於 iGEM GitLab 上的倉庫裡，附 OSI 授權、README、鎖定的依賴版本與可重現的建置說明。*「只要缺少任何一項，該件就未達成此獎的要求。」*' },
                { en: 'In 2026 the wiki, the Judging Form and the Registry part pages each had their own freeze, and iGEM warns *"no extensions will be granted. (No exceptions!)"* A Registry submission is not a post-freeze task.', zh: '2026 年 wiki、評審表與 Registry 元件頁各有自己的凍結日，而 iGEM 警告*「不會給任何延期。（沒有例外！）」*Registry 繳交不是凍結日之後的工作。' },
                { en: 'Put each elected award\'s artefact on the calendar **eight weeks before the freeze**, because a release needs somebody outside to try it.', zh: '把每個選定獎項的產出排在**凍結日前八週**，因為一次釋出需要外部的人去試用它。' }
              ],
              done: { en: 'Each of the three pages ends in a link to something downloadable, runnable or orderable.', zh: '三個頁面各自以一個「可下載、可執行或可訂購」的連結結尾。' } },
            { h: { en: 'Treating the wiki and the video as a side quest', zh: '把 wiki 與影片當成支線任務' },
              p: { en: 'Best Wiki and Best Presentation cannot be elected, which tempts teams to deprioritise them. That is backwards: *"Their scores also contribute to the Project Awards"*, and the Project Awards are the Top 10 and the Grand Prize.', zh: 'Best Wiki 與 Best Presentation 不能被選定，這會誘使隊伍把它們的優先度降低。那是反的：*「它們的分數同時也計入專案獎」*，而專案獎就是前十名與首獎。' },
              items: [
                { en: 'Project Awards use *"a weighted average of these Rubric categories: Project, Presentation, and Wiki"* — two of the three sections are these two awards. The weights are not published.', zh: '專案獎使用*「以下評分表類別的加權平均：專案、簡報、Wiki」*——三個區塊中有兩個就是這兩個獎。權重未公布。' },
                { en: 'Judges read the wiki and the 15-minute video **before** the Jamboree, and the session itself is 25 minutes: five to summarise, twenty of questions. Six judges, who then hold a ten-minute private discussion.', zh: '評審在 Jamboree **之前**就讀過 wiki 與那支 15 分鐘的影片，而評審會議本身是 25 分鐘：五分鐘摘要、二十分鐘問答。六位評審，之後再進行十分鐘的閉門討論。' },
                { en: 'Write the wiki well because it carries your other three awards. The team shortlisted for both of these in 2026 and winning neither was us, in a field of ten each.', zh: '把 wiki 寫好，是因為它承載你另外三個獎。2026 年同時入圍這兩個、而兩個都沒拿到的那支隊伍是我們，而且各是十隊的競爭。' }
              ],
              done: { en: 'Nobody on the team can name Best Wiki as one of your three — and nobody treats it as optional either.', zh: '團隊裡沒有人會把 Best Wiki 說成你的三個之一——也沒有人把它當成可有可無。' } }
          ])
      });

      /* ---------------- new in 2026 ---------------- */
      out += h.sec({
        id: 'pz-honest',
        kick: { en: 'New in 2026', zh: '2026 年新規定' },
        h2: { en: 'The handbook now tells judges to report AI-written substance as misconduct', zh: '手冊現在要求評審把 AI 寫出來的實質內容當成不當行為上報' },
        lede: {
          en: 'Two sections are new in the 2026 Judge Handbook — Academic Integrity and Responsible AI usage — and a 2027 team should read them as a design constraint on how the wiki gets written, not as a warning about cheating. We quote them in full because paraphrase would soften them.',
          zh: '2026 年評審手冊有兩節是新的——學術誠信與負責任的 AI 使用——而一支 2027 年的隊伍應該把它們當成「wiki 該怎麼寫」的設計限制來讀，而不是當成一個關於作弊的警告。我們完整引用，因為改寫會讓它們變軟。'
        },
        body:
          h.warn({
            en: '*"The wiki is a scientific record, and the team is accountable for every claim, citation, figure, and line of code published under its name, however it was produced."* Four things are named as violations that judges **should report to the Responsible Conduct Committee**: **fabricated or inaccurate citations** (*"Every cited work must resolve to a real reference... and the cited claim must actually appear in that source"*); **misrepresented data figures** (*"AI-generated, AI-modified, or AI-\'cleaned\' evidentiary figures are never allowed"*); **invented quotes** (*"AI-generated \'representative\' quotes are not allowed"*); and **plagiarism**, including from a generative model. Source: 2026 Judge Handbook, p. 94.',
            zh: '*「wiki 是一份科學紀錄，而團隊對以其名義發表的每一項主張、引用、圖表與每一行程式碼負責，不論它是怎麼產生的。」*有四件事被明列為違規，評審**應向負責行為委員會（RCC）上報**：**編造或不正確的引用**（*「每一份被引用的著作都必須指向一份真實的參考文獻……而且被引用的主張必須真的出現在那個來源裡」*）；**被誤導性呈現的數據圖表**（*「由 AI 生成、被 AI 修改，或被 AI『清理』過的證據性圖表，永遠不被允許」*）；**虛構的引述**（*「由 AI 生成的『代表性』引述不被允許」*）；以及**抄襲**，包含抄自生成式模型。來源：2026 年評審手冊第 94 頁。'
          }) +
          h.p({
            en: 'The AI rule is not a ban, and reading it as one will cost a team work it is allowed to do. iGEM draws the line at **substance**: *"Teams are not asked to avoid generative AI, but to use it responsibly and disclose it. Polishing wording, fixing grammar, translating, suggesting structure, drafting alt text, writing build/infrastructure code, and generating decorative illustrations are acceptable uses. Having a model author the substance of the wiki — the reasoning, the choices about what the project did and why it matters — is not: that should be in the team\'s own voice. Using AI to generate scientific claims, data figures, simulated results, or citations is research misconduct."*',
            zh: '這條 AI 規則不是禁令，而把它讀成禁令會讓一支隊伍白白放棄自己被允許做的工作。iGEM 畫的線在**實質內容**：*「我們不要求隊伍避免使用生成式 AI，而是要求負責任地使用並揭露。潤飾用詞、修正語法、翻譯、建議結構、草擬替代文字、撰寫建置／基礎設施程式碼，以及產生裝飾性插圖，都是可接受的用法。讓模型撰寫 wiki 的實質內容——推理、以及關於這個專案做了什麼、為什麼重要的那些判斷——則不可以：那應該用團隊自己的聲音。用 AI 產生科學主張、數據圖表、模擬結果或引用，是研究不當行為。」*'
          }) +
          h.kv([
            [{ en: 'There is now a form field for it', zh: '現在有一個表單欄位' },
             { en: 'The 2026 Attributions Form carries an explicit **"AI Tool Use"** field alongside Team Member Contributions, iGEM & Partner Offers, External Contributions and Project Timeline. And iGEM\'s own advice on that form: *"Judges cross-check this against the rest of your project, and overclaiming is the fastest way to lose their trust."*', zh: '2026 年的致謝表有一個明確的 **「AI 工具使用」**欄位，與團隊成員貢獻、iGEM 與合作夥伴提供、外部貢獻、專案時程並列。而 iGEM 自己對那份表單的建議是：*「評審會把它與你專案的其他部分交叉比對，而誇大是失去他們信任最快的方式。」*' }],
            [{ en: 'The judges are held to it too', zh: '評審也受同一條規則約束' },
             { en: '*"Do not use AI tools to generate substantive judging assessments, comments, or feedback on your behalf. Any evaluation you submit must reflect your own judgment."* The rule runs in both directions, which is the clearest signal of how seriously it is meant.', zh: '*「不要用 AI 工具代你產生實質性的評審評估、評語或回饋。你提交的任何評價都必須反映你自己的判斷。」*這條規則雙向適用，而那是「它有多認真」最清楚的訊號。' }],
            [{ en: 'What this means for how you write', zh: '這對你怎麼寫意味著什麼' },
             { en: 'The practical test is whether a judge reading a paragraph can tell that a person decided something in it. **A page that is fluent and says nothing specific now carries a risk it did not carry in 2025**, because a judge who suspects the substance was not the team\'s has a named procedure to follow. The defence is not formality; it is specificity: your numbers, your instrument, your named practitioner, the thing that surprised you, the sentence that admits what you could not do.', zh: '實務上的檢驗是：一位讀到某段文字的評審，能不能看出裡面有一個人做了某個判斷。**一個流暢但沒說出任何具體事情的頁面，現在帶有 2025 年所沒有的風險**，因為一位懷疑實質內容不是隊伍自己的評審，有一套具名的程序可以走。防線不是形式化，而是具體性：你的數字、你的儀器、你具名的從業者、那件讓你意外的事、那句承認你做不到什麼的話。' }]
          ]) +
          h.take({ en: 'The one line from the handbook worth pinning above a desk', zh: '手冊裡值得釘在桌前的一句話' },
            { en: '*"A wiki that looks polished but rests on a plausible-but-fabricated reference list, an AI-generated \'representative\' gel, or numbers that correspond to no real experiment has misrepresented the team\'s work, and should be treated as such."* — 2026 Judge Handbook, p. 95.', zh: '*「一個看起來精緻、但建立在一份貌似合理卻是編造的參考文獻清單、一張 AI 生成的『代表性』電泳圖，或一些對應不到任何真實實驗的數字之上的 wiki，已經誤述了團隊的工作，而且應該被如此對待。」*——2026 年評審手冊第 95 頁。' })
      });

      /* ---------------- our five ideas ---------------- */
      out += h.sec({
        id: 'pz-map',
        kick: { en: 'Applied', zh: '實際套用' },
        h2: { en: 'The three we would elect for each of our own five candidate topics', zh: '我們自己五個候選題目，各自會選的那三個獎' },
        lede: {
          en: 'The five topics are on [Five ideas](#x-ideas), one page each, and none has been run. The election below is as much a test of the topics as of the rule: a topic whose three natural awards all come out of one activity has one point of failure, and since all three elected awards must pass for Gold, that is a real cost.',
          zh: '五個題目在[五個題目](#x-ideas)，各一頁，而且都還沒有被做過。以下的選定既是對規則的檢驗，也同樣是對這些題目的檢驗：一個「三個自然獎項全出自同一件活動」的題目只有一個失敗點，而既然三個選定的獎都必須過才有金牌，那是一個真實的代價。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Topic', zh: '題目' }, w: '13%' },
              { t: { en: 'Gen Bio Eng leg', zh: '一般生物工程那一腳' }, w: '16%' },
              { t: { en: 'Two Specializations', zh: '兩個專項' }, w: '22%' },
              { t: { en: 'Why these three, and what is wrong with them', zh: '為什麼是這三個，以及它們哪裡不對' } }
            ],
            rows: [
              [{ en: '[NULLSET](#x-control)', zh: '[NULLSET](#x-control)' },
               { en: 'Best Part Collection', zh: 'Best Part Collection' },
               { en: 'Best Software · Safety and Security', zh: 'Best Software · Safety and Security' },
               { en: 'The project *is* a collection, so that leg is free — but read the ballot question before relaxing: *"Did the team finish building a functional system using this collection?"* A collection of deliberately dead parts has to answer that question carefully, and the page should say how. The floor-calculation script is a genuine tool, and a published account of what a negative control can and cannot rule out is a biosafety **contribution** rather than a form.', zh: '這個專案**本身**就是一個元件集，所以那一腳是免費的——但在放鬆之前先讀評分題：*「團隊是否用這個元件集完成了一個可運作的系統？」*一個「刻意做成壞的」元件集必須謹慎地回答那個問題，而那一頁應該寫明怎麼回答。地板計算程式是一個真正的工具，而「一個陰性對照能排除什麼、不能排除什麼」的公開說明，是一項生物安全**貢獻**而不是一份表單。' }],
              [{ en: '[DRYRUN](#x-shelf)', zh: '[DRYRUN](#x-shelf)' },
               { en: 'Best Measurement', zh: 'Best Measurement' },
               { en: 'Best Hardware · Best Education', zh: 'Best Hardware · Best Education' },
               { en: 'The result is a decay curve, which is a measurement in the exact sense the four ballot questions mean. The humidity and temperature boxes are an instrument another team can build from a bill of materials — and *"did the team conduct user testing"* is answerable, because another team can run the boxes. **We first put Best Alternative Platform here and were wrong:** a dried cell-free reaction is eligible, but that award\'s first question asks for strong evidence of successful engineering, and ageing a reaction that already works is not that.', zh: '它的結果是一條衰減曲線，而那正是四道評分題所指的那種量測。濕度與溫度盒是一台別的隊伍能依物料清單做出來的儀器——而*「團隊是否進行了使用者測試」*是答得出來的，因為別的隊伍跑得動那些盒子。**我們一開始把 Best Alternative Platform 放在這裡，那是錯的：**一個乾燥的無細胞反應是合格的，但那個獎的第一道題要求「成功改造的有力證據」，而把一個本來就能用的反應拿去老化，並不是那件事。' }],
              [{ en: '[SPLITFISH](#x-assay)', zh: '[SPLITFISH](#x-assay)' },
               { en: 'Best Measurement', zh: 'Best Measurement' },
               { en: 'Best Integrated Human Practices · Best Sustainable Development Impact', zh: 'Best Integrated Human Practices · Best Sustainable Development Impact' },
               { en: 'A pre-registered method comparison against an accredited laboratory is the strongest measurement entry any of the five could make: it answers *"could the measurement(s) be reproduced by other iGEM teams"* with somebody else\'s data. The practitioners — the laboratory, the inspectors, the people who sell the fish — are the design rather than an audience. **Risk: the only slate here whose third leg claims an impact, and the ballot asks whether the work has "measurably and significantly" addressed an SDG.**', zh: '一場對照認證實驗室、事先登記過的方法比較，是五個題目裡最強的一份量測作品：它用別人的資料回答了*「這個量測其他 iGEM 隊伍能否重現」*。那些從業者——實驗室、稽查人員、賣魚的人——是設計本身，不是受眾。**風險：這是唯一一份第三腳在主張影響力的名單，而評分題問的是這份工作是否「可量測且顯著地」處理了某個永續發展目標。**' }],
              [{ en: '[ENDOREAD](#x-reader)', zh: '[ENDOREAD](#x-reader)' },
               { en: 'Best Part Collection', zh: 'Best Part Collection' },
               { en: 'Best Software · (no third)', zh: 'Best Software ·（沒有第三個）' },
               { en: 'Forty-eight designed sensors released with their sequences is a collection by construction, and the design and analysis code is the other half of the project. The honest problem is that **this topic has no natural third leg**: everything it produces is either a part or a script, and both come off the same keyboard. Since Gold needs all three to pass, that is a reason to take this topic only if a second strand of work exists beside it.', zh: '四十八個設計好、連序列一起釋出的感測器，從構造上就是一個元件集，而設計與分析的程式碼是這個專案的另外一半。誠實的問題是：**這個題目沒有自然的第三腳**——它產出的東西要嘛是元件、要嘛是程式，而兩者出自同一副鍵盤。既然金牌需要三個全過，這就是一個理由：只有在它旁邊還有第二條工作線時才選它。' }],
              [{ en: '[SEEDTEST](#x-seed)', zh: '[SEEDTEST](#x-seed)' },
               { en: 'Best Measurement', zh: 'Best Measurement' },
               { en: 'Safety and Security · Best Model', zh: 'Safety and Security · Best Model' },
               { en: 'The whole result is a specificity measurement across a family panel, with a dose–response built in. A published specificity failure in a sensor class people are building therapies on is a biosafety contribution in the strict sense the ballot asks for — *"well-characterized and/or well-validated"* — and it is the result the field needs and nobody wants to publish. **Note this slate has two Gen Bio Eng legs, which is allowed because the third may come from either list; but it means two of three depend on the bench.**', zh: '它的整個結果就是一次跨家族 panel 的專一性量測，內建劑量反應。在一個「別人正在拿它做療法」的感測器類別裡公開一次專一性失敗，正是評分題所要求的那種嚴格意義上的生物安全貢獻——*「被充分特性化與／或充分驗證」*——而那是這個領域需要、卻沒有人想公開的結果。**請注意這份名單有兩腳在「一般生物工程」，這是允許的，因為第三個可以來自任一清單；但那意味著三個裡有兩個依賴實驗檯。**' }]
            ],
            min: 1040,
            source: { en: 'Our elections, not iGEM\'s. The group assignments and every quoted ballot question are iGEM\'s; which three we would elect, and the risk noted against each, are ours. We have not run any of the five topics.', zh: '這些選定是我們的，不是 iGEM 的。分組與每一句引用的評分題都是 iGEM 的；我們會選哪三個、以及每一列所註記的風險，是我們的。這五個題目我們都沒有做過。' }
          }) +
          h.take({ en: 'The test this table is really running', zh: '這張表真正在跑的檢驗' },
            { en: 'Look down the last two columns. **A topic whose three natural awards all come out of one activity is a topic with one point of failure**, and ENDOREAD fails that openly — a collection and a script are the same keyboard. DRYRUN passes best: a curve, a box and a set of workshops break for three different reasons. If you are choosing between topics and they score the same on the [roadmap sheet](#x-roadmap), this is a fair tiebreaker — and once a topic is chosen, [the 2027 season plan](#x-plan) puts the three award pages on dated Wednesdays.', zh: '往下看最後兩欄。**一個「三個自然獎項全出自同一件活動」的題目，就是一個只有一個失敗點的題目**，而 ENDOREAD 公開地沒通過那個檢驗——一個元件集與一支程式是同一副鍵盤。DRYRUN 通過得最好：一條曲線、一個盒子、一系列工作坊，會因為三種不同的理由而壞掉。如果你在幾個題目之間選擇、而它們在[選題表](#x-roadmap)上分數相同，這是一個公平的決勝依據——而一旦題目定了，[2027 賽季計畫](#x-plan)會把那三個獎頁排進有日期的星期三。' })
      });

      return out;
    }
  };
})(window);
