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