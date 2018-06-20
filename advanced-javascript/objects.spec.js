const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  const arg = Array.from(arguments)
  it('should be an object', () => {
    expect(typeof arg).toEqual('object')
  });
  describe('keys', () => {
    const keys = objectFunctions.keys
    it('should return the keys of an object', () => {
      const key1 = keys({one: 'two', two: 'three', four: 'four'})
      expect(key1).toEqual(['one', 'two', 'four'])
  })

  })
 


});

