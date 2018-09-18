const helpers = require('./project-1');

// start testing!

// Testing multiplyByTen

it('should multiply by 10', () => {

    const numTimesTen = helpers.multiplyByTen;
    const value1 = numTimesTen(2);
    const value2 = numTimesTen(5);
    const value3 = numTimesTen(-4);
    const value4 = numTimesTen(0);
    const value5 = numTimesTen('3');
    const value6 = numTimesTen(undefined);

    expect(value1).toEqual(20);
    expect(value2).toEqual(50);
    expect(value3).toEqual(-40);
    expect(value4).toEqual(0);
    expect(value5).toEqual(30);
    expect(value6).toBe(false); 
})

//Testing subtractFive
it('should subtract 5', () => {

    const numSubtractFive = helpers.subtractFive;
    const value1 = numSubtractFive(10); //5
    const value2 = numSubtractFive(500); //495
    const value3 = numSubtractFive(-10); //-15
    const value4 = numSubtractFive(5); //0 
    const value5 = numSubtractFive('10'); //5 
    const value6 = numSubtractFive(undefined); //false

    expect(value1).toEqual(5);
    expect(value2).toEqual(495);
    expect(value3).toEqual(-15);
    expect(value4).toEqual(0);
    expect(value5).toEqual(5); 
    expect(value6).toBe(false);
})


//Testing areSameLength

it('check if strings have equal length', () => {
    const lengthCheck = helpers.areSameLength;

    const result1 = lengthCheck('abc', 'def'); //true
    const result2 = lengthCheck(123, 456); //true
    const result3 = lengthCheck('missing one'); //undefined
    const result4 = lengthCheck(); //undefined

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe('must input two strings');
    expect(result4).toBe('must input two strings');

});

//testing areEqual
it('check if values are equal', () => {
    const eCheck = helpers.areEqual;

    const result1 = eCheck(4, 4); //true
    const result2 = eCheck(3, 4); //false
    const result3 = eCheck(3,); //message
    const result4 = eCheck('three','four'); false;

    expect(result1).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe('both values must be defined');
    expect(result4).toBe(false);
});

//testing lessThanNinety
//testing areEqual
it('check if value is less than 90', () => {
    const ninety = helpers.lessThanNinety;

    const result1 = ninety(-4); //true
    const result2 = ninety(500); 
    //const result3 = ninety('four'); 

    expect(result1).toBe(true);
    expect(result2).toBe(false);
    //expect(result3).toBe('value must be a number');
});

//testing lessThanNinety
//testing areEqual
it('check if value is greater than 50', () => {
    const fifty = helpers.greaterThanFifty;

    const result1 = fifty(-4); //false
    const result2 = fifty(500); //true
    //const result3 = ninety('fifty one'); 

    expect(result1).toBe(false);
    expect(result2).toBe(true);
    //expect(result3).toBe('value must be a number');
});

//testing add
it('should add two numbers', () => {
    const add = helpers.add;

    const result1 = add(4, 4); //8
    const result2 = add(3, 4); //
    const result3 = add('three','four'); //values must both be numbers;

    expect(result1).toBe(8);
    expect(result2).toBe(7);
    expect(result3).toBe('values must both be numbers');
});

//testing subtract

it('should subtract two numbers', () => {
    const subtract = helpers.subtract;

    const result1 = subtract('five', 'two');

    expect(result1).toBe('values must both be numbers');
})


//testing divide

it('should return a quotient', () => {
    const divide = helpers.divide;

    const result1 = divide(5); //message
    const result2 = divide(10,0); // message
    const result3 = divide('3','4');

    expect(result1).toBe('must have two numbers')
    expect(result2).toBe('cannot divide by 0');
    expect(result3).toBe('both values must be numbers');
})

//testing multiply
it('should return a product', () => {
    const multiply = helpers.multiply;

    const result1 = multiply(4); // message
    const result2 = multiply('3','4'); //message

    expect(result1).toBe('must have two numbers')
    expect(result2).toBe('both values must be numbers');
})


it('should return a remainder', () => {
    const remainder = helpers.getRemainder;

    const result1 = remainder(5); //message
    const result2 = remainder(10,0); // message
    const result3 = remainder('3','4');

    expect(result1).toBe('must have two numbers')
    expect(result2).toBe('cannot divide by 0');
    expect(result3).toBe('both values must be numbers');
})






