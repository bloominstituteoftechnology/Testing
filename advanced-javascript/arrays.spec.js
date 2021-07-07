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
    it("Should not return an array", () => {
      expect(arrayFunctions.each([23, 35, 12], item => item + 1)).toBe(
        undefined
      );
    });
  });

  describe("map", () => {
    it("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });
    it("should return a new array with 2 added to each element", () => {
      const map = arrayFunctions.map;
      expect(map([2, 12, 34], item => item + 2)).toEqual([4, 14, 36]);
    });
  });

  describe("reduce", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
    it("should return the sum of the array items", () => {
      expect(
        arrayFunctions.reduce([5, 6, 10, 25], (item, reducer) => {
          return item + reducer;
        })
      ).toBe(46);
    });
  });

  describe("find", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });

    it("should return the item found in the given array ", () => {
      expect(arrayFunctions.find([5, 6, 10, 25], number => number === 10)).toBe(
        10
      );
    });
  });

  describe("filter", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });

    it("should return an array with only number 10 filtered out ", () => {
      expect(
        arrayFunctions.filter([5, 6, 10, 25], number => number === 10)
      ).toEqual([10]);
    });
  });

  describe("flatten", () => {
    it("should be a function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
    it("should return a flattened array ", () => {
      expect(arrayFunctions.flatten([5, 6, 10, [12, 35, [89]], 25])).toEqual([
        5,
        6,
        10,
        12,
        35,
        89,
        25
      ]);
    });
  });
});
