const funcs = require('./project-1');

// write your tests here
test('multiplesbyten 5 * 10 to equal 50', () => {
    expect(funcs.multiplyByTen(5)).toBe(50);
});

test('subtract 10 - 5', () => {
    expect(funcs.subtractFive(10)).toBe(5);
});

test('compare str1 to str2', () => {
    expect(funcs.areSameLength('hi', 'ih')).toBeTruthy();
    expect(funcs.areSameLength('hi', 'igh')).toBeFalsy();
});

test('equal x to y', () => {
    expect(funcs.areEqual(1, 1)).toBeTruthy();
    expect(funcs.areEqual(1, '1')).toBeFalsy();
});

test('less than 90', () => {
    expect(funcs.lessThanNinety(89)).toBeTruthy();
    expect(funcs.lessThanNinety(99)).toBeFalsy();
});

test('greater than 50', () => {
    expect(funcs.greaterThanFifty(89)).toBeTruthy();
    expect(funcs.greaterThanFifty(50)).toBeFalsy();
});

test('adds 5 + 10 to equal 15', () => {
    expect(funcs.add(5, 10)).toBe(15);
});

test('subtracts 10 - 5 to equal 5', () => {
    expect(funcs.subtract(10, 5)).toBe(5);
});

test('divide 10/5 to equal 2', () => {
    expect(funcs.divide(10, 5)).toBe(2);
});

test('multiples 5 * 10 to equal 50', () => {
    expect(funcs.multiply(5, 10)).toBe(50);
});

test('remainder 10 % 5 to equal 0', () => {
    expect(funcs.getRemainder(10, 5)).toBe(0);
});

test('isEven 4', () => {
    expect(funcs.isEven(4)).toBeTruthy();
    expect(funcs.isEven(5)).toBeFalsy();
});

test('isOdd 5', () => {
    expect(funcs.isOdd(4)).toBeFalsy();
    expect(funcs.isOdd(5)).toBeTruthy();
});

test('expSquare 2', () => {
    expect(funcs.square(2)).toBe(4);
});

test('expCube 2', () => {
    expect(funcs.cube(2)).toBe(8);
});

test('raisetoExp 2 to 5', () => {
    expect(funcs.raiseToPower(2,5)).toBe(32);
});

test('roundNumber 1.3 to 1', () => {
    expect(funcs.roundNumber(1.3)).toBe(1);
});

test('roundup 1.3 to 1', () => {
    expect(funcs.roundUp(1.3)).toBe(2);
});

test('addExclam', () => {
    expect(funcs.addExclamationPoint('Cake')).toBe('Cake!');
});

test('combineNames', () => {
    expect(funcs.combineNames('Ricky', 'Bobby')).toBe('Ricky Bobby');
});

test('getGreeting Rob', () => {
    expect(funcs.getGreeting('Rob')).toBe('Hello Rob!');
});

test('getRecAng', () => {
    expect(funcs.getRectangleArea(2, 5)).toBe(10);
});

test('triangleArea', () => {
    expect(funcs.getTriangleArea(2, 2)).toBe(2);
});

test('circleArea', () => {
    expect(funcs.getCircleArea(2)).toBe(Math.PI * 4);
});

test('rectanglePrismArea', () => {
    expect(funcs.getRectangularPrismVolume(2, 2, 2)).toBe(8);
});