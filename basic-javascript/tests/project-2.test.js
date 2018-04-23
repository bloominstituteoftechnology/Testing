/* eslint-disable prefer-destructuring */

const assert = require("chai").assert;
const funcs = require("../src/project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("Project-2 Functions", () => {
    describe("`getBiggest`", () => {
        it("should be a function", () => {
            const getBiggest = funcs.getBiggest;
            assert.typeOf(getBiggest, "function");
        });
        it("should return x if x is greater than y", () => {
            const x = 1;
            const y = 0;
            const myFunc = funcs.getBiggest(x, y);
            assert.equal(myFunc, x);
        });
        it("should return y if y is greater than x", () => {
            const x = 0;
            const y = 2;
            const myFunc = funcs.getBiggest(x, y);
            assert.equal(myFunc, y);
        });
        it("should return y if x is equal to y", () => {
            const x = 1;
            const y = 1;
            const myFunc = funcs.getBiggest(x, y);
            assert.equal(myFunc, y);
        });
    });

    describe("`greeting`", () => {
        it("should be a function", () => {
            const greeting = funcs.greeting;
            assert.typeOf(greeting, "function");
        });
        it("should return Guten Tag! if German", () => {
            const lang = "German";
            const myFunc = funcs.greeting(lang);
            assert.equal(myFunc, "Guten Tag!");
        });
        it("should return Hola! if spanish", () => {
            const lang = "Spanish";
            const myFunc = funcs.greeting(lang);
            assert.equal(myFunc, "Hola!");
        });
        it("should return Hello! if no language or a undefined language", () => {
            const lang = "English";
            const myFunc = funcs.greeting(lang);
            assert.equal(myFunc, "Hello!");
        });
    });

    describe("`isTenOrFive`", () => {
        it("should be a function", () => {
            const isTenOrFive = funcs.isTenOrFive;
            assert.typeOf(isTenOrFive, "function");
        });
        it("should return true if number is 5", () => {
            const n = 5;
            const myFunc = funcs.isTenOrFive(n);
            assert.equal(myFunc, true);
        });
        it("should return true if number is 10", () => {
            const n = 10;
            const myFunc = funcs.isTenOrFive(n);
            assert.equal(myFunc, true);
        });
        it("should return false if number is not 10 or 5", () => {
            const n = 11;
            const myFunc = funcs.isTenOrFive(n);
            assert.equal(myFunc, false);
        });
    });

    describe("`isInRange`", () => {
        it("should be a function", () => {
            const isInRange = funcs.isInRange;
            assert.typeOf(isInRange, "function");
        });
        it("should return true if number is less than 50 and greater than 20", () => {
            const n = 40;
            const myFunc = funcs.isInRange(n);
            assert.equal(myFunc, true);
        });
        it("should return false if number is greater than than 50", () => {
            const n = 60;
            const myFunc = funcs.isInRange(n);
            assert.equal(myFunc, false);
        });
        it("should return false if number is less than than 20", () => {
            const n = 10;
            const myFunc = funcs.isInRange(n);
            assert.equal(myFunc, false);
        });
    });

    describe("`isInteger`", () => {
        it("should be a function", () => {
            const isInteger = funcs.isInteger;
            assert.typeOf(isInteger, "function");
        });
        it(" should return true if num is an integer", () => {
            const n = 3;
            const myFunc = funcs.isInteger(n);
            assert.equal(myFunc, true);
        });
        it(" should return false if num is not an integer", () => {
            const n = 3.3;
            const myFunc = funcs.isInteger(n);
            assert.equal(myFunc, false);
        });
    });

    describe("`fizzBuzz`", () => {
        it("should be a function", () => {
            const fizzBuzz = funcs.fizzBuzz;
            assert.typeOf(fizzBuzz, "function");
        });
        it("should return fizzbuss if number divisible by 5 and 3", () => {
            const n = 15;
            const myFunc = funcs.fizzBuzz(n);
            assert.equal(myFunc, "fizzbuzz");
        });
        it("should return buzz if number divisible by 5", () => {
            const n = 20;
            const myFunc = funcs.fizzBuzz(n);
            assert.equal(myFunc, "buzz");
        });
        it("should return fizz if number divisible by 3", () => {
            const n = 21;
            const myFunc = funcs.fizzBuzz(n);
            assert.equal(myFunc, "fizz");
        });
        it("should return number if remainder ", () => {
            const n = 22;
            const myFunc = funcs.fizzBuzz(n);
            assert.equal(myFunc, n);
        });
    });

    describe("`isPrime`", () => {
        it("should be a function", () => {
            const isPrime = funcs.isPrime;
            assert.typeOf(isPrime, "function");
        });
        it("should return true if number is prime", () => {
            const n = 5;
            const myFunc = funcs.isPrime(n);
            assert.equal(myFunc, true);
        });
        it("should return false if number is 0", () => {
            const n = 0;
            const myFunc = funcs.isPrime(n);
            assert.equal(myFunc, false);
        });
        it("should return false if number is 1", () => {
            const n = 1;
            const myFunc = funcs.isPrime(n);
            assert.equal(myFunc, false);
        });
        it("should return false if number is divisible by other numbers", () => {
            const n = 10;
            const myFunc = funcs.isPrime(n);
            assert.equal(myFunc, false);
        });
    });

    describe("`returnFirst`", () => {
        it("should be a function", () => {
            const returnFirst = funcs.returnFirst;
            assert.typeOf(returnFirst, "function");
        });
        it("should return fist index of the array", () => {
            const arr = [1, 2, 3];
            const myFunc = funcs.returnFirst(arr);
            assert.equal(myFunc, 1);
        });
    });

    describe("`returnLast`", () => {
        it("should be a function", () => {
            const returnLast = funcs.returnLast;
            assert.typeOf(returnLast, "function");
        });
        it("should return last index of the array", () => {
            const arr = [1, 2, 3];
            const myFunc = funcs.returnLast(arr);
            assert.equal(myFunc, 3);
        });
    });

    describe("`getArrayLength`", () => {
        it("should be a function", () => {
            const getArrayLength = funcs.getArrayLength;
            assert.typeOf(getArrayLength, "function");
        });
        it("should return length of the array", () => {
            const arr = [1, 2, 3];
            const myFunc = funcs.getArrayLength(arr);
            assert.equal(myFunc, 3);
        });
    });

    describe("`incrementByOne`", () => {
        it("should be a function", () => {
            const incrementByOne = funcs.incrementByOne;
            assert.typeOf(incrementByOne, "function");
        });
        it("should return an array that has been incremented by 1", () => {
            const arr = [1, 2, 3];
            const incArr = [2, 3, 4];
            const myFunc = funcs.incrementByOne(arr);
            assert.deepEqual(myFunc, incArr);
        });
    });

    describe("`addItemToArray`", () => {
        it("should be a function", () => {
            const addItemToArray = funcs.addItemToArray;
            assert.typeOf(addItemToArray, "function");
        });
        it("should return an array that has added item to end", () => {
            const arr = [1, 2, 3];
            const item = 4;
            const myFunc = funcs.addItemToArray(arr, item);
            assert.deepEqual(myFunc, [1, 2, 3, 4]);
        });
    });

    describe("`addItemToFront`", () => {
        it("should be a function", () => {
            const addItemToFront = funcs.addItemToFront;
            assert.typeOf(addItemToFront, "function");
        });
        it("should return an array that has added item to the front", () => {
            const arr = [1, 2, 3];
            const item = 0;
            const myFunc = funcs.addItemToFront(arr, item);
            assert.deepEqual(myFunc, [0, 1, 2, 3]);
        });
    });

    describe("`wordsToSentence`", () => {
        it("should be a function", () => {
            const wordsToSentence = funcs.wordsToSentence;
            assert.typeOf(wordsToSentence, "function");
        });
        it("should return new sentence from array of words", () => {
            const ns = ["Hi", "John"];
            const myFunc = funcs.wordsToSentence(ns);
            assert.equal(myFunc, "Hi John");
        });
    });

    describe("`contains`", () => {
        it("should be a function", () => {
            const contains = funcs.contains;
            assert.typeOf(contains, "function");
        });
        it("should return true if item is in array", () => {
            const arr = [1, 2, 3];
            const i = 1;
            const myFunc = funcs.contains(arr, i);
            assert.equal(myFunc, true);
        });
        it("should return false if item is not in the array", () => {
            const arr = [1, 2, 3];
            const i = 4;
            const myFunc = funcs.contains(arr, i);
            assert.equal(myFunc, false);
        });
    });

    describe("`addNumbers`", () => {
        it("should be a function", () => {
            const addNumbers = funcs.addNumbers;
            assert.typeOf(addNumbers, "function");
        });
    });

    describe("`averageTestScore`", () => {
        it("should be a function", () => {
            const averageTestScore = funcs.averageTestScore;
            assert.typeOf(averageTestScore, "function");
        });
    });

    describe("`largestNumber`", () => {
        it("should be a function", () => {
            const largestNumber = funcs.largestNumber;
            assert.typeOf(largestNumber, "function");
        });
    });
});
