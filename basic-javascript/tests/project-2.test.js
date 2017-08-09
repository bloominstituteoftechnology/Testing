const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 2 Function', () => {
  describe('getBiggest function', () => {
    it('should be of type function', () => {
      const biggest = funcs.getBiggest;
      assert.typeOf(biggest, 'function');
    });
    it('should return a number', () => {
      const biggest = funcs.getBiggest;
      assert.typeOf(biggest(4, 5), 'number');
    });
    it('should find the larger number', () => {
      const biggest = funcs.getBiggest;
      assert.equal(biggest(4, 5), 5);
      assert.equal(biggest(6, 5), 6);
    });
  });
  describe('func greetin', () => {
    it('should be of type function', () => {
      const greet = funcs.greeting;
      assert.typeOf(greet, 'function');
    });
    it('should return a string', () => {
      const greet = funcs.greeting('');
      assert.typeOf(greet, 'string');
      assert.equal(greet, 'Hello!');
    });
    it('should handle German and Spanish', () => {
      const greetGerman = funcs.greeting('German');
      const greetSpanish = funcs.greeting('Spanish');
      assert.equal(greetGerman, 'Guten Tag!');
      assert.equal(greetSpanish, 'Hola!');
    });
  });
  describe('isTenOrFive', () => {
    it('should be of type function', () =>{
      const fiveTen = funcs.isTenOrFive;
      assert.typeOf(fiveTen, 'function');
    });
    it('should return a boolean', () =>{
      const fiveTen = funcs.isTenOrFive;
      assert.typeOf(fiveTen(), 'boolean');
    });
    it('should handle 5, 10, and other numbers', () =>{
      const fiveTen = funcs.isTenOrFive;
      assert.equal(fiveTen(5), true);
      assert.equal(fiveTen(10), true);
      assert.equal(fiveTen(-5), false);
      assert.equal(fiveTen(7), false);
    });
  });
  describe('isInRange function', () => {
    it('should be of type function', () => {
      const range = funcs.isInRange;
      assert.typeOf(range, 'function');
    });
    it('should return a boolean', () => {
      const range = funcs.isInRange;
      assert.typeOf(range(27), 'boolean');
    });
    it('should handle numbers in and out of the range', () => {
      const range = funcs.isInRange;
      assert.equal(range(27), true);
      assert.equal(range(17), false);
      assert.equal(range(77), false);
      assert.equal(range(-27), false);
    });
  });
  describe('isInt', () => {
    it('should be of type function', () => {
      const isInt = funcs.isInteger;
      assert.typeOf(isInt, 'function');
    });
    it('should return a boolean', () => {
      const isInt = funcs.isInteger;
      assert.typeOf(isInt(37), 'boolean');
    });
    it('should handle positives, negatives, ints, and floats', () => {
      const isInt = funcs.isInteger;
      assert.equal(isInt(37), true);
      assert.equal(isInt(-37), true);
      assert.equal(isInt(37.31), false);
    });
  });
  describe('fizzBuzz', () => {
    it('should be of type function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should handle multiples of 3, 5, both and neither', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(66), 'fizz');
      assert.equal(fizzBuzz(70), 'buzz');
      assert.equal(fizzBuzz(60), 'fizzbuzz');
      assert.equal(fizzBuzz(7), 7);
    });
  });
  describe('returnFirst', () => {
    it('should be of type function', () => {
      const first = funcs.returnFirst;
      assert.typeOf(first, 'function');
    });
    it('should return the first item in array', () => {
      const first = funcs.returnFirst;
      assert.equal(first([1, 2, 3, 4]), 1);
      assert.equal(first(['apple', 'orange', 'pear']), 'apple');
      assert.equal(first([true, false, true]), true);
    });
  });
  describe('isPrime', () => {
    it('should be of type function', () => {
      const prime = funcs.isPrime;
      assert.typeOf(prime, 'function');
    });
    it('should return a boolean', () => {
      const prime = funcs.isPrime;
      assert.typeOf(prime(4), 'boolean');
    });
    it('should handle prime, composite, negative and zero numbers', () => {
      const prime = funcs.isPrime;
      assert.equal(prime(4), false);
      assert.equal(prime(11), true);
      assert.equal(prime(-11), false);
      assert.equal(prime(0), false);
    });
  });
  describe('returnLast', () => {
    it('should be of type function', () => {
      const last = funcs.returnLast;
      assert.typeOf(last, 'function');
    });
    it('should return the last item in the array of nums, bools, strings', () => {
      const last = funcs.returnLast;
      assert.equal(last([1, 2, 3, 4]), 4);
      assert.equal(last(['apple', 'orange', 'pear']), 'pear');
      assert.equal(last([true, false, true]), true);
    });
  });
  describe('getArrayLength', () => {
    it('should be of type function', () => {
      const length = funcs.getArrayLength;
      assert.typeOf(length, 'function');
    });
    it('should retun a number', () => {
      const length = funcs.getArrayLength;
      assert.typeOf(length([]), 'number');
    });
    it('should handle arrays with and without items', () => {
      const length = funcs.getArrayLength;
      assert.equal(length([]), 0);
      assert.equal(length([1, 2, 3, 4]), 4);
    });
  });
  describe('incrementByOne', () => {
    it('should be of type function', () => {
      const increment = funcs.incrementByOne;
      assert.typeOf(increment, 'function');
    });
    it('should return an array', () => {
      const increment = funcs.incrementByOne;
      assert.typeOf(increment([1, 2, 3]), 'array');
    });
  });
  describe('addItemToArray', () => {
    it('should be of type function', () => {
      const add = funcs.addItemToArray;
      assert.typeOf(add, 'function');
    });
    it('should return an array', () => {
      const add = funcs.addItemToArray;
      assert.typeOf(add([]), 'array');
    });
    it('should return an array containing the item', () => {
      const addEmpty = funcs.addItemToArray([], 'apple');
      const addToArray = funcs.addItemToArray([1, 2], 'apple');
      assert.includeMembers(addEmpty, ['apple']);
      assert.includeMembers(addToArray, ['apple']);
    });
  });
  describe('addItemToFront', () => {
    it('should be of type function', () => {
      const add = funcs.addItemToFront;
      assert.typeOf(add, 'function');
    });
    it('should return an array', () => {
      const add = funcs.addItemToFront;
      assert.typeOf(add([]), 'array');
    });
    it('should return an array containing the item', () => {
      const addEmpty = funcs.addItemToFront([], 'apple');
      const addToArray = funcs.addItemToFront([1, 2], 'apple');
      assert.includeMembers(addEmpty, ['apple']);
      assert.includeMembers(addToArray, ['apple']);
    });
  });
  describe('wordsToSentence', () => {
    it('should be of type function', () => {
      const words = funcs.wordsToSentence;
      assert.typeOf(words, 'function');
    });
    it('should return a string', () => {
      const words = funcs.wordsToSentence;
      assert.typeOf(words(['this', 'is', 'a', 'sentence']), 'string');
    });
  });
  describe('contains', () => {
    it('should be of type function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
      const contains = funcs.contains;
      assert.typeOf(contains([], 'apple'), 'boolean');
    });
  });
  describe('addNumbers', () => {
    it('should be of type function', () => {
      const add = funcs.addNumbers;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.addNumbers;
      assert.typeOf(add([1, 2, 3]), 'number');
    });
    it('should handle array of nums and empty array', () => {
      const add = funcs.addNumbers;
      assert.equal(add([1, 2, 3]), 6);
      assert.equal(add([]), 0);
    });
  });
  describe('averageTestScore', () => {
    it('should be of type function', () => {
      const average = funcs.averageTestScore;
      assert.typeOf(average, 'function');
    });
    it('should return a number', () => {
      const average = funcs.averageTestScore;
      assert.typeOf(average([1]), 'number');
    });
    it('should handle array of numbers', () => {
      const average = funcs.averageTestScore;
      assert.equal(average([100, 90, 60, 40, 10]), 60);
    });
  });
  describe('largestNumber', () => {
    it('should be of type function', () => {
      const largest = funcs.largestNumber;
      assert.typeOf(largest, 'function');
    });
    it('should return a number', () => {
      const largest = funcs.largestNumber;
      assert.typeOf(largest([1]), 'number');
    });
    it('should return the largest number', () => {
      const largest = funcs.largestNumber;
      assert.equal(largest([1, 2, 3, 4]), 4);
      assert.equal(largest([4, 3, 2, 1]), 4);
      assert.equal(largest([1, 2, 3, -4]), 3);
      assert.equal(largest([1, -2, -3, -4]), 1);
    });
  });
});
