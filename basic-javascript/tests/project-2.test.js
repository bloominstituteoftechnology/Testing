/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
    describe('`getBiggest`', () => {
      const getBiggest = funcs.getBiggest;
      it('should be a function', () => {
        assert.typeOf(getBiggest, 'function');
      });
      it('should be number 10', () => {
        const result = getBiggest(10, 2);
        assert.equal(result, 10);
      });
      it('should be number 3', () => {
        const result = getBiggest(3, 3);
        assert.equal(result, 3);
      });
    });
    describe('`greeting`', () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
          assert.typeOf(greeting, 'function');
        });
        it('should return a string - Guten Tag!', () => {
          const result = greeting('German');
          assert.equal(result, 'Guten Tag!');
        });
        it('should return a string - Hello!', () => {
          const result = greeting('English');
          assert.equal(result, 'Hello!');
        });
    });
    describe('`isTenOrFive`', () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
          assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true', () => {
          const result = isTenOrFive(10);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isTenOrFive(4);
          assert.equal(result, false);
        });
    });
    describe('`isInRange`', () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
          assert.typeOf(isInRange, 'function');
        });
        it('should return true', () => {
          const result = isInRange(22);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isInRange(52);
          assert.equal(result, false);
        });
    });
    describe('`isInteger`', () => {
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
          assert.typeOf(isInteger, 'function');
        });
        it('should return true', () => {
          const result = isInteger(157);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isInteger(23.7);
          assert.equal(result, false);
        });
    });
    describe('`fizzBuzz`', () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should be a function', () => {
          assert.typeOf(fizzBuzz, 'function');
        });
        it('should return fizzbuzz', () => {
          const result = fizzBuzz(15);
          assert.equal(result, 'fizzbuzz');
        });
        it('should return buzz', () => {
          const result = fizzBuzz(25);
          assert.equal(result, 'buzz');
        });
        it('should return fizz', () => {
            const result = fizzBuzz(9);
            assert.equal(result, 'fizz');
        });
        it('should return a number', () => {
            const result = fizzBuzz(11);
            assert.equal(result, 11);
        });
    });
    describe('`isPrime`', () => {
        const isPrime = funcs.isPrime;
        it('should be a function', () => {
          assert.typeOf(isPrime, 'function');
        });
        it('should be number true', () => {
          const result = isPrime(7);
          assert.equal(result, true);
        });
        it('should be number false', () => {
          const result = isPrime(6);
          assert.equal(result, false);
        });
        it('should be number false', () => {
            const result = isPrime(-1);
            assert.equal(result, false);
        });
    });
    describe('`returnFirst`', () => {
        const returnFirst = funcs.returnFirst;
        it('should be a function', () => {
          assert.typeOf(returnFirst, 'function');
        });
        it('should be number 5', () => {
          const result = returnFirst([5, 10, 3]);
          assert.equal(result, 5);
        });
    });
    describe('`returnLast`', () => {
        const returnLast = funcs.returnLast;
        it('should be a function', () => {
          assert.typeOf(returnLast, 'function');
        });
        it('should be number 7', () => {
          const result = returnLast([5, 10, 7]);
          assert.equal(result, 7);
        });
    });
    describe('`getArrayLength`', () => {
        const getArrayLength = funcs.getArrayLength;
        it('should be a function', () => {
          assert.typeOf(getArrayLength, 'function');
        });
        it('should be number 3', () => {
          const result = getArrayLength([5, 10, 7]);
          assert.equal(result, 3);
        });
    });
    describe('`incrementByOne`', () => {
        const incrementByOne = funcs.incrementByOne;
        it('should be a function', () => {
          assert.typeOf(incrementByOne, 'function');
        });
        it('should return an array', () => {
          const result = incrementByOne([ 5, 10, 7 ]);
          assert.typeOf(result, 'array');
        })
        it('should increment each element by 1', () => {
          const result = incrementByOne([1, 7]);
          //assert.equal(result, [2, 8]);
          expect(result).to.be.an('array').that.includes(2, 8);
        })
    });
    describe('`addItemToArray`', () => {
        const addItemToArray = funcs.addItemToArray;
        it('should be a function', () => {
          assert.typeOf(addItemToArray, 'function');
        });
        it('should return an array', () => {
          const result = addItemToArray([ 5, 10, 7 ]);
          assert.typeOf(result, 'array');
        })
        it('should increment each element by 1', () => {
          const result = addItemToArray([1, 7], 5);
          assert.equal(result[2], 5);
        })
    });
    describe('`addItemToFront`', () => {
        const addItemToFront = funcs.addItemToFront;
        it('should be a function', () => {
          assert.typeOf(addItemToFront, 'function');
        });
        it('should return an array', () => {
          const result = addItemToFront([ 5, 10, 7 ]);
          assert.typeOf(result, 'array');
        })
        it('should increment each element by 1', () => {
          const result = addItemToFront([1, 7], 2);
          assert.equal(result[0], 2)
        })
    });

    describe('`wordsToSentence`', () => {
        const wordsToSentence = funcs.wordsToSentence;
        it('should be a function', () => {
          assert.typeOf(wordsToSentence, 'function');
        });
        it('should return h e l l o', () => {
          const result = wordsToSentence('hello');
          assert.equal(result, 'h e l l o');
        })
    });
    describe('`contains`', () => {
        const contains = funcs.contains;
        it('should be a function', () => {
          assert.typeOf(contains, 'function');
        });
        it('should return true', () => {
          const result = contains(['a', 'b', 'c'], 'c');
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = contains(['a', 'b', 'c'], 'd');
          assert.equal(result, false);
        });
    });
    describe('`addNumbers`', () => {
        const addNumbers = funcs.addNumbers;
        it('should be a function', () => {
          assert.typeOf(addNumbers, 'function');
        });
        it('should return 16', () => {
          const result = addNumbers([2, 4, 7, 3]);
          assert.equal(result, 16);
        });
    });
    describe('`averageTestScore`', () => {
        const averageTestScore = funcs.averageTestScore;
        it('should be a function', () => {
          assert.typeOf(averageTestScore, 'function');
        });
        it('should return 4', () => {
          const result = averageTestScore([2, 4, 7, 3]);
          assert.equal(result, 4);
        });
    });
    describe('`largestNumber`', () => {
        const largestNumber = funcs.largestNumber;
        it('should be a function', () => {
          assert.typeOf(largestNumber, 'function');
        });
        it('should return 7', () => {
          const result = largestNumber([2, 4, 7, 3]);
          assert.equal(result, 7);
        });
    });

});
