export default class Animal {
  name;
  age;
  sound;
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.soud = soud;
  }
}
export class dog extends Animal {
  constructor(name, age) {
    super(name, age, "bark");
  }
}
export class cat extends Animal {
  constructor(name, age) {
    super(name, age, "meow");
  }
}
