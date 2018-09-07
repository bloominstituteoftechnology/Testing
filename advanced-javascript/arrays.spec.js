const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("each", () => {
    it("should execute the callback on each item in the array", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
      let testVar = "";
      each([1, 2, 3], (item, index) => (testVar = testVar + item + index));
      expect(testVar).toEqual("102132");
    });
  });

  describe("map", () => {
    it("should execute the callback on each item in the array, return an array", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
      expect(map([1, 2, 3], a => a + 1)).toEqual([2, 3, 4]);
    });
  });
});
