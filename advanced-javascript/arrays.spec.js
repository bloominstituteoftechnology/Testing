const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
    describe('map', () => {
	it('should be a function', () => {
	    const map = arrayFunctions.map;
	    expect(typeof map).toBe('function');
	});
    });
    
    describe('each', () => {
	it('should print the array', () => {
	    const map = arrayFunctions.each;
	    expect(typeof map).toBe('function');
	});
    });

    describe('reduce', () => {
	it('should add', () => {
	    expect(arrayFunctions.map([2, 4, 6], int => int + int)).toEqual([4,8,12]);
	});
    });

    describe('find', () => {
	it('should find', () => {
	    expect(arrayFunctions.find([2, 4, 6], int => int === 2)).toEqual(2);
	});
    });

    describe('filter', () => {
	it('should filter', () => {
	    expect(arrayFunctions.filter([2, 4, 6], int => int === 4)).toEqual([4]);
	});
    });

    describe('flatten', () => {
	it('should flatten', () => {
	    expect(arrayFunctions.flatten([2, 4, 6], int => int + int)).toEqual([2, 4, 6]);
	});
    });
});
