const objectFunctions = require('./objects');

describe('objects', () => {
  it('should be an object', () => {})
  
  describe('keys', () => {
    it('should return an array of all keys within the given object', () => {
      expect(objectFunctions.keys({ 1: 'a', 2: 'b', 3: 'c' })).toEqual(['1', '2', '3'])
    })
  });

  describe('values', () => {
    it('should return all values of keys in the given object', () => {
      expect(objectFunctions.values({ 1: 'a', 2: 'b', 3: 'c' })).toEqual(['a', 'b', 'c'])
      expect(objectFunctions.values({ 1: 'a', 2: {x: 'y'}, 3: 'c' })).toEqual(['a', {x: 'y'}, 'c'])
    })
  })

  describe('mapObject', () => {
    it('should return a new object with each value doubled of the initial object', () => {
      expect(objectFunctions.mapObject({a: 1, b: 2, c: 3}, value => value * 2)).toEqual({a: 2, b: 4, c: 6})
      expect(objectFunctions.mapObject({undefined: undefined}, value => value * 2)).toEqual({'undefined': NaN})
    })
  })

  describe('pairs', () => {
    it('should return each key value pair as an array', () => {
      expect(objectFunctions.pairs({a: 'b', c: 'd', e: 'f'})).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']])
    })
  })

  describe('invert', () => {
    it('should return an object where the key of the given object is now the value and vice versa', () => {
      expect(objectFunctions.invert({a: 1, b: 2, c: 3})).toEqual({1: 'a', 2: 'b', 3: 'c'})
    })
  })

  describe('defaults', () => {
    it('should add key/value pairs from the defaults to the original if it doesnt already exist', () => {
      expect(objectFunctions.defaults({b: 2, c: 3}, {a: 10, b: 2, c: 3})).toEqual({a: 10, b: 2, c: 3})
      expect(objectFunctions.defaults({a: 1, b: 2, c: 3}, {a: 10, b: 2, c: 3})).toEqual({a: 1, b: 2, c: 3})
    })
  })
});
