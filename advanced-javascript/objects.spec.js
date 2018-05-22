const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('keys', () => {
    const keys = objectFunctions.keys;
    const actual = keys({
      a: 1,
      b: 2,
      c: 3
    });
    it('Should return object keys', () => {
      expect(actual).toEqual(['a', 'b', 'c']);
    });
  });

  describe('values', () => {
    const values = objectFunctions.values;
    const actual = values({
      a: 1,
      b: 2,
      c: 3
    });
    it('Should return values of object', () => {
      expect(actual).toEqual([1, 2, 3]);
    })
  });
});