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

  describe("find", () => {
    it("should be a function", () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe("function");
    });

    it("should return the first element of an array that is bigger than 10", () => {
      expect(
        arrayFunctions.find([2, 5, 12], function(element) {
          return element > 10;
        })
      ).toEqual(12);
    });

    it("should return undefined if it doesnt find the number in the array", () => {
      expect(arrayFunctions.find([2, 3, 5], element => element > 10)).toEqual(undefined);
    });
  });

  describe("filter", () => {
    it("should be a function", () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe("function");
    });

    it("should return only even numbers from an array", () => {
      expect(
        arrayFunctions.filter([1, 3, 4, 6, 2, 7], function(element) {
          return element % 2 === 0;
        })
      ).toEqual([4, 6, 2]);
    });

    it("should return only numbers from an array", () => {
      expect(
        arrayFunctions.filter([3, "hello", 4, "hi"], function(element) {
          if (typeof element === "number") {
            return element;
          }
        })
      ).toEqual([3, 4]);
    });

    it("should return only numbers greater than 10", () => {
      expect(arrayFunctions.filter([3, 11, 14, 5], element => element > 10)).toEqual([11, 14]);
    });
  });

  describe("flatten", () => {
    it("should be a function", () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe("function");
    });

    it("should concatenate nested arrays", () => {
      expect(arrayFunctions.flatten([3, 4, [4, 5]])).toEqual([3, 4, 4, 5]);
    });
  });
});
