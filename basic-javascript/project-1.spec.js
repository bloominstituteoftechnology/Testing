const helpers = require('./project-1');

// start testing!
it('should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen('')).toBe(NaN);
    expect(helpers.multiplyByTen(true)).toBe(NaN);
});  
it('should subtract a number by 5', () => {
    expect(helpers.subtractFive(4)).toBe(-1);
    expect(helpers.subtractFive('')).toBe(NaN);
    expect(helpers.subtractFive(true)).toBe(NaN);
}); 

it('should return a bool of whether lengths are equal', () => {
    expect(helpers.areSameLength('words', 'words')).toBe(true);
    expect(helpers.areSameLength('words!', 'words')).toBe(false);
    expect(helpers.areSameLength([], 'a')).toBe(false); 

});

it('should return a bool on whether two numbers are equal', () => {
    expect(helpers.areEqual(4, 5)).toBe(false);
    expect(helpers.areEqual(4, 4)).toBe(true);
    expect(helpers.areEqual('4', 4)).toBe(false); 

});

it('should return a bool of whether or not a number is less than 90', () => {
    expect(helpers.lessThanNinety(90)).toBe(false);
    expect(helpers.lessThanNinety('45')).toBe(false);
    expect(helpers.lessThanNinety(45)).toBe(true);
    expect(helpers.lessThanNinety(200)).toBe(false);
});

it("should return a bool on wether a number is greater than 50", () => {
    expect(helpers.greaterThanFifty(55)).toBe(true);
    expect(helpers.greaterThanFifty(45)).toBe(false);
    expect(helpers.greaterThanFifty('55')).toBe(false);
    expect(helpers.greaterThanFifty(50)).toBe(false);

});

it("should add two numbers together.", () => {
    expect(helpers.add(8,5)).toBe(13);
});
it('should subtract two numbers', () => {
    expect(helpers.subtract(5,5)).toBe(0);
});
it('should divide two numbers', () => {
    expect(helpers.divide(10,5)).toBe(2);
});

    it('should multiply two numbers', () => {
        expect(helpers.multiply(5,5)).toBe(25);
    });
    
    it('should get remainder after division', () => {
        expect(helpers.getRemainder(5,2)).toBe(1);
    });

    it('should return a bool determing whether a number is even or not', () => {
        expect(helpers.isEven(4)).toBe(true);
        expect(helpers.isEven(5)).toBe(false);
    });

    it('should return a bool determing whether a number is odd or not', () => {
        expect(helpers.isOdd(3)).toBe(true);
        expect(helpers.isOdd(4)).toBe(false);
    });

    it('should square a number', () => {
        expect(helpers.square(2)).toBe(4);
        expect(helpers.square(5)).toBe(25);
  });  
    it('should cube a number', () => {
        expect(helpers.cube(2)).toBe(8);
        expect(helpers.cube(3)).toBe(27);
    });

    it('should raise num to the exponent power', () => {
        expect(helpers.raiseToPower(2, 3)).toBe(8);
        expect(helpers.raiseToPower(3, 4)).toBe(81);
    });
    
    it('should round to closest number', () => {
        expect(helpers.roundNumber(2.01)).toBe(2);
       expect(helpers.roundNumber(2.99)).toBe(3); 
    });

    it('should round up a number', () => {
        expect(helpers.roundUp(2.01)).toBe(3);
        expect(helpers.roundUp(2.99)).toBe(3); 
    });
    
    it('should add an exclamation point to the end of a string', () => {
        expect(helpers.addExclamationPoint('Kitty')).toBe('Kitty!');
        expect(helpers.addExclamationPoint('')).toBe('!'); 
  
    });
    
    it('should combine two strings into one string', () => {
        expect(helpers.combineNames('Csilla', 'Gates')).toBe('Csilla Gates')
    });
    
    it('should return a greeting of Hello with a name', () => {
        expect(helpers.getGreeting('Csilla')).toBe('Hello Csilla!');   
    });
    
    it('should return the area of a rectangle given length and width ', () => {
        expect(helpers.getRectangleArea(2, 5)).toBe(10);
    });
    
    it('should return the area of a triangle given base and height', () => {
        expect(helpers.getTriangleArea(4, 3)).toBe(6);  
    });
    
    it('should return the area of a circle given radius', () => {
        expect(helpers.getCircleArea(3)).toBeCloseTo(28.274);  
    });
    
    it('should return the volume of a rectangular prism given length, width and height', () => {
        expect(helpers.getRectangularPrismVolume(3, 4, 5)).toBe(60);  
    });
    
    
    
    
    