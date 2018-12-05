const helpers = require('./project-1');

// start testing!
describe('Jest', () => {
    test('Jest runs', () => {});
});

describe('multiplyByTen', () => {
    test('1x10=10', () => {
        const result = helpers.multiplyByTen(1);
        expect(result).toBe(10);
    })
});

describe('subtractFive', () => {
    test('5-5=0', () => {
        const result = helpers.subtractFive(5);
        expect(result).toBe(0);
    })
});

describe('areSameLength', () => {
    test('fox=box', () => {
        const result = helpers.areSameLength('fox', 'box');
        expect(result).toBe(true);
    })
});

describe('areEqual', () => {
    test('objectsNotEqual', () => {
        const result = helpers.areEqual({}, {});
        expect(result).toBe(false);
    })
});

describe('lessThanNinety', () => {
    test('89<90', () => {
        const result = helpers.lessThanNinety(89);
        expect(result).toBe(true);
    })
});

describe('greaterThanFifty', () => {
    test('51>50', () => {
        const result = helpers.greaterThanFifty(51);
        expect(result).toBe(true);
    })
});

describe('add', () => {
    test('2+2=4', () => {
        const result = helpers.add(2, 2);
        expect(result).toBe(4);
    })
});

describe('subtract', () => {
    test('100-3=97', () => {
        const result = helpers.subtract(100, 3);
        expect(result).toBe(97);
    })
});

describe('divide', () => {
    test('10/5=2', () => {
        const result = helpers.divide(10, 5);
        expect(result).toBe(2);
    })
});

describe('multiply', () => {
    test('7*7=49', () => {
        const result = helpers.multiply(7, 7);
        expect(result).toBe(49);
    })
});

describe('getRemainder', () => {
    test('5%4=1', () => {
        const result = helpers.getRemainder(5, 4);
        expect(result).toBe(1);
    })
});

describe('isEven', () => {
    test('4isEven', () => {
        const result = helpers.isEven(4);
        expect(result).toBe(true);
    })
});

describe('isOdd', () => {
    test('5isOdd', () => {
        const result = helpers.isOdd(5);
        expect(result).toBe(true);
    })
});

describe('square', () => {
    test('8*8=64', () => {
        const result = helpers.square(8);
        expect(result).toBe(64);
    })
});

describe('cube', () => {
    test('3^3=27', () => {
        const result = helpers.cube(3);
        expect(result).toBe(27);
    })
});

describe('raiseToPower', () => {
    test('3^3=27', () => {
        const result = helpers.raiseToPower(3, 3);
        expect(result).toBe(27);
    })
});

describe('roundNumber', () => {
    test('1.6=2', () => {
        const result = helpers.roundNumber(1.6);
        expect(result).toBe(2);
    })
});

describe('roundUp', () => {
    test('1.3=2', () => {
        const result = helpers.roundUp(1.3);
        expect(result).toBe(2);
    })
});

describe('addExclamationPoint', () => {
    test('rope=>rope!', () => {
        const result = helpers.addExclamationPoint('rope');
        expect(result).toBe('rope!');
    })
});

describe('combineNames', () => {
    test('strIsCorrectLength', () => {
        const result = helpers.combineNames('Iggy', 'Pop');
        expect(result.length).toBe(8);
    })
});

describe('getGreeting', () => {
    test('strIsCorrectLength', () => {
        const result = helpers.getGreeting('world');
        expect(result.length).toBe(12);
    })
});

describe('getRectangleArea', () => {
    test('2*4=8', () => {
        const result = helpers.getRectangleArea(2, 4);
        expect(result).toBe(8);
    })
});

describe('getTriangleArea', () => {
    test('b*h/2=a', () => {
        const result = helpers.getTriangleArea(2, 4);
        expect(result).toBe(4);
    })
});

describe('getCircleArea', () => {
    test('r=1', () => {
        const result = helpers.getCircleArea(1);
        expect(result).toBe(Math.PI);
    })
});

describe('getRectangularPrismVolume', () => {
    test('1x1x1=1', () => {
        const result = helpers.getRectangularPrismVolume(1, 1, 1);
        expect(result).toBe(1);
    })
});
