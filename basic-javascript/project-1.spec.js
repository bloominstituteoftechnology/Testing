const helpers = require('./project-1');

// Write your tests here.

it('Run the tests...', () => {});

describe('Project-1', () => {
    describe('multiplyByTen', () => {
        it('Returns NaN when given a non-numeric value.', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
        });

        it('Should return the given number multiplied by 10', () => {});
    });
});

// it('Should multiply given number by 10.', () => {
//     // Arrange
//     const expected = 30;
//     const multiplyByTen = helpers.multiplyByTen;

//     // Act
//     const actual = multiplyByTen(3, 10);

//     //Assert
//     expect(actual).toBe(30);
// });

describe('subtractFive', () => {
    it('Returns NaN when given a non-numeric value.', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
    });

    it('Should return the given number minus 5', () => {});
});

// it('Should subtract five from given number.', () => {
//     // Arrange
//     const expected = 95;
//     const subtractFive = helpers.subtractFive;

//     // Act
//     const actual = subtractFive(100, 5);

//     //Assert
//     expect(actual).toBe(95);
// });

describe('areSameLength', () => {
    it('Should return false if the two strings do not have the same length.', () => {
        expect(helpers.areSameLength('Luke', 'Lizzy')).toBeFalsy();
    });

    it('Should return true if the two strings have the same length.', () => {
        expect(helpers.areSameLength('Luke', 'Duke')).toBeTruthy();
    });
});

// it('The two strings should have the same length property.', () => {
//     // Arrange
//     // const expected = 15;
//     const areSameLength = helpers.areSameLength;

//     // Act
//     const actual1 = areSameLength('Luke', 'Duke');
//     const actual2 = areSameLength('Lizzy', 'Breezy');

//     //Assert
//     expect(actual1).toBe(true);
//     expect(actual2).toBe(false);
// });

describe('areEqual', () => {
    it('Should return false if the two values are not equal.', () => {
        expect(helpers.areEqual('Luke', 'Lizzy')).toBeFalsy();
    });

    it('Should return true if the two values are equal.', () => {
        expect(helpers.areEqual('Lizzy', 'Lizzy')).toBeTruthy();
    });
});

// it('The two values should be equal', () => {
//     // Arrange
//     // const expected = 15;
//     const areEqual = helpers.areEqual;

//     // Act
//     const actual1 = areEqual('Luke', 'Luke');
//     const actual2 = areEqual('Lizzy', 'Darci');

//     //Assert
//     expect(actual1).toBe(true);
//     expect(actual2).toBe(false);
// });

describe('lessThanNinety', () => {
    it('Should return false if the given number is greater than 90.', () => {
        expect(helpers.lessThanNinety(91)).toBeFalsy();
    });

    it('Should return true if the given number is less than 90.', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
    });
});

// it('The number should be less than 90', () => {
//     // Arrange
//     const lessThanNinety = helpers.lessThanNinety;

//     // Act
//     const actual1 = lessThanNinety(85);
//     const actual2 = lessThanNinety(95);

//     //Assert
//     expect(actual1).toBe(true);
//     expect(actual2).toBe(false);
// });

describe('greaterThanFifty', () => {
    it('Should return false if the given number is less than 50.', () => {
        expect(helpers.greaterThanFifty(49)).toBeFalsy();
    });

    it('Should return true if the given number is greater than 50.', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
    });
});

// it('The number should be greater than 50', () => {
//     // Arrange
//     const greaterThanFifty = helpers.greaterThanFifty;

//     // Act
//     const actual1 = greaterThanFifty(55);
//     const actual2 = greaterThanFifty(45);

//     //Assert
//     expect(actual1).toBe(true);
//     expect(actual2).toBe(false);
// });

describe('add', () => {
    it('Should add two numbers.', () => {
        // Arrange
        const expected = 33;

        // Act
        const actual = helpers.add(30, 3);

        // Assert
        expect(actual).toEqual(expected);
    });
});

// it('Should add two numbers.', () => {
//     // Arrange
//     const add = helpers.add;

//     // Act
//     const actual1 = add(3, 30);
//     const actual2 = add(7, 10)

