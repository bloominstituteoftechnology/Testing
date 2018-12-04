const helpers = require('./project-2');

test('Jest runs', () => {

});

test('get Biggest', () => {

    expect(helpers.getBiggest(5, 6)).toBe(6);
    expect(helpers.getBiggest(5, 5)).toBe(5);
    expect(helpers.getBiggest(9, 5)).toBe(9);
});

test('greeting', () => {
    expect(helpers.greeting('German')).toBe('Guten Tag!');
    expect(helpers.greeting('Spanish')).toBe('Hola!');
    expect(helpers.greeting('English')).toBe('Hello!');
});


test('is Ten Or Five', () => {
    expect(helpers.isTenOrFive(4)).toBe(false);
    expect(helpers.isTenOrFive(5)).toBe(true);
    expect(helpers.isTenOrFive(10)).toBe(true);
});

test('is In Range', () => {
    expect(helpers.isInRange(5)).toBe(false);
    expect(helpers.isInRange(25)).toBe(true);
    expect(helpers.isInRange(50)).toBe(false);
});

test('is Integer', () => {
    expect(helpers.isInteger(5)).toBe(true);
    expect(helpers.isInteger(5.1)).toBe(false);
});

test('fizzBuzz', () => {
    expect(helpers.fizzBuzz(5)).toBe('buzz');
    expect(helpers.fizzBuzz(3)).toBe('fizz');
    expect(helpers.fizzBuzz(2)).toBe(2);
    expect(helpers.fizzBuzz(15)).toBe('fizzbuzz');
});

test('is Prime', () => {
    expect(helpers.isPrime(13)).toBe(true);
    expect(helpers.isPrime(4)).toBe(false);
    expect(helpers.isPrime(67)).toBe(true);
});

test('return First', () => {
    expect(helpers.returnFirst([1, 2, 3, 4])).toBe(1);
    expect(helpers.returnFirst(['cat', 'dog', 'bird'])).toBe('cat');
});

test('return Last', () => {
    expect(helpers.returnLast(['cat', 'dog', 'bird'])).toBe('bird');
    expect(helpers.returnLast([1, 2, 3, 4])).toBe(4);
});

test('getArray Length', () => {
    const input = [1, 2, 3, 4];
    const expected = 4;
    expect(helpers.getArrayLength(input)).toBe(expected);
});

test('increment By One', () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3, 4, 5];
    expect(helpers.incrementByOne(input)).toEqual(expected);
});

test('add Item To Array', () => {
    expect(helpers.addItemToArray([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4, 7]);
    expect(helpers.addItemToArray(['cat', 'dog', 'bird'], 'fish')).toEqual(['cat', 'dog', 'bird', 'fish']);
});

test('add Item To Front', () => {
    expect(helpers.addItemToFront(['cat', 'dog', 'bird'], 'fish')).toEqual(['fish', 'cat', 'dog', 'bird']);
    expect(helpers.addItemToFront([1, 2, 3, 4], 7)).toEqual([7, 1, 2, 3, 4]);
});

test('words To Sentence', () => {
    const input = ['the', 'dog'];
    const expected = "the dog";
    expect(helpers.wordsToSentence(input)).toEqual(expected);
});

test('contains', () => {
    const input = ['cat', 'dog', 'bird'];
    expect(helpers.contains(input, 'fish')).toEqual(false);
    expect(helpers.contains(input, 'cat')).toEqual(true);
});

test('add numbers', () => {
    expect(helpers.addNumbers([2, 3, 4, 5])).toEqual(14);
})

test('average Test Score', () => {
    const input = [80, 50, 43, 100, 95, 89, 99, 95];
    const expected = 81.375;
    expect(helpers.averageTestScore(input)).toEqual(expected);
});

test('largest Number', () => {
    expect(helpers.largestNumber([80, 50, 43, 100, 95, 89, 99, 95])).toEqual(100);
    expect(helpers.largestNumber([80, 50, 143, 100, 95, 89, 99, 95])).toEqual(143);
});