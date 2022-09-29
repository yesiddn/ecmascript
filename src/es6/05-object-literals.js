// ENHANCED OBJECT LITERALS
function newUser(name, age, country, uId) {
  return {
    // name: name, // Antes de ES6
    // Si el nombre de la propiedad es igual al nombre de la variable, se puede usar la siguiente sintaxis
    name, // ES6
    age,
    country,
    
    // Si se quiere cambiar el nombre de la propiedad, se puede usar la siguiente sintaxis
    id: uId
  };
}

console.log(newUser('Jess', 30, 'CO', 1));