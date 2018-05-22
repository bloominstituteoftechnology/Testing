const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be an function', () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe('function');
    });

    it('should return an array of the object keys', () => {
      const expected = ['a', 'b', 'c']
      const keys = objectFunctions.keys;
      const actual = keys({'a': 1, 'b': 4, 'c': 8})
      expect(Array.isArray(actual)).toBeTruthy();
      expect(actual.length).toEqual(3);
      expect(actual).toEqual(expected);
    });
  });

  describe('values', () => {
    it('should be an function', () => {
      const values = objectFunctions.values;
      expect(typeof values).toBe('function');
    });

    it('should return an array of the object values', () => {
      const expected = [1, 4, 8];
      const values = objectFunctions.values;
      const actual = values({ a: 1, b: 4, c: 8 });
      expect(Array.isArray(actual)).toBeTruthy();
      expect(actual.length).toEqual(3);
      expect(actual).toEqual(expected);
    });
  });
})
