const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project-2 functions', () => {

  describe('`getBiggest`', () => {
    it('it should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('getBiggest(1, 2) to equal 2', () => {
      const getBiggest = funcs.getBiggest;
      assert.strictEqual(getBiggest(1, 2), 2);
    });
    it('getBiggest(14, 104) to equal 104', () => {
      const getBiggest = funcs.getBiggest;
      assert.strictEqual(getBiggest(14, 104), 104);
    });
  });

  describe('`greeting`', () => {
    it('it should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('greeting(`German`) to equal `Guten Tag!`', () => {
      const greeting = funcs.greeting;
      assert.strictEqual(greeting('German'), 'Guten Tag!');
    });
    it('greeting(`Spanish`) to equal `Hola!`', () => {
      const greeting = funcs.greeting;
      assert.strictEqual(greeting('Spanish'), 'Hola!');
    });
    it('greeting(`Language`) to equal `Hello!`', () => {
      const greeting = funcs.greeting;
      assert.strictEqual(greeting('Language'), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('it should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('isTenOrFive(10) should equal true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.strictEqual(isTenOrFive(10), true);
    });
    it('isTenOrFive(5) should equal true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.strictEqual(isTenOrFive(5), true);
    });
    it('isTenOrFive(55) should equal false', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.strictEqual(isTenOrFive(55), false);
    });
  });

  describe('`isInRange`', () => {
    it('it should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('isInRange(35) to equal true', () => {
      const isInRange = funcs.isInRange;
      assert.strictEqual(isInRange(35), true);
    });
    it('isInRange(55) to equal false', () => {
      const isInRange = funcs.isInRange;
      assert.strictEqual(isInRange(55), false);
    });
  });

  describe('`isInteger`', () => {
    it('it should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('isInteger(3) to equal true', () => {
      const isInteger = funcs.isInteger;
      assert.strictEqual(isInteger(3), true);
    });
    it('isInteger(3.1) to equal false', () => {
      const isInteger = funcs.isInteger;
      assert.strictEqual(isInteger(3.1), false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('it should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('fizzBuzz(15) to equal ', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.strictEqual(fizzBuzz(15), 'fizzbuzz');
    });
    it('fizzBuzz(9) to equal fizz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.strictEqual(fizzBuzz(9), 'fizz');
    });
    it('fizzBuzz(20) to equal buzz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.strictEqual(fizzBuzz(20), 'buzz');
    });
    it('fizzBuzz(num) to equal num', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.strictEqual(fizzBuzz(97), 97);
    });
  });

  describe('`isPrime`', () => {
    it('it should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('isPrime(11) to equal true', () => {
      const isPrime = funcs.isPrime;
      assert.strictEqual(isPrime(11), true);
    });
    it('isPrime(1) to equal false', () => {
      const isPrime = funcs.isPrime;
      assert.strictEqual(isPrime(1), false);
    });
    it('isPrime(10) to equal false', () => {
      const isPrime = funcs.isPrime;
      assert.strictEqual(isPrime(10), false);
    });
  });

  describe('`returnFirst`', () => {
    it('it should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('returnFirst([1, 2, 3]) to return 1', () => {
      const returnFirst = funcs.returnFirst;
      assert.strictEqual(returnFirst([1, 2, 3]), 1);
    });
    it('returnFirst([99, 2, 1]) to return 1', () => {
      const returnFirst = funcs.returnFirst;
      assert.strictEqual(returnFirst([99, 2, 1]), 99);
    });
  });

  describe('`returnLast`', () => {
    it('it should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('returnLast([1, 2, 3]) to return 3', () => {
      const returnLast = funcs.returnLast;
      assert.strictEqual(returnLast([1, 2, 3]), 3);
    });
    it('returnLast([99, 2, 1]) to return 1', () => {
      const returnLast = funcs.returnLast;
      assert.strictEqual(returnLast([99, 2, 1]), 1);
    });
  });

  describe('`getArrayLength`', () => {
    it('it should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('getArrayLength([`hi`, `hello`, `howdy`]) should equal 3', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.strictEqual(getArrayLength(['hi', 'hello', 'howdy']), 3);
    });
    it('getArrayLength([4, 3, 23, 72, 46, 42]) should equal ', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.strictEqual(getArrayLength([4, 3, 23, 72, 46, 42]), 6);
    });
  });

  describe('`incrementByOne`', () => {
    it('it should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('incrementByOne([1, 2, 3]) to equal [2, 3, 4]', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.deepEqual(incrementByOne([1, 2, 3]), [2, 3, 4]);
    });
    it('incrementByOne([42, 79, 114, 342]) to equal [43, 80, 115, 343]', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.deepEqual(incrementByOne([42, 79, 114, 342]), [43, 80, 115, 343]);
    });
  });

  describe('`addItemToArray`', () => {
    it('it should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('addItemToArray([1, 2, 3], 4) to equal [1, 2, 3, 4]', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.deepEqual(addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
    });
    it('addItemToArray([], 7) to equal [7]', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.deepEqual(addItemToArray([], 7), [7]);
    });
  });

  describe('`addItemToFront`', () => {
    it('it should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('addItemToFront([1, 2, 3], 4) to equal [4, 1, 2, 3]', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.deepEqual(addItemToFront([1, 2, 3], 4), [4, 1, 2, 3]);
    });
    it('addItemToFront([99, 98, 97], 100) to equal [100, 99, 98, 97]', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.deepEqual(addItemToFront([99, 98, 97], 100), [100, 99, 98, 97]);
    });
  });

  describe('`wordsToSentence`', () => {
    it('it should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('wordsToSentence([`Hello`, `Fred`]) to equal `Hello Fred`', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.strictEqual(wordsToSentence(['Hello', 'Fred']), 'Hello Fred');
    });
    it('wordsToSentence([`Who`, `What`, `Why`]) to equal `Who What Why`', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.strictEqual(wordsToSentence(['Who', 'What', 'Why']), 'Who What Why');
    });
  });

  describe('`contains`', () => {
    it('it should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('contains([1, 2, 3], 3) to return true', () => {
      const contains = funcs.contains;
      assert.strictEqual(contains([1, 2, 3], 3), true);
    });
    it('contains([1, 2, 3], 4) to return false', () => {
      const contains = funcs.contains;
      assert.strictEqual(contains([1, 2, 3], 4), false);
    });
  });

  describe('`addNumbers`', () => {
    it('it should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('addNumbers([1, 2, 3]) to equal 6', () => {
      const addNumbers = funcs.addNumbers;
      assert.strictEqual(addNumbers([1, 2, 3]), 6);
    });
    it('addNumbers([100]) to equal 100', () => {
      const addNumbers = funcs.addNumbers;
      assert.strictEqual(addNumbers([100]), 100);
    });
    it('addNumbers([]) to equal 0', () => {
      const addNumbers = funcs.addNumbers;
      assert.strictEqual(addNumbers([]), 0);
    });
  });

  describe('`averageTestScore`', () => {
    it('it should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('averageTestScore([1, 2, 3, 4, 5]) to equal 3', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.strictEqual(averageTestScore([1, 2, 3, 4, 5]), 3);
    });
    it('averageTestScore([88, 95, 75, 64, 73]) to equal 79', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.strictEqual(averageTestScore([88, 95, 75, 64, 73]), 79);
    });
  });

  describe('`largestNumber`', () => {
    it('it should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('largestNumber([1, 2, 3, 4, 5]) to equal 5', () => {
      const largestNumber = funcs.largestNumber;
      assert.strictEqual(largestNumber([1, 2, 3, 4, 5]), 5);
    });
    it('largestNumber([99, 98, 100, 74, 98]) to equal 100', () => {
      const largestNumber = funcs.largestNumber;
      assert.strictEqual(largestNumber([99, 98, 100, 74, 98]), 100);
    });
  });
  
});
