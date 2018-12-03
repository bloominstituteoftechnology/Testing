const helpers = require('./project-2');

describe('Jest', () => {
    test('Jest runs', () => {
    
    });
});

test('should return the largest number from the two numbers provided', () => {
    const expected = 10;
    const actual = helpers.getBiggest(5,10)

    expect(actual).toEqual(expected);
});

test('should return hello greeting the language provided', () => {
    const expected = 'Guten Tag!';
    const actual = helpers.greeting('German')
//add edge case for languages not available
// add edge case for when language isn't capitalized
    expect(actual).toEqual(expected);
});

test('should return true when provided number equals five or ten', () => {
    const expected = true;
    const actual = helpers.isTenOrFive(10)
//add edge case for when number is not 5 or 10
    expect(actual).toEqual(expected);
});

test('should return true when number is greater than twenty and is less than fifty', () => {
    const expected = true;
    const actual = helpers.isInRange(35) 

    expect(actual).toEqual(expected);
});
test('should return true when number is an integer', () => {
    const expected = true;
    const actual = helpers.isInteger(5)

    expect(actual).toEqual(expected);
});

test('should return fizzbuzz for number provided when divisible by three and five, buzz when divisible by five, and fizz when divisble by three', () => {
    const expected = 'buzz';
    const actual = helpers.fizzBuzz(20)

    expect(actual).toEqual(expected);
});
test('should return true when number provided is prime', () => {
    const expected = true;
    const actual = helpers.isPrime(3)

    expect(actual).toEqual(expected);
});

test('should return the first index item of provided array', () => {
    const expected = 1;
    const actual = helpers.returnFirst([1,2,3,4,5])

    expect(actual).toEqual(expected);
});
test('should return the last index item of provided array', () => {
    const expected = 5;
    const actual = helpers.returnLast([1,2,3,4,5])

    expect(actual).toEqual(expected);
});
test('should return the length of array provided', () => {
    const expected = 4;
    const actual = helpers.getArrayLength([1,2,3,4,5])

    expect(actual).toEqual(expected);
});
test('should return each index value in the provided array by 1', () => {
    const expected = [2,3,4,5,6];
    const actual = helpers.incrementByOne([1,2,3,4,5])

    expect(actual).toEqual(expected);
});
test('should return provided array with new item added to the end', () => {
    const expected = [1,2,3,4,5,6];
    const actual = helpers.addItemToArray([1,2,3,4,5],6)
//edge case to be added - if X is less than Y
    expect(actual).toEqual(expected);
});

test('should return provided array with new item added to the beginning', () => {
    const expected = [6,1,2,3,4,5];
    const actual = helpers.addItemToFront([1,2,3,4,5],6)

    expect(actual).toEqual(expected);
});

test('should return a single string from an array of strings', () => {
    const expected = 'bob likes to paint';
    const actual = helpers.wordsToSentence(['bob','likes','to', 'paint'])

    expect(actual).toEqual(expected);
});
test('should return true when the provided item can be found in the provided array', () => {
    const expected = true;
    const actual = helpers.contains([1,2,3,4,5],4)

    expect(actual).toEqual(expected);
});

test('should return a single number that is the sum of the values in provided array', () => {
    const expected = 15;
    const actual = helpers.addNumbers([1,2,3,4,5])

    expect(actual).toEqual(expected);
});
test('should return sum of the items in provided array, divided by the total number of items in provided array', () => {
    const expected = 150/5;
    const actual = helpers.averageTestScore([10,20,30,40,50])

    expect(actual).toEqual(expected);
});

test('should return the biggest number found in the provided array of numbers', () => {
    const expected = 50;
    const actual = helpers.largestNumber([10,20,30,40,50])

    expect(actual).toEqual(expected);
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
