const funcs = require('./project-2');

describe.skip('project-2', () => {
  describe('getBiggest', () => {
    it('should return the biggest number', () => {
      expect(funcs.getBiggest(20, 12)).toBe(20);
    });
  
    it('should return NaN if NaN', () => {
      expect(funcs.getBiggest(20, 'who')).toBe(NaN);
    });
  });
  
  describe('greeting', () => {
    it('should return the correct greeting', () => {
      expect(funcs.greeting('German')).toBe("Guten Tag!");
      expect(funcs.greeting('Spanish')).toBe("Hola!");
    });
  
    it('should return the default if no other greeting is found', () => {
      expect(funcs.greeting('en')).toBe("Hello!");
      expect(funcs.greeting(12)).toBe("Hello!");
    });
  });
  
  describe('isTenOrFive', () => {
    it('should return true if num is ten or five', () => {
      expect(funcs.isTenOrFive(10)).toBe(true);
      expect(funcs.isTenOrFive(5)).toBe(true);
    });
  
    it('should return false if num is not ten or five', () => {
      expect(funcs.isTenOrFive(200)).toBe(false);
      expect(funcs.isTenOrFive(15)).toBe(false);
    });
  });
  
  describe('isInRange', () => {
    it('should return true if number is less than 50 and greater than 20', () => {
      expect(funcs.isInRange(40)).toBe(true);
    });
  
    it('should return false if number isn\'t less than 50 and greater than 20', () => {
      expect(funcs.isInRange(20)).toBe(false);
    });
  });
  
  describe('isInteger', () => {
    it('should return true if integer', () => {
      expect(funcs.isInteger(20)).toBe(true);
    });
  
    it('should return false if not integer', () => {
      expect(funcs.isInteger(20.502)).toBe(false);
    });
  });
  
  describe('fizzBuzz', () => {
    it('should return fizzbuzz if divisible by 15', () => {
      expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
    });
  
    it('should return fizzbuzz if divisible by 5', () => {
      expect(funcs.fizzBuzz(10)).toBe('buzz');
    });
  
    it('should return fizzbuzz if divisible by 3', () => {
      expect(funcs.fizzBuzz(6)).toBe('fizz');
    });
  
    it('should return the number if not divisble by 5 or 3', () => {
      expect(funcs.fizzBuzz(31)).toBe(31);
    });
  
    it('should return input if NaN', () => {
      expect(funcs.fizzBuzz('hello')).toBe('hello');
      expect(funcs.fizzBuzz('a')).toBe('a');
      expect(funcs.fizzBuzz([ 9, 12, 3 ])).toEqual([ 9, 12, 3 ]);
    });
  });
  
  describe('isPrime', () => {
    it('should return true if num is prime', () => {
      expect(funcs.isPrime(11)).toBe(true);
    });
  
    it('should return false if num is not prime', () => {
      expect(funcs.isPrime(10)).toBe(false);
    });
  
    it('should return NaN if not a num', () => {
      expect(funcs.isPrime('hello')).toBe(NaN);
    });
  });
  
  describe('returnFirst', () => {
    it('should return the first element of the given array', () => {
      expect(funcs.returnFirst([ 20, 12 ])).toBe(20);
    });
  
    it('should return undefined if no elements', () => {
      expect(funcs.returnFirst([])).toBe(undefined);
    });
  });
  
  describe('returnLast', () => {
    it('should return the last element of the given array', () => {
      expect(funcs.returnLast([ 20, 12 ])).toBe(12);
    });
  
    it('should return undefined if no elements', () => {
      expect(funcs.returnLast([])).toBe(undefined);
    });
  });
  
  describe('getArrayLength', () => {
    it('should return length of the array', () => {
      expect(funcs.getArrayLength([ 20, 12 ])).toBe(2);
      expect(funcs.getArrayLength([])).toBe(0);
    });
  
    it('should return -1 if no array is given', () => {
      expect(funcs.getArrayLength('hello')).toBe(-1);
    });
  });
  
  describe('incrementByOne', () => {
    it('should increment every element of the array by one', () => {
      expect(funcs.incrementByOne([ 20, 12 ])).toEqual([ 21, 13 ]);
    });
  
    it('should return an empty array if given one', () => {
      expect(funcs.incrementByOne([])).toEqual([]);
    });
  
    it('should return an input if given non-array', () => {
      expect(funcs.incrementByOne({ test: 2 })).toEqual({ test: 2 });
    });
  });
  
  describe('addItemToArray', () => {
    it('should add the given item to the given arr', () => {
      expect(funcs.addItemToArray([ 20, 12 ], [ 2 ])).toEqual([ 20, 12, [ 2 ] ]);
    });
  
    it('should not add anything if no item is given', () => {
      expect(funcs.addItemToArray([ 20, 12 ])).toEqual([ 20, 12 ]);
    });
  });
  
  describe('addItemToFront', () => {
    it('should add the given item to the front of the given arr', () => {
      expect(funcs.addItemToFront([ 20, 12 ], [ 2 ] )).toEqual([ [ 2 ], 20, 12]);
    });
  
    it('should not add anything if no item is given', () => {
      expect(funcs.addItemToFront([ 20, 12 ])).toEqual([ 20, 12 ]);
    });
  });
  
  describe('wordsToSentence', () => {
    it('should return the words joined into a string', () => {
      expect(funcs.wordsToSentence([ 'Hello', 'my', 'good', 'friends' ]))
        .toBe('Hello my good friends.');
    });
  });
  
  describe('contains', () => {
    it('should return true if item is in arr', () => {
      expect(funcs.contains([ 20, 12 ], 12)).toBe(true);
    });
  
    it('should return false if item isn\'t arr', () => {
      expect(funcs.contains([ 20, 12 ], 200)).toBe(false);
    });
  });
  
  describe('addNumbers', () => {
    it('should return the sum of the number arr', () => {
      expect(funcs.addNumbers([ 20, 12 ])).toBe(32);
    });
  
    it('should return 0 if no elements or arr given', () => {
      expect(funcs.addNumbers([])).toBe(0);
      expect(funcs.addNumbers('')).toBe(0);
    });
  });
  
  describe('averageTestScore', () => {
    it('should return the test score average', () => {
      expect(funcs.averageTestScore([ 20, 12 ])).toBe(16);
      expect(funcs.averageTestScore([ 2, 1, 3 ])).toBe(2);
    });
  });
  
  describe('largestNumber', () => {
    it('should return the largest number in the given arr', () => {
      expect(funcs.largestNumber([ 20, 12 ])).toBe(20);
    });
  
    it('should return 0 given no nums', () => {
      expect(funcs.largestNumber([ 'hello', 'hi' ])).toBe(0);
    });
  });
});
