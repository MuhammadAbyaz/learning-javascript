class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Animal {
  constructor(name, age, livesLeft = 9) {
    this.name = name;
    this.age = age;
    super(name, age);
  }
  meow() {
    return `${this.name} is meowing`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}
