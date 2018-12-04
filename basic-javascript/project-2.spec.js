const {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
    } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Get Biggest',() => {
    test('Correct Output',()=>{
        const input = 2;
        const input2 = 3;
        const expected = 3;
        const result = getBiggest(input,input2);
        expect(result).toBe(expected);
    })
    test('Same number',()=>{
        const input = 2;
        const expected = 2;
        const result = getBiggest(input,input);
        expect(result).toBe(expected)
    })
    it('should return null', () => {
        expect(getBiggest('1', "hello")).toBe(null);
        expect(getBiggest([], 'a')).toBe(null);
        expect(getBiggest('1', {})).toBe(null);
    });
})

describe('Greeting By Language',()=>{
    test('Is string',()=>{
        const input = 'default';
        const result = greeting(input);
        expect(typeof result === 'string').toBeTruthy();
    })
    test('German',()=>{
        const input = "German";
        const expected = 'Guten Tag!';
        const result = greeting(input);
        expect(result).toBe(expected);
    })
    test('Spanish',()=>{
        const input = "Spanish";
        const expected = 'Hola!';
        const result = greeting(input);
        expect(result).toBe(expected);
    })
    test('Default',()=>{
        const input = "something";
        const expected = 'Hello!';
        const result = greeting(input);
        expect(result).toBe(expected);
    })
})

describe('Is 10 or 5',()=>{
    test('Is Ten',()=>{
        result = isTenOrFive(10)
        expect(result).toBe(true);
    })
    test('Is Five',()=>{
        result = isTenOrFive(5)
        expect(result).toBe(true);
    })
    test('Niether',()=>{
        result = isTenOrFive(3)
        expect(result).toBe(false);
    })
})

describe('Is in Range',() => {
    test('In Range',()=>{
        const input = 40;
        const expected = true;
        const result = isInRange(input);
        expect(result).toBe(expected);
    })
    test('Out of Range',()=>{
        const input = 60;
        const expected = false;
        const result = isInRange(input);
        expect(result).toBe(expected);
    })
})

describe('Is an Integer',() => {
    test('Not an Integer',() => {
        const input = 3.2;
        const expected = false;
        const result = isInteger(input);
        expect(result).toBe(expected);
    })
    test('Is an Integer',() => {
        const input = 3;
        const expected = true;
        const result = isInteger(input);
        expect(result).toBe(expected);
    })
})

describe('FizzBuzz',()=>{
    test('Fizz and Buzz',()=>{
        const input = 15;
        const expected = "fizzbuzz";
        const result = fizzBuzz(input);
        expect(result).toBe(expected)
    })
    test('Fizz',()=>{
        const input = 3;
        const expected = "fizz";
        const result = fizzBuzz(input);
        expect(result).toBe(expected)
    })
    test('Buzz',()=>{
        const input = 5;
        const expected = "buzz";
        const result = fizzBuzz(input);
        expect(result).toBe(expected)
    })
    test('Niether',()=>{
        const input = expected = 1;
        const result = fizzBuzz(input);
        expect(result).toBe(expected)
    })
})

describe('Is Prime',() => {
    test('Is Prime',() => {
        const input = 2;
        const expected = true;
        const result = isPrime(input);
        expect(result).toBe(expected);
    })
    test('Is Not Prime',() => {
        const input = 9;
        const expected = false;
        const result = isPrime(input);
        expect(result).toBe(expected);
    })
    test('Is Zero',() => {
        const input = 0;
        const expected = false;
        const result = isPrime(input);
        expect(result).toBe(expected);
    })
})

describe('Return First Item of Array',() => {
    test('basic array',()=>{
        const input = [1,2,3,4,5,10];
        const expected = 1;
        const result = returnFirst(input);
        expect(result).toEqual(expected);
    })
    test('array with nesting',()=>{
        const input = [{name:"Drew",Last:"johnson",moreNest:{something : "something"}},3,4,5,10];
        const expected = {name:"Drew",Last:"johnson",moreNest:{something:"something"}};
        const result = returnFirst(input);
        expect(result).toEqual(expected);
    })
})

describe('Return Last Item of Array',() => {
    test('basic array',()=>{
        const input = [1,2,3,4,5,10];
        const expected = 10;
        const result = returnLast(input);
        expect(result).toEqual(expected);
    })
    test('array with nesting',()=>{
        const input = [{name:"Drew",Last:"johnson",moreNest:{something : "something"}},3,4,5,10];
        const expected = 10;
        const result = returnLast(input);
        expect(result).toEqual(expected);
    })
})

describe('Get array length',()=>{
    test('Basic Array',() => {
        const input = ["hello","my","name","is","Drew"]
        const result = getArrayLength(input);
        expect(result).toEqual(5)
    })
    test('Nested Array',() => {
        const input = [
            arr = [
                1,2,3
            ],
            1,
            2,
            "hello"
        ]
        const expected = 4;
        const result = getArrayLength(input);
        expect(result).toEqual(expected)
    })
})

describe('Increment by One',()=>{
    const input = [0,1,2,3];
    test('Increment by 1',() => {
        const expected = [1,2,3,4];
        expect(incrementByOne(input)).toEqual(expected);
    })
    test('Returns Array',() => {
        const result = incrementByOne(input);
        expect(typeof result).toBe("object");//come back to this one
    })
})

describe('Add Item to Array',() => {
    const arr = [1,2,3]
    test('Adds Item',() => {
        const addedItem = 100;
        const result = addItemToArray(arr,addedItem);
        expect(result).toEqual([1,2,3,100])
    })
})

describe('Add Item to the Front',()=>{
    const arr = [1,2,3]
    test('Adds Item to the front',() => {
        const added = 0;
        const expected = [added,...arr]
        const result = addItemToFront(arr,added)
        expect(result).toEqual(expected)
    })
})

describe('Words to Sentence', () => {
    const words = ["hello","world","!"]
    test("Function works", () => {
        expect(wordsToSentence(words)).toBe("hello world !")
    })
})


describe('Contains Function', () => {
    const arr = [1,"hello","world",object = {name : "Drew"}]
    it("returns truthy to an object", ()=>{
        expect(contains(arr, object)).toBeTruthy
    })
    it("returns truthy to an string", ()=>{
        expect(contains(arr, "hello")).toBeTruthy
    })
    it("returns truthy to an number", ()=>{
        expect(contains(arr, 1)).toBeTruthy
    })
    it("returns false if it doesn't contain item", ()=>{
        expect(contains(arr, "NOT PRESENT")).toBeFalsy;
    })
})

describe('Add Numbers', () => {
    const nums = [1,2,3,4,-5];
    const trickyBoi = [1,2,"3",7]
    it('Adds integers', () => {
        expect(addNumbers(nums)).toBe(5)
    })
    it('returns null if something other than a number is passed', () => {
        expect(addNumbers(trickyBoi)).toBeNull;
    })
})

describe('Average Test Score', () => {
    const scores = [100,95,80,100]
    it('Return correct Average', () => {
        expect(averageTestScore(scores)).toBe(93.75)
    })
})

describe('Largest Number', () => {
    const nums = [1,77,32,55,123,-4]
    it('Returns Largest Number', () => {
        expect(largestNumber(nums)).toBe(nums[4])
    })
    it('returns largest of negatives', () => {
        const negatives = [-1,-55,-3];
        expect(largestNumber(negatives)).toBe(-1)
    })
})
