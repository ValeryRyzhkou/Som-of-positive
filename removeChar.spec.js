const removeChar = require('./removeChar')

describe(
  'Reverse',
  ()=>{
    const testCases = [
      {
        in: 'Hello',
        expected: 'ell'
      },
      {
        in: 'Privet',
        expected: 'rive'
      }
    ];
    testCases.forEach(test=>{
      it(
        `in: ${test.in} expected: ${test.expected}`,
        ()=>{
          const res = removeChar(test.in);
          expect(res).toBe(test.expected)
        }
      );
    });
  }
);



