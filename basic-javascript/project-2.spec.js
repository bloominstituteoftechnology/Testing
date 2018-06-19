const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    const testFunc = funcs.getBiggest;

    it('returns type number given type numbers', () => {
        // arrange
        const expected = "number";
        // act
        const actual = typeof testFunc(5, 7);
        // assert
        expect(actual).toBe(expected);
    });

    describe('identifies bigger number', () => {
        it('returns 5 given -1, 5', () => {
            // arrange
            const expected = 5;
            // act
            const actual = testFunc(-1, 5);
            // assert
            expect(actual).toBe(expected);
        });
        it('returns -3 given -11, ', () => {
            // arrange
            const expected = -3;
            // act
            const actual = testFunc(-3, -11);
            // assert
            expect(actual).toBe(expected);
        });
    });
});

describe('greeting', () => {
    const testFunc = funcs.greeting;

    it('returns type string', () => {
        // arrange
        const expected = "string";
        // act
        const actual = typeof testFunc();
        // assert
        expect(actual).toBe(expected);
    });

    describe('returns the correct greeting', () => {
        it('returns "Guten Tag" given "German"', () => {
            // arrange
            const expected = 'Guten Tag!';
            // act
            const actual = testFunc("German");
            // assert
            expect(actual).toBe(expected);
        });
        it('returns "Hola!" given "Spanish"', () => {
            // arrange
            const expected = "Hola!";
            // act
            const actual = testFunc('Spanish');
            // assert
            expect(actual).toBe(expected);
        });
        it('returns "Hello!" given "Japanese" (default case)', () => {
            // arrange
            const expected = "Hello!";
            // act
            const actual = testFunc('Japanese');
            // assert
            expect(actual).toBe(expected);
        });
    });
});

describe('isTenOrFive', () => {
    const testFunc = funcs.isTenOrFive;

    it('returns type boolean', () => {
        // arrange
        const expected = "boolean";
        // act
        const actual = typeof testFunc(null);
        // assert
        expect(actual).toBe(expected);
    });

    describe('identifies whether arg is Ten or Five', () => {
        it('returns true given 10', () => {
            // arrange
            const expected = true;
            // act
            const actual = testFunc(10);
            // assert
            expect(actual).toBe(expected);
        });
        it('returns true given 5', () => {
            // arrange
            const expected = true;
            // act
            const actual = testFunc(5);
            // assert
            expect(actual).toBe(expected);
        });
        it('returns false given 15', () => {
            // arrange
            const expected = false;
            // act
            const actual = testFunc(15);
            // assert
            expect(actual).toBe(expected);
        });
        it('returns false given String 10', () => {
            // arrange
            const expected = false;
            // act
            const actual = testFunc("10");
            // assert
            expect(actual).toBe(expected);
        });
    });
});