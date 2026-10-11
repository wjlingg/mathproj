# Project history and decisions

Read this before large changes. [AGENTS.md](../AGENTS.md) has the rules; this file records how the content was built, why, and what is still open. Add dated entries at the bottom of "Log" when something significant changes.

## Where things stand (October 2026)

- 30 topics, all ready, about 475 hand-written questions plus 2 generators per topic (see `data/syllabus.js` and `data/topics/`).
- Topic levels follow the MOE "Mathematics Syllabuses, Secondary One to Four" (O-Level Mathematics, Section 3). The syllabus groups content as Sec 1, Sec 2 and "Sec 3/4", so a Sec 3/4 topic lists `levels: [3, 4]`. Each topic's `syllabusNote` cites the strand (for example N7.11, G3).
- 28 topics are `verified: true`. **Speed-Time Graphs** and **Money Matters** stay `verified: false`: the syllabus names speed-time graphs, interest, instalments and money exchange only as real-world contexts for all four years, so their level is a teaching choice.
- `tests/selfcheck.js` is the regression test (see Testing below).

## How the content was made

1. **Sources.** Exam papers were supplied as PDFs in a local, git-ignored `papers/` folder (Sec 1 Express EOY 2024, Sec 2 SA2 2025, Sec 3 NA final 2024, Sec 4 prelims 2026) plus the MOE syllabus PDF `papers/Olevel_Syllabus.pdf`. They were read to learn topic coverage, question style and mark allocations. **No question text is copied**: every question is original.
2. **Reading scans.** Sec 1 to 3 papers have no text layer. They were rendered to PNG with `tools/render-pdf.ps1` (uses the Windows built-in PDF renderer, no installs) and read as images. The 2026 Sec 4 file is a bundle of about 10 school prelims with a text layer; `pdftotext -layout` extracts it. The syllabus PDF also has a text layer.
3. **Caveat on the Sec 3 papers.** They are N(A) 4045, not E-Math 4052. Topics were kept only if the O-Level syllabus lists them.
4. **Topics added because the papers set them:** Matrices (syllabus N9), Vectors (G7), Cumulative Frequency and Box Plots, Speed-Time Graphs, Money Matters (interest, hire purchase, exchange rates, costing) and Graphs of Functions.
5. **New maths markup** `mat(1,2;3,4)` and `vec(3,-2)` was added to `js/render-math.js` (with CSS in `css/components.css`) because Sec 4 papers use matrices and column vectors heavily.

## Audit rules used to prune the banks (82 questions removed in Oct 2026)

Remove a question when it is any of:
- **Out of the syllabus**: geometric sequences and sums of sequence terms.
- **Wrong topic or level**: standard form inside Approximation (moved to Indices and Standard Form); compound interest inside Percentage (kept in Money Matters).
- **A near-duplicate** of another question at the same level (for example five back-bearing questions, four missing-mean questions).
- **Pure recall that builds no skill** (for example "write down sin 90°").
- **Chained to another question** ("from the previous question"): questions can be shown in any order.

Keep multi-step, real-world and "explain/compare" items, and one clean example of each skill.

## Next steps (suggested, in priority order)

1. **Spot-check answers against a trusted key.** Worked answers were verified by hand or in code, not against a published key. Review a sample from each topic.
2. **Add generators for Probability** (the only topic with `generators: []`).
3. **Roll diagrams out to the remaining topics.** The figure engine (`js/figures.js`) is done, with figures in Angles, Pythagoras, Trigonometry, Circles, Bearings, Congruence & Similarity, every geometry, graph, data and mensuration topic (17 of 30 topics, 2026-10-12). Matrices has no geometric content (matrix arithmetic and tables only), so it has none. Still missing: constructions, graph drawing and an interactive plot/draw input. New figure types are added as a preset in `js/figures.js`. Constructions and graph drawing still need an interactive plot/draw input.
4. **Decide the level of Speed-Time Graphs and Money Matters** (see above), then set `verified: true` or remove the flag.
5. **Check balance of difficulty.** Some banks have few challenge items (for example Approximation, Sets, Data Handling, Cumulative Frequency).
6. **Add a quiz or exam-paper mode** that mixes topics by level with a paper-style mark total (Paper 1 about 26 short questions, Paper 2 about 9 to 10 longer questions, 90 marks each).
7. **Optional: glossary and formula sheet** (`data/glossary.js`, `data/formulae.js`) were written early and have not been rechecked against the full topic list.

## Restarting in a new session

The `papers/` folder is git-ignored and local only. On a new machine, copy it separately (it holds the exam PDFs and the MOE syllabus). Then start the session with:

> Continue the E-Math SG project. Read AGENTS.md and docs/PROGRESS.md first, then run tests/selfcheck.js before changing anything.

## Known limits and open items

