const funcs = require('./project-2');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    it('should return the biggest number of the two or the same number if they are equal', () => {
        // expect(funcs.getBiggest(undefined)).toBeNaN(true);
        // expect(funcs.getBiggest('two')).toBeNaN(false);
        expect(funcs.getBiggest(5, 5)).toBe(5);
        expect(funcs.getBiggest(7, 5)).toBe(7);
        expect(funcs.getBiggest(5, 7)).toEqual(7);


    })
});