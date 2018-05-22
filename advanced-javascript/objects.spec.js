const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('invert', () => {
    const testObj = {
      this: 'is',
      a: 'test',
      object: 'woot'
    };
    const expected = {
      is: 'this',
      test: 'a',
      woot: 'object'
    };
    const result = objectFunctions.invert(testObj);

    it('should return an object', () => {
      expect(typeof result).toBe('object');
      expect(result.length).toBe(undefined);
    });
    it('should invert object key value pairs', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('defaults', () => {
    const testObj = {
      this: 'is',
      a: 'test',
      object: 'woot'
    };
    const defaultProps = {
      unset: 'set',
      values: 'defaults'
    };
    const expected = {
      this: 'is',
      a: 'test',
      object: 'woot',
      unset: 'set',
      values: 'defaults'
    };
    const result = objectFunctions.defaults(testObj, defaultProps);

    it('should return an object', () => {
      expect(typeof result).toBe('object');
      expect(result.length).toBe(undefined);
    });
    it('adds values from default into obj if not set initially', () => {
      expect(result).toEqual(expected);
    });
  });
});
