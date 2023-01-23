const users = {
  yesiddn: {
    country: 'CO'
  },
  ana: {
    country: 'MX'
  }
}

console.log(users.yesiddn.country);
// console.log(users.yesiddn.age); // undefined
// console.log(users.bebeloper.country); // TypeError: Cannot read property 'country' of undefined

// Optional chaining: evita que un error rompa el flujo de ejecución de la aplicación, de forma que si no existe el valor, se retorna undefined.
console.log(users?.bebeloper?.country); // undefined