const funcs = require('./project-2');

describe("", () => {

    test("get biggest", () => {
        const input1 = 267987523;
        const input2 = 1276524;
        expect(funcs.getBiggest(input1, input2)).toBe(input1);
    });

    test("greeting", () => {
        const input = "Russian";
        const expected = "Zdrastvuytye!";
        expect(funcs.greeting(input)).toBe(expected);
    });

    test("is 10 or 5", () => {
        const ten = 10;
        const five = 5;
        const other = 12987623;
        expect(funcs.isTenOrFive(ten)).toBe(true);
        expect(funcs.isTenOrFive(five)).toBe(true);
        expect(funcs.isTenOrFive(other)).toBe(false);
    });

    test("is in range 20 to 50", () => {
        const zero = 0;
        const thirty = 30;
        const eighty = 80;
        expect(funcs.isInRange(zero)).toBe(false);
        expect(funcs.isInRange(thirty)).toBe(true);
        expect(funcs.isInRange(eighty)).toBe(false);
    });

    test("is integer", () => {
        const input1 = 800142062480;
        const input2 = 2.00000001;
        expect(funcs.isInteger(input1)).toBe(true);
        expect(funcs.isInteger(input2)).toBe(false);
    });

    test("fizzbuzz", () => {
        const result = [];
        for (let i = 1; i < 21; i++) {
            result.push(funcs.fizzBuzz(i));
        }
        expect(result).toEqual([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz"]);
    });

    test("find prime numbers", () => {
        const tests = [];
        for (let i = 0; i < 21; i++) {
            tests.push(funcs.isPrime(i));
        }
        expect(tests).toEqual([false, false, true, true, false, true, false, true, false, false, false, true, false, true, false, false, false, true, false, true, false]);
    });

    test("return first in an array", () => {
        const input = [5, 4, 3, 2];
        const expected = 5;
        expect(funcs.returnFirst(expected)).toBe(null); // input is not an array
        expect(funcs.returnFirst(input)).toBe(expected);
    });

    test("return last in an array", () => {
        const input = [5, 4, 3, 2];
        const expected = 2;
        expect(funcs.returnLast(expected)).toBe(null); // input is not an array
        expect(funcs.returnLast(input)).toBe(expected);
    });

    test("return length of an array", () => {
        const input = [5, 4, 3, 2];
        const expected = 4;
        expect(funcs.getArrayLength(expected)).toBe(null); // input is not an array
        expect(funcs.getArrayLength(input)).toBe(expected);
    });

    test("return array with all elements incremented by one", () => {
        const input = [5, 4, 3, 2];
        const expected = [6, 5, 4, 3];
        const dummy = 2658972;
        expect(funcs.incrementByOne(dummy)).toBe(null); // input is not an array
        expect(funcs.incrementByOne(input)).toEqual(expected);
    });

    test("add item to array", () => {
        const arr = [5, 4, 3, 2];
        const arr2 = [2, 3, 4];
        const elem = 16;
        expect(funcs.addItemToArray(arr, elem)).toEqual([5, 4, 3, 2, 16]);
        expect(funcs.addItemToArray(arr, arr2)).toEqual([5, 4, 3, 2, 16, [2, 3, 4]]);
    });

    test("add item to front of array", () => {
        const arr = [5, 4, 3, 2];
        const arr2 = [2, 3, 4];
        const elem = 16;
        expect(funcs.addItemToFront(arr, elem)).toEqual([16, 5, 4, 3, 2]);
        expect(funcs.addItemToFront(arr, arr2)).toEqual([[2, 3, 4], 16, 5, 4, 3, 2]);
    });

    test("words to sentence", () => {
        const words = ["I", "am", "bored"];
        const sentence = "I am bored";
        expect(funcs.wordsToSentence(words)).toBe(sentence);
    })

    test("search an array for an element", () => {
        const arr = [5, 4, 3, 2];
        expect(funcs.contains(arr, 5)).toBe(true);
        expect(funcs.contains(arr, 16)).toBe(false);
    });

    test("total an array", () => {
        const arr = [5, 4, 3, 2];
        expect(funcs.addNumbers(arr)).toBe(14);
    });

    test("take an average of an array", () => {
        const arr = [5, 4, 3, 2];
        expect(funcs.averageTestScore(arr)).toBe(3.5);
    });

    test("can return largest element of array", () => {
        const arr = [5, 4, 3, 2];
        expect(funcs.largestNumber(arr)).toBe(5);
    });

    test("can handle negative arrays", () => {
        const arr = [-5, -4, -3, -2];
        expect(funcs.largestNumber(arr)).toBe(-2);
    });

});