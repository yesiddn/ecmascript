// flat elimina los niveles de profundidad de un array
const array = [1, 2, 3, 4, [5, 6, 7, [0], 8], 9];
console.log(array.flat(2));

// flatMap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, [value * 2]]));
// return [1, [2], 2, [4], 3, [6], 4, [8], 5, [10]]

console.log(array2.flatMap(value => [value, value * 2]));
// return [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]