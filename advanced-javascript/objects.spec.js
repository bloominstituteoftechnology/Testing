const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {

  describe('keys', () => {
    it('should get keys', () => {
      const keys = objectFunctions.keys;

      const actual = keys({a:1, b:2, c:3})
      expect(actual).toEqual(['a', 'b', 'c']);
    });
  });

  describe('values', () => {
    it('should get values', () => {
      const values = objectFunctions.values;

      const actual = values({a:1, b:2, c:3})
      expect(actual).toEqual([1, 2, 3]);
    });
  });

  describe('mapObject', () => {
    it('should stringify all values', () => {
      const mapObject = objectFunctions.mapObject;
      function stringify(input) {
        return input.toString()
      }
      
      const actual = mapObject({a: 25, b: 20, c: 40}, stringify)
      expect(actual).toEqual({a: "25", b: "20", c: "40"});
    });
  });

  describe('pairs', () => {
    it('shold return key value pairs', () => {
      const pairs = objectFunctions.pairs;
      const actual = pairs({a: 1, b: 2, c: 3})

      expect(actual).toEqual([["a", 1], ["b", 2], ["c", 3]]);
    });
  });

  describe('invert', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      const actual = invert({
        a: 1,
        b: 2,
        c: 3
      })
      expect(actual).toEqual({1: "a", 2: "b", 3: "c"});
    });
  });

  describe('defaults', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(typeof defaults).toBe('function');
    });
  });
});
