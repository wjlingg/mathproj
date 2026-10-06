# E-Math SG

Static site for Singapore Secondary 1 to 4 Mathematics and O-Level E-Math (4052): notes, stepwise worked examples, practice with instant marking, quizzes, a formula sheet and glossary, and a local progress dashboard. No build step and no dependencies.

## Run it

Open `index.html` directly (routes use `#/` hashes, so `file://` works), or serve the folder:

```
python -m http.server 5173
```

## Add a topic

1. Create `data/topics/<id>.js` calling `EMATH.registerTopic({...})` (copy `ratio.js`).
2. Add a `<script>` line for it in `index.html`.
3. Make sure the id exists in `data/syllabus.js` (it then stops showing as "Coming soon").

Question parts accept `answer`, `unit`, `dp` / `sf` (rounding rules), `type: numeric | expression | ratio | mcq`, and `form: factorised | expanded` for algebra. Randomised questions go in `generators`; their answers are computed in code. Maths markup: `{a|b}` fraction, `x^2` power, `sqrt(...)` root.

## Syllabus accuracy

Nothing in `data/syllabus.js` has been checked against the MOE documents. Every topic is `verified: false` and uncertain placements show a "Check against MOE" flag. Verify, then set `verified: true`.

## Project layout

```
index.html            app shell
css/                  tokens (light/dark themes), base, components
js/                   app (router), store, util, math (answer checker), render-math, walkthrough
js/views/             home, topic, practice, quiz, reference, dashboard
js/viz/viz.js         pythagoras-proof, graph-plotter, prob-tree
data/                 syllabus, glossary, formulae, topics/<id>.js
```

## Topics

Ready: Ratio and Proportion, Percentage, Algebraic Manipulation and Linear Equations, Pythagoras' Theorem, Probability. The remaining syllabus topics appear as "Coming soon".

## Notes

Progress is stored in `localStorage` on the learner's device only; nothing is sent to a server.
