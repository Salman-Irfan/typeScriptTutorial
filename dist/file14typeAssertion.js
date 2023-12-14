"use strict";
const btn = document.getElementById('btn');
// other way
// const btn =<HTMLElement> document.getElementById('btn');
// 3rd way !
// const btn = document.getElementById('btn')!;
console.log(btn);
btn.onclick;
const myImg = document.getElementById('my-img');
console.log(myImg);
const customerOne = {
    name: 'salman',
    email: 'salman@gmail.com',
};
const getName = () => {
    return customerOne['name'];
};
const getEmail = () => {
    return customerOne['email'];
};
const getCustomerData = (key) => {
    return customerOne[key];
};
