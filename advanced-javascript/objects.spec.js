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

  describe('values', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(typeof values).toBe('function');
    });
    it('should return values of object', () => {
      const values = objectFunctions.values;
      expect(values({'a': 1, 'b': 2})).toEqual([1, 2]);
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(typeof mapObject).toBe('function');
    });
    it('should return values of object', () => {
      const values = objectFunctions.values;
      expect(values({'a': 1, 'b': 2})).toEqual([1, 2]);
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(typeof pairs).toBe('function');
    });
    it('should return key value pairs of object', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs({'a': 1, 'b': 2})).toEqual([["a", 1], ["b", 2]]);
    });
  }); 
  
  describe('invert', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(typeof invert).toBe('function');
    });
    it('should invert keys and values', () => {
      const invert = objectFunctions.invert;
      expect(invert({'a': 1, 'b': 2})).toEqual({"1": "a", "2": "b"});
    });
  });
  
  describe('default', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(typeof defaults).toBe('function');
    });
  });

});
