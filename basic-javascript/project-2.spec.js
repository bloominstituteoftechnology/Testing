const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {
  describe('getBiggest', () => {
    it('should return larger number', () => {
      const expected = 30;
      const actual = funcs.getBiggest(30, 20);
      expect(actual).toEqual(expected);
    });
  });

  describe('greeting', () => {
    it('should return greeting based on language', () => {
      const expected = 'Guten Tag!';
      const actual = funcs.greeting('German');
      expect(actual).toEqual(expected);
    });
    it('should return greeting based on language', () => {
      const expected = 'Hola!';
      const actual = funcs.greeting('Spanish');
      expect(actual).toEqual(expected);
    });
    it('should return greeting based on language', () => {
      const expected = 'Hello!';
      const actual = funcs.greeting('');
      expect(actual).toEqual(expected);
    });
  });

  describe('isTenOrFive', () => {
    it('should return true if num is 10 or 5', () => {
      const expected = true;
      const actual = funcs.isTenOrFive(10);
      expect(actual).toEqual(expected);
    });
    it('should return true if num is 10 or 5', () => {
      const expected = true;
      const actual = funcs.isTenOrFive(5);
      expect(actual).toEqual(expected);
    });
    it('should return false if num is not 10 or 5', () => {
      const expected = false;
      const actual = funcs.isTenOrFive(8);
      expect(actual).toEqual(expected);
    });
  });

  describe('isInRange', () => {
    it('should return true if num is between 20 and 50', () => {
      const expected = true;
      const actual = funcs.isInRange(40);
      expect(actual).toEqual(expected);
    });
    it('should return true if num is not between 20 and 50', () => {
      const expected = false;
      const actual = funcs.isInRange(19);
      expect(actual).toEqual(expected);
    });
    it('should return false if num is not between 20 and 50', () => {
      const expected = false;
      const actual = funcs.isInRange(51);
      expect(actual).toEqual(expected);
    });
  });

  describe('isInteger', () => {
    it('should return false if not an integer', () => {
      const expected = false;
      const actual = funcs.isInteger(30.8);
      expect(actual).toEqual(expected);
    });
    it('should return true if not an integer', () => {
      const expected = true;
      const actual = funcs.isInteger(30);
      expect(actual).toEqual(expected);
    });
  });

  describe('fizzBuzz', () => {
    it('should return "fizzBuzz" if divisible by 3 and 5', () => {
      const expected = 'fizzbuzz';
      const actual = funcs.fizzBuzz(30);
      expect(actual).toEqual(expected);
    });
    it('should return "fizz" if number is divisible by 3', () => {
      const expected = 'fizz';
      const actual = funcs.fizzBuzz(12);
      expect(actual).toEqual(expected);
    });
    it('should return "buzz" if number is divisible by 5', () => {
      const expected = 'buzz';
      const actual = funcs.fizzBuzz(10);
      expect(actual).toEqual(expected);
    });
    it('should return number if not divisible by 3 or 5', () => {
      const expected = 7;
      const actual = funcs.fizzBuzz(7);
      expect(actual).toEqual(expected);
    });
  });

  describe('isPrime', () => {
    it('should true if number is prime else return false', () => {
      const expected = true;
      const actual = funcs.isPrime(11);
      expect(actual).toEqual(expected);
    });
    it('should true if number is prime else return false', () => {
      const expected = true;
      const actual = funcs.isPrime(7);
      expect(actual).toEqual(expected);
    });
    it('should true if number is prime else return false', () => {
      const expected = false;
      const actual = funcs.isPrime(10);
      expect(actual).toEqual(expected);
    });
    it('should true if number is prime else return false', () => {
      const expected = true;
      const actual = funcs.isPrime(23);
      expect(actual).toEqual(expected);
    });
  });

  describe('returnFirst', () => {
    it('should return first element in array', () => {
      const expected = 30;
      const actual = funcs.returnFirst([30, 20, 'first', 43]);
      expect(actual).toEqual(expected);
    });
  });

  describe('returnLast', () => {
    it('should return last element in array', () => {
      const expected = 43;
      const actual = funcs.returnLast([30, 20, 'first', 43]);
      expect(actual).toEqual(expected);
    });
  });

  describe('getArrayLength', () => {
    it('should return find length of array', () => {
      const expected = 5;
      const actual = funcs.getArrayLength('Hello');
      expect(actual).toEqual(expected);
    });
  });

  describe('incrementByOne', () => {
    it('should return increment all numbers in array by one', () => {
      const expected = [12, 35, 123, 454];
      const actual = funcs.incrementByOne([11, 34, 122, 453]);
      expect(actual).toEqual(expected);
    });
  });

  describe('addItemToArray', () => {
    it('should add item to end of array', () => {
      const expected = [12, 35, 123, 453];
      const actual = funcs.addItemToArray([12, 35, 123], 453);
      expect(actual).toEqual(expected);
    });
  });

  describe('wordsToSentence', () => {
    it('should return a string combining all words in an array', () => {
      const expected = 'The cow jumped over the moon';
      const actual = funcs.wordsToSentence([
        'The',
        'cow',
        'jumped',
        'over',
        'the',
        'moon',
      ]);
      expect(actual).toEqual(expected);
    });
  });

  describe('contains', () => {
    it('should return true if array contains item', () => {
      const expected = true;
      const actual = funcs.contains([11, 34, 122, 453], 11);
      expect(actual).toEqual(expected);
    });
    it("should return false if array doesn't contain item", () => {
      const expected = false;
      const actual = funcs.contains([11, 34, 122, 453], 113);
      expect(actual).toEqual(expected);
    });
  });

  describe('addNumbers', () => {
    it('should return sum of all numbers in array', () => {
      const expected = 620;
      const actual = funcs.addNumbers([11, 34, 122, 453]);
      expect(actual).toEqual(expected);
    });
  });

  describe('averageTestScore', () => {
    it('should return average of all numbers in array', () => {
      const expected = 53;
      const actual = funcs.averageTestScore([11, 34, 90, 77]);
      expect(actual).toEqual(expected);
    });
  });

  describe('largestNumber', () => {
    it('should return largest number in array', () => {
      const expected = 453;
      const actual = funcs.largestNumber([11, 34, 122, 453]);
      expect(actual).toEqual(expected);
    });
  });
});
