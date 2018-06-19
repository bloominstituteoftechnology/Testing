const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe('function');
    });
    it('should return keys of object', () => {
      const keys = objectFunctions.keys;
      expect(keys({'a': 1, 'b': 2})).toEqual(["a", "b"]);
    });
  });

  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe('function');
    });
    it('should return keys of object', () => {
      const keys = objectFunctions.keys;
      expect(keys({'a': 1, 'b': 2})).toEqual(["a", "b"]);
    });
  });
});
