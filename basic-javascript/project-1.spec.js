const funcs = require('./project-1');

// write your tests here
describe('Project 1', () => {
    describe('multiplyByTen', () => {
        it('should multiply a number by ten', () => {
            // arrange
            const expected = 50;
            const multiplyByTen = funcs.multiplyByTen;

            // act
            const actual = multiplyByTen(5);

            // assert
            expect(actual).toBe(expected);
        });
    });
})