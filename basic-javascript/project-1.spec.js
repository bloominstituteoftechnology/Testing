const helpers = require('./project-1');

// start testing!

describe('multiply and subtract', () => {

    it('can multiply by 10', () => {

        expect(helpers.multiplyByTen(4)).toEqual(40);
        expect(helpers.multiplyByTen(8)).toEqual(80);
        expect(helpers.multiplyByTen(48)).toEqual(480);

    });

    it('can subtract five from a number', () => {

        expect(helpers.subtractFive(24)).toEqual(19);
        expect(helpers.subtractFive(765)).toEqual(760);
        expect(helpers.subtractFive(0)).toEqual(-5);

    });

})

describe('same and equal', () => {

    it('to be the same length', () => {
        expect(helpers.areSameLength('wowee', 'zowee')).toBeTruthy();
        expect(helpers.areSameLength('wowe', 'zowee')).toBeFalsy();
    })

    it('to be the equal', () => {
        expect(helpers.areSameLength('wowee', 'wowee')).toBeTruthy();
        expect(helpers.areSameLength('wowee', 'wowe')).toBeFalsy();
    })

})

describe('greater than and less than', () => {

    it('is less than Ninety', () => {

        expect(helpers.lessThanNinety(89)).toBeTruthy();
        expect(helpers.lessThanNinety(91)).toBeFalsy();

    });

        it('is greater than 50', () => {

        expect(helpers.greaterThanFifty(51)).toBeTruthy();
        expect(helpers.greaterThanFifty(49)).toBeFalsy();

    });

    })

describe('simple math tests', () => {

    it('can add two numbers', () => {

        expect(helpers.add(21, 21)).toEqual(42);
        expect(helpers.add(16, 21)).toEqual(37);
        expect(helpers.add(21, 888)).toEqual(909);

    });

    it('can subtract one number from another', () => {

        expect(helpers.subtract(21, 2)).toEqual(19);
        expect(helpers.subtract(16, 21)).toEqual(-5);
        expect(helpers.subtract(244, 21)).toEqual(223);

    });

    it('can divide two numbers', () => {

        expect(helpers.divide(22, 2)).toEqual(11);
        expect(helpers.divide(16, 4)).toEqual(4);
        expect(helpers.divide(900, 5)).toEqual(180);

    });

    it('can multiply two numbers', () => {

        expect(helpers.multiply(21, 2)).toEqual(42);
        expect(helpers.multiply(16, 4)).toEqual(64);
        expect(helpers.multiply(900, 5)).toEqual(4500);

    });

    it('can get remainder', () => {

        expect(helpers.getRemainder(21, 2)).toEqual(1);
        expect(helpers.getRemainder(15, 7)).toEqual(1);
        expect(helpers.getRemainder(200, 21)).toEqual(11);

    });

})

describe('even and odd', () => {

    it('is this even', () => {

        expect(helpers.isEven(21)).toBeFalsy();
        expect(helpers.isEven(22)).toBeTruthy();

    });

        it('is this odd', () => {

        expect(helpers.isOdd(21)).toBeTruthy();
        expect(helpers.isOdd(22)).toBeFalsy();

    });

    })

describe('intermediate math tests', () => {

    it('can square a number', () => {

        expect(helpers.square(2)).toEqual(4);
        expect(helpers.square(6)).toEqual(36);
        expect(helpers.square(12)).toEqual(144);

    });

    it('can cube a number', () => {

        expect(helpers.cube(2)).toEqual(8);
        expect(helpers.cube(8)).toEqual(512);

    });

    it('can raise to the power of', () => {

        expect(helpers.raiseToPower(2, 4)).toEqual(16);
        expect(helpers.raiseToPower(10, 4)).toEqual(10000);

    });

    it('can round number', () => {

        expect(helpers.roundNumber(21.2)).toEqual(21);
        expect(helpers.roundNumber(21.55)).toEqual(22);

    });

    it('can round number up', () => {

        expect(helpers.roundUp(21.2)).toEqual(22);
        expect(helpers.roundUp(20.55)).toEqual(21);

    });

})

describe('strings', () => {

    it('has an exclamation point', () => {

        expect(helpers.addExclamationPoint('Hey')).toMatch('Hey!');
        expect(helpers.addExclamationPoint('Hey there Sally')).toMatch('Hey there Sally!');

    })

    it('can combine first and last name', () => {

        expect(helpers.combineNames('Blake', 'Fletcher')).toMatch('Blake Fletcher');
        expect(helpers.combineNames('John', 'Favreau')).toMatch('John Favreau');

    })

    it('can get greeting', () => {

        expect(helpers.getGreeting('Blake')).toMatch('Hello Blake!');
        expect(helpers.getGreeting('J boogie')).toMatch('Hello J boogie!');

    })

})

describe('area and volum', () => {

    it('can get rectangle area', () => {

        expect(helpers.getRectangleArea(4, 6)).toEqual(24);
        expect(helpers.getRectangleArea(80, 6)).toEqual(480);

    })

    it('can get triangle area', () => {

        expect(helpers.getTriangleArea(4, 6)).toEqual(12);
        expect(helpers.getTriangleArea(80, 6)).toEqual(240);

    })  

    it('can get circle area', () => {

        expect(helpers.getCircleArea(4)).toEqual(50.26548245743669);

    })  

    it('can get rectangular prism volume', () => {

        expect(helpers.getRectangularPrismVolume(1, 2, 3)).toEqual(6);
        expect(helpers.getRectangularPrismVolume(11, 2, 5)).toEqual(110);

    })

})
