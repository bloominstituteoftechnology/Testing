const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. 
//You'll simply just have to create one :/

describe('Project Two', () => {
    let dataArray = [];
    beforeEach(() => {
        dataArray = ['box', 'table', 'mirror', 'cart'];
    });
    afterEach(() => {
        dataArray = [];
    });


    describe('`getBiggest`', () => {
        it('should be a function', () => {
            const getBiggest = funcs.getBiggest;
            assert.typeOf(getBiggest, 'function');
            assert.typeOf(getBiggest(1, 2), 'number');
            assert.equal(getBiggest(5, 10), 10);
        });
    });

    describe('`Greeting`', () => {
        it('should be a function', () => {
            const greeting = funcs.greeting;
            assert.typeOf(greeting, 'function');
            assert.typeOf(greeting(), 'string');
            assert.equal(greeting('German'), 'Guten Tag!');
        });
    });

    describe('`isTenOrFive`', () => {
        it('should be a function', () => {
            const isTenOrFive = funcs.isTenOrFive;
            assert.typeOf(isTenOrFive, 'function');
            assert.typeOf(isTenOrFive(1), 'boolean');
            assert.equal(isTenOrFive(6), false);
        });
    });

    describe('`isInRange`', () => {
        it('should be a function', () => {
            const isInRange = funcs.isInRange;
            assert.typeOf(isInRange, 'function');
            assert.typeOf(isInRange(1), 'boolean');
            assert.equal(isInRange(20), false);
        });
    });

    describe('`isInteger`', () => {
        it('should be a function', () => {
            const isInteger = funcs.isInRange;
            assert.typeOf(isInteger, 'function'); // Type of data it is
            assert.typeOf(isInteger(1), 'boolean'); // Type of answer it gives when executed
            assert.equal(isInteger(45), true); // if the return is correct
        });
    });

    describe('`fizzBuzz`', () => {
        it('should be a function', () => {
            const fizzBuzz = funcs.fizzBuzz;
            assert.typeOf(fizzBuzz, 'function');
            assert.typeOf(fizzBuzz(15), 'string');
            assert.equal(fizzBuzz(1), 1);
            assert.equal(fizzBuzz(9), 'fizz');
            assert.equal(fizzBuzz(10), 'buzz');
            assert.equal(fizzBuzz(15), 'fizzbuzz');
        });
    });

    describe('`isPrime`', () => {
        it('should be a function', () => {
            const isPrime = funcs.isPrime;
            assert.typeOf(isPrime, 'function');
            assert.typeOf(isPrime(4), 'boolean');
            assert.equal(isPrime(13), true);
        });
    });


    describe('`returnFirst`', () => {
        it('should be a function', () => {
            const returnFirst = funcs.returnFirst;
            assert.typeOf(returnFirst(0), 'function');
            assert.typeOf(returnFirst(1), 'number');
            assert.equal(returnFirst(0), true);
        });
    });

    describe('`returnLast`', () => {
        it('should be a function', () => {
            const returnLast = funcs.returnLast;
            assert.typeOf(returnLast(0), 'function');
            assert.equal(returnLast(0), true);
        });
    });

    describe('`getArrayLength`', () => {
        it('should be a function', () => {
            const getArrayLength = funcs.getArrayLength;
            assert.typeOf(getArrayLength(0), 'function');
            assert.equal(getArrayLength(0), true);
        });
    });

    describe('`incrementByOne`', () => {
        it('should be a function', () => {
            const incrementByOne = funcs.incrementByOne;
            assert.typeOf(incrementByOne(0), 'function');
            assert.equal(incrementByOne(0), true);
        });
    });


    describe('`addItemToArray`', () => {
        it('should be a function', () => {
            const addItemToArray = funcs.addItemToArray;
            assert.typeOf(addItemToArray(0), 'function');
            assert.equal(addItemToArray(0), true);
        });
    });

    describe('`incrementByOne`', () => {
        it('should be a function', () => {
            const incrementByOne = funcs.incrementByOne;
            assert.typeOf(incrementByOne(0), 'function');
            assert.equal(incrementByOne(0), true);
        });
    });

    describe('`wordsToSentence`', () => {
        it('should be a function', () => {
            const wordsToSentence = funcs.wordsToSentence;
            assert.typeOf(wordsToSentence(0), 'function');
            assert.typeOf(wordsToSentence(0), 'string');
            assert.equal(wordsToSentence(0), true);
        });
    });

    describe('`contains`', () => {
        it('should be a function', () => {
            const contains = funcs.contains;
            assert.typeOf(contains, 'function');
            assert.typeOf(contains([7, 8]), 'number');
            assert.equal(contains([7, 8]), ([7, 8]));
        });
    });

    describe('`addNumbers`', () => {
        it('should be a function', () => {
            const addNumbers = funcs.addNumbers;
            assert.typeOf(addNumbers, 'function');
            assert.typeOf(addNumbers([6, 5]), 'number');
            assert.equal(addNumbers([8, 5]), 13);
        });
    });
    describe('`averageTestScore`', () => {
        it('should be a function', () => {
            const averageTestScore = funcs.averageTestScore;
            assert.typeOf(averageTestScore, 'function');
            assert.typeOf(averageTestScore([50, 60]), 'number');
            assert.equal(averageTestScore([50, 60]), 55);
        });
    });

    describe('`largestNumber`', () => {
        it('should be a function', () => {
            const largestNumber = funcs.largestNumber;
            assert.typeOf(largestNumber, 'function');
            assert.typeOf(largestNumber([10, 5]), 'number');
            assert.equal(largestNumber(
                [
                    12,
                    60,
                    2,
                    3,
                    5
                ]
            ), 60);
        });
    });

});