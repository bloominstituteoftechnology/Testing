const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('test')).toBeNaN();
      
    });
    it('should return number multi by 10', () => {
      expect(helpers.multiplyByTen(10)).toEqual(100);
      expect(helpers.multiplyByTen(0)).toBe(0);
    })
  })

  describe('subtractFive', () => {
    it('should return a num with 5 removed', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    })
  })

  describe('areSameLength', () => {
    it('length of strings should equal', () => {
      expect(helpers.areSameLength("abcd","ksld")).toBeTruthy();
      expect(helpers.areSameLength("abcd","kslasdfd")).toBeFalsy();
    })
  })

  describe('areEqual', () => {
    it('numbers should equal', () => {
      expect(helpers.areEqual(512,512)).toBeTruthy();
      expect(helpers.areEqual(5,4)).toBeFalsy();
    })
  })

  describe('lessThanNinety', () => {
    it('lessThanNinety', () => {
      expect(helpers.lessThanNinety(89)).toBeTruthy();
      expect(helpers.lessThanNinety(90)).toBeFalsy();
    })
  })

  describe('greaterThanFifty', () => {
    it('greaterThanFifty', () => {
      expect(helpers.greaterThanFifty(89)).toBeTruthy();
      expect(helpers.greaterThanFifty(40)).toBeFalsy();
    })
  })

  describe('add', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.add(undefined,2)).toBeNaN();
      expect(typeof(helpers.add('test',4))).toBe('string');
      
    });
    it('should add ', () => {
      expect(helpers.add(10,10)).toEqual(20);
      expect(helpers.add(70,-1)).toBe(69);
    });
  });

  describe('subtract', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.subtract(undefined,2)).toBeNaN();
      expect(helpers.subtract('test',4)).toBeNaN();
    });
    it('should subtract ', () => {
      expect(helpers.subtract(10,10)).toEqual(0);
      expect(helpers.subtract(70,-1)).toBe(71);
    });
  });

  describe('divide', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.divide(undefined,2)).toBeNaN();
      expect(helpers.divide('test',4)).toBeNaN();
      
    });
    it('should divide ', () => {
      expect(helpers.divide(10,10)).toEqual(1);
      expect(helpers.divide(700,10)).toBe(70);
    })
  })

  describe('multiply', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.multiply(undefined,2)).toBeNaN();
      expect(helpers.multiply('test',4)).toBeNaN();
      
    });
    it('should multiply ', () => {
      expect(helpers.multiply(10,10)).toEqual(100);
      expect(helpers.multiply(700,10)).toBe(7000);
    })
  })

  describe('getRemainder', () => {
    it('returns remainder when given 2 values', () => {
      expect(helpers.getRemainder(3,2)).toEqual(1);
    });
    it('returns remainder when devided by 0', () => {
      expect(helpers.getRemainder(3,0)).toBeNaN();
    });
    it('returns remainder when given a string', () => {
      expect(helpers.getRemainder(3,"p")).toBeNaN();
    });
  })

  describe('isEven', () => {
    it('returns remainder when given 2 values', () => {
      expect(helpers.isEven(4)).toEqual(true);
    });
    it('returns remainder when devided by 0', () => {
      expect(helpers.isEven(0)).toEqual(true);
    });
    it('returns remainder when given a string', () => {
      expect(helpers.getRemainder("p")).toBeNaN();
    });
  })

  describe('isOdd', () => {
    it('returns remainder when given 2 values', () => {
      expect(helpers.isOdd(4)).toEqual(false);
      expect(helpers.isOdd(21)).toEqual(true);
    });
    it('returns remainder when devided by 0', () => {
      expect(helpers.isOdd(0)).toEqual(false);
    });
    it('returns remainder when given a string', () => {
      expect(helpers.isOdd("p")).toEqual(true);
    });
  })

  describe('square', () => {
    it('returns squar', () => {
      expect(helpers.square(4)).toEqual(16);
      expect(helpers.square(21)).toEqual(441);
    });
  })

  describe('cube', () => {
    it('returns cube', () => {
      expect(helpers.cube(4)).toEqual(64);
      expect(helpers.cube(3)).toEqual(27);
    });
  })

  describe('raiseToPower', () => {
    it('returns raisetopower', () => {
      expect(helpers.raiseToPower(4,3)).toEqual(64);
      expect(helpers.raiseToPower(3,4)).toEqual(81);
    });
  })

  describe('roundNumber', () => {
    it('returns roundNumber', () => {
      expect(helpers.roundNumber(4.34)).toEqual(4);
      expect(helpers.roundNumber(4.54)).toEqual(5);
    });
  })

  describe('roundUp', () => {
    it('returns roundUp', () => {
      expect(helpers.roundUp(4.34)).toEqual(5);
      expect(helpers.roundUp(4.54)).toEqual(5);
    });
  })

  describe('addExclamationPoint', () => {
    it('returns addExclamationPoint', () => {
      expect(helpers.addExclamationPoint("pow")).toEqual("pow!");
      expect(helpers.addExclamationPoint("3")).toEqual("3!");
    });
  })

  describe('combineNames', () => {
    it('returns combineNames', () => {
      expect(helpers.combineNames("pow", "paw")).toEqual("pow paw");
    });
  })

  describe('getGreeting', () => {
    it('returns getGreeting', () => {
      expect(helpers.getGreeting("pow")).toEqual("Hello pow!");
    });
  })

  describe('getRectangleArea', () => {
    it('returns getRectangleArea', () => {
      expect(helpers.getRectangleArea(3,4)).toEqual(12);
    });
  })

  describe('getTriangleArea', () => {
    it('returns getTriangleArea', () => {
      expect(helpers.getTriangleArea(3,4)).toEqual(6);
    });
  })

  describe('getCircleArea', () => {
    it('returns getCircleArea', () => {
      expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
    });
  })

  describe('getRectangularPrismVolume', () => {
    it('returns getRectangularPrismVolume', () => {
      expect(helpers.getRectangularPrismVolume(3,4,2)).toEqual(24);
    });
  })

  



})


