(function () {
  var TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];

  EMATH.registerTopic({
    id: 'pythagoras', title: "Pythagoras' Theorem",
    strand: 'geometry', levels: [2],
    syllabusNote: 'O-Level syllabus G4.1-4.2 (Sec 2).',
    verified: true,
    objectives: [
      'State and use Pythagoras\' theorem to find a missing side of a right-angled triangle.',
      'Use the converse to test whether a triangle is right-angled.',
      'Apply the theorem to rectangles, isosceles and equilateral triangles, coordinates and 3D boxes.',
      'Round answers sensibly (3 s.f. or 2 d.p.) and give units.'
    ],
    explanation: [
      'In a right-angled triangle the side opposite the right angle is the **hypotenuse** (c), the longest side. Pythagoras\' theorem says: **a^2 + b^2 = c^2**, where a and b are the other two sides.',
      { term: 'Finding the hypotenuse', def: 'Add the squares of the two shorter sides, then take the square root: c = sqrt(a^2 + b^2).' },
      { term: 'Finding a shorter side', def: 'Subtract: a = sqrt(c^2 - b^2). Always make sure you subtract from the hypotenuse squared.' },
      { term: 'Converse', def: 'If the squares of the two shorter sides add up to the square of the longest side, the triangle is right-angled. If not, it is not.' },
      { term: 'Pythagorean triples', def: 'Whole-number sets such as 3, 4, 5; 5, 12, 13; 8, 15, 17; 7, 24, 25. Multiples such as 6, 8, 10 also work.' },
      { term: 'Spotting right angles', def: 'Draw the right-angled triangle inside rectangles, isosceles triangles (split down the middle) and equilateral triangles (a height splits the base in half).' }
    ],
    examples: [
      { title: 'Finding the hypotenuse', question: 'A right-angled triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.',
        steps: ['c^2 = 6^2 + 8^2 = 36 + 64 = 100.', 'c = sqrt(100) = 10 cm.'], answer: '10 cm' },
      { title: 'Finding a shorter side', question: 'The hypotenuse of a right-angled triangle is 13 cm and one side is 5 cm. Find the other side.',
        steps: ['b^2 = 13^2 - 5^2 = 169 - 25 = 144.', 'b = sqrt(144) = 12 cm.'], answer: '12 cm' },
      { title: 'A ladder against a wall', question: 'A 5 m ladder leans against a vertical wall with its foot 1.5 m from the wall. How high up the wall does it reach? Give your answer to 3 significant figures.',
        steps: ['The ladder is the hypotenuse: h^2 + 1.5^2 = 5^2.', 'h^2 = 25 - 2.25 = 22.75.', 'h = sqrt(22.75) = 4.769... = 4.77 m (3 s.f.).'], answer: '4.77 m' },
      { title: 'Is it right-angled?', question: 'Is a triangle with sides 7 cm, 24 cm and 25 cm right-angled?',
        steps: ['The longest side is 25. Test: 7^2 + 24^2 = 49 + 576 = 625.', '25^2 = 625, which equals 625.', 'By the converse of Pythagoras\' theorem, the triangle is right-angled.'], answer: 'Yes, it is right-angled.' }
    ],
    mistakes: [
      'Adding when you should subtract (finding a shorter side), or the other way round.',
      'Forgetting the final square root: leaving the answer as c^2.',
      'Squaring wrongly: 6^2 = 36, not 12.',
      'Using Pythagoras on a triangle that is not right-angled.',
      'Testing the converse with the wrong "longest side".'
    ],
    formulae: [
      { name: "Pythagoras' theorem", text: 'a^2 + b^2 = c^2' },
      { name: 'Distance between two points', text: 'sqrt(dx^2 + dy^2), where dx and dy are the horizontal and vertical differences' },
      { name: 'Space diagonal of a cuboid', text: 'sqrt(l^2 + w^2 + h^2)' }
    ],
    summary: [
      'Hypotenuse: add the squares, then square root.',
      'Shorter side: subtract from the hypotenuse squared, then square root.',
      'Converse: if a^2 + b^2 = c^2 for the longest side, the triangle is right-angled.',
      'Sketch the right-angled triangle first, and label the hypotenuse.'
    ],
    viz: 'pythagoras-proof',
    questions: [
      { id: 'y1', level: 'foundation', prompt: 'A right-angled triangle has shorter sides 9 cm and 12 cm. Find the hypotenuse.',
        figure: { type: 'triangle', shape: 'right', w: 12, h: 9, side: { AB: '9 cm', BC: '12 cm', AC: 'x' }, alt: 'Right-angled triangle ABC with the right angle at B, AB 9 cm, BC 12 cm and the hypotenuse AC marked x.' }, answer: 15, unit: 'cm', solution: ['c^2 = 81 + 144 = 225.', 'c = 15 cm.'] },
      { id: 'y2', level: 'foundation', prompt: 'The hypotenuse of a right-angled triangle is 17 cm and one side is 8 cm. Find the other side.',
        figure: { type: 'triangle', shape: 'right', w: 8, h: 15, side: { BC: '8 cm', AC: '17 cm', AB: 'x' }, alt: 'Right-angled triangle ABC with the right angle at B, BC 8 cm, hypotenuse AC 17 cm and AB marked x.' }, answer: 15, unit: 'cm', hint: 'Subtract: 17^2 - 8^2.', solution: ['b^2 = 289 - 64 = 225.', 'b = 15 cm.'] },
      { id: 'y3', level: 'foundation', prompt: 'A right-angled triangle has shorter sides 5 cm and 7 cm. Find the hypotenuse correct to 3 significant figures.',
        figure: { type: 'triangle', shape: 'right', w: 7, h: 5, side: { AB: '5 cm', BC: '7 cm', AC: 'x' }, alt: 'Right-angled triangle ABC with the right angle at B, AB 5 cm, BC 7 cm and the hypotenuse AC marked x.' }, answer: 8.602325, sf: 3, unit: 'cm', solution: ['c^2 = 25 + 49 = 74.', 'c = sqrt(74) = 8.602... = 8.60 cm (3 s.f.).'] },
      { id: 'y4', level: 'foundation', prompt: 'A rectangle is 12 cm by 5 cm. Find the length of its diagonal.',
        figure: { type: 'polygon', shape: 'rectangle', w: 12, h: 5, side: { AB: '12 cm', BC: '5 cm' }, lines: [{ a: 'A', b: 'C', dash: true, label: 'd' }], alt: 'Rectangle ABCD, 12 cm long and 5 cm wide, with the diagonal AC drawn and marked d.' }, answer: 13, unit: 'cm', solution: ['d^2 = 12^2 + 5^2 = 144 + 25 = 169.', 'd = 13 cm.'] },
      { id: 'y5', level: 'foundation', type: 'mcq', prompt: 'A triangle has sides 8 cm, 15 cm and 17 cm. Is it right-angled?', options: ['Yes', 'No'], answer: 0, solution: ['8^2 + 15^2 = 64 + 225 = 289 = 17^2, so it is right-angled.'] },
      { id: 'y6', level: 'foundation', type: 'mcq', prompt: 'A triangle has sides 6 cm, 7 cm and 10 cm. Is it right-angled?', options: ['Yes', 'No'], answer: 1, solution: ['6^2 + 7^2 = 36 + 49 = 85, but 10^2 = 100.', '85 ≠ 100, so it is not right-angled.'] },
      { id: 'y7', level: 'standard', prompt: 'A drone flies 40 m north and then 30 m east. How far is it from its starting point?',
        figure: { type: 'triangle', v: ['S', 'F', 'P'], shape: 'scalene', pts: [[0, 0], [3, 4], [0, 4]], right: ['P'], side: { SP: '40 m', PF: '30 m', SF: 'd' }, alt: 'The drone starts at S, flies 40 m north to P, then 30 m east to F. The straight line SF is marked d.' }, answer: 50, unit: 'm', hint: 'North and east make a right angle.', solution: ['d^2 = 40^2 + 30^2 = 1600 + 900 = 2500.', 'd = 50 m.'] },
      { id: 'y8', level: 'standard', prompt: 'A square has a diagonal of 10 cm.',
        figure: { type: 'polygon', shape: 'rectangle', w: 3, h: 3, side: { AB: 's' }, lines: [{ a: 'A', b: 'C', dash: true, label: '10 cm' }], alt: 'Square ABCD with side s and the diagonal AC marked 10 cm.' },
        parts: [{ label: '(a)', prompt: 'Find the side length, correct to 2 decimal places.', answer: 7.0710678, dp: 2, unit: 'cm' }, { label: '(b)', prompt: 'Find the area of the square.', answer: 50, unit: 'cm²' }],
        hint: 'If the side is s, then s^2 + s^2 = 10^2.', solution: ['2s^2 = 100, so s^2 = 50.', 's = sqrt(50) = 7.07 cm.', 'Area = s^2 = 50 cm².'] },
      { id: 'y9', level: 'standard', prompt: 'An isosceles triangle has two equal sides of 10 cm and a base of 12 cm.',
        figure: { type: 'triangle', shape: 'isosceles', w: 12, h: 8, side: { BC: '12 cm', AB: '10 cm' }, points: { _M: [6, 0] }, lines: [{ a: 'A', b: '_M', dash: true, label: 'h' }], right: [{ at: '_M', from: 'A', to: 'C' }],
          alt: 'Isosceles triangle ABC with AB = AC = 10 cm and base BC 12 cm. The height h is drawn from A to the midpoint of BC.' },
        parts: [{ label: '(a)', prompt: 'Find its height.', answer: 8, unit: 'cm' }, { label: '(b)', prompt: 'Find its area.', answer: 48, unit: 'cm²' }],
        hint: 'The height meets the base at its midpoint.', solution: ['Half the base = 6 cm.', 'h^2 = 10^2 - 6^2 = 64, so h = 8 cm.', 'Area = {1|2} × 12 × 8 = 48 cm².'] },
      { id: 'y10', level: 'standard', prompt: 'A rectangle ABCD has AB = 8 cm and BC = 15 cm. Show that AC = 17 cm.',
        figure: { type: 'polygon', shape: 'rectangle', w: 8, h: 15, side: { AB: '8 cm', BC: '15 cm' }, lines: [{ a: 'A', b: 'C', dash: true, label: '17 cm' }], alt: 'Rectangle ABCD with AB 8 cm, BC 15 cm and the diagonal AC marked 17 cm.' },
        parts: [{ label: '(a)', prompt: 'Find AC² (in cm²).', answer: 289 }, { label: '(b)', prompt: 'Hence find AC (in cm).', answer: 17 }],
        solution: ['Triangle ABC is right-angled at B.', 'AC^2 = 8^2 + 15^2 = 64 + 225 = 289.', 'AC = sqrt(289) = 17 cm.'] },
      { id: 'y11', level: 'standard', prompt: 'A 6.5 m ladder reaches 6 m up a vertical wall. How far is the foot of the ladder from the wall?',
        figure: { type: 'triangle', shape: 'right', w: 2.5, h: 6, names: false, side: { AB: '6 m', AC: '6.5 m', BC: 'd' }, alt: 'A ladder of length 6.5 m leans against a vertical wall and reaches 6 m up. The distance of its foot from the wall is marked d.' }, answer: 2.5, unit: 'm', solution: ['d^2 = 6.5^2 - 6^2 = 42.25 - 36 = 6.25.', 'd = 2.5 m.'] },
      { id: 'y12', level: 'standard', prompt: 'A rectangular field is 120 m by 90 m. Jun walks along the two sides from one corner to the opposite corner. His friend walks along the diagonal. How much shorter is the diagonal route?',
        figure: { type: 'polygon', shape: 'rectangle', w: 12, h: 9, side: { AB: '120 m', BC: '90 m' }, lines: [{ a: 'A', b: 'C', dash: true, label: 'd' }], alt: 'A rectangular field 120 m long and 90 m wide with its diagonal AC marked d.' }, answer: 60, unit: 'm',
        solution: ['Diagonal^2 = 120^2 + 90^2 = 14400 + 8100 = 22500, so the diagonal = 150 m.', 'Two sides: 120 + 90 = 210 m.', 'Difference = 210 - 150 = 60 m.'] },
      { id: 'y14', level: 'challenge', prompt: 'An equilateral triangle has side 10 cm.',
        figure: { type: 'triangle', shape: 'equilateral', side: { AB: '10 cm' }, points: { _M: [2, 0] }, lines: [{ a: 'A', b: '_M', dash: true, label: 'h' }], right: [{ at: '_M', from: 'A', to: 'C' }],
          alt: 'Equilateral triangle ABC with side 10 cm. The height h is drawn from A to the midpoint of BC.' },
        parts: [{ label: '(a)', prompt: 'Find its height, correct to 2 decimal places.', answer: 8.6602540, dp: 2, unit: 'cm' }, { label: '(b)', prompt: 'Find its area, correct to 3 significant figures.', answer: 43.30127, sf: 3, unit: 'cm²' }],
        solution: ['The height splits the base into 5 cm and 5 cm.', 'h^2 = 10^2 - 5^2 = 75, so h = 8.66 cm.', 'Area = {1|2} × 10 × sqrt(75) = 43.3 cm² (3 s.f.).'] },
      { id: 'y16', level: 'standard', marks: 2, prompt: 'The points A(-2, 1) and B(4, 9) are shown on the grid. Find the length of AB.', answer: 10,
        figure: { type: 'grid', x: [-3, 5], y: [0, 10], every: 1, points: { A: [-2, 1], B: [4, 9] }, pointLabels: { A: 'A(-2, 1)', B: 'B(4, 9)' }, segments: [['A', 'B', 'accent']], alt: 'A coordinate grid with the point A at (-2, 1) and the point B at (4, 9) joined by a straight line.' },
        hint: 'Draw a right-angled triangle with AB as the hypotenuse. Find the horizontal and vertical differences.', solution: ['Horizontal difference = 4 - (-2) = 6.', 'Vertical difference = 9 - 1 = 8.', 'AB^2 = 6^2 + 8^2 = 100, so AB = 10 units.'] },
      { id: 'y15', level: 'challenge', prompt: 'A cuboid measures 3 cm by 4 cm by 12 cm. Find the length of its space diagonal.',
        figure: { type: 'cuboid', dims: [4, 3, 5], side: { AB: '4 cm', BC: '3 cm', BF: '12 cm' }, lines: [{ a: 'A', b: 'G', dash: true, accent: true, label: 'd' }], alt: 'A cuboid ABCDEFGH with base ABCD measuring 4 cm by 3 cm and height 12 cm. The space diagonal AG is drawn and marked d.' }, answer: 13, unit: 'cm',
        hint: 'First find the diagonal of the 3 by 4 face, then use it with the height.', solution: ['Diagonal of the base: sqrt(3^2 + 4^2) = 5 cm.', 'Space diagonal: sqrt(5^2 + 12^2) = sqrt(169) = 13 cm.'] },
    ],
    generators: [
      { id: 'triple', level: 'standard', make: function (r) {
        var t = r.pick(TRIPLES), k = r.int(1, 3), a = t[0] * k, b = t[1] * k, c = t[2] * k;
        if (r.next() < 0.5) {
          return { prompt: 'A right-angled triangle has shorter sides ' + a + ' cm and ' + b + ' cm. Find the hypotenuse.', answer: c, unit: 'cm',
            figure: { type: 'triangle', shape: 'right', w: b, h: a, side: { AB: a + ' cm', BC: b + ' cm', AC: 'x' }, alt: 'Right-angled triangle with shorter sides ' + a + ' cm and ' + b + ' cm and the hypotenuse marked x.' },
            solution: ['c^2 = ' + a + '^2 + ' + b + '^2 = ' + (a * a + b * b) + '.', 'c = ' + c + ' cm.'] };
        }
        return { prompt: 'A right-angled triangle has hypotenuse ' + c + ' cm and one side ' + a + ' cm. Find the other side.', answer: b, unit: 'cm',
          figure: { type: 'triangle', shape: 'right', w: b, h: a, side: { AB: a + ' cm', BC: 'x', AC: c + ' cm' }, alt: 'Right-angled triangle with hypotenuse ' + c + ' cm, one side ' + a + ' cm and the other side marked x.' },
          hint: 'Subtract the squares.', solution: ['b^2 = ' + c + '^2 - ' + a + '^2 = ' + (c * c - a * a) + '.', 'b = ' + b + ' cm.'] };
      } },
      { id: 'decimal', level: 'standard', make: function (r) {
        var a = r.int(2, 12), b = r.int(2, 12), c = Math.sqrt(a * a + b * b);
        return { prompt: 'A right-angled triangle has shorter sides ' + a + ' cm and ' + b + ' cm. Find the hypotenuse correct to 2 decimal places.', answer: c, dp: 2, unit: 'cm',
          figure: { type: 'triangle', shape: 'right', w: b, h: a, side: { AB: a + ' cm', BC: b + ' cm', AC: 'x' }, alt: 'Right-angled triangle with shorter sides ' + a + ' cm and ' + b + ' cm and the hypotenuse marked x.' },
          solution: ['c^2 = ' + a + '^2 + ' + b + '^2 = ' + (a * a + b * b) + '.', 'c = sqrt(' + (a * a + b * b) + ') = ' + c.toFixed(2) + ' cm.'] };
      } }
    ]
  });
})();
