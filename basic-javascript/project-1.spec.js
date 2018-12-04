const helpers = require('./project-1');


// start testing!
test('Jest runs', () => {

});

test('multiply by ten', () => {
    const input = 10;
    const expected = 100;
    expect(helpers.multiplyByTen(input)).toEqual(expected);
})

test('subtract 5', () => {
    const input = 25;
    const expected = 20;
    expect(helpers.subtractFive(input)).toEqual(expected);
})

test('same length string', () => {
    const input1 = 'mary';
    const input2 = 'lary';
    expect(helpers.areSameLength(input1,input2)).toBeTruthy();
})

test('x & y are equal', () => {
    const input1 = 4;
    const input2 = 4;
    expect(helpers.areEqual(input1,input2)).toBeTruthy();
})

test('number is less than 90', () => {
    const input = 40;
    
    expect(helpers.lessThanNinety(input)).toBeTruthy();
})


test('number is greater than 50', () => {
    const input = 60;
    
    expect(helpers.greaterThanFifty(input)).toBeTruthy();
})

test('adding successful', () => {
    const input1 = 6;
    const input2 = 4;
    const expected = 10; 
    
    expect(helpers.add(input1,input2)).toEqual(expected);
})

test('subtracting successful', () => {
    const input1 = 6;
    const input2 = 4;
    const expected = 2; 
    
    expect(helpers.subtract(input1,input2)).toEqual(expected);
})

test('dividing successful', () => {
    const input1 = 6;
    const input2 = 3;
    const expected = 2; 
    
    expect(helpers.divide(input1,input2)).toEqual(expected);
})

test('multiplying successful', () => {
    const input1 = 6;
    const input2 = 2;
    const expected = 12; 
    
    expect(helpers.multiply(input1,input2)).toEqual(expected);
})

test('get the remainder', () => {
    const input1 = 10;
    const input2 = 4;
    const expected = 2; 
    
    expect(helpers.getRemainder(input1,input2)).toEqual(expected);
})

test('is even', () => {
    const input1 = 10;
    
    expect(helpers.isEven(input1)).toBeTruthy();
})

test('is odd', () => {
    const input1 = 11;
    
    expect(helpers.isOdd(input1)).toBeTruthy();
})

test('number squared', () => {
    const input1 = 10;
    const expected = 100;
    
    expect(helpers.square(input1)).toEqual(expected);
})

test('number cubed', () => {
    const input1 = 2;
    const expected = 8;
    
    expect(helpers.cube(input1)).toEqual(expected);
})

test('number raised to power of second number', () => {
    const input1 = 10;
    const input2 = 3;
    const expected = 1000;
    
    expect(helpers.raiseToPower(input1,input2)).toEqual(expected);
})

test('rounded number', () => {
    const input1 = 10.1;
    const expected = 10;
    
    expect(helpers.roundNumber(input1)).toEqual(expected);
})

test('round number up', () => {
    const input1 = 10.1;
    const expected = 11;
    
    expect(helpers.roundUp(input1)).toEqual(expected);
})

test('add exclamation point to string', () => {
    const string = 'wow';
    const expected = 'wow!'; 
    
    expect(helpers.addExclamationPoint(string)).toBe(expected);
})

test('add names together', () => {
    const string1 = 'wow';
    const string2 = 'mom';
    const expected = 'wow mom'; 
    
    expect(helpers.combineNames(string1,string2)).toBe(expected);
})

test('get a greeting with name', () => {
    const name = 'Savannah';
    const expected = 'Hello Savannah!'; 
    
    expect(helpers.getGreeting(name)).toBe(expected);
})

test('get area of rectangle', () => {
    const length = 8;
    const width = 2;
    const expected = 16; 
    
    expect(helpers.getRectangleArea(length,width)).toEqual(expected);
})

test('get area of triangle', () => {
    const base = 10;
    const height = 10;
    const expected = 50; 
    
    expect(helpers.getTriangleArea(base,height)).toEqual(expected);
})

test('get area of circle', () => {
    const radius = 10;
    const expected = 314.1592653589793; 
    
    expect(helpers.getCircleArea(radius)).toEqual(expected);
})

test('get volume of rectangular prism', () => {
    const width = 10; 
    const height = 10; 
    const length = 10;
    const expected = 1000; 
    
    expect(helpers.getRectangularPrismVolume(width, height, length)).toEqual(expected);
})


