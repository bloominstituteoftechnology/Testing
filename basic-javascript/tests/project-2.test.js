const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('Project-1 Functions', () => {

  describe('`getBiggest`', () => {
    it('should be a function', () => {  // going to depreciate this test, we call the function in
                                        //other tests
      const biggest = funcs.getBiggest;
      expect(biggest).to.be.a('function');
    });
    // begin here
    it('should return 15 given param 10, 15', () => {
      const biggestResult = funcs.getBiggest(10,15);
      assert.equal(biggestResult, 15);
    });
    it('should return 15 given param 15, 10', () => {
      const biggestResult = funcs.getBiggest(15,10);
      assert.equal(biggestResult, 15);
    });
    it('should return 15 given param 15, 15', () => {
      const biggestResult = funcs.getBiggest(15,15);
      assert.equal(biggestResult, 15);
    });
    it('should return 15 given param -10, 15', () => {
      const biggestResult = funcs.getBiggest(10,15);
      assert.equal(biggestResult, 15);
    });
  });

  describe('`Greeting`', () => {
    it('should return Guten Tag! given param German', () => {
      const greetResult = funcs.greeting('German');
      assert.equal(greetResult, 'Guten Tag!');
    });
    it('should return Hola! given param Spanish', () => {
      const greetResult = funcs.greeting('Spanish');
      assert.equal(greetResult, 'Hola!');
    });
    it('should return Hello! given param English', () => {
      const greetResult = funcs.greeting('English');
      assert.equal(greetResult, 'Hello!');
    });
    it('should return Hello! given param bla', () => {
      const greetResult = funcs.greeting('bla');
      assert.equal(greetResult, 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should return true  given param 5', () => {
      const tenOrFiveResult = funcs.isTenOrFive(5);
      assert.equal(tenOrFiveResult, true);
    });
    it('should return true  given param 10', () => {
      const tenOrFiveResult = funcs.isTenOrFive(10);
      assert.equal(tenOrFiveResult, true);
    });
    it('should return true  given param 3', () => {
      const tenOrFiveResult = funcs.isTenOrFive(3);
      assert.equal(tenOrFiveResult, false);
    });
  });

  describe('`isInRange`', () => {
    it('should return true  given param 21', () => {
      const inRangeResult = funcs.isInRange(21);
      assert.equal(inRangeResult, true);
    });
    it('should return false  given param 20', () => {
      const inRangeResult = funcs.isInRange(20);
      assert.equal(inRangeResult, false);  // could/would do same for 49 & 50 in a production setting
    });
  });

  describe('`isInteger`', () => {
    it('should return true  given param 21', () => {
      const isIntegerResult = funcs.isInteger(21);
      assert.equal(isIntegerResult, true);
    });
    it('should return false  given param 21.32', () => {
      const isIntegerResult = funcs.isInteger(21.32);
      assert.equal(isIntegerResult, false);
    });
    it('should return false  given param bla', () => {
      const isIntegerResult = funcs.isInteger('bla');
      assert.equal(isIntegerResult, false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should return fizzbuzz for param 15', () => {
      const fizzBuzzResult = funcs.fizzBuzz(15);
      assert.equal(fizzBuzzResult, 'fizzbuzz');
    });
    it('should return buzz for param 5', () => {
      const fizzBuzzResult = funcs.fizzBuzz(5);
      assert.equal(fizzBuzzResult, 'buzz');
    });
    it('should return buzz for param 3', () => {
      const fizzBuzzResult = funcs.fizzBuzz(3);
      assert.equal(fizzBuzzResult, 'fizz');
    });
    it('should return 4 for param 4', () => {
      const fizzBuzzResult = funcs.fizzBuzz(4);
      assert.equal(fizzBuzzResult, 4);
    });
  });

  describe('`isPrime`', () => {
   it('should return false for param 0', () => {
    const isPrimeResult = funcs.isPrime(0);
    assert.equal(isPrimeResult, false);
   });
   it('should return false for param 1', () => {
    const isPrimeResult = funcs.isPrime(1);
    assert.equal(isPrimeResult, false);
   });
   it('should return true for param 4', () => {
    const isPrimeResult = funcs.isPrime(4);
    assert.equal(isPrimeResult, false);
   });
   it('should return true for param 4', () => {
    const isPrimeResult = funcs.isPrime(5);
    assert.equal(isPrimeResult, true); // main testcase, happy flow
   });
  });

  describe('`returnFirst`', () => {
   it('should return bla from array', () => {
     const arr = ['bla', 'sha'];
     const firstResult = funcs.returnFirst(arr);
     assert.equal(firstResult, 'bla'); // main testcase, happy flow
   });
   it('should fail gracefully checking an empty array, i am failing this testcase deliberately so as to get the dev to check for empty arrays', () => {
     const arr = [];
     const firstResult = funcs.returnFirst(arr);
     assert.equal(firstResult, true); // deliberately failing this case, returning undefined can lead to bugs
                                          // dev should check for empty array first
   });
  });

  describe('`returnLast`', () => {
    it('should return bla from array', () => {
      const arr = ['sha', 'bla'];
      const lastResult = funcs.returnLast(arr);
      assert.equal(lastResult, 'bla'); // main testcase, happy flow
    });
    it('function should fail better rather than returning undefined from an empty array', () => {
      const arr = ['sha', 'bla'];
      const lastResult = funcs.returnLast(arr);
      assert.equal(lastResult, false); // deliberately failing testcase for developer to look at
    });
  });

  describe('`getArrayLength`', () => {
    it('should return 0 as array length ', () => {
      const arr = [];
      const lastResult = funcs.getArrayLength(arr);
      assert.equal(lastResult, 0); // main testcase, happy flow
    });
    it('should return 2 as array length ', () => {
      const arr = [1,2];
      const lastResult = funcs.getArrayLength(arr);
      assert.equal(lastResult, 2); // main testcase, happy flow
    });
  });

  describe('`incrementByOne`', () => {
    it('should return 1 in array ', () => {
      const arr = [];
      const incrementResult = funcs.incrementByOne(arr);
      assert.equal(incrementResult, arr); // main testcase, happy flow
    });
    it('should increment all elements in array ', () => {
      const arr = [1,4,3];
      const incrementResult = funcs.incrementByOne(arr);
      assert.equal(incrementResult.join(), [2,5,4].join()); // have to conver to string as objects aren't equal
    });
  });

  describe('`addItemToArray`', () => {
    it('it should add the item to the end of the array ', () => {
      const arr = [1,4,3];
      const arrResult = funcs.addItemToArray(arr, 5);
      assert.equal(arrResult[arrResult.length - 1], 5);
    });
  });

  describe('`addItemToFront`', () => {
    it('it should add the item to the start of the array ', () => {
      const arr = [1,4,3];
      const arrResult = funcs.addItemToFront(arr, 5);
      assert.equal(arrResult[0], 5);
    });
  });

  describe('`wordsToSentence`', () => {
    it('it should make a sentence out of a word array ', () => {
      const arr = ['fine','day','today'];
      const arrResult = funcs.wordsToSentence(arr);
      assert.equal(arrResult, 'fine day today');
    });
  });

  describe('`contains`', () => {
    it('it should contain an emement in the array ', () => {
      const arr = ['fine','day','today'];
      const containsResult = funcs.contains(arr, 'fine');
      assert.equal(containsResult, true);
    });
    it('it should not contain the emement in the array ', () => {
      const arr = ['fine','day','today'];
      const containsResult = funcs.contains(arr, 'ine');
      assert.equal(containsResult, false);
    });
  });

  describe('`addNumbers`', () => {
    it('it should add the elements in an array and return it', () => {
      const arr = [12,15,19];
      const addNumsResult = funcs.addNumbers(arr);
      assert.equal(addNumsResult, 46);
    });
  });

  describe('`averageTestScore`', () => {
    it('it should ret the average tesscore in an array', () => {
      const arr = [13, 12, 12, 12];
      const averageTestScoreResult = funcs.averageTestScore(arr);
      assert.equal(averageTestScoreResult, 12.25);
    });
  });

  describe('`largestNumber`', () => {

  });

  describe('`largestNumber`', () => {
    it('it should ret the largest tesscore in an array regardless of duplicates', () => {
      const arr = [12, 12, 12, 12];
      const largestNumberResult = funcs.largestNumber(arr);
      assert.equal(largestNumberResult, 12);
    });
    it('it should ret the largest tesscore in an array regardless of duplicates', () => {
      const arr = [12, 12, 14, -112];
      const largestNumberResult = funcs.largestNumber(arr);
      assert.equal(largestNumberResult, 14);
    });
  });

});
