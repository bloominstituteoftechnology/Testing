const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe.skip("project-2", () => {
  describe("getBiggest", () => {
    it("returns the bigger of the two variables", () => {
      expect(funcs.getBiggest(3, 4)).toBe(4);
    });
  });
  describe("greeting", () => {
    it("returns the greeting in the language that was passed to it", () => {
      expect(funcs.greeting("German")).toBe("Guten Tag!");
      expect(funcs.greeting("Spanish")).toBe("Hola!");
      expect(funcs.greeting("")).toBe("Hello!");
    });
  });
  describe("isTenOrFive", () => {
    it("returns true if num is 10 or 5", () => {
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    });
    it("returns false if num is not 10 or 5", () => {
      expect(funcs.isTenOrFive(54)).toBeFalsy();
    });
  });
  describe("isInRange", () => {
    it("returns true if num is between 20 and 50", () => {
      expect(funcs.isInRange(25)).toBeTruthy();
    });
    it("returns false if num is between 20 and 50", () => {
      expect(funcs.isInRange(10)).toBeFalsy();
    });
  });
  describe("isInteger", () => {
    it("returns true if num is an integer", () => {
      expect(funcs.isInteger(5)).toBeTruthy();
    });
    it("returns false if num is not an integer", () => {
      expect(funcs.isInteger(5.5)).toBeFalsy();
    });
  });
  describe("fizzBuzz", () => {
    it("returns fizzbuzz if num is divisible by both 3 and 5", () => {
      expect(funcs.fizzBuzz(45)).toBe("fizzbuzz");
    });
    it("returns buzz if num is divisible by 5 but not by 3", () => {
      expect(funcs.fizzBuzz(10)).toBe("buzz");
    });
    it("returns fizz if num is divisible by 3 but not by 5", () => {
      expect(funcs.fizzBuzz(9)).toBe("fizz");
    });
  });
  describe("isPrime", () => {
    it("returns true if num is prime", () => {
      expect(funcs.isPrime(1 || 0)).toBeFalsy();
      expect(funcs.isPrime(7)).toBeTruthy();
      expect(funcs.isPrime(8)).toBeFalsy();
    });
  });
  describe("returnFirst", () => {
    it("returns the first item in the array", () => {
      expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1);
    });
  });
  describe("returnLast", () => {
    it("returns the last item in the array", () => {
      expect(funcs.returnLast([1, 2, 3, 4])).toBe(4);
    });
  });
  describe("getArrayLength", () => {
    it("returns the length of the array", () => {
      expect(funcs.getArrayLength([1, 2, 3, 4])).toEqual(4);
    });
  });
  describe("incrementByOne", () => {
    it("returns the array with all elements incremented by 1", () => {
      expect(funcs.incrementByOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
    });
  });
  describe("addItemToArray", () => {
    it("adds an item to the end of the array and returns it", () => {
      expect(funcs.addItemToArray([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
    });
  });
  describe("addItemToFront", () => {
    it("adds an item to the front of the array and returns it", () => {
      expect(funcs.addItemToFront([1, 2, 3, 4], 5)).toEqual([5, 1, 2, 3, 4]);
    });
  });
  describe("wordsToSentence", () => {
    it("concatenenates an array of strings into a sentence", () => {
      expect(funcs.wordsToSentence(["Hi", "Derrick", "Mei"])).toEqual(
        "Hi Derrick Mei"
      );
    });
  });
  describe("contains", () => {
    it("checks to see if item is present in array", () => {
      expect(funcs.contains([1, 2, 3, 4, 2, 1], 1)).toEqual(true);
    });
  });
  describe("addNumbers", () => {
    it("sums up an array of numbers", () => {
      expect(funcs.addNumbers([1, 2, 3, 4])).toBe(10);
    });
  });
  describe("averageTestScore", () => {
    it("calculates the average given an array of test scores", () => {
      expect(funcs.averageTestScore([1, 2, 3, 4])).toBe(2.5);
    });
  });
  describe("largestNumber", () => {
    it("finds the largest number in an array and returns it", () => {
      expect(funcs.largestNumber([1, 2, 3, 4])).toBe(4);
    });
  });
});
