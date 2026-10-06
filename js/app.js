/* Boot, theme and hash router: #/home, #/topic/id, #/practice/id, #/quiz[/id], #/reference, #/dashboard */
(function () {
  var view = document.getElementById('view');

  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var btn = document.getElementById('theme-btn');
    if (btn) {
      var dark = t === 'dark' || (!t && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
      btn.textContent = dark ? 'Light mode' : 'Dark mode';
      btn.setAttribute('aria-pressed', String(dark));
    }
  }

  function route() {
    var parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    var name = parts[0], arg = parts[1];
    var fn = EMATH.views[name];
    view.innerHTML = '';
    if (!fn || name === 'notFound') fn = EMATH.views.notFound;
    try { fn(view, arg); }
    catch (e) {
      console.error(e);
      view.innerHTML = '';
      view.appendChild(EMATH.util.h('p', { class: 'flag' }, 'Something went wrong loading this page. Try going back to the topic list.'));
    }
    Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
      a.classList.toggle('on', a.getAttribute('data-route') === name || (name === 'topic' && a.getAttribute('data-route') === 'home') || (name === 'practice' && a.getAttribute('data-route') === 'home'));
    });
    window.scrollTo(0, 0);
    var title = view.querySelector('#page-title');
    document.title = (title ? title.textContent + ' | ' : '') + 'E-Math SG';
    if (title) title.focus({ preventScroll: true });
  }

  document.getElementById('theme-btn').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var dark = cur === 'dark' || (!cur && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    EMATH.store.setTheme(next);
    applyTheme(next);
  });

  applyTheme(EMATH.store.getTheme());
  window.addEventListener('hashchange', route);
  route();
})();
