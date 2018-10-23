const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

// map
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

  // each
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

  describe("array reduce tests", () => {
    test("tests if reduce [2, 10] x * y returns [20]", () => {
      expect(
        arrayFunctions.reduce([2, 10], (x, y) => {
          return x * y;
        })
      ).toEqual(20);
    });

    test("tests type of reduce returns function", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
  });

  describe("array find tests", () => {
    test("tests if find [200, 30, 45, 56, 102, 104] where x = 102 returns 102", () => {
      expect(
        arrayFunctions.find([200, 30, 45, 56, 102, 104], x => {
          if (x === 102) {
            return x;
          }
        })
      ).toBe(102);
    });

    test("tests type of find returns function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });
  });

  describe("array filter tests", () => {
    test("test filter on [23, 45, 56, 20, 50, 40, 45, 50] where x = 50 returns [50, 50]", () => {
      expect(
        filter([20, 10, 14, 20, 10, 10], x => {
          if (x === 50) {
            return x;
          }
        })
      ).toEqual([50, 50]);
    });
    test("tests type of filter returns function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });
  });

  describe("array flatten tests", () => {
    test("tests if flatten of [23, 45, 22, [45 , 45]] returns [23, 45, 22, 45, 45]", () => {
      expect(arrayFunctions.flatten([23, 45, 22, [45, 45]])).toEqual([
        23,
        45,
        22,
        45,
        45
      ]);
    });
    it("tests type of flatten returns function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
  });
});
