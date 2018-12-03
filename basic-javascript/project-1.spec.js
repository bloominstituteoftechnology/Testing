const helpers = require("./project-1");

// start testing!
test("multiplies number by ten", () => {
  const expected = 100;
  const actual = helpers.multiplyByTen(10);
  expect(actual).toEqual(expected);
});

test("subtracts 5", () => {
  const expected = 5;
  const actual = helpers.subtractFive(10);
  expect(actual).toEqual(expected);
});

test("should be same length", () => {
  const expected = true;
  const actual = helpers.areSameLength("boot", "toob");
  expect(actual).toEqual(expected);
});

test("are equal", () => {
  const expected = true;
  const actual = helpers.areEqual(4, 4);
  expect(actual).toEqual(expected);
});

test("should be less than 90", () => {
  const actual = helpers.lessThanNinety(85);
  expect(actual).toBeTruthy();
});
test("should be more than 90", () => {
  const actual = helpers.greaterThanFifty(63);
  expect(actual).toBeTruthy();
});
test("properly adds two numbers", () => {
  const expected = 4;
  const actual = helpers.add(2, 2);
  expect(actual).toEqual(expected);
});
test("properly subtracts two numbers", () => {
  const expected = 6;
  const actual = helpers.subtract(8, 2);
  expect(actual).toEqual(expected);
});
test("properly divides two numbers", () => {
  const expected = 4;
  const actual = helpers.divide(16, 4);
  expect(actual).toEqual(expected);
});
test("properly multiplies two numbers", () => {
  const expected = 4;
  const actual = helpers.multiply(2, 2);
  expect(actual).toEqual(expected);
});
test("gets remainder", () => {
  const expected = 1;
  const actual = helpers.getRemainder(3, 2);
  expect(actual).toEqual(expected);
});
test("Is even", () => {
  const actual = helpers.isEven(10);
  expect(actual).toBeTruthy();
});
test("Is odd", () => {
  const actual = helpers.isOdd(9);
  expect(actual).toBeTruthy();
});
test("squares a number", () => {
  const expected = 144;
  const actual = helpers.square(12);
  expect(actual).toBe(expected);
});
test("cubes a number", () => {
  const expected = 27;
  const actual = helpers.cube(3);
  expect(actual).toBe(expected);
});
test("raise to power", () => {
  const expected = 8;
  const actual = helpers.raiseToPower(2, 3);
  expect(actual).toBe(expected);
});
test("rounds number", () => {
  const expected = 3;
  const actual = helpers.roundNumber(3.2);
  expect(actual).toBe(expected);
});
test("rounds up", () => {
  const expected = 4;
  const actual = helpers.roundUp(3.1);
  expect(actual).toBe(expected);
});
test("adds exclamation point to string", () => {
  const expected = "bam!";
  const actual = helpers.addExclamationPoint("bam");
  expect(actual).toBe(expected);
});
test('combines two names', () => {
    expect(helpers.combineNames('Michael', 'Checo')).toBe('Michael Checo')
})
test('greets someone', () => {
    expect(helpers.getGreeting('Michael')).toBe('Hello Michael!')
})
test('gets area of a rectangle', () => {
    const expected = 8;
    const actual = helpers.getRectangleArea(4,2)
    expect(actual).toBe(expected)
})
test('gets area of a triangle', () => {
    const expected = 4;
    const actual = helpers.getTriangleArea(4,2)
    expect(actual).toBe(expected)
})
test('gets area of a circle', () => {
    expect(helpers.getCircleArea(1)).toBe(3.141592653589793);
})
test('gets rectangular prism volume', () => {
    expect(helpers.getRectangularPrismVolume(3,3,3)).toBe(27);
})
