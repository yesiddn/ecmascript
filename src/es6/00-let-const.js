// Declarar -> lastName
// Asignar -> 'Smith'
var lastName = 'Smith';

// Reasignar -> 'Doe'
lastName = 'Doe';

console.log(lastName);

let fruite = 'apple';
fruite = 'banana';
console.log(fruite);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'apple'; // function scope
    let fruit2 = 'banana'; // block scope
    const fruit3 = 'kiwi'; // block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();