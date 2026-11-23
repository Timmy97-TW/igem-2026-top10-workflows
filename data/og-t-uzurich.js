/* UZurich — SeisMIC. Top 10 Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/uzurich/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Build assays that can see past native urease', zh: '做出能看穿原生尿素酶的試驗' },
        s: { en: 'S. pasteurii already makes urease, so the measurements had to separate the engineered effect', zh: 'S. pasteurii 本來就會做尿素酶，所以量測必須把工程效應分出來' }, tone: 'g' },
      { l: { en: 'Screen inducers by conductivity', zh: '用導電度篩誘導條件' },
        s: { en: 'Nine aTc levels, then aTc × IPTG for the dual-operon construct; relative change, not absolute', zh: '九個 aTc 濃度，再對雙操縱子構建體做 aTc×IPTG；用相對變化、不用絕對值' } },
      { l: { en: 'Run the Big Assay, with statistics', zh: '跑 Big Assay，並做統計' },
        s: { en: 'pH increase rose with induction; Spearman ρ = 0.72, p = 0.001, n = 18', zh: 'pH 上升隨誘導增加；Spearman ρ=0.72、p=0.001、n=18' } },
      { l: { en: 'Take it to a synchrotron', zh: '送去同步輻射' },
        s: { en: 'PXRD on two batches; S. pasteurii gave vaterite and calcite, engineered E. coli did not', zh: '兩批樣品做粉末 X 光繞射；S. pasteurii 給出球霰石與方解石，工程大腸桿菌沒有' } },
      { l: { en: 'Put it in soil, and run the bacteria-free control', zh: '放進土壤，並做無菌對照' },
        s: { en: 'CaCl₂-treated soil without bacteria precipitated as much as the treated columns', zh: '只加 CaCl₂、不加菌的土壤，沉澱量和處理過的管柱一樣多' }, tone: 'r' },
      { l: { en: 'Evolve the cold, with a control population', zh: '演化出耐冷，並設一個對照族群' },
        s: { en: 'G1 at decreasing temperature against G2 at constant 30 °C; lag 3.9 h vs 11.5 h vs WT 5.1 h', zh: 'G1 在遞降溫度下、G2 固定 30 °C；延遲期 3.9 小時對 11.5 小時，野生型 5.1 小時' } }
    ],
    dry: [
      { l: { en: 'Find where cohesion is needed', zh: '找出哪裡需要額外凝聚力' },
        s: { en: 'Infinite-slope Factor of Safety from rainfall, soil and terrain, including root reinforcement', zh: '以降雨、土壤與地形計算無限邊坡安全係數，並納入根系加固' } },
      { l: { en: 'Predict cementation in a column', zh: '預測管柱中的膠結' },
        s: { en: 'Michaelis-Menten reactive transport over 0.5 m; calcite in mol/L', zh: '以 Michaelis–Menten 反應輸送模擬 0.5 公尺；方解石以 mol/L 計' } },
      { l: { en: 'Map where treatment is feasible', zh: '繪出哪裡可行' },
        s: { en: 'Stone content, water storage, permeability, slope, then overlay with instability', zh: '石礫含量、保水力、透水性、坡度——再與不穩定度疊圖' } },
      { l: { en: 'Cost what a landslide does', zh: '算出一次山崩的代價' },
        s: { en: 'Expected annual damage across four scenarios, because no published figure existed', zh: '四種情境下的年期望損失，因為沒有現成的公開數字' }, tone: 't' }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the model names the cohesion the bacteria must supply', zh: '模型指定了細菌必須提供多少凝聚力' }, up: true },
      { w: 4, d: 1, l: { en: 'the column model is built on laboratory conditions', zh: '管柱模型建立在實驗室條件上' }, up: true }
    ]
  };

  PD.pages['og-uzurich'] = {
    label: { en: 'UZurich', zh: 'UZurich' },
    title: { en: 'UZurich — SeisMIC', zh: 'UZurich — SeisMIC' },
    render: function (h) {
      var t = team('uzurich');
      var out = h.teamhero(t, {
        h1: {
          en: 'They published the ==bacteria-free control that precipitated just as much==.',
          zh: '他們公開了那組==沉澱量一樣多的無菌對照==。'
        },
        lede: {
          en: 'Heavy rainfall destabilises shallow alpine soils, and slope failure threatens settlements, infrastructure and a rare alpine biodiversity. SeisMIC asks whether microbially induced calcite precipitation could help bind those soils. The framing is the project\'s defining feature, and it is a negative one: "Rather than assuming that MICP is ready for real-world deployment, we aim to understand where it might be useful, what would be required for it to work under alpine conditions, and what questions must be addressed before it could be considered." Every section then holds that line, including the soil experiment, whose own control broke the result.',
          zh: '強降雨會讓淺層高山土壤失穩，而坡面破壞威脅聚落、基礎設施，以及一片珍稀的高山生物多樣性。SeisMIC 問的是：微生物誘導方解石沉澱（MICP）能不能幫忙把那些土壤黏起來。這個框架就是整個專案的定義性特徵，而它是個否定式的框架：「我們不假設 MICP 已經可以實地部署，而是要理解它可能在哪裡有用、要在高山條件下運作需要什麼，以及在它能被認真考慮之前有哪些問題必須先被解決。」接下來每一節都守住這條線——包括那個土壤實驗，而它自己的對照把結果打掉了。'
        },
        chips: [
          { t: { en: 'MICP / biocementation', zh: 'MICP／生物膠結' }, k: 'b' },
          { t: { en: 'Directed evolution for cold', zh: '耐冷定向演化' }, k: 'v' },
          { t: { en: 'Synchrotron PXRD', zh: '同步輻射粉末 X 光繞射' }, k: 'g' },
          { t: { en: 'Four staged models', zh: '四個分階段模型' }, k: 't' },
          { t: { en: 'Per-team AI disclosure', zh: '分組的 AI 使用聲明' }, k: 'a' }
        ],
        stats: [
          { v: '90 %', l: { en: 'Of recorded Swiss shallow landslides failed at 1 m depth or less', zh: '瑞士有記錄的淺層山崩中，滑動面在 1 公尺以內的比例' } },
          { v: '~5 %', l: { en: 'Chemical efficiency one MICP field trial reported, from preferential flow', zh: '某次 MICP 野外試驗報告的化學效率，原因是優先流路' } },
          { v: 'ρ = 0.72', l: { en: 'Spearman correlation of expression level with pH increase, p = 0.001', zh: '表達量與 pH 上升的 Spearman 相關，p = 0.001' } },
          { v: '3.9 vs 11.5 h', l: { en: 'Median lag at 18 °C: cold-evolved G1 against the 30 °C control G2', zh: '18 °C 下的延遲期中位數：耐冷演化的 G1 對 30 °C 對照 G2' } },
          { v: '0.336–0.341', l: { en: 'µmax at 18 °C for G1, WT and G2, effectively identical', zh: 'G1、野生型與 G2 在 18 °C 的 µmax——基本上完全相同' } },
          { v: '4 scenarios', l: { en: 'Bare soil, roots, MICP, and roots + MICP, in the damage model', zh: '損失模型中的四種情境：裸土、根系、MICP、根系＋MICP' } }
        ]
      });

      out += h.toc([
        { id: 'z-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'z-scope', t: { en: 'How they narrowed it', zh: '他們怎麼縮小範圍' } },
        { id: 'z-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'z-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'z-evo', t: { en: 'Directed evolution', zh: '定向演化' } },
        { id: 'z-dry', t: { en: 'Four models', zh: '四個模型' } },
        { id: 'z-hp', t: { en: 'Protect, refuse or relocate', zh: '防護、拒絕或遷村' } },
        { id: 'z-ai', t: { en: 'AI use', zh: 'AI 使用' } },
        { id: 'z-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'z-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Calcite bridges between soil grains', zh: '土壤顆粒之間的方解石橋' },
        lede: {
          en: 'A slope stays stable while the forces holding the soil in place resist gravity. During heavy rainfall water infiltrates, pore-water pressure rises, friction between particles falls, and the slope becomes less stable.',
          zh: '只要把土壤固定住的力還能抵抗重力，坡面就保持穩定。強降雨時水入滲、孔隙水壓上升、顆粒之間的摩擦下降，坡面就變得比較不穩定。'
        },
        body:
          h.p({
            en: '**MICP** uses urease-producing bacteria such as *Sporosarcina pasteurii* to hydrolyse urea into ammonium and carbonate; carbonate with calcium forms **calcite crystals that grow between neighbouring soil particles, creating bridges that increase cohesion.** MICP has been investigated beyond small samples: metre-long soil columns, and treatments involving roughly 100 m³ of sand. Its suitability for alpine slopes still needs investigating.',
            zh: '**MICP** 利用會產尿素酶的細菌（例如 *Sporosarcina pasteurii*）把尿素水解成銨與碳酸根；碳酸根與鈣結合形成**在相鄰土壤顆粒之間生長的方解石晶體，形成提高凝聚力的橋。**MICP 已經在小樣品以外被研究過——公尺級的土柱，以及約 100 立方公尺砂土的處理——不過它是否適用於高山坡面仍有待研究。'
          }) +
          h.take({ en: 'They state on the first page that they are not assuming MICP is ready', zh: '他們在第一頁就寫明：自己並不假設 MICP 已經可以用' }, {
            en: 'From the first page: *"Rather than assuming that MICP is ready for real-world deployment, we aim to understand where it might be useful, what would be required for it to work under alpine conditions, and what biological, practical, and environmental questions must be addressed before it could be considered as a potential approach to slope stabilisation."* Every section that follows holds that line, including the ones that report their own negative controls.',
            zh: '從第一頁開始就是：*「我們不假設 MICP 已經可以實地部署，而是要理解它可能在哪裡有用、要在高山條件下運作需要什麼，以及在它能被當成一個潛在坡面穩定方法認真考慮之前，有哪些生物、實務與環境問題必須先被解決。」*接下來每一節都守住這條線，包括那些報告了自家陰性對照的章節。'
          }) +
          h.p({
            en: 'The lineage is acknowledged too: the idea came via **AshesiGhana 2020**, which investigated biocementation for coastal erosion using the urease pathway associated with *S. pasteurii*. Rather than protecting a coastline from erosion, UZurich asked whether the same biology could bind shallow alpine soils. And the motivation includes a figure that is not theirs to claim: **cement manufacture accounts for roughly 7 % of global CO₂ emissions**, much of it from the calcination of limestone rather than from firing the kilns, with the caveat that their project "would not directly address the whole carbon footprint of cement".',
            zh: '他們也承認了來源：這個想法是透過 **AshesiGhana 2020** 來的，那支隊伍研究的是用與 *S. pasteurii* 相關的尿素酶路徑做生物膠結以對付海岸侵蝕。UZurich 問的不是「保護海岸線免於侵蝕」，而是同樣的生物學能不能把淺層高山土壤黏起來。而動機中包含一個不屬於他們的數字：**水泥製造約占全球二氧化碳排放的 7%**，其中很大一部分來自石灰石的鈣化、而不是來自燒窯——並附上警語，說他們的專案「不會直接解決水泥的整體碳足跡」。'
          })
      });

      /* ---------------- scope ---------------- */
      out += h.sec({
        id: 'z-scope',
        kick: { en: 'Scope', zh: '範圍' },
        h2: { en: 'A physical limit set the scope, and a field statistic justified it', zh: '一個物理限制決定了範圍，而一個野外統計為它辯護' },
        body:
          h.p({
            en: 'They began thinking about the landslides that had made the news (Brienz, Bondo, Blatten, Schwanden) and then reasoned their way out of them: **MICP relies on infiltration and can only treat the soil the solution reaches, so it cannot be assumed to stabilise deep-seated failures in bedrock.** So the target became **shallow landslides**, defined in Swiss practice as a sliding surface no more than 2 m below the ground.',
            zh: '他們一開始想的是那些上了新聞的山崩——Brienz、Bondo、Blatten、Schwanden——然後靠推理把自己帶離那些案例：**MICP 依賴入滲，只能處理溶液到得了的土壤，所以不能假設它能穩定基岩中的深層破壞。**於是目標變成**淺層山崩**，在瑞士實務上定義為滑動面在地表以下不超過 2 公尺。'
          }) +
          h.take({ en: 'And the restricted target is still the common case', zh: '而這個被縮限的目標仍然是最常見的情況' }, {
            en: 'Swiss field inventories indicate that **90 % of recorded shallow landslides failed at a depth of 1 m or less**, making the upper soil layers a more relevant starting point. A narrowing that would read as a retreat without that number, and reads as a focus with it.',
            zh: '瑞士的野外清冊顯示，**有記錄的淺層山崩中有 90% 的滑動面深度在 1 公尺以內**，這讓上層土壤成為更相關的起點。沒有那個數字，這個縮限會讀起來像撤退；有了它，就讀起來像聚焦。'
          }) +
          h.h3({ en: 'Three engineering targets, each derived from a condition', zh: '三個工程目標，各自由一個條件推導出來' }) +
          h.cards([
            { chips: [{ t: { en: '1 · cold', zh: '1 · 冷' }, k: 'b' }],
              h: { en: 'The organism is characterised in the wrong place', zh: '這個生物是在錯的地方被特性化的' },
              p: { en: '*S. pasteurii* is typically characterised well above alpine soil temperatures, and alpine soils are also **nutrient-poor and mildly acidic**. "If the organism cannot remain metabolically active under these conditions, the rest of the process becomes difficult to achieve."', zh: '*S. pasteurii* 通常是在遠高於高山土壤溫度的條件下被特性化的，而高山土壤同時也**貧養且微酸**。「如果這個生物在這些條件下無法維持代謝活性，流程其餘部分就很難實現。」' } },
            { chips: [{ t: { en: '2 · where', zh: '2 · 在哪沉澱' }, k: 'v' }],
              h: { en: 'Clogging the entrance is the recurring MICP failure', zh: '把入口堵住，是 MICP 反覆出現的失敗' },
              p: { en: 'Calcite can form rapidly near the injection point, **clogging flow paths before the solution reaches the rest of the soil.** One field trial reported **chemical efficiency of about 5 %**, attributed to preferential flow paths. So the goal became **when precipitation begins**, not how much calcite forms.', zh: '方解石可能在注入點附近迅速形成，**在溶液抵達其餘土壤之前就把流路堵住。**某次野外試驗報告的**化學效率只有約 5%**，原因歸於優先流路。所以目標變成**沉澱何時開始**，而不是形成多少方解石。' } },
            { chips: [{ t: { en: '3 · pathway', zh: '3 · 路徑' }, k: 'r' }],
              h: { en: 'They kept the pathway with the environmental cost', zh: '他們保留了那個有環境代價的路徑' },
              p: { en: 'Ureolytic MICP produces **ammonium**. They evaluated enzyme-induced carbonate precipitation and the carbonic anhydrase route, then **kept urease anyway**, with the reasons given: it is better characterised, field studies report substantial shear-strength gains, and changing both the pathway and its regulation at once would split their effort. Then: **"The nitrogen load remains a constraint we need to address, not a problem we have solved."**', zh: '尿素分解型 MICP 會產生**銨**。他們評估過酵素誘導碳酸鹽沉澱與碳酸酐酶路徑，然後**還是保留尿素酶**，並給出理由：它被特性化得更完整、野外研究報告剪力強度有顯著提升，而同時改變路徑與其調控會分散他們的力氣。接著是：**「氮負荷仍然是一個我們需要處理的限制，不是一個我們已經解決的問題。」**' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'z-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The model names the number the bacteria must deliver', zh: '模型指定了細菌必須交出的那個數字' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SeisMIC: from landslide risk to a cohesion target to a bacterium', zh: 'SeisMIC：從山崩風險到凝聚力目標，再到一株細菌' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Results, Measurement and Model pages.', zh: '由我們依該隊 Description、Results、Measurement、Model 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'z-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Two hosts, three assays, and a control that ended a claim', zh: '兩個宿主、三個試驗，以及一個終結了某個主張的對照' },
        body:
          h.phases([
            { h: { en: 'Two hosts, and plasmids chosen to buy iterations', zh: '兩個宿主，以及為了換取迭代次數而選的質體' },
              p: { en: '*S. pasteurii* is the relevant organism but its genetic engineering tools are less established, so **E. coli was used to test designs more quickly while constructs were moved into *S. pasteurii* from early on.**', zh: '*S. pasteurii* 是相關的那個生物，但它的基因工程工具比較不成熟，所以**他們用大腸桿菌來較快地測試設計，同時從早期就開始把構建體移進 *S. pasteurii*。**' },
              items: [
                { en: 'And a second deliberate trade: **replicating plasmids rather than integrating constructs into the genome, "saving time and allowing more Design–Build–Test–Learn cycles."** A design decision whose currency is iterations.', zh: '還有第二個刻意的取捨：**用複製型質體，而不是把構建體整合進基因體，「節省時間並允許更多 Design–Build–Test–Learn 循環」。**一個以「迭代次數」為貨幣的設計決定。' },
                { en: 'The results page then opens by qualifying itself: results came from *E. coli*, **which is neither a soil organism nor a strong MICP producer**, with wild-type *S. pasteurii* as the control, and "these differences should be considered when interpreting the results".', zh: '而結果頁一開頭就先替自己加上限定：這些結果來自大腸桿菌，**而它既不是土壤生物、也不是強的 MICP 產生者**，並以野生型 *S. pasteurii* 作為對照——「在判讀這些結果時應該把這些差異考慮進去」。' }
              ] },
            { h: { en: 'Assay development as a first-class problem', zh: '把試驗開發當成一等問題' },
              p: { en: 'Because *S. pasteurii* already produces urease natively, the measurements had to **separate the engineered effect from the native one**. So building assays became part of the project rather than a preliminary step.', zh: '因為 *S. pasteurii* 本來就會產生尿素酶，所以量測必須**把工程造成的效應與原生的效應分開**——於是建立試驗本身成了專案的一部分，而不是前置步驟。' },
              items: [
                { en: '**Conductivity as a screening tool:** nine aTc concentrations from 0.3 to 160 ng/mL measured over 100 intervals in an hour, repeated, and reported as **relative conductivity change (%) because absolute values were not directly comparable.** Three concentrations (0.3, 20 and 50 ng/mL) carried forward.', zh: '**用導電度作為篩選工具：**九個 aTc 濃度，從 0.3 到 160 ng/mL，在一小時內以 100 個區間量測，並重複一次——而且是以**相對導電度變化（%）報告，因為絕對值無法直接比較。**三個濃度（0.3、20、50 ng/mL）被帶到下一步。' },
                { en: 'For the dual-operon construct p2Cuzh03E, **four aTc × four IPTG concentrations**, aTc driving the main urease operon and IPTG the accessory proteins, run as **a proof of concept for the combined induction system.** The strongest response came at **100 ng/mL aTc with no IPTG**, read as higher main-operon induction reducing the need for accessory protein.', zh: '對雙操縱子構建體 p2Cuzh03E，做了**四個 aTc 濃度 × 四個 IPTG 濃度**——aTc 驅動主要的尿素酶操縱子、IPTG 驅動輔助蛋白——作為**這套組合誘導系統的概念驗證。**最強的反應出現在 **100 ng/mL aTc 且不加 IPTG**，被判讀為「主操縱子誘導較強時，就比較不需要輔助蛋白」。' },
                { en: 'And then the limit, in the same section: *"conductivity changes alone cannot exactly determine the enzyme activity, as background effects and differences in starting biomass may influence the results."*', zh: '接著是同一節裡的限制：*「單靠導電度變化無法精確判定酵素活性，因為背景效應與起始菌體量的差異都可能影響結果。」*' }
              ],
              done: { en: 'A screening tool that is used as a screening tool, with its own ceiling written down.', zh: '一個被當成篩選工具使用的篩選工具，而它自己的上限被寫下來。' } },
            { h: { en: 'The "Big Assay", with statistics done properly', zh: '「Big Assay」，而統計做得正確' },
              p: { en: 'Growth and pH over about 57.5 h, three runs: p2Auzh01E (urease), p2Cuzh03E (urease), then p2Iuzh07E and p2Juzh08E (carbonic anhydrase).', zh: '約 57.5 小時的生長與 pH，共三輪：p2Auzh01E（尿素酶）、p2Cuzh03E（尿素酶），接著是 p2Iuzh07E 與 p2Juzh08E（碳酸酐酶）。' },
              items: [
                { en: 'Mean pH increase went **−0.84 (no inducer) → +0.98 (low) → +1.32 (mid) → +1.48 (high)**, with the *S. pasteurii* control at **+1.03**. So the engineered strain at high induction exceeded the wild-type urease producer.', zh: '平均 pH 上升依序為 **−0.84（無誘導劑）→+0.98（低）→+1.32（中）→+1.48（高）**，而 *S. pasteurii* 對照是 **+1.03**——所以高誘導下的工程菌株超過了野生型尿素酶產生者。' },
                { en: 'Spearman **ρ = 0.72, p = 0.001, n = 18** confirmed a strong positive monotonic relationship between expression level and pH increase, and a Kruskal–Wallis test found an overall difference between the four levels (**H = 10.18, p = 0.017**).', zh: 'Spearman **ρ = 0.72、p = 0.001、n = 18** 確認了表達量與 pH 上升之間有強的正單調關係，而 Kruskal–Wallis 檢定發現四個等級之間有整體差異（**H = 10.18、p = 0.017**）。' },
                { en: 'And then the honest sentence: **"Pairwise comparisons of each group against zero did not reach significance after Holm correction (adjusted p = 0.143 for all). This reflects the small sample size and not a lack of effect."** A correction applied, and its consequence stated rather than quietly dropped.', zh: '接著是那句誠實的話：**「各組與零組的兩兩比較在 Holm 校正後都沒有達到顯著（校正後 p 全為 0.143）。這反映的是樣本數太小，而不是效應不存在。」**校正被套用，而它的後果被說出來，而不是悄悄被丟掉。' },
                { en: 'The zero-inducer cultures **slightly acidified**, which is what metabolism without ammonia production should do. A negative control behaving as predicted rather than merely flat.', zh: '無誘導劑的培養物**略微酸化**，而那正是「有代謝但不產生氨」應該發生的事——一個按預測行為、而不只是「持平」的陰性對照。' },
                { en: '**An exclusion declared with a sensitivity analysis.** Vials 19 and 20 (zero inducer) were excluded for contamination because both rose more than 1.4 pH units without induction. And **including them still gives a significant trend, but a weaker one (ρ = 0.48, p = 0.032, n = 20).** Both numbers are published.', zh: '**一次附帶敏感度分析的排除。**19 號與 20 號瓶（無誘導劑）因污染而被排除，因為兩者在沒有誘導的情況下 pH 都上升超過 1.4 單位——而**把它們算進去仍然有顯著趨勢，只是較弱（ρ = 0.48、p = 0.032、n = 20）。**兩組數字都被公開。' }
              ] }
          ]) +
          h.h3({ en: 'Crystals: a synchrotron, and the control that broke the claim', zh: '晶體：一台同步輻射，以及打掉主張的那個對照' }) +
          h.p({
            en: 'Synchrotron **powder X-ray diffraction** on two batches, with the batches\' differences **tabulated**: 2 vs 3 days incubation; oven at 220 °C overnight vs Steris irradiation; 0.48452 Å (≈ 25.6 keV) vs 0.56334 Å (≈ 22.0 keV). The consequence is stated too: higher-energy X-rays interact less with sample and detector, so **absolute intensities cannot be compared between batches.** The angle shift was handled by converting to the scattering vector Q. Phases were matched against the ICDD database, fractions assigned by a beamline expert, and **reported as fractions of crystalline content only, with amorphous material excluded from the percentages.**',
            zh: '兩批樣品送同步輻射做**粉末 X 光繞射**，而兩批之間的差異被**列成表格**——培養 2 天對 3 天；220 °C 烘箱過夜對 Steris 輻照滅菌；0.48452 Å（約 25.6 keV）對 0.56334 Å（約 22.0 keV）——而後果被寫出來：能量較高的 X 光與樣品和偵測器的交互作用較弱，所以**兩批之間的絕對強度不能互相比較。**角度位移則靠換算成散射向量 Q 處理。相位對照 ICDD 資料庫比對，各相比例由光束線專家指定，而且**只以結晶成分的比例報告，非晶質物質被排除在百分比之外。**'
          }) +
          h.ul([
            { en: '*S. pasteurii* precipitated crystalline CaCO₃ in both batches: batch 1 approximately **98 % vaterite and 2 % calcite**; batch 2 **20–39 % calcite**, the remainder vaterite.', zh: '*S. pasteurii* 在兩批中都沉澱出結晶的碳酸鈣：第一批約為**98% 球霰石、2% 方解石**；第二批為 **20–39% 方解石**，其餘為球霰石。' },
            { en: '**And they refuse to explain the shift**, because batch 2 differed in *both* incubation time and sterilisation method: *"With the current data, it is not possible to tell which factor, or combination of factors, caused the shift in calcium carbonate composition. Testing each condition separately would be needed."*', zh: '**而他們拒絕解釋這個變化**，因為第二批在培養時間*與*滅菌方式上都不同：*「以現有數據，無法判斷是哪個因子、或哪些因子的組合造成了碳酸鈣組成的變化。需要分別測試每個條件才能回答。」*' },
            { en: 'Contamination was diagnosed rather than ignored: an *E. coli* no-inducer sample showing vaterite is attributed to **cross-contamination while loading the sample holders**; **samples loaded last were amorphous**; weak NaCl and KCl signals were traced most plausibly to the glass vials used for sterilisation; **four samples held a crystalline phase matching nothing in the catalogue**; and in batch 2 an unidentified phase had a unit cell large enough that **"the phase is probably a protein crystal."**', zh: '污染被診斷而不是被忽略：一個無誘導劑的大腸桿菌樣品出現球霰石，被歸因於**裝樣品座時的交叉污染**；**最後裝入的樣品都是非晶質**；微弱的 NaCl 與 KCl 訊號最可能來自滅菌時使用的玻璃瓶；**四個樣品含有一個在目錄中比不到的結晶相**；而第二批中有一個未鑑定的相，其晶胞大到**「那個相很可能是蛋白晶體」。**' },
            { en: 'Their recommendation to themselves: prepare samples **in a clean environment free of crystalline contaminants**, "which would make it possible to attribute any remaining reflections to the samples themselves."', zh: '他們給自己的建議是：**在不含結晶污染物的乾淨環境中**製備樣品，「這樣才可能把剩下的繞射峰歸因於樣品本身」。' }
          ]) +
          h.warn({
            en: '**The soil experiment\'s negative control is the project\'s hardest result.** In soil, the **CaCl₂-treated soil *without bacteria* showed vaterite and calcite comparable to the treated columns, i.e. abiotic precipitation**. That means the soil columns cannot demonstrate biological cementation. Published in the conclusion, in one sentence, unhedged. And beside it: **"the calcium depletion, XRF, gravimetry and stability measurements failed for identified reasons."** Instruments attempted and reported across the measurement section: PXRD, calcium depletion, stability measurements, microCT, XAS, XRF, SEM and carbon mass gravimetry.',
            zh: '**那個土壤實驗的陰性對照，是整個專案最難堪的結果。**在土壤中，**只加 CaCl₂、*不加菌*的土壤，其球霰石與方解石含量與處理過的管柱相當——也就是非生物性沉澱**——這意味著那些土柱無法證明生物性膠結。它被寫在結論裡，一句話，沒有任何緩和修飾。而旁邊是：**「鈣耗竭、XRF、重量分析與穩定性量測因已確認的原因而失敗。」**量測章節中嘗試並報告過的儀器：粉末 X 光繞射、鈣耗竭、穩定性量測、微電腦斷層、X 光吸收光譜、X 光螢光、掃描電顯，以及碳質量重量分析。'
          })
      });

      /* ---------------- directed evolution ---------------- */
      out += h.sec({
        id: 'z-evo',
        kick: { en: 'Directed evolution', zh: '定向演化' },
        h2: { en: 'Their clearest positive result, and the control that makes it one', zh: '他們最明確的正面結果，以及讓它成立的那個對照' },
        lede: {
          en: 'Two populations evolved in parallel: G1 under decreasing temperature, adapted to 17 °C, and G2 at a constant 30 °C as a media-adaptation control.',
          zh: '兩個族群平行演化：G1 在遞降溫度下、最終適應到 17 °C，而 G2 固定在 30 °C 作為「對培養基適應」的對照。'
        },
        body:
          h.take({ en: 'G2 separates "better in the cold" from "better in this medium"', zh: 'G2 把「在冷的時候長得比較好」和「變得擅長在這個培養基裡長」分開' }, {
            en: 'Without a population evolved at constant temperature in the same medium, "grew better in the cold" cannot be separated from "got better at growing in this medium". **G2 is what lets the cold claim be attributed to the cold regime rather than to repeated passaging**, and it is also what produced the anomaly in the curves below.',
            zh: '如果沒有一個「在同樣培養基中、但固定溫度下演化」的族群，「在冷的時候長得比較好」就無法和「變得比較擅長在這個培養基裡生長」分開。**G2 正是讓「耐冷」這個主張能被歸因於低溫處理、而不是歸因於反覆轉接的東西**——而它同時也產生了下面那些曲線裡的異常。'
          }) +
          h.p({
            en: 'The five strongest-performing strains from each group were taken forward, with wild-type *S. pasteurii* as a positive control and a medium blank for background. Final growth curves were measured at 30 °C and **18 °C: "although the strains had been adapted to 17 °C, we still performed the experiment at 18 °C because the Tecan Spark Multimode Plate Reader equipped with a cooling add-on could not operate below 18 °C."** An instrument limit, declared.',
            zh: '每一組取表現最好的五株往下做，並以野生型 *S. pasteurii* 作為陽性對照、以不接菌的培養基作為背景空白。最終生長曲線在 30 °C 與 **18 °C 下量測——「雖然這些菌株是適應到 17 °C 的，我們還是在 18 °C 做這個實驗，因為裝了冷卻模組的 Tecan Spark 多模式讀盤機無法在 18 °C 以下運作。」**一個被明說的儀器限制。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'LAG PHASE', zh: '延遲期' },
            title: { en: 'Median lag phase at 18 °C: the plot the team calls the most informative', zh: '18 °C 下的延遲期中位數——該隊自己稱之為最有資訊量的那張圖' },
            sub: { en: 'G1 was evolved under decreasing temperature; G2 at a constant 30 °C in the same medium; WT is the unevolved wild type.', zh: 'G1 在遞降溫度下演化；G2 在同樣培養基中固定 30 °C；WT 是未經演化的野生型。' },
            data: [
              { label: { en: 'G1 (cold-evolved)', zh: 'G1——耐冷演化' }, v: 3.9, note: { en: 'shorter than wild type as well as than the control population', zh: '比野生型、也比對照族群更短' } },
              { label: { en: 'WT (wild type)', zh: 'WT——野生型' }, v: 5.1, note: { en: 'the baseline the cold-evolved population beat', zh: '耐冷演化族群所超越的基準' } },
              { label: { en: 'G2 (30 °C control)', zh: 'G2——30 °C 對照' }, v: 11.5, note: { en: 'markedly prolonged when transferred to 18 °C', zh: '轉到 18 °C 時延遲期明顯拉長' } }
            ],
            opts: { unit: { en: 'h', zh: '小時' }, dec: 1, xlabel: { en: 'median lag phase at 18 °C, hours', zh: '18 °C 下的延遲期中位數，小時' } },
            caption: { en: 'Read from the team\'s Results page. At 30 °C the medians were G1 2.2 h, G2 3.45 h and WT 1.8 h.', zh: '讀自該隊 Results 頁。在 30 °C 下，中位數為 G1 2.2 小時、G2 3.45 小時、WT 1.8 小時。' }
          }) +
          h.ul([
            { en: '**And the mechanism is read out of which parameter moved.** µmax at 18 °C was **0.336 h⁻¹ for G1, 0.338 for WT and 0.341 for G2, effectively identical.** So the conclusion is precise: **cold adaptation shortened the time required to initiate growth rather than the rate of cell division.** "Once active growth begins, the populations appear capable of growing at broadly similar maximum rates."', zh: '**而機制是從「哪個參數動了」讀出來的。**18 °C 下的 µmax 為 **G1 0.336 h⁻¹、WT 0.338、G2 0.341——基本上完全相同。**所以結論很精確：**耐冷適應縮短的是「開始生長所需的時間」，而不是「細胞分裂的速率」。**「一旦進入旺盛生長，這些族群的最大生長速率看起來大致相同。」' },
            { en: '**An unexpected result they flag rather than skip:** at 30 °C, **G2 had a longer median lag (3.45 h) than wild type (1.8 h)**. The control population was *worse* at the temperature it was evolved at. "This is unexpected for populations evolved under these conditions, because a clear improvement in growth at 30 °C might have been anticipated."', zh: '**一個他們主動標出、而不是跳過的意外結果：**在 30 °C 下，**G2 的延遲期中位數（3.45 小時）比野生型（1.8 小時）更長**——也就是說，那個對照族群在它所演化的溫度下反而*更差*。「對在這些條件下演化的族群來說，這是意料之外的，因為原本可能預期在 30 °C 的生長會有明顯改善。」' },
            { en: '**The trade-off check.** An evolved strain is useless if it stopped precipitating, so equal volumes of inoculum and 1 M CaCl₂ were added to WT, G1 and G2. **Clear precipitation in all samples, so MICP function was retained.** Qualitative, and labelled qualitative.', zh: '**那個取捨檢查。**一株演化後的菌如果不再沉澱就沒有用，所以他們把等體積的菌液與 1 M CaCl₂ 加到 WT、G1 與 G2 中——**所有樣品都出現明顯沉澱，所以 MICP 功能被保留了。**這是定性的，而且被標為定性。' },
            { en: '**Whole-genome sequencing is announced, not claimed.** Four replicates per group plus WT, with the comparison logic laid out in advance: **G2 against WT isolates cultivation effects; G1 against both isolates cold effects**. And the honest scheduling note: **"These data will be collected after the WikiFreeze and presented in time for the Jamboree."**', zh: '**全基因體定序是被宣告的，不是被主張的。**每組四個重複加上野生型，而比較邏輯事先就被攤開——**G2 對野生型用來分離培養條件的效應；G1 對兩者用來分離低溫的效應**——以及那段誠實的進度說明：**「這些數據會在 WikiFreeze 之後收集，並在 Jamboree 之前及時呈現。」**' }
          ]) +
          h.note({
            en: 'Their own project conclusion, written in the same register as everything else: **urease activity proved tunable at a construct level** (p2Auzh01E rose with induction to match or exceed the *S. pasteurii* control; p2Cuzh03E showed no such dependence, "consistent with either leaky expression or a plateaued pH response"); **linking enzyme activity to mineral yield proved hard** (*S. pasteurii* reliably precipitated, engineered *E. coli* did not, and the soil control precipitated abiotically); the **Wilbur–Anderson assay yielded too few usable data points to quantify the carbonic anhydrase constructs**; and **directed evolution gave their clearest positive result.**',
            zh: '他們自己的專案結論，語氣與其他部分一致：**尿素酶活性在構建體層級證明是可調的**（p2Auzh01E 隨誘導上升，達到或超過 *S. pasteurii* 對照；p2Cuzh03E 沒有這種依賴性，「這與漏表達或 pH 反應已達平台期都相符」）；**要把酵素活性連到礦物產量很難**（*S. pasteurii* 可靠地沉澱、工程大腸桿菌沒有，而土壤對照是非生物性沉澱）；**Wilbur–Anderson 試驗可用的數據點太少，無法定量那些碳酸酐酶構建體**；而**定向演化給出了他們最明確的正面結果。**'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'z-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Four models staged from risk to cost', zh: '四個模型，從風險一路分階段推到成本' },
        body:
          h.flow({
            title: { en: 'Warning → action → prevention, and what each stage hands over', zh: '警示→行動→預防，以及每個階段交出什麼' },
            sub: { en: 'The dashboard prototype joins only the first and third of these. The other two remain separate, and monitoring does not exist yet, stated by them.', zh: '儀表板原型只把其中第一個與第三個接起來。另外兩個仍然各自獨立，而監測功能目前還不存在——這是他們自己說的。' },
            stages: [
              { label: { en: 'Slope stability', zh: '坡面穩定' }, sub: { en: 'Infinite-slope Factor of Safety, including root reinforcement', zh: '無限邊坡安全係數，並納入根系加固' }, tone: 'b',
                items: [
                  { en: 'historical rainfall and landslide data across Switzerland', zh: '全瑞士的歷史降雨與山崩資料' },
                  { en: 'output: the additional cohesion the bacteria would have to supply', zh: '輸出：細菌必須額外提供多少凝聚力' }
                ] },
              { label: { en: 'Reactive transport', zh: '反應輸送' }, sub: { en: 'A published Michaelis–Menten model adapted to a 0.5 m vertical column', zh: '把一個已發表的 Michaelis–Menten 模型改用在 0.5 公尺垂直土柱上' }, tone: 'v',
                items: [
                  { en: 'calcite precipitation in mol/L; temperature, concentrations and soil conditions are user inputs', zh: '方解石沉澱以 mol/L 計；溫度、濃度與土壤條件由使用者輸入' },
                  { en: 'caveat: built on laboratory column conditions, so whole slopes need further validation', zh: '警語：建立在實驗室土柱條件上，所以推到整個坡面需要進一步驗證' }
                ] },
              { label: { en: 'MICP feasibility', zh: 'MICP 可行性' }, sub: { en: 'Stone content, water storage capacity, permeability and slope, nationwide', zh: '全國尺度的石礫含量、保水力、透水性與坡度' }, tone: 'g',
                items: [{ en: 'overlaid with instability, so the shortlist is areas that are both unstable *and* treatable', zh: '與不穩定度疊圖，讓候選名單是「既不穩定*又*可處理」的區域' }] },
              { label: { en: 'Economic', zh: '經濟' }, sub: { en: 'Expected annual damage from modelled runout areas', zh: '由模擬的崩落範圍推算年期望損失' }, tone: 't',
                items: [
                  { en: 'roads, buildings, railways, forest and agricultural land', zh: '道路、建物、鐵路、森林與農地' },
                  { en: 'four scenarios: bare soil, root cohesion, MICP, and roots + MICP', zh: '四種情境：裸土、根系凝聚力、MICP、根系＋MICP' }
                ] }
            ],
            caption: { en: 'Drawn by us from the team\'s Model overview and the individual model pages.', zh: '由我們依該隊 Model 總覽與各模型頁繪製。' }
          }) +
          h.take({ en: 'The economic model exists because a number did not', zh: '那個經濟模型之所以存在，是因為某個數字不存在' }, {
            en: 'Through Human Practices they recognised the importance of understanding what shallow landslides cost. And **"since we could not find a published figure isolating their specific damage costs, we developed an Economic Model."** A model built to fill a gap in the literature rather than to decorate a project, and its four scenarios let the value of MICP be read against the value of roots that are already there.',
            zh: '透過社會實踐工作，他們意識到理解淺層山崩的代價很重要——而**「由於我們找不到任何一個把它們的損失成本單獨分離出來的已發表數字，我們自己做了一個經濟模型。」**一個為了填補文獻缺口、而不是為了裝飾專案而建的模型；而它的四種情境，讓 MICP 的價值可以對照「本來就在那裡的根系」的價值來讀。'
          }) +
          h.p({
            en: 'The slope stability model\'s output is the part that makes the whole project one project rather than two: for potentially unstable locations, **it estimates the additional cohesion required to bring the slope back to stability**, "giving our biological work a more concrete target." A number handed from the dry lab to the bench, and also the honest measure of how far the bench got.',
            zh: '坡面穩定模型的輸出，正是讓整個專案成為「一個專案」而不是「兩個專案」的那一塊：對於可能不穩定的位置，**它估算出要把坡面帶回穩定所需的額外凝聚力**，「讓我們的生物學工作有一個更具體的目標」。一個由乾式實驗交給實驗檯的數字——而它同時也誠實地量出了實驗檯走到了哪裡。'
          })
      });

      /* ---------------- human practices ---------------- */
      out += h.sec({
        id: 'z-hp',
        kick: { en: 'Human practices', zh: '社會實踐' },
        h2: { en: 'Protect, refuse or relocate: the choice belongs to residents', zh: '防護、拒絕或遷村——選擇權屬於居民' },
        lede: {
          en: 'They could investigate bacterial growth, model slope stability and estimate where MICP might be feasible. None of that could tell them whether the approach made sense for the people and places it was meant to protect.',
          zh: '他們可以研究細菌生長、建模坡面穩定、估算 MICP 在哪裡可行。但那些都無法告訴他們：這個做法對它想保護的那些人與地方來說，是否合理。'
        },
        body:
          h.p({
            en: 'Conversations with researchers, specialists, industry representatives and insurers shaped engineering targets, measurement strategies and modelling methods. Residents living below alpine slopes **emphasised the value of the surrounding nature, which is why nitrogen depletion and the ammonium load were investigated more closely.** And discussions about deployment — how treatment could reach steep terrain, how it would fit alongside existing protection measures, who would bear the costs — fed the entrepreneurship work.',
            zh: '與研究者、專業人士、產業代表與保險業者的對話，形塑了他們的工程目標、量測策略與建模方法。住在高山坡面下方的居民**強調周遭自然的價值，而這就是為什麼氮耗竭與銨負荷被更仔細地研究。**而關於部署的討論——處理方式如何抵達陡坡、它要如何與既有的防護措施並存、由誰負擔成本——則餵養了他們的創業工作。'
          }) +
          h.warn({
            en: '**And the finding that reframes the whole project.** Conversations with **two local families challenged the assumption that residents would automatically welcome their intervention.** The consequences of a landslide extend beyond damaged buildings, and protecting a settlement is not always as straightforward as preventing the mountain from changing. **"Relocation may sometimes be worth considering, and any intervention must take seriously the wishes of the people who would live with its consequences."** The figure caption on that section reads: *Protect, refuse or relocate: the choice belongs to residents.*',
            zh: '**而這是重新框定整個專案的那個發現。**與**兩戶當地家庭的對話，挑戰了「居民會自動歡迎他們的干預」這個假設。**一次山崩的後果不只是受損的建物，而保護一個聚落也不總是像「阻止這座山改變」那麼直截了當。**「有時候遷村是值得考慮的，而任何干預都必須認真對待那些要與其後果共同生活的人的意願。」**那一節的圖說寫的是：*防護、拒絕或遷村：選擇權屬於居民。*'
          }) +
          h.p({
            en: 'These conversations also shaped how they communicate: rather than simply promoting a biological solution, they set out to explain how it works, what it might offer, and **what remains uncertain, including its environmental trade-offs**, so their educational work "aims to build understanding, not just support." Their own summary: **"Human Practices did not give us a simple answer about whether MICP should be used. It helped us understand what a responsible application would need to consider... Those insights shaped what we investigated, what we claim, and where we recognise the limits of our approach."**',
            zh: '這些對話也形塑了他們的溝通方式：他們不只是推銷一個生物解方，而是設法解釋它如何運作、它可能提供什麼，以及**還有哪些是不確定的，包括它的環境取捨**——所以他們的教育工作「目標是建立理解，而不只是取得支持」。他們自己的總結是：**「社會實踐工作沒有給我們一個『MICP 該不該被使用』的簡單答案。它幫助我們理解一個負責任的應用需要考慮什麼……那些洞見形塑了我們研究什麼、我們主張什麼，以及我們在哪裡承認自己做法的極限。」**'
          })
      });

      /* ---------------- AI ---------------- */
      out += h.sec({
        id: 'z-ai',
        kick: { en: 'Disclosure', zh: '聲明' },
        h2: { en: 'AI use, disclosed per sub-team, with the failure modes named', zh: 'AI 使用：依分組分別聲明，並指名失敗模式' },
        lede: {
          en: 'A dedicated page, opening: "AI is a tool. The choice about how it gets deployed and used is ours."',
          zh: '一個專門的頁面，開頭寫著：「AI 是一個工具。至於它怎麼被部署與使用，選擇是我們的。」'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Sub-team', zh: '分組' }, w: '16%' },
              { t: { en: 'What it was used for', zh: '用在什麼地方' } },
              { t: { en: 'How outputs were reviewed', zh: '輸出如何被審查' } }
            ],
            rows: [
              [{ en: '**Wet lab**', zh: '**濕式實驗**' },
               { en: 'Claude and ChatGPT (GPT-6 Astra for complex reasoning, smaller models for routine queries): data interpretation, data analysis, code generation, reviewing and interpreting literature, spelling and grammar. **And the development and refinement of new assay protocols and the planning and optimisation of experimental procedures.**', zh: 'Claude 與 ChatGPT（複雜推理用 GPT-6 Astra、日常查詢用較小的模型）：資料判讀、資料分析、程式生成、文獻閱讀與判讀、拼字與文法——**以及新試驗流程的開發與改良，還有實驗程序的規劃與最佳化。**' },
               { en: 'Checked against literature and, where applicable, bioinformatics analyses and experimental evidence. With the epistemics spelled out: **"Comparisons between AI Models can help identify disagreements, although agreement alone does not establish that a prediction is correct."** AI suggestions were treated as **"inputs to scientific evaluation rather than as experimental evidence"**, and reliability is flagged as lower when data are limited or a tool is used outside its validation domain.', zh: '對照文獻檢查，必要時也對照生物資訊分析與實驗證據。而知識論上的立場被寫明：**「不同 AI 模型之間的比較可以幫助找出分歧，但光是意見一致並不能確立某個預測是正確的。」**AI 的建議被當成**「科學評估的輸入，而不是實驗證據」**；而當資料有限、或工具被用在其驗證範圍之外時，可靠性被標為較低。' }],
              [{ en: '**Dry lab**', zh: '**乾式實驗**' },
               { en: 'Claude Pro, using Claude Opus 5.5 for complex reasoning and development, smaller Claude models for routine tasks, ChatGPT as a secondary reference: initial Python scripts for data processing and calibration workflows, **code reviews and bug finding ("it helped us identify logic errors and inefficiencies that we had initially overlooked")**, documentation, and conceptual visual assets.', zh: 'Claude Pro，複雜推理與開發用 Claude Opus 5.5、日常任務用較小的 Claude 模型，ChatGPT 作為次要參考：資料處理與校正流程的初始 Python 腳本、**程式審查與找 bug（「它幫我們找出一開始忽略掉的邏輯錯誤與效率問題」）**、文件撰寫，以及概念性的視覺素材。' },
               { en: 'Logic, implementation and unnecessary complexity checked; **"when calculations were involved, we independently verified that the results matched our exact equations."** And a candid criticism of the tool: **"This was necessary, as the outputs were overly over-complicated and added unnecessary boiler code."**', zh: '檢查邏輯、實作方式與是否有不必要的複雜度；**「涉及計算時，我們獨立驗證結果是否與我們的確切方程式相符。」**還有一句對工具的直言批評：**「這是必要的，因為那些輸出過度複雜，而且加了不必要的樣板程式。」**' }],
              [{ en: '**Human practices**', zh: '**社會實踐**' },
               { en: 'ChatGPT for writing, editing, translating into English, proofreading, clarity and feedback on structure; NotebookLM for literature research; Google Gemini for scientific illustrations.', zh: 'ChatGPT 用於撰寫、編輯、翻譯成英文、校對、提升清晰度與結構回饋；NotebookLM 用於文獻研究；Google Gemini 用於科學插圖。' },
               { en: 'Generated figures are **captioned as generated**. The MICP treatment illustrations, for example, are credited "Generated with OpenAI ChatGPT image generation, based on the scientific concepts and visual direction provided by the UZurich iGEM 2026 team."', zh: '生成的圖都**在圖說中標明是生成的**——例如 MICP 處理示意圖的說明是「以 OpenAI ChatGPT 影像生成製作，依據 UZurich iGEM 2026 團隊提供的科學概念與視覺方向」。' }]
            ],
            min: 820,
            source: { en: 'Read from the team\'s AI Use page.', zh: '讀自該隊 AI Use 頁。' }
          }) +
          h.note({
            en: 'The line we would put in any AI-use section: **"Comparisons between AI Models can help identify disagreements, although agreement alone does not establish that a prediction is correct."** Two models agreeing is not evidence, and almost no other 2026 wiki says so.',
            zh: '我們會放進任何 AI 使用章節的那一句：**「不同 AI 模型之間的比較可以幫助找出分歧，但光是意見一致並不能確立某個預測是正確的。」**兩個模型一致並不是證據，而 2026 年幾乎沒有別的 wiki 把這件事說出來。'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'z-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from UZurich', zh: '我們會從 UZurich 抄什麼' },
        body:
          h.ul([
            { en: '**Let a physical limit set the scope, then justify the narrowing with a field statistic.** MICP needs infiltration → shallow failures only → and 90 % of recorded Swiss shallow landslides are at ≤1 m, so the restricted target is still the common case.', zh: '**讓物理限制決定範圍，然後用野外統計為這個縮限辯護。**MICP 需要入滲→只能做淺層破壞→而瑞士有記錄的淺層山崩有 90% 在 1 公尺以內，所以被縮限的目標仍然是最常見的情況。' },
            { en: '**Evolve a second population as the control.** G2 at constant 30 °C is the entire reason "cold-adapted" means something instead of "passaged".', zh: '**演化出第二個族群作為對照。**G2 固定在 30 °C，正是「耐冷適應」之所以有意義、而不只是「被轉接過」的全部原因。' },
            { en: '**Check the trade-off the improvement might cost.** An evolved strain that no longer precipitates would be worthless, so they tested it, and labelled the test qualitative.', zh: '**檢查那個改善可能付出的代價。**一株演化後不再沉澱的菌就毫無價值，所以他們去測了——而且把那個測試標為定性。' },
            { en: '**Read the mechanism out of which parameter moved.** Lag phase changed, µmax did not. So the claim is "starts sooner", not "grows faster". That is a stronger and smaller claim at once.', zh: '**從「哪個參數動了」讀出機制。**延遲期變了、µmax 沒變——所以主張是「開始得更早」，而不是「長得更快」。那同時是一個更強也更小的主張。' },
            { en: '**Publish the abiotic control that kills your own soil result.** One sentence in the conclusion, unhedged, is worth more than a page of discussion that avoids it.', zh: '**公開那個殺掉你自己土壤結果的非生物對照。**結論裡一句沒有緩和修飾的話，比一整頁迴避它的討論更有價值。' },
            { en: '**Declare exclusions and show the analysis with them included.** Vials 19 and 20 out gives ρ = 0.72; in gives ρ = 0.48; both are printed.', zh: '**聲明你排除了什麼，並把「把它們算進去」的分析也呈現出來。**排除 19 與 20 號瓶得到 ρ = 0.72；算進去得到 ρ = 0.48；兩者都印出來。' },
            { en: '**Report a correction and its consequence**, rather than quoting the uncorrected p. "Adjusted p = 0.143 for all. This reflects the small sample size and not a lack of effect."', zh: '**報告你做了校正，以及校正的後果**，而不是引用未校正的 p 值。「校正後 p 全為 0.143。這反映的是樣本數太小，而不是效應不存在。」' },
            { en: '**Tabulate what differed between batches, then refuse to explain a difference you confounded.** Two variables changed at once, so the shift is not attributable, and they say so.', zh: '**把批次之間的差異列成表，然後拒絕解釋一個你自己混淆掉的差異。**兩個變數同時改變了，所以那個變化無法歸因，而他們把這點說出來。' },
            { en: '**Report fractions on the basis you actually measured.** Crystalline-only phase fractions with amorphous material excluded, said out loud, because a reader would otherwise assume the percentages cover everything.', zh: '**依你實際量到的基礎來報告比例。**只計結晶相、排除非晶質，而且明說出來，否則讀者會以為那些百分比涵蓋了全部。' },
            { en: '**Keep the constraint inside the sentence.** "The nitrogen load remains a constraint we need to address, not a problem we have solved."', zh: '**把限制留在句子裡面。**「氮負荷仍然是一個我們需要處理的限制，不是一個我們已經解決的問題。」' },
            { en: '**Let human practices reach the conclusion, not the framing.** "Protect, refuse or relocate" is a finding against the project\'s own premise, and it is on the page.', zh: '**讓社會實踐工作得出結論，而不只是提供框架。**「防護、拒絕或遷村」是一個與專案自身前提相左的發現，而它就寫在頁面上。' },
            { en: '**Disclose AI use per sub-team, with its failure modes**, including that model agreement is not evidence, and that the generated code was over-complicated and had to be cut back.', zh: '**依分組分別聲明 AI 使用，並附上失敗模式**——包括「模型意見一致不是證據」，以及「生成的程式過度複雜、必須被刪減」。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that publishing the abiotic soil control is the single most costly and most valuable editorial decision on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/uzurich](https://2026.igem.wiki/uzurich/).',
            zh: '標示為我們的看法：上面十二點，以及「公開那個非生物性的土壤對照，是這個 wiki 上代價最高、也最有價值的一個編輯決定」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/uzurich](https://2026.igem.wiki/uzurich/)。'
          })
      });

      return out;
    }
  };
})(window);
