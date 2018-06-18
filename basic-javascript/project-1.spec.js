const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
        expect(helpers.multiplyByTen({ key: "value" })).toBeNaN();
    })
    it('returns the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(2)).toBe(20);
        expect(helpers.multiplyByTen(-2)).toBe(-20);
        expect(helpers.multiplyByTen(0)).toBe(0);
        expect(helpers.multiplyByTen(.5)).toBe(5);
    })
})

describe('subtractFive', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('two')).toBeNaN();
        expect(helpers.subtractFive({ key: "value" })).toBeNaN();
    })
    it('returns the given number subtracted by 5', () => {
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(-2)).toBe(-7);
        expect(helpers.subtractFive(0)).toBe(-5);
        expect(helpers.subtractFive(.5)).toBe(-4.5);
    })
})

describe('areSameLength', () => {
    it('returns boolean when not a string', () => {
        expect(helpers.areSameLength('hello', 54343)).toBeFalsy();
    })
    it('should return boolean for equal comparison', () => {
        expect(helpers.areSameLength('kings', 'smile')).toBeTruthy();
        expect(helpers.areSameLength('12', '14')).toBeTruthy();
    });
    it('should return boolean for un-equal comparison', () => {
        expect(helpers.areSameLength('kings', 'greeting')).toBeFalsy();
    });
})

describe('areEqual', () => {
    it('returns boolean for un-equal comparison', () => {
        expect(helpers.areEqual('kings', 'king')).toBeFalsy();
        expect(helpers.areEqual('kings', '89980')).toBeFalsy();
        expect(helpers.areEqual('Kings', 'kings')).toBeFalsy();
    })  
    it('should return boolean for equal comparison', () => {
        expect(helpers.areEqual('kings', 'kings')).toBeTruthy();
        expect(helpers.areEqual('12', '12')).toBeTruthy();
        expect(helpers.areEqual(12, 12)).toBeTruthy();
    });
})

describe('lessThanNinety', () => {
    it('returns boolean when given a non numeric value', () => {
        expect(helpers.lessThanNinety('two')).toBeFalsy();
    })
    it('should return boolean for a number smaller than 90', () => {
        expect(helpers.lessThanNinety(70)).toBeTruthy();
    });
    it('should return boolean for a number larger than 90', () => {
        expect(helpers.lessThanNinety(90)).toBeFalsy();
    });
})

describe('greaterThanFifty', () => {
    it('returns boolean when given a non numeric value', () => {
        expect(helpers.greaterThanFifty('two')).toBeFalsy();
    })
    it('should return boolean for a number smaller than 90', () => {
        expect(helpers.greaterThanFifty(70)).toBeTruthy();
    });
    it('should return boolean for a number larger than 90', () => {
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
    });
})


describe('add', () => {
    it('returns the given numbers added together', () => {
        expect(helpers.add(2, 3)).toBe(5);
        expect(helpers.add(-2, -3)).toBe(-5);
        expect(helpers.add(.5, 5)).toBe(5.5);
    })
    it('returns concatinated string when given 2 strings', () => {
        expect(helpers.add('two', 'hello')).toBe("twohello");
    })
})

describe('subtract', () => {
    it('returns the given numbers subtracted', () => {
        expect(helpers.subtract(3, 2)).toBe(1);
        expect(helpers.subtract(-2, 0)).toBe(-2);
        expect(helpers.subtract(.5, 5)).toBe(-4.5);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtract('two', 'hello')).toBeNaN();
    })
})

describe('multiply', () => {
    it('returns the given numbers multiplied', () => {
        expect(helpers.multiply(3, 4)).toBe(12);
        expect(helpers.multiply(-2, 0)).toBe(-0);
        expect(helpers.multiply(.5, 5)).toBe(2.5);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiply('two', 'hello')).toBeNaN();
    })
})

describe('divide', () => {
    it('returns the given numbers divided', () => {
        expect(helpers.divide(10, 5)).toBe(2);
        expect(helpers.divide(.5, 5)).toBe(.1);
    })
    it('returns false when given a non numeric value', () => {
        expect(helpers.divide('two', 'hello')).toBeFalsy();
    })
})
describe('getRemainder', () => {
    it('returns the given remainder of the given number', () => {
        expect(helpers.getRemainder(10, 5)).toBe(0);
        expect(helpers.getRemainder(.5, 6)).toBe(.5);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getRemainder('two', 'hello')).toBeNaN();
    })
})

describe('isEven', () => {
    it('returns boolean if number is even', () => {
        expect(helpers.isEven(2)).toBeTruthy();
    })
    it('returns boolean if number is odd', () => {
        expect(helpers.isEven(5)).toBeFalsy();
    })
    it('returns false when given a non numeric value', () => {
        expect(helpers.isEven('two')).toBeFalsy();
    })
})

describe('isOdd', () => {
    it('returns boolean if number is even', () => {
        expect(helpers.isOdd(2)).toBeFalsy();
    })
    it('returns boolean if number is odd', () => {
        expect(helpers.isOdd(5)).toBeTruthy();
    })
})

describe('square', () => {
    it('returns the square of the number', () => {
        expect(helpers.square(5)).toBe(25);
        expect(helpers.square(-5)).toBe(25);
        expect(helpers.square(0)).toBe(0);
    });

    it('should return NaN for a non numeric value', () => {
        expect(helpers.square('two')).toBeNaN();
    });
});


