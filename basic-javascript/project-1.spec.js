const helpers = require('./project-1');

test("multiplies by ten", () => {
    const input = 5;
    const expected = 50;

    const result = helpers.multiplyByTen(input);

    expect(result).toBe(expected);
})

test("subtracts by five", () => {
    const input = 5;
    const expected = 0;

    const result = helpers.subtractFive(input);

    expect(result).toBe(expected);
})

test("are same length", () => {
    const expected = false;

    const result = helpers.areSameLength("hey", "hello");

    expect(result).toBe(expected);
})

test("are equal", () => {
    const expected = false;

    const result = helpers.areEqual(5, 4);

    expect(result).toBe(expected);
})

test("is < ninety", () => {
    const input = 5;
    const expected = true;

    const result = helpers.lessThanNinety(input);

    expect(result).toBe(expected);
})

test("is > fifty", () => {
    const input = 5;
    const expected = false;

    const result = helpers.greaterThanFifty(input);

    expect(result).toBe(expected);
})


test("adds", () => {
    const expected = 9;

    const result = helpers.add(5, 4);

    expect(result).toBe(expected);
})

test("subtracts", () => {
    const expected = 1;

    const result = helpers.subtract(5, 4);

    expect(result).toBe(expected);
})

test("divides", () => {
    const expected = 2;

    const result = helpers.divide(8, 4);

    expect(result).toBe(expected);
})

test("multiplies", () => {
    const expected = 20;

    const result = helpers.multiply(5, 4);

    expect(result).toBe(expected);
})

test("gets remainder", () => {
    const expected = 1;

    const result = helpers.getRemainder(5, 4);

    expect(result).toBe(expected);
})

test("is even", () => {
    const input = 5;
    const expected = false;

    const result = helpers.isEven(input);

    expect(result).toBe(expected);
})

test("is odd", () => {
    const input = 5;
    const expected = true;

    const result = helpers.isOdd(input);

    expect(result).toBe(expected);
})

test("squares input", () => {
    const input = 5;
    const expected = 25;

    const result = helpers.square(input);

    expect(result).toBe(expected);
})

test("cubes input", () => {
    const input = 5;
    const expected = 125;

    const result = helpers.cube(input);

    expect(result).toBe(expected);
})

test("raises to power", () => {
    const expected = 3125;

    const result = helpers.raiseToPower(5, 5);

    expect(result).toBe(expected);
})

test("rounds number", () => {
    const input = 5.5;
    const expected = 6;

    const result = helpers.roundNumber(input);

    expect(result).toBe(expected);
})

test("rounds up", () => {
    const input = 7.5;
    const expected = 8;

    const result = helpers.roundUp(input);

    expect(result).toBe(expected);
})

test("adds exclamation point", () => {
    const input = "yay!";
    const expected = "yay!!";

    const result = helpers.addExclamationPoint(input);

    expect(result).toBe(expected);
})

test("returns full name", () => {
    const expected = "Andre Myrick";

    const result = helpers.combineNames("Andre", "Myrick");

    expect(result).toBe(expected);
})

test("returns greeting", () => {
    const input = "Andre";
    const expected = "Hello Andre!";

    const result = helpers.getGreeting(input);

    expect(result).toBe(expected);
})

test("returns rectangle area", () => {
    const expected = 20;

    const result = helpers.getRectangleArea(5, 4);

    expect(result).toBe(expected);
})

test("returns triangle area", () => {
    const expected = 10;

    const result = helpers.getTriangleArea(5, 4);

    expect(result).toBe(expected);
})

test("returns circle area", () => {
    const expected = 78.53981633974483;

    const result = helpers.getCircleArea(5);

    expect(result).toBe(expected);
})

test("returns rectangular prism volume", () => {
    const expected = 100;

    const result = helpers.getRectangularPrismVolume(5, 4, 5);

    expect(result).toBe(expected);
})
// start testing!
