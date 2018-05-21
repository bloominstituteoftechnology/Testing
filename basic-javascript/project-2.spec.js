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
  } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest(x, y)', function() {
    it('should return x if it is larger than y', function() {
      expect(getBiggest(10, 5)).toBe(10);
    });
    it('should return y if it is larger than x', function() {
      expect(getBiggest(50, 100)).toBe(100);
    });
    it('should return either one if they are the same', function() {
      expect(getBiggest(1000, 1000)).toBe(1000);
    });
  });
  
  describe('greeting(language)', function() {
    it('should return \'Guten Tag!\' for German', function() {
      expect(greeting('German')).toBe('Guten Tag!');
    });
    it('should return \'Hola!\' for Spanish', function() {
      expect(greeting('Spanish')).toBe('Hola!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', function() {
      expect(greeting('French')).toBe('Hello!');
      expect(greeting()).toBe('Hello!');
    });
  });
  
  describe('isTenOrFive(num)', function() {
    it('should return true if num is 10 or 5', function() {
      expect(isTenOrFive(10)).toBe(true);
      expect(isTenOrFive(5)).toBe(true);
    });
    it('should return false if num is not 10 or 5', function() {
      expect(isTenOrFive(11)).toBe(false);
      expect(isTenOrFive(6)).toBe(false);
      expect(isTenOrFive(0)).toBe(false);
      expect(isTenOrFive(5.01)).toBe(false);
    });
  });
  
  describe('isInRange(num)', function() {
    it('should return true if num is inside range', function() {
      expect(isInRange(35.5)).toBe(true);
      expect(isInRange(40)).toBe(true);
      expect(isInRange(49)).toBe(true);
      expect(isInRange(21)).toBe(true);
    });
    it('should return false if outside of range', function() {
      expect(isInRange(10)).toBe(false);
      expect(isInRange(20)).toBe(false);
      expect(isInRange(50)).toBe(false);
      expect(isInRange(100)).toBe(false);
    });
  });
  
  describe('isInteger(num)', function() {
    it('should return true if num is 5', function() {
      expect(isInteger(5)).toBe(true);
    });
    it('should return false if num is 0.5', function() {
      expect(isInteger(0.5)).toBe(false);
    });
    it('should return true if num is -20', function() {
      expect(isInteger(-20)).toBe(true);
    });
    it('should return true for 0', function() {
      expect(isInteger(0)).toBe(true);
    });
  });
  
  describe('fizzBuzz(num)', function() {
    it('should return fizz if divisible by 3', function() {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', function() {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', function() {
      expect(fizzBuzz(4)).toBe(4);
    });
  });
  
  describe('isPrime(num)', function() {
    it('should return true if num is prime', function() {
      expect(isPrime(7)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });
    it('should return false if num is not prime', function() {
      expect(isPrime(10)).toBe(false);
      expect(isPrime(100)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('returnFirst(arr)', function() {
    it('should return first', function() {
      expect(returnFirst([1, 2, 3])).toBe(1);
    });
});
 describe('returnLast(arr)', function() {
    it('should return last', function() {
      expect(returnLast([1, 2, 3])).toBe(3);
    });
});
describe('getArrayLength(arr)', function() {
    it('should return length', function() {
      expect(getArrayLength([1, 2, 3])).toBe(3);
    });
});
describe('incrementByOne(arr)', function() {
    it('should return arr increment by one', function() {
      expect(incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    });
});
describe('addItemToArray(arr, item)', function() {
    it('should return arr with item', function() {
      expect(addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });
});
describe('addItemToFront(arr, item)', function() {
    it('should return arr with item at front', function() {
      expect(addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
    });
});
describe('wordsToSentence(words)', function() {
    it('should return words + words', function() {
      expect(wordsToSentence(['Good', 'morning!'])).toEqual('Good morning!');
    });
});
describe('contains(arr, item)', function() {
    it('should return true if item is contained', function() {
      expect(contains([1, 2, 3], 1)).toBe(true);
      expect(contains([1, 2, 3], 5)).toBe(false);
    });
});
describe('addNumbers(arr)', function() {
    it('should return sum of numbers', function() {
      expect(addNumbers([1, 2, 3])).toBe(6);
    });
});
describe('averageTestScore(arr)', function() {
    it('should return average of numbers', function() {
      expect(averageTestScore([2, 2, 2])).toBe(2);
    });
});
describe('largestNumber(arr)', function() {
    it('should return largest number', function() {
      expect(largestNumber([1, 3, 2])).toBe(3);
    });
});