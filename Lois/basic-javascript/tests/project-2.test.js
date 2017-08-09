const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const biggestNum = funcs.getBiggest(4, 3);
      assert.typeOf(biggestNum, 'number');
    });
    it('should return the bigger number', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(4, 3), 4);
      assert.equal(getBiggest(2, 7), 7);
    })
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting('English'), 'string');
    });
    it('should return the proper greeting', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('English'), 'Hello!');
      assert.equal(greeting('German'), 'Guten Tag!');
      assert.equal(greeting('Spanish'), 'Hola!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const tenOrFive = funcs.isTenOrFive(5);
      assert.typeOf(tenOrFive, 'boolean');
    });
    it('should return true for a ten or a five', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(5), true);
      assert.equal(isTenOrFive(10), true);
    });
    it('should return false for anything not a ten or a five', () => {
      const tenOrFive = funcs.isTenOrFive(8);
      assert.equal(tenOrFive, false);
    })
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const withinRange = funcs.isInRange(25);
      assert.typeOf(withinRange, 'boolean');
    });
    it('should return true if input is within range', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(34), true);
      assert.equal(isInRange(49), true);
    });
    it('should return false if input is out of range', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(12), false);
      assert.equal(isInRange(67), false);
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const int = funcs.isInteger(14);
      assert.typeOf(int, 'boolean');
    });
    it('should return true if input is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(3), true);
      assert.equal(isInteger(567), true);
    });
    it('should return false if input is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(3.26), false);
      assert.equal(isInteger(567.1), false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(15), 'string');
    });
    it('should return fizzbuzz if input is divisible by 5 and 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      assert.equal(fizzBuzz(60), 'fizzbuzz');
    });
    it('should return buzz if input is divisible by 5 but not 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(25), 'buzz');
      assert.equal(fizzBuzz(110), 'buzz');
    });
    it('should return fizz if input is divisible by 3 but not 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(6), 'fizz');
      assert.equal(fizzBuzz(99), 'fizz');
    });
    it('should return the input if input is not divisible by 5 nor 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(7), 7);
      assert.equal(fizzBuzz(92), 92);
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      const prime = funcs.isPrime(25);
      assert.typeOf(prime, 'boolean');
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first item in the array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([1, 2, 3]), 1);
      assert.equal(returnFirst(['a', 'b', 'c']), 'a');
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the first item in the array', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 3]), 3);
      assert.equal(returnLast(['a', 'b', 'c']), 'c');
    })
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const length = funcs.getArrayLength([1, 2, 3]);
      assert.typeOf(length, 'number');
    });
    it('should return the length of the array', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([1, 2, 3, 4, 5]), 5);
      assert.equal(getArrayLength(['a', 'b', 'c']), 3);
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const plusOne = funcs.incrementByOne([1, 2, 3]);
      assert.typeOf(plusOne, 'array');
    });
    it('should return an array with values incremented by one', () => {
      const plusOne = funcs.incrementByOne([1, 2, 3]);
      assert.deepEqual(plusOne, [2, 3, 4]);
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const plusItem = funcs.addItemToArray([1, 2, 3], 4);
      assert.typeOf(plusItem, 'array');
    });
    it('should return an array with the item added to the back', () => {
      const plusItem = funcs.addItemToArray([1, 2, 3], 4);
      assert.deepEqual(plusItem, [1, 2, 3, 4]);
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      const plusFront = funcs.addItemToFront([1, 2, 3]);
      assert.typeOf(plusFront, 'array');
    });
    it('should return an array with the item added to the front', () => {
      const plusFront = funcs.addItemToFront([1, 2, 3], 4);
      assert.deepEqual(plusFront, [4, 1, 2, 3]);
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const sentence = funcs.wordsToSentence(['This', 'is', 'a', 'sentence'])
      assert.typeOf(sentence, 'string');
    });
    
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
      const contains = funcs.contains;
      assert.typeOf(contains([1,2,3], 2), 'boolean');
    });
    
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
      const sum = funcs.addNumbers([1, 2, 3]);
      assert.typeOf(sum, 'number');
    });
    
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      const average = funcs.averageTestScore([97, 92, 84, 86]);
      assert.typeOf(average, 'number');
    });
    
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const largest = funcs.largestNumber([1, 5, 2, 4, 3]);
      assert.typeOf(largest, 'number');
    });
    
  });

});