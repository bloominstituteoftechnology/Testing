const helpers = require('./project-1');

// start testing!
describe('helpers.js', () => {
    test('should run tests', () => {
        //tests all the things
    });

    it('should run tests using it instead of test', () => {
        //Arrange : setup the world
        //Act : execute the code you're testing
        //Assert : check that it works
    });
    
});

describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
        // const expected = 101; //remember to fail the test first
        const expected = 100; //next pass the test

        const actual = helpers.multiplyByTen(10);

        expect(actual).toEqual(expected)
    });

    it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen();
    
        expect(product).toBe(0)
    });

    it('should throw error when called with a string', () => {
        expect( () => {
            // helpers.multiplyByTen('five') //will throw error
            helpers.multiplyByTen('5')
        }).toThrow();
    });
});


describe('toEqual() matcher', () => {
    it('should check deep equality', () => {
        const a = {foo: 'bar'};
        const b = {foo: 'bar'};
    
        expect(a).toEqual(b)
    });
});
