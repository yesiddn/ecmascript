const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved!"));
const promise3 = new Promise((resolve, reject) => resolve("Resolved! Again!"));

// Promise.allSettled() returns an array of objects with the status and value of each promise
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log(results));