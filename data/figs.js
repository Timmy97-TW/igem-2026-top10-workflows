/* ============================================================
   figs.js — the overview figures each team drew themselves.

   Every image in assets/wiki/ was downloaded from the team's own
   2026 wiki on 22 November 2026 and is stored here unmodified, so
   the page does not depend on their CDN staying up. iGEM team wiki
   content is published under CC BY 4.0 (nine of the ten wikis say
   so on the page itself; see the note on the Overview page for the
   tenth). The credit line under every figure names the team and
   links to the page it came from.

   The `title`, `sub` and `caption` on each entry are OURS — they are
   a reading of the figure, not the team's own caption. That is the
   point of the section: what a team chose to draw, and what they
   chose not to draw, is evidence about how they worked.
   ============================================================ */
(function (w) {
  var PD = w.PD = w.PD || {};
  PD.figs = {};

  var WIKI = 'https://2026.igem.wiki/';

  /* ---------------------------------------------------------- */
  PD.figs.stanford = {
    lede: {
      en: 'Three figures, and the third one is the one we would put on our own wall: a dry-lab diagram that has the wet lab drawn **inside** it as a step.',
      zh: '三張圖，其中第三張是我們會貼在自己牆上的那張：一張把濕式實驗**畫進去**當成其中一步的乾式流程圖。'
    },
    items: [
      { file: 'stanford-mech.webp', page: 'Description', src: WIKI + 'stanford-university/description',
        title: { en: 'The AND gate, as the team draws it', zh: '該隊畫的 AND 閘' },
        sub: { en: 'Two triggers, two UAG stops, one ADAR enzyme, one payload.', zh: '兩個觸發、兩個 UAG 終止子、一個 ADAR 酵素、一個酬載。' },
        caption: {
          en: 'The entire specificity claim in one picture: the payload is translated only when **both** trigger transcripts are in the same cell, because the cell\'s own ADAR has to edit both stop codons away. Note what the figure deliberately leaves out — nothing about delivery, dose or the patch. A mechanism figure that stays a mechanism figure is easier to defend.',
          zh: '整個專一性主張濃縮成一張圖：只有當**兩個**觸發轉錄本同時存在於同一顆細胞，細胞自己的 ADAR 才會把兩個終止密碼子都編輯掉，酬載才會被轉譯。值得注意的是這張圖刻意不畫的東西——完全沒有遞送、劑量或貼片。一張只談機制的機制圖，比較好辯護。'
        } },
      { file: 'stanford-dry.webp', page: 'Model', src: WIKI + 'stanford-university/model',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: 'RADAR-Scout: the dry lab drawn as a closed loop', zh: 'RADAR-Scout：被畫成閉環的乾式實驗' },
        sub: { en: 'scRNA-seq → rank targets → **wet lab** → data analysis → rank candidate sensors → ODE and stochastic simulation.', zh: '單細胞定序→標靶排序→**濕式實驗**→數據分析→候選感測器排序→ODE 與隨機模擬。' },
        caption: {
          en: 'This is the figure we would copy first. Of the ten teams, Stanford is one of only two who put a wet-lab box *inside* the dry-lab diagram, so the picture itself says the model does not finish before the bench starts. The arrows that matter run right-to-left: measured flow data re-enters at "rank candidate sensors".',
          zh: '這是我們第一個會抄的圖。十支隊伍裡只有兩隊把濕式實驗的方塊畫*進*乾式流程圖裡面，於是這張圖本身就在說：模型不是先做完才輪到實驗台。真正關鍵的是由右往左的箭頭——量到的流式數據回到「候選感測器排序」那一步。'
        } },
      { file: 'stanford-build.webp', page: 'Results', src: WIKI + 'stanford-university/results',
        title: { en: 'What was actually transfected', zh: '實際被轉染進去的東西' },
        sub: { en: 'Sensor construct, trigger construct and the EK208 control trigger, with the three colours labelled.', zh: '感測器構建體、觸發構建體與 EK208 對照觸發，三個顏色都標好。' },
        caption: {
          en: 'A build figure that names its controls on the same panel as its constructs. The three fluorophores are not decoration: mCherry is the sensor dose, mTagBFP the trigger dose and EGFP the output, which is what makes a ratio readable at all.',
          zh: '一張把對照組和構建體畫在同一個面板上的建構圖。三個螢光蛋白不是裝飾：mCherry 是感測器劑量、mTagBFP 是觸發劑量、EGFP 是輸出，正因如此比值才讀得出來。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.ucas = {
    lede: {
      en: 'UCAS draw the product and the software as two separate systems, and both drawings are honest about their edges — the software figure prints what the app does *not* measure.',
      zh: 'UCAS 把產品與軟體畫成兩套獨立系統，而且兩張圖都誠實標出自己的邊界——軟體那張甚至直接寫出這個 app *不*量測什麼。'
    },
    items: [
      { file: 'ucas-mech.avif', page: 'Design', src: WIKI + 'ucas-china/design',
        title: { en: 'One figure that holds the whole product', zh: '一張圖裝下整個產品' },
        sub: { en: 'Protein processing (in vitro) · cell factory (in vivo) · antibody conjugation · delivery and endosomal escape.', zh: '蛋白加工（體外）·細胞工廠（體內）·抗體偶聯·遞送與內體逃逸。' },
        caption: {
          en: 'Read it as a work-breakdown structure rather than a mechanism: each of the four boxes is a sub-team with its own constructs, its own assay and its own failure mode. The quorum-sensing lysis circuit in the bottom-left box is the only part that is a classic iGEM genetic circuit; the rest is protein engineering and formulation.',
          zh: '把它當成工作分解結構而不是機制圖來看：四個方塊各自是一個子團隊，有自己的構建體、自己的分析方法、自己的失敗模式。左下角的群聚感應裂解迴路是唯一一段典型 iGEM 基因迴路，其餘都是蛋白質工程與劑型。'
        } },
      { file: 'ucas-dry.avif', page: 'Software', src: WIKI + 'ucas-china/software',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: 'Three independent checks, one target', zh: '三個互相獨立的檢查、一個標靶' },
        sub: { en: 'Club-cell enrichment (HLCA) → surface location (Human Surfaceome + UniProt) → off-tissue expression (GTEx) → UPK1B.', zh: 'Club 細胞富集（HLCA）→表面位置（Human Surfaceome＋UniProt）→其他組織表現（GTEx）→UPK1B。' },
        caption: {
          en: 'A target funnel in which each stage can disqualify a candidate for a different reason, and the three stages read three different databases. This is cheap to copy: no modelling, no licence, three public resources and an explicit rule for each. The weakness is also visible — nothing in the funnel tests whether an antibody can actually be raised against the survivor.',
          zh: '一個標靶漏斗，每一關都能以不同理由把候選者刷掉，而且三關讀的是三個不同資料庫。這個做法很好抄：不用建模、不用授權，三個公開資源加上每關一條明確規則。弱點也看得出來——漏斗裡沒有任何一關檢驗「活下來的那個標靶到底做不做得出抗體」。'
        } },
      { file: 'ucas-sw.avif', page: 'Software', src: WIKI + 'ucas-china/software',
        title: { en: 'A software diagram that prints its own disclaimers', zh: '把免責聲明印在圖上的軟體架構' },
        sub: { en: 'Device communication · medication diary · on-device assistant, in three lanes.', zh: '裝置通訊·用藥日誌·裝置端助理，分成三條泳道。' },
        caption: {
          en: 'Under the lanes, in grey: *a logged use records a device trigger; it does not measure dose or verify ingestion*. Naming the thing your product cannot do, on the architecture diagram itself, is the single cheapest credibility move on this whole site.',
          zh: '泳道下方的灰字寫著：*記錄一次使用只代表裝置被觸發，不代表量到劑量，也不代表確認吸入*。把「你的產品做不到的事」直接寫在架構圖上，是整個網站上成本最低的一個可信度動作。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.princeton = {
    lede: {
      en: 'Princeton\'s project figure is a procedure, not a product — four numbered steps with the question each one answers written underneath.',
      zh: 'Princeton 的專案圖是一套程序而不是一個產品——四個編號步驟，每一步下面寫著它要回答的問題。'
    },
    items: [
      { file: 'princeton-mech.webp', page: 'Description', src: WIKI + 'princeton/description',
        title: { en: 'The platform stated as four steps', zh: '把平台講成四個步驟' },
        sub: { en: 'Select a target → select the binder → assemble the phage → capture and recover.', zh: '選標靶→選結合蛋白→組裝噬菌體→捕捉與回收。' },
        caption: {
          en: 'A Foundational Advance has to show that the method works for a target it was not built around, and this figure is already written that way: step 1 asks "what needs to be removed?" rather than naming a molecule. The fourth step carries the optogenetic release, which is the part that makes the sponge reusable.',
          zh: '基礎推進類的專案必須證明方法對「不是為它設計的標靶」也成立，而這張圖一開始就是這樣寫的：第一步問的是「要移除什麼？」而不是直接指名某個分子。第四步帶出光控釋放，那正是讓這塊海綿可以重複使用的關鍵。'
        } },
      { file: 'princeton-dry.avif', page: 'Contribution', src: WIKI + 'princeton/contribution',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: 'The whole dry lab fits on one poster', zh: '整個乾式實驗裝得下一張海報' },
        sub: { en: 'SymPlify: BindCraft for protein–protein, RFdiffusion3 and PeSTo for hotspots, plus the PLA binding case.', zh: 'SymPlify：蛋白－蛋白用 BindCraft，熱點用 RFdiffusion3 與 PeSTo，外加 PLA 結合案例。' },
        caption: {
          en: 'That it fits on one poster is the finding. Princeton\'s dry lab is not a model of their own experiment — it is a tool for other people, so what it has to communicate is a pipeline and a set of defaults, not a fit. Open the full size: the "Considerations" column, which lists what the pipeline gets wrong, is the most useful block on it.',
          zh: '「裝得下一張海報」本身就是發現。Princeton 的乾式實驗不是在模擬自己的實驗，而是一個給別人用的工具，所以它要傳達的是一條流程和一組預設值，不是一次擬合。點開原尺寸看：列出流程會出錯之處的「Considerations」那一欄，是上面最有用的一塊。'
        } },
      { file: 'princeton-build.webp', page: 'Design rationale', src: WIKI + 'princeton/design-rationale',
        title: { en: 'The chemistry that attaches cargo to the coat', zh: '把貨物接到外殼上的化學' },
        sub: { en: 'Sortase A from *S. aureus* (LPXTG) and *S. pyogenes* (LPXTA), drawn as the same three steps.', zh: '來自 *S. aureus*（LPXTG）與 *S. pyogenes*（LPXTA）的 Sortase A，畫成同樣的三個步驟。' },
        caption: {
          en: 'Two enzymes, one diagram, three steps each — recognise and cut, acyl-enzyme intermediate, form the peptide bond. Drawing the orthogonal pair side by side is what lets the reader see at a glance that two cargoes can be loaded independently.',
          zh: '兩個酵素、一張圖、各三個步驟——辨識並切割、形成醯基－酵素中間體、形成胜肽鍵。把正交的一對並排畫出來，讀者一眼就能看出兩種貨物可以各自獨立裝載。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.heidelberg = {
    lede: {
      en: 'Heidelberg publish the two figures a Foundational Advance needs: a graphical abstract whose branches are the project plan, and a design pipeline that draws the arrow back from the wet lab.',
      zh: 'Heidelberg 貼出了基礎推進類最需要的兩張圖：一張分支就是專案計畫的圖像摘要，以及一條把「從濕式實驗回來」那支箭頭畫出來的設計流程。'
    },
    items: [
      { file: 'heidelberg-mech.svg', page: 'Description', src: WIKI + 'heidelberg/description',
        title: { en: 'One protein, three applications', zh: '一個蛋白、三種應用' },
        sub: { en: 'GvpC engineering branches into multiplexing (A→B), biosensing (C) and organizing cells in an acoustic field (D).', zh: 'GvpC 工程分支成多工（A→B）、生物感測（C）與在聲場中排列細胞（D）。' },
        caption: {
          en: 'The branch structure *is* the project plan: one engineered shell protein, then three independent downstream claims that can each fail without taking the others with them. For a team deciding how wide to make a 2027 project, this is the shape to argue about — one shared platform, three separable deliverables.',
          zh: '分支結構*就是*專案計畫：一個被改造的外殼蛋白，接出三個互相獨立的下游主張，任何一個垮掉都不會拖垮其他兩個。對正在決定 2027 專案要開多寬的隊伍來說，這就是該拿出來吵的形狀——一個共用平台、三個可分離的交付物。'
        } },
      { file: 'heidelberg-dry.svg', page: 'Model', src: WIKI + 'heidelberg/model',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: 'The design pipeline, with the return arrow labelled', zh: '把回來那支箭頭標好名字的設計流程' },
        sub: { en: 'Input template → binding (LigandMPNN) and stability (helicity palette) → Boltz-2 / AlphaFold2 / PyRosetta → gating and selection → wet lab → *validated variants fed back into next loop*.', zh: '輸入模板→結合（LigandMPNN）與穩定性（螺旋度調色盤）→Boltz-2／AlphaFold2／PyRosetta→篩選與門檻→濕式實驗→*驗證過的變體回饋到下一輪*。' },
        caption: {
          en: 'The caption on their own figure ends with the sentence that most dry-lab figures leave implicit. A pipeline that terminates at "wetlab" is a one-shot prediction; a pipeline with a labelled return edge is a loop with a stated iteration count. Heidelberg ran it twice.',
          zh: '他們自己那張圖的說明，結尾就是多數乾式流程圖只敢暗示的那句話。終點停在「wetlab」的流程是一次性預測；畫出並標示回饋邊的流程，才是一個講得出跑了幾輪的迴圈。Heidelberg 跑了兩輪。'
        } },
      { file: 'heidelberg-dry2.svg', page: 'Model', src: WIKI + 'heidelberg/model',
        title: { en: 'The binder route, named tool by tool', zh: '把每一個工具都寫出來的結合蛋白路線' },
        sub: { en: 'Target structure —RFdiffusion3→ structure design —ProteinMPNN→ sequence design —AlphaFold2→ scoring.', zh: '標靶結構 —RFdiffusion3→ 結構設計 —ProteinMPNN→ 序列設計 —AlphaFold2→ 評分。' },
        caption: {
          en: 'Four boxes and three tool names between them. This is the 2026 default stack for *de novo* binders, and the reason to reproduce the figure here is that three other teams on this list ran a version of the same three steps without drawing them.',
          zh: '四個方塊，中間三個工具名稱。這就是 2026 年 *de novo* 結合蛋白的預設堆疊；把這張圖放在這裡的理由是：名單上另外三支隊伍也跑了同樣三步的某個版本，只是沒有把它畫出來。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.cornell = {
    lede: {
      en: 'Cornell have an excellent wet-lab figure and an excellent design-space figure, and nothing in between — there is no single picture of how their six chained models connect. The dry lane of our swimlane above is that missing drawing.',
      zh: 'Cornell 有一張很好的濕式流程圖、一張很好的設計空間圖，中間卻什麼都沒有——他們六個串接模型怎麼接起來，沒有任何一張圖畫出來。上面那張泳道圖的乾式那一排，就是我們補上的那張圖。'
    },
    items: [
      { file: 'cornell-mech.avif', page: 'Description', src: WIKI + 'cornell/description',
        title: { en: 'Three nouns and two arrows', zh: '三個名詞、兩支箭頭' },
        sub: { en: 'Engineered probiotics → co-axial electrospinning → encapsulation of probiotics.', zh: '改造益生菌→同軸靜電紡絲→益生菌被包埋。' },
        caption: {
          en: 'The minimum viable project figure: it names the chassis, the process and the product, and nothing else. A team that can draw its project in three boxes usually also has a clean scope; a team that needs twelve usually does not.',
          zh: '最低限度可行的專案圖：它只說出底盤、製程、產品，其他一概不提。能把專案畫成三個方塊的隊伍，範圍通常也很乾淨；需要十二個方塊的，通常不是。'
        } },
      { file: 'cornell-build.avif', page: 'Wet lab', src: WIKI + 'cornell/wet-lab',
        title: { en: 'Eight numbered steps, and one of them is not in the product', zh: '八個編號步驟，其中一步不在產品裡' },
        sub: { en: 'Gene insert + backbone → PCR and gel → DpnI → cleanup → Gibson → transformation → IPTG induction → SDS-PAGE.', zh: '基因插入＋骨架→PCR 與膠→DpnI→純化→Gibson→轉形→IPTG 誘導→SDS-PAGE。' },
        caption: {
          en: 'The team\'s own text next to this figure says the SDS-PAGE step was *appended in our experimental phases in order to verify the production of our peptide* and is not part of a product-ready version. Separating "steps the product needs" from "steps we added to be able to believe ourselves" is a habit worth stealing outright.',
          zh: '該隊在這張圖旁邊的文字明說：SDS-PAGE 這一步是*在實驗階段加上去、用來驗證胜肽確實有做出來的*，不屬於量產版本。把「產品需要的步驟」和「我們為了相信自己而加上的步驟」分開寫，這個習慣值得整段照抄。'
        } },
      { file: 'cornell-dry.avif', page: 'Model', src: WIKI + 'cornell/model',
        tag: { en: 'THEIR DRY-LAB FIGURE', zh: '他們的乾式圖' },
        title: { en: 'A design space with the operating point starred', zh: '一張標出操作點的設計空間圖' },
        sub: { en: 'Probability of passing screening over sodium alginate (wt %) × PEO 600 kDa (wt %); the star is the chosen formulation.', zh: '通過篩選的機率，橫軸海藻酸鈉（wt%）、縱軸 PEO 600 kDa（wt%）；星號是選定的配方。' },
        caption: {
          en: 'This is not a prediction, it is a decision recorded as a map. The contour at p = 0.5 is a claim the wet lab can refute in one afternoon, and the star says which point inside it the team actually ran. Any 2027 formulation or culture-condition question can be written in exactly this form.',
          zh: '這不是預測，而是被畫成地圖的一個決定。p=0.5 的等高線是一個濕式實驗一個下午就能推翻的主張，而星號說明隊伍實際跑的是裡面哪一點。2027 年任何配方或培養條件的問題，都可以寫成一模一樣的形式。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.lyon = {
    lede: {
      en: 'LYON publish the best single workflow figure on this list. It is not a diagram of what happened; it is an instruction sheet, written so that a member can pick up a construct they did not design.',
      zh: 'LYON 貼出了整份名單上最好的一張流程圖。它不是「發生了什麼」的示意圖，而是一張作業指示單——寫成讓任何成員都能接手一個不是自己設計的構建體。'
    },
    items: [
      { file: 'lyon-build.svg', page: 'Engineering', src: WIKI + 'lyon/engineering',
        tag: { en: 'THEIR WET-LAB OVERVIEW', zh: '他們的濕式總覽' },
        title: { en: 'Seven steps and the same gates for every construct', zh: '七個步驟，每個構建體都走同一組關卡' },
        sub: { en: 'Protein design · gene synthesis · cloning and verification · purification (IMAC) · production · functional tests · capture tests — with a legend for *quality control*, *feedback to design*, *end of a branch* and *dead end*.', zh: '蛋白設計·基因合成·選殖與驗證·純化（IMAC）·生產·功能測試·捕捉測試——並附上*品管*、*回饋到設計*、*分支結束*、*死路*四種圖例。' },
        caption: {
          en: 'Three things make this figure unusual. It has decision gates rather than arrows, so each step has a pass criterion. It has a legend entry for *dead end*, so failure is a drawable outcome rather than an absence. And the team state its purpose explicitly: a member can pick up a construct they did not design and know what to do next. If you copy one figure from this whole site, copy this one.',
          zh: '這張圖有三點不尋常。它畫的是決策關卡而不是箭頭，所以每一步都有通過標準。它的圖例裡有*死路*這一項，於是失敗是一個畫得出來的結果，而不是一片空白。而且該隊明說了它的用途：讓成員能接手一個不是自己設計的構建體，並且知道下一步要做什麼。如果你只從這個網站抄一張圖，抄這張。'
        } },
      { file: 'lyon-dry.avif', page: 'Model', src: WIKI + 'lyon/model',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: '"What the filter model computes"', zh: '「這個濾床模型算的是什麼」' },
        sub: { en: 'Carried by the flow · spread by mixing · captured by the binder → the breakthrough curve, plus the four dimensionless numbers used on the page.', zh: '被水流帶走·被混合攤開·被結合蛋白抓住→穿透曲線，外加頁面上用到的四個無因次數。' },
        caption: {
          en: 'The title of their own figure is the thing most model pages never say out loud. Three physical effects, one output, and four numbers (bed volumes, contact time, Péclet, Damköhler) defined on the same panel they are used on. A reader who has never seen a packed-bed model can follow it; that is the test a model figure should pass.',
          zh: '他們自己給這張圖下的標題，正是多數模型頁從來不肯直說的那件事。三個物理效應、一個輸出，加上四個在使用它們的同一塊面板上就定義清楚的數（床體積、接觸時間、Péclet、Damköhler）。一個從沒看過填充床模型的讀者也跟得上——這就是模型圖該通過的測試。'
        } },
      { file: 'lyon-impl.avif', page: 'Entrepreneurship', src: WIKI + 'lyon/entrepreneurship',
        title: { en: 'The machine the model is about', zh: '模型在講的那台機器' },
        sub: { en: 'The treatment skid in batch mode: retention tank → capture column → heat and release → refold and swap.', zh: '批次模式下的處理橇：儲留槽→捕捉管柱→加熱釋放→再折疊與更換。' },
        caption: {
          en: 'Worth putting next to the filter model, because the two figures use the same column. A dry-lab model that shares its geometry with the implementation drawing is a model somebody can actually be held to.',
          zh: '值得和濾床模型放在一起看，因為兩張圖用的是同一根管柱。當乾式模型和實作圖共用同一套幾何，這個模型才是真的有人要負責的模型。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.nus = {
    lede: {
      en: 'The strongest figure NUS drew is not a mechanism or a pipeline. It is their problem statement, and the question mark in the middle of it is the whole project.',
      zh: 'NUS 畫得最強的一張圖既不是機制也不是流程，而是他們的問題陳述——中間那個問號就是整個專案。'
    },
    items: [
      { file: 'nus-mech.avif', page: 'Description', src: WIKI + 'nus-singapore/description',
        title: { en: 'The problem statement as a figure', zh: '被畫成圖的問題陳述' },
        sub: { en: 'Physical metrics (pH, DO, temperature) and chemical metrics (nutrient, product) are measured; biological metrics are **difficult to measure** and **difficult to comprehend**.', zh: '物理指標（pH、溶氧、溫度）與化學指標（營養、產物）量得到；生物指標則**難以量測**且**難以理解**。' },
        caption: {
          en: 'Two problems, not one, and the figure separates them: an instrument gap and an interpretation gap. ORCHID\'s sensors attack the first; the SABLe model attacks the second. A project that can draw its gap this cleanly has already done the hard part of scoping — and note that this figure contains no biology at all.',
          zh: '這是兩個問題而不是一個，而這張圖把它們分開：一個是儀器缺口、一個是詮釋缺口。ORCHID 的感測器打第一個，SABLe 模型打第二個。能把自己的缺口畫得這麼乾淨的專案，最難的範圍界定其實已經做完了——另外注意，這張圖裡完全沒有生物學。'
        } },
      { file: 'nus-build.avif', page: 'Contribution', src: WIKI + 'nus-singapore/contribution',
        title: { en: 'Four separate modifications to one reporter', zh: '對同一個報導系統做的四處修改' },
        sub: { en: 'Skn7 inhibition, the low-affinity cP_CYC1 core promoter, an ODC degron, and the RPP2BI terminator.', zh: 'Skn7 抑制、低親和力 cP_CYC1 核心啟動子、ODC 降解標籤、RPP2BI 終止子。' },
        caption: {
          en: 'Each numbered change answers a different failure of the previous version — leaky basal expression, slow decay, read-through. Drawing them on one construct, numbered, is how you make a reader see that four engineering cycles happened here rather than one design.',
          zh: '每一個編號修改回應的是前一版的不同缺陷——基礎表現滲漏、衰減太慢、讀通。把它們編號畫在同一個構建體上，讀者才看得出這裡發生的是四輪工程循環，而不是一次設計。'
        } },
      { file: 'nus-dry.avif', page: 'Model', src: WIKI + 'nus-singapore/model',
        tag: { en: 'THEIR DRY-LAB FIGURE', zh: '他們的乾式圖' },
        title: { en: 'A model figure that publishes its own worst number', zh: '把自己最差的數字印出來的模型圖' },
        sub: { en: 'ODE solutions (lines) against plate data (points) at 24 °C and 30 °C, with R² printed for growth, stress and product on each panel.', zh: 'ODE 解（線）對上盤讀數據（點），24 °C 與 30 °C 各一欄，每個面板都印出 growth、stress、product 的 R²。' },
        caption: {
          en: 'Growth fits at R² = 0.91–0.93. Stress fits at 0.47 and 0.33. The team printed both in the panel title instead of quoting the good one in the text, which is the difference between a model you can argue with and a model you can only admire. Our measurement ladder puts this near the top for exactly that reason.',
          zh: 'growth 的 R² 是 0.91–0.93，stress 是 0.47 與 0.33。該隊把兩者都印在面板標題上，而不是在內文只引用好看的那個——這就是「可以被質疑的模型」和「只能被欣賞的模型」之間的差別。我們的量測階梯把它排得很前面，正是因為這一點。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.ualberta = {
    lede: {
      en: 'UAlberta\'s build table is the clearest "what we made and what we did not test" statement of the ten, and it is a table, not a diagram.',
      zh: 'UAlberta 的建構表是十隊裡把「我們做了什麼、哪些沒測」講得最清楚的一份，而且它是一張表格，不是示意圖。'
    },
    items: [
      { file: 'ualberta-mech.avif', page: 'Overview', src: WIKI + 'ualberta/overview',
        title: { en: 'Where the drug has to stay, and what holds it there', zh: '藥要留在哪裡、靠什麼留住' },
        sub: { en: 'Hydrogel delivery system plus a lectin–glycan interaction on the inflamed conjunctival epithelium.', zh: '水膠遞送系統，加上在發炎結膜上皮上的凝集素－醣鏈交互作用。' },
        caption: {
          en: 'Two anchoring mechanisms are drawn at two scales in one figure: the lens holds the reservoir, the lectin holds the drug to the tissue. Splitting "delivery" into a device claim and a molecular claim is what lets each be tested separately — and the molecular one is the one their own transport model later put in doubt.',
          zh: '一張圖裡用兩個尺度畫出兩種錨定機制：鏡片留住藥庫、凝集素把藥留在組織上。把「遞送」拆成裝置主張與分子主張，兩者才能各自被檢驗——而被他們自己的傳輸模型打上問號的，正是分子那一個。'
        } },
      { file: 'ualberta-build.avif', page: 'Proof of concept', src: WIKI + 'ualberta/proof-of-concept',
        tag: { en: 'THEIR BUILD TABLE', zh: '他們的建構表' },
        title: { en: 'Six constructs, their domain architecture, and what each was assayed on', zh: '六個構建體、它們的 domain 架構，以及各自被測在什麼上面' },
        sub: { en: 'The last row — the therapeutic three-domain fusion — is marked **N/A** in the "assayed on" column.', zh: '最後一列，也就是治療用的三domain 融合蛋白，在「assayed on」那欄被標成 **N/A**。' },
        caption: {
          en: 'The therapeutic construct is in the table and the table says it was not assayed. That is the honest version of a proof-of-concept page: the reporter fusions carry the evidence, the therapeutic fusion carries the intent, and the column header forces the distinction into view. Most teams would simply have left the row out.',
          zh: '治療用的構建體列在表上，而表格直接說它沒有被測。這是 proof-of-concept 頁面誠實的寫法：報導融合蛋白負責證據、治療融合蛋白負責意圖，而欄位標題逼著這個分別被看見。多數隊伍會直接把這一列刪掉。'
        } },
      { file: 'ualberta-dry.avif', page: 'Model', src: WIKI + 'ualberta/model',
        title: { en: 'The first gate of a five-stage pipeline', zh: '五段流程的第一道關卡' },
        sub: { en: 'GLARE: a volcano of the dry-eye / ocular-surface-disease signature against baseline.', zh: 'GLARE：乾眼／眼表疾病特徵相對於基線的火山圖。' },
        caption: {
          en: 'GLARE is stage one of GLARE → InSiGHT → VOIR → I-SPY → HOPE, and it is the only stage with a published figure. The pipeline itself is only described in prose, which is why we drew it as the dry lane of the swimlane above — five named stages narrowing 117,732 FoldX mutants to 10 is a shape other teams should be able to see, and the fifth stage is the one that disagreed with the fourth.',
          zh: 'GLARE 是 GLARE→InSiGHT→VOIR→I-SPY→HOPE 的第一段，也是唯一有圖的一段。整條流程只用文字描述，所以我們把它畫成了上面那張泳道圖的乾式那一排——把 117,732 個 FoldX 突變收斂到 10 個的五段式結構，應該讓其他隊伍看得見；而第五段正是和第四段唱反調的那一段。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.ucnz = {
    lede: {
      en: 'UCNZ\'s build figure is one strip of six bars, and three of those bars are the secretion lanes that failed. It is the most compact statement of a project\'s whole build on this site.',
      zh: 'UCNZ 的建構圖是一條六根色帶，其中三根就是後來失敗的分泌路線。這是全站把一個專案的整個建構講得最精簡的一張。'
    },
    items: [
      { file: 'ucnz-mech.avif', page: 'Description', src: WIKI + 'ucnz/description',
        title: { en: 'Waste in, high-value biomaterial out', zh: '廢料進去、高值生物材料出來' },
        sub: { en: 'Brewers\' spent grain under a magnifier, resolving into nanocellulose.', zh: '放大鏡下的啤酒糟，解析成奈米纖維素。' },
        caption: {
          en: 'A bioremediation-adjacent project that leads with the product rather than the problem. The figure does one job — it says what the output is worth — and leaves the enzymology to the next figure. Splitting "why anyone cares" from "how it works" across two figures keeps both of them readable.',
          zh: '一個靠近生物復育的專案，開場講的卻是產品而不是問題。這張圖只做一件事——說清楚輸出值多少錢——酵素學留給下一張。把「為什麼有人在乎」和「它怎麼運作」拆成兩張圖，兩張都還讀得下去。'
        } },
      { file: 'ucnz-build.avif', page: 'Description', src: WIKI + 'ucnz/description',
        tag: { en: 'THEIR BUILD FIGURE', zh: '他們的建構圖' },
        title: { en: 'The entire build, in six bars', zh: '整個建構，六根色帶' },
        sub: { en: '(a) XynA · (b) EG · (c) EG–CBM · (d) YebF–XynA · (e) YebF–EG · (f) YebF–EG–CBM, each with GS linker and His tag.', zh: '(a) XynA·(b) EG·(c) EG–CBM·(d) YebF–XynA·(e) YebF–EG·(f) YebF–EG–CBM，每個都帶 GS linker 與 His tag。' },
        caption: {
          en: 'Six constructs ordered pre-cloned from Twist — no assembly at all — and the figure is the whole build log. Rows (d), (e) and (f) are the YebF secretion fusions, and those are the three that did not secrete. A build figure drawn as a matched set like this makes a negative result interpretable: the difference between (b) and (e) is one tag.',
          zh: '六個構建體直接向 Twist 訂購已接好的質體——完全不組裝——而這張圖就是整份建構紀錄。(d)(e)(f) 是 YebF 分泌融合蛋白，也正是沒有分泌成功的那三個。把建構圖畫成這樣一組對照，陰性結果才解讀得了：(b) 和 (e) 的差別就只有一個標籤。'
        } },
      { file: 'ucnz-cycle.avif', page: 'Engineering', src: WIKI + 'ucnz/engineering',
        title: { en: 'The DBTL wheel, used as a page structure', zh: '被當成頁面結構來用的 DBTL 輪' },
        sub: { en: 'Design · Build · Test · Learn, with the team mark in the hub.', zh: '設計·建構·測試·學習，中心是隊徽。' },
        caption: {
          en: 'Eight of the ten teams draw a version of this wheel, and on its own it carries no information. It earns its place here only because UCNZ then split their Engineering page into named cycles that match it — the wheel is a table of contents, not a claim. Used any other way it is decoration.',
          zh: '十隊裡有八隊畫了這個輪子的某個版本，而它本身不帶任何資訊。它之所以還值得放在這裡，只因為 UCNZ 接著把 Engineering 頁面切成與它對應的具名循環——輪子在這裡是目錄，不是主張。用在別的地方它就只是裝飾。'
        } }
    ]
  };

  /* ---------------------------------------------------------- */
  PD.figs.uottawa = {
    lede: {
      en: 'UOttawa are the only team on the list who published a piping-and-instrumentation diagram. It is also the only team whose dry-lab figure ends in a wet-lab panel.',
      zh: 'UOttawa 是名單上唯一貼出管線與儀表圖（P&ID）的隊伍，也是唯一一隊的乾式圖最後一格是濕式實驗。'
    },
    items: [
      { file: 'uottawa-mech.avif', page: 'Description', src: WIKI + 'uottawa/description',
        title: { en: 'The 4S pathway, drawn as chemistry', zh: '被畫成化學式的 4S 路徑' },
        sub: { en: 'Dibenzothiophene → sulfoxide → sulfone → benzoate, with the sulfur leaving as sulfite.', zh: '二苯并噻吩→亞碸→碸→苯甲酸鹽，硫以亞硫酸根離開。' },
        caption: {
          en: 'Four structures and the leaving group in red. Because the pathway is published chemistry, the figure makes the actual project visible by subtraction: everything interesting is in the enzyme kinetics and the host, not in the route. Choosing a known pathway and competing on execution is a legitimate strategy, and this figure is how you declare it.',
          zh: '四個結構式，離去基團用紅色標出。因為這條路徑本身是已發表的化學，這張圖反而用「減法」讓真正的專案現形：有趣的東西全在酵素動力學和宿主，不在路徑上。選一條已知路徑、改用執行力競爭，是一個正當策略，而這張圖就是宣告它的方式。'
        } },
      { file: 'uottawa-dry.avif', page: 'Design', src: WIKI + 'uottawa/design',
        tag: { en: 'THEIR DRY-LAB OVERVIEW', zh: '他們的乾式總覽' },
        title: { en: 'Three panels that are three stages — and the third is wet', zh: '三格就是三個階段——而第三格是濕的' },
        sub: { en: 'Residue selection → mutant scoring (GLU168, GLU247, GLN315 marked) → wet-lab validation by DSF melt curve.', zh: '殘基選擇→突變評分（標出 GLU168、GLU247、GLN315）→以 DSF 熔解曲線做濕式驗證。' },
        caption: {
          en: 'Most dry-lab figures stop at the score. Putting the DSF melt curve in the same strip states the pass criterion in the same breath as the prediction: a mutation is not "designed", it is designed *and* it moved a melting temperature. Five substitutions per enzyme survived to that third panel.',
          zh: '多數乾式流程圖停在分數那一格。把 DSF 熔解曲線放進同一條帶子裡，等於把通過標準和預測寫在同一口氣裡：一個突變不是「設計好了」，而是設計好了*而且*讓熔點動了。每個酵素有五個取代撐到第三格。'
        } },
      { file: 'uottawa-hw.avif', page: 'Process design and analysis', src: WIKI + 'uottawa/process-design-and-analysis',
        tag: { en: 'THEIR PROCESS DRAWING', zh: '他們的製程圖' },
        title: { en: 'A real P&ID for the bubble-column bioreactor', zh: '氣泡塔生物反應器的正式 P&ID' },
        sub: { en: 'R-101, with bacterial culture and sour oil in, bioreactor gas and product out, cooling water loop, and every control loop drawn.', zh: 'R-101，進料為菌液與含硫原油，輸出為反應器氣體與產物，含冷卻水迴路，並畫出每一個控制迴路。' },
        caption: {
          en: 'No other team on this list drew one. A P&ID is a chemical-engineering deliverable, not a biology one, and publishing it is how UOttawa made the claim that the process — not the strain — is the contribution. Open it full size: the dashed lines are the control loops, and they are what the strain actually has to survive.',
          zh: '名單上沒有第二隊畫出這種圖。P&ID 是化工的交付物而不是生物的，貼出它，等於 UOttawa 宣告「貢獻在製程、不在菌株」。點開原尺寸看：虛線是控制迴路，而那正是菌株真正要活下來面對的東西。'
        } }
    ]
  };

})(window);
