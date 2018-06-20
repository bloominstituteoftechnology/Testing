const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should return the keys', () => {
      const keys = objectFunctions.keys;
      const actual = keys({ a: 'b', c: 'd', e: 'f', g: 'h' });
      const expected = ['a', 'c', 'e', 'g']
      expect(actual).toEqual(expected);
    })
  });

  describe('values', () => {
    it('should return the values', () => {
      const values = objectFunctions.values;
      const actual = values({ a: 'b', c: 'd', e: 'f', g: 'h' });
      const expected = ['b', 'd', 'f', 'h']
      expect(actual).toEqual(expected);
    })
  });

  describe('mapObject', () => {
    it('should return each value multiplied by 2', () => {
      const cb = item => item * 2;
      const obj = { a: 1, c: 2, e: 3, g: 4 };
      const mapObject = objectFunctions.mapObject;
      const actual = mapObject(obj, cb);
      const expected = { a: 2, c: 4, e: 6, g: 8 }
      expect(actual).toEqual(expected);
      expect(typeof actual).toBe('object');
    })
  });

  describe('pairs', () => {
    it('should return sub-arrays of each key-value pairs', () => {
     
      const obj = { a: 1, c: 2, e: 3, g: 4 };
      const pairs = objectFunctions.pairs; 
      const actual = pairs(obj);    
      const expected = [[ 'a', 1], ['c', 2], ['e', 3], ['g', 4] ]
      expect(actual).toEqual(expected);
      expect(typeof actual).toBe('object');      
    })
  });

  describe('invert', () => {
    it('should return an object with inverted key-value pairs', () => {
     
      const obj = { a: 1, b: 2, c: 3, d: 4 };
      const invert = objectFunctions.invert; 
      const actual = invert(obj);    
      const expected = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
      expect(actual).toEqual(expected);
      expect(typeof actual).toBe('object');      
    })
  });

  describe('defaults', () => {
    const obj = {'a': 1,'b': 2,'c': 3 }
    const defaultProps = {'a': 3,'b': 4,'c': 5, 'd': 6, 'e': 7 }
    const defaults = objectFunctions.defaults;
    const actual = defaults(obj, defaultProps);
    const expected = {'a': 1,'b': 2,'c': 3,'d': 6,'e': 7 }
    it('should return an object without duplicate keys', () => {
      expect(actual).toEqual(expected);
    })
    it('should return an object', () => {
      expect(typeof actual).toBe('object');
    })
  })

});
