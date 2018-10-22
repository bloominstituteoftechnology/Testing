const helpers = require('./project-1');

// multiplyByTen test
it('should multiply the number by 10', () => {
	//Arrange
	const expected = 30
	//Act
	const actual = helpers.multiplyByTen(3)
	//Assert
	expect(actual).toBe(expected);
})

// subtractFive test
it('should subtract 5 from the number', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = helpers.subtractFive(15)
	//Assert
	expect(actual).toBe(expected);
})

//areSameLength test
it('should return correct boolean', ()=> {
	//Arrange
	const expected1 = false;
	const expected2 = true;
	//Act
	const actual1 = helpers.areSameLength('aaa', 'aa')
	const actual2 = helpers.areSameLength('aaa', 'aaa')
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
})

// areEqual test
it('should return correct boolean', ()=> {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = helpers.areEqual('b', 'b');
	const actual2 = helpers.areEqual('c', 'b');
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
})

//lessThanNinety test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = helpers.lessThanNinety(10)
	const actual2 = helpers.lessThanNinety(100)
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
})

//greaterThanFifty test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = helpers.greaterThanFifty(60)
	const actual2 = helpers.greaterThanFifty(20)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//add test
it('should add two values', () => {
	//Arrange
	const expected = 20
	//Act
	const actual = helpers.add(10, 10)
	//Assert
	expect(actual).toBe(expected);
})

//subtract test
it('should subtract x - y', () => {
	//Arrange
	const expected = 40
	//Act
	const actual = helpers.subtract(60, 20)
	//Assert
	expect(actual).toBe(expected);
})

//divide test
it('should divide x / y', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = helpers.divide(100, 10)
	//Assert
	expect(actual).toBe(expected)
})

//multiply test
it('should multiply x * y', () => {
	//Arrange
	const expected = 100
	//Act
	const actual = helpers.multiply(10, 10)
	//Assert
	expect(actual).toBe(expected)
})

//getRemainder test
it('should return remainder', () => {
	//Arrange
	const expected = 4
	//Act
	const actual = helpers.getRemainder(10, 6)
	//Assert
	expect(actual).toBe(expected);
})

//isEven test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = helpers.isEven(6);
	const actual2 = helpers.isEven(7);
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
})

//isOdd test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = false
	const expected2 = true
	//Act
	const actual1 = helpers.isOdd(6);
	const actual2 = helpers.isOdd(7);
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
})

//square test
it('should equare the number', () => {
	//Arrange
	const expected = 25;
	const expected2 = 'please enter two same numbers'
	//Act
	const actual = helpers.square(5);
	//Assert
	expect(actual).toBe(expected);
})

//cube test
it('should return cube value', () => {
	//Arrange
	const expected = 27
	//Act
	const actual = helpers.cube(3)
	//Assert
	expect(actual).toBe(expected);
})

//raiseToPower test
it('should return number raised to the power', () => {
	//Arrange
	const expected = 81
	//Act
	const actual = helpers.raiseToPower(3, 4)
	//Assert
	expect(actual).toBe(expected);
})

//roundNumber test
it('should round the number passed in', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = helpers.roundNumber(9.9)
	//Assert
	expect(actual).toBe(expected);
})

//roundUp test
it('should round the number up', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = helpers.roundUp(9.1)
	//Assert
	expect(actual).toBe(expected);
})

//addExclamationPoint test
it('should add an exclamation point to string', () => {
	//Arrange
	const expected = 'string!'
	//Act
	const actual = helpers.addExclamationPoint('string')
	//Assert
	expect(actual).toBe(expected);
})

//combineNames test
it('should combine the two strings', () => {
	//Arrange
	const expected = 'marshall lanners';
	//Act
	const actual = helpers.combineNames('marshall', 'lanners');
	//Assert
	expect(actual).toBe(expected);
})

//getGreeting test
it('should return the hello + string', () => {
	//Arrange
	const expected = 'Hello marshall!';
	//Act
	const actual = helpers.getGreeting('marshall')
	//Assert
	expect(actual).toBe(expected);
})

//getRectangleArea test
it('should return the values multipled', () => {
	//Arrange
	const expected = 30
	//Act
	const actual = helpers.getRectangleArea(10, 3)
	//Assert
	expect(actual).toBe(expected);

})

//getTriangleArea test
it('should return traingle area', () => {
	//Arrange
	const expected = 20
	//Act
	const actual = helpers.getTriangleArea(4, 10);
	//Assert
	expect(actual).toBe(expected);
})

//getCircleArea test
it('should get circle area', () => {
	//Arrange
	const expected = 113.09733552923255
	//Act
	const actual = helpers.getCircleArea(6)
	//Assert
	expect(actual).toBe(expected);
})

//getRectangularPrismVolume test
it('should get the rectangular prism volume', () => {
	//Arrange
	const expected = 1600;
	//Act
	const actual = helpers.getRectangularPrismVolume(20, 8, 10)
	//Assert
	expect(actual).toBe(expected)
})
