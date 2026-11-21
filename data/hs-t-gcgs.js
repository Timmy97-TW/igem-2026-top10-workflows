/* GCGS — Dual-response EcN. Top 10 High School and Best New Improved Part
   (High School), iGEM 2026. Everything on this page is read from
   https://2026.igem.wiki/gcgs/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Screen two iron promoters against each other', zh: '把兩個鐵感應啟動子拿來互相比較' },
        s: { en: 'P_fepA vs P_fhuA1, mCherry reporter, 20 h time course, three biological replicates, growth curve run as the control', zh: 'P_fepA 對 P_fhuA1，mCherry 報告子，20 小時時序，三個生物重複，並以生長曲線作為對照' }, tone: 'g' },
      { l: { en: 'Fuse four SsrA tags to RhlR', zh: '把四種 SsrA 標籤接到 RhlR 上' },
        s: { en: 'LAA, LVA, ASV, AAV on wild-type P_rhl; leakage fell and the C4-HSL induction fell with it', zh: 'LAA、LVA、ASV、AAV 搭配野生型 P_rhl；洩漏下降了，但 C4-HSL 的誘導也跟著一起消失' }, tone: 'r' },
      { l: { en: 'Swap the promoter and run the same five strains again', zh: '換掉啟動子，再把同樣的五株菌跑一次' },
        s: { en: 'P_rhl(LR) (BBa_K1529310) from Tokyo_Tech 2016; induction returns, ASV is the best trade-off', zh: '改用 Tokyo_Tech 2016 的 P_rhl(LR)（BBa_K1529310）；誘導回來了，ASV 是最好的折衷' } },
      { l: { en: 'Make the effector and measure it', zh: '把效應蛋白做出來並量它' },
        s: { en: 'PL5 alginate lyase in BL21(DE3), Ni-NTA, DNS assay: 37 °C optimum, still active at pH 7.0', zh: 'PL5 褐藻酸裂解酶在 BL21(DE3) 中表達、Ni-NTA 純化、DNS 試驗：最適 37 °C，在 pH 7.0 仍有活性' } },
      { l: { en: 'Assemble the gate in EcN, six conditions', zh: '在 EcN 中組裝整個閘，六個條件' },
        s: { en: '8 h growth and RFU/OD₆₀₀; only low-iron plus high C4-HSL rises above basal', zh: '8 小時的生長與 RFU/OD₆₀₀；只有低鐵加上高濃度 C4-HSL 的那一組爬上基礎值之上' } }
    ],
    dry: [
      { l: { en: 'A circuit-level simulation argued for the swap', zh: '一次線路層級的模擬支持了那次更換' },
        s: { en: 'It predicted that P_rhl at wild-type strength would stop the assembled AND gate working at all', zh: '它預測野生型強度的 P_rhl 會讓組裝後的 AND 閘根本無法運作' }, tone: 'a' },
      { l: { en: 'Fit the dose curve IHP asked for', zh: '擬合整合式人類實踐要求的那條劑量曲線' },
        s: { en: 'C4-HSL LOD 53.1 nM, R² = 0.894, plus a cross-reactivity panel that found weak C12-HSL activation', zh: 'C4-HSL 偵測極限 53.1 nM、R² = 0.894，另有一組交叉反應測試，發現 C12-HSL 會造成微弱活化' }, tone: 't' }
    ],
    links: [
      { w: 2, d: 0, l: { en: 'the simulation is their stated reason for upgrading the promoter', zh: '那次模擬是他們寫下的「要升級啟動子」的理由' }, up: true },
      { w: 4, d: 1, l: { en: 'one fixed dose was not enough, so the gate got a curve', zh: '單一固定劑量不夠，所以這個閘被補上了一條曲線' } }
    ]
  };

  PD.pages['hs-gcgs'] = {
    label: { en: 'GCGS', zh: 'GCGS' },
    title: { en: 'GCGS — Dual-response EcN', zh: 'GCGS — 雙響應 EcN' },
    render: function (h) {
      var t = team('gcgs');
      var out = h.teamhero(t, {
        h1: {
          en: 'Characterise each module alone, publish the part that lost — and when your own idea breaks the circuit, ==say so and go borrow a promoter from a 2016 team==.',
          zh: '每個模組各自特性化，把輸掉的那個元件也公開——而當你自己的想法把線路弄壞時，==就把它說出來，然後去向 2016 年的一支隊伍借一個啟動子==。'
        },
        lede: {
          en: 'A cystic fibrosis airway holds two signals at once that almost nothing else holds together: it is iron-starved, because the host locks iron away from invaders, and it is full of C4-HSL, because *P. aeruginosa* is sitting in it inside an alginate biofilm. GCGS wired both into one Fur–RhlR AND gate in *E. coli* Nissle 1917, so that an alginate lyase is made only where both are true. The gate is not what makes the wiki worth reading. What makes it worth reading is that all three modules were characterised separately before being joined, that each choice came out of a screen with a published loser, and that the screen which failed — four degradation tags that removed the induction along with the leakage — is written up at the same length as the one that worked. Registered in the Diagnostics Village, although what they built is a therapy rather than a diagnostic.',
          zh: '囊狀纖維化的呼吸道同時握有兩個訊號，而這兩個訊號幾乎不會在別處同時出現：它缺鐵，因為宿主把鐵從入侵者手上鎖起來；它又充滿 C4-HSL，因為 *P. aeruginosa* 就待在裡面、裹在褐藻酸生物膜中。GCGS 把這兩者接進 *E. coli* Nissle 1917 裡的同一個 Fur–RhlR AND 閘，讓褐藻酸裂解酶只在兩個條件同時成立的地方才被製造出來。但這個閘不是這個 wiki 值得讀的原因。值得讀的原因是：三個模組都先各自特性化再接起來；每一次選擇都出自一場有公開落選者的篩選；而那場失敗的篩選——四種降解標籤把洩漏和誘導一起拿掉了——被寫得跟成功那場一樣長。他們登記在診斷村，雖然他們做出來的是一種療法，而不是一個診斷工具。'
        },
        chips: [
          { t: { en: 'Fur–RhlR AND gate', zh: 'Fur–RhlR AND 閘' }, k: 'b' },
          { t: { en: 'EcN Nissle 1917 chassis', zh: 'EcN Nissle 1917 底盤' }, k: 'g' },
          { t: { en: 'Best New Improved Part (HS)', zh: '最佳新改良元件（高中組）' }, k: 'v' },
          { t: { en: 'Four DBTL cycles', zh: '四輪 DBTL 循環' }, k: 't' },
          { t: { en: 'Diagnostics Village, therapeutic project', zh: '診斷村，但做的是療法' }, k: 'a' }
        ],
        stats: [
          { v: '53.1 nM', l: { en: 'C4-HSL limit of detection of the assembled gate in EcN', zh: '組裝後的閘在 EcN 中對 C4-HSL 的偵測極限' } },
          { v: '0.894', l: { en: 'R² of the C4-HSL dose–response fit they published', zh: '他們公開的 C4-HSL 劑量反應擬合的 R²' } },
          { v: '200 µM', l: { en: 'Chelator (DP) concentration giving the largest P_fhuA1 output', zh: '讓 P_fhuA1 輸出最大的螯合劑（DP）濃度' } },
          { v: '4 → 1', l: { en: 'SsrA degradation tags screened, and the one that survived both cycles', zh: '篩選的 SsrA 降解標籤數，以及兩輪都活下來的那一個' } },
          { v: '6', l: { en: 'Conditions in the AND-logic time course; only one of them fired', zh: 'AND 邏輯時序實驗中的條件數；其中只有一個被點燃' } },
          { v: '37 °C / pH 8.0', l: { en: 'Alginate lyase optimum, with substantial activity kept at pH 7.0', zh: '褐藻酸裂解酶的最適條件，而在 pH 7.0 仍保有相當活性' } }
        ]
      });

      out += h.toc([
        { id: 'c-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'c-modules', t: { en: 'Module by module', zh: '一個模組一個模組' } },
        { id: 'c-tag', t: { en: 'The screen that failed', zh: '那場失敗的篩選' } },
        { id: 'c-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'c-gate', t: { en: 'The assembled gate', zh: '組裝後的閘' } },
        { id: 'c-split', t: { en: 'Where the wiki disagrees with itself', zh: 'wiki 自己對不起來的地方' } },
        { id: 'c-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'c-copy', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'c-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Two inputs, because one of them would fire in the wrong place', zh: '兩個輸入，因為只用一個會在錯的地方啟動' },
        lede: {
          en: 'A constitutive alginate lyase would be made everywhere the bacterium goes. The whole design question is what tells the cell it has arrived.',
          zh: '一個組成型表達的褐藻酸裂解酶，會在這株細菌去到的每一個地方都被製造出來。整個設計要回答的問題是：什麼東西告訴這個細胞「你到了」。'
        },
        body:
          h.p({
            en: 'Their reading of the CF airway gives them two separate signals, and they keep them separate on purpose. **The spatial signal is low iron:** chronic inflammation makes the host sequester free iron with transferrin and lactoferrin, so the bacterial **Fur** repressor lets go of its operator and iron-uptake promoters switch on. That says *where*. **The pathogen signal is C4-HSL**, the quorum-sensing autoinducer made by the *rhl* system of *P. aeruginosa*. That says *what is here*. Either one alone is a weak claim about location; both at once is the condition they want.',
            zh: '他們對囊狀纖維化呼吸道的解讀給了他們兩個各自獨立的訊號，而他們刻意讓這兩個訊號保持獨立。**空間訊號是「低鐵」：**長期發炎讓宿主用運鐵蛋白與乳鐵蛋白把游離鐵扣住，於是細菌的 **Fur** 抑制蛋白鬆開它的操縱子，攝鐵基因的啟動子被打開。這說的是*在哪裡*。**病原訊號是 C4-HSL**，也就是 *P. aeruginosa* 的 *rhl* 系統製造的群體感應自誘導物。這說的是*這裡有什麼*。單獨任一個都只是對位置的一個薄弱主張；兩個同時成立才是他們要的條件。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'input 1', zh: '輸入一' }, k: 'g' }],
              h: { en: 'Low iron, read through Fur', zh: '低鐵，透過 Fur 讀取' },
              p: { en: 'The Fur box sits upstream of the RhlR gene, so in a high-iron environment the Fur–Fe²⁺ complex blocks RNA polymerase and no receptor is made at all. The gate\'s first layer is therefore an absence, not a presence — nothing downstream can happen outside a low-iron site.', zh: 'Fur box 被放在 RhlR 基因的上游，所以在高鐵環境中，Fur–Fe²⁺ 複合體會擋住 RNA 聚合酶，受體根本不會被製造出來。因此這個閘的第一層是一個「不存在」，不是一個「存在」——在低鐵位置之外，下游什麼都不會發生。' } },
            { chips: [{ t: { en: 'input 2', zh: '輸入二' }, k: 'v' }],
              h: { en: 'RhlR rather than LasR, and they give the clinical reason', zh: '選 RhlR 而不是 LasR，而且他們給出了臨床理由' },
              p: { en: 'The textbook hierarchy puts LasR above RhlR. They cite the clinical literature instead: **15–30 % of *P. aeruginosa* isolates from CF lungs carry *lasR* loss-of-function mutations** while the Rhl system still makes and senses C4-HSL. A LasR sensor would miss exactly the chronic isolates the therapy is for.', zh: '教科書上的階層把 LasR 放在 RhlR 之上。他們引用的卻是臨床文獻：**來自囊狀纖維化肺部的 *P. aeruginosa* 分離株中，有 15–30% 帶有 *lasR* 功能喪失突變**，而 Rhl 系統仍然會製造並感知 C4-HSL。一個以 LasR 為基礎的感測器，會剛好漏掉這個療法真正要對付的那些慢性分離株。' } },
            { chips: [{ t: { en: 'output', zh: '輸出' }, k: 'b' }],
              h: { en: 'An enzyme that has to get out of the cell', zh: '一個必須離開細胞的酵素' },
              p: { en: 'The downstream operon is **alginate lyase on a strong RBS and Lysis E on a weak one**: the enzyme is made in quantity, the lysis protein accumulates slowly, and partial self-lysis is what releases the enzyme into the mucus. The release mechanism is part of the logic rather than an afterthought.', zh: '下游操縱子是**強 RBS 的褐藻酸裂解酶，加上弱 RBS 的 Lysis E**：酵素被大量製造，裂解蛋白則慢慢累積，而部分的自我裂解就是把酵素釋放到黏液中的方式。釋放機制是邏輯的一部分，不是事後補上的。' } }
          ]) +
          h.note({
            en: 'One registration note worth stating plainly: GCGS competed in the **Diagnostics Village**, and their circuit is a biosensor in the strict sense — but the thing it triggers is a therapy for *P. aeruginosa* biofilm. The sensing half is what the village judges saw; the effector half is what the project is for.',
            zh: '有一件登記上的事值得直說：GCGS 參加的是**診斷村**，而他們的線路嚴格來說確實是一個生物感測器——但它觸發的東西，是針對 *P. aeruginosa* 生物膜的療法。感測那一半是村內評審看到的；效應那一半才是這個專案的目的。'
          })
      });

      /* ---------------- modules ---------------- */
      out += h.sec({
        id: 'c-modules',
        kick: { en: 'Method', zh: '做法' },
        h2: { en: 'Three modules, characterised alone before any of them was joined', zh: '三個模組，在任何一個被接起來之前都先單獨特性化' },
        lede: {
          en: 'Four DBTL cycles, in this order: iron sensor, pathogen sensor, effector, then the assembly. Nothing moves to the next cycle without a number from the one before.',
          zh: '四輪 DBTL 循環，順序是：鐵感測器、病原感測器、效應模組，最後才是組裝。沒有拿到上一輪的數字，就不會進到下一輪。'
        },
        body:
          h.phases([
            { h: { en: 'Cycle 1 — two iron promoters, and the growth curve that makes the comparison legal', zh: '循環 1——兩個鐵感應啟動子，以及那條讓比較得以成立的生長曲線' },
              p: { en: 'Native **P_fepA** against the engineered chimeric **P_fhuA1**, whose operator has been replaced with consensus *E. coli* Fur box sequences. Both read out with mCherry on the same pTrc99k backbone, both tracked as RFU/OD₆₀₀ over 20 h, three biological replicates per condition.', zh: '原生的 **P_fepA** 對上人工嵌合的 **P_fhuA1**，後者的操縱子被換成了 *E. coli* 的共識 Fur box 序列。兩者都以 mCherry 作為讀值、放在同一個 pTrc99k 骨架上，都以 RFU/OD₆₀₀ 追蹤 20 小時，每個條件三個生物重複。' },
              items: [
                { en: '**P_fepA lost, and they print the loss:** even at the strongest chelation (200 µM 2,2′-bipyridine, DP) it gave only a very mild rise at the 20 h endpoint. Their conclusion is about cascading, not about the promoter in isolation — a weak signal "cannot deliver sufficient transcriptional signal to downstream cascaded genetic circuits."', zh: '**P_fepA 輸了，而他們把這個敗局印出來：**即使在最強的螯合條件下（200 µM 2,2′-聯吡啶，DP），它在 20 小時終點也只有非常輕微的上升。他們的結論講的是串接，而不是單獨看這個啟動子——訊號太弱，「無法為下游串接的基因線路提供足夠的轉錄訊號」。' },
                { en: '**P_fhuA1 won on two properties at once:** low basal expression under iron-rich conditions, and a dose-dependent rise as iron fell, sharpest after the 10 h point and highest at 200 µM DP.', zh: '**P_fhuA1 同時在兩個性質上取勝：**在高鐵條件下基礎表達低，而隨著鐵減少出現劑量依賴性的上升，在 10 小時之後最陡，並在 200 µM DP 達到最高。' },
                { en: '**The control that makes it a result:** OD₆₀₀ was comparable across blank, iron-rich and all three DP concentrations, so the fluorescence difference is promoter activity and not a cell-density artefact. They say this in the text, for both strains.', zh: '**讓它成為一個結果的那個對照：**在空白組、高鐵組與三個 DP 濃度之間，OD₆₀₀ 都相當，所以螢光差異是啟動子活性，不是細胞密度的假象。他們在文字裡把這點對兩株菌都寫了出來。' }
              ],
              done: { en: 'One promoter chosen on a measured dynamic range, and a published reason why the other one could not be cascaded.', zh: '一個依實測動態範圍選出的啟動子，以及一個公開說明「另一個為什麼不能串接」的理由。' } },
            { h: { en: 'Cycles 2a and 2b — the pathogen sensor, which took two tries', zh: '循環 2a 與 2b——病原感測器，試了兩次' },
              p: { en: 'They started from the existing registry part **BBa_K2315014** (characterised by Shanghai_tech_2017), measured it, and found measurable reporter output with no C4-HSL at all. Everything after that is an attempt to fix a signal-to-noise problem they inherited. The full story is the next section.', zh: '他們從既有的登錄元件 **BBa_K2315014**（由 Shanghai_tech_2017 特性化）出發，量了它，發現在完全沒有 C4-HSL 的情況下仍有可量測的報告子輸出。之後的一切，都是在修一個他們繼承下來的訊噪比問題。完整的故事在下一節。' },
              items: [
                { en: 'Cycle 2a: four SsrA degradation tags on wild-type P_rhl. Leakage down, induction gone.', zh: '循環 2a：四種 SsrA 降解標籤搭配野生型 P_rhl。洩漏降下來了，誘導卻不見了。' },
                { en: 'Cycle 2b: the same four tags on the enhanced **P_rhl(LR)**. Maximum induced output roughly **doubled**, and all four tags recovered a highly significant induction difference between blank and 1 mM C4-HSL.', zh: '循環 2b：同樣四種標籤搭配強化後的 **P_rhl(LR)**。最大誘導輸出大約**翻倍**，而四種標籤在空白組與 1 mM C4-HSL 之間都重新取得了高度顯著的誘導差異。' }
              ],
              done: { en: '**RhlR-SsrA-ASV + P_rhl(LR)**, submitted as BBa_26QSD9SO, and the award this page is named for.', zh: '**RhlR-SsrA-ASV ＋ P_rhl(LR)**，以 BBa_26QSD9SO 提交，也就是這一頁所指的那個獎項。' } },
            { h: { en: 'Cycle 3 — the effector, measured against the environment it has to work in', zh: '循環 3——效應蛋白，拿去對照它必須工作的那個環境來量' },
              p: { en: 'A **PL5-family alginate lyase (GenBank AAR23929.1)**, from *Pseudomonas* sp. QD03, cloned into pET28a with an N-terminal 6×His tag and expressed in BL21(DE3) at 0.1 mM IPTG, 25 °C, 12 h. Ni-NTA purified, then quantified by DNS colorimetry on sodium alginate.', zh: '一個 **PL5 家族的褐藻酸裂解酶（GenBank AAR23929.1）**，來自 *Pseudomonas* sp. QD03，接到帶 N 端 6×His 標籤的 pET28a 上，在 BL21(DE3) 中以 0.1 mM IPTG、25 °C、12 小時誘導表達。經 Ni-NTA 純化後，以 DNS 比色法在褐藻酸鈉上定量。' },
              items: [
                { en: 'The target band appeared at the theoretical **~42.2 kDa** and sat mostly in the soluble fraction, which is why the mild induction conditions are reported rather than skipped.', zh: '目標條帶出現在理論值 **約 42.2 kDa**，並且主要落在可溶部分，這就是為什麼那組溫和的誘導條件被報告出來，而不是被略過。' },
                { en: '**Every biochemical number is framed by the CF airway:** optimum **37 °C**, which is body temperature; optimum pH 8.0 but **substantial activity retained at pH 7.0**, inside the neutral-to-weakly-alkaline range they cite for CF airway fluid; and **no saturation within 0–60 min**, i.e. it keeps cutting for at least an hour.', zh: '**每一個生化數字都被放在囊狀纖維化呼吸道的框架裡講：**最適 **37 °C**，也就是人體溫度；最適 pH 為 8.0，但**在 pH 7.0 仍保有相當活性**，落在他們引用的囊狀纖維化呼吸道液體「中性到弱鹼」的範圍內；而且**在 0–60 分鐘內沒有飽和**，也就是說它至少還能繼續切一個小時。' },
                { en: 'They flag their own gel: **an extra band migrating close to the target** in the elution fractions, which they suspect came from incomplete denaturation during sample preparation. Suspected, not asserted.', zh: '他們主動指出自己膠片上的問題：**洗脫部分中有一條與目標非常接近的額外條帶**，他們懷疑來自製樣時蛋白沒有完全變性。是「懷疑」，不是斷言。' }
              ],
              done: { en: 'An enzyme with four published parameters — and one named limit, below.', zh: '一個有四個公開參數的酵素——以及下面那一個被指名的限制。' } },
            { h: { en: 'Cycle 4 — assemble, then test the logic rather than the output', zh: '循環 4——組裝，然後測邏輯，而不是測輸出' },
              p: { en: 'P_fhuA1 and RhlR-SsrA-ASV-P_rhl(LR) joined on pTrc99k, built in DH5α, sequence-verified, then moved into **EcN** — two versions: a GFP reporter for logic and an effector cassette for therapy.', zh: '把 P_fhuA1 與 RhlR-SsrA-ASV-P_rhl(LR) 接在 pTrc99k 上，先在 DH5α 中建構、定序確認，再轉進 **EcN**——做成兩個版本：驗證邏輯用的 GFP 報告版，與治療用的效應卡匣版。' },
              items: [
                { en: 'The logic version exists so that the six-condition table below can be read as fluorescence per cell rather than as an enzyme assay with two variables moving at once.', zh: '邏輯版本之所以存在，是為了讓下面那張六條件的表可以用「每個細胞的螢光」來讀，而不是變成一個有兩個變數同時在動的酵素試驗。' },
                { en: 'Cloning is reported as routine and verified — PCR, homologous recombination into the kanamycin-resistant pTrc99k, colony PCR, Sanger sequencing at every step — and their Contribution page says explicitly that the emphasis is on characterisation rather than on the cloning.', zh: '選殖工作被當作常規並已驗證來報告——PCR、同源重組進帶卡那黴素抗性的 pTrc99k、菌落 PCR、每一步都有 Sanger 定序——而他們的 Contribution 頁明確寫著：重點放在特性化，而不是選殖。' }
              ] }
          ]) +
          h.h3({ en: 'The three choices, and what lost each time', zh: '三次選擇，以及每一次輸掉的是什麼' }) +
          h.tbl({
            cols: [
              { t: { en: 'Choice', zh: '選擇' }, w: '20%' },
              { t: { en: 'Compared against', zh: '被拿來比較的對象' }, w: '26%' },
              { t: { en: 'What decided it', zh: '決定它的是什麼' } }
            ],
            rows: [
              [{ en: '**P_fhuA1** as the iron gate', zh: '以 **P_fhuA1** 作為鐵感應閘' },
               { en: 'Native **P_fepA**', zh: '原生的 **P_fepA**' },
               { en: 'P_fepA gave only a negligible rise even at 200 µM DP; P_fhuA1 held a low basal level under iron-rich conditions and rose dose-dependently as iron fell.', zh: 'P_fepA 即使在 200 µM DP 下也只有可忽略的上升；P_fhuA1 在高鐵條件下維持低基礎值，並隨著鐵減少呈劑量依賴性上升。' }],
              [{ en: '**RhlR / C4-HSL** as the pathogen gate', zh: '以 **RhlR／C4-HSL** 作為病原感應閘' },
               { en: 'The LasR / 3-oxo-C12-HSL system', zh: 'LasR／3-oxo-C12-HSL 系統' },
               { en: 'Not a bench comparison but a clinical one: *lasR* loss-of-function runs at 15–30 % in CF isolates, while RhlR stays intact and keeps making C4-HSL.', zh: '這不是實驗檯上的比較，而是臨床上的比較：在囊狀纖維化分離株中，*lasR* 功能喪失的比例是 15–30%，而 RhlR 仍完好並持續製造 C4-HSL。' }],
              [{ en: '**RhlR-SsrA-ASV + P_rhl(LR)**', zh: '**RhlR-SsrA-ASV ＋ P_rhl(LR)**' },
               { en: 'Untagged RhlR plus LAA, LVA and AAV, on two different promoters', zh: '未加標籤的 RhlR，加上 LAA、LVA、AAV，在兩個不同的啟動子上' },
               { en: 'A genuine two-round screen: on wild-type P_rhl only ASV kept a statistically distinguishable induction; on P_rhl(LR) all four worked and ASV held the best leakage-to-amplitude balance.', zh: '一場真正的兩輪篩選：在野生型 P_rhl 上只有 ASV 保住了統計上可分辨的誘導；在 P_rhl(LR) 上四個都有效，而 ASV 在洩漏與振幅之間取得最好的平衡。' }],
              [{ en: '**PL5 alginate lyase**', zh: '**PL5 褐藻酸裂解酶**' },
               { en: 'The PL6, PL7, PL17 and PL18 families they review', zh: '他們回顧過的 PL6、PL7、PL17、PL18 家族' },
               { en: 'Chosen from the literature on pathological fit, then characterised — not screened at the bench. The selection argument and the activity data are separate claims on their pages.', zh: '是依病理適配性從文獻中挑出來、再去做特性化的，而不是在實驗檯上篩出來的。在他們的頁面上，選擇的論證與活性數據是兩個分開的主張。' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Engineering, Results and Description pages. The table is ours.', zh: '讀自該隊 Engineering、Results 與 Description 頁。表是我們整理的。' }
          })
      });

      /* ---------------- the tag screen ---------------- */
      out += h.sec({
        id: 'c-tag',
        kick: { en: 'The improved part', zh: '改良元件' },
        h2: { en: 'Their own fix broke the circuit, and the repair came out of another team\'s registry entry', zh: '他們自己的解法把線路弄壞了，而修復它的東西來自另一支隊伍的登錄元件' },
        lede: {
          en: 'This is the work that won Best New Improved Part in the High School division, and it is worth following step by step, because the interesting half is the half that failed.',
          zh: '這就是拿下高中組最佳新改良元件的那份工作，而它值得一步一步跟著看，因為有趣的那一半正是失敗的那一半。'
        },
        body:
          h.p({
            en: '**The inherited problem.** BBa_K2315014 reports GFP with no inducer present. In an AND gate that is fatal rather than untidy: the iron layer can only gate the *amount of receptor*, so any receptor-independent output from P_rhl appears at the output of the whole gate regardless of iron.',
            zh: '**繼承下來的問題。**BBa_K2315014 在沒有誘導物的情況下也會表現 GFP。在一個 AND 閘裡，這不是「不夠乾淨」，而是致命的：鐵那一層只能管控*受體的量*，所以任何與受體無關、來自 P_rhl 的輸出，都會不管鐵的狀態、直接出現在整個閘的輸出端。'
          },
          {
            en: '**Their fix.** Fuse an **SsrA** peptide to the RhlR C-terminus, so native Clp-family proteases shorten the protein\'s half-life and lower the steady-state abundance that background transcription produces. They picked four tags spanning a range of degradation rates rather than one, which is what turns a modification into a screen.',
            zh: '**他們的解法。**在 RhlR 的 C 端接上一段 **SsrA** 胜肽，讓原生的 Clp 家族蛋白酶縮短這個蛋白的半衰期，壓低背景轉錄所產生的穩態含量。他們挑的是四種涵蓋不同降解速率的標籤，而不是一種——而這正是讓「一次修改」變成「一場篩選」的關鍵。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Tag', zh: '標籤' }, w: '13%' },
              { t: { en: 'Degradation rate, as their table scores it', zh: '降解速率，依他們表中的評分' }, w: '20%' },
              { t: { en: 'On wild-type P_rhl (cycle 2a)', zh: '在野生型 P_rhl 上（循環 2a）' } },
              { t: { en: 'On P_rhl(LR) (cycle 2b)', zh: '在 P_rhl(LR) 上（循環 2b）' } }
            ],
            rows: [
              [{ en: 'none (control)', zh: '無（對照）' }, { en: '—', zh: '—' },
               { en: 'Measurable C4-HSL induction, but **high basal fluorescence** without inducer.', zh: '有可量測的 C4-HSL 誘導，但在沒有誘導物時**基礎螢光偏高**。' },
               { en: 'Carried through as the reference for every tagged construct.', zh: '作為每一個帶標籤構築的參照一路帶下去。' }],
              [{ en: '**LAA**', zh: '**LAA**' }, { en: '++++', zh: '++++' },
               { en: 'Leakage suppressed; **no significant difference between blank and 1 mM C4-HSL** at the endpoint. Also the only tag with a small but significant drop in final OD₆₀₀ (p < 0.05).', zh: '洩漏被壓下來；但在終點時**空白組與 1 mM C4-HSL 之間沒有顯著差異**。同時也是唯一一個最終 OD₆₀₀ 有小幅但顯著下降的標籤（p < 0.05）。' },
               { en: 'Highly significant induction restored.', zh: '高度顯著的誘導被恢復。' }],
              [{ en: '**LVA**', zh: '**LVA**' }, { en: '+++++', zh: '+++++' },
               { en: 'Leakage suppressed, induction lost.', zh: '洩漏被壓下來，誘導消失。' },
               { en: 'Highly significant induction restored.', zh: '高度顯著的誘導被恢復。' }],
              [{ en: '**ASV**', zh: '**ASV**' }, { en: '++', zh: '++' },
               { en: '**The only survivor:** weak but statistically distinguishable induction at high-dose C4-HSL.', zh: '**唯一的倖存者：**在高劑量 C4-HSL 下有微弱但統計上可分辨的誘導。' },
               { en: '**Best trade-off:** strong C4-HSL-dependent amplitude with a relatively low baseline. Chosen for the final circuit.', zh: '**最好的折衷：**既有強的 C4-HSL 依賴振幅，基線又相對低。被選進最終線路。' }],
              [{ en: '**AAV**', zh: '**AAV**' }, { en: '+++', zh: '+++' },
               { en: 'Leakage suppressed, induction lost.', zh: '洩漏被壓下來，誘導消失。' },
               { en: 'Highly significant induction restored.', zh: '高度顯著的誘導被恢復。' }]
            ],
            min: 820,
            source: { en: 'Read from the team\'s Improve and Engineering pages. One wrinkle we are not resolving for them: their tag table scores LVA as the fastest of the four, while the text attributes the LAA growth penalty to LAA mediating "the fastest protein turnover" — we quote both rather than pick one.', zh: '讀自該隊 Improve 與 Engineering 頁。有一個我們不替他們定案的小地方：他們的標籤表把 LVA 評為四者中最快，而文字卻把 LAA 的生長代價歸因於 LAA 造成「最快的蛋白更替」——我們把兩者都引出來，不替他們選一個。' }
          }) +
          h.warn({
            en: '**The diagnosis is the contribution.** They do not report "three of four tags did not work" and move on. They name the mechanism: wild-type P_rhl is transcriptionally weak even when fully activated by the RhlR–C4-HSL complex, so **SsrA-driven degradation can outrun GFP synthesis**. Their stated conclusion is general — *"applying protein degradation tags alone cannot rescue the performance limitation originating from insufficient promoter transcriptional strength"* — and it is what sets up the next cycle instead of ending the line of work.',
            zh: '**那個診斷本身就是貢獻。**他們沒有只寫「四種標籤裡有三種沒用」就往下走。他們把機制指出來：野生型 P_rhl 即使被 RhlR–C4-HSL 複合體完全活化，轉錄能力仍然偏弱，所以 **SsrA 驅動的降解速率可以超過 GFP 的合成速率**。他們寫下的結論是通則性的——*「單靠蛋白降解標籤，無法救回源自啟動子轉錄強度不足的效能限制」*——而這個結論是用來開啟下一輪，而不是用來結束這條工作線的。'
          }) +
          h.h3({ en: 'The repair: a part from Tokyo_Tech 2016', zh: '修復方式：一個來自 Tokyo_Tech 2016 的元件' }) +
          h.p({
            en: 'If the limit is transcription, raise transcription. They swapped wild-type P_rhl for **P_rhl(LR), BBa_K1529310**, an engineered promoter with modified RhlR-binding operator sites, citing the **2016 Tokyo_Tech** team\'s finding that the native *rhl* promoter is weak. They also report a **circuit-level simulation** predicting that P_rhl at wild-type strength would stop the assembled AND gate working — the one piece of modelling on the wiki, and the stated reason the swap was necessary rather than merely attractive.',
            zh: '如果瓶頸在轉錄，那就把轉錄拉高。他們把野生型 P_rhl 換成 **P_rhl(LR)，BBa_K1529310**，一個在 RhlR 結合操縱子位點上做過修改的工程化啟動子，並引用 **2016 Tokyo_Tech** 隊的發現：原生的 *rhl* 啟動子很弱。他們還報告了一次**線路層級的模擬**，預測野生型強度的 P_rhl 會讓組裝後的 AND 閘無法運作——這是整個 wiki 上唯一的建模，也是他們寫下的「這次更換是必要的，而不只是誘人的」理由。'
          },
          {
            en: 'The result after the swap: maximum induced output roughly **doubled**; clear dose stratification at 10 µM, 100 µM and 1 mM C4-HSL; all four tags significant; and — they say this too — **the higher transcription rate also raised the blank group\'s basal signal.** The improvement is a better ratio, not a free lunch, and the trade-off is on the page. Growth curves showed no significant difference in final OD₆₀₀ between the untagged control and any of the four tagged variants in this cycle.',
            zh: '更換之後的結果：最大誘導輸出大約**翻倍**；在 10 µM、100 µM 與 1 mM C4-HSL 下有清楚的劑量分層；四種標籤都顯著；而且——這句話也是他們自己寫的——**較高的轉錄速率同時也把空白組的基礎訊號抬高了。**這個改良是比值變好，不是天上掉下來的好處，而那個代價就寫在頁面上。這一輪的生長曲線顯示，未加標籤的對照與四個帶標籤變異體之間，最終 OD₆₀₀ 沒有顯著差異。'
          }) +
          h.take({ en: 'Why we think this deserved the part award', zh: '我們為什麼認為這值得那個元件獎' }, {
            en: 'The part that was submitted, **BBa_26QSD9SO**, is not a clever construct that worked first time. It is the surviving member of a five-way screen run twice, on two promoters, with growth curves attached and a mechanistic explanation for every variant that failed. A future team reading that entry learns not only which tag to use but **what the tag cannot fix** — which is the part of an improvement that normally never gets written down.',
            zh: '被提交的那個元件 **BBa_26QSD9SO**，不是一個第一次就成功的聰明構築。它是一場五組並列、在兩個啟動子上各跑一次的篩選中倖存下來的那一個，而且附上了生長曲線，以及每一個失敗變異體的機制解釋。一支未來的隊伍讀到那筆登錄資料時，學到的不只是「該用哪個標籤」，還有**那個標籤修不了什麼**——而這通常正是一次改良中永遠不會被寫下來的部分。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'c-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'A wet lane with four screens, and a dry lane that exists in two sentences and one fit', zh: '濕式那條有四場篩選，乾式那條則存在於兩句話與一次擬合之中' },
        lede: {
          en: 'This is an overwhelmingly wet-lab project, and we are drawing it that way rather than inflating the dry lane to make the diagram symmetrical.',
          zh: '這是一個以濕式實驗為壓倒性主體的專案，而我們就照這樣畫它，不會為了讓圖對稱而把乾式那條充水。'
        },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'GCGS: four DBTL cycles, and the two places computation touched them', zh: 'GCGS：四輪 DBTL 循環，以及計算介入的那兩個位置' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Engineering, Improve, Results and Part Collection pages.', zh: '由我們依該隊 Engineering、Improve、Results 與 Part Collection 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- the assembled gate ---------------- */
      out += h.sec({
        id: 'c-gate',
        kick: { en: 'Results', zh: '結果' },
        h2: { en: 'Six conditions, one of which fires — then the curve that IHP asked for', zh: '六個條件，其中一個被點燃——接著是整合式人類實踐要求的那條曲線' },
        lede: {
          en: 'An AND gate is only demonstrated by the conditions that stay off. They ran all of them, in EcN, over 8 h, as RFU per OD₆₀₀.',
          zh: '一個 AND 閘是靠那些「保持關閉」的條件來證明的。他們在 EcN 中把所有條件都跑了，8 小時，讀值是每個 OD₆₀₀ 的 RFU。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Iron', zh: '鐵' }, w: '19%' },
              { t: { en: 'C4-HSL', zh: 'C4-HSL' }, w: '17%' },
              { t: { en: 'Normalised GFP over 8 h', zh: '8 小時內的標準化 GFP' } }
            ],
            rows: [
              [{ en: 'Blank medium', zh: '空白培養基' }, { en: 'none', zh: '無' }, { en: 'Near-basal throughout.', zh: '全程接近基礎值。' }],
              [{ en: 'Iron-rich', zh: '高鐵' }, { en: 'none', zh: '無' }, { en: 'Near-basal throughout — the Fur layer is holding.', zh: '全程接近基礎值——Fur 這一層守住了。' }],
              [{ en: 'Low iron (100 µM DP)', zh: '低鐵（100 µM DP）' }, { en: 'none', zh: '無' }, { en: 'Near-basal throughout. Receptor is made, but nothing activates it.', zh: '全程接近基礎值。受體被做出來了，但沒有東西去活化它。' }],
              [{ en: 'Blank medium', zh: '空白培養基' }, { en: '1 mM', zh: '1 mM' }, { en: 'Near-basal throughout.', zh: '全程接近基礎值。' }],
              [{ en: 'Iron-rich', zh: '高鐵' }, { en: '1 mM', zh: '1 mM' }, { en: 'Near-basal throughout — **this is the row that makes it an AND gate** rather than a C4-HSL sensor.', zh: '全程接近基礎值——**這一列才是讓它成為 AND 閘**、而不只是一個 C4-HSL 感測器的那一列。' }],
              [{ en: '**Low iron (100 µM DP)**', zh: '**低鐵（100 µM DP）**' }, { en: '**1 mM**', zh: '**1 mM**' }, { en: '**A prominent, time-dependent rise**, corroborated by the end-point quantification and by a photograph of the cultures under blue light.', zh: '**出現明顯且隨時間上升的訊號**，並由終點定量與培養物在藍光下的照片相互佐證。' }]
            ],
            min: 640,
            source: { en: 'Read from the team\'s Results section 4 and Engineering Cycle 4. They also report that the low-iron DP groups grew slightly more slowly, and explain it by iron being an essential micronutrient rather than leaving it unremarked.', zh: '讀自該隊 Results 第 4 節與 Engineering 循環 4。他們也報告低鐵 DP 組的生長稍慢，並以「鐵是必需微量營養素」來解釋，而不是放著不提。' }
          }) +
          h.h3({ en: 'The characterisation that only happened because someone pushed back', zh: '那個只因為有人提出異議才做出來的特性化' }) +
          h.p({
            en: 'The six-condition table above was run at **one fixed high dose** of C4-HSL. Their own account says that industry expert **Dr. An** and **Dr. Xin Wang** pointed out the gap: sputum C4-HSL in chronically infected CF patients spans a wide range, so a single dose demonstrates logic and nothing about sensitivity. So they went back and ran a gradient.',
            zh: '上面那張六條件的表，是在**單一固定高劑量**的 C4-HSL 下跑出來的。他們自己的敘述說，產業專家 **Dr. An** 與 **Dr. Xin Wang** 指出了這個缺口：慢性感染的囊狀纖維化病人痰液中 C4-HSL 的濃度跨幅很大，所以單一劑量只證明了邏輯，對靈敏度什麼都沒說。於是他們回去補做了一組梯度。'
          }) +
          h.kv([
            [{ en: 'C4-HSL limit of detection', zh: 'C4-HSL 偵測極限' }, { en: '**53.1 nM** — nanomolar, which they argue covers the low end of the clinically reported sputum range.', zh: '**53.1 nM**——奈莫耳級，他們主張這涵蓋了臨床報告中痰液濃度範圍的低端。' }],
            [{ en: 'Dose–response fit', zh: '劑量反應擬合' }, { en: '**R² = 0.894**, printed as the fit coefficient rather than as a claim that the curve is perfect.', zh: '**R² = 0.894**，被當作擬合係數印出來，而不是宣稱這條曲線完美。' }],
            [{ en: 'Cross-reactivity', zh: '交叉反應' }, { en: '**Weak secondary activation by C12-HSL**, consistent with native RhlR ligand recognition. They report it as a finding and then argue both ways about it.', zh: '**C12-HSL 會造成微弱的次級活化**，與原生 RhlR 的配體辨識性質一致。他們把它當成一個發現報告出來，然後對它做了兩面的論證。' }],
            [{ en: 'What they do with the cross-talk', zh: '他們怎麼處理這個交叉訊號' }, { en: 'On the Engineering page they read it as **useful** — *P. aeruginosa* secretes both AHLs, so a wider window matches the real airway — while also saying RhlR\'s ligand preference could be tuned by protein engineering later. Both readings, same paragraph.', zh: '在 Engineering 頁上，他們把它讀成**有用的**——*P. aeruginosa* 兩種 AHL 都會分泌，所以較寬的視窗更貼近真實的呼吸道——同時也說 RhlR 的配體偏好之後可以用蛋白工程去微調。兩種讀法，同一段。' }]
          ]) +
          h.take({ en: 'Ours', zh: '我們的看法' }, {
            en: 'The honest version of this story is the one they published: the first AND-gate figure answers "does the logic hold", and it took an outside reviewer to point out that it does not answer "at what concentration". The gradient is the better experiment, and it exists because the first one was shown to someone who was not on the team.',
            zh: '這個故事誠實的版本就是他們公開的那個版本：第一張 AND 閘的圖回答的是「邏輯成立嗎」，而是外部審閱者點出它沒有回答「在什麼濃度下成立」。梯度那組才是更好的實驗，而它之所以存在，是因為第一組被拿給了隊伍之外的人看。'
          })
      });

      /* ---------------- the contradiction ---------------- */
      out += h.sec({
        id: 'c-split',
        kick: { en: 'Reading carefully', zh: '仔細讀' },
        h2: { en: 'Two sentences on the same page do not agree', zh: '同一頁上的兩句話對不起來' },
        lede: {
          en: 'We are putting this in its own section because it is the one thing on this wiki a reader can get wrong without noticing. It is not an accusation; it is two of their own sentences, side by side.',
          zh: '我們把這件事單獨列一節，因為這是整個 wiki 上唯一一個讀者可能在不知不覺中讀錯的地方。這不是指控，而是把他們自己的兩句話並排放在一起。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Where on their wiki', zh: '在他們 wiki 的哪裡' }, w: '26%' },
              { t: { en: 'What it says about the effector test in artificial lung fluid', zh: '它對「人工肺液中的效應測試」說了什麼' } }
            ],
            rows: [
              [{ en: 'Results, section 4 (and the matching passage in Engineering Cycle 4)', zh: 'Results 第 4 節（以及 Engineering 循環 4 中對應的段落）' },
               { en: 'Reports the experiment as done: growth curves with *"moderate growth reduction triggered by Lysis E-driven conditional autolysis"*, **supernatant SDS-PAGE confirming time-dependent extracellular accumulation of alginate lyase**, and **DNS assays showing progressively rising enzymatic activity** — concluding that the circuit *"can accomplish conditional effector production, bacterial lysis and functional enzyme release under CF-mimicking conditions."*', zh: '把這個實驗報告為已完成：生長曲線顯示*「由 Lysis E 驅動的條件性自溶所引起的中等程度生長下降」*、**上清液 SDS-PAGE 確認褐藻酸裂解酶隨時間在胞外累積**，以及 **DNS 試驗顯示酵素活性逐步上升**——並結論說這個線路*「能在模擬囊狀纖維化的條件下完成條件性效應蛋白生產、細菌裂解與功能性酵素釋放」*。' }],
              [{ en: 'Results, Discussion, second limitation bullet', zh: 'Results 的 Discussion，第二條限制' },
               { en: 'Reports the same experiment as unfinished: the therapeutic output test for the plasmid *"has not been fully completed"*, and *"we lack direct evidence for circuit-triggered protein release in CF-mimicking medium."*', zh: '把同一個實驗報告為尚未完成：該質體的治療輸出測試*「尚未完全完成」*，而且*「我們缺乏在模擬囊狀纖維化培養基中、由線路觸發的蛋白釋放的直接證據」*。' }]
            ],
            min: 700,
            source: { en: 'Both quoted from https://2026.igem.wiki/gcgs/results/. Putting them next to each other is ours; the sentences are theirs.', zh: '兩句都引自 https://2026.igem.wiki/gcgs/results/。把它們並排放在一起是我們做的；句子是他們的。' }
          }) +
          h.warn({
            en: '**A reader cannot tell from the wiki which of the two statements is current.** We are not going to guess why, and we are not treating either sentence as the mistake. What we will say is how to read it: **the safe reading is the cautious one.** Until the two sections agree, the defensible claims from this project are the ones that do not depend on the lung-fluid release experiment — the promoter screen, the tag screen, the purified-enzyme characterisation, and the six-condition AND logic with its dose curve, all of which are reported consistently everywhere they appear.',
            zh: '**讀者無法從這個 wiki 判斷這兩句話中哪一句才是現況。**我們不打算猜原因，也不把其中任何一句當成「那個錯的」。我們要說的是該怎麼讀它：**安全的讀法是那個保守的讀法。**在這兩節取得一致之前，這個專案站得住腳的主張，是那些不依賴人工肺液釋放實驗的主張——啟動子篩選、標籤篩選、純化酵素的特性化，以及六條件的 AND 邏輯及其劑量曲線；這些在它們出現的每一個地方都被一致地報告。'
          }) +
          h.note({
            en: 'For completeness: their Engineering Cycle 4 adds detail on the same side as Results section 4 — engineered EcN *"remained viable in this simulated medium over 48 h"* — so of the three places the experiment is described, two describe it as done and the Discussion bullet on one of those same pages describes it as not. The cautious bullet is the newer-sounding of the two only in tone, not in any dating the wiki provides.',
            zh: '補充完整：他們的 Engineering 循環 4 在與 Results 第 4 節相同的一側補上了細節——改造後的 EcN*「在這個模擬培養基中維持存活超過 48 小時」*——所以在描述這個實驗的三個位置中，有兩個把它寫成已完成，而其中一頁上的 Discussion 那一條卻寫成未完成。那條保守的敘述只是在語氣上比較像後來寫的，wiki 並沒有提供任何可以據以判斷先後的日期。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'c-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, including the limit their school imposed rather than they did', zh: '還沒解決的部分，包括一個不是他們、而是學校加上的限制' },
        lede: {
          en: 'Most of this list is their own, published in their Discussion and in the Learn block of each cycle, usually with the name of the expert who insisted on it.',
          zh: '這份清單大部分是他們自己的，公開在他們的 Discussion 以及每一輪的 Learn 段落裡，而且通常附上那位堅持要寫下它的專家的名字。'
        },
        body:
          h.ul([
            { en: '**No live *P. aeruginosa* biofilm was ever touched, and the reason is school lab safety rules, not a choice.** Enzyme activity was therefore measured only on purified sodium alginate in a cell-free assay. They quote **Dr. Ran An** that substrate-level enzyme data *cannot fully predict real biofilm degradation outcome* — the single largest gap between what was measured and what the therapy claims to do, and it is printed by the team rather than found by us.', zh: '**從頭到尾沒有碰過活的 *P. aeruginosa* 生物膜，而原因是學校實驗室的安全規定，不是他們的選擇。**因此酵素活性只在無細胞試驗中、對純化的褐藻酸鈉量過。他們引用 **Dr. Ran An** 的話：受質層級的酵素數據*無法完全預測真實的生物膜降解結果*——這是「量到的東西」與「這個療法聲稱能做的事」之間最大的一道缺口，而且是由該隊自己印出來的，不是我們找出來的。' },
            { en: '**No biosafety dataset at all for the live strain:** no assessment of strain survival, circuit stability, horizontal gene transfer or host-microbiome disturbance in airway-relevant environments. They quote regulatory expert **Dr. Huihui Bao** that these datasets are mandatory for future drug registration, which makes it a named prerequisite rather than a vague future.', zh: '**對這株活菌完全沒有任何生物安全數據集：**在與呼吸道相關的環境中，沒有評估菌株存活、線路穩定性、水平基因轉移或對宿主微生物體的擾動。他們引用法規專家 **Dr. Huihui Bao** 的話：這些數據集是未來藥物登記的強制要求——這讓它變成一個被指名的前置條件，而不是一個模糊的未來。' },
            { en: '**The inhaled product is labelled conceptual, by them.** The trehalose–mannitol spray-dried formulation, the 40–60 °C outlet temperature, the mesh-nebuliser-or-DPI recommendation and the explicit rejection of jet and ultrasonic nebulisers all come from expert interviews, and the page calls the whole thing *"an expert guided conceptual design"* with spray-drying, encapsulation and inhalation stability tests listed as future work.', zh: '**那個吸入式產品是他們自己標為概念性的。**海藻糖—甘露醇噴霧乾燥配方、40–60 °C 的出口溫度、建議用網式噴霧器或乾粉吸入器、以及明確排除噴射式與超音波噴霧器，全部來自專家訪談；而頁面把整件事稱為*「一個由專家引導的概念設計」*，並把噴霧乾燥、包埋與吸入穩定性測試列為未來工作。' },
            { en: '**The kill switch is a plan.** Current containment is the Lysis E self-lysis element that is already part of the output cassette; a temperature-sensitive kill switch as a second layer, plus plasmid loss rate and escape frequency, are listed as future work on expert advice.', zh: '**那個自殺開關還只是個計畫。**目前的圍阻手段就是已經在輸出卡匣裡的 Lysis E 自溶元件；而作為第二層的溫度敏感型自殺開關，以及質體遺失率與逃逸頻率，是依專家建議被列為未來工作。' },
            { en: '**One gel band is unexplained.** The extra close-migrating band in the purified alginate lyase fractions is attributed to suspected incomplete denaturation during sample preparation; no follow-up run is reported to confirm that.', zh: '**有一條膠片條帶沒有被解釋。**純化後的褐藻酸裂解酶部分中那條遷移位置很接近的額外條帶，被歸因於「懷疑製樣時變性不完全」；但沒有報告任何後續實驗去確認這一點。' },
            { en: '**The dry lab is one sentence.** The Model, Measurement, Hardware and Software pages on their wiki still carry the iGEM template text, so the circuit-level simulation that justified the promoter swap has **no published parameters, equations or plots anywhere** — it exists as a claim inside the Engineering and Improve prose. The dose–response fit and the cross-reactivity panel are real computational results, but they live in the Results page rather than in a model.', zh: '**乾式實驗只有一句話。**他們 wiki 上的 Model、Measurement、Hardware 與 Software 頁仍然是 iGEM 的模板文字，所以那個用來支持更換啟動子的線路層級模擬，**在任何地方都沒有公開的參數、方程式或圖**——它以一個主張的形式存在於 Engineering 與 Improve 的文字裡。劑量反應擬合與交叉反應測試是真正的計算結果，但它們放在 Results 頁，而不是放在一個模型裡。' },
            { en: '**Everything is in vitro.** All results come from liquid culture or artificial lung fluid; no animal model, no *ex vivo* mucus, no biofilm. Their own Learn 4 says so, and lists in vitro biofilm models as the next step.', zh: '**所有東西都是體外的。**所有結果都來自液態培養或人工肺液；沒有動物模型、沒有*離體*黏液、沒有生物膜。他們自己的 Learn 4 就是這麼寫的，並把體外生物膜模型列為下一步。' },
            { en: '**And the one above:** two sections of their own Results page disagree about whether the artificial-lung-fluid effector test is finished.', zh: '**還有上面那一件：**他們自己 Results 頁的兩個章節，對「人工肺液的效應測試是否已完成」說法不一致。' }
          ])
      });

      /* ---------------- copy ---------------- */
      out += h.sec({
        id: 'c-copy',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from GCGS', zh: '我們會從 GCGS 抄什麼' },
        body:
          h.ul([
            { en: '**Make every part choice a screen with a published loser.** P_fepA is on their results page at the same size as P_fhuA1. A screen with one candidate is not a screen, and a screen whose loser is deleted is unreadable.', zh: '**讓每一次元件選擇都變成一場有公開落選者的篩選。**P_fepA 在他們的結果頁上和 P_fhuA1 佔一樣的篇幅。只有一個候選者的篩選不是篩選；而把落選者刪掉的篩選，別人根本沒法讀。' },
            { en: '**Write the failed strategy at full length, with the mechanism.** "Three of four tags lost induction because wild-type P_rhl cannot out-synthesise SsrA degradation" is a transferable result. "We optimised the construct" is not.', zh: '**把失敗的策略整段寫出來，連機制一起。**「四種標籤中有三種失去誘導，因為野生型 P_rhl 的合成速率追不上 SsrA 的降解」是一個可以被別人帶走的結果。「我們把構築最佳化了」不是。' },
            { en: '**Borrow the fix from the registry, and name the team.** P_rhl(LR) from Tokyo_Tech 2016 is the whole reason their improvement works. Citing a 2016 part by number and by team is what makes the registry function as a library instead of a graveyard.', zh: '**從登錄庫借來解法，並把那支隊伍的名字寫出來。**來自 Tokyo_Tech 2016 的 P_rhl(LR) 是他們的改良能成立的全部理由。以編號與隊名引用一個 2016 年的元件，正是讓登錄庫作為一個圖書館、而不是一個墓園來運作的方式。' },
            { en: '**Run the growth curve alongside every fluorescence claim.** They say, for both promoter strains and for every tag variant, whether OD₆₀₀ differed — which is the difference between "the promoter responded" and "there were more cells".', zh: '**讓每一個螢光主張旁邊都有一條生長曲線。**對兩株啟動子菌、對每一個標籤變異體，他們都說了 OD₆₀₀ 有沒有差異——而這正是「啟動子有反應」與「細胞比較多」之間的差別。' },
            { en: '**Test the conditions that should stay off.** Five of their six AND-gate conditions exist only to stay flat. The iron-rich + C4-HSL row is the one that separates an AND gate from a single-input sensor, and it is the row most teams would not have run.', zh: '**去測那些「應該保持關閉」的條件。**他們六個 AND 閘條件中有五個的存在，只是為了保持平坦。高鐵＋C4-HSL 那一列，正是把 AND 閘和單輸入感測器分開的那一列，而那也是多數隊伍不會去跑的那一列。' },
            { en: '**Choose the input your clinical population actually has.** RhlR over LasR because 15–30 % of CF isolates have lost *lasR*. That is a design decision made from epidemiology rather than from convenience, and it is one sentence long.', zh: '**選你的臨床族群真正擁有的那個輸入。**選 RhlR 而不是 LasR，因為 15–30% 的囊狀纖維化分離株已經失去 *lasR*。這是一個從流病數據、而不是從方便程度做出來的設計決定，而且只需要一句話。' },
            { en: '**Measure the enzyme against the environment, not against the catalogue.** Reporting a 37 °C optimum is routine; reporting it as "body temperature" and then checking pH 7.0 because that is where CF airway fluid sits is what makes the number mean something.', zh: '**拿酵素去對照它要工作的環境來量，不是對照目錄來量。**報告最適 37 °C 是常規；把它說成「人體溫度」，再因為囊狀纖維化呼吸道液體就在那個範圍而去檢查 pH 7.0，才是讓這個數字有意義的做法。' },
            { en: '**Let an outsider find the gap before the judges do.** The dose curve, the LOD and the cross-reactivity panel exist because two experts said one fixed concentration was not enough. Showing an unfinished figure to someone outside the team is cheaper than any experiment.', zh: '**讓外人在評審之前先找出缺口。**那條劑量曲線、那個偵測極限與那組交叉反應測試之所以存在，是因為兩位專家說「單一固定濃度不夠」。把一張還沒做完的圖拿給隊伍以外的人看，比任何實驗都便宜。' },
            { en: '**Attribute each limitation to the person who insisted on it.** "Dr. Ran An stressed that substrate-level data cannot predict biofilm degradation" is harder to wave away than "further work is needed", and it shows the feedback actually landed.', zh: '**把每一條限制歸給那個堅持要寫它的人。**「Dr. Ran An 強調受質層級的數據無法預測生物膜降解」比「仍需進一步工作」更難被打發掉，而且它證明那個回饋真的落地了。' },
            { en: '**Then read your own pages against each other before you freeze the wiki.** The artificial-lung-fluid contradiction is a ten-minute fix and it is the only thing on this wiki that costs them credibility. Two people reading the same claim in two sections would have caught it.', zh: '**然後在凍結 wiki 之前，把自己的頁面互相對讀一遍。**人工肺液那個矛盾是十分鐘就能修好的事，而它是這個 wiki 上唯一讓他們失去可信度的地方。兩個人分別去讀兩個章節裡的同一個主張，就會抓到它。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the ten items above, the judgement that the failed tag screen is the most valuable thing on this wiki, and the reading that the cautious sentence should win where two sections disagree. Everything else is the team\'s own, read from [2026.igem.wiki/gcgs](https://2026.igem.wiki/gcgs/).',
            zh: '標示為我們的看法：上面十點、「那場失敗的標籤篩選是這個 wiki 上最有價值的東西」這個判斷，以及「兩節說法不一致時，應以保守那一句為準」這個讀法。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/gcgs](https://2026.igem.wiki/gcgs/)。'
          })
      });

      return out;
    }
  };
})(window);
