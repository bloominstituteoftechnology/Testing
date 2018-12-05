const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  
  let obj;

  beforeEach(function() {
    obj = {a:1, b:2, c:3};
  });

  describe('keys', () => {    
    const keys = objectFunctions.keys;
    it('should be an object', () => {
      expect(typeof keys(obj)).toBe("object");
    });

    it('returns the object keys', () => {
      expect(keys(obj)).toEqual(['a', 'b', 'c']);
    });
  });

  describe('values', () => {    
    const values = objectFunctions.values;
    it('should be an object', () => {
      expect(typeof values(obj)).toBe("object");
    });

    it('returns the object values', () => {
      expect(values(obj)).toEqual([1,2,3]);
    });
  });

  describe('mapObject', () => {    
    const mapObject = objectFunctions.mapObject;
    const cb = ((element) => element + 1)
    it('should be an object', () => {
      expect(typeof mapObject(obj, cb)).toBe("object");
    });

    it('returns the object with callback applied', () => {
      expect(mapObject(obj, cb)).toEqual({"a": 2, "b": 3, "c": 4});
    });
  });

  describe('pairs', () => {    
    const pairs = objectFunctions.pairs;
    it('should be an object', () => {
      expect(typeof pairs(obj)).toBe("object");
    });

    it('returns the object pairs in an array', () => {
      expect(pairs(obj)).toEqual([["a", 1], ["b", 2], ["c", 3]]);
    });
  });

  describe('invert', () => {    
    const invert = objectFunctions.invert;
    it('should be an object', () => {
      expect(typeof invert(obj)).toBe("object");
    });

    it('returns the object invert', () => {
      expect(invert(obj)).toEqual({"1": "a", "2": "b", "3": "c"});
    });
  });

  describe('defaults', () => {    
    const defaults = objectFunctions.defaults;
    let obj = {};
    const defaultProps = {a:1, b:2, c:3};
    it('should be an object', () => {
      expect(typeof defaults(obj, defaultProps)).toBe("object");
    });

    it('returns the object defaults', () => {
      obj = {}
      expect(defaults(obj, defaultProps)).toEqual({"a": 1, "b": 2, "c": 3});
    });
  });

});