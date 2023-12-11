"use strict";
//! Inheritance
// class Person {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// class Student extends Person {
//   _group: string = "";
//   _course: number = 0;
//   constructor(name: string, age: number, group: string, course: number) {
//     super(name, age);
//     this._group = group;
//     this._course = course;
//   }
// }
// let sardor = new Student("Sardor", 20, "210", 4);
// console.log(sardor);
//! Methods
// class Person {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   sayHello(): string {
//     return `Assalomu alaykum, mening ismim ${this._name}`;
//   }
// }
// class Student extends Person {
//   _group: string = "";
//   _course: number = 0;
//   constructor(name: string, age: number, group: string, course: number) {
//     super(name, age);
//     this._group = group;
//     this._course = course;
//   }
//   sayHello(): string {
//     let parentMethod = super.sayHello();
//     return `${parentMethod}, men ${this._course}-kursning ${this._group}-guruhida o'qiyman`;
//   }
// }
// let sardor = new Student("Sardor", 20, "210", 4);
// console.log(sardor.sayHello());
