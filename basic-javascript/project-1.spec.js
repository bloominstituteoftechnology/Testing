const funcs = require("./project-1");

describe("multiplyByTen function", () => {
	// arrange
	const expected = 50;
	// act
	const multiplyByTen = funcs.multiplyByTen(5);
	// assert
	it("multiply a number by 10", () => {
		expect(multiplyByTen).toBe(expected);
	});
});

describe("subtractFive function", () => {
	// arrange
	const expected = 10;
	// act
	const subtractFive = funcs.subtractFive(15);
	// assert
	it("subtract a number by 5", () => {
		expect(subtractFive).toBe(expected);
	});
});
