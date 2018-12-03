const helpers = require('./project-1');

describe('Jest', () => {
    test('Jest runs', () => {
    
    });
});

test('should multiply provided number By Ten', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10)

    expect(actual).toEqual(expected);
});

test('should subtract provided number By five', () => {
    const expected = 5;
    const actual = helpers.subtractFive

    expect(actual).toEqual(expected);
});

test('should return true when strings are same length', () => {
    const expected = 100;
    const actual = helpers.areSameLength

    expect(actual).toEqual(expected);
});

test('should return true when number is less than ninety', () => {
    const expected = 100;
    const actual = helpers.lessThanNinety 

    expect(actual).toEqual(expected);
});
test('should return true when number is less than fifty', () => {
    const expected = 100;
    const actual = helpers.greaterThanFifty

    expect(actual).toEqual(expected);
});

test('should return the sum of two numbers', () => {
    const expected = 100;
    const actual = helpers.add

    expect(actual).toEqual(expected);
});
test('should return the difference of two numbers', () => {
    const expected = 100;
    const actual = helpers.subtract

    expect(actual).toEqual(expected);
});

test('should return the quotient of two numbers divided', () => {
    const expected = 100;
    const actual = helpers.divide

    expect(actual).toEqual(expected);
});
test('should return the product of two numbers multiplied', () => {
    const expected = 100;
    const actual = helpers.multiply

    expect(actual).toEqual(expected);
});
test('should return the remainder of mod two numbers', () => {
    const expected = 100;
    const actual = helpers.getRemainder

    expect(actual).toEqual(expected);
});
test('should return true if number provided is even/divisible by two', () => {
    const expected = 100;
    const actual = helpers.isEven

    expect(actual).toEqual(expected);
});
test('should return false if number provided is even/divisible by two', () => {
    const expected = 100;
    const actual = helpers.isOdd

    expect(actual).toEqual(expected);
});

test('should return the product of a number squared', () => {
    const expected = 100;
    const actual = helpers.square

    expect(actual).toEqual(expected);
});

test('should return the product of a number cubed', () => {
    const expected = 100;
    const actual = helpers.cube

    expect(actual).toEqual(expected);
});
test('should return the provided number exponentially increased', () => {
    const expected = 100;
    const actual = helpers.raiseToPower

    expect(actual).toEqual(expected);
});

test('should return the provided number rounded to nearest integer', () => {
    const expected = 100;
    const actual = helpers.roundNumber

    expect(actual).toEqual(expected);
});
test('should return the provided number rounded up', () => {
    const expected = 100;
    const actual = helpers.roundUp 

    expect(actual).toEqual(expected);
});

test('should return the provided string with an exclamation point added to the end', () => {
    const expected = 100;
    const actual = helpers.addExclamationPoint

    expect(actual).toEqual(expected);
});
test('should return the provided strings combined as a single string', () => {
    const expected = 100;
    const actual = helpers.combineNames

    expect(actual).toEqual(expected);
});
test('should return the provided string with hello added to the front', () => {
    const expected = 100;
    const actual = helpers.getGreeting

    expect(actual).toEqual(expected);
});
test('should return the product of two numbers provided', () => {
    const expected = 100;
    const actual = helpers.getRectangleArea

    expect(actual).toEqual(expected);
});
test('should return the product of .5 multiplied by the two numbers provided', () => {
    const expected = 100;
    const actual = helpers.getTriangleArea

    expect(actual).toEqual(expected);
});

test('should return the product of .314 multiplied by the number provided, multiplied by itself', () => {
    const expected = 100;
    const actual = helpers.getCircleArea 

    expect(actual).toEqual(expected);
});
test('should return the product of the three numbers provided', () => {
    const expected = 100;
    const actual = helpers.getRectangularPrismVolume

    expect(actual).toEqual(expected);
});
// start testing!
//describe to group tests - aka create test suite
// test - a string telling us what a function *should* do
//expect - assert
