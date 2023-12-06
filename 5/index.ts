//! If we don't declare type, TS automatically set initial data-type
// let a = [2, 4, 6, 8, 10];
// a = ["ikki", "to'rt", "olti"]; //! error

//! Declaring an array
//? 1
// let a: number[] = [2, 4, 6, 8, 10]
//? 2
// let b: Array<number> = [2, 4, 6, 8, 10]

//! Array and union
// let a: (number | string)[] = [2, "to'rt", 6, "sakkiz"];
// let b: Array<string | boolean> = ["ikki", true, "olti", false];

//! Tuple
// let a: [number, string] = [1, "sardor"];
// let b: [number, boolean] = [1, true];
// let c: [number | string] = [1];
// let d: [number | string] = ["bir"];

//! Enums
//? 1
// enum Gender {
// 	Male,
// 	Female
// }
// console.log(Gender.Male); // 0
// console.log(Gender.Female); // 1
//? 2
// enum Languages {
// 	uz = 10,
// 	ru,
// 	en
// }
// console.log(Languages.uz); // 10
// console.log(Languages.ru); // 11
// console.log(Languages.en); // 12
//? 3
// enum Sizes {
//   s,
//   m,
//   l,
//   xl,
// }
// console.log(Sizes.s, Sizes.l); // 0, 2
// console.log(Sizes[0], Sizes[2]); // s, l
//? 4
// enum Courses {
// 	first = "birinchi",
// 	second = "ikkinchi",
// 	third = "uchinchi",
// 	fourth = "to'rtinchi"
// }
// console.log(Courses.first);



