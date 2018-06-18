const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
      it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
      });
  
      it('should return the given number multiplied by 10', () => {
          expect(helpers.multiplyByTen(4)).toBe(40);
          expect(helpers.multiplyByTen(0)).toBe(0);
          expect(helpers.multiplyByTen(-1)).toBe(-10);
      });
    });

    describe('subtractFive', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
          });
        it('should subtract by five', () => {
            expect(helpers.subtractFive(0)).toBe(-5);
            expect(helpers.subtractFive(7)).toBe(2);
            expect(helpers.subtractFive(-2)).toBe(-7);
        });
    });

    describe('areSameLength', () => {
        let str1 = 'abcde'
        let str2 = 'fghij'
        let str3 = 'klm'

        it('are same in length', () => {
            expect(helpers.areSameLength(str1, str2)).toBeTruthy();
            expect(helpers.areSameLength(str2, str1)).toBeTruthy();
        });

        it('are not same in length', () => {
            expect(helpers.areSameLength(str1, str3)).toBeFalsy();
            expect(helpers.areSameLength(str3, str2)).toBeFalsy();
        });


    });
    
    describe('areEqual', () => {
        it('are equal', () => {
            expect(helpers.areEqual(0, 0)).toBeTruthy();
            expect(helpers.areEqual(-1, -1)).toBeTruthy();
            expect(helpers.areEqual(+1, +1)).toBeTruthy();
        });
        it('are not equal', () => {
            expect(helpers.areEqual(0, 1)).toBeFalsy();
            expect(helpers.areEqual(-1, 0)).toBeFalsy();
            expect(helpers.areEqual(+1, -1)).toBeFalsy();
        });
    });

    describe('lessThanNinety', () => {
        it('is less than ninety', () => {
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy();
            expect(helpers.lessThanNinety(-90)).toBeTruthy();
        });
        it('is not less than niety', () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            expect(helpers.lessThanNinety(91)).toBeFalsy();
            expect(helpers.lessThanNinety(90000)).toBeFalsy();
        });
    });

    describe('greaterThanFifty', () => {
        it('is greater than fifty', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
            expect(helpers.greaterThanFifty(500)).toBeTruthy();
            expect(helpers.greaterThanFifty(5000)).toBeTruthy();
        });
        it('is not greater than fifty', () => {
            expect(helpers.greaterThanFifty(50)).toBeFalsy();
            expect(helpers.greaterThanFifty(0)).toBeFalsy();
            expect(helpers.greaterThanFifty(-50)).toBeFalsy();
        });
    });

    describe('add', () => {
        it('should return the added number', () => {
            expect(helpers.add(-10, -5)).toBe(-15);
            expect(helpers.add(10, 5)).toBe(15);
            expect(helpers.add(0,0)).toBe(0);
        });
    });

    describe('subtract', () => {
        it('should return the subtracted number', () => {
            expect(helpers.subtract(-10,-5)).toBe(-5);
            expect(helpers.subtract(10, 5)).toBe(5);
            expect(helpers.subtract(0, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should be NaN when divid 0 by 0', () => {
            expect(helpers.divide(0, 0)).toBeNaN();
        });
        it('should be infinity when divided by 0', () => {
            expect(helpers.divide(10, 0)).toBe(Infinity);
        });
        it('should return divided number', () => {
            expect(helpers.divide(10, 2)).toBe(5);
            expect(helpers.divide(10, 5)).toBe(2);
            expect(helpers.divide(0, 5)).toBe(0);
        });
    });

    describe('multiply', () => {
        it('should return the multiplied number', () => {
            expect(helpers.multiply(-1, 50)).toBe(-50);
            expect(helpers.multiply(0, 0)).toBe(0);
            expect(helpers.multiply(0, 1)).toBe(0);
        });
    });

    describe('getRemainder', () => {
        it('should be NaN when divided by 0', () => {
            expect(helpers.divide(10, 0)).toBeNaN();
        });
        it('should return the remainder', () => {
            expect(helpers.getRemainder(5, 2)).toBe(1);
            expect(helpers.getRemainder(7, 9)).toBe(7);
        });
    });
  
    // describe('isEven', () => {
    //     it('should return true for even numbers', () => {
    //         expect(helpers.isEven(4)).toBeTruthy();
    //         expect(helpers.isEven(0)).toBeTruthy();
    //     });
    //     it('should return false for odd numbers', () => {
    //         expect(helpers.isEven(3)).toBeFalsy();
    //         expect(helpers.isEven(-1)).toBeFalsy();
    //     });
    // });

    // describe('isOdd', () => {
    //     it('', () => {
    //         expect(helpers.isOdd()).toBe();
    //     });
    // });

    // describe('square', () => {
    //     it('', () => {
    //         expect(helpers.square()).toBe();
    //     });
    // });

    // describe('cube', () => {
    //     it('', () => {
    //         expect(helpers.cube()).toBe();
    //     });
    // });

    // describe('raiseToPower', () => {
    //     it('', () => {
    //         expect(helpers.raiseToPower()).toBe();
    //     });
    // });

    // describe('roundNumber', () => {
    //     it('', () => {
    //         expect(helpers.roundNumber()).toBe();
    //     });
    // });

    // describe('roundUp', () => {
    //     it('', () => {
    //         expect(helpers.roundUp()).toBe();
    //     });
    // });

    // describe('addExclamationPoint', () => {
    //     it('', () => {
    //         expect(helpers.addExclamationPoint()).toBe();
    //     });
    // });

    // describe('combineNames', () => {
    //     it('', () => {
    //         expect(helpers.combineNames()).toBe();
    //     });
    // });

    // describe('getGreeting', () => {
    //     it('', () => {
    //         expect(helpers.getGreeting()).toBe();
    //     });
    // });

    // describe('getRectangleArea', () => {
    //     it('', () => {
    //         expect(helpers.getRectangleArea()).toBe();
    //     });
    // });

    // describe('getTriangleArea', () => {
    //     it('', () => {
    //         expect(helpers.getTriangleArea()).toBe();
    //     });
    // });

    // describe('getCircleArea', () => {
    //     it('', () => {
    //         expect(helpers.getCircleArea()).toBe();
    //     });
    // });

    // describe('getRectangularPrismVolume', () => {
    //     it('', () => {
    //         expect(helpers.getRectangularPrismVolume()).toBe();
    //     });
    // });


    // describe('ex', () => {
    //     it('', () => {
    //         expect(helpers.ex()).toBe();
    //     });
    // });

});

