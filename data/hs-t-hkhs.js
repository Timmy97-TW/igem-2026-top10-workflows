/* HongKong-HS — AmpliRen. Top 10 High School, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/hongkong-hs/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Clone four switches, sequence all four', zh: '選殖四個開關，四個全部定序' },
        s: { en: 'pET-14b-EGFP cut with XbaI and NdeI; plate controls behave; Sanger traces published for all four', zh: 'pET-14b-EGFP 以 XbaI 與 NdeI 切開；平板對照表現正常；四個的 Sanger 圖譜全部公開' }, tone: 'g' },
      { l: { en: 'Cell-free expression, five repeats', zh: '無細胞表達，五次重複' },
        s: { en: 'E. coli S30 kit, 37 °C, 4 h; trigger miRNA added at 25 µM; one-sample t-test', zh: '大腸桿菌 S30 套組、37 °C、4 小時；觸發 miRNA 以 25 µM 加入；單樣本 t 檢定' }, tone: 'r' },
      { l: { en: 'Titrate the HCR hairpins on gels', zh: '在膠體上滴定 HCR 髮夾' },
        s: { en: '0 to 100 nM target, 2 % agarose then PAGE; smears everywhere, faint large bands in one lane', zh: '標的由 0 到 100 nM，先 2% 瓊脂膠再 PAGE；處處拖尾，只有一道出現微弱的大分子帶' } },
      { l: { en: 'Read the G-quadruplex by fluorescence', zh: '以螢光讀出 G-四聯體' },
        s: { en: 'ThT, n = 3, ANOVA with Dunnett; miR-21-5p separates from the no-target control at 100 nM', zh: 'ThT、n=3、ANOVA 搭配 Dunnett；miR-21-5p 在 100 nM 與無標的對照分開' } },
      { l: { en: 'Read the same hairpins by colour', zh: '以顏色讀出同一批髮夾' },
        s: { en: 'Hemin and TMB, one reading per concentration; free miR-192-5p G4H1 colours on its own', zh: '血紅素與 TMB，每個濃度一個讀值；游離的 miR-192-5p G4H1 會自己顯色' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Pick the targets out of the literature', zh: '從文獻裡挑出標的' },
        s: { en: 'Five CKD-linked miRNAs screened; two dropped for being downregulated, one for only 1.4-fold', zh: '篩過五個與慢性腎病相關的 miRNA；兩個因為表現下降被剔除，一個因為只升高 1.4 倍' }, tone: 'v' },
      { l: { en: 'Generate 16 switch candidates', zh: '產生 16 個開關候選' },
        s: { en: 'miRADAR, from the 2024 Wageningen iGEM team: 9 for miR-21-5p, 7 for miR-192-5p', zh: 'miRADAR，來自 2024 年 Wageningen iGEM 隊：miR-21-5p 九個、miR-192-5p 七個' } },
      { l: { en: 'Screen them in NUPACK against five criteria', zh: '在 NUPACK 中依五項條件篩選' },
        s: { en: 'RNA, 37 °C, 1 µM switch and 3 µM miRNA; HMFE minus TMFE tabulated for every candidate', zh: 'RNA 模式、37 °C、開關 1 µM、miRNA 3 µM；每個候選的 HMFE 減 TMFE 都列成表' } },
      { l: { en: 'Model the hairpins before running them', zh: '在跑之前先模擬髮夾' },
        s: { en: 'NUPACK says the polymer forms with target — and that H1 binds H2 without it', zh: 'NUPACK 說有標的時聚合物會形成——也說沒有標的時 H1 會和 H2 結合' }, tone: 'a' },
      { l: { en: 'Turn the leak into sequence rules', zh: '把洩漏轉成序列規則' },
        s: { en: 'Stems 2–4 bp longer, G·C clamps, InG4 deeper in the loop, toeholds 18–22 nt — all proposed', zh: '莖延長 2–4 個鹼基對、加 G·C 夾、InG4 往環內挪、toehold 取 18–22 核苷酸——全部仍是提案' }, tone: 'v' }
    ],
    links: [
      { w: 0, d: 2, l: { en: 'NUPACK chose the four switches that got cloned', zh: 'NUPACK 挑出了後來被選殖的那四個開關' }, up: true },
      { w: 2, d: 3, l: { en: 'the predicted leak is why the gels were titrated', zh: '預測到的洩漏，正是膠體被滴定的理由' }, up: true },
      { w: 4, d: 4, l: { en: 'the colour from a free hairpin wrote the redesign list', zh: '游離髮夾顯的那個色，寫出了重新設計清單' } }
    ]
  };

  PD.pages['hs-hkhs'] = {
    label: { en: 'HongKong-HS', zh: 'HongKong-HS' },
    title: { en: 'HongKong-HS — AmpliRen', zh: 'HongKong-HS — AmpliRen' },
    render: function (h) {
      var t = team('hkhs');
      var out = h.teamhero(t, {
        h1: {
          en: 'Two detection routes, four engineering cycles, and ==a wiki that prints the readings that did not work== next to the ones that did.',
          zh: '兩條偵測路線、四個工程循環，還有==一個把失敗讀值和成功讀值並排印出來的 wiki==。'
        },
        lede: {
          en: 'Chronic kidney disease is found late because the standard tests move late: creatinine-based eGFR and the urine albumin ratio shift only after a large part of kidney function is gone. AmpliRen goes after urinary miRNA instead — miR-21-5p for fibrosis, miR-192-5p as an earlier warning — and tries two ways to read it. A toehold switch in a cell-free reaction was built, sequenced and measured, and it barely moved. Hybridisation chain reaction, which amplifies without any enzyme, was then built on top of a G-quadruplex colour readout and did move, for one of the two targets. The route is labelled "from design to evidence" on their own results page, and the useful thing about this wiki is that the evidence half is reported at its real size.',
          zh: '慢性腎病之所以被發現得晚，是因為標準檢查本身動得晚：基於肌酸酐的 eGFR 與尿液白蛋白比值，要等到腎功能已經失去一大部分之後才會變化。AmpliRen 改去追尿液中的 miRNA——miR-21-5p 看纖維化、miR-192-5p 當更早的警訊——並且試了兩種讀法。無細胞反應中的 toehold 開關被做出來、定了序、也量了，而它幾乎沒有動。接著是完全不靠酵素放大的雜交鏈反應，搭在 G-四聯體的顯色讀值上，而它確實動了，但只有兩個標的中的一個。這條路線在他們自己的結果頁上被標成「從設計到證據」，而這個 wiki 真正有用的地方，是證據那一半被按照它真實的大小報出來。'
        },
        chips: [
          { t: { en: 'Urinary miRNA, two targets', zh: '尿液 miRNA、兩個標的' }, k: 'b' },
          { t: { en: 'Toehold switch, cell-free', zh: 'Toehold 開關、無細胞' }, k: 'v' },
          { t: { en: 'Enzyme-free HCR', zh: '不用酵素的 HCR' }, k: 'g' },
          { t: { en: 'G-quadruplex colour readout', zh: 'G-四聯體顯色讀值' }, k: 'a' },
          { t: { en: 'Top 10 High School, no special prize', zh: '高中部前十名，未獲特別獎' }, k: 'n' }
        ],
        stats: [
          { v: '2 of 5', l: { en: 'CKD-linked miRNAs carried forward out of the five they screened', zh: '五個篩過的慢性腎病相關 miRNA 中被帶進下一步的數目' } },
          { v: '16 → 4', l: { en: 'Toehold candidates designed, then cloned and sequence-verified', zh: '設計出的 toehold 候選數，以及最後被選殖並定序確認的數目' } },
          { v: '25 µM', l: { en: 'Trigger miRNA concentration used in the cell-free switch assay', zh: '無細胞開關試驗中所用的觸發 miRNA 濃度' } },
          { v: '1.51×', l: { en: 'Best switch response, five repeats, not statistically significant', zh: '表現最好的開關反應，五次重複，未達統計顯著' } },
          { v: '28.1×', l: { en: 'Positive-control fold change in the same assay, so the system worked', zh: '同一試驗中陽性對照的倍數變化，可見系統本身是通的' } },
          { v: '0.200 / 0.231', l: { en: 'Colour from miR-192-5p G4H1 alone against the whole no-target mix', zh: '只有 miR-192-5p G4H1 時的顯色，對比整個無標的混合液' } }
        ]
      });

      out += h.toc([
        { id: 'h-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'h-two', t: { en: 'Two targets', zh: '兩個標的' } },
        { id: 'h-split', t: { en: 'Design vs evidence', zh: '設計與證據' } },
        { id: 'h-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'h-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'h-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'h-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'h-copy', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'h-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'The test is late because the marker is late', zh: '檢查之所以晚，是因為指標本身就晚' },
        lede: {
          en: 'Their case for urinary miRNA is not that it is new. It is that the two markers in clinical use change after the damage, and a molecule shed by injured kidney cells changes before it.',
          zh: '他們支持尿液 miRNA 的理由不是「它比較新」，而是：臨床在用的那兩個指標是在損傷之後才變化的，而受損腎細胞釋出的分子是在那之前就變化的。'
        },
        body:
          h.p({
            en: 'The clinical gap is written out with its mechanism, not just asserted. **Creatinine-based eGFR measures filtration rate rather than structural damage**, so injury can accumulate while the number stays normal; the team cite screening that **misses early injury in up to 30 % of diabetic patients** because the markers move only after roughly **half of kidney function is lost**. The **urine albumin-to-creatinine ratio** has the opposite problem: it moves, but it varies **by 30 % or more day to day**, so guidelines ask for the test to be repeated two or three times over weeks or months before anything is confirmed, and a result below **30 mg/g** is classified normal even though damage can progress underneath it. Cystatin C is better and **costs several times more**, which is their reason for leaving it out of the comparison as a practical option.',
            zh: '臨床上的缺口被連著機制一起寫出來，而不是只被宣稱。**基於肌酸酐的 eGFR 量的是過濾速率，而不是結構性損傷**，所以損傷可以一直累積而數字仍然正常；該隊引用的篩檢資料指出，由於指標要等到大約**一半腎功能已經失去**之後才會動，**在糖尿病患者中最多有 30% 的早期損傷被漏掉**。**尿液白蛋白與肌酸酐比值**的問題正好相反：它會動，但它**每天之間的變動可達 30% 以上**，所以指引要求在數週到數月間重複檢查兩到三次才能確認任何結論，而低於 **30 mg/g** 的結果會被歸為正常，儘管損傷可以在那個門檻底下繼續進展。半胱胺酸蛋白酶抑制劑 C 比較好，但**費用是好幾倍**，這就是他們不把它當成實用選項納入比較的理由。'
          }) +
          h.kv([
            [{ en: 'Why miRNA', zh: '為什麼用 miRNA' },
             { en: 'Stable in urine because it is carried inside microvesicles or bound to protein, and shed directly by injured kidney cells, so it moves before serum creatinine or significant albuminuria do. Sampling is non-invasive and repeatable without a biopsy.', zh: '在尿液中穩定，因為它被包在微囊泡裡或與蛋白結合，而且是受損腎細胞直接釋出的，所以它會比血清肌酸酐或明顯白蛋白尿更早變化。取樣是非侵入性的，而且不必做組織切片就能重複。' }],
            [{ en: 'Why a home kit', zh: '為什麼做家用套組' },
             { en: 'Their own street interviews put the barriers as no symptoms (about 63 % of respondents), cost (about 42 %) and time (about 40 %); an online survey of 283 put lack of symptoms at 86.2 %. Over 70 % of street respondents said they would use a non-invasive urine test.', zh: '他們自己的街訪把障礙排成：沒有症狀（約 63% 的受訪者）、費用（約 42%）、時間（約 40%）；283 人的線上問卷則把「沒有症狀」推到 86.2%。街訪中超過 70% 的人說他們願意使用非侵入性的尿液檢查。' }],
            [{ en: 'What it is allowed to claim', zh: '它被允許主張什麼' },
             { en: 'Two nephrologists and a laboratory technologist told them the same thing and the wiki repeats it: **a screening flag, not a diagnosis.** A positive result should send the user to primary care, and the kit needs a disclaimer because urine concentration and collection timing are not controllable.', zh: '兩位腎臟科醫師與一位醫務檢驗師告訴他們同一件事，而 wiki 把它重複寫出來：**這是篩檢的旗標，不是診斷。**陽性結果應該把使用者送去基層醫療，而這個套組需要免責說明，因為尿液濃度與採集時機都不可控。' }],
            [{ en: 'Who they consulted', zh: '他們諮詢了誰' },
             { en: 'Nephrologists Prof. Tang Chi Wai and Dr. Au Wing Han by email; Prof. Szeto Cheuk Chun on urinary miRNA, twice; Prof. Ma Mingyao (HKU) on clinical positioning; Prof. Chan Ting Fung on RNA biology and G-quadruplexes; a medical laboratory technologist on sample handling and cut-offs; and E-SENSE Innovation & Technology on moving a device out of the clinic.', zh: '以電子郵件諮詢腎臟科醫師鄧志偉教授與區詠嫻醫師；就尿液 miRNA 兩次訪問司徒卓俊教授；就臨床定位訪問香港大學馬明耀教授；就 RNA 生物學與 G-四聯體訪問陳廷鋒教授；就樣本處理與判讀切點訪問一位醫務檢驗師；並就「把裝置搬出診所」訪問 E-SENSE Innovation & Technology。' }]
          ]) +
          h.note({
            en: 'One thing the wiki labels that most do not: the kit visualisation on the home page carries the caption *"AI-assisted imagery and animation using Higgsfield"*, next to the sentence *"a research concept, not a validated diagnostic product."* The pretty object in the hero is marked as a drawing, not a device.',
            zh: '這個 wiki 標了一件多數 wiki 不會標的事：首頁上那個套組的視覺化，配的圖說是*「使用 Higgsfield 的 AI 輔助影像與動畫」*，旁邊還有一句*「這是一個研究概念，不是經過驗證的診斷產品」*。首圖裡那個漂亮的物件被標成一張圖，而不是一台裝置。'
          })
      });

      /* ---------------- two targets ---------------- */
      out += h.sec({
        id: 'h-two',
        kick: { en: 'The decision', zh: '那個決定' },
        h2: { en: 'Two miRNA routes in parallel — their reason, and ours', zh: '兩條 miRNA 路線並行——他們的理由，和我們的理由' },
        lede: {
          en: 'Carrying two targets doubles the cloning, doubles the hairpin design and doubles the assay work. It is worth separating why they say they did it from what it actually bought them.',
          zh: '帶兩個標的意味著選殖加倍、髮夾設計加倍、試驗工作也加倍。值得把「他們說為什麼這樣做」和「這樣做實際上換到了什麼」分開來看。'
        },
        body:
          h.p({
            en: '**Their stated reason is specificity, not insurance.** The argument on the engineering page is that CKD is *"not a single disease, but the final common pathway of several underlying conditions"*, so **no miRNA is specific to CKD on its own**; a two-marker panel covers the two commonest routes in, hypertensive nephropathy and diabetic nephropathy. The selection was a screen: five CKD-linked candidates (**miR-21-5p, miR-192-5p, miR-204-5p, miR-214-3p, miR-193a-3p**) against two criteria — significant **upregulation** in CKD urine, and detectable in **early to mid stages**. Two were dropped on the first criterion because the literature showed them **downregulated**, which their toehold design cannot read; one was dropped because it is only up **1.4-fold** against miR-21-5p\'s 2–5× and miR-192-5p\'s ~3×. The biology is split by role: miR-21-5p sits in the interstitial fibrotic area of renal tissue, miR-192-5p correlates with TGF-β1 in urinary vesicles in diabetic nephropathy.',
            zh: '**他們寫出來的理由是專一性，不是保險。**工程頁上的論點是：慢性腎病*「不是單一疾病，而是數種潛在狀況的最終共同路徑」*，所以**沒有任何一個 miRNA 本身對慢性腎病具有專一性**；一組兩個指標的面板，可以涵蓋最常見的兩條入口——高血壓性腎病與糖尿病腎病。這個選擇是一次篩選：五個與慢性腎病相關的候選（**miR-21-5p、miR-192-5p、miR-204-5p、miR-214-3p、miR-193a-3p**）對上兩項條件——在慢性腎病尿液中顯著**上升**，以及在**早期到中期**就能被偵測到。其中兩個在第一項條件就被剔除，因為文獻顯示它們是**下降**的，而他們的 toehold 設計讀不出下降；另一個被剔除是因為它只升高 **1.4 倍**，而 miR-21-5p 是 2–5 倍、miR-192-5p 約 3 倍。生物學上的分工很清楚：miR-21-5p 位於腎組織的間質纖維化區域，miR-192-5p 則在糖尿病腎病的尿液囊泡中與 TGF-β1 呈正相關。'
          }) +
          h.take({ en: 'The risk reading is ours, and the data supports it', zh: '把它讀成風險決策是我們的看法，而數據支持這個讀法' }, {
            en: 'Nowhere does the wiki say "two targets so that one failing does not end the project". But that is what happened. **In the HCR assays miR-21-5p produced a clean concentration-dependent signal and miR-192-5p did not** — its fluorescence fell below the no-target control at 1 nM, and its free H1 hairpin coloured on its own. Had they carried miR-192-5p alone, the amplification route would have no working demonstration at all. The parallel route is the reason this project has a positive result to report, and that is a design lesson worth stating even though they do not state it.',
            zh: 'wiki 裡沒有任何地方說「帶兩個標的，是為了讓其中一個失敗時專案不會結束」。但實際發生的就是這件事。**在 HCR 試驗中，miR-21-5p 給出乾淨的濃度依賴訊號，而 miR-192-5p 沒有**——它在 1 nM 時的螢光掉到無標的對照之下，而它游離的 H1 髮夾會自己顯色。如果他們當初只帶 miR-192-5p，這條放大路線就完全沒有可用的示範。這條並行路線正是這個專案還有正面結果可以報的原因，而即使他們自己沒有這樣說，這仍是一個值得講出來的設計教訓。'
          }) +
          h.h3({ en: 'The other reason it matters: the two targets were not built the same way', zh: '另一個讓它重要的理由：兩個標的不是用同一種方式做出來的' }) +
          h.ul([
            { en: 'For **miR-21-5p**, the HCR hairpins were **adopted from published work** — H1/H2 from Miao et al. (2016), and the G-quadruplex double loop-stem architecture from Peng et al. (2022).', zh: '對 **miR-21-5p**，HCR 髮夾是**沿用已發表的工作**——H1/H2 來自 Miao 等人（2016），而帶 G-四聯體的雙環莖結構來自 Peng 等人（2022）。' },
            { en: 'For **miR-192-5p**, the team **designed the hairpins themselves**, following the same architecture: a stem complementary to the target, an H1–H2 binding site, and the G-rich InG4 stretch placed in the loop.', zh: '對 **miR-192-5p**，髮夾是**該隊自己設計的**，沿用同一個架構：一段與標的互補的莖、一個 H1–H2 結合位，以及放在環裡的富含 G 的 InG4 片段。' },
            { en: 'So the route that worked is the one taken from the literature, and the route that leaked is the one they designed. **They say this plainly** — the free miR-192-5p G4H1 colouring without target is named as self-G4 formation and gets its own Learn section.', zh: '所以成功的那條路線是從文獻搬來的，而洩漏的那條是他們自己設計的。**這點他們直接寫了出來**——游離的 miR-192-5p G4H1 在沒有標的時顯色，被指名為自發形成 G-四聯體，並有自己獨立的一節 Learn。' },
            { en: 'Fourteen new parts are in the Registry from this: four basic toehold switches, four composite switch-plus-EGFP devices, and six HCR hairpins including both G-quadruplex pairs.', zh: '由此進入 Registry 的新零件共十四個：四個基礎 toehold 開關、四個「開關加 EGFP」的複合裝置，以及六個 HCR 髮夾，兩對帶 G-四聯體的都在其中。' }
          ])
      });

      /* ---------------- design vs evidence ---------------- */
      out += h.sec({
        id: 'h-split',
        kick: { en: 'The split', zh: '切開來看' },
        h2: { en: 'Which steps have data, and which are design only', zh: '哪些步驟有數據，哪些只有設計' },
        lede: {
          en: 'A route documented as design-then-evidence is only as strong as the evidence half. This table is the most useful thing we can add for a reader: every step of AmpliRen, sorted by what actually exists behind it.',
          zh: '一條以「先設計、後證據」記錄下來的路線，強度只等於證據那一半。這張表是我們能為讀者加上的最有用的東西：AmpliRen 的每一個步驟，依「它背後實際存在什麼」排開。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Step', zh: '步驟' }, w: '24%' },
              { t: { en: 'Status', zh: '狀態' }, w: '16%' },
              { t: { en: 'What exists behind it', zh: '背後實際存在什麼' } }
            ],
            rows: [
              [{ en: 'Choosing miR-21-5p and miR-192-5p', zh: '選定 miR-21-5p 與 miR-192-5p' },
               { en: '**Literature only**', zh: '**只有文獻**' },
               { en: 'Five candidates screened against two written criteria, three dropped with reasons. The team measured no urine of their own, so every upregulation figure is cited.', zh: '五個候選依兩項寫明的條件篩選，三個被剔除並附理由。該隊沒有量過自己的任何尿液，所以每一個上升倍數都是引用來的。' }],
              [{ en: '16 toehold candidate sequences', zh: '16 個 toehold 候選序列' },
               { en: '**Design**', zh: '**設計**' },
               { en: 'miRADAR, taken from the 2024 Wageningen iGEM team: 9 sequences for miR-21-5p, 7 for miR-192-5p, all printed in full on the engineering page.', zh: 'miRADAR，取自 2024 年 Wageningen iGEM 隊：miR-21-5p 九條、miR-192-5p 七條，全文都印在工程頁上。' }],
              [{ en: 'Screening the 16 in NUPACK', zh: '在 NUPACK 中篩選那 16 個' },
               { en: '**Design, with numbers**', zh: '**設計，有數字**' },
               { en: 'HMFE minus TMFE tabulated per candidate — 4.90 to 29.4 kcal/mol across the nine miR-21-5p switches, 10.2 to 20.9 across the seven for miR-192-5p — plus five written structural criteria.', zh: '每個候選的 HMFE 減 TMFE 都列成表——九個 miR-21-5p 開關為 4.90 到 29.4 kcal/mol、七個 miR-192-5p 的為 10.2 到 20.9——再加上五項寫明的結構條件。' }],
              [{ en: 'Cloning the four chosen switches', zh: '選殖被挑中的那四個開關' },
               { en: '**Data**', zh: '**有數據**' },
               { en: 'pET-14b-EGFP cut with XbaI and NdeI, vector gel-purified, oligos ordered with matching sticky ends. Negative control plate empty, positive control packed, all four recombinants gave colonies. **Sanger traces published for all four.**', zh: 'pET-14b-EGFP 以 XbaI 與 NdeI 切開、載體經膠體純化、寡核苷酸以相符的黏性末端訂購。陰性對照平板無菌落、陽性對照長得很密、四個重組體都長出菌落。**四個的 Sanger 圖譜全部公開。**' }],
              [{ en: 'Do the switches respond to their trigger?', zh: '那些開關會對它們的觸發物反應嗎？' },
               { en: '**Data, and it is negative**', zh: '**有數據，而且是負面的**' },
               { en: 'Five repeats, raw readings and fold changes both printed. Best response **1.51× (miR-192-5p-7) and not significant**; only miR-192-5p-6 reached significance, at **1.03×**; miR-21-5p-9 went **down**. Positive control in the same runs: **28.1×**.', zh: '五次重複，原始讀值與倍數變化都印出來。最好的反應是 **1.51 倍（miR-192-5p-7），而且不顯著**；只有 miR-192-5p-6 達到顯著，倍數是 **1.03**；miR-21-5p-9 是**下降**。同一批次的陽性對照是 **28.1 倍**。' }],
              [{ en: 'A reporter visible by eye (mCherry)', zh: '肉眼可見的報告子（mCherry）' },
               { en: '**Attempted, not obtained**', zh: '**嘗試過，沒拿到**' },
               { en: 'The engineering page says cloning was "still in progress". The notebook is more specific: seven dated entries from 26 August to 9 September record a longer incubation, BamHI swapped for BamHI-HF, a reversed digestion order, an overnight reaction, gel extraction and a single-enzyme activity check — each ending with no target bands.', zh: '工程頁說選殖「仍在進行中」。實驗記錄說得更具體：從 8 月 26 日到 9 月 9 日有七則標了日期的記錄，寫下延長培養時間、把 BamHI 換成 BamHI-HF、把切割順序倒過來、過夜反應、膠體回收，以及單一酵素的活性檢查——而每一次都以沒有目標帶收尾。' }],
              [{ en: 'HCR hairpins for miR-21-5p', zh: 'miR-21-5p 的 HCR 髮夾' },
               { en: '**Adopted**', zh: '**沿用**' },
               { en: 'H1/H2 from Miao et al. (2016); the G-quadruplex double loop-stem version from Peng et al. (2022). Credited in both places.', zh: 'H1/H2 來自 Miao 等人（2016）；帶 G-四聯體的雙環莖版本來自 Peng 等人（2022）。兩處都註明了出處。' }],
              [{ en: 'HCR hairpins for miR-192-5p', zh: 'miR-192-5p 的 HCR 髮夾' },
               { en: '**Their own design**', zh: '**他們自己的設計**' },
               { en: 'Built domain by domain on the same architecture, and the construction is described step by step. This is the pair that later leaked.', zh: '依同一個架構逐段建起來，而建構過程是一步一步寫下來的。後來洩漏的就是這一對。' }],
              [{ en: 'Does the polymer actually form?', zh: '那個聚合物真的形成了嗎？' },
               { en: '**Data, inconclusive**', zh: '**有數據，但無定論**' },
               { en: '2 % agarose, target titrated 0–100 nM: **smearing in every H1+H2+miRNA lane**, which they read as possible product but also possible overloading or aggregation. PAGE then gave **faint large bands in the 10 nM lane only**, with the reason stated — 5 µL of a 100 µL reaction was loaded.', zh: '2% 瓊脂膠，標的由 0 到 100 nM 滴定：**每一道含 H1+H2+miRNA 的膠道都拖尾**，他們把它讀成可能是產物，但也可能是上樣過量或聚集。接著的 PAGE **只在 10 nM 那一道給出微弱的大分子帶**，而理由被寫了出來——100 µL 反應只上了 5 µL。' }],
              [{ en: 'G-quadruplex by fluorescence, miR-21-5p', zh: '以螢光讀 G-四聯體，miR-21-5p' },
               { en: '**Data**', zh: '**有數據**' },
               { en: 'ThT, n = 3, one-way ANOVA with Dunnett: 100 nM differs from the 0 pM control at **p < 0.001**, and the series rises monotonically from 3.936 to 4.945 across the whole titration.', zh: 'ThT、n=3、單因子 ANOVA 搭配 Dunnett：100 nM 與 0 pM 對照的差異達 **p < 0.001**，而整個滴定序列由 3.936 單調上升到 4.945。' }],
              [{ en: 'G-quadruplex by fluorescence, miR-192-5p', zh: '以螢光讀 G-四聯體，miR-192-5p' },
               { en: '**Data, contradictory**', zh: '**有數據，但互相矛盾**' },
               { en: '100 nM differs from control at p = 0.002 — but so does **1 nM at p = 0.01, in the wrong direction**: 4.888 against a control of 5.212. They publish both and offer a hypothesis rather than dropping the point.', zh: '100 nM 與對照的差異為 p = 0.002——但 **1 nM 在 p = 0.01 下也有差異，而且方向是反的**：4.888 對上 5.212 的對照值。他們把兩者都公開，並提出一個假說，而不是把這個點刪掉。' }],
              [{ en: 'Colour readout by hemin and TMB', zh: '以血紅素與 TMB 做顯色讀值' },
               { en: '**Data, single run**', zh: '**有數據，但只有一次**' },
               { en: 'One reading per concentration, no replicates shown, and the team write that the conclusion **"remains inconclusive"** because of resource limits. miR-21-5p rises 0.1477 → 0.1894 across the series; miR-192-5p peaks at 100 pM and then falls.', zh: '每個濃度一個讀值、沒有列出重複，而該隊自己寫下，由於資源限制，結論**「仍然沒有定論」**。miR-21-5p 在整個序列中由 0.1477 升到 0.1894；miR-192-5p 在 100 pM 達到高峰，之後下降。' }],
              [{ en: 'Does a free hairpin colour on its own?', zh: '游離的髮夾會自己顯色嗎？' },
               { en: '**Data, and it says yes**', zh: '**有數據，而答案是會**' },
               { en: 'The control that mattered: **miR-192-5p G4H1 alone reads 0.2000 against 0.2305 for the complete no-target mix.** The miR-21-5p controls stay near 0.09. This single column is why the redesign list exists.', zh: '真正關鍵的那個對照：**只有 miR-192-5p G4H1 時讀到 0.2000，而完整的無標的混合液是 0.2305。**miR-21-5p 的對照則停在 0.09 附近。就是這一欄的數字，讓那份重新設計清單存在。' }],
              [{ en: 'Anything in real urine', zh: '任何在真實尿液中的測試' },
               { en: '**Not done**', zh: '**沒有做**' },
               { en: 'No patient urine, no spiked urine, no urine-only blank. Prof. Szeto named urinary chromogens as a risk to a colour readout and the wiki records it as *"a known risk to test"* — stated, not tested.', zh: '沒有病人尿液、沒有加標尿液、也沒有只有尿液的空白對照。司徒教授指出尿液色素是顯色讀值的一個風險，而 wiki 把它記成*「一個已知、待測的風險」*——是寫出來了，不是測過了。' }],
              [{ en: 'A clinical threshold to read the result against', zh: '一個用來判讀結果的臨床切點' },
               { en: '**Not done**', zh: '**沒有做**' },
               { en: 'The laboratory technologist told them a kit needs a clear cut-off aligned to concentrations seen in CKD patients. No number is proposed anywhere, and the assays run at 10 pM–100 nM without a stated link to urinary levels.', zh: '那位醫務檢驗師告訴他們，一個套組需要一個清楚的切點，並且要對齊慢性腎病患者身上實際看到的濃度。wiki 上任何地方都沒有提出一個數值，而試驗跑在 10 pM 到 100 nM 之間，也沒有說明它與尿液濃度的關係。' }],
              [{ en: 'Specificity against related miRNAs', zh: '對相近 miRNA 的專一性' },
               { en: '**Claimed, not measured**', zh: '**有主張，沒量過**' },
               { en: 'Single-base discrimination is cited for both toehold switches and HCR, and family homology is named as the reason it matters. No mismatch or related-family control was run.', zh: '單鹼基分辨能力在 toehold 開關與 HCR 兩邊都被引用，而家族同源性也被指名為它重要的原因。但沒有跑過任何錯配或近緣家族的對照。' }]
            ],
            min: 860,
            source: { en: 'Every row read from the team\'s Engineering, Results, Experiments, Parts and Notebook pages. The sort into design and evidence is ours.', zh: '每一列都讀自該隊的 Engineering、Results、Experiments、Parts 與 Notebook 頁。把它們分成設計與證據是我們做的。' }
          }) +
          h.take({ en: 'Where the line falls', zh: '那條線落在哪裡' }, {
            en: 'The amplification half of AmpliRen has evidence, for one target, on three independent readouts (gel, fluorescence, colour) with the leak controls that matter. The **recognition half does not**: the toehold switches were built properly and then failed to respond, and the visible reporter was never obtained. The kit that the home page unboxes sits entirely on the design side of this table — and the team say so, in the caption, on that page.',
            zh: 'AmpliRen 的放大那一半是有證據的：針對一個標的、在三種互相獨立的讀值上（膠體、螢光、顏色），而且做了關鍵的洩漏對照。**辨識那一半沒有**：toehold 開關被規規矩矩地做出來，然後沒有反應，而肉眼可見的報告子從來沒拿到。首頁上被開箱的那個套組，完全落在這張表的設計側——而該隊自己在那一頁的圖說裡就是這樣寫的。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'h-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The dry lane is a screen, and it predicted the failure it was then asked to fix', zh: '乾式那一側是一個篩選程序，而它預測到了後來要它去修的那個失敗' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'AmpliRen: five bench steps against five modelling steps', zh: 'AmpliRen：五個實驗檯步驟對上五個建模步驟' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone. The red step is the one whose data came back negative; the amber ones are where leakage showed up.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。紅色那一步是數據回來是負面的那一步；琥珀色的則是洩漏現身的地方。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Results, Experiments and Notebook pages.', zh: '由我們依該隊 Engineering、Results、Experiments 與 Notebook 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'h-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Four stages, in their order, with the controls that did the work', zh: '四個階段，依他們的順序，連同真正做了事的那些對照' },
        body:
          h.phases([
            { h: { en: 'Clone the switches, and verify them twice', zh: '選殖那些開關，並驗證兩次' },
              p: { en: 'Backbone **pET-14b-EGFP**: T7 promoter, EGFP reporter, T7 terminator, AmpR. The insertion site is between the **XbaI** and **NdeI** sites, chosen because both sit downstream of the promoter and upstream of the reporter — so the switch is transcribed as part of the reporter message rather than beside it.', zh: '骨架是 **pET-14b-EGFP**：T7 啟動子、EGFP 報告子、T7 終止子、AmpR。插入位置在 **XbaI** 與 **NdeI** 兩個位點之間，選它們的理由是兩者都在啟動子下游、報告子上游——所以開關是作為報告子轉錄本的一部分被轉錄出來，而不是被放在它旁邊。' },
              items: [
                { en: 'Switch oligos were **ordered commercially with matching sticky ends**, so the build is digest, gel-purify the vector, ligate, transform. Both controls were run on every plate: **bacteria alone gave no colonies, the non-recombinant plasmid gave packed colonies**, and all four recombinants gave countable colonies.', zh: '開關寡核苷酸是**以相符的黏性末端商業訂購**的，所以建構流程是切割、膠體純化載體、接合、轉形。每一塊平板上兩個對照都做了：**只有細菌時沒有菌落、非重組質體長得很密**，而四個重組體都長出可計數的菌落。' },
                { en: '**Verification is sequence-level and published:** Sanger traces for miR-21-5p-7, miR-21-5p-9, miR-192-5p-6 and miR-192-5p-7 all appear as figures. For a high-school project this is the step most often asserted rather than shown.', zh: '**驗證是序列層級的，而且公開了：**miR-21-5p-7、miR-21-5p-9、miR-192-5p-6 與 miR-192-5p-7 的 Sanger 圖譜都以圖的形式出現。對一個高中專案來說，這一步最常被宣稱而不是被展示。' },
                { en: 'The yield problem is written down with its diagnosis rather than smoothed over: miniprep eluates came out too dilute for downstream work, and they attribute it to **2.5 mL collection tubes and too short an incubation**, then repeat with **15 mL tubes and longer growth**. For miR-192-5p they also retransformed and then redid the ligation outright.', zh: '產量問題是連同它的診斷一起寫下來的，而不是被抹平：miniprep 洗出來的液太稀，不足以做下游實驗，而他們把原因歸到**2.5 mL 的收集管與培養時間太短**，然後改用**15 mL 管與更長的生長時間**重做。對 miR-192-5p 他們還重新轉形過一次，之後乾脆把接合整個重做。' }
              ],
              done: { en: 'Four switch plasmids, each confirmed by sequence, at concentrations between 29.65 and 60.68 ng/µl.', zh: '四個開關質體，每一個都經序列確認，濃度在 29.65 到 60.68 ng/µl 之間。' } },
            { h: { en: 'Measure them in a cell-free reaction, and report the result as it came', zh: '在無細胞反應中量它們，並照結果本來的樣子報出來' },
              p: { en: 'Cayman **E. coli S30** cell-free protein synthesis kit, **37 °C at 250 rpm for 4 hours**, EGFP read on a plate reader and a fluorometer at 488 nm excitation and 507–513 nm emission. **Five repeats**, one-sample t-test, with the raw readings, the fold change against the shared negative control and the fold change against each switch\'s own minus-trigger setup all printed as three separate tables.', zh: '使用 Cayman 的**大腸桿菌 S30** 無細胞蛋白合成套組，**37 °C、250 rpm、4 小時**，EGFP 以微孔盤讀儀與螢光計在 488 nm 激發、507–513 nm 放射下讀取。**五次重複**，單樣本 t 檢定，而原始讀值、對共用陰性對照的倍數變化、以及對各開關自己「不加觸發物」組的倍數變化，全部以三張分開的表印出來。' },
              items: [
                { en: '**The assay validity check came first and passed clearly:** the plasmid with no switch gave **28.1-fold** over its own negative (raw mean 2237 against 76.4). So the cell-free system expresses EGFP and the measurement can see it.', zh: '**試驗有效性的檢查排在前面，而且清楚通過了：**不帶開關的質體相對於自己的陰性對照給出 **28.1 倍**（原始平均 2237 對 76.4）。所以無細胞系統確實會表達 EGFP，而這個量測方式看得到它。' },
                { en: 'Then the switches: **miR-192-5p-7 at 1.51× (SD 0.423, not significant)**, miR-21-5p-7 at **1.18×**, miR-192-5p-6 at **1.03× and statistically significant**, miR-21-5p-9 at **0.92×** — a decrease. Their own conclusion: trends for two candidates, *"despite not reaching statistical significance."*', zh: '接著是那些開關：**miR-192-5p-7 為 1.51 倍（標準差 0.423，不顯著）**、miR-21-5p-7 為 **1.18 倍**、miR-192-5p-6 為 **1.03 倍且達統計顯著**、miR-21-5p-9 為 **0.92 倍**——是下降。他們自己的結論是：兩個候選有趨勢，*「儘管並未達到統計顯著」*。' },
                { en: 'A detail the page states and does not flag: **the trigger was added at 25 µM.** That is a very large excess — **250 times the top of their own HCR titration (100 nM)**, and far above anything urine would present. Reading the two numbers together is ours, and it is the reason we treat the switch route as untested at realistic concentrations rather than merely weak.', zh: '一個該頁寫出來、但沒有特別標示的細節：**觸發物是以 25 µM 加入的。**那是非常大的過量——**是他們自己 HCR 滴定上限（100 nM）的 250 倍**，也遠高於尿液可能提供的任何濃度。把這兩個數字放在一起讀是我們做的，而這也是我們把開關這條路線視為「在真實濃度下未經測試」、而不只是「反應微弱」的理由。' },
                { en: 'One figure to reconcile: the table gives miR-21-5p-7 as **1.18×** against its own minus-trigger setup, while the prose two paragraphs below says **1.14×**. Both are on the results page. The table is the one with the workings.', zh: '有一個數字需要對齊：表格把 miR-21-5p-7 相對於自己「不加觸發物」組的值寫成 **1.18 倍**，而往下兩段的文字寫的是 **1.14 倍**。兩者都在結果頁上。有列出計算過程的是表格那一邊。' },
                { en: 'Their own troubleshooting names two causes and does not pick one: pipetting bubbles reflecting fluorescence, and *"design of toehold switches may not be optimal and dry lab analysis might not accurately reflect in empirical testing."*', zh: '他們自己的排錯列出兩個原因，而且不挑哪一個：移液時的氣泡反射螢光，以及*「toehold 開關的設計可能不是最佳的，而乾式分析也可能無法準確反映在實測上」*。' }
              ],
              done: { en: 'A negative result with a working positive control next to it, which is the only form in which a negative result is informative.', zh: '一個負面結果，而它旁邊擺著一個確實有效的陽性對照——這是負面結果唯一能夠有資訊量的形式。' } },
            { h: { en: 'Titrate the hairpins on gels before trusting any readout', zh: '在相信任何讀值之前，先在膠體上滴定髮夾' },
              p: { en: 'Hairpins at **3.3 µM** in TMBS buffer (**25 mM Tris-HCl, 140 mM NaCl, 25 mM KCl, 10 mM MgAc**), denatured at 95 °C and cooled, then **37 °C for 3 hours**, target titrated **0 to 100 nM** plus a 1 µM point, 25 µL loaded on 2 % agarose at 80 V for 45 minutes.', zh: '髮夾以 **3.3 µM** 置於 TMBS 緩衝液中（**25 mM Tris-HCl、140 mM NaCl、25 mM KCl、10 mM MgAc**），95 °C 變性後冷卻，接著 **37 °C 培養 3 小時**，標的由 **0 到 100 nM** 滴定並加一個 1 µM 點，取 25 µL 上 2% 瓊脂膠，80 V 跑 45 分鐘。' },
              items: [
                { en: '**The gel did not settle it, and they say so.** Smearing appeared in every lane containing H1 + H2 + miRNA; they list overloading, DNA aggregation and the large pore size of agarose as alternative explanations to actual product, and move to PAGE for resolution.', zh: '**膠體沒有把這件事定案，而他們把這點說了出來。**每一道含 H1+H2+miRNA 的膠道都出現拖尾；他們把上樣過量、DNA 聚集與瓊脂膠孔徑過大列為「真有產物」之外的替代解釋，然後轉向 PAGE 以求解析度。' },
                { en: 'PAGE gave **faint large-molecular-weight bands in the 10 nM lane**, and the reason for faintness is given as a loading fact rather than an excuse: **5 µL out of a 100 µL reaction**. Their stated fixes are gel staining time and imaging time.', zh: 'PAGE 在 **10 nM 那一道給出微弱的高分子量帶**，而微弱的理由被當成一個上樣事實而不是藉口寫出來：**100 µL 反應中只取了 5 µL**。他們寫下的修正方向是膠體染色時間與拍攝時間。' },
                { en: 'PAGE also showed something they did not go looking for: **self-binding of H1**, which they name, cite as common in HCR assemblies, and carry forward into the redesign list.', zh: 'PAGE 還顯示了一件他們原本沒有在找的事：**H1 的自我結合**。他們把它指名出來、引文獻說明這在 HCR 組裝中並不罕見，並把它帶進重新設計清單。' }
              ] },
            { h: { en: 'Two readouts off the same hairpins, and the control that broke one of them', zh: '同一批髮夾上的兩種讀值，以及打破其中一種的那個對照' },
              p: { en: 'Both readouts measure the same thing — whether a G-quadruplex formed — by different physics. **ThT** lights up on binding a G-quadruplex and is read at 485 nm after 410 nm excitation. **Hemin** binds the G-quadruplex to make a peroxidase-mimicking DNAzyme, which oxidises TMB from colourless to blue; **2.0 M H₂SO₄** stops it and turns it yellow for reading at 450 nm.', zh: '兩種讀值量的是同一件事——有沒有形成 G-四聯體——只是用不同的物理。**ThT** 在結合 G-四聯體時發亮，以 410 nm 激發、485 nm 讀取。**血紅素**與 G-四聯體結合，形成模擬過氧化酶的 DNA 酶，把無色的 TMB 氧化成藍色；**2.0 M 硫酸**把反應停住並轉為黃色，在 450 nm 讀取。' },
              items: [
                { en: '**ThT, miR-21-5p: the clean result of the project.** Averages rise 3.936 (no target) → 3.964 → 4.198 → 4.202 → 4.306 → 4.945 across 0, 10 pM, 100 pM, 1 nM, 10 nM, 100 nM, with **100 nM separated from control at p < 0.001** by one-way ANOVA with Dunnett, n = 3.', zh: '**ThT、miR-21-5p：這個專案裡乾淨的那個結果。**平均值隨 0、10 pM、100 pM、1 nM、10 nM、100 nM 依序為 3.936（無標的）→3.964→4.198→4.202→4.306→4.945，而 **100 nM 與對照分開，p < 0.001**，單因子 ANOVA 搭配 Dunnett，n=3。' },
                { en: '**ThT, miR-192-5p: published as contradictory.** 100 nM differs from control (p = 0.002), but so does **1 nM — downward**, at 4.888 against a 5.212 control (p = 0.01). They offer a mechanism rather than silence: free hairpins fold G-quadruplexes on their own at low target, intermediate miRNA–H1 species distort that folding, and only at high target do long polymers outweigh it.', zh: '**ThT、miR-192-5p：被當成互相矛盾的結果公開。**100 nM 與對照有差異（p = 0.002），但 **1 nM 也有——而且是往下**，4.888 對上 5.212 的對照（p = 0.01）。他們沒有沉默，而是提出一個機制：在標的濃度低時，游離髮夾會自己折成 G-四聯體；中間態的 miRNA–H1 物種會擾亂那個折疊；只有在標的濃度高時，長聚合物才壓過它。' },
                { en: '**The hairpin-only controls are the point of the whole section.** For miR-21-5p, H1 alone 3.279, H2 alone 2.725, target alone 1.929 — against 3.936 for the no-target mix, so the background is already most of the signal and the window at 100 nM is about a quarter above it. They state this as *"the HCR hairpins are subjected to form G4 without the target miRNA present."*', zh: '**只有髮夾的那些對照，是整個這一節的重點。**對 miR-21-5p：只有 H1 是 3.279、只有 H2 是 2.725、只有標的是 1.929——而無標的混合液是 3.936，所以背景本身就已經佔掉訊號的大部分，而 100 nM 的窗口只比它高約四分之一。他們把這件事寫成*「HCR 髮夾在沒有標的 miRNA 存在時也會形成 G4」*。' },
                { en: '**Hemin/TMB: one reading per concentration, and the honest label on it.** miR-21-5p climbs 0.1477 → 0.1894 across the series with controls near 0.09; miR-192-5p peaks at 100 pM (0.2867) then falls through 1 nM, 10 nM and 100 nM. The team call the hemin/TMB conclusion **"inconclusive"** and give the reason — limited trials under project resource constraints.', zh: '**血紅素／TMB：每個濃度一個讀值，而他們給了它一個誠實的標籤。**miR-21-5p 在整個序列中由 0.1477 爬到 0.1894，對照在 0.09 附近；miR-192-5p 在 100 pM 達到高峰（0.2867），接著在 1 nM、10 nM、100 nM 一路下降。該隊把血紅素／TMB 的結論稱為**「沒有定論」**，並給出理由——在專案資源限制下試驗次數有限。' },
                { en: '**And then the number that mattered most:** free **miR-192-5p G4H1 alone read 0.2000**, against **0.2305** for the complete mix with no target. A hairpin that colours by itself cannot report anything. That one control is why Cycle 4 ends in a sequence redesign list instead of a product claim.', zh: '**接著是最關鍵的那個數字：**游離的**miR-192-5p G4H1 單獨就讀到 0.2000**，而完整但不加標的的混合液是 **0.2305**。一個自己就會顯色的髮夾，什麼都報不了。正是那一個對照，讓第四個循環以一份序列重新設計清單收尾，而不是以一個產品主張收尾。' }
              ],
              done: { en: 'One target amplified and read three independent ways; one target that showed exactly why its own hairpin cannot be trusted yet.', zh: '一個標的被放大、並以三種互相獨立的方式讀出；另一個標的則清楚顯示了為什麼它自己的髮夾目前還不能被信任。' } }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'h-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'A screening workflow, not a model — and it called the leak in advance', zh: '一套篩選流程，而不是一個模型——而它事先就把那個洩漏叫出來了' },
        lede: {
          en: 'There is no software release, no simulation of the kit and no hardware on this wiki. The dry lab is two tools used carefully: miRADAR to generate candidates, NUPACK to reject them.',
          zh: '這個 wiki 上沒有釋出任何軟體、沒有套組的模擬、也沒有硬體。所謂乾式實驗，是兩個被仔細使用的工具：用 miRADAR 產生候選，用 NUPACK 把它們剔除。'
        },
        body:
          h.p({
            en: '**miRADAR comes from the 2024 Wageningen iGEM team and is credited as such.** Feeding the two target sequences in as FASTA produced **9 candidate switches for miR-21-5p and 7 for miR-192-5p**, every one of which is printed in full on the engineering page. Every candidate was then simulated in **NUPACK** under one declared condition set — **RNA, 37 °C, 1 µM switch, 3 µM miRNA**, the excess chosen deliberately so the target is never limiting.',
            zh: '**miRADAR 來自 2024 年 Wageningen iGEM 隊，而且被註明了出處。**把兩個標的序列以 FASTA 餵進去，產生出 **miR-21-5p 的九個候選開關與 miR-192-5p 的七個**，而每一條都完整印在工程頁上。接著每個候選都在 **NUPACK** 中以一組明確宣告的條件模擬——**RNA 模式、37 °C、開關 1 µM、miRNA 3 µM**，而那個過量是刻意選的，為了讓標的永遠不是限制因素。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'criteria first', zh: '先定條件' }, k: 'b' }],
              h: { en: 'Five rules, written before the choice', zh: '五條規則，在挑選之前先寫下' },
              p: { en: 'High bound-switch concentration; no unintended secondary structure after the ribosome binding site; **HMFE below TMFE**, so the bound state is the favoured one; high G·C content for a stable closed hairpin; and the **RBS sequestered inside a loop** rather than exposed. Each rule carries the failure it is there to prevent — an exposed RBS gives background expression, a structure after the RBS gives a false negative.', zh: '結合態開關濃度高；核糖體結合位之後沒有非預期的二級結構；**HMFE 低於 TMFE**，使結合態成為被偏好的狀態；G·C 含量高，讓閉合髮夾穩定；以及 **RBS 被收在環裡**而不是外露。每一條規則都附上它要防止的那個失敗——RBS 外露會造成背景表達，RBS 之後有結構會造成偽陰性。' } },
            { chips: [{ t: { en: 'what was predicted', zh: '預測到了什麼' }, k: 'a' }],
              h: { en: 'The leak was on the page before it was on a gel', zh: '洩漏先出現在頁面上，才出現在膠體上' },
              p: { en: 'NUPACK on the HCR hairpins showed the polymer forming with target **and unintended H1–H2 binding without it.** They did not bury that, and they did not treat it as settled either: the source literature used **K⁺, Mg²⁺ and Na⁺ conditions NUPACK cannot represent**, which might remove the self-reaction, so they went to the bench to find out. The bench agreed with the model.', zh: '對 HCR 髮夾做的 NUPACK 分析顯示：有標的時聚合物會形成，**而沒有標的時 H1 與 H2 之間也會有非預期的結合。**他們沒有把這件事藏起來，也沒有當它已經定案：原始文獻使用的是 **NUPACK 無法表示的 K⁺、Mg²⁺ 與 Na⁺ 條件**，那可能會消去這個自我反應，所以他們去實驗檯上查。實驗檯的結果與模型一致。' } },
            { chips: [{ t: { en: 'what was not predicted', zh: '沒預測到什麼' }, k: 'r' }],
              h: { en: 'The ranking metric did not survive contact', zh: '那個排序指標沒有撐過與現實的接觸' },
              p: { en: 'Our reading of their two tables: in **both** target pairs, the switch with the **smaller** HMFE−TMFE gap gave the **larger** cell-free response — miR-21-5p candidate 7 (18.8 kcal/mol) beat candidate 9 (21.2), and miR-192-5p candidate 7 (16.6) beat candidate 6 (18.5). Two pairs is not a result. It is enough to say the metric that chose the candidates did not order them.', zh: '我們對他們那兩張表的讀法：在**兩**組標的中，HMFE−TMFE 差距**較小**的那個開關，在無細胞試驗中反而給出**較大**的反應——miR-21-5p 的候選 7（18.8 kcal/mol）勝過候選 9（21.2），而 miR-192-5p 的候選 7（16.6）勝過候選 6（18.5）。兩組不構成一個結果，但足以說一句：挑出候選的那個指標，並沒有把它們排對順序。' } }
          ]) +
          h.h3({ en: 'Predicted against measured, in one place', zh: '把預測與實測放在一起看' }) +
          h.tbl({
            cols: [
              { t: { en: 'Predicted in NUPACK', zh: 'NUPACK 的預測' }, w: '42%' },
              { t: { en: 'What the bench returned', zh: '實驗檯回來的結果' } }
            ],
            rows: [
              [{ en: 'All four chosen switches bind their target efficiently and linearise to expose the RBS.', zh: '被挑中的四個開關都能有效結合標的，並線性化以暴露 RBS。' },
               { en: '**Not reproduced.** Best fold change 1.51× at a 25 µM trigger, and not significant. The only significant switch moved 1.03×.', zh: '**沒有被重現。**在 25 µM 觸發物下最好的倍數變化是 1.51，而且不顯著。唯一顯著的那個開關只動了 1.03 倍。' }],
              [{ en: 'The selected switches hold a stable closed structure in the unbound state, keeping background low.', zh: '被選中的開關在未結合狀態下維持穩定的閉合結構，使背景維持在低處。' },
               { en: '**Consistent.** No-plasmid negatives averaged 76.4 raw units against 2237 for the positive control, so background expression was not the limiting problem.', zh: '**一致。**不加質體的陰性組原始平均為 76.4 單位，而陽性對照是 2237，所以背景表達並不是限制因素。' }],
              [{ en: 'H1 and H2 polymerise into long complexes when the target is present.', zh: '有標的存在時，H1 與 H2 會聚合成長的複合物。' },
               { en: '**Partly supported.** Agarose smears are ambiguous; PAGE gave faint high-mass bands in the 10 nM lane; ThT and colour both rise with miR-21-5p concentration.', zh: '**部分支持。**瓊脂膠的拖尾是模糊的；PAGE 在 10 nM 那一道給出微弱的高質量帶；而 ThT 與顏色都隨 miR-21-5p 濃度上升。' }],
              [{ en: 'H1 binds H2 without any target — flagged as a problem in advance.', zh: 'H1 在沒有任何標的時也會與 H2 結合——事先就被標為一個問題。' },
               { en: '**Confirmed, twice.** H1 self-binding visible on PAGE; hairpin-only ThT background at 3.279 and 2.725; miR-192-5p G4H1 alone colouring at 0.2000.', zh: '**兩次得到確認。**PAGE 上可見 H1 的自我結合；只有髮夾時 ThT 背景為 3.279 與 2.725；只有 miR-192-5p G4H1 時顯色達 0.2000。' }],
              [{ en: 'InG4 stretches sit in the loop of the assembled complex, where they can leave and fold into a G-quadruplex.', zh: 'InG4 片段位於組裝後複合物的環裡，可以從那裡離開並折成 G-四聯體。' },
               { en: '**Supported indirectly.** ThT and hemin both report G-quadruplex formation; nobody imaged or titrated the structure itself.', zh: '**間接得到支持。**ThT 與血紅素都報出 G-四聯體的形成；但沒有人直接對這個結構做影像或滴定。' }]
            ],
            min: 720,
            source: { en: 'Predictions from the team\'s Engineering page, measurements from their Results page. The pairing is ours.', zh: '預測取自該隊 Engineering 頁，量測取自 Results 頁。把兩邊配對起來是我們做的。' }
          }) +
          h.warn({
            en: '**On why HCR rather than an enzymatic amplification: the comparison is not made, so we will not supply one.** A toehold-switch readout driven by enzyme-free amplification is an unusual combination at any level, and their stated reasons for HCR are all positive ones — it is enzyme-free and isothermal at room temperature, one target initiates many hairpin events, the G-quadruplex output needs no fluorescence reader, and the literature reports limits of detection down to **92.7 fM** for toehold-mediated exponential HCR. Nowhere on the wiki is HCR weighed against RPA, LAMP or any other enzymatic isothermal method; those methods are not mentioned at all. Their limitations section for HCR is honest about the cost — **slow kinetics, background leakage, limited multiplexing** — but the choice is justified on its own merits rather than against the alternative.',
            zh: '**關於「為什麼選 HCR 而不是酵素型放大」：他們沒有做這個比較，所以我們也不會替他們補一個。**一個由不用酵素的放大來驅動的 toehold 開關讀值，在任何層級都是不尋常的組合，而他們為 HCR 寫下的理由全是正面的——不需酵素、在室溫下等溫、一個標的能引發許多髮夾事件、G-四聯體的輸出不需要螢光讀儀，而文獻報告 toehold 介導的指數型 HCR 偵測極限可低至 **92.7 fM**。這個 wiki 上沒有任何地方把 HCR 與 RPA、LAMP 或其他酵素型等溫方法放在一起衡量；那些方法完全沒有被提到。他們為 HCR 寫的限制一節對代價是誠實的——**動力學慢、背景洩漏、多重偵測受限**——但這個選擇是以它自身的優點被論證的，而不是對照替代方案被論證的。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'h-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, and where their own pages leave it', zh: '還沒解決的部分，以及他們自己的頁面把它留在哪裡' },
        lede: {
          en: 'Most of these are named by the team. A few are ours, and we say which.',
          zh: '這些大多是該隊自己指名的。有幾項是我們提出的，而我們會說明是哪幾項。'
        },
        body:
          h.ul([
            { en: '**No real urine, anywhere.** Every assay ran in buffer, with synthetic target spiked in. Prof. Szeto told them **urinary chromogens may mask or distort a colour readout**, and the wiki records that as *"a known risk to test"* against a urine-only blank. The blank was never run. The safety page also notes **restrictions on human samples for high-school teams**, which is a plausible reason — but a reason is not a result.', zh: '**任何地方都沒有真實尿液。**每一個試驗都在緩衝液中進行，加入的是合成標的。司徒教授告訴他們**尿液色素可能遮蔽或扭曲顯色讀值**，而 wiki 把這件事記成一個要用「只有尿液的空白對照」去測的*「已知風險」*。那個空白對照從來沒有跑過。安全頁也提到**高中隊伍在人體樣本上受到限制**，這是一個合理的理由——但理由不是結果。' },
            { en: '**No cut-off.** The medical laboratory technologist told them a kit needs a clear, reasonable threshold aligned to concentrations seen in CKD patients. The assays run from 10 pM to 100 nM; no page connects that range to urinary miRNA levels, and no threshold is proposed. **Ours:** without that link, "detects 100 nM" and "detects CKD" are different claims.', zh: '**沒有切點。**那位醫務檢驗師告訴他們，一個套組需要一個清楚、合理的門檻，而且要對齊慢性腎病患者身上看到的濃度。試驗跑在 10 pM 到 100 nM；沒有任何一頁把這個範圍連到尿液 miRNA 的實際濃度，也沒有提出任何門檻。**我們的看法：**少了這個連結，「能測到 100 nM」和「能測到慢性腎病」就是兩個不同的主張。' },
            { en: '**No specificity test against related miRNAs.** Single-base discrimination is cited for both toehold switches and HCR, and the team themselves name high homology within miRNA families as the reason it matters. No mismatched or related-family target was ever run as a control.', zh: '**沒有對相近 miRNA 的專一性測試。**單鹼基分辨能力在 toehold 開關與 HCR 兩邊都被引用，而該隊自己也指名 miRNA 家族內的高同源性正是它重要的原因。但從來沒有跑過任何錯配或近緣家族的標的作為對照。' },
            { en: '**Leakage is the central unsolved problem, and they treat it that way.** Free hairpins fold G-quadruplexes without target; the fix list is specific and entirely prospective — **stems 2–4 bp longer, G·C clamps at the stem termini, InG4 repositioned deeper in the loop, toeholds set to 18–22 nt, and a split-G4 design** so no intact motif exists in the closed state.', zh: '**洩漏是核心未解問題，而他們就是這樣處理它的。**游離髮夾在沒有標的時就會折出 G-四聯體；而修正清單很具體，且完全還在前瞻階段——**莖延長 2–4 個鹼基對、在莖端加 G·C 夾、把 InG4 往環內挪、toehold 設為 18–22 核苷酸，以及採用分裂式 G4 設計**，使閉合狀態下不存在完整的 G4 模組。' },
            { en: '**The colour is not yet readable by eye**, which is the entire point of choosing it. The team write that ThT confirmed emission increases for both targets but *"the subtle color gradients remain challenging to distinguish by the naked eye"*, and that reaction ratios still need optimising. A home kit whose readout needs a plate reader is not yet a home kit.', zh: '**那個顏色目前還不能用肉眼判讀**，而這正是選它的全部理由。該隊寫下：ThT 確認兩個標的的放射都有增加，但*「細微的顏色梯度仍然難以用肉眼區分」*，而反應比例還需要最佳化。一個讀值需要微孔盤讀儀的家用套組，還不算一個家用套組。' },
            { en: '**The hemin/TMB data is a single run.** One reading per concentration, no replicates shown, and the team label the conclusion inconclusive themselves. **Ours:** the ThT assay is the only amplification evidence with replicates and statistics behind it.', zh: '**血紅素／TMB 的數據只有一次。**每個濃度一個讀值、沒有列出重複，而該隊自己把結論標為沒有定論。**我們的看法：**ThT 試驗是唯一一個背後同時有重複與統計的放大證據。' },
            { en: '**The visible reporter was never obtained.** The engineering page says mCherry cloning was "still in progress" because of time; the notebook records the attempts failing, through seven dated entries ending 9 September with no target bands. **Ours:** the notebook is the more informative of the two pages here, and the engineering page would be stronger if it said what the notebook says.', zh: '**肉眼可見的報告子從來沒拿到。**工程頁說 mCherry 的選殖因為時間關係「仍在進行中」；實驗記錄則記下那些嘗試都失敗了，共五則標了日期的記錄，最後在 9 月 9 日以沒有目標帶收尾。**我們的看法：**在這件事上，實驗記錄比工程頁更有資訊量，而工程頁若照實驗記錄那樣寫，會更強。' },
            { en: '**The two targets have never been run together.** Prof. Chan suggested keeping both methods as a parallel strategy with **AND/OR logic** for interpretation and an **internal control band**; that is design only. No multiplexed reaction appears anywhere, and HCR\'s own limitations section names cross-talk between amplification pathways as a known risk.', zh: '**兩個標的從來沒有被一起跑過。**陳教授建議把兩種方法保留成並行策略，以 **AND／OR 邏輯**判讀，並加上一條**內部對照帶**；而那還只是設計。任何地方都沒有出現多重反應，而 HCR 自己的限制一節也把放大路徑之間的交叉干擾列為已知風險。' },
            { en: '**Sample stability is a stated risk with no protocol behind it.** The technologist warned that miRNA degrades and that home users have no refrigeration; the team\'s answer is to stabilise reagents and tell users to test immediately. Neither has been tested, and no ion effects were measured either — Prof. Chan suggested checking **Na⁺ interference with the DNAzyme**, which does not appear in any experiment.', zh: '**樣本穩定性是一個被寫出來、但背後沒有流程的風險。**那位檢驗師警告 miRNA 會降解，而家用者沒有冷藏設備；該隊的回答是把試劑穩定化，並告知使用者立即檢測。這兩點都沒有被測試過，離子效應也沒有被量過——陳教授曾建議檢查**Na⁺ 對 DNA 酶的干擾**，而這沒有出現在任何實驗中。' },
            { en: '**Two places where their own pages disagree, which a reader should know about.** The engineering timeline says miR-21-5p ThT was significant at **100 pM, 10 nM and 100 nM** while the results page reports only **100 nM**; and the human-practices stage-2 summary says they shifted *"from colourimetric readout toward fluorescence"* while every other page, including the Szeto interview on the same page, describes the move as fluorescence **to** colour. **Ours:** small, fixable, and worth fixing, because the results page is the one that is right.', zh: '**他們自己的頁面有兩處互相矛盾，讀者應該知道。**工程頁的時間軸說 miR-21-5p 的 ThT 在 **100 pM、10 nM 與 100 nM** 都顯著，而結果頁只報了 **100 nM**；而人類實踐頁第二階段的摘要說他們把方向*「從顯色讀值轉向螢光」*，但其他每一頁——包括同一頁上的司徒訪談——描述的方向都是從螢光**轉向**顏色。**我們的看法：**都是小問題、都能修，而且值得修，因為對的那一頁是結果頁。' },
            { en: '**And one number to tidy:** the public-engagement count appears as *"street interview (n~200)"* in one paragraph and **n = 137** in their own summary table two sections later.', zh: '**還有一個數字該整理：**公眾參與的人數在某一段裡寫成*「街訪（n 約 200）」*，而兩節之後他們自己的摘要表寫的是 **n = 137**。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'h-copy',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from HongKong-HS', zh: '我們會從 HongKong-HS 抄什麼' },
        body:
          h.ul([
            { en: '**Run the control that can break your own result.** H1 alone, H2 alone, target alone, and the complete mix with no target — four controls, run every time. One of them returned 0.2000 against 0.2305 and killed the miR-192-5p colour claim. A team that does not run that control ships the claim instead.', zh: '**去做那個能打破你自己結果的對照。**只有 H1、只有 H2、只有標的，以及完整但不加標的的混合液——四個對照，每次都做。其中一個回來的數字是 0.2000 對 0.2305，把 miR-192-5p 的顯色主張直接否掉了。一支不做這個對照的隊伍，端出去的會是那個主張。' },
            { en: '**Print the raw table, not the conclusion.** Five repeats, three fold-change framings, every reading visible — including 0.92× for a switch that went backwards. A reader can recompute what they concluded, which is the actual test of a results page.', zh: '**印出原始表格，而不是結論。**五次重複、三種倍數變化的呈現方式、每一個讀值都看得到——包括某個開關倒退的 0.92 倍。讀者可以重新算出他們的結論，而這才是一個結果頁真正的檢驗。' },
            { en: '**Check that your assay works before you judge anything with it.** The 28.1× positive control is what makes the negative switch result mean something. Without it, 1.51× is unreadable: a weak switch and a dead cell-free reaction look identical.', zh: '**在用一個試驗去評判任何東西之前，先確認那個試驗本身是通的。**28.1 倍的陽性對照，才讓那個負面的開關結果具有意義。少了它，1.51 倍是無法判讀的：一個反應微弱的開關，和一個死掉的無細胞反應，看起來一模一樣。' },
            { en: '**Publish the prediction that turned out right about a failure.** NUPACK said H1 would bind H2 without target. They printed it, said why the model might be wrong about it, went to the bench, and found the model was right. A dry lab that only publishes its successful predictions is not a dry lab.', zh: '**把那個「對失敗預測正確」的預測公開出來。**NUPACK 說 H1 在沒有標的時也會結合 H2。他們把它印出來，說明這個模型在這件事上為什麼可能是錯的，然後去實驗檯上查，結果發現模型是對的。一個只公開自己成功預測的乾式實驗，不算乾式實驗。' },
            { en: '**Write down the tool\'s own limits in the same breath as its output.** NUPACK could not represent the K⁺, Mg²⁺ and Na⁺ conditions of the source paper, so the simulation could not settle the leakage question — stated on the page, as the reason for doing the experiment.', zh: '**在寫出工具輸出的同一口氣裡，寫下那個工具自己的限制。**NUPACK 無法表示原始論文的 K⁺、Mg²⁺ 與 Na⁺ 條件，所以那個模擬沒辦法把洩漏問題定案——這點寫在頁面上，並且被當成「為什麼要去做實驗」的理由。' },
            { en: '**Carry two routes when either could fail.** Their stated reason was specificity; the effect was that the project still had a demonstrable amplification result when one of the two hairpin pairs leaked. Both reasons are good. Say both.', zh: '**當兩條路線都可能失敗時，就兩條都帶著走。**他們寫出來的理由是專一性；而實際效果是，當兩對髮夾中的一對洩漏時，這個專案仍然有一個可示範的放大結果。兩個理由都成立。那就兩個都說。' },
            { en: '**Let a reversal be a result.** PID-style tidiness would have hidden four of their five readout attempts. Instead: EGFP not visible by eye, so mCherry; mCherry not obtained, so HCR; gel detection incompatible with a home kit, so G-quadruplex; ThT needs a UV reader, so hemin and TMB. Each pivot is published with the reason it was forced.', zh: '**讓一次推翻本身成為一個結果。**若追求整潔，他們五次讀值嘗試中有四次會被藏起來。但實際上是：EGFP 肉眼看不到，所以改 mCherry；mCherry 拿不到，所以改 HCR；膠體偵測和家用套組不相容，所以改 G-四聯體；ThT 需要紫外光讀儀，所以改血紅素與 TMB。每一次轉向都連同「它為什麼是被迫的」一起公開。' },
            { en: '**Credit the tool and the sequence you did not design.** miRADAR is attributed to the 2024 Wageningen iGEM team; the miR-21-5p hairpins to Miao et al. (2016); the double loop-stem G-quadruplex architecture to Peng et al. (2022). The sentence costs nothing and tells the reader which half of the work is new.', zh: '**為你沒有自己設計的工具與序列註明出處。**miRADAR 歸給 2024 年 Wageningen iGEM 隊；miR-21-5p 的髮夾歸給 Miao 等人（2016）；雙環莖的 G-四聯體架構歸給 Peng 等人（2022）。寫這一句不花什麼成本，卻告訴讀者這份工作有哪一半是新的。' },
            { en: '**Label the rendering.** "AI-assisted imagery and animation using Higgsfield", under the kit that does not exist yet, next to "a research concept, not a validated diagnostic product". The most visually polished page on this wiki is also the one that tells you it is a drawing.', zh: '**標註那張渲染圖。**「使用 Higgsfield 的 AI 輔助影像與動畫」，寫在那個還不存在的套組底下，旁邊是「這是一個研究概念，不是經過驗證的診斷產品」。這個 wiki 上視覺最精緻的一頁，同時也是告訴你「這是一張圖」的那一頁。' },
            { en: '**Let the notebook be more specific than the summary.** Seven dated entries recording the same digestion failing in six different ways is worth more to the next team than "still in progress" — which is also why the summary should borrow the notebook\'s honesty rather than the other way round.', zh: '**讓實驗記錄比摘要更具體。**七則標了日期、記下同一個切割反應以六種不同方式失敗的記錄，對下一支隊伍的價值遠高於「仍在進行中」——這也正是為什麼摘要該向實驗記錄借誠實，而不是反過來。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the eleven items above, the design-versus-evidence split in the table, the reading of the 25 µM trigger against the HCR titration range, the observation about the HMFE−TMFE ranking, and the risk framing of the two-target decision. Everything else is the team\'s own, read from [2026.igem.wiki/hongkong-hs](https://2026.igem.wiki/hongkong-hs/). On awards: **Top 10 High School**, and nominated for Best Village Project and Best Wiki in the high-school division. **No special prize was won** — the nominations are nominations.',
            zh: '標示為我們的看法：上面十一點、表格裡「設計對證據」的切分、把 25 µM 觸發物與 HCR 滴定範圍放在一起的讀法、關於 HMFE−TMFE 排序的那個觀察，以及把「兩個標的」當成風險決策的框定。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/hongkong-hs](https://2026.igem.wiki/hongkong-hs/)。關於獎項：**高中部前十名**，並獲提名高中組的最佳村落專案與最佳 Wiki。**沒有獲得任何特別獎**——提名就只是提名。'
          })
      });

      return out;
    }
  };
})(window);
