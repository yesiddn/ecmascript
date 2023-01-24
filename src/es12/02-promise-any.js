const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved!"));
const promise3 = new Promise((resolve, reject) => resolve("Resolved! Again!"));

// Retorna la primer promesa que se resuelva de forma satisfactoria
Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response)); // Resolved!