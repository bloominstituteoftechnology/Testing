const funcs = require("./project-2");

const testWrongTypes = (functionTested, expectedType, failReturn) => {
  const dataTypes = [
    "doggie",
    true,
    null,
    undefined,
    { key: "value" },
    ["string", 15, undefined, false],
    NaN,
    17
  ];
  it(`Returns ${failReturn} if not given a ${expectedType}`, () => {
    dataTypes.forEach(type => {
      if (typeof type !== expectedType)
        expect(functionTested(type, type, type)).toBe(failReturn);
    });
  });
};

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  testWrongTypes(funcs.getBiggest, "number", undefined);

  it("returns the larger of two input numbers", () => {
    expect(funcs.getBiggest(0, -10)).toBe(0);
    expect(funcs.getBiggest(10.11, 11)).toBe(11);
    expect(funcs.getBiggest(-23.5, -23.6)).toBe(-23.5);
    expect(
      funcs.getBiggest(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    ).toBe(Number.POSITIVE_INFINITY);
  });
});

describe("greeting", () => {
  testWrongTypes(funcs.greeting, "string", "Hello!");

  it("returns a greeting in the specified language", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
    expect(funcs.greeting("Spanish")).toBe("Hola!");
  });
});

describe("isTenOrFive", () => {
  testWrongTypes(funcs.isTenOrFive, "number", false);

  it("returns true if the given number is 10 or 5", () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(15)).toBe(false);
  });
});

describe("isInRange", () => {
  testWrongTypes(funcs.isInRange, "number", undefined);

  it("returns true if the given nubmer is between 20 and 50", () => {
    expect(funcs.isInRange(25)).toBe(true);
    expect(funcs.isInRange(49)).toBe(true);
    expect(funcs.isInRange(52)).toBe(false);
  });
});

describe("isInRange", () => {
  testWrongTypes(funcs.isInRange, "number", undefined);

  it("returns true if the given number is between 20 and 50", () => {
    expect(funcs.isInRange(25)).toBe(true);
    expect(funcs.isInRange(49)).toBe(true);
    expect(funcs.isInRange(52)).toBe(false);
  });
});

describe("isInteger", () => {
  testWrongTypes(funcs.isInteger, "number", false);

  it("returns true if the given number is an integer", () => {
    expect(funcs.isInteger(25)).toBe(true);
    expect(funcs.isInteger(-10)).toBe(true);
    expect(funcs.isInteger(49.1)).toBe(false);
    expect(funcs.isInteger(52 / 3)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  testWrongTypes(funcs.fizzBuzz, "number", undefined);

  it("fizzes and buzzes", () => {
    expect(funcs.fizzBuzz(25)).toBe("buzz");
    expect(funcs.fizzBuzz(-30)).toBe("fizzbuzz");
    expect(funcs.fizzBuzz(49.1)).toBe(49.1);
    expect(funcs.fizzBuzz(31)).toBe(31);
    expect(funcs.fizzBuzz(36)).toBe("fizz");
  });
});

describe("isPrime", () => {
  testWrongTypes(funcs.isPrime, "number", undefined);

  it("returns true if number is prime", () => {
    expect(funcs.isPrime(25)).toBe(false);
    expect(funcs.isPrime(30)).toBe(false);
    expect(funcs.isPrime(17)).toBe(true);
    expect(funcs.isPrime(2)).toBe(true);
    expect(funcs.isPrime(1)).toBe(false);
  });
});

describe("returnFirst", () => {
  testWrongTypes(funcs.returnFirst, "object", undefined);

  it("returns the first element of the given array", () => {
    expect(funcs.returnFirst(["things", "stuff", "doings"])).toBe("things");
    expect(funcs.returnFirst([1, 2, 3])).toBe(1);
    expect(funcs.returnFirst([[1, 2, 3], 2, 3])).toEqual([1, 2, 3]);
  });
});

describe("returnLast", () => {
  testWrongTypes(funcs.returnLast, "object", undefined);

  it("returns the last element of the given array", () => {
    expect(funcs.returnLast(["things", "stuff", "doings"])).toBe("doings");
    expect(funcs.returnLast([1, 2, 3])).toBe(3);
    expect(funcs.returnLast([2, 3, [1, 2, 3]])).toEqual([1, 2, 3]);
  });
});

describe("largestNumber", () => {
  testWrongTypes(funcs.largestNumber, "object", undefined);

  it("returns the largest element of the given array", () => {
    expect(funcs.largestNumber([1, 2, 3])).toBe(3);
    expect(funcs.largestNumber([1, "2", 3])).toBe(undefined);
    expect(funcs.largestNumber([-5, -10, -15])).toEqual(-5);
  });
});
