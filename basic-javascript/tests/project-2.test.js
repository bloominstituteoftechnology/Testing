/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project-2 Functions', () => {
    describe('getBiggest', () => {
        it('Should be a function', () => {
            assert.typeOf(funcs.getBiggest, 'function');
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(3, 5), 5);
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(5, 5), 5);
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(5, 3), 5);
        });
    });


    describe('greeting', () => {
        it('Should be a function', () => {
            assert.typeOf(funcs.greeting, 'function');
        });
        it('Should return Guten Tag!', () => {
            assert(funcs.greeting('German', 'Guten Tag!'));
        });
        it('Should return Hola!', () => {
            assert(funcs.greeting('Spanish', 'Hola!'));
        });
        it('Should return Guten Tag!', () => {
            assert(funcs.greeting('Random', 'Hello!'));
        });
    })

    describe('isTenOrFive', () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
            assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true', () => {
            assert(isTenOrFive(10), true);
        })
        it('should return false', () => {
            assert.strictEqual(isTenOrFive(1), false);
        });
    });

    describe('isInRange', () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
            assert.typeOf(isInRange, 'function');
        });
        it('should return true', () => {
            assert(isInRange(30), true);
        })
        it('should return false', () => {
            assert.strictEqual(isInRange(10), false);
        });
    });

    describe('isInteger', () => {
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
            assert.typeOf(isInteger, 'function');
        });
        it('should return true', () => {
            assert(isInteger(3), true);
        })
        it('should return false', () => {
            assert.strictEqual(isInteger(0.9), false);
        });
    });

    describe('fizzBuzz', () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should be a function', () => {
            assert.typeOf(fizzBuzz, 'function');
        });
        it('should return \'fizzbuzz', () => {
            assert(fizzBuzz(15), 'fizzbuzz');
        });
        it('should return \'buzz', () => {
            assert(fizzBuzz(9), 'buzz');
        });
        it('should return \'fizz', () => {
            assert(fizzBuzz(10), 'fizz');
        });
    })

    describe('isPrime', () => {
        const isPrime = funcs.isPrime;
        it('should be a function', () => {
            assert.typeOf(isPrime, 'function');
        });
        it('should return false', () => {
            assert.strictEqual(isPrime(-1), false);
            assert.strictEqual(isPrime(10), false);
            assert.strictEqual(isPrime(1), false);
        });
        it('should return true', () => {
            assert(isPrime(7), true);
        });
    });

    describe('returnFirst', () => {
        const returnFirst = funcs.returnFirst;
        it('should be a function', () => {
            assert.typeOf(returnFirst, 'function');
        });
        it('should return an item', () => {
            assert(returnFirst([1, 2, 3], 1));
        });
    });

    describe('getArrayLength', () => {
        const getArrayLength = funcs.getArrayLength;
        it('should be a function', () => {
            assert.typeOf(getArrayLength, 'function');
        });
        it('should return the length of the array', () => {
            assert(getArrayLength([1, 2, 3], 3));
        });
    });

    describe('returnLast', () => {
        const returnLast = funcs.returnLast;
        it('should be a function', () => {
            assert.typeOf(returnLast, 'function');
        });
        it('should return the last item', () => {
            assert(returnLast([1, 2, 3], 3));
        });
    });

    describe('incrementByOne', () => {
        const incrementByOne = funcs.incrementByOne;
        it('should be a function', () => {
            assert.typeOf(incrementByOne, 'function');
        });
        it('should increment by one', () => {
            assert(incrementByOne([1, 2, 3], [2, 3, 4]));
        });
    });

    describe('addItemToArray', () => {
        const addItemToArray = funcs.addItemToArray;
        it('should be a function', () => {
            assert.typeOf(addItemToArray, 'function');
        });
        it('should add the first item', () => {
            assert(addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
        });
    });

    describe('addItemToFront', () => {
        const addItemToFront = funcs.addItemToFront;
        it('should be a function', () => {
            assert.typeOf(addItemToFront, 'function');
        });
        it('should add item to the front', () => {
            assert(addItemToFront([1, 2, 3], 4), [4, 1, 2, 3]);
        });
    });

    describe('wordsToSentence', () => {
        const wordsToSentence = funcs.wordsToSentence;
        it('should be a function', () => {
            assert.typeOf(wordsToSentence, 'function');
        });
        it('should return a sentence', () => {
            assert(wordsToSentence(['I', 'am', 'John'], 'I am John'));
        });
    });

    describe('contains', () => {
        const contains = funcs.contains;
        it('should be a function', () => {
            assert.typeOf(contains, 'function');
        });
        it('should return true', () => {
            assert(contains([1, 2, 3, 3, 4, 3], 3), true);
        });
        it('should return false', () => {
            assert.strictEqual(contains([1, 2, 4], 3), false);
        });
    });

    describe('addNumbers', () => {
        const addNumbers = funcs.addNumbers;
        it('should be a function', () => {
            assert.typeOf(addNumbers, 'function');
        });
        it('should return the sum of the numbers', () => {
            assert(addNumbers([1, 2, 3], 6));
        });
    });

    describe('averageTestScore', () => {
        const averageTestScore = funcs.averageTestScore;
        it('should be a function', () => {
            assert.typeOf(averageTestScore, 'function');
        });
        it('should return the average score', () => {
            assert(averageTestScore([90, 90, 90], 90));
        });
    });

    describe('largestNumber', () => {
        const largestNumber = funcs.largestNumber;
        it('should be a function', () => {
            assert.typeOf(largestNumber, 'function');
        });
        it('should return the largest number', () => {
            assert(largestNumber([1, 2, 3], 3));
        });
    });
});