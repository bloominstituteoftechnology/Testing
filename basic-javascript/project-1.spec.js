const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
        })
        it('should return the given number muliplied by 10', () => {
            expect(helpers.multiplyByTen(10)).toEqual(100);
            expect(helpers.multiplyByTen(-10)).toEqual(-100);
            expect(helpers.multiplyByTen(0)).toEqual(0);
        });
    })
})

describe('project-1', () => {
    describe('subtractFive', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
        })
        it('should return the given number subtracted by five', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
            expect(helpers.subtractFive(-10)).toEqual(-15);
            expect(helpers.subtractFive(0)).toEqual(-5);
            
        });
    })
})

describe('project-1', () => {
    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(0)).toBeTruthy();
        });
        it('should return false for false numbers', () => {
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
        });
    });

});

describe('project-1', () => {
    describe('areSameLength', () => {
        it('should return true for even numbers', () => {
            expect(helpers.areSameLength("The", "The")).toBeTruthy();
            expect(helpers.areSameLength("Two", "Cat")).toBeTruthy();
        });
        it('should return false for false numbers', () => {
            expect(helpers.areSameLength("At", "I")).toBeFalsy();
            expect(helpers.areSameLength("", " ")).toBeFalsy();
        });
    });

});

describe('project-1', () => {
    describe('areEqual', () => {
        it('should return true for equivalent variables', () => {
            expect(helpers.areEqual("The", "The")).toBeTruthy();
            expect(helpers.areEqual(5, 5)).toBeTruthy();
            expect(helpers.areEqual(" ", " ")).toBeTruthy();
        });
        it('should return false for nonequivalent variables', () => {
            expect(helpers.areEqual("At", "at")).toBeFalsy();
            expect(helpers.areEqual( 5, "five" )).toBeFalsy();
            expect(helpers.areEqual("", " ")).toBeFalsy();
        });
    });
});

describe('project-1', () => {
    describe('lessThanNinety', () => {
        it('should return true for numbers less than ninety', () => {
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(5.5)).toBeTruthy();
            expect(helpers.lessThanNinety(" ")).toBeTruthy();
            expect(helpers.lessThanNinety(-2)).toBeTruthy();
        });
        it('should return false for nonequivalent variables', () => {
            expect(helpers.lessThanNinety("At")).toBeFalsy();
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            
        });
    });
});

describe('project-1', () => {
    describe('greaterThanFifty', () => {
        it('should return true for numbers greater than fifty', () => {
            expect(helpers.greaterThanFifty(89)).toBeTruthy();
            expect(helpers.greaterThanFifty(50.5)).toBeTruthy();
        });
        it('should return false for numbers less than fifty', () => {
            expect(helpers.greaterThanFifty("At")).toBeFalsy();
            expect(helpers.greaterThanFifty(49)).toBeFalsy();
            expect(helpers.greaterThanFifty(" ")).toBeFalsy();
        });
    });
});

describe('project-1', () => {
    describe('add', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.add(undefined)).toBeNaN();
            expect(helpers.add(null)).toBeNaN();
        })
        it('should add two numbers and return sum', () => {
            expect(helpers.add(10, 90)).toEqual(100);
            expect(helpers.add(-10, -100)).toEqual(-110);
            expect(helpers.add(0, 0)).toEqual(0);
            expect(helpers.add(2 , -2)).toEqual(0);
        });
    })
})

describe('project-1', () => {
    describe('subtract', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtract(undefined)).toBeNaN();
            expect(helpers.subtract(null)).toBeNaN();
            expect(helpers.subtract("two", "two")).toBeNaN();
        })
        it('should return the differance of two numbers', () => {
            expect(helpers.subtract(10, 90)).toEqual(-80);
            expect(helpers.subtract(-10, -100)).toEqual(90);
            expect(helpers.subtract(0, 0)).toEqual(0);
            expect(helpers.subtract(2 , -2)).toEqual(4);
        });
    })
})

describe('project-1', () => {
    describe('divide', () => {
        it('returns NaN when given a non numeric value or divide by zero', () => {
            expect(helpers.divide(undefined)).toBeNaN();
            expect(helpers.divide(null)).toBeNaN();
            expect(helpers.divide("two", "two")).toBeNaN();
            expect(helpers.divide(0, 0)).toBeNaN();
        })
        it('should return the division of to numbers', () => {
            expect(helpers.divide(90, 90)).toEqual(1);
            expect(helpers.divide(-100, 10)).toEqual(-10);
            expect(helpers.divide(4 , 2)).toEqual(2);
        });
    })
})

describe('project-1', () => {
    describe('multiply', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiply(undefined)).toBeNaN();
            expect(helpers.multiply(null)).toBeNaN();
            expect(helpers.multiply("two", "two")).toBeNaN();
        
        })
        it('should return the division of to numbers', () => {
            expect(helpers.multiply(9, 9)).toEqual(81);
            expect(helpers.multiply(-100, 10)).toEqual(-1000);
            expect(helpers.multiply(4 , 2)).toEqual(8);
            expect(helpers.multiply(0, 0)).toEqual(0);
        });
    })
})

describe('project-1', () => {
    describe('getRemainder', () => {
        it('returns NaN when given a non numeric value or divide by zero', () => {
            expect(helpers.getRemainder(undefined)).toBeNaN();
            expect(helpers.getRemainder(null)).toBeNaN();
            expect(helpers.getRemainder("two", "two")).toBeNaN();
            expect(helpers.getRemainder(0, 0)).toBeNaN();
        })
        it('should return remainder from the division of to numbers', () => {
            expect(helpers.getRemainder(9, 9)).toEqual(0);
            expect(helpers.getRemainder(-100, 10)).toEqual(-0);
            expect(helpers.getRemainder(4 , 2)).toEqual(0);
        });
    })
})

describe('project-1', () => {
    describe('square', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.square(undefined)).toBeNaN();
            expect(helpers.square("two")).toBeNaN();
        
        })
        it('should return a num multiplyed by itself', () => {
            expect(helpers.square(9)).toEqual(81);
            expect(helpers.square(-100)).toEqual(10000);
            expect(helpers.square(4)).toEqual(16);
            expect(helpers.square(0)).toEqual(0);
        });
    })
})



