const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('objects assignment', () => {
  describe('keys', () => {
    it('should be an object', () => {
    expect(typeof objectFunctions.keys({})).toBe('object');
    });
  });
  describe('values', () => {
    it('should be an object', () => {
    expect(typeof objectFunctions.values({})).toBe('object');
    });
  });
})
