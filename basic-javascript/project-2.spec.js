const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//-------------------------GET BIGGER NUMBER------------------------------------------------
it('should get the bigger number from the two provided numbers', () => {
    expect(funcs.getBiggest(4,2)).toBe(4);
    expect(funcs.getBiggest(2,2)).toBe(2);
    expect(funcs.getBiggest(1,5)).toBe(5);
});
//-----------------------------GREET USER --------------------------------------------
test('should greet the user in the language passed as a parameter', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
  })
//--------------------------------NUMBER IS 5 OR 10-----------------------------------------
   test('should return true if the number is 5 or 10 else return false  ', () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(3)).toBe(false);
    expect(funcs.isTenOrFive(2)).toBe(false);
  })
//----------------------------LES THAN 50 GREATER THAN 20---------------------------------------------
   test('should return true if NUMBER passed is less than 50 and greater thatn 20', () => {

    expect(funcs.isInRange(50)).toBe(false);
    expect(funcs.isInRange(25)).toBe(true);
    expect(funcs.isInRange(55)).toBe(false);
     expect(funcs.isInRange('letters')).toBe(false);
  })
//---------------------------INTEGER----------------------------------------------
   test('should return true if number is an integer', () => {
    expect(funcs.isInteger(1)).toBe(true)
    expect(funcs.isInteger(2.3)).toBe(false)
  })
//----------------------------------FIZZBUZZ---------------------------------------
   test('should return fizz if divisible by three, return buzz if divisible by 5, and return fizzbuzz if divisible by 3 and 5', () => {
    expect(funcs.fizzBuzz(9)).toBe('fizz')
    expect(funcs.fizzBuzz(10)).toBe('buzz')
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
  })
//----------------------------------PRIME NUMBERS---------------------------------------
  test('should return true if number is prime number', () => {
    expect(funcs.isPrime(0)).toBe(false)
    expect(funcs.isPrime(2)).toBe(true)
    expect(funcs.isPrime(9)).toBe(false)
    expect(funcs.isPrime(1)).toBe(false)
    expect(funcs.isPrime(8)).toBe(false)
  })
//--------------------------------FIRST ITEM IN ARRAY-----------------------------------------
   test('should return the first item in array', () => {
    expect(funcs.returnFirst([1,2,3,4,5])).toBe(1)
    expect(funcs.returnFirst(['hi','bye','word',4,5])).toBe('hi')
  })
//-------------------------------LAST ITEM IN ARRAY------------------------------------------
   test('should return the the last item in array', () => {
      expect(funcs.returnLast([1,2,3,4,5])).toBe(5);
      expect(funcs.returnLast(['this','is','a','long','array'])).toBe('array');     
      expect(funcs.returnLast(['this','is','an','array',true])).toBe(true)
      expect(funcs.returnLast(['this','is','an','array',{'key': 'value'}])).toEqual({'key': 'value'});
    })
//---------------------------------LENGTH OF ARRAY----------------------------------------
   test('should get the length of array ', () => {
      expect(funcs.getArrayLength([1,2,3,4,5])).toBe(5);
      expect(funcs.getArrayLength(['this','is','an','even','longer','array'])).toBe(6);
      expect(funcs.getArrayLength(['this','is','an','array',{'key': 'value'}])).toEqual(5);
      expect(funcs.getArrayLength(['length','of','array',false])).toBe(4);
  })