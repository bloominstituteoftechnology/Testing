const helpers = require('./project-1');

// // start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('can multiply by ten', () => {
            //arrange
            const expected = 100;

            //act
            const actual = helpers.multiplyByTen(10);

            //assert
            expect(actual).toEqual(expected);

        })
    });

    describe('subtractFive', () => {
        it('arg1 should be subtracted arg2', () => {
            //arrange
        const expected = NaN;

        //act
        const actual = helpers.subtractFive('string');

        //assert
        expect(actual).toEqual(expected);
        })
        it('arg1 should be subtracted arg2', () => {
            //arrange
        const expected = 45;

        //act
        const actual = helpers.subtractFive(50);

        //assert
        expect(actual).toEqual(expected);
        })
    });
    //not passing, why?
    describe('areSameLength', () => {
        it.skip('str1 and str2 should be the same length', () => {
            const expected = false;
            const areSameLength = helpers.areSameLength('pickle', 'bee');

            expect(actual).toEqual(expected);
        })
        it('str1 and str2 should be the same length', () => {
            const expected = true;
            const actual = helpers.areSameLength('band', 'hand')
        })
    });

    describe ('areEqual', () => {
        it('arg1 and arg2 should be equal', () => {
            const expected = false;
            const actual = helpers.areEqual(16, 10);
    
            expect(actual).toEqual(expected);
        });
        it('arg1 and arg2 should be equal', () => {
            const expected = true;
            const actual = helpers.areEqual(16, 16);
        
            expect(actual).toEqual(expected);
        });
    });

    describe('lessThanNinety', () => {
        it('arg should be less than 90', () => {
            const expected = false;
            const actual = helpers.lessThanNinety(99);

            expect(actual).toEqual(expected);
        });
        it('arg should be less than 90', () => {
            const expected = true;
            const actual = helpers.lessThanNinety(89);

            expect(actual).toEqual(expected);
        });
    });

    describe('greaterThanFifty', () => {
        it('arg should be greater than 50', () => {
            const expected = false;
            const actual = helpers.greaterThanFifty(21);

            expect(actual).toEqual(expected);
        });
        it('arg should be greater than 50', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(51);

            expect(actual).toEqual(expected);
        });
    });

    describe('add', () => {
        it('arg1 and arg2 should be added together', () => {
            const expected = NaN;
            const actual = helpers.add(5, undefined);

            expect(actual).toEqual(expected);
        });
        it('arg1 and arg2 should be added together', () => {
            const expected = 10;
            const actual = helpers.add(5, 5);

            expect(actual).toEqual(expected);
        });
    });

    describe('subtract', () => {
        it('arg1 and arg2 should be subtracted from each other', () => {
            const expected = NaN;
            const actual = helpers.subtract(23, undefined);

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 should be subtracted from each other', () => {
            const expected = 20;
            const actual = helpers.subtract(23, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('divide', () => {
        it('arg1 should be devisible by arg2', () => {
            const expected = NaN;
            const actual = helpers.divide(80, undefined);

            expect(actual).toEqual(expected);
        })
        it('arg1 should be devisible by arg2', () => {
            const expected = 8;
            const actual = helpers.divide(80, 10);

            expect(actual).toEqual(expected);
        })
    })

    describe('multiply', () => {
        it('arg1 and arg2 should be multiplied together', () => {
            const expected = NaN;
            const actual = helpers.multiply(7, 'string');

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 should be multiplied together', () => {
            const expected = 21;
            const actual = helpers.multiply(7, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder', () => { 
        it('gives a remainder of arg1 devided by arg2', () => {
            const expected = NaN;
            const actual = helpers.getRemainder(10, 'string');

            expect(actual).toEqual(expected);
        })
        it('gives a remainder of arg1 devided by arg2', () => {
            const expected = 1;
            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('isEven', () => {
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = false;
            const actual = helpers.isEven(3);

            expect(actual).toEqual(expected);
        });
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = true;
            const actual = helpers.isEven(2);

            expect(actual).toEqual(expected);
        });
    });
    //check logic
    describe('isOdd', () => {
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = true;
            const actual = helpers.isOdd(11);

            expect(actual).toEqual(expected);
        })
        it('remainder of arg1 devided by 2 should be equal to 0', () => {
            const expected = false;
            const actual = helpers.isOdd(12);

            expect(actual).toEqual(expected);
        })
    })

    describe('square', () => {
        it('arg must be squared', () => {
        const expected = NaN;
        const actual = helpers.square('string');

        expect(actual).toEqual(expected);
        })
        it('arg must be squared', () => {
        const expected = 16;
        const actual = helpers.square(4);

        expect(actual).toEqual(expected);
        })
    })

    describe('cube', () => {
        let expected = 125;
        it('should be a function', () => {
            expect(typeof helpers.cube).toEqual('function');
        });
        let actual = helpers.cube(5);
        it('should return a number', () => {
            expect(typeof actual).toEqual('number');
        });
    });

    describe('raiseToPower', () => {
        let expected = 125;
        it('should be a function', () => {
            expect(typeof helpers.raiseToPower).toEqual('function');
        });
        let actual = helpers.raiseToPower(5, 3);
        it('arg1 should be the number and arg2 should be the exponent', () => {
            expect(typeof helpers.raiseToPower).toEqual
        })
    })
    //come back to correct
    describe.skip('roundNumber', () => {
        let expected = 4;
        it('should be a function', () => {
            expect(typeof helpers.roundNumber).toEaual('fumction');
        });
        let actual = helpers.roundNumber(3.5);
        it('arg should be a rounded number', () => {
            expect(typeof helpers.roundNumber).toEqual('number');
        });
    });

    describe('addExclamationPoint', () => {
        // it('should add an exclamation', () => {
        //     const expected = 2;
        //     const actual = helpers.addExclamationPoint(2);

        //     expect(actual).toEqual(expected);
        // });
        it('should add an exclamation', () => {
            const expected = 'hi!';
            const actual = helpers.addExclamationPoint('hi');

            expect(actual).toEqual(expected);
        });
    })

    describe.skip('combineNames', () => {
        it('arg1 and or arg2 can not be undefined', () => {
            const expected = 'Peter Piper';
            const actual = helpers.combineNames('Peter', 'Piper');

            expect(actual).toEqual(expected);
        });
        // it('arg1 and arg1 should be combined', () => {
        //     const expected = peter piper;
        //     const actual = helpers.combineNames(peter, piper);

        //     expect(actual).toEqual(expected);
        // });
    });

    describe('getGreeting', () => {
        it(' arg can not be undefined', () => {
            const expected = 'Hello name!';
            const actual = helpers.getGreeting('name');

            expect(actual).toEqual(expected);
        })
    });

    describe('getRectangleArea', () => {
        it('arg1 muliplied by arg2 should output rectangle area', () => {
            const expected = 12;
            const actual = helpers.getRectangleArea(6, 2);

            expect(actual).toEqual(expected);
        });
    });

    describe('getTriangleArea', () => {
        it('triangle area is arg1 and arg2 miltiplied by 0.5', () => {
            const expected = 6;
            const actual = helpers.getTriangleArea(6, 2);

            expect(actual).toEqual(expected);
        });
    });

    describe('getCircleArea', () => {
        it('should return a circle area', () => {
            const expected = 12.566370614359172;
            const actual = helpers.getCircleArea(2, 2);

            expect(actual).toEqual(expected);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('input 3 elements for all arguments', () => {
            const expected = NaN;
            const actual = helpers.getRectangularPrismVolume(12, 8, );

            expect(actual).toEqual(expected);
        });
    });

});

//Moises ideas!
// const typeOf = expect(typeof actual).toEqual;
// const shouldEqual = expect(action).toEqual(expected);

