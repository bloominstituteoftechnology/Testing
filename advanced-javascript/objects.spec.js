const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      expect(typeof keys).toBe('function');
    });
    it('should return an array of keys', () => {
      expect(Array.isArray(keys({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 30,
        favFood: 'pancakes'
      }))).toBe(true);
    });
  });

  describe('values', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(typeof values).toBe('function');
    });
    it('should return an array of values', () => {
      expect(Array.isArray(values({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 30,
        favFood: 'pancakes'
      }))).toBe(true);
    });
  });

  describe('mapObject', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      expect(typeof mapObject).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof mapObject({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 'thirty',
        favFood: 'pancakes'
      }, (item) => {
        return item.toUpperCase();
      })).toBe('object');
    });
  });

  describe('pairs', () => {
    const pairs = objectFunctions.pairs;
    it('should be a function', () => {
      expect(typeof pairs).toBe('function');
    });
    it('should return an array of pairs', () => {
      expect(Array.isArray(pairs({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 30,
        favFood: 'pancakes'
      }))).toBe(true);
    });
  });

  describe('invert', () => {
    const invert = objectFunctions.invert;
    it('should be a function', () => {
      expect(typeof invert).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof invert({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 30,
        favFood: 'pancakes'
      })).toBe('object');
    });
  });

  describe('defaults', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(typeof defaults).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof defaults({
        firstName: 'Grant',
        lastName: 'Reighard',
        age: 30,
        favFood: 'pancakes'
      }, [1, 2, 3, 4])).toBe('object');
    });
  });
});
