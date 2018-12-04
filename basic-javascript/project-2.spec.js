const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest',()=>{
    test("should return biggest number", () => {
        const actual = funcs.getBiggest(10, 9);
        expect(actual).toBe(10);
    }); 
});

describe('greeting',()=>{
    test("should return correct greeting", () => {
        const actual = funcs.greeting("German");
        expect(actual).toBe("Guten Tag!");
    });
});

describe('isTenOrFive',()=>{
    test("should return number is 10 or 5", () => {
        const actual = funcs.isTenOrFive(10);
        expect(actual).toBe(true);
    });
});

describe('isInRange',()=>{
    test("should return if number is in range between 20 and 50", () => {
        const actual = funcs.isInRange(21);
        expect(actual).toBe(true);
    });
})

describe('isInteger',()=>{
    test("should check if it integer", () => {
        const actual = funcs.isInteger(22);
        expect(actual).toBe(true);
    });
})

describe('fizzBuzz',()=>{
    test("should return fizz if divides by 3, buzz if by 5, fizzbuzz if both", () => {
        const fizz = funcs.fizzBuzz(3);
        const buzz = funcs.fizzBuzz(5);
        const fizzBuzz = funcs.fizzBuzz(15);
        expect(fizz).toEqual("fizz");
        expect(buzz).toEqual("buzz");
        expect(fizzBuzz).toEqual("fizzbuzz");
      });
})

describe('isPrime',()=>{
    test("should return true if prime number", () => {
        const actual = funcs.isPrime(7);
        expect(actual).toBe(true);
    });
})

describe('returnFirst',()=>{
    test("should return first item in an array", () => {
        const first = funcs.returnFirst([1, 2, 3]);
        expect(first).toEqual(1);
    });
})

describe('returnLast',()=>{
    test("should return last item in an array", () => {
        const last = funcs.returnLast([1, 2, 3]);
        expect(last).toEqual(3);
    });
})

describe('getArrayLength',()=>{
    test("should return length of an array", () => {
        const length = funcs.getArrayLength([1, 2, 3]);
        expect(length).toEqual(3);
    });
})

describe('incrementByOne',()=>{
    test("should increment each value by 1", () => {
        const result = funcs.incrementByOne([0, 10, 50]);
        expect(result).toEqual([1, 11, 51]);
      });
})

describe('addItemToArray',()=>{
    test("should add an item to the end of array", () => {
        const arr = funcs.addItemToArray([1, 2], 3);
        expect(arr).toEqual([1, 2, 3]);
      });
})

describe('addItemToFront',()=>{
    test("should add item to the front of array", () => {
        const arr = funcs.addItemToFront([2, 3], 1);
        expect(arr).toEqual([1, 2, 3]);
      });
})

describe('wordToSentence',()=>{
    test("should combine words in an array", () => {
        const sentence = funcs.wordsToSentence([
            "hello",
            "world",
            "I",
            "am",
            "alive"
        ]);
        expect(sentence).toEqual("hello world I am alive");
    });
})

describe('contains',()=>{
    test("checks if array contains an item", () => {
        const arr = [1, 2, 3];
        const item = 3;
        const result = funcs.contains(arr, item);
        expect(result).toBe(true);
      });
})

describe('addNumbers',()=>{
    test("adds numbers in an array", () => {
        const numbers = [1, 2, 3];
        const result = funcs.addNumbers(numbers);
        expect(result).toBe(6);
      });
})

describe('averageTestScore',()=>{
    test("averages the scores in an array", () => {
        const scores = [100, 90, 80, 70, 60];
        const average = funcs.averageTestScore(scores);
        expect(average).toBe((100 + 90 + 80 + 70 + 60) / scores.length);
      });
})

describe('largestNumber',()=>{
    test("returns the largest number in an array", () => {
        const numbers = [1, 2, 3, 0, 100, 99];
        const largestNumber = funcs.largestNumber(numbers);
        expect(largestNumber).toBe(100);
      });
})