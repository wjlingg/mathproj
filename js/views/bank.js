/* Question banks: the hand-written questions plus a few fixed-seed generated ones, and on-demand fresh ones. */
EMATH.generate = function (topic, g, seed, fixed) {
  if (seed == null) seed = Math.floor(Math.random() * 1e9);
  var q = g.make(EMATH.util.rng(seed));
  return Object.assign({ id: (fixed ? 'fx-' : 'gen-') + topic.id + '-' + g.id + '-' + seed, level: g.level, topicId: topic.id, generated: true }, q);
};

EMATH.bank = function (topic) {
  if (topic._bank) return topic._bank;
  var qs = topic.questions.map(function (q) { return Object.assign({ topicId: topic.id }, q); });
  (topic.generators || []).forEach(function (g) {
    [11, 22, 33].forEach(function (seed) { qs.push(EMATH.generate(topic, g, seed, true)); });
  });
  topic._bank = qs;
  return qs;
};

EMATH.readyTopics = function () {
  return EMATH.syllabus.topics.filter(function (t) { return EMATH.topics[t.id]; }).map(function (t) { return EMATH.topics[t.id]; });
};
