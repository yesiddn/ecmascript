// GETTERS AND SETTERS
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Para identificar que un metodo ahora es un metodo privado se usa el simbolo # y solo pueden ser accedidos dentro de la misma clase.
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()}, ${this.name}!`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }
}

const bebeloper = new User('Bebeloper', 17);
console.log(bebeloper.uAge);
console.log((bebeloper.uAge = 18));
