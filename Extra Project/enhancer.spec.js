const enhancer = require("./enhancer.js");
const repairer = require("./repairer");
const { createItem } = require("./createItem");

describe("enhancer", () => {
	beforeAll(() => {
		// connect to the database server
		console.log("before each ran");
	});

	beforeEach(() => {
		// create the tables the tests need
	});

	afterEach(() => {
		// drop all the tables
	});

	afterAll(() => {
		// disconnect from the database server
	});

	describe("enhance function", () => {
		it("checks data", () => {
			const item = createItem();

			expect(item.level).toBe(0);
			expect(item.durability).toBe(100);
			expect(item.failCount).toBe(0);
		});

		it("checks inputs and increases level by 1", () => {
			// arrange
			const item = createItem();
			// act
			const actual = enhancer.enhance(item);
			// assert
			expect(actual.level).toBe(1);
		});

		it("checks to see if the item is already level 20", () => {
			const item = createItem(21);

			const actual = enhancer.enhance(item);

			expect(actual).toBe("This level is already maxed out");
		});

		it("Should return error if data of an unexpected type", () => {
			const badData = {
				level: "string",
				durrability: [1, 2, 3, "string"],
				failCount: true,
			};

			const bad = enhancer.enhance(badData);

			expect(bad).toBe("Unexpected datatypes");
		});
	});

	describe("repair function", () => {
		it("Should increase durability by 10 ", () => {
			const item = createItem(undefined, 70);

			const repairPass = repairer.repair(item);

			expect(repairPass.durability).toBe(80);
		});

		it("Should return a string if item is too healhty", () => {
			const healthyItem = createItem(undefined, 94);
			const repariFail = repairer.repair(healthyItem);
			expect(repariFail).toBe(
				"This item is fine.  Break it some more and come back later",
			);
		});
	});

	describe("fail function", () => {
		it("should decrease durability by 5 and increment failCount on failure", () => {
			// arrange
			const item = createItem();

			// act
			const actual = enhancer.fail(item);

			// assert
			expect(actual).toEqual({ level: 0, durability: 95, failCount: 1 });
		});

		it("should decrease durability by 6 given an item level of I", () => {
			const item = createItem("I");

			const actual = enhancer.fail(item);

			expect(actual.failCount).toBe(2);
		});
	});

	describe("roman numeralize function", () => {
		it("Should convert numbers over 15 to a roman numeral", () => {
			num = enhancer.romanNumeralize(16);
			expect(num).toBe("I");
		});
	});
});

describe("async", () => {
	it("async using callback", done => {
		setTimeout(done, 500);
		// axios.get('fsfsf').then(res => {
		//   /// so stuff

		//   done();
		// })
	});
	it("async returning the promise", () => {
		return new Promise(resolve => setTimeout(resolve, 500));
		// return axios.get('fsfsf').then(res => {
		//   /// so stuff
		// })
	});

	it("async using async/await", async () => {
		await new Promise(resolve => setTimeout(resolve, 300));
		// const res = await axios.get('fsfsf');
		// so stuff with res
	});
});
