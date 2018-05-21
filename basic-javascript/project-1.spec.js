const funcs = require('./project-1');

// write your tests here

// Test multiplyByTen
// test 5 * 10
test('multiplyByTen 5 * 10 to equal 50', ()=> {

    const product = funcs.multiplyByTen(5);
    expect(product).toBe(50);
});

// test -5 * 10
test('multiplyByTen -5 * 10 to equal 50', ()=> {

    const product = funcs.multiplyByTen(-5);
    expect(product).toBe(-50);
});

// test 0 * 10
test('multiplyByTen 0 * 10 to equal 50', ()=> {

    const product = funcs.multiplyByTen(0);
    expect(product).toBe(0);
});
/////////////////////////////////////////////////////////

// Test subtractFive
// test 10 - 5
test('subtractFive 10 - 5 = 5', ()=> {
    const number = funcs.subtractFive(10);
    expect(number).toBe(5);
});

// test -10 - 5
test('subtractFive -10 - 5 = 15', ()=> {
    const number = funcs.subtractFive(-10);
    expect(number).toBe(-15);
});

// test 0 - 5
test('subtractFive 0 - 5 = 15', ()=> {
    const number = funcs.subtractFive(0);
    expect(number).toBe(-5);
});
/////////////////////////////////////////////////////////

// Test areSameLength
// test if strings are the same
test('areSameLength: the and thy', ()=> {
    const str1Length = 'the';
    const str2Length = 'thy';
    const areSameLength = funcs.areSameLength(str1Length, str2Length);

    expect(areSameLength).toEqual(true);
});

// test if strings are not the same
test('areSameLength: the and to', ()=> {
    const str1Length = 'the';
    const str2Length = 'to';
    const areSameLength = funcs.areSameLength(str1Length, str2Length);

    expect(areSameLength).toEqual(false)
});
/////////////////////////////////////////////////////////

// Test areEqual
// test 4 === 4
test('areEqual 4 === 4', ()=> {

    const result = funcs.areEqual(4,4);
    expect(result).toEqual(true);
});

// test 4 === 4
test('areEqual 4 === "4" ', ()=> {

    const result = funcs.areEqual(4,'4');
    expect(result).toEqual(false);
});
/////////////////////////////////////////////////////////

// Test lessThanNinety
// test 50
test('lessThanNinety 50 < 90', ()=> {
    expect(funcs.lessThanNinety(50)).toEqual(true);
});

// test 90.01
test('lessThanNinety 50 < 90', ()=> {
    expect(funcs.lessThanNinety(90.01)).toEqual(false);
});
//////////////////////////////////////////////////////////

// Test greaterThanFifty
// test x < 50
test('greaterThanFifty 49.99 < 50', () => {
    const result = funcs.greaterThanFifty(49.99)
    expect(result).toEqual(false);
});

// test x > 50
test('greaterThanFifty 49.99 < 50', () => {
    const result = funcs.greaterThanFifty(51)
    expect(result).toEqual(true);
});
//////////////////////////////////////////////////////////
// Test add function
// testing add two positive numbers
test('add 1 + 2 to equal 3', () => {
    expect(funcs.add(1,2)).toBe(3);
});

// testing add a positive number and zero
test('add 1 + 0 to equal 1', () => {
    expect(funcs.add(1,0)).toBe(1);
});

// testing add two negative numbers
test('add -1 + (-2) to equal -3', () => {
    expect(funcs.add(-1,-2)).toBe(-3);
});

// testing add a negative number and a positive number
// a >= b
test('add 10 + (-5) to equal 5', () => {
    expect(funcs.add(10,-5)).toBe(5);
});

// testing add a negative number and a positive number
// a <= b
test('add 5 + (-10) to equal -5', () => {
    expect(funcs.add(-10,5)).toBe(-5);
});
////////////////////////////////////////////////////////

//Test subtract function
// subtract two positive numbers
test('subtract 2 - 1 to equal 1', () => {
    expect(funcs.subtract(2, 1)).toBe(1);
});


test('subtract 1 - 2 to equal -1', () => {
    expect(funcs.subtract(1, 2)).toBe((-1))
});


// subtract two negative numbers
test('subtract -10 - (-5) equal ', ()=> {
    expect(funcs.subtract(-10, -5)).toBe((-5));
});
////////////////////////////////////////////////////////

// Test Multiply
// multiply two positive numbers
test('multiply 5 *5 to equal 25', () => {
    expect(funcs.multiply(5,5)).toBe(25);
});

// test multiply one positive number and one negative number
test('multiply 5 * -5', () => {
    expect(funcs.multiply(5,-5)).toBe(-25);
});

// test multiply two negative numbers
test('multiply -5*-5', ()=> {
    expect(funcs.multiply(-5, -5)).toBe(25);
});

//test multiply a positive number by 0
test('multiply 5* 0', ()=> {
    expect(funcs.multiply(5, 0)).toBe(0);
});

//test multiply a negative number by 0
test('multiply -5* 0', ()=> {
    expect(funcs.multiply(5, 0)).toBe(0);
});
/////////////////////////////////////////////////////////

// Test Divide
// test divide 25 / 5
test('divide 25 / 5', () => {
    expect(funcs.divide(25, 5)).toBe(5);
});

// test divide a negative and positive number
test('divide -25 / 5', () => {
    expect(funcs.divide(-25, 5)).toBe(-5);
});

// test divide two negative numbers
test('divide -25 / 5', () => {
    expect(funcs.divide(-25, -5)).toBe(5);
});

// test divide a number by 0
test('divide 25 / 0', () => {
    expect(funcs.divide(25, 0)).toBe(Infinity);
});

// test divide a negative number by 0
test('divide -25 / 0', () => {
    expect(funcs.divide(-25, 0)).toBe(-Infinity);
});
/////////////////////////////////////////////////////////

// Test getRemainder
// test 25 mod 5 = 0
test('getRemainder 25 mod 5', ()=> {
    const result = funcs.getRemainder(25,5);
    expect(result).toBe(0);
});

// test 25 mod 4 = 1
test('getRemainder 25 mod 1', ()=> {
    const result = funcs.getRemainder(25,4);
    expect(result).toBe(1);
});

// test -25 mod 4 = 1
test('getRemainder 25 mod 1', ()=> {
    const result = funcs.getRemainder(-25,4);
    expect(result).toBe(-1);
});
/////////////////////////////////////////////////////////

// Test isEven
// x = 2
test('isEven 2', () => {
   expect(funcs.isEven(2)).toEqual(true);
});

// x = 3
test('isEven 3', () => {
    expect(funcs.isEven(3)).toEqual(false);
});

// x = 0
test('isEven 0', () => {
    expect(funcs.isEven(0)).toEqual(true);
});
////////////////////////////////////////////////////////

// Test isOdd
// test x = 0
test('isOdd 0 ', () => {
    expect(funcs.isOdd(0)).toEqual(false);
});

// test x = 1
test('isOdd 1 ', () => {
    expect(funcs.isOdd(1)).toEqual(true);
});

// test x = 2
test('isOdd 2 ', () => {
    expect(funcs.isOdd(0)).toEqual(false);
});
/////////////////////////////////////////////////////////

// Test square
// test 5^2 = 25
test('square 2^2 = 4', ()=> {
    const shouldbe = Math.pow(5, 2);
    const result = funcs.square(5);
    expect(result).toBe(shouldbe);
});

// test -5^2
test('square 2^2 = 4', ()=> {
    const shouldbe = Math.pow(-5, 2);
    const result = funcs.square(-5);
    expect(result).toBe(shouldbe);
});
/////////////////////////////////////////////////////////