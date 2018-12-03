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
    
})