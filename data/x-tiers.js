/* Three tiers — the cross-division analysis: High School, Undergraduate, Overgraduate, read together.
   Field sizes, country and village conversion read from api.igem.org/v1/teams?year=2026 and
   api.igem.org/v1/villages on 22 Nov 2026. Everything else is read from the thirty team wikis. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['x-tiers'] = {
    label: { en: 'Three tiers', zh: '三層分析' },
    title: { en: 'Three tiers: High School, Undergrad, Overgrad', zh: '三層分析——高中部、大學部、研究生部' },
    render: function (h) {
      var out = '';

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · thirty wikis · three sections · our argument, not a report',
          zh: 'GEMS Research · 三十個 wiki · 三個組別 · 這是我們的論述，不是轉述'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The three sections are not three difficulty levels of one competition. ==They are three different fields, judged on three different kinds of evidence.==',
          zh: '三個組別不是同一場比賽的三種難度。==它們是三個不同的賽場，而且被三種不同的證據所評判。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'We read all thirty Top 10 wikis of 2026 in the same terms: ten High School, ten Undergraduate, ten Overgraduate. Then we read them against each other. The headline is not that the older teams do harder science, although on average they do. It is that **each section has its own way of making a claim believable**, and a team that borrows the wrong one wastes a season. Overgrad buys belief by **scoping the claim inside the sentence that makes it**. Undergrad buys it by **releasing something another team can run**. High School buys it, at its best, by **getting somebody outside the team to do the measuring**.',
          zh: '我們用同一套語彙讀完 2026 年全部三十個前十名 wiki——高中部十個、大學部十個、研究生部十個——然後讓它們互相對照。重點不是年紀大的隊伍做比較難的科學，雖然平均而言確實如此。重點是**每個組別都有自己讓一個主張變得可信的方式**，而借錯方式的隊伍會浪費一整季。研究生部靠**在提出主張的那一句話裡就標出它的範圍**換取信任。大學部靠**釋出別人跑得起來的東西**。高中部在最好的狀況下，靠**讓團隊以外的人來做量測**。'
        }) + '</p>' +
        h.stats([
          { v: '203', l: { en: 'Undergraduate teams accepted in 2026, the crowded section', zh: '2026 年獲接受的大學部隊伍——最擁擠的組別' } },
          { v: '152', l: { en: 'High School teams, 88 of them from mainland China', zh: '高中部隊伍，其中 88 支來自中國大陸' } },
          { v: '75', l: { en: 'Overgraduate teams, the least crowded by a wide margin', zh: '研究生部隊伍——以很大差距成為最不擁擠的組別' } },
          { v: '13.3 %', l: { en: 'Chance an Overgrad team reached its Top 10; Undergrad was 4.9 %', zh: '研究生部隊伍進入前十名的比例；大學部是 4.9%' } },
          { v: '30 / 30', l: { en: 'Top 10 wikis that name something their own data does not show', zh: '會指名「自己數據沒有證明到什麼」的前十名 wiki' } },
          { v: '2', l: { en: 'Sections with no published 2nd Runner-up: High School and Overgrad', zh: '沒有公布第三名的組別：高中部與研究生部' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 't-field', t: { en: 'Three fields', zh: '三個賽場' } },
        { id: 't-where', t: { en: 'Who enters, who converts', zh: '誰報名、誰進前十' } },
        { id: 't-village', t: { en: 'Villages', zh: '村別' } },
        { id: 't-shape', t: { en: 'What the work looks like', zh: '工作長什麼樣子' } },
        { id: 't-proof', t: { en: 'Three currencies of proof', zh: '三種證據貨幣' } },
        { id: 't-honest', t: { en: 'The one shared practice', zh: '唯一共通的做法' } },
        { id: 't-outside', t: { en: 'Outsourced measurement', zh: '外包出去的量測' } },
        { id: 't-tooling', t: { en: 'One template, eight wikis', zh: '一套模板、八個 wiki' } },
        { id: 't-swap', t: { en: 'What each tier should steal', zh: '各層該互相偷什麼' } },
        { id: 't-limits', t: { en: 'What this cannot tell you', zh: '這些不能告訴你什麼' } }
      ]);

      /* ---------------- three fields ---------------- */
      out += h.sec({
        id: 't-field',
        kick: { en: 'The arithmetic', zh: '算術' },
        h2: { en: 'The section you enter changes your odds by a factor of three', zh: '你報名哪個組別，會讓機率差上三倍' },
        lede: {
          en: 'Every section hands out exactly ten Top 10 places. The sections are not the same size, and nobody tells you that on the way in.',
          zh: '每個組別都剛好發出十個前十名席位。但組別的大小不一樣，而報名的時候沒有人會告訴你這件事。'
        },
        body:
          h.fig({
            kind: 'bars',
            tag: { en: 'FIELD SIZE', zh: '賽場規模' },
            title: { en: 'Share of each section that reached its own Top 10, iGEM 2026', zh: 'iGEM 2026 各組別進入自身前十名的比例' },
            sub: { en: 'Ten places per section, divided by the number of accepted teams in that section. Read as the base rate before anything about your project is known.', zh: '每組十個席位，除以該組獲接受的隊伍數。請把它讀成「在還不知道你的專案是什麼之前」的底線機率。' },
            data: [
              { label: { en: 'Overgraduate: 10 of 75', zh: '研究生部——75 取 10' }, v: 13.3, note: { en: 'the least crowded section in the competition', zh: '整個競賽中最不擁擠的組別' } },
              { label: { en: 'High School: 10 of 152', zh: '高中部——152 取 10' }, v: 6.6, note: { en: 'half the Overgrad rate', zh: '研究生部機率的一半' } },
              { label: { en: 'Undergraduate: 10 of 203', zh: '大學部——203 取 10' }, v: 4.9, note: { en: 'the hardest section to place in, on numbers alone', zh: '單就數字而言，最難取得名次的組別' } }
            ],
            opts: { unit: { en: '%', zh: '%' }, dec: 1, xlabel: { en: 'reached the section Top 10, %', zh: '進入該組前十名的比例，%' } },
            caption: { en: 'Counted by us from api.igem.org/v1/teams?year=2026 on 22 Nov 2026: 463 accepted team records, of which 203 Undergraduate, 152 High School, 75 Overgraduate and 33 carrying no section.', zh: '由我們於 2026 年 11 月 22 日自 api.igem.org/v1/teams?year=2026 統計：463 筆獲接受的隊伍紀錄，其中大學部 203、高中部 152、研究生部 75，另有 33 筆未標示組別。' }
          }) +
          h.p({
            en: 'This is not advice to game the section. You enter the one your institution puts you in, and the Overgraduate section is harder in every way that is not arithmetic. It is a correction to a common belief. Teams talk about the High School section as the easy one and the Overgraduate section as the serious one. On the numbers, **the Overgraduate section is the easiest place in iGEM to finish in a Top 10, and the Undergraduate section is the hardest**, because 203 teams compete for the same ten places. If you are a university team deciding whether to register your graduate students separately, that decision is worth more than most of the project decisions you will make later.',
            zh: '這不是在建議你去鑽組別的空子——你會被你的機構放進哪個組別就是哪個，而研究生部在所有「不是算術」的面向上都更難。這只是對一個常見看法的修正。隊伍們談起高中部時把它當成簡單的那個，談起研究生部時把它當成嚴肅的那個。但就數字而言，**研究生部是 iGEM 裡最容易拿到前十名的地方，而大學部是最難的**，因為有 203 支隊伍在爭同樣的十個席位。如果你是一支正在決定要不要把研究生另外報名的大學隊伍，那個決定的價值會超過你之後要做的大部分專案決策。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Section', zh: '組別' }, w: '18%' },
              { t: { en: 'Teams', zh: '隊伍數' }, num: true, w: '10%' },
              { t: { en: 'Top 10 rate', zh: '前十名比例' }, num: true, w: '13%' },
              { t: { en: 'Order published', zh: '公布的名次' } },
              { t: { en: 'How village awards are judged', zh: '村獎怎麼評' } }
            ],
            rows: [
              [{ en: '**Overgraduate**', zh: '**研究生部**' }, '75', '13.3 %',
               { en: 'Grand Prize and 1st Runner-up only. **No 2nd Runner-up published.**', zh: '只有首獎與亞軍——**沒有公布第三名**' },
               { en: 'Together with Undergrad in most villages; split out for Bioremediation and Foundational Advance', zh: '多數村別與大學部合評；生物復育與基礎推進則分開評' }],
              [{ en: '**High School**', zh: '**高中部**' }, '152', '6.6 %',
               { en: 'Grand Prize and 1st Runner-up only. **No 2nd Runner-up published.**', zh: '只有首獎與亞軍——**沒有公布第三名**' },
               { en: 'Villages bundled into **four groups**, one award each. You compete against adjacent villages, not just your own.', zh: '村別被併成**四大組**，各發一獎——所以你是跟鄰近村別一起競爭，不只是跟自己村別' }],
              [{ en: '**Undergraduate**', zh: '**大學部**' }, '203', '4.9 %',
               { en: 'Grand Prize, 1st and **2nd Runner-up** (Princeton)', zh: '首獎、亞軍與**季軍**（Princeton）' },
               { en: 'One award per village, mostly shared with Overgrad', zh: '每村一獎，多數與研究生部共用' }]
            ],
            min: 820,
            source: { en: 'Section sizes counted by us from the iGEM teams API; award structure read from [competition.igem.org/results/2026](https://competition.igem.org/results/2026).', zh: '組別規模由我們自 iGEM teams API 統計；獎項結構讀自 [competition.igem.org/results/2026](https://competition.igem.org/results/2026)。' }
          }) +
          h.take({ en: 'The thing almost nobody notices about the High School section', zh: '幾乎沒人注意到的高中部結構' }, {
            en: 'High School village awards are grouped four ways, so your competition for a village award is the whole group, not your village. In 2026 that made the groups wildly uneven: the Agriculture / Food & Nutrition / Fashion & Cosmetics / Art & Design group held **48 teams**, while the Climate Crisis / Conservation / Bioremediation group held **28**. Two High School teams won a village award from a 28-team group; one won from a 48-team group. **Choosing a village in the High School section is partly choosing a group size.**',
            zh: '高中部的村獎分成四組發放，所以你爭村獎的對手是整個組，不是你的村。2026 年這讓各組大小非常不平均：農業／食品與營養／時尚與美妝／藝術與設計那一組有 **48 支隊伍**，而氣候危機／保育／生物復育那一組只有 **28 支**。有兩支高中隊伍從 28 隊的組裡拿到村獎；只有一支從 48 隊的組裡拿到。**在高中部選村別，有一部分其實是在選組的大小。**'
          })
      });

      /* ---------------- who enters, who converts ---------------- */
      out += h.sec({
        id: 't-where',
        kick: { en: 'Geography', zh: '地理' },
        h2: { en: 'Each section is dominated by a different part of the world, and not the part that enters most', zh: '每個組別由世界上不同的一塊主導——而且不是報名最多的那一塊' },
        lede: {
          en: 'The field and the Top 10 do not look alike. In two of the three sections, the country that enters the most teams converts the worst.',
          zh: '賽場與前十名長得不像。在三個組別中的兩個，報名隊伍最多的國家，轉換率最差。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Section', zh: '組別' }, w: '13%' },
              { t: { en: 'Largest fields', zh: '最大的報名來源' } },
              { t: { en: 'Top 10 by origin', zh: '前十名的來源' } },
              { t: { en: 'What stands out', zh: '最突出的一點' } }
            ],
            rows: [
              [{ en: '**High School**', zh: '**高中部**' },
               { en: 'China 88 · United States 23 · Hong Kong 10 · Taiwan 9 · Korea 4', zh: '中國 88 · 美國 23 · 香港 10 · 台灣 9 · 韓國 4' },
               { en: 'China 4 · Hong Kong 3 · Taiwan 1 · United States 1 · United Kingdom 1', zh: '中國 4 · 香港 3 · 台灣 1 · 美國 1 · 英國 1' },
               { en: '**Hong Kong put 3 of its 10 teams in the Top 10: a 30 % conversion.** China converted 4 of 88 (4.5 %) and the United States 1 of 23 (4.3 %).', zh: '**香港把自己 10 支隊伍中的 3 支送進前十名——30% 的轉換率。**中國是 88 取 4（4.5%），美國是 23 取 1（4.3%）。' }],
              [{ en: '**Undergraduate**', zh: '**大學部**' },
               { en: 'China 87 · United States 37 · India 12 · Canada 8 · Greece 6', zh: '中國 87 · 美國 37 · 印度 12 · 加拿大 8 · 希臘 6' },
               { en: 'United States 3 · Canada 2 · China 1 · Germany 1 · France 1 · Singapore 1 · New Zealand 1', zh: '美國 3 · 加拿大 2 · 中國 1 · 德國 1 · 法國 1 · 新加坡 1 · 紐西蘭 1' },
               { en: '**China fields 43 % of the section and took 1 of the 10 places** (1.1 % conversion). Canada took 2 from a field of 8. India fielded 12 and took none.', zh: '**中國占了這個組別 43% 的隊伍，卻只拿到 10 席中的 1 席**（1.1% 轉換率）。加拿大從 8 隊中拿下 2 席。印度報了 12 隊、沒有席次。' }],
              [{ en: '**Overgraduate**', zh: '**研究生部**' },
               { en: 'Germany 14 · United States 8 · China 6 · France 6 · Canada 5', zh: '德國 14 · 美國 8 · 中國 6 · 法國 6 · 加拿大 5' },
               { en: 'Germany 3 · Switzerland 2 · Netherlands 2 · Greece 1 · Saudi Arabia 1 · Canada 1', zh: '德國 3 · 瑞士 2 · 荷蘭 2 · 希臘 1 · 沙烏地阿拉伯 1 · 加拿大 1' },
               { en: '**Eight of the ten are European.** The United States fielded 8 Overgrad teams and took none; China fielded 6 and took none.', zh: '**十隊中有八隊在歐洲。**美國報了 8 支研究生部隊伍、零席次；中國報了 6 支、零席次。' }]
            ],
            min: 980,
            source: { en: 'Counted by us from api.igem.org/v1/teams?year=2026 (country, city and section come from each team\'s own registration record) cross-referenced with the official Top 10 lists. Conversion rates on fields this small are noisy; see **What this cannot tell you**.', zh: '由我們自 api.igem.org/v1/teams?year=2026 統計（國家、城市與組別取自各隊自己的報名紀錄），再與官方前十名名單對照。在這麼小的樣本上，轉換率本身雜訊很大；請參見**這些不能告訴你什麼**。' }
          }) +
          h.p({
            en: 'Two of these are worth saying out loud. First, **German teams concentrate in the Overgraduate section**: 14 Overgrad entries against 2 Undergraduate ones. That is where they win. A German university that registers as Undergrad is entering the 203-team field; registering as Overgrad enters the 75-team field. Second, the Chinese pattern inverts between sections: dominant in both fields by count, weakly converting in Undergraduate and converting normally in High School. We are not going to speculate about why from wikis alone; we can only point at the number and say it is large.',
            zh: '其中兩件事值得直接說出來。第一，**德國隊伍集中在研究生部**——14 支研究生部對 2 支大學部——而他們得名的地方就在那裡。一所德國大學如果報成大學部，就是進入 203 隊的賽場；報成研究生部則是進入 75 隊的賽場。第二，中國的模式在組別之間反轉：按數量在兩個賽場都占主導，但在大學部轉換率很低，在高中部則接近平均。我們不打算只憑 wiki 去推測原因；我們只能指出那個數字，並說它很大。'
          }) +
          h.note({
            en: 'One more structural asymmetry: **the United Kingdom fielded only 2 High School teams in 2026, and one of them (Eton-College-UK) reached the Top 10.** A 50 % conversion on a field of two is not a finding about British secondary education; it is a reminder that most of these rates rest on single digits.',
            zh: '還有一個結構上的不對稱：**英國 2026 年只報了 2 支高中部隊伍，其中一支（Eton-College-UK）進了前十名。**在只有兩隊的賽場上 50% 的轉換率，不是一個關於英國中學教育的發現；它只是提醒你，這些比例大多建立在個位數之上。'
          })
      });

      /* ---------------- villages ---------------- */
      out += h.sec({
        id: 't-village',
        kick: { en: 'Villages', zh: '村別' },
        h2: { en: 'The same village is a good bet in one section and a dead end in another', zh: '同一個村別，在某個組別是好賭注，在另一個組別是死路' },
        lede: {
          en: 'We counted every 2026 team\'s registered village and compared it with the Top 10 lists. The pattern does not carry across sections, which is why copying a winning village from another section is a mistake.',
          zh: '我們統計了 2026 年每支隊伍登記的村別，再與前十名名單比對。這個模式在組別之間並不通用——這就是為什麼從別的組別抄一個得獎村別是個錯誤。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Village', zh: '村別' }, w: '18%' },
              { t: { en: 'High School', zh: '高中部' } },
              { t: { en: 'Undergraduate', zh: '大學部' } },
              { t: { en: 'Overgraduate', zh: '研究生部' } }
            ],
            rows: [
              [{ en: 'Diagnostics', zh: '診斷' },
               { en: '**3 of 13**: Eton, GCGS, HongKong-HS', zh: '**13 取 3**——Eton、GCGS、HongKong-HS' },
               { en: '0 of 17', zh: '17 取 0' },
               { en: '0 of 5', zh: '5 取 0' }],
              [{ en: 'Conservation', zh: '保育' },
               { en: '**2 of 7**: Lambert-GA, GHCIS', zh: '**7 取 2**——Lambert-GA、GHCIS' },
               { en: '0 of 9', zh: '9 取 0' },
               { en: '**2 of 5**: Athens, UZurich', zh: '**5 取 2**——Athens、UZurich' }],
              [{ en: 'Biomanufacturing', zh: '生物製造' },
               { en: '2 of 23: HangzhouFourteenAP, GEMS-Taiwan', zh: '23 取 2——HangzhouFourteenAP、GEMS-Taiwan' },
               { en: '2 of 18: NUS-Singapore, UCNZ', zh: '18 取 2——NUS-Singapore、UCNZ' },
               { en: '1 of 9: TU Delft (and the Grand Prize)', zh: '9 取 1——TU Delft（同時是首獎）' }],
              [{ en: 'Therapeutics', zh: '治療' },
               { en: '1 of 20: HFI', zh: '20 取 1——HFI' },
               { en: '3 of 35: Stanford, UAlberta, UCAS-China', zh: '35 取 3——Stanford、UAlberta、UCAS-China' },
               { en: '1 of 9: GU Frankfurt', zh: '9 取 1——GU Frankfurt' }],
              [{ en: 'Foundational Advance', zh: '基礎推進' },
               { en: '0 of 2: almost nobody enters it', zh: '2 取 0——幾乎沒人報' },
               { en: '2 of 33: Heidelberg, Princeton', zh: '33 取 2——Heidelberg、Princeton' },
               { en: '2 of 12: ETH-Zurich, Marburg', zh: '12 取 2——ETH-Zurich、Marburg' }],
              [{ en: 'Bioremediation', zh: '生物復育' },
               { en: '0 of 21: the second-largest HS village, no places', zh: '21 取 0——高中部第二大村別，零席次' },
               { en: '2 of 18: LYON, UOttawa', zh: '18 取 2——LYON、UOttawa' },
               { en: '2 of 11: Toronto, WageningenUR', zh: '11 取 2——Toronto、WageningenUR' }],
              [{ en: 'Agriculture', zh: '農業' },
               { en: '1 of 17: HongKong-JSS (1st Runner-up)', zh: '17 取 1——HongKong-JSS（亞軍）' },
               { en: '0 of 16', zh: '16 取 0' },
               { en: '1 of 7: Muenster-University', zh: '7 取 1——Muenster-University' }],
              [{ en: 'Food & Nutrition', zh: '食品與營養' },
               { en: '1 of 17: HKSSC', zh: '17 取 1——HKSSC' },
               { en: '0 of 9', zh: '9 取 0' },
               { en: '0 of 7', zh: '7 取 0' }],
              [{ en: 'Fashion & Cosmetics', zh: '時尚與美妝' },
               { en: '0 of 14', zh: '14 取 0' },
               { en: '1 of 11: Cornell (and the village award)', zh: '11 取 1——Cornell（同時拿下村獎）' },
               { en: '0 of 3', zh: '3 取 0' }],
              [{ en: 'Space', zh: '太空' },
               { en: '0 of 4', zh: '4 取 0' },
               { en: '0 of 11', zh: '11 取 0' },
               { en: '1 of 2: KAUST-KSA (and the village award)', zh: '2 取 1——KAUST-KSA（同時拿下村獎）' }],
              [{ en: 'Software & AI', zh: '軟體與 AI' },
               { en: '0 of 2', zh: '2 取 0' },
               { en: '0 of 7', zh: '7 取 0' },
               { en: '0 of 2', zh: '2 取 0' }],
              [{ en: 'Oncology · Infectious Diseases', zh: '腫瘤 · 傳染病' },
               { en: '0 of 6 · 0 of 1', zh: '6 取 0 · 1 取 0' },
               { en: '0 of 11 · 0 of 8', zh: '11 取 0 · 8 取 0' },
               { en: '0 of 1 · 0 of 2', zh: '1 取 0 · 2 取 0' }]
            ],
            min: 1000,
            source: { en: 'Village registrations counted by us from the iGEM teams and villages APIs; Top 10 membership from the official results page. **Ten places per section means every cell here is a one-year sample with a numerator between 0 and 3.** Treat it as a tiebreaker, never as a strategy.', zh: '村別登記由我們自 iGEM 的 teams 與 villages API 統計；前十名名單取自官方成績頁。**每個組別只有十席，所以這張表每一格都是分子介於 0 到 3 之間的單年樣本。**請把它當成最後的決勝參考，絕不要當成策略。' }
          }) +
          h.cards([
            { chips: [{ t: { en: 'the inversion', zh: '反轉' }, k: 'v' }],
              h: { en: 'Diagnostics works in High School and nowhere else', zh: 'Diagnostics 在高中部行得通，在別處都不行' },
              p: { en: 'Three of the ten High School Top 10 teams are registered in Diagnostics; across 22 Undergraduate and Overgraduate Diagnostics teams, **not one reached a Top 10**. Our reading: a diagnostic is the one project shape where a school lab can get to a real readout (a colour, a current, a fluorescence ratio) inside one season, while at university level a diagnostic is judged against clinical sensitivity and specificity that a student team cannot produce. The same choice is a strength at one tier and a trap at the next.', zh: '高中部前十名的十隊中有三隊登記在 Diagnostics；而在大學部與研究生部共 22 支 Diagnostics 隊伍裡，**沒有一隊進入前十名**。我們的解讀：診斷是唯一一種能讓學校實驗室在一季之內拿到真實讀值（一個顏色、一個電流、一個螢光比值）的專案形狀；但到了大學層級，診斷會被拿去對照學生團隊做不出來的臨床敏感度與專一度。同一個選擇在這一層是優勢，到下一層就是陷阱。' } },
            { chips: [{ t: { en: 'the vacuum', zh: '真空地帶' }, k: 'b' }],
              h: { en: 'Foundational Advance is empty in High School', zh: 'Foundational Advance 在高中部是空的' },
              p: { en: 'Two High School teams out of 152 registered in Foundational Advance. The same village held 33 Undergraduate and 12 Overgraduate teams and produced four Top 10 places across them, including the Undergraduate 2nd Runner-up. **A whole village is effectively unoccupied in the High School section.** That is either an opportunity or a warning that the judging rewards it only when there is a tool behind it.', zh: '152 支高中部隊伍中，只有 2 支登記在 Foundational Advance。同一個村別在大學部有 33 隊、研究生部有 12 隊，並在其中產出四個前十名席位，包含大學部季軍。**在高中部，整個村別實際上是空著的**——這要嘛是機會，要嘛是個警訊：評審只有在背後真的有一個工具時才會獎勵它。' } },
            { chips: [{ t: { en: 'the crowd', zh: '擁擠區' }, k: 'r' }],
              h: { en: 'Bioremediation: 21 High School teams, no places', zh: 'Bioremediation：21 支高中部隊伍、零席次' },
              p: { en: 'Bioremediation is the second-largest village in the High School section and converted nothing in 2026, while the same village produced two Top 10 teams in Undergraduate and two in Overgraduate, including both divisions\' Bioremediation award winners. Our reading: degrading a pollutant is easy to design and very hard to measure, and the measurement is exactly what a school lab cannot afford. The university teams that won it bought their way to a real number: chromatography, a quantified rate, a soil column.', zh: 'Bioremediation 是高中部第二大的村別，2026 年轉換率為零；而同一個村別在大學部產出兩支前十名、研究生部也兩支——包含兩個組別的生物復育獎得主。我們的解讀：降解一個污染物很好設計，卻非常難量測，而那個量測恰好就是學校實驗室負擔不起的東西。贏下它的大學隊伍，是用錢換到了一個真實的數字——層析、量化的速率、土柱實驗。' } },
            { chips: [{ t: { en: 'small is fine', zh: '小村別沒問題' }, k: 'g' }],
              h: { en: 'The smallest villages convert best, in every section', zh: '最小的村別在每個組別都轉換得最好' },
              p: { en: 'Conservation: 7 High School teams and 2 places; 5 Overgraduate teams and 2 places. Space: 2 Overgraduate teams and 1 place, plus the village award. The reason is obvious: fewer competitors for the village award, and a village award is the strongest signal a Top 10 jury sees. The caveat is just as obvious. A village is small because the problems in it are awkward, and the awkwardness does not go away because you noticed the arithmetic.', zh: 'Conservation：高中部 7 隊、2 席；研究生部 5 隊、2 席。Space：研究生部 2 隊、1 席，外加村獎。原因很明顯——爭村獎的對手少，而村獎是前十名評審會看到的最強訊號——但警告也很明顯：一個村別之所以小，是因為裡面的問題很棘手，而棘手不會因為你注意到算術就消失。' } }
          ])
      });

      /* ---------------- what the work looks like ---------------- */
      out += h.sec({
        id: 't-shape',
        kick: { en: 'Shape', zh: '形狀' },
        h2: { en: 'What a Top 10 project actually contains, tier by tier', zh: '一個前十名專案實際上裝了什麼，一層一層看' },
        lede: {
          en: 'Read across thirty wikis, the sections differ less in ambition than in how many independent things the project is allowed to need.',
          zh: '橫讀三十個 wiki 之後，組別之間的差別不在企圖心，而在「這個專案被允許同時需要多少件彼此獨立的事」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Dimension', zh: '面向' }, w: '17%' },
              { t: { en: 'High School', zh: '高中部' } },
              { t: { en: 'Undergraduate', zh: '大學部' } },
              { t: { en: 'Overgraduate', zh: '研究生部' } }
            ],
            rows: [
              [{ en: 'Typical wet-lab depth', zh: '典型濕式深度' },
               { en: 'One pathway or one enzyme, cloned and characterised. Two to four DBTL cycles. Purified protein and an activity assay is a strong result.', zh: '一條路徑或一個酵素，完成選殖與特性化。兩到四個 DBTL 循環。能純化出蛋白並做出活性試驗，就是一個很強的結果。' },
               { en: 'A full construct family with a delivery or formulation step attached: a patch, a carrier, a fibre, a reactor feed.', zh: '一整組構築家族，外加一個遞送或配方環節——貼片、載體、纖維、反應器進料。' },
               { en: 'A platform with more than one chassis, or one chassis measured in several orthogonal ways.', zh: '一個涵蓋多個底盤的平台，或一個底盤被用數種彼此正交的方式量測。' }],
              [{ en: 'Typical dry-lab ambition', zh: '典型乾式企圖' },
               { en: 'A designer or a simulation that chooses something. The best of them ship it: **Lambert-GA\'s PRINCE** and **GHCIS\'s ARGUS** are both released software.', zh: '一個會做出選擇的設計器或模擬。最好的那些會真的釋出：**Lambert-GA 的 PRINCE** 與 **GHCIS 的 ARGUS** 都是公開釋出的軟體。' },
               { en: 'A trained model plus the baseline it has to beat, and often a web tool: RADAR-Scout, SymPlify, GLARE, ATLAS.', zh: '一個訓練好的模型，加上它必須打敗的基準，通常還有一個網頁工具——RADAR-Scout、SymPlify、GLARE、ATLAS。' },
               { en: 'A model that replaces an experiment nobody could run: a repaired genome-scale model, CFD under lunar gravity, nationwide feasibility.', zh: '一個取代「根本沒人跑得起來的實驗」的模型：修好的全基因體代謝模型、月面重力下的流場模擬、全國尺度可行性。' }],
              [{ en: 'Hardware', zh: '硬體' },
               { en: 'Common and cheap, and the cheapness is the point. Lambert-GA\'s **$80 vacuum dryer**, GEMS-Taiwan\'s photometer and perfusion reactor.', zh: '常見而便宜，而便宜本身就是重點——Lambert-GA 的 **80 美元真空乾燥器**、GEMS-Taiwan 的光度計與灌流反應器。' },
               { en: 'Usually a rig that serves the measurement rather than a product.', zh: '通常是服務量測的裝置，而不是一個產品。' },
               { en: 'Engineered as a deliverable with a mass and power budget: KAUST-KSA\'s 2.2 kg, 30 W bioreactor.', zh: '當成有質量與功耗預算的交付物來設計——KAUST-KSA 的 2.2 公斤、30 瓦生物反應器。' }],
              [{ en: 'Who does the measuring', zh: '誰做量測' },
               { en: 'Often somebody else: a university host lab, a commercial assay service, an external validation partner.', zh: '經常是別人：大學的接待實驗室、商業試驗服務、外部驗證夥伴。' },
               { en: 'The team, in its own institution\'s facilities.', zh: '團隊自己，在自己機構的設施裡。' },
               { en: 'The team, and then a second method as a cross-check.', zh: '團隊自己，然後再用第二種方法交叉檢查。' }],
              [{ en: 'What limits the project', zh: '限制專案的是什麼' },
               { en: 'Access and permission. Several 2026 High School results stop exactly where a safety rule or an unavailable instrument starts, and the wikis say so.', zh: '取用權限與許可。2026 年有好幾個高中部的結果，正好停在某條安全規定或某台拿不到的儀器開始的地方，而 wiki 也這麼寫了。' },
               { en: 'Time. The constructs exist; the characterisation runs out of weeks.', zh: '時間。構築都做出來了，但特性化的週數用完了。' },
               { en: 'Scope. The platform works; proving it works for the second application does not fit in a year.', zh: '範圍。平台是能動的，但要證明它對第二個應用也能動，一年裝不下。' }]
            ],
            min: 1040,
            source: { en: 'Our summary of the thirty team pages on this site. Each claim is traceable to a team page; the generalisation is ours.', zh: '這是我們對本站三十個團隊頁的歸納。每個主張都能追到某個團隊頁；而歸納本身是我們做的。' }
          }) +
          h.take({ en: 'The practical consequence', zh: '實際的後果' }, {
            en: 'A High School project should need **two** independent things to work, not four. The 2026 High School teams that got into trouble are the ones whose claim required a chain: amplify, then switch, then colour, then read. Every link needed its own validation, and the season ended with the middle link untested. The teams that finished clean either kept the chain to two links or **cut the chain and did the hard link somewhere else**, with somebody else\'s instrument.',
            zh: '一個高中部專案應該需要**兩件**彼此獨立的事成立，而不是四件。2026 年陷入麻煩的高中部隊伍，都是主張需要一整串鏈條的那些——先放大、再開關、再顯色、再讀取——每一環都需要自己的驗證，而季末時中間那一環還沒測過。順利收尾的隊伍，要嘛把鏈條控制在兩環，要嘛**把鏈條切斷，把最難的那一環拿到別的地方做**，用別人的儀器。'
          })
      });

      /* ---------------- three currencies of proof ---------------- */
      out += h.sec({
        id: 't-proof',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'Three currencies of proof, and the exchange rate between them is bad', zh: '三種證據貨幣，而它們之間的匯率很差' },
        lede: {
          en: 'This is the central claim of this page. Each section rewards a different way of making a reader believe you, and the strategies do not transfer.',
          zh: '這是本頁的核心主張。每個組別獎勵的，是一種不同的「讓讀者相信你」的方式，而這些策略之間無法移轉。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'High School', zh: '高中部' }, k: 'v' }, { t: { en: 'currency: an outside witness', zh: '貨幣：外部見證' }, k: 'n' }],
              h: { en: 'Get somebody who is not on your team to produce the number', zh: '讓不屬於你團隊的人來產生那個數字' },
              p: { en: 'The strongest evidence on a 2026 High School wiki is almost never a measurement the team made alone. **Lambert-GA** sent its dryer to the University of Alabama at Birmingham, which recovered 38 of 43 compounds within 5 % of undried controls, and to Georgia Tech; its binder affinity came from Adaptyv Bio\'s BLI service. **Eton-College-UK** ran its bench work in host labs at the University of Greenwich and King\'s College London. The judge does not have to trust a school lab\'s pipetting, because the number did not come from the school lab. This is the cheapest credibility available to a High School team and it is badly underused: most teams ask an expert for advice and then measure everything themselves.', zh: '2026 年高中部 wiki 上最強的證據，幾乎從來不是團隊自己單獨做的量測。**Lambert-GA** 把乾燥器送到阿拉巴馬大學伯明罕分校，對方在 43 個化合物中有 38 個回收到與未乾燥對照相差 5% 以內，另外也送到喬治亞理工；而它的結合親和力來自 Adaptyv Bio 的 BLI 服務。**Eton-College-UK** 的實驗檯工作是在格林威治大學與倫敦國王學院的接待實驗室完成的。評審不需要相信一所學校實驗室的移液技術，因為那個數字不是學校實驗室產出的。這是高中部隊伍能取得的最便宜的可信度，而它被嚴重低度使用：大部分隊伍只去問專家意見，然後所有量測還是自己做。' } },
            { chips: [{ t: { en: 'Undergraduate', zh: '大學部' }, k: 'b' }, { t: { en: 'currency: something runnable', zh: '貨幣：跑得起來的東西' }, k: 'n' }],
              h: { en: 'Release the thing, with the baseline it has to beat', zh: '把東西釋出，連「它必須打敗的基準」一起' },
              p: { en: 'In the Undergraduate section, nine of the ten 2026 Top 10 teams released a tool, model, dataset or package another team can pick up: RADAR-Scout, SymPlify, GLARE, the ATLAS dry lab, a cofactor package, a published model repository. The pattern that separates them from the field is not that the tool exists; plenty of teams ship a tool. It is that the strong ones **publish the baseline the tool has to beat**, including when the baseline wins. A tool with no baseline is a website. A tool with a baseline is a result.', zh: '在大學部，2026 年前十名中有九隊釋出了別的團隊能接手的工具、模型、資料集或套件——RADAR-Scout、SymPlify、GLARE、ATLAS 乾式實驗室、一個輔因子套件、一個公開的模型倉庫。真正把它們和其他隊伍分開的，不是「有工具」；釋出工具的隊伍很多。而是強的那些會**把工具必須打敗的基準一起公開**，包括基準贏了的時候。沒有基準的工具是一個網站；有基準的工具是一個結果。' } },
            { chips: [{ t: { en: 'Overgraduate', zh: '研究生部' }, k: 't' }, { t: { en: 'currency: scope, stated inline', zh: '貨幣：就地標註的範圍' }, k: 'n' }],
              h: { en: 'Put the limit of the claim inside the claim', zh: '把主張的界線放進主張裡面' },
              p: { en: 'The Overgraduate section is read by people who will immediately ask what the claim excludes, so the winning teams answer before they are asked. **KAUST-KSA** writes it into the sentence itself: "genetic integration and radiation-testing activities should be distinguished from a demonstrated increase in resistance". It badges its production workflow "Proposed". **WageningenUR** reports a distance to a working system rather than a success. A limitations section at the bottom of a page is read by a judge and nobody else; a clause inside the claim is read by everyone who reads the claim.', zh: '研究生部的讀者會立刻追問一個主張排除了什麼，所以得名的隊伍在被問之前就先回答。**KAUST-KSA** 把它寫進句子本身——「基因整合與輻射測試活動，應與已證明的抗性提升區分開來」——並把生產流程標上「提議中」。**WageningenUR** 報告的是「距離一個可運作系統還有多遠」，而不是一個成功。放在頁面底部的限制一節，只有評審會讀；寫在主張裡的子句，每個讀到那個主張的人都會讀到。' } },
            { chips: [{ t: { en: 'the bad exchange rate', zh: '很差的匯率' }, k: 'r' }],
              h: { en: 'Why borrowing the wrong currency costs a season', zh: '為什麼借錯貨幣會花掉一整季' },
              p: { en: 'A High School team that spends the year building a web tool is paying in the Undergraduate currency, where it will be compared with a trained model and a baseline. An Undergraduate team that spends the year perfecting its limitations language is paying in the Overgraduate currency, where the limits matter because the platform is large; on a single construct, careful hedging reads as a thin result. **Spend where your section pays.** Then, once that is secured, add one unit of a neighbouring currency. The High School team that also ships a tool, like Lambert-GA and GHCIS, is the one that wins.', zh: '一支高中部隊伍花一整年做網頁工具，是在用大學部的貨幣付帳，而在那裡它會被拿去跟一個訓練好的模型與基準比較。一支大學部隊伍花一整年把限制的措辭寫到完美，是在用研究生部的貨幣付帳，而在那裡限制之所以重要，是因為平台很大；放在單一構築上，謹慎的保留會讀起來像一個薄弱的結果。**在你的組別付得起的地方花錢。**等那部分穩住之後，再加上一單位鄰近組別的貨幣——像 Lambert-GA 與 GHCIS 那樣「順便也釋出一個工具」的高中部隊伍，才是會贏的那一支。' } }
          ])
      });

      /* ---------------- the one shared practice ---------------- */
      out += h.sec({
        id: 't-honest',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'The only practice present in all thirty wikis: naming what the data does not show', zh: '三十個 wiki 全部都有的唯一做法：指名數據沒有證明到什麼' },
        lede: {
          en: 'No chassis, technique, village, country or tool is common to all thirty. This is. And it is strongest where we least expected it.',
          zh: '沒有任何底盤、技術、村別、國家或工具是三十隊共有的。只有這一件事是。而且它最強的地方，是我們最沒料到的地方。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Section', zh: '組別' }, w: '13%' },
              { t: { en: 'Team', zh: '隊伍' }, w: '17%' },
              { t: { en: 'The sentence, or the result, that works against them', zh: '那句話，或那個對自己不利的結果' } }
            ],
            rows: [
              [{ en: 'High School', zh: '高中部' }, { en: '**Lambert-GA**', zh: '**Lambert-GA**' },
               { en: 'Round 1: **15 designed candidates, no confirmed binder**, published as such. Twelve Sf9 transfection conditions reported inconclusive with two named causes, so siRNA knockdown "could not be evaluated". A pooled reporter preparation left explicitly **unverified**, with no diagnostic digest reported.', zh: '第一輪：**設計了 15 個候選，沒有確認到任何結合子**，原樣公開。十二種 Sf9 轉染條件被報告為無定論，並指名兩個原因，所以 siRNA 的沉默效果「無法評估」。一份混合的報告質體製備被明確標為**未經驗證**，並寫明沒有做診斷酶切。' }],
              [{ en: 'High School', zh: '高中部' }, { en: '**GHCIS**', zh: '**GHCIS**' },
               { en: 'The first round of **nine toehold switches gave no separation** with or without trigger RNA. Their summary ends: the results "do not yet establish a validated detection limit or the performance of the complete DNA-to-color workflow."', zh: '第一輪**九個 toehold 開關在有無觸發 RNA 下都分不出差別**。他們的總結以這句話收尾：這些結果「尚未建立經驗證的偵測極限，也尚未建立完整 DNA 到顏色流程的表現」。' }],
              [{ en: 'High School', zh: '高中部' }, { en: '**HFI**', zh: '**HFI**' },
               { en: 'The central engineering idea, stapling two strains together with SpyTag–SpyCatcher to channel a split pathway, gave only a **moderate, limited improvement**, reported as **not significant** at 24 h. Pathway intermediates were never quantified, so they state they can confirm only lysine reduction, "rather than provide direct evidence for complete multi-step degradation flow."', zh: '核心的工程想法——用 SpyTag–SpyCatcher 把兩株菌釘在一起以導通拆分的路徑——只帶來**中等且有限的提升**，並在 24 小時被報告為**不顯著**。路徑中間產物完全沒有定量，所以他們寫明只能確認離胺酸下降，「而非提供完整多步降解通量的直接證據」。' }],
              [{ en: 'High School', zh: '高中部' }, { en: '**HongKong-JSS**', zh: '**HongKong-JSS**' },
               { en: '"**1 ppb is the lowest concentration tested, not a validated detection limit.**" An abandoned RNA-switch route is published together with **the untested assumption** that killed it.', zh: '「**1 ppb 是測過的最低濃度，不是經驗證的偵測極限。**」一條被放棄的 RNA 開關路線，連同殺死它的**那個未經測試的假設**一起公開。' }],
              [{ en: 'High School', zh: '高中部' }, { en: '**Eton-College-UK**', zh: '**Eton-College-UK**' },
               { en: 'Predicted and measured peak positions agree, "**but partly by construction and from a single uncontrolled run**". The predictor correlates with measured MMP-9 rates at ρ = 0.70, "**on only 11 peptides: a positive association, not proof of rate prediction**".', zh: '預測與實測的峰位置相符，「**但一部分是建構出來的，而且來自單一次未設對照的實驗**」。預測器與實測 MMP-9 速率的相關係數 ρ = 0.70——「**而且只有 11 條肽：一個正相關，不是速率預測的證明**」。' }],
              [{ en: 'High School', zh: '高中部' }, { en: '**HangzhouFourteenAP**', zh: '**HangzhouFourteenAP**' },
               { en: 'One of two antimicrobial peptides, the 18aa, gave **no detectable induced band** under the same conditions that worked for the 21aa; they publish the three candidate explanations and drop it.', zh: '兩個抗菌肽中的 18aa，在對 21aa 有效的同樣條件下**測不到任何誘導後的條帶**；他們公開三種可能解釋，然後放棄它。' }],
              [{ en: 'Overgraduate', zh: '研究生部' }, { en: '**WageningenUR**', zh: '**WageningenUR**' },
               { en: 'Reports a **distance to a working system** rather than a success — and won the 1st Runner-up place and the division\'s Bioremediation award doing it.', zh: '報告的是**距離一個可運作系統還有多遠**，而不是一個成功——而且就這樣拿下亞軍與該組的生物復育獎。' }],
              [{ en: 'Overgraduate', zh: '研究生部' }, { en: '**KAUST-KSA**', zh: '**KAUST-KSA**' },
               { en: 'Scopes six separate claims inline, badges the production workflow "Proposed", and states that all laboratory tests were run at Earth gravity.', zh: '就地為六個不同主張標註範圍，把生產流程標上「提議中」，並寫明所有實驗室測試都是在地球重力下進行的。' }],
              [{ en: 'Undergraduate', zh: '大學部' }, { en: '**the pattern**', zh: '**整體模式**' },
               { en: 'The Undergraduate version is usually a **baseline that beats the team\'s own model**, published rather than buried: a no-model control that outscores a learned embedding, a predictor that does not beat sequence length. See the Undergraduate overview on this site.', zh: '大學部的版本通常是一個**打敗了團隊自己模型的基準**——一個不需要模型的對照贏過學習到的嵌入、一個預測器贏不過序列長度——被公開而不是被藏起來。詳見本站的大學部總覽。' }]
            ],
            min: 940,
            source: { en: 'Every quoted sentence is the team\'s own, read from their 2026 wiki and linked on that team\'s page here. The selection and the grouping are ours.', zh: '每一句引文都是該隊自己的話，讀自他們 2026 年的 wiki，並在本站該隊頁面附上連結。挑選與分組是我們做的。' }
          }) +
          h.take({ en: 'The part that surprised us', zh: '讓我們意外的部分' }, {
            en: 'We expected claim discipline to scale with age. It does not. **The High School section is where the practice is most visible in 2026**, because High School results are thinner, so the gap between what was built and what was shown is wider and harder to paper over. A team with one enzyme and one assay has to decide what that assay proves. A team with a platform can hide the question inside the volume of work. If you want to learn how to write a result honestly, read the High School wikis first. Then notice that the Grand Prize in that section went to the team that does it most ruthlessly.',
            zh: '我們原本以為主張的紀律會隨年齡遞增。並沒有。**2026 年這個做法最明顯的地方就是高中部**，因為高中部的結果比較薄，所以「做出了什麼」與「證明了什麼」之間的落差更大、也更難糊過去。一支只有一個酵素與一個試驗的隊伍，必須決定那個試驗到底證明了什麼。一支擁有平台的隊伍，可以把這個問題藏在工作量裡面。如果你想學會怎麼誠實地寫一個結果，先去讀高中部的 wiki——然後注意一件事：那個組別的首獎，給了做這件事最不留情的那支隊伍。'
          })
      });

      /* ---------------- outsourced measurement ---------------- */
      out += h.sec({
        id: 't-outside',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'The cheapest credibility in the competition, and who used it', zh: '整個競賽裡最便宜的可信度，以及誰用了它' },
        lede: {
          en: 'Getting a number from outside your own lab costs an email and sometimes a courier. It is worth more than any instrument a student team can buy.',
          zh: '從自己實驗室以外取得一個數字，成本是一封信，有時再加一次快遞。它的價值高過學生團隊買得起的任何儀器。'
        },
        body:
          h.flow({
            title: { en: 'Four ways a team moved a measurement outside itself', zh: '團隊把量測搬到自己之外的四種方式' },
            sub: { en: 'In rising order of what it buys. Every example is from a 2026 Top 10 wiki.', zh: '依它換到的東西由低到高排列。每個例子都來自 2026 年的前十名 wiki。' },
            stages: [
              { label: { en: 'Ask', zh: '問' }, sub: { en: 'Expert advice on a design', zh: '就設計徵詢專家意見' }, tone: 'n',
                items: [{ en: 'All thirty wikis. No evidence.', zh: '三十個 wiki 全有。換不到證據。' }] },
              { label: { en: 'Host', zh: '借場地' }, sub: { en: 'Bench work in somebody else\'s lab', zh: '在別人的實驗室做實驗' }, tone: 'b',
                items: [{ en: 'Buys instruments and supervision.', zh: '換到儀器與督導。' }] },
              { label: { en: 'Buy', zh: '買服務' }, sub: { en: 'Pay a service for the hard assay', zh: '付錢讓服務商做最難的試驗' }, tone: 'v',
                items: [{ en: 'Buys a method and an interval.', zh: '換到一套方法與一個區間。' }] },
              { label: { en: 'Be checked', zh: '被檢驗' }, sub: { en: 'Send it to a lab with no stake in it', zh: '送到與它無利害關係的實驗室' }, tone: 'g',
                items: [{ en: 'Buys the right to be wrong.', zh: '換到「可能被判錯」的資格。' }] }
            ],
            caption: { en: 'Drawn by us. The four tiers are our categories; the worked examples are in the list below.', zh: '由我們繪製。這四個層級是我們的分類；具體例子見下方清單。' }
          }) +
          h.kv([
            [{ en: 'Ask', zh: '問' },
             { en: 'Universal. All thirty Top 10 wikis document expert consultation, and in several cases it changed the design. **GCGS**, **HFI** and **GEMS-Taiwan** all name interviews that redirected the project. **Advice changes a design; only a measurement changes the evidence.**', zh: '普遍存在。三十個前十名 wiki 全都記載了專家諮詢，而在好幾個案例裡它改變了設計——**GCGS**、**HFI** 與 **GEMS-Taiwan** 都指名了讓專案轉向的訪談。**意見改變的是設計；只有量測才改變證據。**' }],
            [{ en: 'Host', zh: '借場地' },
             { en: '**Eton-College-UK** ran its bench work in host labs at the **University of Greenwich** and **King\'s College London**, keeping the notebook per site. This buys instruments and supervision rather than independence, and it is the most reproducible of the four. A school near a university can ask for it.', zh: '**Eton-College-UK** 的實驗檯工作在**格林威治大學**與**倫敦國王學院**的接待實驗室進行，實驗記錄依場地分別保存。這換到的是儀器與督導，而不是獨立性；但它是四種裡最可複製的——任何學校只要附近有大學就問得到。' }],
            [{ en: 'Buy', zh: '買服務' },
             { en: '**Lambert-GA**\'s binder affinity came from an **Adaptyv Bio BLI** run: **603.6 nM combined across two replicates, 95 % CI 497.1–733.3 nM**. A service you pay to run your sample is an instrument you rented, not an independent check. The method and the confidence interval are still the provider\'s, which is worth far more than an in-house gel.', zh: '**Lambert-GA** 的結合親和力來自一次 **Adaptyv Bio 的 BLI**：**兩次重複合併後 603.6 nM，95% 信賴區間 497.1–733.3 nM**。你付錢請人跑你的樣本，那是你租來的儀器，不是獨立檢驗——但方法與信賴區間都是服務商的，這遠比一張自家的膠值錢。' }],
            [{ en: 'Be checked', zh: '被檢驗' },
             { en: '**Lambert-GA** sent its **$80 vacuum dryer** to the **University of Alabama at Birmingham**, which recovered **38 of 43 measured compounds (88.4 %) within 5 % of undried controls**, and then to **Georgia Tech**, where GFP fluorescence after drying matched controls. The five compounds outside tolerance are named on the wiki. **This is the strongest single piece of evidence on any 2026 High School wiki.**', zh: '**Lambert-GA** 把那台 **80 美元的真空乾燥器**送到**阿拉巴馬大學伯明罕分校**，對方在 43 個量測化合物中有 **38 個（88.4%）回收到與未乾燥對照相差 5% 以內**；之後送到**喬治亞理工**，乾燥後的 GFP 螢光與對照相符。超出容許範圍的那五個化合物，在 wiki 上被指名了。**這是 2026 年任何高中部 wiki 上最強的單一證據。**' }]
          ]) +
          h.note({
            en: 'Note what the last stage requires that the third does not: **the outside lab has to be able to disagree with you.** A service you pay to run your sample is not an independent check; it is an instrument you rented. A lab that measures 43 compounds and tells you 5 of them fell outside tolerance is a check. Lambert-GA published the 5.',
            zh: '注意最後一層比第三層多要求了什麼：**外部實驗室必須有能力否決你。**你付錢請人跑你的樣本，那不是獨立檢驗，那是你租來的儀器。而一個量了 43 個化合物、然後告訴你其中 5 個超出容許範圍的實驗室，才是檢驗。Lambert-GA 把那 5 個也公開了。'
          })
      });

      /* ---------------- tooling ---------------- */
      out += h.sec({
        id: 't-tooling',
        kick: { en: 'New in 2026', zh: '2026 年的新現象' },
        h2: { en: 'Eight of the ten High School wikis ship the same AI-use policy file', zh: '高中部十個 wiki 中有八個附帶同一份 AI 使用規範檔' },
        lede: {
          en: 'We cloned all ten High School repositories to read them. Eight contain a byte-identical pair of assistant-configuration files, which tells you something about the division\'s starting point rather than about any one team.',
          zh: '為了閱讀，我們把十個高中部的原始碼倉庫全部 clone 下來。其中八個包含一對完全相同的助理設定檔——這告訴你的是這個組別的起點，而不是任何一支隊伍的事。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What we found in the repository', zh: '我們在倉庫裡找到什麼' }, w: '34%' },
              { t: { en: 'Count', zh: '數量' }, w: '12%' },
              { t: { en: 'Which teams', zh: '哪些隊伍' } }
            ],
            rows: [
              [{ en: '`CLAUDE.md` plus `.claude/RESPONSIBLE_AI_USE.md`, identical across repositories', zh: '`CLAUDE.md` 加上 `.claude/RESPONSIBLE_AI_USE.md`，各倉庫之間完全相同' }, '8 of 10',
               { en: 'GCGS · GEMS-Taiwan · GHCIS · HFI · HKSSC · HongKong-HS · HongKong-JSS · Eton-College-UK', zh: 'GCGS · GEMS-Taiwan · GHCIS · HFI · HKSSC · HongKong-HS · HongKong-JSS · Eton-College-UK' }],
              [{ en: 'The Jinja-template wiki layout (`wiki/pages/*.html`) that ships with those files', zh: '與那些檔案一起附帶的 Jinja 模板 wiki 結構（`wiki/pages/*.html`）' }, '7 of 10',
               { en: 'the same eight, minus Eton-College-UK, which kept the policy files and rebuilt the site in React', zh: '同樣那八隊，扣掉 Eton-College-UK——它保留了規範檔，但用 React 重建了整個網站' }],
              [{ en: 'A hand-built Vite/React site with no such files', zh: '自行建置的 Vite／React 網站，沒有這些檔案' }, '2 of 10',
               { en: 'Lambert-GA · HangzhouFourteenAP', zh: 'Lambert-GA · HangzhouFourteenAP' }],
              [{ en: 'A public AI-usage statement as a page on the wiki itself', zh: 'wiki 上有一個公開的 AI 使用聲明頁面' }, { en: 'at least 1', zh: '至少 1' },
               { en: 'HangzhouFourteenAP: the most recent commit in its repository edits `AIUsageStatement.tsx`', zh: 'HangzhouFourteenAP——它倉庫裡最新的一筆提交就是在修改 `AIUsageStatement.tsx`' }]
            ],
            min: 760,
            source: { en: 'Read by us from the ten teams\' public repositories on gitlab.igem.org on 22 Nov 2026. **This is a fact about files, not about conduct**: the policy file is template configuration, it does not state that any team used an assistant, and we are not inferring that. We report it because it shows what the baseline expectation was in 2026.', zh: '由我們於 2026 年 11 月 22 日自十隊在 gitlab.igem.org 上的公開倉庫讀取。**這是關於檔案的事實，不是關於行為的事實**：那份規範檔屬於模板設定，它並未聲明任何隊伍使用過助理，我們也不作此推論。我們報告它，是因為它顯示了 2026 年的基準期待是什麼。' }
          }) +
          h.p({
            en: 'The file itself is worth reading whatever your section, because it is a reasonable document: you are accountable for everything you publish; never let an assistant invent results, data, citations or attributions; keep a human in the loop; do not present generated text as a real person\'s quote. **Four of the ten Overgraduate Top 10 teams took an explicit public position on AI use on the wiki itself** (see the Overgraduate overview). That is the more demanding version of the same idea, because a page can be read by a judge and a repository file usually is not.',
            zh: '不管你在哪個組別，那份檔案本身都值得一讀，因為它是一份合理的文件：你對自己公開的一切負責；絕不要讓助理編造結果、數據、引用或致謝；讓人保持在流程之中；不要把生成的文字當成某個真人的引述。**研究生部前十名中有四隊在 wiki 上對 AI 使用採取了明確的公開立場**——詳見研究生部總覽——那是同一個想法比較嚴格的版本，因為一個頁面評審會讀，而倉庫裡的檔案通常不會。'
          })
      });

      /* ---------------- what each tier should steal ---------------- */
      out += h.sec({
        id: 't-swap',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'One practice each section should take from the one above or below it', zh: '每個組別該從上一層或下一層偷走的一個做法' },
        lede: {
          en: 'Specific, cheap, and transferable. These are our recommendations, and each one names where we got it.',
          zh: '具體、便宜、可移轉。這些是我們的建議，而每一條都註明我們是從哪裡拿來的。'
        },
        body:
          h.phases([
            { h: { en: 'High School should steal the baseline, from Undergraduate', zh: '高中部該從大學部偷走「基準」' },
              p: { en: 'High School dry-lab work in 2026 is full of designers and simulations with nothing to beat. A designer that ranks candidates is only interpretable next to random selection.', zh: '2026 年高中部的乾式工作裡，充滿了「沒有對手可打敗」的設計器與模擬。一個會排序候選的設計器，只有在旁邊擺上隨機挑選時才可判讀。' },
              items: [
                { en: '**The model to copy is Lambert-GA\'s**, and it is already in the High School section: a homology-controlled split, and the honest comparison number: top-three majority hit **50.8 % against 23.3 % random**, and **45.8 % against 23.8 %** on the harder subset with no training homolog. Without the random column, the first number means nothing.', zh: '**要抄的範例就是 Lambert-GA**，而且它就在高中部裡：同源性受控的切分，加上誠實的比較數字——前三名多數命中 **50.8% 對隨機 23.3%**，在沒有訓練同源物的較難子集上是 **45.8% 對 23.8%**。少了隨機那一欄，第一個數字什麼也不代表。' },
                { en: 'This costs no money and no equipment. It costs you being willing to find out that your tool does not work.', zh: '這不花錢、不需要設備。它的代價是你願意發現自己的工具其實沒用。' }
              ],
              done: { en: 'Every ranking, score or prediction on your wiki sits next to the dumbest thing it ought to beat.', zh: 'wiki 上每一個排序、分數或預測，旁邊都擺著它理當打敗的那個最笨的東西。' } },
            { h: { en: 'Undergraduate should steal the outside witness, from High School', zh: '大學部該從高中部偷走「外部見證」' },
              p: { en: 'Undergraduate teams have their own instruments, and so they measure everything themselves. That is why the section\'s weakest results are the ones where the only person who has ever seen the effect is the person who wanted to see it.', zh: '大學部隊伍有自己的儀器，於是所有量測都自己做。這就是為什麼這個組別最弱的結果，都是那種「唯一看過這個效應的人，就是希望看到它的那個人」。' },
              items: [
                { en: 'Pick the one claim your whole project rests on and have it measured somewhere else, by somebody who can return a number you will not like.', zh: '挑出你整個專案所倚賴的那一個主張，把它拿到別的地方量，讓一個有可能回給你「你不喜歡的數字」的人來量。' },
                { en: 'A second method in your own hands is a cross-check, and it is worth having. It is not the same thing as a second pair of hands.', zh: '在你自己手上用第二種方法，那是交叉檢查，也值得做。但那和「第二雙手」不是同一件事。' }
              ],
              done: { en: 'One number on your results page has a provenance line naming a lab that is not yours.', zh: '結果頁上至少有一個數字，附帶一行來源說明，指名一個不屬於你的實驗室。' } },
            { h: { en: 'Overgraduate should steal the cheap rig, from High School', zh: '研究生部該從高中部偷走「便宜的裝置」' },
              p: { en: 'Overgraduate hardware in 2026 is engineered as a deliverable: mass budgets, power budgets, CFD. That is appropriate, and it also means the hardware tends to be a product rather than a measurement.', zh: '2026 年研究生部的硬體是當成交付物來設計的——質量預算、功耗預算、流場模擬。這是恰當的，但這也意味著硬體往往是一個產品，而不是一個量測。' },
              items: [
                { en: '**Lambert-GA\'s $80 vacuum dryer** exists because drying samples costs more than a school lab has. The transferable idea is not the dryer; it is building the cheap thing that removes your own bottleneck, and then publishing the bill of materials so the next team is not blocked by it either.', zh: '**Lambert-GA 的 80 美元真空乾燥器**之所以存在，是因為乾燥樣本的費用超過一間學校實驗室的能力。可移轉的想法不是那台乾燥器，而是「做出那個便宜的東西來解掉自己的瓶頸」，然後把物料清單公開，讓下一支隊伍也不會被它卡住。' },
                { en: 'GEMS-Taiwan\'s photometer is the same move in the measurement direction: an instrument built because the commercial one saturates where the question lives.', zh: 'GEMS-Taiwan 的光度計是同一個動作、朝量測方向做：因為商用儀器在問題所在的範圍就飽和了，所以自己做一台。' }
              ],
              done: { en: 'Your contribution page has one item under $200 that another team can build from your files.', zh: '你的貢獻頁上有一項成本低於 200 美元、別的團隊能照你的檔案做出來的東西。' } },
            { h: { en: 'Everyone should steal inline scoping, from Overgraduate', zh: '每個人都該從研究生部偷走「就地標註範圍」' },
              p: { en: 'This is the single most portable practice we found in thirty wikis, and it costs one clause.', zh: '這是我們在三十個 wiki 中找到最容易搬運的做法，而它的成本是一個子句。' },
              items: [
                { en: 'The pattern: **state what you did, then state what it is not evidence for, in the same sentence.** "Integration and radiation-testing activities should be distinguished from a demonstrated increase in resistance." "1 ppb is the lowest concentration tested, not a validated detection limit." "A positive association, not proof of rate prediction."', zh: '模式是：**先說你做了什麼，然後在同一句話裡說它不構成什麼的證據。**「整合與輻射測試活動，應與已證明的抗性提升區分開來。」「1 ppb 是測過的最低濃度，不是經驗證的偵測極限。」「一個正相關，不是速率預測的證明。」' },
                { en: 'Three of those four examples are from the High School section, which is the whole argument of this page in one line.', zh: '那四個例子裡有三個來自高中部——這一行就是本頁的全部論點。' }
              ],
              done: { en: 'A reader who stops after any single sentence on your results page has not been misled.', zh: '一個在你結果頁任何一句話處停下來的讀者，都沒有被誤導。' } }
          ])
      });

      /* ---------------- limits ---------------- */
      out += h.sec({
        id: 't-limits',
        kick: { en: 'Method', zh: '方法' },
        h2: { en: 'What this comparison cannot tell you', zh: '這個比較不能告訴你什麼' },
        body:
          h.cards([
            { chips: [{ t: { en: 'sample size', zh: '樣本數' }, k: 'r' }],
              h: { en: 'Ten per section, one year', zh: '每組十隊、只有一年' },
              p: { en: 'Every conversion rate on this page has a numerator between 0 and 3. "Conservation converts at 29 % in High School" means two teams out of seven, once. A single different jury decision moves most of these numbers by half. Use them to break a tie between two topics you already like; do not use them to pick a topic.', zh: '本頁每一個轉換率的分子都介於 0 到 3 之間。「保育在高中部的轉換率是 29%」意思是七隊中的兩隊、而且只發生過一次。只要評審的一個判斷不同，這些數字大多會變動一半。請用它們在兩個你本來就喜歡的題目之間做決勝；不要用它們來挑題目。' } },
            { chips: [{ t: { en: 'survivors only', zh: '只有倖存者' }, k: 'r' }],
              h: { en: 'We read winners, so we cannot tell you what loses', zh: '我們讀的是得名者，所以無法告訴你什麼會輸' },
              p: { en: 'Every practice we praise is present in a team that placed. We have no idea how many teams did the same things and did not place, because we did not read the other 433 wikis. A practice shared by all thirty winners might also be shared by all 463 teams. Where we say a practice is rare, we mean rare among the thirty we read.', zh: '我們稱讚的每一個做法，都出現在一支有名次的隊伍身上。我們完全不知道有多少隊做了同樣的事卻沒有名次，因為我們沒有讀另外 433 個 wiki。一個三十個得名者共有的做法，也可能是全部 463 隊共有的。當我們說某個做法罕見時，意思是在我們讀的這三十個裡罕見。' } },
            { chips: [{ t: { en: 'the wiki is not the project', zh: 'wiki 不等於專案' }, k: 'a' }],
              h: { en: 'Judging sees a presentation, a form and a conversation too', zh: '評審也會看到一場報告、一份表單與一次對談' },
              p: { en: 'We read wikis. Judges also watched presentations, read deliverable forms and talked to the teams. A team whose wiki is thin may have been outstanding in the room, and the reverse happens too. Nothing on this page explains a placing; it only describes what the public record contains.', zh: '我們讀的是 wiki。評審還看了報告、讀了交付表單、也和隊伍談過。一支 wiki 很薄的隊伍，可能在現場非常出色，反過來的情況也有。本頁沒有任何內容能解釋一個名次；它只描述公開紀錄裡有什麼。' } },
            { chips: [{ t: { en: 'we are a competitor', zh: '我們是參賽者' }, k: 'a' }],
              h: { en: 'GEMS-Taiwan is in one of these three lists', zh: 'GEMS-Taiwan 就在這三份名單的其中一份裡' },
              p: { en: 'Our own team placed in the High School Top 10 in 2026, which is why this study exists and a reason to check it. Its team page in the High School section opens by saying so. We have tried to be harder on ourselves than on anyone else, which is its own kind of distortion. Read the wikis, not us.', zh: '我們自己的隊伍 2026 年進入高中部前十名，這既是這份研究存在的原因，也是你該檢查它的理由。它在高中部的團隊頁一開頭就寫明了這件事。我們試著對自己比對任何人都更嚴格——而這本身也是一種偏差。去讀那些 wiki，不要只讀我們。' } }
          ]) +
          h.note({
            en: 'Field sizes, countries and village registrations on this page were counted by us from `api.igem.org/v1/teams?year=2026` and `api.igem.org/v1/villages` on 22 November 2026, and awards from [competition.igem.org/results/2026](https://competition.igem.org/results/2026). The 463 accepted team records include 33 with no section recorded; those are excluded from the three section counts. If iGEM revises the published results, this page will be wrong and we will not necessarily know.',
            zh: '本頁的賽場規模、國家與村別登記，由我們於 2026 年 11 月 22 日自 `api.igem.org/v1/teams?year=2026` 與 `api.igem.org/v1/villages` 統計，獎項則取自 [competition.igem.org/results/2026](https://competition.igem.org/results/2026)。463 筆獲接受的隊伍紀錄中有 33 筆未記載組別，已從三個組別的計數中排除。如果 iGEM 修訂公布的成績，本頁就會是錯的，而我們不一定會知道。'
          })
      });

      return out;
    }
  };
})(window);
