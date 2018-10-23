const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    const result = objectFunctions.keys({ a: 1, b: 2, c: 3 });
    it('should return keys', () => {
      expect(result).toEqual(['a', 'b', 'c']);
    });
    it('should return an object', () => {
      expect(Array.isArray(result)).toBeTruthy();
    });
  });
  describe('values', () => {
    it('should return values', () => {
      expect(objectFunctions.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });
  });
  describe('mapObject', () => {
    const result = objectFunctions.mapObject(
      { a: 1, b: 2, c: 3 },
      num => num + 1
    );
    it('should return value as return of callback', () => {
      expect(result).toEqual({ a: 2, b: 3, c: 4 });
    });
    it('should return an object', () => {
      expect(typeof result).toBe('object');
    });
  });
  describe('pairs', () => {
    const result = objectFunctions.pairs({ a: 2, b: 3, c: 4 });
    it('should return 2d array with key,value pairs', () => {
      expect(result).toEqual([['a', 2], ['b', 3], ['c', 4]]);
    });
  });
  describe('invert', () => {
    const result = objectFunctions.invert({ a: 2, b: 3, c: 4 });
    it('should return obj with versed key/value pairs', () => {
      expect(result).toEqual({ 2: 'a', 3: 'b', 4: 'c' });
    });
  });
  describe('defaults', () => {
    const result = objectFunctions.defaults(
      { a: 1, b: 2, c: 3 },
      { d: 4, e: 5 }
    );
    it('should return an object with default key/value pairs if none exist', () => {
      expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
  });
});
