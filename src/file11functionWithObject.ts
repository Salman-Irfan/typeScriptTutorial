interface Product {
    name: string;
    stock: number;
    price: number;
    photo: string;
    readonly id: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product)=>{
    console.log(product)
    console.log(product.name)
    product.name = 'changed'
    // product.id = 'can't be changed'
}

const productOne:Product = {
    name: 'macbook',
    stock: 100,
    price: 50000,
    photo: 'photo-url',
    id: '123456780'
}

getData(productOne)