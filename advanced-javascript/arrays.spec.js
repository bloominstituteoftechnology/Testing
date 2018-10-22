const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

	//each tests
	describe('each', () => {
		it('should return correct values', () => {
			const each = arrayFunctions.each
			const cb = function(x, y) {
				return x + y;
			}
			//Arrange
			const expected = [1,3,6,8];
			//Act
			const actual = each([1,2,4,5], cb)
			//Assert
			expect(actual).toEqual(expected)
		})

		it('should be a function', () => {
			const each = arrayFunctions.each
			expect(typeof each).toBe('function')
		})
	})

	//map tests 
  describe('map', () => {
  	it('should return correct values', () => {
  		const map = arrayFunctions.map
  		const cb = function(x){
  			return x + 1;
  		}
  		//Arrange
  		const expected = [2,3,4,5,6]
  		//Act
  		const actual = map([1,2,3,4,5], cb)
  		//Assert
  		expect(actual).toEqual(expected);
  	})

    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  });


  //reduce tests
  describe('reduce', () => {

  	it('should return the correct values', () => {
  		const reduce = arrayFunctions.reduce
 			const arr1 = [10, 10]
 			const cb = function(x, y){
 				return x + y;
 			}

  		//Arrange
  		const expected = 20
  		//Act
  		const actual = reduce(arr1, cb, arr1.shift())
  		//Assert
  		expect(actual).toBe(expected);

  	})

  	it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

  })

	//find tests
	describe('find', () => {

		it('should return the correct value', () => {
			const find = arrayFunctions.find;
			const cb = function(x){
				if (x === 10){ return x}
			}
			const cb2 = function(x){
				if (x === 100){return x}
			}
			//Arrange
			const expected1 = 10
			const expected2 = undefined
			//Act
			const actual1 = arrayFunctions.find([2,3,4,5,10,2], cb)
			const actual2 = arrayFunctions.find([2,3,4,5,10,2], cb2)
			//Assert
			expect(actual1).toBe(expected1);
			expect(actual2).toBe(expected2);

		})

		it('should be a function', () => {
			const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
		})
	})

	//filter tests
	describe('filter', () => {
		it('should return the correct value', () => {
		const filter = arrayFunctions.filter;
		const cb = function(x){
			if (x === 10){return 10}
		}
		//Arrange
		const expected = [10, 10, 10]
		//Act
		const actual = filter([20,10,14,20,10,10], cb)
		//Assert
		expect(actual).toEqual(expected);

		})
		it('should be a function', () => {
			const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
		})

	})

	describe('flatten', () => {
		it('should return the correct value', () => {

			const flatten = arrayFunctions.flatten
			//Arrange
			const expected = [1, 2, 3, 4];
			//Act
			const actual = flatten([1, 2, [3, 4]]);
			//Assert
			expect(actual).toEqual(expected)
		})
		it('should be a function', () => {
			const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
		})

	})

// var arr1 = [1, 2, [3, 4]];
// arr1.flat(); 
// [1, 2, 3, 4]

// const flatten = elements => {
//   const flattenedArr = reduce(
//     elements,
//     (memo, item) => {
//       if (Array.isArray(item)) return memo.concat(flatten(item));
//       return memo.concat(item);
//     },
//     []
//   );
//   return flattenedArr;
// };










});
