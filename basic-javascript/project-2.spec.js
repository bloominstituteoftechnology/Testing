const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns only the biggest number', () => {
        expect(funcs.getBiggest(1,2)).toBe(2);
        expect(funcs.getBiggest(0,-3)).toBe(0);
        expect(funcs.getBiggest(undefined, 10)).toBe(10);
        expect(funcs.getBiggest(true, false)).toBe(true);
    });
});

describe('greeting',() => {
    it('returns greeting for inputted language', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting('English')).toBe('Hello!');
        expect(funcs.greeting(undefined)).toBe('Hello!');
    });
});

describe('fizzBuzz', () => {
    it('returns true if number is equal to five or ten', () => {
        expect(funcs.isInteger(10)).toBe(true);
        expect(funcs.isInteger(5)).toBe(true);
        expect(funcs.isInteger(1)).toBe(false);
        expect(funcs.isInteger(undefined)).toBe(false);
    });
});

describe('isInRange', () => {
    it('returns true if number less than 50 and greater than 20', () => {
        expect(funcs.isInRange(21)).toBe(true);
        expect(funcs.isInRange(5)).toBe(false);
        expect(funcs.isInRange(49)).toBe(true);
        expect(funcs.isInRange(undefined)).toBe(false);
    });
});
describe('isInteger', () => {
    it('returns true if object is an integer', () => {
        expect(funcs.isInteger(10)).toBe(true);
        expect(funcs.isInteger('String')).toBe(false);
        expect(funcs.isInteger(false)).toBe(false);
        expect(funcs.isInteger(undefined)).toBe(false);
    });
});
describe.only('fizzBuzz', () => {
    it('returns fizz if number is divisible by 3 and if number is 5 returns buzz; if neither is true returns number', () => {
        expect(funcs.fizzBuzz(9)).toBe('fizz');
        expect(funcs.fizzBuzz(10)).toBe('buzz');
        expect(funcs.fizzBuzz(8)).toBe(8);
        expect(funcs.fizzBuzz(false)).toBe('fizzbuzz');
    });
});
});