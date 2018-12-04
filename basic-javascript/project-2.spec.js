const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("project-2.js", () => {
  test("Try", () => {});

  describe("getBiggest()", () => {
    const { getBiggest } = funcs;

    test("Should return the biggest number", () => {
      const input1 = 20;
      const input2 = 12;
      const expected = 20;
      expect(getBiggest(input1, input2)).toEqual(expected);
    });
  });

  describe("greeting()", () => {
    const { greeting } = funcs;

    test("Should return a greeting msg", () => {
      const input = "Any";
      const expected = "Hello!";
      expect(greeting(input)).toBe(expected);
    });

    test("Should return a greeting msg in German", () => {
      const input = "German";
      const expected = "Guten Tag!";
      expect(greeting(input)).toBe(expected);
    });

    test("Should return a greeting msg in Spanish", () => {
      const input = "Spanish";
      const expected = "Hola!";
      expect(greeting(input)).toBe(expected);
    });
  });

  describe("isTenOrFive()", () => {
    const { isTenOrFive } = funcs;

    test("Should return false if number is neither 10 nor 5", () => {
      const input = 11;
      expect(isTenOrFive(input)).toBe(false);
    });

    test("Should return true if number is either 10 or 5", () => {
      const input = 10;
      expect(isTenOrFive(input)).toBe(true);
    });
  });

  describe("isInRange()", () => {
    const { isInRange } = funcs;

    test("Should return false if number is not less than 50 and greater than 20", () => {
      const input = 60;
      expect(isInRange(input)).toBe(false);
    });

    test("Should return true if number is less than 50 and greater than 20", () => {
      const input = 35;
      expect(isInRange(input)).toBe(true);
    });
  });

  describe("isInteger()", () => {
    const { isInteger } = funcs;

    test("Should return false if input is a floating number", () => {
      const input = 43.3;
      expect(isInteger(input)).toBe(false);
    });

    test("Should return false if input is a string", () => {
      const input = "45";
      expect(isInteger(input)).toBe(false);
    });

    test("Should return false if input is a boolean value", () => {
      const input = true;
      expect(isInteger(input)).toBe(false);
    });

    test("Should return true if input is an integer", () => {
      const input = 43;
      expect(isInteger(input)).toBe(true);
    });
  });

  describe("fizzBuzz()", () => {
    const { fizzBuzz } = funcs;

    test("Should return string", () => {
      const input = 33;
      const expected = "fizz";
      expect(fizzBuzz(input)).toBe(expected);
    });
  });

  describe("isPrime()", () => {
    const { isPrime } = funcs;

    test("Should return a boolean value", () => {
      const input = 2;
      expect(isPrime(input)).toBe(true);
    });
  });

  describe("returnFirst()", () => {
    const { returnFirst } = funcs;

    test("Should return the first element of an array", () => {
      const input = [1, 2, 3];
      const expected = 1;
      expect(returnFirst(input)).toBe(expected);
    });
  });

  describe("returnLast()", () => {
    const { returnLast } = funcs;

    test("Should return the first element of an array", () => {
      const input = [1, 2, 3];
      const expected = 3;
      expect(returnLast(input)).toBe(expected);
    });
  });

  describe("getArrayLength()", () => {
    const { getArrayLength } = funcs;

    test("Should return the number of length of an array", () => {
      const input = [1, 2, 3];
      const expected = 3;
      expect(getArrayLength(input)).toBe(expected);
    });
  });

  describe("incrementByOne()", () => {
    const { incrementByOne } = funcs;

    test("Should return the array with each of its element incremented by 1", () => {
      const input = [1, 2, 3];
      const expected = [2, 3, 4];
      expect(incrementByOne(input)).toEqual(expected);
    });
  });

  describe("addItemToArray()", () => {
    const { addItemToArray } = funcs;

    test("Should return the array with the new added item in the last position of the array", () => {
      const arr = [1, 2, 3];
      const item = 5;
      const expected = [1, 2, 3, 5];
      expect(addItemToArray(arr, item)).toEqual(expected);
    });
  });

  describe("addItemToFront()", () => {
    const { addItemToFront } = funcs;

    test("Should return the array with the new added item in the first position of the array", () => {
      const arr = [1, 2, 3];
      const item = 5;
      const expected = [5, 1, 2, 3];
      expect(addItemToFront(arr, item)).toEqual(expected);
    });
  });

  describe("wordsToSentence()", () => {
    const { wordsToSentence } = funcs;

    test("Should return a string", () => {
      const input = "hello";
      const expected = "h e l l o";
      expect(wordsToSentence(input)).toBe(expected);
    });
  });

  describe("contains()", () => {
    const { contains } = funcs;

    test("Should return a boolean value", () => {
      const arr = [1, 2, 3];
      const item = 5;
      expect(contains(arr, item)).toBe(false);
    });
  });

  describe("addNumbers()", () => {
    const { addNumbers } = funcs;

    test("Should return sum of the numbers inside of the array", () => {
      const input = [1, 2, 3];
      const expected = 6;
      expect(addNumbers(input)).toBe(expected);
    });
  });

  describe("averageTestScore()", () => {
    const { averageTestScore } = funcs;

    test("Should return average of the scores inside the array", () => {
      const input = [5, 4, 3];
      const expected = 4;
      expect(averageTestScore(input)).toBe(expected);
    });
  });

  describe("largestNumber()", () => {
    const { largestNumber } = funcs;

    test("Should return the largest number in the array", () => {
      const input = [1, 3, 2];
      const expected = 3;
      expect(largestNumber(input)).toBe(expected);
    });
  });
});
