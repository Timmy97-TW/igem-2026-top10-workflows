/* GHCIS — a paper-based, cell-free toehold test for three antibiotic-resistance
   genes in water. Top 10 High School, Best Part Collection and Best Software
   (High School), iGEM 2026. Everything on this page is read from
   https://2026.igem.wiki/ghcis/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Nine switches, three per gene', zh: '九個開關，每基因三個' },
        s: { en: 'Inserts of about 134 bp cloned upstream of sfGFP in pJL1; DH5α, Sanger', zh: '約 134 bp 插入片段接到 pJL1 的 sfGFP 上游；DH5α、定序' } },
      { l: { en: 'Prove the cell-free system first', zh: '先證明無細胞系統可用' },
        s: { en: 'pJL1–T7–GFP control: fluorescence rose, down to 1 µL at 2 ng/µL', zh: 'pJL1–T7–GFP 對照：螢光上升，低到 1 µL、2 ng/µL' }, tone: 'g' },
      { l: { en: 'Round one: no separation', zh: '第一輪：分不開' },
        s: { en: '37 °C, 527 nm, 1 h. NDM1_3 rose with AND without trigger RNA', zh: '37 °C、527 nm、1 小時。NDM1_3 有無觸發都上升' }, tone: 'r' },
      { l: { en: 'Redesign, and reorder the DNA', zh: '重新設計，並改訂 DNA' },
        s: { en: 'Inserts as PCR products with homology ends: 10 days to 3 days', zh: '插入片段改成帶同源端的 PCR 產物：10 天變 3 天' }, tone: 'a' },
      { l: { en: 'Round two separates', zh: '第二輪分得開了' },
        s: { en: 'MCR1_4, NDM1_4 and KPC2_4 end above their no-trigger reactions', zh: 'MCR1_4、NDM1_4、KPC2_4 終點高於無觸發的反應' }, tone: 'g' },
      { l: { en: 'Three enzymes, paired, on paper', zh: '三個酵素、配對、上紙' },
        s: { en: 'GusA, XylE, LacZ tested alone, then dried on Whatman; colour at 0 µM too', zh: 'GusA、XylE、LacZ 先單獨測，再乾燥到濾紙；0 µM 也顯色' }, tone: 'r' }
    ],
    dry: [
      { l: { en: 'Reproduce the published grammar', zh: '先重現已發表的序列文法' },
        s: { en: 'The Green 2014 36 nt architecture, checked against four published sequences', zh: 'Green 2014 的 36 nt 架構，用四條已發表序列核對' } },
      { l: { en: 'Fix the ambiguous scoring', zh: '修掉含糊的評分方向' },
        s: { en: 'Equation 5 ranks two ways; weights kept, both terms turned into deficits', zh: '原式 5 指向兩個方向；保留權重，兩項改寫成缺額' }, tone: 'a' },
      { l: { en: 'Score every window in NUPACK', zh: '在 NUPACK 中為每個視窗打分' },
        s: { en: 'NUPACK 4.1.0.1 at 37 °C, 100 nM: accessibility, OFF defect, cross-gene proxy', zh: 'NUPACK 4.1.0.1、37 °C、100 nM：可及性、OFF 缺陷、跨基因代理值' } },
      { l: { en: 'Date the coverage check', zh: '替覆蓋率檢查標上日期' },
        s: { en: 'AMRFinderPlus 2026-08-07.1: 98/98, 295/295 and 37/37 for the primaries', zh: 'AMRFinderPlus 2026-08-07.1：主要設計 98/98、295/295、37/37' } },
      { l: { en: 'Read the paper, refuse the LOD', zh: '讀紙上的顏色，拒絕談極限' },
        s: { en: 'ARGUS: sRGB to Lab against same-row controls, then ΔE00 — and not an LOD', zh: 'ARGUS：sRGB 轉 Lab，比同列對照，再算 ΔE00，但不是極限' }, tone: 't' }
    ],
    links: [
      { w: 3, d: 2, l: { en: 'the redesign came from the model', zh: '重新設計是從模型來的' }, up: true },
      { w: 5, d: 4, l: { en: 'the photographs are what ARGUS reads', zh: '照片就是 ARGUS 要讀的東西' } }
    ]
  };

  PD.pages['hs-ghcis'] = {
    label: { en: 'GHCIS', zh: 'GHCIS' },
    title: { en: 'GHCIS — toehold AMR paper test', zh: 'GHCIS — toehold 抗藥性基因紙上檢測' },
    render: function (h) {
      var t = team('ghcis');
      var out = h.teamhero(t, {
        h1: {
          en: 'Three genes, three colours on filter paper — and a closing sentence that says the results ==do not yet establish a validated detection limit==.',
          zh: '三個基因、濾紙上三種顏色——而結尾那句話說，這些結果==還沒有建立起一個經過驗證的偵測極限==。'
        },
        lede: {
          en: 'The wiki draws a line down the middle of its own workflow: the trigger-to-colour half has data, the sample-to-trigger half does not, and the team never blurs the two. Their results page ends by saying so. What sits on either side of that line: a paper-based, cell-free toehold sensor for MCR1 (colistin) and the carbapenemases NDM1 and KPC2, framed with the WHO One Health approach, because antibiotic resistance genes travel through livestock, agricultural and healthcare wastewater. The planned workflow is isothermal RPA amplification, then toehold switches, then an enzyme colour readout on paper. The masthead calls the project HoldeX, under the tagline "Your toehold to the future of biology"; across the project pages themselves it is described plainly as a screening platform, so we refer to it here as the toehold AMR paper test.',
          zh: '這個 wiki 在自己的流程正中間畫了一條線：觸發 RNA 到顏色那一半有數據，水樣到觸發 RNA 那一半沒有，而他們從不把兩者混在一起講。他們的結果頁就是這樣收尾的。線的兩側各是什麼：一個紙基、無細胞的 toehold 感測系統，針對 MCR1（colistin）與兩個碳青黴烯酶基因 NDM1 與 KPC2，並以世界衛生組織的 One Health 框架來談——因為抗藥性基因會隨著畜牧、農業與醫療廢水移動。預定流程是恆溫 RPA 擴增、再經 toehold 開關、最後在紙上以酵素顯色。網站標頭把這個專案叫做 HoldeX，標語是「Your toehold to the future of biology」；而在各個內容頁上，他們只是平實地稱它為一套篩檢平台，所以我們在這裡稱它為 toehold 抗藥性基因紙上檢測。'
        },
        chips: [
          { t: { en: 'Toehold switches on paper', zh: '紙上的 toehold 開關' }, k: 'b' },
          { t: { en: 'MCR1 · NDM1 · KPC2', zh: 'MCR1 · NDM1 · KPC2' }, k: 'v' },
          { t: { en: 'ARGUS colour software', zh: 'ARGUS 顏色判讀軟體' }, k: 't' },
          { t: { en: 'Cell-free, no live cells in the test', zh: '無細胞，檢測中沒有活細胞' }, k: 'g' },
          { t: { en: 'Best Part Collection + Best Software', zh: '最佳元件集＋最佳軟體' }, k: 'a' }
        ],
        stats: [
          { v: '9 → 3', l: { en: 'First-round switches screened, and how many survived the redesign', zh: '第一輪篩選的開關數，以及重新設計後留下幾個' } },
          { v: '10 → 3 days', l: { en: 'Synthesis turnaround, after ordering inserts as PCR products with vector-homology ends', zh: '把插入片段改訂成兩端帶載體同源序列的 PCR 產物後，合成等待時間的變化' } },
          { v: '0, 3, 5 µM', l: { en: 'The only trigger RNA concentrations behind every colour claim on the page', zh: '頁面上每一個顏色主張背後，唯一的三個觸發 RNA 濃度' } },
          { v: '5 s', l: { en: 'Colour after mixing enzyme with substrate — the catalytic step, not the workflow', zh: '酵素與底物混合後顯色的時間——是催化那一步，不是整條流程' } },
          { v: '52 / 9', l: { en: 'Part entries in the development inventory, and parts in the final collection', zh: '開發清單中的元件條目數，以及最終元件集中的元件數' } },
          { v: '98 / 295 / 37', l: { en: 'AMRFinderPlus family sequences matched exactly by the three primary designs', zh: '三個主要設計在 AMRFinderPlus 家族序列中完全比中的數量' } }
        ]
      });

      out += h.toc([
        { id: 'g-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'g-halves', t: { en: 'The two halves', zh: '兩個半邊' } },
        { id: 'g-round', t: { en: 'Round one failed', zh: '第一輪失敗了' } },
        { id: 'g-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'g-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'g-dry', t: { en: 'Dry lab and ARGUS', zh: '乾式流程與 ARGUS' } },
        { id: 'g-hedge', t: { en: 'Hedged language', zh: '保留語氣' } },
        { id: 'g-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'g-copy', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'g-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Resistance moves through water, so take the test to the water', zh: '抗藥性是順著水移動的，那就把檢測帶到水邊' },
        lede: {
          en: 'Clinical surveillance sees patients. It does not see the stormwater drain, the farm run-off or the hospital outfall — and those are where the team looked.',
          zh: '臨床監測看得到病人，卻看不到雨水排放口、農場逕流與醫院排水——而那正是這支隊伍要看的地方。'
        },
        body:
          h.p({
            en: 'Their framing is the **One Health** approach, which treats human, animal and environmental health as one system; they cite the United Nations Environment Programme on environmental monitoring, and a two-year urban-beach study in which several resistance genes rose after stormwater and sewer overflow events. They also name the kind of work their tool is *not* competing with: a 2025 One Health study in Dengfeng, Henan, that used metagenomic sequencing across **592 samples** collected over several months. Their stated gap is the complementary one — **finer-scale, routine monitoring** within specific areas, closer to the sampling site.',
            zh: '他們的框架是 **One Health**，也就是把人、動物與環境的健康當成一個系統；他們引用聯合國環境規劃署關於環境監測的報告，也引用一項為期兩年的城市海灘研究——在暴雨與污水溢流事件之後，數個抗藥性基因的量上升。他們也明白指出自己這套工具*不是*要去競爭的那一類工作：2025 年河南登封的一項 One Health 研究，用總體基因體定序處理了數個月間採集的 **592 個樣品**。他們指出的缺口是互補性的那一個——在特定區域內、更貼近採樣點的**更細尺度、常態化監測**。'
          }) +
          h.p({
            en: 'The initial target panel is **blaNDM-1**, **blaKPC-2** and **mcr-1** — two carbapenemases and the colistin-resistance gene — and the description page says in the same breath what the panel is not: *"This panel gives the prototype a defined scope; it does not represent the full environmental resistome."*',
            zh: '初始目標組是 **blaNDM-1**、**blaKPC-2** 與 **mcr-1**——兩個碳青黴烯酶基因，加上與 colistin 抗性相關的基因——而描述頁在同一段裡就說清楚這個組合「不是」什麼：*「這個組合給原型一個明確的範圍；它並不代表整個環境抗性基因體。」*'
          }) +
          h.h3({ en: 'Why paper, and why cell-free', zh: '為什麼用紙，為什麼用無細胞' }) +
          h.kv([
            [{ en: 'Visible output', zh: '看得見的輸出' },
             { en: 'An activated switch expresses a colour-producing enzyme, so a reading needs no fluorescence detector in the field.', zh: '開關被打開後會表達一個能產生顏色的酵素，所以在現場讀值不需要螢光偵測儀。' }],
            [{ en: 'No live engineered cells', zh: '檢測中沒有活的改造細胞' },
             { en: 'Cell-free protein synthesis removes the possibility of engineered-organism growth after an accidental release; the safety page adds that the absence of viable cells in the reagents is confirmed through supplier documentation.', zh: '無細胞蛋白合成排除了意外釋出後改造生物生長的可能；安全頁另外寫明，試劑中不含活細胞這件事是透過供應商文件確認的。' }],
            [{ en: 'Storable on paper', zh: '可以存放在紙上' },
             { en: 'Freeze-dried circuits on paper supports, rehydrated to start — with their own caveat that *"our own formulation, storage stability, and reporter compatibility require validation."*', zh: '把線路凍乾在紙基載體上，加水即啟動——但他們自己加了一句：*「我們自己的配方、儲存穩定性與報告子相容性都還需要驗證。」*' }],
            [{ en: 'Several channels at once', zh: '可以同時開幾個通道' },
             { en: 'Orthogonal switch designs let spatially separated reactions on one card carry different gene targets.', zh: '正交的開關設計，讓同一張卡片上空間分開的反應可以各自對應不同的基因目標。' }]
          ]) +
          h.take({ en: 'The sentence that decided the platform', zh: '決定了這個平台的那句話' }, {
            en: 'They compared toehold switches against CRISPR-based detection in a six-row table, then wrote down the actual reason for the choice: *"Our choice prioritizes a lightweight system format, biosafety considerations, and practical field deployment, rather than an assumption that toehold switches are more sensitive than CRISPR-based assays."* A high-school team declining to claim the better method, when a sentence of silence would have implied it, is the tone the whole wiki keeps.',
            zh: '他們用一張六列的表把 toehold 開關與 CRISPR 檢測並排比較，然後把選擇的真正理由寫下來：*「我們的選擇優先考慮的是輕量化的系統形式、生物安全考量與實地部署的可行性，而不是假設 toehold 開關比 CRISPR 類方法更靈敏。」*一支高中隊伍在「只要不說，別人就會以為」的情況下，仍然拒絕宣稱自己的方法更好——這就是整個 wiki 的語氣。'
          })
      });

      /* ---------------- the two halves ---------------- */
      out += h.sec({
        id: 'g-halves',
        kick: { en: 'The honest centre', zh: '誠實的核心' },
        h2: { en: 'Half of this workflow has data. The other half is design and hardware', zh: '這條流程有一半有數據，另一半是設計與硬體' },
        lede: {
          en: 'The proposed workflow runs water sample → DNA preparation → RPA → T7 transcription → toehold activation → reporter expression → colour. The experiments start at the fourth arrow.',
          zh: '預定流程是：水樣→DNA 製備→RPA→T7 轉錄→toehold 活化→報告子表達→顏色。而實驗是從第四個箭頭才開始的。'
        },
        body:
          h.flow({
            title: { en: 'The proposed workflow, marked by what stands behind each stage', zh: '預定流程，並標出每個階段背後有什麼' },
            sub: { en: 'Grey stages are design text. The amber stage has hardware and shared CAD files but no experiment. Green and teal stages have results.', zh: '灰色階段只有設計文字。琥珀色階段有硬體與公開的 CAD 檔，但沒有實驗。綠色與青色階段有結果。' },
            stages: [
              { label: { en: 'Water sample', zh: '水樣' }, sub: { en: 'Pretreatment and DNA recovery', zh: '前處理與 DNA 回收' }, tone: 'n',
                items: [{ en: 'design text only', zh: '只有設計文字' }] },
              { label: { en: 'RPA', zh: 'RPA' }, sub: { en: 'Isothermal amplification at 37 °C', zh: '在 37 °C 下的恆溫擴增' }, tone: 'a',
                items: [{ en: 'hardware, no data', zh: '有硬體，無數據' }] },
              { label: { en: 'T7 transcription', zh: 'T7 轉錄' }, sub: { en: 'Amplified DNA to trigger RNA', zh: '把擴增的 DNA 轉成觸發 RNA' }, tone: 'n',
                items: [{ en: 'design text only', zh: '只有設計文字' }] },
              { label: { en: 'Toehold activation', zh: 'toehold 活化' }, sub: { en: 'Trigger RNA opens the hairpin', zh: '觸發 RNA 打開髮夾結構' }, tone: 'g',
                items: [{ en: 'two GFP rounds', zh: '兩輪 GFP 篩選' }] },
              { label: { en: 'Reporter expression', zh: '報告子表達' }, sub: { en: 'Enzyme made, substrate turned', zh: '做出酵素，轉化底物' }, tone: 'g',
                items: [{ en: 'SDS-PAGE, colour', zh: 'SDS-PAGE、顯色' }] },
              { label: { en: 'Colour readout', zh: '顏色判讀' }, sub: { en: 'On paper, then through ARGUS', zh: '先在紙上，再經過 ARGUS' }, tone: 't',
                items: [{ en: '0, 3 and 5 µM', zh: '0、3、5 µM' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Description, Results, Engineering and Hardware pages.', zh: '由我們依該隊 Description、Results、Engineering 與 Hardware 頁繪製。' }
          }) +
          h.warn({
            en: '**RPA appears on their description, hardware and contribution pages, and not in the results.** The hardware exists: a USD 22.19 temperature controller holding 37.0–38.0 °C, a printed RPA tube holder, STEP and STL files shared for reuse. What does not exist is an amplification experiment. So the honest reading of this project is **a sensing-and-readout module that works on synthetic trigger RNA, plus a designed and partly built front end that has never been run into it.** The team reads it the same way: the results page says the experiments *"focused on the sensing and reporter modules."*',
            zh: '**RPA 出現在他們的描述、硬體與貢獻頁，而不在結果頁。**硬體是真的存在的：一台 22.19 美元的控溫裝置，維持 37.0–38.0 °C，加上列印的 RPA 試管座，以及公開可重用的 STEP 與 STL 檔。不存在的是一個擴增實驗。所以這個專案誠實的讀法是：**一個在合成觸發 RNA 上可運作的感測與判讀模組，再加上一個已設計、也部分做出來、但從未真正接上去跑過的前端。**這支隊伍自己也是這樣讀的：結果頁寫著，這些實驗*「聚焦在感測與報告子模組」*。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Half of the workflow', zh: '流程的一半' }, w: '30%' },
              { t: { en: 'What actually stands behind it', zh: '背後真正有什麼' } }
            ],
            rows: [
              [{ en: '**Sample → RPA → trigger RNA**', zh: '**水樣→RPA→觸發 RNA**' },
               { en: 'Design text on the description page; a temperature controller, an illumination enclosure and a printed RPA tube holder on the hardware page; STEP and STL files on the contribution page. **No RPA data, no T7 transcription data, no environmental water sample.** The hardware page lists "characterize temperature at the sample positions" as future work, so even the 37.0–38.0 °C range is called **a tuning target.**', zh: '描述頁上的設計文字；硬體頁上的控溫裝置、照明外殼與列印的 RPA 試管座；貢獻頁上的 STEP 與 STL 檔。**沒有 RPA 數據、沒有 T7 轉錄數據、沒有環境水樣。**硬體頁把「量測樣品位置上的溫度」列為未來工作，所以連 37.0–38.0 °C 這個範圍，他們也只稱之為**一個調校目標。**' }],
              [{ en: '**Trigger RNA → switch → colour on paper**', zh: '**觸發 RNA→開關→紙上顏色**' },
               { en: 'Two rounds of cell-free GFP screening with and without trigger RNA; three reporter enzymes cloned, expressed, run on SDS-PAGE and tested against their substrates; three integrated switch–enzyme plasmids Sanger-verified; paper reactions at 0, 3 and 5 µM trigger RNA; ARGUS colour analysis of the resulting photographs. **This is the half that carries the award.**', zh: '兩輪有無觸發 RNA 的無細胞 GFP 篩選；三個報告酵素完成選殖、表達、跑 SDS-PAGE 並與底物測試；三個整合的開關–酵素質體經 Sanger 定序確認；紙上反應在 0、3、5 µM 觸發 RNA 下進行；再用 ARGUS 對照片做顏色分析。**這一半才是撐起獎項的部分。**' }]
            ],
            min: 720,
            source: { en: 'Our table. Every item in it is read from the team\'s own pages.', zh: '表格是我們做的。裡面每一項都讀自該隊自己的頁面。' }
          })
      });

      /* ---------------- round one ---------------- */
      out += h.sec({
        id: 'g-round',
        kick: { en: 'The failed round', zh: '那一輪失敗' },
        h2: { en: 'Nine designs gave no separation, and the screen is published anyway', zh: '九個設計都分不開，而那次篩選仍然被公開了' },
        lede: {
          en: 'The easiest edit in all of iGEM is to delete the round that did not work. They kept it, with the plots, the reasoning and the limit of that reasoning.',
          zh: '在整個 iGEM 裡，最容易的一個修改就是把沒成功的那一輪刪掉。他們留了下來，連圖、連推論、連那個推論的界限都留著。'
        },
        body:
          h.p({
            en: 'Three switches per gene, nine in all: MCR1-Toehold1–3, NDM1-Toehold1–3, KPC2-Toehold1–3, screened with Python scripts and ViennaRNA, each placed upstream of **sfGFP in pJL1** so that the hairpin sequesters the ribosome-binding site and start codon until the matching trigger RNA arrives. Inserts of **about 134 bp** on the gel, cloned by homologous recombination, transformed into **DH5α**, checked by colony PCR and **confirmed by Sanger sequencing with T7 primers.** All nine were built correctly. None of them worked.',
            zh: '每個基因三個開關，總共九個：MCR1-Toehold1–3、NDM1-Toehold1–3、KPC2-Toehold1–3，用 Python 腳本與 ViennaRNA 篩選，各自接在 **pJL1 的 sfGFP 上游**，讓髮夾把核糖體結合位與起始密碼子藏起來，直到對應的觸發 RNA 出現。膠上插入片段**約 134 bp**，以同源重組選殖、轉形進 **DH5α**，用菌落 PCR 檢查，並**以 T7 引子經 Sanger 定序確認。**九個都正確地建出來了。但沒有一個有用。'
          }) +
          h.ul([
            { en: '**They proved the platform before blaming the parts.** Before any switch was judged, the cell-free system itself was tested with the positive control **pJL1–T7–GFP**: fluorescence generally increased over time across the tested plasmid inputs, including **1 µL at 2 ng/µL**. So a flat switch trace afterwards could not be written off as a dead extract.', zh: '**在責怪元件之前，他們先證明了平台。**在評判任何開關之前，無細胞系統本身先用陽性對照 **pJL1–T7–GFP** 測過：在測過的質體加入量下，螢光隨時間普遍上升，包括 **1 µL、2 ng/µL** 的條件。所以之後開關的平坦曲線，就不能被推給「萃取液死了」。' },
            { en: '**The screen itself:** all nine constructs run with and without their corresponding trigger RNA, in a nominal 20 µL reaction, held at **37 °C** in a preheated plate reader, GFP read at **527 nm every 15 min for 1 h.**', zh: '**篩選本身：**九個構築都在有與沒有對應觸發 RNA 的條件下進行，名目 20 µL 反應，在預熱的微孔盤讀儀中維持 **37 °C**，GFP 於 **527 nm 每 15 分鐘讀一次，共 1 小時。**' },
            { en: '**The result, as written:** *"Most first-round designs showed no sustained increase in fluorescence. Although NDM1_3 produced an increasing signal, the reactions with and without trigger RNA followed similar trajectories. None of these designs provided sufficient separation between the two conditions to justify selection for the next stage."*', zh: '**結果，照他們寫的樣子：***「多數第一輪設計沒有出現持續上升的螢光。NDM1_3 雖然產生上升訊號，但有與沒有觸發 RNA 的反應走的軌跡相似。這些設計都沒有在兩個條件之間提供足夠的分離度，不足以被選入下一階段。」*' },
            { en: '**NDM1_3 is the useful failure**, and the engineering page says why: it supported GFP production, *"but its signal did not distinguish the presence of trigger RNA."* A rising line is not an activated switch. Any team that reported the rising line alone would have reported a working sensor.', zh: '**NDM1_3 是那個有用的失敗**，而工程頁說出了理由：它支持 GFP 的生產，*「但它的訊號並不能區分觸發 RNA 是否存在。」*一條上升的曲線不等於一個被打開的開關。任何只報告那條上升曲線的隊伍，都會等於報告了一個可用的感測器。' },
            { en: '**And the explanation is labelled as an inference.** They re-examined the predicted RNA secondary structures and found that the hairpin and the region around the RBS *"appeared to impose structural constraints that might hinder trigger-mediated opening"* — followed immediately by *"although the structural explanation was not directly established by these fluorescence measurements."* The structure story was good enough to redesign on, and they say it was not proven.', zh: '**而那個解釋被標記成一個推論。**他們重新檢視預測的 RNA 二級結構，發現髮夾與核糖體結合位附近*「似乎造成了某些結構限制，可能阻礙觸發 RNA 介導的開啟」*——緊接著就是*「雖然這個結構上的解釋，並沒有被這些螢光量測直接證實。」*那個結構說法足以拿來重新設計，而他們說它沒有被證明。' }
          ]) +
          h.take({ en: 'The second round exists only because the first one was taken seriously', zh: '第二輪之所以存在，正是因為第一輪被認真對待' }, {
            en: 'A clean first round tells a judge that the design method was lucky. **A failed first round, published with its plots, its inference and the stated limit of that inference, tells a judge the method works** — because it was exercised on a negative result, and the negative result changed what the team did next. The second round exists only because the first one was taken seriously. Across the High School division, this is the clearest case of a failure doing load-bearing work.',
            zh: '一個乾淨漂亮的第一輪，只告訴評審「這次設計運氣不錯」。**一個失敗的第一輪，連圖、連推論、連那個推論被宣告的界限一起公開，才告訴評審這套方法是有效的**——因為它在一個負面結果上被操作過，而那個負面結果真的改變了接下來的做法。第二輪之所以存在，正是因為第一輪被認真對待。在整個高中組裡，這是「失敗真的承重」最清楚的一個例子。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'g-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The bench failed, the model redesigned, the bench rebuilt', zh: '實驗檯失敗、模型重新設計、實驗檯再建一次' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'GHCIS: two lanes, one handoff in each direction', zh: 'GHCIS：兩條泳道，每個方向各一次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Results, Engineering, Model, Software and Hardware pages.', zh: '由我們依該隊 Results、Engineering、Model、Software 與 Hardware 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'g-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Eight steps, in the order they actually happened', zh: '八個步驟，照它們真正發生的順序' },
        body:
          h.phases([
            { h: { en: 'Design nine switches, three per gene', zh: '設計九個開關，每個基因三個' },
              p: { en: 'Candidate switch DNA sequences and their corresponding trigger RNAs screened with Python scripts and ViennaRNA, then a preliminary look at the switch DNA and its transcribed single-stranded RNA in SnapGene.', zh: '候選開關 DNA 序列與對應的觸發 RNA 以 Python 腳本與 ViennaRNA 篩選，再用 SnapGene 初步看過開關 DNA 與其轉錄出的單股 RNA。' },
              items: [
                { en: 'Each switch sits upstream of **sfGFP in pJL1**, designed to sequester the **RBS and start codon in a hairpin** so that translation is limited until the matching trigger binds.', zh: '每個開關都位於 **pJL1 中 sfGFP 的上游**，設計上把**核糖體結合位與起始密碼子藏進髮夾**，讓轉譯在對應觸發 RNA 結合之前受到限制。' },
                { en: 'Reporter chosen for the measurement, not the product: *"GFP provided a measurable output for comparing candidate switches before introducing an enzymatic color reaction."*', zh: '報告子是為了量測而選的，不是為了產品：*「GFP 提供一個可量測的輸出，讓我們在引入酵素顯色反應之前先比較候選開關。」*' }
              ] },
            { h: { en: 'Validate the cell-free system before judging anything', zh: '在評判任何東西之前先驗證無細胞系統' },
              p: { en: 'An *E. coli* cell-free protein synthesis system, tested with the positive-control plasmid pJL1–T7–GFP in a nominal 50 µL reaction before a single switch was screened.', zh: '一套大腸桿菌無細胞蛋白合成系統，在任何一個開關被篩選之前，先用陽性對照質體 pJL1–T7–GFP 在名目 50 µL 反應中測試過。' },
              items: [
                { en: 'Fluorescence generally increased over time across the tested plasmid input volumes, **including 1 µL at 2 ng/µL** — a low input that matters, because it shows the system is not only working but working at the amount a switch assay would use.', zh: '在測過的質體加入體積下，螢光隨時間普遍上升，**包括 1 µL、2 ng/µL** 的條件——這個低加入量很重要，因為它顯示系統不只是能動，而且在開關試驗會用到的量下也能動。' }
              ],
              done: { en: 'A platform you can blame the parts against, rather than the other way round.', zh: '一個可以用來反過來責怪元件的平台，而不是讓元件來背平台的鍋。' } },
            { h: { en: 'Screen round one, and get nothing', zh: '跑第一輪篩選，什麼也沒得到' },
              p: { en: 'All nine constructs, with and without their corresponding trigger RNA, nominal 20 µL reactions at 37 °C, GFP at 527 nm every 15 min for 1 h.', zh: '九個構築全部在有與沒有對應觸發 RNA 的條件下跑，名目 20 µL 反應、37 °C，GFP 於 527 nm 每 15 分鐘讀一次，共 1 小時。' },
              items: [
                { en: 'Most designs showed **no sustained increase**. NDM1_3 rose, **with and without trigger**. No design gave enough separation to go forward.', zh: '多數設計**沒有持續上升**。NDM1_3 上升了，但**有無觸發 RNA 都上升**。沒有任何設計提供足夠的分離度可以往下走。' },
                { en: 'The reaction table is published as the **"reported composition" of a "nominal" 20 µL reaction** — plasmid at 30 ng/µL, trigger RNA at 30 µM, cell extract 6.66 µL, buffer 10.34 µL, RNase inhibitor 0.1 µL.', zh: '反應表是以**「名目」20 µL 反應的「所報告的」組成**公開的——質體 30 ng/µL、觸發 RNA 30 µM、細胞萃取液 6.66 µL、緩衝液 10.34 µL、RNase 抑制劑 0.1 µL。' }
              ] },
            { h: { en: 'Redesign, and change how the DNA is bought', zh: '重新設計，並改變 DNA 的取得方式' },
              p: { en: 'The revised designs came from the dry-lab workflow. The second change was procurement, and it is the kind of thing teams rarely write down.', zh: '修訂後的設計來自乾式實驗的流程。第二個改變是採購方式，而這類事情很少有隊伍會寫下來。' },
              items: [
                { en: 'Each short insert was ordered as a **synthetic PCR product with vector-homology sequences at both ends**, allowing direct assembly with the linearised vector. **Synthesis turnaround fell from 10 days to 3 days.**', zh: '每個短插入片段都改訂成**兩端帶有載體同源序列的合成 PCR 產物**，可以直接與線性化載體組裝。**合成等待時間從 10 天降到 3 天。**' },
                { en: 'In a competition season, seven days per design round is the difference between two rounds and one. **This is a schedule decision published as a method.**', zh: '在一個競賽季裡，每一輪設計省下七天，就是「兩輪」與「一輪」的差別。**這是一個被當成方法公開的時程決定。**' }
              ] },
            { h: { en: 'Round two: three switches that separate', zh: '第二輪：三個分得開的開關' },
              p: { en: 'MCR1_4, NDM1_4 and KPC2_4, assembled by homologous recombination, transformed, expanded and verified by Sanger sequencing at the intended insertion positions.', zh: 'MCR1_4、NDM1_4 與 KPC2_4 以同源重組組裝、轉形、擴培，並以 Sanger 定序確認插入在預定位置。' },
              items: [
                { en: 'Same nominal 20 µL format, monitored for **1.5 h**, with blank subtraction. All three showed **increasing fluorescence with their trigger and a higher endpoint signal than without it.**', zh: '同樣的名目 20 µL 形式，監測 **1.5 小時**，並做空白扣除。三個都顯示**在有對應觸發 RNA 時螢光上升，且終點訊號高於沒有觸發 RNA 的反應。**' },
                { en: 'What they called it: *"This was a selection for further development: the assay did not establish a detection limit or performance in environmental samples."*', zh: '他們怎麼稱它：*「這是一次為了後續開發而做的挑選：這個試驗並沒有建立偵測極限，也沒有建立在環境樣品中的表現。」*' }
              ],
              done: { en: 'Three switches good enough to carry a reporter — described as exactly that, and no more.', zh: '三個好到足以帶著一個報告子的開關——而且就只被描述成這樣，沒有更多。' } },
            { h: { en: 'Build the three colour reporters on their own', zh: '把三個顏色報告子單獨做出來' },
              p: { en: 'lacZ (about 3,100 bp), xylE (985 bp) and gusA (1,850 bp) amplified and assembled into **pET-21a** by homologous recombination, cloned in DH5α, colony-PCR screened, Sanger-verified, then moved into **BL21(DE3)** for expression.', zh: 'lacZ（約 3,100 bp）、xylE（985 bp）與 gusA（1,850 bp）經擴增並以同源重組組裝進 **pET-21a**，在 DH5α 中選殖、菌落 PCR 篩選、Sanger 定序確認，再轉進 **BL21(DE3)** 表達。' },
              items: [
                { en: 'Grown to **OD₆₀₀ about 0.6**, induced with **0.5 mM IPTG**, incubated overnight at **20–25 °C**. SDS-PAGE gave bands near **GusA 68.2 kDa, LacZ 116 kDa and XylE 34.5 kDa, including bands in the soluble fractions** — which is the band that matters for an enzyme you intend to use.', zh: '培養到 **OD₆₀₀ 約 0.6**，以 **0.5 mM IPTG** 誘導，在 **20–25 °C** 隔夜培養。SDS-PAGE 在 **GusA 68.2 kDa、LacZ 116 kDa、XylE 34.5 kDa** 附近出現帶，**包括可溶性區分層的帶**——而對一個你打算拿來用的酵素來說，那才是重要的那條帶。' },
                { en: '**LacZ with CPRG:** a visible change with **10 µL of enzyme preparation at 0.25 mM CPRG**, across a 0 / 0.25 / 0.5 / 1 mM series.', zh: '**LacZ 配 CPRG：**在 0／0.25／0.5／1 mM 的梯度中，以 **10 µL 酵素製備物、0.25 mM CPRG** 得到可見變化。' },
                { en: '**XylE with catechol:** a bright yellow signal at **0.25 mM**, with the note that **substrate oxidation had to be controlled** during the assay.', zh: '**XylE 配 catechol：**在 **0.25 mM** 下得到明亮的黃色訊號，並註明試驗過程中**必須控制底物的氧化**。' },
                { en: '**GusA with X-Glc:** blue at **1 mM**, but the signal **fell at an input of 50 µL.** Rapid substrate depletion was offered as a possible explanation, *"although this was not directly tested."* The engineering page draws the lesson: more enzyme does not simply mean more signal.', zh: '**GusA 配 X-Glc：**在 **1 mM** 下呈藍色，但訊號在**加入量 50 µL 時下降。**他們提出底物快速耗盡作為一個可能的解釋，*「雖然這一點並沒有被直接測試。」*工程頁把教訓寫出來：加更多酵素，並不就等於更強的訊號。' },
                { en: 'Colour appeared **within 5 s** of mixing enzyme with substrate — and they immediately scope it: *"This timing describes the catalytic color reaction after enzyme production, rather than the duration of the complete sensing workflow."*', zh: '酵素與底物混合後**在 5 秒內**出現顏色——而他們立刻界定範圍：*「這個時間描述的是酵素產生之後的催化顯色反應，而不是整條感測流程的時間長度。」*' }
              ] },
            { h: { en: 'Integrate: one switch, one enzyme, three plasmids', zh: '整合：一個開關配一個酵素，共三個質體' },
              p: { en: 'The selected switches shared flanking sequences, so one assembly strategy covered all three: linearised pJL1–MCR1_4, pJL1–NDM1_4 and pJL1–KPC2_4 as backbones, enzyme genes amplified with matching homology regions.', zh: '被選中的開關有共同的側翼序列，所以一套組裝策略就能涵蓋三個：以線性化的 pJL1–MCR1_4、pJL1–NDM1_4、pJL1–KPC2_4 為骨架，酵素基因則帶上相對應的同源區擴增。' },
              items: [
                { en: '**MCR1_4–gusA** (intended blue), **NDM1_4–xylE** (yellow) and **KPC2_4–lacZ** (yellow to purple), each verified by sequencing.', zh: '**MCR1_4–gusA**（預期藍色）、**NDM1_4–xylE**（黃色）與 **KPC2_4–lacZ**（黃轉紫），各自經定序確認。' },
                { en: 'The pairing is also a design claim: each selected switch keeps **the same target recognition sequence in its GFP and enzyme versions**, so another team can characterise with fluorescence and read out with colour. That is what the nine-part collection is for.', zh: '這個配對本身也是一個設計主張：每個被選中的開關在 GFP 版與酵素版中都保留**同一段目標辨識序列**，所以別的隊伍可以用螢光做特性化、用顏色做判讀。那就是那個九件元件集存在的目的。' }
              ] },
            { h: { en: 'Dry it onto paper, and report the background', zh: '乾燥到紙上，並報告背景' },
              p: { en: 'The integrated plasmids and the cell-free reagents were deposited on **Whatman filter paper** by a multistep drying procedure; aqueous trigger RNA and the matching substrates were then added in sequence.', zh: '整合質體與無細胞試劑以多步乾燥程序沉積在 **Whatman 濾紙**上；接著依序加入含觸發 RNA 的水溶液與對應底物。' },
              items: [
                { en: 'All three reporter systems produced visible colour on paper. **Some background coloration was present without trigger RNA (0 µM).** The colours became more distinguishable at **3 and 5 µM.**', zh: '三個報告系統都在紙上產生可見的顏色。**在沒有觸發 RNA（0 µM）時也存在一些背景顏色。**在 **3 與 5 µM** 時顏色變得更容易區分。' },
                { en: 'The engineering page turns that into the next problem rather than a footnote: *"color formation alone was insufficient for a reliable positive call. The reaction had to be interpreted relative to its controls."*', zh: '工程頁把這件事變成下一個問題，而不是一個註腳：*「單靠顏色的生成，不足以做出可靠的陽性判定。反應必須相對於它的對照來解讀。」*' },
                { en: 'The reactions were also placed in the prototype sample holder and photographed, which is where the software takes over.', zh: '這些反應也被放進原型樣品座中拍照，而軟體就是從這裡接手的。' }
              ],
              done: { en: 'A paper prototype that shows colour, with its own background printed next to it.', zh: '一個會顯色的紙上原型，而它的背景就印在旁邊。' } }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'g-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'A redesign in NUPACK, and software that refuses to say "detection limit"', zh: '在 NUPACK 裡重新設計，以及一套拒絕說「偵測極限」的軟體' },
        lede: {
          en: 'Two dry-lab jobs, at the two ends of the project: choose the sequences that failed in round one, and read the colours that came out of round two.',
          zh: '乾式實驗有兩份工作，分別在專案的兩端：挑出第一輪失敗的那些序列的替代品，以及讀出第二輪做出來的顏色。'
        },
        body:
          h.h3({ en: 'Reproduce the published method before trusting your own', zh: '先重現別人已發表的方法，再相信自己的' }) +
          h.p({
            en: 'The first round used Python scripts and **ViennaRNA**. The redesign used a locally installed **NUPACK 4.1.0.1**, and started by rebuilding the sequence grammar from Table S4 of Green et al. 2014: a **126 nt switch** made of a GGG leader, a 30 nt exposed toehold, a 6 bp invasion region, a stem-loop holding the RBS and AUG, a 9 nt refolding module, a 21 nt linker and the first 9 nt of GFP. Then the check that earns the rest: *"We checked the construction formula against four published sequences, mCherry B, mCherry C, cat and aadA, and obtained exact sequence matches for all four."*',
            zh: '第一輪用的是 Python 腳本與 **ViennaRNA**。重新設計用的是本機安裝的 **NUPACK 4.1.0.1**，而且一開始先把 Green 等人 2014 年補充資料表 S4 的序列文法重建出來：一個 **126 nt 的開關**，由 GGG 前導序列、30 nt 外露 toehold、6 bp 入侵區、含核糖體結合位與 AUG 的莖環、9 nt 重折疊模組、21 nt 連接子與 GFP 的前 9 nt 組成。接著是那個讓後面一切站得住腳的檢查：*「我們用四條已發表的序列——mCherry B、mCherry C、cat 與 aadA——核對這個構築公式，四條都得到完全一致的序列。」*'
          }) +
          h.warn({
            en: '**And then they corrected the paper.** *"Equation 5 in the original supplementary information describes higher local single-strandedness as preferable while also specifying that the total score is ranked from low to high. These two statements use inconsistent scoring directions."* Their fix is printed, not hidden: keep the published weights of **5, 4 and 3**, convert both single-strandedness terms into deficits, and rank lower values as better — **Penalty = 5 × (1 − target single-strandedness) + 4 × (1 − toehold single-strandedness) + 3 × sensor defect.** A high-school team found an ambiguity in a *Cell* supplement, resolved it explicitly, and showed its arithmetic so you can disagree with the resolution.',
            zh: '**然後他們修正了那篇論文。***「原始補充資料中的式 5 把較高的局部單股性描述為較佳，同時又規定總分由低到高排序。這兩個陳述使用了彼此矛盾的評分方向。」*他們的處理是印出來的，不是藏起來的：保留已發表的 **5、4、3** 權重，把兩個單股性項都改寫成「缺額」，並以較低的值為較佳——**懲罰值 = 5 ×（1 − 目標單股性）+ 4 ×（1 − toehold 單股性）+ 3 × 感測器構形缺陷。**一支高中隊伍在一篇 *Cell* 的補充資料裡找到一處含糊、明確地做了裁斷，並把算式攤出來，讓你可以不同意那個裁斷。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'conservation', zh: '保守性' }, k: 'g' }],
              h: { en: 'Coverage, with the database dated', zh: '覆蓋率，而且標上資料庫日期' },
              p: { en: 'Screened against NCBI AMRFinderPlus release **2026-08-07.1**: the primary designs match **98/98 blaNDM, 295/295 blaKPC and 37/37 mcr-1** exactly. The alternatives are named with what they miss — NDM1-S3 has no match to blaNDM-56, KPC2-S3 none to blaKPC-248. And the scope: coverage *"does not represent clinical prevalence or coverage of all future alleles"*, so re-screen on a new release.', zh: '以 NCBI AMRFinderPlus **2026-08-07.1** 版篩查：主要設計分別完全比中 **98/98 blaNDM、295/295 blaKPC 與 37/37 mcr-1**。替代設計則連「漏掉什麼」一起寫出來——NDM1-S3 比不到 blaNDM-56、KPC2-S3 比不到 blaKPC-248。範圍也寫了：覆蓋率*「不代表臨床盛行率，也不代表對所有未來等位基因的覆蓋」*，所以資料庫更新後要重新篩一次。' } },
            { chips: [{ t: { en: 'calibration', zh: '校正' }, k: 'a' }],
              h: { en: 'A number that is called a proxy', zh: '一個被叫做「代理值」的數字' },
              p: { en: 'Their activation metric is heterodimer yield × stem disruption × trigger interstrand pairing, giving **0.906 for NDM1-S1, 0.940 for KPC2-S1 and 0.873 for MCR1-S1** at 100 nM each. The accompanying sentence: proxy values *"support relative ranking and cross-reactivity assessment; they have not been calibrated against experimental ON/OFF measurements."* They also note that predicted heterodimer yields approached 100 % for every cognate tube, **giving that metric limited discriminatory power** — a model output declared useless by the people who computed it.', zh: '他們的活化指標是異源二聚體產率 × 莖結構被破壞程度 × 觸發 RNA 股間配對比例，在各 100 nM 下得到 **NDM1-S1 為 0.906、KPC2-S1 為 0.940、MCR1-S1 為 0.873**。隨之而來的那句話是：這些代理值*「支持相對排序與交叉反應評估；它們並未對實驗上的 ON／OFF 量測做過校正。」*他們也指出，所有同源反應管的預測異源二聚體產率都接近 100%，**使這個指標的區辨力有限**——一個被計算它的人自己宣告沒用的模型輸出。' } },
            { chips: [{ t: { en: 'scope', zh: '範圍' }, k: 'r' }],
              h: { en: 'Nine candidates are not a nine-plex', zh: '九個候選不等於九重檢測' },
              p: { en: 'The alternatives are replacements, not parallel sensors: some target sites for the same gene overlap, and **KPC2-S2 and KPC2-S3 are explicitly not interpreted as independent sensors in the same tube.** The cross-gene proxy among the three primary designs stays between 8.10 × 10⁻⁷ and 2.92 × 10⁻⁴, and even that conclusion is scoped to *"the three reference mRNAs and the specified ionic and temperature conditions."*', zh: '替代設計是替補，不是並行的感測器：同一基因的某些目標位點彼此重疊，而 **KPC2-S2 與 KPC2-S3 被明確寫明不可當成同一管中的兩個獨立感測器。**三個主要設計之間的跨基因代理值落在 8.10 × 10⁻⁷ 到 2.92 × 10⁻⁴ 之間，而連這個結論也被限定在*「這三條參考 mRNA，以及指定的離子與溫度條件」*之下。' } }
          ]) +
          h.note({
            en: '**Limitations written as properties of the method.** NUPACK is an equilibrium secondary-structure model: no ribosome occupancy, no cotranscriptional folding, no RNA degradation, no protein binding, no kinetic barriers. Accessibility was computed from the uploaded CDSs only, **excluding the actual 5′ and 3′ UTRs** — so they tell you to reanalyse the complete transcript once the real expression construct is defined.',
            zh: '**限制被寫成方法本身的性質。**NUPACK 是一個平衡態二級結構模型：沒有核糖體占據、沒有共轉錄折疊、沒有 RNA 降解、沒有蛋白結合、沒有動力學障礙。可及性只由上傳的編碼序列算出，**排除了真正的 5′ 與 3′ 非轉譯區**——所以他們要你在真正的表達構築定下來之後，重新分析完整的轉錄本。'
          }) +
          h.h3({ en: 'ARGUS: RGB → CIELAB → ΔE00, and then a refusal', zh: 'ARGUS：RGB→CIELAB→ΔE00，然後是一次拒絕' }) +
          h.p({
            en: 'ARGUS is a browser platform with a field client and an administration console; **image processing runs locally in JavaScript, with no external AI inference at runtime.** It locates the active well grid on a photograph of the card, averages the sRGB pixels inside a disk of half the well radius, converts through linear RGB and XYZ D65 to **Lab**, then scores each sample **against the positive and negative controls in its own row.** The projection uses **a\∗ and b\∗ only, excluding lightness L\∗** — with the caveat attached: this focuses the score on chromatic change, *"although it does not make the analysis independent of illumination or camera processing."*',
            zh: 'ARGUS 是一個瀏覽器平台，有一個現場端與一個管理端；**影像處理在本機以 JavaScript 執行，執行階段不呼叫任何外部 AI 推論。**它在卡片照片上定位出有效的孔格，取每個孔半徑一半範圍內的 sRGB 像素平均，經線性 RGB 與 XYZ D65 轉成 **Lab**，再把每個樣品**對照它同一列的陽性與陰性對照**計分。這個投影**只用 a\∗ 與 b\∗，排除亮度 L\∗**——而且附上保留：這樣可以把分數聚焦在色度變化上，*「雖然這並不使分析不受照明或相機處理的影響。」*'
          }) +
          h.ul([
            { en: 'The score is a projection onto the control direction: with s, n and p the (a\∗, b\∗) coordinates of sample, negative and positive control, **v = p − n**, **t = ((s − n) · v) / (v · v)** and the residual **r = ‖(s − n) − tv‖**. NC sits at t = 0 and PC at t = 1, and **sample scores are not clamped to that interval.**', zh: '分數是一個對「對照方向」的投影：令 s、n、p 分別是樣品、陰性對照與陽性對照的（a\∗, b\∗）座標，則 **v = p − n**、**t = ((s − n) · v) / (v · v)**，殘差為 **r = ‖(s − n) − tv‖**。陰性對照落在 t = 0、陽性對照落在 t = 1，而**樣品分數不會被夾限在這個區間內。**' },
            { en: '**The guards are the interesting part.** Control separation must satisfy ‖v‖ ≥ 2 and the residual r ≤ max(4, 0.6 × ‖v‖); expected directions are Δb < 0 for MCR1, Δb > 0 for NDM1 and Δa − Δb > 0 for KPC2. Missing, black, identical, reversed or insufficiently separated controls, an excessive residual, or |t| > 100 produce **no estimate at all** — and the page states the rule that matters: **an absent classification is unresolved and must not be treated as Negative.**', zh: '**真正有意思的是那些防護條件。**對照之間的分離必須滿足 ‖v‖ ≥ 2，殘差必須滿足 r ≤ max(4, 0.6 × ‖v‖)；預期方向為 MCR1 的 Δb < 0、NDM1 的 Δb > 0、KPC2 的 Δa − Δb > 0。對照缺失、全黑、完全相同、方向反了或分離不足，殘差過大，或 |t| > 100，都會導致**根本不給出估計值**——而頁面寫下那條重要的規則：**沒有分級就是「未定」，不得被當成陰性。**' },
            { en: 'Four grades per gene, with different cut-offs per gene (MCR1 turns Positive at t ≥ 1.20, NDM1 and KPC2 at 0.65 and 0.60). And a worked trap, published: **the PC and NC labels are control-role defaults, not independent validation of those controls**, so a sample at MCR1 t = 1.00 reads Weak Positive even while the PC label displays Strong Positive.', zh: '每個基因四個等級，而各基因的切點不同（MCR1 在 t ≥ 1.20 轉為陽性，NDM1 與 KPC2 分別在 0.65 與 0.60）。還有一個被寫出來的陷阱：**PC 與 NC 的標籤是「對照角色」的預設值，不是對那些對照的獨立驗證**，所以一個 MCR1 t = 1.00 的樣品會被判為弱陽性，即使 PC 的標籤顯示為強陽性。' }
          ]) +
          h.tbl({
            cols: [
              { t: { en: 'Reporter on paper', zh: '紙上的報告子' }, w: '26%' },
              { t: { en: 'Relative change in ΔE00', zh: 'ΔE00 的相對變化' }, num: true },
              { t: { en: 'What the comparison was', zh: '這個比較到底是什麼' } }
            ],
            rows: [
              [{ en: '**MCR1_4–gusA**', zh: '**MCR1_4–gusA**' }, { en: '**46.80 %**', zh: '**46.80 %**' },
               { en: '5 µM trigger RNA as positive control, 0 µM as negative control, 3 µM as the test sample. ΔE00(S1,PC) < ΔE00(NC,PC) for all three reporters.', zh: '以 5 µM 觸發 RNA 為陽性對照、0 µM 為陰性對照、3 µM 為測試樣品。三個報告子的 ΔE00(S1,PC) 都小於 ΔE00(NC,PC)。' }],
              [{ en: '**KPC2_4–lacZ**', zh: '**KPC2_4–lacZ**' }, { en: '**41.06 %**', zh: '**41.06 %**' },
               { en: 'CIEDE2000 computed from L\∗, a\∗, b\∗ values derived from each region\'s **mean** RGB — and they flag that converting each pixel first *"can give slightly different values."*', zh: 'CIEDE2000 是由各區域 RGB **平均值**換算出的 L\∗、a\∗、b\∗ 算得——而他們標明，先逐像素轉換*「可能給出略為不同的數值」*。' }],
              [{ en: '**NDM1_4–xylE**', zh: '**NDM1_4–xylE**' }, { en: '**40.20 %**', zh: '**40.20 %**' },
               { en: 'And the sentence that stops the table from becoming a performance claim: the 3 µM comparison *"does not establish a limit of detection."* They also say these relative changes **do not rank the three reporters by sensitivity.**', zh: '還有那句讓這張表不會變成效能主張的話：3 µM 的比較*「並沒有建立偵測極限」*。他們也說，這些相對變化**不能用來排出三個報告子的靈敏度高低。**' }]
            ],
            min: 760,
            source: { en: 'Numbers from the team\'s Results and Engineering pages. The table layout is ours.', zh: '數字出自該隊 Results 與 Engineering 頁。表格排版是我們做的。' }
          }) +
          h.take({ en: 'The fixed threshold, declared as temporary', zh: '那個固定閾值，被宣告為臨時的' }, {
            en: 'The software *"currently uses a fixed threshold for preliminary interpretation"*, and the limitation is written in the same paragraph as the feature: more samples and photographs are needed to determine a reliable decision threshold and to assess **sensitivity, specificity, PPV and NPV**, and a larger dataset would allow more refined classifiers. A Best Software winner describing its own decision rule as a placeholder is rarer than it should be.',
            zh: '這套軟體*「目前使用一個固定閾值做初步判讀」*，而限制就寫在介紹這個功能的同一段裡：需要更多樣品與照片，才能決定一個可靠的判定閾值，並評估**靈敏度、專一性、陽性預測值與陰性預測值**，而更大的資料集才能支持更細緻的分類器。一個最佳軟體獎的得主，把自己的判定規則說成一個暫時的佔位符——這種事比它應該有的頻率要少見得多。'
          })
      });

      /* ---------------- hedged language ---------------- */
      out += h.sec({
        id: 'g-hedge',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'Hedge the word, not the paragraph', zh: '在字上保留，而不是在段落上保留' },
        lede: {
          en: 'This section is our observation, not theirs. Nowhere do they call this a method. We think it is the most copyable thing on the wiki.',
          zh: '這一節是我們的觀察，不是他們的。他們沒有任何地方把這件事稱為一套方法。我們認為這是整個 wiki 上最值得抄的東西。'
        },
        body:
          h.p({
            en: 'Most wikis handle uncertainty with a limitations section. GHCIS handle it inside the noun. A reaction is not a 20 µL reaction, it is a **"nominal"** 20 µL reaction. A table is not the composition, it is the **"reported"** composition. An explanation is not the explanation, it is a reading **"not directly established by these fluorescence measurements"**. The hedge sits on the word that would otherwise have been overclaimed, which means a reader who quotes the sentence carries the caveat with them.',
            zh: '大多數 wiki 處理不確定性的方式，是加一節「限制」。GHCIS 把它處理在名詞裡面。一個反應不是「20 µL 反應」，而是**「名目」**20 µL 反應。一張表不是「組成」，而是**「所報告的」**組成。一個解釋不是「解釋」，而是一個**「沒有被這些螢光量測直接證實」**的讀法。保留語氣落在那個原本會被誇大的字上，於是任何引用那句話的讀者，都會把那個保留一起帶走。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '20%' },
              { t: { en: 'The hedge, as published', zh: '公開的那個保留寫法' } }
            ],
            rows: [
              [{ en: 'Reaction tables', zh: '反應組成表' },
               { en: 'A **"nominal"** 20 µL reaction, and a **"reported composition"** — twice, for the 20 µL and 50 µL formats. The volumes are given to two decimal places and still not claimed as exact.', zh: '一個**「名目」**20 µL 反應，以及**「所報告的組成」**——20 µL 與 50 µL 兩種形式各寫一次。體積寫到小數第二位，卻仍然沒有被宣稱為精確值。' }],
              [{ en: 'Round-one failure', zh: '第一輪的失敗' },
               { en: 'The structural reading of why nine switches failed was published together with *"although this was not directly established by these fluorescence measurements."*', zh: '關於「九個開關為什麼失敗」的結構解釋，是連著*「雖然這一點並沒有被這些螢光量測直接證實」*一起公開的。' }],
              [{ en: 'GusA at 50 µL', zh: '50 µL 的 GusA' },
               { en: 'Rapid substrate depletion offered as a possible cause of the decline, *"although this was not directly tested."*', zh: '底物快速耗盡被提出為訊號下降的一個可能原因，*「雖然這一點並沒有被直接測試。」*' }],
              [{ en: 'The 5 s colour', zh: '5 秒的顏色' },
               { en: '*"This timing describes the catalytic color reaction after enzyme production, rather than the duration of the complete sensing workflow."* The most quotable number on the wiki, defused in its own caption.', zh: '*「這個時間描述的是酵素產生之後的催化顯色反應，而不是整條感測流程的時間長度。」*整個 wiki 上最容易被引用的數字，在自己的說明裡就被卸了引信。' }],
              [{ en: 'Model metrics', zh: '模型指標' },
               { en: 'Activation proxies *"have not been calibrated against experimental ON/OFF measurements"*, and family coverage *"does not represent clinical prevalence or coverage of all future alleles."*', zh: '活化代理值*「並未對實驗上的 ON／OFF 量測做過校正」*，而家族覆蓋率*「不代表臨床盛行率，也不代表對所有未來等位基因的覆蓋」*。' }],
              [{ en: 'Software example', zh: '軟體範例' },
               { en: 'The one-sample example plate is *"a reproducible workflow example rather than an independent validation dataset"*, and the control labels are *"control-role defaults, rather than independent validation of those controls."*', zh: '那張單一樣品的範例卡片是*「一個可重現的流程範例，而不是一個獨立的驗證資料集」*，而對照標籤則是*「對照角色的預設值，不是對那些對照的獨立驗證」*。' }],
              [{ en: 'Safety page', zh: '安全頁' },
               { en: 'The sharpest one in the project: *"Filtration or DNA extraction should not be described as inactivation unless that outcome has been validated."* A sentence written to stop a future team from reusing a word it has not earned.', zh: '整個專案裡最鋒利的一句：*「過濾或 DNA 萃取不應被描述為去活化，除非那個結果已經被驗證過。」*這是一句寫下來、用來阻止未來的隊伍挪用一個它還沒掙到的詞的話。' }],
              [{ en: 'Results summary', zh: '結果總結' },
               { en: 'And the closing sentence of the whole results page: the results *"do not yet establish a validated detection limit or the performance of the complete DNA-to-color workflow."*', zh: '還有整個結果頁的最後一句：這些結果*「還沒有建立起一個經過驗證的偵測極限，也還沒有建立完整的 DNA 到顏色流程的表現。」*' }]
            ],
            min: 720,
            source: { en: 'All eight quoted from the team\'s own pages. Collecting them, and calling it a practice, is ours.', zh: '八則全部引自該隊自己的頁面。把它們收集起來、並把它稱為一種做法，是我們做的。' }
          }) +
          h.take({ en: 'A limitations section is read once; a hedge inside the noun is read every time', zh: '一節「限制」只會被讀一次；寫在名詞裡的保留，每次都會被讀到' }, {
            en: 'A limitations section is read once, by a judge. A hedge inside the noun is read **every time the claim is read**, including by the next team that cites it. GHCIS do this so consistently that the discipline reads as a house style rather than caution — and a house style can be taught to the following year\'s team in an afternoon.',
            zh: '一節「限制」只會被讀一次，而且只有評審會讀。而寫在名詞裡的保留，**每一次那個主張被讀到時都會被讀到**，包括被下一支引用它的隊伍讀到。GHCIS 做得如此一致，以致於這份紀律讀起來像是一種編輯慣例，而不是謹慎——而一種編輯慣例，可以在一個下午之內教給明年的隊伍。'
          })
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'g-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, mostly in their own words', zh: '哪些還沒解決，大部分用他們自己的話說' },
        lede: {
          en: 'The gaps below are not hidden on this wiki. Almost every one of them is stated by the team on the page where it arises.',
          zh: '下面這些缺口在這個 wiki 上並沒有被藏起來。它們幾乎每一個都由該隊在問題出現的那一頁上自己說了出來。'
        },
        body:
          h.ul([
            { en: '**Background colour at 0 µM is the next engineering problem, and they say so.** Visible colour appeared on paper without trigger RNA, which means colour alone cannot carry a positive call; every reading has to be interpreted against its same-row controls.', zh: '**0 µM 時的背景顏色就是下一個工程問題，而他們自己這樣說。**在沒有觸發 RNA 的情況下紙上也出現了可見顏色，這表示單憑顏色無法支撐陽性判定；每一次讀值都必須對照同一列的對照來解讀。' },
            { en: '**Every colour result was driven by micromolar synthetic trigger RNA, not by amplified sample DNA.** 0, 3 and 5 µM are described as experimental input conditions, and the software page adds that these are *"rather than concentrations estimated by ARGUS."*', zh: '**每一個顏色結果都是由微莫耳級的合成觸發 RNA 驅動的，而不是由擴增後的樣品 DNA。**0、3、5 µM 被描述為實驗輸入條件，而軟體頁補上一句：這些*「不是 ARGUS 估計出來的濃度」*。' },
            { en: '**The RPA step has never been run.** It appears on the description, hardware and contribution pages as a design and as a printed tube holder; there is no amplification experiment, and no T7 transcription from an RPA product, anywhere in the results.', zh: '**RPA 這一步從來沒有被跑過。**它以一個設計、以一個列印的試管座出現在描述、硬體與貢獻頁；而在結果頁的任何地方，都沒有擴增實驗，也沒有從 RPA 產物進行的 T7 轉錄。' },
            { en: '**No environmental water sample has been tested.** The development inputs were synthetic short fragments, chosen deliberately: it let them evaluate the detection circuit *"without using resistant clinical isolates as positive controls."* The safety page treats environmental water as an intended application requiring its own assessment first.', zh: '**沒有任何環境水樣被測試過。**開發階段的輸入是合成的短片段，而這是刻意選的：它讓他們可以評估偵測線路，*「而不需要用抗藥性的臨床分離菌株作為陽性對照」*。安全頁把環境水視為一個預期的應用，並要求先做自己的風險評估。' },
            { en: '**Sensitivity, specificity, PPV and NPV are all undetermined**, the decision threshold is fixed and provisional, and the three ΔE00 relative changes do not rank the reporters by sensitivity.', zh: '**靈敏度、專一性、陽性預測值與陰性預測值全部未定**，判定閾值是固定而暫行的，而那三個 ΔE00 相對變化也不能用來排出報告子的靈敏度高低。' },
            { en: '**The software has not been tested across devices or lighting.** Their own list: uneven lighting, reflections, blur, camera white balance and incomplete wells can all affect detection, and the a\∗b\∗ projection *"cannot compensate for every imaging condition or an invalid biochemical reaction."* Evaluation across phones, lighting conditions and assay batches is future work.', zh: '**軟體還沒有在不同裝置或不同照明下測試過。**他們自己列出的清單：照明不均、反光、模糊、相機白平衡與不完整的孔位都可能影響判讀，而 a\∗b\∗ 投影*「無法補償每一種拍攝條件，也無法補償一個無效的生化反應」*。在不同手機、不同照明與不同試驗批次間的評估，被列為未來工作。' },
            { en: '**The hardware is characterised as a tuning target, not a measurement.** The 37.0–38.0 °C operating range is explicitly that; warm-up time, temperature distribution across the sample area and variation during operation are listed under Future Plans, along with a metal RPA holder for better heat transfer.', zh: '**硬體被描述成一個調校目標，而不是一項量測結果。**37.0–38.0 °C 的操作範圍就是這樣被寫明的；升溫時間、樣品區的溫度分布與運行中的溫度變動都列在未來計畫中，同時還有一個為了更好熱傳導而改用金屬的 RPA 試管座。' },
            { en: '**Two mechanisms are named as unexplained.** Why nine first-round switches failed is a structural reading, not a demonstrated cause; why the GusA signal fell at 50 µL input is a hypothesis the experiment did not test.', zh: '**有兩個機制被指名為尚未解釋。**九個第一輪開關為什麼失敗，是一個結構上的讀法，而不是已證明的原因；GusA 訊號為什麼在 50 µL 加入量時下降，是一個那次實驗並未測試的假說。' },
            { en: '**The governance model is software roles, not institutions.** Their own wording: the role diagram *"represents software roles, not an implemented national, provincial and municipal authority hierarchy"*, and no official endorsement, institutional adoption or network connection is claimed.', zh: '**那個治理模型是軟體角色，不是機構。**照他們自己的寫法：角色圖*「代表的是軟體角色，不是一個已實作的國家、省、市三級權責層級」*，而且他們沒有主張任何官方背書、機構採用或網路對接。' }
          ])
      });

      /* ---------------- copy ---------------- */
      out += h.sec({
        id: 'g-copy',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from GHCIS', zh: '我們會從 GHCIS 抄什麼' },
        body:
          h.ul([
            { en: '**Publish the round that failed, with its plots and its reasoning.** Nine switches, no separation, the inference about the hairpin and the sentence saying the inference is not proven. This is the single most persuasive page on their wiki, and it is a page about not working.', zh: '**把失敗的那一輪公開，連圖和推理一起。**九個開關、分不開、關於髮夾的推論，以及一句「這個推論沒有被證明」。這是他們 wiki 上最有說服力的一頁，而它講的是「沒有成功」。' },
            { en: '**Validate the platform before you judge the parts.** pJL1–T7–GFP first, down to 1 µL at 2 ng/µL, so that a flat trace afterwards means the switch and not the extract.', zh: '**在評判元件之前先驗證平台。**先跑 pJL1–T7–GFP，一路測到 1 µL、2 ng/µL，這樣之後的平坦曲線才能歸因於開關，而不是萃取液。' },
            { en: '**A rising reporter trace is not an activated switch.** NDM1_3 rose in both conditions. The comparison is plus-trigger against minus-trigger, always, and reporting the single trace would have reported a sensor that does not exist.', zh: '**報告子曲線上升不等於開關被打開。**NDM1_3 在兩種條件下都上升。該做的比較永遠是「有觸發」對「沒有觸發」，而只報告單一條曲線，就等於報告了一個並不存在的感測器。' },
            { en: '**Hedge inside the noun.** "Nominal" 20 µL, "reported" composition, "although this was not directly tested". One word, and the claim can no longer be quoted larger than it is.', zh: '**把保留寫進名詞裡。**「名目」20 µL、「所報告的」組成、「雖然這一點並沒有被直接測試」。一個字，就讓這個主張再也不能被引用得比它本身更大。' },
            { en: '**Reproduce the published method on known sequences before you trust it on yours.** Checking the Green et al. construction formula against mCherry B, mCherry C, cat and aadA costs an afternoon and underwrites every design that follows.', zh: '**在相信一套已發表的方法用在你自己的序列上之前，先用已知序列重現它。**用 mCherry B、mCherry C、cat 與 aadA 去核對 Green 等人的構築公式，只花一個下午，卻為後面每一個設計背書。' },
            { en: '**When the literature is ambiguous, say so and show your fix.** Equation 5 pointed two ways; they kept the published weights, converted both terms to deficits and printed the penalty formula. A reader can now disagree with the choice instead of guessing at it.', zh: '**當文獻含糊時，把它說出來，並把你的處理攤開。**式 5 同時指向兩個方向；他們保留已發表的權重、把兩項都改寫成缺額，並把懲罰公式印出來。現在讀者可以不同意那個選擇，而不必去猜它。' },
            { en: '**Declare your own metric uncalibrated when it is.** Activation proxies for ranking, not for ON/OFF ratios; a heterodimer yield near 100 % everywhere, declared to have limited discriminatory power by the people who computed it.', zh: '**當你的指標還沒校正過，就宣告它沒有校正過。**活化代理值是用來排序的，不是用來談 ON／OFF 比值；而一個處處接近 100% 的異源二聚體產率，被計算它的人自己宣告區辨力有限。' },
            { en: '**Make the software refuse rather than guess.** Invalid, reversed or insufficiently separated controls produce no estimate, and an absent classification is unresolved — explicitly **not** Negative. That one rule is worth more than any threshold.', zh: '**讓軟體拒答，而不是猜。**對照無效、方向反了或分離不足時，就不給出估計值，而沒有分級代表「未定」——明確地**不是**陰性。這一條規則，比任何閾值都更有價值。' },
            { en: '**Buy your inserts in a way that buys you a second round.** Ordering short inserts as PCR products with vector-homology ends took synthesis from 10 days to 3. A procurement decision is a methods decision when the season is twelve weeks long.', zh: '**用一種能替你換到第二輪的方式去買插入片段。**把短插入片段改訂成兩端帶載體同源序列的 PCR 產物，把合成等待時間從 10 天變成 3 天。當一個賽季只有十二週時，採購決定就是方法決定。' },
            { en: '**Write the sentence that stops the next team misusing a word.** "Filtration or DNA extraction should not be described as inactivation unless that outcome has been validated." Put that on your safety page and it outlives your project.', zh: '**寫下那句能阻止下一支隊伍誤用一個詞的話。**「過濾或 DNA 萃取不應被描述為去活化，除非那個結果已經被驗證過。」把它放進你的安全頁，它會比你的專案活得更久。' },
            { en: '**End the results page with what you did not establish.** Their last sentence — the results *"do not yet establish a validated detection limit or the performance of the complete DNA-to-color workflow"* — is the best closing line in the division, and it is a disclaimer.', zh: '**用「你沒有建立什麼」來結束結果頁。**他們的最後一句——這些結果*「還沒有建立起一個經過驗證的偵測極限，也還沒有建立完整的 DNA 到顏色流程的表現」*——是整個組別裡最好的結尾句，而它是一句免責聲明。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the eleven items above, the two-halves framing of the workflow, and the judgement that hedging inside the noun is the most transferable practice on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/ghcis](https://2026.igem.wiki/ghcis/).',
            zh: '標示為我們的看法：上面十一點、把流程分成兩半的那個框架，以及「把保留寫進名詞裡是這個 wiki 上最可轉移的做法」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/ghcis](https://2026.igem.wiki/ghcis/)。'
          })
      });

      return out;
    }
  };
})(window);
