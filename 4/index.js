"use strict";
//! Unknown type
// let a: unknown = 20.123;
// console.log((<number>a).toFixed(2));
// console.log((a as number).toFixed(2));
//! Union type
// let a: string | number = "web";
// a = 20;
// console.log(a);
//! Literal type
// let size : "sm" | "m" | "l" | "xl" | "2xl";
// size = "sm";
// size = "xl";
// size = "web" // xato!
//! Type aliases
//? 1
// type Sizes = "sm" | "m" | "l" | boolean;
// let size: Sizes = false;
// size = "m";
// size = "l";
//? 2
// type User = { login: "string"; password: number };
// let user1 = {login: "web", password: 12345};
//! Optional
// type User = { login: string; password: number; age?: number };
// let user1 = {login: "web", password: 1234, age: 15};
// let user2 = {login: "web", password: 1234};
