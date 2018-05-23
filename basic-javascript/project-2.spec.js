const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("default", () => {
  it("run the tests", () => {});
});

describe("getBiggest", () => {
  it("should get biggest", () => {
    const getBiggest = funcs.getBiggest;

    const actual = getBiggest(4, 3);

    expect(actual).toBe(4);
  });
});

describe("greeting", () => {
  it("should return corresponding language greeting", () => {
    const greeting = funcs.greeting;

    const Spanish = greeting("Spanish");
    const German = greeting("German");
    const English = greeting("English");

    expect(Spanish).toBe("Hola!");
    expect(German).toBe("Guten Tag!");
    expect(English).toBe("Hello!");
  });
});

describe("isTenOrFive", () => {
  it("should return true if ten or five", () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(10)).toBe(true);
  });
  it("should return false otherwise", () => {
    expect(funcs.isTenOrFive("10")).toBe(false);
    expect(funcs.isTenOrFive(9)).toBe(false);
  });
});

describe("isInRange", () => {
  it("should return true if the number is in range", () => {
    expect(funcs.isInRange(20.01)).toBe(true);
    expect(funcs.isInRange(49)).toBe(true);
  });
  it("should return false otherwise", () => {
    expect(funcs.isInRange("10")).toBe(false);
    expect(funcs.isInRange(50)).toBe(false);
  });
});

describe("isInteger", () => {
  it("should return true if the number is an integer", () => {
    expect(funcs.isInteger(20)).toBe(true);
  });
  it("should return false otherwise", () => {
    expect(funcs.isInteger("10")).toBe(false);
    expect(funcs.isInteger(50.1)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzbuzz if the param is divisible by both five and three", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
  });
  it("should return buzz if the param is divisible by five", () => {
    expect(funcs.fizzBuzz(20)).toBe("buzz");
  });
  it("should return fizz if the param is divisible by three", () => {
    expect(funcs.fizzBuzz(9)).toBe("fizz");
  });
  it("should return the param otherwise", () => {
    expect(funcs.fizzBuzz(50.1)).toBe(50.1);
  });
});

describe("isPrime", () => {
  it("should return true if the param is a prime number", () => {
    expect(funcs.isPrime(7)).toBe(true);
  });
  it("should return false otherwise", () => {
    expect(funcs.isPrime(10)).toBe(false);
    expect(funcs.isPrime(1)).toBe(false);
  });
});

describe("returnFirst", () => {
  it("should return the first item of the param array", () => {
    expect(funcs.returnFirst([1, 2, 3])).toBe(1);
  });
});

describe("returnLast", () => {
  it("should return the last item of the param array", () => {
    expect(funcs.returnLast([1, 2, 3])).toBe(3);
  });
});

describe("getArrayLength", () => {
  it("should return the length of the param array", () => {
    expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4);
  });
});

describe("incrementByOne", () => {
  it("should return add 1 to every item of the param array", () => {
    expect(funcs.incrementByOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
  });
});

describe("addItemToFront", () => {
  it("should add an item to the front of the param array", () => {
    expect(funcs.addItemToFront([1, 2, 3, 4], 0)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("wordsToSentence", () => {
  it("should return a string sentence that combines a param array of words", () => {
    expect(funcs.wordsToSentence(["This", "is", "long."])).toBe(
      "This is long."
    );
  });
});

describe("contains", () => {
  it("should return true if the array contains the item", () => {
    expect(funcs.contains([1, 2, 3], 2)).toBe(true);
    expect(funcs.contains(["hi", "bye"], "hi")).toBe(true);
  });
  it("should return false otherwise", () => {
    expect(funcs.contains(["hi", "bye"], "cheese")).toBe(false);
    expect(funcs.contains([1, 2, 3], 4)).toBe(false);
  });
});

describe("addNumbers", () => {
  it("should return the sum of all numbers in an array", () => {
    expect(funcs.addNumbers([1, 2, 3.3])).toBe(6.3);
  });
});

describe("averageTestScore", () => {
  it("should return the mean of the param array", () => {
    expect(funcs.averageTestScore([1, 2, 3])).toBe(2);
  });
});

describe("largestNumber", () => {
  it("should return the largest number of the param array", () => {
    expect(funcs.largestNumber([-999, 1000, 1500, 73])).toBe(1500);
  });
});
