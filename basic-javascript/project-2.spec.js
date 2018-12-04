const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {
  describe('getBiggest()', () => {
    it('should return biggest number', () => {
      expect(funcs.getBiggest(4, 5)).toBe(5);
      expect(funcs.getBiggest(5, 5)).toBe(5);
      expect(funcs.getBiggest(5, 4)).toBe(5);
    });
  });
  describe('greeting()', () => {
    it('should return proper greeting', () => {
      expect(funcs.greeting('German')).toBe('Guten Tag!');
      expect(funcs.greeting('Spanish')).toBe('Hola!');
      expect(funcs.greeting('Elvish')).toBe('Hello!');
    });
  });
  describe('isTenOrFive()', () => {
    it('should return true if 10 || 5', () => {
      expect(funcs.isTenOrFive(10)).toBe(true);
      expect(funcs.isTenOrFive(5)).toBe(true);
    });
    it('should return false if not 10 || 5', () => {
      expect(funcs.isTenOrFive(4)).toBe(false);
    });
  });
  describe('isInRange()', () => {
    it('should return true if in betweeen 20 and 50', () => {
      expect(funcs.isInRange(40)).toBe(true);
    });
    it('should return false if not between 20 and 50', () => {
      expect(funcs.isInRange(10)).toBe(false);
      expect(funcs.isInRange(51)).toBe(false);
    });
  });
  describe('isInteger()', () => {
    it('should return true if integer', () => {
      expect(funcs.isInteger(40)).toBe(true);
    });
    it('should return false if a float', () => {
      expect(funcs.isInteger(51.5)).toBe(false);
    });
    it('should return false if a string', () => {
      expect(funcs.isInteger('10')).toBe(false);
    });
  });
  describe('fizzBuzz()', () => {
    it('should return fizzbuzz', () => {
      expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return fizz', () => {
      expect(funcs.fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz', () => {
      expect(funcs.fizzBuzz(10)).toBe('buzz');
    });
    it('should return value if not divisable by 3 or 5', () => {
      expect(funcs.fizzBuzz(2)).toBe(2);
    });
  });
  describe('isPrime()', () => {
    it('should return false if less than 0', () => {
      expect(funcs.isPrime(-1)).toBeFalsy();
    });
    it('should return false if 0 or 1', () => {
      expect(funcs.isPrime(0)).toBeFalsy();
      expect(funcs.isPrime(1)).toBeFalsy();
    });
    it('should return false if remander === 0', () => {
      expect(funcs.isPrime(10)).toBeFalsy();
    });
    it('should return true if only divisible by 1 and itself', () => {
      expect(funcs.isPrime(3)).toBeTruthy();
    });
  });
  describe('returnFirst()', () => {
    it('should return first item in array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(funcs.returnFirst(arr)).toBe(arr[0]);
    });
  });
  describe('returnLast()', () => {
    it('should return last item in array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(funcs.returnLast(arr)).toBe(arr[arr.length - 1]);
    });
  });
  describe('getArrayLength()', () => {
    it('should return array length', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(funcs.getArrayLength(arr)).toBe(arr.length);
    });
  });
  describe('incrementByOne()', () => {
    it('should return array with one more value', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = [2, 3, 4, 5, 6];
      expect(funcs.incrementByOne(arr)).toEqual(result);
    });
  });
  describe('addItemToArray()', () => {
    it('should return array with item added to end', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = [1, 2, 3, 4, 5, 'item'];
      expect(funcs.addItemToArray(arr, 'item')).toEqual(result);
    });
  });
  describe('addItemToFront()', () => {
    it('should return array with item added to front', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = ['item', 1, 2, 3, 4, 5];
      expect(funcs.addItemToFront(arr, 'item')).toEqual(result);
    });
  });
  describe('wordsToSentence()', () => {
    it('should return a sentence from array', () => {
      let sentence = ['This', 'is', 'a', 'sentence'];
      expect(funcs.wordsToSentence(sentence)).toBe('This is a sentence');
    });
  });
  describe('contains()', () => {
    it('should return true if item in array', () => {
      let sentence = ['This', 'is', 'a', 'sentence'];
      let item = 'is';
      expect(funcs.contains(sentence, item)).toBeTruthy();
    });
    it('should return false if item is not in array', () => {
      let sentence = ['This', 'is', 'a', 'sentence'];
      let item = 'that';
      expect(funcs.contains(sentence, item)).toBeFalsy();
    });
  });
  describe('addNumbers()', () => {
    it('should return sum of numbers', () => {
      let numbers = [1, 2, 3, 4, 5];
      expect(funcs.addNumbers(numbers)).toBe(15);
    });
  });
  describe('averageTestScore()', () => {
    it('should return average test score', () => {
      let numbers = [50, 80, 90, 65, 50];
      expect(funcs.averageTestScore(numbers)).toBe(67);
    });
  });
  describe('largestNumber()', () => {
    it('should return largest number', () => {
      let numbers = [50, 80, 90, 65, 50];
      expect(funcs.largestNumber(numbers)).toBe(90);
    });
  });
});
