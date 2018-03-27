/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

    describe('`multiplyByTen`', () => {
        it('should be a function', () => {
            const multiplyByTen = funcs.multiplyByTen;
            assert.typeOf(multiplyByTen, 'function');
        });
        it('should return a num multiply by 10', () => {
            const num = 2;
            const multiplyByTen = funcs.multiplyByTen(num);
            assert.equal(multiplyByTen, 20, 'should be multiplied by 10');
        });
    });

    describe('`subtractFive`', () => {
        it('should be a function', () => {
            const subtractFive = funcs.subtractFive;
            assert.typeOf(subtractFive, 'function');
        });
        it('should subtract 5 from num', () => {
            const num = 6;
            const subtractFive = funcs.subtractFive(num);
            assert.equal(subtractFive, 1, 'it should be 5 the number to subtract.');
        });
    });

    describe('`areSameLength`', () => {
        it('should be a function', () => {
            const areSameLength = funcs.areSameLength;
            assert.typeOf(areSameLength, 'function');
        });
        it('should be same length', () => {
            const string1 = 'lola';
            const string2 = 'lala';
            const areSameLength = funcs.areSameLength(string1, string2);
            assert(areSameLength, '`string1` is equals length than`string2`');
        });
        it('should be the same length', () => {
            const string1 = 'lola';
            const string2 = 'lol';
            const areSameLength = funcs.areSameLength(string1, string2);
            assert.isNotOk(areSameLength, ' `string1.length` is NOT same length `string2.length` ');
        });
    });

    describe('`areEqual`', () => {
        it('should be a function', () => {
            const areEqual = funcs.areEqual;
            assert.typeOf(areEqual, 'function');
        });
        it('should be equals', () => {
            const x = 'lola';
            const y = 'lola';
            funcs.areEqual(x, y);
            assert(x === y, '`x` is equals to `y` strings');
        });
        it('should be equals', () => {
            const x = 1;
            const y = 1;
            funcs.areEqual(x, y);
            assert(x === y, '`x` is equal to `y` number');
        });
        it('should be equals', () => {
            const x = "1";
            const y = 1;
            funcs.areEqual(x, y);
            assert(x !== y, '`x` is NOT equal to `y`');
        });
    });

    describe('`lessThanNinety`', () => {
        it('should be a function', () => {
            const lessThanNinety = funcs.lessThanNinety;
            assert.typeOf(lessThanNinety, 'function');
        });
        it('should be less than 90', () => {
            const num = 80;
            const lessThanNinety = funcs.lessThanNinety(num);
            assert(lessThanNinety, '`num` is less than 90');
        });
        it('should be less than 90', () => {
            const num = 100;
            const lessThanNinety = funcs.lessThanNinety(num);
            assert.isNotOk(lessThanNinety, '`num` is NOT less than 90');
        });
    });

    describe('`greaterThanFifty`', () => {
        it('should be a function', () => {
            const greaterThanFifty = funcs.greaterThanFifty;
            assert.typeOf(greaterThanFifty, 'function');
        });
        it('should be greater than 50', () => {
            const num = 80;
            const greaterThanFifty = funcs.greaterThanFifty(num);
            assert(greaterThanFifty, '`num` is greater than 50');
        });
        it('should be greater than 50', () => {
            const num = 40;
            const greaterThanFifty = funcs.greaterThanFifty(num);
            assert.isNotOk(greaterThanFifty, '`num` is NOT greater than 50');
        });
    });

    describe('`add`', () => {
        it('should be a function', () => {
            const add = funcs.add;
            assert.typeOf(add, 'function');
        });
        it('should return the sum of two numbers', () => {
            const num1 = 1, num2 = 3;
            const add = funcs.add(num1, num2);
            assert.equal(add, 4);
        });
    });

    describe('`subtract`', () => {
        it('should be a function', () => {
            const subtract = funcs.subtract;
            assert.typeOf(subtract, 'function');
        });
        it('should return the difference of two numbers', () => {
            const num1 = 3, num2 = 1;
            const subtractRes = funcs.subtract(num1, num2);
            assert.equal(subtractRes, 2, '`num1` - `num2` is equals to `subtractRes`');
        });
    });

    describe('`divide`', () => {
        it('should be a function', () => {
            const divide = funcs.divide;
            assert.typeOf(divide, 'function');
        });
        it('should return the division of two number', () => {
            const num1 = 20, num2 = 2;
            const res = funcs.divide(num1, num2);
            assert.equal(res, 10, '`num1` / `num2` is equals to `res`');
        });
    });

    describe('`multiply`', () => {
        it('should be a function', () => {
            const multiply = funcs.multiply;
            assert.typeOf(multiply, 'function');
        });
        it('should return the product of two number', () => {
            const num1 = 2, num2 = 5;
            const res = funcs.multiply(num1, num2);
            assert.equal(res, 10, '`num1` * `num2` is equals to `res`');
        });
    });

    describe('`getRemainder`', () => {
        it('should be a function', () => {
            const getRemainder = funcs.getRemainder;
            assert.typeOf(getRemainder, 'function');
        });
        it('should return the remainder of two numbers', () => {
            const num1 = 50, num2 = 32;
            const res = funcs.getRemainder(num1, num2);
            assert.equal(res, 18);
        });
    });

    describe('`isEven`', () => {
        it('should be a function', () => {
            const isEven = funcs.isEven;
            assert.typeOf(isEven, 'function');
        });
        it('should return is even number', () => {
            const num = 50;
            const res = funcs.isEven(num);
            assert(res, '`num` is even number');
        });
        it('should return not even number', () => {
            const num = 49;
            const res = funcs.isEven(num);
            assert.isNotOk(res, '`num` is Not even number');
        });
    });

    describe('`isOdd`', () => {
        it('should be a function', () => {
            const isOdd = funcs.isOdd;
            assert.typeOf(isOdd, 'function');
        });
        it('should return is Not odd', () => {
            const num = 13;
            const res = funcs.isEven(num);
            assert.isNotOk(res, '`num` is Not odd number');

        });
        it('should return is odd', () => {
            const num = 12;
            const res = funcs.isEven(num);
            assert(res, '`num` is odd number');
        });
    });

    describe('`square`', () => {
        const square = funcs.square;
        it('should be a function', () => {
            assert.typeOf(square, 'function');
        });
        it('should return square', () => {
            const num = 12;
            const res = square(num);
            assert.equal(res, 144);
        })
    });

    describe('`cube`', () => {
        const cube = funcs.cube;
        it('should be a function', () => {
            assert.typeOf(cube, 'function');
        });
        it('should return cube', () => {
            const num = 3;
            const res = cube(num);
            assert.equal(res, 27);
        })
    });

    describe('`raiseToPower`', () => {
        const raiseToPower = funcs.raiseToPower;
        it('should be a function', () => {
            assert.typeOf(raiseToPower, 'function');
        });
        it('should return response raised to power', () => {
            const num1 = 2, num2 = 3;
            const res = raiseToPower(num1, num2);
            assert.equal(res, 8)
        })
    });

    describe('`roundNumber`', () => {
        const roundNumber = funcs.roundNumber;
        it('should be a function', () => {
            assert.typeOf(roundNumber, 'function');
        });
        it('should round a number', () => {
            const num = 49.1;
            const rounded = roundNumber(num);
            assert.equal(rounded, 49);
        })
    });

    describe('`roundUp`', () => {
        const roundUp = funcs.roundUp;
        it('should be a function', () => {
            assert.typeOf(roundUp, 'function');
        });
        it('should round num up', () => {
            const num = 99.9;
            const roundedUp = roundUp(num);
            assert.equal(roundedUp, 100);
        })
    });

    describe('`addExclamationPoint`', () => {
        it('should be a function', () => {
            const addExclamationPoint = funcs.addExclamationPoint;
            assert.typeOf(addExclamationPoint, 'function');
        });
    });

    describe('`combineNames`', () => {
        it('should be a function', () => {
            const combineNames = funcs.combineNames;
            assert.typeOf(combineNames, 'function');
        });
    });

    describe('`getGreeting`', () => {
        it('should be a function', () => {
            const getGreeting = funcs.getGreeting;
            assert.typeOf(getGreeting, 'function');
        });
    });

    describe('`getRectangleArea`', () => {
        it('should be a function', () => {
            const getRectangleArea = funcs.getRectangleArea;
            assert.typeOf(getRectangleArea, 'function');
        });
    });

    describe('`getTriangleArea`', () => {
        it('should be a function', () => {
            const getTriangleArea = funcs.getTriangleArea;
            assert.typeOf(getTriangleArea, 'function');
        });
    });

    describe('`getCircleArea`', () => {
        const getCircleArea = funcs.getCircleArea;
        it('should be a function', () => {
            assert.typeOf(getCircleArea, 'function');
        });
        it('should return circle area', () => {
            const num1 = 20, num2 = 20;
            const res = getCircleArea(num1, num2);
            assert.equal(res, 1256.6370614359173)
        })
    });

    describe('`getRectangularPrismVolume`', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
        it('should be a function', () => {
            assert.typeOf(getRectangularPrismVolume, 'function');
        });
        it('should return area of prism', () => {
            const num1 = 4, num2 = 34, num3 = 21;
            const res = getRectangularPrismVolume(num1, num2, num3);
            assert.equal(res, 2856)
        })
    });
});
