//! Interface
// interface IPerson {
//   _name: string;
//   _age: number;
//   sayHello: () => string;
// }
// class Person implements IPerson {
//   _name: string = "";
//   _age: number = 0;
//   sayHello(): string {
//     return `Assalomu alaykum, mening ismim ${this._name}`;
//   }
// }

//! Type vs Interface
// type IPerson = {
//   _name: string;
//   _age: number;
//   sayHello: () => string;
// }
// type IPerson = {
//   sayHello: () => string;
// } // Will be an error

// interface IPerson {
//   _name: string;
//   _age: number;
// }
// interface IPerson {
//   sayHello: () => string;
// }
// class Person implements IPerson {
//   _name: string = "";
//   _age: number = 0;
//   sayHello(): string {
//     return `Assalomu alaykum, mening ismim ${this._name}`;
//   }
// }

//! Inheritance in interface
// interface IPersonMethod {
//   sayHello: () => string;
// }
// interface IPerson extends IPersonMethod {
//   _name: string;
//   _age: number;
// }
// class Person implements IPerson {
//   _name: string = "";
//   _age: number = 0;
//   sayHello(): string {
//     return `Assalomu alaykum, mening ismim ${this._name}`;
//   }
// }
