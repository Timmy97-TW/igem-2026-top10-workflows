/* GEMS-Taiwan — ReLEAF. Top 10 High School, Best Measurement (HS), Best Hardware (HS)
   and Best Integrated Human Practices (HS), iGEM 2026.
   This is the team that compiled this site. The page says so at the top, in both
   languages, before anything else. Everything factual below is read from
   https://2026.igem.wiki/gems-taiwan/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Build every cargo with no light gate first', zh: '先把每個酬載做成沒有光閘的版本' },
        s: { en: 'Eight constitutive Pveg cassettes, signal peptide + cargo + His tag, colony PCR then Sanger', zh: '八個 Pveg 組成型卡匣：訊號肽＋酬載＋His 標籤，先菌落 PCR 再 Sanger 定序' }, tone: 'g' },
      { l: { en: 'Only then assemble the switch over it', zh: '之後才把開關蓋在它上面' },
        s: { en: 'MoClo 2.0 abandoned for the SubtiToolKit; five cycles, four modules, one Level 2 plasmid', zh: '放棄 MoClo 2.0 改用 SubtiToolKit；五個循環、四個模組、一個 Level 2 質體' } },
      { l: { en: 'Characterise the light plate before trusting it', zh: '在相信光板之前先把它特性化' },
        s: { en: '24 wells, green at 220 / 510 / 3850 lux; growth does not track intensity, and neither does expression', zh: '24 孔，綠光 220／510／3850 lux；生長不隨強度變化，表達量也不隨強度排序' }, tone: 'a' },
      { l: { en: 'Two assays, because amount is not activity', zh: '兩種試驗，因為「量」不等於「活性」' },
        s: { en: 'ELISA and DNPH on the same samples: protein peaks at 12 h, activity at 18 h', zh: '同一批樣品做 ELISA 與 DNPH：蛋白在 12 小時達峰，活性在 18 小時' } },
      { l: { en: 'Ask the plant, and find that timing decides', zh: '去問植物，結果發現決定因素是時機' },
        s: { en: 'Arabidopsis at 100 mM NaCl; pre- and post-treatment rescue, co-treatment does not', zh: '阿拉伯芥在 100 mM NaCl 下；前處理與後處理有救援效果，同時處理沒有' } },
      { l: { en: 'Run WB800 in the loop for 72 hours', zh: '讓 WB800 在迴路裡跑 72 小時' },
        s: { en: 'Shell permeate above 2 µg/mL throughout, 6.3 U/mg specific activity from 18 h', zh: '殼側透過液全程高於 2 µg/mL，18 小時起比活性達 6.3 U/mg' } }
    ],
    dry: [
      { l: { en: 'HARDWARE · An OD₆₀₀ meter inside the culture loop', zh: '硬體 · 把 OD₆₀₀ 計裝進培養迴路' },
        s: { en: '2 mm flow cuvette, amber LED near 600 nm, 90:10 beam splitter, a reference beam that never meets the culture', zh: '2 mm 流動樣品槽、約 600 nm 琥珀色 LED、90:10 分光鏡，以及一道從不經過培養液的參考光束' }, tone: 't' },
      { l: { en: 'Calibrate on a particle that does not grow', zh: '用不會生長的顆粒做校正' },
        s: { en: 'TiO₂ on 23 August, 1 µm SiO₂ on 10 October; the concentration axis is pipetted volume, not another instrument', zh: '8 月 23 日 TiO₂、10 月 10 日 1 µm SiO₂；濃度軸來自移液體積，不是另一台儀器' }, tone: 'g' },
      { l: { en: 'Pre-register, then replay eleven algorithms', zh: '先預先登錄，再回放十一種演算法' },
        s: { en: 'One recorded burst set, eight predictions with thresholds; five of them failed and all eight were published', zh: '同一份錄下的取樣叢集、八個帶門檻的預測；五個沒通過，而八個全部公開' }, tone: 'v' },
      { l: { en: 'HARDWARE · The 0.2 µm wall the biosafety case rests on', zh: '硬體 · 生物安全論證所倚賴的那道 0.2 µm 牆' },
        s: { en: 'mPES hollow fibre, 200 cm², 11 fibres; three pressure transducers and a pinch valve that sets the driving force', zh: 'mPES 中空纖維、200 cm²、11 根纖維；三個壓力傳感器，以及決定驅動力的夾管閥' }, tone: 't' },
      { l: { en: 'Score a stress index on 25 years of harvests', zh: '用 25 年的收穫紀錄為逆境指數評分' },
        s: { en: 'Predicting from earlier years only: county error 365 kg/ha against 419 for a plain trend line', zh: '只用較早年份做預測：縣市誤差 365 kg/ha，純趨勢線為 419' }, tone: 'v' },
      { l: { en: 'Register a growth rate, then let a run score it', zh: '先登錄一個生長速率，再讓實驗去評分' },
        s: { en: '0.2986 h⁻¹ written down on 1 October with a 90% interval; run 6 returned 0.286 ± 0.010', zh: '10 月 1 日寫下 0.2986 h⁻¹ 與 90% 區間；第 6 次運行回報 0.286 ± 0.010' }, tone: 'g' }
    ],
    links: [
      { w: 5, d: 0, l: { en: 'read by their own instrument', zh: '由自己做的儀器讀出' }, up: true },
      { w: 2, d: 5, l: { en: 'a rate from a plate well', zh: '來自微孔的速率' } }
    ]
  };

  PD.pages['hs-gems'] = {
    label: { en: 'GEMS-Taiwan', zh: 'GEMS-Taiwan' },
    title: { en: 'GEMS-Taiwan — ReLEAF', zh: 'GEMS-Taiwan — ReLEAF' },
    render: function (h) {
      var t = team('gems');
      var out = h.teamhero(t, {
        h1: {
          en: 'Two experts said the sensing could not be contained and could not be trusted — and ==the rest of the project is the bill for moving it out of the cell==.',
          zh: '兩位專家說那套感測既無法圍阻、也不夠可信——而==這個專案剩下的部分，就是把感測搬出細胞所要付的帳==。'
        },
        lede: {
          en: 'Three High School special prizes (Measurement, Hardware and Integrated Human Practices), which is more than any other team on this list, for a system that has never once run end to end. What we think earned them is not the system. It is a wiki that keeps saying so: *"no forecast has yet driven a light, and no light driven by a forecast has reached a culture"*, and *"none of these numbers is the light switch doing anything"*. The problem it is built against: climate stress takes yield from a Taiwanese field before the damage is visible, and a biological protectant has to be manufactured somewhere, kept cold, shipped, and then applied by a grower who has to guess the day. ReLEAF answers that by making the protectant beside the field. Leaf and air sensors plus a weather forecast are scored into a stress index, green light switches on *Bacillus subtilis* WB800 through the CcaSR system, the cells secrete ACC deaminase, and a hollow-fibre perfusion bioreactor lets the protein out while keeping the bacteria in.',
          zh: '三個高中部特殊獎——量測、硬體、整合式人類實踐——比這份名單上任何一隊都多，而拿下這些獎的那套系統從來沒有完整地從頭跑到尾過。我們認為贏得這些獎的並不是那套系統，而是一個不斷把這件事講出來的 wiki：*「還沒有任何預報驅動過一盞燈，也還沒有任何由預報驅動的光抵達過培養物」*，以及*「這些數字裡沒有一個是光開關做出來的」*。它所對抗的問題是：氣候逆境在損害看得見之前，就已經從台灣的田裡拿走了產量；而一個生物性保護劑必須在某處被製造、冷藏、運送，最後交給一個得自己猜日期的農民去施用。ReLEAF 的回答是把保護劑做在田邊——葉片與空氣感測器加上氣象預報被算成一個逆境指數，綠光透過 CcaSR 系統打開 *Bacillus subtilis* WB800，細胞分泌 ACC 去胺酶，而一台中空纖維灌流式生物反應器讓蛋白出去、把細菌留下。'
        },
        chips: [
          { t: { en: 'B. subtilis WB800', zh: 'B. subtilis WB800' }, k: 'b' },
          { t: { en: 'CcaSR green light', zh: 'CcaSR 綠光' }, k: 'g' },
          { t: { en: 'Hollow-fibre perfusion', zh: '中空纖維灌流' }, k: 't' },
          { t: { en: '35 Registry parts', zh: '35 個 Registry 元件' }, k: 'v' },
          { t: { en: 'Pre-registered analysis', zh: '預先登錄的分析' }, k: 'a' },
          { t: { en: '31 stakeholders', zh: '31 位利害關係人' }, k: 'r' }
        ],
        stats: [
          { v: '434.2 h', l: { en: 'Longest unattended photometer run; 2671 valid readings of 2720', zh: '光度計無人看管的最長運行；2720 筆中有 2671 筆有效' } },
          { v: '3.8 %', l: { en: 'Median paired difference from the benchtop BioDrop, with no transform fitted', zh: '與桌上型 BioDrop 的配對中位差，且沒有擬合任何轉換式' } },
          { v: '2.44 → 0.016', l: { en: 'Worst bubble error in OD, ungated against two acceptance gates', zh: '最壞的氣泡誤差（OD）：無閘門對上兩道接受閘門' } },
          { v: '5 of 8', l: { en: 'Pre-registered photometer predictions overturned by their own data', zh: '被自己的數據推翻的光度計預先登錄預測數' } },
          { v: '6.3 U/mg', l: { en: 'Specific activity of ACC deaminase in the cell-free shell permeate at 18 h', zh: '18 小時時，無細胞殼側透過液中 ACC 去胺酶的比活性' } },
          { v: '2 platings', l: { en: 'The entire containment evidence: both single, no replicates, one with no incubation record', zh: '全部的圍阻證據：兩次都是單一塗盤、沒有重複，其中一次沒有培養條件紀錄' } }
        ]
      });

      /* ---------------- the disclosure, before anything else ---------------- */
      out += h.warn({
        en: '**This page is about us.** GEMS-Taiwan is the team that compiled this site. We read our own wiki with the same method we used on the other twenty-nine: the published pages, the numbers printed in them, and the sentences in which the team says what it has not done. But we cannot be a neutral reader of it. Every judgement on this page is worth less than the same judgement anywhere else on the site, and the paragraphs that praise a method are the ones to distrust first. The facts below are quoted from the wiki and can be checked against it line by line; where we have an opinion it is labelled as ours, as on every other page. If you only have time for one thing, read [the wiki itself](https://2026.igem.wiki/gems-taiwan/) rather than this.',
        zh: '**這一頁寫的是我們自己。** GEMS-Taiwan 就是彙編本站的團隊。我們用讀另外二十九支隊伍的同一套方法讀自己的 wiki：看公開的頁面、看上面印出的數字，也看該隊自己寫下「哪些事還沒做到」的那些句子。但我們不可能是它的中立讀者。這一頁上的每個判斷，都比本站任何其他地方同樣的判斷更不值得採信，而其中稱讚某個做法的段落，是最該先被懷疑的。底下的事實都引自該 wiki，可以逐條回去核對；凡屬我們的看法，都像其他頁面一樣標示出來。如果你只有時間做一件事，請去讀 [wiki 本身](https://2026.igem.wiki/gems-taiwan/)，而不是讀這一頁。'
      });

      out += h.toc([
        { id: 'm-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'm-pivot', t: { en: 'The abandoned design', zh: '被放棄的設計' } },
        { id: 'm-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'm-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'm-meas', t: { en: 'Measurement', zh: '量測' } },
        { id: 'm-hw', t: { en: 'Hardware', zh: '硬體' } },
        { id: 'm-ihp', t: { en: 'Human practices', zh: '人類實踐' } },
        { id: 'm-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'm-copy', t: { en: 'What to copy', zh: '值得抄的做法' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'm-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Make it beside the field, because what has to arrive is a decision as much as a protein', zh: '就在田邊製造，因為需要抵達的不只是一個蛋白，還有一個判斷' },
        lede: {
          en: 'A large commercial farm can cover the money, the equipment and the labour a biological protectant takes. The farms most exposed to local climate stress are the ones that cannot.',
          zh: '一座大型商業農場可以負擔一個生物性保護劑所需的錢、設備與人力。而最暴露在當地氣候逆境下的那些農場，正是負擔不起的那一群。'
        },
        body:
          h.p({
            en: 'The constraint the project is built against is a Taiwanese one and is stated with numbers: holdings are fragmented, the technology is expensive, and **by 2021 the average agricultural manager was 63.8 years old**. More than 23 million people depend on around 769,000 hectares of cultivable land. Centrally made biostimulants are purified, formulated for stability, shipped and stored, and the farmer is still left to judge when to apply what arrives. ReLEAF removes the factory and the cold chain, and in doing so takes on the judgement as well.',
            zh: '這個專案所對抗的限制是台灣式的，而且是用數字寫出來的：耕地零碎、技術昂貴，而且**到 2021 年，農業經營者的平均年齡是 63.8 歲**。超過 2300 萬人依賴約 769,000 公頃可耕地。集中製造的生物刺激素要純化、為了安定性而配方化、運送、入庫，而農民最後還是得自己判斷何時施用送來的東西。ReLEAF 拿掉了工廠與冷鏈，也因此把那個判斷一起承擔下來。'
          }) +
          h.flow({
            title: { en: 'Predict → Switch → Secrete → Contain → Deliver', zh: 'Predict→Switch→Secrete→Contain→Deliver' },
            sub: { en: 'Each stage carries the number the wiki gives it, and the thing the wiki says is not done. The last stage is the weakest and the wiki names it as such.', zh: '每個階段都附上該 wiki 給它的數字，以及該 wiki 說還沒做到的那件事。最後一個階段是最弱的，而該 wiki 自己就這樣寫。' },
            stages: [
              { label: { en: 'Predict', zh: 'Predict' }, sub: { en: 'Leaf and air sensors plus a forecast', zh: '葉片與空氣感測器加上預報' }, tone: 'v',
                items: [{ en: 'the index is scored on 25 years of county rice harvests: 365 kg/ha error against 419 for a trend line, but neither sensor has run in a field', zh: '該指數以 25 年的縣市稻作收穫評分：誤差 365 kg/ha，趨勢線為 419——但兩個感測器都沒有在田裡跑過' }] },
              { label: { en: 'Switch', zh: 'Switch' }, sub: { en: 'Green light on CcaSR', zh: '綠光作用於 CcaSR' }, tone: 'g',
                items: [{ en: 'the four-module circuit is assembled and in one Level 2 plasmid; no forecast has yet driven the lamp', zh: '四模組線路已組裝並放進一個 Level 2 質體；但還沒有任何預報驅動過那盞燈' }] },
              { label: { en: 'Secrete', zh: 'Secrete' }, sub: { en: 'WB800 makes ACC deaminase', zh: 'WB800 製造 ACC 去胺酶' }, tone: 'b',
                items: [{ en: 'ELISA gives about 16 µg/mL for ACC deaminase against about 6 for LEA14 and BoPep4; the host control reads in the same range', zh: 'ELISA 給出 ACC 去胺酶約 16 µg/mL，LEA14 與 BoPep4 各約 6；而宿主對照落在同一個範圍' }] },
              { label: { en: 'Contain', zh: 'Contain' }, sub: { en: 'A 0.2 µm hollow-fibre wall', zh: '一道 0.2 µm 的中空纖維牆' }, tone: 't',
                items: [{ en: 'shell permeate above 2 µg/mL through 72 h; no colonies on the shell side in either of two platings, and that is the whole of the evidence', zh: '殼側透過液在 72 小時內都高於 2 µg/mL；兩次塗盤的殼側都沒有菌落，而這就是全部的證據' }] },
              { label: { en: 'Deliver', zh: 'Deliver' }, sub: { en: 'Into hydroponic water or irrigation', zh: '進入水耕循環或灌溉' }, tone: 'a',
                items: [{ en: 'applied by hand in every trial so far; the reactor is not plumbed into a crop\'s water supply, and the wiki says connecting it remains a future step', zh: '到目前為止的每次試驗都是人工施用；反應器並未接上作物的供水，而該 wiki 寫明接上去仍是未來的步驟' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Description, Results and Hardware pages.', zh: '由我們依該隊 Description、Results、Hardware 頁繪製。' }
          }) +
          h.take({ en: 'The sentence the whole project turns on', zh: '整個專案所倚賴的那一句話' }, {
            en: 'From the bioreactor page: *"We only need the protectant in the field, so we keep the organism in a machine and send out only its product. **That turns a release problem into a containment problem.**"* That is a design decision written as a trade, not as a benefit, and the rest of the wiki is the cost of the trade.',
            zh: '出自生物反應器頁：*「我們只需要保護劑出現在田裡，所以把生物留在機器裡，只送出它的產物。**這就把一個釋出問題變成了一個圍阻問題。**」*這是一個被寫成「交換」而不是「好處」的設計決定——而這個 wiki 其餘的部分，就是這筆交換的代價。'
          })
      });

      /* ---------------- the pivot ---------------- */
      out += h.sec({
        id: 'm-pivot',
        kick: { en: 'The pivot', zh: '那次轉向' },
        h2: { en: 'The design that was abandoned, and the two objections that killed it', zh: '被放棄的那個設計，以及殺死它的兩個反對意見' },
        lede: {
          en: 'The first ReLEAF was a transgenic plant growth-promoting rhizobacterium that would live on the roots and make the protectant there. A DesK–DesR system would read temperature and switch on a stress-response pathway.',
          zh: '最初的 ReLEAF 是一株會住在根上、就地製造保護劑的轉基因植物生長促進根圈細菌。一套 DesK–DesR 系統會讀取溫度，並打開一條逆境反應路徑。'
        },
        body:
          h.p({
            en: 'That design put the sensor, the decision and the factory all inside one cell in the soil. Both halves of it were rejected within three weeks of each other in April, by different people and for different reasons, and the response was to move the sensing out of the cell into electronics and an AIoT model and to build a machine to hold the cells. Nothing else on this wiki reaches as far as that decision does: it is why there is a bioreactor, why there is a photometer, why there is a digital twin, and why the whole system now has a joint that has not been closed.',
            zh: '那個設計把感測器、判斷與工廠全部放進土壤裡的同一個細胞。它的兩半在四月相隔不到三週內分別被否決，由不同的人、基於不同的理由；而回應方式是把感測搬出細胞、交給電子元件與一個 AIoT 模型，並做一台機器把細胞關起來。這個 wiki 上沒有別的東西影響得像那個決定那麼遠：它是生物反應器存在的理由、光度計存在的理由、數位孿生存在的理由，也是整套系統現在有一個尚未接起來的接點的理由。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'What was objected to', zh: '被反對的是什麼' }, w: '26%' },
              { t: { en: 'Who said it, and what changed', zh: '誰說的，以及改了什麼' } }
            ],
            rows: [
              [{ en: '**The bacteria could not be contained**', zh: '**細菌無法被圍阻**' },
               { en: 'Prof. Chen Wen-Liang (NYCU, founder of AgriTalk), **10 April**: define a clear input–output mapping, move to a bioreactor-based system instead of soil release, and **treat physical containment as the primary biosafety mechanism**. His summary of the architecture is quoted on the page: *"design the hardware as the printer and the B. subtilis as the ink."*', zh: '陳文亮教授（陽明交通大學，AgriTalk 創辦人），**4 月 10 日**：定義清楚的輸入—輸出對應、改走生物反應器路線而不是土壤釋出，並**把物理圍阻當成主要的生物安全機制**。他對整個架構的總結被引在頁面上：*「把硬體設計成印表機，把 B. subtilis 當成墨水。」*' }],
              [{ en: 'A kill switch was the plan instead', zh: '原本打算用自殺開關代替' },
               { en: 'Dr. Jennifer Brophy (Stanford), **18 April**: physical containment should be primary **rather than relying only on a kill switch**. Before that conversation the plan was a kill switch and bioreactor v1; after it the kill switch became optional and a semi-permeable membrane was designed. The Before/After is printed on the page.', zh: 'Jennifer Brophy 博士（史丹佛），**4 月 18 日**：物理圍阻應該是主要機制，**而不是只靠一個自殺開關**。在那次談話之前，計畫是自殺開關加上生物反應器 v1；之後自殺開關變成可選項，並開始設計半透膜。這份「之前／之後」就印在頁面上。' }],
              [{ en: '**Biological sensing was neither precise nor controllable enough**', zh: '**生物性感測既不夠精確、也不夠可控**' },
               { en: 'The Description page states this as expert advice without naming the adviser. The Engineering page gives the argument instead, and it is the better version: **a stress threshold is a property of the crop, not of the stress.** At 30 °C a potato is already in trouble, because tuber formation is fully inhibited above 25 °C, while sorghum is still inside its optimal range and only loses yield above 32.5 °C. One circuit cannot be tuned for both, so the threshold moved into a microcontroller.', zh: 'Description 頁把這一點寫成專家建議，但沒有指名是誰。Engineering 頁給的是論證本身，而那是更好的版本：**一個逆境門檻是作物的性質，不是逆境的性質。**在 30 °C 下馬鈴薯已經有麻煩，因為塊莖形成在 25 °C 以上就完全被抑制；而高粱還在它的最適範圍內，要到 32.5 °C 以上才開始損失產量。一個線路不可能同時為兩者調好，所以門檻被搬進了微控制器。' }],
              [{ en: 'And a third reason, given only later', zh: '還有第三個理由，只在後面才出現' },
               { en: 'On the bioreactor page: lab strains of *B. subtilis* **lack motility, cannot form biofilm and have metabolic deficiencies**, so they would have struggled at the roots regardless of whether anyone objected. This is the one reason that is about the organism rather than about the risk, and it appears on one page only.', zh: '在生物反應器頁上：實驗室的 *B. subtilis* 菌株**不具運動性、無法形成生物膜，而且有代謝缺陷**，所以不論有沒有人反對，它們在根圈本來就會活得很辛苦。這是唯一一個關於生物本身、而不是關於風險的理由，而它只出現在一頁上。' }],
              [{ en: 'What replaced it', zh: '取代它的是什麼' },
               { en: 'Sensing became two electronic sensors and a model fitted to 25 years of harvest records; production became a 24-well light plate and a green LED strip at about 535 nm; containment became an mPES hollow fibre with 0.2 µm pores. **Three of the four hardware builds on this wiki exist because of April.**', zh: '感測變成兩個電子感測器加上一個以 25 年收穫紀錄擬合的模型；生產變成一個 24 孔光板與一條約 535 nm 的綠色 LED 燈條；圍阻變成一根孔徑 0.2 µm 的 mPES 中空纖維。**這個 wiki 上四件硬體中有三件，是因為四月才存在的。**' }]
            ],
            min: 740,
            source: { en: 'Read from the team\'s Description, Engineering, Integrated Human Practices and Hardware → Bioreactor pages. The collection into one table is ours.', zh: '讀自該隊 Description、Engineering、Integrated Human Practices 與 Hardware → Bioreactor 頁。整理成一張表是我們做的。' }
          }) +
          h.take({ en: 'Our reading, offered as a reading', zh: '我們的解讀，而且只當成一種解讀' }, {
            en: 'This is a project whose architecture was rewritten by its human-practices work, in April, before most of the bench work existed. And we think that is **presumably** why Best Integrated Human Practices followed. We cannot show the causal link and the wiki does not claim it: a judging outcome has reasons we cannot see. What we can show is the order of events, and the order is that the experts spoke first and the hardware came after.',
            zh: '這是一個架構被自己的人類實踐工作重寫過的專案，而且發生在四月、在大部分實驗工作存在之前——我們認為這**大概**就是最佳整合式人類實踐獎隨之而來的原因。我們無法證明這條因果連結，該 wiki 也沒有這樣主張：一個評審結果背後的理由，是我們看不到的。我們能展示的只是事件順序，而順序是專家先說話、硬體後出現。'
          }) +
          h.note({
            en: '**And the part that is thin.** "DesK–DesR" appears exactly once in the whole wiki, in one sentence on the Description page. The Integrated Human Practices page documents the containment advice in detail, with names and dates and a Before/After for each conversation, but never names the sensor that was dropped, and **no data from the abandoned design is published anywhere.** So the pivot is attested as a decision that was taken, not as an experiment that failed. Teams that want to copy this should notice that the abandoned design cost nothing to abandon, because it had not yet been built.',
            zh: '**還有薄弱的那一塊。**「DesK–DesR」在整個 wiki 裡只出現一次——在 Description 頁的一句話裡。Integrated Human Practices 頁把圍阻方面的建議記錄得很詳細，有姓名、有日期，每次談話都有「之前／之後」，卻從未指名那個被放棄的感測器，而且**被放棄的設計沒有任何數據在任何地方公開。**所以這次轉向被證實的是「一個被做出的決定」，而不是「一個失敗的實驗」。想抄這一點的隊伍應該注意：放棄那個設計沒有付出代價，因為它還沒被做出來。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'm-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Three lanes in a diagram built for two', zh: '一張為兩條泳道設計的圖裡放了三條' },
        lede: {
          en: 'Every other page on this site draws a wet lane and a dry lane. This team has a third, and the honest thing to do is say so rather than hide hardware inside the dry lab.',
          zh: '本站其他每一頁都只畫一條濕式泳道與一條乾式泳道。這支隊伍有第三條，而誠實的做法是把這件事說出來，而不是把硬體藏在乾式實驗裡面。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'ReLEAF: six wet-lab steps against six dry-lab and hardware steps', zh: 'ReLEAF：六個濕式步驟，對上六個乾式與硬體步驟' },
          sub: { en: 'Wet lab above. Below it the dry lab and the hardware share one lane, and the two steps marked HARDWARE are physical builds, not models. A dashed arrow means one lane handed the other something it could not have produced alone. Note what is NOT drawn: no arrow runs from the stress index to the light, because that joint has not been closed.', zh: '上為濕式。下方由乾式實驗與硬體共用一條泳道，其中標了 HARDWARE 的兩步是實體製作，不是模型。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。請注意沒有被畫出來的東西：沒有任何箭頭從逆境指數連到光，因為那個接點還沒接起來。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Measurement, Math Model, Digital Twin and Hardware pages.', zh: '由我們依該隊 Engineering、Results、Measurement、Math Model、Digital Twin 與 Hardware 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'm-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Three cloning pipelines, and the order they were run in is the result', zh: '三條並行的選殖管線，而它們被執行的順序本身就是結果' },
        lede: {
          en: 'Twelve DBTL cycles across three pipelines that ran side by side all season, written up separately because they are not independent.',
          zh: '整季並行的三條管線、合計十二個 DBTL 循環，被分開記述，因為它們彼此並不獨立。'
        },
        body:
          h.phases([
            { h: { en: 'Build every cargo without the gate, first', zh: '先把每個酬載做成沒有光閘的版本' },
              p: { en: 'Pipeline 2 is five cycles that build each protectant behind a **constitutive** promoter, so a cargo can be tested without the light circuit on top of it. The architecture is fixed across all eight: Pveg, EEBD-RBS0, a secretion signal peptide, the cargo, a 6×His tag, and the B0015 terminator.', zh: '管線 2 是五個循環，把每個保護劑接在**組成型**啟動子後面，這樣就能在不加光線路的情況下測試一個酬載。八個構築的架構是固定的：Pveg、EEBD-RBS0、一個分泌訊號肽、酬載、一個 6×His 標籤，以及 B0015 終止子。' },
              items: [
                { en: 'Cargo options are **AcdS** (ACC deaminase), **LEA14** and **BoPep4**, each in wild-type, truncated and codon-optimised forms, fused to either a **Csn** or a **SamyQ** signal peptide.', zh: '酬載選項是 **AcdS**（ACC 去胺酶）、**LEA14** 與 **BoPep4**，每個都有野生型、截短型與密碼子最佳化型，並接上 **Csn** 或 **SamyQ** 其中一個訊號肽。' },
                { en: 'The pipelines are described as dependent on one another on purpose: **pipeline 2 is where a cassette is first sequence-verified**, and those verified inserts are what pipeline 1 then assembles into Level 2.', zh: '這些管線被刻意描述成彼此依賴：**卡匣是在管線 2 裡第一次被定序確認的**，而那些確認過的插入片段，才是管線 1 接著組進 Level 2 的東西。' },
                { en: 'The cost of the shortcut is stated in the same section: because the two signal peptides were never compared in one experiment, the codon-optimisation comparison **carries two independent variables at once**, and the team corrects for the peptide using published figures (33.8% for Csn in *E. coli*, about 90% for SamyQ in *B. subtilis*) rather than their own data.', zh: '這條捷徑的代價寫在同一節裡：因為那兩個訊號肽從未在同一個實驗裡被比較過，密碼子最佳化的比較**同時帶了兩個獨立變數**，而該隊是用文獻數字（Csn 在 *E. coli* 中 33.8%、SamyQ 在 *B. subtilis* 中約 90%）而不是自己的數據去校正訊號肽的貢獻。' }
              ],
              done: { en: 'A cargo that can be assayed on its own, and an admitted confound in the one comparison that used it.', zh: '一個可以單獨被試驗的酬載，以及在用到它的那個比較裡被承認的一個混淆因子。' } },
            { h: { en: 'Then assemble the switch over it, and change kit when the screen is unreadable', zh: '之後才把開關蓋上去，並在篩選讀不出來時換掉套件' },
              p: { en: 'Pipeline 1 is five cycles that put four transcription units (PCB chromophore production, CcaS light sensing, CcaR transduction, and the PcpcG2-controlled cargo) into one plasmid so that green light gates the protectant.', zh: '管線 1 是五個循環，把四個轉錄單元——PCB 發色團合成、CcaS 光感測、CcaR 訊號傳遞，以及由 PcpcG2 控制的酬載——放進同一個質體，讓綠光去閘控保護劑。' },
              items: [
                { en: 'Cycle 1 failed and is published as a failure: MoClo 2.0 gave **high background, empty vectors and off-target bands, and no trial produced a usable Level 1 clone.** The learn step names the cause as going into Level 1 straight from unverified PCR products. The whole build then moved to the **SubtiToolKit**, which came from the authors of the system, with an intermediate cloning step added ahead of Level 1.', zh: '第 1 循環失敗，而且是以失敗的形式公開的：MoClo 2.0 給出**高背景、空載體與脫靶條帶，沒有任何一次試驗產出可用的 Level 1 克隆。**learn 步驟指出原因是直接拿未確認的 PCR 產物去做 Level 1。整個組裝接著搬到 **SubtiToolKit**，它來自該系統的原作者，並在 Level 1 之前加入一個中間選殖步驟。' },
                { en: 'The gel from that failed screen is published **with the reason it cannot be read**: it reaches the team with no lane map, no date and no expected sizes, *"so it can be shown but not read."* We have not seen another wiki print a figure and then disqualify it in the caption.', zh: '那次失敗篩選的膠體圖被公開，而且**附上它無法被判讀的理由**：它到該隊手上時沒有泳道圖、沒有日期、沒有預期大小，*「所以它可以被展示，但不能被判讀。」*我們沒有在別的 wiki 上看過有人印出一張圖，然後在圖說裡把它取消資格。' },
                { en: 'What the finished Level 2 construct is verified by, exactly: **nine correct junctions give the order and a double digest gives the length. It is not sequenced end to end.** The team\'s own summary sentence is *"The switch is built"*, and that caveat sits in the same paragraph.', zh: '完成後的 Level 2 構築究竟靠什麼確認：**九個正確的接點給出順序、一次雙酵素切割給出長度——而它沒有被端到端定序。**該隊自己的總結句是*「開關做好了」*，而那個保留就寫在同一段裡。' }
              ] },
            { h: { en: 'Find the voltage per construct, not per organism', zh: '逐個構築去找電壓，而不是逐個生物' },
              p: { en: 'Pipeline 3 is electroporation, measured in colonies recovered, and the headline finding is that there is no single answer: **the best voltage moves with the construct, from 1.1 to 2.5 kV.**', zh: '管線 3 是電穿孔，以回收的菌落數計量，而主要發現是沒有單一答案：**最佳電壓隨構築而變，從 1.1 到 2.5 kV。**' },
              items: [
                { en: 'For Pveg-SamyQ-AcdS 2.1 in WB800, **2.1 kV gave 434 colonies against 403 at 2.3 kV** at the same dilution; on erythromycin plates 2.3 kV collapsed to 15 colonies.', zh: '在 WB800 中對 Pveg-SamyQ-AcdS 2.1 而言，同樣稀釋下**2.1 kV 給出 434 個菌落，2.3 kV 給出 403 個**；在含紅黴素的平板上，2.3 kV 掉到 15 個菌落。' },
                { en: 'For the assembled Level 2 pSTK-EXP2-CcaSRv1-AcdS 2.1, the order reverses: **2.3 kV peaked at 370 colonies, against 268 at 2.1 kV and 233 at 2.5 kV.**', zh: '對組裝後的 Level 2 pSTK-EXP2-CcaSRv1-AcdS 2.1 而言，順序反過來：**2.3 kV 在 370 個菌落達到最高，2.1 kV 為 268 個、2.5 kV 為 233 個。**' },
                { en: 'And for BoPep4 2.1 the whole range shifts down: **1.1 kV gave 15 and 11 colonies against 6 at 1.5 kV.** The sweeps are also what showed that the assembled 10 kb plasmid could be recovered at all.', zh: '而對 BoPep4 2.1 而言整個範圍往下移：**1.1 kV 給出 15 與 11 個菌落，1.5 kV 只有 6 個。**這些電壓掃描也是最先顯示那個組裝好的 10 kb 質體根本可以被回收的證據。' }
              ] },
            { h: { en: 'Run two assays, because the amount and the activity do not peak together', zh: '做兩種試驗，因為「量」與「活性」不在同一個時間達峰' },
              p: { en: 'A competitive anti-His ELISA counts the tagged protein whether or not it works; the DNPH assay detects α-ketobutyrate, the product, and so only sees active enzyme. Running both on the same samples is what separated the two.', zh: '競爭型 anti-His ELISA 不管蛋白有沒有在工作都把它算進去；DNPH 試驗偵測的是產物 α-ketobutyrate，所以只看得到有活性的酵素。對同一批樣品同時做這兩種，才把兩者分開。' },
              items: [
                { en: 'ELISA across the three protectants: **ACC deaminase about 16 µg/mL, LEA14 and BoPep4 about 6 µg/mL each**, so ACC deaminase is roughly three times the other two.', zh: '三個保護劑的 ELISA 結果：**ACC 去胺酶約 16 µg/mL，LEA14 與 BoPep4 各約 6 µg/mL**，所以 ACC 去胺酶大約是另外兩者的三倍。' },
                { en: 'The cofactor requirement was tested before anything else was read: without added **pyridoxal 5′-phosphate** the Csn strain is indistinguishable from the untransformed host, and SamyQ with PLP produced **89.7 nmol of total product, a 2.19× increase over Csn with PLP.**', zh: '輔酶需求是在讀取其他任何東西之前就先測過的：不加**吡哆醛 5′-磷酸**時，Csn 菌株與未轉型宿主分不出來；而 SamyQ 加 PLP 產出**89.7 nmol 總產物，比 Csn 加 PLP 高出 2.19 倍。**' },
                { en: 'In the reactor the two assays disagree in time, and the team treats that as a finding rather than an error: **ELISA peaks at 12 h (about 6.5 µg/mL) and DNPH at 18 h (about 30 nmol α-KB mL⁻¹ h⁻¹), six hours later.** The explanation offered is post-secretory maturation: ACC deaminase works only as a multimer and has to load its cofactor outside the cell. The wiki says plainly that this has not been tested directly.', zh: '在反應器裡這兩種試驗在時間上不一致，而該隊把這當成一個發現而不是一個錯誤：**ELISA 在 12 小時達峰（約 6.5 µg/mL），DNPH 在 18 小時達峰（約 30 nmol α-KB mL⁻¹ h⁻¹），晚了六小時。**他們提出的解釋是分泌後成熟——ACC 去胺酶只有以多聚體形式才有活性，而且必須在細胞外裝上輔酶——而該 wiki 直接寫明這一點並未被直接測試過。' },
                { en: 'The reporter that was supposed to make all of this easy did not work. **AmilCP, a chromoprotein, left the medium colourless** across repeated experiments: A588 was 0.082 without and 0.081 with, and 1.515 against 1.628 in PBS. The reason offered is that AmilCP is a β-barrel that folds fast in the cytoplasm while the *B. subtilis* Sec pathway needs its cargo unfolded, and the page calls its own explanation **"an educated guess."**', zh: '本來應該讓這一切變簡單的那個報告子沒有成功。**色素蛋白 AmilCP 在反覆實驗中都讓培養基保持無色**：不加時 A588 為 0.082、加了是 0.081，在 PBS 中則是 1.515 對 1.628。他們提出的理由是 AmilCP 是一個在細胞質中快速折疊的 β-桶，而 *B. subtilis* 的 Sec 路徑需要貨物保持未折疊；而該頁把自己的解釋稱為**「一個有根據的猜測」**。' }
              ] },
            { h: { en: 'Design LEA14 and BoPEP4 as parts for later, and say what was not worth making', zh: '把 LEA14 與 BoPEP4 設計成留給之後的元件，並說清楚什麼不值得做' },
              p: { en: 'Only ACC deaminase was carried through to the reactor. The other two went to the Registry as parts for future integration, and the protein-design page is unusual in that **the list of rejected designs is as long as the list of sent ones, with the evidence for each rejection.**', zh: '只有 ACC 去胺酶被一路帶到反應器。另外兩個以元件的形式進了 Registry，留待未來整合；而蛋白設計頁不尋常的地方在於：**被否決的設計清單和被送出的清單一樣長，而且每一個否決都附上證據。**' },
              items: [
                { en: '**BoPEP4** is a 23-residue *Brassica oleracea* plant elicitor peptide that binds the receptor PEPR1. The whole truncation ladder was sent, 1–23, 7–23, 9–23 and 15–23, *because nothing computational separated the best candidates*, with 15–23 kept deliberately as the ladder\'s own negative, plus two published-weak substitutions, **G17A at more than 4000-fold weaker and S15A at roughly 100-fold**, as assay calibrators.', zh: '**BoPEP4** 是一個 23 個殘基的 *Brassica oleracea* 植物誘導肽，結合受體 PEPR1。整條截短梯度都被送出去了——1–23、7–23、9–23 與 15–23——*因為計算方法無法分出最好的候選者*，其中 15–23 被刻意留作這條梯度自己的負對照，另外還有兩個文獻上已知較弱的取代，**G17A 弱超過 4000 倍、S15A 約弱 100 倍**，作為試驗的校正點。' },
                { en: 'The result they are most pleased with is a near miss caught in time: **a C-terminal 6×His tag, which every earlier check had approved, abolishes the Asn23 contact the peptide depends on**, so the tag was moved to the N-terminus. Molecular dynamics was run on BoPEP4 only, nine 30 ns all-atom trajectories on the PEPR1 ectodomain, and the page states its own limit, that **eight trajectories are not eight independent samples**, and that the construct ranked first on backbone RMSD is the one whose salt bridge is gone.', zh: '他們最滿意的結果是一次及時攔下的險失：**一個 C 端 6×His 標籤——之前每一道檢查都放行過——會消滅這個肽所倚賴的 Asn23 接觸**，所以標籤被移到 N 端。分子動力學只跑在 BoPEP4 上——在 PEPR1 胞外域上九條 30 ns 全原子軌跡——而該頁自己寫明限制：**八條軌跡不等於八個獨立樣本**，而且以主鏈 RMSD 排第一的那個構築，正是鹽橋消失的那一個。' },
                { en: '**LEA14** is a 151-residue plant protein, and the page is explicit that it is not an enzyme: one copy protects one thing and is not reused, so the only routes to more effect are more copies or more per copy. Five N-His constructs test both, including a **K-segment membrane-binding motif LEA14 does not naturally have**, with a matched trim-only control so the pair isolates what the K-segment contributes.', zh: '**LEA14** 是一個 151 個殘基的植物蛋白，而該頁明確指出它不是酵素：一個分子保護一個對象，而且不會被重複使用，所以要得到更多效果，只能靠更多分子或讓每個分子做更多事。五個 N-His 構築同時測這兩條路，包括一個**LEA14 本身沒有的 K-segment 膜結合模組**，並配上一個只做截短的對照，讓這一對能單獨分離出 K-segment 的貢獻。' }
              ] },
            { h: { en: 'Ask the plant, and get an answer about timing rather than dose', zh: '去問植物，而得到的是關於時機、而不是關於劑量的答案' },
              p: { en: '*Arabidopsis thaliana* on agar and in hydroponics, with the stress window found first: **100 mM NaCl stresses the plants significantly without killing them**, so the screen has somewhere to read.', zh: '*Arabidopsis thaliana* 在洋菜膠上與水耕中，而逆境視窗是先找出來的：**100 mM NaCl 能明顯造成逆境而不會把植物殺死**，所以篩選才有讀值空間。' },
              items: [
                { en: 'The result is about when, not how much: **pre-treatment and post-treatment with ACC deaminase showed a rescue effect; co-treatment did not.** Pre-treated plants kept greater rosette area, denser foliage and more root growth at both 75 and 100 mM.', zh: '結果關乎何時，而不是多少：**ACC 去胺酶的前處理與後處理都顯示救援效果；同時處理沒有。**在 75 與 100 mM 下，前處理的植物都保有較大的蓮座面積、較密的葉叢與較多的根生長。' },
                { en: 'The caveats are printed beside it. The main salinity set ran with **nine seedlings per condition on one plate per group**, mould spread across the agar during the early filter-sterilisation trials, and **the 100 mM post-treatment plate was excluded for contamination.** Heat stress in hydroponics *"flattened the treated plants along with the controls"*, so that arm settles nothing.', zh: '保留條件就印在旁邊。主要的鹽逆境組是**每個條件九棵苗、每組一盤**，而在早期過濾滅菌試驗期間黴菌在洋菜膠上擴散，**100 mM 後處理那盤因污染被排除。**水耕中的熱逆境*「把處理組和對照組一起壓平了」*，所以那一組什麼也沒能定案。' },
                { en: 'One methodological finding from these assays is worth more than the rescue result: **normalising chlorophyll by fresh weight alone can invert the trend**, because stress has destroyed the biomass in the denominator. In one of their own heat assays per-gram chlorophyll rose threefold while total chlorophyll had fallen about 91%. The recommendation is to print both.', zh: '這些試驗裡有一項方法學發現，價值高於那個救援結果：**只用鮮重把葉綠素標準化，可能讓趨勢反向**，因為逆境已經毀掉了分母裡的生物量。在他們自己的一次熱逆境試驗中，每克葉綠素上升三倍，而總葉綠素其實下降了約 91%。他們的建議是兩個都印出來。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'm-meas',
        kick: { en: 'Measurement', zh: '量測' },
        h2: { en: 'An instrument calibrated against something that cannot grow, and a pre-registration that failed five times out of eight', zh: '一台用不會生長的東西校正的儀器，以及一份八次裡錯了五次的預先登錄' },
        lede: {
          en: 'This is the part of the wiki we would still point at if the team had won nothing. Two photometer builds, two particle standards eight weeks apart, eleven algorithms replayed on one recorded dataset, and a list of predictions written down before the measurement.',
          zh: '即使這支隊伍什麼獎都沒得，這仍是我們會指出來的那一段。兩個光度計版本、相隔八週的兩種顆粒標準、在同一份錄下的數據上回放的十一種演算法，以及一份在量測之前就寫下的預測清單。'
        },
        body:
          h.h3({ en: 'The Pro reports OD\u2086\u2080\u2080 with no curve fitted to a benchtop', zh: 'Pro \u7248\u5728\u6c92\u6709\u5c0d\u684c\u4e0a\u578b\u5100\u5668\u64ec\u5408\u4efb\u4f55\u66f2\u7dda\u7684\u60c5\u6cc1\u4e0b\u5c31\u5831\u51fa OD\u2086\u2080\u2080' }) +
          h.p({
            en: 'Both builds read illuminance through a **2 mm flow cuvette** with an amber LED near 600 nm, and convert it in software with a path-length factor of **5.0** onto the conventional 1 cm OD₆₀₀ basis. The **Pro** (US$371.78) adds a collimating lens and a **90:10 beam splitter** so a reference sensor watches the LED without the beam ever crossing the culture; the **Slim** (US$235.29) replaces the free-space optics with a fibre collimator. Blank referencing cancels the fixed optical difference between the two paths, which is why the Pro **reports OD₆₀₀ with no instrument-specific curve fitted against a benchtop spectrophotometer**. The claim the measurement prize most plausibly rests on.',
            zh: '兩個版本都用約 600 nm 的琥珀色 LED 穿過一個 **2 mm 流動樣品槽**讀取照度，再在軟體中以光程因子 **5.0** 換算到慣用的 1 cm OD₆₀₀ 基準。**Pro** 版（371.78 美元）多了一片準直透鏡與一個 **90:10 分光鏡**，讓一個參考感測器盯著 LED，而那道光束從不穿過培養液；**Slim** 版（235.29 美元）則用光纖準直器取代自由空間光學。空白參照會把兩條光路之間的固定光學差異消掉，這就是為什麼 Pro **可以在不對桌上型分光光度計擬合任何儀器專屬曲線的情況下報出 OD₆₀₀**——而這很可能就是量測獎最主要倚賴的那個主張。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Validation run', zh: '驗證實驗' }, w: '22%' },
              { t: { en: 'Against what', zh: '對照什麼' }, w: '26%' },
              { t: { en: 'What it returned', zh: '結果是什麼' } }
            ],
            rows: [
              [{ en: '**23 August**: TiO₂', zh: '**8 月 23 日**——TiO₂' },
               { en: 'Titanium dioxide added by mass to the stirred loop, 2 to 60 mg in 400 mL, 45 paired points', zh: '以質量把二氧化鈦逐步加入攪拌迴路，400 mL 中 2 到 60 mg，45 組配對點' },
               { en: 'Raw output within a **3.8% median paired difference** of the BioDrop, **R² = 0.9999 against the mass standard** (the BioDrop 0.9998), slope 1.018 and R² 0.995 up to OD 1.2. Repeated twice. Two BioDrop points excluded under predefined criteria, which did not change the Pro\'s numbers.', zh: '原始輸出與 BioDrop 的**配對中位差在 3.8% 以內**，**對質量標準 R² = 0.9999**（BioDrop 為 0.9998），斜率 1.018、在 OD 1.2 以下 R² 0.995。重複了兩次。依事先定義的準則排除兩個 BioDrop 點，而這並未改變 Pro 的數字。' }],
              [{ en: '**10 October**: 1 µm SiO₂', zh: '**10 月 10 日**——1 µm SiO₂' },
               { en: 'Monodisperse silica microspheres, close to the size of a *B. subtilis* cell; both builds in series on one loop; 2.5 to 100 mg in 500 mL', zh: '單分散二氧化矽微球，尺度接近一個 *B. subtilis* 細胞；兩個版本串接在同一迴路上；500 mL 中 2.5 到 100 mg' },
               { en: 'Pro **R² 0.9874 to 0.992**, Slim **0.9947**; residual SD 0.016 OD against the BioDrop\'s 0.979 fit. **Slope against the BioDrop 1.001, p = 0.98 against a null of unit slope; intercept −0.123 OD, p = 0.005 against zero**, which locates the one remaining discrepancy in the stored blank and not in the optics. A dilute-and-restore test at 137.6 min went 2.3610 → 0.7943 → 2.3665, back within 0.2%.', zh: 'Pro **R² 0.9874 到 0.992**、Slim **0.9947**；殘差標準差 0.016 OD，而 BioDrop 的擬合為 0.979。**對 BioDrop 的斜率 1.001，對「斜率為 1」的虛無假設 p = 0.98；截距 −0.123 OD，對「截距為 0」p = 0.005**，這把唯一剩下的差異定位在儲存的空白值，而不是光學。137.6 分鐘時的稀釋與回復測試走過 2.3610 → 0.7943 → 2.3665，回到原值 0.2% 以內。' }],
              [{ en: 'The concentration axis', zh: '那個濃度軸' },
               { en: 'Set by a withdraw-one, add-one protocol and the measured 50 mL loop volume', zh: '由「抽一加一」的操作程序與量測得到的 50 mL 迴路體積決定' },
               { en: '**Neither instrument sets the scale.** Concentration comes from pipetted volume, so the BioDrop is an independent comparison and not the source of a fitted calibration. This is the single detail we would most want other teams to copy.', zh: '**兩台儀器都沒有決定刻度。**濃度來自移液體積，所以 BioDrop 是一個獨立的比較對象，而不是擬合校正的來源。這是我們最希望其他隊伍抄走的一個細節。' }]
            ],
            min: 820,
            source: { en: 'Read from the team\'s Measurement and Hardware → Photometer pages.', zh: '讀自該隊 Measurement 與 Hardware → Photometer 頁。' }
          }) +
          h.h3({ en: 'Where the instrument saturates, and where the arithmetic did', zh: '儀器在哪裡飽和，而算術又在哪裡飽和' }) +
          h.ul([
            { en: '**The optical ceiling is stated as a number and an observation.** Beyond about **OD 2.7** the sample signal falls to a tenth of the reference, a low-signal warning fires, and the twin stops using the readings. At the top of the silica ladder the Pro departs **11.5% from its own low-range line** while the Slim departs **2.9%**. So the sensitive build is the less linear one, and they say which is which: the Pro is **5.3× more sensitive**, the Slim the one to use for range.', zh: '**光學上限是用一個數字和一個觀察寫出來的。**在約 **OD 2.7** 以上，樣品訊號掉到參考訊號的十分之一，低訊號警示觸發，而數位孿生就停止使用這些讀值。在矽石梯度的頂端，Pro 偏離自己的低範圍直線達 **11.5%**，Slim 只偏離 **2.9%**——所以靈敏的那個版本線性較差，而他們把哪個是哪個講清楚：Pro **靈敏 5.3 倍**，Slim 是要範圍時用的。' },
            { en: '**The benchtop reference saturates too, and they predicted it.** One of the eight pre-registered predictions was that direct BioDrop readings would fall low above a theoretical OD of 2 while diluted readings stayed on the line, so the comparison instrument\'s own limit was written down in advance rather than discovered afterwards.', zh: '**桌上型參考儀器也會飽和，而他們事先預測到了。**八個預先登錄的預測中有一個是：在理論 OD 2 以上，直接讀的 BioDrop 值會偏低，而稀釋後讀的值會留在直線上——所以比較用儀器自己的極限是事先寫下來的，不是事後才發現的。' },
            { en: '**The arithmetic had a ceiling nobody had looked for.** Re-examining the 434-hour run showed the reference channel sitting near **32 sensor counts**, where a change of one whole count moves the reported OD₆₀₀ by **0.067**. **91.5% of 2671 logged reference readings fell on an exact integer**, which is not what an average of sixteen samples looks like. Between hours 40 and 230 the reference changed count 29 times and **26 of those changes coincided with an OD jump greater than 0.04.** The steps in the published trace were coming from the signal chain, not the culture.', zh: '**算術也有一個沒人去找過的上限。**重新檢視那次 434 小時的運行發現，參考通道停在約 **32 個感測器計數**，而在那裡整整變動一個計數，就會讓報出的 OD₆₀₀ 移動 **0.067**。**2671 筆記錄的參考讀值中有 91.5% 落在整數上**——這不是十六個樣本平均後該有的樣子。在第 40 到 230 小時之間，參考通道變動了 29 次計數，而**其中 26 次與超過 0.04 的 OD 跳動同時發生。**公開曲線上的那些階梯來自訊號處理鏈，不是來自培養物。' },
            { en: '**And the filter was eating its own data.** The outlier gate keeps samples within three median absolute deviations of the median; when more than half of sixteen samples share the same integer the MAD is zero, the fence has zero width, and every differing sample is discarded as a bubble. **The rejection percentage the dashboard had been reporting as "bubbles" was counting quantisation flicker.** Two further firmware estimators share a scale floor of 10⁻⁶, so on quantised data all three do the same thing.', zh: '**而那個濾波器正在吃掉自己的數據。**離群值閘門只保留落在中位數 ± 三倍中位絕對偏差內的樣本；當十六個樣本中超過一半共用同一個整數時，中位絕對偏差是零、籬笆寬度是零，於是每個不同的樣本都被當成氣泡丟掉。**儀表板上一直被當作「氣泡」報出的拒絕率，實際上在數的是量化抖動。**另外兩個固件估計量共用 10⁻⁶ 的尺度下限，所以在量化過的數據上，三者的行為完全一樣。' }
          ]) +
          h.h3({ en: 'Pre-registered, and then overturned by its own data', zh: '先預先登錄，然後被自己的數據推翻' }) +
          h.p({
            en: 'Before the first calibration measurement, the team committed to the repository: **eleven algorithms** (four already in the firmware, seven added as controls), five evaluation metrics, the selection rule, **eight predictions each with a quantitative threshold**, and the exclusion criteria: only documented hardware failures or operator errors could be excluded, *"data were not removed simply because they looked unusual."* Every raw sensor sample was then logged once and every algorithm replayed on the identical input, so no difference between algorithms could come from burst-to-burst variation.',
            zh: '在第一次校正量測之前，該隊就把以下內容提交到自己的程式庫：**十一種演算法**（四個已在固件中，七個作為對照加入）、五個評估指標、選擇規則、**八個各帶定量門檻的預測**，以及排除準則——只有有紀錄的硬體故障或操作錯誤可以被排除，*「數據不會只因為看起來不尋常就被移除。」*接著每一個原始感測器樣本都被記錄一次，而每種演算法都在完全相同的輸入上回放，使演算法之間的差異不可能來自取樣叢集之間的變動。'
          }) +
          h.warn({
            en: '**Five of the eight predictions failed, and all eight are reported.** The one that matters is **H6**, which tested the assumption behind the estimator that was actually shipping on the bioreactor: if bubbles only block light, an estimator that trusts the brighter half of each burst should scatter at most half as much as a symmetric one. It did not. `upper` scattered **0.77 against `mad`\'s 0.78** on the Pro and 0.15 against 0.16 on the Slim, and its mean error was twice as large. The raw bursts say why: **a bubble does not only darken.** On the Pro at OD 3.2 a bubble replaces scattering liquid with air and **up to 2.8 times more light arrives**; on the Slim, whose fibre collects over a wide angle, the same bubble refracts light out of the cone and the reading darkens. **The two units disagree in direction**, so any estimator that assumes a direction is betting on the geometry it happens to be sitting in. **No estimator put more than 35% of bubble readings within ±0.05 of the true level.**',
            zh: '**八個預測中有五個沒通過，而八個全部被報告出來。**關鍵的是 **H6**，它測試的是當時真正跑在生物反應器上的那個估計量背後的假設：如果氣泡只會擋光，那麼一個只相信每個叢集中較亮那一半的估計量，離散度應該最多只有對稱估計量的一半。結果並非如此。在 Pro 上 `upper` 的離散是 **0.77，而 `mad` 是 0.78**，在 Slim 上是 0.15 對 0.16，而且它的平均誤差大了一倍。原始叢集說明了原因：**氣泡不只會讓讀值變暗。**在 Pro 上 OD 3.2 時，一個氣泡把會散射的液體換成空氣，**抵達的光量可以多出 2.8 倍**；而在 Slim 上，它的光纖在很寬的角度內收光，同一個氣泡會把光折射到收光錐之外，讀值因此變暗。**兩台機器在方向上互相矛盾**，所以任何假設了方向的估計量，都是在賭自己剛好坐在哪一種幾何裡。**沒有任何估計量能讓超過 35% 的氣泡讀值落在真值的 ±0.05 以內。**'
          }) +
          h.h3({ en: 'The lever turned out to be the gate, not the estimator', zh: '結果槓桿是閘門，不是估計量' }) +
          h.ul([
            { en: '**In clean flow the estimator is worth almost nothing.** Across forty concentrations the largest gap between any two of the eight estimators was **0.0039 OD on the Pro and 0.0018 on the Slim**, less than a fifth of the 0.024 OD residual scatter of their own August calibration. Their sentence: *"everything that had been argued about in the interface turned out not to matter when nothing goes wrong."*', zh: '**在乾淨的流動狀態下，估計量幾乎毫無價值。**在四十個濃度上，八個估計量之間的最大差距是 **Pro 上 0.0039 OD、Slim 上 0.0018 OD**——不到他們自己八月校正 0.024 OD 殘差散佈的五分之一。他們的句子是：*「所有在介面裡被爭論過的事，到頭來在沒有出錯的時候都不重要。」*' },
            { en: '**What matters is what happens after the estimate.** A **spread gate** rejects a reading when `mad` and the 90th percentile disagree by more than 0.03 OD; a **jump gate** withholds any reading more than max(0.05 OD, 5%) from the last accepted value and accepts a new level only after three agreeing readings. Together they took the worst bubble error from **2.44 OD to 0.016 on the Pro, and 0.28 to 0.003 on the Slim**, catching 97% of bubble readings while rejecting no clean readings and under 0.6% of valid readings over a whole run.', zh: '**真正重要的是估計之後發生的事。**一道**離散閘門**在 `mad` 與第 90 百分位相差超過 0.03 OD 時拒絕該讀值；一道**跳動閘門**會攔下任何與上一個被接受值相差超過 max(0.05 OD, 5%) 的讀值，而且只有在三個彼此一致的讀值之後才接受新的位準。兩者合起來把最壞的氣泡誤差從 **Pro 上的 2.44 OD 降到 0.016、Slim 上的 0.28 降到 0.003**，抓到 97% 的氣泡讀值，同時完全不拒絕乾淨讀值，整段運行中被攔下的有效讀值也低於 0.6%。' },
            { en: '**The gate\'s one undeniable win is narrow, and they draw it narrowly.** On the 14–16 October run the sample beam fell to a tenth of the reference at 37 hours and the reported value stepped to about **9.9** and stayed there. Nothing inside those bursts looks abnormal: exactly the failure the silica data had identified as invisible to the firmware\'s own bubble flag. The gate marked the stretch as low signal. **Without it, four hours of a dead optical path would have entered the record as a culture at OD 9.9.**', zh: '**閘門唯一無可爭辯的勝利範圍很窄，而他們也畫得很窄。**在 10 月 14 至 16 日那次運行中，樣品光束在第 37 小時掉到參考訊號的十分之一，報出的值跳到約 **9.9** 並停在那裡。那些叢集內部看起來毫無異常——正是矽石數據已經指認出、固件自己的氣泡旗標看不見的那種故障。閘門把那一段標記為低訊號。**少了它，四個小時的失效光路就會以「OD 9.9 的培養物」進入紀錄。**' },
            { en: '**And they refuse the credit they could have taken.** Two things changed between the 8–10 October run and the 14–16 October run, not one: **the permeate draw was halved from 24 to 12 mL/min at the same time as the gate went on**, and a slower draw pulls in fewer bubbles, so the clean bubble record cannot be credited to the gate alone. What belongs to the gate by itself, in their words, is *"31 readings held back instead of published, and the end of the run called correctly."*', zh: '**而他們拒絕了本來可以拿的功勞。**10 月 8 至 10 日那次與 10 月 14 至 16 日那次之間，改變的是兩件事而不是一件：**透過液抽取量在閘門上線的同時從 24 mL/min 砍半到 12 mL/min**，而較慢的抽取會帶進較少氣泡，所以乾淨的氣泡紀錄不能全歸功於閘門。用他們自己的話說，單獨屬於閘門的部分是*「31 筆讀值被攔下而不是被公開，以及正確判定了運行的結束」*。' }
          ]) +
          h.h3({ en: 'The sensors, and what they have and have not been exposed to', zh: '那些感測器，以及它們接觸過與沒接觸過什麼' }) +
          h.ul([
            { en: '**The leaf sensor has never met a leaf in a field.** On 10 October the leaf and air sensors were held in air beside each other, with no leaf between them, at three sites of stable air temperature: three five-minute runs each, **540 paired readings**. In air the two should agree. They do not. The incubator holds near **+1.8 °C**, the stairwell near **+1.3**, and the room starts below zero and climbs past +1 across its own three runs. **An offset that changes with the site and drifts within one is an instrument characteristic, not a canopy signal**, so the wiki concludes that no leaf-minus-air threshold can be set from these readings. What the test gives is the size of the correction owed: **−0.2 to +1.8 °C**.', zh: '**那個葉片感測器從來沒有在田裡碰到過一片葉子。**10 月 10 日，葉片與空氣感測器被並排放在空氣中、兩者之間沒有葉片，在三個空氣溫度穩定的地點各做三次五分鐘的量測，共 **540 組配對讀值**。在空氣中兩者應該一致。它們並不一致——培養箱裡維持在約 **+1.8 °C**、樓梯間約 **+1.3**，而室內那一處從零度以下開始、在它自己的三次量測中爬過 +1。**一個會隨地點改變、而且在同一地點內漂移的偏移，是儀器特性，不是冠層訊號**，所以該 wiki 的結論是：這些讀值無法用來設定任何「葉溫減氣溫」門檻。這次測試給出的是所欠的校正幅度：**−0.2 到 +1.8 °C**。' },
            { en: '**The wetness channel has never been wetted.** The digital twin page records it plainly: *"Leaf wetness read 0.0% throughout; the sensor was never wetted, so its response is untested."* The twin nonetheless carries a full rice-blast infection rule built on wet-period duration, taken from the literature. The rule is published; its input is not characterised.', zh: '**那個濕度通道從來沒有被弄濕過。**數位孿生頁直接記下：*「葉片濕度全程讀 0.0%；感測器從未被弄濕，所以它的反應未經測試。」*然而該孿生系統仍帶著一整套依「濕潤期長度」建立的稻熱病感染規則，取自文獻。規則被公開了；它的輸入卻沒有被特性化。' },
            { en: '**The light dose is in the wrong unit, and they say so.** 40 LEDs were read one by one, with **green varying by 26% and red by 22%**, and matched in groups of four to within **0.4–1.8%**. But matching did not separate the intensity tiers, so the low, mid and high levels are set by PWM in code instead. The green levels are measured at **220, 510 and 3850 lux**; the weak red is measured at 168 lux and **the two higher red levels, about 390 and 2940 lux, are calculated rather than measured.** And the page states the deeper problem itself: *"every reading here is in lux, which is weighted for human vision; it is not a biological light dose until it is converted to photon flux."*', zh: '**光劑量的單位是錯的，而他們把這件事說出來了。**40 顆 LED 被一顆一顆量過——**綠光之間差 26%、紅光差 22%**——並以四顆一組配到 **0.4–1.8%** 以內。但配對並沒有把強度層級分開，所以低、中、高三個位準最後是用程式裡的 PWM 設定的。綠光位準是實測的 **220、510 與 3850 lux**；弱紅光實測為 168 lux，而**較高的兩個紅光位準，約 390 與 2940 lux，是算出來的而不是量出來的。**而該頁自己指出更深的問題：*「這裡每個讀值都是 lux，而 lux 是以人眼視覺加權的；在被換算成光子通量之前，它不是一個生物學上的光劑量。」*' },
            { en: '**The protein assays have their own stated ranges, and one of them is defeated by its own control.** The competitive ELISA\'s standard curve spans **31.6–95.1% B/B₀** and anything outside it is reported as an extrapolation; the two maximum-binding wells differed by **11%**, and that spread propagates into every concentration on the plate. The DNPH assay is linear to **2.049 mM at R² 0.9995**, and the page names the number to avoid quoting: **fitting all eight standard levels at once returns R² = 0.950, "which looks acceptable while hiding a curve that has stopped responding."**', zh: '**蛋白試驗各自有被寫明的範圍，而其中一個被自己的對照打敗了。**競爭型 ELISA 的標準曲線涵蓋 **31.6–95.1% B/B₀**，超出範圍的一律標示為外插；兩個最大結合孔之間差了 **11%**，而這個差距會傳遞到該盤上每一個濃度。DNPH 試驗在 **2.049 mM 以下線性，R² 0.9995**，而該頁指名了一個不該引用的數字：**把八個標準位準一起擬合會得到 R² = 0.950，「它看起來可以接受，卻掩蓋了一條已經停止反應的曲線。」**' }
          ]) +
          h.warn({
            en: '**What this calibration does not establish, in their own words.** *"Silica calibrates the instrument, not the organism."* A 1 µm bead is a sphere of refractive index 1.46 and density 2.3 g/cm³; a vegetative *B. subtilis* cell is a rod, often in chains, nearer 1.33 to 1.41 and 1.1 g/cm³. **The ladder converts a reading into equivalent particle counts, not cell mass, and a dilution series of washed cells is still owed.** Two further limits are printed beside it: **no simultaneous manual samples were taken during any of the inline runs**, so the inline readings have never been independently validated against a benchtop during an actual culture; and the gates have a stated failure mode of their own: **when an air slug lasts longer than 90 seconds, three agreeing readings make the wrong level acceptable**, which is why the jump gate raises an alarm instead of silently correcting.',
            zh: '**用他們自己的話說，這次校正沒有建立什麼。***「矽石校正的是儀器，不是生物。」*一顆 1 µm 的小球是折射率 1.46、密度 2.3 g/cm³ 的球體；而一個營養生長期的 *B. subtilis* 細胞是桿狀、常成鏈，折射率接近 1.33 到 1.41、密度 1.1 g/cm³。**那條梯度把讀值換成等效顆粒數，而不是細胞質量，而一組洗過的細胞稀釋系列仍然沒做。**旁邊還印了另外兩個限制：**在任何一次連續監測運行中都沒有同時採取人工樣品**，所以連續讀值從未在真實培養過程中對桌上型儀器做過獨立驗證；而那些閘門自己也有被寫明的失效模式——**當一段空氣柱持續超過 90 秒，三個彼此一致的讀值就會讓錯誤的位準被接受**，這正是跳動閘門選擇發出警報、而不是默默修正的原因。'
          })
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 'm-hw',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: 'Four builds, six photometer runs and four reactor prototypes, each failure named', zh: '四件硬體、六次光度計運行、四個反應器原型，每個失敗都被指名' },
        lede: {
          en: 'A bioreactor, two photometers, a 24-well light plate and a printed hydroponics float, with a digital twin watching the first of them. The lab rig is a 600 × 900 mm wire-grid panel; the 40 × 24 × 62 cm figure quoted elsewhere is the product cabinet, and it has not been built.',
          zh: '一台生物反應器、兩台光度計、一個 24 孔光板，以及一個列印的水耕浮板，再加上一個盯著第一項的數位孿生。實驗室裡的台架是一塊 600 × 900 mm 的網格板；別處引用的 40 × 24 × 62 cm 是產品機櫃的尺寸，而它還沒有被做出來。'
        },
        body:
          h.kv([
            [{ en: 'Membrane', zh: '膜' }, { en: 'Cobetter MiniLab hollow fibre: mPES, 0.2 µm pores, 200 cm², 11 fibres. Containment rests on cell size against pore size: rod-shaped *B. subtilis* is 0.8 to 2.0 µm wide and up to 3.0 µm long.', zh: 'Cobetter MiniLab 中空纖維：mPES、0.2 µm 孔徑、200 cm²、11 根纖維。圍阻倚賴的是細胞尺寸對上孔徑——桿狀的 *B. subtilis* 寬 0.8 到 2.0 µm、長可達 3.0 µm。' }],
            [{ en: 'Volume and flow', zh: '體積與流量' }, { en: 'A 1 L bottle: 1 L of culture in integrated prototype 2, 500 mL in prototypes 1 and 3. Feed flow about 300–390 mL/min in prototypes 2 to 4; **263 mL/min is the flow the membrane cycles recommend.** Magnetic stirrer at 200 rpm.', zh: '一個 1 L 瓶：整合原型 2 用 1 L 培養液，原型 1 與 3 用 500 mL。原型 2 到 4 的進料流量約 300–390 mL/min；**膜循環實驗建議的流量是 263 mL/min。**磁力攪拌 200 rpm。' }],
            [{ en: 'Sensing and control', zh: '感測與控制' }, { en: 'In-line photometer, **three pressure transducers** at feed, retentate and permeate, a flow meter, a pH probe in the bottle cap; four servo-driven Luer valves and one servo pinch valve; KOH dosing for pH.', zh: '管線內光度計、**三個壓力傳感器**分別位於進料、截留與透過側、一個流量計、瓶蓋上一支 pH 探頭；四個伺服驅動的 Luer 閥與一個伺服夾管閥；以 KOH 加藥調 pH。' }],
            [{ en: 'Expression', zh: '表達' }, { en: 'A 3 m green LED strip for CcaS/CcaR: about 535 nm on, about 670 nm off. The strip **has not been built into the reactor**. The light plate is where the switch was characterised, and it holds one fixed light dose for a whole run.', zh: '一條 3 m 的綠色 LED 燈條用於 CcaS/CcaR：約 535 nm 開、約 670 nm 關。這條燈條**還沒有被裝進反應器**——光開關是在光板上被特性化的，而光板一次運行只維持一個固定的光劑量。' }],
            [{ en: 'The product cabinet', zh: '那個產品機櫃' }, { en: 'About 400 × 240 × 620 mm, 1 L, a 7-inch touchscreen. **It has not been built**, and the specification table lists output per day, power draw and weight as **"not yet known, to be measured once a unit is built."**', zh: '約 400 × 240 × 620 mm、1 L、一片 7 吋觸控螢幕。**它還沒有被做出來**，而規格表把每日產量、功耗與重量列為**「尚未得知，待一台做出來後量測」**。' }]
          ]) +
          h.h3({ en: 'Six photometer runs, and what each one returned', zh: '六次光度計運行，以及每一次的結果' }) +
          h.tbl({
            cols: [
              { t: { en: 'Run', zh: '運行' }, w: '16%' },
              { t: { en: 'How density was read', zh: '密度怎麼讀' }, w: '22%' },
              { t: { en: 'What it returned', zh: '結果是什麼' } }
            ],
            rows: [
              [{ en: '1 · 6 Jun', zh: '1 · 6 月 6 日' }, { en: 'Hand samples, 27 h', zh: '人工取樣，27 小時' }, { en: '0.17 to 0.37 in the loop against 2.46 in a flask; no inline channel yet.', zh: '迴路中 0.17 到 0.37，燒瓶中為 2.46；當時還沒有管線內通道。' }],
              [{ en: '2 · 14 Jun', zh: '2 · 6 月 14 日' }, { en: 'Hand samples every 15 to 20 min, 7.1 h', zh: '每 15 到 20 分鐘人工取樣，7.1 小時' }, { en: '0.90 by 145 min, against the flask\'s 0.83 by 278 min.', zh: '145 分鐘時 0.90，而燒瓶在 278 分鐘時為 0.83。' }],
              [{ en: '3 · 21 Jul – 8 Aug', zh: '3 · 7 月 21 日至 8 月 8 日' }, { en: 'Inline every 10 min, 2671 of 2720 rows', zh: '每 10 分鐘連續讀，2720 列中 2671 列' }, { en: '**434.2 h unattended.** The reference beam began fluctuating near 220 h and the channel became unusable at **243.0 h**, with variability rising five- to tenfold. That failure is also what the fault-detection model was built on.', zh: '**434.2 小時無人看管。**參考光束在約 220 小時開始波動，通道在 **243.0 小時**變得不可用，變異度上升五到十倍。那次故障也正是故障偵測模型建立的基礎。' }],
              [{ en: '4 · 1 – 6 Sep', zh: '4 · 9 月 1 至 6 日' }, { en: 'Inline, 12,470 rows', zh: '連續讀，12,470 列' }, { en: '3.2 h to 0.24, then **10.2 h unlogged**, then 102.4 h from 0.84 to 3.77. The gap was a host-computer update: the data were held only in the web UI and were lost.', zh: '3.2 小時到 0.24，接著**10.2 小時沒有紀錄**，然後 102.4 小時從 0.84 到 3.77。那段空白是主機電腦更新造成的：數據只存在網頁介面裡，就這樣遺失了。' }],
              [{ en: '5 · 8 – 10 Oct', zh: '5 · 10 月 8 至 10 日' }, { en: 'Inline, 37.5 of 38 h in four files after three restarts', zh: '連續讀，38 小時中有 37.5 小時，三次重啟後分成四個檔案' }, { en: '0.10 to 0.30 over nine hours, then nothing readable. **About one in six windows held over 20% bubbles** and the reference signal varied by a factor of 4.8. The real cause was an inlet tube that had fallen out of the beaker.', zh: '九小時內從 0.10 到 0.30，之後讀不出東西。**大約每六個視窗就有一個含超過 20% 氣泡**，而參考訊號變動了 4.8 倍。真正的原因是一根進液管掉出了燒杯。' }],
              [{ en: '6 · 14 – 16 Oct', zh: '6 · 10 月 14 至 16 日' }, { en: 'Inline with the acceptance gate on, 1083 windows, 41.8 h', zh: '連續讀並開啟接受閘門，1083 個視窗，41.8 小時' }, { en: '0.14 to **2.71 by 37 h**, no restart, **31 of 1083 windows rejected**, no window over 20% bubbles, reference held within 17%. Growth fitted at **0.286 h⁻¹** over 1.5 to 6.5 h, a doubling time of 145 minutes.', zh: '從 0.14 到 **37 小時時的 2.71**，沒有重啟，**1083 個視窗中 31 個被拒絕**，沒有任何視窗超過 20% 氣泡，參考訊號維持在 17% 以內。生長在 1.5 到 6.5 小時間擬合為 **0.286 h⁻¹**，倍增時間 145 分鐘。' }]
            ],
            min: 840,
            source: { en: 'Read from the team\'s Results → Culture monitoring and Measurement pages.', zh: '讀自該隊 Results → Culture monitoring 與 Measurement 頁。' }
          }) +
          h.h3({ en: 'Four integrated reactor prototypes, each ending in what broke', zh: '四個整合反應器原型，每一個都以「什麼壞了」收尾' }) +
          h.ul([
            { en: '**Prototype 1: pump control.** *B. subtilis* 168 carrying a constitutive ACC deaminase vector, 500 mL at 37 °C, **116 hours continuous, OD₆₀₀ to about 3.7.** Two findings came out of it that changed the project: strain 168 **secreted almost no enzyme despite strong growth**, consistent with its own extracellular proteases degrading the product, so every later run used WB800; and a **second exponential phase after 47 h** was attributed to loss of selection as erythromycin degraded.', zh: '**原型 1——泵控制。**帶組成型 ACC 去胺酶載體的 *B. subtilis* 168，500 mL、37 °C，**連續 116 小時，OD₆₀₀ 到約 3.7。**由此得到兩個改變了整個專案的發現：168 菌株**雖然長得很好，卻幾乎不分泌酵素**，這與它自己的胞外蛋白酶降解產物一致，所以後來每一次運行都改用 WB800；而**第 47 小時之後出現的第二個指數生長期**被歸因於紅黴素降解造成的選擇壓力喪失。' },
            { en: '**Prototype 2: pinch valve and pH.** The OD trace was unstable all run, traced to **short tubing transmitting pump vibration directly to the optical head.** The useful result is a negative one for sampling design: ELISA gave **10.7 µg/mL in the lumen against 10.5 on the shell side**, matched within about 0.8 µg/mL through the run, **so lumen sampling was discontinued** and the culture loop stayed closed from prototype 3 on.', zh: '**原型 2——夾管閥與 pH。**OD 曲線整段運行都不穩定，追查到是**過短的管路把泵的振動直接傳到光學頭上。**這裡有用的結果是一個關於取樣設計的否定結論：ELISA 給出**管內側 10.7 µg/mL、殼側 10.5 µg/mL**，整段運行兩側相差約 0.8 µg/mL 以內，**於是管內側取樣被停掉**，從原型 3 起培養迴路保持封閉。' },
            { en: '**Prototype 3: KOH and clean-in-place.** Tubing extended to 30 cm and volume cut from 1 L to 500 mL; OD and pH were stable and internally consistent **to a mechanical failure at 38 h**, when a Luer valve at the start of the lumen loop **broke in half and culture leaked into the incubator.** The membrane did not fail. The break was traced to the clean-in-place step, whose **35% hydrogen peroxide reaches the valves before it is diluted.** This cycle also produced the pH finding: pH fell monotonically from about 6.9 to 6.4, and the inflection in the growth curve sat **where pH crossed 6.5.**', zh: '**原型 3——KOH 與原位清洗。**管路延長到 30 cm，體積從 1 L 減到 500 mL；OD 與 pH 一直穩定且內部一致，**直到第 38 小時的機械故障**：管內側迴路起點的一個 Luer 閥**斷成兩半，培養液漏進培養箱。**膜本身沒有破。斷裂被追查到原位清洗步驟，其**35% 過氧化氫在被稀釋之前就先到達這些閥。**這個循環也產出了 pH 的發現：pH 從約 6.9 單調下降到 6.4，而生長曲線的轉折點正落在**pH 跨過 6.5 的位置。**' },
            { en: '**Prototype 4: automation and sampling.** Automated dosing of **5 mL of 1 M KOH per minute when pH fell to 6.8, until it returned to 7.0**, worked for the first night and then **1 M KOH was found to be corroding the feeding valve.** Dosing was withdrawn and pH corrected by hand once a day with 20 mL KOH, 25 mL medium and 100 µL of erythromycin. The run reached **OD about 3.3 by 80 h with pH sawtoothing between roughly 6.4 and 7.9**, and the **second exponential phase did not reappear**, which is what establishes antibiotic resupply, not only pH correction, as a requirement. And the limit they draw themselves: **35% H₂O₂ and 1 M KOH circulate through the same fitting, so these cycles cannot tell which corroded it.**', zh: '**原型 4——自動化與取樣。**當 pH 降到 6.8 時**每分鐘自動加 5 mL 的 1 M KOH 直到回升到 7.0**，第一晚運作正常，之後發現**1 M KOH 正在腐蝕進料閥。**加藥被撤回，改為每天人工以 20 mL KOH、25 mL 培養基與 100 µL 紅黴素校正一次。那次運行在 **80 小時達到約 OD 3.3，pH 在大約 6.4 到 7.9 之間呈鋸齒狀**，而**第二個指數生長期沒有再出現**——這就是把抗生素補給、而不只是 pH 校正，確立為必要條件的證據。還有他們自己畫出的限制：**35% H₂O₂ 與 1 M KOH 流經同一個接頭，所以這些循環分不出是哪一個腐蝕了它。**' },
            { en: '**And the finding that pressure alone is not enough.** When the valve failed, **feed pressure rose from about 0.19 to 0.37 bar while transmembrane pressure showed no significant change**, the opposite of what they expected from a leak. Meanwhile a rising OD₆₀₀ without a matching pattern in flow and pressure turned out to mean the pump was running partly dry and cells were settling in the cuvette. Both are written up as diagnostic rules: **pressure signatures identify this fault only in combination with other channels, and a dedicated leak detector is required for unattended operation.**', zh: '**還有一個發現：單靠壓力是不夠的。**閥故障時，**進料壓力從約 0.19 bar 升到 0.37 bar，而跨膜壓力沒有顯著變化**——與他們對洩漏的預期恰好相反。同時，一個在流量與壓力上沒有對應型態的上升 OD₆₀₀，後來證明代表泵在半乾狀態下運轉、細胞沉積在樣品槽的光路裡。兩者都被寫成診斷規則：**壓力特徵只有與其他通道合併判讀時才能指認這個故障，而無人看管的運行需要一個專用的洩漏偵測器。**' }
          ]) +
          h.h3({ en: 'The two smaller builds, and the twin', zh: '另外兩件較小的硬體，以及那個孿生系統' }) +
          h.cards([
            { chips: [{ t: { en: 'hydroponics', zh: '水耕' }, k: 'g' }],
              h: { en: 'A float whose load line is computed and never checked', zh: '一個載重線是算出來、而從未被核對的浮板' },
              p: { en: 'A printed plate floating in a 1000 µL pipette-tip box, **thirteen seedlings at one depth**, flotation from **42.27 cm³ of air sealed inside its own pontoons** rather than a strapped-on float. Sixteen pieces from three print files, PLA, no adhesives or fasteners. The load line, computed from the parts\' geometry, says it sits **about 1 mm lower for each 3.5 g** it carries, with a predicted freeboard of 4.8 mm at the assembled 71.3 g. **And the page states that nobody has measured the freeboard on a real print.** After several failed plantings, the protectant runs left these boxes for tube racks.', zh: '一塊列印浮板漂在一個 1000 µL 吸管盒裡，**十三棵苗在同一深度**，浮力來自**封在自己浮筒裡的 42.27 cm³ 空氣**，而不是外加綁上去的浮塊。三個列印檔、十六個零件，PLA 材質，不用黏著劑也不用緊固件。由零件幾何算出的載重線說它**每承載 3.5 g 就下沉約 1 mm**，在組裝後 71.3 g 時預測乾舷為 4.8 mm——**而該頁寫明沒有人在真正的列印件上量過乾舷。**在幾次種植失敗之後，保護劑的實驗離開這些盒子，改用試管架。' } },
            { chips: [{ t: { en: 'light plate', zh: '光板' }, k: 'a' }],
              h: { en: 'The array built for an intensity test that has not been run', zh: '為了一個尚未執行的強度測試而做的陣列' },
              p: { en: 'A 4 × 6 array, 24 cultures under six defined light conditions at once, three DBTL cycles. Prototype 3 enclosed the electronics, and then **overnight on a shaker a post snapped and the white holder leaked light between the wells.** The first culture run on 19 September grew in all six arms to OD₆₀₀ 0.91–1.01 at 24 h, **but the arms are not compared, because light leaked between wells.** The fixes (four screws, reinforced joints, a black holder) are **not yet re-tested**, and the intensity test the array was built for has not been run.', zh: '一個 4 × 6 陣列，一次讓 24 個培養物處於六種定義好的光條件下，經過三個 DBTL 循環。原型 3 把電子元件封起來，然後**在搖床上過夜時一根柱子斷了，白色支架讓光在孔與孔之間漏過去。**9 月 19 日的第一次培養運行在六個組別都長起來，24 小時時 OD₆₀₀ 達 0.91–1.01，**但這些組別並沒有被互相比較，因為光在孔之間漏了。**那些修正——四顆螺絲、加強的接合、黑色支架——**還沒有重新測試過**，而這個陣列原本要做的強度測試也還沒做。' } },
            { chips: [{ t: { en: 'digital twin', zh: '數位孿生' }, k: 'v' }],
              h: { en: 'The one model that earned its keep on recorded data', zh: '唯一一個在已錄數據上證明了自己價值的模型' },
              p: { en: 'An autoencoder trained on the **healthy first 120 hours of run 3** scores two axes separately: a sensor axis on the reference beam, which never crosses the culture, and a process axis on the growth rate. **They separate in both directions.** At 120–160 h the process axis fired in 73% of windows and the sensor axis in none, and the density was falling, 0.93 to 0.72. At 220–240 h the sensor axis fired in every window and the process axis in none, while the reference had stepped from 26.67 to 25.83 lux and the density trace still looked clean. The instrument was flagged at **216.3 h and failed at 243.0 h: 26.7 hours of lead, at a 6.1% false-alarm rate** on unseen quiet windows. A Kalman forecast beat persistence by **41% at 2 h (0.040 against 0.067)** down to 17% at 12 h, with their own limit attached: most of the run sits above the range where optical density is linear in cell count, **so what is forecast is the photometer reading.**', zh: '一個以**第 3 次運行最初健康的 120 小時**訓練的自動編碼器分別評分兩個軸：一個是參考光束上的感測器軸，那道光從不穿過培養液；另一個是生長速率上的過程軸。**兩者在兩個方向上都能分開。**在 120–160 小時，過程軸在 73% 的視窗觸發、感測器軸完全沒有，而密度確實正在下降，從 0.93 到 0.72。在 220–240 小時，感測器軸在每個視窗都觸發、過程軸完全沒有，而參考訊號已從 26.67 lux 跳到 25.83 lux，密度曲線看起來卻還很乾淨。儀器在 **216.3 小時被標記，而在 243.0 小時失效：26.7 小時的提前量，在未見過的安靜視窗上誤報率為 6.1%**。一個 Kalman 預測在 **2 小時領先持續性模型 41%（0.040 對 0.067）**，到 12 小時降為 17%——並附上他們自己的限制：這次運行大部分落在光密度與細胞數不再成線性的範圍之上，**所以被預測的其實是光度計的讀值。**' } }
          ], 'g2') +
          h.note({
            en: 'The twin\'s own scope is stated on its page and is the right scope: **"so far the models have run on recorded data after each run and a person makes every decision; the next Digital Twin joins them to the live loop."** The protectant concentration cannot be read in line at all. It comes from hand-drawn samples assayed by ELISA and DNPH. A twin that admits it is not yet closing a loop is more useful than one that implies it is.',
            zh: '那個孿生系統自己的適用範圍寫在它自己的頁面上，而範圍抓得剛好：**「到目前為止，這些模型都是在每次運行之後用已錄下的數據跑的，而每個決定都由人做；下一版數位孿生才會把它們接上即時迴路。」**保護劑的濃度完全無法在管線內讀取——它來自人工抽取、再以 ELISA 與 DNPH 試驗的樣品。一個承認自己還沒有把迴路閉起來的孿生系統，比一個暗示自己已經閉起來的有用。'
          })
      });

      /* ---------------- human practices ---------------- */
      out += h.sec({
        id: 'm-ihp',
        kick: { en: 'Human practices', zh: '人類實踐' },
        h2: { en: 'Thirty-one conversations, written as a chain in which each one raises the next one\'s question', zh: '三十一次談話，被寫成一條鏈：每一次都提出下一次要問的問題' },
        lede: {
          en: 'Four domains, five farmer outreach events, a public forum with more than 50 participants, and a Before/After printed under every single conversation.',
          zh: '四個領域、五場農民外展活動、一場超過 50 人參與的公開論壇，而且每一次談話底下都印著一份「之前／之後」。'
        },
        body:
          h.p({
            en: 'The structural choice is what we would point a judge at. Each expert block carries a one-line **most valuable takeaway**, an event summary, an **Impact and adaptation** paragraph, and then two explicit lists, **Before** and **After**. Between the blocks sit linking sentences that say what question the previous conversation left open: *"this led us to Dr. Jennifer Brophy, who challenged our original reliance on a kill switch"*; *"however, once we adopted membrane-based containment, we faced a new hardware problem."* The page is therefore not a list of meetings; it is a sequence in which each meeting is caused by the one before it.',
            zh: '我們會請評審看的是它的結構選擇。每一個專家區塊都帶著一行**最有價值的收穫**、一段事件摘要、一段**影響與調整**，然後是兩份明確的清單——**之前**與**之後**。區塊之間夾著連接句，說明上一次談話留下了什麼問題：*「這把我們帶向 Jennifer Brophy 博士，她質疑了我們原本對自殺開關的依賴」*；*「然而，一旦我們採用了以膜為基礎的圍阻，就遇到一個新的硬體問題。」*所以這一頁不是一份會議清單，而是一個每場會議都由前一場造成的序列。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Who, and when', zh: '是誰，什麼時候' }, w: '26%' },
              { t: { en: 'What it changed', zh: '改變了什麼' } }
            ],
            rows: [
              [{ en: 'Dr. Lin Wei-Yi (NTU agronomy), 19 Mar', zh: '林維怡博士（台大農藝），3 月 19 日' },
               { en: 'Before: a kill switch, and *Medicago* as the target plant. After: **consider not doing a kill switch**, change the target plant, consider hydroponics, shift to seedling-stage testing. Also: separate salinity from water-deficit treatments in the design, and for drought add particles that lower water potential.', zh: '之前：一個自殺開關，以及以 *Medicago* 為標的植物。之後：**考慮不做自殺開關**、換掉標的植物、考慮水耕、轉向苗期測試。另外：在設計中把鹽逆境與缺水處理分開，而乾旱則加入降低水勢的顆粒。' }],
              [{ en: 'Prof. Cheng Mei-Chun (NTU), 27 Mar', zh: '鄭梅君教授（台大），3 月 27 日' },
               { en: '**Arabidopsis as the model, agar first and then soil.** She also warned that hydroponics might not be stable and that they should not rely on it alone, which is why the hydroponics box ends up as a pre-test platform rather than the main system. Osmotic stress was dropped. **She provided the Arabidopsis seeds.**', zh: '**以阿拉伯芥為模式植物，先洋菜膠、再土壤。**她同時警告水耕可能不穩定、不該只依賴它——這就是水耕盒最後成為前測平台、而不是主要系統的原因。滲透逆境被移除。**阿拉伯芥的種子是她提供的。**' }],
              [{ en: 'Dr. Paul Verslues (Academia Sinica), 3 Apr', zh: 'Paul Verslues 博士（中央研究院），4 月 3 日' },
               { en: 'Shifted the aim from supplying more protective compound to **regulating the plant\'s own response**, and from stress recovery to **early detection**. That is the sentence the stress index exists to serve.', zh: '把目標從「供應更多保護性化合物」轉向**調節植物自己的反應**，並從「逆境恢復」轉向**早期偵測**。逆境指數存在的目的，就是為了服務這句話。' }],
              [{ en: 'Prof. Chen Wen-Liang (NYCU / AgriTalk), 10 Apr, 20 Jun, 15 Oct', zh: '陳文亮教授（陽明交大／AgriTalk），4 月 10 日、6 月 20 日、10 月 15 日' },
               { en: 'The architecture conversation, three times. April: **bioreactor instead of soil release, physical containment primary.** June: **build a feedback loop between the model and the bench**, with every model refined by experimental validation rather than developed beside it. October: a further pass on deployment. He is the single most consequential voice on the page.', zh: '關於架構的談話，共三次。四月：**改用生物反應器而不是土壤釋出，以物理圍阻為主。**六月：**在模型與實驗檯之間建立回饋迴路**——每個模型都要被實驗驗證修正，而不是在旁邊各自發展。十月：再對部署做一輪。他是這一頁上影響最大的單一聲音。' }],
              [{ en: 'Dr. Jennifer Brophy (Stanford), 18 Apr', zh: 'Jennifer Brophy 博士（史丹佛），4 月 18 日' },
               { en: '**Physical containment over a kill switch**, and from there the semi-permeable membrane. The kill switch becomes something to evaluate rather than something to build.', zh: '**物理圍阻優於自殺開關**，並由此走向半透膜。自殺開關從「要做的東西」變成「要評估的東西」。' }],
              [{ en: 'Prof. Chang Jo-Shu (Tunghai / NCKU), 18 Jun and 4 Sep', zh: '張嘉修教授（東海／成功大學），6 月 18 日與 9 月 4 日' },
               { en: '**Monitor flow rate and transmembrane pressure**, because that is what indicates membrane caking; and a mechanical answer to foaming. Three pressure transducers and a TMP trace exist because of this.', zh: '**監測流量與跨膜壓力**，因為那是膜結餅的指標；另外還給了起泡問題一個機械上的解法。三個壓力傳感器與那條跨膜壓力曲線的存在，就是因為這次談話。' }],
              [{ en: 'Prof. Huang Chieh-Chen (NCHU), 28 Jul and 6 Aug', zh: '黃介辰教授（中興大學），7 月 28 日與 8 月 6 日' },
               { en: 'Biostimulants work best at the **seedling stage**; excessive stress or protectant concentration can harm the plant, so thresholds have to be set and dosages validated; and the system should **run periodically rather than continuously.** He also **provided the WB800 strain** the whole project runs on.', zh: '生物刺激素在**苗期**效果最好；過強的逆境或過高的保護劑濃度都可能傷害植物，所以必須設門檻並驗證劑量；而系統應該**週期性運轉，而不是連續運轉。**他也**提供了整個專案所使用的 WB800 菌株**。' }],
              [{ en: 'World Vegetable Center, 22 May', zh: '世界蔬菜中心，5 月 22 日' },
               { en: 'Market demand, which **moved the focus to small-scale farmers** and to sustainability. The 63.8-year-old average manager and the fragmented-holdings framing date from here.', zh: '市場需求，而這**把焦點移到小規模農民**與永續性上。平均年齡 63.8 歲的經營者、以及耕地零碎這個框架，都是從這裡開始的。' }],
              [{ en: 'CH Biotech, 9 Jul', zh: '正瀚生技，7 月 9 日' },
               { en: '**Different crops and protectants need different application methods**: root irrigation, foliar spray, drone spray. Plus production cost per area covered, and *"research and confirm the regulation in Taiwan before taking further actions."* Their peptide is also what the hydroponics boxes pre-tested.', zh: '**不同作物與不同保護劑需要不同的施用方式**——根部灌注、葉面噴施、無人機噴施——還有每單位面積的生產成本，以及*「在採取進一步行動之前，先研究並確認台灣的法規」*。水耕盒前測用的也是他們的肽。' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Integrated Human Practices page. The names, dates and Before/After content are theirs; the selection of nine from thirty-one is ours.', zh: '讀自該隊 Integrated Human Practices 頁。姓名、日期與「之前／之後」的內容都是他們的；從三十一位中挑出九位是我們做的。' }
          }) +
          h.take({ en: 'A farmer\'s belief about how plants grow became a release rule in software', zh: '一位農民對植物如何生長的信念，變成了軟體裡的一條釋出規則' }, {
            en: 'Two natural farmers in northwest Taiwan, Ms. Chen and Dr. Li, told the team that **"raising a crop is like raising a child: a plant protected from every stress never builds the tolerance it would otherwise have."** The Math Model page then says, in plain words, that this is the specification the stress index is built to: *"the reactor should produce only when a threshold that accurately reflects crop condition is crossed."* The page shows the step from one to the other. We have not seen that done on another wiki in this division, and we think it is a better demonstration of integrated human practices than any of the thirty-one conversation records.',
            zh: '台灣西北部兩位自然農法的農友，陳女士與李博士，告訴該隊：**「種作物就像養小孩：一株被保護到完全不受任何逆境的植物，永遠不會長出它本來會有的耐受力。」**接著 Math Model 頁用明白的話說，這就是逆境指數要滿足的規格：*「反應器應該只在一個能準確反映作物狀況的門檻被跨過時才生產。」*而該頁把從前者到後者的那一步展示了出來。我們在這個組別的其他 wiki 上沒看過有人這樣做，而我們認為這比那三十一筆談話紀錄中的任何一筆，都更能展示整合式人類實踐。'
          }) +
          h.note({
            en: 'The rest of the engagement is a public forum with more than 50 participants, 400+ people reached through outreach, five farmer outreach events, and a **LINE platform called 農友助手** with eight functions, including a crop stress alert, a farmer diary, a feedback channel and a seed exchange. That is the right channel choice for the users described, and not a choice we have seen another team on this list make.',
            zh: '其餘的參與包括一場超過 50 人參與的公開論壇、透過外展接觸到 400 人以上、五場農民外展活動，以及一個**名為「農友助手」的 LINE 平台**，有八項功能，包含作物壓力警報、農友日記、意見回饋管道與種子交換——對他們所描述的使用者來說，這是正確的通路選擇，而我們沒有在這份名單上其他隊伍看到同樣的選擇。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'm-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, and we are obliged to be harder here than anywhere else on this site', zh: '還沒解決的部分——而我們有義務在這裡比本站任何地方都更嚴厲' },
        lede: {
          en: 'Almost every item below is one the wiki states about itself. That is to the team\'s credit and it is also the point: the honest reading of this project is that it is a set of characterised components with one joint missing.',
          zh: '底下幾乎每一項都是該 wiki 自己說出來的。這是這支隊伍的功勞，同時也正是重點：對這個專案最誠實的讀法是，它是一組被特性化過的元件，而中間少了一個接點。'
        },
        body:
          h.ul([
            { en: '**The system has never run end to end, and that is the largest single thing on this page.** The Results page: *"No forecast has yet driven a light, and no light driven by a forecast has reached a culture, so this stage has not been joined to the next end to end."* The Engineering page is blunter: every hardware track up to September ran on *B. subtilis* 168 or on constitutively expressed cargo, and WB800 took the loop three times in October, **"so none of these numbers is the light switch doing anything."** The reactor has no green strip built into it.', zh: '**這套系統從來沒有完整地從頭跑到尾，而這是這一頁上最大的一件事。**Results 頁：*「還沒有任何預報驅動過一盞燈，也還沒有任何由預報驅動的光抵達過培養物，所以這個階段還沒有端到端地接上下一個階段。」*Engineering 頁說得更直接：到九月為止的每一條硬體路線跑的都是 *B. subtilis* 168 或組成型表達的酬載，而 WB800 在十月上過迴路三次，**「所以這些數字裡沒有一個是光開關做出來的。」**反應器裡也還沒裝進綠光燈條。' },
            { en: '**The light switch is not a dial, which is what the project needs it to be.** Expression rises with time under green but **does not order itself by intensity**, and red at full power is not silent. Two candidate explanations are offered and neither tested: spectral leakage between channels, and that CcaSR needs about 672 nm to switch off while their red LEDs emit at 630–640 nm. The DNPH set gives a **14.03-fold green-over-red separation at 13 hours and a complete inversion at 16 hours**; neither point is repeated, and the 13-hour error bar runs from about 5 to 16 on the activity scale. Their own conclusion: the switch moves ACC deaminase activity, and the conditions under which it moves it predictably have not been established. **The experiment that would settle it — the same culture, one maturation time, both colours, repeated — is not in the record.**', zh: '**那個光開關不是一個旋鈕，而專案需要它是一個旋鈕。**在綠光下表達量隨時間上升，但**不會按強度排序**，而全功率的紅光也不是沉默的。他們提出兩個可能的解釋而都沒有測試：通道之間的光譜洩漏，以及 CcaSR 需要約 672 nm 才能關閉、而他們的紅光 LED 發的是 630–640 nm。DNPH 那一組在 **13 小時給出綠光對紅光 14.03 倍的分離，而在 16 小時完全反轉**；兩個時間點都沒有重複，而 13 小時的誤差棒在活性刻度上從約 5 延伸到 16。他們自己的結論是：這個開關確實會改變 ACC 去胺酶的活性，但它在什麼條件下能可預測地改變活性，還沒有被建立。**能定案的那個實驗——同一個培養物、單一熟成時間、兩種顏色、重複多次——不在紀錄裡。**' },
            { en: '**The identity of the light-plate bands is not settled by size.** They run near the 63–75 kDa markers, while the secreted ACC deaminase construct runs at about 37 kDa on the constitutive blot, and the Measurement page says plainly that no expression claim rests on them. That is the right handling of an ambiguous figure, and it also means the switch has no clean protein-level evidence behind it.', zh: '**光板那些條帶的身分無法僅由大小確定。**它們跑在 63–75 kDa 標記附近，而分泌型 ACC 去胺酶構築在組成型墨點上跑在約 37 kDa，Measurement 頁明白寫出沒有任何表達主張建立在它們之上。對一張曖昧的圖來說這是正確的處理方式——同時也意味著那個開關背後沒有乾淨的蛋白層級證據。' },
            { en: '**Containment, the project\'s whole biosafety case, rests on two platings.** Both were single platings without replicates; **no detection limit was recorded and no quantitative log reduction was measured**; and for the June sample the incubation conditions were not documented at all. The membrane breach detector is **fitted but has no breach test on record.** And the mechanism admits its own leak: debris and vesicles of **20 to 200 nm can still cross a 0.2 µm pore** alongside the secreted protein.', zh: '**圍阻——這個專案整個生物安全論證的基礎——建立在兩次塗盤上。**兩次都是單一塗盤、沒有重複；**沒有記錄偵測極限，也沒有量測定量的對數削減**；而六月那個樣品的培養條件完全沒有紀錄。那個膜破損偵測器**已經裝上，但紀錄中沒有任何破損測試。**而這個機制自己也承認有漏口：**20 到 200 nm 的碎片與囊泡仍可能隨分泌蛋白一起穿過 0.2 µm 的孔。**' },
            { en: '**The ELISA cannot support a yield claim, and the wiki says so in the sentence that matters.** The untransformed WB800 control returned **5.452 and 4.562 µg/mL, the same range as four of the six constructs beside it, "so no difference in that table can be attributed to expression."** Most sample wells are single wells reading below the lowest standard, which makes them extrapolations; the bioreactor time course **"fluctuates"** rather than rising and falling, and a second trial of the same experiment **peaked at 24 hours instead of 12.**', zh: '**ELISA 無法支撐任何產量主張，而該 wiki 在最關鍵的那一句裡就這樣說了。**未轉型的 WB800 對照回報 **5.452 與 4.562 µg/mL——和旁邊六個構築中的四個落在同一個範圍——「所以那張表裡任何差異都不能歸因於表達。」**大多數樣品孔都是單一孔，而且讀值低於最低標準，因此屬於外插；生物反應器的時間序列是**「在波動」**而不是上升再下降，而同一個實驗的第二次試驗**在 24 小時而不是 12 小時達峰。**' },
            { en: '**The economics do not close, and the wiki\'s own two pages disagree about it by more than an order of magnitude.** The Math Model gives a payback of **68 years at efficacy 1**, and notes that five years would require an efficacy of 14, **which exceeds the loss being recovered**; the Geospatial Analysis page gives **4.9 years** on a benefit of US$1931 per hectare per crop. **Efficacy is unbounded because no plant run of theirs constrains it.** The capital figure is equally soft: US$3800 per hectare rests on a five-hour harvest cycle, and at 12 or 18 hours it becomes **US$9120 or US$13,679.**', zh: '**經濟性沒有算得通，而該 wiki 自己的兩頁對此的差距超過一個數量級。**Math Model 給出的回收期是**在效力為 1 時 68 年**，並指出要縮到五年需要效力達 14，**而那超過了被挽回的損失本身**；Geospatial Analysis 頁則在每公頃每期 1931 美元的效益下給出**4.9 年**。**效力沒有上界，因為他們沒有任何一次植物實驗能約束它。**資本數字同樣鬆動：每公頃 3800 美元建立在五小時的收穫週期上，而在 12 或 18 小時下會變成**9120 或 13,679 美元。**' },
            { en: '**The dose is one that worked, not the smallest that works.** No dilution series has been run. The canopy correction is modelled and **spans 1.68 to 3.52**, and every row of the cost ledger inherits that span. Shelf life **has no direct measurement at all**. The figure standing in for it comes from one unreplicated tube read in live culture while the cells were still producing, and a replicated run went the other way.', zh: '**那個劑量是一個有效的劑量，不是最小的有效劑量。**沒有做過任何稀釋系列。冠層校正是模型算出來的，**跨幅從 1.68 到 3.52**，而成本帳的每一列都繼承了這個跨幅。保存期限**完全沒有直接量測**——代替它的那個數字來自一支未重複的試管，而且是在細胞還在生產時於活培養中讀出的，而一次有重複的運行走的是相反方向。' },
            { en: '**And the three intervals do not fit, which is the deployment finding the project would rather not have.** A weather forecast extends about three days. One hectare\'s application takes **5.4 days on ten 20-litre units**, so **2.4 days of production would have to precede any forecast that justified them.** Rebuilding the release rule around salt-sensitive growth stages, which is what matching the payback calculation would require, needs roughly fifteen applications in a 30-day window instead of nine: **81 reactor-days inside 30.**', zh: '**而那三段時間對不上，這是這個專案寧可沒有的部署結論。**一份氣象預報延伸約三天。一公頃的施用在**十台 20 公升機組上要 5.4 天**，所以**任何能正當化它的預報，都會晚於已經開始的 2.4 天生產。**而要把釋出規則重建在對鹽敏感的生長期上——那正是讓回收期計算彼此一致所需要的——在 30 天的視窗內需要大約十五次施用而不是九次：**30 天裡要 81 個反應器日。**' },
            { en: '**Smaller, and all stated by the team.** The Level 2 plasmid is **not sequenced end to end**. The chromoprotein reporter never worked and its explanation is called an educated guess. Molecular dynamics ran on **BoPEP4 only**, and the page says eight trajectories are not eight independent samples. The light plate\'s fixes are not re-tested and its intensity test has not been run. The hydroponics float\'s freeboard has never been measured on a printed part. The product cabinet has not been built. **Nine of the thirteen things we would most want to know about this system are things the wiki already tells you it does not know.**', zh: '**更小的項目，而且全部都是該隊自己說的。**那個 Level 2 質體**沒有端到端定序**。色素蛋白報告子從未成功，而他們把自己的解釋稱為有根據的猜測。分子動力學只跑了 **BoPEP4**，而該頁說八條軌跡不等於八個獨立樣本。光板的修正沒有重新測試，它的強度測試也沒有做。水耕浮板的乾舷從未在列印件上量過。產品機櫃還沒做出來。**我們最想知道的十三件事裡，有九件是該 wiki 早就告訴你它不知道的。**' }
          ]) +
          h.take({ en: 'The judgement we are least comfortable making', zh: '我們最不自在的那個判斷' }, {
            en: 'Three special prizes went to the three things this wiki does best: characterise an instrument, build a rig and let experts change the architecture. None of them requires the system to work. We think that is a defensible outcome, because a characterised instrument and a published pre-registration outlive the project while a half-closed loop does not. But we are the team that benefited from it, so treat that sentence as the one on this page most likely to be self-serving.',
            zh: '三個特殊獎落在這個 wiki 做得最好的三件事上——把一台儀器特性化、做出一台設備、讓專家改變架構——而其中沒有一件需要這套系統真的運作。我們認為這個結果站得住腳，因為一台被特性化的儀器與一份公開的預先登錄會比這個專案活得更久，而一個只閉了一半的迴路不會。但我們正是從中受益的那支隊伍，所以請把這一句當成這一頁上最可能是自利的句子。'
          })
      });

      /* ---------------- copy ---------------- */
      out += h.sec({
        id: 'm-copy',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What another team would copy from GEMS-Taiwan', zh: '另一支隊伍會從 GEMS-Taiwan 抄什麼' },
        lede: {
          en: 'Phrased that way on purpose. Copying ourselves would be absurd, and the point of the list is that every item on it is a method, not a result.',
          zh: '這個說法是刻意的。抄自己是荒謬的，而這份清單的重點在於：上面每一項都是一個方法，不是一個結果。'
        },
        body:
          h.ul([
            { en: '**Pre-register the analysis, then publish the predictions that failed.** Eleven algorithms, five metrics, eight thresholds and the exclusion rule committed to the repository before the first measurement. And **five of the eight predictions overturned, all eight reported.** The one that failed hardest was the assumption behind the estimator that was already shipping. A pre-registration that only ever confirms things is not doing any work.', zh: '**先把分析預先登錄，然後把失敗的預測公開。**十一種演算法、五個指標、八個門檻與排除規則，全部在第一次量測之前提交到程式庫——而**八個預測中五個被推翻，八個全部報告出來。**錯得最徹底的那一個，正是當時已經在運作的那個估計量背後的假設。一份只會確認事情的預先登錄，其實沒有在做事。' },
            { en: '**Log the individual samples inside each burst, and replay every algorithm on one recorded dataset.** Switching algorithms between runs gives each one a different input and confounds the comparison. Printing the samples inside a burst instead of only their summary is, in their words, **a single flag in most firmware**, and it is what made the entire analysis possible afterwards.', zh: '**把每個取樣叢集內部的個別樣本都記錄下來，再讓每種演算法在同一份錄下的數據上回放。**在不同運行之間換演算法，會讓每個演算法拿到不同的輸入，比較就被混淆了。用他們的話說，把叢集內部的樣本印出來、而不是只印它們的摘要，**在大多數固件裡只是一個旗標**——而正是它讓後來那整套分析成為可能。' },
            { en: '**Put the quality gate after the estimator, not inside it.** In clean flow eight estimators agreed to within 0.004 OD; the spread and jump gates took the worst bubble error from **2.44 to 0.016 OD.** For any continuous optical measurement, deciding whether a reading should be accepted matters more than choosing among similar estimators. And a gate should raise an alarm rather than silently correct, because a growing culture does not move 0.05 OD in 30 seconds.', zh: '**把品質閘門放在估計量之後，不要放在裡面。**在乾淨流動下八個估計量彼此相差在 0.004 OD 以內；而離散閘門與跳動閘門把最壞的氣泡誤差從 **2.44 OD 降到 0.016。**對任何連續光學量測來說，「決定一個讀值該不該被接受」比「在相似的估計量之間挑一個」更重要——而閘門應該發出警報，而不是默默修正，因為一個正在生長的培養物不會在 30 秒內移動 0.05 OD。' },
            { en: '**Calibrate against something that does not grow, on an axis no instrument sets.** 1 µm silica close to the size of the cell, a withdraw-one add-one protocol, and a concentration defined entirely by pipetted volume and a measured loop volume. The benchtop spectrophotometer then becomes an independent comparison instead of the source of the scale, which is the difference between validating an instrument and fitting it.', zh: '**用不會生長的東西校正，而且用一個不由任何儀器決定的軸。**接近細胞尺寸的 1 µm 矽石、一套「抽一加一」的操作程序，以及完全由移液體積與量測得到的迴路體積所定義的濃度。桌上型分光光度計於是變成一個獨立的比較對象，而不是刻度的來源——這就是「驗證一台儀器」與「把它擬合過去」之間的差別。' },
            { en: '**Register a number before the run that will test it.** On 1 October, before any bioreactor run of WB800 secreting ACC deaminase existed, a specific growth rate of **0.2986 h⁻¹ with a 90% interval of 0.2705 to 0.3300** was written down from a light-plate fit, with the pass criterion fixed. Run 6 returned **0.286 ± 0.010.** The team also refuses to score the two secondary endpoints, for the reason given when they were registered. A rate fitted in a 150 µL plate well predicted the rate in a one-litre perfusion loop thirteen days later, and the prediction is checkable because it was dated.', zh: '**在那次會檢驗它的實驗之前，先把一個數字登錄下來。**10 月 1 日，在任何 WB800 分泌 ACC 去胺酶的生物反應器運行存在之前，他們就從光板的擬合寫下比生長速率 **0.2986 h⁻¹ 與 90% 區間 0.2705 到 0.3300**，並固定了通過的判準。第 6 次運行回報 **0.286 ± 0.010。**該隊也拒絕為兩個次要終點評分，理由就是登錄當時寫下的那個。一個在 150 µL 微孔中擬合出的速率，預測了十三天後一公升灌流迴路中的速率，而這個預測之所以可被核對，是因為它有日期。' },
            { en: '**Measure every LED before you call anything a light treatment.** Forty LEDs read one by one, green varying by 26% and red by 22%, matched in fours to within 0.4–1.8%. And then the harder admission: **lux is weighted for human vision and is not a biological light dose until it is converted to photon flux.**', zh: '**在把任何東西稱為光處理之前，先量過每一顆 LED。**四十顆 LED 一顆一顆量過，綠光之間差 26%、紅光差 22%，以四顆一組配到 0.4–1.8% 以內。接著是更難說出口的那個承認：**lux 是以人眼視覺加權的，在被換算成光子通量之前，它不是一個生物學上的光劑量。**' },
            { en: '**Separate the amount from the activity, on the same samples.** An anti-His ELISA counts tagged protein whether or not it works; a DNPH assay sees only active enzyme. Running both is how a six-hour lag between a protein peak at 12 h and an activity peak at 18 h became a finding about post-secretory maturation instead of a contradiction to be averaged away.', zh: '**在同一批樣品上，把「量」和「活性」分開。**anti-His ELISA 不管蛋白有沒有在工作都把它算進去；DNPH 試驗只看得到有活性的酵素。兩個都做，才讓「蛋白在 12 小時達峰、活性在 18 小時達峰」這六小時的落差，變成一個關於分泌後成熟的發現，而不是一個被平均掉的矛盾。' },
            { en: '**Build the cargo without the gate first.** A constitutive version of every output, sequence-verified, before the inducible circuit goes on top of it. It means a cargo can fail for its own reasons rather than the circuit\'s, and it is why there was anything to assay at all while the light circuit was still being built.', zh: '**先把酬載做成沒有光閘的版本。**每個輸出都先做一個組成型、經定序確認的版本，再把誘導線路蓋上去。這讓一個酬載可以因為自己的原因失敗，而不是因為線路的原因；也正是因為這樣，在光線路還在組裝的時候，才有東西可以拿去試驗。' },
            { en: '**Report the control that defeats your own table.** *"The untransformed WB800 control returned 5.452 and 4.562 µg/mL, the same range as four of the six constructs beside it, so no difference in that table can be attributed to expression."* That sentence costs a results section and buys the reader\'s trust in every other number on the page.', zh: '**把那個擊敗你自己表格的對照報告出來。***「未轉型的 WB800 對照回報 5.452 與 4.562 µg/mL，和旁邊六個構築中的四個落在同一個範圍，所以那張表裡任何差異都不能歸因於表達。」*這一句話的代價是一整個結果小節，換來的是讀者對這一頁上其他每一個數字的信任。' },
            { en: '**Print the figure that cannot be read, and say why.** The failed MoClo 2.0 screen is published with the caption that it arrived with no lane map, no date and no expected sizes, *"so it can be shown but not read."* The alternative, quietly leaving it out, would make the failed cycle unverifiable.', zh: '**把那張無法判讀的圖印出來，並說明為什麼。**失敗的 MoClo 2.0 篩選被公開，圖說寫著它到手時沒有泳道圖、沒有日期、沒有預期大小，*「所以它可以被展示，但不能被判讀。」*另一種做法——安靜地把它省掉——會讓那個失敗的循環變得無法驗證。' },
            { en: '**Say when two things changed at once.** The permeate draw was halved at the same time the acceptance gate went on, so the clean bubble record cannot be credited to the gate. Narrowing your own claim to what one change can carry is the cheapest credibility available to any team.', zh: '**當兩件事同時改變時，就把這件事說出來。**透過液抽取量在接受閘門上線的同時被砍半，所以乾淨的氣泡紀錄不能歸功於閘門。把自己的主張收窄到單一改變所能支撐的範圍，是任何隊伍都能取得的、最便宜的可信度。' },
            { en: '**Print a normalised number and its raw total side by side.** Per-gram chlorophyll rose threefold in one of their heat assays while total chlorophyll had fallen about 91%, because stress had destroyed the biomass in the denominator. Any normalisation whose denominator is also affected by the treatment can do this, and printing both makes the artifact visible instead of arguable.', zh: '**把標準化後的數字和它的原始總量並排印出來。**在他們一次熱逆境試驗中，每克葉綠素上升三倍，而總葉綠素其實下降了約 91%，因為逆境已經毀掉了分母裡的生物量。任何分母同樣受處理影響的標準化都可能出現這種情形，而把兩者都印出來，會讓這個假象變成看得見的東西，而不是可以爭論的東西。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, the reading in the pivot section that the April conversations are what the Integrated Human Practices prize recognises, the judgement that the measurement work is the most transferable thing on this wiki, and every sentence in "What is open" that is not a quotation. Everything else is the team\'s own, read from [2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/). Since this is our own team, that is where you should go instead of taking our word for any of it.',
            zh: '標示為我們的看法：上面十二點、轉向那一節裡「四月的那些談話正是整合式人類實踐獎所表彰的東西」這個解讀、「量測工作是這個 wiki 上最可轉移的東西」這個判斷，以及「還沒解決的部分」裡每一個不是引文的句子。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/)——而既然這是我們自己的隊伍，那裡就是你應該去的地方，而不是對以上任何一點都相信我們的說法。'
          })
      });

      return out;
    }
  };
})(window);
