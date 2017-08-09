const users = [
	{ id: 1, first_name: 'Tilly', last_name: 'Bradborne', email: 'tbradborne0@wordpress.org' },
	{ id: 2, first_name: 'Lesli', last_name: 'Gammett', email: 'lgammett1@xinhuanet.com' },
	{ id: 3, first_name: 'Sylvester', last_name: 'Aston', email: 'saston2@wikipedia.org' },
	{ id: 4, first_name: 'Stevana', last_name: 'Heimes', email: 'sheimes3@cdbaby.com' },
	{ id: 5, first_name: 'Benny', last_name: 'Ziem', email: 'bziem4@biblegateway.com' },
	{ id: 6, first_name: 'Russ', last_name: 'Winser', email: 'rwinser5@dagondesign.com' },
	{ id: 7, first_name: 'Koren', last_name: 'Lie', email: 'klie6@hao123.com' },
	{ id: 8, first_name: 'Jeramie', last_name: 'Olle', email: 'jolle7@chicagotribune.com' },
	{ id: 9, first_name: 'Ginelle', last_name: 'Rappaport', email: 'grappaport8@shareasale.com' },
	{ id: 10, first_name: 'Culver', last_name: 'Hairsnape', email: 'chairsnape9@go.com' }
];

const peopleGetter = () => {
  const myUsers = users;
  return myUsers;
};

const peopleSetter = (obj) => {
  const users = users;
  users.push(obj);
  return users;
};


module.exports = {
  peopleGetter,
  peopleSetter
};
