"use strict";
const getData = (product) => {
    console.log(product);
    console.log(product.name);
    product.name = 'changed';
    // product.id = 'can't be changed'
};
const productOne = {
    name: 'macbook',
    stock: 100,
    price: 50000,
    photo: 'photo-url',
    id: '123456780'
};
getData(productOne);
