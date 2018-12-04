const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
    
    //TEST FOR FUNCTION ** multiplyByTen **
    test('should multiply input number by 10', () => {
        expect(helpers.multiplyByTen(10)).toBe(100);
    })
    
    //TEST FOR FUNCTION ** subtractFive **
    test('should subtract input by 5', () => {
        const input = 10;
        const expected = 5;
        const result = helpers.subtractFive(input);

        expect(result).toBe(expected);
    })

    //TEST FOR FUNCTION ** areSameLength **
    describe('areSameLength', () => {
        it('it should check length', () => {
            const expected = true;
            const actual = helpers.areSameLength('dog', 'abc');
            expect(actual).toBe(expected);
        })
    })

    //TEST FOR FUNCTION ** areEqual **
    describe('areEqual', () => {
        it('it should check numbers are equal?', () => {
            const expected = true;
            const actual = helpers.areEqual(25, 25);
            expect(actual).toBe(expected);
        })
    })

    //TEST FOR FUNCTION ** lessThanNinety **
    describe('lessThanNinety', () => {
        it('should check given number is lessThanNinety', () => {
            const expected = true;
            const actual = helpers.lessThanNinety(25);
            expect(actual).toBe(expected);
        })
    })

    //TEST FOR FUNCTION ** greaterThanFifty **
    describe('greaterThanFifty', () => {
        it('it should check given number is greaterThanFifty', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(55);
            expect(actual).toBe(expected);
        });
    });
    
    //TEST FOR FUNCTION ** add **
    describe('add', () => {
        it('should return sum of given numbers', () => {
            const expected = 20;
            const actual = helpers.add(10, 10);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** subtract **
    describe('subtract', () => {
        it('should return subtract of given numbers', () => {
            const expected = 20;
            const actual = helpers.subtract(30, 10);
            expect(actual).toEqual(expected);
        });
    });
    
    //TEST FOR FUNCTION ** divide **
    describe('divide', () => {
        it('should return division of given numbers', () => {
            const expected = 5;
            const actual = helpers.divide(25, 5);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** subtract **
    describe('multiply', () => {
        it('should return product of given numbers', () => {
            const expected = 30;
            const actual = helpers.multiply(3, 10);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** getRemainder **
    describe('getRemainder', () => {
        it('should return remainder', () => {
            const expected = 2;
            const actual = helpers.getRemainder(23, 7);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** isEven **
    describe('isEven', () => {
        it('should return product of given numbers', () => {
            const expected = true;
            const actual = helpers.isEven(10);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** isOdd **
    describe('isOdd', () => {
        it('should check given number is Odd?', () => {
            const expected = false;
            const actual = helpers.isOdd(10);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** square **
    describe('square', () => {
        it('should return square of given number', () => {
            const expected = 25;
            const actual = helpers.square(5);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** cube **
    describe('cube', () => {
        it('should return cube', () => {
            const expected = 125;
            const actual = helpers.cube(5);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** raiseToPower **
    describe('raiseToPower', () => {
        it('should return square of given number', () => {
            const expected = 25;
            const actual = helpers.raiseToPower(5, 2);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** roundNumber **
    describe('roundNumber', () => {
        it('should return round number..', () => {
            const expected = 10;
            const actual = helpers.roundNumber(9.8);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** roundUp **
    describe('roundUp', () => {
        it('should return roundUp number..', () => {
            const expected = 10;
            const actual = helpers.roundUp(9.4);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** addExclamationPoint **
    describe('addExclamationPoint', () => {
        it('should return addExclamationPoint..', () => {
            const expected = 'Hello!';
            const actual = helpers.addExclamationPoint('Hello');
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** combineNames **
    describe('combineNames', () => {
        it('should return roundUp number..', () => {
            const expected = 'Tom Jerry';
            const actual = helpers.combineNames('Tom', 'Jerry');
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** getGreeting **
    describe('getGreeting', () => {
        it('should greet ..', () => {
            const expected = 'Hello Name!';
            const actual = helpers.getGreeting('Name');
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** getRectangleArea **
    describe('getRectangleArea', () => {
        it('should return RectangleArea..', () => {
            const expected = 40;
            const actual = helpers.getRectangleArea(10, 4);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** getTriangleArea **
    describe('getTriangleArea', () => {
        it('should return TriangleArea..', () => {
            const expected = 20;
            const actual = helpers.getTriangleArea(10, 4);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** getCircleArea **
    describe('getCircleArea', () => {
        it('should return CircleArea..', () => {
            const expected = 78.53981633974483;
            const actual = helpers.getCircleArea(5);
            expect(actual).toBe(expected);
        });
    });

    //TEST FOR FUNCTION ** getRectangularPrismVolume **
    describe('getRectangularPrismVolume', () => {
        it('shold return RectangularPrismVolume', () => {
            const expected = 200;
            const actual = helpers.getRectangularPrismVolume(5, 4, 10);
            expect(actual).toBe(expected);
        });
    });
});