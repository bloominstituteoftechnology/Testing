const helpers = require('./project-1');

describe('multiplyByTen', () => {
  it('should multiply by 10', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
  });
});

describe('subtractFive', () => {
  it('should subtract by five', () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });
});

describe('areSameLength', () => {
  it('should return true if the strings are the same length', () => {
    expect(helpers.areSameLength('len', 'hey')).toBe(true);
  });

  it('should return false if the strings are not same length', () => {
    expect(helpers.areSameLength('freddy', 'o')).toBe(false);
  })

  it('should return null if they aren\'t strings', () => {
    expect(helpers.areSameLength('', 100)).toBe(null);
  });
});

describe('areEqual', () => {
  it('should return true if equal', () => {
    expect(helpers.areEqual('6', 6)).toBe(true);
  });

  it('should return false if not equal', () => {
    expect(helpers.areEqual(7, 5)).toBe(false);
  });

  it('should return null if NaN', () => {
    expect(helpers.areEqual(NaN, 12)).toBe(null);
  })
});

describe('lessThanNinety', () => {
  it('should return true if less than 90', () => {
    expect(helpers.lessThanNinety(80)).toBe(true);
  });

  it('should return false if not less than 90', () => {
    expect(helpers.lessThanNinety(90)).toBe(false);
  });

  it('should return null if NaN', () => {
    expect(helpers.lessThanNinety('10two')).toBe(null);
  });
});

describe('greaterThanFifty', () => {
  it('should return true if greater than 50', () => {
    expect(helpers.greaterThanFifty('901')).toBe(true);
  });

  it('should return false if not greater than 50', () => {
    expect(helpers.greaterThanFifty(40)).toBe(false);
  });

  it('should return null if NaN', () => {
    expect(helpers.greaterThanFifty('900two')).toBe(null);
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(helpers.add(2, 2)).toBe(4);
  });

  it('should handle convertible strings as numbers', () => {
    expect(helpers.add('50', '4.5')).toBe(54.5);
  });

  it('should return null if given NaN or a non-number string', () => {
    expect(helpers.add(4, 'six')).toBe(null);
  })
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(helpers.subtract(-5, 0.5)).toBe(-5.5);
  });

  it('should handle convertible strings as numbers', () => {
    expect(helpers.subtract('200', 100)).toBe(100);
  });

  it('should return null given NaN or a non-number string', () => {
    expect(helpers.subtract('t', 0)).toBe(null);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(helpers.divide(5, 2)).toBe(2.5);
  });

  it('should handle convertible strings as numbers', () => {
    expect(helpers.divide(10, ' 5 ')).toBe(2);
    expect(helpers.divide('200', '2')).toBe(100);
  });

  it('should return null given NaN or a non-number string', () => {
    expect(helpers.divide('twenty', 'ten')).toBe(null);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(helpers.multiply(50, 2)).toBe(100);
  });

  it('should handle convertible strings as numbers', () => {
    expect(helpers.multiply('60', 2)).toBe(120);
  });

  it('should return null given NaN or a non-number string', () => {
    expect(helpers.multiply(NaN, 2)).toBe(null);
  });
});

describe('getRemainder', () => {
  it('should return the correct remainder', () => {
    expect(helpers.getRemainder(51, 2)).toBe(1);
    expect(helpers.getRemainder(50, 2)).toBe(0);
    expect(helpers.getRemainder(12, 0)).toBe(NaN);
  });

  it('should handle convertible strings as numbers', () => {
    expect(helpers.getRemainder(' 2', '1.5 ')).toBe(0.5);
  });

  it('should return null given NaN', () => {
    expect(helpers.getRemainder(12, 'twelve')).toBe(null);
  });
});

describe('isEven', () => {
  it('should return true if even', () => {
    expect(helpers.isEven('20')).toBe(true);
  });

  it('should return false if odd', () => {
    expect(helpers.isEven(1)).toBe(false);
  });

  it('should return null if NaN', () => {
    expect(helpers.isEven('fff')).toBe(null);
  });
});

