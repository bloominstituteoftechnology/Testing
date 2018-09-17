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

    expect(helpers.getRemainder(2, 2)).toBe(0);
    expect(helpers.getRemainder('dogs', 1)).toBe(NaN);
    expect(helpers.getRemainder(1, 'cats')).toBe(NaN);
    expect(helpers.getRemainder(7, 2)).toBe(1);

    expect(helpers.isEven(2)).toBe(true);
    expect(helpers.isEven('dogs')).toBe(false);
    expect(helpers.isEven(1)).toBe(false);

    expect(helpers.isOdd(2)).toBe(false);
    expect(helpers.isOdd('dogs')).toBe(true);
    expect(helpers.isOdd(1)).toBe(true);

    expect(helpers.square(2)).toBe(4);
    expect(helpers.square('dogs')).toBe(NaN);
    expect(helpers.square(4)).toBe(16);
    expect(helpers.square(10)).toBe(100);

    expect(helpers.cube(2)).toBe(8);
    expect(helpers.cube('dogs')).toBe(NaN);
    expect(helpers.cube(4)).toBe(64);
    expect(helpers.cube(10)).toBe(1000);

    expect(helpers.raiseToPower(2, 10)).toBe(1024);
    expect(helpers.raiseToPower('dogs', 1)).toBe(NaN);
    expect(helpers.raiseToPower(1, 'cats')).toBe(NaN);
    expect(helpers.raiseToPower(7, 2)).toBe(49);

    expect(helpers.roundNumber(2)).toBe(2);
    expect(helpers.roundNumber('dogs')).toBe(NaN);
    expect(helpers.roundNumber(4.05)).toBe(4);
    expect(helpers.roundNumber(10.9)).toBe(11);

    expect(helpers.roundUp(2.1)).toBe(3);
    expect(helpers.roundUp('dogs')).toBe(NaN);
    expect(helpers.roundUp(4.05)).toBe(5);
    expect(helpers.roundUp(10.9)).toBe(11);

    expect(helpers.addExclamationPoint(2.1)).toBe('2.1!');
    expect(helpers.addExclamationPoint('dogs')).toBe('dogs!');
    expect(helpers.addExclamationPoint(true)).toBe('true!');

    expect(helpers.combineNames(2, 10)).toBe('2 10');
    expect(helpers.combineNames('dogs', 1)).toBe('dogs 1');
    expect(helpers.combineNames(1, 'cats')).toBe('1 cats');

    expect(helpers.getGreeting(2)).toBe('Hello 2!');
    expect(helpers.getGreeting('dogs')).toBe('Hello dogs!');
    expect(helpers.getGreeting(false)).toBe('Hello false!');
    expect(helpers.getGreeting(null)).toBe('Hello null!');

    expect(helpers.getRectangleArea(10, 10)).toBe(100);
    expect(helpers.getRectangleArea('dogs', 1)).toBe(NaN);
    expect(helpers.getRectangleArea(1, 'cats')).toBe(NaN);
    expect(helpers.getRectangleArea(100, 10)).toBe(1000);

    expect(helpers.getTriangleArea(10, 10)).toBe(50);
    expect(helpers.getTriangleArea('dogs', 1)).toBe(NaN);
    expect(helpers.getTriangleArea(1, 'cats')).toBe(NaN);
    expect(helpers.getTriangleArea(-100, 10)).toBe(-500);

    expect(helpers.getCircleArea(10)).toBe(314.1592653589793);
    expect(helpers.getCircleArea('dogs')).toBe(NaN);
    expect(helpers.getCircleArea(false)).toBe(0);
    expect(helpers.getCircleArea(null)).toBe(0);

    expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
    expect(helpers.getRectangularPrismVolume('dogs', 1, 'cats')).toBe(NaN);
    expect(helpers.getRectangularPrismVolume(1, 'cats', 0)).toBe(NaN);
    expect(helpers.getRectangularPrismVolume(-100, 10, 15)).toBe(-15000);
});