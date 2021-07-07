const funcs = require("./project-2");

it.skip("Finds the larger of the two arguments", () => {
	expect(funcs.getBiggest(3, 5)).toBe(5);
	expect(funcs.getBiggest([1], "string")).toBe(
		"Passed arguments aren't numbers",
	);
});

it.skip("Greets in the language corresponding to the argument", () => {
	expect(funcs.greeting("German")).toBe("Guten Tag!");
	expect(funcs.greeting(7)).toBe("Passed argument isn't a string");
});

it.skip("Determines if the arguemnt is 5 or 10", () => {
	expect(funcs.isTenOrFive(7)).toBe(false);
	expect(funcs.isTenOrFive("string")).toBe("Passed argument isn't a number");
});

it.skip("Determines if the number is between 20 and 50", () => {
	expect(funcs.isInRange(7)).toBe(false);
	expect(funcs.isInRange("string")).toBe("Passed argument isn't a number");
});

it.skip("Determines if the argument is an integer", () => {
	expect(funcs.isInteger(7.2993)).toBe(false);
	expect(funcs.isInteger("string")).toBe("Passed argument isn't a number");
});

it.skip("Classic FizzBuzz", () => {
	expect(funcs.fizzBuzz(7)).toBe(7);
	expect(funcs.fizzBuzz("string")).toBe("Passed argument isn't a number");
});

it.skip("Determines if the argument is prime", () => {
	expect(funcs.isPrime(7)).toBe(true);
	expect(funcs.isPrime("string")).toBe("Passed argument isn't a number");
});

it.skip("Returns the first element of an array", () => {
	expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1);
	expect(funcs.returnFirst("string")).toBe("Passed argument isn't an array");
});

it.skip("Returns the last element of an array", () => {
	expect(funcs.returnLast([1, 2, 3, 4])).toBe(4);
	expect(funcs.returnLast("string")).toBe("Passed argument isn't an array");
});

it.skip("Returns the length of an array", () => {
	expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(5);
	expect(funcs.getArrayLength("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Increments the array", () => {
	expect(funcs.incrementByOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
	expect(funcs.incrementByOne("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Adds an item to the array", () => {
	expect(funcs.addItemToArray([1, 2, 3], "Trevor")).toEqual([
		1,
		2,
		3,
		"Trevor",
	]);
	expect(funcs.addItemToArray("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Adds an item to the front of the array", () => {
	expect(funcs.addItemToFront([1, 2, 3], "Trevor")).toEqual([
		"Trevor",
		1,
		2,
		3,
	]);
	expect(funcs.addItemToFront("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Concatenates a sentence", () => {
	expect(funcs.wordsToSentence(["Hey", "You"])).toBe("Hey You");
	expect(funcs.wordsToSentence("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Checks to see if an array contains an integer", () => {
	expect(funcs.contains([1, 2, 3], "Trevor")).toBe(false);
	expect(funcs.contains("string")).toBe("Passed argument isn't an array");
});

it.skip("Adds all numbers in an array", () => {
	expect(funcs.addNumbers([1, 2, 3])).toBe(6);
	expect(funcs.addNumbers("string")).toBe("Passed argument isn't an array");
});

it.skip("Averages Test Scores", () => {
	expect(funcs.averageTestScore([1, 2, 3])).toBe(2);
	expect(funcs.averageTestScore("string")).toBe(
		"Passed argument isn't an array",
	);
});

it.skip("Finds largest number", () => {
	expect(funcs.largestNumber([1, 2, 3])).toBe(3);
	expect(funcs.largestNumber("string")).toBe(
		"Passed argument isn't an array",
	);
});
