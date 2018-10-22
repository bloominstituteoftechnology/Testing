const helpers = require('./project-1');

// start testing!

it('should multiply by 10', () =>{
    const expected = 70;
    const actual = helpers.multiplyByTen(7);
    expect(actual).toBe(expected);
})

it('should subtract by 5', () =>{
    const expected = 5;
    const actual = helpers.subtractFive(10);
    expect(actual).toBe(expected);
})

it('string should be equal length', () =>{    
    expect(helpers.areSameLength('wee','woo')).toBe(true);
    expect(helpers.areSameLength('womp','woo')).toBe(false);
})

it('intergers should be equal', () =>{    
    expect(helpers.areEqual(2,2)).toBe(true);
    expect(helpers.areEqual(-2,2)).toBe(false);
})

it('interger less then 90', () =>{    
    expect(helpers.lessThanNinety(30)).toBe(true);    
})

it('interger greater than 50', () =>{    
    expect(helpers.greaterThanFifty(50)).toBe(false);
})

it('should recieve sum of two integers', () =>{    
    expect(helpers.add(4,5)).toBe(9);
})

it('should show subtraction of integers', () =>{    
    expect(helpers.subtract(6,3)).toBe(3);
})

it('should divide interger by second integer', () =>{    
    expect(helpers.divide(25,5)).toBe(5);
})

it('should multiply two integer', () =>{    
    expect(helpers.multiply(4,5)).toBe(20);
})

it('should get remainder of integer', () =>{    
    expect(helpers.getRemainder(4,2)).toBe(0);
})

it('should check if interger is even', () =>{    
    expect(helpers.isEven(6)).toBe(true);
})

it('should check if interger is odd', () =>{    
    expect(helpers.isOdd(6)).toBe(false);
})

it('should find square area', () =>{    
    expect(helpers.square(5)).toBe(25);
})

it('should find cube area', () =>{    
    expect(helpers.cube(5)).toBe(125);
})

it('first integer should multiply by itself and exponent', () =>{    
    expect(helpers.raiseToPower(5,3)).toBe(125);
})

it('should round an interger', () =>{    
    expect(helpers.roundNumber(3.4)).toBe(3);
})

it('should round number up', () =>{    
    expect(helpers.roundUp(3.4)).toBe(4);
})

it('should add exclamation to end of string', () =>{    
    expect(helpers.addExclamationPoint('woo')).toBe('woo!');
})

it('should combine the names together', () =>{    
    expect(helpers.combineNames('James', 'McRae')).toBe('James McRae');
})

it('should return a greeting', () =>{    
    expect(helpers.getGreeting('James')).toBe('Hello James!');
})

it('should return rectangle area', () =>{    
    expect(helpers.getRectangleArea(3,4)).toBe(12);
})

it('should return triangle area', () =>{    
    expect(helpers.getTriangleArea(6,10)).toBe(30);
})

it('should return area of a circle', () =>{    
    expect(helpers.getCircleArea(6)).toBe(113.09733552923255);
})

it('should return volume of rectangle prism', () =>{    
    expect(helpers.getRectangularPrismVolume(10,2,4)).toBe(80);
})