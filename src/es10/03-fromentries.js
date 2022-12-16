// FromEntries transforma un array de arrays en un objeto
const entries = new Map([["name", "Jess"], ["age", 17]]);
console.log(entries);
// Map(2) { 'name' => 'Jess', 'age' => 17 }
console.log(Object.fromEntries(entries));
// { name: 'Jess', age: 17 }