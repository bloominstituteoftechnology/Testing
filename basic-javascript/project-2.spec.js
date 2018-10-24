const helpers = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => { 

  // getBiggest
  test("should return the larger input", () => {
    const expected = 8;
    const actual = helpers.getBiggest(5, 8);
    expect(actual).toEqual(expected);
  });

  // greeting
  test("should return the correct greeting based on language input", () => {
    const expected = 'Hola!';
    const actual = helpers.greeting('Spanish');
    expect(actual).toEqual(expected);
  });

  // isTenOrFive
  test("should return true if input is 10 or 5", () => {
    const expected = true;
    const actual = helpers.isTenOrFive(5);
    expect(actual).toEqual(expected);
  });

  // isInRange
  test("should return true if number is between 20 and 50", () => {
    const expected = true;
    const actual = helpers.isInRange(34);
    expect(actual).toEqual(expected);
  });

  // isInteger
  test("should return true if input is an integer", () => {
    const expected = true;
    const actual = helpers.isInteger(45);
    expect(actual).toEqual(expected);
  });

  // fizzBuzz
  test("should return fizzbuzz, fizz, or buzz depending on whether it's divisible by 3 and/or", () => {
    const expected = 'buzz';
    const actual = helpers.fizzBuzz(25);
    expect(actual).toEqual(expected);
  });

  // isPrime
  test("should return true only if the number is prime", () => {
    const expected = true;
    const actual = helpers.isPrime(7);
    expect(actual).toEqual(expected);
  });

  // isInRange
  test("should return true if number is between 20 and 50", () => {
    const expected = true;
    const actual = helpers.isInRange(34);
    expect(actual).toEqual(expected);
  });
  
  // returnFirst
  test("should return the first object in an array", () => {
    const expected = 'apple';
    const actual = helpers.returnFirst(['apple', 'strawberry', 'kiwi']);
    expect(actual).toEqual(expected);
  });

  // isLast
  test("should return the last object in an array", () => {
    const expected = 'john';
    const actual = helpers.returnLast(['bob', 'steve', 'john']);
    expect(actual).toEqual(expected);
  });

    // getArrayLength
    test("should return the length of an array", () => {
      const expected = 3;
      const actual = helpers.getArrayLength(['bob', 'steve', 'john']);
      expect(actual).toEqual(expected);
    });

    // incrementByOne
    test("should incrememnt array by one every time it is run", () => {
      const expected = [2];
      const actual = helpers.incrementByOne([1]);
      expect(actual).toEqual(expected);
    });
    
    // addItemToArray
    test("should add item to array", () => {
      const expected = [1, 2, 3, 4];
      const actual = helpers.addItemToArray([1, 2, 3], 4);
      expect(actual).toEqual(expected);
    });

    // wordsToSentence
    test("should add every word into a sentence", () => {
      const expected = 'E Plurbus Unum';
      const actual = helpers.wordsToSentence([
        'E',
        'Plurbus',
        'Unum',
      ]);
      expect(actual).toEqual(expected);
    });

    // contains
    test("should return true if array contains item", () => {
      const expected = true;
      const actual = helpers.contains([1, 2, 3, 4], 2);
      expect(actual).toEqual(expected);
    });

    // addNumbers
    test("should return the sum of all numbers in an array", () => {
      const expected = 20;
      const actual = helpers.addNumbers([2, 4, 6, 8]);
      expect(actual).toEqual(expected);
    });

    // addNumbers
    test("should return the sum of all numbers in an array", () => {
      const expected = 20;
      const actual = helpers.addNumbers([2, 4, 6, 8]);
      expect(actual).toEqual(expected);
    });

    // averageTestScores
    test("should return the average of all test scores", () => {
      const expected = 86.5;
      const actual = helpers.averageTestScore([95, 84, 86, 81]);
      expect(actual).toEqual(expected);
    });

    // largestNumber
    test("should return the largest integer in an array", () => {
      const expected = 8;
      const actual = helpers.largestNumber([2, 4, 6, 8]);
      expect(actual).toEqual(expected);
    });

});