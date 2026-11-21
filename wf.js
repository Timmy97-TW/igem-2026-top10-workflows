/* ============================================================
   wf.js — workflow diagrams for the iGEM 2026 Top 10 atlas.
   Same drawing conventions as the Protein Design Atlas bio.js:
   every diagram is laid out from the MEASURED width, and narrow
   widths get a stacked variant rather than a shrunken one.

   The signature diagram of this site is the WET/DRY swimlane:
   the wet-lab pipeline on one lane, the dry-lab pipeline on the
   other, and a dashed arrow wherever one actually handed the
   other something. A team with no arrows ran two projects.
   ============================================================ */
(function (w) {
  'use strict';
  var F = w.FIG, el = F.el, txt = F.txt, T = F.T, esc = F.esc, clip = F.clip,
      wrapLines = F.wrapLines, tw = F.tw;
  var BLUE = '#0167EF', GREEN = '#00A86B', VIOLET = '#7C5CFF', AMBER = '#E08700',
      TEAL = '#0E9BA8', ROSE = '#E5484D',
      INK = '#10151C', INK2 = '#525E6E', INK3 = '#8792A3', LINE = '#D7DCE3', PANEL = '#F6F8FA';

  function svg(W, H, body) {
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img">' + body + '</svg>';
  }
  var TONES = {
    b: ['rgba(1,103,239,.07)', 'rgba(1,103,239,.28)', BLUE],
    g: ['#E8F8F1', 'rgba(0,168,107,.3)', GREEN],
    v: ['rgba(124,92,255,.08)', 'rgba(124,92,255,.3)', VIOLET],
    a: ['rgba(224,135,0,.09)', 'rgba(224,135,0,.32)', AMBER],
    t: ['rgba(14,155,168,.08)', 'rgba(14,155,168,.3)', TEAL],
    r: ['rgba(229,72,77,.08)', 'rgba(229,72,77,.28)', ROSE],
    n: [PANEL, 'rgba(16,24,40,.11)', INK3]
  };
  /* a labelled box; returns {svg, h} so callers can stack */
  function box(x, y, bw, label, sub, tone, opt) {
    opt = opt || {};
    var tn = TONES[tone || 'b'];
    var fs = opt.fs || 12.3;
    var ls = wrapLines(T(label), fs, bw - 18, 3);
    var sl = sub ? wrapLines(T(sub), 10.5, bw - 16, 4) : [];
    var bh = 12 + ls.length * (fs + 2.6) + (sl.length ? 3 + sl.length * 12.4 : 0) + 11;
    if (opt.minH) bh = Math.max(bh, opt.minH);
    var g = el('rect', { x: x, y: y, width: bw, height: bh, rx: 10, fill: tn[0], stroke: tn[1], 'stroke-width': 1 });
    var th = ls.length * (fs + 2.6) + (sl.length ? sl.length * 12.4 + 3 : 0);
    var y0 = y + bh / 2 - th / 2 + (fs + 2.6) / 2;
    ls.forEach(function (l, i) {
      g += txt(x + bw / 2, y0 + i * (fs + 2.6), l, { fs: fs, fill: INK, anchor: 'middle', bl: 'central', fw: 650 });
    });
    sl.forEach(function (l, i) {
      g += txt(x + bw / 2, y0 + ls.length * (fs + 2.6) + 1 + i * 12.4, l, { fs: 10.5, fill: INK2, anchor: 'middle', bl: 'central' });
    });
    if (opt.n != null) {
      g += el('circle', { cx: x + 13, cy: y + 13, r: 8.6, fill: tn[2] });
      g += txt(x + 13, y + 13.5, String(opt.n), { fs: 10, fill: '#fff', anchor: 'middle', bl: 'central', fw: 700 });
    }
    return { svg: g, h: bh };
  }
  function arrowH(x1, y, x2, color, label, dash) {
    var c = color || '#9FB4CC';
    var g = el('path', { d: 'M' + x1 + ' ' + y + 'H' + (x2 - 6), stroke: c, 'stroke-width': 1.7, 'stroke-dasharray': dash || null });
    g += el('path', { d: 'M' + (x2 - 7) + ' ' + (y - 4.4) + 'l6 4.4-6 4.4z', fill: c });
    if (label) g += txt((x1 + x2) / 2, y - 8, T(label), { fs: 10.2, fill: INK3, anchor: 'middle', fw: 600 });
    return g;
  }
  function arrowV(x, y1, y2, color, label, dash, side) {
    var c = color || '#9FB4CC';
    var up = y2 < y1;
    var g = el('path', { d: 'M' + x + ' ' + y1 + 'V' + (y2 + (up ? 6 : -6)), stroke: c, 'stroke-width': 1.7, 'stroke-dasharray': dash || null });
    g += up
      ? el('path', { d: 'M' + (x - 4.4) + ' ' + (y2 + 7) + 'l4.4-6 4.4 6z', fill: c })
      : el('path', { d: 'M' + (x - 4.4) + ' ' + (y2 - 7) + 'l4.4 6 4.4-6z', fill: c });
    if (label) {
      var lt = T(label), lw = tw(lt, 9.8) + 12;
      var lx = side === 'left' ? x - 7 - lw : x + 7;
      g += el('rect', { x: lx, y: (y1 + y2) / 2 - 8.5, width: lw, height: 17, rx: 8.5, fill: '#fff', stroke: 'rgba(16,24,40,.09)' });
      g += txt(lx + lw / 2, (y1 + y2) / 2, lt, { fs: 9.8, fill: INK2, anchor: 'middle', bl: 'central', fw: 620 });
    }
    return g;
  }
  function laneLabel(x, y, text, color) {
    var t2 = T(text), wd = tw(t2, 10) + 18;
    return el('rect', { x: x, y: y - 9.5, width: wd, height: 19, rx: 9.5, fill: color + '14', stroke: color + '44' }) +
      txt(x + wd / 2, y, t2, { fs: 10, fill: color, anchor: 'middle', bl: 'central', fw: 700 });
  }

  /* ---------------------------------------------------------------
     THE SWIMLANE. spec = { wet:[{l,s,tone}], dry:[...], links:[{w,d,l,up}] }
     link.w = index in wet, link.d = index in dry, link.up = dry→wet
     --------------------------------------------------------------- */
  function swim(W, spec) {
    var wet = spec.wet, dry = spec.dry;
    var vertical = W < 720;
    var padT = 26;
    if (!vertical) {
      var n = Math.max(wet.length, dry.length);
      var gap = n > 5 ? 16 : 22;
      var bw = (W - gap * (n - 1)) / n;
      /* first pass: measure heights */
      var wetH = 0, dryH = 0, i;
      var wm = wet.map(function (s) { var b = box(0, 0, bw, s.l, s.s, s.tone || 'b'); wetH = Math.max(wetH, b.h); return b; });
      var dm = dry.map(function (s) { var b = box(0, 0, bw, s.l, s.s, s.tone || 'v'); dryH = Math.max(dryH, b.h); return b; });
      var yW = padT, yD = padT + wetH + 78;
      var g = laneLabel(0, 10, { en: 'WET LAB', zh: '濕式實驗' }, BLUE);
      g += laneLabel(0, yD - 14, { en: 'DRY LAB', zh: '乾式實驗' }, VIOLET);
      function row(items, y, hh, tone) {
        var o = '';
        items.forEach(function (s, k) {
          var x = k * (bw + gap);
          o += box(x, y, bw, s.l, s.s, s.tone || tone, { minH: hh, n: k + 1 }).svg;
          if (k < items.length - 1) o += arrowH(x + bw + 4, y + hh / 2, x + bw + gap - 3);
        });
        return o;
      }
      g += row(wet, yW, wetH, 'b');
      g += row(dry, yD, dryH, 'v');
      (spec.links || []).forEach(function (L) {
        var xw = L.w * (bw + gap) + bw / 2, xd = L.d * (bw + gap) + bw / 2;
        var mid = yW + wetH + 38;
        var a = L.up ? xd : xw, b2 = L.up ? xw : xd;
        var y1 = L.up ? yD : yW + wetH, y2 = L.up ? yW + wetH : yD;
        var c = L.up ? VIOLET : BLUE;
        if (Math.abs(a - b2) < 2) {
          g += arrowV(a, y1 + (L.up ? -2 : 2), y2 + (L.up ? 2 : -2), c, L.l, '4 4', L.side);
        } else {
          g += el('path', {
            d: 'M' + a + ' ' + (y1 + (L.up ? -2 : 2)) + 'V' + mid + 'H' + b2 + 'V' + (y2 + (L.up ? 3 : -3)),
            fill: 'none', stroke: c, 'stroke-width': 1.6, 'stroke-dasharray': '4 4'
          });
          g += L.up
            ? el('path', { d: 'M' + (b2 - 4.4) + ' ' + (y2 + 4) + 'l4.4-6 4.4 6z', fill: c })
            : el('path', { d: 'M' + (b2 - 4.4) + ' ' + (y2 - 4) + 'l4.4 6 4.4-6z', fill: c });
          if (L.l) {
            var lt = T(L.l), lw = tw(lt, 9.8) + 13;
            var cx = (a + b2) / 2;
            g += el('rect', { x: cx - lw / 2, y: mid - 9, width: lw, height: 18, rx: 9, fill: '#fff', stroke: c + '55' });
            g += txt(cx, mid, lt, { fs: 9.8, fill: c, anchor: 'middle', bl: 'central', fw: 640 });
          }
        }
      });
      return svg(W, yD + dryH + 14, g);
    }
    /* stacked: wet block, then dry block, handoffs as badges */
    var y = 24, gv = laneLabel(0, 10, { en: 'WET LAB', zh: '濕式實驗' }, BLUE);
    function col(items, tone, start) {
      var o = '';
      items.forEach(function (s, k) {
        var b = box(1, y, W - 2, s.l, s.s, s.tone || tone, { n: k + 1 });
        o += b.svg; y += b.h;
        if (k < items.length - 1) {
          o += el('path', { d: 'M' + (W / 2) + ' ' + (y + 2) + 'v10', stroke: '#9FB4CC', 'stroke-width': 1.6 });
          o += el('path', { d: 'M' + (W / 2 - 4) + ' ' + (y + 11) + 'l4 5 4-5z', fill: '#9FB4CC' });
          y += 20;
        }
      });
      return o;
    }
    gv += col(wet, 'b');
    y += 34;
    gv += laneLabel(0, y - 16, { en: 'DRY LAB', zh: '乾式實驗' }, VIOLET);
    gv += col(dry, 'v');
    if ((spec.links || []).length) {
      y += 20;
      var txtl = T({ en: 'Handoffs: ', zh: '交接：' }) + (spec.links || []).map(function (L) { return T(L.l); }).join(' · ');
      wrapLines(txtl, 10.6, W - 10, 6).forEach(function (l, i) {
        gv += txt(2, y + i * 14, l, { fs: 10.6, fill: INK2, fw: 600 });
      });
      y += wrapLines(txtl, 10.6, W - 10, 6).length * 14;
    }
    return svg(W, y + 12, gv);
  }

  /* ---------------- per-team swimlane specs ---------------- */
  var SPECS = {
    stanford: {
      wet: [
        { l: { en: 'Build the sensors', zh: '建構感測器' }, s: { en: 'KAPA HiFi PCR, 20 bp overhangs → DpnI → NEB HiFi 50 °C → EK438 backbone', zh: 'KAPA HiFi PCR、20 bp 重疊→DpnI→NEB HiFi 50 °C→EK438 骨架' } },
        { l: { en: 'Transfect HEK293', zh: '轉染 HEK293' }, s: { en: '100k cells/well, Lipofectamine 3000 + P3000, 500 ng DNA, match vs mismatch in the SAME transfection', zh: '每孔 10 萬細胞、Lipofectamine 3000+P3000、500 ng DNA；配對與錯配在同一次轉染' } },
        { l: { en: 'Three-colour flow', zh: '三色流式' }, s: { en: 'mCherry = sensor, mTagBFP = trigger, EGFP = activation; top-5 % mCherry gate', zh: 'mCherry=感測器、mTagBFP=觸發、EGFP=啟動；取 mCherry 前 5% 閘' } },
        { l: { en: 'Move to mRNA', zh: '改用 mRNA' }, s: { en: 'PCR template with T7+Kozak in the primer → HiScribe → capping → poly(A) → MessengerMAX', zh: '引子內含 T7+Kozak 的 PCR 模板→HiScribe→加帽→poly(A)→MessengerMAX' } },
        { l: { en: 'Fibroblasts + payload swap', zh: '纖維母細胞與酬載替換' }, s: { en: 'Keloid + healthy primary cells; SuCas12a2 in co-culture; saRNA designs built', zh: '瘢痕與健康原代細胞；共培養測 SuCas12a2；建好 saRNA 架構' }, tone: 'a' }
      ],
      dry: [
        { l: { en: 'Pick the targets', zh: '選標靶' }, s: { en: '26 cohorts, 960,518 cells; score P vs H vs B, not a tissue average', zh: '26 個資料集、960,518 顆細胞；比較 P/H/B 而非組織平均' } },
        { l: { en: 'Rank the designs', zh: '排序設計' }, s: { en: '19 ViennaRNA predictors; folding ΔG ρ = 0.62–0.63 beats GC ≈ −0.2', zh: '19 個 ViennaRNA 預測子；折疊 ΔG ρ=0.62–0.63，勝過 GC 約 −0.2' } },
        { l: { en: 'Five ODE models', zh: '五個 ODE 模型' }, s: { en: 'Lipoplex cascade + stochastic occupancy; 82 parameters tabulated with sources', zh: '脂質複合體級聯＋隨機佔據；82 個參數附出處列表' } },
        { l: { en: 'Fit, do not assume', zh: '擬合而非假設' }, s: { en: 'Simulated annealing on Cohen et al. qPCR → p_entry 10.7 %, k_sat 232/nucleus', zh: '對 Cohen 等人 qPCR 做模擬退火→p_entry 10.7%、k_sat 232/核' }, tone: 'g' },
        { l: { en: 'Device models', zh: '裝置模型' }, s: { en: '0.9 mm needles; nociceptor + Fick/Darcy FEA, 6 h deadline from LNP decay', zh: '0.9 mm 微針；痛覺受器＋Fick/Darcy 有限元，LNP 衰減給出 6 小時期限' } },
        { l: { en: 'U-Net patch fitting', zh: 'U-Net 貼片客製' }, s: { en: 'Scar photo → segmentation → printable STL', zh: '疤痕照片→影像分割→可列印 STL' } }
      ],
      links: [
        { w: 0, d: 0, l: { en: 'model names the 5 genes', zh: '模型指定五個基因' }, up: true },
        { w: 2, d: 1, l: { en: 'flow data refits the ranking', zh: '流式數據重新擬合排序' } },
        { w: 3, d: 2, l: { en: 'delay in fibroblasts forced the ODEs', zh: '纖維母細胞的延遲迫使建立 ODE' } }
      ]
    },
    ucas: {
      wet: [
        { l: { en: 'Target hunt', zh: '尋找標靶' }, s: { en: 'CCSP tried and dropped; HLCA → DESeq2 → Surfaceome → UniProt → GTEx picks UPK1B', zh: '先試 CCSP 後放棄；HLCA→DESeq2→Surfaceome→UniProt→GTEx 選出 UPK1B' } },
        { l: { en: 'Express the carrier', zh: '表達載體蛋白' }, s: { en: 'ELP-Pum2-2EEP13 in BL21(DE3); 8 M urea to expose the His-tag, then IMAC', zh: 'BL21(DE3) 表達 ELP-Pum2-2EEP13；8 M 尿素暴露 His-tag 後 IMAC' } },
        { l: { en: 'Prove each domain', zh: '逐一驗證結構域' }, s: { en: 'EMSA: PRS binds below 2.5 µM, non-specific ≥5 µM · calcein leak P<0.001 but no dose response', zh: 'EMSA：PRS 在 2.5 µM 以下結合、≥5 µM 非專一；calcein 滲漏 P<0.001 但無劑量關係' } },
        { l: { en: 'LLPS + pH switch', zh: 'LLPS 與 pH 開關' }, s: { en: 'OD350 vs temperature, BSA at matched molarity; four buffers pH 7.66 → 5.x', zh: 'OD350 對溫度、BSA 同莫耳濃度對照；四種緩衝液 pH 7.66→5.x' } },
        { l: { en: 'Conjugate + contain', zh: '接合與圍堵' }, s: { en: 'eSrtA ligation (eCFP/eYFP, then scFv) · LuxRm lysis · hok/sok under pBAD', zh: 'eSrtA 接合（先 eCFP/eYFP 再 scFv）·LuxRm 裂解·pBAD 下的 hok/sok' } }
      ],
      dry: [
        { l: { en: '1 Cell factory', zh: '1 細胞工廠' }, s: { en: 'QS + growth-dilution ODEs, Baranyi fit to their own OD data', zh: 'QS＋生長稀釋 ODE，用自家 OD 數據擬合 Baranyi' } },
        { l: { en: '2 Self-assembly', zh: '2 自組裝' }, s: { en: 'AlphaFold 3 → Martini 3 in GROMACS, 298 K; is Pum2 buried? Then CAPE free energy', zh: 'AlphaFold 3→GROMACS Martini 3、298 K；Pum2 是否被包埋？再接 CAPE 自由能' } },
        { l: { en: '3 Inhalation', zh: '3 吸入' }, s: { en: 'MPPD v3.04 Yeh–Schum five-lobe screen, then ANSYS Fluent CFD', zh: 'MPPD v3.04 Yeh–Schum 五肺葉篩選，再做 ANSYS Fluent CFD' } },
        { l: { en: '4 Inside the cell', zh: '4 細胞內' }, s: { en: 'ODE + Gillespie: uptake, acidification, discrete membrane-opening events', zh: 'ODE＋Gillespie：攝取、酸化、離散的膜破裂事件' } },
        { l: { en: '5 PK/PD', zh: '5 PK/PD' }, s: { en: 'Immune network with Hill terms ending in FeNO and FEV₁', zh: '含 Hill 項的免疫網路，終點是 FeNO 與 FEV₁' } },
        { l: { en: '6 Response prediction', zh: '6 反應預測' }, s: { en: 'Affine baseline vs residual CellFlow; cross-donor generalisation fails', zh: '仿射基線對比 residual CellFlow；跨捐贈者泛化失敗' }, tone: 'r' }
      ],
      links: [
        { w: 0, d: 0, l: { en: 'screen replaces a failed target', zh: '篩選取代失敗的標靶' }, up: true },
        { w: 3, d: 1, l: { en: 'OD curves calibrate CAPE', zh: 'OD 曲線校正 CAPE' } },
        { w: 4, d: 4, l: { en: 'doses feed PK/PD', zh: '劑量輸入 PK/PD' } }
      ]
    },
    princeton: {
      wet: [
        { l: { en: 'Design in Benchling', zh: '用 Benchling 設計' }, s: { en: 'Helper-phage/phagemid split so every particle is replication-incompetent', zh: '輔助噬菌體／phagemid 分離，使每顆顆粒都無法複製' } },
        { l: { en: 'Clone the library', zh: '建構庫' }, s: { en: 'PCR → gel → InFusion → ER2738 → miniprep → Plasmidsaurus, gate = 100 % match', zh: 'PCR→膠體→InFusion→ER2738→miniprep→Plasmidsaurus，門檻為 100% 相符' } },
        { l: { en: 'Four assay attempts', zh: '四次量測嘗試' }, s: { en: 'Plaque → multi-transform (colonies, not plaques) → Sally diagnostic → Jumpstart', zh: '噬菌斑→多重轉形（長出菌落而非噬菌斑）→Sally 診斷→Jumpstart' }, tone: 'a' },
        { l: { en: 'Ligate and prove', zh: '接合與驗證' }, s: { en: 'Two orthogonal sortases; dot blot → Western (97–102 kDa) → SDS-PAGE → phage ELISA', zh: '兩種正交 sortase；點墨→西方墨點（97–102 kDa）→SDS-PAGE→噬菌體 ELISA' } }
      ],
      dry: [
        { l: { en: 'Phage refinery model', zh: '噬菌體精煉模型' }, s: { en: '4 + 7 state ODEs, pilus saturation, Poisson passaging, 52 automated tests', zh: '4＋7 狀態 ODE、菌毛飽和、Poisson 傳代、52 項自動測試' } },
        { l: { en: 'Parameters from sequence', zh: '參數取自序列' }, s: { en: 'Copy numbers read off the origin annotations; a_h ≈ 0.729 from gene dosage, then corrected', zh: '拷貝數讀自複製起點註解；a_h≈0.729 由基因劑量推得，之後更正' }, tone: 'g' },
        { l: { en: 'SymPlify app', zh: 'SymPlify 應用' }, s: { en: 'PeSTo hotspots → BindCraft (protein) / RFdiffusion3 (small molecule) → rank on ipTM', zh: 'PeSTo 熱點→BindCraft（蛋白）／RFdiffusion3（小分子）→以 ipTM 排序' } },
        { l: { en: 'Difficulty scorer', zh: '難度評分器' }, s: { en: '0–100 from five weighted factors, shipped with its own disclaimer', zh: '五項加權因子給出 0–100 分，並隨附免責聲明' } }
      ],
      links: [
        { w: 2, d: 0, l: { en: 'the ratio inverted, so model it', zh: '比值反轉，於是建模解釋' } },
        { w: 3, d: 2, l: { en: 'designs come back with an LPXT tag', zh: '設計帶 LPXT 標籤回到實驗台' }, up: true }
      ]
    },
    heidelberg: {
      wet: [
        { l: { en: 'Express GVs', zh: '表達氣囊' }, s: { en: 'mARG_Ana in HEK293T (1.3:1 cassettes, Lipofectamine 4 nL/ng) · Serratia cluster in BL21-AI', zh: 'HEK293T 表達 mARG_Ana（卡匣 1.3:1、Lipofectamine 4 nL/ng）·BL21-AI 表達 Serratia 叢集' } },
        { l: { en: 'Gate on side scatter', zh: '以側向散射設閘' }, s: { en: 'Flow: size → singlet → GFP/BFP → high SSC relative to FSC. tcGvpA capped at 12.5 %', zh: '流式：大小→單細胞→GFP/BFP→相對 FSC 的高 SSC。tcGvpA 上限 12.5%' } },
        { l: { en: 'Float, strip, re-add', zh: '浮選、剝除、重加' }, s: { en: '300 × g for 3 h; urea strips GvpC, recombinant variants added back, dialysed', zh: '300×g 離心 3 小時；尿素剝除 GvpC，加回重組變異體後透析' } },
        { l: { en: 'Pressure + ultrasound', zh: '壓力與超音波' }, s: { en: 'PAS (A500 vs hydrostatic pressure, P50 from a logistic fit) · Verasonics xAM 5.2 MHz', zh: 'PAS（A500 對靜水壓、邏輯擬合取 P50）·Verasonics xAM 5.2 MHz' } },
        { l: { en: 'Move the cells', zh: '移動細胞' }, s: { en: 'GvpC-SpyTag + DARPin-SpyCatcher on EGFR; standing-wave lines, ring patterns, spheroids', zh: 'GvpC-SpyTag＋DARPin-SpyCatcher 標靶 EGFR；駐波線、環狀圖樣、球體' } }
      ],
      dry: [
        { l: { en: 'Understand', zh: '理解' }, s: { en: 'CHARMM36 MD of two GvpA ribs; EI from thermal ripples → p_cr = 3EI/sR³', zh: '兩條 GvpA 肋的 CHARMM36 MD；由熱漣漪求 EI→p_cr=3EI/sR³' } },
        { l: { en: 'Measure binding', zh: '量測結合' }, s: { en: 'Steered MD → 25 umbrella windows → WHAM → ΔG; rival water-condensation route tested', zh: '引導式 MD→25 個傘形視窗→WHAM→ΔG；並檢驗水凝結這個競爭機制' } },
        { l: { en: 'Engineer', zh: '工程化' }, s: { en: 'ΔSASA split → LigandMPNN tiers T0–T3 → Boltz-2 + AF2 gate → 200 → 135 → 121', zh: 'ΔSASA 分區→LigandMPNN T0–T3 分級→Boltz-2＋AF2 門檻→200→135→121' } },
        { l: { en: 'Design from scratch', zh: '從零設計' }, s: { en: 'RFdiffusion3 → ProteinMPNN ×8 → AF2 → pLDDT/RMSD/i_pAE; biosensor latch pipeline', zh: 'RFdiffusion3→ProteinMPNN ×8→AF2→pLDDT/RMSD/i_pAE；生物感測器閂鎖流程' } },
        { l: { en: 'Analyse', zh: '分析' }, s: { en: 'GVSAM: CellSAM fine-tuned on 108 own images, F1 0.2 % → 42 % · GAS median/MAD curves', zh: 'GVSAM：以自家 108 張影像微調 CellSAM，F1 0.2%→42%·GAS 中位數/MAD 曲線' }, tone: 'g' }
      ],
      links: [
        { w: 3, d: 0, l: { en: 'measured collapse pressure tests the MD', zh: '實測崩塌壓力檢驗 MD' } },
        { w: 2, d: 2, l: { en: 'gated designs become GvpC variants', zh: '通過門檻的設計變成 GvpC 變異體' }, up: true },
        { w: 1, d: 4, l: { en: 'microscopy images train GVSAM', zh: '顯微影像訓練 GVSAM' } }
      ]
    },
    cornell: {
      wet: [
        { l: { en: 'Design the AND gate', zh: '設計 AND 閘' }, s: { en: 'SnapGene: hypoxia + ROS (pkatG) promoters over SUMO-6xHis-810A', zh: 'SnapGene：缺氧＋ROS（pkatG）啟動子驅動 SUMO-6xHis-810A' } },
        { l: { en: 'Assemble', zh: '組裝' }, s: { en: 'IDT block → overhang PCR → gel extraction → DpnI → NEB HiFi into pUC19 → blue/white', zh: 'IDT 基因片段→重疊 PCR→膠體回收→DpnI→NEB HiFi 接入 pUC19→藍白篩選' } },
        { l: { en: 'Three failed cycles', zh: '三個失敗循環' }, s: { en: 'Reversed gel polarity · 2× EtOH in the wash (A260/230 = 0.6) · dead competent cells · 30 bp promoter deletion', zh: '膠體電極反接·洗滌液乙醇加倍（A260/230=0.6）·勝任細胞失活·啟動子缺失 30 bp' }, tone: 'r' },
        { l: { en: 'Buy the plasmid', zh: '直接買質體' }, s: { en: 'IDT clonal gene in pET; transformation only worked at 45 s heat shock, not 10 s', zh: 'IDT 無性繁殖基因於 pET；熱衝擊 45 秒才成功，10 秒不行' }, tone: 'a' },
        { l: { en: 'Spin cells into fibre', zh: '把細菌紡進纖維' }, s: { en: 'Arachne coaxial electrospinner, alginate core 1–5 wt %, 2 % CaCl₂ crosslink', zh: 'Arachne 同軸靜電紡絲機，海藻酸鈉核心 1–5 wt%，2% CaCl₂ 交聯' } },
        { l: { en: 'Count what survives', zh: '計數存活' }, s: { en: 'CFU/mg at 0–48 h: >3 log lost in day 1, plateau 1–4 CFU/mg. n = 1 mat, and they say so', zh: '0–48 小時 CFU/mg：第一天掉超過 3 個對數，平台 1–4 CFU/mg。n=1，且他們明說' } }
      ],
      dry: [
        { l: { en: 'Production ODE', zh: '生產 ODE' }, s: { en: 'dF/dt = αX − δ_F F', zh: 'dF/dt = αX − δ_F F' } },
        { l: { en: 'Hill induction', zh: 'Hill 誘導' }, s: { en: 'Tet now, ROS/hypoxia later', zh: '先 Tet，之後 ROS／缺氧' } },
        { l: { en: 'Michaelis–Menten', zh: 'Michaelis–Menten' }, s: { en: 'How much SUMO protease, for how long', zh: '用多少 SUMO 蛋白酶、反應多久' } },
        { l: { en: 'Hill–Langmuir', zh: 'Hill–Langmuir' }, s: { en: 'Fit ELISA signal for K_D, n fixed at 1 on purpose', zh: '擬合 ELISA 訊號求 K_D，刻意固定 n=1' } },
        { l: { en: 'Ligand depletion', zh: '配體耗竭' }, s: { en: 'Quadratic form for when [CTGF] ≈ [810A] ≈ K_D', zh: '當 [CTGF]≈[810A]≈K_D 時改用二次式' } },
        { l: { en: 'Network endpoint', zh: '網路終點' }, s: { en: 'STRING v12.5 + HP:0100699, 48 edges → Netflux → COL1A1', zh: 'STRING v12.5＋HP:0100699、48 條邊→Netflux→COL1A1' }, tone: 'g' }
      ],
      links: [
        { w: 5, d: 0, l: { en: 'viability sets the biomass term', zh: '存活率決定生物量項' } },
        { w: 4, d: 3, l: { en: 'every model targets one planned assay', zh: '每個模型對應一個預定的試驗' }, up: true }
      ]
    },
    lyon: {
      wet: [
        { l: { en: 'Verify before scheduling', zh: '排程前先定序' }, s: { en: 'Microsynth on every plasmid; frame-shifting deletions found, QuikChange, re-sequence', zh: '每個質體送 Microsynth；發現移碼缺失，QuikChange 修正後再定序' } },
        { l: { en: 'De-confound the inheritance', zh: '解開上一屆的糾纏' }, s: { en: 'Three separate panels: strain alone, vector+inducer alone, tag alone', zh: '三組獨立比較：只變菌株、只變載體與誘導物、只變標籤' }, tone: 'g' },
        { l: { en: 'One backbone for 15 constructs', zh: '15 個構建體共用骨架' }, s: { en: 'pET-29b(+)/T7/IPTG, NdeI–XhoI for every insert, internal sites checked out', zh: 'pET-29b(+)/T7/IPTG，所有插入都用 NdeI–XhoI，並排除內部切位' } },
        { l: { en: 'Gate on solubility and yield', zh: '以溶解度與產率設門檻' }, s: { en: 'Gate set in advance; DAR3835 117 mg/L, two variants insoluble and dropped, not rescued', zh: '門檻事先定下；DAR3835 117 mg/L，兩個變異體不溶即剔除，不搶救' } },
        { l: { en: 'Validate the assay first', zh: '先驗證試驗本身' }, s: { en: 'Four plate formats compared (volatile substrate); HCl calibration R² = 0.9979', zh: '比較四種讀盤方式（基質易揮發）；HCl 校正 R²=0.9979' } },
        { l: { en: 'Then judge constructs', zh: '然後才評判構建體' }, s: { en: 'nanoDSF K_D ≈ 25 mM; TEV cleavage to ask whether the anchor carried the signal', zh: 'nanoDSF K_D≈25 mM；用 TEV 切割確認訊號是否來自錨定域' } }
      ],
      dry: [
        { l: { en: 'Can the enzyme cleave TFA?', zh: '酵素能切 TFA 嗎？' }, s: { en: 'Protenix on the 8SDC/8SDD scaffold → no: attack geometry, not affinity', zh: '以 8SDC/8SDD 骨架跑 Protenix→否：問題在攻擊幾何而非親和力' }, tone: 'r' },
        { l: { en: 'Design 9 variants', zh: '設計 9 個變異體' }, s: { en: 'Structure-guided; in silico affinity scoring did NOT beat wild type, so nothing was picked on it', zh: '結構導向；計算親和力評分並未勝過野生型，因此不以它選株' } },
        { l: { en: 'Design from scratch', zh: '從零設計' }, s: { en: 'BoltzGen 0.3.2: 10,000 → 5 → 3 binders, both anchor orientations', zh: 'BoltzGen 0.3.2：10,000→5→3 個結合蛋白，兩種錨定方向' } },
        { l: { en: 'Size the filter', zh: '濾床尺寸計算' }, s: { en: 'Packed-bed PDE + LDF + Langmuir, ode15s; BV50 = 14.03 for every geometry', zh: '填充床 PDE＋LDF＋Langmuir，ode15s；各種幾何的 BV50 都是 14.03' } },
        { l: { en: 'Label every number', zh: '標註每個數字' }, s: { en: 'Design choice / computed / placeholder; q_max 25 mg/g placeholder vs 0.135 measured', zh: '設計選擇／計算／暫定值；q_max 暫定 25 mg/g，實測上界 0.135' }, tone: 'g' }
      ],
      links: [
        { w: 5, d: 3, l: { en: 'measured K_D replaces the placeholder', zh: '實測 K_D 取代暫定值' } },
        { w: 2, d: 2, l: { en: 'BoltzGen binders become 6 constructs', zh: 'BoltzGen 結合蛋白變成 6 個構建體' }, up: true },
        { w: 0, d: 0, l: { en: 'the model killed the degradation route', zh: '模型否決了降解路線' }, up: true }
      ]
    }
  };

  var d = {};
  Object.keys(SPECS).forEach(function (k) {
    d['swim-' + k] = function (W) { return swim(W, SPECS[k]); };
  });
  /* allow a page module to register its own swimlane spec */
  d.swim = function (W) { return swim(W, { wet: [], dry: [] }); };
  function register(key, spec) {
    SPECS[key] = spec;
    d['swim-' + key] = function (W) { return swim(W, SPECS[key]); };
  }

  /* ---------------- overview diagrams ---------------- */
  /* the engineering cycle, with where each team's dry lab sits */
  d.dbtl = function (W) {
    var H = W < 560 ? 420 : 330;
    var cx = W < 560 ? W / 2 : W * 0.33, cy = H / 2 - 6, R = Math.min(118, (W < 560 ? W : W * 0.6) / 2 - 36);
    var g = '';
    var steps = [
      { t: { en: 'DESIGN', zh: '設計' }, c: BLUE, s: { en: 'what to build', zh: '要做什麼' } },
      { t: { en: 'BUILD', zh: '建構' }, c: TEAL, s: { en: 'DNA in hand', zh: '拿到 DNA' } },
      { t: { en: 'TEST', zh: '測試' }, c: GREEN, s: { en: 'a number', zh: '一個數字' } },
      { t: { en: 'LEARN', zh: '學習' }, c: AMBER, s: { en: 'what changed', zh: '改變了什麼' } }
    ];
    g += el('circle', { cx: cx, cy: cy, r: R, fill: 'none', stroke: LINE, 'stroke-width': 1.4, 'stroke-dasharray': '3 4' });
    steps.forEach(function (s, i) {
      var a = (i / 4) * Math.PI * 2 - Math.PI / 2;
      var x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      g += el('circle', { cx: x, cy: y, r: 31, fill: '#fff', stroke: s.c, 'stroke-width': 2 });
      g += txt(x, y - 4, T(s.t), { fs: 11, fill: s.c, anchor: 'middle', bl: 'central', fw: 700 });
      g += txt(x, y + 9, T(s.s), { fs: 9, fill: INK3, anchor: 'middle', bl: 'central' });
      var a2 = ((i + 0.5) / 4) * Math.PI * 2 - Math.PI / 2;
      var ax = cx + Math.cos(a2) * R, ay = cy + Math.sin(a2) * R;
      g += el('path', {
        d: 'M' + (ax - Math.sin(a2) * 7) + ' ' + (ay + Math.cos(a2) * 7) +
          'L' + (ax + Math.sin(a2) * 7) + ' ' + (ay - Math.cos(a2) * 7) +
          'L' + (ax + Math.cos(a2) * 11) + ' ' + (ay + Math.sin(a2) * 11) + 'Z',
        fill: '#9FB4CC'
      });
    });
    g += txt(cx, cy - 8, T({ en: 'one cycle', zh: '一個循環' }), { fs: 11.5, fill: INK2, anchor: 'middle', bl: 'central', fw: 650 });
    g += txt(cx, cy + 8, T({ en: '2–6 weeks', zh: '2–6 週' }), { fs: 11.5, fill: INK3, anchor: 'middle', bl: 'central' });
    /* the four places a dry lab can attach */
    var notes = [
      { t: { en: 'Choose the target', zh: '選定標靶' }, s: { en: 'Stanford, UCAS-China, UOttawa', zh: 'Stanford、UCAS-China、UOttawa' }, c: BLUE },
      { t: { en: 'Generate the sequence', zh: '產生序列' }, s: { en: 'Heidelberg, Princeton, LYON', zh: 'Heidelberg、Princeton、LYON' }, c: TEAL },
      { t: { en: 'Turn signal into a number', zh: '把訊號變成數字' }, s: { en: 'Cornell, Heidelberg, LYON', zh: 'Cornell、Heidelberg、LYON' }, c: GREEN },
      { t: { en: 'Explain the surprise', zh: '解釋意外' }, s: { en: 'Princeton, Stanford', zh: 'Princeton、Stanford' }, c: AMBER }
    ];
    if (W >= 560) {
      var bx = cx + R + 54, bw2 = W - bx - 2, yy = 26;
      g += txt(bx, 12, T({ en: 'WHERE THE DRY LAB ATTACHES', zh: '乾式實驗接在哪裡' }), { fs: 10, fill: INK3, fw: 700, ls: '.1em' });
      notes.forEach(function (nn) {
        g += el('rect', { x: bx, y: yy, width: 3, height: 34, rx: 1.5, fill: nn.c });
        g += txt(bx + 11, yy + 11, clip(T(nn.t), 12, bw2 - 14), { fs: 12, fill: INK, fw: 650, bl: 'central' });
        g += txt(bx + 11, yy + 25, clip(T(nn.s), 10.4, bw2 - 14), { fs: 10.4, fill: INK2, bl: 'central' });
        yy += 48;
      });
    } else {
      var yy2 = cy + R + 44;
      notes.forEach(function (nn) {
        g += el('rect', { x: 2, y: yy2, width: 3, height: 30, rx: 1.5, fill: nn.c });
        g += txt(13, yy2 + 10, clip(T(nn.t), 11.6, W - 18), { fs: 11.6, fill: INK, fw: 650, bl: 'central' });
        g += txt(13, yy2 + 23, clip(T(nn.s), 10, W - 18), { fs: 10, fill: INK2, bl: 'central' });
        yy2 += 42;
      });
      H = yy2 + 8;
    }
    return svg(W, H, g);
  };

  /* the measurement ladder: what a team has to own before a number means anything */
  d.ladder = function (W) {
    var rungs = [
      { t: { en: 'A reading exists', zh: '有讀值' }, s: { en: 'An instrument produced a number', zh: '儀器產出了一個數字' }, c: INK3,
        who: { en: 'the floor', zh: '最低標' } },
      { t: { en: 'The reading is calibrated', zh: '讀值有校正' }, s: { en: 'Converted to a unit by a standard curve', zh: '用標準曲線換成單位' }, c: TEAL,
        who: { en: 'LYON: HCl curve, R² = 0.9979 · Princeton: GFP curve', zh: 'LYON：HCl 曲線 R²=0.9979·Princeton：GFP 曲線' } },
      { t: { en: 'The comparison is fair', zh: '比較是公平的' }, s: { en: 'Controls in the same run, not across days', zh: '對照在同一批次內，而非跨日' }, c: BLUE,
        who: { en: 'Stanford: match vs mismatch inside one transfection', zh: 'Stanford：配對與錯配在同一次轉染內' } },
      { t: { en: 'The method can carry the claim', zh: '方法撐得起主張' }, s: { en: 'Assay validated before it judges anything', zh: '在評判任何事之前先驗證試驗' }, c: VIOLET,
        who: { en: 'LYON block 6 · Princeton rebuilt the assay four times', zh: 'LYON 第 6 區塊·Princeton 重做四次量測方法' } },
      { t: { en: 'The uncertainty is published', zh: '不確定性被公開' }, s: { en: 'n, spread, and what would break it', zh: 'n、離散程度、以及什麼會推翻它' }, c: GREEN,
        who: { en: 'Cornell: n = 1 stated · LYON: every parameter labelled', zh: 'Cornell：明寫 n=1·LYON：每個參數都標狀態' } }
    ];
    var pad = 2, y = 10, g = '';
    var narrow = W < 640;
    rungs.forEach(function (r, i) {
      var tl = wrapLines(T(r.t), 13, (narrow ? W - 70 : W * 0.4), 2);
      var sl = wrapLines(T(r.s), 10.8, (narrow ? W - 70 : W * 0.4), 2);
      var wl = wrapLines(T(r.who), 10.4, (narrow ? W - 70 : W * 0.5 - 24), 3);
      var hh = Math.max(tl.length * 16 + sl.length * 13 + 14, narrow ? wl.length * 13 + 22 : 0);
      if (narrow) hh = tl.length * 16 + sl.length * 13 + wl.length * 13 + 20;
      g += el('rect', { x: pad + 24, y: y, width: W - pad - 26, height: hh, rx: 10, fill: TONES.n[0], stroke: 'rgba(16,24,40,.08)' });
      g += el('rect', { x: pad + 24, y: y, width: 3.5, height: hh, rx: 2, fill: r.c });
      g += el('circle', { cx: pad + 12, cy: y + hh / 2, r: 11, fill: r.c });
      g += txt(pad + 12, y + hh / 2 + .5, String(i + 1), { fs: 11, fill: '#fff', anchor: 'middle', bl: 'central', fw: 700 });
      var ty = y + 14;
      tl.forEach(function (l, k) { g += txt(pad + 38, ty + k * 16, l, { fs: 13, fill: INK, fw: 660, bl: 'central' }); });
      ty += tl.length * 16;
      sl.forEach(function (l, k) { g += txt(pad + 38, ty + k * 13, l, { fs: 10.8, fill: INK2, bl: 'central' }); });
      if (narrow) {
        ty += sl.length * 13 + 2;
        wl.forEach(function (l, k) { g += txt(pad + 38, ty + k * 13, l, { fs: 10.4, fill: r.c, bl: 'central', fw: 600 }); });
      } else {
        var wx = pad + 26 + W * 0.46;
        wl.forEach(function (l, k) {
          g += txt(wx, y + hh / 2 - (wl.length - 1) * 6.5 + k * 13, clip(l, 10.4, W - wx - 12), { fs: 10.4, fill: r.c, bl: 'central', fw: 600 });
        });
      }
      y += hh + 9;
    });
    return svg(W, y + 2, g);
  };

  /* how a failure is treated: the four responses we saw */
  d.failure = function (W) {
    var cols = [
      { t: { en: 'Hide it', zh: '藏起來' }, s: { en: 'Not on any of these ten wikis', zh: '這十個 wiki 上都沒有' }, c: ROSE, tone: 'r' },
      { t: { en: 'Report it', zh: '報告它' }, s: { en: 'Cornell lists reversed gel polarity and a mislabelled buffer', zh: 'Cornell 寫出膠體電極反接與緩衝液標錯' }, c: AMBER, tone: 'a' },
      { t: { en: 'Explain it', zh: '解釋它' }, s: { en: 'Princeton models why the Amp:Kan ratio inverted', zh: 'Princeton 建模解釋 Amp:Kan 比值為何反轉' }, c: BLUE, tone: 'b' },
      { t: { en: 'Redesign around it', zh: '據此重新設計' }, s: { en: 'LYON drops degradation for capture; Stanford replaces GC content with folding ΔG', zh: 'LYON 由降解轉為捕捉；Stanford 用折疊 ΔG 取代 GC 含量' }, c: GREEN, tone: 'g' }
    ];
    var narrow = W < 680;
    if (narrow) {
      var y = 6, g2 = '';
      cols.forEach(function (c, i) {
        var b = box(1, y, W - 2, c.t, c.s, c.tone, { n: i + 1 });
        g2 += b.svg; y += b.h + 12;
      });
      g2 += txt(W / 2, y + 2, T({ en: 'value to the next team →', zh: '對下一屆的價值 →' }), { fs: 10.4, fill: INK3, anchor: 'middle', fw: 620 });
      return svg(W, y + 14, g2);
    }
    var n = cols.length, gap = 16, bw = (W - gap * (n - 1)) / n, hh = 0, g = '';
    var ms = cols.map(function (c) { var b = box(0, 0, bw, c.t, c.s, c.tone); hh = Math.max(hh, b.h); return b; });
    cols.forEach(function (c, i) {
      var x = i * (bw + gap);
      g += box(x, 22, bw, c.t, c.s, c.tone, { minH: hh, n: i + 1 }).svg;
      if (i < n - 1) g += arrowH(x + bw + 3, 22 + hh / 2, x + bw + gap - 2);
    });
    g += el('path', { d: 'M0 ' + (hh + 34) + 'H' + W, stroke: LINE, 'stroke-width': 1 });
    g += txt(0, hh + 48, T({ en: 'less useful to the next team', zh: '對下一屆較無用' }), { fs: 10.4, fill: INK3, fw: 620 });
    g += txt(W, hh + 48, T({ en: 'more useful to the next team', zh: '對下一屆較有用' }), { fs: 10.4, fill: GREEN, anchor: 'end', fw: 620 });
    g += txt(W / 2, 11, T({ en: 'WHAT A TEAM DOES WITH A FAILED EXPERIMENT', zh: '一支團隊如何處理失敗的實驗' }), { fs: 10, fill: INK3, anchor: 'middle', fw: 700 });
    return svg(W, hh + 58, g);
  };

  w.WF = { d: d, swim: swim, register: register, box: box, arrowH: arrowH, arrowV: arrowV, svg: svg, SPECS: SPECS };
})(window);
