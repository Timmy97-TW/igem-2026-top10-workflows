/* Idea 4 — ENDOREAD. Stanford-University's 2026 principle (let an enzyme the host already has
   read a duplex and decide whether the output is made), transposed to a chassis a High School
   team can use, where the reader is endogenous RNase III instead of ADAR.
   Ours; never run. Literature cited inline with PubMed IDs; sources in notes/2027-idea-sources.md */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var SWIM = {
    wet: [
      { l: { en: 'Rebuild the published cis switch first', zh: '先重建那個已公開的 cis 開關' },
        s: { en: 'An 11 to 13 bp RNase III site upstream of an RBS already exists as Registry parts. Reproduce it before changing it', zh: 'RBS 上游 11 到 13 bp 的 RNase III 位點已經是 Registry 元件。先重現它，再改它' }, tone: 'g' },
      { l: { en: 'Cut the hairpin in half and supply it in trans', zh: '把髮夾剪成兩半，用 trans 供應' },
        s: { en: 'One strand stays on the reporter, the other is a separate sensor RNA. This is the only new idea in the project', zh: '一股留在報告子上，另一股作為獨立的感測 RNA。這是整個專案裡唯一的新想法' } },
      { l: { en: 'Run it in two strains, same day, same plate', zh: '在兩個菌株中跑，同一天、同一盤' },
        s: { en: 'An RNase III-deficient strain and a functional one. If the output is identical, the reader is not reading', zh: '一個缺乏 RNase III 的菌株、一個功能正常的。如果輸出一樣，那讀取者就沒有在讀' }, tone: 'g' },
      { l: { en: 'Put the gene back on a plasmid', zh: '把那個基因用質體補回去' },
        s: { en: 'Complementation plus an empty-vector control. Two strains differ in more than one gene; this closes that', zh: '互補加上空載體對照。兩個菌株相差的不只一個基因；這一步把那個缺口關上' }, tone: 'a' },
      { l: { en: 'Walk the duplex length across the threshold', zh: '讓雙股長度跨過那個門檻' },
        s: { en: 'A short series around 11 bp, where the literature says one base pair is worth fiftyfold', zh: '在 11 bp 附近做一個短序列，而文獻說那裡一個鹼基對值五十倍' } }
    ],
    dry: [
      { l: { en: 'Generate candidates, do not rank them', zh: '產生候選，不要給它們排名' },
        s: { en: 'Use the folding tools for what they are good at: building a library and predicting crosstalk', zh: '把摺疊工具用在它們擅長的事上：建立一個庫、預測交叉反應' }, tone: 'v' },
      { l: { en: 'Conserve the published determinants', zh: '保留那些已公開的決定因子' },
        s: { en: 'Two base pairs of distal box, two of middle box, four of proximal box, each with named preferred pairs', zh: '遠端框兩個鹼基對、中框兩個、近端框四個，每一個都有已具名的偏好配對' }, tone: 'v' },
      { l: { en: 'Design the bind-but-do-not-cut control', zh: '設計「會結合但不切」的對照' },
        s: { en: 'One base pair in the proximal box blocks cleavage without touching binding. That is a free negative control', zh: '近端框裡的一個鹼基對能阻止切割而不影響結合。那是一個免費的負面對照' }, tone: 'v' },
      { l: { en: 'Pre-register the prediction and the ceiling', zh: '事先登記預測與上限' },
        s: { en: 'Write down the fold-change you expect, where the literature ceiling sits, and what a null result looks like', zh: '寫下你預期的倍數變化、文獻的上限在哪裡，以及一個虛無結果長什麼樣子' }, tone: 'v' },
      { l: { en: 'Publish the library, including the dead designs', zh: '公開那個庫，包含失敗的設計' },
        s: { en: 'Sequences, predictions and measurements in one table, so the next team can refit it', zh: '序列、預測與量測放在同一張表，好讓下一支隊伍能重新擬合' }, tone: 'v' }
    ],
    links: [
      { w: 1, d: 1, l: { en: 'the determinants fix the geometry', zh: '決定因子固定了幾何' }, up: true },
      { w: 4, d: 4, l: { en: 'the length series is the dataset', zh: '長度序列就是那份資料集' }, up: false }
    ]
  };

  PD.pages['x-reader'] = {
    label: { en: 'Idea 4 · ENDOREAD', zh: '題目四 · ENDOREAD' },
    title: { en: 'ENDOREAD — borrow the host\'s own enzyme as the reader', zh: 'ENDOREAD——借宿主自己的酵素當讀取者' },
    render: function (h) {
      var out = '';

      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'Idea 4 of 5 · our proposal, never run · built on Stanford-University 2026 · Foundational Advance',
          zh: '五個題目中的第四個 · 我們的提案，從未執行 · 建立在 Stanford-University 2026 上 · 基礎推進'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The Grand Prize team let the cell\'s own enzyme decide. ==In a bacterium that enzyme already exists, and nobody has asked it to read.==',
          zh: '首獎隊伍讓細胞自己的酵素做決定。==而在細菌裡那個酵素本來就存在，只是沒有人請它來讀。=='
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Stanford-University\'s 2026 project does not build a sensor protein. It puts a stop codon inside a sequence that pairs with a transcript the target cell already has, and lets the cell\'s **own ADAR enzyme** edit that stop codon away — so the therapeutic is translated only where the transcript is. The transferable idea is: **form a duplex with something the host already contains, and let an enzyme the host already expresses decide whether the output is made.** A High School team cannot run that, because it needs mammalian cells, a flow cytometer and primary fibroblasts, which the iGEM White List closes outright. But *E. coli* has its own double-strand reader — **RNase III** — and nature already uses an RNase III cut beside a ribosome binding site to switch translation on by **at least 200-fold**. Nobody, in iGEM or in the literature, has asked that enzyme to read a duplex formed **in trans** between an engineered sensor and a target transcript. **That single unanswered question is the project**, and it is settled by swapping one strain.',
          zh: 'Stanford-University 的 2026 專案沒有做任何感測蛋白。它把一個停止密碼子放進一段「會與目標細胞本來就有的某個轉錄本配對」的序列裡，然後讓細胞**自己的 ADAR 酵素**把那個停止密碼子編輯掉——於是治療蛋白只在那個轉錄本存在的地方被轉譯。可以搬運的那個想法是：**和宿主本來就有的東西形成雙股，然後讓宿主本來就在表達的某個酵素去決定輸出要不要被製造。**一支高中部隊伍跑不了那個，因為它需要哺乳動物細胞、流式細胞儀與原代纖維母細胞，而 iGEM 白名單把後者直接關掉。但 *E. coli* 有它自己的雙股讀取者——**RNase III**——而大自然早就用「RBS 旁邊的一刀 RNase III 切割」把轉譯打開了**至少 200 倍**。而在 iGEM 與文獻中，從來沒有人請那個酵素去讀一段「工程化感測 RNA 與目標轉錄本之間、以 **trans** 形成」的雙股。**那一個沒被回答的問題就是這個專案**，而它靠換一個菌株就能定案。'
        }) + '</p>' +
        h.stats([
          { v: '200×', l: { en: 'Translation activation nature already gets from one RNase III cut beside an RBS', zh: '大自然光靠 RBS 旁一刀 RNase III 切割就得到的轉譯活化倍數' } },
          { v: '11 bp', l: { en: 'The published minimum duplex; one base pair less costs fiftyfold', zh: '已發表的最小雙股長度；少一個鹼基對就差五十倍' } },
          { v: '0', l: { en: 'Papers or iGEM projects that have tried this in trans', zh: '嘗試過以 trans 方式做這件事的論文或 iGEM 專案數' } },
          { v: '2', l: { en: 'Strains the first experiment needs. That is the whole control', zh: '第一個實驗需要幾個菌株。那就是全部的對照' } },
          { v: '0', l: { en: 'Of these experiments we have run. This is a plan', zh: '這些實驗我們做過幾個。這是一份計畫' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'rd-why', t: { en: 'The principle, transposed', zh: '那個原理，被搬過來' } },
        { id: 'rd-open', t: { en: 'What is actually open', zh: '真正還開著的問題' } },
        { id: 'rd-geo', t: { en: 'The geometry is the design', zh: '幾何就是設計' } },
        { id: 'rd-dry', t: { en: 'What the dry lab is for', zh: '乾式實驗是用來做什麼的' } },
        { id: 'rd-gate', t: { en: 'The five gates', zh: '五道關卡' } },
        { id: 'rd-flow', t: { en: 'The workflow', zh: '工作流程' } },
        { id: 'rd-tool', t: { en: 'Tools, strains and money', zh: '工具、菌株與錢' } },
        { id: 'rd-plan', t: { en: 'The schedule', zh: '行程' } },
        { id: 'rd-risk', t: { en: 'What kills it', zh: '什麼會殺死它' } },
        { id: 'rd-ship', t: { en: 'What it ships', zh: '它交付什麼出去' } }
      ]);

      /* ---------------- why ---------------- */
      out += h.sec({
        id: 'rd-why',
        kick: { en: 'The principle', zh: '那個原理' },
        h2: { en: 'Do not build a reader. Borrow one the host already pays for', zh: '不要做一個讀取者。去借一個宿主已經在付錢養的' },
        body:
          h.kv([
            [{ en: 'What Stanford built', zh: 'Stanford 做了什麼' },
             { en: 'A synthetic mRNA carrying two in-frame stop codons, each inside a sequence complementary to a different transcript enriched in the target cell. The cell\'s own **ADAR1** edits a stop codon away only where that transcript is present, so the payload is translated only in a cell containing both. **The logic is enforced at translation, not transcription**, and the sensor is read by an enzyme the cell already has.', zh: '一條合成 mRNA，帶著兩個在框內的停止密碼子，每一個都位於「與目標細胞中某個富集轉錄本互補」的序列裡。細胞自己的 **ADAR1** 只在那個轉錄本存在的地方把停止密碼子編輯掉，所以負載只在同時含有兩者的細胞中被轉譯。**邏輯是在轉譯層被執行的，不是在轉錄層**，而那個感測器是由細胞本來就有的酵素來讀的。' }],
            [{ en: 'Why a High School team cannot run it', zh: '為什麼高中部隊伍跑不了它' },
             { en: 'Their workflow needs mammalian cell culture, transfection, a flow cytometer and **primary fibroblasts** — and iGEM\'s White List requires a Check-In for "all primary isolated cells", which High School teams **cannot file**. Certified immortalised lines are white-listed, but the practical barrier remains: this is a cell-culture project read on an instrument most schools do not have.', zh: '他們的流程需要哺乳動物細胞培養、轉染、流式細胞儀，以及**原代纖維母細胞**——而 iGEM 白名單對「所有原代分離細胞」要求 Check-In，而高中部隊伍**無法提交**。經認證的永生細胞株在白名單上，但實務門檻仍在：這是一個細胞培養專案，而它的讀值要靠大多數學校沒有的儀器。' }],
            [{ en: 'What a bacterium already has', zh: '細菌本來就有什麼' },
             { en: '**RNase III**, the enzyme *E. coli* uses to find and cut double-stranded RNA. Its substrate rules are published to the base pair, a deficient strain is a catalogued, biosafety-level-1, commercially sourced reagent, and the natural precedent is not subtle: in bacteriophage lambda, an RNase III cut in the leader upstream of a ribosome binding site **"activates N gene translation at least 200-fold"**.', zh: '**RNase III**，*E. coli* 用來找出並切開雙股 RNA 的那個酵素。它的底物規則已經被發表到「每一個鹼基對」的精度，一個缺乏它的菌株是一個有編目、生物安全第一等級、可從外部取得的試劑，而自然界的先例並不隱晦：在噬菌體 lambda 中，RBS 上游前導區的一刀 RNase III 切割**「把 N 基因的轉譯活化了至少 200 倍」**。' }],
            [{ en: 'The one new idea', zh: '那一個新想法' },
             { en: 'Everything above exists. What does not exist is **a duplex formed in trans** — one strand on the reporter, the other supplied as a separate sensor RNA that pairs with a target transcript — being read by the host\'s own RNase III to switch translation on. Two thirds of the device is already in the Registry as *cis*, temperature-gated parts. **The project is to make the duplex intermolecular and find out whether the reader still reads.**', zh: '上面所有東西都已經存在。不存在的是：**一段以 trans 形成的雙股**——一股在報告子上、另一股作為獨立的感測 RNA 與目標轉錄本配對——被宿主自己的 RNase III 讀取，從而把轉譯打開。這個裝置的三分之二已經以 *cis*、由溫度調控的元件形式存在於 Registry。**這個專案要做的，是把那段雙股變成分子間的，然後找出那個讀取者是否還在讀。**' }],
            [{ en: 'Why this is a good school project and not a thin one', zh: '為什麼這是一個好的學校專案，而不是一個單薄的專案' },
             { en: 'Because the answer is decided by **swapping one strain**, not by a long chain of inference. Run the same construct in an RNase III-deficient strain and a functional one, on the same plate on the same day, and put the gene back on a plasmid to close the gap. A null result is as publishable as a positive one, and arrives just as early.', zh: '因為答案是靠**換一個菌株**決定的，不是靠一長串推論。把同一個構築放進一個缺乏 RNase III 的菌株與一個功能正常的菌株，在同一天的同一盤上跑，再用質體把那個基因補回去把缺口關上。一個虛無結果和一個正面結果一樣可以公開，而且來得一樣早。' }]
          ])
      });

      /* ---------------- what is open ---------------- */
      out += h.sec({
        id: 'rd-open',
        kick: { en: 'Prior art', zh: '前人做過的' },
        h2: { en: 'A clean negative — and two papers that push against it, which is why it is the first experiment', zh: '一個乾淨的否定——以及兩篇推向反方向的論文，這正是為什麼它是第一個實驗' },
        lede: {
          en: 'We went looking for anyone who had done this. Nobody has. But the honest part of this section is the evidence that it might not work, and a plan that hides that is not a plan.',
          zh: '我們去找有沒有人做過這件事。沒有人做過。但這一節誠實的部分，是那些「它可能不成立」的證據；而一個把那件事藏起來的計畫，不是計畫。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What exists', zh: '已經存在什麼' }, w: '24%' },
              { t: { en: 'And how far it goes', zh: '以及它走到哪裡' } },
              { t: { en: 'Source', zh: '出處' }, w: '18%' }
            ],
            rows: [
              [{ en: '**The natural precedent, and it is large**', zh: '**自然界的先例，而且很大' + '**' },
               { en: 'In bacteriophage lambda the N leader carries an RNase III-sensitive hairpin followed by the N ribosome binding site, and cleavage prevents N from repressing its own translation: **"by preventing N autoregulation, RNase III activates N gene translation at least 200-fold."** Natural, intramolecular, and the input is the enzyme\'s own abundance — but it is the number that makes the project\'s upper bound plausible.', zh: '在噬菌體 lambda 中，N 的前導序列帶著一個對 RNase III 敏感的髮夾，後面接著 N 的 RBS；切割會阻止 N 抑制自己的轉譯：**「透過阻止 N 的自體調控，RNase III 把 N 基因的轉譯活化了至少 200 倍。」**這是自然的、分子內的，而且輸入是那個酵素自己的豐度——但它正是讓這個專案的上限變得可信的那個數字。' },
               { en: '[PMID 12145215](https://pubmed.ncbi.nlm.nih.gov/12145215/)', zh: '[PMID 12145215](https://pubmed.ncbi.nlm.nih.gov/12145215/)' }],
              [{ en: '**Two thirds of the device, already in the Registry**', zh: '**裝置的三分之二，已經在 Registry 裡' + '**' },
               { en: 'A 2018 team built "a minimal RNase III cleavage site in *E. coli*" as a cold-repressible thermosensor, inserted **upstream of the RBS**, conserving the published cleavage determinants and tuning the stem across **11 to 13 bp** — ten parts. A 2024 team rebuilt it explicitly "inspired by" them, citing the same substrate paper, with twenty-two more parts. **The difference from this idea: their duplex is intramolecular and their input is temperature.** No second sensor RNA, no target transcript.', zh: '2018 年有一支隊伍把「*E. coli* 中一個最小的 RNase III 切割位點」做成低溫抑制型的溫度感測器，插在 **RBS 上游**，保留了已發表的切割決定因子，並把莖長在 **11 到 13 bp** 之間調校——共十個元件。2024 年另一支隊伍明確寫著「受他們啟發」而重建，引用同一篇底物論文，又多了二十二個元件。**和這個題目的差別是：他們的雙股是分子內的，而他們的輸入是溫度。**沒有第二條感測 RNA，沒有目標轉錄本。' },
               { en: 'Registry parts BBa_K2541201–10 and BBa_K5280410–31', zh: 'Registry 元件 BBa_K2541201–10 與 BBa_K5280410–31' }],
              [{ en: '**The nearest engineered relative**', zh: '**最接近的工程化親戚' + '**' },
               { en: 'An antisense RNA binds a synthetic guide RNA; endogenous RNase III cleaves the resulting duplex, destroying the guide and **derepressing a silenced reporter by up to 95 %**. And the design to copy is theirs: deficient strain, functional strain, **plasmid complementation and a matched empty vector**. But the duplex partner is a synthetic guide, not a target transcript, and RNase III dependence is **partial** — derepression was 71 % in the deficient strain against 91 % in the functional one, and the authors say RNase III "is not the only component of the mechanism".', zh: '一條反義 RNA 結合一條合成嚮導 RNA；內源 RNase III 切開形成的雙股，摧毀那條嚮導，從而**把一個被沉默的報告子解抑制達 95%**。而值得照抄的設計正是他們的：缺乏株、功能株、**質體互補與配對的空載體**。但雙股的另一半是合成嚮導，不是目標轉錄本；而且對 RNase III 的依賴是**部分的**——缺乏株中解抑制為 71%，功能株中為 91%，而作者自己說 RNase III「不是這個機制唯一的組成」。' },
               { en: '[PMID 26837577](https://pubmed.ncbi.nlm.nih.gov/26837577/)', zh: '[PMID 26837577](https://pubmed.ncbi.nlm.nih.gov/26837577/)' }],
              [{ en: '**The paper that pushes hardest against it**', zh: '**最用力推向反方向的那篇' + '**' },
               { en: 'The closest architecture anybody has built: an engineered guide RNA that hybridises **endogenous host transcripts**, turning them into functional guides that drive gene activation in *E. coli* — sensor RNA paired with a real target transcript, gating expression. **They tested RNase III and ruled it out**: "RNase III is not required for our CRISPRa system", confirmed with the deficient strain, the functional strain and plasmid complementation, which "did not significantly improve the function". Their explanation is that their engineered ends were already long enough to skip processing.', zh: '任何人建造過的最接近的架構：一條工程化的嚮導 RNA 去雜交**內源宿主轉錄本**，把它們變成能驅動基因活化的功能性嚮導，在 *E. coli* 中進行——感測 RNA 與真實目標轉錄本配對，並把表達把關。**他們測了 RNase III，然後把它排除了**：「RNase III 對我們的 CRISPRa 系統不是必需的」，並以缺乏株、功能株與質體互補確認，而互補「並沒有顯著改善功能」。他們的解釋是：他們工程化的末端本來就夠長，可以跳過加工。' },
               { en: '[PMID 35410423](https://pubmed.ncbi.nlm.nih.gov/35410423/)', zh: '[PMID 35410423](https://pubmed.ncbi.nlm.nih.gov/35410423/)' }],
              [{ en: '**What iGEM thinks RNase III is**', zh: '**iGEM 認為 RNase III 是什麼' + '**' },
               { en: 'Almost every iGEM use falls into four buckets: a *cis* hairpin gated by temperature; cleavage sites used as **insulators**; **removing or inhibiting** RNase III so that double-stranded RNA survives; or supplying a different enzyme from the same family. Several teams knock it out on purpose, and one contributed an RNase III **inhibitor** as a part. **Almost the whole corpus treats this enzyme as the enemy** — which is itself the evidence that duplex RNA in *E. coli* really is RNase III-sensitive, and that is the premise this project would exploit.', zh: '幾乎每一個 iGEM 對 RNase III 的使用都落在四個桶子裡：由溫度調控的 *cis* 髮夾；把切割位點當成**絕緣子**；**移除或抑制** RNase III 好讓雙股 RNA 存活；或者引入同家族的另一個酵素。有好幾支隊伍刻意把它剔除，而其中一支還貢獻了一個 RNase III **抑制劑**當元件。**幾乎整個語料庫都把這個酵素當成敵人**——而那件事本身就是證據：*E. coli* 裡的雙股 RNA 確實對 RNase III 敏感，而那正是這個專案要利用的前提。' },
               { en: 'Our reading of the Registry API and the team wikis', zh: '我們對 Registry API 與各隊 wiki 的判讀' }]
            ],
            min: 1040,
            source: { en: 'Searched with the Registry API (the legacy parts pages refuse automated requests) plus PubMed and domain-restricted web search. The negative is strong but not exhaustive: no structured patent or Scopus sweep was run, and pre-2022 team wikis return 403 to automated clients, so a very old project could exist that we cannot see.', zh: '以 Registry API（舊版元件頁拒絕自動請求）加上 PubMed 與限定網域的網路搜尋進行檢索。這個否定結論很強但不完備：我們沒有做結構化的專利或 Scopus 掃描，而 2022 年之前的隊伍 wiki 對自動化客戶端回傳 403，所以可能存在一個我們看不到的很舊的專案。' }
          }) +
          h.warn({
            en: '**So the central assumption is the first experiment, not a line in the introduction.** Nobody has shown that an intermolecular sensor-to-target duplex gets cleaved by endogenous RNase III at a useful rate and in the right place; one paper found it only partly responsible, and the closest architecture to this idea found it **dispensable**. If your January document says "RNase III will cleave the duplex", you have written a hope. If it says "we will find out in month three with a two-strain comparison, and here is the sentence we will publish if the answer is no", you have written a project. **Everything else on this page is downstream of that one measurement.**',
            zh: '**所以那個核心假設就是第一個實驗，不是引言裡的一句話。**沒有人證明過「分子間的感測—標的雙股會被內源 RNase III 以有用的速率、在正確的位置切開」；有一篇論文發現它只負責一部分，而最接近這個想法的那個架構發現它**可以不要**。如果你一月的文件寫著「RNase III 會切開那段雙股」，你寫下的是一個願望。如果它寫著「我們會在第三個月用一個雙菌株比較把它查清楚，而如果答案是否，我們會公開的句子如下」，那你寫下的是一個專案。**本頁其他所有東西都在那一個量測的下游。**'
          })
      });

      /* ---------------- geometry ---------------- */
      out += h.sec({
        id: 'rd-geo',
        kick: { en: 'Key data', zh: '關鍵數據' },
        h2: { en: 'The design is geometry, and the geometry is published to the base pair', zh: '設計就是幾何，而這個幾何已經被發表到每一個鹼基對' },
        lede: {
          en: 'This is what makes the idea buildable rather than hopeful. The enzyme\'s substrate requirements are known precisely enough to design a dose series, a positive control and a negative control out of the same construct.',
          zh: '正是這一節讓這個題目變成「做得出來」而不是「只是希望」。那個酵素的底物要求已經清楚到足以讓你用同一個構築設計出一個劑量序列、一個正對照與一個負對照。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'The rule', zh: '規則' }, w: '20%' },
              { t: { en: 'The published number, and what you do with it', zh: '已發表的數字，以及你要拿它做什麼' } },
              { t: { en: 'Source', zh: '出處' }, w: '17%' }
            ],
            rows: [
              [{ en: '**Minimum duplex length: 11 bp**', zh: '**最小雙股長度：11 bp**' },
               { en: 'An 11 bp helix between the cleavage site and the loop "represents the shortest length that provides significant reactivity". Deleting **one** base pair costs a **50-fold** drop in reactivity; deleting **two** "essentially abolishes cleavage" — and gel shift shows both losses are **loss of binding**, not of catalysis. Typical substrates are about two helical turns, roughly 22 bp. **This is your dose series**: a short ladder across 9, 10, 11, 13 and 16 bp has a published prediction at every rung.', zh: '切割位點與環之間的 11 bp 螺旋「代表了能提供顯著反應性的最短長度」。刪掉**一個**鹼基對，反應性下降 **50 倍**；刪掉**兩個**「基本上消除了切割」——而膠體位移顯示這兩次損失都是**結合力的喪失**，不是催化的喪失。典型底物約兩個螺旋圈，大約 22 bp。**這就是你的劑量序列**：一個跨過 9、10、11、13 與 16 bp 的短階梯，每一階都有已發表的預測。' },
               { en: '[PMID 16896014](https://pubmed.ncbi.nlm.nih.gov/16896014/)', zh: '[PMID 16896014](https://pubmed.ncbi.nlm.nih.gov/16896014/)' }],
              [{ en: '**The determinants: 2 + 2 + 4 base pairs**', zh: '**決定因子：2 ＋ 2 ＋ 4 個鹼基對**' },
               { en: 'Inside that 11 bp helix sit a two-base-pair **distal box**, a two-base-pair **middle box** and a four-base-pair **proximal box**, each with named preferred pairs. Every substitution in the distal box cut reactivity more than about fivefold; one swap cost **50-fold**. The middle box modulates: one change **enhances** reactivity, another drops it to about a third. **A single determinant set is enough to specify a cleavage site, and adding a second creates a second site that behaves independently.**', zh: '在那 11 bp 螺旋裡，坐著一個兩鹼基對的**遠端框**、一個兩鹼基對的**中框**與一個四鹼基對的**近端框**，每一個都有已具名的偏好配對。遠端框裡的每一個置換都讓反應性下降超過約五倍；其中一次交換代價是 **50 倍**。中框則起調節作用：一個改動會**增強**反應性，另一個把它降到大約三分之一。**單一組決定因子就足以指定一個切割位點，而加上第二組會產生第二個位點，而且兩者各自獨立運作。**' },
               { en: 'Same paper', zh: '同一篇' }],
              [{ en: '**A free negative control: bind but do not cut**', zh: '**一個免費的負對照：會結合但不切' + '**' },
               { en: 'One position in the proximal box is a **catalytic** antideterminant: two different substitutions there cost **14-fold and 7-fold in cleavage without inhibiting binding at all.** The paper draws the consequence itself — regular helical structures "can provide cleavage-resistant binding sites for RNase III". **So the same construct gives you a sensor that forms the duplex and does not get cut**, which separates "the duplex formed" from "the duplex was read" in one extra well.', zh: '近端框裡有一個位置是**催化**上的反決定因子：那裡兩種不同的置換在切割上分別代價 **14 倍與 7 倍，而完全不抑制結合。**那篇論文自己就導出了結論——規則的螺旋結構「可以為 RNase III 提供抗切割的結合位點」。**所以同一個構築就能給你一個「會形成雙股但不會被切」的感測器**，這讓「雙股形成了」與「雙股被讀了」只用一個額外的孔就被分開。' },
               { en: 'Same paper', zh: '同一篇' }],
              [{ en: '**Coaxial stacking counts**', zh: '**同軸堆疊算進長度' + '**' },
               { en: 'Short helices stacked coaxially "can provide a quasi-continuous helix of sufficient length". That is a real design lever if your trans duplex cannot reach 11 contiguous base pairs against the target you want.', zh: '同軸堆疊的短螺旋「可以提供一段長度足夠的準連續螺旋」。如果你的 trans 雙股在你想要的標的上湊不出 11 個連續鹼基對，這是一個真實可用的設計槓桿。' },
               { en: 'Same paper', zh: '同一篇' }],
              [{ en: '**Trans duplexes are cleaved in vivo — in nature**', zh: '**trans 雙股在體內會被切——在自然界' + '**' },
               { en: 'A transcriptome-wide, nucleotide-resolution cleavage map covers "both intra-molecular and **inter-molecular** duplex substrates", and genome-wide work finds that antisense RNAs bound to their complementary mRNA are "primary targets of RNase III". **So the enzyme does read trans duplexes.** What is unknown is whether it reads one you designed, beside an RBS, at a useful rate.', zh: '一份覆蓋全轉錄體、單核苷酸解析度的切割圖譜涵蓋了「分子內與**分子間**兩種雙股底物」，而全基因體層級的研究發現，與互補 mRNA 結合的反義 RNA 是「RNase III 的主要標的」。**所以這個酵素確實會讀 trans 雙股。**未知的是：它會不會讀一段**你設計的**、放在 RBS 旁邊的雙股，而且速率有用。' },
               { en: '[PMID 30113670](https://pubmed.ncbi.nlm.nih.gov/30113670/)', zh: '[PMID 30113670](https://pubmed.ncbi.nlm.nih.gov/30113670/)' }],
              [{ en: '**The allele that separates binding from cutting**', zh: '**把結合與切割分開的那個等位' + '**' },
               { en: 'Among the published *rnc* alleles, one is **catalytically dead but still binds double-stranded RNA**, and is dominant over wild type in the lambda system. If you can get it, it is the sharpest control in the whole design — it distinguishes "the enzyme is not there" from "the enzyme is there and cannot cut". Treat it as a stretch goal; the two-strain comparison is the one that must happen.', zh: '在已發表的 *rnc* 等位中，有一個是**催化失活但仍然結合雙股 RNA**，而且在 lambda 系統中對野生型呈顯性。如果你拿得到它，它是整個設計裡最鋒利的對照——它把「酵素不在那裡」與「酵素在那裡但不能切」分開。把它當成加分目標；必須發生的是那個雙菌株比較。' },
               { en: 'Allele panel in a 2021 review, [PMID 34946208](https://pubmed.ncbi.nlm.nih.gov/34946208/)', zh: '2021 年一篇回顧中的等位清單，[PMID 34946208](https://pubmed.ncbi.nlm.nih.gov/34946208/)' }]
            ],
            min: 1040,
            source: { en: 'All figures are the cited papers\' own, retrieved from PubMed; the substrate paper\'s own honest caveat is that "the shortest helix that confers appreciable reactivity under standard conditions has not been defined for any bacterial RNase III ortholog" — the 11 bp figure is for one model substrate. Verify before designing primers.', zh: '所有數字都出自所引論文，取自 PubMed；那篇底物論文自己誠實的保留是：「在標準條件下能賦予可觀反應性的最短螺旋，對任何細菌 RNase III 同源物都還沒有被定義過」——11 bp 這個數字是針對一個模型底物的。在設計引子之前請先確認。' }
          }) +
          h.take({ en: 'The benchmark to publish beside your fold-change', zh: '該印在你倍數變化旁邊的那個基準' }, {
            en: 'A fold-change means nothing alone. The honest range to put beside yours: the original prokaryotic translational riboregulators, re-measured, sit at about **11 and 13-fold**; the first generation of toehold switches averaged **43-fold** across 168 designs with only **20 above 100**; forward-engineered second-generation switches averaged **406-fold**. And the natural lambda precedent sets a ceiling near **200-fold**. **If your trans RNase III switch reaches 10-fold, it is in the company of the original riboregulators and worth publishing; if it reaches nothing, the two-strain control tells you whether the reader or the design is at fault** — which is more than most negative results can say.',
            zh: '一個倍數變化單獨看沒有意義。該擺在你旁邊的誠實範圍是：最初那些原核轉譯型核酸調控元件，重新量測後大約在 **11 與 13 倍**；第一代 toehold 開關在 168 個設計上平均 **43 倍**，其中只有 **20 個超過 100**；而經過正向工程的第二代平均 **406 倍**。而自然界 lambda 的先例把上限放在 **200 倍**附近。**如果你的 trans RNase III 開關做到 10 倍，它就與最初那些核酸調控元件同級，值得公開；而如果它什麼也沒做到，那個雙菌株對照會告訴你問題出在讀取者還是設計上**——那比大多數負面結果所能說的都多。'
          })
      });

      /* ---------------- dry lab ---------------- */
      out += h.sec({
        id: 'rd-dry',
        kick: { en: 'The correction', zh: '更正' },
        h2: { en: 'Use the folding tools to generate and to check crosstalk. Do not use them to rank', zh: '用摺疊工具來產生候選、來檢查交叉反應。不要用它們來排名' },
        lede: {
          en: 'This section exists because it killed our own first version of this idea, and because it will save a 2027 team a season. If your plan is to rank candidate designs by predicted free energy, the largest measured dataset in the field says you are wasting the effort.',
          zh: '這一節之所以存在，是因為它殺掉了我們自己這個題目的第一個版本，也因為它能替某支 2027 隊伍省下一整季。如果你的計畫是用預測自由能來給候選設計排名，這個領域中最大的實測資料集會告訴你：那個力氣白花了。'
        },
        body:
          h.p({
            en: 'Our first draft of this idea was: the Grand Prize team found that predicted folding free energy ranks RNA sensors — Spearman **ρ = 0.62 to 0.63**, against about **−0.2** for the GC-content rule it replaced — but their regression reached only **Q² = 0.20** across a **25-sensor** library, so a school team could test the same rule in a cheap chassis at larger *n*. Then we read the literature on exactly that question, and the question turns out to be answered.',
            zh: '我們這個題目的初稿是：首獎隊伍發現「預測的摺疊自由能可以為 RNA 感測器排序」——Spearman **ρ = 0.62 到 0.63**，而它所取代的 GC 含量規則只有約 **−0.2**——但他們的回歸在一個 **25 個感測器**的庫上只達到 **Q² = 0.20**，所以一支學校團隊可以在一個便宜的宿主裡用更大的 *n* 去測同一條規則。然後我們讀了正好關於那個問題的文獻，而那個問題原來已經有答案了。'
          }) +
          h.tbl({
            cols: [
              { t: { en: 'Predictor', zh: '預測因子' }, w: '34%' },
              { t: { en: 'R² against ON/OFF', zh: '對 ON/OFF 的 R²' }, num: true, w: '18%' },
              { t: { en: 'What it means', zh: '這代表什麼' } }
            ],
            rows: [
              [{ en: 'Best single thermodynamic feature', zh: '最佳的單一熱力學特徵' }, '**0.04**',
               { en: 'Measured on **91,534** toehold switches by sequencing — about a hundred times any dataset before it.', zh: '以定序方式在 **91,534** 個 toehold 開關上量測——比之前任何資料集大約大一百倍。' }],
              [{ en: 'A standard folding-tool ensemble defect', zh: '一個標準摺疊工具的集合缺陷值' }, '**0.03**',
               { en: 'The quantity people most often use to pick designs.', zh: '大家最常用來挑設計的那個量。' }],
              [{ en: 'A published ribosome-binding-site calculator', zh: '一個已發表的 RBS 計算器' }, '**0.0001**',
               { en: 'Effectively no relationship at all.', zh: '基本上完全沒有關係。' }],
              [{ en: 'A neural network on **all 30** thermodynamic features', zh: '用**全部 30 個**熱力學特徵訓練的神經網路' }, '**0.20**',
               { en: 'The ceiling for thermodynamics on this problem — and **exactly where the Grand Prize team\'s Q² of 0.20 lands**, which makes their number a fair and defensible result rather than a weak one.', zh: '熱力學在這個問題上的天花板——而且**首獎隊伍的 Q² = 0.20 正好落在這裡**，這讓他們那個數字成為一個公允、站得住腳的結果，而不是一個弱的結果。' }],
              [{ en: 'A neural network on the **raw sequence** only', zh: '只用**原始序列**訓練的神經網路' }, '**0.43**',
               { en: 'Twice the thermodynamic ceiling. The authors\' conclusion: "**significant information loss occurs when performing thermodynamic calculations** on toehold-switch sequences, a problem that may extend to other RNA synthetic biology tools in use today."', zh: '熱力學天花板的兩倍。作者的結論是：「**對 toehold 開關序列進行熱力學計算時會發生顯著的資訊損失**，而這個問題可能延伸到今天使用中的其他 RNA 合成生物學工具。」' }]
            ],
            min: 880,
            source: { en: 'Angenent-Mari et al. 2020, [PMID 33028812](https://pubmed.ncbi.nlm.nih.gov/33028812/). Their verdict on the whole panel of predictors: "these correlation metrics were **too weak for practical use in computer-aided design**." Kinetic features did not rescue it, and re-running across five data-quality tiers did not either.', zh: 'Angenent-Mari 等，2020，[PMID 33028812](https://pubmed.ncbi.nlm.nih.gov/33028812/)。他們對整組預測因子的判定是：「這些相關性指標**太弱，無法實際用於電腦輔助設計**。」動力學特徵沒有救起它，而在五個資料品質層級上重跑也沒有。' }
          }) +
          h.note({
            en: 'The founding toehold-switch paper says the same thing about itself, and it is worth quoting to anybody who proposes ranking by hybridisation energy: thermodynamic analyses "**did not reveal significant correlations** between riboregulator ON/OFF levels and the free energy of the switch-trigger interaction nor the free energy of toehold-trigger binding". A later deep-learning paper adds that the properties people use as selection criteria "**lack sufficient predictive power due to their broad range of acceptable values**", and reports that when its authors picked final candidates for synthesis they used predicted free energy only as **a last-resort tie-breaker**. **The pattern: these tools are good at generating candidate libraries and at predicting crosstalk, and bad at ordering candidates by performance. Those are different jobs, and only the second one is widely believed.**',
            zh: '那篇奠基的 toehold 開關論文對自己說了同樣的話，而這段值得拿給任何提議「用雜交能排名」的人看：熱力學分析「**沒有揭示**核酸調控元件的 ON/OFF 水準與『開關—觸發子交互作用的自由能』或『toehold—觸發子結合自由能』之間的顯著相關性」。後來一篇深度學習論文補上：大家當作篩選標準的那些性質「**因為可接受值的範圍太寬而缺乏足夠的預測力**」，並且報告說他們自己在挑選最終要合成的候選時，只把預測自由能當作**最後手段的決勝依據**。**這個模式是：這些工具擅長產生候選庫、擅長預測交叉反應，而不擅長把候選按表現排序。那是兩件不同的工作，而只有第二件被廣泛相信。**'
          }) +
          h.take({ en: 'So what the dry lab is for here', zh: '所以這裡的乾式實驗是用來做什麼的' }, {
            en: 'Three jobs, all of them real. **Generate** the library: conserve the published determinants, walk the duplex length across the threshold, and design the bind-but-do-not-cut variant. **Check crosstalk**: predicted pairing between your sensor and the rest of the host transcriptome is a question folding tools answer well, and it is the question that decides whether your sensor is specific. **Pre-register**: write down the expected fold-change at each rung of the length ladder, since the literature gives you a number for every one, and write down what a null looks like. **What the dry lab is not for is choosing which design is best — measure that.** A 2026 High School team selected four toehold candidates from about sixteen with folding predictions and six criteria; measured fold changes came back at **0.92 to 1.51** against a positive control at **28.1**, and their own wiki says "dry lab analysis might not accurately reflect in empirical testing."',
            zh: '三件工作，而且都是真的。**產生**那個庫：保留已發表的決定因子、讓雙股長度跨過門檻、並設計那個「會結合但不切」的變異體。**檢查交叉反應**：你的感測器與宿主其餘轉錄體之間的預測配對，是摺疊工具答得好的問題，而它正是決定你的感測器專一不專一的那個問題。**事先登記**：把長度階梯每一階的預期倍數變化寫下來——文獻對每一階都給了你一個數字——並寫下虛無結果長什麼樣子。**乾式實驗不是用來決定哪個設計最好的——那個要去量。**2026 年有一支高中部隊伍，用摺疊預測加六項標準，從大約十六個 toehold 候選中挑了四個；實測倍數變化回來是 **0.92 到 1.51**，而正對照是 **28.1**；他們自己的 wiki 寫著：「乾式實驗的分析可能無法準確反映在實證測試上。」'
          })
      });

      /* ---------------- gates ---------------- */
      out += h.sec({
        id: 'rd-gate',
        kick: { en: 'The procedure', zh: '程序' },
        h2: { en: 'The five gates, answered in one sentence each', zh: '五道關卡，每一道用一句話回答' },
        body:
          h.phases([
            { h: { en: 'Gate 1 — the number and the instrument', zh: '關卡一——數字與儀器' },
              p: { en: 'By week 20 we will report the ON/OFF fold-change of one trans RNase III switch in two strains, with at least three biological replicates each, read as fluorescence on a plate reader we can book.', zh: '到第 20 週，我們會報告一個 trans RNase III 開關在兩個菌株中的 ON/OFF 倍數變化，每個菌株至少三次生物重複，以螢光在我們訂得到的微孔盤讀儀上讀取。' },
              items: [
                { en: 'Report the **difference between strains**, not just the fold-change. The headline number is the ratio of ratios, because that is the thing the control makes meaningful.', zh: '要報告**菌株之間的差異**，不只是倍數變化。招牌數字是「比值的比值」，因為那才是對照讓它有意義的那個東西。' },
                { en: 'Fluorescence from a plate reader is enough. Nothing in this design needs flow cytometry, which is exactly what makes it the school-feasible version of the Stanford principle.', zh: '微孔盤讀儀的螢光就夠了。這個設計裡沒有任何東西需要流式細胞儀，而那正是它之所以能成為「Stanford 原理的學校可行版」的原因。' }
              ],
              done: { en: 'A booking in writing, and a plate map with both strains on the same plate.', zh: '一份書面的儀器預約，以及一張把兩個菌株放在同一盤上的盤位圖。' } },
            { h: { en: 'Gate 2 — the control that could make us wrong', zh: '關卡二——可能讓我們是錯的對照' },
              p: { en: 'The RNase III-deficient strain, and then the gene put back on a plasmid with a matched empty vector. **If the deficient and functional strains behave the same, the reader is not reading, and that is the result.**', zh: '那個缺乏 RNase III 的菌株，然後用質體把那個基因補回去，並配上一個配對的空載體。**如果缺乏株與功能株表現相同，那讀取者就沒有在讀，而那就是結果。**' },
              items: [
                { en: 'Two strains differ in more than one gene, which is why the complementation arm is not optional — it is the step that turns a strain difference into a statement about an enzyme. The template for exactly this control set is published.', zh: '兩個菌株相差的不只一個基因，這就是為什麼互補那一組不是選配——它是把「菌株差異」變成「關於某個酵素的陳述」的那一步。這組對照的範本已經發表了。' },
                { en: 'Second control, nearly free: the **bind-but-do-not-cut** variant, one base pair changed in the proximal box. It forms the duplex and resists cleavage, so it separates "the duplex formed" from "the duplex was read".', zh: '第二個對照，幾乎免費：那個**會結合但不切**的變異體，在近端框裡改一個鹼基對。它會形成雙股但抗切割，所以它把「雙股形成了」與「雙股被讀了」分開。' }
              ],
              done: { en: 'Four arms on the plate map before anything is built: deficient, functional, complemented, empty vector.', zh: '在任何東西被建造之前，盤位圖上就有四組：缺乏、功能、互補、空載體。' } },
            { h: { en: 'Gate 3 — two links, and we name them', zh: '關卡三——兩環，而且我們指名它們' },
              p: { en: 'Link one: the two-strand switch assembles and expresses the reporter. Link two: the fold-change is measured in both strains. There is no third link, because we are not attempting a disease, a device or a payload.', zh: '第一環：那個雙股開關組裝起來並表達報告子。第二環：倍數變化在兩個菌株中被量出來。沒有第三環，因為我們不嘗試任何疾病、裝置或治療負載。' },
              items: [
                { en: 'What we cut: sensing a real endogenous transcript. For the first season the "target" is a second RNA you express on purpose, because that keeps the question about the **reader** rather than about the target\'s abundance. Sensing a native transcript is the stated next step.', zh: '我們砍掉的是：去感測一個真實的內源轉錄本。第一季的「標的」是你刻意表達的第二條 RNA，因為那讓問題停留在**讀取者**上，而不是停留在標的的豐度上。感測原生轉錄本是明確的下一步。' },
                { en: 'What we also cut: a therapeutic framing. This is a Foundational Advance project, and the honest version of it does not need a disease attached.', zh: '我們也砍掉的是：治療性的敘事。這是一個基礎推進專案，而它誠實的版本不需要掛上一個疾病。' }
              ],
              done: { en: 'A chain diagram with two boxes marked "evidence", and the next step written as design.', zh: '一張鏈條圖，兩個方塊標「證據」，而下一步寫成「設計」。' } },
            { h: { en: 'Gate 4 — the outsider', zh: '關卡四——外部的人' },
              p: { en: 'Another team rebuilds two of your designs from the released sequences and reports the fold-change it measures, or a university laboratory confirms the duplex forms by an orthogonal method.', zh: '另一支隊伍依你釋出的序列重建你兩個設計，並回報他們量到的倍數變化；或者一間大學實驗室用一個正交方法確認那段雙股確實形成。' },
              items: [
                { en: 'We scored this gate **1 out of 2** on our own sheet, honestly: a peer team rebuilding your construct is a replication, which is valuable, but it is not a laboratory with an independent method. If you can get the second, take it.', zh: '我們在自己的表上誠實地給這一關 **2 分中的 1 分**：一支同儕隊伍重建你的構築是一次重現，那很有價值，但它不是「一間有獨立方法的實驗室」。如果你拿得到第二種，就拿。' },
                { en: 'There is a published reporter that detects double-stranded RNA abundance in bacteria by splitting a fluorescent protein across two viral binding domains. If you want independent evidence that your trans duplex exists in the cell, that is more school-feasible than a melting curve or a gel shift.', zh: '有一個已發表的報告系統，用「把一個螢光蛋白拆開接到兩個病毒結合域上」的方式偵測細菌中雙股 RNA 的豐度。如果你想要「你的 trans 雙股確實存在於細胞內」的獨立證據，那比熔解曲線或膠體位移更適合學校。' }
              ],
              done: { en: 'A named team or laboratory, a named measurement, and a date in the first half of the season.', zh: '一支具名的隊伍或實驗室、一個具名的量測，以及一個落在賽季前半的日期。' } },
            { h: { en: 'Gate 5 — the negative result, written first', zh: '關卡五——先寫下負面結果' },
              p: { en: 'Here is the sentence, and we would publish it unchanged — and given that the closest published architecture found this enzyme dispensable, we would expect to:', zh: '句子在這裡，而我們會原封不動公開它——而既然最接近的那個已發表架構發現這個酵素可以不要，我們本來就預期會用到它：' },
              items: [
                { en: '**"The switch gave *n*-fold activation, and the RNase III-deficient and functional strains did not differ, so the cleavage we designed for is not what produced the output."** That is a real finding about a mechanism a whole class of device is built on, and it is the second time somebody would have found it — which makes it stronger, not weaker.', zh: '**「這個開關給出 *n* 倍活化，而缺乏 RNase III 的菌株與功能正常的菌株沒有差異，所以我們設計的那個切割不是產生輸出的原因。」**那是一個關於「一整類裝置所建立之上的機制」的真實發現；而那會是第二次有人發現它——這讓它更強，不是更弱。' },
                { en: '**"No construct in the series gave more than twofold, so we cannot distinguish a failed design from a reader that does not read."** Write this one too, because it is the outcome where the length ladder saves you: a flat series across 9 to 16 bp means the design, while a series that moves means the reader.', zh: '**「序列中沒有任何構築超過兩倍，所以我們無法把『失敗的設計』與『不讀的讀取者』分開。」**這一句也要寫，因為那正是長度階梯救你的那個情況：從 9 到 16 bp 都平的序列代表問題在設計，而會動的序列代表問題在讀取者。' }
              ],
              done: { en: 'Both sentences in the January document, dated, with the expected fold-change at each rung beside them.', zh: '兩句話都在一月的文件裡、簽上日期，旁邊附上每一階的預期倍數變化。' } }
          ])
      });

      /* ---------------- flow ---------------- */
      out += h.sec({
        id: 'rd-flow',
        kick: { en: 'The shape of the work', zh: '工作的形狀' },
        h2: { en: 'Reproduce, then cut in half, then swap the strain', zh: '先重現、再剪成兩半、再換菌株' },
        body: h.fig({
          kind: 'custom',
          tag: { en: 'WORKFLOW', zh: '流程' },
          title: { en: 'ENDOREAD: the published cis switch is the control, the trans version is the question', zh: 'ENDOREAD：已公開的 cis 開關是對照，trans 版本才是問題' },
          sub: { en: 'Wet lab above, dry lab below. The dry lane fixes the geometry before anything is ordered, and the length series it designs is the dataset the wet lane produces. Note that step one is a reproduction — of parts that already exist in the Registry — which is the cheapest possible way to find out whether your assay works before you ask it a new question.', zh: '上為濕式、下為乾式。乾式那條線在任何東西被訂購之前先固定幾何，而它設計出的長度序列，就是濕式那條線所產出的資料集。請注意第一步是一次重現——重現 Registry 裡已經存在的元件——這是在你拿一個新問題去問它之前，最便宜的「確認你的試驗能用」的方式。' },
          caption: { en: 'Our plan, not a record of work. Nothing in this diagram has been performed.', zh: '這是我們的計畫，不是工作紀錄。本圖中沒有任何一步被執行過。' },
          svg: function (W) { return w.WF.swim(W, SWIM); }
        })
      });

      /* ---------------- tools ---------------- */
      out += h.sec({
        id: 'rd-tool',
        kick: { en: 'Logistics', zh: '後勤' },
        h2: { en: 'The strain is the hard part, and two things in our draft were wrong', zh: '菌株才是難的部分，而我們草稿裡有兩件事是錯的' },
        lede: {
          en: 'This project needs one unusual reagent and nothing else unusual. Getting it is an administrative task to start in January, not a purchase.',
          zh: '這個專案需要一樣不尋常的試劑，其餘都不特別。而取得它是一件一月就要開始的行政工作，不是一筆採購。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What', zh: '項目' }, w: '22%' },
              { t: { en: 'Why and how', zh: '為什麼、怎麼做' } },
              { t: { en: 'Cost and the trap', zh: '成本與陷阱' }, w: '30%' }
            ],
            rows: [
              [{ en: '**The RNase III-deficient strain**', zh: '**缺乏 RNase III 的菌株**' },
               { en: 'The one reagent the project cannot do without. The standard choice is an *E. coli* K-12 derivative carrying a transposon insertion in the RNase III gene, widely used for making double-stranded RNA — biosafety level 1, and a K-12 derivative, which matters because **K-12 is the strain iGEM names explicitly on its White List**.', zh: '這個專案少不了的那一樣試劑。標準選擇是一個 *E. coli* K-12 衍生株，在 RNase III 基因上帶有一個轉位子插入，被廣泛用來製造雙股 RNA——生物安全第一等級，而且是 K-12 衍生株，這一點很重要，因為**K-12 正是 iGEM 在白名單上明確點名的那個菌株**。' },
               { en: 'A stock-centre strain at about **USD 10** for academic and non-profit users, plus an annual account fee of about **USD 30** and, from March 2026, a small per-strain international processing fee. **It needs a registered laboratory code and the strains may not be redistributed outside your organisation — so a school should email the collection before ordering, not after.** Fee waivers exist for research without grant funding.', zh: '一間菌種中心對學術與非營利使用者收費約 **10 美元**，加上每年約 **30 美元**的帳戶費；自 2026 年 3 月起另有一筆小額的國際處理費。**它需要一個已登記的實驗室代碼，而菌株不得轉散佈到你所屬機構之外——所以學校應該在訂購之前就先寄信給那個中心，不是之後。**對沒有補助經費的研究有費用減免。' }],
              [{ en: '**Correction one: the antibiotic**', zh: '**更正一：抗生素**' },
               { en: 'The insertion allele that knocks out RNase III is derived from a **tetracycline-resistance** transposon, and the deletion derivatives are transposition-defective but **still carry the resistance gene**.', zh: '那個剔除 RNase III 的插入等位，來自一個**四環素抗性**轉位子，而其刪除衍生物雖然失去轉位能力，卻**仍然帶著那個抗性基因**。' },
               { en: '**The strain is tetracycline-RESISTANT, not sensitive.** Three independent sources say so, including published protocols that select on it. Design your plasmid selection around that or you will have no way to tell what grew.', zh: '**這個菌株是四環素抗性，不是敏感。**有三個獨立來源這樣說，包含用它來做篩選的已發表流程。請依此設計你的質體篩選，否則你會無法分辨長出來的是什麼。' }],
              [{ en: '**Correction two: the wrong strain**', zh: '**更正二：挑錯菌株**' },
               { en: 'A widely used commercial strain is marketed as RNase-deficient and appears throughout the riboregulator literature. It carries a mutation in **RNase E**, a different enzyme with a different gene.', zh: '一個被廣泛使用的商業菌株被標示為「RNase 缺乏」，而且在核酸調控元件的文獻中隨處可見。它帶的是 **RNase E** 的突變，那是一個不同的酵素、不同的基因。' },
               { en: '**It is not RNase III-deficient.** Which also means the famous strain effect in the toehold-switch literature is **not** evidence about RNase III at all — a useful thing to know before you cite it, and a mistake that is easy to make because both names begin the same way.', zh: '**它不是 RNase III 缺乏。**這同時意味著 toehold 開關文獻裡那個著名的菌株效應**根本不是**關於 RNase III 的證據——在你引用它之前知道這件事很有用，而這個錯誤很容易犯，因為兩個名字開頭一樣。' }],
              [{ en: '**The DNA**', zh: '**那些 DNA**' },
               { en: 'A reproduction of the published *cis* switch, then a two-strand *trans* version, then a short length ladder and the bind-but-do-not-cut variant. All short, and the Registry already holds thirty-two related parts to start from.', zh: '先重現已公開的 *cis* 開關，再做一個雙股的 *trans* 版本，然後一個短的長度階梯與那個「會結合但不切」的變異體。全部都很短，而 Registry 已經有三十二個相關元件可以當起點。' },
               { en: 'Gene fragments run around **7 cents per base pair**, so each construct is tens of dollars, and a sponsor allowance covers the whole set if you claim it early — one 2026 offer was up to **40 kb per team** and closed in September.', zh: '基因片段大約**每個鹼基對 7 美分**，所以每個構築是數十美元；而只要你早點申請，贊助商額度就能覆蓋整組——2026 年有一項提供每隊最多 **40 kb**，而它在九月就關閉了。' }],
              [{ en: '**Optional: a cell-free arm**', zh: '**選配：一條無細胞支線**' },
               { en: 'Useful if strain access fails, because a cell-free reaction removes the strain question — but note that it removes the **host enzyme** too, which is the thing being tested. Use it to characterise the duplex, not to answer the central question.', zh: '如果菌株拿不到，這會有用，因為無細胞反應把菌株問題拿掉了——但請注意它也把**宿主酵素**拿掉了，而那正是被測試的對象。用它來特性化那段雙股，不要用它來回答核心問題。' },
               { en: 'Commercial kits run about **USD 0.4 to 1.4 per microlitre**. Home-made extract is published at **one to three cents per microlitre** with one preparation giving roughly **3,000 reactions** and a 98 % cost reduction — but it takes five days and a protocol you must follow exactly.', zh: '商業套組大約**每微升 0.4 到 1.4 美元**。自製萃取液已發表為**每微升一到三美分**，一次製備約可得 **3,000 個反應**，成本降低 98%——但它需要五天，以及一份你必須精確遵循的流程。' }]
            ],
            min: 1000,
            source: { en: 'Strain genotype, antibiotic resistance and sourcing read from the stock centre\'s own record and from published methods papers; the RNase E correction from the vendor\'s own published genotype. Prices were read from public pages in November 2026 and will be wrong in your country. All recorded in `notes/2027-idea-sources.md`.', zh: '菌株基因型、抗生素抗性與取得方式讀自該菌種中心自己的紀錄與已發表的方法論文；RNase E 那個更正來自供應商自己公開的基因型。價格讀自 2026 年 11 月的公開頁面，在你的國家一定不準。全部記錄在 `notes/2027-idea-sources.md`。' }
          })
      });

      /* ---------------- schedule ---------------- */
      out += h.sec({
        id: 'rd-plan',
        kick: { en: 'Schedule', zh: '行程' },
        h2: { en: 'The two-strain comparison happens in month four, not month eight', zh: '雙菌株比較發生在第四個月，不是第八個月' },
        lede: {
          en: 'iGEM has published only the 2027 Jamboree dates — 18 to 21 October 2027. The wiki freeze has fallen 19 to 23 days earlier in each of the last four seasons and has always been a Wednesday, which puts a 2027 freeze near **29 September 2027**. That is our arithmetic, not an announcement.',
          zh: 'iGEM 只公布了 2027 年 Jamboree 的日期——2027 年 10 月 18 至 21 日。過去四個賽季，wiki 凍結日都落在它前面 19 到 23 天，而且一直都是星期三，據此推算 2027 年的凍結日在 **2027 年 9 月 29 日**附近。那是我們的算術，不是公告。'
        },
        body:
          h.fig({
            kind: 'gantt',
            tag: { en: 'SCHEDULE', zh: '行程' },
            title: { en: 'ENDOREAD across the season, in months from the start', zh: 'ENDOREAD 的整季安排，以自起點起算的月份表示' },
            sub: { en: 'Month 0 is your first team meeting; month 9 is the wiki freeze. The bar that must not slip is the strain request — everything after month three depends on a reagent that needs a registered account to obtain.', zh: '第 0 個月是你們第一次團隊會議；第 9 個月是 wiki 凍結日。絕對不能延後的是那個菌株申請——第三個月之後的一切，都依賴一樣「需要已登記帳戶才拿得到」的試劑。' },
            data: [
              { label: { en: 'Email the strain collection', zh: '寫信給菌種中心' }, start: 0, end: 0.6, tone: 'r', note: { en: 'needs a lab code', zh: '需要實驗室代碼' } },
              { label: { en: 'Fix the geometry from the literature', zh: '依文獻固定幾何' }, start: 0.2, end: 1.5, tone: 'v' },
              { label: { en: 'Pre-register predictions per rung', zh: '為每一階事先登記預測' }, start: 1.2, end: 1.6, tone: 'v', note: { en: 'dated', zh: '簽日期' } },
              { label: { en: 'Order the constructs', zh: '訂購構築' }, start: 1.5, end: 2.3, tone: 'b' },
              { label: { en: 'Reproduce the published cis switch', zh: '重現已公開的 cis 開關' }, start: 2, end: 3.2, tone: 'g', note: { en: 'proves the assay first', zh: '先證明試驗能用' } },
              { label: { en: 'Build the trans two-strand version', zh: '建造 trans 雙股版本' }, start: 3, end: 4, tone: 'b' },
              { label: { en: 'The two-strain comparison', zh: '雙菌株比較' }, start: 4, end: 5, tone: 'r', note: { en: 'the whole question', zh: '整個問題' } },
              { label: { en: 'Complementation and empty vector', zh: '互補與空載體' }, start: 4.8, end: 5.8, tone: 'a' },
              { label: { en: 'The duplex length ladder', zh: '雙股長度階梯' }, start: 5.5, end: 7, tone: 'g' },
              { label: { en: 'Bind-but-do-not-cut variant', zh: '「會結合但不切」變異體' }, start: 5.5, end: 6.5, tone: 'a' },
              { label: { en: 'Another team rebuilds two designs', zh: '另一支隊伍重建兩個設計' }, start: 5, end: 7.5, tone: 'a' },
              { label: { en: 'Registry entries and the library table', zh: 'Registry 條目與庫表' }, start: 6.5, end: 8, tone: 'v' },
              { label: { en: 'Write the results page first', zh: '先寫結果頁' }, start: 7.5, end: 8.5, tone: 'r' },
              { label: { en: 'Freeze bundle: wiki, forms, Registry', zh: '凍結包：wiki、表單、Registry' }, start: 8.5, end: 9, tone: 'r' }
            ],
            opts: { min: 0, max: 10 },
            caption: { en: 'Our plan. Month two is a reproduction on purpose: if you cannot reproduce a published cis switch with your own assay, the trans result would have been uninterpretable anyway, and you have found that out in month three instead of month eight.', zh: '這是我們的計畫。第二個月刻意是一次重現：如果你用自己的試驗重現不出一個已公開的 cis 開關，那 trans 的結果本來也無法解讀；而你在第三個月、而不是第八個月，就發現了這件事。' }
          })
      });

      /* ---------------- risks ---------------- */
      out += h.sec({
        id: 'rd-risk',
        kick: { en: 'Risks', zh: '風險' },
        h2: { en: 'Four ways this goes wrong, and what we would do about each', zh: '這件事出錯的四種方式，以及我們對每一種會怎麼做' },
        body:
          h.cards([
            { chips: [{ t: { en: 'most likely', zh: '最可能' }, k: 'r' }],
              h: { en: 'The reader does not read your duplex', zh: '那個讀取者不讀你的雙股' },
              p: { en: 'The closest published architecture tested this enzyme and found it dispensable; the nearest engineered relative found it only partly responsible. **This is the expected outcome, not the feared one**, and the design is built so that it is still a result: a two-strain comparison with complementation says something definite about a mechanism a whole class of device assumes.', zh: '最接近的那個已發表架構測了這個酵素，發現它可以不要；最接近的工程化親戚發現它只負責一部分。**這是預期中的結果，不是害怕的結果**，而這個設計被做成「即使如此仍然是一個結果」：一個帶互補的雙菌株比較，會對「一整類裝置所假設的機制」說出確定的話。' },
              foot: { en: 'Mitigation: none needed. Pre-write the sentence and schedule the comparison in month four so there is time to extend it.', zh: '緩解：不需要。事先把那句話寫好，並把比較排在第四個月，好讓你有時間延伸它。' } },
            { chips: [{ t: { en: 'confounded', zh: '被混淆' }, k: 'r' }],
              h: { en: 'The two strains differ in something else', zh: '兩個菌株在別的地方不同' },
              p: { en: 'They always do. A deficient strain and a functional strain are not isogenic, and a difference in reporter output could be growth rate, plasmid copy number or the antibiotic. Without the complementation arm your headline claim is about two strains, not about an enzyme.', zh: '它們總是會。一個缺乏株與一個功能株並非同基因型，而報告子輸出的差異可能來自生長速率、質體複製數或抗生素。沒有互補那一組，你的招牌主張講的是兩個菌株，不是一個酵素。' },
              foot: { en: 'Mitigation: the complementation plasmid and a matched empty vector, both in the first experiment. A published template exists.', zh: '緩解：互補質體與配對的空載體，兩者都放進第一個實驗。已經有一份已發表的範本。' } },
            { chips: [{ t: { en: 'design', zh: '設計' }, k: 'a' }],
              h: { en: 'Nothing moves at all, in either strain', zh: '兩個菌株裡都什麼都沒動' },
              p: { en: 'Then you cannot tell a failed design from a reader that does not read — which is why the length ladder exists. A series that is flat from 9 to 16 base pairs points at the design; a series that moves points at the reader. And reproducing the published *cis* switch in month two is what tells you the assay itself works.', zh: '那你就無法把「失敗的設計」與「不讀的讀取者」分開——而那正是長度階梯存在的理由。從 9 到 16 個鹼基對都平的序列指向設計；會動的序列指向讀取者。而第二個月重現那個已公開的 *cis* 開關，就是告訴你「試驗本身能用」的那一步。' },
              foot: { en: 'Mitigation: reproduce before you innovate, and build the ladder in the same order as the construct series.', zh: '緩解：先重現再創新，並讓階梯與構築序列用同樣的順序建造。' } },
            { chips: [{ t: { en: 'logistics', zh: '後勤' }, k: 'r' }],
              h: { en: 'The strain never arrives', zh: '那個菌株一直沒到' },
              p: { en: 'It is held by a stock centre that works through registered laboratory codes, charges an annual account fee, and forbids redistribution outside the recipient\'s organisation. A school is an unusual requester. This is a solvable problem in January and an unsolvable one in June.', zh: '它由一間透過「已登記實驗室代碼」運作的菌種中心保管，收取年度帳戶費，並禁止轉散佈到收件者所屬機構之外。一間學校是一個不尋常的申請者。這在一月是可解的問題，在六月是不可解的問題。' },
              foot: { en: 'Mitigation: email in week one, ask about fee waivers, and have a university host laboratory willing to be the registered requester.', zh: '緩解：第一週就寄信、詢問費用減免，並找一間願意擔任登記申請者的大學接待實驗室。' } }
          ]) +
          h.warn({
            en: 'The limitation we would put on our own results page: **a fold-change measured on one reporter, in one strain pair, with a sensor and a target we both supplied on plasmids, is not a demonstration that this device can sense a native transcript.** The target\'s real abundance, its structure and its competition with the ribosome are all untested, and the RADAR literature is explicit that against endogenous triggers "only a subset of sensors are functional". We would write that into the results page rather than the limitations section, and we would describe the project as what it is: **one mechanism question, answered with one strain swap.**',
            zh: '我們會放在自己結果頁上的那個限制：**在一個報告子、一組菌株配對、而感測器與標的都由我們用質體提供的情況下量到的倍數變化，不構成「這個裝置能感測一個原生轉錄本」的證明。**標的真實的豐度、它的結構，以及它與核糖體的競爭，全部沒有被測試；而 RADAR 的文獻明確指出，面對內源觸發子時「只有一部分感測器有功能」。我們會把這段寫進結果頁，而不是寫進限制一節；並且照實描述這個專案是什麼：**一個機制問題，用一次菌株置換來回答。**'
          })
      });

      /* ---------------- ships ---------------- */
      out += h.sec({
        id: 'rd-ship',
        kick: { en: 'Output', zh: '產出' },
        h2: { en: 'What survives the season, and which awards it maps onto', zh: '什麼會在賽季之後留下來，以及它對應哪些獎項' },
        body:
          h.tbl({
            cols: [
              { t: { en: 'What you would select', zh: '你會選什麼' }, w: '26%' },
              { t: { en: 'Category', zh: '類別' }, w: '20%' },
              { t: { en: 'What this project puts in front of the judges', zh: '這個專案把什麼放到評審面前' } }
            ],
            rows: [
              [{ en: '**Best New Basic Part** or **Best Part Collection**', zh: '**最佳新基礎元件**或**最佳元件集**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The first *trans*-acting RNase III-gated riboregulator, submitted with its length ladder and its bind-but-do-not-cut variant. A collection defined by a geometry question is coherent by construction — and the existing Registry parts it builds on are *cis* and temperature-gated, so the relationship to prior art is easy to document honestly.', zh: '第一個以 *trans* 作用、由 RNase III 把關的核酸調控元件，連同它的長度階梯與「會結合但不切」的變異體一起提交。一個由幾何問題定義的集合，在結構上就是連貫的——而它所建立於其上的既有 Registry 元件是 *cis*、由溫度調控的，所以與前人工作的關係很容易誠實地記錄清楚。' }],
              [{ en: '**Best Measurement**', zh: '**最佳量測**' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The two-strain comparison with plasmid complementation and a matched empty vector is a textbook genetic control, and the ballot asks whether other teams could reproduce the measurement. Here the answer includes a reproduction **you** did of somebody else\'s part, in month two, as the first thing on the results page.', zh: '帶質體互補與配對空載體的雙菌株比較，是一個教科書級的遺傳對照；而評分項會問其他隊伍能不能重現這個量測。這裡的答案包含**你自己**在第二個月對別人元件所做的一次重現，而它就擺在結果頁的第一個位置。' }],
              [{ en: '**Best Model** — but only if you frame it correctly', zh: '**最佳模型**——但只有在你把框架抓對的時候' },
               { en: 'General Bio Engineering', zh: '一般生物工程' },
               { en: 'The honest model here is **generation and crosstalk**, with a pre-registered prediction at each rung of the length ladder drawn from published numbers. Do **not** claim that predicted free energy ranks your designs — the largest measured dataset puts that at R² = 0.04, and a judge who knows the literature will ask.', zh: '這裡誠實的模型是**產生候選與交叉反應**，並在長度階梯的每一階附上取自已發表數字的事先登記預測。**不要**主張預測自由能能為你的設計排名——最大的實測資料集把那件事放在 R² = 0.04，而一個熟悉文獻的評審會問。' }],
              [{ en: '**Best Education**', zh: '**最佳教育**' },
               { en: 'Specialization', zh: '專項' },
               { en: 'A Gold medal needs at least one Specialization award. The teachable thing here is unusually good: **"the tool everyone uses to rank RNA designs does not rank them, and here is the dataset that shows it"** is a short, true, surprising lesson that most undergraduate teams have never been taught.', zh: '金牌需要至少一個專項獎。這裡可教的東西好得不尋常：**「大家用來給 RNA 設計排名的那個工具其實排不出名次，而這裡有證明它的資料集」**是一堂簡短、真實、令人意外的課，而大多數大學部隊伍從沒被教過。' }]
            ],
            min: 940,
            source: { en: 'Award categories and criteria are from iGEM\'s 2026 Special Awards and Medals pages, recorded in `notes/2027-idea-sources.md`. In 2026 a Gold medal required excellence toward three Special Awards, at least one from each of the two categories, and **high school is always judged as its own section for every award**. Which to select is our judgement, not iGEM\'s advice.', zh: '獎項類別與標準出自 iGEM 2026 年的 Special Awards 與 Medals 頁面，記錄在 `notes/2027-idea-sources.md`。2026 年金牌要求在三個特別獎上展現卓越，兩個類別各至少一個，而且**每一個獎，高中部都是獨立評比的一個組別**。選哪些是我們的判斷，不是 iGEM 的建議。' }
          }) +
          h.note({
            en: 'The project this one is derived from is on [Stanford-University](#t-stanford), where the ADAR sensor and the RADAR-Scout numbers are sourced to the team\'s own wiki. The sibling idea built on the other mechanism our wet-lab team works with is [SEEDTEST](#x-seed); the other three, and the procedure they all went through, are on [Five ideas](#x-ideas) and [the 2027 roadmap](#x-roadmap).',
            zh: '這個題目所衍生自的那個專案在 [Stanford-University](#t-stanford) 頁上，那裡的 ADAR 感測器與 RADAR-Scout 數字都標註了來自該隊自己 wiki 的出處。建立在我們濕式團隊所處理的另一個機制上的姊妹題目是 [SEEDTEST](#x-seed)；另外三個，以及它們全都跑過的那套程序，在[五個題目](#x-ideas)與[2027 選題指南](#x-roadmap)。'
          })
      });

      return out;
    }
  };
})(window);
