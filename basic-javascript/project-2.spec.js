const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("first test", () => {
  it(" return the biggest", () => {
    const getBiggest = funcs.getBiggest;
    const actual = getBiggest(-1, 0);
    expect(actual).toBe(0);
  });
});
describe("greeting test ", () => {
  it(" greeting in german ", () => {
    const greeting = funcs.greeting;
    const german = greeting("German");
    expect(german).toBe("Guten Tag!"); //// weird
  });
  it(" greeting in spanish", () => {
    const greeting = funcs.greeting;
    const spanish = greeting("Spanish");
    expect(spanish).toBe("Hola!"); //// weird
  });
  it(" greeting in any language ", () => {
    const greeting = funcs.greeting;
    const other = greeting("balalal");
    expect(other).toBe("Hello!"); //// weird
  });
});

describe("ten or five  test", () => {
  it(" ten or five ", () => {
    const isTenOrFive = funcs.isTenOrFive;
    const actual = isTenOrFive(5);
    expect(actual).toBe(true);
  });

  it("  not ten or five ", () => {
    const isTenOrFive = funcs.isTenOrFive;
    const actual = isTenOrFive(3);
    expect(actual).toBe(false);
  });
});
describe("the range  test", () => {
  it(" in  the range  ", () => {
    const isInRange = funcs.isInRange;
    const actual = isInRange(40);
    expect(actual).toBe(true);
  });

  it("  not in the range  ", () => {
    const isInRange = funcs.isInRange;
    const actual = isInRange(5);
    expect(actual).toBe(false);
  });
});
describe("integer test", () => {
  it("  is integer", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(40);
    expect(actual).toBe(true);
  });

  it("  not an  integer  ", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(5.9);
    expect(actual).toBeFalsy();
  });
});
describe("integer test", () => {
  it("  is integer", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(40);
    expect(actual).toBe(true);
  });

  it("  not an  integer  ", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(5.9);
    expect(actual).toBeFalsy();
  });
});
describe("integer test", () => {
  it("  is integer", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(40);
    expect(actual).toBe(true);
  });

  it("  not an  integer  ", () => {
    const isInteger = funcs.isInteger;
    const actual = isInteger(5.9);
    expect(actual).toBeFalsy();
  });
});
describe("fuzz buzz test", () => {
  it(" 5 && 3 ", () => {
    const fizzBuzz = funcs.fizzBuzz;
    const actual = fizzBuzz(15);
    expect(actual).toBe("fizzbuzz");
  });

  it("  5   ", () => {
    const fizzBuzz = funcs.fizzBuzz;
    const actual = fizzBuzz(20);
    expect(actual).toBe("buzz");
  });
  it(" 3 ", () => {
    const fizzBuzz = funcs.fizzBuzz;
    const actual = fizzBuzz(3);
    expect(actual).toBe("fizz");
  });
});
describe("prime number test", () => {
  it(" < 0  ", () => {
    const isPrime = funcs.isPrime;
    const actual = isPrime(-6);
    expect(actual).toBe(false);
  });

  it("  1 || 0   ", () => {
    const isPrime = funcs.isPrime;
    const actual = isPrime(0);
    expect(actual).toBe(false);
  });
  it(" even  ", () => {
    const isPrime = funcs.isPrime;
    const actual = isPrime(8);
    expect(actual).toBe(false);
  });
  it(" prime  ", () => {
    const isPrime = funcs.isPrime;
    const actual = isPrime(17);
    expect(actual).toBe(true);
  });
});
describe("first item in the arr", () => {
  it("arr[0]", () => {
    const returnFirst = funcs.returnFirst;
    const actual = returnFirst([9, 0, 8, 9]);
    expect(actual).toBe(9);
  });
});
describe("last item in the arr", () => {
  it("arr[arr.length-1]", () => {
    const returnLast = funcs.returnLast;
    const actual = returnLast([9, 0, 8, 9]);
    expect(actual).toBe(9);
  });
});
describe("length of the arr", () => {
  it("arr.length", () => {
    const getArrayLength = funcs.getArrayLength;
    const actual = getArrayLength([9, 0, 8, 9]);
    expect(actual).toBe(4);
  });
});
describe("increment by one", () => {
  it(" ++ ", () => {
    const incrementByOne = funcs.incrementByOne;
    const actual = incrementByOne([3, 4, 6, 7]);
    expect(actual).toEqual([4, 5, 7, 8]);
  });
});
describe("add item to arr ", () => {
  it(" push", () => {
    const addItemToArray = funcs.addItemToArray;
    const actual = addItemToArray([3, 4, 6, 7], 9);
    expect(actual).toEqual([3, 4, 6, 7, 9]);
  });
});
describe("add item to the front  of  arr ", () => {
  it(" unshift", () => {
    const addItemToFront = funcs.addItemToFront;
    const actual = addItemToFront([3, 4, 6, 7], 9);
    expect(actual).toEqual([9, 3, 4, 6, 7]);
  });
});
describe("words to sentences ", () => {
  it(" words to sentence ", () => {
    const wordsToSentence = funcs.wordsToSentence;
    const actual = wordsToSentence([
      "bilal",
      "aissani",
      "is",
      "lambda",
      "student"
    ]);
    expect(actual).toEqual("bilal aissani is lambda student");
  });
  it(" words to sentence ", () => {
    const wordsToSentence = funcs.wordsToSentence;
    const actual = wordsToSentence(["bilal"]);
    expect(actual).toEqual("bilal");
  });
});
describe(" arr contains items  ", () => {
  it(" contains ", () => {
    const contains = funcs.contains;
    const actual = contains([3, 4, 6, 7, 9, 9, 9], 9);
    expect(actual).toBe(true);
  });
  it("  does not contain ", () => {
    const contains = funcs.contains;
    const actual = contains([3, 4, 6, 7], 9);
    expect(actual).toBe(false);
  });
});
describe("addNumbers ", () => {
  it(" the sum of arr  ", () => {
    const addNumbers = funcs.addNumbers;
    const actual = addNumbers([3, 4, 6, 7]);
    expect(actual).toBe(20);
  });
});
describe(" average of scores ", () => {
  it(" average score ", () => {
    const averageTestScore = funcs.averageTestScore;
    const actual = averageTestScore([3, 4, 6, 7]);
    expect(actual).toBe(5);
  });
});
describe("largest number is arr  ", () => {
  it(" biggest number ", () => {
    const largestNumber = funcs.largestNumber;
    const actual = largestNumber([3, 4, 6, 7]);
    expect(actual).toBe(7);
  });
});
