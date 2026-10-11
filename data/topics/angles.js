(function () {
  EMATH.registerTopic({
    id: 'angles', title: 'Angles, Lines and Polygons',
    strand: 'geometry', levels: [1],
    syllabusNote: 'O-Level syllabus G1 (Sec 1).',
    verified: true,
    objectives: [
      'Use angle facts: angles on a straight line, at a point, vertically opposite angles.',
      'Use the angle properties of parallel lines: corresponding, alternate and co-interior angles.',
      'Use the angle sum and exterior angle of a triangle, and properties of special triangles and quadrilaterals.',
      'Find interior and exterior angles of polygons, including regular polygons.'
    ],
    explanation: [
      'Angles are measured in degrees. Questions in this topic are normally answered with a **reason** for each step, so learn the wording below. Sketch the diagram from the description and mark each angle you find.',
      { term: 'Basic angle facts', def: 'Angles on a straight line add up to 180°. Angles at a point add up to 360°. Vertically opposite angles are equal.' },
      { term: 'Parallel lines', def: 'When a line crosses two parallel lines: corresponding angles are equal, alternate angles are equal, and co-interior angles (between the lines, on the same side) add up to 180°.' },
      { term: 'Triangles', def: 'The angles of a triangle add up to 180°. An exterior angle equals the sum of the two opposite interior angles. In an isosceles triangle the base angles are equal.' },
      { term: 'Quadrilaterals', def: 'The angles add up to 360°. In a parallelogram opposite angles are equal and adjacent angles add up to 180°.' },
      { term: 'Polygons', def: 'The interior angles of an n-sided polygon add up to (n - 2) × 180°. The exterior angles of any polygon add up to 360°. For a regular polygon each exterior angle is {360°|n}, and interior + exterior = 180°.' }
    ],
    examples: [
      { title: 'Using algebra in a triangle', question: 'The angles of a triangle are x°, (2x + 10)° and (3x - 40)°. Find x and the size of the largest angle.',
        steps: ['The angles add up to 180°: x + (2x + 10) + (3x - 40) = 180.', '6x - 30 = 180, so 6x = 210 and x = 35.', 'The angles are 35°, 80° and 65°. The largest is 80°. Check: 35 + 80 + 65 = 180 ✓.'], answer: 'x = 35, largest angle 80°' },
      { title: 'Parallel lines', question: 'AB and CD are parallel, with AB above CD and B and D on the right. A line crosses them at P on AB and Q on CD. Angle BPQ is 110°. Find angle PQD.',
        steps: ['B and D are on the same side of PQ and between the parallel lines, so angles BPQ and PQD are co-interior angles.','Co-interior angles add up to 180° when the lines are parallel.', 'Angle PQD = 180° - 110° = 70°.'], answer: '70°' },
      { title: 'A regular polygon', question: 'Each exterior angle of a regular polygon is 24°. How many sides does it have, and what is each interior angle?',
        steps: ['The exterior angles add up to 360°, so n = 360 ÷ 24 = 15.', 'Interior angle = 180° - 24° = 156°.'], answer: '15 sides, interior angle 156°' }
    ],
    mistakes: [
      'Using "alternate" or "corresponding" when the lines are not marked parallel.',
      'Confusing co-interior angles (add to 180°) with alternate angles (equal).',
      'Using (n - 2) × 180 for exterior angles, or 360 for the sum of the interior angles.',
      'Forgetting the exterior-angle rule and doing a longer two-step calculation.',
      'Giving a numeric answer without a reason when the question says "stating your reasons".'
    ],
    formulae: [
      { name: 'Sum of interior angles', text: '(n - 2) × 180°' },
      { name: 'Each exterior angle of a regular polygon', text: '{360°|n}' },
      { name: 'Each interior angle of a regular polygon', text: '180° - {360°|n}' }
    ],
    summary: [
      'Straight line 180°, point 360°, triangle 180°, quadrilateral 360°.',
      'Parallel lines: corresponding and alternate angles are equal; co-interior angles add to 180°.',
      'Interior angles of a polygon: (n - 2) × 180°. Exterior angles: always 360° in total.',
      'Give a short reason with each angle you find.'
    ],
    viz: null,
    questions: [
      { id: 'an1', level: 'foundation', prompt: 'Two angles on a straight line are 115° and x°. Find x.',
        figure: { type: 'fan', total: 180, parts: [{ deg: 115, label: '115°' }, { deg: 65, label: 'x°' }], alt: 'A straight line with a ray from a point on it, making two angles: 115 degrees and x degrees.' }, answer: 65, unit: '°', solution: ['Angles on a straight line add up to 180°.', 'x = 180 - 115 = 65.'] },
      { id: 'an2', level: 'foundation', prompt: 'Three angles at a point are 90°, 130° and y°. Find y.',
        figure: { type: 'fan', total: 360, parts: [{ deg: 90, label: '90°' }, { deg: 130, label: '130°' }, { deg: 140, label: 'y°' }], alt: 'Three rays from a point making three angles: 90 degrees, 130 degrees and y degrees.' }, answer: 140, unit: '°', solution: ['Angles at a point add up to 360°.', 'y = 360 - 90 - 130 = 140.'] },
      { id: 'an3', level: 'foundation', prompt: 'In triangle ABC, angle A = 48° and angle B = 67°. Find angle C.',
        figure: { type: 'triangle', v: ['A', 'B', 'C'], shape: 'scalene', w: 4.4, h: 3, angle: { A: '48°', B: '67°' }, alt: 'Triangle ABC with angle A marked 48 degrees and angle B marked 67 degrees.' }, answer: 65, unit: '°', solution: ['Angles in a triangle add up to 180°.', '180 - 48 - 67 = 65.'] },
      { id: 'an4', level: 'foundation', type: 'mcq', prompt: 'Two parallel lines are crossed by a third line. Which pair of angles is always equal?', options: ['Co-interior angles', 'Alternate angles', 'Angles that add up to 180°', 'Adjacent angles on a straight line'], answer: 1, solution: ['Alternate angles are equal when the lines are parallel.', 'Co-interior angles add up to 180° instead.'] },
      { id: 'an5', level: 'foundation', prompt: 'Find the sum of the interior angles of a hexagon.', answer: 720, unit: '°', solution: ['n = 6, so (6 - 2) × 180 = 720°.'] },
      { id: 'an6', level: 'foundation', prompt: 'Find each exterior angle of a regular octagon.', answer: 45, unit: '°', solution: ['An octagon has 8 sides: 360 ÷ 8 = 45°.'] },
      { id: 'an8', level: 'standard', marks: 2, prompt: 'Four angles of the pentagon ABCDE are 105°, 118°, 96° and 127°. Find the fifth angle.',
        figure: { type: 'polygon', shape: 'general', pts: [[0, 0], [4, 0], [4.7, 2.2], [2.2, 3.9], [-0.5, 2.4]], v: ['A', 'B', 'C', 'D', 'E'], angle: { A: '105°', B: '118°', C: '96°', D: '127°' },
          alt: 'Pentagon ABCDE with the interior angles at A, B, C and D marked 105, 118, 96 and 127 degrees.' }, answer: 94, unit: '°',
        solution: ['Sum of interior angles of a pentagon = (5 - 2) × 180 = 540°.', '105 + 118 + 96 + 127 = 446.', 'Fifth angle = 540 - 446 = 94°.'] },
      { id: 'an9', level: 'standard', prompt: 'In the diagram, AB is parallel to CD and the line PQ crosses both of them. Angle BPQ = 110°.',
        figure: { type: 'parallel', top: ['A', 'B'], bottom: ['C', 'D'], cross: ['P', 'Q'], theta: 70, arcs: [{ at: 'P', from: 'B', to: 'Q', label: '110°' }],
          alt: 'Two parallel horizontal lines AB above and CD below, crossed by the line PQ, where P is on AB and Q is on CD. Angle BPQ is marked 110 degrees.' },
        parts: [{ label: '(a)', prompt: 'Find angle PQD (co-interior angles).', answer: 70, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle CQP (alternate to angle BPQ).', answer: 110, unit: '°', marks: 1 }],
        hint: 'Sketch the two lines and the crossing line first.', solution: ['(a) BPQ and PQD are co-interior angles, so they add up to 180°: PQD = 180 - 110 = 70°.', '(b) CQP and BPQ are alternate angles, so CQP = 110°.'] },
      { id: 'an10', level: 'standard', marks: 3, prompt: 'The angles of a triangle are x°, (2x + 10)° and (3x - 40)°. Find the value of x.',
        figure: { type: 'triangle', shape: 'scalene', w: 4.6, h: 3.2, angle: { A: '(2x + 10)°', B: 'x°', C: '(3x - 40)°' }, alt: 'A triangle with angles marked x degrees, (2x plus 10) degrees and (3x minus 40) degrees.' }, answer: 35,
        solution: ['x + 2x + 10 + 3x - 40 = 180.', '6x - 30 = 180, so 6x = 210 and x = 35.'] },
      { id: 'an11', level: 'standard', prompt: 'In the diagram, AB = AC and angle BAC = 40°. BC is extended to D.',
        figure: { type: 'triangle', shape: 'isosceles', w: 4.4, h: 3, angle: { A: '40°' }, extend: [{ from: 'B', through: 'C', name: 'D', len: 0.5 }],
          alt: 'Isosceles triangle ABC with AB equal to AC and angle BAC marked 40 degrees. The side BC is extended to a point D.' },
        parts: [{ label: '(a)', prompt: 'Find angle ABC.', answer: 70, unit: '°', marks: 2 }, { label: '(b)', prompt: 'BC is extended to D. Find angle ACD.', answer: 110, unit: '°', marks: 1 }],
        solution: ['(a) The base angles are equal: ABC = (180 - 40) ÷ 2 = 70°.', '(b) ACD is an exterior angle: ACD = 180 - 70 = 110° (or 40 + 70).'] },
      { id: 'an12', level: 'standard', prompt: 'In triangle ABC, BC is extended to D. Angle ACD = 123° and angle BAC = 58°. Find angle ABC.',
        figure: { type: 'triangle', shape: 'scalene', w: 4.2, h: 3, angle: { A: '58°' }, extend: [{ from: 'B', through: 'C', name: 'D', len: 0.45 }], arcs: [{ at: 'C', from: 'D', to: 'A', label: '123°' }],
          alt: 'Triangle ABC with BC extended to D. Angle BAC is 58 degrees and the exterior angle ACD is 123 degrees.' }, answer: 65, unit: '°', hint: 'Exterior angle = sum of the opposite interior angles.', solution: ['123 = 58 + other, so the other angle = 65°.'] },
      { id: 'an13', level: 'standard', marks: 2, prompt: 'Each interior angle of a regular polygon is 156°. How many sides does it have?', answer: 15,
        solution: ['Exterior angle = 180 - 156 = 24°.', 'n = 360 ÷ 24 = 15.'] },
      { id: 'an14', level: 'standard', marks: 2, prompt: 'The sum of the interior angles of a polygon is 1 980°. How many sides does it have?', answer: 13,
        solution: ['(n - 2) × 180 = 1 980, so n - 2 = 11.', 'n = 13.'] },
      { id: 'an15', level: 'challenge', marks: 3, prompt: 'Each interior angle of a regular polygon is 5 times its exterior angle. How many sides does the polygon have?', answer: 12,
        hint: 'Interior + exterior = 180°.', solution: ['Let the exterior angle be e. Then 5e + e = 180, so e = 30°.', 'n = 360 ÷ 30 = 12.'] },
      { id: 'an16', level: 'challenge', marks: 3, prompt: 'ABCD is a parallelogram. Angle ABC = (2x + 30)° and angle BCD = (4x - 60)°. Find angle ABC.',
        figure: { type: 'polygon', shape: 'parallelogram', v: ['A', 'B', 'C', 'D'], angle: { B: '(2x + 30)°', C: '(4x - 60)°' },
          alt: 'Parallelogram ABCD with angle ABC marked (2x plus 30) degrees and angle BCD marked (4x minus 60) degrees.' }, answer: 100, unit: '°',
        hint: 'Adjacent angles in a parallelogram add up to 180°.', solution: ['ABC + BCD = 180: 2x + 30 + 4x - 60 = 180.', '6x - 30 = 180, so x = 35.', 'Angle ABC = 2 × 35 + 30 = 100°.'] }
    ],
    generators: [
      { id: 'interior-sum', level: 'foundation', make: function (r) {
        var n = r.int(5, 14);
        return { prompt: 'Find the sum of the interior angles of a polygon with ' + n + ' sides.', answer: (n - 2) * 180, unit: '°',
          hint: 'Use (n - 2) × 180°.', solution: ['(' + n + ' - 2) × 180 = ' + (n - 2) * 180 + '°.'] };
      } },
      { id: 'regular-interior', level: 'standard', make: function (r) {
        var n = r.pick([5, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36]), e = 360 / n;
        return { prompt: 'Find each interior angle of a regular polygon with ' + n + ' sides.', answer: 180 - e, unit: '°',
          hint: 'Find the exterior angle first.', solution: ['Exterior angle = 360 ÷ ' + n + ' = ' + e + '°.', 'Interior angle = 180 - ' + e + ' = ' + (180 - e) + '°.'] };
      } }
    ]
  });
})();
