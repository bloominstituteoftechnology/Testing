const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest function", () => {
    // arrange
    const expected = 11;
    // act
    const getBiggest = funcs.getBiggest(8, 11);
    // assert
    it("returns which is biggest", () => {
        expect(getBiggest).toBe(expected);
    });
});

describe("greeting function", () => {
    it("returns greeting", () => {
        const German = "Guten Tag!";
        const ger = funcs.greeting("German");
        expect(ger).toBe(German);

        const Spanish = "Hola!";
        const span = funcs.greeting("Spanish");
        expect(span).toBe(Spanish);

        const English = "Hello!";
        const eng = funcs.greeting("English");
        expect(eng).toBe(English);
    });
});

describe("isTenOrFive function", () => {
    it("returns which is ten or five", () => {
        const five = funcs.isTenOrFive(5);
        const ten = funcs.isTenOrFive(10);

        expect(five).toBeTruthy();
        expect(ten).toBeTruthy();
    });
});

describe("isInRange function", () => {
    it("returns if a number is in range", () => {
        // const num = 40;
        // expect(num).toBeLessThan(50);
        // expect(num).toBeGreaterThan(20);
        const num = funcs.isInRange(40);
        expect(num).toBeTruthy();
    });
});

describe("isInteger function", () => {
    it("returns whether or not a number is an integer", () => {
        const int = Number.isInteger(20);

        expect(int).toBeTruthy();
    });
});

describe("fizzBuzz function", () => {
    it("checks if a number is fizz, buzz, or fizzbuzz", () => {
        const fizzBuzz = funcs.fizzBuzz(45);
        const fizz = funcs.fizzBuzz(6);
        const buzz = funcs.fizzBuzz(10);

        expect(fizzBuzz).toBe("fizzbuzz");
        expect(fizz).toBe("fizz");
        expect(buzz).toBe("buzz");
    });
});

describe("isPrime function", () => {
    it("checks if number is prime", () => {
        const prime = funcs.isPrime(11);
        expect(prime).toBeTruthy();
    });
});

describe("returnFirst function", () => {
    it("returns first item in array", () => {
        const first = funcs.returnFirst([0, 1, 2]);
        expect(first).toBe(0);
    });
});

describe("returnLast function", () => {
    it("returns last item in array", () => {
        const last = funcs.returnLast([0, 1, 2]);
        expect(last).toBe(2);
    });
});

describe("getArrayLength function", () => {
    it("check length of array", () => {
        expect([0, 1, 2]).toHaveLength(funcs.getArrayLength([1, 2, 3]));
    });
});

describe("incrementByOne function", () => {
    it("check if array increments by 1", () => {
        const array = [0, 1, 2, 3];
        const passedArray = funcs.incrementByOne(array);
        expect(passedArray).toEqual([1, 2, 3, 4]);
    });
});

describe("addItemToArray function", () => {
    it("check if adds item to array", () => {
        const array = [1, 2, 3];
        const passedArray = funcs.addItemToArray(array, 5);
        expect(passedArray).toEqual([1, 2, 3, 5]);
    });
});

describe("addItemToFront function", () => {
    it("check if adds item to array", () => {
        const array = [1, 2, 3];
        const passedArray = funcs.addItemToFront(array, 5);
        expect(passedArray).toEqual([5, 1, 2, 3]);
    });
});

describe("wordsToSentence function", () => {
    const array = ["Hi", "how", "are", "you"];
    const passedArray = funcs.wordsToSentence(array);

    it("check if wordsToSentence", () => {
        expect(passedArray).toContain(array.join(" "));
    });
    it("checks if result is string", () => {
        expect(typeof passedArray).toEqual("string");
    });
});

describe("contains function", () => {
    const array = ["Hi", "how", "are", "you"];
    const result = funcs.contains(array, "Hi");
    it("check if array contains item", () => {
        expect(result).toBeTruthy();
    });
});

describe("addNumbers function", () => {
    const array = [1, 2, 3, 4, 5];
    const result = array.reduce((accum, current) => accum + current);
    const expected = funcs.addNumbers(array);
    it("adds all numbers in an array", () => {
        expect(result).toBe(expected);
    });
});
