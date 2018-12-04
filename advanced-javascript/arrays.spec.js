const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("each", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.each).toBe("function");
    });
    it("should map through an array", () => {
      arr = [];
      arrayFunctions.each(["one", "two"], item => arr.push(item.toUpperCase()));
      expect(arr).toEqual(["ONE", "TWO"]);
    });
  });
  describe("map", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.map).toBe("function");
    });
    it("should map through an array returning a new array", () => {
      expect(
        arrayFunctions.map(["one", "two"], item => item.toUpperCase())
      ).toEqual(["ONE", "TWO"]);
    });
  });

  describe("reduce", () => {
    it("should be a function and reduce the array", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
    it("should reduce an array to a single value", () => {
      expect(arrayFunctions.reduce([1, 1, 1], (acc, cur) => acc + cur)).toBe(3);
    });
  });
  describe("find", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });
    it("should find the first matching element in the array", () => {
      expect(arrayFunctions.find(["one", "two"], item => item === "one")).toBe(
        "one"
      );
    });
  });
  describe("filter", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });
    it("should filter through an array", () => {
      expect(arrayFunctions.filter([1, 2, 11, 12], item => item > 10)).toEqual([
        11,
        12
      ]);
    });
  });
  describe("flatten", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
    it("should flatten an array", () => {
      expect(arrayFunctions.flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
    });
  });
});
