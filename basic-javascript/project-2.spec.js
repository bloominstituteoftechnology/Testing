const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

//   getBiggest
it('should return the biggest array', () => {
    let bigArr = [1, 2, 3];
    let smallArr = [1, 2];

    const expected = bigArr;

    const actual = funcs.getBiggest(bigArr, smallArr);

    expect(actual).toBe(expected);
})

//   greeting
it('should return a greeting in the correct language', () => {
    const german = 'Guten Tag!';
    const spanish = 'Hola!';
    const defaultLanguage = 'Hello!';

    const actualGerman = funcs.greeting('German');
    const actualSpanish = funcs.greeting('Spanish');
    const actualDefault = funcs.greeting();

    expect(actualGerman).toBe(german);
    expect(actualSpanish).toBe(spanish);
    expect(actualDefault).toBe(defaultLanguage);
})

//   isTenOrFive
it('should return true if num is equal to 10 or 5', () => {
    const ten = true;
    const three = false;

    const actualTen = funcs.isTenOrFive(10);
    const actualThree = funcs.isTenOrFive(3);

    expect(actualTen).toBe(ten);
    expect(actualThree).toBe(three);
})

//   isInRange

it('should return true if the given number is within the range 20 < num < 50', () => {
    const thirty = true;
    const ten = false;
    
    const actualThirty = funcs.isInRange(30);
    const actualTen = funcs.isInRange(10);

    expect(actualThirty).toBe(thirty);
    expect(actualTen).toBe(ten);
})

//   isInteger

it('should return true if the given number is an integer, otherwise return false', () => {
    const integer = true;
    const nonInteger = false;

    const actualInteger = funcs.isInteger(8);
    const actualNonInteger = funcs.isInteger(8.888);

    expect(integer).toBe(actualInteger);
    expect(nonInteger).toBe(actualNonInteger);
})

//   fizzBuzz
it('should return fizzbuzz if 15, buzz if 5, fizz if 3', () => {
    const fizzbuzz = 'fizzbuzz';
    const buzz = 'buzz'
    const fizz = 'fizz'

    const actualFizzbuzz = funcs.fizzBuzz(15);
    const actualBuzz = funcs.fizzBuzz(5);
    const actualFizz = funcs.fizzBuzz(3);

    expect(actualFizzbuzz).toBe(fizzbuzz);
    expect(actualBuzz).toBe(buzz);
    expect(actualFizz).toBe(fizz);
})

//   isPrime
it('should return true if number is prime', () => {
    const prime = true;

    const actualPrime = funcs.isPrime(13);

    expect(actualPrime).toBe(prime);
})

//   returnFirst
it('should return the first number in an array', () => {
    const array = [10, 20, 30, 40];
    const first = 10;

    const actualFirst = funcs.returnFirst(array);

    expect(actualFirst).toBe(first);

})

//   returnLast
it('should return the last element in the array', () => {
    const array = [10, 20, 30, 40];
    const last = 40;

    const actualLast = funcs.returnLast(array);
    expect(actualLast).toBe(last);
})

//   getArrayLength
it('should return the length of a given array', () => {
    const length = 4;
    const array = [1, 2, 3, 4];

    const actualLength = funcs.getArrayLength(array);

    expect(actualLength).toBe(length);
})

//   incrementByOne
it('should increase all values in an array by 1', () => {
    const array = [1, 2, 3, 4];
    const result = [2, 3, 4, 5];

    const actualIncrement = funcs.incrementByOne(array);

    expect(actualIncrement).toEqual(result);
})

//   addItemToArray
it('should add a given item to the end of an array', () => {
    const item = 'word';
    const array = ['please', 'add', 'a'];
    const result = ['please', 'add', 'a', 'word'];

    const actualAddItem = funcs.addItemToArray(array, item);
    expect(actualAddItem).toEqual(result);
})

//   addItemToFront
it('should add an item to the front of an array', () => {
    const item = 4;
    const array = [3, 2, 1];
    const result = [4, 3, 2, 1];

    const actualAddToFront = funcs.addItemToFront(array, item);
    expect(actualAddToFront).toEqual(result);
})

//   wordsToSentence
it('should combine the array of words into a sentence', () => {
    const result = 'what a world';
    const array = ['what', 'a', 'world'];

    const actualWordsToSentence = funcs.wordsToSentence(array);

    expect(actualWordsToSentence).toBe(result);
})

//   contains
it('should see if the array contains the given item', () => {
    const result = true;
    const array = [1, 2, 3];
    const item = 3;

    const actualContains = funcs.contains(array, item);

    expect(actualContains).toBe(result);
})

//   addNumbers
it('should add all of the given numbers', () => {
    const sum = 10;
    const numbers = [2, 3, 5];

    const actualAddNumbers = funcs.addNumbers(numbers);

    expect(actualAddNumbers).toBe(sum);
})

//   averageTestScore
it('should return the average score of the given test scores', () => {
    const average = 85;
    const scores = [80, 80, 90, 90];

    const actualAverage = funcs.averageTestScore(scores);

    expect(actualAverage).toBe(average);
})

//   largestNumber
it('should return the largest number in an array', () => {
    const array = [100, 200, 300];
    const largest = 300;
    const actualLargest = funcs.largestNumber(array);

    expect(actualLargest).toBe(largest);
})