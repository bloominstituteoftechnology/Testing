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
});
