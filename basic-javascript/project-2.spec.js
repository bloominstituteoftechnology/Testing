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

test('Jest runs', () => {

});

test('get Biggest', () => {

    expect(getBiggest(5, 6)).toBe(6);
    expect(getBiggest(5, 5)).toBe(5);
    expect(getBiggest(9, 5)).toBe(9);
});

test('greeting', () => {
    expect(greeting('German')).toBe('Guten Tag!');
    expect(greeting('Spanish')).toBe('Hola!');
    expect(greeting('English')).toBe('Hello!');
});


test('is Ten Or Five', () => {
    expect(isTenOrFive(4)).toBe(false);
    expect(isTenOrFive(5)).toBe(true);
    expect(isTenOrFive(10)).toBe(true);
});

test('is In Range', () => {
    expect(isInRange(5)).toBe(false);
    expect(isInRange(25)).toBe(true);
    expect(isInRange(50)).toBe(false);
});

test('is Integer', () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(5.1)).toBe(false);
});

test('fizzBuzz', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('is Prime', () => {
    expect(isPrime(13)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(67)).toBe(true);
});

test('return First', () => {
    expect(returnFirst([1, 2, 3, 4])).toBe(1);
    expect(returnFirst(['cat', 'dog', 'bird'])).toBe('cat');
});

test('return Last', () => {
    expect(returnLast(['cat', 'dog', 'bird'])).toBe('bird');
    expect(returnLast([1, 2, 3, 4])).toBe(4);
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
    expect(addItemToArray([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4, 7]);
    expect(addItemToArray(['cat', 'dog', 'bird'], 'fish')).toEqual(['cat', 'dog', 'bird', 'fish']);
});

test('add Item To Front', () => {
    expect(addItemToFront(['cat', 'dog', 'bird'], 'fish')).toEqual(['fish', 'cat', 'dog', 'bird']);
    expect(addItemToFront([1, 2, 3, 4], 7)).toEqual([7, 1, 2, 3, 4]);
});

test('words To Sentence', () => {
    const input = 'the dog';
    const expected = "t h e   d o g";
    expect(wordsToSentence(input)).toEqual(expected);
});

test('contains', () => {
    const input = ['cat', 'dog', 'bird'];
    expect(contains(input, 'fish')).toEqual(false);
    expect(contains(input, 'cat')).toEqual(true);
});

test('add numbers', () => {
    expect(addNumbers([2, 3, 4, 5])).toEqual(14);
})

test('average Test Score', () => {
    const input = [80, 50, 43, 100, 95, 89, 99, 95];
    const expected = 81.375;
    expect(averageTestScore(input)).toEqual(expected);
});

test('largest Number', () => {
    expect(largestNumber([80, 50, 43, 100, 95, 89, 99, 95])).toEqual(100);
    expect(largestNumber([80, 50, 143, 100, 95, 89, 99, 95])).toEqual(143);
});