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