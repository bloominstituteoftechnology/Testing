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
    getRectangularPrismVolume
    } = require('./project-1');

// start testing!

describe('Jest',() => {
    test('Jest is Running',()=>{

    })
});

describe('multiply by ten',() => {
    test('multiplys correctly',()=>{
        const input = 5;
        const expected = 50;
        const result = multiplyByTen(input);
        expect(result === expected)
    })
})

describe('Subtract Five',() => {
    test('minus five', () => {
        const input = 5;
        const expected = 0;
        const result = subtractFive(input);
        expect(expected === result)
    })
})

describe('Strings are the Same Length', () => {
    test('same length',() => {
        const i1 = i2 = "same length?";
        const result = areSameLength(i1,i2);
        expect(result === true)
    })
})

