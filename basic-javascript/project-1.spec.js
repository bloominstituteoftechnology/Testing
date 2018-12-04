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
        // 1.
        test('multiplyByTen', () => {
            const input = 5;
            const expected = 50;
            const actual = multiplyByTen(input);
            expect(actual).toEqual(expected); 
        });

        // 2. 
        test('subtractFive', () => {
            const input = 5;
            const expected = 0;
            const actual = subtractFive(input);
            expect(actual).toEqual(expected);
        });

        // 3. 
        test('areSameLength', () => {
            const a = 'yusuf';
            const b = 'nafey';
            const actual = areSameLength(a, b);
            expect(actual).toBeTruthy();
        });

        // 4. 
        test('areEqual', () => {
            const a = 8;
            const b = 8;
            const actual = areEqual(a, b)
            expect(actual).toBeTruthy();
        });

        // 5. 
        test('lessThanNinety', () => {
            const input = 1;
            const actual = lessThanNinety(input)
            expect(actual).toBeTruthy();
        });
    });

    describe('6-10', () => {
        // 6. 
        test('greaterThanFifty', () => {
            const input = 51;
            const actual = greaterThanFifty(input);
            expect(actual).toBeTruthy();
        });

        // 7. 
        test('add', () => {
            const expected = 4;
            const actual = add(2, 2);
            expect(actual).toEqual(expected);
        });

        // 8.
        test('subtract', () => {
            const expected = 4;
            const actual = subtract(8, 4);
            expect(actual).toEqual(expected);
        });

        // 9.
        test('divide', () => {
            const expected = 4;
            const actual = divide(16, 4);
            expect(actual).toEqual(expected)
        });

        // 10.
        test('multiply', () => {
            const expected = 16;
            const actual = multiply(4, 4);
            expect(actual).toEqual(expected);
        });
    });

    describe('11-16', () => {
        // 11.
        test('getRemainder', () => {
            const expected = 1;
            const actual = getRemainder(3, 2);
            expect(actual).toEqual(expected);
        });

        // 12.
        test('isEven', () => {
            const actual = isEven(6);
            expect(actual).toBeTruthy();
        });

        // 13.
        test('isOdd', () => {
            const actual = isOdd(5);
            expect(actual).toBeTruthy(); 
        });

        // 14.
        test('square', () => {
            const expected = 16;
            const actual = square(4);
            expect(actual).toEqual(expected);
        });

        // 15.
        test('cube', () => {
            const expected = 27;
            const actual = cube(3);
            expect(actual).toEqual(expected)
        });
    });

    describe('16-20', () => {
        // 16.
        test('raiseToPower', () => {
            const expected = 16;
            const actual = raiseToPower(2, 4);
            expect(actual).toEqual(expected);
        });

        // 17.
        test('roundNumber', () => {
            const expected = 5;
            const actual = roundNumber(5.4);
            expect(actual).toEqual(expected)
        });

        // 18.
        test('roundUp', () => {
            const expected = 5;
            const actual = roundUp(4.2);
            expect(actual).toEqual(expected);
        });

        // 19.
        test('addExclamationPoint', () => {
            const expected = 'hi!'
            const actual = addExclamationPoint('hi')
            expect(actual).toBe(expected);
        });

        // 20.
        test('combineNames', () => {
            const expected = 'yusuf nafey';
            const actual = combineNames('yusuf', 'nafey');
            expect(actual).toBe(expected);
        });
    });

    describe('21-25', () => {
        // 21.
        test('getGreeting', () => {
            const expected = 'Hello yusuf!'
            const actual = getGreeting('yusuf')
            expect(actual).toBe(expected);
        });

        // 22.
        test('getRectangleArea', () => {
            const expected = 50;
            const actual = getRectangleArea(10, 5);
            expect(actual).toEqual(expected);
        });

        // 23.
        test('getTriangleArea', () => {
            const expected = 50;
            const actual = getTriangleArea(10, 10);
            expect(actual).toEqual(expected);
        });

        // 24.
        test('getCircleArea', () => {
            const expected = Math.PI * 4;
            const actual = getCircleArea(2);
            expect(actual).toEqual(expected);
        });

        // 25.
        test('getRectangularPrismVolume', () => {
            const expected = 24;
            const actual = getRectangularPrismVolume(2, 3, 4);
            expect(actual).toEqual(expected);
        });
    });
});