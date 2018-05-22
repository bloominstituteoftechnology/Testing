const funcs = require('./project-1');

// write your tests here
it('run tests', () =>{});

describe('Project-1', () => {
    describe('multiplyByTen',() => {
        it('should multiply by ten', () => {
            const expected = 100;
            const multiplyByTen = funcs.multiplyByTen;
            const actual = multiplyByTen(10);
            expect(actual).toBe(expected);
        });
        it('should be a function', () => {
            const multfunc = funcs.multiplyByTen;
            expect(typeof multfunc).toBe('function');
        });
        it('should be a number', () => {
            const num = funcs.multiplyByTen(7);
            expect(typeof num).toBe('number');
        });
    });


    describe('substractFive', () => {
        it('should substract five', () => {
            const expected = 5;
            const subtractFive = funcs.subtractFive;
            const actual = subtractFive(10);
            expect(actual).toBe(expected);
        });
        it('should be a function', () => {
            const subFive = funcs.subtractFive;
            expect(typeof subFive).toBe('function');
        });
        it('should be a number', () => {
            const num = funcs.subtractFive(7);
            expect(typeof num).toBe('number');
        });
    });

    describe('areSameLength', () => {
        const areSameLength = funcs.areSameLength;
        const str1 = 'example1';
        const str2 = 'example0';
        const str3 = 'example';
        it('should be truth', () => {
            expect(areSameLength(str1, str2)).toBeTruthy();
        });
        it('should be false', () => {
        expect(areSameLength(str1, str3)).toBeFalsy();
        });
        it('should be a function', () => {
            expect(typeof areSameLength).toBe('function');
        });
        it('should be boolean', () => {
            expect(typeof areSameLength(str1, str2)).toBe('boolean');
        });
    });

    describe('areEqual', () => {
        const areEqual = funcs.areEqual;
        const num0 = 1;
        const num1 = 4;
        const num2 = 1;   
        it('should return truth', () => {
            const actual = areEqual(num0, num2);
            expect(actual).toBeTruthy();
        });
        it('should return false', () => {
            const actual = areEqual(num0, num1);
            expect(actual).toBeFalsy();
        });
        it('should be a function', () => {
            const sameLength = funcs.areEqual;
            expect(typeof areEqual).toBe('function');
        });
        it('should be boolean', () => {
            expect(typeof areEqual(num0, num1)).toBe('boolean');
        });
    });

    describe('lessThanNinety', () => {
        const lessThanNinety = funcs.lessThanNinety;    
        it('should be less than ninety', () => {
            expect(lessThanNinety(89)).toBeTruthy();
            expect(lessThanNinety(90)).toBeFalsy();
        });
        it('should be a boolean', () => {
            const num = funcs.lessThanNinety(77);
            expect(typeof num).toBe('boolean');
        });
    });

    describe('greaterThanFifty', () => {
        const greaterThanFifty = funcs.greaterThanFifty;    
        it('should be greater than fifty', () => {
            expect(greaterThanFifty(77)).toBeTruthy();
            expect(greaterThanFifty(50)).toBeFalsy();
        });
        it('should be a boolean', () => {
            const num = funcs.greaterThanFifty(55);
            expect(typeof num).toBe('boolean');
        });
    });

    describe('add', () => {
        const add = funcs.add;    
        it('should add values', () => {
            expect(add(2,2)).toBe(4);
            expect(add(33,77)).toBe(110);
        });
    });

    describe('subtract', () => {
        const subtract = funcs.subtract;    
        it('should subtract values', () => {
            expect(subtract(2,2)).toBe(0);
            expect(subtract(33,77)).toBe(-44);
        });
    });

    describe('divide', () => {
        const divide = funcs.divide;    
        it('should divide values', () => {
            expect(divide(2,2)).toBe(1);
            expect(divide(77,11)).toBe(7);
        });
    });

    describe('multiply', () => {
        const multiply = funcs.multiply;    
        it('should multiply values', () => {
            expect(multiply(2,2)).toBe(4);
            expect(multiply(77,11)).toBe(847);
        });
    });

    describe('getRemainder', () => {
        const getRemainder = funcs.getRemainder;    
        it('should get the remainder', () => {
            expect(getRemainder(2,2)).toBe(0);
            expect(getRemainder(77,33)).toBe(11);
            expect(getRemainder(33,77)).toBe(33);
        });
    });

    describe('isEven', () => {
        const isEven = funcs.isEven;    
        it('should be even values', () => {
            expect(isEven(4)).toBeTruthy();
            expect(isEven(3)).toBeFalsy();
        });
    });

    describe('isOdd', () => {
        const isOdd = funcs.isOdd;    
        it('should be odd values', () => {
            expect(isOdd(3)).toBeTruthy();
            expect(isOdd(4)).toBeFalsy();
        });
    });

    describe('square', () => {
        const square = funcs.square;    
        it('should be a square', () => {
            expect(square(3)).toBe(9);
            expect(square(7)).toBe(49);
            expect(square(6)).toBe(36);
        });
    });

    describe('cube', () => {
        const cube = funcs.cube;    
        it('should be a cube', () => {
            expect(cube(3)).toBe(27);
            expect(cube(7)).toBe(343);
            expect(cube(6)).toBe(216);
        });
    });

    describe('raiseToPower', () => {
        const raiseToPower = funcs.raiseToPower;    
        it('num should choose raise to power of exponent', () => {
            expect(raiseToPower(7, 0)).toBe(1);
            expect(raiseToPower(2, 4)).toBe(16);
        });
    });

    describe('roundNumber', () => {
        const roundNumber = funcs.roundNumber;    
        it('should be a round number', () => {
            expect(roundNumber(3.333)).toBe(3);
            expect(roundNumber(6.666)).toBe(7);
            expect(roundNumber(0.777)).toBe(1);
        });
    });

    describe('roundUp', () => {
        const roundUp = funcs.roundUp;    
        it('should round number up', () => {
            expect(roundUp(3.333)).toBe(4);
            expect(roundUp(6.666)).toBe(7);
            expect(roundUp(0.777)).toBe(1);
        });
    });

    describe('addExclamationPoint', () => {
        const addExclamationPoint = funcs.addExclamationPoint;    
        it('should add exclamation point', () => {
            expect(addExclamationPoint('mofo')).toBe('mofo!');
        });
    });

    describe('combineNames', () => {
        const combineNames = funcs.combineNames;    
        it('should combine names', () => {
            expect(combineNames('Julian', 'Alexander')).toBe('Julian Alexander');
        });
    });

    describe('getGreeting', () => {
        const getGreeting = funcs.getGreeting;    
        it('should get greeting', () => {
            expect(getGreeting('Julian')).toBe('Hello Julian!');
        });
    });

    describe('getRectangleArea', () => {
        const getRectangleArea = funcs.getRectangleArea;    
        it('should get a rectangle area', () => {
            expect(getRectangleArea(2, 4)).toBe(8);
            expect(getRectangleArea(3, 6)).toBe(18);
        });
    });    

    describe('getTriangleArea', () => {
        const getTriangleArea = funcs.getTriangleArea;    
        it('should get a triangle area', () => {
            expect(getTriangleArea(2, 4)).toBe(4);
            expect(getTriangleArea(3, 6)).toBe(9);
        });
    });    

    describe('getCircleArea', () => {
        const getCircleArea = funcs.getCircleArea;    
        it('should get a circle area', () => {
            expect(getCircleArea(3)).toBe(Math.PI*3*3);
            expect(getCircleArea(6)).toBe(Math.PI*6*6);
            expect(getCircleArea(7)).toBe(Math.PI*7*7);
            expect(getCircleArea(0)).toBe(0);
        });
    });

    describe('getRectangularPrismVolume', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;    
        it('should get the volume of a rectangular prism', () => {
            expect(getRectangularPrismVolume(3, 6, 7)).toBe(126);
            expect(getRectangularPrismVolume(3, 0, 7)).toBe(0);
            expect(getRectangularPrismVolume(3, 0)).toBe(NaN);
            expect(getRectangularPrismVolume(7, 7, 7)).toBe(343);
        });
    });
});