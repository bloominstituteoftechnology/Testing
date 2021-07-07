const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non-numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('words')).toBeNaN();
        })
        it('returns the number multiplied by 10', () => {
            expect(helpers.multiplyByTen(2)).toBe(20);
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(0)).toBe(0);
            expect(helpers.multiplyByTen(10)).toBe(100);
            expect(helpers.multiplyByTen(2.5)).toBe(25);
            expect(helpers.multiplyByTen(0.001)).toBe(0.01);
        })
    })
    describe('subtractFive', () => {
        it('return NaN when given a non-numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('words')).toBeNaN();
        })
        it('subtracts 5 from a number', () => {
            expect(helpers.subtractFive(5)).toBe(0);
            expect(helpers.subtractFive(1)).toBe(-4);
            expect(helpers.subtractFive(26)).toBe(21);
        })
    })
    describe('areSameLength', () => {
        it('return true when strings are same length, false if not', () => {
            expect(helpers.areSameLength('a lot of words', 'a lot fo words')).toBeTruthy();
            expect(helpers.areSameLength('', '')).toBeTruthy();
            expect(helpers.areSameLength('', 'wagstaff')).toBeFalsy();
            expect(helpers.areSameLength('Bob', 'Joey Pesto')).toBeFalsy();
            expect(helpers.areSameLength('   ', '   ')).toBeTruthy();  
            expect(helpers.areSameLength('   ', ' ')).toBeFalsy();
        })
    })
    describe('areEqual', () => {
        it('returns false when comparing numbers to strings', () => {
            expect(helpers.areEqual(10, '10')).toBeFalsy();
            expect(helpers.areEqual(10, 'ten')).toBeFalsy();
            expect(helpers.areEqual('linda', 56)).toBeFalsy();
        })
        it('returns true when strings are identical, false if not', () => {
            expect(helpers.areEqual('', '')).toBeTruthy();
            expect(helpers.areEqual('WUB-A-LUB-A-DUB-DUB', 'WUB-A-LUB-A-DUB-DUB')).toBeTruthy();
            expect(helpers.areEqual('heLlo', 'hello')).toBeFalsy();
        })
        it('returns true when numbers/evaluations are the same', () => {
            expect(helpers.areEqual(4, 2+2)).toBeTruthy();
            expect(helpers.areEqual(6, 3*2)).toBeTruthy();
            expect(helpers.areEqual(16, 32/2)).toBeTruthy();
            expect(helpers.areEqual(4, 4)).toBeTruthy();
            expect(helpers.areEqual(4, 2+2)).toBeTruthy();
            expect(helpers.areEqual(0, 12)).toBeFalsy();
        })
        it('returns true when truthiness is same', () => {
            expect(helpers.areEqual(false, false)).toBeTruthy();
            expect(helpers.areEqual(true, true)).toBeTruthy();
            expect(helpers.areEqual(true, false)).toBeFalsy();
        })
    })
    describe('lessThanNinety', () => {
        it('returns true when a number is less than 90', () => {
            expect(helpers.lessThanNinety(12)).toBeTruthy();
            expect(helpers.lessThanNinety(37)).toBeTruthy();
            expect(helpers.lessThanNinety(-58)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy();
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(89.999)).toBeTruthy();
        })
        it('returns false when a string', () => {
            expect(helpers.lessThanNinety('numbers')).toBeFalsy();
            expect(helpers.lessThanNinety('')).toBeTruthy();
        })
        it('returns false when number is 90 or bigger', () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            expect(helpers.lessThanNinety(90.1)).toBeFalsy();
            expect(helpers.lessThanNinety(99)).toBeFalsy();
            expect(helpers.lessThanNinety(9000)).toBeFalsy();
        })
    })
    describe('greaterThanFifty', () => {
        it('returns true when number is greater than 50, false if not', () => {
            expect(helpers.greaterThanFifty(89)).toBeTruthy();
            expect(helpers.greaterThanFifty(50.1)).toBeTruthy();
            expect(helpers.greaterThanFifty(50.000001)).toBeTruthy();
            expect(helpers.greaterThanFifty(49.999)).toBeFalsy();
            expect(helpers.greaterThanFifty(49)).toBeFalsy();
            expect(helpers.greaterThanFifty(-50)).toBeFalsy();
        })  
        it('returns false when a string', () => {
            expect(helpers.lessThanNinety('numbers')).toBeFalsy();
            expect(helpers.lessThanNinety('')).toBeTruthy();
        })
    })
    describe('add', () => {
        it('adds two numbers together', () => {
            expect(helpers.add(1,2)).toBe(3);
            expect(helpers.add(11,2)).toBe(13);
            expect(helpers.add(15+4, 7)).toBe(26);
            expect(helpers.add(-1,2)).toBe(1);
        })
        it('combines two strings', () => {
            expect(helpers.add('one', 'two')).toBe('onetwo');
            expect(helpers.add('', '')).toBe('');
        })
        it('treats false as 0 and true as 1', () => {
            expect(helpers.add(true, true)).toBe(2);
            expect(helpers.add(true, false)).toBe(1);
            expect(helpers.add(false, false)).toBe(0);
        })
    })
    describe('subtract', () => {
        it('subtracts two numbers', () => {
            expect(helpers.subtract(5, 3)).toBe(2);
            expect(helpers.subtract(3, 5)).toBe(-2);
            expect(helpers.subtract(100, 15)).toBe(85);
        })
        it('returns NaN when passed a string', () => {
            expect(helpers.subtract('string', 15)).toBeNaN();
            expect(helpers.subtract(156, 'words')).toBeNaN();
            expect(helpers.subtract('string', 'wordsss')).toBeNaN();
        })
    })
    describe('divide', () => {
        it('divides two numbers', () => {
            expect(helpers.divide(4, 2)).toBe(2);
            expect(helpers.divide(64, 16)).toBe(4);
            expect(helpers.divide(-4, 2)).toBe(-2);
        })
    })
    describe('multiply', () => {
        it('multiplies two numbers', () => {
            expect(helpers.multiply(4, 2)).toBe(8);
            expect(helpers.multiply(15, 4)).toBe(60);
            expect(helpers.multiply(-4, 2)).toBe(-8);
            expect(helpers.multiply(-4, -2)).toBe(8);
        })
    })
    describe('getRemainder', () => {
        it('returns the remainder of a quotient', () => {
            expect(helpers.getRemainder(10, 3)).toBe(1);
            expect(helpers.getRemainder(15, 3)).toBe(0);
            expect(helpers.getRemainder(24, 7)).toBe(3);
        })
    })
    describe('isEven', () => {
        it('returns true if number is even, false if not', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(26)).toBeTruthy();
            expect(helpers.isEven(48)).toBeTruthy();
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(29)).toBeFalsy();
        })
    })
    describe('isOdd', () => {
        it('returns true if number is odd', () => {
            expect(helpers.isOdd(29)).toBeTruthy();
        })
        it('returns false if number is even', () => {
            expect(helpers.isOdd(4)).toBeFalsy();
        })
    })
    describe('square', () => {
        it('squares a number', () => {
            expect(helpers.square(2)).toBe(4);
            expect(helpers.square(6)).toBe(36);
        })
    })
    describe('cube', () => {
        it('returns a number cubed', () => {
            expect(helpers.cube(3)).toBe(27);
        })
    })
    describe('raiseToPower', () => {
        it('returns the first number raised to the power of the second', () => {
            expect(helpers.raiseToPower(2, 4)).toBe(16);
            expect(helpers.raiseToPower(2, -1)).toBe(0.5);
        })
    })
    describe('roundNumber', () => {
        it('rounds to nearest whole number', () => {
            expect(helpers.roundNumber(5.4)).toBe(5);
            expect(helpers.roundNumber(5.5)).toBe(6);
        })
    })
    describe('roundUp', () => {
        it('rounds a number up to nearest integer', () => {
            expect(helpers.roundUp(9.0001)).toBe(10);
        })
    })
    describe('add exclamation point', () => {
        it('adds an exclamation point to the end of a string', () => {
            expect(helpers.addExclamationPoint('words')).toBe('words!');
        })
    })
    describe('combineNames', () => {
        it('combines a first and last name with space between', () => {
            expect(helpers.combineNames('Alex', 'Dykas')).toBe('Alex Dykas')
        })
    })
    describe('getGreeting', () => {
        it('says hello to name given', () => {
            expect(helpers.getGreeting('Alex')).toBe('Hello Alex!');
        })
    })
    describe('getRectangleArea', () => {
        it('multiplies the length and width', () => {
            expect(helpers.getRectangleArea(4, 3)).toBe(12);
        })
    })
    describe('getTriangleArea', () => {
        it('returns the are of a triangle', () => {
            expect(helpers.getTriangleArea(3, 4)).toBe(6);
        })
    })
    describe('getCircleArea', () => {
        it('returns the area of a circle', () => {
            expect(helpers.getCircleArea(4)).toBe(50.265482457436691815402294132472);
        })
    })
    describe('getRectangularPrismVolume', () => {
        it('returns the volume of a rectangular prism', () => {
            expect(helpers.getRectangularPrismVolume(3, 3, 3)).toBe(27);
        })
    })
})