const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should return an array of keys from obj', () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe('function');
      expect(keys({ name: 'Alex', age: '24', hair: 'brown' })).toEqual(['name', 'age', 'hair'])
      expect(keys({ 0: '1', 1: '2', 2: '3' })).toEqual(['0', '1','2'])
    })
  })
  describe('values', () => {
    it('returns an array of values from obj', () => {
      const values = objectFunctions.values;
      expect(typeof values).toBe('function')
      expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
      expect(values({ name: 'Alex', age: '24', hair: 'brown' })).toEqual(['Alex', '24', 'brown'])
    })
  })
  describe('mapObject', () => {
    it('changes the value of each key based on cb', () => {
      const mapObject = objectFunctions.mapObject;
      expect(typeof mapObject).toBe('function');
      expect(mapObject({ a: 1, b: 2, c: 3 }, value => value * 3)).toEqual({ a: 3, b: 6, c: 9 });
      expect(mapObject({ name: 'Alex', age: '24', hair: 'brown' }, value => value.length)).toEqual({ name: 4, age: 2, hair: 5 })
    })
  })
  describe('pairs', () => {
    it('returns an array of arrays with key value pairs', () => {
      const pairs = objectFunctions.pairs;
      expect(typeof pairs).toBe('function');
      expect(pairs({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
      expect(pairs({ name: 'Alex', age: '24', hair: 'brown' })).toEqual([['name', 'Alex'], ['age', '24'], ['hair', 'brown']]);
    })
  })
  describe('invert', () => {
    it('inverts the key and values of obj', () => {
      const invert = objectFunctions.invert;
      expect(typeof invert).toBe('function');
      expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
      expect(invert({ name: 'Alex', age: '24', hair: 'brown' })).toEqual({ Alex: 'name', 24: 'age', brown: 'hair'})
    })
  })
  describe('defaults', () => {
    it('combines objects', () => {
      const defaults = objectFunctions.defaults;
      expect(typeof defaults).toBe('function');
      expect(defaults({ a: 18, b: 36}, {c: 58 })).toEqual({ a: 18, b: 36, c: 58 })
      expect(defaults({ marco: 'polo', joseph: 'cook' }, { ferdinand: "magellan" })).toEqual({ marco: 'polo', joseph: 'cook', ferdinand: "magellan" })
    })
  })
});
