(function () {
  EMATH.registerTopic({
    id: 'speed-time', title: 'Speed-Time Graphs',
    strand: 'number-algebra', levels: [3, 4],
    syllabusNote: 'The syllabus lists distance-time and speed-time graphs as a real-world context in every year, not as a separate content item. Placed at Sec 3/4 as a teaching choice.',
    verified: false,
    objectives: [
      'Read and interpret speed-time graphs made of straight lines.',
      'Find acceleration and deceleration from the gradient.',
      'Find the distance travelled from the area under the graph.',
      'Find average speed and convert between km/h and m/s.'
    ],
    explanation: [
      'A **speed-time graph** plots speed (vertical axis) against time (horizontal axis). The graphs in this topic are made of straight lines, so the questions describe the points where the line changes direction.',
      { term: 'Gradient = acceleration', def: 'Acceleration = {change in speed|time taken}, in m/s^2. A negative acceleration is **deceleration**; a horizontal line means constant speed.' },
      { term: 'Area = distance', def: 'The distance travelled is the area under the graph. Split it into triangles, rectangles and trapeziums: triangle {1|2} × base × height, trapezium {1|2}(a + b)h.' },
      { term: 'Average speed', def: 'Average speed = {total distance|total time}. It is not the average of the speeds unless the times are equal.' },
      { term: 'Unit conversion', def: '1 m/s = 3.6 km/h. So 54 km/h = 15 m/s, and 5 m/s = 18 km/h. 1 km = 1 000 m.' },
      { term: 'Reading the question', def: 'Check whether the time is in seconds or hours, and whether the answer is wanted in m, km, m/s or km/h.' }
    ],
    examples: [
      { title: 'A three-stage journey', question: 'A car accelerates uniformly from rest to 10 m/s in 20 s, travels at constant speed for 40 s, then decelerates uniformly to rest in 20 s. Find the acceleration, the total distance and the average speed.',
        steps: ['Acceleration = {10 - 0|20} = 0.5 m/s^2.', 'Distances: {1|2} × 20 × 10 = 100; 10 × 40 = 400; {1|2} × 20 × 10 = 100.', 'Total distance = 600 m.', 'Total time = 80 s, so average speed = 600 ÷ 80 = 7.5 m/s.'], answer: '0.5 m/s², 600 m, 7.5 m/s' },
      { title: 'Finding an unknown speed', question: 'A particle accelerates from rest to v m/s in 10 s, travels at v m/s for 20 s and then decelerates to rest in 10 s. The total distance is 600 m. Find v.',
        steps: ['Area = {1|2} × 10 × v + 20 × v + {1|2} × 10 × v.', '= 5v + 20v + 5v = 30v.', '30v = 600, so v = 20 m/s.'], answer: '20 m/s' },
      { title: 'Deceleration', question: 'A car travelling at 25 m/s brakes with a deceleration of 2.5 m/s^2 until it stops. How long does it take and how far does it travel?',
        steps: ['Time = {25|2.5} = 10 s.', 'The graph is a triangle with base 10 and height 25.', 'Distance = {1|2} × 10 × 25 = 125 m.'], answer: '10 s, 125 m' }
    ],
    mistakes: [
      'Taking the gradient as the distance, or the area as the acceleration.',
      'Using the speed when the question asks for the distance (area).',
      'Averaging two speeds when the times are different.',
      'Mixing seconds and hours, or m/s and km/h, in the same calculation.',
      'Forgetting the {1|2} when finding the area of a triangle.'
    ],
    formulae: [
      { name: 'Acceleration', text: '{change in speed|time}' },
      { name: 'Distance', text: 'area under the speed-time graph' },
      { name: 'Average speed', text: '{total distance|total time}' }
    ],
    summary: [
      'Gradient = acceleration; area = distance.',
      'Split the area under the graph into triangles, rectangles and trapeziums.',
      'Average speed = total distance ÷ total time.',
      '1 m/s = 3.6 km/h.'
    ],
    viz: null,
    questions: [
      { id: 'sp1', level: 'foundation', prompt: 'A car speeds up uniformly from rest to 12 m/s in 4 s. Find its acceleration.', answer: 3, unit: 'm/s²', solution: ['Acceleration = {12 - 0|4} = 3 m/s^2.'] },
      { id: 'sp3', level: 'foundation', prompt: 'A speed-time graph is a triangle with base 10 s and height 6 m/s. Find the distance travelled.', answer: 30, unit: 'm', solution: ['Area = {1|2} × 10 × 6 = 30 m.'] },
      { id: 'sp5', level: 'foundation', type: 'mcq', prompt: 'On a speed-time graph, the gradient represents', options: ['acceleration', 'distance', 'speed', 'time'], answer: 0, solution: ['Gradient = change in speed ÷ time = acceleration.'] },
      { id: 'sp6', level: 'foundation', prompt: 'Convert 54 km/h to m/s.', answer: 15, unit: 'm/s', solution: ['54 × 1 000 ÷ 3 600 = 15 m/s.'] },
      { id: 'sp7', level: 'standard', prompt: 'A car accelerates uniformly from rest to 10 m/s in 20 s, travels at constant speed for 40 s, then decelerates uniformly to rest in 20 s.',
        parts: [{ label: '(a)', prompt: 'Find the acceleration.', answer: 0.5, unit: 'm/s²', marks: 1 }, { label: '(b)', prompt: 'Find the total distance travelled.', answer: 600, unit: 'm', marks: 3 }, { label: '(c)', prompt: 'Find the average speed for the whole journey.', answer: 7.5, unit: 'm/s', marks: 2 }],
        solution: ['Acceleration = {10|20} = 0.5 m/s^2.', 'Distance = 100 + 400 + 100 = 600 m.', 'Average speed = 600 ÷ 80 = 7.5 m/s.'] },
      { id: 'sp8', level: 'standard', prompt: 'A train\'s speed increases uniformly from 5 m/s to 25 m/s in 10 s.',
        parts: [{ label: '(a)', prompt: 'Find its acceleration.', answer: 2, unit: 'm/s²', marks: 1 }, { label: '(b)', prompt: 'Find the distance travelled in the 10 s.', answer: 150, unit: 'm', marks: 2 }],
        hint: 'The graph is a trapezium: {1|2}(5 + 25) × 10.', solution: ['Acceleration = {25 - 5|10} = 2 m/s^2.', 'Distance = {1|2}(5 + 25) × 10 = 150 m.'] },
      { id: 'sp9', level: 'standard', prompt: 'A cyclist accelerates from rest to 12 m/s in 20 s. She then decelerates uniformly at 0.1 m/s^2 until t = 60 s, reaching a speed of v m/s, and then travels at v m/s until time T s.',
        parts: [{ label: '(a)', prompt: 'Find v.', answer: 8, unit: 'm/s', marks: 2 }, { label: '(b)', prompt: 'The total distance travelled is 1.2 km. Find T.', answer: 145, unit: 's', marks: 3 }],
        solution: ['(a) Speed falls by 0.1 × 40 = 4 m/s, so v = 12 - 4 = 8.', '(b) Distance: {1|2} × 20 × 12 = 120; {1|2}(12 + 8) × 40 = 400; then 8(T - 60).', '520 + 8(T - 60) = 1 200, so T - 60 = 85 and T = 145.'] },
      { id: 'sp12', level: 'standard', prompt: 'A lift\'s speed increases uniformly from 0 to 3 m/s in 4 s, stays at 3 m/s for 10 s, then falls uniformly to rest in 2 s.',
        parts: [{ label: '(a)', prompt: 'Find the total distance travelled.', answer: 39, unit: 'm', marks: 3 }, { label: '(b)', prompt: 'Find the average speed, correct to 2 decimal places.', answer: 39 / 16, dp: 2, unit: 'm/s', marks: 2 }],
        solution: ['Distance = {1|2} × 4 × 3 + 3 × 10 + {1|2} × 2 × 3 = 6 + 30 + 3 = 39 m.', 'Total time = 16 s. Average speed = 39 ÷ 16 = 2.44 m/s.'] },
      { id: 'sp13', level: 'standard', marks: 3, prompt: 'A cyclist rides 6 km at 18 km/h and then 4 km at 12 km/h. Find the average speed for the whole journey in km/h.', answer: 15, unit: 'km/h',
        hint: 'Find the time for each part.', solution: ['Time 1 = 6 ÷ 18 = {1|3} h. Time 2 = 4 ÷ 12 = {1|3} h.', 'Total distance = 10 km, total time = {2|3} h.', 'Average speed = 10 ÷ {2|3} = 15 km/h.'] },
      { id: 'sp14', level: 'challenge', marks: 3, prompt: 'A particle accelerates uniformly from rest to v m/s in 10 s, travels at v m/s for 20 s and then decelerates uniformly to rest in 10 s. The total distance travelled is 600 m. Find v.', answer: 20, unit: 'm/s',
        solution: ['Area = {1|2} × 10 × v + 20v + {1|2} × 10 × v = 30v.', '30v = 600, so v = 20.'] },
      { id: 'sp15', level: 'challenge', prompt: 'A car travelling at 25 m/s brakes with a constant deceleration of 2.5 m/s^2 until it stops.',
        parts: [{ label: '(a)', prompt: 'How long does it take to stop?', answer: 10, unit: 's', marks: 1 }, { label: '(b)', prompt: 'How far does it travel while braking?', answer: 125, unit: 'm', marks: 2 }],
        solution: ['Time = 25 ÷ 2.5 = 10 s.', 'Distance = {1|2} × 10 × 25 = 125 m.'] },
    ],
    generators: [
      { id: 'accel', level: 'foundation', make: function (r) {
        var a = r.int(2, 9), t = r.int(3, 12);
        return { prompt: 'A car starts from rest and accelerates uniformly at ' + a + ' m/s² for ' + t + ' s. Find its final speed in m/s.', answer: a * t, unit: 'm/s',
          hint: 'Speed = acceleration × time.', solution: ['Speed = ' + a + ' × ' + t + ' = ' + a * t + ' m/s.'] };
      } },
      { id: 'trapezium', level: 'standard', make: function (r) {
        var v = r.int(4, 20), t1 = 2 * r.int(2, 8), t2 = r.int(5, 30), t3 = 2 * r.int(2, 8), d = v * (t1 / 2 + t2 + t3 / 2);
        return { prompt: 'A cyclist accelerates uniformly from rest to ' + v + ' m/s in ' + t1 + ' s, travels at ' + v + ' m/s for ' + t2 + ' s and then slows uniformly to rest in ' + t3 + ' s. Find the total distance travelled.', answer: d, unit: 'm',
          hint: 'Split the graph into a triangle, a rectangle and another triangle.', solution: ['Distance = {1|2} × ' + t1 + ' × ' + v + ' + ' + t2 + ' × ' + v + ' + {1|2} × ' + t3 + ' × ' + v + '.', '= ' + v * t1 / 2 + ' + ' + v * t2 + ' + ' + v * t3 / 2 + ' = ' + d + ' m.'] };
      } }
    ]
  });
})();
