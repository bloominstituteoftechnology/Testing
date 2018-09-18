const objFuncs = require('./objects');

describe('objects', () => {
  describe('object functions', () => {
    it('should be a function', () => {
      for (let func in objFuncs) {
        expect(typeof objFuncs[func]).toBe('function');
      }
    });
  });

  describe('keys', () => {
    it('should return the keys of an object', () => {
      expect(objFuncs.keys({ a: 1, b: 2, c: 3 }))
        .toEqual([ 'a', 'b', 'c' ]);
    });
  });

  describe('values', () => {
    it('should return the values of an object\'s keys', () => {
      expect(objFuncs.values({ a: 1, b: 2, c: 3 }))
        .toEqual([ 1, 2, 3 ]);
    });
  });

  describe('mapObject', () => {
    it('should return the mapped object', () => {
      expect(objFuncs
        .mapObject({ a: 1, b: 2, c: 3 }, (i) => {
          return i + 1;
        }))
        .toEqual({ a: 2, b: 3, c: 4 });
    });
  });

  describe('pairs', () => {
    it('should return the key-value pairs of an object', () => {
      expect(objFuncs.pairs({ a: 1, b: 2, c: 3 }))
        .toEqual([ ['a', 1], ['b', 2], ['c', 3] ]);
    });
  });

  describe('invert', () => {
    it('should invert the keys and values of an object', () => {
      expect(objFuncs.invert({ a: 1, b: 2, c: 3 }))
        .toEqual({ '1': 'a', '2': 'b', '3': 'c' });
    });
  });

  describe('defaults', () => {
    it('should return object with the given defaults', () => {
      expect(objFuncs.defaults({ a: 1, b: 2, c: 3 }, { c: 22, d: 5 }))
        .toEqual({ a: 1, b: 2, c: 3, d: 5 });
    });
  });
});
