const helpers = require('./project-1');

// start testing!

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

describe('subtractFive()', () => {
    it('should subtract provided number by five', () => {
        const expected = 25;
        const actual = helpers.subtractFive(30);
        expect(actual).toEqual(expected);
    });
});

describe('areSameLength()', () => {
    it('should return true if both strings are the same length', () => {
        const expected = true;
        const actual = helpers.areSameLength('hello', 'howdy');
        expect(actual).toEqual(expected);
    });
});

describe('areEqual', () => {
    it('should return true if both variables are deep equal', () => {
        const expected = true;
        const a = 'test123';
        const b = 'test123';
        const actual = helpers.areEqual(a, b);
        expect(actual).toEqual(expected);
    });
});

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

describe('add', () => {
    it('should return the sum of two numbers', () => {
        const expected = 25;
        const actual = helpers.add(20, 5);
        expect(actual).toEqual(expected);
    });
});

describe('subtract', () => {
    it('should return the difference of two numbers', () => {
        const expected = 25;
        const actual = helpers.subtract(30, 5);
        expect(actual).toEqual(expected);
    });
});

describe('divide', () => {
    it('should divide the first number by the second number', () => {
        const expected = 25;
        const actual = helpers.divide(100, 4);
        expect(actual).toEqual(expected);
    });
});

describe('multiply', () => {
    it('should return the product of two numbers', () => {
        const expected = 25;
        const actual = helpers.multiply(5, 5);
        expect(actual).toEqual(expected);
    });
});

describe('getRemainder', () => {
    it('should return the remainder of two numbers', () => {
        const expected = 0;
        const actual = helpers.getRemainder(25, 5);
        expect(actual).toEqual(expected);
    });
});