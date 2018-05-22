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
// Test add item to array
test('Add Item to Array', () => {
    const arr = [5,9,1];
    funcs.addItemToArray(arr, 100);
    const lastItemAdd = arr[arr.length-1];
    expect(lastItemAdd).toBe(100);
});
//////////////////////////////////////////////

