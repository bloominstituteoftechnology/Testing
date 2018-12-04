const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  test("10 > 7", () => {
    expect(funcs.getBiggest(10, 7)).toBe(10);
  });
  test("7 === 7", () => {
    expect(funcs.getBiggest(7, 7)).toBe(7);
  });
  test("3 < 7", () => {
    expect(funcs.getBiggest(3, 7)).toBe(7);
  });
});

describe("greeting", () => {
  test("german", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
  });
  test("spanish", () => {
    expect(funcs.greeting("Spanish")).toBe("Hola!");
  });
  test("default", () => {
    expect(funcs.greeting()).toBe("Hello!");
  });
});

describe("isTenOrFive", () => {
  test("5", () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
  });
  test("0", () => {
    expect(funcs.isTenOrFive(0)).toBe(false);
  });
});

describe("isInRange", () => {
  test("30", () => {
    expect(funcs.isInRange(30)).toBe(true);
  });
  test("10", () => {
    expect(funcs.isInRange(10)).toBe(false);
  });
});

describe("isInteger", () => {
  test("1", () => {
    expect(funcs.isInteger(1)).toBe(true);
  });
  test("1.1", () => {
    expect(funcs.isInteger(1.1)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  test("15", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
  });
  test("10", () => {
    expect(funcs.fizzBuzz(10)).toBe("buzz");
  });
  test("9", () => {
    expect(funcs.fizzBuzz(9)).toBe("fizz");
  });
  test("7", () => {
    expect(funcs.fizzBuzz(7)).toBe(7);
  });
});

describe("isPrime", () => {
  test("should be false for numbers < 0", () => {
    expect(funcs.isPrime(-3)).toBe(false);
  });
  test("should be false for 0, 1, or non-prime", () => {
    expect(funcs.isPrime(1)).toBe(false);
  });
  test("should be true for prime", () => {
    expect(funcs.isPrime(7)).toBe(true);
  });
});

test("should return first item in an array", () => {
  const arr = [1, 2, 3, 4];

  expect(funcs.returnFirst(arr)).toBe(1);
});

test("should return last item in an array", () => {
  const arr = [1, 2, 3, 4];

  expect(funcs.returnLast(arr)).toBe(4);
});

test("should return length of array", () => {
  const arr = [1, 2, 3, 4];

  expect(funcs.getArrayLength(arr)).toBe(4);
});

test("should increment each array element by one", () => {
  const arr = [1, 2, 3, 4];
  const arr2 = [2, 3, 4, 5];

  expect(funcs.incrementByOne(arr)).toEqual(arr2);
});

test("should add an item to end of array", () => {
  const arr = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4, 7];

  expect(funcs.addItemToArray(arr, 7)).toEqual(arr2);
});

test("should add an item to beginning of array", () => {
  const arr = [1, 2, 3, 4];
  const arr2 = [7, 1, 2, 3, 4];

  expect(funcs.addItemToFront(arr, 7)).toEqual(arr2);
});

test("should duplicate string into another string of same value", () => {
  const words = "Iamtoocoolfortesting.";
  const sentence = "I a m t o o c o o l f o r t e s t i n g .";

  expect(funcs.wordsToSentence(words)).toBe(sentence);
});

describe("counter", () => {
  const arr = ["apples", "oranges", "pears"];
  test("should return false for item not in the array", () => {
    expect(funcs.contains(arr, "peaches")).toBe(false);
  });
  test("should return true for item in the array", () => {
    expect(funcs.contains(arr, "pears")).toBe(true);
  });
});

test("should sum up numbers starting from number counting down to 0", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(funcs.addNumbers(arr)).toBe(15);
});

test("should return avg test score of an array of scores", () => {
  const arr = [93, 95, 97];
  expect(funcs.averageTestScore(arr)).toBe(95);
});

test("should return largest number in the array", () => {
  const arr = [1, 4, 7, 5, 10, 9];
  expect(funcs.largestNumber(arr)).toBe(10);
});
