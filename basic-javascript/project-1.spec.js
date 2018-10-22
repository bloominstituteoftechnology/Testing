const helpers = require("./project-1");

// start testing!

test("should not fail", () => {});
test("should multiply provided number by ten", () => {
	const expected = 100;
	const actual = helpers.multiplyByTen(10);
	expect(actual).toEqual(expected);
});

test("should subract 5", () => {
	const expected = 5;
	const actual = helpers.subtractFive(10);

	expect(actual).toEqual(expected);
});
test("should be same length", () => {
	const expected = true;
	const actual = helpers.areSameLength("dog", "boy");
	expect(actual).toEqual(expected);
});
test("should have deep equality", () => {
	const expected = true;
	const actual = helpers.areEqual(7, 7);
	expect(actual).toEqual(expected);
});
test("should be less than 90", () => {
	const expected = true;
	const actual = helpers.lessThanNinety(56);
	expect(actual).toEqual(expected);
});
test("should be more than 90", () => {
	const expected = false;
	const actual = helpers.lessThanNinety(96);
	expect(actual).toEqual(expected);
});
test("should be greater than 50", () => {
	const expected = true;
	const actual = helpers.greaterThanFifty(56);
	expect(actual).toEqual(expected);
});
test("should be less than 50", () => {
	const expected = false;
	const actual = helpers.greaterThanFifty(11);
	expect(actual).toEqual(expected);
});
test("should add two numbers", () => {
	const expected = 33;
	const actual = helpers.add(11, 22);
	expect(actual).toEqual(expected);
});
test("should subtract two numbers", () => {
	const expected = -11;
	const actual = helpers.subtract(11, 22);
	expect(actual).toEqual(expected);
});
test("should divide two numbers", () => {
	const expected = 2;
	const actual = helpers.divide(50, 25);
	expect(actual).toEqual(expected);
});
test("should multiply two numbers", () => {
	const expected = 100;
	const actual = helpers.multiply(50, 2);
	expect(actual).toEqual(expected);
});
test("should give the remainder of two numbers", () => {
	const expected = 1;
	const actual = helpers.getRemainder(3, 2);
	expect(actual).toEqual(expected);
});
test("should check if a number is even", () => {
	const actual = helpers.isEven(6);
	expect(actual).toBe(true);
});
test("should check if a number is odd", () => {
	const actual = helpers.isOdd(7);
	expect(actual).toBe(true);
});
test("should square a number", () => {
	const actual = helpers.square(3);
	expect(actual).toBe(9);
});
test("should cube a number", () => {
	const actual = helpers.cube(2);
	expect(actual).toBe(8);
});
test("should round a number", () => {
	const actual = helpers.roundNumber(3.3);
	expect(actual).toBe(3);
});
test("should round a number up", () => {
	const actual = helpers.roundUp(3.3);
	expect(actual).toBe(4);
});
test("should add an exclamation point", () => {
	expect(helpers.addExclamationPoint("  I like pie  ")).toBe("I like pie!");
	expect(helpers.addExclamationPoint("I like pie")).toBe("I like pie!");
});
test("should combine a first and last name", () => {
	expect(helpers.combineNames("Patrick", "Thompson")).toBe("Patrick Thompson");
	expect(helpers.combineNames(" Patrick ", " Thompson ")).toBe(
		"Patrick Thompson"
	);
});
test("should give a greeting from name", () => {
	expect(helpers.getGreeting("Patrick")).toBe("Hello Patrick!");
	expect(helpers.getGreeting(" Patrick ")).toBe("Hello Patrick!");
});
test("should give area of a rectangle", () => {
	expect(helpers.getRectangleArea(3, 5)).toBe(15);
	expect(helpers.getRectangleArea("3", 5)).toBe(15);
});
test("should give area of a triangle", () => {
	expect(helpers.getTriangleArea(4, 4)).toBe(8);
	expect(helpers.getTriangleArea("4", 4)).toBe(8);
});
test("should give area of a circle", () => {
	expect(helpers.getCircleArea(1)).toBe(3.141592653589793);
});
test("should give the volume of a rectangular prism", () => {
	expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8);
});
