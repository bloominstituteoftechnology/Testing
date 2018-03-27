/* eslint-disable */

const assert = require('chai').assert;
const sinon = require('sinon');
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
   describe('`getBiggest`', () => {
      const getBiggest = funcs.getBiggest;
      it('should be a function', () => {
         assert.typeOf(getBiggest, 'function');
      });
      it('should return whichever one is bigger', () => {
         assert.strictEqual(getBiggest(5, 3), 5);
      });
   });

   describe('`greeting`', () => {
      const greeting = funcs.greeting;
      it('should be a function', () => {
         assert.typeOf(greeting, 'function');
      });
      it('should return for each language', () => {
         assert.strictEqual(greeting('German'), 'Guten Tag!');
         assert.strictEqual(greeting('Spanish'), 'Hola!');
         assert.strictEqual(greeting(), 'Hello!');
      });
   });

   describe('`isTenOrFive`', () => {
      const { isTenOrFive } = funcs;
      it('should be a function', () => {
         assert.typeOf(isTenOrFive, 'function');
      });
      it('should return true for 5 or 10', () => {
         assert.strictEqual(isTenOrFive(2), false);
         assert.strictEqual(isTenOrFive(10), true);
         assert.strictEqual(isTenOrFive(5), true);
      });
   });

   describe('`isInRange`', () => {
      const { isInRange } = funcs;
      it('should be a function', () => {
         assert.typeOf(isInRange, 'function');
      });
      it('should return true when between 50 and 20 (not inclusive)', () => {
         assert.strictEqual(isInRange(20), false);
         assert.strictEqual(isInRange(21), true);
         assert.strictEqual(isInRange(50), false);
      });
   });

   describe('`isInteger`', () => {
      const { isInteger } = funcs;
      it('should be a function', () => {
         assert.typeOf(isInteger, 'function');
      });
      it('should return true if it is an integer', () => {
         assert.strictEqual(isInteger(2.2), false);
         assert.strictEqual(isInteger(2), true);
      });
   });

   describe('`fizzBuzz`', () => {
      const { fizzBuzz } = funcs;
      it('should be a function', () => {
         assert.typeOf(fizzBuzz, 'function');
      });
      it('should return fizz/buzz if a multiple of 3 or 5 & given number otherwise', () => {
         assert.strictEqual(fizzBuzz(3), 'fizz');
         assert.strictEqual(fizzBuzz(5), 'buzz');
         assert.strictEqual(fizzBuzz(15), 'fizzbuzz');
         assert.strictEqual(fizzBuzz(2), 2);
      });
   });

   describe('`isPrime`', () => {
      const { isPrime } = funcs;
      it('should be a function', () => {
         assert.typeOf(isPrime, 'function');
      });
      it('should return true if it is a prime number', () => {
         assert.strictEqual(isPrime(1), false);
         assert.strictEqual(isPrime(2), true);
         assert.strictEqual(isPrime(11), true);
         assert.strictEqual(isPrime(14), false);
      });
   });

   describe('`returnFirst`', () => {
      const { returnFirst } = funcs;
      it('should be a function', () => {
         assert.typeOf(returnFirst, 'function');
      });
      it('should return the first element in the array', () => {
         const arr = [5, 3, 1];
         assert.strictEqual(returnFirst(arr), 5);
      });
   });

   describe('`returnLast`', () => {
      const { returnLast } = funcs;
      it('should be a function', () => {
         assert.typeOf(returnLast, 'function');
      });
      it('should return the last element in the array', () => {
         const arr = [5, 3, 1];
         assert.strictEqual(returnLast(arr), 1);
      });
   });

   describe('`getArrayLength`', () => {
      const { getArrayLength } = funcs;
      it('should be a function', () => {
         assert.typeOf(getArrayLength, 'function');
      });
      it('should return the length of the array', () => {
         const arr = [5, 3, 1];
         assert.strictEqual(getArrayLength(arr), 3);
      });
   });

   describe('`incrementByOne`', () => {
      const { incrementByOne } = funcs;
      it('should be a function', () => {
         assert.typeOf(incrementByOne, 'function');
      });
      it('should return array with elements incremented by one', () => {
         const arr = [5, 3, 1];
         assert.sameOrderedMembers(incrementByOne(arr), [6, 4, 2]);
      });
   });

   describe('`addItemToArray`', () => {
      const { addItemToArray } = funcs;
      it('should be a function', () => {
         assert.typeOf(addItemToArray, 'function');
      });
      it('should return array with an element pushed to the end', () => {
         const arr = [5, 3, 1];
         assert.sameOrderedMembers(addItemToArray(arr, 4), [5, 3, 1, 4]);
      });
   });

   describe('addItemToFront', () => {
      const { addItemToFront } = funcs;
      it('should be a function', () => {
         assert.typeOf(addItemToFront, 'function');
      });
      it('should return array with an element pushed to the end', () => {
         const arr = [5, 3, 1];
         assert.sameOrderedMembers(addItemToFront(arr, 4), [4, 5, 3, 1]);
      });
   });

   describe('`wordsToSentence`', () => {
      const { wordsToSentence } = funcs;
      it('should be a function', () => {
         assert.typeOf(wordsToSentence, 'function');
      });
    //   it('should have an array as the parameter', () => {
    //      const cb = sinon.spy();
    //      const proxy = wordsToSentence(cb);
    //      console.log('proxy is', proxy);
    //      assert.isArray(proxy, 'is not an array');
    //   })
      it('should return array with an element pushed to the end', () => {
         const arr = ['A', 'simple', 'sentence'];
         assert.strictEqual(wordsToSentence(arr), 'A simple sentence');
      });
   });

   describe('contains', () => {
      const { contains } = funcs;
      it('should be a function', () => {
         assert.typeOf(contains, 'function');
      });
      it('should return true if contains() properly', () => {
        const arr = [5, 3, 1];
          assert.strictEqual(contains(arr, 3), true);
      }) 
   })

   describe('addNumbers', () => {
      const { addNumbers } = funcs;
      it('should be a function', () => {
         assert.typeOf(addNumbers, 'function');
      });
      it('should return sum of numbers in following array', () => {
        const arr = [5, 3, 1];
          assert.strictEqual(addNumbers(arr), 9);
      }) 
   })

   describe('averageTestScore', () => {
      const { averageTestScore } = funcs;
      it('should be a function', () => {
         assert.typeOf(averageTestScore, 'function');
      });
      it('should return average of following array', () => {
        const arr = [5, 3, 1];
          assert.strictEqual(averageTestScore(arr), 3);
      }) 
   })

   describe('largestNumber', () => {
      const { largestNumber } = funcs;
      it('should be a function', () => {
         assert.typeOf(largestNumber, 'function');
      });
      it('should return average of following array', () => {
        const arr = [5, 3, 1];
          assert.strictEqual(largestNumber(arr), 5);
      }) 
   })
});
