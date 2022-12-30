const helpers = require('./project-1');

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        });

        it('should return the given number multiplied by 10', () => {
            expect(helpers.multiplyByTen(2)).toBe(20)
        });
    });
});

describe('project-1', () => {
    describe('subtractFive', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
        });

        it('should return the given number substracted by 5', () => {
            expect(helpers.subtractFive(30)).toBe(25)
        });
    });
});

describe('project-1', () => {
    describe('areSameLength', () => {
        it('should return boolean indicate equal comparison', () => {
            expect(helpers.areSameLength('hello', 'world')).toBe(true)
        });
    });
});

describe('project-1', () => {
    describe('areEqual', () => {
        it('should return boolean indicate equal number', () => {
            expect(helpers.areEqual(5, 5)).toBe(true)
        });
    });
});

describe('project-1', () => {
    describe('lessThanNinety', () => {
        it('should return boolean indicate a number smaller then 90', () => {
            expect(helpers.lessThanNinety(70)).toBe(true)
            expect(helpers.lessThanNinety(100)).toBe(false)
        });
    });
});

describe('project-1', () => {
    describe('greaterThanFifty', () => {
        it('should return boolean indicate a number greater than fifty', () => {
            expect(helpers.greaterThanFifty(70)).toBe(true)
            expect(helpers.greaterThanFifty(10)).toBe(false)
        });
    });
});

describe('project-1', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(helpers.add(4, 20)).toBe(24);
        });
    });
});

describe('project-1', () => {
    describe('substract', () => {
        it('returns the subtracted remain of two numbers', () => {
            expect(helpers.subtract(35, 5)).toBe(30);
        });
    });
});

describe('project-1', () => {
    describe('divide', () => {
        it('should return the first given number divided by the second', () => {
            expect(helpers.divide(9, 3)).toBe(3);
        });
    });
});

describe('project-1', () => {
    describe('multiply', () => {
        it('should return the first given number multiplied by the second', () => {
            expect(helpers.multiply(6, 9)).toBe(54);
        });
    });
});

describe('project-1', () => {
    describe('getRemainder', () => {
        it('should return the remainder of two numbers', () => {
            expect(helpers.getRemainder(9, 2)).toBe(1);
        });
    });
});

describe('project-1', () => {
    describe('isEven', () => {
        it('should return boolean indicates the given number is even', () => {
            expect(helpers.isEven(4)).toBe(true);
            expect(helpers.isEven(5)).toBe(false);
        });
    });
});

describe('project-1', () => {
    describe('isOdd', () => {
        it('should return boolean indicate the given number is odd', () => {
            expect(helpers.isOdd(4)).toBe(false);
            expect(helpers.isOdd(5)).toBe(true);
        });
    });
});

describe('project-1', () => {
    describe('square', () => {
        it('should return square of the given number', () => {
            expect(helpers.square(8)).toBe(64);
        });
    });
});

describe('project-1', () => {
    describe('cube', () => {
        it('should return cube of the given number', () => {
            expect(helpers.cube(4)).toBe(64);
        });
    });
});

describe('project-1', () => {
    describe('raiseToPower', () => {
        it('should return the given number powered by the given exponent', () => {
            expect(helpers.raiseToPower(8, 2)).toBe(64);
        });
    });
});

describe('project-1', () => {
    describe('roundNumber', () => {
        it('should return the rounded given number', () => {
            expect(helpers.roundNumber(8.4)).toBe(8);
        });
    });
});

describe('project-1', () => {
    describe('roundUp', () => {
        it('should return the rounded up given number', () => {
            expect(helpers.roundUp(8.4)).toBe(9);
        });
    });
});

describe('project-1', () => {
    describe('addExclamationPoint', () => {
        it('should return the given string followed by an exclamation', () => {
            expect(helpers.addExclamationPoint('hello')).toBe('hello!');
        });
    });
});

describe('project-1', () => {
    describe('combineNames', () => {
        it('should return a combined string of the first and second given strings', () => {
            expect(helpers.combineNames('thuy', 'pham')).toBe('thuy pham');
        });
    });
});

describe('project-1', () => {
    describe('getGreeting', () => {
        it('should return a greeting includes a name', () => {
            expect(helpers.getGreeting('thuy')).toBe('Hello thuy!');
        });
    });
});

describe('project-1', () => {
    describe('getRectangleArea', () => {
        it('should return area of a rectangle by its length and width', () => {
            expect(helpers.getRectangleArea(8, 5)).toBe(40);
        });
    });
})

describe('project-1', () => {
    describe('getCircleArea', () => {
        it('should return area of a circle by its radius', () => {
            expect(helpers.getCircleArea(8)).toBeCloseTo(201, 0);
        });
    });
})

describe('project-1', () => {
    describe('getRectangularPrismVolume', () => {
        it('should return volume of a rectangle by its length, width and height', () => {
            expect(helpers.getRectangularPrismVolume(8, 5, 2)).toBe(80);
        });
    });
})
