const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("project-2", () => {
  describe("getBiggest", () => {
    it("should return the biggest value between x and y", () => {
      expect(funcs.getBiggest(30, 10)).toBe(30);
    });
    it("should return y if values are equal", () => {
      expect(funcs.getBiggest(15, 15)).toBe(15);
    });
  });

  describe("greeting", () => {
    it("should return appropriate greeting based on language given (Spanish, German, English)", () => {
      expect(funcs.greeting("German")).toBe("Guten Tag!");
    });
  });

  describe("isTenOrFive", () => {
    it("should return true if number given is ten or five)", () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
    });
    it("should return false if number given is NOT ten or five)", () => {
      expect(funcs.isTenOrFive(25)).toBeFalsy();
    });
  });

  describe("isInRange", () => {
    it("should return true if number given is between 21 and 49)", () => {
      expect(funcs.isInRange(38)).toBeTruthy();
    });
    it("should return false if number given is NOT between 21 and 49)", () => {
      expect(funcs.isInRange(70)).toBeFalsy();
    });
  });

  describe("isInteger", () => {
    it("should return true if number given is an integer)", () => {
      expect(funcs.isInteger(16)).toBeTruthy();
    });
    it("should return false if number given is NOT an integer)", () => {
      expect(funcs.isInteger(33.3)).toBeFalsy();
    });
  });

  describe("fizzBuzz", () => {
    it("should return 'fizzbuzz' if number given is divisible by 3 AND 5)", () => {
      expect(funcs.fizzBuzz(45)).toBe("fizzbuzz");
    });
    it("should return 'fizz' if number given is divisible by 3 ONLY)", () => {
      expect(funcs.fizzBuzz(33)).toBe("fizz");
    });
    it("should return 'buzz' if number given is divisible by 5 ONLY)", () => {
      expect(funcs.fizzBuzz(50)).toBe("buzz");
    });
    it("If num given is neither divisible by 3 or 5, it should return num back)", () => {
      expect(funcs.fizzBuzz(32)).toBe(32);
    });
  });

  describe("isPrime", () => {
    it("should return true if number given is a prime number)", () => {
      expect(funcs.isPrime(5)).toBeTruthy();
    });
    it("should return false if number given is less than zero)", () => {
      expect(funcs.isPrime(-25)).toBeFalsy();
    });
    it("should return false if number given equals zero or one)", () => {
      expect(funcs.isPrime(1)).toBeFalsy();
    });
  });

  describe("returnFirst", () => {
    it("should return first value in the given array", () => {
      expect(
        funcs.returnFirst(["Jordan", "Maggie", "Jose", "Michael"])
      ).toEqual("Jordan");
    });
  });

  describe("returnLast", () => {
    it("should return last value in the given array", () => {
      expect(funcs.returnLast([0, 23, 16, 54])).toEqual(54);
    });
  });

  describe("getArrayLength", () => {
    it("should return the length of the array", () => {
      expect(funcs.getArrayLength([0, 23, 16, 54, 34, 12, 11])).toEqual(7);
    });
  });

  describe("incrementByOne", () => {
    it("should return the array with the value of each element incremented by one", () => {
      expect(funcs.incrementByOne([0, 23, 16])).toEqual([1, 24, 17]);
    });
  });

  describe("addItemToArray", () => {
    it("should add a given item to a given array", () => {
      expect(
        funcs.addItemToArray(["Billy", "Stacy", "Bob", "Drew"], "Chris")
      ).toEqual(["Billy", "Stacy", "Bob", "Drew", "Chris"]);
    });
  });

  describe("addItemToFront", () => {
    it("should add a given item to the beginning of a given array", () => {
      expect(
        funcs.addItemToFront(["Billy", "Stacy", "Bob", "Drew"], "Chris")
      ).toEqual(["Chris", "Billy", "Stacy", "Bob", "Drew"]);
    });
  });

  describe("wordsToSentence", () => {
    it("should return a string with spaces in between characters when given a string", () => {
      expect(funcs.wordsToSentence("George")).toBe("G e o r g e");
    });

    it("should return a sentence from the words in an array", () => {
      expect(funcs.wordsToSentence(["George", "is", "that", "guy"])).toBe(
        "George is that guy"
      );
    });
  });

  describe("contains", () => {
    it("should return true if the given array contains a given item", () => {
      expect(
        funcs.contains(["Billy", "Stacy", "Bob", "Drew", "Chris"], "Bob")
      ).toBeTruthy();
    });
    it("should return false if the given array does NOT contain a given item", () => {
      expect(
        funcs.contains(["Billy", "Stacy", "Bob", "Drew", "Chris"], "Julie")
      ).toBeFalsy();
    });
  });

  describe("addNumbers", () => {
    it("should return the sum of numbers in a given array", () => {
      expect(funcs.addNumbers([12, 25, 34, 1, 56])).toBe(128);
    });
  });

  describe("averageTestScore", () => {
    it("should return the average test score(number) from a given array", () => {
      expect(funcs.averageTestScore([12, 25, 34, 1, 56])).toBeCloseTo(25.6);
    });
  });

  describe("largestNumber", () => {
    it("should return the largest number from a given array", () => {
      expect(funcs.largestNumber([12, 25, 34, 1, 56])).toBeCloseTo(56);
    });
  });
});
