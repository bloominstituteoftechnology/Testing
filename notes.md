expect.

tobe 
--> checks exact equality

toEqual 
--> checks value of object,  recursively checks every field of an object or array

toBeNull --> matches only Null

toBeUndefined --> matches only undefined

toBeDefined --> matches only defined 

toBeTruthy --> matches if 'if' statement can 
treat as true

toBefalsey --> matches anything that an if statement can treat as false

toBeCloseTo --> floating point equality

toContain('something') --> checks an array if it contains this item

toThrow(error) --> 
for example in the function compileAndroidCode() {
    throw new ConfigError('you are using the wrong JDK');
}
--> .toThrow(ConfigError);

expect(something).toEqual(expect.any(X));
when X = number, string, boolean etc..
--> checks type of output

expect(something).toBeCalledWith(expect.any(X));
--> checks type of input

anything()
--> matches anything except null or undefined
you can use it with toBeCalledWith and toEqual

