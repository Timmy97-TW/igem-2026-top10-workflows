/* ============================================================
   app.js — router, bilingual layer, and the content helpers
   every page module builds its HTML with.
   ============================================================ */
(function (w, d) {
  'use strict';
  var PD = w.PD = w.PD || {};
  PD.pages = PD.pages || {};

  var LANG = 'en';
  var curPage = null;
  function T(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return String(v[LANG] != null ? v[LANG] : (v.en != null ? v.en : ''));
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* inline markup allowed in body copy: **bold**, *em*, `code`, [text](url) */
  function md(v) {
    var s = esc(T(v));
    s = s.replace(/\[([^\]\[]+)\]\(([^)\s]+)\)/g, function (m, t, u) {
      var ext = /^https?:/.test(u);
      return '<a href="' + u + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>';
    });
    s = s.replace(/==([^=]+)==/g, '<span class="gt">$1</span>');
    s = s.replace(/\*\*((?:[^*]|\*(?!\*))+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/`([^`]+)`/g, '<code class="mono">$1</code>');
    return s;
  }

  /* ---------------- content helpers given to page modules --------- */
  var h = {
    T: T, esc: esc, md: md,
    lang: function () { return LANG; },

    /* a page section with anchor + kicker + h2 + lede */
    sec: function (o) {
      return '<section class="sec" id="' + esc(o.id || '') + '">' +
        '<div class="wrap">' +
        (o.kick ? '<p class="kick">' + md(o.kick) + '</p>' : '') +
        (o.h2 ? '<h2>' + md(o.h2) + '</h2>' : '') +
        (o.lede ? '<p class="seclede">' + md(o.lede) + '</p>' : '') +
        (o.body || '') +
        '</div></section>';
    },
    /* prose block */
    p: function () {
      var out = '';
      for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a == null) continue;
        out += '<p>' + md(a) + '</p>';
      }
      return '<div class="prose">' + out + '</div>';
    },
    h3: function (t, id) { return '<h3 class="sub"' + (id ? ' id="' + esc(id) + '"' : '') + '>' + md(t) + '</h3>'; },
    h4: function (t) { return '<h4 class="sub4">' + md(t) + '</h4>'; },
    ul: function (items, ordered) {
      var tag = ordered ? 'ol' : 'ul';
      return '<div class="prose"><' + tag + '>' + items.map(function (i) { return '<li>' + md(i) + '</li>'; }).join('') + '</' + tag + '></div>';
    },
    take: function (label, body) {
      return '<div class="take"><b>' + md(label) + '</b><p>' + md(body) + '</p></div>';
    },
    note: function (body) { return '<div class="note">' + md(body) + '</div>'; },
    warn: function (body) { return '<div class="warnbox">' + md(body) + '</div>'; },
    chips: function (arr) {
      return '<div class="chips">' + arr.map(function (c) {
        return '<span class="chip' + (c.k ? ' ' + c.k : '') + '">' + md(c.t || c) + '</span>';
      }).join('') + '</div>';
    },
    /* card grids */
    cards: function (arr, cls) {
      return '<div class="' + (cls || 'g2') + '">' + arr.map(function (c) {
        return '<div class="card lift">' +
          (c.chips ? h.chips(c.chips) + '<div style="height:9px"></div>' : '') +
          (c.h ? '<h4>' + md(c.h) + '</h4>' : '') +
          (c.p ? (Array.isArray(c.p) ? c.p.map(function (x) { return '<p>' + md(x) + '</p>'; }).join('') : '<p>' + md(c.p) + '</p>') : '') +
          (c.foot ? '<p class="small" style="margin-top:10px">' + md(c.foot) + '</p>' : '') +
          '</div>';
      }).join('') + '</div>';
    },
    stats: function (arr) {
      return '<div class="stats">' + arr.map(function (s) {
        return '<div class="stat"><b>' + md(s.v) + '</b><span>' + md(s.l) + '</span></div>';
      }).join('') + '</div>';
    },
    panel: function (body) { return '<div class="panel">' + body + '</div>'; },
    /* data table */
    tbl: function (o) {
      var head = '<tr>' + o.cols.map(function (c) {
        return '<th' + (c.num ? ' class="num"' : '') + (c.w ? ' style="width:' + c.w + '"' : '') + '>' + md(c.t || c) + '</th>';
      }).join('') + '</tr>';
      var body = o.rows.map(function (r) {
        return '<tr>' + r.map(function (cell, i) {
          var num = o.cols[i] && o.cols[i].num;
          return '<td' + (num ? ' class="num"' : '') + '>' + md(cell) + '</td>';
        }).join('') + '</tr>';
      }).join('');
      return '<div class="scrollx"><table class="tbl"' + (o.min ? ' style="min-width:' + o.min + 'px"' : '') + '>' +
        '<thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>' +
        '<p class="swipe">' + T({ en: 'Swipe sideways to see the whole table', zh: '左右滑動可看完整表格' }) + '</p>' +
        (o.source ? '<p class="small" style="margin-top:8px">' + md(o.source) + '</p>' : '');
    },
    /* key-value list */
    kv: function (pairs) {
      return '<dl class="kv">' + pairs.map(function (p) {
        return '<dt>' + md(p[0]) + '</dt><dd>' + md(p[1]) + '</dd>';
      }).join('') + '</dl>';
    },
    /* numbered phase blocks */
    phases: function (arr) {
      return arr.map(function (p, i) {
        return '<div class="phase"><div class="pn">' + (i + 1) + '</div><div style="flex:1;min-width:0">' +
          '<h4 class="sub4" style="margin-top:3px">' + md(p.h) + '</h4>' +
          (p.p ? '<p class="small" style="font-size:14.6px;color:var(--ink2);margin-bottom:8px">' + md(p.p) + '</p>' : '') +
          (p.items ? '<div class="prose"><ul>' + p.items.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>' : '') +
          (p.done ? '<div class="take" style="margin:8px 0 0"><b>' + T({ en: 'Done looks like', zh: '做到了的樣子' }) + '</b><p>' + md(p.done) + '</p></div>' : '') +
          '</div></div>';
      }).join('');
    },
    /* era-grouped chronological timeline */
    timeline: function (eras) {
      return '<div class="tl">' + eras.map(function (e) {
        return '<div class="era">' +
          '<div class="erah"><b>' + md(e.h) + '</b><span>' + md(e.range || '') + '</span></div>' +
          (e.d ? '<p class="erad">' + md(e.d) + '</p>' : '') +
          '<ol>' + e.items.map(function (it) {
            return '<li' + (it.hi ? ' class="hi"' : '') + '>' +
              '<div class="yr">' + md(it.y) + '</div>' +
              '<div class="ti">' + md(it.t) + '</div>' +
              '<div class="de">' + md(it.d) + '</div>' +
              (it.c ? '<div class="ci">' + md(it.c) + '</div>' : '') +
              '</li>';
          }).join('') + '</ol></div>';
      }).join('') + '</div>';
    },
    /* figure from the FIG engine */
    fig: function (spec) { return w.FIG.fig(spec); },
    /* figure from the WF workflow-diagram library */
    wf: function (name, o) {
      o = o || {};
      return w.FIG.fig({
        kind: 'custom', title: o.title, sub: o.sub, caption: o.caption, source: o.source, tag: o.tag,
        table: o.table || '',
        svg: function (W, L) { return w.WF.d[name](W, L); }
      });
    },
    /* a left-to-right (auto-stacking) stage flow from the figure engine */
    flow: function (o) {
      return w.FIG.fig({
        kind: 'flow', title: o.title, sub: o.sub, caption: o.caption, source: o.source,
        tag: o.tag || { en: 'WORKFLOW', zh: '流程' },
        data: { stages: o.stages, loop: o.loop }, opts: o.opts || {}
      });
    },
    /* the standard header for a team page */
    teamhero: function (team, o) {
      var T = h.T;
      return '<div class="hero"><div class="wrap">' +
        '<p class="eyebrow"><i></i>' + h.esc(team.flag + '  ' + team.name + ' · ' + T(team.country) + ' · ' + T(team.village) + ' · ' + T(team.award)) + '</p>' +
        '<h1 class="big">' + h.md(o.h1) + '</h1>' +
        '<p class="lede">' + h.md(o.lede) + '</p>' +
        '<div class="herometa">' + h.chips(o.chips || []) + '</div>' +
        '<p class="small" style="margin-top:16px">' +
        T({ en: 'Read from ', zh: '讀自 ' }) +
        '<a href="https://2026.igem.wiki/' + team.slug + '/" target="_blank" rel="noopener">2026.igem.wiki/' + team.slug + '</a>' +
        T({ en: '. Every number below is the team\'s own.', zh: '。以下每個數字都是該隊自己的數字。' }) + '</p>' +
        (o.stats ? h.stats(o.stats) : '') +
        '</div></div>';
    },
    /* in-page section chips */
    toc: function (items) {
      return '<div class="toc"><div class="wrap">' + items.map(function (i) {
        return '<a href="#' + esc(i.id) + '" data-toc="' + esc(i.id) + '">' + md(i.t) + '</a>';
      }).join('') + '</div></div>';
    },
    caseCard: function (o) {
      return '<div class="card" style="padding:22px 23px">' +
        '<div class="casehead"><div class="casenum">' + o.n + '</div>' +
        '<div style="flex:1;min-width:0"><h4 style="margin:0;font-size:18.5px">' + md(o.h) + '</h4>' +
        '<p class="small" style="margin:2px 0 0">' + md(o.sub) + '</p></div></div>' +
        (o.chips ? h.chips(o.chips) : '') + (o.body || '') + '</div>';
    }
  };
  PD.h = h;

  /* ---------------- divisions ---------------- */
  /* A page id carries its division as a prefix ('og-delft'), so the hash alone
     decides which roster, which tab bar and which footer note apply, and every
     deep link keeps working. */
  function divList() { return PD.divisions || [{ key: 'ug', prefix: '', teams: PD.teams, tabs: PD.meta.tabs }]; }
  function divOf(id) {
    var ds = divList(), i, best = ds[0];
    for (i = 0; i < ds.length; i++) {
      if (ds[i].prefix && String(id || '').indexOf(ds[i].prefix) === 0) best = ds[i];
    }
    return best;
  }
  /* the division of whatever is on screen, or of the hash before the first render */
  function curDiv() { return divOf(curPage || (location.hash || '').replace(/^#/, '')); }
  /* the roster the page modules should read */
  PD.teamsOf = function (id) { return divOf(id).teams || []; };

  /* ---------------- tab bar ---------------- */
  function p2(name) { return 'M4 7h5v5H4zM15 7h5v5h-5zM9.5 9.5h5M7 12v5h10v-5'; }
  function icon(name) {
    var p = {
      overview: 'M3 12h4l3-8 4 16 3-8h4',
      compare: 'M4 6h7M4 12h11M4 18h5M17 4v16m0-16l3 3m-3-3l-3 3',
      team: 'M4 7h5v5H4zM15 7h5v5h-5zM9.5 9.5h5M7 12v5h10v-5',
      wet: 'M12 3v6l-5 9a4 4 0 0 0 3.6 6h2.8A4 4 0 0 0 17 18l-5-9',
      dry: 'M4 19V9m5 10V5m5 14v-7m5 7V8'
    }[String(name).replace(/^(og|hs|x)-/, '')] || p2(name);
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + p + '"/></svg>';
  }

  function buildTabs(active) {
    var el = d.getElementById('tabs');
    var div = divOf(active);
    var ds = divList();
    var sw = ds.length < 2 ? '' :
      '<div class="divsw" role="group" aria-label="Section">' + ds.map(function (x) {
        return '<button type="button" data-div="' + x.key + '" aria-pressed="' +
          (x.key === div.key ? 'true' : 'false') + '">' + esc(T(x.label)) + '</button>';
      }).join('') + '</div>';
    el.innerHTML = '<div class="wrap">' + sw + '<div class="tablist">' + (div.tabs || []).map(function (t) {
      return '<button class="tab" role="tab" type="button" data-go="' + t.id + '" aria-selected="' +
        (t.id === active ? 'true' : 'false') + '">' + icon(t.id) + '<span>' + esc(T(t.label)) + '</span></button>';
    }).join('') + '</div></div>';
  }

  /* ---------------- language ---------------- */
  function applyStatic() {
    d.documentElement.lang = LANG === 'zh' ? 'zh-Hant' : 'en';
    var nodes = d.querySelectorAll('[data-en]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = nodes[i].getAttribute(LANG === 'zh' ? 'data-zh' : 'data-en');
    }
    var btns = d.querySelectorAll('.lang button');
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute('data-lang') === LANG;
      btns[j].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    moveThumb();
    /* footer */
    d.getElementById('footlinks').innerHTML = PD.meta.footer.links.map(function (l) {
      return '<a href="' + l.u + '"' + (/^https?:/.test(l.u) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(T(l.t)) + '</a>';
    }).join('');
    /* brand subtitle names the division you are reading */
    var dv = curDiv(), bs = d.querySelector('.brand .bt span');
    if (bs && dv.sub) bs.textContent = T(dv.sub);
    var byDiv = { og: PD.meta.footer.noteOG, hs: PD.meta.footer.noteHS, xd: PD.meta.footer.noteXD };
    var note = byDiv[dv.key] || PD.meta.footer.note;
    d.getElementById('footnote').innerHTML = md(note) +
      ' <span class="mono">' + T({ en: 'Updated', zh: '更新於' }) + ' ' + PD.meta.updated + '</span>';
  }
  function moveThumb() {
    var box = d.querySelector('.lang'), th = d.querySelector('.lang .thumb');
    if (!box || !th) return;
    var on = box.querySelector('button[aria-pressed="true"]');
    if (!on) return;
    th.style.left = (on.offsetLeft) + 'px';
    th.style.width = (on.offsetWidth) + 'px';
  }
  /* Re-render by default: the figures read FIG's language at paint time while the
     surrounding prose is baked in at render time, so skipping the re-render leaves
     the page half-translated. Callers must opt out explicitly. */
  function setLang(l, rerender) {
    if (l === LANG) return;
    LANG = l;
    try { localStorage.setItem('igem26-lang', l); } catch (e) { }
    w.FIG.setLang(l);
    applyStatic();
    if (rerender !== false) render(current(), true);
  }

  /* exposed for tests and for programmatic language switching */
  PD.setLang = setLang;

  /* ---------------- routing ---------------- */
  /* the hash is either a page id or an in-page anchor; only a page id routes */
  function pageFromHash() {
    var hv = (location.hash || '').replace(/^#/, '').split('/')[0];
    return PD.pages[hv] ? hv : null;
  }
  function firstAvailable() {
    /* fall back to the first tab that actually has a page module loaded,
       so one missing data file degrades to a working site rather than a blank one */
    for (var i = 0; i < PD.meta.tabs.length; i++) {
      if (PD.pages[PD.meta.tabs[i].id]) return PD.meta.tabs[i].id;
    }
    return null;
  }
  function current() { return pageFromHash() || firstAvailable(); }
  var rendering = false;
  function render(id, keepScroll) {
    rendering = true;
    curPage = id;
    var y = keepScroll ? w.scrollY : 0;
    var page = PD.pages[id];
    var app = d.getElementById('app');
    if (!page) {
      app.innerHTML = '<div class="wrap" style="padding:60px 22px"><h2>' +
        T({ en: 'Section unavailable', zh: '此章節無法載入' }) + '</h2><p class="small">' +
        T({ en: 'A data file failed to load. Try reloading the page.', zh: '某個資料檔載入失敗，請嘗試重新載入頁面。' }) + '</p></div>';
      rendering = false;
      return;
    }
    app.innerHTML = page.render(h);
    buildTabs(id);
    applyStatic();
    w.FIG.mount(app, LANG);
    wireToc();
    wireRefFilter();
    d.title = T(page.title || page.label) + ' — ' + T(PD.meta.siteTitle);
    w.scrollTo(0, y);
    rendering = false;
  }
  function wireToc() {
    var links = d.querySelectorAll('[data-toc]');
    if (!links.length) return;
    var ids = [];
    for (var i = 0; i < links.length; i++) ids.push(links[i].getAttribute('data-toc'));
    function upd() {
      var best = null, bestTop = -1e9;
      ids.forEach(function (id) {
        var s = d.getElementById(id);
        if (!s) return;
        var t = s.getBoundingClientRect().top - 150;
        if (t <= 0 && t > bestTop) { bestTop = t; best = id; }
      });
      for (var j = 0; j < links.length; j++) {
        links[j].classList.toggle('on', links[j].getAttribute('data-toc') === best);
      }
    }
    upd();
    var tmr = null;
    w.addEventListener('scroll', function () {
      clearTimeout(tmr); tmr = setTimeout(upd, 90);
    }, { passive: true });
  }

  /* live filter on the References page */
  function wireRefFilter() {
    var box = d.querySelector('[data-reffilter]');
    if (!box) return;
    var items = d.querySelectorAll('[data-refitem]');
    var counter = d.querySelector('[data-refcount]');
    var total = items.length;
    var tmr = null;
    function apply() {
      var q = box.value.trim().toLowerCase();
      var shown = 0;
      for (var i = 0; i < items.length; i++) {
        var hit = !q || items[i].textContent.toLowerCase().indexOf(q) >= 0;
        items[i].style.display = hit ? '' : 'none';
        if (hit) shown++;
      }
      if (counter) counter.textContent = shown + ' / ' + total;
      /* hide a group heading whose entries are all filtered out */
      var secs = d.querySelectorAll('section.sec');
      for (var j = 0; j < secs.length; j++) {
        var li = secs[j].querySelectorAll('[data-refitem]');
        if (!li.length) continue;
        var any = false;
        for (var k = 0; k < li.length; k++) { if (li[k].style.display !== 'none') { any = true; break; } }
        secs[j].style.display = any ? '' : 'none';
      }
    }
    box.addEventListener('input', function () { clearTimeout(tmr); tmr = setTimeout(apply, 120); });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    try {
      var saved = localStorage.getItem('igem26-lang');
      if (saved === 'zh' || saved === 'en') LANG = saved;
      else if ((navigator.language || '').toLowerCase().indexOf('zh') === 0) LANG = 'zh';
    } catch (e) { }
    w.FIG.setLang(LANG);
    w.FIG.initTips();
    applyStatic();
    render(current());
    d.addEventListener('click', function (e) {
      var g = e.target.closest ? e.target.closest('[data-go]') : null;
      if (g) { location.hash = '#' + g.getAttribute('data-go'); return; }
      var dvb = e.target.closest ? e.target.closest('[data-div]') : null;
      if (dvb) {
        var want = dvb.getAttribute('data-div'), ds = divList(), i;
        for (i = 0; i < ds.length; i++) {
          if (ds[i].key !== want) continue;
          /* land on the same kind of page in the other division where one exists,
             so switching from a team page goes to that division's overview rather
             than to a dead id */
          var here = (curPage || '').replace(divOf(curPage).prefix, '');
          var target = ds[i].prefix + here;
          var home = ds[i].tabs && ds[i].tabs[0] ? ds[i].tabs[0].id : ds[i].prefix + 'overview';
          location.hash = '#' + (PD.pages[target] ? target : home);
        }
        return;
      }
      var lb = e.target.closest ? e.target.closest('.lang button') : null;
      if (lb) { setLang(lb.getAttribute('data-lang')); }
    });
    w.addEventListener('hashchange', function () {
      var p = pageFromHash();
      /* an in-page anchor (#c-e1, #r-3, …) must not re-route to another chapter —
         leave the rendered page alone and let the browser scroll to the anchor */
      if (p && p !== curPage) render(p);
    });
    w.addEventListener('resize', moveThumb);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', boot); else boot();
})(window, document);
