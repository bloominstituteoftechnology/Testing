const funcs = require('./project-1');

// write your tests here

describe ('default', () => {
    it('run the tests', () => {});
});

describe('multiplyByTen', () => {
    it('should multiply by 10', () => {

    //   //arrange
    //   const multiply = funcs.multiplyByTen;

    //   // act
    //   const fourty = multiply(4);

    //   //assert
    //   expect(fourty).toBe(40);

      expect(funcs.multiplyByTen(4)).toBe(40)


    })
})

describe('subtractFive', () => {
    it('should subtract five from sum', () => {

        // const subtract = funcs.subtractFive;

        // const ten = subtract(15);

        // expect(ten).toBe(10);

        expect(funcs.subtractFive(15)).toBe(10);

    })
})

describe('areSameLength', () => {
    it('should check if strings are same length', () => {

    //   const stringLength1 = 'joe';

    //   const stringLength2 = 'bob';

    //   const areSameLength = funcs.areSameLength(stringLength1, stringLength2);

    //   expect(areSameLength).toEqual(true);

      expect(funcs.areSameLength('joe', 'bob')).toEqual(true);

    })
}) 

describe('areEqual', () => {
    it('should check if x equals y', () => {
      // const x = '5';
      // const y = '5';

      // const areEqual = funcs.areEqual(x,y);

      // expect(areEqual).toEqual(true);
      expect(funcs.areEqual(4, 4)).toEqual(true);
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
    it('should combine names', () => {
        expect(funcs.combineNames('John', 'Smith')).toBe('John Smith');
    })
})

describe('getGreeting', () => {
    it('should return Hello in front and exclamation point after', () => {
        expect(funcs.getGreeting('John')).toBe('Hello John!');
    })
})

describe ('getRectangleArea', () => {
    it('should return length * width of rectangle', () => {
        expect(funcs.getRectangleArea(5, 4)).toEqual(20);
    })
})

describe ('getTriangleArea', () => {
    it('should return 0.5 * base * height of triangle', () => {
        expect(funcs.getTriangleArea(3, 8)).toEqual(12);
    })
})

describe ('getCircleArea', () => {
    it('should return Math.PI * radius * radius', () => {
        expect(funcs.getCircleArea(5)).toEqual(78.53981633974483);
    })
})

describe ('getRectangularPrismVolume', () => {
    it('should return width * height * length of prism', () => {
        expect(funcs.getRectangularPrismVolume(5, 6, 7)).toEqual(210);
    })
})