/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2 functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    })
    it('should get the biggest number', () => {
      const x = 5;
      const y = 10;
      const get = getBiggest(x, y);
      assert.typeOf(get, 'number');
      assert.equal(get, 10);
      const get2 = getBiggest(x,x)
      assert.typeOf(get2, 'number');
      assert.equal(get2, 5);
      const get3 = getBiggest(y,x);
      assert.typeOf(get3, 'number');
      assert.equal(get3, 10);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a greeting by language', () => {
      const german = greeting('German');
      const spanish = greeting('Spanish');
      const spanglish = greeting('spanglish');

      assert.typeOf(german, 'string');
      assert.equal(german, 'Guten Tag!');

      assert.typeOf(spanish, 'string');
      assert.equal(spanish, 'Hola!');

      assert.typeOf(spanglish, 'string');
      assert.equal(spanglish, 'Hello!');

    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should be ten or five', () => {
      const ten = isTenOrFive(10);
      const five = isTenOrFive(5);
      const nine = isTenOrFive(9);

      assert.typeOf(ten, 'boolean');
      assert.typeOf(five, 'boolean');
      assert.typeOf(nine, 'boolean');

      assert.equal(ten, true);
      assert.equal(five, true);
      assert.equal(nine, false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');      
    });
    it('should be in range 20-50', () => {
      const nineteen = isInRange(19);
      const twentyfive = isInRange(25);

      assert.typeOf(nineteen, 'boolean');
      assert.typeOf(twentyfive, 'boolean');

      assert.equal(nineteen, false);
      assert.equal(twentyfive, true);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should be an integer', () => {
      const int = isInteger(5);
      const notInt = isInteger(5.5);

      assert.typeOf(int, 'boolean');
      assert.typeOf(notInt, 'boolean');

      assert.equal(int, true);
      assert.equal(notInt, false);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should be fizzbuzz', () => {
      const fifteen = fizzBuzz(15);
      const three = fizzBuzz(3);
      const five = fizzBuzz(5);
      const two = fizzBuzz(2);

      assert.typeOf(fifteen, 'string');
      assert.equal(fifteen, 'fizzbuzz');

      assert.typeOf(three, 'string');
      assert.equal(three, 'fizz');
      
      assert.typeOf(five, 'string');
      assert.equal(five, 'buzz');
      
      assert.typeOf(two, 'number');
      assert.equal(two, 2);
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should be a prime number', () => {
      const num1 = isPrime(17);
      const num2 = isPrime(10);
      const num3 = isPrime(-10);

      assert.typeOf(num1, 'boolean');
      assert.equal(num1, true);

      assert.typeOf(num2, 'boolean');
      assert.equal(num2, false);

      assert.typeOf(num3, 'boolean');
      assert.equal(num3, false);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return first element in an array', () => {
      const arrNum = [9, 7, 4, 33, 11];
      const arrStr = ['hello', 'world', 'not really tho'];
      const firstNum = returnFirst(arrNum);
      const firstStr = returnFirst(arrStr)

      assert.typeOf(firstNum, 'number');
      assert.equal(firstNum, 9);

      assert.typeOf(firstStr, 'string');
      assert.equal(firstStr, 'hello');
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return last element in an array', () => {
      const arrNum = [9, 7, 4, 33, 11];
      const arrStr = ['hello', 'world', 'not really tho'];
      const lastNum = returnLast(arrNum);
      const lastStr = returnLast(arrStr)

      assert.typeOf(lastNum, 'number');
      assert.equal(lastNum, 11);

      assert.typeOf(lastStr, 'string');
      assert.equal(lastStr, 'not really tho');
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should get array length', () => {
      const arr = [4, 5, 6, 7, 8, 9];
      const result = getArrayLength(arr);

      assert.typeOf(result, 'number');
      assert.equal(result, 6);
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment array elemements by one', () => {
      const arr = [4, 5, 6, 7, 8, 9];
      const result = incrementByOne(arr);

      assert.typeOf(result, 'array');
      assert.includeOrderedMembers(result, [5, 6, 7, 8, 9, 10]);
    });
  });
  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add element to array', () => {
      const arr = [9,2,3,4,5];
      const result = addItemToArray(arr, 2);

      assert.typeOf(result, 'array');
      assert.includeOrderedMembers(result, [9,2,3,4,5,2]);
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add element to array', () => {
      const arr = [9,2,3,4,5];
      const result = addItemToFront(arr, 2);

      assert.typeOf(result, 'array');
      assert.includeOrderedMembers(result, [2,9,2,3,4,5]);
    });
  });
  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a sentence from spoken words', () => {
      const arr = ['This', 'is', 'SPARTA!!!!'];
      const sentence = wordsToSentence(arr);

      assert.typeOf(sentence, 'string');
      assert.equal(sentence, 'This is SPARTA!!!!')
    });
  });
  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should check if array contains element', () => {
      const arr = [1,2,3,4,5];
      const contain = contains(arr, 5);
      const contain2 = contains(arr, 1001);

      assert.typeOf(contain, 'boolean');
      assert.equal(contain, true);

      assert.typeOf(contain2, 'boolean');
      assert.equal(contain2, false);
    });
  });
  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return sum of numbers', () => {
      const arrgh = [9,90,900];
      const sum = addNumbers(arrgh);

      assert.typeOf(sum, 'number');
      assert.equal(sum, 999);
    });
  });
  describe('`averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average of test scores', () => {
      const testScores = [88,99,100,60];
      const average = averageTestScore(testScores);

      assert.typeOf(average, 'number');
      assert.equal(average, 86.75);
    });
  });
  describe('`largestNumber', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the average of test scores', () => {
      const arr = [88,99,100,60];
      const max = largestNumber(arr);

      assert.typeOf(max, 'number');
      assert.equal(max, 100);
    });
  });

});