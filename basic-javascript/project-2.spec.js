const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test("returns the larger of two values", () => {
  expect(funcs.getBiggest(10, 5)).toBe(10);
});

test("returns a greeting based off the language input", () => {
  expect(funcs.greeting("German")).toBe("Guten Tag!");
  expect(funcs.greeting("Spanish")).toBe("Hola!");
  expect(funcs.greeting("dsdsds")).toBe("Hello!");
});

test("return a value if 5 or 10", () => {
  expect(funcs.isTenOrFive(5)).toBeTruthy();
  expect(funcs.isTenOrFive(10)).toBeTruthy();
  expect(funcs.isTenOrFive(9)).toBeFalsy();
});

test("returns true is number is between 20 and 50", () => {
  expect(funcs.isInRange(30)).toBeTruthy();
  expect(funcs.isInRange(3)).toBeFalsy();
});

test("return if a value is an integer", () => {
  expect(funcs.isInteger(300)).toBeTruthy();
  expect(funcs.isInteger(300.333)).toBeFalsy();
});

test("return fizz if value divisible by 3, buzz if divisible by 5", () => {
  expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
  expect(funcs.fizzBuzz(10)).toBe("buzz");
  expect(funcs.fizzBuzz(9)).toBe("fizz");
});

test("returns whether a number is prime", () => {
  expect(funcs.isPrime(7)).toBeTruthy();
  expect(funcs.isPrime(20)).toBeFalsy();
});

test("returns the first item of an array", () => {
  expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1);
});

test("return the last item in the array", () => {
  expect(funcs.returnLast([1, 2, 3, 4])).toBe(4);
});

test("return the lenfth of an array", () => {
  expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4);
});

test("returns array elements incremented by 1", () => {
  expect(funcs.incrementByOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
});

test("adds the item to the end of the array", () => {
  expect(funcs.addItemToArray([1, 2, 3, 4], 1)).toEqual([1, 2, 3, 4, 1]);
});

test("adds the item to the end of an array", () => {
  expect(funcs.addItemToFront([1, 2, 3, 4], 1)).toEqual([1, 1, 2, 3, 4]);
});

test("return a sentence from a words array", () => {
  expect(funcs.wordsToSentence(["hello", "jurgen"])).toBe("hello jurgen");
});

test("checks whether an array contains a certain item", () => {
  expect(funcs.contains([1, 2, 3, 4, 5], 5)).toBeTruthy();
  expect(funcs.contains([1, 2, 3, 4, 5], 6)).toBeFalsy();
});

test("returns the sum of all the numbers in an array", () => {
  expect(funcs.addNumbers([1, 2, 3])).toBe(6);
});

test("averages the scored within an array", () => {
  expect(funcs.averageTestScore([50, 75, 100])).toBe(75);
});

test("returns the largest number within an array", () => {
  expect(funcs.largestNumber([1, 2, 3])).toBe(3);
});
