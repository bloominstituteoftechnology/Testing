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



/*
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
    result.includes('undefined') ? result = func('test1', 'test2') : result
    expect(typeof result === 'string').toBeTruthy()
}

const strs = [addExclamationPoint, combineNames, getGreeting]
strs.forEach(func => test('returns a string', () => returnsString(func)))

//boolean string based functions
const returnsBooleanStr = func => {
    let result = func('blah', 'dah')
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


*/


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
        result.includes('undefined') ? result = func('test1', 'test2') : result
        actual.push(result)
    })
    boolStr.forEach(func => {
        let result = func('xxxtttfffeee', 'xxxtttfffeee')
        actual.push(result)
    })
    boolNum.forEach(func => {
        let result = func(2)
        actual.push(result)
    })

    expect(actual).toEqual(expected)
}

let expected = [50, -4, 25, 125, 5, 5, 78.53981633974483, 7, 3, 2.5, 10, 1, 25, 10, 5, 6, 'test!', 'test1 test2', 'Hello test!', true, true, true, false, true, false]
test('validate results', () => validateResults(expected))





//Not sure if the above was true "unit" testing, so redoing this a different way


/*
const helpers = require("./project-1");

describe("multipliesByTen", () => {
    test("multiplies properly", () => {
        const answer = helpers.multiplyByTen(2, 10);
        expect(answer).toBe(20);
    });
});
describe("subtractFive", () => {
    test("subtracts by five", () => {
        const answer = helpers.subtractFive(10);
        expect(answer).toBe(5);
    });
});
describe("areSameLength", () => {
    test("strings are same length", () => {
        const answer = helpers.areSameLength("asdf", "zcvv");
        expect(answer).toBe(true);
    });
    test("is a string", () => {
        expect(() => helpers.areSameLength("hello")).toThrow();
    });
});
describe("areEqual", () => {
    test("variables are equal", () => {
        const answer = helpers.areEqual(1, 1);
        expect(answer).toBe(true);
    });
});
describe("lessThanNinety", () => {
    test("is less than ninety", () => {
        const answer = helpers.lessThanNinety(80);
        expect(answer).toBe(true);
    });
});
describe("greaterThanFifty", () => {
    test("is greater than fifty", () => {
        const answer = helpers.greaterThanFifty(51);
        expect(answer).toBe(true);
    });
});
describe("add", () => {
    const nameOfTest = "adds two numbers";
    const callback = () => {
        const sum = helpers.add(25, 5);
        expect(sum).toBe(30);
    };
    test(nameOfTest, callback);
});
describe("subrtract", () => {
    const difference = helpers.subtract(10, 5);
    expect(difference).toBe(5);
});
describe("divide", () => {
    const dividen = helpers.divide(10, 5);
    expect(dividen).toBe(2);
});
describe("multiply", () => {
    const product = helpers.multiply(10, 5);
    expect(product).toBe(50);
});
describe("getRemainder", () => {
    const remainder = helpers.getRemainder(10, 3);
    expect(remainder).toEqual(1);
});
describe("isEven", () => {
    const even = helpers.isEven(68);
    expect(even).toBe(true);
});
describe("isOdd", () => {
    const odd = helpers.isOdd(69);
    expect(odd).toBe(true);
});
describe("square", () => {
    const square = helpers.square(12);
    expect(square).toEqual(144);
});
describe("cube", () => {
    const cube = helpers.cube(3);
    expect(cube).toEqual(27);
});
describe("raiseToPower", () => {
    const answer = helpers.raiseToPower(3, 3);
    expect(answer).toEqual(27);
});
describe("roundNumber", () => {
    const round = helpers.roundNumber(3.5);
    expect(round).toEqual(4);
});
describe("roundUp", () => {
    const roundUp = helpers.roundUp(3.3);
    expect(roundUp).toEqual(4);
});
describe("addExclamationPoint", () => {
    const resultString = helpers.addExclamationPoint("hello world");
    expect(resultString).toEqual("hello world!");
});
describe("combineNames", () => {
    const combinedNames = helpers.combineNames("Chance", "Halo");
    expect(combinedNames).toEqual("Chance Halo");
});
describe("getGreeting", () => {
    const greeting = helpers.getGreeting("Chance");
    expect(greeting).toEqual("Hello Chance!");
});
describe("getRectangeArea", () => {
    const area = helpers.getRectangleArea(2, 4);
    expect(area).toEqual(8);
});
describe("getTriangleArea", () => {
    const area = helpers.getTriangleArea(2, 4);
    expect(area).toEqual(4);
});
describe("getCircleArea", () => {
    const area = helpers.getCircleArea(2);
    expect(area).toEqual(4 * Math.PI);
});
describe("getRectangularPrismVolume", () => {
    const volume = helpers.getRectangularPrismVolume(2, 3, 4);
    expect(volume).toBe(24);
});

*/