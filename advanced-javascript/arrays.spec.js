const arrayFunctions = require('./arrays');
const helpers1 = require('../basic-javascript/project-1');
const helpers2 = require('../basic-javascript/project-2');
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const expected = [10,20,30,40,50];
      const actual = arrayFunctions.map([1,2,3,4,5],helpers1.multiplyByTen);
      expect(actual).toEqual(expected);
    });
  });
});
