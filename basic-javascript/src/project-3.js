const makeCat = (name, age) => {
  const newCat = {
    name,
    age,
    meow() {
      return 'Meow!';
    },
  };
  return newCat;
};

const addProperty = (object, property) => {
  object[property] = null;
  return object;
};

const invokeMethod = (object, method) => {
  object[method]();
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  return mysteryNumberObject.mysteryNumber * 5;
};

const deleteProperty = (object, property) => {
  delete object[property];
  return object;
};

const newUser = (name, email, password) => {
  const object = {
    name,
    email,
    password,
  };
  return object;
};

const hasEmail = (user) => {
  if (user.email) {
    return true;
  }
  return false;
};

const hasProperty = (object, property) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const verifyPassword = (user, password) => {
  if (user.password === password) {
    return true;
  }
  return false;
};

const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
};

const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
};

const setUsersToPremium = (users) => {
  for (let i = 0; i < users.length; i++) {
    users[i].isPremium = true;
  }
  return users;
};

const sumUserPostLikes = (user) => {
  let sumOfLikes = 0;
  for (let i = 0; i < user.posts.length; i++) {
    sumOfLikes += user.posts[i].likes;
  }
  return sumOfLikes;
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  const calculateDiscountPrice = () => {
    const discount = this.price * this.discountPercentage;
    return this.price - discount;
  };
  storeItem.calculateDiscountPrice = calculateDiscountPrice;
  return storeItem;
};

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
