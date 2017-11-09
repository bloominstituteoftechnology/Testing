const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
    describe('`getBiggest`', () => {
      it('should be a function', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest, 'function');
      });
      it('should return 10 if arguements are 10 and 5', () => {
        const getBiggest = funcs.getBiggest;
        let num = 5;
        let num2 = 10;
        const expectedVal = num2;
        expect(getBiggest(num, num2)).to.equal(expectedVal);
      });
    });
    describe('`greeting`', () => {
        it('should be a function', () => {
          const greeting = funcs.greeting;
          assert.typeOf(greeting, 'function');
        });
        it('should return a string', () => {
          const greeting = funcs.greeting;
          let str = 'Spanish';
          expect(greeting(str)).to.be.a('string');
        });
        it('should return "Hola!" if arguements is Spanish', () => {
          const greeting = funcs.greeting;
          let str = 'Spanish';
          const expectedVal = "Hola!"
          expect(greeting(str)).to.equal(expectedVal);
        });
      });
      describe('`isTenOrFive`', () => {
        it('should be a function', () => {
          const isTenOrFive = funcs.isTenOrFive;
          assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true if arguements is 10', () => {
          const isTenOrFive = funcs.isTenOrFive;
          let num = 10;
          const expectedVal = true;
          expect(isTenOrFive(num)).to.equal(expectedVal);
        });
      });
      describe('`isTenOrFive`', () => {
        it('should be a function', () => {
          const isTenOrFive = funcs.isTenOrFive;
          assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true if arguements is 10', () => {
          const isTenOrFive = funcs.isTenOrFive;
          let num = 10;
          const expectedVal = true;
          expect(isTenOrFive(num)).to.equal(expectedVal);
        });
      });
      describe('`isInRange`', () => {
        it('should be a function', () => {
          const isInRange = funcs.isInRange;
          assert.typeOf(isInRange, 'function');
        });
        it('should return true if arguements is 30', () => {
          const isInRange = funcs.isInRange;
          let num = 30;
          const expectedVal = true;
          expect(isInRange(num)).to.equal(expectedVal);
        });
      });
      describe('`isInteger`', () => {
        it('should be a function', () => {
          const isInteger = funcs.isInteger;
          assert.typeOf(isInteger, 'function');
        });
        it('should return true if arguements is 30', () => {
          const isInteger = funcs.isInteger;
          let num = 30;
          const expectedVal = true;
          expect(isInteger(num)).to.equal(expectedVal);
        });
      });
      describe('`fizzBuzz`', () => {
        it('should be a function', () => {
          const fizzBuzz = funcs.fizzBuzz;
          assert.typeOf(fizzBuzz, 'function');
        });
        it('should return true if arguements is 30', () => {
          const fizzBuzz = funcs.fizzBuzz;
          let num = 30;
          const expectedVal = 'fizzbuzz';
          expect(fizzBuzz(num)).to.equal(expectedVal);
        });
      });
      describe('`isPrime`', () => {
        it('should be a function', () => {
          const isPrime = funcs.isPrime;
          assert.typeOf(isPrime, 'function');
        });
        it('should return true if arguements is 23', () => {
          const isPrime = funcs.isPrime;
          let num = 23;
          const expectedVal = true;
          expect(isPrime(num)).to.equal(expectedVal);
        });
      });
      describe('`returnFirst`', () => {
        it('should be a function', () => {
          const returnFirst = funcs.returnFirst;
          assert.typeOf(returnFirst, 'function');
        });
        it('should return 1 if arguements is [1, 2, 3]', () => {
          const returnFirst = funcs.returnFirst;
          let num = [1, 2, 3];
          const expectedVal = 1;
          expect(returnFirst(num)).to.equal(expectedVal);
        });
      });
      describe('`returnLast`', () => {
        it('should be a function', () => {
          const returnLast = funcs.returnLast;
          assert.typeOf(returnLast, 'function');
        });
        it('should return 3 if arguements is [1, 2, 3]', () => {
          const returnLast = funcs.returnLast;
          let num = [1, 2, 3];
          const expectedVal = 3;
          expect(returnLast(num)).to.equal(expectedVal);
        });
      });
      describe('`getArrayLength`', () => {
        it('should be a function', () => {
          const getArrayLength = funcs.getArrayLength;
          assert.typeOf(getArrayLength, 'function');
        });
        it('should return 4 if arguements is [1, 2, 3, 4]', () => {
          const getArrayLength = funcs.getArrayLength;
          let num = [1, 2, 3, 4];
          const expectedVal = 4;
          expect(getArrayLength(num)).to.equal(expectedVal);
        });
      });
      describe('`incrementByOne`', () => {
        it('should be a function', () => {
          const incrementByOne = funcs.incrementByOne;
          assert.typeOf(incrementByOne, 'function');
        });
        it('should return [2, 3, 4, 5] if arguements are [1, 2, 3, 4]', () => {
            const addItemToArray = funcs.addItemToArray;
            let arr = [1, 2, 3, 4];
            for (let i = 0; i < arr.length; i++) {
                arr[i]++;
              }
            expect(addItemToArray(arr)).to.equal(arr);
          });
      });
      describe('`addItemToArray`', () => {
        it('should be a function', () => {
          const addItemToArray = funcs.addItemToArray;
          assert.typeOf(addItemToArray, 'function');
        });
        it('should return [1, 2, 3, 4, 5] if arguements are [1, 2, 3, 4] and 5', () => {
          const addItemToArray = funcs.addItemToArray;
          let arr = [1, 2, 3, 4];
          let num = 5
          arr.push(num)
          expect(addItemToArray(arr, num)).to.equal(arr);
        });
      });
      describe('`addItemToFront`', () => {
        it('should be a function', () => {
          const addItemToFront = funcs.addItemToFront;
          assert.typeOf(addItemToFront, 'function');
        });
        it('should return [0, 1, 2, 3, 4] if arguements are [1, 2, 3, 4] and 0', () => {
          const addItemToFront = funcs.addItemToFront;
          let arr = [1, 2, 3, 4];
          let num = 0
          arr.unshift(num)
          expect(addItemToFront(arr, num)).to.equal(arr);
        });
      });
      describe('`wordsToSentence`', () => {
        it('should be a function', () => {
          const wordsToSentence = funcs.wordsToSentence;
          assert.typeOf(wordsToSentence, 'function');
        });
        it('should return "I am a dog" if arguements are [I, am, a, dog]', () => {
          const wordsToSentence = funcs.wordsToSentence;
          let arr = ['I', 'am', 'a', 'dog'];
          let expectedVal = "I am a dog";
          expect(wordsToSentence(arr)).to.equal(expectedVal);
        });
      });
      describe('`contains`', () => {
        it('should be a function', () => {
          const contains = funcs.contains;
          assert.typeOf(contains, 'function');
        });
        it('should return true if arguements are [1, 2, 3, 4] and 1', () => {
          const contains = funcs.contains;
          let arr = [1, 2, 3, 4];
          let num = 1;
          let expectedVal = true;
          expect(contains(arr, num)).to.equal(expectedVal);
        });
      });
      describe('`addNumbers`', () => {
        it('should be a function', () => {
          const addNumbers = funcs.addNumbers;
          assert.typeOf(addNumbers, 'function');
        });
        it('should return 10 if arguements are [1, 2, 3, 4]', () => {
          const addNumbers = funcs.addNumbers;
          let arr = [1, 2, 3, 4];
          let expectedVal = 10;
          expect(addNumbers(arr)).to.equal(expectedVal);
        });
      });
      describe('`averageTestScore`', () => {
        it('should be a function', () => {
          const averageTestScore = funcs.averageTestScore;
          assert.typeOf(averageTestScore, 'function');
        });
        it('should return 3 if arguements are [2, 3, 3, 4]', () => {
          const averageTestScore = funcs.averageTestScore;
          let arr = [2, 3, 3, 4];
          let expectedVal = 3;
          expect(averageTestScore(arr)).to.equal(expectedVal);
        });
      });
      describe('`largestNumber`', () => {
        it('should be a function', () => {
          const largestNumber = funcs.largestNumber;
          assert.typeOf(largestNumber, 'function');
        });
        it('should return 4 if arguements are [2, 3, 3, 4]', () => {
          const largestNumber = funcs.largestNumber;
          let arr = [2, 3, 3, 4];
          let expectedVal = 4;
          expect(largestNumber(arr)).to.equal(expectedVal);
        });
      });
});