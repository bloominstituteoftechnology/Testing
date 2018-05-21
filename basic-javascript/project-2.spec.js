const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2', () => {
    describe('getBiggest', () => {
        it('should return the larger number', () => {
            // arrange
            const getBiggest = funcs.getBiggest;

            // act
            const actual = getBiggest(2, 9);
            const actual2 = getBiggest(23, 9);
            const actual3 = getBiggest(2, 2);                        

            // assert
            expect(actual).toBe(9);
            expect(actual2).toBe(23);
            expect(actual3).toBe(2);                        
        });
    });
})