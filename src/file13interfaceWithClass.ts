interface ProductType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
    getId: string;
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

    set setName(value: string) {
        this.name = value;
    }
}

const firstProduct = new Product("macbook", 50000, 35);
console.log(firstProduct.price);
console.log(firstProduct.getId);
firstProduct.setName = "macbook changed";
console.log(firstProduct.name);
