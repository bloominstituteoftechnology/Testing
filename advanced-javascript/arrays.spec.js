const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back,
//           and perform some sort of operation on the data.
let newArray = [2, 3, 4, 5];

describe.skip("Arrays", () => {
  describe("map", () => {
    let cb = item => (item += 1);
    let cb2 = item => (item *= 2);
    let array = [1, 2, 3, 4];
    let times2Array = [2, 4, 6, 8];
    it("maps over the array and applies the cb onto each item", () => {
      const map = arrayFunctions.map;
      expect(map(array, cb)).toEqual(newArray);
      expect(map(array, cb2)).toEqual(times2Array);
    });
    it("map is a function", () => {
      expect(typeof arrayFunctions.map).toBe("function");
    });
    //what does the above do?  It checks if it's a function? why are we checking that?
    it("it is passed an array", () => {
      expect(arrayFunctions.map(123, cb)).toEqual([]);
    });
  });
  describe("reduce", () => {
    let reduceCB1 = (sum, item) => sum + item;
    let reduceCB2 = (sum, item) => sum + item * 2;
    it("applies a cb onto each of the items and reduces it into one value", () => {
      expect(arrayFunctions.reduce([1, 2, 3, 4], reduceCB1)).toEqual(10);
      expect(arrayFunctions.reduce([1, 2, 3, 4], reduceCB2)).toEqual(19);
      //I can't get this one to work right.  The reduce isn't applying the cb to the 0 index
      expect(arrayFunctions.reduce([], reduceCB1)).toBe();
    });
    it("reduce is a function", () => {
      expect(typeof arrayFunctions.reduce).toBe("function");
    });
  });
  describe("find", () => {
    let filterCB1 = item => item > 3;
    let filterCB2 = item => item > 10;
    it("find is a function", () => {
      expect(typeof arrayFunctions.find).toBe("function");
    });
    it("finds the first item in array that fufills conditions of cb", () => {
      expect(arrayFunctions.find([2, 3, 4, 5], filterCB1)).toEqual(4);
    });
    it("returns undefined when item is not found in array", () => {
      expect(arrayFunctions.find(newArray, filterCB2)).toBeUndefined();
    });
  });
  describe("filter", () => {
    let filterCB1 = item => item > 3;
    let filterCB2 = item => item > 10;
    it("filter is a function", () => {
      expect(typeof arrayFunctions.filter).toBe("function");
    });
    it("finds all items in array that fufills conditions of cb and returns an array", () => {
      expect(arrayFunctions.filter([2, 3, 4, 5], filterCB1)).toEqual([4, 5]);
    });
    it("returns empty array when item is not found in array", () => {
      expect(arrayFunctions.filter(newArray, filterCB2)).toEqual([]);
    });
  });
  describe("flatten", () => {
    it("flatten is a function", () => {
      expect(typeof arrayFunctions.flatten).toBe("function");
    });
    let arrOfArr = [[1, 2], [3, 4]];
    it("returns 1 concatenated array", () => {
      expect(arrayFunctions.flatten(arrOfArr)).toEqual([1, 2, 3, 4]);
    });
    it("returns an empty array if passed an empty array", () => {
      expect(arrayFunctions.flatten([[], [], []])).toEqual([]);
    });
  });
});
