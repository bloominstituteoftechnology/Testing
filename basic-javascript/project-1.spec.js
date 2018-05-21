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
