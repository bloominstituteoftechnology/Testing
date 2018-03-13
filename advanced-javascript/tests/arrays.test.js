/* eslint-disable prefer-destructuring */

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const funcs = require("../src/arrays");

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe("Arrays", () => {
	describe("`each`", () => {
		const each = funcs.each;
		it("should be a function", () => {
			expect(each).to.be.a("function");
		});
		it("should call the callback n times", () => {
			const arr = [9, 8, 7, 6];
			const cb = sinon.spy();
			const e = each(arr, cb);
			expect(cb.callCount).to.equal(arr.length);
			expect(e).to.equal(undefined);
		});
	});

	describe("`map`", () => {
		const map = funcs.map;
		it("should be a function", () => {
			expect(map).to.be.an("function");
		});
		it("should transform every element passed in", () => {
			const arr = [1, 2, 3];
			const cb = arr => arr * 3;
			const mappedArr = [3, 6, 9];
			expect(map(arr, cb)).to.eql(mappedArr);
			expect(map(arr, cb)).to.be.an("array");
		});
	});

	describe("`reduce`", () => {
		const reduce = funcs.reduce;
		it("should be a function", () => {
			expect(reduce).to.be.a("function");
		});
		it("should call cb once for every element in arr", () => {
			const arr = [1, 2, 3, 4, 9];
			const cb = sinon.spy();
			const cb2 = (sum, x) => (sum += x);
			memo = 0;
			const sum = reduce(arr, cb, memo);
			const sum2 = reduce(arr, cb2, memo);
			expect(cb).to.have.callCount(arr.length);
			expect(sum2).to.be.a("number");
		});
	});

	describe("`find`", () => {
		const find = funcs.find;
		it("should be a function", () => {
			expect(find).to.be.a("function");
		});
		it("should find an element in an array", () => {
			const items = [1, 2, 3, 9];
			const cb = item => item === 9;
			const cb2 = item => item === 8;
			expect(find(items, cb)).to.equal(9);
			expect(find(items, cb2)).to.equal(undefined);
		});
	});

	describe("`filter`", () => {
		const filter = funcs.filter;
		it("should be a function", () => {
			expect(filter).to.be.a("function");
		});
		it("should filter elements in an array", () => {
			const arr = ["Clara", "Troy", "Benjammin"];
			const cb = str => str.length > 5;
			const cb2 = sinon.spy();
			expect(filter(arr, cb)).to.eql(["Benjammin"]);
			expect(filter(arr, cb2)).to.be.an("array");
		});
	});

	describe("`flatten`", () => {
		const flatten = funcs.flatten;
		it("should be a function", () => {
			expect(flatten).to.be.a("function");
		});
		it("should flatten an array", () => {
			const items = [1, 2, 3, [4, 5, 9]];
			const flat = [1, 2, 3, 4, 5, 9];
			expect(flatten(items)).to.eql(flat);
			expect(flatten(items)).to.be.a("array");
		});
	});
});
