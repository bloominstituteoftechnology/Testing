const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  const { each, map, reduce, find, filter, flatten } = arrayFunctions;

  describe("each", () => {
    it("should be a function", () => {
      expect(typeof each).toBe("function");
    });

    it("should run the given callback function once for each item in the given array", () => {
      const arr = [1, 2, 3];
      const cb = jest.fn();
      each(arr, cb);
      expect(cb).toHaveBeenCalledTimes(3);
    });

    it("should return undefined since there is nothing actually being returned", () => {
      const arr = [, 1, 2, 3];
      const cb = jest.fn();
      const example = each(arr, cb);
      expect(example).toBeUndefined();
    });
  });

  describe("map", () => {
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
    it("when passed an array, a callback and an optional accumulator value, will return the accumulator value mutated by each item in the array executed by the callback", () => {
      expect(reduce([1, 2, 3], (val, next) => val + next, 4)).toBe(10);
    });

    it("when not passed the optional accumulator value, will initialize it to be zero and run function normally", () => {
      expect(reduce([1, 2, 3], (val, next) => val + next)).toBe(6);
    });
  });

  describe("find", () => {
    it('when passed an array and a callback, runs each item in order through the callback and returns the first item that has the callback return "true"', () => {
      expect(find([1, 2, 3], item => item > 2)).toBe(3);
    });

    it("returns undefined if not items passed through the callback return true", () => {
      expect(find([1, 2, 3], item => item > 20)).toBe(undefined);
    });
  });

  describe("filter", () => {
    it('when passed an array and a callback, returns a new array containing only items that returned as "true" when passed through the callback', () => {
      expect(filter([1, 2, 3], item => item > 1)).toEqual([2, 3]);
    });

    it("returns a new empty array when none of the items returned as true when passed through the callback", () => {
      expect(filter([1, 2, 3], item => item > 5)).toEqual([]);
    });
  });

  describe("flatten", () => {
    it("when passed an array containing items, some of which might be nested arrays, returns a new array composed of each of the same items but removed from their nested arrays(if any) by first passing them through a reduce function", () => {
      expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
    });

    it("when passed an array of only non-array items, still copies all items to a new array instead of returning the original array", () => {
      const arr = [1, 2, 3];
      expect(flatten(arr)).toEqual([1, 2, 3]);
      expect(flatten(arr) === arr).toBe(false);
    });
  });
});
