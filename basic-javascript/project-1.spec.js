const {
    multiplyByTen,
    subtractFive,
    areSameLength,
    areEqual,
    lessThanNinety,
    greaterThanFifty,
    add,
    subtract,
    divide,
    multiply,
    getRemainder,
    isEven,
    isOdd,
    square,
    cube,
    raiseToPower,
    roundNumber,
    roundUp,
    addExclamationPoint,
    combineNames,
    getGreeting,
    getRectangleArea,
    getTriangleArea,
    getCircleArea,
    getRectangularPrismVolume } = require('./project-1');

// start testing!


test('jest working', () => {

})

//number based functions
const returnsNumber = func => {
    let result = func(3)
    result ? result : result = func(2, 6)
    result ? result : result = func(1, 2, 5)
    expect(typeof result === 'number').toBeTruthy()
}

const nums = [multiplyByTen, subtractFive, square, cube, roundNumber, roundUp, getCircleArea, add, subtract, divide, multiply, getRemainder, raiseToPower, getRectangleArea, getTriangleArea, getRectangularPrismVolume]
nums.forEach(func => test('returns a number', () => returnsNumber(func)))


//string based functions
const returnsString = func => {
    let result = func('test')
    result.includes('undefined') ? result = func('infinite', 'jest') : result
    expect(typeof result === 'string').toBeTruthy()
}

const strs = [addExclamationPoint, combineNames, getGreeting]
strs.forEach(func => test('returns a string', () => returnsString(func)))

//boolean string based functions
const returnsBooleanStr = func => {
    let result = func('jest', 'jest')
    expect(typeof result === 'boolean').toBeTruthy()
}

const boolStr = [areSameLength, areEqual]
boolStr.forEach(func => test('returns a boolean', () => returnsBooleanStr(func)))

//boolean number based functions
const returnsBooleanNum = func => {
    let result = func(2)
    expect(typeof result === 'boolean').toBeTruthy()
}

const boolNum = [lessThanNinety, greaterThanFifty, isEven, isOdd]
boolNum.forEach(func => test('returns a boolean', () => returnsBooleanNum(func)))

//check actual vs expected outcomes.
const validateResults = expected => {
    let actual = []
    const nums = [multiplyByTen, subtractFive, square, cube, roundNumber, roundUp, getCircleArea, add, subtract, divide, multiply, getRemainder, raiseToPower, getRectangleArea, getTriangleArea, getRectangularPrismVolume]
    const strs = [addExclamationPoint, combineNames, getGreeting]
    const boolStr = [areSameLength, areEqual]
    const boolNum = [lessThanNinety, greaterThanFifty, isEven, isOdd]
    nums.forEach(func => {
        let result = func(5)
        result ? result : result = func(5, 2)
        result ? result : result = func(1, 2, 3)
        actual.push(result)
    })
    strs.forEach(func => {
        let result = func('test')
        result.includes('undefined') ? result = func('infinite', 'jest') : result
        actual.push(result)
    })
    boolStr.forEach(func => {
        let result = func('jest', 'jest')
        actual.push(result)
    })
    boolNum.forEach(func => {
        let result = func(2)
        actual.push(result)
    })

    expect(actual).toEqual(expected)
}

let expected = [50, -4, 25, 125, 5, 5, 78.53981633974483, 7, 3, 2.5, 10, 1, 25, 10, 5, 6, 'test!', 'infinite jest', 'Hello test!', true, true, true, false, true, false]
test('validate results', () => validateResults(expected))