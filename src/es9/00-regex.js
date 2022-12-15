// Capturar valores que se encuentran en una expresión regular
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2018-04-20');
console.table(matchers);
// Este método devuelve un array con los valores que se encuentran en la expresión regular
// [ '2018-04-20', '2018', '04', '20', index: 0, input: '2018-04-20' ]