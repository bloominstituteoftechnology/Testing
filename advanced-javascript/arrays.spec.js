const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  describe("map", () => {
    it("should be a function", () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe("function");
    });

    it(" each return the right output ", () => {
      const map = arrayFunctions.map;
      let arr = [2, 3, 4];
      let cb = x => {
        return x + 1;
      };
      const actual = map(arr, cb);
      expect(actual).toEqual([3, 4, 5]);
    });
  });

  describe("each", () => {
    it(" each should be a function  ", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
    });

    it(" each return the right output ", () => {
      const each = arrayFunctions.each;
      let arr = [2, 3, 4];
      let cb = (x, y) => {
        return x + y;
      };
      each(arr, cb);
      expect(arr).toEqual([2, 3, 4]);
      expect(each(arr, cb)).toBe(undefined);
    });
  });

  describe("reduce", () => {
    it(" each should be  a function  ", () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe("function");
    });


    it(" each return the right output ", () => {
      const reduce = arrayFunctions.reduce;
      let arr = [2, 3, 4];
      let cb = (x, y) => { // x = memo , y = item = element[i]
        return x = y + x;
      };
      const actual = reduce(arr, cb);
      expect(actual).toEqual(9)
    });
  });


  describe('filter', () => {
    it('filter should be function', () => {
      const filter = arrayFunctions.reduce;
      expect(typeof filter).toBe("function");
    })


    it(" each return the right output ", () => {
      const filter = arrayFunctions.filter;
      let arr = [2, 3, 4];
      let cb = (x) => { // x = memo , y = item = element[i]
        return x > 3;
      };
      const actual = filter(arr, cb);
      expect(actual).toEqual([4])
    });
  })

  describe('flatten', () => {
    it('flatten  should be function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe("function");
    })


    it(" each return the right output ", () => {
      const flatten = arrayFunctions.flatten;
      let arr = [3, 4, [2, [5]]];

      const actual = flatten(arr);
      expect(actual).toEqual([3, 4, 2, 5])
    });
  })

  describe('find ', () => {
    it('find should be function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe("function");
    })


    it(" each return the right output ", () => {
      const find = arrayFunctions.find;
      let arr = [2, 3, 4];
      let cb = (x) => { // x = memo , y = item = element[i]
        return x === 3;
      };
      const actual = find(arr, cb);
      expect(actual).toBe(3)
    });


    it(" each return the right output ", () => {
      const find = arrayFunctions.find;
      let arr = [2, 3, 4];
      let cb = (x) => { // x = memo , y = item = element[i]
        return x === 5;
      };
      const actual = find(arr, cb);
      expect(actual).toBe(undefined)
    });



  })








});
