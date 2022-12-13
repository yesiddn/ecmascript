const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Async!!!'), 3000)
      : reject(new Error('Test Error'));
  });
}; // promise

const anotherFn = async () => { // function async
  const somthing = await fnAsync(); // await a la respuesta de la promesa
  console.log(somthing);
  console.log('Hello!');
};

console.log('Before');
anotherFn();
console.log('After');
// Before
// After
// Async!!!
// Hello!