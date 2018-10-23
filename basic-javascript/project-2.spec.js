const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest()", () => {
	test("x bigger than y", () => {
		expect(funcs.getBiggest(7, 5)).toBe(7);
	});
	test("y bigger than x", () => {
		expect(funcs.getBiggest(3, 7)).toBe(7);
	});
});
describe("greeting(language)", () => {
	test("default", () => {
		expect(funcs.greeting()).toBe("Hello!");
	});
	test("Spanish", () => {
		expect(funcs.greeting("Spanish")).toBe("Hola!");
	});
	test("German", () => {
		expect(funcs.greeting("German")).toBe("Guten Tag!");
	});
	test("Default unknown language", () => {
		expect(funcs.greeting("Italian")).toBe("Hello!");
	});
});
describe("is ten or five", () => {
	test("is ten", () => {
		expect(funcs.isTenOrFive(10)).toBe(true);
	});
	test("is five", () => {
		expect(funcs.isTenOrFive(5)).toBe(true);
	});
	test("is not 10 or 5", () => {
		expect(funcs.isTenOrFive(25)).toBe(false);
	});
});
