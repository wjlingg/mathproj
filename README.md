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

Question parts accept `answer`, `unit`, `dp` / `sf` (rounding rules), `type: numeric | expression | ratio | mcq`, and `form: factorised | expanded` for algebra. Randomised questions go in `generators`; their answers are computed in code. Maths markup: `{a|b}` fraction, `x^2` power, `sqrt(...)` root, `mat(1,2;3,4)` matrix, `vec(3,-2)` column vector.

## Syllabus accuracy

Nothing in `data/syllabus.js` has been checked against the MOE documents. Every topic is `verified: false` and uncertain placements show a "Check against MOE" flag. Verify, then set `verified: true`. In particular, confirm whether Matrices belongs in 4052 (it appears in 2026 Sec 4 prelims) and the levels of Vectors, Bearings, Circles, Sine and Cosine Rules and Cumulative Frequency.

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

All 30 topics in `data/syllabus.js` are ready, each with notes, 3 worked examples, 15 to 17 questions (foundation, standard, challenge) with exam-style mark allocations, common mistakes, formulae and randomised generators:

- **Number and algebra:** Ratio and Proportion, Percentage, Algebraic Manipulation, Primes/HCF/LCM, Integers and Rational Numbers, Approximation and Estimation, Direct and Inverse Proportion, Indices and Standard Form, Linear Inequalities, Number Patterns and Sequences, Linear Graphs and Simultaneous Equations, Quadratic Equations and Graphs, Set Language, Speed-Time Graphs, Matrices, Money Matters (interest, hire purchase, exchange rates), Graphs of Functions.
- **Geometry and measurement:** Angles/Lines/Polygons, Perimeter/Area/Volume, Congruence and Similarity, Pythagoras' Theorem, Trigonometry, Sine and Cosine Rules, Properties of Circles, Bearings, Vectors.
- **Statistics and probability:** Data Handling, Mean/Median/Mode, Cumulative Frequency and Box Plots, Probability.

## Where the questions come from

The questions are original. They were written to match the topic spread, style and mark allocations of Sec 1 to Sec 4 school exam papers (a local, git-ignored `papers/` folder holds the source PDFs). No exam question text is copied. Diagrams cannot be shown, so figure-based and graph-reading questions state the values to use. The level each topic is placed at is unverified (see above); several were added or adjusted because the papers set them (for example Matrices, Speed-Time Graphs and Money Matters).

## Notes

Progress is stored in `localStorage` on the learner's device only; nothing is sent to a server.

## For AI agents and contributors

See [AGENTS.md](AGENTS.md) (architecture, conventions, adding topics). Run `tests/selfcheck.js` in the browser console to verify the answer checker against every question.
