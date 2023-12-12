"use strict";
//! Generics
// type A<T> = T;
// type B = A<string>;
// type C = A<number>;
// type D = A<boolean>;
//! Array with Generics
// type MyArray<T> = T;
// let arr: MyArray<string[]> = ["web", "brain", "academy"]
//! Function with Generics
function echo(x) {
    return x;
}
let result = echo("hello");
console.log(result);
