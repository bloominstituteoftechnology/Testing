const assert = require("chai").assert;
const funcs = require("../src/objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  describe("`keys`", () => {
    const keys = funcs.keys;
    it("should be a function", () => {
      assert.isFunction(keys, "functions be poppin");
    });
    it("should return the keys of an object", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
      assert(keys(obj), "array");
      assert.includeOrderedMembers(keys(obj), ["keyOne", "keyTwo", "keyThree"]);
    });
  });
  describe("`values`", () => {
    const values = funcs.values;
    it("should be a function", () => {
      assert.isFunction(values, "functions be poppin");
    });
    it("should return the values of an object", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
      assert(values(obj), "array");
      assert.includeOrderedMembers(values(obj), [1, 2, 3]);
    });
  });
  describe("`mapObject`", () => {
    const mapObject = funcs.mapObject;
    it("should be a function", () => {
      assert.isFunction(mapObject, "functions be poppin");
    });
    it("should return a mapped object", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
      const cb = val => val * 2;
      assert.isObject(mapObject(obj, cb));
      assert.deepEqual(mapObject(obj, cb), {
        keyOne: 4,
        keyTwo: 8,
        keyThree: 12
      });
    });
  });

  describe("`pairs`", () => {
    const pairs = funcs.pairs;
    it("should be a function", () => {
      assert.isFunction(pairs, "functions be poppin");
    });
    it("should return an array of arrays", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };

      assert.deepEqual(pairs(obj), [
        ["keyOne", 1],
        ["keyTwo", 2],
        ["keyThree", 3]
      ]);
      assert.isArray(pairs(obj));
    });
  });
  describe("`invert`", () => {
    const invert = funcs.invert;
    it("should be a function", () => {
      assert.isFunction(invert, "functions be poppin");
    });
    it("should invert object's keys and values", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
      assert.deepEqual(invert(obj), {
        1: "keyOne",
        2: "keyTwo",
        3: "keyThree"
      });
      assert.isObject(invert(obj));
    });
  });
  describe("`defaults`", () => {
    const defaults = funcs.defaults;
    it("should be a function", () => {
      assert.isFunction(defaults, "functions be poppin");
    });
    it("should add default properties to an object", () => {
      const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
      const objDef = { bestNum: 9 };
      assert.deepEqual(defaults(obj, objDef), {
        keyOne: 1,
        keyTwo: 2,
        keyThree: 3,
        bestNum: 9
      });
      assert.isObject(defaults(obj, objDef));
    });
  });
});
