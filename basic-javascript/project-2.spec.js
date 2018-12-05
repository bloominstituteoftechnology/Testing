const funcs = require("./project-2");

// jest globals
describe("Jest", () => {
  test("Jest runs", () => {});
});

describe("getBiggest", () => {
  it("should return the larger of the two numbers", () => {
    const expected = 10;
    const actual = funcs.getBiggest(9, 10);
    expect(actual).toEqual(expected);
  });
});

describe("greeting", () => {
  it("return a greeting in the selected language", () => {
    const expected = "Hola!";
    const actual = funcs.greeting("Spanish");
    expect(actual).toEqual(expected);
  });
});

describe("isTenOrFive", () => {
  it("check to see if the number is equal to ten or five", () => {
    const expected = true;
    const actual = funcs.isTenOrFive(2 + 3);
    expect(actual).toEqual(expected);
  });
});

describe("isInRange", () => {
  it("check to see if the number is between 20 and 50", () => {
    const expected = true;
    const actual = funcs.isInRange(30 + 3);
    expect(actual).toEqual(expected);
  });
});

describe("isInteger", () => {
  it("check to see if the number is between 20 and 50", () => {
    const expected = true;
    const actual = funcs.isInteger(30 + 3);
    expect(actual).toEqual(expected);
  });
});

describe("fizzBuzz", () => {
  it("check to see if the number passes fizzbuzz", () => {
    const expected = "buzz";
    const actual = funcs.fizzBuzz(10);
    expect(actual).toEqual(expected);
  });

  it("should check make sure argument is a number", () => {
    expect(funcs.fizzBuzz("test")).toBe(null);
    expect(funcs.fizzBuzz("")).toBe(null);
    expect(funcs.fizzBuzz({})).toBe(null);
  });
});

describe("isPrime", () => {
  it("check to see if the number is prime", () => {
    const expected = true;
    const actual = funcs.isPrime(5);
    expect(actual).toEqual(expected);
  });
});

describe("returnFirst", () => {
  it("return the first item in the array", () => {
    const expected = 1;
    const actual = funcs.returnFirst([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("returnLast", () => {
  it("return the last item in the array", () => {
    const expected = 5;
    const actual = funcs.returnLast([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("getArrayLength", () => {
  it("return the length of the array", () => {
    const expected = 5;
    const actual = funcs.getArrayLength([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("incrementByOne", () => {
  it("increment the array by one", () => {
    const expected = [2, 3, 4, 5, 6];
    const actual = funcs.incrementByOne([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("addItemToArray", () => {
  it("increment the array by one", () => {
    const expected = [2, 3, 4, 5, 6];
    const actual = funcs.addItemToArray([2, 3, 4, 5], 6);
    expect(actual).toEqual(expected);
  });
});

describe("addItemToFront", () => {
  it("add an item to the beginning of the array", () => {
    const expected = [1, 2, 3, 4, 5];
    const actual = funcs.addItemToFront([2, 3, 4, 5], 1);
    expect(actual).toEqual(expected);
  });
});

describe("wordsToSentence", () => {
  it("add a space between every letter", () => {
    const expected = "w o r d";
    const actual = funcs.wordsToSentence("word");
    expect(actual).toEqual(expected);
  });
});

describe("contains", () => {
  it("check if the array contains a certain item", () => {
    const expected = true;
    const actual = funcs.contains([1, 2, 3, 4, 5], 1);
    expect(actual).toEqual(expected);
  });
});

describe("addNumbers", () => {
  it("returns the sum of all the numbers", () => {
    const expected = 15;
    const actual = funcs.addNumbers([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("averageTestScore", () => {
  it("returns the average test score", () => {
    const expected = 79.25;
    const actual = funcs.averageTestScore([70, 88, 91, 68]);
    expect(actual).toEqual(expected);
  });
});

describe("largestNumber", () => {
  it("returns the average test score", () => {
    const expected = 91;
    const actual = funcs.largestNumber([70, 88, 91, 68]);
    expect(actual).toEqual(expected);
  });
});
