

//==============================================================================

//-- Dependencies --------------------------------
const helpers = require('./project-1');

//------------------------------------------------
describe('multiplyByTen', () => {
    test('Handles Floats', () => {
        const input = 5.3;
        const expectedResult = 53;
        const result = helpers.multiplyByTen(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('subtractFive', () => {
    test('Handles Floats', () => {
        const input = -5.3;
        const expectedResult = -10.3;
        const result = helpers.subtractFive(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('areSameLength', () => {
    test('Correctly measures strings of same length', () => {
        const input1 = "asdf";
        const input2 = "qwer";
        const result = helpers.areSameLength(input1, input2);
        expect(result).toBeTruthy();
    });
    test('Correctly measures arrays of same length', () => {
        const input1 = [0,1,2,3];
        const input2 = new Array(4);
        const result = helpers.areSameLength(input1, input2);
        expect(result).toBeTruthy();
    });
});

//------------------------------------------------
describe('areEqual', () => {
    test('Correctly determines equality of equal numbers', () => {
        const input1 = 3;
        const input2 = 3;
        const result = helpers.areEqual(input1, input2);
        expect(result).toBeTruthy();
    });
    test('Correctly determines equality of equal strings', () => {
        const input1 = "asdf";
        const input2 = `asdf`;
        const result = helpers.areEqual(input1, input2);
        expect(result).toBeTruthy();
    });
    test('Correctly reveals rounding errors in floating point math', () => {
        const input1 = 0.1+0.2;
        const input2 = 0.3;
        const result = helpers.areEqual(input1, input2);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('lessThanNinety', () => {
    test('Correctly handles negative numbers', () => {
        const input = -99;
        const result = helpers.lessThanNinety(input);
        expect(result).toBeTruthy();
    });
    test('Correctly handles greater values', () => {
        const input = 99;
        const result = helpers.lessThanNinety(input);
        expect(result).toBeFalsy();
    });
    test('Correctly handles 90', () => {
        const input = 90;
        const result = helpers.lessThanNinety(input);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('greaterThanFifty', () => {
    test('Correctly handles lesser values', () => {
        const input = -99;
        const result = helpers.greaterThanFifty(input);
        expect(result).toBeFalsy();
    });
    test('Correctly handles 50', () => {
        const input = 50;
        const result = helpers.greaterThanFifty(input);
        expect(result).toBeFalsy();
    });
    test('Correctly handles greater values', () => {
        const input = 99;
        const result = helpers.greaterThanFifty(input);
        expect(result).toBeTruthy();
    });
    test('Correctly handles NaN', () => {
        const input = NaN;
        const result = helpers.lessThanNinety(input);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('add', () => {
    test('Handles Integers', () => {
        const input1 = -5;
        const input2 = 5;
        const expectedResult = 0;
        const result = helpers.add(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('subtract', () => {
    test('Handles Integers', () => {
        const input1 = 0;
        const input2 = -5;
        const expectedResult = 5;
        const result = helpers.subtract(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('divide', () => {
    test('Handles Integers', () => {
        const input1 = 10;
        const input2 = 2;
        const expectedResult = 5;
        const result = helpers.divide(input1, input2);
        expect(result).toBe(expectedResult);
    });
    test('Division by Zero is Infinity', () => {
        const input1 = 5;
        const input2 = 0;
        const expectedResult = Infinity;
        const result = helpers.divide(input1, input2);
        expect(result).toBe(expectedResult);
    });
    test('Zero divided by Zero is NaN', () => {
        const input1 = 0;
        const input2 = 0;
        const expectedResult = NaN;
        const result = helpers.divide(input1, input2);
        expect(result).toBe(expectedResult);
    })
});

//------------------------------------------------
describe('multiply', () => {
    test('Handles Integers', () => {
        const input1 = 5;
        const input2 = 2;
        const expectedResult = 10;
        const result = helpers.multiply(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getRemainder', () => {
    test('Handles Integers', () => {
        const input1 = 5;
        const input2 = 2;
        const expectedResult = 1;
        const result = helpers.getRemainder(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('isEven', () => {
    test('Handles Even Integers', () => {
        const input = 4;
        const result = helpers.isEven(input);
        expect(result).toBeTruthy();
    });
    test('Handles Odd Integers', () => {
        const input = 5;
        const result = helpers.isEven(input);
        expect(result).toBeFalsy();
    });
    test('Handles Floats', () => {
        const input = 4.2;
        const result = helpers.isEven(input);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('isOdd', () => {
    test('Handles Even Integers', () => {
        const input = 4;
        const result = helpers.isOdd(input);
        expect(result).toBeFalsy();
    });
    test('Handles Odd Integers', () => {
        const input = 5;
        const result = helpers.isOdd(input);
        expect(result).toBeTruthy();
    });
    test('Handles Floats', () => {
        const input = 5.2;
        const result = helpers.isOdd(input);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('square', () => {
    test('Handles Integers', () => {
        const input = 2;
        const expectedResult = 4;
        const result = helpers.square(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('cube', () => {
    test('Handles Integers', () => {
        const input = -3;
        const expectedResult = -27;
        const result = helpers.cube(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('raiseToPower', () => {
    test('Handles Integers', () => {
        const input1 = -5;
        const input2 = 3;
        const expectedResult = -125;
        const result = helpers.raiseToPower(input1, input2);
        expect(result).toBe(expectedResult);
    });
    test('Handles Fractional Powers', () => {
        const input1 = 125;
        const input2 = 1/3;
        const expectedResult = 5;
        const result = helpers.raiseToPower(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('roundNumber', () => {
    test('Handles Positive Floats', () => {
        const input = Math.PI;
        const expectedResult = 3;
        const result = helpers.roundNumber(input);
        expect(result).toBe(expectedResult);
    });
    test('Doesn\'t act like Floor()', () => {
        const input = -3.1;
        const expectedResult = -3;
        const result = helpers.roundNumber(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('roundUp', () => {
    test('Handles Positive Floats', () => {
        const input = Math.PI;
        const expectedResult = 4;
        const result = helpers.roundUp(input);
        expect(result).toBe(expectedResult);
    });
    test('Handles Negatives Floats', () => {
        const input = -3.9;
        const expectedResult = -3;
        const result = helpers.roundUp(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('addExclamationPoint', () => {
    test('Adds "!" to string', () => {
        const input = 'Test String';
        const expectedResult = 'Test String!';
        const result = helpers.addExclamationPoint(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('combineNames', () => {
    test('Correctly combines provided names', () => {
        const input1 = 'Janette';
        const input2 = 'Bond';
        const expectedResult = 'Janette Bond';
        const result = helpers.combineNames(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getGreeting', () => {
    test('Correctly greets provided name', () => {
        const input = 'Janette';
        const expectedResult = 'Hello Janette!';
        const result = helpers.getGreeting(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getRectangleArea', () => {
    test('Correctly computes rectangular area from floats', () => {
        const input1 = 2.5;
        const input2 = 10;
        const expectedResult = 25;
        const result = helpers.getRectangleArea(input1, input2);
        expect(result).toBe(expectedResult);
    });
    test('Correctly report positive area for negative side lengths', () => {
        const input1 = -5;
        const input2 = 5;
        const expectedResult = 25;
        const result = helpers.getRectangleArea(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getTriangleArea', () => {
    test('Correctly computes triangular area', () => {
        const input1 = 10;
        const input2 = 10;
        const expectedResult = 50;
        const result = helpers.getTriangleArea(input1, input2);
        expect(result).toBe(expectedResult);
    });
    test('Correctly report positive area for negative values', () => {
        const input1 = -10;
        const input2 = 10;
        const expectedResult = 50;
        const result = helpers.getTriangleArea(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getCircleArea', () => {
    test('Correctly computes circular area', () => {
        const input = 1;
        const expectedResult = Math.PI;
        const result = helpers.getCircleArea(input);
        expect(result).toBe(expectedResult);
    });
    test('Correctly report positive area for negative radius length', () => {
        const input = -1;
        const expectedResult = Math.PI;
        const result = helpers.getCircleArea(input);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('getRectangularPrismVolume', () => {
    test('Correctly computes Rectanular Prism Volume', () => {
        const input1 = 10;
        const input2 = 20;
        const input3 = 30;
        const expectedResult = 6000;
        const result = helpers.getRectangularPrismVolume(input1, input2, input3);
        expect(result).toBe(expectedResult);
    });
    test('Correctly computes positive volume for negative values', () => {
        const input1 = -10;
        const input2 = 20;
        const input3 = -30;
        const expectedResult = 6000;
        const result = helpers.getRectangularPrismVolume(input1, input2, input3);
        expect(result).toBe(expectedResult);
    });
});