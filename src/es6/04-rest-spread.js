// ARRAYS DESTRUCTURING
let fruits = ['apple', 'banana', 'orange'];
let [a, b, c] = fruits;
console.log(a, b, c);

// OBJECTS DESTRUCTURING
let user = { userName: 'Jess', age: 17 };
let { userName, age } = user;
console.log(userName, age);

// SPREAD OPERATOR
let person = { name: 'Jess', age: 17 };
let country = 'CO';

let data = { id: 1, ...person, country };
console.log(data);

// REST OPERATOR
function sum(num1, ...values) {
  console.log(values);
  console.log(num1 + values[0]);
  return values[0];
}

sum(1, 2, 3, 4, 5);