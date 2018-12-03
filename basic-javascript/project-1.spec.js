const helpers = require('./project-1');

describe('multiply by 10', () => {
  test('multiply by positive & negative 10', () => {
    expect(helpers.multiplyByTen(3)).toBe(30);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
  test('multiply with strings', () => {
    expect(helpers.multiplyByTen('3')).toBe(30);
    expect(helpers.multiplyByTen('-3')).toBe(-30);
  });
});

test('subtract by 5', () => {
  expect(helpers.subtractFive(3)).toBe(-2);
});

test('return true if strings are same length', () => {
  expect(helpers.areSameLength('Sam', 'Eli')).toBeTruthy();
  expect(helpers.areSameLength('Sam', 'Leroy')).toBeFalsy();
});

test('return true if params are equal', () => {
  expect(helpers.areEqual(3, 3)).toBeTruthy();
  expect(helpers.areEqual(3, '3')).toBeFalsy();
});

describe('number is less than 90', () => {
  test('num param is a number', () => {
    expect(helpers.lessThanNinety(30)).toBeTruthy();
    expect(helpers.lessThanNinety(91)).toBeFalsy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
  });
  test('num param is a string', () => {
    expect(helpers.lessThanNinety('30')).toBeTruthy();
    expect(helpers.lessThanNinety('91')).toBeFalsy();
    expect(helpers.lessThanNinety('90')).toBeFalsy();
  });
});

describe('number is greater than 50', () => {
  test('num param is a number', () => {
    expect(helpers.greaterThanFifty(51)).toBeTruthy();
    expect(helpers.greaterThanFifty(49)).toBeFalsy();
    expect(helpers.greaterThanFifty(50)).toBeFalsy();
  });
  test('num param is a string', () => {
    expect(helpers.greaterThanFifty('51')).toBeTruthy();
    expect(helpers.greaterThanFifty('49')).toBeFalsy();
    expect(helpers.greaterThanFifty('50')).toBeFalsy();
  });
});

test('add x and y params', () => {
  expect(helpers.add(3, 5)).toBe(8);
  expect(helpers.add('3', '5')).toBe('35');
  expect(helpers.add('3', 5)).toBe('35');
});

test('subtract x and y params', () => {
  expect(helpers.subtract(5, 3)).toBe(2);
  expect(helpers.subtract(5, '3')).toBe(2);
  expect(helpers.subtract('5', '3')).toBe(2);
});

test('divide x and y params', () => {
  expect(helpers.divide(10, 2)).toBe(5);
  expect(helpers.divide(10, '2')).toBe(5);
  expect(helpers.divide('10', '2')).toBe(5);
});

test('multiply x and y params', () => {
  expect(helpers.multiply(5, 3)).toBe(15);
  expect(helpers.multiply(5, '3')).toBe(15);
  expect(helpers.multiply('5', '3')).toBe(15);
});

test('get remainder of x and y params', () => {
  expect(helpers.getRemainder(5, 3)).toBe(2);
  expect(helpers.getRemainder(5, '3')).toBe(2);
  expect(helpers.getRemainder('5', '3')).toBe(2);
});

test('return true if number is even', () => {
  expect(helpers.isEven(4)).toBeTruthy();
  expect(helpers.isEven('4')).toBeTruthy();
  expect(helpers.isEven(5)).toBeFalsy();
  expect(helpers.isEven('5')).toBeFalsy();
});

test('return true is number is odd', () => {
  expect(helpers.isOdd(5)).toBeTruthy();
  expect(helpers.isOdd('5')).toBeTruthy();
  expect(helpers.isOdd(4)).toBeFalsy();
  expect(helpers.isOdd('4')).toBeFalsy();
});

test('square a number', () => {
  expect(helpers.square(3)).toBe(9);
  expect(helpers.square('3')).toBe(9);
});

test('cube a number', () => {
  expect(helpers.cube(3)).toBe(27);
  expect(helpers.cube('3')).toBe(27);
});

test('raise a number to the exponent power', () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
  expect(helpers.raiseToPower(2, '3')).toBe(8);
  expect(helpers.raiseToPower('2', '3')).toBe(8);
});

test('round a number', () => {
  expect(helpers.roundNumber(4.5)).toBe(5);
  expect(helpers.roundNumber('4.5')).toBe(5);
  expect(helpers.roundNumber(4.49)).toBe(4);
});

test('round a number up', () => {
  expect(helpers.roundUp(4.1)).toBe(5);
  expect(helpers.roundUp('4.1')).toBe(5);
  expect(helpers.roundUp(4)).toBe(4);
});

test('add exclamation point to end of param', () => {
  expect(helpers.addExclamationPoint('Bruh')).toBe('Bruh!');
  expect(helpers.addExclamationPoint(11)).toBe('11!');
});

test('combine two params into one string', () => {
  expect(helpers.combineNames('Samuel', 'Ko')).toBe('Samuel Ko');
  expect(helpers.combineNames(5, 3)).toBe('5 3');
});

test('return a greeting string', () => {
  expect(helpers.getGreeting('Sam')).toBe('Hello Sam!');
  expect(helpers.getGreeting(11)).toBe('Hello 11!');
});

test('calculate rectangle area from length and width params', () => {
  expect(helpers.getRectangleArea(5, 3)).toBe(15);
  expect(helpers.getRectangleArea(5, '3')).toBe(15);
  expect(helpers.getRectangleArea('5', '3')).toBe(15);
});

test('calculate triangle area from base and height params', () => {
  expect(helpers.getTriangleArea(5, 4)).toBe(10);
  expect(helpers.getTriangleArea(5, '4')).toBe(10);
  expect(helpers.getTriangleArea('5', '4')).toBe(10);
});

test('calculate circle area from radius param', () => {
  expect(helpers.getCircleArea(5)).toBe(79);
  expect(helpers.getCircleArea('5')).toBe(79);
});

test('calculate recentagular prism volume from length, width, and height params', () => {
  expect(helpers.getRectangularPrismVolume(5, 3, 2)).toBe(30);
  expect(helpers.getRectangularPrismVolume(5, '3', 2)).toBe(30);
  expect(helpers.getRectangularPrismVolume('5', '3', '2')).toBe(30);
});
