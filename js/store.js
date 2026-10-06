/* localStorage wrapper: every access is guarded, with an in-memory fallback. */
EMATH.store = (function () {
  var KEY = 'emath-sg:v1';
  var mem = null;

  function get() {
    if (mem) return mem;
    try {
      var raw = localStorage.getItem(KEY);
      mem = raw ? JSON.parse(raw) : null;
    } catch (e) { mem = null; }
    if (!mem || typeof mem !== 'object') mem = {};
    mem.topics = mem.topics || {};
    mem.quizzes = mem.quizzes || [];
    return mem;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(get())); } catch (e) { /* storage unavailable: keep in memory */ }
  }

  /* Record one attempt at a question. seen[qid] is sticky-1 once solved. */
  function record(topicId, qid, ok) {
    var s = get();
    var t = s.topics[topicId] || (s.topics[topicId] = { att: 0, cor: 0, seen: {} });
    t.att++;
    if (ok) t.cor++;
    if (qid && qid.indexOf('gen-') !== 0) t.seen[qid] = Math.max(t.seen[qid] || 0, ok ? 1 : 0);
    save();
  }

  function topicStats(topicId) {
    var t = get().topics[topicId] || { att: 0, cor: 0, seen: {} };
    var solved = Object.keys(t.seen).filter(function (k) { return t.seen[k] === 1; }).length;
    return { att: t.att, cor: t.cor, solved: solved, tried: Object.keys(t.seen).length };
  }

  function addQuiz(entry) {
    var s = get();
    s.quizzes.unshift(entry);
    s.quizzes = s.quizzes.slice(0, 20);
    save();
  }

  function reset() { mem = { topics: {}, quizzes: [], theme: get().theme }; save(); }

  function getTheme() { return get().theme || null; }
  function setTheme(t) { get().theme = t; save(); }

  return { get: get, save: save, record: record, topicStats: topicStats, addQuiz: addQuiz, reset: reset, getTheme: getTheme, setTheme: setTheme };
})();
