const arrayFunctions = require("./arrays");
const projectFunctions = require("../basic-javascript/project-1");
const helpers = require("../helpers/helper");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

const testAll = helpers.testAll;
const checkFunction = helpers.shouldBeFunction;

describe("Arrays", () => {
  testAll(checkFunction);
  const { add, multiply, subtract } = projectFunctions;
  const { multiplyByTen, addExclamationPoint } = projectFunctions;
  const nums = {
    in: [1, 2, 3, 4],
    out: [10, 20, 30, 40]
  };
  const strings = {
    in: ["hi", "yo", "hola", "hello"],
    out: ["hi!", "yo!", "hola!", "hello!"]
  };
  describe("map", () => {
    const map = arrayFunctions.map;
    it("should call specified function on each item of an array and return modified array", () => {
      expect(map(nums.in, multiplyByTen)).toEqual(nums.out);
      expect(map(strings.in, addExclamationPoint)).toEqual(strings.out);
    });
  });
  describe("find", () => {
    const find = arrayFunctions.find;
    it("should return an item if found or undefined if not", () => {
      expect(find(nums.in, check => check === 2)).toBe(2);
      expect(find(strings.in, check => check === "vista")).toBe(undefined);
    });
  });
  describe("reduce", () => {
    const reduce = arrayFunctions.reduce;
    it("should reduce given value based on supplied callback", () => {
      expect(reduce(nums.in, add)).toBe(10);
      expect(reduce(strings.in, multiply)).toBe(NaN);
      expect(reduce(nums.in, multiply)).toBe(24);
    });
  });
  describe("flatten", () => {
    const flatten = arrayFunctions.flatten;
    const nested = [1, 2, [3, 4, [5]]];
    it("flatten an array", () => {
      expect(flatten(nested)).toEqual([1, 2, 3, 4, 5]);
      expect(flatten(nums.in)).toEqual([3, 4]);
    });
  });
  describe("filter", () => {
    const filter = arrayFunctions.filter;
    const numbers = [1, 2, 3, 4, 5];
    it("should reduce given value based on supplied callback", () => {
      expect(filter(numbers, num => num < 2)).toEqual([1]);
      expect(filter(strings.in, num => num < 2)).toEqual([]);
      expect(filter(strings.in, string => string !== "hi")).toEqual([
        "yo",
        "hola",
        "hello"
      ]);
      expect(filter(nums.out, num => num < 20)).toEqual([10]);
    });
  });
});
