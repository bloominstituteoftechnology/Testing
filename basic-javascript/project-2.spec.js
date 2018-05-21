const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("Project-2-spec", () => {
  describe("getBiggest", () => {
    it("should get biggest number", () => {
      expect(funcs.getBiggest(2, 4)).toBe(4);
      expect(funcs.getBiggest(2, 2)).toBe(2);
      expect(funcs.getBiggest(3, 2)).toBe(3);
    });
  });
  describe("greeting", () => {
    it("should get a greeting in correct language", () => {
      expect(funcs.greeting("German")).toBe("Guten Tag!");
      expect(funcs.greeting("Spanish")).toBe("Hola!");
      expect(funcs.greeting()).toBe("Hello!");
    });
  });
  describe("isTenOrFive", () => {
    it("should return true if number is 10 or 5", () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
      expect(funcs.isTenOrFive(3)).toBeFalsy();
    });
  });
  describe("isInRange", () => {
    it("should check if number is in range between 20 and 50", () => {
      expect(funcs.isInRange(44)).toBeTruthy();
      expect(funcs.isInRange(21)).toBeTruthy();
      expect(funcs.isInRange(3)).toBeFalsy();
    });
  });
  describe("isInteger", () => {
    it("should check if number is integer", () => {
      expect(funcs.isInteger(44)).toBeTruthy();
      expect(funcs.isInteger(21.3)).toBeFalsy();
      expect(funcs.isInteger("bam")).toBeFalsy();
    });
  });
  describe("fizzBuzz", () => {
    it("should return fizzbuzz if number is divisible by 5 and 3, buzz if by 5, fizz if by 3 and number if no condition is met", () => {
      expect(funcs.fizzBuzz(90)).toBe("fizzbuzz");
      expect(funcs.fizzBuzz(3)).toBe("fizz");
      expect(funcs.fizzBuzz(5)).toBe("buzz");
      expect(funcs.fizzBuzz(101)).toBe(101);
    });
  });
  describe("isPrime", () => {
    it("should check if number is prime", () => {
      expect(funcs.isPrime(23)).toBeTruthy();
      expect(funcs.isPrime(21)).toBeFalsy();
      expect(funcs.isPrime(-1)).toBeFalsy();
      expect(funcs.isPrime(0)).toBeFalsy();
      expect(funcs.isPrime(1)).toBeFalsy();
    });
  });
  describe("returnFirst", () => {
    const arr = [1, 2, 3];
    it("should get first item in an array", () => {
      expect(funcs.returnFirst(arr)).toBe(1);
      expect(funcs.returnFirst(2, 2)).toBe(undefined);
      expect(funcs.returnFirst("hello")).toBe("h");
    });
  });
  describe("returnLast", () => {
    const arr = [1, 2, 3];
    it("should get last item in an array", () => {
      expect(funcs.returnLast(arr)).toBe(3);
      expect(funcs.returnLast(2, 2)).toBe(undefined);
      expect(funcs.returnLast("hello")).toBe("o");
    });
  });
  describe("getArrayLength", () => {
    const arr = [1, 2, 3];
    it("should get arrays length", () => {
      expect(funcs.getArrayLength(arr)).toBe(3);
      expect(funcs.getArrayLength(2, 2)).toBe(undefined);
      expect(funcs.getArrayLength("hello")).toBe(5);
    });
  });
  describe("incrementByOne", () => {
    const arr = [1, 2, 3];
    it("should increment all items in an array", () => {
      expect(funcs.incrementByOne(arr)).toEqual([2, 3, 4]);
      expect(funcs.incrementByOne("hello")).toBe("hello");
    });
  });
  describe("addItemToArray", () => {
    it("should insert item into end of an array", () => {
      expect(funcs.addItemToArray([1, 2, 3], 5)).toEqual([1, 2, 3, 5]);
      expect(funcs.addItemToArray([1, 2, 3], "yawn")).toEqual([
        1,
        2,
        3,
        "yawn"
      ]);
    });
    expect(() => funcs.addItemToArray("hello", 5)).toThrow(TypeError);
  });
  describe("addItemToFront", () => {
    it("should insert item into front of an array", () => {
      expect(funcs.addItemToFront([1, 2, 3], 5)).toEqual([5, 1, 2, 3]);
      expect(funcs.addItemToFront([1, 2, 3], "yawn")).toEqual([
        "yawn",
        1,
        2,
        3
      ]);
      expect(() => funcs.addItemToFront("hello", 5)).toThrow(TypeError);
    });
  });
  describe("wordsToSentence", () => {
    it("should create a sentence from words", () => {
      expect(funcs.wordsToSentence(["welcome", "to", "lisbon"])).toEqual(
        "welcome to lisbon"
      );
      expect(funcs.wordsToSentence("hello")).toBe("h e l l o");
      expect(funcs.wordsToSentence(4)).toBe("");
      expect(funcs.wordsToSentence([])).toBe("");
    });
  });
  describe("contains", () => {
    it("should return true if array contains item", () => {
      expect(funcs.contains([1, 2, 3], 5)).toBeFalsy();
      expect(funcs.contains([1, 2, 3], "yawn")).toBeFalsy();
      expect(funcs.contains([1, 2, 3], 3)).toBeTruthy();
      expect(funcs.contains("hello", 3)).toBeFalsy();
    });
  });
  describe("addNumbers", () => {
    it("should sum all numbers", () => {
      expect(funcs.addNumbers([1, 2, 3])).toBe(6);
      expect(funcs.addNumbers([1, 2], "yawn")).toBe(3);
      expect(funcs.addNumbers("hello", 3)).toBe("0hello");
    });
  });
  describe("averageTestScore", () => {
    it("should return average score", () => {
      expect(funcs.averageTestScore([1, 2, 3])).toBe(2);
      expect(funcs.averageTestScore([1, 2], "yawn")).toBe(1.5);
      expect(funcs.averageTestScore("hello", 3)).toBe(NaN);
      expect(funcs.averageTestScore([], 3)).toBe(NaN);
    });
  });
  describe("largestNumber", () => {
    it("should return largest number from array", () => {
      expect(funcs.largestNumber([1, 2, 3])).toBe(3);
      expect(funcs.largestNumber([1, 2], "yawn")).toBe(2);
      expect(funcs.largestNumber("hello", 3)).toBe(0);
    });
  });
});
