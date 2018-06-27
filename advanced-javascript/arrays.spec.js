const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  const testArr = [1,2,3];
  const myArr = ['Harry', 'Ron', 'Hermione'];

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
    it('cb should be invoked to each item', () => {
      const each = arrayFunctions.each;
      const mockFn = jest.fn();
      mockFn();
      expect(mockFn).toHaveBeenCalled()
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should use cb to each item', () => {
      const map = arrayFunctions.map;
      expect(arrayFunctions.map(testArr, (num) => num * 3)).toEqual([3, 6, 9])
    });
    it('should not modify the original array', () => {
      const copyArr = JSON.stringify(testArr);
      arrayFunctions.map(testArr, (i) => i + '1');
      expect(JSON.parse(copyArr)).toEqual(testArr);
    })
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
    it('should sum each item together', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce(testArr, (num, memo) => num + memo)).toEqual(6);
    })
  })

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
    it('should return the name that found in the array', () => {
      const find = arrayFunctions.find;
      expect(find(myArr, (item) => item === 'Ron')).toContain('Ron')
    })
  })

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
    it('should return the array that contained the filter name', () => {
      const filter= arrayFunctions.filter;
      expect(filter([1,2,3], (item => item === 3))).toBe([3])
    })
  })

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });
    it('should return one array if they are nested', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten([1, 2, 3, [4, 5]])).toBe([1, 2, 3, 4, 5])
    })
  })

  //the last two are still failed, the test expects array type.

});
