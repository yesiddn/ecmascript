// String padding: rellena una cadena con una cadena dada hasta que alcance la longitud dada
const string = 'Hello';

// padStart: rellena la cadena con el número de caracteres especificados al principio de la cadena
console.log(string.padStart(7, 'hi'));
// Output: 'hiHello'

console.log(string.padStart(5, 'hi'));
// Output: 'Hello'

console.log(string.padStart(8, 'hi'));
// Output: 'hihHello'

console.log(string.padStart(10, 'hi'));
// Output: 'hihihHello'

console.log(string.padStart(6, '-'));
// Output: '-Hello'

// padEnd: rellena la cadena con el número de caracteres especificados al final de la cadena
console.log(string.padEnd(7, 'hi'));
// Output: 'Hellohi'

console.log(string.padEnd(9, 'hi'));
// Output: 'Hellohihi'