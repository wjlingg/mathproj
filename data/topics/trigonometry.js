(function () {
  var rad = Math.PI / 180;

  EMATH.registerTopic({
    id: 'trigonometry', title: 'Trigonometry (right-angled)',
    strand: 'geometry', levels: [3],
    syllabusNote: 'Sec 3 (Math syllabus)',
    verified: false,
    objectives: [
      'Use sine, cosine and tangent to find sides and angles of right-angled triangles.',
      'Solve problems on angles of elevation and depression.',
      'Find the other ratios when one trigonometric ratio is given.',
      'Find the angles between 0° and 180° that have a given sine or cosine.'
    ],
    explanation: [
      'In a right-angled triangle, with θ one of the acute angles, label the sides **opposite** (O), **adjacent** (A) and **hypotenuse** (H). The hypotenuse is opposite the right angle and is the longest side.',
      { term: 'The three ratios (SOH CAH TOA)', def: 'sin θ = {O|H}, cos θ = {A|H}, tan θ = {O|A}.' },
      { term: 'Finding a side', def: 'Choose the ratio that contains the side you want and the side you know, write the equation, then solve. Check that the calculator is in **degree** mode.' },
      { term: 'Finding an angle', def: 'Use the inverse function: θ = sin⁻¹({O|H}), cos⁻¹({A|H}) or tan⁻¹({O|A}).' },
      { term: 'Elevation and depression', def: 'Both are measured from the horizontal. The angle of elevation looks up to an object; the angle of depression looks down. Alternate angles make them equal in a diagram with parallel horizontals.' },
      { term: 'Angles from 0° to 180°', def: 'sin θ is positive for θ between 0° and 180°, and sin(180° - θ) = sin θ. So sin θ = 0.5 gives 30° or 150°. For cosine, cos(180° - θ) = -cos θ, so cos θ = -0.5 gives 120°.' }
    ],
    examples: [
      { title: 'Finding a side', question: 'In a right-angled triangle the hypotenuse is 12 cm and an angle is 35°. Find the side opposite the 35° angle, correct to 2 decimal places.',
        steps: ['The opposite and hypotenuse are involved, so use sine.', 'sin 35° = {x|12}, so x = 12 × sin 35°.', 'x = 12 × 0.5736 = 6.88 cm.'], answer: '6.88 cm' },
      { title: 'Angle of elevation', question: 'A tower is 40 m high. From a point 60 m away on level ground, find the angle of elevation of the top, correct to 1 decimal place.',
        steps: ['The opposite side is 40 and the adjacent side is 60, so use tangent.', 'tan θ = {40|60}.', 'θ = tan⁻¹(0.6667) = 33.7°.'], answer: '33.7°' },
      { title: 'Two angles with the same sine', question: 'Find the angles θ between 0° and 180° such that sin θ = 0.5.',
        steps: ['The calculator gives sin⁻¹(0.5) = 30°.', 'The other angle is 180° - 30° = 150°.'], answer: '30° or 150°' }
    ],
    mistakes: [
      'Using the wrong side as "opposite" or "adjacent": they depend on which angle you are looking at.',
      'Having the calculator in radian mode.',
      'Using tan⁻¹ with the sides the wrong way round. Opposite goes on top.',
      'Forgetting the second solution 180° - θ when finding obtuse angles from a sine.',
      'Rounding the angle at an early step. Keep all digits until the end.'
    ],
    formulae: [
      { name: 'Right-angled ratios', text: 'sin θ = {O|H},  cos θ = {A|H},  tan θ = {O|A}' },
      { name: 'Obtuse angles', text: 'sin(180° - θ) = sin θ,  cos(180° - θ) = -cos θ' },
      { name: 'Pythagoras', text: 'a^2 + b^2 = c^2' }
    ],
    summary: [
      'SOH CAH TOA: choose the ratio from the sides you have and the side you want.',
      'Inverse trig finds angles.',
      'Elevation and depression are measured from the horizontal.',
      'sin θ = sin(180° - θ), so there are two angles between 0° and 180°.'
    ],
    viz: null,
    questions: [
      { id: 'tr1', level: 'foundation', type: 'mcq', prompt: 'In a right-angled triangle, sin θ equals', options: ['opposite ÷ hypotenuse', 'adjacent ÷ hypotenuse', 'opposite ÷ adjacent', 'hypotenuse ÷ opposite'], answer: 0, solution: ['SOH: sine = opposite ÷ hypotenuse.'] },
      { id: 'tr2', level: 'foundation', prompt: 'In a right-angled triangle, the side opposite angle θ is 6 cm and the hypotenuse is 10 cm. Find sin θ as a fraction in its simplest form.', answer: '3/5', solution: ['sin θ = {6|10} = {3|5}.'] },
      { id: 'tr3', level: 'foundation', prompt: 'Write down the value of cos 60°.', answer: 0.5, solution: ['cos 60° = 0.5.'] },
      { id: 'tr4', level: 'foundation', prompt: 'A right-angled triangle has hypotenuse 14 cm and an angle of 30°. Find the side opposite the 30° angle.', answer: 7, unit: 'cm', solution: ['sin 30° = 0.5, so opposite = 14 × 0.5 = 7 cm.'] },
      { id: 'tr5', level: 'foundation', prompt: 'Write down the value of tan 45°.', answer: 1, solution: ['tan 45° = 1.'] },
      { id: 'tr6', level: 'foundation', prompt: 'Write down the value of sin 90°.', answer: 1, solution: ['sin 90° = 1.'] },
      { id: 'tr7', level: 'standard', marks: 2, prompt: 'In a right-angled triangle the hypotenuse is 12 cm and one angle is 35°. Find the length of the side opposite the 35° angle, correct to 2 decimal places.', answer: 12 * Math.sin(35 * rad), dp: 2, unit: 'cm',
        solution: ['sin 35° = {x|12}, so x = 12 sin 35° = 6.88 cm.'] },
      { id: 'tr8', level: 'standard', marks: 2, prompt: 'In a right-angled triangle the side opposite angle θ is 5 cm and the adjacent side is 8 cm. Find θ, correct to 1 decimal place.', answer: Math.atan(5 / 8) / rad, dp: 1, unit: '°',
        solution: ['tan θ = {5|8}.', 'θ = tan⁻¹(0.625) = 32.0°.'] },
      { id: 'tr9', level: 'standard', marks: 2, prompt: 'A tower is 40 m high. From a point 60 m from its base on level ground, find the angle of elevation of the top of the tower, correct to 1 decimal place.', answer: Math.atan(40 / 60) / rad, dp: 1, unit: '°',
        solution: ['tan θ = {40|60}.', 'θ = 33.7°.'] },
      { id: 'tr10', level: 'standard', marks: 2, prompt: 'A 6.5 m ladder leans against a vertical wall and reaches 6 m up the wall. Find the angle the ladder makes with the ground, correct to 1 decimal place.', answer: Math.asin(6 / 6.5) / rad, dp: 1, unit: '°',
        solution: ['The wall height is opposite the angle, and the ladder is the hypotenuse.', 'sin θ = {6|6.5}, so θ = 67.4°.'] },
      { id: 'tr11', level: 'standard', prompt: 'In a right-angled triangle, θ is an acute angle and cos θ = {12|13}.',
        parts: [{ label: '(a)', prompt: 'Find sin θ as a fraction.', answer: '5/13', marks: 2 }, { label: '(b)', prompt: 'Find tan θ as a fraction.', answer: '5/12', marks: 1 }],
        hint: 'Take adjacent = 12 and hypotenuse = 13, then find the opposite side by Pythagoras.', solution: ['Opposite^2 = 13^2 - 12^2 = 25, so opposite = 5.', 'sin θ = {5|13}.', 'tan θ = {5|12}.'] },
      { id: 'tr12', level: 'standard', prompt: 'It is given that 0° ≤ θ ≤ 180°.',
        parts: [{ label: '(a)', prompt: 'Find the larger value of θ for sin θ = 0.5.', answer: 150, unit: '°', marks: 2 }, { label: '(b)', prompt: 'Find θ for cos θ = -0.5.', answer: 120, unit: '°', marks: 2 }],
        solution: ['sin⁻¹(0.5) = 30° and 180° - 30° = 150°.', 'cos⁻¹(-0.5) = 120°.'] },
      { id: 'tr13', level: 'standard', marks: 3, prompt: 'From the top of a 50 m building, the angle of depression of a car on level ground is 28°. How far is the car from the foot of the building? Give your answer correct to 1 decimal place.', answer: 50 / Math.tan(28 * rad), dp: 1, unit: 'm',
        hint: 'The angle at the car, inside the triangle, is also 28° (alternate angles).', solution: ['tan 28° = {50|d}, so d = {50|tan 28°}.', 'd = 94.0 m.'] },
      { id: 'tr14', level: 'standard', marks: 3, prompt: 'An isosceles triangle has a base of 10 cm and two equal sides of 13 cm. Find a base angle, correct to 1 decimal place.', answer: Math.acos(5 / 13) / rad, dp: 1, unit: '°',
        hint: 'The height splits the base into two halves of 5 cm.', solution: ['Half the base = 5 cm, hypotenuse = 13 cm.', 'cos θ = {5|13}, so θ = 67.4°.'] },
      { id: 'tr15', level: 'challenge', marks: 4, prompt: 'From a point A on level ground the angle of elevation of the top of a pole is 40°. After walking 20 m towards the pole, the angle of elevation is 60°. Find the height of the pole to the nearest metre.', answer: 20 * Math.tan(60 * rad) / (Math.tan(60 * rad) / Math.tan(40 * rad) - 1) , dp: 0, unit: 'm',
        hint: 'Let the pole be h m high and the first distance d m. Then h = d tan 40° and h = (d - 20) tan 60°.', solution: ['d tan 40° = (d - 20) tan 60°.', 'd = {20 tan 60°|tan 60° - tan 40°} = 38.79 m.', 'h = 38.79 × tan 40° = 32.55 ≈ 33 m.'] },
      { id: 'tr16', level: 'challenge', prompt: 'x is an acute angle and sin x = {4|5}.',
        parts: [{ label: '(a)', prompt: 'Find cos x as a fraction.', answer: '3/5', marks: 2 }, { label: '(b)', prompt: 'Find tan x as a fraction.', answer: '4/3', marks: 1 }, { label: '(c)', prompt: 'Find the obtuse angle y, in degrees to 1 decimal place, with sin y = {4|5}.', answer: 180 - Math.asin(0.8) / rad, dp: 1, marks: 2 }],
        solution: ['Opposite 4, hypotenuse 5, so adjacent = 3.', 'cos x = {3|5} and tan x = {4|3}.', 'sin⁻¹(0.8) = 53.1°, so y = 180° - 53.1° = 126.9°.'] }
    ],
    generators: [
      { id: 'find-side', level: 'foundation', make: function (r) {
        var h = r.int(6, 30), a = r.pick([20, 25, 30, 35, 40, 50, 55, 65]), v = h * Math.sin(a * rad);
        return { prompt: 'In a right-angled triangle the hypotenuse is ' + h + ' cm and one angle is ' + a + '°. Find the side opposite this angle, correct to 2 decimal places.', answer: v, dp: 2, unit: 'cm',
          hint: 'Use sin θ = opposite ÷ hypotenuse.', solution: ['opposite = ' + h + ' × sin ' + a + '° = ' + v.toFixed(2) + ' cm.'] };
      } },
      { id: 'find-angle', level: 'standard', make: function (r) {
        var o = r.int(3, 15), a = r.int(3, 15);
        while (o === a) a = r.int(3, 15);
        var v = Math.atan(o / a) / rad;
        return { prompt: 'In a right-angled triangle, the side opposite angle θ is ' + o + ' cm and the adjacent side is ' + a + ' cm. Find θ, correct to 1 decimal place.', answer: v, dp: 1, unit: '°',
          hint: 'tan θ = opposite ÷ adjacent.', solution: ['tan θ = ' + o + '/' + a + ', so θ = ' + v.toFixed(1) + '°.'] };
      } }
    ]
  });
})();
