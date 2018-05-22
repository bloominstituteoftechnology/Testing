const funcs = require('./project-1');

// write your tests here
test('Multiples 5 * 10 expecting 50',() => {
    expect(funcs.multiplyByTen(5)).toBe(50);
}) 

test('Subtracts 5 from 15, expecting 10',() => {
    expect(funcs.subtractFive(15)).toBe(10);
}) 

test('str1 + strg2 expects same length',() => {
    expect(funcs.areSameLength("string", "string")).toBe(true);
}) 

test('Expects 10 to equal 10',() => {
    expect(funcs.areEqual(10, 10)).toBe(true);
})

test('Expects 80 to be less than 90',() => {
    expect(funcs.lessThanNinety(80)).toBe(true);
})

test('Expects 40 to be less than 50',() => {
    expect(funcs.greaterThanFifty(40)).toBe(false);
})

test('Expects 5 + 10 to equal 15',() => {
    expect(funcs.add(5, 10)).toBe(15);
})

test('Expects 5 - 10 to equal -5',() => {
    expect(funcs.subtract(5, 10)).toBe(-5);
})

test('Expects 100 divided by 5 to equal 20',() => {
    expect(funcs.divide(100, 5)).toBe(20);
})

test('Expects 100 multiplied by 5 to equal 500',() => {
    expect(funcs.multiply(100, 5)).toBe(500);
})

test('Expects remainder of 19/9 to be 1',() => {
    expect(funcs.getRemainder(19, 9)).toBe(1);
})

test('Expects 888 to be true',() => {
    expect(funcs.isEven(888)).toBe(true);
})

test('Expects 9998  to be false',() => {
    expect(funcs.isOdd(9998)).toBe(false);
})

test('Expects 5 squared to equal 25',() => {
    expect(funcs.square(5)).toBe(25);
})

test('Expects 5 cubed to equal 125',() => {
    expect(funcs.cube(5)).toBe(125);
})

test('Expected 4 to the third power to equal 64',() => {
    expect(funcs.raiseToPower(4, 3)).toBe(64);
})

test('Expected 15.39996544 to round to 15',() => {
    expect(funcs.roundNumber(15.39996544 )).toBe(15);
})

test('Expected 16.39996544 to round to 17',() => {
    expect(funcs.roundUp(16.39996544 )).toBe(17);
})

test('Expected "Hello World" to concat to "Hello World!" ',() => {
    expect(funcs.addExclamationPoint("Hello World")).toBe("Hello World!");
})

test('Expected "Don" and "Utley" to become "Don Utley"',() => {
    expect(funcs.combineNames("Don", "Utley")).toBe("Don Utley");
})

test('Expected "Hello Cristian" ',() => {
    expect(funcs.getGreeting("Cristian")).toBe("Hello Cristian!")
})

test('Expected 5 width and 4 length to equal 20',() => {
    expect(funcs.getRectangleArea(5, 4)).toBe(20);
})

test('Expected circleArea of 5 to equal 78.54',() => {
    expect(funcs.getCircleArea(5)).toBeCloseTo(78.54);
})

test('Expected 5 width, 5 length, 5 height to equal 125',() => {
    expect(funcs.getRectangularPrismVolume(5, 5, 5)).toBe(125);
})