const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the bigger interger', () =>{    
    expect(funcs.getBiggest(5,6)).toBe(6);    
})

it('should return greeting in selected language', () =>{    
    expect(funcs.greeting('German')).toBe('Guten Tag!');    
})

it('should check if number is 5 or 10', () =>{    
    expect(funcs.isTenOrFive(5)).toBe(true);    
})

it('check if number is between 20 and 50', () =>{    
    expect(funcs.isInRange(40)).toBe(true);    
})

it('check if number is an integer', () =>{    
    expect(funcs.isInteger(3.4)).toBe(false);    
})

it('check if number is divisable by 5 or 3', () =>{    
    expect(funcs.fizzBuzz(25)).toBe('buzz'); 
    expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');    
})

it('check if number is prime', () =>{    
    expect(funcs.isPrime(7)).toBe(true);    
})

it('returns first in an array', () =>{   
    let arr = [4,2,5];
    expect(funcs.returnFirst(arr)).toBe(4);   
})

it('returns last in an array', () =>{   
    let arr = [4,2,5];
    expect(funcs.returnLast(arr)).toBe(5);   
})

it('returns array length', () =>{   
    let arr = [4,2,5];
    expect(funcs.getArrayLength(arr)).toBe(3);   
})

it('should increment arr by one', () =>{ 
    let arr = [4,2,5];   
    expect(funcs.incrementByOne(arr)).toEqual([5,3,6]);    
})

it('add item to an array', () =>{    
    let arr = [4,2,5];
    expect(funcs.addItemToArray(arr,3)).toEqual([4,2,5,3]);    
})

it('add item to front of array', () =>{    
    let arr = [4,2,5];
    expect(funcs.addItemToFront(arr,3)).toEqual([3,4,2,5]);    
})

it('array of words into a sentence', () =>{    
    let arr = ['This', 'is', 'a', 'bunch', 'of', 'junk']
    expect(funcs.wordsToSentence(arr)).toBe('This is a bunch of junk');    
})

it('should add numbers of arr', () =>{  
    let arr = [4,2,5];  
    expect(funcs.addNumbers(arr)).toBe(11);    
})

it('should return average of scores', () =>{  
    let arr = [4,2,5,9];  
    expect(funcs.averageTestScore(arr)).toBe(5);    
})

it('should return the biggest number', () =>{    
    let arr = [4,2,5,9,7];
    expect(funcs.largestNumber(arr)).toBe(9);    
})
