const funcs = require('./project-2');

 
// ----------------- GET BIGGEST ------------------

it('return the larger value of the two parameters', () => {
    expect(funcs.getBiggest(100,200)).toBe(200); 
    expect(funcs.getBiggest(10, 20)).toBe(20); 
})

it('return second parameter if the two params are equal', () => {
    expect(funcs.getBiggest(44,999)).toBe(999); 
})

// -------------- GREETING ----------------------

it('return appropriate greeting for each case', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!'); 
    expect(funcs.greeting('Spanish')).toBe('Hola!'); 
    expect(funcs.greeting('dnwefhjbwekfb')).toBe('Hello!'); 
}); 

// ------------ IS 10 || 5 -----------------

it('return if the value is equal to 10 or to 5', () => {
    expect(funcs.isTenOrFive(10)).toBeTruthy(); 
    expect(funcs.isTenOrFive(5)).toBeTruthy(); 
    expect(funcs.isTenOrFive(8035)).toBeFalsy(); 
}); 

// -------------IS IN RANGE --------------

it('return whether value is > than 50 and < than 20', () => {
    expect(funcs.isInRange(20)).toBeFalsy(); 
    expect(funcs.isInRange(45)).toBeTruthy(); 
    expect(funcs.isInRange(100)).toBeFalsy(); 
}); 

// ------------- IS AN INTEGER -------------

it('return whether the parameter is an integer', () => {
    expect(funcs.isInteger(9.99)).toBeFalsy(); 
    expect(funcs.isInteger(10)).toBeTruthy(); 
}); 

// ------------- FIZZBUZZ ----------------

it('return "fizzbuzz" if num divisible both by 3 and 5', () => {
    expect(funcs.fizzBuzz(60)).toBe('fizzbuzz'); 
    expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
})

it('return "buzz" if num is divisible by 5', () => {
    expect(funcs.fizzBuzz(50)).toBe('buzz'); 
    expect(funcs.fizzBuzz(5)).toBe('buzz'); 
})

it('return "fizz" if num is divisible by 3', () => {
    expect(funcs.fizzBuzz(36)).toBe('fizz'); 
    expect(funcs.fizzBuzz(18)).toBe('fizz');
})

// ------------------- IS PRIME ------------------------------

it('return false if number is less than 0', () => {
    expect(funcs.isPrime(-1)).toBeFalsy(); 
    expect(funcs.isPrime(-25)).toBeFalsy(); 
})

it('return false if number is equal to 1 or 0 ', () => {
    expect(funcs.isPrime(20)).toBeFalsy(); 
    expect(funcs.isPrime(10)).toBeFalsy(); 
})

it('return whether the value greater than 1 is either true or false', () => {
    expect(funcs.isPrime(1.1)).toBeTruthy(); 
    expect(funcs.isPrime(50)).toBeFalsy(); 
}); 

//----------------- RETURN FIRST --------------------------

it('return first element in array', () => {
    expect(funcs.returnFirst([10,20,35,40])).toBe(10); 
    expect(funcs.returnFirst([10])).toBe(10); 
}); 

it('return undefined if the array is empty', () => {
    expect(funcs.returnFirst([])).toBe(undefined); 
}); 

//----------------- RETURN LAST -------------------------

it('return the last value of the array', () => {
    expect(funcs.returnLast([10,20,35,40])).toBe(40); 
    expect(funcs.returnLast([10])).toBe(10); 
})

it('return undefined if the array is empty', () => {
    expect(funcs.returnLast([])).toBe(undefined); 
})

// --------------- GET ARRAY LENGTH ---------------------

it('return correct length of array', () => {
    expect(funcs.getArrayLength([1,2,3])).toBe(3); 
}); 

it('return 0 if array is empty', () => {
    expect(funcs.getArrayLength([])).toBe(0); 
}); 

// -------------- INCREMENT BY ONE -----------------------

it('increment each value in the array by one', () => {
    expect(funcs.incrementByOne([10,20])).toEqual([11,21]); 
   
})

// --------------- ADD ITEM TO ARRAY ----------------------

it('add value to the arr', () => {
    expect(funcs.addItemToArray([20,40], 20)).toEqual([20, 40, 20]); 
}); 

// ----------------- ADD ITEM TO FRONT ------------------

it('add an item to the beginning of an array ', () => {
    expect(funcs.addItemToFront([20,40], 20)).toEqual([20, 20, 40])
}); 

// ------------------ WORDS TO SENTENCE ------------------

it('return the words array that is concatenated into a string', () => {
    expect(funcs.wordsToSentence(['This', 'is', 'a', 'sentence'])).toEqual("This is a sentence")
}); 

it('return whether the item is found in array or not', () => {
    expect(funcs.contains([1,2,3,],3 )).toBeTruthy();
    expect(funcs.contains([1,2,3], 2000)).toBeFalsy(); 
})