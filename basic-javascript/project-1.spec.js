const helpers = require('./project-1');


describe('multiplyByTen', () => {
    it('should return the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
        expect(helpers.multiplyByTen(5)).toBe(50);
        expect(helpers.multiplyByTen(7)).toBe(70);
        expect(helpers.multiplyByTen(8)).toBe(80);
        
    });
});


describe('subtractFive', () => {
    it('should subtract a number by five', () => { 
        // expect(helpers.subtractFive(undefined)).toBeNan();
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(20)).toBe(15);
        expect(helpers.subtractFive(45)).toEqual(40);
    })
    
});


describe('areSameLength', () => {
    it('Should return strings that are the same length', () => {

        expect(helpers.areSameLength('seven','seven')).toBe(true);
        expect(helpers.areSameLength('two', 'two')).toBe(true);
        expect(helpers.areSameLength('six', 'six')).toBe(true);
        expect(helpers.areSameLength('three', 'three')).toBe(true);
    })

});

describe('areEqual', () => {
    it('Should return two numbers that are equal', () => {
        expect(helpers.areEqual(4, 4)).toBe(true);
        expect(helpers.areEqual(7, 7)).toBe(true);
        expect(helpers.areEqual(3, 3)).toBe(true);

    })
});

describe('lessThanNinety', () => {
    it('Should return a number less than 90 as true, or if more then false', () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
        expect(helpers.lessThanNinety(61)).toBe(true);
        expect(helpers.lessThanNinety(100)).toBe(false);
        expect(helpers.lessThanNinety(91)).toBe(false);
        expect(helpers.lessThanNinety(92)).toBe(false);
        expect(helpers.lessThanNinety(14)).toBe(true)
    })
});

describe('greaterThanFifty', () => {
    it('Should return a number more than 50 as true, or else is false', () => {
        expect(helpers.greaterThanFifty(89)).toBe(true);
        expect(helpers.greaterThanFifty(61)).toBe(true);
        expect(helpers.greaterThanFifty(100)).toBe(true);
        expect(helpers.greaterThanFifty(91)).toBe(true);
        expect(helpers.greaterThanFifty(12)).toBe(false);
        expect(helpers.greaterThanFifty(14)).toBe(false);
        expect(helpers.greaterThanFifty(49)).toBe(false);
    });
});


describe('add', () => {
    it('Should return two numbers and add them', () => { 
        expect(helpers.add(5, 11)).toBe(16);
        expect(helpers.add(7, 17)).toBe(24);
        expect(helpers.add(22, 11)).toBe(33);
        expect(helpers.add(2, 33)).toBe(35);
    })
});

describe('subtract', () => {
    it('Should return two numbers and subtract them', () => {
        expect(helpers.subtract(4, 3)).toBe(1);
        expect(helpers.subtract(7, 3)).toBe(4);
        expect(helpers.subtract(14, 7)).toBe(7);
        expect(helpers.subtract(45, 4)).toBe(41);

    })
});

describe('divide', () => {
    it('Should divide two numbers and return result', () => {
        expect(helpers.divide(20, 5)).toEqual(4);
        expect(helpers.divide(100, 5)).toEqual(20);
        expect(helpers.divide(55, 5)).toEqual(11);
    })
});

describe('multiply', () => {
    it('Should multiply two numbers and return result', () => {
        expect(helpers.multiply(3, 2)).toEqual(6);
        expect(helpers.multiply(6, 3)).toEqual(18);
        expect(helpers.multiply(12, 4)).toEqual(48);

    })
});

describe('getRemainder', () => {
    it('Should return the remainder between two numbers', () => {
        expect(helpers.getRemainder(14, 3)).toEqual(2);
        expect(helpers.getRemainder(14, 2)).toEqual(0);
        expect(helpers.getRemainder(19, 6)).toEqual(1);
        expect(helpers.getRemainder(144, 12)).toEqual(0);
        expect(helpers.getRemainder(33, 12)).toEqual(9);

    })
});

describe('isEven', () => {
    it('Should return true for even numbers', () => {
        expect(helpers.isEven(10)).toBeTruthy();
        expect(helpers.isEven(68)).toBeTruthy();
        expect(helpers.isEven(24)).toBeTruthy();
        expect(helpers.isEven(10)).toBeTruthy();
        expect(helpers.isEven(7)).toBeFalsy();
        expect(helpers.isEven(51)).toBeFalsy();
        expect(helpers.isEven(17)).toBeFalsy();
    })
});

