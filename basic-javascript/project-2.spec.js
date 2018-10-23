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
    