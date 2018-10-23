const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
  describe('keys', () => {
    it('should return the keys of an object', () => {
      const getKeys = objectFunctions.keys({ 'a': 1, 'b': 2, 'c': 3});
      expect(getKeys).toEqual(['a', 'b', 'c']);
    });
  });
  describe('values', () => {
    it('should return the values of an object', () => {
      const getValues = objectFunctions.values({ 'a': 1, 'b': 2, 'c': 3});
      expect(getValues).toEqual([1, 2, 3]);
    });
  });
  describe('mapObject', () => {
    it('should map out object based on cb function', () => {
      const mappedObject = objectFunctions.mapObject({ 'a': 1, 'b': 2, 'c': 3}, x => x + 1);
      expect(mappedObject).toEqual({ 'a': 2, 'b': 3, 'c': 4})
    });
  });
  describe('pairs', () => {
    it('should pair key/value in array', () => {
      const pairedObj = objectFunctions.pairs({ 'a': 1, 'b': 2, 'c': 3});
      expect(pairedObj).toEqual([['a', 1], ['b', 2], ['c', 3]])
    });
  });
  describe('invert', () => {
    it('should invert key/value pair in object', () => {
      const inverted = objectFunctions.invert({ 'a': 1, 'b': 2, 'c': 3});
      expect(inverted).toEqual({ 1: 'a', 2: 'b', 3: 'c'})
    });
  });
  describe('defaults', () => {
    it('should map out key/object', () => {
      const defaulted = objectFunctions.defaults({ 'a': 1, 'b': 2, 'c': 3}, 1);
      expect(defaulted).toEqual({ 'a': 1, 'b': 2, 'c': 3})
    });
  });
});
