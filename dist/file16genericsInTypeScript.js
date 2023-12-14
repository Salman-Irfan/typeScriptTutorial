"use strict";
// generics
const returnType = (value) => {
    let text = value;
    return value;
};
const res = returnType(20);
const res2 = returnType("20");
const res3 = returnType([20]);
const res4 = returnType(true);
console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);
