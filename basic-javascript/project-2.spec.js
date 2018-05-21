const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// Test add item to array
test('Add Item to Array', () => {
    const arr = [5,9,1];
    funcs.addItemToArray(arr, 100);
    const lastItemAdd = arr[arr.length-1];
    expect(lastItemAdd).toBe(100);
});
//////////////////////////////////////////////