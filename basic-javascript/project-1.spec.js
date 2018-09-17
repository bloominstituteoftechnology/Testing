const helpers = require('./project-1');

// start testing!
it('should run function tests', () => {

    expect(helpers.multiplyByTen(1)).toBe(10);
    expect(helpers.multiplyByTen(-2)).toBe(-20);
    expect(helpers.multiplyByTen('1')).toBe(10);
    expect(helpers.multiplyByTen('string')).toBe(NaN);

    expect(helpers.subtractFive(10)).toBe(5);
    expect(helpers.subtractFive(-2)).toBe(-7);
    expect(helpers.subtractFive('1')).toBe(-4);
    expect(helpers.subtractFive('string')).toBe(NaN);

    expect(helpers.areSameLength('cats', 'dogs')).toBe(true);
    expect(helpers.areSameLength('pandas', 'dogs')).toBe(false);

    expect(helpers.areEqual(10, 10)).toBe(true);
    expect(helpers.areEqual('dogs', 'dogs')).toBe(true);
    expect(helpers.areEqual('dogs', 'cats')).toBe(false);
    expect(helpers.areEqual(100, 10)).toBe(false);

    expect(helpers.lessThanNinety(10)).toBe(true);
    expect(helpers.lessThanNinety(-2)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);
    expect(helpers.lessThanNinety('string')).toBe(false);
    expect(helpers.lessThanNinety('89')).toBe(true);
    expect(helpers.lessThanNinety('100')).toBe(false);

    expect(helpers.greaterThanFifty(10)).toBe(false);
    expect(helpers.greaterThanFifty(-2)).toBe(false);
    expect(helpers.greaterThanFifty(100)).toBe(true);
    expect(helpers.greaterThanFifty('string')).toBe(false);
    expect(helpers.greaterThanFifty('45')).toBe(false);
    expect(helpers.greaterThanFifty('100')).toBe(true);

    expect(helpers.add(10, 10)).toBe(20);
    expect(helpers.add('dogs', 1)).toBe('dogs1');
    expect(helpers.add(1, 'cats')).toBe('1cats');
    expect(helpers.add(100, 10)).toBe(110);

    expect(helpers.subtract(10, 10)).toBe(0);
    expect(helpers.subtract('dogs', 1)).toBe(NaN);
    expect(helpers.subtract(1, 'cats')).toBe(NaN);
    expect(helpers.subtract(100, 10)).toBe(90);
    expect(helpers.subtract(1, 10)).toBe(-9);

    expect(helpers.divide(10, 10)).toBe(1);
    expect(helpers.divide('dogs', 1)).toBe(NaN);
    expect(helpers.divide(1, 'cats')).toBe(NaN);
    expect(helpers.divide(100, 10)).toBe(10);

    expect(helpers.multiply(10, 10)).toBe(100);
    expect(helpers.multiply('dogs', 1)).toBe(NaN);
    expect(helpers.multiply(1, 'cats')).toBe(NaN);
    expect(helpers.multiply(100, 10)).toBe(1000);
});