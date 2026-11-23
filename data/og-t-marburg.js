/* Marburg — CLiPPR. Top 10 Overgraduate, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/marburg/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Purify 19 new-to-nature PPRs', zh: '純化 19 個自然界沒有的 PPR' },
        s: { en: 'Automated 96-well gave nM–µM; manual gave 6–150 µM, so they went back to manual', zh: '自動化 96 孔只到 nM–µM；手工做到 6–150 µM，於是回到手工' }, tone: 'a' },
      { l: { en: 'Measure binding, with a nine-cytosine control', zh: '量結合，並用九個胞嘧啶做對照' },
        s: { en: 'Fluorescence polarisation, 800 nM to 0.39 nM against 5 nM labelled RNA', zh: '螢光偏極，800 nM 到 0.39 nM，對 5 nM 標記 RNA' } },
      { l: { en: 'Block translation in a chloroplast extract', zh: '在葉綠體萃取物中阻斷轉譯' },
        s: { en: 'PPR 1 cut reporter output ~100-fold; a non-cognate PPR left it untouched', zh: 'PPR 1 把報告訊號壓低約 100 倍；非對應的 PPR 完全不影響' }, tone: 'g' },
      { l: { en: 'Fail to protect, and locate the cause', zh: '保護失敗，並找出原因' },
        s: { en: 'Expression fell 97-fold with XRN-1 and 98-fold in the enzyme-free mock: it was the buffer', zh: '加 XRN-1 時表達下降 97 倍，而不含酵素的空白組下降 98 倍：原因是緩衝液' }, tone: 'r' },
      { l: { en: 'Transform both strains, then drop one', zh: '兩株都轉形，再砍掉一株' },
        s: { en: '30 constructs bombarded into CC-125 and UVM4; UVM4 produced enough, 26 survived selection', zh: '30 個構建體同時打進 CC-125 與 UVM4；UVM4 夠用，26 個通過選擇' } },
      { l: { en: 'Switch a plastid gene from the nucleus', zh: '從核內開關一個質體基因' },
        s: { en: 'utr102 + PPR 100 reached ~4× the parent, in all three colonies picked', zh: 'utr102＋PPR 100 達到親代的約 4 倍，而且三個挑出的菌落都如此' } }
    ],
    dry: [
      { l: { en: 'Port GRASP by hand', zh: '手工移植 GRASP' },
        s: { en: 'Fusion sites inside ARELF; C. reinhardtii codon table; exclude codons below 50 % abundance', zh: '融合位點放在 ARELF 內；用 C. reinhardtii 密碼子表；排除相對豐度低於 50% 的密碼子' } },
      { l: { en: 'Baseline the predictor against itself', zh: '用同一個預測器建立基準' },
        s: { en: 'Run the original GRASP overhangs through the same NEB calculator first: 78 % vs 82 %', zh: '先把原始 GRASP 黏端丟進同一個 NEB 計算器：78% 對 82%' }, tone: 'g' },
      { l: { en: 'Automate it as PPR-opt', zh: '把它自動化成 PPR-opt' },
        s: { en: 'Designer for one sequence, Inventory for a whole toolbox; Colab, no install', zh: 'Designer 針對單一序列、Inventory 產生整套工具箱；Colab，不需安裝' } },
      { l: { en: 'Add introns where the literature says they help', zh: '在文獻說有幫助的地方加內含子' },
        s: { en: 'LHCBM1i2 in the B and D modules, shipped with and without', zh: 'LHCBM1i2 放在 B 與 D 模組，提供有／無兩種版本' } }
    ],
    links: [
      { w: 0, d: 2, l: { en: 'synthesis refused the repeats, so build a toolbox', zh: '代工廠拒絕重複序列，所以自己做工具箱' } },
      { w: 1, d: 0, l: { en: 'a motif argument predicted the best binder', zh: '一個 motif 論證預測了最好的結合蛋白' }, up: true },
      { w: 5, d: 2, l: { en: 'the nonsense PPR will validate the tool', zh: '那個無意義的 PPR 會驗證這個工具' }, up: true }
    ]
  };

  PD.pages['og-marburg'] = {
    label: { en: 'Marburg', zh: 'Marburg' },
    title: { en: 'Marburg — CLiPPR', zh: 'Marburg — CLiPPR' },
    render: function (h) {
      var t = team('marburg');
      var out = h.teamhero(t, {
        h1: {
          en: 'Two approaches failed, and ==both failures converge on one missing thing==.',
          zh: '兩條路線都失敗了，而==兩個失敗都收斂到同一件缺少的東西上==。'
        },
        lede: {
          en: 'Chloroplasts are the best protein factories a plant has, but growth and production compete, so high constitutive expression keeps the plant small and the total yield low. In microbes you solve that with dynamic control; chloroplasts have no equivalent toolkit. CLiPPR builds the synthetic version — nuclear PPR proteins switching plastid genes through synthetic 5′ UTRs — and tests it across three systems of increasing complexity. One of the three mechanisms worked. The other two failed, and the wiki turns both failures into numbers and one design rule.',
          zh: '葉綠體是植物最好的蛋白工廠，但生長與生產互相競爭，所以高強度的組成型表達會讓植株長不大、總產量反而低。在微生物裡你用動態調控解決這件事；葉綠體則沒有對應的工具箱。CLiPPR 做出了合成版本——由核內 PPR 蛋白透過合成 5′ UTR 開關質體基因——並在三個複雜度遞增的系統中測試。三種機制中有一種成功。另外兩種失敗了，而這個 wiki 把兩個失敗都變成數字，再變成一條設計規則。'
        },
        chips: [
          { t: { en: 'PPR RNA-binding proteins', zh: 'PPR RNA 結合蛋白' }, k: 'b' },
          { t: { en: 'Synthetic 5′ UTRs', zh: '合成 5′ UTR' }, k: 'v' },
          { t: { en: 'Chloroplast cell-free system', zh: '葉綠體無細胞系統' }, k: 'g' },
          { t: { en: 'C. reinhardtii + N. benthamiana', zh: 'C. reinhardtii＋N. benthamiana' }, k: 't' },
          { t: { en: 'PPR-opt + Chlamy-GRASP', zh: 'PPR-opt＋Chlamy-GRASP' }, k: 'a' }
        ],
        stats: [
          { v: '1,140', l: { en: 'Cell-free reactions run this season', zh: '這一季跑過的無細胞反應數' } },
          { v: '< 2.5 nM', l: { en: 'KD of PPR 107 — beyond the assay\'s resolution, reported as a limit', zh: 'PPR 107 的 KD——超出試驗解析度，以上限形式報告' } },
          { v: '~100×', l: { en: 'Reporter reduction by PPR 1, with a non-cognate PPR as the control', zh: 'PPR 1 造成的報告訊號下降倍數，並以非對應 PPR 作對照' } },
          { v: '98 vs 97', l: { en: 'Fold drop in the enzyme-free mock against the nuclease — the buffer did it', zh: '不含酵素的空白組與含核酸酶組的下降倍數——原因是緩衝液' } },
          { v: '−8', l: { en: 'kcal/mol a PPR releases, against hairpins at −21 to −38', zh: 'PPR 釋出的 kcal/mol，而髮夾結構是 −21 到 −38' } },
          { v: '8 weeks', l: { en: 'Chloroplast plus nuclear transformation: one iteration per season', zh: '葉綠體加核轉形所需時間：一季只能跑一輪' } }
        ]
      });

      out += h.toc([
        { id: 'm-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'm-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'm-vitro', t: { en: 'In the extract', zh: '在萃取物中' } },
        { id: 'm-vivo', t: { en: 'In a living cell', zh: '在活細胞中' } },
        { id: 'm-dry', t: { en: 'PPR-opt', zh: 'PPR-opt' } },
        { id: 'm-fail', t: { en: 'Two failures, one cause', zh: '兩個失敗、一個原因' } },
        { id: 'm-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'm-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Give the chloroplast the dynamic control microbes already have', zh: '把微生物早就有的動態調控給葉綠體' },
        lede: {
          en: 'Around 80 % of the protein in Arabidopsis green leaves sits in the chloroplast, a single recombinant protein can be more than half of a leaf\'s soluble protein, and the inputs are water, CO₂ and light.',
          zh: '阿拉伯芥綠葉中約有 80% 的蛋白位於葉綠體，單一重組蛋白可以占一片葉子可溶蛋白的一半以上，而投入只有水、二氧化碳與光。'
        },
        body:
          h.p({
            en: 'The plastome is precisely engineerable by homologous recombination and gives high expression rates. So why is plant bioproduction still overlooked? Because **growth and production compete**: high constitutive expression imposes a metabolic burden, the plant cannot reach its full size, and a lot of protein per gram multiplied by almost no biomass is a low total yield.',
            zh: '質體基因體可以用同源重組精準改造，而且表達量很高。那為什麼植物生物生產仍然被忽略？因為**生長與生產互相競爭**：高強度的組成型表達帶來代謝負擔，植株長不到應有的大小，而「每公克很多蛋白」乘上「生物量很少」等於總產量很低。'
          }) +
          h.take({ en: 'The mechanism already exists in the plant', zh: '這個機制在植物體內本來就有' }, {
            en: 'Plants regulate plastid genes **post-transcriptionally**, through nuclear-encoded **PPR** (pentatricopeptide repeat) RNA-binding proteins. CLiPPR builds the synthetic version: **synthetic 5′ UTRs placed upstream of any gene of interest**, matched to **synthetic PPRs expressed from the nucleus under inducible promoters** — so a nuclear inducer controls a chloroplast gene.',
            zh: '植物是以**轉錄後**方式調控質體基因的，透過核基因編碼的 **PPR**（五肽重複序列）RNA 結合蛋白。CLiPPR 做的是合成版本：**把合成 5′ UTR 放在任何目標基因上游**，配上**由核內可誘導啟動子表達的合成 PPR**——於是一個核內誘導劑就能控制一個葉綠體基因。'
          }) +
          h.flow({
            title: { en: 'Three mechanisms, attempted deliberately rather than one', zh: '刻意同時嘗試三種機制，而不是只做一種' },
            sub: { en: 'One of the three worked. The wiki is organised so you can see which, and why the other two did not.', zh: '三種之中有一種成功。這個 wiki 的組織方式讓你能看出是哪一個，以及另外兩個為什麼沒成。' },
            stages: [
              { label: { en: 'Blocking', zh: 'Blocking' }, sub: { en: 'PPR binds over the start codon and stops the ribosome', zh: 'PPR 蓋在起始密碼子上，阻止核糖體' }, tone: 'g',
                items: [{ en: 'down-regulation — and the one that worked, ~100-fold in extract', zh: '下調——而這是成功的那一個，在萃取物中約 100 倍' }] },
              { label: { en: 'Protecting', zh: 'Protecting' }, sub: { en: 'PPR binds the 5′ UTR and shields the transcript from a 5′→3′ exonuclease', zh: 'PPR 結合 5′ UTR，保護轉錄本不被 5′→3′ 外切酶分解' }, tone: 'r',
                items: [{ en: 'up-regulation — no measurable effect, because the nuclease barely worked', zh: '上調——沒有可量測的效果，因為那個核酸酶幾乎沒在運作' }] },
              { label: { en: 'Resolving', zh: 'Resolving' }, sub: { en: 'PPR binds inside a hairpin occluding the ribosome binding site and opens it', zh: 'PPR 結合在遮住核糖體結合位的髮夾結構內部，把它打開' }, tone: 'r',
                items: [{ en: 'up-regulation — flat, and the energy budget says why', zh: '上調——完全沒反應，而能量帳目解釋了原因' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Project Description and Results pages.', zh: '由我們依該隊 Project Description 與 Results 頁繪製。' }
          }) +
          h.note({
            en: 'Tested across **three systems of increasing complexity**: a spinach **chloroplast cell-free system (CCFS)**, living **Chlamydomonas reinhardtii**, and **Nicotiana benthamiana** as the higher plant. Scale, as the wiki counts it: **673 MoClo/Golden Gate reactions, 565 plasmids, 38 nuclear transformations, 60 chloroplast transformations, 23 proteins purified, 1,140 CCFS reactions.**',
            zh: '測試橫跨**三個複雜度遞增的系統**：菠菜**葉綠體無細胞系統（CCFS）**、活體**Chlamydomonas reinhardtii**，以及作為高等植物的 **Nicotiana benthamiana**。規模（依該 wiki 自己的計數）：**673 次 MoClo／Golden Gate 反應、565 個質體、38 次核轉形、60 次葉綠體轉形、23 個蛋白純化、1,140 次 CCFS 反應。**'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'm-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A synthesis constraint created the dry lab', zh: '一個合成上的限制創造了這個乾式實驗' },
        lede: {
          en: 'PPR coding sequences are highly repetitive and C. reinhardtii\'s nuclear genome is GC-rich, which "exceeded the complexity limits of traditional DNA synthesis companies". Only one provider could make them, in limited quantity. That is why a toolbox and a tool exist.',
          zh: 'PPR 的編碼序列高度重複，而 C. reinhardtii 的核基因體富含 GC，這「超出了傳統 DNA 合成公司的複雜度上限」。只有一家代工廠做得出來，而且數量有限。這就是為什麼會有一個工具箱與一個工具。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'CLiPPR: three systems, two lanes', zh: 'CLiPPR：三個系統、兩條泳道' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Results, Software and Alternative Platform pages.', zh: '由我們依該隊 Results、Software、Alternative Platform 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- in vitro ---------------- */
      out += h.sec({
        id: 'm-vitro',
        kick: { en: 'In the extract', zh: '在萃取物中' },
        h2: { en: 'Where the method work is published rather than assumed', zh: '方法上的工作被公開，而不是被假設' },
        body:
          h.phases([
            { h: { en: 'Protein production, and an automation attempt abandoned with numbers', zh: '蛋白生產，以及一次帶著數字被放棄的自動化嘗試' },
              p: { en: 'His-tag/Ni-NTA was chosen on stated grounds: one step, cost-effective, reproducible by others, and a small 6×His tag that should not interfere with RNA binding.', zh: 'His-tag／Ni-NTA 的選擇有明確理由：單一步驟、成本效益好、別人容易重現，而且 6×His 標籤很小，應該不會干擾 RNA 結合。' },
              items: [
                { en: 'They first tried a **semi-automated 96-well purification (SAPP) on the MaxGENESYS biofoundry** at the Max Planck high-throughput facility — then reverted to manual, with the reason quantified: automated yields landed in the **nanomolar to single-digit micromolar** range, while manual gave **6 µM to 150 µM**, which is what the downstream assays needed.', zh: '他們先在 Max Planck 高通量設施的 **MaxGENESYS 生物工廠上試了半自動 96 孔純化（SAPP）**——然後回到手工，而理由被量化了：自動化的產量落在**奈莫耳到個位數微莫耳**範圍，而手工做到 **6 µM 到 150 µM**，那才是下游試驗需要的。' },
                { en: 'Purity checked by Coomassie SDS-PAGE against expected masses — **48.9 kDa for the 9-repeat PPRs, 66.8 kDa for the 14-repeat PPR 313b** — then aliquoted and flash-frozen to avoid freeze–thaw cycles.', zh: '純度以 Coomassie 染的 SDS-PAGE 對照預期分子量檢查——**9 個重複的 PPR 為 48.9 kDa、14 個重複的 PPR 313b 為 66.8 kDa**——接著分裝並以液氮急凍，避免反覆凍融。' },
                { en: 'The throughput constraint is published as a constraint: **eight PPRs per run**, several days of preparation plus a full day on the column — **so they deliberately dropped part of their own design set.** Total: **19 novel PPR proteins** taken from design through cloning to expression and purification.', zh: '通量限制是以「限制」的形式被公開的：**每批八個 PPR**、數天準備加上管柱整整一天——**所以他們刻意放棄了自己設計集合中的一部分。**總計：**19 個新的 PPR 蛋白**，從設計、選殖一路做到表達與純化。' }
              ] },
            { h: { en: 'Fluorescence polarisation, with a real negative control', zh: '螢光偏極，附帶一個真正的陰性對照' },
              p: { en: 'Seven 9-nucleotide binding-site RNAs, each fluorescein-labelled on a 3′ adenine, **plus a nine-cytosine RNA as the non-binding control.** The titration range was anchored on a literature KD of 7.6 nM for a PPR on the *rpoA* 5′ UTR: 800 nM down to 0.39 nM in halving steps against 5 nM RNA, read at five time points.', zh: '七條 9 個核苷酸的結合位 RNA，各在 3′ 端的腺嘌呤上標記螢光素，**另加一條九個胞嘧啶的 RNA 作為非結合對照。**滴定範圍錨定在文獻中某個 PPR 對 *rpoA* 5′ UTR 的 KD 7.6 nM：從 800 nM 以對半方式降到 0.39 nM，對 5 nM 的 RNA，並在五個時間點讀值。' },
              items: [
                { en: 'Results, with 95 % confidence intervals published: PPR 106 **349.9 nM**, PPR 113 **195.1**, PPR 342 **143.2**, PPR 313a **129.2**, PPR 1 **106.6**, PPR 334 **81.83**, and PPR 107 **< 2.5 nM — beyond the assay\'s resolution**, which is half the probe concentration, so it is reported as a limit rather than invented as a number.', zh: '結果連 95% 信賴區間一起公開：PPR 106 為 **349.9 nM**、PPR 113 **195.1**、PPR 342 **143.2**、PPR 313a **129.2**、PPR 1 **106.6**、PPR 334 **81.83**，而 PPR 107 為 **< 2.5 nM——超出試驗解析度**（也就是探針濃度的一半），所以它是以上限形式報告，而不是硬掰一個數字出來。' },
                { en: 'The non-binding control **never saturated**, so its KD is reported as **> 800 nM** — which is simultaneously the specificity control and the proof that the assay works.', zh: '非結合對照**從未飽和**，所以它的 KD 以 **> 800 nM** 報告——這同時是專一性對照，也是這個試驗確實可用的證明。' }
              ],
              done: { en: 'Seven synthetic PPRs that bind their targets specifically, across a deliberately broad range of affinities.', zh: '七個合成 PPR 都專一地結合各自的標靶，而且刻意涵蓋很寬的親和力範圍。' } },
            { h: { en: 'PPR 107 was a prediction before it was a result', zh: 'PPR 107 在成為結果之前，先是一個預測' },
              p: { en: 'They took the native *rpoA* recognition sequence and changed the first two bases "UU" → "AG", to make an orthogonal part.', zh: '他們取了原生的 *rpoA* 辨識序列，把前兩個鹼基從「UU」改成「AG」，以做出一個正交的零件。' },
              items: [
                { en: 'That change swapped the N-terminal motifs **ND-ND → TN-TD**, which **cut the number of D31-containing motifs — reported in the GRASP paper as having reduced activity — from 6 to 4.** Since N-terminal PPR–RNA interactions carry more weight, they **hypothesised in advance that binding would improve.**', zh: '這個改動把 N 端 motif 從 **ND-ND 換成 TN-TD**，而這**把含 D31 的 motif 數量——GRASP 論文報告其活性較低——從 6 個減到 4 個。**由於 N 端的 PPR–RNA 交互作用權重較大，他們**事先假設結合力會變好。**' },
                { en: 'It did, by at least threefold against the native sequence — and among the best KDs in the literature. The reason this matters is not the number: it is that **the prediction was published before the measurement**, so the measurement tests something.', zh: '結果真的變好，比原生序列至少好三倍——而且在文獻中屬於最好的 KD 之列。這件事重要的地方不是那個數字，而是**預測在量測之前就被寫下來**，所以那個量測真的在檢驗某件事。' }
              ] },
            { h: { en: 'Batch validation, and a promoter chosen by experiment', zh: '批次驗證，以及一個由實驗決定的啟動子' },
              p: { en: 'Three CCFS batches were made in one season, each validated against a known-good extract — **and from the second batch onward, each new batch was tested alongside a sample of the previous one**, so batch drift is detectable rather than invisible.', zh: '一季之內做了三批 CCFS，每一批都對照一批已知良好的萃取物驗證——**而且從第二批開始，每一批新的都和上一批的樣品並行測試**，讓批次漂移變成可偵測的，而不是看不見的。' },
              items: [
                { en: 'No-DNA and no-extract controls on every run, and the validation construct is **UTC 7.0 (BBa_K3758301), from Marburg\'s own 2021 team** — a part reused across five years of the same chapter.', zh: '每次執行都有「無 DNA」與「無萃取物」對照，而驗證用的構建體是 **UTC 7.0（BBa_K3758301），來自 Marburg 自家 2021 年隊伍**——一個在同一個分會跨五年被重複使用的零件。' },
                { en: '**The promoter was chosen by experiment, not by preference.** Three synthetic 5′ UTRs were each built twice — once behind T7, once behind **rrn16**, the native chloroplast promoter, chosen as a candidate *because* it is the promoter they use in *C. reinhardtii*, i.e. for translatability to the in vivo work.', zh: '**啟動子是靠實驗選的，不是靠偏好。**三個合成 5′ UTR 各做了兩版——一版接在 T7 後面、一版接在 **rrn16** 後面，後者是原生的葉綠體啟動子，之所以成為候選，*正是因為*那是他們在 *C. reinhardtii* 中使用的啟動子，也就是為了讓結果能銜接到活體工作。' },
                { en: 'Result: the T7 constructs sat clearly above the no-extract control with construct-to-construct variability, which is what they wanted to see; **none of the rrn16 constructs produced a signal above the no-extract control** — in fact the control read higher. So T7 it was, with the loss of in vivo comparability accepted and stated.', zh: '結果：T7 構建體明確高於「無萃取物」對照，而且各構建體之間有差異，那正是他們想看到的；**rrn16 構建體沒有任何一個高於「無萃取物」對照**——實際上對照還更高。所以就用 T7，而「失去與活體的可比性」這個代價被接受並寫出來。' }
              ] }
          ]) +
          h.h3({ en: 'Blocking worked, and then was made to prove specificity twice', zh: 'Blocking 成功了，接著被要求證明專一性兩次' }) +
          h.p({
            en: 'PPR 1 binds the NanoLuc start codon region of a modified UTC 7.0. A 3×4 titration — 0.1, 1 and 10 nM DNA against 0.1, 1, 10 and 15 µM PPR — gave dose-dependent luminescence reduction, **with the DNA dependence explained mechanistically**: more template means more mRNA at fixed PPR, so the relative effect is smaller. 1 µM was chosen as the working concentration "as it was the best balance between seeing an effect and economizing protein".',
            zh: 'PPR 1 結合在改造過的 UTC 7.0 的 NanoLuc 起始密碼子區域。一個 3×4 的滴定——DNA 為 0.1、1、10 nM，PPR 為 0.1、1、10、15 µM——給出劑量依賴的冷光下降，**而 DNA 依賴性被用機制解釋了**：在 PPR 固定的情況下，模板越多就有越多 mRNA，所以相對效果會變小。1 µM 被選為工作濃度，「因為那是『看得到效果』與『省蛋白』之間最好的平衡」。'
          }) +
          h.take({ en: 'They name the problem with their own result, then answer it twice', zh: '他們指出自己結果的問題，然後回答它兩次' }, {
            en: 'The specificity problem is stated out loud — the effect could have come from unspecific interference with the transcription or translation machinery — and answered with **two separate controls.** (1) The same construct with **Firefly luciferase** in place of NanoLuc; and the weakness of that control is published too, because every coding sequence starts with ATG, leaving a **5-nucleotide AAUGG motif still bindable**, which "may slightly dampen the contrast". (2) The NanoLuc construct against a **non-cognate PPR 313a**, which gave **~100-fold reduction with PPR 1 and almost none with PPR 313a.** Claimed as, to their knowledge, **the first demonstration that a synthetic PPR can shut down translation in a chloroplast extract.**',
            zh: '專一性的問題被明確講出來——那個效應也可能來自對轉錄或轉譯機器的非專一性干擾——然後用**兩個分開的對照**來回答。（1）把 NanoLuc 換成 **螢火蟲螢光素酶** 的同一個構建體；而這個對照的弱點也被公開了，因為每個編碼序列都以 ATG 開頭，**仍留下一個 5 個核苷酸的 AAUGG motif 可被結合**，這「可能稍微削弱對比度」。（2）同樣的 NanoLuc 構建體對上一個**非對應的 PPR 313a**，結果 **PPR 1 造成約 100 倍下降，而 PPR 313a 幾乎沒有影響。**他們主張，就其所知，這是**首次證明合成 PPR 能在葉綠體萃取物中關閉轉譯。**'
          })
      });

      /* ---------------- in vivo ---------------- */
      out += h.sec({
        id: 'm-vivo',
        kick: { en: 'In a living cell', zh: '在活細胞中' },
        h2: { en: 'Three hurdles the extract never tested', zh: '三道萃取物從來沒測到的關卡' },
        body:
          h.ul([
            { en: '**Strain choice settled by running both.** Chloroplast transformation is routine in CC-125; UVM4 is selected for efficient nuclear expression with reduced transgene silencing, but its tolerance of biolistic bombardment was unknown — so **all 30 5′ UTR constructs were bombarded into both strains.** UVM4 produced enough transformants, so they continued with it alone. Antibiotic was raised stepwise to drive toward homoplasmy, **and some constructs did not survive that selection, leaving 26.**', zh: '**菌株的選擇是靠「兩株都做」來定案的。**葉綠體轉形在 CC-125 中是常規；UVM4 則是為高效核表達、低轉基因沉默而選出的，但它能不能耐受基因槍轟擊並不清楚——所以**30 個 5′ UTR 構建體全部打進兩株菌。**UVM4 產生了足夠的轉形株，所以他們就只用它繼續。抗生素濃度逐步提高以推向同質化，**而有些構建體沒有通過那道選擇，剩下 26 個。**' },
            { en: '**A PPR-independent screening readout, designed in.** NanoLuc sits downstream of the synthetic 5′ UTR; **Firefly luciferase sits upstream in the opposite orientation**, in the same cassette as aadA and linked by an intercistronic expression element, so FLuc is expressed independently of any PPR. Since no-PPR strains should give little NLuc, **FLuc is the only way to recognise a transformant at all** — and the two luciferases use different substrates, so both can be read from one sample. Screening on FLuc/OD₇₅₀ gave **10 strains clearly above the untransformed control**; utr107 and utr110 colonies gave none.', zh: '**一個刻意設計進去的、與 PPR 無關的篩選讀值。**NanoLuc 位於合成 5′ UTR 下游；**螢火蟲螢光素酶則以相反方向位於上游**，和 aadA 在同一個卡匣中並以基因間表達元件連接，所以 FLuc 的表達與任何 PPR 無關。既然沒有 PPR 的菌株 NLuc 應該很低，**FLuc 就是唯一能辨認出轉形株的方法**——而且兩種螢光素酶使用不同底物，所以同一個樣品可以同時讀兩者。以 FLuc/OD₇₅₀ 篩選得到 **10 株明確高於未轉形對照**；而 utr107 與 utr110 的菌落一株都沒有。' },
            { en: '**Expression first, because it is not a given.** Eleven PPRs were cloned for constitutive expression (P-AR promoter, C-terminal mNeonGreen) into strains already carrying the matching plastid UTR, and positives were found by mNG/OD₇₅₀ **with untransformed UVM4 in every panel as the chlorophyll-autofluorescence control.** The conclusion is stated at exactly its strength: synthetic, codon-optimised, intron-containing PPRs **are expressed** in Chlamydomonas — "not a given in an organism known for silencing transgenes".', zh: '**先驗證表達，因為那不是理所當然的。**十一個 PPR 被選殖成組成型表達（P-AR 啟動子、C 端 mNeonGreen），放進已帶有對應質體 UTR 的菌株中，並以 mNG/OD₇₅₀ 找出陽性株，**而每一個面板中都放入未轉形的 UVM4 作為葉綠素自體螢光對照。**結論的強度剛剛好：合成、經密碼子最佳化、含內含子的 PPR **確實會在 Chlamydomonas 中表達**——「在一個以沉默轉基因著稱的生物中，這並非理所當然」。' },
            { en: '**Then the question expression cannot answer.** A nuclear-encoded PPR must be imported across the double membrane of the chloroplast envelope, and neither the targeting sequence\'s behaviour with a synthetic protein nor tolerance of the C-terminal tag could be assumed. Confocal microscopy on one representative strain showed PPRs **in the chloroplast, and more often than not in the pyrenoid** — the CO₂-concentrating subcompartment — an unplanned observation reported as one.', zh: '**接著是表達無法回答的那個問題。**一個由核基因編碼的 PPR 必須被輸入、穿過葉綠體外膜的雙層膜，而「導向序列對一個合成蛋白會怎麼表現」與「C 端標籤是否被容忍」都不能假設。對一株代表性菌株做共軛焦顯微，顯示 PPR **位於葉綠體中，而且往往出現在 pyrenoid 裡**——那是集中二氧化碳的次隔室——這是一個非計畫中的觀察，而他們就把它當成非計畫中的觀察來報告。' }
          ]) +
          h.fig({
            kind: 'bars',
            tag: { en: 'IN VIVO', zh: '活體' },
            title: { en: 'The decisive comparison: three cognate pairs, two of them worked', zh: '決定性的比較：三對對應組合，其中兩對成功' },
            sub: { en: 'NLuc output of a strain carrying the cognate nuclear PPR, as a multiple of its own parent strain carrying the plastid reporter alone.', zh: '帶有對應核內 PPR 的菌株的 NLuc 輸出，以「只帶質體報告系統的親代菌株」為一倍計。' },
            data: [
              { label: { en: 'utr102 + PPR 100', zh: 'utr102＋PPR 100' }, v: 4, note: { en: 'up to ~4× the parent, and the effect was seen in all three independently picked colonies', zh: '達親代的約 4 倍，而且三個獨立挑出的菌落都看到這個效應' } },
              { label: { en: 'utr113 + PPR 113', zh: 'utr113＋PPR 113' }, v: 4, note: { en: 'a comparable increase — but from the single colony recovered', zh: '增幅相當——但只有一個挑出來的菌落' } },
              { label: { en: 'utr106 + PPR 106', zh: 'utr106＋PPR 106' }, v: 1, note: { en: 'did not exceed its parent strain', zh: '沒有超過它的親代菌株' } }
            ],
            opts: { unit: { en: '× parent', zh: '×親代' }, dec: 0, xlabel: { en: 'NLuc output relative to the parent strain', zh: '相對於親代菌株的 NLuc 輸出' } },
            caption: { en: 'Read from the team\'s Results page. They report it as two of three cognate pairs, not as a platform that works.', zh: '讀自該隊 Results 頁。他們把它報告為「三對中有兩對」，而不是「一個可用的平台」。' }
          }) +
          h.p({
            en: 'The argument they make from the first bar is the careful one: the effect **was reproduced across three independently picked colonies, which argues against an artefact of a single integration event.** For the second, one colony was recovered and they say so. For the third, no increase. The summary sentence is therefore "a PPR-dependent increase in reporter output for two of three cognate pairs, not for all of them."',
            zh: '他們從第一根柱子得出的論證是謹慎的：那個效應**在三個獨立挑出的菌落中都被重現，這可以反駁「單一整合事件造成的假象」這個解釋。**第二對只挑到一個菌落，而他們把這點說出來。第三對沒有增加。所以總結句是：「三對對應組合中有兩對出現了依賴 PPR 的報告訊號提升，而不是全部三對。」'
          }) +
          h.h3({ en: 'The repressible system failed, and the failure is diagnosed', zh: '可抑制系統失敗了，而這個失敗被診斷出來' }) +
          h.p({
            en: '**METE** (a B12-repressed promoter) and the **THI4** thiamine riboswitch were **stacked in one construct on purpose** — after a discussion with Alison Smith — hoping for tighter control than either alone. The logic is spelled out: the system is ON by default, so all screening had to be done uninduced. Only a handful of transformants appeared; **many were unusable because of their transplastomic background — the 5′ UTR was not degraded even when unprotected, so the PPR-dependent difference could not exist** — and others did not grow. Conclusion: those regulatory elements together may not provide enough expression strength.',
            zh: '**METE**（一個受 B12 抑制的啟動子）與 **THI4** 硫胺素核開關被**刻意疊在同一個構建體裡**——這是在與 Alison Smith 討論之後的決定——希望得到比單用任一個更嚴密的調控。邏輯被講清楚了：這個系統預設是「開」的，所以所有篩選都必須在未誘導狀態下進行。只出現了少數幾個轉形株；**其中許多因為其質體背景而不可用——即使沒有被保護，那個 5′ UTR 也沒有被降解，所以「依賴 PPR 的差異」根本不可能存在**——還有一些根本長不起來。結論是：這兩個調控元件合起來可能提供不了足夠的表達強度。'
          }) +
          h.take({ en: 'And the replacement is being characterised alone first', zh: '而替代系統正在被單獨先特性化' }, {
            en: 'Three alternatives were chosen from the literature: the salt-inducible *C. reinhardtii* **CrGPDH3**, plus **estradiol-** and **IPTG-inducible** systems recently published for the red alga *Cyanidioschyzon merolae*. Each was placed **directly upstream of NanoLuc, with no PPR involved**, and the reasoning is published: combining them with a PPR **"before their dynamic range and leakiness are known would only confound both readouts."**',
            zh: '他們從文獻中挑了三個替代方案：鹽誘導的 *C. reinhardtii* **CrGPDH3**，以及最近為紅藻 *Cyanidioschyzon merolae* 發表的 **雌二醇誘導**與 **IPTG 誘導**系統。每一個都**直接放在 NanoLuc 上游，完全不涉及任何 PPR**，而理由被公開寫出：在**「知道它們的動態範圍與漏表達程度之前就把它們和 PPR 組合起來，只會讓兩個讀值互相干擾」。**'
          }) +
          h.note({
            en: '**And the Chlamy-GRASP proof of concept is designed as a control.** A deliberately **nonsense PPR** (BBa_263SXY7Y), matched to none of their UTRs, so the only question it answers is whether a toolbox-designed construct is expressed at all — **and once that is confirmed, the same strain becomes the non-binding negative control their in vivo measurements currently lack.** In selection at the wiki freeze.',
            zh: '**而 Chlamy-GRASP 的概念驗證是被設計成一個對照的。**一個刻意做成**無意義的 PPR**（BBa_263SXY7Y），不對應他們任何一個 UTR，所以它唯一回答的問題是「用這個工具箱設計出來的構建體到底會不會表達」——**而一旦確認會，同一株菌就成為他們活體量測目前缺少的那個非結合陰性對照。**在 wiki 凍結時仍在選擇培養中。'
          }) +
          h.h3({ en: 'The higher plant, where they reproduced somebody else\'s system', zh: '在高等植物上，他們重現了別人的系統' }) +
          h.p({
            en: 'Transient agroinfiltration was chosen over stable transformation with the reason given: regenerating chloroplast-transformed tobacco takes far longer than an iGEM season, while transient expression tests parts in a higher plant within days. Infiltrated areas were **outlined with marker pen so leaf discs are sampled from the right position at harvest** — a small practice that makes the measurement reproducible. They then **reproduced the published rapamycin-inducible system** (Gal4 DNA-binding domain + 6× Gal4 operator + QFAD activation domain, plasmids and advice from Dominik Schirmer): **~10-fold GFP increase on induction in both plants**, with the negative control lacking the Gal4 DBD at the level of infiltration medium alone. One induced replicate fell well below the other two, **and they say so.**',
            zh: '他們選擇瞬時農桿菌浸潤而不是穩定轉形，理由寫明：葉綠體轉形後的菸草再生所需時間遠超過一個 iGEM 賽季，而瞬時表達能在幾天內於高等植物中測試零件。被浸潤的區域**用麥克筆圈起來，讓收樣時的葉圓片取自正確位置**——一個讓量測可重現的小習慣。接著他們**重現了已發表的雷帕黴素誘導系統**（Gal4 DNA 結合域＋6× Gal4 operator＋QFAD 活化域，質體與建議來自 Dominik Schirmer）：**兩株植物誘導後 GFP 都增加約 10 倍**，而缺少 Gal4 DNA 結合域的陰性對照只停在「浸潤介質本身」的水準。其中一個誘導的重複明顯低於另外兩個，**而他們把這點說出來。**'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'm-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'PPR-opt, and a baseline measured on the same scale', zh: 'PPR-opt，以及一個在同一尺度上量出來的基準' },
        lede: {
          en: 'The GRASP toolbox assembles synthetic PPRs modularly, but it is codon-optimised for E. coli. Porting it means codon-optimising every module, which moves the Golden Gate fusion sites, which changes assembly fidelity and module boundaries — "a set of interdependent decisions we worked through by hand".',
          zh: 'GRASP 工具箱能以模組方式組裝合成 PPR，但它是為大腸桿菌做密碼子最佳化的。要移植它，就得把每個模組都重新做密碼子最佳化，而那會移動 Golden Gate 的融合位點，進而改變組裝保真度與模組邊界——「一組彼此牽連的決定，而我們是手工把它們推過去的」。'
        },
        body:
          h.p({
            en: '**PPR-opt automates that for any organism**, in two modes: *Designer* (one PPR for one RNA sequence) and *Inventory* (a whole GRASP-style toolbox for an organism, able to clone all possible PPRs for it). Delivered as form-driven Colab notebooks that run entirely remotely, so there is nothing to install. And the disclaimer is on the page: **"All outputs are software predictions and have not yet been validated experimentally. As of now, one PPR from the Chlamy-GRASP toolbox has been successfully transformed into the nucleus of *Chlamydomonas reinhardtii*."**',
            zh: '**PPR-opt 把那件事對任何生物都自動化了**，提供兩種模式：*Designer*（為一條 RNA 序列設計一個 PPR）與 *Inventory*（為某個生物產生一整套 GRASP 風格的工具箱，可以為它選殖所有可能的 PPR）。以表單驅動的 Colab 筆記本形式交付，完全在遠端執行，所以不需要安裝任何東西。而免責聲明就寫在頁面上：**「所有輸出都是軟體預測，尚未經實驗驗證。目前為止，Chlamy-GRASP 工具箱中有一個 PPR 已成功轉形進 *Chlamydomonas reinhardtii* 的細胞核。」**'
          }) +
          h.h3({ en: 'How the Chlamy toolbox was built by hand, which is what PPR-opt encodes', zh: 'Chlamy 工具箱是怎麼手工做出來的，而 PPR-opt 編碼的就是這套流程' }) +
          h.ul([
            { en: 'Fusion sites placed **inside the ARELF motif**, following Dennis et al., **because it carries the repeat\'s most variable codons and therefore offers the largest set of possible overhangs to choose from.**', zh: '融合位點依 Dennis 等人的做法放在 **ARELF motif 內部**，**因為它帶有整個重複單元中變異度最高的密碼子，因此能提供最大的可選黏端集合。**' },
            { en: '*C. reinhardtii* codon usage taken from the Kazusa table and published **as a full 64-row comparison against *E. coli*, with the percentage-point difference per codon.** The extremes are striking: AAA/AAG differs by **65.6 points**, GAA/GAG by **59.4**, UAC/UAU by **54.7**.', zh: '*C. reinhardtii* 的密碼子使用取自 Kazusa 表，並**以一張完整 64 列、對照大腸桿菌、逐一列出百分點差異的表格公開。**極端值很驚人：AAA/AAG 差 **65.6 個百分點**、GAA/GAG 差 **59.4**、UAC/UAU 差 **54.7**。' },
            { en: 'From the most abundantly expressed *C. reinhardtii* proteins they **set a threshold and excluded every codon below 50 % relative abundance**, translated ARELF into what remained, and searched that pool by trial and error for overhang sets predicted to ligate cleanly, **targeting a set fidelity above 75 %.** Four pairs survived; they define the B, C and D module overhangs.', zh: '他們從 *C. reinhardtii* 表達量最高的那些蛋白出發，**設了一個門檻、排除所有相對豐度低於 50% 的密碼子**，把 ARELF 轉譯成剩下的那些密碼子，再在那個池子裡用試錯法搜尋「預測能乾淨接合」的黏端組合，**目標是整組保真度超過 75%。**四對通過了；它們定義了 B、C、D 三個模組的黏端。' },
            { en: 'Module sequences were then **trimmed or extended so each overhang sits where it is actually generated**; the A module\'s 5′ and E module\'s 3′ overhangs **were not theirs to choose**, being fixed by the backbone\'s BpiI site; the full coding sequence was codon-optimised and **every overhang re-checked and corrected afterwards** so it still matched the chosen set; and a BsaI site was added for cloning from synthesis into level −1, with the 5′ and 3′ constructs symmetric except for reverse-complementation.', zh: '接著模組序列被**修短或延長，讓每個黏端落在它實際被產生的位置**；A 模組的 5′ 黏端與 E 模組的 3′ 黏端**不是他們能選的**，因為那被骨架上的 BpiI 切位固定住了；整條編碼序列做密碼子最佳化，而**之後每個黏端都被重新檢查並修正**，確保它仍然等於選定的那一組；最後加上一個 BsaI 切位，以便從合成產物選殖進 level −1，而 5′ 與 3′ 構建體除了反向互補之外是對稱的。' },
            { en: '**Introns added where the literature says they help:** the LHCBM1i2 intron, best-performing in Baier et al., placed in the **B and D modules**, and **shipped with and without it** so designs stay flexible.', zh: '**在文獻說有幫助的地方加入內含子：**在 Baier 等人研究中表現最好的 LHCBM1i2 內含子，被放在 **B 與 D 模組**，並**提供含與不含兩種版本**，讓設計保有彈性。' }
          ]) +
          h.take({ en: 'They ran the original toolbox\'s overhangs through the same calculator, to get a baseline on the same scale', zh: '他們把原始工具箱的黏端也丟進同一個計算器，以取得一個在同一尺度上的基準' }, {
            en: 'Fidelity was predicted with the **NEB ligase fidelity calculator**. And because *"the calculator models the reaction rather than measuring it"*, its output **cannot be compared with the experimentally measured fidelity reported for the original GRASP toolbox.** So they **ran the original GRASP overhangs through the same calculator** to get a baseline on the same scale. Result: original GRASP level 0 **78 %**, Chlamy-GRASP level 0 **82 %** — four percentage points, about a 5 % relative improvement; level 1 **unchanged at 99 %** for both, **which is what keeps the new modules compatible with the original toolbox.**',
            zh: '保真度是用 **NEB 連接酶保真度計算器**預測的。而因為*「這個計算器是在建模那個反應，不是在量測它」*，它的輸出**不能和原始 GRASP 工具箱所報告的「實驗量測保真度」相比。**所以他們**把原始 GRASP 的黏端也丟進同一個計算器**，取得一個在同一尺度上的基準。結果：原始 GRASP level 0 為 **78%**、Chlamy-GRASP level 0 為 **82%**——差四個百分點，相對提升約 5%；而 level 1 **兩者都維持 99% 不變**，**這正是讓新模組仍然與原始工具箱相容的原因。**'
          })
      });

      /* ---------------- failures ---------------- */
      out += h.sec({
        id: 'm-fail',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'Two failures that turn out to be one problem', zh: '兩個失敗，結果是同一個問題' },
        lede: {
          en: 'The Protecting approach failed in the extract, and the same wall appeared from the other side in a living cell. The wiki reads the two together.',
          zh: 'Protecting 這條路線在萃取物中失敗，而同一道牆在活細胞裡從另一邊出現。這個 wiki 把兩者合起來讀。'
        },
        body:
          h.h3({ en: 'Protecting: the failure was localised to the buffer', zh: 'Protecting：失敗被定位到緩衝液上' }) +
          h.p({
            en: 'XRN-1 was chosen with the reasoning spelled out — it is a processive **5′→3′** exoribonuclease, i.e. it attacks from exactly the end the PPR occupies, where *"a 3′→5′ nuclease would degrade from the far end and would not test our hypothesis at all"* — and it requires a 5′ monophosphate, so **RppH was held constant at 0.15 U in every reaction** to convert the triphosphate end, with only XRN-1 titrated.',
            zh: 'XRN-1 的選擇有完整理由——它是一個連續作用的 **5′→3′** 核糖核酸外切酶，也就是說它從 PPR 所佔據的那一端開始攻擊，而*「一個 3′→5′ 的核酸酶會從另一端開始分解，根本不會檢驗到我們的假設」*——而且它需要一個 5′ 單磷酸末端，所以**每個反應中 RppH 都固定在 0.15 U**，用來把三磷酸末端轉換過來，只有 XRN-1 被滴定。'
          }) +
          h.warn({
            en: 'XRN-1 was diluted in **chloroplast lysis buffer rather than the supplier\'s NEBuffer 3, to protect the CCFS** — and that choice is what undid the assay. Seven levels from 0.005 to 0.2 U, **each against a volume-matched buffer-only mock**: expression fell **97-fold** from 0 to 0.2 U — and **the enzyme-free mock fell 98-fold.** The signal loss was the buffer, not the nuclease. **A titration that would have looked like a working assay without the mock control.**',
            zh: 'XRN-1 被稀釋在**葉綠體裂解緩衝液中，而不是供應商的 NEBuffer 3，目的是保護 CCFS**——而正是這個選擇毀了這個試驗。七個濃度等級從 0.005 到 0.2 U，**每一級都對照一個體積相同、只有緩衝液的空白組**：從 0 到 0.2 U，表達下降了 **97 倍**——而**不含酵素的空白組下降了 98 倍。**訊號的損失來自緩衝液，不是核酸酶。**如果沒有那個空白對照，這個滴定看起來就會像一個可用的試驗。**'
          }) +
          h.p({
            en: 'The working level was then chosen on explicit signal-budget grounds anyway: **0.1 U leaves the signal 195-fold above the no-DNA background; 0.2 U leaves 9-fold with high replicate scatter; below 0.05 U the wells are indistinguishable from no enzyme at all.** Eleven UTR–PPR pairs were screened, and the verdict is blunt: **"The main takeaway from this experiment is that the assay is not yet functional."** Individual pairs are described honestly, including *"even more bizarre results — the XRN-1 sample was the highest of them all"*, NanoLuc contamination in two no-CCFS controls, and high standard deviations named per pair.',
            zh: '接著工作濃度仍然是依明確的訊號預算選定的：**0.1 U 時訊號仍高於「無 DNA」背景 195 倍；0.2 U 時只剩 9 倍，而且重複間離散很大；低於 0.05 U 時，各孔與完全不加酵素無法區分。**他們篩了十一對 UTR–PPR 組合，而結論說得很直接：**「這個實驗最主要的收穫是：這個試驗目前還不能用。」**各組合被誠實描述，包括*「更離奇的結果——XRN-1 那一組反而是全部中最高的」*、兩個「無 CCFS」對照出現 NanoLuc 污染，以及逐組指出的高標準差。'
          }) +
          h.h3({ en: 'Their response to a broken assay is to remove a variable', zh: '他們面對一個壞掉的試驗的做法是：拿掉一個變數' }) +
          h.ul([
            { en: '**Eliminate translation and measure mRNA directly.** They obtained a **Pepper aptamer** — a fluorogenic RNA tag that binds an otherwise dark dye, so fluorescence reports how much RNA is present in real time — from Michael Spädt of the Erb lab, after asking around campus for people with in vitro mRNA quantification experience. Validated in CCFS in **one** experiment, cloned into their Golden Gate standard — **and not tested in time, stated as such.**', zh: '**拿掉轉譯這一步，直接量 mRNA。**他們在校內四處詢問有體外 mRNA 定量經驗的人之後，從 Erb 實驗室的 Michael Spädt 取得了一個 **Pepper 適體**——一種螢光化 RNA 標籤，會結合一個本身不發光的染劑，所以螢光可以即時反映 RNA 的量。在 CCFS 中以**一次**實驗驗證、選殖進他們的 Golden Gate 標準——**然後來不及測試，而他們就這樣寫出來。**' },
            { en: '**Then a third redesign, with the predicted problems written down first.** Drop the extract entirely; initiate T7 transcription with **GMP so transcripts carry a monophosphate without RppH**; run transcription to completion **before** adding XRN-1 so the two do not overlap; dilute XRN-1 in NEBuffer 3 at 37 °C, *"which is what the unit definition refers to"*; and use a **9×U PPR as the non-binding control, itself pre-validated by fluorescence polarisation.**', zh: '**接著是第三次重新設計，而且預期會出問題的地方被事先寫下來。**完全不用萃取物；用 **GMP** 起始 T7 轉錄，**讓轉錄本自帶單磷酸末端、不需要 RppH**；在加入 XRN-1 **之前**先把轉錄跑完，讓兩者不重疊；把 XRN-1 稀釋在 NEBuffer 3 中、於 37 °C 操作，*「那才是單位定義所指的條件」*；並用一個 **9×U 的 PPR 當非結合對照，而它本身已先用螢光偏極驗證過。**' },
            { en: 'And the two predicted problems, stated **before** the experiment: **GMP initiation is incomplete**, so some transcripts keep their triphosphate end and stay invisible to XRN-1 — with the control that measures that fraction specified; and **Pepper is itself a folded RNA that may stall a 5′→3′ exonuclease**, so "the reaction with XRN-1 and no PPR is the one we look at first."', zh: '以及在實驗**之前**就寫出來的兩個預期問題：**GMP 起始並不完全**，所以有一部分轉錄本仍保有三磷酸末端、對 XRN-1 來說是看不見的——而用來量測那個比例的對照也被指定了；以及 **Pepper 本身就是一個折疊的 RNA，可能會讓 5′→3′ 外切酶卡住**，所以「有 XRN-1 但沒有 PPR 的那個反應，是我們會先看的那一個」。' }
          ]) +
          h.h3({ en: 'Resolving: the failure has a number', zh: 'Resolving：這個失敗有一個數字' }) +
          h.p({
            en: 'Seven hairpin 5′ UTRs were characterised alone first. Basal expression spanned **four orders of magnitude** and broadly tracked the predicted stability of the structure — barely structured UTR362 was by far the strongest, the most stable variant UTR334 was near-silent — **but not strictly**: UTR322 and UTR343 expressed well below UTR312 and UTR313 despite comparable or weaker predicted structures, so **"folding energy alone does not set expression strength."** Then each purified PPR was titrated against its cognate construct over a 50-fold range: **expression stayed flat and was indistinguishable from the matched buffer control.**',
            zh: '七個帶髮夾結構的 5′ UTR 先被單獨特性化。基礎表達橫跨**四個數量級**，而且大致上跟著結構的預測穩定度走——幾乎沒有結構的 UTR362 是最強的，最穩定的 UTR334 幾乎完全沉默——**但並不嚴格**：UTR322 與 UTR343 的表達遠低於 UTR312 與 UTR313，儘管它們的預測結構相當或更弱，所以**「光靠折疊能量並不能決定表達強度。」**接著每個純化後的 PPR 都對其對應構建體在 50 倍濃度範圍內滴定：**表達完全持平，與條件相符的緩衝液對照無法區分。**'
          }) +
          h.note({
            en: 'They also caught a confounder and **fixed the comparison rather than the data**: the **SEC buffer itself dampens expression several-fold relative to water**, so UTR characterisation is compared against the water control and the titrations against the buffer control. Two different baselines for two different questions.',
            zh: '他們還抓到一個干擾因子，並**修正了比較方式、而不是修改數據**：**SEC 緩衝液本身相對於水會把表達壓低數倍**，所以 UTR 的特性化是對水對照比較，而滴定是對緩衝液對照比較。兩個不同的問題，用兩個不同的基準。'
          }) +
          h.fig({
            kind: 'bars',
            tag: { en: 'ENERGY BUDGET', zh: '能量帳' },
            title: { en: 'The energy a PPR has, against the energy a hairpin costs', zh: 'PPR 手上有的能量，對上打開髮夾所需的能量' },
            sub: { en: 'Magnitudes shown. The only energy available to open a hairpin is the binding energy the PPR releases, which follows from the dissociation constant.', zh: '圖上顯示的是絕對值。能用來打開髮夾的唯一能量，就是 PPR 結合時釋放的能量，而那由解離常數決定。' },
            data: [
              { label: { en: 'Binding energy a PPR releases, at their measured affinities', zh: '在他們量到的親和力下，PPR 結合所釋放的能量' }, v: 8, note: { en: 'roughly −8 kcal/mol', zh: '約為 −8 kcal/mol' } },
              { label: { en: 'Weakest hairpin they designed', zh: '他們設計的最弱髮夾' }, v: 21, note: { en: 'predicted at −21 kcal/mol', zh: '預測為 −21 kcal/mol' } },
              { label: { en: 'Strongest hairpin they designed', zh: '他們設計的最強髮夾' }, v: 38, note: { en: 'predicted at −38 kcal/mol', zh: '預測為 −38 kcal/mol' } }
            ],
            opts: { unit: { en: 'kcal/mol', zh: 'kcal/mol' }, dec: 0, xlabel: { en: 'magnitude of free energy, kcal/mol', zh: '自由能的絕對值，kcal/mol' } },
            caption: { en: 'Plotted by us from the team\'s Discussion. Even the native PPR10 from Zea mays does not close this gap.', zh: '由我們依該隊 Discussion 繪製。即使是玉米的原生 PPR10 也填不上這個差距。' }
          }) +
          h.take({ en: 'And the design rule that follows', zh: '以及由此得出的設計規則' }, {
            en: '**"Target the local opening energy at the ribosome binding site, not the global fold."** That is a rule a future team can act on, derived from a failure rather than from a success — and it is the kind of output a Foundational Advance project should produce.',
            zh: '**「要瞄準核糖體結合位處的局部開啟能量，而不是整體折疊能量。」**那是一條未來團隊可以照著做的規則，而它是從一個失敗、而不是從一個成功推導出來的——而這正是一個基礎推進類專案應該產出的東西。'
          }) +
          h.warn({
            en: '**Two unrelated systems failing for the same reason.** In *C. reinhardtii* they met the same wall from the other side: in several transplastomic backgrounds **the 5′ UTR persisted even without a PPR bound**, which is also why the METE/THI4 system gave no usable dynamic range. Their reading: *"Two very different systems failing for the same reason makes it a tractable problem rather than a mysterious one — what the approach needs is a degradation baseline, not tighter binding."*',
            zh: '**兩個互不相關的系統，因為同一個原因失敗。**在 *C. reinhardtii* 中，他們從另一邊撞上同一道牆：在好幾個質體轉形背景下，**即使沒有 PPR 結合，那個 5′ UTR 也一直存在**，而這也是 METE／THI4 系統沒有可用動態範圍的原因。他們的判讀是：*「兩個非常不同的系統因為同一個原因失敗，這讓它變成一個可處理的問題，而不是一個神祕的問題——這條路線需要的是一條降解基準線，不是更強的結合。」*'
          }) +
          h.p({
            en: 'And the honest constraint on everything above, stated in the Discussion: **chloroplast and nuclear transformation together take around eight weeks, which means one iteration per season**; strains were lost in transfer and some simply refused to grow. "The screenings are done and the strains are in hand — several of the measurements they were built for are still ahead of us."',
            zh: '而他們在 Discussion 中寫下了限制住上述一切的那個誠實條件：**葉綠體加核轉形合起來大約要八週，這意味著一季只能跑一輪**；有些菌株在轉移過程中遺失，有些根本長不起來。「篩選做完了、菌株也在手上——而它們被建出來要做的好幾項量測，還在我們前面。」'
          })
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'm-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from Marburg', zh: '我們會從 Marburg 抄什麼' },
        body:
          h.ul([
            { en: '**Build the screening readout that still works when the experiment fails.** FLuc upstream, in the opposite orientation, expressed independently of the PPR — without it, a no-PPR transformant is invisible and the whole strain collection is unscreenable.', zh: '**做一個「即使實驗失敗也還能用」的篩選讀值。**FLuc 放在上游、方向相反、表達與 PPR 無關——沒有它，一個沒有 PPR 的轉形株就是看不見的，整批菌株也就無法篩選。' },
            { en: '**Run both strains when you cannot predict which will work.** 30 constructs into two strains, then drop one with a reason.', zh: '**當你無法預測哪一株會成功時，就兩株都做。**30 個構建體打進兩株菌，然後有理由地砍掉一株。' },
            { en: '**Validate every new batch against the previous batch, not just against a standard.** Batch drift is otherwise invisible, and in a cell-free system it is the most likely explanation for anything surprising.', zh: '**每一批新的都要對照上一批驗證，不只對照標準品。**否則批次漂移是看不見的，而在無細胞系統裡，它是任何意外結果最可能的解釋。' },
            { en: '**Pre-register the hypothesis behind a design change.** The ND-ND → TN-TD motif argument was made before PPR 107 was measured, which is why a sub-2.5 nM KD means something rather than being a lucky draw.', zh: '**先把設計變更背後的假設寫下來。**ND-ND→TN-TD 的 motif 論證是在量 PPR 107 之前提出的，這就是為什麼一個低於 2.5 nM 的 KD 有意義，而不只是運氣好。' },
            { en: '**Report a result as a limit when it exceeds your assay\'s resolution.** "< 2.5 nM" and "> 800 nM" are honest; an extrapolated number would not be.', zh: '**當結果超出你試驗的解析度時，就以上限或下限形式報告。**「< 2.5 nM」與「> 800 nM」是誠實的；一個外插出來的數字不是。' },
            { en: '**Put the mock control in the titration.** A 97-fold drop with enzyme and 98-fold without is the entire finding, and without the mock it would have been a publishable-looking dose–response.', zh: '**在滴定裡放進空白對照。**加酵素下降 97 倍、不加下降 98 倍，這就是整個發現；而沒有空白對照的話，它會看起來像一條可以發表的劑量反應曲線。' },
            { en: '**Name the confounder and fix the comparison, not the data.** SEC buffer dampens expression, so titrations are compared to buffer and characterisations to water.', zh: '**指出干擾因子，然後修正比較方式、而不是修改數據。**SEC 緩衝液會壓低表達，所以滴定對緩衝液比較、特性化對水比較。' },
            { en: '**Convert a failure into a number and then into a design rule.** −8 against −21 to −38 kcal/mol becomes "target the local opening energy at the ribosome binding site, not the global fold."', zh: '**把失敗轉成數字，再轉成設計規則。**−8 對上 −21 到 −38 kcal/mol，變成「瞄準核糖體結合位處的局部開啟能量，而不是整體折疊能量」。' },
            { en: '**Characterise an inducible system before you put anything in front of it**, so dynamic range and leakiness are not confounded with the thing you are trying to measure.', zh: '**在把任何東西放到一個可誘導系統前面之前，先把那個系統特性化**，這樣動態範圍與漏表達就不會和你真正想量的東西混在一起。' },
            { en: '**Make your proof-of-concept construct double as the negative control you are missing.** The nonsense PPR validates the dry-lab tool and then becomes the non-binding control.', zh: '**讓你的概念驗證構建體同時當成你缺少的那個陰性對照。**那個無意義的 PPR 先驗證乾式工具，接著就成為非結合對照。' },
            { en: '**Benchmark a predictor against the same predictor, not against somebody\'s measurement.** Running the original GRASP overhangs through the NEB calculator is the cleanest comparison move we read in 2026.', zh: '**用同一個預測器去建立基準，而不是去比別人的量測值。**把原始 GRASP 黏端丟進 NEB 計算器，是我們在 2026 年讀到最乾淨的一個比較動作。' },
            { en: '**Write the two things you expect to go wrong before you run the assay.** Incomplete GMP initiation and a folded aptamer stalling the nuclease are both named in advance, with the control for each.', zh: '**在跑試驗之前，先寫出你預期會出錯的兩件事。**GMP 起始不完全，以及折疊的適體會讓核酸酶卡住——兩者都事先點名，而且各自配了對照。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, and the judgement that the two converging failures are the most useful thing on this wiki for a future team. Everything else is the team\'s own, read from [2026.igem.wiki/marburg](https://2026.igem.wiki/marburg/).',
            zh: '標示為我們的看法：上面十二點，以及「那兩個收斂到同一原因的失敗，是這個 wiki 上對未來團隊最有用的東西」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/marburg](https://2026.igem.wiki/marburg/)。'
          })
      });

      return out;
    }
  };
})(window);
