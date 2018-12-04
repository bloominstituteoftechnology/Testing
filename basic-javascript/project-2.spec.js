const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// start testing!
describe("getBiggest", () => {
  test("returns biggest number", () => {
    expect(funcs.getBiggest(10, 5)).toBe(10);
  });
});

describe("greeting", () => {
  test("returns hello in users language", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
  });
});

describe("isTenOrFive", () => {
  test("returns true if num is ten or five", () => {
    expect(funcs.isTenOrFive(10)).toBeTruthy();
  });
});

describe("isInteger", () => {
  test("returns true if number is integer", () => {
    expect(funcs.isInteger(25)).toBeTruthy();
  });
});

describe("fizzBuzz", () => {
  test("returns fizz, buzz, or fizzbuz based on remainder of number", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
  });
});

describe("isPrime", () => {
  test("returns prime number", () => {
    expect(funcs.isPrime(1)).toBeFalsy();
  });
});

describe("returnFirst", () => {
  test("returns first value in array", () => {
    expect(funcs.returnFirst(["first", "second"])).toBe("first");
  });
});

describe("returnLast", () => {
  test("returns last item in array", () => {
    expect(funcs.returnLast(["first", "second", "last"])).toBe("last");
  });
});

describe("getArrayLength", () => {
  test("returns length of array", () => {
    expect(funcs.getArrayLength(["1", "2", "3"])).toBe(3);
  });
});

describe("incrementByOne", () => {
  test("increments array length by one", () => {
    expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
  });
});

describe("addItemToArray", () => {
  test("adds item to end of array", () => {
    expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
});

describe("addItemToFront", () => {
  test("add item to front of array", () => {
    expect(funcs.addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
  });
});

describe("wordsToSentence", () => {
  test("makes sentence from array", () => {
    expect(
      funcs.wordsToSentence(["Hello", "nice", "to", "meet", "you"])
    ).toEqual("Hello nice to meet you");
  });
});

describe("contains", () => {
  test("check if item is in array", () => {
    expect(funcs.contains([1, 2, 3], 2)).toBeTruthy();
  });
});

describe("addNumbers", () => {
  test("adds all numbers in array", () => {
    expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
  });
});

describe("averageTestScore", () => {
  test("returns average of test scores", () => {
    expect(funcs.averageTestScore([90, 76, 43])).toEqual(70);
  });
});

describe("largestNumber", () => {
  test("returns largest number in array", () => {
    expect(funcs.largestNumber([90, 76, 43])).toEqual(90);
  });
});
