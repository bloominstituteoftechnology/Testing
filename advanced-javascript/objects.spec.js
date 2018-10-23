const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {
    const expected = ["a", "b"];
    const actual = objectFunctions.keys({a:2, b:7});
    expect(actual).toEqual(expected); 
  });
});
