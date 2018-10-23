const funcs = require("./project-2");

test("should return biggest number", () => {
  const expected = 22;
  const actual = funcs.getBiggest(20, 22);
  expect(actual).toEqual(expected);
});

test("should return correct greeting in German", () => {
  const expected = "Guten Tag!";
  const actual = funcs.greeting("German");
  expect(actual).toEqual(expected);
});

test("should return number is 10 or 5", () => {
  const expected = true;
  const actual = funcs.isTenOrFive(10);
  expect(actual).toEqual(expected);
});

test("should NOT return number is 10 or 5", () => {
  const expected = false;
  const actual = funcs.isTenOrFive(9);
  expect(actual).toEqual(expected);
});

test("should return if number is in range between 20 and 50", () => {
  const expected = true;
  const actual = funcs.isInRange(30);
  expect(actual).toEqual(expected);
});

test("shuold return fizz", () => {
  const expected = "fizz";
  const actual = funcs.fizzBuzz(9);

  expect(actual).toEqual(expected);
});

test("shuold return fizzbuzz", () => {
  const expected = "fizzbuzz";
  const actual = funcs.fizzBuzz(15);

  expect(actual).toEqual(expected);
});

test("shuold check if it integer", () => {
  const expected = true;
  const actual = funcs.isInteger(22);

  expect(actual).toEqual(expected);
});

test("check if 11 number is prime", () => {
  const expected = true;
  const actual = funcs.isPrime(11);
  expect(actual).toEqual(expected);
});

test("check if 11 number is prime", () => {
  const expected = true;
  const actual = funcs.isPrime(11);
  expect(actual).toEqual(expected);
});

test("check if first item in array is returned", () => {
  const expected = "first";
  const arr = ["first", "second", "third"];
  const actual = funcs.returnFirst(arr);
  expect(actual).toBe(expected);
});

test("check if last item in array is returned", () => {
  const expected = "third";
  const arr = ["first", "second", "third"];
  const actual = funcs.returnLast(arr);
  expect(actual).toBe(expected);
});

test("check array length", () => {
  const expected = 3;
  const arr = ["first", "second", "third"];
  const actual = funcs.getArrayLength(arr);
  expect(actual).toBe(expected);
});

test("check all items in array incremented by one", () => {
  const expected = [11, 21, 31];
  const arr = [10, 20, 30];
  const actual = funcs.incrementByOne(arr);
  expect(actual).toEqual(expected);
});

test("check if new item is added to array", () => {
  const expected = [10, 20, 30, 40];
  const arr = [10, 20, 30];
  const actual = funcs.addItemToArray(arr, 40);
  expect(actual).toEqual(expected);
});

test("check that array of words is added to sentence", () => {
  const expected = "this is my test sentence";
  const arr = ["this", "is", "my", "test", "sentence"];
  const actual = funcs.wordsToSentence(arr);
  expect(actual).toEqual(expected);
});

test("check if array contains item", () => {
  const expected = true;
  const arr = ["first", "second", "third", "fourth", "fifth"];
  const actual = funcs.contains(arr, "second");
  expect(actual).toBe(expected);
});

test("should return sum of numbers in array", () => {
  const expected = 100;
  const arr = [10, 20, 30, 40];
  const actual = funcs.addNumbers(arr);
  expect(actual).toEqual(expected);
});

test("should return average number in array", () => {
  const expected = 80;
  const arr = [80, 70, 75, 90, 100, 85, 60];
  const actual = funcs.averageTestScore(arr);
  expect(actual).toEqual(expected);
});

test("should return largest numebr in array", () => {
  const expected = 999;
  const arr = [25, 900, 500, 24, 78, 500, 888, 999, 900, 125, 700];
  const actual = funcs.largestNumber(arr);
  expect(actual).toEqual(expected);
});

// test("", () => {
//     const expected = "";
//     const actual = funcs.(0);

//     expect(actual).toEqual(expected);
//   });

// getBiggest,
// greeting,
// isTenOrFive,
// isInRange,
// isInteger,
// fizzBuzz,
// isPrime,
// returnFirst,
// returnLast,
// getArrayLength,
// incrementByOne,
// addItemToArray,
// addItemToFront,
// wordsToSentence,
// contains,
// addNumbers,
// averageTestScore,
// largestNumber
