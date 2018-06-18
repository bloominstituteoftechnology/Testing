const funcs = require('./project-2');

describe("getBiggest", () => {
    it("should get the biggest number", () => {
        expect(funcs.getBiggest(9, 5)).toBe(9);
        expect(funcs.getBiggest(3, 3)).toBe(3);
        expect(funcs.getBiggest(3, 8)).toBe(8);
    });
});

describe("greeting", () => {
    it("should get a proper greeting depending on the language", () => {
        expect(funcs.greeting()).toBe("Hello!");
        expect(funcs.greeting("German")).toBe("Guten Tag!");
        expect(funcs.greeting("Spanish")).toBe("Hola!");
    });
});

describe("isTenOrFive", () => {
    it("should return true if the num is 10 or 5", () => {
        expect(funcs.isTenOrFive(7)).toBeFalsy();
        expect(funcs.isTenOrFive(5)).toBeTruthy();
        expect(funcs.isTenOrFive(10)).toBeTruthy();
    });
});

describe("isInRange", () => {
    it("should check if the num is in range between 20 and 50", () => {
        expect(funcs.isInRange(3)).toBeFalsy();
        expect(funcs.isInRange(24)).toBeTruthy();
    });
});

describe("isInteger", () => {
    it("should check if the num is integer", () => {
        expect(funcs.isInteger(91.3)).toBeFalsy();
        expect(funcs.isInteger("apple")).toBeFalsy();
        expect(funcs.isInteger(7)).toBeTruthy();
    });
});

describe("fizzBuzz", () => {
    it("should return fizzbuzz if the num is divisible by 5 and 3, fizz if by 3, buzz if by 5, and the num itself if no condition is met", () => {
        expect(funcs.fizzBuzz(3)).toBe("fizz");
        expect(funcs.fizzBuzz(5)).toBe("buzz");
        expect(funcs.fizzBuzz(45)).toBe("fizzbuzz");
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
    it("should get the first item in an array", () => {
        expect(funcs.returnFirst([5,3,2])).toBe(5);

    });
});

describe("returnLast", () => {
    it("should get the last item in an array", () => {
        expect(funcs.returnLast([1,2,7])).toBe(7);
    });
});

describe("getArrayLength", () => {
    it("should get arrays length", () => {
        expect(funcs.getArrayLength([1,2,3,4,5,6])).toBe(6);
    });
});

describe("incrementByOne", () => {
    const arr = [10,20,30];
    it("should increment all nums in an array", () => {
        expect(funcs.incrementByOne(arr)).toEqual([11,21,31]);
    });
});

describe("addItemToArray", () => {
    it("should add item into end of an array", () => {
        expect(funcs.addItemToArray([2,2,2], 7)).toEqual([2,2,2,7]);
    });
    it("should throw an error if the first arg is not an array", () => {
        expect(() => funcs.addItemToArray({a: 1, b: 2}, 7)).toThrow(TypeError);
    });
});

describe("addItemToFront", () => {
    it("should add item to the front of an array", () => {
        expect(funcs.addItemToFront(["apple", "orange", "lemon"], 7)).toEqual([7, "apple", "orange", "lemon"]);
    });
    it("should throw an error if the first arg is not an array", () => {
        expect(() => funcs.addItemToArray({ a: 1, b: 2 }, 7)).toThrow(TypeError);
    });
});

describe("wordsToSentence", () => {
    it("should form a sentence from given words", () => {
        expect(funcs.wordsToSentence(["you", "will", "never", "walk", "alone"])).toBe(
            "you will never walk alone"
        );
    });
});

describe("contains", () => {
    it("should return true if array contains the item as argument", () => {
        expect(funcs.contains([3,6,9], "apple")).toBeFalsy();
        expect(funcs.contains([3, 6, 9], 5)).toBeFalsy();
        expect(funcs.contains([4, 1, 7], 7)).toBeTruthy();
    });
    it("should throw an error if the first arg is not an array", () => {
        expect(() => funcs.addItemToArray("apple", 7)).toThrow(TypeError);
    });
});

describe("addNumbers", () => {
    it("should add up all numbers in the array", () => {
        expect(funcs.addNumbers([4,1,7])).toBe(12);
    });
});

describe("averageTestScore", () => {
    it("should return the average score in nums of array", () => {
        expect(funcs.averageTestScore([3,6,9,2])).toBe(5);
        expect(funcs.averageTestScore("apple", 3)).toBe(NaN);
    });
});

describe("largestNumber", () => {
    it("should return the largest number from array", () => {
        expect(funcs.largestNumber([9,32,5])).toBe(32);
        expect(funcs.largestNumber("apple")).toBe(0);
    });
});