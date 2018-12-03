const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
  test('multiply by 10', () => {
    const input = 10;
    const expected = 100;

    const actual = helpers.multiplyByTen(input);

    expect(actual).toBe(expected);
  });
});

test('subtract by 5', () => {
  const input = 25;
  const expected = 20;

  const actual = helpers.subtractFive(input);

  expect(actual).toBe(expected);
});

test('are the same length', () => {
  const input1 = 'hello';
  const input2 = '12345';
  const expected = true;

  const actual = helpers.areSameLength(input1, input2);

  expect(actual).toBe(expected);
});

test('are equal', () => {
  const input1 = 1;
  const input2 = 1;
  const expected = true;

  const actual = helpers.areEqual(input1, input2);

  expect(actual).toBe(expected);
});

test('is less than 90', () => {
  expect(helpers.lessThanNinety(70)).toBe(true);
  expect(helpers.lessThanNinety(90)).toBe(false);
});

test('is greater than 50', () => {
  expect(helpers.greaterThanFifty(50)).toBe(false);
  expect(helpers.greaterThanFifty(60)).toBe(true);
});

test('add together', () => {
  expect(helpers.add(5, 5)).toBe(10);
  expect(helpers.add(32, 68)).toBe(100);
});

test('subtract numbers', () => {
  expect(helpers.subtract(10, 5)).toBe(5);
  expect(helpers.subtract(25, 10)).toBe(15);
});

test('divide numbers', () => {
  expect(helpers.divide(10, 2)).toBe(5);
  expect(helpers.divide(10, 5)).toBe(2);
});

test('multiply numbers', () => {
  expect(helpers.multiply(10, 5)).toBe(50);
  expect(helpers.multiply(10, 100)).toBe(1000);
});

test('remainder of numbers divided', () => {
  expect(helpers.getRemainder(10, 3)).toBe(1);
  expect(helpers.getRemainder(10, 5)).toBe(0);
});

test('square of number', () => {
  expect(helpers.square(2)).toBe(4);
  expect(helpers.square(10)).toBe(100);
});

test('cube of number', () => {
  expect(helpers.cube(2)).toBe(8);
  expect(helpers.cube(3)).toBe(27);
});

test('power of number', () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
  expect(helpers.raiseToPower(3, 3)).toBe(27);
});

test('round the number', () => {
  expect(helpers.roundNumber(1.98)).toBe(2);
  expect(helpers.roundNumber(1.56)).toBe(2);
});

test('round number up', () => {
  expect(helpers.roundUp(1.2)).toBe(2);
  expect(helpers.roundUp(5.2)).toBe(6);
});

test('add exclamation mark', () => {
  expect(helpers.addExclamationPoint('hello')).toBe('hello!');
  expect(helpers.addExclamationPoint('bruh')).toBe('bruh!');
});

test('combine two names', () => {
  expect(helpers.combineNames('Brandon', 'Vilaychith')).toBe(
    'Brandon Vilaychith'
  );
  expect(helpers.combineNames('Nana', 'Phorn')).toBe('Nana Phorn');
});

test('greet person', () => {
  expect(helpers.getGreeting('Anthony')).toBe('Hello Anthony!');
  expect(helpers.getGreeting('Brandon')).toBe('Hello Brandon!');
});

test('area of rectangle', () => {
  expect(helpers.getRectangleArea(2, 3)).toBe(6);
  expect(helpers.getRectangleArea(3, 3)).toBe(9);
});

test('area of triangle', () => {
  expect(helpers.getTriangleArea(5, 5)).toBe(12.5);
});

test('area of circle', () => {
  expect(helpers.getCircleArea(5)).toBe(Math.PI * 5 * 5);
});

test('volume of rectangular prism', () => {
  expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8);
});
