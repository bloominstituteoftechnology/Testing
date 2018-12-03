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
  const result = 30;
  expect(multiplyByTen(input)).toEqual(result);
});

test('Subtract Five', () => {
  const input = 25;
  const result = 20;
  expect(subtractFive(input)).toEqual(result);
});

test('Are Same Length', () => {
  const input1 = 'test';
  const input2 = 'work';
  expect(areSameLength(input1, input2)).toBeTruthy();
});

test('Are Equal', () => {
  const x = 100;
  const y = 100;
  expect(areEqual(x, y)).toBeTruthy();
});

test('Less Than Ninety', () => {
  const input = 91;
  const result = false;
  expect(lessThanNinety(input, result)).toBe(result);
});

test('Greater Than Fifty', () => {
  const input = 51;
  const result = true;
  expect(greaterThanFifty(input, result)).toBe(result);
});

test('Add', () => {
  const x = 4;
  const y = 6;
  const result = 10;
  expect(add(x, y)).toBe(result);
});

test('Subtract', () => {
  const x = 10;
  const y = 9;
  const result = 1;
  expect(subtract(x, y)).toBe(result);
});

test('Divide', () => {
  const x = 100;
  const y = 10;
  const result = 10;
  expect(divide(x, y)).toBe(result);
});

test('Multiply', () => {
  const x = 2;
  const y = 5;
  const result = 10;
  expect(multiply(x, y)).toBe(result);
});

test('Get Remainder', () => {
  const x = 50;
  const y = 2;
  const result = 0;
  expect(getRemainder(x, y)).toBe(result);
});

test('Is Even', () => {
  const x = 20;
  const result = true;
  expect(isEven(x)).toBe(result);
});

test('Is Odd', () => {
  const x = 15;
  const result = true;
  expect(isOdd(x)).toBe(result);
});

test('Square', () => {
  const num = 2;
  const result = 4;
  expect(square(num)).toBe(result);
});

test('Cube', () => {
  const num = 2;
  const result = 8;
  expect(cube(num)).toBe(result);
});

test('Raise to Power', () => {
  const x = 2;
  const exponent = 4;
  const result = 16;
  expect(raiseToPower(x, exponent)).toBe(result);
});

test('Round Number', () => {
  const num = 3.8;
  const result = 4;
  expect(roundNumber(num)).toBe(result);
});

test('Round Up', () => {
  const num = 3.2;
  const result = 4;
  expect(roundUp(num)).toBe(result);
});

test('Add Exclamation Point', () => {
  const word = 'Surprise';
  const result = 'Surprise!';
  expect(addExclamationPoint(word)).toBe(result);
});

test('Combine Names', () => {});

test('Get Greeting', () => {});

test('Get Rectangle Area', () => {});

test('Get Triangle Area', () => {});

test('Get Circle Area', () => {});

test('Get Rectangular Prism Volume', () => {});
