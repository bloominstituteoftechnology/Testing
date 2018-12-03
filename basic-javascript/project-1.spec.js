const helpers = require('./project-1');

// start testing!

describe('project-1 tests', () => {
  describe('multiply by ten', () => {
    it('returns a number', ()=>{      
      const input = 9;    
      const result = helpers.multiplyByTen(input);    
      expect(typeof result === 'number').toBeTruthy();
    });
    it('works with negatives', ()=>{      
        const result = -90;     
        expect(helpers.multiplyByTen(-9)).toEqual(result);
    });
  })

  describe('subtract by five', () => {
    it('returns a number', ()=>{
        const input = 9;      
        const result = helpers.subtractFive(input);      
        expect(typeof result === 'number').toBeTruthy();
    });
    it('subtracts successfully', ()=>{
      const result = -7;    
      expect( helpers.subtractFive(-2)).toEqual(result);
    });
  });

  describe('Strings are the same length', () => {
    it('returns a boolean', ()=>{    
      expect(helpers.areSameLength('hello', 'party')).toBeDefined();
      expect(helpers.areSameLength('hello', 'party')).toBeTruthy();
      expect(helpers.areSameLength('hi', 'party')).toBeFalsy();
    });
  });
  describe('numbers are equal', () => {
    it('returns a boolean', ()=>{          
      expect(helpers.areEqual(5, 3)).toBeDefined();
      expect(helpers.areEqual(5, 3)).toBeFalsy();
      expect(helpers.areEqual(5, 5)).toBeTruthy();
    });
  });

  describe('Number is less than 90', () => {
    it('returns a boolean', ()=>{      
      expect(helpers.lessThanNinety(100)).toBeDefined();
      expect(helpers.lessThanNinety(-3435)).toBeTruthy();
      expect(helpers.lessThanNinety(25000)).toBeFalsy();
    });
  });

  describe('Number is more than fifty', () => {
    it('returns a boolean', ()=>{
      expect(helpers.greaterThanFifty(100)).toBeDefined();
      expect(helpers.greaterThanFifty(86)).toBeTruthy();
      expect(helpers.greaterThanFifty(4)).toBeFalsy();
    });
  });
  describe('Adds Two Numbers', () => {
    it('Add Cases', ()=>{
      expect(typeof helpers.add(3,4) === 'number').toBeTruthy();
      expect(helpers.add(-5, -98)).toEqual(-103);
      expect(helpers.add('hi','there')).toEqual('hithere');
    });
  });
  describe('Subtracts Two Numbers', () => {
    it('Subtract Cases', ()=>{
      expect(typeof helpers.subtract(3,4) === 'number').toBeTruthy();
      expect(helpers.subtract(-5, -98)).toEqual(93);
      expect(helpers.subtract('hi','there')).toBeNaN();
    });
  });
  describe('Divides first num by 2nd num', () => {
    it('Divide Cases', ()=>{
      expect(typeof helpers.divide(3,4) === 'number').toBeTruthy();
      expect(helpers.divide(-25, -5)).toEqual(5);
      expect(helpers.divide('hi','there')).toBeNaN();
    });
  });
  describe('multiplies first num by 2nd num', () => {
    it('multiply Cases', ()=>{
      expect(typeof helpers.multiply(3,4) === 'number').toBeTruthy();
      expect(helpers.multiply(-25, -5)).toEqual(125);
      expect(helpers.multiply('hi','there')).toBeNaN();
    });
  });
  describe('finds remainder of 2 nums', () => {
    it('remainder Cases', ()=>{
      expect(typeof helpers.getRemainder(3,4) === 'number').toBeTruthy();
      expect(helpers.getRemainder(-25, -5)).toEqual(-0);
      expect(helpers.getRemainder(100, 99)).toEqual(1);
      expect(helpers.getRemainder('hi','there')).toBeNaN();
    });
  });
  describe('Number is Even', () => {
    it('returns a boolean', ()=>{
      expect(helpers.isEven(100)).toBeDefined();
      expect(helpers.isEven(86)).toBeTruthy();
      expect(helpers.isEven(3)).toBeFalsy();
    });
  });
  describe('Number is Odd', () => {
    it('returns a boolean', ()=>{
      expect(helpers.isOdd(22)).toBeDefined();
      expect(helpers.isOdd(9)).toBeTruthy();
      expect(helpers.isOdd(4)).toBeFalsy();
    });
  });  
  describe('returns the square of a num', () => {
    it('square Cases', ()=>{
      expect(typeof helpers.square(69) === 'number').toBeTruthy();
      expect(helpers.square(-2)).toEqual(4);
      expect(helpers.square(10)).toEqual(100);
      expect(helpers.square('hi')).toBeNaN();
    });
  });
  describe('returns the cube of a num', () => {
    it('Cube Cases', ()=>{
      expect(typeof helpers.cube(5) === 'number').toBeTruthy();
      expect(helpers.cube(-2)).toEqual(-8);
      expect(helpers.cube(10)).toEqual(1000);
      expect(helpers.cube('hi')).toBeNaN();
    });
  });
  describe('Raises a number to another number power', () => {
    it('Exponent Cases', ()=>{
      expect(typeof helpers.raiseToPower(2, 2) === 'number').toBeTruthy();
      expect(helpers.raiseToPower(3, 3)).toEqual(27);
      expect(helpers.raiseToPower(10,5)).toEqual(100000);
      expect(helpers.raiseToPower('hi','there')).toBeNaN();
    });
  });
  describe('rounds a number', () => {
    it('round Cases', ()=>{
      expect(typeof helpers.roundNumber(69.6) === 'number').toBeTruthy();
      expect(helpers.roundNumber(3.99)).toEqual(4);
      expect(helpers.roundNumber(44.2)).toEqual(44);
      expect(helpers.roundNumber('hi')).toBeNaN();
    });
  });
  describe('rounds a number up', () => {
    it('round up Cases', ()=>{
      expect(typeof helpers.roundUp(69.6) === 'number').toBeTruthy();
      expect(helpers.roundUp(3.1)).toEqual(4);
      expect(helpers.roundUp(423.02)).toEqual(424);
      expect(helpers.roundUp('hi')).toBeNaN();
    });
  });
  describe('adds an exclamation point to a string', () => {
    it('add exclamation Cases', ()=>{
      expect(typeof helpers.addExclamationPoint('hello yo') === 'string').toBeTruthy();
      expect(helpers.addExclamationPoint('hi')).toEqual('hi!');
      expect(helpers.addExclamationPoint(423.02)).toEqual('423.02!');
    });
  });
  describe('combines two names', () => {
    it('Combine names Cases', ()=>{
      expect(typeof helpers.combineNames('Biff', 'Johnson') === 'string').toBeTruthy();
      expect(helpers.combineNames('Jeff', 'Jones')).toEqual('Jeff Jones');
      expect(helpers.combineNames(5, 5)).toEqual('5 5');
    });
  });
});






