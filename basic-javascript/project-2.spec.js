const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest function", () => {
    // arrange
    const expected = 11;
    // act
    const getBiggest = funcs.getBiggest(8, 11);
    // assert
    it("returns which is biggest", () => {
        expect(getBiggest).toBe(expected);
    });
});