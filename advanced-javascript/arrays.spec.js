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

  describe('reduce', () => {
    const arr = [1, 2, 3, 4];
    it('it should return 3 given the number of calls', () => {
      const jestFn = jest.fn();
      const calls = arrayFunctions.reduce(arr, jestFn);
      expect(jestFn.mock.calls.length).toBe(3);
    })
  })

  describe('find', () => {
    it('should return 3 given cb that checks for 3', () => {
      const arr = [1, 2, 3, 4];
      const cb = el => el == 3;
      const expected = 3;
      const actual = arrayFunctions.find(arr, cb);
      expect(actual).toBe(expected);
    })
    it("should return 'd' given that cb checks for 'd' and its index", () => {
      const arr = ['a', 'b', 'c', 'd', 'd'];
      const cb = el => el === 'd' && arr.indexOf(el) == 3;
      const expected = 'd';
      const actual = arrayFunctions.find(arr, cb);
      expect(actual).toBe(expected);
    })
  })

  describe('filter', () => {
    it('should return [1,1] given [1,3,45,43,6,1,4] and cb', () => {
      const arr = [1,3,45,43,6,1,4];
      const cb = el => el == 1;
      const expected = [1, 1];
      const actual = arrayFunctions.filter(arr, cb);
      //console.log(actual)
      expect(actual).toEqual(expected);
    })
    it('should return 7 given arr and cb. cb increments count each time cb is called', () => {
      const arr = [1,3,45,43,6,1,4];
      const expected = arr.length;
      let count = 0;
      const cb = () => ++count;
      const actual = arrayFunctions.filter(arr, cb).length;
      expect(actual).toBe(count && expected);
    })
  })
  
  
});