describe('isOdd', () => {
  it('should return true if odd', () => {
    expect(helpers.isOdd('21')).toBe(true);
  });

  it('should return false if even', () => {
    expect(helpers.isOdd(2)).toBe(false);
  });

  it('should return null if NaN', () => {
    expect(helpers.isOdd('fff')).toBe(null);
  });
});

describe('square', () => {
  it('should return the square of the given number', () => {
    expect(helpers.square(5)).toBe(25);
  });

  it('should return the square of a convertible string', () => {
    expect(helpers.square(' 10 ')).toBe(100);
  });

  it('should return the null if NaN', () => {
    expect(helpers.square('this doesn\'t belong here')).toBe(null);
  });
});

describe('cube', () => {
  it('should return the cube of the given number', () => {
    expect(helpers.cube(5)).toBe(125);
  });

  it('should return the cube of a convertible string', () => {
    expect(helpers.cube(' 10 ')).toBe(1000);
  });

  it('should return the null if NaN', () => {
    expect(helpers.cube('this doesn\'t belong here')).toBe(null);
  });
});

describe('raiseToPower', () => {
  it('should return the result of the given power of the given number', () => {
    expect(helpers.raiseToPower(5, 3)).toBe(125);
  });

  it('should return the result of the given power of a convertible string', () => {
    expect(helpers.raiseToPower(' 10 ', '2.000001')).toBeCloseTo(100);
  });

  it('should return the null if NaN', () => {
    expect(helpers.raiseToPower('this doesn\'t belong here', 'doot')).toBe(null);
  });
});

describe('roundNumber', () => {
  it('should round based on closeness to an integer', () => {
    expect(helpers.roundNumber(6.51)).toBe(7);
    expect(helpers.roundNumber(65.49)).toBe(65);
  });

  it('should take strings that are convertible to nums', () => {
    expect(helpers.roundNumber('4.5')).toBe(5);
  });

  it('should return null if given NaN', () => {
    expect(helpers.roundNumber({ a: 20 })).toBe(null);
  });
});

describe('roundUp', () => {
  it('should round up if possible', () => {
    expect(helpers.roundUp(6.49)).toBe(7);
    expect(helpers.roundUp(65.00001)).toBe(66);
    expect(helpers.roundUp(65)).toBe(65);
  });

  it('should take strings that are convertible to nums', () => {
    expect(helpers.roundUp('4.2')).toBe(5);
  });

  it('should return null if given NaN', () => {
    expect(helpers.roundUp({ a: 'test' })).toBe(null);
  });
});

describe('addExclamationPoint', () => {
  it('should add a exclamation point to the given string', () => {
    expect(helpers.addExclamationPoint('Hello, world')).toBe('Hello, world!');
  });

  it('should return null if not a string', () => {
    expect(helpers.addExclamationPoint(12)).toBe(null);
  });
});

describe('combineNames', () => {
  it('should combine a first and last name', () => {
    expect(helpers.combineNames('John', 'O\'Rourke')).toBe('John O\'Rourke');
  });

  it('should return null if not a string', () => {
    expect(helpers.combineNames(12, 'Smith')).toBe(null);
  });
});

describe('getGreeting', () => {
  it('should return a greeting with the given name', () => {
    expect(helpers.getGreeting('John')).toBe('Hello John!');
  });

  it('should return null if not a string', () => {
    expect(helpers.getGreeting(12)).toBe(null);
  });
});

describe('getRectangleArea', () => {
  it('should return the area of the given rectangle', () => {
    expect(helpers.getRectangleArea(5, 2)).toBe(10);
    expect(helpers.getRectangleArea(10, 2.5)).toBe(25);
  });
});

describe('getTriangleArea', () => {
  it('should return the area of the given triangle', () => {
    expect(helpers.getTriangleArea(2, 2)).toBe(2);
  });
});

describe('getCircleArea', () => {
  it('should return the area of the given circle', () => {
    expect(Math.round(helpers.getCircleArea(2))).toBe(13);
  });
});

describe('getRectangularPrismVolume', () => {
  it('should return the volume of the given rectangular prism', () => {
    expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8);
  });
});
