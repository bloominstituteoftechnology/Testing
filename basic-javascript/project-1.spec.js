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
    const actual = helpers.subtractFive(10)

    expect(actual).toEqual(expected);
});

test('should return true when two provided strings are same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('test', 'bird')

    expect(actual).toEqual(expected);
});

test('should return true when number is less than ninety', () => {
    const expected = true;
    const actual = helpers.lessThanNinety(80) 

    expect(actual).toEqual(expected);
});
test('should return true when number is greater than fifty', () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(55)

    expect(actual).toEqual(expected);
});

test('should return the sum of two numbers', () => {
    const expected = 20;
    const actual = helpers.add(12,8)

    expect(actual).toEqual(expected);
});
test('should return the difference of two numbers', () => {
    const expected = 10;
    const actual = helpers.subtract(15,5)

    expect(actual).toEqual(expected);
});

test('should return the quotient of two numbers divided', () => {
    const expected = 4;
    const actual = helpers.divide(20,5)

    expect(actual).toEqual(expected);
});
test('should return the product of two numbers multiplied', () => {
    const expected = 100;
    const actual = helpers.multiply(10,10)

    expect(actual).toEqual(expected);
});
test('should return the remainder of mod two numbers', () => {
    const expected = 1;
    const actual = helpers.getRemainder(9,8)
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});
test('should return true if number provided is even/divisible by two', () => {
    const expected = true;
    const actual = helpers.isEven(10)
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});
test('should return false if number provided is even/divisible by two', () => {
    const expected = false;
    const actual = helpers.isOdd(10)
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});

test('should return the product of a number squared', () => {
    const expected = 25;
    const actual = helpers.square(5)

    expect(actual).toEqual(expected);
});

test('should return the product of a number cubed', () => {
    const expected = 125;
    const actual = helpers.cube(5)

    expect(actual).toEqual(expected);
});
test('should return the provided number exponentially increased', () => {
    const expected = 8;
    const actual = helpers.raiseToPower(2,3)

    expect(actual).toEqual(expected);
});

test('should return the provided number rounded to nearest integer', () => {
    const expected = 10;
    const actual = helpers.roundNumber(9.6)

    expect(actual).toEqual(expected);
});
test('should return the provided number rounded up', () => {
    const expected = 10;
    const actual = helpers.roundUp(9.1)

    expect(actual).toEqual(expected);
});

test('should return the provided string with an exclamation point added to the end', () => {
    const expected = 'hi!';
    const actual = helpers.addExclamationPoint('hi')

    expect(actual).toEqual(expected);
});
test('should return the provided strings combined as a single string', () => {
    const expected = 'bob ross';
    const actual = helpers.combineNames('bob','ross')

    expect(actual).toEqual(expected);
});
test('should return the provided string with hello added to the front', () => {
    const expected = 'Hello webster!';
    const actual = helpers.getGreeting('webster')

    expect(actual).toEqual(expected);
});
test('should return the product of two numbers provided', () => {
    const expected = 24;
    const actual = helpers.getRectangleArea(8,3)

    expect(actual).toEqual(expected);
});
test('should return the product of .5 multiplied by the two numbers provided', () => {
    const expected = 7.5;
    const actual = helpers.getTriangleArea(3,5)

    expect(actual).toEqual(expected);
});

test('should return the product of .314 multiplied by the number provided, multiplied by itself', () => {
    const expected = 78.53981633974483;
    const actual = helpers.getCircleArea(5) 

    expect(actual).toEqual(expected);
});
test('should return the product of the three numbers provided', () => {
    const expected = 30;
    const actual = helpers.getRectangularPrismVolume(2,3,5)

    expect(actual).toEqual(expected);
});
// start testing!
//describe to group tests - aka create test suite
// test - a string telling us what a function *should* do
//expect - assert
