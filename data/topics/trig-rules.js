(function () {
  var rad = Math.PI / 180;

  EMATH.registerTopic({
    id: 'trig-rules', title: 'Sine and Cosine Rules, 3D Trigonometry',
    strand: 'geometry', levels: [3, 4],
    syllabusNote: 'O-Level syllabus G4.5-4.7: area formula, sine and cosine rules, 2D and 3D problems (Sec 3/4).',
    verified: true,
    objectives: [
      'Use the sine rule to find a side or an angle in any triangle.',
      'Use the cosine rule to find a side from two sides and the included angle, or an angle from three sides.',
      'Use area = {1|2}ab sin C.',
      'Choose the right rule and apply it to real-life triangles and journeys.'
    ],
    explanation: [
      'For a triangle ABC, the side opposite angle A is called a, the side opposite B is b and the side opposite C is c. These rules work for **any** triangle, not just right-angled ones.',
      { term: 'Sine rule', def: '{a|sin A} = {b|sin B} = {c|sin C}. Use it when you know two angles and a side, or two sides and an angle that is not between them.' },
      { term: 'Cosine rule', def: 'a^2 = b^2 + c^2 - 2bc cos A. Use it when you know two sides and the **included** angle (to find the third side), or all three sides (to find an angle): cos A = {b^2 + c^2 - a^2|2bc}.' },
      { term: 'Area', def: 'Area = {1|2}ab sin C, where C is the angle **between** sides a and b.' },
      { term: 'Which rule?', def: 'Side-Angle-Side or Side-Side-Side: cosine rule. Angle-Side-Angle or Side-Side-Angle (with the given angle opposite a given side): sine rule.' },
      { term: 'Obtuse angles', def: 'If cos A is negative then A is obtuse. For the sine rule, sin θ = sin(180° - θ), so check whether the angle could be obtuse.' }
    ],
    examples: [
      { title: 'Sine rule', question: 'In triangle ABC, A = 40°, B = 65° and a = 8 cm. Find b, correct to 2 decimal places.',
        steps: ['{b|sin 65°} = {8|sin 40°}.', 'b = {8 × sin 65°|sin 40°} = {7.2505|0.6428} = 11.28 cm.'], answer: '11.28 cm' },
      { title: 'Cosine rule', question: 'In triangle ABC, a = 7 cm, b = 9 cm and angle C = 60°. Find c, correct to 2 decimal places.',
        steps: ['c^2 = a^2 + b^2 - 2ab cos C = 49 + 81 - 2(7)(9)cos 60°.', 'c^2 = 130 - 126 × 0.5 = 67.', 'c = sqrt(67) = 8.19 cm.'], answer: '8.19 cm' },
      { title: 'Finding an angle from three sides', question: 'A triangle has sides 5 cm, 7 cm and 8 cm. Find the angle opposite the 7 cm side.',
        steps: ['cos θ = {5^2 + 8^2 - 7^2|2 × 5 × 8} = {40|80} = 0.5.', 'θ = 60°.'], answer: '60°' }
    ],
    mistakes: [
      'Using the sine rule with an angle and a side that are not opposite each other.',
      'Using the cosine rule when the angle is not the one between the two given sides.',
      'Forgetting the minus sign in 2bc cos A when the angle is obtuse (cos A is negative, so the term adds).',
      'Taking the square root too early: find a^2 first.',
      'Using a calculator in radian mode.'
    ],
    formulae: [
      { name: 'Sine rule', text: '{a|sin A} = {b|sin B} = {c|sin C}' },
      { name: 'Cosine rule', text: 'a^2 = b^2 + c^2 - 2bc cos A' },
      { name: 'Area of a triangle', text: '{1|2}ab sin C' }
    ],
    summary: [
      'Sine rule: pairs of sides and opposite angles. Cosine rule: two sides and the included angle, or three sides.',
      'Area = {1|2}ab sin C, with C between the sides a and b.',
      'Label the triangle first so each side is opposite its angle.',
      'An obtuse angle has a negative cosine.'
    ],
    viz: null,
    questions: [
      { id: 'tz1', level: 'foundation', type: 'mcq', prompt: 'You know two sides of a triangle and the angle between them. Which rule finds the third side?', options: ['Sine rule', 'Cosine rule', 'Pythagoras only', 'Area rule'], answer: 1, solution: ['Two sides and the included angle: the cosine rule.'] },
      { id: 'tz2', level: 'foundation', prompt: 'A triangle has two sides of 8 cm and 5 cm with an angle of 30° between them. Find its area.', answer: 10, unit: 'cm²', solution: ['Area = {1|2} × 8 × 5 × sin 30° = {1|2} × 40 × 0.5 = 10 cm^2.'] },
      { id: 'tz3', level: 'foundation', prompt: 'In triangle ABC, a = 10 cm, A = 30° and B = 90°. Find b.', answer: 20, unit: 'cm', solution: ['{b|sin 90°} = {10|sin 30°}, so b = {10|0.5} = 20 cm.'] },
      { id: 'tz4', level: 'foundation', type: 'mcq', prompt: 'In the formula Area = {1|2}ab sin C, C is', options: ['the angle between sides a and b', 'any angle in the triangle', 'always a right angle', 'always acute'], answer: 0, solution: ['C must be the angle between the two sides a and b.'] },
      { id: 'tz6', level: 'foundation', prompt: 'In triangle ABC, a = 5 cm, b = 5 cm and C = 60°. Find c.', answer: 5, unit: 'cm', solution: ['c^2 = 25 + 25 - 2(5)(5)cos 60° = 50 - 25 = 25.', 'c = 5 cm.'] },
      { id: 'tz7', level: 'standard', marks: 3, prompt: 'In triangle ABC, A = 40°, B = 65° and a = 8 cm. Find b, correct to 2 decimal places.', answer: 8 * Math.sin(65 * rad) / Math.sin(40 * rad), dp: 2, unit: 'cm',
        solution: ['{b|sin 65°} = {8|sin 40°}.', 'b = 8 sin 65° ÷ sin 40° = 11.28 cm.'] },
      { id: 'tz8', level: 'standard', marks: 3, prompt: 'In triangle ABC, a = 7 cm, b = 9 cm and angle C = 60°. Find c, correct to 2 decimal places.', answer: Math.sqrt(67), dp: 2, unit: 'cm',
        solution: ['c^2 = 49 + 81 - 126 cos 60° = 67.', 'c = 8.19 cm.'] },
      { id: 'tz9', level: 'standard', marks: 3, prompt: 'A triangle has sides 5 cm, 7 cm and 8 cm. Find the angle opposite the 7 cm side.', answer: 60, unit: '°',
        solution: ['cos θ = {25 + 64 - 49|2 × 5 × 8} = 0.5.', 'θ = 60°.'] },
      { id: 'tz10', level: 'standard', marks: 2, prompt: 'Find the area of a triangle with sides 6 cm and 9 cm and an included angle of 50°. Give your answer correct to 2 decimal places.', answer: 27 * Math.sin(50 * rad), dp: 2, unit: 'cm²',
        solution: ['Area = {1|2} × 6 × 9 × sin 50° = 27 × 0.7660 = 20.68 cm^2.'] },
      { id: 'tz11', level: 'standard', marks: 3, prompt: 'In triangle PQR, PQ = 8 cm, PR = 7 cm and angle PRQ = 77°. Angle PQR is acute. Find angle PQR, correct to 1 decimal place.', answer: Math.asin(7 * Math.sin(77 * rad) / 8) / rad, dp: 1, unit: '°',
        hint: 'PQ is opposite angle R, and PR is opposite angle Q.', solution: ['{sin Q|7} = {sin 77°|8}.', 'sin Q = {7 sin 77°|8} = 0.8526.', 'Q = 58.5°.'] },
      { id: 'tz12', level: 'standard', marks: 3, prompt: 'A ship sails 15 km from P to Q, then 20 km from Q to R. Angle PQR = 110°. Find the distance PR, correct to 1 decimal place.', answer: Math.sqrt(625 - 600 * Math.cos(110 * rad)), dp: 1, unit: 'km',
        solution: ['PR^2 = 15^2 + 20^2 - 2(15)(20)cos 110°.', 'cos 110° = -0.3420, so PR^2 = 625 + 205.2 = 830.2.', 'PR = 28.8 km.'] },
      { id: 'tz13', level: 'standard', marks: 4, prompt: 'A triangle has sides 7 cm, 8 cm and 9 cm. Find its area, correct to 3 significant figures.', answer: Math.sqrt(720), sf: 3, unit: 'cm²',
        hint: 'Find the angle between the 7 cm and 8 cm sides using the cosine rule, then use {1|2}ab sin C.', solution: ['cos C = {49 + 64 - 81|2 × 7 × 8} = {32|112} = 0.2857, so C = 73.4°.', 'Area = {1|2} × 7 × 8 × sin 73.4° = 26.8 cm^2.'] },
      { id: 'tz14', level: 'standard', marks: 3, prompt: 'A triangle has sides 5 cm, 7 cm and 10 cm. Find the largest angle, correct to 1 decimal place.', answer: Math.acos(-26 / 70) / rad, dp: 1, unit: '°',
        hint: 'The largest angle is opposite the longest side.', solution: ['cos θ = {25 + 49 - 100|2 × 5 × 7} = {-26|70} = -0.3714.', 'θ = 111.8°.'] },
      { id: 'tz16', level: 'challenge', prompt: 'A triangle has sides 10 cm and 12 cm and its area is 30 cm².',
        parts: [{ label: '(a)', prompt: 'Find the acute angle between the two sides.', answer: 30, unit: '°', marks: 2 }, { label: '(b)', prompt: 'The angle between the sides could also be obtuse. Find it.', answer: 150, unit: '°', marks: 1 }],
        solution: ['{1|2} × 10 × 12 × sin θ = 30, so sin θ = 0.5.', 'θ = 30° or θ = 180° - 30° = 150°.'] },
      { id: 'tz17', level: 'challenge', prompt: 'A cuboid has a rectangular base ABCD with AB = 8 cm and BC = 6 cm, and a height CG = 5 cm (G is directly above C).',
        parts: [{ label: '(a)', prompt: 'Find the length of the diagonal AC of the base.', answer: 10, unit: 'cm', marks: 1 },
                { label: '(b)', prompt: 'Find the angle between the space diagonal AG and the base ABCD, correct to 1 decimal place.', answer: Math.atan(0.5) / rad, dp: 1, unit: '°', marks: 3 }],
        hint: 'The angle is in the right-angled triangle ACG, at A.', solution: ['AC^2 = 8^2 + 6^2 = 100, so AC = 10 cm.', 'In the right-angled triangle ACG: tan θ = {CG|AC} = {5|10} = 0.5.', 'θ = 26.6°.'] },

      // Sec 4 style 3D and journey problems
      { id: 'tz18', level: 'challenge', prompt: 'VABCD is a pyramid with a rectangular base ABCD, where AB = 12 m and BC = 8 m. The vertex V is directly above the centre of the base, and VA = VB = VC = VD. Angle AVB = 80°.',
        parts: [{ label: '(a)', prompt: 'Find VA, correct to 2 decimal places.', answer: 6 / Math.sin(40 * rad), dp: 2, unit: 'm', marks: 2 },
                { label: '(b)', prompt: 'Find the height of V above the base, correct to 2 decimal places.', answer: Math.sqrt(Math.pow(6 / Math.sin(40 * rad), 2) - 52), dp: 2, unit: 'm', marks: 3 },
                { label: '(c)', prompt: 'Find the angle between VA and the base, correct to 1 decimal place.', answer: Math.acos(Math.sqrt(52) / (6 / Math.sin(40 * rad))) / rad, dp: 1, unit: '°', marks: 2 }],
        hint: 'Triangle VAB is isosceles. Half of AB is 6 m, opposite half the apex angle (40°). The centre of the base is half of the diagonal AC from A.',
        solution: ['sin 40° = {6|VA}, so VA = 9.33 m.', 'AC^2 = 12^2 + 8^2 = 208, so half of AC squared = 52.', 'Height^2 = 9.334^2 - 52 = 35.13, so the height = 5.93 m.', 'cos θ = {sqrt(52)|9.334} = 0.7725, so θ = 39.4°.'] },
      { id: 'tz19', level: 'challenge', prompt: 'ABC and ADC are two paths around a pond. In triangle ADC, AC = 2 km, angle ADC = 110°, angle DAC = 40° and angle ACD = 30°.',
        parts: [{ label: '(a)', prompt: 'Find CD, correct to 2 decimal places.', answer: 2 * Math.sin(40 * rad) / Math.sin(110 * rad), dp: 2, unit: 'km', marks: 3 },
                { label: '(b)', prompt: 'Find the shortest distance from D to the path AC, correct to 2 decimal places.', answer: 2 * Math.sin(40 * rad) / Math.sin(110 * rad) * Math.sin(30 * rad), dp: 2, unit: 'km', marks: 2 },
                { label: '(c)', prompt: 'A drone is 200 m vertically above D. Find the largest angle of depression from the drone to a point on AC, correct to 1 decimal place.', answer: Math.atan(0.2 / (2 * Math.sin(40 * rad) / Math.sin(110 * rad) * Math.sin(30 * rad))) / rad, dp: 1, unit: '°', marks: 2 }],
        hint: 'The largest angle of depression is to the nearest point on AC, which is the foot of the perpendicular from D.',
        solution: ['{CD|sin 40°} = {2|sin 110°}, so CD = 1.37 km.', 'Shortest distance = CD sin 30° = 0.68 km.', 'tan θ = {0.2|0.684}, so θ = 16.3°.'] }
    ],
    generators: [
      { id: 'area', level: 'foundation', make: function (r) {
        var a = r.int(4, 15), b = r.int(4, 15), c = r.pick([30, 40, 50, 60, 70, 80, 110, 120, 130]), v = 0.5 * a * b * Math.sin(c * rad);
        return { prompt: 'A triangle has sides ' + a + ' cm and ' + b + ' cm with an angle of ' + c + '° between them. Find its area, correct to 2 decimal places.', answer: v, dp: 2, unit: 'cm²',
          hint: 'Area = {1|2}ab sin C.', solution: ['Area = {1|2} × ' + a + ' × ' + b + ' × sin ' + c + '° = ' + v.toFixed(2) + ' cm^2.'] };
      } },
      { id: 'cosine-rule', level: 'standard', make: function (r) {
        var a = r.int(4, 14), b = r.int(4, 14), c = r.pick([40, 50, 60, 70, 100, 110, 120]), v = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(c * rad));
        return { prompt: 'In triangle ABC, a = ' + a + ' cm, b = ' + b + ' cm and angle C = ' + c + '°. Find c, correct to 2 decimal places.', answer: v, dp: 2, unit: 'cm',
          hint: 'c^2 = a^2 + b^2 - 2ab cos C.', solution: ['c^2 = ' + a + '^2 + ' + b + '^2 - 2(' + a + ')(' + b + ')cos ' + c + '° = ' + (v * v).toFixed(2) + '.', 'c = ' + v.toFixed(2) + ' cm.'] };
      } }
    ]
  });
})();
