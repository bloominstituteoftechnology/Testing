const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  
    describe("each", () => {
      it("should be a function", () => {
        const map = arrayFunctions.each;
        expect(typeof map).toBe("function");
      });
    });

    describe("reduce", () => {
      it("should be a function", () => {
        const map = arrayFunctions.reduce;
        expect(typeof map).toBe("function");
      });
      it("should add number by itself", () => {
        expect(arrayFunctions.map([1, 2, 3], num => num + num)).toEqual([
          2,
          4,
          6
        ]);
      });
    });

      describe("find", () => {
        it("should be a function", () => {
          const map = arrayFunctions.find;
          expect(typeof map).toBe("function");
        });
  });
      it("should find number", () => {
        expect(arrayFunctions.map([1, 2, 3], num => num === "1")).toEqual([
          false,
          false,
          false
        ]);
      });
    }); 
    describe("filter", () => {
      it("should be a function", () => {
        const map = arrayFunctions.filter;
        expect(typeof map).toBe("function");
      });
      ``;
      it("should filter number", () => {
        expect(arrayFunctions.map([1, 2, 3], num => num === 1)).toEqual([
          true,
          false,
          false
        ]);
      });
    });

    describe("flatten", () => {
      it("should be a function", () => {
        const map = arrayFunctions.flatten;
        expect(typeof map).toBe("function");
      });
      ``;
      it("should flatten number", () => {
        expect(arrayFunctions.map([1, 2, 3], num => num + num)).toEqual([
          2,
          4,
          6
        ]);
      });
    });
  });