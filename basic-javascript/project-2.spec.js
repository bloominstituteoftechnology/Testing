const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// Some tests aren't categorized for the sake of creating tests quickly.

describe("default", () => {
  it("Should run the tests", () => {});
});

describe("Return bigger number", () => {
  // definitely can be sectioned into 3 different categories
  it("Should return bigger number, return anyway if equal", () => {
    // arrange
    const getBiggest = funcs.getBiggest;

    // act
    const firstBig = getBiggest(2, 1);
    const lastBig = getBiggest(1, 2);
    const bothBig = getBiggest(2, 2);

    // assert
    expect(firstBig).toBe(2);
    expect(lastBig).toBe(2);
    expect(bothBig).toBe(2);
  });
});

describe("Multi-lingual greeter", () => {
  const greeting = funcs.greeting;

  const german = greeting("German");
  const spanish = greeting("Spanish");
  const default1 = greeting();
  const Simlish = greeting("Simlish");

  it("Greet in English by default", () => {
    expect(default1).toBe("Hello!");
    expect(Simlish).toBe("Hello!");
  });

  it("Greet in Spanish", () => {
    expect(spanish).toBe("Hola!");
  });
  it("Greet in German", () => {
    expect(german).toBe("Guten Tag!");
  });
});

describe("Ten or five", () => {
  it("Should be true when 5 or 10, false if not either", () => {
    const isTenOrFive = funcs.isTenOrFive;

    const five = isTenOrFive(5);
    const ten = isTenOrFive(10);
    const six = isTenOrFive(6);
    const zero = isTenOrFive(0);
    const negFive = isTenOrFive(-5);

    expect(five).toBe(true);
    expect(ten).toBe(true);
    expect(six).toBe(false);
    expect(zero).toBe(false);
    expect(negFive).toBe(false);
  });
});

describe("Number is in range", () => {
  const isInRange = funcs.isInRange;

  const twentyFive = isInRange(25);
  const fourtyNine = isInRange(49);
  const negOne = isInRange(-1);
  const twenty = isInRange(20);
  const fifty = isInRange(50);

  it("True if over 20, under 50", () => {
    expect(twentyFive).toBe(true);
    expect(fourtyNine).toBe(true);
  });
  it("False if under 20, over 50", () => {
    expect(negOne).toBe(false);
    expect(twenty).toBe(false);
    expect(fifty).toBe(false);
  });
});

describe("Check if interger", () => {
  const isInteger = funcs.isInteger;

  const two = isInteger(2);
  const nine = isInteger(9);
  const negOne = isInteger(-1);
  const twoPointFive = isInteger(2.5);
  const pi = isInteger(Math.PI);

  it("True if interger", () => {
    expect(two).toBe(true);
    expect(nine).toBe(true);
    expect(negOne).toBe(true);
  });
  it("False if otherwise", () => {
    expect(twoPointFive).toBe(false);
    expect(pi).toBe(false);
  });
});

describe("FizzBuzz", () => {
  const fizzBuzz = funcs.fizzBuzz;

  const fifteen = fizzBuzz(15);
  const nine = fizzBuzz(9);
  const ten = fizzBuzz(10);
  const pi = fizzBuzz(Math.PI);

  it("Fizz", () => {
    expect(nine).toBe("fizz");
  });
  it("Buzz", () => {
    expect(ten).toBe("buzz");
  });
  it("Fizzbuzz", () => {
    expect(fifteen).toBe("fizzbuzz");
  });
  it("No FizzBuzz (return original value)", () => {
    expect(pi).toEqual(pi);
  });
});

describe("Return First item of array", () => {
  const returnFirst = funcs.returnFirst;

  const array = returnFirst([2, 3, 4, 15]);

  it("Return first", () => {
    expect(array).toBe(2);
  });
});

// returnLast
// getArrayLength
// incrementByOne
// addItemToArray
// addItemToFront
// wordsToSentence
// contains
// addNumbers
// averageTestScore
// largestNumber