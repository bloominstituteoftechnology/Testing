const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('getBiggest', () => {
    expect(funcs.getBiggest(1, 100)).toBe(100);
    expect(funcs.getBiggest(100, 10)).toBe(100);
    expect(funcs.getBiggest(100, 100)).toBe(100);
});

test('greeting', () => {
    expect(funcs.greeting('German')).toMatch('Guten Tag!');
    expect(funcs.greeting('Spanish')).toMatch('Hola!');
    expect(funcs.greeting()).toMatch('Hello!');
});

test('isTenorfive', () => {
    expect(funcs.isTenOrFive(5)).toBeTruthy();
    expect(funcs.isTenOrFive(10)).toBeTruthy();
    expect(funcs.isTenOrFive(100)).toBeFalsy();
});

test('isinrange', () => {
    expect(funcs.isInRange(30)).toBeTruthy();
    expect(funcs.isInRange(20)).toBeFalsy();
    expect(funcs.isInRange(50)).toBeFalsy();
});

test('isinteger', () => {
    expect(funcs.isInteger(2)).toBeTruthy();
    expect(funcs.isInteger(2.5)).toBeFalsy();
    expect(funcs.isInteger(2.00000000000005)).toBeFalsy();
});

test('fizzbuzz', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(6)).toBe('fizz');
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(7)).toBe(7);
});

test('isprime', () => {
    expect(funcs.isPrime(0)).toBeFalsy();
    expect(funcs.isPrime(1)).toBeFalsy();
    expect(funcs.isPrime(-1)).toBeFalsy();
    expect(funcs.isPrime(10)).toBeFalsy();
    expect(funcs.isPrime(7)).toBeTruthy();
});

test('returnfirst', () => {
    expect(funcs.returnFirst([0, 1, 2])).toBe(0);
    expect(funcs.returnFirst([20, 1, 2])).toBe(20);
});

test('returnLast', () => {
    expect(funcs.returnLast([0, 1, 2])).toBe(2);
    expect(funcs.returnLast([0, 1, 20])).toBe(20);
});

test('getarraylength', () => {
    expect(funcs.getArrayLength([1, 1, 1, 1])).toBe(4);
    expect(funcs.getArrayLength([])).toBe(0);
});

test('incrementbyone', () => {
    expect(funcs.incrementByOne([0, 0, 0])).toEqual([1,1,1]);
});

test('additemstoarray', () => {
    expect(funcs.addItemToArray([1, 0], 5)).toEqual([1,0,5]);
});

test('additemtofront', () => {
    expect(funcs.addItemToFront([1,1,1], 3)).toEqual([3,1,1,1]);
});

test('wordstosentence', () => {
    expect(funcs.wordsToSentence(['bob', 'whatever'])).toBe('bob whatever');
});

test('contains', () => {
    expect(funcs.contains([2, 1], 2)).toBeTruthy();
    expect(funcs.contains([2, 1], 20)).toBeFalsy();
    expect(funcs.contains([2, 1], 0)).toBeFalsy();
});

test('addnumbers', () => {
    expect(funcs.addNumbers([1,1,1,1,1])).toBe(5);
    expect(funcs.addNumbers([1,1,1,1,5])).toBe(9);
});

test('avgtestscore', () => {
    expect(funcs.averageTestScore([10, 10, 10, 10])).toBe(10);
});

test('largestNumber', () => {
    expect(funcs.largestNumber([5,4,3,2,1])).toBe(5);
    expect(funcs.largestNumber([5,4,3,2,10000])).toBe(10000);
});