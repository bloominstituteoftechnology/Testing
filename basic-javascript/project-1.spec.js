const helpers = require('./project-1');

// start testing!



describe.only('project-1', ()=>{

describe('multipyByTen', ()=>{
    it('should multiply num by 10', ()=>{
    const variable = Math.floor(Math.random())
    expect(helpers.multiplyByTen(variable)).toBe(variable * 10)
    
    
    })

})
describe('subtractFive', ()=>{
    it('should subtract by five', ()=>{

        const variable = Math.floor(Math.random())
        expect(helpers.subtractFive(variable)).toBe(variable - 5)
}) 
})

describe('areSameLength', ()=>{
    it('should be same length', ()=>{
        const variable = "Math.floor(Math.random())"
        expect(helpers.areSameLength(variable.length, variable.length)).toBe(true)
}) 
})

describe('areEqual', ()=>{
    it('should return whether values are equal', () => {
        expect(helpers.areEqual(5, 5)).toBeTruthy();
        expect(helpers.areEqual(5, 2)).toBeFalsy();
      });
})

describe('lessThanNinety', ()=>{
    it('should return whether value is less than ninety', () => {
        expect(helpers.lessThanNinety(100)).toBeFalsy();
        expect(helpers.lessThanNinety(3)).toBeTruthy();
      });
})

describe('greaterThanFifty', ()=>{
    it('should return whether value is greater than fifty', () => {
        expect(helpers.greaterThanFifty(100)).toBeTruthy();
        expect(helpers.greaterThanFifty(1)).toBeFalsy();
      });
})

describe('add', ()=>{
    it('should return addition of values', () => {
        expect(helpers.add(1, 2)).toBe(3);
      });
})

describe('subtract', ()=>{
    it('should return subtraction of second value from first', () => {
        expect(helpers.subtract(20, 10)).toBe(10);
      }); 
})

describe('divide', ()=>{
    it('should return division of first value from second value', () => {
        expect(helpers.divide(20, 10)).toBe(2);
      }); 
})

describe('multiply', ()=>{
    it('should return multiplication of values', () => {
        expect(helpers.multiply(1, 10)).toBe(10);
      });
})  

describe('getRemainder', ()=>{
    it('should return remainder of first value divided by second value', () => {
        expect(helpers.getRemainder(10, 3)).toBe(1);
      });
})

describe('isEven', ()=>{
    it('should return whether value is even', () => {
        expect(helpers.isEven(2)).toBeTruthy();
        expect(helpers.isEven(3)).toBeFalsy();
      });
})

describe('isOdd', ()=>{
    it('should return whether value is odd', () => {
        expect(helpers.isOdd(3)).toBeTruthy();
        expect(helpers.isOdd(2)).toBeFalsy();
      });
})

describe('square', ()=>{
    it('returns square of value', () => {
        expect(helpers.square(2)).toBe(4);
      });
})

describe('cube', ()=>{
    it('returns cube of value', () => {
        expect(helpers.cube(2)).toBe(8);
      });
})

describe('raiseToPower', ()=>{
    it('returns value of first value to the power of second value', () => {
        expect(helpers.raiseToPower(2, 4)).toBe(16);
      });
})

describe('roundNumber', ()=>{
    it('returns rounded value', () => {
        expect(helpers.roundNumber(2.3)).toBe(2);
      });
})

describe('roundUp', ()=>{
    it('returns value rounded up', () => {
        expect(helpers.roundUp(2.3)).toBe(3);
      });
})

describe('addExclamationPoint', ()=>{
    it('returns exclamation point concat to string value', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!');
      });
})

describe('combineNames', ()=>{
    it('returns full name', () => {
        expect(helpers.combineNames('joe', 'hoang')).toBe('joe hoang');
      });
})

describe('getGreeting', ()=>{
    it('returns greeting of name', () => {
        expect(helpers.getGreeting('joe')).toBe('Hello joe!');
      });
})

describe('getRectangleArea', ()=>{
    it('returns area of rectangle given height, width values', () => {
        expect(helpers.getRectangleArea(2, 3)).toBe(6);
      });
})

describe('getCircleArea', ()=>{
    it('returns circle area given radius', () => {
        expect(helpers.getCircleArea(3)).toBe(Math.PI * 9);
      });   
})

describe('getTriangleArea', ()=>{
    it('returns area of a triangle given base, height', () => {
        expect(helpers.getTriangleArea(10, 10)).toBe(50);
      });
})


describe('getRectangularPrismVolume', ()=>{
    it('returns rectangular prism volume given length, width, height', () => {
        expect(helpers.getRectangularPrismVolume(10, 10, 5)).toBe(500);
      });
})











})
