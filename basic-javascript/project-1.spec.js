const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('should take a number and multiply it by 10', () => {
        expect(helpers.multiplyByTen(0)).toBe(0)
        expect(helpers.multiplyByTen(5)).toBe(50)
        expect(helpers.multiplyByTen(12)).toBe(120)
        expect(helpers.multiplyByTen(-20)).toBe(-200)
        expect(helpers.multiplyByTen(-.2)).toBe(-2)
    })      
    it('returns NaN when given a non-numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN()
        expect(helpers.multiplyByTen('seven')).toBeNaN()        
        expect(helpers.multiplyByTen([7,5,12,18])).toBeNaN()
        expect(helpers.multiplyByTen({ key: "value" })).toBeNaN()
    })
    it('treats boolean true as 1 and boolean false as 0 when multiplying by 10', () => {
        expect(helpers.multiplyByTen(true)).toBe(10)
        expect(helpers.multiplyByTen(false)).toBe(0)
        expect(helpers.multiplyByTen(-true)).toBe(-10)
        expect(helpers.multiplyByTen(-false)).toBe(-0)
        expect(helpers.multiplyByTen(null)).toBe(0)
    })
})

describe('subtract five', () => {
    it('should take a number and subtract 5', () => {
        expect(helpers.subtractFive(5)).toBe(0)
        expect(helpers.subtractFive(-7)).toBe(-12)
        expect(helpers.subtractFive(25)).toBe(20)
        expect(helpers.subtractFive(.7)).toBe(-4.3)
        expect(helpers.subtractFive(-(-5))).toBe(0)
        expect(helpers.subtractFive(10.12)).toBe(5.119999999999999)
    })
    it('should return NaN when given a non-numeric value', () => {
        expect(helpers.subtractFive(NaN)).toBeNaN()
        expect(helpers.subtractFive('sven')).toBeNaN()
        expect(helpers.subtractFive([1,2,5,24])).toBeNaN()
        expect(helpers.subtractFive({ key: "value" })).toBeNaN()
        expect(helpers.subtractFive(NaN)).toBeNaN()
    })
    it('should treat boolean true as 1 and boolean false as 0 when subracting by 5', () => {
        expect(helpers.subtractFive(true)).toBe(-4)
        expect(helpers.subtractFive(false)).toBe(-5)
        expect(helpers.subtractFive(-true)).toBe(-6)
        expect(helpers.subtractFive(-false)).toBe(-5)        
    })
})

describe('areSameLength', () => {
    it('should return false when given a non-string value', () => {
        expect(helpers.areSameLength([1, 2, 3], [5, 7, 9])).toBe(false);
        expect(helpers.areSameLength([1, 2], [5, 8, 9, 12])).toBe(false);
        expect(helpers.areSameLength(5, 2)).toBe(false);
        expect(helpers.areSameLength({ key: "value"}, { key: "value"})).toBe(false);
        expect(helpers.areSameLength(true, true)).toBe(false)
        expect(helpers.areSameLength(null, null)).toBe(false)
    })
    it('should compare two strings and return true if they are the same length', () => {
        expect(helpers.areSameLength('', '')).toBe(true)
        expect(helpers.areSameLength('seventy', 'five')).toBe(false)
    })
})

describe('areEqual', () => {
    it('should test whether two values are strictly equivalent', () => {
        expect(helpers.areEqual('five', 'five')).toBe(true)
        expect(helpers.areEqual(['a'], ['a', 'b'])).toEqual(false)
        expect(helpers.areEqual({key: 'value'}, [])).toBe(false)
        expect(helpers.areEqual({key: 'value'}, {key: 'value'})).toBe(false)
        expect(helpers.areEqual(17, '17')).toBe(false)
    })
})

