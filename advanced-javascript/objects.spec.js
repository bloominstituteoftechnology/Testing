const objectFunctions = require("./objects");
const newObject = { a: 1, b: 2, c: 3 };

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  describe("keys", () => {
    it("should be an object", () => {
      const keys = objectFunctions.keys({ a: 1, b: 2, c: 3 });
      expect(typeof keys).toBe("object");
    });

    it("should return an array of the keys of the object.", () => {
      expect(objectFunctions.keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
    });
  });

  describe("values", () => {
    it("should be an object", () => {
      const values = objectFunctions.values({ a: 2 });
      expect(typeof values).toBe("object");
    });

    it("should return an array of the values of the object.", () => {
      expect(objectFunctions.values({ a: 2, b: 3 })).toEqual([2, 3]);
    });
  });

  describe("mapObject", () => {
    it("should be a function", () => {
      const mapObject = objectFunctions.mapObject;
      expect(typeof mapObject).toBe("function");
    });

    it("should add each value by 2", () => {
      expect(
        objectFunctions.mapObject(newObject, function(key) {
          return key + 2;
        })
      ).toEqual({ a: 3, b: 4, c: 5 });
    });
  });

  describe("pairs", () => {
    it("should turn each key value pair into an array", () => {
      expect(objectFunctions.pairs(newObject)).toEqual([["a", 3], ["b", 4], ["c", 5]]);
    });
  });

  describe("invert", () => {
    it("should invert each key value pair", () => {
      expect(objectFunctions.invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
    });
  });
});
