const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('arrays', () => {
  const map = arrayFunctions.map;
  const elements = [1,2,3,4];

  describe('map', () => {
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      map(elements, cb);
      expect(cb).toHaveBeenCalled();
  
    })

    it("should have length", ()=> {
      expect(elements).toHaveLength(4);
    })

    it("should not modify the provided array", () => {
      const cb= jest.fn();
      let elementsCopy = JSON.stringify(elements); //Array.from works as well for shallow copies
      map(elements, cb);
      expect(elementsCopy).toEqual(JSON.stringify(elements));
    })

    it("should use cb once on each element in arr", () => {
      const mockFn= jest.fn();
      map(elements, mockFn)
      console.log('Was Called:', mockFn.mock.calls.length);
      expect(elements.length).toBe(mockFn.mock.calls.length);
    })

    it("should return an array", () => {
      const mockFn= jest.fn();
      map(elements, mockFn)
      expect(typeof map(elements, mockFn)).toBe('object');
      })
   
  });

  describe('each', () => {
    const elements = [1,2,3,4];
    const each = arrayFunctions.each;


    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      arrayFunctions.each(elements, cb);
      expect(cb).toHaveBeenCalled();
  
    })

    it('should be a function', () => {
      expect(typeof each).toBe('function');
    });

    it("should have length", ()=> {
      expect(elements).toHaveLength(4);
    })

    it("should return undefined because it doesn't return anything", () => {
      const cb = jest.fn();
      expect(typeof each(elements, cb)).toBe('undefined');
    })

    
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    const each = arrayFunctions.each;
    const elements = [1,2,3,4];

    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      reduce(elements, cb);
      expect(cb).toHaveBeenCalled();
    });


    it("memo should be a number", () => {
      const cb = jest.fn();
      const memo = elements.shift();
      expect(typeof memo).toBe("number");
    })

    


});
  

  describe('find', () => {
    const elements = [1,2,3,4, "string"];
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(typeof find).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      find(elements, cb);
      expect(cb).toHaveBeenCalled();
    });

    it("value of arr[i] should be a JSON string or undefined", () => {
      const cb = jest.fn()
      
      elements.forEach(index => {
        if (!find) {
          expect(typeof index).toBe(undefined)
        }else{
          expect(typeof JSON.stringify(index)).toBe("string");
        }
      });

    });

  });

  describe('filter', () => {
    const elements = [1,2,3,4];
    const filter = arrayFunctions.filter;

    it('should be a function', () => {
      expect(typeof filter).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      filter(elements, cb);
      expect(cb).toHaveBeenCalled();
    });

    it("filtered array should return at least once", () => {
      const cb = jest.fn();
      expect(filter(elements, cb)).toBeTruthy();
    })



  });

  describe('flatten', () => {
    const elements = [[1,2],[2,7],[3,4]];

    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      arrayFunctions.find(elements, cb);
      expect(cb).toHaveBeenCalled();
    });

    it("should return an array", () => {
      expect(typeof arrayFunctions.flatten(elements)).toBe('object')
    });

    it("should return flattened array", () => {
      expect(arrayFunctions.flatten(elements)).toEqual([1, 2, 2, 7, 3, 4])
    })
  });
});
