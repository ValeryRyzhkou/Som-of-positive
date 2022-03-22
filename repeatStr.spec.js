const repeatStr = require('./repeatStr');


test
(
  'RepStr',
  () => {
    expect(repeatStr(5,'r')).toBe('rrrrr');
    expect(repeatStr(2,'X')).toBe('XX');
    expect(repeatStr(1,'PLPLPL')).toBe('PLPLPL');
  }
)
