const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 2 Answers', () => {
  describe('Gets Biggest of Two Numbers', () => {
    it('Get Biggest Cases', ()=>{
      expect(typeof funcs.getBiggest(3, 4) === 'number').toBeTruthy();
      expect(funcs.getBiggest(-5, -98)).toEqual(-5);
      expect(funcs.getBiggest(21, 20.9)).toEqual(21);
    });
  });
  describe('Gets Biggest of Two Numbers', () => {
    it('Get Biggest Cases', ()=>{
      expect(typeof funcs.greeting('Japanese') === 'string').toBeTruthy();
      expect(funcs.greeting('German')).toEqual('Guten Tag!');
      expect(funcs.greeting('Spanish')).toEqual('Hola!');
      expect(funcs.greeting('Italian')).toEqual('Hello!');
    });
  });
  describe('Checks if a number is either 5 or 10', () => {
    it('returns a boolean', ()=>{    
      expect(funcs.isTenOrFive(4)).toBeDefined();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(65)).toBeFalsy();
      expect(funcs.isTenOrFive('five or ten')).toBeFalsy();
    });
  });
  describe('Checks if a number is between 20 an 50', () => {
    it('returns a boolean', ()=>{    
      expect(funcs.isInRange(4)).toBeDefined();
      expect(funcs.isInRange(35)).toBeTruthy();
      expect(funcs.isInRange(26)).toBeTruthy();
      expect(funcs.isInRange(65)).toBeFalsy();
      expect(funcs.isInRange('Thirty-five')).toBeFalsy();
    });
  });
  describe('Checks if an input is an integer', () => {
    it('returns a boolean', ()=>{    
      expect(funcs.isInteger(4.75)).toBeDefined();
      expect(funcs.isInteger(35)).toBeTruthy();
      expect(funcs.isInteger(26.32)).toBeFalsy();
    });
  });
  describe('Checks if an input is divisible by 3 or 5', () => {
    it('returns fizz, buzz, fizzbuzz or the num', ()=>{    
      expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
      expect(funcs.fizzBuzz(35)).toEqual('buzz');
      expect(funcs.fizzBuzz(9)).toEqual('fizz');
      expect(funcs.fizzBuzz(2)).toEqual(2);
    });
  });
  describe('Checks if a number is prime', () => {
    it('returns a boolean', ()=>{    
      expect(funcs.isPrime(4)).toBeDefined();
      expect(funcs.isPrime(11)).toBeTruthy();
      expect(funcs.isPrime(7)).toBeTruthy();
      expect(funcs.isPrime(4)).toBeFalsy();
    });
  }); 
  describe('Returns first item of an array', () => {
    it('returns array[0]', ()=>{    
      expect(funcs.returnFirst([5,6,4,6])).toEqual(5);
      expect(funcs.returnFirst(['hello', 'whatas', 'up'])).toEqual('hello');
    });
  });
  describe('Returns last item of an array', () => {
    it('returns array[array.length - 1]', ()=>{    
      expect(funcs.returnLast([5,6,4,6])).toEqual(6);
      expect(funcs.returnLast(['hello', 'whatas', 'up'])).toEqual('up');
    });
  }); 
  describe('gets array length', () => {
    it('returns array length', ()=>{    
      expect(funcs.getArrayLength([5,6,4,6])).toEqual(4);
      expect(funcs.getArrayLength(['hello', 'whatas', 'up'])).toEqual(3);
    });
  }); 
  describe('increments array nums by one', () => {
    it('increment cases ', ()=>{    
      expect(funcs.incrementByOne([5,6,4,6])).toEqual([6,7,5,7]);
    });
  });
  describe('adds an item to an array(end)', () => {
    it('add item to array', ()=>{    
      expect(funcs.addItemToArray([5,6,4,6], 765)).toEqual([5,6,4,6, 765]);
    });
  });
  describe('adds an item to an array(front)', () => {
    it('add item to array', ()=>{    
      expect(funcs.addItemToFront([5,6,4,6], 35)).toEqual([35,5,6,4,6]);
    });
  });
  describe('turns array into string(sentence)', () => {
    it('sentence', ()=>{    
      expect(funcs.wordsToSentence(['word', 'is', 'what', 'sentence'])).toEqual('word is what sentence');
    });
  }); 
  describe('looks in array for item', () => {
    it('search array', ()=>{  
      const arr = ['word', 'is', 'what', 'sentence']    
      expect(funcs.contains(arr, 'is')).toEqual(true);
      expect(funcs.contains(arr, 'hello')).toEqual(false);
    });
  }); 
  describe('add array items together', () => {
    it('add array', ()=>{      
      expect(funcs.addNumbers([6,7,5,7])).toEqual(25);
      expect(funcs.addNumbers([68,77,55,74])).toEqual(274);
    });
  }); 
  describe('average test scores', () => {
    it('average', ()=>{      
      expect(funcs.averageTestScore([6,7,5,7])).toEqual(6.25);
      expect(funcs.averageTestScore([68,77,55,74])).toEqual(68.5);
    });
  });
  describe('find largest number', () => {
    it('largest', ()=>{      
      expect(funcs.largestNumber([6,7,5,65])).toEqual(65);
      expect(funcs.largestNumber([68,77,55,74])).toEqual(77);
    });
  });
});
