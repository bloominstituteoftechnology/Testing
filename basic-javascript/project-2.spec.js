const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it("Should run tests instead of using word test", () => {
  //hi mom
});

describe.only("Project 2 functions", () => {
  describe("getBiggest", () => {
    it("Should return bigger number between x and y", () => {
      const expected = 10;
      const actual = funcs.getBiggest(1, 10);
      expect(actual).toBe(expected);
    });
  });

  it("Should return number if they are both equal", () => {
    const expected = 10;
    const actual = funcs.getBiggest(10, 10);
    expect(actual).toEqual(expected);
  });

  it("Should throw error if either argument is NaN", () => {
    expect(() => {
      funcs.getBiggest("string", 10);
    }).toThrow();
  });

  describe("greeting", () => {
    it("Should return Guten Tage if input is German", () => {
      const expected = "Guten Tag!";
      const actual = funcs.greeting("German");
      expect(actual).toEqual(expected);
    });
    describe("greeting", () => {
      it("Should return Hola if input is Spanish", () => {
        const expected = "Hola!";
        const actual = funcs.greeting("spanish");
        expect(actual).toEqual(expected);
      });
    });

    describe("greeting", () => {
      it("Should return hello if input is not German or Spanish", () => {
        const expected = "Hello!";
        const actual = funcs.greeting("spandsfsdgish");
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('isTenOrFive', ()=> {
      it('Should return true if input is 10 or 5', ()=> {
         
          expect(funcs.isTenOrFive(10)).toEqual(true);
          expect(funcs.isTenOrFive('')).toEqual(false);
          expect(funcs.isTenOrFive([10])).toEqual(false);
      })
  })

  
});
