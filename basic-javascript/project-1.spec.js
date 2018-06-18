const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('multiplies by 10', () => {
        expect(helpers.multiplyByTen(5)).toBe(50);
        expect(helpers.multiplyByTen(6)).toBe(60);
        expect(helpers.multiplyByTen(60)).toBe(600);
    });
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
    });
});

describe('subtractFive', () => { 
    it('subtracts by 5', () => {
        expect(helpers.subtractFive(5)).toBe(0);
        expect(helpers.subtractFive(6)).toBe(1);
        expect(helpers.subtractFive(60)).toBe(55);
    });
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
    });
});

describe('areSameLength', () => { 
    it('returns true when strings are same length', () => {
        expect(helpers.areSameLength('abcd', 'ghjh')).toBe(true);
        expect(helpers.areSameLength('f5hgf', 'fkmd4')).toBe(true);
        expect(helpers.areSameLength('g', 'T')).toBe(true);
    });
    it('returns false when strings are different lengths', () => {
        expect(helpers.areSameLength('abcdf', 'ghjh')).toBe(false);
        expect(helpers.areSameLength('f5hgf', 'fkmd4r')).toBe(false);
        expect(helpers.areSameLength('gf', 't')).toBe(false);
    });
});

describe('areEqual', () => { 
    it('returns true when args are equal', () => {
        expect(helpers.areEqual(5, 5 + 5 - 5)).toBe(true);
        expect(helpers.areEqual(7, 14 / 2)).toBe(true);
        expect(helpers.areEqual(Math.pow(3, 3), 27)).toBe(true);
    });
    it('returns false when args are not equal', () => {
        expect(helpers.areEqual(5, 5 + 5 - 6)).toBe(false);
        expect(helpers.areEqual(6, 14 / 2)).toBe(false);
        expect(helpers.areEqual(Math.pow(3, 3), 28)).toBe(false);
    });
});

describe('lessThanNinety', () => { 
    it('returns true when num is less than 90', () => {
        expect(helpers.lessThanNinety(5 + 5 - 5)).toBe(true);
        expect(helpers.lessThanNinety(14 / 2)).toBe(true);
        expect(helpers.lessThanNinety(Math.pow(3, 3))).toBe(true);
    });
    it('returns false when num is equal to or more than 90', () => {
        expect(helpers.lessThanNinety(95)).toBe(false);
        expect(helpers.lessThanNinety(90)).toBe(false);
        expect(helpers.lessThanNinety(102)).toBe(false);
    });
});

describe('greaterThanFifty', () => { 
    it('returns true when num is more than 50', () => {
        expect(helpers.greaterThanFifty(10*6)).toBe(true);
        expect(helpers.greaterThanFifty(57)).toBe(true);
        expect(helpers.greaterThanFifty(63)).toBe(true);
    });
    it('returns false when num is equal to or less than than 50', () => {
        expect(helpers.greaterThanFifty(50)).toBe(false);
        expect(helpers.greaterThanFifty(49)).toBe(false);
        expect(helpers.greaterThanFifty(-1)).toBe(false);
    });
});

// this is boring //

describe('add', () => { 
    it('adds...', () => {
        expect(helpers.add(1, 1)).toBe(2);
        expect(helpers.add(2,5)).toBe(7);
        expect(helpers.add(-4,5)).toBe(1);
    });
});

describe('subtract', () => { 
    it('subtracts...', () => {
        expect(helpers.subtract(1, 1)).toBe(0);
        expect(helpers.subtract(2,5)).toBe(-3);
        expect(helpers.subtract(-4,5)).toBe(-9);
    });
});

describe('divide', () => { 
    it('divides...', () => {
        expect(helpers.divide(1, 1)).toBe(1);
        expect(helpers.divide(6,3)).toBe(2);
        expect(helpers.divide(-4,2)).toBe(-2);
    });
});

describe('multiply', () => { 
    it('multiplies...', () => {
        expect(helpers.multiply(1, 1)).toBe(1);
        expect(helpers.multiply(6,3)).toBe(18);
        expect(helpers.multiply(-4,2)).toBe(-8);
    });
});

