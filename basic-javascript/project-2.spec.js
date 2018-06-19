const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("project-2", () => {
  describe("getBiggest", () => {
    it("returns string when given a non string numeric value", () => {
      expect(funcs.getBiggest("2", "4")).toBe("4");
    });

    it("should return the bigger number", () => {
      expect(funcs.getBiggest(6, 18)).toBe(18);
    });
  });

  describe("greeting", () => {
    it("return greeting in German", () => {
      expect(funcs.greeting("German")).toBe("Guten Tag!");
    });
    it("return greeting in Spanish", () => {
      expect(funcs.greeting("Spanish")).toBe("Hola!");
    });
    it("return greeting default to English", () => {
      expect(funcs.greeting("")).toBe("Hello!");
      expect(funcs.greeting(null)).toBe("Hello!");
      expect(funcs.greeting({ key: "value" })).toBe("Hello!");
      expect(funcs.greeting(true)).toBe("Hello!");
    });
  });

  describe("isTenOrFive", () => {
    it("return true if the number is 10 or 5", () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    });
  });
  describe("isInRange", () => {
    it("return true if number is between 20 and 50", () => {
      expect(funcs.isInRange(34)).toBeTruthy();
      expect(funcs.isInRange(18)).toBeFalsy();
    });
  });
  describe("isInteger", () => {
    it("return if integer", () => {
      const isInteger = funcs.isInteger;
      expect(isInteger(18)).toBeTruthy();
      expect(isInteger("Max")).toBeFalsy();
    });
  });
  describe("fizzBuzz", () => {
    it("should be fizzBuzz when divisible by 5 and 3, buzz when by 5 and fizz by 3 and just number for others", () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(15)).toBe("fizzbuzz");
      expect(fizzBuzz(5)).toBe("buzz");
      expect(fizzBuzz(5)).toBe("buzz");
      expect(fizzBuzz(1)).toBe(1);
    });
  });
  describe("isPrime", () => {
    it("Is the number prime", () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(3)).toBeTruthy();
      expect(isPrime(4)).toBeFalsy();
      expect(isPrime(0)).toBeFalsy();
      expect(isPrime(7)).toBeTruthy();
    });
  });
  describe("returnFirst", () => {
    it("", () => {
      expect();
    });
  });
  describe("returnLast", () => {
    it("", () => {
      expect();
    });
  });
  describe("getArrayLength", () => {
    it("", () => {
      expect();
    });
  });
  describe("incrementByOne", () => {
    it("", () => {
      expect();
    });
  });
  describe("addItemToArray", () => {
    it("", () => {
      expect();
    });
  });
  describe("addItemToFront", () => {
    it("", () => {
      expect();
    });
  });
  describe("wordsToSentence", () => {
    it("", () => {
      expect();
    });
  });
  describe("contains", () => {
    it("", () => {
      expect();
    });
  });
  describe("addNumbers", () => {
    it("", () => {
      expect();
    });
  });
  describe("averageTestScore", () => {
    it("", () => {
      expect();
    });
  });
  describe("largestNumber", () => {
    it("", () => {
      expect();
    });
  });
});
