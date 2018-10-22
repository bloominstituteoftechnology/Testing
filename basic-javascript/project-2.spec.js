const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {
  describe('getBiggest()', () => {
    it('should return x when x is larger', () => {
      const actual = funcs.getBiggest(6, 2);
      expect(actual).toBe(6);
    });

    it('should return y when y is larger', () => {
      const actual = funcs.getBiggest(-12, 0);
      expect(actual).toBe(0);
    });

    it('should return y when x and y are equal', () => {
      const actual = funcs.getBiggest(4, 4);
      expect(actual).toBe(4);
    });
  });

  describe('greeting()', () => {
    it('should return Hello when no language specified', () => {
      const actual = funcs.greeting();
      expect(actual).toBe('Hello!');
    });

    it('should return Guten Tag when language is German', () => {
      const actual = funcs.greeting('German');
      expect(actual).toBe('Guten Tag!');
    });

    it('should return Hola when language is Spanish', () => {
      const actual = funcs.greeting('Spanish');
      expect(actual).toBe('Hola!');
    });
  });

  describe('isTenOrFive()', () => {
    it('should return true when num = 10', () => {
      const actual = funcs.isTenOrFive(10);
      expect(actual).toBeTruthy();
    });

    it('should return true when num = 5', () => {
      const actual = funcs.isTenOrFive(5);
      expect(actual).toBeTruthy();
    });

    it('should return false if num is anything other than 10 or 5', () => {
      const actual = funcs.isTenOrFive(2);
      expect(actual).toBeFalsy();
    });
  });

  describe('isInRange()', () => {
    it('should return true when num is between 20 and 50', () => {
      const actual = funcs.isInRange(30);
      expect(actual).toBeTruthy();
    });

    it('should return false when num > 50', () => {
      const actual = funcs.isInRange(75);
      expect(actual).toBeFalsy();
    });

    it('should return false if num < 20', () => {
      const actual = funcs.isInRange(10);
      expect(actual).toBeFalsy();
    });
  });

  describe('isInteger()', () => {
    it('should return true if number is an integer', () => {
      const actual = funcs.isInteger(1);
      expect(actual).toBeTruthy();
    });

    it('should return false if number is not an integer', () => {
      const actual = funcs.isInteger(1.1);
      expect(actual).toBeFalsy();
    });
  });

  describe('fizzBuzz()', () => {
    it('should return fizzbuzz if number is divisible by 5 and 3', () => {
      const actual = funcs.fizzBuzz(15);
      expect(actual).toBe('fizzbuzz');
    });

    it('should return buzz if number is divible by 5 and not 3', () => {
      const actual = funcs.fizzBuzz(20);
      expect(actual).toBe('buzz');
    });

    it('should return fizz if number is divisible by 3 and not 5', () => {
      const actual = funcs.fizzBuzz(18);
      expect(actual).toBe('fizz');
    });
  });

  describe('isPrime()', () => {
    it('should return false if number is negative', () => {
      const actual = funcs.isPrime(-5);
      expect(actual).toBeFalsy();
    });

    it('should return false if number is 1', () => {
      const actual = funcs.isPrime(1);
      expect(actual).toBeFalsy();
    });

    it('should return false if number is 0', () => {
      const actual = funcs.isPrime(0);
      expect(actual).toBeFalsy();
    });

    it('should return false if number is divisible by any number in the range 2-number', () => {
      const actual = funcs.isPrime(8);
      expect(actual).toBeFalsy();
    });

    it('should return true if the number is not divisible by any number in the range 2-number', () => {
      const actual = funcs.isPrime(7);
      expect(actual).toBeTruthy();
    });
  });

  describe('returnFirst()', () => {
    it('should return the first item in the array', () => {
      const actual = funcs.returnFirst([
        'Spikeball',
        'Volleyball',
        'Basketball'
      ]);
      expect(actual).toBe('Spikeball');
    });
  });

  describe('returnLast()', () => {
    it('should return the last item in the array', () => {
      const actual = funcs.returnLast([
        'Spikeball',
        'Volleyball',
        'Basketball'
      ]);
      expect(actual).toBe('Basketball');
    });
  });

  describe('getArrayLength()', () => {
    it('should return the length of the array', () => {
      const actual = funcs.getArrayLength([
        'Spikeball',
        'Volleyball',
        'Basketball'
      ]);
      expect(actual).toBe(3);
    });

    it('should return 0 if passed an empty array', () => {
      const actual = funcs.getArrayLength([]);
      expect(actual).toBe(0);
    });
  });

  describe('incrementByOne()', () => {
    it('should return the items of the array incremented by one', () => {
      const actual = funcs.incrementByOne([1, 2, 3, 4, 5]);
      expect(actual).toEqual([2, 3, 4, 5, 6]);
    });
  });

  describe('addItemToArray()', () => {
    it('should add given item to end of given array', () => {
      const actual = funcs.addItemToArray([1, 2, 3, 4, 5], 6);
      expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('addItemToFront()', () => {
    it('should add given item to front of given array', () => {
      const actual = funcs.addItemToFront([1, 2, 3, 4, 5], 0);
      expect(actual).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });

  describe('addItemToArray()', () => {
    it('should add given item to end of given array', () => {
      const actual = funcs.addItemToArray([1, 2, 3, 4, 5], 6);
      expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('wordsToSentence()', () => {
    it('should turn words into a sentence', () => {
      const actual = funcs.wordsToSentence(['Hello', 'how', 'are', 'you']);
      expect(actual).toBe('Hello how are you');
    });
  });

  describe('contains()', () => {
    it('should return true if given item is contained in given array', () => {
      const actual = funcs.contains(
        ['Spikeball', 'Volleyball', 'Basketball'],
        'Spikeball'
      );
      expect(actual).toBeTruthy();
    });

    it('should return false if given item is not found in given array', () => {
      const actual = funcs.contains(
        ['Spikeball', 'Volleyball', 'Basketball'],
        'Baseball'
      );
      expect(actual).toBeFalsy();
    });
  });

  describe('addNumbers()', () => {
    it('should add all the numbers in the array', () => {
      const actual = funcs.addNumbers([1, 2, 3, 4, 5]);
      expect(actual).toEqual(15);
    });

    it('should return 0 if passed an empty array', () => {
      const actual = funcs.addNumbers([]);
      expect(actual).toEqual(0);
    });
  });

  describe('averageTestScore()', () => {
    it('should return the average of the numbers in the array', () => {
      const actual = funcs.averageTestScore([20, 50, 15, 15]);
      expect(actual).toEqual(25);
    });
  });

  describe('largestNumber()', () => {
    it('should return the largest number in an array', () => {
      const actual = funcs.largestNumber([10, 500, 5, 100]);
      expect(actual).toEqual(500);
    });

    it('should return 0 if passed an empty array', () => {
      const actual = funcs.largestNumber([]);
      expect(actual).toEqual(0);
    });
  });
});
