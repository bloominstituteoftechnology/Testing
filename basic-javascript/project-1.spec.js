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
} = require('./project-1')

// 1. (pre-test) Summarize what your function does
// 2. (pre-test) Write function signature
// 3. Get Red - write test, have it fail
// 4. Get Green - fix thing that's getting tested, have it pass
// 5. Refactor - optional, make it better, keep it green

describe('Jest', () => {
  test('Jest runs', () => {})
})

describe('multiplyByTen', () => {
  test('returns multiple of ten', () => {
    const input = 10
    const expected = 100
    const actual = multiplyByTen(input)
    expect(actual).toBe(expected)
  })

  // test('returns a string', () => {

  // // Arrange: setup the world
  // const input = 'kam';

  // // Act: execute the code you're testing
  // const result = reverseString(input);

  // // Assert: check that it works
  // expect(typeof result === 'string').toBeTruthy();
  // });
})
