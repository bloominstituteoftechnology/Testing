const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1');

// start testing!
describe('Jest', () => {
  test('jest runs', () => {});
});

test('Multiply By Ten', () => {
  const input = 3;
  const expected = 30;
  expect(multiplyByTen(input)).toEqual(expected);
});

test('Subtract Five', () => {
  const input = 25;
  const expected = 20;
  expect(subtractFive(input)).toEqual(expected);
});
