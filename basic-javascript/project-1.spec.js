const helpers = require('./project-1');

describe('math helpers', ()=>{

    it('should return a value multiplied by 10', () => {
        //arrange
        const value = 5;
        const expected = 50;
        //act
        const product = helpers.multiplyByTen(value)
        //assert/expected
        expect(product).toEqual(expected);
    })
    
    it('should return a value minus 5', () => {
        const value = 25;
        const expected = 20;
        const result = helpers.subtractFive(value);
        expect(result).toBe(expected);
    })
    
    it('should return true if the two STRING arguments are equal in length', () => {
        const string1 = 'if you are happy';
        const string2 = 'and you know it!';
        const result = helpers.areSameLength(string1, string2);
        expect(result).toBeTruthy();
    })
    
    it('should return true if both passed arguments are equal', () => {
        const value1 = 5;
        const value2 = 5;
        const expected = true;
        const result = helpers.areEqual(value1, value2);
        expect(result).toBe(expected);
        
    })
    
    it('should return true if argument is a number less than 90', () => {
        const value1 = 89;
        const expected = true;
        const result = helpers.lessThanNinety(value1);
        expect(result).toBe(expected);
    })
    
    it('should return true if value passed is greater than 50', ()=>{
      const value1 = 51;
      const limit = 50;
      const expected = false;
      const result = helpers.greaterThanFifty(value1);
      expect(value1).toBeGreaterThan(limit);
      expect(result).toBeTruthy();
    })

    it('should return the sum of two values passed', ()=>{
      const value1 = 3;
      const value2 = 5;
      const expected = 8;
      const result = helpers.add(value1, value2);
      expect(result).toEqual(expected);
    })

    it('should return the first value passed minus the second value passed', () => {
      const value1 = 10;
      const value2 = 6;
      const expected = 4;
      const result = helpers.subtract(value1, value2);
      expect(result).toEqual(expected);
    })

    it('should divide the first value passed by the second value passed', ()=>{
     const value1 = 10;
     const value2 = 2;
     const expected = 5;
     const result = helpers.divide(value1, value2);
     expect(result).toEqual(expected);
    })

    it('should multiply the first value passed by the second value passed', () => {
      const value1 = 10;
      const value2 = 2;
      const expected = 20;
      const result = helpers.multiply(value1, value2);
      expect(result).toEqual(expected);
    })

    it('should get the remainder from dividing the first value passed by the second value passed', () => {
      const value1 = 20;
      const value2 = 3;
      const expected = 2;
      const result = helpers.getRemainder(value1, value2);
      expect(result).toEqual(expected);
    })

    it('should return true if value passed is an even number', () => {
      const value1 = 20;
      const result = helpers.isEven(value1);
      expect(result).toBeTruthy();
    })
    
    it('should return true if value passed is an odd number', () => {
      const value1 = 19;
      const result = helpers.isOdd(value1);
      expect(result).toBeTruthy();
    })

    it('should square the value passed', () => {
      const max = Number.MAX_VALUE;
      const value1 = 5;
      const result = helpers.square(value1);
      expect(result).toEqual(value1*value1);
      expect(result).toBeLessThanOrEqual(max);
    })

    it('should cube the value passed', () => {
      const max = Number.MAX_VALUE;
      const value1 = 5;
      const result = helpers.cube(value1);
      expect(result).toEqual(value1 * value1* value1);
      expect(result).toBeLessThanOrEqual(max);
    })

    it('should take the first value passed, and raise it to the power of the second value passed', () => {
      const max = Number.MAX_VALUE;
      const value1 = 5;
      const value2 = 2;
      const result = helpers.raiseToPower(value1, value2);
      expect(result).toEqual(value1 ** value2);
      expect(result).toBeLessThanOrEqual(max);
    })

})