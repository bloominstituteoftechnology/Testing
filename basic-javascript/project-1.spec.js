const helpers = require("./project-1");

// start testing!

it.skip("Should multiply the argument by 10", () => {
	expect(helpers.multiplyByTen(2)).toBe(20);
	expect(helpers.multiplyByTen(0)).toBe(0);
	expect(helpers.multiplyByTen({ 1: 2 })).toBe(
		"Passed argument isn't a number",
	);
});

it.skip("Should subtract 5 from the arguemnt", () => {
	expect(helpers.subtractFive(10)).toBe(5);
	expect(helpers.subtractFive([10])).toBe("Passed argument isn't a number");
});

it.skip("Should determine if string lengths are equal", () => {
	expect(helpers.areSameLength("Trevor", "Lauren")).toBe(true);
	expect(helpers.areSameLength("Ashwin", "Lauren")).toBe(true);
});

it.skip("Should determine if arguments are equal", () => {
	expect(helpers.areEqual(3, 3)).toBe(true);
});

it.skip("Should determine if argument is less 90", () => {
	expect(helpers.lessThanNinety(89)).toBe(true);
	expect(helpers.lessThanNinety([10])).toBe("Passed argument isn't a number");
});

it.skip("Should determine if argument is greater than 50", () => {
	expect(helpers.greaterThanFifty(51)).toBe(true);
	expect(helpers.greaterThanFifty([10])).toBe(
		"Passed argument isn't a number",
	);
});

it.skip("Should add arguments", () => {
	expect(helpers.add(2, 3)).toBe(5);
	expect(helpers.add([10], true)).toBe("Passed arguments aren't numbers");
});

it.skip("Should subract arguments", () => {
	expect(helpers.subtract(10, 5)).toBe(5);
	expect(helpers.subtract([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should divide arguments", () => {
	expect(helpers.divide(10, 5)).toBe(2);
	expect(helpers.divide([10], true)).toBe("Passed arguments aren't numbers");
});

it.skip("Should Multiply arguments", () => {
	expect(helpers.multiply(10, 5)).toBe(50);
	expect(helpers.multiply([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should get the remainder from arguments", () => {
	expect(helpers.getRemainder(10, 5)).toBe(0);
	expect(helpers.getRemainder([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should determine if argument is an even number", () => {
	expect(helpers.isEven(7)).toBe(false);
	expect(helpers.isEven("string")).toBe("Passed argument isn't a number");
});

it.skip("Should determine if argument is an odd number", () => {
	expect(helpers.isOdd(7)).toBe(true);
	expect(helpers.isOdd("string")).toBe("Passed argument isn't a number");
});

it.skip("Should square the argument", () => {
	expect(helpers.square(3)).toBe(9);
	expect(helpers.square([10])).toBe("Passed argument isn't a number");
});

it.skip("Should cube the argument", () => {
	expect(helpers.cube(3)).toBe(27);
	expect(helpers.cube([10])).toBe("Passed argument isn't a number");
});

it.skip("Should cube the argument", () => {
	expect(helpers.cube(3)).toBe(27);
	expect(helpers.cube([10])).toBe("Passed argument isn't a number");
});

it.skip("Should raise first argument to the power of the second ", () => {
	expect(helpers.raiseToPower(3, 3)).toBe(27);
	expect(helpers.raiseToPower([10], true)).toBe(
		"Passed argument isn't a number",
	);
});

it.skip("Should round the argument", () => {
	expect(helpers.roundNumber(3.4)).toBe(3);
	expect(helpers.roundNumber([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should round the argumentdown ", () => {
	expect(helpers.roundUp(3.4)).toBe(4);
	expect(helpers.roundUp([10])).toBe("Passed argument isn't a number");
});

it.skip("Should add a bang to a string", () => {
	expect(helpers.addExclamationPoint("testing")).toBe("testing!");
	expect(helpers.addExclamationPoint(10)).toBe(
		"Passed argument isn't a string",
	);
});

it.skip("Should concatenate the arguments", () => {
	expect(helpers.combineNames("Trevor", "Fehrman")).toBe("Trevor Fehrman");
	expect(helpers.combineNames([10], true)).toBe(
		"Passed arguments aren't strings",
	);
});

it.skip("Should concatenate the argument", () => {
	expect(helpers.getGreeting("Trevor")).toBe("Hello Trevor!");
	expect(helpers.getGreeting(10)).toBe("Passed argument isn't a string");
});

it.skip("Should get the area of a rectangle", () => {
	expect(helpers.getRectangleArea(10, 5)).toBe(50);
	expect(helpers.getRectangleArea([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should get the area of a triangle", () => {
	expect(helpers.getTriangleArea(10, 5)).toBe(25);
	expect(helpers.getTriangleArea([10], true)).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Should get the area of a circle", () => {
	expect(helpers.getCircleArea(10)).toBe(Math.PI * 100);
	expect(helpers.getCircleArea([10])).toBe("Passed argument isn't a number");
});

it("Should get the volume of a rectangular prism", () => {
	expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
	expect(helpers.getRectangularPrismVolume([10], true, "string")).toBe(
		"Passed arguments aren't numbers",
	);
});
