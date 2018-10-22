const helpers = require('./helpers.js');

describe('helper.js', () => {

describe('jest', () => {
    test('should run tests', () => {
        //test example
    });

    it('should run tests using it instead of test', () => {
        //Arrange: setup the world
        //Act: execute the code you're testing
        //Assert: check that it works
    });
});

describe('multiplyByTen()', () => {
    //low hanging fruit
    it('should multiply provided number by ten', () => {
        const expected = 100; 
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    })

    //remember to fail the test first
    //think of edge cases (corner cases)
    //TDD flow: failing(red) -> passing(green) -> refactor

    //test for undefined
    it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen();
        expect(product).toBe(0);
    });

    // //string input
    // it('should return 0 when called with a string', () => {
    //     expect(helpers.multiplyByTen('5')).toBe(0);
    // })

    it('should throw error when called with a string', () => {
        expect(() => {
            helpers.multiplyByTen('five');
        }).toThrow();
    })
});

it('should check deep equality', () => {
    const a = { foo: 'bar' };
    const b = { foo: 'bar' };

    //fails because it is not the same object - expect(a).toBe(b);
    expect(a).toEqual(b);
})
//test for string
//test for decimal
});