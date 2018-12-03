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
    getRectangularPrismVolume,
} = require('./project-1');

// start testing!
describe('Project 1', () => {
    describe('1-5', () => {
        test('multiplyByTen', () => {
            const input = 5;
            const expected = 50;
            const actual = multiplyByTen(input)
            expect(actual).toBe(expected)
        })
    });

    // describe('6-10', () => {
    
    // });

    // describe('11-16', () => {
    
    // });

    // describe('16-20', () => {
    
    // });

    // describe('21-5', () => {
    
    // });
});