const helpers = require('./project-1');

// start testing!
it('should mult by ten', () => {
    const expected = 100;

    const actual = helpers.multiplyByTen(10);

    expect(actual).toEqual(expected);
});

it('should sub by five', () => {
    const expected = 10;

    const actual = helpers.subtractFive(15);

    expect(actual).toEqual(expected);
});

it('should compare string lgth', () => {
    const expected = true;

    const actual = helpers.areSameLength('node', 'smal');

    expect(actual).toEqual(expected);
});

it('compare values for equality', () => {
    const expected = true;

    const actual = helpers.areEqual(8, 8);

    expect(actual).toEqual(expected);
});

it('value of input less than ninety', () => {
    const expected = true;

    const actual = helpers.lessThanNinety(89);

    expect(actual).toEqual(expected);
});

it('value of input is more than fifty', () => {
    const expected = true;

    const actual = helpers.greaterThanFifty(51);

    expect(actual).toEqual(expected);
});

it('value of two numbers summed', () => {
    const expected = 3;

    const actual = helpers.add(1.4, 1.6);

    expect(actual).toEqual(expected);
});

it('value of two numbers subtracted ', () => {
    const expected = 1001;

    const actual = helpers.subtract(1002,1);

    expect(actual).toEqual(expected);
});

it('value of two numbers divided', () => {
    const expected = 2;

    const actual = helpers.divide(10,5);

    expect(actual).toEqual(expected);
});

it('value of two numbers multiplied', () => {
    const expected = 6;

    const actual = helpers.multiply(2,3);

    expect(actual).toEqual(expected);
});

describe('multiple modulo', () => {

it('value modulo return', () => {
    const expected = 2;

    const actual = helpers.getRemainder(10,8);

    expect(actual).toEqual(expected);
});

it('value modulo with zero divisor', () => {
    const expected = NaN;
    
    const actual = helpers.getRemainder(10,0);
    
    expect(actual).toEqual(expected);


        });
});

it('value is an even integer when input is a number', () => {
    const expected = true;
    
    const actual = helpers.isEven(10);
    
    expect(actual).toEqual(expected);

});

it('value is an odd integer when input is a number', () => {
    const expected = false;
            
    const actual = helpers.isOdd(10);
            
    expect(actual).toEqual(expected);
        
});


it('value is the beginning input multiplied by itself when input is a number', () => {
    const expected = 4;
            
    const actual = helpers.square(2);
            
    expect(actual).toEqual(expected);
        
});

it('value is the beginning input multiplied by itself twice when input is a number', () => {
    const expected = 8;
            
    const actual = helpers.cube(2);
            
    expect(actual).toEqual(expected);
        
});       
it('value is the first input raised to the power of the second input', () => {
    const expected = 16;
            
    const actual = helpers.raiseToPower(2, 4);
            
    expect(actual).toEqual(expected);
        
});  
it('value is the numerically closest integer of input when input is a number', () => {
    const expected = 4;
                            
    const actual = helpers.roundNumber(4.3);
                            
    expect(actual).toEqual(expected);
                        
});   

it('next largest integer is returned when input is number', () => {
    const expected = 5;
                                            
    const actual = helpers.roundUp(4.3);
                                            
    expect(actual).toEqual(expected);
});
                                     
it('when string is input exclamation character is added to input', () => {
    const expected = 'charleie!';
                                                
    const actual = helpers.addExclamationPoint('charleie');
                                                
    expect(actual).toEqual(expected);
});

it('two strings are input and combined into a new string', () => {
    const expected = 'ca gar';
                                                
    const actual = helpers.combineNames('ca','gar');
                                                
    expect(actual).toEqual(expected);
});

it('when string is input a string greeting is added', () => {
    const expected = 'Hello FederalNancy!';
                                                
    const actual = helpers.getGreeting('FederalNancy');
                                                
    expect(actual).toEqual(expected);
});

it('when two numbers are input, they are multiplied', () => {
    const expected = 10;
                                                
    const actual = helpers.getRectangleArea(2, 5);
                                                
    expect(actual).toEqual(expected);
});

it('when two numbers are input and the first represents tri base, the sec height, they return tri area', () => {
    const expected = 10;
                                                
    const actual = helpers.getTriangleArea(2,10);
                                                
    expect(actual).toEqual(expected);
});

it('when radius is input as a number, th circl', () => {
    const expected = 28.274333882308138;
                                                
    const actual = helpers.getCircleArea(3);
                                                
    expect(actual).toEqual(expected);
});

it('when three numbers are input and the first represents length, the second value is width, the third is height, the volume of a prism will be output', () => {
    const expected = 8;
                                                
    const actual = helpers.getRectangularPrismVolume(2, 2, 2);
                                                
    expect(actual).toEqual(expected);
});