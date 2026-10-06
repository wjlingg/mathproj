(function () {
  EMATH.registerTopic({
    id: 'percentage', title: 'Percentage',
    strand: 'number-algebra', levels: [1],
    syllabusNote: 'O-Level syllabus N3 (Sec 1). Compound interest and other finance contexts are in Money Matters.',
    verified: true,
    objectives: [
      'Convert between fractions, decimals and percentages.',
      'Find a percentage of a quantity, and express one quantity as a percentage of another.',
      'Calculate percentage increase, decrease and change.',
      'Solve reverse-percentage problems, including GST, discounts and simple interest.'
    ],
    explanation: [
      '**Per cent** means "out of 100". 35% = {35|100} = 0.35.',
      { term: 'Percentage of a quantity', def: 'Multiply the quantity by the percentage as a fraction. 35% of 240 = {35|100} × 240 = 84.' },
      { term: 'One quantity as a percentage of another', def: '{part|whole} × 100%.' },
      { term: 'Percentage change', def: '{new - old|old} × 100%. Always divide by the original (old) value.' },
      { term: 'Increase and decrease', def: 'To increase by 15%, multiply by 1.15 (115%). To decrease by 12%, multiply by 0.88 (88%).' },
      { term: 'Reverse percentage', def: 'If the new value is a known percentage of the original, divide to get back. After a 20% discount you pay 80% of the original, so original = new ÷ 0.8.' },
      { term: 'GST', def: 'In Singapore, GST is added to the pre-GST price. Price with 9% GST = pre-GST price × 1.09. Restaurant bills often add a 10% service charge first, then GST on the total.' },
      { term: 'Simple interest', def: 'I = {P × R × T|100}, where P is the principal, R the yearly rate (%) and T the number of years.' }
    ],
    examples: [
      { title: 'Part as a percentage', question: 'Express 18 out of 24 as a percentage.',
        steps: ['Write as a fraction: {18|24} = {3|4}.', 'Multiply by 100%: {3|4} × 100% = 75%.'], answer: '75%' },
      { title: 'A discount', question: 'A jacket costs $85. It is sold at a 20% discount. Find the selling price.',
        steps: ['Discount = 20% of 85 = 0.20 × 85 = $17.', 'Selling price = 85 - 17 = $68.', 'Shortcut: pay 80% of the price, 0.80 × 85 = $68.'], answer: '$68' },
      { title: 'Reverse percentage with GST', question: 'A bag costs $54.50 including 9% GST. Find its price before GST.',
        steps: ['Price including GST is 109% of the original price.', '109% = $54.50, so 1% = 54.50 ÷ 109 = $0.50.', 'Original price = 100% = 100 × 0.50 = $50.'], answer: '$50' }
    ],
    mistakes: [
      'Dividing by the new value instead of the original in a percentage change.',
      'Treating the sale price as 20% of the original when it is 80% (after a 20% discount).',
      'Taking 10% off and then 10% on and expecting the original price. The base changes, so the result is 1% lower.',
      'For reverse percentages, subtracting the percentage instead of dividing. 20% off then 20% on does not return to the start.',
      'Adding GST and service charge together as 19%. They compound: ×1.10 then ×1.09.'
    ],
    formulae: [
      { name: 'Percentage change', text: '{new - old|old} × 100%' },
      { name: 'Reverse percentage', text: 'original = {new value|multiplier}' },
      { name: 'Simple interest', text: 'I = {P × R × T|100}' }
    ],
    summary: [
      'Percent means out of 100; convert to a fraction or decimal first.',
      'Increase: multiply by (100 + p)%. Decrease: multiply by (100 - p)%.',
      'Percentage change always divides by the original value.',
      'Reverse percentage: divide by the multiplier.'
    ],
    viz: null,
    questions: [
      { id: 'p1', level: 'foundation', prompt: 'Find 35% of 240.', answer: 84, hint: '35% = 0.35.', solution: ['35% of 240 = 0.35 × 240 = 84.'] },
      { id: 'p2', level: 'foundation', prompt: 'Express 42 as a percentage of 150.', answer: 28, unit: '%', solution: ['{42|150} × 100% = 28%.'] },
      { id: 'p3', level: 'foundation', prompt: 'Increase 80 by 15%.', answer: 92, hint: 'Multiply by 1.15.', solution: ['115% of 80 = 1.15 × 80 = 92.'] },
      { id: 'p4', level: 'foundation', prompt: 'Decrease 250 by 12%.', answer: 220, hint: 'Multiply by 0.88.', solution: ['88% of 250 = 0.88 × 250 = 220.'] },
      { id: 'p5', level: 'foundation', prompt: 'A pair of shoes rises in price from $40 to $52. Find the percentage increase.', answer: 30, unit: '%', solution: ['Increase = 52 - 40 = $12.', '{12|40} × 100% = 30%.'] },
      { id: 'p6', level: 'foundation', prompt: 'Express each as a percentage.',
        parts: [{ label: '(a)', prompt: '0.375', answer: 37.5, unit: '%' }, { label: '(b)', prompt: '{7|20}', answer: 35, unit: '%' }],
        solution: ['0.375 × 100 = 37.5%.', '{7|20} = {35|100} = 35%.'] },
      { id: 'p9', level: 'standard', prompt: 'Aisha scored 36 out of 45 in Test A and 52 out of 80 in Test B.',
        parts: [{ label: '(a)', prompt: 'Her percentage in Test A', answer: 80, unit: '%' }, { label: '(b)', prompt: 'Her percentage in Test B', answer: 65, unit: '%' }],
        solution: ['Test A: {36|45} × 100% = 80%.', 'Test B: {52|80} × 100% = 65%.'] },
      { id: 'p12', level: 'standard', prompt: 'A school has 800 students; 45% are girls. 60% of the girls take part in a dance CCA.',
        parts: [{ label: '(a)', prompt: 'How many girls take part in the dance CCA?', answer: 216 }, { label: '(b)', prompt: 'What percentage of all students is this?', answer: 27, unit: '%' }],
        solution: ['Girls = 0.45 × 800 = 360.', 'Dance CCA = 0.60 × 360 = 216.', '{216|800} × 100% = 27%.'] },
      { id: 'p13', level: 'standard', prompt: 'An item costing $200 is first increased in price by 10%, and the new price is then decreased by 10%.',
        parts: [{ label: '(a)', prompt: 'Find the final price.', answer: 198, unit: '$' }, { label: '(b)', prompt: 'Find the overall percentage decrease from $200.', answer: 1, unit: '%' }],
        solution: ['After increase: 200 × 1.1 = $220.', 'After decrease: 220 × 0.9 = $198.', 'Overall decrease = {2|200} × 100% = 1%.'] },
      { id: 'p14', level: 'standard', prompt: '15% of a number is 63. Find the number.', answer: 420, solution: ['15% = 63, so 1% = 4.2.', '100% = 420.'] },
      { id: 'p15', level: 'challenge', prompt: 'Sam saves 30% of his salary. His salary then rises by 20% and he saves 40% of his new salary. His new savings are what percentage of his old savings?', answer: 160, unit: '%',
        hint: 'Let the old salary be $100 and compare the savings.', solution: ['Old salary $100: old savings = $30.', 'New salary = $120: new savings = 40% × 120 = $48.', '{48|30} × 100% = 160%.'] },

      // Exam-style: original items, mark allocations modelled on school papers (1 mark per step of working).
      { id: 'px1', level: 'standard', prompt: 'A watch has a price of $400 before GST.',
        parts: [{ label: '(a)', prompt: 'Find its price including 9% GST.', answer: 436, unit: '$', marks: 2 },
                { label: '(b)', prompt: 'A shop gives a 15% discount on the GST-inclusive price. Find the selling price.', answer: 370.6, dp: 2, unit: '$', marks: 2 }],
        solution: ['400 × 1.09 = $436.', '85% of 436 = 0.85 × 436 = $370.60.'] },
      { id: 'px2', level: 'standard', prompt: 'A museum had 12 500 visitors in 2023 and 15 000 visitors in 2024.',
        parts: [{ label: '(a)', prompt: 'Find the percentage increase from 2023 to 2024.', answer: 20, unit: '%', marks: 2 },
                { label: '(b)', prompt: 'In 2025 the number of visitors fell by 8% from 2024. Find the number of visitors in 2025.', answer: 13800, marks: 2 }],
        solution: ['Increase = 2 500. {2500|12500} × 100% = 20%.', '92% of 15 000 = 0.92 × 15 000 = 13 800.'] },
      { id: 'px3', level: 'standard', prompt: 'After a 12% pay rise, Mr Wong\'s monthly salary is $4 592.',
        parts: [{ label: '(a)', prompt: 'Find his salary before the pay rise.', answer: 4100, unit: '$', marks: 2 },
                { label: '(b)', prompt: 'Express the pay rise as a percentage of his new salary, correct to 1 decimal place.', answer: 10.7143, dp: 1, unit: '%', marks: 2 }],
        hint: 'The new salary is 112% of the old salary.', solution: ['112% = $4 592, so 1% = $41 and 100% = $4 100.', 'Pay rise = 4 592 - 4 100 = $492.', '{492|4592} × 100% = 10.7% (1 d.p.).'] },
      { id: 'px4', level: 'standard', marks: 3, prompt: 'Jia Hui deposits $8 000 in an account paying simple interest at 1.5% per year. The total amount in the account is $8 720. For how many years was the money deposited?', answer: 6, unit: 'years',
        hint: 'Interest = total - principal.', solution: ['Interest = 8 720 - 8 000 = $720.', '720 = {8000 × 1.5 × T|100} = 120T.', 'T = 6 years.'] },
      { id: 'px5', level: 'challenge', prompt: 'In a school, 40% of the students are boys. 25% of the boys and 35% of the girls wear glasses.',
        parts: [{ label: '(a)', prompt: 'What percentage of all the students wear glasses?', answer: 31, unit: '%', marks: 3 },
                { label: '(b)', prompt: '62 students wear glasses. Find the total number of students in the school.', answer: 200, marks: 2 }],
        hint: 'Take 100 students to start with.', solution: ['Of 100 students: 40 boys and 60 girls.', 'Glasses = 25% × 40 + 35% × 60 = 10 + 21 = 31, so 31%.', '31% = 62, so 1% = 2 and the total = 200.'] },
      { id: 'px6', level: 'standard', prompt: 'A phone was sold at a 27% discount for $584.',
        parts: [{ label: '(a)', prompt: 'Find the original price of the phone.', answer: 800, unit: '$', marks: 2 },
                { label: '(b)', prompt: 'The shop had bought the phone for $640. Find its percentage loss on this sale.', answer: 8.75, unit: '%', marks: 2 }],
        hint: 'After a 27% discount the selling price is 73% of the original.', solution: ['73% = $584, so 1% = $8 and 100% = $800.', 'Loss = 640 - 584 = $56.', '{56|640} × 100% = 8.75%.'] },
      { id: 'px7', level: 'standard', marks: 3, prompt: 'Ravi\'s monthly salary is $3 200. He spends 25% of it on rent, {1|8} of it on food and $1 120 on transport. He saves the rest. What percentage of his salary does he save?', answer: 27.5, unit: '%',
        hint: 'Work out each amount in dollars, then subtract from the salary.', solution: ['Rent = 0.25 × 3 200 = $800. Food = 3 200 ÷ 8 = $400.', 'Spent = 800 + 400 + 1 120 = $2 320.', 'Saved = 3 200 - 2 320 = $880.', '{880|3200} × 100% = 27.5%.'] },
    ],
    generators: [
      { id: 'percent-of', level: 'foundation', make: function (r) {
        var p = r.pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 60, 75, 80]), n = r.int(2, 40) * 20;
        return { prompt: 'Find ' + p + '% of ' + n + '.', answer: n * p / 100, hint: p + '% = ' + p / 100 + '.',
          solution: [p + '% of ' + n + ' = ' + p / 100 + ' × ' + n + ' = ' + n * p / 100 + '.'] };
      } },
      { id: 'discount', level: 'standard', make: function (r) {
        var price = r.int(4, 30) * 10, d = r.pick([10, 15, 20, 25, 30, 40]), final = price * (100 - d) / 100;
        return { prompt: 'A shirt costs $' + price + '. It is sold at a ' + d + '% discount. Find the selling price.', answer: final, unit: '$',
          hint: 'You pay ' + (100 - d) + '% of the original price.',
          solution: ['Discount = ' + d + '% of ' + price + ' = $' + price * d / 100 + '.', 'Selling price = ' + price + ' - ' + price * d / 100 + ' = $' + final + '.'] };
      } }
    ]
  });
})();
