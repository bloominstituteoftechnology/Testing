const arrayFunctions = require('./arrays');

// // we've gone ahead and gotten a start here for you,
// // except, for some reason, none of our current assertions are working.
// // first step is to make sure all these assertions work.
// // then make sure you have at least 2-3 more assertions for every function.
// // hint 1. - you need to pass data to the functions and get expected output.
// // hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
  	it('should return correct values', () => {
  		const map = arrayFunctions.map;
  		const cb = function(x){
  			return x + 1;
  		};
  		const expected = [2,3,4,5,6];
  		const actual = map([1,2,3,4,5], cb);
  		expect(actual).toEqual(expected);
  	});

    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  });

describe('each', () => {
  it('should return correct values', () => {
    const each = arrayFunctions.each;
    const cb = function(x, y) {
      return x + y;
    };
    const expected = [1,3,6,8];
    const actual = each([1,2,4,5], cb);
    expect(actual).toEqual(expected);
  });
  it('should be a function', () => {
    const each = arrayFunctions.each;
    expect(typeof each).toBe('function');
  });
});

describe('reduce', () => {
  it('should return the correct values', () => {
    const reduce = arrayFunctions.reduce;
     const arr = [10, 10];
     const cb = function(x, y){
       return x + y;
     };
    const expected = 20;
    const actual = reduce(arr, cb, arr.shift());
    expect(actual).toBe(expected);
  });
  it('should be a function', () => {
    const reduce = arrayFunctions.reduce;
    expect(typeof reduce).toBe('function');
  });
});

describe('find', () => {
  it('should return the correct value', () => {
    const find = arrayFunctions.find;
    const cb = function(x){
      if (x === 10){ return x}
    };
    const cb2 = function(x){
      if (x === 100){return x}
    };
    const expected1 = 10;
    const expected2 = undefined;
    const actual1 = arrayFunctions.find([2,3,4,5,10,2], cb);
    const actual2 = arrayFunctions.find([2,3,4,5,10,2], cb2);
    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });
  it('should be a function', () => {
    const find = arrayFunctions.find;
    expect(typeof find).toBe('function');
  });
});

describe('filter', () => {
  it('should return the correct value', () => {
  const filter = arrayFunctions.filter;
  const cb = function(x){
    if (x === 10){return 10}
  };
  const expected = [10, 10, 10];
  const actual = filter([20,10,14,20,10,10], cb);
  expect(actual).toEqual(expected);
  });
  it('should be a function', () => {
    const filter = arrayFunctions.filter;
    expect(typeof filter).toBe('function');
  });
});

describe('flatten', () => {
  it('should return the correct value', () => {
    const flatten = arrayFunctions.flatten;
    const expected = [1, 2, 3, 4];
    const actual = flatten([1, 2, [3, 4]]);
    expect(actual).toEqual(expected);
  });
  it('should be a function', () => {
    const flatten = arrayFunctions.flatten;
    expect(typeof flatten).toBe('function');
  });
});

});