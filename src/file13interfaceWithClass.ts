interface ProductType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
    getId:  string;
}

class Product implements ProductType {
    private _id: string = String(Math.random() * 1000);

    // constructor
    constructor(
        public name: string,
        public price: number,
        public stock: number
    ) {}

    get getId(): string {
        return this._id;
    }
}

const firstProduct = new Product("macbook", 50000, 35);
console.log(firstProduct.price);
console.log(firstProduct.getId);
