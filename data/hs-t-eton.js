/* Eton-College-UK — ProteaSign. Top 10 High School, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/eton-college-uk/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Standardise the reagents, then redo it', zh: '先把試劑標準化，然後重做一次' },
        s: { en: 'MCH stock remade: the graduated pipette did not account for the volume below its 2.0 mL mark', zh: 'MCH 原液重配：那支刻度吸管沒有計入 2.0 mL 刻度以下的體積' }, tone: 'b' },
      { l: { en: 'No monolayer; find out why', zh: '單分子層沒長成；先查出原因' },
        s: { en: 'Electrodes proven alive on ferricyanide; 30–50 µL was evaporating. A resin cylinder plus tape won', zh: '以鐵氰化物證明電極是好的；30–50 µL 在蒸散。樹脂圓筒加膠帶勝出' } },
      { l: { en: 'Swap the diluent, keep the Fc', zh: '換掉稀釋劑，留住二茂鐵' },
        s: { en: 'The MB peptide outcompetes C6-Fc for gold, so C6-Fc became the diluent, 0.5 → 3.5 mM', zh: '帶亞甲藍的肽在金表面的親和力勝過 C6-Fc，於是改用 C6-Fc 當稀釋劑，0.5→3.5 mM' }, tone: 'a' },
      { l: { en: 'Fouling control before enzyme', zh: '先做汙損對照，再加酵素' },
        s: { en: '0.1 % BSA in HEPES for 60 min: an overall drop with no pattern, rising again after 15 min', zh: '0.1% 牛血清白蛋白的 HEPES 跑 60 分鐘：整體下降但沒有規律，15 分鐘後還回升' } },
      { l: { en: '200 nM, then 20 nM MMP-9', zh: '先 200 nM，再 20 nM MMP-9' },
        s: { en: 'MB peak 2.20 × 10⁻⁸ → 2.61 × 10⁻⁹ A, 88.1 % down; at 20 nM cleavable and control diverge', zh: '亞甲藍峰 2.20×10⁻⁸→2.61×10⁻⁹ A，下降 88.1%；在 20 nM 下可切與不可切出現分歧' }, tone: 'g' },
      { l: { en: 'In parallel at KCL: two constructs', zh: '同期在 KCL：兩個構築體' },
        s: { en: 'pES-01 expressed, purified, TEV cut read by Ni-NTA depletion; pDUAL never turned green', zh: 'pES-01 表達、純化，TEV 切割以 Ni-NTA 耗竭讀出；pDUAL 始終沒有變綠' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Train the substrate predictor', zh: '訓練受質預測器' },
        s: { en: '10,472 confirmed cleavage windows, 7 proteases; logistic regression plus a PSSM, combined', zh: '10,472 個已確認的切割窗口、7 種蛋白酶；邏輯斯迴歸加位置特異性計分矩陣，再合併' }, tone: 'v' },
      { l: { en: 'Let it rule against your own peptides', zh: '讓它判自己家的肽敗訴' },
        s: { en: 'Every MMP-targeted candidate scored a specificity margin at or below zero; only the elastase one separated', zh: '每一個瞄準 MMP 的候選肽，專一性邊際都在零或零以下；只有彈性蛋白酶那一個分得開' }, tone: 'r' },
      { l: { en: 'Solve cutting on a surface exactly', zh: '把表面上的切割精確解出來' },
        s: { en: 'Laplace transform, one parameter λ; the steady-state shortcut only holds near λ = 1', zh: '拉普拉斯轉換，只剩一個參數 λ；穩態近似只在 λ 接近 1 時才站得住' } },
      { l: { en: 'Six steps to a predicted peak', zh: '六步推出一個預測峰' },
        s: { en: 'Coverage, label distance, one probe, whole electrode, readout, kinetics; 15.9 nA when fresh', zh: '覆蓋率、標記距離、單一探針、整片電極、讀值、動力學；新電極為 15.9 nA' }, tone: 't' },
      { l: { en: 'Turn the peak into a concentration', zh: '把峰高換成濃度' },
        s: { en: '67,500 M⁻¹ s⁻¹ in solution × 0.20 surface efficiency = 13,500; 14 % cut healing, 52 % chronic', zh: '溶液中 67,500 M⁻¹ s⁻¹ × 表面效率 0.20 = 13,500；癒合中切 14%、慢性切 52%' }, tone: 'g' },
      { l: { en: 'Then publish the checks', zh: '然後把檢查結果公開' },
        s: { en: 'Ten automated tests, and every claim sorted into Checked, Flagged or Next to Measure', zh: '十項自動化測試，並把每個主張分進「已檢查」、「已標記」或「下一步要量」' }, tone: 'a' }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the predictor and Kridel chose the peptide', zh: '預測器與 Kridel 的數據選定了那條肽' }, up: true },
      { w: 4, d: 3, l: { en: 'one measured scan, laid over the prediction', zh: '一次量到的掃描，疊在預測上' } },
      { w: 4, d: 4, l: { en: 'surface efficiency 0.20 still waits on the bench', zh: '表面效率 0.20 仍在等實驗檯' }, up: true }
    ]
  };

  PD.pages['hs-eton'] = {
    label: { en: 'Eton-College-UK', zh: 'Eton-College-UK' },
    title: { en: 'Eton-College-UK — ProteaSign', zh: 'Eton-College-UK — ProteaSign' },
    render: function (h) {
      var t = team('eton');
      var out = h.teamhero(t, {
        h1: {
          en: 'Sort every claim your model makes into Checked, Flagged and Next to Measure — and ==write "partly by construction" when that is what the agreement is==.',
          zh: '把你的模型提出的每一個主張，分進「已檢查」、「已標記」與「下一步要量」——並且==當那個一致其實是自己設計出來的，就把「部分是由構造決定的」寫出來==。'
        },
        lede: {
          en: 'Ten days of bench work hosted at the University of Greenwich and King\'s College London got as far as an 88.1 % peak drop in 200 nM MMP-9 and a clear split between cleavable and control electrodes at 20 nM. A chronic wound is not told apart by what is in it but by what is happening in it: proteases outrunning their inhibitors. ProteaSign reads that directly: peptide probes tethered to a gold electrode carry a methylene blue label, MMP-9 cuts the probe, the label floats away, and the square-wave peak falls in proportion to the probes still intact. The page that earns this wiki its section below is called Where Models Meet the Lab: the team sorts every claim its models make into three columns and writes, of its own best-looking agreement, that it holds "partly by construction and from a single uncontrolled run". They were nominated for Best Village Project, Best Education and Best Integrated Human Practices in the High School division and won none of them; the Top 10 place is what they took home.',
          zh: '在格林威治大學與倫敦國王學院借用場地的十天實驗，做到了 200 nM MMP-9 下峰高掉 88.1%，以及 20 nM 下可切電極與對照電極明顯分歧。慢性傷口不是靠「裡面有什麼」分辨出來的，而是靠「裡面正在發生什麼」：蛋白酶跑贏了它的抑制劑。ProteaSign 直接讀這件事——繫在金電極上的肽探針帶著一個亞甲藍標記，MMP-9 把探針切斷，標記飄走，方波峰高就隨著還完整的探針數成比例下降。讓這個 wiki 在下面取得一節篇幅的那一頁叫做「模型與實驗相遇之處」：團隊把自己模型的每一個主張分進三個欄位，並對其中看起來最漂亮的那個一致寫下，它「部分是由構造決定的，而且只來自單一次沒有對照的實驗」。他們在高中組入圍了最佳村落專案、最佳教育與最佳整合人文實踐，三項都沒有得獎；他們帶回去的是前十名這個位置。'
        },
        chips: [
          { t: { en: 'MMP-9 by square-wave voltammetry', zh: '以方波伏安法量 MMP-9' }, k: 'b' },
          { t: { en: '4 working electrodes, read one at a time', zh: '4 個工作電極，一次讀一個' }, k: 't' },
          { t: { en: 'Checks published as pass or caveat', zh: '檢查結果以通過或有保留公開' }, k: 'a' },
          { t: { en: 'Greenwich and KCL, ten days', zh: '格林威治與 KCL，十天' }, k: 'g' },
          { t: { en: 'Ni-NTA depletion, not a cleavage assay', zh: 'Ni-NTA 耗竭，而非切割試驗' }, k: 'v' }
        ],
        stats: [
          { v: '10,472', l: { en: 'Confirmed cleavage windows training the substrate predictor', zh: '用來訓練受質預測器的已確認切割窗口數' } },
          { v: '7', l: { en: 'Proteases in the predictor\'s panel', zh: '預測器面板中的蛋白酶數' } },
          { v: '13,500 M⁻¹ s⁻¹', l: { en: 'Estimated rate at which MMP-9 cuts their tethered probes', zh: 'MMP-9 切斷其繫鏈探針的估計速率' } },
          { v: '10', l: { en: 'Automated tests checking each step of the SWV model', zh: '逐步檢查方波伏安模型的自動化測試數' } },
          { v: '88.1 %', l: { en: 'Drop in the methylene blue peak on incubation in 200 nM MMP-9', zh: '在 200 nM MMP-9 中培養後亞甲藍峰的下降幅度' } },
          { v: '20 nM', l: { en: 'Lowest MMP-9 at which cleavable and control electrodes diverged', zh: '可切電極與對照電極出現分歧的最低 MMP-9 濃度' } }
        ]
      });

      out += h.toc([
        { id: 'e-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'e-checks', t: { en: 'The lab checks', zh: '那張檢查表' } },
        { id: 'e-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'e-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'e-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'e-hw', t: { en: 'Hardware', zh: '硬體' } },
        { id: 'e-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'e-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'e-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Measure the activity, not the amount', zh: '量活性，不是量含量' },
        lede: {
          en: 'An immunoassay tells you how much enzyme is in the fluid. It does not tell you how much of it is cutting. And in a wound, cutting is the thing that is going wrong.',
          zh: '免疫分析告訴你液體裡有多少酵素，但沒告訴你其中有多少正在切——而在傷口裡，出問題的正是「切」這件事。'
        },
        body:
          h.p({
            en: 'In a healing wound there is a balance between proteases and their inhibitors, MMPs against TIMPs, that clears damaged extracellular matrix and lets cells migrate. In some non-healing wounds persistent inflammation breaks that balance: an excessive influx of immune cells drives sustained protease release with insufficient inhibition, so degradation outpaces repair. The team picked two targets on opposite sides of that imbalance. **Human neutrophil elastase (HNE)** is a neutrophil serine protease implicated in growth-factor degradation; **MMP-9** is a zinc-dependent gelatinase that cuts the collagen scaffold a wound has to rebuild on. HNE can also activate MMP-9, so the two amplify each other.',
            zh: '在一個會癒合的傷口裡，蛋白酶與其抑制劑之間是平衡的——MMP 對 TIMP——這個平衡清掉受損的細胞外基質，讓細胞可以遷移。在某些不癒合的傷口裡，持續的發炎把這個平衡打破：免疫細胞過量湧入，造成蛋白酶持續釋放而抑制不足，於是降解的速度超過修復。這支隊伍挑的兩個標的分別站在這個失衡的兩側。**人類嗜中性球彈性蛋白酶（HNE）**是一種嗜中性球絲胺酸蛋白酶，被認為會降解生長因子；**MMP-9** 是一種鋅依賴型膠原凝膠酶，切的是傷口必須倚賴來重建的膠原支架。HNE 還能活化 MMP-9，所以兩者會互相放大。'
          }) +
          h.p({
            en: 'What a wound clinic has instead: serial wound-area measurements judged against the "50 % area reduction at 4 weeks" rule, which is **retrospective**. The clinician learns a wound is failing after four weeks of treatment that did not work, and inter-observer variability between ruler and planimetry is real. Fluorescence imaging of bacterial load works, but it costs around **£7,500** and says nothing about whether the host\'s own proteolysis is destroying tissue. A swab or tissue culture takes **24 to 48 hours** and cannot separate colonisation from infection. The team say plainly that they went looking for a test aimed at the biochemistry of non-healing and could not find one.',
            zh: '傷口診所目前手上有的工具是：連續量傷口面積，並對照「四週縮小 50% 面積」這條規則，而這是**回溯性的**——臨床人員要在四週無效治療之後才知道傷口不會好，而且尺量與平面測量法之間的觀察者間差異是真的存在。螢光影像可以看細菌負荷，但一台大約要 **7,500 英鎊**，而且它對「宿主自己的蛋白水解是否正在破壞組織」完全無法說明。拭子或組織培養要 **24 到 48 小時**，而且分不出移生與感染。這支隊伍直接寫明：他們去找針對「不癒合背後的生化」的檢測，但找不到。'
          }) +
          h.flow({
            title: { en: 'Collect → Meter → Dilute → Read → Report', zh: '採集→定量→稀釋→讀值→回報' },
            sub: { en: 'The cartridge is built so that the geometry decides the numbers and the clinician decides nothing. Each stage below is the team\'s own dimension or volume.', zh: '這個卡匣的設計是讓幾何決定數字，讓臨床人員不必決定任何數字。下面每一階段的尺寸或體積都是該隊自己的數字。' },
            stages: [
              { label: { en: 'Collect', zh: '採集' }, sub: { en: 'Capillary tip on the wound', zh: '毛細管尖端貼在傷口上' }, tone: 'b',
                items: [{ en: 'the tube is deliberately over-filled, so nobody has to judge a volume', zh: '管子刻意裝超量，這樣沒有人需要判斷體積' }] },
              { label: { en: 'Meter', zh: '定量' }, sub: { en: '5 × 4 × 1 mm chamber = 20 µL', zh: '5×4×1 mm 腔室＝20 µL' }, tone: 't',
                items: [{ en: 'overflow spills into a neighbouring waste chamber holding a cheap cellulose pad', zh: '溢出的部分流進旁邊的廢液腔，裡面放一塊便宜的纖維素墊' }] },
              { label: { en: 'Dilute', zh: '稀釋' }, sub: { en: 'Red valve: 20 µL into ~180 µL HEPES', zh: '紅閥：20 µL 進入約 180 µL HEPES' }, tone: 'g',
                items: [{ en: '200 µL in total, a tenfold dilution, the same every time because the buffer is pre-loaded', zh: '總共 200 µL、十倍稀釋，而且每次都一樣，因為緩衝液是預先裝好的' }] },
              { label: { en: 'Read', zh: '讀值' }, sub: { en: 'Blue valve: onto four flat gold electrodes', zh: '藍閥：流上四個平放的金電極' }, tone: 'v',
                items: [{ en: 'MMP and HNE each with a non-cleavable control; the potentiostat reads one at a time', zh: 'MMP 與 HNE 各配一個不可切的對照；恆電位儀一次只讀一個' }] },
              { label: { en: 'Report', zh: '回報' }, sub: { en: 'Two activity bars', zh: '兩條活性長條' }, tone: 'a',
                items: [{ en: 'the amount of activity and what it means, a format taken back to clinicians to be challenged', zh: '活性有多少、以及它代表什麼——這個呈現方式被帶回臨床人員那裡接受質疑' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Hardware and Description pages.', zh: '由我們依該隊 Hardware 與 Description 頁繪製。' }
          }) +
          h.take({ en: 'The claim is pitched at a class, and they say why', zh: '這個主張是以「類」為單位提出的，而他們說了理由' }, {
            en: 'From their Human Practices page, in the list of assumptions they asked experts to attack: **"ProteaSign claims activity at the protease-class level rather than for individual enzymes, because surface-phase selectivity is poorer than solution-phase selectivity."** That is not a hedge added afterwards. It is the conclusion their own substrate predictor forced on them, and the dry-lab section below has the numbers.',
            zh: '這句話出自他們的人文實踐頁，在他們請專家來攻擊的假設清單裡：**「ProteaSign 主張的是蛋白酶『類』層級的活性，而不是個別酵素的活性，因為表面相的選擇性比溶液相差。」**這不是事後補上的保留，而是他們自己的受質預測器逼出來的結論；下面的乾式流程一節有那些數字。'
          }) +
          h.kv([
            [{ en: 'Who the number has to move', zh: '那個數字必須說服誰' },
             { en: 'Clinicians were asked a specific question: **what number, on what scale, would change what they do at the next dressing change.** Patients were asked whether pressing a collection pad on a painful wound is acceptable at all.', zh: '他們問臨床人員一個很具體的問題：**在什麼量尺上、出現什麼數字，會改變你下一次換藥時的做法。**他們問病人的是：把採集墊壓在一個會痛的傷口上，到底能不能接受。' }],
            [{ en: 'The concentration it has to reach', zh: '它必須達到的濃度' },
             { en: 'A survey of **125 pressure-ulcer fluid samples** gave a mean activated MMP-9 of 4800 ± 1300 ng/mL; at ~82 kDa that is **59 ± 16 nM**. Their measured separation at 20 nM sits below that mean.', zh: '一份針對 **125 份壓力性潰瘍液體樣本**的調查，給出活化 MMP-9 平均值 4800±1300 ng/mL；以約 82 kDa 換算就是 **59±16 nM**。他們在 20 nM 量到的分辨能力落在這個平均值之下。' }],
            [{ en: 'What it has to cost', zh: '它必須花多少錢' },
             { en: 'Their bill of materials totals **£104.62 for the reader and £5.82 for the cartridge**, each row marked Quoted or Estimate.', zh: '他們的材料清單合計為**讀取器 104.62 英鎊、卡匣 5.82 英鎊**，而且每一列都標明是「報價」還是「估計」。' }]
          ])
      });

      /* ---------------- the checks table ---------------- */
      out += h.sec({
        id: 'e-checks',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'Three columns: Checked, Flagged, Next to Measure', zh: '三個欄位：已檢查、已標記、下一步要量' },
        lede: {
          en: 'Not a limitations paragraph at the bottom of a page. A sorted list of every claim the models make, each row linked to the write-up section it came from.',
          zh: '這不是頁面底部的一段限制說明，而是把模型提出的每一個主張排好序的一張清單，每一列都連回它出處的那一節。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Column', zh: '欄位' }, w: '15%' },
              { t: { en: 'The check, as published on their Model page', zh: '該隊 Model 頁上公開的那條檢查' } }
            ],
            rows: [
              [{ en: 'Checked', zh: '已檢查' },
               { en: '"The exact single-pulse solution agrees with a standard numerical solver to within **5 × 10⁻¹³**."', zh: '「單一脈衝的精確解與一個標準數值解法器的結果一致，誤差在 **5×10⁻¹³** 之內。」' }],
              [{ en: 'Checked', zh: '已檢查' },
               { en: '"**400,000 simulated peptide chains** give an average label distance of 2.19 nm; the model uses 2.18 nm."', zh: '「**40 萬條模擬肽鏈**給出的平均標記距離為 2.19 nm；模型用的是 2.18 nm。」' }],
              [{ en: 'Checked', zh: '已檢查' },
               { en: '"At the formal potential, where the peak sits, predicted electron-transfer rates agree with Chidsey\'s measurements **to within 10–12 %**."', zh: '「在峰所在的形式電位上，預測的電子傳遞速率與 Chidsey 的量測值一致，**誤差在 10–12% 之內**。」' }],
              [{ en: 'Checked', zh: '已檢查' },
               { en: '"The steady-state solution is **exactly the λ → 1 limit** of the exact surface solution."', zh: '「穩態解**正好就是**表面精確解在 **λ→1 的極限**。」' }],
              [{ en: 'Flagged', zh: '已標記' },
               { en: '"Predicted and measured peak positions agree (−251 mV against −244 mV), **but partly by construction and from a single uncontrolled run.** The measured peak is also broader."', zh: '「預測與量到的峰位置一致（−251 mV 對 −244 mV），**但部分是由構造決定的，而且只來自單一次沒有對照的實驗。**量到的峰也比較寬。」' }],
              [{ en: 'Flagged', zh: '已標記' },
               { en: '"Predictor scores rise with Kridel\'s measured MMP-9 rates (Spearman ρ = 0.70 for the PSSM, 0.58 for the logistic regression), **but on only 11 peptides: a positive association, not proof of rate prediction.**"', zh: '「預測器分數會隨 Kridel 量到的 MMP-9 速率上升（位置特異性計分矩陣的 Spearman ρ=0.70、邏輯斯迴歸為 0.58），**但只有 11 條肽：這是一個正相關，不是速率預測的證明。**」' }],
              [{ en: 'Flagged', zh: '已標記' },
               { en: '"Published methylene blue data show a wider peak (**about 80 mV**) than our predicted 58 mV. Those labels react far faster than ours, so close agreement is not expected."', zh: '「已發表的亞甲藍數據顯示的峰比我們預測的 58 mV 更寬（**約 80 mV**）。那些標記的反應速率遠快於我們的，所以本來就不預期會很接近。」' }],
              [{ en: 'Next to measure', zh: '下一步要量' },
               { en: '"Surface efficiency: **0.20 is a central estimate between 0.01 and 1**, measurable by running the sensor on known MMP-9 concentrations."', zh: '「表面效率：**0.20 是 0.01 到 1 之間的一個中心估計值**，可以用已知 MMP-9 濃度跑感測器直接量出來。」' }],
              [{ en: 'Next to measure', zh: '下一步要量' },
               { en: '"Doubling the frequency from 10 to 20 Hz should raise the peak **2.04-fold**, and the peak should be about 58 mV wide at 10 Hz."', zh: '「把頻率從 10 Hz 加倍到 20 Hz，峰應該升高 **2.04 倍**，而在 10 Hz 時峰寬應該約為 58 mV。」' }],
              [{ en: 'Next to measure', zh: '下一步要量' },
               { en: '"**Probe coverage and spacer height** on our electrodes, which set the absolute current but not the cut fraction."', zh: '「我們電極上的**探針覆蓋率與間隔臂高度**，它們決定絕對電流，但不決定被切的比例。」' }],
              [{ en: 'Next to measure', zh: '下一步要量' },
               { en: '"Whether the **AD5940 stays accurate at our much smaller currents.**"', zh: '「**AD5940 在我們小得多的電流下是否仍然準確。**」' }]
            ],
            min: 760,
            source: { en: 'All eleven quoted from the team\'s Model page, section "Where Models Meet the Lab". Flattening their three columns into one table is ours.', zh: '十一條全部引自該隊 Model 頁的「模型與實驗相遇之處」一節。把他們的三欄壓成一張表是我們做的。' }
          }) +
          h.take({ en: 'The sharpest line in the table is the one a weaker team would have deleted', zh: '這張表裡最銳利的那一句，正是弱一點的隊伍會刪掉的那一句' }, {
            en: 'This is **the clearest example in the 2026 High School division of a team publishing the limits of its own model.** "Partly by construction" means: the model was told where to put the peak, so the peak landing in the right place proves the arithmetic, not the physics. They say so, then add that it came from one uncontrolled run and that the measured peak is broader anyway. A judge who reads that learns more about the model than any passing grade could have told them.',
            zh: '這是**2026 年高中組裡，一支隊伍公開自己模型限制最清楚的例子。**「部分是由構造決定的」意思是：模型本來就被告知峰要放在哪裡，所以峰落在對的位置只證明了算術，不證明物理。他們把這點說出來，然後再補上它只來自一次沒有對照的實驗、而且量到的峰本來就比較寬。一位評審讀到這段，能了解到的東西比任何「通過」都多。'
          }) +
          h.note({
            en: 'Nothing in the Flagged column is softened into a hedge. Each row either names the number that is wrong (80 mV against 58 mV), the sample size that is too small (11 peptides) or the reason the agreement is cheap (by construction). A caveat you cannot act on is not a caveat.',
            zh: '「已標記」那一欄裡沒有任何一條被稀釋成模糊的保留語。每一列要嘛指名那個不對的數字（80 mV 對 58 mV）、要嘛指名那個太小的樣本數（11 條肽）、要嘛指名那個一致為何廉價（由構造決定）。一條你無法據以行動的保留，不算保留。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'e-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The model picked the peptide; the bench never got to settle the model', zh: '模型挑了那條肽；而實驗檯一直沒機會替模型定案' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'ProteaSign: ten days at two hosted labs, against four model layers', zh: 'ProteaSign：在兩間借用實驗室的十天，對上四層模型' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Notebook, Substrate Predictor, Surface-Enzyme Kinetics and Square-Wave Voltammetry pages.', zh: '由我們依該隊 Engineering、Notebook、Substrate Predictor、Surface-Enzyme Kinetics 與 Square-Wave Voltammetry 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'e-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Ten days, two hosted labs, and a notebook that keeps the failures', zh: '十天、兩間借用的實驗室，以及一本把失敗留著的記錄簿' },
        lede: {
          en: 'Two notebooks run in parallel across the same fortnight, 25 August to 8 September 2026: ten dated reports for the electrochemical device at the University of Greenwich, nine for the protease-sensing proteins at King\'s College London under Dr Anatoliy Markiv and Kinza Mahmood. Both are published as the author\'s full daily write-up rather than bullet notes.',
          zh: '兩本記錄簿在同一個兩週期間平行進行，2026 年 8 月 25 日到 9 月 8 日——格林威治大學的電化學裝置有十份註明日期的報告，倫敦國王學院的蛋白酶感測蛋白有九份，由 Anatoliy Markiv 博士與 Kinza Mahmood 指導。兩本都是以作者完整的每日書面報告公開，而不是條列筆記。'
        },
        body:
          h.phases([
            { h: { en: 'Standardise the reagents, and leave the mistake in the record', zh: '把試劑標準化，並把錯誤留在記錄裡' },
              p: { en: 'Day one is stock solutions: 100 mL of 6-mercaptohexanol (MCH) at 100 mM and 5 mL of 6-ferrocenylhexanethiol (C6-Fc) at 10.2 mM, with every pipette and flask tolerance written down.', zh: '第一天在配原液：100 mL 的 100 mM 6-巰基己醇（MCH）與 5 mL 的 10.2 mM 6-二茂鐵基己硫醇（C6-Fc），每一支吸管與每一個量瓶的容許誤差都寫下來。' },
              items: [
                { en: 'The first MCH flask was **discarded** because too much ethanol went in past the 100 mL mark. The next day the whole stock was remade again, because the graduated pipette **did not account for the volume below its 2.0 mL gradation**, so the calculated concentration had been below the true one. Both attempts are in the notebook.', zh: '第一瓶 MCH **被丟掉**，因為乙醇加過了 100 mL 刻度。隔天整批原液又重配一次，因為那支刻度吸管**沒有計入 2.0 mL 刻度以下的體積**，使得計算出來的濃度低於真值。兩次嘗試都在記錄簿裡。' },
                { en: 'HEPES buffer made to pH 7.4, and later a 0.1 % bovine serum albumin version whose stated purpose is to **simulate the fouling matrix** that chronic wound exudate would present.', zh: 'HEPES 緩衝液配到 pH 7.4，之後再配一版含 0.1% 牛血清白蛋白的，其目的明確寫著是要**模擬慢性傷口滲液會造成的汙損基質**。' }
              ] },
            { h: { en: 'The monolayer did not form, so the next experiment was about the enclosure', zh: '單分子層沒長成，所以下一個實驗是在做圍堰' },
              p: { en: 'The first overnight incubation used 0.5 mM C6-Fc with 3.05 mM MCH as diluent on a MicruX dual gold electrode chip. Square-wave and cyclic voltammetry the next morning showed no monolayer.', zh: '第一次隔夜培養用的是 0.5 mM C6-Fc 配 3.05 mM MCH 當稀釋劑，長在 MicruX 雙金電極晶片上。隔天早上的方波與循環伏安顯示單分子層沒有形成。' },
              items: [
                { en: '**They first proved the electrodes were alive**, by observing ferro/ferricyanide peaks on them in HEPES containing potassium hexacyanoferrate(III). That is what let them blame the method rather than the chip.', zh: '**他們先證明電極是好的**：在含鐵氰化鉀(III) 的 HEPES 中於同一片電極上觀察到鐵氰／亞鐵氰的峰。正是這一步讓他們可以把責任歸給方法，而不是晶片。' },
                { en: 'The diagnosis was physical, not chemical: the **30 to 50 µL** of SAM reagent was spreading and evaporating overnight even inside an airtight vial. Three enclosures were compared side by side (a superglued resin cylinder with tape, the same without tape, and total immersion) and only the first gave a clean ferrocene peak at about **+0.35 V against Ag/AgCl.**', zh: '診斷是物理性的，不是化學性的：那 **30 到 50 µL** 的單分子層試劑即使放在密閉小瓶裡，也會在一夜之間擴散並蒸散。三種圍堰被並排比較——以強力膠黏上的樹脂圓筒加膠帶、同樣但不加膠帶、以及整片浸沒——只有第一種在約 **+0.35 V（對 Ag/AgCl）**給出乾淨的二茂鐵峰。' },
                { en: 'A purpose-built two-electrode compartment was designed and then **rejected on test**: it sealed liquid correctly, but was so small that pipetting into it moved the enclosure itself. The consequence is stated and not hidden. The dual working-electrode chip was from then on **used as a single-electrode chip**, which defeats the original reason for choosing it.', zh: '他們另外設計了一個專用的雙電極隔間，然後在測試中**否決掉**：它確實能封住液體，但尺寸太小，光是用吸管加液就會把圍堰本體推走。後果被寫出來而不是藏起來——從此那片雙工作電極晶片**被當成單電極晶片使用**，這也就抵消了當初選它的理由。' }
              ],
              done: { en: 'A reproducible-enough incubation method, and a written note that the monolayer step is the fragile one.', zh: '一個勉強可重現的培養方法，加上一句寫下來的註記：單分子層那一步才是脆弱的那一步。' } },
            { h: { en: 'Fix the monolayer by giving up a reagent, not by adding one', zh: '靠「放掉一個試劑」而不是「再加一個」來修好單分子層' },
              p: { en: 'With the peptide on, rough methylene blue and ferrocene peaks appeared together. Then the ferrocene peak **desorbed spontaneously after a few scans**, or was absent from the start.', zh: '把肽加上去之後，粗略的亞甲藍峰與二茂鐵峰一起出現了——然後二茂鐵峰在**幾次掃描之後自行脫附**，或者一開始就根本不存在。' },
              items: [
                { en: 'The conclusion they drew from that desorption: **the MB-modified peptide has a higher affinity for gold than C6-Fc does.** So rather than protecting the ferrocene, they deleted the competing diluent: **MCH out, C6-Fc in as the diluent itself, 0.5 mM → 3.5 mM.**', zh: '他們從那次脫附得出的結論是：**帶亞甲藍修飾的肽對金的親和力高於 C6-Fc。**所以他們不是去保護二茂鐵，而是把那個競爭的稀釋劑刪掉——**MCH 出場，C6-Fc 本身當稀釋劑，0.5 mM→3.5 mM。**' },
                { en: 'Checked the right way round: both peaks held their presence and amplitude across several scans, including one run **20 minutes after the first measurement.** Stability was treated as something to measure, not assume.', zh: '檢查的方向是對的：兩個峰在數次掃描中都維持住存在與振幅，包括**在第一次量測之後 20 分鐘**再做的一次。穩定性被當成要去量的東西，而不是假設出來的。' }
              ] },
            { h: { en: 'Fouling control first, enzyme second', zh: '先做汙損對照，再加酵素' },
              p: { en: 'Before any MMP-9, a 60-minute time course in 0.1 % BSA HEPES alone, to see what the signal does when nothing is cutting.', zh: '在加入任何 MMP-9 之前，先在只有 0.1% 牛血清白蛋白的 HEPES 中做 60 分鐘時序，看看在沒有任何切割時訊號會怎麼走。' },
              items: [
                { en: 'The control result is a negative one and is reported as such: the MB signal fell overall with a steep initial drop, but with **no defined pattern. It even rose from 15 minutes onwards.** Their reading: fouling affects redox reporters unpredictably over time.', zh: '這個對照的結果是負面的，而且就被當成負面結果報出來：亞甲藍訊號整體下降、初期跌得很陡，但**沒有明確規律——它從 15 分鐘之後甚至還上升。**他們的解讀是：汙損對氧化還原報告子隨時間的影響是不可預測的。' },
                { en: '**200 nM MMP-9**, in the same 0.1 % BSA HEPES: the MB peak fell from **2.20 × 10⁻⁸ A to 2.61 × 10⁻⁹ A, a 88.1 % decrease**, and it happened almost immediately rather than over an hour. Two separate arguments are given for calling that cleavage: the size of the drop against the BSA control, and the earlier finding that C6-Fc, not the peptide, is the weakly adsorbed species.', zh: '**200 nM MMP-9**，在同樣的 0.1% 牛血清白蛋白 HEPES 中：亞甲藍峰從 **2.20×10⁻⁸ A 掉到 2.61×10⁻⁹ A，下降 88.1%**，而且幾乎是立刻發生，不是花一小時慢慢降。他們給了兩個獨立的理由說這就是切割：下降幅度相對於牛血清白蛋白對照的大小，以及先前發現弱吸附的那一方是 C6-Fc 而不是那條肽。' },
                { en: '**20 nM MMP-9**, cleavable against non-cleavable: over an hour the current ratio **fell for the cleavable electrode and rose for the non-cleavable one.** They state the limit of this as plainly as the result, that "there is not at all a defined pattern to either the increase or the decrease", and claim only that the two respond differently at 20 nM.', zh: '**20 nM MMP-9**，可切對不可切：在一小時內，電流比值在**可切電極上下降，在不可切電極上上升。**他們把這件事的限制說得和結果一樣直白——「無論上升或下降，都完全沒有明確規律」——而且只主張兩者在 20 nM 下的反應不同。' },
                { en: 'Where the signal stops moving, they name the instrument instead of the biology: the bench potentiostat is **only accurate down to 10 nA**, and cleaved MB floating in solution may leave a baseline.', zh: '在訊號不再變化的地方，他們指名的是儀器而不是生物學：那台桌上型恆電位儀**只能準確到 10 nA**，而且被切下來漂在溶液中的亞甲藍可能留下一個基線訊號。' },
                { en: 'The unexpected result is kept and reasoned about: the ratio **rising** on the non-cleavable electrode means fouling hit the ferrocene proportionally harder than it hit the MB. Their conclusion is a requirement for someone else: find an internal reference **kinetically closer to the MB peptide**. Plus the admission that they could neither confirm nor rebuff the value of having an internal reference at all.', zh: '那個出乎意料的結果被留下來並被推論：不可切電極上的比值**上升**，意味著汙損對二茂鐵的相對影響大於對亞甲藍的影響。他們的結論是一條給別人的要求——找一個**在動力學上更接近那條亞甲藍肽**的內部參考——再加上一句承認：他們既無法證實也無法否證「設置內部參考」這件事到底有沒有價值。' }
              ],
              done: { en: 'Cleavage demonstrated at 200 nM, and a cleavable-versus-control separation at 20 nM, below the 59 ± 16 nM mean measured in 125 pressure-ulcer fluid samples.', zh: '在 200 nM 下示範出切割，並在 20 nM 下做出可切與對照的分辨——低於 125 份壓力性潰瘍液體樣本量到的 59±16 nM 平均值。' } },
            { h: { en: 'The protein side, quantified by Ni-NTA depletion rather than by a cleavage assay', zh: '蛋白那一側，以 Ni-NTA 耗竭定量，而不是用切割試驗' },
              p: { en: 'At KCL, two sfGFP reporter constructs in *E. coli*. **pES-01** carries FLAG and His tags on opposite sides of a TEV protease site, so cleavage can be read by either tag; on Dr Markiv\'s advice it was built in the **pSB1C3 BioBrick backbone** rather than the pET vector the source paper used, because pSB1C3 is what the iGEM Registry takes.', zh: '在倫敦國王學院，兩個在 *E. coli* 中的 sfGFP 報告構築體。**pES-01** 在一個 TEV 蛋白酶切位的兩側分別帶 FLAG 與 His 標籤，所以切割可以由任一個標籤讀出；依 Markiv 博士的建議，它建在 **pSB1C3 BioBrick 骨架**上，而不是來源論文用的 pET 載體，因為 pSB1C3 才是 iGEM 零件登錄庫收的那一種。' },
              items: [
                { en: 'The first expression attempt in **DH5α gave no visible fluorescence**, and the reason is diagnosed rather than skipped: pES-01 is driven by a **T7 promoter**, and DH5α supplies no T7 RNA polymerase. Moved to **BL21(DE3)**: OD 0.630 after 3 h 30 min, Ni-NTA purification, a prominent band near **31 kDa**, **1.94 mg/mL**, and visible green fluorescence this time.', zh: '第一次在 **DH5α 中表達，沒有看到任何螢光**，而原因是被診斷出來的，不是跳過：pES-01 由 **T7 啟動子**驅動，而 DH5α 不提供 T7 RNA 聚合酶。改到 **BL21(DE3)**：3 小時 30 分後 OD 0.630、經 Ni-NTA 純化、在 **31 kDa** 附近出現明顯條帶、濃度 **1.94 mg/mL**，而這一次看得到綠色螢光。' },
                { en: '**The cleavage readout is a depletion readout, and this matters.** SDS-PAGE showed the untreated 31 kDa band thicker than the TEV-treated one, and they write that **"no definitive conclusion can be drawn from this."** The independent check was the affinity architecture: after digestion, **less fluorescence stayed on the Ni-NTA column**, consistent with the GFP fragment losing its His tags and passing into the flow-through. That is loss of binding, not a measured cleavage product.', zh: '**那個切割讀值其實是一個「耗竭」讀值，而這件事很重要。**SDS-PAGE 顯示未處理的 31 kDa 條帶比 TEV 處理過的更厚，而他們寫下：**「由此無法得出任何確定的結論。」**獨立的檢查來自親和性架構：消化之後，**留在 Ni-NTA 管柱上的螢光變少**，與「GFP 片段失去 His 標籤、因此流進流出液」一致。那是結合能力的喪失，不是量到的切割產物。' },
                { en: 'They even flag their own control: the **pre-digestion** sample already showed fluorescence in the flow-through, so not all intact protein had bound. Their stated hypothesis is **resin saturation** from too much protein.', zh: '他們甚至標出自己對照的問題：**消化前**的樣本在流出液中就已經有螢光，表示並非所有完整蛋白都結合上去了。他們寫出的假設是蛋白太多造成**樹脂飽和**。' },
                { en: '**pDUAL did not work, and the write-up is better for it.** The split-sfGFP turn-on construct, sfGFP11 embedded in the 7 kDa protein eglin c with a TEV site plus sfGFP1-10 on a second interface, **never turned green** after an overnight digest, and the expected 12 kDa band never appeared. Three candidate causes are given, each actionable: sfGFP folding makes it run high on SDS-PAGE; the Ni-NTA step may have selectively bound the 25 kDa component because both carry His tags; and **two T7 promoters on one plasmid may interfere**, so only one component expresses.', zh: '**pDUAL 沒有成功，而這篇寫得反而更好。**那個分裂型 sfGFP 開啟式構築體——sfGFP11 嵌在 7 kDa 的蛋白 eglin c 中並帶一個 TEV 切位，另一個表達介面放 sfGFP1-10——在隔夜消化後**始終沒有變綠**，預期的 12 kDa 條帶也從未出現。他們列了三個可能原因，每一個都可以動手處理：sfGFP 的折疊讓它在 SDS-PAGE 上跑得偏高；由於兩個組件都帶 His 標籤，Ni-NTA 那一步可能只選擇性結合了 25 kDa 的那一個；以及**同一個質體上的兩個 T7 啟動子可能互相干擾**，使得只有一個組件被表達。' },
                { en: 'Follow-up continued after the lab visit and is attributed: Dr Markiv assembled **pES-TRX** by Gibson Assembly, inserting thioredoxin to widen the size gap between cleavage fragments. It expressed more strongly, and their hypothesis for why is specific: **the GGGGS linker repeats, absent from pES-TRX, may have interfered with expression.** Reprogramming the substrate cassette is **not** demonstrated: PCRs with the HNE and HNEx substrates "weren\'t entirely successful".', zh: '實驗室行程之後的後續工作有繼續，而且有註明歸屬：Markiv 博士以 Gibson 組裝做出 **pES-TRX**，插入硫氧化還原蛋白以拉大兩個切割片段之間的大小差距。它表達得更強，而他們對原因的假設很具體——**pES-TRX 沒有的那些 GGGGS 連接子重複序列，可能干擾了表達。**替換受質卡匣這件事**沒有**被示範出來：以 HNE 與 HNEx 受質做的聚合酶連鎖反應「並不完全成功」。' }
              ],
              done: { en: 'Two constructs built and purified; TEV cleavage of pES-01 supported by two readouts, neither conclusive alone and one of them a depletion measurement; pDUAL not working, with three named reasons.', zh: '兩個構築體建成並純化；pES-01 的 TEV 切割有兩種讀值支持，但兩者單獨都不足以定案，而其中一種是耗竭量測；pDUAL 沒有運作，並附上三個指名的原因。' } }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'e-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Four layers, each one handing the next a number it could not have guessed', zh: '四層模型，每一層交給下一層一個它猜不出來的數字' },
        lede: {
          en: 'A substrate predictor, an exact solution for enzyme kinetics on a surface, a six-step forward model of square-wave voltammetry, and the hardware the current has to land in. Each write-up carries its derivations, its code and its references.',
          zh: '一個受質預測器、一個表面上酵素動力學的精確解、一個六步的方波伏安正向模型，以及那股電流最終要落進去的硬體。每一份寫作都附上推導、程式碼與參考文獻。'
        },
        body:
          h.warn({
            en: '**Start with the result that went against them.** Run on their own sensor candidates, the predictor gave **every MMP-targeted peptide a specificity margin at or below zero**: Cand1_MMP9 at −0.0001, Cand2_MMP2 at −0.0008, Cand3_MMP2b at −0.0367. The neutrophil elastase candidate separated cleanly at **+0.5107**. They publish the table, and then explain the cause rather than the symptom: across the four MMPs the **PSSM log-odds vectors correlate strongly while sharing almost no training windows**, so the overlap is in learned preference, not in shared data. Their words: MMPs "do genuinely share a recognition motif, so their PSSMs converge on similar preference, which explains why pairwise discrimination is a fundamentally hard problem as opposed to a modelling flaw." **This is why ProteaSign claims activity at class level.** The model changed the claim.',
            zh: '**先從那個對他們不利的結果說起。**把預測器跑在他們自己的感測器候選肽上，**每一個瞄準 MMP 的肽，專一性邊際都落在零或零以下**——Cand1_MMP9 為 −0.0001、Cand2_MMP2 為 −0.0008、Cand3_MMP2b 為 −0.0367——而嗜中性球彈性蛋白酶的候選肽則乾淨地分開，達 **+0.5107**。他們把這張表公開，然後解釋原因而不是症狀：在四種 MMP 之間，**位置特異性計分矩陣的對數勝算向量彼此高度相關，但幾乎沒有共用任何訓練窗口**，所以重疊之處在於學到的偏好，而不是共用的資料。他們的原話是：MMP「確實共用一個辨識模組，所以它們的計分矩陣會收斂到相似的偏好，而這也說明了為什麼兩兩區辨本質上是個困難問題，而不是建模上的缺陷。」**這就是 ProteaSign 為何以『類』為單位提出活性主張的原因。**模型改掉了那個主張。'
          }) +
          h.h3({ en: 'The chain, in the order a sample meets it', zh: '這條鏈，依照樣本遇到它的順序' }) +
          h.tbl({
            cols: [
              { t: { en: 'Layer', zh: '層' }, w: '20%' },
              { t: { en: 'The question it answers', zh: '它回答的問題' }, w: '26%' },
              { t: { en: 'What it hands on', zh: '它交出去的東西' } }
            ],
            rows: [
              [{ en: 'Substrate predictor', zh: '受質預測器' },
               { en: 'Which bonds does each wound protease cut?', zh: '每一種傷口蛋白酶切的是哪些鍵？' },
               { en: 'Per-protease logistic regression and PSSM trained on **10,472 confirmed cleavage windows across 7 proteases** (MMP-9 contributes 783; the digestive serine set is capped at 5,000 of 18,251 available). Scores any eight-residue window and returns a **specificity margin against the rest of the panel.**', zh: '以 **7 種蛋白酶、10,472 個已確認切割窗口**訓練的逐酶邏輯斯迴歸與位置特異性計分矩陣（其中 MMP-9 貢獻 783 個；消化性絲胺酸蛋白酶那一組由可用的 18,251 個上限取 5,000 個）。它可以對任何八殘基窗口計分，並回傳一個**相對於面板其餘成員的專一性邊際。**' }],
              [{ en: 'Surface-enzyme kinetics', zh: '表面酵素動力學' },
               { en: 'Can cutting on a surface be treated like cutting in solution?', zh: '表面上的切割可以當成溶液中的切割來處理嗎？' },
               { en: 'No. Tethered probes break the excess-substrate assumption, so the surface reaction is solved **exactly, by Laplace transform**, and the answer depends on **a single parameter λ**. Near λ = 1 the exact curve matches the steady-state one; as λ grows the curve turns S-shaped and the shortcut drifts. Fitting either curve to a measured progress curve returns the rate constants.', zh: '不行。繫鏈受質打破了「受質過量」這個假設，所以表面反應是**用拉普拉斯轉換精確解出來的**，而答案只取決於**單一參數 λ**。在 λ 接近 1 時，精確解與穩態解吻合；λ 變大時曲線轉成 S 形，近似就會偏掉。把其中任一條曲線擬合到量到的反應進程曲線，就能回推速率常數。' }],
              [{ en: 'Square-wave voltammetry', zh: '方波伏安法' },
               { en: 'What will the electrode read?', zh: '電極會讀到什麼？' },
               { en: 'Six connected steps: how many probes sit on the gold, where each MB label sits, the current from one probe, the current from the whole electrode, the readout, and how fast MMP-9 cuts. The load-bearing conclusion: **peak height is exactly proportional to the probes still intact**, so a scan before and after incubation gives the cut fraction directly. **15.9 nA** for a fresh electrode.', zh: '六個相連的步驟：金表面上有多少探針、每個亞甲藍標記坐在哪裡、單一探針產生的電流、整片電極的電流、讀值方式，以及 MMP-9 切得多快。承重的那個結論是：**峰高與仍完整的探針數成嚴格正比**，所以培養前後各掃一次就能直接得到被切的比例。新電極為 **15.9 nA**。' }],
              [{ en: 'Hardware', zh: '硬體' },
               { en: 'Can a handheld reader make the measurement?', zh: '一台手持讀取器能做到這個量測嗎？' },
               { en: 'An AD5940 analogue front end following the open Biocoin design, four working electrodes so MMP and elastase activity can be told apart, and an external multiplexer because the potentiostat reads one at a time. Their own sentence: **our currents are much smaller than those Biocoin was checked at, so its accuracy at our scale still has to be tested.**', zh: '沿用開源 Biocoin 設計的 AD5940 類比前端、四個工作電極以便分辨 MMP 與彈性蛋白酶活性，以及一個外接多工器，因為恆電位儀一次只讀一個。他們自己的句子是：**我們的電流遠小於 Biocoin 被驗證過的電流，所以它在我們這個尺度上的準確度仍然需要測試。**' }]
            ],
            min: 820,
            source: { en: 'Read from the team\'s Model page and the four write-ups it links to.', zh: '讀自該隊 Model 頁與它連出去的四份寫作。' }
          }) +
          h.h3({ en: 'The numbers that come out of the far end', zh: '從另一端跑出來的那些數字' }) +
          h.ul([
            { en: '**Detection, honestly ranked.** Out-of-fold consensus AUROC is **0.772 [0.737, 0.803] for MMP-9** and **0.901 [0.880, 0.919] for neutrophil elastase**. The model is simply better at the protease their device does not yet measure. Positives are counted as **Hamming-distance clusters** as well as raw windows (MMP-9: 783 positives, 687 clusters), so near-duplicate sequences cannot inflate the score.', zh: '**偵測能力，誠實排序。**折外一致分數的 AUROC 為 **MMP-9 的 0.772 [0.737, 0.803]** 與**嗜中性球彈性蛋白酶的 0.901 [0.880, 0.919]**——模型在「他們的裝置目前還沒在量的那種蛋白酶」上就是表現得比較好。正例除了原始窗口數之外，還以**漢明距離分群**來計數（MMP-9：783 個正例、687 個分群），這樣近似重複的序列就無法把分數撐高。' },
            { en: '**The independent validation, with its sample size in the same sentence.** Kridel et al. measured real MMP-9 cleavage rates for 11 synthetic peptides. Before scoring, any training window sharing **7 or more of 8 positions** with a validation peptide was stripped and the model retrained. Result: **PSSM ρ = 0.70, 95 % CI [−0.00, 0.96], p = 0.020; logistic regression ρ = 0.58, CI [−0.23, 0.93], p = 0.068.** The interval touches zero and they print it.', zh: '**那次獨立驗證，連樣本數都寫在同一句裡。**Kridel 等人量了 11 條合成肽的真實 MMP-9 切割速率。在計分之前，任何與驗證肽**在 8 個位置中共用 7 個以上**的訓練窗口都被剔除，並重新訓練模型。結果是：**位置特異性計分矩陣 ρ=0.70、95% 信賴區間 [−0.00, 0.96]、p=0.020；邏輯斯迴歸 ρ=0.58、區間 [−0.23, 0.93]、p=0.068。**那個區間碰到了零，而他們把它印出來。' },
            { en: '**One constant, measured on exactly their sequence.** Kridel measured k_cat/K_m = **67,500 M⁻¹ s⁻¹** (k_cat = 86.4 s⁻¹, K_m = 1.28 mM) for MMP-9 on **SGKIPRTLTA**, the same peptide they use, which is why they chose it. They then multiply by a **surface efficiency of 0.20** to get **13,500 M⁻¹ s⁻¹**, and immediately say 0.20 is an unmeasured central estimate between 0.01 and 1.', zh: '**一個常數，而且是在他們那條序列上量出來的。**Kridel 針對 MMP-9 切 **SGKIPRTLTA** 量到 k_cat/K_m = **67,500 M⁻¹ s⁻¹**（k_cat = 86.4 s⁻¹、K_m = 1.28 mM），而那正是他們採用的同一條肽——這也是他們選它的理由。接著他們乘上一個 **0.20 的表面效率**得到 **13,500 M⁻¹ s⁻¹**，並且立刻說明 0.20 是一個未經量測的中心估計值，範圍落在 0.01 到 1 之間。' },
            { en: '**The bottom line, with its arithmetic shown.** With k_eff[MMP-9]T, a **healing wound at 6 nM** cuts about **14 %** of the probes in 30 minutes and a **chronic wound at 30 nM** cuts about **52 %**: peaks of **13.7 nA and 7.7 nA** against 15.9 nA fresh. Half-times: about **29 minutes chronic, 143 minutes healing.** The separation is largest at **83 minutes (53 percentage points)** but is already **38 points at 30 minutes**, and they choose 30 because a bedside test has to be quick.', zh: '**最終結論，並把算式攤開。**以 k_eff[MMP-9]T 計算，**6 nM 的癒合中傷口**在 30 分鐘內切掉約 **14%** 的探針，而 **30 nM 的慢性傷口**切掉約 **52%**——相對於新電極的 15.9 nA，峰高分別為 **13.7 nA 與 7.7 nA**。半衰時間分別為**慢性約 29 分鐘、癒合中約 143 分鐘。**分辨度在 **83 分鐘時最大（53 個百分點）**，但在 **30 分鐘時就已經有 38 個百分點**，而他們選 30 分鐘，因為床邊檢測必須快。' },
            { en: '**Ten automated tests**, not one. They check the single-pulse exact solution against a numerical solver, that the label-distance distribution integrates to 1, and that peak height stays proportional to the intact fraction to machine precision. The full simulation puts the largest single-probe signal at **κ = 0.44** against the simple estimate of ½, which is what square-wave theory predicts.', zh: '**十項自動化測試**，不是一項。它們檢查單脈衝精確解對數值解法器的結果、檢查標記距離分布的積分是否為 1、以及峰高是否在機器精度內維持與完整比例成正比。完整模擬把單一探針訊號的最大值放在 **κ = 0.44**，而簡單估計為 ½——這正是方波理論所預測的。' }
          ]) +
          h.note({
            en: '**The maths is not decoration.** The reason the surface solution exists is that a tethered substrate cannot be assumed to be in excess, so the textbook steady-state shortcut has no licence on this electrode. Having solved it exactly, they then prove the shortcut is **the λ → 1 limit of their own result**, which is both a validation of the derivation and a statement of exactly when the easy curve is allowed. A fitted λ is also how a measured progress curve would become rate constants, which is the step the bench never reached.',
            zh: '**那些數學不是裝飾。**表面解之所以必須存在，是因為繫鏈受質不能被假設為過量，所以教科書上的穩態近似在這片電極上沒有使用許可。把它精確解出來之後，他們進一步證明那個近似就是**自己結果在 λ→1 的極限**——這既是對推導的驗證，也精確說明了什麼時候才可以用那條簡單曲線。擬合出來的 λ 也正是「把量到的反應進程曲線換成速率常數」的途徑，而那一步實驗檯始終沒有走到。'
          })
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 'e-hw',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: 'A £104.62 reader built on somebody else\'s open design, with their own doubt printed on it', zh: '一台 104.62 英鎊的讀取器，建在別人的開源設計上，並把自己的疑慮印在上面' },
        lede: {
          en: 'A disposable cartridge plus a reusable reader, around the AD5940 analogue front end. The reader came out of a short email exchange with Professor Drew Hall, whose group builds open-source wearable biosensors.',
          zh: '一個拋棄式卡匣加一台可重複使用的讀取器，核心是 AD5940 類比前端。讀取器來自與 Drew Hall 教授的一次簡短電子郵件往來，他的團隊做開源穿戴式生物感測器。'
        },
        body:
          h.p({
            en: 'The first of their three reasons for building on **Biocoin** — a coin-sized wearable potentiostat around the AD5940 — is a measurement rather than an opinion.',
            zh: '他們採用 **Biocoin**（一台硬幣大小、以 AD5940 為核心的穿戴式恆電位儀）的三個理由中，第一個是一次量測，而不是一個意見。'
          }) +
          h.ul([
            { en: '**It was checked against a commercial instrument.** Hack and Hall had already run differential-pulse voltammetry, cyclic voltammetry and chronoamperometry on the same electrodes and compared them against a **PalmSens4** bench potentiostat, with the DPV currents agreeing at **r = 0.9998 and slope 0.998.**', zh: '**它曾與商用儀器對比驗證過。**Hack 與 Hall 已經在同一組電極上跑過差分脈衝伏安、循環伏安與計時電流法，並與 **PalmSens4** 桌上型恆電位儀比較，差分脈衝伏安的電流一致性達 **r = 0.9998、斜率 0.998。**' },
            { en: '**It is fully open**, with schematics, firmware and bill of materials, so they could build directly on its AD5940 pin assignments, its **nRF52840** Bluetooth microcontroller and its reference-capacitor network. The main change was to remove Biocoin\'s iontophoresis current source for stimulating sweat glands.', zh: '**它完全開源**——電路圖、固件與材料清單都有——所以他們可以直接沿用它的 AD5940 腳位配置、它的 **nRF52840** 藍牙微控制器與它的參考電容網路。主要的改動是移除 Biocoin 用來刺激汗腺的離子導入電流源。' },
            { en: '**The schematics explain themselves.** Each part carries a note on its purpose, which made adapting the design to square-wave voltammetry easier.', zh: '**那些電路圖會自己解釋自己。**每個零件都附有用途註記，讓這個設計改寫成方波伏安更容易。' }
          ]) +
          h.warn({
            en: 'And then, in the same numbered list, the limit of the thing they just borrowed: **"Our currents are about 50x smaller, so it needs to be investigated whether their accuracy still holds with our design (35–352 nA vs their 2–16 µA)."** The r = 0.9998 was earned at microamps. ProteaSign runs at tens to hundreds of nanoamps. That doubt then reappears as a row in the Checked/Flagged/Next-to-Measure table, **"whether the AD5940 stays accurate at our much smaller currents"**, so a reader who only sees the model page still meets it.',
            zh: '接著，在同一份編號清單裡，就是他們剛剛借用的那個東西的限制：**「我們的電流大約小 50 倍，所以必須去查明他們的準確度在我們的設計下是否仍然成立（35–352 nA 對他們的 2–16 µA）。」**那個 r = 0.9998 是在微安培等級掙到的，而 ProteaSign 跑在數十到數百奈安培。這個疑慮接著又以一列的形式出現在那張「已檢查／已標記／下一步要量」的表裡——**「AD5940 在我們小得多的電流下是否仍然準確」**——所以就算讀者只看到 Model 那一頁，也還是會遇到它。'
          }) +
          h.h3({ en: 'Four electrodes, and what to do with the three you are not reading', zh: '四個電極，以及你沒在讀的那三個該怎麼辦' }) +
          h.p({
            en: 'Biocoin had one working electrode. ProteaSign needs four, so MMP and elastase activity can be told apart and each has its non-cleavable control. But the potentiostat reads **one at a time.** Their first instinct was to hold all four at the scan potential, and they rejected it with the failure mode named: a thiol-gold bond kept under a continuous electrical field makes **monolayer desorption a known failure mode**, which is precisely the fragility the Greenwich bench had just spent days fighting. The choice instead is to **leave the idle electrodes disconnected**; a disconnected electrode rests within tens of mV of the scan\'s start voltage, so switching it back in causes only a small blip the firmware can account for. Switching is done by an **external TMUX1104**, external because its off-state leakage is **20x lower** than the AD5940\'s built-in switches.',
            zh: 'Biocoin 只有一個工作電極。ProteaSign 需要四個，才能分辨 MMP 與彈性蛋白酶的活性，而且各自要配一個不可切的對照——但恆電位儀**一次只讀一個。**他們的第一個直覺是把四個都維持在掃描電位上，而他們否決了這個做法，並把失效模式指名出來：硫醇與金的鍵在連續電場下，會讓**單分子層脫附成為一個已知的失效模式**，而那正是格林威治那張實驗檯剛剛花了好幾天在對抗的脆弱點。他們改選的是**讓閒置電極保持斷開**；斷開的電極會停在掃描起始電壓數十毫伏的範圍內，所以再切回來時只會造成一個小跳動，固件可以把它算進去。切換由一顆**外接的 TMUX1104** 負責——之所以用外接，是因為它關斷狀態的漏電流比 AD5940 內建的開關**低 20 倍**。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'cartridge', zh: '卡匣' }, k: 't' }],
              h: { en: 'Volumes fixed by geometry', zh: '體積由幾何固定下來' },
              p: { en: 'Metering chamber **5 × 4 × 1 mm = 20 µL**; buffer reservoir about **10 × 5 × 5 mm = 250 µL**, pre-loaded with roughly **180 µL of HEPES**, giving 200 µL total and a **tenfold dilution that is the same every time**. Overflow goes to a cellulose waste pad. The electrodes lie **flat on the chamber floor** rather than standing up, so the liquid wets all four the same way.', zh: '定量腔 **5×4×1 mm = 20 µL**；緩衝液槽約 **10×5×5 mm = 250 µL**，預先裝入大約 **180 µL 的 HEPES**，合計 200 µL，給出一個**每次都一樣的十倍稀釋**。溢出的部分流向纖維素廢液墊。電極是**平放在腔室底板上**而不是立起來，這樣液體對四個電極的潤濕方式才會一致。' } },
            { chips: [{ t: { en: 'two routes', zh: '兩條路線' }, k: 'v' }],
              h: { en: 'A second cartridge for when a capillary will not do', zh: '當毛細管行不通時的第二種卡匣' },
              p: { en: 'A swab or absorbent-pad cartridge with **no metering chamber at all**: the clinician drops the pad into the pre-loaded buffer chamber and closes a lid, and the sample elutes straight in. The fluid path is much shorter, and a retractable valve holds the buffer back while the pad elutes. The elution time is set by experiments **they list as still to be done.**', zh: '一種拭子或吸收墊卡匣，**完全沒有定量腔**：臨床人員把墊子丟進預先裝好緩衝液的腔室、蓋上蓋子，樣本就直接洗提進去。流體路徑短得多，而一個可收回的閥在墊子洗提時把緩衝液擋住。洗提時間要由實驗決定，而他們把那些實驗**列為尚未完成。**' } },
            { chips: [{ t: { en: 'stated status', zh: '明寫的狀態' }, k: 'a' }],
              h: { en: 'The renders say they are early', zh: '那些渲染圖自己說它們是早期版本' },
              p: { en: 'The reader is published as OpenSCAD renders, a Fritzing wiring diagram, a five-sheet PCB schematic and a costed BOM. The render caption says it is **"a basic version made before we had examined the costs of electrical components"**, and names what a next iteration would add: a charging LED, **pogo pins** instead of the current connection, and a **cartridge ID** carrying memory and calibration data.', zh: '讀取器是以 OpenSCAD 渲染圖、一張 Fritzing 接線圖、一份五頁的印刷電路板電路圖與一份估過價的材料清單公開的。渲染圖的圖說寫著它是**「在我們還沒檢視電子零件成本之前做的一個基本版本」**，並指名下一次迭代會加什麼：充電指示燈、以**彈簧針**取代現有的連接方式，以及一個帶記憶與校正資料的**卡匣識別碼**。' } }
          ])
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'e-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'No elastase electrode, and the surface efficiency is still a guess', zh: '沒有彈性蛋白酶電極，而表面效率仍然只是一個猜測' },
        lede: {
          en: 'The useful thing about a team that publishes its caveats is that this list is short to assemble and hard to argue with.',
          zh: '一支會公開自己保留事項的隊伍，好處就是這張清單很容易整理，而且很難反駁。'
        },
        body:
          h.ul([
            { en: '**One uncontrolled voltammogram is the entire shape comparison.** The predicted and measured peak positions agree to 7 mV, but "partly by construction and from a single uncontrolled run", the measured peak is broader, and it shows extra structure near **−165 mV** the model does not include. They explicitly **do not claim the shape is validated.**', zh: '**整個波形比較只建立在一張沒有對照的伏安圖上。**預測與量到的峰位置差 7 mV 一致，但「部分是由構造決定的，而且只來自單一次沒有對照的實驗」，量到的峰比較寬，而且在 **−165 mV** 附近還有模型沒有納入的額外結構。他們明確表示**不主張波形已被驗證。**' },
            { en: '**ρ = 0.70 on 11 peptides, with a 95 % interval that reaches zero.** Their own label for it: "a positive association, not proof of rate prediction."', zh: '**11 條肽上的 ρ = 0.70，而 95% 區間碰到了零。**他們自己給的標籤是：「這是一個正相關，不是速率預測的證明。」' },
            { en: '**No clinical exudate, ever.** Every electrochemical measurement was made in 0.1 % BSA HEPES buffer with recombinant MMP-9 at 200, 20 and 50 nM. BSA is their stand-in for a fouling matrix, and they say the real matrix **differs significantly from patient to patient**, which is the whole reason the control electrode exists.', zh: '**從頭到尾沒有任何臨床滲液。**所有電化學量測都是在 0.1% 牛血清白蛋白的 HEPES 緩衝液中、用重組 MMP-9 於 200、20 與 50 nM 下完成的。牛血清白蛋白是他們用來代替汙損基質的替身，而他們也說真實基質**在不同病人之間差異顯著**，而這正是那個對照電極存在的全部理由。' },
            { en: '**Probe coverage and spacer height on their electrodes have not been measured**, so the absolute current is uncertain. The cut fraction, which is what the sensor actually reports, is not affected, and they make that distinction themselves.', zh: '**他們電極上的探針覆蓋率與間隔臂高度都沒有被量過**，所以絕對電流是不確定的。而感測器實際回報的「被切比例」不受影響——這個區分是他們自己做的。' },
            { en: '**Surface efficiency 0.20 is a guess inside a 100-fold bracket (0.01 to 1)**, and every cut-fraction prediction inherits it: the 14 % and 52 %, the 13.7 nA and 7.7 nA, the 29-minute half-time. The measurement that would fix it is named: run the sensor on known MMP-9 concentrations.', zh: '**表面效率 0.20 是一個落在百倍區間（0.01 到 1）裡的猜測**，而每一個被切比例的預測——那 14% 與 52%、13.7 nA 與 7.7 nA、29 分鐘的半衰時間——都承繼了它。能解決它的量測也被指名了：用已知的 MMP-9 濃度去跑感測器。' },
            { en: '**The monolayer is not reproducible, and they say so first.** Formation failed on 8 September using the same method that had worked before. Named likely causes: **smudged superglue on the electrode setup, reagent leaking into the surrounding area, and excessive evaporation at low volumes.** Their conclusion is handed forward: *"one of the biggest challenges for future teams to overcome would be to develop a reliable method of their own for SAM formation."*', zh: '**單分子層不可重現，而且這句話是他們先說的。**9 月 8 日用先前成功過的同一套方法，形成失敗。被指名的可能原因有：**電極組上被抹到的強力膠、試劑漏到周邊區域，以及在低體積下過度蒸散。**他們的結論是往前傳的：*「對未來的隊伍來說，最大的挑戰之一就是發展出一套他們自己可靠的單分子層形成方法。」*' },
            { en: '**The dual working-electrode chip was used as a single one.** It was chosen so cleavable and control peptides could sit in one homogeneous solution and be scanned simultaneously, which is the only way to hold the matrix constant between them. The small enclosure that would have allowed it failed on test, so the comparison was made across runs rather than within one.', zh: '**那片雙工作電極晶片被當成單電極用。**當初選它，是為了讓可切與對照肽處於同一份均質溶液中並同時掃描，而那是唯一能讓兩者之間的基質保持一致的方式。能做到這件事的小圍堰在測試中失敗了，所以那個比較是跨實驗做的，不是在同一次實驗內做的。' },
            { en: '**The internal reference did not behave.** On the non-cleavable electrode the current ratio **rose** in 20 nM MMP-9, meaning fouling hit the ferrocene proportionally harder than the methylene blue. They say this does not conceptually invalidate having an internal reference, but that they **could neither confirm nor rebuff** its true efficacy, and that a reporter kinetically closer to the MB peptide is needed.', zh: '**那個內部參考沒有照預期運作。**在 20 nM MMP-9 中，不可切電極上的電流比值**上升**了，意味著汙損對二茂鐵的相對影響大於對亞甲藍。他們說這在概念上並不否定設置內部參考的做法，但他們**既無法證實也無法否證**它真正的效用，而且需要一個在動力學上更接近那條亞甲藍肽的報告子。' },
            { en: '**Only three concentrations, so no concentration model from data.** With more lab time they would have built one; as published, the device reads class-level activity and the conversion to a concentration comes from the model, not from a calibration curve they measured.', zh: '**只有三個濃度，所以沒有從數據建出來的濃度模型。**如果有更多實驗時間，他們會建一個；就目前公開的版本而言，裝置讀的是類層級的活性，而換算成濃度是來自模型，不是來自他們量出來的校正曲線。' },
            { en: '**The signal floor is the instrument, not the chemistry.** The bench potentiostat is accurate only down to **10 nA**, which they give as the reason the MB peak stops changing after the initial drop at 200 nM. The handheld reader would run at 35–352 nA, where the AD5940 question above is still open.', zh: '**訊號下限來自儀器，不是化學。**那台桌上型恆電位儀只能準確到 **10 nA**，而他們以此解釋為什麼在 200 nM 下初期驟降之後亞甲藍峰就不再變化。手持讀取器會運行在 35–352 nA，而上面那個 AD5940 的問題在那個範圍仍然沒有答案。' },
            { en: '**On the protein side: no HNE electrode and no reprogramming.** pDUAL never fluoresced and its 12 kDa fragment never appeared; PCRs with the HNE and HNEx substrate cassettes "weren\'t entirely successful", so swapping the substrate, the point of calling it reprogrammable, is **conceptual rather than demonstrated**. The team\'s own next step is to vary PCR temperature and primer concentration and to try MMP-9 substrates, to find out whether the fault is in the plasmid or the primer framework.', zh: '**蛋白那一側：沒有 HNE 電極，也沒有重新編程。**pDUAL 始終沒有發出螢光，它的 12 kDa 片段也從未出現；以 HNE 與 HNEx 受質卡匣做的聚合酶連鎖反應「並不完全成功」，所以替換受質——也就是把它稱為可重新編程的那個重點——仍是**概念上的，而不是示範過的**。該隊自己寫的下一步是變動聚合酶連鎖反應的溫度與引子濃度，並試 MMP-9 的受質，以查明問題是在質體還是在引子架構。' },
            { en: '**And the thing the predictor said about their own design is still true:** every MMP-targeted candidate had a specificity margin at or below zero. A device that cannot separate MMP-9 from MMP-2 and MMP-8 on the surface can report MMP-class activity, which is what they claim, and not MMP-9 specifically, which is what the project title would let you assume.', zh: '**而預測器對他們自己設計所說的那件事，到今天還是成立的：**每一個瞄準 MMP 的候選肽，專一性邊際都在零或零以下。一台在表面上無法把 MMP-9 與 MMP-2、MMP-8 分開的裝置，能回報的是 MMP 這一類的活性——而那正是他們所主張的——而不是特定的 MMP-9，儘管專案名稱會讓人這樣假設。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'e-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Eton-College-UK', zh: '我們會從 Eton-College-UK 抄什麼' },
        body:
          h.ul([
            { en: '**Sort your model\'s claims into three columns and link each one to its section.** Checked, Flagged, Next to Measure. It costs one page and it turns a model write-up from a case for the defence into something a stranger can audit.', zh: '**把你的模型主張分成三個欄位，並讓每一條連回它的出處那一節。**已檢查、已標記、下一步要量。它只佔一頁，卻能把一份模型寫作從辯護詞變成一個陌生人可以稽核的東西。' },
            { en: '**Write "partly by construction" when that is what the agreement is.** The sentence that cost them the most is the one that makes everything else on the page believable.', zh: '**當那個一致其實是自己設計出來的，就寫「部分是由構造決定的」。**那句他們代價最高的句子，正是讓同一頁上其他所有東西變得可信的那一句。' },
            { en: '**Put the sample size inside the claim, not in a footnote.** "Spearman ρ = 0.70, but on only 11 peptides" is a complete finding. "ρ = 0.70" alone is a press release.', zh: '**把樣本數寫進主張裡，不要放在註腳。**「Spearman ρ=0.70，但只有 11 條肽」是一個完整的發現。只寫「ρ=0.70」則是一則新聞稿。' },
            { en: '**Run the fouling control before the enzyme, and publish it even though it has no pattern.** The 0.1 % BSA hour is what makes the 88.1 % drop mean something. Without it, every drop is a result.', zh: '**在加酵素之前先跑汙損對照，而且即使它沒有規律也要公開。**那一小時的 0.1% 牛血清白蛋白，正是讓 88.1% 的下降有意義的東西。少了它，任何下降都會變成一個結果。' },
            { en: '**Prove the instrument is alive before blaming the method.** Ferricyanide peaks on the same chip are two minutes of work and they are the difference between "the monolayer failed" and "something failed".', zh: '**在責怪方法之前，先證明儀器是好的。**在同一片晶片上做鐵氰化物的峰只要兩分鐘，而它就是「單分子層失敗了」與「有東西失敗了」之間的差別。' },
            { en: '**Name the instrument\'s floor.** "The potentiostat is accurate only down to 10 nA" turns a flat line from a biological claim back into an equipment limit, which is where it belongs.', zh: '**把儀器的下限指名出來。**「恆電位儀只能準確到 10 nA」會把一條水平線從生物學主張打回設備限制，而那才是它該待的地方。' },
            { en: '**Fix a competition problem by deleting a reagent.** The ferrocene kept desorbing because the MB peptide outcompeted it for gold, so they removed the third thiol and promoted the ferrocene to diluent. Fewer components, and the mechanism understood.', zh: '**用刪掉一個試劑來解決競爭問題。**二茂鐵一直脫附，是因為那條亞甲藍肽在搶金表面時贏過它，所以他們把第三種硫醇移掉，讓二茂鐵升任稀釋劑。成分變少，機制也搞清楚了。' },
            { en: '**Let your own model rule against your own design, and print the table.** A specificity margin of −0.0001 on your lead MMP-9 candidate is the kind of number most teams would quietly not compute. They computed it, explained why the four MMPs are genuinely hard to separate, and **downgraded the claim to class level** instead of the number.', zh: '**讓你自己的模型判你自己的設計敗訴，並把那張表印出來。**主力 MMP-9 候選肽的專一性邊際是 −0.0001，這是大多數隊伍會安靜地不去算的那種數字。他們算了，解釋了為什麼四種 MMP 本質上難以分開，然後**把主張降級到類層級**，而不是把數字降級。' },
            { en: '**Borrow an open design and publish the limit of the borrowing on the same page.** "Our currents are about 50x smaller" sits in the same numbered list as the r = 0.9998 that justified the choice.', zh: '**借用一個開源設計，並在同一頁上公開這次借用的限制。**「我們的電流大約小 50 倍」就放在那個用來支持這個選擇的 r = 0.9998 的同一份編號清單裡。' },
            { en: '**Reject your first circuit idea by naming its failure mode.** Holding all four electrodes at the scan potential would have made monolayer desorption a known failure mode. Writing that down is how a design decision becomes reviewable.', zh: '**用「指名它的失效模式」來否決你的第一個電路構想。**把四個電極都維持在掃描電位上，會讓單分子層脫附成為一個已知的失效模式。把這件事寫下來，才是讓一個設計決策變得可被審閱的方式。' },
            { en: '**Let the geometry take the decisions a person would get wrong.** A 20 µL chamber with an overflow pad and a pre-loaded buffer reservoir means the dilution does not depend on who is running the test. That is a design answer to a human-practices problem.', zh: '**讓幾何去承擔那些人會做錯的決定。**一個 20 µL 的腔室、一塊溢流墊、一個預先裝好緩衝液的槽，意思是稀釋倍數不取決於是誰在做這個檢測。這是對一個人文實踐問題給出的設計答案。' },
            { en: '**Keep the reagent-prep mistake in the notebook.** The discarded MCH flask and the graduated pipette that missed the volume below its 2.0 mL mark are two of the most useful paragraphs on the wiki, because the next person will make the same mistake.', zh: '**把配試劑時的錯誤留在記錄簿裡。**那瓶被丟掉的 MCH，以及那支沒有計入 2.0 mL 刻度以下體積的刻度吸管，是這個 wiki 上最有用的兩段文字，因為下一個人會犯同樣的錯。' },
            { en: '**Hand the next team the problem, not a solution you do not have.** "One of the biggest challenges for future teams would be to develop a reliable method of their own for SAM formation" is more useful than a protocol that worked once.', zh: '**把問題交給下一支隊伍，而不是交給他們一個你並不擁有的解法。**「對未來的隊伍來說，最大的挑戰之一就是發展出一套他們自己可靠的單分子層形成方法」比一份只成功過一次的流程更有用。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the thirteen items above, and the judgement that the Checked / Flagged / Next-to-Measure table is the most transferable single practice on any High School wiki in 2026. Everything else on this page is the team\'s own, read from [2026.igem.wiki/eton-college-uk](https://2026.igem.wiki/eton-college-uk/). They were nominated for Best Village Project, Best Education (High School) and Best Integrated Human Practices (High School) and won none of those prizes.',
            zh: '標示為我們的看法：上面十三點，以及「那張『已檢查／已標記／下一步要量』的表，是 2026 年任何高中組 wiki 上最可轉移的單一做法」這個判斷。這一頁上其餘所有內容都是該隊自己的，讀自 [2026.igem.wiki/eton-college-uk](https://2026.igem.wiki/eton-college-uk/)。他們入圍了最佳村落專案、最佳教育（高中組）與最佳整合人文實踐（高中組），而這三個獎項都沒有得到。'
          })
      });

      return out;
    }
  };
})(window);
