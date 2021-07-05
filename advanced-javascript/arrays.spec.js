const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("each", () => {
    test("should be a function", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
    });
  });

  describe("map", () => {
    test("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });
    test("should return results of the cb", () => {
      const map2 = arrayFunctions.map([1, 2, 3, 4], num => num + num);
      expect(map2).toEqual([2, 4, 6, 8]);
    });
  });

  describe("reduce", () => {
    test("it should be a function", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
    test("it should return the cb as reduced output", () => {
      expect(
        arrayFunctions.reduce([1, 2, 3, 4, 5], (acc, num) => {
          return acc + num;
        })
      ).toBe(15);
    });
  });

  describe("find", () => {
    test("it should be a function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });
    test("should return the values met by the cb function", () => {
      expect(arrayFunctions.find([1, 2, 3, 4, 5], num => num / 2 === 1)).toBe(
        2
      );
    });
  });

  describe("filer", () => {
    test("it should be a function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });
    test("should return values met by cb function", () => {
      expect(
        arrayFunctions.filter([1, 2, 3, 4, 5], num => num % 2 === 0)
      ).toEqual([2, 4]);
    });
  });

  describe("flatten", () => {
    test("shuld be a function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
    test("should return flattened array", () => {
      expect(arrayFunctions.flatten([1, [2, 3], [4, [5, 6]]])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);
    });
  });
});
