(function () {
  var rad = Math.PI / 180;

  EMATH.registerTopic({
    id: 'bearings', title: 'Bearings',
    strand: 'geometry', levels: [3, 4],
    syllabusNote: 'O-Level syllabus G4.7 (Sec 3/4).',
    verified: true,
    objectives: [
      'Give and read three-figure bearings.',
      'Find back bearings.',
      'Find bearings and distances using Pythagoras, trigonometry and the sine and cosine rules.',
      'Solve problems about the journeys of ships and aircraft.'
    ],
    explanation: [
      'A **bearing** is an angle measured from **north**, **clockwise**, and written with three figures: north is 000°, east is 090°, south is 180° and west is 270°. "The bearing of B from A" means stand at A, face north and turn clockwise until you face B.',
      { term: 'Back bearings', def: 'The bearing of A from B differs from the bearing of B from A by 180°. If the bearing of B from A is less than 180°, add 180°; if it is 180° or more, subtract 180°.' },
      { term: 'Sketching', def: 'Draw a north line at **every** point where a bearing is given. Parallel north lines make alternate and co-interior angles, which let you find angles inside the triangle.' },
      { term: 'Components', def: 'A distance d on a bearing θ (between 0° and 90°) is d cos θ north and d sin θ east. In general, east = d sin θ, north = d cos θ.' },
      { term: 'Using triangle rules', def: 'If the triangle has a right angle, use Pythagoras and SOH CAH TOA. Otherwise use the sine or cosine rule.' },
      { term: 'Final bearing', def: 'After finding the angle inside the triangle, add or subtract it from a known bearing, and check that the answer is between 000° and 360°.' }
    ],
    examples: [
      { title: 'Back bearing', question: 'The bearing of B from A is 065°. Find the bearing of A from B.',
        steps: ['065° is less than 180°, so add 180°.', '065° + 180° = 245°.'], answer: '245°' },
      { title: 'East and north components', question: 'A ship sails 15 km on a bearing of 040°. How far north and how far east of its start is it?',
        steps: ['North = 15 cos 40° = 11.49 km.', 'East = 15 sin 40° = 9.64 km.'], answer: '11.49 km north, 9.64 km east' },
      { title: 'A journey with a right angle', question: 'A ship sails 8 km due east and then 6 km due north. Find its distance and bearing from the start.',
        steps: ['Distance = sqrt(8^2 + 6^2) = 10 km.', 'The angle from north is tan⁻¹({8|6}) = 53.1°.', 'Bearing = 053.1°.'], answer: '10 km, 053.1°' }
    ],
    mistakes: [
      'Measuring the bearing from the wrong point. "The bearing of B from A" is measured at A.',
      'Measuring anticlockwise, or from east.',
      'Adding 180° to a bearing that is already above 180° and writing a number above 360°.',
      'Using a north line at only one of the points.',
      'Writing a bearing with fewer than three figures (for example 65° instead of 065°).'
    ],
    formulae: [
      { name: 'Back bearing', text: 'bearing ± 180°' },
      { name: 'Components', text: 'east = d sin θ,  north = d cos θ' }
    ],
    summary: [
      'Bearings are measured clockwise from north and written with three figures.',
      'Back bearing: add or subtract 180°.',
      'Draw a north line at every point; use parallel lines to find angles.',
      'Use Pythagoras and trigonometry (or the sine and cosine rules) to find distances.'
    ],
    viz: null,
    questions: [
      { id: 'be2', level: 'foundation', prompt: 'Write down the bearing of south-west (as a number of degrees).', answer: 225, unit: '°', solution: ['South is 180° and west is 270°, so south-west is 225°.'] },
      { id: 'be3', level: 'foundation', prompt: 'The bearing of B from A is 065°. Find the bearing of A from B.', answer: 245, unit: '°', solution: ['065° + 180° = 245°.'] },
      { id: 'be5', level: 'foundation', type: 'mcq', prompt: 'Bearings are measured from', options: ['north, clockwise', 'east, anticlockwise', 'north, anticlockwise', 'south, clockwise'], answer: 0, solution: ['A bearing is the clockwise angle from north.'] },
      { id: 'be7', level: 'standard', prompt: 'A ship sails 8 km due east and then 6 km due north.',
        parts: [{ label: '(a)', prompt: 'Find its distance from the start.', answer: 10, unit: 'km', marks: 2 }, { label: '(b)', prompt: 'Find the bearing of the ship from the start, correct to 1 decimal place.', answer: Math.atan(8 / 6) / rad, dp: 1, unit: '°', marks: 3 }],
        solution: ['Distance = sqrt(8^2 + 6^2) = 10 km.', 'tan θ = {8|6} (east over north), so θ = 53.1°.', 'The bearing is 053.1°.'] },
      { id: 'be8', level: 'standard', prompt: 'B is 10 km from A on a bearing of 120°.',
        parts: [{ label: '(a)', prompt: 'How far east of A is B, correct to 2 decimal places?', answer: 10 * Math.sin(120 * rad), dp: 2, unit: 'km', marks: 2 }, { label: '(b)', prompt: 'How far south of A is B?', answer: 5, unit: 'km', marks: 2 }],
        hint: 'A bearing of 120° is 60° east of due south (180° - 120° = 60°).', solution: ['East = 10 sin 120° = 10 sin 60° = 8.66 km.', 'South = 10 cos 60° = 5 km.'] },
      { id: 'be9', level: 'standard', prompt: 'Q is 15 km from P on a bearing of 040°.',
        parts: [{ label: '(a)', prompt: 'How far north of P is Q, correct to 2 decimal places?', answer: 15 * Math.cos(40 * rad), dp: 2, unit: 'km', marks: 2 }, { label: '(b)', prompt: 'How far east of P is Q, correct to 2 decimal places?', answer: 15 * Math.sin(40 * rad), dp: 2, unit: 'km', marks: 2 }],
        solution: ['North = 15 cos 40° = 11.49 km.', 'East = 15 sin 40° = 9.64 km.'] },
      { id: 'be12', level: 'standard', prompt: 'B is 20 km from A on a bearing of 050°. C is 15 km from B on a bearing of 140°.',
        parts: [{ label: '(a)', prompt: 'Show that angle ABC = 90° and find the distance AC.', answer: 25, unit: 'km', marks: 3 }, { label: '(b)', prompt: 'Find the bearing of C from A, correct to 1 decimal place.', answer: 50 + Math.atan(15 / 20) / rad, dp: 1, unit: '°', marks: 3 }],
        hint: 'The bearing of A from B is 230°.', solution: ['Bearing of A from B = 230°, bearing of C from B = 140°, so angle ABC = 90°.', 'AC^2 = 20^2 + 15^2 = 625, so AC = 25 km.', 'Angle BAC = tan⁻¹({15|20}) = 36.9°.', 'Bearing of C from A = 050° + 36.9° = 086.9°.'] },
      { id: 'be14', level: 'standard', marks: 3, prompt: 'From a lighthouse A, ship B is 10 km away on a bearing of 060° and ship C is 14 km away on a bearing of 150°. Find the distance BC, correct to 1 decimal place.', answer: Math.sqrt(296), dp: 1, unit: 'km',
        hint: 'The angle BAC is 150° - 60° = 90°.', solution: ['Angle BAC = 150° - 060° = 90°.', 'BC^2 = 10^2 + 14^2 = 296.', 'BC = 17.2 km.'] },
      { id: 'be15', level: 'challenge', marks: 4, prompt: 'Ship A is 20 km from port P on a bearing of 030°. Ship B is 30 km from P on a bearing of 150°. Find the distance AB, correct to 1 decimal place.', answer: Math.sqrt(1900), dp: 1, unit: 'km',
        hint: 'Angle APB = 150° - 030° = 120°. Use the cosine rule.', solution: ['Angle APB = 120°.', 'AB^2 = 20^2 + 30^2 - 2(20)(30)cos 120° = 400 + 900 + 600 = 1 900.', 'AB = 43.6 km.'] },
      { id: 'be16', level: 'challenge', marks: 2, prompt: 'The bearing of B from A is 305°. Find the bearing of A from B.', answer: 125, unit: '°', solution: ['305° is more than 180°, so subtract 180°: 305° - 180° = 125°.'] }
    ],
    generators: [
      { id: 'back-bearing', level: 'foundation', make: function (r) {
        var b = r.int(10, 350);
        while (b === 180) b = r.int(10, 350);
        var back = b < 180 ? b + 180 : b - 180;
        return { prompt: 'The bearing of B from A is ' + (b < 100 ? '0' : '') + b + '°. Find the bearing of A from B.', answer: back, unit: '°',
          hint: b < 180 ? 'The bearing is less than 180°, so add 180°.' : 'The bearing is more than 180°, so subtract 180°.',
          solution: [b + '° ' + (b < 180 ? '+' : '-') + ' 180° = ' + back + '°.'] };
      } },
      { id: 'east-component', level: 'standard', make: function (r) {
        var d = r.int(8, 40), t = r.int(20, 70), v = d * Math.sin(t * rad);
        return { prompt: 'A ship sails ' + d + ' km on a bearing of 0' + t + '°. How far east has it travelled, correct to 2 decimal places?', answer: v, dp: 2, unit: 'km',
          hint: 'East = distance × sin(bearing).', solution: ['East = ' + d + ' × sin ' + t + '° = ' + v.toFixed(2) + ' km.'] };
      } }
    ]
  });
})();
