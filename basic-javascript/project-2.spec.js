const funcs = require('./project-2');

 
// ----------------- GET BIGGEST TEST ------------------

it('should return the larger value of the two parameters', () => {
    expect(funcs.getBiggest(45,66)).toBe(66); 
    expect(funcs.getBiggest(44, 33)).toBe(44); 
})

it('should return second parameter if the two params are equal', () => {
    expect(funcs.getBiggest(44,44)).toBe(44); 
})

// -------------- GREETING TEST ----------------------

it('should return appropriate greeting for each case', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!'); 
    expect(funcs.greeting('Spanish')).toBe('Hola!'); 
    expect(funcs.greeting('Some Other Greeting')).toBe('Hello!'); 
}); 

// ------------ IS TEN OR FIVE TEST -----------------

it('should return if the value is equal to 10 or to 5', () => {
    expect(funcs.isTenOrFive(10)).toBeTruthy(); 
    expect(funcs.isTenOrFive(5)).toBeTruthy(); 
    expect(funcs.isTenOrFive(8)).toBeFalsy(); 
}); 

// -------------IS IN RANGE TEST --------------

it('should return whether value is less than 50 and greater than 20', () => {
    expect(funcs.isInRange(15)).toBeFalsy(); 
    expect(funcs.isInRange(35)).toBeTruthy(); 
    expect(funcs.isInRange(55)).toBeFalsy(); 
}); 

// ------------- IS AN INTEGER TEST -------------

it('should return whether the parameter is an integer', () => {
    expect(funcs.isInteger(4.53)).toBeFalsy(); 
    expect(funcs.isInteger(5)).toBeTruthy(); 
}); 

// ------------- FIZZ BUZZ TEST ----------------

it('should return "fizzbuzz" if num divisible both by 3 and 5', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz'); 
    expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
})

it('should return "buzz" if num is divisible by 5', () => {
    expect(funcs.fizzBuzz(20)).toBe('buzz'); 
    expect(funcs.fizzBuzz(5)).toBe('buzz'); 
})

it('should return "fizz" if num is divisible by 3', () => {
    expect(funcs.fizzBuzz(33)).toBe('fizz'); 
    expect(funcs.fizzBuzz(18)).toBe('fizz');
})

// ------------------- IS PRIME TEST ------------------------------

it('should return false if number is less than 0', () => {
    expect(funcs.isPrime(-1)).toBeFalsy(); 
    expect(funcs.isPrime(-25)).toBeFalsy(); 
})

it('should return false if number is equal to 1 or 0 ', () => {
    expect(funcs.isPrime(0)).toBeFalsy(); 
    expect(funcs.isPrime(1)).toBeFalsy(); 
})

it('should return whether the value greater than 1 is either true or false', () => {
    expect(funcs.isPrime(5)).toBeTruthy(); 
    expect(funcs.isPrime(11)).toBeTruthy(); 
    expect(funcs.isPrime(10)).toBeFalsy(); 
    expect(funcs.isPrime(25)).toBeFalsy(); 
}); 

//----------------- RETURN FIRST --------------------------

it('should return first element in array', () => {
    expect(funcs.returnFirst([1,2,3,4])).toBe(1); 
    expect(funcs.returnFirst([20])).toBe(20); 
}); 

it('should return undefined if the array is empty', () => {
    expect(funcs.returnFirst([])).toBe(undefined); 
})
