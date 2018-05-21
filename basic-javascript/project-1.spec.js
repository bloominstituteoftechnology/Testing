const funcs = require('./project-1');

// write your tests here

describe('default', () => {
    it('runs the test', () => {})
});

describe('multiplyByTen', () => {
    it('should multiply number by 10', () => {
        // arrange
        const multiplyByTen = funcs.multiplyByTen;

        // act
        const twenty = multiplyByTen(2);

        // assert 
        expect(twenty).toBe(20);
    })
})