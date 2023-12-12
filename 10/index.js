"use strict";
//! Private
// class Person {
//   private _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   info(): string {
//     return `
//       Ismi: ${this._name}
//       Yoshi: ${this._age}
//     `;
//   }
// }
// let person = new Person("sardor", 20);
// console.log(person._name); // error
//! Protected
// class Person {
//   protected _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   info(): string {
//     return `
//       Ismi: ${this._name}
//       Yoshi: ${this._age}
//     `;
//   }
// }
// let person = new Person("sardor", 20);
// console.log(person._name); // error
// class Student extends Person {
//   _course: number = 0;
//   _group: string = "";
//   constructor(name: string, age: number, course: number, group: string) {
//     super(name, age);
//     this._course = course;
//     this._group = group;
//   }
//   info(): string {
//     return `
//       Ismi: ${this._name}
//       Yoshi: ${this._age}
//       Kursi: ${this._course}
//       Guruhi: ${this._group}
//     `;
//   }
// }
//! Readonly 
// class Person {
//   readonly _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   info(): string {
//     return `
//       Ismi: ${this._name}
//       Yoshi: ${this._age}
//     `;
//   }
// }
// let person = new Person("sardor", 20);
// console.log(person);
// person._name = "dilshod" // error
