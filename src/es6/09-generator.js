function* iterate(array) { // se usaa * para indicar que es un generator
  for (let value of array) {
    yield value;
    // yield es una palabra reservada que permite retornar un valor
  }
}

const it = iterate(['Oscar', 'Jess', 'Luis', 'David', 'Ana']);
console.log(it); // Object [Generator] {}
console.log(it.next()); // { value: 'Oscar', done: false }
console.log(it.next().value); // Jess
console.log(it.next().value); // Jess

// Cuando no hay más elementos en el objeto, devuelve undefined