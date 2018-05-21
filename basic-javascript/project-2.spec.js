const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test("Expected 'boooom' to be bigger than 'alt' ", () => {
    expect(funcs.getBiggest('alt', 'boooom')).toBe("boooom")
})

test("Expected 'Hola!' ", () => {
    expect(funcs.greeting('Spanish')).toBe("Hola!")
})

test("Expected is TenorFive(283) to be false ", () => {
    expect(funcs.isTenOrFive(283)).toBe(false)
})

test("Expected 49 to be in range of 20 and 50", () => {
    expect(funcs.isInRange(49)).toBe(true)
})

test("Expected 'not an integer' to be false", () => {
    expect(funcs.isInteger('not an integer')).toBe(false)
})

test("Expected 300 to result in fizzbuzz ", () => {
    expect(funcs.fizzBuzz(300)).toBe("fizzbuzz")
})

test("Expected 113 to be prime", () => {
    expect(funcs.isPrime(113)).toBe(true)
})

test("Expected first to be 'first' ", () => {
    expect(funcs.returnFirst(['first', 'second', 'third'])).toBe("first")
})

test("Expected array length to be 3", () => {
    expect(funcs.getArrayLength(['first', 'second', 'third'])).toBe(3)
})

test("Expected array items to increment by one", () => {
    expect(funcs.incrementByOne([4, 10, 352])).toEqual([5, 11, 353])
})

test("Expected item to be added to array ", () => {
    expect(funcs.addItemToArray(['first', 'second', 'third'], 3)).toEqual(['first', 'second', 'third', 3])
})

test("Expected itme to be 1st in array ", () => {
    expect(funcs.addItemToFront(['first', 'second', 'third'], 3)).toEqual([3, 'first', 'second', 'third'])
})

test("Expected word to be seperated, blaaah to be b l a a a h ", () => {
    expect(funcs.wordsToSentence("blaaah")).toBe("b l a a a h")
})

test("Expected contains to be false ", () => {
    expect(funcs.contains(['first', 'second', 'third'], "fourth")).toBe(false)
})

test("Expected addNumbers 5,4,3 to be 12 ", () => {
    expect(funcs.addNumbers([5, 4, 3])).toBe(12)
})

test("Expected averageTestScore of [50,100,70] to be 73.333333333", () => {
    expect(funcs.averageTestScore([50, 100, 70])).toBeCloseTo(73.33)
})

test("Expected largestNumber to be 4596 ", () => {
    expect(funcs.largestNumber([2894, 4596, 3])).toBe(4596)
})