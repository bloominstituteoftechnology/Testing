const helpers = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("testing the second set of functions for the project", () => {
  // getBiggest
  test("tests if getBiggest(10, 20) returns 20", () => {
    expect(helpers.getBiggest(10, 20)).toBe(20);
  });

  // greeting
  test("tests if greeting('Spanish') returns 'Hola!'", () => {
    expect(helpers.greeting("Spanish")).toBe("Hola!");
  });

  // isTenOrFive
  test("tests if isTenOrFive(62) returns false", () => {
    expect(helpers.isTenOrFive(62)).toBe(false);
  });

  // isInRange
  test("tests if isInRange(100) returns false", () => {
    expect(helpers.isInRange(100)).toBe(false);
  });

  // isInteger
  test("tests if isIntger(1.23) returns false", () => {
    expect(helpers.isInteger(1.23)).toBe(false);
  });

  // fizBuzz
  test("tests if fixBuzz(15) returns 'fizzbuzz", () => {
    expect(helpers.fizzBuzz(15)).toBe("fizzbuzz");
  });

  // isPrime
  test("tests if isPrime(3) returns true", () => {
    expect(helpers.isPrime(3)).toBe(true);
  });

  // returnFirst
  test("tests if returnFirst([5, 20]) returns 5", () => {
    expect(helpers.returnFirst([5, 20])).toBe(5);
  });

  // returnLast
  test("tests if returnLast([10, 20, 34]) returns 34", () => {
    expect(helpers.returnLast([10, 20, 34])).toBe(34);
  });

  // getArrayLength
  test("tests if getArrayLength([12, 12, 23]) returns 3", () => {
    expect(helpers.getArrayLength([12, 12, 23])).toBe(3);
  });

  // incrementByOne
  test("tests if incrementByOne([12, 1, 2, 3]) returns [13, 2, 3, 4]", () => {
    expect(helpers.incrementByOne([12, 1, 2, 3])).toBe([13, 2, 3, 4]);
  });

  // addItemToArray
  test("tests if addItemToArray([1, 2, 3], 4) returns [1, 2, 3, 40", () => {
    expect(helpers.addItemToArray([1, 2, 3], 4)).toBe([1, 2, 3, 4]);
  });

  // addItemToFront
  test("tests if addItemToFront([1, 2, 3], 4) returns [4, 1, 2, 3]", () => {
    expect(helpers.addItemToFront([1, 2, 3], 4)).toBe([4, 1, 2, 3]);
  });

  // wordsToSentence
  test("tests if wordsToSentence(['where', 'are', 'pants', 0]) returns 'the misty blue eats beans'", () => {
    expect(helpers.wordsToSentence(["where", "are", "pants", 0])).toBe(
      "where are pants"
    );
  });

  // contains
  test("tests if contains([10, 20, 30], 20) returns true", () => {
    expect(helpers.contains([10, 20, 30], 20)).toBe(true);
  });

  // addNumbers
  test("tests if addNumbers(2, 4, 6, 8) returns 20", () => {
    expect(helpers.addNumbers(2, 4, 6, 8)).toBe(20);
  });

  // averageTestScore
  test("tests if averageTestScore([10, 10, 10, 10, 20, 20, 20, 20, 10, 20] returns 15)", () => {
    expect(
      helpers.averageTestScore([10, 10, 10, 10, 20, 20, 20, 20, 10, 20])
    ).toBe(15);
  });

  // largestNumber
  test("tests if largestNumber([10, 20, 30]) returns 30", () => {
    expect(helpers.largestNumber([10, 20, 30])).toBe(30);
  });
});
