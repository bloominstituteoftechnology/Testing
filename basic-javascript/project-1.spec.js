const helpers = require('./project-1');

// start testing!

describe('multiply and subtract', () => {

    it('can multiply by 10', () => {

        expect(helpers.multiplyByTen(4)).toEqual(40);

    });

    it('can subtract five from a number', () => {

        expect(helpers.subtractFive(24)).toEqual(19);

    });

})

describe('same and equal', () => {

    it('to be the same length', () => {
        expect(helpers.areSameLength('wowee', 'zowee')).toBeTruthy();
    })

    it('to be the equal', () => {
        expect(helpers.areSameLength('wowee', 'wowee')).toBeTruthy();
    })

})

describe('greater than and less than', () => {

    it('is less than Ninety', () => {

        expect(helpers.lessThanNinety(89)).toBeTruthy();

    });

        it('is greater than 50', () => {

        expect(helpers.greaterThanFifty(51)).toBeTruthy();

    });

    })

describe('simple math tests', () => {

    it('can add two numbers', () => {

        expect(helpers.add(21, 21)).toEqual(42);

    });

    it('can subtract one number from another', () => {

        expect(helpers.subtract(21, 2)).toEqual(19);

    });

    it('can divide two numbers', () => {

        expect(helpers.divide(22, 2)).toEqual(11);

    });

    it('can multiply two numbers', () => {

        expect(helpers.multiply(21, 2)).toEqual(42);

    });

    it('can get remainder', () => {

        expect(helpers.getRemainder(21, 2)).toEqual(1);

    });

})

describe('even and odd', () => {

    it('is this even', () => {

        expect(helpers.isEven(21)).toBeFalsy();

    });

        it('is this odd', () => {

        expect(helpers.isOdd(21)).toBeTruthy();

    });

    })

describe('intermediate math tests', () => {

    it('can square a number', () => {

        expect(helpers.square(2)).toEqual(4);

    });

    it('can cube a number', () => {

        expect(helpers.cube(2)).toEqual(8);

    });

    it('can raise to the power of', () => {

        expect(helpers.raiseToPower(2, 4)).toEqual(16);

    });

    it('can round number', () => {

        expect(helpers.roundNumber(21.2)).toEqual(21);

    });

    it('can round number up', () => {

        expect(helpers.roundUp(21.2)).toEqual(22);

    });

})

describe('strings', () => {

    it('has an exclamation point', () => {

        expect(helpers.addExclamationPoint('Hey')).toMatch('Hey!');

    })

    it('can combine first and last name', () => {

        expect(helpers.combineNames('Blake', 'Fletcher')).toMatch('Blake Fletcher');

    })

    it('can get greeting', () => {

        expect(helpers.getGreeting('Blake')).toMatch('Hello Blake!');

    })

})

describe('area and volum', () => {

    it('can get rectangle area', () => {

        expect(helpers.getRectangleArea(4, 6)).toEqual(24);

    })

    it('can get triangle area', () => {

        expect(helpers.getTriangleArea(4, 6)).toEqual(12);

    })  

    it('can get circle area', () => {

        expect(helpers.getCircleArea(4)).toEqual(50.26548245743669);

    })  

    it('can get rectangular prism volume', () => {

        expect(helpers.getRectangularPrismVolume(1, 2, 3)).toEqual(6);

    })

})
