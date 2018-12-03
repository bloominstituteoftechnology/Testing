const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("getBiggest", () => {
  test("gets the biggest variable", () => {
    const biggest = funcs.getBiggest(2, 3);

    expect(biggest).toBe(3);
  });
});

describe("greeting", () => {
  test("gets the correct greeting", () => {
    const greeting = funcs.greeting("Spanish");

    expect(greeting).toEqual("Hola!");
  });
});

describe("isTenOrGive", () => {
  test("tests if number is 10 or 5", () => {
    const tenOrFive = funcs.isTenOrFive(5);

    expect(tenOrFive).toBe(true);
  });
});

describe("isInRange", () => {
  test("tests if number is between 20 and 50", () => {
    const result = funcs.isInRange(35);

    expect(result).toBe(true);
  });
});

describe("isInteger", () => {
  test("is an integer", () => {
    const int = funcs.isInteger(3);

    expect(int).toBe(true);
  });
});

describe("fizzBuzz", () => {
  test("returns fizz if divis by 3, buzz if by 5, fizzbuzz if both", () => {
    const fizz = funcs.fizzBuzz(6);
    const buzz = funcs.fizzBuzz(10);
    const fizzBuzz = funcs.fizzBuzz(15);

    expect(fizz).toEqual("fizz");
    expect(buzz).toEqual("buzz");
    expect(fizzBuzz).toEqual("fizzbuzz");
  });
});

describe("isPrime", () => {
  test("is number prime", () => {
    const prime = funcs.isPrime(7);

    expect(prime).toBe(true);
  });
});

describe("returnFirst", () => {
  test("returns first item in an array", () => {
    const first = funcs.returnFirst([1, 2, 3]);

    expect(first).toEqual(1);
  });
});

describe("returnLast", () => {
  test("returns last item in an array", () => {
    const last = funcs.returnLast([1, 2, 3]);

    expect(last).toEqual(3);
  });
});

describe("getArrayLength", () => {
  test("returns the length of an array", () => {
    const length = funcs.getArrayLength([1, 2, 3]);

    expect(length).toEqual(3);
  });
});

describe("incrementByOne", () => {
  test("increments each value by 1", () => {
    const result = funcs.incrementByOne([10, 15, 22]);

    expect(result).toEqual([11, 16, 23]);
  });
});

describe("addItemToArray", () => {
  test("adds an item to the end of an array", () => {
    const arr = funcs.addItemToArray([1, 2, 3], 4);

    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe("addItemToFront", () => {
  test("adds an item to the beginning of an array", () => {
    const arr = funcs.addItemToFront([2, 3, 4], 1);

    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe("wordsToSentence", () => {
  test("adds words in an array together", () => {
    const sentence = funcs.wordsToSentence([
      "hello",
      "darkness",
      "my",
      "old",
      "friend"
    ]);

    expect(sentence).toEqual("hello darkness my old friend");
  });
});

describe("contains", () => {
  test("checks if array contains an item", () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 5;
    const result = funcs.contains(arr, item);

    expect(result).toBe(true);
  });
});

describe("addNumbers", () => {
  test("adds numbers in an array", () => {
    const numbers = [5, 10, 15, 20];

    const result = funcs.addNumbers(numbers);

    expect(result).toBe(50);
  });
});

describe("averageTestScore", () => {
  test("averages the scores in an array", () => {
    const scores = [95, 91, 55, 45, 85];

    const average = funcs.averageTestScore(scores);

    expect(average).toBe((95 + 91 + 55 + 45 + 85) / scores.length);
  });
});

describe("largestNumber", () => {
  test("returns the largest number in an array", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 16, 7];

    const largestNumber = funcs.largestNumber(numbers);

    expect(largestNumber).toBe(16);
  });
});
