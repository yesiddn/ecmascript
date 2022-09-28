// ANTES DE ES6
function newUser (name, age, country) {
  var name = name || 'Jess';
  var age = age || 17;
  var country = country || 'CO';
  console.log(name, age, country);
}

newUser();
newUser('Luis', 23, 'MX');

// ES6
function newAdmin (name = 'Jess', age = 27, country = 'CL') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 32, 'JP');