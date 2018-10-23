const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest()', () => {
    it('should compare two numbers and return the biggest number', () => {
        const expected = 25;
        const actual = funcs.getBiggest(25, 5);
        expect(actual).toEqual(expected);
    });
});

describe('greeting()', () => {
    it('should return a greeting in chosen language', () => {
        const expected = 'Hola!';
        const actual = funcs.greeting('Spanish');
        expect(actual).toEqual(expected);
    });
});

describe('isTenOrFive()', () => {
    it('should return true if number is equal to 10 or 5', () => {
        const expected = true;
        const actual = funcs.isTenOrFive(10);
        expect(actual).toEqual(expected);
    });
    it('should return false if number is not equal to 10 or 5', () => {
        const expected = false;
        const actual = funcs.isTenOrFive(105);
        expect(actual).toEqual(expected);
    });
});

describe('isInRange()', () => {
    it('should return true if number is less than 50 but greater than 20', () => {
        const expected = true;
        const actual = funcs.isInRange('25');
        expect(actual).toEqual(expected);
    });
    it('should return false if number is greater than 50 or less than 20', () => {
        const expected = false;
        const actual = funcs.isInRange('51');
        expect(actual).toEqual(expected);
    });
});

describe('isInteger()', () => {
    it('should return true', () => {
        const expected = true;
        const actual = funcs.isInteger(25);
        expect(actual).toEqual(expected);
    });
    it('should return false', () => {
        const expected = false;
        const actual = funcs.isInteger(5.1);
        expect(actual).toEqual(expected);
    });
});

describe('fizzBuzz()', () => {
    it('should return correct string', () => {
	const expected1 = 'fizzbuzz'
	const expected2 = 'buzz'
	const expected3 = 'fizz'
	const expected4 = 1
	const actual1 = funcs.fizzBuzz(15)
	const actual2 = funcs.fizzBuzz(5)
	const actual3 = funcs.fizzBuzz(3)
	const actual4 = funcs.fizzBuzz(1)
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
	expect(actual3).toBe(expected3)
	expect(actual4).toBe(expected4)
    });
});