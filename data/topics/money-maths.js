(function () {
  // Exact values are computed here so the solution text and the answer always agree.
  var c2 = function (x) { return x.toFixed(2); };
  var amtA = 8000 * Math.pow(1.012, 8), intA = amtA - 8000, rSimple = intA / (8000 * 4) * 100;
  var amt10 = 15000 * Math.pow(1.03, 4);
  var p11 = 7500 / Math.pow(1.025, 6);
  var costFloor = 612 + 35 * 2 * 8 * 2 + 180 + 250, priceFloor = costFloor * 1.2, ft2 = 52.35 * 10.764, perFt = priceFloor / ft2;
  var diff16 = 4000 * (Math.pow(1.03, 5) - 1) - 4000 * 0.031 * 5;

  EMATH.registerTopic({
    id: 'money-maths', title: 'Money Matters: Interest, Hire Purchase and Exchange Rates',
    strand: 'number-algebra', levels: [3, 4],
    syllabusNote: 'Added from the Sec 3-4 papers (consumer arithmetic); level placement to be confirmed',
    verified: false,
    objectives: [
      'Use simple and compound interest, including finding the rate, the principal or the time.',
      'Work out hire-purchase costs and the interest charged.',
      'Convert between currencies and compare prices abroad.',
      'Solve profit, loss, discount, GST and costing problems, including multi-step problems.'
    ],
    explanation: [
      'Money questions are multi-step, so write down what each line of working means ("deposit", "total paid", "interest"). Round money to the nearest cent only at the **end**.',
      { term: 'Simple interest', def: 'I = {PRT|100}. The interest is the same every year. Total = P + I.' },
      { term: 'Compound interest', def: 'Total amount = P(1 + {r|100})^n, where r is the rate per period and n is the number of periods. For "r% per annum compounded half-yearly" use r ÷ 2 per period and 2n periods. Interest = Total - P.' },
      { term: 'Hire purchase', def: 'Total hire-purchase price = deposit + all the instalments. The extra over the cash price is the interest. The interest is charged on the **balance**, which is cash price minus deposit, so simple interest rate = {interest|balance × years} × 100%.' },
      { term: 'Exchange rates', def: 'If S$1 = ¥110.50, multiply S$ by 110.50 to get yen and divide yen by 110.50 to get S$. To go from one foreign currency to another, convert through S$.' },
      { term: 'Profit, discount and GST', def: 'Profit % = {profit|cost price} × 100%. A mark-up or discount is a multiplier: +50% is × 1.5, -20% is × 0.8. GST and service charge are applied one after the other: × 1.10 then × 1.09.' },
      { term: 'Finding the original', def: 'Reverse a multiplier by dividing. If the total with service charge and GST is $143.88, the original is 143.88 ÷ (1.10 × 1.09).' }
    ],
    examples: [
      { title: 'Hire purchase', question: 'A sofa has a cash price of $2 400. On hire purchase, the deposit is $600 and there are 24 monthly payments of $85. Find the total hire-purchase price, the interest charged and the simple interest rate per year on the balance.',
        steps: ['Total paid = 600 + 24 × 85 = 600 + 2 040 = $2 640.', 'Interest = 2 640 - 2 400 = $240.', 'Balance = 2 400 - 600 = $1 800, for 2 years.', 'Rate = {240|1800 × 2} × 100% = 6.67% per year (2 d.p.).'], answer: '$2 640; $240; 6.67%' },
      { title: 'Exchange rate', question: 'S$1 = ¥110.50. A watch costs ¥8 840. Find its cost in S$.',
        steps: ['S$ = yen ÷ 110.50.', '8 840 ÷ 110.50 = S$80.'], answer: 'S$80' },
      { title: 'Compound interest and equivalent simple interest', question: 'Find the amount if $8 000 earns 2.4% per year compounded half-yearly for 4 years, and the simple interest rate that would give the same interest.',
        steps: ['Each half-year the rate is 1.2%, and there are 8 half-years.', 'Amount = 8 000 × 1.012^8 = $' + c2(amtA) + '.', 'Interest = $' + c2(intA) + '.', 'Simple interest: {' + c2(intA) + '|8000 × 4} × 100% = ' + c2(rSimple) + '% per year.'], answer: '$' + c2(amtA) + '; ' + c2(rSimple) + '%' }
    ],
    mistakes: [
      'Using the annual rate for every half-year in half-yearly compounding. Halve the rate and double the periods.',
      'Charging simple interest on the full cash price instead of the balance after the deposit.',
      'Adding the percentages: a 10% service charge and 9% GST are not 19%.',
      'Dividing instead of multiplying when converting from S$ to a foreign currency.',
      'Rounding at an early step and getting a final answer that is a few cents out.'
    ],
    formulae: [
      { name: 'Simple interest', text: 'I = {PRT|100}' },
      { name: 'Compound interest', text: 'A = P(1 + {r|100})^n' },
      { name: 'Profit', text: 'profit % = {profit|cost price} × 100%' },
      { name: 'Hire-purchase interest', text: 'total paid - cash price' }
    ],
    summary: [
      'Simple interest is the same each year; compound interest grows on the new total.',
      'Hire purchase: deposit + instalments, then interest = total - cash price, charged on the balance.',
      'Convert currencies through S$; divide by the rate to get S$.',
      'Treat discounts, mark-ups, GST and service charge as multipliers, and divide to reverse.'
    ],
    viz: null,
    questions: [
      { id: 'mm1', level: 'foundation', prompt: 'Find the simple interest on $2 000 at 3% per year for 4 years.', answer: 240, unit: '$', solution: ['I = {2000 × 3 × 4|100} = $240.'] },
      { id: 'mm2', level: 'foundation', prompt: 'A TV is bought on hire purchase with a deposit of $500 and 12 monthly payments of $60. Find the total price paid.', answer: 1220, unit: '$', solution: ['500 + 12 × 60 = 500 + 720 = $1 220.'] },
      { id: 'mm3', level: 'foundation', prompt: 'S$1 = RM3.40. Convert S$50 to ringgit.', answer: 170, solution: ['50 × 3.40 = RM170.'] },
      { id: 'mm4', level: 'foundation', prompt: 'A shopkeeper buys an item for $80 and sells it for $100. Find the percentage profit.', answer: 25, unit: '%', solution: ['Profit = $20.', '{20|80} × 100% = 25%.'] },
      { id: 'mm5', level: 'foundation', prompt: 'A bag costs $200 before 9% GST. Find the price including GST.', answer: 218, unit: '$', solution: ['200 × 1.09 = $218.'] },
      { id: 'mm6', level: 'foundation', type: 'mcq', prompt: 'Which earns more after 2 years: 5% per year simple interest or 5% per year compound interest?', options: ['Compound interest', 'Simple interest', 'They are the same', 'It depends on the amount'], answer: 0, solution: ['Compound interest also earns interest on the interest, so it is more after 2 years.'] },
      { id: 'mm7', level: 'standard', prompt: 'A sofa has a cash price of $2 400. On hire purchase the deposit is $600, followed by 24 monthly payments of $85.',
        parts: [{ label: '(a)', prompt: 'Find the total hire-purchase price.', answer: 2640, unit: '$', marks: 2 }, { label: '(b)', prompt: 'Find the interest charged.', answer: 240, unit: '$', marks: 1 },
                { label: '(c)', prompt: 'Find the simple interest rate per year charged on the balance, correct to 2 decimal places.', answer: 240 / (1800 * 2) * 100, dp: 2, unit: '%', marks: 3 }],
        solution: ['600 + 24 × 85 = $2 640.', 'Interest = 2 640 - 2 400 = $240.', 'Balance = $1 800 for 2 years: {240|1800 × 2} × 100% = 6.67%.'] },
      { id: 'mm8', level: 'standard', prompt: 'S$1 = ¥110.50 and S$1 = RM3.40.',
        parts: [{ label: '(a)', prompt: 'A watch costs ¥8 840. Find its cost in S$.', answer: 80, unit: '$', marks: 1 }, { label: '(b)', prompt: 'Find how many ringgit are worth ¥5 525.', answer: 170, marks: 2 }],
        solution: ['8 840 ÷ 110.50 = S$80.', '¥5 525 = 5 525 ÷ 110.50 = S$50. S$50 = 50 × 3.40 = RM170.'] },
      { id: 'mm9', level: 'standard', prompt: 'Mr Lim invests $8 000 at 2.4% per year compounded half-yearly for 4 years.',
        parts: [{ label: '(a)', prompt: 'Find the amount at the end, correct to the nearest cent.', answer: amtA, dp: 2, unit: '$', marks: 2 },
                { label: '(b)', prompt: 'What simple interest rate per year would give the same interest? Give your answer correct to 2 decimal places.', answer: rSimple, dp: 2, unit: '%', marks: 2 }],
        solution: ['Per half-year rate 1.2%, 8 periods: 8 000 × 1.012^8 = $' + c2(amtA) + '.', 'Interest = $' + c2(intA) + '.', 'Rate = {' + c2(intA) + '|8000 × 4} × 100% = ' + c2(rSimple) + '%.'] },
      { id: 'mm10', level: 'standard', marks: 3, prompt: 'Aisha deposits $15 000 in an account that pays x% compound interest per year. After 4 years the account has $' + c2(amt10) + '. Find x.', answer: 3,
        hint: 'Divide by 15 000, then take the 4th root.', solution: ['15 000(1 + {x|100})^4 = ' + c2(amt10) + '.', '(1 + {x|100})^4 = 1.1255, so 1 + {x|100} = 1.03.', 'x = 3.'] },
      { id: 'mm11', level: 'standard', marks: 3, prompt: 'After 6 years at 2.5% per year compound interest, an account has $7 500. Find the original sum, correct to the nearest cent.', answer: p11, dp: 2, unit: '$',
        solution: ['P × 1.025^6 = 7 500.', 'P = 7 500 ÷ 1.025^6 = $' + c2(p11) + '.'] },
      { id: 'mm12', level: 'standard', marks: 3, prompt: 'The marked price of a graphing calculator is 50% more than its cost price. It is sold at a 20% discount on the marked price, and the profit is $30. Find the marked price.', answer: 225, unit: '$',
        solution: ['Let the cost price be C. Marked price = 1.5C and selling price = 0.8 × 1.5C = 1.2C.', 'Profit = 0.2C = 30, so C = 150.', 'Marked price = 1.5 × 150 = $225.'] },
      { id: 'mm13', level: 'standard', prompt: 'A restaurant adds a 10% service charge and then 9% GST to the food bill.',
        parts: [{ label: '(a)', prompt: 'Find the final bill for food costing $80.', answer: 95.92, unit: '$', marks: 2 }, { label: '(b)', prompt: 'A family paid $143.88 altogether. Find the cost of the food before the charges.', answer: 120, unit: '$', marks: 2 }],
        solution: ['80 × 1.10 × 1.09 = $95.92.', '143.88 ÷ 1.199 = $120.'] },
      { id: 'mm14', level: 'challenge', marks: 4, prompt: 'A company replaces the floor in a flat of area 52.35 m². Its costs are: materials $612, labour $35 per hour per installer for 2 installers working 8 hours a day for 2 days, transport $180 and disposal $250. The company wants a 20% profit. Given 1 m² = 10.764 ft², find the price per square foot, correct to the nearest cent.', answer: perFt, dp: 2, unit: '$',
        hint: 'Find the total cost, then the selling price for a 20% profit, then divide by the area in ft².', solution: ['Labour = 35 × 2 × 8 × 2 = $1 120. Total cost = 612 + 1 120 + 180 + 250 = $' + costFloor + '.', 'Selling price = 1.2 × ' + costFloor + ' = $' + c2(priceFloor) + '.', 'Area = 52.35 × 10.764 = ' + c2(ft2) + ' ft².', 'Price per ft² = ' + c2(priceFloor) + ' ÷ ' + c2(ft2) + ' = $' + c2(perFt) + '.'] },
      { id: 'mm15', level: 'challenge', marks: 3, prompt: 'Bank A pays 3% per year compound interest. Bank B pays 3.1% per year simple interest. How much more interest does Bank A pay on $4 000 over 5 years? Give your answer correct to the nearest cent.', answer: diff16, dp: 2, unit: '$',
        solution: ['Bank A: 4 000 × 1.03^5 - 4 000 = $' + c2(4000 * (Math.pow(1.03, 5) - 1)) + '.', 'Bank B: {4000 × 3.1 × 5|100} = $620.', 'Difference = $' + c2(diff16) + '.'] }
    ],
    generators: [
      { id: 'simple-interest', level: 'foundation', make: function (r) {
        var p = r.int(4, 40) * 100, rate = r.pick([1.5, 2, 2.5, 3, 4, 5]), t = r.int(2, 8), i = p * rate * t / 100;
        return { prompt: 'Find the simple interest on $' + p + ' at ' + rate + '% per year for ' + t + ' years.', answer: i, unit: '$', hint: 'I = PRT ÷ 100.',
          solution: ['I = {' + p + ' × ' + rate + ' × ' + t + '|100} = $' + i + '.'] };
      } },
      { id: 'exchange', level: 'standard', make: function (r) {
        var rate = r.pick([3.4, 0.74, 110.5, 1154, 96.8, 4.7, 0.65]), s = r.int(2, 30) * 10, v = s * rate;
        var cur = { 3.4: 'RM', 0.74: 'US$', 110.5: '¥', 1154: '₩', 96.8: '¥', 4.7: 'RM', 0.65: '£' }[rate];
        return { prompt: 'S$1 = ' + cur + rate + '. Find how many ' + cur + ' you can exchange for S$' + s + '. Give your answer correct to 2 decimal places.', answer: v, dp: 2,
          hint: 'Multiply by the rate when changing from S$.', solution: [s + ' × ' + rate + ' = ' + v.toFixed(2) + '.'] };
      } }
    ]
  });
})();
