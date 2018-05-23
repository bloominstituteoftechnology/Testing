const funcs = require('./project-1');

// write your tests here
describe('default', () => {
    it('run the tests', () => {});
  });


  describe('multiplyByTen', () => {
      it('should multiply by 10', () => {        
        //arrange
        //const multiply = funcs.multiplyByTen;

        // act
        //const fourty = multiply(4);

        //assert
        //expect(multiply).toBe(num);
        // expect(func).toBeCalledWith(expect.any(Number);
        //expect(fourty).toBe(40);
        expect(funcs.multiplyByTen(4)).toBe(40)
      })
  })

  describe('subtractFive', () => {
      it('should subtract five from sum', () => {
          expect(funcs.subtractFive(15)).toBe(10);
      })
  })

  describe('areSameLength', () => {
      it('should check if strings are same length', () => {
        expect(funcs.areSameLength('joe', 'bob')).toEqual(true);
      })
  })

  describe('areEqual', () => {
      it('should check if x equals y', () => {
        // const x = '5';
        // const y = '5';

        // const areEqual = funcs.areEqual(x,y);

        // expect(areEqual).toEqual(true);
        //expect(funcs).toBeCalledWith(expect.any(Number))
        expect(funcs.areEqual(4,4)).toEqual(true);
      })
  })


describe('lessThanNinety', () => {
   it('should check if less than ninety', () => {
   expect(funcs.lessThanNinety(80)).toEqual(true);
})
})

describe('greaterThanFifty', () => {
    it('should check if greater than fifty', () => {
    expect(funcs.greaterThanFifty(60)).toEqual(true);
    })
 })

 describe('add', () => {
    it('should check x + y', () => {
        expect(funcs.add(5, 6)).toEqual(11);
    })
 })

 describe('subtract', () => {
    it('should check x - y', () => {
        expect(funcs.subtract(6, 5)).toEqual(1);
    })
 })

 describe('divide', () => {
    it('should check x / y', () => {
        expect(funcs.divide(10, 5)).toEqual(2);
    })
 })

 describe('multiply', () => {
    it('should check x * y', () => {
        expect(funcs.multiply(10, 5)).toEqual(50);
    })
 })

 describe('getRemainder', () => {
    it('should check x % y', () => {
        expect(funcs.getRemainder(10, 5)).toEqual(0);
    })
 })

 describe('isEven', () => {
    it('should check num % 2 = 0', () => {
        expect(funcs.isEven(10)).toEqual(true);
    })
 })
 
 describe('isOdd', () => {
    it('should check num % 2 = 0', () => {
        expect(funcs.isOdd(9)).toEqual(true);
    })
 })

 describe('square', () => {
    it('should check num * num', () => {
        expect(funcs.square(10)).toEqual(100);
    })
 })

 describe('cube', () => {
    it('should check num * num * num', () => {
        expect(funcs.cube(10)).toEqual(1000);
    })
 })

 describe('raiseToPower', () => {
    it('should check num ** exponent', () => {
        expect(funcs.raiseToPower(10, 2)).toEqual(100);
    })
 })

 describe('roundNumber', () => {
    it('should check rounded up or down number', () => {
        expect(funcs.roundNumber(9.8)).toEqual(10);
    })
 })

 describe('roundUp', () => {
    it('should check number rounded up', () => {
        expect(funcs.roundUp(9.3)).toEqual(10);
    })
 })


 describe('addExclamationPoint', () => {
    it('should add exclamation point', () => {
        expect(funcs.addExclamationPoint(10)).toEqual(10+'!');
    })
 })

 describe('combineNames', () => {
     it('should combine two names into one string', () => {
         expect(funcs.combineNames('Jonathan', 'greene')).toEqual('Jonathan greene');
     })
 })

 describe('getGreeting', () => {
    it('should add hello to the string variable', () => {
        expect(funcs.getGreeting('Jonathan')).toEqual('Hello Jonathan!');
    })
 })

 describe('getRectangleArea', () => {
     it('Should take in two parameters and find the area of a rectangle', () => {
        expect(funcs.getRectangleArea(3,5)).toEqual(15);
    })
 })

 describe('getTriangleArea', () => {
     it('should find the area of a triangle', () => {
         expect(funcs.getTriangleArea(5,3)).toEqual(7.5);
     })
 })

 describe('getCircleArea', () => {
     it('should find the area of circle', () => {
         expect(funcs.getCircleArea(3)).toBe(Math.PI * 9);
     })
 })

 describe ('getRectangularPrismVolume', () => {
    it('should return width * height * length of prism', () => {
        expect(funcs.getRectangularPrismVolume(3,4,5)).toEqual(60);
    })
 })