const helpers = require('./project-1');

// start testing!

test('should run tests', () => {});


describe('project-1.js', () => {

    describe('multiplyByTen', () => {
	    it('should multiply number by 10', () => {
	        const expected = 100;
	        const actual = helpers.multiplyByTen(10);
	        expect(actual).toEqual(expected);
	    });
    });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            const expected = 5;
            const actual = helpers.subtractFive(10);
            expect(actual).toEqual(expected);
        });
    });

    describe('areSameLength', () => {
        it('should be same length', () => {
            const expected = true;
            const actual = helpers.areSameLength('hello', 'three');
            expect(actual).toEqual(expected);
        });
    });

    describe('areEqual', () => {
        it('should be equal', () => {
            const expected = true;
            const actual = helpers.areEqual(4, 4);
            expect(actual).toEqual(expected);
        });
    });

    describe('lessThanNinety', () => {
        it('should be less than ninety', () => {
            const expected = true;
            const actual = helpers.lessThanNinety(10);
            expect(actual).toEqual(expected);
        });
    });

    describe('greaterThanFifty', () => {
        it('should greater than fifty', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(51);
            expect(actual).toEqual(expected);
        });
    });

    describe('add', () => {
        it('should add', () => {
            const expected = 5;
            const actual = helpers.add(2, 3);
            expect(actual).toEqual(expected);
        });
    });

    describe('subtract', () => {
        it('should subtract', () => {
            const expected = 10;
            const actual = helpers.subtract(15, 5);
            expect(actual).toEqual(expected);
        });
    });

    describe('divide', () => {
        it('should divide', () => {
            const expected = 2;
            const actual = helpers.divide(6, 3);
            expect(actual).toEqual(expected);
        });
    });

    describe('multiply', () => {
        it('should multiply', () => {
            const expected = 20;
            const actual = helpers.multiply(10, 2);
            expect(actual).toEqual(expected);
        });
    });

    describe('getRemainder', () => {
        it('should get a remainder', () => {
            const expected = 5;
            const actual = helpers.getRemainder(5, 10);
            expect(actual).toEqual(expected);
        });
    });

    describe('isEven', () => {
        it('should be even', () => {
            const expected = true;
            const actual = helpers.isEven(2);
            expect(actual).toEqual(expected);
        });
    });

    describe('isOdd', () => {
        it('should be odd', () => {
            const expected = true;
            const actual = helpers.isOdd(1);
            expect(actual).toEqual(expected);
        });
    });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('subtractFive', () => {
    //     it('should subtract a number by five', () => {
    //         const expected = 5;
    //         const actual = helpers.subtractFive(10);
    //         expect(actual).toEqual(expected);
    //     });
    // });
});