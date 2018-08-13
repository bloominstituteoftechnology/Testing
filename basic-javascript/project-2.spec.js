const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("basic functions", () => {
  it("should get the bigger of the two numbers", () => {
    expect(funcs.getBiggest(2, 5)).toEqual(5);
    expect(funcs.getBiggest(5, 4)).toEqual(5);
    expect(funcs.getBiggest(Infinity, 5)).toEqual(Infinity);
  });

  it("should say if a number is 5 or 10", () => {
    expect(funcs.isTenOrFive(4)).toEqual(false);
    expect(funcs.isTenOrFive(5)).toEqual(true);
  });

  it("should determine if the item is inside the array", () => {
    expect(funcs.contains([1, 2, 3], 3)).toEqual(true);
    expect(funcs.contains(["arr", "boy", "girl"], "girl")).toEqual(true);
  });

  it("should determine the largest number out of all of the numbers", () => {
    expect(funcs.largestNumber([1, 3, 53, 233, 34])).toEqual(233);
    expect(funcs.largestNumber([1, 3, 53, Infinity, 34])).toEqual(Infinity);
  });
});
