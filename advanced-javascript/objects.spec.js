const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
	const obj = {
		a: 0,
		b: 1,
		c: 2
	};
	const cb = value => {
		return value + 10;
	};
	describe("mapObject function", () => {
		const mapped = objectFunctions.mapObject(obj, cb);
		it("Should return an obj", () => {
			expect(typeof mapped).toBe("object");
		});
		it("Should return expected outcome", () => {
			expect(mapped).toEqual({ a: 10, b: 11, c: 12 });
		});
	});
	describe("pairs function", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3
		};
		const pairs = objectFunctions.pairs(obj);
		it("Should return an array", () => {
			expect(pairs instanceof Array).toBeTruthy();
		});
		it("Should return expected outcome", () => {
			expect(pairs).toEqual([["a", 1], ["b", 2], ["c", 3]]);
		});
	});
   describe('invert', () => {
    const testObj = {
      this: 'is',
      a: 'test',
      object: 'woot'
    };
    const expected = {
      is: 'this',
      test: 'a',
      woot: 'object'
    };
    const result = objectFunctions.invert(testObj);

    it('should return an object', () => {
      expect(typeof result).toBe('object');
      expect(result.length).toBe(undefined);
    });
    it('should invert object key value pairs', () => {
      expect(result).toEqual(expected);
    });
  });
  describe('defaults', () => {
    const testObj = {
      this: 'is',
      a: 'test',
      object: 'woot'
    };
    const defaultProps = {
      unset: 'set',
      values: 'defaults'
    };
    const expected = {
      this: 'is',
      a: 'test',
      object: 'woot',
      unset: 'set',
      values: 'defaults'
    };
    const result = objectFunctions.defaults(testObj, defaultProps);

    it('should return an object', () => {
      expect(typeof result).toBe('object');
      expect(result.length).toBe(undefined);
    });
    it('adds values from default into obj if not set initially', () => {
      expect(result).toEqual(expected);
    });
  });
});
