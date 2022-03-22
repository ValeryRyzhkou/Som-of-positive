const sumPos = require('./Sum_of_positive')

describe(
  'Filter arr',
  ()=>{
    const testCases = [
      {
        in: [1, -2, -6, 4, 13],
        expected: 18
      },
      {
        in: [6, -8, -19, 3, 2],
        expected: 11
      }
    ];
    testCases.forEach(test => {
      it(
        `in : ${test.in} expected: ${test.expected}`,
        ()=>{
          const res = sumPos(test.in);
          expect(res).toEqual(test.expected)
        }
      );
    });
  }
);
