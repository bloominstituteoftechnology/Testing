const funcs = require('./project-2');

describe('Jest', () => {
    test('Jest runs', () => {
    
    });
});

test('should multiply provided number By Ten', () => {
    const expected = 100;
    const actual = helpers.getBiggest

    expect(actual).toEqual(expected);
});

test('should subtract provided number By five', () => {
    const expected = 5;
    const actual = helpers.greeting

    expect(actual).toEqual(expected);
});

test('should return true when two provided strings are same length', () => {
    const expected = true;
    const actual = helpers.isTenOrFive

    expect(actual).toEqual(expected);
});

test('should return true when number is less than ninety', () => {
    const expected = true;
    const actual = helpers.isInRange 

    expect(actual).toEqual(expected);
});
test('should return true when number is greater than fifty', () => {
    const expected = true;
    const actual = helpers.isInteger

    expect(actual).toEqual(expected);
});

test('should return the sum of two numbers', () => {
    const expected = 20;
    const actual = helpers.fizzBuzz

    expect(actual).toEqual(expected);
});
test('should return the difference of two numbers', () => {
    const expected = 10;
    const actual = helpers.isPrime

    expect(actual).toEqual(expected);
});

test('should return the quotient of two numbers divided', () => {
    const expected = 4;
    const actual = helpers.returnFirst

    expect(actual).toEqual(expected);
});
test('should return the product of two numbers multiplied', () => {
    const expected = 100;
    const actual = helpers.returnLast

    expect(actual).toEqual(expected);
});
test('should return the remainder of mod two numbers', () => {
    const expected = 1;
    const actual = helpers.getArrayLength

    expect(actual).toEqual(expected);
});
test('should return true if number provided is even/divisible by two', () => {
    const expected = true;
    const actual = helpers.incrementByOne

    expect(actual).toEqual(expected);
});
test('should return false if number provided is even/divisible by two', () => {
    const expected = false;
    const actual = helpers.addItemToArray
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});

test('should return the product of a number squared', () => {
    const expected = 25;
    const actual = helpers.addItemToFront

    expect(actual).toEqual(expected);
});

test('should return the product of a number cubed', () => {
    const expected = 125;
    const actual = helpers.wordsToSentence

    expect(actual).toEqual(expected);
});
test('should return the provided number exponentially increased', () => {
    const expected = 8;
    const actual = helpers.contains

    expect(actual).toEqual(expected);
});

test('should return the provided number rounded to nearest integer', () => {
    const expected = 10;
    const actual = helpers.addNumbers

    expect(actual).toEqual(expected);
});
test('should return the provided number rounded up', () => {
    const expected = 10;
    const actual = helpers.averageTestScore

    expect(actual).toEqual(expected);
});

test('should return the provided string with an exclamation point added to the end', () => {
    const expected = 'hi!';
    const actual = helpers.largestNumber

    expect(actual).toEqual(expected);
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
