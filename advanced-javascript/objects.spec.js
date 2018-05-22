const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
	describe("pairs function", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3
		};
		const pairs = objectFunctions.pairs(obj);
		it("Should return an array", () => {
			expect(pairs instanceof Array).toBeTruthy();
		});
		it("Should return expected outcome", () => {
			expect(pairs).toEqual([["a", 1], ["b", 2], ["c", 3]]);
		});
	});
});
