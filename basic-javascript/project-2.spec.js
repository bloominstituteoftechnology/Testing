const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("/project-2", () => {
    // getBiggest
    test("tests if getBiggest(10, 20) returns 20", () => {
      expect(funcs.getBiggest(10, 20)).toBe(20);
    });
  
    // greeting
    test("tests if greeting('German') returns 'Guten Tag!'", () => {
      expect(funcs.greeting("German")).toBe("Guten Tag!");
    });
  
    // isTenOrFive
    test("tests if isTenOrFive(34) returns false", () => {
      expect(funcs.isTenOrFive(34)).toBe(false);
    });
  
    // isInRange
    test("tests if isInRange(100) returns false", () => {
      expect(funcs.isInRange(100)).toBe(false);
    });
  
    // isInteger
    test("tests if isIntger(1.23) returns false", () => {
      expect(funcs.isInteger(1.23)).toBe(false);
    });
  
    // fizBuzz
    test("tests if fixBuzz(15) returns 'fizzbuzz", () => {
      expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
    });
  
    // isPrime
    test("tests if isPrime(3) returns true", () => {
      expect(funcs.isPrime(3)).toBe(true);
    });
  
    // returnFirst
    test("tests if returnFirst([10, 20, 30]) returns 10", () => {
      expect(funcs.returnFirst([10, 20, 30])).toBe(10);
    });
  
    // returnLast
    test("tests if returnLast([10, 20, 30]) returns 30", () => {
      expect(funcs.returnLast([10, 20, 30])).toBe(30);
    });
  
    // getArrayLength
    test("tests if getArrayLength([12, 12, 23, 34, 45, 56]) returns 6", () => {
      expect(funcs.getArrayLength([12, 12, 23, 34, 45, 56])).toBe(6);
    });
  
    // incrementByOne
    test("tests if incrementByOne([120, 100, 10, 20]) returns [121, 101, 11, 21]", () => {
      expect(funcs.incrementByOne([120, 100, 10, 20])).toEqual([
        121,
        101,
        11,
        21
      ]);
    });
  
    // addItemToArray
    test("tests if addItemToArray([10, 20, 30], 40) returns [10, 20, 30, 40]", () => {
      expect(funcs.addItemToArray([10, 20, 30], 40)).toEqual([10, 20, 30, 40]);
    });
  
    // addItemToFront
    test("tests if addItemToFront([10, 20, 30], 40) returns [40, 10, 20, 30]", () => {
      expect(funcs.addItemToFront([10, 20, 30], 40)).toEqual([40, 10, 20, 30]);
    });
  
    // wordsToSentence
    test("tests if wordsToSentence(['the', 'misty', 'blue', 'eats', 'beans']) returns 'the misty blue eats beans'", () => {
      expect(
        funcs.wordsToSentence(["the", "misty", "blue", "eats", "beans"])
      ).toBe("the misty blue eats beans");
    });
  
    // contains
    test("tests if contains([10, 20, 30], 20) returns true", () => {
      expect(funcs.contains([10, 20, 30], 20)).toBe(true);
    });
  
    //addNumbers test
    it("should return add all the numbers in the array", () => {
      //Arrange
      const expected = 10;
      //Act
      const actual = funcs.addNumbers([2, 2, 2, 4]);
      //Assert
      expect(actual).toBe(expected);
    });
  
    // averageTestScore
    test("tests if averageTestScore([10, 10, 10, 10, 20, 20, 20, 20, 10, 20] returns 15)", () => {
      expect(
        funcs.averageTestScore([10, 10, 10, 10, 20, 20, 20, 20, 10, 20])
      ).toBe(15);
    });
  
    // largestNumber
    test("tests if largestNumber([10, 20, 30]) returns 30", () => {
      expect(funcs.largestNumber([10, 20, 30])).toBe(30);
    });
  });