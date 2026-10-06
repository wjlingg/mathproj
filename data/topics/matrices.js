(function () {
  EMATH.registerTopic({
    id: 'matrices', title: 'Matrices',
    strand: 'number-algebra', levels: [3, 4],
    syllabusNote: 'O-Level syllabus N9 (Sec 3/4).',
    verified: true,
    objectives: [
      'Write information as a matrix and state the order (size) of a matrix.',
      'Add and subtract matrices, and multiply a matrix by a number.',
      'Multiply two matrices when their orders allow it.',
      'Use matrix multiplication to find totals such as revenue, cost and profit, and say what each element represents.'
    ],
    explanation: [
      'A **matrix** is a rectangular array of numbers in rows and columns. A matrix with m rows and n columns has **order** m × n (rows first). In exam questions, matrices usually organise data such as numbers sold and prices.',
      { term: 'Addition and scalar multiplication', def: 'Matrices of the **same order** are added or subtracted element by element: mat(1,2;3,4) + mat(5,6;7,8) = mat(6,8;10,12). Multiplying by a number k multiplies every element: 2 × mat(1,2;3,4) = mat(2,4;6,8).' },
      { term: 'Matrix multiplication', def: 'A (m × n) matrix times an (n × p) matrix gives an (m × p) matrix. The number of **columns of the first** must equal the number of **rows of the second**. To find the element in row i, column j of the answer, multiply row i of the first matrix by column j of the second and add.' },
      { term: 'Example', def: 'mat(2,3;4,1) × mat(5,0;1,2) = mat(2×5 + 3×1, 2×0 + 3×2; 4×5 + 1×1, 4×0 + 1×2) = mat(13,6;21,2).' },
      { term: 'Order matters', def: 'AB and BA are usually different, and one of them may not exist. Always check the orders first.' },
      { term: 'Interpreting products', def: 'If the rows of a matrix list days and the columns list items, and a column matrix gives the price of each item, then the product gives the **revenue for each day**. Say what each element represents in words.' },
      { term: 'Scale factors', def: 'To apply the same percentage change to every price, multiply by a scalar: a 10% discount is multiplied by k = 0.9. A diagonal matrix applies a different factor to each item.' }
    ],
    examples: [
      { title: 'Multiplying 2 × 2 matrices', question: 'A = mat(2,3;4,1) and B = mat(5,0;1,2). Find AB.',
        steps: ['Row 1 × column 1: 2 × 5 + 3 × 1 = 13.', 'Row 1 × column 2: 2 × 0 + 3 × 2 = 6.', 'Row 2 × column 1: 4 × 5 + 1 × 1 = 21. Row 2 × column 2: 4 × 0 + 1 × 2 = 2.', 'AB = mat(13,6;21,2).'], answer: 'AB = mat(13, 6; 21, 2)' },
      { title: 'A revenue problem', question: 'A stall sells items A, B and C at $2.50, $3 and $4. The matrix S = mat(10,6;8,9;5,4) shows how many of A, B, C (rows) were sold on Monday and Tuesday (columns). Find the revenue for each day.',
        steps: ['Write the prices as a row matrix P = (2.5  3  4), of order 1 × 3.', 'PS has order 1 × 2.', 'Monday: 2.5 × 10 + 3 × 8 + 4 × 5 = 25 + 24 + 20 = 69.', 'Tuesday: 2.5 × 6 + 3 × 9 + 4 × 4 = 15 + 27 + 16 = 58.', 'PS = (69  58): the revenue was $69 on Monday and $58 on Tuesday.'], answer: '$69 and $58' },
      { title: 'A matrix equation', question: 'mat(2,x;3,4) + mat(1,2;y,5) = mat(3,6;7,9). Find x and y.',
        steps: ['Compare the elements in the top right: x + 2 = 6, so x = 4.', 'Compare the elements in the bottom left: 3 + y = 7, so y = 4.'], answer: 'x = 4, y = 4' }
    ],
    mistakes: [
      'Multiplying the matrices element by element. Matrix multiplication is row × column.',
      'Multiplying matrices whose orders do not match.',
      'Writing the order as columns × rows. It is rows × columns.',
      'Changing the order of the multiplication: AB is not the same as BA.',
      'Giving a total without saying what it means. If asked, say "the revenue on Monday", not just "a total".'
    ],
    formulae: [
      { name: 'Order of a product', text: '(m × n)(n × p) = (m × p)' },
      { name: 'Element of a product', text: 'row i of the first × column j of the second' }
    ],
    summary: [
      'Order is rows × columns. Add and subtract only matrices of the same order.',
      'For a product, columns of the first = rows of the second.',
      'Element = row of the first times column of the second, then add.',
      'In contexts, say what each element of the product means.'
    ],
    viz: null,
    questions: [
      { id: 'mx1', level: 'foundation', prompt: 'How many columns does the matrix mat(1,2,3;4,5,6) have?', answer: 3, solution: ['It has 2 rows and 3 columns: order 2 × 3.'] },
      { id: 'mx2', level: 'foundation', prompt: 'A = mat(1,2;3,4) and B = mat(5,6;7,8). Find the element in the second row and first column of A + B.', answer: 10, solution: ['3 + 7 = 10.'] },
      { id: 'mx3', level: 'foundation', prompt: 'A = mat(1,2;3,4). Find the element in the second row and second column of 3A.', answer: 12, solution: ['3 × 4 = 12.'] },
      { id: 'mx4', level: 'foundation', type: 'mcq', prompt: 'Matrix P has order 2 × 3 and matrix Q has order 2 × 3. Can P be multiplied by Q?', options: ['Yes', 'No'], answer: 1, hint: 'Columns of the first must equal rows of the second.', solution: ['P has 3 columns but Q has 2 rows, so PQ does not exist.'] },
      { id: 'mx5', level: 'foundation', prompt: 'A = mat(1,2;3,4) and B = mat(5,6;7,8). Find the element in the first row and second column of A - B.', answer: -4, solution: ['2 - 6 = -4.'] },
      { id: 'mx6', level: 'foundation', type: 'mcq', prompt: 'A matrix of order 2 × 3 is multiplied by a matrix of order 3 × 4. What is the order of the product?', options: ['2 × 4', '3 × 3', '2 × 3', '4 × 2'], answer: 0, solution: ['(2 × 3)(3 × 4) = 2 × 4.'] },
      { id: 'mx7', level: 'standard', prompt: 'A = mat(2,3;4,1) and B = mat(5,0;1,2). Find AB.',
        parts: [{ label: '(a)', prompt: 'Element in row 1, column 1 of AB.', answer: 13, marks: 1 }, { label: '(b)', prompt: 'Element in row 1, column 2 of AB.', answer: 6, marks: 1 },
                { label: '(c)', prompt: 'Element in row 2, column 1 of AB.', answer: 21, marks: 1 }, { label: '(d)', prompt: 'Element in row 2, column 2 of AB.', answer: 2, marks: 1 }],
        solution: ['Row 1 × column 1: 2 × 5 + 3 × 1 = 13.', 'Row 1 × column 2: 2 × 0 + 3 × 2 = 6.', 'Row 2 × column 1: 4 × 5 + 1 × 1 = 21.', 'Row 2 × column 2: 4 × 0 + 1 × 2 = 2.'] },
      { id: 'mx8', level: 'standard', prompt: 'A stall sells items A, B and C at $2.50, $3 and $4 each. The matrix S = mat(10,6;8,9;5,4) shows the numbers of A, B, C (rows) sold on Monday and Tuesday (columns). The prices form the matrix P = (2.5  3  4).',
        parts: [{ label: '(a)', prompt: 'Evaluate PS. What is the revenue on Monday ($)?', answer: 69, marks: 3 }, { label: '(b)', prompt: 'What is the revenue on Tuesday ($)?', answer: 58, marks: 1 }, { label: '(c)', prompt: 'Find the total revenue over the two days ($).', answer: 127, marks: 1 }],
        solution: ['PS = (2.5 × 10 + 3 × 8 + 4 × 5, 2.5 × 6 + 3 × 9 + 4 × 4) = (69, 58).', 'Total = 69 + 58 = $127.'] },
      { id: 'mx9', level: 'standard', prompt: 'The numbers of boys and girls in three events for two age groups are shown in E = mat(5,7;8,4;6,9) and F = mat(10,6;9,12;7,5). The columns are boys and girls and the rows are badminton, table tennis and floorball. T = E + F.',
        parts: [{ label: '(a)', prompt: 'How many girls are there altogether in table tennis (the second row of T)?', answer: 16, marks: 1 }, { label: '(b)', prompt: 'How many boys are there altogether in the three events?', answer: 45, marks: 2 }],
        solution: ['T = mat(15,13;17,16;13,14).', 'Girls in table tennis = 4 + 12 = 16.', 'Boys = 15 + 17 + 13 = 45.'] },
      { id: 'mx10', level: 'standard', prompt: 'The numbers of boys and girls in badminton, table tennis and floorball are shown in T = mat(15,13;17,16;13,14) (columns are boys and girls). The entry fees are $30, $25 and $20. The fees form C = (30  25  20) and M = CT.',
        parts: [{ label: '(a)', prompt: 'Find the total fees from the boys ($).', answer: 1135, marks: 2 }, { label: '(b)', prompt: 'Find the total fees from the girls ($).', answer: 1070, marks: 1 }, { label: '(c)', prompt: 'Find the total amount of fees collected ($).', answer: 2205, marks: 1 }],
        solution: ['Boys: 30 × 15 + 25 × 17 + 20 × 13 = 450 + 425 + 260 = 1 135.', 'Girls: 30 × 13 + 25 × 16 + 20 × 14 = 390 + 400 + 280 = 1 070.', 'Total = 1 135 + 1 070 = $2 205.'] },
      { id: 'mx11', level: 'standard', prompt: 'A shop sells two products at $120 and $80, shown in C = (120  80). During a sale there is a 10% discount, so the new prices are D = kC. The numbers sold on two days are N = mat(5,3;2,4) (rows are the products, columns are the days).',
        parts: [{ label: '(a)', prompt: 'State the value of k.', answer: 0.9, marks: 1 }, { label: '(b)', prompt: 'Find the sales revenue on day 1 from DN ($).', answer: 684, marks: 2 }, { label: '(c)', prompt: 'Find the sales revenue on day 2 from DN ($).', answer: 612, marks: 1 }],
        solution: ['k = 0.9, so D = (108  72).', 'Day 1: 108 × 5 + 72 × 2 = 540 + 144 = 684.', 'Day 2: 108 × 3 + 72 × 4 = 324 + 288 = 612.'] },
      { id: 'mx12', level: 'standard', prompt: 'mat(2,x;3,4) + mat(1,2;y,5) = mat(3,6;7,9).',
        parts: [{ label: '(a)', prompt: 'Find x.', answer: 4, marks: 1 }, { label: '(b)', prompt: 'Find y.', answer: 4, marks: 1 }],
        solution: ['x + 2 = 6, so x = 4.', '3 + y = 7, so y = 4.'] },
      { id: 'mx13', level: 'standard', marks: 1, prompt: 'k × mat(1,2;3,1) = mat(3,6;9,3). Find k.', answer: 3, solution: ['3 = k × 1, so k = 3.'] },
      { id: 'mx15', level: 'challenge', prompt: 'P = mat(2,1;3,4) and Q = mat(x,2;1,y). The first row of PQ is (5  8).',
        parts: [{ label: '(a)', prompt: 'Find x.', answer: 2, marks: 2 }, { label: '(b)', prompt: 'Find y.', answer: 4, marks: 2 }],
        hint: 'Row 1 of P times column 1 of Q gives 2x + 1.', solution: ['Row 1 × column 1: 2x + 1 × 1 = 5, so x = 2.', 'Row 1 × column 2: 2 × 2 + 1 × y = 8, so y = 4.'] },
      { id: 'mx16', level: 'challenge', prompt: 'The matrix Q = mat(120,80;150,60) shows the numbers of Set A and Set B meals (columns) sold on Monday and Tuesday (rows). Set A costs $4.50 and Set B costs $6.00.',
        parts: [{ label: '(a)', prompt: 'Find the sales on Monday from QP, where P is the column matrix of the prices ($).', answer: 1020, marks: 2 }, { label: '(b)', prompt: 'Find the sales on Tuesday ($).', answer: 1035, marks: 1 },
                { label: '(c)', prompt: 'The profit is 30% of the price of Set A and 40% of the price of Set B. Find the profit on Monday ($).', answer: 354, marks: 2 }],
        hint: 'The profit per meal is 0.3 × 4.50 for Set A and 0.4 × 6 for Set B.', solution: ['Monday: 120 × 4.5 + 80 × 6 = 540 + 480 = 1 020.', 'Tuesday: 150 × 4.5 + 60 × 6 = 675 + 360 = 1 035.', 'Profit per meal: A = 1.35, B = 2.40. Monday: 120 × 1.35 + 80 × 2.40 = 162 + 192 = 354.'] }
    ],
    generators: [
      { id: 'add-element', level: 'foundation', make: function (r) {
        var a = [r.int(1, 9), r.int(1, 9), r.int(1, 9), r.int(1, 9)], b = [r.int(1, 9), r.int(1, 9), r.int(1, 9), r.int(1, 9)];
        var i = r.int(0, 3), pos = ['row 1, column 1', 'row 1, column 2', 'row 2, column 1', 'row 2, column 2'][i];
        return { prompt: 'A = mat(' + a[0] + ',' + a[1] + ';' + a[2] + ',' + a[3] + ') and B = mat(' + b[0] + ',' + b[1] + ';' + b[2] + ',' + b[3] + '). Find the element in ' + pos + ' of A + B.', answer: a[i] + b[i],
          solution: [a[i] + ' + ' + b[i] + ' = ' + (a[i] + b[i]) + '.'] };
      } },
      { id: 'product-element', level: 'standard', make: function (r) {
        var a = [r.int(1, 6), r.int(1, 6), r.int(1, 6), r.int(1, 6)], b = [r.int(1, 6), r.int(1, 6), r.int(1, 6), r.int(1, 6)];
        var i = r.int(0, 1), j = r.int(0, 1), pos = 'row ' + (i + 1) + ', column ' + (j + 1);
        var v = a[2 * i] * b[j] + a[2 * i + 1] * b[2 + j];
        return { prompt: 'A = mat(' + a[0] + ',' + a[1] + ';' + a[2] + ',' + a[3] + ') and B = mat(' + b[0] + ',' + b[1] + ';' + b[2] + ',' + b[3] + '). Find the element in ' + pos + ' of AB.', answer: v,
          hint: 'Multiply row ' + (i + 1) + ' of A by column ' + (j + 1) + ' of B.', solution: [a[2 * i] + ' × ' + b[j] + ' + ' + a[2 * i + 1] + ' × ' + b[2 + j] + ' = ' + v + '.'] };
      } }
    ]
  });
})();
