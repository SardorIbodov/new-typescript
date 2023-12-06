//! Declaring class
// class Person {
// 	_name: string = "Sardor";
// 	_age: number = 20;
// };
// let sardor: Person = new Person();
// console.log(sardor);

//! Constructor
// class Person {
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   _name: string = "Sardor";
//   _age: number = 20;
// }
// let nodir: Person = new Person("Nodir", 23);
// console.log(nodir);

//! Methods
// class Person {
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   _name: string = "Sardor";
//   _age: number = 20;
//   info(): string {
//     return `${this._name} - ${this._age} yoshda`;
//   }
// }
// let sardor: Person = new Person("Sardor", 20);
// console.log(sardor.info());

//! Static variable and function
// class Person {
//   static info: string = "This class about Person";
//   static getInfo(): string {
//     return this.info;
//   }
// }

//! Getter vs Setter
// class Person {
//   _name: string = "Sardor";
//   _age: number = 20;
//   get info(): string {
//     return `name: ${this._name}`;
//   }
//   set setAge(newAge: number) {
//     this._age = newAge;
//   }
// }
// let sardor = new Person();
// console.log(sardor.info);
// sardor.setAge = 18;
// console.log(sardor._age);


