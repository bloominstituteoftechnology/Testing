const helpers = require('./project-1');

//========== MULTIPLY BY 10
describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
        const expected = 50;
        const actual = helpers.multiplyByTen(5);
        expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen('');
        expect(product).toBe(0);
    });

    it('should throw error when called with a string', () => {
        expect(() => { helpers.multiplyByTen('five') }).toThrow();
    });
});

//============ SUBTRACT BY 5
describe('subtractFive()', () => {
    it('should subtract provided number by five', () => {
        const expected = 25;
        const actual = helpers.subtractFive(30);
        expect(actual).toEqual(expected);
    });
});

//============ SAME LENGTH STRINGS
describe('areSameLength()', () => {
    it('should return true if both strings are the same length', () => {
        const expected = true;
        const actual = helpers.areSameLength('hello', 'howdy');
        expect(actual).toEqual(expected);
    });
});

//============ DEEP EQUAL!
describe('areEqual', () => {
    it('should return true if both variables are deep equal', () => {
        const expected = true;
        const x = 'Test123!';
        const y = 'Test123!';
        const actual = helpers.areEqual(x, y);
        expect(actual).toEqual(expected);
    });
});

//============ LESS THAN 90
describe('lessThanNinety()', () => {
    it('should return true if number is less than 90', () => {
        const expected = true;
        const actual = helpers.lessThanNinety(89);
        expect(actual).toEqual(expected);
    });
    it('should return false if number is greater than 90', () => {
        const expected = false;
        const actual = helpers.lessThanNinety(91);
        expect(actual).toEqual(expected);
    });
});

//============ GREATER THAN 50
describe('greaterThanFifty()', () => {
    it('should return true if number greater than 50', () => {
        const expected = true;
        const actual = helpers.greaterThanFifty(100);
        expect(actual).toEqual(expected);
    });
    it('should return false if number is less than 50', () => {
        const expected = false;
        const actual = helpers.greaterThanFifty(25);
        expect(actual).toEqual(expected);
    });
});

//============ ADD
describe('add()', () => {
    it('should return the sum of two numbers', () => {
        const expected = 25;
        const actual = helpers.add(20, 5);
        expect(actual).toEqual(expected);
    });
});

//============ SUBTRACT
describe('subtract()', () => {
    it('should return the difference of two numbers', () => {
        const expected = 25;
        const actual = helpers.subtract(30, 5);
        expect(actual).toEqual(expected);
    });
});

//============ DIVIDE
describe('divide()', () => {
    it('should divide the first number by the second number', () => {
        const expected = 25;
        const actual = helpers.divide(100, 4);
        expect(actual).toEqual(expected);
    });
});

//============ MULTIPLY
describe('multiply()', () => {
    it('should return the product of two numbers', () => {
        const expected = 25;
        const actual = helpers.multiply(5, 5);
        expect(actual).toEqual(expected);
    });
});

//============ GET REMAINDER
describe('getRemainder()', () => {
    it('should return the remainder of two numbers', () => {
        const expected = 0;
        const actual = helpers.getRemainder(25, 5);
        expect(actual).toEqual(expected);
    });
});

//============ EVEN
describe('isEven()', () => {
    it('should return true if number is even', () => {
        const expected = true;
        const actual = helpers.isEven(100);
        expect(actual).toEqual(expected);
    });
});

//============ ODD
describe('isOdd()', () => {
    it('should return true if number is odd', () => {
        const expected = true;
        const actual = helpers.isOdd(5);
        expect(actual).toEqual(expected);
    });
});

//============ SQUARE
describe('square()', () => {
    it('should return the product of a number multiplied by itself', () => {
        const expected = 25;
        const actual = helpers.square(5);
        expect(actual).toEqual(expected);
    });
});

//============ CUBE
describe('cube()', () => {
    it('should return (number^3)', () => {
        const expected = 125;
        const actual = helpers.cube(5);
        expect(actual).toEqual(expected);
    });
});

//============ RAISE TO POWER
describe('raiseToPower()', () => {
    it('should raise first value to the power of second value', () => {
        const expected = 125;
        const actual = helpers.raiseToPower(5, 3);
        expect(actual).toEqual(expected);
    });
});

//============ ROUND TO NEAREST
describe('roundNumber()', () => {
    it('should round number to the nearest integer', () => {
        const expected = 5;
        const actual = helpers.roundNumber(5.4);
        expect(actual).toEqual(expected);
    });
});

//============ ROUND UP 
describe('roundUp()', () => {
    it('should round number up to the next integer', () => {
        const expected = 5;
        const actual = helpers.roundUp(4.1);
        expect(actual).toEqual(expected);
    });
});

//============ ADD "!"
describe('addExclamationPoint()', () => {
    it('should add "!" at the end of a given string', () => {
        const expected = 'wow!';
        const actual = helpers.addExclamationPoint('wow');
        expect(actual).toEqual(expected);
    });
});

//============ COMBINE FIRST AND LAST NAME
describe('combineNames()', () => {
    it('should combine two strings into a single string', () => {
        const expected = 'Lucas Beemer';
        const actual = helpers.combineNames('Lucas', 'Beemer');
        expect(actual).toEqual(expected);
    });
});

//============ GREETING
describe('getGreeting()', () => {
    it('should add "hello" before name and "!" at the end', () => {
        const expected = 'Hello Lucas!';
        const actual = helpers.getGreeting('Lucas');
        expect(actual).toEqual(expected);
    });
});

//============ LENGTH X WIDTH
describe('getRectangleArea()', () => {
    it('should multiply two numbers to return a product (L x W = area)', () => {
        const expected = 100;
        const actual = helpers.getRectangleArea(20, 5);
        expect(actual).toEqual(expected);
    });
});

//============ TRIANGLE AREA
describe('getTriangleArea()', () => {
    it('should multiply two given numbers and 0.5', () => {
        const expected = 25;
        const actual = helpers.getTriangleArea(10, 5);
        expect(actual).toEqual(expected);
    });
});

//============ CIRCLE AREA
describe('getCircleArea()', () => {
    it('should multiply PI by given radius^2', () => {
        const expected = 28;
        const actual = Math.round(helpers.getCircleArea(3, 3));
        expect(actual).toEqual(expected);
    });
});

//============ RECTANGULAR PRISM VOLUME
describe('getRectangularPrismVolume()', () => {
    it('should return the volume from 3 values multiplied (L x W x H)', () => {
        const expected = 125;
        const actual = helpers.getRectangularPrismVolume(5, 5, 5);
        expect(actual).toEqual(expected);
    });
});