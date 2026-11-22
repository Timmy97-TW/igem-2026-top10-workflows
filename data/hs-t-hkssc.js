/* HKSSC — paraben esterase for food waste. Top 10 High School and Best New
   Basic Part (High School), iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/hkssc/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Clone prbA, then prove the clone twice', zh: '先選殖 prbA，再把選殖結果驗兩次' },
        s: { en: 'DH5α for the plasmid, BL21(DE3) for expression; KpnI/NdeI digest 5517 + 1404 bp, colony PCR 907 bp', zh: '質體養在 DH5α、表達放在 BL21(DE3)；KpnI/NdeI 雙切 5517+1404 bp、菌落 PCR 907 bp' }, tone: 'g' },
      { l: { en: 'Calibrate the readout before using it', zh: '在用讀值之前先把它校正好' },
        s: { en: 'BL21(DE3) CFU standard curves from OD 0.1 to 1.0, plating only the dilutions that can land in 30–300 colonies', zh: 'BL21(DE3) 在 OD 0.1 到 1.0 的 CFU 標準曲線；只塗那些可能落在 30–300 顆菌落的稀釋度' }, tone: 'g' },
      { l: { en: 'Baseline toxicity on the wild type first', zh: '先在野生型上量基準毒性' },
        s: { en: '100–400 mg/L methyl-paraben, three technical repeats per concentration, two OD windows → MIC 400–500 mg/L', zh: '100–400 mg/L 對羥基苯甲酸甲酯、每個濃度三個技術重複、兩個 OD 區間→MIC 為 400–500 mg/L' } },
      { l: { en: 'The three-arm MIC, run three times', zh: '三組設計的 MIC，做了三輪' },
        s: { en: 'Cycle 1 prbA-idt 1000–1500 mg/L; cycle 2 pelB-prbA(xsc) 500–600 mg/L; cycle 3 never tested for MIC', zh: '第一輪 prbA-idt 為 1000–1500 mg/L；第二輪 pelB-prbA(xsc) 為 500–600 mg/L；第三輪的 MIC 沒有量' }, tone: 'a' },
      { l: { en: 'Characterise the enzyme off the plate', zh: '離開培養盤去表徵那個酵素' },
        s: { en: 'pNPA kinetics against porcine liver esterase; HPLC that never resolved a degradation rate', zh: '以 pNPA 動力學對照豬肝酯酶；HPLC 則始終沒有解出降解速率' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Structure from AlphaFold', zh: '用 AlphaFold 取得結構' },
        s: { en: 'Visualised in UCSF Chimera: a long flexible N-terminal tail, consistent with the 31-residue signal peptide', zh: '在 UCSF Chimera 中視覺化：一條長而柔軟的 N 端尾巴，與 31 個殘基的訊號肽相符' } },
      { l: { en: 'Stability hotspots, two ruled out in public', zh: '穩定性熱點，兩個被公開排除' },
        s: { en: 'HotSpot Wizard 3.1: A198 dropped for correlated positions, P329 for having one residue, N240 kept', zh: 'HotSpot Wizard 3.1：A198 因有相關位置而放棄、P329 因該位置只有一種胺基酸而放棄，留下 N240' } },
      { l: { en: 'Efficiency hotspots, designed only', zh: '效率熱點，只停在設計' },
        s: { en: 'A221 and A140 in the catalytic pocket and access tunnel; an RCY codon library designed, never built', zh: 'A221 與 A140 位於催化口袋與進入通道；RCY 密碼子庫只做到設計，從未建構' }, tone: 'a' },
      { l: { en: 'Predict the native promoter', zh: '預測原生啟動子' },
        s: { en: 'BPROM on 247 bp upstream: LDF 5.30, −10 box TATAAT, −35 box TTGAAA, 21 bp apart, TSS at 178', zh: 'BPROM 分析上游 247 bp：LDF 5.30、−10 區 TATAAT、−35 區 TTGAAA、相距 21 bp、轉錄起點在 178' } },
      { l: { en: 'Fit the kinetics on their own OD405', zh: '用自己量的 OD405 擬合動力學' },
        s: { en: 'Michaelis–Menten, then mass-normalised Q, Two-Way ANOVA, Brown–Forsythe, Welch–Holm', zh: '先 Michaelis–Menten，再算質量標準化的 Q 值，並做變異數分析與 Welch–Holm 檢定' }, tone: 'g' }
    ],
    links: [
      { w: 0, d: 3, l: { en: 'BPROM chose the fragment', zh: 'BPROM 選出那段片段' }, up: true },
      { w: 4, d: 4, l: { en: 'the only data the fits have', zh: '擬合唯一有的資料' }, side: 'left' }
    ]
  };

  PD.pages['hs-hkssc'] = {
    label: { en: 'HKSSC', zh: 'HKSSC' },
    title: { en: 'HKSSC — paraben esterase for food waste', zh: 'HKSSC——用於廚餘的對羥基苯甲酸酯酯酶' },
    render: function (h) {
      var t = team('hkssc');
      var out = h.teamhero(t, {
        h1: {
          en: 'Build the standard curve before you read the result — and when the second cycle comes out ==worse than the first, print that number too==.',
          zh: '在讀結果之前先把標準曲線做出來——而當第二輪的結果==比第一輪還差時，也要把那個數字印出來==。'
        },
        lede: {
          en: 'Over a billion tonnes of food are wasted every year, and Hong Kong already has part of an answer: **O·PARK**, where microbes digest source-separated food waste into biogas. HKSSC noticed what that plant is up against — the **preservatives that arrive inside the waste paralyse the very microbes doing the digesting, and drastically slow the process down.** So the project is one enzyme aimed at one bottleneck: **prbA**, an esterase from *Enterobacter cloacae* that hydrolyses methyl-paraben into less antimicrobial compounds, expressed in *E. coli* **BL21(DE3)**. What is worth copying here is not the result. It is that they **calibrated the readout before they used it**, published the reason for choosing CFU plate counts over OD₆₀₀, and then reported a second engineering cycle that came out *lower* than the first instead of quietly keeping the better number.',
          zh: '全球每年浪費超過十億公噸食物，而香港已經有了一部分答案：**O·PARK**——微生物在那裡把源頭分類的廚餘消化成沼氣。HKSSC 注意到那座廠面對的是什麼：**隨廚餘一起進來的防腐劑，會麻痺正在做消化工作的那些微生物，把整個過程大幅拖慢。**所以這個專案就是一個酵素對準一個瓶頸：**prbA**，一個來自 *Enterobacter cloacae* 的酯酶，能把對羥基苯甲酸甲酯水解成抗菌性較弱的化合物，並在 *E. coli* **BL21(DE3)** 中表達。這裡值得抄的不是結果，而是他們**在使用讀值之前先把它校正好**，把「為什麼選 CFU 塗盤計數而不是 OD₆₀₀」的理由寫出來，然後又把第二輪工程循環比第一輪*更低*的數字報了出來，而不是安靜地留下比較好看的那一個。'
        },
        chips: [
          { t: { en: 'prbA paraben esterase', zh: 'prbA 對羥基苯甲酸酯酯酶' }, k: 'b' },
          { t: { en: 'E. coli BL21(DE3)', zh: 'E. coli BL21(DE3)' }, k: 'v' },
          { t: { en: 'CFU counts over OD₆₀₀', zh: 'CFU 計數勝過 OD₆₀₀' }, k: 'g' },
          { t: { en: 'Three DBTL cycles', zh: '三個 DBTL 循環' }, k: 'a' },
          { t: { en: '14 new parts, 90 logged lab days', zh: '14 個新零件、90 個有紀錄的實驗日' }, k: 't' }
        ],
        stats: [
          { v: '400–500 mg/L', l: { en: 'Wild-type BL21(DE3) MIC against methyl-paraben — the baseline measured before any comparison', zh: '野生型 BL21(DE3) 對羥基苯甲酸甲酯的 MIC——在任何比較之前就先量好的基準' } },
          { v: '1000–1500 mg/L', l: { en: 'MIC of the cycle 1 engineered strain, their highest figure, with the range never narrowed', zh: '第一輪改造菌株的 MIC，他們最高的數字，而這個範圍始終沒有被收窄' } },
          { v: '500–600 mg/L', l: { en: 'MIC of the cycle 2 construct — lower than cycle 1, published with the reason they suspect', zh: '第二輪構築的 MIC——比第一輪低，且連他們懷疑的原因一起公開' } },
          { v: 'OD 0.1–1.0', l: { en: 'Range over which the BL21(DE3) CFU standard curve was built, before the MIC work', zh: 'BL21(DE3) CFU 標準曲線涵蓋的範圍，而這是在 MIC 工作之前做的' } },
          { v: '30–300', l: { en: 'Colonies per plate: the counting window they held to, and why most dilutions were never plated', zh: '每盤菌落數：他們堅持的計數視窗，也是多數稀釋度從未被塗盤的理由' } },
          { v: '2.09×', l: { en: 'Mass-normalised catalytic capacity of recombinant prbA over porcine liver esterase at 1 µg/mL', zh: '1 µg/mL 下，重組 prbA 相對豬肝酯酶的質量標準化催化容量倍數' } }
        ]
      });

      out += h.toc([
        { id: 'k-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'k-readout', t: { en: 'The readout first', zh: '先定讀值' } },
        { id: 'k-arms', t: { en: 'Three arms', zh: '三組設計' } },
        { id: 'k-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'k-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'k-part', t: { en: 'The part', zh: '那個零件' } },
        { id: 'k-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'k-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'k-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A named plant, a named bottleneck, one enzyme', zh: '一座有名字的廠、一個有名字的瓶頸、一個酵素' },
        lede: {
          en: 'Most food-waste projects aim at a global number. This one aims at three digesters in Hong Kong that already exist and already run slower than they should.',
          zh: '多數廚餘專案對準的是一個全球數字。這一個對準的是香港三座已經存在、而且已經跑得比應有速度更慢的消化槽。'
        },
        body:
          h.flow({
            title: { en: 'Where the project proposes to sit: inside a pipeline that is already running', zh: '這個專案提議放在哪裡：一條已經在運轉的流程裡' },
            sub: { en: 'The team placed itself at pre-treatment after an O·PARK site visit, an EPD email reply, and advice from the HKUST Black Soldier Fly Bin team. Every stage below is read from their pages; only the third is theirs to build.', zh: '這個隊伍在參訪 O·PARK、收到環保署的電郵回覆、並聽取科大黑水虻廚餘箱團隊的建議之後，把自己放在前處理這一段。下面每一段都讀自他們的頁面；只有第三段是他們要做的。' },
            stages: [
              { label: { en: 'Smart bin', zh: '智慧回收箱' }, sub: { en: 'Source-separated food waste in public housing estates', zh: '公共屋邨裡源頭分類的廚餘' }, tone: 'b',
                items: [{ en: 'HKUST BSF team: do it here', zh: '科大黑水虻團隊：就在這裡做' }] },
              { label: { en: 'Collection and buffer tank', zh: '收集與緩衝槽' }, sub: { en: 'Impurities out, slurried with process water, 2–3 days to stabilise', zh: '去除雜質、以製程水打成漿狀、穩定 2 至 3 天' }, tone: 'v',
                items: [{ en: 'pH 4–6, says the EPD', zh: '環保署說：pH 4 至 6' }] },
              { label: { en: 'prbA pre-treatment', zh: 'prbA 前處理' }, sub: { en: 'The one step this project proposes to add', zh: '這個專案提議加進去的那一步' }, tone: 'a',
                items: [{ en: 'Proposed, and LB only', zh: '只是提議，而且只有 LB' }] },
              { label: { en: 'Anaerobic digestion', zh: '厭氧消化' }, sub: { en: 'Three digesters, methanogens, about 35 °C, roughly 23 days', zh: '三座消化槽、產甲烷菌、約 35 °C、大約 23 天' }, tone: 'g',
                items: [{ en: 'Learned on the site visit', zh: '在參訪現場學到的' }] },
              { label: { en: 'Biogas and compost', zh: '沼氣與堆肥' }, sub: { en: 'Electricity, plus residues for landscaping and agriculture', zh: '發電，加上可用於園境與農業的殘餘物' }, tone: 'n',
                items: [{ en: 'Never measured here', zh: '這裡從未量過' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Project Description and Human Practices pages.', zh: '由我們依該隊 Project Description 與 Human Practices 頁繪製。' }
          }) +
          h.p({
            en: 'The numbers behind the framing are theirs and they are sourced: **1.05 billion tonnes** of food wasted worldwide in 2022 from the UNEP Food Waste Index Report 2024; **29 %** of municipal solid waste landfilled in Hong Kong in 2024 was food waste, the largest single category; and a 2013 US survey in which **more than 90 % of food samples contained measurable parabens**. Parabens are esters of 4-hydroxybenzoic acid; the team\'s own account of the mechanism is membrane damage — they destabilise the bacterial membrane by mimicking pore-forming proteins, inducing potassium efflux.',
            zh: '支撐這個框架的數字是他們自己的，而且都附了出處：依聯合國環境署《2024 年食物浪費指數報告》，2022 年全球浪費 **10.5 億公噸**食物；2024 年香港棄置於垃圾填埋區的都市固體廢物中，廚餘佔 **29%**，是單一類別中最大的一塊；另有一份 2013 年的美國調查指出，**超過九成的食物樣本都驗出可量測的對羥基苯甲酸酯**。對羥基苯甲酸酯是 4-羥基苯甲酸的酯類；該隊對作用機制的說法是破壞膜：它們模仿成孔蛋白的行為去擾動細菌膜，誘發鉀離子外流。'
          }) +
          h.take({ en: 'Why we think the local aim matters', zh: '為什麼我們認為「對準本地」這件事重要' }, {
            en: 'A global abstraction cannot be wrong. "One billion tonnes of food waste" has no operating temperature, no retention time and no pH, so no experiment can disagree with it. **O·PARK has all three**, and the moment the team wrote them down — 35 °C, 23 days, pH 4–6, a 2–3 day buffer tank — the project acquired conditions it could fail to meet. It has not met them yet. But a High School team that gave itself a target specific enough to miss has done something most wikis avoid.',
            zh: '一個全球性的抽象說法是不可能錯的。「十億公噸廚餘」沒有操作溫度、沒有停留時間、也沒有 pH 值，所以沒有任何實驗能跟它矛盾。**O·PARK 三者都有**，而當這個隊伍把它們寫下來的那一刻——35 °C、23 天、pH 4 至 6、2 至 3 天的緩衝槽——這個專案就得到了一組它可能達不到的條件。它目前還沒達到。但一支高中隊伍把目標設得具體到「有可能沒做到」，這件事本身就是多數 wiki 會避開的。'
          })
      });

      /* ---------------- the readout ---------------- */
      out += h.sec({
        id: 'k-readout',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'The readout came before the result', zh: '讀值在結果之前' },
        lede: {
          en: 'Before any MIC plate was poured, they argued for one readout against another, then built the calibration curve the chosen one needs. That order is the whole point.',
          zh: '在倒下任何一盤 MIC 培養盤之前，他們先替一種讀值對另一種提出論證，然後把被選中的那一種所需要的校正曲線做出來。這個順序就是全部的重點。'
        },
        body:
          h.p({
            en: 'Their stated reason, in their own terms: the CFU plate count gives **a direct count of living cells** that are alive and still able to multiply, whereas **OD₆₀₀ can be skewed by precipitation or by dead cell bodies.** For a project whose entire claim is "cells that would have stopped growing are still growing", a readout that counts turbidity rather than survivors is the wrong instrument, and they say so before they use either one.',
            zh: '他們自己說的理由是：CFU 塗盤計數給出的是**活細胞的直接計數**——那些還活著、而且還能繼續分裂的細胞；而 **OD₆₀₀ 會被沉澱或死細胞殘體帶偏。**對一個整個主張都是「原本會停止生長的細胞現在還在生長」的專案來說，一個量混濁度而不是量存活者的讀值是錯的儀器，而他們在用任何一種之前就把這點說了出來。'
          }) +
          h.warn({
            en: 'And then the sentence that earns this section: **"it is required for proper normalization, as CFU standard curves are needed when normalizing enzyme activity per cell. Without CFU calibration, conclusions may be misleading or incorrect."** A High School team wrote down, in advance, the condition under which its own conclusions would not be trustworthy — and then went and satisfied it, building BL21(DE3) standard curves across **OD 0.1, 0.2, 0.5, 0.6 and 1.0** before the paraben work began.',
            zh: '接著是讓這一節站得住腳的那句話：**「這是正確標準化所必需的，因為把酵素活性標準化到每個細胞時需要 CFU 標準曲線。沒有 CFU 校正，結論可能會誤導或不正確。」**一支高中隊伍事先寫下了「在什麼條件下自己的結論不可信」——然後真的去把那個條件滿足了：在對羥基苯甲酸酯的工作開始之前，先做出 BL21(DE3) 在 **OD 0.1、0.2、0.5、0.6 與 1.0** 的標準曲線。'
          }) +
          h.h3({ en: 'Which dilutions, and why not all of them', zh: '哪些稀釋度，以及為什麼不是全部' }) +
          h.ul([
            { en: '**They did not plate a full ten-fold series.** Rather than "wasting agar plates on every single step", they selected dilutions aimed at the biological minimum and maximum of the growth curve they cared about.', zh: '**他們沒有把完整的十倍序列稀釋都塗盤。**他們沒有「把洋菜培養盤浪費在每一個步驟上」，而是挑出對準自己在意的那段生長曲線的生物學下限與上限的稀釋度。' },
            { en: '**10⁻¹ and 10⁻² were kept as a safeguard** for the lowest optical densities such as OD 0.1: if the culture were lagging or contaminated the cell count would be very low, and the concentrated steps guarantee countable colonies anyway.', zh: '**10⁻¹ 與 10⁻² 被留下來作為保險**，對應像 OD 0.1 這樣最低的光密度：如果培養物處於遲滯期或受污染，細胞數會非常低，而這些較濃的稀釋度至少能保證還有可數的菌落。' },
            { en: '**The higher dilutions came from an expectation, stated as an expectation:** a log-phase *E. coli* culture at OD 0.1–1.0 holds between **10⁸ and 10⁹ cells/mL**, cited to the literature. 10⁻⁵, 10⁻⁶ and 10⁻⁸ follow from that, and they say so.', zh: '**較高的稀釋度來自一個被明說為「預期」的預期：**OD 0.1 至 1.0 的對數期 *E. coli* 培養物含有 **10⁸ 至 10⁹ 個細胞/mL**，並附上文獻出處。10⁻⁵、10⁻⁶ 與 10⁻⁸ 就是由此而來，而他們把這點寫出來了。' },
            { en: '**The counting window is 30–300 colonies per plate, with the failure mode on each side named.** Above 300 the crowding effect merges overlapping colonies and severely undercounts; below 30 a minor pipetting error skews the final concentration by a large percentage.', zh: '**計數視窗是每盤 30 至 300 顆菌落，而兩端的失效模式都被指名了。**超過 300 時擁擠效應會讓重疊的菌落合併，導致嚴重低估；低於 30 時，一個小小的移液誤差就會讓最終濃度偏掉一大截。' },
            { en: '**The arithmetic that makes mixed dilutions comparable is spelled out:** each plate count is multiplied by its inverse dilution factor and the volume plated, so every point returns to CFU/mL of the original undiluted culture and all standards plot on one axis.', zh: '**讓不同稀釋度可以互相比較的算術也被寫清楚了：**每盤的計數乘上它各自稀釋倍數的倒數與塗盤體積，於是每個點都回到原始未稀釋培養物的 CFU/mL，所有標準點就能畫在同一個軸上。' },
            { en: '**A lawn is recorded as a lawn.** Plates too packed to count are reported as "a lawn of bacteria" rather than being given a number — an uncountable plate is an observation, not a data point.', zh: '**菌膜就記成菌膜。**太密而無法計數的培養盤被報告為「一片菌膜」，而不是被硬給一個數字——一盤數不清的培養盤是一個觀察，不是一個數據點。' }
          ]) +
          h.take({ en: 'Our reading', zh: '我們的解讀' }, {
            en: 'This is the most transferable thing on the wiki, and it is also the part a judge is least likely to ask about. **Choosing a readout on its merits, writing down the reason, then building its calibration curve before the experiment that depends on it** is ordinary good practice that most teams — including most undergraduate teams — simply skip. The MIC numbers further down this page are contestable. The decision to earn the right to read them is not.',
            zh: '這是整個 wiki 上最可轉移的一件事，同時也是評審最不可能問到的一部分。**依理由挑選讀值、把理由寫下來、然後在依賴它的實驗之前先把校正曲線做好**，是一般意義上的好做法，而多數隊伍——包括多數大學組隊伍——就是直接跳過。這一頁後面那些 MIC 數字是可以被爭論的，但「先去取得讀它們的資格」這個決定不是。'
          })
      });

      /* ---------------- three arms ---------------- */
      out += h.sec({
        id: 'k-arms',
        kick: { en: 'Design', zh: '設計' },
        h2: { en: 'Three arms, stated in advance — and what each one actually did', zh: '事先就寫明的三組設計——以及每一組實際做了什麼' },
        lede: {
          en: 'MIC is defined on their page as the lowest concentration that completely stops visible growth. The design is a clean comparison. Two of the three arms then behaved differently from the expectation printed next to them.',
          zh: 'MIC 在他們頁面上的定義是：能完全阻止可見生長的最低濃度。這個設計是一個乾淨的比較。而三組之中有兩組，後來的表現與印在旁邊的預期並不一樣。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Setup', zh: '設定' }, w: '21%' },
              { t: { en: 'Expected, as published', zh: '公開寫下的預期' }, w: '22%' },
              { t: { en: 'What the plates showed', zh: '培養盤實際顯示的' } }
            ],
            rows: [
              [{ en: '**1 · Positive control** — *E. coli* BL21(DE3) in LB', zh: '**1·陽性對照**——*E. coli* BL21(DE3) 在 LB 中' },
               { en: '"We expect *E. coli* to grow."', zh: '「我們預期 *E. coli* 會生長。」' },
               { en: 'It grew, in every run: **"lawns of bacteria in all the positive plates"**. The one arm that behaved exactly as written.', zh: '每一輪都長了：**「所有陽性培養盤上都是菌膜」**。這是唯一完全照著寫的方式表現的一組。' }],
              [{ en: '**2 · Negative control** — *E. coli* BL21(DE3) in LB with methyl-paraben', zh: '**2·陰性對照**——*E. coli* BL21(DE3) 在加了對羥基苯甲酸甲酯的 LB 中' },
               { en: '"We expect no growth since paraben inhibits the growth of microbes."', zh: '「我們預期不會生長，因為對羥基苯甲酸酯會抑制微生物生長。」' },
               { en: '**It grew.** Colonies formed at 100, 200, 300 and 400 mg/L, getting less dense as concentration rose, and no colonies appeared from 500 to 2000 mg/L. So the negative control was not a negative control: it was **a dose–response curve, and it is what gave the project a baseline of 400–500 mg/L.**', zh: '**它長了。**在 100、200、300 與 400 mg/L 都形成菌落，而且隨濃度上升而變得較稀疏；500 到 2000 mg/L 則沒有菌落。所以這一組並不是陰性對照：它是**一條劑量反應曲線，也正是它給了這個專案 400–500 mg/L 的基準。**' }],
              [{ en: '**3a · Experimental, cycle 1** — BL21(DE3) carrying prbA-idt, kanamycin, IPTG', zh: '**3a·實驗組，第一輪**——帶 prbA-idt 的 BL21(DE3)、康黴素、IPTG' },
               { en: 'Transgenic cells in paraben that would otherwise stop them.', zh: '轉基因細胞放在原本會擋住它們的對羥基苯甲酸酯中。' },
               { en: 'First attempt at OD₆₀₀ < 0.2: **no colonies anywhere except the positive controls.** Repeated at OD₆₀₀ 0.4–0.6, colonies appeared at 400, 500 and 600 mg/L, so the range was pushed up; at 1500 mg/L the colonies were sparse and at 1000 mg/L they persisted. Reported MIC **1000–1500 mg/L**, with "due to lack of time, we could not proceed with further experiments to narrow the range."', zh: '第一次嘗試在 OD₆₀₀ < 0.2：**除了陽性對照之外，到處都沒有菌落。**改在 OD₆₀₀ 0.4–0.6 重做，400、500 與 600 mg/L 都出現菌落，於是把範圍往上推；1500 mg/L 時菌落稀疏，1000 mg/L 時仍然存在。報告的 MIC 為 **1000–1500 mg/L**，並附上「由於時間不足，我們無法再做進一步實驗把這個範圍收窄」。' }],
              [{ en: '**3b · Experimental, cycle 2** — pelB-prbA(xsc)-pET22b+, ampicillin, IPTG', zh: '**3b·實驗組，第二輪**——pelB-prbA(xsc)-pET22b+、安比西林、IPTG' },
               { en: 'Higher than cycle 1: a T7 promoter they hoped was stronger, plus pelB to send the enzyme to the periplasm where paraben hits the membrane.', zh: '預期比第一輪更高：一個他們希望更強的 T7 啟動子，加上 pelB 把酵素送到周質空間——對羥基苯甲酸酯攻擊膜的地方。' },
               { en: '**Lower.** At 1000–3000 mg/L nothing grew but the positive control. Re-tested at 400–600 mg/L, nothing grew above 500 mg/L, giving MIC **500–600 mg/L** — barely above the wild type. They print the number, call it "unexpected", and offer their suspicion: pelB stress plus a purification protocol written for intracellular protein.', zh: '**更低。**在 1000 至 3000 mg/L，除了陽性對照之外什麼都沒長。改在 400 至 600 mg/L 重測，500 mg/L 以上都沒有生長，得出 MIC 為 **500–600 mg/L**——幾乎沒有高出野生型。他們把這個數字印出來、稱它「出乎預料」，並提出自己的懷疑：pelB 造成的壓力，加上一套為細胞內蛋白而寫的純化流程。' }],
              [{ en: '**3c · Experimental, cycle 3** — prbA(xscsc)-idt, 6×His at both termini', zh: '**3c·實驗組，第三輪**——prbA(xscsc)-idt、兩端各帶 6×His' },
               { en: 'Built to improve IMAC purification, and to remove the pelB stress.', zh: '做出來是為了改善 IMAC 純化，並去掉 pelB 帶來的壓力。' },
               { en: '**MIC never measured.** The page states it "has not been tested to determine the MIC as it would theoretically be the same as in cycle 1", and the Learn section adds that purification was not completed either, "due to limited time constraints".', zh: '**MIC 從未量過。**該頁寫道，它「沒有被測試以決定 MIC，因為理論上會與第一輪相同」，而 Learn 一節補充說，純化也沒有完成，「因為時間有限」。' }]
            ],
            min: 820,
            source: { en: 'All five rows read from the team\'s Results and Engineering pages. The collection into one table is ours.', zh: '五列全部讀自該隊 Results 與 Engineering 頁。整理成一張表是我們做的。' }
          }) +
          h.warn({
            en: '**What the MIC comparison does not establish, stated plainly.** In the cycle 1 grids that set the 1000–1500 mg/L range, the uninduced **0.0 mM IPTG** plates carried colonies at the same paraben concentrations as the induced ones, and the published range is **not broken down by induction level** — so the plates do not separate "prbA was expressed" from "these cells were plated at log phase". The team is aware of the mechanism and says so elsewhere: the idt construct **"has been observed to have basal minimum expression, and even without IPTG induction, it can still express a small quantity of prbA."** That is a reasonable explanation. It is not the same as a measurement. Replicate depth also differs by arm: the wild-type baseline used **three technical repeats per concentration**, and the growth curves carry **n = 3 independent replicates** with SD error bars, but the figure legends for the grids that fix both engineered MIC ranges show **one plate per paraben × IPTG combination.**',
            zh: '**這個 MIC 比較沒有建立起什麼，直說。**在定出 1000–1500 mg/L 範圍的第一輪方陣中，未誘導的 **0.0 mM IPTG** 培養盤在與誘導組相同的對羥基苯甲酸酯濃度下也長出菌落，而公開的範圍**沒有依誘導程度分開列出**——所以那些培養盤並不能把「prbA 有被表達」和「這些細胞是在對數期被塗盤的」分開。該隊知道這個機制，而且在別處說了出來：idt 構築**「被觀察到有基礎的最低表達，即使沒有 IPTG 誘導，仍能表達少量 prbA」**。這是一個合理的解釋，但它不等於一次量測。重複數也依組別而不同：野生型基準用的是**每個濃度三個技術重複**，生長曲線帶有 **n = 3 的獨立重複**與標準差誤差棒，但定出兩個改造菌株 MIC 範圍的那兩個方陣，其圖說顯示的是**每個「對羥基苯甲酸酯濃度×IPTG 濃度」組合只有一盤。**'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'k-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A short dry lane that earned one part and one set of fits', zh: '一條短短的乾式線，換來一個零件與一組擬合' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'HKSSC: five wet steps, five dry steps, two handoffs', zh: 'HKSSC：五個濕式步驟、五個乾式步驟、兩次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone. A third, softer handoff is not drawn: the AlphaFold model showed a long flexible N-terminal tail, which the team cites as support for adding pelB in cycle 2.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。還有第三個比較軟的交接沒有畫出來：AlphaFold 模型顯示一條長而柔軟的 N 端尾巴，該隊把它當作第二輪加入 pelB 的理由之一。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Model and Parts pages.', zh: '由我們依該隊 Engineering、Results、Model 與 Parts 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'k-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Order of operations, in their order', zh: '操作順序，照他們的順序' },
        body:
          h.phases([
            { h: { en: 'Clone prbA, and confirm the clone at both stops', zh: '選殖 prbA，並在兩站都確認選殖結果' },
              p: { en: '**prbA** is a 1602 bp coding sequence from *Enterobacter cloacae* encoding a **58 kDa** esterase; the team notes it needs no complex cofactors, which is why it is feasible in *E. coli* at all. The plasmid was grown in **DH5α** first, then moved to **BL21(DE3)** for expression.', zh: '**prbA** 是來自 *Enterobacter cloacae* 的 1602 bp 編碼序列，編碼一個 **58 kDa** 的酯酶；該隊指出它不需要複雜的輔因子，這正是它在 *E. coli* 中可行的原因。質體先養在 **DH5α**，再轉到 **BL21(DE3)** 做表達。' },
              items: [
                { en: 'Confirmed twice, by two different methods: **restriction digestion with KpnI and NdeI** against predicted bands of 5517 and 1404 bp in DH5α, then **colony PCR at 907 bp** in BL21(DE3), with the chosen colonies named — numbers 3 and 9, used for everything afterwards.', zh: '用兩種不同方法確認了兩次：在 DH5α 中以 **KpnI 與 NdeI 做限制酶切**，對照預測的 5517 與 1404 bp 條帶；再在 BL21(DE3) 中做 **907 bp 的菌落 PCR**，而被選中的菌落有編號——第 3 號與第 9 號，之後所有實驗都用它們。' },
                { en: '**The induction level was chosen on a growth curve, not from the manual.** IPTG at 0.0, 0.1, 0.5 and 1.0 mM over 24 h, **n = 3 independent replicates**: 1.0 mM finished lower than 0.5 mM, which they read as induction stress, so **0.5 mM** became the working concentration.', zh: '**誘導濃度是依生長曲線決定的，不是照說明書。**IPTG 取 0.0、0.1、0.5 與 1.0 mM，跑 24 小時，**n = 3 的獨立重複**：1.0 mM 最後比 0.5 mM 更低，他們把這讀作誘導壓力，於是 **0.5 mM** 成為後續的工作濃度。' },
                { en: 'Later cycles repeat the pattern: Gibson Assembly tried at **two vector : insert ratios**, with 2 : 1 giving more colonies and 1 : 1 dropped; an incomplete digest noticed on a gel and fixed by longer incubation and less DNA; non-specific faint bands in a negative control answered by re-running the PCR hotter.', zh: '後面的循環重複同樣的模式：Gibson 組裝試了**兩種載體與插入片段的比例**，2:1 給出較多菌落，1:1 被放棄；在膠片上看到切不完全，就以更長的反應時間與更少的 DNA 解決；陰性對照出現非專一的淡帶，就把 PCR 的溫度調高重跑。' }
              ],
              done: { en: 'A clone confirmed by two methods, a named colony, and an induction level that came from their own data.', zh: '一個以兩種方法確認的選殖株、一個有編號的菌落，以及一個來自他們自己數據的誘導濃度。' } },
            { h: { en: 'Build the CFU standard curves, before anything depends on them', zh: '先把 CFU 標準曲線做出來，在任何東西依賴它們之前' },
              p: { en: 'Separate plating runs at **OD₆₀₀ 0.1, 0.2, 0.5, 0.6 and 1.0**, each in triplicate rows, with a dH₂O-only negative plate in every run, and the selected dilutions **10⁻¹, 10⁻², 10⁻⁵, 10⁻⁶ and 10⁻⁸**.', zh: '在 **OD₆₀₀ 0.1、0.2、0.5、0.6 與 1.0** 分別做塗盤，每一個都以三列重複，每一輪都有一盤只加 dH₂O 的陰性盤，而被挑出的稀釋度是 **10⁻¹、10⁻²、10⁻⁵、10⁻⁶ 與 10⁻⁸**。' },
              items: [
                { en: 'Output: an **OD₆₀₀ against CFU/mL standard curve** for BL21(DE3), computed as colonies counted divided by volume plated times total dilution factor, with the 30–300 window enforced per OD standard.', zh: '產出：BL21(DE3) 的一條 **OD₆₀₀ 對 CFU/mL 標準曲線**，以「計得菌落數除以（塗盤體積×總稀釋倍數）」算出，而 30 至 300 的視窗是依每一個 OD 標準點分別執行的。' },
                { en: 'This is the step most teams do after the fact, if at all. Here it is **Setup 1**, and it has its own results section before paraben appears anywhere.', zh: '這一步是多數隊伍事後才做、甚至根本不做的。在這裡它是**設定 1**，而且在對羥基苯甲酸酯出現在任何地方之前就有自己的結果一節。' }
              ],
              done: { en: 'A curve that converts an OD reading into living cells, so a later activity figure can be per cell rather than per unit of turbidity.', zh: '一條把 OD 讀值換算成活細胞的曲線，讓之後的活性數字可以是「每個細胞」而不是「每單位混濁度」。' } },
            { h: { en: 'Measure what paraben does to the wild type, first', zh: '先量對羥基苯甲酸酯對野生型做了什麼' },
              p: { en: 'Methyl-paraben at **100, 200, 300 and 400 mg/L** against unmodified BL21(DE3), **three technical repeats per concentration**, 100 µl plated and spread, 37 °C overnight, read the next morning — plus a dH₂O negative and a paraben-free positive on every setup, and the whole thing repeated in **two OD windows** (above 0.05 but below 0.1, and above 0.1).', zh: '對未改造的 BL21(DE3) 施加 **100、200、300 與 400 mg/L** 的對羥基苯甲酸甲酯，**每個濃度三個技術重複**，塗 100 µl 並抹開，37 °C 隔夜，第二天早上判讀——每一組設定都另有一盤 dH₂O 陰性盤與一盤無對羥基苯甲酸酯的陽性盤，而整件事在**兩個 OD 區間**各做一次（高於 0.05 但低於 0.1，以及高於 0.1）。' },
              items: [
                { en: 'Result: colony density falls as concentration rises, colonies are still visible at 400 mg/L, and nothing grows from 500 to 2000 mg/L. **Baseline MIC 400–500 mg/L.**', zh: '結果：菌落密度隨濃度上升而下降，400 mg/L 時仍可見菌落，而 500 至 2000 mg/L 完全不長。**基準 MIC 為 400–500 mg/L。**' },
                { en: '**This number is doing more work than any other on the wiki.** It is the only reason 1000–1500 mg/L in cycle 1 means anything, and it is also what let the team diagnose cycle 2: when nothing grew at 1000 mg/L they reasoned that the engineered MIC **"would not fall beyond the minimum MIC of 400 mg/L"** and re-tested downwards instead of declaring a failure.', zh: '**這個數字承擔的工作比 wiki 上任何一個都多。**它是第一輪 1000–1500 mg/L 有意義的唯一理由，也是該隊能診斷第二輪的依據：當 1000 mg/L 什麼都沒長時，他們推論改造菌株的 MIC**「不會低於 400 mg/L 這個最小值」**，於是往下重測，而不是直接宣告失敗。' }
              ] },
            { h: { en: 'Compare, three times, and keep the worse number', zh: '比較三次，而且把較差的數字留下' },
              p: { en: 'Three DBTL cycles with three constructs: **prbA-idt** (cycle 1), **pelB-prbA(xsc)-pET22b+** (cycle 2) and **prbA(xscsc)-idt** (cycle 3). Each cycle\'s change is justified by the previous cycle\'s complaint, and the complaints are all about protein, not about MIC.', zh: '三個 DBTL 循環、三個構築：**prbA-idt**（第一輪）、**pelB-prbA(xsc)-pET22b+**（第二輪）與 **prbA(xscsc)-idt**（第三輪）。每一輪的改動都以上一輪的抱怨為理由，而那些抱怨全都是關於蛋白，不是關於 MIC。' },
              items: [
                { en: '**Expression was confirmed, and the confirmation is weak and said to be weak.** SDS-PAGE shows a band between 50 and 75 kDa matching the literature 58 kDa in all three cycles — but **"the bands are rather faint"**, in cycle 1 and still in cycle 2. Hypotheses are listed rather than chosen: degradation during a room-temperature gel run, low expression, or an unsuitable silver stain. The fix that followed was crushed ice around the gel tank.', zh: '**表達被確認了，而那個確認很弱，他們也說它弱。**三個循環的 SDS-PAGE 都顯示一條 50 至 75 kDa 之間、與文獻 58 kDa 相符的條帶——但**「那些條帶相當淡」**，第一輪如此，第二輪仍然如此。他們把假設列出來而不是挑一個：室溫跑膠時的蛋白降解、表達量低、或是選錯了銀染。隨後的處理是在膠槽周圍放碎冰。' },
                { en: '**Purified protein yield, as published:** IMAC gave **0.039, 0.038 and 0.038 mg/mL** from lysates of 4.502, 4.488 and 4.522 mg/mL. They call the expression level weak and treat that as the thing to fix, which is what drove cycles 2 and 3.', zh: '**公開的純化蛋白產量：**IMAC 從 4.502、4.488 與 4.522 mg/mL 的裂解液中得到 **0.039、0.038 與 0.038 mg/mL**。他們稱這個表達量弱，並把它當成要解決的問題，而這正是推動第二與第三輪的原因。' },
                { en: '**The liquid-culture growth curves add a control the plates cannot:** uninduced cells with 500 mg/L paraben hold the lowest OD₆₀₀ over time, which is how they confirm the action of paraben in liquid rather than only on agar. The 2000 mg/L culture then falls lowest after T48, read as lysis from combined chemical stress and metabolic overload. A T24 point is called an **outlier and attributed to OD spectrometer miscalibration**; in cycle 2 a culture was **spilled**, so one T48 reading is simply missing. Both are printed.', zh: '**液體培養的生長曲線補上了培養盤做不到的對照：**未誘導但加了 500 mg/L 對羥基苯甲酸酯的細胞，其 OD₆₀₀ 隨時間一直是最低的，他們就是這樣在液體中（而不是只在洋菜上）確認對羥基苯甲酸酯的作用。2000 mg/L 的培養物在 T48 之後跌到最低，被讀作化學壓力與代謝負荷合併造成的細胞裂解。一個 T24 的點被稱為**離群值，並歸因於 OD 分光儀的校正偏差**；第二輪則有一個培養物被**灑掉**，所以有一個 T48 讀值就是缺的。兩件事都印出來了。' }
              ] },
            { h: { en: 'Characterise the enzyme away from the plate', zh: '離開培養盤去表徵那個酵素' },
              p: { en: 'Two downstream assays, both recommended by a stakeholder: the **pNPA esterase assay** and **HPLC**. Professor Patrick Lee at CityU had told them that **demonstrating paraben loss is stronger evidence than showing translation**, and suggested both methods together with Monod kinetics. One of the two worked.', zh: '兩個下游試驗，兩個都是由利害關係人建議的：**pNPA 酯酶試驗**與 **HPLC**。城大的 Patrick Lee 教授曾告訴他們，**證明對羥基苯甲酸酯減少，比展示轉譯更有力**，並建議這兩種方法搭配 Monod 動力學一起用。兩者之中有一個成功了。' },
              items: [
                { en: '**pNPA, the one that worked.** Eight substrate concentrations × four enzyme conditions — recombinant prbA at 1 and 8 µg/mL against porcine liver esterase at 1 and 10 µg/mL — read at OD₄₀₅ every 5 minutes to 35 minutes, **triplicate measurements**. Michaelis–Menten fits give prbA at 1 µg/mL **Vmax 1.67 µM/min and Km 0.176 mM** against liver esterase **1.03 µM/min and 0.227 mM**.', zh: '**pNPA，成功的那一個。**八個底物濃度×四種酵素條件——重組 prbA 的 1 與 8 µg/mL，對照豬肝酯酶的 1 與 10 µg/mL——在 OD₄₀₅ 每 5 分鐘讀一次、讀到 35 分鐘，**三重複量測**。Michaelis–Menten 擬合給出 1 µg/mL 的 prbA 為 **Vmax 1.67 µM/min、Km 0.176 mM**，對照豬肝酯酶的 **1.03 µM/min 與 0.227 mM**。' },
                { en: '**They invented a metric because they could not compute the usual one, and said so.** kcat/Km needs the molar concentration of active protein, which they do not have — their enzyme is dosed by powder mass. So they define **Q = Vmax / (Cmass · Km)**, a mass-normalised catalytic capacity valid only at substrate well below Km, and state that limitation on the page. **prbA 1 µg/mL: Q = 9.518 L g⁻¹ min⁻¹; liver esterase 1 µg/mL: 4.545 — a factor of 2.094.**', zh: '**他們因為算不出常用的那個指標而自己定了一個，並且說了出來。**kcat/Km 需要活性蛋白的莫耳濃度，而他們沒有——他們的酵素是按粉末質量投的。於是他們定義 **Q = Vmax /（Cmass·Km）**，一個只在底物遠低於 Km 時才成立的質量標準化催化容量，並把這個限制寫在頁面上。**1 µg/mL 的 prbA：Q = 9.518 L g⁻¹ min⁻¹；1 µg/mL 的豬肝酯酶：4.545——倍數為 2.094。**' },
                { en: '**The statistics run the method\'s own diagnostic before trusting it.** Two-Way ANOVA across 4 enzyme conditions and 7 non-zero substrate concentrations is significant on all three effects (p = 3.01 × 10⁻¹⁷, 1.49 × 10⁻²⁹, 3.15 × 10⁻²⁰). Then a **Brown–Forsythe Levene test returns p = 0.01898** — variances are *not* equal, so the ANOVA assumption fails — and they respond with **Welch–Satterthwaite contrasts under Holm correction**, significant at 0.25 mM (p = 0.03452), 0.20 mM (0.04225) and 0.10 mM (0.00408). A High School team that published the test that undercut its own first test.', zh: '**統計分析在信任自己之前先跑了方法自己的診斷。**橫跨 4 種酵素條件與 7 個非零底物濃度的雙因子變異數分析，三個效應全部顯著（p = 3.01×10⁻¹⁷、1.49×10⁻²⁹、3.15×10⁻²⁰）。接著 **Brown–Forsythe Levene 檢定給出 p = 0.01898**——變異數*並不*相等，所以變異數分析的假設不成立——他們的回應是改用**帶 Holm 校正的 Welch–Satterthwaite 對比**，在 0.25 mM（p = 0.03452）、0.20 mM（0.04225）與 0.10 mM（0.00408）顯著。一支高中隊伍把削弱自己第一個檢定的那個檢定也公開了。' },
                { en: '**HPLC, the one that did not resolve.** Reverse-phase C18, water : methanol 50 : 50, 1 mL/min, 20 µl injection, UV 254 nm, sampled at T0, T1, T2 and T4 h because the literature says methyl-paraben degrades within 5 h. Only **two standards** were run — 500 and 1000 µg/mL — placing the paraben peak at **9 minutes**, and they state they could not run more standards with a wider range or smaller increments. In cycle 1 **there was no 9-minute peak at all, at any time point**, and they offer two hypotheses in print: either prbA degraded all of it before the sample reached CUHK for processing, or no paraben was added, through a pipetting error or a miscalculated working solution. **No concentration-versus-time curve is published for either cycle.**', zh: '**HPLC，沒有解出結果的那一個。**逆相 C18 管柱、水與甲醇 50:50、1 mL/min、注射 20 µl、紫外偵測 254 nm，在 T0、T1、T2 與 T4 小時取樣，因為文獻說對羥基苯甲酸甲酯會在 5 小時內被降解。只跑了**兩個標準品**——500 與 1000 µg/mL——把對羥基苯甲酸酯的峰定在**第 9 分鐘**，而他們說自己無法再跑更多範圍更寬、間距更小的標準品。第一輪**在任何時間點都完全沒有第 9 分鐘的峰**，他們在頁面上提出兩個假設：要嘛 prbA 在樣品送到中大處理之前就把它全部降解掉了，要嘛根本沒有加到對羥基苯甲酸酯——可能是移液失誤，也可能是工作液濃度算錯。**兩個循環都沒有公開任何濃度對時間的曲線。**' }
              ] }
          ])
      });

      /* ---------------- the part ---------------- */
      out += h.sec({
        id: 'k-part',
        kick: { en: 'Registry', zh: '零件登錄' },
        h2: { en: 'Best New Basic Part — and the one thing in this project that was genuinely not in the Registry', zh: '最佳新基礎零件——以及這個專案裡真正不曾出現在零件登錄中的那一樣東西' },
        lede: {
          en: '14 new parts: 12 basic, 2 composite, plus a collection. The wiki does not say which basic part the prize went to, so we will not guess — but two of the twelve have characterisation behind them, and only one of those is new to iGEM.',
          zh: '14 個新零件：12 個基礎、2 個組合，另加一個集合。這個 wiki 沒有說獎是給了哪一個基礎零件，所以我們不猜——但十二個之中有兩個背後有表徵，而其中只有一個對 iGEM 來說是新的。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Part', zh: '零件' }, w: '20%' },
              { t: { en: 'What it is', zh: '它是什麼' }, w: '26%' },
              { t: { en: 'What backs it, on their own pages', zh: '他們自己頁面上有什麼支撐' } }
            ],
            rows: [
              [{ en: '`BBa_26SZRX0Y`', zh: '`BBa_26SZRX0Y`' },
               { en: 'prbA coding sequence, 1602 bp, 58 kDa esterase from *Enterobacter cloacae*', zh: 'prbA 編碼序列，1602 bp，來自 *Enterobacter cloacae* 的 58 kDa 酯酶' },
               { en: 'The most-tested part of the project: cloned and confirmed in **DH5α, Top10 and BL21**, expressed with an SDS-PAGE band at the literature size, purified by IMAC, kinetically characterised by pNPA against a commercial esterase, and carried through the MIC comparison.', zh: '這個專案裡被測得最多的零件：在 **DH5α、Top10 與 BL21** 中完成選殖與確認，表達後在 SDS-PAGE 上有一條符合文獻大小的條帶，經 IMAC 純化，並以 pNPA 對照一個商用酯酶做動力學表徵，也貫穿了整個 MIC 比較。' }],
              [{ en: '`BBa_262HI0IB`', zh: '`BBa_262HI0IB`' },
               { en: 'Native promoter + RBS of prbA — the regulatory region from the gene\'s own host', zh: 'prbA 的原生啟動子加核糖體結合位——來自這個基因自己宿主的調控區' },
               { en: '**The one piece that was not in the Registry before.** Their Model page says plainly that "the native promoter has not been registered and characterized in iGEM before". Predicted by **BPROM** on 247 bp upstream — one promoter, LDF 5.30, −10 box TATAAT at position 163, −35 box TTGAAA at 142, 21 bp apart, TSS at 178 — then read out with GFPuv through the composite below, **confirmed active in BL21**. They also plated the team name and the year in GFP colonies.', zh: '**唯一一塊先前不在零件登錄裡的東西。**他們的 Model 頁直說：「這個原生啟動子此前未曾在 iGEM 中被登錄與表徵。」由 **BPROM** 分析上游 247 bp 預測而來——一個啟動子、LDF 5.30、−10 區 TATAAT 位於 163、−35 區 TTGAAA 位於 142、相距 21 bp、轉錄起點在 178——再透過下面那個組合零件以 GFPuv 讀出，**在 BL21 中確認有活性**。他們還用 GFP 菌落把隊名與年份排成圖案。' }],
              [{ en: '`BBa_26MSEOFB`', zh: '`BBa_26MSEOFB`' },
               { en: 'Composite: prbA native promoter + RBS fused to GFPuv, in the promoterless AF_lacZ pDest vector', zh: '組合零件：prbA 原生啟動子加核糖體結合位，接上 GFPuv，放在無啟動子的 AF_lacZ pDest 載體中' },
               { en: 'The promoter trap that makes the part above measurable rather than merely predicted. **And the limit is stated on the Model page: GFP is expressed in *E. coli* without paraben, "paraben inducibility was not observed, and quantitative GFP/OD₆₀₀ measurement is future work."** So the regulatory element works; the *inducible* half of the proposal does not yet exist.', zh: '這個啟動子陷阱讓上面那個零件變成可量測的，而不只是被預測的。**而且限制寫在 Model 頁上：GFP 在沒有對羥基苯甲酸酯的 *E. coli* 中就會表達，「並未觀察到對羥基苯甲酸酯誘導性，而 GFP/OD₆₀₀ 的定量量測屬於未來工作。」**所以這個調控元件是有作用的；但這個提議中「可誘導」的那一半還不存在。' }],
              [{ en: '`BBa_264E443U`, `BBa_26XQ4J7K`', zh: '`BBa_264E443U`、`BBa_26XQ4J7K`' },
               { en: 'prbA without its stop codon, and prbA without start and stop codons', zh: '去掉終止密碼子的 prbA，以及去掉起始與終止密碼子的 prbA' },
               { en: 'The cycle 2 and cycle 3 variants, each existing for one stated reason: expose the C-terminal His-tag for IMAC, then tag both termini. Confirmed in three strains — but the construct carrying the second one **never had its MIC measured** and its purification was not finished.', zh: '第二與第三輪的變體，各自存在都有一個明說的理由：讓 C 端 His 標籤能被完整表達以利 IMAC，然後是兩端都加標籤。三個菌株中都確認過——但帶著後者的那個構築**從未量過 MIC**，而且它的純化也沒有完成。' }],
              [{ en: '`BBa_26SU8KOK`', zh: '`BBa_26SU8KOK`' },
               { en: 'Composite: pelB signal peptide + prbA(xsc), to send the enzyme to the periplasm', zh: '組合零件：pelB 訊號肽加 prbA(xsc)，用來把酵素送進周質空間' },
               { en: 'Confirmed in BL21 — and it is the construct whose MIC came out **lower** than the untargeted cycle 1. Documented with that result attached, rather than without it.', zh: '在 BL21 中確認過——而它正是 MIC 比沒有做定位的第一輪**更低**的那個構築。它是帶著這個結果一起被記錄下來的，而不是把結果拿掉。' }],
              [{ en: 'Eight primer parts, and a collection', zh: '八個引子零件，以及一個集合' },
               { en: 'Colony PCR and Gibson assembly primers, plus collection `9f037d92` "PrbA\'s family"', zh: '菌落 PCR 與 Gibson 組裝的引子，另加集合 `9f037d92`「PrbA 家族」' },
               { en: 'Each carries its expected amplicon size — 907 bp and 504 bp — so a later team can tell a working reaction from a failed one. Three existing parts are also re-documented in Top10 and BL21: `BBa_K4290021` pelB, `BBa_J435300` AF_lacZ pDest, `BBa_M45116` GFPuv.', zh: '每一個都附上預期的擴增片段大小——907 bp 與 504 bp——讓後來的隊伍能分辨一次成功的反應與一次失敗的反應。另有三個既有零件在 Top10 與 BL21 中被重新記錄：`BBa_K4290021` pelB、`BBa_J435300` AF_lacZ pDest、`BBa_M45116` GFPuv。' }]
            ],
            min: 840,
            source: { en: 'Read from the team\'s Parts, Contribution, Results and Model pages. Part identifiers are spelled as the Parts table spells them.', zh: '讀自該隊 Parts、Contribution、Results 與 Model 頁。零件編號依 Parts 表的寫法。' }
          }) +
          h.note({
            en: '**Ours, labelled as ours:** if the prize was for the regulatory region, it is the right call. A paraben esterase CDS is a useful part, but the native promoter and RBS of that gene is **the only thing in this project that nobody could have taken off the shelf** — it had to be predicted, cloned upstream of a promoterless reporter, and read. That the reading came back "active, but not paraben-inducible" is a result, and publishing it that way is better than publishing a part described as inducible on the strength of a prediction.',
            zh: '**我們的看法，標示為我們的：**如果這個獎是給那個調控區的，那是對的判斷。一個對羥基苯甲酸酯酯酶的編碼序列是有用的零件，但那個基因自己的原生啟動子與核糖體結合位，是**這個專案裡唯一沒有人能從架上拿到的東西**——它必須先被預測、選殖到一個無啟動子的報告子上游，然後被讀出來。讀出來的答案是「有活性，但不受對羥基苯甲酸酯誘導」，這本身就是一個結果；而這樣公開，比憑一個預測就把零件寫成「可誘導」要好。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'k-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, from their own pages', zh: '從他們自己的頁面看，哪些還沒解決' },
        lede: {
          en: 'The design on this wiki is better than the result the design produced. Both of those sentences are supported by the pages, and the second one is not an insult.',
          zh: '這個 wiki 上的設計，比那個設計所產出的結果要好。這兩句話都有頁面支撐，而第二句並不是在貶損。'
        },
        body:
          h.ul([
            { en: '**No real food-waste matrix. Everything is LB.** Every MIC plate, every growth curve and every HPLC sample is laboratory broth. The Human Practices page says the team "tested our microbes in under different pH conditions" after the EPD told them food waste sits at pH 4–6 — but **no pH series appears on the Results, Engineering or Experiments pages**, so that claim has no data behind it on the wiki.', zh: '**沒有真實的廚餘基質。全部都是 LB。**每一盤 MIC、每一條生長曲線、每一個 HPLC 樣品都是實驗室培養液。Human Practices 頁說，在環保署告知廚餘的 pH 值在 4 至 6 之後，該隊「在不同 pH 條件下測試了我們的微生物」——但**Results、Engineering 與 Experiments 頁上都找不到任何 pH 梯度**，所以這個說法在 wiki 上沒有數據支撐。' },
            { en: '**One paraben species, out of a class.** Only **methyl-paraben** is ever used. Their own description page calls parabens "the most common preservative classes" and lists 4-hydroxybenzoic acid esters generally; ethyl, propyl and butyl parabens are never tested, and prbA\'s reported specificity across them is not examined.', zh: '**一整個類別裡只用了一種。**全程只用了**對羥基苯甲酸甲酯**。他們自己的專案描述頁把對羥基苯甲酸酯稱為「最常見的防腐劑類別」，並泛指 4-羥基苯甲酸的酯類；但乙酯、丙酯與丁酯從未被測試，prbA 對它們的專一性也沒有被檢視。' },
            { en: '**A faster digestion rate was never measured. It is inferred.** There is no anaerobic digestion experiment anywhere on the wiki: no digester, no biogas, no methanogen co-culture, no retention time. The chain from "a transgenic *E. coli* colony grew on a paraben plate" to "food waste recycling runs faster" is argued, not demonstrated, and the team\'s own framing of the proof of concept is about MIC rather than about rate.', zh: '**更快的消化速率從未被量過，是推論出來的。**整個 wiki 上沒有任何厭氧消化實驗：沒有消化槽、沒有沼氣、沒有與產甲烷菌的共培養、沒有停留時間。從「一個轉基因 *E. coli* 菌落在加了對羥基苯甲酸酯的培養盤上長起來」到「廚餘回收跑得更快」這條鏈是論證出來的，不是示範出來的；而該隊自己對概念驗證的說法，講的是 MIC，而不是速率。' },
            { en: '**The assay that would have measured paraben loss is the one that failed.** Professor Lee told them paraben loss is stronger evidence than translation; HPLC was the method for it; and HPLC produced two standards, a 9-minute retention time, a cycle 1 run with **no paraben peak at all** and two competing explanations for that — one of which is a pipetting error. **No degradation rate, no percentage removed, no curve.**', zh: '**本來能量出對羥基苯甲酸酯減少的那個試驗，正是失敗的那一個。**Lee 教授告訴他們，對羥基苯甲酸酯的減少比轉譯更有力；HPLC 就是為此而用的方法；而 HPLC 產出的是兩個標準品、一個 9 分鐘的滯留時間、一次**完全沒有對羥基苯甲酸酯峰**的第一輪，以及兩個互相競爭的解釋——其中一個是移液失誤。**沒有降解速率、沒有去除百分比、沒有曲線。**' },
            { en: '**Cycle 2 going backwards is unexplained, and the construct was not retested.** pelB stress plus an intracellular purification protocol is their hypothesis. It was never tested — cycle 3 removed both pelB and the stop codons at once, so even if cycle 3 had been measured it could not have told the two changes apart.', zh: '**第二輪為什麼退步，沒有被解釋，而那個構築也沒有被重測。**pelB 造成的壓力加上一套細胞內純化流程是他們的假設。這個假設從未被測試——第三輪一次就把 pelB 與那些終止密碼子都去掉了，所以即使第三輪真的被量過，也無法把這兩個改動分開。' },
            { en: '**Cycle 3 has no MIC and no completed purification.** The reason given is that the MIC "would theoretically be the same as in cycle 1", which is a prediction standing where a measurement would go, and the Learn section states that **"no conclusion was made for cycle 3\'s approach"** on dual 6×His IMAC.', zh: '**第三輪沒有 MIC，純化也沒有完成。**給出的理由是 MIC「理論上會與第一輪相同」，而這是一個預測站在量測本該站的位置上；Learn 一節也寫明，對於雙 6×His 的 IMAC，**「第三輪的做法沒有做出結論」**。' },
            { en: '**Paraben inducibility of the native promoter was not observed**, and the quantitative GFP/OD₆₀₀ measurement that would characterise its strength is listed as future work.', zh: '**原生啟動子的對羥基苯甲酸酯誘導性並未被觀察到**，而能表徵其強度的 GFP/OD₆₀₀ 定量量測被列為未來工作。' },
            { en: '**Every designed mutant is still a design.** N240 was selected for stability after A198 and P329 were ruled out, and docking says it is not in the binding region — but the team notes that **histidine ionises near pH 6, "meaning that it could even make things worse"**, and that ΔΔG should be computed to confirm. The efficiency mutants A221 and A140 reached a library design report and stopped there: **"due to limited time, we were unable to proceed with deeper analysis or characterize its efficiency or stability through wet lab experiments."**', zh: '**每一個被設計出來的突變體都還只是設計。**在排除 A198 與 P329 之後，N240 被選為穩定性的改造位點，而對接分析說它不在結合區內——但該隊指出，**組胺酸在 pH 6 附近會離子化，「意思是它甚至可能讓情況更糟」**，而且應該算 ΔΔG 來確認。效率突變體 A221 與 A140 走到了庫設計報告就停住了：**「由於時間有限，我們無法進行更深入的分析，也無法以濕式實驗表徵其效率或穩定性。」**' },
            { en: '**Containment is a drawing.** Professor Lee told them engineered microbes cannot legally be placed in bins in Hong Kong and must sit in a controlled environment with a kill switch. Their answer is two plans on the Safety page: a light-sensitive suicide switch assembled on paper from a pDawn backbone and a toxic CDS from two earlier teams, and a cell-free enzyme extract whose own limitation they state — production would not adapt to the pH, temperature or preservative level actually present.', zh: '**圍堵只是一張圖。**Lee 教授告訴他們，在香港把改造微生物放進回收箱是不合法的，必須放在有自殺開關的受控環境中。他們的回答是 Safety 頁上的兩個計畫：一個在紙上以 pDawn 骨架加上兩支先前隊伍的毒性編碼序列組裝起來的光敏自殺開關，以及一份無細胞酵素萃取物——而後者的限制他們自己寫了出來：產量無法隨實際存在的 pH 值、溫度或防腐劑濃度調整。' },
            { en: '**Replicate depth is uneven, and the thin arms are the headline ones.** Growth curves and pNPA readings carry n = 3; the wild-type baseline carries three technical repeats per concentration; the plate grids that fix both engineered MIC ranges show one plate per condition, and neither range was ever narrowed.', zh: '**重複數不均勻，而最薄的那幾組恰好是當頭條的那幾組。**生長曲線與 pNPA 讀值都是 n = 3；野生型基準是每個濃度三個技術重複；但定出兩個改造菌株 MIC 範圍的那些方陣，每個條件只有一盤，而且兩個範圍都從未被收窄。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'k-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from HKSSC', zh: '我們會從 HKSSC 抄什麼' },
        body:
          h.ul([
            { en: '**Choose the readout on its merits and publish the reason.** "CFU counts living, dividing cells; OD₆₀₀ can be skewed by precipitation or dead cell bodies" is two clauses, and it tells a reader exactly what the numbers can and cannot mean.', zh: '**依理由挑選讀值，並把理由公開。**「CFU 數的是活著、還在分裂的細胞；OD₆₀₀ 會被沉澱或死細胞殘體帶偏」只有兩個子句，卻直接告訴讀者那些數字能代表什麼、不能代表什麼。' },
            { en: '**Build the calibration curve before the experiment that depends on it**, and give it its own results section. "Without CFU calibration, conclusions may be misleading or incorrect" is a sentence more teams should have to write before they are allowed to plot anything.', zh: '**在依賴它的實驗之前就把校正曲線做好**，並給它自己獨立的結果一節。「沒有 CFU 校正，結論可能會誤導或不正確」這句話，應該是更多隊伍在被允許畫任何圖之前都得先寫一遍的。' },
            { en: '**Plate only the dilutions that can land inside the counting window, and name the failure mode at each end.** Above 300 colonies you undercount; below 30 a pipetting slip moves the answer. That is how you save plates without losing the result.', zh: '**只塗那些可能落在計數視窗裡的稀釋度，並把兩端的失效模式都說出來。**超過 300 顆會低估；少於 30 顆時，一次移液的手滑就會改變答案。這就是省下培養盤而不犧牲結果的方法。' },
            { en: '**Measure the baseline on the unmodified strain first.** 400–500 mg/L is what makes every other MIC on this wiki interpretable — and it is also what let them diagnose a dead plate instead of abandoning a cycle.', zh: '**先在未改造菌株上量基準。**400–500 mg/L 正是讓這個 wiki 上其他每一個 MIC 得以被解讀的東西——也正是它讓他們能診斷一盤長不出東西的培養盤，而不是放棄整個循環。' },
            { en: '**When the next cycle comes out worse, print both numbers.** Cycle 2 at 500–600 mg/L against cycle 1 at 1000–1500 mg/L, called "unexpected", with a stated suspicion. A team that hides that number has a cleaner page and a worse project.', zh: '**當下一輪的結果更差時，把兩個數字都印出來。**第二輪的 500–600 mg/L 對第一輪的 1000–1500 mg/L，被稱為「出乎預料」，並附上他們懷疑的原因。把那個數字藏起來的隊伍，會有一頁比較漂亮的 wiki 和一個比較差的專案。' },
            { en: '**Record an uncountable plate as uncountable.** "A lawn of bacteria" is an honest reading. A made-up number is not.', zh: '**數不清的培養盤就記成數不清。**「一片菌膜」是誠實的判讀，編一個數字出來不是。' },
            { en: '**Run the method\'s own diagnostic before trusting the method.** Brown–Forsythe returned p = 0.01898, the equal-variance assumption failed, and they switched to Welch–Satterthwaite with Holm rather than reporting the ANOVA alone. Most teams never look.', zh: '**在信任一個方法之前，先跑那個方法自己的診斷。**Brown–Forsythe 給出 p = 0.01898，等變異數的假設不成立，於是他們改用帶 Holm 校正的 Welch–Satterthwaite，而不是只報那個變異數分析。多數隊伍從來不去看。' },
            { en: '**Invent the metric you can actually compute, and say what it cannot do.** They could not get kcat/Km without molar protein, so they defined a mass-normalised Q and stated that it is only valid below Km. Honest and useful beats absolute and unavailable.', zh: '**定出你真的算得出來的那個指標，並說清楚它做不到什麼。**沒有莫耳蛋白濃度就得不到 kcat/Km，於是他們定義了一個質量標準化的 Q 值，並說明它只在底物低於 Km 時成立。誠實而可用，勝過絕對而拿不到。' },
            { en: '**Rule candidates out in public, with the reason.** A198 dropped because a mutation there needs a compensating mutation elsewhere; P329 dropped because the position has only one amino acid in the homologs. Two negative design decisions, both legible to the next team.', zh: '**公開地排除候選，並附上理由。**A198 被放棄，是因為在那裡做突變需要別處有一個補償性的突變；P329 被放棄，是因為在同源序列中那個位置只有一種胺基酸。兩個負面的設計決定，而且下一支隊伍都看得懂。' },
            { en: '**Say what the prediction did not show, next to the prediction.** "Paraben inducibility was not observed, and quantitative GFP/OD₆₀₀ measurement is future work" sits on the same page as the LDF 5.30 that would otherwise have carried the claim alone.', zh: '**把「這個預測沒有顯示什麼」寫在預測旁邊。**「並未觀察到對羥基苯甲酸酯誘導性，而 GFP/OD₆₀₀ 的定量量測屬於未來工作」和那個 LDF 5.30 寫在同一頁上——否則就只剩那個分數在獨自撐著主張。' },
            { en: '**Turn stakeholder advice into experiments rather than quotations.** HKU said to establish cytotoxicity by growing cells at different paraben concentrations; that advice *is* the three-arm MIC design. CityU said paraben loss beats translation; that advice *is* the HPLC attempt, including its failure.', zh: '**把利害關係人的建議變成實驗，而不是變成引文。**港大說，用不同對羥基苯甲酸酯濃度培養細胞來確立細胞毒性；那個建議*就是*那個三組設計的 MIC。城大說，對羥基苯甲酸酯的減少勝過轉譯；那個建議*就是*那次 HPLC 嘗試——連它的失敗也算。' }
          ]) +
          h.take({ en: 'Our verdict on this wiki', zh: '我們對這個 wiki 的判斷' }, {
            en: '**The design is the contribution here, and the page is better for admitting it.** The proof of concept is not closed: the engineered strain\'s advantage over wild type rests on plate grids with one plate per condition, the ranges were never narrowed, the one assay that could have shown paraben disappearing did not, cycle 2 went backwards, and no faster digestion was ever measured. What is closed is the **method around the claim** — a readout chosen on argument, a calibration curve built before it was needed, a baseline measured on the wild type, a counting window with named failure modes, a statistical test that undercut its own predecessor, and a worse second number printed anyway. We would rather read this than a wiki with tidier results and none of that.',
            zh: '**在這裡，設計就是貢獻，而這一頁因為承認了這點而更好。**概念驗證並沒有被關起來：改造菌株相對野生型的優勢，靠的是每個條件只有一盤的方陣，範圍從未被收窄，唯一能顯示對羥基苯甲酸酯消失的那個試驗沒有成功，第二輪往後退，而更快的消化速率從未被量過。真正被關起來的是**主張周圍的方法**——一個靠論證挑出來的讀值、一條在被需要之前就做好的校正曲線、一個在野生型上量出來的基準、一個兩端失效模式都被指名的計數視窗、一個削弱了自己前一個檢定的統計檢定，以及一個比較差卻還是被印出來的第二個數字。比起一個結果更漂亮、但這些全都沒有的 wiki，我們寧願讀這一個。'
          }) +
          h.note({
            en: 'Labelled as ours: the eleven items above, the verdict, and the judgement that calibrating a readout before using it is the single most transferable practice on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/hkssc](https://2026.igem.wiki/hkssc/).',
            zh: '標示為我們的看法：上面十一點、那個判斷，以及「在使用讀值之前先把它校正好，是這個 wiki 上最可轉移的單一做法」這個結論。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/hkssc](https://2026.igem.wiki/hkssc/)。'
          })
      });

      return out;
    }
  };
})(window);
