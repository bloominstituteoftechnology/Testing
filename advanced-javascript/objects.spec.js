const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
    it('should be an array contains keys of the given object', () => {
        const obj = { 1: "one", 2: "two", 3: "three" }
        expect(objectFunctions.keys(obj)).toEqual(["1", "2", "3"])

    });
});

describe('Objects', () => {
    it('should be an array contains values of the given object', () => {
        const obj = { 1: "one", 2: "two", 3: "three" }

        function cb(value) {
            return value + '!'
        }
        expect(objectFunctions.mapObject(obj, cb)).toEqual({ 1: "one!", 2: "two!", 3: "three!" })

    });
});

describe('Objects', () => {
    it('should be an array contains pairs of keys and values', () => {
        const obj = { 1: "one", 2: "two", 3: "three" }
        expect(objectFunctions.pairs(obj)).toEqual([
            ["1", "one"],
            ["2", "two"],
            ["3", "three"]
        ])

    });
});

describe('Objects - Invert', () => {
    it('should be an invert object', () => {
        const obj = { 1: "one", 2: "two", 3: "three" }
        expect(objectFunctions.invert(obj)).toEqual({ "one": "1", "two": "2", "three": "3" })

    });
});

describe('Objects - Defaults', () => {
    it('should be a default array', () => {
        const obj = { "1": "one", "2": "two", "3": "three" }
        const res = { "1": "hello", "4": "four" }
        expect(objectFunctions.defaults(obj, res)).toEqual({ 1: "one", 2: "two", 3: "three", 4: "four" })

    });
});
