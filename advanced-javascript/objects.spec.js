const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

const {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
} = objectFunctions;

describe('objects', () => {
  describe('keys', () => {
    it('should return an array of all the keys in an object', () => {
      const obj = { a: 1, b: 2, c:3 };
      const expected = ['a', 'b', 'c'];
      expect(keys(obj)).toEqual(expected);
    });
  });

  describe('valus', () => {
    it('should return an array of all the values in an array', () => {
      const obj = { a: 1, b: 2, c:3 };
      const expected = [1, 2, 3];
      expect(values(obj)).toEqual(expected);
    });
  });

  describe('mapObject', () => {
    it('should return an object of key/value pairs', () => {
      const obj = { a: 1, b: 2, c:3 };
      const cb = val => val;
      expect(mapObject(obj, cb)).toEqual(obj);
    });
  });
  
  describe('pairs', () => {
    const obj = { a: 1, b: 2, c:3 };
    const expected = [['a', 1], ['b', 2], ['c', 3]];
    it('should return nested arrays containing the keys and values', () => {
      expect(pairs(obj)).toEqual(expected);
    });
  });

  describe('invert', () => {
    const obj = { a: 1, b: 2, c:3 };
    const expected = { 1: 'a', 2: 'b', 3: 'c' };
    it('should return an object with key/values inverted', () => {
      expect(invert(obj)).toEqual(expected);
    });
  });

  describe('defaults', () => {
    it('something', () => {
      const obj = { a: 1, b: 2, c:3 };
      const defaultProps = { x: 24, y: 25, z: 26 };
      const expected = { ...obj, ...defaultProps }
      expect(defaults(obj, defaultProps)).toEqual(expected);
    });
  });
});
