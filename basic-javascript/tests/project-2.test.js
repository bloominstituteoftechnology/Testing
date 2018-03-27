/* eslint-disable prefer-destructuring */

// const chai = require('chai');
const assert = require('chai').assert;
// const spies = require('chai-spies');
const funcs = require('../src/project-2');

// chai.use(spies);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

    describe('`getBiggest`', () => {
        const getBiggest = funcs.getBiggest;
        it('should be a function', () => {
            assert.typeOf(getBiggest, 'function');
        });
        it('should return the biggest number', () => {
            const resp = getBiggest(5, 4);
            assert.equal(resp, 5, 'should return 5');
        });
        it('should return second arg. if are equal', () => {
            const resp = getBiggest(2, 2);
            assert.equal(resp, 2, 'should return 2');
        });
    });

    describe('`greeting`', () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
            assert.typeOf(greeting, 'function');
        });
        it('should return German greeting', () => {
            const resp = greeting('German');
            assert.equal(resp, 'Guten Tag!', 'should return Guten Tag!');
        });
        it('should return Spanish greeting', () => {
            const resp = greeting('Spanish');
            assert.equal(resp, 'Hola!', 'should return Hola!');
        });
        it('should return a hello greeting', () => {
            const resp = greeting('XXXXXXX');
            assert.equal(resp, 'Hello!', 'should return Hello!');
        });
    });

    describe('`isTenOrFive`', () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
            assert.typeOf(isTenOrFive, 'function');
        });
        it('should be 10 or 5', () => {
            const resp = isTenOrFive(10);
            assert(resp, 'num is 10 or 5');
        });
        it('should be 10 or 5', () => {
            const resp = isTenOrFive(3);
            assert.isNotOk(resp, 'num is not 10 or 5');
        });
    });

    describe('`isInRange`', () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
            assert.typeOf(isInRange, 'function');
        });
        it('should be in range', () => {
            const resp = isInRange(40);
            assert(resp, '40 is in range');
        });
        it('should be in range', () => {
            const resp = isInRange(900);
            assert.isNotOk(resp, '900 is not in range');
        });
    });

});

    describe('`isInteger`', () => {
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
            assert.typeOf(isInteger, 'function');
        });
        it('should be a boolean', () => {
            const resp = funcs.isInteger();
            assert(isInteger, 'boolean');
        });
        it('should return true if Integer', () => {
            const resp = funcs.isInteger(3);
            assert.equal(resp, true);
        });
    });

    describe('`fizzBuzz`', () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should be a function', () => {
            assert.typeOf(fizzBuzz, 'function');
        });
        it('should return fizzbuzz', () => {    // Spent the longest time here before realizing I had to return fizzbuzz, not fizzBuzz.
            const fb = fizzBuzz(15);
            assert.equal(fb,'fizzbuzz');
        });
        it('should return fizz', () => {
            const fb = fizzBuzz(10);
            assert.equal(fb, 'buzz');
        });
        it('should return buzz', () => {
            const fb = fizzBuzz(9);
            assert.equal(fb, 'fizz');
        });
    });

    describe('`isPrime`', () => {
        const isPrime = funcs.isPrime
        it('should be a function', () => {
            assert.typeOf(isPrime, 'function');
        });
        it('should return false if less than 0', () => {
            const number1 = isPrime(-5);
            assert.equal(number1, false);
        });
        it('should return false if equals 1', () => {
            const number2 = isPrime(1);
            assert.equal(number2, false);
        });
        it('should return false if equals 0', () => {
            const number3 = isPrime(0);
            assert.equal(number3, false);
        });
        it('should return false if not prime', () => {
            const number4 = isPrime(10);
            assert.equal(number4, false);
        });
    });

    describe('`returnFirst`', () => {
        const returnFirst = funcs.returnFirst;
        it('should be a function', () => {
            assert.typeOf(returnFirst, 'function');
        });
        it('should return first item of array', () => {
            const arr = [1, 2, 3, 4, 5];
            const firstItem = returnFirst(arr);
            assert.equal(firstItem, '1');
        });
    });

    describe('`returnLast`', () => {
        const returnLast = funcs.returnLast;
        it('should be a function', () => {
            assert.typeOf(returnLast, 'function');
        });
        it('should return last item of array', () => {
            const arr = [1, 2, 3, 4, 5];
            const lastItem = returnLast(arr);
            assert.equal(lastItem, '5');
        })
    });

    describe('`getArrayLength`', () => {
        const getArrayLength = funcs.getArrayLength;
        it('should be a function', () => {
            assert.typeOf(getArrayLength, 'function');
        });
        it('should return array length', () => {
            const arr = [1, 2, 3, 4, 5];
            const arrayLength = getArrayLength(arr);
            assert.equal(arrayLength, 5); 
        });
    });

    describe('`incrementByOne`', () => {
        const incrementByOne = funcs.incrementByOne;
        it('should be a function', () => {
            assert.typeOf(incrementByOne, 'function');
        });
        it('should return an array with an increment of one', () => {
            const arr = [1, 2, 3, 4, 5];
            const newArr = incrementByOne(arr);
            assert.includeDeepOrderedMembers(newArr, [2, 3, 4, 5, 6], 'cool');
        });
    });






