const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

// describe("Arrays", () => {
//   describe("map", () => {
//     it("should be a function", () => {
//       const map = arrayFunctions.map;
//       expect(typeof map).toBe("object");
//     });
//   });
// });

it("should should use a callback function on each item in an array and return an array with the modified items", () => {
  const map = arrayFunctions.map;
  const mapCb = item => {
    return item * 2;
  };
  const actual = map([1, 2, 3], mapCb);
  expect(actual).toEqual([2, 4, 6]);
});

it("should return a reduced array that is modified by a callback function", () => {
  const reduce = arrayFunctions.reduce;
  const reduceCb = (memo, item) => {
    return memo + item;
  };
  expect(reduce([1, 2, 3], reduceCb)).toEqual(6);
  expect(reduce(["He", "ll", "o"], reduceCb)).toBe("Hello");
});

it("should go through an array and return the first item that can return something from a callback function, and return undefined if none can be", () => {
  const find = arrayFunctions.find;
  const findCb = item => {
    if (typeof item === "number") return true;
  };
  expect(find(["1", 2, 3], findCb)).toBe(2);
  expect(find(["String", "String", "String2"], findCb)).toBe(undefined);
});

it("should return an array that is filtered based on a callback function", () => {
  const filter = arrayFunctions.filter;
  const filterCb = item => {
    if (item > 50) return item;
  };
  const actual = filter([70, 20, "hi", 51], filterCb);
  expect(actual).toEqual([70, 51]);
});

it("should return a flattened array", () => {
  const flatten = arrayFunctions.flatten;
  const actual = flatten([[1, [[2]], 3], [4]]);
  expect(actual).toEqual([1, 2, 3, 4]);
});
