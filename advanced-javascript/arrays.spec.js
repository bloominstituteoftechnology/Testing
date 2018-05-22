const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  //Helper Function
  function isFunction(func) {
    it('should be a function', () => {
      expect(typeof func).toBe('function');
    });
  };

  describe('each', () => {
    const elements = [1, 2, 3];
    const cb = (el, index) => {
      // el = `(${el + index})`
      return el + index;
    };
    // const cb = (el, index) => {
    //   return `${el}` + `${index}`
    // };
    const expected = arrayFunctions.each(elements, cb);
    //Checks if function is type of function
    isFunction(arrayFunctions.each);
    it('Should return expected outcome', () => {
      expect([1, 3, 4]).toBe(expected);
    });
  });

  describe('map', () => {
    const cb = (item) => item + 2;
    const mappedArray = arrayFunctions.map([1, 2, 3],
      cb);
    //Checks if function is type of function    
    isFunction(arrayFunctions.map);
    it('Should return an array', () => {
      expect(mappedArray instanceof Array).toBeTruthy();
    });
    it('Should return expected outcome', () => {
      expect(mappedArray).toEqual([3, 4, 5]);
    })
  });
});