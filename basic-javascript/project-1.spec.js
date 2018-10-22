const helpers = require('./project-1');

// start testing!

// multiplyByTen
it('should multiply given number by ten', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);

})

it('should return 0 when called with no value', () => {
    const product = helpers.multiplyByTen();
    expect(product).toBe(0);
})

// subtractFive
it('should subtract 5 from the given number', () => {
    const expected = 5;
    const actual = helpers.subtractFive(10);
    expect(actual).toEqual(expected);
})

it('should return -5 if no number is given', () => {
    const result = helpers.subtractFive();
    expect(result).toBe(-5);
})


// areSameLength
it('should return true if strings are the same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('one', 'two');
    expect(actual).toBe(expected);
})

it('should return false if strings are different lengths', () => {
    const expected = false;
    const actual = helpers.areSameLength('one', 'three');
    expect(actual).toBe(expected);
})

it('should return false if a string is not given', () => {
    const expected = false;
    const actual = helpers.areSameLength(123, '123');
    expect(actual).toBe(expected);
})

// areEqual

it('should return true if the values are deeply equivalent', () => {
    const expected = true;
    const actual = helpers.areEqual(2, 2);
    expect(actual).toBe(expected);
})

it('should return false if there is not deep equivalency', () => {
    const expected = false;
    const actual = helpers.areEqual('2', 2);
    expect(actual).toBe(expected);
})

// lessThanNinety
it('should return true if < 90, false if > 90', () => {
    const lessThan = true;
    const greaterThan = false;
    const actualLess = helpers.lessThanNinety(45);
    const actualGreater = helpers.lessThanNinety(180);

    expect(actualLess).toBe(lessThan);
    expect(actualGreater).toBe(greaterThan);
})

// greaterThanFifty
it('should return true if > 50, false if < 50', () => {
    const greaterThan = true;
    const lessThan = false;

    const actualLess = helpers.greaterThanFifty(25);
    const actualGreater = helpers.greaterThanFifty(100);

    expect(actualGreater).toBe(greaterThan);
    expect(actualLess).toBe(lessThan);
})

// add

it('should add the two given numbers', () => {
    const expected = 50;
    const actual = helpers.add(20, 30);

    expect(actual).toEqual(expected);
})

// subtract

it('should subtract the two given numbers', () => {
    const expected = 50;
    const actual = helpers.subtract(80, 30);

    expect(actual).toEqual(expected);
})

// divide

it('should divide the two given numbers', () => {
    const expected = 10;
    const actual = helpers.divide(100, 10);

    expect(actual).toEqual(expected);
})

// multiply

it('should multiply the given numbers', () => {
    const expected = 100;
    const actual = helpers.multiply(10, 10);

    expect(actual).toEqual(expected);
})

// getRemainder
it('should return the remainder of dividing the two numbers', () => {
    const expected = 1;
    const actual = helpers.getRemainder(101, 10);

    expect(actual).toEqual(expected);
})

// isEven
it('should return true if number is even, false if not', () => {
    const even = true;
    const odd = false;

    const actualEven = helpers.isEven(20);
    const actualOdd = helpers.isEven(21);

    expect(even).toBe(actualEven);
    expect(odd).toBe(actualOdd);
})

// isOdd
it('should return true if number is odd, false if not', () => {
    const even = false;
    const odd = true;

    const actualEven = helpers.isOdd(20);
    const actualOdd = helpers.isOdd(21);

    expect(even).toBe(actualEven);
    expect(odd).toBe(actualOdd);
})

// square
it('should square the given number (num^2)', () => {
    const expected = 100;
    const actual = helpers.square(10);

    expect(actual).toEqual(expected);
})

// cube
it('should cube the given number (num^3', () => {
    const expected = 1000;
    const actual = helpers.cube(10);

    expect(actual).toEqual(expected);
})

// raiseToPower
it('should return the given number to the power of n', () => {
    const expected = 10000;
    const actual = helpers.raiseToPower(10, 4);

    expect(actual).toEqual(expected);
})

// roundNumber
it('should round the number to the nearest integer', () => {
    const expected = 7;
    const actual = helpers.roundNumber(6.8);

    expect(actual).toEqual(expected);
})

// roundUp
it('should round the number to the next largest integer', () => {
    const expected = 7;
    const actual = helpers.roundUp(6.3);

    expect(actual).toEqual(expected);
})

// addExclamationPoint
it('should add an exclamation point to the given string', () => {
    const expected = 'wow!';
    const actual = helpers.addExclamationPoint('wow');

    expect(actual).toBe(expected);
})

// combineNames
it('should add the given first and last names together into one string', () => {
    const expected = 'Lambda School';
    const actual = helpers.combineNames('Lambda', 'School');

    expect(actual).toBe(expected);
})

// getGreeting
it('should return a greeting for the given name', () => {
    const expected = 'Hello Mark!';
    const actual = helpers.getGreeting('Mark');

    expect(actual).toBe(expected);
})

// getRectangleArea
it('should return the area of a rectangle using the given dimensions', () => {
    const expected = 50;
    const actual = helpers.getRectangleArea(10, 5);

    expect(actual).toEqual(expected);
})

// get triangle area
it('should return the area of a triangle using the given dimensions', () => {
    const expected = 25;
    const actual = helpers.getTriangleArea(5, 10);

    expect(actual).toEqual(expected);

})

// getCircleArea
it('should return the area of a circle using the given radius', () => {
    const expected = 314.1592653589793;
    const actual = helpers.getCircleArea(10);

    expect(actual).toEqual(expected);
})

// getRectangularPrismVolume
it('should return the volume of a rectangular prism with the given dimensions', () => {
    const expected = 125;
    const actual = helpers.getRectangularPrismVolume(5, 5, 5);

    expect(actual).toEqual(expected);
})