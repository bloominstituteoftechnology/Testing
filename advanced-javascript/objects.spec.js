const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe('function');
    });
  });

  describe('values', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(typeof values).toBe('function');
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(typeof mapObject).toBe('function');
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(typeof pairs).toBe('function');
    });
  });

  describe('invert', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(typeof invert).toBe('function');
    });
  });

  describe('defaults', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(typeof defaults).toBe('function');
    });
  });
});
