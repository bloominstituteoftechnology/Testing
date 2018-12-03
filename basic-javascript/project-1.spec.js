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