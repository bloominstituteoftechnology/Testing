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

  describe('mapObject', () => {
    it('should be an function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(typeof mapObject).toBe('function');
    });

    it('should return a map object based on the callback', () => {
      const expected = { a: 2, b: 8, c: 16};
      const mapObject = objectFunctions.mapObject;
      const actual = mapObject({ a: 1, b: 4, c: 8 }, value => value * 2);
      expect(typeof actual).toBe('object');
      expect(actual).toEqual(expected);
    });
  });

  describe('pairs', () => {
    it('should be an function', () => {
      const pairs = objectFunctions.pairs;
      expect(typeof pairs).toBe('function');
    });

    it('should return an array of key-value pairs', () => {
      const expected = [['a', 1], ['b', 4], ['c', 8]];
      const pairs = objectFunctions.pairs;
      const actual = pairs({ a: 1, b: 4, c: 8 });
      expect(Array.isArray(actual)).toBeTruthy();
      expect(actual.length).toEqual(3);
      expect(actual).toEqual(expected);
    });
  });

  describe('invert', () => {
    it('should be an function', () => {
      const invert = objectFunctions.invert;
      expect(typeof invert).toBe('function');
    });

    it('should return an object with its keys and values inverted', () => {
      const expected = {1: 'a', 4: 'b', 8: 'c'};
      const invert = objectFunctions.invert;
      const actual = invert({ a: 1, b: 4, c: 8 });
      expect(typeof actual).toBe('object');
      expect(actual).toEqual(expected);
    });
  });
})
