const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const testArr = [
    "getBiggest",
    "greeting",
    "isTenOrFive",
    "isInRange",
    "isInteger",
    "fizzBuzz",
    "isPrime",
    "returnFirst",
    "returnLast",
    "getArrayLength",
    "incrementByOne",
    "addItemToArray",
    "addItemToFront",
    "wordsToSentence",
    "contains",
    "addNumbers",
    "averageTestScore",
    "largestNumber"
]

// My Helper functions and how they work.
// (callback, expected_result, callback_arguments...)
const moduleCheck = (cbFunc, result) => {
    it(`${cbFunc} should be a ${result}`, () => {
        assert.typeOf(funcs[cbFunc], result);
    });
}
const returnType = (cbFunc, ...args) => {
    let slicedArgs = Array.prototype.slice.call(args, 1);
    it(`${cbFunc} should return a ${args[0]}`, () => {
        assert.typeOf(funcs[cbFunc](...slicedArgs), args[0]);
    });
};

const returnCustom = (cbFunc, ...args) => {
    let slicedArgs = Array.prototype.slice.call(args, 1);
    it(`${cbFunc} should work`, () => {
        const execFunc = funcs[cbFunc];
        if (args[0].length > 1 && typeof args[0] !== 'string') { // arrays = arrays check
            let funcResult = execFunc(...slicedArgs);
            let check = args[0];
            check.forEach((item, index) => {
                assert.strictEqual(item, funcResult[index]);
            });
        } else { // everything else check
            assert.strictEqual(execFunc(...slicedArgs), args[0]);
        }
    });
}

describe('Project-2 Functions Check Each', () => {
    testArr.forEach(item => {
        let testFunc = item
        moduleCheck(testFunc, 'function'); // Check functions
        switch (item) {
            case "getBiggest":
                returnType(testFunc, 'number', 2, 5);
                returnCustom(testFunc, 5, 2, 5);
                break;
            case "greeting":
                returnType(testFunc, 'string');
                returnCustom(testFunc, 'Hello!');
                break;
            case "isTenOrFive":
                returnType(testFunc, 'boolean', 10);
                returnCustom(testFunc, true, 5);
                break;
            case "isInRange":
                returnType(testFunc, 'boolean', 10);
                returnCustom(testFunc, true, 21);
                break;
            case "isInteger":
                returnType(testFunc, 'boolean', 10);
                returnCustom(testFunc, true, 10);
                break;
            case "fizzBuzz":
                returnType(testFunc, 'string', 10);
                returnCustom(testFunc, 'fizzbuzz', 15);
                break;
            case "isPrime":
                returnType(testFunc, 'boolean', 10);
                returnCustom(testFunc, true, 13);
                break;
            case "returnFirst":
                returnType(testFunc, 'number', [1, 2, 3]);
                returnCustom(testFunc, 1, [1, 2, 3]);
                break;
            case "returnLast":
                returnType(testFunc, 'number', [1, 2, 3]);
                returnCustom(testFunc, 3, [1, 2, 3]);
                break;
            case "getArrayLength":
                returnType(testFunc, 'number', [1, 2, 3]);
                returnCustom(testFunc, 3, [1, 2, 3]);
                break;
            case "incrementByOne":
                returnType(testFunc, 'array', [1, 2, 3]);
                returnCustom(testFunc, [2, 3, 4], [1, 2, 3]);
                break;
            case "addItemToArray":
                returnType(testFunc, 'array', [1, 2, 3], 4);
                returnCustom(testFunc, [1, 2, 3, 4], [1, 2, 3], 4);
                break;
            case "addItemToFront":
                returnType(testFunc, 'array', [1, 2, 3], 4);
                returnCustom(testFunc, [4, 1, 2, 3], [1, 2, 3], 4);
                break;
            case "wordsToSentence":
                returnType(testFunc, 'string', [1, 2, 3]);
                returnCustom(testFunc, '1 2 3', [1, 2, 3]);
                break;
            case "contains":
                returnType(testFunc, 'boolean', [1, 2, 3], 1);
                returnCustom(testFunc, true, [1, 2, 3], 1);
                break;
            case "addNumbers":
                returnType(testFunc, 'number', [1, 2, 3]);
                returnCustom(testFunc, 6, [1, 2, 3]);
                break;
            case "averageTestScore":
                returnType(testFunc, 'number', [10, 9, 8]);
                returnCustom(testFunc, 9, [10, 9, 8]);
                break;
            case "largestNumber":
                returnType(testFunc, 'number', [10, 9, 8]);
                returnCustom(testFunc, 10, [10, 9, 8]);
                break;
            default:
                return;
        }
    })
});
