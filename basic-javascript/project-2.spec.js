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
describe("is in range of 20 to 50", () => {
	test("is less than 50 and greater than 20", () => {
		expect(funcs.isInRange(40)).toBe(true);
	});
	test("is not in range of 20 to 50", () => {
		expect(funcs.isInRange(5)).toBe(false);
	});
	test("number as string in range", () => {
		expect(funcs.isInRange("37")).toBe(true);
	});
	test("number as string not in range", () => {
		expect(funcs.isInRange("3")).toBe(false);
	});
});
describe("is an integar", () => {
	test("is an integar", () => {
		expect(funcs.isInteger(40)).toBe(true);
	});
	test("is not an integar", () => {
		expect(funcs.isInteger(5.5)).toBe(false);
	});
});
describe("fizz buzz", () => {
	test("is divisable by 3 and 5", () => {
		expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
	});
	test("is divisable by 3", () => {
		expect(funcs.fizzBuzz(6)).toBe("fizz");
	});
	test("is divisable by 5", () => {
		expect(funcs.fizzBuzz(20)).toBe("buzz");
	});
});
