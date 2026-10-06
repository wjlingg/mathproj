# AGENTS.md

Guide for AI coding agents working on this repo. Humans: see README.md.

**Before large changes, read [docs/PROGRESS.md](docs/PROGRESS.md)** (how the content was built, audit rules, gotchas, open items). Add a dated line to its Log when something significant changes.

## Working preferences (from the project owner)

- **Never push unless asked.** The owner says "push to github" explicitly. Commit only when asked or when pushing. Work on `main`, never force-push.
- **Original questions only.** Model new questions on the exam papers' topics, style and mark allocations, but never copy their text.
- **Check against the MOE syllabus** (`papers/Olevel_Syllabus.pdf`, local only) before adding or moving content.
- **Keep banks lean and accurate.** Remove duplicates, pure recall and out-of-syllabus items. Verify every worked answer by hand or in code.
- **Be honest in reports.** State limits, errors found and anything unverified. Keep summaries short and specific.
- **The repo is the memory.** Do not rely on chat history or tool memory: record decisions in `docs/PROGRESS.md` and rules here.

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
3. Meet the content bar: 3+ worked examples, 10+ hand-written questions across `foundation | standard | challenge` (quality over count: no near-duplicates, no pure recall unless it builds a skill), multi-part and Singapore-context items, a "common mistakes" list, formulae, summary, and 2 generators.

Question shape: `{id, level, type?, prompt, answer | parts:[{label, prompt, answer, unit, dp, sf, tol, marks}], hint, solution:[steps]}`. A part's `answer` may be a number or a fraction string such as `"2/15"`. Unit `'$'` renders as a prefix. `solution` steps use the same markup as prompts.

## Rules and gotchas

- **Randomised questions: compute answers in code**, never hand-type them. Generators return `{prompt, answer, solution, ...}` from `make(rng)`.
- Use `const`/`let` for variables captured by closures inside loops. A `var` here caused infinite recursion in the expression compiler once.
- Question ids must be unique per topic and stable (progress is keyed by id). Ids starting `gen-` are not recorded as "solved".
- **Syllabus placement was checked against the MOE document** "Mathematics Syllabuses, Secondary One to Four" (O-Level Mathematics, Section 3; kept locally in the git-ignored `papers/` folder). That document groups content as Sec 1, Sec 2 and "Sec 3/4", so a Sec 3/4 topic lists levels `[3, 4]`. Each topic's `syllabusNote` cites the strand reference (for example N7.11, G3). Keep `verified: true` only where the content matches a listed item. Two topics (Speed-Time Graphs, Money Matters) are real-world contexts in the syllabus rather than content items; they stay `verified: false` with a `check` note. Do not add content that is not in the syllabus (for example geometric sequences, sums of sequences, surds). Matrices (N9) and vectors (G7) are in the O-Level syllabus. Question text cannot show diagrams, so figure-based and graph-reading questions give the values to use.
- Keep the banks lean: before adding a question, check that no existing question already tests the same skill at the same level.
- Keep everything accessible: labelled inputs, `aria-live` feedback, visible focus, works at phone width, respects `prefers-reduced-motion` and dark mode (colours come from CSS tokens in `css/tokens.css`).
- Match the existing style: ES5-leaning IIFEs, no frameworks, comments only where the reason is not obvious.

## Testing

No test runner. Serve the folder (`python -m http.server 5173`), open the site, then paste `tests/selfcheck.js` into the browser console. It feeds each question's own answer (plus many generated variants) through the checker, scans every authored string for unrendered markup, checks for duplicate ids and stress-tests the generators. It must report `bad: 0` with empty `leftovers`, `dupIds` and `generatorBad`. Hard-reload first, because the dev server lets the browser cache `.js` files. Also click through each route at phone width and confirm the console is clean.

Do not commit `.claude/` (local tooling). Do not force-push.
