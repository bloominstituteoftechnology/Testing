const funcs = require('./project-2');
const arr = ['modest', 'mouse', 'rocks'];
const NumArr = [21, 29, 42, 420];

describe('default', () => {});
it('Runs the tests for project-1 basicJs'), () => {};

describe('Function: getBiggest', () => {
  it('Should return the biggest of two numbers', () => {
    const expected = 13;
    const getBiggest = funcs.getBiggest;
    const actual = getBiggest(13, 1);
    expect(actual).toBe(expected);
  });
});

describe('Function: greeting', () => {
  it('Should return a greeting based on language', () => {
    const expected = 'Guten Tag!';
    const greeting = funcs.greeting;
    const actual = greeting('German');
    expect(actual).toBe(expected);
  });
});

describe('Function: isTenOrFive', () => {
  it('Should return if num is 10 or 5', () => {
    const expected = false;
    const isTenOrFive = funcs.isTenOrFive;
    const actual = isTenOrFive(13);
    expect(actual).toBe(expected);
  });
});

describe('Function: isInRange', () => {
  it('Should return true if number is within the range of 20-50', () => {
    const expected = false;
    const isInRange = funcs.isInRange;
    const actual = isInRange(13);
    expect(actual).toBe(expected);
  });
});

describe('Function: isInteger', () => {
  it('Should return true if number is an Integer', () => {
    const expected = false;
    const isInteger = funcs.isInteger;
    const actual = isInteger(4.42);
    expect(actual).toBe(expected);
  });
});

describe('Function: fizzBuzz', () => {
  it('Should return fizzbuzz if remainder of num is 0 once divided by 5 and 3, fizz/3, buzz/5', () => {
    const expected = 'fizzbuzz';
    const fizzBuzz = funcs.fizzBuzz;
    const actual = fizzBuzz(15);
    expect(actual).toBe(expected);
  });
});

describe('Function: isPrime', () => {
  it('Should return true if a number is prime', () => {
    const expected = true;
    const isPrime = funcs.isPrime;
    const actual = isPrime(29);
    expect(actual).toBe(expected);
  });
});

describe('function: returnFirst', () => {
  it('Should return the first index of an array [0]', () => {
    const expected = 'modest';
    const returnFirst = funcs.returnFirst;
    const actual = returnFirst(arr);
    expect(actual).toBe(expected);
  });
});

describe('function: returnLast', () => {
  it('Should return the last index of an array', () => {
    const expected = 'rocks';
    const returnLast = funcs.returnLast;
    const actual = returnLast(arr);
    expect(actual).toBe(expected);
  });
});

describe('function: getArrayLength', () => {
  it('Should get the # of indexes in the arr', () => {
    const expected = 3;
    const getArrayLength = funcs.getArrayLength;
    const actual = getArrayLength(arr);
    expect(actual).toBe(expected);
  });
});

describe('function: incrementByOne', () => {
  it('Should increment nums in arr by 1', () => {
    const expected = [22, 30, 43, 421];
    const incrementByOne = funcs.incrementByOne;
    const actual = incrementByOne(NumArr);
    expect(actual).toEqual(expected);
  });
});

describe('function: addItemToArray', () => {
  it('Should add an item to the end of the array', () => {
    const expected = ['modest', 'mouse', 'rocks', 'right?'];
    const addItemToArray = funcs.addItemToArray;
    const actual = addItemToArray(arr, 'right?');
    expect(actual).toEqual(expected);
  });
});
describe('function: addItemToFront', () => {
  it('Should add an item to the beginning of an array', () => {
    const expected = ['you know ', 'modest', 'mouse', 'rocks', 'right?'];
    const addItemToFront = funcs.addItemToFront;
    const actual = addItemToFront(arr, 'you know ');
    expect(actual).toEqual(expected);
  });
});

// HALP MEH
// ^^^^^^^^^^

describe('function: wordsToSentence', () => {
  it('Should concatenate the words into a sentence', () => {
    const expected = 'arr';
    const wordsToSentence = funcs.wordsToSentence;
    const actual = Array.isArray(arr);
    expect(actual).toBe(expect.any(Array));
  });
});

//words is an array

describe('function: contains', () => {
  it('Should return true if item is contained in arr', () => {
    const expected = true;
    const contains = funcs.contains;
    const actual = contains(arr, 'mouse');
    expect(actual).toBe(expected);
  });
});

// describe('function: ', () => {
// it('addNumbers', () => {
//   const expected = ;
//   const addNumbers = funcs.addNumbers
//   const actual = addNumbers()
//   expect(actual).toBe(expected)
// });
// });

// describe('function: ', () => {
// it('averageTestScore', () => {
//   const expected = ;
//   const averageTestScore = funcs.averageTestScore
//   const actual = averageTestScore()
//   expect(actual).toBe(expected)
// });
// });

// describe('function: largestNumber', () => {
// it('largestNumber', () => {
//   const expected = ;
//   const largestNumber = funcs.largestNumber
//   const actual = largestNumber()
//   expect(actual).toBe(expected)
// });
// });
