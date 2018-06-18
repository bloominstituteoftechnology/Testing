const helpers = require('./project-1');


describe('multiplyByTen', () => {
    it('should multiply a number by ten', () => {
        const expected = 350;
        const multiply = utilities.multiply;
        const actual = multiply(35, 10);
        expected(multiply(35, 10)).toBe(350)
    })
});

// start testing!
