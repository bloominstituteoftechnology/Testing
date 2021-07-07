const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  //each
  describe("each", () => {
    it("should be a function", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
    })
    it("should console.log each number", () => {
      console.log = jest.fn();

      arrayFunctions.each([1,2,3], (num) => {
        console.log(num);
      });

      expect(console.log.mock.calls[0][0]).toBe(1);
      expect(console.log.mock.calls[1][0]).toBe(2);
      expect(console.log.mock.calls[2][0]).toBe(3);
    })
  });

  //map
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it("should add 2 to each element", () => {
      expect(arrayFunctions.map(([1,2,3]), (ele) => ele + 2)).toEqual([3,4,5]);
      expect(arrayFunctions.map(([100,200,300]), (ele) => ele + 2)).toEqual([102,202,302]);
    })
    it("should multiply each number by 3", () => {
      expect(arrayFunctions.map(([1,2,3]), (num) => num * 3)).toEqual([3,6,9]);
    })
  });

  // reduce
  describe("reduce", () => {
    it("should return the sum of all the numbers", () => {
      expect(arrayFunctions.reduce([1,2,3], (memo, num) => {
        return memo + num;
      })).toBe(6);
    })
  })

  //find
  // describe("find", () => {
  //   it("should return the first element if there is a match", () => {
  //     expect(arrayFunctions.find([1,2,3], (num) => {
  //       if(num) return num;
  //     })).toBe(2);
  //   })
  // })

  //filter
  // describe("filter", () => {
  //   it("should return all the even numbers", () => {
  //     expect(arrayFunctions.filter([1,2,3,4,5,6]), (num) => {
  //       return num % 2 === 0;
  //     }).toEqual([2,4,6])
  //   })
  //   it("should return all the odd numbers", () => {
  //     expect(arrayFunctions.filter([1,2,3,4,5,6]), (num) => {
  //       return num % 2 === 1;
  //     }).toEqual([1,3,5]);
  //   })
  // })

  //flatten
  describe("flatten", () => {
    it("should return 1 array all elements but if they are arrays then concat those arrays", () => {
      expect(arrayFunctions.flatten([1,[2,3],4,[5,6]])).toEqual([1,2,3,4,5,6])
    });
  })
});
