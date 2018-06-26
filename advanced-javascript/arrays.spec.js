const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const cb= jest.fn();
      const map = arrayFunctions.map;
      const elements = [1,2,3,4];

      map(elements, cb);
      expect(cb).toHaveBeenCalled();
  
    })

    it("should have length", ()=> {
      const elements = [1,2,3,4];
      expect(elements).toHaveLength(4);
    })

    
   
  });

  describe('each', () => {
    it("should invoke callback passed in", () => {
      const elements = [1,2,3,4];
      const cb= jest.fn();
      arrayFunctions.each(elements, cb);
      expect(cb).toHaveBeenCalled();
  
    })

    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });

    it("should have length", ()=> {
      const elements = [1,2,3,4];
      expect(elements).toHaveLength(4);
    })

    
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const elements = [1,2,3,4];
      const cb= jest.fn();
      arrayFunctions.reduce(elements, cb);
      expect(cb).toHaveBeenCalled();
    });

  });

  

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const elements = [1,2,3,4];
      const cb= jest.fn();
      arrayFunctions.find(elements, cb);
      expect(cb).toHaveBeenCalled();
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const elements = [1,2,3,4];
      const cb= jest.fn();
      arrayFunctions.find(elements, cb);
      expect(cb).toHaveBeenCalled();
    });
  });

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });

    it("should invoke callback passed in", () => {
      const elements = [1,2,3,4];
      const cb= jest.fn();
      arrayFunctions.find(elements, cb);
      expect(cb).toHaveBeenCalled();
    });
  });
});
