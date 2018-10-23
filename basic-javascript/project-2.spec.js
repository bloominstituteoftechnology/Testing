const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('', () => {

    const getBiggest = funcs.getBiggest;

    const two = getBiggest(1, 2);
    const one = getBiggest(1, 0);
    const three = getBiggest(1, 3);

    expect(two).toBe(2);
    expect(one).toBe(1);
    expect(three).toBe(3);
});

it('', () => {

    const greeting = funcs.greeting;

    const German = greeting('German');
    const Spanish = greeting('Spanish');
    const English = greeting();

    expect(German).toBe('Guten Tag!');
    expect(Spanish).toBe('Hola!');
    expect(English).toBe('Hello!');
});
// HOW DO I TEST THIS??^^^


it('', () => {

    const isTenOrFive = funcs.isTenOrFive;

    const ten = isTenOrFive(10);
    const five = isTenOrFive(5);
    const not = isTenOrFive(1);

    expect(ten).toBe(true);
    expect(five).toBe(true);
    expect(not).toBe(false);
});

it('', () => {

    const isInRange = funcs.isInRange;

    const yes = isInRange(40);
    const no = isInRange(59);
    const maybe = isInRange(20);

    expect(yes).toBe(true);
    expect(no).toBe(false);
    expect(maybe).toBe(false);
});

it('', () => {
    const isInteger = funcs.isInteger;

    const yes = isInteger(2);
    const no = isInteger(2.5);
    const maybe = isInteger(1.5);

    expect(yes).toBe(true);
    expect(no).toBe(false);
    expect(maybe).toBe(false);
});

it('', () => {
    const fizzBuzz = funcs.fizzBuzz;

    const fzbz = fizzBuzz(15);
    const bz = fizzBuzz(5);
    const fz = fizzBuzz(3);

    expect(fzbz).toBe('fizzbuzz');
    expect(bz).toBe('buzz');
    expect(fz).toBe('fizz');
});

it('', () => {
    const isPrime = funcs.isPrime;

    const no = isPrime(1);
    const nope = isPrime(0);
    const yes = isPrime(3);

    expect(no).toBe(false);
    expect(nope).toBe(false);
    expect(yes).toBe(true);
});

it('', () => {
    const expected = [];

    const returnFirst = funcs.returnFirst;

    const actual = returnFirst(expected);

    expect(actual).toBe(expected[0]);
});

it('', () => {
    const expected = [];

    const returnLast = funcs.returnLast;

    const actual = returnLast(expected);

    expect(actual).toBe(expected[expected.length - 1]);
});

it('', () => {
    const expected = [];

    const getArrayLength = funcs.getArrayLength;

    const actual = getArrayLength(expected);

    expect(actual).toBe(expected.length);
});

it('', () => {
    const expected = [];
    const incrementByOne = funcs.incrementByOne;

    const actual = incrementByOne(expected);

    expect(actual).toBe(expected);
});

it('', () => {
    const expected = [];
    const addItemToArray = funcs.addItemToArray;

    const actual = addItemToArray(expected);

    expect(actual).toBe(expected);
});

it('', () => {
    const expected = [];
    const addItemToFront = funcs.addItemToFront;

    const actual = addItemToFront(expected);

    expect(actual).toBe(expected);
});

it('', () => {
    const expected = '';
    const wordsToSentence = funcs.wordsToSentence;

    const actual = wordsToSentence(expected);

    expect(actual).toBe(expected);
});
//not sure about this one ^^^

it('', () => {
    const array = [];
    const item = 123123;
    const contains = funcs.contains;

    const actual = contains(array, item);

    expect(actual).toBe(false);
});

it('', () => {
    const expected = 3;
    const addNumbers = funcs.addNumbers;

    const actual = addNumbers([1 , 2]);

    expect(actual).toBe(expected);
});

it('', () => {
    const expected = 5;
    const averageTestScore = funcs.averageTestScore;

    const actual = averageTestScore([1, 9]);

    expect(actual).toBe(5);
});

it('', () => {
    const expected = 123;
    const largestNumber = funcs.largestNumber;

    const actual = largestNumber([1 , 5 , 21, 120, 123]);

    expect(actual).toBe(123);
});



