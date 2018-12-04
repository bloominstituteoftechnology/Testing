const objectFunctions = require("./objects");
const { keys, values, mapObject, pairs, invert, defaults } = objectFunctions;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objectFunctions library", () => {
  describe("keys", () => {
    it("should return an array of all stringified key names of a passed object or array-like object with key-value pairs", () => {
      expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
    });
    it("when passed an array of items with no key-value pairs, returns an array with the stringified index of each of the passed items as the unspecified name of a key-value pair", () => {
      expect(keys([1, 2, 3])).toEqual(["0", "1", "2"]);
    });

    it("returns an array containing only '0' if passed an object with no keys", () => {
      expect(keys([2])).toEqual(["0"]);
    });

    it("returns undefined if passed an item that is neither an object or an array-like object", () => {
      expect(keys(42)).toBe(undefined);
    });
  });

  describe("values", () => {
    it("when passed an object or array-like object with key-value pairs, returns an array containing the values of each pair", () => {
      expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });

    it("when passed an array-like object with random key ordering, will return the array's values ordered by their keys", () => {
      expect(values({ 100: "a", 2: "b", 10: "c" })).toEqual(["b", "c", "a"]);
    });
  });

  describe("mapObject", () => {
    it("when passed an object and a callback, returns a mutated version of the object with each value in the mutated object being the returned value of the original value passed through the callback", () => {
      expect(mapObject({ a: 1, b: 2, c: 3 }, val => val + 1)).toEqual({
        a: 2,
        b: 3,
        c: 4
      });
    });
    it("returns a mutated version of the passed-in object and not a new object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(mapObject(obj, val => val + 1)).toBe(obj);
    });
  });
  describe("pairs", () => {
    it("converts an object into an array of subarrays containing the object's key-value pairs", () => {
      expect(pairs({ 1: 2, 3: 4, 5: 6 })).toEqual([
        ["1", 2],
        ["3", 4],
        ["5", 6]
      ]);
    });

    it("when passed an array, returns new array containing subarrays of passed array's index as the keys for each item", () => {
      expect(pairs([1, 2, 3])).toEqual([["0", 1], ["1", 2], ["2", 3]]);
    });
  });

  describe("invert", () => {
    it("returns a mutated version of the object in which its keys and values have switched places", () => {
      expect(invert({ a: 1, b: 2, c: 3 })).toEqual({
        "1": "a",
        "2": "b",
        "3": "c"
      });
    });

    it("when one or more of the passed object's values are not unique, will return an object in which only the last non-unique value has been mutated into a new key", () => {
      expect(invert({ a: 1, b: 2, c: 2 })).toEqual({ "1": "a", "2": "c" });
    });
  });

  describe("defaults", () => {
    it("when passed an object a second object designated as being the default kay-value pair reference, will fill in any of the first object's missing key-value pairs with those specified in the default", () => {
      expect(
        defaults(
          { flavor: "chocolate" },
          { flavor: "vanilla", sprinkles: "yes please" }
        )
      ).toEqual({ flavor: "chocolate", sprinkles: "yes please" });
    });

    it("returns a mutated version of the passed object and not a copy", () => {
      const obj = { flavor: "chocolate" };
      expect(
        defaults(obj, { flavor: "vanilla", sprinkles: "yes please" })
      ).toBe(obj);
    });
  });
});
