"use strict";
//! Generics in classes
// class List<T> {
//   elements: T[] = [];
//   add(element: T): void {
//     this.elements.push(element);
//   }
// }
// let list = new List<number>();
// list.add(1);
// list.add(3);
// list.add(5);
// console.log(list);
// let list2 = new List<string>();
// list2.add("one");
// list2.add("three");
// list2.add("five");
// console.log(list2);
//! Generics with interfaces
// interface IList<T> {
//   elements: T[];
//   add(element: T): void;
//   // new (year: T): void; // constructor
// }
// class List implements IList<string> {
//   elements: string[] = [];
// 	add(element: string): void {
// 		this.elements.push(element);
// 	}
// }
// let list = new List();
