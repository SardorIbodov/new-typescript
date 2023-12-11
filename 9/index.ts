//!
// interface IPerson {
//   _name: string;
//   _age: number;
// }

// interface IStudent extends IPerson {
//   _course: number;
//   _group: string;
// }

// abstract class Person implements IPerson {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// class Student extends Person implements IStudent {
//   _course: number = 0;
//   _group: string = "";
//   constructor(name: string, age: number, course: number, group: string) {
//     super(name, age);
//     this._course = course;
//     this._group = group;
//   }
// }
// // let person: Person = new Person("Sardor", 20); // error
// let student: Student = new Student("Sardor", 20, 4, "210");

//!
interface IPerson {
  _name: string;
  _age: number;
  sayHi: () => string;
}

interface IStudent extends IPerson {
  _course: number;
  _group: string;
}

abstract class Person implements IPerson {
  _name: string = "";
  _age: number = 0;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  abstract sayHi(): string;
}
class Student extends Person implements IStudent {
  _course: number = 0;
  _group: string = "";
  constructor(name: string, age: number, course: number, group: string) {
    super(name, age);
    this._course = course;
    this._group = group;
  }
  sayHi(): string {
    return `Good morning`;
  }
}
// let person: Person = new Person("Sardor", 20); // error
let student: Student = new Student("Sardor", 20, 4, "210");
console.log(student.sayHi());
