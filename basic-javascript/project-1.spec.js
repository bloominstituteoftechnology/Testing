const funcs = require('./project-1');

// Write your tests here.

it('Run the tests...', () => {});

it('Should multiply given number by 10.', () => {
    // Arrange
    const expected = 30;
    const multiplyByTen = funcs.multiplyByTen;

    // Act
    const actual = multiplyByTen(3, 10);

    //Assert
    expect(actual).toBe(30);
});

it('Should subtract five from given number.', () => {
    // Arrange
    const expected = 95;
    const subtractFive = funcs.subtractFive;

    // Act
    const actual = subtractFive(100, 5);

    //Assert
    expect(actual).toBe(95);
});

it('The two strings should have the same length property.', () => {
    // Arrange
    // const expected = 15;
    const areSameLength = funcs.areSameLength;

    // Act
    const actual1 = areSameLength('Luke', 'Duke');
    const actual2 = areSameLength('Lizzy', 'Breezy');

    //Assert
    expect(actual1).toBe(true);
    expect(actual2).toBe(false);
});

it('The two values should be equal', () => {
    // Arrange
    // const expected = 15;
    const areEqual = funcs.areEqual;

    // Act
    const actual1 = areEqual('Luke', 'Luke');
    const actual2 = areEqual('Lizzy', 'Darci');

    //Assert
    expect(actual1).toBe(true);
    expect(actual2).toBe(false);
});

it('The number should be less than 90', () => {
    // Arrange
    const lessThanNinety = funcs.lessThanNinety;

    // Act
    const actual1 = lessThanNinety(85);
    const actual2 = lessThanNinety(95);

    //Assert
    expect(actual1).toBe(true);
    expect(actual2).toBe(false);
});

it('The number should be greater than 50', () => {
    // Arrange
    const greaterThanFifty = funcs.greaterThanFifty;

    // Act
    const actual1 = greaterThanFifty(55);
    const actual2 = greaterThanFifty(45);

    //Assert
    expect(actual1).toBe(true);
    expect(actual2).toBe(false);
});

it('Should add two numbers.', () => {
    // Arrange
    const add = funcs.add;

    // Act
    const actual1 = add(3, 30);
    const actual2 = add(7, 10)

    //Assert
    expect(actual1).toBe(33);
    expect(actual2).toBe(17);
});