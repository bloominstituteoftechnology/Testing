const assert = require('chai').assert;

const expect = require('chai').expect;



const funcs = require('../src/project-3');



// whoops.. there is no test suite for this file. You'll simply just have to create one :/



describe('Project-3 Functions', () => {





describe('`makeCat`', () => {



it('should be a function', () => {

const makeCat = funcs.makeCat;

assert.typeOf(makeCat, 'function');

});



it('should check name property', () => {

const makeCat = funcs.makeCat;

const newCat = makeCat("popoy",7);

expect(newCat).to.have.property('name');

});



it('should check age property', () => {

const makeCat = funcs.makeCat;

const newCat = makeCat("popoy",7);

expect(newCat).to.have.property('age');

});



it('should check method', () => {

const makeCat = funcs.makeCat; 

const newCat = makeCat("popoy",7);

assert.typeOf(newCat.meow, 'function');

});



}); 



// const addProperty = (object, property) => {

// object[property] = null;

// return object;

// };



describe('`addProperty`', () => {



it('should be a function', () => {

const addProperty = funcs.addProperty;

assert.typeOf(addProperty, 'function');

});



it('should check object[property] is null', () => {

const addProperty = funcs.addProperty;

const newProperty = addProperty({"tools":null},"tools");

expect(newProperty.tools).to.equal(null);

});



}); 





describe('`invokeMethod`', () => {



it('should be a function', () => {



const invokeMethod = funcs.invokeMethod;



assert.typeOf(invokeMethod, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`multiplyMysteryNumberByFive`', () => {



it('should be a function', () => {



const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;



assert.typeOf(multiplyMysteryNumberByFive, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`deleteProperty`', () => {



it('should be a function', () => {



const deleteProperty = funcs.deleteProperty;



assert.typeOf(deleteProperty, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`newUser`', () => {



it('should be a function', () => {



const newUser = funcs.newUser;



assert.typeOf(newUser, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`hasEmail`', () => {



it('should be a function', () => {



const hasEmail = funcs.hasEmail;



assert.typeOf(hasEmail, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`hasProperty`', () => {



it('should be a function', () => {



const hasProperty = funcs.hasProperty;



assert.typeOf(hasProperty, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`verifyPassword`', () => {



it('should be a function', () => {



const verifyPassword = funcs.verifyPassword;



assert.typeOf(verifyPassword, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`updatePassword`', () => {



it('should be a function', () => {



const updatePassword = funcs.updatePassword;



assert.typeOf(updatePassword, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`addFriend`', () => {



it('should be a function', () => {



const addFriend = funcs.addFriend;



assert.typeOf(addFriend, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`setUsersToPremium`', () => {



it('should be a function', () => {



const setUsersToPremium = funcs.setUsersToPremium;



assert.typeOf(setUsersToPremium, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`sumUserPostLikes`', () => {



it('should be a function', () => {



const sumUserPostLikes = funcs.sumUserPostLikes;



assert.typeOf(sumUserPostLikes, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 







describe('`addCalculateDiscountPriceMethod`', () => {



it('should be a function', () => {



const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;



assert.typeOf(addCalculateDiscountPriceMethod, 'function');



});



it('should multiple by ten', () => {



const multiplyByTen = funcs.multiplyByTen;



expect(multiplyByTen(10)).to.equal(100);



});



}); 











});



From: Vance Villanueva <filp530@hotmail.com>
Sent: Tuesday, August 15, 2017 1:45 AM
To: Vance Villanueva
Subject: bootcamp code for js testing project
 

const assert = require('chai').assert;

const expect = require('chai').expect;

const funcs = require('../src/project-3.js');





// whoops.. there is no test suite for this file. You'll simply just have to create one :/



describe('Project-3 Functions', () => {


describe('`makeCat`', () => {

it('should be a function', () => {

const makeCat = funcs.makeCat;

assert.typeOf(makeCat, 'function');

});

it('should check name property', () => {

const makeCat = funcs.makeCat;

expect(makeCat).to.have.property('name');



});

it('should check age property', () => {

const makeCat = funcs.makeCat;

expect(makeCat).to.have.property('age');

});



it('should check method', () => {

const makeCat = funcs.makeCat; 

assert.typeOf(makeCat.meow, 'function');

//expect(checkMeow.to.equal('Meow!'));

});

}); 





describe('`addProperty`', () => {

it('should be a function', () => {

const addProperty = funcs.addProperty;

assert.typeOf(addProperty, 'function');

});

it('should multiple by ten', () => {

const addProperty = funcs.addProperty;

expect(multiplyByTen(10)).to.equal(100);

});

}); 


describe('`invokeMethod`', () => {

it('should be a function', () => {

const invokeMethod = funcs.invokeMethod;

assert.typeOf(invokeMethod, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`multiplyMysteryNumberByFive`', () => {

it('should be a function', () => {

const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;

assert.typeOf(multiplyMysteryNumberByFive, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`deleteProperty`', () => {

it('should be a function', () => {

const deleteProperty = funcs.deleteProperty;

assert.typeOf(deleteProperty, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`newUser`', () => {

it('should be a function', () => {

const newUser = funcs.newUser;

assert.typeOf(newUser, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`hasEmail`', () => {

it('should be a function', () => {

const hasEmail = funcs.hasEmail;

assert.typeOf(hasEmail, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`hasProperty`', () => {

it('should be a function', () => {

const hasProperty = funcs.hasProperty;

assert.typeOf(hasProperty, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`verifyPassword`', () => {

it('should be a function', () => {

const verifyPassword = funcs.verifyPassword;

assert.typeOf(verifyPassword, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`updatePassword`', () => {

it('should be a function', () => {

const updatePassword = funcs.updatePassword;

assert.typeOf(updatePassword, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`addFriend`', () => {

it('should be a function', () => {

const addFriend = funcs.addFriend;

assert.typeOf(addFriend, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`setUsersToPremium`', () => {

it('should be a function', () => {

const setUsersToPremium = funcs.setUsersToPremium;

assert.typeOf(setUsersToPremium, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`sumUserPostLikes`', () => {

it('should be a function', () => {

const sumUserPostLikes = funcs.sumUserPostLikes;

assert.typeOf(sumUserPostLikes, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 



describe('`addCalculateDiscountPriceMethod`', () => {

it('should be a function', () => {

const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;

assert.typeOf(addCalculateDiscountPriceMethod, 'function');

});

it('should multiple by ten', () => {

const multiplyByTen = funcs.multiplyByTen;

expect(multiplyByTen(10)).to.equal(100);

});

}); 





});
