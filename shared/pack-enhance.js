/* Pack B+C runtime: scrollytelling reveals + mobile call bar.
   Runs after parse; content stays visible if this never executes. */
(function () {
  document.documentElement.classList.add('js');

  function onReady() {
    /* ---- scrollytelling: fade/slide sections in as they enter ---- */
    var special = /special|offer|deal|\bsale\b|limited|coupon|discount|save\b/i;
    var sections = document.querySelectorAll('body > section, body > main > section, body > main > div > section');
    var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }) : null;

    sections.forEach(function (sec) {
      if (sec.classList.contains('rv') || sec.classList.contains('rv-pop')) return;
      var pop = special.test(sec.textContent || '');
      sec.classList.add(pop ? 'rv-pop' : 'rv');
      if (io) io.observe(sec);
      else sec.classList.add('in');
    });

    /* ---- mobile differentiation: sticky tap-to-call bar ---- */
    try {
      var tel = document.querySelector('a[href^="tel:"]');
      var already = document.querySelector('.kb-callbar, [class*="sticky-call"], [class*="call-bar"]');
      if (tel && !already) {
        var name = (document.querySelector('h1') || {}).textContent || 'us';
        name = name.trim().split('\n')[0].slice(0, 34);
        var bar = document.createElement('a');
        bar.className = 'kb-callbar';
        bar.href = tel.getAttribute('href');
        bar.textContent = '\uD83D\uDCDE Call ' + name;
        document.body.appendChild(bar);
        document.body.classList.add('kb-has-callbar');
      }
    } catch (err) { /* never break the page for a call bar */ }
  }

  if (document.readyState !== 'loading') onReady();
  else document.addEventListener('DOMContentLoaded', onReady);
})();
