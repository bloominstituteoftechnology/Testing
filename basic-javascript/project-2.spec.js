const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {
  describe('jest', () => {
    test('should run tests', () => {
      // test all the things
    });

    it('should run tests using it() in addition to test()', () => {
      // Arrange : setup the world
      // Act : execute the code you're testing
      // Assert : check that it works
    });
  });

  describe('getBiggest()', () => {
    it('should get the biggest number', () => {
      const expected = 100;

      const actual = funcs.getBiggest(100, 10);

      expect(actual).toEqual(expected);
      expect(funcs.getBiggest(10, 100)).toEqual(expected);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.getBiggest('five', 'six');
      }).toThrow();
    });
  });

  describe('greeting()', () => {
    it('should return the greeting in the corresponding language provided', () => {
      const expected = 'Guten Tag!';

      const actual = funcs.greeting('German');

      expect(actual).toBe(expected);
    });
  });

  describe('isTenOrFive()', () => {
    it('should return true if number provided deep equals 10 or 5', () => {

      expect(funcs.isTenOrFive(5)).toEqual(true);
      expect(funcs.isTenOrFive(10)).toEqual(true);
      expect(funcs.isTenOrFive(15)).toEqual(false);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.isTenOrFive('ten');
      }).toThrow();
    });
  });

  describe('isInRange()', () => {
    it('should return true if number provided is less than 50 and greater than 20', () => {

      expect(funcs.isInRange(30)).toEqual(true);
      expect(funcs.isInRange(20)).toEqual(false);
      expect(funcs.isInRange(55)).toEqual(false);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.isInRange('forty');
      }).toThrow();
    });
  });

  describe('isInteger()', () => {
    it('should return true if number provided is deeply equal to the largest integer less than or equal to a itself', () => {

      expect(funcs.isInteger(30)).toBe(true);
      expect(funcs.isInteger(20.45)).toBe(false);
      expect(funcs.isInteger(-55.042)).toBe(false);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.isInteger('forty');
      }).toThrow();
    });
  });

  describe('fizzBuzz()', () => {
    it('should return fizzbuzz if number provided is divisible by 5 and 3. Return buzz if divisible by 5. Return fizz if divisible by 3', () => {

      expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
      expect(funcs.fizzBuzz(10)).toBe('buzz');
      expect(funcs.fizzBuzz(33)).toBe('fizz');
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.fizzBuzz('twenty');
      }).toThrow();
    });
  });

  describe('isPrime()', () => {
    it('should return true if number provided is a prime number. if not, return false.', () => {

      expect(funcs.isPrime(-5)).toBe(false);
      expect(funcs.isPrime(1)).toBe(false);
      expect(funcs.isPrime(0)).toBe(false);
      expect(funcs.isPrime(22)).toBe(false);
      expect(funcs.isPrime(3)).toBe(true);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        funcs.isPrime('three');
      }).toThrow();
    });
  });

  describe('returnFirst()', () => {
    it('should return the value in the 0th position in the array', () => {
      expect(funcs.returnFirst([10, 20, 30])).toBe(10);
      expect(funcs.returnFirst([5, 10, 15])).toBe(5);
    });
  });

  describe('returnLast()', () => {
    it('should return the value in the last position in the array', () => {
      expect(funcs.returnLast([10, 20, 30])).toBe(30);
      expect(funcs.returnLast([5, 10, 15])).toBe(15);
    });
  });

  describe('getArrayLength()', () => {
    it('should return the value in the last position in the array', () => {
      expect(funcs.getArrayLength([10, 20, 30])).toBe(3);
      expect(funcs.getArrayLength([5, 10, 15, 2879874, 25, 1, 0])).toBe(7);
    });
  });

  describe('incrementByOne()', () => {
    it('should return each value in the array incremented by 1', () => {
      expect(funcs.incrementByOne([10, 20, 30])).toEqual([11, 21, 31]);
      expect(funcs.incrementByOne([100, 1000, 10000, 100000, 1, 0])).toEqual([101, 1001, 10001, 100001, 2, 1]);
    });
  });
});