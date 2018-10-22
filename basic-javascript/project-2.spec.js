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
