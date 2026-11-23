/* Render every page in both languages under JavaScriptCore and assert it is sound.
   Catches what tools/qa.py cannot: unrendered markdown (including across concatenated
   string literals), a toc id that resolves to nothing, and a page that throws.

   Run:  /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc tools/render.js
   from the repository root. Exits by printing a PROBLEMS line; silence means clean. */

var document = {
  readyState: 'loading', addEventListener: function () {}, documentElement: {},
  getElementById: function () {
    return { innerHTML: '', style: {}, setAttribute: function () {}, getAttribute: function () { return null; }, textContent: '' };
  },
  querySelector: function () { return null; }, querySelectorAll: function () { return []; },
  createElement: function () { return { style: {}, appendChild: function () {} }; }
};
var window = {
  document: document, addEventListener: function () {}, location: { hash: '' },
  navigator: { language: 'en' }, scrollTo: function () {}, scrollY: 0,
  setTimeout: function () {}, clearTimeout: function () {}, matchMedia: function () { return { matches: false, addEventListener: function () {} }; }
};
window.window = window;
var location = window.location, navigator = window.navigator;
var localStorage = { getItem: function () { return null; }, setItem: function () {} };

/* Load exactly what index.html loads, in its order, so this check cannot drift from the site. */
var html = readFile('index.html');
var srcs = html.match(/<script src="[^"]+"><\/script>/g) || [];
for (var i = 0; i < srcs.length; i++) {
  var f = srcs[i].replace(/^<script src="/, '').replace(/"><\/script>$/, '').split('?')[0];
  load(f);
}

var PD = window.PD;
var ids = [];
for (var k in PD.pages) if (PD.pages.hasOwnProperty(k)) ids.push(k);
ids.sort();

var bad = 0, langs = ['en', 'zh'];
for (var li = 0; li < langs.length; li++) {
  var lang = langs[li];
  if (lang === 'zh') PD.setLang('zh', false);
  for (var p = 0; p < ids.length; p++) {
    var id = ids[p], out;
    try { out = PD.pages[id].render(PD.h); } catch (e) {
      print('FAIL  ' + lang + '  ' + id + '  threw: ' + e);
      bad++; continue;
    }
    var secs = (out.match(/<section class="sec" id="[a-z-]+"/g) || []).map(function (s) { return s.replace(/.*id="/, ''); });
    var toc = (out.match(/data-toc="[a-z-]+"/g) || []).map(function (s) { return s.replace(/data-toc="/, ''); });
    var miss = toc.filter(function (t) { return secs.indexOf(t) < 0; });
    var raw = out.match(/\*\*/g) || [];
    var eqs = out.match(/==(?![\s\S]{0,2}")/g) || [];
    var probs = [];
    if (miss.length) probs.push('toc ids with no section: ' + miss.join(','));
    if (raw.length) probs.push(raw.length + ' unrendered ** marks');
    if (eqs.length) probs.push(eqs.length + ' unrendered == marks');
    if (out.length < 2500) probs.push('suspiciously short: ' + out.length + ' ch');
    if (probs.length) {
      bad++;
      print('FAIL  ' + lang + '  ' + id + '  -> ' + probs.join('; '));
    }
  }
}
print(bad ? 'PROBLEMS: ' + bad : 'render ok: ' + ids.length + ' pages x 2 languages, no unrendered markup, every toc id resolves');
