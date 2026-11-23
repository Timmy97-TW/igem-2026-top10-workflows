/* HangzhouFourteenAP — enzymes and peptides against dental calculus and cariogenic
   biofilm. Top 10 High School and Best Village Project, iGEM 2026.
   Everything on this page is read from https://2026.igem.wiki/hangzhoufourteenap/ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};
  function team(id) { return (PD.teamsHS || []).filter(function (t) { return t.id === id; })[0] || {}; }

  var SWIM = {
    wet: [
      { l: { en: 'Four constructs into one backbone', zh: '四個構築放進同一個骨架' },
        s: { en: 'Four codon-optimised genes, Gibson into pET-32a; colony PCR against the plasmid T7 Terminal-R', zh: '四個密碼子最佳化的基因以 Gibson 接入 pET-32a；菌落 PCR 搭配質體上的 T7 Terminal-R 引子' } },
      { l: { en: 'Express, purify, cut the tag off', zh: '表達、純化，把標籤切掉' },
        s: { en: 'Rosetta(DE3), native Ni beads, on-bead enterokinase; 18aa gave no induced band at all', zh: 'Rosetta(DE3)、原態 Ni 磁珠、珠上腸激酶切割；18aa 完全沒有誘導後的條帶' }, tone: 'r' },
      { l: { en: 'Make the substrate yourself', zh: '自己做出基質' },
        s: { en: 'Aspergillus niger was off the White List, so α-1,3-glucan came out of shiitake instead', zh: 'Aspergillus niger 不在白名單上，於是 α-1,3-葡聚糖改從香菇中提取' }, tone: 'a' },
      { l: { en: 'Activity, with three negatives', zh: '活性，配三種陰性對照' },
        s: { en: 'DNS reducing sugar; PBS arm, heat-inactivated arm, and a swapped-substrate arm on the same plate', zh: 'DNS 還原糖法；同一塊盤上同時放 PBS 組、加熱去活組與基質互換組' }, tone: 'g' },
      { l: { en: 'Build an artificial calculus, then leave one out', zh: '做出人工牙結石，然後逐一抽走一種' },
        s: { en: 'B. subtilis biofilm, five mineralisation cycles; six arms read three ways', zh: 'B. subtilis 生物膜加五輪礦化；六個處理組，分三種方式讀取' } },
      { l: { en: 'Build the two mutants the model named', zh: '把模型指名的兩個突變體做出來' },
        s: { en: 'Y166Q and Q172P by reverse PCR, Sanger-verified, normalised by BCA, then judged by DNS', zh: '以反向 PCR 做出 Y166Q 與 Q172P，經 Sanger 定序確認，用 BCA 校平後再以 DNS 評判' }, tone: 'a' }
    ],
    dry: [
      { l: { en: 'Put the burden on a map', zh: '把疾病負擔畫到地圖上' },
        s: { en: 'GBD 2019 country maps of the top five oral diseases, plus the national survey charts', zh: '以 GBD 2019 畫出五大口腔疾病的各國地圖，另加全國調查的圖表' }, tone: 't' },
      { l: { en: 'Rank four peptides before making any', zh: '在做出任何一個之前先把四個肽排序' },
        s: { en: 'AlphaFold Server on peptide–Ca²⁺ interfaces; four candidates, the two kept only at pTM ≈ 0.4', zh: '用 AlphaFold Server 算肽與 Ca²⁺ 的介面；四個候選，留下的兩個 pTM 都只有約 0.4' } },
      { l: { en: 'Read the pocket off a real structure', zh: '從一個真實結構上讀出口袋' },
        s: { en: 'PDB 8IUB already has isomaltotriose bound; PyMOL lists 18 residues within 4.0 Å', zh: 'PDB 8IUB 本身已結合異麥芽三糖；PyMOL 列出 4.0 Å 內的 18 個殘基，無須對接' } },
      { l: { en: 'Let evolution delete most of the list', zh: '讓演化把清單砍掉大半' },
        s: { en: 'BLASTp homologs at 30–70 % identity, MAFFT plus ESPript; only 7 of the 18 carry natural substitutions', zh: '以 BLASTp 取 30–70% 相似度的同源序列，MAFFT 加 ESPript；18 個中只有 7 個帶有天然取代' } },
      { l: { en: 'Score 12 mutants, publish the threshold', zh: '為 12 個突變體打分，並公開門檻' },
        s: { en: 'FoldX ΔΔG_fold and ΔΔG_bind, cutoff set in advance; only Y166Q cleared it, Q172P kept as second', zh: 'FoldX 算 ΔΔG_fold 與 ΔΔG_bind，門檻事先定下；只有 Y166Q 通過，Q172P 以第二名保留' }, tone: 'g' },
      { l: { en: 'Turn colour into units', zh: '把顏色換成單位' },
        s: { en: 'A glucose standard curve behind every number: R² = 0.9606, then 0.9762 for the mutants', zh: '每個數字背後都有葡萄糖標準曲線：R²=0.9606，突變體實驗則為 0.9762' } }
    ],
    links: [
      { w: 0, d: 1, l: { en: 'the ranking chose which two peptides to clone', zh: '這個排序決定了要選殖哪兩個肽' }, up: true },
      { w: 5, d: 4, l: { en: 'FoldX named Y166Q and Q172P', zh: 'FoldX 指名 Y166Q 與 Q172P' }, up: true },
      { w: 3, d: 5, l: { en: 'net OD₅₄₀ becomes U/mL', zh: '淨 OD₅₄₀ 被換算成 U/mL' } }
    ]
  };

  PD.pages['hs-hangzhou'] = {
    label: { en: 'HangzhouFourteenAP', zh: 'HangzhouFourteenAP' },
    title: { en: 'HangzhouFourteenAP — enzymes against dental calculus', zh: 'HangzhouFourteenAP — 對付牙結石的酵素' },
    render: function (h) {
      var t = team('hangzhou');
      var out = h.teamhero(t, {
        h1: {
          en: 'Treat calculus as a polysaccharide matrix problem rather than a brushing problem — then ==publish the construct that never expressed, and the ranking your own bench overturned==.',
          zh: '把牙結石當成多糖基質的問題，而不是刷牙的問題——然後==把那個從未表達的構築、以及那個被自己實驗檯推翻的排序，一起公開==。'
        },
        lede: {
          en: 'Four constructs in one backbone: three gave protein, one gave nothing, and the one that gave nothing is written up with its three candidate explanations and then dropped. The computational ranking of two CoGH66 mutants was reversed by their own activity assay, and they say so in the overview paragraph rather than in a footnote. The specificity claim survives because each enzyme was run against a PBS control, a heat-inactivated control and a swapped substrate on the same plate. The target: oral diseases affect an estimated 3.7 billion people, and China\'s Fourth National Oral Health Epidemiological Survey puts dental calculus in 96.7 % of adults aged 35–44 while only 9.1 % of that group has a healthy periodontium. Mechanical scaling works and is nevertheless avoided, so this team went after the organic scaffold instead — two glycosidases with complementary linkage specificity, plus a hydroxyapatite-binding antimicrobial peptide to keep the cleaned surface clean.',
          zh: '四個構築建在同一個骨架上：三個做出了蛋白，一個什麼都沒有，而那個什麼都沒有的，被寫成三個可能原因之後正式棄用。兩個 CoGH66 突變體的計算排序被他們自己的活性試驗推翻了，而這件事寫在概述的第一段，不是寫在註腳裡。專一性的主張之所以站得住腳，是因為每個酵素都在同一塊盤上同時跑了 PBS 對照、加熱去活對照與基質互換組。至於標的：口腔疾病影響約 37 億人，而中國第四次全國口腔健康流行病學調查顯示，35–44 歲成人有 96.7% 帶有牙結石，而這個年齡層只有 9.1% 擁有健康的牙周。機械式洗牙有效，卻依然被迴避，於是這支隊伍改去對付那層有機支架——兩個鍵結專一性互補的糖苷酶，加上一個能結合羥基磷灰石的抗菌肽，讓清乾淨的表面繼續保持乾淨。'
        },
        chips: [
          { t: { en: 'Two complementary glycosidases', zh: '兩個互補的糖苷酶' }, k: 'b' },
          { t: { en: 'pET-32a Trx-His, tag cut off', zh: 'pET-32a Trx-His，標籤切除' }, k: 't' },
          { t: { en: '18aa published as a failure', zh: '18aa 以失敗的形式公開' }, k: 'r' },
          { t: { en: 'FoldX ranking, reversed at the bench', zh: 'FoldX 排序，在實驗檯被推翻' }, k: 'g' },
          { t: { en: 'White-List surrogates throughout', zh: '全程使用白名單替代物' }, k: 'a' }
        ],
        stats: [
          { v: '3.7 billion', l: { en: 'People affected by oral diseases, the number their description opens on', zh: '受口腔疾病影響的人數，也是他們專案描述開場的那個數字' } },
          { v: '96.7 %', l: { en: 'Chinese adults aged 35–44 with dental calculus, Fourth National Survey', zh: '帶有牙結石的 35–44 歲中國成人比例，第四次全國調查' } },
          { v: '4 → 3', l: { en: 'Constructs cloned and verified, against constructs that gave a detectable protein', zh: '完成選殖並驗證的構築數，對比真的做出可偵測蛋白的構築數' } },
          { v: '57.1 %', l: { en: 'Residual biofilm biomass removed by the complete cocktail against PBS, crystal violet', zh: '完整配方相對 PBS 去除的殘餘生物膜量，結晶紫法' } },
          { v: '91.4 %', l: { en: 'Reduction in residual acridine-orange fluorescence, complete cocktail against PBS', zh: '殘餘吖啶橙螢光的下降幅度，完整配方對 PBS' } },
          { v: '1.881 vs 0.996', l: { en: 'Net OD₅₄₀ of Q172P against wild type — the mutant FoldX ranked second', zh: 'Q172P 對野生型的淨 OD₅₄₀——而 FoldX 把這個突變體排在第二' } }
        ]
      });

      out += h.toc([
        { id: 'z-idea', t: { en: 'The idea', zh: '核心想法' } },
        { id: 'z-fail', t: { en: 'The one that failed', zh: '失敗的那一個' } },
        { id: 'z-swim', t: { en: 'Wet ↔ dry', zh: '濕式↔乾式' } },
        { id: 'z-wet', t: { en: 'Wet lab', zh: '濕式流程' } },
        { id: 'z-ctrl', t: { en: 'The control design', zh: '對照的設計' } },
        { id: 'z-dry', t: { en: 'Dry lab', zh: '乾式流程' } },
        { id: 'z-open', t: { en: 'What is open', zh: '還沒解決的部分' } },
        { id: 'z-steal', t: { en: 'What we would copy', zh: '我們會抄什麼' } }
      ]);

      /* ---------------- idea ---------------- */
      out += h.sec({
        id: 'z-idea',
        kick: { en: 'The idea', zh: '核心想法' },
        h2: { en: 'A dentist told them the enzyme idea was "like an egg hitting a stone" — and the project moved', zh: '一位牙醫告訴他們那個酵素想法「像雞蛋撞石頭」——於是整個專案移位了' },
        lede: {
          en: 'Dental calculus is not hardened plaque in the sense of being only mineral. It is a calcium phosphate shell holding an organic matrix of polysaccharides, proteins and extracellular DNA, and the organic part is the part an enzyme can reach.',
          zh: '牙結石並不是「硬掉的牙菌斑」那種只剩礦物的東西。它是一層磷酸鈣外殼，裡面包著由多糖、蛋白質與胞外 DNA 組成的有機基質，而有機的那一部分，才是酵素碰得到的地方。'
        },
        body:
          h.p({
            en: 'The problem statement is the gap between how common calculus is and how rarely anyone has it removed. Globally, oral diseases affect an estimated **3.7 billion people**; India and China carry the largest cumulative caseloads of the top five oral diseases, at **632 million and 599 million**; in the Western Pacific Region about **960 million people (43 %)** live with untreated oral conditions, at an estimated **US$192 billion**. The Chinese survey numbers are the ones that set the target.',
            zh: '他們的問題陳述就是：牙結石有多普遍，和真的有人去把它清掉有多罕見，兩者之間的落差。在全球層面，口腔疾病影響約 **37 億人**；印度與中國在五大口腔疾病上的累計病例數最高，分別是 **6.32 億與 5.99 億**；西太平洋區約有 **9.6 億人（43%）** 帶著未經治療的口腔問題，估計經濟負擔為 **1,920 億美元**。而真正定出標的的，是中國調查裡的那幾個數字。'
          }) +
          h.kv([
            [{ en: 'Calculus, adults 35–44', zh: '牙結石，35–44 歲成人' }, { en: '**96.7 %**', zh: '**96.7%**' }],
            [{ en: 'Gingival bleeding, same group', zh: '牙齦出血，同一族群' }, { en: '**87.4 %**', zh: '**87.4%**' }],
            [{ en: 'Healthy periodontium, same group', zh: '牙周健康，同一族群' }, { en: '**9.1 %**', zh: '**9.1%**' }],
            [{ en: 'Calculus already detectable', zh: '已可檢出牙結石' }, { en: '**84.5 %** at age 12, **91.0 %** at age 15', zh: '12 歲 **84.5%**、15 歲 **91.0%**' }],
            [{ en: 'Dental visit in the past year, elderly', zh: '過去一年就診率，老年人' }, { en: '**20.1 %**', zh: '**20.1%**' }]
          ]) +
          h.warn({
            en: '**The interview that moved the target.** Dr Wang Yongwu told them that using enzymes to dissolve already-mineralised calculus is *"like an egg hitting a stone"*, with little effect. They then drew the safety consequence themselves: calculus and enamel are **both calcium phosphate**, so a non-selective demineralising agent would attack the tooth as well. Dr Lei added that before mineralisation the organic components — polysaccharides, proteins, eDNA — can still be hydrolysed. So the intervention window became **the early biofilm, before it mineralises**, and the project scope was rewritten on the Human Practices page as **daily prevention and risk reduction, explicitly not treatment of existing calculus or periodontal disease.**',
            zh: '**那場讓標的移位的訪談。**王永武醫師告訴他們，用酵素去溶解已經礦化的牙結石，*「像雞蛋撞石頭」*，效果極小。他們接著自己推出了安全上的後果：牙結石與琺瑯質**同樣都是磷酸鈣**，所以一個不具選擇性的去礦化劑，也會一起攻擊牙齒。雷醫師補充，在礦化之前，有機成分——多糖、蛋白質、胞外 DNA——仍然可以被水解。於是介入的時間窗變成**礦化之前的早期生物膜**，而專案範圍也在人類實踐頁上被改寫為**每日預防與風險降低，並明確寫出「不是」治療既有牙結石或牙周病。**'
          }) +
          h.h3({ en: 'Which enzymes to make, and which to simply buy', zh: '哪些酵素自己做，哪些直接買' }) +
          h.p({
            en: 'The matrix needs three activities: a glycosidase for the polysaccharide, a protease for the protein, a nuclease for the eDNA. They considered expressing all three classes and were advised not to: proteases are toxic to *E. coli* and form inclusion bodies, DNase I yields are low and it already costs almost nothing commercially. So the synthetic-biology effort was pointed at the glycosidases only — **PmGH87**, an α-1,3-glucanase from *Prevotella melaninogenica*, and **CoGH66**, an α-1,6-glucanase from *Capnocytophaga ochracea* — with papain and bovine DNase I bought in. One expert also proposed fusing the two glucanases into a chimera; a structural biologist talked them out of it, on folding mechanism, optimal pH and substrate binding mode, and the effort went into a single-point mutation of CoGH66 instead.',
            zh: '這層基質需要三種活性：對多糖的糖苷酶、對蛋白質的蛋白酶、對胞外 DNA 的核酸酶。他們本來考慮三類全部自己表達，但被建議不要：蛋白酶對 *E. coli* 有毒性且容易形成包涵體，DNase I 產量低、而且商品化價格已經近乎便宜到底。於是合成生物學的力氣只指向糖苷酶——來自 *Prevotella melaninogenica* 的 α-1,3-葡聚糖酶 **PmGH87**，與來自 *Capnocytophaga ochracea* 的 α-1,6-葡聚糖酶 **CoGH66**——木瓜蛋白酶與牛胰 DNase I 則直接採購。另有專家提議把兩個葡聚糖酶融合成嵌合酵素；一位結構生物學者從折疊機制、最適 pH 與基質結合模式三點把他們勸退，那份力氣改投到 CoGH66 的單點突變上。'
          }) +
          h.flow({
            title: { en: 'The proposed product: three carriers, released in order', zh: '提議中的產品：三個載體，依序釋放' },
            sub: { en: 'Papain digests the other proteins in the formulation, which is the reason this is three carriers rather than one tube. Only the three toothpaste matrices were actually prepared; the gum, film and mouthwash formats are drawings.', zh: '木瓜蛋白酶會把配方裡其他的蛋白消化掉，這就是它必須是三個載體而不是一條管子的原因。真正做出來的只有牙膏那三個基質；口香糖、口腔膜片與漱口水都還只是設計圖。' },
            stages: [
              { label: { en: 'Methylcellulose', zh: '甲基纖維素' }, sub: { en: 'DNase I + PmGH87 + CoGH66; hydrates first in saliva', zh: 'DNase I ＋ PmGH87 ＋ CoGH66；在唾液中最先吸水' }, tone: 'b',
                items: [{ en: 'cuts the matrix open at once', zh: '立刻把基質切開' }] },
              { label: { en: 'Alginate beads', zh: '海藻酸鈣微珠' }, sub: { en: 'Papain, in low-crosslink calcium alginate beads', zh: '木瓜蛋白酶，包在低交聯的海藻酸鈣微珠裡' }, tone: 'a',
                items: [{ en: 'a short lag keeps it off the enzymes', zh: '短暫延遲讓它避開那些酵素' }] },
              { label: { en: 'Gelatin flakes', zh: '明膠薄片' }, sub: { en: 'The 21aa peptide, in gelatin flakes, released last', zh: '21aa 肽包在明膠薄片裡，最後才釋放' }, tone: 'g',
                items: [{ en: 'papain itself opens this gate', zh: '這道門由木瓜蛋白酶自己打開' }] }
            ],
            caption: { en: 'Drawn by us from the team\'s Engineering and Human Practices pages.', zh: '由我們依該隊 Engineering 與 Human Practices 頁繪製。' }
          }) +
          h.take({ en: 'The incompatibility is used as the release mechanism', zh: '那個不相容本身被拿來當成釋放機制' }, {
            en: 'The incompatibility is real and most teams would have ignored it: a broad-spectrum cysteine protease in the same tube as two recombinant enzymes and a peptide will destroy all three. Their answer uses the problem as the mechanism — **gelatin is papain\'s substrate, so the protease that threatened the peptide is what releases it.** That is a design idea, not a paragraph of hand-waving, and it is labelled as proposed.',
            zh: '那個不相容是真的，而大多數隊伍會選擇忽略它：一個廣效的半胱胺酸蛋白酶，和兩個重組酵素加一個肽放在同一條管子裡，會把三者都毀掉。他們的解法把這個問題本身當成機制——**明膠就是木瓜蛋白酶的基質，所以原本威脅那個肽的蛋白酶，正是把它釋放出來的那一個。**這是一個設計想法，不是一段含糊的說詞，而且它被標記為「提議中」。'
          })
      });

      /* ---------------- the failure ---------------- */
      out += h.sec({
        id: 'z-fail',
        kick: { en: 'Practice', zh: '做法' },
        h2: { en: 'Four constructs, one of which never expressed — and it is on the results page', zh: '四個構築，其中一個從未表達——而它就寫在結果頁上' },
        lede: {
          en: 'All four were cloned the same way, verified the same way, and induced in the same host. Three gave a band. The fourth is the most useful thing on the page, because they published it and then acted on it.',
          zh: '四個構築用同樣的方式選殖、同樣的方式驗證、在同一個宿主裡誘導。三個出現了條帶。第四個反而是這一頁上最有用的東西，因為他們把它公開了，然後據此做出了決定。'
        },
        body:
          h.kv([
            [{ en: 'What was built', zh: '做了什麼' },
             { en: 'Codon-optimised **CoGH66**, **PmGH87**, **18aa (G12R)** and **21aa (SHABP)**, each Gibson-assembled into linearised **pET-32a** as a Trx-His fusion with an enterokinase site, cloned in **DH5α**, then moved into ***E. coli* Rosetta(DE3)** for expression.', zh: '密碼子最佳化的 **CoGH66**、**PmGH87**、**18aa（G12R）** 與 **21aa（SHABP）**，各自以 Gibson 組裝接入線性化的 **pET-32a**，做成帶腸激酶切位的 Trx-His 融合蛋白，先在 **DH5α** 中選殖，再轉入 ***E. coli* Rosetta(DE3)** 表達。' }],
            [{ en: 'How insertion was checked', zh: '插入怎麼確認' },
             { en: 'Colony PCR with each gene-specific forward primer plus the plasmid-borne **T7 Terminal-R** primer, so an insert band can only come from an assembled plasmid: **~1777 bp** (CoGH66), **~2917 bp** (PmGH87), **~141 bp** (18aa), **~154 bp** (21aa). Positive clones were then Sanger-sequenced.', zh: '菌落 PCR 以各基因專用的正向引子，搭配質體上的 **T7 Terminal-R** 引子，使插入條帶只可能來自已組裝好的質體：**約 1777 bp**（CoGH66）、**約 2917 bp**（PmGH87）、**約 141 bp**（18aa）、**約 154 bp**（21aa）。陽性菌落隨後送 Sanger 定序。' }],
            [{ en: 'What expressed', zh: '哪些表達了' },
             { en: 'Induced fusion bands at **~76.54 kDa** (CoGH66) and **~116.24 kDa** (PmGH87), mostly soluble; after native Ni purification and **on-bead enterokinase cleavage**, tag-free enzymes at **~59.46 kDa** and **~99.16 kDa**. The **21aa** fusion gave a clear induced band at **~19.55 kDa**.', zh: '誘導後的融合蛋白條帶出現在 **約 76.54 kDa**（CoGH66）與 **約 116.24 kDa**（PmGH87），且多數可溶；經原態 Ni 純化與**珠上腸激酶切割**後，無標籤酵素分別落在 **約 59.46 kDa** 與 **約 99.16 kDa**。**21aa** 融合蛋白則在 **約 19.55 kDa** 出現清楚的誘導條帶。' }],
            [{ en: 'What did not', zh: '哪個沒有' },
             { en: 'The **18aa** construct gave **no detectable induced band** under the same conditions, although the plasmid sequence was correct. Their three candidate explanations, printed together: **poor expression, rapid degradation, or toxicity to the host.** No rescue attempt is claimed.', zh: '**18aa** 構築在相同條件下**測不到任何誘導條帶**，儘管質體序列是正確的。他們把三個可能原因一起印出來：**表達不佳、迅速降解，或對宿主有毒性。**文中沒有宣稱做過任何搶救。' }],
            [{ en: 'What they did about it', zh: '他們為此做了什麼' },
             { en: 'The agar well diffusion assay was run on both crude lysates anyway: a clear inhibition zone for **21aa only**, none for 18aa and none for the negative control — consistent with there being no 18aa protein to test. **21aa was taken forward** and 18aa was dropped, which is how a negative result is supposed to end.', zh: '瓊脂孔洞擴散試驗還是把兩個粗萃液都跑了：**只有 21aa** 出現清楚的抑菌圈，18aa 沒有，陰性對照也沒有——這與「根本沒有 18aa 蛋白可測」一致。**21aa 被帶往下一步**，18aa 則被棄用，這正是一個負面結果該有的收尾。' }]
          ]) +
          h.take({ en: 'Figure 2E is the empty lane, with its uninduced control beside it', zh: '圖 2E 就是那條空白的膠道，旁邊還擺著未誘導對照' }, {
            en: 'A high school team with four constructs and a deadline has every incentive to show the three that worked and quietly leave the fourth out of the figure. Instead the empty lane is published, with the uninduced control beside it so a reader can see there is nothing to see. The cost of publishing it is one gel panel; the value is that every other claim on the page becomes easier to believe.',
            zh: '一支有四個構築、又有截稿期的高中隊伍，有一切理由只展示那三個成功的，把第四個安靜地從圖裡拿掉。但他們把那條空白的膠道公開了，旁邊還擺著未誘導對照，讓讀者看得出「這裡確實沒有東西可看」。公開它的代價是一張膠圖；它帶來的價值是，這一頁上其他每一個主張都變得更容易被相信。'
          })
      });

      /* ---------------- swimlane ---------------- */
      out += h.sec({
        id: 'z-swim',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'The dry lab chose what to clone twice, and the wet lab answered back once', zh: '乾式實驗兩次決定了要選殖什麼，而濕式實驗回敬了一次' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'Six wet-lab stages, six dry-lab stages, three handoffs', zh: '濕式六個階段、乾式六個階段、三次交接' },
          sub: { en: 'Wet lab above, dry lab below. A dashed arrow means one lane handed the other something it could not have produced alone.', zh: '上為濕式、下為乾式。虛線箭頭代表一邊交給另一邊某個它自己做不出來的東西。' },
          caption: { en: 'Drawn by us from the team\'s Description, Results, Measurement, Modeling, Engineering and Human Practices pages.', zh: '由我們依該隊 Description、Results、Measurement、Modeling、Engineering 與 Human Practices 頁繪製。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- wet lab ---------------- */
      out += h.sec({
        id: 'z-wet',
        kick: { en: 'Wet lab', zh: '濕式流程' },
        h2: { en: 'Order of operations, including the step where the regulation changed the organism', zh: '操作順序，包括那個「法規換掉了生物」的步驟' },
        body:
          h.phases([
            { h: { en: 'Clone four, verify four', zh: '四個選殖，四個驗證' },
              p: { en: 'One backbone for everything: **pET-32a**, T7 promoter with lac operator, RBS, TrxA tag, 6xHis tag, enterokinase site, ORF, T7 terminator. Codon-optimised inserts were amplified with 5\' homology arms and joined by Gibson assembly or seamless cloning in **DH5α**.', zh: '所有東西共用一個骨架：**pET-32a**，T7 啟動子加 lac 操縱子、RBS、TrxA 標籤、6xHis 標籤、腸激酶切位、ORF、T7 終止子。密碼子最佳化的插入片段帶 5\' 同源臂擴增，以 Gibson 組裝或無縫選殖在 **DH5α** 中接起來。' },
              items: [
                { en: 'The verification primer pair is the design choice to take from this page: **gene-specific forward plus the plasmid\'s own T7 Terminal-R**, so a band proves the insert sits in the vector rather than proving the insert exists.', zh: '這一頁該帶走的設計選擇是那組驗證引子：**基因專一正向引子，搭配質體自己的 T7 Terminal-R**，所以出現條帶證明的是「插入片段坐在載體裡」，而不只是「插入片段存在」。' },
                { en: 'A first round of colony PCR gave non-specific extra bands; they **raised the annealing temperature and shortened the extension**, and report the fix rather than only the clean gel.', zh: '第一輪菌落 PCR 出現非專一的多餘條帶；他們**提高了黏合溫度並縮短延伸時間**，並且把這個修正寫出來，而不是只放那張乾淨的膠圖。' }
              ],
              done: { en: 'Four plasmids with insert-specific colony PCR bands and Sanger confirmation, before any protein work begins.', zh: '四個質體都有插入專一的菌落 PCR 條帶與 Sanger 確認，才開始任何蛋白工作。' } },
            { h: { en: 'Express, then take the tag off', zh: '表達，然後把標籤拿掉' },
              p: { en: 'Induction conditions were set separately per product rather than carried across: **1 mM IPTG, 16 h at 18 °C** for the two glycosidases, **0.3 mM IPTG, 4 h at 28 °C** for the two peptides.', zh: '誘導條件是依產物分別設定的，不是直接沿用：兩個糖苷酶用 **1 mM IPTG、18 °C、16 小時**，兩個肽用 **0.3 mM IPTG、28 °C、4 小時**。' },
              items: [
                { en: 'Purification is native throughout — Ni magnetic beads, overnight binding at 4 °C, two washes — and then **enterokinase is added while the protein is still on the beads**, so the cleaved enzyme elutes and the tags stay behind.', zh: '純化全程都在原態條件下——Ni 磁珠、4 °C 隔夜結合、兩次洗滌——接著**在蛋白還在珠子上時就加入腸激酶**，於是被切下的酵素被洗出來，而標籤留在原處。' },
                { en: 'The mass shift is the evidence that cleavage worked: **76.54 → 59.46 kDa** and **116.24 → 99.16 kDa**. Both target proteins were mainly in the soluble fraction, which they note is what the activity assay needs.', zh: '分子量的位移就是切割成功的證據：**76.54 → 59.46 kDa** 與 **116.24 → 99.16 kDa**。兩個目標蛋白都主要落在可溶部分，而他們指出這正是後續活性試驗需要的。' },
                { en: 'An honest aside about the peptide: the mature 21aa after cleavage is only **~2.47 kDa**, too small for Coomassie-stained SDS-PAGE, **so they say no gel of the cleaved peptide is shown** instead of showing something else.', zh: '關於那個肽的一段誠實補充：切割後的成熟 21aa 只有 **約 2.47 kDa**，在考馬斯藍染的 SDS-PAGE 上太小而無法呈現，**因此他們直接說不提供切割後的膠圖**，而不是拿別的東西代替。' }
              ] },
            { h: { en: 'The substrate had to be made, and the first source was not allowed', zh: '基質得自己做，而第一個來源不被允許' },
              p: { en: 'To test an α-1,3-glucanase you need α-1,3-glucan. Their first choice was *Aspergillus niger*, a standard source — and it is **not on the iGEM White List**, which a high school team cannot work around.', zh: '要測一個 α-1,3-葡聚糖酶，就需要 α-1,3-葡聚糖。他們的第一選擇是標準來源 *Aspergillus niger*——但它**不在 iGEM 白名單上**，而高中隊伍沒有繞過它的辦法。' },
              items: [
                { en: 'They **asked the iGEM committee**, were pointed at commercially available material such as edible fungi, and went to the literature for one: *Lentinula edodes* (shiitake) carries an alkali-soluble α-1,3-glucan with slight α-1,6 branching.', zh: '他們**去問了 iGEM 委員會**，被指向商業上可取得的材料例如食用菇類，再回到文獻找出一個：*Lentinula edodes*（香菇）含有一種鹼可溶、帶少量 α-1,6 分支的 α-1,3-葡聚糖。' },
                { en: 'Extraction, from their protocol: **defat 100 g of dried fruiting bodies in 1:1 ethyl acetate/methanol**, wash, extract into **5 % NaOH with 0.05 % sodium sulfite**, precipitate with **1 M acetic acid** until no further precipitate forms, wash and dry.', zh: '依他們的流程提取：**以 1:1 乙酸乙酯／甲醇對 100 g 乾燥子實體脫脂**，水洗，再以 **5% NaOH 加 0.05% 亞硫酸鈉**萃取，用 **1 M 乙酸**沉澱到不再有沉澱產生，洗滌後乾燥。' },
                { en: 'The branching is not hidden — it later explains why CoGH66 gives a weak signal on this substrate, which is the whole reason that arm is interpretable.', zh: '那些分支沒有被藏起來——它後來正好解釋了為什麼 CoGH66 在這個基質上會給出微弱訊號，而這正是那一組之所以可解讀的全部理由。' }
              ],
              done: { en: 'A substrate they made themselves, whose known impurity is used as evidence rather than apologised for.', zh: '一個他們自己做出來的基質，而它已知的不純處被當成證據使用，而不是拿來道歉。' } },
            { h: { en: 'Activity, read through a standard curve', zh: '活性，透過標準曲線讀出' },
              p: { en: 'Reducing sugar by the **DNS** method: 500 µL enzyme plus 500 µL substrate at 0.1 g/mL, 37 °C for 30 min, stopped with DNS reagent, boiled 5 min, read at **OD₅₄₀**. The glucose standard curve is **y = 3.702x + 0.3017, R² = 0.9606**.', zh: '以 **DNS** 法測還原糖：500 µL 酵素加 500 µL 濃度 0.1 g/mL 的基質，37 °C 反應 30 分鐘，加 DNS 試劑終止，煮沸 5 分鐘，在 **OD₅₄₀** 讀值。葡萄糖標準曲線為 **y = 3.702x + 0.3017、R² = 0.9606**。' },
              items: [
                { en: '**PmGH87 was active on the shiitake α-1,3-glucan and inactive on α-1,6-glucan**, with the PBS and heat-inactivated arms at baseline — so, strictly α-1,3-specific.', zh: '**PmGH87 對香菇 α-1,3-葡聚糖有活性，對 α-1,6-葡聚糖沒有活性**，而 PBS 組與加熱去活組都在基線——所以它嚴格專一於 α-1,3。' },
                { en: '**CoGH66 was strongly active on α-1,6-glucan and weakly active on the shiitake extract**, which they attribute to the α-1,6 branches in that substrate rather than to leaky specificity.', zh: '**CoGH66 對 α-1,6-葡聚糖有強活性，對香菇萃取物有弱活性**，而他們把這歸因於該基質中的 α-1,6 分支，而不是專一性的鬆動。' },
                { en: '**The complementary specificities are the stated reason for combining the two enzymes** — the combination is justified by their own two plates, not only by the literature.', zh: '**這兩種互補的專一性，就是他們把兩個酵素結合起來所給出的理由**——這個組合是由他們自己那兩塊盤支持的，不只是靠文獻。' },
                { en: 'Quantified honestly: net OD₅₄₀ of 1.477 and 2.178 convert to about **0.15 U/mL for PmGH87 and 0.22 U/mL for CoGH66**, and they state these are **volumetric activities, not specific activities**, because the protein was not quantified at that point.', zh: '量化的部分也誠實：淨 OD₅₄₀ 的 1.477 與 2.178 換算成 **PmGH87 約 0.15 U/mL、CoGH66 約 0.22 U/mL**，而他們明說這是**體積活性，不是比活性**，因為那時還沒有做蛋白定量。' }
              ] },
            { h: { en: 'The peptide, against a surrogate organism', zh: '那個肽，對上一個替代菌' },
              p: { en: 'Agar well diffusion: *Lactobacillus* adjusted to a **0.5 McFarland standard (~1.5 × 10⁸ CFU/mL)** spread on MRS agar, 6 mm wells, 50–100 µL of crude lysate per well, PBS as negative control, 37 °C for 24 h under microaerobic conditions.', zh: '瓊脂孔洞擴散法：把 *Lactobacillus* 調到 **0.5 麥氏濁度標準（約 1.5 × 10⁸ CFU/mL）**塗在 MRS 瓊脂上，打 6 mm 孔，每孔加 50–100 µL 粗萃液，以 PBS 為陰性對照，37 °C、微需氧條件下培養 24 小時。' },
              items: [
                { en: '**A clear inhibition zone only for 21aa**; none for 18aa, none for the negative control.', zh: '**只有 21aa 出現清楚的抑菌圈**；18aa 沒有，陰性對照也沒有。' },
                { en: 'The surrogate is named and the reason given: ***S. mutans*, the actual target pathogen, is not on the White List.** The assay therefore shows antimicrobial function, not activity against the organism the project is about.', zh: '替代菌被指名，理由也寫出來：***S. mutans*，也就是真正的標的病原，不在白名單上。**因此這個試驗顯示的是抗菌功能，而不是對這個專案真正針對的那隻菌的活性。' }
              ] },
            { h: { en: 'Build an artificial calculus, then leave one component out at a time', zh: '做出人工牙結石，然後一次抽掉一種成分' },
              p: { en: 'Adapted from Cha et al.: glass slides given an artificial-saliva pellicle for 4 h, a *B. subtilis* biofilm grown for 72 h in 1:1 artificial saliva and LB with 1 % sucrose, then **five daily cycles of 3 h biofilm activation and 21 h mineralisation at pH 9.5**. Three model groups were run — biofilm only, mineralisation only, and both — and only the **BF + MU** group gave the chalky-white deposit used for everything downstream.', zh: '改寫自 Cha 等人的方法：玻片先在人工唾液中形成獲得性薄膜 4 小時，於 1:1 人工唾液與 LB、加 1% 蔗糖的環境中培養 *B. subtilis* 生物膜 72 小時，接著進行**連續五天、每天 3 小時生物膜活化加 21 小時 pH 9.5 礦化的循環**。模型本身跑了三組——只長生物膜、只礦化、以及兩者都做——而只有 **BF + MU** 那組長出後續全部實驗所用的白堊色沉積。' },
              items: [
                { en: 'Six treatment arms, three replicates each: **PBS, −DNase, −papain, −PmGH87, −CoGH66, Complete.** This is a leave-one-out design, not a complete-versus-nothing demonstration.', zh: '六個處理組、每組三重複：**PBS、−DNase、−papain、−PmGH87、−CoGH66、完整配方。**這是一個逐一抽離的設計，不是「完整對什麼都沒有」的展示。' },
                { en: 'Three endpoints, and they rank them themselves. **Crystal violet** was the most discriminating: complete cocktail **OD₅₈₀ 0.532 ± 0.049 against PBS 1.240 ± 0.107, a 57.1 % reduction**, ANOVA F(5,12) = 29.8, p < 0.001, and omitting DNase I, PmGH87 or CoGH66 each cost efficacy significantly while omitting papain only trended (p ≈ 0.08).', zh: '三個終點，而他們自己為它們排序。**結晶紫**最具區辨力：完整配方 **OD₅₈₀ 為 0.532 ± 0.049，對比 PBS 的 1.240 ± 0.107，下降 57.1%**，ANOVA F(5,12) = 29.8、p < 0.001；抽掉 DNase I、PmGH87 或 CoGH66 都顯著降低效果，而抽掉木瓜蛋白酶只呈現趨勢（p 約 0.08）。' },
                { en: '**Acridine orange** gave a **91.4 % drop in residual fluorescence** (2.323 ± 1.121 against 26.960 ± 1.368), F(5,12) = 82.0 — but they add that AO is **not a direct viability measure** and that the −papain and −CoGH66 comparisons were not significant.', zh: '**吖啶橙**顯示殘餘螢光**下降 91.4%**（2.323 ± 1.121 對 26.960 ± 1.368），F(5,12) = 82.0——但他們補上一句：AO **不是直接的存活度量**，而且 −papain 與 −CoGH66 這兩個比較並不顯著。' },
                { en: '**Gravimetry failed and is published anyway:** F(5,12) = 0.87, p ≈ 0.53, no pairwise difference, with the complete cocktail merely holding the highest mean. The two reasons given are balance sensitivity and non-uniform mineral deposition, and the endpoint is then demoted in writing to secondary and non-discriminating.', zh: '**乾重法失敗了，而他們照樣公開：**F(5,12) = 0.87、p 約 0.53，沒有任何兩組間差異，完整配方只是平均值最高而已。他們給出的兩個原因是天平的靈敏度與礦物沉積不均勻，接著在文字上把這個終點降級為次要且不具區辨力。' }
              ],
              done: { en: 'A combined-action result that exists, with the endpoint that did not work left in the figure.', zh: '一個真的存在的綜合作用結果，而那個沒有成功的終點，被留在圖裡。' } }
          ])
      });

      /* ---------------- controls ---------------- */
      out += h.sec({
        id: 'z-ctrl',
        kick: { en: 'The control design', zh: '對照的設計' },
        h2: { en: 'Three negatives per enzyme, on one plate — and the third one is the rare one', zh: '每個酵素三個陰性對照，放在同一塊盤上——而第三個才是罕見的那個' },
        lede: {
          en: 'A PBS control says the signal needs something in the well. A heat-inactivated control says the signal needs a folded protein. Only the swapped-substrate control says the signal needs that particular linkage, which is the claim actually being made.',
          zh: 'PBS 對照說的是：訊號需要孔裡有東西。加熱去活對照說的是：訊號需要一個折疊好的蛋白。只有基質互換對照說的是：訊號需要那一種特定的鍵結——而這才是他們真正提出的主張。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Arm', zh: '組別' }, w: '20%' },
              { t: { en: 'PmGH87 plate', zh: 'PmGH87 盤' } },
              { t: { en: 'CoGH66 plate', zh: 'CoGH66 盤' } }
            ],
            rows: [
              [{ en: '**C1** — no enzyme', zh: '**C1** — 沒有酵素' },
               { en: 'PBS in place of the induced cells, substrate = shiitake α-1,3-glucan extract. Baseline.', zh: '以 PBS 取代誘導後的菌體，基質為香菇 α-1,3-葡聚糖萃取物。落在基線。' },
               { en: 'PBS in place of the induced cells, substrate = α-1,6-glucan. Baseline.', zh: '以 PBS 取代誘導後的菌體，基質為 α-1,6-葡聚糖。落在基線。' }],
              [{ en: '**C2** — heat-inactivated', zh: '**C2** — 加熱去活' },
               { en: 'Heat-inactivated cells on the same substrate. Baseline — so the signal is not the lysate, the sugar or the DNS chemistry.', zh: '加熱去活的菌體配同一個基質。落在基線——所以訊號不是來自粗萃液、糖本身或 DNS 反應。' },
               { en: 'Heat-inactivated cells on the same substrate. Baseline, and the value later subtracted to give net OD₅₄₀.', zh: '加熱去活的菌體配同一個基質。落在基線，而這個值後來被減去以得到淨 OD₅₄₀。' }],
              [{ en: '**C3** — swapped substrate', zh: '**C3** — 基質互換' },
               { en: 'Substrate replaced with α-1,6-glucan: **no activity.** This is the arm that makes "strictly α-1,3-specific" a claim rather than a hope.', zh: '基質換成 α-1,6-葡聚糖：**沒有活性。**正是這一組讓「嚴格專一於 α-1,3」成為一個主張，而不是一個期望。' },
               { en: 'Substrate replaced with the shiitake α-1,3 extract: **weak but detectable**, read as the α-1,6 branches in that extract.', zh: '基質換成香菇 α-1,3 萃取物：**微弱但可偵測**，被解讀為該萃取物中的 α-1,6 分支。' }],
              [{ en: '**T** — test', zh: '**T** — 測試組' },
               { en: 'Induced cells on shiitake α-1,3-glucan: strong signal, mean net OD₅₄₀ 1.477 ≈ 0.15 U/mL.', zh: '誘導後的菌體配香菇 α-1,3-葡聚糖：強訊號，平均淨 OD₅₄₀ 為 1.477，約 0.15 U/mL。' },
               { en: 'Induced cells on α-1,6-glucan: strongest signal, mean net OD₅₄₀ 2.178 ≈ 0.22 U/mL.', zh: '誘導後的菌體配 α-1,6-葡聚糖：訊號最強，平均淨 OD₅₄₀ 為 2.178，約 0.22 U/mL。' }],
              [{ en: 'Replication', zh: '重複' },
               { en: 'Mean ± SD from **three independent replicates**, stated in the figure legend.', zh: '圖說中寫明為**三次獨立重複**的平均值 ± 標準差。' },
               { en: 'Same, and the assay is run on **induced cells / crude lysate**, not on the purified tag-free enzyme.', zh: '相同，而這個試驗是用**誘導後的菌體／粗萃液**跑的，不是用純化後的無標籤酵素。' }]
            ],
            min: 760,
            source: { en: 'Read from the team\'s Results and Engineering pages, Figure 3 and Figure 5 legends. The arrangement into a table is ours.', zh: '讀自該隊 Results 與 Engineering 頁的 Figure 3 與 Figure 5 圖說。整理成表是我們做的。' }
          }) +
          h.take({ en: 'Without the swapped-substrate arm, "specific for α-1,3" would rest on the absence of a comparison', zh: '少了基質互換那一組，「專一於 α-1,3」就只能建立在「沒有做過比較」之上' }, {
            en: 'On a high school wiki the usual pattern is a test well and a blank. Here each enzyme carries **three negatives, run on the same plate**, and the swapped-substrate arm is the one that does the work. **The same discipline reappears at formulation scale** as a six-arm leave-one-out design, which is why "the complete cocktail is better" can be said about particular components rather than about the cocktail as a whole.',
            zh: '在高中組的 wiki 上，常見的模式是一個測試孔加一個空白。這裡每個酵素都帶**三個陰性對照，而且在同一塊盤上一起跑**，其中基質互換那一組才是真正出力的那一組。**同樣的紀律在配方層級又出現一次**，成為六組的逐一抽離設計，這也是為什麼「完整配方比較好」這句話可以落到具體的某個成分上，而不是只能講整個配方。'
          }) +
          h.note({
            en: 'One caveat we would raise as readers, not as a correction: the specificity assay compares **induced cells against heat-inactivated cells**, so what is being compared is lysate against lysate rather than a quantified amount of enzyme against the same amount. They know this — the activity is reported as **U/mL and explicitly not U/mg** — and the mutant comparison later in the project is the place where they fix it, by normalising total protein with a BCA curve first.',
            zh: '一點我們以讀者身分提出、而非作為糾正的保留：這個專一性試驗比較的是**誘導後菌體對加熱去活菌體**，所以被比較的是粗萃液對粗萃液，而不是等量的酵素對等量的酵素。他們知道這件事——活性是以 **U/mL、並明確說不是 U/mg** 的形式報告的——而專案後段的突變體比較，就是他們把這件事補起來的地方：先用 BCA 曲線把總蛋白量校平。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'z-dry',
        kick: { en: 'Dry lab', zh: '乾式流程' },
        h2: { en: 'A real mutation-prioritisation pipeline, and the bench reversed its ranking in public', zh: '一條真正的突變優先排序流程，而它的排序被實驗檯公開推翻了' },
        lede: {
          en: 'Two of their dry-lab outputs are pictures — the GBD 2019 burden maps and the rendered calculus-formation schematics — and we would not call either of those modelling. The third is modelling: a structure-plus-evolution-plus-energy pipeline over CoGH66 that ends in two mutants somebody actually built.',
          zh: '他們乾式產出中有兩項是圖——GBD 2019 的疾病負擔地圖，與算繪出來的牙結石形成示意圖——我們不會把這兩者稱為建模。第三項才是建模：一條對 CoGH66 的「結構＋演化＋能量」流程，而它的終點是兩個真的被做出來的突變體。'
        },
        body:
          h.h3({ en: 'The pipeline, and the fact that nothing had to be docked', zh: '那條流程，以及「什麼都不必對接」這件事' }) +
          h.p({
            en: 'CoGH66 has a **substrate-bound crystal structure, PDB 8IUB, with isomaltotriose already in the site**, which is the reason the whole pipeline stays cheap: they open it in **PyMOL**, select the ligand, and take every residue within **4.0 Å** as the pocket. That gives **18 contact residues**, and they check the numbering against the CoGH66 sequence before touching anything. Then evolution removes most of the list: **BLASTp homologs deliberately filtered to 30–70 % identity across different bacterial species**, aligned with **MAFFT**, conservation drawn with **ESPript** — and **only 7 of the 18 positions carry natural substitutions** in that set. The other 11 are left alone, in writing, as positions that may matter for structure or catalysis.',
            zh: 'CoGH66 有一個**帶基質的晶體結構，PDB 8IUB，異麥芽三糖已經坐在結合位上**，這就是整條流程之所以便宜的原因：他們用 **PyMOL** 打開它、選出配體，把 **4.0 Å** 以內的每個殘基當成口袋，得到 **18 個接觸殘基**，並且在動手之前先把編號對回 CoGH66 序列。接著由演化把清單砍掉大半：**刻意篩在 30–70% 相似度、跨不同細菌物種的 BLASTp 同源序列**，以 **MAFFT** 對齊，用 **ESPript** 畫保守度——而在那組序列裡，**18 個位置中只有 7 個帶有天然取代**。其餘 11 個被明文留著不動，理由是它們可能對結構或催化重要。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Mutant', zh: '突變體' }, w: '16%' },
              { t: { en: 'ΔΔG_fold', zh: 'ΔΔG_fold' }, num: true },
              { t: { en: 'ΔΔG_bind', zh: 'ΔΔG_bind' }, num: true },
              { t: { en: 'What the pipeline said, and what happened', zh: '流程說了什麼，後來發生了什麼' } }
            ],
            rows: [
              [{ en: '**Y166Q**', zh: '**Y166Q**' }, '−0.38', '−1.63',
               { en: '**The only mutant to clear the pre-set threshold** (ΔΔG_fold < 0 and ΔΔG_bind < −1 kcal/mol, the cutoff chosen to sit outside typical FoldX error). Ranked first. At the bench it came **below wild type**: net OD₅₄₀ **0.629 against 0.996.**', zh: '**唯一通過事先設定門檻的突變體**（ΔΔG_fold < 0 且 ΔΔG_bind < −1 kcal/mol，這個切點是刻意選在一般 FoldX 誤差之外）。排名第一。而在實驗檯上，它掉到**野生型以下**：淨 OD₅₄₀ **0.629 對 0.996。**' }],
              [{ en: '**Q172P**', zh: '**Q172P**' }, '−1.01', '−0.38',
               { en: 'Did **not** meet the binding threshold; kept as a secondary candidate on stabilisation plus natural occurrence, with a written caution that a proline may alter the main chain. At the bench it was **the best**: net OD₅₄₀ **1.881.**', zh: '**沒有**達到結合門檻；因為有穩定化效果又在同源序列中天然出現而被留為第二候選，並附上一句提醒：脯胺酸可能改變主鏈構形。而在實驗檯上，它是**最好的那個**：淨 OD₅₄₀ **1.881。**' }],
              [{ en: 'Q169M', zh: 'Q169M' }, '−3.51', '+0.49',
               { en: 'The most stabilising mutation in the whole table, and **rejected anyway** because binding was slightly weakened. Stability alone does not buy a place in the queue.', zh: '整張表中最具穩定化效果的突變，**但依然被排除**，因為結合略為減弱。單憑穩定性買不到排隊的位置。' }],
              [{ en: 'H250F', zh: 'H250F' }, '−2.08', '+3.78',
               { en: 'Stabilising and **significantly weakened binding** — the clearest example of the two criteria pulling in opposite directions.', zh: '有穩定化效果，但**結合顯著變差**——這是兩個判準往相反方向拉扯最清楚的例子。' }],
              [{ en: 'N395D, N395E, N395G, Q169H, Q169L, Q172H, I190L, K429N', zh: 'N395D、N395E、N395G、Q169H、Q169L、Q172H、I190L、K429N' }, '−0.45 to −3.47', '+0.07 to +1.92',
               { en: 'The remaining eight of the twelve scored mutants: all stabilising or slightly stabilising, **none with enhanced binding**, so none prioritised. The negative results are tabulated rather than summarised away.', zh: '十二個被評分的突變體中剩下的八個：全部具穩定化或略具穩定化效果，**沒有一個結合增強**，因此都未被列為優先。這些負面結果是被列進表裡，而不是被一句話總結掉。' }]
            ],
            min: 820,
            source: { en: 'Values read from Table 2 of the team\'s Modeling page; the last row groups eight of their rows and the commentary is ours.', zh: '數值讀自該隊 Modeling 頁的 Table 2；最後一列把他們的八列併在一起，評論是我們寫的。' }
          }) +
          h.h3({ en: 'What they did when the prediction lost', zh: '當預測輸掉時，他們做了什麼' }) +
          h.p({
            en: 'Both mutants were made by **reverse PCR with back-to-back mutagenic primers, DpnI digestion of the methylated template, and self-ligation**, then screened by colony PCR and confirmed at the nucleotide level by Sanger sequencing — **Y166Q as TAC→CAG, Q172P as CAG→CCG.** Before the activity comparison they ran a **BCA assay (Y = 0.8964X − 0.2574, R² = 0.9951)**, measured crude lysate at **WT 12.1, Y166Q 10.9 and Q172P 9.1 µg/mL**, and then normalised everything to **5 µg/mL total protein.** That step is why the result is interpretable: Q172P won **while carrying the lowest total protein**, which they point out in the same paragraph. Activity by DNS against its own heat-inactivated control gave net OD₅₄₀ of **1.881 (Q172P), 0.996 (WT) and 0.629 (Y166Q)**, n = 3.',
            zh: '兩個突變體都是用**背對背突變引子的反向 PCR、以 DpnI 消化甲基化模板，再自我接環**做出來的，接著以菌落 PCR 篩選，並由 Sanger 定序在核苷酸層級確認——**Y166Q 為 TAC→CAG、Q172P 為 CAG→CCG。**在活性比較之前，他們先做了 **BCA 定量（Y = 0.8964X − 0.2574、R² = 0.9951）**，量得粗萃液為 **WT 12.1、Y166Q 10.9、Q172P 9.1 µg/mL**，再把所有樣品校平到 **總蛋白 5 µg/mL。**正是這一步讓結果變得可解讀：Q172P 是**在總蛋白最低的情況下**勝出的，而他們在同一段裡就把這點指出來。以 DNS 對各自的加熱去活對照測得的淨 OD₅₄₀ 為 **1.881（Q172P）、0.996（WT）、0.629（Y166Q）**，n = 3。'
          }) +
          h.warn({
            en: '**The reversal is in the opening paragraph of the Modeling page, not in a footnote.** Their own words: *"the experimental ranking differed from the original FoldX prediction."* Then three mechanisms are offered instead of an apology — tighter binding need not raise turnover if product release is rate-limiting; FoldX is an empirical force field with no conformational change, diffusion, product release or solvent; and the proline in Q172P may move the main chain, so its own FoldX number deserves caution. **Q172P becomes the lead candidate and Y166Q is re-labelled a mechanistic probe** for asking why predicted binding did not become activity. Both are registered as parts.',
            zh: '**這次翻轉寫在 Modeling 頁的開場段落，不是寫在註腳。**他們自己的話：*「實驗上的排序與原本的 FoldX 預測不同。」*接著給出的是三個機制，而不是一段道歉——若產物釋放是限速步驟，結合變緊並不一定提高轉換率；FoldX 是經驗力場，沒有構形變化、擴散、產物釋放或溶劑效應；而 Q172P 中的脯胺酸可能改動主鏈，所以它自己的 FoldX 數值也該保留。**Q172P 成為首選候選，Y166Q 被重新定位為一個機制探針**，用來追問「為什麼預測到的結合沒有變成活性」。兩者都登錄成了元件。'
          }) +
          h.h3({ en: 'The other two dry-lab outputs, sized honestly', zh: '另外兩項乾式產出，照實際大小來講' }) +
          h.cards([
            { chips: [{ t: { en: 'peptide screen', zh: '肽篩選' }, k: 'v' }],
              h: { en: 'AlphaFold Server, with its own confidence printed', zh: 'AlphaFold Server，而且把自己的信心值印出來' },
              p: { en: 'Four literature candidates — **KSL, G12R, SHABP, HBAMP** — were ranked by predicted peptide–Ca²⁺ interface, on the reasoning that hydroxyapatite presents calcium as the adsorption site. **G12R (18aa) and SHABP (21aa) came out ahead at pTM ≈ 0.4**, and both were advanced. Two caveats are theirs, not ours: the scores indicate only **moderate confidence**, and a calcium-ion model **cannot fully replicate crystal-surface binding.** It is a filter, and it is called one.', zh: '四個文獻候選——**KSL、G12R、SHABP、HBAMP**——依預測的肽與 Ca²⁺ 介面排序，理由是羥基磷灰石把鈣離子呈現為吸附位點。**G12R（18aa）與 SHABP（21aa）勝出，pTM 約 0.4**，兩者都被推進下一步。有兩點保留是他們自己寫的，不是我們加的：這些分數只代表**中等信心**，而一個鈣離子模型**無法完整重現晶面結合。**它是一個篩子，而他們就是這樣稱呼它。' } },
            { chips: [{ t: { en: 'figures', zh: '圖' }, k: 't' }],
              h: { en: 'Maps and renders are figures, not models', zh: '地圖與算繪圖是圖，不是模型' },
              p: { en: 'The **GBD 2019** country-level map of the top five oral diseases and the rendered calculus-formation schematics do a job — they are why the burden argument lands in one glance — but nothing is computed in them. We would not count them as modelling, and the wiki does not claim otherwise: they sit on the Description and Human Practices pages, while the Modeling page is entirely the CoGH66 pipeline.', zh: '那張 **GBD 2019** 五大口腔疾病的各國地圖，以及算繪出來的牙結石形成示意圖，確實有它們的作用——它們讓那個負擔論證一眼就立起來——但其中沒有計算任何東西。我們不會把它們算成建模，而這個 wiki 也沒有這樣主張：它們放在 Description 與 Human Practices 頁，而 Modeling 頁從頭到尾都是 CoGH66 那條流程。' } },
            { chips: [{ t: { en: 'the backbone', zh: '骨幹' }, k: 'g' }],
              h: { en: 'Every number traces back to a glucose curve', zh: '每個數字都回溯到一條葡萄糖曲線' },
              p: { en: 'The quantitative spine of the whole project is DNS plus a standard curve, re-run per experiment rather than reused: **y = 3.702x + 0.3017, R² = 0.9606** for the activity work, **Y = 0.2595X − 0.05404, R² = 0.9762** for the mutant work, plus the **BCA curve R² = 0.9951** used to normalise protein. Net OD₅₄₀ is defined in the text, and so is the conversion to U/mL.', zh: '整個專案的量化骨幹就是 DNS 加一條標準曲線，而且每個實驗都重跑、不沿用：活性實驗為 **y = 3.702x + 0.3017、R² = 0.9606**，突變體實驗為 **Y = 0.2595X − 0.05404、R² = 0.9762**，另有用來校平蛋白量的 **BCA 曲線 R² = 0.9951**。淨 OD₅₄₀ 在正文中有定義，換算成 U/mL 的算式也有。' } }
          ])
      });

      /* ---------------- open ---------------- */
      out += h.sec({
        id: 'z-open',
        kick: { en: 'Open', zh: '未決' },
        h2: { en: 'What is open, mostly in their own words', zh: '哪些還沒解決，大多用他們自己的話說' },
        lede: {
          en: 'The components are validated and the combination has been tested once, on a model. The product is not validated, and the wiki does not pretend otherwise.',
          zh: '各個元件已經驗證過，而那個組合也在一個模型上測過一次。產品本身沒有被驗證，而這個 wiki 也沒有裝作不是如此。'
        },
        body:
          h.ul([
            { en: '**The biofilm is not the pathogen.** *S. mutans* is not on the iGEM White List and high school teams **cannot submit a Check-In Form to request an exception**, so *B. subtilis* stands in — for the artificial calculus and, as *Lactobacillus*, for the antimicrobial assay. They state that the EPS composition differs and that the result is therefore a proof of concept for **disrupting a mineralised biofilm matrix**, not an efficacy measure against the organism the glucanases were chosen for.', zh: '**那層生物膜不是那隻病原。***S. mutans* 不在 iGEM 白名單上，而高中隊伍**無法提交 Check-In Form 申請例外**，所以由 *B. subtilis* 代打——人工牙結石用它，抗菌試驗則改用 *Lactobacillus*。他們明說 EPS 組成並不相同，因此那個結果是對**破壞礦化生物膜基質**的概念驗證，而不是對「當初選這些葡聚糖酶所針對的那隻菌」的效力度量。' },
            { en: '**No real dental calculus, and no mouth.** Everything is in vitro on glass slides; iGEM rules prohibit animal or human trials for high school teams, and Cycle 4 says so explicitly — validation there stopped at benchtop carrier preparation, **with no clinical efficacy claim.**', zh: '**沒有真正的牙結石，也沒有嘴。**所有實驗都在玻片上、在體外進行；iGEM 規則禁止高中隊伍做動物或人體試驗，而他們在第 4 個循環裡就直接寫出來——那裡的驗證停在檯面上的載體製備，**不提出任何臨床效力主張。**' },
            { en: '**Nothing about the mineral phase was measured.** Calcium release and mineral dissolution were not quantified, which they list as a limitation and a future experiment. So "calculus degradation" rests on organic-matrix endpoints — crystal violet and acridine orange — and the one endpoint that would have spoken to mass, gravimetry, **did not discriminate at all** (F(5,12) = 0.87, p ≈ 0.53).', zh: '**礦物相完全沒有被量測。**鈣釋放與礦物溶解都沒有定量，他們把這列為限制與未來實驗。因此「牙結石降解」只建立在有機基質的終點上——結晶紫與吖啶橙——而唯一能談到質量的那個終點，也就是乾重法，**根本分不開任何組別**（F(5,12) = 0.87、p 約 0.53）。' },
            { en: '**The statistics are labelled as exploratory by the team itself.** n = 3 per arm; the planned pairwise t-tests were **not corrected for multiple comparisons**; and when the complete-versus-−PmGH87 comparison reached uncorrected significance in the acridine-orange table but was not annotated in the figure, they **reported it as exploratory rather than confirmatory.** The −papain and −CoGH66 comparisons in that assay were not significant at all.', zh: '**這些統計是隊伍自己標為探索性的。**每組 n = 3；預先規劃的兩兩 t 檢定**未對多重比較做校正**；而當「完整對 −PmGH87」在吖啶橙那張表中達到未校正的顯著、卻沒有在圖上標註時，他們**把它報告為探索性而非確認性結果。**在那個試驗裡，−papain 與 −CoGH66 這兩個比較則完全不顯著。' },
            { en: '**Single application, not a regimen.** One enzyme treatment was given, where a real product is used twice a day. They name this as the reason papain only trended, and propose repeated applications as the fix — which makes it a hypothesis, not a result.', zh: '**單次施用，不是一套療程。**他們只給了一次酵素處理，而真實產品一天用兩次。他們指出這就是木瓜蛋白酶只呈現趨勢的原因，並提議以重複施用來解決——所以那是一個假設，不是一個結果。' },
            { en: '**18aa never expressed, and that is still unexplained.** Three candidate causes are named and none is tested, so the hydroxyapatite-binding comparison the peptide screen was built for — linear α-helical G12R against disulfide-constrained SHABP — never happened.', zh: '**18aa 從未表達，而這件事至今沒有解釋。**他們指名了三個可能原因，但沒有任何一個被測試過，所以那個肽篩選原本要促成的羥基磷灰石結合比較——線性 α-螺旋的 G12R 對上有雙硫鍵約束的 SHABP——根本沒有發生。' },
            { en: '**The peptide\'s anchoring is asserted, not measured.** Hydroxyapatite binding is the entire point of choosing SHABP, and it is supported by the literature and by an AlphaFold calcium-ion score at **pTM ≈ 0.4** — a number they themselves call moderate. No binding, retention or enamel-adsorption experiment appears.', zh: '**那個肽的錨定是被宣稱的，不是被量測的。**選擇 SHABP 的全部理由就是它能結合羥基磷灰石，而這件事的支持來自文獻，以及一個 **pTM 約 0.4** 的 AlphaFold 鈣離子分數——這個數字連他們自己都稱之為中等。文中沒有出現任何結合、滯留或琺瑯質吸附實驗。' },
            { en: '**Activities are volumetric, and the mutant comparison is crude lysate.** 0.15 and 0.22 U/mL are **U/mL, not U/mg**, as they say; the mutant ranking used BCA-normalised crude lysates, and their own future plan puts **purification, induction optimisation, kinetics (K_m, V_max, k_cat/K_m) and stability** ahead of any claim of catalytic improvement.', zh: '**活性是體積活性，而突變體比較用的是粗萃液。**0.15 與 0.22 U/mL 是 **U/mL，不是 U/mg**，這是他們自己說的；突變體排序用的是經 BCA 校平的粗萃液，而他們自己的未來計畫把**純化、誘導條件最佳化、動力學（K_m、V_max、k_cat/K_m）與穩定性**排在任何「催化能力提升」的主張之前。' },
            { en: '**The release sequence is a drawing.** Only the three toothpaste carrier matrices were prepared; chewing gum, dental films and mouthwash are proposed designs, and no release-timing data exist for the protease-gated gelatin step that the whole formulation logic depends on.', zh: '**那個釋放順序是一張設計圖。**真正做出來的只有牙膏的三個載體基質；口香糖、口腔膜片與漱口水都還是提議中的設計，而整套配方邏輯所依賴的「蛋白酶開門」明膠那一步，沒有任何釋放時序數據。' },
            { en: '**One headline number is not theirs.** The **95.5 % biofilm degradation** figure for the PmGH87 and CoGH66 pair comes from Cortez et al., and the wiki cites it as such every time it appears. Their own combined-action number is the **57.1 %** crystal violet reduction.', zh: '**有一個醒目的數字不是他們的。**PmGH87 與 CoGH66 這一對的 **95.5% 生物膜降解**來自 Cortez 等人，而這個 wiki 每次引用它都標明出處。他們自己的綜合作用數字是結晶紫法的 **57.1%**。' }
          ])
      });

      /* ---------------- steal ---------------- */
      out += h.sec({
        id: 'z-steal',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'What we would copy from HangzhouFourteenAP', zh: '我們會從 HangzhouFourteenAP 抄什麼' },
        body:
          h.ul([
            { en: '**Put a swapped-substrate control next to the heat-inactivated one.** PBS tests the well, heat tests the protein, the swap tests the claim. On a specificity page the third arm is the only one that matters, and it costs one extra column of wells.', zh: '**在加熱去活對照旁邊，再擺一個基質互換對照。**PBS 測的是孔，加熱測的是蛋白，互換測的才是那個主張。在一個講專一性的頁面上，第三組是唯一真正重要的那一組，而它只多花一排孔。' },
            { en: '**Publish the empty lane.** One construct of four gave nothing; the gel panel is there, the three candidate causes are printed, and the construct is dropped. A reader who sees a failure reported believes the successes more.', zh: '**把那條空白的膠道公開。**四個構築中有一個什麼都沒給；那張膠圖就在那裡，三個可能原因被印出來，而那個構築被棄用。看到失敗被如實報告的讀者，會更相信那些成功。' },
            { en: '**Design the combination experiment as leave-one-out, not complete-versus-nothing.** Six arms let them say DNase I, PmGH87 and CoGH66 each carry weight while papain only trends. Two arms would only have let them say the mixture does something.', zh: '**把組合實驗設計成逐一抽離，而不是「完整對什麼都沒有」。**六個組讓他們可以說 DNase I、PmGH87 與 CoGH66 各自有份量，而木瓜蛋白酶只呈現趨勢。兩個組只能讓他們說「這個混合物有作用」。' },
            { en: '**Normalise before you compare, and say who had less.** BCA to 5 µg/mL total protein first; then the fact that Q172P won while carrying the least protein is evidence rather than a confound.', zh: '**比較之前先把量校平，並且說出誰比較少。**先用 BCA 校到總蛋白 5 µg/mL；接著「Q172P 是在蛋白量最少的情況下勝出的」這件事，就成了證據，而不是一個混淆因子。' },
            { en: '**Let the bench overturn the model in the overview paragraph.** Not a revision buried in a discussion section: the first paragraph of the Modeling page says the ranking changed, then gives three mechanisms for why a predicted binding gain need not become turnover. A model that was corrected is worth more than a model that was right.', zh: '**讓實驗檯在概述段落就把模型推翻。**不是把修正埋在討論一節裡：Modeling 頁的第一段就說排序改變了，接著給出三個機制，解釋為什麼預測到的結合增益不一定會變成轉換率。一個被修正過的模型，比一個剛好說對的模型更有價值。' },
            { en: '**Use a substrate-bound structure if one exists.** PDB 8IUB already had isomaltotriose in the site, so there was no docking step to defend. Pick the target whose structure spares you a method you cannot validate.', zh: '**如果已經有帶基質的結構，就用它。**PDB 8IUB 的結合位上本來就有異麥芽三糖，所以沒有任何對接步驟需要被辯護。挑那個「它的結構能讓你省下一個你無法驗證的方法」的標的。' },
            { en: '**Let the alignment delete most of your candidate list.** 18 contact residues, 7 with natural substitutions, 11 left alone on purpose and said to be left alone. That is a shorter list and a published reason for its shortness.', zh: '**讓序列比對把你的候選清單砍掉大半。**18 個接觸殘基、7 個帶天然取代、11 個刻意不動並且明說不動。這是一份更短的清單，而它為什麼短，有被公開的理由。' },
            { en: '**Report the units you actually measured.** U/mL and not U/mg, with the sentence saying why: protein was not quantified at that point. Precision about what a number is not is worth as much as the number.', zh: '**報告你真正量到的單位。**是 U/mL 而不是 U/mg，並附上理由：當時還沒有做蛋白定量。把「這個數字不是什麼」講精確，和那個數字本身一樣有價值。' },
            { en: '**Name the surrogate in the sentence that uses it.** *B. subtilis* for *S. mutans*, *Lactobacillus* for the antimicrobial plate, shiitake α-1,3-glucan for fungal glucan — each named with the rule that forced it and the comparison it costs.', zh: '**在用到替代物的那句話裡就把它指名。**用 *B. subtilis* 代 *S. mutans*、用 *Lactobacillus* 跑抗菌盤、用香菇 α-1,3-葡聚糖代真菌葡聚糖——每一個都連同「迫使它發生的規則」與「它犧牲掉的那個比較」一起寫出來。' },
            { en: '**When the rules block the organism, change the material and keep the claim honest.** *A. niger* was not permitted, so they asked the committee, took the advice, and extracted their substrate from a mushroom — and then used the known α-1,6 branching in it to explain a weak signal instead of hiding it.', zh: '**當規則擋住那個生物時，換材料，並且讓主張保持誠實。***A. niger* 不被允許，於是他們去問委員會、照建議辦，從一朵菇裡提出自己的基質——接著還用其中已知的 α-1,6 分支去解釋一個微弱訊號，而不是把它藏起來。' },
            { en: '**Treat an incompatibility as a design brief.** Papain would digest the rest of the formulation, so gelatin — papain\'s own substrate — becomes the gate that releases the peptide last. Marked as proposed, which is what it is.', zh: '**把不相容當成設計命題。**木瓜蛋白酶會把配方其餘部分消化掉，於是明膠——木瓜蛋白酶自己的基質——變成那道最後才放出肽的閘門。它被標記為提議中，而它確實就是提議中。' },
            { en: '**Keep the endpoint that failed in the figure.** Gravimetry did not separate any group, and publishing it is why the crystal violet result reads as a measurement rather than a selection.', zh: '**把失敗的那個終點留在圖裡。**乾重法沒有分開任何一組，而把它公開，正是結晶紫那個結果讀起來像一次量測、而不是一次挑選的原因。' }
          ]) +
          h.note({
            en: 'Labelled as ours: the twelve items above, the judgement that the swapped-substrate control and the published non-expressing construct are the two most transferable practices on this wiki, and the view that the GBD maps are figures rather than models. Everything else is the team\'s own, read from [2026.igem.wiki/hangzhoufourteenap](https://2026.igem.wiki/hangzhoufourteenap/).',
            zh: '標示為我們的看法：上面十二點、「基質互換對照與那個被公開的未表達構築是這個 wiki 上最可轉移的兩項做法」這個判斷，以及「GBD 地圖是圖而不是模型」這個看法。其餘都是該隊自己的內容，讀自 [2026.igem.wiki/hangzhoufourteenap](https://2026.igem.wiki/hangzhoufourteenap/)。'
          })
      });

      return out;
    }
  };
})(window);
