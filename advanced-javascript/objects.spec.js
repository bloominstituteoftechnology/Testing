const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be an object and return keys', () => {
      const keys = objectFunctions.keys;
      const obj = { a: 1, b: 2, c: 3 };
      const expected = ['a', 'b', 'c'];
      const actual = keys(obj);
      expect(typeof keys).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('values', () => {
    it('should be an object and return values', () => {
      const values = objectFunctions.values;
      const obj = { a: 1, b: 2, c: 3 };
      const expected = [1, 2, 3];
      const actual = values(obj);
      expect(typeof values).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('mapObject', () => {
    it('should be an object and return values', () => {
      const mapObject = objectFunctions.mapObject;
      const obj = { a: 1, b: 2, c: 3 };
      const callback = item => item;
      const expected = { a: 1, b: 2, c: 3 };
      const actual = mapObject(obj, callback);
      expect(typeof mapObject).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('pairs', () => {
    it('should be an object and return pairs', () => {
      const pairs = objectFunctions.pairs;
      const obj = { a: 1, b: 2, c: 3 };
      const expected = [['a', 1], ['b', 2], ['c', 3]];
      const actual = pairs(obj);
      expect(typeof pairs).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('invert', () => {
    it('should be an object and return an inverted object', () => {
      const invert = objectFunctions.invert;
      const obj = { a: 1, b: 2, c: 3 };
      const expected = { '1': 'a', '2': 'b', '3': 'c' };
      const actual = invert(obj);
      expect(typeof invert).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('defaults', () => {
    it('should be an object and return an inverted object', () => {
      const defaults = objectFunctions.defaults;
      const numObj = { a: 5, b: 6, c: 7, d: 8 };
      const defaultProps = { a: 1, b: 2, c: 3, d: 4 };
      const expected = { a: 5, b: 6, c: 7, d: 8 };
      const actual = defaults(numObj, defaultProps);
      expect(typeof defaults).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
});
