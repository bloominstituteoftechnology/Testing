const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const returnValue = objectFunctions.keys(obj);

      expect(returnValue).toEqual(['this', 'that']);
    });
  });

  describe('values', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const returnValue = objectFunctions.values(obj);

      expect(returnValue).toEqual([1, 2]);
    });
  });

  describe('mapObject', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const returnValue = objectFunctions.mapObject(obj, x => x * 2);

      expect(returnValue).toEqual({ this: 2, that: 4 });
    });
  });

  describe('pairs', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const returnValue = objectFunctions.pairs(obj);

      expect(returnValue).toEqual([['this', 1], ['that', 2]]);
    });
  });

  describe('invert', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const returnValue = objectFunctions.invert(obj);

      expect(returnValue).toEqual({ 1: 'this', 2: 'that' });
    });
  });

  describe('defaults', () => {
    it('should work', () => {
      const obj = { this: 1, that: 2 };
      const defaultObject = { doh: 3 };
      const returnValue = objectFunctions.defaults(obj, defaultObject);

      expect(returnValue).toEqual({ this: 1, that: 2 , doh: 3});
    });
  });
});
