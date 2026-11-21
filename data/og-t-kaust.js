/* KAUST-KSA — SHIHAB. Top 10 Overgraduate and Best Space Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/kaust-ksa/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsOG || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Set the dose range on wild type first', zh: '先用野生型定出劑量範圍' },
        s: { en: 'Extensive preliminary irradiation on unmodified cells, to find informative doses and fix the readouts', zh: '先在未改造細胞上做大量前期照射，找出有資訊量的劑量並固定讀值方式' }, tone: 'g' },
      { l: { en: 'Integrate Dsup into the genome, single copy', zh: '把 Dsup 以單一拷貝整合進基因體' },
        s: { en: 'Deliberately not a multicopy plasmid; expression confirmed by Western blot of the myc tag', zh: '刻意不用多拷貝質體；以 myc 標籤的西方墨點確認表達' } },
      { l: { en: 'Irradiate, three readouts', zh: '照射，三種讀值' },
        s: { en: 'Spot dilutions, resazurin metabolic activity, OD₆₀₀ time courses; UV-C and X-ray', zh: '點滴稀釋、resazurin 代謝活性、OD₆₀₀ 時序；UV-C 與 X 光' } },
      { l: { en: 'Build the improved variant and compare', zh: '做出改良變異體並比較' },
        s: { en: 'Enhanced nuclear localisation vs WT Dsup, head to head in P. pastoris', zh: '強化核定位版本對野生型 Dsup，在 P. pastoris 中正面比較' } },
      { l: { en: 'Make the payloads, and check the cost', zh: '製造酬載，並檢查代價' },
        s: { en: 'Four proteins purified from P. pastoris; FfIBP yield in WT vs Dsup B. subtilis', zh: '從 P. pastoris 純化四個蛋白；比較野生型與帶 Dsup 的 B. subtilis 的 FfIBP 產量' } },
      { l: { en: 'Close the preservation loop', zh: '把保存這一環閉起來' },
        s: { en: 'Sporulate the engineered strain, then produce GFP from the spore-derived culture', zh: '讓改造菌株形成孢子，再從孢子衍生的培養物中產出 GFP' } }
    ],
    dry: [
      { l: { en: 'Repair the public model', zh: '修好那個公開的模型' },
        s: { en: 'iBsu1147 would not grow anaerobically; two pathways engineered in, revised model released', zh: 'iBsu1147 在厭氧下長不起來；補進兩條路徑，並釋出修訂後的模型' }, tone: 'a' },
      { l: { en: 'Re-choose the chassis on flux', zh: '依通量重新選擇底盤' },
        s: { en: 'Without oxygen B. subtilis keeps 54 % of nanobody flux where yeast keeps 18 %', zh: '無氧下 B. subtilis 保有 54% 的奈米抗體通量，而酵母只有 18%' } },
      { l: { en: 'Check the feedstock per carbon atom', zh: '以每個碳原子為單位檢查料源' },
        s: { en: 'Sucrose from a capped cyanobacterial partner costs nothing against glucose anaerobically', zh: '來自受限產能藍菌夥伴的蔗糖，在厭氧下與葡萄糖相比沒有代價' } },
      { l: { en: 'Simulate the reactor under lunar gravity', zh: '在月面重力下模擬反應器' },
        s: { en: 'COMSOL CFD on three rotor geometries; small tilted blades give one continuous loop', zh: '對三種轉子幾何做 COMSOL 流場模擬；小型傾斜葉片給出單一連續循環' }, tone: 't' }
    ],
    links: [
      { w: 4, d: 1, l: { en: 'the model chose the host before the bench built it', zh: '模型在實驗檯動工之前就選好了宿主' }, up: true },
      { w: 2, d: 0, l: { en: 'anaerobic conclusions depend on the repaired model', zh: '所有厭氧結論都依賴那個被修好的模型' } }
    ]
  };

  PD.pages['og-kaust'] = {
    label: { en: 'KAUST-KSA', zh: 'KAUST-KSA' },
    title: { en: 'KAUST-KSA — SHIHAB', zh: 'KAUST-KSA — SHIHAB' },
    render: function (h) {
      var t = team('kaust');
      var out = h.teamhero(t, {
        h1: {
          en: 'Carry the production strain, not the finished drug — and ==label the scope of every claim in the sentence that makes it==.',
          zh: '帶生產菌株上太空，而不是帶成藥——並且==在每個主張所在的那一句話裡就標出它的範圍==。'
        },
        lede: {
          en: 'Beyond the ISS, resupply stops being a plan: replacement medication may take months or never arrive, storage mass competes with everything else, and no manifest can anticipate every illness. SHIHAB proposes a library of freeze-dried microbes, a shared 2.2 kg bioreactor and automated purification, so a crew selects a payload and makes it on site. What makes this wiki unusual is not the hardware. It is that the claims are scoped inline — "genetic integration and radiation-testing activities should be distinguished from a demonstrated increase in resistance" — and the workflow carries a "Proposed" badge.',
          zh: '離開國際太空站之後，再補給就不再是一個可行的計畫：替代藥物可能要好幾個月才到、或根本到不了；儲存質量要和所有其他東西競爭；而任何清單都無法預先設想每一種疾病。SHIHAB 提議的是一套凍乾微生物庫、一台共用的 2.2 公斤生物反應器與自動化純化，讓組員選定酬載、就地製造。這個 wiki 特別的地方不是硬體，而是它的主張是就地標註範圍的——「基因整合與輻射測試活動，應與『已證明抗性提升』區分開來」——而且那套流程還掛著一個「提議中」的標籤。'
        },
        chips: [
          { t: { en: 'Tardigrade Dsup', zh: '水熊蟲 Dsup' }, k: 'b' },
          { t: { en: 'Three chassis, 13 strains', zh: '三個底盤、13 株' }, k: 'v' },
          { t: { en: '2.2 kg bioreactor', zh: '2.2 公斤生物反應器' }, k: 't' },
          { t: { en: 'Repaired iBsu1147 GEM', zh: '修好的 iBsu1147 代謝模型' }, k: 'g' },
          { t: { en: 'Bilingual EN/AR source', zh: '英阿雙語原始碼' }, k: 'a' }
        ],
        stats: [
          { v: '1–2 orders', l: { en: 'More colony-forming cells than wild type at 12 mJ/m² UV-C', zh: '12 mJ/m² UV-C 下比野生型多出的可形成菌落細胞數量級' } },
          { v: '2000 Gy', l: { en: 'X-ray dose response characterised across all three chassis', zh: '三個底盤都完成特性化的 X 光劑量反應上限' } },
          { v: '54 % vs 18 %', l: { en: 'Nanobody flux retained anaerobically, B. subtilis against yeast', zh: '厭氧下保留的奈米抗體通量，B. subtilis 對酵母' } },
          { v: '25', l: { en: 'Logged hardware iterations across three subsystems', zh: '三個子系統累計記錄的硬體迭代次數' } },
          { v: '−0.03 °C', l: { en: 'Steady-state temperature error under plain on/off control', zh: '純開關控制下的穩態溫度誤差' } },
          { v: '30 W', l: { en: 'Power draw of the whole 20 × 24 × 31 cm bioreactor', zh: '整台 20×24×31 公分生物反應器的功耗' } }
        ]
      });

      out += h.toc([
        { id: 'k-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'k-scope', t: { en: 'Scoped claims', zh: '標註範圍的主張' } },
        { id: 'k-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'k-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'k-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'k-hw', t: { en: 'Hardware', zh: '硬體' } },
        { id: 'k-fail', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'k-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'k-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'Five stages, and the badge on them says "Proposed"', zh: '五個階段，而掛在上面的標籤寫著「提議中」' },
        lede: {
          en: 'On the ISS, medical supplies can be replaced and evacuation remains possible. Farther out, both stop being true at the same time.',
          zh: '在國際太空站上，醫療物資可以補充，撤離也還是可行的。再往外走，這兩件事會同時不再成立。'
        },
        body:
          h.flow({
            title: { en: 'Preserve → Select → Grow → Produce → Purify', zh: 'Preserve→Select→Grow→Produce→Purify' },
            sub: { en: 'The wiki marks this workflow "Proposed". Every stage below has at least one demonstrated step and at least one step that is not.', zh: '這個 wiki 把這套流程標記為「提議中」。下面每個階段都至少有一個已被示範的步驟，也至少有一個還沒有。' },
            stages: [
              { label: { en: 'Preserve', zh: 'Preserve' }, sub: { en: 'Freeze-dried microbes or spores', zh: '凍乾微生物或孢子' }, tone: 'b',
                items: [{ en: 'demonstrated: GFP produced from a spore-derived culture of the engineered strain', zh: '已示範：從改造菌株的孢子衍生培養物中產出 GFP' }] },
              { label: { en: 'Select', zh: 'Select' }, sub: { en: 'Choose the strain for the protein you need', zh: '為你需要的蛋白選出菌株' }, tone: 'v',
                items: [{ en: '13 engineered strains across three chassis', zh: '三個底盤共 13 株改造菌' }] },
              { label: { en: 'Grow', zh: 'Grow' }, sub: { en: 'Activate and grow in the bioreactor', zh: '在生物反應器中活化並培養' }, tone: 'g',
                items: [{ en: 'E. coli grown in the prototype; everything at Earth gravity', zh: '原型機中養了大腸桿菌；但全部在地球重力下' }] },
              { label: { en: 'Produce', zh: 'Produce' }, sub: { en: 'Secrete the therapeutic protein', zh: '分泌治療性蛋白' }, tone: 't',
                items: [{ en: 'induction optimised per chassis: IPTG series, methanol conditions', zh: '誘導條件依底盤各自最佳化：IPTG 梯度、甲醇條件' }] },
              { label: { en: 'Purify', zh: 'Purify' }, sub: { en: 'Recover and purify the product', zh: '回收並純化產物' }, tone: 'a',
                items: [{ en: 'ÄKTA HisTrap at the bench; a stackable filtration unit in hardware', zh: '實驗檯用 ÄKTA HisTrap；硬體端是可堆疊的過濾單元' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Project Description and Proof of Concept pages.', zh: '由我們依該隊 Project Description 與 Proof of Concept 頁繪製。' }
          }) +
          h.p({
            en: 'The payload library is a library rather than a product: therapeutic nanobodies **anti-PD-L1** and **Nb1_gbHSV**; antifreeze proteins **FfIBP** (*Flavobacterium frigoris*, Antarctic) and **LeIBP** (*Leucosporidium* sp. AY30, Arctic) for cryopreservation; and **GFP and mCherry** as expression reporters. Chassis: *Bacillus subtilis*, *Saccharomyces cerevisiae* and *Pichia pastoris*, chosen for established biotechnological use.',
            zh: '那個酬載庫是「庫」，不是產品：治療性奈米抗體 **anti-PD-L1** 與 **Nb1_gbHSV**；用於低溫保存的抗凍蛋白 **FfIBP**（南極 *Flavobacterium frigoris*）與 **LeIBP**（北極 *Leucosporidium* sp. AY30）；以及作為表達報告子的 **GFP 與 mCherry**。底盤為 *Bacillus subtilis*、*Saccharomyces cerevisiae* 與 *Pichia pastoris*，選它們是因為在生技上已有成熟應用。'
          })
      });

      /* ---------------- scoped claims ---------------- */
      out += h.sec({
        id: 'k-scope',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'The thing almost no other wiki does: scope the claim inline', zh: '幾乎沒有別的 wiki 會做的一件事：就地標註主張的範圍' },
        lede: {
          en: 'Not in a limitations section at the bottom of the page, but in the sentence that makes the claim.',
          zh: '不是放在頁面底部的限制一節，而是放在提出那個主張的同一句話裡。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Where', zh: '位置' }, w: '22%' },
              { t: { en: 'The sentence, as published', zh: '公開的那句話' } }
            ],
            rows: [
              [{ en: 'Radiation resistance card', zh: '輻射抗性卡片' },
               { en: '"Genetic integration and radiation-testing **activities** should be distinguished from a **demonstrated increase in resistance**; strain-specific results are documented in our Wet Lab Results."', zh: '「基因整合與輻射測試**活動**，應與**已證明的抗性提升**區分開來；各菌株的結果記載於我們的 Wet Lab Results。」' }],
              [{ en: 'Protein library card', zh: '蛋白庫卡片' },
               { en: '"**Selection for the library does not imply that every payload has been experimentally produced or purified.**"', zh: '「**被選入這個庫，並不意味著每個酬載都已經在實驗上被生產或純化過。**」' }],
              [{ en: 'Dry lab card', zh: '乾式實驗卡片' },
               { en: '"These analyses evaluate **modeled capabilities** rather than experimentally proving production performance in space."', zh: '「這些分析評估的是**模型中的能力**，而不是在實驗上證明太空中的生產表現。」' }],
              [{ en: 'Production workflow', zh: '生產流程' },
               { en: 'Carries a **"Proposed"** badge, on the page, next to the five stages.', zh: '在頁面上、五個階段旁邊掛著一個**「提議中」**標籤。' }],
              [{ en: 'Hardware simulations', zh: '硬體模擬' },
               { en: '"The simulations are a guide, not a replacement for experiments: **all of our laboratory tests were run at Earth gravity**, and the results above have not yet been checked against a real culture in reduced gravity."', zh: '「這些模擬是指引，不是實驗的替代品：**我們所有的實驗室測試都是在地球重力下進行的**，上述結果尚未在低重力下對真實培養物做過檢驗。」' }],
              [{ en: 'Card illustrations', zh: '卡片插圖' },
               { en: '"Card illustrations: **Generated with GPT-6.**" Two separate captions, one per card set.', zh: '「卡片插圖：**以 GPT-6 生成。**」兩段分開的圖說，各對應一組卡片。' }]
            ],
            min: 700,
            source: { en: 'All six quoted from the team\'s own pages. The collection is ours.', zh: '六句全部引自該隊自己的頁面。整理成表是我們做的。' }
          }) +
          h.take({ en: 'Why we are giving this its own section', zh: '為什麼我們給這件事單獨一節' }, {
            en: 'A limitations section at the end of a page is read by a judge and nobody else. A clause inside the claim is read by **everyone who reads the claim**, including the person who later cites it. Across the twenty Top 10 wikis in both divisions, this is the clearest example of a team deciding that the scope of a claim travels with the claim.',
            zh: '放在頁面最後的限制一節，只有評審會讀，其他人不會。而寫在主張裡的那個子句，**每個讀到那個主張的人都會讀到**，包括之後引用它的那個人。在兩個組別共二十個前十名 wiki 中，這是「一支隊伍決定讓主張的範圍跟著主張一起走」最清楚的例子。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'k-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The model chose the host, and the model had to be repaired first', zh: '模型選了宿主，而模型本身得先被修好' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'SHIHAB: six contributions across wet lab, dry lab and hardware', zh: 'SHIHAB：橫跨濕式、乾式與硬體的六項貢獻' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Wetlab Design, Results, Measurement, Dry Lab Modeling and Hardware pages.', zh: '由我們依該隊 Wetlab Design、Results、Measurement、Dry Lab Modeling、Hardware 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'k-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Order of operations, and the harder of two available choices', zh: '操作順序，以及兩個可選項中較難的那一個' },
        body:
          h.phases([
            { h: { en: 'Optimise the assay on wild type, before comparing strains', zh: '先在野生型上把試驗最佳化，再比較菌株' },
              p: { en: 'Written down as the order they chose: rather than going straight to engineered-versus-wild-type, they ran **extensive preliminary experiments using wild-type cells** to establish suitable irradiation conditions, identify informative radiation doses and optimise the measurement protocols.', zh: '他們把自己選的順序寫下來：不是直接跳到「改造對野生型」，而是先**用野生型細胞做大量前期實驗**，以建立合適的照射條件、找出有資訊量的輻射劑量，並把量測流程最佳化。' },
              items: [
                { en: 'The comparison only happened once the assay had a working range — which is why the X-ray dose response **to 2000 Gy across all three chassis** both sets each organism\'s working range and **ranks their relative radioresistance.**', zh: '比較是在試驗有了可用範圍之後才進行的——這也是為什麼**三個底盤都做到 2000 Gy 的 X 光劑量反應**既界定了各生物的工作範圍，**也排出了它們相對的耐輻射程度。**' },
                { en: 'Assay development is treated as a result in itself: the resazurin assay needed a defined **working cell density and reading window** before it could separate irradiated from unirradiated cultures, and that gets its own results section.', zh: '試驗開發本身被當成一個結果：resazurin 試驗需要先定出**工作細胞密度與讀值視窗**，才能分開已照射與未照射的培養物，而這件事有自己獨立的結果一節。' }
              ],
              done: { en: 'A dose range and three readouts that work before any engineered strain is judged by them.', zh: '一個劑量範圍與三種讀值方式，在任何改造菌株被它們評判之前就先確定可用。' } },
            { h: { en: 'Single genomic copy, on purpose', zh: '刻意採單一基因體拷貝' },
              p: { en: '**Dsup** is a DNA-associated protein from tardigrades with reported protective effects against radiation-induced DNA damage and oxidative stress.', zh: '**Dsup** 是來自水熊蟲的 DNA 結合蛋白，已有報告指出它對輻射引起的 DNA 損傷與氧化壓力有保護作用。' },
              items: [
                { en: 'Their stated reason for integrating rather than using a plasmid: **earlier studies mostly used episomal systems, where high plasmid copy number inflates expression.** The question they wanted to answer is whether **a single integrated copy** gives measurable protection. It did, in *B. subtilis* and *P. pastoris*.', zh: '他們選擇整合而不是用質體的理由寫得很清楚：**先前研究大多使用游離型系統，而高質體拷貝數會把表達量撐高。**他們想回答的問題是：**單一整合拷貝**是否能提供可量測的保護。答案是可以，在 *B. subtilis* 與 *P. pastoris* 中成立。' },
                { en: 'WT Dsup integrated and expressed in **all three chassis**, confirmed by **Western blot of the myc-tagged version** — the tag exists so that "integrated" can be distinguished from "expressed".', zh: '野生型 Dsup 在**全部三個底盤**中都完成整合並表達，以 **myc 標籤版本的西方墨點**確認——那個標籤存在的目的，就是讓「已整合」能和「有表達」區分開來。' },
                { en: 'An **improved Dsup variant with enhanced nuclear localisation** was then built and compared **head to head against WT** in *P. pastoris*, and gave greater protection.', zh: '接著做出一個**強化核定位的改良 Dsup 變異體**，並在 *P. pastoris* 中與**野生型正面比較**，結果提供了更好的保護。' }
              ] },
            { h: { en: 'Three readouts measuring three different things', zh: '三種讀值，量三件不同的事' },
              p: { en: 'Spot dilution assays for growth and survival, resazurin reduction for cellular metabolic activity, and OD₆₀₀ time courses for post-irradiation growth dynamics — across **two radiation types with different damage mechanisms**, X-ray (ionising) and UV-C (photochemical).', zh: '點滴稀釋測生長與存活、resazurin 還原測細胞代謝活性、OD₆₀₀ 時序測照射後的生長動態——並橫跨**兩種損傷機制不同的輻射**：X 光（電離）與 UV-C（光化學）。' },
              items: [
                { en: 'Spot dilution resolved **differences in viability of up to four orders of magnitude** between conditions, which is why it could do the work the plate reader could not.', zh: '點滴稀釋能分辨不同條件之間**達四個數量級的存活差異**，這就是為什麼它能做到微孔盤讀儀做不到的事。' },
                { en: 'Numbers: Dsup *B. subtilis* retains **one to two orders of magnitude more colony-forming cells than wild type at 12 mJ/m² UV-C, consistent across three technical replicates**; Dsup *B. subtilis* **holds its OD after X-ray doses above 1000 Gy** where wild-type cultures fall below their starting density; Dsup *P. pastoris* **grows across all six serial dilutions up to 24 mJ/m² UV-C** where the control does not.', zh: '數字：帶 Dsup 的 *B. subtilis* 在 **12 mJ/m² UV-C 下保有比野生型多一到兩個數量級的可形成菌落細胞，並在三個技術重複間一致**；帶 Dsup 的 *B. subtilis* 在**超過 1000 Gy 的 X 光劑量後仍維持其 OD**，而野生型培養物跌到起始密度以下；帶 Dsup 的 *P. pastoris* **在 UV-C 達 24 mJ/m² 時六個連續稀釋都還能生長**，而對照組不行。' }
              ] },
            { h: { en: 'Payloads, and the control a platform has to run', zh: '酬載，以及一個平台必須做的對照' },
              p: { en: 'Four payloads expressed and purified from *P. pastoris* by methanol induction and ÄKTA HisTrap: the antifreeze proteins FfIBP and LeIBP, and the nanobodies anti-PD-L1 and Nb1_gbHSV. FfIBP was also secreted and purified from *B. subtilis* under IPTG induction.', zh: '四個酬載在 *P. pastoris* 中以甲醇誘導表達並經 ÄKTA HisTrap 純化：抗凍蛋白 FfIBP 與 LeIBP，以及奈米抗體 anti-PD-L1 與 Nb1_gbHSV。FfIBP 另外也在 *B. subtilis* 中以 IPTG 誘導分泌並純化。' },
              items: [
                { en: '**Secretion efficiency was measured rather than assumed:** intracellular against extracellular protein, compared for the α-factor-signalled antifreeze protein.', zh: '**分泌效率是量出來的，不是假設的：**針對帶 α-factor 訊號的抗凍蛋白，比較了細胞內與細胞外的蛋白量。' },
                { en: 'Induction was optimised separately per chassis — an IPTG series for GFP in *B. subtilis* 168, and methanol conditions for mCherry in *P. pastoris* — rather than carried across.', zh: '誘導條件是依底盤分別最佳化的——*B. subtilis* 168 中 GFP 用 IPTG 梯度、*P. pastoris* 中 mCherry 用甲醇條件——而不是直接沿用。' },
                { en: '**The question a platform has to answer:** does carrying Dsup cost you yield? They compared FfIBP production and purification in WT against Dsup *B. subtilis* and found **comparable recovery** — so constitutive Dsup under a constitutive promoter **does not significantly reduce payload production** under their conditions. Radiation protection without giving up the day job.', zh: '**一個平台必須回答的問題：**帶著 Dsup 會不會讓你損失產量？他們比較了野生型與帶 Dsup 的 *B. subtilis* 中 FfIBP 的生產與純化，發現**回收量相當**——所以在組成型啟動子下組成性表達 Dsup，**在他們的條件下並未顯著降低酬載產量。**既有輻射保護，也沒有放棄本業。' },
                { en: '**Sporulation closed the loop:** engineered *B. subtilis* was sporulated and then **GFP was produced from the spore-derived culture** — the Preserve stage demonstrated rather than asserted.', zh: '**孢子化把這一環閉起來了：**改造的 *B. subtilis* 被誘導形成孢子，接著**從孢子衍生的培養物中產出 GFP**——Preserve 這個階段是被示範出來的，不是被宣稱的。' },
                { en: 'And a functional test of a payload rather than only a purification: a **freeze–thaw survival assay using purified FfIBP.**', zh: '而且酬載有一個功能測試，而不是只有純化：**以純化後的 FfIBP 做凍融存活試驗。**' }
              ] }
          ])
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'k-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'Constraint-based modelling that changed the project, and a model that had to be fixed', zh: '一次改變了專案的限制式建模，以及一個必須先被修好的模型' },
        lede: {
          en: 'Genome-scale metabolic models for the three chassis plus a sucrose-exporting cyanobacterium, dynamic batch models of induction timing, and COMSOL CFD for the reactor.',
          zh: '三個底盤加上一株會輸出蔗糖的藍菌的全基因體代謝模型、誘導時機的動態批次模型，以及反應器的 COMSOL 流場模擬。'
        },
        body:
          h.warn({
            en: '**Their main dry-lab artefact is a repaired model, not a prediction.** The published *B. subtilis* GEM **iBsu1147 does not grow anaerobically.** They had to find and engineer **two additional pathways** so it could produce biomass without oxygen, and released the revised model and the function on GitHub. They call it "one of the most important outputs of our dry lab team" — and it is, because **every anaerobic conclusion below depends on it.**',
            zh: '**他們乾式實驗的主要產出是一個被修好的模型，不是一個預測。**已發表的 *B. subtilis* 全基因體代謝模型 **iBsu1147 在厭氧條件下長不起來。**他們必須找出並補進**兩條額外路徑**，才能讓它在無氧下產生生物量，並把修訂後的模型與該函式釋出到 GitHub。他們稱之為「我們乾式實驗團隊最重要的產出之一」——而這是對的，因為**下面每一個厭氧結論都依賴它。**'
          }) +
          h.h3({ en: 'The chassis decision was reversed by the model', zh: '底盤的決定被模型翻轉了' }) +
          h.p({
            en: 'They started expecting yeast, which is the default for a secreted eukaryotic-style product. Anaerobically, *B. subtilis* keeps about **54 % of its nanobody flux where yeast keeps 18 %** — roughly 3.4× more — while growth falls 57 % against 74 %. **With oxygen the two are within about 10 %.** So the conclusion is conditional, and they say so: *"the whole chassis argument stands or falls on how much aeration a habitat can afford"*, and the advantage **depends on nitrate being supplied** for respiration.',
            zh: '他們一開始預期會用酵母，因為對一個分泌型、真核樣式的產物來說那是預設答案。但在厭氧下，*B. subtilis* 保有約 **54% 的奈米抗體通量，而酵母只保有 18%**——大約多 3.4 倍——而生長量下降 57%，酵母則是 74%。**有氧時兩者差距約在 10% 以內。**所以這個結論是有條件的，而他們把條件說出來：*「整個底盤論證的成立或不成立，取決於一個居住艙能負擔多少曝氣」*，而這個優勢**取決於是否供應硝酸鹽**以供呼吸。'
          }) +
          h.cards([
            { chips: [{ t: { en: 'feedstock', zh: '料源' }, k: 'g' }],
              h: { en: 'Checked before it was committed to', zh: '在拍定之前先檢查過' },
              p: { en: 'Sucrose from a growth-capped cyanobacterial partner rather than glucose. The per-carbon analysis showed the switch **costs *B. subtilis* nothing anaerobically** — *"which is what made the co-culture defensible rather than merely necessary."*', zh: '用來自受限產能藍菌夥伴的蔗糖，而不是葡萄糖。以每個碳原子為單位的分析顯示，這個切換**在厭氧下對 *B. subtilis* 沒有任何代價**——*「而這正是讓共培養站得住腳、而不只是不得不為的原因」*。' } },
            { chips: [{ t: { en: 'aeration', zh: '曝氣' }, k: 'v' }],
              h: { en: 'The question was reframed', zh: '問題被重新框定' },
              p: { en: 'Not "aerobic or anaerobic" but **how much growth is worth supplying oxygen for.** Growth rises roughly in proportion to oxygen supply in both hosts; *B. subtilis* grows without oxygen and faster with nitrate, while yeast grows without it only if sterols are supplied. **That is a reactor requirement, not a modelling result.**', zh: '問的不是「好氧還是厭氧」，而是**為了多少生長量才值得供應氧氣。**在兩個宿主中，生長量大致與氧氣供應成比例；*B. subtilis* 無氧也能長、有硝酸鹽時更快，而酵母只有在補充固醇時才能無氧生長。**那是一個反應器需求，不是一個建模結果。**' } },
            { chips: [{ t: { en: 'negative result', zh: '負面結果' }, k: 'r' }],
              h: { en: 'A model output that says where NOT to spend effort', zh: '一個告訴你「不要把力氣花在哪裡」的模型輸出' },
              p: { en: 'Competing-pathway knockouts in the cyanobacterial supplier: the models say they do nothing, **"and which we now understand FBA cannot evaluate."** The negative result and the reason the method cannot be trusted on it, printed together.', zh: '在藍菌供應者中做競爭路徑剔除：模型說它們沒有作用，**「而我們現在明白通量平衡分析根本無法評估這件事」**。負面結果與「為什麼這個方法在這件事上不可信」被一起印出來。' } }
          ]) +
          h.h3({ en: 'The dry lab writes the wet lab\'s to-do list, including where the models disagree', zh: '乾式實驗替濕式實驗寫待辦清單，連「模型彼此矛盾的地方」也寫進去' }) +
          h.ul([
            { en: '**Build and compare the nanobody in *B. subtilis* alongside yeast, measuring titre *and folding quality*, "because FBA measures capacity and not quality."**', zh: '**在 *B. subtilis* 與酵母中並行建構並比較那個奈米抗體，量產量*也量折疊品質*，「因為通量平衡分析量的是容量，不是品質」。**' },
            { en: 'Run the co-culture at the **capped supplier operating point** and measure both sucrose and dissolved oxygen — two variables, because either alone could mislead.', zh: '在**供應者受限的操作點**運行共培養，並同時量蔗糖與溶氧——兩個變數，因為只量其中一個都可能誤導。' },
            { en: '**Measure the induction window.** Both dynamic models say the optimum is early and the penalty for missing it is **asymmetric** — and **the two models disagree about how early, "which is itself a result to settle experimentally."**', zh: '**量出誘導時間窗。**兩個動態模型都說最佳時機偏早，而錯過的代價是**不對稱的**——而且**兩個模型對「多早」彼此不一致，「而這件事本身就是一個該由實驗去定案的結果」。**' },
            { en: '**Confirm that the two gap-filling reactions added to the *Bacillus* model correspond to activity the strain actually has** — i.e. go and check the repair.', zh: '**確認補進 *Bacillus* 模型的那兩條填補反應，真的對應該菌株實際具有的活性**——也就是回頭去檢查那次修補本身。' }
          ]) +
          h.note({
            en: '**Limitations stated as properties of the method, not as apologies.** FBA has no regulation, so any strategy that works by changing a stress response is invisible to it. FBA has no time axis, which is why the dynamic models exist — but those have **no metabolism beyond lumped Monod terms**. **Only the yeast maximum specific growth rate is FBA-derived; every other parameter is literature-supported but not strain-specific.** And the co-culture arithmetic is idealised: it assumes steady state and that all exported sucrose reaches the partner, ignoring transfer losses, spatial gradients, competition for shared nutrients and pH coupling.',
            zh: '**限制被寫成方法的性質，而不是道歉。**通量平衡分析沒有調控，所以任何「透過改變壓力反應而起作用」的策略對它都是看不見的。通量平衡分析沒有時間軸，這就是動態模型存在的理由——但那些模型**除了集總的 Monod 項之外沒有任何代謝**。**只有酵母的最大比生長速率是由通量平衡分析推出的；其他每一個參數都有文獻依據，但不是菌株專一的。**而共培養的算術是理想化的：它假設穩態、且所有輸出的蔗糖都抵達夥伴，忽略傳輸損失、空間梯度、共享養分的競爭與 pH 耦合。'
          })
      });

      /* ---------------- hardware ---------------- */
      out += h.sec({
        id: 'k-hw',
        kick: { en: 'Hardware', zh: '硬體' },
        h2: { en: '25 logged iterations, each one "Changed / Learned"', zh: '25 次有紀錄的迭代，每一次都有「改了什麼／學到什麼」' },
        lede: {
          en: 'A 20 × 24 × 31 cm, 2.2 kg, 30 W bioreactor plus an automated purification train. Bioreactor 11 iterations, filtration unit 7, fluid dispensing 7 — each published as what was changed and what it taught.',
          zh: '一台 20×24×31 公分、2.2 公斤、30 W 的生物反應器，加上一條自動化純化串列。生物反應器 11 次迭代、過濾單元 7 次、流體分送 7 次——每一次都以「改了什麼」與「它教了什麼」的形式公開。'
        },
        body:
          h.h3({ en: 'COMSOL decided the rotor, and the simulation is scoped', zh: 'COMSOL 決定了轉子，而那個模擬有標註範圍' }) +
          h.p({
            en: 'Flow changed strongly with gravity, so **buoyancy-driven convection cannot be relied on** — hence a motor-driven rotor. Three geometries were compared: the large paddle left the upper vessel slow, the large blades **split the flow into separate loops**, and the **small tilted blades (29 mm, 39°, three rows) gave one continuous circulation loop over the full height** and became the final design.',
            zh: '流場隨重力劇烈改變，所以**不能依賴浮力驅動的對流**——因此採用馬達驅動的轉子。三種幾何被比較：大型槳葉讓容器上部流速偏慢、大型葉片**把流場切成好幾個獨立迴圈**，而**小型傾斜葉片（29 mm、39°、三排）給出貫穿整個高度的單一連續循環迴圈**，成為最終設計。'
          }) +
          h.warn({
            en: 'And then the honest part, in the same section: even with that rotor, **circulation on the Moon and in transit stayed partly confined at 200 rpm**, which limits oxygen supply and yield — plus *"all of our laboratory tests were run at Earth gravity, and the results above have not yet been checked against a real culture in reduced gravity."*',
            zh: '接著是同一節裡誠實的那一段：即使用了那個轉子，**在月面與航程中，200 rpm 下的循環仍然部分受限**，這會限制氧氣供應與產量——再加上*「我們所有的實驗室測試都是在地球重力下進行的，而上述結果尚未在低重力下對真實培養物做過檢驗」*。'
          }) +
          h.h3({ en: 'Iterations worth their own line', zh: '值得各自一行的那些迭代' }) +
          h.tbl({
            cols: [
              { t: { en: 'Changed', zh: '改了什麼' }, w: '34%' },
              { t: { en: 'Learned', zh: '學到什麼' } }
            ],
            rows: [
              [{ en: 'A 3D-printed attachment holding a magnetic bead for stirring', zh: '以 3D 列印配件夾住磁珠做攪拌' },
               { en: 'The bead **traced an off-centre circle instead of spinning in place**, so they returned to a motor-driven rotor.', zh: '磁珠**在原地畫出偏心圓而不是定點旋轉**，所以他們回到馬達驅動的轉子。' }],
              [{ en: 'A 100 W flexible heater with a DS18B20 sensor', zh: '100 W 軟性加熱片搭配 DS18B20 感測器' },
               { en: 'Too high-rated and too large for the vessel. Replaced by **two 30 W heaters as a jacket**, which took water **18 → 47 °C on about 18 W** with even coverage.', zh: '對這個容器來說功率過高、體積過大。改為**兩片 30 W 加熱片做成夾套**，以約 18 W 把水從 **18 °C 加到 47 °C**，覆蓋均勻。' }],
              [{ en: 'A PID controller', zh: 'PID 控制器' },
               { en: '**Tried and then removed.** Simple on/off held the temperature within ±0.5 °C, and "PID only added complexity and delay."', zh: '**試了之後移除。**單純的開關控制就把溫度維持在 ±0.5 °C 以內，而「PID 只增加了複雜度與延遲」。' }],
              [{ en: 'Sensors and actuators combined on an Arduino Mega with a touchscreen', zh: '把感測器與致動器整合到 Arduino Mega 上並加觸控螢幕' },
               { en: 'A **10-hour run exposed a blank-screen fault**, fixed by **separating high- and low-current circuits.**', zh: '一次**10 小時的運行暴露出黑屏故障**，解法是**把大電流與小電流電路分開。**' }],
              [{ en: 'A 0.2 µm PVDF syringe filter on a yeast mixture', zh: '在酵母混合液上用 0.2 µm PVDF 針筒濾器' },
               { en: '**Clogged after about 100 mL**, so a multi-stage system was needed.', zh: '**約 100 mL 之後堵住**，所以需要多段式系統。' }],
              [{ en: 'Printed chamber heights of 5, 10, 15 and 20 mm, compared', zh: '列印 5、10、15、20 mm 四種腔室高度並比較' },
               { en: 'The **15 mm chamber filtered about 570 mL while staying about 25 % smaller** than the previous three-stage unit.', zh: '**15 mm 腔室可過濾約 570 mL，同時比先前的三段式單元小約 25%。**' }],
              [{ en: 'Laser-cut silicone gaskets between threaded modules', zh: '在螺紋模組之間加入雷射切割的矽膠墊片' },
               { en: '**No leaks over 500 mL at 240 mL/min and at least 30 assembly cycles** — after M42 threads alone still leaked plastic on plastic.', zh: '**在 240 mL/min 下過 500 mL 不漏，且至少 30 次組裝循環** ——而在此之前，單靠 M42 螺紋在塑膠對塑膠的情況下仍會漏。' }],
              [{ en: 'A4988 stepper drivers swapped for TMC2209', zh: '把 A4988 步進驅動器換成 TMC2209' },
               { en: 'Driver choice strongly affected reliability and accuracy, **"so test drivers early"** — the Learn written as advice to the next team.', zh: '驅動器的選擇強烈影響可靠性與精度，**「所以要及早測試驅動器」**——這個 Learn 是寫給下一支隊伍的建議。' }],
              [{ en: 'Motor rotations calculated for a 10 mL dose', zh: '為 10 mL 劑量計算馬達轉數' },
               { en: '**"Calculation was only a starting point; real dispensing trials refined it."**', zh: '**「計算只是一個起點；真實的分送試驗才把它校正過來。」**' }],
              [{ en: 'Booster pumps with an air inlet and check valve', zh: '加壓泵搭配進氣口與止回閥' },
               { en: '**Without an air inlet, a vacuum limits how much liquid is cleared** from the tubing.', zh: '**沒有進氣口時，真空會限制管路中能被清出多少液體。**' }]
            ],
            min: 740,
            source: { en: 'Read from the team\'s Hardware page design-iteration log.', zh: '讀自該隊 Hardware 頁的設計迭代紀錄。' }
          }) +
          h.h3({ en: 'Validation with real numbers', zh: '帶真實數字的驗證' }) +
          h.ul([
            { en: '**Temperature:** held at a 36.00 °C setpoint with mean 35.97 °C, **steady-state error −0.03 °C**, observed range 35.94–36.00 °C, SD ≈ 0.03 °C — under plain on/off control, which is the point.', zh: '**溫度：**維持在 36.00 °C 設定點，平均 35.97 °C，**穩態誤差 −0.03 °C**，觀測範圍 35.94–36.00 °C，標準差約 0.03 °C——而且是在純開關控制下達成的，這才是重點。' },
            { en: '**pH:** the sensor tracked deliberate acid and base spikes — 6.4 → ~5.5 → ~4.1 → ~6.8 — and **settled within about one to two minutes** after each change.', zh: '**pH：**感測器追上了刻意製造的加酸與加鹼衝擊——6.4→約 5.5→約 4.1→約 6.8——而且每次變化後都**在大約一到兩分鐘內穩定下來。**' },
            { en: '**Dosing arithmetic rather than trial and error:** the acid or base dose for a 500 mL culture is derived from how far the pH is from the setpoint, how strongly the medium resists change, and the titrant concentration.', zh: '**靠算術而不是試錯來給藥：**500 mL 培養物所需的酸或鹼量，是由「pH 離設定點多遠」、「培養基抵抗變化的強度」與「滴定液濃度」推出來的。' },
            { en: '**Sterility handled by what is and is not autoclavable:** a sterilisable glass vessel with a six-port 3D-printed lid; autoclaving sterilises the glass, and **parts that cannot be autoclaved are replaced or wiped with 70 % ethanol** — the compromise stated rather than skipped.', zh: '**滅菌是依「哪些能高壓滅菌、哪些不能」來處理的：**可滅菌玻璃容器配上 3D 列印的六孔蓋；高壓滅菌處理玻璃，而**不能高壓滅菌的零件則更換或以 70% 乙醇擦拭**——這個折衷被說出來，而不是跳過。' },
            { en: 'Plus *E. coli* growth in the vessel, and a requirements table in which **every row carries a priority and a written justification** — including why something is *low* priority (25 → 37 °C in under an hour matters little against experiments that run for days) and where a tolerance comes from (0.3 mm sits inside the printer\'s 0.1–0.5 mm accuracy).', zh: '另外還有在該容器中培養大腸桿菌，以及一張需求表，**其中每一列都附上優先度與書面理由**——包括為什麼某項是*低*優先度（25→37 °C 一小時內達成，對於要跑好幾天的實驗來說影響很小），以及某個公差是怎麼來的（0.3 mm 落在列印機 0.1–0.5 mm 的精度範圍內）。' }
          ])
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'k-fail',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, in their own words', zh: '用他們自己的話說，哪些還沒解決' },
        lede: {
          en: 'Their measurement page ends with four numbered limitations, and the first one is the one that matters most.',
          zh: '他們的量測頁以四條編號的限制收尾，而第一條是最關鍵的那一條。'
        },
        body:
          h.ul([
            { en: '**Every readout measures growth, metabolic activity or survival — so none of them can independently establish that Dsup protects DNA.** The missing measurement is named: **the comet assay** (single-cell gel electrophoresis), for which they have **already adapted and published the protocol without having run it.**', zh: '**每一種讀值量的都是生長、代謝活性或存活——所以沒有任何一種能獨立證明 Dsup 保護了 DNA。**缺少的那個量測被指名了：**彗星試驗**（單細胞膠體電泳），而他們**已經把流程改寫並公開，只是還沒跑過。**' },
            { en: '**Nuclear localisation of the improved variant is inferred from protection, not imaged.** They say they aim to investigate it by fluorescence microscopy — i.e. the premise of their best result is still unproven.', zh: '**改良變異體的核定位是由「有保護」推論出來的，不是影像拍出來的。**他們說打算用螢光顯微鏡去查——也就是說，他們最好的那個結果的前提目前仍未被證實。' },
            { en: 'More **independent biological replicates** are needed, as distinct from technical ones.', zh: '需要更多**獨立的生物重複**，而不是技術重複。' },
            { en: 'The working-cell-density step **needs standardising** so the resazurin absorbance range survives in every strain.', zh: '工作細胞密度那一步**需要標準化**，才能讓 resazurin 的吸光範圍在每一株菌中都還夠用。' },
            { en: '**Mixing in reduced gravity is still partly confined**, nothing has been tested off Earth, and no live culture has been run in simulated microgravity.', zh: '**低重力下的混合仍然部分受限**，沒有任何東西在地球以外測試過，也沒有任何活體培養在模擬微重力下跑過。' },
            { en: '**iBsu1147 needed two pathways added to grow anaerobically, and those additions need experimental confirmation** — which they list as a wet-lab task.', zh: '**iBsu1147 需要補進兩條路徑才能厭氧生長，而這兩條補充需要實驗確認**——他們把這列為一項濕式實驗任務。' },
            { en: 'Most dynamic-model parameters are **literature-supported but not strain-specific.**', zh: '大多數動態模型參數都是**有文獻依據、但不是菌株專一的。**' },
            { en: '**Not every payload in the library was produced or purified**, and the five-stage workflow is marked Proposed.', zh: '**庫中並非每個酬載都被生產或純化過**，而那套五階段流程被標記為「提議中」。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'k-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from KAUST-KSA', zh: '我們會從 KAUST-KSA 抄什麼' },
        body:
          h.ul([
            { en: '**Scope the claim in the sentence that makes it.** "Genetic integration and radiation-testing activities should be distinguished from a demonstrated increase in resistance" is a model sentence for any iGEM wiki, and it costs one clause.', zh: '**在提出主張的那句話裡就標出範圍。**「基因整合與輻射測試活動，應與已證明的抗性提升區分開來」是任何 iGEM wiki 都可以當範本的句子，而它只要多寫一個子句。' },
            { en: '**Optimise the assay on wild type before you compare strains.** Dose range and readout window first; the comparison second. Otherwise you cannot tell a flat result from a saturated one.', zh: '**在比較菌株之前，先在野生型上把試驗最佳化。**先定劑量範圍與讀值視窗，再做比較。否則你分不出「沒有差異」和「訊號飽和」。' },
            { en: '**Three readouts measuring three different things**, so "survived", "still metabolising" and "grew again" cannot be confused with one another.', zh: '**用三種讀值量三件不同的事**，這樣「活下來」、「還在代謝」與「又長起來了」就不會被混成同一件事。' },
            { en: '**Make the hard choice the harder one.** A single genomic copy instead of a multicopy plasmid, because the plasmid would have flattered the result.', zh: '**把困難的選擇選成更難的那一個。**用單一基因體拷貝而不是多拷貝質體，因為質體會讓結果看起來更好。' },
            { en: '**Ask whether the robustness modification costs you the product.** FfIBP yield in WT against Dsup is the control that turns "we made it radiation-resistant" into a platform claim.', zh: '**問清楚那個強健性改造是否讓你損失產品。**比較野生型與帶 Dsup 的 FfIBP 產量，就是那個把「我們讓它耐輻射」變成一個平台主張的對照。' },
            { en: '**Publish a model output that says where not to spend effort**, with the reason the method cannot settle it. "The models say they do nothing, and we now understand FBA cannot evaluate this" is two findings in one sentence.', zh: '**公開一個「告訴你不要把力氣花在哪裡」的模型輸出**，並附上「為什麼這個方法無法定案」的理由。「模型說它們沒有作用，而我們現在明白通量平衡分析無法評估這件事」是一句話裡的兩個發現。' },
            { en: '**Fix the public model and release the fix.** A corrected iBsu1147 outlives the project, and it is also the honest way to report that every anaerobic number depends on it.', zh: '**把公開的模型修好，並把修正釋出。**一個修正過的 iBsu1147 會比這個專案活得更久，而這也是「每一個厭氧數字都依賴它」最誠實的報告方式。' },
            { en: '**Log hardware as Changed / Learned, every iteration, including the ones you reversed.** PID removed, magnetic stirrer abandoned, heater downsized — a reversal is a finding.', zh: '**把硬體以「改了什麼／學到什麼」逐次記錄，包括你後來推翻的那些。**移除 PID、放棄磁攪拌、把加熱片縮小——一次推翻就是一個發現。' },
            { en: '**Calibrate what you calculated.** Motor rotations for 10 mL were a starting point, not an answer, and they say so.', zh: '**把你算出來的東西拿去校正。**10 mL 所需的馬達轉數只是一個起點，不是答案，而他們把這點說出來。' },
            { en: '**Label the AI-generated image.** "Generated with GPT-6" under the card that used one, twice on the same page.', zh: '**標註 AI 生成的圖。**在使用了 AI 圖的卡片下面寫「以 GPT-6 生成」，而且同一頁寫了兩次。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the ten items above, and the judgement that scoping claims inline is the single most transferable practice on this wiki. Everything else is the team\'s own, read from [2026.igem.wiki/kaust-ksa](https://2026.igem.wiki/kaust-ksa/).',
            zh: '標示為我們的看法：上面十點，以及「就地標註主張範圍是這個 wiki 上最可轉移的單一做法」這個判斷。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/kaust-ksa](https://2026.igem.wiki/kaust-ksa/)。'
          })
      });

      return out;
    }
  };
})(window);
