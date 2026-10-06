/*
 * Syllabus index. Levels were checked against the MOE "Mathematics Syllabuses, Secondary One
 * to Four" (O-Level Mathematics, Section 3, implemented from the 2020 Sec 1 cohort).
 * That document groups content as Sec 1, Sec 2 and "Sec 3/4", so any Sec 3/4 topic is listed
 * under both Sec 3 and Sec 4. Each topic file has a `syllabusNote` quoting the syllabus
 * strand reference (for example N7.11 or G3).
 * Two topics are real-world contexts in the syllabus rather than content items; they keep a
 * `check` note and their level is a teaching choice.
 * Topics with a data/topics/<id>.js file are "ready"; the rest show as "coming soon".
 */
EMATH.syllabus = {
  levels: [
    { id: 1, name: 'Sec 1' },
    { id: 2, name: 'Sec 2' },
    { id: 3, name: 'Sec 3' },
    { id: 4, name: 'Sec 4' }
  ],
  strands: [
    { id: 'number-algebra', name: 'Number & Algebra' },
    { id: 'geometry', name: 'Geometry & Measurement' },
    { id: 'stats-prob', name: 'Statistics & Probability' }
  ],
  topics: [
    { id: 'ratio', title: 'Ratio and Proportion', strand: 'number-algebra', levels: [1, 2] },
    { id: 'percentage', title: 'Percentage', strand: 'number-algebra', levels: [1] },
    { id: 'algebra', title: 'Algebraic Manipulation and Linear Equations', strand: 'number-algebra', levels: [1, 2, 3, 4] },
    { id: 'pythagoras', title: "Pythagoras' Theorem", strand: 'geometry', levels: [2] },
    { id: 'probability', title: 'Probability', strand: 'stats-prob', levels: [2, 3, 4] },

    { id: 'primes-hcf-lcm', title: 'Primes, HCF and LCM', strand: 'number-algebra', levels: [1] },
    { id: 'integers-rationals', title: 'Integers, Rational Numbers and Real Numbers', strand: 'number-algebra', levels: [1] },
    { id: 'approximation', title: 'Approximation and Estimation', strand: 'number-algebra', levels: [1] },
    { id: 'proportion', title: 'Direct and Inverse Proportion', strand: 'number-algebra', levels: [2] },
    { id: 'indices', title: 'Indices and Standard Form', strand: 'number-algebra', levels: [3, 4] },
    { id: 'inequalities', title: 'Linear Inequalities', strand: 'number-algebra', levels: [2, 3, 4] },
    { id: 'sequences', title: 'Number Patterns and Sequences', strand: 'number-algebra', levels: [1] },
    { id: 'graphs', title: 'Linear Graphs and Simultaneous Equations', strand: 'number-algebra', levels: [1, 2, 3, 4] },
    { id: 'quadratics', title: 'Quadratic Equations and Graphs', strand: 'number-algebra', levels: [2, 3, 4] },
    { id: 'sets', title: 'Set Language and Notation', strand: 'number-algebra', levels: [3, 4] },
    { id: 'speed-time', title: 'Speed-Time Graphs', strand: 'number-algebra', levels: [3, 4], check: 'The syllabus names speed-time graphs as a real-world context in every year, not a content item. Level is a teaching choice.' },
    { id: 'matrices', title: 'Matrices', strand: 'number-algebra', levels: [3, 4] },
    { id: 'money-maths', title: 'Money Matters: Interest, Hire Purchase and Exchange Rates', strand: 'number-algebra', levels: [3, 4], check: 'The syllabus names interest, instalments and money exchange as real-world contexts in every year, not a content item. Level is a teaching choice.' },
    { id: 'curve-graphs', title: 'Graphs of Functions and Their Features', strand: 'number-algebra', levels: [3, 4] },

    { id: 'angles', title: 'Angles, Lines and Polygons', strand: 'geometry', levels: [1] },
    { id: 'mensuration', title: 'Perimeter, Area and Volume', strand: 'geometry', levels: [1, 2, 3, 4] },
    { id: 'congruence-similarity', title: 'Congruence and Similarity', strand: 'geometry', levels: [2, 3, 4] },
    { id: 'circles', title: 'Properties of Circles', strand: 'geometry', levels: [3, 4] },
    { id: 'trigonometry', title: 'Trigonometry (right-angled)', strand: 'geometry', levels: [2, 3, 4] },
    { id: 'bearings', title: 'Bearings', strand: 'geometry', levels: [3, 4] },
    { id: 'trig-rules', title: 'Sine and Cosine Rules, 3D Trigonometry', strand: 'geometry', levels: [3, 4] },
    { id: 'vectors', title: 'Vectors', strand: 'geometry', levels: [3, 4] },

    { id: 'data-handling', title: 'Data Handling and Statistical Diagrams', strand: 'stats-prob', levels: [1, 2] },
    { id: 'averages', title: 'Mean, Median and Mode', strand: 'stats-prob', levels: [2, 3, 4] },
    { id: 'cumulative-frequency', title: 'Cumulative Frequency and Box Plots', strand: 'stats-prob', levels: [3, 4] }
  ]
};
