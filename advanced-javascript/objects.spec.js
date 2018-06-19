const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe("keys", () => {
    it("should return the keys of the object in an array", () => {
      const keys = objectFunctions.keys;
      const obj = { a: 1, b: 2, c: 3 };
      expect(keys(obj)).toEqual(["a", "b", "c"]);
    });
  });

  describe("values", () => {
    it("should return the values of the object in an array", () => {
      const values = objectFunctions.values;
      const obj = { a: 1, b: 2, c: 3 };
      expect(values(obj)).toEqual([1,2,3]);
    });
  });

  describe("mapObject", () => {
    it("should map over object and modify the pairs depending on callback", () => {
      const mapObject = objectFunctions.mapObject;
      const obj = { a: 1, b: 2, c: 3 };
      expect(mapObject(obj, val => val + 5)).toEqual({ a: 6, b: 7, c: 8 });
      expect(() => mapObject()).toThrow(TypeError);
    });
  });

  describe("pairs", () => {
    it("should return the key value pairs of the object in arrays", () => {
      const pairs = objectFunctions.pairs;
      const obj = { a: 1, b: 2, c: 3 };
      expect(pairs(obj)).toEqual([["a", 1], ["b", 2], ["c", 3]]);
      expect(() => pairs()).toThrow(TypeError);
    });
  });

  describe("invert", () => {
    it("should swap the keys and values in given object", () => {
      const invert = objectFunctions.invert;
      const obj = { a: 1, b: 2, c: 3 };
      expect(invert(obj)).toEqual({ "1": "a", "2": "b", "3": "c" });
      expect(() => invert()).toThrow(TypeError);
    });
  });

  describe("defaults", () => {
    it("should add new pairs to the object", () => {
      const defaults = objectFunctions.defaults;
      const obj = { a: 1, b: 2, c: 3 };
      expect(defaults(obj, { d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
      expect(() => defaults(obj)).toThrow(TypeError);
    });
  });


});
