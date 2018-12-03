const helpers = require('./project-1');

// start testing!
describe('jest', () => {
    test('Jest runs', () => {

    });
});

describe('helpers', () => {
    beforeEach(() => {
        console.log('running');
    })

    describe('multiplyByTen', () => {
        test('multiples by 10', () => {
            expect(helpers.multiplyByTen(5)).toBe(50)
            expect(helpers.multiplyByTen(5.5)).toBe(55)
        });
    
        test('throws an error for non-numbers', () => {
            expect(() => helpers.multiplyByTen('hello')).toThrow();
        });
    })

    describe('subtractFive', () => {
        test('subtract by 5', () => {
            expect(helpers.subtractFive(10)).toBe(5)
        });
    })
    
    describe('areSameLength', () => {
        test('check if same length', () => {
            // expect(helpers.areSameLength('abc', 'bgv').toHaveLength(3));
            expect(helpers.areSameLength('hello', 'words')).toBeTruthy();
        });
    })

    describe('areEqual', () => {
        test('check if equal', () => {
            const x = 5;
            const y = 5;
            expect(helpers.areEqual(x, y)).toBeTruthy();
        });
    })

    describe('lessThanNinety', () => {
        test('check if < 90', () => {
            expect(helpers.lessThanNinety(60)).toBeTruthy();
        });
    })

    describe('greaterThanFifty', () => {
        test('check if > 50', () => {
            expect(helpers.greaterThanFifty(60)).toBeTruthy();
        });
    })

    describe('add', () => {
        test('add two number', () => {
            expect(helpers.add(3, 3)).toBe(6);
        });
    })

    describe('subtract', () => {
        test('subtract two number', () => {
            expect(helpers.subtract(3, 3)).toBe(0);
        });
    })

    describe('divide', () => {
        test('divide two number', () => {
            expect(helpers.divide(4, 2)).toBe(2);
        });
    })

    describe('multiply', () => {
        test('multiply two number', () => {
            expect(helpers.multiply(4, 2)).toBe(8);
        });
    })

    describe('getRemainder', () => {
        test('getRemainder of two number', () => {
            expect(helpers.getRemainder(4, 3)).toBe(1);
        });
    })

    describe('isEven', () => {
        test('check if even', () => {
            expect(helpers.isEven(4)).toBeTruthy();
        });
    })

    describe('isOdd', () => {
        test('check if odd', () => {
            expect(helpers.isOdd(3)).toBeTruthy();
        });
    })

    describe('square', () => {
        test('check if square', () => {
            expect(helpers.square(3)).toBe(9);
        });
    })

    describe('cube', () => {
        test('check if cube', () => {
            expect(helpers.cube(3)).toBe(27);
        });
    })

    describe('raiseToPower', () => {
        test('Pow', () => {
            expect(helpers.raiseToPower(4, 4)).toBe(256);
        });
    })

    describe('roundNumber', () => {
        test('round number', () => {
            expect(helpers.roundNumber(4.4)).toBe(4);
        });
    })

    describe('roundUp', () => {
        test('round number up', () => {
            expect(helpers.roundUp(4.4)).toBe(5);
        });
    })
})