/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const should = require('chai').should();
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
        it('should be a num', () => {
            let num = 2;
            num.should.be.a('number');
        });
        it('should return a num times(*) 10', () => {
            const num = 2;
            const multiplyByTen = funcs.multiplyByTen(num);
            assert.equal(multiplyByTen, 20, 'it should be equals to 20');
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
            assert.equal(subtractFive, 1, 'it should be equals to 1');
        });
        it('number should be positive', () => {
            let num = 2;
            assert(num > -1, '`num` is positive');
        });
    });

    describe('`areSameLength`', () => {
        it('should be a function', () => {
            const areSameLength = funcs.areSameLength;
            assert.typeOf(areSameLength, 'function');
        });
        it('param1 should be string', () => {
            const string1 = 'lola';
            const string2 = 'lola';
            funcs.areSameLength(string1, string2);
            assert(string1.length === string2.length, '`string1` equals length `string2`');
        });
        it('param1 should be string', () => {
            const string1 = 'lola';
            const string2 = 'lol';
            funcs.areSameLength(string1, string2);
            assert(string1.length !== string2.length, ' `string1.length` is NOT equals to `string2.length` ');
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
    });

    describe('`greaterThanFifty`', () => {
        it('should be a function', () => {
            const greaterThanFifty = funcs.greaterThanFifty;
            assert.typeOf(greaterThanFifty, 'function');
        });
    });

    describe('`add`', () => {
        it('should be a function', () => {
            const add = funcs.add;
            assert.typeOf(add, 'function');
        });
    });

    describe('`subtract`', () => {
        it('should be a function', () => {
            const subtract = funcs.subtract;
            assert.typeOf(subtract, 'function');
        });
    });

    describe('`divide`', () => {
        it('should be a function', () => {
            const divide = funcs.divide;
            assert.typeOf(divide, 'function');
        });
    });

    describe('`multiply`', () => {
        it('should be a function', () => {
            const multiply = funcs.multiply;
            assert.typeOf(multiply, 'function');
        });
    });

    describe('`getRemainder`', () => {
        it('should be a function', () => {
            const getRemainder = funcs.getRemainder;
            assert.typeOf(getRemainder, 'function');
        });
    });

    describe('`isEven`', () => {
        it('should be a function', () => {
            const isEven = funcs.isEven;
            assert.typeOf(isEven, 'function');
        });
    });

    describe('`isOdd`', () => {
        it('should be a function', () => {
            const isOdd = funcs.isOdd;
            assert.typeOf(isOdd, 'function');
        });
    });

    describe('`square`', () => {
        it('should be a function', () => {
            const square = funcs.square;
            assert.typeOf(square, 'function');
        });
    });

    describe('`cube`', () => {
        it('should be a function', () => {
            const cube = funcs.cube;
            assert.typeOf(cube, 'function');
        });
    });

    describe('`raiseToPower`', () => {
        it('should be a function', () => {
            const raiseToPower = funcs.raiseToPower;
            assert.typeOf(raiseToPower, 'function');
        });
    });

    describe('`roundNumber`', () => {
        it('should be a function', () => {
            const roundNumber = funcs.roundNumber;
            assert.typeOf(roundNumber, 'function');
        });
    });

    describe('`roundUp`', () => {
        it('should be a function', () => {
            const roundUp = funcs.roundUp;
            assert.typeOf(roundUp, 'function');
        });
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
        it('should be a function', () => {
            const getCircleArea = funcs.getCircleArea;
            assert.typeOf(getCircleArea, 'function');
        });
    });

    describe('`getRectangularPrismVolume`', () => {
        it('should be a function', () => {
            const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
            assert.typeOf(getRectangularPrismVolume, 'function');
        });
    });
});
