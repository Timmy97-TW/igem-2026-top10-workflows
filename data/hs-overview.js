/* High School overview — the comparative analysis across the ten High School teams. */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  PD.pages['hs-overview'] = {
    label: { en: 'Overview', zh: '總覽' },
    title: { en: 'Overview — High School', zh: '總覽——高中部' },
    render: function (h) {
      var out = '';
      var teams = PD.teamsHS || [];

      /* ---------------- hero ---------------- */
      out += '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(h.T({
          en: 'GEMS Research · read from ten public wikis · High School section',
          zh: 'GEMS Research · 讀自十個公開 wiki · 高中部組'
        })) + '</p>' +
        '<h1 class="big">' + h.md({
          en: 'The best writing about evidence in iGEM 2026 is ==in the High School section==, and it is there because the results are thin enough that the gap shows.',
          zh: 'iGEM 2026 關於證據寫得最好的文字==出現在高中部==，而它出現在那裡，是因為那裡的結果夠薄，所以落差藏不住。'
        }) + '</h1>' +
        '<p class="lede">' + h.md({
          en: 'Ten teams were named to the Top 10 **High School** list at the iGEM 2026 Grand Jamboree. We read all ten for one thing: how the work was actually run. We came in expecting the senior sections to teach us how to write a result and the High School section to teach us enthusiasm. It is the other way round. **Every one of these ten wikis contains a sentence that refuses to let a reader over-read a result** — "1 ppb is the lowest concentration tested, not a validated detection limit"; "a positive association, not proof of rate prediction"; "do not yet establish … the performance of the complete DNA-to-color workflow". A team with one enzyme and one assay has to decide what that assay proves. A team with a platform can hide the question inside the volume of work.',
          zh: '2026 年 iGEM Grand Jamboree 的 **高中部**前十名共有十支隊伍。我們把十個 wiki 全部讀過，只為一件事：這些工作實際上是怎麼跑的。我們進去的時候以為，高年級組別會教我們怎麼寫一個結果，而高中部會教我們熱情。結果剛好相反。**這十個 wiki 每一個都含有一句不讓讀者過度解讀結果的話**——「1 ppb 是測過的最低濃度，不是經驗證的偵測極限」；「一個正相關，不是速率預測的證明」；「尚未建立……完整 DNA 到顏色流程的表現」。一支只有一個酵素與一個試驗的隊伍，必須決定那個試驗到底證明了什麼。一支擁有平台的隊伍，可以把這個問題藏在工作量裡面。'
        }) + '</p>' +
        h.stats([
          { v: '152', l: { en: 'High School teams accepted in 2026, competing for ten places', zh: '2026 年獲接受的高中部隊伍，爭十個席位' } },
          { v: '8 of 10', l: { en: 'Of the Top 10 based in East Asia; 7 in mainland China or Hong Kong', zh: '前十名中位於東亞的隊數；其中 7 支在中國大陸或香港' } },
          { v: '7 of 10', l: { en: 'Spent an experiment on the readout before trusting it', zh: '在信任讀值之前先花了一個實驗在它身上的隊數' } },
          { v: '2 of 10', l: { en: 'Had a number produced by a laboratory outside the team', zh: '有數字是由團隊之外的實驗室產出的隊數' } },
          { v: '3', l: { en: 'Released software another team can run', zh: '釋出了別的團隊跑得起來的軟體的隊數' } },
          { v: '0', l: { en: '2nd Runner-up places published for this section', zh: '這個組別公布的第三名席次' } }
        ]) +
        '</div></div>';

      out += h.toc([
        { id: 'h-what', t: { en: 'What this is', zh: '這是什麼' } },
        { id: 'h-ten', t: { en: 'The ten', zh: '十支隊伍' } },
        { id: 'h-find', t: { en: 'Six findings', zh: '六個發現' } },
        { id: 'h-scope', t: { en: 'The refusal', zh: '那個拒絕' } },
        { id: 'h-neg', t: { en: 'Ten negative results', zh: '十個負面結果' } },
        { id: 'h-read', t: { en: 'Readout first', zh: '先做讀值' } },
        { id: 'h-out', t: { en: 'Outside the team', zh: '團隊之外' } },
        { id: 'h-wobble', t: { en: 'Pages that disagree', zh: '互相矛盾的頁面' } },
        { id: 'h-struct', t: { en: 'How this section is judged', zh: '這個組別怎麼被評' } },
        { id: 'h-take', t: { en: 'What we would take', zh: '我們會帶走什麼' } }
      ]);

      /* ---------------- what this is ---------------- */
      out += h.sec({
        id: 'h-what',
        kick: { en: 'What this is', zh: '這是什麼' },
        h2: { en: 'A workflow study of the High School section, in the same terms as the other two', zh: '一份高中部的工作流程研究，用與另外兩個組別相同的語彙' },
        body:
          h.cards([
            { chips: [{ t: { en: 'what it is', zh: '它是什麼' }, k: 'g' }],
              h: { en: 'Ten workflows, described in the same order', zh: '十條工作流程，用同樣的順序描述' },
              p: { en: 'Each team page answers the same questions: the design decision, where the wet and dry lanes touched, the pipeline, what counted as a result, what failed, and what we would copy. The Undergraduate and Overgraduate sections of this site are built the same way, and the **Across tiers** section reads all thirty against each other.', zh: '每個團隊頁都回答同樣的問題：設計決策、濕式與乾式兩條泳道在哪裡相接、流程、什麼算一個結果、什麼失敗了，以及我們會抄什麼。本站的大學部與研究生部也是用同一套方式建的，而**三層比較**那一區則把三十個放在一起對讀。' } },
            { chips: [{ t: { en: 'the conflict of interest', zh: '利益衝突' }, k: 'r' }],
              h: { en: 'One of these ten teams is us', zh: '這十隊裡有一隊就是我們' },
              p: { en: '**GEMS-Taiwan** compiled this site and placed in this Top 10. Its team page opens by saying so. We have tried to be harder on ourselves than on anyone else, which is its own kind of distortion — and it means our judgements about that one page are worth less than the others. Read the wikis, not us.', zh: '**GEMS-Taiwan** 是本站的彙編者，也在這份前十名之中。它的團隊頁一開頭就寫明了。我們試著對自己比對任何人都更嚴格——這本身也是一種偏差——而這意味著我們對那一頁的判斷，價值低於其他頁。去讀那些 wiki，不要只讀我們。' } },
            { chips: [{ t: { en: 'what it is not', zh: '它不是什麼' }, k: 'a' }],
              h: { en: 'Not our results, and not a ranking', zh: '不是我們的成果，也不是排名' },
              p: { en: 'We measured nothing. Every number belongs to the team that produced it and links to the page it came from. iGEM published the Grand Prize and one runner-up for this section and listed the remaining eight alphabetically; **no High School 2nd Runner-up appears on the official page**, and we do not infer an order where none was published.', zh: '我們沒有量測任何東西。每個數字都屬於產出它的隊伍，並連回它的來源頁。iGEM 為這個組別公布了首獎與一位 runner-up，其餘八隊依字母順序列出；**官方頁面上沒有高中部第三名**，而我們不會在沒有公布名次的地方推測名次。' } }
          ])
      });

      /* ---------------- the ten ---------------- */
      out += h.sec({
        id: 'h-ten',
        kick: { en: 'The ten', zh: '十支隊伍' },
        h2: { en: 'Top 10 High School, iGEM 2026', zh: 'iGEM 2026 高中部前十名' },
        lede: {
          en: 'The Grand Prize and the 1st Runner-up first, then the remaining eight alphabetically, exactly as the official results page lists them. Click a card to open that team\'s workflow page.',
          zh: '先列首獎與亞軍，其餘八隊依字母順序，與官方成績頁的列法完全一致。點一張卡片即可打開該隊的工作流程頁。'
        },
        body:
          '<div class="g2">' + teams.map(function (t) {
            var k = t.rank === 1 ? 'g' : (t.rank === 2 ? 'b' : 'n');
            return '<div class="card lift" data-go="hs-' + t.id + '" style="cursor:pointer">' +
              h.chips([{ t: t.award, k: k }, { t: t.village, k: 'n' }]) +
              '<h4 style="margin-top:9px">' + h.esc(t.flag + '  ' + t.name) + ' · <span style="color:var(--blue)">' + h.esc(t.project) + '</span></h4>' +
              '<p>' + h.md(t.one) + '</p>' +
              '<p class="small" style="margin-top:10px"><b>' + h.T({ en: 'Chassis', zh: '宿主' }) + ':</b> <span class="mono">' + h.esc(t.chassis) + '</span></p>' +
              '</div>';
          }).join('') + '</div>' +
          h.note({
            en: 'Awards inside this cohort. **Best Village Project**, which in the High School section is awarded to four bundled village groups rather than to each village: **Lambert-GA** (Climate Crisis / Conservation / Bioremediation), **HongKong-JSS** (Agriculture / Food & Nutrition / Fashion & Cosmetics / Art & Design), **HFI** (Infectious Diseases / Therapeutics / Diagnostics / Oncology) and **HangzhouFourteenAP** (Space / Foundational Advance / Software & AI / Biomanufacturing). **Special prizes:** Lambert-GA took Best Model, Best Wiki and Best Sustainable Development Impact; **GEMS-Taiwan** took Best Measurement, Best Hardware and Best Integrated Human Practices; **GHCIS** took Best Part Collection and Best Software; **HFI** Best Education; **HKSSC** Best New Basic Part; **GCGS** Best New Improved Part. **Eton-College-UK and HongKong-HS won no special prize**, and were nominated in three and one category respectively. Source: [competition.igem.org/results/2026](https://competition.igem.org/results/2026).',
            zh: '本組別內的獎項。**最佳村專案**——高中部是把村別併成四大組來頒，而不是每村一獎：**Lambert-GA**（氣候危機／保育／生物復育）、**HongKong-JSS**（農業／食品與營養／時尚與美妝／藝術與設計）、**HFI**（傳染病／治療／診斷／腫瘤）與 **HangzhouFourteenAP**（太空／基礎推進／軟體與 AI／生物製造）。**特別獎：**Lambert-GA 拿下最佳模型、最佳 Wiki 與最佳永續發展影響；**GEMS-Taiwan** 拿下最佳量測、最佳硬體與最佳整合人類實踐；**GHCIS** 拿下最佳元件集與最佳軟體；**HFI** 最佳教育；**HKSSC** 最佳新基礎元件；**GCGS** 最佳新改良元件。**Eton-College-UK 與 HongKong-HS 沒有獲得特別獎**，分別入圍三項與一項。資料來源：[competition.igem.org/results/2026](https://competition.igem.org/results/2026)。'
          })
      });

      /* ---------------- six findings ---------------- */
      out += h.sec({
        id: 'h-find',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'Six things the ten High School wikis say when you read them together', zh: '把高中部十個 wiki 一起讀時，它們共同說出的六件事' },
        lede: {
          en: 'These are our conclusions, drawn from the ten pages that follow. Each one names the teams it rests on, so you can disagree with it precisely.',
          zh: '這些是我們的結論，從後面那十頁得出。每一條都指名它所依據的隊伍，好讓你能精確地反對它。'
        },
        body:
          h.cards([
            { chips: [{ t: { en: '1', zh: '1' }, k: 'g' }],
              h: { en: 'The claim is sized to the assay, out loud', zh: '主張的大小被公開地校準到試驗的大小' },
              p: { en: 'The practice we expected to find only in the Overgraduate section is everywhere here: a result followed, in the same sentence, by what it is not evidence for. **HongKong-JSS, GHCIS, Eton-College-UK, Lambert-GA, HFI and GCGS** all do it, and in four of those cases the sentence limits a result the team clearly wanted to be bigger. It gets its own section below.', zh: '我們原本以為只會在研究生部看到的做法，在這裡到處都是：一個結果之後，在同一句話裡接上「它不構成什麼的證據」。**HongKong-JSS、GHCIS、Eton-College-UK、Lambert-GA、HFI 與 GCGS** 全都這麼做，而其中四個案例裡，那句話限制的是團隊明顯希望它更大的結果。下面有一整節講這件事。' } },
            { chips: [{ t: { en: '2', zh: '2' }, k: 'g' }],
              h: { en: 'The readout is built before the thing being measured', zh: '讀值在被量測的對象之前就先建好' },
              p: { en: 'Seven of the ten spent a dedicated experiment on the measurement itself before using it to judge anything: **HKSSC** built CFU standard curves and wrote down why CFU beats OD₆₀₀; **GHCIS** validated its cell-free system with a positive-control plasmid before screening a single switch; **HangzhouFourteenAP** established a DNS glucose standard curve (R² = 0.9606); **Eton-College-UK** proved its electrodes were alive on ferricyanide before blaming the chemistry; **HFI** knocked out *ldcC* so the chassis had no endogenous background to confound the measurement; **HongKong-JSS** published calibration equations with a held-out set; **GEMS-Taiwan** calibrated a self-built photometer against a commercial instrument and found where the commercial one saturates.', zh: '十隊中有七隊，在用量測去評判任何東西之前，先為量測本身花了一個專門的實驗：**HKSSC** 建立 CFU 標準曲線，並寫下為什麼 CFU 勝過 OD₆₀₀；**GHCIS** 在篩選任何一個開關之前，先用陽性對照質體驗證無細胞系統；**HangzhouFourteenAP** 建立 DNS 葡萄糖標準曲線（R² = 0.9606）；**Eton-College-UK** 先用鐵氰化物證明電極是活的，才去怪化學；**HFI** 剔除 *ldcC*，讓底盤沒有會干擾量測的內源背景；**HongKong-JSS** 公開了帶留出集的校正方程式；**GEMS-Taiwan** 把自製光度計對照商用儀器校正，並找出商用那台在哪裡飽和。' } },
            { chips: [{ t: { en: '3', zh: '3' }, k: 'b' }],
              h: { en: 'A screen with a published loser beats a result with no comparison', zh: '一次有公開「輸家」的篩選，勝過一個沒有比較的結果' },
              p: { en: '**GCGS** compared two iron-regulated promoters and published the one that barely responded, then screened four SsrA degradation tags and published that most of them destroyed induction entirely. **HangzhouFourteenAP** carried two antimicrobial peptides and published that one of them never produced a detectable band. **HongKong-JSS** built thirteen biosensor prototypes and reports that two responded. In each case the comparison is what makes the surviving choice a finding rather than a preference.', zh: '**GCGS** 比較了兩個受鐵調控的啟動子，並公開那個幾乎沒有反應的；接著篩了四種 SsrA 降解標籤，並公開其中大多數完全摧毀了誘導。**HangzhouFourteenAP** 同時做了兩個抗菌肽，並公開其中一個從未產出可偵測的條帶。**HongKong-JSS** 做了十三個生物感測器原型，並報告有兩個有反應。在每個案例裡，正是那個比較讓存活下來的選擇成為一個發現，而不只是一個偏好。' } },
            { chips: [{ t: { en: '4', zh: '4' }, k: 'v' }],
              h: { en: 'Only two teams moved a measurement outside the team', zh: '只有兩隊把量測搬到團隊之外' },
              p: { en: '**Lambert-GA** had its $80 dryer tested at the University of Alabama at Birmingham and again at Georgia Tech, and its binder affinity measured by a commercial BLI service. **Eton-College-UK** ran its bench work in host labs at the University of Greenwich and King\'s College London. The other eight measured everything themselves. We think this is the single largest untapped advantage available to a High School team — a number from a laboratory with no stake in the result does not require a judge to trust a school lab\'s pipetting.', zh: '**Lambert-GA** 把它 80 美元的乾燥器送到阿拉巴馬大學伯明罕分校測試，之後又送到喬治亞理工，而它的結合親和力是由商業 BLI 服務測得的。**Eton-College-UK** 的實驗檯工作是在格林威治大學與倫敦國王學院的接待實驗室完成的。另外八隊所有量測都自己做。我們認為這是高中部隊伍手上最大的、還沒被用掉的優勢——一個來自「與結果毫無利害關係的實驗室」的數字，不需要評審去相信一所學校實驗室的移液技術。' } },
            { chips: [{ t: { en: '5', zh: '5' }, k: 'b' }],
              h: { en: 'Three released software, and it is what the prizes followed', zh: '有三隊釋出了軟體，而獎項跟著它走' },
              p: { en: '**Lambert-GA\'s PRINCE** (an epitope-patch ranker, shipped as a web app and a CLI, validated on a homology-controlled split) and **GHCIS\'s ARGUS** (RGB → CIELAB → CIEDE2000 colour analysis for paper reactions) are both genuine releases, and GHCIS took Best Software while Lambert-GA took Best Model. **GEMS-Taiwan** ships the application that runs its rig. The pattern is not that a tool helps; it is that a tool **with the baseline it has to beat** helps — PRINCE publishes 50.8 % next to 23.3 % random, and the second number is what makes the first one mean anything.', zh: '**Lambert-GA 的 PRINCE**（一個抗原表位 patch 排序器，以網頁與 CLI 形式釋出，並在同源性受控的切分上驗證）與 **GHCIS 的 ARGUS**（把紙上反應從 RGB 轉 CIELAB、算 CIEDE2000 色差）都是真正的釋出，而 GHCIS 拿下最佳軟體、Lambert-GA 拿下最佳模型。**GEMS-Taiwan** 則釋出了驅動自己設備的應用程式。模式不是「有工具就有幫助」，而是**「帶著它必須打敗的基準」的工具**才有幫助——PRINCE 把 50.8% 印在隨機的 23.3% 旁邊，而正是第二個數字讓第一個數字有了意義。' } },
            { chips: [{ t: { en: '6', zh: '6' }, k: 'a' }],
              h: { en: 'Several wikis contradict themselves, and nobody read them end to end', zh: '有幾個 wiki 自我矛盾，而沒有人把它們從頭到尾讀過一遍' },
              p: { en: 'On three of the ten we found a statement in one section that is incompatible with a statement in another — a test described as done in the results and as "not fully completed" in the discussion, a significance claim that appears at three concentrations on one page and one on another, a human-practices page describing an experiment that appears nowhere in the results. Every team here still placed, so this is not fatal. It is simply the cheapest defect in the section to prevent: **one person, one pass, the whole results page, in the last fortnight.**', zh: '在十隊中的三隊，我們找到某一節的敘述與另一節無法相容——一項測試在結果一節被描述為已完成、在討論一節卻是「尚未完全完成」；一個顯著性主張在一頁出現於三個濃度、在另一頁只有一個；一個人類實踐頁描述了一項在結果裡完全找不到的實驗。這裡每一隊都還是有名次，所以這不致命。它只是這個組別裡最便宜就能預防的瑕疵：**一個人、一次通讀、整個結果頁、在最後兩週。**' } }
          ])
      });

      /* ---------------- the refusal ---------------- */
      out += h.sec({
        id: 'h-scope',
        kick: { en: 'The practice', zh: '那個做法' },
        h2: { en: 'Five teams refuse, in writing, to call their lowest tested value a limit', zh: '有五隊以書面拒絕把自己測過的最低值稱為極限' },
        lede: {
          en: 'This is the most copyable sentence pattern in the 2026 cohort, and it costs one clause. We think it is also the reason several of these wikis survived contact with a judge.',
          zh: '這是 2026 這一批隊伍中最容易照抄的句型，而它的成本是一個子句。我們也認為，這正是其中幾個 wiki 能在評審面前撐住的原因。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '17%' },
              { t: { en: 'What they could have claimed', zh: '他們本來可以主張的' }, w: '24%' },
              { t: { en: 'What they wrote instead', zh: '他們實際寫下的' } }
            ],
            rows: [
              [{ en: '**HongKong-JSS**', zh: '**HongKong-JSS**' },
               { en: 'Our biosensor detects mercury at 1 ppb', zh: '我們的生物感測器能在 1 ppb 偵測到汞' },
               { en: '"**1 ppb is the lowest concentration tested, not a validated detection limit.**" The dose–response across five matched runs is published separately, so the measured claim and the unmeasured one are never in the same breath.', zh: '「**1 ppb 是測過的最低濃度，不是經驗證的偵測極限。**」五組配對實驗的劑量反應另行公開，所以「量到的主張」與「沒量到的主張」從來不會出現在同一口氣裡。' }],
              [{ en: '**GHCIS**', zh: '**GHCIS**' },
               { en: 'Our paper test detects three resistance genes in water', zh: '我們的紙上測試能在水中偵測三個抗藥性基因' },
               { en: 'The results "**do not yet establish a validated detection limit or the performance of the complete DNA-to-color workflow.**" They also write "nominal 20 µL reaction" and "reported composition" rather than asserting exact volumes.', zh: '這些結果「**尚未建立經驗證的偵測極限，也尚未建立完整 DNA 到顏色流程的表現。**」他們也寫「名目上的 20 µL 反應」與「所報告的組成」，而不是斷言精確的體積。' }],
              [{ en: '**Eton-College-UK**', zh: '**Eton-College-UK**' },
               { en: 'Our predictor predicts how fast MMP-9 cuts a peptide', zh: '我們的預測器能預測 MMP-9 切一條肽的速度' },
               { en: 'Scores rise with measured rates at ρ = 0.70, "**but on only 11 peptides: a positive association, not proof of rate prediction.**" And on their voltammogram: peak positions agree "**but partly by construction and from a single uncontrolled run**".', zh: '分數隨實測速率上升，ρ = 0.70，「**但只有 11 條肽：一個正相關，不是速率預測的證明。**」而關於他們的伏安圖：峰位置相符，「**但一部分是建構出來的，而且來自單一次未設對照的實驗**」。' }],
              [{ en: '**HFI**', zh: '**HFI**' },
               { en: 'Our two-bacteria system degrades lysine', zh: '我們的雙菌系統能降解離胺酸' },
               { en: 'Supernatant lysine falls, but intermediates were never quantified, so they can confirm only the fall "**rather than provide direct evidence for complete multi-step degradation flow**" — and the coupling benefit that the whole design rests on is reported as **not significant** at 24 h.', zh: '上清液中的離胺酸下降了，但中間產物從未定量，所以他們只能確認那個下降，「**而非提供完整多步降解通量的直接證據**」——而整個設計所倚賴的偶合效益，在 24 小時被報告為**不顯著**。' }],
              [{ en: '**GCGS**', zh: '**GCGS**' },
               { en: 'Our enzyme degrades Pseudomonas biofilm', zh: '我們的酵素能降解假單胞菌生物膜' },
               { en: 'Activity was measured only on purified sodium alginate in a cell-free assay, because school safety rules prevented work with the live pathogen — and they quote an expert that **substrate-level data cannot predict real biofilm degradation**.', zh: '活性只在無細胞試驗中、對純化的海藻酸鈉測過，因為學校的安全規定不允許操作活體病原——而他們引用一位專家的話：**底物層級的數據無法預測真實生物膜的降解**。' }],
              [{ en: '**Lambert-GA**', zh: '**Lambert-GA**' },
               { en: 'Our minibinder binds DWV and protects bees', zh: '我們的 minibinder 能結合 DWV 並保護蜜蜂' },
               { en: 'The BLI validation "**distinguishes binding to the tested VP3 construct from antiviral protection in bees, which was not established by this assay.**" Separately, on the RNAi gel: "**The gel alone does not establish sequence identity, complete annealing, or gene-silencing activity.**"', zh: 'BLI 驗證「**把「結合到所測試的 VP3 構築」與「在蜜蜂體內的抗病毒保護」區分開來，而後者並未由本試驗確立。**」另外，關於 RNAi 的膠：「**單憑這張膠並不能確立序列同一性、完全退火，或基因沉默活性。**」' }]
            ],
            min: 940,
            source: { en: 'Every sentence is the team\'s own, read from their 2026 wiki and sourced on that team\'s page here. The selection and the left-hand column are ours.', zh: '每一句都是該隊自己的話，讀自他們 2026 年的 wiki，並在本站該隊頁面標註來源。挑選與左欄是我們寫的。' }
          }) +
          h.take({ en: 'Why we are giving this a whole section', zh: '為什麼我們給這件事一整節' }, {
            en: 'A limitations section at the end of a page is read by a judge and nobody else. A clause inside the claim is read by **everyone who reads the claim**, including the person who cites it next year. Three of the six teams above limit a result that was already good enough to stand — which is the hardest version of the practice, because nobody was going to catch them. **The section\'s Grand Prize went to the team that does it most ruthlessly.**',
            zh: '放在頁面最後的限制一節，只有評審會讀，其他人不會。而寫在主張裡的那個子句，**每個讀到那個主張的人都會讀到**，包括明年引用它的那個人。上面六隊中有三隊限制的，是本來就已經站得住的結果——這是這個做法最難的版本，因為根本沒有人會抓到他們。**這個組別的首獎，給了做這件事最不留情的那支隊伍。**'
          })
      });

      /* ---------------- negative results ---------------- */
      out += h.sec({
        id: 'h-neg',
        kick: { en: 'Failure', zh: '失敗' },
        h2: { en: 'The named negative result on each of the ten wikis', zh: '十個 wiki 上各自具名的那個負面結果' },
        lede: {
          en: 'One row per team. In all ten cases the failure is published with a cause or a consequence attached, which is what makes it usable by somebody else.',
          zh: '每隊一列。十隊全部都把失敗連著原因或後果一起公開——而這正是讓它能被別人使用的原因。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'What did not work', zh: '什麼沒成功' } },
              { t: { en: 'What they did about it', zh: '他們為此做了什麼' }, w: '30%' }
            ],
            rows: [
              [{ en: 'Lambert-GA', zh: 'Lambert-GA' },
               { en: 'Round 1 of minibinder design: **15 candidates, no confirmed binder**, "despite promising computational predictions". Twelve Sf9 transfection conditions came back inconclusive with two named causes, so siRNA knockdown could not be evaluated at all.', zh: 'minibinder 設計第一輪：**15 個候選、沒有確認到結合子**，「儘管計算預測看起來很有希望」。十二種 Sf9 轉染條件回來都沒有定論，並指名兩個原因，所以 siRNA 的沉默效果完全無法評估。' },
               { en: 'Built **PRINCE** to re-choose the epitope, moved to more accessible hotspots, and got one confirmed binder from 20 new designs.', zh: '做出 **PRINCE** 來重新選擇抗原表位，改瞄準更可及的熱點，並從 20 個新設計中得到一個確認的結合子。' }],
              [{ en: 'HongKong-JSS', zh: 'HongKong-JSS' },
               { en: 'An RNA-switch detection route was abandoned; eleven of thirteen biosensor prototypes did not respond.', zh: '一條 RNA 開關的偵測路線被放棄；十三個生物感測器原型中有十一個沒有反應。' },
               { en: 'Published **the untested assumption** behind the abandoned route, rather than simply dropping it.', zh: '公開了那條被放棄路線背後**那個未經測試的假設**，而不是單純把它刪掉。' }],
              [{ en: 'Eton-College-UK', zh: 'Eton-College-UK' },
               { en: 'The first self-assembled monolayer failed; **every MMP-targeted peptide candidate scored a specificity margin ≤ 0**; a second reporter plasmid never worked, with three causes named.', zh: '第一次自組裝單層失敗；**每一個瞄準 MMP 的肽候選，專一性邊際都 ≤ 0**；第二個報告質體始終不work，並指名三個原因。' },
               { en: 'Proved the electrodes were alive on ferricyanide first, diagnosed evaporation, and **re-pitched the clinical claim at protease-class level** rather than at MMP-9.', zh: '先用鐵氰化物證明電極是活的，診斷出是蒸發問題，並把臨床主張**改成蛋白酶類別層級**，而不是 MMP-9 層級。' }],
              [{ en: 'GCGS', zh: 'GCGS' },
               { en: 'P_fepA gave a negligible reporter rise even under strong iron chelation; **most of the four SsrA-tagged RhlR variants lost C4-HSL induction completely.**', zh: 'P_fepA 即使在強螯合鐵的條件下，報告訊號也幾乎沒有上升；**四種帶 SsrA 標籤的 RhlR 變異體中，大多數完全失去了 C4-HSL 的誘導。**' },
               { en: 'Diagnosed the cause as a promoter too weak to survive the degradation tag, and fixed it with **another team\'s part** — an enhanced promoter from TokyoTech 2016.', zh: '把原因診斷為「啟動子太弱，撐不過降解標籤」，並用**別的團隊的元件**修好它——來自 TokyoTech 2016 的強化啟動子。' }],
              [{ en: 'GEMS-Taiwan', zh: 'GEMS-Taiwan' },
               { en: 'The original design — bacteria with DesK–DesR temperature sensing released into soil — was abandoned on expert advice, on containment and on sensing precision.', zh: '最初的設計——把帶 DesK–DesR 溫度感測的細菌釋放到土壤——在專家建議下，因圍阻與感測精度而被放棄。' },
               { en: 'Moved the sensing **out of the cell** into electronics and a forecast, and built a containment reactor. The project is the second design.', zh: '把感測**搬出細胞**，交給電子元件與預報，並建造一個圍阻反應器。這個專案就是第二版設計。' }],
              [{ en: 'GHCIS', zh: 'GHCIS' },
               { en: 'The first round of **nine toehold switches gave no usable separation** with or without trigger RNA; one design rose but rose identically in both conditions.', zh: '第一輪**九個 toehold 開關在有無觸發 RNA 下都分不出可用的差別**；其中一個設計訊號上升，但兩種條件下上升得一模一樣。' },
               { en: 'Re-examined the predicted secondary structure, stated that the structural explanation "was not directly established by these fluorescence measurements", and redesigned.', zh: '重新檢視預測的二級結構，寫明那個結構性解釋「並未由這些螢光量測直接確立」，然後重新設計。' }],
              [{ en: 'HangzhouFourteenAP', zh: 'HangzhouFourteenAP' },
               { en: 'One of the two antimicrobial peptides, the 18aa, gave **no detectable induced band** under the conditions that worked for the 21aa, and no inhibition zone.', zh: '兩個抗菌肽中的 18aa，在對 21aa 有效的條件下**測不到任何誘導後的條帶**，也沒有抑制圈。' },
               { en: 'Published three candidate explanations — poor expression, rapid degradation, host toxicity — and carried the 21aa forward alone.', zh: '公開三種可能解釋——表達不佳、快速降解、對宿主有毒——並只讓 21aa 往下走。' }],
              [{ en: 'HFI', zh: 'HFI' },
               { en: 'The central idea. SpyTag–SpyCatcher coupling improved lysine clearance only moderately, **reported as not significant at 24 h**, and a large fraction of cells stayed free in every co-culture.', zh: '核心想法。SpyTag–SpyCatcher 偶合對離胺酸清除只有中等的改善，**在 24 小時被報告為不顯著**，而每一組共培養中都有很大一部分細胞仍然游離。' },
               { en: 'Named four causes for the incomplete aggregation, and noted that their **NetLogo simulation had predicted exactly those free single cells**.', zh: '為「群聚不完全」指名四個原因，並指出他們的 **NetLogo 模擬早就預測到那些游離單細胞**。' }],
              [{ en: 'HKSSC', zh: 'HKSSC' },
               { en: 'The second engineering cycle came in **lower** than the first on paraben tolerance, and the HPLC meant to show paraben disappearing produced no paraben peak at any time point in cycle 1.', zh: '第二個工程循環在對羥基苯甲酸酯耐受性上比第一個**更低**；而原本要證明對羥基苯甲酸酯消失的 HPLC，在第一個循環的任何時間點都沒有產出該化合物的峰。' },
               { en: 'Published both. No degradation rate and no faster digestion is claimed anywhere as a result.', zh: '兩者都公開了。因此他們在任何地方都沒有主張降解速率，也沒有主張消化變快。' }],
              [{ en: 'HongKong-HS', zh: 'HongKong-HS' },
               { en: 'The toehold recognition half did not respond: the best switch gave **1.51× and not significant**, one gave 0.92×, and the visible mCherry reporter was never obtained — the notebook records seven dated failures.', zh: 'Toehold 辨識那一半沒有反應：最好的開關只有 **1.51× 且不顯著**，其中一個是 0.92×，而可見的 mCherry 報告子始終沒有做出來——實驗記錄裡有七次標了日期的失敗。' },
               { en: 'Published the engineering page as "still in progress" with the dated failures, and kept the amplification half, which does have evidence, separate.', zh: '把工程頁公開為「仍在進行中」，連同那些標了日期的失敗，並把確實有證據的「放大」那一半分開陳述。' }]
            ],
            min: 1000,
            source: { en: 'Read from each team\'s own 2026 wiki; each row is sourced in detail on that team\'s page here. The grouping is ours.', zh: '讀自各隊自己 2026 年的 wiki；每一列在本站該隊頁面都有詳細出處。分組是我們做的。' }
          }) +
          h.note({
            en: 'The reason this table is the most useful page in the section: in six of these ten rows, **the failure is what produced the project**. PRINCE exists because round 1 failed. GCGS\'s improved part exists because four degradation tags destroyed induction. GEMS-Taiwan\'s whole architecture exists because the first design could not be contained. A wiki that hides its failures hides its own engineering.',
            zh: '這張表之所以是這一區最有用的一頁：在這十列中有六列，**那個失敗正是專案的來源**。PRINCE 之所以存在，是因為第一輪失敗了。GCGS 的改良元件之所以存在，是因為四種降解標籤摧毀了誘導。GEMS-Taiwan 的整個架構之所以存在，是因為第一版設計無法被圍阻。一個藏起自己失敗的 wiki，藏起的是自己的工程。'
          })
      });

      /* ---------------- readout first ---------------- */
      out += h.sec({
        id: 'h-read',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'The order that separates this cohort: measurement first, material second', zh: '把這一批隊伍分開的那個順序：量測在前、材料在後' },
        lede: {
          en: 'Seven of the ten built or validated the readout before they used it to judge anything. This is the one thing on this page that costs nothing but discipline.',
          zh: '十隊中有七隊，在用讀值去評判任何東西之前，先把它建好或驗證過。這是本頁上唯一一件除了紀律之外不花任何成本的事。'
        },
        body:
          h.flow({
            title: { en: 'Two orders of operations, and what each one can conclude', zh: '兩種操作順序，以及各自能得出什麼結論' },
            sub: { en: 'The upper path is what seven of these ten did. The lower one is the common failure, and it is only visible in October.', zh: '上面那條是這十隊中七隊做的事。下面那條是常見的失敗，而它只在十月才看得見。' },
            stages: [
              { label: { en: 'Build the readout', zh: '先建讀值' }, sub: { en: 'Standard curve, range, control', zh: '標準曲線、範圍、對照' }, tone: 'g',
                items: [{ en: 'HKSSC: CFU curves first.', zh: 'HKSSC：先做 CFU 曲線。' }] },
              { label: { en: 'Then measure', zh: '然後量測' }, sub: { en: 'The comparison it all rests on', zh: '一切所倚賴的那個比較' }, tone: 'b',
                items: [{ en: 'A null now means biology.', zh: '此時的零結果代表生物學。' }] },
              { label: { en: 'Conclude', zh: '得出結論' }, sub: { en: 'Either direction is publishable', zh: '兩個方向都可以公開' }, tone: 'v',
                items: [{ en: 'Specificity becomes a claim.', zh: '專一性成為一個主張。' }] },
              { label: { en: 'Or measure first', zh: '或者先量測' }, sub: { en: 'The common failure', zh: '常見的失敗' }, tone: 'a',
                items: [{ en: 'A null now has two causes.', zh: '此時的零結果有兩個成因。' }] }
            ],
            caption: { en: 'Drawn by us. The upper path is HKSSC, GHCIS, HangzhouFourteenAP, Eton-College-UK, HFI, HongKong-JSS and GEMS-Taiwan; the lower one is what the other three risked. HangzhouFourteenAP could write "strictly specific for α-1,3-glucan" only because the swapped-substrate and heat-inactivated arms ran in the same batch.', zh: '由我們繪製。上面那條路是 HKSSC、GHCIS、HangzhouFourteenAP、Eton-College-UK、HFI、HongKong-JSS 與 GEMS-Taiwan；下面那條是另外三隊所承受的風險。HangzhouFourteenAP 之所以能寫下「嚴格專一於 α-1,3-葡聚糖」，只因為換底物組與熱去活組是在同一批次跑的。' }
          }) +
          h.p({
            en: 'The clearest statement of it in the whole section is HKSSC\'s, and it is worth quoting because they wrote it down before they needed it: **CFU standard curves are required for proper normalisation**, and without CFU calibration **"conclusions may be misleading or incorrect"**. That is a team deciding, in advance, that a result it cannot normalise is a result it will not report.',
            zh: '整個組別裡把這件事說得最清楚的是 HKSSC，而值得引述的原因是：他們在需要它之前就先寫下來了——**CFU 標準曲線是正確標準化的必要條件**，而少了 CFU 校正，**「結論可能具誤導性或根本不正確」**。這是一支隊伍事先決定：一個自己無法標準化的結果，就是一個自己不會報告的結果。'
          })
      });

      /* ---------------- outside the team ---------------- */
      out += h.sec({
        id: 'h-out',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'The cheapest credibility in this section, used by two teams out of ten', zh: '這個組別裡最便宜的可信度，十隊中只有兩隊用了' },
        body:
          h.kv([
            [{ en: 'Lambert-GA · external device validation', zh: 'Lambert-GA · 外部裝置驗證' },
             { en: 'The $80 Vapor-X dryer was tested at the **University of Alabama at Birmingham**, which recovered **38 of 43 measured compounds (88.4 %) within 5 % of undried controls**, and then again at **Georgia Tech**, where GFP fluorescence after drying was comparable to controls. The five compounds outside tolerance are named. **This is the strongest single piece of evidence on any 2026 High School wiki**, and the reason is structural: the lab that produced it could have returned a number Lambert did not want.', zh: '那台 80 美元的 Vapor-X 乾燥器在**阿拉巴馬大學伯明罕分校**受測，對方在 43 個量測的化合物中有 **38 個（88.4%）回收到與未乾燥對照相差 5% 以內**，之後又在**喬治亞理工**測了一次，乾燥後的 GFP 螢光與對照相當。超出容許範圍的那五個化合物被指名了。**這是 2026 年任何高中部 wiki 上最強的單一證據**，而原因是結構性的：產出它的那個實驗室，本來有可能回給 Lambert 一個他們不想要的數字。' }],
            [{ en: 'Lambert-GA · commercial assay', zh: 'Lambert-GA · 商業試驗' },
             { en: 'Binder affinity by **Adaptyv Bio BLI: 603.6 nM combined across two replicates, 95 % CI 497.1–733.3 nM**. Note the difference from the row above: a service you pay to run your sample is an instrument you rented, not an independent check. It is still worth far more than an in-house gel, because the method and the confidence interval are the provider\'s.', zh: '結合親和力由 **Adaptyv Bio 的 BLI** 測得：**兩次重複合併後 603.6 nM，95% 信賴區間 497.1–733.3 nM**。注意它與上一列的差別：你付錢請人跑你的樣本，那是你租來的儀器，不是獨立檢驗。但它仍然遠比一張自家的膠值錢，因為方法與信賴區間都是服務商的。' }],
            [{ en: 'Eton-College-UK · host laboratories', zh: 'Eton-College-UK · 接待實驗室' },
             { en: 'Bench work hosted at the **University of Greenwich** and **King\'s College London**, with the notebook kept per site. This buys instruments and supervision rather than independence, and it is the most reproducible of the three routes — a school with a nearby university can ask for it.', zh: '實驗檯工作在**格林威治大學**與**倫敦國王學院**進行，實驗記錄依場地分別保存。這換到的是儀器與督導，而不是獨立性；但它是三條路線中最可複製的一條——任何附近有大學的學校都問得到。' }],
            [{ en: 'The other eight', zh: '另外八隊' },
             { en: 'Measured everything in-house. Several of them consulted experts extensively — GCGS, HFI and GEMS-Taiwan all document expert interviews that changed the design — but **advice changes a design, and only a measurement changes the evidence.** Our recommendation for 2027 is in the roadmap: budget one external measurement the way you budget reagents, and send it early enough that a bad answer is still actionable.', zh: '所有量測都自己做。其中有幾隊大量諮詢了專家——GCGS、HFI 與 GEMS-Taiwan 都記錄了改變設計的專家訪談——但**意見改變的是設計，只有量測才改變證據。**我們對 2027 年的建議寫在選題指南裡：把一次外部量測像試劑一樣列入預算，並且送得夠早，讓一個壞答案仍然來得及處理。' }]
          ])
      });

      /* ---------------- pages that disagree ---------------- */
      out += h.sec({
        id: 'h-wobble',
        kick: { en: 'Findings', zh: '發現' },
        h2: { en: 'Three wikis where two sections cannot both be true', zh: '三個 wiki 上，有兩節不可能同時為真' },
        lede: {
          en: 'Reported because it is preventable and because every one of these teams still placed. A wiki written section by section by different people, and never read end to end by one of them, drifts.',
          zh: '之所以報告，是因為它可以預防，也因為這些隊伍每一支都還是有名次。一個由不同的人分節寫成、而從來沒有其中任何一人從頭到尾讀過一遍的 wiki，會漂移。'
        },
        body:
          h.tbl({
            cols: [
              { t: { en: 'Team', zh: '隊伍' }, w: '16%' },
              { t: { en: 'One section says', zh: '某一節說' } },
              { t: { en: 'Another says', zh: '另一節說' } }
            ],
            rows: [
              [{ en: 'GCGS', zh: 'GCGS' },
               { en: 'Results §4 describes a therapeutic-effect evaluation in artificial lung fluid, with supernatant SDS-PAGE showing time-dependent extracellular alginate lyase and rising DNS activity.', zh: '結果第 4 節描述了一項在人工肺液中的治療效果評估，上清液 SDS-PAGE 顯示細胞外海藻酸裂解酶隨時間累積、DNS 活性上升。' },
               { en: 'The Discussion says that same test "**has not been fully completed**" and that they "**lack direct evidence for circuit-triggered protein release in CF-mimicking medium**". A reader cannot tell which is current; the safe reading is the cautious one.', zh: '討論一節卻說同一項測試「**尚未完全完成**」，而且他們「**缺乏線路觸發蛋白釋放於類 CF 培養基中的直接證據**」。讀者無法判斷哪一個是現況；安全的讀法是較保守的那一個。' }],
              [{ en: 'HongKong-HS', zh: 'HongKong-HS' },
               { en: 'The engineering timeline claims ThT significance for one miRNA at three concentrations; the human-practices page describes a move "from colourimetric readout toward fluorescence".', zh: '工程時間軸聲稱某個 miRNA 在三個濃度都有 ThT 顯著性；人類實踐頁描述了一次「從顯色讀值轉向螢光」的轉變。' },
               { en: 'The results page reports significance at **one** concentration; every other page, including an interview on that same human-practices page, describes the move as fluorescence **towards** colour. The street-interview count is "n~200" in prose and n = 137 in their own table.', zh: '結果頁報告的是**一個**濃度有顯著性；而其他每一頁，包括那同一個人類實踐頁上的訪談，描述的轉變方向都是螢光**走向**顏色。街訪人數在敘述裡是「n~200」，在他們自己的表裡是 n = 137。' }],
              [{ en: 'HKSSC', zh: 'HKSSC' },
               { en: 'The Human Practices page says they tested their microbes under different pH conditions.', zh: '人類實踐頁說他們在不同 pH 條件下測試了自己的微生物。' },
               { en: '**No pH series appears on the Results, Engineering or Experiments pages.** The claim has no data behind it anywhere on the wiki we could find.', zh: '**結果、工程與實驗頁上都沒有任何 pH 系列實驗。**在我們找得到的範圍內，這個主張在整個 wiki 上都沒有數據支撐。' }]
            ],
            min: 940,
            source: { en: 'Read by us from each team\'s own 2026 wiki; the comparison is ours. We are reporting two of their own sentences side by side, not alleging anything about either. All three teams placed in the Top 10, and two of the three won special prizes.', zh: '由我們讀自各隊自己 2026 年的 wiki；比較是我們做的。我們只是把他們自己的兩句話並排放，並未對其中任何一句提出指控。這三隊都進入前十名，其中兩隊還拿下特別獎。' }
          }) +
          h.take({ en: 'The fix, and what it costs', zh: '解法，以及它的成本' }, {
            en: 'One person, one pass, the whole results page, in the last fortnight — then the same person reads human practices and engineering against it. Not section by section, which is how the drift happens. This is the cheapest defect to prevent in the entire section, and preventing it also catches the thing judges actually punish: **a claim on one page that the results page cannot support.**',
            zh: '一個人、一次通讀、整個結果頁、在最後兩週——然後同一個人拿人類實踐頁與工程頁去對照它。不要分節讀，漂移就是那樣發生的。這是整個組別裡最便宜就能預防的瑕疵，而預防它也會順便抓到評審真正會扣分的東西：**某一頁上的一個主張，是結果頁撐不起來的。**'
          })
      });

      /* ---------------- how this section is judged ---------------- */
      out += h.sec({
        id: 'h-struct',
        kick: { en: 'Structure', zh: '結構' },
        h2: { en: 'Two things about the High School section that nobody tells you', zh: '關於高中部，沒有人會告訴你的兩件事' },
        body:
          h.cards([
            { chips: [{ t: { en: 'villages are bundled', zh: '村別是併組的' }, k: 'b' }],
              h: { en: 'You compete for a village award against adjacent villages, not your own', zh: '你爭村獎的對手是鄰近村別，不是你自己的村別' },
              p: { en: 'High School village awards are grouped four ways, so the field for a village award is the whole group. In 2026 the groups were wildly uneven: **Agriculture / Food & Nutrition / Fashion & Cosmetics / Art & Design held 48 teams**, while **Climate Crisis / Conservation / Bioremediation held 28**. Two of the four 2026 village awards went to teams in the smaller groups. Choosing a village in this section is partly choosing a group size — and nothing on the registration page says so.', zh: '高中部的村獎分四組發放，所以爭村獎的賽場是整個組。2026 年各組大小非常不平均：**農業／食品與營養／時尚與美妝／藝術與設計那組有 48 支隊伍**，而**氣候危機／保育／生物復育那組只有 28 支**。2026 年四個村獎中有兩個落在較小的組。在這個組別選村別，有一部分其實是在選組的大小——而報名頁上沒有任何地方提到這件事。' } },
            { chips: [{ t: { en: 'the villages do not behave alike', zh: '各村別的表現不一樣' }, k: 'v' }],
              h: { en: 'Diagnostics works here and nowhere else; Bioremediation is the reverse', zh: 'Diagnostics 在這裡行得通、在別處都不行；Bioremediation 剛好相反' },
              p: { en: '**Three of these ten teams are registered in Diagnostics** — Eton-College-UK, GCGS and HongKong-HS — while across 22 Undergraduate and Overgraduate Diagnostics teams in 2026, not one reached a Top 10. **Bioremediation was the second-largest High School village with 21 teams and placed nobody**, while the same village produced two Top 10 teams in each of the other sections. Our reading: a diagnostic is the one shape where a school lab can reach a real readout in one season, and degrading a pollutant is the shape where the measurement costs more than a school has. The full tables are on the **Across tiers** page.', zh: '**這十隊中有三隊登記在 Diagnostics**——Eton-College-UK、GCGS 與 HongKong-HS——而 2026 年大學部與研究生部共 22 支 Diagnostics 隊伍裡，沒有一隊進入前十名。**Bioremediation 是高中部第二大的村別、有 21 支隊伍，卻零席次**，而同一個村別在另外兩個組別各產出兩支前十名。我們的解讀：診斷是唯一一種能讓學校實驗室在一季內拿到真實讀值的形狀；而降解污染物則是「量測費用超過學校能力」的那種形狀。完整表格在**三層比較**那一頁。' } }
          ]) +
          h.note({
            en: 'Where this section\'s ten teams are based: **four in mainland China** (GCGS, GHCIS, HangzhouFourteenAP, HFI), **three in Hong Kong** (HKSSC, HongKong-HS, HongKong-JSS), **one in Taiwan** (GEMS-Taiwan), **one in the United States** (Lambert-GA) and **one in the United Kingdom** (Eton-College-UK). Hong Kong fielded ten High School teams in 2026 and placed three of them. Counted by us from the iGEM teams API; the conversion rates are discussed, with their caveats, on the **Across tiers** page.',
            zh: '這十隊的所在地：**四隊在中國大陸**（GCGS、GHCIS、HangzhouFourteenAP、HFI）、**三隊在香港**（HKSSC、HongKong-HS、HongKong-JSS）、**一隊在台灣**（GEMS-Taiwan）、**一隊在美國**（Lambert-GA）、**一隊在英國**（Eton-College-UK）。香港 2026 年共報名十支高中部隊伍，其中三支進入前十名。以上由我們自 iGEM teams API 統計；轉換率及其保留條件，討論於**三層比較**那一頁。'
          })
      });

      /* ---------------- what we would take ---------------- */
      out += h.sec({
        id: 'h-take',
        kick: { en: 'Ours', zh: '我們的看法' },
        h2: { en: 'The six practices we would take into next season', zh: '我們會帶進下一季的六個做法' },
        body:
          h.ul([
            { en: '**Build the readout before the material.** HKSSC\'s CFU standard curves, GHCIS\'s cell-free positive control, HangzhouFourteenAP\'s DNS curve. A negative result only means something about the biology if the assay was already known to work.', zh: '**在材料之前先建好讀值。**HKSSC 的 CFU 標準曲線、GHCIS 的無細胞陽性對照、HangzhouFourteenAP 的 DNS 曲線。只有在試驗已知可用的情況下，一個負面結果才真的代表生物學上的某件事。' },
            { en: '**Run the control that can make you wrong, in the same batch.** HangzhouFourteenAP ran PBS, heat-inactivated enzyme **and** the swapped substrate. The third arm is what turns an impression into a specificity claim.', zh: '**在同一批次跑那個可能讓你是錯的對照。**HangzhouFourteenAP 同時跑了 PBS、熱去活酵素**以及**換掉的底物。正是第三組把一個印象變成了專一性主張。' },
            { en: '**Put the random baseline next to every ranking.** Lambert-GA\'s 50.8 % is only a result because 23.3 % is printed beside it, and the 45.8 % against 23.8 % on the harder no-homolog subset is the number that actually persuades.', zh: '**在每一個排序旁邊放上隨機基準。**Lambert-GA 的 50.8% 之所以是個結果，只因為 23.3% 就印在旁邊；而在較難的無同源子集上 45.8% 對 23.8%，才是真正有說服力的那個數字。' },
            { en: '**Publish the screen that produced a loser.** GCGS\'s two promoters and four degradation tags; HongKong-JSS\'s thirteen prototypes of which two responded. A choice with no published alternative is a preference, not a finding.', zh: '**公開那個產出了「輸家」的篩選。**GCGS 的兩個啟動子與四種降解標籤；HongKong-JSS 的十三個原型中有兩個有反應。一個沒有公開替代選項的選擇，是偏好，不是發現。' },
            { en: '**Get one number from a laboratory that could disagree with you.** Lambert-GA\'s dryer at UAB and Georgia Tech. Two of ten did this, which means it is both rare and available.', zh: '**從一個有能力否決你的實驗室取得一個數字。**Lambert-GA 的乾燥器在 UAB 與喬治亞理工。十隊中有兩隊做到了，意思是它既罕見、也拿得到。' },
            { en: '**Write the limit inside the claim.** "1 ppb is the lowest concentration tested, not a validated detection limit." Then hand the results page to somebody who was not on the team and ask which claims they think you proved; every answer that is too generous is a sentence to rewrite.', zh: '**把界線寫進主張裡面。**「1 ppb 是測過的最低濃度，不是經驗證的偵測極限。」然後把結果頁交給一個不在團隊裡的人，問他們覺得你證明了哪些主張；每一個太寬厚的答案，都是一句該重寫的話。' }
          ]) +
          h.take({ en: 'And the one we are least comfortable with', zh: '以及我們最不自在的那一個' }, {
            en: 'All six of these make a project **legible to a jury**, and that is not the same as making it good. The practices reward work that fits inside nine months with a school budget — which is a constraint on the problems worth attempting, not a feature of them. If you have a reason to spend a season on something that will not finish, that is a legitimate choice and no list of practices should talk you out of it. The honest version of this page is: here is how the ten teams who finished made their evidence checkable. What to spend the evidence on is still yours.',
            zh: '這六件事都讓一個專案**在評審眼中變得可讀**，而那和讓它變好不是同一件事。這些做法獎勵的是「能裝進九個月與學校預算」的工作——而那是對「值得嘗試的問題」的一種限制，不是那些問題的特質。如果你有理由把一季花在一件不會完成的事情上，那是一個正當的選擇，不該有任何做法清單把你勸退。這一頁誠實的版本是：以下是那十支完成了的隊伍，怎麼讓自己的證據變得可被檢查。至於要把證據花在什麼上面，仍然是你的事。'
          })
      });

      return out;
    }
  };
})(window);
