const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = funcs;

describe('project-2', () => {
  describe('getBiggest', () => {
    it('should return the largest value passed', () => {
      expect(getBiggest(1, 2)).toEqual(2);
    });
  });

  describe('greeting', () => {
    it('should return a greeting', () => {
      expect(greeting('German')).toEqual('Guten Tag!');
      expect(greeting('Spanish')).toEqual('Hola!');
      expect(greeting('Portuguese')).toEqual('Hello!');
    })
  });

  describe('isTenOrFive', () => {
    it('should return true if number is 10 or 5', () => {
      expect(isTenOrFive(10)).toBeTruthy();
      expect(isTenOrFive(5)).toBeTruthy();
      expect(isTenOrFive(1)).toBeFalsy();
    })
  });

  describe('inInRange', () => {
    it('should return true if value passed is between 21 and 49', () => {
      expect(isInRange(21)).toBeTruthy();
      expect(isInRange(49)).toBeTruthy();
      expect(isInRange(20)).toBeFalsy();
      expect(isInRange(50)).toBeFalsy();
    })
  });

  describe('isInteger', () => {
    it('should return true if integer passed is a whole number', () => {
      expect(isInteger(5)).toBeTruthy();
      expect(isInteger(5.01)).toBeFalsy();
    })
  });

  describe('fizzbuzz', () => {
    it('should return the appropriate fizzbuzz', () => {
      expect(fizzBuzz(5)).toEqual('buzz');
      expect(fizzBuzz(2)).toEqual(2);
    })
  });

  describe('isPrime', () => {
    it('should return true if number is prime', () => {
      expect(isPrime(11)).toBeTruthy();
    })
  });

  describe('returnFirst', () => {
    it('should return the first index of an array', () => {
      expect(returnFirst([1, 2, 3])).toEqual(1);
    });
  });

  describe('returnLast', () => {
    it('should return the last index of an array', () => {
      expect(returnLast([1, 2, 3])).toEqual(3);
    })
  });

  describe('getArrayLength', () => {
    it('should return the length of an array or string', () => {
      expect(getArrayLength([1, 2, 3])).toEqual(3);
      expect(getArrayLength('Hello')).toEqual(5);
    })
  });

  describe('incrementByOne', () => {
    it('should increment each index by one', () => {
      expect(incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    });
  });

  describe('addItemToArray', () => {
    it('should push new value into array', () => {
      expect(addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    })
  });

  describe('addItemToFront', () => {
    it('should add a new value to the beginning of an array', () => {
      expect(addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
    })
  });

  describe('wordsToSentence', () => {
    it('should return a sentence made up of an array of strings', () => {
      expect(wordsToSentence(['Hello', 'World!'])).toEqual('Hello World!');
    })
  });

  describe('contains', () => {
    it('should return true if item is found in an array', () => {
      expect(contains([1, 2, 3], 1)).toBeTruthy();
      expect(contains([1, 2, 3], 4)).toBeFalsy();
    })
  });

  describe('addNumbers', () => {
    it('should return the sum of an array of numbers', () => {
      expect(addNumbers([1, 2, 3])).toEqual(6);
    })
  });

  describe('averageTestScore', () => {
    it('should return the average of an array of numbers', () => {
      expect(averageTestScore([1, 2, 3])).toEqual(2);
    })
  });

  describe('largestNumber', () => {
    it('should return the largest number in an array of numbers', () => {
      expect(largestNumber([1, 2, 3])).toEqual(3);
    })
  });
})