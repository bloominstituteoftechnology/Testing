const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('invert', () => {
    const testObj = { this: 'is', a: 'test', object: 'woot' };
    const result = objectFunctions.invert(testObj);
    const expected = { is: 'this', test: 'a', woot: 'object' };

    it('should return an object', () => {
      expect(typeof result).toBe('object');
      expect(result.length).toBe(undefined);
    });
    it('should invert object key value pairs', () => {
      expect(result).toEqual(expected);
    });
  });
});
