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
    // const result3 = lengthCheck(undefined, 'hello'); //false
    const result4 = lengthCheck('missing one'); //undefined
    const result5 = lengthCheck(); //undefined

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    // expect(result3).toBe(false);
    expect(result4).toBe('must input two strings');
    expect(result5).toBe('must input two strings');

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




