const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
  it('should return the larger of the 2 numbers passed', () => {
    expect(funcs.getBiggest(1, 2)).toBe(2);
    expect(funcs.getBiggest(4 , 3)).toBe(4);
    expect(funcs.getBiggest(3, 3)).toBe(3);
  })
})

describe('greeting', () => {
  it('should return the greeting in the passed in language', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('')).toBe('Hello!');
  })
})

describe('isTenOrFive', () => {
  it('should evaluate if the number passed is 10 or 5', () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(7)).toBe(false);
    expect(funcs.isTenOrFive(-10)).toBe(false);
    expect(funcs.isTenOrFive(-5)).toBe(false);
  })
})

describe('isInRange', () => {
  it('should evaluate if the passes in number is greater than 20 but less than 50', () => {
    expect(funcs.isInRange(35)).toBe(true);
    expect(funcs.isInRange(20)).toBe(false);
    expect(funcs.isInRange(50)).toBe(false);
  })
})

describe('fizzBuzz', () => {
  it('should return fizzbuzz if the passed in number is evenly divisible by both 5 and 3, return fizz if the number is only evenly divisible by 5, return buzz if the number is only evenly divisible by 3, return the number if not evenly divisble by either 5 or 3', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(10)).toBe('buzz');
    expect(funcs.fizzBuzz(9)).toBe('fizz');
    expect(funcs.fizzBuzz(4)).toBe(4);
  })
})

describe('isPrime', () => {
  it('should describe is the passed in number is Prime', () => {
    expect(funcs.isPrime(7)).toBe(true);
    expect(funcs.isPrime(97)).toBe(true);
    expect(funcs.isPrime(8)).toBe(false);
    expect(funcs.isPrime(-7)).toBe(false);
    expect(funcs.isPrime(1)).toBe(false);
    expect(funcs.isPrime(0)).toBe(false);
  })
})

describe('returnFirst', () => {
  it('should return the first item of the passed in array', () => {
    expect(funcs.returnFirst([1, 2])).toBe(1);
    expect(funcs.returnFirst([0])).toBe(0);
    expect(funcs.returnFirst([])).toBe(undefined);
  })
})

describe('returnLast', () => {
  it('should return the last item of the passed in array', () => {
    expect(funcs.returnLast([1, 2])).toBe(2);
    expect(funcs.returnLast([1])).toBe(1);
    expect(funcs.returnLast([])).toBe(undefined);
  })
})

describe('getArrayLength', () => {
  it('should return the length of the passed in array', () => {
    expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
    expect(funcs.getArrayLength([1])).toBe(1);
    expect(funcs.getArrayLength([])).toBe(0);
  })
})

describe('incrementByOne', () => {
  it('should increment each number in the passed in array by one', () => {
    expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    expect(funcs.incrementByOne([-3, -2, -1])).toEqual([-2, -1, 0]);
  })
})

describe('addItemToArray', () => {
  it('should add the passed in item to the end of the passed in array', () => {
    expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    expect(funcs.addItemToArray([-3, -2, -1], 0)).toEqual([-3, -2, -1, 0]);
  })
})

describe('addItemToFront', () => {
  it('should add the passed in item to the front of the passed in array', () => {
    expect(funcs.addItemToFront([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
    expect(funcs.addItemToFront([-2, -1, 0], -3)).toEqual([-3, -2, -1, 0]);
  })
})

describe('wordsToSentence', () => {
  it('should concatenate the passed in array of strings into a single string', () => {
    expect(funcs.wordsToSentence(['Hello', 'World'])).toBe('Hello World');

  })
})

describe('contains', () => {
  it('should return true if the passed in item is contained in the passed in array', () => {
    expect(funcs.contains([1, 2, 3], 2)).toBe(true);
    expect(funcs.contains([1, 2, 3], 4)).toBe(false);
  })
})

describe('addNumbers', () => {
  it('should return the sum of all numbers in the passed in array', () => {
    expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
    expect(funcs.addNumbers([-3, -2, -1])).toEqual(-6);
  })
})

describe('averageTestScore', () => {
  it('should return the average of all numbers in the passed in array', () => {
    expect(funcs.averageTestScore([100, 90, 80])).toEqual(90);
  })
})

describe('largestNumber', () => {
  it('should return the largest number in the passed in array', () => {
    expect(funcs.largestNumber([1, 3, 2])).toEqual(3);
  })
})