describe('getRemainder', () => { 
    it('returns remainder', () => {
        expect(helpers.getRemainder(1, 1)).toBe(0);
        expect(helpers.getRemainder(6,5)).toBe(1);
        expect(helpers.getRemainder(-4,3)).toBe(-1);
    });
});

describe('isEven', () => { 
    it('returns true if num is even and false if num is odd', () => {
        expect(helpers.isEven(72)).toBe(true);
        expect(helpers.isEven(101)).toBe(false);
        expect(helpers.isEven(-1)).toBe(false);
    });
});

describe('isOdd', () => { 
    it('returns true if num is odd and false if num is even', () => {
        expect(helpers.isOdd(72)).toBe(false);
        expect(helpers.isOdd(101)).toBe(true);
        expect(helpers.isOdd(-1)).toBe(true);
    });
});

describe('square', () => { 
    it('returns square of input', () => {
        expect(helpers.square(1)).toBe(1);
        expect(helpers.square(2)).toBe(4);
        expect(helpers.square(-1)).toBe(1);
    });
});

describe('cube', () => { 
    it('returns cube of input', () => {
        expect(helpers.cube(1)).toBe(1);
        expect(helpers.cube(2)).toBe(8);
        expect(helpers.cube(-1)).toBe(-1);
    });
});

describe('raiseToPower', () => { 
    it('returns first input raised to second input', () => {
        expect(helpers.raiseToPower(1, 15)).toBe(1);
        expect(helpers.raiseToPower(2, 2)).toBe(4);
        expect(helpers.raiseToPower(-1, 2)).toBe(1);
    });
});

describe('roundNumber', () => { 
    it('rounds number', () => {
        expect(helpers.roundNumber(1.5)).toBe(2);
        expect(helpers.roundNumber(2.3)).toBe(2);
        expect(helpers.roundNumber(0)).toBe(0);
    });
});


//still boring //

describe('roundUp', () => { 
    it('rounds up to nearest whole number', () => {
        expect(helpers.roundUp(1.5)).toBe(2);
        expect(helpers.roundUp(2.3)).toBe(3);
        expect(helpers.roundUp(0)).toBe(0);
    });
});

describe('addExclamationPoint', () => { 
    it('as stated', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!');
        expect(helpers.addExclamationPoint('yes')).toBe('yes!');
        expect(helpers.addExclamationPoint('boring!')).toBe('boring!!');
    });
});

describe('combineNames', () => { 
    it('combines input strings', () => {
        expect(helpers.combineNames('albert', 'pam')).toBe('albert pam');
        expect(helpers.combineNames('john', 'doe')).toBe('john doe');
        expect(helpers.combineNames('first', 'last')).toBe('first last');
    });
});

describe('getGreeting', () => { 
    it('returns greeting', () => {
        expect(helpers.getGreeting('pam')).toBe('Hello pam!');
        expect(helpers.getGreeting('albert')).toBe('Hello albert!');
        expect(helpers.getGreeting('martin')).toBe('Hello martin!');
    });
});

describe('getRectangleArea', () => { 
    it('return rectangle area', () => {
        expect(helpers.getRectangleArea(2, 4)).toBe(8);
        expect(helpers.getRectangleArea(1, 4)).toBe(4);
        expect(helpers.getRectangleArea(8, 3)).toBe(24);
    });
});

describe('getTriangleArea', () => { 
    it('returns triangle area', () => {
        expect(helpers.getTriangleArea(1, 3)).toBe(1.5);
        expect(helpers.getTriangleArea(2, 4)).toBe(4);
        expect(helpers.getTriangleArea(7, 4)).toBe(14);
    });
});

describe('getCircleArea', () => { 
    it('returns circle area', () => {
        expect(helpers.getCircleArea(1)).toBe(Math.PI);
        expect(helpers.getCircleArea(2)).toBe(4 * Math.PI);
        expect(helpers.getCircleArea(0)).toBe(0);
    });
});

describe('getRectangularPrismVolume', () => { 
    it('returns rectangular prism volume apparently', () => {
        expect(helpers.getRectangularPrismVolume(1, 2, 3)).toBe(6);
        expect(helpers.getRectangularPrismVolume(2, 4, 8)).toBe(64);
        expect(helpers.getRectangularPrismVolume(0, 0, 0)).toBe(0);
    });
});