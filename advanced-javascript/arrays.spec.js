const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("map of [2, 4, 6, 8] (*2) should return [4, 8, 12, 16]", () => {
    test("tests the map method on an array of numbers should return double the input", () => {
      expect(
        arrayFunctions.map([2, 4, 6, 8], num => {
          return num * 2;
        })
      ).toEqual([4, 8, 12, 16]);
    });

    test("tests type of map returns function", () => {
      expect(typeof arrayFunctions.map).toBe("function");
    });
  });

  describe("tests if each of [2,4,6,8] * 2 returns [4, 8, 12, 16]", () => {
    test("tests the each method on an array of numbers should return array of doulble of each element", () => {
      expect(
        arrayFunctions.each([2, 4, 6, 8], item => {
          return item * 2;
        })
      ).toEqual([4, 8, 12, 16]);
    });

    test("tests type of each returns function", () => {
      expect(typeof arrayFunctions.each).toBe("function");
    });
  });
});
