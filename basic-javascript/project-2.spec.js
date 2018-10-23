const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the bigger number', () =>{    
    expect(funcs.getBiggest(1,2)).toBe(2);    
})
it('should return the greeting in the selected language', () =>{    
    expect(funcs.greeting('German')).toBe('Guten Tag!');    
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('Gibberish')).toBe('Hello!');
})
it('should check if a number is 5 or 10', () =>{    
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(1)).toBe(false);        
})
it('should check if number is between 20 and 50', () =>{    
    expect(funcs.isInRange(49)).toBe(true);
    expect(funcs.isInRange(51)).toBe(false);    
})
it('should check if number is an integer', () =>{    
    expect(funcs.isInteger(1)).toBe(true);
    expect(funcs.isInteger(.5)).toBe(false);      
})
it('should return fizz if a number is 3, should return buzz if number is divisible 5', () =>{    
    expect(funcs.fizzBuzz(12)).toBe('fizz'); 
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(10)).toBe('buzz');        
})
it('should check if a number is prime', () =>{    
    expect(funcs.isPrime(5)).toBe(true);    
})
 it('should return first interger in an array', () =>{   
    let arr = [77,1,78];
    expect(funcs.returnFirst(arr)).toBe(77);   
})
 it('should return last integer in an array', () =>{   
    let arr = [77,1,78];
    expect(funcs.returnLast(arr)).toBe(78);   
})
 it('should return length of an array', () =>{   
    let arr = [77,1,78, 79];
    expect(funcs.getArrayLength(arr)).toBe(4);   
})
 it('should increment arr by one', () =>{ 
    let arr = [1,3,2];   
    expect(funcs.incrementByOne(arr)).toEqual([2,4,3]);    
})
 it('should return the array with the item', () =>{    
    let arr = [1,2,3];
    expect(funcs.addItemToArray(arr,1)).toEqual([1,2,3,1]);    
})
 it('should add item to the front of an array', () =>{    
    let arr = [1,2,3];
    expect(funcs.addItemToFront(arr,1)).toEqual([1,1,2,3]);    
})
 it('should return array of words as a sentence', () =>{    
    expect(funcs.wordsToSentence(['Woah, Woah, Gypsy'])).toBe('Woah, Woah, Gypsy');    
})
it('should return whether an array contains an item', () => {
    expect(funcs.contains([1, 2, 3], 2)).toBe(true);
    expect(funcs.contains([1, 2, 3], 4)).toBe(false);
  });

 it('should return the sum of the array', () =>{  
    let arr = [1,2,3];  
    expect(funcs.addNumbers(arr)).toBe(6);    
})
 it('should return the average of the array', () =>{  
    let arr = [5,10,15];  
    expect(funcs.averageTestScore(arr)).toBe(10);    
})
 it('should return the largest number of the array', () =>{    
    let arr = [1,2,3,99,6];
    expect(funcs.largestNumber(arr)).toBe(99);    
})