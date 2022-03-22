const opposite = require('./opposite')

describe(
  'Change',
  ()=>{
    const testCases =[
      {
        in: 6,
        expected: -6
      },
      {
        in: -13,
        expected: 13
      }
    ];
    testCases.forEach(test=>{
      it(
        `in: ${test.in} expected: ${test.expected}`,
        ()=>{
          const res = opposite(test.in);
          expect(res).toBe(test.expected)
        }
      );
    });
  }
);
