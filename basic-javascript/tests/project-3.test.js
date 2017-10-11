const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-3');

chai.use(sinonChai);

describe('Project-3 Functions', () => {
  describe('`makeCat`', () => {
    it('should be a function', () => {
      expect(funcs.makeCat).to.be.a('function');
    });
    it('should return an object with the correct properties', () => {
      const newCat = funcs.makeCat('Fluffy', 5);
      expect(newCat.name).to.equal('Fluffy');
      expect(newCat.age).to.equal(5);
      expect(newCat.meow()).to.equal('Meow!');
    });
    it('should return an object', () => {
      expect(funcs.makeCat('Fluffy', 5)).to.be.an('object');
    });
  });

  describe('`addProperty`', () => {
    it('should be a function', () => {
      expect(funcs.addProperty).to.be.a('function');
    });
    it('should add a property to an object', () => {
      const cat = {
        name: 'Fluffy',
        age: 5
      };
      expect(funcs.addProperty(cat, 'color')).to.have.ownPropertyDescriptor('color');
    });
    it('should return an object', () => {
      const cat = {
        name: 'Fluffy',
        age: 5
      };
      expect(funcs.addProperty(cat, 'color')).to.be.an('object');
    });
  });

  describe('`invokeMethod`', () => {
    it('should be a function', () => {
      expect(funcs.invokeMethod).to.be.a('function');
    });
    it('should invoke a method', () => {
      const obj = {};
      const callback = sinon.spy();
      obj.cb = callback;
      funcs.invokeMethod(obj, 'cb');
      funcs.invokeMethod(obj, 'cb');
      expect(obj.cb).to.have.callCount(2);
    });
  });

  describe('`multiplyMysteryNumberByFive`', () => {
    it('should be a function', () => {
      expect(funcs.multiplyMysteryNumberByFive).to.be.a('function');
    });
    it('should return 25 when given the object { mysteryNumber: 5 }', () => {
      expect(funcs.multiplyMysteryNumberByFive({ mysteryNumber: 5 })).to.equal(25);
    });
    it('should return a number', () => {
      expect(funcs.multiplyMysteryNumberByFive({ mysteryNumber: 5 })).to.be.a('number');
    });
  });

  describe('`deleteProperty`', () => {
    it('should be a function', () => {
      expect(funcs.deleteProperty).to.be.a('function');
    });
    it('should delete a property from an object', () => {
      const cat = {
        name: 'Fluffy',
        age: 5
      };
      expect(funcs.deleteProperty(cat, 'name')).to.not.have.ownPropertyDescriptor('name');
    });
    it('should return an object', () => {
      const cat = {
        name: 'Fluffy',
        age: 5
      };
      expect(funcs.deleteProperty(cat, 'name')).to.be.an('object');
    });
  });

  describe('`newUser`', () => {
    it('should be a function', () => {
      expect(funcs.newUser).to.be.a('function');
    });
    it('should return an object with the correct properties', () => {
      const user = funcs.newUser('bob', 'bob@gmail.com', 'secret');
      expect(user.name).to.equal('bob');
      expect(user.email).to.equal('bob@gmail.com');
      expect(user.password).to.equal('secret');
    });
    it('should return an object', () => {
      expect(funcs.newUser('bob', 'bob@gmail.com', 'secret')).to.be.an('object');
    });
  });

  describe('`hasEmail`', () => {
    it('should be a function', () => {
      expect(funcs.hasEmail).to.be.a('function');
    });
    it('should return true if the object has an email property', () => {
      expect(funcs.hasEmail({ email: 'bob@gmail.com' })).to.equal(true);
    });
    it('should return false if the object does not have an email property', () => {
      expect(funcs.hasEmail({ name: 'bob' })).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.hasEmail({ email: 'bob@gmail.com' })).to.be.a('boolean');
    });
  });

  describe('`verifyPassword`', () => {
    it('should be a function', () => {
      expect(funcs.verifyPassword).to.be.a('function');
    });
    it('should return true if given the correct password', () => {
      const user = {
        name: 'bob',
        password: 'secret'
      };
      expect(funcs.verifyPassword(user, 'secret')).to.equal(true);
    });
    it('should return false if given the wrong password', () => {
      const user = {
        name: 'bob',
        password: 'secret'
      };
      expect(funcs.verifyPassword(user, 'hunter2')).to.equal(false);
    });
    it('should return a boolean', () => {
      const user = {
        name: 'bob',
        password: 'secret'
      };
      expect(funcs.verifyPassword(user, 'secret')).to.be.a('boolean');
    });
  });

  describe('`updatePassword`', () => {
    it('should be a function', () => {
      expect(funcs.updatePassword).to.be.a('function');
    });
    it('should update the password property', () => {
      const user = { password: 'secret' };
      funcs.updatePassword(user, 'hunter2');
      expect(user.password).to.equal('hunter2');
    });
    it('should return an object', () => {
      expect(funcs.updatePassword({ password: 'secret' }, 'hunter2')).to.be.an('object');
    });
  });

  describe('`addFriend`', () => {
    it('should be a function', () => {
      expect(funcs.addFriend).to.be.a('function');
    });
    it('should add the provided friend to the friends property', () => {
      const user = { friends: ['Jon', 'Arya'] };
      funcs.addFriend(user, 'Sansa');
      expect(user.friends).to.eql(['Jon', 'Arya', 'Sansa']);
    });
    it('should return an object', () => {
      expect(funcs.addFriend({ friends: ['Jon', 'Arya'] }, 'Sansa')).to.be.an('object');
    });
  });

  describe('`setUsersToPremium`', () => {
    it('should be a function', () => {
      expect(funcs.setUsersToPremium).to.be.a('function');
    });
    it('should set the premium status of all users to true', () => {
      const users = [{ isPremium: false }, { isPremium: false }, { isPremium: true }];
      funcs.setUsersToPremium(users);
      users.forEach((user) => {
        expect(user.isPremium).to.equal(true);
      });
    });
    it('should return an array', () => {
      const users = [{ isPremium: false }, { isPremium: false }, { isPremium: true }];
      expect(funcs.setUsersToPremium(users)).to.be.an('array');
    });
  });

  describe('`sumUserPostLikes`', () => {
    it('should be a function', () => {
      expect(funcs.sumUserPostLikes).to.be.a('function');
    });
    it('should correctly add the post likes for a user', () => {
      const user = {
        posts: [{ likes: 5 }, { likes: 10 }, { likes: 15 }]
      };
      expect(funcs.sumUserPostLikes(user)).to.equal(30);
    });
    it('should return a number', () => {
      const user = {
        posts: [{ likes: 5 }, { likes: 10 }, { likes: 15 }]
      };
      expect(funcs.sumUserPostLikes(user)).to.be.a('number');
    });
  });

  describe('`addCalculateDiscountPriceMethod`', () => {
    it('should be a function', () => {
      expect(funcs.addCalculateDiscountPriceMethod).to.be.a('function');
    });
    it('should add the calculateDiscountPrice method to an object', () => {
      const item = {
        price: 100,
        discountPercentage: 0.05
      };
      expect(funcs.addCalculateDiscountPriceMethod(item)).to.have.ownPropertyDescriptor('calculateDiscountPrice');
    });
    it('should return an obecjt', () => {
      const item = {
        price: 100,
        discountPercentage: 0.05
      };
      expect(funcs.addCalculateDiscountPriceMethod(item)).to.be.an('object');
    });
  });
});
