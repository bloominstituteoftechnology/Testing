const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  describe('keys', () => {
    it("should return keys ", () => {
      const keys = objectFunctions.keys
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }
      const actual = keys(obj)

      expect(actual).toEqual(['jeff', 'hilal'])

    });
  });

  describe('values', () => {
    it("should return values", () => {
      const values = objectFunctions.values
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }
      const actual = values(obj)

      expect(actual).toEqual(['jersey', 'nyc'])

    });
  });

  describe('mapObject', () => {
    it("should return values", () => {
      const mapObject = objectFunctions.mapObject
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }
      const cb = (x) => {
        return x + "!";
      }
      const actual = mapObject(obj, cb)

      expect(actual).toEqual({ jeff: 'jersey!', hilal: 'nyc!' })

    });
  });

  describe('pairs', () => {
    it("should return pairs", () => {
      const pairs = objectFunctions.pairs
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }

      const actual = pairs(obj)

      expect(actual).toEqual([['jeff', 'jersey'], ['hilal', 'nyc']])

    });
  });

  describe('invert', () => {
    it("should return invert", () => {
      const invert = objectFunctions.invert
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }

      const actual = invert(obj)

      expect(actual).toEqual({ jersey: 'jeff', nyc: 'hilal' })

    });
  });

  describe('defaults', () => {
    it("should return default", () => {
      const defaults = objectFunctions.defaults
      const obj = {
        jeff: 'jersey',
        hilal: 'nyc'
      }
      const obj2 = {
        alg: 'lambda'
      }
      const actual = defaults(obj, obj2)
      expect(actual).toEqual({ jeff: 'jersey', hilal: 'nyc', alg: 'lambda' })

    });
    it("case empty object", () => {
      const defaults = objectFunctions.defaults
      const obj = {

      }
      const obj2 = {
        alg: 'lambda',
        jeff: 'jersey',
        hilal: 'nyc'
      }
      const actual = defaults(obj, obj2)
      expect(actual).toEqual({ jeff: 'jersey', hilal: 'nyc', alg: 'lambda' })

    });
  });




});
