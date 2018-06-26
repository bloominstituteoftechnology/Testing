const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('keys', () => {
  const obj = {a: 0, b:1, c:3};
  it('should be a key', ()=> {
    expect(objectFunctions.keys(obj)).toEqual(["a", "b", "c"]);
  });

  it('should return an object' ,() => {
    expect(typeof objectFunctions.keys(obj)).toBe('object');
  })
  
  it("should have length", () => {
    expect(objectFunctions.keys(obj)).toHaveLength(3);
  })

});

describe('values', () => {
  const obj = {a: 0, b:1, c:3};
  const mockFn = jest.fn();
  it('should have a value', () => {
    expect(objectFunctions.values(obj)).toEqual([0,1,3]);
  });

  it("should have length", () => {
    expect(objectFunctions.values(obj)).toHaveLength(3);
  });
  it("is a function", () => {
    expect(typeof objectFunctions.values).toBe("function");
  })
  it("returns an object", () => {
    expect(typeof objectFunctions.values(obj)).toBe("object");
  })

});

describe('mapObject', () => {
  const obj = {a:0, b:1, c:3};
  const mapObject = objectFunctions.mapObject;


  it('should invoke a callback', () => {
    const cb= jest.fn();

    mapObject(obj, cb);
    expect(cb).toHaveBeenCalled();
  });

  it("should return an obj", () => {
    const cb= jest.fn();

    expect(typeof mapObject(obj, cb)).toBe('object');
  });

  it("has keys", () => {
    const cb = jest.fn();
    expect(objectFunctions.mapObject(obj, cb)).toBeTruthy();
  })
});

describe('pairs', () => {
  const obj = {a:0, b:1, c:3};

  it('should return key/value pairs', () => {
    expect(objectFunctions.pairs(obj)).toEqual([["a",0], ["b",1], ["c", 3]]);
  });

  it("should return an array", () => {
    expect(typeof objectFunctions.pairs(obj)).toBe("object");
  });

  it("should be a function", () => {
    expect(typeof objectFunctions.pairs).toBe("function");
  });

  it("should have length", () => {
    expect(objectFunctions.pairs(obj)).toHaveLength(3);
  })


});

describe('invert', () => {
  const obj = {a:0, b:1, c:3};

  it('should invert so keys become values and values become keys', () => {
    expect(objectFunctions.invert(obj)).toEqual({"0":"a", "1": "b", "3": "c"});
  });

  it("returned value should be an object", () => {
    expect(typeof objectFunctions.invert(obj)).toBe("object");
  });

  it("object should be defined", () => {
    expect(obj).toBeDefined;
  });
});

describe('defaultProps', () => {
  const obj = {a:0, b:1, c:3};

  it('should pass default props', () => {
    const defaultProps = jest.fn;
    expect(objectFunctions.defaults(obj, defaultProps)).toEqual(obj);
  });

  it("should return an object", () => {
    const defaultProps = jest.fn;
    expect(typeof objectFunctions.defaults(obj, defaultProps)).toBe("object")
  })
})