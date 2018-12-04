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

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2', () => {
    describe('1-6', () => {
        // 1.
        test('getBiggest', () => {
            const actual = getBiggest(3, 4);
            expect(actual).toBe(4);
        });

        // 2.
        describe('greeting', () => {
            test('German', () => {
                const actual = greeting('German');
                expect(actual).toBe('Guten Tag!');
            });
            test('Spanish', () => {
                const actual = greeting('Spanish');
                expect(actual).toBe('Hola!');
            });
            test('Default', () => {
                const actual = greeting('default');
                expect(actual).toBe('Hello!');
            });
        });

        // 3.
        describe('isTenOrFive', () => {
            test('is ten', () => {
                const actual = isTenOrFive(10);
                expect(actual).toBeTruthy();
            });
            test('is five', () => {
                const actual = isTenOrFive(5);
                expect(actual).toBeTruthy();
            });
            test('is not ten or five', () => {
                const actual = isTenOrFive(7);
                expect(actual).toBeFalsy();
            });
        });

        // 4.
        describe('isInRange', () => {
            test('is in range', () => {
                const actual = isInRange(25);
                expect(actual).toBeTruthy();
            });
            test('not in range', () => {
                const actual = isInRange(51);
                expect(actual).toBeFalsy();
            });
        });

        // 5.
        describe('isInteger', () => {
            test('is integer', () => {
                const actual = isInteger(5);
                expect(actual).toBeTruthy();
            });
            test('not integer', () => {
                const actual = isInteger(5.4);
                expect(actual).toBeFalsy();
            });
        });

        // 6.
        describe('fizzBuzz', () => {
            test('returns fizzbuzz', () => {
                const actual = fizzBuzz(15);
                expect(actual).toBe('fizzbuzz');
            });
            test('returns buzz', () => {
                const actual = fizzBuzz(5);
                expect(actual).toBe('buzz');
            });
            test('returns fizz', () => {
                const actual = fizzBuzz(3);
                expect(actual).toBe('fizz');
            });
            test('returns number', () => {
                const actual = fizzBuzz(2);
                expect(actual).toBe(2);
            });
        });
    });

    describe('7-12', () => {
        // 7.
        test('isPrime', () => {

        });

        // 8.
        test('', () => {

        });

        // 9.
        test('', () => {

        });

        // 10.
        test('', () => {

        });

        // 11.
        test('', () => {

        });

        // 12.
        test('', () => {

        });
    });

    describe('13-18', () => {
        // 13.
        test('', () => {

        });

        // 14.
        test('', () => {

        });

        // 15.
        test('', () => {

        });

        // 16.
        test('', () => {

        });

        // 17.
        test('', () => {

        });

        // 18.
        test('', () => {

        });
    });
});