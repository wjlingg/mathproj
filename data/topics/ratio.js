(function () {
  var names = ['Mei', 'Jun', 'Aisha', 'Kumar', 'Wei Ling', 'Daniel', 'Siti', 'Ravi'];

  EMATH.registerTopic({
    id: 'ratio', title: 'Ratio and Proportion',
    strand: 'number-algebra', levels: [1, 2],
    syllabusNote: 'Sec 1-2 (Math syllabus); applied throughout O-Level 4052',
    verified: false,
    objectives: [
      'Write a ratio in simplest form and find equivalent ratios.',
      'Share a quantity in a given ratio and solve "unit" problems.',
      'Combine ratios such as a:b and b:c into a:b:c.',
      'Use ratio for map scales, speed and direct proportion.'
    ],
    explanation: [
      'A **ratio** compares quantities of the same kind. The ratio of 6 to 9 is written 6 : 9. Multiplying or dividing every part by the same non-zero number gives an **equivalent ratio**, so 6 : 9 = 2 : 3. A ratio is in **simplest form** when the parts have no common factor except 1.',
      { term: 'Sharing in a ratio', def: 'Add the parts to find the total number of units, divide the quantity by the total units to find 1 unit, then multiply.' },
      { term: 'Combining ratios', def: 'To join a : b and b : c, make the b-values equal first (use the LCM), then read off a : b : c.' },
      { term: 'Map scale', def: 'A scale of 1 : 50 000 means 1 cm on the map is 50 000 cm = 0.5 km on the ground.' },
      { term: 'Changing quantities', def: 'When something is added or removed, the units no longer stay the same. Find what stays constant (often the total, or one person\'s amount) and rebuild the ratio.' },
      'Two quantities are in **direct proportion** if their ratio stays the same: doubling one doubles the other. The unitary method (find the value of 1 first) always works.'
    ],
    examples: [
      { title: 'Simplest form', question: 'Express 24 : 36 : 60 in its simplest form.',
        steps: ['Find the HCF of 24, 36 and 60. 24 = 2^3 × 3, 36 = 2^2 × 3^2, 60 = 2^2 × 3 × 5, so HCF = 12.', 'Divide every part by 12: 24 ÷ 12 = 2, 36 ÷ 12 = 3, 60 ÷ 12 = 5.'],
        answer: '2 : 3 : 5' },
      { title: 'Sharing in a ratio', question: '$360 is shared among Ann, Bala and Chen in the ratio 2 : 3 : 4. How much does each person get?',
        steps: ['Total units = 2 + 3 + 4 = 9.', '9 units = $360, so 1 unit = 360 ÷ 9 = $40.', 'Ann: 2 × 40 = $80. Bala: 3 × 40 = $120. Chen: 4 × 40 = $160.', 'Check: 80 + 120 + 160 = 360 ✓.'],
        answer: 'Ann $80, Bala $120, Chen $160' },
      { title: 'A changing ratio', question: 'Ali and Ben have stickers in the ratio 5 : 3. After Ali gives 20 stickers to Ben, they have the same number. How many stickers did Ali have at first?',
        steps: ['The total never changes: 5 + 3 = 8 units at first.', 'At the end they are equal, so each has 4 units.', 'Ali went from 5 units to 4 units, so he gave away 1 unit. 1 unit = 20 stickers.', 'Ali at first: 5 × 20 = 100 stickers (Ben: 60). Check: 100 - 20 = 80 = 60 + 20 ✓.'],
        answer: '100 stickers' }
    ],
    mistakes: [
      'Simplifying only part of the ratio, e.g. 6 : 9 : 12 → 2 : 3 : 12.',
      'Forgetting to add the parts: sharing in 3 : 5 means 8 units, not 5.',
      'Mixing units in a ratio. Convert first: 2 m : 50 cm is 200 : 50 = 4 : 1.',
      'Combining a : b and b : c without making the b-parts equal.',
      'Using the wrong unit for a map scale. Convert cm to km by dividing by 100 000.'
    ],
    formulae: [
      { name: 'Value of 1 unit', text: '{quantity|total units}' },
      { name: 'Actual length from map', text: 'map length × scale factor' },
      { name: 'Speed', text: '{distance|time}' }
    ],
    summary: [
      'Simplify by dividing by the HCF of all parts.',
      'Share: add the parts, find 1 unit, then multiply.',
      'For changing ratios, find what stays constant, then compare units before and after.',
      'Always check that the shares add back to the total.'
    ],
    viz: null,
    questions: [
      { id: 'r1', level: 'foundation', type: 'ratio', prompt: 'Express 45 : 60 in its simplest form.', answer: '3:4', hint: 'Divide both numbers by their HCF.', solution: ['HCF of 45 and 60 is 15.', '45 ÷ 15 = 3 and 60 ÷ 15 = 4.'] },
      { id: 'r2', level: 'foundation', type: 'mcq', prompt: 'Which ratio is equivalent to 3 : 5?', options: ['6 : 10', '9 : 20', '12 : 18', '15 : 20'], answer: 0, hint: 'Multiply both parts by the same number.', solution: ['3 × 2 = 6 and 5 × 2 = 10, so 6 : 10.'] },
      { id: 'r3', level: 'foundation', prompt: 'A recipe uses flour and sugar in the ratio 3 : 2. If Mei uses 4.5 cups of flour, how many cups of sugar does she need?', answer: 3, unit: 'cups', hint: 'Find the value of 1 unit first.', solution: ['3 units = 4.5 cups, so 1 unit = 1.5 cups.', 'Sugar = 2 × 1.5 = 3 cups.'] },
      { id: 'r4', level: 'foundation', prompt: '$245 is shared between Mei and Jun in the ratio 3 : 4.',
        parts: [{ label: '(a)', prompt: 'How much does Mei receive?', answer: 105, unit: '$' }, { label: '(b)', prompt: 'How much does Jun receive?', answer: 140, unit: '$' }],
        hint: 'Total units = 3 + 4 = 7.', solution: ['7 units = $245, so 1 unit = $35.', 'Mei: 3 × 35 = $105. Jun: 4 × 35 = $140.'] },
      { id: 'r5', level: 'foundation', prompt: 'On a map with scale 1 : 50 000, two MRT stations are 6.4 cm apart. Find the actual distance in km.', answer: 3.2, unit: 'km', hint: 'Actual = map distance × 50 000, then convert cm to km.', solution: ['Actual distance = 6.4 × 50 000 = 320 000 cm.', '320 000 cm = 3 200 m = 3.2 km.'] },
      { id: 'r6', level: 'standard', prompt: 'The ratio of boys to girls in a school club is 4 : 5. There are 135 students in the club.',
        parts: [{ label: '(a)', prompt: 'How many girls are there?', answer: 75 }, { label: '(b)', prompt: 'How many more girls than boys are there?', answer: 15 }],
        solution: ['Total units = 9, so 1 unit = 135 ÷ 9 = 15.', 'Girls = 5 × 15 = 75, boys = 4 × 15 = 60.', 'Difference = 75 - 60 = 15 (or 1 unit).'] },
      { id: 'r7', level: 'standard', type: 'ratio', prompt: 'a : b = 2 : 3 and b : c = 4 : 5. Find a : b : c.', answer: '8:12:15', hint: 'Make the b-values the same. The LCM of 3 and 4 is 12.', solution: ['a : b = 2 : 3 = 8 : 12.', 'b : c = 4 : 5 = 12 : 15.', 'So a : b : c = 8 : 12 : 15.'] },
      { id: 'r8', level: 'standard', prompt: 'Mdm Tan mixes concentrate and water in the ratio 1 : 4 to make a drink.',
        parts: [{ label: '(a)', prompt: 'How much water (in ml) does she add to 350 ml of concentrate?', answer: 1400, unit: 'ml' }, { label: '(b)', prompt: 'What is the total volume of the drink (in ml)?', answer: 1750, unit: 'ml' }],
        solution: ['Water = 4 × 350 = 1 400 ml.', 'Total = 350 + 1 400 = 1 750 ml.'] },
      { id: 'r9', level: 'standard', prompt: 'The ratio of a father\'s age to his son\'s age is 7 : 2. The father is 30 years older than his son.',
        parts: [{ label: '(a)', prompt: 'Find the father\'s age.', answer: 42, unit: 'years' }, { label: '(b)', prompt: 'Find the son\'s age.', answer: 12, unit: 'years' }],
        hint: 'The difference in units is 7 - 2 = 5.', solution: ['5 units = 30 years, so 1 unit = 6 years.', 'Father = 7 × 6 = 42. Son = 2 × 6 = 12.'] },
      { id: 'r10', level: 'standard', prompt: 'A car travels 150 km in 2.5 hours.',
        parts: [{ label: '(a)', prompt: 'Find its average speed in km/h.', answer: 60, unit: 'km/h' }, { label: '(b)', prompt: 'Express this speed in m/s, correct to 2 decimal places.', answer: 16.666667, dp: 2, unit: 'm/s' }],
        solution: ['Speed = 150 ÷ 2.5 = 60 km/h.', '60 km/h = 60 000 m ÷ 3 600 s = 16.67 m/s (2 d.p.).'] },
      { id: 'r11', level: 'standard', prompt: '8 pens cost $6.40. Find the cost of 15 such pens.', answer: 12, unit: '$', hint: 'Find the cost of 1 pen first.', solution: ['1 pen = 6.40 ÷ 8 = $0.80.', '15 pens = 15 × 0.80 = $12.00.'] },
      { id: 'r12', level: 'standard', prompt: 'Red, blue and green marbles in a bag are in the ratio 2 : 3 : 5. There are 40 green marbles.',
        parts: [{ label: '(a)', prompt: 'How many marbles are there altogether?', answer: 80 }, { label: '(b)', prompt: 'How many blue marbles are there?', answer: 24 }],
        solution: ['5 units = 40, so 1 unit = 8.', 'Total = 10 units = 80.', 'Blue = 3 × 8 = 24.'] },
      { id: 'r13', level: 'standard', prompt: 'A rectangle has length to width ratio 5 : 3 and a perimeter of 64 cm.',
        parts: [{ label: '(a)', prompt: 'Find the length (cm).', answer: 20, unit: 'cm' }, { label: '(b)', prompt: 'Find the area (cm²).', answer: 240, unit: 'cm²' }],
        hint: 'Perimeter = 2 × (length + width).', solution: ['Length + width = 32 cm = 8 units, so 1 unit = 4 cm.', 'Length = 20 cm, width = 12 cm.', 'Area = 20 × 12 = 240 cm².'] },
      { id: 'r14', level: 'challenge', prompt: 'Sandy and Tom have money in the ratio 2 : 5. After each of them spends $30, the ratio becomes 1 : 4. How much money did Tom have at first?', answer: 150, unit: '$',
        hint: 'Let 1 unit be $x. Write both ratios as equations in x.', solution: ['Let the amounts be 2u and 5u. Then (2u - 30) : (5u - 30) = 1 : 4.', '4(2u - 30) = 5u - 30, so 8u - 120 = 5u - 30, so 3u = 90 and u = 30.', 'Tom: 5 × 30 = $150. Check: 60 - 30 = 30 and 150 - 30 = 120, and 30 : 120 = 1 : 4 ✓.'] },
      { id: 'r15', level: 'challenge', prompt: 'Ravi, Siti and Jun share some sweets. Ravi gets {1|3} of the total. Siti and Jun share the rest in the ratio 3 : 5. Jun gets 20 more sweets than Siti.',
        parts: [{ label: '(a)', prompt: 'How many sweets does Siti get?', answer: 30 }, { label: '(b)', prompt: 'How many sweets were there altogether?', answer: 120 }],
        solution: ['Siti : Jun = 3 : 5, so the difference is 2 units = 20 and 1 unit = 10.', 'Siti = 30, Jun = 50, so Siti and Jun have 80 sweets.', '80 is {2|3} of the total, so the total = 80 ÷ 2 × 3 = 120.'] },

      // Exam-style: original items, mark allocations modelled on school papers (1 mark per step of working).
      { id: 'rx1', level: 'standard', type: 'ratio', marks: 2, prompt: 'Express 2.4 km : 800 m in its simplest form.', answer: '3:1',
        hint: 'Write both quantities in the same unit first.', solution: ['2.4 km = 2 400 m.', '2 400 : 800 = 3 : 1.'] },
      { id: 'rx2', level: 'standard', prompt: 'The numbers of red, blue and green pens in a box are in the ratio 3 : 4 : 5. There are 24 more green pens than red pens.',
        parts: [{ label: '(a)', prompt: 'Find the total number of pens in the box.', answer: 144, marks: 2 },
                { label: '(b)', prompt: '12 more blue pens are added to the box. Find the new ratio of red : blue : green in its simplest form.', type: 'ratio', answer: '3:5:5', marks: 2 }],
        hint: 'Green - red = 5 - 3 = 2 units.', solution: ['2 units = 24, so 1 unit = 12.', 'Total = 12 units = 12 × 12 = 144.', 'Red = 36, blue = 48 + 12 = 60, green = 60.', '36 : 60 : 60 = 3 : 5 : 5.'] },
      { id: 'rx3', level: 'standard', prompt: 'On a map drawn to a scale of 1 : 20 000, a park is shown as a rectangle 8 cm by 5 cm.',
        parts: [{ label: '(a)', prompt: 'Find the actual length of the longer side in km.', answer: 1.6, unit: 'km', marks: 2 },
                { label: '(b)', prompt: 'Find the actual area of the park in km².', answer: 1.6, unit: 'km²', marks: 2 }],
        hint: '1 cm on the map is 20 000 cm = 200 m in real life.', solution: ['8 × 20 000 = 160 000 cm = 1.6 km.', '5 × 20 000 = 100 000 cm = 1 km.', 'Area = 1.6 × 1 = 1.6 km².'] },
      { id: 'rx4', level: 'standard', prompt: 'Ali cycles 18 km in 45 minutes at a constant speed.',
        parts: [{ label: '(a)', prompt: 'Find his speed in km/h.', answer: 24, unit: 'km/h', marks: 2 },
                { label: '(b)', prompt: 'At this speed, how many minutes will he take to cycle 30 km?', answer: 75, unit: 'min', marks: 2 }],
        hint: '45 minutes = 0.75 hours.', solution: ['Speed = 18 ÷ 0.75 = 24 km/h.', 'Time = 30 ÷ 24 = 1.25 h = 75 minutes.'] },
      { id: 'rx5', level: 'challenge', marks: 3, prompt: 'The ratio of Amy\'s savings to Bala\'s savings is 3 : 7. Bala gives Amy $60 and they now have the same amount. How much did Bala have at first?', answer: 210, unit: '$',
        hint: 'Bala\'s amount falls by $60 and Amy\'s rises by $60.', solution: ['Let the savings be 3u and 7u.', '3u + 60 = 7u - 60, so 4u = 120 and u = 30.', 'Bala = 7 × 30 = $210.'] },
      { id: 'rx6', level: 'standard', prompt: 'Mei drove 210 km from Singapore to Kuantan at a constant speed of 84 km/h. She then drove a further 90 km at 72 km/h.',
        parts: [{ label: '(a)', prompt: 'Express 84 km/h in m/s, correct to 2 decimal places.', answer: 23.3333, dp: 2, unit: 'm/s', marks: 1 },
                { label: '(b)', prompt: 'Find the time taken for the first part of the journey, in minutes.', answer: 150, unit: 'min', marks: 2 },
                { label: '(c)', prompt: 'Find her average speed for the whole journey in km/h.', answer: 80, unit: 'km/h', marks: 3 }],
        hint: 'Average speed = total distance ÷ total time, not the mean of the two speeds.', solution: ['84 × 1 000 ÷ 3 600 = 23.33 m/s (2 d.p.).', '210 ÷ 84 = 2.5 h = 150 minutes.', 'Second part: 90 ÷ 72 = 1.25 h.', 'Total distance = 300 km and total time = 3.75 h.', 'Average speed = 300 ÷ 3.75 = 80 km/h.'] },
      { id: 'rx7', level: 'standard', prompt: 'The time T minutes taken to fill a tank is inversely proportional to the number N of identical pipes used. 8 pipes take 30 minutes to fill the tank.',
        parts: [{ label: '(a)', prompt: 'Write down an equation connecting T and N. T =', type: 'expression', answer: '240/N', marks: 2 },
                { label: '(b)', prompt: 'Two of the 8 pipes are faulty and cannot be used. Find the extra time needed to fill the tank.', answer: 10, unit: 'min', marks: 2 }],
        hint: 'Inverse proportion means T × N is constant.', solution: ['T × N = 30 × 8 = 240, so T = {240|N}.', 'With 6 pipes: T = 240 ÷ 6 = 40 minutes.', 'Extra time = 40 - 30 = 10 minutes.'] },
      { id: 'rx8', level: 'challenge', marks: 3, prompt: 'Oats, nuts and raisins in a snack mix are in the ratio 4 : 1 : 3 by mass. Betty adds 60 g of raisins and the ratio becomes 8 : 2 : 9. Find the total mass of the new mix in grams.', answer: 380, unit: 'g',
        hint: 'Write the original ratio as 8 : 2 : 6 so that oats and nuts match the new ratio.', solution: ['4 : 1 : 3 = 8 : 2 : 6. Oats and nuts did not change.', 'Raisins went from 6 units to 9 units, so 3 units = 60 g and 1 unit = 20 g.', 'New total = (8 + 2 + 9) × 20 = 380 g.'] }
    ],
    generators: [
      { id: 'share', level: 'standard', make: function (r) {
        var a = r.int(2, 5), b = r.int(a + 1, 8), u = r.int(2, 14) * 5, n1 = r.pick(names), n2 = r.pick(names.filter(function (n) { return n !== n1; }));
        return { prompt: '$' + (a + b) * u + ' is shared between ' + n1 + ' and ' + n2 + ' in the ratio ' + a + ' : ' + b + '. How much does ' + n2 + ' receive?',
          answer: b * u, unit: '$', hint: 'Total units = ' + a + ' + ' + b + '.',
          solution: ['Total units = ' + a + ' + ' + b + ' = ' + (a + b) + '.', '1 unit = ' + (a + b) * u + ' ÷ ' + (a + b) + ' = $' + u + '.', n2 + ' gets ' + b + ' × ' + u + ' = $' + b * u + '.'] };
      } },
      { id: 'simplify', level: 'foundation', make: function (r) {
        var g = EMATH.util.gcd, p, q;
        do { p = r.int(1, 9); q = r.int(1, 9); } while (g(p, q) !== 1 || p === q);
        var k = r.int(2, 9);
        return { type: 'ratio', prompt: 'Express ' + k * p + ' : ' + k * q + ' in its simplest form.', answer: p + ':' + q,
          hint: 'Divide both parts by their HCF.', solution: ['HCF of ' + k * p + ' and ' + k * q + ' is ' + k + '.', 'Divide both by ' + k + ': ' + p + ' : ' + q + '.'] };
      } }
    ]
  });
})();