describe('isOdd', () => {
    it('Should return false for odd numbers', () => { 
        expect(helpers.isOdd(7)).toBeTruthy();
        
        expect(helpers.isOdd(1)).toBeTruthy();
        expect(helpers.isOdd(23)).toBeTruthy();
        expect(helpers.isOdd(19)).toBeTruthy();
        expect(helpers.isOdd(22)).toBeFalsy();
        expect(helpers.isOdd(24)).toBeFalsy();
    })
});

describe('square', () => {
    it('Should return the square of a number', () => { 
        expect(helpers.square(3)).toEqual(9);
        expect(helpers.square(4)).toEqual(16);
        expect(helpers.square(5)).toEqual(25);
        expect(helpers.square(6)).toEqual(36);

    })
});

describe('cube', () => {
    it('Should return the cube of a number', () => {
        expect(helpers.cube(3)).toEqual(27);
        expect(helpers.cube(2)).toEqual(8);
        expect(helpers.cube(4)).toEqual(64);
    })
});

describe('raiseToPower', () => { 
    it('Should return the number raised to the power of given exponent', () => {
        expect(helpers.raiseToPower(3,3)).toEqual(27);
        expect(helpers.raiseToPower(2, 3)).toEqual(8);
        expect(helpers.raiseToPower(3, 4)).toEqual(81);
        expect(helpers.raiseToPower(5, 7)).toEqual(78125);
    })
});

describe('roundNumber', () => {
    it('Should returns the value of a number rounded to the nearest integer', () => {
        expect(helpers.roundNumber(3.07)).toEqual(3);
        expect(helpers.roundNumber(5.96)).toEqual(6);
        expect(helpers.roundNumber(4.44)).toEqual(4);
        expect(helpers.roundNumber(9.71)).toEqual(10);
    })
});

describe('roundUp', () => {
    it('Should returns the smallest integer greater than or equal to a given number', () => {
        expect(helpers.roundUp(3.07)).toEqual(4);
        expect(helpers.roundUp(7.21)).toEqual(8);
        expect(helpers.roundUp(6.44)).toEqual(7);
    })
});

describe('addExclamationPoint', () => {
    it('Should return exclamation point at the end of a String', () => {
        expect(helpers.addExclamationPoint('Space')).toBe('Space!'); 

    })
});

describe('combineNames', () => {
    it('Should return a combination of the string names combined', () => {
        expect(helpers.combineNames('Acuna', 'Matata')).toBe('Acuna Matata');
        expect(helpers.combineNames('Johnny', 'Be Good')).toBe('Johnny Be Good');
        expect(helpers.combineNames('Jane', 'Fonda')).toBe('Jane Fonda');
    })

});

//need to figure this one out.
describe('getGreeting', () => {
   
    it('Should return name along with greeting message', () => {
    


    })

});

describe('getRectangleArea', () => {
    it('Should return area of a rectangle', () => {
        expect(helpers.getRectangleArea(5, 6)).toBe(30);
        expect(helpers.getRectangleArea(7, 6)).toBe(42);
        expect(helpers.getRectangleArea(2, 4)).toBe(8);

    })
});

describe('getTriangleArea', () => {
    it('Should return the area of a triangle', () => {
        expect(helpers.getTriangleArea(5, 6)).toBe(15);
        expect(helpers.getTriangleArea(4, 3)).toBe(6);
        expect(helpers.getTriangleArea(12, 5)).toBe(30);
    })
});

describe('getCircleArea', () => {
    it('Should return the area of a circle', () => {
        expect(helpers.getCircleArea(5, 5)).toEqual(78.53981633974483);
        expect(helpers.getCircleArea(6, 6)).toEqual(113.09733552923255);
        expect(helpers.getCircleArea(7, 7)).toEqual(153.93804002589985);
    })
});

describe('getRectangularPrismVolume', () => {
    it('Should return the volume of a Rectangular Prism', () => { 
        expect(helpers.getRectangularPrismVolume(7, 8, 9)).toEqual(504);
        expect(helpers.getRectangularPrismVolume(10, 11, 12)).toEqual(1320);
        expect(helpers.getRectangularPrismVolume(13,15,18)).toEqual(3510);

    })

});


// start testing!



