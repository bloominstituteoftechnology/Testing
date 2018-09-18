const of = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('returns all the enumerable keys in the object', () => {
      const obj = { a: 1, b: 2 };
      const keys = of.keys(obj);

      expect(keys.constructor).toBe(Array);
      expect(keys).toEqual(['a', 'b']);
    });
  });

  describe('values', () => {
    it('returns all values in an array', () => {
      const obj = { a: 1, b: 2 };
      const values = of.values(obj);
      expect(values.constructor).toBe(Array);
      expect(values).toEqual([1, 2]);
    });
  });

  describe('mapObject', () => {
    it('maps values using the callback', () => {
      const obj = { a: 1, b: 2 };
      const cb = v => v * 2;
      const mapped = of.mapObject(obj, cb);
      expect(mapped).toEqual({ a: 2, b: 4 });
    });

    it('does not mutate original object', () => {
      const obj = { a: 1, b: 2 };
      const cb = v => v * 2;
      const mapped = of.mapObject(obj, cb);
      expect(obj).not.toBe(mapped);
    });
  });

  describe('pairs', () => {
    it('returns an array of entries', () => {
      const obj = { a: 1, b: 2 };
      const entries = of.pairs(obj);
      expect(entries).toEqual([['a', 1], ['b', 2]]);
    });
  });

  describe('invert', () => {
    it('inverts keys and values', () => {
      const obj = { a: 1, b: 2 };
      of.invert(obj);
      expect(obj).toEqual({ 1: 'a', 2: 'b' });
    });
  });

  describe('defaults', () => {
    it("sets values if it isn't set already", () => {
      const obj = { a: 1 };
      of.defaults(obj, { b: 2, a: 3 });
      expect(obj).toEqual({ a: 1, b: 2 });
    });
  });
});
