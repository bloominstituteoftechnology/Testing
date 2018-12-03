const {
    multiplyByTen,
    subtractFive,
    areSameLength,
    areEqual,
    lessThanNinety,
    greaterThanFifty,
    add,
    subtract,
    divide,
    multiply,
    getRemainder,
    isEven,
    isOdd,
    square,
    cube,
    raiseToPower,
    roundNumber,
    roundUp,
    addExclamationPoint,
    combineNames,
    getGreeting,
    getRectangleArea,
    getTriangleArea,
    getCircleArea,
    getRectangularPrismVolume,
} = require('./project-1');

// start testing!
describe('Project 1', () => {
    describe('1-5', () => {
        test('multiplyByTen', () => {
            const input = 5;
            const expected = 50;
            const actual = multiplyByTen(input);
            expect(actual).toEqual(expected);
        });

        test('subtractFive', () => {
            const input = 5;
            const expected = 0;
            const actual = subtractFive(input);
            expect(actual).toEqual(expected);
        });

        test('areSameLength', () => {
            const a = 'yusuf';
            const b = 'nafey';
            const actual = areSameLength(a, b);
            expect(actual).toBeTruthy;
        });

        test('areEqual', () => {
            const a = 5;
            const b = 9;
            const actual = areEqual(a, b)
            expect(actual).toBeTruthy;
        });

        test('lessThanNinety', () => {
            const input = 1;
            const actual = lessThanNinety(input)
            expect(actual).toBeTruthy;
        });
    });

    describe('6-10', () => {
        test('greaterThanFifty', () => {
            const input = 51;
            const actual = greaterThanFifty(input);
            expect(actual).toBeTruthy;
        });

        test('add', () => {
            const expected = 4;
            const actual = add(2, 2);
            expect(actual).toEqual(expected);
        });

        test('subtract', () => {
            const expected = 4;
            const actual = subtract(8, 4);
            expect(actual).toEqual(expected);
        });

        test('divide', () => {
            const expected = 4;
            const actual = divide(16, 4);
            expect(actual).toEqual(expected)
        });

        test('multiply', () => {
            const expected = 16;
            const actual = multiply(4, 4);
            expect(actual).toEqual(expected);
        });
    });

    // describe('11-16', () => {
    
    // });

    // describe('16-20', () => {
    
    // });

    // describe('21-5', () => {
    
    // });
});