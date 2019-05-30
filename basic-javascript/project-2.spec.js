const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("project-2", () => {
    describe("getBiggest", ()=> {
        it("returns biggest number(y)", () => {
            expect(funcs.getBiggest(43, 54)).toBe(54);
        })
        it("returns biggest number(x)", () => {
            expect(funcs.getBiggest(54, 43)).toBe(54);
        })
        it("returns biggest number(boolean-true)", () => {
            expect(funcs.getBiggest(true, 0)).toBe(true);
        })
    });

    describe("greeting", () => {
        it("returns German greeting", () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        })
        it("returns Spanish greeting", () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it("returns Russian greeting(testing default)", () => {
            expect(funcs.greeting('Russian')).toBe('Hello!');
        })
    });

    describe("one or the other", () => {
        it("returns false if not one or the other", () => {
            expect(funcs.isTenOrFive(9)).toBeFalsy();
        })
        it("returns true if one or the other", () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
        })
        it("returns false if null or undefined", () => {
            expect(funcs.isTenOrFive()).toBeFalsy();
        })
    });

    describe("is in range", () => {
        it("returns false if not in specified range", () => {
            expect(funcs.isInRange(100)).toBeFalsy();
        })
        it("returns true if in specified range", () => {
            expect(funcs.isInRange(21)).toBeTruthy();
        })
        it("returns false if undefined", () => {
            expect(funcs.isInRange()).toBeFalsy();
        })
    });

    describe("is Integer", () => {
        it("returns true if num is integer", () => {
            expect(funcs.isInteger(15)).toBeTruthy();
        })
        it("returns false if num is not an integer", () => {
            expect(funcs.isInteger(15.3)).toBeFalsy();
        })
        it("returns false if num is undefined", () => {
            expect(funcs.isInteger()).toBeFalsy();
        })
    });

    describe("fizzBuzzzzz", () => {
        it("number divisible by five and three", () => {
            expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
        })
        it("number divisible by three", () => {
            expect(funcs.fizzBuzz(24)).toBe("fizz");
        })
        it("number divisible by five", () => {
            expect(funcs.fizzBuzz(95)).toBe("buzz");
        })
        it("returns undefined if no defined variables", () => {
            expect(funcs.fizzBuzz()).toBe(undefined);
        })
    });

    describe("is number prime?", () => {
        it("returns true if prime", () => {
            expect(funcs.isPrime(23)).toBeTruthy();
        })
        it("returns false if not prime", () => {
            expect(funcs.isPrime(24)).toBeFalsy();
        })

    });

    describe("first index of array", () => {
        it("returns first index", () => {
            expect(funcs.returnFirst([24, 32, 48])).toBe(24);
        })
        it("returns undefined if first index is undefined", () => {
            expect(funcs.returnFirst([undefined, 32, 48])).toBe(undefined);
        })
        it("returns string if first index is string", () => {
            expect(funcs.returnFirst(["string", 32, 48])).toEqual("string");
        }) //toBe also works in the instance of the string
        it("returns arr if first index is arr", () => {
            expect(funcs.returnFirst([[2,4,6], 32, 48])).toEqual([2,4,6]);
        })

    });
    describe("last index of array", () => {
        it("returns last index", () => {
            expect(funcs.returnLast([24, 32, 48])).toBe(48);
        })
        it("returns undefined if last index is undefined", () => {
            expect(funcs.returnLast([undefined, 32, undefined])).toBe(undefined);
        })
        it("returns string if last index is string", () => {
            expect(funcs.returnLast(["string", 32, "48"])).toEqual("48");
        }) //toBe also works in the instance of the string
        it("returns arr if last index is arr", () => {
            expect(funcs.returnLast([48, 32, [2,4,6]])).toEqual([2,4,6]);
        })

    });

    describe("get array length" , () => {
        it("returns array length no matter the typeof array item", () => {
            expect(funcs.getArrayLength([78, "string", "9", 77, 1, 5, true])).toBe(7);
        })
        it("should return array length === 0 if empty arr", () => {
            expect(funcs.getArrayLength([])).toBe(0);
        })
        
    });

    describe("increment by one", () => {
        it("returns all arr indices incremented by one", () => {
            expect(funcs.incrementByOne([1,2,3,4])).toEqual([2,3,4,5]);
        })
    });

    describe("push item to arr", () => {
        it("returns arr with pushed item added", () => {
            expect(funcs.addItemToArray([1,2,3,4], 5)).toEqual([1,2,3,4,5]);
        })
        it("returns arr with pushed item added(start w empty arr)", () => {
            expect(funcs.addItemToArray([], 5)).toEqual([5]);
        })
    });
    describe("unshift item onto arr", () => {
        it("returns arr with unshifted item added", () => {
            expect(funcs.addItemToFront([1,2,3,4], 5)).toEqual([5,1,2,3,4]);
        })
        it("returns arr with unshifted item added(start w empty arr)", () => {
            expect(funcs.addItemToFront([], 5)).toEqual([5]);
        })
    });

    describe("turn array of strings into sentence", ()=> {
        it("returns string of arr items concatenated separated by space", ()=> {
            expect(funcs.wordsToSentence(["To", "Be", "or", "Not", "To", "Be"])).toBe("To Be or Not To Be");
        })
        it("empty array returns empty string", ()=> {
            expect(funcs.wordsToSentence([])).toBe("");
        })
    });

    describe("does array have item?", () => {
        it("returns true if arr has item", ()=> {
            expect(funcs.contains([23, 95, 78, 62, 18], 18)).toBeTruthy();
        })
        it("returns false if arr doesn't have item - testing num as string", ()=> {
            expect(funcs.contains([23, 95, 78, 62, 18], "18")).toBeFalsy();
        })
        it("returns false if arr doesn't have item", ()=> {
            expect(funcs.contains([23, 95, 78, 62, 18], 63)).toBeFalsy();
        })
        it("returns false if arr item is undefined or null", ()=> {
            expect(funcs.contains([23, 95, 78, 62, 18], undefined)).toBeFalsy();
        })
    });

    describe("sum of numbers in num array", () => {
        it("returns sum of all numbers in array", () => {
            expect(funcs.addNumbers([23, 95, 78, 62, 18])).toBe(276);
        })
        it("returns sum of empty array", () => {
            expect(funcs.addNumbers([])).toBe(0);
        })
        it("returns sum of nums when entered as strings", () => {
            expect(funcs.addNumbers(["1", "2", 3])).toBe(6);
        })
    });

    describe("avg test score", () => {
        it("returns avg test score from arr of scores", () => {
            expect(funcs.averageTestScore([83, 95, 78, 62, 100])).toBe(83.6);
        })
        it("returns avg of empty array as NaN", () => {
            expect(funcs.averageTestScore([])).toBe(NaN);
        })
        it("returns avg of array w undefined score as NaN", () => {
            expect(funcs.averageTestScore([undefined, 50, 100, 100])).toBe(NaN);
        })
    });

    describe("largest number from arr of numbers", () => {
        it("returns largest number from array", () => {
            expect(funcs.largestNumber([1983, 556, 478, 62, 100])).toBe(1983)
        })
        it("returns largest \"number\" from array", () => {
            expect(funcs.largestNumber(["abc", true, undefined, -3])).toBe(true)
        })
    })

})