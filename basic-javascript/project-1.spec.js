const helpers = require('./project-1');

describe('multiplication by ten tests', () => {
it('should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(-5)).toEqual(-50);
    expect(helpers.multiplyByTen(Number.MAX_VALUE)).toEqual( 1.79E+308*10);	
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


describe('equality tests', () => {
it(' should return false if the passed values are not equal', () => {
    expect(helpers.areEqual('78','7')).toEqual(false);
    expect(helpers.areEqual('hello','hello')).toEqual(true);
    expect(helpers.areEqual(123, 123)).toEqual(true);
    expect(helpers.areEqual('helloworld', 1290)).toEqual(false);
    expect(helpers.areEqual(undefined, undefined)).toEqual(true);
    expect(helpers.areEqual(null, null)).toEqual(true);
    expect(helpers.areEqual(undefined, null)).toEqual(false);
});


});


describe(' checking if passed number is less than ninty', () => {
it('should return true if passed number is less than ninty', () => {
    expect(helpers.lessThanNinety(40)).toEqual(true);
    expect(helpers.lessThanNinety(-10)).toEqual(true);
    expect(helpers.lessThanNinety(90)).toEqual(false);
     expect(helpers.lessThanNinety(900)).toEqual(false);	
});

it('should return false if the number is undefined or null', () =>{
expect(helpers.lessThanNinety(undefined)).toEqual(false);

});

});


describe(' checking if passed number is greater than fifty', () => {
it('should return true if passed number is greater than fifty', () => {
    expect(helpers.greaterThanFifty(40)).toEqual(false);
    expect(helpers.greaterThanFifty(-10)).toEqual(false);
    expect(helpers.greaterThanFifty(50)).toEqual(false);
     expect(helpers.greaterThanFifty(100)).toEqual(true);
});

it('should return false if the number is undefined or null', () =>{
expect(helpers.lessThanNinety(undefined)).toEqual(false);

});

});


describe('addition tests', () => {
it('should return the sum of the passes numbers', () => {
    expect(helpers.add(40,0)).toEqual(40);
    expect(helpers.add(-10,-70)).toEqual(-80);
    expect(helpers.add(50,-90)).toEqual(-40);
     expect(helpers.add(10000000,79)).toEqual(10000079);
});

it('should return false if the passed values are undefined, null, or not a number', () =>{
	expect(helpers.add(undefined, undefined)).toEqual(false);
	expect(helpers.add(null, null)).toEqual(false);
	expect(helpers.add(undefined, null)).toEqual(false);
	expect(helpers.add('hello', 123)).toEqual(false);
	expect(helpers.add('hi','hi')).toEqual(false);
});

});


describe('subtraction two numbers tests', () => {
it('should return the sum of the passes numbers', () => {
    expect(helpers.subtract(0,0)).toEqual(0);
    expect(helpers.subtract(-10,-70)).toEqual(60);
    expect(helpers.subtract(50,-100)).toEqual(150);
    expect(helpers.subtract(60,20)).toEqual(40);
    expect(helpers.subtract(80,200)).toEqual(-120);	
});

it('should return false if the passed values are undefined, null, or not a number', () =>{
        expect(helpers.subtract(undefined, undefined)).toEqual(false);
        expect(helpers.subtract(null, null)).toEqual(false);
        expect(helpers.subtract(undefined, null)).toEqual(false);
        expect(helpers.subtract('helloooooo', 123)).toEqual(false);
        expect(helpers.subtract('hi','hi')).toEqual(false);
});

});


describe('division tests', () => {
it('should return the quotient of the numbers passed', () => {
    expect(helpers.divide(10,70)).toBeCloseTo(0.142);
    expect(helpers.divide(-50,-10)).toEqual(5);
    expect(helpers.divide(48,-24)).toEqual(-2);
    expect(helpers.divide(0,200)).toEqual(0);
});

it('should return false if the passed values are undefined, null, or not a number', () =>{
        expect(helpers.divide(0,0)).toEqual(false);
	expect(helpers.divide(undefined, undefined)).toBeFalsy();
        expect(helpers.divide(null, null)).toEqual(false);
        expect(helpers.divide(undefined, null)).toEqual(false);
        expect(helpers.divide('helloooooo', 123)).toEqual(false);
        expect(helpers.divide('hi','hi')).toEqual(false);
});

});


describe('multiplication of two numbers tests', () => {
it('should return the product of the numbers passed', () => {
    expect(helpers.multiply(0,0)).toEqual(0);
    expect(helpers.multiply(-30,-6)).toEqual(180);
    expect(helpers.multiply(90,-24)).toEqual(-2160);
    expect(helpers.multiply(0,200)).toEqual(0);
});

it('should return false if the passed values are undefined, null, or not a number', () =>{
        expect(helpers.multiply(undefined, undefined)).toBeFalsy();
        expect(helpers.multiply(null, null)).toEqual(false);
        expect(helpers.multiply(undefined, null)).toEqual(false);
        expect(helpers.multiply('helloooooo', 123)).toEqual(false);
        expect(helpers.multiply('hi','hi')).toEqual(false);
});

});
