/* ============================================================
   fig.js — figure engine for the Protein Design Atlas
   Design rules enforced here (see dataviz method):
     · form chosen per data job; categorical hues in FIXED order, never cycled
     · ONE axis per plot — no dual-axis anywhere
     · sequential = one hue light→dark; ordinal ramp starts no lighter than q250
     · bars ≤24px thick, 4px rounded data-end, square at baseline
     · lines 2px, markers r≥4 with a 2px surface ring
     · gridlines/axes: solid 1px, one step off surface, recessive
     · 2px surface gap between touching fills
     · selective direct labels; text never wears the series colour
     · legend present for ≥2 series; every figure ships a table view
       (that table view is also the documented relief for the 3 light-mode
        slots that sit below 3:1 contrast on a white surface)
   Charts are drawn at MEASURED container width so 1 SVG unit = 1 CSS px
   and type never scales down below its intended size.
   ============================================================ */
(function (w) {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';
  var LANG = 'en';
  var N = 0;                    // running figure number
  var DEFS = Object.create(null);
  var ORDER = [];

  /* ---------- tokens (kept in sync with :root in index.html) ---------- */
  var C = {
    s: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948'],
    dim: '#CBD2DB',
    surface: '#FFFFFF',
    grid: '#E6E8EC',
    axis: '#C3C6CC',
    ink: '#10151C',
    ink2: '#525E6E',
    muted: '#898781',
    seq: ['#cde2fb', '#b7d3f6', '#9ec5f4', '#86b6ef', '#6da7ec', '#5598e7', '#3987e5',
          '#2a78d6', '#256abf', '#1c5cab', '#184f95', '#104281', '#0d366b'],
    ord: ['#86b6ef', '#5598e7', '#3987e5', '#2a78d6', '#256abf', '#1c5cab', '#184f95'],
    ok: '#0ca30c', warn: '#fab219', serious: '#ec835a', crit: '#d03b3b'
  };
  /* label ink inside a categorical fill: white, except near-black on yellow */
  function inkOn(hex) { return (hex === '#eda100' || hex === '#fab219') ? '#0b0b0b' : '#ffffff'; }

  /* ---------- tiny helpers ---------- */
  function T(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return String(v[LANG] != null ? v[LANG] : (v.en != null ? v.en : ''));
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* inline markdown for figure prose: **bold**, *em*, `code`, ==highlight==, [text](url) */
  function mdi(v) {
    var s = esc(T(v));
    s = s.replace(/\[([^\]\[]+)\]\(([^)\s]+)\)/g, function (m, t2, u) {
      return '<a href="' + u + '"' + (/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : '') + '>' + t2 + '</a>';
    });
    s = s.replace(/==([^=]+)==/g, '<span class="gt">$1</span>');
    s = s.replace(/\*\*((?:[^*]|\*(?!\*))+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/`([^`]+)`/g, '<code class="mono">$1</code>');
    return s;
  }

  /* approximate rendered text width: CJK glyphs are ~full-em, Latin ~0.54em */
  function tw(str, fs) {
    str = String(str == null ? '' : str);
    var wd = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c > 0x2e7f) wd += 1.0;
      else if (c >= 48 && c <= 57) wd += 0.56;
      else if ('iIlj.,:;\'|!'.indexOf(str[i]) >= 0) wd += 0.3;
      else if ('mwMW'.indexOf(str[i]) >= 0) wd += 0.86;
      else if (str[i] === ' ') wd += 0.28;
      else wd += 0.545;
    }
    return wd * fs;
  }
  function clip(str, fs, maxw) {
    str = String(str == null ? '' : str);
    if (tw(str, fs) <= maxw) return str;
    var lo = 0, hi = str.length;
    while (lo < hi) {
      var mid = (lo + hi + 1) >> 1;
      if (tw(str.slice(0, mid) + '…', fs) <= maxw) lo = mid; else hi = mid - 1;
    }
    return str.slice(0, lo) + '…';
  }
  function wrapLines(str, fs, maxw, maxLines) {
    str = String(str == null ? '' : str);
    var hasSpace = /\s/.test(str.trim());
    var toks = hasSpace ? str.split(/\s+/) : str.split('');
    var lines = [], cur = '';
    for (var i = 0; i < toks.length; i++) {
      var t2 = cur ? (hasSpace ? cur + ' ' + toks[i] : cur + toks[i]) : toks[i];
      if (tw(t2, fs) > maxw && cur) { lines.push(cur); cur = toks[i]; }
      else cur = t2;
      if (maxLines && lines.length === maxLines) break;
    }
    if (cur && (!maxLines || lines.length < maxLines)) lines.push(cur);
    if (maxLines && lines.length >= maxLines) {
      var rest = toks.slice(0).join(hasSpace ? ' ' : '');
      if (tw(rest, fs) > maxw * maxLines) lines[maxLines - 1] = clip(lines[maxLines - 1] + '…', fs, maxw);
    }
    return lines;
  }
  function fmt(v, d) {
    if (v == null || isNaN(v)) return '—';
    if (d != null) return Number(v).toFixed(d);
    var a = Math.abs(v);
    if (a >= 1e9) return (v / 1e9).toFixed(a >= 1e10 ? 0 : 1).replace(/\.0$/, '') + 'B';
    if (a >= 1e6) return (v / 1e6).toFixed(a >= 1e7 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (a >= 1e4) return (v / 1e3).toFixed(0) + 'K';
    if (a >= 1000) return Number(v).toLocaleString('en-US');
    if (a >= 10) return String(Math.round(v * 10) / 10);
    if (a >= 1) return String(Math.round(v * 100) / 100);
    if (a > 0) return String(Number(v.toPrecision(2)));
    return '0';
  }
  function niceTicks(min, max, count) {
    if (max === min) { max = min + 1; }
    var span = max - min, step = Math.pow(10, Math.floor(Math.log10(span / count)));
    var err = (span / count) / step;
    if (err >= 7.5) step *= 10; else if (err >= 3.5) step *= 5; else if (err >= 1.5) step *= 2;
    var t0 = Math.ceil(min / step) * step, out = [];
    for (var v = t0; v <= max + step * 1e-6; v += step) out.push(Math.round(v / step) * step);
    return out;
  }
  function logTicks(min, max) {
    var out = [], e = Math.floor(Math.log10(min));
    for (; e <= Math.ceil(Math.log10(max)); e++) {
      var v = Math.pow(10, e);
      if (v >= min * 0.999 && v <= max * 1.001) out.push(v);
    }
    return out;
  }
  var SUP = { '0':'\u2070','1':'\u00b9','2':'\u00b2','3':'\u00b3','4':'\u2074','5':'\u2075',
              '6':'\u2076','7':'\u2077','8':'\u2078','9':'\u2079','-':'\u207b','.':'\u00b7' };
  /* render an arbitrary exponent as 10^x using superscript glyphs */
  function pow10Label(x) {
    var str = String(Math.round(x * 10) / 10).replace(/\.0$/, '');
    var o = '';
    for (var i = 0; i < str.length; i++) o += (SUP[str[i]] || str[i]);
    return '10' + o;
  }
  function supTxt(v) {
    var e = Math.round(Math.log10(v));
    var sup = String(e).replace(/-/g, '⁻').replace(/0/g, '⁰').replace(/1/g, '¹').replace(/2/g, '²')
      .replace(/3/g, '³').replace(/4/g, '⁴').replace(/5/g, '⁵').replace(/6/g, '⁶')
      .replace(/7/g, '⁷').replace(/8/g, '⁸').replace(/9/g, '⁹');
    return '10' + sup;
  }

  /* ---------- svg string builders ---------- */
  function el(name, attrs, kids) {
    var s = '<' + name;
    for (var k in attrs) {
      if (attrs[k] === null || attrs[k] === undefined || attrs[k] === '') continue;
      s += ' ' + k + '="' + String(attrs[k]).replace(/"/g, '&quot;') + '"';
    }
    if (kids == null || kids === '') return s + '/>';
    return s + '>' + kids + '</' + name + '>';
  }
  /* SVG <text> cannot render markup, so strip inline markdown markers rather than
     printing them literally inside a chart */
  function stripMd(v) {
    return String(v == null ? '' : v)
      .replace(/\*\*((?:[^*]|\*(?!\*))+)\*\*/g, '$1')
      .replace(/(^|[^*])\*([^*]+)\*/g, '$1$2')
      .replace(/==([^=]+)==/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]\[]+)\]\([^)\s]+\)/g, '$1');
  }
  function txt(x, y, s, o) {
    o = o || {};
    s = stripMd(s);
    return el('text', {
      x: x, y: y, fill: o.fill || C.ink2,
      'font-size': o.fs || 12, 'font-weight': o.fw || 500,
      'text-anchor': o.anchor || 'start', 'dominant-baseline': o.bl || 'auto',
      'letter-spacing': o.ls || null,
      'font-variant-numeric': o.tab ? 'tabular-nums' : null,
      'font-family': 'inherit', opacity: o.op || null,
      'data-tip': o.tip || null
    }, esc(s));
  }
  /* bar with 4px rounded data-end, square at baseline */
  function barPath(x, y, bw, bh, r, dir) {
    r = Math.min(r, bh / 2, bw / 2);
    if (dir === 'right') {
      if (bw <= r) return 'M' + x + ' ' + y + 'h' + bw + 'v' + bh + 'h' + (-bw) + 'z';
      return 'M' + x + ' ' + y + 'h' + (bw - r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r +
        'v' + (bh - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + (-r) + ' ' + r + 'h' + (-(bw - r)) + 'z';
    }
    /* up */
    if (bh <= r) return 'M' + x + ' ' + (y + bh) + 'v' + (-bh) + 'h' + bw + 'v' + bh + 'z';
    return 'M' + x + ' ' + (y + bh) + 'v' + (-(bh - r)) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + (-r) +
      'h' + (bw - 2 * r) + 'a' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + r + 'v' + (bh - r) + 'z';
  }

  /* =========================================================
     KIND: bars — horizontal, ranked, ONE hue (or emphasis)
     spec.data = [{label:{en,zh}, v:Number, note?:{en,zh}, color?:'s3'|'#hex'}]
     opts: {unit, log, dec, emphasis:index, max, xlabel}
     ========================================================= */
  function drawBars(sp, W) {
    var d = sp.data, o = sp.opts || {};
    var fs = 12.5, lfs = 12.5;
    var labw = Math.min(Math.max(100, Math.round(W * 0.38)), 340);
    d.forEach(function (r) { labw = Math.max(labw, 0); });
    var vfsW = 54;
    var padL = labw + 12, padR = vfsW + 8, padT = o.xlabel ? 8 : 4, padB = 26;
    var bh = Math.min(22, Math.max(13, Math.round(240 / d.length)));
    var gap = Math.max(10, Math.round(bh * 0.62));
    var row = bh + gap;
    var H = padT + d.length * row + padB;
    var pw = Math.max(80, W - padL - padR);
    var vals = d.map(function (r) { return +r.v; });
    var mx = o.max != null ? o.max : Math.max.apply(null, vals);
    var isLog = !!o.log;
    var mn = isLog ? Math.max(1e-12, Math.min.apply(null, vals.filter(function (v) { return v > 0; })) / 3) : 0;
    if (isLog) { mn = Math.pow(10, Math.floor(Math.log10(mn))); mx = Math.pow(10, Math.ceil(Math.log10(mx))); }
    function X(v) {
      if (!isLog) return pw * Math.max(0, v) / (mx || 1);
      if (v <= 0) return 0;
      return pw * (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn));
    }
    var g = '';
    var ticks = isLog ? logTicks(mn, mx) : niceTicks(0, mx, Math.max(3, Math.round(pw / 110)));
    if (!isLog && ticks[0] !== 0) ticks.unshift(0);
    ticks.forEach(function (t) {
      var x = padL + X(t);
      g += el('line', { x1: x, y1: padT, x2: x, y2: padT + d.length * row - gap + 2, stroke: C.grid, 'stroke-width': 1 });
      g += txt(x, H - 10, isLog ? supTxt(t) : (o.pow10 ? pow10Label(t) : fmt(t)),
        { fs: 11, fill: C.muted, anchor: 'middle', tab: 1 });
    });
    if (o.xlabel) g += txt(padL, H - 10 + 14, T(o.xlabel), { fs: 11, fill: C.muted });
    d.forEach(function (r, i) {
      var y = padT + i * row;
      var hue = o.emphasis != null ? (i === o.emphasis ? C.s[0] : C.dim)
        : (r.color ? (r.color.charAt(0) === '#' ? r.color : C.s[+r.color.slice(1) - 1]) : C.s[0]);
      var bw = Math.max(isLog ? 0 : 2, X(+r.v));
      var tip = '<b>' + esc(T(r.label)) + '</b>' +
        esc((o.pow10 ? pow10Label(r.v) : fmt(r.v, o.dec)) + (o.unit ? ' ' + T(o.unit) : ''))
        + (r.note ? '<span><br>' + esc(T(r.note)) + '</span>' : '');
      g += el('path', { d: barPath(padL, y, bw, bh, 4, 'right'), fill: hue, 'data-tip': tip });
      var lab = clip(T(r.label), lfs, labw);
      g += txt(padL - 10, y + bh / 2, lab, { fs: lfs, fill: C.ink2, anchor: 'end', bl: 'central', fw: 530, tip: tip });
      var vlabel = o.pow10 ? pow10Label(r.v) : fmt(r.v, o.dec) + (o.suffix ? T(o.suffix) : '');
      g += txt(padL + bw + 7, y + bh / 2, vlabel,
        { fs: 12, fill: C.ink, anchor: 'start', bl: 'central', fw: 650, tab: o.pow10 ? 0 : 1 });
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: cols — vertical columns, grouped or stacked
     spec.data = {cats:[{en,zh}|str], series:[{name:{},v:[..],slot:1..8}]}
     opts:{stacked, unit, log, dec, labelLast, ymax}
     ========================================================= */
  function drawCols(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var cats = dd.cats, S = dd.series;
    var padL = 46, padR = 14, padT = 10, padB = 42;
    var H = o.height || 268;
    var pw = Math.max(60, W - padL - padR), ph = H - padT - padB;
    var stacked = !!o.stacked;
    var tot = cats.map(function (_, i) {
      return stacked ? S.reduce(function (a, s) { return a + (+s.v[i] || 0); }, 0)
        : Math.max.apply(null, S.map(function (s) { return +s.v[i] || 0; }));
    });
    var mx = o.ymax != null ? o.ymax : Math.max.apply(null, tot);
    var isLog = !!o.log;
    var mn = 0;
    if (isLog) {
      var pos = [];
      S.forEach(function (s) { s.v.forEach(function (v) { if (v > 0) pos.push(v); }); });
      mn = Math.pow(10, Math.floor(Math.log10(Math.min.apply(null, pos))));
      mx = Math.pow(10, Math.ceil(Math.log10(mx)));
    }
    function Y(v) {
      if (!isLog) return ph * (1 - Math.max(0, v) / (mx || 1));
      if (v <= 0) return ph;
      return ph * (1 - (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)));
    }
    var band = pw / cats.length;
    var g = '';
    var ticks = isLog ? logTicks(mn, mx) : niceTicks(0, mx, Math.max(3, Math.round(ph / 56)));
    if (!isLog && ticks[0] !== 0) ticks.unshift(0);
    ticks.forEach(function (t) {
      var y = padT + Y(t);
      g += el('line', { x1: padL, y1: y, x2: padL + pw, y2: y, stroke: C.grid, 'stroke-width': 1 });
      g += txt(padL - 8, y, isLog ? supTxt(t) : fmt(t), { fs: 11, fill: C.muted, anchor: 'end', bl: 'central', tab: 1 });
    });
    g += el('line', { x1: padL, y1: padT + ph, x2: padL + pw, y2: padT + ph, stroke: C.axis, 'stroke-width': 1 });
    var nS = S.length;
    var cw = stacked ? Math.min(24, band * 0.58) : Math.min(22, (band * 0.72) / nS);
    cats.forEach(function (c, i) {
      var cx = padL + band * (i + .5);
      if (stacked) {
        var acc = 0;
        for (var k = S.length - 1; k >= 0; k--) {
          var v = +S[k].v[i] || 0; if (!v) continue;
          var y0 = padT + Y(acc + v), y1 = padT + Y(acc);
          var hh = Math.max(1, y1 - y0 - (acc > 0 ? 2 : 0));  /* 2px surface gap */
          var hue = C.s[(S[k].slot || k + 1) - 1];
          g += el('path', {
            d: barPath(cx - cw / 2, y0, cw, hh, k === S.length - 1 ? 4 : 0, 'up'), fill: hue,
            'data-tip': '<b>' + esc(T(c)) + ' · ' + esc(T(S[k].name)) + '</b>' + esc(fmt(v, o.dec) + (o.unit ? ' ' + T(o.unit) : ''))
          });
          acc += v;
        }
      } else {
        S.forEach(function (s, k) {
          var v = +s.v[i] || 0;
          var x = cx - (nS * cw + (nS - 1) * 2) / 2 + k * (cw + 2);
          var y = padT + Y(v), hh = Math.max(1, padT + ph - y);
          g += el('path', {
            d: barPath(x, y, cw, hh, 4, 'up'), fill: C.s[(s.slot || k + 1) - 1],
            'data-tip': '<b>' + esc(T(c)) + ' · ' + esc(T(s.name)) + '</b>' + esc(fmt(v, o.dec) + (o.unit ? ' ' + T(o.unit) : ''))
          });
          if (o.labelAll || (o.labelLast && i === cats.length - 1)) {
            g += txt(x + cw / 2, y - 6, fmt(v, o.dec), { fs: 11, fill: C.ink, anchor: 'middle', fw: 650, tab: 1 });
          }
        });
      }
      var ls = wrapLines(T(c), 11, band - 4, 2);
      ls.forEach(function (l, li) {
        g += txt(cx, padT + ph + 15 + li * 12.5, l, { fs: 11, fill: C.ink2, anchor: 'middle' });
      });
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: line — multi-series, 2px, endpoint labels
     spec.data = {x:[...], series:[{name,v:[...],slot}]}
     ========================================================= */
  function drawLine(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var padL = 50, padR = o.endLabels === false ? 16 : Math.min(118, Math.max(60, W * 0.17)), padT = 12, padB = 36;
    var H = o.height || 272;
    var pw = Math.max(60, W - padL - padR), ph = H - padT - padB;
    var xs = dd.x, S = dd.series;
    var allv = [];
    S.forEach(function (s) { s.v.forEach(function (v) { if (v != null) allv.push(+v); }); });
    var isLog = !!o.log;
    var mx = o.ymax != null ? o.ymax : Math.max.apply(null, allv);
    var mn = o.ymin != null ? o.ymin : (isLog ? Math.min.apply(null, allv.filter(function (v) { return v > 0; })) : 0);
    if (isLog) { mn = Math.pow(10, Math.floor(Math.log10(mn))); mx = Math.pow(10, Math.ceil(Math.log10(mx))); }
    else if (o.ymin == null) { mn = 0; }
    function X(i) { return padL + (xs.length < 2 ? pw / 2 : pw * i / (xs.length - 1)); }
    function Y(v) {
      if (isLog) return padT + ph * (1 - (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)));
      return padT + ph * (1 - (v - mn) / ((mx - mn) || 1));
    }
    var g = '';
    var ticks = isLog ? logTicks(mn, mx) : niceTicks(mn, mx, Math.max(3, Math.round(ph / 54)));
    ticks.forEach(function (t) {
      var y = Y(t);
      g += el('line', { x1: padL, y1: y, x2: padL + pw, y2: y, stroke: C.grid, 'stroke-width': 1 });
      g += txt(padL - 8, y, isLog ? supTxt(t) : fmt(t), { fs: 11, fill: C.muted, anchor: 'end', bl: 'central', tab: 1 });
    });
    g += el('line', { x1: padL, y1: padT + ph, x2: padL + pw, y2: padT + ph, stroke: C.axis, 'stroke-width': 1 });
    var every = Math.ceil(xs.length / Math.max(2, Math.floor(pw / 52)));
    xs.forEach(function (xv, i) {
      if (i % every && i !== xs.length - 1) return;
      g += txt(X(i), padT + ph + 16, T(xv), { fs: 11, fill: C.ink2, anchor: 'middle', tab: 1 });
    });
    S.forEach(function (s, k) {
      var hue = C.s[(s.slot || k + 1) - 1];
      var dpath = '', started = false, last = -1;
      s.v.forEach(function (v, i) {
        if (v == null) { started = false; return; }
        dpath += (started ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(+v).toFixed(1);
        started = true; last = i;
      });
      if (o.area && S.length === 1) {
        g += el('path', {
          d: dpath + 'L' + X(last) + ' ' + (padT + ph) + 'L' + X(0) + ' ' + (padT + ph) + 'Z',
          fill: hue, opacity: .1
        });
      }
      g += el('path', { d: dpath, fill: 'none', stroke: hue, 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' });
      s.v.forEach(function (v, i) {
        if (v == null) return;
        g += el('circle', {
          cx: X(i), cy: Y(+v), r: 4.5, fill: hue, stroke: C.surface, 'stroke-width': 2,
          'data-tip': '<b>' + esc(T(xs[i]) + ' · ' + T(s.name)) + '</b>' + esc(fmt(v, o.dec) + (o.unit ? ' ' + T(o.unit) : ''))
        });
      });
      if (o.endLabels !== false && last >= 0) {
        var nm = clip(T(s.name), 11.5, padR - 14);
        g += txt(X(last) + 10, Y(+s.v[last]), nm, { fs: 11.5, fill: C.ink2, bl: 'central', fw: 600 });
      }
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: matrix — heatmap, sequential one-hue ramp
     spec.data = {rows:[{en,zh}], cols:[{en,zh}], v:[[..]]}
     opts:{vmax, scaleLabel, cellLabels}
     ========================================================= */
  function drawMatrix(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var rl = Math.min(Math.max(96, W * 0.26), 240);
    var padL = rl + 10, padR = 8, padT = 44, padB = 34;
    var cw = Math.max(34, (W - padL - padR) / dd.cols.length);
    var ch = o.cell || 30;
    var H = padT + dd.rows.length * ch + padB;
    var mx = o.vmax != null ? o.vmax : Math.max.apply(null, dd.v.map(function (r) { return Math.max.apply(null, r.map(function (x) { return x == null ? 0 : x; })); }));
    var g = '';
    dd.cols.forEach(function (c, j) {
      var x = padL + cw * (j + .5);
      var ls = wrapLines(T(c), 10.6, cw + 14, 3);
      ls.forEach(function (l, li) { g += txt(x, padT - 10 - (ls.length - 1 - li) * 11.5, l, { fs: 10.6, fill: C.ink2, anchor: 'middle', fw: 600 }); });
    });
    dd.rows.forEach(function (r, i) {
      var y = padT + i * ch;
      g += txt(padL - 10, y + ch / 2, clip(T(r), 11.6, rl), { fs: 11.6, fill: C.ink2, anchor: 'end', bl: 'central', fw: 530 });
      dd.cols.forEach(function (c, j) {
        var v = dd.v[i] ? dd.v[i][j] : null;
        var fill = C.grid;
        if (v != null) {
          var idx = Math.round((C.seq.length - 1) * Math.min(1, Math.max(0, v / (mx || 1))));
          fill = C.seq[idx];
        }
        g += el('rect', {
          x: padL + cw * j + 1, y: y + 1, width: cw - 2, height: ch - 2, rx: 4, fill: fill,
          'data-tip': '<b>' + esc(T(r) + ' × ' + T(c)) + '</b>' + (v == null ? '—' : esc(fmt(v, o.dec) + (o.unit ? ' ' + T(o.unit) : '')))
        });
        if (o.cellLabels && v != null) {
          var strong = (v / (mx || 1)) > .62;
          g += txt(padL + cw * (j + .5), y + ch / 2, fmt(v, o.dec), { fs: 10.8, fill: strong ? '#fff' : C.ink2, anchor: 'middle', bl: 'central', fw: 650, tab: 1 });
        }
      });
    });
    /* scale legend */
    var sx = padL, sy = H - 18, sw = Math.min(170, cw * dd.cols.length * .6);
    for (var k = 0; k < C.seq.length; k++) {
      g += el('rect', { x: sx + (sw / C.seq.length) * k, y: sy, width: sw / C.seq.length + .6, height: 8, fill: C.seq[k] });
    }
    g += txt(sx - 6, sy + 4, '0', { fs: 10.4, fill: C.muted, anchor: 'end', bl: 'central', tab: 1 });
    g += txt(sx + sw + 6, sy + 4, fmt(mx, o.dec) + (o.scaleLabel ? ' ' + T(o.scaleLabel) : ''), { fs: 10.4, fill: C.muted, bl: 'central', tab: 1 });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: funnel — ordered stages, ordinal ramp
     spec.data = [{label,v,note}]
     ========================================================= */
  function drawFunnel(sp, W) {
    var d = sp.data, o = sp.opts || {};
    var padL = 8, padR = 8, padT = 6;
    var rowh = 52, H = padT + d.length * rowh + 10;
    var pw = W - padL - padR;
    var mx = Math.max.apply(null, d.map(function (r) { return +r.v; }));
    var isLog = !!o.log;
    var mn = isLog ? Math.pow(10, Math.floor(Math.log10(Math.min.apply(null, d.map(function (r) { return Math.max(1e-9, +r.v); }))))) : 0;
    var g = '';
    d.forEach(function (r, i) {
      var y = padT + i * rowh;
      var frac = isLog
        ? (Math.log10(Math.max(1e-9, +r.v)) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn))
        : (+r.v) / (mx || 1);
      var bw = Math.max(46, pw * Math.max(.02, frac));
      var hue = C.ord[Math.min(C.ord.length - 1, i)];
      g += el('path', {
        d: barPath(padL, y + 20, bw, 26, 4, 'right'), fill: hue,
        'data-tip': '<b>' + esc(T(r.label)) + '</b>' + esc(fmt(r.v, o.dec) + (o.unit ? ' ' + T(o.unit) : '')) + (r.note ? '<span><br>' + esc(T(r.note)) + '</span>' : '')
      });
      g += txt(padL + 2, y + 13, T(r.label), { fs: 12.4, fill: C.ink2, fw: 600 });
      var vlab = fmt(r.v, o.dec) + (o.suffix ? T(o.suffix) : '');
      var inside = tw(vlab, 12) + 20 < bw;
      g += txt(inside ? padL + bw - 10 : padL + bw + 8, y + 33, vlab,
        { fs: 12, fill: inside ? inkOn(hue) : C.ink, anchor: inside ? 'end' : 'start', bl: 'central', fw: 680, tab: 1 });
      if (r.note) g += txt(padL + bw + (inside ? 10 : 12 + tw(vlab, 12)), y + 33, clip(T(r.note), 11.4, pw - bw - 30), { fs: 11.4, fill: C.muted, bl: 'central' });
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: segbar — ONE whole split into ≤6 parts (tall, 28px)
     spec.data=[{label,v,slot}]
     ========================================================= */
  function drawSeg(sp, W) {
    var d = sp.data, o = sp.opts || {};
    var tot = d.reduce(function (a, r) { return a + (+r.v); }, 0);
    var H = 46, y = 8, pw = W - 2;
    var g = '', x = 1;
    d.forEach(function (r, i) {
      var bw = pw * (+r.v) / tot;
      var hue = C.s[(r.slot || i + 1) - 1];
      var seg = Math.max(0, bw - (i < d.length - 1 ? 2 : 0));
      if (seg <= 0) return;
      g += el('rect', {
        x: x, y: y, width: seg, height: 28, rx: 4, fill: hue,
        'data-tip': '<b>' + esc(T(r.label)) + '</b>' + esc(fmt(r.v, o.dec) + (o.unit ? ' ' + T(o.unit) : '')) + ' · ' + Math.round(100 * r.v / tot) + '%'
      });
      var lab = o.showAmount ? fmt(r.v, o.dec) : (Math.round(100 * r.v / tot) + '%');
      if (tw(lab, 12) + 16 < seg) {
        g += txt(x + 8, y + 14, lab, { fs: 12, fill: inkOn(hue), bl: 'central', fw: 680, tab: 1 });
      }
      x += bw;
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: dumbbell — before → after per item
     spec.data=[{label,a,b}] opts:{aName,bName,unit}
     ========================================================= */
  function drawDumb(sp, W) {
    var d = sp.data, o = sp.opts || {};
    var labw = Math.min(Math.max(100, W * 0.3), 250);
    var padL = labw + 12, padR = 52, padT = 8, padB = 28;
    var row = 34, H = padT + d.length * row + padB;
    var pw = Math.max(60, W - padL - padR);
    var all = [];
    d.forEach(function (r) { all.push(+r.a, +r.b); });
    var isLog = !!o.log;
    var mx = Math.max.apply(null, all), mn = isLog ? Math.min.apply(null, all) : 0;
    if (isLog) { mn = Math.pow(10, Math.floor(Math.log10(mn))); mx = Math.pow(10, Math.ceil(Math.log10(mx))); }
    function X(v) {
      if (isLog) return padL + pw * (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn));
      return padL + pw * (v - mn) / ((mx - mn) || 1);
    }
    var g = '';
    (isLog ? logTicks(mn, mx) : niceTicks(mn, mx, 4)).forEach(function (t) {
      g += el('line', { x1: X(t), y1: padT, x2: X(t), y2: padT + d.length * row - 8, stroke: C.grid, 'stroke-width': 1 });
      g += txt(X(t), H - 10, isLog ? supTxt(t) : fmt(t), { fs: 11, fill: C.muted, anchor: 'middle', tab: 1 });
    });
    d.forEach(function (r, i) {
      var y = padT + i * row + row / 2 - 4;
      g += txt(padL - 10, y, clip(T(r.label), 12.2, labw), { fs: 12.2, fill: C.ink2, anchor: 'end', bl: 'central', fw: 530 });
      g += el('line', { x1: X(+r.a), y1: y, x2: X(+r.b), y2: y, stroke: C.seq[3], 'stroke-width': 2 });
      g += el('circle', { cx: X(+r.a), cy: y, r: 5, fill: C.seq[3], stroke: C.surface, 'stroke-width': 2, 'data-tip': '<b>' + esc(T(o.aName || 'A') + ' · ' + T(r.label)) + '</b>' + esc(fmt(r.a, o.dec)) });
      g += el('circle', { cx: X(+r.b), cy: y, r: 5.5, fill: C.seq[8], stroke: C.surface, 'stroke-width': 2, 'data-tip': '<b>' + esc(T(o.bName || 'B') + ' · ' + T(r.label)) + '</b>' + esc(fmt(r.b, o.dec)) });
      g += txt(Math.max(X(+r.a), X(+r.b)) + 10, y, fmt(r.b, o.dec), { fs: 11.6, fill: C.ink, bl: 'central', fw: 650, tab: 1 });
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: tree — method family tree (columns of nodes + edges)
     spec.data = {cols:[{head:{en,zh},nodes:[{id,label,sub,tone}]}], edges:[[from,to]]}
     ========================================================= */
  function drawTree(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var nc = dd.cols.length;
    var gapx = 16;
    var cw = Math.max(118, (W - gapx * (nc - 1)) / nc);
    var totalW = cw * nc + gapx * (nc - 1);
    var scale = totalW > W ? W / totalW : 1;
    var nodeH = 44, gapy = 12, headH = 26;
    var maxN = Math.max.apply(null, dd.cols.map(function (c) { return c.nodes.length; }));
    var H = headH + maxN * (nodeH + gapy) + 14;
    var pos = {};
    var g = '', gnodes = '';
    dd.cols.forEach(function (col, ci) {
      var x = ci * (cw + gapx);
      g += txt(x + cw / 2, 12, T(col.head), { fs: 10.8, fill: C.muted, anchor: 'middle', fw: 700, ls: '.08em' });
      var n = col.nodes.length;
      var off = (maxN - n) * (nodeH + gapy) / 2;
      col.nodes.forEach(function (nd, i) {
        var y = headH + off + i * (nodeH + gapy);
        pos[nd.id] = { x: x, y: y, w: cw, h: nodeH };
        var tone = nd.tone || 'b';
        var fill = tone === 'g' ? '#E8F8F1' : tone === 'v' ? 'rgba(124,92,255,.08)' : tone === 'a' ? 'rgba(224,135,0,.09)' : tone === 'n' ? '#F6F8FA' : 'rgba(1,103,239,.07)';
        var ring = tone === 'g' ? 'rgba(0,168,107,.3)' : tone === 'v' ? 'rgba(124,92,255,.28)' : tone === 'a' ? 'rgba(224,135,0,.3)' : tone === 'n' ? 'rgba(16,24,40,.1)' : 'rgba(1,103,239,.26)';
        gnodes += el('rect', { x: x, y: y, width: cw, height: nodeH, rx: 9, fill: fill, stroke: ring, 'stroke-width': 1, 'data-tip': nd.tip ? '<b>' + esc(T(nd.label)) + '</b>' + esc(T(nd.tip)) : null });
        var ls = wrapLines(T(nd.label), 11.8, cw - 16, 2);
        var y0 = y + (nd.sub ? 15 : nodeH / 2 - (ls.length - 1) * 6.5);
        ls.forEach(function (l, li) { gnodes += txt(x + cw / 2, y0 + li * 13, l, { fs: 11.8, fill: C.ink, anchor: 'middle', bl: 'central', fw: 650 }); });
        if (nd.sub) gnodes += txt(x + cw / 2, y + nodeH - 13, clip(T(nd.sub), 10.4, cw - 12), { fs: 10.4, fill: C.ink2, anchor: 'middle', bl: 'central' });
      });
    });
    (dd.edges || []).forEach(function (e) {
      var a = pos[e[0]], b = pos[e[1]];
      if (!a || !b) return;
      var x1 = a.x + a.w, y1 = a.y + a.h / 2, x2 = b.x, y2 = b.y + b.h / 2;
      var mid = (x1 + x2) / 2;
      g += el('path', {
        d: 'M' + x1 + ' ' + y1 + 'C' + mid + ' ' + y1 + ',' + mid + ' ' + y2 + ',' + (x2 - 4) + ' ' + y2,
        fill: 'none', stroke: e[2] === 'd' ? C.axis : '#9FB4CC', 'stroke-width': 1.4,
        'stroke-dasharray': e[2] === 'd' ? '3 3' : null
      });
      g += el('circle', { cx: x2 - 3, cy: y2, r: 2.4, fill: '#9FB4CC' });
    });
    var inner = g + gnodes;
    if (scale < 1) inner = el('g', { transform: 'scale(' + scale.toFixed(4) + ')' }, inner);
    return { svg: inner, W: W, H: Math.ceil(H * scale) };
  }

  /* =========================================================
     KIND: flow — left→right or top→down pipeline of stages
     spec.data = {stages:[{label,sub,tone,items:[]}], loop?:{label}}
     ========================================================= */
  function drawFlow(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var st = dd.stages, n = st.length;
    var vertical = W < 700 || o.vertical;
    var g = '';
    if (!vertical) {
      var gap = 26, bw = (W - gap * (n - 1)) / n;
      var bh = 0;
      var metas = st.map(function (s) {
        var ls = wrapLines(T(s.label), 12.6, bw - 20, 2);
        var subl = s.sub ? wrapLines(T(s.sub), 11, bw - 20, 3) : [];
        var items = s.items || [];
        var h = 16 + ls.length * 15 + (subl.length ? 4 + subl.length * 13.5 : 0) + (items.length ? 6 + items.length * 14 : 0) + 14;
        bh = Math.max(bh, h);
        return { ls: ls, subl: subl, items: items };
      });
      var H = bh + (dd.loop ? 52 : 14) + 6;
      st.forEach(function (s, i) {
        var x = i * (bw + gap), m = metas[i];
        var tone = s.tone || 'b';
        var fill = tone === 'g' ? '#E8F8F1' : tone === 'v' ? 'rgba(124,92,255,.08)' : tone === 'a' ? 'rgba(224,135,0,.09)' : tone === 'n' ? '#F6F8FA' : 'rgba(1,103,239,.07)';
        var ring = tone === 'g' ? 'rgba(0,168,107,.32)' : tone === 'v' ? 'rgba(124,92,255,.3)' : tone === 'a' ? 'rgba(224,135,0,.32)' : tone === 'n' ? 'rgba(16,24,40,.1)' : 'rgba(1,103,239,.28)';
        g += el('rect', { x: x, y: 4, width: bw, height: bh, rx: 11, fill: fill, stroke: ring, 'stroke-width': 1 });
        g += el('circle', { cx: x + 17, cy: 20, r: 9.5, fill: tone === 'g' ? '#00A86B' : tone === 'v' ? '#7C5CFF' : tone === 'a' ? '#E08700' : tone === 'n' ? '#8792A3' : '#0167EF' });
        g += txt(x + 17, 20.5, String(i + 1), { fs: 10.6, fill: '#fff', anchor: 'middle', bl: 'central', fw: 700 });
        var yy = 16;
        m.ls.forEach(function (l, li) { g += txt(x + 33, yy + li * 15, l, { fs: 12.6, fill: C.ink, fw: 660, bl: 'central' }); });
        yy += m.ls.length * 15 + 4;
        m.subl.forEach(function (l, li) { g += txt(x + 12, yy + li * 13.5, l, { fs: 11, fill: C.ink2, bl: 'central' }); });
        yy += m.subl.length * 13.5 + (m.subl.length ? 7 : 0);
        m.items.forEach(function (it, li) {
          g += el('circle', { cx: x + 15, cy: yy + li * 14 - 1, r: 2, fill: C.axis });
          g += txt(x + 22, yy + li * 14, clip(T(it), 10.8, bw - 32), { fs: 10.8, fill: C.ink2, bl: 'central' });
        });
        if (i < n - 1) {
          var ax = x + bw + 5, ay = 4 + bh / 2;
          g += el('path', { d: 'M' + ax + ' ' + ay + 'h' + (gap - 14), stroke: '#9FB4CC', 'stroke-width': 1.6 });
          g += el('path', { d: 'M' + (ax + gap - 13) + ' ' + (ay - 4) + 'l5 4-5 4z', fill: '#9FB4CC' });
        }
      });
      if (dd.loop) {
        var y0 = bh + 10, lx1 = (bw) * .5, lx2 = W - bw * .5;
        g += el('path', { d: 'M' + lx2 + ' ' + (4 + bh) + 'V' + (y0 + 26) + 'H' + lx1 + 'V' + (4 + bh + 4), fill: 'none', stroke: '#00A86B', 'stroke-width': 1.6, 'stroke-dasharray': '4 4' });
        g += el('path', { d: 'M' + (lx1 - 4) + ' ' + (4 + bh + 6) + 'l4-6 4 6z', fill: '#00A86B' });
        var lt = T(dd.loop.label);
        var ltw = tw(lt, 11) + 18;
        g += el('rect', { x: (W - ltw) / 2, y: y0 + 16, width: ltw, height: 20, rx: 10, fill: '#E8F8F1', stroke: 'rgba(0,168,107,.3)' });
        g += txt(W / 2, y0 + 26, lt, { fs: 11, fill: '#067a51', anchor: 'middle', bl: 'central', fw: 650 });
      }
      return { svg: g, W: W, H: H };
    }
    /* vertical stack */
    var yy2 = 4, gV = '';
    st.forEach(function (s, i) {
      var ls = wrapLines(T(s.label), 12.6, W - 60, 2);
      var subl = s.sub ? wrapLines(T(s.sub), 11, W - 44, 4) : [];
      var items = s.items || [];
      var h = 16 + ls.length * 15 + (subl.length ? 4 + subl.length * 13.5 : 0) + (items.length ? 6 + items.length * 14 : 0) + 12;
      var tone = s.tone || 'b';
      var fill = tone === 'g' ? '#E8F8F1' : tone === 'v' ? 'rgba(124,92,255,.08)' : tone === 'a' ? 'rgba(224,135,0,.09)' : tone === 'n' ? '#F6F8FA' : 'rgba(1,103,239,.07)';
      var ring = tone === 'g' ? 'rgba(0,168,107,.32)' : tone === 'v' ? 'rgba(124,92,255,.3)' : tone === 'a' ? 'rgba(224,135,0,.32)' : tone === 'n' ? 'rgba(16,24,40,.1)' : 'rgba(1,103,239,.28)';
      gV += el('rect', { x: 1, y: yy2, width: W - 2, height: h, rx: 11, fill: fill, stroke: ring, 'stroke-width': 1 });
      gV += el('circle', { cx: 18, cy: yy2 + 16, r: 9.5, fill: tone === 'g' ? '#00A86B' : tone === 'v' ? '#7C5CFF' : tone === 'a' ? '#E08700' : tone === 'n' ? '#8792A3' : '#0167EF' });
      gV += txt(18, yy2 + 16.5, String(i + 1), { fs: 10.6, fill: '#fff', anchor: 'middle', bl: 'central', fw: 700 });
      var cy = yy2 + 12;
      ls.forEach(function (l, li) { gV += txt(34, cy + li * 15, l, { fs: 12.6, fill: C.ink, fw: 660, bl: 'central' }); });
      cy += ls.length * 15 + 4;
      subl.forEach(function (l, li) { gV += txt(13, cy + li * 13.5, l, { fs: 11, fill: C.ink2, bl: 'central' }); });
      cy += subl.length * 13.5 + (subl.length ? 7 : 0);
      items.forEach(function (it, li) {
        gV += el('circle', { cx: 16, cy: cy + li * 14 - 1, r: 2, fill: C.axis });
        gV += txt(23, cy + li * 14, clip(T(it), 10.8, W - 36), { fs: 10.8, fill: C.ink2, bl: 'central' });
      });
      yy2 += h;
      if (i < n - 1) {
        gV += el('path', { d: 'M' + (W / 2) + ' ' + (yy2 + 2) + 'v12', stroke: '#9FB4CC', 'stroke-width': 1.6 });
        gV += el('path', { d: 'M' + (W / 2 - 4) + ' ' + (yy2 + 13) + 'l4 5 4-5z', fill: '#9FB4CC' });
        yy2 += 22;
      }
    });
    return { svg: gV, W: W, H: yy2 + 6 };
  }

  /* =========================================================
     KIND: gantt — roadmap bars over a year axis
     spec.data=[{label, start, end, tone, note}] opts:{min,max}
     ========================================================= */
  function drawGantt(sp, W) {
    var d = sp.data, o = sp.opts || {};
    var labw = Math.min(Math.max(120, W * 0.3), 270);
    var padL = labw + 12, padR = 10, padT = 24, padB = 10;
    var row = 34, H = padT + d.length * row + padB;
    var pw = Math.max(80, W - padL - padR);
    var mn = o.min, mx = o.max;
    function X(v) { return padL + pw * (v - mn) / ((mx - mn) || 1); }
    var g = '';
    for (var y = Math.ceil(mn); y <= mx; y++) {
      g += el('line', { x1: X(y), y1: padT - 8, x2: X(y), y2: padT + d.length * row - 10, stroke: C.grid, 'stroke-width': 1 });
      g += txt(X(y), padT - 14, String(y), { fs: 11, fill: C.muted, anchor: 'middle', tab: 1 });
    }
    d.forEach(function (r, i) {
      var yy = padT + i * row;
      g += txt(padL - 10, yy + 12, clip(T(r.label), 12.2, labw), { fs: 12.2, fill: C.ink2, anchor: 'end', bl: 'central', fw: 560 });
      var x1 = X(+r.start), x2 = X(+r.end);
      var tone = r.tone || 'b';
      var fill = tone === 'g' ? C.s[2] : tone === 'a' ? C.s[3] : tone === 'v' ? C.s[6] : tone === 'r' ? C.s[7] : C.s[0];
      g += el('path', {
        d: barPath(x1, yy + 2, Math.max(8, x2 - x1), 20, 4, 'right'), fill: fill, opacity: .92,
        'data-tip': '<b>' + esc(T(r.label)) + '</b>' + esc(r.start + '–' + r.end) + (r.note ? '<span><br>' + esc(T(r.note)) + '</span>' : '')
      });
      if (r.note) {
        var nx = x2 + 8, avail = padL + pw - nx;
        if (avail > 60) g += txt(nx, yy + 12, clip(T(r.note), 10.8, avail), { fs: 10.8, fill: C.muted, bl: 'central' });
      }
    });
    return { svg: g, W: W, H: H };
  }

  /* =========================================================
     KIND: scatter — capped at 3 series (all-pairs CVD gate)
     spec.data={series:[{name,slot,pts:[{x,y,label}]}]} opts:{xlabel,ylabel,logx,logy}
     ========================================================= */
  function drawScatter(sp, W) {
    var dd = sp.data, o = sp.opts || {};
    var padL = 54, padR = 16, padT = 12, padB = 44;
    var H = o.height || 300;
    var pw = W - padL - padR, ph = H - padT - padB;
    var xs = [], ys = [];
    dd.series.forEach(function (s) { s.pts.forEach(function (p) { xs.push(+p.x); ys.push(+p.y); }); });
    function dom(arr, isLog, lo, hi) {
      var a = lo != null ? lo : Math.min.apply(null, arr), b = hi != null ? hi : Math.max.apply(null, arr);
      if (isLog) return [Math.pow(10, Math.floor(Math.log10(a))), Math.pow(10, Math.ceil(Math.log10(b)))];
      var pad = (b - a) * .08 || 1; return [a - pad, b + pad];
    }
    var dx = dom(xs, o.logx, o.xmin, o.xmax), dy = dom(ys, o.logy, o.ymin, o.ymax);
    function X(v) { return o.logx ? padL + pw * (Math.log10(v) - Math.log10(dx[0])) / (Math.log10(dx[1]) - Math.log10(dx[0])) : padL + pw * (v - dx[0]) / (dx[1] - dx[0]); }
    function Y(v) { return o.logy ? padT + ph * (1 - (Math.log10(v) - Math.log10(dy[0])) / (Math.log10(dy[1]) - Math.log10(dy[0]))) : padT + ph * (1 - (v - dy[0]) / (dy[1] - dy[0])); }
    var g = '';
    (o.logy ? logTicks(dy[0], dy[1]) : niceTicks(dy[0], dy[1], 4)).forEach(function (t) {
      g += el('line', { x1: padL, y1: Y(t), x2: padL + pw, y2: Y(t), stroke: C.grid, 'stroke-width': 1 });
      g += txt(padL - 8, Y(t), o.logy ? supTxt(t) : fmt(t), { fs: 11, fill: C.muted, anchor: 'end', bl: 'central', tab: 1 });
    });
    (o.logx ? logTicks(dx[0], dx[1]) : niceTicks(dx[0], dx[1], 4)).forEach(function (t) {
      g += el('line', { x1: X(t), y1: padT, x2: X(t), y2: padT + ph, stroke: C.grid, 'stroke-width': 1 });
      g += txt(X(t), padT + ph + 16, o.logx ? supTxt(t) : fmt(t), { fs: 11, fill: C.muted, anchor: 'middle', tab: 1 });
    });
    g += el('line', { x1: padL, y1: padT + ph, x2: padL + pw, y2: padT + ph, stroke: C.axis, 'stroke-width': 1 });
    if (o.xlabel) g += txt(padL + pw / 2, H - 8, T(o.xlabel), { fs: 11, fill: C.muted, anchor: 'middle', fw: 600 });
    if (o.ylabel) g += el('g', { transform: 'translate(13,' + (padT + ph / 2) + ') rotate(-90)' }, txt(0, 0, T(o.ylabel), { fs: 11, fill: C.muted, anchor: 'middle', fw: 600 }));
    dd.series.slice(0, 3).forEach(function (s, k) {
      var hue = C.s[(s.slot || k + 1) - 1];
      s.pts.forEach(function (p) {
        g += el('circle', {
          cx: X(+p.x), cy: Y(+p.y), r: 5.5, fill: hue, stroke: C.surface, 'stroke-width': 2,
          'data-tip': '<b>' + esc(T(p.label || s.name)) + '</b>' + esc(T(o.xlabel || 'x') + ': ' + fmt(p.x) + ' · ' + T(o.ylabel || 'y') + ': ' + fmt(p.y))
        });
        if (p.show) {
          /* flip the label to the left of the dot when it would run off the plot */
          var px = X(+p.x), right = px < padL + pw * 0.58;
          var room = right ? (padL + pw - px - 12) : (px - padL - 12);
          g += txt(px + (right ? 9 : -9), Y(+p.y), clip(T(p.label), 10.8, Math.min(230, room)),
            { fs: 10.8, fill: C.ink2, bl: 'central', anchor: right ? 'start' : 'end' });
        }
      });
    });
    return { svg: g, W: W, H: H };
  }

  /* ---------- table view builders ---------- */
  function tableFor(sp) {
    var o = sp.opts || {}, h = '', rows = '';
    var unit = o.unit ? ' (' + T(o.unit) + ')' : '';
    function head(a) { return '<tr>' + a.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr>'; }
    switch (sp.kind) {
      case 'bars': case 'funnel':
        h = head([T({ en: 'Item', zh: '項目' }), T({ en: 'Value', zh: '數值' }) + unit, T({ en: 'Note', zh: '備註' })]);
        rows = sp.data.map(function (r) {
          return '<tr><td>' + esc(T(r.label)) + '</td><td>' + esc(fmt(r.v, o.dec)) + '</td><td>' + esc(T(r.note || '')) + '</td></tr>';
        }).join('');
        break;
      case 'cols': case 'line':
        h = head([T({ en: 'x', zh: '橫軸' })].concat(sp.data.series.map(function (s) { return T(s.name) + unit; })));
        rows = (sp.data.cats || sp.data.x).map(function (c, i) {
          return '<tr><td>' + esc(T(c)) + '</td>' + sp.data.series.map(function (s) {
            return '<td>' + (s.v[i] == null ? '—' : esc(fmt(s.v[i], o.dec))) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        break;
      case 'matrix':
        h = head([''].concat(sp.data.cols.map(function (c) { return T(c); })));
        rows = sp.data.rows.map(function (r, i) {
          return '<tr><td>' + esc(T(r)) + '</td>' + sp.data.cols.map(function (_, j) {
            var v = sp.data.v[i] ? sp.data.v[i][j] : null;
            return '<td>' + (v == null ? '—' : esc(fmt(v, o.dec))) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        break;
      case 'segbar':
        var tot = sp.data.reduce(function (a, r) { return a + (+r.v); }, 0);
        h = head([T({ en: 'Part', zh: '組成' }), T({ en: 'Value', zh: '數值' }) + unit, '%']);
        rows = sp.data.map(function (r) {
          return '<tr><td>' + esc(T(r.label)) + '</td><td>' + esc(fmt(r.v, o.dec)) + '</td><td>' + Math.round(100 * r.v / tot) + '%</td></tr>';
        }).join('');
        break;
      case 'dumbbell':
        h = head([T({ en: 'Item', zh: '項目' }), T(o.aName || 'A'), T(o.bName || 'B')]);
        rows = sp.data.map(function (r) {
          return '<tr><td>' + esc(T(r.label)) + '</td><td>' + esc(fmt(r.a, o.dec)) + '</td><td>' + esc(fmt(r.b, o.dec)) + '</td></tr>';
        }).join('');
        break;
      case 'gantt':
        h = head([T({ en: 'Track', zh: '軌道' }), T({ en: 'From', zh: '起' }), T({ en: 'To', zh: '迄' }), T({ en: 'Note', zh: '備註' })]);
        rows = sp.data.map(function (r) {
          return '<tr><td>' + esc(T(r.label)) + '</td><td>' + r.start + '</td><td>' + r.end + '</td><td>' + esc(T(r.note || '')) + '</td></tr>';
        }).join('');
        break;
      case 'scatter':
        h = head([T({ en: 'Series', zh: '系列' }), T({ en: 'Point', zh: '資料點' }), T(o.xlabel || 'x'), T(o.ylabel || 'y')]);
        rows = sp.data.series.map(function (s) {
          return s.pts.map(function (p) {
            return '<tr><td>' + esc(T(s.name)) + '</td><td>' + esc(T(p.label || '')) + '</td><td>' + esc(fmt(p.x)) + '</td><td>' + esc(fmt(p.y)) + '</td></tr>';
          }).join('');
        }).join('');
        break;
      case 'tree':
        h = head([T({ en: 'Stage', zh: '階段' }), T({ en: 'Method', zh: '方法' }), T({ en: 'Note', zh: '說明' })]);
        rows = sp.data.cols.map(function (c) {
          return c.nodes.map(function (nd) {
            return '<tr><td>' + esc(T(c.head)) + '</td><td>' + esc(T(nd.label)) + '</td><td>' + esc(T(nd.sub || nd.tip || '')) + '</td></tr>';
          }).join('');
        }).join('');
        break;
      case 'flow':
        h = head([T({ en: '#', zh: '#' }), T({ en: 'Stage', zh: '階段' }), T({ en: 'Detail', zh: '內容' })]);
        rows = sp.data.stages.map(function (s, i) {
          return '<tr><td>' + (i + 1) + '</td><td>' + esc(T(s.label)) + '</td><td>' + esc(T(s.sub || '')) +
            ((s.items || []).length ? ' — ' + s.items.map(function (x) { return esc(T(x)); }).join('; ') : '') + '</td></tr>';
        }).join('');
        break;
      default: return '';
    }
    return '<table><thead>' + h + '</thead><tbody>' + rows + '</tbody></table>';
  }

  /* ---------- legend ---------- */
  function legendFor(sp) {
    var items = [];
    if (sp.kind === 'cols' || sp.kind === 'line') {
      var S = sp.data.series;
      if (S.length < 2) return '';
      items = S.map(function (s, k) { return { c: C.s[(s.slot || k + 1) - 1], n: T(s.name), ln: sp.kind === 'line' }; });
    } else if (sp.kind === 'segbar') {
      items = sp.data.map(function (r, i) { return { c: C.s[(r.slot || i + 1) - 1], n: T(r.label) }; });
    } else if (sp.kind === 'scatter') {
      if (sp.data.series.length < 2) return '';
      items = sp.data.series.map(function (s, k) { return { c: C.s[(s.slot || k + 1) - 1], n: T(s.name) }; });
    } else if (sp.kind === 'dumbbell') {
      items = [{ c: C.seq[3], n: T((sp.opts || {}).aName || 'A') }, { c: C.seq[8], n: T((sp.opts || {}).bName || 'B') }];
    } else if (sp.legend) {
      items = sp.legend.map(function (l) { return { c: l.c.charAt(0) === '#' ? l.c : C.s[+l.c.slice(1) - 1], n: T(l.n) }; });
    }
    if (!items.length) return '';
    return '<div class="leg">' + items.map(function (it) {
      return '<span><i class="' + (it.ln ? 'ln' : '') + '" style="background:' + it.c + '"></i>' + esc(it.n) + '</span>';
    }).join('') + '</div>';
  }

  /* ---------- public: register + html ---------- */
  function def(spec) {
    if (!spec.id) spec.id = 'f' + (ORDER.length + 1);
    DEFS[spec.id] = spec;
    ORDER.push(spec.id);
    return spec.id;
  }
  /* emits the figure shell; mount() fills the svg at measured width */
  function html(id) {
    var sp = DEFS[id];
    if (!sp) return '';
    return '<figure class="fg" data-fig="' + esc(id) + '"></figure>';
  }
  /* register inline and return html in one step */
  function fig(spec) { return html(def(spec)); }

  function numberFigures(rootIds) {
    N = 0;
    rootIds.forEach(function (id) { if (DEFS[id]) DEFS[id]._n = ++N; });
  }

  function paint(figEl) {
    var id = figEl.getAttribute('data-fig'), sp = DEFS[id];
    if (!sp) return;
    var W = Math.max(240, Math.floor(figEl.clientWidth - (window.innerWidth <= 760 ? 28 : 38)));
    var body = '';
    if (sp.kind === 'custom') {
      body = (typeof sp.svg === 'function') ? sp.svg(W, LANG) : sp.svg;
      var m = /viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(body);
      figEl.innerHTML = shell(sp, body, id);
      wireFig(figEl, sp, id);
      return;
    }
    var out;
    switch (sp.kind) {
      case 'bars': out = drawBars(sp, W); break;
      case 'cols': out = drawCols(sp, W); break;
      case 'line': out = drawLine(sp, W); break;
      case 'matrix': out = drawMatrix(sp, W); break;
      case 'funnel': out = drawFunnel(sp, W); break;
      case 'segbar': out = drawSeg(sp, W); break;
      case 'dumbbell': out = drawDumb(sp, W); break;
      case 'tree': out = drawTree(sp, W); break;
      case 'flow': out = drawFlow(sp, W); break;
      case 'gantt': out = drawGantt(sp, W); break;
      case 'scatter': out = drawScatter(sp, W); break;
      default: out = { svg: '', W: W, H: 10 };
    }
    var svg = '<svg viewBox="0 0 ' + out.W + ' ' + out.H + '" width="' + out.W + '" height="' + out.H +
      '" role="img" aria-label="' + esc(stripMd(T(sp.title))) + '">' + out.svg + '</svg>';
    figEl.innerHTML = shell(sp, svg, id);
    wireFig(figEl, sp, id);
  }

  function shell(sp, svg, id) {
    var n = sp._n ? 'Fig. ' + sp._n : '';
    var tbl = sp.kind === 'custom' ? (sp.table || '') : tableFor(sp);
    return '<div class="fgh">' +
      (n ? '<div class="fgn">' + n + (sp.tag ? ' · ' + esc(T(sp.tag)) : '') + '</div>' : '') +
      '<p class="fgt">' + mdi(sp.title) + '</p>' +
      (sp.sub ? '<p class="fgs">' + mdi(sp.sub) + '</p>' : '') +
      '</div>' +
      legendFor(sp) +
      '<div class="fgbody">' + svg + '</div>' +
      (tbl ? '<div class="fgtools"><button type="button" data-tt="' + esc(id) + '" aria-pressed="false">' +
        T({ en: 'Table view', zh: '表格檢視' }) + '</button></div>' +
        '<div class="fgtable" data-tbl="' + esc(id) + '">' + tbl + '</div>' : '') +
      (sp.caption || sp.source ? '<figcaption>' +
        (sp.caption ? mdi(sp.caption) + ' ' : '') +
        (sp.source ? '<b>' + T({ en: 'Source:', zh: '來源：' }) + '</b> ' + mdi(sp.source) : '') +
        '</figcaption>' : '');
  }

  function wireFig(figEl, sp, id) {
    var b = figEl.querySelector('[data-tt]');
    if (!b) return;
    b.addEventListener('click', function () {
      var t = figEl.querySelector('[data-tbl]');
      var open = t.getAttribute('data-open') === '1';
      t.setAttribute('data-open', open ? '0' : '1');
      b.setAttribute('aria-pressed', open ? 'false' : 'true');
    });
  }

  /* ---------- tooltip layer ---------- */
  var tipEl = null;
  function ensureTip() {
    if (tipEl) return tipEl;
    tipEl = document.createElement('div');
    tipEl.className = 'vzt';
    document.body.appendChild(tipEl);
    return tipEl;
  }
  function initTips() {
    document.addEventListener('mousemove', function (e) {
      var t = e.target.closest ? e.target.closest('[data-tip]') : null;
      var el2 = ensureTip();
      if (!t) { el2.style.opacity = '0'; return; }
      el2.innerHTML = t.getAttribute('data-tip');
      el2.style.opacity = '1';
      var r = el2.getBoundingClientRect();
      var x = Math.min(window.innerWidth - r.width - 10, Math.max(8, e.clientX + 14));
      var y = Math.max(8, e.clientY - r.height - 12);
      el2.style.left = x + 'px'; el2.style.top = y + 'px';
    }, { passive: true });
    document.addEventListener('mouseleave', function () { if (tipEl) tipEl.style.opacity = '0'; });
    document.addEventListener('focusin', function () { if (tipEl) tipEl.style.opacity = '0'; });
  }

  /* ---------- mount ---------- */
  var ro = null;
  function mount(root, lang) {
    if (lang) LANG = lang;
    var figs = root.querySelectorAll('figure[data-fig]');
    var ids = [];
    for (var i = 0; i < figs.length; i++) ids.push(figs[i].getAttribute('data-fig'));
    numberFigures(ids);
    for (var j = 0; j < figs.length; j++) paint(figs[j]);
    if (!ro && window.ResizeObserver) {
      var tmr = null;
      ro = new ResizeObserver(function () {
        clearTimeout(tmr);
        tmr = setTimeout(function () {
          var cur = document.querySelectorAll('figure[data-fig]');
          for (var k = 0; k < cur.length; k++) paint(cur[k]);
        }, 140);
      });
      ro.observe(document.body);
    }
  }
  function setLang(l) { LANG = l; }

  w.FIG = {
    def: def, html: html, fig: fig, mount: mount, setLang: setLang, initTips: initTips,
    C: C, T: T, esc: esc, mdi: mdi, stripMd: stripMd, fmt: fmt, el: el, txt: txt, tw: tw, wrapLines: wrapLines, clip: clip,
    inkOn: inkOn, barPath: barPath
  };
})(window);
