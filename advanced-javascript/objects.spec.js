const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  describe('keys', () => {
    it('should return expected', () => {
      const expected = ['a', 'b'];
      const actual = objectFunctions.keys({a: 'a', b: 'b'});
      expect(actual).toEqual(expected);
    });
  })

  describe('values', () => {
    it('should return expected', () => {
      const expected = ['a', 'b'];
      const actual = objectFunctions.values({})
      console.log(actual)
    });
  })
});
