const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2 testing', () => {
    it('find the largest number', () => {
        expect(funcs.getBiggest(10, 8)).toBe(10);
        expect(funcs.getBiggest(8, 12)).toBe(12);
        // make sure the input is a number
    });

    it('greetings in different languages', () => {
        expect(funcs.greeting('English')).toBe('Hello!');
        expect(funcs.greeting('Jibberish')).toBe('Hello!');
        // make sure the input is a string
    });

    it('check if it is 10 or 5', () => {
        expect(funcs.isTenOrFive(2)).toBe(false);
        expect(funcs.isTenOrFive(15)).toBe(false);
        // make sure input is a number
    });

    it('check if the number is <50 and >20', () => {
        expect(funcs.isInRange(30)).toBe(true);
        expect(funcs.isInRange(72)).toBe(false);
        // make sure input is a number
    });

    it('change a float into an integer', () => {
        expect(funcs.isInteger(3.2)).toBe(false);
        expect(funcs.isInteger(4)).toBe(true);
    });
});