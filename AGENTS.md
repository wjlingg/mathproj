# AGENTS.md

Guide for AI coding agents working on this repo. Humans: see README.md.

## What this is

Static site for Singapore Sec 1-4 Math / O-Level E-Math (4052). Vanilla HTML/CSS/JS, **no build step, no modules, no dependencies**. Works from `file://` and GitHub Pages.

## Architecture

- `index.html` loads every script with plain `<script>` tags, **in dependency order** into one global namespace, `EMATH`. A new script file needs a new tag, in the right place (util, store, render-math, math, walkthrough, viz, data, views/question, views/bank, other views, app last).
- `js/app.js`: hash router. `#/home`, `#/topic/<id>`, `#/practice/<id>`, `#/quiz[/<id>]`, `#/reference`, `#/dashboard`. The route name is looked up in `EMATH.views[name](container, arg)`.
- `js/util.js`: `h()` DOM builder (`html:` attr = trusted innerHTML), seeded `rng`, `gcd`, `shuffle`.
- `js/render-math.js`: `EMATH.rm(str)` turns authored text into safe HTML. Markup: `{a|b}` fraction, `x^2` / `x^(-3)` superscript, `sqrt(expr)` (no nested parentheses inside), `**bold**`, `mat(1,2;3,4)` matrix (commas between columns, semicolons between rows) and `vec(3,-2)` column vector (no brackets, quotes or `&` inside; use decimals, not fractions). Input is HTML-escaped first. Do not use `{...|...}` for anything else.
- `js/math.js`: answer checker `EMATH.math.gradePart(part, input)`. Numeric (fractions, %, decimals, mixed numbers, unit stripping, `dp`/`sf` rounding rules), `expression` (compiled and compared at sample points, so `2(x+3)` equals `2x+6`; `form: 'factorised'|'expanded'`), `ratio` (must be simplest form unless `simplest:false`), `mcq` (answer is an option index).
- `js/views/question.js`: `EMATH.normQ(q)` (gives every question a `parts[]`), `EMATH.questionForm(q, {quiz})`, `EMATH.solutionBlock(q)`.
- `js/views/bank.js`: `EMATH.bank(topic)` = hand-written questions + 3 fixed-seed generated per generator; `EMATH.generate()` makes fresh ones.
- `js/store.js`: localStorage wrapper (all access in try/catch, memory fallback). Key `emath-sg:v1`.
- `js/viz/viz.js`: `EMATH.viz[name](container)` interactive SVG demos, referenced by a topic's `viz` field.
- `data/syllabus.js`: index of all topics. A topic is "ready" when a matching `data/topics/<id>.js` registers itself; otherwise it shows "Coming soon".

## Adding a topic

1. Copy `data/topics/ratio.js` to `data/topics/<id>.js`; the `id` must match the entry in `data/syllabus.js`.
2. Add `<script src="data/topics/<id>.js">` to `index.html` (before the views).
3. Meet the content bar: 3+ worked examples, 15+ questions across `foundation | standard | challenge`, multi-part and Singapore-context items, a "common mistakes" list, formulae, summary.

Question shape: `{id, level, type?, prompt, answer | parts:[{label, prompt, answer, unit, dp, sf, tol, marks}], hint, solution:[steps]}`. A part's `answer` may be a number or a fraction string such as `"2/15"`. Unit `'$'` renders as a prefix. `solution` steps use the same markup as prompts.

## Rules and gotchas

- **Randomised questions: compute answers in code**, never hand-type them. Generators return `{prompt, answer, solution, ...}` from `make(rng)`.
- Use `const`/`let` for variables captured by closures inside loops. A `var` here caused infinite recursion in the expression compiler once.
- Question ids must be unique per topic and stable (progress is keyed by id). Ids starting `gen-` are not recorded as "solved".
- **Syllabus accuracy is unverified.** Every topic is `verified: false` and uncertain placements carry a `check` note shown in the UI. Do not mark `verified: true` or invent syllabus placement without checking MOE documents. Surds are believed out of 4052 and are deliberately omitted. Matrices were also believed to be out, but several 2026 Sec 4 prelim papers set matrix questions, so a Matrices topic exists with a `check` note; confirm against the MOE syllabus. Question text cannot show diagrams, so figure-based and graph-reading questions give the values to use.
- Keep everything accessible: labelled inputs, `aria-live` feedback, visible focus, works at phone width, respects `prefers-reduced-motion` and dark mode (colours come from CSS tokens in `css/tokens.css`).
- Match the existing style: ES5-leaning IIFEs, no frameworks, comments only where the reason is not obvious.

## Testing

No test runner. Serve the folder (`python -m http.server 5173`), open the site, then paste `tests/selfcheck.js` into the browser console. It feeds each question's own answer (plus many generated variants) through the checker and prints any failures. It must report `bad: 0`. Also click through each route at phone width and confirm the console is clean.

Do not commit `.claude/` (local tooling). Do not force-push.
