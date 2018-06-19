const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

let obj1 = { 1: 1, 2: 2, 3: 3 };

describe("objects", () => {
  describe("keys", () => {
    it("returns an array of the object keys", () => {
      expect(objectFunctions.keys(obj1)).toEqual(["1", "2", "3"]);
    });
    it("keys is a function", () => {
      expect(typeof objectFunctions.keys).toBe("function");
    });
    it("it returns an empty array when passed something other than an object", () => {
      expect(objectFunctions.keys([] || {} || "")).toEqual([]);
    });
  });
  describe("values", () => {
    it("returns an array of the object values", () => {
      expect(objectFunctions.values(obj1)).toEqual([1, 2, 3]);
    });
    it("values is a function", () => {
      expect(typeof objectFunctions.values).toBe("function");
    });
    it("it returns an empty array when passed something other than an object", () => {
      expect(objectFunctions.values([] || {} || "")).toEqual([]);
    });
  });
  describe("mapObject", () => {
    it("mapObject is a function", () => {
      expect(typeof objectFunctions.mapObject).toBe("function");
    });
    it("applies a cb to each property on an object and returns it", () => {
      objCB = item => ++item;
      let obj2 = { 1: 2, 2: 3, 3: 4 };
      expect(objectFunctions.mapObject(obj1, objCB)).toEqual(obj2);
    });
  });
  describe("pairs", () => {
    it("converts object into an array of arrays of the object properties", () => {
      expect(objectFunctions.pairs({ 1: "a", 2: "b" })).toEqual([
        ["1", "a"],
        ["2", "b"]
      ]);
    });
  });
  describe("invert", () => {
    it("inverts the key:value pairs of an object", () => {
      expect(objectFunctions.invert({ a: 1, b: 2 })).toEqual({
        "1": "a",
        "2": "b"
      });
    });
  });
  describe("defaults", () => {
    it("adds default properties to obj if it does not have those properties", () => {
      expect(
        objectFunctions.defaults({ a: 1, b: 2, c: 3 }, { d: 4, e: 5 })
      ).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
    it("does not modify obj if it already has existing properties", () => {
      expect(
        objectFunctions.defaults({ a: 1, b: 2 }, { a: 10, b: 10 })
      ).toEqual({ a: 1, b: 2 });
    });
  });
});
