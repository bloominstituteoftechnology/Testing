const funcs = require('./project-2');

it('two numbers input, returns largest number', () => {
    const expected = 10;
                                                
    const actual = funcs.getBiggest(3, 10);
                                                
    expect(actual).toEqual(expected);
});

describe('greeting', () => {

it('if greeting is string "German"', () => {
    const expected = 'Guten Tag!';
    
    const actual = funcs.greeting('German');
    
    expect(actual).toEqual(expected);
});
it('if greeting is string "Spanish"', () =>{

    const expected = 'Hola!';
        

    const actual = funcs.greeting('Spanish');

expect(actual).toEqual(expected);
    
    
    });

it('if greeting is an empty string', () => {
const expected = 'Hello!';
                
const actual = funcs.greeting('');
                
expect(actual).toEqual(expected);
            
            
                    });
    });

describe('number ten or number five', () => {

it('is input number ten', () =>{

const expected = true;
               
const actual = funcs.isTenOrFive(10);

expect(actual).toEqual(expected);
        
        
});

it('is input number five', () =>{

const expected = true;
                       
const actual = funcs.isTenOrFive(5);
        
expect(actual).toEqual(expected);
                
                
});
});


it('is input in range of twenty and fifty', () =>{
    
const expected = true;
                   
const actual = funcs.isInRange(21);
    
expect(actual).toEqual(expected);
            
            
});

it('is input number an integer', () =>{
    
    const expected = true;
                       
    const actual = funcs.isInteger(21);
        
    expect(actual).toEqual(expected);
                    
    });

    describe('fizzBuzz test', () => {

        it('if input number is divis by 5 & 3', () =>{
        
        const expected = 'fizzbuzz';
                       
        const actual = funcs.fizzBuzz(15);
        
        expect(actual).toEqual(expected);
                
                
        });
        
    it('is input number divis by 5', () =>{
        
        const expected = 'buzz';
                               
        const actual = funcs.fizzBuzz(5);
                
        expect(actual).toEqual(expected);
                        
                        
        });
    it('is input number divis by 3', () =>{
        
        const expected = 'fizz';
                                   
        const actual = funcs.fizzBuzz(3);
                    
        expect(actual).toEqual(expected);
                        
                            
        });
    it('is input number not divis by 5 or 3', () => {

        const expected = 7;


        const actual = funcs.fizzBuzz(7);

        expect(actual).toEqual(expected);

    })
    });

    describe('is the input number prime', () => {

        it('is less than zero', () =>{
        
        const expected = true ;
                       
        const actual = funcs.isPrime(5);
        
        expect(actual).toEqual(expected);
                
                
        });
        
    it('equals 1 or 0', () =>{
        
        const expected = true;
                               
        const actual = funcs.isPrime(2);
                
        expect(actual).toEqual(expected);
                        
                        
        });
    it('divisible by more numbers than 1 and num', () =>{
        
        const expected = true;
                                   
        const actual = funcs.isPrime(2);
                    
        expect(actual).toEqual(expected);
                        
                            
        });
    // it('is input number not divis by 5 or 3', () => {

    //     const expected = 7;


    //     const actual = funcs.isPrime(7);

    //     expect(actual).toEqual(expected);

    // })
    });
    
    it('returns first position in array' ,() => {
        const expected = 1;

        const actual = funcs.returnFirst([1,2,3]);

        expect(actual).toEqual(expected);
    })

    it('returns last position in array' ,() => {
        const expected = 1;

        const actual = funcs.returnLast([3,1,1]);

        expect(actual).toEqual(expected);
    })

    it('returns array length' ,() => {
        const expected = 2;

        const actual = funcs.getArrayLength([3,1]);

        expect(actual).toEqual(expected);
    })

    it('incs everyposition int he array by one' ,() => {
        const expected = [2, 1];

        const actual = funcs.incrementByOne([1,0]);

        expect(actual).toEqual(expected);
    })


    it('adds item to arr' ,() => {
        const expected = [2, 1];

        const actual = funcs.addItemToArray([2],1);

        expect(actual).toEqual(expected);
    })

    it('adds item to front of arr' ,() => {
        const expected = [1, 2];

        const actual = funcs.addItemToFront([2],1);

        expect(actual).toEqual(expected);
    })

    it('adds words to sent' ,() => {
        const expected = "l e t";

        const actual = funcs.wordsToSentence("let");

        expect(actual).toEqual(expected);
    })


    it('contains input item' ,() => {
        const expected = true;

        const actual = funcs.contains([1,2,3], 3);

        expect(actual).toEqual(expected);
    })

    it('sums input items if numbers' ,() => {
        const expected = 0;

        const actual = funcs.addNumbers(1);

        expect(actual).toEqual(expected);
    })

    it('averages a list of numbers' ,() => {
        const expected = 10;

        const actual = funcs.averageTestScore([10, 10]);

        expect(actual).toEqual(expected);
    })

    it('discovers and return largets number' ,() => {
        const expected = 10;

        const actual = funcs.largestNumber([5, 10]);

        expect(actual).toEqual(expected);
    })


