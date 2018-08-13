const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("map", () => {
    it("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });

    it("should add 10 to every item in the array.", () => {
      expect(
        arrayFunctions.map([3, 4, 5], function(element) {
          return element + 10;
        })
      ).toEqual([13, 14, 15]);
    });

    it("should multiply each item by 3", () => {
      expect(arrayFunctions.map([4, 5, 6], element => element * 3)).toEqual([12, 15, 18]);
    });
  });

  describe("reduce", () => {
    it("should be a function", () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe("function");
    });

    it("should take the sum of all of the numbers in the array", () => {
      expect(
        arrayFunctions.reduce([3, 4, 6], function(accumulator, element) {
          return accumulator + element;
        })
      ).toEqual(13);
    });

    it("should take the product of all of the elements in the array", () => {
      expect(
        arrayFunctions.reduce([3, 5, 7], (accumulator, element) => accumulator * element)
      ).toEqual(105);
    });

    it("should take the average of all of the elements in the array", () => {
      expect(
        arrayFunctions.reduce([1, 2, 3], function(accumulator, element) {
          return accumulator + element;
        }) / 3
      ).toEqual(2);
    });
  });
});
