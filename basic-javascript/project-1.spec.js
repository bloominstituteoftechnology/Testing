const helpers = require('./project-1');

// start testing!

//multiplyByTen
describe('Multiply By 10', () => {
    it('returns NaN when given a type that is not a number', () => {            
        expect(helpers.multiplyByTen(null)).toEqual(0);
        expect(helpers.multiplyByTen(undefined)).toBeNaN()
    })
    it('return a number multiply by 10', () => {
        expect(helpers.multiplyByTen(3)).toEqual(30)
        expect(helpers.multiplyByTen(-2)).toEqual(-20); 
    })
})

//subtractFive
describe('Subtract by 5', () => {
    it('return a number that is subtracted by 5', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
      expect(helpers.subtractFive(-6)).toEqual(-11);       
    })
})

// areSameLength
describe('return true if the length are the same false otherwise', () => {
    it('place holder text', () => {
        expect(helpers.areSameLength('abc', 'def')).toBeTruthy(); 
        expect(helpers.areSameLength('this is a test', 'tset a si siht')).toBeTruthy(); 
    })
    it('return false if length is different', () => {
        expect(helpers.areSameLength('abc', 'def')).toBeFalsy(); 
        expect(helpers.areSameLength('this is a test', 'tobe')).toBeFalsy(); 
})

// areEqual
describe('areEqual', () => {
    it('return true when x and y are the same number and type', () => {
        expect(helpers.areEqual(10, 10)).toBeTruthy(); 
        expect(helpers.areEqual('str', 'str')).toBeTruthy(); 
    })
    it('return false when x and y are not the same number and type', () => {
        expect(helpers.areEqual(10, 3)).toBeFalsy()
        expect(helpers.areEqual('str', 'str')).toBeFalsy() 
    })
})


//lessThanNinety
describe("Less than 90", () => {
    it('returns true if the number pass is less than 90 otherwise false', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
        expect(helpers.lessThanNinety(100)).toBeFalsy(); 
    })
})

// greaterThanFifty
describe('Greater than 50', () => {
    it('returns true if the number pass is greater than 50 otherwise false', () => {
        expect(helpers.greaterThanFifty(65)).toBeTruthy();
        expect(helpers.greaterThanFifty(25)).toBeFalsy(); 
    })
})

// add 
describe('Add 2 numbers', () => {
    it('returns the sum of the 2 numbers pass in', () => {
        expect(helpers.add(2, 3)).toBe(5);
        expect(helpers.add(-5, -6)).toEqual(-11); 
    })
})

//subtract 
describe('Subtract 2 numbers', () => {
    it('return the sum of the 2 numbers pass in', () => {
        expect(helpers.subtract(10,5)).toBe(5);
        expect(helpers.subtract(-7, -2)).toEqual(-5)
    })
})  

//divide 
describe('Divide 2 numbers', () => {
    it('return the quotient of the 2 numbers pass in', () => {
        expect(helpers.divide(10,5)).toEqual(2);         
        expect(helpers.divide(-18, 32)).toEqual(-6); 
    })
})

//multiply 
describe('Multiply 2 numbers', () => {
    it('return the product of the 2 numbers pass in', () => {
        expect(helpers.multiply(10,2)).toEqual(20); 
        expect(helpers.multiply(-5, 6)).toEqual(-30); 
    })
})

// getRemainder
describe('get the remainder of 2 numbers divided by each other', () => {
    it('returns the remainder of the 2 numbers pass in', () => {
        expect(helpers.getRemainder(10,3)).toEqual(1);

    })
})

//isEven
describe('return true if the number is even otherwise false', () => {
    it('returns true when the number pass in is even', () => {
        expect(helpers.isEven(6)).toBeTruthy();        
    })
    it('return false when the number pass in is odd', () => {
        expect(helpers.isEven(3)).toBeFalsy(); 
    })
})

//isOdd
describe('return true if the numbers is odd otherwise false', () => {
    it('returns true when the number pass in is odd', () => {
        expect(helpers.isOdd(3)).toBeTruthy();        
    })  
    it('return false when number is even', () => {
        expect(helpers.isOdd(4)).toBeFalsy(); 
    })
})

// square 
describe('Square the number', () => {
    it('return the square of the number pass in', () => {
        expect(helpers.square(2)).toEqual(4); 
        expect(helpers.square(-5)).toEqual(25); 
    })
})

//cube 
describe('Cube the number', () => {
    it('return the cube of the number pass in', () => {
        expect(helpers.cube(3)).toEqual(27); 
        expect(helpers.cube(-3)).toEqual(-27); 
    })
}) 

// raiseToPower
describe('raise to the power', () => {
    it('return the first number to the power of the second number', () => {
        expect(helpers.raiseToPower(3,3)).toEqual(27);   
        expect(helpers.raiseToPower(-3,3)).toEqual(-27);   
    })
})

//roundNumber
describe('rounded number', () => {
    it('return the number rounded off to the nearest whole number', () => {
        expect(helpers.roundNumber(7.5)).toEqual(8); 
        expect(helpers.roundNumber(7.1)).toEqual(7); 
    })
})

//roundUp
describe("round up number", () => {
    it("return the number rounded up to the nearest whole number", () => {
      expect(helpers.roundUp(8.2)).toEqual(9)
      expect(helpers.roundUp(8.6)).toEqual(9)
    })
})

//addExclamationPoint
describe('add exclamation point to string', () => {
    it('return the string with an exclamation point append to it', () => {
        expect(helpers.addExclamationPoint('Hello')).toEqual('Hello!')
        expect(helpers.addExclamationPoint('test')).not.toEqual('test!')
    })
})

// combineNames
describe('combine names', () => {
    it('return the combination of the two names pass in', () => {
        expect(helpers.combineNames('Xang', 'Thao')).toEqual('Xang Thao')
        expect(helpers.combineNames('Xang', 'Thao')).not.toEqual('XangThao')
    })
})

// getGreeting
describe('greet person', () => {
    it('return the greeting with the name pass in', () => {
        expect(helpers.getGreeting('Rome')).toEqual('Hello Rome!')
        expect(helpers.getGreeting('Rome')).not.toEqual('Rome!')
    })
})

//getRectangleArea
describe('get rectangle area', () => {
    it('return the area of the rectangle', () => {
        expect(helpers.getRectangleArea(3,7)).toEqual(21)
    })
})

// getTriangleArea 
describe('get triangle area', () => {
    it('return the area of the triangle', () => {
        expect(helpers.getTriangleArea(2,10)).toEqual(10)
    })
}) 

// getCircleArea
describe('get circle area', () => {
    it('return the area of the circle', () => {
        let num = 5; 
        let area = num * num * Math.PI;
        expect(helpers.getCircleArea(num)).toEqual(area)
    })
})

//getRectangularPrismVolume
describe('get rectangular prism volume', () => {
    it('return the prism volume of the rectangle', () => {
        expect(helpers.getRectangularPrismVolume(2,3,4)).toEqual(24)
    })
})