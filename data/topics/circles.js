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
      { id: 'ci1', level: 'foundation', prompt: 'A and B are points on a circle with centre O. C is another point on the major arc. Angle ACB = 40°. Find angle AOB.', answer: 80, unit: '°', solution: ['Angle at the centre = 2 × 40° = 80°.'] },
      { id: 'ci2', level: 'foundation', prompt: 'AB is a diameter of a circle and C is on the circle. Angle CAB = 35°. Find angle CBA.', answer: 55, unit: '°', solution: ['Angle ACB = 90° (angle in a semicircle).', 'Angle CBA = 180° - 90° - 35° = 55°.'] },
      { id: 'ci3', level: 'foundation', prompt: 'ABCD is a cyclic quadrilateral with angle ABC = 105°. Find angle ADC.', answer: 75, unit: '°', solution: ['Opposite angles of a cyclic quadrilateral add up to 180°.', '180° - 105° = 75°.'] },
      { id: 'ci5', level: 'foundation', prompt: 'PA and PB are tangents to a circle from the point P. PA = 9 cm. Find PB.', answer: 9, unit: 'cm', solution: ['Tangents from the same external point are equal in length.'] },
      { id: 'ci6', level: 'foundation', type: 'mcq', prompt: 'Angles in the same segment of a circle are', options: ['equal', 'supplementary', 'complementary', 'double each other'], answer: 0, solution: ['Angles in the same segment, standing on the same arc, are equal.'] },
      { id: 'ci7', level: 'standard', prompt: 'A, B and C are points on a circle with centre O. Angle AOB = 124° and C is on the major arc AB.',
        parts: [{ label: '(a)', prompt: 'Find angle ACB.', answer: 62, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle OAB.', answer: 28, unit: '°', marks: 2 }],
        solution: ['(a) Angle ACB = 124° ÷ 2 = 62° (angle at the centre is twice the angle at the circumference).', '(b) OA = OB, so angle OAB = (180° - 124°) ÷ 2 = 28°.'] },
      { id: 'ci8', level: 'standard', prompt: 'ABCD is a cyclic quadrilateral. Angle BAD = 82° and angle ABC = 95°.',
        parts: [{ label: '(a)', prompt: 'Find angle BCD.', answer: 98, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle ADC.', answer: 85, unit: '°', marks: 2 }],
        solution: ['BCD = 180° - 82° = 98° (opposite angles).', 'ADC = 180° - 95° = 85° (opposite angles).'] },
      { id: 'ci9', level: 'standard', prompt: 'PA is a tangent to a circle with centre O and radius 5 cm, touching the circle at A. OP = 13 cm.',
        parts: [{ label: '(a)', prompt: 'Find the length of PA.', answer: 12, unit: 'cm', marks: 2 }, { label: '(b)', prompt: 'Find the area of triangle OAP.', answer: 30, unit: 'cm²', marks: 2 }],
        solution: ['Angle OAP = 90°, so PA^2 = 13^2 - 5^2 = 144 and PA = 12 cm.', 'Area = {1|2} × 5 × 12 = 30 cm^2.'] },
      { id: 'ci10', level: 'standard', marks: 3, prompt: 'PA and PB are tangents to a circle from P. Angle APB = 50°. Find angle PAB.', answer: 65, unit: '°',
        solution: ['PA = PB, so triangle PAB is isosceles.', 'Angle PAB = (180° - 50°) ÷ 2 = 65°.'] },
      { id: 'ci11', level: 'standard', marks: 2, prompt: 'The tangent at A and the chord AB make an angle of 48°. C is a point on the circle in the alternate segment. Find angle ACB.', answer: 48, unit: '°',
        solution: ['By the alternate segment theorem, angle ACB = 48°.'] },
      { id: 'ci12', level: 'standard', prompt: 'A, B, C and D lie on a circle in that order, and AB is a diameter. Angle ABC = 40°.',
        parts: [{ label: '(a)', prompt: 'Find angle BAC.', answer: 50, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle ADC.', answer: 140, unit: '°', marks: 2 }],
        solution: ['(a) Angle ACB = 90°, so BAC = 180° - 90° - 40° = 50°.', '(b) ABCD is cyclic, so ADC = 180° - 40° = 140°.'] },
      { id: 'ci13', level: 'standard', marks: 3, prompt: 'On a circle with centre O, the angle at the centre is (3x + 10)° and the angle at the circumference on the same arc is (x + 25)°. Find the angle at the circumference.', answer: 65, unit: '°',
        solution: ['3x + 10 = 2(x + 25) = 2x + 50, so x = 40.', 'The angle at the circumference = 40 + 25 = 65°.'] },
      { id: 'ci14', level: 'standard', marks: 3, prompt: 'A chord AB of length 16 cm is in a circle of radius 10 cm. Find the perpendicular distance from the centre to the chord.', answer: 6, unit: 'cm',
        hint: 'The perpendicular from the centre bisects the chord.', solution: ['Half the chord = 8 cm.', 'd^2 = 10^2 - 8^2 = 36, so d = 6 cm.'] },
      { id: 'ci15', level: 'challenge', marks: 3, prompt: 'PA and PB are tangents to a circle with centre O. Angle AOB = 130°. Find angle APB.', answer: 50, unit: '°',
        hint: 'Quadrilateral OAPB has two right angles.', solution: ['Angle OAP = angle OBP = 90° (tangent and radius).', 'The angles in quadrilateral OAPB add to 360°, so APB = 360° - 90° - 90° - 130° = 50°.'] },
      { id: 'ci16', level: 'challenge', marks: 3, prompt: 'The tangent PT from P to a circle with centre O has length 8 cm. OP = 10 cm. Find the circumference of the circle, correct to 1 decimal place.', answer: 2 * Math.PI * 6, dp: 1, unit: 'cm',
        solution: ['Angle OTP = 90°, so r^2 = 10^2 - 8^2 = 36 and r = 6 cm.', 'Circumference = 2π × 6 = 37.7 cm.'] },

      // Sec 4 style: equal chords, segments
      { id: 'ci17', level: 'challenge', prompt: 'A, B, C and D are points on a circle with centre O. Angle BAD = 70° and BC = CD.',
        parts: [{ label: '(a)', prompt: 'Find angle BCD.', answer: 110, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find angle CBD.', answer: 35, unit: '°', marks: 2 }, { label: '(c)', prompt: 'Find angle BOD.', answer: 140, unit: '°', marks: 2 }],
        hint: 'ABCD is a cyclic quadrilateral. Triangle BCD is isosceles.', solution: ['BCD = 180° - 70° = 110° (opposite angles of a cyclic quadrilateral).', 'BC = CD, so CBD = (180° - 110°) ÷ 2 = 35°.', 'BOD = 2 × BAD = 140° (angle at the centre is twice the angle at the circumference).'] },
      { id: 'ci18', level: 'challenge', marks: 4, prompt: 'A chord AB of a circle with centre O and radius 7 cm subtends an angle of 80° at O. Find the area of the minor segment cut off by AB, correct to 2 decimal places.', answer: (80 / 360) * Math.PI * 49 - 0.5 * 49 * Math.sin(80 * Math.PI / 180), dp: 2, unit: 'cm²',
        hint: 'Segment = sector - triangle OAB.', solution: ['Sector = {80|360} × π × 7^2 = 34.21 cm^2.', 'Triangle OAB = {1|2} × 7 × 7 × sin 80° = 24.13 cm^2.', 'Segment = 34.21 - 24.13 = 10.08 cm^2.'] }
    ],
    generators: [
      { id: 'centre-angle', level: 'foundation', make: function (r) {
        var a = r.int(15, 85);
        return { prompt: 'A, B and C are on a circle with centre O. Angle ACB = ' + a + '°, where C is on the major arc. Find angle AOB.', answer: 2 * a, unit: '°',
          hint: 'The angle at the centre is twice the angle at the circumference.', solution: ['Angle AOB = 2 × ' + a + '° = ' + 2 * a + '°.'] };
      } },
      { id: 'cyclic', level: 'standard', make: function (r) {
        var a = r.int(60, 120), b = r.int(60, 120);
        return { prompt: 'ABCD is a cyclic quadrilateral. Angle BAD = ' + a + '° and angle ABC = ' + b + '°. Find angle BCD.', answer: 180 - a, unit: '°',
          hint: 'Opposite angles add up to 180°.', solution: ['BCD is opposite BAD.', 'Angle BCD = 180° - ' + a + '° = ' + (180 - a) + '°.'] };
      } }
    ]
  });
})();
