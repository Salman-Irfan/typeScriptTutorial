"use strict";
class Product {
    // constructor
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this._id = String(Math.random() * 1000);
    }
    get getId() {
        return this._id;
    }
}
const firstProduct = new Product("macbook", 50000, 35);
console.log(firstProduct.price);
console.log(firstProduct.getId);
