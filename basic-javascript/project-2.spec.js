const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("Funcs", () => {
  describe("getBiggest", () => {
    const { getBiggest } = funcs;

    it("returns the bigger of two different values", () => {
      const example = getBiggest(2, 3);
      expect(example).toBe(3);
    });

    it("returns the second value if they are the same", () => {
      const example = getBiggest(2, 2);
      expect(example).toBe(2);
    });
  });

  describe("greeting", () => {
    const { greeting } = funcs;

    it("returns a string", () => {
      const example = greeting("English");
      expect(typeof example).toBe("string");
    });

    it("returns a greeting in German or Spanish if one of those are the given language", () => {
      const german = greeting("German");
      const spanish = greeting("Spanish");
      expect(german).toBe("Guten Tag!");
      expect(spanish).toBe("Hola!");
    });

    it("defaults a return of an English greeting in any other case", () => {
      const english = greeting("English");
      const italian = greeting("Italian");
      expect(english).toBe("Hello!");
      expect(english).toBe(italian);
    });
  });

  describe("isTenorFive", () => {
    const { isTenOrFive } = funcs;
    const is = isTenOrFive(10);
    const isNot = isTenOrFive("10");
    it("returns a boolean", () => {
      expect(typeof is).toBe("boolean");
    });
    it("returns true if input is strictly equal to 10 or 5, otherwise returns false", () => {
      expect(is).toBe(true);
      expect(isNot).toBe(false);
    });
  });

  describe("isInRange", () => {
    const { isInRange } = funcs;
    const thirty = isInRange(30);
    const ten = isInRange(10);
    const twenty = isInRange(20);
    it("returns true if the given number is between 20 and 50", () => {
      expect(thirty).toBeTruthy();
    });

    it("returns false if given number is outside range, or not inclusive", () => {
      expect(ten).toBeFalsy();
      expect(twenty).toBeFalsy();
    });
  });

  describe("isInteger", () => {
    const { isInteger } = funcs;
    it("returns true if input is a number that is an integer", () => {
      const ten = isInteger(10);
      expect(ten).toBeTruthy();
    });

    it("returns false if input is a non-integer number or non-number", () => {
      const string = isInteger("10");
      const notInteger = isInteger(10.1);
      expect(string).toBeFalsy();
      expect(notInteger).toBeFalsy();
    });
  });

  describe("fizzBuzz", () => {
    const { fizzBuzz } = funcs;
    it('returns "fizzbuzz" if input is a number divisible by both 5 and 3', () => {
      const fifteen = fizzBuzz(15);
      const expected = "fizzbuzz";
      expect(fifteen).toBe(expected);
    });

    it('returns "buzz" if input is number divisible by 5 but not by 3', () => {
      const ten = fizzBuzz(10);
      const expected = "buzz";
      expect(ten).toBe(expected);
    });

    it('returns "fizz" if input is number divisible by 3 but not by 5', () => {
      const nine = fizzBuzz(9);
      const expected = "fizz";
      expect(nine).toBe(expected);
    });

    it("returns the input if it was not divisible by 5 or 3, or if it wasn't a number", () => {
      const two = fizzBuzz(2);
      const nan = fizzBuzz("not a number, sorry");
      expect(two).toBe(2);
      expect(nan).toBe("not a number, sorry");
    });
  });

  describe("isPrime", () => {
    const { isPrime } = funcs;
    it("returns true when a prime number is passed into it", () => {
      expect(isPrime(3)).toBe(true);
    });
    it("returns false when passed a non-prime number, a negative number, zero, or one", () => {
      expect(isPrime(-1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
    it("returns null when a non-number is passed or wasn't passed anything", () => {
      expect(isPrime("number")).toBe(null);
      expect(isPrime()).toBe(null);
      expect(isPrime([])).toBe(null);
      expect(isPrime(null)).toBe(null);
      expect(isPrime(NaN)).toBe(null);
    });
  });

  describe("returnFirst", () => {
    const { returnFirst } = funcs;

    it("returns the first object in an array when passed an array", () => {
      expect(returnFirst([1, 2, 3])).toBe(1);
    });

    it("returns undefined when passed an empty array", () => {
      expect(returnFirst([])).toBe(undefined);
    });
  });

  describe("returnLast", () => {
    const { returnLast } = funcs;
    it("returns the last object in an array when passed an array", () => {
      expect(returnLast([1, 2, 3])).toBe(3);
    });

    it("returns undefined when passed an empty array", () => {
      expect(returnLast([])).toBe(undefined);
    });
  });

  describe("getArrayLength", () => {
    const { getArrayLength } = funcs;
    it("returns the length of an array when passed an array", () => {
      expect(getArrayLength([1, 2, 3])).toBe(3);
      expect(getArrayLength([])).toBe(0);
    });

    it("returns undefined when passed a non-array input", () => {
      expect(getArrayLength(1)).toBe(undefined);
    });
  });

  describe("incrementByOne", () => {
    const { incrementByOne } = funcs;
    it("increments each object in a passed array and returns the modified array", () => {
      expect(incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    });
  });

  describe("addItemToArray", () => {
    const { addItemToArray } = funcs;
    it("when passed an array and an item, returns a mutated version of that array with the item added to the end of it", () => {
      expect(addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("addItemToFront", () => {
    const { addItemToFront } = funcs;
    it("when passed an array and an item, returns a mutated version of the array with the item put at the first index", () => {
      expect(addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
    });
  });

  describe("wordsToSentence", () => {
    const { wordsToSentence } = funcs;
    it("when passed an array of strings(words), returns a new string with the words added in order separated by a space(sentence)", () => {
      expect(wordsToSentence(["Hello", "there"])).toBe("Hello there");
    });
  });

  describe("contains", () => {
    const { contains } = funcs;
    it("when passed an array and an item, returns true if the array includes the item", () => {
      expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it("returns false when the passed array does not contain the item", () => {
      expect(contains([1, 2, 3], 4)).toBe(false);
    });
  });

  describe("addNumbers", () => {
    const { addNumbers } = funcs;
    it("returns the sum of each number in a passed array of numbers", () => {
      expect(addNumbers([1, 2, 3])).toBe(6);
    });

    it("returns null when passed an empty array", () => {
      expect(addNumbers([])).toBe(null);
    });
  });

  describe("averageTestScore", () => {
    const { averageTestScore } = funcs;
    it("when passed an array of numbers, returns the numerical average of all those numbers", () => {
      expect(averageTestScore([1, 2, 3])).toBe(2);
    });

    it("will ignore non-number objects in the array and only use included number objects", () => {
      expect(averageTestScore([1, 2, 3, NaN])).toBe(2);
      expect(averageTestScore([1, 2, 3, "not a number"])).toBe(2);
      expect(averageTestScore([1, 2, 3, undefined])).toBe(2);
    });

    it("will return undefined if the passed array is either empty or contains no numbers", () => {
      expect(averageTestScore(["string", NaN, undefined])).toBe(undefined);
    });
  });

  describe("largestNumber", () => {
    const { largestNumber } = funcs;
    it("when passed an array, returns the largest number in that array", () => {
      expect(largestNumber([1, 2, 50])).toBe(50);
    });

    it("returns zero when no numbers in the array are larger than zero", () => {
      expect(largestNumber([-1, -15, -2])).toBe(0);
    });

    it("returns null if passed an array that is either empty or contains no numbers", () => {
      expect(largestNumber(["string", NaN, undefined])).toBe(null);
    });
  });
});
