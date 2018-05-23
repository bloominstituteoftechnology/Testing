const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    const obj = { one: 1, two: 2 };
    const exp = objectFunctions.keys(obj);
    it('should return array of keys', () => {
      expect(exp).toEqual(['one', 'two']);
    });
  });

  describe('values', () => {
    const obj = { one: 1, two: 2 };
    const exp = objectFunctions.values(obj);
    it('should return array of values', () => {
      expect(exp).toEqual([1, 2]);
    });
  });

  describe('mapObject', () => {
    const obj = { one: 1, two: 2 };
    const exp = objectFunctions.mapObject(obj, x => x * 2);
    it('should map object and return modified on cb', () => {
      expect(exp).toEqual({ one: 2, two: 4 });
    });
  });

  describe('pairs', () => {
    const obj = { one: 1, two: 2 };
    const exp = objectFunctions.pairs(obj);
    it('should return value pairs', () => {
      expect(exp).toEqual([['one', 1], ['two', 2]]);
    });
  });

  describe('invert', () => {
    const obj = { one: 1, two: 2 };
    const exp = objectFunctions.invert(obj);
    it('should invert keys to values and values to keys', () => {
      expect(exp).toEqual({ 1: 'one', 2: 'two' });
    });
  });

  describe('defaults', () => {
    const obj = { one: 1, two: 2 };
    const newObj = { three: 3 };
    const exp = objectFunctions.defaults(obj, newObj);
    it('should set default values in object', () => {
      expect(exp).toEqual({ one: 1, two: 2 , three: 3});
    });
  });
  
});
