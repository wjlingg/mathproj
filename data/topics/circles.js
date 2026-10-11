(function () {
  EMATH.registerTopic({
    id: 'circles', title: 'Properties of Circles',
    strand: 'geometry', levels: [3, 4],
    syllabusNote: 'O-Level syllabus G3 (Sec 3/4).',
    verified: true,
    objectives: [
      'Use the angle properties of circles: angle at the centre, angles in the same segment, angle in a semicircle and angles in a cyclic quadrilateral.',
      'Use tangent properties: a tangent is perpendicular to the radius, and tangents from an external point are equal.',
      'Use the alternate segment theorem.',
      'Apply Pythagoras with radii, chords and tangents.'
    ],
    explanation: [
      'Circle problems are usually answered with a **reason** for each step. Sketch the circle from the description, mark O as the centre and mark each angle as you find it.',
      { term: 'Angles in a circle', def: 'The angle at the centre is **twice** the angle at the circumference on the same arc. Angles in the same segment are equal. The angle in a semicircle is 90°.' },
      { term: 'Cyclic quadrilateral', def: 'A quadrilateral with all four vertices on a circle. Opposite angles add up to 180°, and an exterior angle equals the interior opposite angle.' },
      { term: 'Tangents', def: 'A tangent touches the circle at one point and is perpendicular to the radius there. Two tangents from the same point outside the circle are equal in length, and the line from that point to the centre bisects the angle between them.' },
      { term: 'Alternate segment theorem', def: 'The angle between a tangent and a chord equals the angle in the alternate segment (the segment on the other side of the chord).' },
      { term: 'Chords', def: 'The perpendicular from the centre to a chord bisects the chord. This makes a right-angled triangle with the radius as the hypotenuse.' }
    ],
    examples: [
      { title: 'Angles at the centre and circumference', question: 'A, B and C are on a circle with centre O. Angle AOB = 124° and C is on the major arc. Find angle ACB and angle OAB.',
        steps: ['Angle ACB = {1|2} × 124° = 62° (angle at the centre is twice the angle at the circumference).', 'OA = OB (radii), so triangle OAB is isosceles.', 'Angle OAB = (180° - 124°) ÷ 2 = 28°.'], answer: '62° and 28°' },
      { title: 'A tangent', question: 'PA is a tangent to a circle with centre O and radius 5 cm. OP = 13 cm. Find PA.',
        steps: ['The tangent is perpendicular to the radius: angle OAP = 90°.', 'PA^2 = OP^2 - OA^2 = 169 - 25 = 144.', 'PA = 12 cm.'], answer: '12 cm' },
      { title: 'Cyclic quadrilateral', question: 'ABCD is a cyclic quadrilateral with angle BAD = 82° and angle ABC = 95°. Find angle BCD and angle ADC.',
        steps: ['Opposite angles add up to 180°.', 'Angle BCD = 180° - 82° = 98°.', 'Angle ADC = 180° - 95° = 85°.'], answer: '98° and 85°' }
    ],
    mistakes: [
      'Using the angle at the centre rule when the centre is not involved.',
      'Saying opposite angles of any quadrilateral add to 180°: this only holds for cyclic quadrilaterals.',
      'Forgetting that a tangent makes 90° with the radius, not with the chord.',
      'Using the wrong segment in the alternate segment theorem.',
      'Treating the chord as the hypotenuse: in the right triangle from the centre, the radius is the hypotenuse.'
    ],
    formulae: [
      { name: 'Centre and circumference', text: 'angle at centre = 2 × angle at circumference' },
      { name: 'Cyclic quadrilateral', text: 'opposite angles sum to 180°' },
      { name: 'Tangent and radius', text: 'meet at 90°; tangent length = sqrt(OP^2 - r^2)' }
    ],
    summary: [
      'Angle at centre = 2 × angle at circumference. Angle in a semicircle = 90°.',
      'Cyclic quadrilateral: opposite angles add to 180°.',
      'Tangent ⟂ radius; tangents from a point are equal.',
      'Always give a short reason with every angle.'
    ],
    viz: null,
    questions: [
      { id: 'ci1', level: 'foundation', prompt: 'A and B are points on a circle with centre O. C is another point on the major arc. Angle ACB = 40°. Find angle AOB.',
        figure: { type: 'circle', on: { A: 230, B: 310, C: 90 }, radii: ['A', 'B'], chords: [['C', 'A'], ['C', 'B']], arcs: [{ at: 'C', from: 'A', to: 'B', label: '40°' }] , alt: 'Circle with centre O. A and B are on the circle, and C is on the major arc. Angle ACB is marked 40 degrees. OA and OB are drawn.' },answer: 80, unit: '°', solution: ['Angle at the centre = 2 × 40° = 80°.'] },
      { id: 'ci2', level: 'foundation', prompt: 'AB is a diameter of a circle and C is on the circle. Angle CAB = 35°. Find angle CBA.',
        figure: { type: 'circle', on: { A: 180, B: 0, C: 70 }, chords: [['A', 'B'], ['A', 'C'], ['C', 'B']], arcs: [{ at: 'A', from: 'B', to: 'C', label: '35°' }] , alt: 'Circle with centre O. AB is a diameter and C is on the circle. Angle CAB is marked 35 degrees.' },answer: 55, unit: '°', solution: ['Angle ACB = 90° (angle in a semicircle).', 'Angle CBA = 180° - 90° - 35° = 55°.'] },
      { id: 'ci3', level: 'foundation', prompt: 'ABCD is a cyclic quadrilateral with angle ABC = 105°. Find angle ADC.',
        figure: { type: 'circle', o: false, on: { A: 230, B: 290, C: 20, D: 130 }, poly: ['A', 'B', 'C', 'D'], angle: { B: '105°' } , alt: 'Cyclic quadrilateral ABCD inscribed in a circle, with angle ABC marked 105 degrees.' },answer: 75, unit: '°', solution: ['Opposite angles of a cyclic quadrilateral add up to 180°.', '180° - 105° = 75°.'] },
      { id: 'ci5', level: 'foundation', prompt: 'PA and PB are tangents to a circle from the point P. PA = 9 cm. Find PB.',
        figure: { type: 'circle', ext: { name: 'P', angle: 0, dist: 2, touch: ['A', 'B'] }, radii: ['A', 'B'], side: { PA: '9 cm' }, equal: [['PA', 'PB']] , alt: 'Circle with centre O. Tangents PA and PB are drawn from the point P outside the circle. PA is marked 9 cm.' },answer: 9, unit: 'cm', solution: ['Tangents from the same external point are equal in length.'] },
      { id: 'ci6', level: 'foundation', type: 'mcq', prompt: 'Angles in the same segment of a circle are', options: ['equal', 'supplementary', 'complementary', 'double each other'], answer: 0, solution: ['Angles in the same segment, standing on the same arc, are equal.'] },
      { id: 'ci7', level: 'standard', prompt: 'A, B and C are points on a circle with centre O. Angle AOB = 124° and C is on the major arc AB.',
        figure: { type: 'circle', on: { A: 208, B: 332, C: 90 }, radii: ['A', 'B'], chords: [['A', 'B'], ['C', 'A'], ['C', 'B']], arcs: [{ at: 'O', from: 'A', to: 'B', label: '124°' }] , alt: 'Circle with centre O. A, B and C are on the circle with C on the major arc AB. Angle AOB is marked 124 degrees.' },
        parts: [{ label: '(a)', prompt: 'Find angle ACB.', answer: 62, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle OAB.', answer: 28, unit: '°', marks: 2 }],
        solution: ['(a) Angle ACB = 124° ÷ 2 = 62° (angle at the centre is twice the angle at the circumference).', '(b) OA = OB, so angle OAB = (180° - 124°) ÷ 2 = 28°.'] },
      { id: 'ci8', level: 'standard', prompt: 'ABCD is a cyclic quadrilateral. Angle BAD = 82° and angle ABC = 95°.',
        figure: { type: 'circle', o: false, on: { A: 200, B: 316, C: 10, D: 120 }, poly: ['A', 'B', 'C', 'D'], angle: { A: '82°', B: '95°' } , alt: 'Cyclic quadrilateral ABCD inscribed in a circle, with angle BAD marked 82 degrees and angle ABC marked 95 degrees.' },
        parts: [{ label: '(a)', prompt: 'Find angle BCD.', answer: 98, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle ADC.', answer: 85, unit: '°', marks: 2 }],
        solution: ['BCD = 180° - 82° = 98° (opposite angles).', 'ADC = 180° - 95° = 85° (opposite angles).'] },
      { id: 'ci9', level: 'standard', prompt: 'PA is a tangent to a circle with centre O and radius 5 cm, touching the circle at A. OP = 13 cm.',
        figure: { type: 'circle', ext: { name: 'P', angle: 0, dist: 2.6, touch: ['A'], centreLine: true }, radii: ['A'], side: { OA: '5 cm', OP: '13 cm' } , alt: 'Circle with centre O and radius OA = 5 cm. The tangent PA touches the circle at A and OP is 13 cm. There is a right angle at A.' },
        parts: [{ label: '(a)', prompt: 'Find the length of PA.', answer: 12, unit: 'cm', marks: 2 }, { label: '(b)', prompt: 'Find the area of triangle OAP.', answer: 30, unit: 'cm²', marks: 2 }],
        solution: ['Angle OAP = 90°, so PA^2 = 13^2 - 5^2 = 144 and PA = 12 cm.', 'Area = {1|2} × 5 × 12 = 30 cm^2.'] },
      { id: 'ci10', level: 'standard', marks: 3, prompt: 'PA and PB are tangents to a circle from P. Angle APB = 50°. Find angle PAB.',
        figure: { type: 'circle', ext: { name: 'P', angle: 0, dist: 2.3662, touch: ['A', 'B'] }, chords: [['A', 'B']], arcs: [{ at: 'P', from: 'A', to: 'B', label: '50°' }] , alt: 'Circle with centre O. Tangents PA and PB are drawn from P, with angle APB marked 50 degrees. The chord AB is drawn.' },answer: 65, unit: '°',
        solution: ['PA = PB, so triangle PAB is isosceles.', 'Angle PAB = (180° - 50°) ÷ 2 = 65°.'] },
      { id: 'ci11', level: 'standard', marks: 2, prompt: 'The tangent at A and the chord AB make an angle of 48°. C is a point on the circle in the alternate segment. Find angle ACB.',
        figure: { type: 'circle', o: false, on: { A: 90, B: 186, C: 300 }, tangentAt: [{ at: 'A', names: ['T', 'U'] }], chords: [['A', 'B'], ['A', 'C'], ['B', 'C']], arcs: [{ at: 'A', from: 'T', to: 'B', label: '48°' }] , alt: 'A circle with the tangent TU touching it at A. The chord AB makes an angle of 48 degrees with the tangent, and C is a point on the circle in the alternate segment.' },answer: 48, unit: '°',
        solution: ['By the alternate segment theorem, angle ACB = 48°.'] },
      { id: 'ci12', level: 'standard', prompt: 'A, B, C and D lie on a circle in that order, and AB is a diameter. Angle ABC = 40°.',
        figure: { type: 'circle', on: { A: 180, B: 0, C: 100, D: 140 }, chords: [['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A'], ['A', 'C']], arcs: [{ at: 'B', from: 'A', to: 'C', label: '40°' }] , alt: 'Circle with centre O and points A, B, C and D on it. AB is a diameter, AC is drawn, and angle ABC is marked 40 degrees.' },
        parts: [{ label: '(a)', prompt: 'Find angle BAC.', answer: 50, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle ADC.', answer: 140, unit: '°', marks: 2 }],
        solution: ['(a) Angle ACB = 90°, so BAC = 180° - 90° - 40° = 50°.', '(b) ABCD is cyclic, so ADC = 180° - 40° = 140°.'] },
      { id: 'ci13', level: 'standard', marks: 3, prompt: 'On a circle with centre O, the angle at the centre is (3x + 10)° and the angle at the circumference on the same arc is (x + 25)°. Find the angle at the circumference.', answer: 65,
        figure: { type: 'circle', on: { A: 230, B: 310, C: 90 }, radii: ['A', 'B'], chords: [['C', 'A'], ['C', 'B']], arcs: [{ at: 'O', from: 'A', to: 'B', label: '(3x + 10)°' }, { at: 'C', from: 'A', to: 'B', label: '(x + 25)°' }] , alt: 'Circle with centre O and points A, B and C on it. The angle AOB at the centre is (3x plus 10) degrees and the angle ACB at the circumference is (x plus 25) degrees.' }, unit: '°',
        solution: ['3x + 10 = 2(x + 25) = 2x + 50, so x = 40.', 'The angle at the circumference = 40 + 25 = 65°.'] },
      { id: 'ci14', level: 'standard', marks: 3, prompt: 'A chord AB of length 16 cm is in a circle of radius 10 cm. Find the perpendicular distance from the centre to the chord.', answer: 6,
        figure: { type: 'circle', on: { A: 216.87, B: 323.13 }, chords: [['A', 'B']], radii: ['A'], points: { _M: [0, -0.6] }, lines: [{ a: 'O', b: '_M', dash: true, label: 'd' }], right: [{ at: '_M', from: 'O', to: 'B' }], side: { AB: '16 cm', OA: '10 cm' } , alt: 'Circle with centre O and radius 10 cm. The chord AB is 16 cm long. A perpendicular of length d is drawn from O to the midpoint of AB.' }, unit: 'cm',
        hint: 'The perpendicular from the centre bisects the chord.', solution: ['Half the chord = 8 cm.', 'd^2 = 10^2 - 8^2 = 36, so d = 6 cm.'] },
      { id: 'ci15', level: 'challenge', marks: 3, prompt: 'PA and PB are tangents to a circle with centre O. Angle AOB = 130°. Find angle APB.', answer: 50,
        figure: { type: 'circle', ext: { name: 'P', angle: 0, dist: 2.3662, touch: ['A', 'B'] }, radii: ['A', 'B'], arcs: [{ at: 'O', from: 'A', to: 'B', label: '130°' }] , alt: 'Circle with centre O. Tangents PA and PB are drawn from P, and angle AOB is marked 130 degrees.' }, unit: '°',
        hint: 'Quadrilateral OAPB has two right angles.', solution: ['Angle OAP = angle OBP = 90° (tangent and radius).', 'The angles in quadrilateral OAPB add to 360°, so APB = 360° - 90° - 90° - 130° = 50°.'] },
      { id: 'ci16', level: 'challenge', marks: 3, prompt: 'The tangent PT from P to a circle with centre O has length 8 cm. OP = 10 cm. Find the circumference of the circle, correct to 1 decimal place.',
        figure: { type: 'circle', ext: { name: 'P', angle: 0, dist: 1.6667, touch: ['T'], centreLine: true }, radii: ['T'], side: { PT: '8 cm', OP: '10 cm' } , alt: 'Circle with centre O. The tangent PT touches the circle at T and is 8 cm long, and OP is 10 cm. There is a right angle at T.' },answer: 2 * Math.PI * 6, dp: 1, unit: 'cm',
        solution: ['Angle OTP = 90°, so r^2 = 10^2 - 8^2 = 36 and r = 6 cm.', 'Circumference = 2π × 6 = 37.7 cm.'] },

      // Sec 4 style: equal chords, segments
      { id: 'ci17', level: 'challenge', prompt: 'A, B, C and D are points on a circle with centre O. Angle BAD = 70° and BC = CD.',
        figure: { type: 'circle', on: { A: 270, B: 10, C: 80, D: 150 }, poly: ['A', 'B', 'C', 'D'], radii: ['B', 'D'], angle: { A: '70°' }, equal: [['BC', 'CD']] , alt: 'Circle with centre O and points A, B, C and D on it. Angle BAD is marked 70 degrees, BC and CD are equal, and OB and OD are drawn.' },
        parts: [{ label: '(a)', prompt: 'Find angle BCD.', answer: 110, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle CBD.', answer: 35, unit: '°', marks: 2 }, { label: '(c)', prompt: 'Find angle BOD.', answer: 140, unit: '°', marks: 2 }],
        hint: 'ABCD is a cyclic quadrilateral. Triangle BCD is isosceles.', solution: ['BCD = 180° - 70° = 110° (opposite angles of a cyclic quadrilateral).', 'BC = CD, so CBD = (180° - 110°) ÷ 2 = 35°.', 'BOD = 2 × BAD = 140° (angle at the centre is twice the angle at the circumference).'] },
      { id: 'ci18', level: 'challenge', marks: 4, prompt: 'A chord AB of a circle with centre O and radius 7 cm subtends an angle of 80° at O. Find the area of the minor segment cut off by AB, correct to 2 decimal places.',
        figure: { type: 'circle', on: { A: 230, B: 310 }, radii: ['A', 'B'], chords: [['A', 'B']], arcs: [{ at: 'O', from: 'A', to: 'B', label: '80°' }], side: { OA: '7 cm' } , alt: 'Circle with centre O and radius 7 cm. The chord AB subtends an angle of 80 degrees at O.' },answer: (80 / 360) * Math.PI * 49 - 0.5 * 49 * Math.sin(80 * Math.PI / 180), dp: 2, unit: 'cm²',
        hint: 'Segment = sector - triangle OAB.', solution: ['Sector = {80|360} × π × 7^2 = 34.21 cm^2.', 'Triangle OAB = {1|2} × 7 × 7 × sin 80° = 24.13 cm^2.', 'Segment = 34.21 - 24.13 = 10.08 cm^2.'] }
    ],
    generators: [
      { id: 'centre-angle', level: 'foundation', make: function (r) {
        var a = r.int(15, 85);
        return { prompt: 'A, B and C are on a circle with centre O. Angle ACB = ' + a + '°, where C is on the major arc. Find angle AOB.', answer: 2 * a, unit: '°',
          figure: { type: 'circle', on: { A: 270 - a, B: 270 + a, C: 90 }, radii: ['A', 'B'], chords: [['C', 'A'], ['C', 'B']], arcs: [{ at: 'C', from: 'A', to: 'B', label: a + '°' }], alt: 'Circle with centre O. A and B are on the circle and C is on the major arc. Angle ACB is marked ' + a + ' degrees.' },
          hint: 'The angle at the centre is twice the angle at the circumference.', solution: ['Angle AOB = 2 × ' + a + '° = ' + 2 * a + '°.'] };
      } },
      { id: 'cyclic', level: 'standard', make: function (r) {
        var a = r.int(60, 120), b = r.int(60, 120);
        // arcs AB, BC, CD, DA of the circle, chosen so that BAD = a and ABC = b
        var lo = Math.max(10, 2 * a + 2 * b - 345), hi = Math.min(2 * a, 2 * b) - 10, q = (lo + hi) / 2;
        var pa = 2 * a - q, x = 360 - 2 * a - 2 * b + q, pb = 200 + x, pc = pb + pa, pd = pc + q;
        return { prompt: 'ABCD is a cyclic quadrilateral. Angle BAD = ' + a + '° and angle ABC = ' + b + '°. Find angle BCD.', answer: 180 - a, unit: '°',
          figure: { type: 'circle', o: false, on: { A: 200, B: pb, C: pc, D: pd }, poly: ['A', 'B', 'C', 'D'], angle: { A: a + '°', B: b + '°' }, alt: 'Cyclic quadrilateral ABCD inscribed in a circle, with angle BAD marked ' + a + ' degrees and angle ABC marked ' + b + ' degrees.' },
          hint: 'Opposite angles add up to 180°.', solution: ['BCD is opposite BAD.', 'Angle BCD = 180° - ' + a + '° = ' + (180 - a) + '°.'] };
      } }
    ]
  });
})();
