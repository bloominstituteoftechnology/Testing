const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("each", () => {
    const mockCallBack = jest.fn();
    it("each", () => {
      const each = arrayFunctions.each;
      // expect(typeof map).toBe('function');
      each([9, 1], mockCallBack);
      expect(mockCallBack.mock.calls[0][0]).toEqual(9);
    });
  });
  describe("map", () => {
    it("should an array of all items pushed through a callback", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
      expect(map([9], item => item)).toEqual([9]);
    });
  });
  describe("reduce", () => {
    const mockCallBack = jest.fn();
    it("reduce", () => {
      const reduce = arrayFunctions.reduce;
      reduce([9, 1], mockCallBack);
      expect(mockCallBack.mock.calls[0][0]).toEqual(9);
      expect(mockCallBack.mock.calls[0][1]).toEqual(1);
    });
  });
  describe("find", () => {
    const mockCallBack = jest.fn();
    it("find", () => {
      const find = arrayFunctions.find;
      expect(find([2, 10], mockCallBack.mockReturnValue(true))).toEqual(2);
    });
  });
  describe("filter", () => {
    const mockCallBack = jest.fn();
    it("filter", () => {
      const filter = arrayFunctions.filter;
      expect(filter([2, 10], mockCallBack.mockReturnValue(true))).toEqual([
        2,
        10
      ]);
    });
  });
  describe("flatten", () => {
    it("should return a flattened array regardless of how deep the array nesting is", () => {
      const arr = [1, [2], [[3]], [[[4]]]];
      const results = arrayFunctions.flatten(arr);
      expect(results).toEqual([1, 2, 3, 4]);
    });
  });
});
