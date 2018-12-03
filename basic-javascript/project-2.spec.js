const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    test('Correctly retuns biggest number from two inputs', () => {
        const input1 = 5;
        const input2 = 6;
        const expected = 6;
        const actual = funcs.getBiggest(input1, input2);
        expect(actual).toBe(expected);
    });
    test('correctly returns number when inputs the same', () => {
        const input1 = 6;
        const input2 = 6;
        const expected = 6;
        const actual = funcs.getBiggest(input1, input2);
        expect(actual).toBe(expected);        
    });
});

describe('greeting', () => {
    test('Correctly returns German greeting', () => {
        const input = 'German';
        const expected = 'Guten Tag!';
        const actual = funcs.greeting(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns Spanish greeting', () => {
        const input = 'Spanish';
        const expected = 'Hola!';
        const actual = funcs.greeting(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns default greeting', () => {
        const expected = 'Hello!';
        const actual = funcs.greeting();
        expect(actual).toBe(expected);
    });
});

describe('isTenOrFive', () => {
    test('Correctly returns true if input is 5', () => {
        const input = 5;
        const expected = true;
        const actual = funcs.isTenOrFive(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns true if input is 10', () => {
        const input = 10;
        const expected = true;
        const actual = funcs.isTenOrFive(input);
        expect(actual).toBe(expected);
    });
});

describe('isInRange', () => {
    test('Correctly returns false if above range', () => {
        const input = 51;
        const expected = false;
        const actual = funcs.isInRange(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns true if in range', () => {
        const input = 30;
        const expected = true;
        const actual = funcs.isInRange(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns false if below range', () => {
        const input = 19;
        const expected = false;
        const actual = funcs.isInRange(input);
        expect(actual).toBe(expected);
    });
});

describe('isInteger', () => {
    test('Correctly returns true if input is an interger', () => {
        const input = 2;
        const expected = true;
        const actual = funcs.isInteger(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns false if input is not an interger', () => {
        const input = 2.5;
        const expected = false;
        const actual = funcs.isInteger(input);
        expect(actual).toBe(expected);
    });
});

describe('fizzBuzz', () => {
    test('Correctly returns fizzbuzz if input is divisble by 3 and 5', () => {
        const input = 15;
        const expected = 'fizzbuzz';
        const actual = funcs.fizzBuzz(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns buzz if input is divisble by 5', () => {
        const input = 5;
        const expected = 'buzz';
        const actual = funcs.fizzBuzz(input);
        expect(actual).toBe(expected);
    });
    test('Correctly returns fizz if input is divisble by 3', () => {
        const input = 6;
        const expected = 'fizz';
        const actual = funcs.fizzBuzz(input);
        expect(actual).toBe(expected);
    });
});

describe('isPrime', () => {
    test('Returns false if input is negative', () => {
        const input = -1;
        const expected = false;
        const actual = funcs.isPrime(input);
        expect(actual).toBe(expected);
    });
    test('Returns false if input is 1', () => {
        const input = 1;
        const expected = false;
        const actual = funcs.isPrime(input);
        expect(actual).toBe(expected);
    });
    test('Returns false if input is 0', () => {
        const input = 0;
        const expected = false;
        const actual = funcs.isPrime(input);
        expect(actual).toBe(expected);
    });
    test('Returns false if input is not prime', () => {
        const input = 4;
        const expected = false;
        const actual = funcs.isPrime(input);
        expect(actual).toBe(expected);
    });
    test('Returns true if input is prime', () => {
        const input = 3;
        const expected = true;
        const actual = funcs.isPrime(input);
        expect(actual).toBe(expected);
    });
});

describe('returnFirst', () => {
    test('Check if returns first item in array', () => {
        const input = [1,2,3,4,5];
        const expected = 1;
        const actual = funcs.returnFirst(input);
        expect(actual).toBe(expected);
    });
});

describe('returnLast', () => {
    test('Check if returns Last item in array', () => {
        const input = [1,2,3,4,5];
        const expected = 5;
        const actual = funcs.returnLast(input);
        expect(actual).toBe(expected);
    });
});

