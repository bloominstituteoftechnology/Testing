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

it('value of input less than ninety', () => {
    const expected = true;

    const actual = helpers.lessThanNinety(89);

    expect(actual).toEqual(expected);
});

it('value of input is more than fifty', () => {
    const expected = true;

    const actual = helpers.greaterThanFifty(51);

    expect(actual).toEqual(expected);
});

it('value of two numbers summed', () => {
    const expected = 3;

    const actual = helpers.add(1.4, 1.6);

    expect(actual).toEqual(expected);
});

it('value of two numbers subtracted ', () => {
    const expected = 1001;

    const actual = helpers.subtract(1002,1);

    expect(actual).toEqual(expected);
});

it('value of two numbers divided', () => {
    const expected = 2;

    const actual = helpers.divide(10,5);

    expect(actual).toEqual(expected);
});

it('value of two numbers multiplied', () => {
    const expected = 6;

    const actual = helpers.multiply(2,3);

    expect(actual).toEqual(expected);
});
