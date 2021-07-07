const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should return an array containing the keys(of key/value pairs) on an object', () => {
      const keys = objectFunctions.keys;
      const example = keys({ x: 1, y: 2, z: 3})
      expect(example).toEqual(['x', 'y', 'z']);
    })
  })
  describe('values', () => {
    it('should return an array containing the values(of key/value pairs) on an object', () => {
      const values = objectFunctions.values;
      const example = values({ x: 1, y: 2, z: 3})
      expect(example).toEqual([1, 2, 3]);
    })
  })
  describe('mapObject', () => {
    it('should map the callback\'s value onto the object\'s key values', () => {
      const mapObject = objectFunctions.mapObject;
      const example = mapObject({ x: 1, y: 2, z: 3}, val => val + 1);
      expect(example).toEqual({x: 2, y: 3, z: 4});
    })
  })
  describe('pairs', () => {
    it('should mutate an object into an array containing arrays of the original object\'s key/value pairs', () => {
      const pairs = objectFunctions.pairs;
      const example = pairs({ x: 1, y: 2, z: 3});
      expect(example).toEqual([["x", 1], ["y", 2], ["z", 3]]);
    })
  })
  describe('invert', () => {
    it('should invert the key/value pairs(keys become values, vice versa)', () => {
      const invert = objectFunctions.invert;
      const example = invert({ x: 1, y: 2, z: 3});
      expect(example).toEqual({"1": "x", "2": "y", "3": "z"})
    })
  })
  describe('defaults', () => {
    it('should combine two objects into a single object', () => {
      const defaults = objectFunctions.defaults;
      const example = defaults({ x: 1, y: 2, z: 3}, { name: 'andrew', age: 29, gender: 'male'});
      expect(example).toEqual({ x: 1, y: 2, z: 3, name: 'andrew', age: 29, gender: 'male'})
    })
  })
});
