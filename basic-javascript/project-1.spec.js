const helpers = require('./project-1');

// start testing!
test('multiply num by ten', () => {
    // Arrange : setup the world
    const expected = 100;
    const result = helpers.multiplyByTen(10);

    // Act : execute the code you're testing
    expect(result).toEqual(expected)
    // Assert : check that it works
})

test('subtract 5 from num', () => {
    const expected = 10;
    const result = helpers.subtractFive(15);

    expect(result).toEqual(expected);
})

describe('strings should equal same length', () => {
    test('string should be same length', () => {
        const a = 'hello';
        const b = 'olleh';
        expect(helpers.areSameLength(a, b)).toBeTruthy();
    })
    
})
