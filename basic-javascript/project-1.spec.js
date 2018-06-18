const helpers = require('./project-1');

// start testing!
describe.nly('project-1', () => {
    it('returns NaN when there is a non numerical value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
    })
})