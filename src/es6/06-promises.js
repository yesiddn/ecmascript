// PROMISES
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) { // or false
      resolve('Hey!');
    } else {
      reject('Ups!');
    }
  });
}

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error));
  // No se pone ; a la function porque van juntas, es decir:
  //function().then().catch();