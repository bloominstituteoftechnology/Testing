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

test('jest working', () => {

})

const returnsNumber = func => {
    let result = func(5)
    result ? result : result = func(5, 2)
    result ? result : result = func(1, 2, 3)
    expect(typeof result === 'number').toBeTruthy()
}

const returnsString = func => {
    let result = func('test')
    result.includes('undefined') ? result = func('infinite', 'jest') : result
    expect(typeof result === 'string').toBeTruthy()
}

const returnsBooleanStr = func => {
    let result = func('jest', 'jest')
    expect(typeof result === 'boolean').toBeTruthy()
}
 
const returnsBooleanNum = func => {
    let result = func(2)
    expect(typeof result === 'boolean').toBeTruthy()
}

const nums = [multiplyByTen, subtractFive, square, cube, roundNumber, roundUp, getCircleArea, add, subtract, divide, multiply, getRemainder, raiseToPower, getRectangleArea, getTriangleArea, getRectangularPrismVolume]
nums.forEach(func => test('returns a number', () => returnsNumber(func)))

const strs = [addExclamationPoint, combineNames, getGreeting]
strs.forEach(func => test('returns a string', () => returnsString(func)))

const boolStr = [areSameLength, areEqual]
boolStr.forEach(func => test('returns a boolean', () => returnsBooleanStr(func)))

const boolNum = [lessThanNinety, greaterThanFifty, isEven, isOdd]
boolNum.forEach(func => test('returns a boolean', () => returnsBooleanNum(func)))

// arrange: setup the world
// act: execute the code
// assert: test the expectations

// 1. pre-test; summarize function purpose
// 2. pre-test; write function signature (params, return)
// 3. get red; write test, let it fail
// 4. get green; fix function, let it pass
// 5. refactor