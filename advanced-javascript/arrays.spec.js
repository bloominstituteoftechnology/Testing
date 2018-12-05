const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  const arr = [1, 2, 3, 4, 5];
  const cb = () => {
    console.log("callback");
  };
  describe("map", () => {
    it("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });

    it("should return null if any of the arguments are falsy", () => {
      expect(arrayFunctions.map(0)).toBe(undefined);
      expect(arrayFunctions.map(arr)).toBe(undefined);
      expect(arrayFunctions.map(0, cb)).toBe(undefined);
      expect(arrayFunctions.map("", cb)).toBe(undefined);
      expect(arrayFunctions.map(arr, NaN)).toBe(undefined);
      expect(arrayFunctions.map(arr, null)).toBe(undefined);
      expect(arrayFunctions.map(arr, undefined)).toBe(undefined);
    });

    it("should return an array", () => {
      expect(Array.isArray(arrayFunctions.map(arr, cb))).toBe(true);
    });
  });
});