- Diagrams exist for every geometry, graph, data and mensuration topic. The algebra, number and matrix topics have none because a diagram would add nothing. Curve and line figures show the graph that a question gives, but never the line or curve the student is asked to find. Other figure-based and graph-reading questions still state the values to use. Diagrams are schematic ("not drawn to scale"); the trig elevation question with two sightings (`tr15`) has no figure yet. **Constructions, graph drawing and "explain in words" parts are not covered.**
- Speed-Time Graphs and Money Matters levels are a judgement (see above).
- No generator exists for Probability (`generators: []`); its bank is hand-written only.
- Answers were worked by hand or computed in code. Errors found and fixed during the work (for example a wrong median, a wrong profit total, a wrong average speed) show that fixed-answer questions deserve a spot-check against a trusted key before wider use.

## Gotchas

- **Stale JS in the browser.** `python -m http.server` sends no cache headers, so after editing a data file the browser may keep the old copy. Hard-reload, or fetch with `{ cache: 'reload' }` before re-running tests.
- **`sqrt(...)` cannot contain brackets**, for example `sqrt(3^2 - 4(1)(-5))` renders as plain text. Simplify inside first (`sqrt(9 + 20)`). `selfcheck.js` flags these.
- **Rounding ties.** A generator that rounds to `dp` can produce a value exactly halfway (for example 8.6345 to 3 d.p.) where `toFixed` and the checker disagree. Pick digits so the next digit is not 5, using integer arithmetic.
- **Markup characters.** Do not use `|` inside braces for anything except fractions. Keep brackets, quotes and `&` out of `mat()` and `vec()` entries.
- **Generated ids** start `gen-` and are not recorded as "solved"; hand-written ids must stay unique and stable because progress is keyed by them.
- **Windows line endings.** Git warns "LF will be replaced by CRLF". It is harmless.

## Testing

Serve the folder (`python -m http.server 5173`), open the site and paste `tests/selfcheck.js` into the console. Expect `bad: 0` with empty `leftovers`, `dupIds` and `generatorBad`. It checks that every answer marks itself correct, that no raw markup is left, that ids are unique, and runs 300 generator seeds per generator. It cannot check that an answer is mathematically right, so review new questions by hand.

## Log

- **2026-10-06**: Built all 30 topics from the Sec 1 to 4 papers; added `mat()`/`vec()` markup; checked topic levels against the MOE syllabus and set `verified`; removed 82 redundant or out-of-syllabus questions; added this file, `tools/render-pdf.ps1` and the extended self-check.
- **2026-10-12**: Added question diagrams. New `js/figures.js` (`EMATH.fig.render`, types triangle/polygon/parallel/fan/grid/cuboid), `figure` field on questions and parts, shown in practice, quiz and quiz review; CSS in `components.css`; `selfcheck.js` now renders every figure and requires `alt`. Piloted on 9 Angles, 12 Pythagoras and 8 Trigonometry questions plus the generators; added Pythagoras `y16` (distance on a grid).
- **2026-10-12 (2)**: Figures for Circles (16 questions + generators), Bearings (8 + generators) and Congruence & Similarity (4 + a generator). New figure types `circle`, `bearing` and `multi` (side-by-side shapes); triangle `shape:'sss'`; `divide`, `par`, `texts` keys. **Data fix found while drawing:** `cs14` gave AB = 8 cm, BC = 11 cm, angle ABC = 64° and angle ACB = 51°, which cannot all hold in one triangle; AB was not needed by any part, so it was removed (answers unchanged).
- **2026-10-12 (3)**: Graph figures for Graphs (11 questions + gradient generator), Curve Graphs (7), Speed-Time (8 + both generators) and Vectors (7 + distance generator). `grid` now takes `curves` (function plots, clipped to the frame), `paths` (polylines), per-axis steps, axis labels and `free:true` (separate x and y scales for speed-time and curve graphs); lines can carry arrowheads (`arrow`, or `'arrow'` segments) for vectors.
- **2026-10-12 (4)**: Figures for Sets, Probability, Data Handling, Cumulative Frequency and Averages. New figure types `venn` (2 sets, 3 sets or a subset, with region counts and shading by clip-path), `tree` (probability trees), `bar` (bar chart and histogram), `pie`, `box` and `stem` (stem-and-leaf); `paths` can be `smooth` (monotone curve, for cumulative frequency). New original questions `st20` and `st21` (describe a shaded Venn region). **Bug found while adding figures:** `cf2` said "For the same box plot" with no data (a leftover chained question); it now states the five-number summary.
- **2026-10-12 (5)**: Figures for Trig Rules (15 questions + both generators) and Mensuration (20 + both generators). New figure types `pyramid` and `solid` (stacked cylinder, cone, hemisphere and sphere, with hidden edges dashed); triangle shapes `sas` and `asa`; `paths` and `EMATH.fig.arc()` work on every type (for semicircles and sectors); `multi` now carries paths and text. Also removed an irrelevant perimeter step from the `rect-area` generator's solution.
