const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  describe('map', () => {
    it('should return an Array', () => {
      const map = arrayFunctions.map;
      const elements = [1,2,3];
      const callBack = (item) => item + 1;
      expect(map(elements, callBack)).toEqual([2, 3, 4]);
    });

    it('should handle args', () => {
      const map = arrayFunctions.map;

      const elements = [1,2,3];
      const callBack = (item) => item + 1;

      expect(map(elements, {})).toEqual('Did not provide a function');
      expect(map({1:1}, callBack)).toEqual('Need to pass a valid Array');
      expect(map([], callBack)).toEqual('Need to pass a valid Array');
      expect(map(undefined)).toEqual('Did not provide a function');
    });
  });
 
 
  describe('reduce', () => {
    it('should return a reduced number', () => {
      const reduce = arrayFunctions.reduce;
      const elements = [1,2,3];
      const callBack = (item) => item + 1;
      expect(reduce(elements, callBack)).toEqual(3);
    });

    // it('should handle args', () => {
    //   const reduce = arrayFunctions.reduce;

    //   const elements = [1,2,3];
    //   const callBack = (item) => item + 1;

    //   expect(reduce(elements, {})).toEqual('Did not provide a function');
    //   expect(reduce({1:1}, callBack)).toEqual('Need to pass a valid Array');
    //   expect(reduce([], callBack)).toEqual('Need to pass a valid Array');
    //   expect(reduce(undefined)).toEqual('Did not provide a function');
    // });
  });

});

