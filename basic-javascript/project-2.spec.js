const funcs = require('./project-2');


//getBiggest test
it('should return the biggest array', () => {
	let arr1 = ['1','2','3']
	let arr2 = ['1','2']
	let arr3 = [1, 2, 3]

	//Arrange
	const expected = arr1;
	const expected2 = arr3;
	//Act
	const actual1 = funcs.getBiggest(arr1, arr2)
	const actual2 = funcs.getBiggest(arr1, arr3)
	//Assert
	expect(actual1).toBe(expected)
	expect(actual2).toBe(expected2)
})

//greeting test
it('should return correct language', () => {
	//Arrange
	const expected1 = 'Guten Tag!';
	const expected2 = 'Hola!';
	const expected3 = 'Hello!'
	//Act
	const actual1 = funcs.greeting('German')
	const actual2 = funcs.greeting('Spanish')
	const actual3 = funcs.greeting()
	//Assert
	expect(actual1).toBe(expected1);
	expect(actual2).toBe(expected2);
	expect(actual3).toBe(expected3);
})

//isTenOrFive test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true;
	const expected2 = false;
	//Act
	const actual1 = funcs.isTenOrFive(10)
	const actual2 = funcs.isTenOrFive(4)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//isInRange test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = funcs.isInRange(27)
	const actual2 = funcs.isInRange(0)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//isInteger test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true
	const expected2 = false
	//Act
	const actual1 = funcs.isInteger(50)
	const actual2 = funcs.isInteger('50')
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//fixxBuzz test
it('should return correct string', () => {
	//Arrange
	const expected1 = 'fizzbuzz'
	const expected2 = 'buzz'
	const expected3 = 'fizz'
	const expected4 = 1
	//Act
	const actual1 = funcs.fizzBuzz(15)
	const actual2 = funcs.fizzBuzz(5)
	const actual3 = funcs.fizzBuzz(3)
	const actual4 = funcs.fizzBuzz(1)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
	expect(actual3).toBe(expected3)
	expect(actual4).toBe(expected4)
})


//isPrime test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true;
	const expected2 = false
	//Act
	const actual1 = funcs.isPrime(-1)
	const actual2 = funcs.isPrime(1)
	const actual3 = funcs.isPrime(7)
	const actual4 = funcs.isPrime(4)
	//Assert
	expect(actual1).toBe(expected2)
	expect(actual2).toBe(expected2)
	expect(actual3).toBe(expected1)
	expect(actual4).toBe(expected2)
})

//returnFirst test
it('should return first item in array', () => {
	//Arrange
	const expected = 'item1'
	//Act
	const actual = funcs.returnFirst(['item1', 'item2'])
	//Assert
	expect(actual).toBe(expected)
})

//returnLast test
it('should return last item in array', () => {
	//Arrange
	const expected = 'item2'
	//Act
	const actual = funcs.returnLast(['item1', 'item2'])
	//Assert
	expect(actual).toBe(expected)
})

//getArrayLength test
it('should return array length', () => {
	//Arrange
	const expected = 2
	//Act
	const actual = funcs.getArrayLength([1,2])
	//Assert
	expect(actual).toBe(expected)
})

//incrementByOne test
it('should should incremet each array item by 1', () => {
	//Arrange
	const expected = [2,3,4]
	//Act
	const actual = funcs.incrementByOne([1,2,3])
	//Assert
	expect(actual).toEqual(expected)
})

//addItemToArray test
it('should add item to the back of array', () => {
	//Arrange
	const expected = [1,2]
	//Act
	const actual = funcs.addItemToArray([1], 2)
	//Assert
	expect(actual).toEqual(expected)
})

//addItemToFront test
it('should add item to front of array', () => {
	//Arrange
	const expected = [1,2]
	//Act
	const actual = funcs.addItemToFront([2], 1)
	//Assert
	expect(actual).toEqual(expected)
})

//wordsToSentence test
it('should return new sentence', () => {
	//Arrange
	const expected = 'H e l l o   W o r l d';
	//Act
	const actual = funcs.wordsToSentence('Hello World')
	//Assert
	expect(actual).toBe(expected)
})

//contains test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true;
	const expected2 = false;
	//Act
	const actual1 = funcs.contains([1,2,3], 2)
	const actual2 = funcs.contains([1,2,3], 5)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//addNumbers test
it('should return add all the numbers in the array', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = funcs.addNumbers([2,2,2,4])
	//Assert
	expect(actual).toBe(expected)
})

//averageTestScore test
it('should return average number', () => {
	//Arrange
	const expected = 17
	//Act
	const actual = funcs.averageTestScore([30,10,20,5,20])
	//Assert
	expect(actual).toBe(expected)
})

//largestNumber test
it('should return the largest number from array', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = funcs.largestNumber([2,3,10,3,6])
	//Assert
	expect(actual).toBe(expected)
})