describe('lessThanNinety', () => {
    it('should test if a value is less than 90', () => {
        expect(helpers.lessThanNinety(89.999999999999)).toBe(true)
        expect(helpers.lessThanNinety(100)).toBe(false)
        expect(helpers.lessThanNinety(-90)).toBe(true)
        expect(helpers.lessThanNinety(90.000000000000000000000001)).toBe(false)
        expect(helpers.lessThanNinety(90)).toBe(false)
        expect(helpers.lessThanNinety(-0)).toBe(true)
        expect(helpers.lessThanNinety(0)).toBe(true)
    })
    it('should return NaN for non-numerical values', () => {
        expect(helpers.lessThanNinety([1])).toBe(NaN)
        expect(helpers.lessThanNinety({ key: 'value' })).toBe(NaN)
        expect(helpers.lessThanNinety(true)).toBe(NaN)
        expect(helpers.lessThanNinety(null)).toBeNaN()
        expect(helpers.lessThanNinety('3')).toBe(NaN)
    })
})

describe('greaterThanFifty', () => {
    it('should test if a number is greater than 50', () => {
        expect(helpers.greaterThanFifty(50.01)).toBe(true)
        expect(helpers.greaterThanFifty(49.99999)).toBe(false)
        expect(helpers.greaterThanFifty(-2)).toBe(false)
        expect(helpers.greaterThanFifty(100)).toBe(true)
        expect(helpers.greaterThanFifty(-0)).toBe(false)
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.greaterThanFifty([])).toBe(NaN)
        expect(helpers.greaterThanFifty({key: 'value'})).toBe(NaN)
        expect(helpers.greaterThanFifty('5')).toBe(NaN)
        expect(helpers.greaterThanFifty(null)).toBe(NaN)
        expect(helpers.greaterThanFifty(true)).toBe(NaN)

    })
})

describe('add', () => {
    it('should add two numbers together', () => {
        expect(helpers.add(7,-1)).toBe(6)
        expect(helpers.add(17, 2)).toBe(19)
        expect(helpers.add(.5, 2)).toBe(2.5)
        expect(helpers.add(-10,20)).toBe(10)
      })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.add('2', 5)).toBe(NaN)
        expect(helpers.add({key: 'value'}, {key: 'value'})).toBeNaN()
        expect(helpers.add([1,2], [3,4])).toBe(NaN)
        expect(helpers.add(true, true)).toBeNaN()
        expect(helpers.add(null, 0)).toBe(NaN)
    })
})

describe('subtract', () => {
    it('should subract one number from another', () => {
        expect(helpers.subtract(2, 17)).toBe(-15)
        expect(helpers.subtract(-0, 2)).toBe(-2)
        expect(helpers.subtract(7, 2)).toBe(5)
        expect(helpers.subtract(10, -.2)).toBe(10.2)
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.subtract([], [])).toBe(NaN)
        expect(helpers.subtract(null, 7)).toBe(NaN)
        expect(helpers.subtract('12', 5)).toBe(NaN)
        expect(helpers.subtract({key: 'value'}, [])).toBe(NaN)
        expect(helpers.subtract(true)).toBe(NaN)
    })
})

describe('divide', () => {
    it('should divide one number by another', () => {
        expect(helpers.divide(7, 1)).toBe(7)
        expect(helpers.divide(0, 7)).toBe(0)
        expect(helpers.divide(-.2, 5)).toBe(-0.04)
        expect(helpers.divide(25, 5)).toBe(5)
    })    
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.divide([], 5)).toBe(NaN)
        expect(helpers.divide({key: 'value'}, 7)).toBe(NaN)
        expect(helpers.divide('string', 'thing')).toBe(NaN)
        expect(helpers.divide(true)).toBe(NaN)
        expect(helpers.divide(5, null)).toBeNaN()
    })
})

