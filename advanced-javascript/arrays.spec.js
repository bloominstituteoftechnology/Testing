const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  const cb = item => {
    return item+1;
  };
  describe('map', () => {
    const array = [1,2,3,4,5];
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('Should return an array that is the mapped version of the first argument callbacked with the second argument.', () => {
      expect(arrayFunctions.map(array,cb)).toEqual([2,3,4,5,6]);
    });
    it('Should throw an error if first argument is not an array and/or second argument is not a callback.', () => {
      let actual = () => arrayFunctions.map(4,cb);
      expect(actual).toThrow();
      actual = () => arrayFunctions.map(array,4);
      expect(actual).toThrow();
      actual = () => arrayFunctions.map(4,5);
      expect(actual).toThrow();
      actual = () => arrayFunctions.map(array);
      expect(actual).toThrow();
    });
  });

  describe('each', () => {
    it('Should apply second argument callback to each element of first argument array.', () => {
      let array = [0,1,2,3];
      arrayFunctions.each(array, cb);
      expect(array).toEqual([1,2,3,4]);
    });
    it('Should throw error if missing arguments or arguments are wrong type.', () => {
      let array = [0,1,2,3];
      let actual = () => arrayFunctions.each(4,cb);
      expect(actual).toThrow();
      actual = () => arrayFunctions.each(array, 4);
      expect(actual).toThrow();
      actual = () => arrayFunctions.each(5, 4);
      expect(actual).toThrow();
      actual = () => arrayFunctions.each();
      expect(actual).toThrow();
    });
  });

  describe('reduce', () => {
    let array = [0,1,2,3];
    let reducer = (accumulator, item) => {
      return accumulator + item;
    };
    it('Should reduce all elements of the first argument array with the second argument callback.', () => {
      expect(arrayFunctions.reduce(array, reducer)).toBe(6);
    });
    it('Should throw error if missing arguments or arguments are of wrong type.', () => {
      let actual = () => arrayFunctions.reduce(4,cb);
      expect(actual).toThrow();
      actual = () => arrayFunctions.reduce(array, 4);
      expect(actual).toThrow();
      actual = () => arrayFunctions.reduce(5, 4);
      expect(actual).toThrow();
      actual = () => arrayFunctions.reduce();
      expect(actual).toThrow();
    });
  });

  describe('find', () => {
    let array = [0,1,2,3];
    let callback = () => {
      
    }
    it('Should return first element of first argument array that triggers true with the second argument callback.', () => {

    })
  })
});
