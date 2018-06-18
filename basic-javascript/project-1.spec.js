const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non-numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('words')).toBeNaN();
        })
    })
})