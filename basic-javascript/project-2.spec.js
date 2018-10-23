const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

//Get the largest number, if equal return second argument
describe("getBiggest()", () => {
  it("should return y unless x is greater", () => {
    const expected = 100;

    const actual = funcs.getBiggest(100, 30);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      funcs.getBiggest("123", 123);
    }).toThrow();
    expect;
  });

  it("should return null if no number is provided", () => {
    const actual = funcs.getBiggest(undefined);
    expect(actual).toBe(null);
  });
});

//Give a greeting in a given language
describe("greeting()", () => {
  it("should return hello in Spanish", () => {
    const expected = "Hola!";

    const actual = funcs.greeting("Spanish");
    expect(actual).toEqual(expected);
  });

  it("should return hello in German", () => {
    const expected = "Guten Tag!";

    const actual = funcs.greeting("German");
    expect(actual).toEqual(expected);
  });

  it("should return hello in English if no language is specified", () => {
    const expected = "Hello!";

    const actual = funcs.greeting();
    expect(actual).toEqual(expected);
  });
});
//Checks if a number is 10 or 5
describe("isTenOrFive()", () => {
  it("should return true if the number is 10 or 5", () => {
    const expected = true;

    const actual = funcs.isTenOrFive(5);
    expect(actual).toEqual(expected);
  });

  it("should return false if the number is not 10 or 5", () => {
    const expected = false;

    const actual = funcs.isTenOrFive(11);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      funcs.isTenOrFive("10");
    }).toThrow();
    expect;
  });
});

//Checks a number is between 20 and 50
describe("isInRange()", () => {
  it("should return true if the number is between 20-50", () => {
    const expected = true;

    const actual = funcs.isInRange(21);
    expect(actual).toEqual(expected);
  });

  it("should return true if the number is between 20-50", () => {
    const expected = true;

    const actual = funcs.isInRange(21);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      funcs.isInRange("30");
    }).toThrow();
    expect;
  });
});

//Checks if a number is an integer
describe("isInteger()", () => {
  it("should return true if the number is an integer", () => {
    const expected = true;

    const actual = funcs.isInteger(5);
    expect(actual).toEqual(expected);
  });

  it("should return false if the number is not an integer", () => {
    const expected = false;

    const actual = funcs.isInteger(0.5);
    expect(actual).toEqual(expected);
  });
});

//FizzBuzz
describe("fizzBuzz()", () => {
  it("should return fizzbuzz if num divisible by 3", () => {
    const expected = "fizz";

    const actual = funcs.fizzBuzz(27);
    expect(actual).toEqual(expected);
  });

  it("should return fizzbuzz if num divisible by 3 and 5", () => {
    const expected = "fizzbuzz";

    const actual = funcs.fizzBuzz(15);
    expect(actual).toEqual(expected);
  });

  it("should return buzz if num divisible by 5", () => {
    const expected = "buzz";

    const actual = funcs.fizzBuzz(25);
    expect(actual).toEqual(expected);
  });
});

//Checks if a number is prime
describe("isPrime()", () => {
  it("should return true if a number is prime", () => {
    const expected = true;

    const actual = funcs.isPrime(5);
    expect(actual).toEqual(expected);
  });

  it("should return false if a number is not prime", () => {
    const expected = false;

    const actual = funcs.isPrime(14);
    expect(actual).toEqual(expected);
  });
});

//Returns the first item in an array
describe("returnFirst()", () => {
  it("should return the first item in the array", () => {
    const expected = 1;

    const actual = funcs.returnFirst([1, 2, 3]);
    expect(actual).toEqual(expected);
  });

  it("should return null if no array is provided", () => {
    const actual = funcs.returnFirst(undefined);
    expect(actual).toBe(null);
  });
});

//Returns the last item in an array
describe("returnLast()", () => {
  it("should return the first item in the array", () => {
    const expected = 3;

    const actual = funcs.returnLast([1, 2, 3]);
    expect(actual).toEqual(expected);
  });

  it("should return null if no array is provided", () => {
    const actual = funcs.returnLast(undefined);
    expect(actual).toBe(null);
  });
});

//Returns the length of an array
describe("getArrayLength()", () => {
  it("should return the length of the array", () => {
    const expected = 4;

    const actual = funcs.getArrayLength([1, 2, 3, 4]);
    expect(actual).toEqual(expected);
  });

  it("should return null if no array is provided", () => {
    const actual = funcs.getArrayLength(undefined);
    expect(actual).toBe(null);
  });
});

//Increments an array by 1
describe("incrementByOne()", () => {
  it("should increment an array by one", () => {
    const expected = [2, 3, 4];

    const actual = funcs.incrementByOne([1, 2, 3]);
    expect(actual).toEqual(expected);
  });

  it("should return null if no array is provided", () => {
    const actual = funcs.incrementByOne(undefined);
    expect(actual).toBe(null);
  });
});

//Adds an item to an array
describe("addItemToArray()", () => {
  it("should return the array with an item added to the end", () => {
    const expected = [1, 2, 3, 4];

    const actual = funcs.addItemToArray([1, 2, 3], 4);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array or item are not given", () => {
    expect(() => {
      funcs.addItemToArray(undefined, undefined);
    }).toThrow();
    expect;
  });
});

//Adds an item to the font of an array
describe("addItemToFront()", () => {
  it("should return the array with an item added to the front", () => {
    const expected = [1, 2, 3, 4];

    const actual = funcs.addItemToFront([2, 3, 4], 1);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array or item are not given", () => {
    expect(() => {
      funcs.addItemToFront(undefined, undefined);
    }).toThrow();
    expect;
  });
});

//New Sentence
describe("wordsToSentence()", () => {
  it("should return a sentence from an array of words", () => {
    const expected = "The dog ran !";

    const actual = funcs.wordsToSentence(["The", "dog", "ran", "!"]);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array is not given", () => {
    expect(() => {
      funcs.wordsToSentence(undefined);
    }).toThrow();
    expect;
  });
});

//Contains
describe("contains()", () => {
  it("should return true if an array contains the specified item", () => {
    const expected = true;

    const actual = funcs.contains(["The", "dog", "ran", "!"], "dog");
    expect(actual).toEqual(expected);
  });

  it("should return false if an array does not contain the specified item", () => {
    const expected = false;

    const actual = funcs.contains(["The", "dog", "ran", "!"], "cat");
    expect(actual).toEqual(expected);
  });
});

//Add Numbers
describe("addNumbers()", () => {
  it("should return the sum of an array of numbers", () => {
    const expected = 10;

    const actual = funcs.addNumbers([1, 2, 3, 4]);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array is not given", () => {
    expect(() => {
      funcs.addNumbers(undefined);
    }).toThrow();
    expect;
  });
});

//Average test Score
describe("averageTestScore()", () => {
  it("should return average test score of an array", () => {
    const expected = 84;

    const actual = funcs.averageTestScore([100, 78, 63, 95]);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array is not given", () => {
    expect(() => {
      funcs.averageTestScore(undefined);
    }).toThrow();
    expect;
  });
});

//Largest Number
describe("isInteger()", () => {
  it("should return the largest number in an array", () => {
    const expected = 100;

    const actual = funcs.largestNumber([100, 78, 63, 95]);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array is not given", () => {
    expect(() => {
      funcs.largestNumber(undefined);
    }).toThrow();
    expect;
  });
});
