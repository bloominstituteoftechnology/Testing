const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  it("should return x if x is biggest, y if y is biggest and y if x and y are equal", () => {
    expect(funcs.getBiggest(5, 2)).toBe(5);
    expect(funcs.getBiggest(5, 5)).toBe(5);
    expect(funcs.getBiggest(2, 5)).toBe(5);
  });
});

describe("greeting", () => {
  it("should return Guten Tag! if language is German", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
    expect(funcs.greeting("Spanish")).toBe("Hola!");
    expect(funcs.greeting("")).toBe("Hello!");
  });
});

describe("isTenOrFive", () => {
  it("should return true if number is either 10 or 5 else return false", () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(3)).toBe(false);
  });
});

describe("isInRange", () => {
  it("should return true if num is within 20-50, else should return false", () => {
    expect(funcs.isInRange(25)).toBe(true);
    expect(funcs.isInRange(100)).toBe(false);
  });
});

describe("isInteger", () => {
  it("should return true if num is integer else return false", () => {
    expect(funcs.isInteger(3)).toBe(true);
    expect(funcs.isInteger(2.2)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzbuzz if it is a multiple of 3 and 5", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
    expect(funcs.fizzBuzz(5)).toBe("buzz");
    expect(funcs.fizzBuzz(3)).toBe("fizz");
  });
});

describe("isPrime", () => {
  it("should return true if it is a prme number else return false", () => {
    expect(funcs.isPrime(7)).toBe(true);
    expect(funcs.isPrime(-1)).toBe(false);
    expect(funcs.isPrime(12)).toBe(false);
  });
});

describe("returnFirst", () => {
  it("should return first index of array", () => {
    expect(funcs.returnFirst([1, 2, 3])).toBe(1);
    expect(funcs.returnFirst([2, 3, 4])).toBe(2);
  });
});

describe("returnLast", () => {
  it("should return last index of array", () => {
    expect(funcs.returnLast([1, 2, 3])).toBe(3);
    expect(funcs.returnLast([3, 4, 5])).toBe(5);
  });
});

describe("getArrayLength", () => {
  it("should return the length of the array", () => {
    expect(funcs.getArrayLength([2, 3, 4, 5, 6])).toBe(5);
  });
});

describe("incrementByOne", () => {
  it("should return each index in the array incremented by one", () => {
    expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
  });
});

describe("addItemToArray", () => {
  it("should add the item to the end of the array", () => {
    expect(funcs.addItemToArray([2, 3, 4], 5)).toEqual([2, 3, 4, 5]);
  });
});

describe("addItemToFront", () => {
  it("should add item to the front of the array", () => {
    expect(funcs.addItemToFront([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
  });
});

describe("wordsToSentence", () => {
  it("should add an array of words and return a string", () => {
    expect(funcs.wordsToSentence(["Hello", "how", "are", "you"])).toBe(
      "Hello how are you"
    );
  });
});

describe("contains", () => {
  it("should return true if items in array are greater than one, should return false if false", () => {
    expect(funcs.contains(["something"], "something")).toEqual(true);
    expect(funcs.contains(["something"], "not something")).toEqual(false);
  });
});

describe("addNumbers", () => {
  it("should return the sum of numbers in an array", () => {
    expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
  });
});

describe("averageTestScore", () => {
  it("should return the average test scores in an array", () => {
    expect(funcs.averageTestScore([100, 80, 90])).toEqual(90);
  });
});

describe("largestNumber", () => {
  it("should return the largest number in an array", () => {
    expect(funcs.largestNumber([2, 4, 100])).toEqual(100);
  });
});
