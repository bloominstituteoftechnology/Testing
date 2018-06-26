const arrayFunctions = require('./arrays');
require('jest-extended');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  // describe('map', () => {
  //   it('should be a function', () => {
  //     const map = arrayFunctions.map;
  //     expect(typeof map).toBe('object');
  //   });
  // });

  describe('each', () => {
    const arr = [['a'],['b'],['c']];
    const arr2 = Array.from(arr);
    arr[2].push('d')
    //console.log(arr2)

    //console.log(JSON.stringify(arr) === JSON.stringify(arr2));

    it('it should run once per array element', () => {
      const jestFn = jest.fn();
      arrayFunctions.each(arr, jestFn)
      expect(jestFn.mock.calls.length).toBe(3);
     //console.log('calls', jestFn.mock.calls)
    })
    it('it should return an error if anytihng besides a string and array is provided', () => {
      const jestFn = jest.fn();
      arrayFunctions.each(10, jestFn)
      expect(jestFn.mock.calls.length).toBe(0);
    })
    it('should return undefined', () => {
      const func = arrayFunctions.each(arr, ()=>{});
      //console.log('func', func)
      expect(func).toBeUndefined();
    })
  })

  describe('map', () => {
    const arr = ['b', 'b', 'c'];
    it('it should return true if they are the same in length', () => {
      const jestFn = jest.fn();
      const length = arrayFunctions.map(arr, jestFn).length;
      //console.log('length', arrayFunctions.map(arr, jestFn).length)
      expect(length).toBe(jestFn.mock.calls.length);
      //console.log(jestFn.mock.calls.length);
    })
  })
  
});


