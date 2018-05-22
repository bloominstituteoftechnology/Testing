const arrayFunctions = require('./arrays');

const nums = {
  first: [1, 2, 3, 4, 5, 6],
  second: [10, 20, 30, 40, 50, 60]
};

const myNums = [1, 2, 3, 4, 5];

const multiplyByTen = num => { //PASSES
  return num * 10;
};

const add = (x, y) => {   //PASSED
  return x + y;
};

const lessThanTwo = (num) => {
  if (num < 2 && num > 0) {
    return true;
  } else {
    return false;
  }
}

const nestedArr = [1, 2, 3, [4, [5, 6]]];

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.


describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  });
});

describe('each function', () => {   //PASSED
  it('should be a function', () => {
    //arrange
    const each = arrayFunctions.each;

    //act
    const eachArray = each(nums.first, multiplyByTen);
    let myArr = [];
    each(nums.first, (element) => {myArr.push(element)});

    //assert
    expect(typeof each).toBe('function');
    expect(myArr).toEqual(nums.first);
  })
})

describe('map function', () => {
  it('should map over an array, and produce a new array', () => {
    //arrange
    const map = arrayFunctions.map;

    //act
    const mappedArr = map(nums.first, multiplyByTen);

    //assert
    expect(mappedArr).toEqual(nums.second);
    expect(typeof map).toBe('function');

  })
})

describe('reduce function', () => {   //PASSED
  it('should reduce an array of numbers', () => {
    //arrange
    const reduce = arrayFunctions.reduce;

    //act
    const reducedArr = reduce(nums.first, add);

    //assert
    expect(reducedArr).toEqual(21);
    expect(typeof reduce).toBe('function');
  })
})

describe('find function', () => {   //PASSED
  it('should return item if found, or undefined if not', () => {
    //arrange
    const find = arrayFunctions.find;

    //act
    const found = find([1, 2, 4, 5, 7], myVal => myVal === 4);
    const undefinedVal = find([1, 2, 3, 4], secondVal => secondVal === 8);


    //assert
    expect(found).toBe(4);
    expect(undefinedVal).toBe(undefined);
    expect(typeof find).toBe('function');
  })
})

describe('filter function', () => {     //PASSED
  it('should filter specific elements', () => {
    //arrange
    const filter = arrayFunctions.filter;

    //act
    const filtered = filter(myNums, lessThanTwo);

    //assert
    expect(filtered).toEqual([1]);
    expect(typeof filter).toBe('function');
  })
})

describe('flatten function', () => {
  it('should flatten an array', () => {
    //arrange
    const flatten = arrayFunctions.flatten;

    //act
    const flattened = flatten(nestedArr);

    expect(flattened).toEqual([1, 2, 3, 4, 5, 6]);
    expect(typeof flatten).toBe('function');
  })
})
