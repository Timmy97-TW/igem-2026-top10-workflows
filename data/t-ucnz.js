/* UCNZ — NanoBrew. Top 10 Undergraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/ucnz/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teams || []).filter(function (t) { return t.id === id; })[0] || {}; }

  /* the wet/dry swimlane for this team, drawn by wf.js */
  var SWIM = {
    wet: [
      { l: { en: 'Order six constructs pre-cloned', zh: '直接訂六個已選殖好的構建體' },
        s: { en: 'Twist, already in vector; two markers so co-expression stays open; no restriction-site design at all', zh: 'Twist 代工、已接在載體上；用兩種抗性以保留共表達可能；完全不必設計限制酶切位' } },
      { l: { en: 'Sequence-verify, then freeze the stock', zh: '先定序，再做保存株' },
        s: { en: 'Plasmidsaurus on all six: 100 % matches; the sequenced overnight culture became the glycerol stock', zh: '六個全部送 Plasmidsaurus：100% 相符；被定序的隔夜培養液就是甘油保存株的來源' } },
      { l: { en: 'Grid the induction, fractionate four ways', zh: '掃描誘導條件，做四個區隔的分離' },
        s: { en: '0.1 and 1 mM IPTG across 22, 30, 37 °C → 30 °C wins; HiSiaP run as a control on the method itself', zh: '0.1 與 1 mM IPTG 搭配 22、30、37 °C → 30 °C 勝出；並用 HiSiaP 作為方法本身的對照' }, tone: 'a' },
      { l: { en: 'Purify, then assay with DNS', zh: '純化，再用 DNS 測活性' },
        s: { en: 'Äkta Go + 5 mL HisTrap; EG-CBM gave ~230 mg from 2 L, XynA only ~0.61 mg; read at 540 nm', zh: 'Äkta Go＋5 mL HisTrap；EG-CBM 由 2 L 得約 230 mg，XynA 只有約 0.61 mg；在 540 nm 讀值' } },
      { l: { en: 'Make the product, then fail to identify it', zh: '做出產物，然後無法確認它是什麼' },
        s: { en: 'EG-CBM on BSG, 25 min sonication, 33,000 × g; AFM saw aggregates, FTIR matched a synthetic oil', zh: 'EG-CBM 作用於 BSG、超音波 25 分鐘、33,000 × g；AFM 看到聚集體，FTIR 比對到合成油' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Gate the fusions before ordering', zh: '下訂之前先替融合蛋白設關卡' },
        s: { en: 'AlphaFold 3 + PyMOL 3.2.0a: every RMSD under 2 Å, but fusion pTM as low as 0.56, and they say so', zh: 'AlphaFold 3＋PyMOL 3.2.0a：所有 RMSD 都小於 2 Å，但融合體 pTM 低至 0.56，而他們寫出來了' } },
      { l: { en: 'Borrow the ancestor, do not rebuild it', zh: '借用祖先序列，而非自己重建' },
        s: { en: 'Cel5A taken as a published sequence from Barruetabeña et al. 2019; no phylogeny, no ASR tool, no MD', zh: 'Cel5A 直接取用 Barruetabeña 等人 2019 的已發表序列；沒有親緣樹、沒有 ASR 工具、沒有 MD' }, tone: 'a' },
      { l: { en: 'Simulate the sensor, not the sample', zh: '模擬感測器，而不是樣品' },
        s: { en: 'Capillarix viscometer: under 5 % error against water, up to 22.87 % against oil', zh: 'Capillarix 黏度計：對水的誤差小於 5%，對油則高達 22.87%' }, tone: 'a' },
      { l: { en: 'Benchmark the economics, refuse the number', zh: '把經濟性當基準，拒絕給出數字' },
        s: { en: 'Lan et al. 2024 CNF-1 TEA scaled to 0.01 dry t/day; the NPV formula is written out and not computed', zh: '把 Lan 等人 2024 的 CNF-1 TEA 縮放到每日 0.01 乾噸；NPV 公式寫出來了卻刻意不計算' }, tone: 'r' },
      { l: { en: 'Write the negative result up as the contribution', zh: '把陰性結果寫成貢獻本身' },
        s: { en: 'YebF was barely documented in the Registry, so three new parts now carry the record', zh: 'YebF 在 Registry 幾乎沒有文件，因此現在由三個新零件承載這份紀錄' } }
    ],
    links: [
      { w: 0, d: 0, l: { en: 'the fold gate clears the gene order', zh: '摺疊關卡放行這批基因訂單' }, up: true },
      { w: 0, d: 1, l: { en: 'the ancestor arrives as a published sequence', zh: '祖先酵素以已發表序列的形式到手' }, up: true },
      { w: 2, d: 4, l: { en: 'their own HiSiaP control disqualified the secretion claim', zh: '他們自己的 HiSiaP 對照否決了分泌的主張' } }
    ]
  };

  PD.pages.ucnz = {
    label: { en: 'UCNZ', zh: 'UCNZ' },
    title: { en: 'UCNZ — NanoBrew', zh: 'UCNZ — NanoBrew' },
    render: function (h) {
      var t = team('ucnz');
      var out = h.teamhero(t, {
        h1: {
          en: 'A borrowed periplasmic protein was run as a control on their own fractionation, and it ==disqualified every extracellular lane they had==.',
          zh: '他們借來一個週質蛋白，拿去當自己分離方法的對照，結果它==否決了他們手上每一條胞外樣品的膠道==。'
        },
        lede: {
          en: 'NanoBrew turns brewers\' spent grain into nanocellulose with two secreted enzymes working in sequence: XynA, a Bacillus subtilis 168 endo-1,4-β-xylanase, strips hemicellulose to expose cellulose, and an ancestral Cel5A endoglucanase then cuts the exposed cellulose into fibrils. Two of the project\'s three load-bearing claims did not survive its own controls. The YebF secretion tag never secreted anything, and at wiki freeze the product is not demonstrated to be nanocellulose. The team reports both in the same register as the things that worked, which is why this page is worth reading.',
          zh: 'NanoBrew 用兩個依序作用的分泌型酵素，把啤酒糟（brewers\' spent grain, BSG）變成奈米纖維素：XynA 是來自 Bacillus subtilis 168 的 endo-1,4-β-xylanase，負責剝除半纖維素以暴露纖維素；接著由祖先型的 Cel5A 內切葡聚醣酶把暴露出來的纖維素切成纖絲。這個專案三個承重的主張裡有兩個沒能通過自己設下的對照：YebF 分泌標籤從未分泌出任何東西，而在 wiki 凍結時，產物也沒有被證明是奈米纖維素。團隊把這兩件事和那些成功的事用同一種語氣寫出來，這就是這一頁值得讀的理由。'
        },
        chips: [
          { t: { en: 'XynA xylanase', zh: 'XynA 木聚醣酶' }, k: 'b' },
          { t: { en: 'Ancestral Cel5A (EG-CBM)', zh: '祖先型 Cel5A（EG-CBM）' }, k: 'g' },
          { t: { en: 'YebF secretion — failed', zh: 'YebF 分泌——失敗' }, k: 'r' },
          { t: { en: 'DNS assay, 5 DBTL cycles', zh: 'DNS 分析法，5 個 DBTL 迴圈' }, k: 'v' },
          { t: { en: 'Brewers\' spent grain', zh: '啤酒糟（BSG）' }, k: 't' }
        ],
        stats: [
          { v: '6 / 6', l: { en: 'Constructs sequenced, all 100 % matches with no mutations', zh: '送定序的構建體，全部 100% 相符且無突變' } },
          { v: '5', l: { en: 'DBTL iterations on the DNS assay before any construct was judged', zh: 'DNS 分析法在評判任何構建體之前跑過的 DBTL 迭代數' } },
          { v: '230 mg', l: { en: 'EG-CBM from 2 L; XynA from 2 L gave 0.61 mg', zh: '由 2 L 培養得到的 EG-CBM；同樣 2 L 的 XynA 只得 0.61 mg' } },
          { v: '12.5 %', l: { en: 'Activity on BSG relative to the pure control substrate', zh: '相對於純對照底物，在 BSG 上的活性' } },
          { v: 'HQI 2.78', l: { en: 'FTIR match of their product — to a synthetic oil; the CNC control scored 92.17', zh: '他們產物的 FTIR 比對分數——比到一種合成油；CNC 對照是 92.17' } },
          { v: '0.56', l: { en: 'Lowest fusion pTM, printed rather than buried', zh: '融合體最低的 pTM，照實印出而非藏起來' } }
        ]
      });

      out += h.toc([
        { id: 'cz-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'cz-swim', t: { en: 'Wet and dry', zh: '濕式與乾式' } },
        { id: 'ucnz-wik', t: { en: 'Their figures', zh: '他們的圖' } },
        { id: 'cz-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'cz-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'cz-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'cz-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'cz-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- the idea ---------------- */
      out += h.sec({
        id: 'cz-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A feedstock chosen for what it does not contain', zh: '一種因為「不含什麼」而被選上的原料' },
        lede: {
          en: 'Brewers\' spent grain runs to 39 Mt a year globally and about 85 % of brewing waste by weight, with roughly 13,700 t a year landfilled in New Zealand. What makes it attractive as a nanocellulose feedstock is that it is lower in lignin than wood pulp, so it needs less harsh chemistry.',
          zh: '啤酒糟全球每年約 39 Mt，佔釀酒廢棄物重量的約 85%，其中紐西蘭每年約有 13,700 t 進入掩埋。它作為奈米纖維素原料的吸引力在於木質素含量比木漿低，因此需要的化學處理比較溫和。'
        },
        body:
          h.p({
            en: 'Two secreted enzymes do the work in sequence. **XynA**, a *Bacillus subtilis* 168 endo-1,4-β-xylanase taken from iGEM part **BBa_K1175005**, strips hemicellulose — xylan is the largest single component of BSG — to expose the cellulose. An **ancestral Cel5A endoglucanase**, called EG on the wiki, then cuts the exposed cellulose into fibrils. The design decision that shapes the whole project is that **the team did not reconstruct that ancestral enzyme**. It is the resurrected Precambrian Cel5A of **Barruetabeña et al. 2019**, chosen off the shelf for higher activity, a wider thermal and pH range and better *E. coli* expression than modern homologues, and already used for nanocellulose by **Alonso-Lerma et al. 2020**. Secretion was to come from a **YebF** fusion (**BBa_K1610300**, TAS_Taipei 2015) so that a bioreactor could dose BSG directly. YebF failed, and that failure reorganised the whole second half of the project.',
            zh: '工作由兩個分泌型酵素依序完成。**XynA** 是取自 iGEM 零件 **BBa_K1175005** 的 *Bacillus subtilis* 168 endo-1,4-β-xylanase，負責剝除半纖維素——xylan 是 BSG 中含量最高的單一成分——以暴露纖維素。接著由 wiki 上稱為 EG 的**祖先型 Cel5A 內切葡聚醣酶**把暴露出來的纖維素切成纖絲。真正塑造整個專案的設計決定是：**這個祖先酵素不是團隊重建出來的**。它是 **Barruetabeña 等人 2019** 所復原的前寒武紀 Cel5A，之所以直接拿來用，是因為它活性較高、耐熱與耐 pH 範圍較寬、在 *E. coli* 中表達也比現代同源蛋白更好，而且 **Alonso-Lerma 等人 2020** 已經用它做過奈米纖維素。分泌原本要靠 **YebF** 融合（**BBa_K1610300**，TAS_Taipei 2015）來達成，這樣生物反應器就能直接投入 BSG。YebF 失敗了，而這次失敗重組了整個專案的後半段。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'no assembly', zh: '不做組裝' }, k: 'b' }],
              h: { en: 'Six constructs, ordered already in vector', zh: '六個構建體，直接訂成已接在載體上' },
              p: { en: 'All six were ordered pre-cloned from Twist Biosciences under a sponsorship, which the team states let them **ignore restriction-site design entirely**. The vectors were chosen for what they do not have: **pET_blank_Amp** and **pET_blank_Kan**, both IPTG-inducible, both with **no unwanted N-terminal His tag**, and an insertion site that supplies promoter and RBS so the team only had to provide start and stop codons.', zh: '六個構建體都在贊助下向 Twist Biosciences 訂成已選殖好的形式，團隊明說這讓他們**完全不必考慮限制酶切位的設計**。載體的選擇標準是「它沒有什麼」：**pET_blank_Amp** 與 **pET_blank_Kan**，兩者都可用 IPTG 誘導、都**沒有多餘的 N 端 His 標籤**，而插入位點本身就提供啟動子與 RBS，團隊只需要補上起始與終止密碼子。' } },
            { chips: [{ t: { en: 'hedged in advance', zh: '事先留的後路' }, k: 'g' }],
              h: { en: 'Two of the six constructs exist only as fallbacks', zh: '六個構建體裡有兩個只是後備方案' },
              p: { en: 'Three no-YebF constructs (XynA, EG, EG-CBM) were built as **pre-planned fallbacks in case YebF failed**, and EG-without-CBM was built **in case the CBM itself blocked expression**. Both hedges paid off: YebF-EG and YebF-EG-CBM never expressed in BL21(DE3), and the project ran to the end on the no-YebF constructs.', zh: '三個不含 YebF 的構建體（XynA、EG、EG-CBM）是**為「YebF 萬一失敗」事先準備的後備**，而不含 CBM 的 EG 則是**為「CBM 本身可能阻礙表達」而建**。兩條後路都派上用場：YebF-EG 與 YebF-EG-CBM 在 BL21(DE3) 中從未表達，整個專案最後是靠不含 YebF 的構建體跑到底的。' } },
            { chips: [{ t: { en: 'construct grammar', zh: '構建體文法' }, k: 'v' }],
              h: { en: 'The tag went on the C-terminus for a reason', zh: '標籤放在 C 端是有理由的' },
              p: { en: 'A **C-terminal 6×His** was held constant across all six, joined by a GGGGS linker, with a GS linker **plus a TEV protease site** between YebF and cargo in every YebF fusion, placed there in advance in case YebF interfered with activity. The tag is C-terminal **specifically because most constructs carry an N-terminal signal peptide that is cleaved in the cell** — a C-terminal tag keeps the signal peptide functional.', zh: '六個構建體都固定帶一個 **C 端 6×His**，以 GGGGS 接頭連接；每個 YebF 融合在 YebF 與酬載之間都放一段 GS 接頭**加一個 TEV 蛋白酶切位**，而且是為了「YebF 可能干擾活性」事先放進去的。標籤之所以放在 C 端，**正是因為多數構建體帶有會在細胞內被切掉的 N 端訊號肽**——標籤放 C 端才能讓訊號肽保持功能。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'cz-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A dry lab used as a gate, and one arrow pointing back at the project', zh: '被當作關卡用的乾式流程，以及一條回頭指向專案本身的箭頭' },
        lede: {
          en: 'Two of the handoffs run downward: the dry lab clears a design before any gene is ordered, and hands over an enzyme it did not design. The third runs the other way, and it is the one that cost the project its headline claim.',
          zh: '三次交接裡有兩次是往下走的：乾式流程在任何基因下訂之前先放行設計，並交出一個不是自己設計的酵素。第三次是反方向的，而它讓這個專案失去了最招牌的那個主張。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'NanoBrew: five wet stages, a deliberately thin dry lane', zh: 'NanoBrew：五個濕式階段，加上一條刻意做薄的乾式泳道' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, PlasmidDesign, Engineering, Experiments, Results, Hardware and Entrepreneurship pages.', zh: '由我們依該隊 Description、PlasmidDesign、Engineering、Experiments、Results、Hardware、Entrepreneurship 各頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the figures they drew themselves ---------------- */
      out += h.wikifigs('ucnz');

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'cz-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'A five-goal ladder, each rung stating what it licensed next', zh: '五個目標構成的梯子，每一階都說明它讓下一步能做什麼' },
        lede: {
          en: 'The Results page is written as Goal 1 through Goal 5, and each goal explicitly states what it licensed the team to do next. The recurring move is to spend an experiment validating the method before letting the method adjudicate anything.',
          zh: 'Results 頁是以 Goal 1 到 Goal 5 的形式書寫，每個目標都明白寫出它讓團隊接下來可以做什麼。反覆出現的手法是：先花一個實驗去驗證方法，之後才讓這個方法去裁判任何事情。'
        },
        body:
          h.phases([
            { h: { en: 'Transform, with a hard sequence gate', zh: '轉形，並設一道硬性的定序門檻' },
              p: { en: '*E. coli* BL21(DE3) was chosen because all three source parts had been expressed separately in BL21(DE3) in the literature. Plasmid mini-prep concentrations are published per construct, and 20 µL of each went to Plasmidsaurus.', zh: '選 *E. coli* BL21(DE3) 的理由是：三個來源零件在文獻中都曾各自在 BL21(DE3) 中表達過。每個構建體的質體 mini-prep 濃度都公開，並各取 20 µL 送 Plasmidsaurus。' },
              items: [
                { en: 'Concentrations as published: EG **137.4**, EG-CBM **141.2**, YebF-EG **60.9**, YebF-EG-CBM **60.4**, XynA **54.5**, YebF-XynA **296.3 ng/µL**.', zh: '公開的濃度為：EG **137.4**、EG-CBM **141.2**、YebF-EG **60.9**、YebF-EG-CBM **60.4**、XynA **54.5**、YebF-XynA **296.3 ng/µL**。' },
                { en: 'The decisive detail is procedural: **the same overnight culture that was sequenced was used to make the glycerol stocks**, so every later experiment traces back to a sequence-verified stock. The page states that this is why it was done that way.', zh: '關鍵細節在流程上：**被送去定序的那一管隔夜培養液，就是用來做甘油保存株的那一管**，所以之後每個實驗都能追溯到一個已定序驗證的保存株。頁面上明白寫出「就是為了這個才這樣做」。' }
              ],
              done: { en: 'All six were 100 % matches with no mutations.', zh: '六個全部 100% 相符，沒有任何突變。' } },
            { h: { en: 'Grid the induction, then freeze the condition', zh: '掃描誘導條件，然後把條件固定下來' },
              p: { en: 'EG and EG-CBM were screened over 2 IPTG concentrations (0.1 and 1 mM) crossed with 3 temperatures (22, 30 and 37 °C), with an uninduced control held at 37 °C and no IPTG. Whole-cell lysate and soluble fractions were prepared separately.', zh: 'EG 與 EG-CBM 以 2 種 IPTG 濃度（0.1 與 1 mM）交叉 3 種溫度（22、30、37 °C）做篩選，未誘導對照固定在 37 °C、不加 IPTG。全細胞裂解液與可溶部分分開製備。' },
              items: [
                { en: '**30 °C with 0.1 mM IPTG** won and became the standing condition for EG and EG-CBM. **25 °C with 0.1 mM IPTG** was used for the YebF constructs instead, because the YebF literature (Zhang et al. 2005 and 2006) used it.', zh: '**30 °C 搭配 0.1 mM IPTG** 勝出，成為 EG 與 EG-CBM 的標準條件。YebF 構建體則改用 **25 °C 搭配 0.1 mM IPTG**，因為 YebF 的文獻（Zhang 等人 2005 與 2006）用的是這個條件。' },
                { en: 'The caveat is printed rather than left out: **most soluble-fraction lanes were empty from improper lysis**, so the condition was chosen on whole-cell bands in the hope that it transferred to soluble expression.', zh: '警語是印出來的，不是省略掉的：**多數可溶部分的膠道因為裂解不完全而是空的**，所以條件是依全細胞的條帶選出來，並「期望」它能轉移到可溶表達上。' }
              ] },
            { h: { en: 'Fractionate four ways, and control the method itself', zh: '做四個區隔的分離，並對方法本身設對照' },
              p: { en: 'Separate protocols for whole-cell lysate, soluble, periplasmic, cytoplasmic and extracellular (precipitated) fractions. Then the decisive move: HiSiaP, a known periplasmic protein from their secondary PI\'s lab, was run as a control on the fractionation method rather than on the sample.', zh: '全細胞裂解液、可溶、週質、細胞質與胞外（沉澱）各有獨立的操作流程。接著是最關鍵的一步：他們把來自第二位指導教授實驗室的已知週質蛋白 HiSiaP，當作**分離方法本身**的對照來跑，而不是當樣品的對照。' },
              items: [
                { en: 'HiSiaP appeared where it should, confirming the periplasmic extraction worked — but it **also appeared in the extracellular fraction, where it must not be**.', zh: 'HiSiaP 出現在它該出現的地方，證明週質萃取有效——但它**同時也出現在胞外部分，而那是它絕不該出現的地方**。' },
                { en: 'They therefore ruled the extracellular lane untrustworthy, attributed it to leakage or lysis, and **refused to call XynA\'s extracellular band secretion**.', zh: '於是他們判定胞外膠道不可信、歸因於滲漏或細胞裂解，並**拒絕把 XynA 的胞外條帶稱為分泌**。' },
                { en: 'Later, EG-CBM — a cytoplasmic protein — appearing in the extracellular lane was used the same way, as a **lysis tell-tale**.', zh: '後來，身為細胞質蛋白的 EG-CBM 出現在胞外膠道時，也以同樣方式被使用，當成**細胞裂解的指示訊號**。' }
              ],
              done: { en: 'Controls as stated: uninduced controls on every expression trial; untransformed BL21(DE3) and blank SHuffle negatives; EG-CBM as a positive expression control when moving strains.', zh: '他們寫明的對照：每次表達試驗都有未誘導對照；未轉形的 BL21(DE3) 與空白 SHuffle 作為陰性對照；更換菌株時以 EG-CBM 作為表達陽性對照。' } },
            { h: { en: 'Use the Western as an escalation, not as the default', zh: '把 Western 當作升級手段，而不是預設做法' },
              p: { en: 'An anti-His primary antibody, with a temporary Ponceau stain step used to verify transfer before developing, run on all six constructs at once so non-expressers could be compared against known expressers.', zh: '使用抗 His 一級抗體，並以暫時性的 Ponceau 染色在顯色前確認轉印成功；六個構建體一次跑完，好讓沒有表達的那些能與已知會表達的那些並排比較。' },
              items: [
                { en: 'This is what resolved **two XynA bands about 2 to 3 kDa apart** — immature with signal peptide against mature without — which "in a typical SDS-PAGE gel would have blurred together".', zh: '也正是這一步分辨出 **XynA 的兩條相距約 2 到 3 kDa 的條帶**——帶訊號肽的未成熟型與不帶的成熟型——而這兩條「在一般 SDS-PAGE 膠上會糊成一條」。' },
                { en: 'That observation **changed the purification plan**: XynA would be purified from the **periplasm only**, to avoid co-purifying the immature form that is abundant in whole-cell and soluble fractions.', zh: '這個觀察**改變了純化計畫**：XynA 只從**週質**純化，以避開在全細胞與可溶部分裡大量存在的未成熟型。' }
              ] },
            { h: { en: 'Purify, and publish the asymmetry', zh: '純化，並把不對稱性公開' },
              p: { en: 'Both proteins on a Cytiva Äkta Go with a 5 mL HisTrap HP column, 5 CV washes, 100 % imidazole elution, 1 mL fractions, every fraction of interest checked on a gel before pooling.', zh: '兩個蛋白都用 Cytiva Äkta Go 搭配 5 mL HisTrap HP 管柱，5 CV 清洗、100% imidazole 沖提、每管 1 mL，所有要用的分離液在合併前都先上膠確認。' },
              items: [
                { en: '**EG-CBM**: 2 L culture, lysate to IMAC, buffer exchange in 20 mL 30 kDa spin concentrators over **5 rounds** with **NanoDrop on the flowthrough each round to prove no protein was lost**, giving about **230 mg total**, concentrated to about **100 µM** and flash-frozen in 1 mL aliquots at −80 °C.', zh: '**EG-CBM**：2 L 培養、裂解液上 IMAC，再以 20 mL、30 kDa 的離心濃縮管做 **5 輪**緩衝液置換，**每一輪都用 NanoDrop 量穿透液以證明沒有蛋白流失**，共得約 **230 mg**，濃縮到約 **100 µM**，分裝成 1 mL 於 −80 °C 急速冷凍。' },
                { en: '**XynA**: 2 L culture to a **periplasmic extract** (room-temperature sucrose buffer 10 min, 13,000 × g, then ice-cold water shock, 0.45 µm filtered), IMAC, **3 × 5 mL HiTrap desalting columns in series**, 10 kDa spin concentrators, ending in nineteen 150 µL aliquots at about **10 µM**, total about **0.61 mg**. Only Peak 2 contained XynA, as a single band.', zh: '**XynA**：2 L 培養先做**週質萃取**（室溫蔗糖緩衝液 10 分鐘、13,000 × g，再以冰冷純水做滲透衝擊、0.45 µm 過濾），上 IMAC，接著 **3 支 5 mL HiTrap 去鹽管柱串聯**、10 kDa 離心濃縮管，最後得到 19 管各 150 µL、約 **10 µM**，總量約 **0.61 mg**。只有 Peak 2 含有 XynA，而且是單一條帶。' }
              ],
              done: { en: 'The asymmetry is reported as a workflow consequence rather than hidden: **XynA scarcity became rate-limiting**, and it is named as the reason one nanocellulose arm could not be run at all.', zh: '這個不對稱性被當成流程的後果報告出來，而不是藏起來：**XynA 的稀缺成為限速因素**，並被指名為「其中一條奈米纖維素支線完全無法執行」的原因。' } },
            { h: { en: 'Pre-process the grain as its own protocol stack', zh: '把原料前處理當成獨立的一套流程' },
              p: { en: 'BSG pre-processing is treated as a method in its own right, with the freeze-thaw count defined as the treatment variable: LF is 1 cycle, HF is 4 cycles.', zh: 'BSG 前處理被當成一個獨立的方法來處理，並把凍融次數定義為處理變項：LF 為 1 次循環、HF 為 4 次循環。' },
              items: [
                { en: '50 g frozen BSG with 50 mL UltraPure water, **blended 160 s on high**; freeze-thaw cycles at −20 °C overnight; liquid-nitrogen flash freeze; **freeze-dried for 72 h or more** on a Thermo Savant Supermodulyo 230; **sieved through a 0.5 mm steel sieve**, weight recorded. **PEG 6000 at 0.018 g per 1 g BSG.**', zh: '50 g 冷凍 BSG 加 50 mL UltraPure 水，**高速攪打 160 秒**；在 −20 °C 隔夜做凍融循環；液態氮急凍；在 Thermo Savant Supermodulyo 230 上**冷凍乾燥 72 小時以上**；**以 0.5 mm 鋼製篩網過篩**並記錄重量。**PEG 6000 用量為每 1 g BSG 0.018 g。**' },
                { en: 'The XynA pre-treatment, called X-BSG, is 0.5 µM XynA with 2 % w/v BSG at 37 °C and 1000 rpm for 3 h, then **three washes at 20,000 × g into EG-CBM buffer so no residual xylose survives into the next assay**.', zh: '稱為 X-BSG 的 XynA 前處理是：0.5 µM XynA、2% w/v BSG，37 °C、1000 rpm、3 小時，接著**在 20,000 × g 下洗三次並換入 EG-CBM 緩衝液，確保沒有殘留的 xylose 進入下一個分析**。' },
                { en: 'Standing assay conditions, held constant: **0.5 µM enzyme** for every enzyme, **0.5 % w/v** control substrate (CMC for EG-CBM, Birchwood xylan for XynA), **2 % w/v BSG**, ThermoShaker at 37 °C and 1000 rpm, 2 to 3 h.', zh: '固定不變的標準分析條件：所有酵素都用 **0.5 µM**、對照底物 **0.5% w/v**（EG-CBM 用 CMC、XynA 用 Birchwood xylan）、**BSG 2% w/v**，ThermoShaker 在 37 °C、1000 rpm，2 至 3 小時。' }
              ] },
            { h: { en: 'Make the product, then fail to identify it', zh: '做出產物，然後無法確認它是什麼' },
              p: { en: 'Nanocellulose production was adapted from Alonso-Lerma et al. 2020: 800 mg BSG in 40 mL buffer at 2 % w/v, 0.5 µM EG-CBM, 3 h at 37 °C and 180 rpm with the tube tilted so BSG cannot settle, reaction stopped on ice for 10 min, Hielscher UP200S ultrasonication for 25 min at 70 % amplitude and 0.5 on-off, then 4,200 × g for 5 min to clear solids and 33,000 × g for 1 h at 4 °C to pellet the product.', zh: '奈米纖維素製備改自 Alonso-Lerma 等人 2020：800 mg BSG 在 40 mL 緩衝液中（2% w/v）、0.5 µM EG-CBM，37 °C、180 rpm 作用 3 小時，試管傾斜放置讓 BSG 不會沉底；在冰上停止反應 10 分鐘；以 Hielscher UP200S 超音波處理 25 分鐘、振幅 70%、0.5 開關比；再以 4,200 × g 離心 5 分鐘除去固體，最後 33,000 × g、4 °C、1 小時把產物沉下來。' },
              items: [
                { en: 'Yields by weight: about **90 mg from HF plus PEG BSG against about 40 mg from LF BSG**.', zh: '以重量計的產量：**HF 加 PEG 的 BSG 約 90 mg，LF 的 BSG 約 40 mg**。' },
                { en: 'Characterisation was AFM (with external help from Dr Donn Adam Gito) run side by side with **donated pure cellulose nanocrystals as a reference material**, then FTIR on an Anton Paar Lyza 7000 at **24 scans, 4 cm⁻¹ resolution, 400 to 4000 cm⁻¹**, again with a powdered CNC control.', zh: '表徵方式是 AFM（由 Dr Donn Adam Gito 外部協助），並與**捐贈的純纖維素奈米晶體（CNC）作為參考材料**並排進行；之後在 Anton Paar Lyza 7000 上做 FTIR，**24 次掃描、4 cm⁻¹ 解析度、400 至 4000 cm⁻¹**，同樣帶一個粉末狀 CNC 對照。' }
              ],
              done: { en: 'Neither technique confirmed the product. This is where the project stops, and the team says so on the Results page and repeats the disclaimer at the top of the Entrepreneurship market analysis.', zh: '兩種方法都沒有確認產物。專案就停在這裡，團隊在 Results 頁明白寫出，並在 Entrepreneurship 的市場分析最上方再重複一次這個免責聲明。' } }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'cz-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The assay is the deliverable: five DBTL cycles on DNS', zh: '分析方法本身就是交付物：DNS 的五個 DBTL 迴圈' },
        lede: {
          en: 'The team\'s own framing is that the DNS assay had to be built before any construct could be judged, so it sits on the Engineering page as a five-iteration design-build-test-learn cycle. That is more development than most teams give an assay.',
          zh: '團隊自己的說法是：在能評判任何構建體之前，DNS 分析法必須先被建立起來，因此它被放在 Engineering 頁上，寫成五次迭代的 design-build-test-learn 迴圈。多數團隊不會為一個分析方法投入這麼多開發。'
        },
        body:
          h.tbl({
            cols: [
              { t: '#', w: '6%' },
              { t: { en: 'What changed', zh: '改了什麼' }, w: '34%' },
              { t: { en: 'The problem it solved, and how they knew', zh: '它解決的問題，以及他們怎麼知道' } }
            ],
            rows: [
              ['1', { en: 'Scaled the BenchChem cuvette protocol down 10×: 100 µL sugar plus 100 µL DNS, 95 °C for 10 min, ice 5 min, add 800 µL water, read at **540 nm**.', zh: '把 BenchChem 的比色管流程縮小 10 倍：100 µL 糖液加 100 µL DNS、95 °C 10 分鐘、冰浴 5 分鐘、加 800 µL 水，在 **540 nm** 讀值。' }, { en: 'Linear standard curves for both **glucose and xylose** were obtained. Problem found: insoluble BSG interferes with turbidity **and degrades during the 95 °C step, inflating the reading**.', zh: '取得 **glucose 與 xylose** 兩條線性標準曲線。發現的問題：不溶的 BSG 會干擾濁度，**而且在 95 °C 步驟中降解，把讀值推高**。' }],
              ['2', { en: 'Read **only the soluble fraction** after centrifugation.', zh: '離心後**只讀可溶部分**。' }, { en: 'Validated by substrate-only samples giving low readings — the control is what certifies the change.', zh: '以「只有底物」的樣品讀值很低來驗證——是對照證明了這個改動有效。' }],
              ['3', { en: 'Moved to a **96-well plate and PCR-plate format**: 50 µL sample plus 50 µL DNS, 95 °C for 10 min in a PCR cycler, 4 °C 5 min, then 40 µL into 160 µL water.', zh: '改成 **96 孔盤與 PCR 盤格式**：50 µL 樣品加 50 µL DNS，在 PCR 機上 95 °C 10 分鐘、4 °C 5 分鐘，再取 40 µL 加入 160 µL 水。' }, { en: 'They **checked that the scaled version reproduced the unscaled readings before trusting it**, rather than assuming a volume change is neutral.', zh: '他們**先確認縮放後的版本能重現未縮放的讀值，才開始信任它**，沒有假設改變體積是中性的。' }],
              ['4', { en: 'The real innovation: **5 µL of 1 M NaOH pre-loaded into each well**, with sample volume adjusted to 45 µL to keep the **1:1 sample-to-DNS ratio**.', zh: '真正的創新：**每個孔先預先放入 5 µL 的 1 M NaOH**，並把樣品體積調成 45 µL 以維持 **1:1 的樣品比 DNS 比例**。' }, { en: 'The enzyme is killed the instant the timepoint is taken. They rejected the obvious alternative of adding DNS directly **because DNS is light-sensitive**. This is what produced Michaelis-Menten-shaped curves.', zh: '取樣的瞬間酵素就被殺死。他們否決了「直接加 DNS」這個顯而易見的替代做法，**因為 DNS 對光敏感**。這一步才讓曲線呈現 Michaelis-Menten 的形狀。' }],
              ['5', { en: 'For low-signal samples, **drop the final dilution from 5× to 2.5×** rather than change substrate or DNS amount, and back-calculate the dilution.', zh: '對訊號低的樣品，**把最後的稀釋倍數由 5 倍降為 2.5 倍**，而不是改變底物或 DNS 的量，再把稀釋倍數回推。' }, { en: 'Keeps the comparison between samples intact. The protocol says explicitly: only use 2.5× if prior experience showed a sensitivity problem.', zh: '這樣樣品之間的比較才不會被破壞。流程中明白寫著：只有在過去經驗顯示有靈敏度問題時才使用 2.5 倍。' }]
            ],
            source: { en: 'Condensed from the team\'s Engineering page. Standing conditions and the two significance tests are on Results.', zh: '濃縮自該隊 Engineering 頁。標準條件與兩個顯著性檢定在 Results 頁。' }
          }) +
          h.cards([
            { chips: [{ t: { en: 'a question, not a number', zh: '一個問題，不是一個數字' }, k: 'g' }],
              h: { en: 'An assay built to tell dead enzyme from spent substrate', zh: '為了分辨「酵素死了」與「底物用完了」而做的分析' },
              p: { en: 'XynA activity plateaued at 2 h, so they ran a **triplicate enzyme-top-up assay** — add 0.5 µM fresh XynA at 2 h against not adding it. No significant difference, **t(4) = 0.3831, p = 0.7211**, so the plateau is substrate exhaustion. That result was then used to **set the incubation times for every later assay**, including the 3 h XynA pre-treatment.', zh: 'XynA 活性在 2 小時後趨於平台，所以他們做了一個**三重複的酵素補加實驗**——在第 2 小時加入 0.5 µM 新鮮 XynA 與不加入兩組對照。結果無顯著差異，**t(4) = 0.3831、p = 0.7211**，因此平台是底物耗盡造成的。這個結果接著被用來**設定之後每一個分析的培養時間**，包括 3 小時的 XynA 前處理。' } },
            { chips: [{ t: { en: 'a test that carries a decision', zh: '承載一個決定的檢定' }, k: 'b' }],
              h: { en: 'X-BSG against BSG, and why pre-treatment stayed', zh: 'X-BSG 對 BSG，以及前處理為何被保留' },
              p: { en: 'The one significance test that carries a design decision: **t(4) = 3.5353, p = 0.02412** for EG-CBM on X-BSG against plain BSG, with glucose almost doubled, so the XynA pre-treatment is worth keeping. **n = 3 with standard-deviation error bars** on the two assays where a claim turns on a difference; the time-series exploratory assays are single-run and not labelled otherwise.', zh: '唯一承載設計決定的顯著性檢定：EG-CBM 作用於 X-BSG 相對於單純 BSG，**t(4) = 3.5353、p = 0.02412**，glucose 幾乎翻倍，所以 XynA 前處理值得保留。在兩個「主張取決於差異」的分析上用了 **n = 3 並附標準差誤差棒**；時間序列的探索性分析則是單次執行，而且沒有被標成別的樣子。' } },
            { chips: [{ t: { en: 'calibration refused', zh: '拒絕校正' }, k: 'a' }],
              h: { en: 'Where they publish raw absorbance instead', zh: '哪裡他們改為直接公開原始吸光值' },
              p: { en: 'In the combined XynA plus EG-CBM assay, results are published as **raw A540, not sugar concentration**, because DNS cannot separate xylose from glucose and, in their words, "it is impossible to calibrate the combination assay to a standard sugar curve." A normalisation caveat is volunteered too: EG-CBM on BSG gave about half the final sugar of CMC, but accounting for the difference in starting weights it is **roughly 12.5 % the activity on BSG** — and the same 12.5 % figure is given for XynA on BSG against Birchwood xylan.', zh: '在 XynA 與 EG-CBM 的合併分析中，結果是以**原始 A540 而非糖濃度**公開，因為 DNS 無法區分 xylose 與 glucose；用他們的話說，「不可能把合併分析校正到某一條標準糖曲線上。」他們也主動提出一個正規化的警語：EG-CBM 在 BSG 上的最終糖量約為 CMC 的一半，但把起始重量的差異算進去之後，**在 BSG 上的活性大約只有 12.5%**——XynA 在 BSG 對 Birchwood xylan 上也是同樣的 12.5%。' } },
            { chips: [{ t: { en: 'not measured', zh: '沒有量測' }, k: 'r' }],
              h: { en: 'No enzymology units anywhere', zh: '全站沒有任何酵素學單位' },
              p: { en: '**No U/mg, no specific activity, no kcat/Km, no temperature or pH optimum was measured.** All activity is reported as sugar concentration or raw absorbance over time. No azo-CMC and no 4-MUC. On the product side there is no DLS, no XRD crystallinity, no zeta potential and no TEM or SEM: characterisation is **AFM plus FTIR only**, and both were inconclusive.', zh: '**沒有量測 U/mg、沒有比活性、沒有 kcat/Km、沒有最適溫度或 pH。** 所有活性都以糖濃度或隨時間變化的原始吸光值報告。沒有 azo-CMC、沒有 4-MUC。在產物端沒有 DLS、沒有 XRD 結晶度、沒有 zeta 電位、也沒有 TEM 或 SEM：表徵**只有 AFM 加 FTIR**，而且兩者都沒有結論。' } }
          ]) +
          h.take({ en: 'The rule that makes their numbers comparable', zh: '讓他們的數字可以互相比較的那條規則' }, {
            en: 'Absorbance at 540 nm becomes a sugar concentration through a **glucose or xylose standard curve prepared fresh on the day of every assay**, minus a **substrate-only heating control that was incubated alongside every assay and sampled at both t = 0 and endpoint** — so the sugar released by heating alone is subtracted rather than assumed. And because DNS reagent behaviour **varied between days**, they state that they could **only compare samples run on the same day**, and ran samples together for that reason. That one sentence is what the whole activity dataset rests on, and it is free to copy.',
            zh: '540 nm 的吸光值要透過**每次分析當天新鮮配製的 glucose 或 xylose 標準曲線**才變成糖濃度，並扣掉一個**與每次分析同時培養、且在 t = 0 與終點都取樣的「只有底物」加熱對照**——這樣單純因加熱而釋出的糖是被減掉的，不是被假設掉的。而由於 DNS 試劑的表現**每天不同**，他們明白寫出自己**只能比較同一天跑的樣品**，並因此刻意把樣品排在一起跑。整份活性數據就靠這一句話支撐，而這一句可以免費抄走。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'cz-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Deliberately thin, and the page says so', zh: '刻意做得很薄，而且頁面上就這麼寫' },
        lede: {
          en: 'This is the most unusual thing about NanoBrew as a workflow, and it should be read as a choice rather than as a gap. Because the enzymes were bought rather than designed, the dry lab exists as a pre-ordering gate and nothing more.',
          zh: '這是 NanoBrew 作為一套工作流程最不尋常的地方，而它應該被讀成一個選擇，而不是一個缺口。因為酵素是買來的、不是設計出來的，乾式流程的存在只是作為下訂前的關卡，僅此而已。'
        },
        body:
          h.warn({
            en: '**There is no in-house ancestral sequence reconstruction on this project.** No sequence search, no alignment, no phylogeny (no IQ-TREE, RAxML or MrBayes), no ASR tool (no FastML, PAML or GRASP) and no model selection. The ancestral Cel5A is taken as a **published sequence from Barruetabeña et al. 2019**, with the CBM from *Acetivibrio thermocellus* alongside it. The wiki is straightforward about this and lists "trialling our own ancestral sequence reconstruction to create a xylanase that can rival the ancestral EG-CBM" as **future work**. There is also **no MD, no docking and no kinetic model** anywhere in the project.',
            zh: '**這個專案沒有任何自行完成的祖先序列重建。** 沒有序列搜尋、沒有比對、沒有親緣關係分析（沒有 IQ-TREE、RAxML 或 MrBayes）、沒有 ASR 工具（沒有 FastML、PAML 或 GRASP）、也沒有模型選擇。祖先型 Cel5A 是直接取用 **Barruetabeña 等人 2019 的已發表序列**，CBM 則取自 *Acetivibrio thermocellus*。wiki 對這件事寫得很直接，並把「嘗試我們自己的祖先序列重建，做出能與祖先型 EG-CBM 匹敵的木聚醣酶」列為**未來工作**。整個專案也**沒有任何 MD、沒有對接、沒有動力學模型**。'
          }) +
          h.flow({
            title: { en: 'The whole dry lab, in order of when it was used', zh: '整個乾式流程，按使用時間排列' },
            sub: { en: 'Four tools and one declined analysis. Every stage is a gate or a benchmark; none of them produces a prediction the project then relies on.', zh: '四個工具加上一項被放棄的分析。每個階段都是關卡或基準；沒有一個產出專案後續依賴的預測。' },
            stages: [
              { label: { en: 'AlphaFold 3', zh: 'AlphaFold 3' }, sub: { en: 'Do YebF, CBM, linkers and the His tag break the fold or the active site?', zh: 'YebF、CBM、接頭與 His 標籤會不會破壞摺疊或活性位？' }, tone: 'b',
                items: [{ en: 'run before ordering genes', zh: '在下訂基因之前執行' }, { en: 'go-ahead given', zh: '給出放行' }] },
              { label: { en: 'PyMOL 3.2.0a', zh: 'PyMOL 3.2.0a' }, sub: { en: 'Quantify that, as RMSD against the unmodified enzyme', zh: '把上一步量化成相對於未修飾酵素的 RMSD' }, tone: 'v',
                items: [{ en: 'all under 2 Å', zh: '全部小於 2 Å' }, { en: 'proceed', zh: '放行' }] },
              { label: { en: 'SnapGene 8.2.3', zh: 'SnapGene 8.2.3' }, sub: { en: 'Plasmid QC, and later primer design', zh: '質體品管，後期用於引子設計' }, tone: 'n',
                items: [{ en: '24 bp binding plus 20 bp overhang', zh: '24 bp 結合區加 20 bp 重疊端' }] },
              { label: { en: 'Capillarix', zh: 'Capillarix' }, sub: { en: 'Can a differential capillary microviscometer read under 100 µL?', zh: '差動毛細管微黏度計能讀低於 100 µL 的樣品嗎？' }, tone: 'a',
                items: [{ en: 'under 5 % error against water', zh: '對水誤差小於 5%' }, { en: 'up to 22.87 % against oil', zh: '對油誤差高達 22.87%' }] },
              { label: { en: 'Lan et al. 2024 TEA', zh: 'Lan 等人 2024 TEA' }, sub: { en: 'What would a pilot plant cost?', zh: '一座試驗廠會花多少錢？' }, tone: 'r',
                items: [{ en: 'benchmark only', zh: '只作為基準' }, { en: 'explicitly not a NanoBrew number', zh: '明說不是 NanoBrew 自己的數字' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s PlasmidDesign, Hardware and Entrepreneurship pages. There is no Model page of the usual kind.', zh: '由我們依該隊 PlasmidDesign、Hardware、Entrepreneurship 各頁繪製。該隊沒有一般意義上的 Model 頁。' }
          }) +
          h.h3({ en: '1 · AlphaFold 3 and PyMOL — a gate, with the confidence printed', zh: '1 · AlphaFold 3 與 PyMOL——一道關卡，而且把信賴度印出來' }) +
          h.p({
            en: 'The structure prediction was used as a gate rather than as a design tool, and the numbers are published per construct. RMSD against the unmodified enzyme: XynA **0.101 Å**, YebF-XynA **0.117 Å**, EG **0.183 Å**, EG-CBM **0.155 Å**, YebF-EG **0.173 Å**, YebF-EG-CBM **0.135 Å** — all well under the 2 Å threshold the team set, so the genes were ordered. What makes this honest rather than decorative is that **pTM is reported alongside and is not glossed over**: mature XynA **0.97**, modified XynA **0.82**, YebF-XynA **0.60**; unmodified EG **0.97**, EG **0.95**, EG-CBM **0.62**, YebF-EG **0.56**, YebF-EG-CBM **0.58**. Every fusion prediction is low-confidence, the caption says so, and it notes that the **positions and orientation of YebF and the CBM are highly variable while the catalytic core aligns**. The claim made is only about the active site, which is the claim the RMSD actually supports.',
            zh: '結構預測是被當作關卡使用，而不是當設計工具，而且每個構建體的數字都公開。相對於未修飾酵素的 RMSD：XynA **0.101 Å**、YebF-XynA **0.117 Å**、EG **0.183 Å**、EG-CBM **0.155 Å**、YebF-EG **0.173 Å**、YebF-EG-CBM **0.135 Å**——全部遠低於團隊設定的 2 Å 門檻，於是基因就下訂了。讓這一步稱得上誠實而非裝飾的是：**pTM 也一併報告，而且沒有被含糊帶過**——成熟 XynA **0.97**、修飾後 XynA **0.82**、YebF-XynA **0.60**；未修飾 EG **0.97**、EG **0.95**、EG-CBM **0.62**、YebF-EG **0.56**、YebF-EG-CBM **0.58**。每一個融合體的預測都是低可信度，圖說裡就這麼寫，並註明 **YebF 與 CBM 的位置與方向變異很大，而催化核心是對得上的**。他們提出的主張只關於活性位，而那正是 RMSD 真正支撐得起的主張。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'CONFIDENCE', zh: '信賴度' },
            title: { en: 'AlphaFold 3 pTM per construct: every fusion is low-confidence', zh: '每個構建體的 AlphaFold 3 pTM：所有融合體都是低可信度' },
            sub: { en: 'The team published these alongside the RMSD values that passed the gate, instead of reporting the RMSD alone.', zh: '該隊把這些數值與通過關卡的 RMSD 一起公開，而不是只報 RMSD。' },
            data: [
              { label: { en: 'XynA, mature and unmodified', zh: 'XynA，成熟且未修飾' }, v: 0.97, note: { en: 'RMSD reference', zh: 'RMSD 的參考基準' } },
              { label: { en: 'XynA, modified', zh: 'XynA，修飾後' }, v: 0.82, note: { en: 'RMSD 0.101 Å', zh: 'RMSD 0.101 Å' } },
              { label: { en: 'YebF-XynA', zh: 'YebF-XynA' }, v: 0.60, note: { en: 'RMSD 0.117 Å; expressed, reached the periplasm, never the medium', zh: 'RMSD 0.117 Å；有表達、到了週質，但從未進入培養液' } },
              { label: { en: 'EG, unmodified', zh: 'EG，未修飾' }, v: 0.97, note: { en: 'RMSD reference', zh: 'RMSD 的參考基準' } },
              { label: { en: 'EG', zh: 'EG' }, v: 0.95, note: { en: 'RMSD 0.183 Å', zh: 'RMSD 0.183 Å' } },
              { label: { en: 'EG-CBM', zh: 'EG-CBM' }, v: 0.62, note: { en: 'RMSD 0.155 Å; the flagship part, ~230 mg from 2 L', zh: 'RMSD 0.155 Å；旗艦零件，由 2 L 得約 230 mg' } },
              { label: { en: 'YebF-EG', zh: 'YebF-EG' }, v: 0.56, note: { en: 'RMSD 0.173 Å; never expressed in either strain', zh: 'RMSD 0.173 Å；在兩種菌株中都從未表達' } },
              { label: { en: 'YebF-EG-CBM', zh: 'YebF-EG-CBM' }, v: 0.58, note: { en: 'RMSD 0.135 Å; rescued in SHuffle T7, still no secretion', zh: 'RMSD 0.135 Å；在 SHuffle T7 中救回表達，但仍然沒有分泌' } }
            ],
            opts: { max: 1, dec: 2, xlabel: { en: 'pTM (0 to 1)', zh: 'pTM（0 至 1）' } },
            caption: { en: 'Values read from the team\'s PlasmidDesign page. The 2 Å RMSD threshold was theirs.', zh: '數值讀自該隊 PlasmidDesign 頁。2 Å 的 RMSD 門檻是他們自己設的。' }
          }) +
          h.h3({ en: '2 · Hardware — a second engineering track that killed two options before building', zh: '2 · 硬體——一條在開工前就先殺掉兩個選項的平行工程軌道' }) +
          h.p({
            en: 'Hardware runs as a parallel engineering track over two DBTL iterations, integrated into a UC engineering course with two external collaborators, Maisie and Nathan, advised by Prof. Volker Nock. The requirement was set first: **read a sample of under 100 µL**. A literature review shortlisted four physical properties — viscosity, electrical impedance, turbidity and absorbance, and laser diffraction — and **two were killed before any build**: diffraction for signal-to-noise within UC laser safety limits, impedance for time. Viscosity was simulated in **Capillarix**, unreleased software supplied by its author Rhys Marchant-Ludlow, and **capillary field-effect transistors were dropped entirely** after iteration 1 because CFETs would not switch cleanly across the viscosity range a nanocellulose sample might have — after which "exclusion of CFETs" became a written design specification. Final viscometer errors against a water reference are **2 %, 2.56 %, 4.275 % and 4.32 %**; against an oil reference they degrade badly, to **1.7 %, 6.7 %, 11.31 %, 14.48 % and 22.87 %**, and the page states that surface roughness is not modelled. The absorbance sensor strobes **R/G/B LEDs** and runs a machine-learning calibration on an on-board **ESP32**; after an optical chassis redesign, printed modular so only the chassis needed reprinting, it read guar gum at 10 to **10.57 %**, 25 to **22.03 %**, 50 to **43.49 %** and 60 to **57.7 %**.',
            zh: '硬體是一條平行的工程軌道，跑了兩個 DBTL 迭代，整合進 UC 的一門工程課，有兩位外部協作者 Maisie 與 Nathan，由 Prof. Volker Nock 指導。需求先被定下來：**要能讀低於 100 µL 的樣品**。文獻回顧篩出四個物理性質——黏度、電阻抗、濁度與吸光度、雷射繞射——而**其中兩個在任何製作之前就被殺掉**：繞射因為在 UC 雷射安全限值內訊噪比不足，阻抗則因為時間不夠。黏度在 **Capillarix** 中模擬，那是由作者 Rhys Marchant-Ludlow 提供的未釋出軟體；而**毛細管場效電晶體（CFET）在第一次迭代後被整個放棄**，因為 CFET 無法在奈米纖維素樣品可能的黏度範圍內乾淨地切換——之後「排除 CFET」就成為一條寫下來的設計規格。黏度計相對於水的最終誤差為 **2%、2.56%、4.275%、4.32%**；相對於油則明顯變差，為 **1.7%、6.7%、11.31%、14.48%、22.87%**，而頁面上寫明表面粗糙度沒有被建模。吸光感測器以**紅綠藍 LED** 閃爍取樣，並在板上的 **ESP32** 執行機器學習校正；在光學機殼重新設計（印成模組化，只需重印機殼那一塊）之後，它把 guar gum 的 10 讀成 **10.57%**、25 讀成 **22.03%**、50 讀成 **43.49%**、60 讀成 **57.7%**。'
          }) +
          h.note({
            en: '**Neither sensor was ever tested on nanocellulose.** Guar gum was used as a substitute because the nanocellulose had run out, and the page says so plainly. So the hardware track and the wet-lab track never actually meet — which is consistent with the rest of the project, where the product itself was never identified.',
            zh: '**兩個感測器都從未在奈米纖維素上測試過。** 因為奈米纖維素用完了，所以改用 guar gum 代替，頁面上直接寫出這件事。也就是說，硬體軌道與濕式軌道其實從未真正交會——而這與專案其餘部分是一致的，畢竟產物本身也從未被確認。'
          }) +
          h.h3({ en: '3 · Techno-economics — a benchmark, and an NPV they decline to compute', zh: '3 · 技術經濟分析——一個基準，以及他們拒絕計算的 NPV' }) +
          h.p({
            en: 'They adopted the **CNF-1 pathway of Lan et al. 2024**, enzymatic hydrolysis before mechanical fibrillation, as the closest published analogue: a minimum selling price of **US$3,087 per dry tonne (US$3.09/kg)** at 50 dry t/day against a **US$2,837/t** non-enzymatic baseline, with the premium coming from extra capacity and cellulose loss. Their own plant is scaled to **0.01 dry t/day**, needing **0.48 to 1.04 t wet BSG per day** and **120 to 260 t/yr** against a five-year Christchurch target of **136 to 200 t/yr**. Capital was scaled by a **linear factor of 0.0004** to **US$44,699** and operating cost to **US$27.87/day** — and both are immediately disowned in the text, because capital costs do not necessarily scale linearly and a pilot plant needs a floor of infrastructure regardless of capacity. Their stated conclusion is to use the literature values as a benchmark rather than present an unreliable cost per kilogram. They then **write out the NPV formula and decline to compute an NPV**, because the yield is unconfirmed. Market sizing is annotated the same way: the serviceable market is estimated by scaling the **US$947 M** global market by ANZ\'s **1.72 %** share of world GDP and then by the CNF share of **56.3 %**, giving **US$9.1 M**, with the assumption that demand is approximately proportional to economic size flagged as a limitation, and the obtainable-market table carrying a note naming its two unconfirmed inputs: **20 % collection and about 40 % recovery**. A life-cycle assessment is **promised, not done**, explicitly as a commercialisation-stage task, with the stated motive of prioritising measurable sustainability over greenwashing.',
            zh: '他們採用 **Lan 等人 2024 的 CNF-1 路線**（先酵素水解、再機械纖絲化）作為最接近的已發表類比：在每日 50 乾噸的規模下，最低售價為**每乾噸 US$3,087（US$3.09/kg）**，相對於非酵素基準的**每噸 US$2,837**，差價來自額外產能與纖維素損失。他們自己的廠房規模是**每日 0.01 乾噸**，每日需要 **0.48 至 1.04 t 濕 BSG**、每年 **120 至 260 t**，而 Christchurch 的五年目標是每年 **136 至 200 t**。資本支出以**線性因子 0.0004** 縮放到 **US$44,699**、營運成本縮放到**每日 US$27.87**——而兩者在文中立刻被自己推翻，因為資本支出未必線性縮放，而且試驗廠不論產能多小都需要一個基礎設施的下限。他們寫明的結論是：使用文獻數值作為基準，而不是提出一個不可靠的每公斤成本。接著他們**把 NPV 公式寫出來，然後拒絕計算 NPV**，因為產量未經確認。市場規模的推估也用同樣方式註記：可服務市場是把全球 **US$947 M** 的市場先乘上澳紐佔世界 GDP 的 **1.72%**、再乘上 CNF 的 **56.3%** 佔比，得到 **US$9.1 M**，並把「需求大致與經濟規模成正比」這個假設標為限制；可取得市場的表格則附註兩個未經確認的輸入：**20% 收集率與約 40% 回收率**。生命週期評估則是**承諾了但沒有做**，明說是商業化階段的工作，並寫出動機是「把可量測的永續性放在漂綠之前」。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'cz-fail',
        kick: { en: 'What did not work', zh: '沒成功的部分' },
        h2: { en: 'The two headline negatives are also the two main contributions', zh: '兩個最大的陰性結果，也正是兩個最主要的貢獻' },
        lede: {
          en: 'This project reports what it could not conclude — an unidentified product, a secretion tag that never worked, and a premise its own combination assay contradicted — in the same register as what it could.',
          zh: '這個專案把自己無法下結論的事情——一個未被確認的產物、一個從未成功的分泌標籤，以及一個被自家合併分析反駁的前提——用和它能下結論的事情完全相同的語氣寫出來。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: 'headline negative', zh: '最主要的陰性結果' }, k: 'r' }],
              h: { en: 'YebF never secreted anything', zh: 'YebF 從未分泌出任何東西' },
              p: { en: 'In BL21(DE3), **YebF-EG and YebF-EG-CBM did not express at all**, confirmed by anti-His Western, so it is absence rather than low abundance — or translation terminating before the C-terminal tag. **YebF-XynA expressed and reached the periplasm but never the medium**, and the blots showed **about 23 kDa and 24 kDa cleaved species**, meaning YebF was being cut off in the linker region, in at least two places, in both periplasm and cytoplasm. The team notes the cleavage is *not* explained by the TEV site they designed in, because no TEV protease was added, and says the mechanism **remains unknown and uninvestigated**. Moving to **SHuffle T7**, on the suggestion of a member of the Dobson lab, rescued expression of YebF-EG-CBM but **still gave no secretion**, and YebF-EG never expressed in either strain.', zh: '在 BL21(DE3) 中，**YebF-EG 與 YebF-EG-CBM 完全沒有表達**，並以抗 His Western 確認，所以是「不存在」而不是「量少」——或者轉譯在抵達 C 端標籤之前就終止了。**YebF-XynA 有表達並抵達週質，卻從未進入培養液**，而且墨點顯示出**約 23 kDa 與 24 kDa 的切斷產物**，也就是 YebF 在接頭區被切掉，至少有兩個位置，而且在週質與細胞質都發生。團隊指出這個切斷**不能**用他們自己設計進去的 TEV 位點解釋，因為並沒有加入 TEV 蛋白酶，並說機制**仍然未知且未經調查**。在 Dobson 實驗室一位成員的建議下改用 **SHuffle T7**，救回了 YebF-EG-CBM 的表達，但**仍然沒有分泌**；而 YebF-EG 在兩種菌株中都從未表達。' } },
            { chips: [{ t: { en: 'product unverified', zh: '產物未經驗證' }, k: 'r' }],
              h: { en: 'The FTIR best match was a synthetic oil', zh: 'FTIR 最佳比對結果是一種合成油' },
              p: { en: 'AFM showed "unevenly distributed, aggregate-like particles that did not at all resemble the nanocrystals, nor the nanofibrils that we expected", while the CNC reference imaged correctly as **uniform particles under 500 nm**. FTIR then failed on the sample: the CNC control matched cellulose at **HQI = 92.17**, while their freeze-dried sample\'s best match was **Klüber Syntheso HT, a polyglycol synthetic oil, at HQI = 2.78** — published rather than omitted, and attributed to the flaky thin freeze-dried sample. **At wiki freeze the product is not demonstrated to be nanocellulose.** The planned fix is **ATR-FTIR** on the liquid or gel suspension.', zh: 'AFM 顯示的是「分布不均、類似聚集體的顆粒，完全不像奈米晶體，也不像我們預期的奈米纖絲」，而 CNC 參考樣品則正確成像為**小於 500 nm 的均勻顆粒**。接著 FTIR 在樣品上失效：CNC 對照比對到纖維素，**HQI = 92.17**；而他們冷凍乾燥樣品的最佳比對結果是**Klüber Syntheso HT，一種聚二醇合成油，HQI = 2.78**——照實公開而非省略，並歸因於冷凍乾燥樣品又薄又易碎。**在 wiki 凍結時，產物並未被證明是奈米纖維素。** 計畫中的補救是對液態或膠態懸浮液做 **ATR-FTIR**。' } },
            { chips: [{ t: { en: 'premise contradicted', zh: '前提被反駁' }, k: 'r' }],
              h: { en: 'Their own combination assay says XynA does not help', zh: '他們自己的合併分析說 XynA 沒有幫助' },
              p: { en: 'The final absorbance of the combination was approximately the sum of the individual enzymes, which the team reads as indicating that **XynA is not making the cellulose more accessible** — the opposite of the project\'s premise. The honest rider is printed with it: the combination curves had not yet levelled off, so a longer incubation might differ. The sequential pre-treatment experiment, which *did* show a benefit, was designed precisely because the simultaneous one could not separate the two sugars. A buffer confound is admitted in print too: the combination assays suspended BSG in **XynA** storage buffer for pipetting reasons, with the caveat that EG-CBM activity could have been affected by being in a different buffer.', zh: '合併反應的最終吸光值大約等於兩個酵素各自的和，團隊把這解讀為**XynA 並沒有讓纖維素變得更容易接觸**——與整個專案的前提相反。誠實的保留條件也一起印出來：合併反應的曲線還沒有趨平，所以更長的培養時間可能會不同。而那個**確實**顯示出好處的「依序前處理」實驗，之所以被設計出來，正是因為同時加入的版本無法分開兩種糖。緩衝液的混淆因素也被寫出來：合併分析為了方便移液，把 BSG 懸浮在 **XynA** 的保存緩衝液中，並附註 EG-CBM 的活性可能因為處在不同緩衝液而受影響。' } },
            { chips: [{ t: { en: 'arm not run', zh: '支線無法執行' }, k: 'a' }],
              h: { en: 'Not enough XynA, so one arm never happened', zh: 'XynA 不夠，所以有一條支線根本沒做' },
              p: { en: 'Xylanase pre-treatment of the nanocellulose BSG was **skipped because there was not enough purified XynA** — 0.61 mg from 2 L against EG-CBM\'s 230 mg. Separately, **PEG 6000 helped XynA but not EG-CBM**, reported as a negative for the enzyme that matters most. And a **pipetting error is published**: the yeast PCR for EG-CBM_T2A_Xyn produced a band of about 1600 bp, EG-CBM-sized, instead of 2197 bp, diagnosed as the wrong reverse primer added to the mix; they proceeded with the three that worked rather than redo it before the freeze.', zh: '奈米纖維素所用 BSG 的木聚醣酶前處理**被略過，因為純化到的 XynA 不夠**——2 L 只得 0.61 mg，而 EG-CBM 有 230 mg。另外，**PEG 6000 對 XynA 有幫助，對 EG-CBM 沒有**，而這被當成「最關鍵那個酵素的陰性結果」報告出來。還有一個**被公開的移液錯誤**：EG-CBM_T2A_Xyn 的酵母 PCR 跑出約 1600 bp（EG-CBM 的大小）而不是 2197 bp，診斷為混液時加錯了反向引子；他們選擇用成功的那三個繼續，而沒有在凍結前重做。' } },
            { chips: [{ t: { en: 'caught late', zh: '太晚才發現' }, k: 'a' }],
              h: { en: 'The yeast constructs arrived in the wrong vector', zh: '酵母構建體到貨時裝在錯的載體上' },
              p: { en: 'The four yeast constructs were ordered in GenScript\'s **pAO815**, which turned out **not to be compatible with the only yeast strain the lab had, OpenPichia**, forcing a primer-design and **NEBuilder** re-assembly into **pPICZ**. Yeast work started **3.5 weeks before the wiki freeze** and reaches only "DNA ready for assembly": **no yeast expression or secretion data exists**. The T2A ordering caveat was quantified from the literature *before* building — the downstream protein can be **up to 70 % less** abundant and the upstream one keeps an **18 to 22 bp scar** — which is why both gene orders were ordered rather than one.', zh: '四個酵母構建體是訂在 GenScript 的 **pAO815** 上，結果**與實驗室唯一擁有的酵母菌株 OpenPichia 不相容**，被迫重新設計引子並用 **NEBuilder** 重組進 **pPICZ**。酵母工作在 **wiki 凍結前 3.5 週**才開始，只走到「DNA 已可供組裝」：**完全沒有酵母的表達或分泌數據**。T2A 的排列順序問題在建構**之前**就已依文獻量化——下游蛋白的量可能**少達 70%**，上游蛋白則會留下 **18 至 22 bp 的疤痕**——這就是為什麼兩種基因順序都訂了，而不是只訂一種。' } },
            { chips: [{ t: { en: 'method limits named', zh: '明列方法限制' }, k: 'a' }],
              h: { en: 'Three bullets against their own assay', zh: '三條針對自家分析方法的條目' },
              p: { en: 'The Engineering page lists the DNS assay\'s limitations as three bullets: non-specificity, with **xylose over-inflated relative to glucose in their own standard curves**; day-to-day DNS variability; and compounding technical error across many transfers of non-uniform insoluble material. Their own recommended replacement is named: **HPAEC-PAD**. The documentation gap around YebF is named too — it was poorly documented in the Registry, so there was nothing to troubleshoot against, and their fix is to document it across **BBa_26Y2NT4J**, **BBa_26UUPW2I** and **BBa_269T95XD**.', zh: 'Engineering 頁以三條條目列出 DNS 分析法的限制：非專一性，而且**在他們自己的標準曲線中 xylose 相對 glucose 被高估**；DNS 每日之間的變異；以及在反覆轉移不均勻的不溶性物質時技術誤差會累積。他們也點名自己建議的替代方法：**HPAEC-PAD**。YebF 的文件缺口同樣被指名——它在 Registry 中文件極少，所以沒有東西可以對照排除問題，而他們的補救是用 **BBa_26Y2NT4J**、**BBa_26UUPW2I** 與 **BBa_269T95XD** 三個零件把它記錄下來。' } }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'cz-steal',
        kick: { en: 'Our reading', zh: '我們的判讀' },
        h2: { en: 'What we would copy, and what we would not', zh: '我們會抄什麼、不會抄什麼' },
        lede: { en: 'This section is a judgement, not a measurement. It is ours and you can disagree with it.', zh: '這一節是判斷、不是量測。它屬於我們，你可以不同意。' },
        body:
          h.ul([
            { en: '**Run a control on the method, not just on the sample.** Borrowing HiSiaP, a known periplasmic protein, to audit their own fractionation is the single most copyable thing on this wiki. It cost one gel and it changed the project\'s conclusion: because HiSiaP turned up in the extracellular fraction where it must not be, every extracellular lane became untrustworthy and XynA\'s extracellular band could not be called secretion.', zh: '**對方法設對照，不要只對樣品設對照。** 借來已知的週質蛋白 HiSiaP 去稽核自己的分離方法，是這整個 wiki 上最值得照抄的一件事。它只花一片膠，卻改變了專案的結論：因為 HiSiaP 出現在它絕不該出現的胞外部分，於是每一條胞外膠道都變得不可信，XynA 的胞外條帶也就不能被稱為分泌。' },
            { en: '**Make the glycerol stock from the culture you sequenced.** One procedural sentence makes every later experiment traceable to a sequence-verified stock, and it costs nothing. Most student projects sequence a plasmid and then grow the stock from a different colony.', zh: '**用你送去定序的那管培養液去做甘油保存株。** 一句流程上的規定，就讓之後每個實驗都能追溯到一個已定序驗證的保存株，而且完全不花錢。多數學生專案是定序一個質體，然後從另一個菌落去養保存株。' },
            { en: '**Develop the assay as its own DBTL cycle, and publish the failed iterations.** Five iterations on DNS before a single construct was judged, including the detail that matters most — pre-loading NaOH into the well so the enzyme dies the instant the timepoint is taken, and rejecting the obvious alternative because DNS is light-sensitive. That is the step that produced curves with a shape worth interpreting.', zh: '**把分析方法本身當成一個 DBTL 迴圈來開發，並公開失敗的迭代。** 在評判任何一個構建體之前，DNS 已經跑過五次迭代，其中最關鍵的細節是：先在孔內預放 NaOH，讓取樣的瞬間酵素就死掉，並否決那個顯而易見的替代做法，因為 DNS 對光敏感。正是這一步讓曲線有了值得解讀的形狀。' },
            { en: '**Build the fallback construct before you need it.** Three no-YebF constructs and one no-CBM construct existed from the first order, specifically in case YebF or the CBM failed. Both hedges paid off, and the cost was a handful of extra sequences on an order that was already being placed.', zh: '**在你需要後備構建體之前就先做出來。** 第一批訂單裡就包含三個不含 YebF 的構建體與一個不含 CBM 的構建體，就是為了「萬一 YebF 或 CBM 失敗」。兩條後路都派上用場，而代價只是在本來就要下的訂單上多加幾條序列。' },
            { en: '**Report the confidence next to the number that passed the gate.** Publishing pTM of 0.56 to 0.62 for the fusions, alongside RMSD values that all cleared 2 Å, is what turns a structure prediction from decoration into a bounded claim about the active site only.', zh: '**把信賴度印在通過關卡的那個數字旁邊。** 一邊公開所有 RMSD 都在 2 Å 以內，一邊公開融合體的 pTM 只有 0.56 到 0.62——正是這一點讓結構預測從裝飾變成「只關於活性位」的有界主張。' },
            { en: 'What we would **not** copy: letting characterisation be the last thing attempted. AFM and FTIR are the only two product measurements on the whole project, both run near the end, and both inconclusive — so a season of enzyme work ends without knowing what was made. An early, cheap identity check on a reference-grade standard would have told them whether the pipeline was worth running before the XynA ran out.', zh: '我們**不會**抄的是：把產物表徵留到最後才做。AFM 與 FTIR 是整個專案唯二的產物量測，兩者都接近尾聲才跑，而且都沒有結論——於是一整季的酵素工作結束時，沒人知道做出了什麼。若能早一點、便宜地用參考級標準品做一次身分確認，他們在 XynA 用完之前就會知道這條流程值不值得跑下去。' }
          ]) +
          h.take({ en: 'In one line', zh: '一句話' }, {
            en: 'UCNZ is the clearest demonstration on this site that controlling the method beats controlling only the sample: a borrowed periplasmic protein, a donated nanocrystal reference, five DBTL cycles on an assay and a triplicate top-up experiment to decide what a plateau meant. The price of that discipline is a wiki that has to report an unidentified product and a secretion tag that never worked, which is exactly why it is worth reading.',
            zh: 'UCNZ 是本站最清楚的例子，證明「對方法設對照」勝過「只對樣品設對照」：一個借來的週質蛋白、一份捐贈的奈米晶體參考樣品、一個分析方法的五個 DBTL 迴圈，以及一個只為了判斷平台意義而做的三重複補加實驗。這種紀律的代價，是一個必須報告「產物身分不明」與「分泌標籤從未成功」的 wiki——而這正是它值得讀的理由。'
          })
      });

      return out;
    }
  };
})(window);
