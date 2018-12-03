const helpers = require('./project-1');

// Arrange: setup the world
// Act: execute the code you're testing
// Assert: check that it works

describe('project-1.js', () => {
    // multiplyByTen  
    describe('multipyByTen', () => {
        it('should multipy provided number by ten', () => {
            const expected = 100; // expected = 101 --> FAIL
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        });
    });

    // subtractFive
    describe('subtractFive', () => {
        it('should subtract five from provided number', () => {
            const expected = 25;
            const actual = helpers.subtractFive(30);
            expect(actual).toEqual(expected);
        });
    });
});