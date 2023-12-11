"use strict";
//!
// interface IPerson {
//   _name: string;
//   _age: number;
// }
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
}
class Student extends Person {
    constructor(name, age, course, group) {
        super(name, age);
        this._course = 0;
        this._group = "";
        this._course = course;
        this._group = group;
    }
    sayHi() {
        return `Good morning`;
    }
}
// let person: Person = new Person("Sardor", 20); // error
let student = new Student("Sardor", 20, 4, "210");
console.log(student.sayHi());
