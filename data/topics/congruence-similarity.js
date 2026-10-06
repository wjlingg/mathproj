(function () {
  EMATH.registerTopic({
    id: 'congruence-similarity', title: 'Congruence and Similarity',
    strand: 'geometry', levels: [2, 3, 4],
    syllabusNote: 'O-Level syllabus G2: congruence and similarity (Sec 2); scale drawings and ratios of areas and volumes (Sec 3/4).',
    verified: true,
    objectives: [
      'Decide whether two triangles are congruent (SSS, SAS, ASA, AAS, RHS) and use congruent figures to find lengths and angles.',
      'Use the scale factor of similar figures to find unknown lengths.',
      'Use the ratios of areas (k^2) and volumes (k^3) of similar figures.',
      'Apply similarity to maps, models and real-life situations.'
    ],
    explanation: [
      'Two figures are **congruent** if they have the same shape and size. Two figures are **similar** if they have the same shape: corresponding angles are equal and corresponding lengths are in the same ratio. Congruent figures are similar with scale factor 1.',
      { term: 'Congruent triangles', def: 'SSS: three pairs of equal sides. SAS: two pairs of sides and the angle **between** them. ASA or AAS: two pairs of angles and one pair of sides. RHS: a right angle, the hypotenuse and one other side.' },
      { term: 'Scale factor', def: 'k = {length in the new figure|corresponding length in the original}. Match corresponding sides carefully, from the angles they are opposite.' },
      { term: 'Area and volume', def: 'If the lengths are in the ratio 1 : k, the areas are in the ratio 1 : k^2 and the volumes are in the ratio 1 : k^3. Going the other way, take a square root or a cube root.' },
      { term: 'Parallel lines in a triangle', def: 'If DE is parallel to BC, with D on AB and E on AC, then triangles ADE and ABC are similar, so {AD|AB} = {AE|AC} = {DE|BC}.' },
      { term: 'Maps and models', def: 'A scale of 1 : 200 means every length is 200 times bigger in real life, every area 200^2 times bigger, and every volume 200^3 times bigger.' }
    ],
    examples: [
      { title: 'Similar triangles', question: 'Triangles ABC and XYZ are similar, with A, B, C corresponding to X, Y, Z. AB = 6 cm, BC = 9 cm, AC = 12 cm and XY = 8 cm. Find YZ and XZ.',
        steps: ['Scale factor = {XY|AB} = {8|6} = {4|3}.', 'YZ = 9 × {4|3} = 12 cm.', 'XZ = 12 × {4|3} = 16 cm.'], answer: 'YZ = 12 cm, XZ = 16 cm' },
      { title: 'Area and volume ratios', question: 'Two similar cylinders have heights 6 cm and 9 cm. The smaller has volume 80 cm^3. Find the volume of the larger one.',
        steps: ['Ratio of lengths = 6 : 9 = 2 : 3, so k = {3|2}.', 'Ratio of volumes = k^3 = {27|8}.', 'Volume of larger = 80 × {27|8} = 270 cm^3.'], answer: '270 cm³' },
      { title: 'A line parallel to a side', question: 'In triangle ABC, D is on AB and E is on AC with DE parallel to BC. AD = 4 cm, DB = 6 cm and DE = 5 cm. Find BC.',
        steps: ['Triangles ADE and ABC are similar.', 'AB = 4 + 6 = 10 cm, so the scale factor from ADE to ABC is {10|4} = 2.5.', 'BC = 5 × 2.5 = 12.5 cm.'], answer: '12.5 cm' }
    ],
    mistakes: [
      'Using SSA as a congruence test. A pair of sides and a non-included angle is not enough.',
      'Matching the wrong sides. Always match each side to the one opposite the same angle.',
      'Using the ratio of lengths as the ratio of areas. Square it for areas, cube it for volumes.',
      'Using AD : DB as the scale factor instead of AD : AB.',
      'Forgetting that a map area scale is the square of the length scale.'
    ],
    formulae: [
      { name: 'Scale factor', text: 'k = {new length|original length}' },
      { name: 'Area ratio', text: 'k^2' },
      { name: 'Volume ratio', text: 'k^3' }
    ],
    summary: [
      'Congruent: SSS, SAS, ASA, AAS or RHS. Similar: equal angles and lengths in the same ratio.',
      'Match corresponding sides using the angles opposite them.',
      'Length ratio 1 : k, area ratio 1 : k^2, volume ratio 1 : k^3.',
      'For a line parallel to a side of a triangle, the small and large triangles are similar.'
    ],
    viz: null,
    questions: [
      { id: 'cs1', level: 'foundation', prompt: 'A triangle with sides 4 cm, 6 cm and 8 cm is enlarged to a similar triangle with sides 6 cm, 9 cm and 12 cm. Find the scale factor.', answer: 1.5, solution: ['{6|4} = 1.5.'] },
      { id: 'cs2', level: 'foundation', type: 'mcq', prompt: 'Two triangles each have two pairs of equal sides and the pair of angles between those sides are equal. Which congruence test applies?', options: ['SSS', 'SAS', 'ASA', 'RHS'], answer: 1, solution: ['Two sides and the included angle: SAS.'] },
      { id: 'cs3', level: 'foundation', prompt: 'Two rectangles are similar. The corresponding widths are 3 cm and 5 cm. The length of the smaller rectangle is 6 cm. Find the length of the larger one.', answer: 10, unit: 'cm', solution: ['Scale factor = {5|3}.', '6 × {5|3} = 10 cm.'] },
      { id: 'cs4', level: 'foundation', prompt: 'A figure has area 5 cm². It is enlarged with scale factor 3. Find the area of the enlarged figure.', answer: 45, unit: 'cm²', solution: ['Area scale factor = 3^2 = 9.', '5 × 9 = 45 cm^2.'] },
      { id: 'cs5', level: 'foundation', prompt: 'A model of a building is made to a scale of 1 : 50. The real building is 30 m tall. Find the height of the model in cm.', answer: 60, unit: 'cm', solution: ['30 m = 3 000 cm.', '3 000 ÷ 50 = 60 cm.'] },
      { id: 'cs7', level: 'standard', prompt: 'Triangles ABC and XYZ are similar, with A, B, C corresponding to X, Y, Z. AB = 6 cm, BC = 9 cm, AC = 12 cm and XY = 8 cm.',
        parts: [{ label: '(a)', prompt: 'Write down the scale factor from ABC to XYZ as a fraction.', answer: '4/3', marks: 1 },
                { label: '(b)', prompt: 'Find the length of YZ.', answer: 12, unit: 'cm', marks: 2 },
                { label: '(c)', prompt: 'Find the length of XZ.', answer: 16, unit: 'cm', marks: 1 }],
        solution: ['Scale factor = {8|6} = {4|3}.', 'YZ = 9 × {4|3} = 12 cm.', 'XZ = 12 × {4|3} = 16 cm.'] },
      { id: 'cs8', level: 'standard', prompt: 'Two similar figures have corresponding lengths of 4 cm and 10 cm.',
        parts: [{ label: '(a)', prompt: 'Write down the ratio of their areas in its simplest form.', type: 'ratio', answer: '4:25', marks: 2 },
                { label: '(b)', prompt: 'The smaller figure has area 24 cm². Find the area of the larger figure.', answer: 150, unit: 'cm²', marks: 2 }],
        solution: ['Ratio of lengths = 4 : 10 = 2 : 5, so the ratio of areas = 4 : 25.', '24 ÷ 4 × 25 = 150 cm^2.'] },
      { id: 'cs9', level: 'standard', marks: 3, prompt: 'Two similar cylinders have heights 6 cm and 9 cm. The smaller cylinder has volume 80 cm³. Find the volume of the larger cylinder.', answer: 270, unit: 'cm³',
        solution: ['k = {9|6} = 1.5.', 'Volume ratio = 1.5^3 = 3.375.', '80 × 3.375 = 270 cm^3.'] },
      { id: 'cs10', level: 'standard', marks: 3, prompt: 'Two similar bottles hold 250 ml and 2 000 ml. The smaller bottle is 12 cm tall. How tall is the larger bottle?', answer: 24, unit: 'cm',
        hint: 'Volume ratio 250 : 2 000 = 1 : 8, so the length ratio is 1 : 2.', solution: ['Volume ratio = 1 : 8, so length ratio = 1 : 2 (cube root of 8).', 'Height = 12 × 2 = 24 cm.'] },
      { id: 'cs11', level: 'standard', prompt: 'In triangle ABC, D is on AB and E is on AC, with DE parallel to BC. AD = 4 cm, DB = 6 cm and DE = 5 cm.',
        parts: [{ label: '(a)', prompt: 'Find the length of BC.', answer: 12.5, unit: 'cm', marks: 3 }, { label: '(b)', prompt: 'Write down the ratio of the area of triangle ADE to the area of triangle ABC in its simplest form.', type: 'ratio', answer: '4:25', marks: 2 }],
        solution: ['AB = 10 cm, scale factor from ADE to ABC = {10|4} = 2.5.', 'BC = 5 × 2.5 = 12.5 cm.', 'Area ratio = (4 : 10)^2 = 4 : 25.'] },
      { id: 'cs12', level: 'standard', marks: 2, prompt: 'A 1.5 m pole casts a shadow 2 m long. At the same time, a tree casts a shadow 12 m long. Find the height of the tree.', answer: 9, unit: 'm',
        solution: ['The triangles are similar: {height|shadow} is the same.', '{1.5|2} × 12 = 9 m.'] },
      { id: 'cs13', level: 'standard', prompt: 'A model ship is made to a scale of 1 : 200. The model is 0.75 m long and its deck has area 0.3 m².',
        parts: [{ label: '(a)', prompt: 'Find the length of the real ship in metres.', answer: 150, unit: 'm', marks: 1 }, { label: '(b)', prompt: 'Find the area of the real deck in m².', answer: 12000, unit: 'm²', marks: 2 }],
        solution: ['Length = 0.75 × 200 = 150 m.', 'Area scale factor = 200^2 = 40 000.', 'Area = 0.3 × 40 000 = 12 000 m^2.'] },
      { id: 'cs14', level: 'standard', prompt: 'Triangle ABC is congruent to triangle DEF, with A, B, C matching D, E, F. AB = 8 cm, BC = 11 cm, angle ABC = 64° and angle ACB = 51°.',
        parts: [{ label: '(a)', prompt: 'Find the length of EF.', answer: 11, unit: 'cm', marks: 1 }, { label: '(b)', prompt: 'Find angle DEF.', answer: 64, unit: '°', marks: 1 }, { label: '(c)', prompt: 'Find angle EDF.', answer: 65, unit: '°', marks: 2 }],
        solution: ['EF = BC = 11 cm.', 'Angle DEF = angle ABC = 64°.', 'Angle BAC = 180 - 64 - 51 = 65°, so angle EDF = 65°.'] },
      { id: 'cs15', level: 'challenge', marks: 3, prompt: 'Two similar triangles have areas 18 cm² and 50 cm². The perimeter of the smaller triangle is 24 cm. Find the perimeter of the larger triangle.', answer: 40, unit: 'cm',
        hint: 'Take the square root of the area ratio to get the length ratio.', solution: ['Area ratio = 18 : 50 = 9 : 25.', 'Length ratio = 3 : 5.', 'Perimeter of larger = 24 × {5|3} = 40 cm.'] },
      { id: 'cs16', level: 'challenge', marks: 3, prompt: 'Two similar solids have surface areas 36 cm² and 100 cm². The volume of the larger solid is 500 cm³. Find the volume of the smaller solid.', answer: 108, unit: 'cm³',
        solution: ['Area ratio = 36 : 100 = 9 : 25, so length ratio = 3 : 5.', 'Volume ratio = 3^3 : 5^3 = 27 : 125.', 'Volume of smaller = 500 × {27|125} = 108 cm^3.'] }
    ],
    generators: [
      { id: 'scale-length', level: 'foundation', make: function (r) {
        var small = r.int(2, 9), k = r.pick([2, 3, 4, 5]), side = r.int(3, 12);
        return { prompt: 'Two similar triangles have corresponding sides of ' + small + ' cm and ' + small * k + ' cm. A side of the smaller triangle is ' + side + ' cm. Find the corresponding side of the larger triangle.', answer: side * k, unit: 'cm',
          hint: 'Find the scale factor first.', solution: ['Scale factor = ' + small * k + ' ÷ ' + small + ' = ' + k + '.', side + ' × ' + k + ' = ' + side * k + ' cm.'] };
      } },
      { id: 'area-scale', level: 'standard', make: function (r) {
        var pairs = [[2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [3, 7]], p = r.pick(pairs), m = r.int(2, 9), a = p[0], b = p[1];
        return { prompt: 'Two similar figures have corresponding lengths of ' + a + ' cm and ' + b + ' cm. The smaller figure has area ' + a * a * m + ' cm². Find the area of the larger figure.', answer: b * b * m, unit: 'cm²',
          hint: 'Area ratio = (length ratio)^2.', solution: ['Area ratio = ' + a + '^2 : ' + b + '^2 = ' + a * a + ' : ' + b * b + '.', 'Area of larger = ' + a * a * m + ' ÷ ' + a * a + ' × ' + b * b + ' = ' + b * b * m + ' cm^2.'] };
      } }
    ]
  });
})();
