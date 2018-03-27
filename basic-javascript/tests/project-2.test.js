/* eslint-disable prefer-destructuring */

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
      const getBiggest = funcs.getBiggest;
      assert.isFinite(getBiggest(4, 5), 'should yield a number');
    });
    it('should getBiggest properly', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(6, 8), 8, '6 and 8 should yield 8');
      assert.equal(getBiggest(7, -4), 7, '7 and -4 yields 7');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should yield a string', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting('German'), 'string');
      assert.typeOf(greeting('Spanish'), 'string');      
      assert.typeOf(greeting('English'), 'string');      
    });
    it('should test if switch inputs are correct', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!', 'German greeting');
      assert.equal(greeting('Spanish'), 'Hola!', 'Spanish greeting');
      assert.equal(greeting('English'), 'Hello!', 'default greeting');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should yield true or false', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.isBoolean(isTenOrFive(3), '3 yields false');
      assert.isBoolean(isTenOrFive(5), '5 yields true');
    });
    it('should test if number is 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.isNotOk(isTenOrFive(6), '6 is false');
      assert.isOk(isTenOrFive(10), '10 is true');
      assert.isOk(isTenOrFive(5), '5 is true');
      assert.isNotOk(isTenOrFive('spank'), 'string yields false');
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should yield true or false', () => {
      const isInRange = funcs.isInRange;
      assert.isBoolean(isInRange(3), '3 yields false');
      assert.isBoolean(isInRange(21), '21 yields true');
    });
    it('should test if number is in range', () => {
      const isInRange = funcs.isInRange;
      assert.isNotOk(isInRange(50), '50 is false');
      assert.isOk(isInRange(25), '25 is true');
      assert.isNotOk(isInRange(20), '20 yields false');
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should yield true or false', () => {
      const isInteger = funcs.isInteger;
      assert.isBoolean(isInteger(3), '3 yields true');
      assert.isBoolean(isInteger(21.66), '21.66 yields false');
    });
    it('should test if input is integer', () => {
      const isInteger = funcs.isInteger;
      assert.isNotOk(isInteger(50.53), '50 is false');
      assert.isOk(isInteger(25), '25 is true');
      assert.isNotOk(isInteger('banana'), 'string yields false');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string for numbers divisible by 5 and/or 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(30), 'string');
      assert.typeOf(fizzBuzz(25), 'string');
      assert.typeOf(fizzBuzz(6), 'string');
      assert.isFinite(fizzBuzz(7), '7 shoul return a number');
    });
    it('should return proper string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(30), 'fizzbuzz', '30 gives fizzbuzz');
      assert.equal(fizzBuzz(25), 'buzz', '25 gives buzz');
      assert.equal(fizzBuzz(6), 'fizz', '6 gives fizz');
      assert.equal(fizzBuzz(7), 7, '7 gives 7');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should yield true or false', () => {
      const isPrime = funcs.isPrime;
      assert.isBoolean(isPrime(3), '3 yields true');
      assert.isBoolean(isPrime(21), '21 yields false');
      assert.isBoolean(isPrime(-16), '21 yields false');
    });
    it('should test if numbers are prime', () => {
      const isPrime = funcs.isPrime;
      assert.isNotOk(isPrime(50), '50 is false');
      assert.isOk(isPrime(13), '13 is true');
      assert.isOk(isPrime(109), '13 is true');
      assert.isOk(isPrime(2), '2 is true');
      assert.isNotOk(isPrime(0), '0 yields false');
      assert.isNotOk(isPrime(1), '1 yields false');
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element as same type', () => {
      const returnFirst = funcs.returnFirst;
      assert.isBoolean(returnFirst([true,5,6,7,8,9]), 'true at beginning should yield true');
      assert.isFinite(returnFirst([5,'beans', 6]), 'should return 5 as a number');
      assert.typeOf(returnFirst(['beans', 5, 6 ,7]), 'string');
    });
    it('should returnFirst properly', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([8,5,6,7,3]), 8, '[8,...] should yield 8');
      assert.equal(returnFirst([null, 5, 6, 7]), null, '[null,..] yields null');
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element as same type', () => {
      const returnLast = funcs.returnLast;
      assert.isBoolean(returnLast([0,5,6,7,8,true]), 'true at beginning should yield true');
      assert.isFinite(returnLast([5,'beans', 6]), 'should return 5 as a number');
      assert.typeOf(returnLast([42, 5, 6,'timmy']), 'string');
    });
    it('should returnLast properly', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([8,5,6,7,3]), 3, '[8,...] should yield 8');
      assert.equal(returnLast([55, 5, 6, null]), null, '[null,..] yields null');
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the array length as number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.isFinite(getArrayLength([5,'beans', 6]), 'should return 3 as a number');
    });
    it('should getArrayLength properly', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([8,5,6,7,3]), 5, '5 elements yields 5');
      assert.equal(getArrayLength([]), 0, '0 elements yields 0');
      assert.equal(getArrayLength([55, 5, 6, null, 7, 12, 13, 1, 2, 3]), 10, '10 elements yields 10');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.isArray(incrementByOne([4,4,4,4]), 'array');
    });
    it('should incrementByOne properly', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.sameOrderedMembers(incrementByOne([8,5,6,7,3]), [9,6,7,8,4], 'increments numbers');
      assert.sameOrderedMembers(incrementByOne([-4,0,0]), [-3,1,1], 'increments negatives and 0s');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.isArray(addItemToArray([4,4,4,4], 5), 'array');
    });
    it('should addItemToArray properly', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.sameOrderedMembers(addItemToArray([8,5,6,7,3], 6), [8,5,6,7,3,6], 'adds item to end');
      assert.sameOrderedMembers(addItemToArray([-4,0,0], 'hola'), [-4,0,0,'hola'], 'adds string to end');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.isArray(addItemToFront([4,4,4,4], 5), 'array');
    });
    it('should addItemToFront properly', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.sameOrderedMembers(addItemToFront([8,5,6,7,3], 6), [6,8,5,6,7,3], 'adds item to front');
      assert.sameOrderedMembers(addItemToFront([-4,0,0], 'hola'), ['hola',-4,0,0], 'adds string to front');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence([4,4,4,4], 5), 'string');
    });
    it('should wordsToSentence properly', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(['Hello', 'there', 'General', 'Kenobi!']), 'Hello there General Kenobi!', 'should make a sentence');
      assert.equal(wordsToSentence(['Beans', 'are', 'magical', 4, 'me']),  'Beans are magical 4 me', 'should handle numbers');
    });
  });
  
  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should yield true or false', () => {
      const contains = funcs.contains;
      assert.isBoolean(contains([4,5,6,7,8], 4), 'true or false for a number');
      assert.isBoolean(contains(['beans', 'peas', true, 'planes'], false), 'false for a boolean');
    });
    it('should test if array contains the item', () => {
      const contains = funcs.contains;
      assert.isOk(contains([4,5,6,7,8], 4), 'can find 4');
      assert.isNotOk(contains(['beans', 'peas', true, 'planes'], false), 'cant find false');
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return the a number', () => {
      const addNumbers = funcs.addNumbers;
      assert.isFinite(addNumbers([5,7,8,5,4,3,2,3,4,5,6]), 'should return a number');
    });
    it('should return sum properly', () => {
      const addNumbers = funcs.addNumbers;
      assert.equal(addNumbers([8,5,6,7,3]), 29, 'given yields 29');
      assert.equal(addNumbers([]), 0, '0 elements yields 0');
      assert.equal(addNumbers([6,-5,10]), 11, 'handles negatives');
    });
  });
  
  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.isFinite(averageTestScore([5,7,8,5,4,3,2,3,4,5,6]), 'should return a number');
    });
    it('should return sum properly', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.equal(averageTestScore([8,5,6,7,3]), 29/5, 'given yields 29');
      assert.equal(averageTestScore([43]), 43, '1 element yields that element');
      assert.equal(averageTestScore([6,-5,11]), 4, 'handles negatives');
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.isFinite(largestNumber([5,7,8,5,4,3,2,3,4,5,6]), 'should return a number');
    });
    it('should return sum properly', () => {
      const largestNumber = funcs.largestNumber;
      assert.equal(largestNumber([8,5,6,210,3]), 210, 'given yields 29');
      assert.equal(largestNumber([43]), 43, '1 element yields that element');
      assert.equal(largestNumber([-6,-5,-11]), 0, 'handles negatives');
    });
  });
});
