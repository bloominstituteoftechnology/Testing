const helpers = require('./project-2');

//getBiggest

it('should return the largest between the two of given x and given y', () => {
    expect(helpers.getBiggest(3, 6)).toBe(6);
    expect(helpers.getBiggest(6, 3)).toBe(6);
    expect(helpers.getBiggest(3, 3)).toBe(3);
    expect(helpers.getBiggest(-3, 0)).toBe(0);
});

//greeting

it('should return the greeting in accordance with given language', () => {
    expect(helpers.greeting('German')).toBe('Guten Tag!');
    expect(helpers.greeting('Spanish')).toBe('Hola!');
    expect(helpers.greeting('English')).toBe('Hello!');
});

//isTenOrFive

it('should return true if num is 10 or 5', () => {
    expect(helpers.isTenOrFive(10)).toBeTruthy();
    expect(helpers.isTenOrFive(5)).toBeTruthy();
    expect(helpers.isTenOrFive(-10)).toBeFalsy();
    expect(helpers.isTenOrFive(-5)).toBeFalsy();
});

//isInteger

it('should return true if num is a whole number', () => {
    expect(helpers.isInteger(2)).toBeTruthy();
    expect(helpers.isInteger(2.5)).toBeFalsy();
});

//isInRange

it('should return true if num is between 20 and 50', () => {
    expect(helpers.isInRange(22)).toBeTruthy();
    expect(helpers.isInRange(12)).toBeFalsy();
});

//fizzBuzz

it('should return "fizzbuzz" if divisible by 5 and 3, "buzz" if only divisible by 5, and "fizz" if only divisible by 3', () => {
    expect(helpers.fizzBuzz(15)).toBe('fizzbuzz');
    expect(helpers.fizzBuzz(25)).toBe('buzz');  
    expect(helpers.fizzBuzz(9)).toBe('fizz');
});

//isPrime

it('should return true if num is a prime number', () => {
    expect(helpers.isPrime(-1)).toBeFalsy();
    expect(helpers.isPrime(0)).toBeFalsy();
    expect(helpers.isPrime(1)).toBeFalsy();
    expect(helpers.isPrime(2)).toBeTruthy();
    expect(helpers.isPrime(4)).toBeFalsy();
    expect(helpers.isPrime(5)).toBeTruthy();
});

//returnFirst

it('should return the element in the first index in the given array as arr', () => {
    expect(helpers.returnFirst([5,2,3,4,1])).toBe(5);
});

//returnLast

it('should return the element in the last index in the given array as arr', () => {
    expect(helpers.returnLast([5,2,3,4,1])).toBe(1);
});

//getArrayLength

it('should return the length of the given array as arr', () => {
    expect(helpers.getArrayLength([5,2,3,4,1])).toBe(5);
});

//incrementByOne

it('should return the elements in a given array, arr, incremented by 1', () => {
    expect(helpers.incrementByOne([5,2,3,4,1])).toEqual([6,3,4,5,2]);
});

//addItemToArray

it('should return the elements in a given array, arr, with given item added', () => {
    expect(helpers.addItemToArray([5,2,3,4,1], 4)).toEqual([5,2,3,4,1,4]);
});

//addItemToFront

it('should return the elements in a given array, arr, with given item added to the first index', () => {
    expect(helpers.addItemToFront([5,2,3,4,1], 4)).toEqual([4,5,2,3,4,1]);
});

//wordsToSentence

it('should return a sentence, with spaces, given an array of words', () => {
    expect(helpers.wordsToSentence(['I','have','six','pence'])).toBe('I have six pence.');
});

//contains

it('should return true if given item is in the given arr', () => {
    expect(helpers.contains(['I','have','six','pence'], 'have')).toBeTruthy();
    expect(helpers.contains(['I','have','six','pence'], 'frank')).toBeFalsy();
    expect(helpers.contains(['I','have','six','pence'], 5)).toBeFalsy();
});

//addNumbers

it('should return summation of an array of numbers', () => {
    expect(helpers.addNumbers([5,2,3,4,1])).toBe(15);
});

//averageTestScore

it('should return the average of given testScores', () => {
    expect(helpers.averageTestScore([5,3,1])).toBe(3);
});

//largestNumber

it('should return the largest number of given array of numbers', () => {
    expect(helpers.largestNumber([5,3,1])).toBe(5);
});