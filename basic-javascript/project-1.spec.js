const helpers = require('./project-1');

describe('multiplication tests', () => {
it('should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(-5)).toEqual(-50);
});

it('should return false if the number is undefined or null', () =>{
expect(helpers.multiplyByTen(undefined)).toEqual(false);	

});

});


describe('subtraction tests', () => {
it('should subtract the number passed by five', () => {
    expect(helpers.subtractFive(4)).toEqual(-1);
    expect(helpers.subtractFive(0)).toEqual(-5);
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(-10)).toEqual(-15);	
});

it('should return false if the number is undefined or null', () =>{
expect(helpers.subtractFive(undefined)).toEqual(false);

});

});


describe('checking if string lengths are equal', () => {
it('should return true if the length of the passed strings is equal', () => {
    
    expect(helpers.areSameLength('hello','HELLO')).toEqual(true);
    expect(helpers.areSameLength('hell','hello')).toEqual(false);
    expect(helpers.areSameLength('','')).toEqual(true); 
    expect(helpers.areSameLength('123fetyihfs','9875f')).toEqual(false);
});

it('should return false if the passed value is  not a string, undefined or null', () =>{
	expect(helpers.areSameLength(undefined, undefined)).toEqual(false);
	expect(helpers.areSameLength(567, 9886)).toEqual(false);
	expect(helpers.areSameLength(null, null)).toEqual(false);

});

});
