const funcs = require("./project-2");
const faker = require("faker");

randomNumber = faker.random.number();
randomNumber2 = faker.random.number();
randomString = faker.random.words();
randomArray = randomString.split(" ");
randomArrayOfNumbers = randomNumber
  .toString(10)
  .split("")
  .map(Number);
randomArrayElement = faker.random.arrayElement(randomArray);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("getBiggest", () => {
  it("should get biggest", () => {
    actual = funcs.getBiggest(randomNumber, randomNumber2);
    if (randomNumber > randomNumber2) {
      expected = randomNumber;
    } else if (randomNumber < randomNumber2) {
      expected = randomNumber2;
    } else {
      excpected = null;
    }
    expect(actual).toEqual(expected);
  });
});

describe("greeting", () => {
  it("should greet in German", () => {
    actual = funcs.greeting("German");
    expected = "Guten Tag!";
    expect(actual).toEqual(expected);
  });
  it("should greet in Spanish", () => {
    actual = funcs.greeting("Spanish");
    expected = "Hola!";
    expect(actual).toEqual(expected);
  });
  it("should greet in English", () => {
    actual = funcs.greeting("English");
    expected = "Hello!";
    expect(actual).toEqual(expected);
  });
  it("should greet in other languages", () => {
    actual = funcs.greeting(!"English");
    expected = "I don't know that language!";
    expect(actual).toEqual(expected);
  });
});

describe("isTenOrFive", () => {
  it("should be 10", () => {
    actual = funcs.isTenOrFive(10);
    expected = true;
    expect(actual).toEqual(expected);
  });
  it("should be 5", () => {
    actual = funcs.isTenOrFive(5);
    expected = true;
    expect(actual).toEqual(expected);
  });
  it("should not be random number that isn't likely to be 10 or 5", () => {
    actual = funcs.isTenOrFive(randomNumber);
    expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("isInRange", () => {
  it("should be in between 20 - 50", () => {
    actual = funcs.isInRange(faker.random.number({ min: 21, max: 49 }));
    expected = true;
    expect(actual).toEqual(expected);
  });
  it("should not be less than 20", () => {
    actual = funcs.isInRange(faker.random.number({ max: 20 }));
    expected = false;
    expect(actual).toEqual(expected);
  });
  it("should not be more than 50", () => {
    actual = funcs.isInRange(faker.random.number({ min: 50 }));
    expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("isInteger", () => {
  it("should be an integer", () => {
    actual = funcs.isInteger(randomNumber);
    expected = true;
    expect(actual).toEqual(expected);
  });
  it("should not be a boolean", () => {
    actual = funcs.isInteger(randomString);
    expected = false;
    expect(actual).toEqual(expected);
  });
  it("should not be a string", () => {
    actual = funcs.isInteger(randomString);
    expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("fizzBuzz", () => {
  it("should be fizzbuzz", () => {
    actual = funcs.fizzBuzz(randomNumber * 15);
    expected = "fizzbuzz";
    expect(actual).toEqual(expected);
  });
  it("should be buzz", () => {
    actual = funcs.fizzBuzz(5);
    expected = "buzz";
    expect(actual).toEqual(expected);
  });
  it("should be fizz", () => {
    actual = funcs.fizzBuzz(3);
    expected = "fizz";
    expect(actual).toEqual(expected);
  });
});

describe("isPrime", () => {
  it("should not be negative", () => {
    actual = funcs.isPrime(-randomNumber);
    expected = false;
    expect(actual).toEqual(expected);
  });
  it("should not be 1", () => {
    actual = funcs.isPrime(1);
    expected = false;
    expect(actual).toEqual(expected);
  });
  it("should not be 0", () => {
    actual = funcs.isPrime(0);
    expected = false;
    expect(actual).toEqual(expected);
  });
  it("should not be composite", () => {
    actual = funcs.isPrime(randomNumber * randomNumber);
    expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("returnFirst", () => {
  it("should return first element in array", () => {
    actual = funcs.returnFirst(randomArray);
    expected = randomArray[0];
    expect(actual).toEqual(expected);
  });
});

describe("returnLast", () => {
  it("should return last element in array", () => {
    actual = funcs.returnLast(randomArray);
    expected = randomArray[randomArray.length - 1];
    expect(actual).toEqual(expected);
  });
});

describe("getArrayLength", () => {
  it("should get array length", () => {
    actual = funcs.getArrayLength(randomArray);
    expected = randomArray.length;
    expect(actual).toEqual(expected);
  });
});

describe("incrementByOne", () => {
  it("should increment each element in array by 1", () => {
    actual = funcs.incrementByOne(randomArrayOfNumbers);
    expected = randomArrayOfNumbers.map(element => element++);
    expect(actual).toEqual(expected);
  });
});

describe("addItemToArray", () => {
  it("should add element to array", () => {
    actual = funcs.addItemToArray(randomArrayOfNumbers, randomNumber);
    expected = randomArrayOfNumbers;
    expect(actual).toEqual(expected);
  });
});

describe("addItemToFront", () => {
  it("should add element to front of array", () => {
    actual = funcs.addItemToFront(randomArrayOfNumbers, randomNumber);
    expected = randomArrayOfNumbers;
    expect(actual).toEqual(expected);
  });
});

describe("wordsToSentence", () => {
  it("should add period to end of string", () => {
    actual = funcs.wordsToSentence(randomString);
    expected = `${randomString}.`;
    expect(actual).toEqual(expected);
  });
});

describe("contains", () => {
  it("should contain element in array", () => {
    actual = funcs.contains(randomArray, randomArrayElement);
    expected = true;
    expect(actual).toEqual(expected);
  });
  it("should not contain element in array", () => {
    actual = funcs.contains(randomArray, randomNumber);
    expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("addNumbers", () => {
  it("should add numbers", () => {
    actual = funcs.addNumbers(randomArrayOfNumbers);
    expected = randomArrayOfNumbers.reduce((x, y) => x + y, 0);
    expect(actual).toEqual(expected);
  });
});

describe("averageTestScore", () => {
  it("should average test scores", () => {
    actual = funcs.averageTestScore(randomArrayOfNumbers);
    expected =
      randomArrayOfNumbers.reduce((x, y) => x + y, 0) /
      randomArrayOfNumbers.length;
    expect(actual).toEqual(expected);
  });
});

describe("largestNumber", () => {
  it("should be largest number", () => {
    actual = funcs.largestNumber(randomArrayOfNumbers);
    expected = Math.max(...randomArrayOfNumbers);
    expect(actual).toEqual(expected);
  });
});
