
const funcs = require('./project-1');

// write your tests here
describe('multiply by 10', () => {
    it('Should Multiply number by 10', () => {
    //arange
    const multByTen = funcs.multiplyByTen;
    //act
    const num = 3;
    const prod = multByTen(num);
    //assert
    expect(prod).toBe(30);
    });

});

describe('subtract by 5', () => {
    it('Should subtract 5 from number', () => {
        //arrange
        const subFive = funcs.subtractFive;
        // act
        const num = 7;
        const subOp = subFive(num);

        //assert
        expect(subOp).toBe(2);
    });
});
//<<<<<<<RETURN TO THIS
describe('string are same length', () => {
    it('Strings should be the same length', () => {
        //arrange
        const areSameL = funcs.areSameLength;
        //act
        const strA = "hello";
        const strB = "today";
        const compare = areSameL(strA, strB);
        //assert
        expect(compare).toBe(true)
    });
});

describe('are equal', () => {
    it('The two values should be the same', () => {
        //arrange
        const equals = funcs.areEqual;
        //act
        const A = 3;
        const B = 3;
        const evComp = equals(A, B);

        //assert
        expect(evComp).toBe(true);
    });
});

describe('less than 90', () => {
  it('Number should be less than 90', () => {
    //arrange 
    const lninety = funcs.lessThanNinety;
    //act
    const A = 89;
    const lthan = lninety(A);
    //assert
    expect(lthan).toBe(true);
  });
});

describe('greater than 50', () => {
  it('Number should be greater than 50', () => {
      //arrange
      const grFifty = funcs.greaterThanFifty;
      //act
      const A = 51;
      const gthan = grFifty(A);
      //assert
      expect(gthan).toBe(true);
  });
});

describe('add 2 integers', () => {
    it('The two numbers are added', () => {
        //arrange
        const addFunc = funcs.add;
        //act
        const A = 3;
        const B = 5;
        const AdOper = addFunc(A,B);
        //assert
        expect(AdOper).toBe(8);
    });
});

describe('subtract', () => {
  it('Shuld subtract Y number from X number', () => {
      //arrange 
      const subFunc = funcs.subtract;
      //act
      const A = 3;
      const B = 2;
      const subOper = subFunc(A,B);
      //assert
      expect(subOper).toBe(1);
      
  });
});

describe('divide', () => {
    it('Should divide x number by y value', () => {
        //arrange
        const divFunc = funcs.divide;
        //act
        const A = 3;
        const B = 6;
        const divOper = divFunc(A,B);
        //assert
        expect(divOper).toEqual(A/B)
    });
});

describe('multiply', () => {
    it('Should multiply X number by Y number', () => {
        //arrange
        const mulFunc = funcs.multiply;
        //act
        const A = 3;
        const B = 2;
        const multOper = mulFunc(A,B);
        //assert
        expect(multOper).toEqual(6);
    });
});

describe('remainder', () => {
  it('Should return remainder of X divided by Y', () => {
      //arrange
      const remFunc = funcs.getRemainder;
      //act
      const A = 5;
      const B = 3;
      const remOper = remFunc(A,B);
      //assert
      expect(remOper).toEqual(2);
  });
});

describe('even', () => {
    it('The number should be even', () => {
        //arrange
        const evenCheck = funcs.isEven;
        //act
        const A = 4;
        const check = evenCheck(A);
        //assert
        expect(check).toBe(true);
    });
});

describe('odd', () => {
    it('The number should be odd', () => {
        //arrange 
        const oddCheck = funcs.isOdd;
        //act
        const A = 3;
        const check = oddCheck(A);
        //assert
        expect(check).toBe(true);
    });
});

describe('return square', () => {
    it('Should return the square of the input number', () => {
        //arrange
        const sqfunc = funcs.square;
        //act
        const A = 3;
        const sqOper = sqfunc(A);
        //assert
        expect(sqOper).toBe(9);
    });
});

describe('return cube', () => {
    it('Should return the cube of the input number', () => {
        //arrange
        const cbfunc = funcs.cube;
        //act
        const A = 3;
        const cbOper = cbfunc(A);
        //assert
        expect(cbOper).toBe(27);
    });
});

describe('return x number to power y', () => {
    it('Should return the value of X number to the power of Y nuber', () => {
        //arrange
        const raise = funcs.raiseToPower;
        //act
        const A = 3;
        const B = 3;
        const raiseOper = raise(A,B);
        //assert
        expect(raiseOper).toBe(27);
    });
});

describe('round number', () => {
    it('Should return a rounded number', () => {
    //arrange
    const round = funcs.roundNumber;
    //act
    const A = 2.7;
    const roundOper = round(A);
    //assert
    expect(roundOper).toBe(3);
    })

  
});

describe('round number up', () => {
  it('Should round the number up', () => {
      //arrange
      const rUp = funcs.roundUp;
      //act
      const A = 6.2;
      const rUpOper = rUp(A);
      //assert
      expect(rUpOper).toEqual(7);
  });
});

describe('add exclamation', () => {
  it('Should add an exclamation mark to a string', () => {
      //arrange
      const addExcla = funcs.addExclamationPoint;
      //act
      const A = 'Hello';
      const B = A + '!'
      const addExclaOper = addExcla(A);
      //assert
      expect(addExclaOper).toEqual(B);
  });
});

describe('combine names', () => {
  it('Should combine name A with name B', () => {
      //arrange
      const combine = funcs.combineNames;
      //act
      const A = 'First';
      const B = 'Last';
      const c = `${A} ${B}`;
      const combPro = combine(A,B);
      //assert
      expect(combPro).toBe(c)
  });
});
describe('get greeting', () => {
  it('Should return a greeting of input name', () => {
      //arrange
      const greet = funcs.getGreeting;
      //act
      const A = 'Name';
      const B = `Hello ${A}!`;
      const greetOper = greet(A);
      //assert
      expect(greetOper).toBe(B)
  });
});

describe('get rectangle', () => {
  it('Should return a product length * width (area), where the first input is a length', () => {
      //arrange
      const rect = funcs.getRectangleArea;
      //act
      const A = 3;
      const B = 5;
      const rectOper = rect(A,B);
      //assert
      expect(rectOper).toBe(15);

  });
});

describe('get triangle', () => {
  it('Should return the area of a triange, where the base is the first number', () => {
      //arrange
      const tri = funcs.getTriangleArea;
      //act
      const A = 3;
      const B = 2;
      const triOper = tri(A, B);
      //assert
      expect(triOper).toEqual(3);
  });
});

describe('get area of circle', () => {
  it('Should return the area of a circle, given the radius', () => {
      //arrange 
      const carea = funcs.getCircleArea;
      //act
      const A = 3;
      const B = Math.PI * A * A;
      const careaProd = carea(A);
      //assert
      expect(careaProd).toEqual(B);
  })
})
 
describe('get rectangular Prism volume', () => {
  it('Should return the area of a rectangular prism, given length, width, and height', () => {
      //arrange
      const prism = funcs.getRectangularPrismVolume;
      //act
      const A = 3;
      const B = 2;;
      const C = 3;
      const prismP = prism(A,B,C);
      const prod = A * B * C;
      //assert
      expect(prismP).toEqual(prod);
  })
})