describe('multiply', () => {
    it('should take two values and multiply them together', () => {
        expect(helpers.multiply(-2,5)).toBe(-10)
        expect(helpers.multiply(-5,-2)).toBe(10)
        expect(helpers.multiply(5, 5)).toBe(25)
        expect(helpers.multiply(0.5, 20)).toBe(10)

    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.multiply([1,2], [])).toBe(NaN)
        expect(helpers.multiply(true, false)).toBe(NaN)
        expect(helpers.multiply({key: 'value'}, {key: 'value'}))      
        expect(helpers.multiply(null, 10)).toBe(NaN)
        expect(helpers.multiply('7', 2)).toBe(NaN)
    })
})

describe('getRemainder', () => {
    it('should divide two numbers and return whatever is left over from the division', () => {
        expect(helpers.getRemainder(25, 5)).toBe(0)
        expect(helpers.getRemainder(-2,5)).toBe(-2)
        expect(helpers.getRemainder(-5,-2)).toBe(-1)
        expect(helpers.getRemainder(25, 4)).toBe(1)
        expect(helpers.getRemainder(.5, 1)).toBe(.5)

    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.getRemainder('5', 12)).toBe(NaN)
        expect(helpers.getRemainder([1, 2], 7)).toBe(NaN)
        expect(helpers.getRemainder(undefined, 7)).toBe(NaN)
        expect(helpers.getRemainder(true, true)).toBeNaN()
        expect(helpers.getRemainder({key: 'value'}, {key: 'value'})).toBeNaN()
    })
})

describe('isEven', () => {
    it('should return true if a number is even', () => {
        expect(helpers.isEven(16)).toBe(true)
        expect(helpers.isEven(17)).toBe(false)
        expect(helpers.isEven(.2)).toBe(false)
        expect(helpers.isEven(-2)).toBe(true)
        expect(helpers.isEven(-5)).toBe(false)
    })    
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.isEven('5')).toBe(NaN)
        expect(helpers.isEven(undefined)).toBe(NaN)
        expect(helpers.isEven([1,5,3])).toBe(NaN)
        expect(helpers.isEven({key: 'value'})).toBe(NaN)
    })
})

describe('isOdd', () => {
    it('should return true if a number is odd', () => {
        expect(helpers.isOdd(3)).toBe(true)
        expect(helpers.isOdd(0)).toBe(false)
        expect(helpers.isOdd(-5)).toBe(false)
        expect(helpers.isOdd(.5)).toBe(false)
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.isOdd('5')).toBe(NaN)
        expect(helpers.isOdd([1,2,5])).toBe(NaN)
        expect(helpers.isOdd({key: 'value'})).toBe(NaN)
        expect(helpers.isOdd(true)).toBeNaN()
        expect(helpers.isOdd(null)).toBe(NaN)        
    })
})

describe('square', () => {
    it('should take a number and multiply it by itself to provide the square', () => {
        expect(helpers.square(5)).toBe(25)
        expect(helpers.square(.5)).toBe(0.25)
        expect(helpers.square(-2)).toBe(4)
        expect(helpers.square(0)).toBe(0)
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.square(null)).toBe(NaN)
        expect(helpers.square(true)).toBe(NaN)
        expect(helpers.square({key: 'value'})).toBe(NaN)
        expect(helpers.square([1,2,3])).toBe(NaN)
        expect(helpers.square('5')).toBe(NaN)
    })
})

describe('cube', () => {
    it('should take a number and multiply it by itself thrice', () => {
        expect(helpers.cube(3)).toBe(27)
        expect(helpers.cube(-2)).toBe(-8)
        expect(helpers.cube(.2)).toBe(0.008000000000000002)
        expect(helpers.cube(0)).toBe(0)
    })        
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.cube(null)).toBe(NaN)
        expect(helpers.cube(true)).toBe(NaN)
        expect(helpers.cube({key: 'value'})).toBe(NaN)
        expect(helpers.cube([1,2,3])).toBe(NaN)
        expect(helpers.cube('8')).toBe(NaN)
    })
})

