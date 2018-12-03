const helpers = require('./project-1');

// start testing!
test('multiplies number by ten', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected)
})

test('subtracts 5', () => {
    const expected = 5;
    const actual = helpers.subtractFive(10);
    expect(actual).toEqual(expected);
})

test('should be same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('boot', 'toob')
    expect(actual).toEqual(expected)
})