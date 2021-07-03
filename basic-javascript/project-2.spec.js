const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it("runs the tests", () => {
    expect(true).toBe(true);
  });



  describe("getBiggest function", () => {
    it("should return the largest integer", () => {
      expect(funcs.getBiggest(4,5)).toEqual(5);
      expect(funcs.getBiggest(-4,-10)).toEqual(-4);
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.getBiggest(undefined)).toEqual(null);
    });
});


describe("greeting function", () => {
    it("should return the greeting in the given language", () => {
      expect(funcs.greeting('German')).toEqual('Guten Tag!');
      expect(funcs.greeting('Spanish')).toEqual('Hola!');
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.greeting(undefined)).toEqual(null);
    });
});

describe("isTenOrFive function", () => {
    it("should returntrue if the num is 10 or 5", () => {
      expect(funcs.isTenOrFive(10)).toEqual(true);
      expect(funcs.isTenOrFive(5)).toEqual(true);
      expect(funcs.isTenOrFive(7)).toEqual(false);
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.isTenOrFive(undefined)).toEqual(null);
    });
});

describe("isInRange function", () => {
    it("should return true if the number is in the specified range", () => {
      expect(funcs.isInRange(25)).toEqual(true);
      expect(funcs.isInRange(49)).toEqual(true);
      expect(funcs.isInRange(50)).toEqual(false);
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.isInRange(undefined)).toEqual(null);
    });
});

describe("isInteger function", () => {
    it("should return true if the number an integer", () => {
      expect(funcs.isInteger(25)).toEqual(true);
      expect(funcs.isInteger(49)).toEqual(true);
      expect(funcs.isInteger(50.1)).toEqual(false);
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.isInteger(undefined)).toEqual(null);
    });
});

describe("fizzBuzz function", () => {
    it("should return true if the number an integer", () => {
      expect(funcs.fizzBuzz(15)).toEqual("fizzbuzz");
      expect(funcs.fizzBuzz(35)).toEqual("buzz");
      expect(funcs.fizzBuzz(9)).toEqual("fizz");
      expect(funcs.fizzBuzz(31)).toEqual(31);
    });
    it("should return null when either value is undefined", () => {
      expect(funcs.fizzBuzz(undefined)).toEqual(null);
    });
});

describe("isPrime function", () => {
    it("should return true if the number is prime", () => {
      expect(funcs.isPrime(-2)).toEqual(false);
      expect(funcs.isPrime(1)).toEqual(false);
      expect(funcs.isPrime(7)).toEqual(true);
    });
    it("should return null when value is undefined", () => {
      expect(funcs.isPrime(undefined)).toEqual(null);
    });
});

describe("returnLast function", () => {
    it("should return the first value of an array", () => {
      expect(funcs.returnFirst([3,2,1])).toEqual(3);
    });
    it("should return null when array is empty", () => {
      expect(funcs.returnFirst([])).toEqual(null);
    });
});


describe("returnLast function", () => {
    it("should return the last value of an array", () => {
      expect(funcs.returnLast([3,2,1])).toEqual(1);
    });
    it("should return null when array is empty", () => {
      expect(funcs.returnLast([])).toEqual(null);
    });
});

describe("getArrayLength function", () => {
    it("should return the length of the array", () => {
      expect(funcs.getArrayLength([3,2,1,5,6,6,3,2])).toEqual(8);
      expect(funcs.getArrayLength([])).toEqual(0);
    });
// test for if not array
});


describe("incrementByOne function", () => {
    it("should increment the values of an array by one", () => {
      expect(funcs.incrementByOne([3,2,1,5])).toEqual([4,3,2,6]);
    });
    it("should return null when array is empty", () => {
        expect(funcs.incrementByOne([])).toEqual(null);
      });
// test for if not array
});

describe("addItemToArray function", () => {
    it("should add an item to the end of an array", () => {
      expect(funcs.addItemToArray([3,2,1,5], 6)).toEqual([3,2,1,5,6]);
      expect(funcs.addItemToArray([], 2)).toEqual([2]);
    });
    it("should return null when item is undefined", () => {
        expect(funcs.addItemToArray([3,2,5], undefined)).toEqual(null);
      });
// test for if not array
});

describe("addItemToFront function", () => {
    it("shouldadd an item to the beginning of an array", () => {
      expect(funcs.addItemToFront([3,2,1,5], 6)).toEqual([6,3,2,1,5]);
      expect(funcs.addItemToFront([], 2)).toEqual([2]);
    });
    it("should return null when item is undefined", () => {
        expect(funcs.addItemToFront([3,2,5], undefined)).toEqual(null);
      });
// test for if not array
});

describe("wordsToSentence function", () => {
    it("should form a sentence from an array of words", () => {
      expect(funcs.wordsToSentence(["hello", "there", "friend"])).toEqual("hello there friend");
      expect(funcs.wordsToSentence(["hi"],)).toEqual("hi");
    });
    it("should return null when words is undefined", () => {
        expect(funcs.wordsToSentence([2, "hello"])).toEqual(null);
        expect(funcs.wordsToSentence(["hello", 2, "tom"])).toEqual(null);
      });
// test for if not array
});

describe("contains function", () => {
    it("should check if an array contains an item", () => {
      expect(funcs.contains(["hello", "there", "friend"], "friend")).toEqual(true);
      expect(funcs.contains([3,2,1], 2)).toEqual(true);
      expect(funcs.contains([3,2,1], 24)).toEqual(false);
    });
    it("should return null when array is empty", () => {
        expect(funcs.contains([], 2)).toEqual(null);
      });
// test for if not array
});


describe("addNumbers function", () => {
    it("should sum all the numbers in an array", () => {
      expect(funcs.addNumbers([3,2,1])).toEqual(6);
    });
    it("should return null when array is empty", () => {
        expect(funcs.addNumbers([],)).toEqual(null);
      });
      it("should return null when array is not numbers", () => {
        expect(funcs.addNumbers(["hello", "there"],)).toEqual(false);
      });
// test for if not array
});

describe("averageTestScore function", () => {
    it("should average all the scores in an array", () => {
      expect(funcs.averageTestScore([3,2,1])).toEqual(2);
    });
    it("should return null when array is empty", () => {
        expect(funcs.averageTestScore([],)).toEqual(null);
      });
      it("should return null when array is not numbers", () => {
        expect(funcs.averageTestScore(["hello", "there"],)).toEqual(false);
      });
// test for if not array
});


describe("largestNumber function", () => {
    it("should average all the scores in an array", () => {
      expect(funcs.largestNumber([3,2,1])).toEqual(3);
    });
    it("should return null when array is empty", () => {
        expect(funcs.largestNumber([],)).toEqual(null);
      });
      it("should return null when array is not numbers", () => {
        expect(funcs.largestNumber(["hello", "there"],)).toEqual(false);
      });
// test for if not array
});