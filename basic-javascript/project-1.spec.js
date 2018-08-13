const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('should return num multiplied by 10', () => {
        expect(helpers.multiplyByTen(5)).toEqual(50);
    });
});