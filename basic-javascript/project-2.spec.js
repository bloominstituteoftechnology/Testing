const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// default
describe('default', () => {
    it('runs the test', () => {})
});

// getBiggest
describe('getBiggest', () => {
    it('returns the greater number between x and y', () => {
        // arrange
        const getBiggest = funcs.getBiggest;

        // act
        const actual = getBiggest(4, 7);

        // assert
        expect(actual).toBeGreaterThan(4);
    })
})

