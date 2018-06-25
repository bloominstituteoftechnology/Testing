const helpers = require('./project-1');


// start testing!
describe.only('project-1', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toBeNaN();
            expect(helpers.multiplyByTen(true)).toBeNaN();
        })
        it('should return the given number multiplied by 10', () => {

        })
    })
})


