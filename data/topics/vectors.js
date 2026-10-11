(function () {
  EMATH.registerTopic({
    id: 'vectors', title: 'Vectors',
    strand: 'geometry', levels: [3, 4],
    syllabusNote: 'O-Level syllabus G7 (Sec 3/4).',
    verified: true,
    objectives: [
      'Use column vectors for translations and position vectors, and find the magnitude of a vector.',
      'Add, subtract and multiply vectors by a scalar.',
      'Express vectors in a diagram in terms of two given vectors a and b.',
      'Use vectors to show that points are collinear, or that lines are parallel.'
    ],
    explanation: [
      'A **vector** has both size (magnitude) and direction. A **column vector** vec(x, y) describes a move of x units across and y units up. The vector from A to B is written AB. The **position vector** of a point P is the vector OP from the origin O to P.',
      { term: 'Magnitude', def: 'The magnitude (length) of vec(x, y) is sqrt(x^2 + y^2). The magnitude is a number, not a vector.' },
      { term: 'Combining vectors', def: 'Add or subtract column vectors component by component. k × vec(x, y) = vec(kx, ky). A path from A to C through B gives AC = AB + BC. Reversing a vector changes its sign: BA = -AB.' },
      { term: 'Vector between two points', def: 'AB = OB - OA. If A is (1, 2) and B is (4, 6), AB = vec(3, 4).' },
      { term: 'Parallel vectors', def: 'Two vectors are parallel if one is a scalar multiple of the other: if AB = kCD then AB ∥ CD, and |AB| = |k| × |CD|.' },
      { term: 'Collinear points', def: 'Points are collinear (on one straight line) if two of the vectors between them are parallel **and** share a common point. To show O, T, B are collinear, show OT = kOB.' },
      { term: 'Ratios', def: 'If P is on AB with AP : AB = 2 : 5, then AP = {2|5}AB. Write every vector as a sum of the given vectors a and b, going along the lines of the diagram.' }
    ],
    examples: [
      { title: 'Column vectors', question: 'X is the point (8, -4) and Y is the point (6, 4). Find the vector XY and its magnitude, correct to 2 decimal places.',
        steps: ['XY = OY - OX = vec(6, 4) - vec(8, -4) = vec(-2, 8).', '|XY| = sqrt(4 + 64) = sqrt(68) = 8.25.'], answer: 'XY = vec(-2, 8), |XY| = 8.25' },
      { title: 'Using a and b', question: 'In a diagram, AB = 4a and AD = 8b. E is on BD with BE : BD = 3 : 4. Express BE in terms of a and b.',
        steps: ['BD = BA + AD = -4a + 8b.', 'BE = {3|4} × BD = {3|4}(-4a + 8b) = -3a + 6b.'], answer: 'BE = -3a + 6b' },
      { title: 'Collinear points', question: 'OABC is a trapezium. OA = 6m, OC = 8n and AB = 6n. D is the midpoint of OC. T is on AD with AT : AD = 3 : 5. Show that O, T and B are collinear.',
        steps: ['OB = OA + AB = 6m + 6n.', 'AD = AO + OD = -6m + 4n.', 'OT = OA + {3|5}AD = 6m + {3|5}(-6m + 4n) = {12|5}m + {12|5}n = {2|5}(6m + 6n).', 'So OT = {2|5}OB. Since the vectors share the point O, O, T and B lie on a straight line.'], answer: 'OT = (2/5) OB, so collinear' }
    ],
    mistakes: [
      'Getting the direction wrong: AB = OB - OA, not OA - OB.',
      'Leaving the answer as a number when the question wants a vector, or the other way round for magnitude.',
      'Using the diagram instead of the given information. Always route along the vectors you are told.',
      'Forgetting that parallel vectors are not enough for collinear points. They must also share a point.',
      'Mixing up the ratio: AP : AB = 2 : 5 means AP = {2|5}AB, but AP : PB = 2 : 5 means AP = {2|7}AB.'
    ],
    formulae: [
      { name: 'Magnitude', text: '|vec(x, y)| = sqrt(x^2 + y^2)' },
      { name: 'Vector between points', text: 'AB = OB - OA' },
      { name: 'Triangle law', text: 'AB + BC = AC' },
      { name: 'Parallel', text: 'AB = kCD' }
    ],
    summary: [
      'AB = OB - OA; add column vectors component by component.',
      'Magnitude = sqrt(x^2 + y^2).',
      'Parallel vectors are scalar multiples. Collinear points need parallel vectors with a common point.',
      'Break each ratio of lengths into a fraction of a vector, and route along the given vectors.'
    ],
    viz: null,
    questions: [
      { id: 'vc1', level: 'foundation', prompt: 'a = vec(2, 3) and b = vec(-1, 4). Find a + b.',
        figure: { type: 'grid', x: [-2, 4], y: [-1, 5], points: { O: [0, 0], _a: [2, 3], _b: [-1, 4] }, segments: [['O', '_a', 'arrow'], ['O', '_b', 'arrow']], side: { 'O-_a': 'a', 'O-_b': 'b' } , alt: 'A coordinate grid with two arrows from the origin O: the vector a to (2, 3) and the vector b to (-1, 4).' },
        parts: [{ label: '(a)', prompt: 'The top component of a + b.', answer: 1 }, { label: '(b)', prompt: 'The bottom component of a + b.', answer: 7 }],
        solution: ['a + b = vec(2 - 1, 3 + 4) = vec(1, 7).'] },
      { id: 'vc2', level: 'foundation', prompt: 'Find the magnitude of the vector vec(6, 8).', answer: 10, solution: ['sqrt(6^2 + 8^2) = sqrt(100) = 10.'] },
      { id: 'vc4', level: 'foundation', type: 'mcq', prompt: 'Which vector is parallel to vec(2, 4)?', options: ['vec(1, 2)', 'vec(4, 2)', 'vec(-2, 4)', 'vec(3, 5)'], answer: 0, solution: ['vec(2, 4) = 2 × vec(1, 2), so they are parallel.'] },
      { id: 'vc7', level: 'standard', prompt: 'The position vector of X is vec(8, -4) and the position vector of Y is vec(6, 4).',
        figure: { type: 'grid', x: [-1, 10], y: [-6, 6], points: { O: [0, 0], X: [8, -4], Y: [6, 4] }, pointLabels: { X: 'X(8, -4)', Y: 'Y(6, 4)' }, segments: [['O', 'X', 'arrow'], ['O', 'Y', 'arrow'], ['X', 'Y', 'arrow']] , alt: 'A coordinate grid with the origin O, the point X(8, -4) and the point Y(6, 4), with arrows from O to X, from O to Y and from X to Y.' },
        parts: [{ label: '(a)', prompt: 'XY = vec(p, q). Find q.', answer: 8, marks: 1 }, { label: '(b)', prompt: 'Find the magnitude of XY, correct to 2 decimal places.', answer: Math.sqrt(68), dp: 2, unit: 'units', marks: 2 }],
        solution: ['XY = vec(6 - 8, 4 + 4) = vec(-2, 8), so q = 8.', '|XY| = sqrt(4 + 64) = sqrt(68) = 8.25.'] },
      { id: 'vc8', level: 'standard', marks: 3, prompt: 'X is the point (8, -4) and Y is the point (6, 4). The point Z has coordinates (-1, k) and lies on the line XY produced (extended). Find k.', answer: 32,
        hint: 'XZ must be a multiple of XY = vec(-2, 8).', solution: ['XY = vec(-2, 8). XZ = vec(-1 - 8, k + 4) = vec(-9, k + 4).', 'XZ = 4.5 × XY, because -9 = 4.5 × (-2).', 'k + 4 = 4.5 × 8 = 36, so k = 32.'] },
      { id: 'vc9', level: 'standard', prompt: 'In a diagram, AB = 4a and AD = 8b. E is on BD with BE : BD = 3 : 4. F is the midpoint of BC, and EF = 2(a - b). Write each vector as p a + q b.',
        figure: { type: 'polygon', shape: 'general', pts: [[0, 0], [4, 0], [4.4, 3.6], [2.4, 3.6]], v: ['A', 'B', 'C', 'D'], divide: [{ name: 'E', a: 'B', b: 'D', t: 0.75 }, { name: 'F', a: 'B', b: 'C', t: 0.5 }], lines: [{ a: 'B', b: 'D', dash: true }, { a: 'E', b: 'F' }], side: { AB: '4a', AD: '8b' }, arrow: ['AB', 'AD'], dots: ['E', 'F'] , alt: 'Quadrilateral ABCD with AB equal to 4a along the bottom and AD equal to 8b up the left side. The diagonal BD is drawn, E lies on BD, F is the midpoint of BC, and EF is joined.' },
        parts: [{ label: '(a)', prompt: 'BE = p a + q b. Find p.', answer: -3, marks: 1 }, { label: '(b)', prompt: 'Find q for BE.', answer: 6, marks: 1 },
                { label: '(c)', prompt: 'BC = p a + q b. Find p.', answer: -2, marks: 1 }, { label: '(d)', prompt: 'Find q for BC.', answer: 8, marks: 1 },
                { label: '(e)', prompt: 'DC = k a. Find k, and hence say how AB compares with DC. Give k.', answer: 2, marks: 2 }],
        hint: 'BD = BA + AD. For BC, find BF = BE + EF first, and double it.',
        solution: ['BD = -4a + 8b, BE = {3|4}BD = -3a + 6b.', 'BF = BE + EF = -3a + 6b + 2a - 2b = -a + 4b, so BC = 2BF = -2a + 8b.', 'DC = DA + AB + BC = -8b + 4a - 2a + 8b = 2a.', 'DC = 2a and AB = 4a, so DC ∥ AB and AB = 2DC. ABCD is a trapezium.'] },
      { id: 'vc10', level: 'standard', prompt: 'OABC is a trapezium. OA = 6m, OC = 8n and AB = 6n. D is the midpoint of OC and T is on AD with AT : AD = 3 : 5.',
        figure: { type: 'polygon', shape: 'general', pts: [[0, 0], [6, 0], [8.1, 3.6], [2.8, 4.8]], v: ['O', 'A', 'B', 'C'], divide: [{ name: 'D', a: 'O', b: 'C', t: 0.5 }, { name: 'T', a: 'A', b: 'D', t: 0.6 }], lines: [{ a: 'A', b: 'D', dash: true }], side: { OA: '6m', AB: '6n', OC: '8n' }, arrow: ['OA', 'AB', 'OC'], dots: ['D', 'T'] , alt: 'Trapezium OABC with OA equal to 6m, AB equal to 6n and OC equal to 8n. D is the midpoint of OC, and T lies on the line AD.' },
        parts: [{ label: '(a)', prompt: 'OB = p m + q n. Find p + q.', answer: 12, marks: 2 }, { label: '(b)', prompt: 'OT = k OB. Find k.', answer: 0.4, marks: 3 }],
        solution: ['OB = OA + AB = 6m + 6n, so p + q = 12.', 'AD = -6m + 4n and OT = 6m + {3|5}(-6m + 4n) = {12|5}m + {12|5}n = {2|5}OB.', 'k = {2|5} = 0.4, so O, T and B are collinear.'] },
      { id: 'vc11', level: 'standard', prompt: 'OABC is a parallelogram where O is the origin, A is (3, 2) and C is (1, 5).',
        figure: { type: 'grid', x: [-1, 6], y: [-1, 8], points: { O: [0, 0], A: [3, 2], C: [1, 5] }, pointLabels: { A: 'A(3, 2)', C: 'C(1, 5)' }, segments: [['O', 'A', 'arrow'], ['O', 'C', 'arrow']] , alt: 'A coordinate grid with the origin O and arrows from O to A(3, 2) and from O to C(1, 5), two sides of the parallelogram OABC.' },
        parts: [{ label: '(a)', prompt: 'Find the x-coordinate of B.', answer: 4, marks: 1 }, { label: '(b)', prompt: 'Find the y-coordinate of B.', answer: 7, marks: 1 }, { label: '(c)', prompt: 'Find the length of OB, correct to 2 decimal places.', answer: Math.sqrt(65), dp: 2, marks: 2 }],
        hint: 'In a parallelogram OB = OA + OC.', solution: ['OB = OA + OC = vec(3, 2) + vec(1, 5) = vec(4, 7).', '|OB| = sqrt(16 + 49) = sqrt(65) = 8.06.'] },
      { id: 'vc12', level: 'standard', prompt: 'A is the point (-1, 4) and B is the point (9, -1). The point P is on AB with AP : AB = 2 : 5.',
        figure: { type: 'grid', x: [-2, 10], y: [-3, 6], points: { A: [-1, 4], B: [9, -1] }, pointLabels: { A: 'A(-1, 4)', B: 'B(9, -1)' }, segments: [['A', 'B', 'arrow']] , alt: 'A coordinate grid with an arrow from A(-1, 4) to B(9, -1).' },
        parts: [{ label: '(a)', prompt: 'x-coordinate of P.', answer: 3, marks: 2 }, { label: '(b)', prompt: 'y-coordinate of P.', answer: 2, marks: 1 }],
        solution: ['AB = vec(10, -5).', 'AP = {2|5}AB = vec(4, -2).', 'OP = OA + AP = vec(-1 + 4, 4 - 2) = vec(3, 2).'] },
      { id: 'vc14', level: 'standard', marks: 3, prompt: 'A boat is displaced by vec(6, 8) and then by vec(-2, 4) (units in km). Find its distance from the start, correct to 2 decimal places.', answer: Math.sqrt(160), dp: 2, unit: 'km',
        solution: ['Total displacement = vec(6 - 2, 8 + 4) = vec(4, 12).', 'Distance = sqrt(16 + 144) = sqrt(160) = 12.65 km.'] },
      { id: 'vc15', level: 'challenge', marks: 3, prompt: 'A is (1, 2), B is (4, 8) and C is (6, 12). AC = k AB. Find k as a fraction, and hence the three points are collinear.', answer: '5/3',
        solution: ['AB = vec(3, 6) and AC = vec(5, 10).', 'AC = {5|3} × AB, so k = {5|3}.', 'AC and AB are parallel and share the point A, so A, B and C are collinear.'] },
      { id: 'vc16', level: 'challenge', prompt: 'OA = a and OB = b. M is the midpoint of AB and N is on OB with ON : NB = 1 : 2. Write MN = p a + q b.',
        figure: { type: 'polygon', shape: 'general', pts: [[0, 0], [5, 0], [1.5, 3.5]], v: ['O', 'A', 'B'], divide: [{ name: 'M', a: 'A', b: 'B', t: 0.5 }, { name: 'N', a: 'O', b: 'B', t: 0.3333 }], lines: [{ a: 'M', b: 'N', dash: true }], side: { OA: 'a', OB: 'b' }, arrow: ['OA', 'OB'], dots: ['M', 'N'] , alt: 'Triangle OAB with OA equal to a and OB equal to b. M is the midpoint of AB and N is on OB. M and N are joined.' },
        parts: [{ label: '(a)', prompt: 'Find p.', answer: '-1/2', marks: 2 }, { label: '(b)', prompt: 'Find q.', answer: '-1/6', marks: 2 }],
        hint: 'OM = {1|2}(a + b) and ON = {1|3}b.', solution: ['OM = {1|2}(a + b) and ON = {1|3}b.', 'MN = ON - OM = {1|3}b - {1|2}a - {1|2}b = -{1|2}a - {1|6}b.'] }
    ],
    generators: [
      { id: 'magnitude', level: 'foundation', make: function (r) {
        var t = r.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]), k = r.int(1, 3), sx = r.pick([-1, 1]), sy = r.pick([-1, 1]);
        var x = sx * t[0] * k, y = sy * t[1] * k;
        return { prompt: 'Find the magnitude of the vector vec(' + x + ', ' + y + ').', answer: t[2] * k, hint: 'sqrt(x^2 + y^2).',
          solution: ['Magnitude = sqrt(' + x * x + ' + ' + y * y + ') = sqrt(' + (x * x + y * y) + ') = ' + t[2] * k + '.'] };
      } },
      { id: 'between-points', level: 'standard', make: function (r) {
        var x1 = r.int(-5, 5), y1 = r.int(-5, 5), dx = r.int(-6, 6), dy = r.int(-6, 6);
        while (dx === 0 && dy === 0) dx = r.int(1, 6);
        var x2 = x1 + dx, y2 = y1 + dy, v = Math.sqrt(dx * dx + dy * dy);
        return { prompt: 'A is the point (' + x1 + ', ' + y1 + ') and B is the point (' + x2 + ', ' + y2 + '). Find the length of AB, correct to 2 decimal places.', answer: v, dp: 2, unit: 'units',
          figure: { type: 'grid', x: [Math.min(x1, x2, 0) - 1, Math.max(x1, x2, 0) + 1], y: [Math.min(y1, y2, 0) - 1, Math.max(y1, y2, 0) + 1], points: { A: [x1, y1], B: [x2, y2] }, pointLabels: { A: 'A(' + x1 + ', ' + y1 + ')', B: 'B(' + x2 + ', ' + y2 + ')' }, segments: [['A', 'B', 'accent']],
            alt: 'A coordinate grid with the points A(' + x1 + ', ' + y1 + ') and B(' + x2 + ', ' + y2 + ') joined by a straight line.' },
          hint: 'AB = OB - OA.', solution: ['AB = vec(' + dx + ', ' + dy + ').', '|AB| = sqrt(' + (dx * dx + dy * dy) + ') = ' + v.toFixed(2) + '.'] };
      } }
    ]
  });
})();
