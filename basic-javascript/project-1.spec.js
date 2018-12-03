const helpers = require('./project-1');

test('mutiply to ten', () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
});

test('subtract by five', () => {
  expect(helpers.subtractFive(10)).toBe(5);
});

test('areSameLength', () => {
  expect(helpers.areSameLength('test1', 'test2')).toBeTruthy();
});

test('areEqual', () => {
  expect(helpers.areEqual(10, 10)).toBeTruthy();
});

test('less than ninety', () => {
  expect(helpers.lessThanNinety(10)).toBeTruthy();
});

test('greater than fifty', () => {
  expect(helpers.greaterThanFifty(51)).toBeTruthy();
});

test('add', () => {
  expect(helpers.add(5, 5)).toBe(10);
});

test('subtract', () => {
  expect(helpers.subtract(10, 5)).toBe(5);
});

test('divide', () => {
  expect(helpers.divide(10, 5)).toBe(2);
});

test('multiply', () => {
  expect(helpers.multiply(2, 2)).toBe(4);
});

test('get remainder', () => {
  expect(helpers.getRemainder(5, 2)).toBe(1);
});

test('is even', () => {
  expect(helpers.isEven(4)).toBeTruthy();
});

test('is odd', () => {
  expect(helpers.isOdd(3)).toBeTruthy();
});

test('sqaure', () => {
  expect(helpers.square(2)).toBe(4);
});

test('cube', () => {
  expect(helpers.cube(2)).toBe(8);
});

test('raise to power', () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
});

test('roundNumber', () => {
  expect(helpers.roundNumber(3.81)).toBe(4);
});

test('roundUp', () => {
  expect(helpers.roundUp(2.1)).toBe(3);
});

test('add exclamation point', () => {
  expect(helpers.addExclamationPoint('carlo')).toBe('carlo!');
});

test('combine names', () => {
  expect(helpers.combineNames('carlo', 'test')).toBe('carlo test');
});

test('get greeting', () => {
  expect(helpers.getGreeting('carlo')).toBe('Hello carlo!');
});

test('getRectangleArea', () => {
  expect(helpers.getRectangleArea(10, 20)).toBe(200);
});

test('triangle area', () => {
  expect(helpers.getTriangleArea(5, 5)).toBe(12.5);
});

test('circle area', () => {
  expect(helpers.getCircleArea(2)).toBe(12.566370614359172);
});

test('rectangle prism volume', () => {
  expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8);
});
