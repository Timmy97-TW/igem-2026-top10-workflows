/* HongKong-JSS — MerMAID. High School 1st Runner-up and Best Village Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/hongkong-jss/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Start two recognition routes, stop one', zh: '同時開兩條辨識路線，停掉一條' },
        s: { en: 'MerR–pMer and a proposed RNA switch, same chassis and same reporter; the RNA route ends with an untested assumption named', zh: 'MerR–pMer 與一個提議中的 RNA 開關，同底盤、同報告子；RNA 那條路線以「指名一個未經測試的假設」收場' }, tone: 'r' },
      { l: { en: 'Find the mercury range before judging the construct', zh: '先找出汞的範圍，再評判構築體' },
        s: { en: '0, 0.01, 1, 5, 10 µM and then 15 µM; growth at 5 µM, none at 15 µM, so 5 µM becomes the working ceiling', zh: '0、0.01、1、5、10 µM，接著 15 µM；5 µM 下仍能生長、15 µM 下不能，於是 5 µM 成為工作上限' }, tone: 'g' },
      { l: { en: 'Suspect the culture line, not the result', zh: '先懷疑培養物的來歷，而不是結果' },
        s: { en: 'One parent culture split five ways still differed, and two uninduced subcultures went strongly red; re-transform, screen fresh colonies, keep glycerol stocks', zh: '同一母培養物分成五份後仍有差異，而兩份未誘導的次培養物變成強紅色；於是重新轉形、篩選新菌落、保留甘油菌種' } },
      { l: { en: 'Redesign, then choose Design 429', zh: '重新設計，然後選定 Design 429' },
        s: { en: 'p429 drives merR, with the merR coding sequence and the pMer operator revised; 429 beats 23106-32 and 23106-34 on both response and growth', zh: 'p429 驅動 merR，並修訂 merR 編碼序列與 pMer 操作子；429 在反應與生長兩方面都勝過 23106-32 與 23106-34' } },
      { l: { en: 'Five matched runs, three readouts', zh: '五組配對實驗、三種讀值' },
        s: { en: '0.005–5 µM at four hours; pellet colour, pellet fluorescence and culture fluorescence taken from the same cultures', zh: '0.005–5 µM、第四小時；菌體沉澱顏色、菌體沉澱螢光與培養液螢光，全部取自同一批培養物' } },
      { l: { en: 'Push past the tube, and say what each test cannot show', zh: '走出試管，並說清楚每個測試不能證明什麼' },
        s: { en: 'Pb, Zn and Cd at 1 µM; extracts from soil the team spiked itself; alginate beads scored by eye', zh: '1 µM 的 Pb、Zn、Cd；由該隊自己加入汞的土壤萃取液；以肉眼評分的海藻酸鈣珠' } }
    ],
    dry: [
      { l: { en: 'Build the instrument instead of buying it', zh: '把儀器做出來，而不是買下來' },
        s: { en: 'A 3D-printed box, BP570 excitation and BP610 emission, one phone at locked settings, ImageJ against an in-image reference', zh: '3D 列印的暗箱、BP570 激發與 BP610 發射濾片、一支鎖定設定的手機，並在 ImageJ 中對影像內的參考區作比值' }, tone: 't' },
      { l: { en: 'Audit the camera, not only the cells', zh: '稽核相機，而不只是稽核細胞' },
        s: { en: 'Reference intensity ranges published; sample fluorescence moves 4.86–10.47× while the reference moves −15.47 to +14.74 %', zh: '公布參考區強度的範圍：樣品螢光變動 4.86–10.47 倍，而參考區只變動 −15.47 到 +14.74%' }, tone: 'a' },
      { l: { en: 'Fit a calibration, hold out two whole runs', zh: '擬合一條校正線，並整整保留兩組實驗不用' },
        s: { en: 'Log-linear signal against log₁₀ concentration, 20 calibration points from four runs, error reported in µM on 10 held-out points', zh: '訊號對 log₁₀ 濃度的對數線性模型，校正用 20 個測值（四組實驗），並在 10 個保留測值上以 µM 為單位報告誤差' } },
      { l: { en: 'Model the chemistry the hardware depends on', zh: '把硬體所依賴的化學先算過一遍' },
        s: { en: 'PHREEQC speciation for L-cysteine extraction, UV-AOP kinetics, nine OpenFOAM channel cases, and a chloride-to-reporter route model', zh: 'L-cysteine 萃取的 PHREEQC 物種分布、UV-AOP 動力學、九個 OpenFOAM 流道案例，以及一個「氯錯合物到報告子」的路線模型' } }
    ],
    links: [
      { w: 4, d: 2, l: { en: 'the calibration is fitted on these same five runs', zh: '那條校正線就是用這五組實驗擬合出來的' } },
      { w: 4, d: 0, l: { en: 'every fluorescence number came out of that box', zh: '每一個螢光數字都是從那個暗箱裡出來的' }, up: true }
    ]
  };

  PD.pages['hs-jss'] = {
    label: { en: 'HongKong-JSS', zh: 'HongKong-JSS' },
    title: { en: 'HongKong-JSS — MerMAID', zh: 'HongKong-JSS — MerMAID' },
    render: function (h) {
      var t = team('jss');
      var out = h.teamhero(t, {
        h1: {
          en: 'Measure three readouts on the same cultures, publish the one that wins and the two measures where it loses — and put ==1 ppb is the lowest concentration tested, not a validated detection limit== on the results page itself.',
          zh: '在同一批培養物上量三種讀值，公布贏的那一個，也公布它輸掉的那兩個指標——並把==1 ppb 是測過的最低濃度，不是已驗證的偵測極限==這句話直接寫進結果頁裡。'
        },
        lede: {
          en: 'Thirteen prototypes designed and built; two responded to mercury; **Design 429** is the one that was characterised. MerMAID is an *E. coli* biosensor — MerR and the mercury-responsive pMer promoter–operator driving mRFP1e — together with a phone imaging box and a spectrometer reader built to read it. Mercury is one of ten chemicals the World Health Organization names as a major public-health concern, and the exposure route this team went after is the water and soil upstream of the food rather than the fish on the plate: in Guizhou, Zhang and colleagues found rice rather than fish was the principal methylmercury pathway, and local production supplied about 2 % of the fresh vegetables eaten in Hong Kong in 2024. What makes this the most carefully reported High School dataset we read is not the sensor. It is that the limitation sits inside the claim: the detection threshold was calculated and evaluated on the same five runs, so the page calls 1 ppb the lowest concentration tested rather than a limit of detection.',
          zh: '設計並做出十三個原型；兩個對汞有反應；被完整特性化的是 **Design 429**。MerMAID 是一個 *E. coli* 生物感測器——MerR 與受汞調控的 pMer 啟動子／操作子驅動 mRFP1e——再加上一個手機成像暗箱與一台為它而造的光譜儀讀取器。汞是世界衛生組織列為重大公共衛生關注的十類化學物之一，而這支隊伍追的暴露路徑是食物上游的水與土，而不是餐盤上的魚：在貴州，Zhang 等人發現主要的甲基汞暴露途徑是稻米而不是魚；2024 年香港本地生產只供應了當地食用新鮮蔬菜的約 2%。讓這份資料成為我們讀過最謹慎的高中部資料集的，不是那個感測器，而是「限制就寫在主張裡面」：偵測門檻是用同樣那五組實驗算出來、也在同樣那五組實驗上評估的，所以頁面把 1 ppb 稱為測過的最低濃度，而不是偵測極限。'
        },
        chips: [
          { t: { en: 'MerR · pMer · mRFP1e', zh: 'MerR · pMer · mRFP1e' }, k: 'b' },
          { t: { en: 'Design 429 of thirteen', zh: '十三個原型中的 Design 429' }, k: 'v' },
          { t: { en: 'Five matched runs', zh: '五組配對實驗' }, k: 'g' },
          { t: { en: 'Phone camera, locked settings', zh: '手機相機、鎖定設定' }, k: 't' },
          { t: { en: 'C12880 reader, about USD 350', zh: 'C12880 讀取器，約 350 美元' }, k: 'a' },
          { t: { en: 'Pb, Zn and Cd tested at 1 µM', zh: '在 1 µM 下測過 Pb、Zn、Cd' }, k: 'r' }
        ],
        stats: [
          { v: '7.95×', l: { en: 'Pellet fluorescence fold response at 5 µM, against 3.26× colour and 1.61× culture', zh: '5 µM 下菌體沉澱螢光的倍數反應，對顏色 3.26 倍、培養液 1.61 倍' } },
          { v: 'ρ = 1.00', l: { en: 'Spearman correlation between the two pellet readouts, ranking ten concentrations identically', zh: '兩種菌體沉澱讀值之間的 Spearman 相關；十個濃度的排序完全相同' } },
          { v: '51 / 51', l: { en: 'Assessed mercury treatments that exceeded their matching control in both pellet formats', zh: '在兩種菌體沉澱格式中都高過配對對照的受測汞處理數' } },
          { v: '5 / 5', l: { en: 'Runs in which both pellet readouts rose above control at about 1 ppb', zh: '在約 1 ppb 下兩種菌體沉澱讀值都高過對照的實驗組數' } },
          { v: '6.5 %', l: { en: 'Largest non-target response relative to matched mercury, pellet fluorescence (colour: 32.0 %)', zh: '相對於配對汞反應的最大非標的反應，菌體沉澱螢光（顏色為 32.0%）' } },
          { v: '0.0319 µM', l: { en: 'Concentration RMSE for pellet fluorescence on two held-out runs (colour: 0.0483 µM)', zh: '在兩組保留實驗上，菌體沉澱螢光的濃度均方根誤差（顏色為 0.0483 µM）' } }
        ]
      });

      out += h.toc([
        { id: 'j-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'j-scope', t: { en: 'The sentence', zh: '那一句話' } },
        { id: 'j-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'j-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'j-drop', t: { en: 'The route they dropped', zh: '他們放棄的那條路' } },
        { id: 'j-dry', t: { en: 'Dry lab and model', zh: '乾式與模型' } },
        { id: 'j-hw', t: { en: 'Hardware', zh: '硬體' } },
        { id: 'j-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'j-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'j-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Screen the water and the soil, not the finished food', zh: '去篩檢水和土，而不是篩檢做好的食物' },
        lede: {
          en: 'A living sensor was chosen because the alternative is an instrument: atomic absorption spectroscopy and ICP-MS work, and their cost and operator requirements are exactly what keeps them out of the places where food is grown.',
          zh: '他們選擇活體感測器，是因為另一個選項是儀器：原子吸收光譜與 ICP-MS 當然可行，但它們的成本與操作門檻，正是讓它們進不了「種食物的地方」的原因。'
        },
        body:
          h.p({
            en: 'The project is **MerMAID — MerR-based Mercury Assay for In-field Detection**, and its target is stated narrowly: *"Our project targets Hg²⁺, an inorganic mercury ion. It does not directly measure methylmercury in rice or determine the total mercury content of food."* The reason for looking at farmland at all is somebody else\'s data rather than their own: in Guizhou, **Zhang and colleagues found rice rather than fish was the principal methylmercury-exposure pathway**, and in flooded paddies anaerobic microorganisms methylate inorganic Hg²⁺ which crops then translocate into grain. Hong Kong\'s own exposure is regional as much as local, because **local production supplied about 2 % of the fresh vegetables consumed in 2024**. And then, immediately: *"These findings do not establish widespread mercury contamination of Hong Kong farmland. Rather, they motivated our preventive approach."*',
            zh: '這個專案是 **MerMAID — MerR-based Mercury Assay for In-field Detection**，而它的標的寫得很窄：*「我們的專案針對的是 Hg²⁺，一種無機汞離子。它不直接量測稻米中的甲基汞，也不判定食物的總汞含量。」*至於為什麼要看農田，依據的是別人的數據而不是自己的：在貴州，**Zhang 等人發現主要的甲基汞暴露途徑是稻米而不是魚**；在淹水的稻田中，厭氧微生物會把無機 Hg²⁺ 甲基化，作物再把它轉運進穀粒。香港自身的暴露同時是區域性的，因為**2024 年本地生產只供應了所食用新鮮蔬菜的約 2%**。緊接著他們就寫：*「這些發現並不證明香港農地普遍受到汞污染，而是促成了我們採取預防性的做法。」*'
          }) +
          h.flow({
            title: { en: 'Collect → Extract → Expose → Concentrate → Read → Estimate', zh: 'Collect→Extract→Expose→Concentrate→Read→Estimate' },
            sub: { en: 'The whole MerMAID workflow, with what the wiki demonstrates at each step set against what it does not.', zh: 'MerMAID 的完整流程，並把每一步「wiki 示範到的」與「還沒示範到的」並排放在一起。' },
            stages: [
              { label: { en: 'Collect', zh: 'Collect' }, sub: { en: 'Soil or surface water', zh: '土壤或地表水' }, tone: 'b',
                items: [{ en: 'no field sample was ever assayed: the mercury in every soil test was added by the team under contained conditions', zh: '從未測過任何田間樣品：每個土壤測試中的汞，都是該隊在圍堵條件下自己加進去的' }] },
              { label: { en: 'Extract', zh: 'Extract' }, sub: { en: 'Water or soil module', zh: '水模組或土壤模組' }, tone: 'v',
                items: [{ en: 'water and soil modules built and run 20 times each; the UV-AOP module for other mercury forms is CAD and dry-lab only', zh: '水模組與土壤模組都已做出並各運行 20 次；針對其他汞形態的 UV-AOP 模組只有 CAD 與乾式模擬' }] },
              { label: { en: 'Expose', zh: 'Expose' }, sub: { en: 'Design 429 culture, four hours', zh: 'Design 429 培養物，四小時' }, tone: 'g',
                items: [{ en: 'five matched runs from 0.005 to 5 µM, with all three readouts taken from the same cultures', zh: '五組配對實驗、0.005 到 5 µM，三種讀值全部取自同一批培養物' }] },
              { label: { en: 'Concentrate', zh: 'Concentrate' }, sub: { en: 'Spin the cells into a pellet', zh: '把細胞離心成沉澱' }, tone: 'a',
                items: [{ en: 'the step that makes the colour readable, and the step that keeps a centrifuge in an "equipment-free" workflow', zh: '讓顏色能被讀出來的那一步，也是讓離心機留在「免設備」流程裡的那一步' }] },
              { label: { en: 'Read', zh: 'Read' }, sub: { en: 'Imaging box or C12880 reader', zh: '成像暗箱或 C12880 讀取器' }, tone: 't',
                items: [{ en: 'all published fluorescence data came from the phone box; the reader was tested on pellets and on uncentrifuged culture', zh: '所有公開的螢光數據都來自手機暗箱；讀取器則在沉澱與未離心培養液上都測過' }] },
              { label: { en: 'Estimate', zh: 'Estimate' }, sub: { en: 'Log-linear calibration', zh: '對數線性校正' }, tone: 'r',
                items: [{ en: 'RMSE about 0.0319 µM for fluorescence on two held-out runs, and no uncertainty interval for an unknown sample yet', zh: '螢光在兩組保留實驗上的均方根誤差約 0.0319 µM；對未知樣品則還沒有不確定區間' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Description, Results, Model and Hardware pages.', zh: '由我們依該隊 Description、Results、Model 與 Hardware 頁繪製。' }
          }) +
          h.h3({ en: 'Who they talked to, and what each conversation moved', zh: '他們找了誰談，以及每一次談話改動了什麼' }) +
          h.tbl({
            cols: [
              { t: { en: 'Who', zh: '對象' }, w: '30%' },
              { t: { en: 'What it changed', zh: '它改動了什麼' } }
            ],
            rows: [
              [{ en: '**Water Supplies Department**', zh: '**水務署（WSD）**' },
               { en: 'Drinking water was the original sample. WSD said local tap-water mercury was minimal, questioned the intended users and use case, and **could not identify a contaminated drinking-water site to test at.** The team stopped assuming drinking water.', zh: '最初設想的樣品是飲用水。水務署表示本地自來水的汞含量極低、質疑了設想中的使用者與使用情境，而且**找不到一個受污染的飲用水場址可供測試。**該隊因此不再把飲用水當成預設答案。' }],
              [{ en: '**Prof. TSUI Tsz Ki Martin and Prof. Jake Ming-kei CHUNG**, CUHK', zh: '香港中文大學 **徐志毅教授與鍾明基教授**' },
               { en: 'Both encouraged them to investigate **soil** rather than ordinary water samples, which is where the soil-extract work and the soil module come from.', zh: '兩位都鼓勵他們去研究**土壤**，而不是只做一般水樣——土壤萃取實驗與土壤模組就是從這裡來的。' }],
              [{ en: '**Drainage Services Department**', zh: '**渠務署（DSD）**' },
               { en: 'Supported fluorescence with optical filters over the chromoprotein readouts used in earlier projects, recommended **testing cross-response to cadmium, lead and zinc**, and advised restricting the bench work to inorganic Hg²⁺. Their reported Sha Tin effluent figures — mostly below 1 ppb, occasionally 10–20 ppb — are used as **context for the target range and labelled as consultation-reported, not verified monitoring data.**', zh: '支持使用帶濾片的螢光讀值，而不是先前專案用的色蛋白讀值；建議**測試對鎘、鉛、鋅的交叉反應**，並建議把實驗檯工作限制在無機 Hg²⁺。他們提到的沙田污水廠出水數字——多數低於 1 ppb、偶爾 10–20 ppb——被當成**目標範圍的背景脈絡，並標明是諮詢中所述、而非經核實的監測數據。**' }],
              [{ en: '**Dr. Li Wai Chin**, EdUHK', zh: '香港教育大學 **李偉展博士**' },
               { en: 'Pressed the distinction between inorganic mercury and methylmercury, which is why the project\'s target is written as Hg²⁺ and nothing wider.', zh: '強調無機汞與甲基汞之間的區別——這正是為什麼這個專案的標的只寫成 Hg²⁺，不再放寬。' }],
              [{ en: '**EPD and AFCD**', zh: '**環保署與漁農自然護理署**' },
               { en: 'Explained how mercury is monitored now, which is what positions MerMAID as screening ahead of confirmatory testing rather than instead of it.', zh: '說明目前汞是怎麼被監測的——這也是 MerMAID 被定位成「確認性檢測之前的篩檢」而不是「取代確認性檢測」的原因。' }],
              [{ en: '**Farms, a fish farm and wet market vendors**', zh: '**農場、一家魚場與街市攤販**' },
               { en: 'Koo\'s Farm and wet market vendors wanted numbers rather than a qualitative indicator, which drove the quantitative fluorescence work. **More Happy Farm did not want to own a device at all**, which the wiki records as a challenge to its own assumption rather than an outlier.', zh: '高氏農場與街市攤販要的是數字，而不是定性指示——這推動了定量螢光那部分工作。**More Happy Farm 則完全不想擁有一台裝置**，而 wiki 把這件事記成「對自己假設的挑戰」，不是當成離群值。' }]
            ],
            min: 740,
            source: { en: 'Read from the team\'s Human Practices page, Stages 1–4. The table is ours.', zh: '讀自該隊 Human Practices 頁第一至四階段。表格是我們整理的。' }
          })
      });

      /* ---------------- the sentence ---------------- */
      out += h.sec({
        id: 'j-scope',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'One sentence: "1 ppb is the lowest concentration tested, not a validated detection limit"', zh: '一句話：「1 ppb 是測過的最低濃度，不是已驗證的偵測極限」' },
        lede: {
          en: 'The number is real. The claim attached to it is smaller than the number would let them get away with, and they wrote the reason down.',
          zh: '那個數字是真的。但掛在它上面的主張，比這個數字其實「可以混過去」的程度還要小——而且他們把理由寫下來了。'
        },
        body:
          h.warn({
            en: 'The low-end result is strong for a high-school dataset: at **0.005 µM, about 1 ppb, both pellet readouts rose above their matched controls in five of five runs** (paired *t*-test p = 0.0080 for colour, p = 0.0346 for pellet fluorescence), and **all five individual pellet-fluorescence measurements** cleared an exploratory mean-control-plus-3-SD threshold rather than only their average. Most teams would call that a detection limit. This one wrote: *"the threshold was calculated and evaluated using the same small dataset, rather than tested on new samples. We therefore describe 1 ppb as the lowest concentration tested across all five main runs with positive responses in both pellet formats, not as a validated detection limit or LOD."*',
            zh: '以高中部的資料來說，低濃度端的結果其實很強：在 **0.005 µM、約 1 ppb 下，兩種菌體沉澱讀值在五組實驗中都高過各自的配對對照**（配對 *t* 檢定：顏色 p = 0.0080，菌體沉澱螢光 p = 0.0346），而且**五個個別的菌體沉澱螢光測值全部**都越過了「對照平均加三個標準差」的探索性門檻，不只是平均值越過。多數隊伍會把這稱為偵測極限。這一隊寫的是：*「那個門檻是用同一份小資料集算出來、也在同一份資料上評估的，並沒有在新樣品上測試過。因此我們把 1 ppb 描述為『五組主要實驗中、兩種菌體沉澱格式都有正向反應的最低受測濃度』，而不是已驗證的偵測極限或 LOD。」*'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '24%' },
              { t: { en: 'The sentence, as published', zh: '公開的那句話' } }
            ],
            rows: [
              [{ en: 'Detection threshold', zh: '偵測門檻' },
               { en: '"**1 ppb is the lowest concentration tested, not a validated detection limit.**"', zh: '「**1 ppb 是測過的最低濃度，不是已驗證的偵測極限。**」' }],
              [{ en: 'What a replicate is', zh: '什麼才算重複' },
               { en: '"Measuring the same experiment several times gives more information about that experiment, but **does not replace repeating the experiment independently.**" Timepoints and ImageJ regions from one run are named as not counting.', zh: '「把同一個實驗量好幾次，會給你更多關於那個實驗的資訊，但**不能取代獨立重複那個實驗。**」同一組實驗中的不同時間點與 ImageJ 區域，被指明不算額外的生物重複。' }],
              [{ en: 'Naked-eye reading', zh: '肉眼判讀' },
               { en: '"**The low-concentration colour responses measured using ImageJ do not establish naked-eye detection.**" Three team members ranked unlabelled pellets correctly below about 1 µM and **none could rank them above it.**', zh: '「**以 ImageJ 量到的低濃度顏色反應，並不證明肉眼可以偵測。**」三位隊員對未標示的沉澱在約 1 µM 以下都排對了順序，而**在那之上沒有人排得出來。**' }],
              [{ en: 'Image normalisation', zh: '影像正規化' },
               { en: '"Reference division can reduce brightness variation when sample and reference intensities change proportionally; **it is not background subtraction.**"', zh: '「當樣品與參考區的強度成比例變化時，除以參考值可以減少亮度變異；**但它不是背景扣除。**」' }],
              [{ en: 'The soil extracts', zh: '土壤萃取液' },
               { en: '"We could assess whether the extracts produced a response, but **could not reliably convert that response into the mercury concentration originally present in the soil.**" They added the mercury themselves.', zh: '「我們可以評估那些萃取液是否產生反應，但**無法可靠地把那個反應換算成土壤原本含有的汞濃度。**」汞是他們自己加進去的。' }],
              [{ en: 'What the project measures', zh: '這個專案量的是什麼' },
               { en: '"Our project targets **Hg²⁺, an inorganic mercury ion.** It does not directly measure methylmercury in rice or determine the total mercury content of food."', zh: '「我們的專案針對的是 **Hg²⁺，一種無機汞離子。**它不直接量測稻米中的甲基汞，也不判定食物的總汞含量。」' }],
              [{ en: 'Motivation against evidence', zh: '動機與證據' },
               { en: '"These findings **do not establish widespread mercury contamination of Hong Kong farmland.** Rather, they motivated our preventive approach."', zh: '「這些發現**並不證明香港農地普遍受到汞污染。**而是促成了我們採取預防性的做法。」' }],
              [{ en: 'The device display', zh: '裝置的顯示' },
               { en: '"**A green operational indicator must not imply that a sample is safe.**" Device status, fluorescence reading, concentration estimate and safety judgement are listed as four separate things.', zh: '「**綠色的運作指示燈，絕不能被理解成樣品是安全的。**」裝置狀態、螢光讀值、濃度估計與安全判斷，被列成四件分開的事。' }],
              [{ en: 'The model page, about itself', zh: '模型頁，關於它自己' },
               { en: '"The validation measurements were excluded from equation fitting, but their results were examined during this comparison. They therefore **no longer represent a completely untouched final assessment of the analysis choices.**"', zh: '「那些驗證測值並未被用於擬合方程式，但在這次比較中我們看過了它們的結果。因此它們**已經不再是一份對分析選擇完全未被動過的最終評估。**」' }],
              [{ en: 'Who did the cloning', zh: '是誰做了選殖' },
               { en: '"Constructs were designed in silico and ordered as complete synthesised plasmids. **Our team did not perform the cloning**, and the supplied plasmids were reported as sequence-verified by their manufacturers."', zh: '「構築體是在電腦上設計、並以完整合成質體訂購的。**我們的隊伍沒有進行選殖**，而供應的質體由其製造商報告為已完成定序確認。」' }]
            ],
            min: 760,
            source: { en: 'All ten quoted from the team\'s own Results, Engineering, Model, Description, Hardware and Human Practices pages. The collection is ours.', zh: '十句全部引自該隊自己的 Results、Engineering、Model、Description、Hardware 與 Human Practices 頁。整理成表是我們做的。' }
          }) +
          h.take({ en: 'A 7.95× response and five significant runs, and they still would not call 1 ppb a detection limit', zh: '7.95 倍的反應、五組都顯著，而他們仍然不把 1 ppb 稱為偵測極限' }, {
            en: 'A high-school team with those numbers had every incentive to write "we detect mercury at 1 ppb" and let the reader do the rest. Instead the strongest number on the page arrives with the reason it is not yet a limit of detection attached to it, and **the circularity is named in the team\'s own words — thresholds fitted and evaluated on the same five runs.** Among the ten High School Top 10 wikis, this is the clearest case of a team understanding that a claim and its scope have to travel together.',
            zh: '有這種數字的高中隊伍，完全有理由寫下「我們在 1 ppb 偵測到汞」，剩下的留給讀者自己想。但這一頁上最強的那個數字，是連著「為什麼它還不是偵測極限」一起出現的，而且**那個循環論證是用該隊自己的話指出來的——門檻是在同樣那五組實驗上擬合、也在同樣那五組上評估的。**在高中部前十名的十個 wiki 之中，這是「一支隊伍理解到主張與其範圍必須一起走」最清楚的一例。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'j-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A school with no plate reader built the instrument, then audited it', zh: '一所沒有微孔盤讀儀的學校把儀器做了出來，然後去稽核它' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'MerMAID: construct iteration above, measurement and modelling below', zh: 'MerMAID：上為構築體迭代，下為量測與建模' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Model and Hardware pages.', zh: '由我們依該隊 Engineering、Results、Model 與 Hardware 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'j-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Nine cycles, and the ones that went backwards are the informative ones', zh: '九個循環，而其中往後退的那幾個才是有資訊量的' },
        lede: {
          en: 'Every construct is an *E. coli* DH5α plasmid, ordered synthesised rather than cloned in house, with mRFP1e held constant as the recognition system and the regulatory architecture changed around it.',
          zh: '每一個構築體都是 *E. coli* DH5α 中的質體，是訂購合成的、不是自己選殖的；而在辨識系統與調控架構不斷改變的過程中，mRFP1e 被固定不動。'
        },
        body:
          h.phases([
            { h: { en: 'Fix the controls, then admit the response is still weak', zh: '把對照補齊，然後承認反應還是很弱' },
              p: { en: 'The first-generation P series varied the promoter driving *merR* and the R series varied its ribosome binding site. P1 and R1 **could not be supplied at all**, and P2 came with a supplier warning about possible cell toxicity.', zh: '第一代的 P 系列改變驅動 *merR* 的啟動子，R 系列改變它的核糖體結合位。P1 與 R1 **根本無法被合成供應**，而 P2 還附帶了供應商關於可能細胞毒性的警告。' },
              items: [
                { en: 'The early screen is published together with its own mistake: *"we forgot to include matching 0 µM samples, an empty-vector control and an untransformed E. coli control in these early experiments"* — so the colour seen in P3 could not be shown to be mercury-dependent at all.', zh: '早期的篩選是連同它自己的錯誤一起公開的：*「在這些早期實驗中，我們忘了納入配對的 0 µM 樣品、空載體對照與未轉形的大腸桿菌對照」*——所以在 P3 上看到的顏色，根本無法被證明是依賴汞的。' },
                { en: 'With the controls restored, the honest result is a negative one: the responses were **weak and inconsistent across repeat tests**, and the empty-vector and untransformed controls showing no colour did not fix that.', zh: '對照補齊之後，誠實的結果是一個負面結果：各反應在重複測試之間**既弱又不一致**；空載體與未轉形對照不顯色，並沒有解決這件事。' },
                { en: 'They also refuse the easy inference about their own control: C2 showing no visible colour means its output was **below their visual detection capability, not that the promoter was inactive.**', zh: '他們也拒絕對自己的對照做那個輕鬆的推論：C2 看不到顏色，意思是它的輸出**低於他們的目視偵測能力，而不是那個啟動子沒有活性。**' }
              ],
              done: { en: 'A screen whose result can be interpreted, and the admission that interpreting it did not make it good.', zh: '一個結果可以被解讀的篩選，以及「可以解讀並不等於結果變好」這個承認。' } },
            { h: { en: 'Set the working range in your own host before blaming the construct', zh: '在怪構築體之前，先在自己的宿主裡定出工作範圍' },
              p: { en: 'The weak responses left an ambiguity worth resolving: were the constructs unresponsive, or was the tested concentration range wrong? Literature had given them roughly 1 µM as an expected tolerance ceiling.', zh: '微弱的反應留下一個值得解決的歧義：是構築體沒有反應，還是測試的濃度範圍不對？文獻給他們的預期耐受上限大約是 1 µM。' },
              items: [
                { en: 'They tested **0, 0.01, 1, 5 and 10 µM, then 15 µM** instead of treating the literature value as fixed. All strains grew at 5 µM; nothing grew at 15 µM; **5 µM became the working upper concentration** — and they call it *"an operational choice, not a universal mercury-tolerance limit for E. coli."*', zh: '他們實際去測了 **0、0.01、1、5、10 µM，接著 15 µM**，而不是把文獻值當成定論。所有菌株在 5 µM 下都能生長；在 15 µM 下都不能；**5 µM 成為工作上限濃度**——而他們稱之為*「一個操作上的選擇，不是大腸桿菌普遍的耐汞極限」*。' },
                { en: 'The matching caveat is a measurement one: these were growth and colour observations, and **no separate viability assay** was used to establish whether cells in non-growing cultures had died.', zh: '隨之而來的保留是量測層面的：這些是生長與顏色的觀察，而他們**沒有另做存活率試驗**來確認不生長的培養物中細胞是否已死亡。' },
                { en: 'Throughout, concentrations are reported as **nominal added HgCl₂**: they did not measure free Hg²⁺, intracellular mercury or speciation, so the numbers describe what was added, not what reached the sensor.', zh: '全程濃度都以**標稱加入的 HgCl₂** 報告：他們沒有量自由 Hg²⁺、胞內汞或物種分布，所以那些數字描述的是「加進去的量」，不是「抵達感測器的量」。' }
              ] },
            { h: { en: 'Suspect the culture line, and change the workflow rather than the conclusion', zh: '懷疑培養物的來歷，並改流程而不是改結論' },
              p: { en: 'P3 sometimes gave strong colour and sometimes almost none. One parent culture was split into five subcultures, P3-a to P3-e, and tested at 0, 1 and 5 µM.', zh: 'P3 有時顯出很強的顏色，有時幾乎沒有。他們把一個母培養物分成五份次培養物 P3-a 到 P3-e，並在 0、1、5 µM 下測試。' },
              items: [
                { en: 'The subcultures still differed, and **two uninduced samples, a and c, developed strong red colour** — pronounced reporter expression with no mercury at all.', zh: '那些次培養物仍然彼此不同，而且**兩個未誘導的樣品 a 與 c 顯出強烈紅色**——完全沒有汞，卻有明顯的報告子表達。' },
                { en: 'They did not sequence, so **mutation stayed a hypothesis rather than a demonstrated explanation.** What changed was the workflow: re-transform from the supplied plasmids, screen fresh colonies, keep glycerol stocks, stop relying on a continuously passaged line.', zh: '他們沒有做定序，所以**突變始終只是一個假設，不是已證實的解釋。**改變的是流程：從供應的質體重新轉形、篩選新菌落、保留甘油菌種、不再依賴持續接種傳代的那一條培養線。' },
                { en: 'The cost of doing it properly is stated: after the change, **the earlier strong P3 signal was no longer reproduced.** *"Engineering decisions should follow reproducible performance, not the strongest isolated observation."*', zh: '把事情做對的代價被寫出來了：改變之後，**先前那個強烈的 P3 訊號再也沒有重現。***「工程決策應該跟隨可重現的表現，而不是跟隨最強的那個孤立觀察。」*' }
              ],
              done: { en: 'A weaker result that is theirs to keep, instead of a stronger one that was not.', zh: '一個比較弱、但真正屬於他們的結果，取代了一個比較強、卻站不住的結果。' } },
            { h: { en: 'Amplification tried, and removed for the right reason', zh: '放大器試過，並因為正確的理由被移除' },
              p: { en: 'ECF20 is an extracytoplasmic function sigma factor and pECF20 its cognate promoter, both exogenous to *E. coli*; the pair had already shown reporter activation in the APC1 and APC2 controls. The intended path was mercury → MerR/pMer → ECF20 → pECF20 → mRFP1e.', zh: 'ECF20 是一個胞外功能型 sigma 因子，pECF20 是它的對應啟動子，兩者對 *E. coli* 都是外來的；這一對在 APC1 與 APC2 對照中已經顯示能活化報告子。預期的訊號路徑是 mercury → MerR/pMer → ECF20 → pECF20 → mRFP1e。' },
              items: [
                { en: '**Every tested colony was strongly red immediately after transformation, with no mercury.** The amplifier turned basal upstream expression into a full reporter output and destroyed the separation it was supposed to improve.', zh: '**每一個受測菌落在轉形後立刻就是強紅色，而且沒有加汞。**那個放大器把上游的基礎表達變成完整的報告子輸出，摧毀了它本來應該改善的那個區隔。' },
                { en: 'The scoping is careful even here: ECF20 abundance and reporter saturation were not measured, so *"the precise mechanism remained unresolved"*, and the finding is written as **this amplifier configuration** being unsuitable rather than amplification in general.', zh: '即使在這裡，範圍也標得很小心：ECF20 的量與報告子飽和都沒有量，所以*「確切機制仍未解決」*，而這個發現被寫成**這一種放大器配置**不適用，而不是放大這件事本身不行。' },
                { en: 'The module is still offered to the Registry as a sequence that expresses in *E. coli* — with **no characterisation data entered and no claim about signal gain.**', zh: '這個模組仍然以「一段已知能在 *E. coli* 中表達的序列」提供給 Registry——但**沒有輸入任何特性化數據，也沒有對訊號增益做任何主張。**' }
              ] },
            { h: { en: 'Design 429, and the refusal to say why it is better', zh: 'Design 429，以及拒絕說明它為何比較好' },
              p: { en: 'Literature-guided redesign: **p429** had performed well in a published MerR system and in the 2024 iGEM Bolivia project, so it was tested against **J23106**, which their in silico analysis predicted to have similar strength. The *merR* coding sequence and the pMer/operator region were both revised against references, and the *merR* terminator B0010 was replaced by Lambda TR2 for synthesis reasons.', zh: '由文獻引導的重新設計：**p429** 在一個已發表的 MerR 系統與 2024 年 iGEM Bolivia 專案中表現不錯，於是被拿來和 **J23106** 比較，後者在他們的電腦分析中被預測為強度相近。*merR* 編碼序列與 pMer／操作子區域都依參考序列作了修訂，而 *merR* 的終止子 B0010 因合成限制被換成 Lambda TR2。' },
              items: [
                { en: 'Three constructs were built. **Design 429 gave the most promising mercury-dependent response and also grew best; 23106-32 responded mainly at higher concentrations and less consistently; 23106-34 showed no clear visible induction and grew slowest.** The same growth ranking held without mercury, which is what supports their burden concern.', zh: '他們做了三個構築體。**Design 429 給出最有希望的依賴汞反應，生長也最好；23106-32 主要在較高濃度才有反應、且較不一致；23106-34 沒有明顯的可見誘導，生長也最慢。**同樣的生長排序在沒有加汞時也成立，這才是支持他們「負擔」疑慮的依據。' },
                { en: 'Then the restraint: *"Several features also changed between the first- and second-generation designs, including the backbone. We could not attribute the improvement solely to p429, the revised operator, the coding sequence or the terminator change."* They also had not measured MerR abundance, so **MerR toxicity stayed a hypothesis.**', zh: '接著是那份自制：*「第一代與第二代設計之間有好幾個特徵同時改變了，包括骨架。我們無法把這個改善單獨歸因於 p429、修訂後的操作子、編碼序列，或終止子的更換。」*他們也沒有量 MerR 的量，所以**MerR 毒性始終只是一個假設。**' },
                { en: 'Design 429 is the composite part **BBa_26BL7PZU**: two divergent transcription units separated by a 31 bp spacer, each with its own terminator, MerR supplied *in cis* so the part works as one unit.', zh: 'Design 429 就是複合元件 **BBa_26BL7PZU**：兩個反向轉錄單元以 31 bp 間隔區分開，各有自己的終止子，MerR 以 *in cis* 方式提供，使整個元件能作為單一單位運作。' }
              ],
              done: { en: 'A candidate chosen on evidence, with the mechanism explicitly left unexplained.', zh: '一個依證據選出的候選者，而機制被明確地留著沒有解釋。' } },
            { h: { en: 'Five matched runs, three readouts, one culture each', zh: '五組配對實驗、三種讀值，每次都出自同一批培養物' },
              p: { en: 'Design 429 was characterised from **0.005 to 5 µM at four hours in five independent runs (Runs 5–9)**, and pellet colour, pellet fluorescence and culture fluorescence were all taken **from the same cultures**, so the comparison is between measurement formats rather than between unrelated experiments. Four hours was chosen because it gave the most complete matched dataset, **not the highest signal** — a point they make explicitly.', zh: 'Design 429 在**五組獨立實驗（Runs 5–9）中、於第四小時、從 0.005 到 5 µM** 完成特性化；菌體沉澱顏色、菌體沉澱螢光與培養液螢光全部**取自同一批培養物**，所以比較的是量測格式之間的差別，而不是互不相關的實驗之間的差別。選第四小時的理由是它提供了最完整的配對資料集，**而不是最高的訊號**——這一點他們明說了。' },
              items: [
                { en: '**Both pellet means rose at every dose step**, and checked run by run rather than on averages, **all 51 assessed treatments from 0.005 to 5 µM exceeded their matching four-hour controls in both pellet formats.** The two pellet readouts ranked the ten concentrations identically, **Spearman ρ = 1.00** — which they immediately qualify as not independent, since the readouts share a sample and a reporter.', zh: '**兩種菌體沉澱的平均值在每一個劑量階都上升**；而且逐組實驗檢查而不只看平均，**從 0.005 到 5 µM 的全部 51 個受測處理，在兩種沉澱格式中都高過各自第四小時的配對對照。**兩種沉澱讀值對十個濃度的排序完全相同，**Spearman ρ = 1.00**——他們立刻補上限制：這兩者並不獨立，因為它們共用樣品與報告子。' },
                { en: 'At 5 µM, **pellet fluorescence gave 7.95× against 3.26× for colour and 1.61× for culture fluorescence**, and it was the largest in every matched run. Robustness was checked by moving runs in and out: adding Run 4 shifted 5 µM fold responses from **3.26× to 3.15× (colour) and 7.95× to 8.20× (fluorescence)**, and removing Run 5 took colour to about 2.99× while leaving the dose trend intact.', zh: '在 5 µM 下，**菌體沉澱螢光給出 7.95 倍，顏色 3.26 倍，培養液螢光 1.61 倍**，而且它在每一組配對實驗中都是最大的。穩健性是靠把實驗加進來或拿出去來檢查的：加入 Run 4 使 5 µM 的倍數反應從 **3.26 倍變成 3.15 倍（顏色）、7.95 倍變成 8.20 倍（螢光）**；移除 Run 5 使顏色降到約 2.99 倍，而劑量趨勢仍然成立。' },
                { en: '**Selectivity, published with the weaker readout\'s weakness in it:** mercury beat Pb, Zn and Cd in **all eight matched metal–timepoint comparisons for every readout**, and the largest non-target response relative to its matched mercury response was **6.5 % for pellet fluorescence and 32.0 % for colour.** Metals were tested singly, and they say that does not establish behaviour in a mixture.', zh: '**選擇性是連著「較弱那個讀值的弱點」一起公開的：**汞在**全部八個配對的金屬—時間點比較中、對每一種讀值**都勝過 Pb、Zn、Cd；而相對於配對汞反應的最大非標的反應是**菌體沉澱螢光 6.5%、顏色 32.0%。**金屬是單獨測的，而他們說這並不能證明混合時的行為。' },
                { en: 'The upper range is reported as a weakness rather than a headline: from **1 to 5 µM the mean signals move only from 0.399 to 0.464 (colour) and 3.121 to 3.377 (fluorescence)**, small against between-run variation, so *"the upper range produced strong responses but poorer separation between concentrations"* and the middle of the range is the part worth calibrating.', zh: '高濃度端被當成弱點、而不是賣點來報告：**從 1 到 5 µM，平均訊號只從 0.399 升到 0.464（顏色）、從 3.121 升到 3.377（螢光）**，相對於實驗間變異來說很小，所以*「高濃度端給出強烈反應，但濃度之間的區隔較差」*，值得拿來校正的是範圍的中段。' }
              ] },
            { h: { en: 'Choose the readout on three measures, and publish the two it loses', zh: '用三個指標來選讀值，並公開它輸掉的那兩個' },
              p: { en: 'Fold response alone would have picked pellet fluorescence and stopped there. They compared the two pellet readouts on **pooled fold response, between-run coefficient of variation, and an exploratory control-based threshold** — and the three measures disagree.', zh: '只看倍數反應的話，答案就是菌體沉澱螢光，到此為止。他們改用三個指標來比較兩種沉澱讀值：**彙總倍數反應、實驗間變異係數，以及一個以對照為基礎的探索性門檻**——而這三個指標彼此不一致。' },
              items: [
                { en: '**Fold response:** fluorescence 7.95× against colour 3.26× at 5 µM. Fluorescence wins.', zh: '**倍數反應：**5 µM 下螢光 7.95 倍對顏色 3.26 倍。螢光勝。' },
                { en: '**Between-run CV:** fluorescence holds **7–9 % at about 6–20 ppb**, but at about 1 ppb it reaches **36 %** where colour is at **20 %**, and at about 2 ppb 28 % against 16 %. **Colour is the steadier readout at the low end.** Colour loses.', zh: '**實驗間變異係數：**螢光在約 6–20 ppb 維持 **7–9%**，但在約 1 ppb 達到 **36%**，而顏色是 **20%**；在約 2 ppb 則是 28% 對 16%。**在低濃度端，顏色才是較穩定的那個讀值。**顏色勝。' },
                { en: '**Exploratory threshold (mean control + 3 SD):** fluorescence clears it at about 1 ppb, colour only at about 6 ppb, and culture fluorescence not until about 100 ppb. Fluorescence wins.', zh: '**探索性門檻（對照平均加三個標準差）：**螢光在約 1 ppb 越過，顏色要到約 6 ppb，培養液螢光要到約 100 ppb。螢光勝。' },
                { en: 'They choose pellet fluorescence and can say exactly why, while printing the measure on which it is the worse choice. And the fold values themselves are scoped: colour and fluorescence use different signal calculations, so *"these fold values are descriptive and do not, by themselves, establish which method is more sensitive."*', zh: '他們選了菌體沉澱螢光，而且能精確說出理由，同時也把「它是較差選擇」的那個指標一起印出來。倍數本身也被標上範圍：顏色與螢光用的是不同的訊號算式，所以*「這些倍數值是描述性的，單憑它們並不能確立哪一種方法更靈敏」*。' }
              ],
              done: { en: 'A readout choice that survives being asked why, on three axes instead of one.', zh: '一個在被追問理由時還站得住的讀值選擇——而且是在三個軸上，不是一個軸上。' } }
          ])
      });

      /* ---------------- the abandoned route ---------------- */
      out += h.sec({
        id: 'j-drop',
        kick: { en: 'The route they dropped', zh: '他們放棄的那條路' },
        h2: { en: 'The sentence a failed route is supposed to end with', zh: '一條失敗的路線，本來就該用這樣一句話收尾' },
        lede: {
          en: 'The original plan was two recognition strategies in the same chassis with the same reporter, so they could be compared directly: MerR as a protein sensor, and an RNA switch built from a mercury-binding motif.',
          zh: '原本的計畫是在同一個底盤、用同一個報告子做兩種辨識策略，以便直接比較：以 MerR 為蛋白感測器，以及一個由汞結合序列構築出的 RNA 開關。'
        },
        body:
          h.p({
            en: 'Four constructs were commissioned — **APD3, APD4 and each of them driving the ECF20 amplifier** — with J23106 driving an aptamer-containing region intended to sequester the B0034 ribosome-binding site in a hairpin, so that mercury binding would expose it and allow mRFP1e to be made. None of the four showed the intended mercury-dependent response. The amplifier controls behaved as expected (**APC1 deep red under both conditions, APC2 colourless under both**), which *"narrowed our concern to the recognition and regulatory stages of the complete constructs, but did not identify the precise failure mechanism."*',
            zh: '他們訂做了四個構築體——**APD3、APD4，以及它們各自驅動 ECF20 放大器的版本**——其中 J23106 驅動一段含適體的區域，意圖以髮夾結構把 B0034 核糖體結合位藏起來，使汞結合後能把它暴露出來、讓 mRFP1e 得以製造。四個之中沒有一個出現預期的依賴汞反應。放大器對照的行為則符合預期（**APC1 在兩種條件下都是深紅色，APC2 在兩種條件下都無色**），這*「把我們的疑慮縮小到完整構築體的辨識與調控階段，但並沒有指出確切的失效機制」*。'
          }) +
          h.warn({
            en: 'And then the post-mortem, which is the most transferable sentence on the wiki: *"Reviewing the design revealed **an untested assumption**: we had transferred a DNA recognition motif into an RNA regulatory structure without establishing that it would retain the necessary binding and switching behaviour."* Elsewhere on the same page it is put even more plainly — *"we treated a DNA-based mercury-recognition motif as though it were an established RNA regulatory switch"* — with the matching qualification that although mercury-mediated base pairing **has** been demonstrated in RNA, that does not establish that their sequence would work as an intracellular translation switch.',
            zh: '接著是那份事後檢討，也是整個 wiki 上最可被借用的一句話：*「重新檢視設計時，我們發現了**一個未經測試的假設**：我們把一個 DNA 的辨識序列搬進 RNA 的調控結構裡，卻沒有先確立它會保留所需的結合與切換行為。」*同一頁上還有更直白的說法——*「我們把一個以 DNA 為基礎的汞辨識序列，當成了一個已經確立的 RNA 調控開關」*——並附上相應的保留：雖然汞介導的鹼基配對在 RNA 中**確實**已被證實，但那並不足以確立他們的序列能作為胞內的轉譯開關。'
          }) +
          h.h3({ en: 'Why naming it beats deleting it', zh: '為什麼「指名它」勝過「刪掉它」' }) +
          h.ul([
            { en: '**The failure is reusable.** "The constructs did not work" tells the next team nothing. "A DNA motif was moved into an RNA context without checking that the behaviour transfers" is a reusable check that applies to every aptamer-adjacent design, including ones with nothing to do with mercury.', zh: '**這個失敗是可以被重複使用的。**「那些構築體沒有用」對下一支隊伍毫無資訊。「一個 DNA 序列被搬進 RNA 的脈絡，卻沒有檢查行為是否跟著轉移」則是一個可重複使用的檢查點，適用於每一個與適體相關的設計，包括和汞完全無關的那些。' },
            { en: '**The lesson is written as a rule, not as a regret:** *"correctly identify the molecular nature and mechanism of a recognition element before designing a genetic circuit around it."*', zh: '**那個教訓被寫成一條規則，而不是一聲懊悔：***「在圍繞一個辨識元件設計基因迴路之前，先正確辨明它的分子本質與機制。」*' },
            { en: '**They kept the reusable part.** ECF20 stayed in the project because its own controls had shown reporter activation, and it is the ECF20 module — not the aptamer — that is offered to the Registry as an uncharacterised but expressing sequence.', zh: '**他們留下了可以再用的部分。**ECF20 被留在專案裡，因為它自己的對照已顯示能活化報告子；而提供給 Registry 的是這個 ECF20 模組——不是那個適體——並且以「未特性化、但確實會表達」的序列形式提供。' },
            { en: '**The protein route is described with the same care that killed the RNA one.** MerR regulates transcription while **remaining associated with its DNA binding site**: mercury binding changes promoter DNA geometry to favour activation, and *"MerR does not simply detach to release repression."* Getting that mechanism right is what makes a prediction about background leakiness possible at all.', zh: '**蛋白路線的描述，用的是同一份把 RNA 路線判死的謹慎。**MerR 在調控轉錄時**仍然結合在它的 DNA 位點上**：汞的結合改變啟動子 DNA 的幾何而偏向活化，而且*「MerR 並不是單純脫離以解除抑制」*。把這個機制講對，才有可能對背景滲漏做出任何預測。' }
          ]) +
          h.take({ en: 'Ours', zh: '我們的看法' }, {
            en: 'Most wikis handle a dead route by not mentioning it. The next most common move is to mention it and blame the construct. Naming the assumption is the only version of the three that is worth another team\'s reading time, and it costs the team nothing except the admission that the error was conceptual rather than technical.',
            zh: '多數 wiki 處理一條死掉的路線的方式是不提它。第二常見的做法是提它、然後怪構築體。三者之中，只有「指名那個假設」這個版本值得另一支隊伍花時間讀；而這對該隊的唯一代價，只是承認那個錯誤是觀念上的、不是技術上的。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'j-dry',
        kick: { en: 'Dry lab and model', zh: '乾式與模型' },
        h2: { en: 'A calibration with two whole runs held out, and error reported in µM', zh: '一條保留了兩整組實驗的校正線，而誤差以 µM 為單位報告' },
        lede: {
          en: 'The modelling question is the one that separates a sensor from an assay: a fold response says the sensor works, and says nothing about what is in an unknown sample.',
          zh: '那個建模問題正是「感測器」與「分析方法」的分界：倍數反應告訴你感測器有用，卻完全沒告訴你未知樣品裡有什麼。'
        },
        body:
          h.p({
            en: 'The fit is **log-linear in concentration**: ΔS = A + b · log₁₀(c ÷ 0.005 µM). Both readouts are reference-normalised and control-subtracted before it — colour as `1 − (G_pellet ÷ G_white)`, pellet fluorescence as `R_pellet ÷ R_background`, then each minus its matching control from the same run and time.',
            zh: '擬合形式是**濃度的對數線性**：ΔS = A + b · log₁₀(c ÷ 0.005 µM)。兩種讀值在擬合前都先經過參考正規化與對照扣除——顏色是 `1 − (G_pellet ÷ G_white)`，菌體沉澱螢光是 `R_pellet ÷ R_background`，然後各自減去同一組實驗、同一時間的配對對照。'
          }, {
            en: 'Two choices in that equation are declared rather than assumed. The reference point 0.005 µM is the lowest calibration concentration, picked so that A is simply the predicted signal there; they note this makes the equation easier to read and **does not by itself improve accuracy.** And untreated controls were used for subtraction but **not included as concentration points, because the logarithm of zero is undefined.**',
            zh: '這個方程式裡有兩個選擇是被明講出來、而不是默默假設的。參考點 0.005 µM 是校正範圍中最低的濃度，這樣挑是為了讓 A 就直接是該處的預測訊號；他們指出這只是讓方程式更好讀，**本身並不會提升準確度。**另外，未處理的對照被用於扣除，但**沒有被當成濃度點納入，因為零的對數沒有定義。**'
          }) +
          h.kv([
            [{ en: 'Calibration set', zh: '校正集' },
             { en: '**20 measurements from four runs** per readout (2, 6, 8 and 13 October for colour; Trials A–D for fluorescence), at 0.005, 0.01, 0.03, 0.05 and 0.1 µM, four-hour pellet data only.', zh: '每種讀值**來自四組實驗的 20 個測值**（顏色為 10 月 2、6、8、13 日；螢光為 Trials A–D），濃度為 0.005、0.01、0.03、0.05、0.1 µM，只用第四小時的沉澱數據。' }],
            [{ en: 'Validation set', zh: '驗證集' },
             { en: '**10 measurements from two further runs** per readout (14 and 15 October; Trials E and F), kept out of the fitting entirely.', zh: '每種讀值**來自另外兩組實驗的 10 個測值**（10 月 14、15 日；Trials E 與 F），完全不參與擬合。' }],
            [{ en: 'Fitted lines', zh: '擬合出的直線' },
             { en: 'Colour **ΔC = 0.04363 + 0.07591 · log₁₀(c ÷ 0.005 µM)**; pellet fluorescence **ΔF = 0.42290 + 1.08721 · log₁₀(c ÷ 0.005 µM)**. One pooled line per readout; run-to-run differences are **not** separately estimated.', zh: '顏色 **ΔC = 0.04363 + 0.07591 · log₁₀(c ÷ 0.005 µM)**；菌體沉澱螢光 **ΔF = 0.42290 + 1.08721 · log₁₀(c ÷ 0.005 µM)**。每種讀值一條彙總直線；實驗之間的差異**沒有**被分開估計。' }],
            [{ en: 'Inverse use', zh: '反向使用' },
             { en: '**ĉ = 0.005 µM × 10^((ΔS − A) ÷ b)**, with estimates below 0.005 µM or above 0.1 µM flagged as outside the calibration range.', zh: '**ĉ = 0.005 µM × 10^((ΔS − A) ÷ b)**，而低於 0.005 µM 或高於 0.1 µM 的估計值會被標記為落在校正範圍之外。' }],
            [{ en: 'Reported error', zh: '報告的誤差' },
             { en: 'Concentration RMSE, in µM: **≈ 0.0319 µM for fluorescence, ≈ 0.0483 µM for colour**. Five fluorescence estimates and eight colour estimates fell inside the calibration range — *"being inside the calibration range does not necessarily mean that an estimate is accurate."*', zh: '濃度均方根誤差，以 µM 計：**螢光約 0.0319 µM，顏色約 0.0483 µM**。螢光有五個、顏色有八個估計值落在校正範圍內——*「落在校正範圍內，並不必然代表那個估計是準確的。」*' }]
          ]) +
          h.h3({ en: 'The three choices that make this a model rather than a plot', zh: '讓這件事成為一個模型、而不是一張圖的三個選擇' }) +
          h.cards([
            { chips: [{ t: { en: 'held out by run', zh: '按實驗整組保留' }, k: 'g' }],
              h: { en: 'Two whole runs, not a random split', zh: '保留兩整組實驗，不是隨機切分' },
              p: { en: 'A random split of 30 measurements would have put the same run on both sides of the line and flattered the fit. Holding out complete runs is the split that matches where the variance actually lives, which the rest of the wiki demonstrates is **between runs.**', zh: '把 30 個測值隨機切分，會讓同一組實驗同時出現在線的兩邊，使擬合看起來更好。整組保留實驗，才是與「變異真正住在哪裡」相符的切分方式；而 wiki 的其他部分已經證明，變異住在**實驗之間。**' } },
            { chips: [{ t: { en: 'error in µM', zh: '誤差以 µM 計' }, k: 'b' }],
              h: { en: 'Reported in the unit a user cares about', zh: '以使用者真正在意的單位報告' },
              p: { en: 'RMSE is given in concentration units rather than signal units, and **every numerical prediction is included, even those outside the calibration range**, *"so that unsuccessful predictions were not hidden."* One 0.1 µM validation sample came back as about 0.246 µM on colour, and because RMSE squares errors they point out that this single miss drives the colour figure.', zh: '均方根誤差是以濃度單位、而不是訊號單位給出的，而且**每一個數值預測都被納入，包括落在校正範圍之外的那些**，*「以免不成功的預測被藏起來」*。有一個 0.1 µM 的驗證樣品在顏色上被估成約 0.246 µM；而由於均方根誤差會把誤差平方，他們指出這一次失手就主導了顏色那個數字。' } },
            { chips: [{ t: { en: 'self-audit', zh: '自我稽核' }, k: 'r' }],
              h: { en: 'They say when the held-out set stopped being held out', zh: '他們說出「保留集從何時起不再是保留集」' },
              p: { en: 'An exploratory check swapped one calibration run for another: the original selection was better for colour, the alternative better for fluorescence, neither better for both, so the original grouping was kept. Then the sentence almost nobody writes: *"The validation measurements were excluded from equation fitting, but their results were examined during this comparison. They therefore no longer represent a completely untouched final assessment."*', zh: '一次探索性的檢查把一組校正實驗換成另一組：原本的選擇對顏色較好，替代的選擇對螢光較好，沒有一個對兩者都好，於是保留原本的分組。接著是幾乎沒人會寫的那句話：*「那些驗證測值並未被用於擬合方程式，但在這次比較中我們看過了它們的結果。因此它們已經不再是一份完全未被動過的最終評估。」*' } }
          ], 'g3') +
          h.h3({ en: 'The statistics around the fit, and the modelling behind the extraction hardware', zh: '圍繞這條擬合線的統計，以及萃取硬體背後的建模' }) +
          h.ul([
            { en: 'On the results page the analysis is **paired within runs** wherever a comparison is made: treatment minus its matching control, two-sided paired *t*-tests at about 1 ppb, CV to compare variation relative to mean signal, and an exploratory mean-control-plus-3-SD threshold. P-values are published **unadjusted for the three readout comparisons and labelled exploratory.**', zh: '在結果頁上，只要做比較，分析就是**在實驗內配對的**：處理值減去它的配對對照、約 1 ppb 處的雙尾配對 *t* 檢定、用變異係數比較相對於平均訊號的變異，以及一個「對照平均加三個標準差」的探索性門檻。P 值是**未針對三個讀值比較作校正而公開的，並標明為探索性。**' },
            { en: 'The imaging method is audited rather than assumed: **reference intensity ranges are published** (white tile green channel 159.061–183.030; box background red channel 21.133–27.853 for pellets and 18.183–29.148 for culture), and from control to 5 µM **sample fluorescence moved 4.86–10.47× while the reference moved only −15.47 to +14.74 %.** Raw pellet green-channel intensity fell at 5 µM **in all five runs**, with treatments and controls sharing one white-tile reference, so the colour difference existed before normalisation.', zh: '成像方法是被稽核的、而不是被假設的：**參考區強度範圍是公開的**（白磚綠通道 159.061–183.030；暗箱背景紅通道，沉澱為 21.133–27.853、培養液為 18.183–29.148），而從對照到 5 µM，**樣品螢光變動 4.86–10.47 倍，參考區只變動 −15.47 到 +14.74%。**沉澱的原始綠通道強度在 5 µM 時**於五組實驗中全部下降**，而處理組與對照組共用同一塊白磚參考，所以顏色差異在正規化之前就已存在。' },
            { en: 'The extraction hardware carries its own dry-lab work: **PHREEQC** speciation for a thiol-bound mercury system gave an aqueous total-mercury fraction of **65.47 % with L-cysteine**; a kinetic model predicted **96.67 % MeHg conversion** at 9.615 mW/cm² and 192.63 s residence, and **98.12 %** over a whole 10 mL batch; a Catalase stage brought modelled residual peroxide below 0.5 mg/L after 300 s; and **nine OpenFOAM cases** across three channel geometries and three mesh resolutions put the finest straight-channel pressure drop at **3.538 Pa, within 0.49 % of the 3.556 Pa analytical reference.**', zh: '萃取硬體有自己的乾式工作：對硫醇結合汞系統的 **PHREEQC** 物種計算，給出使用 L-cysteine 時水相總汞比例 **65.47%**；一個動力學模型在 9.615 mW/cm² 與 192.63 秒滯留時間下預測 **96.67% 的甲基汞轉換率**，而整個 10 mL 批次則是 **98.12%**；Catalase 階段使模型中的殘餘過氧化氫在 300 秒後低於 0.5 mg/L；而橫跨三種流道幾何與三種網格密度的**九個 OpenFOAM 案例**，把最細網格直流道的壓降算成 **3.538 Pa，與 3.556 Pa 的解析參考值相差 0.49% 以內。**' },
            { en: 'A **Route 1 model** follows mercury from extracellular chloride complexes through uptake to reporter maturation: at 0.10 M chloride the calculated neutral HgCl₂ fraction is **41.39 %**, and mixing the extract 1:1 with standard LBK gives about 0.136 M chloride and **30.8 %** neutral. Letting the chloride-bound reservoir replenish neutral mercury as uptake proceeds raises the predicted readout from **4,535 ADC to about 5,114 ADC** — and the conclusion drawn is a documentation requirement, not a performance claim: extraction volume, salt concentration and assay mixing ratio belong in the same preparation record.', zh: '一個**Route 1 模型**追蹤汞從胞外氯錯合物、經攝入、到報告子成熟：在 0.10 M 氯離子下，計算出的中性 HgCl₂ 比例是 **41.39%**；把萃取液與標準 LBK 以 1:1 混合後，氯離子約 0.136 M、中性比例 **30.8%**。若讓結合氯的那個庫隨攝入進行而補回中性汞，預測讀值會從 **4,535 ADC 升到約 5,114 ADC**——而他們從中得出的結論是一個文件紀錄要求，不是一個效能主張：萃取體積、鹽濃度與分析混合比例，應該寫在同一份製備紀錄裡。' }
          ]) +
          h.note({
            en: '**The limitations are written as properties of the model.** The fitted lines are preliminary calibration relationships: restricted to four-hour pellet data between 0.005 and 0.1 µM, pooled so that run-to-run variation is not estimated, validated on two runs per readout, giving **point estimates with no uncertainty interval**, fitted on **rounded** signal values, and with the two readouts modelled separately and never combined. They also note that selecting and evaluating a model on the same cross-validation results produces optimistic estimates. And about the UV-AOP chemistry on the hardware side: *"Modelling and reactor design cannot substitute for these measurements."*',
            zh: '**那些限制是被寫成模型本身的性質的。**那兩條擬合線是初步的校正關係：限於 0.005 到 0.1 µM 之間的第四小時沉澱數據、彙總成一條所以實驗間變異沒有被估計、每種讀值只在兩組實驗上驗證、給出的是**沒有不確定區間的點估計**、用**四捨五入後**的訊號值擬合，而且兩種讀值分別建模、從未合併。他們也指出：用同一份交叉驗證結果去選模型又去評估模型，會得到偏樂觀的估計。而關於硬體那一側的 UV-AOP 化學：*「建模與反應器設計，不能取代這些量測。」*'
          }) +
          h.h4({ en: 'Five next analyses, specified rather than promised', zh: '五項下一步分析：被具體指定，而不是被承諾' }) +
          h.ul([
            { en: 'A **random-intercept model**, ΔS = A + b·log₁₀(c ÷ 0.005 µM) + u_r + ε, so between-run variation is estimated instead of pooled away.', zh: '一個**隨機截距模型**，ΔS = A + b·log₁₀(c ÷ 0.005 µM) + u_r + ε，讓實驗間變異被估計出來，而不是被彙總掉。' },
            { en: 'Inverse-calibration intervals for **the estimated concentration**, not for the fitted signal.', zh: '針對**估計濃度**、而不是針對擬合訊號的反向校正區間。' },
            { en: '**A known mercury standard measured in every run**, so a run-specific intercept can be derived.', zh: '**在每一組實驗中都量一個已知汞標準品**，以便推出該組專屬的截距。' },
            { en: '**Leave-one-run-out cross-validation across six folds**, with errors reported per run.', zh: '**六折的逐組保留交叉驗證**，並逐組報告誤差。' },
            { en: 'A four-parameter logistic comparison, if matched data across 0.001–5 µM ever exist.', zh: '若有 0.001–5 µM 的配對數據，就與四參數邏吉斯模型比較。' }
          ])
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 'j-hw',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: 'Two units, nine versions, and a column for what is still proposed', zh: '兩個單元、九個版本，以及一欄「還只是提議」' },
        lede: {
          en: 'An Extraction Unit takes an environmental matrix to an assay-ready sample; a Detection Unit takes reporter output to a digital readout. The wiki is unusually clear about which versions were built and tested and which are CAD, firmware intentions or product direction.',
          zh: '萃取單元把環境基質變成可供分析的樣品；偵測單元把報告子輸出變成數位讀值。這個 wiki 對「哪些版本真的做出來並測過、哪些只是 CAD、固件意圖或產品方向」說得異常清楚。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Version', zh: '版本' }, w: '20%' },
              { t: { en: 'What exists and what it showed', zh: '存在的東西，以及它顯示了什麼' } },
              { t: { en: 'What the wiki says is not established', zh: 'wiki 自己說還沒確立的事' }, w: '28%' }
            ],
            rows: [
              [{ en: '**Imaging box** (phone)', zh: '**成像暗箱**（手機）' },
               { en: '3D-printed enclosure holding phone and tube in fixed geometry, BP570 excitation and BP610 emission (20 nm FWHM, OD 5–6 blocking), green lamp chosen empirically after white illumination washed the pellet out. **All published fluorescence data were collected with it.**', zh: '3D 列印外殼以固定幾何夾持手機與試管，BP570 激發與 BP610 發射濾片（20 nm FWHM、OD 5–6 阻擋），在白光把沉澱洗掉之後以經驗選了綠色燈光。**所有公開的螢光數據都是用它收集的。**' },
               { en: 'No built-in light source, signals are relative to a background reference rather than calibrated, and results compare only **within one imaging session**; never run against a calibrated fluorometer. The lamp\'s emission spectrum was never measured.', zh: '沒有內建光源、訊號是相對於背景參考而非經校正的，而且結果只能**在同一次成像作業內**比較；從未與經校正的螢光計對跑過。那盞燈的發射光譜從未被量測。' }],
              [{ en: '**Detection V1.0**', zh: '**偵測單元 V1.0**' },
               { en: 'Laser-cut black acrylic, white LED, AS7343 14-channel sensor, TFT screen, glued acrylic cuvette, detector at 90° to the source. Distinguished coloured-paper standards.', zh: '雷射切割黑色壓克力、白光 LED、AS7343 十四通道感測器、TFT 螢幕、黏合的壓克力比色槽，偵測器與光源成 90°。能分辨彩色紙標準片。' },
               { en: '**Panel seams admitted ambient light** and the glued cuvettes leaked, were hard to clean and needed large volumes. Both failures are published as the reason for V2.0.', zh: '**面板接縫會漏進環境光**，黏合比色槽會漏液、難清洗、且需要大體積。兩個失效都被公開寫成 V2.0 的理由。' }],
              [{ en: '**Detection V2.0**', zh: '**偵測單元 V2.0**' },
               { en: 'Single-body opaque 3D print with a recessed light-trapping lid, internal optical rails, interchangeable filter slots. The optical finding: a **580 nm LED emits out to about 630 nm**, so a 580 nm long-pass emission filter passed LED light straight into the 610 nm band. Switching to a **560 nm LED with matched 10 nm narrow-bandpass excitation and a 610/10 emission filter** gave **15,844 against 11,469 ADC counts** on the same culture.', zh: '單件式不透光 3D 列印外殼配內凹的擋光蓋、內部光學導軌、可更換濾片槽。那個光學發現是：**580 nm LED 的發射一直延伸到約 630 nm**，所以 580 nm 長波通發射濾片會讓 LED 光直接進入 610 nm 的偵測帶。改成**560 nm LED 搭配匹配的 10 nm 窄帶通激發濾片與 610/10 發射濾片**後，在同一培養物上給出 **15,844 對 11,469 ADC 計數**。' },
               { en: 'A strongly fluorescent three-day culture still gave only a weak reading, which is what motivated the detector change rather than any claim that V2.0 worked.', zh: '一個螢光很強的三日培養物仍然只給出微弱讀值——這才是促成更換偵測器的原因，而不是任何「V2.0 可行」的主張。' }],
              [{ en: '**Detection V3.0**', zh: '**偵測單元 V3.0**' },
               { en: 'The functional prototype: **Hamamatsu C12880 miniature spectrometer** (288 pixels, 340–850 nm, 12 nm typical FWHM), two ESP32-S3-N16R8, local TFT, web interface with logging, and a **dual-height adaptor for standard 1.5 mL tubes** so the user can place either the pellet or the liquid in the optical path. Tested three ways: reporter dilution **R² = 0.9998** (2,560 → 15,844 ADC), Hg²⁺ pellets **2,567 → 24,367 ADC, R² = 0.9898** with 0.03 µM reading 5,054 against a 2,567 control, and uncentrifuged culture **2,593 → 2,805 ADC, R² = 0.9524.**', zh: '可運作的原型：**Hamamatsu C12880 微型光譜儀**（288 像素、340–850 nm、典型 12 nm FWHM）、兩顆 ESP32-S3-N16R8、本機 TFT、帶記錄功能的網頁介面，以及一個**供標準 1.5 mL 試管使用的雙高度轉接件**，讓使用者可以把沉澱或液體其中之一放進光路。測了三種：報告子稀釋 **R² = 0.9998**（2,560 → 15,844 ADC）、Hg²⁺ 沉澱 **2,567 → 24,367 ADC、R² = 0.9898**，其中 0.03 µM 讀到 5,054、對照 2,567；以及未離心培養液 **2,593 → 2,805 ADC、R² = 0.9524。**' },
               { en: 'Output is **raw pixel indices and ADC counts with no wavelength calibration**; the reported component cost is about **USD 350 against a USD 40 target raised in consultation**, with the priced bill of materials still pending. No detection or quantification limit is claimed for the integrated system.', zh: '輸出是**未經波長校正的原始像素索引與 ADC 計數**；報告的零件成本約 **350 美元，而諮詢中提出的目標是 40 美元**，而詳列價格的材料表仍待完成。對整合系統並未主張任何偵測或定量極限。' }],
              [{ en: '**Detection V4.0**', zh: '**偵測單元 V4.0**' },
               { en: 'A red/yellow/green operational-status indicator in firmware and a reinforced casing, both added after on-site trials asked for them.', zh: '固件中的紅／黃／綠運作狀態指示，以及加強過的外殼——兩者都是現場試用提出要求後才加上的。' },
               { en: 'Product direction, explicitly: *"experimental results on this page refer to V3.0"*, and the proposed magnetic blocks **have not yet demonstrated improved maintenance or usability.**', zh: '明確地只是產品方向：*「本頁的實驗結果指的是 V3.0」*，而提議中的磁吸模塊**還沒有證明能改善維護性或可用性。**' }],
              [{ en: '**Extraction V1.0**', zh: '**萃取單元 V1.0**' },
               { en: 'A manual two-stage kit: 2 µm pre-filter ahead of a 0.45 µm membrane, syringes and Luer-lock lines, taken to agricultural and aquaculture users to clarify muddy soil extracts and surface water.', zh: '手動兩段式套件：0.45 µm 膜之前先接 2 µm 預濾膜，配上針筒與 Luer 接頭管路，並帶給農業與水產業使用者，去澄清泥濘的土壤萃取液與地表水。' },
               { en: 'Users reported **excessive syringe force, too many sequential manual steps, and liquid retained in the lines needing an extra air purge.** The feedback is published as experienced, not softened.', zh: '使用者回報**針筒推力過大、連續的手動步驟太多，以及管路中殘留液體需要額外的排氣步驟。**這些回饋被照實公開，沒有被淡化。' }],
              [{ en: '**Extraction V2.0**', zh: '**萃取單元 V2.0**' },
               { en: 'Push-button peristaltic pumping, electronic direction control, narrower silicone tubing, compact inline filter manifolds — one button in place of the manual sequence.', zh: '按鈕式蠕動泵送、電子方向控制、更細的矽膠管、精簡的直列濾片歧管——以一個按鈕取代整串手動操作。' },
               { en: 'The wiki\'s own verdict: the change *"addressed the reported difficulties, although **complete-workflow usability remains to be evaluated**."*', zh: 'wiki 自己的結論：這些改動*「處理了被回報的困難，但**完整流程的可用性仍待評估**」*。' }],
              [{ en: '**Extraction V3.0**', zh: '**萃取單元 V3.0**' },
               { en: 'Independent water and soil modules with load-cell dosing, encoder stirring feedback and **System Blank and Water Control firmware modes** for carry-over checks. Numbers: the 2 µm pre-filter raised 300 s filtrate from **5.67 to 7.18 mL (+26.5 %)** and cut time-to-5 mL from 244 to 217 s; retained volume about **0.30 mL, roughly 95 % recovery**; **all 20 automated 10 mL deliveries landed inside a 9.5–10.5 mL band at CV 1.95 %, against 7.41 % over 10 manual syringe runs**; the soil module completed **19 of 20 runs** with every completed run inside **±2 %** of its liquid-to-solid target; and eight deliberate fault injections were logged with detection counts and times.', zh: '獨立的水模組與土壤模組，配備荷重元計量、編碼器攪拌回饋，以及用於殘留檢查的**System Blank 與 Water Control 固件模式**。數字方面：2 µm 預濾膜使 300 秒濾液量從 **5.67 升到 7.18 mL（+26.5%）**，並把集滿 5 mL 的時間從 244 秒縮到 217 秒；殘留體積約 **0.30 mL、回收率約 95%**；**20 次自動的 10 mL 輸送全部落在 9.5–10.5 mL 區間內，變異係數 1.95%，而 10 次手動針筒操作是 7.41%**；土壤模組**完成 20 次中的 19 次**，每一次完成的運行其液固比都在目標的 **±2%** 以內；另有八項刻意注入的故障，連同偵測次數與時間一併記錄。' },
               { en: 'Run 13 stopped at the E5 weighing check and is reported as such. Extraction recovery, treatment effectiveness and biosensor compatibility are all listed as **requiring validation before the complete workflow can support reliable measurements.**', zh: 'Run 13 在 E5 稱重檢查處停止，並照實報告。萃取回收率、處理有效性與與生物感測器的相容性，全部被列為**在完整流程能支撐可靠量測之前仍須驗證。**' }],
              [{ en: '**UV-AOP module**', zh: '**UV-AOP 模組**' },
               { en: 'Two reactor architectures designed in parallel for the same chemical task: **Track A**, a stirred quartz tube on a load cell with a five-LED C-ring and interlocked door switches; **Track B**, a millifluidic cassette with a 2.5 × 1.0 mm channel 1.22 m long, 3.05 mL volume under a quartz window, modelled minimum-to-maximum light ratio **92.2 %** across the 1 mm layer.', zh: '為同一項化學任務並行設計的兩種反應器架構：**Track A** 是放在荷重元上的攪拌石英管，配五顆 LED 的 C 形環與連動門開關；**Track B** 是毫流道卡匣，流道 2.5 × 1.0 mm、長 1.22 m、體積 3.05 mL，位於石英視窗之下，模型算出 1 mm 液層的最小／最大光強比為 **92.2%。**' },
               { en: 'Marked with a development boundary note: it **remains in active development and dry-lab modelling**, with oxidative conversion still requiring experimental validation on organic-rich real samples. UV-AOP components account for **over 55 % of extraction hardware costs.**', zh: '附有一條開發邊界註記：它**仍在積極開發與乾式建模階段**，氧化轉換仍需在富含有機物的真實樣品上做實驗驗證。UV-AOP 零件佔**萃取硬體成本的 55% 以上。**' }]
            ],
            min: 900,
            source: { en: 'Read from the team\'s Hardware and Engineering pages, including the Extraction Unit partial. The built-against-proposed split is theirs; the table is ours.', zh: '讀自該隊 Hardware 與 Engineering 頁，包含萃取單元那一段。「已做出」對「仍是提議」的區分是他們自己的；表格是我們整理的。' }
          }) +
          h.h3({ en: 'The user-testing loop, including the part that is not an endorsement', zh: '使用者測試的迴圈，包括其中不算背書的那一部分' }) +
          h.ul([
            { en: 'The loop is published as a three-part shape — **what users experienced, what was changed, and what still requires evaluation** — and the third part is never dropped.', zh: '這個迴圈是以三段式的形狀公開的——**使用者經歷了什麼、改了什麼、以及什麼仍待評估**——而第三段從來沒有被省略。' },
            { en: 'Detection Unit V3.0 went to **Blue Girl Organic Farm and Yeung Marine Products Limited**, where users loaded demonstration samples and operated the display. The scoping is explicit: **GM bacteria were not taken outside the laboratory**, so these trials evaluated handling and on-site operation, *"rather than complete mercury-biosensor testing."* The demonstrated loading and readout sequence took under five minutes, **excluding sample preparation and the biological response time.**', zh: '偵測單元 V3.0 被帶到 **Blue Girl Organic Farm 與 Yeung Marine Products Limited**，使用者在那裡裝載示範樣品並操作顯示介面。範圍標得很明確：**基改菌從未被帶出實驗室**，所以這些試用評估的是操作與現場使用，*「而不是完整的汞生物感測器測試」*。被示範的裝載與讀取流程耗時不到五分鐘，**不含樣品製備與生物反應所需的時間。**' },
            { en: 'A second public survey combined street interviews with hands-on demonstrations for **195 participants: 84.1 % found the digital readout easy to understand and 87.7 % reported increased confidence that ordinary people could help check soil and water safety.** Both figures are labelled as **perceived readability and confidence, not analytical accuracy.**', zh: '第二次公眾調查把街頭訪談與動手示範結合，共 **195 位參與者：84.1% 認為數位讀值容易理解，87.7% 表示更有信心普通人也能參與檢查土壤與水的安全。**兩個數字都被標明是**感受到的可讀性與信心，不是分析準確度。**' },
            { en: 'The interface lesson is the one worth stealing: a **green operational LED means the device is ready, not that the sample is safe**, so **device status, fluorescence reading, calibrated concentration estimate and safety judgement** are kept as four separate things on the display and in the text.', zh: '介面上的那個教訓最值得抄：**綠色運作指示燈代表裝置就緒，不代表樣品安全**，所以**裝置狀態、螢光讀值、經校正的濃度估計與安全判斷**在顯示介面與文字中都被當成四件分開的事。' },
            { en: 'And the adoption finding that argues against their own product: commercial farms wanted numerical data, while **More Happy Farm had limited interest in operating a separate device at all**, which pushed them towards shared equipment and service-based testing rather than one box per farm.', zh: '還有一個與他們自己的產品相左的採用發現：商業農場想要數值數據，而 **More Happy Farm 對操作一台獨立裝置幾乎沒有興趣**，這把他們推向共用設備與服務式檢測，而不是「一座農場一台機器」。' }
          ]) +
          h.note({
            en: 'The hardware-side engineering cycle we would hold up as the model is **Wet Lab Cycle 9**, which is not a hardware cycle at all. The wet lab wrote its own complaints out as a requirement list — measurement convenience, standardised output, optical sensitivity, sample preparation — and handed it over, including the admission that *"a result is only meaningful within one sitting"* because every comparison depended on a reference measured in the same session. The original plan had been for the wet lab to build its own integrated fluorometer; they say plainly that handing the optical problem over produced a better match to the requirements than a second camera box would have.',
            zh: '我們會拿來當範本的硬體側工程循環是 **Wet Lab Cycle 9**，而它根本不是一個硬體循環。濕式實驗把自己的抱怨寫成一份需求清單——量測便利性、標準化輸出、光學靈敏度、樣品製備——然後交出去；其中包含這個承認：*「一個結果只在同一次作業之內才有意義」*，因為每一次比較都依賴同一次作業中量到的參考值。原本的計畫是濕式實驗自己做一台整合式螢光計；他們直白地說，把光學問題交出去，比再做一個相機暗箱更符合需求。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'j-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, in their own words', zh: '用他們自己的話說，哪些還沒解決' },
        lede: {
          en: 'Each item below is something the wiki itself leaves open, not something we noticed was missing.',
          zh: '下面每一項都是這個 wiki 自己留著未決的事，而不是我們發現它漏掉的事。'
        },
        body:
          h.ul([
            { en: '**No field sample was ever assayed.** The mercury in every soil test was added by the team under contained laboratory conditions, the soil-extract treatment labels are **calculated rather than measured** and are expected to overestimate exposure because some mercury stays bound to soil, and extraction recovery is unknown — so the extracts show **matrix tolerance, not soil detection.**', zh: '**從未測過任何田間樣品。**每個土壤測試中的汞都是該隊在圍堵的實驗室條件下加入的，土壤萃取液的處理標示是**算出來的、不是量出來的**，而且預期會高估實際暴露，因為有部分汞仍結合在土壤上；萃取回收率也不明——所以那些萃取液展示的是**基質耐受性，不是土壤偵測。**' },
            { en: '**The detection limit is not established.** 1 ppb is the lowest concentration tested, the exploratory threshold was fitted and evaluated on the same five runs, and a lower 0.001 µM treatment of about 0.2 ppb showed small responses in some earlier runs but **had insufficient replication for a reliable claim.**', zh: '**偵測極限尚未確立。**1 ppb 是測過的最低濃度，那個探索性門檻是在同樣五組實驗上擬合、也在同樣五組上評估的；更低的 0.001 µM（約 0.2 ppb）處理在一些早期實驗中有微小反應，但**重複次數不足以支撐可靠的主張。**' },
            { en: '**The visual readout still needs a centrifuge**, which is the gap between the prototype and the stated aim of an equipment-free warning. Pellet ranking by eye worked below about 1 µM and failed above it; **unspun culture could be told from its matched control by eye only above about 0.5 µM, and only side by side.**', zh: '**目視讀值仍然需要離心機**，這就是原型與「免設備警示」這個宣稱目標之間的落差。肉眼對沉澱的排序在約 1 µM 以下有效、在那之上失效；**未離心的培養液只有在約 0.5 µM 以上、而且只有並排比較時，才能用肉眼與配對對照分辨出來。**' },
            { en: '**The upper range is the weak part, not the strong one.** From 1 to 5 µM the signal increases are small against between-run variation and higher concentrations did not always give higher signals within a run, so the middle of the range is where calibration should live.', zh: '**高濃度端是弱的那一段，不是強的那一段。**從 1 到 5 µM，訊號的增幅相對於實驗間變異來說很小，而且在單一組實驗內，較高濃度並不總是給出較高訊號——所以校正該落在範圍的中段。' },
            { en: '**Culture fluorescence, the readout that would remove the centrifuge, is the one that fails at the low end:** at about 1 ppb it rose above its control in only one of five runs, p = 0.1396, and it clears its exploratory threshold only at about 100 ppb.', zh: '**培養液螢光——那個能把離心機拿掉的讀值——正是在低濃度端失敗的那一個：**在約 1 ppb 下，它在五組實驗中只有一組高過對照，p = 0.1396；而它要到約 100 ppb 才越過自己的探索性門檻。' },
            { en: '**Selectivity was tested one metal at a time.** Pb, Zn and Cd at 1 µM each, which *"does not establish whether these metals interfere with sensing when present alongside mercury."* Independent replication is limited, particularly at five hours.', zh: '**選擇性是一次測一種金屬的。**Pb、Zn、Cd 各在 1 µM 下測試，而這*「無法確立這些金屬在與汞同時存在時是否會干擾感測」*。獨立重複有限，第五小時尤其如此。' },
            { en: '**The bead work is qualitative and unreplicated**, scored by eye, and **one bead series produced no colour at all** — which they print.', zh: '**海藻酸鈣珠的部分是定性且未重複的**，以肉眼評分，而且**其中一組珠完全沒有顯色**——這一點他們印出來了。' },
            { en: '**The model gives point estimates only.** No uncertainty interval for an unknown sample, run-to-run variation not separately estimated, fitting inputs rounded, two validation runs per readout, and the validation set **examined during a sensitivity check**, so it no longer represents an untouched final assessment.', zh: '**模型只給點估計。**對未知樣品沒有不確定區間、實驗間變異沒有被分開估計、擬合輸入是四捨五入的、每種讀值只有兩組驗證實驗，而且驗證集**在一次敏感度檢查中被看過**，所以它已不再是一份未被動過的最終評估。' },
            { en: '**Methylmercury was never handled.** School laboratory safety constraints prevented methylmercury-standard experiments, and DSD advised restricting bench work to inorganic Hg²⁺ — so the L-cysteine and UV-AOP route **has a chemistry model and two reactor designs but no experimental conversion, recovery, residual-oxidant or biosensor-compatibility data.**', zh: '**他們從未處理甲基汞。**學校實驗室的安全限制使他們無法做甲基汞標準品實驗，而渠務署也建議把實驗檯工作限制在無機 Hg²⁺——所以 L-cysteine 與 UV-AOP 那條路線**有化學模型與兩種反應器設計，但沒有任何關於轉換率、回收率、殘餘氧化劑或生物感測器相容性的實驗數據。**' },
            { en: '**The device has no wavelength calibration**, so its output is raw pixel indices; atomic emission lamp calibration and absolute intensity calibration are listed as next steps. The **USD 350 bill of materials against a USD 40 stakeholder target** is unresolved, itemised pricing is pending, and the USD 5 per-run estimate *"depends on which preparation steps and consumables are included."*', zh: '**這台裝置沒有波長校正**，所以輸出是原始像素索引；原子發射燈校正與絕對強度校正被列為下一步。**350 美元的材料成本對上 40 美元的利害關係人目標**尚未解決、詳列價格仍待完成，而每次 5 美元的估計*「取決於納入了哪些製備步驟與消耗品」*。' },
            { en: '**The ECF20/pECF20 module is offered without characterisation.** It expresses in *E. coli*, but output was never measured against a matched construct lacking it, **no data were entered in the Registry, and no claim is made about signal gain.**', zh: '**ECF20／pECF20 模組是在沒有特性化的情況下提供的。**它在 *E. coli* 中會表達，但從未與缺少它的配對構築體比較輸出，**Registry 中沒有輸入任何數據，也沒有對訊號增益做任何主張。**' },
            { en: '**Containment is a plan, not a feature.** MerMAID remains a contained laboratory project; the kill switch and automatic disinfection are written as what they **will** incorporate before any public testing, and sealed hardware compartments as what the hardware **will** feature.', zh: '**圍堵是一個計畫，不是一個已有的功能。**MerMAID 仍是一個在圍堵條件下的實驗室專案；自殺開關與自動消毒被寫成他們在任何公開測試之前**將會**納入的東西，而密封的硬體腔室則是硬體**將會**具備的特徵。' },
            { en: '**They did not do their own cloning**, and they say so: constructs were ordered as complete synthesised plasmids, reported as sequence-verified by the suppliers, in pKAN-IDT, pUC57-KAN and pKMV backbones.', zh: '**他們沒有自己做選殖**，而且把這點說出來：構築體是以完整合成質體訂購的，由供應商報告為已完成定序確認，骨架為 pKAN-IDT、pUC57-KAN 與 pKMV。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'j-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from HongKong-JSS', zh: '我們會從 HongKong-JSS 抄什麼' },
        body:
          h.ul([
            { en: '**Put the scope in the sentence that reports the number.** "1 ppb is the lowest concentration tested, not a validated detection limit" costs one clause and protects everyone who later cites the figure — including the team itself, next year.', zh: '**把範圍寫進報告那個數字的同一句話裡。**「1 ppb 是測過的最低濃度，不是已驗證的偵測極限」只多一個子句，卻保護了之後每一個引用這個數字的人——包括明年的他們自己。' },
            { en: '**Define a biological replicate in writing, and say what does not count as one.** Timepoints and ImageJ regions from the same run are technical sampling. Writing that down is what makes 51 within-run comparisons an honest number instead of an inflated one.', zh: '**用文字定義什麼是一個生物重複，並說明什麼不算。**同一組實驗中的不同時間點與 ImageJ 區域屬於技術取樣。把這件事寫下來，才讓「51 個實驗內比較」成為一個誠實的數字，而不是一個被充大的數字。' },
            { en: '**Publish a run table with each run\'s role**, including the runs you excluded and why, and keep them in the raw record: *"We did not assume that unusual results proved a particular handling error."*', zh: '**公開一張標明每組實驗角色的表**，包括你排除掉的那幾組與排除的理由，並把它們留在原始紀錄裡：*「我們沒有假設異常結果就證明了某個特定的操作失誤。」*' },
            { en: '**Measure every readout on the same cultures.** Then the comparison is between measurement formats, and a disagreement between them is a measurement question rather than an unanswerable one.', zh: '**在同一批培養物上量每一種讀值。**這樣比較的就是量測格式之間的差別；而它們之間若出現不一致，那會是一個量測問題，而不是一個無法回答的問題。' },
            { en: '**Choose your readout on three measures and print the ones it loses.** Fold response, between-run CV and a threshold disagreed here, and publishing the disagreement is what turns a preference into a decision.', zh: '**用三個指標選你的讀值，並把它輸掉的那些印出來。**在這裡，倍數反應、實驗間變異係數與門檻三者彼此不一致；而把這份不一致公開，才讓一個偏好變成一個決定。' },
            { en: '**Audit your own instrument.** Publish the reference intensity range, show that the sample moved far more than the reference, and show that the raw signal moved **before** normalisation. Then say that dividing by a reference is not background subtraction.', zh: '**稽核你自己的儀器。**公開參考區強度的範圍、顯示樣品的變動遠大於參考區的變動，並顯示原始訊號在正規化**之前**就已經變動了。然後說清楚：除以參考值不是背景扣除。' },
            { en: '**Hold out whole runs, not rows.** A random split hides exactly the variance you most need to estimate, and run-level holdout is available to any team that labels its runs.', zh: '**整組實驗地保留，不要逐列保留。**隨機切分恰好會藏起你最需要估計的那種變異；而只要一支隊伍替自己的實驗編號，按實驗保留就是做得到的。' },
            { en: '**Report prediction error in the unit the user cares about, and include the predictions that failed.** RMSE in µM, every numerical estimate included even when it falls outside the calibration range, *"so that unsuccessful predictions were not hidden."*', zh: '**以使用者在意的單位報告預測誤差，並把失敗的預測也納入。**以 µM 計的均方根誤差、每一個數值估計都納入，即使它落在校正範圍之外，*「以免不成功的預測被藏起來」*。' },
            { en: '**Say when your held-out set stopped being held out.** Looking at the validation runs during a sensitivity check is a normal thing to do and a fatal thing to hide. One sentence fixes it.', zh: '**說出你的保留集從何時起不再是保留集。**在敏感度檢查中看了驗證組，是很正常的事，但藏起來就會致命。一句話就能把它處理掉。' },
            { en: '**Name the untested assumption when a route dies.** "A DNA recognition motif was moved into an RNA regulatory structure without establishing that the behaviour transfers" is reusable by a team working on something else entirely.', zh: '**當一條路線死掉時，指名那個未經測試的假設。**「一個 DNA 辨識序列被搬進 RNA 調控結構，卻沒有先確立那個行為會跟著轉移」這句話，連一支在做完全不同題目的隊伍都能拿去用。' },
            { en: '**Establish the working range in your own host before blaming the construct.** They tested to 15 µM instead of trusting a literature ceiling, and called 5 µM an operational choice rather than a tolerance limit.', zh: '**在怪構築體之前，先在自己的宿主裡定出工作範圍。**他們一路測到 15 µM，而不是相信文獻給的上限；而且把 5 µM 稱為一個操作上的選擇，不是耐受極限。' },
            { en: '**Write your wet-lab complaints as a hardware requirement list.** Cycle 9 is a wet-lab cycle whose deliverable is a specification, and the honesty inside it — a result is only meaningful within one sitting — is what made the specification correct.', zh: '**把你濕式實驗的抱怨寫成一份硬體需求清單。**Cycle 9 是一個交付物為「規格」的濕式循環；而它內部的那份誠實——一個結果只在同一次作業之內才有意義——正是讓那份規格正確的原因。' },
            { en: '**Separate device status from sample safety**, on the display and in the text. A green LED means the instrument is ready. Four separate things: status, reading, estimate, judgement.', zh: '**把裝置狀態與樣品安全分開**，在顯示介面上與文字裡都要分開。綠燈代表儀器就緒。四件分開的事：狀態、讀值、估計、判斷。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the thirteen items above, and the judgement that the claim-scoping on this wiki — the limitation written inside the claim rather than collected at the bottom of the page — is the most transferable practice in the High School division this year. Everything else is the team\'s own, read from [2026.igem.wiki/hongkong-jss](https://2026.igem.wiki/hongkong-jss/).',
            zh: '標示為我們的看法：上面十三點，以及「這個 wiki 的主張範圍標註方式——把限制寫在主張裡面，而不是收集在頁面底部——是今年高中部最可轉移的做法」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/hongkong-jss](https://2026.igem.wiki/hongkong-jss/)。'
          })
      });

      return out;
    }
  };
})(window);
