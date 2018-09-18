const helpers = require('./project-1');

// start testing!

// //template
// it('',() => {
//     const 

//     const result1 = 
//     const result2 = 

//     expect(result1).toBe();
//     expect(result2).toBe();
// }) 

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

it('should check if a number is even',() => {
    const even = helpers.isEven;

    const result1 = even(12);
    const result2 = even(11);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})

it('should check if a number is odd',() => {
    const odd = helpers.isOdd

    const result1 = odd(12);
    const result2 = odd(11);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

it('should return the square of the number',() => {
    const square = helpers.square;

    const result1 = square(3);
    const result2 = square(-3);

    expect(result1).toBe(9);
    expect(result2).toBe(9);
})

it('should return the cube of the number',() => {
    const cube = helpers.cube;

    const result1 = cube(3);
    const result2 = cube(-3);

    expect(result1).toBe(27);
    expect(result2).toBe(-27);
})

it('should raise the number to the exponent provided',() => {
    const power = helpers.raiseToPower;

    const result1 = power(5,2)
    const result2 = power(5,-2)

    expect(result1).toBe(25);
    expect(result2).toBe(.04);
})

it('round number',() => {
    const round = helpers.roundNumber;

    const result1 = round(4.2)
    const result2 = round(4.6)

    expect(result1).toBe(4);
    expect(result2).toBe(5);
})

it('round number up',() => {
    const roundUp = helpers.roundUp;

    const result1 = roundUp(4.2)
    const result2 = roundUp(4.6)

    expect(result1).toBe(5);
    expect(result2).toBe(5);
})


it('should add an exclamation point',() => {
    const addEx = helpers.addExclamationPoint;

    const result1 = addEx('this is a string');
    const result2 = addEx();

    expect(result1).toBe('this is a string!');
    expect(result2).toBe(false);
}) 

it('should combine names',() => {
    const combine = helpers.combineNames;

    const result1 = combine('firstName','lastName')
    const result2 = combine();

    expect(result1).toBe('firstName lastName');
    expect(result2).toBe(false);
}) 

it('should greet using provided name',() => {
    const greeting = helpers.getGreeting;

    const result1 = greeting('person');
    const result2 = greeting();

    expect(result1).toBe('Hello person!');
    expect(result2).toBe('Hello!');
}) 

it('should return the rectangle area',() => {
    const recArea = helpers.getRectangleArea;

    const result1 = recArea(3,4);
    const result2 = recArea(3,-4)

    expect(result1).toBe(12);
    expect(result2).toBe(-12);
}) 

it('should return the triangle area',() => {
    const triArea = helpers.getTriangleArea;

    const result1 = triArea(3,4);
    const result2 = triArea(3,-4)

    expect(result1).toBe(6);
    expect(result2).toBe(-6);
}) 

it('should return the circle area',() => {
    const circArea = helpers.getCircleArea;

    const result1 = circArea(1);
    const result2 = circArea(5)

    expect(result1).toBeCloseTo(3.14,1);
    expect(result2).toBeCloseTo(78.54,1);
}) 

it('should return the prism volume',() => {
    const prism = helpers.getRectangularPrismVolume;

    const result1 = prism(3,4,10);
    const result2 = prism(3,-4,10)

    expect(result1).toBe(120);
    expect(result2).toBe(-120);
}) 