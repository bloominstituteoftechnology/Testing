const funcs = require('./project-2');

describe('Jest', () => {
    test('Jest runs', () => {
    
    });
});

test('should return the largest number from the two numbers provided', () => {
    const expected = 100;
    const actual = helpers.getBiggest

    expect(actual).toEqual(expected);
});

test('should return hello greeting the language provided', () => {
    const expected = 5;
    const actual = helpers.greeting
//add edge case for languages not available
    expect(actual).toEqual(expected);
});

test('should return true when provided number equals five or ten', () => {
    const expected = true;
    const actual = helpers.isTenOrFive
//add edge case for when number is not 5 or 10
    expect(actual).toEqual(expected);
});

test('should return true when number is greater than twenty and is less than fifty', () => {
    const expected = true;
    const actual = helpers.isInRange 

    expect(actual).toEqual(expected);
});
test('should return true when number is an integer', () => {
    const expected = true;
    const actual = helpers.isInteger

    expect(actual).toEqual(expected);
});

test('should return fizzbuzz for number provided when divisible by three and five, buzz when divisible by three, and fizz when divisble by 5', () => {
    const expected = 20;
    const actual = helpers.fizzBuzz

    expect(actual).toEqual(expected);
});
test('should return true when number provided is prime', () => {
    const expected = 10;
    const actual = helpers.isPrime

    expect(actual).toEqual(expected);
});

test('should return the first index item of provided array', () => {
    const expected = 4;
    const actual = helpers.returnFirst

    expect(actual).toEqual(expected);
});
test('should return the last index item of provided array', () => {
    const expected = 100;
    const actual = helpers.returnLast

    expect(actual).toEqual(expected);
});
test('should return the length of array provided', () => {
    const expected = 1;
    const actual = helpers.getArrayLength

    expect(actual).toEqual(expected);
});
test('should return the index value, after the current index in provided array', () => {
    const expected = true;
    const actual = helpers.incrementByOne

    expect(actual).toEqual(expected);
});
test('should return provided array with new item added to the end', () => {
    const expected = false;
    const actual = helpers.addItemToArray
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});

test('should return provided array with new item added to the beginning', () => {
    const expected = 25;
    const actual = helpers.addItemToFront

    expect(actual).toEqual(expected);
});

test('should return a single string from an array of strings', () => {
    const expected = 125;
    const actual = helpers.wordsToSentence

    expect(actual).toEqual(expected);
});
test('should return true when the provided item can be found in the provided array', () => {
    const expected = 8;
    const actual = helpers.contains

    expect(actual).toEqual(expected);
});

test('should return a single number that is the sum of the values in provided array', () => {
    const expected = 10;
    const actual = helpers.addNumbers

    expect(actual).toEqual(expected);
});
test('should return sum of the items in provided array, and the total number of items in provided array', () => {
    const expected = 10;
    const actual = helpers.averageTestScore

    expect(actual).toEqual(expected);
});

test('should return the biggest number found in the provided array of numbers', () => {
    const expected = 'hi!';
    const actual = helpers.largestNumber

    expect(actual).toEqual(expected);
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
