async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log('Hello');
// Hello
// 1
// 2

async function arrayOfNames(array) {
  for await (let name of array) {
    console.log(name);
  }
}

const names = arrayOfNames(['Luis', 'Juan', 'Pedro']);
console.log('After');
// After
// Luis
// Juan
// Pedro