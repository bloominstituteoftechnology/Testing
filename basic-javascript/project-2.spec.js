const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("Jest", () => {
  it("Jest runs", () => {});
});

describe("getBiggest", () => {
  it("returns biggest number, or just the number if equal", () => {
    expect(funcs.getBiggest(1, 2)).toBe(2);
    expect(funcs.getBiggest(1, 1)).toBe(1);
  });
});

describe("greeting", () => {
  it("returns greeting based on language passed in, english greeting by default", () => {
    expect("Guten Tag!").toBe(funcs.greeting("German"));
    expect("Hola!").toBe(funcs.greeting("Spanish"));
    expect("Hello!").toBe(funcs.greeting());
  });
});

describe("isTenOrFive", () => {
  it("returns true if 10 or 5, false otherwise", () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(1)).toBe(false);
  });
});

describe("isInRange", () => {
  it("returns true if in between 20 and 50", () => {
    expect(funcs.isInRange(25)).toBe(true);
    expect(funcs.isInRange(1)).toBe(false);
  });
});

describe("isInteger", () => {
  it("returns true if integer", () => {
    expect(funcs.isInteger(10)).toBe(true);
    expect(funcs.isInteger(5.5)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  it("returns 'fizz' if divisible by 3, 'buzz' if divisible by 5 and 'fizzbuzz' if divisble by both. if not divisible by any returns the number", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
    expect(funcs.fizzBuzz(5)).toBe("buzz");
    expect(funcs.fizzBuzz(3)).toBe("fizz");
    expect(funcs.fizzBuzz(4)).toBe(4);
  });
});

describe("isPrime", () => {
  it("returns true if prime", () => {
    expect(funcs.isPrime(4)).toBe(false);
    expect(funcs.isPrime(3)).toBe(true);
  });
});

describe("returnFirst", () => {
  it("returns first item in array", () => {
    expect(funcs.returnFirst(["first", "second"])).toBe("first");
  });
});

describe("returnLast", () => {
  it("returns last item in array", () => {
    expect(funcs.returnLast(["first", "second"])).toBe("second");
  });
});

describe("getArrayLength", () => {
  it("returns length of array", () => {
    expect(funcs.getArrayLength(["first", "second"])).toBe(2);
  });
});

describe("incrementByOne", () => {
  it("increases each number by 1", () => {
    expect(funcs.incrementByOne([1, 2])).toEqual([2, 3]);
  });
});

describe("addItemToArray", () => {
  it("adds item to array", () => {
    expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3]);
  });
});

describe("addItemToFront", () => {
  it("adds item to front", () => {
    expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2]);
  });
});

describe("wordsToSentence", () => {
  it("combines array of strings into one string", () => {
    expect(funcs.wordsToSentence(["one", "two", "three"])).toEqual(
      "one two three"
    );
  });
});

describe("contains", () => {
  it("returns true if arr contains item", () => {
    expect(funcs.contains([1, 2], 1)).toBe(true);
    expect(funcs.contains([1, 2], 3)).toBe(false);
  });
});

describe("addNumbers", () => {
  it("returns sum of array of numbers", () => {
    expect(funcs.addNumbers([1, 1, 1])).toBe(3);
  });
});

describe("averageTestScores", () => {
  it("returns average of array of numbers", () => {
    expect(funcs.averageTestScore([1, 1, 1])).toBe(1);
  });
});

describe("largestNumber", () => {
  it("returns the largest number in an array", () => {
    expect(funcs.largestNumber([1, 2, 3])).toBe(3);
  });
});
