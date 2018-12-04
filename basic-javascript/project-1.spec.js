const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
    describe('jest', () => {});
    test('should run tests', () => {});

    describe('multiplyByTen()', () => {
        it('should multiply by ten', () => {
            const expected = 120;
            const actual = helpers.multiplyByTen(12);
            expect(actual).toEqual(expected);
        })
    }) // multiplybyten
    describe('subtractFive()', () => {
        it('should subtract by five', () => {
        const expected = 5;
        const actual = helpers.subtractFive(10);
        expect(actual).toEqual(expected);
    })
    }) // subtractfive
    describe('areSameLength()', () => {
        it('should return if the same length', () => {
            const expected = true;
            const answer = helpers.areSameLength('hola', 'ball');
            expect(answer).toBe(expected)
        })
    }) // areSameLength
    describe('areEqual()', () => {
        it('should say if equal', () => {
            const expected = true;
            const answer = helpers.areSameLength('100', '100');
            expect(answer).toBe(expected)
        })
    }) // areEqual
    describe('lessThanNinety()', () => {
        it('should say if less than 90', () => {
            const expected = true;
            const answer = helpers.lessThanNinety(50);
            expect(answer).toEqual(expected);
        });
    }); // lessThanNinety
    describe('greaterThanFifty()', () => {
        it('should say if it is greater than 50', () => {
            const expected = true;
            const answer = helpers.greaterThanFifty(100);
            expect(answer).toEqual(expected);
        });
    }); // greaterThanFifty
    describe('add()', () => {
        it('should add two numbers', () => {
            const expected = 23;
            const answer = helpers.add(5, 18);
            expect(answer).toEqual(expected);
    }); //add
});
    describe('subtract()', () => {
        it('should subtract two numbers', () => {
            const expected = 175;
            const answer = helpers.subtract(180, 5);
            expect(answer).toEqual(expected);
    });
}); //subtract
    describe('divide()', () => {
        it('should divide two numbers', () => {
            const expected = 100;
            const answer = helpers.divide(1000, 10);
            expect(answer).toEqual(expected);
    });
}); // divide
    describe('multiply()', () => {
        it('should multiply two numbers', () => {
            const expected = 100;
            const answer = helpers.multiply(1, 100);
            expect(answer).toEqual(expected);
    });
}); // multiply
    describe('getRemainder()', () => {
        it('should get the remainder', () => {
            const expected = 1;
            const answer = helpers.getRemainder(10, 3);
            expect(answer).toEqual(expected);
    });
}); // getRemainder

    describe('isEven()', () => {
        it('should test if even', () => {
            const expected = true;
            const answer = helpers.isEven(102);
            expect(answer).toEqual(expected);
    });
}); // isEven

    describe('isOdd()', () => {
        it('should test if odd', () => {
            const expected = true;
            const answer = helpers.isOdd(91);
            expect(answer).toEqual(expected);
    });
}); //isOdd

    describe('square()', () => {
        it('should multiple number by itself', () => {
            const expected = 9;
            const answer = helpers.square(3);
            expect(answer).toEqual(expected);
    });
}); //square

    describe('cube()', () => {
        it('should multiple number by twice', () => {
            const expected = 1000;
            const answer = helpers.cube(10);
            expect(answer).toEqual(expected);
    });
}); //cube

    describe('raiseToPower()', () => {
        it('should raise to exponent', () => {
            const expected = 1000;
            const answer = helpers.raiseToPower(10, 3);
            expect(answer).toEqual(expected);
    });
}); //raiseToPower

    describe('roundNumber()', () => {
        it('should round number', () => {
            const expected = 780;
            const answer = helpers.roundNumber(780.3);
            expect(answer).toEqual(expected);
    });
}); //roundNumber

    describe('roundUp()', () => {
        it('should round number up', () => {
            const expected = 51;
            const answer = helpers.roundUp(50.1);
            expect(answer).toEqual(expected);
    });
}); //roundUp 

    describe('addExclamationPoint()', () => {
        it('should add an exclamation point', () => {
            const expected = 'hola!';
            const answer = helpers.addExclamationPoint('hola');
            expect(answer).toEqual(expected);
    });
}); //addExclamationPoint

    describe('combineNames()', () => {
        it('should combine names', () => {
            const expected = 'marian rivera';
            const answer = helpers.combineNames('marian', 'rivera');
            expect(answer).toEqual(expected);
    });
}); //combineNames

    describe('getGreeting()', () => {
        it('should get a greeting', () => {
            const expected = 'Hello Marian!';
            const answer = helpers.getGreeting('Marian');
            expect(answer).toEqual(expected);
    });
}); //getGreeting

    describe('getRectangleArea()', () => {
        it('should calculate the area of a rectangle', () => {
            const expected = 50;
            const answer = helpers.getRectangleArea(5, 10);
            expect(answer).toEqual(expected);
    });
}); //getRectangleArea

    describe('getTriangleArea()', () => {
        it('should calculate the area of a triangle', () => {
            const expected = 25;
            const answer = helpers.getTriangleArea(10, 5);
            expect(answer).toEqual(expected);
    });
}); //getTriangleArea

    describe('getCircleArea()', () => {
        it('should calculate the area of a circle', () => {
            const expected = 28.274333882308138;
            const answer = helpers.getCircleArea(3);
            expect(answer).toEqual(expected);
    });
}); //getCircleArea

    describe('getRectangularPrismVolume()', () => {
        it('should calculate rectangular prism volume', () => {
            const expected = 75;
            const answer = helpers.getRectangularPrismVolume(5, 3, 5);
            expect(answer).toEqual(expected);
    });
}); //getRectangularPrismVolume

}) // project js
