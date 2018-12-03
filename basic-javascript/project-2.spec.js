const {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
} = require('./project-2');

test('get Biggest', () => {
    const input = 5;
    const inputTwo = 6;
    const expected = 6;
    expect(getBiggest(input, inputTwo)).toBe(expected);
});

test('get Biggest', () => {
    const input = 5;
    const inputTwo = 5;
    const expected = 5;
    expect(getBiggest(input, inputTwo)).toBe(expected);
});

test('get Biggest', () => {
    const input = 9;
    const inputTwo = 5;
    const expected = 9;
    expect(getBiggest(input, inputTwo)).toBe(expected);
});

test('greeting', () => {
    const input = 'German';
    const expected = 'Guten Tag!';
    expect(greeting(input)).toBe(expected);
});

test('greeting', () => {
    const input = 'Spanish';
    const expected = 'Hola!';
    expect(greeting(input)).toBe(expected);
});

test('greeting', () => {
    const input = 'English';
    const expected = 'Hello!';
    expect(greeting(input)).toBe(expected);
});

test('is Ten Or Five', () => {
    const input = 4;
    const expected = false;
    expect(isTenOrFive(input)).toBe(expected);
});

test('is Ten Or Five', () => {
    const input = 5;
    const expected = true;
    expect(isTenOrFive(input)).toBe(expected);
});

test('is Ten Or Five', () => {
    const input = 10;
    const expected = true;
    expect(isTenOrFive(input)).toBe(expected);
});

test('is In Range', () => {
    const input = 5;
    const expected = false;
    expect(isInRange(input)).toBe(expected);
});

test('is In Range', () => {
    const input = 25;
    const expected = true;
    expect(isInRange(input)).toBe(expected);
});

test('is In Range', () => {
    const input = 50;
    const expected = false;
    expect(isInRange(input)).toBe(expected);
});

test('is Integer', () => {
    const input = 5;
    const expected = true;
    expect(isInteger(input)).toBe(expected);
});

test('is Integer', () => {
    const input = 5.1;
    const expected = false;
    expect(isInteger(input)).toBe(expected);
});

test('fizzBuzz', () => {
    const input = 5;
    const expected = 'buzz';
    expect(fizzBuzz(input)).toBe(expected);
});

test('fizzBuzz', () => {
    const input = 3;
    const expected = 'fizz';
    expect(fizzBuzz(input)).toBe(expected);
});

test('fizzBuzz', () => {
    const input = 2;
    const expected = 2;
    expect(fizzBuzz(input)).toBe(expected);
});

test('fizzBuzz', () => {
    const input = 15;
    const expected = 'fizzbuzz';
    expect(fizzBuzz(input)).toBe(expected);
});

test('is Prime', () => {
    const input = 13;
    const expected = true;
    expect(isPrime(input)).toBe(expected);
});

test('is Prime', () => {
    const input = 4;
    const expected = false;
    expect(isPrime(input)).toBe(expected);
});

test('is Prime', () => {
    const input = 67;
    const expected = true;
    expect(isPrime(input)).toBe(expected);
});

test('return First', () => {
    const input = [1, 2, 3, 4];
    const expected = 1;
    expect(returnFirst(input)).toBe(expected);
});

test('return First', () => {
    const input = ['cat', 'dog', 'bird'];
    const expected = 'cat';
    expect(returnFirst(input)).toBe(expected);
});

test('return Last', () => {
    const input = ['cat', 'dog', 'bird'];
    const expected = 'bird';
    expect(returnLast(input)).toBe(expected);
});

test('return Last', () => {
    const input = [1, 2, 3, 4];
    const expected = 4;
    expect(returnLast(input)).toBe(expected);
});

test('getArray Length', () => {
    const input = [1, 2, 3, 4];
    const expected = 4;
    expect(getArrayLength(input)).toBe(expected);
});

test('increment By One', () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3, 4, 5];
    expect(incrementByOne(input)).toEqual(expected);
});

test('add Item To Array', () => {
    const input = [1, 2, 3, 4];
    const inputTwo = 7;
    const expected = [1, 2, 3, 4, 7];
    expect(addItemToArray(input, inputTwo)).toEqual(expected);
});

test('add Item To Array', () => {
    const input = ['cat', 'dog', 'bird'];
    const inputTwo = 'fish';
    const expected = ['cat', 'dog', 'bird', 'fish'];
    expect(addItemToArray(input, inputTwo)).toEqual(expected);
});


test('add Item To Front', () => {
    const input = ['cat', 'dog', 'bird'];
    const inputTwo = 'fish';
    const expected = ['fish', 'cat', 'dog', 'bird'];
    expect(addItemToFront(input, inputTwo)).toEqual(expected);
});

test('add Item To Front', () => {
    const input = [1, 2, 3, 4];
    const inputTwo = 7;
    const expected = [7, 1, 2, 3, 4];
    expect(addItemToFront(input, inputTwo)).toEqual(expected);
});

test('words To Sentence', () => {
    const input = 'the dog';
    const expected = "t h e   d o g";
    expect(wordsToSentence(input)).toEqual(expected);
});

test('contains', () => {
    const input = ['cat', 'dog', 'bird'];
    const inputTwo = 'fish';
    const expected = false;
    expect(contains(input, inputTwo)).toEqual(expected);
});

test('contains', () => {
    const input = ['cat', 'dog', 'bird'];
    const inputTwo = 'cat';
    const expected = true;
    expect(contains(input, inputTwo)).toEqual(expected);
});

test('average Test Score', () => {
    const input = [80, 50, 43, 100, 95, 89, 99, 95];
    const expected = 81.375;
    expect(averageTestScore(input)).toEqual(expected);
});

test('largest Number', () => {
    const input = [80, 50, 43, 100, 95, 89, 99, 95];
    const expected = 100;
    expect(largestNumber(input)).toEqual(expected);
});

test('largest Number', () => {
    const input = [80, 50, 143, 100, 95, 89, 99, 95];
    const expected = 143;
    expect(largestNumber(input)).toEqual(expected);
});