describe('cube', () => {
    it('returns number cubed', () => {
        expect(helpers.cube(3)).toBe(27);
        expect(helpers.cube(-3)).toBe(-27);
        expect(helpers.cube(0)).toBe(0);
    });

    it('should return NaN for a non numeric value', () => {
        expect(helpers.cube('two')).toBeNaN();
        expect(helpers.cube(undefined)).toBeNaN();
    });
});

describe('raiseToPower', () => {
    it('returns the exponent for the 2 Numbers', () => {
        expect(helpers.raiseToPower(2, 3)).toBe(8);
        expect(helpers.raiseToPower(2, 0)).toBe(1);
        expect(helpers.raiseToPower(-2, 3)).toBe(-8);
    });

    it('returns NaN for non numeric values', () => {
        expect(helpers.raiseToPower(4, 'two')).toBeNaN();
        expect(helpers.raiseToPower('one', 'two')).toBeNaN();
    });

    it('returns a number from booleans', () => {
        expect(helpers.raiseToPower(2, false)).toBe(1);
        expect(helpers.raiseToPower(false, true)).toBe(0);
    });
});

describe('roundNumber', () => {
    it('returns the number rounded', () => {
        expect(helpers.roundNumber(4.4)).toBe(4);
        expect(helpers.roundNumber(2.8)).toBe(3);
        expect(helpers.roundNumber(false)).toBe(0);
    });

    it('returns NaN for non numeric values', () => {
        expect(helpers.roundNumber('two')).toBeNaN();
        expect(helpers.roundNumber(undefined)).toBeNaN();
    });
});

describe('roundUp', () => {
    it('returns the number rounded upwards', () => {
        expect(helpers.roundUp(5.3)).toBe(6);
        expect(helpers.roundUp(2.8)).toBe(3);
        expect(helpers.roundUp(false)).toBe(0);
    });

    it('returns NaN for non numeric values', () => {
        expect(helpers.roundUp('to')).toBeNaN();
        expect(helpers.roundUp(undefined)).toBeNaN();
    });
});

describe('addExclamationPoint', () => {
    it('returns string with exclamation point at end', () => {
        expect(helpers.addExclamationPoint('anne')).toBe('anne!');
        expect(helpers.addExclamationPoint(4)).toBe('4!');
        expect(helpers.addExclamationPoint(null)).toBe('null!');
        expect(helpers.addExclamationPoint(undefined)).toBe('undefined!');
        expect(helpers.addExclamationPoint(true)).toBe('true!');
    });
});

describe('combineNames', () => {
    it('returns a string with the names/words combined', () => {
        expect(helpers.combineNames('Anne', 'Courtney')).toBe('Anne Courtney');
        expect(helpers.combineNames(3, 4)).toBe('3 4');
        expect(helpers.combineNames('Cat', 34)).toBe('Cat 34');
        expect(helpers.combineNames(false, true)).toBe('false true');
    });
});

describe('getGreeting', () => {
    it('returns a string with the name added in', () => {
        expect(helpers.getGreeting('Coraline')).toBe('Hello Coraline!');
        expect(helpers.getGreeting(9)).toBe('Hello 9!');
        expect(helpers.getGreeting(null)).toBe('Hello null!');
    });
});

describe('getRectangularArea', () => {
    it('returns the area of the rectangle', () => {
        expect(helpers.getRectangleArea(2, 3)).toBe(6);
    });
    it('returns NaN for non numerical values', () => {
        expect(helpers.getRectangleArea('two', 9)).toBeNaN();
        expect(helpers.getRectangleArea('one', 'two')).toBeNaN();
    });

    it('returns a number given booleans', () => {
        expect(helpers.getRectangleArea(true, false)).toBe(0);
    });
});

describe('getTriangleArea', () => {
    it('returns the area of triangle from the 2 numbers', () => {
        expect(helpers.getTriangleArea(3, 3)).toBe(4.5);
    });

    it('returns NaN for non numerical values', () => {
        expect(helpers.getTriangleArea('fourteen', 3)).toBeNaN();
        expect(helpers.getTriangleArea('two', 'one')).toBeNaN();
    });
});

describe('getCircleArea', () => {
    it('returns the cirlce area with 2 numbers', () => {
        expect(helpers.getCircleArea(3)).toBeCloseTo(28, 0);
    });

    it('returns NaN for a non numerical values', () => {
        expect(helpers.getCircleArea('two')).toBeNaN();
    });
});

describe('getRectangularPrismVolume', () => {
    it('returns the rectangular prism  area with 3 numbers', () => {
        expect(helpers.getRectangularPrismVolume(2, 3, 1)).toBe(6);
        expect(helpers.getRectangularPrismVolume(5, 4, 1)).toBe(20);
        expect(helpers.getRectangularPrismVolume(23, 40, 0)).toBe(0);
    });

    it('returns NaN for a non numerical value', () => {
        expect(helpers.getRectangularPrismVolume('two', 'three', 'four')).toBeNaN();
    });
});

// multiplyByTen,
// subtractFive,
// areSameLength,
// areEqual,
// lessThanNinety,
// greaterThanFifty,
// add,
// subtract,
// divide,
// multiply,
// getRemainder,
// isEven,
// isOdd,
// square,
// cube,
// raiseToPower,
// roundNumber,
// roundUp,
// addExclamationPoint,
// combineNames,
// getGreeting,
// getRectangleArea,
// getTriangleArea,
// getCircleArea,
// getRectangularPrismVolume