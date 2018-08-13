const funcs = require('./project-2');


describe('biggest of two numbers tests', () => {
it('should return the biggest of the two numbers passed', () => {
    expect(funcs.getBiggest(0,0)).toEqual(0);
    expect(funcs.getBiggest(30,36)).toEqual(36);
    expect(funcs.getBiggest(90,-24)).toEqual(90);
    expect(funcs.getBiggest(0,200)).toEqual(200);
    expect(funcs.getBiggest(-80,20)).toEqual(20);
    expect(funcs.getBiggest(-8,-80)).toEqual(-8);	
});

it('should return false if the passed values are undefined, null, or not a number', () =>{
        expect(funcs.getBiggest(undefined, undefined)).toBeFalsy();
        expect(funcs.getBiggest(null, null)).toEqual(false);
        expect(funcs.getBiggest(undefined, null)).toEqual(false);
        expect(funcs.getBiggest('helloooooo', 123)).toEqual(false);
        expect(funcs.getBiggest('hi','hi')).toEqual(false);
});

});


describe('greeting in a particular language', () => {
it('should return appropriate greeting based on the language passed', () => {
    expect(funcs.greeting('German')).toEqual('Guten Tag!');
    expect(funcs.greeting('Spanish')).toEqual('Hola!');
    expect(funcs.greeting('English')).toEqual('Hello!');
    expect(funcs.greeting('Marathi')).toEqual('Hello!');
});

it('should return false if the passed value is undefined, null, or not a string', () =>{
        expect(funcs.greeting(undefined)).toEqual(false);
        expect(funcs.greeting(null)).toEqual(false);
        expect(funcs.greeting(123)).toEqual(false);
});

});


describe('determine if number is ten or five tests', () => {
it('should return true if the passed number is ten or five', () => {
    expect(funcs.isTenOrFive(10)).toEqual(true);
    expect(funcs.isTenOrFive(5)).toEqual(true);	
    expect(funcs.isTenOrFive(50000000000000000000)).toEqual(false);
    expect(funcs.isTenOrFive(-2400000000)).toEqual(false);
    expect(funcs.isTenOrFive(0)).toEqual(false);
     expect(funcs.isTenOrFive(Number.MAX_VALUE)).toEqual(false);	
});

it('should return false if the passed value is undefined, null, or not a number', () =>{
        expect(funcs.isTenOrFive(undefined)).toBeFalsy();
        expect(funcs.isTenOrFive(null)).toEqual(false);
        expect(funcs.isTenOrFive('ytref')).toEqual(false);
});

});


describe('number range tests', () => {
it('should return true if the passed number is between 20 and 50', () => {
    expect(funcs.isInRange(20)).toEqual(false);
    expect(funcs.isInRange(50)).toEqual(false);
    expect(funcs.isInRange(34)).toEqual(true);
    expect(funcs.isInRange(-240)).toEqual(false);
    expect(funcs.isInRange(0)).toEqual(false);
    expect(funcs.isInRange(Number.MAX_VALUE)).toEqual(false);	
});

it('should return false if the passed value is undefined, null, or not a number', () =>{
        expect(funcs.isInRange(undefined)).toBeFalsy();
        expect(funcs.isInRange(null)).toEqual(false);
        expect(funcs.isInRange('ytref')).toEqual(false);
});

});


describe('interger test', () => {
it('should return true if the passed number is an integer', () => {
    expect(funcs.isInteger(20.90)).toEqual(false);
    expect(funcs.isInteger(-50.87)).toEqual(false);
    expect(funcs.isInteger(34)).toEqual(true);
    expect(funcs.isInteger(-2400098)).toEqual(true);
    expect(funcs.isInteger(0)).toEqual(false);
    expect(funcs.isInteger(Number.MAX_VALUE)).toEqual(true);
});

it('should return false if the passed value is undefined, null, or not a number', () =>{
        expect(funcs.isInteger(undefined)).toBeFalsy();
        expect(funcs.isInteger(null)).toEqual(false);
        expect(funcs.isInteger('ytref')).toEqual(false);
});

});
