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
    result = helpers.subtractFive(15);

    expect(result).toEqual(expected);
})