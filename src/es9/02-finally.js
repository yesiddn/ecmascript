// PROMISES
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      // or false
      resolve('Hey!');
    } else {
      reject('Ups!');
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finaly'));
// finally se ejecuta siempre, sea resolve o reject este muestra un mensaje de que la promesa ha terminado de ejecutarse
// No se pone ; a la function porque van juntas, es decir:
//function().then().catch();
