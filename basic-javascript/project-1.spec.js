const funcs = require('./project-1');

// write your tests here

describe('default', () => {
    it('runs the test', () => {})
});

describe('multiplyByTen', () => {
    it('should multiply number by 10', () => {
        // arrange
        const expected = 20;
        const multiplyByTen = funcs.multiplyByTen;

        // act
        const actual = multiplyByTen(2);

        // assert 
        expect(actual).toBe(expected);
    })
})

describe('subtractFive', () => {
    it('should subtract 5 from input number', () => {
        // arrange
        const expected = 20;
        const subtractFive = funcs.subtractFive;

        // add
        const actual = subtractFive(25);

        // assert
        expect(actual).toBe(expected)
    })
})