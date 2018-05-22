const arrayFunctions = require('../advanced-javascript/arrays.js');
const jsFuncs = require("../basic-javascript/project-1");
const {add, multiply, subtract} = jsFuncs;
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.



describe('Arrays', () => {
  describe('map', () => {
    it('Should return a mapped array with values being changed', () => {
      const map = arrayFunctions.map;
      const numsArr = [1, 2, 3, 4];
      expect(map(numsArr, val => val * 2)).toEqual([2, 4, 6, 8])
    });
  });
});

it('Should reduce value based on callback', () => {
  const reduce = arrayFunctions.reduce;
  const numsArr = [1, 2, 3, 4];
  expect(reduce(numsArr, add)).toBe(10)
})

