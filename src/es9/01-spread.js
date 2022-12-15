// spread operator in objects
const user = { username: 'jess', age: 17, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);