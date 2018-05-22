const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
const numArr = [5, 6, 4, 7, 5, 7, 8];
const strArr = ["Kaladin", "Dalanar", "Adalin", "Nevanie"];
describe("Arrays", () => {
  describe("map", () => {
    it("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });

    it("should return if a boolean of true if an array is passed", () => {
      const map = arrayFunctions.map;
      const arr = map(numArr, () => "map");
      expect(Array.isArray(arr)).toBe(true);
    });
  });
});

describe("each", () => {
  it("should be a function", () => {
    const each = arrayFunctions.each;
    expect(typeof each).toBe("function");
  });
});
describe("reduce", () => {
  it("should be a function", () => {
    const reduce = arrayFunctions.reduce;
    expect(typeof reduce).toBe("function");
  });
  it("should return a reduced array", () => {
    let memo = null;
    const reduce = arrayFunctions.reduce;
    const arr = reduce(numArr, (x, y) => x + y, memo);

    expect(arr).toBe(42);
  });
});
describe("find", () => {
  it("should be a function", () => {
    const find = arrayFunctions.find;
    expect(typeof find).toBe("function");
  });
  it("should return return the first number that is less than 5", () => {
    const find = arrayFunctions.find;
    const arr = find(numArr, x => x < 5);

    expect(arr).toBe(4);
  });
});
describe("Filter", () => {
  it("should be a function", () => {
    const filter = arrayFunctions.filter;
    expect(typeof filter).toBe("function");
  });
  it("should return if a boolean of true if an array is passed", () => {
    const filter = arrayFunctions.filter;
    const arr = filter(numArr, x => x < 7);

    expect(arr).toEqual([5, 6, 4, 5]);
  });
});
describe("flatten", () => {
  it("should be a function", () => {
    const flatten = arrayFunctions.flatten;
    expect(typeof flatten).toBe("function");
  });
  it("should return should return a flattened array", () => {
    const flatten = arrayFunctions.flatten;
    const arr = flatten([numArr, numArr, numArr]);

    expect(arr).toEqual([
      5,
      6,
      4,
      7,
      5,
      7,
      8,
      5,
      6,
      4,
      7,
      5,
      7,
      8,
      5,
      6,
      4,
      7,
      5,
      7,
      8
    ]);
  });
});
