const helpers = require('./project-1');

// start testing!

describe('multiplyByTen', () => {
    const value = 10;
    const result = helpers.multiplyByTen(value);

    test('returns integer', () => {

        expect(typeof result === 'number').toBeTruthy();
    })

    test('returns expected value', () => {
        expect(result).toBe(100);
    })
})

describe('subtractFive', () => {
    const value = 10;
    const result = helpers.subtractFive(value);

    test('returns integer', () => {

        expect(typeof result === 'number').toBeTruthy();
    })

    test('returns expected value', () => {
        expect(result).toBe(5);
    })
})

describe('areSameLength', () => {
    const string1 = 'Hey';
    const string2 = 'Buy';
    const faultyString = 2;
    const faultyString2 = 'WOOOOOO'

    test('returns true if same length', () => {
        expect(helpers.areSameLength(string1, string2)).toBe(true);
    })

    test('returns false if one is not a string', () => {
        expect(helpers.areSameLength(string1, faultyString)).toBe(false);
    })

    test('returns false if diff lengths', () => {
        expect(helpers.areSameLength(string1, faultyString2)).toBe(false);
    })

})

describe('areEqual', () => {
    const string = 'wooo';
    const value = 2;

    test('returns true for equal strings', () => {
        expect(helpers.areEqual(string, 'wooo')).toBe(true);
    })

    test('returns false for diff strings', () => {
        expect(helpers.areEqual(string, 'bang')).toBe(false);
    })

    test('returns true for equal numbers', () => {
        expect(helpers.areEqual(value, 2)).toBe(true);
    })

    test('returns false for diff numbers', () => {
        expect(helpers.areEqual(value, 3)).toBe(false);
    })
})

describe('lessThanNinety', () => {
    const lessVal = 10;
    const moreVal = 91;

    test('returns true if less than', () => {
        expect(helpers.lessThanNinety(lessVal)).toBe(true);
    })

    test('returns false if greater than', () => {
        expect(helpers.lessThanNinety(moreVal)).toBe(false);
    })
})

describe('greaterThanFifty', () => {
    const lessVal = 1;
    const moreVal = 51;

    test('returns true if greater than', () => {
        expect(helpers.greaterThanFifty(moreVal)).toBe(true);
    })

    test('returns false if less than', () => {
        expect(helpers.greaterThanFifty(lessVal)).toBe(false);
    })
})

describe('add', () => {
    const val1 = 1;
    const val2 = 2;

    test('returns expected value', () => {
        expect(helpers.add(val1, val2)).toBe(3);
    })
})

describe('subtract', () => {
    const val1 = 1;
    const val2 = 2;

    test('returns expected value', () => {
        expect(helpers.subtract(val1, val2)).toBe(-1);
    })
})

describe('multiply', () => {
    const val1 = 1;
    const val2 = 2;

    test('returns expected value', () => {
        expect(helpers.multiply(val1, val2)).toBe(2);
    })
})

describe('divide', () => {
    const val1 = 1;
    const val2 = 2;

    test('returns expected value', () => {
        expect(helpers.divide(val1, val2)).toBe(.5);
    })
})

describe('getRemainder', () => {
    const val1 = 1;
    const val2 = 2;

    test('returns expected value', () => {
        expect(helpers.getRemainder(val1, val2)).toBe(1);
    })
})

describe('isEven', () => {
    const evenVal = 4;
    const oddVal = 5;

    test('returns true if even', () => {
        expect(helpers.isEven(evenVal)).toBe(true);
    })

    test('returns false if odd', () => {
        expect(helpers.isEven(oddVal)).toBe(false);
    })
})

describe('isOdd', () => {
    const evenVal = 4;
    const oddVal = 5;

    test('returns true if odd', () => {
        expect(helpers.isOdd(oddVal)).toBe(true);
    })

    test('returns false if even', () => {
        expect(helpers.isOdd(evenVal)).toBe(false);
    })
})

describe('square', () => {
    const val = 2;

    test('returns expected value', () => {
        expect(helpers.square(val)).toBe(4);
    })

    test('returns undefined if given string', () => {
        expect(helpers.square('string')).toBeFalsy();
    })
})

describe('cube', () => {
    const val = 2

    test('returns expected value', () => {
        expect(helpers.cube(val)).toBe(8);
    })

    test('returns undefined if given string', () => {
        expect(helpers.square('string')).toBeFalsy();
    })
})

describe('raiseToPower', () => {
    const val = 2
    const exp = 2

    test('returns expected value', () => {
        expect(helpers.raiseToPower(val, exp)).toBe(4);
    })

    test('returns undefined if given for val', () => {
        expect(helpers.raiseToPower('string', exp)).toBeFalsy();
    })

    test('returns undefined if given for exp', () => {
        expect(helpers.raiseToPower(val,'string')).toBeFalsy();
    })
})

describe('roundNumber', () => {
    const val = 2.4

    test('returns expected value', () => {
        expect(helpers.roundNumber(val)).toBe(2);
    })

    test('returns undefined if given string', () => {
        expect(helpers.roundNumber('string')).toBeFalsy();
    })
})

describe('roundUp', () => {
    const val = 2.4

    test('returns expected value', () => {
        expect(helpers.roundUp(val)).toBe(3);
    })

    test('returns undefined if given string', () => {
        expect(helpers.roundUp('string')).toBeFalsy();
    })
})

describe('addExclamationPoint', () => {
    const string = 'hey'

    test('returns string with exclamation point', () => {
        expect(helpers.addExclamationPoint(string)).toBe('hey!');
    })
})

describe('combineNames', () => {
    const name1 = 'hey'
    const name2 = 'who'

    test('returns string combined names', () => {
        expect(helpers.combineNames(name1, name2)).toBe('hey who');
    })
})

describe('getGreeting', () => {
    const name = 'hey'

    test('returns greeting string with name', () => {
        expect(helpers.getGreeting(name)).toBe('Hello hey!');
    })
})

describe('getRectangleArea', () => {
    const length = 2
    const width = 3

    test('returns expected value', () => {
        expect(helpers.getRectangleArea(length, width)).toBe(6);
    })

    test('returns undefined if passed string param', () => {
        expect(helpers.getRectangleArea('string', width)).toBeFalsy();
    })
})

describe('getTriangleArea', () => {
    const base = 2
    const height = 3

    test('returns expected value', () => {
        expect(helpers.getTriangleArea(base, height)).toBe(3);
    })

    test('returns undefined if passed string param', () => {
        expect(helpers.getTriangleArea('string', height)).toBeFalsy();
    })
})

describe('getCircleArea', () => {
    const radius = 2

    test('returns expected value', () => {
        expect(helpers.getCircleArea(radius)).toBeCloseTo(12.566, 3);
    })

    test('returns undefined if passed string param', () => {
        expect(helpers.getCircleArea('string')).toBeFalsy();
    })
})

describe('getRectangularPrismVolume', () => {
    const length = 2
    const width = 2
    const height = 2

    test('returns expected value', () => {
        expect(helpers.getRectangularPrismVolume(length, width, height)).toBe(8);
    })

    test('returns undefined if passed string param', () => {
        expect(helpers.getRectangularPrismVolume('string', width, height)).toBeFalsy();
    })
})