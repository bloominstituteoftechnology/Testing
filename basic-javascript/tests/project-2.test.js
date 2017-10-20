const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

const getBiggest = funcs.getBiggest;
const greeting = funcs.greeting;
const isTenOrFive = funcs.isTenOrFive;
const isInRange = funcs.isInRange;
const isInteger = funcs.isInteger;
const fizzBuzz = funcs.fizzBuzz;
const isPrime = funcs.isPrime;
const returnFirst = funcs.returnFirst;
const returnLast = funcs.returnLast;
const getArrayLength = funcs.getArrayLength;
const incrementByOne = funcs.incrementByOne;
const addItemToArray = funcs.addItemToArray;
const addItemToFront = funcs.addItemToFront;
const wordsToSentence = funcs.wordsToSentence;
const contains = funcs.contains;
const addNumbers = funcs.addNumbers;
const averageTestScore = funcs.averageTestScore;
const largestNumber = funcs.largestNumber;

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the largest number', () => {
      assert.equal(getBiggest(4, 5), 5, '5 is larger than 4');
      assert.equal(getBiggest(7, 7), 7, '7 is equal to 7');
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return hello! in the given language', () => {
      assert.equal(greeting('German'), 'Guten Tag!', 'expect German to return Guten Tag!');
      assert.equal(greeting('Spanish'), 'Hola!', 'expect Spanish to return Hola!');
      assert.equal(greeting('Any other'), 'Hello!', 'expect Any other to return Hello!');
    });
  });
  describe('isTenOr5', () => {
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if num is 5 or 10', () => {
      assert.isTrue(isTenOrFive(5), '5 should return true');
      assert.isTrue(isTenOrFive(10), '10 should return true');
    });
    it('should return false if num is  not 5 or 10', () => {
      assert.isFalse(isTenOrFive(27), '27 should return false');
      assert.isFalse(isTenOrFive(14), '14 should return false');
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if num is between 20 and 50', () => {
      assert.isTrue(isInRange(21), '21 should return true');
      assert.isTrue(isInRange(49), '49 should return true');
    });
    it('should return false if num is between 20 and 50', () => {
      assert.isFalse(isInRange(20), '20 should return false');
      assert.isFalse(isInRange(50), '50 should return false');
      assert.isFalse(isInRange(150), '150 should return false');
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if num is an Integer', () => {
      assert.isTrue(isInteger(21), '21 should return true');
      assert.isTrue(isInteger(59), '59 should return true');
    });
    it('should return false if num is between 20 and 50', () => {
      assert.isFalse(isInteger(2.1), '2.1 should return false');
      assert.isFalse(isInteger(4.9), '2.1 should return false');
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz if num is a multiple of 3 and 5', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz', '15 should return fizzbuzz');
    });
    it('should return buzz if num is a multiple of 5 and not 3', () => {
      assert.equal(fizzBuzz(20), 'buzz', '20 should return buzz');
    });
    it('should return fizz if num is a multiple of 3 and not 5', () => {
      assert.equal(fizzBuzz(12), 'fizz', '12 should return fizz');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return true if num is prime', () => {
      assert.isTrue(isPrime(7), '7 should return true');
      assert.isTrue(isPrime(13), '13 should return true');
    });
    it('should return false if num is not prime', () => {
      assert.isFalse(isPrime(6), '6 should return false');
      assert.isFalse(isPrime(12), '12 should return false');
    });
  });
  describe('returnFirst', () => {
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first index of an array', () => {
      assert.equal(returnFirst(['q', 'r', 'w', 'e', 'i', 'r', 'b', 'u']), 'q', "['q','r','w','e','i','r','b','u'] should return 'q'");
      assert.equal(returnFirst([' ', ' ', 'r', 'e', 'w']), ' ', "[' ', ' ', 'r','e','w'] should return ' '");
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last index of an array', () => {
      assert.equal(returnLast(['q', 'r', 'w', 'e', 'i', 'r', 'b', 'u']), 'u', "['q','r','w','e','i','r','b','u'] should return 'u'");
      assert.equal(returnLast(['r', 'e', 'w', ' ', ' ']), ' ', "[r','e','w',' ',' '] should return ' '");
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the length of an array', () => {
      assert.equal(getArrayLength(['q', 'r', 'w', 'e', 'i', 'r', 'b', 'u']), 8, "['q','r','w','e','i','r','b','u'] should return 8");
      assert.equal(getArrayLength([1, 3, 5, 6]), 4, '[1, 3, 5, 6] should return 4');
      assert.equal(getArrayLength(['Hello']), 1, "['Hello'] should return 1");
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return each value in an array incremented by one', () => {
      assert.sameOrderedMembers(incrementByOne([1, 2, 3, 4]), [2, 3, 4, 5]);
      assert.sameOrderedMembers(incrementByOne([455]), [456]);
    });
  });
  describe('addItemToArray', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return the array with the given value added to the end', () => {
      assert.sameOrderedMembers(addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
      assert.sameOrderedMembers(addItemToArray([444], 4), [444, 4]);
      assert.sameOrderedMembers(addItemToArray(['Hello'], 'World'), ['Hello', 'World']);
    });
  });
  describe('addItemToFront', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return the array with the given value added to the front', () => {
      assert.sameOrderedMembers(addItemToFront([1, 2, 3], 4), [4, 1, 2, 3]);
      assert.sameOrderedMembers(addItemToFront([321], 4), [4, 321]);
      assert.sameOrderedMembers(addItemToFront(['Hello'], 'World'), ['World', 'Hello']);
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return the given words array as a sentence', () => {
      assert.equal(wordsToSentence(['Hello', 'this', 'is', 'a', 'test']), 'Hello this is a test');
      assert.equal(wordsToSentence(['i am', 'fdfsa', 'weirdddd', ' w o r d s']), 'i am fdfsa weirdddd  w o r d s');
    });
  });
  describe('contains', () => {
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return true if the array contains an item', () => {
      assert.isTrue(contains([1, 2, 3], 3), '[1, 2, 3] contains 3');
      assert.isTrue(contains(['hello', 'world', 3], 'hello'), "['hello', 'world', 3] contains 'hello'");
    });
    it('should return false if the array does not contain an item', () => {
      assert.isFalse(contains([1, 2, 3], 5), '[1, 2, 3] does not contain 5');
      assert.isFalse(contains(['hello', 'world', 3], 'Hello'), "['hello', 'world', 3] does not contain 'Hello'");
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return the sum of all the numbers in the array', () => {
      assert.equal(addNumbers([5, 4, 7]), 16, '[5, 4, 7] should return 16');
      assert.equal(addNumbers([12, 1, 1, 1, 1, 1]), 17, '[12, 1, 1, 1, 1, 1] should return 17');
    });
  });
  describe('averageTestScore', () => {
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average of an array of test scores', () => {
      assert.equal(averageTestScore([5, 4, 9]), 6, '[5, 4, 9] should return 6');
      assert.equal(averageTestScore([90, 91, 91, 81, 11, 86]), 75, '[90, 91, 91, 81, 11, 86] should return 75');
    });
  });
  describe('largestNumber', () => {
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number in an array', () => {
      assert.equal(largestNumber([5, 4, 9]), 9, '[5, 4, 9] should return 9');
      assert.equal(largestNumber([90, 91, 91, 81, 11, 86]), 91, '[90, 91, 91, 81, 11, 86] should return 91');
    });
  });
});
