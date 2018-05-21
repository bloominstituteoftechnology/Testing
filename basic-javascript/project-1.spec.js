const funcs = require('./project-1');

// write your tests here

describe('default', () => {
    it('runs the test', () => {})
});

// multiplyByTen

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

// subtractFive

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

// areSameLength

describe('areSameLength', () => {
    it('compares the length of one string to another', () => {
        // arrange
        const areSameLength = funcs.areSameLength;

        // act
        const actual = areSameLength('abc', '123')

        // assert
        expect(actual).toBeTruthy();
    })
})

// areEqual 

describe('areEqual', () => {
    it('compares the numbers passed in to ensure they are equal', () => {
        // arrange
        const areEqual = funcs.areEqual;

        // act
        const actual = areEqual(7, 7)

        // assert
        expect(actual).toBeTruthy()
    })
})

