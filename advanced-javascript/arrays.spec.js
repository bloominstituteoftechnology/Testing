const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should return a new array with modified items', () => {
      const array = [1, 2, 3];

      function cb(data, index) {
        array[index] = data * 2;
      }

      arrayFunctions.each(array, cb);

      expect(array).toEqual([2, 4, 6]);
    });
  });
});

describe('Arrays', () => {
  describe('map', () => {
    it('should return a new array mapped from another one', () => {
      const array = [1, 2, 3];

      function cb(data) {
        return data * 2;
      }

      expect(arrayFunctions.map(array, cb)).toEqual([2, 4, 6]);

    });
  });
});

describe('Arrays - Reduce', () => {
  it('should return a reduced array', () => {
    const array = [1, 2, 3];

    function cb(pre, next) {
      return pre;
    }



    expect(arrayFunctions.reduce(array, cb)).toEqual(1)
    expect(arrayFunctions.reduce(array, cb)).toEqual(2)
    expect(arrayFunctions.reduce(array, cb)).toEqual(3)
  })
})

describe('Arrays - Find', () => {
  it('should return an element qualified condition inside cb', () => {
    const array = [1, 2, 3];

    function cb(item) {
      if (item % 2 === 0) return true;
      return false;
    }
    expect(arrayFunctions.find(array, cb)).toEqual(2)
  })
})

describe('Arrays - Filter', () => {
  it('should return a filtered item', () => {
    const array = [1, 2, 3, 4];

    function cb(item) {
      if (item % 2 === 0) return true;
      return false;
    }
    expect(arrayFunctions.filter(array, cb)).toEqual([2, 4])
  })
})

describe('Arrays - Flatten', () => {
  it('should return a flatten array', () => {
    const array = [
      [1, 2],
      [3], 4
    ];
    expect(arrayFunctions.flatten(array)).toEqual([1, 2, 3, 4])
  })
})
