/* TU Delft — MOSAIC. Grand Prize, Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/tu-delft/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Order parts the software made orderable', zh: '訂購被軟體變成「可下單」的零件' },
        s: { en: 'MOSAIC Designer codon-scrambles a repetitive ELP gene so a synthesis provider will accept it; parts from IDT and Twist', zh: 'MOSAIC Designer 把重複的 ELP 基因做密碼子洗牌，讓代工廠願意接單；零件來自 IDT 與 Twist' } },
      { l: { en: 'MoClo level 0, then nine inserts at once', zh: 'MoClo level 0，再一次九個插入' },
        s: { en: 'pAGM9121 acceptor, colony PCR on lacZ replacement, whole-plasmid Nanopore on two clones each', zh: 'pAGM9121 受體載體，以 lacZ 置換做菌落 PCR，每個各兩株做全質體 Nanopore' } },
      { l: { en: 'Express without inducing', zh: '不誘導就表達' },
        s: { en: 'RGD(+)-ELP had already accumulated before IPTG; uninduced overnight high-density growth became the route', zh: 'RGD(+)-ELP 在加 IPTG 前就已大量累積；未誘導的隔夜高密度培養成為正式路線' }, tone: 'a' },
      { l: { en: 'Purify twice, keep the cheaper one', zh: '兩種純化各做一次，留下便宜的那個' },
        s: { en: 'IMAC failed as one step; inverse transition cycling needs only NaCl and a centrifuge, four cycles', zh: 'IMAC 單步失敗；逆相變循環只需要 NaCl 與離心機，四個循環' } },
      { l: { en: 'Coat, then measure the coating', zh: '塗上去，然後量那層塗層' },
        s: { en: 'Diazirine photo-crosslinking to PDMS and titanium; rheology, turbidity, confocal', zh: '以 diazirine 光交聯到 PDMS 與鈦；流變、濁度、共軛焦' } },
      { l: { en: 'Make it do something', zh: '讓它做事' },
        s: { en: 'SAAP-148 against five strains, RGD vs scrambled RDG on cells, thrombin cleavage over 20 h', zh: 'SAAP-148 對五株菌、RGD 與打亂的 RDG 在細胞上對比、凝血酶切割追 20 小時' } }
    ],
    dry: [
      { l: { en: 'Build the dataset by hand', zh: '手工建資料集' },
        s: { en: '86 sources → 437 raw → 273 cleaned entries; a browser tool to read T_t off published figures', zh: '86 筆來源→437 筆原始→273 筆清理後；另寫瀏覽器工具從圖裡讀出 T_t' } },
      { l: { en: 'Predict the transition temperature', zh: '預測相變溫度' },
        s: { en: 'XGBoost, test MAE 3.17 °C, R² = 0.88, beaten against three baselines', zh: 'XGBoost，測試 MAE 3.17 °C、R²=0.88，對三個基準比較' }, tone: 'g' },
      { l: { en: 'Simulate the brush', zh: '模擬表面刷層' },
        s: { en: 'CALVADOS 2 coarse-grained MD on a surface-attached brush; three questions, three design rules', zh: 'CALVADOS 2 粗粒化 MD 模擬表面接枝刷層；三個問題、三條設計規則' } },
      { l: { en: 'Choose the motif from the tissue', zh: '由組織決定要用哪個 motif' },
        s: { en: 'Transcriptomic + proteomic signatures per tissue → "coating recipes"', zh: '各組織的轉錄體＋蛋白體特徵→「塗層配方」' } },
      { l: { en: 'Cost the plant', zh: '把產線算成錢' },
        s: { en: 'SuperPro Designer flowsheet to a written spec: 10.2 kg/yr for 117 M devices, lyophilised', zh: 'SuperPro Designer 流程圖，對上一份書面規格：年產 10.2 kg、供 117 M 個裝置、凍乾成品' }, tone: 't' }
    ],
    links: [
      { w: 0, d: 1, l: { en: 'the predicted T_t sets the purification temperature', zh: '預測的 T_t 決定純化溫度' }, up: true },
      { w: 4, d: 2, l: { en: 'attachment density is the stiffness knob', zh: '接枝密度就是硬度旋鈕' }, up: true },
      { w: 3, d: 1, l: { en: 'the column failed where the model says T_t drops', zh: '管柱失敗的位置正是模型說 T_t 會下降的地方' } }
    ]
  };

  PD.pages['og-delft'] = {
    label: { en: 'TU Delft', zh: 'TU Delft' },
    title: { en: 'TU Delft — MOSAIC', zh: 'TU Delft — MOSAIC' },
    render: function (h) {
      var t = team('delft');
      var out = h.teamhero(t, {
        h1: {
          en: 'A platform whose best result is a sentence about ==the instrument, not the sample==.',
          zh: '一個平台，而它最好的結果是一句關於==儀器、而不是樣品==的話。'
        },
        lede: {
          en: 'MOSAIC is a modular implant coating: one elastin-like polypeptide backbone, produced in E. coli, carrying whichever function the implant and the patient need — antimicrobial peptide, cell-adhesion motif, growth-factor mimetic — added by changing DNA rather than by changing chemistry. The Grand Prize argument is not the coating. It is that five modules each carry a Future Perspective, every negative result is given a mechanism, and when the rheometer could not resolve the sample they wrote that the numbers do not describe it.',
          zh: 'MOSAIC 是一種模組化植入物塗層：一條在大腸桿菌中生產的類彈性蛋白（ELP）骨架，掛上該植入物與該病人需要的功能——抗菌胜肽、細胞黏附 motif、生長因子模擬物——而更換功能是改 DNA，不是改化學。拿下首獎的論點不是那層塗層，而是五個模組各自都寫了 Future Perspective、每個負面結果都被給出機制，而當流變儀解析不出樣品時，他們寫下「那些數字並不描述這個樣品」。'
        },
        chips: [
          { t: { en: 'Elastin-like polypeptides', zh: '類彈性蛋白' }, k: 'b' },
          { t: { en: 'LCST / phase transition', zh: 'LCST／相變' }, k: 'v' },
          { t: { en: 'MoClo Golden Gate', zh: 'MoClo Golden Gate' }, k: 'g' },
          { t: { en: 'Photo-crosslinked coating', zh: '光交聯塗層' }, k: 't' },
          { t: { en: 'MOSAIC Designer software', zh: 'MOSAIC Designer 軟體' }, k: 'a' }
        ],
        stats: [
          { v: '273', l: { en: 'Curated LCST data points, from 86 candidate sources', zh: '清理後的 LCST 資料點，來自 86 筆候選來源' } },
          { v: '3.17 °C', l: { en: 'Test MAE of their model, against 4.68 for the physics equation', zh: '其模型的測試 MAE，物理式為 4.68' } },
          { v: '9', l: { en: 'Inserts assembled in one Golden Gate reaction', zh: '一次 Golden Gate 反應組起的插入片段數' } },
          { v: '4', l: { en: 'Inverse-transition cycles before the ELP band is alone', zh: '做到只剩 ELP 一條帶所需的逆相變循環數' } },
          { v: '12.8 µM', l: { en: 'SAAP-148 MIC — the same for clinical MRSA as for MSSA', zh: 'SAAP-148 的 MIC——臨床 MRSA 與 MSSA 相同' } },
          { v: '166.4 nN·m', l: { en: 'Inertial torque that swallowed most rheology runs', zh: '吞掉多數流變測試的慣性扭矩' } }
        ]
      });

      out += h.toc([
        { id: 'd-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'd-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'd-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'd-meas', t: { en: 'Measurement', zh: '量測紀律' } },
        { id: 'd-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'd-fail', t: { en: 'What did not work', zh: '沒成功的部分' } },
        { id: 'd-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'd-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'The function is in the DNA, so the manufacturing route never changes', zh: '功能寫在 DNA 裡，所以製造路線永遠不變' },
        lede: {
          en: 'Implants fail for several reasons at once — infection, poor tissue integration, fibrotic encapsulation — and the reasons differ by implant and by patient. A coating therefore has to be changeable without being re-invented.',
          zh: '植入物同時因為好幾個原因失效——感染、組織整合不良、纖維性包覆——而原因依植入物與病人而異。所以塗層必須能更換，但不能每次都重新發明。'
        },
        body:
          h.p({
            en: '**Elastin-like polypeptides (ELPs)** are repeats of the pentapeptide VPGXG taken from human tropoelastin. Their defining behaviour is a **lower critical solution temperature (LCST)**: below a transition temperature T_t they are soluble, above it they entropically phase-separate into a dense coacervate, and crosslinking can turn that into a hydrogel. Because the whole molecule is genetically encoded, a function is added by editing the gene, and the mechanical properties and the adhesion motifs sit in separate parts of the sequence, so they can be tuned independently.',
            zh: '**類彈性蛋白（ELP）**是取自人類原彈性蛋白的五肽 VPGXG 的重複序列。它的關鍵行為是**低臨界溶解溫度（LCST）**：低於相變溫度 T_t 時可溶，高於時會以熵驅動相分離成緻密的凝聚相，再加交聯就可能變成水膠。因為整個分子都由基因編碼，加功能就是改基因；而力學性質與黏附 motif 位於序列的不同部位，可以各自獨立調整。'
          }) +
          h.warn({
            en: 'The one property that is **not** independent is T_t itself. It moves with the guest residue, with chain length, with concentration, with anything fused to the backbone, and with the salt in the buffer along the Hofmeister series. The whole project is organised around that single awkward fact, and every failure on this page traces back to it.',
            zh: '唯一**不**獨立的性質就是 T_t 本身。它會隨客座殘基、鏈長、濃度、任何融合在骨架上的東西，以及緩衝液裡的鹽（依 Hofmeister 序列）而移動。整個專案就是圍著這一個麻煩的事實組織起來的，而本頁上每一個失敗都能追回到它。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'five modules', zh: '五個模組' }, k: 'b' }],
              h: { en: 'Design · Modularity · Synthesis · Assembly · Functionality', zh: 'Design · Modularity · Synthesis · Assembly · Functionality' },
              p: { en: 'Each module has its own Background / Experimental design / Results / Discussion / **Future Perspective**, and four of the five also carry explicit DBTL iterations on the Engineering page. The structure is the reason nothing on this wiki ends at "it worked".', zh: '每個模組都有自己的 Background／Experimental design／Results／Discussion／**Future Perspective**，而其中四個在 Engineering 頁上還有明確的 DBTL 迴圈。正是這個結構讓這個 wiki 上沒有任何段落停在「成功了」。' } },
            { chips: [{ t: { en: 'the software is the unlock', zh: '軟體才是解鎖的那把鑰匙' }, k: 'a' }],
              h: { en: 'A repetitive gene is an unorderable gene', zh: '重複序列的基因就是下不了單的基因' },
              p: { en: 'Synthesis providers reject repetitive ELP orders or route them into an expensive bespoke service. MOSAIC Designer cuts the sequence into swappable parts separated by locked linkers carrying the Golden Gate sites, then **codon-scrambles the parts so the order passes a provider\'s complexity filter**.', zh: '代工廠會拒絕重複的 ELP 訂單，或把它轉成昂貴的客製服務。MOSAIC Designer 把序列切成可互換的零件，中間夾著帶 Golden Gate 切位的固定連接子，再**對零件做密碼子洗牌，讓訂單通過代工廠的複雜度篩選**。' } },
            { chips: [{ t: { en: 'read from .md', zh: '可讀 .md' }, k: 'g' }],
              h: { en: 'The only one of the twenty that ships a machine-readable copy', zh: '二十隊中唯一提供機器可讀副本的' },
              p: { en: 'Every page is also served as Markdown at `/tu-delft/<page>.md`, with an `llms.txt` index. Among all twenty Top 10 wikis in both divisions, this is the only one we could read without rendering JavaScript.', zh: '每一頁也以 Markdown 形式提供在 `/tu-delft/<page>.md`，另有 `llms.txt` 索引。在兩個組別共二十個前十名 wiki 中，這是唯一不需要跑 JavaScript 就能讀的一個。' } }
          ])
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'd-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Three handoffs, and one of them is a warning', zh: '三次交接，其中一次是一個警告' },
        lede: {
          en: 'The LCST model does not only predict a property. It sets an operating temperature for a purification, and it is the reason a failed chromatography run has an explanation rather than a shrug.',
          zh: 'LCST 模型不只是預測一個性質。它決定了一道純化的操作溫度，也正是那次失敗的層析有「解釋」而不是只有「聳肩」的原因。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'MOSAIC: five modules in two lanes', zh: 'MOSAIC：兩條泳道上的五個模組' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Engineering, Results, Model and Software pages.', zh: '由我們依該隊 Description、Engineering、Results、Model、Software 五頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'd-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Four modules at the bench, and the inducible system that was not needed', zh: '實驗檯上的四個模組，以及那個其實不需要的誘導系統' },
        body:
          h.phases([
            { h: { en: 'Modularity — nine inserts in one reaction', zh: 'Modularity——一次反應九個插入' },
              p: { en: 'MoClo Golden Gate with BsaI. Level 0: each ELP part into the universal acceptor **pAGM9121** (Addgene MoClo kit #1000000044). Level 1: nine verified parts into **pJUMP29-1A(sfGFP)** (BBa_J428326).', zh: '以 BsaI 做 MoClo Golden Gate。Level 0：每個 ELP 零件接入通用受體載體 **pAGM9121**（Addgene MoClo kit #1000000044）。Level 1：九個已驗證零件接入 **pJUMP29-1A(sfGFP)**（BBa_J428326）。' },
              items: [
                { en: 'Level 0 screening works because the insert sizes are chosen to be unmistakable on a gel: **153–175 bp** for MIKII and RGD against **743–1217 bp** for SpyCatcher003-sfGFP, mEffBlue and ScOrange, replacing a 657 bp lacZ.', zh: 'Level 0 的篩選之所以可行，是因為插入片段大小刻意選成膠上不會看錯：MIKII 與 RGD 為 **153–175 bp**，SpyCatcher003-sfGFP、mEffBlue、ScOrange 為 **743–1217 bp**，取代 657 bp 的 lacZ。' },
                { en: 'Whole-plasmid Nanopore sequencing on two clones of each: **100 % match for seven of nine parts**, with one mismatch and one gap in the odd clone of the other two. Level 1 came back 100 % identical on four and two clones.', zh: '每個零件各兩株做全質體 Nanopore 定序：**九個中有七個 100% 相符**，另外兩個各有一株出現一個錯配或一個缺口。Level 1 分別在四株與兩株上 100% 相符。' },
                { en: 'The documented-practice detail: their own colony PCR nearly failed them, because the assembled product (891 bp) differs from the empty vector by **44 bp** on a 1 % gel. The recommendation they write down is to pair a backbone primer with one annealing across the insert/backbone junction — **and never to treat colony PCR as verification for a repetitive insert**.', zh: '值得記下的流程細節：他們自己的菌落 PCR 差點失效，因為組好的產物（891 bp）在 1% 膠上與空載體只差 **44 bp**。他們寫下的建議是：把一支骨架引子搭配一支跨越插入／骨架接點的引子——**而且絕不要把菌落 PCR 當成重複序列插入的驗證手段**。' }
              ],
              done: { en: 'Two expression plasmids built from software-designed parts, both 100 % identical to design by whole-plasmid sequencing.', zh: '兩個由軟體設計零件組成的表達質體，全質體定序皆與設計 100% 相符。' } },
            { h: { en: 'Synthesis — the induction that made no difference', zh: 'Synthesis——加了也沒差的誘導' },
              p: { en: 'T7/IPTG constructs in Terrific Broth. The result they did not plan for: **RGD(+)-ELP had already accumulated strongly before IPTG was added**, and 0.5 or 1 mM made no clear difference.', zh: 'T7／IPTG 構建體，培養在 Terrific Broth。他們沒預料到的結果：**RGD(+)-ELP 在加入 IPTG 之前就已經大量累積**，而 0.5 或 1 mM 都沒有明顯差別。' },
              items: [
                { en: 'They adopted **uninduced high-density overnight growth** as the production route on the strength of that — and then said plainly that they never measured promoter activity, so leaky T7 is a candidate explanation and not a conclusion.', zh: '他們據此把**未誘導的隔夜高密度培養**定為正式生產路線——接著明說自己從未量測啟動子活性，所以「T7 漏表達」只是候選解釋，不是結論。' },
                { en: 'Two separate honesty notes: SpyTag-ELP gave a prominent band at **~15 kDa against an expected 21 kDa**, and the gel alone cannot say what it is; Thrombin-cleavable-ELP was invisible in whole-cell lysate but appeared after purification, so **"not detected" was explicitly not allowed to mean "not expressed"**.', zh: '另有兩段誠實交代：SpyTag-ELP 出現明顯的 **~15 kDa 帶，而預期是 21 kDa**，而單憑膠體無法判定那是什麼；凝血酶可切型 ELP 在全細胞裂解液中看不到，純化後卻出現，所以**「沒偵測到」被明確規定不等於「沒表達」**。' },
                { en: 'And the one most teams would have deleted: the **kanamycin stock was found to be non-selective** — an ampicillin-resistant test strain grew in kan medium — so the RGD(+)-ELP cultures had no effective plasmid selection, plasmid loss was never measured, and the effect "cannot be quantified".', zh: '還有一段多數團隊會刪掉的：**卡那黴素原液被發現沒有選擇性**——一株只帶安比西林抗性的測試菌在卡那培養基中長起來——所以 RGD(+)-ELP 的培養其實沒有有效的質體選擇壓，質體流失從未被量測，影響「無法量化」。' }
              ] },
            { h: { en: 'Purification — a documented head-to-head', zh: 'Purification——一場有紀錄的正面對決' },
              p: { en: 'Immobilised-metal affinity chromatography against inverse transition cycling, with the losing method explained rather than dropped.', zh: '固定化金屬親和層析對上逆相變循環，而且輸的那一方被解釋清楚，不是悄悄丟掉。' },
              items: [
                { en: '**IMAC failed as a single step.** Many bands in every eluted fraction; flow nearly stopped for the RGD constructs at **0.125 mL/min against 1.33 mL/min** for K30-ELP; brown precipitate in the resin bed; protein still bound after elution.', zh: '**IMAC 作為單一步驟失敗。**每個洗出分液都有很多條帶；RGD 構建體的流速幾乎停住，**0.125 mL/min，而 K30-ELP 是 1.33 mL/min**；樹脂床出現棕色沉澱；洗提後蛋白仍留在樹脂上。' },
                { en: 'The diagnosis is specific. The known *E. coli* IMAC contaminants need **30–80 mM imidazole**, so a 10 mM wash could not displace them and a single 150 mM elution brought everything down together. The deeper cause is **phase transition on the column**: binding concentrates ELP on the bead surface, and both salt and local concentration lower T_t. Their construct-level evidence is that K30-ELP is all-lysine (T_t high) while the RGD constructs are isoleucine-block (T_t low).', zh: '這個診斷很具體。已知的大腸桿菌 IMAC 污染蛋白需要 **30–80 mM 咪唑**才會脫落，所以 10 mM 的沖洗推不走它們，而單步 150 mM 洗提就把所有東西一起帶下來。更深層的原因是**在管柱上發生相變**：結合會把 ELP 濃縮在珠體表面，而鹽與局部濃度都會降低 T_t。他們的構建體層面證據是：K30-ELP 全部是離胺酸（T_t 高），而 RGD 構建體是異白胺酸區塊（T_t 低）。' },
                { en: 'Then they refuse to call it proved: *"this remains an interpretation rather than a demonstrated mechanism."* And the standard remedy — more salt in the wash — **is ruled out because NaCl lowers T_t**, which would precipitate the product on the column.', zh: '接著他們拒絕把它說成已證實：*「這仍然是一種解釋，而不是已被證明的機制。」*而標準解法——在沖洗液裡加更多鹽——**被排除，正因為 NaCl 會降低 T_t**，那會讓產物直接在管柱上沉澱。' },
                { en: '**Inverse transition cycling won.** Contaminant bands drop with each cycle; after **four cycles** the ELP band is essentially alone and the fifth adds nothing. No tag, no resin: only NaCl and a centrifuge, which also leaves both termini free for functional motifs. 1 L cultures gave **59.1 mg and 63.4 mg** of lyophilised RGD(+)- and RDG(-)-ELP after 72 h of freeze-drying.', zh: '**逆相變循環勝出。**污染帶隨每個循環遞減；**四個循環**之後基本上只剩 ELP 一條帶，第五個循環沒有再改善。不需要標籤、不需要樹脂：只要 NaCl 與離心機，而且兩端都留白給功能 motif。1 L 培養經 72 小時凍乾後得到 **59.1 mg 與 63.4 mg** 的 RGD(+)- 與 RDG(-)-ELP。' },
                { en: 'The rule they publish is not a cycle number: *"purity should always be verified by SDS-PAGE instead of relying on cycle numbers"*, and since yield drops sharply after the third cycle, three may be the better trade for some uses. Cost: **3–4 days per purification**, two cycles a day at most, 12 h to redissolve a hot-spin pellet.', zh: '他們寫下的規則不是一個循環數：*「純度應該一律用 SDS-PAGE 驗證，而不是依賴循環次數」*；而且由於第三個循環之後產率明顯下降，對某些用途來說三個循環可能是更好的取捨。代價是：**每次純化 3–4 天**、一天最多兩個循環、熱離心的沉澱要 12 小時才溶回去。' }
              ],
              done: { en: 'A method chosen on cost, scalability and what it leaves free on the molecule — with the rejected method\'s failure mechanism published.', zh: '一個依成本、可放大性與「在分子上留下什麼」而選定的方法——並且把被淘汰方法的失敗機制公開。' } },
            { h: { en: 'Functionality — three functions, three different standards of proof', zh: 'Functionality——三個功能、三種不同的證明標準' },
              p: { en: 'Antimicrobial, cell adhesion and protease-triggered release, each claimed at exactly the strength its data supports.', zh: '抗菌、細胞黏附、蛋白酶觸發釋放，每一項的主張強度都剛好等於其數據所能支撐的程度。' },
              items: [
                { en: '**Antimicrobial.** SAAP-148 against five strains including three clinical LVAD-driveline isolates. MIC **6.4 µM** lab MSSA, **25.6 µM** lab *E. coli*, **12.8 µM for all three clinical isolates — MRSA the same as MSSA**, so methicillin resistance gave no protection.', zh: '**抗菌。**SAAP-148 對五株菌，其中三株是臨床 LVAD 傳動軸感染分離株。MIC 為實驗室 MSSA **6.4 µM**、實驗室大腸桿菌 **25.6 µM**、**三株臨床分離株全部 12.8 µM——MRSA 與 MSSA 相同**，所以甲氧西林抗性並未提供保護。' },
                { en: 'The interesting move is that they then argue **their own lab strain is the wrong benchmark**: *S. aureus* 8325-4 descends from NCTC 8325, which carries an *rsbU* mutation leaving σB nearly inactive and is also *tcaR*-defective, giving a biofilm-negative phenotype. So the clinical isolates, needing **8–16× more**, set the target concentration — and the **MBPC rather than the MIC** is the number that matters for a coating.', zh: '有意思的一步是他們接著主張**自己的實驗室菌株才是錯的基準**：*S. aureus* 8325-4 源自 NCTC 8325，帶有讓 σB 幾乎失活的 *rsbU* 突變，且 *tcaR* 也有缺陷，因此是生物膜陰性表現型。所以需要**高 8–16 倍**濃度的臨床分離株才是設定目標濃度的依據——而對塗層來說真正重要的數字是 **MBPC，不是 MIC**。' },
                { en: '**Cell adhesion.** RGD(+)-ELP against the scrambled **RDG(-)** control — same composition, motif destroyed. RGD(+) promotes initial attachment, supports focal adhesions in serum-containing medium and supports proliferation; on RDG(-) the cells instead **secrete extracellular matrix rather than divide**, which is a different cell state and not simply less adhesion.', zh: '**細胞黏附。**RGD(+)-ELP 對上打亂序列的 **RDG(-)** 對照——組成相同、motif 被破壞。RGD(+) 促進初期附著、在含血清培養基中支持焦點黏附、也支持增生；而在 RDG(-) 上細胞則是**分泌胞外基質而不分裂**，那是一種不同的細胞狀態，不只是黏附變少。' },
                { en: '**Cleavable sites.** Thrombin-cleavable-ELP sampled at 0, 2, 4, 8 and 20 h with a positive control protein and uncleaved ELP as negative. Full-length band gone by 20 h, negative control unchanged. The claim is deliberately small: **"20 h is an upper bound for the reaction time, and the cleavage efficiency remains unquantified."**', zh: '**可切位點。**凝血酶可切型 ELP 在 0、2、4、8、20 小時取樣，並以一個陽性對照蛋白與未切割的 ELP 作為陰性對照。20 小時後全長帶消失，陰性對照沒有變化。主張刻意講得很小：**「20 小時是反應時間的上限，而切割效率仍未被量化。」**' },
                { en: 'And the limitation that matters for the product is stated: this was **soluble protein at room temperature**, whereas the coating is a dense coacervate at 37 °C, which likely lowers accessibility.', zh: '而且對產品真正重要的那個限制被寫出來了：這是**室溫下的可溶蛋白**，而塗層在 37 °C 下是緻密的凝聚相，可及性很可能更低。' }
              ] }
          ])
      });

      /* ---------------- measurement ---------------- */
      out += h.sec({
        id: 'd-meas',
        kick: { en: 'Measurement', zh: '量測紀律' },
        h2: { en: 'The paragraph we would put on a poster', zh: '我們會把這段貼在海報上' },
        lede: {
          en: 'The Assembly module set out to show that an ELP solution becomes a hydrogel. It found that it does not, and then found that most of its own numbers were the instrument talking to itself.',
          zh: 'Assembly 模組原本要證明 ELP 溶液會變成水膠。結果發現它不會，接著又發現自己大部分的數字其實是儀器在跟自己說話。'
        },
        body:
          h.fig({
            kind: 'bars',
            tag: { en: 'RESOLUTION', zh: '解析度' },
            title: { en: 'Measured torque against the calculated inertial torque', zh: '量測扭矩對上計算出的慣性扭矩' },
            sub: { en: 'Every number here is the team\'s own, including the statement that the first two do not describe the sample.', zh: '這裡每個數字都是該隊自己的，包括「前兩個並不描述樣品」這句話。' },
            data: [
              { label: { en: 'Measured torque, most runs (lower end)', zh: '多數測試的量測扭矩（下界）' }, v: 136, note: { en: 'within 2 % of the inertial torque', zh: '與慣性扭矩相差 2% 以內' } },
              { label: { en: 'Measured torque, most runs (upper end)', zh: '多數測試的量測扭矩（上界）' }, v: 170, note: { en: 'still within 2 % of the inertial torque', zh: '同樣在慣性扭矩的 2% 以內' } },
              { label: { en: 'Calculated inertial torque of the geometry', zh: '該量測幾何的計算慣性扭矩' }, v: 166.4, note: { en: 'the floor below which nothing about the sample is visible', zh: '低於這條線就看不到任何關於樣品的資訊' } }
            ],
            opts: { unit: { en: 'nN·m', zh: 'nN·m' }, dec: 1, xlabel: { en: 'torque, nN·m', zh: '扭矩，nN·m' } },
            caption: { en: 'Plotted by us from the team\'s Mechanical Properties results. Their own sentence: the moduli reported for these runs do not describe the sample.', zh: '由我們依該隊 Mechanical Properties 結果繪製。他們自己的句子是：這些測試回報的模數並不描述樣品。' }
          }) +
          h.take({ en: 'Why this is the best thing on the wiki', zh: '為什麼這是整個 wiki 上最好的一段' }, {
            en: 'A rheometer always returns a modulus. What it does not do is tell you whether that modulus came from your sample or from the inertia of the spinning geometry. TU Delft calculated the second number, compared it to the first, and **published the comparison instead of the moduli** — then kept going: only V72-ELP at 61.5 mg/mL resolved, G′ rising ~12 → 33.3 Pa at 33.6 °C and falling to 26 Pa at 37 °C, two to three orders of magnitude below published ELP gels.',
            zh: '流變儀永遠會回傳一個模數。它不會告訴你那個模數來自你的樣品，還是來自旋轉幾何本身的慣性。TU Delft 把第二個數字算了出來，拿去跟第一個比，然後**公開那個比較而不是那些模數**——接著繼續往下：只有 61.5 mg/mL 的 V72-ELP 解析得出來，G′ 由約 12 升到 33.6 °C 時的 33.3 Pa，再在 37 °C 掉到 26 Pa，比已發表的 ELP 水膠低兩到三個數量級。'
          }) +
          h.h3({ en: 'And then they argue against their own positive', zh: '然後他們反駁自己的正面結果' }) +
          h.p({
            en: 'The 61.5 mg/mL run is the only clearly resolved one — and in the 5 °C frequency sweep it gave G′ of 8–14 Pa while **the same construct at twice the concentration gave 0.50–0.78 Pa**. That is not consistent with a bulk solution at the nominal concentration. Their explanation is that the **dense phase was loaded into the geometry**, for example from the concentrated lower layer that forms when a solution stands above T_t — so **no concentration dependence may be read from the pair at all**.',
            zh: '61.5 mg/mL 那一輪是唯一清楚解析出來的——而在 5 °C 的頻率掃描中它的 G′ 是 8–14 Pa，而**同一個構建體在兩倍濃度下只有 0.50–0.78 Pa**。這與「標稱濃度下的均勻溶液」不一致。他們的解釋是**被裝進量測幾何裡的是緻密相**，例如溶液靜置在 T_t 以上時下層形成的濃縮層——所以**這一對數據完全不能用來讀出濃度依賴性**。'
          }) +
          h.note({
            en: 'The conclusion drawn against their own hypothesis: this is **liquid–liquid phase separation, not gelation**. Turbidity says the transition happens, rheology says no load-bearing network forms, confocal shows coacervate droplets — and it follows from the sequence, because (VPGVG)n encodes thermoresponsiveness and nothing that makes a junction that persists on the measurement timescale.',
            zh: '他們對自己的假設做出的結論是：這是**液–液相分離，不是凝膠化**。濁度說相變有發生，流變說沒有形成能承載應力的網絡，共軛焦顯示凝聚相液滴——而這可由序列推出，因為 (VPGVG)n 只編碼熱響應性，不編碼任何能在量測時間尺度上持續存在的交聯點。'
          }) +
          h.h3({ en: 'A second instrument, ruled unsuitable', zh: '第二台儀器，被判定不適用' }) +
          h.p({
            en: 'For surface attachment, the microplate reader gave **high signal in controls with no ELP and no dye** on both titanium and PDMS. Their diagnosis is the small gap between Cy3 excitation (~550 nm) and emission (~570 nm) letting reflected and scattered excitation light reach the detector off a reflective substrate. With large replicate variation on top, they state it plainly: **the plate reader is unsuitable for measuring surface attachment.** Epifluorescence microscopy was better — but **only one of three replicates per condition was imaged**, for time, "so the outcome is sensitive to outliers."',
            zh: '在表面附著這一項上，微孔盤讀儀在鈦與 PDMS 上**沒有 ELP、也沒有染劑的對照組都給出很高的訊號**。他們的診斷是 Cy3 的激發（約 550 nm）與發射（約 570 nm）波長太近，讓反射與散射的激發光從反射性基材上進到偵測器。再加上重複間變異很大，他們直接寫下：**微孔盤讀儀不適合量測表面附著。**磊晶螢光顯微較好——但因為時間關係，**每個條件三個重複中只有一個被成像**，「所以結果對離群值很敏感」。'
          }) +
          h.warn({
            en: 'A missing control is admitted in the same paragraph: the main PDMS experiment had **no non-diazirine ELP control**, for want of protein — which is exactly the control needed to separate the diazirine chemistry from the effect of UV irradiation.',
            zh: '同一段裡還承認了一個缺失的對照：主要的 PDMS 實驗**沒有不帶 diazirine 的 ELP 對照**，原因是蛋白不夠——而那正好是把 diazirine 化學與紫外光照射效應分開所需要的對照。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'd-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Four models and a tool, each ending in something a bench can act on', zh: '四個模型加一個工具，每一個都以實驗檯能照著做的東西收尾' },
        body:
          h.h3({ en: '1 · The LCST model, and the three baselines that make it readable', zh: '1 · LCST 模型，以及讓它可被判讀的三個基準' }) +
          h.p({
            en: 'The dataset was built by hand: **86 candidate sources** (71 papers and reviews, 15 patents) → **437 raw entries** → **273 after cleaning**, with both the raw and curated sets deposited on Zenodo. Where a paper reported T_t only as a figure, they wrote a browser-based **LCST Extractor**: calibrate the axes against known ticks, click along the curve, LOESS-smooth, and take T_t from the steepest change in absorbance. A small tool whose entire purpose is to stop them eyeballing numbers off a graph.',
            zh: '資料集是手工建的：**86 筆候選來源**（71 篇論文與回顧、15 件專利）→**437 筆原始紀錄**→**清理後 273 筆**，原始與清理後的資料集都存放在 Zenodo。凡是論文只用圖呈現 T_t 的，他們就自己寫了一個瀏覽器版的 **LCST Extractor**：以已知刻度校正座標軸、沿曲線點選、做 LOESS 平滑，再從吸光度變化最陡處取 T_t。一個小工具，存在的全部理由就是不讓自己用眼睛從圖上估數字。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'BASELINES', zh: '基準' },
            title: { en: 'Test MAE: their model against three baselines, not against nothing', zh: '測試 MAE：他們的模型對上三個基準，而不是對上空氣' },
            sub: { en: 'Lower is better. The mean baseline is what a model that has learned only the distribution would score.', zh: '越低越好。平均值基準是一個「只學到分布」的模型會得到的分數。' },
            data: [
              { label: { en: 'XGBoost model (theirs)', zh: 'XGBoost 模型（他們的）' }, v: 3.17, note: { en: 'R² = 0.88 on a 43-point held-out test set', zh: '在 43 點的保留測試集上 R²=0.88' } },
              { label: { en: 'Nearest ELPs (k-NN)', zh: '最近鄰 ELP（k-NN）' }, v: 4.64, note: { en: 'simulates a researcher looking for a close-enough literature example', zh: '模擬研究者去文獻裡找一個「足夠接近」的例子' } },
              { label: { en: 'Physics equation (Meyer & Chilkoti)', zh: '物理式（Meyer & Chilkoti）' }, v: 4.68, note: { en: 'wins where extrapolation is needed', zh: '在需要外插的地方反而贏' } },
              { label: { en: 'Mean of the training set', zh: '訓練集平均值' }, v: 11.00, note: { en: 'the floor any useful model must clear', zh: '任何有用的模型都必須超過的底線' } }
            ],
            opts: { unit: { en: '°C', zh: '°C' }, dec: 2, xlabel: { en: 'mean absolute error on the test set, °C', zh: '測試集平均絕對誤差，°C' } },
            caption: { en: 'Read from the team\'s Results page. They also publish cumulative accuracy profiles, so the whole error distribution is visible rather than one summary number.', zh: '讀自該隊 Results 頁。他們同時公開累積準確度曲線，讓整個誤差分布都看得見，而不是只給一個總結數字。' }
          }) +
          h.p({
            en: 'They then publish **their five worst and five best test points with the sequence and the measurement conditions**, and diagnose them. Every high-error sequence carries residues outside the ELP repeats. The worst, index 209 at **−15.18 °C**, sat at **2918 µM** when the dataset mean is ~400 µM and most points are under 100 µM.',
            zh: '接著他們公開**自己最差與最好的各五個測試點，連序列與量測條件一起**，並做診斷。所有高誤差序列都帶有 ELP 重複以外的殘基。最差的那個，編號 209、誤差 **−15.18 °C**，濃度是 **2918 µM**，而資料集平均約 400 µM、多數點低於 100 µM。'
          }) +
          h.take({ en: 'The structural admission', zh: '結構性的承認' }, {
            en: 'A tree cannot extrapolate. Past its last split it keeps returning the answer that belongs to the highest concentration it ever saw, no matter how far out the new value is. They state this as a property of the model class, not as an accident, and name four fixes: flag out-of-range inputs, return a confidence, log-transform concentration, or hybridise with the physics equation — **which is reasonable precisely because the two models fail on opposite points**.',
            zh: '決策樹不能外插。超過最後一個分裂點之後，它就一直回傳它見過的最高濃度所對應的答案，不管新值離得多遠。他們把這件事寫成「模型類別的性質」而不是意外，並指出四個修法：標記超出範圍的輸入、回傳信心值、對濃度取對數，或與物理式混合——**而後者之所以合理，正是因為兩個模型失敗在相反的那些點上**。'
          }) +
          h.h3({ en: '2 · Molecular dynamics, three questions, three design rules', zh: '2 · 分子動力學：三個問題、三條設計規則' }) +
          h.p({
            en: 'CALVADOS 2, one bead per amino acid, a surface-attached brush, run through a supercomputer pipeline. Each module answers a design question and ends in a rule a wet-lab person can act on.',
            zh: 'CALVADOS 2，每個胺基酸一顆珠子，模擬表面接枝的刷層，跑在超級電腦流程上。每個模組回答一個設計問題，並以實驗檯可以照著做的規則收尾。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Question', zh: '問題' }, w: '20%' },
              { t: { en: 'What the simulations found', zh: '模擬找到了什麼' } },
              { t: { en: 'The rule handed to the bench', zh: '交給實驗檯的規則' }, w: '26%' }
            ],
            rows: [
              [{ en: '**Stiffness**', zh: '**硬度**' },
               { en: 'Attachment density dominates: ~8× across its range, **81 % of explained variance**; chain length, lysine spacing and ionic strength 6–7 % each. Response surface R² = 0.98, cross-validated R² = 0.94 on held-out designs. The map spans ~20× in the proxy, which on a ~3 kPa base construct is about **0.3–6 kPa** — bracketing fat, liver and muscle.', zh: '接枝密度主宰一切：在其範圍內約 8 倍變化、**佔可解釋變異的 81%**；鏈長、離胺酸間距與離子強度各佔 6–7%。響應曲面 R²=0.98，在保留設計上交叉驗證 R²=0.94。整張圖在代理量上跨約 20 倍，換算到約 3 kPa 的基準構建體就是 **0.3–6 kPa**——剛好包住脂肪、肝與肌肉。' },
               { en: 'Set the attachment density first, then fine-tune with ionic strength.', zh: '先定接枝密度，再用離子強度微調。' }],
              [{ en: '**Crosslink placement**', zh: '**交聯位置**' },
               { en: 'With four lysines per chain fixed, the arrangement decides **bridges vs loops**, not the crosslink count (median 19–22 of 22 either way). Median bridges: **3 clustered → 7 focused → 14 random → 19 uniform** (one lysine per block); loops fall 16 → 3. The predictor is distance along the sequence to the nearest lysine on the same chain: 5 residues → ~13 % bridge, 20 → ~50 %, 60 → ~80 %, with R² = 0.88 on held-out simulations from that one feature.', zh: '把每條鏈四個離胺酸固定下來之後，排列方式決定的是**橋接或自環**，而不是交聯數量（兩種情況下中位數都是 22 中的 19–22）。橋接數中位數：**聚集 3→集中 7→隨機 14→均勻 19**（每區塊一個離胺酸）；自環由 16 降到 3。預測因子是序列上到同鏈最近離胺酸的距離：相距 5 個殘基約 13% 成橋、20 個約 50%、60 個約 80%，僅用這一個特徵就能在保留模擬上達到 R²=0.88。' },
               { en: 'One lysine per block, evenly spread, about 100 residues apart.', zh: '每區塊一個離胺酸、均勻分布、間距約 100 個殘基。' }],
              [{ en: '**Motif accessibility**', zh: '**motif 可及性**' },
               { en: 'With the building blocks held constant, placement decided exposure: RGD at the chain ends was most accessible, and both ends beat one. Shuffling the functional domains **did not** change the chain\'s ability to collapse at high temperature.', zh: '把組成元件固定下來，位置決定暴露程度：RGD 放在鏈端最容易被接近，兩端都放勝過只放一端。打亂功能區段的順序**並不會**改變鏈在高溫下塌縮的能力。' },
               { en: 'Put the binding motif at the termini — accessibility can be optimised without breaking thermoresponsiveness.', zh: '把結合 motif 放在兩端——可及性可以在不破壞熱響應性的前提下最佳化。' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Model and Results pages.', zh: '讀自該隊 Model 與 Results 頁。' }
          }) +
          h.h3({ en: '3 · Omics-guided motif selection, and its own disagreement', zh: '3 · 組學導引的 motif 選擇，以及它自己的矛盾' }) +
          h.p({
            en: 'Known cell-adhesion motifs are matched to the target tissue from transcriptomic and proteomic signatures, and the output is written as **"ELP coating recipes"** per tissue — skin, adipose, osteoarthritic cartilage. The caveat section is titled by the finding rather than by the method: *transcriptomics and proteomics do not always agree.* Their limitations also state that the model distinguishes fibroblasts building interstitial matrix from endothelial cells building basement membrane, and that **presence in a signature is not abundance**.',
            zh: '已知的細胞黏附 motif 由各組織的轉錄體與蛋白體特徵配對出來，輸出寫成各組織的**「ELP 塗層配方」**——皮膚、脂肪、骨關節炎軟骨。警語那一節的標題是用發現、而不是用方法命名的：*轉錄體與蛋白體並不總是一致。*他們的限制說明中也指出，模型區分了建構間質基質的纖維母細胞與建構基底膜的內皮細胞，並且**在特徵裡出現不等於含量多**。'
          }) +
          h.h3({ en: '4 · The plant model, with a numbered spec from the business side', zh: '4 · 產線模型，附上來自商業端的編號規格' }) +
          h.p({
            en: 'A pilot-scale bioprocess in **SuperPro Designer**, built to a specification the entrepreneurship team wrote down as three numbered requirements: flexible switching between different ELPs within each batch cycle; **at least 10.2 kg of ELP per year to coat 117 million continuous glucose monitors, without hitting full capacity**; and a lyophilised final product for transport and shelf life. Three sections — fermentation, pretreatment, purification — with an interactive flowsheet, characterised streams and equipment, a financial analysis and a life-cycle assessment.',
            zh: '一條在 **SuperPro Designer** 中建立的試量產製程，依照商業端寫下的三條編號需求打造：每個批次循環內可彈性切換不同 ELP；**年產至少 10.2 kg ELP 以塗覆 1.17 億個連續血糖監測器，且不觸及滿載產能**；最終產品為凍乾形式以便運送與延長保存期。分成三段——發酵、前處理、純化——附互動式流程圖、物流與設備規格、財務分析與生命週期評估。'
          }) +
          h.take({ en: 'Why the spec matters more than the flowsheet', zh: '為什麼規格比流程圖重要' }, {
            en: 'A process model with no pass condition cannot fail. Because the entrepreneurship team asked for 10.2 kg/year and a lyophilised product in writing, the SuperPro output has something to be checked against — which is the difference between a model and a drawing.',
            zh: '沒有通過條件的製程模型是不可能失敗的。因為商業端用書面要求了年產 10.2 kg 與凍乾成品，SuperPro 的輸出就有東西可以對照檢查——這就是「模型」與「圖」的差別。'
          }) +
          h.h3({ en: '5 · MOSAIC Designer', zh: '5 · MOSAIC Designer' }) +
          h.p({
            en: 'The software page documents how the codon-scrambling search works, how the score is defined, **how their method differs from the published one**, and — the section we would copy — *what to check in a new design*. The wet-lab validation is the nine-insert Golden Gate assembly above: parts designed by the software, ordered from two providers, assembled in one reaction, 100 % identical by whole-plasmid sequencing.',
            zh: '軟體頁說明了密碼子洗牌的搜尋怎麼進行、分數怎麼定義、**他們的方法與已發表方法的差異在哪**，以及——我們會抄的那一節——*在新設計裡該檢查什麼*。濕式驗證就是上面那場九插入 Golden Gate 組裝：零件由軟體設計、向兩家代工廠訂購、一次反應組起、全質體定序 100% 相符。'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'd-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Seven negative results, each with a mechanism attached', zh: '七個負面結果，每個都附上機制' },
        lede: {
          en: 'What makes this list unusual is not its length. It is that none of these entries stops at "it did not work".',
          zh: '這份清單特別的地方不是它的長度，而是裡面沒有任何一條停在「它沒成功」。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What failed', zh: '什麼失敗了' }, w: '22%' },
              { t: { en: 'The mechanism they give', zh: '他們給出的機制' } },
              { t: { en: 'What it changed', zh: '這改變了什麼' }, w: '22%' }
            ],
            rows: [
              [{ en: 'IMAC as one step', zh: 'IMAC 作為單一步驟' },
               { en: 'Contaminants need 30–80 mM imidazole against a 10 mM wash; and phase transition on the column, because binding concentrates ELP on the bead and both salt and local concentration lower T_t. The usual remedy is ruled out for the same reason.', zh: '污染蛋白需要 30–80 mM 咪唑，而沖洗只有 10 mM；再加上管柱上的相變，因為結合會把 ELP 濃縮在珠體上，而鹽與局部濃度都會降低 T_t。常用的解法因為同一個原因被排除。' },
               { en: 'Inverse transition cycling became the method.', zh: '逆相變循環成為正式方法。' }],
              [{ en: 'Gelation', zh: '凝膠化' },
               { en: 'It is coacervation, not gelation. (VPGVG)n encodes thermoresponsiveness and nothing that makes a persistent junction; turbidity, rheology and confocal agree.', zh: '那是凝聚相，不是凝膠。(VPGVG)n 編碼熱響應性，但不編碼任何持續存在的交聯點；濁度、流變與共軛焦三者一致。' },
               { en: 'The failure follows from the sequence, so it is a design input.', zh: '這個失敗可由序列推出，所以它是一個設計輸入。' }],
              [{ en: 'Titanium attachment', zh: '鈦表面附著' },
               { en: 'Inconclusive and published as inconclusive. Labelling worked; conditions could not be compared. Named causes: possible low diazirine conjugation efficiency, possible inefficient UV activation.', zh: '無法判定，而且就以「無法判定」公開。標記成功；但條件之間無法比較。指出的原因：diazirine 偶合效率可能偏低、紫外活化可能不足。' },
               { en: 'A TNBS assay for primary amines is named as the next experiment.', zh: '把量測一級胺的 TNBS 試驗寫成下一個實驗。' }],
              [{ en: 'The plate reader', zh: '微孔盤讀儀' },
               { en: 'Controls with no ELP and no dye gave high signal; Cy3\'s ~20 nm Stokes shift plus reflective titanium and PDMS.', zh: '沒有 ELP、也沒有染劑的對照給出高訊號；Cy3 的 Stokes 位移僅約 20 nm，加上鈦與 PDMS 會反光。' },
               { en: 'Declared unsuitable for this measurement.', zh: '被宣告不適用於這項量測。' }],
              [{ en: 'Plasmid selection', zh: '質體選擇壓' },
               { en: 'The kanamycin stock was non-selective — an Amp-resistant test strain grew in it. Plasmid loss was never measured, so the effect "cannot be quantified".', zh: '卡那黴素原液沒有選擇性——一株只帶 Amp 抗性的測試菌在裡面長起來。質體流失從未被量測，所以影響「無法量化」。' },
               { en: 'A caveat attached to the expression data rather than a deleted paragraph.', zh: '變成附在表達數據上的警語，而不是被刪掉的段落。' }],
              [{ en: 'The inducible system', zh: '誘導系統' },
               { en: 'The protein had already accumulated before IPTG. Leaky T7 is offered as a candidate explanation and explicitly not as a conclusion, because promoter activity was never measured.', zh: '蛋白在加 IPTG 之前就已累積。「T7 漏表達」只被當成候選解釋，並且明確不當結論，因為啟動子活性從未被量測。' },
               { en: 'Uninduced high-density growth became the production route.', zh: '未誘導的高密度培養成為正式生產路線。' }],
              [{ en: 'The ML model on complex sequences', zh: '機器學習模型對複雜序列' },
               { en: 'Two causes separated: a training set dominated by canonical (VPGXG)n, and the structural inability of a tree to extrapolate past its last split.', zh: '兩個原因被分開：訓練集由標準 (VPGXG)n 主導，以及決策樹在結構上無法外插到最後一個分裂點之外。' },
               { en: 'A hybrid with the physics equation is proposed, with the reason.', zh: '提出與物理式混合的做法，並說明理由。' }]
            ],
            min: 800,
            source: { en: 'All seven are reported by the team on their own Results, Model and Software pages. The wording in the middle column is ours; the mechanisms are theirs.', zh: '七項都是該隊在自己的 Results、Model、Software 頁上報告的。中欄的措辭是我們的；機制是他們的。' }
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'd-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from TU Delft', zh: '我們會從 TU Delft 抄什麼' },
        lede: {
          en: 'Six practices. This section is our judgement, not a report of what the wiki says.',
          zh: '六個做法。這一節是我們的判斷，不是對 wiki 內容的轉述。'
        },
        body:
          h.ul([
            { en: '**Say when the instrument, not the sample, produced the number.** Calculate the inertial torque, compare it to the measured torque, and publish the comparison instead of the moduli. This is the single most transferable paragraph on any 2026 wiki, and it costs nothing but arithmetic.', zh: '**說清楚那個數字是儀器產生的、不是樣品產生的。**算出慣性扭矩、拿去跟量到的扭矩比，然後公開那個比較而不是那些模數。這是 2026 年所有 wiki 上最可轉移的一段，而它的成本只有一點算術。' },
            { en: '**Three baselines and a published error table.** A physics equation, a k-NN standing in for "what a researcher would actually do", and mean-of-training. Then the five worst points with their conditions. That turns an ML claim from impressive into checkable.', zh: '**三個基準，加一張公開的誤差表。**一條物理式、一個代表「研究者實際上會怎麼做」的 k-NN，以及訓練集平均值。然後附上最差的五個點連同其條件。這讓一個機器學習主張從「厲害」變成「可查核」。' },
            { en: '**Build the small tool that stops you eyeballing data.** The LCST Extractor exists only because literature T_t values live inside figures. It is a weekend of work that makes 273 data points defensible.', zh: '**做那個讓你不必用眼睛估數據的小工具。**LCST Extractor 存在的唯一理由，是文獻中的 T_t 值藏在圖裡。那是一個週末的工作量，卻讓 273 個資料點站得住腳。' },
            { en: '**Let a model answer a design question, not a modelling question.** Every MD module ends in one sentence a wet-lab person can act on. "Set the attachment density first, fine-tune with ionic strength" is a rule; a response surface is not.', zh: '**讓模型回答設計問題，而不是建模問題。**每個 MD 模組都以一句實驗檯能照著做的話收尾。「先定接枝密度，再用離子強度微調」是一條規則；一張響應曲面不是。' },
            { en: '**Separate "detected" from "recovered".** Thrombin-cleavable-ELP was invisible in whole-cell lysate and real after purification. They refused to read absence as failure, and wrote the rule down.', zh: '**把「偵測到」與「回收到」分開。**凝血酶可切型 ELP 在全細胞裂解液中看不到，純化後卻是真的。他們拒絕把「沒看到」讀成「失敗」，並把這條規則寫下來。' },
            { en: '**Have the business side write a numbered spec for the model.** 10.2 kg a year, 117 million devices, lyophilised. A process model with a pass condition is a model; one without is a diagram.', zh: '**讓商業端用書面寫下編號規格給模型。**年產 10.2 kg、1.17 億個裝置、凍乾成品。有通過條件的製程模型才是模型；沒有的那個只是一張圖。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the six items above, the claim that the inertial-torque paragraph is the most transferable thing here, and the reading that T_t\'s non-independence organises the whole project. Everything else on this page is the team\'s own, read from [2026.igem.wiki/tu-delft](https://2026.igem.wiki/tu-delft/).',
            zh: '標示為我們的看法：上面六點、「慣性扭矩那一段是這裡最可轉移的東西」這個主張，以及「T_t 的不獨立性組織了整個專案」這個判讀。本頁其餘內容都是該隊自己的，讀自 [2026.igem.wiki/tu-delft](https://2026.igem.wiki/tu-delft/)。'
          })
      });

      return out;
    }
  };
})(window);
