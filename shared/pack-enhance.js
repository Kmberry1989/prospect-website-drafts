/* Site enhancement packs runtime: scrollytelling reveals + mobile call bar + mini-nav.
   Runs after parse; content stays visible if this never executes.
   Handles fetch-rendered content (content.json) via MutationObserver. */
(function () {
  document.documentElement.classList.add('js');

  var SPECIAL = /special|offer|deal|\bsale\b|limited|coupon|discount|\bsave\b/i;

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'section';
  }

  function sections() {
    // avoid double-counting sections inside main
    var seen = new Set(), out = [];
    document.querySelectorAll('main section, body > section').forEach(function (sec) {
      if (seen.has(sec)) return; seen.add(sec); out.push(sec);
    });
    return out;
  }

  function labelFor(sec) {
    var l = sec.getAttribute('aria-label') || '';
    if (!l) {
      var h = sec.querySelector('h1,h2');
      l = h ? h.textContent : '';
    }
    return (l || '').trim().split('\n')[0].slice(0, 30);
  }

  function enhance() {
    /* ---- scrollytelling: fade/slide sections in as they enter ---- */
    var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }) : null;

    sections().forEach(function (sec) {
      if (sec.dataset.kbRv) return; sec.dataset.kbRv = '1';
      var pop = SPECIAL.test(sec.textContent || '');
      sec.classList.add(pop ? 'rv-pop' : 'rv');
      if (io) io.observe(sec); else sec.classList.add('in');
    });

    buildMiniNav();
  }

  var navBuilt = false;
  function buildMiniNav() {
    if (navBuilt || document.querySelector('nav') || document.querySelector('.kb-mininav')) return;
    var items = [];
    sections().forEach(function (sec) {
      var label = labelFor(sec);
      if (!label || items.length >= 6) return;
      if (!sec.id) sec.id = 'kb-' + slug(label);
      items.push({ id: sec.id, label: label });
    });
    if (items.length < 2) return;
    navBuilt = true;

    var name = (document.title || '').split(/[|–—\-]/)[0].trim();
    if (!name) {
      var h1 = document.querySelector('h1');
      name = h1 ? h1.textContent.trim().split('\n')[0].slice(0, 34) : 'Home';
    }
    var tel = document.querySelector('a[href^="tel:"]');

    var bar = document.createElement('div');
    bar.className = 'kb-mininav';
    bar.setAttribute('role', 'navigation');
    bar.setAttribute('aria-label', 'Page sections');
    var html = '<span class="kb-mn-name"></span><span class="kb-mn-links">' +
      items.map(function (it) { return '<a href="#' + it.id + '"></a>'; }).join('') +
      '</span>';
    if (tel) html += '<a class="kb-mn-call" href="' + tel.getAttribute('href') + '">\uD83D\uDCDE Call</a>';
    bar.innerHTML = html;
    bar.querySelector('.kb-mn-name').textContent = name;
    var links = bar.querySelectorAll('.kb-mn-links a');
    items.forEach(function (it, i) { links[i].textContent = it.label; });
    document.body.appendChild(bar);

    var onScroll = function () { bar.classList.toggle('on', window.scrollY > 480); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- mobile differentiation: sticky tap-to-call bar ---- */
  function callBar() {
    if (document.querySelector('.kb-callbar')) return;
    try {
      var tel = document.querySelector('a[href^="tel:"]');
      var already = document.querySelector('[class*="sticky-call"], [class*="call-bar"]');
      if (tel && !already) {
        var h1 = document.querySelector('h1');
        var name = h1 ? h1.textContent.trim().split('\n')[0].slice(0, 34) : 'us';
        var bar = document.createElement('a');
        bar.className = 'kb-callbar';
        bar.href = tel.getAttribute('href');
        bar.textContent = '\uD83D\uDCDE Call ' + name;
        document.body.appendChild(bar);
        document.body.classList.add('kb-has-callbar');
      }
    } catch (err) { /* never break the page for a call bar */ }
  }

  function onReady() {
    enhance();
    callBar();
    // Catch fetch-rendered sections (content.json sites)
    if ('MutationObserver' in window) {
      var deb = null;
      new MutationObserver(function () {
        clearTimeout(deb);
        deb = setTimeout(function () { enhance(); callBar(); }, 600);
      }).observe(document.body, { childList: true, subtree: true });
    } else {
      setTimeout(function () { enhance(); callBar(); }, 2000);
    }
    // One last pass in case rendering was slow
    setTimeout(function () { enhance(); callBar(); }, 4000);
  }

  if (document.readyState !== 'loading') onReady();
  else document.addEventListener('DOMContentLoaded', onReady);
})();
