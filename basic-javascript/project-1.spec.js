const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
    describe('jest', () => {});
    test('should run tests', () => {});

    describe('multiplyByTen', () => {
        it('should multiply by ten', () => {
            const expected = 120;
            const actual = helpers.multiplyByTen(12);
            expect(actual).toEqual(expected);
        })
    })
})
