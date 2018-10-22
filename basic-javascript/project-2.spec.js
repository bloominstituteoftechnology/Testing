const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {
  describe('getBiggest()', () => {
    it('should return the bigger number', () => {
      expect(funcs.getBiggest(2, 3)).toEqual(3);
    })
  })
  describe('greeting()', () => {
    it('should respond hello with appropriate language', () => {
      expect(funcs.greeting('German')).toEqual("Guten Tag!");
      expect(funcs.greeting('Spanish')).toEqual("Hola!");
      expect(funcs.greeting()).toEqual("Hello!");
    })
  })
  describe('isTenOrFive()', () => {
    it('should return true if number is 5 or 10', () => {
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    })
  })
  describe('isInRange()', () => {
    it('should return a number more than 20 but less than 50', () => {
      expect(funcs.isInRange(35)).toBeTruthy()
    })
  })
  describe('isInteger()', () => {
    it('should confirm if number is an integer', () => {
      expect(funcs.isInteger(2)).toBeTruthy()
    })
  })
  describe('fizzBuzz()', () => {
    it('should confirm if number is divisibly by 5 or 3', () => {
      expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz')
      expect(funcs.fizzBuzz(10)).toEqual('buzz')
      expect(funcs.fizzBuzz(9)).toEqual('fizz')
    })
  })
  describe('isPrime()', () => {
    it('should determine if a number is prime', () => {
      expect(funcs.isPrime(-1)).toBeFalsy()
      expect(funcs.isPrime(1 || 0)).toBeFalsy()
      expect(funcs.isPrime(6)).toBeFalsy()
      expect(funcs.isPrime()).toBeTruthy()
    })
  })
  describe('returnFirst()', () => {
    it('should return the first number in the array', () => {
      expect(funcs.returnFirst([1, 2, 3])).toEqual(1);
    })
  })
  describe('returnLast()', () => {
    it('', () => {
      expect(funcs.returnLast([1, 2, 3])).toEqual(3);
    })
  })
  describe('getArrayLength()', () => {
    it('should return the length of the array', () => {
      expect(funcs.getArrayLength([1, 2, 3])).toEqual(3);
    })
  })
  describe('incrementByOne()', () => {
    it('should increment each item in the array by 1', () => {
      expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    })
  })
  describe('addItemToArray()', () => {
    it('should push a new item to the array', () => {
      expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    })
  })
  describe('addItemToFront()', () => {
    it('should unshift a new item to the array', () => {
      expect(funcs.addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
    })
  })
  describe('wordsToSentence()', () => {
    it('should concatenate new words to current string', () => {
      expect(funcs.wordsToSentence(['This', 'is', 'a', 'new', 'string'])).toEqual("This is a new string");
    })
  })
  describe('contains()', () => {
    it('should return true if item exists an array', () => {
      expect(funcs.contains([1, 2, 3], 2)).toBeTruthy();
    })
  })
  describe('addNumbers()', () => {
    it('should sum of all numbers together', () => {
      expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
    })
  })
  describe('averageTestScore()', () => {
    it('should find the average test scores', () => {
      expect(funcs.averageTestScore([1, 1, 2, 2, 2, 3, 3])).toEqual(2);
    })
  })
  describe('largestNumber()', () => {
    it('should return the largest integer', () => {
      expect(funcs.largestNumber([1, 30, 83, 52])).toEqual(83);
    })
  })
})