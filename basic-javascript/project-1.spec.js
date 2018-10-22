const helpers = require('./project-1');

// start testing!
describe('project-1.js', ()=>{
    // describe('jest', ()=>{
    //     test('should run tests', () =>{
            
    //     });
        
    //     it ('should run tests using it instead of test',()=>{
            
    //     })
    // })
    // describe('multiplyByTen', ()=>{
    //     it ('should multiply provided number by ten', ()=>{
    //         const expected = 100;
    //         const actual = helpers.multiplyByTen(10);
    //         expect(actual).toEqual(expected);
    //     })
        
    //     it('should return 0 when called with no value', ()=>{
    //         const product = helpers.multiplyByTen();
            
    //         expect(product).toBe(0);
    //     })

    //     it('should throw error when called with a string',()=>{
    //         expect(()=>{helpers.multiplyByTen('five');}).toThrow();
    //     })
    // })
    // describe('subtractFive', ()=>{
    //     it ('should subtract provided number by five', ()=>{
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     })
        
    //     it('should return 0 when called with no value', ()=>{
    //         const product = helpers.subtractFive();
    //         expect(product).toBe(0);
    //     })
    //     it('should throw error when called with a string',()=>{
    //         expect(()=>{helpers.subtractFive('ten');}).toThrow();
    //     })
    // })
    // describe('areSameLength', ()=>{
    //     it ('should determine if two strings are of same length', ()=>{
    //         expect(helpers.areSameLength('Tsai', 'Huang')).toEqual(false);
    //         expect(helpers.areSameLength('Hong','Kong')).toEqual(true);
    //     })
    //     it('should throw error when called with no values', ()=>{
    //         expect(()=>{helpers.areSameLength();}).toThrow();
    //     })
    //     it('should throw error when called with a boolean value',()=>{
    //         expect(()=>{helpers.areSameLength(false,true);}).toThrow();
    //     })
    // })
    // describe('areEqual', ()=>{
    //     it ('should determine if two objects are equal', ()=>{
    //         //string types
    //         expect(helpers.areEqual('Tsai', 'Huang')).toEqual(false);
    //         expect(helpers.areEqual('Tsai','Tsai')).toEqual(true);
    //         //number type
    //         expect(helpers.areEqual(5, 50)).toEqual(false);
    //         expect(helpers.areEqual(5, 5)).toEqual(true);
    //         //boolean type
    //         expect(helpers.areEqual(true, false)).toEqual(false);
    //         expect(helpers.areEqual(false, false)).toEqual(true);
    //         //different variable type
    //         expect(helpers.areEqual(true, 'true')).toEqual(false);
    //         expect(helpers.areEqual(true, 0)).toEqual(false);
    //         //object type
    //         expect(helpers.areEqual({greeting:"hello"}, {greeting: "goodbye"})).toEqual(false);
    //         expect(helpers.areEqual({greeting:"hello"}, {greeting: "hello"})).toEqual(true);
    //     })
    //     it('should throw error when called with no values', ()=>{   
    //         expect(()=>{helpers.areEqual();}).toThrow();
    //         expect(()=>{helpers.areEqual('hello');}).toThrow();
    //     })
    // }) 
    describe('lessThanNinety', ()=>{
        it ('should determine if a number is less than ninety', ()=>{
            expect(helpers.lessThanNinety(50)).toEqual(true);
            expect(helpers.lessThanNinety(90)).toEqual(false);
            expect(helpers.lessThanNinety(91)).toEqual(false);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.lessThanNinety();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.lessThanNinety('hello');}).toThrow();
            expect(()=>{helpers.lessThanNinety(true);}).toThrow();
        })
    })
})