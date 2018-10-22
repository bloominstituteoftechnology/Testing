const helpers = require('./project-1');

// start testing!
describe('project-1.js', ()=>{
    describe('jest', ()=>{
        test('should run tests', () =>{
            
        });
        
        it ('should run tests using it instead of test',()=>{
            
        })
    })
    describe('multiplyByTen', ()=>{
        it ('should multiply provided number by ten', ()=>{
            const expected = 100;
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        })
        
        it('should return 0 when called with no value', ()=>{
            const product = helpers.multiplyByTen();
            
            expect(product).toBe(0);
        })

        it('should throw error when called with a string',()=>{
            expect(()=>{helpers.multiplyByTen('five');}).toThrow();
        })
    })
    describe('subtractFive', ()=>{
        it ('should subtract provided number by five', ()=>{
            const expected = 5;
            const actual = helpers.subtractFive(10);
            expect(actual).toEqual(expected);
        })
        it('should return 0 when called with no value', ()=>{
            const product = helpers.subtractFive();
            expect(product).toBe(0);
        })
        it('should throw error when called with a string',()=>{
            expect(()=>{helpers.subtractFive('ten');}).toThrow();
        })
    })
    describe('areSameLength', ()=>{
        it ('should determine if two strings are of same length', ()=>{
            expect(helpers.areSameLength('Tsai', 'Huang')).toEqual(false);
            expect(helpers.areSameLength('Hong','Kong')).toEqual(true);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.areSameLength();}).toThrow();
        })
        it('should throw error when called with a boolean value',()=>{
            expect(()=>{helpers.areSameLength(false,true);}).toThrow();
        })
    })
    describe('areEqual', ()=>{
        it ('should determine if two objects are equal', ()=>{
            //string types
            expect(helpers.areEqual('Tsai', 'Huang')).toEqual(false);
            expect(helpers.areEqual('Tsai','Tsai')).toEqual(true);
            //number type
            expect(helpers.areEqual(5, 50)).toEqual(false);
            expect(helpers.areEqual(5, 5)).toEqual(true);
            //boolean type
            expect(helpers.areEqual(true, false)).toEqual(false);
            expect(helpers.areEqual(false, false)).toEqual(true);
            //different variable type
            expect(helpers.areEqual(true, 'true')).toEqual(false);
            expect(helpers.areEqual(true, 0)).toEqual(false);
            //object type
            expect(helpers.areEqual({greeting:"hello"}, {greeting: "goodbye"})).toEqual(false);
            expect(helpers.areEqual({greeting:"hello"}, {greeting: "hello"})).toEqual(true);
        })
        it('should throw error when called with no values', ()=>{   
            expect(()=>{helpers.areEqual();}).toThrow();
            expect(()=>{helpers.areEqual('hello');}).toThrow();
        })
    }) 
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
    describe('greaterThanFifty', ()=>{
        it ('should determine if a number is greater than fifty', ()=>{
            expect(helpers.greaterThanFifty(49)).toEqual(false);
            expect(helpers.greaterThanFifty(50)).toEqual(false);
            expect(helpers.greaterThanFifty(51)).toEqual(true);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.greaterThanFifty();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.greaterThanFifty('hello');}).toThrow();
            expect(()=>{helpers.greaterThanFifty(true);}).toThrow();
        })
    })
    describe('add', ()=>{
        it ('should add two values together', ()=>{
            expect(helpers.add(1,2)).toEqual(3);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.add();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.add('hello');}).toThrow();
            expect(()=>{helpers.add(true);}).toThrow();
        })
    })
    describe('subtract', ()=>{
        it ('should subtract one number from another', ()=>{
            expect(helpers.subtract(2,1)).toEqual(1);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.subtract();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.subtract('hello');}).toThrow();
            expect(()=>{helpers.subtract(true);}).toThrow();
        })
    })
    describe('divide', ()=>{
        it ('should divide one number from another', ()=>{
            expect(helpers.divide(2,1)).toEqual(2);
            expect(helpers.divide(1,3)).toEqual(1/3);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.divide();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.divide('hello');}).toThrow();
            expect(()=>{helpers.divide(true);}).toThrow();
        })
    })
    describe('multiply', ()=>{
        it ('should multiply one number by another', ()=>{
            expect(helpers.multiply(2,1)).toEqual(2);
            expect(helpers.multiply(-1,3)).toEqual(-3);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.multiply();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.multiply('hello');}).toThrow();
            expect(()=>{helpers.multiply(true);}).toThrow();
        })
    })
    describe('getRemainder', ()=>{
        it ('should return the remainder when dividing one number from another', ()=>{
            expect(helpers.getRemainder(2,1)).toEqual(0);
            expect(helpers.getRemainder(5,3)).toEqual(2);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getRemainder();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getRemainder('hello');}).toThrow();
            expect(()=>{helpers.getRemainder(true);}).toThrow();
        })
    })
    describe('isEven', ()=>{
        it ('should determine if a number is an even number', ()=>{
            expect(helpers.isEven(2)).toEqual(true);
            expect(helpers.isEven(3)).toEqual(false);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.isEven();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.isEven('hello');}).toThrow();
            expect(()=>{helpers.isEven(true);}).toThrow();
        })
    })
    describe('isOdd', ()=>{
        it ('should determine if a number is an odd number', ()=>{
            expect(helpers.isOdd(2)).toEqual(false);
            expect(helpers.isOdd(3)).toEqual(true);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.isOdd();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.isOdd('hello');}).toThrow();
            expect(()=>{helpers.isOdd(true);}).toThrow();
        })
    })
    describe('square', ()=>{
        it ('should return the square of a number', ()=>{
            expect(helpers.square(2)).toEqual(4);
            expect(helpers.square(-3)).toEqual(9);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.square();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.square('hello');}).toThrow();
            expect(()=>{helpers.square(true);}).toThrow();
        })
    })
    describe('cube', ()=>{
        it ('should return the cube of a number', ()=>{
            expect(helpers.cube(2)).toEqual(8);
            expect(helpers.cube(-3)).toEqual(-27);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.cube();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.cube('hello');}).toThrow();
            expect(()=>{helpers.cube(true);}).toThrow();
        })
    })
    describe('raiseToPower', ()=>{
        it ('should raise a number to the power of an exponent', ()=>{
            expect(helpers.raiseToPower(2,3)).toEqual(8);
            expect(helpers.raiseToPower(-3,2)).toEqual(9);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.raiseToPower();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.raiseToPower('hello');}).toThrow();
            expect(()=>{helpers.raiseToPower(true);}).toThrow();
        })
    })
    describe('roundNumber', ()=>{
        it ('should round a number', ()=>{
            expect(helpers.roundNumber(1.4)).toEqual(1);
            expect(helpers.roundNumber(1.5)).toEqual(2);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.roundNumber();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.roundNumber('hello');}).toThrow();
            expect(()=>{helpers.roundNumber(true);}).toThrow();
        })
    })
    describe('roundUp', ()=>{
        it ('should round a number', ()=>{
            expect(helpers.roundUp(1.4)).toEqual(2);
            expect(helpers.roundUp(1.5)).toEqual(2);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.roundUp();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.roundUp('hello');}).toThrow();
            expect(()=>{helpers.roundUp(true);}).toThrow();
        })
    })
    describe('addExclamationPoint', ()=>{
        it ('should add exclamation point to the end of a string', ()=>{
            expect(helpers.addExclamationPoint("What's up")).toEqual("What's up!");
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.addExclamationPoint();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.addExclamationPoint(8);}).toThrow();
            expect(()=>{helpers.addExclamationPoint(true);}).toThrow();
        })
    })
    describe('combineNames', ()=>{
        it ('should combine two names', ()=>{
            expect(helpers.combineNames("Tsai", "Huang")
            ).toEqual("Tsai Huang");
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.combineNames();}).toThrow();
            expect(()=>{helpers.combineNames("Tsai");}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.combineNames(8,"eight");}).toThrow();
            expect(()=>{helpers.combineNames(true, 1);}).toThrow();
        })
    })
    describe('getGreeting', ()=>{
        it ('should return a greeting with a name', ()=>{
            expect(helpers.getGreeting("Tsai")
            ).toEqual("Hello Tsai!");
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getGreeting();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getGreeting(8);}).toThrow();
            expect(()=>{helpers.getGreeting(true);}).toThrow();
        })
    })
    describe('getRectangleArea', ()=>{
        it ('should return the area based on the width and height', ()=>{
            expect(helpers.getRectangleArea(7,5)
            ).toEqual(35);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getRectangleArea();}).toThrow();
            expect(()=>{helpers.getRectangleArea(8);}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getRectangleArea(8,"eight");}).toThrow();
            expect(()=>{helpers.getRectangleArea(true,1);}).toThrow();
        })
    })
    describe('getTriangleArea', ()=>{
        it ('should return the triangle area based on the base and height', ()=>{
            expect(helpers.getTriangleArea(7,5)
            ).toEqual(17.5);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getTriangleArea();}).toThrow();
            expect(()=>{helpers.getTriangleArea(8);}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getTriangleArea(8,"eight");}).toThrow();
            expect(()=>{helpers.getTriangleArea(true,1);}).toThrow();
        })
    })
    describe('getCircleArea', ()=>{
        it ('should return the area of a circle based on a radius', ()=>{
            expect(helpers.getCircleArea(3)
            ).toEqual(9*Math.PI);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getCircleArea();}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getCircleArea("eight");}).toThrow();
            expect(()=>{helpers.getCircleArea(true);}).toThrow();
        })
    })
    describe('getRectangularPrismVolume', ()=>{
        it ('should return the volumn of a rectangular prism based on length, width and height', ()=>{
            expect(helpers.getRectangularPrismVolume(2,4,5)
            ).toEqual(40);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{helpers.getRectangularPrismVolume();}).toThrow();
            expect(()=>{helpers.getRectangularPrismVolume(1);}).toThrow();
            expect(()=>{helpers.getRectangularPrismVolume(2,4);}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{helpers.getRectangularPrismVolume("eight",5,6);}).toThrow();
            expect(()=>{helpers.getRectangularPrismVolume(3,true,8);}).toThrow();
        })
    })

})