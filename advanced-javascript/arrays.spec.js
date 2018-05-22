const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays:", () => {
  const each = arrayFunctions.each;
  const map = arrayFunctions.map;
  const reduce = arrayFunctions.reduce;
  const find = arrayFunctions.find;
  const filter = arrayFunctions.filter;
  const flatten = arrayFunctions.flatten;

  describe("map", () => {
    const array = ["a", "b", "c"];
    const array1 = [1, 2, 3, 4];
    const array2 = [{ name: "jack" }, { age: 23 }, { gender: "male" }];

    const mockCallback = jest.fn(x => x);
    const mockCallback1 = jest.fn(x => x * 2);

    const test = map(array, mockCallback);
    const test1 = map(array1, mockCallback1);
    const test2 = map(array2, mockCallback);

    it("should be a function", () => {
      expect(typeof map).toBe("function");
    });

    it("should return an array", () => {
      expect(Array.isArray(test)).toBe(true);
      expect(Array.isArray(test1)).toBe(true);
      expect(Array.isArray(test2)).toBe(true);
    });

    it("should have new array with newly calculated values", () => {
      expect(test).toEqual(["a", "b", "c"]);
      expect(test1).toEqual([2, 4, 6, 8]);
      expect(test2).toEqual([
        { name: "jack" },
        { age: 23 },
        { gender: "male" }
      ]);
    });
  });

  describe("reduce", () => {
    const reduce = arrayFunctions.reduce;

    const array = [1, 2, 3, 4];
    const array1 = ["a", "b", "c"];

    const mockCallback = jest.fn((total, amount) => total + amount);

    const test = reduce(array, mockCallback);
    const test1 = reduce(array1, mockCallback);

    it("should be a function", () => {
      expect(typeof reduce).toBe("function");
    });

    it("should return a number for array with only numbers", () => {
      expect(Number.isInteger(test)).toBe(true);
    });

    it("should accumulate all number to single value or single string", () => {
      expect(test).toEqual(10);
      expect(test1).toEqual("abc");
    });
  });

  describe("find", () => {
    const array = ["a", "b", "c"];
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 3, "a", "b", 2, 3, 4];

    const mockCallback = jest.fn(k => k == "a");
    const mockCallback1 = jest.fn(k => k == 2);
    const mockCallback2 = jest.fn(k => k == "a");

    const test = find(array, mockCallback);
    const test1 = find(array1, mockCallback1);
    const test2 = find(array2, mockCallback2);

    it("should be a function", () => {
      expect(typeof find).toBe("function");
    });

    it("should find item of interest", () => {
      expect(test).toBe("a");
      expect(test1).toBe(2);
      expect(test2).toBe("a");
    });
  });

  describe.skip("filter", () => {
    const array = ["a", "b", "c"];
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

    const mockCallback = jest.fn(k => k == "a");
    const mockCallback1 = jest.fn(k => k > 2);
    const mockCallback2 = jest.fn(k => k == "a");

    const test = filter(array, mockCallback);
    // const test1 = filter(array1, mockCallback1);
    // const test2 = filter(array2, mockCallback2);

    it("should be a function", () => {
      expect(typeof find).toBe("function");
    });

    it("should find item of interest", () => {
      expect(test).toBe("a");
      // expect(test1).toBe();
      // expect(test2).toBe("a");
    });
  });

  describe("flatten", () => {
    const array = ["a", "b", "c", ["d", "e"]];
    const array1 = [1, 2, [3, 4, [5, 6]]];
    const array2 = ["b", 2, [["a"], 2], 4];

    const test = flatten(array);
    const test1 = flatten(array1);
    const test2 = flatten(array2);

    it("should be a function", () => {
      expect(typeof find).toBe("function");
    });

    it("should return an array", () => {
      expect(Array.isArray(test)).toBe(true);
      expect(Array.isArray(test1)).toBe(true);
      expect(Array.isArray(test2)).toBe(true);
    });

    it("should return array with all nesting removed", () => {
      expect(test).toEqual(["a", "b", "c", "d", "e"]);
      expect(test1).toEqual([1, 2, 3, 4, 5, 6]);
      expect(test2).toEqual(["b", 2, "a", 2, 4]);
    });
  });
});
