class Person {
  _name: string = "";
  _age: number = 0;
  constructor(name: string, age: number) {
    this._age = age;
    this._name = name;
  }
}
let person: Person = new Person("Sardor", 20);