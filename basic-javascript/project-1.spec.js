
const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns NaN when given a non numeric value', () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('two')).toBeNaN();
    });    
    it('should return the given number multiplied by 10', () => {});
    expect(helpers.multiplyByTen(2)).toBe(20);
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
    it('should return a boolean to indicate equal comparison', () => {
        expect(helpers.areSameLength('this', 'that')).toBe(true);       
    });
  });
});
describe('project-1', () => {
  describe('areEqual', () => {
    it('should return a boolean to indicate equalility', () => {
        expect(helpers.areEqual(5, 5)).toBe(true);       
      }); 
    });
 });

 describe('project-1', () => {
   describe('lessThanNinety', () => {
    it('should return a boolean to indicate a given number is less than 90', () => {
        expect(helpers.lessThanNinety(70)).toBe(true);      
        expect(helpers.lessThanNinety(100)).toBe(false);         
      }); 
   });
 });

 describe('project-1', () => {
  describe('greaterThanFifty', () => {
    it('should return a boolean to indicate a given number is greater than 50', () => {
        expect(helpers.greaterThanFifty(70)).toBe(true);  
        expect(helpers.greaterThanFifty(20)).toBe(false); 
 
    })
  })
})

describe('project-1', () => {
 describe('add', () => {
    it('should return the sum of two numbers', () => {
        expect(helpers.add(10, 14)).toBe(24);  
    })
  })
})

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
        it('should return the product of two given numbers', () => {
            expect(helpers.multiply(6, 9)).toBe(54);
        });
    });
});

describe('project-1', () => {
    describe('getRemainder', () => {
        it('should return the remainder of two numbers', () => {
            expect(helpers.getRemainder(13, 2)).toBe(1);
        });
    });
});
describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(helpers.isEven(4)).toBeTruthy();
    expect(helpers.isEven(0)).toBeTruthy();
  });
  it('should return false for odd numbers', () => {
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(-1)).toBeFalsy();
  });
});

 describe('isOdd', () => {
    it('should return true for odd numbers', () => {
       expect(helpers.isOdd(3)).toBeTruthy();
       expect(helpers.isOdd(-1)).toBeTruthy();
    })
    it('should return false for even numbers', () => {
        expect(helpers.isOdd(6)).toBeFalsy();
        expect(helpers.isOdd(0)).toBeFalsy();
 
    });
 });

 describe('project-1', () => {
    describe('square', () => {
        it('should return the square of a given number', () => {
            expect(helpers.square(5)).toBe(25);
        });
    });
});

describe('project-1', () => {
    describe('cube', () => {
        it('should return the cube of a given number', () => {
            expect(helpers.cube(3)).toBe(27);
        });
    });
});

describe('project-1', () => {
    describe('raiseToPower', () => {
        it('should return the given number raised to the power of the given exponent', () => {
            expect(helpers.raiseToPower(7, 2)).toBe(49);
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
        it('should return the given number, rounded up', () => {
            expect(helpers.roundUp(8.4)).toBe(9);
        });
    });
});

describe('project-1', () => {
    describe('addExclamationPoint', () => {
        it('should return a concatination of the given string and !', () => {
            expect(helpers.addExclamationPoint('david')).toBe('david!');
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
    describe('combineNames', () => {
        it('should return a combined string of the first and second given strings', () => {
            expect(helpers.combineNames('David', 'Loveday')).toBe('David Loveday');
        });
    });
});

describe('project-1', () => {
    describe('getGreeting', () => {
        it('should return a greeting, including given and Hello', () => {
            expect(helpers.getGreeting('David')).toBe('Hello David!');
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

