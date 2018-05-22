const objectFunctions = require("./objects");
const projectFunctions = require("../basic-javascript/project-1");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("Objects", () => {
  describe("keys", () => {
    it("should return an array of keys", () => {
      const keys = objectFunctions.keys;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = [1, 2, 3, 4];
      expect(keys(t)).toEqual(["a", "b", "c"]);
      expect(keys(t2)).toEqual(["0", "1", "2", "3"]);
      expect(() => keys()).toThrow(TypeError);
    });
  });
  describe("values", () => {
    it("should return an array of values", () => {
      const values = objectFunctions.values;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = [1, 2, 3, 4];
      expect(values(t)).toEqual([1, 2, 3]);
      expect(values(t2)).toEqual([1, 2, 3, 4]);
      expect(() => values()).toThrow(TypeError);
    });
  });
  describe("mapObject", () => {
    it("should map over object and return changed value based on callback", () => {
      const mapObject = objectFunctions.mapObject;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = { name: "Luke", greeting: "hola" };
      const fn = projectFunctions.addExclamationPoint;
      expect(mapObject(t, val => val * 2)).toEqual({ a: 2, b: 4, c: 6 });
      expect(mapObject(t2, val => fn(val))).toEqual({
        name: "Luke!",
        greeting: "hola!"
      });
      expect(() => mapObject()).toThrow(TypeError);
    });
  });
  describe("pairs", () => {
    it("should return key value pairs in arrays", () => {
      const pairs = objectFunctions.pairs;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = { name: "Luke", greeting: "hola" };
      expect(pairs(t)).toEqual([["a", 1], ["b", 2], ["c", 3]]);
      expect(pairs(t2)).toEqual([["name", "Luke"], ["greeting", "hola"]]);
      expect(() => pairs()).toThrow(TypeError);
    });
  });
  describe("invert", () => {
    it("should invert keys to values and values to keys", () => {
      const invert = objectFunctions.invert;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = { name: "Luke", greeting: "hola" };
      expect(invert(t)).toEqual({ "1": "a", "2": "b", "3": "c" });
      expect(invert(t2)).toEqual({ Luke: "name", hola: "greeting" });
      expect(() => invert()).toThrow(TypeError);
    });
  });
  describe("defaults", () => {
    it("should set default values in passed object", () => {
      const defaults = objectFunctions.defaults;
      const t = { a: 1, b: 2, c: 3 };
      const t2 = { name: "Luke", greeting: "hola" };
      expect(defaults(t, { d: 5 })).toEqual({ a: 1, b: 2, c: 3, d: 5 });
      expect(defaults(t2, { location: "Poland" })).toEqual({
        name: "Luke",
        greeting: "hola",
        location: "Poland"
      });
      expect(() => defaults(t)).toThrow(TypeError);
    });
  });
});
