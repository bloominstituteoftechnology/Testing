const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("project-2.js functions", () => {
  test("jest runs", () => {});

  describe("getBiggest()", () => {
    it("should return a number", () => {
      expect(typeof funcs.getBiggest(1, 2)).toBe("number");
    });

    it("should return the biggest number", () => {
      expect(funcs.getBiggest(1, 2)).toBe(2);
    });
  });

  describe("greeting()", () => {
    it("should return a string", () => {
      expect(typeof funcs.greeting("Spanish")).toBe("string");
    });

    it("should return the correct language", () => {
      expect(funcs.greeting("Spanish")).toBe("Hola!");
    });
  });

  describe("isTenOrFive()", () => {
    it("should return a boolean", () => {
      expect(typeof funcs.isTenOrFive(9)).toBe("boolean");
    });

    it("should only return 10 or 5", () => {
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    });
  });

  describe("isInRange()", () => {
    it("should return a boolean", () => {
      expect(typeof funcs.isInRange(9)).toBe("boolean");
    });

    it("should be true if number is between 20-50", () => {
      expect(funcs.isInRange(40)).toBeTruthy();
    });
  });

  describe("isInteger()", () => {
    it("should return a boolean", () => {
      expect(typeof funcs.isInteger(9)).toBe("boolean");
    });

    it("should only return an integer", () => {
      expect(funcs.isInteger(3.2)).toBeFalsy();
    });
  });

  describe("fizzBuzz()", () => {
    it("should return a string if received number is divisible by 5 and 3", () => {
      expect(typeof funcs.fizzBuzz(3)).toBe("string");
    });

    it("should return a number if the received number is NOT divisible by 5 and 3", () => {
      expect(typeof funcs.fizzBuzz(2)).toBe("number");
    });

    it("should return 'fizzbuzz' if the number is divisible by both 5 and 3", () => {
      expect(funcs.fizzBuzz(15)).toMatch("fizzbuzz");
    });

    it("should return 'buzz' if the number is divisible by 5 but NOT 3", () => {
      expect(funcs.fizzBuzz(5)).toMatch("buzz");
    });

    it("should return 'fizz' if the number is divisible by 3 but NOT 5", () => {
      expect(funcs.fizzBuzz(9)).toMatch("fizz");
    });
  });

  describe("isPrime()", () => {
    it("should return a boolean", () => {
      expect(typeof funcs.isPrime(3)).toBe("boolean");
    });
  });

  describe("returnFirst()", () => {
    it("should return the first item in a given array", () => {
      expect(funcs.returnFirst(["hi", 2, 3])).toBe("hi");
    });
  });

  describe("returnLast()", () => {
    it("should return the last item in a given array", () => {
      expect(funcs.returnLast([1, 2, 3, 4, 5])).toBe(5);
    });
  });

  describe("getArrayLength()", () => {
    it("should return a number", () => {
      expect(typeof funcs.getArrayLength([1, 2, 3])).toBe("number");
    });

    it("should return a given array's length", () => {
      expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
    });
  });

  describe("incrementByOne()", () => {
    it("should return an array", () => {
      expect(Array.isArray(funcs.incrementByOne([1, 2, 3]))).toBe(true);
    });
  });

  describe("addItemToArray()", () => {
    it("should return an array", () => {
      expect(Array.isArray(funcs.addItemToArray([1, 2, 3], 4))).toBe(true);
    });
  });

  describe("addItemToFront()", () => {
    it("should return an array", () => {
      expect(Array.isArray(funcs.addItemToArray([1, 2, 3], 4))).toBe(true);
    });
  });
});
