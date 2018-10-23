const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  // describe('map', () => {
  //   it('should be a function', () => {
  //     const map = arrayFunctions.map;
  //     expect(typeof map).toBe('object');
  //   });
  // });

  describe("each", () => {
    test("maps array of [3,4,5,6] * 2 and returns [6,8,10,12]", () => {
      expect(
        arrayFunctions.map([3, 4, 5, 6], num => {
          return num * 2;
        })
      ).toEqual([6, 8, 10, 12]);
    });
    test("tests type of each returns function", () => {
      expect(typeof arrayFunctions.each).toBe("function");
    });
  });

  describe("map", () => {
    test("maps array of [3,4,5,6] * 3 and returns [9,12,15,18]", () => {
      expect(
        arrayFunctions.map([3, 4, 5, 6], num => {
          return num * 3;
        })
      ).toEqual([9, 12, 15, 18]);
    });
    test("tests type of map returns function", () => {
      expect(typeof arrayFunctions.map).toBe("function");
    });
  });

  describe("reduce", () => {
    test("tests if reduce [3, 3] x * y returns [9]", () => {
      expect(
        arrayFunctions.reduce([3, 3], (x, y) => {
          return x * y;
        })
      ).toEqual(9);
    });
    test("tests type of reduce returns function", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
  });

  describe("find", () => {
    test("tests if find [1, 2, 3, 4, 5, 6] where x = 2 returns 2", () => {
      expect(
        arrayFunctions.find([1, 2, 3, 4, 5, 6], x => {
          if (x === 2) {
            return x;
          }
        })
      ).toBe(2);
    });
    test("tests type of find returns function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });
  });

  describe("filter", () => {
    test("test filter on [1, 2, 2, 3, 3, 4, 5, 6] where x = 2 returns [2, 2]", () => {
      expect(
        arrayFunctions.filter([1, 2, 2, 3, 3, 4, 5, 6], x => {
          if (x === 2) {
            return x;
          }
        })
      ).toEqual([2, 2]);
    });
    test("tests type of filter returns function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });
  });

  describe("flatten", () => {
    test("tests if flatten of [1, 4, 3, [4 , 4]] returns [1, 4, 3, 4, 4]", () => {
      expect(arrayFunctions.flatten([1, 4, 3, [4, 4]])).toEqual([
        1,
        4,
        3,
        4,
        4
      ]);
    });
    it("tests type of flatten returns function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
  });
});
