// THIS
class User {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()}, ${this.name}!`;
  }
}

const ana = new User('Ana');
console.log(ana.greeting());