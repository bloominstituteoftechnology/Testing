const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  // Map:
  describe('map', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should return an array being passed an array', () => {
      let actual = typeof [10, 20, 30].map(e => e + 1)
      expect(actual).toBe('object');
    });
    it('should return an array being passed an array #2', () => {
      let actual = [10, 20, 30].map(e => e + 1)
      expect(actual).toHaveLength(3);
    });
  });
  // Filter: 
  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(typeof filter).toBe('function')
    })
    it('should return an array being passed an array', () => {
      let actual = typeof [10, 20, 30].filter(e => e + 1)
      expect(actual).toBe('object');
    });
    it('Should return an array with length of one', () => {
      let actual = [10, 20, 30].filter(e => e === 20)
      expect(actual).toHaveLength(1)
    })
  });
  // ForEach
  describe('each', () => {
    const each = arrayFunctions.each;
    let newArr = []
    it('should be a function', () => {
      expect(typeof each).toBe('function')
    })
    it('should return undefined', () => {
      let actual = each([10, 20, 30], e => e + 1)
      expect(actual).toBe(undefined);
    });
    it('should increment indices of newArr by 1', () => {
      each([10, 20, 30], e => {
        newArr.push(e + 1)
      })
      expect(newArr).toEqual([11, 21, 31]);
    });
  });
  // Reduce
  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });
    it('should return a number if passed array of numbers', () => {
      let expected = "number"
      let actual = typeof reduce([10, 20, 30], (accum, current) => accum + current)
      expect(actual).toBe(expected);
    });
    it('should return 60 if passed [10, 20, 30]', () => {
      let expected = 60
      let actual = reduce([10, 20, 30], (accum, current) => accum + current)
      expect(actual).toBe(expected);
    });
    it('should return a string if passed array of strings / mix of strings + numbers', () => {
      let expected = "string"
      let actual = typeof reduce(["10", "20", "30"], (accum, current) => accum + current)
      expect(actual).toBe(expected);
    });
    it('should return "102030" when passed ["10", "20", "30"]', () => {
      let expected = "102030"
      let actual = reduce(["10", "20", "30"], (accum, current) => accum + current)
      expect(actual).toBe(expected);
    });
  })
  // find
  describe('find', () => {
    const find = arrayFunctions.find
    it('should return a string when used on an array of strings', () => {
      let expected = "string"
      let actual = typeof find(["10", "200", "30"], e => e.length === 3)
      expect(actual).toBe(expected);
    });
    it('should return "200" when passed ["10", "200", "30"]', () => {
      let expected = "200"
      let actual = find(["10", "200", "30"], e => e.length === 3)
      expect(actual).toBe(expected);
    });
    it('should return a number when passed  [10, 200, 30]', () => {
      let expected = "number"
      let actual = typeof find([10, 200, 30], e => e > 50)
      expect(actual).toBe(expected);
    });
    it('should return 200 when passed [10, 200, 30,80] && looking for a number > 50', () => {
      let expected = 200
      let actual = find([10, 200, 30, 80], e => e > 50)
      expect(actual).toBe(expected);
    });
  })
  // flatten
  describe('flatten', () => {
    const flatten = arrayFunctions.flatten
    it('should be a function', () => {
      expect(typeof flatten).toBe('function');
    });
    it('should return an array being passed an array', () => {
      let actual = typeof flatten([10, 20, 30])
      expect(actual).toBe('object');
    });
    it('Should return an array with length of three', () => {
      let actual = flatten([10, 20, 30])
      expect(actual).toHaveLength(3)
    })
    it('should return an array with length of 4 when passed [10, 20, [1,2]]', () => {
      let actual = flatten([10, 20, [1, 2]])
      expect(actual).toHaveLength(4)
    })
  })
});
