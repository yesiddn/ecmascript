// A try/catch statement is used to handle errors in JavaScript. Antes de ES10
try {
  hello();
} catch (error) {
  console.log(error);
}

// After ES10 (optional catch binding) - you can use an error personalized
try {
  anotherFunction();
} catch {
  console.log("Error");
}