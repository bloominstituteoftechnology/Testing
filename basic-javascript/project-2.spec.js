const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("get biggest tests", () => {
    test("x greater than y", () => {
        const expected = 5;

        const result = funcs.getBiggest(5, 4);

        expect(result).toBe(expected);
    })

    test("y greater than x", () => {
        const expected = 5;

        const result = funcs.getBiggest(4, 5);

        expect(result).toBe(expected);
    })

    test("x and y are equal", () => {
        const expected = 5;

        const result = funcs.getBiggest(5, 5);

        expect(result).toBe(expected);
    })
})

describe("greeting tests", () => {
    test("german", () => {
        const expected = "Guten Tag!";

        const result = funcs.greeting("German");

        expect(result).toBe(expected);
    })

    test("spanish", () => {
        const expected = "Hola!";

        const result = funcs.greeting("Spanish");

        expect(result).toBe(expected);
    })

    test("default", () => {
        const expected = "Hello!";

        const result = funcs.greeting();

        expect(result).toBe(expected);
    })
})

describe("is ten or five tests", () => {
    test("input is ten", () => {
        const expected = true;

        const result = funcs.isTenOrFive(10);

        expect(result).toBe(expected);
    })

    test("input is five", () => {
        const expected = true;

        const result = funcs.isTenOrFive(5);

        expect(result).toBe(expected);
    })

    test("input is otherwise", () => {
        const expected = false;

        const result = funcs.isTenOrFive(11);

        expect(result).toBe(expected);
    })
})

describe("isInRange function", () => {
    test("should return true", () => {
        const expected = true;

        const result = funcs.isInRange(49);

        expect(result).toBe(expected);
    })

    test("should return false", () => {
        const expected = false;

        const result = funcs.isInRange(5);

        expect(result).toBe(expected);
    })
})

describe("isInteger function", () => {
    test("should return true", () => {
        const expected = true;

        const result = funcs.isInteger(49);

        expect(result).toBe(expected);
    })

    test("should return false", () => {
        const expected = false;

        const result = funcs.isInteger(5.5);

        expect(result).toBe(expected);
    })
})

describe("fizzBuzz function", () => {
    test("should return fizz", () => {
        const expected = "fizz";

        const result = funcs.fizzBuzz(9);

        expect(result).toBe(expected);
    })

    test("should return buzz", () => {
        const expected = "buzz";

        const result = funcs.fizzBuzz(10);

        expect(result).toBe(expected);
    })

    test("should return fizzbuzz", () => {
        const expected = "fizzbuzz";

        const result = funcs.fizzBuzz(15);

        expect(result).toBe(expected);
    })
})

describe("isPrime function", () => {
    test("should return false", () => {
        const expected = false;

        const result = funcs.isPrime(9);

        expect(result).toBe(expected);
    })

    test("should return true", () => {
        const expected = true;

        const result = funcs.isPrime(3);

        expect(result).toBe(expected);
    })

    test("should return false when called with float", () => {
        const expected = false;

        const result = funcs.isPrime(3.5);

        expect(result).toBe(expected);
    })
})

describe("returnFirst function", () => {
    test("should return first index", () => {
        const expected = 0;

        const result = funcs.returnFirst([0, 1, 2, 3]);

        expect(result).toBe(expected);
    })
})

describe("returnLast function", () => {
    test("should return last index", () => {
        const expected = 3;

        const result = funcs.returnLast([0, 1, 2, 3]);

        expect(result).toBe(expected);
    })
})

describe("getArrayLength function", () => {
    test("should return array length", () => {
        const expected = 4;

        const result = funcs.getArrayLength([0, 1, 2, 3]);

        expect(result).toBe(expected);
    })
})

describe("incrementByOne function", () => {
    test("should return array with all indexes++", () => {
        const expected = [1, 2, 3, 4];

        const result = funcs.incrementByOne([0, 1, 2, 3]);

        expect(result).toEqual(expected);
    })
})

describe("addItemToArray function", () => {
    test("should return arr with item at the back", () => {
        const expected = [0, 1, 2, 3, 5];

        const result = funcs.addItemToArray([0, 1, 2, 3], 5);

        expect(result).toEqual(expected);
    })
})

describe("addItemToFront function", () => {
    test("should return arr with item at the back", () => {
        const expected = [5, 0, 1, 2, 3];

        const result = funcs.addItemToFront([0, 1, 2, 3], 5);

        expect(result).toEqual(expected);
    })
})

describe("wordsToSentence function", () => {
    test("should return words as a string", () => {
        const expected = "cry why wry";

        const result = funcs.wordsToSentence(["cry", "why", "wry"]);

        expect(result).toBe(expected);
    })
})

describe("contains function", () => {
    test("should return true", () => {
        const expected = true;

        const result = funcs.contains(["cry", "why", "wry"], "cry");

        expect(result).toBe(expected);
    })
    test("should return false", () => {
        const expected = false;

        const result = funcs.contains(["cry", "why", "wry"], "try");

        expect(result).toBe(expected);
    })
})

describe("addNumbers function", () => {
    test("should return sum of array", () => {
        const expected = 5;

        const result = funcs.addNumbers([1, 2, 2]);

        expect(result).toBe(expected);
    })
})

describe("averageTestScore function", () => {
    test("should return average of array", () => {
        const expected = 80;

        const result = funcs.averageTestScore([100, 80, 90, 50]);

        expect(result).toBe(expected);
    })
})

describe("largestNumber function", () => {
    test("should return largest number of array", () => {
        const expected = 10;

        const result = funcs.largestNumber([1, 2, 2, 4, 6, 10]);

        expect(result).toBe(expected);
    })
})