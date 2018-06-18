const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('Run the tests...', () => {});

// describe('getBiggest', () => {
//     it('Should return biggest number.', () => {
//         // Arrange
//         const expected = 100;

//         // Act
//         const actual = helpers.getBiggest(50);

//         // Assert
//         expect(actual).toBe(100);
//     });
// });

it('Should return biggest number.', () => {
    // Arrange
    // const expected = 15;
    const getBiggest = helpers.getBiggest;

    // Act
    const actual1 = helpers.getBiggest(10, 5);
    const actual2 = helpers.getBiggest(5, 10);

    //Assert
    expect(actual1).toBe(true);
    expect(actual2).toBe(false);
});