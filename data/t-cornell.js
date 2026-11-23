/* Cornell — Klothos. Top 10, Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/cornell/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Design the cassette', zh: '設計卡匣' },
        s: { en: 'SnapGene: SUMO–6xHis–810A, TetR with the overlapping tetR/tetA promoters from pUS212', zh: 'SnapGene：SUMO–6xHis–810A，TetR 搭配 pUS212 的重疊 tetR/tetA 啟動子' } },
      { l: { en: 'Build and verify', zh: '建構與驗證' },
        s: { en: 'IDT gene block → PCR with 15 bp overhangs → DpnI → NEB HiFi into pUC19 at 2:1', zh: 'IDT 基因片段→15 bp 重疊 PCR→DpnI→2:1 以 NEB HiFi 接入 pUC19' } },
      { l: { en: 'Screen and sequence', zh: '篩選與定序' },
        s: { en: 'Mix-and-Go DH5alpha → blue/white on X-gal/IPTG/Amp → miniprep → Sanger', zh: 'Mix-and-Go DH5alpha→X-gal/IPTG/Amp 藍白篩選→miniprep→Sanger 定序' } },
      { l: { en: 'Express and cleave', zh: '表達與切割' },
        s: { en: 'BL21(DE3), IPTG/Tet → Ni-NTA → SDS-PAGE → SUMO protease → LC-MS', zh: 'BL21(DE3)、IPTG/Tet→Ni-NTA→SDS-PAGE→SUMO 蛋白酶→LC-MS' } },
      { l: { en: 'Bind, by ELISA', zh: '以 ELISA 測結合' },
        s: { en: 'Immobilised CTGF/C plus His-810A, detected with an anti-His antibody', zh: '固定化的 CTGF/C 加上 His-810A，以抗 His 抗體偵測' }, tone: 'g' },
      { l: { en: 'Spin and encapsulate', zh: '紡絲與包覆' },
        s: { en: 'Arachne coaxial fibre, alginate core at 1 / 2.5 / 4 / 5 wt %, viable CFU/mg to 48 h', zh: 'Arachne 同軸纖維，海藻酸鈉核心 1／2.5／4／5 wt%，活菌 CFU/mg 追到 48 小時' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Production and decay', zh: '生產與衰減' },
        s: { en: 'ODE dF/dt = alphaX − delta_F·F: fusion peptide against biomass', zh: 'ODE dF/dt = alphaX − delta_F·F：融合胜肽對菌體量' } },
      { l: { en: 'Induction curve', zh: '誘導曲線' },
        s: { en: 'Hill model for the Tet promoter, and for the ROS/hypoxia promoters to come', zh: 'Tet 啟動子的 Hill 模型，也預留給之後的 ROS／缺氧啟動子' } },
      { l: { en: 'How long to cleave', zh: '要切多久' },
        s: { en: 'Michaelis–Menten for SUMO protease: how much enzyme, for how long', zh: 'SUMO 蛋白酶的 Michaelis–Menten：要加多少酶、切多久' } },
      { l: { en: 'Fit the ELISA', zh: '擬合 ELISA' },
        s: { en: 'Hill–Langmuir isotherm, n fixed at 1; n not 1 would mean error, not cooperativity', zh: 'Hill–Langmuir 等溫式，n 固定為 1；n 不等於 1 代表誤差，而非協同性' }, tone: 'g' },
      { l: { en: 'Check Langmuir is legal', zh: '檢查 Langmuir 能不能用' },
        s: { en: 'Quadratic ligand-depletion model for when [CTGF] is close to [810A] and to KD', zh: '當 [CTGF] 接近 [810A] 又接近 KD 時，改用二次式配體耗竭模型' } },
      { l: { en: 'Does the cell state move?', zh: '細胞狀態會動嗎？' },
        s: { en: 'STRING v12.5 network → Netflux logic-ODE, COL1A1 accumulation as the endpoint', zh: 'STRING v12.5 網路→Netflux 邏輯 ODE，以 COL1A1 累積為終點指標' }, tone: 't' }
    ],
    links: [
      { w: 3, d: 1, l: { en: 'the Hill fit sets the induction point', zh: 'Hill 擬合決定誘導點' }, up: true },
      { w: 3, d: 2, l: { en: 'Michaelis–Menten sets the protease dose', zh: 'Michaelis–Menten 決定蛋白酶用量' }, up: true },
      { w: 4, d: 3, l: { en: 'ELISA points become a KD', zh: 'ELISA 數據點變成 KD' } }
    ]
  };

  PD.pages.cornell = {
    label: { en: 'Cornell', zh: 'Cornell' },
    title: { en: 'Cornell — Klothos', zh: 'Cornell — Klothos' },
    render: function (h) {
      var t = team('cornell');
      var out = h.teamhero(t, {
        h1: {
          en: 'Six models, and ==every one of them turns a planned assay into a number==.',
          zh: '六個模型，而==每一個都是為了把一個預定的實驗變成一個數字==。'
        },
        lede: {
          en: 'Six wet-lab phases, six chained models, and you can name the assay each model was built to interpret. That one-to-one discipline between the two labs is what puts Klothos on this list, along with a failure log honest enough to name the reversed electrode and the mislabelled ethanol bottle. The product itself is a smart bandage for chronic fibrotic wounds: a probiotic that makes its anti-scarring peptide only when the wound is both hypoxic and oxidative, spun into a coaxial alginate nanofibre mat by an electrospinner the team built themselves.',
          zh: '六個濕式階段、六個串接模型，而且每一個模型當初是為了解讀哪一個實驗，你都叫得出來。讓 Klothos 進入這份名單的，就是兩個實驗室之間這種一對一的紀律，再加上一份誠實到連「電極接反」與「乙醇瓶貼錯標」都寫出來的失敗紀錄。產品本身是給慢性纖維化傷口用的智慧敷料：一株只有在傷口同時缺氧又處於氧化壓力時才製造抗疤胜肽的益生菌，再由團隊自己做的靜電紡絲機紡成同軸海藻酸鈉奈米纖維墊。'
        },
        chips: [
          { t: { en: 'AND-gate promoter (hypoxia + ROS)', zh: 'AND 閘啟動子（缺氧＋ROS）' }, k: 'b' },
          { t: { en: '810A anti-CTGF peptide', zh: '810A 抗 CTGF 胜肽' }, k: 'v' },
          { t: { en: 'Coaxial alginate nanofibre', zh: '同軸海藻酸鈉奈米纖維' }, k: 't' },
          { t: { en: 'Arachne electrospinner', zh: 'Arachne 靜電紡絲機' }, k: 'g' },
          { t: { en: 'Netflux network model', zh: 'Netflux 網路模型' }, k: 'a' }
        ],
        stats: [
          { v: '6', l: { en: 'Wet-lab phases, each with DBTL cycles inside', zh: '濕式階段數，每個階段內部都跑 DBTL 迴圈' } },
          { v: '6', l: { en: 'Chained dry-lab models, one per assay', zh: '串接的乾式模型數，每個對應一個實驗' } },
          { v: '12 aa', l: { en: 'Length of 810A, the therapeutic peptide', zh: '治療胜肽 810A 的長度' } },
          { v: '>3 log', l: { en: 'Viable CFU lost in the first 24 h inside fibre', zh: '纖維中前 24 小時損失的活菌 CFU' } },
          { v: '1–4', l: { en: 'CFU per mg at plateau, at every alginate concentration', zh: '平台期每毫克 CFU，各海藻酸鈉濃度皆相同' } },
          { v: '48', l: { en: 'Weighted STRING edges in the scarring network', zh: '疤痕網路中加權的 STRING 邊數' } }
        ]
      });

      out += h.toc([
        { id: 'c-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'c-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'cornell-wik', t: { en: 'Their figures', zh: '他們的圖' } },
        { id: 'c-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'c-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'c-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'c-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'c-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'c-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A peptide that is only made where the wound is still sick', zh: '只在傷口仍然病著的地方才被製造的胜肽' },
        lede: {
          en: 'Fibrotic scarring affects more than 100 million people a year. The molecular target is CTGF (CCN2), and specifically its C-terminal cysteine-knot domain.',
          zh: '纖維化疤痕每年影響超過一億人。分子標靶是 CTGF（CCN2），確切地說是它 C 端的半胱胺酸結節結構域。'
        },
        body:
          h.p({
            en: 'The therapeutic is **810A**, a 12-amino-acid peptide that binds the CTGF C-terminus (Xiao et al.). The delivery decision is where the design work went: rather than dosing a peptide, Cornell put the peptide\'s gene into a probiotic and wrapped the probiotic in a coaxial alginate nanofibre mat — a bandage that keeps making the drug. The safety argument is a promoter, not a formulation: an **AND gate** combining a hypoxia-responsive promoter (pNarK-type) with a ROS-responsive one (pkatG), so 810A appears only where a wound is both oxygen-starved and inflamed, which is what a chronic wound is.',
            zh: '治療分子是 **810A**，一段與 CTGF C 端結合的 12 個胺基酸胜肽（Xiao 等人）。設計工作真正花在遞送這個決定上：Cornell 沒有直接投予胜肽，而是把胜肽的基因放進一株益生菌，再把益生菌包進同軸海藻酸鈉奈米纖維墊——一片會持續製造藥物的敷料。安全論證靠的是啟動子而不是配方：一個把缺氧反應型啟動子（pNarK 類）與 ROS 反應型啟動子（pkatG）結合起來的 **AND 閘**，使 810A 只在同時缺氧又發炎的地方出現，而那正是慢性傷口的定義。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'chassis path', zh: '底盤路線' }, k: 'b' }],
              h: { en: 'Three strains, for three jobs', zh: '三株菌，三種工作' },
              p: { en: 'Cloning in **E. coli DH5alpha**, expression in **BL21(DE3)**, and a consumer chassis that is still a plan rather than a result: **E. coli Nissle 1917** or a Lactobacillaceae. CTGF/C itself had to be expressed in **E. coli SHuffle**, because the mammalian domain needs disulfide bonds.', zh: '選殖用 **E. coli DH5alpha**、表達用 **BL21(DE3)**，而真正要上人體的底盤仍只是計畫、不是結果：**E. coli Nissle 1917** 或乳酸菌科。CTGF/C 本身則必須在 **E. coli SHuffle** 中表達，因為這個哺乳類結構域需要雙硫鍵。' } },
            { chips: [{ t: { en: 'parallel track', zh: '平行軌道' }, k: 'v' }],
              h: { en: 'They built their own binding target', zh: '他們自己做出要結合的標靶' },
              p: { en: 'Phase 2 of the wet lab is not the drug at all: it is assembling **CTGF/C** (residues 242–349, 12.3 kDa) so that there is something to run the ELISA against. Without that parallel track there is no KD, and without a KD four of the six models have nothing to fit.', zh: '濕式流程的第二階段跟藥物無關：它是為了組出 **CTGF/C**（242–349 號殘基、12.3 kDa），才有東西能拿來跑 ELISA。沒有這條平行軌道就沒有 KD，而沒有 KD，六個模型裡有四個就沒有東西可以擬合。' } },
            { chips: [{ t: { en: 'hardware in the critical path', zh: '硬體在關鍵路徑上' }, k: 't' }],
              h: { en: 'Arachne, because the product is a fibre', zh: 'Arachne，因為產品本身就是纖維' },
              p: { en: '**Arachne** is an in-house coaxial electrospinner with a supply up to **30 kV** and control of voltage, humidity, current, viscosity, needle-to-collector distance and flow rate, so fibre porosity is tunable. It was built as a cheap alternative to commercial units and its protocols are offered to future teams. Nothing about the product exists without it.', zh: '**Arachne** 是自製的同軸靜電紡絲機，電源最高 **30 kV**，可控制電壓、濕度、電流、黏度、針頭到收集板距離與流速，因此纖維孔隙度是可調的。它被做成商用機台的便宜替代品，協議也公開給後續團隊。少了它，這個產品的一切都不存在。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'c-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Six phases above, six models below, and they are paired', zh: '上面六個階段、下面六個模型，而且是兩兩對上的' },
        lede: {
          en: 'Two of the three handoffs run from the dry lab into the bench, and they are both operational: when to induce, and how much protease to add.',
          zh: '三次交接裡有兩次是從乾式流進實驗桌，而且都很操作性：什麼時候誘導、以及蛋白酶要加多少。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'Klothos: the two lanes and the three handoffs', zh: 'Klothos：兩條泳道與三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Engineering, Results and Model pages.', zh: '由我們依該隊 Description、Engineering、Results、Model 四頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the figures they drew themselves ---------------- */
      out += h.wikifigs('cornell');

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'c-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Six phases, and the last two are about the mat, not the molecule', zh: '六個階段，而最後兩個講的是纖維墊、不是分子' },
        lede: {
          en: 'The team names six phases and runs design–build–test–learn cycles inside each one: phases 1 and 2 are the drug and its target, phases 3 to 6 are circuitry, fibres, encasement and extrusion. The six blocks below follow the order the work actually ran in, which is ours, not their numbering.',
          zh: '團隊明列六個階段，並在每個階段內部跑 design–build–test–learn 迴圈：第一、二階段是藥物與它的標靶，第三到第六階段是電路、纖維、包覆與擠出。下面六個區塊照工作實際進行的順序排列，這個排法是我們的，不是他們的編號。'
        },
        body:
          h.phases([
            { h: { en: 'Two assembly tracks at once', zh: '兩條組裝軌道同時進行' },
              p: { en: 'Phase 1 assembles 810A; phase 2 assembles CTGF/C, the binding partner, purely so that the binding assay has a target.', zh: '第一階段組裝 810A；第二階段組裝結合對象 CTGF/C，純粹是為了讓結合實驗有標靶可用。' },
              items: [
                { en: 'The 810A cassette is designed in **SnapGene** as SUMO–6xHis–810A, with **TetR** and the overlapping tetR/tetA promoters taken from pUS212.', zh: '810A 卡匣在 **SnapGene** 中設計為 SUMO–6xHis–810A，並採用來自 pUS212 的 **TetR** 與重疊的 tetR/tetA 啟動子。' },
                { en: 'Both tracks are ordered as **IDT gene blocks** and amplified with 15 bp overhang primers (100 µM stock, 10 µM working).', zh: '兩條軌道都以 **IDT 基因片段**訂購，並用帶 15 bp 重疊的引子擴增（母液 100 µM、工作液 10 µM）。' }
              ] },
            { h: { en: 'Build, and gate on the numbers before assembly', zh: '建構，並在組裝前以數值設閘' },
              p: { en: '1 % agarose gel → Monarch gel extraction → DpnI digest of the parent plasmid (rCutSmart, 37 °C, 30 min) → NanoDrop QC → NEB HiFi assembly into pUC19 at 2:1 vector:insert in 10 µL.', zh: '1% 洋菜膠→Monarch 膠體回收→以 DpnI 消化母質體（rCutSmart、37 °C、30 分鐘）→NanoDrop 品管→以 2:1 載體:插入在 10 µL 中做 NEB HiFi 組裝接入 pUC19。' },
              items: [
                { en: 'The NanoDrop step is a real gate, not a formality: A260/280 and **A260/230** are both read, and one batch was rejected at A260/230 = 0.6 against a specification of 2.0–2.2.', zh: 'NanoDrop 這一步是真的閘，不是形式：A260/280 與 **A260/230** 都要讀，而有一批就是因為 A260/230 = 0.6（規格為 2.0–2.2）而被判不合格。' },
                { en: 'Transformation into chemically competent DH5alpha (Mix-and-Go), then **blue/white screening** on X-gal/IPTG/Amp, then miniprep and Sanger sequencing.', zh: '轉形至化學勝任的 DH5alpha（Mix-and-Go），接著在 X-gal/IPTG/Amp 上做**藍白篩選**，再 miniprep 與 Sanger 定序。' }
              ],
              done: { en: 'In the third cycle they stopped assembling in house and ordered the finished plasmid from IDT (pET-IDT backbone, KanR, T7/IPTG). It only transformed once heat shock was extended from the NEB protocol\'s 10 s to **45 s**.', zh: '第三個循環時他們放棄自行組裝，直接向 IDT 訂購完成的質體（pET-IDT 骨架、KanR、T7/IPTG）。而它只有在熱震從 NEB 協議的 10 秒延長到 **45 秒**之後才轉形成功。' } },
            { h: { en: 'Express, purify, cut the tag off', zh: '表達、純化、把標籤切掉' },
              p: { en: 'Re-transform BL21(DE3) for expression, induce with IPTG or Tet, purify on Ni-NTA through the 6xHis tag, check on SDS-PAGE, then cleave the SUMO tag and confirm by LC-MS.', zh: '重新轉形 BL21(DE3) 進行表達，以 IPTG 或 Tet 誘導，透過 6xHis 標籤以 Ni-NTA 純化，用 SDS-PAGE 檢查，再切掉 SUMO 標籤並以 LC-MS 確認。' },
              items: [
                { en: 'The protease step is not guessed at: the Michaelis–Menten model below exists to say how much enzyme and how long.', zh: '蛋白酶這一步不是猜的：下方的 Michaelis–Menten 模型就是為了回答要加多少酶、切多久。' },
                { en: 'CTGF/C is expressed in **SHuffle** instead, because a mammalian cysteine-knot domain needs disulfide bonds that BL21(DE3) will not form.', zh: 'CTGF/C 則改在 **SHuffle** 中表達，因為哺乳類的半胱胺酸結節結構域需要 BL21(DE3) 不會形成的雙硫鍵。' }
              ] },
            { h: { en: 'Measure the binding', zh: '量測結合' },
              p: { en: 'An ELISA with immobilised CTGF/C, His-810A as the analyte, and an anti-His antibody for detection.', zh: '以固定化的 CTGF/C 為基質、His-810A 為分析物、抗 His 抗體偵測的 ELISA。' },
              items: [
                { en: 'This single assay feeds two of the six models — the Hill–Langmuir isotherm and the ligand-depletion correction that checks whether the isotherm was allowed.', zh: '這一個實驗餵養六個模型中的兩個——Hill–Langmuir 等溫式，以及用來檢查該等溫式是否成立的配體耗竭校正。' }
              ] },
            { h: { en: 'Spin the cells into fibre', zh: '把細胞紡進纖維' },
              p: { en: 'pGLO E. coli electrospun on Arachne into coaxial fibres with a sodium-alginate core at 1, 2.5, 4 and 5 wt %, starting from a load of 1e8–1e10 CFU/mL.', zh: '帶 pGLO 的 E. coli 在 Arachne 上紡成同軸纖維，海藻酸鈉核心為 1、2.5、4、5 wt%，起始菌量 1e8–1e10 CFU/mL。' },
              items: [
                { en: 'Viable CFU/mg counted at 0, 12, 24, 36 and 48 h.', zh: '在 0、12、24、36、48 小時計數活菌 CFU/mg。' },
                { en: 'The core concentration is not a free choice: the settling study below sets its floor.', zh: '核心濃度不是自由選的：下方的沉降實驗為它設下了下限。' }
              ],
              done: { en: 'More than a **3 log** drop in viability in the first 24 h, then a plateau at **1–4 CFU/mg** for every mat. They report **n = 1 mat per concentration** and a **100×** piece-to-piece variation, attributed to clumping in the viscous core.', zh: '前 24 小時活性下降超過 **3 個對數級**，之後所有纖維墊都停在 **1–4 CFU/mg** 的平台。他們明寫**每個濃度只有 n = 1 片墊**，而且片與片之間差異達 **100 倍**，歸因於黏稠核心中的聚團。' } },
            { h: { en: 'Prove the process does not kill the cargo', zh: '證明製程不會殺掉載荷' },
              p: { en: 'Two separate controls on the two things the fibre process does to a cell: crosslinking it in calcium, and leaving it suspended in alginate.', zh: '針對纖維製程對細胞做的兩件事各設一個對照：用鈣交聯它，以及讓它懸浮在海藻酸鈉裡。' },
              items: [
                { en: 'Crosslink safety: 2 % CaCl2 for 0, 1, 3 and 4 min against a water control. All plates came back too many to count, with no visible loss — argued against the competent-cell literature, where 50–100 mM for 30 min is routine.', zh: '交聯安全性：2% CaCl2 處理 0、1、3、4 分鐘，並與水對照比較。所有培養盤都多到無法計數、看不出損失——並以勝任細胞文獻（50–100 mM、30 分鐘是常規）作為對照論證。' },
                { en: 'Settling: 0, 0.5, 1.25, 2 and 2.5 wt % alginate, OD600 read at the surface over 12 h, blank-subtracted and normalised to the maximum, with a surface-drop correction written into the protocol.', zh: '沉降：0、0.5、1.25、2、2.5 wt% 海藻酸鈉，於表面讀取 OD600 持續 12 小時，扣除空白並對最大值歸一化，協議中並寫入液面下降的校正。' }
              ],
              done: { en: 'Settling stops somewhere between **0.5 and 1.25 wt %** alginate, by a least-squares slope compared against the 0 wt % control with a two-sided t-test (df = 14, alpha = 0.05). That number is the minimum alginate for the spin formulation.', zh: '以最小平方斜率對 0 wt% 對照做雙尾 t 檢定（df = 14、alpha = 0.05），沉降在 **0.5 到 1.25 wt%** 之間停止。這個數字就是紡絲配方的海藻酸鈉下限。' } }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'c-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'Three small studies, each with its control named', zh: '三個小實驗，每個都把對照寫出來' },
        lede: {
          en: 'None of these needs expensive equipment. What makes them readable is that each one states what it was compared against and what decision it was allowed to make.',
          zh: '這三個實驗都不需要昂貴設備。讓它們讀得懂的原因是：每一個都寫出自己是跟什麼比較，以及它被允許做出什麼決定。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Study', zh: '實驗' }, w: '22%' },
              { t: { en: 'What it was compared against', zh: '與什麼比較' }, w: '34%' },
              { t: { en: 'What it was allowed to decide', zh: '它被允許決定什麼' } }
            ],
            rows: [
              [{ en: 'Viability in fibre (CFU/mg at 0–48 h)', zh: '纖維中的存活率（0–48 小時 CFU/mg）' },
               { en: 'Its own time zero, at four alginate core concentrations (1 / 2.5 / 4 / 5 wt %), from a 1e8–1e10 CFU/mL load.', zh: '以自己的時間零點為基準，四種海藻酸鈉核心濃度（1／2.5／4／5 wt%），起始菌量 1e8–1e10 CFU/mL。' },
               { en: 'Nothing about ranking the concentrations: with n = 1 mat each and 100× piece-to-piece spread, the only claim made is the shape — more than 3 log lost early, then a 1–4 CFU/mg plateau everywhere.', zh: '不足以為濃度排名：每個濃度只有 n = 1 片墊、片間差異 100 倍，唯一提出的主張是曲線形狀——早期掉超過 3 個對數級，之後各處都停在 1–4 CFU/mg。' }],
              [{ en: 'Crosslink safety (2 % CaCl2)', zh: '交聯安全性（2% CaCl2）' },
               { en: 'A water control at the same four exposure times (0 / 1 / 3 / 4 min), plus the competent-cell literature, where 50–100 mM for 30 min is routine.', zh: '相同四個暴露時間（0／1／3／4 分鐘）的水對照，再加上勝任細胞文獻（50–100 mM、30 分鐘為常規）。' },
               { en: 'That the crosslinking step can be ruled out as the cause of the viability loss — the plates were all too many to count with no visible loss.', zh: '可以把交聯這一步從存活率下降的原因中排除——所有培養盤都多到無法計數、看不出損失。' }],
              [{ en: 'Settling (OD600 at the surface, 12 h)', zh: '沉降（表面 OD600、12 小時）' },
               { en: 'The 0 wt % alginate control, by least-squares slope and a two-sided t-test (df = 14, alpha = 0.05), blank-subtracted and normalised to the maximum.', zh: '以最小平方斜率與雙尾 t 檢定（df = 14、alpha = 0.05）對 0 wt% 海藻酸鈉對照比較，並扣空白、對最大值歸一化。' },
               { en: 'The one number the spin formulation needs: the minimum alginate that stops the cells settling, somewhere between 0.5 and 1.25 wt %.', zh: '紡絲配方唯一需要的那個數字：能讓細胞不沉降的海藻酸鈉下限，位於 0.5 到 1.25 wt% 之間。' }]
            ],
            source: { en: 'Condensed from the team\'s Results and Measurement pages.', zh: '濃縮自該隊 Results 與 Measurement 頁。' }
          }) +
          h.take({ en: 'Only one of the three studies is allowed to settle a design choice', zh: '三個實驗裡只有一個有資格定下設計決策' }, {
            en: 'They publish **n = 1 mat per concentration and a 100× piece-to-piece variation in the same breath as the 1–4 CFU/mg plateau**, and they publish the slope test against the 0 wt % control rather than an eyeballed curve. The result is that a reader can see exactly which of the three studies is allowed to settle a design choice — the settling t-test — and which two are shape, not ranking. Stating the n next to the number costs nothing and is the difference between a figure and a claim.',
            zh: '他們把 **「每個濃度 n = 1 片墊、片間差異 100 倍」跟「1–4 CFU/mg 平台」寫在同一口氣裡**，而且公開的是對 0 wt% 對照的斜率檢定，而不是用眼睛看曲線。結果是讀者可以明確分出三個實驗中哪一個有資格定下設計決策——沉降 t 檢定——而哪兩個只給出形狀、不給出排名。把 n 寫在數字旁邊不花一毛錢，卻是「一張圖」與「一個主張」之間的差別。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'c-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'A chain of six models, each tied to exactly one assay', zh: '六個模型串成一條鏈，每一個只對應一個實驗' },
        lede: {
          en: 'There is no software tool on this project. The modelling is a chain, and the test of the chain is that you can name the assay each link was built to interpret.',
          zh: '這個專案沒有軟體工具。建模是一條鏈，而檢驗這條鏈的方法是：你能叫出每一環當初是為了解讀哪一個實驗而建的。'
        },
        body:
          h.flow({
            title: { en: 'From a promoter to a fibrosis endpoint, one model per assay', zh: '從啟動子到纖維化終點，每個實驗一個模型' },
            sub: { en: 'Read left to right: four of these exist so that a planned bench measurement produces a parameter rather than a picture.', zh: '由左至右讀：其中四個存在的理由，是讓一個預定的實驗量測產出參數、而不是產出一張圖。' },
            stages: [
              { label: { en: 'Make the peptide', zh: '製造胜肽' }, sub: { en: 'Production-degradation ODE', zh: '生產–降解 ODE' }, tone: 'b',
                items: [{ en: 'dF/dt = alphaX − delta_F·F', zh: 'dF/dt = alphaX − delta_F·F' }, { en: 'peptide against biomass', zh: '胜肽對菌體量' }] },
              { label: { en: 'Switch it on', zh: '把它打開' }, sub: { en: 'Hill induction model for the Tet promoter', zh: 'Tet 啟動子的 Hill 誘導模型' }, tone: 'b',
                items: [{ en: 'written to extend to the ROS and hypoxia promoters', zh: '預留可延伸到 ROS 與缺氧啟動子' }] },
              { label: { en: 'Cut the tag', zh: '切掉標籤' }, sub: { en: 'Michaelis–Menten for SUMO protease', zh: 'SUMO 蛋白酶的 Michaelis–Menten' }, tone: 'v',
                items: [{ en: 'how much protease, for how long', zh: '要加多少蛋白酶、切多久' }] },
              { label: { en: 'Fit the ELISA', zh: '擬合 ELISA' }, sub: { en: 'Hill–Langmuir isotherm, n fixed at 1', zh: 'Hill–Langmuir 等溫式，n 固定為 1' }, tone: 'g',
                items: [{ en: 'Signal = B + Smax[P]/(KD+[P])', zh: 'Signal = B + Smax[P]/(KD+[P])' }] },
              { label: { en: 'Check the fit was legal', zh: '檢查擬合是否成立' }, sub: { en: 'Quadratic ligand-depletion model', zh: '二次式配體耗竭模型' }, tone: 'a',
                items: [{ en: 'used when [CTGF] is close to [810A] and to KD', zh: '當 [CTGF] 接近 [810A] 又接近 KD 時使用' }] },
              { label: { en: 'Move the cell state', zh: '推動細胞狀態' }, sub: { en: 'STRING v12.5 network simulated in Netflux', zh: '以 Netflux 模擬 STRING v12.5 網路' }, tone: 't',
                items: [{ en: 'COL1A1 accumulation as the endpoint', zh: '以 COL1A1 累積為終點' }] }
            ],
            loop: { label: { en: 'every model exists to turn one planned assay into a number', zh: '每個模型存在的理由，都是把一個預定實驗變成一個數字' } },
            caption: { en: 'Drawn by us from the team\'s Model page. All six models and their assay pairings are the team\'s.', zh: '由我們依該隊 Model 頁繪製；六個模型與其對應實驗皆為該隊所列。' }
          }) +
          h.h3({ en: '1 · Production and degradation', zh: '1 · 生產與降解' }) +
          h.p({
            en: 'The first model is deliberately plain: **dF/dt = alphaX − delta_F·F**, the fusion peptide produced in proportion to biomass and lost at a first-order rate. It is the model that makes the induction and cleavage steps dimensionally compatible with each other, which is why it comes first rather than because it is interesting.',
            zh: '第一個模型刻意寫得很樸素：**dF/dt = alphaX − delta_F·F**，融合胜肽的生成與菌體量成正比、並以一階速率流失。它的作用是讓誘導與切割兩步在量綱上彼此相容，這才是它排第一的理由，而不是因為它有趣。'
          }) +
          h.h3({ en: '2 · Hill induction, written for a promoter they have not built yet', zh: '2 · Hill 誘導，為一個還沒做出來的啟動子而寫' }) +
          h.p({
            en: 'The Hill model is fitted for the **Tet** promoter, the one actually in hand, but it is written for the **ROS and hypoxia** promoters of the AND gate as well. That is the honest version of a forward-looking model: the structure is in place and the parameters are missing, and the write-up says which is which.',
            zh: 'Hill 模型是針對手上真的有的 **Tet** 啟動子擬合，但同時也是為 AND 閘的 **ROS 與缺氧**啟動子而寫。這是前瞻型模型比較誠實的樣子：架構已經在了、參數還沒有，而文件寫清楚哪個是哪個。'
          }) +
          h.h3({ en: '3 · Michaelis–Menten, as a protocol instruction', zh: '3 · Michaelis–Menten，當作一條操作指令' }) +
          h.p({
            en: 'The SUMO protease step is modelled with standard **Michaelis–Menten** kinetics for one reason: to answer how much protease to add and for how long. This is the clearest example of the project\'s habit — the model output is a line in a protocol, not a figure in a report.',
            zh: 'SUMO 蛋白酶這一步用標準 **Michaelis–Menten** 動力學建模，理由只有一個：回答要加多少蛋白酶、反應多久。這是整個專案習慣最清楚的例子——模型的輸出是協議裡的一行字，不是報告裡的一張圖。'
          }) +
          h.h3({ en: '4 · Hill–Langmuir, with n pinned at 1 on purpose', zh: '4 · Hill–Langmuir，刻意把 n 固定在 1' }) +
          h.p({
            en: 'The ELISA signal is fitted with **Signal = B + Smax[P]/(KD+[P])**, and the Hill coefficient is **fixed at n = 1** because 810A binds a single site. The team then states the consequence rather than hiding it: if a fit wanted n other than 1, that would indicate **error, not cooperativity**. Fixing a parameter and naming what a bad fit would mean is a stronger move than leaving it free.',
            zh: 'ELISA 訊號以 **Signal = B + Smax[P]/(KD+[P])** 擬合，而 Hill 係數**固定為 n = 1**，因為 810A 只結合單一位點。團隊接著把後果說出來、而不是藏起來：如果擬合想要 n 不等於 1，那代表的是**誤差，而不是協同性**。把參數固定下來、並寫明「擬合不好代表什麼」，比讓它自由浮動更強。'
          }) +
          h.h3({ en: '5 · Ligand depletion, the model that audits the model above it', zh: '5 · 配體耗竭，這個模型是用來審查上一個模型的' }) +
          h.p({
            en: 'A Langmuir isotherm assumes free ligand is approximately total ligand. When **[CTGF] is comparable to [810A] and to KD** — which is exactly the regime a tight 12-mer peptide gets you into — that assumption fails. So model 5 is a **quadratic ligand-depletion** treatment whose only job is to say whether model 4 was allowed in the first place.',
            zh: 'Langmuir 等溫式假設自由配體約等於總配體。當 **[CTGF] 與 [810A] 及 KD 相當**時——而這正是一段結合力強的 12 聚胜肽會把你帶進的情境——該假設就失效。所以第五個模型是**二次式配體耗竭**處理，它唯一的工作就是回答第四個模型當初到底能不能用。'
          }) +
          h.h3({ en: '6 · A reduced-order network, and an endpoint chosen in advance', zh: '6 · 降階網路模型，以及事先選定的終點' }) +
          h.p({
            en: 'The last model asks whether blocking CTGF actually moves a fibroblast out of the scarring state. A **STRING v12.5** network was filtered on the Human Phenotype Ontology term **Scarring (HP:0100699)** to **48 weighted edges**, then merged with CTGF (CCN2) **20 first-degree and 10 second-degree neighbours**; the hub nodes that came out are **SMAD3, FN1 and TGFB2**. It is simulated in **Netflux** as a normalised logic-ODE with modified Hill activation and inhibition and a per-node time constant, and the readout is fixed before the run: **COL1A1 accumulation** as the fibrosis endpoint.',
            zh: '最後一個模型問的是：阻斷 CTGF 到底能不能讓纖維母細胞離開形成疤痕的狀態。他們用 Human Phenotype Ontology 的 **Scarring（HP:0100699）** 對 **STRING v12.5** 網路過濾，得到 **48 條加權邊**，再與 CTGF（CCN2）的 **20 個一階鄰居與 10 個二階鄰居**合併；跑出來的樞紐節點是 **SMAD3、FN1 與 TGFB2**。模擬在 **Netflux** 中以歸一化邏輯 ODE 進行，採用修改過的 Hill 活化／抑制與每個節點各自的時間常數，而讀出指標在開跑前就定下來：以 **COL1A1 累積**作為纖維化終點。'
          }) +
          h.note({
            en: 'The structural work is deliberately modest and labelled as such: **AlphaFold** renders of 810A (12 aa, 1.4 kDa) and of CTGF/C (residues 242–349, 12.3 kDa). No docking score is used to choose anything; the binding number comes from the ELISA.',
            zh: '結構方面的工作刻意做得樸素，而且標示清楚：只有 810A（12 個胺基酸、1.4 kDa）與 CTGF/C（242–349 號殘基、12.3 kDa）的 **AlphaFold** 結構呈現。沒有用任何對接分數去決定任何事；結合的數字來自 ELISA。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'c-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'An unusually honest failure log', zh: '一份異常誠實的失敗紀錄' },
        lede: {
          en: 'These are the team\'s own entries, including the ones that are embarrassing rather than scientific. That is the point: three of the five cost weeks and none of them were a hypothesis being wrong.',
          zh: '以下都是該隊自己寫下的條目，包括那些與科學無關、純屬難堪的。而這正是重點：五條裡有三條耗掉了好幾週，而且沒有一條是「假設被推翻」。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'process failure', zh: '流程失誤' }, k: 'a' }],
              h: { en: 'The electrode polarity was reversed', zh: '電極極性接反了' },
              p: { en: 'A gel extraction was ruined because the electrodes were the wrong way round, and the PCR had to be repeated. Published as a step in the engineering cycle rather than quietly repeated.', zh: '因為電極接反而毀掉一次膠體回收，PCR 必須重跑。這件事被當成工程循環中的一步寫出來，而不是默默重做一次。' } },
            { chips: [{ t: { en: 'process failure', zh: '流程失誤' }, k: 'a' }],
              h: { en: '40 mL of ethanol instead of 20 mL', zh: '乙醇加了 40 mL 而不是 20 mL' },
              p: { en: 'A mislabelled bottle sent twice the ethanol into a wash buffer; the resulting prep read **A260/230 = 0.6** against a specification of 2.0–2.2 and was rejected. The failure is traceable only because the QC number was recorded in the first place.', zh: '一個貼錯標的瓶子讓洗滌緩衝液裡的乙醇加倍；結果該批次讀到 **A260/230 = 0.6**（規格 2.0–2.2）而被判不合格。這個失誤能被追出來，只因為當初有記下品管數值。' } },
            { chips: [{ t: { en: 'process failure', zh: '流程失誤' }, k: 'a' }],
              h: { en: 'Competent cells left out of the freezer', zh: '勝任細胞被留在冷凍庫外' },
              p: { en: 'A cell stock sat out of −80 °C for hours, which killed the competent cells and produced satellite-colony lawns on the ampicillin plates — a read-out they describe rather than discard.', zh: '一管菌株在 −80 °C 之外放了好幾個小時，勝任細胞因此死亡，在安比西林培養盤上長出衛星菌落的菌膜——這個結果他們是描述出來，而不是丟掉。' } },
            { chips: [{ t: { en: 'design broken by a deletion', zh: '設計被一段缺失破壞' }, k: 'r' }],
              h: { en: 'A 30 bp deletion made the circuit constitutive', zh: '30 bp 的缺失讓電路變成組成型' },
              p: { en: 'Sequencing found a **30 bp deletion across the tetR/tetA promoter**. The construct still expressed — it had simply stopped being inducible. This is the failure mode that a colony PCR or a growth check would never have caught.', zh: '定序發現 **tetR/tetA 啟動子區域有 30 bp 缺失**。這個構建體仍然會表達——它只是不再可被誘導。這正是菌落 PCR 或生長檢查永遠抓不到的失效模式。' } },
            { chips: [{ t: { en: 'gave up and bought it', zh: '放棄自製、直接購買' }, k: 'r' }],
              h: { en: 'In-house assembly abandoned in cycle 3', zh: '第三循環放棄自行組裝' },
              p: { en: 'The resolution was to order the finished plasmid from IDT (pET-IDT backbone, KanR, T7/IPTG). Even then transformation only worked when heat shock went from the NEB protocol\'s **10 s to 45 s** — a deviation they state instead of folding into "transformed successfully".', zh: '解法是直接向 IDT 訂購完成的質體（pET-IDT 骨架、KanR、T7/IPTG）。即使如此，也只有在熱震從 NEB 協議的 **10 秒延長到 45 秒**後才轉形成功——這個偏離他們寫了出來，而不是收進「轉形成功」一句話裡。' } },
            { chips: [{ t: { en: 'stated limitation', zh: '明列限制' }, k: 'r' }],
              h: { en: 'The consumer chassis is still a plan', zh: '面向使用者的底盤仍只是計畫' },
              p: { en: 'Everything measured was done in DH5alpha, BL21(DE3) or SHuffle. **Nissle 1917 and the Lactobacillaceae option are written as the next chassis, not as a result**, and the viability data that exists is for pGLO E. coli, not for the gated therapeutic strain.', zh: '所有量測都是在 DH5alpha、BL21(DE3) 或 SHuffle 中完成。**Nissle 1917 與乳酸菌科選項是寫成「下一個底盤」，不是結果**；而現有的存活率數據來自帶 pGLO 的 E. coli，不是那株受閘控的治療菌。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'c-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Write the assay next to the model before either exists.** Six models, six assays, and you can name the pairing for every one — the KD comes from the ELISA, the protease time from Michaelis–Menten, the minimum alginate from the settling t-test. A model with no named assay is the thing this structure makes visible.', zh: '**在模型與實驗都還不存在時，就把它們寫在彼此旁邊。** 六個模型、六個實驗，每一對都叫得出名字——KD 來自 ELISA、蛋白酶時間來自 Michaelis–Menten、海藻酸鈉下限來自沉降 t 檢定。這個結構真正讓人看見的，是那些叫不出對應實驗的模型。' },
            { en: '**Print the n and the spread in the same sentence as the number.** "1–4 CFU/mg, n = 1 mat per concentration, 100× piece-to-piece" is a usable result. "1–4 CFU/mg" alone is not, and the difference is one clause.', zh: '**把 n 與離散程度寫在數字的同一句話裡。** 「1–4 CFU/mg、每濃度 n = 1 片墊、片間差 100 倍」是一個可用的結果；只寫「1–4 CFU/mg」就不是，而兩者的差別只有一個從句。' },
            { en: '**Build the model that audits your other model.** The ligand-depletion model produces no new biology; it exists to say whether the Langmuir fit was allowed. One cheap check of a core assumption is worth more than a sixth mechanism.', zh: '**做一個用來審查你另一個模型的模型。** 配體耗竭模型不產生任何新的生物學；它存在的理由是回答 Langmuir 擬合到底能不能用。對核心假設做一次廉價檢查，價值高於再加第六個機制。' },
            { en: '**Fix a parameter and say what a bad fit would mean.** Pinning the Hill coefficient at n = 1 and writing "n other than 1 would indicate error, not cooperativity" turns the fit into a test. Free parameters absorb mistakes silently.', zh: '**把參數固定住，並寫明「擬合不好代表什麼」。** 把 Hill 係數固定在 n = 1，並寫下「n 不等於 1 代表誤差、而非協同性」，就把擬合變成一個檢定。自由參數只會默默吸收錯誤。' },
            { en: 'What we would **not** copy: letting a single mat per concentration stand as the viability dataset for the product\'s central claim. The shape of the curve is believable; the choice between 1 and 5 wt % is not, and the team is clear that it is not. We would spend the extra three mats before the extra model.', zh: '我們**不會**抄的是：讓每個濃度只有一片纖維墊的數據，承擔整個產品核心主張的存活率證據。曲線形狀是可信的；1 wt% 與 5 wt% 之間的選擇則不可信，而團隊自己也說清楚不可信。我們會先把那三片墊做出來，再去加下一個模型。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'Cornell is the cleanest example in the Top 10 of a dry lab with no software product and no spare models: six fits, six assays, and a hardware build in the critical path — spend a week reading their failure log before you plan your own engineering cycles.',
            zh: 'Cornell 是前十名中「沒有軟體產品、也沒有多餘模型」的乾式實驗最乾淨的例子：六個擬合、六個實驗，加上一台落在關鍵路徑上的自製硬體——在規劃自己的工程循環之前，先花一週把他們的失敗紀錄讀完。'
          })
      });

      return out;
    }
  };
})(window);
