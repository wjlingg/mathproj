/*
 * Syllabus index. NOTHING here has been checked against the MOE documents yet:
 * every entry is `verified: false`, and uncertain placements carry a `check` note
 * that the UI shows as a flag. Fill in `verified: true` once checked.
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
    { id: 'percentage', title: 'Percentage', strand: 'number-algebra', levels: [1, 2] },
    { id: 'algebra', title: 'Algebraic Manipulation and Linear Equations', strand: 'number-algebra', levels: [1, 2, 3] },
    { id: 'pythagoras', title: "Pythagoras' Theorem", strand: 'geometry', levels: [2, 3] },
    { id: 'probability', title: 'Probability', strand: 'stats-prob', levels: [2, 3, 4] },

    { id: 'primes-hcf-lcm', title: 'Primes, HCF and LCM', strand: 'number-algebra', levels: [1] },
    { id: 'integers-rationals', title: 'Integers, Rational Numbers and Real Numbers', strand: 'number-algebra', levels: [1] },
    { id: 'approximation', title: 'Approximation and Estimation', strand: 'number-algebra', levels: [1, 2] },
    { id: 'proportion', title: 'Direct and Inverse Proportion', strand: 'number-algebra', levels: [2, 3], check: 'Placement of direct and inverse proportion to be confirmed.' },
    { id: 'indices', title: 'Indices and Standard Form', strand: 'number-algebra', levels: [2, 3] },
    { id: 'inequalities', title: 'Linear Inequalities', strand: 'number-algebra', levels: [2] },
    { id: 'sequences', title: 'Number Patterns and Sequences', strand: 'number-algebra', levels: [2, 3], check: 'Placement of sequences to be confirmed.' },
    { id: 'graphs', title: 'Linear Graphs and Simultaneous Equations', strand: 'number-algebra', levels: [2, 3] },
    { id: 'quadratics', title: 'Quadratic Equations and Graphs', strand: 'number-algebra', levels: [3, 4] },
    { id: 'sets', title: 'Set Language and Notation', strand: 'number-algebra', levels: [3], check: 'Unsure whether this sits in Sec 2 or Sec 3.' },
    { id: 'speed-time', title: 'Speed-Time Graphs', strand: 'number-algebra', levels: [3], check: 'Added from the Sec 3 papers; level placement to be confirmed.' },

    { id: 'angles', title: 'Angles, Lines and Polygons', strand: 'geometry', levels: [1, 2] },
    { id: 'mensuration', title: 'Perimeter, Area and Volume', strand: 'geometry', levels: [1, 2, 3] },
    { id: 'congruence-similarity', title: 'Congruence and Similarity', strand: 'geometry', levels: [2, 3, 4] },
    { id: 'circles', title: 'Properties of Circles', strand: 'geometry', levels: [3, 4] },
    { id: 'trigonometry', title: 'Trigonometry (right-angled)', strand: 'geometry', levels: [3] },
    { id: 'bearings', title: 'Bearings', strand: 'geometry', levels: [3, 4], check: 'Believed upper-secondary; to be confirmed.' },
    { id: 'trig-rules', title: 'Sine and Cosine Rules, 3D Trigonometry', strand: 'geometry', levels: [4], check: 'Believed upper-secondary; to be confirmed.' },
    { id: 'vectors', title: 'Vectors', strand: 'geometry', levels: [4], check: 'Believed upper-secondary; to be confirmed.' },

    { id: 'data-handling', title: 'Data Handling and Statistical Diagrams', strand: 'stats-prob', levels: [1, 2] },
    { id: 'averages', title: 'Mean, Median and Mode', strand: 'stats-prob', levels: [2, 3] },
    { id: 'cumulative-frequency', title: 'Cumulative Frequency and Box Plots', strand: 'stats-prob', levels: [3, 4], check: 'Unsure which of these are in 4052, and at which level.' }
  ]
};
