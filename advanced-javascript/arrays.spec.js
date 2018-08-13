const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  describe("each", () => {
    it("should be a function", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
    })
    it("should console.log each number", () => {
      console.log = jest.fn();

      arrayFunctions.each([1,2,3], (num) => {
        console.log(num);
      })

      expect(console.log.mock.calls[0][0]).toBe(1);
      expect(console.log.mock.calls[1][0]).toBe(2);
      expect(console.log.mock.calls[2][0]).toBe(3);
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    })
    it('should add 2 to each element', () => {
      expect(arrayFunctions.map(([1,2,3]), (ele) => ele + 2)).toEqual([3,4,5]);
      expect(arrayFunctions.map(([100,200,300]), (ele) => ele + 20)).toEqual([120,220,320]);
    })
    it("should multiply each number by 3", () => {
      expect(arrayFunctions.map(([1,2,3]), (num) => num * 3)).toEqual([3,6,9]);
    })
  })

  describe("reduce", () => {
    it("should return the sum of all the numbers", () => {
      expect(arrayFunctions.reduce([1,2,3], (memo, num) => {
        return memo + num;
      })).toBe(6);
    })
  })

})
