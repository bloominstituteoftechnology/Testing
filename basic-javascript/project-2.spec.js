const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


// Test getBiggest
test('getBiggest 5, 10', () => {

    const max = funcs.getBiggest(5, 10);
    expect(max).toBe(10)
});

test('getBiggest 10, 5', () => {

    const max = funcs.getBiggest(10, 5);
    expect(max).toBe(10)
});
////////////////////////////////////////////////

// greeting
// German
test('German', () => {
    const result = funcs.greeting('German');
    expect(result).toBe('Guten Tag!');
});

// Spanish
test('Spanish', () => {
    const result = funcs.greeting('Spanish');
    expect(result).toBe('Hola!');
});

// other
test('Other', () => {
    const result = funcs.greeting('Other');
    expect(result).toBe('Hello!');
});
/////////////////////////////////////////////////

// Test isTenOrFive
// number = 5
test('isTenOrFive 5', () => {

    const number = 5;
    const result = funcs.isTenOrFive(number);
    expect(result).toBe(true);
});

// number = -5
test('isTenOrFive -5', () => {

    const number = -5;
    const result = funcs.isTenOrFive(number);
    expect(result).toBe(false);
});

// number = 10
test('isTenOrFive 10', () => {

    const number = 10;
    const result = funcs.isTenOrFive(number);
    expect(result).toBe(true);
});
/////////////////////////////////////////////////

// Test isInRange
// number 25
test('isInRange number is 25', () => {

    const result = funcs.isInRange(25);
    expect(result).toBe(true);
});

// number 51
test('isInRange number is 51', () => {

    const result = funcs.isInRange(51);
    expect(result).toBe(false);
});
/////////////////////////////////////////////////

// Test isInteger
// number 5
test('isInteger 5', () => {

    const result = funcs.isInteger(5);
    expect(result).toBe(true)
});

// number 5.5
test('isInteger 5.5', () => {

    const result = funcs.isInteger(5.5);
    expect(result).toBe(false)
});

// number '5'
test('isInteger "5" ', () => {

    const result = funcs.isInteger('5');
    expect(result).toBe(false)
});
/////////////////////////////////////////////////

// Test fizzBuzz
// number 15
test('fizzBuzz 15', () => {
    const number = 15;
    const result = funcs.fizzBuzz(number);
    expect(result).toBe('fizzbuzz');
});

// number 3
test('fizzBuzz 3', () => {
    const number = 3;
    const result = funcs.fizzBuzz(number);
    expect(result).toBe('fizz');
});

// number 7
test('fizzBuzz 7', () => {
    const number = 7;
    const result = funcs.fizzBuzz(number);
    expect(result).toBe(7);
});

// number 5
test('fizzBuzz 5', () => {
    const number = 5;
    const result = funcs.fizzBuzz(number);
    expect(result).toBe('buzz');
});
/////////////////////////////////////////////////
// Test add item to array
test('Add Item to Array', () => {
    const arr = [5,9,1];
    funcs.addItemToArray(arr, 100);
    const lastItemAdd = arr[arr.length-1];
    expect(lastItemAdd).toBe(100);
});
//////////////////////////////////////////////

