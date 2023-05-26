const {
  existPath
} = require('../src/absolute.js');


describe('absolute', () => {
  it('existPath is a function', () => {
    expect(typeof existPath).toBe('function')
  });
});
