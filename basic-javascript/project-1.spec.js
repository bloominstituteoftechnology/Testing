const helpers = require('./project-1');

// start testing!
it('should mult by ten', () => {
    const expected = 100;

    const actual = helpers.multiplyByTen(10);

    expect(actual).toEqual(expected);
});

it('should sub by five', () => {
    const expected = 10;

    const actual = helpers.subtractFive(15);

    expect(actual).toEqual(expected);
});

it('should compare string lgth', () => {
    const expected = true;

    const actual = helpers.areSameLength('node', 'smal');

    expect(actual).toEqual(expected);
});

it('compare values for equality', () => {
    const expected = true;

    const actual = helpers.areEqual(8, 8);

    expect(actual).toEqual(expected);
});