//     //Assert
//     expect(actual1).toBe(33);
//     expect(actual2).toBe(17);
// });

describe('subtract', () => {
    it('Should subtract two numbers.', () => {
        // Arrange
        const expected = 100;

        // Act
        const actual = helpers.subtract(300, 200);

        // Assert
        expect(actual).toEqual(expected);
    });
});

// describe('divide', () => {
//     it('Should divide two numbers.', () => {
//         // Arrange
//         const divide = helpers.divide;

//         // Act
//         const actual = divide(9, 3);

//         // Assert
//         expect(actual).toBe(3);
//     });
// });

describe('divide', () => {
    it('Should divide two numbers.', () => {
        // Arrange
        const expected = 5;

        // Act
        const actual = helpers.divide(25, 5);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('multiply', () => {
    it('Should multiply two numbers.', () => {
        // Arrange
        const expected = 70;

        // Act
        const actual = helpers.multiply(10, 7);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getRemainder', () => {
    it('Should get remainder of two numbers.', () => {
        // Arrange
        const expected = 1;

        // Act
        const actual = helpers.getRemainder(9, 2);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('isEven', () => {
    it('Should return true if the given number is an even number.', () => {
        expect(helpers.isEven(2)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    });

    it('Should return false if the given number is an odd number.', () => {
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });
});

describe('isOdd', () => {
    it('Should return true if the given number is an odd number.', () => {
        expect(helpers.isOdd(3)).toBeTruthy();
        expect(helpers.isOdd(-1)).toBeTruthy();
    });

    it('Should return false if the given number is an even number.', () => {
        expect(helpers.isOdd(2)).toBeFalsy();
        expect(helpers.isOdd(0)).toBeFalsy();
    });
});

describe('square', () => {
    it('Should get square of given number.', () => {
        // Arrange
        const expected = 9;

        // Act
        const actual = helpers.square(3, 3);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('cube', () => {
    it('Should get cube of given number.', () => {
        // Arrange
        const expected = 64;

        // Act
        const actual = helpers.cube(4, 4, 4);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('raiseToPower', () => {
    it('Should get exponent of given number.', () => {
        // Arrange
        const expected = 27000;

        // Act
        const actual = helpers.raiseToPower(30, 3);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('roundNumber', () => {
    it('Should get round number of given number.', () => {
        // Arrange
        const expected = 76;

        // Act
        const actual = helpers.roundNumber(75.6);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('roundUp', () => {
    it('Should get ceiling value of given number.', () => {
        // Arrange
        const expected = 20;

        // Act
        const actual = helpers.roundUp(19.1);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('addExclamationPoint', () => {
    it('Should add exclamation point to given string.', () => {
        // Arrange
        const expected = 'Heyyy!';

        // Act
        const actual = helpers.addExclamationPoint('Heyyy');

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('combineNames', () => {
    it('Should combine the given names.', () => {
        // Arrange
        const expected = 'Darci Elizabeth';

        // Act
        const actual = helpers.combineNames('Darci', 'Elizabeth');

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getGreeting', () => {
    it('Should return given name with a Hello greeting.', () => {
        // Arrange
        const expected = 'Hello Baby Lizzy!';

        // Act
        const actual = helpers.getGreeting('Baby Lizzy');

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getRectangleArea', () => {
    it('Should return area of rectangle.', () => {
        // Arrange
        const expected = 300;

        // Act
        const actual = helpers.getRectangleArea(15, 20);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getTriangleArea', () => {
    it('Should return area of triangle.', () => {
        // Arrange
        const expected = 200;

        // Act
        const actual = helpers.getTriangleArea(20, 20);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getCircleArea', () => {
    it('Should return area of circle.', () => {
        // Arrange
        const expected = 254.46900494077323;

        // Act
        const actual = helpers.getCircleArea(9, 9);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getRectangularPrismVolume', () => {
    it('Should return area of circle.', () => {
        // Arrange
        const expected = 512;

        // Act
        const actual = helpers.getRectangularPrismVolume(8, 8, 8);

        // Assert
        expect(actual).toEqual(expected);
    });
});
