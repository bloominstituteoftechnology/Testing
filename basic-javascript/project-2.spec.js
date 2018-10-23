const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test("should run tests", () => {});

it("should run tests using it() in addition to test()", () => {});

//Get the largest number, if equal return second argument
it("should return y unless x is greater", () => {
  const expected = 100;

  const actual = funcs.getBiggest(100, 30);
  expect(actual).toEqual(expected);
});

//Give a greeting in a given language
it("should return hello in a given language", () => {
  const expected = "Hola!";

  const actual = funcs.greeting("Spanish");
  expect(actual).toEqual(expected);
});

//Checks if a number is 10 or 5
it("should return true if the number is 10 or 5", () => {
  const expected = true;

  const actual = funcs.isTenOrFive(5);
  expect(actual).toEqual(expected);
});

//Checks a number is between 20 and 50
it("should return true if the number is between 20-50", () => {
  const expected = true;

  const actual = funcs.isInRange(21);
  expect(actual).toEqual(expected);
});

//Checks if a number is an integer
it("should return true if the number is an integer", () => {
  const expected = true;

  const actual = funcs.isInteger(5);
  expect(actual).toEqual(expected);
});

//FizzBuzz
it("should return fizzbuzz if num divisible by 3 and 5, buzz if just 5, and fizz if just 3", () => {
  const expected = "fizz";

  const actual = funcs.fizzBuzz(27);
  expect(actual).toEqual(expected);
});

//Checks if a number is prime
it("should return true if a number is prime", () => {
  const expected = true;

  const actual = funcs.isPrime(5);
  expect(actual).toEqual(expected);
});

//Returns the first item in an array
it("should return the first item in the array", () => {
  const expected = 1;

  const actual = funcs.returnFirst([1, 2, 3]);
  expect(actual).toEqual(expected);
});

//Returns the last item in an array
it("should return the first item in the array", () => {
  const expected = 3;

  const actual = funcs.returnLast([1, 2, 3]);
  expect(actual).toEqual(expected);
});

//Returns the length of an array
it("should return the length of the array", () => {
  const expected = 4;

  const actual = funcs.getArrayLength([1, 2, 3, 4]);
  expect(actual).toEqual(expected);
});

//Increments an array by 1
it("should increment an array by one", () => {
  const expected = [2, 3, 4];

  const actual = funcs.incrementByOne([1, 2, 3]);
  expect(actual).toEqual(expected);
});

//Adds an item to an array
it("should return the array with an item added to the end", () => {
  const expected = [1, 2, 3, 4];

  const actual = funcs.addItemToArray([1, 2, 3], 4);
  expect(actual).toEqual(expected);
});

//Adds an item to the font of an array
it("should return the array with an item added to the front", () => {
  const expected = [1, 2, 3, 4];

  const actual = funcs.addItemToFront([2, 3, 4], 1);
  expect(actual).toEqual(expected);
});

//New Sentence
it("should return a sentence from an array of words", () => {
  const expected = "The dog ran !";

  const actual = funcs.wordsToSentence(["The", "dog", "ran", "!"]);
  expect(actual).toEqual(expected);
});

//Contains
it("should return true if an array contains the specified item", () => {
  const expected = true;

  const actual = funcs.contains(["The", "dog", "ran", "!"], "dog");
  expect(actual).toEqual(expected);
});

it("should return flase if an array does not contain the specified item", () => {
  const expected = false;

  const actual = funcs.contains(["The", "dog", "ran", "!"], "cat");
  expect(actual).toEqual(expected);
});

//Add Numbers
it("should return the sum of an array of numbers", () => {
  const expected = 10;

  const actual = funcs.addNumbers([1, 2, 3, 4]);
  expect(actual).toEqual(expected);
});

//Average test Score
it("should return average test score of an array", () => {
  const expected = 84;

  const actual = funcs.averageTestScore([100, 78, 63, 95]);
  expect(actual).toEqual(expected);
});

//Largest Number
it("should return the largest number in an array", () => {
  const expected = 100;

  const actual = funcs.largestNumber([100, 78, 63, 95]);
  expect(actual).toEqual(expected);
});
