const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {

it('should return biggest num of x and y', () => {
    const expected = 9;

    const actual = funcs.getBiggest(9, 5);
    expect(actual).toEqual(expected);
})

it('should return greeting in language', () => {
    const expected = 'Guten Tag!';

    const actual = funcs.greeting('German');
    expect(actual).toEqual(expected);
})

it('should check to see if num is equal to ten or five', () => {
    const expected = true;

    const actual = funcs.isTenOrFive(5);
    expect(actual).toBe(expected);
})

it('should return biggest num of x and y', () => {
    const expected = 9;

    const actual = funcs.getBiggest(9, 5);
    expect(actual).toEqual(expected);
})

it('should check if num is in range from 20 to 50', () => {
    const expected = true;

    const actual = funcs.isInRange(30);
    expect(actual).toBe(expected);
})

it('should check to see if num is an integer', () => {
    const expected = true;

    const actual = funcs.isInteger(5);
    expect(actual).toBe(expected);
})

it('should return biggest num of x and y', () => {
    const expected = 'fizzbuzz';

    const actual = funcs.fizzBuzz(15);
    expect(actual).toEqual(expected);
})

it('should check to see if num is prime', () => {
    const expected = true;

    const actual = funcs.isPrime(2);
    expect(actual).toBe(expected);
})

it('should return first item in arr', () => {
    const expected = 1;

    const actual = funcs.returnFirst([1,2,3]);
    expect(actual).toEqual(expected);
})

it('should return last item in arr', () => {
    const expected = 3;

    const actual = funcs.returnLast([1,2,3]);
    expect(actual).toEqual(expected);
})

it('should return length of array', () => {
    const expected = 3;

    const actual = funcs.getArrayLength([1,2,3]);
    expect(actual).toEqual(expected);
})

it('should return first item in arr', () => {
    const expected = [2,3,4];

    const actual = funcs.incrementByOne([1,2,3]);
    expect(actual).toEqual(expected);
})

it('should add item to an array', () => {
    const expected = [2,3,4];

    const actual = funcs.addItemToArray([2, 3], 4);
    expect(actual).toEqual(expected);
})

it('should add item to front of an array', () => {
    const expected = [2,3,4];

    const actual = funcs.addItemToFront([3,4], 2);
    expect(actual).toEqual(expected);
})

it('should turn words into a sentence', () => {
    const expected = 'what is up';

    const actual = funcs.wordsToSentence(['what', 'is', 'up']);
    expect(actual).toEqual(expected);
})

it('should check if array contains item', () => {
    const expected = true;

    const actual = funcs.contains([2, 3, 4], 4);
    expect(actual).toEqual(expected);
})

it('should add numbers of an arr', () => {
    const expected = 9;

    const actual = funcs.addNumbers([2, 3, 4]);
    expect(actual).toEqual(expected);
})

it('should add test scores of array of scores', () => {
    const expected = 3;

    const actual = funcs.averageTestScore([2, 3, 4]);
    expect(actual).toEqual(expected);
})

it('should return largest num of array', () => {
    const expected = 4;

    const actual = funcs.largestNumber([2, 3, 4]);
    expect(actual).toEqual(expected);
})

})