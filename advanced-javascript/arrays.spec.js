const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', function() {
    it('should be a function', function() {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('returns value', function() {
      const map = arrayFunctions.map;
      expect(map([1,2,3], (item) => item + 1)).toEqual([2,3,4])
    });
  });

describe('reduce', function() {
  it('should be a function', function(){
    const reduce = arrayFunctions.reduce;
    expect(typeof reduce).toBe('function');
  });
  it('returns sum', function() {
    const reduce = arrayFunctions.reduce;
    expect(reduce([1,2,3], (memo, item) => memo + item)).toEqual(6)
  });
});

describe('find', function() {
  it('should be a function', function() {
  const find = arrayFunctions.find;
  expect(typeof find).toBe('function');
});
it ('returns found element', function() {
  const find = arrayFunctions.find;
  expect(find([0,1,2,3,], element => element === 1)).toEqual(1)
});
});

describe('filter', function() {
  it('should be a function', function() {
    const filter = arrayFunctions.filter;
    expect(typeof filter).toBe('function');
  });
  it('returns filtered element', function() {
    const filter = arrayFunctions.filter;
    expect(filter([1,2,3], (item => item === 1))).toEqual([1])
  });
});

describe('flatten', function() {
  it('should be a function', function() {
    const flatten = arrayFunctions.flatten;
    expect(typeof flatten).toBe('function');
  });
  it('returns flattened element', function() {
    const flatten = arrayFunctions.flatten;
    expect(flatten([1,[2,[3]],[4]])).toEqual([1,2,3,4])
  });
});
});
