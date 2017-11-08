const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const funcs = require('../src/project-3');
/* eslint-disable no-unused-expressions */
describe('Project-3 Functions', () => {
  describe('cat functions', () => {
    const makeCat = funcs.makeCat;
    const cat = makeCat('Gus', 7);
    describe('makeCat', () => {
      it('should be a function', () => {
        assert.typeOf(makeCat, 'function');
      });
      it('cat should have name, age, meow properties', () => {
        expect(cat).to.haveOwnProperty('name');
        assert.typeOf(cat.name, 'string');
        expect(cat).to.haveOwnProperty('age');
        assert.typeOf(cat.age, 'number');
        expect(cat).to.haveOwnProperty('meow');
        assert.typeOf(cat.meow, 'function');
      });
    });

    describe('addProperty', () => {
      const addProperty = funcs.addProperty;
      const newCat = Object.assign({}, cat);
      addProperty(newCat, 'rating');
      it('should be a function', () => {
        assert.typeOf(addProperty, 'function');
      });
      it('newCat should have property "rating"', () => {
        expect(newCat).to.haveOwnProperty('rating');
        expect(newCat.rating).to.eq(null);
      });
    });
    describe('deleteProperty', () => {
      const deleteProperty = funcs.deleteProperty;

      it('should be a function', () => {
        assert.typeOf(deleteProperty, 'function');
      });
      it('newCat should have property "rating"', () => {
        const newCat = Object.assign({}, cat);
        deleteProperty(newCat, 'age');
        expect(newCat).to.not.haveOwnProperty('age');
        expect(newCat.name).to.eq('Gus');
      });
    });
  });
  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('invokeMethod should call y on object x', () => {
      const callBack = sinon.spy();
      const testObject = {
        spy: callBack
      };
      invokeMethod(testObject, 'spy');
      expect(callBack).to.have.been.calledOnce;
    });
  });
  describe('multiplyMysteryNumberByFive', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('multiplyMysteryNumberByFive should return property mysteryNumber * 5', () => {
      const testObject = {
        mysteryNumber: 2
      };
      expect(multiplyMysteryNumberByFive(testObject)).to.be.eq(10);
    });
  });
  describe('user functions', () => {
    const newUser = funcs.newUser;
    const user = newUser('Mark', 'mark.c.oliver@gmail.com', 'testMarkPassword');
    describe('newUser', () => {
      it('should be a function', () => {
        assert.typeOf(newUser, 'function');
      });
      it('user should have name, email, and password properties', () => {
        expect(user).to.haveOwnProperty('name');
        assert.typeOf(user.name, 'string');
        expect(user).to.haveOwnProperty('email');
        assert.typeOf(user.email, 'string');
        expect(user).to.haveOwnProperty('password');
        assert.typeOf(user.password, 'string');
      });
      describe('hasEmail', () => {
        const hasEmail = funcs.hasEmail;
        it('should be a function', () => {
          assert.typeOf(hasEmail, 'function');
        });
        const testObject = {
          x: 0
        };
        it('should return true for email property of user', () => {
          expect(hasEmail(user)).to.be.true;
          expect(hasEmail(testObject)).to.be.false;
        });
      });
      describe('hasProperty', () => {
        const hasProperty = funcs.hasProperty;
        it('should be a function', () => {
          assert.typeOf(hasProperty, 'function');
        });
        it('should return true for email property of user', () => {
          expect(hasProperty(user, 'email')).to.be.true;
          expect(hasProperty(user, 'dummy')).to.be.false;
        });
      });
      describe('verifyPassword', () => {
        const verifyPassword = funcs.verifyPassword;
        it('should be a function', () => {
          assert.typeOf(verifyPassword, 'function');
        });
        it('should return true for testMarkPassword', () => {
          expect(verifyPassword(user, 'testMarkPassword')).to.be.true;
          expect(verifyPassword(user, 'dummy')).to.be.false;
        });
      });
      describe('updatePassword', () => {
        const updatePassword = funcs.updatePassword;
        it('should be a function', () => {
          assert.typeOf(updatePassword, 'function');
        });
        it('should update user password', () => {
          const updateUser = Object.assign({}, user);
          updatePassword(updateUser, 'newMarkPassword');
          expect(updateUser.password).to.eq('newMarkPassword');
        });
      });
      describe('addFriend', () => {
        const addFriend = funcs.addFriend;
        it('should be a function', () => {
          assert.typeOf(addFriend, 'function');
        });
        it('should add a friend to user', () => {
          const updateUser = Object.assign({}, user);
          updateUser.friends = [];
          addFriend(updateUser, 'testFriend');
          const testObject = {
            friends: []
          };
          expect(updateUser.friends).to.contain('testFriend');
          expect(testObject.friends).to.not.contain('testFriend');
        });
      });
      describe('users array functions', () => {
        const users = [
          Object.assign({}, user),
          newUser('Glen', 'glen@email', 'testGlenPassword')
        ];
        describe('setUsersToPremium', () => {
          const setUsersToPremium = funcs.setUsersToPremium;
          it('should be a function', () => {
            assert.typeOf(setUsersToPremium, 'function');
          });
          it('should set isPremium to true for all elements in an array', () => {
            setUsersToPremium(users);
            expect(users[0].isPremium).to.be.true;
            expect(users[1].isPremium).to.be.true;
          });
        });
        describe('sumUserPostLikes', () => {
          const sumUserPostLikes = funcs.sumUserPostLikes;
          it('should be a function', () => {
            assert.typeOf(sumUserPostLikes, 'function');
          });
          it('should sum all user likes', () => {
            const likeUser = users[0];
            likeUser.posts = [{ likes: 1 }, { likes: 2 }];
            expect(sumUserPostLikes(likeUser)).to.be.eq(3);
          });
        });
      });
      describe('addCalculateDiscountPriceMethod', () => {
        const addCalculateDiscountPriceMethod =
          funcs.addCalculateDiscountPriceMethod;
        it('should be a function', () => {
          assert.typeOf(addCalculateDiscountPriceMethod, 'function');
        });
        it('should return true for teaddCalculateDiscountPriceMethodstMarkPassword', () => {
          const discountObject = {
            discountPercentage: 0.10,
            price: 5
          };
          const discountObjectWithDiscount = addCalculateDiscountPriceMethod(discountObject);
          expect(discountObjectWithDiscount.calculateDiscountPrice()).to.eq(4.5);
        });
      });
    });
  });
});
