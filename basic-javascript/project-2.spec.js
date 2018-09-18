const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("project-2", () => {
  describe("getBiggest", () => {
    it("Should determine the biggest out of two parmaters", () => {
      expect(funcs.getBiggest(5, 6)).toBe(6);
      expect(funcs.getBiggest(10, 12)).toBe(12);
      expect(funcs.getBiggest(90, 3)).toEqual(90);
      expect(funcs.getBiggest(34, 23)).toBe(34);
      expect(funcs.getBiggest(9, 7)).toBe(9);
    });
  });
  describe("greeting", () => {
    it("should greet the user with a language", () => {
      const expected = "Guten Tag!";
      const actual = funcs.greeting("GERMAN");

      expect(actual).toBe(expected);
      expect(funcs.greeting("spanish")).toBe("Hola!");
      expect(funcs.greeting("eng")).toBe("Hello!");
    });
  });
  describe("isTenOrFive", () => {
    it("should check the value to find out if it is equal to ten or 5", () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
      expect(funcs.isTenOrFive(2 + 3)).toBeTruthy();
      expect(funcs.isTenOrFive("nothing")).toBeFalsy();
      expect(funcs.isTenOrFive(9)).toBeFalsy();
    });
  });
  describe("isInRange", () => {
    it("Should check if the number is in range of 20 and 50", () => {
      expect(funcs.isInRange(20)).toBeFalsy();
      expect(funcs.isInRange(50)).toBeFalsy();
      expect(funcs.isInRange("nothing")).toBeFalsy();
      expect(funcs.isInRange(30)).toBeTruthy();
      expect(funcs.isInRange(44)).toBeTruthy();
    });
  });
  describe("isInteger", () => {
    it("Should check if the parmater is a whole number", () => {
      expect(funcs.isInteger("5.7")).toBeFalsy();
      expect(funcs.isInteger("4")).toBeTruthy();
      expect(funcs.isInteger(5.4)).toBeFalsy();
      expect(funcs.isInteger(3.2)).toBeFalsy();
      expect(funcs.isInteger(9)).toBeTruthy();
    });
  });
  describe("fizzBuzz", () => {
    it("Should check if the number is equal 5 and 5 or 5 or 3", () => {
      expect(funcs.fizzBuzz(5)).toBe("buzz");
      expect(funcs.fizzBuzz(3)).toBe("fizz");
      expect(funcs.fizzBuzz(15)).toEqual("fizzbuzz");
      expect(funcs.fizzBuzz(22)).toEqual(22);
      expect(funcs.fizzBuzz(71)).toEqual(71);
    });
  });
  describe("isPrime", () => {
    it("Should check if num is prime", () => {
      expect(funcs.isPrime(19)).toEqual(true);
      expect(funcs.isPrime(21)).toBe(false);
      expect(funcs.isPrime(11)).toBeTruthy();
      expect(funcs.isPrime(4)).toBeFalsy();
      expect(funcs.isPrime(20)).toBeFalsy();
    })
  })
  describe("returnFalse", () => {
    it("should return the first item of an array or false if not an array", () => {
      expect(funcs.returnFirst(4)).toBeFalsy();
      expect(funcs.returnFirst([45,6,7,23])).toEqual(45);
      expect(funcs.returnFirst([9,0,4])).toEqual(9);
      expect(funcs.returnFirst("something")).toEqual(false);
      expect(funcs.returnFirst([7])).toEqual(7);
    })
  })
  describe("returnLast", () => {
    it("should return the last item of an array or false if there is no array", () => {
      expect(funcs.returnLast([8,9,0])).toEqual(0);
      expect(funcs.returnLast("nothing,something".split(","))).toEqual("something");
      expect(funcs.returnLast(["nothing", "new", "come"])).toEqual("come");
      expect(funcs.returnLast(8)).toBeFalsy(); 
      expect(funcs.returnLast("")).toBeFalsy(); 
    })
  })
  describe("getArrayLength", () => {
    it("should return the length of the array or false if not an array", () => {
      expect(funcs.getArrayLength([3,4,5,6,7,8,9])).toEqual(7);
      expect(funcs.getArrayLength([3,5])).toEqual(2);
      expect(funcs.getArrayLength("something")).toBeFalsy();
      expect(funcs.getArrayLength(5)).toBeFalsy(); 
      expect(funcs.getArrayLength(["something", 34, {5:8}])).toBe(3);
    })
  })
  describe("incrementByOne", () => {
    it("increment items in array by 1 turn strings to 0 return false if not array", () => {
      expect(funcs.incrementByOne([0,1,2,3])).toEqual([1,2,3,4]);
      expect(funcs.incrementByOne([56])).toEqual([57]);
      expect(funcs.incrementByOne("nothing")).toBeFalsy();
      expect(funcs.incrementByOne()).toBeFalsy();
      expect(funcs.incrementByOne(null)).toBeFalsy();
    })
  })
  describe("addItemToArray", () => {
    it("should add item to array if not array return false", () => {
      expect(funcs.addItemToArray([1,2,3])).toEqual([1,2,3]);
      expect(funcs.addItemToArray([1], "something")).toEqual([1, "something"]);
      expect(funcs.addItemToArray([], [1,2,3])).toEqual([[1,2,3]]);
      expect(funcs.addItemToArray(["yes"], ["no"])).toEqual(["yes", ["no"]]);
      expect(funcs.addItemToArray(9)).toBeFalsy();
      expect(funcs.addItemToArray(null)).toBeFalsy();
    })
  })
  describe("additemToFront", () => {
    it("add item to front of array", () =>{
      expect(funcs.addItemToFront([0])).toEqual([0]);
      expect(funcs.addItemToFront([0], 1)).toEqual([1,0]);
      expect(funcs.addItemToFront(9)).toBeFalsy();
      expect(funcs.addItemToFront(["yes"], ["no"])).toEqual([["no"],"yes"]);
      expect(funcs.addItemToFront([], "yes")).toEqual(["yes"]);
    })
  })
  describe("wordsToSentence", () => {
    it("takes an array and makes it a sentence, false if no array", () => {
      expect(funcs.wordsToSentence(null)).toBeFalsy();
      expect(funcs.wordsToSentence(["something", "nothing"])).toBe("something nothing");
      expect(funcs.wordsToSentence(["nothing", "checking", "it"])).toBe("nothing checking it");
      expect(funcs.wordsToSentence("something something")).toBeFalsy();
      expect(funcs.wordsToSentence(["Yes", "!"])).toBe("Yes !");
    })
  })
  describe("contains", () => {
    it("checks an array for the item if no item return array if no array return false else return count", () =>{
      expect(funcs.contains([1,2,3], 3)).toBe(true);
      expect(funcs.contains([2,2,2,2,5,6,7])).toBe(false);
      expect(funcs.contains([2,2,2,2,5,6,7],2)).toBe(true);
      expect(funcs.contains("nothing", "nothing")).toBe(false);
      expect(funcs.contains([3])).toBe(false); 
    })
  })
  describe("addNumbers", () => {
    it("should take numbers in array and add them up, if item is a string it treats it as a zero", () => {
      expect(funcs.addNumbers([1,2,3])).toBe(6);
      expect(funcs.addNumbers([7,7,7])).toEqual(21); 
      expect(funcs.addNumbers([45, 50])).toEqual(95);
      expect(funcs.addNumbers()).toEqual(false);
      expect(funcs.addNumbers([])).toEqual(0);
    })
  })
  describe("averageTestScore", () => {
    it("should take array and return average return false if not an array", () => {
      expect(funcs.averageTestScore()).toBeFalsy();
      expect(funcs.averageTestScore([70,70,70])).toBe(70);
      expect(funcs.averageTestScore([70,100,100,100])).toEqual(92.5);
      expect(funcs.averageTestScore("nothing")).toBeFalsy();
      expect(funcs.averageTestScore([50,60,52])).toEqual(54);
    })
  })
  describe("largestNumber", () => {
    it("should take array and return biggest number false if not an array", () => {
      expect(funcs.largestNumber()).toBeFalsy();
      expect(funcs.largestNumber([56,34,32,12])).toBe(56);
      expect(funcs.largestNumber([3,6,5.6])).toBe(6);
      expect(funcs.largestNumber([0])).toEqual(0);
      expect(funcs.largestNumber([56, 99,100, "8900"])).toEqual(8900);
    })
  })
});
