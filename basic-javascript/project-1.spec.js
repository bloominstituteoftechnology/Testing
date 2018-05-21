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
    const str1Length = 'the'.length;
    const str2Length = 'thy'.length;
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

