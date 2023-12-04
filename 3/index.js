//! In JS
// function pow(x, y) {
//   return x ** y;
// }
//! In TS
// function pow(x: number, y: number): number {
// 	return x ** y;
// }
//! In JS
// const add = (a, b) => a + b;
//! In TS
// const add = (a: number, b: number): number => a + b;
//! Void
// const sayHello = (name: string): void => {
//   console.log(`Hi ${name}`);
// };
//! Never (odatda error lar bilan ishlatiladi)
// const logError = (str: string): never => {
//   throw new Error(str);
// };
//! Signature function
// let sum: (x: number, y: number) => number;
// sum = (a, b) => a + b;
// console.log(sum(4, 6));
//! Function overload
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: string, age?: number) {
//   if (age === undefined) return name;
//   else return [name, age];
// }
