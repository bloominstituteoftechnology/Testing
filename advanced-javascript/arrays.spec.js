const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("each", () => {
    const { each } = arrayFunctions;
    const arr = [1, 2, 3];
    const cb = item => item + 1;

    it("should be a function", () => {
      expect(typeof each).toBe("function");
    });

    it("should run the given callback function once for each item in the given array", () => {
      const check = jest.fn();
      each(arr, check);
      expect(check).toHaveBeenCalledTimes(3);
    });
  });

  describe("map", () => {
    const map = arrayFunctions.map;
    const arr = [1, 2, 3];
    const cb = item => item + 1;
    const example = map(arr, cb);
    const expected = [2, 3, 4];

    it("should be a function", () => {
      expect(typeof map).toBe("function");
    });

    it("returns an array", () => {
      expect(Array.isArray(example)).toBeTruthy();
    });

    it("iterates over given array's items with given callback function", () => {
      const actual = example;
      expect(actual).toEqual(expected);
    });
  });

  describe("reduce", () => {
    const { reduce } = arrayFunctions;

    it("", () => {});
  });
});