describe('raiseToPower', () => {
    it('should take a number and raise it to the power of another number', () => {
        expect(helpers.raiseToPower(2,2)).toBe(4)
        expect(helpers.raiseToPower(-5, 3)).toBe(-125)
        expect(helpers.raiseToPower(.5, 2)).toBe(.25)
        expect(helpers.raiseToPower(0,10)).toBe(0)

    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.raiseToPower(null)).toBe(NaN)
        expect(helpers.raiseToPower(true)).toBe(NaN)
        expect(helpers.raiseToPower([1,2,5])).toBe(NaN)
        expect(helpers.raiseToPower({key: 'value'})).toBe(NaN)
        expect(helpers.raiseToPower('4', '2')).toBe(NaN)
    })
})

describe('roundNumber', () => {
    it('should return the value of a number rounded to the nearest integer', () => {
        expect(helpers.roundNumber(24.5)).toBe(25)
        expect(helpers.roundNumber(.4)).toBe(0)
        expect(helpers.roundNumber(-2.2)).toBe(-2)
        expect(helpers.roundNumber(-9.9)).toBe(-10)
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.roundNumber([2,3])).toBe(NaN)
        expect(helpers.roundNumber(true)).toBe(NaN)
        expect(helpers.roundNumber({key: 'value'})).toBe(NaN)
        expect(helpers.roundNumber('4')).toBe(NaN)
        expect(helpers.roundNumber(null)).toBe(NaN)
    })
})

describe('roundUp', () => {
    it('should take a number and round up to a whole number', () => {
        expect(helpers.roundUp(5.000000001)).toBe(6)
        expect(helpers.roundUp(-.2)).toBe(-0)
        expect(helpers.roundUp(12)).toBe(12)        
        expect(helpers.roundUp(.1)).toBe(1)
        expect(helpers.roundUp(-9.9)).toBe(-9)    
    })
    it('should return NaN if a non-numeric value is entered', () => {
        expect(helpers.roundUp([1,2,3])).toBeNaN()
        expect(helpers.roundUp('6.02')).toBeNaN()
        expect(helpers.roundUp(null)).toBeNaN()
        expect(helpers.roundUp(true)).toBeNaN()
        expect(helpers.roundUp({key: 'object'})).toBe(NaN)
    })
})

describe('addExclamationPoint', () => {
    it('should take a string and add an exclamation point', () => {
        expect(helpers.addExclamationPoint('Hello world')).toBe('Hello world!')
        expect(helpers.addExclamationPoint('Now with multiple!!!')).toBe('Now with multiple!!!!')
        expect(helpers.addExclamationPoint(5)).toBe('5!')
        expect(helpers.addExclamationPoint([1,2,3])).toBe('1,2,3!')
        expect(helpers.addExclamationPoint({key: 'value'})).toBe('[object Object]!')
        expect(helpers.addExclamationPoint(false)).toBe('false!')
    })
})

describe('combineNames', () => {
    it('should take a first and last name and combine them', () => {
        expect(helpers.combineNames('James', 'Bond')).toBe('James Bond')
        expect(helpers.combineNames(5, 3)).toBe('5 3')
        expect(helpers.combineNames({key: 'value'}, {key: 'value'})).toBe('[object Object] [object Object]')
        expect(helpers.combineNames([1,5,2], [2,3,4])).toBe('1,5,2 2,3,4')
        expect(helpers.combineNames(true, false)).toBe('true false')
        expect(helpers.combineNames('00', '7')).toBe('00 7')
    })
})

describe('getGreeting', () => {
    it('should take a name and return a greeting with that name', () => {
        expect(helpers.getGreeting('Bond')).toBe('Hello Bond!')
        expect(helpers.getGreeting('007')).toBe('Hello 007!')
        expect(helpers.getGreeting(7)).toBe('Hello 7!')
        expect(helpers.getGreeting({key: 'value'})).toBe('Hello [object Object]!')
        expect(helpers.getGreeting(false)).toBe('Hello false!')
    })
})

