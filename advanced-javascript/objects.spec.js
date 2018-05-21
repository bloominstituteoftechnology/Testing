const objectFunctions = require('./objects');

describe('Objects', () => {
  describe('keys', () => {
    it('should return an array of object keys', () => {
      const keys = objectFunctions.keys;
      const s1 = keys({ a: 1, b: 2, c: 3 });
      const s2 = keys([1, 2, 3]);
      const s3 = keys({ alpha: 1 });
      expect(s1).toEqual(['a', 'b', 'c']);
      expect(s2).toEqual(['0', '1', '2']);
      expect(s3).toEqual(['alpha']);
    })
  })

  describe('values', () => {
    it('should return an array of object values', () => {
      const values = objectFunctions.values;
      const s1 = values({ a: 1, b: 2, c: 3 });
      const s2 = values(['alpha']);
      const s3 = values('string');
      expect(s1).toEqual([1,2,3]);
      expect(s2).toEqual(['alpha']);
      expect(s3).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
    })
  })

  describe('mapObject', () => {
    it('should map over each key in an object and manipulate its value with a callback', () => {
      const mapObject = objectFunctions.mapObject;
      const s1 = mapObject({ a: 1, b: 2, c: 3 }, val => val * 2);
      const s2 = mapObject({ a: 'bill', b: 'bob' }, val => val.length);
      expect(s1).toEqual({ a: 2, b: 4, c: 6 });
      expect(s2).toEqual({ a: 4, b: 3 });
    })
  })

  describe('pairs', () => {
    it('should return an array of key-value pair arrays', () => {
      const pairs = objectFunctions.pairs;
      const s1 = pairs({ a: 1, b: 2, c: 3 });
      const s2 = pairs({ 'justin': 'mcginnis', 'jeffrey': 'flynn' });
      expect(s1).toEqual([['a', 1], ['b', 2], ['c', 3]]);
      expect(s2).toEqual([['justin', 'mcginnis'], ['jeffrey', 'flynn']]);
    })
  })

  describe('invert', () => {
    it('should replace each key with its corresponding value and vise-versa', () => {
      const invert = objectFunctions.invert;
      const s1 = invert({ a: 1, b: 2, c: 3 });
      const s2 = invert({ key: 'value', key2: 'value2', key3: 'value3' });
      expect(s1).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
      expect(s2).toEqual({ 'value': 'key', 'value2': 'key2', 'value3': 'key3' });
    })
  })

  describe('defaults', () => {
    it('should set default values', () => {
      const defaults = objectFunctions.defaults;
      const s1 = defaults({ a: 1, b: 3 }, { c: 'boy' });
      const s2 = defaults({ b: 'bbb', c: 'ccc' }, { a: 'aaa' })
      expect(s1).toEqual({ a:1, b:3, c:'boy' });
      expect(s2).toEqual({ a: 'aaa', b: 'bbb', c: 'ccc' });
    })
  })
})