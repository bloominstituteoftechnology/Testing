const helpers = require('./project-1');

// start testing!
describe('project-1', () => {

    describe('multiplyByTen', () => {

        it('It should return NaN when given a value of undefined or non-empty string.', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        })

        it('It should return the given value multiplied by 10.', () => {
            expect(helpers.multiplyByTen('')).toEqual(0);
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(null)).toEqual(0);
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(5)).toEqual(50);
            expect(helpers.multiplyByTen(-1)).toEqual(-10);
            expect(helpers.multiplyByTen(10)).toEqual(100);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
    })

    describe('subtractFive', () => {

        it('It should return NaN when given a value of undefined or a non-empty string.', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
        })

        it('It should return the correct result when 5 is subtracted from num.', () => {
            expect(helpers.subtractFive('')).toEqual(-5);
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(null)).toEqual(-5);
            expect(helpers.subtractFive(5)).toEqual(0);
            expect(helpers.subtractFive(1)).toEqual(-4);
            expect(helpers.subtractFive(2)).toEqual(-3);
            expect(helpers.subtractFive(3)).toEqual(-2);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
    })

    describe('areSameLength', () => {

        it('It should return true if the lengths of both str1 and str2 are equal or false if they are not.', () => {
            expect(helpers.areSameLength('', 'test')).toBeFalsy();
            expect(helpers.areSameLength('test', 'test')).toBeTruthy();
            expect(helpers.areSameLength('test', [1, 2, 3])).toBeFalsy();
            expect(helpers.areSameLength('test', [1, 2, 3, 4])).toBeTruthy();
        })
    })

    describe('areEqual', () => {

        it('It should return true if both x and y are equal or false if they are not.', () => {
            expect(helpers.areEqual(true, true)).toBeTruthy();
            expect(helpers.areEqual(undefined, null)).toBeFalsy();
            expect(helpers.areEqual(6, 6)).toBeTruthy();
            expect(helpers.areEqual('test', 'tset')).toBeFalsy();
        })
    })

    describe('lessThanNinety', () => {

        it('It should return true if num is less than 90 or false if it is not.', () => {
            expect(helpers.lessThanNinety(undefined)).toEqual(false);
            expect(helpers.lessThanNinety('test')).toEqual(false);
            expect(helpers.lessThanNinety('')).toEqual(true);
            expect(helpers.lessThanNinety(90)).toEqual(false);
            expect(helpers.lessThanNinety(1)).toEqual(true);
            expect(helpers.lessThanNinety(91)).toEqual(false);
            expect(helpers.lessThanNinety(null)).toEqual(true);
        })
    })

    describe('greaterThanFifty', () => {

        it('It should return true if num is greater than 50 or false if it is not.', () => {
            expect(helpers.greaterThanFifty(undefined)).toEqual(false);
            expect(helpers.greaterThanFifty('test')).toEqual(false);
            expect(helpers.greaterThanFifty(51)).toEqual(true);
            expect(helpers.greaterThanFifty('')).toEqual(false);
            expect(helpers.greaterThanFifty(500)).toEqual(true);
            expect(helpers.greaterThanFifty(null)).toEqual(false);
            expect(helpers.greaterThanFifty(100)).toEqual(true);
        })
    })

    describe('add', () => {

        it('It should return NaN when x and/or y has a value of undefined.', () => {
            expect(helpers.add(undefined, undefined)).toBeNaN();
            expect(helpers.add(undefined, 1)).toBeNaN();
            expect(helpers.add(1, undefined)).toBeNaN();
        })

        it('It should return the correct result of adding x and y.', () => {
            expect(helpers.add('', '')).toEqual('');
            expect(helpers.add(1, 3)).toEqual(4);
            expect(helpers.add(true, false)).toEqual(1);
            expect(helpers.add(false, false)).toEqual(0);
            expect(helpers.add(2, 2)).toEqual(4);
        })
    })

    describe('subtract', () => {

        it('It should return NaN when x and/or y has a value of undefined.', () => {
            expect(helpers.subtract(undefined, undefined)).toBeNaN();
            expect(helpers.subtract(undefined, 1)).toBeNaN();
            expect(helpers.subtract(1, undefined)).toBeNaN();
        })

        it('It should return the correct result when x is subtracted from y.', () => {
            expect(helpers.subtract('', '')).toEqual(0);
            expect(helpers.subtract('', 3)).toEqual(-3);
            expect(helpers.subtract(true, false)).toEqual(1);
            expect(helpers.subtract(false, false)).toEqual(0);
            expect(helpers.subtract(3, '')).toEqual(3);
            expect(helpers.subtract(null, 1)).toEqual(-1);
        })
    })

    describe('divide', () => {
        
        it('It should return NaN when x and/or y has a value of undefined or when both x and y are empty strings.', () => {
            expect(helpers.divide(undefined, undefined)).toBeNaN();
            expect(helpers.divide(undefined, 1)).toBeNaN();
            expect(helpers.divide(1, undefined)).toBeNaN();
            expect(helpers.divide('', '')).toBeNaN();
        })

        it('It should return the correct result when x is divided by y.', () => {
            expect(helpers.divide('', 1)).toEqual(0);
            expect(helpers.divide(1, '')).toEqual(Infinity);
            expect(helpers.divide(null, 1)).toEqual(0);
            expect(helpers.divide(1, 1)).toEqual(1);
            expect(helpers.divide(-1, 1)).toEqual(-1);
            expect(helpers.divide(7, 0)).toEqual(Infinity);
        })
    })

    describe('multiply', () => {
        
        it('It should return NaN when x and/or y has a value of undefined or when y is equal to an empty string or 0.', () => {
            expect(helpers.multiply(undefined, undefined)).toBeNaN();
            expect(helpers.multiply(undefined, 1)).toBeNaN();
            expect(helpers.multiply(1, undefined)).toBeNaN();
        })

        it('It should return the correct result when x is multiplied by y.', () => {
            expect(helpers.multiply('', '')).toEqual(0);
            expect(helpers.multiply('', 1)).toEqual(0);
            expect(helpers.multiply(4, 4)).toEqual(16);
            expect(helpers.multiply(5, -5)).toEqual(-25);
            expect(helpers.multiply(7, 7)).toEqual(49);
        })
    })

    describe('getRemainder', () => {
        
        it('It should return NaN when x and/or y has a value of undefined.', () => {
            expect(helpers.getRemainder('', '')).toBeNaN();
            expect(helpers.getRemainder('', 0)).toBeNaN();
            expect(helpers.getRemainder(1, 0)).toBeNaN();
        })

        it('It should return the correct remainder when x is divided by y.', () => {
            expect(helpers.getRemainder('', 1)).toEqual(0);
            expect(helpers.getRemainder(2, 2)).toEqual(0);
            expect(helpers.getRemainder(12, 7)).toEqual(5);
            expect(helpers.getRemainder(18, 5)).toEqual(3);
            expect(helpers.getRemainder(9, 4)).toEqual(1);
        })
    })

    describe('isEven', () => {
        
        it('It should return true if num is an even number or false if it is not.', () => {
            expect(helpers.isEven(undefined)).toBeFalsy(); 
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven('')).toBeTruthy();
            expect(helpers.isEven(15)).toBeFalsy();
            expect(helpers.isEven(null)).toBeTruthy();
            expect(helpers.isEven(17)).toBeFalsy();
        })
    })

    describe('isOdd', () => {
        
        it('It should return true if num is an odd number or false if it is not.', () => {
            expect(helpers.isOdd(undefined)).toBeTruthy(); 
            expect(helpers.isOdd(4)).toBeFalsy();
            expect(helpers.isOdd(5)).toBeTruthy();
            expect(helpers.isOdd(null)).toBeFalsy();
            expect(helpers.isOdd(25)).toBeTruthy();
            expect(helpers.isOdd('')).toBeFalsy();
        })
    })

    describe('square', () => {
        
        it('It should return NaN when num has a value of undefined.', () => {
            expect(helpers.square(undefined)).toBeNaN();
        })

        it('It should return the correct result when num is multiplied by num.', () => {
            expect(helpers.square('')).toEqual(0);
            expect(helpers.square(null)).toEqual(0);
            expect(helpers.square(1)).toEqual(1);
            expect(helpers.square(2)).toEqual(4);
            expect(helpers.square(3)).toEqual(9);
        })
    })

    describe('cube', () => {
        
        it('It should return NaN when num has a value of undefined.', () => {
            expect(helpers.cube(undefined)).toBeNaN();
        })

        it('It should return the correct result when num is cubed.', () => {
            expect(helpers.cube('')).toEqual(0);
            expect(helpers.cube(null)).toEqual(0);
            expect(helpers.cube(1)).toEqual(1);
            expect(helpers.cube(2)).toEqual(8);
            expect(helpers.cube(3)).toEqual(27);
        })
    })

    describe('raiseToPower', () => {
        it('It should return NaN when num and/or exponent has a value of undefined.', () => {
            expect(helpers.raiseToPower(undefined, undefined)).toBeNaN();
            expect(helpers.raiseToPower(undefined, 1)).toBeNaN();
            expect(helpers.raiseToPower(1, undefined)).toBeNaN();
        })

        it('It should return the correct result when num is raised to the value within exponent.', () => {
            expect(helpers.raiseToPower('', 1)).toEqual(0);
            expect(helpers.raiseToPower(null, 2)).toEqual(0);
            expect(helpers.raiseToPower(2, 3)).toEqual(8);
            expect(helpers.raiseToPower(3, 3)).toEqual(27);
            expect(helpers.raiseToPower(5, 3)).toEqual(125);
        })
    })

    describe('roundNumber', () => {
        
        it('It should return NaN when num has a value of undefined or a non-empty string.', () => {
            expect(helpers.roundNumber(undefined)).toBeNaN();
            expect(helpers.roundNumber('test')).toBeNaN();
        })

        it('It should return num rounded to the nearest integer.', () => {
            expect(helpers.roundNumber(3.5)).toEqual(4);
            expect(helpers.roundNumber(2)).toEqual(2);
            expect(helpers.roundNumber(5.7)).toEqual(6);
            expect(helpers.roundNumber(-1.7)).toEqual(-2);
            expect(helpers.roundNumber(3.9)).toEqual(4);
        })
    })

    describe('roundUp', () => {
        
        it('It should return NaN when num has a value of undefined or a non-empty string.', () => {
            expect(helpers.roundUp(undefined)).toBeNaN();
            expect(helpers.roundUp('test')).toBeNaN();
        })

        it('It should return a number greater than or equal to num.', () => {
            expect(helpers.roundUp(4.3)).toEqual(5);
            expect(helpers.roundUp(null)).toEqual(0);
            expect(helpers.roundUp('')).toEqual(0);
            expect(helpers.roundUp(7.1)).toEqual(8);
            expect(helpers.roundUp(6.9)).toEqual(7);
        })
    })

    describe('addExclamation', () => {
        
        it('It should return the value of str with an added exclamation point at the end.', () => {
            expect(helpers.addExclamationPoint('Hello')).toEqual('Hello!');
            expect(helpers.addExclamationPoint('!')).toEqual('!!');
            expect(helpers.addExclamationPoint('Whats up')).toEqual('Whats up!');
            expect(helpers.addExclamationPoint(null)).toEqual('null!');
            expect(helpers.addExclamationPoint('')).toEqual('!');
        })
    })

    describe('combineNames', () => {
        
        it('It should return the value of firstName and lastName combined into a string.', () => {
            expect(helpers.combineNames('', '')).toEqual(' ');
            expect(helpers.combineNames('Mr.', 'Robot')).toEqual('Mr. Robot');
            expect(helpers.combineNames(null, null)).toEqual('null null');
            expect(helpers.combineNames(undefined, undefined)).toEqual('undefined undefined');
            expect(helpers.combineNames('Yo', 'Man')).toEqual('Yo Man');
        })
    })

    describe('getGreeting', () => {
        
        it('It should return the value of "Hello " combined with the value within the name parameter and an exclamation point added to the end of the string.', () => {
            expect(helpers.getGreeting('anon')).toEqual('Hello anon!');
            expect(helpers.getGreeting(null)).toEqual('Hello null!');
            expect(helpers.getGreeting('')).toEqual('Hello !');
            expect(helpers.getGreeting('Eddy')).toEqual('Hello Eddy!');
            expect(helpers.getGreeting('Robot')).toEqual('Hello Robot!');
        })
    })

    describe('getRectangleArea', () => {
        
        it('It should return NaN when the length and/or width has a value of undefined.', () => {
            expect(helpers.getRectangleArea(undefined, undefined)).toBeNaN();
            expect(helpers.getRectangleArea(undefined, 2)).toBeNaN();
            expect(helpers.getRectangleArea(2, undefined)).toBeNaN();
        })

        it('It should return the correct result when length is multiplied by width.', () => {
            expect(helpers.getRectangleArea(3, 4)).toEqual(12);
            expect(helpers.getRectangleArea(2, 3)).toEqual(6);
            expect(helpers.getRectangleArea(null, null)).toEqual(0);
            expect(helpers.getRectangleArea('', '')).toEqual(0);
            expect(helpers.getRectangleArea(7, 2)).toEqual(14);
        })
    })

    describe('getTriangleArea', () => {
        
        it('It should return NaN when base and/or height has a value of undefined.', () => {
            expect(helpers.getTriangleArea(undefined, undefined)).toBeNaN();
            expect(helpers.getTriangleArea(undefined, 2)).toBeNaN();
            expect(helpers.getTriangleArea(2, undefined)).toBeNaN();
        })

        it('It should return the correct result when 0.5 is multiplied by base and height.', () => {
            expect(helpers.getTriangleArea(4, 5)).toEqual(10);
            expect(helpers.getTriangleArea(16, 3)).toEqual(24);
            expect(helpers.getTriangleArea(2, 1)).toEqual(1);
            expect(helpers.getTriangleArea(12, 3)).toEqual(18);
            expect(helpers.getTriangleArea(14, 2)).toEqual(14);
        })
    })

    describe('getCircleArea', () => {
        it('It should return NaN when radius has a value of undefined.', () => {
            expect(helpers.getCircleArea(undefined)).toBeNaN();
        })

        it('It should return the correct result when the value of PI is multiplied by the radius twice.', () => {
            expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
            expect(helpers.getCircleArea(5)).toEqual(78.53981633974483);
            expect(helpers.getCircleArea(null)).toEqual(0);
            expect(helpers.getCircleArea('')).toEqual(0);
            expect(helpers.getCircleArea(7)).toEqual(153.93804002589985);
        })
    })

    describe('getRectanglePrismVolume', () => {
        
        it('It should return NaN when width, height and/or height has a value of undefined.', () => {
            expect(helpers.getRectangleArea(undefined, undefined, undefined)).toBeNaN();
            expect(helpers.getRectangleArea(undefined, undefined, 1)).toBeNaN();
            expect(helpers.getRectangleArea(undefined, 1, 1)).toBeNaN();
        })

        it('It should return the correct result when width is multiplied by height and length.', () => {
            expect(helpers.getRectangularPrismVolume('', 3, 4)).toEqual(0);
            expect(helpers.getRectangularPrismVolume(null, 1, 2)).toEqual(0);
            expect(helpers.getRectangularPrismVolume(3, 3, 3)).toEqual(27);
            expect(helpers.getRectangularPrismVolume(2, 3, 4)).toEqual(24);
            expect(helpers.getRectangularPrismVolume(7, 1, 9)).toEqual(63);
        })
    })
})