describe('getRectangleArea', () => {
    it('should multiply base times width to return the area of a rectangle', () => {
        expect(helpers.getRectangleArea(7,5)).toBe(35)        
        expect(helpers.getRectangleArea(5, 5)).toBe(25)
        expect(helpers.getRectangleArea(0.5, 20)).toBe(10)
        expect(helpers.getRectangleArea(-2,5)).toBe(-10)
        expect(helpers.getRectangleArea(0, 5)).toBe(0)
    })
    it('should return NaN if non-numeric values are entered', () => {
        expect(helpers.getRectangleArea(null, 10)).toBe(NaN)
        expect(helpers.getRectangleArea('7', 2)).toBe(NaN)
        expect(helpers.getRectangleArea([1,2], [])).toBe(NaN)
        expect(helpers.getRectangleArea(true)).toBe(NaN)
        expect(helpers.getRectangleArea({key: 'value'}, {key: 'value'})).toBeNaN()
    })
})

describe('getTriangleArea', () => {
    it('should return base times height times .5', () => {
        expect(helpers.getTriangleArea(7, 7)).toBe(24.5)
        expect(helpers.getTriangleArea(.5, .2)).toBe(0.05)
        expect(helpers.getTriangleArea(-10, 50)).toBe(-250)
        expect(helpers.getTriangleArea(0, 2)).toBe(0)
    })
    it('should return NaN if non-numeric values are entered', () => {
        expect(helpers.getTriangleArea(false, true)).toBe(NaN)
        expect(helpers.getTriangleArea(null, null)).toBeNaN()
        expect(helpers.getTriangleArea({key: 'value'}, 7)).toBe(NaN)
        expect(helpers.getTriangleArea([1,2,5], 2)).toBe(NaN)
        expect(helpers.getTriangleArea('2', '46')).toBe(NaN)        
    })
}) 

describe('getCircleArea', () => {
    it('should return pi(r^2)', () => {
        expect(helpers.getCircleArea(3.141592654)).toBe(31.006276688396976)
        expect(helpers.getCircleArea(-2)).toBe(12.566370614359172)
        expect(helpers.getCircleArea(.2)).toBe(0.12566370614359174)
        expect(helpers.getCircleArea(0)).toBe(0)
        expect(helpers.getCircleArea(2)).toBe(12.566370614359172)
    })
    it('should return NaN when non-numeric values are entered', () => {
        expect(helpers.getCircleArea(null)).toBeNaN()
        expect(helpers.getCircleArea('5')).toBeNaN()
        expect(helpers.getCircleArea({key: 'value'})).toBeNaN()
        expect(helpers.getCircleArea([1,2,3])).toBeNaN()
        expect(helpers.getCircleArea(true)).toBeNaN()        
    })
})

describe('getRectangularPrismVolume', () => {
    it('should return width times hieght times length', () => {
        expect(helpers.getRectangularPrismVolume(2,5,10)).toBe(100)
        expect(helpers.getRectangularPrismVolume(-5,10,2)).toBe(-100)
        expect(helpers.getRectangularPrismVolume(-.5,20,3)).toBe(-30)
        expect(helpers.getRectangularPrismVolume(0,5,10)).toBe(0)
        expect(helpers.getRectangularPrismVolume(-5,0,10)).toBe(-0)
    })
    it('should return NaN when non-numeric values are entered', () => {
        expect(helpers.getRectangularPrismVolume('7', '8', '2')).toBeNaN()
        expect(helpers.getRectangularPrismVolume([1,2,3], [2,3,4], [3,4,5])).toBeNaN()
        expect(helpers.getRectangularPrismVolume(null, null, null)).toBeNaN()
        expect(helpers.getRectangularPrismVolume({key: 'value'}, {key: 'value'}, {key: 'value'})).toBeNaN()
        expect(helpers.getRectangularPrismVolume(true, true, false)).toBeNaN()        
    })
})